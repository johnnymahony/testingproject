window.cpexCMPVersion = '8.4';

import { TCString } from '@iabtcf/core';

var cmpDebug = window.location.href.indexOf("debug") > -1;
var selfTest = window.location.href.indexOf("selfTest") > -1;
var cpexPortalRef = null;
var tcfApiLocatiorRef = null;
var oneTrustCMPLoaded = false;
var loadCMPCalled = false;
var isSyncInitialized = false;

var pixelList = [
  'https://a.slunecnice.cz/slunecnice/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://a.denik.cz/vlm/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://a.1gr.cz/mafra/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://a.centrum.cz/cent/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://a.csfd.cz/csfd/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://a.iprima.cz/iprima/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpex&gdpr_consent=%CONSENT%&gdpr=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexmafra&gdpr_consent=%CONSENT%&gdpr=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexcsfd&gdpr_consent=%CONSENT%&gdpr=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexvlm&gdpr_consent=%CONSENT%&gdpr=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexiinfo&gdpr_consent=%CONSENT%&gdpr=1',
  'https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexiprima&gdpr_consent=%CONSENT%&gdpr=1'
]

/**
 * UTILS
 */

function cpexLog () {
  if (cmpDebug) { console.log.apply(this, arguments) }
}

function getDomainName () {
  var parts = document.domain.split('.'), len = parts.length;
  return parts[len - 2] + '.' + parts[len - 1];
}

function getCookie (name) {
  return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
}

function setCookie (name, content) {
  var date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  if (!content) { content = date.toISOString() }
  var domainName = '.' + getDomainName(); // onetrust saves domains prefixed with a dot, not sure why. have to conform to it
  document.cookie = name + '=' + content + '; path=/; domain=' + domainName + '; expires=' + date.toUTCString() + '; SameSite=None; Secure;';
  cpexLog('CMP SYNC: saving 1st party cookie for ' + name + ', at domain: ' + domainName);
}

function parseConsents (consents, filter) {
  if (consents.size > 0) {
    var obj = {}
    consents.forEach(function (hasConsent, vendorId) {
      if (Array.isArray(filter)) {
        filter.forEach(function (vendorFilterId) {
          if (vendorFilterId === vendorId) {
            obj[vendorId] = hasConsent
          }
        })
      } else {
        obj[vendorId] = hasConsent
      }
    })
    return obj
  } else {
    return false
  }
}

function addConsentPixel (url) {
  const el = document.createElement("img");
  el.setAttribute("src", url);
  el.style.width = '1px';
  el.style.height = '1px';
  el.style.position = 'absolute';
  el.style.bottom = '0px';
  el.style.right = '0px';
  el.style.border = 'none';
  document.body.appendChild(el);
}


/**
 * HELPERS
 */

// specifically avoids returning consent data if there are no vendors, to work around OneTrust TCF API returning tcstring for 'deny all'
// no purposes is fine, that means an iffirmative action by the user
window.getConsentIfNotDenied = function () {
  var consent;
  __tcfapi('getTCData', 2, function (data, success) {
    if (success === false) { return }
    if (data.vendor.consents) {
      if (Object.keys(data.vendor.consents).length > 0) {
        consent = data
      }
    }
  })
  return consent
}

// work around OneTrust TCF API returning tcstring for 'deny all'
window.isConsentPresent = function () {
  var isConsentPresent;
  __tcfapi('getTCData', 2, function (data, success) {
    if (success === false) { return false }
    if (data.vendor.consents && data.purpose.consents) {
      isConsentPresent = Object.keys(data.vendor.consents).length > 0 && Object.keys(data.purpose.consents).length > 0
    }
  })
  return isConsentPresent
}

// used to satisfy ozone (prebid server) requirement that it is not used without having ozone consent
window.isConsentPresentFor = function (vendorArray) {
  var isConsentPresent = true;
  __tcfapi('getTCData', 2, function (data, success) {
    if (success === false) { return false }
    vendorArray.forEach(function (vendorId) {
      if (data.vendor.consents[vendorId] === false) {
        isConsentPresent = false
      }
    })
  })
  return isConsentPresent
}

/**
 * CORE
 */

function addIframe () {
  cpexLog('CMP SYNC: adding portal iframe');
  var iframe = document.createElement('iframe');
  var debugParam = cmpDebug ? '?debug=true' : '';
  iframe.src = 'https://cdn.cpex.cz/cmp/v2/portal.html' + debugParam;
  iframe.name = 'CrossDomainConsent';
  iframe.id = 'cpex-portal';
  iframe.style.position = 'absolute';
  iframe.style.bottom = '0px';
  iframe.style.right = '0px';
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);
  return iframe;
}

function initSync () {
  if (isSyncInitialized === false) {
    isSyncInitialized = true;
    cpexLog('CMP SYNC: Init: page ready, adding iframes');

    /** COOKIE SYNC */
    cpexPortalRef = addIframe();
    cpexPortalRef.addEventListener('load', importCookies);

    /** TCF API LOCATOR - if not present, add tcf locator iFrame, to conform to Iab specs */
    if (window.frames['__tcfapiLocator'] === undefined) {
      tcfApiLocatiorRef = window.document.createElement('iframe');
      tcfApiLocatiorRef.style.cssText = 'display:none';
      tcfApiLocatiorRef.name = '__tcfapiLocator';
      tcfApiLocatiorRef.setAttribute('title', 'TCF Locator')
      window.document.body.appendChild(tcfApiLocatiorRef);
    }
  }
}

/**
 * TCF STUB
 * Not fully compliant with Iab yet.
 * Returns consent string from cookie, instead of waiting for full TCF.
 * Also listens for requests from iframes.
 */

var tcfQueue = [];

window.__tcfapi = function (method, version, callback, filter) {
  function returnTCData () {
    var consent = getCookie('eupubconsent-v2');

    if (consent) {
      // string decoding requires bundling in @iabtcf/core
      // it's required to satisfy some google ads tcf calls, which have checks for this data
      try {
        var tcModel = TCString.decode(consent);
        var purposes = parseConsents(tcModel.purposeConsents);
        var vendors = parseConsents(tcModel.vendorConsents, filter);
      } catch (e) { console.warn('CMP Consent parsing have failed', e) }

      if (purposes && vendors) {
        callback({
          cmpId: 28,
          tcString: consent, // consent found
          tcfPolicyVersion: 2,
          eventStatus: 'tcloaded',
          gdprApplies: true,
          cmpStatus: 'loaded',
          purpose: { consents: purposes },
          vendor: { consents: vendors },
          listenerId: 999999 // not needed, there is no real listener implemented. Google requires this id
        }, true); // success
        return
      }
    }
    // consent not found
    // for czech regulatory environment we can default to no response in case of no explicit consent
    callback({
      cmpId: 28,
      tcfPolicyVersion: 2,
      cmpStatus: 'loaded',
      eventStatus: 'tcloaded',
      listenerId: 999999 // not needed, there is no real listener implemented. Google requires this id
    }, false); // failure
  }

  function returnPing () {
    callback({
      gdprApplies: true,
      cmpLoaded: true,
      cmpStatus: 'loaded',
      displayStatus: 'hidden',
      apiVersion: '2.0',
      cmpId: 28,
      gvlVersion: 55,
      tcfPolicyVersion: 2
    })
  }

  // 2DO: implement real listener for change events
  switch (method) {
    case 'ping': returnPing(); break
    case 'getTCData': returnTCData(); break
    case 'addEventListener': returnTCData(); break
    default: return tcfQueue
  }
}

// Emitting a custom event indicating that TCF API is loaded
window.__tcfapi('getTCData', 2, function (data) {
  window.dispatchEvent(new CustomEvent('cpexCMPLoaded', {
    detail: {
      consent: data.tcString,
      data: data
    }
  }))
})

/**
 * SELF TEST
 */

var counter = 0;
if (selfTest) {
  window.cpexCMPSelfTestInterval = setInterval(function () {
    counter++;
    window.__tcfapi('getTCData', 2, function (data) {
      console.log('CMP eventStatus: ' + data.eventStatus);
    })
    if (counter > 400) {
      clearInterval(window.cpexCMPSelfTestInterval);
    }
  }, 50)
}


/** PIXELS TO SAS AND RUBICON */

function fireConsentPixels (ignoreTimer) {
  cpexLog('CMP SYNC: trying to fire consent pixels');
  // if 24 hours passed, fire consent pixels
  var pixelsLastFired = localStorage.getItem("pixelsLastFired") || 0;
  var timestamp = Date.now();
  var intervalMs = 24 * 60 * 60 * 1000;
  if (timestamp - intervalMs > pixelsLastFired || ignoreTimer) {
    var consent = getConsentIfNotDenied();
    if (consent) {
      pixelList.forEach(function (url) {
        const finalUrl = url.replace("%CONSENT%", consent.tcString);
        addConsentPixel(finalUrl);
      })
      localStorage.setItem("pixelsLastFired", timestamp);
      cpexLog('CMP SYNC: added consent pixels');
    }
  } else {
    cpexLog('CMP SYNC: 24 hours have not yet passed, based on pixelsLastFired in local storage');
  }
}

/**
 * COOKIE SYNC
 */

// requests cookies from third party domain
function importCookies () {
  cpexLog('CMP SYNC: requesting 3rd party cookies');
  cpexPortalRef.contentWindow.postMessage({ name: 'cpexCookieRead' }, '*');
}

// sends cookies to third party domain
function exportCookies () {
  if (window.cpexCMPNoSync !== true) {
    cpexLog('CMP SYNC: exporting cookies to 3rd party');
    if (cpexPortalRef) {
      var passData = {
        name: 'cpexCookieSave',
        Consent: getCookie('eupubconsent-v2'),
        OptanonConsent: getCookie('OptanonConsent'),
        OptanonAlertBoxClosed: getCookie('OptanonAlertBoxClosed')
      }
      if (passData.Consent && passData.OptanonConsent) {
        var tcModel = TCString.decode(passData.Consent);
        var vendors = parseConsents(tcModel.vendorConsents);
        if (vendors) {
          cpexLog('CMP SYNC: passing data to the portal iframe: ', passData);
          cpexPortalRef.contentWindow.postMessage(passData, '*')
        }
      } else {
        console.log('CMP: consent not present, export skipped')
      }
    } else {
      console.warn('CMP: consent exporting not possible, iframe not present')
    }
  }
}

/** ONETRUST CMP BANNER */

window.OptanonWrapper = function () { // CMP Loaded
  cpexLog('CMP SYNC: CMP loaded/updated');
  var closeContainer = document.getElementById("onetrust-close-btn-container");
  if (closeContainer) {
    // FED-191: If there is a parameter present, hide the close button
    if (!(typeof window.cpexCmpAllowCloseButton !== 'undefined' || window.location.href.indexOf("cpexCmpAllowCloseButton") !== -1)) {
      closeContainer.style.display = 'none';
    }
    // OT HOTFIX: FED-190: Overwrite closing behavior, onetrust is saving consent on close
    closeContainer.addEventListener('click', function (e) {
      document.getElementById('onetrust-consent-sdk').style.display = 'none';
      e.stopPropagation();
    }, true);
  }
  // OT HOTFIX: Defocus link, onetrust is randomly focusing any first link
  var groupContainer = document.getElementById("onetrust-group-container");
  if (groupContainer) {
    setTimeout(function () {
      groupContainer.scrollTop = 0;
      document.getElementById("onetrust-accept-btn-handler").focus();
    }, 150)
  }
  OneTrust.OnConsentChanged(consentChanged);
}

function loadCMP () {
  if (window.oneTrustId) {
    if (loadCMPCalled) { return }
    loadCMPCalled = true;
    oneTrustCMPLoaded = true;
    cpexLog('CMP SYNC: loading OneTrust CMP');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('src', 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js');
    script.setAttribute('charset', 'UTF-8');
    // Set OneTrust data-domain-script id
    script.setAttribute('data-domain-script', window.oneTrustId);
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  else {
    console.warn('CMP: Missing oneTrustId, might have been intentional to not load CMP banner')
  }
}

function consentChanged () {
  cpexLog('CMP SYNC: consent changed');
  // Fire event announcing consent change
  __tcfapi('getTCData', 2, function (data) {
    window.dispatchEvent(new CustomEvent('cpexCMPConsentChanged', { detail: data }));
    if (tcfApiLocatiorRef) { tcfApiLocatiorRef.contentDocument.dispatchEvent(new CustomEvent('cpexCMPConsentChanged', data)) }
  })
  exportCookies();
  fireConsentPixels(true);
}

/** EVENT LISTENERS */

// if DOM is loaded, run immediately. otherwise wait for the event
if (window.cpexCMPNoSync === true) {
  setTimeout(loadCMP, 8000);
} else {
  document.readyState != 'loading' ? initSync() : document.addEventListener("DOMContentLoaded", initSync);
}

window.addEventListener('load', function () {
  exportCookies();
  fireConsentPixels();
})

window.addEventListener('message', function (event) {
  if (event.data) {

    /** COOKIE SYNC */

    // Check if consent different from current
    // If so, fire event: window.dispatchEvent(new CustomEvent('cpexCMPConsentChanged', { detail: data } ));

    if (event.data.name === 'cpexCookieRead') {
      cpexLog('CMP SYNC: received data from portal', event.data);
      if (event.data.noConsent) {
        cpexLog('CMP SYNC: no 3rd party consent found');
      }
      if (event.data.TCFConsent && event.data.OptanonConsent) {
        cpexLog('CMP SYNC: consent from 3rd party received: ', event.data.TCFConsent);
        setCookie('eupubconsent-v2', event.data.TCFConsent);
        setCookie('OptanonConsent', event.data.OptanonConsent);
        setCookie('OptanonAlertBoxClosed');
      }

      /** LOAD CMP if there is no consent at all */
      __tcfapi('getTCData', 2, function (data) {
        if (!data.tcstring) {
          if (oneTrustCMPLoaded === false) {
            // FED-208, a parameter to control waiting for banner loading
            if (window.cpexFastCmpBanner) {
              loadCMP()
            } else {
              // wait for prebid auction to end (with hook or just timeout), to work around otTCF issue
              setTimeout(loadCMP, 8000)
            }
          }
        }
      })
    }

    /** TCF REQUESTS */
    var isJSON = typeof event.data === 'string';
    var data = {}
    try {
      data = isJSON ? JSON.parse(event.data) : event.data;
    } catch (e) { }

    if (data.__tcfapiCall) {
      console.log(data);
      var tcfCall = data.__tcfapiCall;
      console.log(tcfCall);
      var callback = function (data, success) {
        console.log("data", data);
        console.log("success", success);
        var response = { __tcfapiReturn: { returnValue: data, success: success, callId: tcfCall.callId, command: tcfCall.command } };
        console.log(response);
        if (event.source) {
          event.source.postMessage(isJSON ? JSON.stringify(response) : response, '*');
        } else {
          console.warn('CMP: Request for consent is missing source attribute')
        }
      }
      var clbk2 = function(){
          console.log(arguments, "clbk2");
      }
      window.__tcfapi(tcfCall.command, tcfCall.version, callback, tcfCall.parameter);
      window.__tcfapi(tcfCall.command, tcfCall.version, clbk2, tcfCall.parameter);
      if(tcfCall.command === "addEventListener") {
          window.__tcfapi("addEventListener", 2, clbk2, undefined);
          window.__tcfapi("addEventListener", 2, clbk2);
      }
    }
  }
})

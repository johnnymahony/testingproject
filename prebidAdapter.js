window.AdTrack = window.AdTrack || {};
AdTrack.cfg = {
    "auction": {
        "timeout": 4000
    },
    "hb": {
        "timeout": 1000,
        "domain": "grid.id"
    },
    "events": {
        "enabled": true,
        "flushTime": 1000,
        "flushInterval": 2000
    },
    "keywords": {
        "url": "https:\/\/kw.r2b2.cz\/keywords"
    },
    "accounts": {
        "appnexus": 8413,
        "pubmatic": 158361,
        "mgid": 225,
        "xandr": 11327,
        "rubicon": 21794,
        "criteo": 8799,
        "adsense": "ca-pub-4569624645600360",
        "onetag": "589715a03c07472",
        "adagio": 1089
    },
    "userId": {
        "enable": true,
        "loadLib": true
    },
    "appVersion": "4.123.2",
    "reporting": {
        "url": "log.r2b2.io"
    },
    "server": {
        "url": "trackad.cz"
    }
};
/*! For license information please see bundle-hb.d39823eaff5650453a4b.js.LICENSE */
!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                i.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 109)
}([function(module, exports) {
    var toString, isArray, escMap, escFunc, escRE, _units;
    if (Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1)
          , i = this
          , n = function() {}
          , r = function() {
            return i.apply(this instanceof n && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return n.prototype = this.prototype,
        r.prototype = new n,
        r
    }
    ),
    Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        for (var i = 0, n = this.length; i < n; i++)
            i in this && t.call(e, this[i], i, this)
    }
    ),
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
    ),
    Array.isArray || (Array.isArray = function(t) {
        return "" + t !== t && "[object Array]" == {}.toString.call(t)
    }
    ),
    window.AdTrack || (window.AdTrack = {}),
    window.AdTrack.units || (window.AdTrack.units = {}),
    window.AdTrack.static || (AdTrack.static = {}),
    window.AdTrack.JSON || (window.AdTrack.JSON = {
        parse: function(sJSON) {
            return eval("(" + sJSON + ")")
        },
        stringify: (toString = Object.prototype.toString,
        isArray = Array.isArray || function(t) {
            return "[object Array]" === toString.call(t)
        }
        ,
        escMap = {
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t"
        },
        escFunc = function(t) {
            return escMap[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
        }
        ,
        escRE = /[\\"\u0000-\u001F\u2028\u2029]/g,
        function t(e) {
            if (null == e)
                return "null";
            if ("number" == typeof e)
                return isFinite(e) ? e.toString() : "null";
            if ("boolean" == typeof e)
                return e.toString();
            if ("object" == typeof e) {
                if (isArray(e)) {
                    for (var i = "[", n = 0; n < e.length; n++)
                        i += (n ? ", " : "") + t(e[n]);
                    return i + "]"
                }
                if ("function" == typeof e.toJSON)
                    return t(e.toJSON());
                if ("[object Object]" === toString.call(e)) {
                    var r = [];
                    for (var s in e)
                        e.hasOwnProperty(s) && r.push(t(s) + ": " + t(e[s]));
                    return "{" + r.join(", ") + "}"
                }
            }
            return '"' + e.toString().replace(escRE, escFunc) + '"'
        }
        )
    }),
    !window.AdTrack.url)
        try {
            window.AdTrack.url = window.top.location.href
        } catch (t) {
            window.AdTrack.url = window.location.href
        }
    AdTrack.startTime = AdTrack.startTime || (new Date).getTime(),
    AdTrack.placementQ = window.AdTrack.placementQ || (_units = {},
    {
        push: function(t, e) {
            "function" == typeof e && t && (AdTrack.units[t] ? e() : (_units[t] = _units[t] || [],
            _units[t].push(e)))
        },
        execute: function(t) {
            for (var e = _units[t] || []; e.length; )
                e.shift()()
        }
    }),
    AdTrack.call = function(t, e) {
        var i = Array.prototype.slice.call(arguments, 2)
          , n = function() {
            if ("function" == typeof AdTrack.units[t][e]) {
                var n = AdTrack.units[t];
                n[e].apply(n, i)
            }
        };
        AdTrack.placementQ.push(t, n)
    }
    ,
    AdTrack.BrowserFlags = {
        isOldIE: -1 !== navigator.appVersion.indexOf("MSIE 10") || -1 !== navigator.appVersion.indexOf("MSIE 9") || -1 !== navigator.appVersion.indexOf("MSIE 8"),
        isIE8: -1 !== navigator.appVersion.indexOf("MSIE 8"),
        isIE: -1 !== navigator.userAgent.indexOf("MSIE"),
        isOldOpera: window.opera && opera.version() < 15,
        isFirefox: -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
        isPhone: navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i),
        isOldAndroid: navigator.userAgent.indexOf("Android") >= 0 && parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8)) <= 2.3
    }
}
, function(t, e) {
    var i;
    (i = AdTrack.cfg) && "object" == typeof i || (i = {}),
    AdTrack.Config && !i.override || (AdTrack.Config = {
        getAuctionTimeout: function() {
            return (i.auction ? i.auction.timeout : null) || 5e3
        },
        getHBDomain: function() {
            return (i.hb ? i.hb.domain : null) || ""
        },
        getHBTimeout: function() {
            return (i.hb ? i.hb.timeout : null) || 2e3
        },
        getPrebidObjectName: function() {
            return (i.hb ? i.hb.pbjs : null) || "pbjs"
        },
        getReportingUrl: function() {
            return (i.reporting ? i.reporting.url : null) || "trackad.cz"
        },
        isCMPEnabled: function() {
            return !!i.cmp && !!i.cmp.gdpr
        },
        getCMPFallback: function() {
            return (i.cmp ? i.cmp.fallback : null) || "normal"
        },
        eventsEnabled: function() {
            return !i.events || !!i.events.enabled
        },
        eventsFlushInterval: function() {
            return (i.events ? i.events.flushInterval : null) || 1e3
        },
        getAccountId: function(t) {
            return (i.accounts ? i.accounts[t] : null) || ""
        },
        getKeywordsUrl: function() {
            return i.keywords ? i.keywords.url : null
        },
        getAppVersion: function() {
            return i.appVersion ? i.appVersion : "0.0.1"
        },
        getUserID: function() {
            return i.userId ? i.userId : {}
        }
    }),
    AdTrack.cfg = void 0
}
, function(t, e) {
    var i, n, r, s, o;
    AdTrack.Utils = AdTrack.Utils || ((s = {}).uri = function(t, e) {
        return t + "=" + encodeURIComponent(e)
    }
    ,
    s.time = function() {
        return (new Date).getTime()
    }
    ,
    s.timeToEndOfDay = function() {
        var t = new Date;
        return t.setHours(23, 59, 59, 999),
        t - new Date
    }
    ,
    s.timeRelative = function() {
        return Math.round(window.performance && window.performance.now ? window.performance.now() : (new Date).getTime())
    }
    ,
    s.getParameterByName = function(t) {
        try {
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.search);
            return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        } catch (t) {
            return ""
        }
    }
    ,
    s.createEvent = function(t, e) {
        var i;
        try {
            i = new Event(e)
        } catch (n) {
            (i = t.createEvent("Event")).initEvent(e, !1, !1)
        }
        return i
    }
    ,
    s.addEvent = function(t, e, i) {
        null != t && void 0 !== t && (t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i)
    }
    ,
    s.removeEvent = function(t, e, i) {
        null != t && void 0 !== t && (t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = "")
    }
    ,
    s.singleUseCallback = function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            t.apply(this, arguments))
        }
    }
    ,
    s.jsonp = function(t, e, i, n) {
        var r = null
          , o = ("adTrackJSONP" + Math.random()).replace(".", "");
        if (t = t + "&" + AdTrack.Utils.uri(e, o)) {
            var a = function() {
                try {
                    delete window[o]
                } catch (t) {}
                try {
                    r && (r.parentNode.removeChild(r),
                    r = null)
                } catch (t) {}
            }
              , d = s.singleUseCallback((function(t, e) {
                i && i(t, e)
            }
            ));
            window[o] = function(t, e) {
                d(t, e),
                a()
            }
            ;
            var c = document.createElement("script");
            c.setAttribute("src", t),
            r = c,
            c.onerror = function() {
                d("request-error"),
                a()
            }
            ,
            document.getElementsByTagName("head")[0].appendChild(c),
            n && n > 0 && setTimeout((function() {
                d("request-timeouted")
            }
            ), n)
        }
    }
    ,
    s.errorReporting = function(t, e, i) {
        return {
            doError: function(n, r, s) {
                null != s && "undefined" != s || (s = "low"),
                n = "[V-" + AdTrack.Config.getAppVersion() + "] " + n;
                var o = "//" + t + "/error.php?" + AdTrack.Utils.uri("m", n) + "&" + AdTrack.Utils.uri("s", s) + "&" + AdTrack.Utils.uri("u", e) + (i ? "&" + AdTrack.Utils.uri("p", 1) : "");
                r && "function" == typeof r.getNameForReporting && (o += "&" + AdTrack.Utils.uri("pl", r.getNameForReporting())),
                AdTrack.Utils.jsonp(o, "callback", (function(t) {}
                ))
            }
        }
    }
    ,
    s.genericRequest = function(t) {
        return {
            doProfiling: function(e, i) {
                var n = {
                    rt: 0,
                    t: 0,
                    e: "profiling",
                    c: null,
                    cf: null,
                    v: i
                }
                  , r = {};
                r[e] || (r[e] = []),
                r[e].push(n);
                var s = new XMLHttpRequest;
                s.open("POST", t, !0),
                s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var o = AdTrack.JSON.stringify(r);
                o = o.replace(/&/g, "%26"),
                s.send("events=" + o)
            }
        }
    }
    ,
    s.replaceMacros = function(t, e) {
        try {
            return t.replace(/%%([a-zA-Z][a-zA-Z\.]*)%%/g, (function(t, i, n, r) {
                return s.deepAccess(e, i) || t
            }
            ))
        } catch (e) {
            return t
        }
    }
    ,
    s.validateSelector = function(t, e) {
        return e && (t = s.replaceMacros(t, e)),
        t = (t = t.replace(/([0-9])/, "\\3$1 ")).replace(/[\/.:;]/g, (function(t, e, i) {
            return e > 0 && "\\" === i.charAt(e - 1) ? t : "\\" + t
        }
        ))
    }
    ,
    s.appendCss = function(t, e, i, n) {
        var r = document.createElement("style");
        if (t) {
            n && (e = s.replaceMacros(e, n)),
            i ? i.addElement(t, r) : t.appendChild(r);
            try {
                r.innerHTML = e
            } catch (t) {
                r.styleSheet.cssText = e
            }
        }
        return r
    }
    ,
    s.cssPrefix = function(t, e) {
        var i = t + ": " + e + "; ";
        return ["moz", "o", "ms", "webkit"].forEach((function(n) {
            i += "-" + n + "-" + t + ": " + e + "; "
        }
        )),
        i
    }
    ,
    s.addClassName = function(t, e) {
        return t && (t.className += (t.className ? " " : "") + e),
        t
    }
    ,
    s.styleizeAll = function(t, e, i) {
        var n = t.createElement("style");
        i.addElement(t.getElementsByTagName("head")[0], n);
        var r = e.childNodes;
        r.length > 0 && (s.styleize(r, n),
        Array.prototype.forEach.call(r, (function(t) {
            s.styleizeAll(t)
        }
        )))
    }
    ,
    s.styleize = function(t, e) {
        Array.prototype.forEach.call(t, (function(t) {
            if ("function" == typeof t.hasAttribute && t.hasAttribute("style")) {
                var i = t.getAttribute("style");
                if (i) {
                    var n = "d" + Math.round(1e7 * Math.random());
                    s.cssToStyle(e, "." + n + "{" + i + "}"),
                    s.addClassName(t, n)
                }
                t.removeAttribute("style")
            }
        }
        ))
    }
    ,
    s.cssToStyle = function(t, e) {
        try {
            t.innerHTML += " " + e
        } catch (i) {
            t.styleSheet.cssText += " " + e
        }
    }
    ,
    s.applyTransform = function(t, e, i) {
        t && (t.style.webkitTransform = e,
        t.style.MozTransform = e,
        t.style.msTransform = e,
        t.style.OTransform = e,
        t.style.transform = e,
        i && (t.style.webkitTransformOrigin = i,
        t.style.MozTransformOrigin = i,
        t.style.msTransformOrigin = i,
        t.style.OTransformOrigin = i,
        t.style.transformOrigin = i))
    }
    ,
    s.b2a = function(t) {
        var e, i, n, r, s, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0, c = 0, h = "", l = [];
        if (!t)
            return t;
        do {
            e = 63 & (s = t.charCodeAt(d++) << 16 | t.charCodeAt(d++) << 8 | t.charCodeAt(d++)) >> 18,
            i = 63 & s >> 12,
            n = 63 & s >> 6,
            r = 63 & s,
            l[c++] = a.charAt(e) + a.charAt(i) + a.charAt(n) + a.charAt(r)
        } while (d < t.length);
        return h = l.join(""),
        ((o = t.length % 3) ? h.slice(0, o - 3) : h) + "===".slice(o || 3)
    }
    ,
    s.getDeviceId = function(t) {
        if (t.cookiesEnabled) {
            var e = t.getCookie("hbttv-uuid");
            return e || (e = s.uuid(),
            t.setCookie("hbttv-uuid", e, 2678400)),
            e = "" !== e ? e : null
        }
        var i = null;
        if (window.navigator && window.screen) {
            var n = window.navigator
              , r = window.screen;
            i = n.mimeTypes.length,
            i += n.userAgent.replace(/\D+/g, ""),
            i += n.plugins.length,
            i += r.height || "",
            i += r.width || "",
            i += r.pixelDepth || ""
        }
        return AdTrack.Utils.b2a(i)
    }
    ,
    s.getDGPMKey = function(t) {
        var e = {};
        t.params && !t.params.length && (e = t.params),
        t.ext && t.ext.dgpm && (e = t.ext.dgpm);
        var i = e.d || ""
          , n = e.g || ""
          , r = e.p || ""
          , s = e.m ? "mobile" : "classic";
        if (i && n && r)
            return s + "_" + i + "_" + n + "_" + r
    }
    ,
    s.isBidOfPlacement = function(t, e, i, n, r) {
        return !(!t || "r2b2" !== t.bidder || !t.params) && t.params.d === e && t.params.g === i && t.params.p === n && t.params.m == r
    }
    ,
    s.isInPrebidAdUnit = function(t, e, i, n, r) {
        var o = !1
          , a = t.bids;
        if (a && a.length > 0)
            for (var d = 0; d < a.length; d++)
                if (s.isBidOfPlacement(a[d], e, i, n, r)) {
                    o = !0;
                    break
                }
        return o
    }
    ,
    s.isInPrebidAdUnits = function(t, e, i, n, r) {
        var o = !1;
        if (t && t.length > 0)
            for (var a = 0; a < t.length; a++)
                if (s.isInPrebidAdUnit(t[a], e, i, n, r)) {
                    o = !0;
                    break
                }
        return o
    }
    ,
    s.isSecure = function(t) {
        return -1 !== t.indexOf("https://")
    }
    ,
    s.deepAccess = function(t, e) {
        if (t) {
            e = String(e).split(".");
            for (var i = 0; i < e.length; i++)
                if (void 0 === (t = t[e[i]]))
                    return;
            return t
        }
    }
    ,
    s.objectValues = function(t) {
        var e = [];
        if (t)
            for (var i in t)
                t.hasOwnProperty(i) && e.push(t[i]);
        return e
    }
    ,
    s.getLanguage = function() {
        var t = navigator.language ? "language" : "userLanguage"
          , e = navigator[t].split("-")[0];
        return 2 === e.length || 3 === e.length ? e : ""
    }
    ,
    s.setLocalStorageItem = function(t, e) {
        try {
            return localStorage.setItem(t, e)
        } catch (t) {
            return null
        }
    }
    ,
    s.getLocalStorageItem = function(t) {
        try {
            return localStorage.getItem(t)
        } catch (t) {
            return null
        }
    }
    ,
    s.removeLocalStorageItem = function(t) {
        try {
            return localStorage.removeItem(t)
        } catch (t) {
            return null
        }
    }
    ,
    s.simpleStringGenerator = function(t, e) {
        for (var i = "", n = 0; n < t; n++)
            i += Math.random().toString(36).substring(3, 4);
        return e ? e + i : i
    }
    ,
    s.readCookie = function(t) {
        t += "=";
        for (var e = document.cookie.split(";"), i = 0; i < e.length; i++) {
            for (var n = e[i]; " " == n.charAt(0); )
                n = n.substring(1);
            if (0 == n.indexOf(t))
                return n.substring(t.length, n.length)
        }
        return ""
    }
    ,
    s.setCookieFirstParty = function(t, e, i) {
        var n = new Date;
        n.setTime(n.getTime() + 1e3 * i);
        var r = "expires=" + n.toUTCString();
        document.cookie = t + "=" + e + "; " + r + ";domain=" + s.getDomainName(document.location.host) + "; Path=/"
    }
    ,
    s.getDPI = function() {
        if (void 0 === i)
            try {
                var t = document.createElement("div");
                t.setAttribute("style", "height: 1in; position: absolute; width: 1in; top:-100px; left:-100px;");
                var e = document.getElementsByTagName("body")[0];
                e.appendChild(t),
                i = t.offsetHeight,
                e.removeChild(t)
            } catch (t) {}
        return i > 0 ? i : 96
    }
    ,
    s.screenDiagonal = function(t, e) {
        return Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) / s.getDPI()
    }
    ,
    s.isMobile = function(t, e) {
        if (e = e || 11,
        void 0 === n) {
            var i = navigator.userAgent || navigator.vendor || window.opera
              , o = s.screenDiagonal(screen.width, screen.height);
            if (d = !1,
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|iPad|playbook|silk/i.test(a = i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (d = !0),
            n = d,
            r = o <= e,
            !i)
                return r
        }
        var a, d;
        return t ? n && r : n
    }
    ,
    s.getViewportRealWidth = function(t) {
        return t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth
    }
    ,
    s.getViewportRealHeight = function(t) {
        return t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight
    }
    ,
    s.getScreenSize = function() {
        var t, e;
        return !AdTrack.BrowserFlags.isPhone || 270 != window.orientation && 90 != window.orientation && -90 != window.orientation ? (t = screen.width,
        e = screen.height) : (t = screen.height,
        e = screen.width),
        {
            w: t,
            h: e
        }
    }
    ,
    s.windowTopAccess = function() {
        var t = null;
        try {
            window.top.document && (t = window.top)
        } catch (t) {}
        return t
    }
    ,
    s.getCrossFrameRect = function(t) {
        try {
            var e = s.windowTopAccess()
              , i = t.ownerDocument
              , n = i.defaultView || i.parentWindow
              , r = t.getBoundingClientRect();
            if (!e || e && n === e)
                return r;
            for (var o, a = {
                left: r.left,
                right: r.right,
                top: r.top,
                bottom: r.bottom,
                x: r.x,
                y: r.y,
                width: r.width,
                height: r.height
            }; n !== e; )
                o = n.frameElement.getBoundingClientRect(),
                a.left += o.left,
                a.right += o.left,
                a.top += o.top,
                a.bottom += o.top,
                a.x += o.left,
                a.y += o.top,
                n = n.parent;
            return a
        } catch (t) {}
    }
    ,
    s.getEventRelativePos = function(t, e) {
        var i = 0
          , n = 0;
        if (t && t.clientX && e && "function" == typeof e.getBoundingClientRect) {
            var r = e.getBoundingClientRect()
              , s = t.clientX
              , o = t.clientY;
            if (s >= r.left && s <= r.right && o >= r.top && o <= r.bottom) {
                var a = r.right - r.left
                  , d = r.bottom - r.top;
                a && d && (i = (s - r.left) / a,
                n = (o - r.top) / d)
            }
        }
        return {
            x: Math.round(1e3 * i),
            y: Math.round(1e3 * n)
        }
    }
    ,
    s.redirect = function(t) {
        var e = s.windowTopAccess();
        if (e)
            try {
                e.history.pushState && (AdTrack.BrowserFlags.isFirefox || AdTrack.BrowserFlags.isOldOpera) ? (e.history.pushState({}, e.document.title, e.location.href),
                e.location.assign(t)) : e.location.assign(t)
            } catch (i) {
                e.location.href = t
            }
    }
    ,
    s.randomString = function(t) {
        return t || (t = ""),
        t + "" + Math.round(1e9 * Math.random())
    }
    ,
    s.getDomainName = function(t, e) {
        return e = e || !1,
        t = t.replace(/(https?:\/\/)?(www.)?/i, ""),
        e || (t = (t = t.split(".")).slice(t.length - 2).join(".")),
        -1 !== t.indexOf("/") ? t.split("/")[0] : t
    }
    ,
    s.csyncFrame = function(t) {
        var e = '<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" width="0" hspace="0" vspace="0" height="0" style="height:0px;width:0px;display:none;" scrolling="no" src="' + t + '"></iframe>'
          , i = document.createElement("div");
        i.innerHTML = e;
        var n = i.firstChild;
        document.getElementsByTagName("head")[0].appendChild(n)
    }
    ,
    s.createFrame = function(t, e, i) {
        var n = document.createElement("iframe");
        n.setAttribute("style", i),
        t.appendChild(n);
        try {
            var r = n.contentDocument || n.contentWindow.document;
            r.open(),
            r.write(e),
            r.close()
        } catch (t) {}
        return n
    }
    ,
    s.isBlackListedAds = function(t) {
        var e = !1
          , i = {};
        try {
            ["sgreen.erne.co", "adcrowd-adcrowd1.netdna-ssl.com"].forEach((function(n) {
                var r = t.match(n);
                if (null !== r)
                    throw e = r,
                    i
            }
            ))
        } catch (t) {}
        return e
    }
    ,
    s.firstUppercase = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
    }
    ,
    s.getLocation = function() {
        try {
            return top.document.location.href || ""
        } catch (t) {
            return document.location.href || ""
        }
    }
    ,
    s.json2Url = function(t) {
        var e = ""
          , i = "";
        for (var n in t)
            t.hasOwnProperty(n) && (e += i + n + "=" + encodeURIComponent(t[n]),
            i = "&");
        return e
    }
    ,
    s.percentage = function(t) {
        return !(!(t = parseInt(t, 10)) || isNaN(t) || t < 0 || t < 100 && !(100 * Math.random() < t))
    }
    ,
    s.uuid = function() {
        for (var t = [], e = 0; e < 256; e++)
            t[e] = (e < 16 ? "0" : "") + e.toString(16);
        var i = 4294967295 * Math.random() | 0
          , n = 4294967295 * Math.random() | 0
          , r = 4294967295 * Math.random() | 0
          , s = 4294967295 * Math.random() | 0;
        return t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & s] + t[s >> 8 & 255] + t[s >> 16 & 255] + t[s >> 24 & 255]
    }
    ,
    s.firePixel = function(t) {
        try {
            (new Image).src = t
        } catch (t) {}
    }
    ,
    s.useJsTracker = function(t, e) {
        if (t && e && e.id) {
            var i = t.match(/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/)
              , n = t.match("trk.js")
              , r = i && i.length && n && n.length;
            if ("<script" === t.substr(0, 7) && r) {
                var s = t.indexOf('src="') + 5
                  , o = t.indexOf('"', s)
                  , a = t.substring(s, o);
                a = a.replace("%native_dom_id%", e.id);
                var d = document.createElement("script");
                e.parentNode.insertBefore(d, e),
                d.src = a
            }
        }
    }
    ,
    s.reportCreative = function(t, e, i, n, r, s, o) {
        o = "string" == typeof o ? o : JSON.stringify(o);
        var a = "//" + t + "/creative.php"
          , d = "id=" + e + "&c=" + i + "&cid=" + encodeURIComponent(n) + "&did=" + encodeURIComponent(r) + "&p=" + s + "&data=" + encodeURIComponent(o) + "&u=" + AdTrack.url;
        AdTrack.Ajax.request({
            url: a,
            method: "POST",
            data: d,
            async: !0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).send()
    }
    ,
    s.getUrlWithoutSafeFrame = function(t) {
        var e = AdTrack.url;
        try {
            if (!s.windowTopAccess() && t) {
                if (t.definition.info && t.definition.info.realDomain)
                    return "https://" + t.definition.info.realDomain + "/";
                var i = t.unitID.d.split(".")
                  , n = t.settings.publisher.tag;
                if (n && i.length > 2 && (i[0] === n || "pomoMediaGroup" === n && ("pmg" === i[0] || "pomo" === i[0])))
                    return i.shift(),
                    "https://" + i.join(".") + "/"
            }
        } catch (t) {}
        return e
    }
    ,
    s.isSafeFrameWindow = function(t) {
        return !(!t.$sf || !t.$sf.ext)
    }
    ,
    s.isPremiumAdform = function(t) {
        return "string" == typeof t.tag && "string" == typeof t.flag && -1 !== t.tag.indexOf("adform") && -1 === t.tag.indexOf("-im") && (-1 !== t.flag.indexOf("premium") || 1 == t.unmaskedDomain)
    }
    ,
    s),
    AdTrack._AdFormUtils = function() {}
    ,
    AdTrack._AdFormUtils.prototype = {
        generateAdxUrl: function(t, e, i) {
            var n = {
                test: !0,
                url: !0,
                tid: !0,
                rp: !0,
                pv: !0,
                adxjs: !0,
                lat: !0,
                lon: !0
            }
              , r = []
              , s = []
              , o = !1;
            if (!Array.isArray(t))
                return console.error("Placement id list should be an array.");
            for (var a = 0; a < t.length; a++)
                s.push("mid=" + t[a]),
                [1098653, 1098654, 1098656, 1098729, 1098727, 1098728].indexOf(Number(t[a])) > -1 && (o = !0);
            for (var d in e)
                if (e.hasOwnProperty(d) && Array.isArray(e[d])) {
                    var c = e[d];
                    for (var h in c)
                        c.hasOwnProperty(h) && (n[d] ? r.push(d + "=" + encodeURIComponent(h)) : s.push(d + "=" + e[d]))
                } else
                    n[d] ? r.push(d + "=" + encodeURIComponent(e[d])) : s.push(d + "=" + e[d]);
            return r.push(this.b2a(s.join("&")).replace(/=+$/, "")),
            o ? "//adx3.adform.net/adx/?rp=4&" + r.join("&") + (i ? "&callback=" + i : "") : "//adx.adform.net/adx/?rp=4&" + r.join("&") + (i ? "&callback=" + i : "")
        },
        b2a: function(t) {
            return AdTrack.Utils.b2a(t)
        }
    },
    AdTrack.Timer = AdTrack.Timer || (o = function(t, e) {
        t = parseInt(t);
        var i = "function" == typeof e ? e : function() {}
          , n = isNaN(t) ? 500 : t
          , r = 0
          , s = null;
        this.start = function() {
            s || (s = setInterval((function() {
                i(r += n / 1e3)
            }
            ), n),
            0 === r && i(0))
        }
        ,
        this.stop = function() {
            s = clearInterval(s)
        }
        ,
        this.timeElapsed = function() {
            return r
        }
    }
    ,
    {
        create: function(t, e) {
            return new o(t,e)
        }
    })
}
, function(t, e) {
    var i, n;
    AdTrack.ID = AdTrack.ID || (i = function(t, e, i, n) {
        this.d = t,
        this.g = e,
        this.p = i,
        this.m = n ? 1 : 0,
        this.type = n ? "mobile" : "classic",
        this.getName = function() {
            return this.type + "_" + this.d + "_" + this.g + "_" + this.p
        }
        ,
        this.getNameForReporting = function() {
            return this.d + "/" + this.g + "/" + this.p + "/" + this.type
        }
        ,
        this.getPath = function() {
            return this.d + "/" + this.g + "/" + this.p + ("mobile" === this.type ? "/" + this.type : "")
        }
        ,
        this.equalTo = function(t) {
            return "" + t == "" + this
        }
        ,
        this.toString = function() {
            return this.getName()
        }
    }
    ,
    n = {
        createIdDGPM: function(t, e, n, r) {
            return r = r ? 1 : 0,
            e = "string" == typeof e ? e : "",
            n = "string" == typeof n ? n : "",
            (t = "string" == typeof t ? t : "") && e && n ? new i(t,e,n,r) : null
        },
        createIdDGPT: function(t, e, i, r) {
            var s = "mobile" === r ? 1 : 0;
            return n.createIdDGPM(t, e, i, s)
        },
        createIdFromBid: function(t) {
            var e = {};
            return t.params && !t.params.length && (e = t.params),
            t.ext && t.ext.dgpm && (e = t.ext.dgpm),
            n.createIdDGPM(e.d, e.g, e.p, e.m)
        }
    })
}
, function(t, e) {
    var i, n;
    AdTrack.DOM = AdTrack.DOM || function() {
        var t = [];
        function e() {}
        return e.getIframeDocument = function(t) {
            var e = null;
            try {
                e = t.contentDocument || t.contentWindow.document
            } catch (t) {}
            return e
        }
        ,
        e.getAllIframes = function(i, n, r) {
            r = (r = void 0 === r || "number" != typeof r ? 5 : r) <= 0 ? 1 : r;
            var s = function(e) {
                var i = 0
                  , s = setInterval((function() {
                    if (i === r) {
                        var a = t;
                        return t = [],
                        clearInterval(s),
                        n(a),
                        void o(a)
                    }
                    for (var d = e.getElementsByTagName("iframe"), c = 0; c < d.length; c++)
                        -1 === t.indexOf(d[c]) && t.push(d[c]);
                    i++
                }
                ), 200)
            }
              , o = function(t) {
                for (var i = 0; i < t.length; i++) {
                    var n = e.getIframeDocument(t[i]);
                    n && s(n)
                }
            };
            i && s(i)
        }
        ,
        e
    }(),
    AdTrack.DOM.Transforms = (i = function(t) {
        var e = [];
        this.revert = function() {
            for (; e.length > 0; ) {
                var t = e.pop();
                "function" == typeof t && t()
            }
        }
        ,
        this.addCSS = function(e) {
            var i = t.createElement("style");
            try {
                i.innerHTML = e
            } catch (t) {
                i.styleSheet.cssText = e
            }
            this.addElement(t.getElementsByTagName("head")[0], i)
        }
        ,
        this.styleElement = function(t, i, n, r) {
            var s = t.style.getPropertyValue(i)
              , o = t.style.getPropertyPriority(i);
            void 0 !== r ? t.style.setProperty(i, n, r) : t.style.setProperty(i, n),
            e.push((function() {
                void 0 !== o ? t.style.setProperty(i, s, o) : t.style.setProperty(i, n)
            }
            ))
        }
        ,
        this.addElement = function(t, i, n) {
            n ? t.insertBefore(i, n) : t.appendChild(i),
            e.push((function() {
                try {
                    t.removeChild(i)
                } catch (t) {}
            }
            ))
        }
        ,
        this.removeElement = function(i, n) {
            var r = t.createElement("div");
            r.setAttribute("style", "display: none !important;"),
            i.insertBefore(r, n),
            i.removeChild(n),
            e.push((function() {
                try {
                    i.insertBefore(n, r),
                    i.removeChild(r)
                } catch (t) {}
            }
            ))
        }
    }
    ,
    {
        getTransforms: function(t) {
            return new i(t)
        }
    }),
    AdTrack.DOM.Component = (n = function(t) {
        var e = {}
          , i = {}
          , n = function(t, n) {
            t.id = e[n].substr(1),
            i[n] = t
        }
          , r = function(t) {
            e[t] = "#" + AdTrack.Utils.simpleStringGenerator(10, "c")
        };
        r("wrap"),
        r("element"),
        r("transformLayer");
        var s = t.document.createElement("div")
          , o = t.document.createElement("div");
        return s.appendChild(o),
        n(s, "wrap"),
        n(o, "transformLayer"),
        {
            getMacros: function() {
                return e
            },
            getWrap: function() {
                return i.wrap
            },
            getElement: function() {
                return i.element
            },
            getTransformLayer: function() {
                return i.transformLayer
            },
            setElement: function(t) {
                i.element || (n(t, "element"),
                i.transformLayer.appendChild(t))
            },
            destroy: function() {
                var t = i.wrap;
                t.parentNode && t.parentNode.removeChild(t),
                i.wrap = null
            }
        }
    }
    ,
    {
        register: function(t, e, i) {
            if (t && e) {
                var r = new n(i);
                return e.macros[t] = r.getMacros(),
                r
            }
        }
    })
}
, function(t, e) {
    var i, n, r, s, o;
    AdTrack.Log = AdTrack.Log || (i = "true" === AdTrack.Utils.getParameterByName("adtrack-debug") || AdTrack.Utils.getLocalStorageItem("adtrack-debug"),
    n = {
        0: "17a2b8",
        1: "ffc107",
        2: "dc3545"
    },
    r = [],
    s = function(t, e, i, n, r) {
        this.placement = t,
        this.module = e,
        this.msg = i,
        this.severity = n,
        this.time = r
    }
    ,
    (o = {
        INFO: 0,
        WARNING: 1,
        ERROR: 2
    }).debugPlacement = function(t, e, o, a, d) {
        if (d = d || !0,
        i) {
            "number" == typeof a && n[a] || (a = 0);
            var c = new s(t,e,o,a,AdTrack.Utils.timeRelative());
            d ? function(t) {
                var e = document.getElementById("AdTrackDebugConsole")
                  , i = n[t.severity] || n[0];
                "object" == typeof t.msg ? null != e && (e.value += "\n" + t.msg) : null != e ? e.value += "\n" + (t.placement ? t.placement + "/" : "") + t.module + " " + t.msg : console.log("%cAdTrack%c " + t.time + " %c" + (t.placement ? t.placement + "/" : "") + t.module + " " + t.msg, "color: #ffffff; background: #" + i + "; font-weight: bold; padding: 2px 3px; border-radius: 3px;", "font-weight: bold;", "")
            }(c) : r.unshift(c)
        }
    }
    ,
    o.debug = function(t, e, i, n) {
        o.debugPlacement(null, t, e, i, n)
    }
    ,
    o)
}
, function(t, e) {
    var i;
    AdTrack.Events = AdTrack.Events || (i = function(t) {
        var e = {}
          , i = !1
          , n = function(t) {
            return "string" == typeof t && (e[t] = {
                callbacks: [],
                triggered: !1,
                triggerOnce: !1
            },
            !0)
        };
        !function(t) {
            t && t.length > 0 && "function" == typeof t.forEach && t.forEach((function(t) {
                n(t) && (i = !0)
            }
            ))
        }(t);
        var r = {
            registerEvent: function(t) {
                return !!e[t] || !i && n(t)
            },
            markEventAsTriggerOnce: function(t) {
                e[t] && (e[t].triggerOnce = !0)
            },
            addCallback: function(t, i) {
                r.registerEvent(t) && "function" == typeof i && (e[t].triggerOnce && e[t].triggered ? i() : e[t].callbacks.push(i))
            },
            trigger: function(t, i) {
                if (e[t]) {
                    if (e[t].triggerOnce && e[t].triggered)
                        return;
                    for (e[t].triggered = !0; e[t].callbacks.length > 0; )
                        try {
                            var n = e[t].callbacks.shift();
                            i && i.length > 0 ? n.apply(this, i) : n()
                        } catch (t) {}
                }
            }
        };
        return r
    }
    ,
    {
        create: function(t) {
            return new i(t)
        }
    })
}
, function(t, e) {
    AdTrack.Ajax = AdTrack.Ajax || {
        request: function(t, e) {
            "string" == typeof t && (t = {
                url: t
            }),
            t.url = t.url || "",
            t.method = t.method || "get",
            t.data = t.data || {},
            t.async = void 0 === t.async || t.async,
            !t.label || t.label;
            var i = [];
            return {
                host: {},
                doError: function(n) {
                    this.host.error || (this.host.error = !0,
                    this.ops.report && e && e.doError(t.label + " Ajax error: " + n)),
                    this.failCallback ? (n = this.xhrType + " " + n,
                    this.runFailCallback(n, !1)) : i.push(n)
                },
                runFailCallback: function(i, n) {
                    try {
                        this.failCallback && this.failCallback.apply(this.host, [i, n, this.xhr])
                    } catch (i) {
                        e && e.doError(t.label + " fail callback failed: " + i.message)
                    }
                },
                runDoneCallback: function(i) {
                    try {
                        this.doneCallback && this.doneCallback.apply(this.host, [i, this.xhr])
                    } catch (i) {
                        e && e.doError(t.label + " callback failed: " + i.message)
                    }
                },
                runAlwaysCallback: function() {
                    try {
                        this.alwaysCallback && this.alwaysCallback.apply(this.host, [this.xhr])
                    } catch (t) {}
                },
                process: function(t) {
                    try {
                        var i = this;
                        if (this.ops = t,
                        this.xhr = null,
                        this.xhrType = "",
                        this.ops.failCallback && this.fail(this.ops.failCallback),
                        window.XMLHttpRequest)
                            try {
                                this.xhr = new XMLHttpRequest,
                                this.xhrType = "XHR"
                            } catch (t) {
                                this.doError("Error creating XHR - " + t.message)
                            }
                        else
                            try {
                                this.xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0"),
                                this.xhrType = "AXO6.0"
                            } catch (t) {
                                try {
                                    this.xhr = new ActiveXObject("MSXML2.XMLHTTP.3.0"),
                                    this.xhrType = "AXO3.0"
                                } catch (t) {
                                    try {
                                        this.xhr = new ActiveXObject("Microsoft.XMLHTTP"),
                                        this.xhrType = "AXO"
                                    } catch (t) {
                                        this.doError("Unable to create XHR object")
                                    }
                                }
                            }
                        if (this.xhr) {
                            try {
                                this.xhr.ontimeout = t.ontimeout,
                                this.xhr.onerror = t.onerror,
                                this.xhr.onreadystatechange = function(n) {
                                    i.runAlwaysCallback();
                                    try {
                                        if (4 === i.xhr.readyState && i.xhr.status >= 200 && i.xhr.status < 300) {
                                            var r = i.xhr.responseText;
                                            if (r && !0 === t.json && "undefined" != typeof JSON)
                                                try {
                                                    r = JSON.parse(r)
                                                } catch (t) {
                                                    if (i.ops.report && e) {
                                                        var s = AdTrack.Utils.time() - AdTrack.startTime;
                                                        e.doError("Invalid response after " + s + " ms: " + r, null, "debug")
                                                    }
                                                    i.doError("JSON.parse failed - " + t.message)
                                                }
                                            i.runDoneCallback(r)
                                        } else if (4 === i.xhr.readyState) {
                                            var o = 0;
                                            if (i.xhr.timeout && (o = i.timeStart + i.xhr.timeout - 5,
                                            i.host.timeouted = n.timeStamp > o),
                                            o > 1e5)
                                                i.doError("Request failed, cant detect TO (" + i.xhr.status + "): " + i.xhr.statusText);
                                            else if (i.host.timeouted)
                                                i.runFailCallback("Request timeouted", !0);
                                            else {
                                                var a = "Request failed (" + i.xhr.status + "): " + i.xhr.statusText;
                                                i.xhr.responseText && (a += "; Reason: (" + i.xhr.responseText + ")"),
                                                i.doError(a)
                                            }
                                        }
                                    } catch (t) {
                                        i.doError("onreadystatechange failure (" + i.xhr.readyState + ") - " + t.message)
                                    }
                                }
                            } catch (t) {
                                this.doError("Cant set onreadystatechange - " + t.message)
                            }
                            try {
                                "get" === t.method ? this.xhr.open("GET", t.url + function(t, e) {
                                    var i, n = [];
                                    for (var r in t)
                                        t.hasOwnProperty(r) && n.push(r + "=" + encodeURIComponent(t[r]));
                                    return "" !== (i = n.join("&")) ? e ? e.indexOf("?") < 0 ? "?" + i : "&" + i : i : ""
                                }(t.data, t.url), t.async) : this.xhr.open(t.method, t.url, t.async)
                            } catch (t) {
                                this.doError("Cant open xhr - " + t.message)
                            }
                            try {
                                this.xhr.withCredentials = void 0 === t.withCredentials || !!t.withCredentials
                            } catch (t) {
                                this.doError("Cant set withCredentials - " + t.message)
                            }
                            try {
                                this.ops.async && 0 !== t.timeout && (this.xhr.timeout = t.timeout || 500)
                            } catch (t) {
                                this.doError("Cant set timeout - " + t.message)
                            }
                            try {
                                t.headers && "object" == typeof t.headers && this.setHeaders(t.headers)
                            } catch (t) {
                                this.doError("Cant set headers - " + t.message)
                            }
                        } else
                            this.doError("No XHR instance")
                    } catch (t) {
                        this.doError("processing failure - " + t.message)
                    }
                    return this
                },
                done: function(t) {
                    return this.doneCallback = t,
                    this
                },
                fail: function(t) {
                    return this.failCallback = AdTrack.Utils.singleUseCallback(t),
                    this
                },
                always: function(t) {
                    return this.alwaysCallback = t,
                    this
                },
                send: function() {
                    if (this.host.error && i.length > 0 && this.failCallback)
                        this.doError("(unreported) " + i[0]);
                    else
                        try {
                            this.timeStart = AdTrack.Utils.timeRelative(),
                            "get" === this.ops.method ? this.xhr.send() : this.xhr.send(this.ops.data)
                        } catch (t) {
                            this.doError("send failure - " + t.message)
                        }
                },
                setHeaders: function(t) {
                    for (var e in t)
                        t.hasOwnProperty(e) && this.xhr && this.xhr.setRequestHeader(e, t[e])
                }
            }.process(t)
        }
    }
}
, function(t, e) {
    var i, n;
    AdTrack.EventStore = AdTrack.EventStore || (i = AdTrack.Config.eventsFlushInterval(),
    n = function(t) {
        var e = {}
          , n = {}
          , r = 0
          , s = function() {
            return !(r > 0)
        }
          , o = function() {
            var t = e;
            return e = {},
            r = 0,
            t
        }
          , a = function() {
            t(o(), n),
            n = {}
        };
        AdTrack.Timer.create(i, (function() {
            s() || a()
        }
        )).start();
        var d = "onpagehide"in window ? "pagehide" : "unload";
        return AdTrack.Utils.addEvent(window, d, function() {
            s() || a()
        }
        .bind(this)),
        {
            addEvent: function(t, i, s) {
                if ("string" == typeof t) {
                    if (e[t] || (e[t] = []),
                    e[t].push(i),
                    r++,
                    s)
                        for (var o in s)
                            s.hasOwnProperty(o) && (n[o] = s[o]);
                    !i || "click" !== i.e && "unfilled" !== i.e && "close" !== i.e || a()
                }
            },
            flushStore: o,
            isEmpty: s
        }
    }
    ,
    {
        create: function(t) {
            return new n(t)
        }
    }),
    AdTrack.XhrReport = AdTrack.XhrReport || function() {
        var t = {}
          , e = AdTrack.Config.eventsEnabled()
          , i = function(e) {
            t[e] || (t[e] = AdTrack.EventStore.create((function(t, i) {
                !function(t, e, i) {
                    var n = "//" + t + "/events.php?" + AdTrack.Utils.uri("u", AdTrack.url);
                    for (var r in i)
                        if (i.hasOwnProperty(r)) {
                            var s = i[r];
                            s && (n += "&" + AdTrack.Utils.uri(r, s))
                        }
                    var o = new XMLHttpRequest;
                    o.open("POST", n, !0),
                    o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    var a = AdTrack.JSON.stringify(e);
                    a = a.replace(/&/g, "%26"),
                    o.send("events=" + a),
                    o.addEventListener("load", (function(t) {}
                    ))
                }(e, t, i)
            }
            )))
        }
          , n = function(n, r, s, o, a, d) {
            var c = AdTrack.Utils.time();
            i(a);
            var h = function(i, d, h, l, u) {
                if (!1 !== e) {
                    var p = {
                        rt: u,
                        t: AdTrack.Utils.time() - c,
                        e: h,
                        c: d ? d.tag : null,
                        cf: d ? d.flag : null,
                        v: l
                    }
                      , f = [n, r, s, o].join("/");
                    t[a].addEvent(f, p)
                }
            }
              , l = {
                doClick: function(t, e, i, n, r, s, o, a, d) {
                    if (h(0, e, "click", {
                        x: i,
                        y: n,
                        i: r,
                        z: s,
                        s: a ? a.name : null,
                        key: d
                    }),
                    t.options.newwindow)
                        ;
                    else if (null !== o)
                        try {
                            window.top.history.pushState && (AdTrack.BrowserFlags.isFirefox || AdTrack.BrowserFlags.isOldOpera) ? (window.top.history.pushState({}, document.title, window.top.location.href),
                            window.top.location.assign(o)) : window.top.location.assign(o)
                        } catch (t) {
                            window.top.location.href = o
                        }
                },
                doLoad: function(t, e, i, n, r) {
                    h(0, e, "load", {
                        c: i,
                        s: n ? n.name : null,
                        key: r
                    })
                },
                doPassback: function(t, e, i, n) {
                    var r = {};
                    i && (r.r = i,
                    r.c = n ? 1 : 0),
                    h(0, e, "passback", r)
                },
                doBidTimeout: function(t, e, i) {
                    h(0, e, "bid_timeout", {
                        debug: i ? 1 : 0
                    })
                },
                doBidError: function(t, e, i) {
                    h(0, e, "bid_error", {
                        debug: i ? 1 : 0
                    })
                },
                doBidTime: function(t, e, i, n) {
                    h(0, e, "bid_time", {
                        failed: n ? 1 : 0
                    }, i)
                },
                doTimeout: function(t, e) {
                    h(0, e, "timeout", null)
                },
                doBidResponse: function(t, e, i, n, r) {
                    h(0, e, "bid_response", i ? {
                        p: i,
                        w: n
                    } : {
                        w: n
                    }, r)
                },
                doBidRequest: function(t, e, i) {
                    h(0, e, "bid_request", {
                        c: i
                    })
                },
                doBidConsent: function(t, e) {
                    h(0, e, "bid_consent", null)
                },
                doClickConfirm: function(t, e) {
                    h(0, e, "click_confirm", null)
                },
                doImpress: function(t, e, i, n, r) {
                    h(0, e, "impress", {
                        coeff: n,
                        s: i ? i.name : null,
                        key: r
                    })
                },
                doAdRequest: function() {
                    h(0, null, "adrequest", null)
                },
                doAdStart: function() {
                    h(0, null, "adstart", null)
                },
                doDisplayRequest: function() {
                    h(0, null, "display_request", null)
                },
                doUnfilledImp: function(t) {
                    h(0, null, "unfilled", {
                        reason: t
                    })
                },
                doClose: function(t) {
                    h(0, null, "close", {
                        ct: t
                    })
                },
                doPlacementPassback: function() {
                    h(0, null, "pl_passback", null)
                },
                doPageView: function(t) {
                    var e = {};
                    if (t) {
                        var i = AdTrack.Utils.isMobile()
                          , n = AdTrack.Utils.screenDiagonal(screen.width, screen.height)
                          , r = navigator.userAgent;
                        e = {
                            ua: r = (r = r.replace(/"/g, "&quot;")).replace(/\\/g, "&bsol;"),
                            m: i,
                            s: n
                        }
                    }
                    h(0, null, "pageview", e)
                },
                doKeywords: function(t) {
                    h(0, null, "keywords", t)
                },
                doViewability: function(t) {
                    h(0, null, "viewability", {
                        t: t
                    })
                },
                doPbjCall: function(t, e) {
                    h(0, null, "pbjCall", {
                        pbu: e ? 1 : 0
                    }, t)
                },
                doPbjAdUnits: function(t, e, i) {
                    h(0, null, "pbjAdUnits", {
                        u: t ? 1 : 0,
                        f: e ? 1 : 0
                    }, i)
                },
                doPbjInAuction: function(t) {
                    h(0, null, "pbjInAuction", {
                        au: t
                    })
                },
                doPbjBidRequest: function(t, e, i) {
                    var n = "pbjBidRequest";
                    i && !0 === i && (n += "Debug"),
                    h(0, null, n, {
                        au: t
                    }, e)
                },
                doPbjTimeout: function(t, e, i) {
                    var n = "pbjTimeout";
                    i && !0 === i && (n += "Debug"),
                    h(0, null, n, {
                        au: t
                    }, e)
                },
                doPbjBidDone: function(t, e) {
                    h(0, null, "pbjBidDone", {
                        au: t
                    }, e)
                },
                doPbjNoBid: function(t, e, i) {
                    var n = "pbjNoBid";
                    i && !0 === i && (n += "Debug"),
                    h(0, null, n, {
                        au: t
                    }, e)
                },
                doPbjBid: function(t, e, i, n, r, s) {
                    h(0, i, "pbjBid", {
                        au: t,
                        p: n,
                        c: r,
                        rest: s
                    }, e)
                },
                doPbjWin: function(t, e, i, n, r) {
                    h(0, i, "pbjWin", {
                        au: t,
                        p: n,
                        c: r
                    }, e)
                },
                doPbjLoad: function(t, e, i, n, r) {
                    h(0, i, "pbjLoad", {
                        au: t,
                        p: n,
                        c: r
                    }, e)
                },
                doProfiling: function(t, e) {
                    h(0, null, "profiling", t, e)
                },
                doNTHBAuction: function(t, e, i, n) {
                    h(0, null, "nthbAuction", {
                        t: t,
                        s: e ? 1 : 0,
                        c: i,
                        p: n
                    })
                },
                doNTHBDisplay: function(t, e, i) {
                    h(0, null, "nthbDisplay", {
                        t: t,
                        o: e,
                        p: i
                    })
                }
            };
            return l
        }
          , r = function(n, r) {
            var s = AdTrack.Utils.time();
            i(n);
            var o = function(i, o, a) {
                if (r) {
                    if (!1 === e)
                        return;
                    var d = {
                        t: AdTrack.Utils.time() - s,
                        rt: a,
                        e: i,
                        v: o
                    };
                    t[n].addEvent("prebid", d, {
                        hbDomain: r
                    })
                }
            }
              , a = {
                prebidInAuction: function(t, e) {
                    o("inAuction", {
                        au: t,
                        b: e
                    })
                },
                prebidBidRequest: function(t, e, i) {
                    o("bidRequest", {
                        au: t,
                        b: e
                    }, i)
                },
                prebidBidTimeout: function(t, e, i) {
                    o("bidTimeout", {
                        au: t,
                        b: e
                    }, i)
                },
                prebidBid: function(t, e, i, n, r, s) {
                    o("bid", {
                        au: t,
                        b: e,
                        p: n,
                        c: r,
                        rest: s
                    }, i)
                },
                prebidWin: function(t, e, i, n, r) {
                    o("win", {
                        au: t,
                        b: e,
                        p: n,
                        c: r
                    }, i)
                },
                prebidLoad: function(t, e, i, n, r) {
                    o("load", {
                        au: t,
                        b: e,
                        p: n,
                        c: r
                    }, i)
                }
            };
            return a
        }
          , s = function(n) {
            var r = AdTrack.Utils.time();
            i(n);
            var s = function(i, s, o) {
                if (!1 !== e) {
                    var a = {
                        t: AdTrack.Utils.time() - r,
                        e: s,
                        v: o
                    };
                    t[n].addEvent(i, a)
                }
            }
              , o = {
                cmpTimeout: function(t) {
                    s("cmp", "timeout", {
                        cmp: t ? 1 : 0
                    })
                },
                cmpSuccess: function(t, e, i) {
                    s("cmp", "success", {
                        to: e ? 1 : 0,
                        source: t,
                        v: i
                    })
                }
            };
            return o
        }
          , o = {
            getPlacementReport: function(t, e, i, r, s, o) {
                return "string" != typeof s || "string" != typeof t || "string" != typeof e || "string" != typeof i || "string" != typeof r ? {} : new n(t,e,i,r,s,o)
            },
            getGenericReport: function(t) {
                return "string" != typeof t ? {} : new s(t)
            },
            getPrebidReport: function(t, e) {
                return "string" != typeof t ? {} : new r(t,e)
            }
        };
        return o
    }()
}
, function(t, e) {
    AdTrack.NTHB = function(t, e, i) {
        var n = []
          , r = []
          , s = 0
          , o = 0
          , a = !1
          , d = !1
          , c = {
            getBids: function() {
                return n
            },
            getBidCount: function() {
                return s
            },
            getDisplayed: function() {
                return r
            },
            addBid: function(t) {
                if (!d && t && t.getAuctionPrice()) {
                    if (!a && t.isValid() && (a = !0),
                    n.length > 0)
                        for (var e = 0; e < n.length; e++) {
                            if (t.isHigherThan(n[e])) {
                                n.splice(e, 0, t);
                                break
                            }
                            if (t.getAuctionPrice() === n[e].getAuctionPrice() && t.getIndex() < n[e].getIndex()) {
                                n.splice(e, 0, t);
                                break
                            }
                            if (e === n.length - 1) {
                                n.push(t);
                                break
                            }
                        }
                    else
                        n.push(t);
                    s++,
                    o += t.getAuctionPrice()
                }
            },
            getNext: function(t) {
                var s = n.shift();
                if (t)
                    for (; s && !s.isValid(); )
                        s = n.shift();
                return s && (r.push(s),
                "function" == typeof i.doNTHBDisplay && i.doNTHBDisplay(e, r.length, s.getAuctionPrice())),
                s
            },
            getId: function() {
                return t
            },
            end: function() {
                d = !0,
                s && "function" == typeof i.doNTHBAuction && i.doNTHBAuction(e, a, s, o)
            }
        };
        return c
    }
}
, function(t, e) {
    AdTrack.NTHB.Bid = function(t, e, i, n, r, s) {
        if (this.channel = t,
        this.wfChannel = e,
        this.price = n,
        this.index = i,
        n) {
            var o = n.isDeal();
            n.setFactor(o ? e.factorFixed : e.factor);
            var a = n.getPrice()
              , d = s ? r : e.floor;
            d = d || 0,
            this.valid = a && (a >= d || o || n.noFP)
        } else
            this.valid = !1;
        this.isValid = function() {
            return this.valid,
            this.valid
        }
        ,
        this.isDeal = function() {
            return this.price && this.price.isDeal()
        }
        ,
        this.getChannel = function() {
            return this.channel
        }
        ,
        this.getStyles = function() {
            return this.wfChannel.styles
        }
        ,
        this.getIndex = function() {
            return this.index
        }
        ,
        this.getAuctionPrice = function() {
            return this.price ? this.price.getPrice() : 0
        }
        ,
        this.isHigherThan = function(t) {
            if (this.price && t.price) {
                var e = this.getAuctionPrice() > t.getAuctionPrice()
                  , i = this.getChannel().chd.dealPriority && this.isDeal();
                return t.getChannel().chd.dealPriority && t.isDeal() ? i && e : i || e
            }
            return !!this.price
        }
    }
}
, function(module, exports) {
    var libs, _runCallbackQueue, _Lib, _Viewability, getVisiblePercentage, __currencies, _Price;
    AdTrack.Dispatcher = function(t, e, i, n, r, s, o, a, d) {
        this.version = 13,
        this.settings = d || {},
        this.gdpr = this.settings ? this.settings.gdpr : AdTrack.Config.isCMPEnabled(),
        this.cmpFallback = this.settings.cmpFallback ? this.settings.cmpFallback : AdTrack.Config.getCMPFallback(),
        "outstream" !== n && "outstream-premium" !== n || (r.renderer = "outstream"),
        this.time_start = AdTrack.Utils.time(),
        this.type = t,
        this.domain = e,
        this.group = i,
        this.position = n,
        this.unitID = AdTrack.ID.createIdDGPT(e, i, n, t),
        this.status = 0,
        this.pass = 0,
        this.t = 0,
        this.rendered = !1,
        this.events = [],
        this.debugMode = !1,
        this.debugTarget = "AdTrackDebugConsole",
        this.keywordOrigin = "online",
        this.processedChannels = [],
        this.deviceId = null,
        this.viewability = null,
        "track.us.org" != o && "http://track.us.org" != o || (o = "trackad.cz"),
        this.server = o || "trackad.cz",
        this.aaproxy = a,
        this.keywordLogUrl = AdTrack.Config.getKeywordsUrl();
        var c = "online";
        if (r && r.options.environment && (c = r.options.environment),
        this.environment = c,
        this.reporting = this.getReporting(c),
        this.errorReporting = AdTrack.Utils.errorReporting(this.server, AdTrack.url),
        this.pbjValidation = this.createPbjReportingValidation(),
        this.evPageView(!1),
        this.channelMap = [],
        this.keywordsModule = new AdTrack.KeywordsModule(this),
        this.jsonpScript = {},
        this.cookiesEnabled = !0,
        this.setCookie("AdTrack-cookies", 1, 1),
        this.cookiesEnabled = !!this.getCookie("AdTrack-cookies"),
        this.evAdRequest(),
        this.isHidden())
            this.evUnfilledImp("capping");
        else if (this.settings.dummyAds && this.settings.dummyAdsPath && (AdTrack.Libs.isDeployed("adtrack-dummy-js") || (this.dummyAds = AdTrack.Libs.deploy("adtrack-dummy-js", "//" + this.server + "/" + this.settings.dummyAdsPath, !!r.options.noAsync))),
        r)
            if (this.definition = r,
            this.isHB = !!r.options.hb,
            r.options.noAsync)
                this.tryToRun(r);
            else if (this.isHB)
                try {
                    this.tryToRun(r),
                    setTimeout(function() {
                        AdTrack.placementQ.execute(this.unitID)
                    }
                    .bind(this), 1)
                } catch (t) {
                    this.doError("Error during run placement - " + t.message)
                }
            else
                setTimeout(function() {
                    this.tryToRun(r),
                    AdTrack.placementQ.execute(this.unitID)
                }
                .bind(this), 1);
        else
            this.getDefinition()
    }
    ,
    AdTrack.Libs = AdTrack.Libs || (libs = {},
    _runCallbackQueue = function(t) {
        for (; t.length > 0; )
            t.shift()();
        t.push = function(t) {
            t()
        }
    }
    ,
    _Lib = function(t, e, i) {
        if ("string" == typeof t && !libs[t]) {
            libs[t] = {
                onload: [],
                onerror: [],
                loaded: !1
            };
            var n = function() {
                libs[t].loaded = !0,
                _runCallbackQueue(libs[t].onload)
            };
            if (i) {
                var r = "AdTrack" + Math.round(1e8 * Math.random());
                window[r] = n,
                document.write("<script src='" + e + "'><\/script>"),
                document.write("<script>window['" + r + "'](); <\/script>")
            } else {
                var s = document.createElement("script");
                s.src = e,
                s.onload = n,
                s.onerror = function() {
                    _runCallbackQueue(libs[t].onerror)
                }
                ,
                document.querySelector("head").appendChild(s)
            }
        }
        return {
            onload: function(e) {
                "function" == typeof e && libs[t].onload.push(e)
            },
            onerror: function(e) {
                "function" == typeof e && libs[t].onerror.push(e)
            }
        }
    }
    ,
    {
        isDeployed: function(t) {
            if ("string" == typeof t)
                return !!libs[t]
        },
        isAvailable: function(t) {
            return "string" == typeof t && libs[t] && libs[t].loaded
        },
        deploy: function(t, e, i) {
            return new _Lib(t,e,i)
        }
    }),
    AdTrack.pbUnitsLookUp = AdTrack.pbUnitsLookUp || function() {
        var t, e = "", i = null, n = null, r = AdTrack.Events.create(["fastLookUpEnded", "slowLookUpEnded"]);
        r.markEventAsTriggerOnce("fastLookUpEnded"),
        r.markEventAsTriggerOnce("slowLookUpEnded");
        var s = function(t) {
            return e || (e = t),
            e !== t && AdTrack.Prebid.error("Settings are inconsistent, multiple adUnits paths (requested '" + t + "', but using '" + e + "')"),
            AdTrack.Utils.deepAccess(window, e)
        }
          , o = function(e, i, n, o) {
            var a = AdTrack.Timer.create(i, (function(i) {
                if (t = s(e))
                    return a.stop(),
                    void r.trigger(o);
                1e3 * i > n && (a.stop(),
                r.trigger(o))
            }
            ));
            return a
        }
          , a = function(e) {
            return function() {
                e(t)
            }
        }
          , d = {
            fastLookUp: function(e, n) {
                r.addCallback("fastLookUpEnded", a(n)),
                (t = t || s(e)) ? r.trigger("fastLookUpEnded") : i || (i = o(e, 50, 500, "fastLookUpEnded")).start()
            },
            slowLookUp: function(e, i) {
                r.addCallback("slowLookUpEnded", a(i)),
                (t = t || s(e)) ? r.trigger("slowLookUpEnded") : n || (n = o(e, 500, 2e3, "slowLookUpEnded")).start()
            }
        };
        return d.stopLookUp = function(o) {
            (t = t || s(o)) || AdTrack.Prebid.error("Cant find AdUnits '" + e + "'"),
            i && i.stop(),
            n && n.stop(),
            r.trigger("fastLookUpEnded"),
            r.trigger("slowLookUpEnded")
        }
        ,
        d
    }(),
    AdTrack.Viewability = (_Viewability = function(t) {
        var e = t
          , i = e.ownerDocument
          , n = i.defaultView || i.parentWindow
          , r = AdTrack.Utils.windowTopAccess()
          , s = 0
          , o = 0
          , a = []
          , d = null
          , c = function(t) {
            s = t,
            function() {
                for (var t = a.length - 1; t >= 0; t--) {
                    var i = a[t];
                    i.time <= s && !i.removed && (i.interval > 0 ? i.end <= s ? (i.removed = !0,
                    a.splice(t, 1)[0].callback(e, o, s)) : (i.time += i.interval,
                    i.callback(e, o, s)) : (i.removed = !0,
                    a.splice(t, 1)[0].callback(e, o, s)))
                }
            }()
        }
          , h = function() {
            (o = getVisiblePercentage(e)) >= .7 ? d.start() : d.stop()
        }
          , l = function(t) {
            t && t.getBoundingClientRect && (d = AdTrack.Timer.create(500, c),
            AdTrack.Utils.addEvent(n, "resize", h),
            AdTrack.Utils.addEvent(n, "scroll", h),
            AdTrack.Utils.addEvent(n, "build", h),
            AdTrack.Utils.addEvent(n, "close", h),
            r && (AdTrack.Utils.addEvent(r, "resize", h),
            AdTrack.Utils.addEvent(r, "scroll", h)))
        };
        l(e);
        var u = function() {
            d && (AdTrack.Utils.removeEvent(n, "resize", h),
            AdTrack.Utils.removeEvent(n, "scroll", h),
            AdTrack.Utils.removeEvent(n, "build", h),
            AdTrack.Utils.removeEvent(n, "close", h),
            r && (AdTrack.Utils.removeEvent(r, "resize", h),
            AdTrack.Utils.removeEvent(r, "scroll", h)),
            d.stop(),
            d = null)
        };
        return {
            dispose: u,
            addCallback: function(t, e, i, n) {
                e = parseInt(e),
                e = isNaN(e) ? 0 : e,
                i = parseInt(i),
                i = isNaN(i) ? 0 : i,
                n = parseInt(n),
                n = isNaN(n) ? 0 : n,
                "function" == typeof t && a.push({
                    time: e,
                    callback: t,
                    removed: !1,
                    interval: i,
                    end: n
                })
            },
            getViewabilityTime: function() {
                return s
            },
            getVisiblePercentage: function() {
                return o
            },
            changeContainer: function(t) {
                u(),
                i = (e = t).ownerDocument,
                n = i.defaultView || i.parentWindow,
                l(e)
            }
        }
    }
    ,
    getVisiblePercentage = function(t) {
        try {
            var e = AdTrack.Utils.getCrossFrameRect(t)
              , i = t.ownerDocument
              , n = AdTrack.Utils.windowTopAccess() || i.defaultView || i.parentWindow;
            if (!e || !n)
                return 0
        } catch (t) {
            return 0
        }
        var r = e.right - e.left
          , s = e.bottom - e.top
          , o = AdTrack.Utils.getViewportRealWidth(n)
          , a = AdTrack.Utils.getViewportRealHeight(n)
          , d = Math.max(0, Math.min(e.right, o) - Math.max(e.left, 0))
          , c = Math.max(0, Math.min(e.bottom, a) - Math.max(e.top, 0));
        return r * s == 0 ? 0 : d * c / (r * s)
    }
    ,
    {
        create: function(t) {
            return new _Viewability(t)
        }
    }),
    AdTrack.Price = (__currencies = {
        USD: 22.203,
        EUR: 25.89,
        CZK: 1
    },
    _Price = function(t, e, i, n) {
        t = isNaN(t) ? -1 : t,
        this.originalPrice = t,
        this.currency = e,
        this.dealId = i || null,
        this.isDealFlag = !!i,
        this.noFP = n,
        this.price = t,
        this.factor = null,
        this.getCurrency = function() {
            return this.currency
        }
        ,
        this.getOriginalPrice = function() {
            return this.originalPrice
        }
        ,
        this.getPrice = function(t) {
            return t ? parseFloat(this.price / function(t) {
                return __currencies[t] || 1
            }(t)).toFixed(10) : this.price
        }
        ,
        this.getFactor = function() {
            return this.factor
        }
        ,
        this.setFactor = function(t) {
            this.factor || isNaN(t) || (this.factor = t > 0 ? t : 1,
            this.price = this.price * this.factor)
        }
        ,
        this.getDealId = function() {
            return this.dealId
        }
        ,
        this.isDeal = function() {
            return this.isDealFlag
        }
    }
    ,
    {
        USD: "USD",
        EUR: "EUR",
        CZK: "CZK",
        create: function(t, e, i, n) {
            return new _Price(t,e,i,n)
        },
        setCurrencySettings: function(t) {
            if (t)
                for (var e in __currencies)
                    __currencies.hasOwnProperty(e) && t.hasOwnProperty(e) && !isNaN(parseFloat(t[e])) && (__currencies[e] = parseFloat(t[e]))
        }
    }),
    AdTrack.Bid = function() {
        this.price = null,
        this.width = 0,
        this.height = 0,
        this.creativeId = null,
        this.videoVastXML = null,
        this.videoImpUrl = null
    }
    ,
    AdTrack.Bid.prototype = {
        setPrice: function(t) {
            this.price = t
        },
        setWidth: function(t) {
            this.width = t
        },
        setHeight: function(t) {
            this.height = t
        },
        getDimension: function() {
            return {
                width: this.width,
                height: this.height
            }
        },
        getPrice: function() {
            return this.price
        },
        setVideoVastXML: function(t) {
            this.videoVastXML = t
        },
        setVideoImpUrl: function(t) {
            this.videoImpUrl = t
        },
        getVideoVastXML: function() {
            return this.videoVastXML
        },
        getVideoImpUrl: function() {
            return this.videoImpUrl
        },
        getCreativeId: function() {
            return this.creativeId
        },
        setCreativeId: function(t) {
            this.creativeId = t
        }
    },
    AdTrack.Tier = function(t, e, i, n) {
        this.track = t,
        this.method = e,
        this.channels = i,
        this.skippedChannels = n || {},
        this.errorThreshold = 4e3
    }
    ,
    AdTrack.Tier.prototype = {
        getChannel: function(t, e) {
            var i = e.chd;
            i.textAd = !1;
            var n, r = e.floor, s = 0;
            if (e.floor && e.factor && (s = e.floor / e.factor,
            e.bfc && (s *= e.bfc)),
            i.bidFloor = s,
            e.styles && e.styles.other && (i.balanced = !0),
            "r2b2" !== i.tag)
                for (var o in i.keyCounts = {},
                i.keys)
                    i.keys.hasOwnProperty(o) && (i.keyCounts[i.keys[o]] = o);
            if ("sklik" == i.tag || "sklik-banner" == i.tag)
                return new AdTrack.SklikChannel(this.track,t,i);
            if ("sklik-hb" == i.tag)
                return (n = new AdTrack.SklikHBChannel(this.track,t,i)).setFloorPrice({
                    value: r,
                    currency: AdTrack.Price.CZK
                }),
                n;
            if ("etarget-cz" == i.tag || "etarget-sk" == i.tag || "etarget-ro" == i.tag)
                return new AdTrack.EtargetChannel(this.track,t,i);
            if ("etarget-banner" == i.tag)
                return new AdTrack.EtargetBannerChannel(this.track,t,i);
            if ("etarget-text" == i.tag)
                return new AdTrack.EtargetTextChannel(this.track,t,i);
            if ("adsense" == i.tag)
                return new AdTrack.AdSenseChannel(this.track,t,i);
            if ("google-dfp" == i.tag) {
                var a = this.track.domain;
                return "pmg.csfd.cz" === a || "jizdnirady.cz" === a || "kompasslev.cz" === a ? new AdTrack.GoogleDFPChannelNF(this.track,t,i) : new AdTrack.GoogleDFPChannel(this.track,t,i)
            }
            return "google-dfp-vgn" == i.tag ? new AdTrack.GoogleDFPChannelVGN(this.track,t,i) : "bb-rtb" == i.tag ? new AdTrack.BBRTBChannel(this.track,t,i) : "adform" == i.tag || "adform-im" == i.tag ? new AdTrack.AdformChannel(this.track,t,i) : "adform-na-hb" == i.tag || "adform-im-na-hb" == i.tag ? new AdTrack.AdformNAHBChannel(this.track,t,i) : "adform-native-dsp" == i.tag ? new AdTrack.AdformNativeDSPChannel(this.track,t,i) : "adform-hbbtv" == i.tag ? new AdTrack.AdformHbbtvChannel(this.track,t,i) : "adform-js-video" == i.tag ? new AdTrack.AdformJSVideChannel(this.track,t,i) : "adform-js-3rd" == i.tag ? new AdTrack.AdformJS3rdChannel(this.track,t,i) : "criteo-banner" == i.tag ? new AdTrack.CriteoBannerChannel(this.track,t,i) : "criteo-hb" == i.tag ? new AdTrack.CriteoHBChannel(this.track,t,i) : "criteo-hb-xhr" == i.tag ? new AdTrack.CriteoHBXHRChannel(this.track,t,i) : "criteo-hb-native" == i.tag ? new AdTrack.CriteoHBNativeChannel(this.track,t,i) : "criteo-hb-xhr-native" == i.tag ? new AdTrack.CriteoHBXHRNativeChannel(this.track,t,i) : "appnexus" == i.tag || "appnexus-native" == i.tag ? new AdTrack.AppNexusChannel(this.track,t,i) : "xandr" == i.tag || "xandr-native" == i.tag ? new AdTrack.AppNexusChannel(this.track,t,i) : "rubicon-banner-hb" == i.tag ? new AdTrack.RubiconBannerHBChannel(this.track,t,i) : "rubicon-video-hb" == i.tag ? new AdTrack.RubiconVideoHBChannel(this.track,t,i) : "smart-hb" == i.tag ? new AdTrack.SmartAdServerHBChannel(this.track,t,i) : "smart-hb-native" == i.tag ? new AdTrack.SmartAdServerHBNativeChannel(this.track,t,i) : "smart-hb-outstream" == i.tag ? new AdTrack.SmartHBOutstreamChannel(this.track,t,i) : "connectad" == i.tag ? new AdTrack.ConnectAdChannel(this.track,t,i) : "vast-video" == i.tag ? new AdTrack.VastVideoChannel(this.track,t,i) : "dfp-js-video" == i.tag ? new AdTrack.DFPJSVideoChannel(this.track,t,i) : "teads-hb" == i.tag ? new AdTrack.TeadsHBChannel(this.track,t,i) : "seznam-ssp-banner" == i.tag || "seznam-ssp-text" == i.tag || "seznam-ssp" == i.tag || "seznam-ssp-branding" == i.tag ? ((n = i.flag && -1 !== i.flag.indexOf("v2") ? new AdTrack.SeznamSspChannelV2(this.track,t,i) : new AdTrack.SeznamSspChannel(this.track,t,i)).setFloorPrice({
                value: r,
                currency: AdTrack.Price.CZK
            }),
            n) : "seznam-ssp-hb" == i.tag || "seznam-ssp-branding-hb" == i.tag ? new AdTrack.SeznamSspHbChannel(this.track,t,i) : "seznam-ssp-hb2" == i.tag || "seznam-ssp-branding-hb2" == i.tag ? new AdTrack.SeznamSspHb2Channel(this.track,t,i) : "stroeer-banner" == i.tag ? new AdTrack.StroeerChannel(this.track,t,i) : "stroeer-outstream" == i.tag ? new AdTrack.StroeerOutstreamChannel(this.track,t,i) : "r2b2" == i.tag ? new AdTrack.R2B2Channel(this.track,t,i) : "mgid-hb" == i.tag ? new AdTrack.MgidHBChannel(this.track,t,i) : "mgid-hb-native" == i.tag ? ((n = new AdTrack.MgidHBNativeChannel(this.track,t,i)).setFloorPrice(r),
            n) : "pubmatic-hb" == i.tag ? new AdTrack.PubmaticHBChannel(this.track,t,i) : "pubmatic-hb-outstream" == i.tag ? new AdTrack.PubmaticHBOutstreamChannel(this.track,t,i) : "smartyads-hb" == i.tag ? new AdTrack.SmartyAdsHBChannel(this.track,t,i) : "amazon" == i.tag ? new AdTrack.AmazonChannel(this.track,t,i) : "onetag" == i.tag ? new AdTrack.OneTagChannel(this.track,t,i) : "decenterads-hb" == i.tag ? new AdTrack.DecenterAdsHBChannel(this.track,t,i) : "moneytizer" == i.tag ? new AdTrack.MoneytizerChannel(this.track,t,i) : "reklamstore" == i.tag ? new AdTrack.ReklamStoreChannel(this.track,t,i) : "adagio-hb" == i.tag ? new AdTrack.AdagioHBChannel(this.track,t,i) : "between-hb" == i.tag ? new AdTrack.BetweenHBChannel(this.track,t,i) : (this.track.doError("Unknown ad channel " + i.tag),
            null)
        },
        run: function(t, e, i) {
            var n = function(t, e, i) {
                this.track.evBidRequest(t, e, i),
                function(t, e) {
                    e.pending = !0;
                    var i = function(t, e) {
                        e.pending && this.track.evTimeout(t, e)
                    }
                    .bind(this);
                    setTimeout((function() {
                        i(t, e)
                    }
                    ), this.errorThreshold)
                }
                .bind(this)(t, e)
            }
            .bind(this);
            try {
                if (t.options.dfpVignette = !1,
                this.callback = e,
                this.definition = t,
                "split" == this.method) {
                    for (var r = 0, s = [], o = 0; o < this.channels.length; o++) {
                        var a = Math.round(100 * this.channels[o].weight);
                        this.skippedChannels[o] ? s[o] = [1, 0] : (s[o] = [r, r + a],
                        r += a)
                    }
                    if (0 == r)
                        return this.track.passback(this.definition, null),
                        null;
                    for (var d = Math.random() * r, c = 0, h = 0; h < s.length; h++)
                        if (d >= s[h][0] && d < s[h][1]) {
                            c = h;
                            break
                        }
                    this.track.t = c;
                    var l = this.track.getChannelCount(this.channels[c].chd.keys);
                    this.channels[c].chd && "google-dfp-vgn" === this.channels[c].chd.tag ? (t.options.dfpVignette = !0,
                    n(t, this.channels[c].chd, l)) : this.track.renderer.on("ready", function() {
                        n(t, this.channels[c].chd, l)
                    }
                    .bind(this));
                    var u = this.getChannel(t, this.channels[c]);
                    this.callback(u, this.channels[c].styles)
                } else if ("hb" == this.method) {
                    this.timeout = AdTrack.Config.getAuctionTimeout(),
                    this.requestStarts = [],
                    this.hbId = Math.floor(1e5 * Math.random()),
                    this.hbChannels = [],
                    this.hbResponses = 0,
                    this.hbSkipped = 0,
                    this.hbEvaluated = !1,
                    this.hbStart = (new Date).getTime(),
                    this.hbTimeouted = !1,
                    this.hbEvalForced = !1,
                    this.hasResponse = !1,
                    this.minFP = 0;
                    for (var p = 0; p < this.channels.length; p++) {
                        var f = this.channels[p].floor;
                        f > 0 && (this.minFP <= 0 || f < this.minFP) && (this.minFP = f)
                    }
                    this.track.lastNTHBTier++,
                    this.track.nthb = AdTrack.NTHB(this.hbId, this.track.lastNTHBTier, this.track.reporting),
                    this.track.hbAuctionTimeouted && this.forceEvaluation(),
                    t.options.noAsync ? this.hbTimer = null : this.hbTimer = setTimeout(function() {
                        this.evalHB(!0)
                    }
                    .bind(this), this.timeout);
                    var g = function(e) {
                        return function() {
                            try {
                                var i = this.track.getChannelCount(this.channels[e].chd.keys)
                                  , r = this.getKey(this.channels[e].chd, this.channels[e].styles);
                                n(t, this.channels[e].chd, i),
                                this.requestStarts[e] = AdTrack.Utils.time(),
                                this.hbChannels[e] = this.getChannel(t, this.channels[e]),
                                this.hbChannels[e].state = "send_bid";
                                var s = function() {
                                    this.hbChannels[e].bid(function(t, i) {
                                        try {
                                            var n = new AdTrack.NTHB.Bid(this.hbChannels[e],this.channels[e],e,t,this.minFP,this.track.isNTHB);
                                            if (!t || this.hbTimeouted || this.hbEvaluated || this.hbId !== this.track.nthb.getId() || this.track.nthb.addBid(n),
                                            !this.hasResponse && n.isValid() && (this.hasResponse = !0),
                                            this.hbChannels[e].chd.pending = !1,
                                            this.hbResponses++,
                                            0 == this.hbTimeouted ? this.hbChannels[e].state = "response_return" : this.hbChannels[e].state = "timeout",
                                            this.hbChannels[e].responseTime = AdTrack.Utils.time() - this.requestStarts[e],
                                            this.hbEvalForced && this.hasResponse && !this.hbEvaluated && !this.track.definition.options.hb.stopAuction)
                                                return this.hbTimer && clearTimeout(this.hbTimer),
                                                void this.evalHB(!0);
                                            this.hbResponses + this.hbSkipped == this.channels.length && (this.hbTimer && clearTimeout(this.hbTimer),
                                            this.evalHB(!1))
                                        } catch (t) {
                                            this.track.doError("Error processing bid response - " + t.message)
                                        }
                                    }
                                    .bind(this), r)
                                }
                                .bind(this)
                                  , o = this.hbChannels[e].chd.delay;
                                o ? setTimeout(s, o) : s()
                            } catch (t) {
                                var a = "";
                                this.channels && this.channels[e] && this.channels[e].chd && this.channels[e].chd.tag && (a = this.channels[e].chd.tag),
                                this.track.isHB ? AdTrack.Prebid.error("Error while running bid (" + a + ") - " + t.message) : this.track.doError("Error while running bid (" + a + ") - " + t.message)
                            }
                        }
                    };
                    for (o = 0; o < this.channels.length; o++)
                        if (this.skippedChannels[o])
                            this.hbSkipped++;
                        else {
                            var m = g(o).bind(this);
                            t.options.noAsync ? m() : this.track.isHB ? m() : setTimeout(m, 1)
                        }
                    this.channels.length === this.hbSkipped && this.evalHB(!1)
                } else
                    this.track.doError("Unknown tier method " + this.method)
            } catch (t) {
                this.track.doError("Tier run failed: " + t.message)
            }
        },
        forceEvaluation: function() {
            if ("hb" === this.method && !this.hbEvalForced) {
                this.hbEvalForced = !0;
                var t = function() {
                    this.hbTimer && clearTimeout(this.hbTimer),
                    this.evalHB(!0)
                }
                .bind(this);
                this.track.definition.options.hb.stopAuction ? t() : this.hasResponse && t()
            }
        },
        getKey: function(t, e) {
            var i = e.product ? e.product.count : null
              , n = e.normal ? e.normal.count : null
              , r = e.product || null
              , s = e.normal || null
              , o = null;
            if (i === n)
                o = s;
            else if (null !== n && null === i)
                o = s;
            else if (null === n && null !== i)
                o = r;
            else {
                this.track.doError("Different parameter count at styles definition - " + n + " (normal) vs " + i + " (product) at channel tag " + t.tag);
                var a = [s, r];
                o = a[Math.floor(Math.random() * a.length)]
            }
            return this.track.getChannelKey(t, o)
        },
        evalHB: function(t) {
            try {
                if (this.hbTimeouted = t,
                this.hbEvaluated)
                    return;
                this.hbEvaluated = !0,
                this.hbEnd = (new Date).getTime(),
                this.track.nthb ? this.track.nthb.end() : this.track.doError("NTHB - object not available during evaluation, timeouted: " + t);
                for (var e = -1, i = -1, n = !1, r = 0; r < this.hbChannels.length; r++) {
                    var s = this.hbChannels[r];
                    if (s) {
                        var o = null
                          , a = 0
                          , d = !1
                          , c = !1
                          , h = ""
                          , l = null
                          , u = this.channels[r].floor;
                        s.price && (c = s.price.isDeal(),
                        d = s.price.noFP,
                        s.price.setFactor(c ? this.channels[r].factorFixed : this.channels[r].factor),
                        o = s.price.getPrice(),
                        a = s.price.getOriginalPrice(),
                        h = s.price.getCurrency(),
                        l = s.price.getFactor(),
                        "DID-811-92131" == s.price.getDealId() && this.track.doError("Deal ID (DID-811-92131) received from " + s.chd.tag + "#" + s.chd.flag + " has auction price  " + o + " " + h + " due factor " + l, "debug"));
                        try {
                            null !== o && AdTrack.Utils.isPremiumAdform(s.chd) && o < .99 * u && !c && !d && this.track.doError("Premium bid under FP")
                        } catch (t) {}
                        if (this.track.isNTHB && (u = this.minFP),
                        s.chd.dealPriority && c && (!n || n && o > e)) {
                            e = o,
                            i = r,
                            n = !0;
                            continue
                        }
                        if (!n && null !== o && (o >= u || c || d) && o > e)
                            e = o,
                            i = r;
                        else {
                            var p = "Channel (" + s.chd.tag + "#" + s.chd.flag + ")  with price " + o + " CZK, factor " + l + ",  (=" + a + " " + h + "), isDeal:" + c + " has been excluded from auction due: ";
                            if (n && !s.chd.dealPriority)
                                p += "Deal was prioritized.";
                            else if (null === o)
                                p = null;
                            else if (o < u && !c)
                                p += "Price " + o + " CZK is under the floor price which is " + u + " CZK";
                            else if (o <= e && null !== e)
                                if (this.hbChannels[i] && this.hbChannels[i].price) {
                                    var f = this.hbChannels[i];
                                    p += "There is already higher bidder " + f.chd.tag + "#" + f.chd.flag + " with price " + e + " CZK, factor " + f.price.getFactor() + " (=" + f.price.getOriginalPrice() + " " + f.price.getCurrency() + ")"
                                } else
                                    p += "winner bidder has undefined price";
                            p && "r2b2" === s.chd.tag && -1 !== this.track.unitID.getName().search("ulozto.cz") && this.track.doError(p, "debug")
                        }
                    }
                }
                for (var g = 0; g < this.hbChannels.length; g++) {
                    var m = this.hbChannels[g];
                    if (m && m.state && "response_return" === m.state) {
                        var k = i === g ? 1 : 0
                          , v = m.price ? m.price.getPrice() : null;
                        this.track.evBidResponse(null, m.chd, v, k, m.responseTime)
                    }
                }
                for (var b = 0; b < this.hbChannels.length; b++)
                    b !== i && this.hbChannels[b] && this.track.evPassback(this.definition, this.hbChannels[b].chd);
                if (-1 != i) {
                    this.track.t = i;
                    var y = this.hbChannels[i]
                      , A = y.price ? y.price.getPrice() : null;
                    this.track.renderer.on("ready", function() {
                        var t = this.track.nthb.getNext(!0)
                          , e = this.track.nthb.getBids()
                          , i = this.track.nthb.getBidCount()
                          , n = this.track.nthb.getDisplayed()
                          , r = t.getChannel();
                        if (this.track.isNTHB && e.length < i - 1 && this.track.doError("NTHB - missed bid, count: " + i + "(" + e.length + ")"),
                        r !== y)
                            try {
                                var s = -1
                                  , o = t
                                  , a = "";
                                t.getAuctionPrice() < A && (a += "nthb<;"),
                                e.forEach((function(t, e) {
                                    t.getChannel() === y && (s = e);
                                    var i = o.getAuctionPrice()
                                      , n = t.getAuctionPrice();
                                    n <= 0 && (a += "p0:" + e + ";"),
                                    n > i && (a += "f:" + (e - 1) + "-" + e + ";"),
                                    o = t
                                }
                                ));
                                var d = r.chd.tag + r.chd.flag
                                  , c = y.chd.tag + y.chd.flag
                                  , h = r.price.getPrice()
                                  , l = y.price.getPrice()
                                  , u = r.price.isDeal() + "-" + y.price.isDeal();
                                t.getAuctionPrice() !== h && (a += "inconsistent"),
                                this.track.doError("NTHB - highest bid differs, tag: " + (d !== c) + ", price: " + (h !== l) + ", deals: " + u + ", index: " + s + ", count: " + n.length + ", timeout: " + this.hbTimeouted + (a ? ", errors: " + a : ""))
                            } catch (t) {
                                this.track.doError("NTHB - highest bid differs - error: " + t.message)
                            }
                    }
                    .bind(this)),
                    this.track.isHB ? this.track.setHBCallback(y.price, y, function() {
                        this.callback(y, this.channels[i].styles)
                    }
                    .bind(this)) : this.callback(y, this.channels[i].styles)
                } else
                    this.track.nthb = null,
                    this.track.passback(this.definition, null);
                var T = this.track;
                if (T.isHB) {
                    var w = "mobile" === T.type ? 1 : 0
                      , x = T.definition.options.hb.prebidAdUnitsPath || "pbjs.CPEX_adUnits";
                    AdTrack.pbUnitsLookUp.slowLookUp(x, (function(t) {
                        t ? AdTrack.Utils.isInPrebidAdUnits(t, T.domain, T.group, T.position, w) ? T.evPbjAdUnits(!0, !0, AdTrack.Utils.time() - AdTrack.startTime) : T.evPbjAdUnits(!0, !1, AdTrack.Utils.time() - AdTrack.startTime) : T.evPbjAdUnits(!1, !1, AdTrack.Utils.time() - AdTrack.startTime)
                    }
                    ))
                }
            } catch (t) {
                this.track.doError("Error in HB evaluation - " + t.message)
            }
        }
    },
    AdTrack.Dispatcher.prototype = {
        getDefinition: function() {
            var url = "";
            url = this.aaproxy ? this.aaproxy + "?" : "//" + this.server + "/get/" + encodeURIComponent(this.domain) + "/" + encodeURIComponent(this.group) + "/" + encodeURIComponent(this.position) + "/" + ("mobile" == this.type ? "mobile" : "classic"),
            url += "?" + AdTrack.Utils.uri("ext[dpi]", AdTrack.Utils.getDPI()) + "&",
            AdTrack.BrowserFlags.isPhone && (270 == window.orientation || 90 == window.orientation || -90 == window.orientation) ? url += AdTrack.Utils.uri("ext[screenWidth]", screen.height) + "&" + AdTrack.Utils.uri("ext[screenHeight]", screen.width) : url += AdTrack.Utils.uri("ext[screenWidth]", screen.width) + "&" + AdTrack.Utils.uri("ext[screenHeight]", screen.height),
            url += "&" + AdTrack.Utils.uri("ext[mobile]", AdTrack.Utils.isMobile() ? 1 : 0),
            AdTrack.BrowserFlags.isOldIE && (url += "&" + AdTrack.Utils.uri("ext[isOldIE]", 1)),
            AdTrack.BrowserFlags.isIE && (url += "&" + AdTrack.Utils.uri("ext[isIE]", 1)),
            AdTrack.BrowserFlags.isOldOpera && (url += "&" + AdTrack.Utils.uri("ext[isOldOpera]", 1)),
            AdTrack.BrowserFlags.isFirefox && (url += "&" + AdTrack.Utils.uri("ext[isFirefox]", 1)),
            AdTrack.BrowserFlags.isPhone && (url += "&" + AdTrack.Utils.uri("ext[isPhone]", 1)),
            AdTrack.BrowserFlags.isOldAndroid && (url += "&" + AdTrack.Utils.uri("ext[isOldAndroid]", 1)),
            this.settings.isPreview && (url += "&" + AdTrack.Utils.uri("preview", 1)),
            this.settings.publisher && this.settings.publisher.pbid && (url += "&" + AdTrack.Utils.uri("pbid", this.settings.publisher.pbid)),
            this.jsonp(url, "dclbk", function(definition) {
                if (definition)
                    if ("request-error" !== definition && "request-timeouted" !== definition)
                        this.definition = definition,
                        definition.options.noAsync ? this.doError("Syncronous not supported for late rendering") : this.tryToRun(definition);
                    else {
                        var callbackName = ("adTrackJSONP" + Math.random()).replace(".", "");
                        window[callbackName] = function(t) {
                            delete window[callbackName],
                            this.tryToRun(t)
                        }
                        .bind(this),
                        AdTrack.Ajax.request({
                            label: "Late definition",
                            url: url + "&dclbk=" + callbackName,
                            method: "GET",
                            timeout: 0,
                            headers: {},
                            ontimeout: function() {
                                this.doError("Late definition ajax ontimeout", "info")
                            }
                            .bind(this),
                            onerror: function() {}
                            .bind(this)
                        }, this.errorReporting).done(function(ads) {
                            eval(ads)
                        }
                        .bind(this)).fail(function(t, e) {
                            this.doError("Late definition ajax FAIL (" + (e ? "timeouted" : "error") + ")" + t, "info")
                        }
                        .bind(this)).send()
                    }
                else
                    this.doError("No definition (" + typeof definition + ") sent for late loading")
            }
            .bind(this), 0)
        },
        initEvents: function() {
            this.showEvent = this.createEvent("build"),
            this.closeEvent = this.createEvent("close")
        },
        tryToRun: function(definition) {
            var _startPlacement = function() {
                this.start(definition)
            }
            .bind(this)
              , _passbackPlacement = function() {
                this.evPlacementPassback(),
                definition.waterfall.passback && eval(definition.waterfall.passback),
                definition.options.onPassback && eval(definition.options.onPassback)
            }
            .bind(this);
            if (definition.options.customMultipleAds && (AdTrack.static[this.unitID] || (AdTrack.static[this.unitID] = 0),
            AdTrack.static[this.unitID]++,
            definition.options.dom.multipleAdsCounter = AdTrack.static[this.unitID]),
            !definition.options.mobileOnly || AdTrack.Utils.isMobile(definition.options.checkScreenSize, definition.options.screenSizeThreshold))
                if (definition.options.desktopOnly && AdTrack.Utils.isMobile(definition.options.checkScreenSize, definition.options.screenSizeThreshold))
                    _passbackPlacement();
                else {
                    if (definition.options.maxScreenSize && AdTrack.Utils.screenDiagonal(screen.width, screen.height) > definition.options.maxScreenSize)
                        return this.evUnfilledImp("screenSize"),
                        void _passbackPlacement();
                    this.unitID && -1 !== this.unitID.getName().search("hp.prosvet.cz_generic_branding") && (definition.options.preRunCondition = "(function () {if(AdTrack.Utils.isMobile()){definition.options.noAsync=false; return false;} return true;})();"),
                    this.unitID && -1 !== this.unitID.getName().search("lidovky.cz_hb") && (definition.options.preRunCondition = "(function (w) {return w >= 1000;})(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))");
                    try {
                        if (definition.options.preRunCondition && !eval(definition.options.preRunCondition))
                            return void _passbackPlacement()
                    } catch (t) {}
                    if (definition.options.hb && definition.options.hb.onlyPrebid && definition.options.hb.prebidAdUnitsPath && !definition.options.noAsync) {
                        var d = this.domain
                          , g = this.group
                          , p = this.position
                          , m = "mobile" === this.type ? 1 : 0;
                        AdTrack.pbUnitsLookUp.fastLookUp(definition.options.hb.prebidAdUnitsPath, function(t) {
                            t && 0 !== t.length ? AdTrack.Utils.isInPrebidAdUnits(t, d, g, p, m) && (this.prebidUnit = !0,
                            _startPlacement()) : _startPlacement()
                        }
                        .bind(this))
                    } else
                        _startPlacement()
                }
            else
                _passbackPlacement()
        },
        start: function(definition) {
            try {
                this.evAdStart(),
                definition.macros = {},
                this.definition = definition,
                this.pass = 0,
                definition.options.publisher && "mafra" === definition.options.publisher.tag && ("undefined" == typeof Ads && (window.Ads = {}),
                Ads.adserver = "sas",
                definition.options.noAsync = !1,
                definition.options.compound = !1,
                !definition.options.publisher.pbid && definition.waterfall.passback && this.doError("Missing parameter pbid"));
                var cswl = definition.options.customCsyncWhiteList
                  , csbl = definition.options.customCsyncBlackList;
                cswl && (definition.options.customCsyncWhiteList = "string" == typeof cswl ? cswl.split(",") : null),
                csbl && "string" == typeof csbl && (definition.options.customCsyncBlackList = "string" == typeof csbl ? csbl.split(",") : null),
                AdTrack.Price.setCurrencySettings(definition.currencies),
                this.isHB = !!definition.options.hb,
                this.isNTHB = !!this.getOption("nthb");
                var multiImp = !!this.getOption("multiImp");
                if (this.useRenderProxy = multiImp || this.isNTHB,
                this.multi = multiImp || this.isNTHB ? {
                    load: 0,
                    pb: 0,
                    stop: !1
                } : null,
                this.cycleTime = this.getOption("cycleTime") || 60,
                this.skip = {},
                this.isHB && this.evPbjCall(AdTrack.Utils.time() - AdTrack.startTime),
                this.window = window,
                definition.options.topFrame)
                    try {
                        window.top && window.top.document && (this.window = window.top)
                    } catch (t) {
                        return void this.doError("Unable to perform topFrame rendering")
                    }
                if (this.document = this.window.document,
                this.transforms = AdTrack.DOM.Transforms.getTransforms(this.document),
                definition.options.dom && definition.options.dom.stopElement) {
                    var sc = this.document.querySelector(definition.options.dom.stopElement);
                    if (sc)
                        return
                }
                if (definition.options.dom && definition.options.dom.changeElement) {
                    var cc = this.document.querySelector(definition.options.dom.changeElement);
                    cc && definition.options.dom.selectorReplacement && (definition.options.dom.selector = definition.options.dom.selectorReplacement)
                }
                if (this.initEvents(),
                this.placementViewability && (this.placementViewability.dispose(),
                this.placementViewability = null),
                this.renderer = new AdTrack.BaseRenderer(this,definition,this.window,this.transforms,this.errorReporting),
                this.renderer.on("ready", this.evDisplayRequest.bind(this)),
                definition.options.compound)
                    if (definition.options.noAsync) {
                        var cid = this.type + "_" + this.domain + "_" + this.group + "_" + this.position;
                        if (AdTrack.units[cid])
                            if (1 == AdTrack.units[cid].status)
                                ;
                            else if (2 == AdTrack.units[cid].status) {
                                var ch = null;
                                definition.waterfall.tiers[AdTrack.units[cid].pass - 1].channels[AdTrack.units[cid].t] && (ch = definition.waterfall.tiers[AdTrack.units[cid].pass - 1].channels[AdTrack.units[cid].t]),
                                ch && ch.chd.passback ? eval(ch.chd.passback) : definition.waterfall.passback ? eval(definition.waterfall.passback) : this.doError("Passback is not defined for compound ad")
                            } else
                                this.doError("Unexpected status " + AdTrack.units[cid].status + " in compound ad ");
                        else
                            this.runWaterfall(definition)
                    } else
                        this.doError("Compound ads cannot be rendered in asynchronous mode");
                else
                    AdTrack.UserID ? AdTrack.UserID.waitForModule(function() {
                        this.runWaterfall(definition)
                    }
                    .bind(this)) : this.runWaterfall(definition)
            } catch (t) {
                this.doError("Placement start failed: " + t.message)
            }
        },
        runWaterfall: function(t) {
            try {
                var e = {
                    channel: null,
                    style: null
                };
                if (this.wfHasLoad = !1,
                this.lastNTHBTier = 0,
                this.isHB)
                    if (this.definition.options.noAsync)
                        this.doError("HB not supported for synchronous placements.");
                    else {
                        this.definition.options.hb.mappingId = this.definition.options.hb.mappingId || this.unitID.getName(),
                        this.auctionTimeout = this.definition.options.hb.auctionTimeout || this.definition.options.hbAuctionTimeout || AdTrack.Config.getHBTimeout() || 2e3,
                        AdTrack.hb.useTimeout(this.auctionTimeout);
                        var i = this.unitID.getName()
                          , n = this.definition.options.hb.mappingId
                          , r = this.definition.options.hb.group
                          , s = !1;
                        this.definition.options.hb.mappingId === this.unitID.getName() && (s = !0,
                        r && this.doError("Groups cant be used for DGPM mapping."));
                        var o = this.definition.options.hb.targeting
                          , a = this.definition.options.hb.targeting.setTargeting
                          , d = "branding" == t.renderer;
                        n && o ? (AdTrack.hb.addPlacement(i, n, r, o, d, a, s),
                        s ? this.openTier(t, this.pass, e) : setTimeout(function() {
                            this.openTier(t, this.pass, e)
                        }
                        .bind(this), 100)) : this.doError("Missing some HB requirements.")
                    }
                else
                    this.openTier(t, this.pass, e)
            } catch (t) {
                this.doError("Run waterfall failed: " + t.message)
            }
        },
        hbAuctionTimeout: function() {
            this.hbAuctionTimeouted = !0,
            this.currentTier && this.currentTier.forceEvaluation()
        },
        setHBCallback: function(t, e, i) {
            var n = e.chd;
            this.chdMax = n;
            var r = this.definition.options.hb.currency || "USD"
              , s = t ? t.getPrice(r) : 0
              , o = t ? t.getDealId() : null
              , a = {};
            e.bidResponse && (this.definition.options.hb.sendPrebidDimension || this.definition.options.customSendPrebidDimension) && (a.sendDimension = !0),
            e.bidResponse && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo) && (a.video = !0),
            this.HBCallback = i,
            AdTrack.hb.bidResponse(s, r, this.unitID.getName(), this.definition.options.hb.mappingId, this.definition.options.hb.group, o, e.bidResponse, a)
        },
        checkForRefresh: function() {
            var t = this.getOption("disableRefreshOnClose")
              , e = this.getOption("googleNoRefresh")
              , i = this.getOption("refreshFixed") || this.getOption("refreshTime");
            if (e) {
                var n = this.getActualChannel();
                if (n && (-1 !== n.chd.tag.indexOf("google") || "adsense" === n.chd.tag))
                    return
            }
            if (!isNaN(i) && !this.refreshTimeout) {
                var r = 1e3 * i;
                this.refreshTimeout = setTimeout(function() {
                    clearTimeout(this.refreshTimeout),
                    this.refreshTimeout = null,
                    this.refreshPlacement()
                }
                .bind(this), r),
                t && this.renderer.on("close", function() {
                    clearTimeout(this.refreshTimeout)
                }
                .bind(this))
            }
        },
        refreshPlacement: function() {
            try {
                this.renderer && this.renderer.destroy(),
                this.resetAd();
                var t = ""
                  , e = this.getOption("refreshPlacement");
                t = e && "string" == typeof e ? "//" + this.server + "/get/" + e : "//" + this.server + "/get/" + this.unitID.getPath();
                var i = document.getElementById("adtrack-refresh");
                i || ((i = document.createElement("div")).setAttribute("id", "adtrack-refresh"),
                document.querySelector("body").appendChild(i)),
                i.innerHTML = "";
                var n = document.createElement("script");
                i.appendChild(n),
                n.charset = "UTF-8",
                n.src = t
            } catch (t) {
                this.doError("Error while refreshing - " + t.message)
            }
        },
        displayAd: function(t, e) {
            if (this.debug("Main", "Display ad." + (t ? "  selector: " + t : "") + (e ? "  adUnit: " + e : ""), AdTrack.Log.INFO),
            "function" == typeof this.HBCallback && !this.isRendered()) {
                if (this.definition.options.dom && this.definition.options.dom.selectorForeign) {
                    if ("string" != typeof t)
                        return void this.doError("Unable to display ad, selector not provided.");
                    this.definition.options.dom.selector = t
                }
                e && (this.definition.macros.adUnit = e),
                this.HBCallback()
            }
        },
        show: function() {
            this.container && (this.container.style.visibility = "visible")
        },
        hide: function() {
            this.container && (this.container.style.visibility = "hidden")
        },
        resetAd: function() {
            this.transforms && this.transforms.revert()
        },
        isRendered: function() {
            return this.rendered
        },
        render: function(definition, channel, styles) {
            try {
                if ("viewport" === this.definition.options.checkWidth) {
                    var requiredWidth = channel.chd.requiredWidth ? channel.chd.requiredWidth : channel.chd.width ? channel.chd.width : 0
                      , availableWidth = AdTrack.Utils.getViewportRealWidth(this.window);
                    if (requiredWidth > availableWidth)
                        return void this.passback(definition, channel.chd)
                }
                if ("idnes.cz" === this.domain && "interscroll" === definition.renderer) {
                    var viewport_w = AdTrack.Utils.getViewportRealWidth(this.window)
                      , viewport_h = AdTrack.Utils.getViewportRealHeight(this.window);
                    if (viewport_w <= viewport_h)
                        this.evProfiling("interscroller orientation - portrait");
                    else if (this.evProfiling("interscroller orientation - landscape"),
                    definition.waterfall.passback)
                        return void eval(definition.waterfall.passback)
                }
                this.renderer.init(function() {
                    try {
                        if (this.renderer.on("destroy", (function() {
                            "function" == typeof channel.destroy && channel.destroy()
                        }
                        )),
                        channel.MTsupport)
                            channel.render(null, styles, function(t) {
                                t ? (t.on("load", function() {
                                    this.loaded(definition, channel.chd, t.getCount(), t.getStyle(), t.getPassedResponse(), !0),
                                    this.renderer.on("impress", function(e, i) {
                                        this.evImpress(definition, channel.chd, t.getStyle(), i)
                                    }
                                    .bind(this))
                                }
                                .bind(this)),
                                t.on("click", function() {
                                    this.evClick(definition, channel.chd, 0, 0, null, null, null, t.getStyle())
                                }
                                .bind(this)),
                                t.isPreloaded() && !definition.options.noAsync && t.on("error", function() {
                                    this.passback(definition, channel.chd, t.getPassbackReason())
                                }
                                .bind(this)),
                                this.renderer.render(t)) : this.errorReporting.doError("Channel does not return mediatype.")
                            }
                            .bind(this));
                        else {
                            var t = this.renderer.createContainer();
                            t ? channel.render(t, styles) : this.errorReporting.doError("Container not available.")
                        }
                    } catch (t) {
                        this.doError("Error rendering " + channel.chd.tag + " - " + t.message)
                    }
                }
                .bind(this))
            } catch (t) {
                this.doError("Error in placement render - " + t.message)
            }
        },
        openTier: function(definition, pass, passbackOption) {
            var chd = null
              , data = null;
            if (definition.waterfall) {
                if (this.shouldReturnDummyAd()) {
                    var renderDummy = function() {
                        var t = new AdTrack.DummyAds(this,definition);
                        this.render(definition, t, null)
                    }
                    .bind(this);
                    return this.dummyAds ? this.dummyAds.onload(renderDummy) : renderDummy(),
                    !0
                }
                if (definition.waterfall.tiers.length <= pass) {
                    try {
                        if (this.multi && (this.multi.pb++,
                        this.multi.load > 0)) {
                            if (passbackOption.channel && this.evPassback(definition, passbackOption.channel, passbackOption.reason),
                            this.multi.pb < 3) {
                                var rerun = function() {
                                    !0 !== this.multi.stop && (this.pass = 0,
                                    this.runWaterfall(this.definition))
                                }
                                .bind(this);
                                if (this.wfHasLoad)
                                    rerun();
                                else {
                                    var cycles = Math.floor(this.viewability.getViewabilityTime() / this.cycleTime);
                                    this.viewability.addCallback(rerun, cycles * this.cycleTime + this.cycleTime)
                                }
                            }
                            return !1
                        }
                        if (this.evPlacementPassback(),
                        this.isHB) {
                            var currency = this.definition.options.hb.currency || "USD";
                            AdTrack.hb.bidResponse(0, currency, this.unitID.getName(), definition.options.hb.mappingId, definition.options.hb.group, null, null, null)
                        }
                        definition.options.noAsync && void 0 !== document.readyState && "loading" !== document.readyState && !window.postscribe && this.doError("Possible synchronous passback in async context", "high"),
                        this.settings.publisher && "economia" === this.settings.publisher.tag && "loading" !== document.readyState && (passbackOption.reason = "noPassback"),
                        passbackOption.channel && this.evPassback(definition, passbackOption.channel, passbackOption.reason),
                        definition.waterfall.passback ? ("classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.evProfiling("dispatcher wf passback exists"),
                        eval(definition.waterfall.passback)) : "classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.evProfiling("dispatcher wf passback not exists"),
                        definition.options.onPassback && eval(definition.options.onPassback),
                        passbackOption.channel && passbackOption.channel.passback && eval(passbackOption.channel.passback),
                        this.status = 2,
                        this.renderer.events.trigger("empty"),
                        this.checkForRefresh()
                    } catch (t) {
                        this.doError("Error in placement passback - " + t.message),
                        "classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.evProfiling("dispatcher passback error: " + t.message)
                    }
                    return !1
                }
                try {
                    td = definition.waterfall.tiers[pass];
                    var tier = new AdTrack.Tier(this,definition.waterfall.tiers[pass].method,definition.waterfall.tiers[pass].channels,this.skip[pass]);
                    this.currentTier = tier,
                    tier.run(definition, function(t, e) {
                        this.channelMap[this.pass] = t,
                        this.render(definition, t, e)
                    }
                    .bind(this), pass)
                } catch (t) {
                    this.doError("Error opening tier - " + t.message)
                }
                return !0
            }
            if (definition.aagun) {
                tier = new AdTrack.Tier(this,"split",null);
                var ch = definition.aagun.channel
                  , data = definition.aagun.data
                  , channel = tier.getChannel(definition, ch);
                return channel.data = data,
                this.render(definition, channel, ch.styles),
                !0
            }
        },
        passback: function(t, e, i) {
            try {
                this.pass++;
                var n = {
                    channel: e,
                    reason: i
                };
                !0 === this.openTier(t, this.pass, n) && null !== e && this.evPassback(t, e, i)
            } catch (t) {
                this.doError("Error in passback - " + t.message)
            }
        },
        artificialFormat: function(t, e) {
            return {
                data: {
                    style: t,
                    width: e.width,
                    height: e.height,
                    chd: e
                }
            }
        },
        loaded: function(t, e, i, n, r, s) {
            try {
                !n && t.style && (n = t.style);
                var o = null;
                if (n && (o = n.name),
                s || (this.renderer.loaded(this.artificialFormat(n, e)),
                this.definition.options.dom.noContainer || this.renderer.on("impress", function(i, r) {
                    this.evImpress(t, e, n, r)
                }
                .bind(this))),
                this.rendered = !0,
                this.wfHasLoad = !0,
                this.checkForRefresh(),
                this.shouldReturnDummyAd() || this.evLoad(t, e, i, n),
                this.multi && (this.multi.load++,
                this.skip[this.pass] || (this.skip[this.pass] = {}),
                this.skip[this.pass][this.t] = !0),
                this.status = 1,
                t.options.onLoad)
                    new Function("response","chd","var l = " + t.options.onLoad + ".bind(this); l(response,chd)").bind(this)(r, e)
            } catch (t) {
                this.doError("Error in load - " + t.message)
            }
            try {
                if (!this.getOption("preventPublisherManipulation")) {
                    var a = this.window;
                    if (a === window.top)
                        this.container.setAttribute("data-adtrack-id", this.unitID.getName());
                    else {
                        for (; a.parent !== window.top; )
                            a = a.parent;
                        a.frameElement.setAttribute("data-adtrack-id", this.unitID.getName())
                    }
                }
            } catch (t) {}
            try {
                var d = this.getActualChannel()
                  , c = ""
                  , h = {}
                  , l = "";
                d.bidResponse && (l = d.bidResponse.getCreativeId() || ""),
                d.price && (h = {
                    cpm: d.price.getPrice(),
                    id: d.price.getDealId() || ""
                }),
                "function" == typeof d.report && (c = d.report()),
                this.settings.creativeLogId && this.settings.creativeLogId > 0 && "sklik" !== e.tag && "seznam-ssp" !== e.tag && AdTrack.Utils.reportCreative(this.server, this.settings.creativeLogId, e.tag, l, h.id || "", h.cpm || "", c),
                this.getCookie("adtrack_testlog") && this.settings.publisher && "mafra" === this.settings.publisher.tag ? "sklik" !== e.tag && "seznam-ssp" !== e.tag && AdTrack.Utils.reportCreative(this.server, 45, e.tag, l, h.id || "", h.cpm || "", c) : e.logs && e.logs.creative && AdTrack.Utils.reportCreative(this.server, e.logs.creative, e.tag, l, h.id || "", h.cpm || "", c),
                AdTrack.Ext.sendResponse(this.unitID, e.tag, e.flag, {
                    price: h,
                    response: c
                }, o)
            } catch (t) {}
        },
        getSupplyChain: function(t) {
            var e = ["asi", "sid", "hp", "rid", "name", "domain"];
            if (this.settings.publisher && this.settings.publisher.id) {
                var i = [{
                    asi: "r2b2.cz",
                    sid: this.settings.publisher.id,
                    hp: 1
                }];
                if (t) {
                    var n = "1.0,1";
                    return i.forEach((function(t) {
                        n += "!";
                        var i = [];
                        e.forEach((function(e) {
                            i.push(t[e] ? t[e] : "")
                        }
                        )),
                        n += i.join(",")
                    }
                    )),
                    n
                }
                return {
                    ver: "1.0",
                    complete: 1,
                    nodes: i
                }
            }
        },
        getActualChannel: function(t, e) {
            return t || (t = this.pass),
            e || (e = this),
            e.channelMap[t] ? e.channelMap[t] : null
        },
        getNS: function(t, e) {
            return t.querySelectorAll("." + e)
        },
        setText: function(t, e) {
            return Array.prototype.forEach.call(t, function(t) {
                t.innerHTML = e
            }
            .bind(this)),
            t
        },
        setAttribute: function(t, e, i) {
            return Array.prototype.forEach.call(t, function(t) {
                t.setAttribute(e, i)
            }
            .bind(this)),
            t
        },
        setOnclick: function(t, e, i) {
            return Array.prototype.forEach.call(t, function(t) {
                this.addEvent(t, "click", e),
                t.onclick = i ? "return true;" : "return false;"
            }
            .bind(this)),
            t
        },
        setZoomin: function(t, e) {
            return Array.prototype.forEach.call(t, function(t) {
                if ("scale" == e) {
                    var i = "scale(0.98,0.98)";
                    t.style.webkitTransform = i,
                    t.style.MozTransform = i,
                    t.style.msTransform = i,
                    t.style.OTransform = i,
                    t.style.transform = i
                } else
                    "opacity" == e && (t.style.opacity = .5);
                t.style.transition = "transform 5s, opacity 5s",
                t.style.transformOrigin = "0% 0%";
                var n = AdTrack.Viewability.create(t);
                setTimeout(function() {
                    n.addCallback((function(i) {
                        if (n.dispose(),
                        "scale" == e) {
                            t.style.webkitTransform = "scale(1,1)",
                            t.style.MozTransform = "scale(1,1)",
                            t.style.msTransform = "scale(1,1)",
                            t.style.OTransform = "scale(1,1)",
                            t.style.transform = "scale(1,1)"
                        } else
                            "opacity" == e && (t.style.opacity = 1)
                    }
                    ))
                }
                .bind(this), 3e3)
            }
            .bind(this)),
            t
        },
        measureImpress: function(t, e) {
            this.viewability && this.viewability.dispose(),
            this.viewability = AdTrack.Viewability.create(t),
            this.viewability.addCallback(e),
            this.placementViewability || (this.placementViewability = AdTrack.Viewability.create(this.multi ? this.container : t),
            this.placementViewability.addCallback(function() {
                this.evViewability(0)
            }
            .bind(this)),
            this.placementViewability.addCallback(function(t, e, i) {
                this.evViewability(Math.round(i))
            }
            .bind(this), 10, 5, 45)),
            this.multi && this.multi.pb < 3 && !0 !== this.multi.stop && this.viewability.addCallback(function() {
                if (!0 !== this.multi.stop)
                    if (this.isNTHB && this.nthb) {
                        var t = this.nthb.getNext();
                        if (t) {
                            var e = t.getChannel()
                              , i = t.getStyles();
                            this.t = t.getIndex(),
                            this.channelMap[this.pass] = e,
                            this.render(this.definition, e, i)
                        } else
                            this.nthb = null,
                            this.passback(this.definition, null)
                    } else
                        this.pass = 0,
                        this.runWaterfall(this.definition)
            }
            .bind(this), this.cycleTime)
        },
        clearClass: function(t, e) {
            return Array.prototype.forEach.call(t, function(t) {
                t.className = t.className.replace(e, "").trim(),
                "" == t.className && t.removeAttribute("class")
            }
            .bind(this)),
            null
        },
        doError: function(t, e) {
            this.errorReporting.doError(t, this.unitID, e)
        },
        doPbjError: function(t, e) {
            AdTrack.Prebid.error(t, this.unitID, e)
        },
        evPageView: function(t) {
            try {
                window.top.AdTrack = window.top.AdTrack || {},
                window.top.AdTrack.pageview || (this.reporting.doPageView(t),
                window.top.AdTrack.pageview = AdTrack.Utils.simpleStringGenerator(50))
            } catch (e) {
                AdTrack.pageview || (this.reporting.doPageView(t),
                AdTrack.pageview = AdTrack.Utils.simpleStringGenerator(50))
            }
        },
        evAdRequest: function() {
            this.reporting.doAdRequest()
        },
        evAdStart: function() {
            "function" == typeof this.reporting.doAdStart && this.reporting.doAdStart()
        },
        evUnfilledImp: function(t) {
            (this.definition && "vignette" === this.definition.renderer || "vignette" === this.position) && "function" == typeof this.reporting.doUnfilledImp && this.reporting.doUnfilledImp(t)
        },
        evDisplayRequest: function() {
            "function" == typeof this.reporting.doDisplayRequest && this.reporting.doDisplayRequest()
        },
        evClose: function(t) {
            (!t || t < 0) && (t = 0),
            "function" == typeof this.reporting.doClose && this.reporting.doClose(t)
        },
        evPlacementPassback: function() {
            "function" == typeof this.reporting.doPlacementPassback && this.reporting.doPlacementPassback()
        },
        evClick: function(t, e, i, n, r, s, o, a) {
            var d = this.getChannelKey(e, a);
            this.clickReported || (this.reporting.doClick(t, e, i, n, r, s, o, a, d),
            this.clickReported = !0)
        },
        evImpress: function(t, e, i, n) {
            n = Math.round(100 * n) / 100;
            var r = this.getChannelKey(e, i);
            this.reporting.doImpress(t, e, i, n, r),
            this.multi && "classic_jizdnirady.cz_generic_750x100middle" === this.unitID.getName() && ("google" !== e.tag && "google-dfp" !== e.tag || (this.multi.stop = !0))
        },
        evBidConsent: function(t, e) {
            this.reporting.doBidConsent(t, e)
        },
        evClickConfirm: function(t, e) {
            "function" == typeof this.reporting.doClickConfirm && this.reporting.doClickConfirm(t, e)
        },
        evBidRequest: function(t, e, i) {
            null != e && (e.pending = !0),
            this.reporting.doBidRequest(t, e, i)
        },
        evBidResponse: function(t, e, i, n, r) {
            "function" == typeof this.reporting.doBidResponse && this.reporting.doBidResponse(t, e, i, n, r)
        },
        evPassback: function(t, e, i) {
            null != e && (e.pending = !1),
            i ? this.reporting.doPassback(t, e, i, this.cookiesEnabled) : this.reporting.doPassback(t, e)
        },
        evTimeout: function(t, e) {
            this.reporting.doTimeout(t, e)
        },
        evBidTimeout: function(t, e, i) {
            this.reporting.doBidTimeout(t, e, i)
        },
        evBidError: function(t, e, i) {
            this.reporting.doBidError(t, e, i)
        },
        evBidTime: function(t, e, i, n) {
            this.unitID && "classic_echo24.cz_generic_480x300" === this.unitID.getName() && this.reporting.doBidTime(t, e, i, n)
        },
        evLoad: function(t, e, i, n) {
            null != e && (e.pending = !1);
            var r = this.getChannelKey(e, n);
            this.reporting.doLoad(t, e, i, n, r)
        },
        evKeywords: function(t) {
            null != this.keywordLogUrl && this.reporting.doKeywords(t)
        },
        evViewability: function(t) {
            var e = this.unitID.getName()
              , i = "flexi" === this.definition.renderer && "outstream" !== this.position && "video" !== this.position && "branding" !== this.position;
            ("classic_im.zkouknito.cz_generic_fixed" === e || "classic_im.fdb.cz_generic_fixed" === e || "mobile_im.zkouknito.cz_autorefresh_fixed" === e || "mobile_im.fdb.cz_autorefresh_fixed" === e || "classic_tn.cz_generic_fixed" === e || "classic_novaplus.cz_generic_fixed" === e || "classic_followmanga.com_generic_fixed" === e || "classic_jappy.com_generic_fixed" === e || i) && this.reporting.doViewability(t)
        },
        evProfiling: function(t, e) {
            var i = -1 !== this.unitID.getName().search("branding") && (-1 !== this.unitID.getName().search("ihned.cz") || -1 !== this.unitID.getName().search("centrum.cz") || -1 !== this.unitID.getName().search("aktualne.cz"))
              , n = "fixed2" === e && "classic_podnikatel.cz_article_fixed" === this.unitID.getName()
              , r = "collision" === e && ("classic_idnes.cz_generic_fixed" === this.unitID.getName() || "classic_idnes.cz_homepage_fixed" === this.unitID.getName())
              , s = -1 !== t.indexOf("passback") && ("classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() || "classic_zpravy.idnes.cz_rtb-article_480x300" === this.unitID.getName() || "classic_zpravy.idnes.cz_article_480x300" === this.unitID.getName() || "classic_idnes.cz_rtb-premium-hp_interscroller" === this.unitID.getName() || "classic_idnes.cz_homepage_interscroller" === this.unitID.getName())
              , o = -1 !== t.indexOf("interscroller orientation") && ("classic_idnes.cz_rtb-premium-hp_interscroller" === this.unitID.getName() || "classic_idnes.cz_homepage_interscroller" === this.unitID.getName())
              , a = "opacity" === e && this.settings.publisher && "optimanetwork" === this.settings.publisher.tag
              , d = "DFP vignette" === e && ("mobile_parlamentnilisty.cz_generic_vignette" === this.unitID.getName() || "mobile_ii.zdravi.euro.cz_generic_vignette" === this.unitID.getName() || "mobile_expres.cz_generic_vignette" === this.unitID.getName());
            if (this.unitID && (-1 !== this.unitID.getName().search("tn.cz_hb") || -1 !== this.unitID.getName().search("echo24.cz") || -1 !== this.unitID.getName().search("parlamentnilisty.cz") || -1 !== this.unitID.getName().search("securitymagazin.cz") || -1 !== this.unitID.getName().search("krajskelisty.cz") || -1 !== this.unitID.getName().search("ceska-justice.cz") || -1 !== this.unitID.getName().search("babyweb.cz") || -1 !== this.unitID.getName().search("finance.cz") || -1 !== this.unitID.getName().search("bezrealitky.cz") || -1 !== this.unitID.getName().search("drbna.cz") || -1 !== this.unitID.getName().search("akcniceny.cz") || -1 !== this.unitID.getName().search("zdravi.euro.cz")) || i || n || s || r || o || a || d) {
                if ("function" == typeof this.reporting.doProfiling && (!this.multi || this.multi && 0 === this.multi.load && 0 === this.multi.pb)) {
                    var c = AdTrack.Utils.time() - this.time_start;
                    this.reporting.doProfiling("v8-" + t, c)
                }
            }
        },
        createPbjReportingValidation: function() {
            var t = function(t) {
                this.settings.publisher && "global24SRO" === this.settings.publisher.tag || this.doPbjError(t)
            }
            .bind(this)
              , e = 0
              , i = 0;
            return {
                call: function() {
                    ++e > 1 && t("Placement called multiple times.")
                },
                adUnits: function() {
                    ++i > 1 && t("AdUnits event called multiple times.")
                },
                bidRequest: function() {
                    0
                },
                timeout: function() {
                    0
                },
                bidDone: function() {
                    0
                },
                noBid: function() {
                    0
                },
                bid: function() {
                    0
                },
                win: function() {
                    0
                },
                load: function() {
                    0
                }
            }
        },
        stopLookUp: function() {
            this.definition.options.hb && this.definition.options.hb.onlyPrebid && this.definition.options.hb.prebidAdUnitsPath && AdTrack.pbUnitsLookUp.stopLookUp(this.definition.options.hb.prebidAdUnitsPath)
        },
        evPbjCall: function(t) {
            "function" == typeof this.reporting.doPbjCall ? (this.pbjValidation.call(),
            this.reporting.doPbjCall(t, !!this.prebidUnit)) : this.doPbjError("Cant report, 'doPbjCall' is not a function.")
        },
        evPbjAdUnits: function(t, e, i) {
            "function" == typeof this.reporting.doPbjAdUnits ? (this.pbjValidation.adUnits(),
            this.reporting.doPbjAdUnits(t, e, i)) : this.doPbjError("Cant report, 'doPbjAdUnits' is not a function.")
        },
        evPbjInAuction: function(t) {
            if (t && (-1 !== t.indexOf("Bsz") || -1 !== t.indexOf("tKl") || -1 !== t.indexOf("Kie"))) {
                var e = ""
                  , i = 0;
                if (t.length < 20) {
                    for (var n = 0; n < t.length; n++) {
                        i++,
                        e += t.charCodeAt(n) + " "
                    }
                    this.doError("Weird adunit passed '" + t + "', len: " + i + "(" + t.length + "), chars: " + e)
                }
            }
            this.stopLookUp(),
            "function" == typeof this.reporting.doPbjInAuction ? this.reporting.doPbjInAuction(t) : this.doPbjError("Cant report, 'doPbjInAuction' is not a function.")
        },
        evPbjBidRequest: function(t, e) {
            this.stopLookUp(),
            "function" == typeof this.reporting.doPbjBidRequest ? (this.pbjValidation.bidRequest(),
            this.reporting.doPbjBidRequest(t, e)) : this.doPbjError("Cant report, 'doPbjBidRequest' is not a function.")
        },
        evPbjBidRequestDebug: function(t, e) {
            "function" == typeof this.reporting.doPbjBidRequest ? this.reporting.doPbjBidRequest(t, e, !0) : this.doPbjError("Cant report, 'doPbjBidRequest' is not a function.")
        },
        evPbjTimeout: function(t, e) {
            "function" == typeof this.reporting.doPbjTimeout ? (this.pbjValidation.timeout(),
            this.reporting.doPbjTimeout(t, e)) : this.doPbjError("Cant report, 'doPbjTimeout' is not a function.")
        },
        evPbjTimeoutDebug: function(t, e) {
            "function" == typeof this.reporting.doPbjTimeout ? this.reporting.doPbjTimeout(t, e, !0) : this.doPbjError("Cant report, 'doPbjTimeout' is not a function.")
        },
        evPbjBidDone: function(t, e) {
            "function" == typeof this.reporting.doPbjBidDone ? (this.pbjValidation.bidDone(),
            this.reporting.doPbjBidDone(t, e)) : this.doPbjError("Cant report, 'doPbjBidDone' is not a function.")
        },
        evPbjNoBid: function(t, e) {
            "function" == typeof this.reporting.doPbjNoBid ? (this.pbjValidation.noBid(),
            this.reporting.doPbjNoBid(t, e)) : this.doPbjError("Cant report, 'doPbjNoBid' is not a function.")
        },
        evPbjBid: function(t, e, i, n, r) {
            var s = this.chdMax ? this.chdMax : null;
            "function" == typeof this.reporting.doPbjBid ? (this.pbjValidation.bid(),
            this.reporting.doPbjBid(t, e, s, i, n, r)) : this.doPbjError("Cant report, 'doPbjBid' is not a function.")
        },
        evPbjWin: function(t, e, i, n) {
            var r = this.chdMax ? this.chdMax : null;
            "function" == typeof this.reporting.doPbjWin ? (this.pbjValidation.win(),
            this.reporting.doPbjWin(t, e, r, i, n)) : this.doPbjError("Cant report, 'doPbjWin' is not a function.")
        },
        evPbjLoad: function(t, e, i, n) {
            var r = this.chdMax ? this.chdMax : null;
            "function" == typeof this.reporting.doPbjLoad ? (this.pbjValidation.load(),
            this.reporting.doPbjLoad(t, e, r, i, n)) : this.doPbjError("Cant report, 'doPbjLoad' is not a function.")
        },
        log: function(t) {},
        isBanner: function(t) {
            return t.length > 0 && t[0].isBanner
        },
        rhtmlspecialchars: function(t) {
            return "string" == typeof t && (t = (t = (t = (t = (t = t.replace(/&gt;/gi, ">")).replace(/&lt;/gi, "<")).replace(/&#039;/g, "'")).replace(/&quot;/gi, '"')).replace(/&amp;/gi, "&")),
            t
        },
        noquerystring: function(t) {
            return t.split("?")[0]
        },
        escapeRegExp: function(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        createEvent: function(t) {
            return AdTrack.Utils.createEvent(this.document, t)
        },
        addEvent: function(t, e, i) {
            AdTrack.Utils.addEvent(t, e, i)
        },
        removeEvent: function(t, e, i) {
            AdTrack.Utils.removeEvent(t, e, i)
        },
        jsonp: function(t, e, i, n) {
            n = n || 0 === n ? n : this.settings.timeout ? this.settings.timeout : 5e3,
            AdTrack.Utils.jsonp(t, e, i, n)
        },
        shouldCsync: function(t) {
            var e = this.definition.options.customCsyncWhiteList
              , i = this.definition.options.customCsyncBlackList;
            return (!i || !i.indexOf || -1 === i.indexOf(t)) && (!e || !e.indexOf || -1 !== e.indexOf(t))
        },
        getReporting: function(t) {
            return t && "hbbtv" === t ? new AdTrack.JsonPReport(this.domain,this.group,this.position,this.type,this.server,this.keywordLogUrl) : AdTrack.XhrReport.getPlacementReport(this.domain, this.group, this.position, this.type, AdTrack.Config.getReportingUrl(), this.keywordLogUrl)
        },
        getDomainName: function(t) {
            var e = t.split(".").reverse();
            return e.length >= 3 && e[1].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz|us)$/i) ? e[2] + "." + e[1] + "." + e[0] : e[1] + "." + e[0]
        },
        setCookie: function(t, e, i) {
            if (this.cookiesEnabled) {
                var n = new Date;
                n.setTime(n.getTime() + 1e3 * i);
                var r = "expires=" + n.toUTCString();
                document.cookie = t + "=" + e + "; " + r + ";domain=" + this.getDomainName(document.location.host) + "; Path=/"
            } else {
                var s = {
                    k: t,
                    v: e,
                    x: i
                }
                  , o = "//" + this.server + "/cookie.php"
                  , a = new XMLHttpRequest;
                a.addEventListener("load", (function(t) {}
                )),
                a.open("POST", o, !0),
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                a.send("cookie=" + AdTrack.JSON.stringify(s))
            }
        },
        getCookie: function(t) {
            if (this.cookiesEnabled)
                return AdTrack.Utils.readCookie(t);
            var e = "//" + this.server + "/cookie.php?" + AdTrack.Utils.uri("k", t)
              , i = new XMLHttpRequest;
            return i.open("GET", e, !1),
            i.send(),
            200 === i.status ? i.responseText : ""
        },
        addImp: function(t) {
            var e = this.getCookie("AdTrack-imp-" + this.domain + "-" + this.type + "-" + this.group + "-" + this.position);
            return e ? e++ : e = 1,
            this.setCookie("AdTrack-imp-" + this.domain + "-" + this.type + "-" + this.group + "-" + this.position, e, t),
            e
        },
        setHide: function(t) {
            this.setCookie("AdTrack-hide-" + this.domain + "-" + this.type + "-" + this.group + "-" + this.position, 1, t)
        },
        isHidden: function() {
            return this.getCookie("AdTrack-hide-" + this.domain + "-" + this.type + "-" + this.group + "-" + this.position)
        },
        getChannelKeyFallback: function(t) {
            var e = t.keys;
            return e[Object.keys(e)[0]] ? e[Object.keys(e)[0]] : null
        },
        getChannelKey: function(t, e) {
            return null == e || 0 == e.length ? t.keys[1] ? t.keys[1] : this.getChannelKeyFallback(t) : e.count && t.keys[e.count] ? t.keys[e.count] : this.getChannelKeyFallback(t)
        },
        getChannelCount: function(t) {
            var e = Object.keys(t);
            return e[0] ? e[0] : 0
        },
        getOption: function(t, e) {
            if (e && e.options && e.options[t])
                return e.options[t];
            if (this.definition.options) {
                if (this.definition.options[t])
                    return this.definition.options[t];
                var i = "custom" + (t.charAt(0).toUpperCase() + t.slice(1));
                if (this.definition.options[i])
                    return this.definition.options[i]
            }
        },
        setDebugMode: function() {
            this.debugMode = !0
        },
        debug: function(t, e, i) {},
        _dispatchShow: function() {
            this.window.dispatchEvent(this.showEvent)
        },
        _dispatchClose: function() {
            this.window.dispatchEvent(this.closeEvent)
        },
        shouldReturnDummyAd: function() {
            return !("function" != typeof AdTrack.DummyAds && !this.dummyAds) && (this.settings.dummyAds && !0 === this.settings.dummyAds)
        },
        getDeviceId: function() {
            return this.deviceId || (this.deviceId = AdTrack.Utils.getDeviceId(this)),
            this.deviceId
        },
        highlight: function(t) {
            this.container && "object" == typeof this.container.style && (this.container.style.boxShadow = t ? "" : "0px 0px 0px 11px #ff9933")
        }
    }
}
, function(t, e) {
    AdTrack.PWTWrap = AdTrack.PWTWrap || {
        load: function(t) {
            !function() {
                if (!AdTrack.Libs.isDeployed("pubmatic-pwt")) {
                    var e;
                    try {
                        e = window.location.href
                    } catch (t) {}
                    var i = "";
                    if (e.indexOf("pwtv=") > 0) {
                        var n = /pwtv=(.*?)(&|$)/g.exec(e);
                        n.length >= 2 && n[1].length > 0 && (i = "/" + n[1])
                    }
                    var r = "//ads.pubmatic.com/AdServer/js/pwt/158361/3614" + i + "/pwt.js";
                    AdTrack.Libs.deploy("pubmatic-pwt", r).onload((function() {
                        t()
                    }
                    ))
                }
            }()
        }
    },
    function() {
        var t = window;
        try {
            window.top.AdTrack = window.top.AdTrack || {},
            t = window.top
        } catch (t) {}
        if (-1 === t.location.hostname.indexOf("pravda.sk") && -1 === t.location.hostname.indexOf("kurzy.cz") && -1 === t.location.href.indexOf("r2b2-test-userid"))
            return null;
        var e = function() {
            var t = []
              , e = null
              , i = !1
              , n = !1
              , r = []
              , s = !1
              , o = null
              , a = null
              , d = {
                intentIqId: {
                    atype: 1,
                    source: "intentiq.com"
                },
                pubcid: {
                    atype: 1,
                    source: "pubcid.org"
                },
                tdid: {
                    atype: 1,
                    source: "adserver.org"
                },
                id5id: {
                    atype: 1,
                    source: "id5-sync.com"
                },
                parrableId: {
                    atype: 1,
                    source: "parrable.com"
                },
                idl_env: {
                    atype: 1,
                    source: "liveramp.com"
                },
                lipb: {
                    atype: 1,
                    source: "liveintent.com"
                },
                britepoolid: {
                    atype: 1,
                    source: "britepool.com"
                },
                lotamePanoramaId: {
                    atype: 1,
                    source: "crwdcntrl.net"
                },
                criteoId: {
                    atype: 1,
                    source: "criteo.com"
                },
                merkleId: {
                    atype: 1,
                    source: "merkleinc.com"
                },
                netId: {
                    atype: 1,
                    source: "netid.de"
                },
                sharedid: {
                    atype: 1,
                    source: "sharedid.org"
                },
                IDP: {
                    atype: 1,
                    source: "zeotap.com"
                },
                haloId: {
                    atype: 1,
                    source: "audigent.com"
                },
                quantcastId: {
                    atype: 1,
                    source: "quantcast.com"
                }
            }
              , c = function() {
                for (var t = 0; t < r.length; t++)
                    try {
                        r[t]()
                    } catch (t) {}
            }
              , h = function(t) {
                var e;
                try {
                    e = window.PWT || window.top.PWT
                } catch (t) {}
                if (e && "function" == typeof e.getUserIds) {
                    s = !0;
                    var i = e.getUserIds();
                    AdTrack.Utils.setCookieFirstParty("AdTrack-PWT", JSON.stringify(i), 14400),
                    t(i)
                }
            }
              , l = function() {
                ("done" !== e || "done" === e && n) && (e = "done",
                clearInterval(o),
                clearTimeout(a))
            }
              , u = function(e, i, n) {
                t = e,
                n,
                l(),
                i()
            }
              , p = function(r) {
                if (!!t && Array.isArray(t) && t.length > 0)
                    r();
                else {
                    var d = function(t) {
                        u(t, r, "script"),
                        "done" !== e && setTimeout((function() {
                            h(d)
                        }
                        ), 100)
                    }
                      , p = function() {
                        s || h(d)
                    }
                      , f = AdTrack.Utils.readCookie("AdTrack-PWT");
                    if (f && (u(JSON.parse(f), r, "cookie"),
                    "done" === e && setTimeout(p, 5e3)),
                    !o && "done" !== e) {
                        o = setInterval(p, 100),
                        a = setTimeout((function() {
                            l(),
                            n = !0
                        }
                        ), 5e3);
                        var g = setTimeout((function() {
                            "done" !== e && (i = !0,
                            c()),
                            clearTimeout(g)
                        }
                        ), 200)
                    }
                }
            }
              , f = {
                getUserIdsConfig: function() {
                    return d
                },
                getAllUserIds: function() {
                    return t || null
                },
                getAllUserIdsAsEids: function() {
                    var e = Object.keys(t);
                    if (0 === e.length)
                        return [];
                    var i = [];
                    return e.forEach(e=>{
                        if (void 0 === t[e])
                            return null;
                        var n = d[e]
                          , r = AdTrack.UserID.createEidObject(t[e], n.source, n.atype);
                        r && r.source && r.uids && i.push(r)
                    }
                    ),
                    i
                },
                getUserIds: function(e) {
                    var i = [];
                    return e && e.length > 1 ? e.forEach((function(e) {
                        t[e] && i.push(t[e])
                    }
                    )) : i = t,
                    i
                },
                getUserId: function(e) {
                    return t[e] || null
                },
                getCriteoId: function() {
                    return this.getUserId("criteoId")
                },
                createEidObject: function(t, e, i) {
                    let n = {};
                    if (n.source = e,
                    "string" == typeof t) {
                        const e = {
                            id: t,
                            atype: i
                        };
                        return n.uids = [e],
                        n
                    }
                },
                waitForModule: function(t) {
                    "function" == typeof t && ("done" === e || i ? t() : r.push(AdTrack.Utils.singleUseCallback(t)))
                },
                fn: function() {},
                init: function(t) {
                    var e = function() {
                        p(c)
                    };
                    t.loadLib && !0 === t.loadLib && !AdTrack.Utils.readCookie("AdTrack-PWT") ? AdTrack.PWTWrap.load(e) : e()
                }
            };
            return f.init(AdTrack.Config.getUserID()),
            f
        };
        if (t.AdTrack.UserID && "function" == typeof t.AdTrack.UserID.fn)
            try {
                t.AdTrack.UserID.fn()
            } catch (i) {
                t.AdTrack.UserID = e()
            }
        else
            t.AdTrack.UserID = e();
        window.AdTrack.UserID = t.AdTrack.UserID
    }()
}
, function(t, e, i) {
    const n = i(14);
    AdTrack.UAParser = AdTrack.UAParser || n
}
, function(t, e, i) {
    var n;
    !function(r, s) {
        "use strict";
        var o = "model"
          , a = "name"
          , d = "type"
          , c = "vendor"
          , h = "version"
          , l = "mobile"
          , u = "tablet"
          , p = {
            extend: function(t, e) {
                var i = {};
                for (var n in t)
                    e[n] && e[n].length % 2 == 0 ? i[n] = e[n].concat(t[n]) : i[n] = t[n];
                return i
            },
            has: function(t, e) {
                return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
            },
            lowerize: function(t) {
                return t.toLowerCase()
            },
            major: function(t) {
                return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        }
          , f = {
            rgx: function(t, e) {
                for (var i, n, r, s, o, a, d = 0; d < e.length && !o; ) {
                    var c = e[d]
                      , h = e[d + 1];
                    for (i = n = 0; i < c.length && !o; )
                        if (o = c[i++].exec(t))
                            for (r = 0; r < h.length; r++)
                                a = o[++n],
                                "object" == typeof (s = h[r]) && s.length > 0 ? 2 == s.length ? "function" == typeof s[1] ? this[s[0]] = s[1].call(this, a) : this[s[0]] = s[1] : 3 == s.length ? "function" != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = a ? a.replace(s[1], s[2]) : void 0 : this[s[0]] = a ? s[1].call(this, a, s[2]) : void 0 : 4 == s.length && (this[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : void 0) : this[s] = a || void 0;
                    d += 2
                }
            },
            str: function(t, e) {
                for (var i in e)
                    if ("object" == typeof e[i] && e[i].length > 0) {
                        for (var n = 0; n < e[i].length; n++)
                            if (p.has(e[i][n], t))
                                return "?" === i ? void 0 : i
                    } else if (p.has(e[i], t))
                        return "?" === i ? void 0 : i;
                return t
            }
        }
          , g = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }
          , m = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [a, h], [/(opios)[\/\s]+([\w\.]+)/i], [[a, "Opera Mini"], h], [/\s(opr)\/([\w\.]+)/i], [[a, "Opera"], h], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [a, h], [/(konqueror)\/([\w\.]+)/i], [[a, "Konqueror"], h], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[a, "IE"], h], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[a, "Edge"], h], [/(yabrowser)\/([\w\.]+)/i], [[a, "Yandex"], h], [/(puffin)\/([\w\.]+)/i], [[a, "Puffin"], h], [/(focus)\/([\w\.]+)/i], [[a, "Firefox Focus"], h], [/(opt)\/([\w\.]+)/i], [[a, "Opera Touch"], h], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[a, "UCBrowser"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[a, /_/g, " "], h], [/(windowswechat qbcore)\/([\w\.]+)/i], [[a, "WeChat(Win) Desktop"], h], [/(micromessenger)\/([\w\.]+)/i], [[a, "WeChat"], h], [/(brave)\/([\w\.]+)/i], [[a, "Brave"], h], [/(qqbrowserlite)\/([\w\.]+)/i], [a, h], [/(QQ)\/([\d\.]+)/i], [a, h], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [a, h], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [a, h], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [a, h], [/(MetaSr)[\/\s]?([\w\.]+)/i], [a], [/(LBBROWSER)/i], [a], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [h, [a, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [h, [a, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [a, h], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [h, [a, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[a, /(.+)/, "$1 WebView"], h], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[a, /(.+(?:g|us))(.+)/, "$1 $2"], h], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [h, [a, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[a, "Sailfish Browser"], h], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [a, h], [/(dolfin)\/([\w\.]+)/i], [[a, "Dolphin"], h], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[a, "Chrome"], h], [/(coast)\/([\w\.]+)/i], [[a, "Opera Coast"], h], [/fxios\/([\w\.-]+)/i], [h, [a, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [h, [a, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [h, a], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[a, "GSA"], h], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [a, [h, f.str, g.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [a, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[a, "Netscape"], h], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [a, h]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", p.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", p.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", p.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [o, c, [d, u]], [/applecoremedia\/[\w\.]+ \((ipad)/], [o, [c, "Apple"], [d, u]], [/(apple\s{0,1}tv)/i], [[o, "Apple TV"], [c, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [c, o, [d, u]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [o, [c, "Amazon"], [d, u]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[o, f.str, g.device.amazon.model], [c, "Amazon"], [d, l]], [/android.+aft([bms])\sbuild/i], [o, [c, "Amazon"], [d, "smarttv"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [o, c, [d, l]], [/\((ip[honed|\s\w*]+);/i], [o, [c, "Apple"], [d, l]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [c, o, [d, l]], [/\(bb10;\s(\w+)/i], [o, [c, "BlackBerry"], [d, l]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [o, [c, "Asus"], [d, u]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[c, "Sony"], [o, "Xperia Tablet"], [d, u]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [c, "Sony"], [d, l]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [c, o, [d, "console"]], [/android.+;\s(shield)\sbuild/i], [o, [c, "Nvidia"], [d, "console"]], [/(playstation\s[34portablevi]+)/i], [o, [c, "Sony"], [d, "console"]], [/(sprint\s(\w+))/i], [[c, f.str, g.device.sprint.vendor], [o, f.str, g.device.sprint.model], [d, l]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [c, [o, /_/g, " "], [d, l]], [/(nexus\s9)/i], [o, [c, "HTC"], [d, u]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [o, [c, "Huawei"], [d, l]], [/(microsoft);\s(lumia[\s\w]+)/i], [c, o, [d, l]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [o, [c, "Microsoft"], [d, "console"]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [c, "Microsoft"], [d, l]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [o, [c, "Motorola"], [d, l]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [o, [c, "Motorola"], [d, u]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[c, p.trim], [o, p.trim], [d, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [c, "Samsung"], [d, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [o, [c, "Sharp"], [d, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[c, "Samsung"], o, [d, u]], [/smart-tv.+(samsung)/i], [c, [d, "smarttv"], o], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[c, "Samsung"], o, [d, l]], [/sie-(\w*)/i], [o, [c, "Siemens"], [d, l]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[c, "Nokia"], o, [d, l]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [o, [c, "Acer"], [d, u]], [/android.+([vl]k\-?\d{3})\s+build/i], [o, [c, "LG"], [d, u]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[c, "LG"], o, [d, u]], [/(lg) netcast\.tv/i], [c, o, [d, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [o, [c, "LG"], [d, l]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [c, o, [d, u]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [o, [c, "Lenovo"], [d, u]], [/(lenovo)[_\s-]?([\w-]+)/i], [c, o, [d, l]], [/linux;.+((jolla));/i], [c, o, [d, l]], [/((pebble))app\/[\d\.]+\s/i], [c, o, [d, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [c, o, [d, l]], [/crkey/i], [[o, "Chromecast"], [c, "Google"]], [/android.+;\s(glass)\s\d/i], [o, [c, "Google"], [d, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [o, [c, "Google"], [d, u]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [o, [c, "Google"], [d, l]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[o, /_/g, " "], [c, "Xiaomi"], [d, l]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[o, /_/g, " "], [c, "Xiaomi"], [d, u]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [o, [c, "Meizu"], [d, l]], [/(mz)-([\w-]{2,})/i], [[c, "Meizu"], o, [d, l]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [o, [c, "OnePlus"], [d, l]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [o, [c, "RCA"], [d, u]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [o, [c, "Dell"], [d, u]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [o, [c, "Verizon"], [d, u]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[c, "Barnes & Noble"], o, [d, u]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [o, [c, "NuVision"], [d, u]], [/android.+;\s(k88)\sbuild/i], [o, [c, "ZTE"], [d, u]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [o, [c, "Swiss"], [d, l]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [o, [c, "Swiss"], [d, u]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [o, [c, "Zeki"], [d, u]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[c, "Dragon Touch"], o, [d, u]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [o, [c, "Insignia"], [d, u]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [o, [c, "NextBook"], [d, u]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[c, "Voice"], o, [d, l]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[c, "LvTel"], o, [d, l]], [/android.+;\s(PH-1)\s/i], [o, [c, "Essential"], [d, l]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [o, [c, "Envizen"], [d, u]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [c, o, [d, u]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [o, [c, "MachSpeed"], [d, u]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [c, o, [d, u]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [o, [c, "Rotor"], [d, u]], [/android.+(KS(.+))\s+build/i], [o, [c, "Amazon"], [d, u]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [c, o, [d, u]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[d, p.lowerize], c, o], [/[\s\/\(](smart-?tv)[;\)]/i], [[d, "smarttv"]], [/(android[\w\.\s\-]{0,9});.+build/i], [o, [c, "Generic"]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [a, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)/i], [[a, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [a, h], [/rv\:([\w\.]{1,9}).+(gecko)/i], [h, a]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [a, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [a, [h, f.str, g.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[a, "Windows"], [h, f.str, g.os.windows.version]], [/\((bb)(10);/i], [[a, "BlackBerry"], h], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [a, h], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[a, "Symbian"], h], [/\((series40);/i], [a], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[a, "Firefox OS"], h], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [a, h], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[a, "Chromium OS"], h], [/(sunos)\s?([\w\.\d]*)/i], [[a, "Solaris"], h], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [a, h], [/(haiku)\s(\w+)/i], [a, h], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[h, /_/g, "."], [a, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[a, "Mac OS"], [h, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [a, h]]
        }
          , k = function(t, e) {
            if ("object" == typeof t && (e = t,
            t = void 0),
            !(this instanceof k))
                return new k(t,e).getResult();
            var i = t || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : "")
              , n = e ? p.extend(m, e) : m;
            return this.getBrowser = function() {
                var t = {
                    name: void 0,
                    version: void 0
                };
                return f.rgx.call(t, i, n.browser),
                t.major = p.major(t.version),
                t
            }
            ,
            this.getCPU = function() {
                var t = {
                    architecture: void 0
                };
                return f.rgx.call(t, i, n.cpu),
                t
            }
            ,
            this.getDevice = function() {
                var t = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return f.rgx.call(t, i, n.device),
                t
            }
            ,
            this.getEngine = function() {
                var t = {
                    name: void 0,
                    version: void 0
                };
                return f.rgx.call(t, i, n.engine),
                t
            }
            ,
            this.getOS = function() {
                var t = {
                    name: void 0,
                    version: void 0
                };
                return f.rgx.call(t, i, n.os),
                t
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return i
            }
            ,
            this.setUA = function(t) {
                return i = t,
                this
            }
            ,
            this
        };
        k.VERSION = "0.7.20",
        k.BROWSER = {
            NAME: a,
            MAJOR: "major",
            VERSION: h
        },
        k.CPU = {
            ARCHITECTURE: "architecture"
        },
        k.DEVICE = {
            MODEL: o,
            VENDOR: c,
            TYPE: d,
            CONSOLE: "console",
            MOBILE: l,
            SMARTTV: "smarttv",
            TABLET: u,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        },
        k.ENGINE = {
            NAME: a,
            VERSION: h
        },
        k.OS = {
            NAME: a,
            VERSION: h
        },
        void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = k),
        e.UAParser = k) : void 0 === (n = function() {
            return k
        }
        .call(e, i, e, t)) || (t.exports = n);
        var v = r && (r.jQuery || r.Zepto);
        if (void 0 !== v && !v.ua) {
            var b = new k;
            v.ua = b.getResult(),
            v.ua.get = function() {
                return b.getUA()
            }
            ,
            v.ua.set = function(t) {
                b.setUA(t);
                var e = b.getResult();
                for (var i in e)
                    v.ua[i] = e[i]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(t, e) {
    AdTrack.Chain = function() {
        var t = {}
          , e = null
          , i = this
          , n = {}
          , r = function(e, i) {
            if (t[e]) {
                for (var r = [], s = 0; f = t[e][s]; s++)
                    f !== i && r.push(f);
                t[e] = r
            }
            return n
        }
          , s = function(o, a, d) {
            d || (d = 0);
            var c = null;
            return o[d] && (c = o[d]),
            "object" == typeof c && null !== c ? c[a](e, (function(t) {
                e = t,
                s.call(i, o, a, ++d)
            }
            )) : function(e, i) {
                if (t[e])
                    for (var n = 0; f = t[e][n]; n++)
                        f(i),
                        r(e, f)
            }("done", e),
            n
        };
        return n = {
            run: s,
            on: function(e, i) {
                return t[e] || (t[e] = []),
                t[e].push(i),
                n
            },
            off: r
        }
    }(),
    AdTrack.KeywordsModule = AdTrack.KeywordsModule || function(t) {
        this.originSend = {},
        this.blackListedOrigins = ["online"],
        this.track = t,
        this.kwProcessor = [],
        this.kwFactory = null,
        this.reportingSwitch = !0
    }
    ,
    AdTrack.KeywordsModule.prototype = {
        report: function(t, e) {
            this.processor(t, e).getKeywords(function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = t[e]
                          , n = i + e;
                        if (-1 === this.blackListedOrigins.indexOf(i)) {
                            if (this.originSend[n] && !0 === this.originSend[n]) {
                                delete t[e];
                                continue
                            }
                            this.originSend[n] = !0
                        } else
                            delete t[e]
                    }
                t && Object.keys(t).length > 0 && this.reportingSwitch && this.track.evKeywords(t)
            }
            .bind(this))
        },
        handlerFactory: function() {
            return this.kwFactory || (this.kwFactory = new AdTrack.KeywordsModule.HandlerFactory(this.track)),
            this.kwFactory
        },
        processor: function(t, e) {
            return this.kwProcessor[e] || (this.kwProcessor[e] = new AdTrack.KeywordsModule.Processor(t)),
            this.kwProcessor[e]
        }
    },
    AdTrack.KeywordsModule.HandlerFactory = function(t) {
        this.track = t,
        this.handlers = []
    }
    ,
    AdTrack.KeywordsModule.HandlerFactory.prototype = {
        create: function(t) {
            if (!this.handlers[t])
                if ("dmpm-tv" === t)
                    this.handlers[t] = new AdTrack.KeywordsModule.DmpmTV(this.track);
                else if ("html-extract" === t)
                    this.handlers[t] = new AdTrack.KeywordsModule.PageExtractor(this.track);
                else if ("ua-extract" === t)
                    this.handlers[t] = new AdTrack.KeywordsModule.UserAgentExtractor;
                else {
                    if ("hbbtv-ua-parser" !== t)
                        return this.track.doError("Undefined keyword handler type " + t),
                        null;
                    this.handlers[t] = new AdTrack.KeywordsModule.HbbTvUaExtractor
                }
            return this.handlers[t]
        }
    },
    AdTrack.KeywordsModule.Processor = function(t) {
        this.channel = t,
        this.kw = null
    }
    ,
    AdTrack.KeywordsModule.Processor.prototype = {
        getKeywords: function(t) {
            var e = this
              , i = function(i) {
                e.kw = i,
                t(i)
            }
            .bind(this);
            if (null == this.kw) {
                var n = this.channel.kwHandlers || [];
                AdTrack.Chain.on("done", i).run(n, "getKeywords")
            } else
                t(this.kw)
        }
    }
}
, function(t, e) {
    AdTrack.WordExtractor = function(t) {
        this.dom = t,
        this.keyword = [],
        this.minLength = 4,
        this.stopWordsCZ = ["a", "aby", "aj", "ale", "anebo", "ani", "aniž", "ano", "asi", "avšak", "až", "ba", "bez", "bude", "budem", "budeš", "by", "byl", "byla", "byli", "bylo", "být", "či", "článek", "článku", "články", "co", "čom", "což", "cz", "další", "dalších", "do", "dnes", "ho", "i", "jak", "jaké", "jako", "je", "jeho", "jej", "její", "jejich", "jen", "ještě", "jenž", "ji", "jiné", "již", "jsem", "jses", "jsi", "jsme", "jsou", "jste", "k", "kam", "kde", "kdo", "když", "ke", "která", "které", "kteří", "kterou", "který", "ku", "má", "máte", "mé", "mezi", "mi", "mít", "mne", "mně", "mnou", "můj", "může", "my", "na", "nad", "nám", "napište", "nás", "naší", "naši", "ne", "nebo", "neboť", "nechť", "nejsou", "není", "net", "než", "ní", "nic", "nové", "nový", "nýbrž", "o", "od", "ode", "on", "org", "pak", "po", "pod", "podle", "pokud", "pouze", "právě", "před", "přes", "při", "pro", "proč", "proto", "protože", "první", "ptá", "re", "s", "se", "si", "sice", "spol", "strana", "své", "svůj", "svých", "svým", "svými", "ta", "tak", "také", "takže", "tamhle", "tato", "tedy", "téma", "té", "ten", "tedy", "tento", "teto", "tim ", "timto", "tipy", "to", "tohle", "toho", "tohoto", "tom", "tomto", "tomuto", "totiz", "tu", "tudiz", "tuto", "tvuj", "ty", "tyto", "u", "už", "v", "vám", "vás", "vaše", "ve", "vedle", "více", "však", "všechen", "vy", "vždyť", "z", "za", "zda", "zde", "ze", "zpět", "zprávy"],
        this.stopWordsEN = ["a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z", "zero", "safeframe", "container"]
    }
    ,
    AdTrack.WordExtractor.prototype = {
        log: function() {},
        getWords: function() {
            var t = [];
            return t = this.getMetadata().concat(t),
            t = this.getTitle().concat(t),
            t = this.getH1().concat(t),
            this.keyword = t,
            this.removeStopWords(),
            this.keyword
        },
        getMetadata: function() {
            var t = null;
            if (this.dom && this.dom.querySelector('meta[name="keywords"]'),
            null == t)
                return [];
            t = t.getAttribute("content"),
            t = this.replaceChar(t),
            t = this.splitWords(t);
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i].trim();
                "" != n && e.push(n)
            }
            return e
        },
        getTitle: function() {
            var t = this.dom.title;
            return t = this.replaceChar(t),
            t = this.splitWords(t)
        },
        getH1: function() {
            for (var t = this.dom.getElementsByTagName("h1"), e = [], i = 0; i < t.length; i++) {
                var n = t[i].innerHTML;
                n = this.replaceChar(n),
                e = this.splitWords(n).concat(e)
            }
            return e
        },
        replaceChar: function(t) {
            return t = (t = (t = (t = (t = t.replace(/<[a-zA-Z][^>]*>/g, " ")).replace(/<\/[a-zA-Z][^>]*>/g, " ")).replace(/\&[a-z]+;/g, " ")).replace(/  +/g, " ")).trim()
        },
        splitWords: function(t) {
            if (null == t)
                return [];
            for (var e = t.split(" "), i = [], n = new RegExp(/[a-záčďéěíňóřšťůúýž]+/g), r = 0; r < e.length; r++)
                if ("" != e[r]) {
                    if (null == (t = e[r].toLowerCase().match(n)) || "undefined" == t)
                        continue;
                    i = i.concat(t)
                }
            return i
        },
        generateURL: function() {
            if (this.getWords(),
            0 == this.keyword.length)
                return "";
            for (var t = "&mkw=", e = 0; e < this.keyword.length; e++)
                0 != e && (t += ","),
                t += encodeURI(this.keyword[e]);
            return t
        },
        generateCSV: function() {
            if (this.getWords(),
            0 == this.keyword.length)
                return "";
            for (var t = "", e = 0; e < this.keyword.length; e++)
                0 != e && (t += ","),
                t += encodeURI(this.keyword[e]);
            return t
        },
        removeStopWords: function() {
            for (var t, e = [], i = 0; i < this.keyword.length; i++)
                t = this.keyword[i].toLowerCase(),
                -1 == this.stopWordsCZ.indexOf(t) && -1 == this.stopWordsEN.indexOf(t) && -1 == e.indexOf(t) && t.length >= this.minLength && e.push(t);
            this.keyword = e
        }
    }
}
, function(t, e) {
    AdTrack.KeywordsModule.PageExtractor = function(t) {
        this.track = t,
        this.keywords = null,
        this.wordExtractor = new AdTrack.WordExtractor(t.document)
    }
    ,
    AdTrack.KeywordsModule.PageExtractor.prototype = {
        getKeywords: function(t, e) {
            if (null == this.keywords || void 0 === this.keywords) {
                var i = this.extractKeywords()
                  , n = 0
                  , r = {};
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        if ((n += i[s].length) > 1e3)
                            break;
                        r[i[s]] = "online"
                    }
                this.keywords = r
            }
            e(this.mergeKeywords(t, this.keywords))
        },
        extractKeywords: function() {
            return this.wordExtractor.getWords()
        },
        mergeKeywords: function(t, e) {
            var i = {};
            for (var n in t)
                t.hasOwnProperty(n) && (i[n] = t[n]);
            for (var n in e)
                e.hasOwnProperty(n) && (i[n] = e[n]);
            return i
        }
    }
}
, function(t, e) {
    AdTrack.KeywordsModule.UserAgentExtractor = function(t) {
        this.track = t,
        this.keywords = null
    }
    ,
    AdTrack.KeywordsModule.UserAgentExtractor.prototype = {
        getKeywords: function(t, e) {
            if (null == this.keywords || void 0 === this.keywords) {
                var i = this.extractKeywords();
                this.keywords = i
            }
            e(this.mergeKeywords(t, this.keywords))
        },
        extractKeywords: function() {
            var t = {}
              , e = navigator.userAgent;
            if (e && -1 !== e && void 0 !== AdTrack.UAParser) {
                var i = new AdTrack.UAParser;
                i.setUA(e);
                var n = i.getDevice();
                n.vendor && (t[n.vendor] = "ua_device_vendor"),
                n.model && (t[n.model] = "ua_device_model")
            }
            return t
        },
        mergeKeywords: function(t, e) {
            var i = {};
            for (var n in t)
                t.hasOwnProperty(n) && (i[n] = t[n]);
            for (var n in e)
                e.hasOwnProperty(n) && (i[n] = e[n]);
            return i
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.BaseRenderer = function(t, e, i, n, r) {
        this.track = t,
        this.definition = e,
        this.window = i,
        this.document = i.document,
        this.transforms = n,
        this.errorReporting = r,
        this.styles = AdTrack.Styles.create(e.macros, n, i),
        this.renderer = null,
        this.container = null,
        this.wrap = null,
        this.insertion = null,
        this.initialized = !1,
        this.events = AdTrack.Events.create(["destroy", "ready", "empty", "impress", "expand", "collapse", "close"]),
        this.events.markEventAsTriggerOnce("destroy"),
        this.events.markEventAsTriggerOnce("ready"),
        this.events.markEventAsTriggerOnce("empty"),
        this.events.markEventAsTriggerOnce("impress"),
        this.events.markEventAsTriggerOnce("expand"),
        this.events.markEventAsTriggerOnce("collapse")
    }
    ,
    AdTrack.BaseRenderer.prototype = {
        close: function() {
            this.renderer.close.apply(this.renderer, arguments)
        },
        measureImpress: function() {
            this.renderer.measureImpress.apply(this.renderer, arguments)
        },
        loaded: function(t) {
            this.onLoadAdjust(),
            this.renderer.transitionObject = this.createTransitionObject(t),
            this.renderer.loaded(t),
            this.loadStyles(t),
            this.renderer.measureImpress(this.getContainer(), function(t, e) {
                this.events.trigger("impress", [t, e])
            }
            .bind(this)),
            this.track._dispatchShow()
        },
        updateSize: function(t) {
            "function" == typeof this.renderer.updateSize && this.renderer.updateSize(t)
        },
        loadStyles: function(t) {
            var e = t.data.style
              , i = this.definition;
            e && e.options && e.options.css && this.styles.setCss(AdTrack.Styles.STYLE, e.options.css),
            i && i.options && i.options.css && this.styles.setCss(AdTrack.Styles.DEFINITION, i.options.css),
            this.styles.appendStyles(this.wrap)
        },
        destroy: function() {
            this.renderer && "function" == typeof this.renderer.destroy && this.renderer.destroy()
        },
        on: function(t, e) {
            this.events.addCallback(t, e)
        },
        init: function(t) {
            this.initialized ? this.definition.options.dfpVignette ? t() : this.on("ready", t) : (this.initialized = !0,
            this.getRenderer(),
            this.tryInsertion(function() {
                if (this.domAdjust(),
                this.renderer) {
                    this.containerId = "C_" + Math.floor(1e5 * Math.random()),
                    this.container.setAttribute("data-adtrack-container", this.containerId),
                    this.definition.macros.container = "[data-adtrack-container=" + this.containerId + "]",
                    this.track.container = this.container,
                    this.wrap = this.container,
                    this.renderer.isReadyToShow(this.container) || this.definition.options.noAsync ? (this.events.trigger("ready"),
                    t()) : this.definition.options.dfpVignette ? t() : this.on("ready", t)
                } else
                    t()
            }
            .bind(this)))
        },
        render: function(t) {
            var e = function(e) {
                t.isPreloaded() ? this.definition.options.noAsync ? this.errorReporting.doError("Cant perform preload in synchronous mode.") : t.preload(e) : t.render(e)
            }
            .bind(this);
            t.isRenderedExternally() ? (t.on("load", function() {
                this.onLoadAdjust()
            }
            .bind(this)),
            e(this.container)) : (t.on("load", function() {
                this.loaded(t)
            }
            .bind(this)),
            t.on("close", function() {
                this.renderer.hide(),
                this.track._dispatchClose(),
                this.track.evClose()
            }
            .bind(this)),
            this.on("destroy", function() {
                t.destroy()
            }
            .bind(this)),
            e(this.createContainer()))
        },
        createContainer: function() {
            return this.renderer ? this.renderer.createContainer(this.container) : this.container
        },
        getContainer: function() {
            return this.renderer ? this.renderer.getContainer() : this.container
        },
        getRenderer: function() {
            if (!this.renderer)
                try {
                    var t = this.definition.renderer;
                    "flexi" === t ? this.renderer = new AdTrack.FlexiRenderer(this.track,this.definition,this.transforms,this.events) : "fixed" === t ? this.track.settings && this.track.settings.testFixed2 ? this.renderer = new AdTrack.Fixed2Renderer(this.track,this.definition,this.transforms,this.events,this.styles) : this.renderer = new AdTrack.FixedRenderer(this.track,this.definition,this.transforms,this.events) : "branding" === t ? this.renderer = new AdTrack.BrandingRenderer(this.track,this.definition,this.transforms,this.events) : "interscroll" === t ? this.renderer = new AdTrack.InterScrollRenderer(this.track,this.definition,this.transforms,this.events) : "vignette" === t ? this.renderer = new AdTrack.VignetteRenderer(this.track,this.definition,this.transforms,this.events,this.styles) : "outstream" === t ? this.renderer = new AdTrack.OutstreamRenderer(this.track,this.definition,this.transforms,this.events) : this.errorReporting.doError("Unknown ad renderer " + t)
                } catch (e) {
                    this.errorReporting.doError("Missing source for " + t + " (" + e.message + ")")
                }
        },
        tryInsertion: function(t) {
            var e = this.window.document.readyState
              , i = !!this.definition.options.noAsync;
            if ("complete" == e || "ready" == e || !AdTrack.BrowserFlags.isOldIE && "interactive" == e)
                this.container = this.getInsertion(this.definition, !0),
                this.container && t();
            else if (this.container = this.getInsertion(this.definition, i),
            this.container)
                t();
            else if (!i) {
                var n = this.document.addEventListener ? "DOMContentLoaded" : "readystatechange"
                  , r = function() {
                    AdTrack.Utils.removeEvent(this.document, n, r),
                    this.container = this.getInsertion(this.definition, !0),
                    this.container && t()
                }
                .bind(this);
                AdTrack.Utils.addEvent(this.document, n, r)
            }
        },
        getInsertion: function(t, e) {
            if (this.definition.options && this.definition.options.dom) {
                var i = this.definition.options.dom;
                if (this.insertion || (this.insertion = new AdTrack.Insertion(this.document,this.transforms,i,this.errorReporting)),
                "container" === i.method)
                    return this.insertion.container();
                if ("create" === i.method)
                    return this.insertion.create();
                if ("smartInsert" === i.method)
                    return this.insertion.smartInsert();
                if ("image" === i.method)
                    return this.insertion.image();
                if ("fuzzyAfter" === i.method)
                    return this.insertion.fuzzy()
            } else
                e && this.errorReporting.doError("No dom definition");
            return null
        },
        onLoadAdjust: function() {
            if (this.definition.options) {
                var t = this.definition.options;
                if (t.hide) {
                    var e = AdTrack.Utils.validateSelector(t.hide, this.definition.macros)
                      , i = this.document.querySelector(e);
                    i && this.transforms.styleElement(i, "display", "none", "important")
                }
            }
        },
        domAdjust: function() {
            if (this.definition.options && this.definition.options.dom) {
                var t = this.definition.options.dom;
                if (t.remove)
                    if (t.remove instanceof Array)
                        Array.prototype.forEach.call(t.remove, function(t) {
                            var e = this.document.querySelector(t);
                            e && this.transforms.removeElement(e.parentNode, e)
                        }
                        .bind(this));
                    else {
                        var e = this.document.querySelector(t.remove);
                        e ? this.transforms.removeElement(e.parentNode, e) : this.errorReporting.doError("Unable to find r selector " + t.remove)
                    }
            } else
                this.errorReporting.doError("No dom definition")
        },
        createTransitionObject: function(t) {
            var e = t.data.style
              , i = this.track.getOption("transitionStart", e)
              , n = this.track.getOption("transitionMid", e)
              , r = this.track.getOption("transitionEnd", e)
              , s = i && -1 !== ("" + i).indexOf("animation")
              , o = i
              , a = n
              , d = r
              , c = function(t) {
                t && this.styles.setCss(AdTrack.Styles.TRANSITION, t)
            }
            .bind(this);
            return {
                hasTransition: function() {
                    return o || d
                },
                start: function() {
                    c(o)
                },
                mid: function() {
                    !s && c(a)
                },
                end: function() {
                    c(d)
                },
                setDefaultTransition: function(t) {
                    o = o || t.start,
                    a = a || t.mid,
                    d = d || t.end
                }
            }
        }
    },
    AdTrack.Insertion = function(t, e, i, n) {
        var r = {
            container: function() {
                var e = t.querySelectorAll(i.selector);
                e.length > 1 && !i.multipleAdsCounter && n && n.doError("Multiple elements found (" + e.length + ") for selector: " + i.selector);
                var r = 0;
                i.multipleAdsCounter && i.multipleAdsCounter > 0 && (r = i.multipleAdsCounter - 1);
                var s = e.item(r);
                if (s)
                    return s;
                n && n.doError("Unable to find c selector " + i.selector)
            },
            image: function() {
                var e = t.querySelector(i.image);
                if (e)
                    return e;
                n && n.doError("Unable to find i selector " + i.image)
            },
            create: function() {
                var r = t.querySelector(i.container);
                if (r) {
                    var s = t.createElement("div");
                    if (i.before) {
                        var o = r.querySelector(i.before);
                        if (o)
                            return e.addElement(o.parentNode, s, o),
                            s;
                        if (i.allowFallbackLast)
                            return e.addElement(r, s),
                            s;
                        n && n.doError("Unable to find b selector " + i.before)
                    } else {
                        if (!i.after)
                            return e.addElement(r, s),
                            s;
                        var a = r.querySelector(i.after);
                        if (a)
                            return e.addElement(a.parentNode, s, a.nextSibling),
                            s;
                        if (i.allowFallbackLast)
                            return e.addElement(r, s),
                            s;
                        n && n.doError("Unable to find a selector " + i.after)
                    }
                } else
                    n && n.doError("Unable to find s selector " + i.container)
            },
            smartInsert: function() {
                var r, s, o = t.querySelectorAll(i.selector), a = i.insertion || "near-fold", d = -1;
                if (o.length > 0 && a) {
                    var c = t.createElement("div")
                      , h = Math.ceil((o.length - 1) / 2);
                    if ("middle" === a)
                        d = h;
                    else if ("near-fold" === a)
                        for (var l = 0; l < o.length; l++) {
                            var u = o[l]
                              , p = AdTrack.Utils.getViewportRealHeight(window)
                              , f = window.pageYOffset || t.documentElement.scrollTop;
                            try {
                                if (u.getBoundingClientRect().top + f >= p) {
                                    d = l;
                                    break
                                }
                            } catch (t) {}
                        }
                    else if ("floatfix" === a)
                        for (var g = o[0].parentNode.childNodes, m = !1, k = 0; k < o.length; k++) {
                            for (var v = o[k].getBoundingClientRect(), b = !1, y = 0; y < g.length; y++)
                                if ("function" == typeof g[y].getBoundingClientRect && o[k] !== g[y]) {
                                    var A = g[y].getBoundingClientRect();
                                    if (r = v,
                                    !((s = A).left > r.right || s.right < r.left || s.top > r.bottom || s.bottom < r.top)) {
                                        b = !0;
                                        break
                                    }
                                }
                            if (k > 1 && !m) {
                                d = k - 1;
                                break
                            }
                            if (k === o.length - 1 && !b) {
                                d = k;
                                break
                            }
                            m = b
                        }
                    return d < 0 && (d = h),
                    e.addElement(o[d].parentNode, c, o[d].nextSibling),
                    c
                }
                n && n.doError("Unable to find selector '" + i.selector + "' or incorrect insertion provided.")
            },
            fuzzy: function() {
                var r = t.querySelector(i.selector);
                if (r) {
                    for (var s = i.fuzzyParentize ? i.fuzzyParentize : 0, o = 0; o < s && r.parentNode && (!i.fuzzyParentizeAtMostClass || i.fuzzyParentizeAtMostClass != r.parentNode.className) && (!i.fuzzyParentizeAtMostId || i.fuzzyParentizeAtMostId != r.parentNode.id); o++)
                        r = r.parentNode;
                    var a = t.createElement("div")
                      , d = r
                      , c = i.fuzzyInject ? i.fuzzyInject : 0;
                    for (o = 0; o < c; o++)
                        e.addElement(r.parentNode, a, d.nextSibling),
                        d = a,
                        a = t.createElement("div");
                    if (i.fuzzyClass && AdTrack.Utils.addClassName(a, i.fuzzyClass),
                    i.fuzzyId && a.setAttribute("id", i.fuzzyId),
                    i.fuzzyStyle) {
                        var h = "d" + Math.round(1e5 * Math.random())
                          , l = t.createElement("style");
                        e.addElement(t.getElementsByTagName("head")[0], l),
                        AdTrack.Utils.cssToStyle(l, "." + h + "{" + i.fuzzyStyle + "}"),
                        AdTrack.Utils.addClassName(a, h)
                    }
                    return e.addElement(r.parentNode, a, d.nextSibling),
                    a
                }
                n && n.doError("Unable to find c selector " + i.selector)
            }
        };
        return r
    }
    ,
    AdTrack.Styles = (i = function(t, e, i) {
        var n = function() {
            return i.document.createElement("style")
        }
          , r = function(e, i, n) {
            t && (i = AdTrack.Utils.replaceMacros(i, t));
            try {
                n ? e.innerHTML += i : e.innerHTML = i
            } catch (t) {
                n ? e.styleSheet.cssText += i : e.styleSheet.cssText = i
            }
        }
          , s = {}
          , o = [n(), n(), n(), n()];
        return s.addCss = function(t, e) {
            o[t] && r(o[t], e, !0)
        }
        ,
        s.setCss = function(t, e) {
            o[t] && r(o[t], e)
        }
        ,
        s.appendStyles = function(t) {
            if (t)
                for (var i = 0; i < o.length; i++) {
                    var n = o[i];
                    e ? e.addElement(t, n) : t.appendChild(n)
                }
        }
        ,
        s
    }
    ,
    {
        DEFAULT: 0,
        DEFINITION: 1,
        STYLE: 2,
        TRANSITION: 3,
        create: function(t, e, n) {
            return new i(t,e,n)
        }
    })
}
, function(t, e) {
    AdTrack.FlexiRenderer = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.transforms = i,
        this.events = n,
        this.container = null,
        this.rp = this.track.useRenderProxy ? new AdTrack.RenderProxy(this.track) : null
    }
    ,
    AdTrack.FlexiRenderer.prototype = {
        isReadyToShow: function(t) {
            return !this.definition.options.control || (this.definition.options.control.show && (this.track.window[this.definition.options.control.show] = function() {
                this.open(),
                this.events.trigger("ready")
            }
            .bind(this)),
            this.definition.options.control.hide && (this.track.window[this.definition.options.control.hide] = function() {
                this.close()
            }
            .bind(this)),
            this.animator = new AdTrack.Animator({
                duration: .3,
                fps: 60
            },function(e) {
                t.style.display = e > 0 ? "block" : "none",
                t.style.opacity = e
            }
            .bind(this)),
            !1)
        },
        getContainer: function() {
            return this.rp && !this.currentProxy && this.track.doError("Proxy not rendered yet, cant provide container. "),
            this.rp ? this.currentProxy : this.container
        },
        createContainer: function(t) {
            if (!this.container)
                if (this.definition.options.position) {
                    var e = this.track.document.createElement("div");
                    t.style.position = "relative",
                    this.transforms.addElement(t, e),
                    this.container = e
                } else
                    this.container = t;
            return this.rp ? this.rp.getProxyContainer(this.container) : this.container
        },
        loaded: function(t) {
            if (this.definition.options.position) {
                var e = this.container;
                this.definition.options.position.left && (e.style.left = this.definition.options.position.left),
                this.definition.options.position.right && (e.style.right = this.definition.options.position.right),
                this.definition.options.position.top && (e.style.top = this.definition.options.position.top),
                this.definition.options.position.bottom && (e.style.bottom = this.definition.options.position.bottom),
                this.definition.options.position.width && (e.style.width = this.definition.options.position.width),
                this.definition.options.position.height && (e.style.height = this.definition.options.position.height),
                e.style.position = "absolute"
            }
            this.rp && (this.currentProxy = this.rp.render())
        },
        measureImpress: function(t, e) {
            this.track.measureImpress(t, e)
        },
        destroy: function() {},
        show: function() {
            this.track.container.style.display = "block"
        },
        hide: function() {
            this.track.container.style.display = "none"
        },
        open: function() {
            this.animator.forward()
        },
        close: function() {
            this.animator.backward(),
            this.definition.options.hideDelay && this.track.setHide(this.definition.options.hideDelay)
        }
    }
}
, function(t, e) {
    AdTrack.RenderProxy = function(t) {
        var e = null
          , i = null
          , n = null
          , r = {};
        return r.getProxyContainer = function(i) {
            var r;
            return e = i,
            n && e.removeChild(n),
            (r = t.document.createElement("div")).setAttribute("style", "visibility: hidden !important;position: fixed !important;top: 0 !important;left: 0 !important;z-index: -10000 !important;width: 0 !important;height: 0 !important;overflow: visible !important;"),
            r.setAttribute("id", "proxy" + Math.floor(1e8 * Math.random())),
            e.appendChild(r),
            n = r
        }
        ,
        r.render = function() {
            if (n) {
                var t = n.getElementsByTagName("iframe").length > 0;
                !function(t, e) {
                    var i = t.childNodes;
                    if (i)
                        for (var n = i.length - 1; n >= 0; n--) {
                            var r = i[n];
                            e && r.id && e.id === r.id || t.removeChild(t.firstChild)
                        }
                }(e, n),
                t ? (n.setAttribute("style", ""),
                i = n) : (!function(t, e) {
                    var i = e.childNodes;
                    if (i)
                        for (var n = i.length - 1; n >= 0; n--)
                            t.appendChild(i[n])
                }(e, n),
                e.removeChild(n),
                i = e),
                n = null
            }
            return i
        }
        ,
        r
    }
}
, function(module, exports) {
    AdTrack.OutstreamRenderer = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.transforms = i,
        this.events = n,
        this.container = null,
        this.element = null,
        this.expanded = !1,
        this.collapsing = !1,
        this.height = 0,
        this.expandTime = 350,
        this.fps = 60,
        e.options && (this.maxWidth = e.options.width,
        this.maxHeight = e.options.height),
        this.isLoaded = !1,
        this.impressListener = null
    }
    ,
    AdTrack.OutstreamRenderer.prototype = {
        isReadyToShow: function(t) {
            var e = function() {
                var e = t.getBoundingClientRect().top
                  , i = AdTrack.Utils.getViewportRealHeight(this.track.window);
                return e > 0 && e <= i / 2
            }
            .bind(this);
            return this.impressListener = function() {
                e() && (this.events.trigger("ready"),
                this.track.removeEvent(window, "resize", this.impressListener),
                this.track.removeEvent(window, "scroll", this.impressListener),
                this.track.removeEvent(window, "build", this.impressListener),
                this.impressListener = null)
            }
            .bind(this),
            this.track.addEvent(window, "resize", this.impressListener),
            this.track.addEvent(window, "scroll", this.impressListener),
            this.track.addEvent(window, "build", this.impressListener),
            e()
        },
        getContainer: function() {
            return this.container
        },
        createContainer: function(t) {
            return this.container || (this.container = t),
            this.container
        },
        expand: function() {
            var t = this.element;
            t.style.height = 0,
            t.style.display = "block",
            this.height = 0;
            var e = this._getSettings(this.expandHeight)
              , i = function() {
                this.height >= this.expandHeight ? this.events.trigger("expand") : (t.style.height = (this.height += e.step) + "px",
                this.collapsing || setTimeout(i.bind(this), e.interval))
            }
            .bind(this);
            i(),
            this.expanded = !0
        },
        collapse: function() {
            var t = this.element;
            if (this.height > 0 && this.expanded) {
                this.collapsing = !0;
                var e = this._getSettings(this.expandHeight)
                  , i = function() {
                    if (this.height <= 0)
                        return t.style.height = "0px",
                        t.style.display = "none",
                        void this.events.trigger("collapse");
                    t.style.height = (this.height -= e.step) + "px",
                    setTimeout(i.bind(this), e.interval)
                }
                .bind(this);
                i()
            } else
                this.track.doError("Unable to collapse, expanded: " + this.expanded + ", height: " + this.height)
        },
        _getSettings: function(t) {
            var e = 1e3 / this.fps
              , i = t / (this.expandTime / e);
            return {
                interval: Math.floor(e),
                step: Math.floor(i)
            }
        },
        loaded: function(format) {
            this.isLoaded = !0,
            "function" == typeof format.getElement && (this.element = format.getElement() || this.container),
            this.maxWidth && (this.container.style.maxWidth = this.maxWidth + "px");
            var rect = this.container.getBoundingClientRect()
              , w = rect.right - rect.left;
            this.expandHeight = w / (16 / 9),
            this.maxHeight > 0 && this.maxHeight < this.expandHeight && (this.expandHeight = this.maxHeight),
            format.on("end", function() {
                this.hide()
            }
            .bind(this)),
            this.show(),
            this.events.addCallback("collapse", function() {
                var collapse = this.definition.options.outstreamCollapse;
                collapse && eval(collapse),
                this.destroy()
            }
            .bind(this)),
            this.events.addCallback("expand", function() {
                var expand = this.definition.options.outstreamExpand;
                expand && eval(expand)
            }
            .bind(this));
            var track = this.track;
            setTimeout((function() {
                track._dispatchShow()
            }
            ), 500)
        },
        measureImpress: function(t, e) {
            this.track.measureImpress(t, e)
        },
        destroy: function() {
            this.impressListener && (this.track.removeEvent(window, "resize", this.impressListener),
            this.track.removeEvent(window, "scroll", this.impressListener),
            this.track.removeEvent(window, "build", this.impressListener),
            this.impressListener = null),
            this.events.trigger("destroy")
        },
        show: function() {
            this.expand()
        },
        hide: function() {
            this.collapse()
        },
        open: function() {},
        close: function() {}
    }
}
, function(t, e) {
    AdTrack.GenericAd = function(t, e) {
        this.adSet = t,
        this.ad = e
    }
    ,
    AdTrack.GenericAd.prototype = {
        getData: function() {
            return this.ad
        },
        getHeadline: function() {
            return this.ad.getText().getTitle()
        },
        getDescription: function() {
            return this.ad.getText().getDescription()
        },
        getAdChoices: function() {
            return this.adSet.getAdChoices().getPromoText()
        },
        adChoicesOptional: function() {
            return this.adSet.getAdChoices().isOptional()
        }
    },
    AdTrack.GenericProductAd = function(t, e) {
        this.adSet = t,
        this.ad = e
    }
    ,
    AdTrack.GenericProductAd.prototype = {
        getData: function() {
            return this.ad
        },
        getHeadline: function() {
            return this.ad.getProductName()
        },
        getDescription: function() {
            return this.adSet.getShop().getShopName() + " - " + this.ad.getProductPrice()
        },
        getAdChoices: function() {
            return this.adSet.getAdChoices().getPromoText()
        },
        adChoicesOptional: function() {
            return this.adSet.getAdChoices().isOptional()
        }
    },
    AdTrack.AdformAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.AdformAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.AdformAd.prototype.constructor = AdTrack.AdformAd,
    AdTrack.SklikAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.SklikAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.SklikAd.prototype.constructor = AdTrack.SklikAd,
    AdTrack.EtargetAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.EtargetAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.EtargetAd.prototype.constructor = AdTrack.EtargetAd,
    AdTrack.CriteoProductAd = function(t, e) {
        AdTrack.GenericProductAd.call(this, t, e)
    }
    ,
    AdTrack.CriteoProductAd.prototype = Object.create(AdTrack.GenericProductAd.prototype),
    AdTrack.CriteoProductAd.prototype.constructor = AdTrack.CriteoProductAd,
    AdTrack.CriteoProductAd.prototype.getDescription = function() {
        var t = this.ad.getProductDescription()
          , e = this.ad.getProductPrice()
          , i = e && -1 === t.indexOf(e);
        return this.adSet.getShop().getShopName() + " - " + (i ? e + " - " : "") + t
    }
    ,
    AdTrack.CriteoProductAd.prototype.getAdChoices = function() {
        return "<img src='' class='AdTrack-promoIcon' style='width: 11px; height: auto;'/>"
    }
    ,
    AdTrack.SklikProductAd = function(t, e) {
        AdTrack.GenericProductAd.call(this, t, e)
    }
    ,
    AdTrack.SklikProductAd.prototype = Object.create(AdTrack.GenericProductAd.prototype),
    AdTrack.SklikProductAd.prototype.constructor = AdTrack.SklikProductAd,
    AdTrack.SmartAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.SmartAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.SmartAd.prototype.constructor = AdTrack.SmartAd,
    AdTrack.SmartAd.prototype.getAdChoices = function() {
        return this.adChoicesOptional() ? this.adSet.getAdChoices().getPromoText() : "<img src='' class='AdTrack-promoIcon' style='width: 11px; height: auto;'/>"
    }
    ,
    AdTrack.MgidAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.MgidAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.MgidAd.prototype.constructor = AdTrack.MgidAd,
    AdTrack.AppnexusAd = function(t, e) {
        AdTrack.GenericAd.call(this, t, e)
    }
    ,
    AdTrack.AppnexusAd.prototype = Object.create(AdTrack.GenericAd.prototype),
    AdTrack.AppnexusAd.prototype.constructor = AdTrack.AppnexusAd
}
, function(t, e) {
    AdTrack.TextChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i
    }
    ,
    AdTrack.TextChannel.prototype = {
        renderAds: function(t, e) {
            this.chd.textAd = !0;
            var i = e.getStyle();
            this.validator = new AdTrack.Validator;
            var n = this.definition.options.nativeOptions ? this.definition.options.nativeOptions : null;
            if ((n = i.options.nativeOptions ? i.options.nativeOptions : n) && (this.validator.setTextMaxLength(n.maxTextLength),
            this.validator.setTitleMaxLength(n.maxTitleLength),
            this.validator.setDescriptionMaxLength(n.maxDescLength)),
            i && i.options && i.options.wrap && i.options.ad) {
                var r;
                for (t.innerHTML = i.options.wrap,
                r = 0; r < e.getWrapPartsCount(); r++) {
                    var s = e.getWrapPart(r);
                    s && this.renderWrapPart(t, s, i)
                }
                var o = this.track.getNS(t, this.definition.cls.ads);
                for (r = 0; r < Math.min(i.count, e.getAdsCount()); r++) {
                    var a = e.getAd(r);
                    if (a) {
                        var d = this.definition.cls.ad.replace("*", r)
                          , c = this.track.getNS(t, d);
                        if (o.length > 0) {
                            var h = this.track.document.createElement("div");
                            o[0].appendChild(h),
                            this.renderAd(h, a, r, i)
                        }
                        c.length > 0 && (this.renderAd(c[0], a, r, i),
                        this.track.clearClass(c, d))
                    }
                }
                this.track.clearClass(o, this.definition.cls.ads),
                "fuzzyAfter" == this.definition.options.dom.method && this.definition.options.dom.fuzzyStyleize && AdTrack.Utils.styleizeAll(this.track.document, t, this.track.transforms),
                this.renderGenericAdChoices(t, a),
                this.renderShop(t, e.getShop(), i),
                this.renderPromo(t, e.getAdChoices()),
                this.renderCloser(t),
                this.renderSlider(t),
                this.renderDate(t)
            } else
                this.track.doError("Invalid template for text ad " + this.track.domain + " / " + this.track.group + " / " + this.track.position + " / " + i + " (" + this.track.type + ")")
        },
        adClick: function(t, e, i, n, r, s) {
            s = s || [];
            var o, a, d;
            this.track.setOnclick(t, (o = e,
            a = i,
            d = n,
            function(t) {
                var e = AdTrack.Utils.getEventRelativePos(t, this.track.renderer.getContainer());
                t = t || this.track.window.event,
                this.track.evClick(this.definition, this.chd, e.x, e.y, o, a, d, r),
                s.forEach((function(t) {
                    (new Image).src = t
                }
                )),
                this.definition.options.newwindow || (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            }
            ).bind(this), this.definition.options.newwindow),
            this.definition.options.hideHref ? this.track.setAttribute(t, "href", "") : this.track.setAttribute(t, "href", n);
            try {
                this.track.window != window.top && this.track.setAttribute(t, "target", "_top")
            } catch (e) {
                this.track.setAttribute(t, "target", "_top")
            }
            this.definition.options.newwindow && this.track.setAttribute(t, "target", "_blank")
        },
        renderAd: function(t, e, i, n) {
            var r = e.getData()
              , s = null;
            s = "string" == typeof n.options.ad ? n.options.ad : n.options.ad[i] || n.options.ad[n.options.ad.length - 1];
            !0 === this.definition.test ? r.adUrl ? r.adUrl : this.track.noquerystring("//seznam.cz") : r.clickUrl;
            var o = this.track.document.createElement("div");
            for (o.innerHTML = s; o.firstChild; )
                t.appendChild(o.firstChild);
            var a = new AdTrack.Evaluator
              , d = this.definition.options.nativeOptions ? this.definition.options.nativeOptions : null;
            (d = n.options.nativeOptions ? n.options.nativeOptions : d) && (a.setImgWidth(d.imgWidth),
            a.setImageHeight(d.imgHeight),
            a.setTextLength(d.textLength),
            a.setTitleLength(d.titleLength),
            a.setDescriptionLength(d.descLength)),
            r.setEvaluator(a),
            this.renderGenericAdPart(t, e),
            this.renderAdPart(t, r, i, n),
            this.setUpZoomInFeature(t)
        },
        renderShop: function(t, e, i) {
            AdTrack.Shop.prototype.isPrototypeOf(e) && (this.renderShopName(e.getShopName(), t),
            this.renderShopSlogan(e.getShopSlogan(), t),
            this.renderShopUrl(e.getShopUrl(), t, i),
            this.renderCleanShopUrl(e.getCleanShopUrl(), t),
            this.renderShopLogo(e.getShopLogo(), t),
            this.renderLogoutUrl(e.getLogoutUrl(), t))
        },
        renderWrapPart: function(t, e, i) {
            this.track.doError("Unsupported wrap part.")
        },
        renderGenericAdPart: function(t, e) {
            var i = e.getHeadline()
              , n = e.getDescription()
              , r = new AdTrack.TextObj(i,n);
            this.validator.validateTextLengths(r);
            var s = r.getTitle()
              , o = r.getDescription();
            this.renderValidatedText(t, s, r.getOriginalTitle(), this.definition.cls.headline),
            this.renderValidatedText(t, o, r.getOriginalDescription(), this.definition.cls.description)
        },
        renderGenericAdChoices: function(t, e) {
            var i = this.track.getNS(t, this.definition.cls.adChoices);
            Array.prototype.forEach.call(i, function(t) {
                "true" === t.getAttribute("data-not-required") && e.adChoicesOptional() && t.setAttribute("style", "display: none !important;")
            }
            .bind(this)),
            this.track.clearClass(this.track.setText(i, e.getAdChoices()), this.definition.cls.adChoices),
            this.definition.options.hideAdChoices && e.adChoicesOptional() && this.track.setAttribute(i, "style", "display: none;")
        },
        renderAdPart: function(t, e, i, n) {
            if (AdTrack.TextAd.prototype.isPrototypeOf(e)) {
                this.renderAdScreenshots(e, t, n),
                this.renderText(e.getText(), t),
                this.renderClickUrl(e.getClickUrl(), t, i, n, e.getClickTrackers()),
                this.renderVisibleUrl(e.getVisibleUrl(), t),
                this.renderAdUrl(e.getAdUrl(), t),
                this.renderCta(e.getCta(), t),
                this.renderFavicon(e.getFavicon(), t);
                var r = "sklik" == this.chd.tag || "sklik-hb" == this.chd.tag || "seznam-ssp" == this.chd.tag || "seznam-ssp-hb" == this.chd.tag
                  , s = "mgid-hb-native" == this.chd.tag
                  , o = "xandr-native" == this.chd.tag;
                (r || s || o) && this.renderCompanyName(e.getCompanyName(), t),
                r && (this.renderLongHeadline(e.getLongHeadline(), t),
                this.renderLogo(e.getLogoUrl(), t),
                this.renderSquareLogo(e.getSquareLogoUrl(), t))
            } else
                AdTrack.ProductAd.prototype.isPrototypeOf(e) ? (this.renderAdScreenshots(e, t, n),
                this.renderClickUrl(e.getClickUrl(), t, i, n),
                this.renderProductTemplate(e.getProductName(), e.getProductPrice(), t),
                this.renderProductName(e.getProductName(), t),
                this.renderProductDescription(e.getProductDescription(), t),
                this.renderProductPrice(e.getProductPrice(), t),
                this.renderProductLastPrice(e.getProductLastPrice(), t),
                this.renderProductDiscount(e.getProductDiscount(), t),
                this.renderAdditionalInfo(e.getAdditionalInfo(), t),
                this.renderProductManufacturer(e.getProductManufacturer(), t),
                this.renderProductCategory(e.getProductCategory(), t),
                this.renderFavicon(e.getFavicon(), t)) : this.track.doError("Unsupported ad part.")
        },
        setUpZoomInFeature: function(t) {
            this.track.clearClass(this.track.setZoomin(this.track.getNS(t, "AdTrack-zoomin-opacity"), "opacity"), "AdTrack-zoomin-opacity"),
            this.track.clearClass(this.track.setZoomin(this.track.getNS(t, "AdTrack-zoomin-scale"), "scale"), "AdTrack-zoomin-scale")
        },
        renderValidatedText: function(t, e, i, n) {
            var r = this.track.getNS(t, n);
            this.track.setText(r, e.replace("...", "&#8230;")),
            e.length < i.length && this.track.setAttribute(r, "title", i.replace("&nbsp;", " ")),
            this.track.clearClass(r, n)
        },
        renderLongHeadline: function(t, e) {
            if (t) {
                this.validator.validateTextLengths(t);
                var i = t.getTitle();
                this.renderValidatedText(e, i, t.getOriginalTitle(), this.definition.cls.longHeadline)
            }
        },
        renderText: function(t, e) {
            if (t) {
                this.validator.validateTextLengths(t);
                var i = t.getTitle()
                  , n = t.getDescription()
                  , r = t.getWhole();
                this.renderValidatedText(e, i, t.getOriginalTitle(), this.definition.cls.creative1),
                this.renderValidatedText(e, n, t.getOriginalDescription(), this.definition.cls.creative23),
                this.renderValidatedText(e, r, t.getWholeOriginal(), this.definition.cls.creative123)
            } else
                this.track.doError("No text provided for " + this.chd.tag + " / " + this.track.domain + " / " + this.track.group + " / " + this.track.position + " (" + this.track.type + ")")
        },
        renderAdScreenshots: function(t, e, i) {
            if (t && "function" == typeof t.getScreenshot)
                for (var n = [this.definition.cls.screenshothq, this.definition.cls.imageUrl, this.definition.cls.screenshot], r = 0; r < n.length; r++) {
                    var s = this.track.getNS(e, n[r]);
                    if (s.length > 0) {
                        t.getScreenshot(n[r] != this.definition.cls.screenshot, function(t, e) {
                            var i = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                return t.apply(e, i.concat(Array.prototype.slice.call(arguments)))
                            }
                        }((function(t, e, n) {
                            n ? (i && i.options && i.options.backgroundImage ? this.track.setAttribute(t, "style", "background-image: url('" + n.url + "');") : (this.track.setAttribute(t, "src", n.url),
                            n.onError && (s = this.track.setAttribute(t, "onerror", n.onError))),
                            this.track.clearClass(t, e)) : this.track.doError("Screenshot not provided for cls " + e + ", " + this.track.domain + " / " + this.track.group + " / " + this.track.position + " (" + this.track.type + ")")
                        }
                        ), this, s, n[r]))
                    }
                }
            else
                this.track.doError("Screenshots cant be retrieved " + this.track.domain + " / " + this.track.group + " / " + this.track.position + " (" + this.track.type + ")")
        },
        renderCta: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.cta), t), this.definition.cls.cta)
        },
        renderFavicon: function(t, e) {
            var i = this.track.getNS(e, this.definition.cls.favicon);
            this.definition.options.faviconFallback && (i = this.track.setAttribute(i, "onerror", "this.src='" + this.definition.options.faviconFallback + "'")),
            this.track.clearClass(this.track.setAttribute(i, "src", t), this.definition.cls.favicon)
        },
        renderClickUrl: function(t, e, i, n, r) {
            var s = {
                a: "image",
                b: "title",
                c: "text",
                d: "banner",
                e: "ad",
                f: "url",
                g: "cta"
            };
            for (var o in s) {
                var a = s[o]
                  , d = this.definition.cls.clickUrl.replace("*", a)
                  , c = this.track.getNS(e, d);
                this.adClick(c, i, a, t, n, r),
                this.track.clearClass(c, d)
            }
        },
        renderVisibleUrl: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.visibleUrl), t), this.definition.cls.visibleUrl)
        },
        renderAdUrl: function(t, e) {
            t = this.definition.options.hideHref ? "#" : t,
            this.track.clearClass(this.track.setAttribute(this.track.getNS(e, this.definition.cls.adUrl), "href", t), this.definition.cls.adUrl)
        },
        renderProductTemplate: function(t, e, i) {
            this.track.clearClass(this.track.setText(this.track.getNS(i, this.definition.cls.productTextTemplate), t + " - Koupit za " + e), this.definition.cls.productTextTemplate)
        },
        renderProductName: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.title), t), this.definition.cls.title)
        },
        renderProductDescription: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.productDescription), t), this.definition.cls.productDescription)
        },
        renderProductPrice: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.price), t), this.definition.cls.price)
        },
        renderProductLastPrice: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.lastPrice), t), this.definition.cls.lastPrice)
        },
        renderProductDiscount: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.discount), t), this.definition.cls.discount)
        },
        renderAdditionalInfo: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.additionalInfo), t), this.definition.cls.additionalInfo)
        },
        renderProductManufacturer: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.manufacturer), t), this.definition.cls.manufacturer)
        },
        renderProductCategory: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.category), t), this.definition.cls.category)
        },
        renderShopName: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.shopName), t), this.definition.cls.shopName)
        },
        renderShopSlogan: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.shopSlogan), t), this.definition.cls.shopSlogan)
        },
        renderCleanShopUrl: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.cleanShopUrl), t), this.definition.cls.cleanShopUrl)
        },
        renderShopLogo: function(t, e) {
            this.track.clearClass(this.track.setAttribute(this.track.getNS(e, this.definition.cls.shopLogoUrl), "src", t), this.definition.cls.shopLogoUrl)
        },
        renderLogoutUrl: function(t, e) {
            this.track.clearClass(this.track.setAttribute(this.track.getNS(e, this.definition.cls.logoutUrl), "href", t), this.definition.cls.logoutUrl)
        },
        renderLogo: function(t, e) {
            this.track.clearClass(this.track.setAttribute(this.track.getNS(e, this.definition.cls.logoUrl), "src", t), this.definition.cls.logoUrl)
        },
        renderSquareLogo: function(t, e) {
            this.track.clearClass(this.track.setAttribute(this.track.getNS(e, this.definition.cls.squareLogoUrl), "src", t), this.definition.cls.squareLogoUrl)
        },
        renderCompanyName: function(t, e) {
            this.track.clearClass(this.track.setText(this.track.getNS(e, this.definition.cls.companyName), t), this.definition.cls.companyName)
        },
        renderShopUrl: function(t, e, i) {
            var n = this.track.getNS(e, this.definition.cls.shopUrl);
            this.adClick(n, 0, "cta", t, i),
            this.track.clearClass(n, this.definition.cls.shopUrl)
        },
        renderPromo: function(t, e) {
            if (e) {
                var i = this.track.getNS(t, this.definition.cls.promoIcon);
                this.track.setAttribute(i, "src", e.getPromoIcon()),
                this.track.setAttribute(i, "title", "Reklama"),
                this.track.clearClass(i, this.definition.cls.promoIcon),
                this.track.clearClass(this.track.setText(this.track.getNS(t, this.definition.cls.promoTitle), e.getPromoText()), this.definition.cls.promoTitle),
                this.track.clearClass(this.track.setAttribute(this.track.setAttribute(this.track.getNS(t, this.definition.cls.promoClick), "href", e.getPromoClickUrl()), "target", "_top"), this.definition.cls.promoClick)
            } else
                this.track.doError("Ad choices not provided" + this.track.domain + " / " + this.track.group + " / " + this.track.position + " (" + this.track.type + ")")
        },
        renderCloser: function(t) {
            this.closeHandle = function(t) {
                this.track.renderer.close && ((t = t || this.track.window.event).preventDefault ? t.preventDefault() : t.returnValue = !1,
                this.track.renderer.close())
            }
            .bind(this),
            this.track.clearClass(this.track.setText(this.track.getNS(t, this.definition.cls.closeTitle), "Zavřít reklamu"), this.definition.cls.closeTitle),
            this.track.clearClass(this.track.setOnclick(this.track.getNS(t, this.definition.cls.closeClick), this.closeHandle), this.definition.cls.closeClick)
        },
        renderSlider: function(t) {
            this.track.getNS(t, "AdTrack-slider-wrapper").length > 0 && AdTrack.Slider.create(t)
        },
        renderDate: function(t) {
            var e, i, n, r, s, o, a, d, c = (n = new Date,
            s = function(t) {
                var e = n.getMonth() + 1;
                return t && e < 10 ? "0" + e : "" + e
            }
            ,
            o = function(t) {
                var e = n.getFullYear().toString();
                return t ? e.substring(2, 4) : e
            }
            ,
            a = function(t, e) {
                var i = n.getHours();
                return e && (i = 0 === i || 12 === i ? 12 : i % 12),
                t && i < 10 ? "0" + i : "" + i
            }
            ,
            d = {
                d: (r = function(t) {
                    var e = n.getDate();
                    return t && e < 10 ? "0" + e : "" + e
                }
                )(!0),
                j: r(),
                m: s(!0),
                n: s(),
                Y: o(),
                y: o(!0),
                g: a(!1, !0),
                G: a(!1, !1),
                h: a(!0, !0),
                H: a(!0, !1),
                i: (i = n.getMinutes(),
                i < 10 ? "0" + i : "" + i),
                s: (e = n.getSeconds(),
                e < 10 ? "0" + e : "" + e)
            },
            {
                getDateFormatted: function(t) {
                    var e = "";
                    if (t && "string" == typeof t)
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            e += d[n] ? d[n] : n
                        }
                    return e
                }
            }), h = this.track.getNS(t, this.definition.cls.date);
            Array.prototype.forEach.call(h, function(t) {
                t.innerHTML = c.getDateFormatted(t.innerHTML)
            }
            .bind(this)),
            this.track.clearClass(h, this.definition.cls.date)
        }
    }
}
, function(t, e) {
    AdTrack.TextAd = function() {
        this.texts = [],
        this.screenshots = new AdTrack.ImageCollection,
        this.adUrl = "",
        this.clickUrl = "",
        this.visibleUrl = "",
        this.clickTrackers = [],
        this.longHeadline = "",
        this.companyName = "",
        this.logoUrl = "",
        this.squareLogoUrl = "",
        this.cta = "",
        this.favicon = "",
        this.evaluator = null
    }
    ,
    AdTrack.TextAd.prototype = {
        done: function() {
            this.screenshots.close()
        },
        setEvaluator: function(t) {
            this.evaluator = t
        },
        addText: function(t, e) {
            var i = new AdTrack.TextObj(t,e);
            this.texts.push(i)
        },
        getText: function() {
            return this.evaluator && "function" == typeof this.evaluator.pickBestText ? this.evaluator.pickBestText(this.texts) : this.texts[0]
        },
        addScreenshot: function(t, e, i, n) {
            t && this.screenshots.addScreenshot(t, e, i, n)
        },
        getScreenshot: function(t, e) {
            "function" == typeof e && this.screenshots.then(function(i) {
                this.evaluator && "function" == typeof this.evaluator.pickBestScreenshot ? e(this.evaluator.pickBestScreenshot(i, t)) : e(i[0])
            }
            .bind(this))
        },
        setAdUrl: function(t) {
            this.adUrl = t
        },
        getAdUrl: function() {
            return this.adUrl
        },
        setClickUrl: function(t) {
            this.clickUrl = t
        },
        getClickUrl: function() {
            return this.clickUrl
        },
        setVisibleUrl: function(t) {
            t && (this.visibleUrl = t)
        },
        getVisibleUrl: function() {
            return this.visibleUrl
        },
        setCta: function(t) {
            t && (this.cta = t)
        },
        getCta: function() {
            return this.cta
        },
        setFavicon: function(t) {
            t && (this.favicon = t)
        },
        getFavicon: function() {
            return this.favicon
        },
        setLongHeadline: function(t) {
            t && (this.longHeadline = new AdTrack.TextObj(t,""))
        },
        getLongHeadline: function() {
            return this.longHeadline
        },
        setCompanyName: function(t) {
            t && (this.companyName = t)
        },
        getCompanyName: function() {
            return this.companyName
        },
        setLogoUrl: function(t) {
            t && (this.logoUrl = t)
        },
        getLogoUrl: function() {
            return this.logoUrl
        },
        setSquareLogoUrl: function(t) {
            t && (this.squareLogoUrl = t)
        },
        getSquareLogoUrl: function() {
            return this.squareLogoUrl
        },
        setClickTrackers: function(t) {
            t && "function" == typeof t.forEach && (this.clickTrackers = t)
        },
        getClickTrackers: function() {
            return this.clickTrackers
        }
    },
    AdTrack.ProductAd = function() {
        this.screenshots = new AdTrack.ImageCollection,
        this.name = "",
        this.description = "",
        this.price = "",
        this.lastPrice = "",
        this.discount = "",
        this.manufacturer = "",
        this.category = "",
        this.additionalInfo = "",
        this.clickUrl = "",
        this.favicon = "",
        this.evaluator = null
    }
    ,
    AdTrack.ProductAd.prototype = {
        done: function() {
            this.screenshots.close()
        },
        setEvaluator: function(t) {
            this.evaluator = t
        },
        addScreenshot: function(t, e, i, n) {
            t && this.screenshots.addScreenshot(t, e, i, n)
        },
        getScreenshot: function(t, e) {
            "function" == typeof e && this.screenshots.then(function(i) {
                this.evaluator && "function" == typeof this.evaluator.pickBestScreenshot ? e(this.evaluator.pickBestScreenshot(i, t)) : e(i[0])
            }
            .bind(this))
        },
        setProductName: function(t) {
            t && (this.name = t)
        },
        getProductName: function() {
            return this.name
        },
        setProductPrice: function(t) {
            t && (this.price = t)
        },
        getProductPrice: function() {
            return this.price
        },
        setProductLastPrice: function(t) {
            t && (this.lastPrice = t)
        },
        getProductLastPrice: function() {
            return this.lastPrice
        },
        setProductDiscount: function(t) {
            t && (this.discount = t)
        },
        getProductDiscount: function() {
            return this.discount
        },
        setAdditionalInfo: function(t) {
            t && (this.additionalInfo = t)
        },
        getAdditionalInfo: function() {
            return this.additionalInfo
        },
        setProductManufacturer: function(t) {
            t && (this.manufacturer = t)
        },
        getProductManufacturer: function() {
            return this.manufacturer
        },
        setProductCategory: function(t) {
            t && (this.category = t)
        },
        getProductCategory: function() {
            return this.category
        },
        setClickUrl: function(t) {
            this.clickUrl = t
        },
        getClickUrl: function() {
            return this.clickUrl
        },
        setFavicon: function(t) {
            t && (this.favicon = t)
        },
        getFavicon: function() {
            return this.favicon
        },
        setProductDescription: function(t) {
            t && (this.description = t)
        },
        getProductDescription: function() {
            return this.description
        }
    },
    AdTrack.Shop = function() {
        this.shopName = "",
        this.shopSlogan = "",
        this.shopLogo = "",
        this.shopUrl = "",
        this.cleanShopUrl = "",
        this.logoutUrl = ""
    }
    ,
    AdTrack.Shop.prototype = {
        setShopName: function(t) {
            t && (this.shopName = t)
        },
        getShopName: function() {
            return this.shopName
        },
        setShopSlogan: function(t) {
            t && (this.shopSlogan = t)
        },
        getShopSlogan: function() {
            return this.shopSlogan
        },
        setShopUrl: function(t) {
            this.shopUrl = t
        },
        getShopUrl: function() {
            return this.shopUrl
        },
        setCleanShopUrl: function(t) {
            t && (this.cleanShopUrl = t)
        },
        getCleanShopUrl: function() {
            return this.cleanShopUrl
        },
        setShopLogo: function(t) {
            t && (this.shopLogo = t)
        },
        getShopLogo: function() {
            return this.shopLogo
        },
        setLogoutUrl: function(t) {
            this.logoutUrl = t
        },
        getLogoutUrl: function() {
            return this.logoutUrl
        }
    },
    AdTrack.AdChoices = function() {
        this.optional = !0,
        this.promoText = "",
        this.promoIcon = "",
        this.promoClickUrl = "#"
    }
    ,
    AdTrack.AdChoices.prototype = {
        setPromoText: function(t) {
            this.promoText = t
        },
        getPromoText: function() {
            return this.promoText
        },
        setPromoIcon: function(t) {
            this.promoIcon = t
        },
        getPromoIcon: function() {
            return this.promoIcon
        },
        setPromoClickUrl: function(t) {
            t && (this.promoClickUrl = t)
        },
        getPromoClickUrl: function() {
            return this.promoClickUrl
        },
        setOptional: function(t) {
            this.optional = !!t
        },
        isOptional: function() {
            return this.optional
        }
    },
    AdTrack.AdSet = function() {
        this.ads = [],
        this.wrapParts = [],
        this.shop = null,
        this.adChoices = null,
        this.style = null
    }
    ,
    AdTrack.AdSet.prototype = {
        addAd: function(t) {
            t && this.ads.push(t)
        },
        addWrapPart: function(t) {
            t && this.wrapParts.push(t)
        },
        addShop: function(t) {
            this.shop = t
        },
        getShop: function() {
            return this.shop
        },
        addAdChoices: function(t) {
            this.adChoices = t
        },
        getAdChoices: function() {
            return this.adChoices
        },
        getAd: function(t) {
            return !isNaN(parseInt(t, 10)) && t >= 0 && t < this.ads.length ? this.ads[t] : null
        },
        getWrapPart: function(t) {
            return !isNaN(parseInt(t, 10)) && t >= 0 && t < this.wrapParts.length ? this.wrapParts[t] : null
        },
        getAdsCount: function() {
            return this.ads.length
        },
        getWrapPartsCount: function() {
            return this.wrapParts.length
        },
        setStyle: function(t) {
            this.style = t
        },
        getStyle: function() {
            return this.style
        }
    },
    AdTrack.Validator = function() {
        this.maxl = -1,
        this.maxtl = -1,
        this.maxdl = -1
    }
    ,
    AdTrack.Validator.prototype = {
        isPositiveInt: function(t) {
            return t && !isNaN(parseInt(t, 10)) && t > 0
        },
        setTextMaxLength: function(t) {
            this.isPositiveInt(t) && (this.maxl = t)
        },
        setTitleMaxLength: function(t) {
            this.isPositiveInt(t) && (this.maxtl = t)
        },
        setDescriptionMaxLength: function(t) {
            this.isPositiveInt(t) && (this.maxdl = t)
        },
        cutText: function(t, e) {
            var i = t.replace(/[&][a-zA-Z]*[;]/g, " ").length
              , n = [];
            if (t && "string" == typeof t && this.isPositiveInt(e) && i > e) {
                for (var r = (t = function(t) {
                    for (var e = new RegExp(/[&][a-zA-Z]*[;]/g), i = e.exec(t); null != i; ) {
                        n.push({
                            index: i.index,
                            value: i[0]
                        });
                        var r = i[0];
                        t = t.replace(new RegExp(r), " "),
                        i = (e = new RegExp(/[&][a-zA-Z]*[;]/g)).exec(t)
                    }
                    return t
                }(t)).slice(0, e - 3); r.match(/\.$/); )
                    r = r.slice(0, r.length - 1);
                return (r = function(t) {
                    for (var e = n.length - 1; e >= 0; e--) {
                        var i = n[e];
                        i.index < t.length && (t = t.substr(0, i.index) + i.value + t.substr(i.index + 1, t.length))
                    }
                    return t
                }(r)).trim()
            }
            return t
        },
        validateTextLengths: function(t) {
            var e, i;
            if (this.maxl > 0) {
                if (i = t.getWhole(),
                (e = this.cutText(i, this.maxl)).length == i.length)
                    return;
                var n = i.length - (t.descriptionLength() + t.titleLength());
                e.length <= t.titleLength() + n ? (t.setTitle(e.length <= t.titleLength() ? e + "..." : t.getTitle() + "..."),
                t.clearDescription()) : (e = (e = e.replace(t.getTitle(), "")).slice(n, e.length),
                t.setDescription(e + "..."))
            } else
                this.maxtl > 0 && (i = t.getTitle(),
                e = this.cutText(i, this.maxtl),
                t.setTitle(e.length < t.titleLength() ? e + "..." : e)),
                this.maxdl > 0 && (i = t.getDescription(),
                e = this.cutText(i, this.maxdl),
                t.setDescription(e.length < t.descriptionLength() ? e + "..." : e))
        }
    },
    AdTrack.Evaluator = function() {
        this.width = -1,
        this.height = -1,
        this.ol = -1,
        this.otl = -1,
        this.odl = -1
    }
    ,
    AdTrack.Evaluator.prototype = {
        isPositiveInt: function(t) {
            return t && !isNaN(parseInt(t, 10)) && t > 0
        },
        setImgWidth: function(t) {
            this.isPositiveInt(t) && (this.width = t)
        },
        setImageHeight: function(t) {
            this.isPositiveInt(t) && (this.height = t)
        },
        setTextLength: function(t) {
            this.isPositiveInt(t) && (this.ol = t)
        },
        setTitleLength: function(t) {
            this.isPositiveInt(t) && (this.otl = t)
        },
        setDescriptionLength: function(t) {
            this.isPositiveInt(t) && (this.odl = t)
        },
        pickBestScreenshot: function(t, e) {
            if (t && t.length > 0) {
                for (var i = function(t, e, i) {
                    var n = e / i
                      , r = Math.abs(t.getRatio() - n);
                    if (!t.isAbleToZoom(e, 0))
                        return Number.POSITIVE_INFINITY;
                    var s = 10 * r;
                    return s += t.width - e > 0 ? 0 : Math.abs(t.width - e) / 1e3
                }, n = -1, r = Number.POSITIVE_INFINITY, s = 0; s < t.length; s++) {
                    var o = this.width
                      , a = this.height;
                    -1 != o && -1 != a || (o = e ? 2 : 1,
                    a = 1);
                    var d = i(t[s], o, a);
                    d < r && (r = d,
                    n = s)
                }
                return t[-1 != n ? n : 0]
            }
            return null
        },
        pickBestText: function(t) {
            if (t && t.length > 0) {
                for (var e = function(t, e, i) {
                    var n, r, s = 0;
                    return e < 0 && i < 0 && (e = 30,
                    i = 80),
                    e > 0 && t.titleLength() > 0 && (s += (n = t.titleLength() / e) > 1 ? Math.pow(n, 6) : Math.pow(1 / n, 2)),
                    i > 0 && t.descriptionLength() > 0 && (s += (r = t.descriptionLength() / i) > 1 ? Math.pow(r, 4) : Math.pow(1 / r, 2)),
                    n && r ? s : Number.POSITIVE_INFINITY
                }, i = -1, n = Number.POSITIVE_INFINITY, r = 0; r < t.length; r++) {
                    var s;
                    this.ol > 0 ? (o = t[r],
                    a = this.ol,
                    d = void 0,
                    s = (d = a - (o.titleLength() + o.descriptionLength() + 3)) < 0 ? Math.pow(Math.abs(d), 1.35) : d) : s = e(t[r], this.otl, this.odl),
                    s < n && (n = s,
                    i = r)
                }
                return t[-1 != i ? i : 0]
            }
            var o, a, d;
            return null
        }
    },
    AdTrack.TextObj = function(t, e) {
        this.title = t,
        this.originalTitle = t,
        this.description = e,
        this.originalDescription = e
    }
    ,
    AdTrack.TextObj.prototype = {
        setTitle: function(t) {
            t && t.length > 0 && (this.title = t)
        },
        getTitle: function() {
            return this.title
        },
        getOriginalTitle: function() {
            return this.originalTitle
        },
        setDescription: function(t) {
            t && t.length > 0 && (this.description = t)
        },
        clearDescription: function() {
            this.description = ""
        },
        getOriginalDescription: function() {
            return this.originalDescription
        },
        getDescription: function() {
            return this.description
        },
        getWhole: function() {
            return this.description ? this.title + " - " + this.description : this.title
        },
        getWholeOriginal: function() {
            return this.originalDescription ? this.originalTitle + " - " + this.originalDescription : this.originalTitle
        },
        titleLength: function() {
            return this.title.length
        },
        descriptionLength: function() {
            return this.description.length
        }
    },
    AdTrack.ScreenshotObj = function(t, e, i, n, r) {
        if (this.maxZoomInPercentage = 50,
        this.url = t,
        this.onError = n,
        this.width = e,
        this.height = i,
        this.onload = r,
        0 == e && 0 == i) {
            var s = new Image;
            s.onload = function(t) {
                this.width = t.target.width,
                this.height = t.target.height,
                "function" == typeof this.onload && this.onload()
            }
            .bind(this),
            s.src = this.url,
            this.width = s.width,
            this.height = s.height
        } else
            "function" == typeof this.onload && setTimeout(this.onload, 10)
    }
    ,
    AdTrack.ScreenshotObj.prototype = {
        getRatio: function() {
            return this.width / this.height
        },
        isAbleToZoom: function(t, e) {
            var i = this.width * (1 + this.maxZoomInPercentage / 100)
              , n = this.height * (1 + this.maxZoomInPercentage / 100);
            return i >= t && n >= e
        }
    },
    AdTrack.ImageCollection = function() {
        this.timeout = 2500,
        this.timeouted = !1,
        this.closed = !1,
        this.ready = !0,
        this.imagesLoaded = 0,
        this.callbacks = [],
        this.screenshots = [],
        setTimeout(function() {
            this.ready || (this.timeouted = !0,
            this.loaded())
        }
        .bind(this), this.timeout)
    }
    ,
    AdTrack.ImageCollection.prototype = {
        then: function(t) {
            "function" == typeof t && (this.ready ? t(this.screenshots) : this.callbacks.push(t))
        },
        addScreenshot: function(t, e, i, n) {
            this.ready = !1,
            this.screenshots.push(new AdTrack.ScreenshotObj(t,e,i,n,function() {
                this.timeouted || (this.imagesLoaded++,
                this.imagesLoaded == this.screenshots.length && (this.ready = !0,
                this.closed && this.loaded()))
            }
            .bind(this)))
        },
        close: function() {
            this.ready ? this.loaded() : this.closed = !0
        },
        loaded: function() {
            for (var t = 0; t < this.callbacks.length; t++)
                "function" == typeof this.callbacks[t] && this.callbacks[t](this.screenshots);
            this.callbacks = []
        }
    }
}
, function(t, e) {
    AdTrack.AdformHelper = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo),
        this.kwHandlers = [],
        "hbbtv" === this.track.environment ? (this.definition.options.dmpmKeywords || "hbbtv" === this.chd.tag) && (this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("dmpm-tv")),
        this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("hbbtv-ua-parser"))) : (this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("html-extract")),
        this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("ua-extract"))),
        this.noFPBNs = AdTrack.Utils.objectValues(this.definition.options.noFPBNs)
    }
    ,
    AdTrack.AdformHelper.prototype = {
        BANNER: 1,
        VAST: 2,
        OUTDOOR: 4,
        onBidRequest: function() {
            this.definition.options.customDislableKeywordReport && 1 == this.definition.options.customDislableKeywordReport || this.track.keywordsModule.report(this, this.chd.tag)
        },
        isBlacklisted: function(t, e) {
            return e.some((function(e) {
                return new RegExp("/" + e + "/").test(t)
            }
            ))
        },
        bid: function(t, e, i, n) {
            var r = function(r) {
                var s = r;
                r = r[0];
                var o = null
                  , a = this.getAdData(r, i);
                if (a) {
                    var d = !1;
                    if (i === this.BANNER && (d = AdTrack.Utils.isBlackListedAds(a)),
                    !1 !== d)
                        return this.track.doError("Blocked Adform creative from " + d, "info"),
                        this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, r.win_crid || "", r.deal_id || "", r.win_bid, a),
                        null;
                    this.response = r;
                    var c = this.noFPBNs.some((function(t) {
                        return t == r.win_crid
                    }
                    ));
                    r.win_cur === this.chd.currency ? (o = AdTrack.Price.create(r.win_bid, this.chd.currency, r.deal_id, c),
                    "DID-811-92131" == r.deal_id && this.track.doError("Deal ID (DID-811-92131) received directly from AdForm channel with price " + r.win_bid + " " + r.win_cur, "debug"),
                    t.setCreativeId(r.win_crid),
                    t.setPrice(o),
                    t.setWidth(r.width),
                    t.setHeight(r.height),
                    this.prebidVideo && (t.setVideoVastXML(a),
                    t.setVideoImpUrl(this.getVideoImpUrl(e)))) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + r.win_cur + " instead of: " + this.chd.currency)
                }
                n && n(o, s),
                this.onBidRequest()
            }
            .bind(this);
            if ("457593" != e && "610175" != e || this.track.settings.ip && "84.242.121.62" === this.track.settings.ip) {
                var s = this.generateAdxUrl(e, i)
                  , o = this;
                AdTrack.Ajax.request({
                    label: "Adform bid",
                    url: s,
                    method: "",
                    async: !this.definition.options.noAsync,
                    json: !0,
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this)
                }, this.track.errorReporting).done((function(t) {
                    r(t)
                }
                )).fail((function(t, e) {
                    e ? o.track.evBidTimeout(o.definition, o.chd) : o.track.evBidError(o.definition, o.chd),
                    this.error && o.track.definition.options.hb,
                    n && n(null, null)
                }
                )).send()
            } else
                r([{}])
        },
        generateAdxUrl: function(t, e) {
            var i = {};
            i.t = e || this.BANNER;
            var n = this.getKeywords();
            if (n && (i.mkw = n),
            "hbbtv" === this.track.environment) {
                var r = this.track.getDeviceId();
                r && (i.adid = r)
            }
            AdTrack.url && ("string" == typeof this.chd.flag && -1 !== this.chd.flag.indexOf("premium") || 1 == this.chd.unmaskedDomain) && (i.url = AdTrack.url),
            this.chd.currency && (i.rcur = this.chd.currency),
            this.chd.bidFloor && (i.minp = this.chd.bidFloor);
            var s = this.adformUtils.generateAdxUrl([t], i)
              , o = {};
            if (AdTrack.CMP && (o = AdTrack.CMP.getConsentData("never", !1)),
            o && (this.track.evBidConsent(this.definition, this.chd),
            s += (o.gdprApplies ? "&gdpr=true" : "") + (o.consentString ? "&gdpr_consent=" + o.consentString : "")),
            AdTrack.UserID) {
                var a = {}
                  , d = AdTrack.UserID.getAllUserIdsAsEids();
                d && (a = function(t) {
                    return t.reduce((t,e)=>{
                        const i = e.source;
                        return t[i] = t[i] || {},
                        e.uids.forEach(e=>{
                            const n = e.id + "";
                            t[i][n] = t[i][n] || [],
                            t[i][n].push(e.atype)
                        }
                        ),
                        t
                    }
                    , {})
                }(d)),
                a && a !== {} && (s += "&eids=" + encodeURIComponent(AdTrack.Utils.b2a(JSON.stringify(a))))
            }
            return s
        },
        getKeywords: function() {
            var t = null;
            this.kwHandlers.length > 0 && !this.chd.noKeywords && this.track.keywordsModule.processor(this, this.chd.tag).getKeywords(function(e) {
                e && (e = Object.keys(e)) && e.length > 0 && (t = e.map((function(t) {
                    return encodeURI(t)
                }
                )).join())
            }
            .bind(this));
            return t
        },
        getVideoImpUrl: function(t) {
            return "//" + this.track.server + "/load.php?" + AdTrack.Utils.uri("d", this.track.unitID.d) + "&" + AdTrack.Utils.uri("g", this.track.unitID.g) + "&" + AdTrack.Utils.uri("p", this.track.unitID.p) + "&" + AdTrack.Utils.uri("m", this.track.unitID.m) + "&" + AdTrack.Utils.uri("c", this.chd.tag) + "&" + AdTrack.Utils.uri("cf", this.chd.flag ? this.chd.flag : "") + "&" + AdTrack.Utils.uri("u", AdTrack.url) + "&" + AdTrack.Utils.uri("key", t) + "&l=1&t=0"
        },
        getAdData: function(t, e) {
            if (t && t.response) {
                if ("banner" === t.response && e === this.BANNER)
                    return t.banner;
                if ("outdoor" === t.response && e === this.OUTDOOR)
                    return t.outdoor;
                if ("vast_url" === t.response && e === this.VAST && !this.prebidVideo)
                    return t.vast_url;
                if ("vast_content" === t.response && e === this.VAST)
                    return t.vast_content
            }
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.RubiconCSync = AdTrack.RubiconCSync || (i = !1,
    function() {
        if (!i) {
            var t = "https://eus.rubiconproject.com/usync.html"
              , e = null;
            if (AdTrack.CMP && (e = AdTrack.CMP.getConsentData("never", !1)),
            e) {
                var n = e.consentString || "";
                t += "?gdpr=" + (e.gdprApplies ? 1 : 0) + "&gdpr_consent=" + n
            }
            AdTrack.Utils.csyncFrame(t),
            i = !0
        }
    }
    )
}
, function(t, e) {
    AdTrack.AdformNAHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.delayTime = 800,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.helper = new AdTrack.AdformHelper(t,e,i),
        this.bidResponse = new AdTrack.Bid
    }
    ,
    AdTrack.AdformNAHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, this.helper.OUTDOOR, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e) {
            if (this.data)
                this.processData(t, this.data, e ? e.normal : null);
            else {
                var i = this.track.getChannelKey(this.chd, e ? e.normal : null);
                if (i) {
                    var n = function(i) {
                        var n = i[0];
                        if (n && n.outdoor && n.outdoor.imp) {
                            var r = n.outdoor.imp.split("?bn=")[1].split(";")[0]
                              , s = "//track.adform.net/adfserve/?bn=" + r + "&CREFURL=" + encodeURIComponent(AdTrack.url);
                            this.ajaxGet(s, {
                                Accept: "text/plain"
                            }, function(n) {
                                var s = n.target.responseText
                                  , o = {
                                    bn: r,
                                    data: i[0].outdoor,
                                    data2: s
                                };
                                !0 === this.processResult(o, t, e ? e.normal : null) ? this.track.loaded(this.definition, this.chd, 1, e ? e.normal : null, null) : this.track.passback(this.definition, this.chd)
                            }
                            .bind(this))
                        } else
                            this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                        n(e)
                    }
                    ), i)
                } else
                    this.track.doError("Undefined key")
            }
        },
        processData: function(t, e, i) {
            var n = new AdTrack.AdSet;
            n.setStyle(i);
            var r = new AdTrack.AdChoices;
            r.setPromoClickUrl(this.chd.url),
            r.setPromoText(this.chd.title),
            r.setOptional(!0),
            n.addAdChoices(r);
            var s, o = new AdTrack.TextAd;
            for (s = 0; s < e.texts.length; s++)
                o.addText(e.texts[s].title, e.texts[s].desc);
            for (s = 0; s < e.images.length; s++) {
                var a = e.images[s]
                  , d = new Image;
                d.src = a,
                o.addScreenshot(a, d.width, d.height, a)
            }
            var c = !0 === this.definition.test ? "#" : e.url;
            o.setClickUrl(c),
            o.setVisibleUrl(""),
            o.setCta("Navštívit stránku"),
            o.setFavicon(""),
            o.done(),
            n.addAd(new AdTrack.AdformAd(n,o)),
            new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(t, n)
        },
        templateR2B2: function(t, e) {
            var i, n, r, s = e || [];
            if (t.nadpis && t.popisek1 && t.popisek2)
                return i = t.nadpis,
                n = t.popisek ? t.popisek : t.popisek1 + " " + t.popisek2,
                s.push({
                    title: i,
                    description: n
                }),
                s;
            for (r in e = {},
            t)
                if (t.hasOwnProperty(r) && r.match(/(nadpis|popisek)_[0-9]*$/)) {
                    var o = r.split("_")[1]
                      , a = r.split("_")[0];
                    e[o] = e[o] ? e[o] : {},
                    e[o][a] = t[r]
                }
            for (r in e)
                e.hasOwnProperty(r) && (i = e[r].nadpis ? e[r].nadpis : t.nadpis ? t.nadpis : null,
                n = e[r].popisek ? e[r].popisek : t.popisek ? t.popisek : null,
                i && n && s.push({
                    title: i,
                    description: n
                }));
            return s
        },
        templateIM: function(t, e) {
            var i, n, r = e || [], s = [], o = [];
            for (var a in t)
                t.hasOwnProperty(a) && a.match(/title_(short|medium|long)$/) && "" != t[a] && s.push(t[a]),
                t.hasOwnProperty(a) && a.match(/description_(short|medium|long)$/) && "" != t[a] && o.push(t[a]);
            for (var d = 0; d < s.length; d++) {
                i = s[d];
                for (var c = 0; c < o.length; c++)
                    n = o[c],
                    r.push({
                        title: i,
                        description: n
                    })
            }
            return r
        },
        processResult: function(t, e, i) {
            var n = JSON.parse("[" + t.data2.split("Adform.BannerData.videoSources = [")[1].split("];")[0] + "]")
              , r = t.data2.split("var ADFDomain='")[1].split("';")[0]
              , s = (t.data2.split("var ADF_clickTag='")[1].split("';")[0],
            JSON.parse(t.data2.split("Adform.RMBData.userParams            = ")[1].split("};")[0] + "}"));
            this.count = 1,
            this.adData = {
                data: t.data,
                data2: s,
                baseUrl: r,
                images: n
            };
            var o = new AdTrack.AdSet;
            o.setStyle(i);
            var a = new AdTrack.AdChoices;
            a.setPromoClickUrl(this.chd.url),
            a.setPromoText(this.chd.title),
            a.setOptional(!0),
            o.addAdChoices(a);
            var d = new AdTrack.TextAd
              , c = [];
            this.templateR2B2(s, c),
            this.templateIM(s, c);
            for (var h = 0; h < c.length; h++) {
                var l = c[h];
                d.addText(l.title, l.description)
            }
            if (!d.texts || d.texts.length < 1)
                return this.track.doError("Adform template didnt provide any text.", {
                    bn: t.bn,
                    pageUrl: s.viditelnaURL,
                    landingPage: s.landingPage
                }),
                !1;
            for (var u = 0; u < n.length; u++) {
                var p = r + n[u].file
                  , f = new Image;
                f.src = p,
                d.addScreenshot(p, f.width, f.height, p)
            }
            var g = s.ctaPopisek ? s.ctaPopisek : "Navštívit stránku"
              , m = s.viditelnaURL ? s.viditelnaURL : ""
              , k = s.landingPage ? s.landingPage : ""
              , v = !0 === this.definition.test ? k : t.data.clk;
            d.setClickUrl(v),
            d.setVisibleUrl(m),
            d.setAdUrl(k),
            d.setCta(g),
            d.setFavicon(""),
            d.done(),
            o.addAd(new AdTrack.AdformAd(o,d)),
            new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, o);
            var b = this.track.window.document.createElement("img");
            return b.setAttribute("src", t.data.imp),
            b.setAttribute("style", "width: 0px; height: 0px; border-style: none; display: none;"),
            e.appendChild(b),
            !0
        },
        ajaxGet: function(t, e, i) {
            e || (e = {});
            var n = new XMLHttpRequest;
            for (var r in n.open("GET", t, !0),
            e)
                e.hasOwnProperty(r) && n.setRequestHeader(r, e[r]);
            return n.addEventListener("load", "function" == typeof i ? i : function() {}
            ),
            n.onerror = function() {
                this.track.passback(this.definition, this.chd)
            }
            .bind(this),
            n.ontimeout = function() {
                this.track.passback(this.definition, this.chd)
            }
            .bind(this),
            n.timeout = this.delayTime,
            n.send(),
            n
        },
        checkResult: function(t) {
            for (var e = !0, i = ["popisek1", "popisek2", "nadpis", "popisek_1", "popisek_2", "popisek_3", "popisek_4", "popisek_5", "nadpis_1", "nadpis_2", "nadpis_3", "nadpis_4", "nadpis_5", "viditelnaURL"], n = 0; n < Object.keys(t).length; n++) {
                var r = Object.keys(t)[n]
                  , s = t[r];
                if ("ctaPopisek" == r || "landingPage" == r) {
                    if ("" == s) {
                        e = !1;
                        break
                    }
                } else {
                    if (-1 == i.indexOf(r)) {
                        e = !1;
                        break
                    }
                    if (s.match(/^[0-9]{2,3} znaků/g)) {
                        e = !1;
                        break
                    }
                }
            }
            return e
        }
    }
}
, function(t, e) {
    AdTrack.KeyValTargeting = function() {
        var t = {}
          , e = function(t, e) {
            AdTrack.Log.debug("AdServer", "Set targeting: " + t + " => " + e, AdTrack.Log.INFO)
        }
          , i = function(t, e, i) {
            for (var n in t.customTargeting)
                if (t.customTargeting.hasOwnProperty(n))
                    try {
                        var r = t.customTargeting[n];
                        if ("object" == typeof r) {
                            if (!r.type || !r.val)
                                continue;
                            "function" === r.type && (r = new Function("cpm",r.val)(e))
                        }
                        i(n, r)
                    } catch (t) {}
        };
        return {
            addServer: function(n) {
                var r, s = n.adServer;
                s && (t[s] || ("adform" === s ? t[s] = (r = !1,
                {
                    init: function() {
                        r || function() {
                            var t = document.createElement("script");
                            t.async = !0,
                            t.type = "text/javascript";
                            var e = "https:" === document.location.protocol;
                            t.src = (e ? "https:" : "http:") + "//s1.adform.net/banners/scripts/adx.js";
                            var i = document.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(t, i)
                        }(),
                        r = !0
                    },
                    setTargeting: function(t, n, r) {
                        window.adformtag = window.adformtag || [],
                        adformtag.push((function() {
                            adformtag.setPrice(r.unitId, n),
                            adformtag.setCustomData(r.unitId, r.adIdKey, t),
                            e(r.adIdKey, t),
                            i(r, n, (function(t, i) {
                                adformtag.setTargeting(r.unitId, t, i),
                                e(t, i)
                            }
                            ))
                        }
                        ))
                    }
                }) : "dfp" === s ? t[s] = function() {
                    AdTrack.Log.debug("AdServer", "DFP adserver setup", AdTrack.Log.INFO),
                    window.googletag && window.googletag.pubads || (window.googletag = window.googletag || {},
                    googletag.cmd = googletag.cmd || [],
                    googletag.cmd.push((function() {
                        googletag.pubads().disableInitialLoad()
                    }
                    )),
                    function() {
                        var t = document.createElement("script");
                        t.async = !0,
                        t.type = "text/javascript";
                        var e = "https:" == document.location.protocol;
                        t.src = (e ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(t, i)
                    }());
                    return {
                        init: function() {
                            AdTrack.Log.debug("AdServer", "DFP adserver init", AdTrack.Log.INFO),
                            googletag.cmd.push((function() {
                                googletag.pubads().refresh()
                            }
                            ))
                        },
                        setTargeting: function(t, n, r) {
                            var s;
                            (AdTrack.Log.debug("AdServer", "DFP set targeting", AdTrack.Log.INFO),
                            window.googletag = window.googletag || {},
                            googletag.cmd = googletag.cmd || [],
                            "function" == typeof window.googletag.pubads && "function" == typeof window.googletag.pubads().getSlots) && (window.googletag.pubads().getSlots().forEach((function(o) {
                                r.unitId !== o.getAdUnitPath() && r.unitId !== o.getSlotElementId() || (s = !0,
                                AdTrack.Log.debug("AdServer", "DFP targeting slot: " + r.unitId, AdTrack.Log.INFO),
                                o.setTargeting(r.adIdKey, t),
                                e(r.adIdKey, t),
                                i(r, n, (function(t, i) {
                                    o.setTargeting(t, i),
                                    e(t, i)
                                }
                                )))
                            }
                            )),
                            s || AdTrack.Log.debug("AdServer", "DFP slot " + r.unitId + " not available.", AdTrack.Log.WARNING))
                        }
                    }
                }() : "bb" === s && (t[s] = {
                    init: function() {},
                    setTargeting: function(t, e, i) {}
                })))
            },
            setTargeting: function(e, i, n) {
                var r = n.adServer;
                "function" == typeof t[r].setTargeting && t[r].setTargeting(e, i, n)
            },
            init: function() {
                for (var e in t)
                    t.hasOwnProperty(e) && "function" == typeof t[e].init && t[e].init()
            }
        }
    }
}
, function(t, e) {
    var i, n, r, s, o, a, d, c, h, l, u, p, f, g, m, k;
    AdTrack.hb = AdTrack.hb || (i = AdTrack.KeyValTargeting(),
    n = !1,
    r = !1,
    s = {},
    o = [],
    a = 4e3,
    d = !0,
    c = 0,
    h = 0,
    l = {},
    u = function(t, e) {
        Math.floor(1e5 * Math.random());
        var i = !1
          , n = t
          , r = AdTrack.Utils.time()
          , s = e
          , o = null
          , a = {
            call: function() {
                clearTimeout(o),
                i = !0,
                n()
            },
            reschedule: function(t) {
                if (s !== t && !i) {
                    clearTimeout(o);
                    var e = AdTrack.Utils.time() - r;
                    t <= e ? a.call() : (s = t - e,
                    o = setTimeout((function() {
                        a.call()
                    }
                    ), s))
                }
            }
        };
        return o = setTimeout((function() {
            a.call()
        }
        ), s),
        a
    }
    ,
    p = function(t, e) {
        return t[e] || (t[e] = {}),
        t[e]
    }
    ,
    f = function() {
        return c > 0 && h === c
    }
    ,
    g = function(t, e, i) {
        e = e || m(t),
        s[t].length > 0 && (s[t].forEach((function(t) {
            t(e)
        }
        )),
        s[t] = [])
    }
    ,
    m = function(t) {
        if (!l[t])
            return [];
        var e = l[t]
          , i = []
          , n = 0;
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var s = 0
                  , o = [];
                if (e[r].adID)
                    e[r].price && (s = e[r].price,
                    o.push(e[r]));
                else {
                    var a = 0;
                    for (var d in e[r])
                        e[r].hasOwnProperty(d) && e[r][d].adID && e[r][d].price && (a += e[r][d].price,
                        o.push(e[r][d]));
                    s = a
                }
                s > n && (n = s,
                i = o)
            }
        return i
    }
    ,
    k = function() {
        if (!r) {
            for (var t in AdTrack.Log.debug("HB", "Notify adserver", AdTrack.Log.INFO),
            r = !0,
            l)
                if (l.hasOwnProperty(t)) {
                    var e = m(t);
                    e.forEach((function(t) {
                        t.targeting && t.setTargeting && t.price > 0 && (AdTrack.Log.debug("HB", "Set targeting for " + t.adID + ", bid cpm: " + t.price, AdTrack.Log.INFO),
                        i.setTargeting(t.adID, t.price, t.targeting))
                    }
                    )),
                    g(t, e, !1)
                }
            n && i.init(),
            d = !1
        }
    }
    ,
    {
        isRunning: function() {
            return d
        },
        useTimeout: function(t) {
            t !== a && function(t) {
                o.forEach((function(e) {
                    e.reschedule(t)
                }
                ))
            }(a = t)
        },
        addPlacement: function(t, e, n, r, o, a, d) {
            d && (n = null);
            var h = {
                adID: t,
                finished: !1,
                price: 0,
                targeting: r,
                isBranding: !!o,
                setTargeting: !!a,
                dgpmMapping: d
            }
              , u = p(l, e);
            (n ? p(u, n) : u)[t] = h,
            s[e] || (s[e] = []),
            i && r && i.addServer(r),
            c++
        },
        bidResponse: function(t, e, i, n, r, s, o, a) {
            if (l[n] && (!r || l[n][r])) {
                var d = (r ? l[n][r] : l[n])[i];
                d && (t || 0 === t) && (d.finished = !0,
                d.price = parseFloat(t),
                d.currency = e,
                d.dealId = s,
                d.response = o,
                d.options = a || {},
                h++),
                d.dgpmMapping ? g(n, [d], !1) : f() && (AdTrack.Log.debug("HB", "Bids back: [" + h + ", " + c + "]", AdTrack.Log.INFO),
                k())
            }
        },
        useAdServerInitialisation: function(t) {
            n = !0,
            t && t > 0 && setTimeout((function() {
                r || k()
            }
            ), t)
        },
        getHighestBidForAdUnit: function(t, e) {
            if ("function" == typeof e) {
                var i = !1;
                if ("object" == typeof t) {
                    var n = AdTrack.ID.createIdDGPM(t.d, t.g, t.p, t.m);
                    if (!n)
                        return void e([]);
                    t = n.getName(),
                    i = !0
                }
                i || !AdTrack.Config.getHBDomain() ? "function" == typeof e && (l[t] || (l[t] = {},
                s[t] || (s[t] = [])),
                f() || i && l[t][t] && l[t][t].finished ? e(m(t)) : (s[t].push(e),
                o.push(new u((function() {
                    !i || l[t][t] && l[t][t].finished ? g(t, m(t), !0) : AdTrack.call(t, "hbAuctionTimeout")
                }
                ),a)))) : e([])
            }
        },
        getCPM: function(t) {
            var e = m(t)
              , i = 0;
            return e && e.length > 0 && (i = e[0].price),
            i
        }
    })
}
, function(t, e) {
    !function() {
        var t = AdTrack.Config.getPrebidObjectName();
        window[t] = window[t] || {};
        var e, i, n, r, s, o, a, d, c, h, l, u, p, f = window[t];
        f.que = f.que || [],
        AdTrack.Prebid = AdTrack.Prebid || (e = AdTrack.XhrReport.getPrebidReport(AdTrack.Config.getReportingUrl(), AdTrack.Config.getHBDomain()),
        i = null,
        r = function(t, e, i, r) {
            "Prebid" === t && i === AdTrack.Log.ERROR && n(e, r)
        }
        ,
        s = {},
	    _bidsExternal = {},
        o = {},
        a = function(t) {
            var e;
            return t && o[t] && (e = o[t].shift()),
            e || AdTrack.Utils.time()
        }
        ,
        {
            error: n = function(t, e, n) {
                i || (i = AdTrack.Utils.errorReporting(AdTrack.Config.getReportingUrl(), AdTrack.url, !0)),
                i.doError(t, e, n)
            }
            ,
            bidCall: function(t, e) {
                e ? (s[e] = {
                    done: !1,
                    timeouted: !1,
                    adUnit: t
                },
                AdTrack.call(e, "evPbjBidRequestDebug", t, a() - AdTrack.startTime)) : r("Prebid", "Cant log BR, key " + e + " is not registered", AdTrack.Log.ERROR)
            },
            noBid: function(t, e) {
                e && s[e] ? (s[e].done = !0,
                s[e].timeouted || AdTrack.call(e, "evPbjNoBid", t, a() - AdTrack.startTime)) : r("Prebid", "Cant log No Bid, key " + e + " is not registered", AdTrack.Log.ERROR)
            },
            bidDone: function(t, e, i) {
                e && s[e] ? (s[e].done = !0,
                AdTrack.call(e, "evPbjBidDone", t, i)) : r("Prebid", "Cant finish bid, " + e + " is not registered", AdTrack.Log.ERROR)
            },
            registerEvents: function() {
                f.que.push((function() {
                    f.onEvent("bidRequested", l),
                    f.onEvent("bidResponse", c),
                    f.onEvent("auctionEnd", h),
                    f.onEvent("bidWon", d),
                    f.onEvent("auctionInit", u),
                    f.onEvent("bidTimeout", p)
                }
                ))
            },
            evBidRequested: l = function(t) {
                try {
                    var i = t.bidder || t.bidderCode
                      , n = a("evBidRequested");
                    t.bids.forEach((function(t) {
                        var r = t.adUnitCode || t.placementCode;
                        if ("r2b2" === i) {
                            var s = AdTrack.Utils.getDGPMKey(t);
                            AdTrack.call(s, "evPbjBidRequest", r, n - AdTrack.startTime)
                        } else
						    var keyExternal = i+"-"+r+"-"+t.bidId;
		    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY", "bid request: "+keyExternal);
                            if(!_bidsExternal[keyExternal]) {
                                _bidsExternal[keyExternal] = {
                                    done: false,
                                    timeouted: false
                                }
                            }
                            e.prebidBidRequest(r, i, n - AdTrack.startTime)
                    }
                    ))
                } catch (t) {
                    r("Prebid", "Exception while handling bidRequested - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            evBidResponse: c = function(t) {
                try {
                    var i = t.bidder || t.bidderCode
                      , n = t.adUnitCode || t.placementCode
                      , o = a("evBidResponse");
                    if ("r2b2" === i) {
                        var d = AdTrack.Utils.getDGPMKey(t)
                          , c = t.ext && t.ext.start;
                        !function(t, e, i, n, o, a) {
                            e && s[e] ? s[e].timeouted || AdTrack.call(e, "evPbjBid", t, a - AdTrack.startTime, i, n, AdTrack.Utils.time() - o) : r("Prebid", "Cant log Bid, " + e + " is not registered", AdTrack.Log.ERROR)
                        }(n, d, t.cpm, t.currency, c, o)
                    } else {
                        var keyExternal = i+"-"+n+"-"+t.bidId;
		    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY", "bid response: "+keyExternal);
                        if(!_bidsExternal[keyExternal]) {
                            _bidsExternal[keyExternal] = {
                                done: false,
                                timeouted: false
                            }
                        }
                        _bidsExternal[keyExternal].done = true;
                        if(_bidsExternal[keyExternal].timeouted) {
                            return;
                        }
                        var h = null;
                        t.responseTimestamp && t.requestTimestamp && (h = t.responseTimestamp - t.requestTimestamp),
                        e.prebidBid(n, i, o - AdTrack.startTime, t.cpm, t.currency, h)
                    }
                } catch (t) {
                    r("Prebid", "Exception while handling bidResponse - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            evAuctionEnd: h = function() {
		    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY", "auction end");
                try {
                    var t = a("evAuctionEnd");
                    !function(t) {
                        setTimeout(function() {
		    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY", "auction end processing");
                            for (var keyExternal in _bidsExternal) {
                                if (_bidsExternal.hasOwnProperty(keyExternal)) {
                                    if (!_bidsExternal[keyExternal].done) {
		    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY TIMEOUT!!!!!!!", _bidsExternal[keyExternal]);
					    
                                        _bidsExternal[keyExternal].timeouted = true;
                                    }
                                }
                            }
                        }, 100);
                        for (var e in s)
                            s.hasOwnProperty(e) && (s[e].done || (s[e].timeouted = !0,
                            AdTrack.call(e, "evPbjTimeout", s[e].adUnit, t - AdTrack.startTime)))
                    }(t),
                    f.getHighestCpmBids().forEach((function(i) {
                        var n = i.bidder || i.bidderCode
                          , r = i.adUnitCode || i.placementCode;
                        if ("r2b2" === n) {
                            var s = AdTrack.Utils.getDGPMKey(i);
                            AdTrack.call(s, "evPbjWin", r, t - AdTrack.startTime, i.cpm, i.currency)
                        } else
                            e.prebidWin(r, n, t - AdTrack.startTime, i.cpm, i.currency)
                    }
                    ))
                } catch (t) {
                    r("Prebid", "Exception while handling auctionEnd - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            evBidWon: d = function(t) {
                try {
                    var i = t.bidder || t.bidderCode
                      , n = t.adUnitCode || t.placementCode
                      , s = a("evBidWon");
                    if ("r2b2" === i) {
                        var o = AdTrack.Utils.getDGPMKey(t);
                        AdTrack.call(o, "evPbjLoad", n, s - AdTrack.startTime, t.cpm, t.currency)
                    } else
                        e.prebidLoad(n, i, s - AdTrack.startTime, t.cpm, t.currency)
                } catch (t) {
                    r("Prebid", "Exception while handling bidWon - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            evAuctionInit: u = function(t) {
                try {
                    var i = t.bidderRequests;
                    i && i.length > 0 && i.forEach((function(t) {
                        if (t) {
                            var i = t.bidder || t.bidderCode;
                            t.bids.forEach((function(t) {
                                var n = t.adUnitCode || t.placementCode;
                                try {
                                    if (Array.isArray(n))
                                        r("Prebid", "adUnitCode or placementCode in adunit config is array, instead of string", AdTrack.Log.ERROR);
                                    else if ("r2b2" === i) {
                                        var s = AdTrack.Utils.getDGPMKey(t);
                                        AdTrack.call(s, "evPbjInAuction", n)
                                    } else
                                        e.prebidInAuction(n, i)
                                } catch (t) {}
                            }
                            ))
                        }
                    }
                    ))
                } catch (t) {
                    r("Prebid", "Exception while handling auctionInit - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            evBidTimeout: p = function(t) {
                console.log("bidTimeout", arguments);
                try {
                    if (AdTrack.Prebid.timeouts) {
                        var i = a("evBidTimeout");
                        t.forEach((function(t) {
                            var n = t.adUnitCode || t.placementCode
                              , r = t.bidder || t.bidderCode;
                            "r2b2" !== r && e.prebidBidTimeout(n, r, i - AdTrack.startTime)
                        }
                        ))
                    }
                } catch (t) {
                    r("Prebid", "Exception while handling bidTimeout - " + t.message, AdTrack.Log.ERROR)
                }
            }
            ,
            addTime: function(t, e) {
                o[t] || (o[t] = []),
                o[t].push(e)
            },
			getBids: function (external) {
				return external ? _bidsExternal : s;
			}
        }),
        function(t) {
            t.AdTrack.PrebidAdapter && !t.AdTrack.PrebidAdapter.cmdQueue || (t.AdTrack.PrebidAdapter = function(e) {
                var i = e || {}
                  , n = {}
                  , r = {};
                i.execute = function(t, e) {
                    o("Prebid", "Executed ad source, id: " + t, AdTrack.Log.INFO),
                    "function" == typeof r[t] ? r[t](e) : o("Prebid", "Callback not found", AdTrack.Log.WARNING)
                }
                ,
                i.getCallbacks = function() {
                    return r
                }
                ;
                var s = function(t) {
                    return "function" == typeof t
                }
                  , o = function(t, e, i, n) {
                    "Prebid" === t && i === AdTrack.Log.ERROR && AdTrack.Prebid.error(e, n)
                }
                  , a = function(t) {
                    return t.adUnitCode || t.placementCode
                }
                  , d = function(e) {
                    var i = ""
                      , n = function(t) {
                        var e = null;
                        try {
                            if ("string" != typeof t)
                                return o("Prebid", "[" + i + "] Provided selector is not a string", AdTrack.Log.ERROR),
                                null;
                            t = AdTrack.Utils.validateSelector(t),
                            e = document.querySelector(t)
                        } catch (e) {
                            o("Prebid", "[" + i + "] Exception while validating selector (" + t + ") - " + e.message, AdTrack.Log.ERROR)
                        }
                        return e ? t : null
                    };
                    return {
                        url: "//",
                        render: function(r) {
                            i = AdTrack.Utils.getDGPMKey(r);
                            var s = function(t) {
                                try {
                                    var e = a(t);
                                    e || o("Prebid", "[" + i + "] Couldnt find a code of adunit", AdTrack.Log.ERROR);
                                    var r = e ? "#" + e : null
                                      , s = void 0;
                                    s = t.ext.dgpm ? t.ext.dgpm.element : t.params[0] ? t.params[0].element : t.params.element
                                } catch (t) {
                                    o("Prebid", "[" + i + "] Exception getting element selector - " + t.message, AdTrack.Log.ERROR)
                                }
                                var d = null;
                                return !(d = void 0 !== s && n(s) || n(r)) && r && (d = n("#google_ads_iframe_" + e + "_0__container__")),
                                d
                            }(r);
                            s || o("Prebid", "[" + i + "] Selector for ad not found (" + s + ")", AdTrack.Log.ERROR);
                            try {
                                t.AdTrack.units[e].displayAd(s, a(r) || "")
                            } catch (t) {
                                o("Prebid", "[" + i + "] Exception while rendering ad: " + t.message, AdTrack.Log.ERROR)
                            }
                        }
                    }
                };
                if (i.callBids = function(e, i, c, h, l, u) {
                console.log("callBids", arguments);
                    AdTrack.Prebid.timeouts = "function" == typeof l;
                    var p = AdTrack.Utils.time()
                      , g = p;
                    n.callBids && n.callBids > p && o("Prebid", "Time of callBids in adapter proxy is higher than now time", AdTrack.Log.ERROR, {
                        proxyTime: n.callBids,
                        now: p
                    });
                    try {
                        !(s(i) && s(c)) && (i = s(f.addBidResponse) ? f.addBidResponse : function() {
                            o("Prebid", "Unable to notify prebid - function not found", AdTrack.Log.ERROR)
                        }
                        ,
                        c = function() {}
                        );
                        var m = e.bids.length
                          , k = 0;
                        e.bids.forEach((function(e) {
                            var n = AdTrack.Utils.getDGPMKey(e)
                              , s = a(e);
                            s || o("Prebid", "Unable to notify prebid - unit code not found", AdTrack.Log.ERROR),
                            AdTrack.Prebid.bidCall(s, n),
                            AdTrack.hb.getHighestBidForAdUnit(e.params, (function(a) {
                                try {
                                    if (AdTrack.Prebid.bidDone(s, n, AdTrack.Utils.time() - g),
                                    "function" == typeof l && l("r2b2"),
                                    a && a.length > 0) {
                                        var h = a[0];
                                        if (!h.adID)
                                            return void o("Prebid", "[" + n + "] Missing adID", AdTrack.Log.ERROR);
                                        if (h.price) {
                                            var u, p, v, b;
                                            if (v = b = 0,
                                            h.options && h.response) {
                                                if (h.options.sendDimension) {
                                                    var y = h.response.getDimension();
                                                    b = y.width,
                                                    v = y.height
                                                }
                                                h.options.video && (u = h.response.getVideoVastXML(),
                                                p = h.response.getVideoImpUrl())
                                            }
                                            var A = "r2b2-prebid-" + e.bidId;
                                            r[A] = function(e) {
                                                try {
                                                    if (e !== t)
                                                        o("Prebid", "[" + n + "] Ad source executed in different window.", AdTrack.Log.ERROR);
                                                    else {
                                                        var i = t.document
                                                          , r = i.querySelector("script#" + A)
                                                          , a = i.createElement("div");
                                                        a.setAttribute("id", A + "-ad"),
                                                        r.parentNode.insertBefore(a, r),
                                                        AdTrack.call(n, "displayAd", "#" + A + "-ad", s)
                                                    }
                                                } catch (t) {
                                                    o("Prebid", "[" + n + "] Ad source execution failed: " + t.message, AdTrack.Log.ERROR)
                                                }
                                            }
                                            ;
                                            var T = {
                                                bidder: "r2b2",
                                                bidderCode: "r2b2",
                                                adId: e.bidId,
                                                requestId: e.bidId,
                                                transactionId: e.transactionId,
                                                width: h.isBranding ? 2e3 : b,
                                                height: h.isBranding ? 1400 : v,
                                                mediaType: "banner",
                                                ttl: 360,
                                                currency: h.currency,
                                                cpm: h.price,
                                                dealId: h.dealId,
                                                renderer: d(h.adID),
                                                source: "client",
                                                params: e.params,
                                                ext: {
                                                    dgpm: e.params,
                                                    start: g
                                                },
                                                ad: "<script id='" + A + "'>(function(){ try { var a = (window.AdTrack && window.AdTrack.PrebidAdapter) || (window.top.AdTrack && window.top.AdTrack.PrebidAdapter); a.execute('" + A + "', window); } catch (e) {console.error('R2B2 error.', e)} })();<\/script>"
                                            };
                                            u && p && (T.vastXml = u,
                                            T.vastImpUrl = p,
                                            T.mediaType = "video",
                                            T.renderer = null),
                                            f.que.push((function() {
                                                try {
                                                    var t = function(t, e) {
                                                        try {
                                                            return Object.assign(t, e)
                                                        } catch (n) {
                                                            for (var i in e)
                                                                e.hasOwnProperty(i) && (t[i] = e[i]);
                                                            return t
                                                        }
                                                    }(f.createBid(1), T);
                                                    i(s, t)
                                                } catch (t) {
                                                    o("Prebid", "Exception while adding response to prebid - " + t.message, AdTrack.Log.ERROR)
                                                }
                                            }
                                            ))
                                        } else
                                            AdTrack.Prebid.noBid(s, n)
                                    } else
                                        AdTrack.Prebid.noBid(s, n);
                                    ++k >= m && f.que.push((function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            o("Prebid", "Exception while completing bids - " + t.message, AdTrack.Log.ERROR)
                                        }
                                    }
                                    )),
                                    AdTrack.call(n, "evProfiling", "[r2b2Adapter] - end of callback")
                                } catch (t) {
                                    o("Prebid", "Exception while handling HB response - " + t.message, AdTrack.Log.ERROR)
                                }
                            }
                            ))
                        }
                        ))
                    } catch (t) {
                        o("Prebid", "Exception while calling bids - " + t.message, AdTrack.Log.ERROR)
                    }
                }
                ,
                i.getSpec = function() {
                    return {
                        supportedMediaTypes: ["banner", "video", "native"],
                        onTimeout: function(t) {
                            t && t.forEach((function(t) {
                                if (t.params) {
                                    var e = a(t);
                                    t.params.forEach((function(t) {
                                        var i = AdTrack.Utils.getDGPMKey({
                                            params: t
                                        });
                                        AdTrack.call(i, "evPbjTimeoutDebug", e, AdTrack.Utils.time() - AdTrack.startTime)
                                    }
                                    ))
                                }
                            }
                            ))
                        }
                    }
                }
                ,
                i.evBidRequested = function(t) {
                    AdTrack.Prebid.evBidRequested(t)
                }
                ,
                i.evBidResponse = function(t) {
                    AdTrack.Prebid.evBidResponse(t)
                }
                ,
                i.evAuctionEnd = function() {
                    AdTrack.Prebid.evAuctionEnd()
                }
                ,
                i.evBidWon = function(t) {
                    AdTrack.Prebid.evBidWon(t)
                }
                ,
                i.evAuctionInit = function(t) {
                    AdTrack.Prebid.evAuctionInit(t)
                }
                ,
                i.evBidTimeout = function(t) {
                    AdTrack.Prebid.evBidTimeout(t)
                }
                ,
                i.cmdQueue) {
                    "function" != typeof i.event && AdTrack.Prebid.registerEvents();
                    var c = i.cmdQueue;
                    c.length > 0 && c.forEach((function(t) {
                        "function" == typeof i[t.method] && (n[t.method] = t.time,
                        AdTrack.Prebid.addTime(t.method, t.time),
                        i[t.method].apply(i, t.args))
                    }
                    )),
                    i.cmdQueue = null
                } else
                    f.que.push((function() {
                        f.registerBidAdapter((function() {
                            return i
                        }
                        ), "r2b2")
                    }
                    )),
                    AdTrack.Prebid.registerEvents();
                return i
            }(t.AdTrack.PrebidAdapter))
        }(window)
    }()
}
, function(t, e) {
    AdTrack.MediaTypes = AdTrack.MediaTypes || {
        createVideoSettings: function(t, e, i, n) {
            return {
                chd: e,
                ad: {
                    type: n,
                    data: i
                },
                options: {
                    skipTime: t.definition.options.player.skipTime ? t.definition.options.player.skipTime : 0,
                    skipCaption: t.definition.options.player.skipCaption ? t.definition.options.player.skipCaption : "Přeskočit reklamu"
                },
                server: t.server
            }
        }
    },
    AdTrack.MediaTypes.Base = function(t, e) {
        this.id = "adtrack-ad-" + Math.floor(1e4 * Math.random()),
        this.data = t || {},
        this.preloaded = t.preload,
        this.debug = !!t.debug,
        this.externalRender = t.externalRender,
        this.passedResponse = null,
        this.errorReporting = e,
        this.errorStatus = !1,
        this.rendered = !1,
        this.passbackReason = "",
        this.events = AdTrack.Events.create(["load", "adLoad", "error", "close", "click", "end", "beforeRender"]),
        this.events.markEventAsTriggerOnce("load"),
        this.events.markEventAsTriggerOnce("adLoad"),
        this.events.markEventAsTriggerOnce("error"),
        this.events.markEventAsTriggerOnce("close"),
        this.events.markEventAsTriggerOnce("end")
    }
    ,
    AdTrack.MediaTypes.Base.prototype = {
        on: function(t, e) {
            this.events.addCallback(t, e)
        },
        trigger: function(t, e) {
            this.events.trigger(t, e)
        },
        isPreloaded: function() {
            return this.preloaded
        },
        isDebug: function() {
            return this.debug
        },
        isRenderedExternally: function() {
            return this.externalRender
        },
        getStyle: function() {
            return this.data.style
        },
        getCount: function() {
            return this.data.count
        },
        getPassedResponse: function() {
            return this.passedResponse
        },
        passResponse: function(t) {
            this.passedResponse = t
        },
        getPassbackReason: function() {
            if (this.isPreloaded() && this.passbackReason)
                return this.passbackReason
        },
        setPassbackReason: function(t) {
            this.isPreloaded() && t && "string" == typeof t && (this.passbackReason = t)
        },
        adLoaded: function() {
            this.isPreloaded() && (this.data.preload.delayLoad ? this.trigger("adLoad") : this.loaded())
        },
        render: function(t) {
            if ("function" == typeof this.handleRender) {
                if (this.validate(),
                !this.errorStatus && !this.rendered) {
                    if (this.trigger("beforeRender", [t]),
                    this.rendered = !0,
                    this.data.wrapAd) {
                        var e = document.createElement("div");
                        t.appendChild(e),
                        t = e
                    }
                    this.handleRender(t),
                    this.loaded()
                }
            } else
                this.error("No handler for render")
        },
        preload: function(t) {
            if ("function" == typeof this.handlePreload) {
                if (this.validate(),
                !this.errorStatus && !this.rendered) {
                    if (this.trigger("beforeRender", [t]),
                    this.rendered = !0,
                    this.data.wrapAd) {
                        var e = document.createElement("div");
                        t.appendChild(e),
                        t = e
                    }
                    this.handlePreload(t)
                }
            } else
                this.error("No handler for preload")
        },
        validate: function() {
            "function" == typeof this.handleData && (this.data = this.handleData(this.data))
        },
        loaded: function() {
            if (!this.errorStatus) {
                if (this.data.impTrackers && this.data.impTrackers.length > 0 && this.data.impTrackers.forEach((function(t) {
                    try {
                        (new Image).src = t
                    } catch (t) {
                        this.error("Unable to call impTracker: " + t.message)
                    }
                }
                )),
                this.data.jsTrackers && this.element)
                    try {
                        this.element.id || (this.element.id = this.id);
                        var t = function(t) {
                            "string" == typeof t && AdTrack.Utils.useJsTracker(t, this.element)
                        }
                        .bind(this);
                        "string" == typeof this.data.jsTrackers ? t(this.data.jsTrackers) : "[object Array]" === Object.prototype.toString.call(this.data.jsTrackers) && this.data.jsTrackers.forEach(t)
                    } catch (t) {
                        this.error("Unable to call jsTrackers: " + t.message)
                    }
                this.trigger("load")
            }
        },
        clicked: function() {
            this.data.clickTrackers && this.data.clickTrackers.length > 0 && this.data.clickTrackers.forEach((function(t) {
                try {
                    (new Image).src = t
                } catch (t) {
                    this.error("Unable to call clickTracker: " + t.message)
                }
            }
            )),
            this.trigger("click")
        },
        error: function(t) {
            this.errorStatus = !0,
            t && this.errorReporting.doError(t),
            this.trigger("error")
        },
        close: function() {
            this.trigger("close")
        },
        destroy: function() {}
    }
}
, function(t, e) {
    var i;
    AdTrack.MediaTypes.Banner = function(t, e) {
        AdTrack.MediaTypes.Base.call(this, t, e),
        this.element = null
    }
    ,
    AdTrack.MediaTypes.Banner.prototype = Object.create(AdTrack.MediaTypes.Base.prototype),
    AdTrack.MediaTypes.Banner.prototype.constructor = AdTrack.MediaTypes.Banner,
    (i = AdTrack.MediaTypes.Banner.prototype).getElement = function() {
        return this.element
    }
    ,
    i.updateSize = function(t, e) {
        this.data.width = t,
        this.data.height = e,
        this.element.style.width = t + "px",
        this.element.style.height = e + "px",
        (this.element.width || this.element.height) && (this.element.width = t,
        this.element.height = e)
    }
    ,
    i.handleData = function(t) {
        return t.width && t.height || this.error("Banner: Undefined width or height"),
        t.ad ? (t.ad.type || this.error("Banner: Undefined type"),
        t.ad.data || this.error("Banner: Undefined data")) : this.error("Banner: Undefined ad source"),
        t.count = t.count || 1,
        t.style = t.style || null,
        t
    }
    ,
    i.handleRender = function(t) {
        var e, i = function() {
            this.clicked()
        }
        .bind(this);
        return this.data.externalRender ? "content" === this.data.ad.type ? e = AdTrack.iframeCreator.factory.createIframeWithContent(t, 0, 0, window.location.href, this.data.ad.data, null) : "function" === this.data.ad.type && "function" == typeof this.data.ad.data && (e = document.createElement("div"),
        t.appendChild(e),
        e.style.width = "0px",
        e.style.height = "0px",
        this.data.ad.data(e)) : "content" === this.data.ad.type ? e = AdTrack.iframeCreator.factory.createIframeWithContent(t, this.data.width, this.data.height, window.location.href, this.data.ad.data, i, this.data.fluid) : "iframe" === this.data.ad.type ? e = AdTrack.iframeCreator.factory.createIframeFromHTML(t, this.data.ad.data, i) : "function" === this.data.ad.type && "function" == typeof this.data.ad.data ? (e = document.createElement("div"),
        t.appendChild(e),
        e.style.width = this.data.fluid ? "100%" : this.data.width + "px",
        e.style.height = this.data.fluid ? "auto" : this.data.height + "px",
        this.data.ad.data(e)) : this.error("Banner: ad type '" + this.data.ad.type + "' not supported."),
        null === e && this.error("Banner: Error while creating iframe"),
        this.element = e,
        e
    }
    ,
    i.handlePreload = function(t) {
        var e = null
          , i = null
          , n = function() {
            e && clearTimeout(e),
            i && clearInterval(i)
        };
        this.on("load", (function() {
            n()
        }
        )),
        this.on("adLoad", (function() {
            n()
        }
        )),
        this.on("error", (function() {
            n()
        }
        )),
        e = setTimeout(function() {
            n(),
            this.isDebug() || (t.innerHTML = ""),
            this.error()
        }
        .bind(this), this.data.preload.timeout || 5e3);
        var r = this.handleRender(t);
        this.on("error", function() {
            r && !this.isDebug() && r.parentNode.removeChild(r)
        }
        .bind(this)),
        this.data.preload.checkForContent && (i = setInterval(function() {
            r && function(t) {
                try {
                    var e = t.contentDocument ? t.contentDocument : t.contentWindow.document;
                    if (e.getElementsByTagName("object").length > 0)
                        return !0;
                    var i = e.getElementsByTagName("img");
                    if (i.length > 0)
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n];
                            if (r.clientWidth > 1 || r.clientHeight > 1 || r.getAttribute("width") > 1 || r.getAttribute("height") > 1)
                                return !0
                        }
                    return e.getElementsByTagName("a").length > 0 || !!e.getElementsByTagName("iframe")[0]
                } catch (t) {
                    return !0
                }
            }(r) && this.loaded()
        }
        .bind(this), this.data.preload.checkInterval || 200))
    }
}
, function(t, e) {
    var i;
    AdTrack.MediaTypes.Video = function(t, e) {
        AdTrack.MediaTypes.Base.call(this, t, e),
        this.player = null,
        this.element = null
    }
    ,
    AdTrack.MediaTypes.Video.prototype = Object.create(AdTrack.MediaTypes.Base.prototype),
    AdTrack.MediaTypes.Video.prototype.constructor = AdTrack.MediaTypes.Video,
    (i = AdTrack.MediaTypes.Video.prototype).handleData = function(t) {
        return t.ad ? (t.ad.type || this.error("Video: Undefined type"),
        t.ad.data || this.error("Video: Undefined data")) : this.error("Video: Undefined ad source"),
        t.count = t.count || 1,
        t.style = t.style || null,
        t
    }
    ,
    i.getElement = function() {
        return this.element
    }
    ,
    i.handleRender = function(t) {
        if (this.data.externalRender)
            this.element = AdTrack.iframeCreator.factory.createIframeWithContent(t, this.data.width || 0, this.data.height || 0, window.location.href, this.data.ad.data, null),
            null === this.element && this.error("Video: Error while creating iframe");
        else {
            var e = !1
              , i = new AdTrack.Player(t,this.data.ad.data,this.data.ad.type,this.data.options,this.data.server);
            i.on("end", function() {
                this.events.trigger("end")
            }
            .bind(this)),
            i.on("start", function() {
                e = !0,
                this.events.trigger("load")
            }
            .bind(this)),
            i.on("skip", function() {
                this.close()
            }
            .bind(this)),
            i.on("error", function() {
                if (e)
                    this.destroy();
                else {
                    var t = i.getFrame();
                    t.parentNode.removeChild(t)
                }
                this.error()
            }
            .bind(this)),
            i.play(),
            this.player = i,
            this.element = i.getFrame()
        }
    }
    ,
    i.handlePreload = function(t) {
        this.handleRender(t),
        this.data.preload.func && "function" == typeof this.data.preload.func && this.data.preload.func()
    }
    ,
    i.destroy = function() {
        this.player.dispose()
    }
}
, function(t, e) {
    var i;
    AdTrack.MediaTypes.Native = function(t, e) {
        AdTrack.MediaTypes.Base.call(this, t, e),
        this.player = null,
        this.element = null
    }
    ,
    AdTrack.MediaTypes.Native.prototype = Object.create(AdTrack.MediaTypes.Base.prototype),
    AdTrack.MediaTypes.Native.prototype.constructor = AdTrack.MediaTypes.Native,
    (i = AdTrack.MediaTypes.Native.prototype).handleData = function(t) {
        return t.ad ? (t.ad.type || this.error("Native: Undefined type"),
        t.ad.data || this.error("Native: Undefined data")) : this.error("Native: Undefined ad source"),
        t.count || this.error("Native: Missing count"),
        t.style || this.error("Native: Missing style"),
        t
    }
    ,
    i.getElement = function() {
        return this.element
    }
    ,
    i.handleRender = function(t) {
        this.element = t,
        "tcproxy" === this.data.ad.type ? this.data.ad.data.tc.renderAds(t, this.data.ad.data.adSet) : this.error("Native: ad type '" + this.data.ad.type + "' not supported.")
    }
    ,
    i.handlePreload = function(t) {
        this.handleRender(t)
    }
}
, function(t, e) {
    var i, n, r, s, o, a, d, c, h, l;
    AdTrack.Ext = AdTrack.Ext || (i = [],
    n = !1,
    r = [],
    s = {},
    o = "true" === AdTrack.Utils.getParameterByName("adtrack-debug") || AdTrack.Utils.getLocalStorageItem("adtrack-debug"),
    a = function(t) {
        n ? r.forEach((function(e) {
            e.postMessage(t)
        }
        )) : i.push(t)
    }
    ,
    d = null,
    c = function() {
        (d = new MessageChannel).port1.onmessage = function(t) {
            if ("adtrack" === t.data) {
                var e = t.ports[0];
                n = !0,
                r.push(e),
                i.forEach((function(t) {
                    e.postMessage(t)
                }
                ))
            } else
                n && function(t) {
                    var e = t.data.command
                      , i = t.data.data;
                    if ("highlight" === e)
                        AdTrack.call(i.placement, e, i.hide);
                    else if ("bid:getBidResponse" === e) {
                        var n = AdTrack.units[i.placement];
                        if (n) {
                            var r = null
                              , s = null;
                            try {
                                var o = n.processedChannels[i.tierIndex][i.channelIndex];
                                r = o.response || o.response1 || null,
                                s = o.bidResponse || null
                            } catch (t) {}
                            a({
                                command: "bid:bidResponse",
                                data: {
                                    bidResponseAdTrack: JSON.stringify(s, null, 2),
                                    bidResponseSSP: JSON.stringify(r, null, 2),
                                    placement: i.placement,
                                    tierIndex: i.tierIndex,
                                    channelIndex: i.channelIndex,
                                    tag: o.chd.tag,
                                    flag: o.chd.flag
                                }
                            })
                        }
                    }
                }(t)
        }
        ,
        window.top.postMessage("adtrack", "*", [d.port2])
    }
    ,
    h = 0,
    l = setInterval((function() {
        if (n || h >= 3)
            clearInterval(l);
        else
            try {
                h++,
                c()
            } catch (t) {}
    }
    ), 1e3),
    s.sendResponse = function(t, e, i, n, r) {
        t && e && n && a({
            command: "response",
            data: {
                placement: "" + t,
                channel: i ? e + "#" + i : e,
                response: n,
                style: r
            }
        })
    }
    ,
    o && "function" == typeof AdTrack.Log.extensionDump && setInterval((function() {
        a({
            command: "adtrack-debug-dump",
            data: AdTrack.Log.extensionDump()
        })
    }
    ), 1e3),
    s)
}
, function(t, e) {
    AdTrack.Animator = function(t, e) {
        this.phase = t.phase || 0,
        this.duration = t.duration || 1,
        this.fps = t.fps || 20,
        this.timer = null,
        this.callback = e
    }
    ,
    AdTrack.Animator.prototype = {
        forward: function() {
            this.vector = 1,
            this.timer && clearTimeout(this.timer),
            this.timer = null,
            this.phase < 1 && this.animate()
        },
        backward: function() {
            this.vector = -1,
            this.timer && clearTimeout(this.timer),
            this.timer = null,
            this.phase > 0 && this.animate()
        },
        animate: function() {
            Math.sin(this.phase * Math.PI / 2);
            this.phase += this.vector / (this.fps * this.duration),
            this.phase >= 1 ? this.phase = 1 : this.phase <= 0 ? this.phase = 0 : this.timer = setTimeout(this.animate.bind(this), 1e3 / this.fps),
            this.callback(this.phase)
        }
    }
}
, function(t, e) {
    !function() {
        var t = window;
        try {
            window.top.AdTrack = window.top.AdTrack || {},
            t = window.top
        } catch (t) {}
        var e = function() {
            var t = null
              , e = !1
              , i = null
              , n = null
              , r = null
              , s = !1
              , o = !1
              , a = []
              , d = !1
              , c = ""
              , h = null
              , l = null
              , u = !1
              , p = AdTrack.XhrReport.getGenericReport(AdTrack.Config.getReportingUrl())
              , f = function() {
                for (var t = 0; t < a.length; t++)
                    try {
                        a[t]()
                    } catch (t) {}
            }
              , g = function(t) {
                var e, i, r = {};
                try {
                    i = window.__tcfapi || window.top.__tcfapi
                } catch (t) {}
                try {
                    e = window.__cmp || window.top.__cmp
                } catch (t) {}
                if ("function" == typeof i) {
                    d = !0;
                    var s = function(e, i) {
                        i && e.tcString && ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus) && t(e)
                    };
                    i("getTCData", n = 2, s),
                    u || (i("addEventListener", n, s),
                    u = !0)
                } else if ("function" == typeof e)
                    d = !0,
                    n = 1,
                    e("getConsentData", null, t);
                else {
                    for (var o = window, a = null; !a; ) {
                        try {
                            o.frames.__tcfapiLocator && (a = o,
                            n = 2)
                        } catch (t) {}
                        try {
                            o.frames.__cmpLocator && (a = o,
                            n = 1)
                        } catch (t) {}
                        if (o === window.top)
                            break;
                        o = o.parent
                    }
                    if (!a)
                        return T("CMP not found.");
                    1 === n ? function(t, e, i) {
                        function n(t) {
                            var e, i, n, s = "string" == typeof t.data && (e = t.data,
                            i = "cmpReturn",
                            n = new RegExp(".*" + i + ".*"),
                            "string" == typeof e && "string" == typeof i && n.test(e)) ? JSON.parse(t.data) : t.data;
                            if (s.__cmpReturn && s.__cmpReturn.callId) {
                                var o = s.__cmpReturn;
                                void 0 !== r[o.callId] && (r[o.callId](o.returnValue, o.success),
                                delete r[o.callId])
                            }
                        }
                        window.__cmp = function(t, i, n) {
                            var s = Math.random() + ""
                              , o = {
                                __cmpCall: {
                                    command: t,
                                    parameter: i,
                                    callId: s
                                }
                            };
                            r[s] = n,
                            e.postMessage(o, "*")
                        }
                        ,
                        window.addEventListener("message", n, !1),
                        window.__cmp(t, null, (function(t) {
                            window.removeEventListener("message", n, !1),
                            i(t)
                        }
                        ))
                    }("getConsentData", a, t) : function(t, e, i, n) {
                        function s(t) {
                            let e = {};
                            try {
                                e = "string" == typeof t.data ? JSON.parse(t.data) : t.data
                            } catch (t) {}
                            const i = e.__tcfapiReturn;
                            i && "function" == typeof r[i.callId] && (r[i.callId](i.returnValue, i.success),
                            delete r[i.callId])
                        }
                        window.__tcfapi = function(t, e, n, s) {
                            var o = Math.random() + ""
                              , a = {
                                __tcfapiCall: {
                                    command: t,
                                    parameter: s,
                                    version: e,
                                    callId: o
                                }
                            };
                            r[o] = n,
                            i.postMessage(a, "*")
                        }
                        ,
                        window.addEventListener("message", s, !1),
                        window.__tcfapi(t, e, (function(t) {
                            window.removeEventListener("message", s, !1),
                            n(t)
                        }
                        ))
                    }("getTCData", n, a, t)
                }
            }
              , m = function() {
                ("done" !== i || "done" === i && o) && (i = "done",
                clearInterval(h),
                clearTimeout(l),
                t && p.cmpSuccess(c, s, r))
            }
              , k = function(t, i, n) {
                b(t) ? (A(t),
                (e = y()) && (r = 1,
                c = n,
                m(),
                i())) : T("Invalid CMP format")
            }
              , v = function(i, n, s) {
                b(i) ? (A(i),
                (e = y()) && ("iab" === s && AdTrack.Utils.setLocalStorageItem("AT-euconsent-v2", JSON.stringify(t)),
                r = 2,
                c = s,
                m(),
                n())) : T("Invalid CMP format")
            }
              , b = function(t) {
                return !(!t || "object" != typeof t)
            }
              , y = function() {
                if (!t)
                    return !1;
                var e = t.consentString;
                return e && "string" == typeof e && e.length && e.length > 0
            }
              , A = function(e) {
                t = {
                    tcfPolicyVersion: e.tcfPolicyVersion || n,
                    consentString: e.tcString || e.consentData || e.consentString,
                    gdprApplies: e.gdprApplies,
                    purpose: e.purpose || {},
                    vendor: e.vendor || {}
                }
            }
              , T = function(t) {}
              , w = {
                getConsentData: function(i, n) {
                    return "always" === i || "never" !== i && !e && n ? {
                        consentString: "BOY6XgCOY6XgCAfBelCSB9-AAAAjDAAA",
                        gdprApplies: 1
                    } : t
                },
                waitForConsent: function(t) {
                    "function" == typeof t && ("done" === i || s ? t() : a.push(AdTrack.Utils.singleUseCallback(t)))
                },
                fn: function() {}
            };
            return function(t) {
                if (y())
                    t();
                else {
                    var e = function(r) {
                        1 === n ? k(r, t, "iab") : v(r, t, "iab"),
                        "done" !== i && setTimeout((function() {
                            g(e)
                        }
                        ), 100)
                    }
                      , r = function() {
                        d || g(e)
                    }
                      , a = AdTrack.Utils.getLocalStorageItem("AT-euconsent-v2")
                      , c = AdTrack.Utils.getLocalStorageItem("euconsent-v2")
                      , u = AdTrack.Utils.readCookie("eupubconsent-v2")
                      , p = null;
                    try {
                        p = JSON.parse(a)
                    } catch (t) {}
                    if (a && p ? v(p, t, "cookie") : (c || u) && v({
                        gdprApplies: !0,
                        tcString: u || c
                    }, t, "cookie"),
                    "done" === i && setTimeout(r, 5e3),
                    !h && "done" !== i) {
                        h = setInterval(r, 100),
                        l = setTimeout((function() {
                            m(),
                            o = !0
                        }
                        ), 1e4);
                        var b = setTimeout((function() {
                            "done" !== i && (s = !0,
                            f()),
                            clearTimeout(b)
                        }
                        ), 1e3)
                    }
                }
            }(f),
            w
        };
        if (t.AdTrack.CMP && "function" == typeof t.AdTrack.CMP.fn)
            try {
                t.AdTrack.CMP.fn()
            } catch (i) {
                t.AdTrack.CMP = e()
            }
        else
            t.AdTrack.CMP = e();
        window.AdTrack.CMP = t.AdTrack.CMP
    }()
}
, function(t, e) {
    AdTrack.Player = function(t, e, i, n, r) {
        this.fp = null,
        this.iframe = null,
        this.container = t,
        this.onload = [],
        this.playing = !1,
        this.init(t, e, i, n, r)
    }
    ,
    AdTrack.Player.prototype = {
        getContainer: function() {
            return this.container
        },
        ready: function(t) {
            this.fp ? t() : this.onload.push(t)
        },
        play: function() {
            this.playing || this.ready(function() {
                this.playing = !0,
                this.fp.play()
            }
            .bind(this))
        },
        dispose: function() {
            this.ready(function() {
                this.fp.dispose()
            }
            .bind(this))
        },
        getFrame: function() {
            return this.iframe
        },
        init: function(t, e, i, n, r) {
            var s = '<html><head></head><body><script src="//' + r + '/lib/js/player/fp.packed.js"><\/script><script>init("' + i + '",' + JSON.stringify(e) + "," + JSON.stringify(n) + ',"' + r + '");<\/script></body></html>';
            try {
                var o = {
                    onBeforeAppend: function(t) {
                        var e = t.element;
                        e.setAttribute("style", "border:0; margin:auto; width:100%; height:0; display: block;"),
                        e.setAttribute("frameborder", "0"),
                        e.setAttribute("marginheight", "0"),
                        e.setAttribute("marginwidth", "0"),
                        e.setAttribute("scrolling", "no")
                    }
                    .bind(this)
                }
                  , a = AdTrack.iframeCreator(t, s, o, window.location.href, !0);
                this.iframe = a.element,
                this.iframe.contentWindow.addEventListener("load", function() {
                    this.fp = this.iframe.contentWindow.AdTrack.FP,
                    this.fp.on("ready", function() {
                        this.loaded()
                    }
                    .bind(this))
                }
                .bind(this), !1)
            } catch (t) {}
        },
        loaded: function() {
            this.onload.forEach((function(t) {
                "function" == typeof t && t()
            }
            ))
        },
        on: function(t, e) {
            this.ready(function() {
                this.fp.on(t, e)
            }
            .bind(this))
        }
    }
}
, function(t, e) {
    AdTrack.BrandingRenderer = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.transforms = i,
        this.events = n,
        this.container = null,
        this.brandingMinWidth = 1200,
        this.brandingMaxScroll = 160
    }
    ,
    AdTrack.BrandingRenderer.prototype = {
        render: function(t, e) {
            if (this.animator = null,
            this.container = this.track.container,
            this.channel = t,
            "rubicon-banner-hb" !== this.channel.chd.tag) {
                this.container.style.width = "1px",
                this.container.style.height = "1px",
                this.container.style.overflow = "hidden";
                this.track.document.documentElement.scrollWidth,
                AdTrack.Utils.getViewportRealWidth(this.track.window)
            }
            this.channel.render(this.container, e)
        },
        loaded: function(t) {
            AdTrack.DOM.resetBranding = function() {
                this.track.resetAd()
            }
            .bind(this);
            var e = this.definition.options.noStacking
              , i = 0;
            if (this.definition.options.mainZIndex && (i = this.definition.options.mainZIndex),
            t.data.width) {
                this.transforms.styleElement(this.container, "width", t.data.width + "px"),
                this.transforms.styleElement(this.container, "height", "auto"),
                this.transforms.styleElement(this.container, "overflow", "visible"),
                this.transforms.styleElement(this.container, "top", (this.definition.options.brandingTop ? this.definition.options.brandingTop : 0) + "px"),
                this.transforms.styleElement(this.container, "position", "fixed"),
                e || this.transforms.styleElement(this.container, "z-index", i - 1),
                this.transforms.styleElement(this.container, "left", "50%"),
                this.transforms.styleElement(this.container, "margin-left", "-" + Math.round(t.data.width / 2) + "px"),
                this.transforms.styleElement(this.container, "display", "none"),
                this.transforms.styleElement(this.container, "pointer-events", "auto", "important");
                try {
                    if (this.definition.options.main) {
                        var n = this.track.document.querySelector(this.definition.options.main);
                        if (n) {
                            if (e || (this.transforms.styleElement(n, "position", "relative"),
                            this.transforms.styleElement(n, "z-index", i)),
                            this.definition.options.setZIndex) {
                                var r = this.definition.options.setZIndex;
                                for (var s in r)
                                    if (r.hasOwnProperty(s)) {
                                        var o = isNaN(s) ? s : r[s]
                                          , a = isNaN(s) ? r[s] : i;
                                        if (o) {
                                            var d = this.track.document.querySelector(o);
                                            d && (this.transforms.styleElement(d, "z-index", a, "important"),
                                            "static" == this.getStyleProperty(d, "position") && this.positioningNotSet(d) && this.transforms.styleElement(d, "position", "relative"))
                                        }
                                    }
                            }
                            this.definition.options.mainMarginTop && this.transforms.styleElement(n, "margin-top", this.definition.options.mainMarginTop + "px"),
                            this.definition.options.mainForceWidth && (this.transforms.styleElement(n, "max-width", this.definition.options.mainForceWidth + "px"),
                            this.transforms.styleElement(n, "margin-left", "auto"),
                            this.transforms.styleElement(n, "margin-right", "auto")),
                            this.transforms.styleElement(this.container, "display", "block")
                        } else
                            this.track.doError("Unknown main branding selector " + this.definition.options.main)
                    }
                } catch (t) {
                    this.track.doError("Branding error (" + t + ")")
                }
            } else
                this.track.doError("Undefined width")
        },
        isReadyToShow: function(t) {
            return !0
        },
        measureImpress: function(t, e) {
            var i = this.track.window
              , n = i.document
              , r = function() {
                var s = void 0 !== i.pageXOffset
                  , o = "CSS1Compat" === (n.compatMode || "")
                  , a = s ? i.pageYOffset : o ? n.documentElement.scrollTop : n.body.scrollTop;
                if (n.documentElement.clientWidth >= this.brandingMinWidth || a <= this.brandingMaxScroll)
                    try {
                        var d = t.getBoundingClientRect();
                        if ("width"in d && !d.width)
                            p = null;
                        else
                            var c = d.right - d.left
                              , h = d.bottom - d.top
                              , l = AdTrack.Utils.getViewportRealWidth(i)
                              , u = AdTrack.Utils.getViewportRealHeight(i)
                              , p = Math.max(0, Math.min(d.right, l) - Math.max(d.left, 0)) * Math.max(0, Math.min(d.bottom, u) - Math.max(d.top, 0)) / (c * h);
                        AdTrack.Utils.removeEvent(i, "resize", r),
                        AdTrack.Utils.removeEvent(i, "scroll", r),
                        e(t, p)
                    } catch (t) {}
            }
            .bind(this);
            AdTrack.Utils.addEvent(i, "resize", r),
            AdTrack.Utils.addEvent(i, "scroll", r),
            r()
        },
        getContainer: function() {
            return this.container
        },
        createContainer: function(t) {
            return this.container || (this.container = t),
            this.container
        },
        destroy: function() {},
        show: function() {
            this.track.container.style.display = "block"
        },
        hide: function() {
            this.track.container.style.display = "none"
        },
        open: function() {},
        close: function() {},
        getStyleProperty: function(t, e) {
            return this.track.window.getComputedStyle ? (e = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
            this.track.window.getComputedStyle(t, null).getPropertyValue(e)) : t.style[e]
        },
        positioningNotSet: function(t) {
            var e = this.getStyleProperty(t, "top")
              , i = this.getStyleProperty(t, "bottom")
              , n = this.getStyleProperty(t, "left")
              , r = this.getStyleProperty(t, "right");
            return !("auto" != e && "0px" != e || "auto" != i && "0px" != i || "auto" != n && "0px" != n || "auto" != r && "0px" != r)
        }
    }
}
, function(t, e) {
    AdTrack.InterScrollRenderer = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.transforms = i,
        this.events = n,
        this.channel = null,
        this.container = null,
        this.channel = null,
        this.renderedChannel = null,
        this.isLoaded = !1,
        this.width = 0,
        this.height = 0,
        this.realWidth = 0,
        this.realHeight = 0,
        this.viewportWidth = 0,
        this.landscape = !1,
        this.c = null,
        this.wrap = null,
        this.clipper = null,
        this.banner = null,
        this.resizeListener = function() {
            this.isReadyToShow() && this.events.trigger("ready"),
            this.isLoaded && this.setUp()
        }
        .bind(this),
        AdTrack.BrowserFlags.isPhone ? this.track.addEvent(this.track.window, "orientationchange", this.resizeListener) : this.track.addEvent(this.track.window, "resize", this.resizeListener)
    }
    ,
    AdTrack.InterScrollRenderer.prototype = {
        getContainer: function() {
            return this.container
        },
        createContainer: function(t) {
            return this.container || (this.c = this.track.document.createElement("div"),
            this.wrap = this.track.document.createElement("div"),
            this.clipper = this.track.document.createElement("div"),
            this.banner = this.track.document.createElement("div"),
            this.adNoticeTop = this.track.document.createElement("div"),
            this.adNoticeBot = this.track.document.createElement("div"),
            this.c.appendChild(this.wrap),
            this.wrap.appendChild(this.adNoticeTop),
            this.wrap.appendChild(this.clipper),
            this.wrap.appendChild(this.adNoticeBot),
            this.clipper.appendChild(this.banner),
            t.appendChild(this.c),
            this.banner.style.display = "none",
            this.container = this.banner),
            this.container
        },
        isReadyToShow: function() {
            return AdTrack.Utils.getViewportRealWidth(this.track.window) <= AdTrack.Utils.getViewportRealHeight(this.track.window)
        },
        setUp: function() {
            if (this.width && this.height) {
                var t = 720 == this.width && 1280 == this.height
                  , e = AdTrack.Utils.getViewportRealWidth(this.track.window)
                  , i = AdTrack.Utils.getViewportRealHeight(this.track.window)
                  , n = e > i;
                if (this.viewportWidth === e && n === this.landscape)
                    return;
                if (this.viewportWidth = e,
                this.landscape = n,
                e > i)
                    return void this.hide();
                var r = e / this.width
                  , s = i / this.height
                  , o = Math.max(r, s);
                t || (o = Math.min(r, s)),
                this.realWidth = this.width * o,
                this.realHeight = this.height * o,
                this.show();
                var a = function(t, e) {
                    return (t - e) / 2
                }
                  , d = a(e, this.realWidth)
                  , c = a(i, this.realHeight)
                  , h = (y = this.definition.options.interscrollerVerticalLimit,
                (y = parseInt(y, 10)) && !isNaN(y) ? y < 50 ? .5 : y > 100 ? 1 : .01 * y : 1)
                  , l = this.definition.options.interscrollerHideAdNotice
                  , u = 0
                  , p = null;
                try {
                    p = this.c.getBoundingClientRect()
                } catch (t) {}
                p && (u = -p.left);
                var f = Math.round(.025 * i)
                  , g = Math.round(.65 * f)
                  , m = i * h;
                l || (m += 2 * f);
                var k = this.definition.options.interscrollerBackground ? this.definition.options.interscrollerBackground : "black";
                this.c.setAttribute("style", "display: block; width: auto; height: " + m + "px; position: relative; z-index: 0; "),
                this.wrap.setAttribute("style", "display: block; width: " + e + "px; height:" + m + "px; position: absolute; top: 0; left:" + u + "px; overflow: hidden; box-shadow: 0px 0 4px 0px; background: " + k + ";"),
                this.clipper.setAttribute("style", "display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; overflow: hidden; clip-path: inset(0px); clip: rect(0px auto auto 0px);"),
                this.banner.setAttribute("style", "display: block; width: " + this.width + "px; height: " + this.height + "px; position: fixed; top: " + c + "px; left: " + d + "px; transform: translateZ(0px); max-width: initial; max-height: initial;"),
                this.adNoticeTop.setAttribute("style", "background: black; color: white; position: absolute; z-index: 4; top: 0px; left: 0px; right: 0px; width: auto; margin: 0px; display: block; padding: 0; text-align: center; text-transform: uppercase; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: " + g + "px; line-height: " + f + "px; font-family: Helvetica, Arial, sans-serif; box-shadow: black 0px 1px 10px;"),
                this.adNoticeBot.setAttribute("style", "background: black; color: white; position: absolute; z-index: 4; bottom: 0px; left: 0px; right: 0px; width: auto; margin: 0px; display: block; padding: 0; text-align: center; text-transform: uppercase; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: " + g + "px; line-height: " + f + "px; font-family: Helvetica, Arial, sans-serif; box-shadow: black 0px 1px 10px;");
                var v = this.definition.options.fixedShowAdNotice ? this.definition.options.fixedShowAdNotice : "Reklama";
                this.adNoticeTop.innerHTML = v,
                this.adNoticeBot.innerHTML = v,
                l && (this.adNoticeTop.style.display = "none",
                this.adNoticeBot.style.display = "none");
                var b = "scale(" + o + ")";
                this.banner.style.webkitTransform = b,
                this.banner.style.MozTransform = b,
                this.banner.style.msTransform = b,
                this.banner.style.OTransform = b,
                this.banner.style.transform = b,
                this.banner.style.transformOrigin = "left top"
            }
            var y
        },
        measureImpress: function(t, e) {
            var i = function() {
                var n = null;
                try {
                    n = this.wrap.getBoundingClientRect()
                } catch (t) {
                    return
                }
                var r = n.top
                  , s = AdTrack.Utils.getViewportRealHeight(this.track.window)
                  , o = 1 - Math.abs(r) / s;
                o >= .5 && (this.track.removeEvent(this.track.window, "resize", i),
                this.track.removeEvent(this.track.window, "scroll", i),
                this.track.removeEvent(this.track.window, "build", i),
                e(t, o))
            }
            .bind(this);
            this.track.addEvent(this.track.window, "resize", i),
            this.track.addEvent(this.track.window, "scroll", i),
            this.track.addEvent(this.track.window, "build", i)
        },
        loaded: function(t) {
            this.isLoaded = !0,
            AdTrack.interscroller = !0;
            var e = t.data.style ? t.data.style.options.width : null
              , i = t.data.style ? t.data.style.options.height : null
              , n = e || t.data.width || this.definition.options.width
              , r = i || t.data.height || this.definition.options.height;
            n && r ? (this.width = n,
            this.height = r,
            this.setUp()) : this.track.doError("Undefined width or height")
        },
        destroy: function() {},
        show: function() {
            this.track.container.style.display = "block"
        },
        hide: function() {
            this.track.container.style.display = "none"
        },
        open: function() {},
        close: function() {}
    }
}
, function(t, e) {
    var i, n, r, s, o, a, d, c, h, l, u, p, f, g;
    AdTrack.Slider = AdTrack.Slider || (i = "AdTrack-slider-wrapper",
    n = "AdTrack-slider-items",
    r = "AdTrack-slider-item",
    s = "AdTrack-slider-next",
    o = "AdTrack-slider-prev",
    a = "AdTrack-slider-pick",
    d = "data-slider-size",
    c = "data-item-size",
    h = "data-slider-direction",
    l = "data-slider-start",
    u = "data-slider-autoslide",
    p = "data-slider-threshold",
    f = {
        horizontal: {
            point: "clientX"
        },
        vertical: {
            point: "clientY"
        }
    },
    g = function(t) {
        var e, g, m = t.ownerDocument || document, k = t.querySelector("." + i), v = k ? k.querySelector("." + n) : null, b = v ? v.querySelectorAll("." + r) : [], y = b.length, A = t.querySelectorAll("." + s), T = t.querySelectorAll("." + o), w = t.querySelectorAll("." + a), x = 0, C = 300, S = .2, P = 0, U = null, E = "horizontal", I = "clientX", R = parseInt(k.getAttribute(l)), D = parseInt(k.getAttribute(p)), B = parseInt(k.getAttribute(u)), N = k.getAttribute(h);
        !isNaN(R) && R >= 0 && R < y && (x = R),
        !isNaN(D) && D > 0 && D < 100 && (S = .01 * D),
        !isNaN(B) && B > 0 && (P = 1e3 * B),
        f[N] && (E = N,
        I = f[N].point),
        Array.prototype.forEach.call(T, (function(t) {
            t.addEventListener("click", (function() {
                H(x - 1)
            }
            ))
        }
        )),
        Array.prototype.forEach.call(A, (function(t) {
            t.addEventListener("click", (function() {
                H(x + 1)
            }
            ))
        }
        )),
        Array.prototype.forEach.call(w, (function(t, e) {
            e >= 0 && e < y && t.addEventListener("click", (function() {
                H(e)
            }
            ))
        }
        )),
        e = parseInt(k.getAttribute(d)),
        g = parseInt(k.getAttribute(c)),
        e = !isNaN(e) && e > 100 ? e : 0,
        g = !isNaN(g) && g > 100 ? g : 0,
        e = e || g || 300,
        (g = g || e || 300) > e && (g = e);
        var z = (e - (C = g)) / 2
          , _ = !1
          , O = 0
          , M = 0
          , L = 0
          , j = 0
          , H = function(t) {
            !function(t) {
                w[t] && (w[t].setAttribute("class", "AdTrack-slider-pick AdTrack-slider-pick-active"),
                w[x] && t !== x && w[x].setAttribute("class", "AdTrack-slider-pick"))
            }(t),
            t < 0 && (t = 0),
            t >= y && (t = y - 1),
            x = t,
            M = -t * C,
            Z()
        }
          , F = function(t) {
            t = -t;
            var e = Math.floor(Math.abs(t / C))
              , i = t % C;
            (t < 0 && i < -S * C || t >= 0 && i > S * C) && (e += 1),
            H(t < 0 ? x - e : x + e)
        }
          , V = function(t) {
            t = t || window.event,
            _ = !1,
            X(),
            G(),
            O = M,
            "touchstart" === t.type ? L = t.touches[0][I] : (L = t[I],
            m.addEventListener("mouseup", q),
            m.addEventListener("mousemove", W))
        }
          , q = function(t) {
            t = t || window.event;
            var e = M - O;
            _ = Math.abs(e) > 5,
            K(),
            J(),
            e < -S * C ? F(e) : e > S * C ? F(e) : (M = O,
            Z()),
            m.removeEventListener("mouseup", q),
            m.removeEventListener("mousemove", W)
        }
          , W = function(t) {
            (t = t || window.event).preventDefault();
            var e = (j = "touchmove" === t.type ? t.touches[0][I] : t[I]) - L;
            L = j,
            M += e,
            Z()
        }
          , K = function() {
            v.style.transition = "transform .2s ease-out"
        }
          , G = function() {
            v.style.transition = ""
        }
          , J = function() {
            P && !U && (U = setInterval((function() {
                K(),
                H(x >= y - 1 ? 0 : x + 1)
            }
            ), P))
        }
          , X = function() {
            U && (clearInterval(U),
            U = null)
        }
          , Z = function() {
            var t = "translate(" + M + "px, 0px)";
            "horizontal" !== E && (t = "translate(0px," + M + "px)"),
            v.style.webkitTransform = t,
            v.style.MozTransform = t,
            v.style.msTransform = t,
            v.style.OTransform = t,
            v.style.transform = t
        };
        k && v && y > 0 && (function() {
            k.style.overflow = "hidden";
            var t = "horizontal" === E ? C * y + "px" : "100%"
              , e = "vertical" === E ? C * y + "px" : "100%";
            v.style.display = "block",
            v.style.width = t,
            v.style.height = e,
            v.style.paddingLeft = z + "px",
            v.style.paddingRight = z + "px",
            v.style.boxSizing = "content-box",
            Array.prototype.forEach.call(b, (function(t) {
                var e = "horizontal" === E ? C + "px" : "100%"
                  , i = "vertical" === E ? C + "px" : "100%";
                t.style.display = "block",
                t.style.float = "left",
                t.style.margin = "0",
                t.style.padding = "0",
                t.style.width = e,
                t.style.height = i
            }
            ))
        }(),
        v.addEventListener("mousedown", V),
        v.addEventListener("touchstart", V),
        v.addEventListener("touchend", q),
        v.addEventListener("touchmove", W),
        v.addEventListener("click", (function(t) {
            _ && t.preventDefault(),
            _ = !1
        }
        )),
        H(x),
        J())
    }
    ,
    {
        create: function(t) {
            return new g(t)
        }
    })
}
, function(t, e) {
    function i(t, e, n, r, s) {
        var o = {
            container: t || document.body,
            html: e || "",
            listeners: n || {},
            domain: r || document.domain,
            element: document.createElement("iframe"),
            sandbox: ["allow-popups", "allow-popups-to-escape-sandbox", "allow-forms", "allow-orientation-lock", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"],
            resolved: !1,
            document: !1,
            window: !1,
            sandboxed: !s
        };
        return i.append(o),
        i.resolve(o) ? i.populate(o) : i.populate(o, document.domain),
        o
    }
    var n;
    window.AdTrack || (window.AdTrack = {}),
    window.AdTrack.iframeCreator = i,
    i.append = function(t) {
        i.trigger(t, "onBeforeAppend"),
        t.sandboxed && t.element.setAttribute("sandbox", t.sandbox.join(" ")),
        t.container.appendChild(t.element),
        i.trigger(t, "onAfterAppend")
    }
    ,
    i.populate = function(t, e) {
        e ? (t.element.populate = i.populate,
        t.element.src = 'javascript:(document.open().domain="' + e + '") && frameElement.populate(frameElement)') : (i.resolve(t),
        i.trigger(t, "onBeforePopulate"),
        t.element.frameElement = t.element,
        t.document.write(t.html),
        t.document.close(),
        i.trigger(t, "onAfterPopulate"))
    }
    ,
    i.trigger = function(t, e) {
        var i = t.listeners[e];
        return i && i(t, e)
    }
    ,
    i.resolve = function(t) {
        try {
            t.window = t.element.contentWindow,
            t.document = t.element.contentDocument || t.window && t.window.document
        } catch (t) {}
        return t.resolved = !(!t.window || !t.document)
    }
    ,
    i.factory = (n = function(t, e, i, n, r) {
        var s = (e || 0 === e) && (i || 0 === i)
          , o = r ? "100%" : e
          , a = r ? "100%" : e + "px";
        s && (t.setAttribute("width", o),
        t.setAttribute("height", i)),
        t.setAttribute("style", "border:0; margin:auto; display:block; max-width: none; max-height: none; " + (s ? "width:" + a + "; height:" + i + "px;" : "")),
        t.setAttribute("frameborder", "0"),
        t.setAttribute("marginheight", "0"),
        t.setAttribute("marginwidth", "0"),
        t.setAttribute("scrolling", "no"),
        n && function(t, e, i) {
            var n = i || t.ownerDocument || window.document
              , r = t.tagName
              , s = null;
            s = setInterval((function() {
                var i = n.activeElement;
                i && i.tagName == r && i == t && (clearInterval(s),
                e())
            }
            ), 100)
        }(t, n)
    }
    ,
    {
        createIframeWithContent: function(t, e, r, s, o, a, d) {
            try {
                return i(t, o, {
                    onBeforeAppend: function(t) {
                        var i = t.element;
                        n(i, e, r, a, d)
                    }
                }, s).element
            } catch (t) {
                return null
            }
        },
        createIframeFromHTML: function(t, e, i) {
            try {
                var r = "ifId" + Math.round(1e6 * Math.random());
                e = e.replace("<iframe", "<iframe id='" + r + "'"),
                t.innerHTML = e;
                var s = t.querySelector("#" + r);
                return n(s, null, null, i),
                s
            } catch (t) {
                return null
            }
        }
    })
}
, function(module, exports) {
    AdTrack.Criteo = AdTrack.Criteo || function() {
        if (!window.criteo_pubtag || window.criteo_pubtag instanceof Array || !window.Criteo || !window.Criteo.RequestBids) {
            var reporting = AdTrack.Utils.errorReporting(AdTrack.Config.getReportingUrl(), AdTrack.url, !1);
            window.Criteo = window.Criteo || {},
            window.Criteo.events = window.Criteo.events || [];
            var sProt = "http:" === window.location.protocol ? "http:" : "https:"
              , publisherTagUrl = sProt + "//static.criteo.net/js/ld/publishertag.standalone.js"
              , fallback = function() {
                var t = document.createElement("script");
                t.setAttribute("src", publisherTagUrl),
                document.getElementsByTagName("head")[0].appendChild(t)
            };
            try {
                var storageKey = "adtrack-lib-criteo"
                  , storageExpireKey = storageKey + "-expire"
                  , code = AdTrack.Utils.getLocalStorageItem(storageKey)
                  , expire = AdTrack.Utils.getLocalStorageItem(storageExpireKey);
                code && expire && expire >= AdTrack.Utils.time() ? eval(code) : (expire && AdTrack.Utils.time(),
                AdTrack.Ajax.request({
                    url: publisherTagUrl,
                    method: "GET",
                    async: !0,
                    withCredentials: !1,
                    headers: {
                        "Content-type": "application/javascript"
                    }
                }).done((function(response) {
                    var expirationTime = AdTrack.Utils.time() + 6048e5, success;
                    success = AdTrack.Utils.setLocalStorageItem(storageKey, response),
                    success = AdTrack.Utils.setLocalStorageItem(storageExpireKey, expirationTime),
                    eval(response)
                }
                )).fail((function(t, e) {
                    fallback()
                }
                )).send())
            } catch (t) {
                fallback()
            }
        }
        var _getStoredItem = function(t) {
            return AdTrack.Utils.readCookie(t) || AdTrack.Utils.getLocalStorageItem(t)
        };
        return {
            buildContext: function(t) {
                var e = {
                    url: AdTrack.url,
                    integrationMode: void 0
                };
                "object" == typeof t && (e.consent = t);
                try {
                    e.debug = "1" === AdTrack.Utils.getParameterByName("pbt_debug"),
                    e.noLog = "1" === AdTrack.Utils.getParameterByName("pbt_nolog")
                } catch (t) {}
                return e
            },
            buildStandardCdbUrl: function() {
                var t = _getStoredItem("cto_bundle")
                  , e = _getStoredItem("cto_idcpy")
                  , i = _getStoredItem("cto_idfs")
                  , n = _getStoredItem("cto_sid")
                  , r = "https://bidder.criteo.com/cdb";
                return r += "?ptv=79",
                r += "&profileId=207",
                r += t ? "&bundle=" + t : "",
                r += e ? "&idcpy=" + e : "",
                r += i ? "&idfs=" + i : "",
                r += n ? "&sid=" + n : "",
                r += _getStoredItem("cto_optout") ? "&optout=1" : "",
                r += "&cb=" + Math.floor(99999999999 * Math.random())
            },
            buildCdbUrl: function(t) {
                var e = {
                    amp: 1
                }
                  , i = "https://bidder.criteo.com/cdb";
                return i += "?profileId=207",
                i += "&ptv=74",
                i += "&av=21",
                i += "&cb=" + Math.floor(99999999999 * Math.random()),
                e[t.integrationMode] && (i += "&im=" + e[t.integrationMode]),
                t.debug && (i += "&debug=1"),
                t.noLog && (i += "&nolog=1"),
                i
            },
            buildCdbData: function(t, e, i, n) {
                if (e) {
                    var r = ""
                      , s = ""
                      , o = (e = "" + e).indexOf("-");
                    if (o < 0 ? isNaN(e) ? s = e : r = e : (r = e.substr(0, o),
                    s = e.substr(o + 1),
                    isNaN(r) && (r = "",
                    s = e)),
                    !r && !s)
                        return null;
                    var a = {
                        transactionid: AdTrack.Utils.uuid(),
                        auctionId: AdTrack.Utils.uuid(),
                        sizes: i,
                        impid: "ad" + (r ? "-" + r : "") + (s ? "-" + s : "")
                    }
                      , d = {
                        url: t.url
                    };
                    r ? a.zoneid = r : d.networkid = AdTrack.Config.getAccountId("criteo"),
                    s && (a.publishersubid = s),
                    n && (a.native = !0);
                    var c = {
                        slots: [a],
                        publisher: d,
                        user: {}
                    };
                    return AdTrack.UserID && (c.user.ext = {
                        prebid_criteoid: AdTrack.UserID.getCriteoId()
                    }),
                    t.consent && (c.gdprConsent = {
                        consentData: t.consent.consentString || "",
                        gdprApplies: !!t.consent.gdprApplies
                    }),
                    c
                }
                return null
            }
        }
    }()
}
, function(t, e) {
    AdTrack.SeznamHelper = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        !0 === this.definition.test && this.track.doError("Test environment for seznam ads is set"),
        this.impPixels = [],
        "seznam-ssp" == i.tag && (this.ssspTests(),
        "vignette" === this.track.definition.renderer || "fixed" === this.track.definition.renderer && this.fadeInTest())
    }
    ,
    AdTrack.SeznamHelper.prototype = {
        getKeyBasedOnStyle: function(t, e) {
            var i, n = null, r = 0;
            return t && (t.product && (i = t.product.count ? t.product.count : 0),
            t.normal && (r = t.normal.count ? t.normal.count : 0),
            n = i || r ? this.track.getChannelKey(e, i > r ? t.product : t.normal) : this.track.getChannelKey(e, null)),
            n
        },
        measureImpress: function(t, e, i) {
            null !== i && this.track.renderer.on("impress", (function() {
                AdTrack.Utils.firePixel(i)
            }
            ))
        },
        canRenderWithoutScale: function() {
            var t = AdTrack.Utils.getViewportRealWidth(this.track.window)
              , e = AdTrack.Utils.getViewportRealHeight(this.track.window);
            return t >= 320 && e >= 320
        },
        canRenderBigSquare: function() {
            var t = AdTrack.Utils.getViewportRealWidth(this.track.window)
              , e = AdTrack.Utils.getViewportRealHeight(this.track.window);
            return t >= 400 && e >= 400
        },
        isCapped: function() {
            var t = null;
            if (this.definition.options.customSeznamCappingLimit && this.definition.options.customSeznamCappingDelay) {
                var e = "AdTrack-sz-capped-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position;
                t = this.track.getCookie(e)
            }
            return !!t
        },
        applyTest: function(t, e) {
            var i = t.length
              , n = Math.floor(Math.random() * i)
              , r = "var" + (n + 1)
              , s = /var\d/;
            this.chd.flag ? s.test(this.chd.flag) ? this.chd.flag = this.chd.flag.replace(s, r) : this.chd.flag += "-" + r : this.chd.flag = r,
            this.chd.keys[1] = t[n];
            var o = e[n];
            for (var a in o)
                o.hasOwnProperty(a) && (this.definition.options[a] = o[a])
        },
        ssspTests: function() {
            var t = this.track.unitID.getName();
            if (this.chd.keys[1]) {
                var e = [[{
                    closerPos: "right",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    closerPos: "left",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }], [{
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    closerFontSize: 17,
                    szVerticalPadding: 17
                }, {
                    closerFontSize: 15,
                    szVerticalPadding: 15
                }, {
                    closerFontSize: 16.5,
                    szVerticalPadding: 16.25
                }], [{
                    closerPos: "right",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerFontSize: 15,
                    szVerticalPadding: 15
                }, {
                    closerPos: "right",
                    closerIcon: 1,
                    closerSizeCoeff: 1.8,
                    closerTest: 1
                }], [{
                    maxHeight: .25,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    szMaxHeight: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }], [{
                    szNoScale: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }], [{
                    customSquare: 1,
                    bannerNoExpand: 1,
                    noUpscale: 1,
                    maxWidth: 1,
                    maxHeight: .7,
                    closerSizeCoeff: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    customSquare: 1,
                    bannerNoExpand: 1,
                    maxWidth: .8,
                    maxHeight: .7,
                    closerSizeCoeff: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }, {
                    customSquare: 1,
                    bannerNoExpand: 1,
                    noUpscale: 1,
                    maxWidth: .8,
                    maxHeight: .7,
                    closerSizeCoeff: 1,
                    closerFontSize: 18,
                    szVerticalPadding: 17
                }], [{}, {
                    closerPos: "left",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 15,
                    szVerticalPadding: 14,
                    squareSetup: 2,
                    allowSquare: 1
                }, {
                    closerPos: "left",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 15,
                    szVerticalPadding: 14,
                    squareSetup: 2,
                    allowSquare: 1
                }], [{
                    closerPos: "right",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 15,
                    szVerticalPadding: 14
                }, {
                    closerPos: "right",
                    closerIcon: 0,
                    closerSizeCoeff: 1,
                    closerTest: 1,
                    closerFontSize: 15,
                    szVerticalPadding: 14,
                    squareSetup: 2,
                    allowSquare: 1
                }]]
                  , i = {
                    "classic_tn.cz_generic_fixed": {
                        test: 0,
                        keys: [250373, 250388]
                    },
                    "classic_pisnicky-akordy.cz_generic_fixed": {
                        test: 0,
                        keys: [250379, 250391]
                    },
                    "classic_im.eurobydleni.cz_generic_fixed": {
                        test: 0,
                        keys: [250382, 250394]
                    },
                    "classic_emimino.cz_generic_fixed": {
                        test: 1,
                        keys: [250313, 250322, 250331, 250340]
                    },
                    "classic_im.hyperinzerce.cz_generic_fixed": {
                        test: 1,
                        keys: [250325, 250316, 250334, 250343]
                    },
                    "classic_lidovky.cz_generic_fixed": {
                        test: 1,
                        keys: [250319, 250328, 250337, 250346]
                    },
                    "classic_expres.cz_generic_fixed": {
                        test: 2,
                        keys: [250295, 250307]
                    },
                    "classic_databazeknih.cz_generic_fixed": {
                        test: 2,
                        keys: [250301, 250304]
                    },
                    "classic_novaplus.cz_generic_fixed": {
                        test: 2,
                        keys: [250298, 250310]
                    },
                    "classic_drbna.cz_generic_fixed": {
                        test: 3,
                        keys: [250349, 250361]
                    },
                    "classic_abradio.cz_generic_fixed": {
                        test: 3,
                        keys: [250352, 250364]
                    },
                    "classic_homeincube.cz_generic_fixed": {
                        test: 3,
                        keys: [250358, 250367]
                    },
                    "classic_bezrealitky.cz_generic_fixed": {
                        test: 4,
                        keys: [250403, 250412]
                    },
                    "classic_mafra.onlajny.com_generic_fixed": {
                        test: 4,
                        keys: [250406, 250415]
                    },
                    "classic_meteocentrum.cz_generic_fixed": {
                        test: 4,
                        keys: [250409, 250418]
                    },
                    "classic_im.fdb.cz_generic_fixed": {
                        test: 5,
                        keys: [255328, 255331, 255343]
                    },
                    "classic_tydenikpolicie.cz_generic_fixed": {
                        test: 5,
                        keys: [255325, 255334, 255346]
                    },
                    "classic_im.drevostavitel.cz_generic_fixed": {
                        test: 5,
                        keys: [255364, 255337, 255349]
                    },
                    "classic_idnes.cz_homepage_fixed": {
                        test: 6,
                        keys: [208336, 241964, 257059]
                    },
                    "classic_idnes.cz_generic_fixed": {
                        test: 6,
                        keys: [208426, 241967, 257062]
                    },
                    "classic_rajce.net_generic_fixed": {
                        test: 7,
                        keys: [256708, 256699]
                    },
                    "mobile_ocko.tv_generic_fixed": {
                        test: 7,
                        keys: [256714, 256705]
                    },
                    "mobile_mafra.skodahome.cz_generic_fixed": {
                        test: 7,
                        keys: [256711, 256702]
                    }
                };
                for (var n in i)
                    if (i.hasOwnProperty(n) && t === n) {
                        var r = i[n]
                          , s = -1;
                        if (r.keys.forEach(function(t, e) {
                            t == this.chd.keys[1] && (s = e)
                        }
                        .bind(this)),
                        s >= 0) {
                            var o = e[r.test][s];
                            for (var a in o)
                                o.hasOwnProperty(a) && (this.definition.options[a] = o[a])
                        }
                    }
            }
        },
        vignetteTest: function() {
            var t = this.track.unitID.getName()
              , e = null;
            this.chd.keys[1] && ("mobile_parlamentnilisty.cz_generic_vignette" === t && 220542 == this.chd.keys[1] ? e = [249608, 220542] : "mobile_drbna.cz_generic_vignette" === t && 181746 == this.chd.keys[1] && (e = [249611, 181746]),
            e && this.applyTest(e, [{
                szTest: 1
            }, {}]))
        },
        reopenTest: function() {
            var t = null;
            "classic_podnikatel.cz_article_fixed" === this.track.unitID.getName() && (t = [63959, 227386, 227391]),
            t && this.chd.keys[1] && this.applyTest(t, [{
                customReopen: 1
            }, {
                customReopen: 1,
                customReopenRight: 1
            }, {
                customReopen: 0
            }])
        },
        fadeInTest: function() {
            var t = this.track.unitID.getName()
              , e = null;
            this.chd.keys[1] && ("classic_nevimnews.cz_generic_fixed" === t && 183596 == this.chd.keys[1] ? e = [225306, 225311, 225316, 225321, 225326, 183596] : "classic_lupa.cz_article_fixed" === t && 63942 == this.chd.keys[1] && (e = [227401, 227406, 227411, 227416, 227421, 63942]),
            e && this.applyTest(e, [{
                transitionStart: "%%fixedWrap%% {transform: translateX(-100%);}",
                transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateX(0%);}",
                transitionEnd: "%%fixedWrap%% {transition: transform 1s; transform: translateX(200%);}"
            }, {
                transitionStart: "%%fixedWrap%% {transform: translateX(100%);}",
                transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateX(0%);}",
                transitionEnd: "%%fixedWrap%% {transition: transform 1s; transform: translateX(-200%);}"
            }, {
                transitionStart: "%%fixedWrap%% {transform: translateY(-150px) scale(0);}",
                transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateY(0) scale(1);}",
                transitionEnd: "%%fixedWrap%% {transition: transform 0.8s; transform: translateY(-150px) scale(0);}"
            }, {
                transitionStart: "%%fixedAdWrap%% {transform: translate(-500px, -150px) scale(0);}%%fixedCloser.transformLayer%% {transform: translate(500px, -100px) scale(0);}",
                transitionMid: "%%fixedAdWrap%% {transition: transform 1s; transform: translate(0) scale(1);}%%fixedCloser.transformLayer%% {transition: transform 0.7s 0.5s; transform: translate(0) scale(1);}",
                transitionEnd: "%%fixedAdWrap%% {transition: transform 0.7s 0.2s; transform: translate(500px, -150px) scale(0);}%%fixedCloser.transformLayer%% {transition: transform 0.7s; transform: translate(500px, -100px) scale(0);}"
            }, {
                transitionStart: "@-webkit-keyframes pulse {0% { -webkit-transform: scale(1) translateY(100%); }60% { -webkit-transform: scale(1) translateY(0); }80% { -webkit-transform: scale(1.1); }100% { -webkit-transform: scale(1); }}%%fixedWrap%% { animation: pulse 1.3s ease-in-out;}"
            }, {}]))
        },
        vignetteFadeInTest: function() {
            var t = this.track.unitID.getName()
              , e = null;
            this.chd.keys[1] && ("mobile_drbna.cz_generic_vignette" === t && 181746 == this.chd.keys[1] && (e = [222511, 222516, 222521, 222526, 222531, 222536, 181746]),
            e && this.applyTest(e, [{
                transitionStart: "%%vignetteWrap%% {transform: translateX(-100%);}",
                transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateX(0%);}"
            }, {
                transitionStart: "%%vignetteWrap%% {transform: translateX(100%);}",
                transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateX(0%);}"
            }, {
                transitionStart: "%%vignetteWrap%% {transform: translateY(100%);}",
                transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0%);}"
            }, {
                transitionStart: "%%vignetteWrap%% {transform: translateY(-100%);}",
                transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0%);}"
            }, {
                transitionStart: "%%vignetteWrap%% {transform: translateY(-150px) scale(0);}",
                transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0) scale(1);}"
            }, {
                css: "@-webkit-keyframes slideLeftTitle {0% { transform: translateX(-500px); }50% { transform: translateX(-500px); }100% { transform: translateX(0); }}@-webkit-keyframes slideLeftDesc {0% { transform: translateX(-500px); }60% { transform: translateX(-500px); }100% { transform: translateX(0); }}@-webkit-keyframes fadeIn {0% { opacity: 0; }100% { opacity: 1; }}.AdTrack-anim-img {-webkit-animation: fadeIn 1s ease-in-out 0s;}.AdTrack-anim-title {-webkit-animation: slideLeftTitle 1s ease-in-out 0s;}.AdTrack-anim-desc {-webkit-animation: slideLeftDesc 1.2s ease-in-out 0s;}"
            }, {}]))
        },
        closerTest: function() {
            var t = this.track.unitID.getName()
              , e = null;
            this.chd.keys[1] && ("classic_autoweb.cz_generic_fixed" === t && 63967 == this.chd.keys[1] ? e = [249035, 63967] : "classic_vitalia.cz_article_fixed" === t && 89458 == this.chd.keys[1] && (e = [249335, 89458]),
            e && this.applyTest(e, [{
                szTest: 1
            }, {}]))
        },
        capping: function() {
            if (this.definition.options.customSeznamCappingLimit && this.definition.options.customSeznamCappingDelay) {
                var t = this.definition.options.customSeznamCappingLimit
                  , e = this.definition.options.customSeznamCappingDelay
                  , i = Math.floor(AdTrack.Utils.timeToEndOfDay() / 1e3)
                  , n = "AdTrack-sz-imp-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position
                  , r = "AdTrack-sz-capped-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position
                  , s = this.track.getCookie(n);
                (s = s ? ++s : 1) > t - 1 ? this.track.setCookie(r, 1, i) : this.track.setCookie(r, 1, e),
                this.track.setCookie(n, s, i)
            }
        },
        ssspDebug: function(t) {
            "seznam-ssp" === this.chd.tag && this.track.evProfiling(t)
        },
        parseAssets: function(t) {
            var e = {};
            try {
                t.forEach((function(t) {
                    var i = {
                        11: "title",
                        12: "data",
                        1: "img",
                        2: "img"
                    }[t.id]
                      , n = {
                        11: "title",
                        12: "description",
                        1: "image",
                        2: "imageSquare"
                    }[t.id]
                      , r = t[i];
                    r && (e[n] = r.text || r.value || {
                        url: r.url,
                        width: r.w,
                        height: r.h
                    })
                }
                ))
            } catch (t) {}
            return e
        },
        processAppnexusAd: function(t, e, i) {
            var n = new AdTrack.AdSet;
            n.setStyle(i);
            var r = new AdTrack.AdChoices;
            r.setPromoClickUrl(this.chd.url),
            r.setPromoText(this.chd.title),
            r.setOptional(!0),
            n.addAdChoices(r);
            var s = new AdTrack.TextAd
              , o = this.parseAssets(t.assets)
              , a = t.link
              , d = o.image
              , c = o.imageSquare;
            s.addText(o.title, o.description),
            d && s.addScreenshot(d.url, d.width, d.height, d.url),
            c && s.addScreenshot(c.url, c.width, c.height, c.url);
            var h = !0 === this.definition.test ? "#" : a.url;
            s.setClickUrl(h),
            s.setCta("Navštívit stránku"),
            s.done(),
            n.addAd(new AdTrack.AppnexusAd(n,s)),
            new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, n);
            for (var l = 0; l < t.imptrackers.length; l++)
                AdTrack.Utils.firePixel(t.imptrackers[l]);
            if (t.jstracker) {
                var u = this.track.document.createElement("div");
                u.style.display = "none",
                e.appendChild(u);
                var p = this.track.container && this.track.container.id;
                document.writeTo(u, t.jstracker.replace("%native_dom_id%", p))
            }
        },
        processResult: function(t, e, i, n, r, s) {
            if (s || (s = "n/a"),
            t.length > 0)
                try {
                    if (this.isBanner(t)) {
                        this.ssspDebug("SSSP renderAds processResult - banner");
                        var o = {
                            count: i.count,
                            name: "banner",
                            options: {
                                width: i.width,
                                height: i.height
                            }
                        };
                        this.renderBanner(t[0], e, o, n, r)
                    } else {
                        this.ssspDebug("SSSP renderAds processResult - other");
                        var a, d, c = t.length;
                        for (d = 0; d < t.length; d++)
                            "SHOP" == t[d].adType && (a = t[d],
                            c--);
                        var h = new AdTrack.AdSet;
                        h.setStyle(i);
                        var l = new AdTrack.AdChoices;
                        for (l.setPromoClickUrl(this.chd.url ? this.chd.url : "https://napoveda.sklik.cz/cz/co-je-reklama-sklik.html"),
                        l.setPromoText(this.chd.title),
                        l.setOptional(!0),
                        h.addAdChoices(l),
                        d = 0; d < t.length; d++) {
                            var u = t[d];
                            if (u.cta = "Navštívit stránku",
                            u && u.eventTrackers && u.eventTrackers.impress && (this.impPixels = this.impPixels.concat(u.eventTrackers.impress)),
                            "DRTG" != u.adType && "COMBINED" != u.adType && "BANNER" != u.adType || this.definition.options.customOverrideSeznamClick && (u.clickUrl = "//" + this.track.server + "/clk.php?url=" + encodeURIComponent(u.clickUrl)),
                            "DRTG" == u.adType)
                                h.addAd(new AdTrack.SklikProductAd(h,this.createProductAd(u, a, i)));
                            else if ("DYNAMIC_BANNER" == u.adType)
                                h.addAd(new AdTrack.SklikProductAd(h,this.createProductAd(u, a, i)));
                            else if ("TXT" == u.adType)
                                h.addAd(new AdTrack.SklikAd(h,this.createTextAdOld(u)));
                            else if ("COMBINED" == u.adType)
                                h.addAd(new AdTrack.SklikAd(h,this.createTextAdCombined(u)));
                            else if ("SHOP" == u.adType)
                                h.addShop(this.createShop(u));
                            else {
                                if (!u.adType || !u.headline1)
                                    return this.track.doError("Corrupt " + s + " ad. " + JSON.stringify(t)),
                                    void r("ads-structure");
                                h.addAd(new AdTrack.SklikAd(h,this.createTextAd(u)))
                            }
                        }
                        new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, h),
                        n(c)
                    }
                } catch (t) {
                    this.track.doError("Sklik processing failed due to: " + t.message),
                    r("exception")
                }
            else
                r("ads-empty")
        },
        createTextAdCombined: function(t) {
            var e = new AdTrack.TextAd
              , i = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90"
              , n = t.adSquareImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90"
              , r = this.track.rhtmlspecialchars(t.shortHeadline).trim()
              , s = this.track.rhtmlspecialchars(t.longHeadline).trim()
              , o = this.track.rhtmlspecialchars(t.description).trim()
              , a = this.track.rhtmlspecialchars(t.cta)
              , d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            return s || this.track.doError("Long headline not included. (" + this.chd.tag + ")"),
            e.addScreenshot(i, 600, 314, i),
            e.addScreenshot(n, 600, 600, n),
            e.addText(r, o),
            e.setLongHeadline(s),
            e.setCompanyName(t.companyName),
            e.setLogoUrl(t.adLogoUrl),
            e.setSquareLogoUrl(t.adSquareLogoUrl),
            e.setClickUrl(c),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(a),
            e.setFavicon(d),
            e.done(),
            e
        },
        createTextAd: function(t) {
            var e = new AdTrack.TextAd
              , i = "//fimg-resp.seznam.cz/?spec=ft160x110&fast&url=" + encodeURIComponent(t.adUrl)
              , n = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl)
              , r = (encodeURIComponent(t.adUrl),
            this.track.rhtmlspecialchars(t.headline1).trim())
              , s = this.track.rhtmlspecialchars(t.headline2).trim()
              , o = this.track.rhtmlspecialchars(t.description).trim()
              , a = this.track.rhtmlspecialchars(t.cta)
              , d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            if (0 !== t.adImageUrl.length) {
                i = t.adImageUrl + "?fl=res%2C160%2C110%2C3|jpg%2C90",
                n = t.adImageUrl + "?fl=res%2C560%2C260%2C3|jpg%2C90";
                var h = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90";
                e.addScreenshot(i, 160, 110, i),
                e.addScreenshot(n, 560, 260, n),
                e.addScreenshot(h, 600, 314, h)
            } else
                e.addScreenshot(i, 160, 110, i),
                e.addScreenshot(n, 280, 130, n);
            return e.addText(r, o),
            s && (0 !== t.adImageUrl.length || e.addText(r + " - " + s, o)),
            e.setClickUrl(c),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(a),
            e.setFavicon(d),
            e.done(),
            e
        },
        createTextAdOld: function(t) {
            var e = new AdTrack.TextAd
              , i = "//fimg-resp.seznam.cz/?spec=ft100x75&fast&url=" + encodeURIComponent(t.adUrl)
              , n = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl)
              , r = (encodeURIComponent(t.adUrl),
            this.track.rhtmlspecialchars(t.creative1).trim())
              , s = this.track.rhtmlspecialchars(t.creative2).trim()
              , o = this.track.rhtmlspecialchars(t.creative3).trim()
              , a = this.track.rhtmlspecialchars(t.cta)
              , d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            return e.addScreenshot(i, 100, 75, i),
            e.addScreenshot(n, 280, 130, n),
            e.addText(r, s + " " + o),
            e.setClickUrl(c),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(a),
            e.setFavicon(d),
            e.done(),
            e
        },
        createProductAd: function(t, e, i) {
            var n = new AdTrack.ProductAd
              , r = i.options.imageWidth || this.definition.options.imageWidth || null
              , s = i.options.imageHeight || this.definition.options.imageHeight || null;
            r && s || (r = 220,
            s = 120);
            var o = t.imageUrl + "?w=" + r + "&h=" + s + "&m=rp"
              , a = t.imageUrl + "?w=220&h=120&m=rp";
            i && i.options && i.options.backgroundImage && (o = t.imageUrl,
            a = t.imageUrl);
            var d = e && e.cleanShopUrl ? "https://fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(e.cleanShopUrl) : ""
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl
              , h = t.price;
            return h.match(/[0-9]$/) && (h += "&nbsp;Kč"),
            h = h.replace(/[ ]+/g, "&nbsp;"),
            n.addScreenshot(o, r, s, a),
            n.setProductName(t.title),
            n.setProductPrice(h),
            n.setProductLastPrice(t.lastPrice),
            n.setProductDiscount(t.discount),
            n.setAdditionalInfo(t.additionalInfo),
            n.setProductManufacturer(t.manufacturer),
            n.setProductCategory(t.category),
            n.setClickUrl(c),
            n.setFavicon(d),
            n.done(),
            n
        },
        createShop: function(t) {
            var e = new AdTrack.Shop
              , i = t.cleanShopUrl
              , n = i.split("//");
            return n.length > 1 ? e.setCleanShopUrl(n[1]) : e.setCleanShopUrl(i),
            e.setShopName(t.shopName),
            e.setShopSlogan(t.shopSlogan),
            e.setShopUrl(t.shopUrl),
            e.setShopLogo(t.shopLogoUrl),
            e.setLogoutUrl(""),
            e
        },
        isProductAd: function(t) {
            return t.length > 0 && ("DRTG" == t[0].adType || "SHOP" == t[0].adType)
        },
        isBanner: function(t) {
            return t.length > 0 && (t[0].isBanner || "BANNER" == t[0].adType)
        },
        isBranding: function(t) {
            return t.length > 0 && "BRANDING" == t[0].adType
        },
        renderBanner: function(t, e, i, n, r) {
            var s = this.definition.test ? this.track.noquerystring("//seznam.cz") : t.clickUrl
              , o = this.track.document.createElement("div");
            o.style.textAlign = "center",
            o.style.fontSize = "0";
            var a = this.track.document.createElement("div");
            a.style.display = "inline-block",
            a.style.position = "relative",
            a.style.margin = "auto",
            o.appendChild(a),
            e.appendChild(o);
            var d = this.track.document.createElement("a");
            this.definition.options.hideHref ? d.href = "#" : d.href = s,
            a.appendChild(d);
            var c, h, l, u = this.track.document.createElement("img");
            if (u.src = t.bannerUrl,
            u.style.width = "auto",
            u.style.height = "auto",
            u.style.border = "solid 1px #d0d0d0",
            d.appendChild(u),
            d.onclick = (c = 0,
            h = "banner",
            l = s,
            function(t) {
                var e = AdTrack.Utils.getEventRelativePos(t, this.track.renderer.getContainer());
                this.track.evClick(this.definition, this.chd, e.x, e.y, c, h, l, i),
                this.definition.options.newwindow || (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            }
            ).bind(this),
            this.ssspDebug("SSSP renderBanner - after append"),
            this.definition.options.newwindow ? d.setAttribute("target", "_blank") : d.setAttribute("target", "_top"),
            !this.definition.options.noBannerPromo && ("sklik" == this.chd.tag || "sklik-banner" == this.chd.tag)) {
                var p = this.track.document.createElement("a");
                p.style.position = "absolute",
                p.style.bottom = "0px",
                p.style.right = "0px",
                p.style.background = "transparent",
                p.href = this.chd.url;
                var f = this.track.document.createElement("img");
                f.alt = f.title = this.chd.title,
                f.style.width = "auto",
                f.style.height = "auto",
                p.appendChild(f);
                var g = function() {
                    f.src = "//c.imedia.cz/img/banner-packa.png"
                };
                p.onmouseover = function() {
                    f.src = "//c.imedia.cz/img/banner-logo.png"
                }
                ,
                p.onmouseout = g,
                g(),
                a.appendChild(p)
            }
            var m = this
              , k = function(t, e) {
                this.ssspDebug("SSSP renderAds processResult - banner load");
                try {
                    t && t.options && (t.options.width = e.width,
                    t.options.height = e.height)
                } catch (t) {
                    return void r("exception-banner")
                }
                n(1, t)
            }
            .bind(this);
            u.complete ? (m.ssspDebug("SSSP renderBanner - banner complete"),
            k(i, u)) : (m.ssspDebug("SSSP renderBanner - banner wait"),
            u.onload = function(t) {
                m.ssspDebug("SSSP renderBanner - banner onload"),
                k(i, t.target)
            }
            ,
            u.onerror = function() {
                m.ssspDebug("SSSP renderBanner - banner onerro"),
                r("banner-image")
            }
            )
        },
        renderBranding: function(t, e, i, n) {
            var r = "";
            r = t[0].brandingUrl && "" !== t[0].brandingUrl ? t[0].brandingUrl : t[0].bannerUrl,
            t[0] && t[0].eventTrackers && t[0].eventTrackers.impress && (this.impPixels = this.impPixels.concat(t[0].eventTrackers.impress));
            var s = '<a href="' + t[0].clickUrl + '" target="_top"><img src="' + r + '"/></a>';
            this.renderInIFrame(s, e, i, n)
        },
        renderInIFrame: function(t, e, i, n) {
            var r = "<html><head></head><body>" + t + "</body></html>"
              , s = function() {
                this.track.evClick(this.definition, this.chd, void 0, null, null, null, null, null)
            }
            .bind(this)
              , o = AdTrack.iframeCreator.factory.createIframeWithContent(e, i, n, window.location.href, r, s);
            return o || this.track.doError("Seznam-helper didnt create iframe"),
            o
        },
        computeHash: function() {
            var t, e, i = [];
            for (e in screen)
                i.push(screen[e]);
            if (navigator.plugins && navigator.plugins.length)
                for (t = 0; t < navigator.plugins.length; t++) {
                    var n = navigator.plugins[t];
                    i.push(n.description),
                    i.push(n.filename);
                    for (var r = 0; r < n.length; r++) {
                        var s = n[r];
                        i.push(s.description),
                        i.push(s.suffixes),
                        i.push(s.type)
                    }
                }
            else if (window.ActiveXObject) {
                var o, a, d = {
                    "AcroPDF.PDF": function() {
                        return this.GetVersions()
                    },
                    "PDF.PdfCtrl": function() {
                        return this.GetVersions()
                    },
                    "ShockwaveFlash.ShockwaveFlash": function() {
                        return this.GetVariable("$version")
                    },
                    "QuickTime.QuickTime": function() {
                        return this.QuickTimeVersion
                    },
                    "rmocx.RealPlayer G2 Control": function() {
                        return this.GetVersionInfo()
                    },
                    "rmocx.RealPlayer G2 Control.1": function() {
                        return this.GetVersionInfo()
                    },
                    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)": function() {
                        return this.GetVersionInfo()
                    },
                    "RealVideo.Rep.CalVideo(tm) ActiveX Control (32-bit)": function() {
                        return this.GetVersionInfo()
                    },
                    RealPlayer: function() {
                        return this.GetVersionInfo()
                    },
                    "WMPlayer.OCX": function() {
                        return this.versionInfo
                    },
                    "AgControl.AgControl": function() {
                        return (this.IsVersionSupported("3.0") ? "3" : this.IsVersionSupported("2.0") && "2") || this.IsVersionSupported("1.0") && "1"
                    },
                    "VideoLAN.VLCPlugin": function() {
                        return this.VersionInfo
                    }
                };
                for (e in d) {
                    try {
                        o = new ActiveXObject(e),
                        i.push(e)
                    } catch (t) {
                        continue
                    }
                    try {
                        a = d[e].call(o),
                        i.push(a)
                    } catch (t) {
                        i.push("[unavail]")
                    }
                }
            }
            var c = i.join("").toLowerCase()
              , h = [0, 0, 0, 0]
              , l = 0;
            for (t = 0; t < c.length; t++)
                h[l] = (h[l] + c.charCodeAt(t)) % 65535,
                l = (l + 1) % h.length;
            return h.join("")
        },
        generatePvId: function() {
            var t = new Date;
            t = t.toUTCString();
            var e = document.location.href
              , i = Math.random().toString();
            return this.calculatePvId(t + e + i)
        },
        calculatePvId: function(t) {
            for (var e = 2166136261, i = 0, n = t.length; i < n; i++) {
                e = 16777619 * (e ^= 255 & t.charCodeAt(i)) | 0
            }
            return Math.abs(e).toString()
        },
        isValidHttpUrl: function(t) {
            var e;
            try {
                e = new URL(t)
            } catch (t) {
                return -1 !== navigator.appVersion.indexOf("MSIE 10")
            }
            return "http:" === e.protocol || "https:" === e.protocol
        }
    }
}
, function(t, e) {
    AdTrack.SmartHelper = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i
    }
    ,
    AdTrack.SmartHelper.prototype = {
        bid: function(t, e, i) {
            var n = function(e) {
                this.response = e;
                var n = null;
                if (e && e.ad) {
                    var r = AdTrack.Utils.isBlackListedAds(e.ad);
                    !1 === r ? e.currency === this.chd.currency ? (n = AdTrack.Price.create(e.cpm, this.chd.currency, null),
                    t.setPrice(n),
                    t.setCreativeId(e.creativeId),
                    t.setWidth(e.width ? e.width : this.chd.width),
                    t.setHeight(e.height ? e.height : this.chd.height)) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + e.currency) : (s.track.doError("Blocked Smart creative (" + e.creativeId + ") from " + r, "info"),
                    s.chd.logs && s.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(s.track.server, s.chd.logs.blocked_creative, s.chd.tag, e.creativeId || "", "", e.cpm, e.ad),
                    i && i(null, null))
                }
                i && i(n, e)
            }
            .bind(this)
              , r = this.createData(e)
              , s = this;
            AdTrack.Ajax.request({
                label: "Smart bid",
                url: "https://prg.smartadserver.com/prebid/v1",
                method: "POST",
                data: JSON.stringify(r),
                json: !0,
                async: !this.definition.options.noAsync,
                timeout: this.chd.timeout || 800,
                headers: {},
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(t) {
                n(t)
            }
            )).fail((function(t, e) {
                e ? s.track.evBidTimeout(s.definition, s.chd) : s.track.evBidError(s.definition, s.chd),
                i && i(null, null)
            }
            )).send()
        },
        createData: function(t) {
            for (var e = [{
                w: this.chd.width,
                h: this.chd.height
            }], i = this.chd.sizes ? this.chd.sizes : [], n = 0; n < i.length; n++)
                2 === i[n].length && e.push({
                    w: i[n][0],
                    h: i[n][1]
                });
            var r = t.split("-");
            3 !== r.length && this.track.doError("Wrong format for key, should be: [site_id]-[page_id]-[format_id]");
            var s = {};
            AdTrack.CMP && (s = AdTrack.CMP.getConsentData("never", !1)),
            s && this.track.evBidConsent(this.definition, this.chd);
            var o = AdTrack.Utils.simpleStringGenerator(14)
              , a = AdTrack.Utils.simpleStringGenerator(14)
              , d = {
                siteid: r[0],
                pageid: r[1],
                formatid: r[2],
                currencyCode: "EUR",
                sizes: e,
                gdpr_consent: s && s.consentString ? s.consentString : "",
                gdpr: s && s.gdprApplies ? 1 : 0,
                bidfloor: this.chd.bidFloor,
                transactionId: a,
                bidId: o,
                timeout: 800
            }
              , c = this.track.getSupplyChain(!0);
            if (c && (d.schain = c),
            AdTrack.UserID) {
                var h = AdTrack.UserID.getAllUserIdsAsEids();
                h && (d.eids = h)
            }
            return d
        }
    }
}
, function(t, e) {
    AdTrack.MgidHelper = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.floorPrice = null
    }
    ,
    AdTrack.MgidHelper.prototype = {
        setFloorPrice: function(t) {
            this.floorPrice = t
        },
        bid: function(t, e, i, n) {
            var r = AdTrack.Config.getAccountId("mgid");
            if (r) {
                var s = AdTrack.Utils.getLocalStorageItem("mgMuidn")
                  , o = "https://prebid.mgid.com/prebid/" + r;
                null != s && "string" == typeof s && s.length > 0 && (o += "?muid=" + s);
                var a = this.createData(e, i)
                  , d = this;
                AdTrack.Ajax.request({
                    label: "Mgid bid",
                    url: o,
                    method: "POST",
                    data: JSON.stringify(a),
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this)
                }, this.track.errorReporting).done((function(e) {
                    e && e.ext && e.ext.muidn && AdTrack.Utils.setLocalStorageItem("mgMuidn", e.ext.muidn);
                    var i = null;
                    if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                        var r = e.seatbid[0].bid[0];
                        i = AdTrack.Price.create(r.price, AdTrack.Price.USD),
                        t.setCreativeId(r.crid),
                        t.setPrice(i),
                        t.setWidth(r.w ? r.w : d.chd.width),
                        t.setHeight(r.h ? r.h : d.chd.height)
                    }
                    d.response = e,
                    n && n(i, e)
                }
                )).fail((function(t, e) {
                    e ? d.track.evBidTimeout(d.definition, d.chd) : d.track.evBidError(d.definition, d.chd),
                    n && n(null, null)
                }
                )).send()
            } else
                this.track.doError("MGID accountId not defined. " + this.chd.tag)
        },
        createData: function(t, e) {
            var i = AdTrack.Utils.simpleStringGenerator(14)
              , n = AdTrack.Utils.simpleStringGenerator(14)
              , r = "https:" === window.location.protocol ? 1 : 0
              , s = "";
            try {
                s = this.track.getDomainName(window.top.location.hostname)
            } catch (t) {
                s = this.track.getDomainName(window.location.hostname)
            }
            var o = {}
              , a = {}
              , d = {
                id: i,
                tagid: "" + t,
                secure: r
            };
            if (e) {
                d.native = {
                    request: {
                        plcmtcnt: 1,
                        assets: [{
                            required: 1,
                            id: 3,
                            img: {
                                wmin: 600,
                                hmin: 314,
                                type: 3
                            }
                        }, {
                            required: 0,
                            id: 2,
                            img: {
                                wmin: 16,
                                hmin: 16,
                                type: 1
                            }
                        }, {
                            required: 1,
                            id: 0,
                            title: {
                                len: 300
                            }
                        }, {
                            required: 1,
                            id: 4,
                            data: {
                                type: 2
                            }
                        }, {
                            required: 0,
                            id: 5,
                            data: {
                                type: 1
                            }
                        }, {
                            required: 0,
                            id: 1,
                            data: {
                                type: 12
                            }
                        }]
                    }
                },
                d.bidfloor = this.floorPrice ? this.floorPrice : 0
            } else {
                var c = this.chd.sizes
                  , h = [];
                if (h.push({
                    w: this.chd.width,
                    h: this.chd.height
                }),
                c && c.length > 0)
                    for (var l = 0; l < c.length; l++)
                        2 === c[l].length && h.push({
                            w: c[l][0],
                            h: c[l][1]
                        });
                d.banner = {
                    w: this.chd.width,
                    h: this.chd.height,
                    format: h
                }
            }
            var u = null;
            return AdTrack.CMP && (u = AdTrack.CMP.getConsentData("never", !1)),
            u && (this.track.evBidConsent(this.definition, this.chd),
            o.ext = {
                consent: u.consentString ? u.consentString : ""
            },
            a.ext = {
                gdpr: u.gdprApplies ? 1 : 0
            }),
            {
                id: n,
                cur: ["USD"],
                device: {
                    ua: navigator.userAgent,
                    js: 1,
                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                    h: screen.height,
                    w: screen.width,
                    language: AdTrack.Utils.getLanguage()
                },
                site: {
                    domain: s,
                    page: AdTrack.url
                },
                geo: {
                    utcoffset: (new Date).getTimezoneOffset()
                },
                user: o,
                regs: a,
                ext: {
                    mgid_ver: "1.0"
                },
                imp: [d]
            }
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.PubmaticHelper = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.accountId = n || AdTrack.Config.getAccountId("pubmatic"),
        this.external = this.accountId !== AdTrack.Config.getAccountId("pubmatic");
        var r = "";
        try {
            var s = this.chd.keys[1].split("-");
            r = s[0]
        } catch (t) {}
        this.track.shouldCsync("pubmatic") && setTimeout(function() {
            AdTrack.PubmaticCSync(this.accountId, r, this.track.cmpFallback, this.track.cookiesEnabled)
        }
        .bind(this), 5e3)
    }
    ,
    AdTrack.PubmaticHelper.prototype = {
        bid: function(t, e, i, n) {
            if (this.accountId) {
                var r = "https://openbid.pubmatic.com/translator?pubId=" + this.accountId
                  , s = this.createData(e, i)
                  , o = this;
                AdTrack.Ajax.request({
                    label: "Pubmatic bid",
                    url: r,
                    method: "POST",
                    data: JSON.stringify(s),
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this)
                }, this.track.errorReporting).done((function(e) {
                    var i = null;
                    if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                        var r = e.seatbid[0].bid[0]
                          , s = AdTrack.Utils.isBlackListedAds(r.adm);
                        if (!1 === s)
                            i = AdTrack.Price.create(r.price, AdTrack.Price.USD),
                            t.setCreativeId(r.crid),
                            t.setPrice(i),
                            t.setWidth(r.w),
                            t.setHeight(r.h);
                        else {
                            var a = "";
                            r.ext && r.ext.dspid && (a = r.ext.dspid),
                            o.track.doError("Blocked Pubmatic creative (" + r.crid + ") with DSP ID (" + a + ") from " + s, "info"),
                            o.chd.logs && o.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(o.track.server, o.chd.logs.blocked_creative, o.chd.tag, r.crid || "", "", r.price, r.adm),
                            n && n(null, null)
                        }
                    }
                    o.response = e,
                    n && n(i, e)
                }
                )).fail((function(t, e) {
                    e ? o.track.evBidTimeout(o.definition, o.chd) : o.track.evBidError(o.definition, o.chd),
                    n && n(null, null)
                }
                )).send()
            } else
                this.track.doError("Pubmatic accountId not defined. " + this.chd.tag)
        },
        createData: function(t, e) {
            var i = t.split("-");
            2 !== i.length && this.track.doError("Wrong format for key, should be: [siteId]-[adId]");
            var n = i[0]
              , r = i[1]
              , s = AdTrack.Utils.uuid()
              , o = "https:" === window.location.protocol ? 1 : 0
              , a = "";
            try {
                a = this.track.getDomainName(window.top.location.hostname)
            } catch (t) {
                a = this.track.getDomainName(window.location.hostname)
            }
            var d = {}
              , c = {}
              , h = {
                id: s,
                tagid: "" + r,
                secure: o,
                ext: {},
                bidfloor: this.chd.bidFloor,
                bidfloorcur: "USD"
            };
            if (e)
                h.video = {
                    mimes: ["video/mp4", "video/webm", "video/wmv", "video/mpeg", "video/ogg"],
                    minduration: 3,
                    protocols: [2, 3, 5, 6],
                    w: this.chd.width ? this.chd.width : 640,
                    h: this.chd.height ? this.chd.height : 360,
                    placement: 3,
                    linearity: 1,
                    startdelay: 0,
                    ext: {
                        video_skippable: 1
                    }
                };
            else {
                var l = this.chd.sizes
                  , u = [];
                if (u.push({
                    w: this.chd.width,
                    h: this.chd.height
                }),
                l && l.length > 0)
                    for (var p = 0; p < l.length; p++)
                        2 === l[p].length && u.push({
                            w: l[p][0],
                            h: l[p][1]
                        });
                h.banner = {
                    w: this.chd.width,
                    h: this.chd.height,
                    format: u
                }
            }
            if (AdTrack.UserID) {
                var f = AdTrack.UserID.getAllUserIdsAsEids();
                f && f.length > 0 && (d.eids = f)
            }
            var g = null;
            AdTrack.CMP && (g = AdTrack.CMP.getConsentData("never", !1)),
            g && (this.track.evBidConsent(this.definition, this.chd),
            d.ext = {
                consent: g.consentString ? g.consentString : ""
            },
            c.ext = {
                gdpr: g.gdprApplies ? 1 : 0
            });
            var m = {
                id: "" + (new Date).getTime(),
                at: 1,
                cur: ["USD"],
                device: {
                    ip: this.track.settings.ip ? this.track.settings.ip : "",
                    ua: navigator.userAgent,
                    js: 1,
                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                    h: screen.height,
                    w: screen.width,
                    language: navigator.language
                },
                site: {
                    id: "" + n,
                    domain: a,
                    page: AdTrack.url,
                    ref: AdTrack.url,
                    publisher: {
                        id: "" + this.accountId
                    }
                },
                user: d,
                regs: c,
                ext: {},
                imp: [h],
                test: this.chd.test ? 1 : 0
            }
              , k = this.track.getSupplyChain();
            return k && !this.external && (m.source = {
                ext: {
                    schain: k
                }
            }),
            m
        }
    },
    AdTrack.PubmaticCSync = AdTrack.PubmaticCSync || (i = !1,
    function(t, e, n, r) {
        if (!i) {
            var s = null;
            if (AdTrack.CMP && (s = AdTrack.CMP.getConsentData("never", !1)),
            s)
                var o = s.consentString || ""
                  , a = s.gdprApplies ? 1 : 0;
            var d = document.createElement("script");
            d.async = !0,
            d.defer = !0,
            d.type = "text/javascript",
            d.src = "https://ads.pubmatic.com/AdServer/js/userSync.js",
            d.onload = function() {
                PubMaticSync.sync({
                    pubId: t,
                    siteId: e,
                    delay: 1e3,
                    gdpr: a,
                    gdprConsent: o
                })
            }
            ;
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(d, c),
            i = !0
        }
    }
    )
}
, function(t, e) {
    AdTrack.AdagioHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("adagio"),
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0;
        var n = this.track.window;
        n.ADAGIO = n.ADAGIO || {},
        n.ADAGIO.pageviewId = n.ADAGIO.pageviewId || AdTrack.Utils.uuid()
    }
    ,
    AdTrack.AdagioHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = this.track.window
              , n = e.split(":");
            2 !== n.length && this.track.doError("Wrong format for key, should be: [site]:[placement]");
            for (var r = [[this.chd.width, this.chd.height]], s = this.chd.sizes ? this.chd.sizes : [], o = 0; o < s.length; o++)
                2 === s[o].length && r.push(s[o]);
            var a, d, c = function() {
                try {
                    var t = this.track.definition.options.dom
                      , e = t.selector || t.container
                      , i = this.track.document.querySelector(e);
                    if (i)
                        return i
                } catch (t) {}
            }
            .bind(this), h = function() {
                try {
                    var t = c();
                    if (!AdTrack.Utils.isSafeFrameWindow(this.track.window) && !AdTrack.Utils.windowTopAccess())
                        return "";
                    var e = {
                        x: 0,
                        y: 0
                    };
                    if (AdTrack.Utils.isSafeFrameWindow(this.track.window)) {
                        var i = this.track.window;
                        if ("function" != typeof i.$sf.ext.geom)
                            return "";
                        var n = i.$sf.ext.geom();
                        return n && n.self ? (e.x = Math.round(n.t),
                        e.y = Math.round(n.l),
                        e.x + "x" + e.y) : ""
                    }
                    if (AdTrack.Utils.windowTopAccess() && t) {
                        var r = AdTrack.Utils.windowTopAccess() || this.track.window
                          , s = this.track.window.document
                          , o = t.getBoundingClientRect()
                          , a = s.documentElement
                          , d = s.body
                          , h = s.clientTop || d.clientTop || 0
                          , l = s.clientLeft || d.clientLeft || 0
                          , u = r.pageYOffset || a.scrollTop || d.scrollTop
                          , p = r.pageXOffset || a.scrollLeft || d.scrollLeft;
                        return e.x = Math.round(o.left + p - l),
                        e.y = Math.round(o.top + u - h),
                        e.x + "x" + e.y
                    }
                } catch (t) {}
                return ""
            }
            .bind(this), l = function() {
                var t = i.navigator.userAgent;
                return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(t) ? 4 : 2
            }, u = {
                id: "" + AdTrack.Utils.uuid(),
                organizationId: "" + this.accountId,
                secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
                device: {
                    userAgent: navigator.userAgent,
                    language: navigator.language || navigator.userLanguage,
                    deviceType: l(),
                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                    geo: {},
                    js: 1
                },
                site: {
                    domain: "" + i.location.hostname,
                    page: "" + i.location.href,
                    referrer: i.document.referrer || ""
                },
                pageviewId: i.ADAGIO.pageviewId || AdTrack.Utils.uuid(),
                adUnits: [],
                regs: {
                    gdpr: {
                        apiVersion: 2,
                        consentString: "",
                        consentRequired: 1,
                        allowAuctionWithoutConsent: 1
                    },
                    coppa: {},
                    ccpa: {}
                },
                schain: {},
                prebidVersion: "4.11.0",
                adapterVersion: "2.4.0",
                featuresVersion: "1"
            };
            if (u.adUnits.push({
                bidder: "adagio",
                params: {
                    organizationId: "" + this.accountId,
                    site: n[0],
                    adUnitElementId: "r2b2",
                    placement: n[1],
                    environment: AdTrack.Utils.isMobile() ? "mobile" : "desktop",
                    postBid: "1"
                },
                mediaTypes: {
                    banner: {
                        sizes: r
                    }
                },
                adUnitCode: "r2b2",
                transactionId: AdTrack.Utils.uuid(),
                sizes: r,
                bidId: AdTrack.Utils.uuid(),
                bidderRequestId: AdTrack.Utils.uuid(),
                auctionId: AdTrack.Utils.uuid(),
                src: "client",
                bidRequestsCount: 1,
                bidderRequestsCount: 1,
                bidderWinsCount: 0,
                features: {
                    print_number: "1",
                    page_dimensions: function() {
                        var t = AdTrack.Utils.windowTopAccess();
                        if (!t)
                            return "";
                        var e = t.document.querySelector("body");
                        if (!e)
                            return "";
                        var i = t.document.documentElement;
                        return Math.max(e.scrollWidth, e.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth) + "x" + Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
                    }(),
                    viewport_dimensions: AdTrack.Utils.getViewportRealWidth(i) + "x" + AdTrack.Utils.getViewportRealHeight(i),
                    adunit_position: h(),
                    dom_loading: "" + (50 + Math.round(100 * Math.random())),
                    user_timestamp: "" + (Math.floor((new Date).getTime() / 1e3) - 60 * (new Date).getTimezoneOffset()),
                    device: "" + l(),
                    url: AdTrack.url,
                    browser: (a = i.navigator.userAgent,
                    d = a.toLowerCase(),
                    /Edge\/\d./i.test(a) ? "edge" : d.indexOf("chrome") > 0 ? "chrome" : d.indexOf("firefox") > 0 ? "firefox" : d.indexOf("safari") > 0 ? "safari" : d.indexOf("opera") > 0 ? "opera" : d.indexOf("msie") > 0 || i.MSStream ? "ie" : "unknow"),
                    os: function() {
                        var t = i.navigator.userAgent.toLowerCase();
                        return t.indexOf("linux") > 0 ? "linux" : t.indexOf("mac") > 0 ? "mac" : t.indexOf("win") > 0 ? "windows" : ""
                    }()
                }
            }),
            AdTrack.CMP) {
                var p = AdTrack.CMP.getConsentData("never", !1);
                p && p.consentString && (this.track.evBidConsent(this.definition, this.chd),
                u.regs.gdpr = {
                    apiVersion: p.version ? p.version : null,
                    consentString: p.consentString ? p.consentString : "",
                    consentRequired: p.gdprApplies ? 1 : 0,
                    allowAuctionWithoutConsent: 1
                })
            }
            var f = function(e) {
                if (this.response = e,
                e.data && e.data.user_syncs && e.data.user_syncs.length >= 1) {
                    var i = e.data.user_syncs
                      , n = this;
                    setTimeout((function() {
                        try {
                            i.forEach((function(t) {
                                var e = n.track.window.document;
                                if ("image" === t.type) {
                                    var i = e.createElement("img");
                                    i.setAttribute("src", t.url),
                                    i.setAttribute("style", "position:absolute; display:none; height:0; width:0;"),
                                    e.body.appendChild(i)
                                } else if ("iframe" === t.type) {
                                    var r = e.createElement("iframe");
                                    r.setAttribute("src", t.url),
                                    r.setAttribute("width", "0"),
                                    r.setAttribute("height", "0"),
                                    r.setAttribute("scrolling", "no"),
                                    r.setAttribute("frameborder", "0"),
                                    r.setAttribute("style", "border: 0px; display:none;"),
                                    e.body.appendChild(r)
                                }
                            }
                            ))
                        } catch (t) {
                            n.track.doError("[" + n.chd.tag + "] Error with CSync: " + t.message)
                        }
                    }
                    ), 5e3)
                }
                if (e.bids && e.bids.length > 0)
                    if (e.bids[0]) {
                        var r = e.bids[0]
                          , s = AdTrack.Utils.isBlackListedAds(r.ad);
                        !1 === s ? r.cpm ? r.currency === this.chd.currency ? (this.price = AdTrack.Price.create(r.cpm, this.chd.currency),
                        this.bidResponse.setPrice(this.price),
                        this.bidResponse.setCreativeId(r.creativeId),
                        r.width && r.height && (this.bidResponse.setWidth(r.width),
                        this.bidResponse.setHeight(r.height)),
                        t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " responded with unsupported currency (" + r.currency + ")."),
                        t && t(null, null)) : (this.track.doError("Channel " + this.chd.tag + " responded with empty currency."),
                        t && t(null, null)) : (this.track.doError("Blocked Adagio creative (" + r.creativeId + ") from " + s, "info"),
                        this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, r.creativeId || "", "", r.cpm, r.ad),
                        t && t(null, null))
                    } else
                        this.track.doError("Channel " + this.chd.tag + " responded with unknown response."),
                        t && t(null, null);
                else
                    t && t(null, null)
            }
            .bind(this)
              , g = function(e, i) {
                i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd),
                this.price = null,
                t && t(null, null)
            }
            .bind(this);
            AdTrack.Ajax.request({
                label: "Adagio bid",
                url: "https://mp.4dex.io/prebid",
                method: "POST",
                async: !this.definition.options.noAsync,
                json: !0,
                timeout: this.chd.timeout || 800,
                data: JSON.stringify(u),
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(t) {
                f(t)
            }
            )).fail((function(t, e) {
                g(t, e)
            }
            )).send()
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.bids && t.bids[0]) {
                        var e = t.bids[0];
                        this.adData = e.ad,
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var n = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: e.ad,
                                type: "content"
                            }
                        }
                          , r = new AdTrack.MediaTypes.Banner(n,this.track.errorReporting);
                        i(r)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.AdformChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.price = null,
        this.response = null,
        this.helper = new AdTrack.AdformHelper(t,e,i),
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.AdformChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, this.helper.BANNER, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            e = e && e.normal ? e.normal : null;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(e) {
                    if (e)
                        if ((e = e[0]).response && "banner" === e.response) {
                            if (this.adData = e.banner,
                            "branding" === this.definition.renderer && this.track.settings.publisher && "mafra" === this.track.settings.publisher.tag) {
                                var n = AdTrack.Utils.windowTopAccess();
                                if (n && n.CPExSkinObject) {
                                    var r = n.CPExSkinObject;
                                    n.CPExSkinObject = function(t) {
                                        if (n.CPExSkinObject = r,
                                        !n.postscribe || !n.document.getElementById("branding"))
                                            throw new Error;
                                        postscribe("#branding", "<script>topWin.CPExSkinObject (" + JSON.stringify(t) + ")<\/script>")
                                    }
                                }
                            }
                            var s = e.banner.match(/bn=([0-9]+);/);
                            if (s && s[1])
                                12260744 == s[1] && t.setAttribute("rel", "//track.adform.net/C/?bn=12260744;adfibeg=0");
                            this.chd.width = e.width,
                            this.chd.height = e.height;
                            var o = {
                                chd: this.chd,
                                width: e.width,
                                height: e.height,
                                ad: {}
                            };
                            e.banner.match(/^<iframe/i) ? (o.ad.data = e.banner,
                            o.ad.type = "iframe") : (o.ad.data = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + e.banner + "</body></html>",
                            o.ad.type = "content");
                            var a = new AdTrack.MediaTypes.Banner(o,this.track.errorReporting);
                            i(a)
                        } else
                            this.track.passback(this.definition, this.chd);
                    else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.AdformNativeDSPChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i
    }
    ,
    AdTrack.AdformNativeDSPChannel.prototype = {
        bid: function(t, e) {
            var i = this.createData(e)
              , n = this;
            AdTrack.Ajax.request({
                label: "Adform native bid",
                url: "//adx.adform.net/adx/openrtb",
                method: "POST",
                data: JSON.stringify(i),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                    var i = e.seatbid[0].bid[0];
                    n.isBidValid(i) ? n.price = AdTrack.Price.create(i.price, AdTrack.Price.EUR) : n.price = null
                } else
                    n.price = null;
                n.response = e,
                t && t(n.price, e)
            }
            )).fail((function(e, i) {
                i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd),
                n.price = null,
                t && t(null, null)
            }
            )).send()
        },
        isBidValid: function(t) {
            var e = this.parseAssets(AdTrack.Utils.deepAccess(t, "native.assets"));
            if (!e.title || !e.description || !e.image || "object" != typeof e.image)
                return this.track.doError("Adform didnt provide either text or image."),
                !1;
            var i = e.image.width
              , n = e.image.height;
            return !!(i >= 100 && n >= 100 && i / n >= 1) || (this.track.doError("Adform native - image has invalid dimension [" + i + ", " + n + "]", "debug"),
            !1)
        },
        isAdValidForRender: function(t, e) {
            var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions
              , n = t.title.length
              , r = t.description.length
              , s = t.image.width
              , o = t.image.height
              , a = s / o;
            if (i) {
                var d = i.maxTitleLength || i.maxTextLength
                  , c = i.maxDescLength || i.maxTextLength;
                if (n > 80 && !d)
                    return this.track.doError("Adform native - possible title overflow (" + n + "), style: " + e.name, "debug"),
                    !1;
                if (r > 150 && !c)
                    return this.track.doError("Adform native - possible description overflow (" + r + "), style: " + e.name, "debug"),
                    !1;
                if (i.imgWidth && i.imgHeight) {
                    var h = i.imgWidth
                      , l = i.imgHeight
                      , u = h / l;
                    if (!(u < 1.5 ? a >= u / 1.1 && a <= u / .9 : a >= u / 1.15 && a <= u / .85))
                        return this.track.doError("Adform native - image not optimal, img [" + s + ", " + o + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"),
                        !1
                }
            } else
                this.track.doError("No native options included, style: " + e.name);
            return !0
        },
        render: function(t, e) {
            var i = this.track.getChannelKey(this.chd, e ? e.normal : null);
            if (i) {
                var n = function(i) {
                    if (i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
                        var n = i.seatbid[0].bid[0];
                        !0 === this.processResult(n, t, e ? e.normal : null) ? this.track.loaded(this.definition, this.chd, 1, e ? e.normal : null, null) : this.track.passback(this.definition, this.chd)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                    n(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        },
        parseAssets: function(t) {
            var e = {};
            try {
                t.forEach((function(t) {
                    var i = {
                        0: "title",
                        1: "data",
                        2: "img",
                        3: "img",
                        4: "data",
                        5: "data"
                    }[t.id]
                      , n = {
                        0: "title",
                        1: "cta",
                        2: "favicon",
                        3: "image",
                        4: "description",
                        5: "advertiser"
                    }[t.id]
                      , r = t[i];
                    r && (e[n] = r.text || r.value || {
                        url: r.url,
                        width: r.w,
                        height: r.h
                    })
                }
                ))
            } catch (t) {}
            return e
        },
        processResult: function(t, e, i) {
            var n = t ? t.native : null;
            if (!n || !n.assets || !n.link)
                return !1;
            var r = new AdTrack.AdSet;
            r.setStyle(i);
            var s = new AdTrack.AdChoices;
            s.setPromoClickUrl(this.chd.url),
            s.setPromoText(this.chd.title),
            s.setOptional(!0),
            r.addAdChoices(s);
            var o = new AdTrack.TextAd
              , a = n.link
              , d = n.imptrackers || void 0
              , c = this.parseAssets(n.assets);
            if (!this.isAdValidForRender(c, i))
                return !1;
            var h = c.image
              , l = c.favicon;
            o.addText(c.title, c.description),
            h && o.addScreenshot(h.url, h.width, h.height, h.url);
            var u = c.cta ? c.cta : "Navštívit stránku"
              , p = c.advertiser ? c.advertiser : ""
              , f = "";
            l && l.url && (f = l.url);
            var g = !0 === this.definition.test ? "" : a.url;
            return o.setClickUrl(g),
            o.setVisibleUrl(""),
            o.setAdUrl(""),
            o.setCta(u),
            o.setFavicon(f),
            o.setCompanyName(p),
            o.done(),
            r.addAd(new AdTrack.AdformAd(r,o)),
            new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, r),
            d && d.forEach((function(t) {
                (new Image).src = t
            }
            )),
            !0
        },
        createData: function(t) {
            var e = AdTrack.Utils.uuid()
              , i = AdTrack.Utils.uuid()
              , n = {}
              , r = {}
              , s = null;
            AdTrack.CMP && (s = AdTrack.CMP.getConsentData(this.track.cmpFallback, this.track.cookiesEnabled)),
            s && (this.track.evBidConsent(this.definition, this.chd),
            n.ext = {
                consent: s.consentString ? s.consentString : ""
            },
            r.ext = {
                gdpr: s.gdprApplies ? 1 : 0
            });
            var o = {
                id: e,
                cur: ["EUR"],
                device: {
                    ua: navigator.userAgent
                },
                site: {
                    page: AdTrack.url
                },
                ext: {},
                imp: [{
                    id: Math.floor(1e6 * Math.random()),
                    tagid: "" + t,
                    native: {
                        request: {
                            assets: [{
                                required: 1,
                                id: 3,
                                img: {
                                    wmin: 1,
                                    hmin: 1,
                                    type: 3
                                }
                            }, {
                                required: 0,
                                id: 2,
                                img: {
                                    wmin: 1,
                                    hmin: 1,
                                    type: 1
                                }
                            }, {
                                required: 1,
                                id: 0,
                                title: {
                                    len: 300
                                }
                            }, {
                                required: 1,
                                id: 4,
                                data: {
                                    type: 2
                                }
                            }, {
                                required: 0,
                                id: 5,
                                data: {
                                    type: 1
                                }
                            }, {
                                required: 0,
                                id: 1,
                                data: {
                                    type: 12
                                }
                            }]
                        }
                    }
                }],
                source: {
                    tid: i,
                    fd: 1
                },
                user: n,
                regs: r
            };
            return o
        }
    }
}
, function(t, e) {
    AdTrack.AdformHbbtvChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.price = null,
        this.response = null,
        this.helper = new AdTrack.AdformHelper(t,e,i),
        this.bidResponse = new AdTrack.Bid
    }
    ,
    AdTrack.AdformHbbtvChannel.prototype = {
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, this.helper.OUTDOOR, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e) {
            this.container = t,
            e = e && e.normal ? e.normal : null;
            var i = this.track.getChannelKey(this.chd, e);
            if (i) {
                var n = AdTrack.Utils.objectValues(this.definition.options.blackListedBNs)
                  , r = function(r) {
                    var s = r[0];
                    if (s && s.outdoor) {
                        if (this.helper.isBlacklisted(s.outdoor.url, n) && (s.outdoor.clk = null),
                        !this.definition.options.dom.noContainer) {
                            var o = this.track.window.document.createElement("img");
                            if (o.setAttribute("src", s.outdoor.url),
                            o.setAttribute("alt", ""),
                            null !== s.outdoor.clk) {
                                var a = this.track.window.document.createElement("a");
                                if (this.definition.options.clickProxy) {
                                    var d = (window.location && "https:" === window.location.protocol ? "https:" : "http:") + "//" + this.track.server + "/clickProxy.php?" + AdTrack.Utils.uri("url", s.outdoor.clk) + "&" + AdTrack.Utils.uri("u", AdTrack.url) + "&" + AdTrack.Utils.uri("key", i) + "&" + AdTrack.Utils.uri("style", e.name) + "&" + this.track.reportMethod.doP(this.definition, this.chd);
                                    a.setAttribute("href", d)
                                } else
                                    a.setAttribute("href", s.outdoor.clk),
                                    this.track.setOnclick([a], function(t) {
                                        this.track.evClick(this.definition, this.chd, void 0, null, null, null, null, e)
                                    }
                                    .bind(this), this.definition.options.newwindow);
                                a.appendChild(o),
                                this.container.appendChild(a)
                            } else
                                this.container.appendChild(o)
                        }
                        (new Image).src = s.outdoor.imp,
                        this.track.loaded(this.definition, this.chd, 1, e, r)
                    } else
                        this.chd.html5 && s && "banner" === s.response ? this.adformRender(t, s, e) : this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        },
        adformRender: function(t, e, i) {
            this.chd.width = e.width,
            this.chd.height = e.height;
            var n = this.track.document.createElement("div");
            n.id = "AdTrackIframeWrap",
            t.appendChild(n);
            var r = function() {
                this.track.evClick(this.definition, this.chd, void 0, null, null, null, null, i)
            }
            .bind(this);
            if (e.banner.match(/^<iframe/i))
                AdTrack.iframeCreator.factory.createIframeFromHTML(t, e.banner, r);
            else {
                var s = "<html><head></head><body>" + e.banner + "</body></html>";
                AdTrack.iframeCreator.factory.createIframeWithContent(t, e.width, e.height, window.location.href, s, r)
            }
            this.track.loaded(this.definition, this.chd, 1, i, null)
        }
    }
}
, function(t, e) {
    AdTrack.AdformJS3rdChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.price = null,
        this.response = null,
        this.helper = new AdTrack.AdformHelper(t,e,i),
        this.bidResponse = new AdTrack.Bid
    }
    ,
    AdTrack.AdformJS3rdChannel.prototype = {
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, this.helper.OUTDOOR, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e) {
            var i = this.track.getChannelKey(this.chd, e);
            if (i) {
                var n = AdTrack.Utils.objectValues(this.definition.options.blackListedBNs)
                  , r = function(t) {
                    var e = t[0];
                    e && e.outdoor ? (this.helper.isBlacklisted(e.outdoor.url, n) && (e.outdoor.clk = null),
                    (new Image).src = e.outdoor.imp,
                    this.track.loaded(this.definition, this.chd, 1, null, t)) : this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.AdformJSVideChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.adformUtils = new AdTrack._AdFormUtils,
        this.price = null,
        this.response = null,
        this.helper = new AdTrack.AdformHelper(t,e,i),
        this.trackadProxyUrl = "http://" + this.track.server + "/video/proxy.php",
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.AdformJSVideChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, this.helper.VAST, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            try {
                var n = this.track.getChannelKey(this.chd, e);
                if (n) {
                    var r = function(t) {
                        var e = t[0];
                        if (e && e.response) {
                            if (this.adData = e[e.response],
                            this.definition.options.videoProxy && e.vast_url) {
                                var n, r = e.vast_url;
                                null !== (n = /bn=([0-9]+)/.exec(r)) && n[1] && (e.vast_url = this.trackadProxyUrl + "?v=" + encodeURIComponent(e.vast_url) + "&bn=" + encodeURIComponent(n[1]))
                            }
                            if (e.vast_content && this.definition.options.vastUrl) {
                                var s = "rid" + Math.round(1e7 * Math.random())
                                  , o = {
                                    vast: e.vast_content,
                                    rid: s
                                }
                                  , a = this
                                  , d = this.adformUtils.b2a(AdTrack.Utils.json2Url(o)).replace(/=+$/, "");
                                AdTrack.Ajax.request({
                                    label: "Adform video bid",
                                    url: "http://" + this.track.server + "/vast.php",
                                    method: "get",
                                    data: {
                                        v: 6,
                                        x: d
                                    }
                                }, this.track.errorReporting).done((function(n) {
                                    e.vast_url = "http://" + a.track.server + "/vast.php?v=7&rid=" + s,
                                    e.response = "vast_url";
                                    var r = AdTrack.MediaTypes.createVideoSettings(a.track, a.chd, e[e.response], e.response);
                                    r.externalRender = !0;
                                    var o = new AdTrack.MediaTypes.Video(r,a.track.errorReporting);
                                    o.passResponse(t),
                                    i(o)
                                }
                                )).fail((function(t, e) {
                                    a.track.passback(a.definition, a.chd)
                                }
                                )).send()
                            } else if (this.definition.options.player && "default" === this.definition.options.player.type) {
                                var c = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e[e.response], e.response)
                                  , h = new AdTrack.MediaTypes.Video(c,this.track.errorReporting);
                                i(h)
                            }
                        } else
                            this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                        r(e)
                    }
                    ), n)
                } else
                    this.track.doError("Undefined key")
            } catch (t) {
                this.track.doError("Render exception: " + t.toString())
            }
        }
    }
}
, function(t, e) {
    AdTrack.AppNexusChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.id = "AdTrack_" + t.type + "_" + t.domain + "_" + t.group + "_" + t.position,
        this.price = null,
        this.response = null,
        this.style = null,
        this.bidResponse = new AdTrack.Bid,
        this.channelName = -1 !== this.chd.tag.indexOf("xandr") ? "xandr" : "appnexus",
        this.external = this.chd.accountId && this.chd.accountId !== AdTrack.Config.getAccountId(this.channelName),
        this.MTsupport = !0
    }
    ,
    AdTrack.AppNexusChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = this.chd.accountId || AdTrack.Config.getAccountId(this.channelName);
            if (i) {
                var n = "//ib.adnxs.com"
                  , r = this.createData(e, i);
                if (AdTrack.CMP) {
                    var s = AdTrack.CMP.getConsentData("never", !1);
                    s && (this.track.evBidConsent(this.definition, this.chd),
                    r.gdpr_consent.consent_string = s.consentString ? s.consentString : "",
                    r.gdpr_consent.consent_required = !!s.gdprApplies,
                    s.purpose && s.purpose.consents && "boolean" == typeof s.purpose.consents[1] && !1 === s.purpose.consents[1] && (n = "//ib.adnxs-simple.com"))
                }
                var o = this;
                AdTrack.Ajax.request({
                    label: "Appnexus/Xandr bid",
                    url: n + "/ut/v3/prebid",
                    method: "POST",
                    data: JSON.stringify(r),
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this)
                }, this.track.errorReporting).done((function(e) {
                    if (e && e.tags && e.tags[0]) {
                        var i = e.tags[0].ads ? e.tags[0].ads[0] : e.tags[0].ad;
                        if (i && i.cpm) {
                            if (o.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD, null),
                            o.bidResponse.setPrice(o.price),
                            o.bidResponse.setCreativeId(i.creative_id),
                            "banner" === i.ad_type) {
                                var n = i.content_source;
                                if (n && i[n] && i[n][i.ad_type]) {
                                    var r = i[n][i.ad_type].content
                                      , s = AdTrack.Utils.isBlackListedAds(r);
                                    !1 === s ? (o.bidResponse.setWidth(i[n][i.ad_type] ? i[n][i.ad_type].width : o.chd.width),
                                    o.bidResponse.setHeight(i[n][i.ad_type] ? i[n][i.ad_type].height : o.chd.height)) : (o.track.doError("Blocked appnexus-xhr (" + o.chd.tag + ") creative (" + i.creative_id + ") by advertiser (" + i.advertiser_id + ") from " + s, "info"),
                                    o.chd.logs && o.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(o.track.server, o.chd.logs.blocked_creative, o.chd.tag, i.creative_id || "", i.deal_id || "", i.cpm, r),
                                    o.price = null)
                                }
                            }
                        } else
                            o.price = null
                    } else
                        e && e.error && e.error.match("no bids"),
                        o.price = null;
                    o.response = e,
                    t && t(o.price, e)
                }
                )).fail((function(e, i) {
                    i ? o.track.evBidTimeout(o.definition, o.chd) : o.track.evBidError(o.definition, o.chd),
                    o.price = null,
                    t && t(null, null)
                }
                )).send()
            } else
                this.track.doError("MemberId not defined. " + this.chd.tag)
        },
        render: function(t, e, i) {
            e = e ? e.normal : null;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.tags && t.tags[0]) {
                        var n = t.tags[0].ads ? t.tags[0].ads[0] : t.tags[0].ad;
                        if (n) {
                            var r = n.content_source
                              , s = n.ad_type;
                            if (r && n[r] && n[r][s]) {
                                var o = n[r][s];
                                this.adData = o.content,
                                this.chd.width = this.bidResponse.getDimension().width,
                                this.chd.height = this.bidResponse.getDimension().height;
                                var a = [];
                                try {
                                    var d = n[r].trackers[0].impression_urls[0];
                                    a.push(d)
                                } catch (t) {}
                                if ("banner" === s) {
                                    var c = {
                                        chd: this.chd,
                                        width: this.bidResponse.getDimension().width,
                                        height: this.bidResponse.getDimension().height,
                                        ad: {
                                            data: o.content,
                                            type: "content"
                                        },
                                        impTrackers: a
                                    }
                                      , h = new AdTrack.MediaTypes.Banner(c,this.track.errorReporting);
                                    i(h)
                                } else if ("video" === s)
                                    if (this.definition.options.player && "default" === this.definition.options.player.type) {
                                        var l = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, o.content, "vast_content");
                                        l.impTrackers = a;
                                        var u = new AdTrack.MediaTypes.Video(l,this.track.errorReporting);
                                        i(u)
                                    } else
                                        this.track.doError(this.chd.tag + ": Not supported outstream without default player type");
                                else if ("native" === s) {
                                    this.adData = o;
                                    var p = null;
                                    o.main_img && (p = {
                                        url: o.main_img.url,
                                        w: o.main_img.width,
                                        h: o.main_img.height
                                    });
                                    var f = null;
                                    if (o.icon && (f = {
                                        url: o.icon.url,
                                        w: o.icon.width,
                                        h: o.icon.height
                                    }),
                                    p && o.title) {
                                        var g = new AdTrack.AdSet;
                                        g.setStyle(e);
                                        var m = new AdTrack.AdChoices
                                          , k = o.privacy_link || this.chd.url;
                                        m.setPromoClickUrl(k),
                                        m.setPromoText(this.chd.title),
                                        m.setOptional(!0),
                                        g.addAdChoices(m);
                                        var v = new AdTrack.TextAd
                                          , b = o.ctatext || "Navštívit stránku"
                                          , y = o.link.url;
                                        v.addScreenshot(p.url, p.w, p.h),
                                        v.addText(o.title, o.desc || ""),
                                        o.desc2 && v.addText(o.title, o.desc2),
                                        v.setCompanyName(o.sponsored),
                                        v.setVisibleUrl(o.displayurl),
                                        f && v.setFavicon(f.url),
                                        v.setClickTrackers(o.link.click_trackers),
                                        v.setClickUrl(y),
                                        v.setAdUrl(y),
                                        v.setCta(b),
                                        v.done(),
                                        g.addAd(new AdTrack.AppnexusAd(g,v));
                                        var A = new AdTrack.TextChannel(this.track,this.definition,this.chd)
                                          , T = {
                                            chd: this.chd,
                                            ad: {
                                                type: "tcproxy",
                                                data: {
                                                    adSet: g,
                                                    tc: A
                                                }
                                            },
                                            style: e,
                                            count: 1,
                                            impTrackers: o.impression_trackers,
                                            jsTrackers: o.javascriptTrackers
                                        }
                                          , w = new AdTrack.MediaTypes.Native(T,this.track.errorReporting);
                                        i(w)
                                    } else
                                        this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!p + "|title:" + !!o.title + ")"),
                                        this.track.passback(this.definition, this.chd)
                                } else
                                    this.track.doError(this.chd.tag + ": Not supported ad_type: " + s),
                                    this.track.passback(this.definition, this.chd)
                            } else
                                this.track.doError(this.chd.tag + ": Cant find ad"),
                                this.track.passback(this.definition, this.chd)
                        } else
                            this.track.passback(this.definition, this.chd)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t, e) {
            for (var i = {
                width: this.chd.width,
                height: this.chd.height
            }, n = [i], r = this.chd.sizes ? this.chd.sizes : [], s = 0; s < r.length; s++)
                2 === r[s].length && n.push({
                    width: r[s][0],
                    height: r[s][1]
                });
            var o = AdTrack.Utils.simpleStringGenerator(32)
              , a = {
                uuid: AdTrack.Utils.simpleStringGenerator(32),
                member_id: e,
                tags: [{
                    uuid: o,
                    id: Number(t),
                    prebid: !0,
                    primary_size: i,
                    sizes: n,
                    allow_smaller_sizes: !1
                }],
                gdpr_consent: {},
                user: {},
                sdk: {
                    source: "pbjs",
                    version: ""
                },
                referrer_detection: {
                    rd_ref: AdTrack.url,
                    rd_top: !!AdTrack.Utils.windowTopAccess()
                }
            };
            if ("xandr" === this.channelName && !this.external) {
                var d = this.track.getSupplyChain();
                d && (a.schain = d)
            }
            if ("xandr-native" === this.chd.tag && (a.ad_types = ["native"],
            a.native = {
                layouts: [{
                    title: {
                        required: !0,
                        len: 140
                    },
                    description: {
                        required: !0
                    },
                    main_image: {
                        required: !0
                    },
                    sponsored_by: {
                        required: !0
                    },
                    icon: {
                        required: !1
                    },
                    ctatext: {
                        required: !1
                    },
                    privacy_supported: !0
                }]
            }),
            AdTrack.UserID) {
                var c = AdTrack.UserID.getAllUserIdsAsEids();
                c.length && (a.eids = c)
            }
            return a
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.BetweenHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.style = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0,
        this.chd.sizes ? (this.sizes = this.chd.sizes,
        this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]],
        this.track.shouldCsync("between") && setTimeout(function() {
            AdTrack.BetweenCSync()
        }
        .bind(this), 5e3)
    }
    ,
    AdTrack.BetweenHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = this.createData(e)
              , n = this;
            AdTrack.Ajax.request({
                label: "Between bid",
                url: "https://ads.betweendigital.com/adjson?" + i,
                method: "GET",
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this),
                withCredentials: !0
            }, this.track.errorReporting).done((function(e) {
                if (e && e[0] && e[0].cpm && e[0].ad) {
                    var i = e[0];
                    i.currency && i.currency === AdTrack.Price.USD ? (n.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD, null),
                    n.bidResponse.setPrice(n.price),
                    n.bidResponse.setCreativeId(i.creativeid),
                    n.bidResponse.setWidth(i.w ? i.w : n.chd.width),
                    n.bidResponse.setHeight(i.h ? i.h : n.chd.height)) : n.track.doError("Channel " + n.chd.tag + " responsed with wrong currency: " + i.currency)
                } else
                    n.price = null;
                n.response = e,
                t && t(n.price, e)
            }
            )).fail((function(e, i) {
                i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd),
                n.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t[0] && t[0].cpm && t[0].ad) {
                        var e = t[0];
                        this.adData = e.ad,
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var n = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: e.ad,
                                type: "content"
                            }
                        }
                          , r = new AdTrack.MediaTypes.Banner(n,this.track.errorReporting);
                        i(r)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t) {
            var e = AdTrack.Utils.simpleStringGenerator(14)
              , i = AdTrack.Utils.simpleStringGenerator(14)
              , n = AdTrack.Utils.simpleStringGenerator(14)
              , r = new Date
              , s = [];
            for (let t = 0; t < this.sizes.length; t++) {
                const e = this.sizes[t];
                s.push(e[0] + "x" + e[1])
            }
            var o = ["sizes=" + s.join("%2C"), "jst=hb", "s=" + encodeURIComponent(t), "cur=USD", "ord=" + 1e16 * Math.random(), "tz=" + encodeURIComponent(r.getTimezoneOffset()), "fl=0", "rr=" + encodeURIComponent(this.getRr()), "bidid=" + encodeURIComponent(e), "transactionid=" + encodeURIComponent(n), "auctionid=" + encodeURIComponent(i)];
            if (AdTrack.CMP)
                var a = AdTrack.CMP.getConsentData("never", !1);
            return a && (this.track.evBidConsent(this.definition, this.chd),
            void 0 !== a.gdprApplies && o.push("gdprApplies=" + encodeURIComponent(!!a.gdprApplies)),
            void 0 !== a.consentString && o.push("consentString=" + encodeURIComponent(a.consentString))),
            o.join("&")
        },
        getRr: function() {
            try {
                var t = top.document.referrer
            } catch (t) {
                return !1
            }
            return void 0 !== t && t.length > 0 ? encodeURIComponent(t) : void 0 !== t && "" == t ? "direct" : void 0
        }
    },
    AdTrack.BetweenCSync = AdTrack.BetweenCSync || (i = !1,
    function() {
        i || (AdTrack.Utils.csyncFrame("https://ads.betweendigital.com/sspmatch-iframe"),
        i = !0)
    }
    )
}
, function(t, e) {
    var i;
    AdTrack.ConnectAdChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.track.shouldCsync("connectad") && setTimeout(function() {
            var t = {};
            AdTrack.CMP && (t = AdTrack.CMP.getConsentData("never", !1)),
            AdTrack.ConnectadCSync(t)
        }
        .bind(this), 5e3),
        this.bidId = Math.floor(1e14 * Math.random()),
        this.transactionId = AdTrack.Utils.uuid(),
        this.sizeMap = {
            "120x90": 1,
            "468x60": 3,
            "728x90": 4,
            "300x250": 5,
            "160x600": 6,
            "120x600": 7,
            "300x100": 8,
            "180x150": 9,
            "336x280": 10,
            "240x400": 11,
            "234x60": 12,
            "88x31": 13,
            "120x60": 14,
            "120x240": 15,
            "125x125": 16,
            "220x250": 17,
            "250x250": 18,
            "250x90": 19,
            "0x0": 20,
            "200x90": 21,
            "300x50": 22,
            "320x50": 23,
            "320x480": 24,
            "185x185": 25,
            "620x45": 26,
            "300x125": 27,
            "800x250": 28,
            "300x600": 43,
            "970x90": 77,
            "970x250": 123,
            "970x66": 286,
            "970x280": 3230,
            "486x60": 429,
            "700x500": 374,
            "300x1050": 934,
            "320x100": 1578,
            "320x250": 331,
            "320x267": 3301,
            "728x250": 2730
        },
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.ConnectAdChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = "" + e
              , n = this.chd.width + "x" + this.chd.height
              , r = this.sizeMap[n];
            if (!r)
                return this.track.doError("Unsupported dimension (" + n + ") in connectad adapter"),
                void (t && t(null, null));
            for (var s = this.chd.sizes ? this.chd.sizes : [], o = [r], a = 0; a < s.length; a++) {
                var d = s[a][0] + "x" + s[a][1]
                  , c = this.sizeMap[d];
                c ? o.push(c) : this.track.doError("Unsupported dimension (" + d + ") in connectad adapter")
            }
            var h = {
                id: this.transactionId,
                divName: this.bidId,
                adTypes: o,
                sizes: [[this.chd.width, this.chd.height]].concat(s),
                networkId: "10047",
                siteId: i,
                floorprice: this.chd.bidFloor
            }
              , l = {}
              , u = null;
            if (AdTrack.CMP && (u = AdTrack.CMP.getConsentData("never", !1)),
            u ? (this.track.evBidConsent(this.definition, this.chd),
            l.ext = {
                consent: u.consentString ? u.consentString : "",
                gdpr: u.gdprApplies ? 1 : 0
            }) : l.ext = {
                gdpr: 1
            },
            AdTrack.UserID) {
                var p = AdTrack.UserID.getAllUserIdsAsEids();
                p && (l.ext.eids = p)
            }
            var f = {
                enableBotFiltering: !0,
                includePricingData: !0,
                placements: [h],
                referrer: document.referrer,
                screensize: [window.screen.width, window.screen.height].join("x"),
                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                language: navigator.language,
                ua: navigator.userAgent,
                time: Date.now(),
                url: AdTrack.url,
                user: l
            }
              , g = this.track.getSupplyChain();
            g && (f.source = {
                ext: {
                    schain: g
                }
            });
            var m = this;
            AdTrack.Ajax.request({
                label: "Connectad bid",
                url: "//i.connectad.io/api/v2",
                method: "POST",
                data: JSON.stringify(f),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {
                    "Content-type": "application/json"
                },
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e.decisions && e.decisions[m.bidId]) {
                    var i = e.decisions[m.bidId]
                      , n = i.pricing && i.pricing.clearPrice ? i.pricing.clearPrice : null
                      , r = 0 != i.creativeId ? i.creativeId : i.adId;
                    m.price = n ? AdTrack.Price.create(n, AdTrack.Price.USD) : null,
                    m.bidResponse.setCreativeId(r),
                    m.bidResponse.setPrice(m.price);
                    var s = i.contents && i.contents[0] ? i.contents[0] : null;
                    if (s) {
                        var o = AdTrack.Utils.isBlackListedAds(s.body);
                        !1 === o ? (m.bidResponse.setWidth(s.width || s.data.width),
                        m.bidResponse.setHeight(s.height || s.data.height)) : (m.track.doError("Blocked connectad creative from " + o + " with id " + i.creativeId, "info"),
                        m.chd.logs && m.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(m.track.server, m.chd.logs.blocked_creative, m.chd.tag, r || "", "", n, s.body),
                        e = null,
                        m.price = null)
                    }
                } else
                    m.price = null;
                m.response = e,
                t && t(m.price, e)
            }
            )).fail((function(e, i) {
                i ? m.track.evBidTimeout(m.definition, m.chd) : m.track.evBidError(m.definition, m.chd),
                m.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t.decisions && t.decisions[this.bidId]) {
                        var e = t.decisions[this.bidId]
                          , n = e.contents && e.contents[0] ? e.contents[0] : null;
                        if (n && n.body) {
                            this.adData = n.body,
                            this.chd.width = this.bidResponse.getDimension().width,
                            this.chd.height = this.bidResponse.getDimension().height;
                            var r = {
                                chd: this.chd,
                                width: this.bidResponse.getDimension().width,
                                height: this.bidResponse.getDimension().height,
                                ad: {
                                    data: n.body,
                                    type: "content"
                                },
                                impTrackers: [e.impressionUrl]
                            }
                              , s = new AdTrack.MediaTypes.Banner(r,this.track.errorReporting);
                            i(s)
                        } else
                            this.track.doError("Invalid response in " + this.chd.tag)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    },
    AdTrack.ConnectadCSync = AdTrack.ConnectadCSync || (i = !1,
    function(t) {
        if (!i) {
            var e = [];
            if (t) {
                e.push("gdpr=" + encodeURIComponent(t.gdprApplies ? 1 : 0)),
                e.push("gdpr_consent=" + encodeURIComponent(t.consentString ? t.consentString : ""));
                var n = "https://cdn.connectad.io/connectmyusers.php?" + e.join("&");
                AdTrack.Utils.csyncFrame(n),
                i = !0
            }
        }
    }
    )
}
, function(t, e) {
    AdTrack.CriteoHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.CriteoHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        profiling: function(t) {
            this.track.evProfiling("Criteo-HB-3 " + t)
        },
        bid: function(t, e) {
            this.profiling("bid start"),
            window.Criteo = window.Criteo || {},
            window.Criteo.events = window.Criteo.events || [];
            var i = this.createPlacement(e)
              , n = null;
            if (!i.zoneid) {
                n = AdTrack.Config.getAccountId("criteo");
                var r = [];
                this.chd.width && this.chd.height && r.push(this.chd.width + "x" + this.chd.height),
                this.chd.sizes && this.chd.sizes.length > 0 && this.chd.sizes.forEach((function(t) {
                    2 === t.length && r.push(t[0] + "x" + t[1])
                }
                )),
                i.sizes = r
            }
            if (!i)
                return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"),
                void (t && t(this.price, this.response));
            var s = function() {
                var e = {
                    placements: [i]
                };
                n && (e.networkId = n),
                "function" == typeof Criteo.RequestBids ? (this.profiling("bid request"),
                Criteo.RequestBids(e, this.onResponse(e, t), this.chd.timeout || 1500)) : t && t(this.price, this.response)
            }
            .bind(this);
            window.Criteo.events && "function" == typeof window.Criteo.events.push ? window.Criteo.events.push(s) : t && t(this.price, this.response)
        },
        render: function(t, e, i) {
            this.container = t,
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.displayUrl) {
                        var e = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: "<html><head></head><body><script src='" + this.response.displayUrl + "'><\/script></body></html>",
                                type: "content"
                            }
                        };
                        this.adData = e.ad.data;
                        var n = new AdTrack.MediaTypes.Banner(e,this.track.errorReporting);
                        i(n)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        onResponse: function(t, e) {
            return function(t) {
                this.profiling("bid response");
                var i = null;
                if (t && t.length > 0) {
                    i = t[0],
                    this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR),
                    this.bidResponse.setPrice(this.price);
                    var n = i.width || this.chd.width
                      , r = i.height || this.chd.height;
                    this.bidResponse.setWidth(n),
                    this.bidResponse.setHeight(r)
                } else
                    this.price = null;
                this.response = i,
                e && e(this.price, i)
            }
            .bind(this)
        },
        createPlacement: function(t) {
            if (t) {
                var e = ""
                  , i = ""
                  , n = (t = "" + t).indexOf("-");
                if (n < 0 ? isNaN(t) ? i = t : e = t : (e = t.substr(0, n),
                i = t.substr(n + 1),
                isNaN(e) && (e = "",
                i = t)),
                !e && !i)
                    return null;
                var r = {
                    slotid: "ad-" + (e ? "-" + e : "") + (i ? "-" + i : "")
                };
                return e && (r.zoneid = e),
                i && (r.publisherSubid = i),
                r
            }
            return null
        }
    }
}
, function(t, e) {
    AdTrack.CriteoHBNativeChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null
    }
    ,
    AdTrack.CriteoHBNativeChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            window.Criteo = window.Criteo || {},
            window.Criteo.events = window.Criteo.events || [];
            var i = this.createPlacement(e);
            if (!i)
                return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"),
                void (t && t(this.price, this.response));
            var n = function() {
                var e = {
                    placements: [i]
                };
                "function" == typeof Criteo.RequestBids ? Criteo.RequestBids(e, this.onResponse(e, t), this.chd.timeout || 1500) : t && t(this.price, this.response)
            }
            .bind(this);
            window.Criteo.events && "function" == typeof window.Criteo.events.push ? window.Criteo.events.push(n) : t && t(this.price, this.response)
        },
        render: function(t, e) {
            if (this.container = t,
            null != (e = e && e.product ? e.product : null)) {
                var i = this.track.getChannelKey(this.chd, e);
                if (i) {
                    var n = function(i) {
                        i && i.nativeCallback && i.nativePayload ? i.nativeCallback(t, e, i.nativePayload) : this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                        n(e)
                    }
                    ), i)
                } else
                    this.track.doError("Undefined key")
            } else
                this.track.doError("Undefined product style for " + this.chd.tag),
                this.track.passback(this.definition, this.chd)
        },
        onResponse: function(t, e) {
            return function(t) {
                var i = null;
                t && t.length > 0 ? (i = t[0],
                this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR)) : this.price = null,
                this.response = i,
                e && e(this.price, i)
            }
            .bind(this)
        },
        nativeCallback: function(t, e, i) {
            if (this.adData = i,
            i.products) {
                var n = new AdTrack.AdSet;
                n.setStyle(e);
                var r = i.advertiser
                  , s = new AdTrack.Shop;
                s.setShopLogo(r.logo.url),
                s.setShopUrl(r.logo_click_url),
                s.setShopName(r.description),
                s.setCleanShopUrl(r.domain),
                n.addShop(s);
                for (var o = i.products, a = 0; a < o.length; a++) {
                    var d = o[a]
                      , c = new AdTrack.ProductAd;
                    if (!d.image.url || !d.title)
                        return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!d.image.url + "|title:" + !!d.title + ")"),
                        void this.track.passback(this.definition, this.chd);
                    c.setClickUrl(d.click_url),
                    c.setProductName(d.title);
                    var h = d.description;
                    h && h.length > 0 && (h = h[0].toUpperCase() + h.slice(1)),
                    c.setProductDescription(h),
                    d.price && c.setProductPrice(d.price),
                    c.addScreenshot(d.image.url, 0, 0),
                    c.done(),
                    n.addAd(new AdTrack.CriteoProductAd(n,c))
                }
                this.chd.url = i.privacy.optout_click_url,
                this.chd.icon = i.privacy.optout_image_url;
                var l = new AdTrack.AdChoices;
                l.setPromoClickUrl(this.chd.url),
                l.setPromoIcon(this.chd.icon),
                l.setPromoText(this.chd.title),
                l.setOptional(!1),
                n.addAdChoices(l),
                new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(t, n);
                for (var u = i.impression_pixels, p = 0; p < u.length; p++) {
                    var f = u[p]
                      , g = this.track.window.document.createElement("img");
                    g.setAttribute("src", f.url),
                    g.setAttribute("style", "width: 0px; height: 0px; border-style: none; display: none;"),
                    t.appendChild(g)
                }
                this.track.loaded(this.definition, this.chd, o.length, e, null)
            } else
                this.track.passback(this.definition, this.chd)
        },
        createPlacement: function(t) {
            if (t) {
                var e = ""
                  , i = ""
                  , n = (t = "" + t).indexOf("-");
                if (n < 0) {
                    if (!(e = t))
                        return null
                } else if (e = t.substr(0, n),
                i = t.substr(n + 1),
                !e || !i)
                    return null;
                var r = {
                    slotid: "ad-" + e + (i ? "-" + i : ""),
                    zoneid: e,
                    nativeCallback: this.nativeCallback.bind(this)
                };
                return i && (r.publisherSubid = i),
                r
            }
            return null
        }
    }
}
, function(t, e) {
    AdTrack.CriteoHBXHRChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.CriteoHBXHRChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        profiling: function(t) {
            this.track.evProfiling("Criteo-HB-XHR " + t)
        },
        bid: function(t, e) {
            this.profiling("bid start");
            var i = [];
            this.chd.width && this.chd.height && i.push(this.chd.width + "x" + this.chd.height),
            this.chd.sizes && this.chd.sizes.length > 0 && this.chd.sizes.forEach((function(t) {
                2 === t.length && i.push(t[0] + "x" + t[1])
            }
            ));
            var n = {};
            AdTrack.CMP && (n = AdTrack.CMP.getConsentData("never", !1));
            var r = AdTrack.Criteo.buildContext(n)
              , s = AdTrack.Criteo.buildCdbUrl(r);
            "classic_centrum.cz_email_300x600" === this.track.unitID.getName() && (s = AdTrack.Criteo.buildStandardCdbUrl());
            var o = AdTrack.Criteo.buildCdbData(r, e, i, !1);
            if (!o)
                return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"),
                void (t && t(this.price, this.response));
            var a = JSON.stringify(o);
            try {
                var d;
                if ("classic_lidovky.cz_hb-premium_300x600" === this.track.unitID.getName())
                    if (e.match(/300x600/))
                        o.slots[0].impid.match(/300x600/) ? a.match(/impid":"[^"]*300x600/) ? a.match(/publishersubid":"[^"]*300x600/) || (d = a.match(/publishersubid":"[^"]*"/),
                        this.track.doError("Corrupt criteo publishersubid in json string (" + (d && d[1] ? d[1] : "???") + ")", this.track.unitID, "debug")) : (d = a.match(/impid":"([^"]*)"/),
                        this.track.doError("Corrupt criteo impid in json string (" + (d && d[1] ? d[1] : "???") + ")", this.track.unitID, "debug")) : this.track.doError("Corrupt criteo impid " + o.slots[0].impid, this.track.unitID, "debug");
                    else
                        this.definition.waterfall.tiers[0].forEach(function(t) {
                            if (t.chd.tag === this.chd.tag && t.chd.flag === this.chd.flag) {
                                var i = !1;
                                for (var n in t.chd.keys)
                                    if (t.chd.keys.hasOwnProperty(n) && t.chd.keys[n] === e) {
                                        i = !0;
                                        break
                                    }
                                this.track.doError("Corrupt criteo key " + (i ? "(in definition) " : "") + e, this.track.unitID, "debug")
                            }
                        }
                        .bind(this))
            } catch (t) {}
            n && this.track.evBidConsent(this.definition, this.chd);
            var c = this;
            AdTrack.Ajax.request({
                label: "Criteo bid",
                url: s,
                method: "POST",
                data: a,
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 1500,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e && e.slots) {
                    var i = e.slots[0];
                    i ? (c.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR, null),
                    c.bidResponse.setPrice(c.price),
                    c.bidResponse.setWidth(i.width),
                    c.bidResponse.setHeight(i.height)) : c.price = null
                } else
                    c.price = null;
                c.response = e,
                t && t(c.price, e)
            }
            )).fail((function(e, i) {
                i ? c.track.evBidTimeout(c.definition, c.chd) : c.track.evBidError(c.definition, c.chd),
                c.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e, i) {
            this.container = t,
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.slots && t.slots[0]) {
                        var e = t.slots[0];
                        if (e.creative) {
                            var n = {
                                chd: this.chd,
                                width: this.bidResponse.getDimension().width,
                                height: this.bidResponse.getDimension().height,
                                ad: {
                                    data: e.creative,
                                    type: "iframe"
                                }
                            };
                            this.adData = n.ad.data;
                            var r = new AdTrack.MediaTypes.Banner(n,this.track.errorReporting);
                            i(r)
                        } else
                            this.track.passback(this.definition, this.chd)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.CriteoHBXHRNativeChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid
    }
    ,
    AdTrack.CriteoHBXHRNativeChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        profiling: function(t) {
            this.track.evProfiling("Criteo-HB-XHR " + t)
        },
        bid: function(t, e) {
            this.profiling("bid start");
            var i = [];
            this.chd.width && this.chd.height && i.push(this.chd.width + "x" + this.chd.height),
            this.chd.sizes && this.chd.sizes.length > 0 && this.chd.sizes.forEach((function(t) {
                2 === t.length && i.push(t[0] + "x" + t[1])
            }
            ));
            var n = {};
            AdTrack.CMP && (n = AdTrack.CMP.getConsentData("never", !1));
            var r = AdTrack.Criteo.buildContext(n)
              , s = AdTrack.Criteo.buildCdbUrl(r);
            "classic_centrum.cz_email_300x600" === this.track.unitID.getName() && (s = AdTrack.Criteo.buildStandardCdbUrl());
            var o = AdTrack.Criteo.buildCdbData(r, e, i, !0);
            if (!o)
                return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"),
                void (t && t(this.price, this.response));
            n && this.track.evBidConsent(this.definition, this.chd);
            var a = this;
            AdTrack.Ajax.request({
                label: "Criteo native bid",
                url: s,
                method: "POST",
                data: JSON.stringify(o),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 1500,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e && e.slots) {
                    var i = e.slots[0];
                    i ? (a.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR, null),
                    a.bidResponse.setPrice(a.price),
                    a.bidResponse.setWidth(a.chd.width || i.width),
                    a.bidResponse.setHeight(a.chd.height || i.height)) : a.price = null
                } else
                    a.price = null;
                a.response = e,
                t && t(a.price, e)
            }
            )).fail((function(e, i) {
                i ? a.track.evBidTimeout(a.definition, a.chd) : a.track.evBidError(a.definition, a.chd),
                a.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e) {
            if (this.container = t,
            null != (e = e && e.product ? e.product : null)) {
                var i = this.track.getChannelKey(this.chd, e);
                if (i) {
                    var n = function(i) {
                        if (i && i.slots && i.slots[0]) {
                            var n = i.slots[0];
                            n.native && this.nativeCallback(t, e, n.native)
                        } else
                            this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                        n(e)
                    }
                    ), i)
                } else
                    this.track.doError("Undefined key")
            } else
                this.track.doError("Undefined product style for " + this.chd.tag),
                this.track.passback(this.definition, this.chd)
        },
        nativeCallback: function(t, e, i) {
            if (this.adData = i,
            i.products) {
                var n = new AdTrack.AdSet;
                n.setStyle(e);
                var r = i.advertiser
                  , s = new AdTrack.Shop;
                s.setShopLogo(r.logo.url),
                s.setShopUrl(r.logo_click_url),
                s.setShopName(r.description),
                s.setCleanShopUrl(r.domain),
                n.addShop(s);
                for (var o = i.products, a = 0; a < o.length; a++) {
                    var d = o[a]
                      , c = new AdTrack.ProductAd;
                    if (!d.image.url || !d.title)
                        return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!d.image.url + "|title:" + !!d.title + ")"),
                        void this.track.passback(this.definition, this.chd);
                    c.setClickUrl(d.click_url),
                    c.setProductName(d.title);
                    var h = d.description;
                    h && h.length > 0 && (h = h[0].toUpperCase() + h.slice(1)),
                    c.setProductDescription(h),
                    d.price && c.setProductPrice(d.price),
                    c.addScreenshot(d.image.url, 0, 0),
                    c.done(),
                    n.addAd(new AdTrack.CriteoProductAd(n,c))
                }
                this.chd.url = i.privacy.optout_click_url,
                this.chd.icon = i.privacy.optout_image_url;
                var l = new AdTrack.AdChoices;
                l.setPromoClickUrl(this.chd.url),
                l.setPromoIcon(this.chd.icon),
                l.setPromoText(this.chd.title),
                l.setOptional(!1),
                n.addAdChoices(l),
                new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(t, n);
                for (var u = i.impression_pixels, p = 0; p < u.length; p++) {
                    var f = u[p]
                      , g = this.track.window.document.createElement("img");
                    g.setAttribute("src", f.url),
                    g.setAttribute("style", "width: 0px; height: 0px; border-style: none; display: none;"),
                    t.appendChild(g)
                }
                this.track.loaded(this.definition, this.chd, o.length, e, null)
            } else
                this.track.passback(this.definition, this.chd)
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.DecenterAdsHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0,
        this.track.shouldCsync("decenterads") && setTimeout(function() {
            AdTrack.DecenterAdsHBCSync()
        }
        .bind(this), 5e3)
    }
    ,
    AdTrack.DecenterAdsHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            let i = AdTrack.Utils.windowTopAccess() || window;
            var n = {
                deviceWidth: screen.width,
                deviceHeight: screen.height,
                language: AdTrack.Utils.getLanguage(),
                secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
                host: i.location.host,
                page: i.location.pathname,
                ua: navigator.userAgent,
                placements: []
            }
              , r = {};
            AdTrack.CMP && (r = AdTrack.CMP.getConsentData("never", !1)),
            r && r.consentString && (this.track.evBidConsent(this.definition, this.chd),
            n.gdpr = r.gdprApplies ? 1 : 0,
            n.gdpr_consent = r.consentString),
            n.placements.push({
                placementId: Number(e),
                bidId: AdTrack.Utils.randomString("adtrack"),
                traffic: "banner"
            });
            var s = function(e) {
                if (this.response = e,
                e && e[0]) {
                    var i = e[0];
                    i.currency && i.currency === AdTrack.Price.USD ? i.cpm ? (this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD),
                    this.bidResponse.setPrice(this.price),
                    this.bidResponse.setCreativeId(i.creativeId),
                    i.width && i.height ? (this.bidResponse.setWidth(i.width || this.chd.width),
                    this.bidResponse.setHeight(i.height || this.chd.height),
                    t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " - dimensions missing."),
                    t && t(null, null))) : (this.track.doError("Channel " + this.chd.tag + " - price missing or null."),
                    t && t(null, null)) : (this.track.doError("Channel " + this.chd.tag + " responded with wrong currency: " + i.currency),
                    t && t(null, null))
                } else
                    t && t(null, null)
            }
            .bind(this)
              , o = function(e, i) {
                i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd),
                this.price = null,
                t && t(null, null)
            }
            .bind(this);
            AdTrack.Ajax.request({
                label: "DecenterAds bid",
                url: "https://supply.decenterads.com/?c=o&m=multi",
                method: "POST",
                async: !this.definition.options.noAsync,
                json: !0,
                timeout: this.chd.timeout || 800,
                data: JSON.stringify(n),
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(t) {
                s(t)
            }
            )).fail((function(t, e) {
                o(t, e)
            }
            )).send()
        },
        render: function(t, e, i) {
            this.container = t,
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t[0] && t[0].ad) {
                        var e = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: "<html><head></head><body>" + t[0].ad + "</body></html>",
                                type: "content"
                            }
                        };
                        this.adData = e.ad.data;
                        var n = new AdTrack.MediaTypes.Banner(e,this.track.errorReporting);
                        n.on("load", function() {
                            var e = n.getElement();
                            e && AdTrack.Utils.addEvent(e, "load", function() {
                                e.contentDocument.querySelectorAll("img:not([src])").length > 0 && this.track.doError("[" + this.chd.tag + "] Empty creative: '" + t[0].creativeId + "'", "debug")
                            }
                            .bind(this))
                        }
                        .bind(this)),
                        i(n)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    },
    AdTrack.DecenterAdsHBCSync = AdTrack.DecenterAdsHBCSync || (i = !1,
    function() {
        i || ((new Image).src = "https://supply.decenterads.com/?c=o&m=cookie",
        i = !0)
    }
    )
}
, function(t, e) {
    AdTrack.MgidHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.MgidHelper(t,e,i),
        this.MTsupport = !0
    }
    ,
    AdTrack.MgidHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, !1, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
                        var e = t.seatbid[0].bid[0]
                          , n = e.price.toFixed(2);
                        "" != e.nurl && (e.nurl = e.nurl.replace(/\$\{AUCTION_PRICE\}/, n),
                        (new Image).src = e.nurl),
                        "string" == typeof e.burl && e.burl.length > 0 && (e.adm = e.adm.replace(/\$\{AUCTION_PRICE\}/, n)),
                        this.adData = e.adm,
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var r = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: e.adm,
                                type: "content"
                            }
                        }
                          , s = new AdTrack.MediaTypes.Banner(r,this.track.errorReporting);
                        i(s)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.MgidHBNativeChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.floorPrice = null,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.MgidHelper(t,e,i)
    }
    ,
    AdTrack.MgidHBNativeChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, !0, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        setFloorPrice: function(t) {
            this.floorPrice = t,
            this.helper.setFloorPrice(t)
        },
        render: function(t, e) {
            var i = this.track.getChannelKey(this.chd, e);
            if (i) {
                var n = function(i) {
                    if (i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
                        var n = i.seatbid[0].bid[0]
                          , r = n.price.toFixed(2);
                        "" != n.nurl && (n.nurl = n.nurl.replace(/\$\{AUCTION_PRICE\}/, r),
                        (new Image).src = n.nurl),
                        "string" == typeof n.burl && n.burl.length > 0 && (n.adm = n.adm.replace(/\$\{AUCTION_PRICE\}/, r)),
                        this.adData = n;
                        try {
                            var s = JSON.parse(n.adm);
                            !0 === this.processResult(s, t, e ? e.normal : null) ? this.track.loaded(this.definition, this.chd, 1, e ? e.normal : null, null) : this.track.passback(this.definition, this.chd)
                        } catch (t) {
                            this.track.doError("mgid native - " + t.message, "debug"),
                            this.track.passback(this.definition, this.chd)
                        }
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                    n(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        },
        isAdValidForRender: function(t, e) {
            var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions
              , n = t.title.length
              , r = t.description.length
              , s = t.image.width
              , o = t.image.height
              , a = s / o;
            if (!t.image || !t.title)
                return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!t.image + "|title:" + !!t.title + ")"),
                !1;
            if (i) {
                var d = i.maxTitleLength || i.maxTextLength
                  , c = i.maxDescLength || i.maxTextLength;
                if (n > 80 && !d)
                    return this.track.doError("mgid native - possible title overflow (" + n + "), style: " + e.name, "debug"),
                    !1;
                if (r > 150 && !c)
                    return this.track.doError("mgid native - possible description overflow (" + r + "), style: " + e.name, "debug"),
                    !1;
                if (i.imgWidth && i.imgHeight) {
                    var h = i.imgWidth
                      , l = i.imgHeight
                      , u = h / l;
                    if (!(u < 1.5 ? a >= u / 1.1 && a <= u / .9 : a >= u / 1.15 && a <= u / .85))
                        return this.track.doError("mgid native - image not optimal, img [" + s + ", " + o + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"),
                        !1
                }
            } else
                this.track.doError("No native options included, style: " + e.name);
            return !0
        },
        parseAssets: function(t) {
            var e = {};
            try {
                t.forEach((function(t) {
                    var i = {
                        0: "title",
                        1: "data",
                        2: "img",
                        3: "img",
                        4: "data",
                        5: "data"
                    }[t.id]
                      , n = {
                        0: "title",
                        1: "cta",
                        2: "favicon",
                        3: "image",
                        4: "description",
                        5: "advertiser"
                    }[t.id]
                      , r = t[i];
                    r && (e[n] = r.text || r.value || {
                        url: r.url,
                        width: r.w,
                        height: r.h
                    })
                }
                ))
            } catch (t) {}
            return e
        },
        processResult: function(t, e, i) {
            var n = t ? t.native : null;
            if (!n || !n.assets || !n.link)
                return !1;
            var r = new AdTrack.AdSet;
            r.setStyle(i);
            var s = new AdTrack.AdChoices;
            s.setPromoClickUrl(this.chd.url),
            s.setPromoText(this.chd.title ? this.chd.title : "Reklama"),
            s.setOptional(!0),
            r.addAdChoices(s);
            var o = new AdTrack.TextAd
              , a = n.link
              , d = a.clicktrackers || void 0
              , c = n.imptrackers || void 0
              , h = this.parseAssets(n.assets);
            if (!this.isAdValidForRender(h, i))
                return !1;
            var l = h.image
              , u = h.favicon;
            o.addText(h.title, h.description),
            l && o.addScreenshot(l.url, l.width, l.height, l.url);
            var p = h.cta ? h.cta : "Navštívit stránku"
              , f = h.advertiser ? h.advertiser : ""
              , g = "";
            u && u.url && (g = u.url);
            var m = !0 === this.definition.test ? "" : a.url;
            return o.setClickTrackers(d),
            o.setClickUrl(m),
            o.setVisibleUrl(""),
            o.setAdUrl(""),
            o.setCta(p),
            o.setFavicon(g),
            o.setCompanyName(f),
            o.done(),
            r.addAd(new AdTrack.MgidAd(r,o)),
            new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, r),
            c && c.forEach((function(t) {
                (new Image).src = t
            }
            )),
            !0
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.OneTagChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.style = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0,
        this.chd.sizes ? (this.sizes = this.chd.sizes,
        this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]],
        AdTrack.CMP && (this.consent = AdTrack.CMP.getConsentData("never", !1)),
        this.track.shouldCsync("onetag") && setTimeout(function() {
            AdTrack.OneTagCSync(this.consent)
        }
        .bind(this), 5e3)
    }
    ,
    AdTrack.OneTagChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = AdTrack.Config.getAccountId("onetag");
            if (i) {
                var n = this.createData(e, i)
                  , r = this;
                AdTrack.Ajax.request({
                    label: "Onetag bid",
                    url: "https://onetag-sys.com/prebid-request",
                    method: "POST",
                    data: JSON.stringify(n),
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    withCredentials: !0
                }, this.track.errorReporting).done((function(e) {
                    if (e && e.bids && e.bids[0] && e.bids[0].cpm && e.bids[0].ad) {
                        var i = e.bids[0];
                        e.currency && e.currency !== AdTrack.Price.EUR ? r.track.doError("Channel " + r.chd.tag + " responsed with wrong currency: " + e.currency) : (r.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR, null),
                        r.bidResponse.setPrice(r.price),
                        r.bidResponse.setCreativeId(i.creativeId),
                        r.bidResponse.setWidth(i.width ? i.width : r.chd.width),
                        r.bidResponse.setHeight(i.height ? i.height : r.chd.height))
                    } else
                        r.price = null;
                    r.response = e,
                    t && t(r.price, e)
                }
                )).fail((function(e, i) {
                    i ? r.track.evBidTimeout(r.definition, r.chd) : r.track.evBidError(r.definition, r.chd),
                    r.price = null,
                    t && t(null, null)
                }
                )).send()
            } else
                this.track.doError("OneTag accountId not defined. " + this.chd.tag)
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.bids && t.bids[0] && t.bids[0].cpm && t.bids[0].ad) {
                        var e = t.bids[0];
                        this.adData = e.ad,
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var n = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: e.ad,
                                type: "content"
                            }
                        }
                          , r = new AdTrack.MediaTypes.Banner(n,this.track.errorReporting);
                        i(r)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t, e) {
            var i = AdTrack.Utils.simpleStringGenerator(14)
              , n = AdTrack.Utils.simpleStringGenerator(14)
              , r = AdTrack.Utils.simpleStringGenerator(14)
              , s = AdTrack.Utils.simpleStringGenerator(14)
              , o = new Date
              , a = [];
            for (let t = 0; t < this.sizes.length; t++) {
                const e = this.sizes[t];
                a.push({
                    width: e[0],
                    height: e[1]
                })
            }
            var d = {
                bids: [{
                    adUnitCode: t,
                    type: "banner",
                    bidId: i,
                    bidderRequestId: n,
                    auctionId: r,
                    transactionId: s,
                    sizes: a,
                    pubId: e
                }],
                location: encodeURIComponent(AdTrack.url),
                referrer: encodeURIComponent(window.document.referrer),
                masked: 0,
                wWidth: window.innerWidth,
                wHeight: window.innerHeight,
                oWidth: window.outerWidth,
                oHeight: window.outerHeight,
                sWidth: screen.width,
                sHeight: screen.height,
                aWidth: screen.availWidth,
                aHeight: screen.availHeight,
                sLeft: "screenLeft"in window ? window.screenLeft : window.screenX,
                sTop: "screenTop"in window ? window.screenTop : window.screenY,
                hLength: history.length,
                date: o.toUTCString(),
                timeOffset: o.getTimezoneOffset()
            };
            return this.consent && (this.track.evBidConsent(this.definition, this.chd),
            d.gdprConsent = {
                consentString: this.consent.consentString,
                consentRequired: this.consent.gdprApplies
            }),
            d
        }
    },
    AdTrack.OneTagCSync = AdTrack.OneTagCSync || (i = !1,
    function(t) {
        if (!i) {
            var e = "https://onetag-sys.com/usync/?cb=" + (new Date).getTime();
            t && (e += "&gdpr_consent=" + (t.consentString ? t.consentString : ""),
            e += "&gdpr=" + (t.gdprApplies ? 1 : 0));
            var n = document.createElement("iframe");
            n.src = e,
            n.style.display = "none",
            window.document.body.appendChild(n),
            i = !0
        }
    }
    )
}
, function(t, e) {
    AdTrack.PubmaticHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("pubmatic"),
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.PubmaticHelper(t,e,i,this.accountId),
        this.MTsupport = !0
    }
    ,
    AdTrack.PubmaticHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, !1, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
                        var e = t.seatbid[0].bid[0];
                        this.adData = e.adm,
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var n = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: e.adm,
                                type: "content"
                            }
                        }
                          , r = new AdTrack.MediaTypes.Banner(n,this.track.errorReporting);
                        i(r)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.PubmaticHBOutstreamChannel = function(t, e, i, n) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.data = n,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.PubmaticHelper(t,e,i),
        this.MTsupport = !0
    }
    ,
    AdTrack.PubmaticHBOutstreamChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, !0, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            if (this.data)
                this.track.doError("Data rendering not supported for " + this.chd.tag);
            else {
                var n = this.track.getChannelKey(this.chd, e);
                if (n) {
                    var r = function(t) {
                        if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
                            var e = t.seatbid[0].bid[0];
                            this.adData = e.adm;
                            var n = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e.adm, "vast_content")
                              , r = new AdTrack.MediaTypes.Video(n,this.track.errorReporting);
                            i(r)
                        } else
                            this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                        r(e)
                    }
                    ), n)
                } else
                    this.track.doError("Undefined key")
            }
        }
    }
}
, function(t, e) {
    AdTrack.R2B2Channel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.delayTime = 1e3,
        this.cookieSync()
    }
    ,
    AdTrack.R2B2Channel.prototype = {
        bid: function(t, e) {
            var i = this
              , n = this.createData(e);
            n ? AdTrack.Ajax.request({
                label: "R2B2 bid",
                url: "//hb.trackad.cz/openrtb2/bid",
                method: "POST",
                data: JSON.stringify(n),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                    var n = e.seatbid[0].bid[0]
                      , r = e.seatbid[0].seat;
                    i.chd.flag = "-" + r,
                    i.price = AdTrack.Price.create(n.price, AdTrack.Price.USD, n.dealid),
                    "DID-811-92131" == n.dealid && i.track.doError("Deal ID (DID-811-92131) received directly from R2B2 channel with price " + n.price + " USD", "debug")
                } else
                    i.price = null;
                if (e.ext && e.ext.errors) {
                    var s = e.ext.errors;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            i.track.doError("[s2s] Response from " + o + " has errors: " + JSON.stringify(a))
                        }
                }
                i.response = e,
                t && t(i.price, e)
            }
            )).fail((function(e, n) {
                n ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd),
                i.price = null,
                t && t(null, null)
            }
            )).send() : t(null, null)
        },
        render: function(t, e) {
            e = e && e.normal ? e.normal : null;
            var i = this.track.getChannelKey(this.chd, e);
            if (i) {
                var n = function(i) {
                    if (i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
                        var n = i.seatbid[0].bid[0]
                          , r = n.adm
                          , s = n.w
                          , o = n.h;
                        n.ext.prebid.type;
                        this.chd.width = s,
                        this.chd.height = o;
                        var a = function() {
                            this.track.evClick(this.definition, this.chd, void 0, null, null, null, null, e)
                        }
                        .bind(this);
                        if (r.match(/^<iframe/i))
                            AdTrack.iframeCreator.factory.createIframeFromHTML(t, r, a);
                        else {
                            var d = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + r + "</body></html>";
                            AdTrack.iframeCreator.factory.createIframeWithContent(t, s, o, window.location.href, d, a)
                        }
                        n.iurl && AdTrack.Utils.firePixel(n.iurl),
                        this.track.loaded(this.definition, this.chd, 1, e, null)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                    n(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t) {
            var e = AdTrack.Utils.uuid()
              , i = "AdTrack" + Math.round(1e9 * Math.random())
              , n = {}
              , r = {}
              , s = null;
            if (AdTrack.CMP && (s = AdTrack.CMP.getConsentData(this.track.cmpFallback, this.track.cookiesEnabled)),
            s && (this.track.evBidConsent(this.definition, this.chd),
            n.ext = {
                consent: s.consentString ? s.consentString : ""
            },
            r.ext = {
                gdpr: s.gdprApplies ? 1 : 0
            }),
            "object" == typeof t && t.d && t.g && t.p && t.t)
                return t.m = t.m || 0,
                {
                    id: e,
                    user: n,
                    regs: r,
                    site: {
                        page: AdTrack.url
                    },
                    imp: [{
                        id: i,
                        ext: {
                            r2b2: t
                        },
                        banner: {
                            format: [{
                                h: this.chd.height,
                                w: this.chd.width
                            }]
                        }
                    }],
                    source: {
                        tid: e
                    },
                    test: 1,
                    tmax: this.delayTime
                };
            this.track.doError("Wrong format for R2B2 key")
        },
        cookieSync: function() {
            var t = this.chd.keys[1];
            if (t.d && t.g && t.p && t.t) {
                t.m = t.m || 0;
                var e = [{
                    d: t.d,
                    g: t.g,
                    p: t.p,
                    m: t.m,
                    t: t.t
                }]
                  , i = "//hb.trackad.cz/cookieSync?p=" + btoa(JSON.stringify(e));
                AdTrack.Utils.csyncFrame(i)
            }
        }
    }
}
, function(t, e) {
    AdTrack.RubiconBannerHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.MTsupport = !0,
        this.price = null,
        this.response = null,
        this.track.shouldCsync("rubicon") && setTimeout(function() {
            AdTrack.RubiconCSync()
        }
        .bind(this), 5e3),
        this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("rubicon"),
        this.external = this.accountId !== AdTrack.Config.getAccountId("rubicon"),
        this.bidResponse = new AdTrack.Bid,
        this.sizesMas = {
            "468x60": 1,
            "728x90": 2,
            "234x60": 3,
            "88x31": 4,
            "120x90": 5,
            "120x60": 6,
            "125x125": 7,
            "120x600": 8,
            "160x600": 9,
            "300x600": 10,
            "120x240": 12,
            "200x200": 13,
            "250x250": 14,
            "300x250": 15,
            "336x280": 16,
            "240x400": 17,
            "180x150": 18,
            "300x100": 19,
            "0x0": 20,
            "160x90": 24,
            "180x90": 25,
            "200x90": 26,
            "468x15": 27,
            "728x15": 28,
            "300x850": 29,
            "980x120": 31,
            "250x360": 32,
            "180x500": 33,
            "980x150": 35,
            "140x350": 36,
            "468x400": 37,
            "930x180": 38,
            "750x100": 39,
            "750x200": 40,
            "750x300": 41,
            "2x4": 42,
            "320x50": 43,
            "300x50": 44,
            "480x75": 45,
            "480x60": 46,
            "240x37": 47,
            "300x300": 48,
            "1024x90": 50,
            "768x90": 51,
            "1004x768": 52,
            "1024x768": 53,
            "300x1050": 54,
            "970x90": 55,
            "900x250": 56,
            "970x250": 57,
            "1000x90": 58,
            "320x80": 59,
            "320x150": 60,
            "1000x1000": 61,
            "980x50": 62,
            "1000x40": 63,
            "580x500": 64,
            "640x480": 65,
            "930x600": 66,
            "320x480": 67,
            "1800x1000": 68,
            "480x400": 69,
            "320x320": 72,
            "320x160": 73,
            "1250x240": 74,
            "265x600": 77,
            "980x240": 78,
            "980x300": 79,
            "980x400": 80,
            "450x150": 81,
            "300x75": 82,
            "480x300": 83,
            "300x120": 85,
            "950x90": 87,
            "300x1200": 89,
            "548x150": 90,
            "970x310": 94,
            "970x100": 95,
            "970x210": 96,
            "467x120": 97,
            "1000x120": 98,
            "480x320": 101,
            "768x1024": 102,
            "480x280": 103,
            "1250x360": 104,
            "250x800": 105,
            "300x480": 106,
            "440x220": 107,
            "320x240": 108,
            "468x120": 109,
            "994x66": 110,
            "1250x480": 111,
            "1366x40": 112,
            "1000x300": 113,
            "505x500": 114,
            "480x150": 115,
            "950x250": 116,
            "320x100": 117,
            "235x100": 118,
            "256x600": 119,
            "994x250": 120,
            "1280x800": 121,
            "650x110": 123,
            "640x150": 124,
            "800x250": 125,
            "200x600": 126,
            "994x118": 127,
            "960x500": 128,
            "320x120": 129,
            "364x97": 130,
            "980x600": 144,
            "840x150": 147,
            "720x480": 148,
            "1000x250": 152,
            "850x250": 153,
            "980x30": 155,
            "640x320": 156,
            "840x250": 158,
            "320x250": 159,
            "970x31": 160,
            "228x400": 168,
            "120x45": 169,
            "100x100": 171,
            "600x500": 172,
            "640x160": 173,
            "640x100": 174,
            "950x200": 175,
            "640x190": 176,
            "1920x1200": 177,
            "970x500": 178,
            "250x600": 179,
            "320x64": 180,
            "640x832": 181,
            "940x200": 182,
            "995x123": 183,
            "320x270": 184,
            "800x600": 185,
            "580x100": 186,
            "260x500": 187,
            "1000x126": 188,
            "1000x80": 189,
            "240x200": 190,
            "360x50": 191,
            "728x40": 192,
            "970x66": 193,
            "960x66": 194,
            "600x300": 195,
            "620x400": 196,
            "932x270": 197,
            "640x360": 198,
            "640x200": 199,
            "800x235": 200,
            "716x373": 208,
            "1400x400": 209,
            "1080x1920": 210,
            "840x400": 211,
            "1400x600": 212,
            "1030x590": 213,
            "980x360": 214,
            "990x720": 215,
            "400x400": 216,
            "276x130": 217,
            "760x120": 218,
            "2304x1366": 220,
            "1x1": 221,
            "448x252": 222,
            "532x726": 223,
            "740x400": 225,
            "448x280": 226,
            "384x288": 227,
            "970x150": 228,
            "320x180": 229,
            "2000x1400": 230,
            "694x250": 231,
            "580x400": 232,
            "1440x900": 233,
            "6x6": 234,
            "990x90": 235,
            "792x1032": 237,
            "3840x1080": 238,
            "1920x576": 239,
            "1224x340": 240,
            "1280x360": 241,
            "1190x330": 243,
            "1440x1024": 244,
            "1366x768": 245,
            "1600x900": 246,
            "768x1360": 247,
            "1280x720": 248,
            "3480x1080": 249,
            "288x576": 250,
            "2x2": 251,
            "900x1600": 252,
            "540x1920": 253,
            "1360x768": 254,
            "768x1366": 255,
            "480x820": 256,
            "400x600": 257,
            "500x200": 258,
            "998x200": 259,
            "970x400": 260,
            "480x480": 261,
            "140x260": 262,
            "1272x328": 263,
            "970x1000": 264,
            "1920x1080": 265,
            "1296x1296": 266,
            "5900x3480": 267,
            "1296x468": 268,
            "720x360": 269,
            "1060x610": 270,
            "620x366": 271,
            "325x508": 272,
            "1800x200": 274,
            "1800x500": 276,
            "320x500": 278,
            "980x500": 280,
            "320x400": 282,
            "970x415": 286,
            "640x380": 288,
            "240x80": 290,
            "560x160": 292,
            "1056x936": 294,
            "1800x600": 296,
            "418x236": 298,
            "2160x3840": 300,
            "2048x768": 302,
            "576x288": 304,
            "1200x400": 306,
            "600x600": 308,
            "1000x400": 310,
            "1600x400": 312,
            "2560x720": 314,
            "1000x625": 316,
            "678x508": 318,
            "512x384": 320,
            "752x208": 322,
            "1024x256": 324,
            "560x288": 326,
            "1920x674": 328,
            "548x974": 336,
            "1612x1144": 338,
            "572x832": 340,
            "448x640": 342,
            "768x1076": 344,
            "1196x832": 346,
            "806x2084": 348,
            "594x886": 350,
            "432x624": 352,
            "480x440": 354,
            "768x576": 356,
            "720x540": 358,
            "720x576": 360,
            "1056x432": 362,
            "1152x288": 364,
            "1224x324": 366,
            "1240x320": 368,
            "1248x336": 370,
            "1280x320": 372,
            "1428x336": 374,
            "324x288": 376,
            "336x504": 380,
            "360x450": 382,
            "448x672": 384,
            "468x720": 386,
            "480x800": 388,
            "495x720": 390,
            "512x288": 392,
            "576x864": 394,
            "650x360": 396,
            "720x240": 398,
            "768x192": 400,
            "810x270": 402,
            "864x288": 404,
            "896x288": 406,
            "896x320": 408,
            "896x384": 410,
            "952x252": 412,
            "960x600": 414,
            "992x304": 416,
            "1400x500": 418,
            "2532x1400": 420,
            "1280x220": 422
        },
        this.actualSizes = {}
    }
    ,
    AdTrack.RubiconBannerHBChannel.prototype = {
        report: function() {
            return this.response ? this.response : ""
        },
        bid: function(t, e) {
            var i = "https:" === location.protocol ? "1" : "0"
              , n = [window.screen.width, window.screen.height].join("x")
              , r = this.chd.width + "x" + this.chd.height
              , s = this.sizesMas[r];
            if (!s)
                return this.track.doError("Unsupported dimension (" + r + ") in rubicon adapter"),
                void (t && t(null, null));
            this.actualSizes[s] = [this.chd.width, this.chd.height];
            for (var o = this.chd.sizes ? this.chd.sizes : [], a = [], d = 0; d < o.length; d++) {
                var c = o[d][0] + "x" + o[d][1]
                  , h = this.sizesMas[c];
                h ? (a.push(h),
                this.actualSizes[h] = o[d]) : this.track.doError("Unsupported dimension (" + c + ") in rubicon adapter")
            }
            var l = e.split("-");
            2 !== l.length && this.track.doError("Wrong format for key, should be: [site_id]-[zone-id]");
            var u = {
                account_id: this.accountId,
                site_id: l[0],
                zone_id: l[1],
                size_id: s,
                alt_size_ids: a.join(","),
                p_pos: "atf",
                rf: AdTrack.url,
                p_screen_res: n,
                rp_floor: this.chd.bidFloor ? this.chd.bidFloor : .01,
                rp_secure: i,
                slots: 1,
                rand: Math.random()
            }
              , p = this.track.getSupplyChain(!0);
            if (p && !this.external && (u.rp_schain = p),
            AdTrack.UserID)
                for (var f = AdTrack.UserID.getAllUserIdsAsEids(), g = 0; g < f.length; g++) {
                    var m = f[g];
                    if ("adserver.org" === m.source ? (u.tpid_tdid = m.uids[0].id,
                    u["eid_adserver.org"] = m.uids[0].id) : "liveintent.com" === m.source ? (u["tpid_liveintent.com"] = m.uids[0].id,
                    u["eid_liveintent.com"] = m.uids[0].id,
                    m.ext && Array.isArray(m.ext.segments) && m.ext.segments.length && (u["tg_v.LIseg"] = m.ext.segments.join(","))) : "liveramp.com" === m.source ? u.x_liverampidl = m.uids[0].id : "id5-sync.com" === m.source ? u["eid_id5-sync.com"] = `${m.uids[0].id}^${m.uids[0].atype}^${m.uids[0].ext && m.uids[0].ext.linkType || ""}` : u[`eid_${m.source}`] = `${m.uids[0].id}^${m.uids[0].atype || ""}`,
                    !u.ppuid) {
                        var k = null;
                        m.uids.forEach((function(t) {
                            t.ext && "ppuid" === t.ext.stype && (k = t)
                        }
                        )),
                        k && k.id && (u.ppuid = k.id)
                    }
                }
            var v = {};
            AdTrack.CMP && (v = AdTrack.CMP.getConsentData("never", !1)),
            v && (this.track.evBidConsent(this.definition, this.chd),
            v.gdprApplies && (u.gdpr = v.gdprApplies ? 1 : 0),
            v.consentString && (u.gdpr_consent = v.consentString));
            var b = "https://fastlane.rubiconproject.com/a/api/fastlane.json?" + Object.keys(u).map((function(t) {
                return [t, u[t]].map(encodeURIComponent).join("=")
            }
            )).join("&")
              , y = this;
            AdTrack.Ajax.request({
                label: "Rubicon bid",
                url: b,
                json: !0,
                async: !this.definition.options.noAsync,
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if ("ok" === e.status && e.ads && e.ads[0] && "ok" === e.ads[0].status) {
                    var i = e.ads[0]
                      , n = y.actualSizes[i.size_id];
                    if (!n)
                        return y.track.doError("Unexpected size_id (" + i.size_id + ") in response (rubicon)"),
                        void (t && t(null, e));
                    y.chd.width = n[0],
                    y.chd.height = n[1],
                    y.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD),
                    y.bidResponse.setCreativeId(i.creative_id),
                    y.bidResponse.setWidth(n[0]),
                    y.bidResponse.setHeight(n[1]),
                    y.bidResponse.setPrice(y.price)
                } else
                    y.price = null;
                y.response = e,
                t && t(y.price, e)
            }
            )).fail((function(e, i) {
                i ? y.track.evBidTimeout(y.definition, y.chd) : y.track.evBidError(y.definition, y.chd),
                y.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.ads && t.ads[0] && "ok" === t.ads[0].status) {
                        var e = t.ads[0]
                          , n = Number(e.size_id)
                          , r = this.getCreative(e.script, e.impression_id)
                          , s = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                type: "content",
                                data: r
                            }
                        };
                        "string" != typeof this.chd.flag || !this.chd.flag.match(/custom/i) || 230 !== n && 256 !== n || (s.externalRender = !0);
                        var o = new AdTrack.MediaTypes.Banner(s,this.track.errorReporting);
                        i(o)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        getCreative: function(t, e) {
            return "<html><head><script type='text/javascript'>inDapIF=true;<\/script></head><body style='margin : 0; padding: 0;'>\x3c!-- Rubicon Project Ad Tag --\x3e<div data-rp-impression-id='" + e + "'><script type='text/javascript'>" + t + "<\/script></div></body></html>"
        }
    }
}
, function(t, e) {
    AdTrack.RubiconVideoHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.track.shouldCsync("rubicon") && setTimeout(function() {
            AdTrack.RubiconCSync()
        }
        .bind(this), 5e3),
        this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("rubicon"),
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.RubiconVideoHBChannel.prototype = {
        report: function() {
            return this.response ? this.response : ""
        },
        bid: function(t, e) {
            var i = this.createData(e)
              , n = this;
            AdTrack.Ajax.request({
                label: "Rubicon video bid",
                url: "https://prebid-server.rubiconproject.com/openrtb2/auction",
                method: "POST",
                data: JSON.stringify(i),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                var i = null;
                if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                    e.cur && e.cur !== AdTrack.Price.USD && n.track.doError("Channel " + n.chd.tag + " responsed with wrong currency: " + e.cur);
                    var r = e.seatbid[0].bid[0];
                    i = AdTrack.Price.create(r.price, e.cur || AdTrack.Price.USD, null),
                    n.bidResponse.setPrice(i),
                    n.bidResponse.setWidth(r.w || n.chd.width),
                    n.bidResponse.setHeight(r.h || n.chd.height)
                }
                n.response = e,
                t && t(n.price, e)
            }
            )).fail((function(e, i) {
                i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd),
                n.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
                        var e = t.seatbid[0].bid[0]
                          , n = e.adm || ""
                          , r = e.nurl || "";
                        if (n || r) {
                            if (this.definition.options.player && "default" === this.definition.options.player.type) {
                                var s = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, r || n, r ? "vast_url" : "vast_content")
                                  , o = new AdTrack.MediaTypes.Video(s,this.track.errorReporting);
                                i(o)
                            }
                        } else
                            this.track.doError("Rubicon video - no creative in response"),
                            this.track.passback(this.definition, this.chd)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t) {
            var e = t.split("-");
            2 !== e.length && this.track.doError("Wrong format for key, should be: [site_id]-[zone_id]");
            var i = this.accountId
              , n = e[0]
              , r = e[1]
              , s = AdTrack.Utils.uuid()
              , o = "" + (new Date).getTime()
              , a = "";
            try {
                a = this.track.getDomainName(window.top.location.hostname)
            } catch (t) {
                a = this.track.getDomainName(window.location.hostname)
            }
            var d = {
                ext: {}
            }
              , c = {
                ext: {}
            }
              , h = {
                exp: 300,
                id: s,
                secure: 1,
                bidfloor: .01,
                ext: {
                    rubicon: {
                        accountId: Number(i),
                        siteId: Number(n),
                        zoneId: Number(r),
                        video: {
                            playerWidth: this.chd.width ? this.chd.width : 640,
                            playerHeight: this.chd.height ? this.chd.height : 360,
                            size_id: 203
                        }
                    }
                },
                video: {
                    mimes: ["video/mp4", "video/webm", "video/wmv", "video/mpeg", "video/ogg"],
                    protocols: [2, 3, 5, 6],
                    minduration: 3,
                    maxduration: 300,
                    linearity: 1,
                    pos: 3,
                    w: this.chd.width ? this.chd.width : 640,
                    h: this.chd.height ? this.chd.height : 360
                }
            }
              , l = null;
            if (AdTrack.CMP && (l = AdTrack.CMP.getConsentData("never", !1)),
            l && (this.track.evBidConsent(this.definition, this.chd),
            d.ext.consent = l.consentString ? l.consentString : "",
            c.ext.gdpr = l.gdprApplies ? 1 : 0),
            AdTrack.UserID) {
                var u = AdTrack.UserID.getAllUserIdsAsEids();
                u && (d.ext.eids = u)
            }
            return {
                id: o,
                cur: ["USD"],
                source: {
                    tid: o
                },
                tmax: 1e3,
                imp: [h],
                ext: {},
                site: {
                    domain: a,
                    page: AdTrack.url,
                    ref: AdTrack.url
                },
                device: {
                    ip: this.track.settings.ip ? this.track.settings.ip : "",
                    ua: navigator.userAgent,
                    js: 1,
                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                    h: screen.height,
                    w: screen.width,
                    language: navigator.language
                },
                regs: c,
                user: d,
                test: this.chd.test ? 1 : 0
            }
        }
    }
}
, function(t, e) {
    AdTrack.SeznamSspHbChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.delayTime = 1e3,
        this.destroyed = !1,
        this.helper = new AdTrack.SeznamHelper(t,e,i),
        this.trackServed = [],
        this.trackVisible = [],
        this.bidResponse = new AdTrack.Bid
    }
    ,
    AdTrack.SeznamSspHbChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = this
              , n = this.createData(e);
            AdTrack.Ajax.request({
                label: "SSSP bid",
                url: "https://ssp.imedia.cz/v2/rtb",
                method: "POST",
                data: JSON.stringify(n),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                    var n = e.seatbid[0].bid[0];
                    e.cur && "CZK" === e.cur ? (i.price = AdTrack.Price.create(n.price, AdTrack.Price.CZK),
                    i.bidResponse.setPrice(i.price),
                    i.bidResponse.setWidth(n.w || i.width),
                    i.bidResponse.setHeight(n.h || i.height)) : (i.price = null,
                    i.track.doError("Unknown bid response currency '" + e.cur + "' passed to " + i.chd.tag))
                } else
                    i.price = null;
                i.response1 = e,
                t && t(i.price, e)
            }
            )).fail((function(e, n) {
                n ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd),
                i.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e) {
            var i = function(i) {
                var n = this;
                if (!i.seatbid)
                    return this.track.doError("[" + this.chd.tag + "] Empty response from Seznam SSP"),
                    void this.track.passback(this.definition, n.chd);
                var r = i.seatbid[0].bid[0]
                  , s = "";
                if (r.adm && "" !== r.adm)
                    try {
                        this.admJSON = JSON.parse(r.adm),
                        s = this.admJSON.data,
                        this.admJSON.width && this.admJSON.height && (this.chd.width = this.admJSON.width,
                        this.chd.height = this.admJSON.height),
                        this.admJSON.tracking && (this.admJSON.tracking.served && (this.trackServed = this.admJSON.tracking.served),
                        this.admJSON.tracking.visible && (this.trackVisible = this.admJSON.tracking.visible))
                    } catch (t) {
                        return this.track.doError("[" + n.chd.tag + "] Unsupported adm response", t),
                        void this.track.passback(this.definition, n.chd)
                    }
                else
                    s = i.seatbid[0].bid[0].nurl;
                var o = function(i) {
                    if (i && i.ads)
                        if (n.response2 = i,
                        i.ads) {
                            if (i.ads.length <= 0)
                                return n.track.doError("[" + n.chd.tag + "] Empty response from Seznam SSP"),
                                void n.track.passback(n.definition, n.chd);
                            var r = e && e.normal ? e.normal : null;
                            n.helper.isProductAd(i.ads) && (r = e && e.product ? e.product : null),
                            n.adData = i.ads;
                            var s = function() {
                                n.trackServed.forEach((function(t) {
                                    (new Image).src = t
                                }
                                )),
                                n.track.renderer.on("impress", (function() {
                                    (new Image).src = i.confirmImpUrl,
                                    n.trackVisible.forEach((function(t) {
                                        (new Image).src = t
                                    }
                                    )),
                                    n.helper.impPixels && n.helper.impPixels.forEach((function(t) {
                                        (new Image).src = t
                                    }
                                    ))
                                }
                                ))
                            };
                            n.helper.isBranding(i.ads) ? (n.helper.renderBranding(i.ads, t, n.chd.width, n.chd.height),
                            n.track.loaded(n.definition, n.chd, 1, r, null),
                            s()) : n.helper.processResult(i.ads, t, r, (function(t, e) {
                                n.destroyed || (r = e || r,
                                n.track.loaded(n.definition, n.chd, t, r, null),
                                s())
                            }
                            ), (function() {
                                n.destroyed || n.track.passback(n.definition, n.chd)
                            }
                            ), "sssp-hb")
                        } else
                            n.track.doError("[" + n.chd.tag + "] Unknown response from Seznam SSP"),
                            n.track.passback(n.definition, n.chd);
                    else
                        n.track.passback(n.definition, n.chd)
                };
                void 0 === this.admJSON || "json_url" === this.admJSON.type ? AdTrack.Ajax.request({
                    label: "SSSP ad request",
                    url: s,
                    method: "GET",
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: 0
                }, this.track.errorReporting).done((function(t) {
                    o(t)
                }
                )).fail((function(t) {
                    n.track.doError("[" + n.chd.tag + "] Request to 'nurl' failed: " + t),
                    n.track.passback(n.definition, n.chd)
                }
                )).send() : "json" === this.admJSON.type ? o(this.admJSON.data) : (this.track.doError("[" + n.chd.tag + "] Unsupported response type: " + this.admJSON.type),
                this.track.passback(n.definition, n.chd))
            }
            .bind(this);
            if (this.price && this.response1)
                i(this.response1);
            else {
                var n = this.helper.getKeyBasedOnStyle(e, this.chd);
                n ? this.bid((function(t, e) {
                    i(e)
                }
                ), n) : this.track.doError("Undefined key")
            }
        },
        destroy: function() {
            this.destroyed = !0
        },
        createData: function(t) {
            for (var e = function(t) {
                for (var e = "", i = 0; i < t; i++)
                    e += Math.random().toString(36).substring(3, 4);
                return e
            }(32), i = "AdTrack" + Math.round(1e9 * Math.random()), n = [{
                w: this.chd.width,
                h: this.chd.height
            }], r = this.chd.sizes ? this.chd.sizes : [], s = 0; s < r.length; s++)
                2 === r[s].length && n.push({
                    w: r[s][0],
                    h: r[s][1]
                });
            return t ? {
                id: e,
                imp: [{
                    id: i,
                    tagid: t,
                    banner: {
                        format: n
                    }
                }],
                site: {
                    page: AdTrack.url
                },
                ext: {
                    pvId: this.helper.generatePvId(),
                    browserhash: this.helper.computeHash(),
                    adblock: !1
                }
            } : (this.track.doError("[" + this.chd.tag + "] Key undefined"),
            {})
        }
    }
}
, function(t, e) {
    AdTrack.SeznamSspHb2Channel = function(t, e, i) {
        (this.track = t,
        this.definition = e,
        this.chd = i,
        this.destroyed = !1,
        this.helper = new AdTrack.SeznamHelper(t,e,i),
        this.trackServed = [],
        this.trackVisible = [],
        this.bidResponse = new AdTrack.Bid,
        window.DOT || AdTrack.Libs.isDeployed("seznam-dot")) || AdTrack.Libs.deploy("seznam-dot", "https://h.seznam.cz/js/dot-small.js").onload((function() {
            DOT.cfg({
                service: "sklikp",
                load: !1,
                mousedown: !1
            })
        }
        ))
    }
    ,
    AdTrack.SeznamSspHb2Channel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = this
              , n = this.createData(e);
            AdTrack.Ajax.request({
                label: "SSSP bid",
                url: "https://ssp.imedia.cz/v2/rtb",
                method: "POST",
                data: JSON.stringify(n),
                json: !0,
                async: !this.definition.options.noAsync,
                headers: {},
                timeout: this.chd.timeout || 800,
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(e) {
                if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
                    var n = e.seatbid[0].bid[0];
                    e.cur && "CZK" === e.cur ? (i.price = AdTrack.Price.create(n.price, AdTrack.Price.CZK),
                    i.bidResponse.setPrice(i.price),
                    i.bidResponse.setWidth(n.w || i.chd.width),
                    i.bidResponse.setHeight(n.h || i.chd.height)) : (i.price = null,
                    i.track.doError("Unknown bid response currency '" + e.cur + "' passed to " + i.chd.tag))
                } else
                    i.price = null;
                i.response = e,
                t && t(i.price, e)
            }
            )).fail((function(e, n) {
                n ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd),
                i.price = null,
                t && t(null, null)
            }
            )).send()
        },
        render: function(t, e) {
            var i = function(i) {
                var n = this;
                if (i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
                    var r = i.seatbid[0].bid[0]
                      , s = "";
                    if (r.adm && "" !== r.adm)
                        try {
                            this.admJSON = JSON.parse(r.adm),
                            s = this.admJSON.data,
                            this.admJSON.width && this.admJSON.height && (this.chd.width = this.admJSON.width,
                            this.chd.height = this.admJSON.height),
                            this.admJSON.tracking && (this.admJSON.tracking.served && (this.trackServed = this.admJSON.tracking.served),
                            this.admJSON.tracking.visible && (this.trackVisible = this.admJSON.tracking.visible))
                        } catch (t) {
                            return this.track.doError("[" + n.chd.tag + "] Unsupported adm response", t),
                            void this.track.passback(this.definition, n.chd)
                        }
                    else
                        s = i.seatbid[0].bid[0].nurl;
                    var o = function(i) {
                        if (i && i.ads)
                            if (n.adResponse = i,
                            i.ads) {
                                if (i.ads.length <= 0)
                                    return n.track.doError("[" + n.chd.tag + "] Empty response from Seznam SSP"),
                                    void n.track.passback(n.definition, n.chd);
                                var r = e && e.normal ? e.normal : null;
                                n.helper.isProductAd(i.ads) && (r = e && e.product ? e.product : null),
                                n.adData = i.ads;
                                var s = function() {
                                    n.trackServed.forEach((function(t) {
                                        (new Image).src = t
                                    }
                                    )),
                                    n.track.renderer.on("impress", (function() {
                                        (new Image).src = i.confirmImpUrl,
                                        n.trackVisible.forEach((function(t) {
                                            (new Image).src = t
                                        }
                                        )),
                                        n.helper.impPixels && n.helper.impPixels.forEach((function(t) {
                                            (new Image).src = t
                                        }
                                        ))
                                    }
                                    ))
                                };
                                n.helper.isBranding(i.ads) ? (n.helper.renderBranding(i.ads, t, n.chd.width, n.chd.height),
                                n.track.loaded(n.definition, n.chd, 1, r, null),
                                s()) : n.helper.processResult(i.ads, t, r, (function(t, e) {
                                    n.destroyed || (r = e || r,
                                    n.track.loaded(n.definition, n.chd, t, r, null),
                                    s())
                                }
                                ), (function() {
                                    n.destroyed || n.track.passback(n.definition, n.chd)
                                }
                                ), "sssp-hb")
                            } else
                                n.track.doError("[" + n.chd.tag + "] Unknown response from Seznam SSP"),
                                n.track.passback(n.definition, n.chd);
                        else
                            n.track.passback(n.definition, n.chd)
                    };
                    void 0 === this.admJSON || "json_url" === this.admJSON.type ? AdTrack.Ajax.request({
                        label: "SSSP ad request",
                        url: s,
                        method: "GET",
                        json: !0,
                        async: !this.definition.options.noAsync,
                        headers: {},
                        timeout: 0
                    }, this.track.errorReporting).done((function(t) {
                        o(t)
                    }
                    )).fail((function(t) {
                        n.track.doError("[" + n.chd.tag + "] Request to 'nurl' failed: " + t),
                        n.track.passback(n.definition, n.chd)
                    }
                    )).send() : "json" === this.admJSON.type ? o(this.admJSON.data) : (this.track.doError("[" + n.chd.tag + "] Unsupported response type: " + this.admJSON.type),
                    this.track.passback(n.definition, n.chd))
                } else
                    this.track.doError("[" + n.chd.tag + "] Empty response from Seznam SSP"),
                    this.track.passback(n.definition, n.chd)
            }
            .bind(this);
            if (this.price && this.response)
                i(this.response);
            else {
                var n = this.helper.getKeyBasedOnStyle(e, this.chd);
                n ? this.bid((function(t, e) {
                    i(e)
                }
                ), n) : this.track.doError("Undefined key")
            }
        },
        destroy: function() {
            this.destroyed = !0
        },
        createData: function(t) {
            for (var e = AdTrack.Utils.uuid(), i = "AdTrack" + Math.round(1e9 * Math.random()), n = AdTrack.Utils.getUrlWithoutSafeFrame(this.track), r = AdTrack.Utils.readCookie("sid"), s = [{
                w: this.chd.width,
                h: this.chd.height
            }], o = this.chd.sizes ? this.chd.sizes : [], a = 0; a < o.length; a++)
                2 === o[a].length && s.push({
                    w: o[a][0],
                    h: o[a][1]
                });
            if (t) {
                var d = {
                    id: e,
                    imp: [{
                        id: i,
                        tagid: t,
                        bidfloor: this.chd.bidFloor,
                        bidfloorcur: "CZK",
                        banner: {
                            format: s
                        }
                    }],
                    site: {
                        page: n
                    },
                    user: {
                        buyeruid: r
                    },
                    ext: {
                        pvId: this.helper.generatePvId(),
                        adblock: !1,
                        source: ""
                    }
                }
                  , c = null;
                return AdTrack.CMP && (c = AdTrack.CMP.getConsentData("never", !1)),
                c && (this.track.evBidConsent(this.definition, this.chd),
                d.user.ext = {},
                d.user.ext.consent = c.consentString ? c.consentString : "",
                d.user.ext.gdpr = !!c.gdprApplies),
                d
            }
            return this.track.doError("[" + this.chd.tag + "] Key undefined"),
            {}
        }
    }
}
, function(t, e) {
    AdTrack.SklikHBChannel = function(t, e, i) {
        (this.track = t,
        this.definition = e,
        this.chd = i,
        this.destroyed = !1,
        this.floorPrice = null,
        window.DOT || AdTrack.Libs.isDeployed("sklik")) || AdTrack.Libs.deploy("sklik", "https://h.imedia.cz/js/dot-small.js").onload((function() {
            DOT.cfg({
                service: "sklikp",
                load: !1,
                mousedown: !1
            })
        }
        ))
    }
    ,
    AdTrack.SklikHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        setFloorPrice: function(t) {
            this.floorPrice = t
        },
        bid: function(t, e) {
            var i = function(t, e) {
                return {
                    result: t,
                    r2: e
                }
            }
              , n = (Math.round(1e6 * Math.random()),
            function(e, n) {
                if (e && e.length > 0 && n) {
                    this.response = i(e, n);
                    var r = null;
                    this.floorPrice && (r = AdTrack.Price.create(this.floorPrice.value, this.floorPrice.currency),
                    this.price = r)
                } else
                    this.price = null,
                    this.response = i(e, n);
                t && t(this.price, this.response)
            }
            .bind(this))
              , r = this.getTestAds();
            if (r)
                n(r, {
                    confirmImpUrl: "https://trackad.cz/"
                });
            else {
                var s = AdTrack.url
                  , o = "//c.imedia.cz/partnerJsApi/v3?" + AdTrack.Utils.uri("hash", this.computeHash()) + "&" + AdTrack.Utils.uri("zHash", e) + "&" + AdTrack.Utils.uri("url", s);
                this.definition.options.noAsync ? this.track.doError("Sync rendering not supported for " + this.chd.tag) : this.track.jsonp(o, "clbk", n)
            }
        },
        render: function(t, e) {
            if (this.definition.options.noAsync)
                this.track.doError("Sync rendering not supported for " + this.chd.tag);
            else if (Object.keys(this.chd.keys).length > 0) {
                var i = !1
                  , n = e && e.normal ? e.normal : null;
                e && e.product && (i = !0);
                var r = this.getKeyBasedOnStyle(e, this.chd);
                if (r) {
                    var s = function(r) {
                        if (r && r.result && r.result.length > 0 && r.r2) {
                            var s = r.result
                              , o = r.r2;
                            i || "sklik-hb-banner" === this.chd.tag || this.track.doError("Undefined product style."),
                            this.isProductAd(s) && (n = e && e.product ? e.product : null),
                            this.processResult(s, t, n, o.confirmImpUrl) && (this.measureImpress(t, n, o.confirmImpUrl),
                            this.track.loaded(this.definition, this.chd, this.count, n, null))
                        } else
                            this.track.passback(this.definition, this.chd)
                    }
                    .bind(this);
                    this.price && this.response ? s(this.response) : this.bid((function(t, e) {
                        s(e)
                    }
                    ), r)
                } else
                    this.track.doError("Undefined key")
            } else
                this.track.doError("Ad count is lower or equal 0 (" + this.chd.tag + ")")
        },
        getKeyBasedOnStyle: function(t, e) {
            var i, n = null, r = 0;
            return t && (t.product && (i = t.product.count ? t.product.count : 0),
            t.normal && (r = t.normal.count ? t.normal.count : 0),
            n = i || r ? this.track.getChannelKey(e, i > r ? t.product : t.normal) : this.track.getChannelKey(e, null)),
            n
        },
        processResult: function(t, e, i, n) {
            var r, s;
            for (this.adData = t,
            this.count = t.length,
            this.style = i,
            s = 0; s < t.length; s++)
                "SHOP" == t[s].adType && (r = t[s],
                this.count--);
            var o = new AdTrack.AdSet;
            o.setStyle(i);
            var a = new AdTrack.AdChoices;
            for (a.setPromoClickUrl(this.chd.url ? this.chd.url : "https://napoveda.sklik.cz/cz/co-je-reklama-sklik.html"),
            a.setPromoText(this.chd.title),
            a.setOptional(!0),
            o.addAdChoices(a),
            s = 0; s < t.length; s++) {
                var d = t[s];
                if (d.cta = "Navštívit stránku",
                "BANNER" == d.adType || d.isBanner)
                    return this.renderBanner(t, e, i, n),
                    !1;
                "DRTG" == d.adType ? o.addAd(new AdTrack.SklikProductAd(o,this.createProductAd(d, r))) : "TXT" == d.adType ? o.addAd(new AdTrack.SklikAd(o,this.createTextAdOld(d))) : "COMBINED" == d.adType ? o.addAd(new AdTrack.SklikAd(o,this.createTextAdCombined(d))) : "SHOP" == d.adType ? o.addShop(this.createShop(d)) : o.addAd(new AdTrack.SklikAd(o,this.createTextAd(d)))
            }
            return new AdTrack.TextChannel(this.track,this.definition,this.chd).renderAds(e, o),
            !0
        },
        createTextAdCombined: function(t) {
            var e = new AdTrack.TextAd
              , i = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90"
              , n = t.adSquareImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90"
              , r = this.track.rhtmlspecialchars(t.shortHeadline).trim()
              , s = (this.track.rhtmlspecialchars(t.longHeadline).trim(),
            this.track.rhtmlspecialchars(t.description).trim())
              , o = this.track.rhtmlspecialchars(t.cta)
              , a = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , d = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            return e.addScreenshot(i, 600, 314, i),
            e.addScreenshot(n, 600, 600, i),
            e.addText(r, s),
            e.setCompanyName(t.companyName),
            e.setLogoUrl(t.adLogoUrl),
            e.setSquareLogoUrl(t.adSquareLogoUrl),
            e.setClickUrl(d),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(o),
            e.setFavicon(a),
            e.done(),
            e
        },
        createTextAd: function(t) {
            var e = new AdTrack.TextAd
              , i = "//fimg-resp.seznam.cz/?spec=ft160x110&fast&url=" + encodeURIComponent(t.adUrl)
              , n = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl)
              , r = (encodeURIComponent(t.adUrl),
            this.track.rhtmlspecialchars(t.headline1).trim())
              , s = this.track.rhtmlspecialchars(t.headline2).trim()
              , o = this.track.rhtmlspecialchars(t.description).trim()
              , a = this.track.rhtmlspecialchars(t.cta)
              , d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            if (0 !== t.adImageUrl.length) {
                i = t.adImageUrl + "?fl=res%2C160%2C110%2C3|jpg%2C90",
                n = t.adImageUrl + "?fl=res%2C560%2C260%2C3|jpg%2C90";
                var h = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90";
                e.addScreenshot(i, 160, 110, i),
                e.addScreenshot(n, 560, 260, n),
                e.addScreenshot(h, 600, 314, h)
            } else
                e.addScreenshot(i, 160, 110, i),
                e.addScreenshot(n, 280, 130, n);
            return e.addText(r, o),
            s && (0 !== t.adImageUrl.length || e.addText(r + " - " + s, o)),
            e.setClickUrl(c),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(a),
            e.setFavicon(d),
            e.done(),
            e
        },
        createTextAdOld: function(t) {
            var e = new AdTrack.TextAd
              , i = "//fimg-resp.seznam.cz/?spec=ft100x75&fast&url=" + encodeURIComponent(t.adUrl)
              , n = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl)
              , r = (encodeURIComponent(t.adUrl),
            this.track.rhtmlspecialchars(t.creative1).trim())
              , s = this.track.rhtmlspecialchars(t.creative2).trim()
              , o = this.track.rhtmlspecialchars(t.creative3).trim()
              , a = this.track.rhtmlspecialchars(t.cta)
              , d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl)
              , c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
            return e.addScreenshot(i, 100, 75, i),
            e.addScreenshot(n, 280, 130, n),
            e.addText(r, s + " " + o),
            e.setClickUrl(c),
            e.setVisibleUrl(t.visibleUrl),
            e.setAdUrl(t.adUrl),
            e.setCta(a),
            e.setFavicon(d),
            e.done(),
            e
        },
        createProductAd: function(t, e) {
            var i = new AdTrack.ProductAd
              , n = this.style.options.imageWidth || this.definition.options.imageWidth || null
              , r = this.style.options.imageHeight || this.definition.options.imageHeight || null;
            n && r || (n = 220,
            r = 120);
            var s = t.imageUrl + "?w=" + n + "&h=" + r + "&m=rp"
              , o = t.imageUrl + "?w=220&h=120&m=rp";
            this.style && this.style.options && this.style.options.backgroundImage && (s = t.imageUrl,
            o = t.imageUrl);
            var a = e && e.cleanShopUrl ? "https://fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(e.cleanShopUrl) : ""
              , d = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl
              , c = t.price + "&nbsp;Kč";
            return i.addScreenshot(s, n, r, o),
            i.setProductName(t.title),
            i.setProductPrice(c),
            i.setProductManufacturer(t.manufacturer),
            i.setProductCategory(t.category),
            i.setClickUrl(d),
            i.setFavicon(a),
            i.done(),
            i
        },
        createShop: function(t) {
            var e = new AdTrack.Shop
              , i = t.cleanShopUrl
              , n = i.split("//");
            return n.length > 1 ? e.setCleanShopUrl(n[1]) : e.setCleanShopUrl(i),
            e.setShopName(t.shopName),
            e.setShopUrl(t.shopUrl),
            e.setShopLogo(t.shopLogoUrl),
            e.setLogoutUrl(""),
            e
        },
        isProductAd: function(t) {
            return t.length > 0 && ("DRTG" == t[0].adType || "SHOP" == t[0].adType)
        },
        isBanner: function(t) {
            return t.length > 0 && (t[0].isBanner || "BANNER" == t[0].adType)
        },
        renderBanner: function(t, e, i, n) {
            var r = t[0];
            i && (i.name = "banner");
            var s = this.definition.test ? this.track.noquerystring("//seznam.cz") : r.clickUrl
              , o = this.track.document.createElement("div");
            o.style.textAlign = "center",
            o.style.fontSize = "0";
            var a = this.track.document.createElement("div");
            a.style.display = "inline-block",
            a.style.position = "relative",
            a.style.margin = "auto",
            o.appendChild(a),
            e.appendChild(o);
            var d = this.track.document.createElement("a");
            this.definition.options.hideHref ? d.href = "#" : d.href = s,
            a.appendChild(d);
            var c, h, l, u = this.track.document.createElement("img");
            if (u.src = r.bannerUrl,
            u.style.width = "auto",
            u.style.height = "auto",
            u.style.border = "solid 1px #d0d0d0",
            d.appendChild(u),
            d.onclick = (c = 0,
            h = "banner",
            l = s,
            function(t) {
                var e = t.pageX || t.clientX + this.track.document.body.scrollLeft
                  , n = t.pageY || t.clientY + this.track.document.body.scrollTop;
                this.track.evClick(this.definition, this.chd, e, n, c, h, l, i),
                this.definition.options.newwindow || (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            }
            ).bind(this),
            this.definition.options.newwindow ? d.setAttribute("target", "_blank") : d.setAttribute("target", "_top"),
            !this.definition.options.noBannerPromo && ("sklik" == this.chd.tag || "sklik-banner" == this.chd.tag)) {
                var p = this.track.document.createElement("a");
                p.style.position = "absolute",
                p.style.bottom = "0px",
                p.style.right = "0px",
                p.style.background = "transparent",
                p.href = this.chd.url;
                var f = this.track.document.createElement("img");
                f.alt = f.title = this.chd.title,
                f.style.width = "auto",
                f.style.height = "auto",
                p.appendChild(f);
                var g = function() {
                    f.src = "//c.imedia.cz/img/banner-packa.png"
                };
                p.onmouseover = function() {
                    f.src = "//c.imedia.cz/img/banner-logo.png"
                }
                ,
                p.onmouseout = g,
                g(),
                a.appendChild(p)
            }
            var m = function(t, e, i, n) {
                this.destroyed || (e && e.options && (e.options.width = n.width,
                e.options.height = n.height),
                this.measureImpress(t, e, i),
                this.track.loaded(this.definition, this.chd, this.count, e, null))
            }
            .bind(this);
            if (u.complete)
                m(e, i, n, u);
            else {
                u.onload = function(t, e) {
                    var i = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        return t.apply(e, i.concat(Array.prototype.slice.call(arguments)))
                    }
                }((function(t, e, i, n) {
                    m(t, e, i, n.target)
                }
                ), this, e, i, n)
            }
        },
        destroy: function() {
            this.destroyed = !0
        },
        measureImpress: function(t, e, i) {
            null !== i && this.track.renderer.on("impress", (function() {
                (new Image).src = i
            }
            ))
        },
        computeHash: function() {
            var t, e, i = [];
            for (e in screen)
                i.push(screen[e]);
            if (navigator.plugins && navigator.plugins.length)
                for (t = 0; t < navigator.plugins.length; t++) {
                    var n = navigator.plugins[t];
                    i.push(n.description),
                    i.push(n.filename);
                    for (var r = 0; r < n.length; r++) {
                        var s = n[r];
                        i.push(s.description),
                        i.push(s.suffixes),
                        i.push(s.type)
                    }
                }
            else if (window.ActiveXObject) {
                var o, a, d = {
                    "AcroPDF.PDF": function() {
                        return this.GetVersions()
                    },
                    "PDF.PdfCtrl": function() {
                        return this.GetVersions()
                    },
                    "ShockwaveFlash.ShockwaveFlash": function() {
                        return this.GetVariable("$version")
                    },
                    "QuickTime.QuickTime": function() {
                        return this.QuickTimeVersion
                    },
                    "rmocx.RealPlayer G2 Control": function() {
                        return this.GetVersionInfo()
                    },
                    "rmocx.RealPlayer G2 Control.1": function() {
                        return this.GetVersionInfo()
                    },
                    "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)": function() {
                        return this.GetVersionInfo()
                    },
                    "RealVideo.Rep.CalVideo(tm) ActiveX Control (32-bit)": function() {
                        return this.GetVersionInfo()
                    },
                    RealPlayer: function() {
                        return this.GetVersionInfo()
                    },
                    "WMPlayer.OCX": function() {
                        return this.versionInfo
                    },
                    "AgControl.AgControl": function() {
                        return (this.IsVersionSupported("3.0") ? "3" : this.IsVersionSupported("2.0") && "2") || this.IsVersionSupported("1.0") && "1"
                    },
                    "VideoLAN.VLCPlugin": function() {
                        return this.VersionInfo
                    }
                };
                for (e in d) {
                    try {
                        o = new ActiveXObject(e),
                        i.push(e)
                    } catch (t) {
                        continue
                    }
                    try {
                        a = d[e].call(o),
                        i.push(a)
                    } catch (t) {
                        i.push("[unavail]")
                    }
                }
            }
            var c = i.join("").toLowerCase()
              , h = [0, 0, 0, 0]
              , l = 0;
            for (t = 0; t < c.length; t++)
                h[l] = (h[l] + c.charCodeAt(t)) % 65535,
                l = (l + 1) % h.length;
            return h.join("")
        },
        getTestAds: function() {
            return null
        }
    }
}
, function(t, e) {
    AdTrack.SmartAdServerHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.SmartHelper(t,e,i),
        this.MTsupport = !0
    }
    ,
    AdTrack.SmartAdServerHBChannel.prototype = {
        report: function() {
            return this.response ? this.response.ad : ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.ad) {
                        this.chd.width = this.bidResponse.getDimension().width,
                        this.chd.height = this.bidResponse.getDimension().height;
                        var e = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: t.ad,
                                type: "content"
                            }
                        }
                          , n = new AdTrack.MediaTypes.Banner(e,this.track.errorReporting);
                        i(n)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.SmartAdServerHBNativeChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.helper = new AdTrack.SmartHelper(t,e,i)
    }
    ,
    AdTrack.SmartAdServerHBNativeChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            this.helper.bid(this.bidResponse, e, function(e, i) {
                this.price = e,
                this.response = i,
                t(e, i)
            }
            .bind(this))
        },
        render: function(t, e) {
            e = e.normal;
            var i = this.track.getChannelKey(this.chd, e);
            if (i) {
                var n = function(i) {
                    if (i && i.ad) {
                        this.chd.width = i.width ? i.width : this.chd.width,
                        this.chd.height = i.height ? i.height : this.chd.height;
                        try {
                            var n = i.ad.indexOf("{")
                              , r = JSON.parse(i.ad.substr(n).replace(/,(\s)?]/g, "]"))
                        } catch (t) {
                            r = !1,
                            this.chd.logs && this.chd.logs.creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.creative, this.chd.tag, i.creativeId || "", "", i.cpm, i.ad)
                        }
                        if (r)
                            if (r.imgUrl && r.title) {
                                this.adData = r;
                                var s = new AdTrack.AdSet;
                                s.setStyle(e);
                                var o = r.privacy ? r.privacy : ""
                                  , a = new AdTrack.AdChoices;
                                a.setPromoClickUrl(o || this.chd.url),
                                o && a.setPromoIcon("//" + this.track.server + "/icon/oba.png"),
                                a.setPromoText(this.chd.title),
                                a.setOptional(!o),
                                s.addAdChoices(a);
                                var d = new AdTrack.TextAd
                                  , c = i.adUrl ? i.adUrl : "";
                                d.addScreenshot(r.imgUrl),
                                d.addText(r.title, r.data),
                                d.setClickUrl(r.clickUrl),
                                d.setAdUrl(c),
                                d.setCta("Navštívit stránku"),
                                d.done(),
                                s.addAd(new AdTrack.SmartAd(s,d)),
                                this.textChannel = new AdTrack.TextChannel(this.track,this.definition,this.chd),
                                this.textChannel.renderAds(t, s),
                                this.track.loaded(this.definition, this.chd, 1, e, null),
                                this.track.measureImpress(t, function(t, i) {
                                    this.track.evImpress(this.definition, this.chd, e, i),
                                    r.eventTrackers && r.eventTrackers.length > 0 && r.eventTrackers.forEach(function(t) {
                                        if (t.event && t.method && t.url)
                                            if (t.event > 4 || t.method > 2)
                                                this.track.doError("Cant handle custom tracker - event: " + t.method.event + ", method: " + t.method);
                                            else if (1 === t.method && ((new Image).src = t.url),
                                            2 === t.method) {
                                                var e = document.createElement("script");
                                                document.querySelector("head").appendChild(e),
                                                e.src = t.url
                                            }
                                    }
                                    .bind(this))
                                }
                                .bind(this)),
                                r.impPixel && r.impPixel.forEach((function(t) {
                                    (new Image).src = t
                                }
                                ))
                            } else
                                this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!r.imgUrl + "|title:" + !!r.title + ")"),
                                this.track.passback(this.definition, this.chd);
                        else
                            this.track.doError("[" + this.chd.tag + "] Could not parse response"),
                            this.track.passback(this.definition, this.chd)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? n(this.response) : this.bid((function(t, e) {
                    n(e)
                }
                ), i)
            } else
                this.track.doError("Undefined key")
        }
    }
}
, function(t, e) {
    AdTrack.SmartHBOutstreamChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0
    }
    ,
    AdTrack.SmartHBOutstreamChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = "adTrackCallback" + Math.round(1e6 * Math.random());
            window[i] = function(e) {
                e && e.ad ? (this.response = e,
                e.currency === this.chd.currency ? (this.price = AdTrack.Price.create(e.cpm, this.chd.currency),
                this.bidResponse.setCreativeId(e.creativeId),
                this.bidResponse.setPrice(this.price),
                this.bidResponse.setWidth(e.width),
                this.bidResponse.setHeight(e.height)) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + e.currency)) : (this.price = null,
                this.response = e),
                t && t(this.price, this.response)
            }
            .bind(this);
            var n = this.generateBidUrl(e, i);
            if (this.definition.options.noAsync)
                document.write('<script src="' + n + '"><\/script>');
            else {
                var r = document.createElement("script");
                r.onerror = function() {
                    this.price = null,
                    this.response = {},
                    t && t(this.price, this.response)
                }
                .bind(this),
                r.setAttribute("src", n),
                document.getElementsByTagName("head")[0].appendChild(r)
            }
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.ad) {
                        this.adData = t.ad;
                        var n = this.track.window.document.getElementById("AdTrackOutstreamSmart");
                        if (n)
                            this.track.doError("Smart outstream already on page"),
                            this.track.passback(this.definition, this.chd);
                        else {
                            this.chd.width = t.width ? t.width : this.chd.width,
                            this.chd.height = t.height ? t.height : this.chd.height;
                            var r = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + t.ad + "</body></html>"
                              , s = {
                                chd: this.chd,
                                ad: {
                                    type: "content",
                                    data: r
                                },
                                externalRender: !0
                            }
                              , o = new AdTrack.MediaTypes.Video(s,this.track.errorReporting);
                            o.on("beforeRender", function(t) {
                                var i = t.ownerDocument || document;
                                (n = i.createElement("div")).setAttribute("id", "AdTrackOutstreamSmart"),
                                t.appendChild(n),
                                this.track.addEvent(this.track.window, "adBegin", function() {
                                    this.track.evImpress(this.definition, this.chd, e, 1)
                                }
                                .bind(this))
                            }
                            .bind(this)),
                            i(o)
                        }
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        generateBidUrl: function(t, e) {
            for (var i = [this.chd.width + "x" + this.chd.height], n = this.chd.sizes ? this.chd.sizes : [], r = 0; r < n.length; r++) {
                var s = n[r].join("x");
                i.push(s)
            }
            var o = t.split("-");
            3 !== o.length && this.track.doError("Wrong format for key, should be: [site_id]-[page_id]-[format_id]");
            var a = {};
            AdTrack.CMP && (a = AdTrack.CMP.getConsentData("never", !1)),
            a && this.track.evBidConsent(this.definition, this.chd);
            var d = {
                pbjscbk: e,
                siteid: o[0],
                pgid: o[1],
                fmtid: o[2],
                ccy: "EUR",
                bidfloor: 0,
                sizes: i.join(","),
                async: !this.definition.options.noAsync,
                gdpr_consent: a && a.consentString ? a.consentString : "",
                gdpr: a && a.gdprApplies ? 1 : 0
            };
            return "//prg.smartadserver.com/prebid?" + Object.keys(d).map((function(t) {
                return [t, d[t]].map(encodeURIComponent).join("=")
            }
            )).join("&")
        }
    }
}
, function(t, e) {
    var i;
    AdTrack.SmartyAdsHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.chd.sizes ? (this.sizes = this.chd.sizes,
        this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]],
        this.bidResponse = new AdTrack.Bid,
        this.MTsupport = !0,
        this.track.shouldCsync("smartyads") && setTimeout(function() {
            AdTrack.SmartyAdsHBCSync()
        }
        .bind(this), 5e3)
    }
    ,
    AdTrack.SmartyAdsHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            let i = AdTrack.Utils.windowTopAccess() || window;
            var n = {
                deviceWidth: screen.width,
                deviceHeight: screen.height,
                language: AdTrack.Utils.getLanguage(),
                secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
                host: i.location.host,
                page: i.location.pathname,
                ua: navigator.userAgent,
                placements: []
            }
              , r = {};
            AdTrack.CMP && (r = AdTrack.CMP.getConsentData("never", !1)),
            r && r.consentString && (this.track.evBidConsent(this.definition, this.chd),
            n.gdpr = r.gdprApplies ? 1 : 0,
            n.gdpr_consent = r.consentString),
            n.placements.push({
                placementId: Number(e),
                bidId: AdTrack.Utils.randomString("adtrack"),
                sizes: this.sizes,
                traffic: "banner"
            });
            var s = function(e) {
                if (this.response = e,
                e && e[0]) {
                    var i = e[0];
                    i.currency && i.currency === AdTrack.Price.USD ? i.cpm ? (this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD),
                    this.bidResponse.setPrice(this.price),
                    this.bidResponse.setCreativeId(i.creativeId),
                    i.width && i.height ? (this.bidResponse.setWidth(i.width || this.chd.width),
                    this.bidResponse.setHeight(i.height || this.chd.height),
                    t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " - dimensions missing."),
                    t && t(null, null))) : t && t(null, null) : (this.track.doError("Channel " + this.chd.tag + " responded with wrong currency: " + i.currency),
                    t && t(null, null))
                } else
                    t && t(null, null)
            }
            .bind(this)
              , o = function(e, i) {
                i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd),
                this.price = null,
                t && t(null, null)
            }
            .bind(this);
            AdTrack.Ajax.request({
                label: "Smarty bid",
                url: "https://ssp-nj.webtradehub.com/?c=o&m=multi",
                method: "POST",
                async: !this.definition.options.noAsync,
                json: !0,
                timeout: this.chd.timeout || 800,
                data: JSON.stringify(n),
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(t) {
                s(t)
            }
            )).fail((function(t, e) {
                o(t, e)
            }
            )).send()
        },
        render: function(t, e, i) {
            this.container = t,
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t[0] && t[0].ad) {
                        var e = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: "<html><head></head><body>" + t[0].ad + "</body></html>",
                                type: "content"
                            }
                        };
                        this.adData = e.ad.data;
                        var n = new AdTrack.MediaTypes.Banner(e,this.track.errorReporting);
                        n.on("load", function() {
                            var e = n.getElement();
                            e && AdTrack.Utils.addEvent(e, "load", function() {
                                e.contentDocument.querySelectorAll("img:not([src])").length > 0 && this.track.doError("[" + this.chd.tag + "] Empty creative: '" + t[0].creativeId + "'", "debug")
                            }
                            .bind(this))
                        }
                        .bind(this)),
                        i(n)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    },
    AdTrack.SmartyAdsHBCSync = AdTrack.SmartyAdsHBCSync || (i = !1,
    function() {
        i || ((new Image).src = "https://ssp-nj.webtradehub.com/?c=o&m=cookie",
        i = !0)
    }
    )
}
, function(t, e) {
    var i;
    AdTrack.StroeerChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.chd.sizes ? (this.sizes = this.chd.sizes,
        this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]],
        this.bidResponse = new AdTrack.Bid,
        this.track.shouldCsync("stroeer") && setTimeout(function() {
            AdTrack.StroeerCSync()
        }
        .bind(this), 5e3),
        this.MTsupport = !0
    }
    ,
    AdTrack.StroeerChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            var i = {
                id: AdTrack.Utils.randomString("AdTrackAuction"),
                bids: [],
                ref: AdTrack.url,
                ssl: AdTrack.Utils.isSecure(AdTrack.url),
                mpa: null !== AdTrack.Utils.windowTopAccess(),
                timeout: 500,
                ssat: 2
            }
              , n = this.track.getSupplyChain();
            n && (i.schain = n);
            var r = {};
            AdTrack.CMP && (r = AdTrack.CMP.getConsentData("never", !1)),
            r && (this.track.evBidConsent(this.definition, this.chd),
            i.gdpr = {
                consent: r.consentString,
                applies: !!r.gdprApplies
            }),
            i.bids.push({
                bid: AdTrack.Utils.randomString("AdTrack"),
                sid: e,
                siz: this.sizes,
                viz: !0
            });
            var s = function(e) {
                if (this.response = e,
                e.bids && e.bids.length > 0)
                    if (e.bids[0]) {
                        var i = e.bids[0]
                          , n = AdTrack.Utils.isBlackListedAds(i.ad);
                        !1 === n ? i.ad.match("js.adscale.de/render.js") ? (this.track.doError("Channel " + this.chd.tag + " responded with custom renderer. CRID(" + i.crid + ")"),
                        t && t(null, null)) : i.cpm || i.cpm2 ? (this.price = AdTrack.Price.create(i.cpm2 || i.cpm, this.chd.currency),
                        this.bidResponse.setPrice(this.price),
                        this.bidResponse.setCreativeId(i.crid),
                        i.width && i.height && (this.bidResponse.setWidth(i.width),
                        this.bidResponse.setHeight(i.height)),
                        t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " responded with empty currency."),
                        t && t(null, null)) : (this.track.doError("Blocked Stroeer creative (" + i.crid + ") from " + n, "info"),
                        this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, i.crid || "", "", i.cpm, i.ad),
                        t && t(null, null))
                    } else
                        this.track.doError("Channel " + this.chd.tag + " responded with unknown response."),
                        t && t(null, null);
                else
                    t && t(null, null)
            }
            .bind(this)
              , o = function(e, i) {
                i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd),
                this.price = null,
                t && t(null, null)
            }
            .bind(this);
            AdTrack.Ajax.request({
                label: "Stroeer bid",
                url: "https://hb.adscale.de/dsh",
                method: "POST",
                async: !this.definition.options.noAsync,
                json: !0,
                timeout: this.chd.timeout || 800,
                data: JSON.stringify(i),
                ontimeout: function() {
                    this.track.evBidTimeout(this.definition, this.chd, !0)
                }
                .bind(this),
                onerror: function() {
                    this.track.evBidError(this.definition, this.chd, !0)
                }
                .bind(this)
            }, this.track.errorReporting).done((function(t) {
                s(t)
            }
            )).fail((function(t, e) {
                o(t, e)
            }
            )).send()
        },
        render: function(t, e, i) {
            e = e.normal;
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.bids && t.bids[0] && t.bids[0].ad) {
                        t.bids[0].width && t.bids[0].height && (this.chd.width = t.bids[0].width,
                        this.chd.height = t.bids[0].height),
                        this.adData = t.bids[0].ad;
                        var e = {
                            chd: this.chd,
                            width: this.bidResponse.getDimension().width,
                            height: this.bidResponse.getDimension().height,
                            ad: {
                                data: t.bids[0].ad,
                                type: "content"
                            }
                        }
                          , n = new AdTrack.MediaTypes.Banner(e,this.track.errorReporting);
                        i(n)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        }
    },
    AdTrack.StroeerCSync = AdTrack.StroeerCSync || (i = !1,
    function() {
        if (!i) {
            var t = window.document.createElement("script");
            t.async = !0,
            t.defer = !0,
            t.type = "text/javascript",
            t.src = "https://js.adscale.de/userconnect.js",
            window.document.getElementsByTagName("head")[0].appendChild(t),
            i = !0
        }
    }
    )
}
, function(t, e) {
    var i;
    AdTrack.TeadsHBChannel = function(t, e, i) {
        this.track = t,
        this.definition = e,
        this.chd = i,
        this.price = null,
        this.response = null,
        this.bidResponse = new AdTrack.Bid,
        this.pageId = null,
        this.placementId = null;
        try {
            var n = this.chd.keys[1].split("-");
            this.pageId = n[0],
            this.placementId = n[1]
        } catch (t) {}
        this.track.shouldCsync("teads") && setTimeout(function() {
            AdTrack.TeadsCSync(this.pageId, this.placementId, this.track.cmpFallback, this.track.cookiesEnabled)
        }
        .bind(this), 5e3),
        this.MTsupport = !0
    }
    ,
    AdTrack.TeadsHBChannel.prototype = {
        report: function() {
            return this.adData || ""
        },
        bid: function(t, e) {
            if (AdTrack.Utils.windowTopAccess()) {
                var i = this.createData(e)
                  , n = this;
                AdTrack.Ajax.request({
                    label: "Teads bid",
                    url: "https://a.teads.tv/hb/bid-request",
                    method: "POST",
                    data: JSON.stringify(i),
                    json: !0,
                    async: !this.definition.options.noAsync,
                    headers: {},
                    timeout: this.chd.timeout || 800,
                    ontimeout: function() {
                        this.track.evBidTimeout(this.definition, this.chd, !0)
                    }
                    .bind(this),
                    onerror: function() {
                        this.track.evBidError(this.definition, this.chd, !0)
                    }
                    .bind(this)
                }, this.track.errorReporting).done((function(e) {
                    var i = null;
                    if (e && e.responses && e.responses[0]) {
                        var r = e.responses[0];
                        if (r.cpm)
                            if (r.currency && r.currency !== AdTrack.Price.EUR && r.currency !== AdTrack.Price.USD && "CHF" !== r.currency)
                                n.track.doError("Channel " + n.chd.tag + " responsed with wrong currency: " + r.currency);
                            else {
                                var s = r.cpm;
                                "CHF" === r.currency && (s *= .98),
                                r.currency === AdTrack.Price.USD && (s *= .96),
                                i = AdTrack.Price.create(s, AdTrack.Price.EUR),
                                n.bidResponse.setCreativeId(r.creativeId),
                                n.bidResponse.setPrice(i),
                                n.bidResponse.setWidth(r.width),
                                n.bidResponse.setHeight(r.height)
                            }
                    }
                    n.price = i,
                    n.response = e,
                    t && t(n.price, e)
                }
                )).fail((function(e, i) {
                    i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd),
                    n.track.debug("Channel", "Teads request failed: " + e, AdTrack.Log.WARNING),
                    n.price = null,
                    t && t(null, null)
                }
                )).send()
            } else
                this.track.doError("[teads-hb] window.top not accessible"),
                this.price = null,
                this.response = null,
                t && t(this.price, this.response)
        },
        render: function(t, e, i) {
            var n = this.track.getChannelKey(this.chd, e);
            if (n) {
                var r = function(t) {
                    if (t && t.responses && t.responses[0]) {
                        if (this.track.window.document.getElementById("AdTrackTeadsContainer"))
                            return this.track.doError("Teads container already on page"),
                            void this.track.passback(this.definition, this.chd);
                        var e = t.responses[0];
                        this.adData = e.ad,
                        this.chd.width = e.width ? e.width : this.chd.width,
                        this.chd.height = e.height ? e.height : this.chd.height;
                        var n = "<html><head></head><body>" + e.ad + "</body></html>"
                          , r = {
                            chd: this.chd,
                            width: 1,
                            height: 1,
                            ad: {
                                type: "content",
                                data: n
                            },
                            wrapAd: !0,
                            externalRender: !0,
                            preload: {}
                        };
                        r.preload.func = function() {
                            var t = s.getElement();
                            if (t) {
                                var e = t.contentWindow
                                  , i = function() {
                                    var t = e.teads.TAG[this.pageId][this.placementId][0];
                                    t && t.formatInstance && t.formatInstance.value && t.formatInstance.value.player && t.formatInstance.value.player.linearAd && t.formatInstance.value.player.linearAd.duration > 1 ? this.track.evImpress(this.definition, this.chd, null, 1) : setTimeout(i, 1e3)
                                }
                                .bind(this);
                                s.on("load", i);
                                var n = 0
                                  , r = function() {
                                    if (e.teads && e.teads.TAG) {
                                        try {
                                            var t = e.teads.TAG[this.pageId][this.placementId][0].state
                                        } catch (t) {
                                            return void s.error("Teads content check failed.")
                                        }
                                        if (2 === t || 3 === t)
                                            return void s.loaded();
                                        if (4 === t || 5 === t)
                                            return void s.error()
                                    }
                                    n < 20 ? (n++,
                                    setTimeout(r, 200)) : s.error()
                                }
                                .bind(this);
                                r()
                            }
                        }
                        .bind(this);
                        var s = new AdTrack.MediaTypes.Video(r,this.track.errorReporting);
                        s.on("beforeRender", function(t) {
                            var e = this.track.window.document.createElement("div");
                            e.setAttribute("id", "AdTrackTeadsContainer"),
                            t.appendChild(e)
                        }
                        .bind(this)),
                        i(s)
                    } else
                        this.track.passback(this.definition, this.chd)
                }
                .bind(this);
                this.price && this.response ? r(this.response) : this.bid((function(t, e) {
                    r(e)
                }
                ), n)
            } else
                this.track.doError("Undefined key")
        },
        createData: function(t) {
            for (var e = [this.chd.width + "x" + this.chd.height], i = this.chd.sizes ? this.chd.sizes : [], n = 0; n < i.length; n++) {
                var r = i[n].join("x");
                e.push(r)
            }
            var s = t.split("-");
            2 !== s.length && this.track.doError("Wrong format for key, should be: [pageId]-[placementId]");
            var o = s[0]
              , a = s[1]
              , d = "";
            try {
                d = this.track.getDomainName(window.top.location.hostname)
            } catch (t) {
                d = this.track.getDomainName(window.location.hostname)
            }
            var c = {
                referrer: d,
                data: [{
                    sizes: e,
                    bidId: Math.round(1e9 * Math.random()),
                    bidderRequestId: Math.round(1e9 * Math.random()),
                    placementId: Number(a),
                    pageId: Number(o),
                    adUnitCode: "AdTrackTeadsContainer",
                    auctionId: AdTrack.Utils.uuid(),
                    transactionId: AdTrack.Utils.uuid()
                }],
                pageReferrer: document.referrer,
                networkBandwidth: this.getConnectionDownLink(window.navigator),
                timeToFirstByte: this.getTimeToFirstByte(window),
                deviceWidth: screen.width,
                hb_version: "4.13.0"
            }
              , h = this.track.getSupplyChain();
            h && (c.schain = h);
            var l = {};
            return AdTrack.CMP && (l = AdTrack.CMP.getConsentData("never", !1)),
            l && (this.track.evBidConsent(this.definition, this.chd),
            c.gdpr_iab = {
                consent: l.consentString || "",
                status: l.gdprApplies ? 12 : 0,
                apiVersion: l.version
            }),
            c
        },
        getConnectionDownLink: function(t) {
            return t && t.connection && t.connection.downlink >= 0 ? t.connection.downlink.toString() : ""
        },
        getTimeToFirstByte: function(t) {
            const e = t.performance || t.webkitPerformance || t.msPerformance || t.mozPerformance
              , i = e && "function" == typeof e.getEntriesByType && "[object Function]" === Object.prototype.toString.call(e.getEntriesByType) && e.getEntriesByType("navigation")[0] && e.getEntriesByType("navigation")[0].responseStart && e.getEntriesByType("navigation")[0].requestStart && e.getEntriesByType("navigation")[0].responseStart > 0 && e.getEntriesByType("navigation")[0].requestStart > 0 && Math.round(e.getEntriesByType("navigation")[0].responseStart - e.getEntriesByType("navigation")[0].requestStart);
            if (i)
                return i.toString();
            const n = e && e.timing.responseStart && e.timing.requestStart && e.timing.responseStart > 0 && e.timing.requestStart > 0 && e.timing.responseStart - e.timing.requestStart;
            return n ? n.toString() : ""
        }
    },
    AdTrack.TeadsCSync = AdTrack.TeadsCSync || (i = !1,
    function(t, e, n, r) {
        if (!i) {
            var s = null;
            AdTrack.CMP && (s = AdTrack.CMP.getConsentData("never", !1));
            let t = {
                hb_provider: "prebid",
                hb_version: "3.4"
            };
            if (s) {
                var o = s.consentString || "";
                let e = {
                    status: s.gdprApplies ? 12 : 0,
                    consent: o
                };
                t.gdprIab = JSON.stringify(e)
            }
            e && (t.placementId = e);
            var a = Object.keys(t).map((function(e) {
                return [e, t[e]].map(encodeURIComponent).join("=")
            }
            )).join("&");
            AdTrack.Utils.csyncFrame("https://sync.teads.tv/iframe?" + a),
            i = !0
        }
    }
    )
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    i(0),
    i(1),
    i(2),
    i(3),
    i(4),
    i(5),
    i(6),
    i(7),
    i(8),
    i(29),
    i(30),
    i(9),
    i(10),
    i(31),
    i(32),
    i(33),
    i(34),
    i(35),
    i(36),
    i(37),
    i(11),
    i(38),
    i(12),
    i(13),
    i(15),
    i(16),
    i(17),
    i(18),
    i(39),
    i(19),
    i(40),
    i(20),
    i(41),
    i(21),
    i(22),
    i(42),
    i(43),
    i(23),
    i(24),
    i(25),
    i(44),
    i(45),
    i(26),
    i(46),
    i(47),
    i(48),
    i(27),
    i(49),
    i(50),
    i(51),
    i(28),
    i(52),
    i(53),
    i(54),
    i(55),
    i(56),
    i(57),
    i(58),
    i(59),
    i(60),
    i(61),
    i(62),
    i(63),
    i(64),
    i(65),
    i(66),
    i(67),
    i(68),
    i(69),
    i(70),
    i(71),
    i(72),
    i(73),
    i(74),
    i(75),
    i(76),
    i(77),
    i(78),
    t.exports = i(79)
}
]);

AdTrack.units["classic_grid.id_hb_970x250"] = new AdTrack.Dispatcher("classic","grid.id","hb","970x250",{
    "renderer": "flexi",
    "options": {
        "dom": {
            "method": "container",
            "selectorForeign": "1"
        },
        "hb": {
            "currency": "USD",
            "onlyPrebid": true,
            "sendPrebidDimension": true,
            "targeting": []
        },
        "noFPBNs": {
            "1": "36864793",
            "3": "35378918",
            "5": "38308494",
            "7": "37087795",
            "9": "37388055",
            "13": "37471860",
            "15": "37543676",
            "19": "37827190",
            "21": "37841587",
            "23": "37848515",
            "25": "37974109",
            "27": "37974663",
            "31": "38062118",
            "33": "38105499",
            "35": "38155389",
            "41": "38205101",
            "43": "38206998",
            "45": "38207000",
            "47": "38294481",
            "49": "38397175",
            "51": "38499466",
            "53": "38499409",
            "55": "38564125",
            "57": "38564378",
            "59": "38564379",
            "63": "38564531",
            "65": "38564652",
            "67": "38578260",
            "73": "38607930",
            "75": "38814525",
            "83": "38943634",
            "85": "39048920",
            "87": "39152378",
            "89": "39464480",
            "93": "39671195",
            "95": "39671197",
            "97": "39863294",
            "99": "40165496",
            "101": "40177548",
            "103": "40304968",
            "107": "40548792",
            "109": "40769002",
            "111": "40769003",
            "113": "40769102",
            "115": "40954941",
            "117": "40954952",
            "119": "40964226",
            "121": "40964227",
            "123": "41110847",
            "125": "508238",
            "129": "41289790",
            "131": "41289791",
            "135": "41293384",
            "145": "41110891",
            "147": "41390292",
            "149": "41526930",
            "153": "41579327",
            "155": "41640870",
            "157": "41649243",
            "159": "41649244",
            "161": "41903685",
            "163": "42688264",
            "165": "42749800",
            "167": "42749857",
            "169": "42936660",
            "171": "42758494",
            "173": "42989624",
            "175": "43026410",
            "177": "43121537",
            "179": "43748272",
            "181": "43748273",
            "183": "43748274",
            "185": "43748275",
            "187": "43816960",
            "191": "44023945",
            "193": "35330297",
            "195": "35330298",
            "197": "44031450",
            "199": "44056173",
            "201": "44838490",
            "203": "44973412",
            "205": "38235276",
            "207": "43687619",
            "209": "38235288",
            "211": "35191520",
            "213": "35192610",
            "215": "43718505"
        },
        "publisher": {
            "id": "243",
            "tag": "kompasGramedia"
        }
    },
    "waterfall": {
        "tiers": [{
            "method": "hb",
            "channels": [{
                "chd": {
                    "tag": "pubmatic-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "845643-3905322"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 970,
                    "height": 250,
                    "sizes": [[728, 90], [750, 200], [970, 210], [750, 100]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 17.78025320794327,
                "factorFixed": 18.85135279878323,
                "styles": []
            }, {
                "chd": {
                    "tag": "xandr",
                    "flag": "Zero",
                    "keys": {
                        "1": "21896929"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 970,
                    "height": 250,
                    "sizes": [[728, 90]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 21.421991816799125,
                "factorFixed": 21.421991816799125,
                "styles": []
            }]
        }]
    },
    "info": {
        "realDomain": "grid.id"
    },
    "currencies": {
        "EUR": 25.360113613308986,
        "USD": 21.421991816799125,
        "CZK": 1
    },
    "excludes": [],
    "cls": {
        "headline": "AdTrack-headline",
        "description": "AdTrack-description",
        "adChoices": "AdTrack-adChoices",
        "date": "AdTrack-date",
        "ad": "AdTrack-ad-*",
        "ads": "AdTrack-ads",
        "container": "AdTrack-container",
        "promoTitle": "AdTrack-promoTitle",
        "promoIcon": "AdTrack-promoIcon",
        "promoClick": "AdTrack-promoClick",
        "closeTitle": "AdTrack-closeTitle",
        "closeClick": "AdTrack-closeClick",
        "creative1": "AdTrack-creative1",
        "creative2": "AdTrack-creative2",
        "creative3": "AdTrack-creative3",
        "creative23": "AdTrack-creative23",
        "creative123": "AdTrack-creative123",
        "bannerUrl": "AdTrack-bannerUrl",
        "bannerRel": "AdTrack-bannerRel",
        "adUrl": "AdTrack-adUrl",
        "clickUrl": "AdTrack-clickUrl-*",
        "visibleUrl": "AdTrack-visibleUrl",
        "longHeadline": "AdTrack-longHeadline",
        "companyName": "AdTrack-companyName",
        "logoUrl": "AdTrack-logoUrl",
        "squareLogoUrl": "AdTrack-squareLogoUrl",
        "screenshot": "AdTrack-screenshot",
        "screenshothq": "AdTrack-screenshothq",
        "favicon": "AdTrack-favicon",
        "cta": "AdTrack-cta",
        "imageUrl": "AdTrack-imageUrl",
        "category": "AdTrack-category",
        "logoutUrl": "AdTrack-logoutUrl",
        "title": "AdTrack-title",
        "manufacturer": "AdTrack-manufacturer",
        "price": "AdTrack-price",
        "lastPrice": "AdTrack-lastPrice",
        "discount": "AdTrack-discount",
        "additionalInfo": "AdTrack-additionalInfo",
        "productDescription": "AdTrack-productDescription",
        "shopName": "AdTrack-shopName",
        "shopSlogan": "AdTrack-shopSlogan",
        "shopUrl": "AdTrack-shopUrl",
        "shopLogoUrl": "AdTrack-shopLogoUrl",
        "cleanShopUrl": "AdTrack-cleanShopUrl",
        "confirmImpUrl": "AdTrack-confirmImpUrl",
        "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
},null,"trackad.cz",null,{
    "timeout": 10000,
    "gdpr": true,
    "cmpFallback": "normal",
    "publisher": {
        "id": "243",
        "tag": "kompasGramedia"
    },
    "ip": "185.152.65.120"
});

AdTrack.units["classic_grid.id_hb_300x600"] = new AdTrack.Dispatcher("classic","grid.id","hb","300x600",{
    "renderer": "flexi",
    "options": {
        "dom": {
            "method": "container",
            "selectorForeign": "1"
        },
        "hb": {
            "currency": "USD",
            "onlyPrebid": true,
            "sendPrebidDimension": true,
            "targeting": []
        },
        "noFPBNs": {
            "1": "36864793",
            "3": "35378918",
            "5": "38308494",
            "7": "37087795",
            "9": "37388055",
            "13": "37471860",
            "15": "37543676",
            "19": "37827190",
            "21": "37841587",
            "23": "37848515",
            "25": "37974109",
            "27": "37974663",
            "31": "38062118",
            "33": "38105499",
            "35": "38155389",
            "41": "38205101",
            "43": "38206998",
            "45": "38207000",
            "47": "38294481",
            "49": "38397175",
            "51": "38499466",
            "53": "38499409",
            "55": "38564125",
            "57": "38564378",
            "59": "38564379",
            "63": "38564531",
            "65": "38564652",
            "67": "38578260",
            "73": "38607930",
            "75": "38814525",
            "83": "38943634",
            "85": "39048920",
            "87": "39152378",
            "89": "39464480",
            "93": "39671195",
            "95": "39671197",
            "97": "39863294",
            "99": "40165496",
            "101": "40177548",
            "103": "40304968",
            "107": "40548792",
            "109": "40769002",
            "111": "40769003",
            "113": "40769102",
            "115": "40954941",
            "117": "40954952",
            "119": "40964226",
            "121": "40964227",
            "123": "41110847",
            "125": "508238",
            "129": "41289790",
            "131": "41289791",
            "135": "41293384",
            "145": "41110891",
            "147": "41390292",
            "149": "41526930",
            "153": "41579327",
            "155": "41640870",
            "157": "41649243",
            "159": "41649244",
            "161": "41903685",
            "163": "42688264",
            "165": "42749800",
            "167": "42749857",
            "169": "42936660",
            "171": "42758494",
            "173": "42989624",
            "175": "43026410",
            "177": "43121537",
            "179": "43748272",
            "181": "43748273",
            "183": "43748274",
            "185": "43748275",
            "187": "43816960",
            "191": "44023945",
            "193": "35330297",
            "195": "35330298",
            "197": "44031450",
            "199": "44056173",
            "201": "44838490",
            "203": "44973412",
            "205": "38235276",
            "207": "43687619",
            "209": "38235288",
            "211": "35191520",
            "213": "35192610",
            "215": "43718505"
        },
        "publisher": {
            "id": "243",
            "tag": "kompasGramedia"
        }
    },
    "waterfall": {
        "tiers": [{
            "method": "hb",
            "channels": [{
                "chd": {
                    "tag": "pubmatic-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "845643-3905325"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 300,
                    "height": 600,
                    "sizes": [[300, 300], [250, 250], [160, 600], [120, 600]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 17.78025320794327,
                "factorFixed": 18.85135279878323,
                "styles": []
            }, {
                "chd": {
                    "tag": "xandr",
                    "flag": "Zero",
                    "keys": {
                        "1": "21898435"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 300,
                    "height": 600,
                    "sizes": [[234, 600], [300, 390], [160, 600], [300, 300], [300, 250], [120, 600]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 21.421991816799125,
                "factorFixed": 21.421991816799125,
                "styles": []
            }]
        }]
    },
    "info": {
        "realDomain": "grid.id"
    },
    "currencies": {
        "EUR": 25.360113613308986,
        "USD": 21.421991816799125,
        "CZK": 1
    },
    "excludes": [],
    "cls": {
        "headline": "AdTrack-headline",
        "description": "AdTrack-description",
        "adChoices": "AdTrack-adChoices",
        "date": "AdTrack-date",
        "ad": "AdTrack-ad-*",
        "ads": "AdTrack-ads",
        "container": "AdTrack-container",
        "promoTitle": "AdTrack-promoTitle",
        "promoIcon": "AdTrack-promoIcon",
        "promoClick": "AdTrack-promoClick",
        "closeTitle": "AdTrack-closeTitle",
        "closeClick": "AdTrack-closeClick",
        "creative1": "AdTrack-creative1",
        "creative2": "AdTrack-creative2",
        "creative3": "AdTrack-creative3",
        "creative23": "AdTrack-creative23",
        "creative123": "AdTrack-creative123",
        "bannerUrl": "AdTrack-bannerUrl",
        "bannerRel": "AdTrack-bannerRel",
        "adUrl": "AdTrack-adUrl",
        "clickUrl": "AdTrack-clickUrl-*",
        "visibleUrl": "AdTrack-visibleUrl",
        "longHeadline": "AdTrack-longHeadline",
        "companyName": "AdTrack-companyName",
        "logoUrl": "AdTrack-logoUrl",
        "squareLogoUrl": "AdTrack-squareLogoUrl",
        "screenshot": "AdTrack-screenshot",
        "screenshothq": "AdTrack-screenshothq",
        "favicon": "AdTrack-favicon",
        "cta": "AdTrack-cta",
        "imageUrl": "AdTrack-imageUrl",
        "category": "AdTrack-category",
        "logoutUrl": "AdTrack-logoutUrl",
        "title": "AdTrack-title",
        "manufacturer": "AdTrack-manufacturer",
        "price": "AdTrack-price",
        "lastPrice": "AdTrack-lastPrice",
        "discount": "AdTrack-discount",
        "additionalInfo": "AdTrack-additionalInfo",
        "productDescription": "AdTrack-productDescription",
        "shopName": "AdTrack-shopName",
        "shopSlogan": "AdTrack-shopSlogan",
        "shopUrl": "AdTrack-shopUrl",
        "shopLogoUrl": "AdTrack-shopLogoUrl",
        "cleanShopUrl": "AdTrack-cleanShopUrl",
        "confirmImpUrl": "AdTrack-confirmImpUrl",
        "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
},null,"trackad.cz",null,{
    "timeout": 10000,
    "gdpr": true,
    "cmpFallback": "normal",
    "publisher": {
        "id": "243",
        "tag": "kompasGramedia"
    },
    "ip": "185.152.65.120"
});

AdTrack.units["classic_grid.id_hb_300x250"] = new AdTrack.Dispatcher("classic","grid.id","hb","300x250",{
    "renderer": "flexi",
    "options": {
        "dom": {
            "method": "container",
            "selectorForeign": "1"
        },
        "hb": {
            "currency": "USD",
            "onlyPrebid": true,
            "sendPrebidDimension": true,
            "targeting": []
        },
        "noFPBNs": {
            "1": "36864793",
            "3": "35378918",
            "5": "38308494",
            "7": "37087795",
            "9": "37388055",
            "13": "37471860",
            "15": "37543676",
            "19": "37827190",
            "21": "37841587",
            "23": "37848515",
            "25": "37974109",
            "27": "37974663",
            "31": "38062118",
            "33": "38105499",
            "35": "38155389",
            "41": "38205101",
            "43": "38206998",
            "45": "38207000",
            "47": "38294481",
            "49": "38397175",
            "51": "38499466",
            "53": "38499409",
            "55": "38564125",
            "57": "38564378",
            "59": "38564379",
            "63": "38564531",
            "65": "38564652",
            "67": "38578260",
            "73": "38607930",
            "75": "38814525",
            "83": "38943634",
            "85": "39048920",
            "87": "39152378",
            "89": "39464480",
            "93": "39671195",
            "95": "39671197",
            "97": "39863294",
            "99": "40165496",
            "101": "40177548",
            "103": "40304968",
            "107": "40548792",
            "109": "40769002",
            "111": "40769003",
            "113": "40769102",
            "115": "40954941",
            "117": "40954952",
            "119": "40964226",
            "121": "40964227",
            "123": "41110847",
            "125": "508238",
            "129": "41289790",
            "131": "41289791",
            "135": "41293384",
            "145": "41110891",
            "147": "41390292",
            "149": "41526930",
            "153": "41579327",
            "155": "41640870",
            "157": "41649243",
            "159": "41649244",
            "161": "41903685",
            "163": "42688264",
            "165": "42749800",
            "167": "42749857",
            "169": "42936660",
            "171": "42758494",
            "173": "42989624",
            "175": "43026410",
            "177": "43121537",
            "179": "43748272",
            "181": "43748273",
            "183": "43748274",
            "185": "43748275",
            "187": "43816960",
            "191": "44023945",
            "193": "35330297",
            "195": "35330298",
            "197": "44031450",
            "199": "44056173",
            "201": "44838490",
            "203": "44973412",
            "205": "38235276",
            "207": "43687619",
            "209": "38235288",
            "211": "35191520",
            "213": "35192610",
            "215": "43718505"
        },
        "publisher": {
            "id": "243",
            "tag": "kompasGramedia"
        }
    },
    "waterfall": {
        "tiers": [{
            "method": "hb",
            "channels": [{
                "chd": {
                    "tag": "pubmatic-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "845643-3905324"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 300,
                    "height": 250,
                    "sizes": [[250, 250], [300, 50], [300, 100], [200, 200]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 17.78025320794327,
                "factorFixed": 18.85135279878323,
                "styles": []
            }, {
                "chd": {
                    "tag": "xandr",
                    "flag": "Zero",
                    "keys": {
                        "1": "21897925"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 300,
                    "height": 250,
                    "sizes": [[250, 250], [300, 120], [300, 100], [200, 200], [180, 150], [300, 50], [234, 60]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 21.421991816799125,
                "factorFixed": 21.421991816799125,
                "styles": []
            }]
        }]
    },
    "info": {
        "realDomain": "grid.id"
    },
    "currencies": {
        "EUR": 25.360113613308986,
        "USD": 21.421991816799125,
        "CZK": 1
    },
    "excludes": [],
    "cls": {
        "headline": "AdTrack-headline",
        "description": "AdTrack-description",
        "adChoices": "AdTrack-adChoices",
        "date": "AdTrack-date",
        "ad": "AdTrack-ad-*",
        "ads": "AdTrack-ads",
        "container": "AdTrack-container",
        "promoTitle": "AdTrack-promoTitle",
        "promoIcon": "AdTrack-promoIcon",
        "promoClick": "AdTrack-promoClick",
        "closeTitle": "AdTrack-closeTitle",
        "closeClick": "AdTrack-closeClick",
        "creative1": "AdTrack-creative1",
        "creative2": "AdTrack-creative2",
        "creative3": "AdTrack-creative3",
        "creative23": "AdTrack-creative23",
        "creative123": "AdTrack-creative123",
        "bannerUrl": "AdTrack-bannerUrl",
        "bannerRel": "AdTrack-bannerRel",
        "adUrl": "AdTrack-adUrl",
        "clickUrl": "AdTrack-clickUrl-*",
        "visibleUrl": "AdTrack-visibleUrl",
        "longHeadline": "AdTrack-longHeadline",
        "companyName": "AdTrack-companyName",
        "logoUrl": "AdTrack-logoUrl",
        "squareLogoUrl": "AdTrack-squareLogoUrl",
        "screenshot": "AdTrack-screenshot",
        "screenshothq": "AdTrack-screenshothq",
        "favicon": "AdTrack-favicon",
        "cta": "AdTrack-cta",
        "imageUrl": "AdTrack-imageUrl",
        "category": "AdTrack-category",
        "logoutUrl": "AdTrack-logoutUrl",
        "title": "AdTrack-title",
        "manufacturer": "AdTrack-manufacturer",
        "price": "AdTrack-price",
        "lastPrice": "AdTrack-lastPrice",
        "discount": "AdTrack-discount",
        "additionalInfo": "AdTrack-additionalInfo",
        "productDescription": "AdTrack-productDescription",
        "shopName": "AdTrack-shopName",
        "shopSlogan": "AdTrack-shopSlogan",
        "shopUrl": "AdTrack-shopUrl",
        "shopLogoUrl": "AdTrack-shopLogoUrl",
        "cleanShopUrl": "AdTrack-cleanShopUrl",
        "confirmImpUrl": "AdTrack-confirmImpUrl",
        "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
},null,"trackad.cz",null,{
    "timeout": 10000,
    "gdpr": true,
    "cmpFallback": "normal",
    "publisher": {
        "id": "243",
        "tag": "kompasGramedia"
    },
    "ip": "185.152.65.120"
});

AdTrack.units["classic_grid.id_hb_728x90"] = new AdTrack.Dispatcher("classic","grid.id","hb","728x90",{
    "renderer": "flexi",
    "options": {
        "dom": {
            "method": "container",
            "selectorForeign": "1"
        },
        "hb": {
            "currency": "USD",
            "onlyPrebid": true,
            "sendPrebidDimension": true,
            "targeting": []
        },
        "noFPBNs": {
            "1": "36864793",
            "3": "35378918",
            "5": "38308494",
            "7": "37087795",
            "9": "37388055",
            "13": "37471860",
            "15": "37543676",
            "19": "37827190",
            "21": "37841587",
            "23": "37848515",
            "25": "37974109",
            "27": "37974663",
            "31": "38062118",
            "33": "38105499",
            "35": "38155389",
            "41": "38205101",
            "43": "38206998",
            "45": "38207000",
            "47": "38294481",
            "49": "38397175",
            "51": "38499466",
            "53": "38499409",
            "55": "38564125",
            "57": "38564378",
            "59": "38564379",
            "63": "38564531",
            "65": "38564652",
            "67": "38578260",
            "73": "38607930",
            "75": "38814525",
            "83": "38943634",
            "85": "39048920",
            "87": "39152378",
            "89": "39464480",
            "93": "39671195",
            "95": "39671197",
            "97": "39863294",
            "99": "40165496",
            "101": "40177548",
            "103": "40304968",
            "107": "40548792",
            "109": "40769002",
            "111": "40769003",
            "113": "40769102",
            "115": "40954941",
            "117": "40954952",
            "119": "40964226",
            "121": "40964227",
            "123": "41110847",
            "125": "508238",
            "129": "41289790",
            "131": "41289791",
            "135": "41293384",
            "145": "41110891",
            "147": "41390292",
            "149": "41526930",
            "153": "41579327",
            "155": "41640870",
            "157": "41649243",
            "159": "41649244",
            "161": "41903685",
            "163": "42688264",
            "165": "42749800",
            "167": "42749857",
            "169": "42936660",
            "171": "42758494",
            "173": "42989624",
            "175": "43026410",
            "177": "43121537",
            "179": "43748272",
            "181": "43748273",
            "183": "43748274",
            "185": "43748275",
            "187": "43816960",
            "191": "44023945",
            "193": "35330297",
            "195": "35330298",
            "197": "44031450",
            "199": "44056173",
            "201": "44838490",
            "203": "44973412",
            "205": "38235276",
            "207": "43687619",
            "209": "38235288",
            "211": "35191520",
            "213": "35192610",
            "215": "43718505"
        },
        "publisher": {
            "id": "243",
            "tag": "kompasGramedia"
        }
    },
    "waterfall": {
        "tiers": [{
            "method": "hb",
            "channels": [{
                "chd": {
                    "tag": "smart-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "427254-1406038-82721"
                    },
                    "unmaskedDomain": false,
                    "currency": "EUR",
                    "priceType": "gross",
                    "width": 728,
                    "height": 90,
                    "sizes": [[468, 60]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 25.360113613308986,
                "bfc": 1.1111111111111112,
                "factorFixed": 25.360113613308986,
                "styles": []
            }, {
                "chd": {
                    "tag": "pubmatic-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "845643-3905323"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 728,
                    "height": 90,
                    "sizes": [[468, 60], [720, 90], [728, 89], [717, 89]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 17.78025320794327,
                "factorFixed": 18.85135279878323,
                "styles": []
            }, {
                "chd": {
                    "tag": "xandr",
                    "flag": "Zero",
                    "keys": {
                        "1": "21897826"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 728,
                    "height": 90,
                    "sizes": [[480, 80], [468, 60]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 21.421991816799125,
                "factorFixed": 21.421991816799125,
                "styles": []
            }]
        }]
    },
    "info": {
        "realDomain": "grid.id"
    },
    "currencies": {
        "EUR": 25.360113613308986,
        "USD": 21.421991816799125,
        "CZK": 1
    },
    "excludes": [],
    "cls": {
        "headline": "AdTrack-headline",
        "description": "AdTrack-description",
        "adChoices": "AdTrack-adChoices",
        "date": "AdTrack-date",
        "ad": "AdTrack-ad-*",
        "ads": "AdTrack-ads",
        "container": "AdTrack-container",
        "promoTitle": "AdTrack-promoTitle",
        "promoIcon": "AdTrack-promoIcon",
        "promoClick": "AdTrack-promoClick",
        "closeTitle": "AdTrack-closeTitle",
        "closeClick": "AdTrack-closeClick",
        "creative1": "AdTrack-creative1",
        "creative2": "AdTrack-creative2",
        "creative3": "AdTrack-creative3",
        "creative23": "AdTrack-creative23",
        "creative123": "AdTrack-creative123",
        "bannerUrl": "AdTrack-bannerUrl",
        "bannerRel": "AdTrack-bannerRel",
        "adUrl": "AdTrack-adUrl",
        "clickUrl": "AdTrack-clickUrl-*",
        "visibleUrl": "AdTrack-visibleUrl",
        "longHeadline": "AdTrack-longHeadline",
        "companyName": "AdTrack-companyName",
        "logoUrl": "AdTrack-logoUrl",
        "squareLogoUrl": "AdTrack-squareLogoUrl",
        "screenshot": "AdTrack-screenshot",
        "screenshothq": "AdTrack-screenshothq",
        "favicon": "AdTrack-favicon",
        "cta": "AdTrack-cta",
        "imageUrl": "AdTrack-imageUrl",
        "category": "AdTrack-category",
        "logoutUrl": "AdTrack-logoutUrl",
        "title": "AdTrack-title",
        "manufacturer": "AdTrack-manufacturer",
        "price": "AdTrack-price",
        "lastPrice": "AdTrack-lastPrice",
        "discount": "AdTrack-discount",
        "additionalInfo": "AdTrack-additionalInfo",
        "productDescription": "AdTrack-productDescription",
        "shopName": "AdTrack-shopName",
        "shopSlogan": "AdTrack-shopSlogan",
        "shopUrl": "AdTrack-shopUrl",
        "shopLogoUrl": "AdTrack-shopLogoUrl",
        "cleanShopUrl": "AdTrack-cleanShopUrl",
        "confirmImpUrl": "AdTrack-confirmImpUrl",
        "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
},null,"trackad.cz",null,{
    "timeout": 10000,
    "gdpr": true,
    "cmpFallback": "normal",
    "publisher": {
        "id": "243",
        "tag": "kompasGramedia"
    },
    "ip": "185.152.65.120"
});

AdTrack.units["classic_grid.id_hb_160x600"] = new AdTrack.Dispatcher("classic","grid.id","hb","160x600",{
    "renderer": "flexi",
    "options": {
        "dom": {
            "method": "container",
            "selectorForeign": "1"
        },
        "hb": {
            "currency": "USD",
            "onlyPrebid": true,
            "sendPrebidDimension": true,
            "targeting": []
        },
        "noFPBNs": {
            "1": "36864793",
            "3": "35378918",
            "5": "38308494",
            "7": "37087795",
            "9": "37388055",
            "13": "37471860",
            "15": "37543676",
            "19": "37827190",
            "21": "37841587",
            "23": "37848515",
            "25": "37974109",
            "27": "37974663",
            "31": "38062118",
            "33": "38105499",
            "35": "38155389",
            "41": "38205101",
            "43": "38206998",
            "45": "38207000",
            "47": "38294481",
            "49": "38397175",
            "51": "38499466",
            "53": "38499409",
            "55": "38564125",
            "57": "38564378",
            "59": "38564379",
            "63": "38564531",
            "65": "38564652",
            "67": "38578260",
            "73": "38607930",
            "75": "38814525",
            "83": "38943634",
            "85": "39048920",
            "87": "39152378",
            "89": "39464480",
            "93": "39671195",
            "95": "39671197",
            "97": "39863294",
            "99": "40165496",
            "101": "40177548",
            "103": "40304968",
            "107": "40548792",
            "109": "40769002",
            "111": "40769003",
            "113": "40769102",
            "115": "40954941",
            "117": "40954952",
            "119": "40964226",
            "121": "40964227",
            "123": "41110847",
            "125": "508238",
            "129": "41289790",
            "131": "41289791",
            "135": "41293384",
            "145": "41110891",
            "147": "41390292",
            "149": "41526930",
            "153": "41579327",
            "155": "41640870",
            "157": "41649243",
            "159": "41649244",
            "161": "41903685",
            "163": "42688264",
            "165": "42749800",
            "167": "42749857",
            "169": "42936660",
            "171": "42758494",
            "173": "42989624",
            "175": "43026410",
            "177": "43121537",
            "179": "43748272",
            "181": "43748273",
            "183": "43748274",
            "185": "43748275",
            "187": "43816960",
            "191": "44023945",
            "193": "35330297",
            "195": "35330298",
            "197": "44031450",
            "199": "44056173",
            "201": "44838490",
            "203": "44973412",
            "205": "38235276",
            "207": "43687619",
            "209": "38235288",
            "211": "35191520",
            "213": "35192610",
            "215": "43718505"
        },
        "publisher": {
            "id": "243",
            "tag": "kompasGramedia"
        }
    },
    "waterfall": {
        "tiers": [{
            "method": "hb",
            "channels": [{
                "chd": {
                    "tag": "pubmatic-hb",
                    "flag": "Zero",
                    "keys": {
                        "1": "845643-3905315"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 160,
                    "height": 600,
                    "sizes": [[120, 600], [120, 240], [140, 350], [144, 256]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 17.78025320794327,
                "factorFixed": 18.85135279878323,
                "styles": []
            }, {
                "chd": {
                    "tag": "xandr",
                    "flag": "Zero",
                    "keys": {
                        "1": "21897650"
                    },
                    "unmaskedDomain": false,
                    "currency": "USD",
                    "priceType": "gross",
                    "width": 160,
                    "height": 600,
                    "sizes": [[120, 600]],
                    "timeout": 1600
                },
                "floor": 0,
                "factor": 21.421991816799125,
                "factorFixed": 21.421991816799125,
                "styles": []
            }]
        }]
    },
    "info": {
        "realDomain": "grid.id"
    },
    "currencies": {
        "EUR": 25.360113613308986,
        "USD": 21.421991816799125,
        "CZK": 1
    },
    "excludes": [],
    "cls": {
        "headline": "AdTrack-headline",
        "description": "AdTrack-description",
        "adChoices": "AdTrack-adChoices",
        "date": "AdTrack-date",
        "ad": "AdTrack-ad-*",
        "ads": "AdTrack-ads",
        "container": "AdTrack-container",
        "promoTitle": "AdTrack-promoTitle",
        "promoIcon": "AdTrack-promoIcon",
        "promoClick": "AdTrack-promoClick",
        "closeTitle": "AdTrack-closeTitle",
        "closeClick": "AdTrack-closeClick",
        "creative1": "AdTrack-creative1",
        "creative2": "AdTrack-creative2",
        "creative3": "AdTrack-creative3",
        "creative23": "AdTrack-creative23",
        "creative123": "AdTrack-creative123",
        "bannerUrl": "AdTrack-bannerUrl",
        "bannerRel": "AdTrack-bannerRel",
        "adUrl": "AdTrack-adUrl",
        "clickUrl": "AdTrack-clickUrl-*",
        "visibleUrl": "AdTrack-visibleUrl",
        "longHeadline": "AdTrack-longHeadline",
        "companyName": "AdTrack-companyName",
        "logoUrl": "AdTrack-logoUrl",
        "squareLogoUrl": "AdTrack-squareLogoUrl",
        "screenshot": "AdTrack-screenshot",
        "screenshothq": "AdTrack-screenshothq",
        "favicon": "AdTrack-favicon",
        "cta": "AdTrack-cta",
        "imageUrl": "AdTrack-imageUrl",
        "category": "AdTrack-category",
        "logoutUrl": "AdTrack-logoutUrl",
        "title": "AdTrack-title",
        "manufacturer": "AdTrack-manufacturer",
        "price": "AdTrack-price",
        "lastPrice": "AdTrack-lastPrice",
        "discount": "AdTrack-discount",
        "additionalInfo": "AdTrack-additionalInfo",
        "productDescription": "AdTrack-productDescription",
        "shopName": "AdTrack-shopName",
        "shopSlogan": "AdTrack-shopSlogan",
        "shopUrl": "AdTrack-shopUrl",
        "shopLogoUrl": "AdTrack-shopLogoUrl",
        "cleanShopUrl": "AdTrack-cleanShopUrl",
        "confirmImpUrl": "AdTrack-confirmImpUrl",
        "productTextTemplate": "AdTrack-productTextTemplate"
    },
    "test": false
},null,"trackad.cz",null,{
    "timeout": 10000,
    "gdpr": true,
    "cmpFallback": "normal",
    "publisher": {
        "id": "243",
        "tag": "kompasGramedia"
    },
    "ip": "185.152.65.120"
});

// 9.6ms

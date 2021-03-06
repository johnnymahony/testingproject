! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 25)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(26)), r(n(27)), r(n(28)), r(n(29))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(11)), r(n(30)), r(n(12)), r(n(13)), r(n(31)), r(n(7)), r(n(14)), r(n(32)), r(n(33))
}, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e() {}
        return e.prototype.clone = function() {
            var e = this,
                t = new this.constructor;
            return Object.keys(this).forEach((function(n) {
                var r = e.deepClone(e[n]);
                void 0 !== r && (t[n] = r)
            })), t
        }, e.prototype.deepClone = function(e) {
            var t, n, o = typeof e;
            if ("number" === o || "string" === o || "boolean" === o) return e;
            if (null !== e && "object" === o) {
                if ("function" == typeof e.clone) return e.clone();
                if (e instanceof Date) return new Date(e.getTime());
                if (void 0 !== e[Symbol.iterator]) {
                    var i = [];
                    try {
                        for (var s = r(e), c = s.next(); !c.done; c = s.next()) {
                            var u = c.value;
                            i.push(this.deepClone(u))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (n = s.return) && n.call(s)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return e instanceof Array ? i : new e.constructor(i)
                }
                var a = {};
                for (var p in e) e.hasOwnProperty(p) && (a[p] = this.deepClone(e[p]));
                return a
            }
        }, e
    }();
    t.Cloneable = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        o = function() {
            function e() {}
            return e.encode = function(e, t) {
                var n;
                if ("string" == typeof e && (e = parseInt(e, 10)), (n = e.toString(2)).length > t || e < 0) throw new r.EncodingError(e + " too large to encode into " + t);
                return n.length < t && (n = "0".repeat(t - n.length) + n), n
            }, e.decode = function(e, t) {
                if (t !== e.length) throw new r.DecodingError("invalid bit length");
                return parseInt(e, 2)
            }, e
        }();
    t.IntEncoder = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.encode = function(e) {
            return +e + ""
        }, e.decode = function(e) {
            return "1" === e
        }, e
    }();
    t.BooleanEncoder = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(10)), r(n(6)), r(n(34)), r(n(38)), r(n(15)), r(n(21))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = function() {
            function e() {}
            var t, n, o, i, s, c, u, a, p, d, l, f, h, g, v, y, m, b;
            return t = r.Fields.cmpId, n = r.Fields.cmpVersion, o = r.Fields.consentLanguage, i = r.Fields.consentScreen, s = r.Fields.created, c = r.Fields.isServiceSpecific, u = r.Fields.lastUpdated, a = r.Fields.policyVersion, p = r.Fields.publisherCountryCode, d = r.Fields.publisherLegitimateInterests, l = r.Fields.publisherConsents, f = r.Fields.purposeConsents, h = r.Fields.purposeLegitimateInterests, g = r.Fields.purposeOneTreatment, v = r.Fields.specialFeatureOptins, y = r.Fields.useNonStandardStacks, m = r.Fields.vendorListVersion, b = r.Fields.version, e[t] = 12, e[n] = 12, e[o] = 12, e[i] = 6, e[s] = 36, e[c] = 1, e[u] = 36, e[a] = 6, e[p] = 12, e[d] = 24, e[l] = 24, e[f] = 24, e[h] = 24, e[g] = 1, e[v] = 12, e[y] = 1, e[m] = 12, e[b] = 6, e.anyBoolean = 1, e.encodingType = 1, e.maxId = 16, e.numCustomPurposes = 6, e.numEntries = 12, e.numRestrictions = 12, e.purposeId = 6, e.restrictionType = 2, e.segmentType = 3, e.singleOrRange = 1, e.vendorId = 16, e
        }();
    t.BitLength = o
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (r = t.RestrictionType || (t.RestrictionType = {}))[r.NOT_ALLOWED = 0] = "NOT_ALLOWED", r[r.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT", r[r.REQUIRE_LI = 2] = "REQUIRE_LI"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4),
        o = n(0),
        i = n(1),
        s = function() {
            function e() {}
            return e.encode = function(e, t) {
                for (var n = "", o = 1; o <= t; o++) n += r.BooleanEncoder.encode(e.has(o));
                return n
            }, e.decode = function(e, t) {
                if (e.length !== t) throw new o.DecodingError("bitfield encoding length mismatch");
                for (var n = new i.Vector, s = 1; s <= t; s++) r.BooleanEncoder.decode(e[s - 1]) && n.set(s);
                return n.bitLength = e.length, n
            }, e
        }();
    t.FixedVectorEncoder = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(5)), r(n(0)), r(n(1)), r(n(2)), r(n(22)), r(n(23)), r(n(24)), r(n(39))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        o = function() {
            function e() {}
            return e.encode = function(e) {
                if (!/^[0-1]+$/.test(e)) throw new r.EncodingError("Invalid bitField");
                var t = e.length % this.LCM;
                e += t ? "0".repeat(this.LCM - t) : "";
                for (var n = "", o = 0; o < e.length; o += this.BASIS) n += this.DICT[parseInt(e.substr(o, this.BASIS), 2)];
                return n
            }, e.decode = function(e) {
                if (!/^[A-Za-z0-9\-_]+$/.test(e)) throw new r.DecodingError("Invalidly encoded Base64URL string");
                for (var t = "", n = 0; n < e.length; n++) {
                    var o = this.REVERSE_DICT.get(e[n]).toString(2);
                    t += "0".repeat(this.BASIS - o.length) + o
                }
                return t
            }, e.DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", e.REVERSE_DICT = new Map([
                ["A", 0],
                ["B", 1],
                ["C", 2],
                ["D", 3],
                ["E", 4],
                ["F", 5],
                ["G", 6],
                ["H", 7],
                ["I", 8],
                ["J", 9],
                ["K", 10],
                ["L", 11],
                ["M", 12],
                ["N", 13],
                ["O", 14],
                ["P", 15],
                ["Q", 16],
                ["R", 17],
                ["S", 18],
                ["T", 19],
                ["U", 20],
                ["V", 21],
                ["W", 22],
                ["X", 23],
                ["Y", 24],
                ["Z", 25],
                ["a", 26],
                ["b", 27],
                ["c", 28],
                ["d", 29],
                ["e", 30],
                ["f", 31],
                ["g", 32],
                ["h", 33],
                ["i", 34],
                ["j", 35],
                ["k", 36],
                ["l", 37],
                ["m", 38],
                ["n", 39],
                ["o", 40],
                ["p", 41],
                ["q", 42],
                ["r", 43],
                ["s", 44],
                ["t", 45],
                ["u", 46],
                ["v", 47],
                ["w", 48],
                ["x", 49],
                ["y", 50],
                ["z", 51],
                ["0", 52],
                ["1", 53],
                ["2", 54],
                ["3", 55],
                ["4", 56],
                ["5", 57],
                ["6", 58],
                ["7", 59],
                ["8", 60],
                ["9", 61],
                ["-", 62],
                ["_", 63]
            ]), e.BASIS = 6, e.LCM = 24, e
        }();
    t.Base64Url = o
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.root = null, t
        }
        return o(t, e), t.prototype.isEmpty = function() {
            return !this.root
        }, t.prototype.add = function(e) {
            var t, n = {
                value: e,
                left: null,
                right: null
            };
            if (this.isEmpty()) this.root = n;
            else
                for (t = this.root;;)
                    if (e < t.value) {
                        if (null === t.left) {
                            t.left = n;
                            break
                        }
                        t = t.left
                    } else {
                        if (!(e > t.value)) break;
                        if (null === t.right) {
                            t.right = n;
                            break
                        }
                        t = t.right
                    }
        }, t.prototype.get = function() {
            for (var e = [], t = this.root; t;)
                if (t.left) {
                    for (var n = t.left; n.right && n.right != t;) n = n.right;
                    n.right == t ? (n.right = null, e.push(t.value), t = t.right) : (n.right = t, t = t.left)
                } else e.push(t.value), t = t.right;
            return e
        }, t.prototype.contains = function(e) {
            for (var t = !1, n = this.root; n;) {
                if (n.value === e) {
                    t = !0;
                    break
                }
                e > n.value ? n = n.right : e < n.value && (n = n.left)
            }
            return t
        }, t.prototype.min = function(e) {
            var t;
            for (void 0 === e && (e = this.root); e;) e.left ? e = e.left : (t = e.value, e = null);
            return t
        }, t.prototype.max = function(e) {
            var t;
            for (void 0 === e && (e = this.root); e;) e.right ? e = e.right : (t = e.value, e = null);
            return t
        }, t.prototype.remove = function(e, t) {
            void 0 === t && (t = this.root);
            for (var n = null, r = "left"; t;)
                if (e < t.value) n = t, t = t.left, r = "left";
                else if (e > t.value) n = t, t = t.right, r = "right";
                else {
                    if (t.left || t.right)
                        if (t.left)
                            if (t.right) {
                                var o = this.min(t.right);
                                this.remove(o, t.right), t.value = o
                            } else n ? n[r] = t.left : this.root = t.left;
                        else n ? n[r] = t.right : this.root = t.right;
                    else n ? n[r] = null : this.root = null;
                    t = null
                }
        }, t
    }(n(2).Cloneable);
    t.BinarySearchTree = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.cmpId = "cmpId", e.cmpVersion = "cmpVersion", e.consentLanguage = "consentLanguage", e.consentScreen = "consentScreen", e.created = "created", e.supportOOB = "supportOOB", e.isServiceSpecific = "isServiceSpecific", e.lastUpdated = "lastUpdated", e.numCustomPurposes = "numCustomPurposes", e.policyVersion = "policyVersion", e.publisherCountryCode = "publisherCountryCode", e.publisherCustomConsents = "publisherCustomConsents", e.publisherCustomLegitimateInterests = "publisherCustomLegitimateInterests", e.publisherLegitimateInterests = "publisherLegitimateInterests", e.publisherConsents = "publisherConsents", e.publisherRestrictions = "publisherRestrictions", e.purposeConsents = "purposeConsents", e.purposeLegitimateInterests = "purposeLegitimateInterests", e.purposeOneTreatment = "purposeOneTreatment", e.specialFeatureOptins = "specialFeatureOptins", e.useNonStandardStacks = "useNonStandardStacks", e.vendorConsents = "vendorConsents", e.vendorLegitimateInterests = "vendorLegitimateInterests", e.vendorListVersion = "vendorListVersion", e.vendorsAllowed = "vendorsAllowed", e.vendorsDisclosed = "vendorsDisclosed", e.version = "version", e
    }();
    t.Fields = r
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2),
        s = n(0),
        c = n(7),
        u = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return void 0 !== t && (r.purposeId = t), void 0 !== n && (r.restrictionType = n), r
            }
            return o(t, e), t.unHash = function(e) {
                var n = e.split(this.hashSeparator),
                    r = new t;
                if (2 !== n.length) throw new s.TCModelError("hash", e);
                return r.purposeId = parseInt(n[0], 10), r.restrictionType = parseInt(n[1], 10), r
            }, Object.defineProperty(t.prototype, "hash", {
                get: function() {
                    if (!this.isValid()) throw new Error("cannot hash invalid PurposeRestriction");
                    return "" + this.purposeId + t.hashSeparator + this.restrictionType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "purposeId", {
                get: function() {
                    return this.purposeId_
                },
                set: function(e) {
                    this.purposeId_ = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isValid = function() {
                return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === c.RestrictionType.NOT_ALLOWED || this.restrictionType === c.RestrictionType.REQUIRE_CONSENT || this.restrictionType === c.RestrictionType.REQUIRE_LI)
            }, t.prototype.isSameAs = function(e) {
                return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
            }, t.hashSeparator = "-", t
        }(i.Cloneable);
    t.PurposeRestriction = u
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (r = t.Segment || (t.Segment = {})).CORE = "core", r.VENDORS_DISCLOSED = "vendorsDisclosed", r.VENDORS_ALLOWED = "vendorsAllowed", r.PUBLISHER_TC = "publisherTC"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(4)), r(n(16)), r(n(35)), r(n(8)), r(n(3)), r(n(17)), r(n(18)), r(n(20)), r(n(19))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        o = n(0),
        i = function() {
            function e() {}
            return e.encode = function(e, t) {
                return r.IntEncoder.encode(Math.round(e.getTime() / 100), t)
            }, e.decode = function(e, t) {
                if (t !== e.length) throw new o.DecodingError("invalid bit length");
                var n = new Date;
                return n.setTime(100 * r.IntEncoder.decode(e, t)), n
            }, e
        }();
    t.DateEncoder = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        o = n(0),
        i = function() {
            function e() {}
            return e.encode = function(e, t) {
                var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
                    i = e.charCodeAt(1) - 65;
                if (n < 0 || n > 25 || i < 0 || i > 25) throw new o.EncodingError("invalid language code: " + e);
                if (t % 2 == 1) throw new o.EncodingError("numBits must be even, " + t + " is not valid");
                return t /= 2, r.IntEncoder.encode(n, t) + r.IntEncoder.encode(i, t)
            }, e.decode = function(e, t) {
                if (t !== e.length || e.length % 2) throw new o.DecodingError("invalid bit length for language");
                var n = e.length / 2,
                    i = r.IntEncoder.decode(e.slice(0, n), n) + 65,
                    s = r.IntEncoder.decode(e.slice(n), n) + 65;
                return String.fromCharCode(i) + String.fromCharCode(s)
            }, e
        }();
    t.LangEncoder = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(6),
        o = n(4),
        i = n(0),
        s = n(3),
        c = n(1),
        u = function() {
            function e() {}
            return e.encode = function(e) {
                var t = s.IntEncoder.encode(e.numRestrictions, r.BitLength.numRestrictions);
                return e.isEmpty() || e.getRestrictions().forEach((function(n) {
                    t += s.IntEncoder.encode(n.purposeId, r.BitLength.purposeId), t += s.IntEncoder.encode(n.restrictionType, r.BitLength.restrictionType);
                    for (var i = e.getVendors(n), c = i.length, u = 0, a = 0, p = "", d = 0; d < c; d++) {
                        var l = i[d];
                        if (0 === a && (u++, a = l), d === c - 1 || i[d + 1] > l + 1) {
                            var f = !(l === a);
                            p += o.BooleanEncoder.encode(f), p += s.IntEncoder.encode(a, r.BitLength.vendorId), f && (p += s.IntEncoder.encode(l, r.BitLength.vendorId)), a = 0
                        }
                    }
                    t += s.IntEncoder.encode(u, r.BitLength.numEntries), t += p
                })), t
            }, e.decode = function(e) {
                var t = 0,
                    n = new c.PurposeRestrictionVector,
                    u = s.IntEncoder.decode(e.substr(t, r.BitLength.numRestrictions), r.BitLength.numRestrictions);
                t += r.BitLength.numRestrictions;
                for (var a = 0; a < u; a++) {
                    var p = s.IntEncoder.decode(e.substr(t, r.BitLength.purposeId), r.BitLength.purposeId);
                    t += r.BitLength.purposeId;
                    var d = s.IntEncoder.decode(e.substr(t, r.BitLength.restrictionType), r.BitLength.restrictionType);
                    t += r.BitLength.restrictionType;
                    var l = new c.PurposeRestriction(p, d),
                        f = s.IntEncoder.decode(e.substr(t, r.BitLength.numEntries), r.BitLength.numEntries);
                    t += r.BitLength.numEntries;
                    for (var h = 0; h < f; h++) {
                        var g = o.BooleanEncoder.decode(e.substr(t, r.BitLength.anyBoolean));
                        t += r.BitLength.anyBoolean;
                        var v = s.IntEncoder.decode(e.substr(t, r.BitLength.vendorId), r.BitLength.vendorId);
                        if (t += r.BitLength.vendorId, g) {
                            var y = s.IntEncoder.decode(e.substr(t, r.BitLength.vendorId), r.BitLength.vendorId);
                            if (t += r.BitLength.vendorId, y < v) throw new i.DecodingError("Invalid RangeEntry: endVendorId " + y + " is less than " + v);
                            for (var m = v; m <= y; m++) n.add(m, l)
                        } else n.add(v, l)
                    }
                }
                return n.bitLength = t, n
            }, e
        }();
    t.PurposeRestrictionVectorEncoder = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n(5),
        i = n(3),
        s = n(4),
        c = n(8),
        u = n(20),
        a = n(0),
        p = function() {
            function e() {}
            return e.encode = function(e) {
                var t, n = [],
                    r = [],
                    c = i.IntEncoder.encode(e.maxId, o.BitLength.maxId),
                    a = "",
                    p = o.BitLength.maxId + o.BitLength.encodingType,
                    d = p + e.maxId,
                    l = 2 * o.BitLength.vendorId + o.BitLength.singleOrRange + o.BitLength.numEntries,
                    f = p + o.BitLength.numEntries;
                return e.forEach((function(i, c) {
                    a += s.BooleanEncoder.encode(i), (t = e.maxId > l && f < d) && i && (e.has(c + 1) ? 0 === r.length && (r.push(c), f += o.BitLength.singleOrRange, f += o.BitLength.vendorId) : (r.push(c), f += o.BitLength.vendorId, n.push(r), r = []))
                })), t ? (c += u.VectorEncodingType.RANGE + "", c += this.buildRangeEncoding(n)) : (c += u.VectorEncodingType.FIELD + "", c += a), c
            }, e.decode = function(e, t) {
                var n, p = 0,
                    d = i.IntEncoder.decode(e.substr(p, o.BitLength.maxId), o.BitLength.maxId);
                p += o.BitLength.maxId;
                var l = i.IntEncoder.decode(e.charAt(p), o.BitLength.encodingType);
                if (p += o.BitLength.encodingType, l === u.VectorEncodingType.RANGE) {
                    if (n = new r.Vector, 1 === t) {
                        if ("1" === e.substr(p, 1)) throw new a.DecodingError("Unable to decode default consent=1");
                        p++
                    }
                    var f = i.IntEncoder.decode(e.substr(p, o.BitLength.numEntries), o.BitLength.numEntries);
                    p += o.BitLength.numEntries;
                    for (var h = 0; h < f; h++) {
                        var g = s.BooleanEncoder.decode(e.charAt(p));
                        p += o.BitLength.singleOrRange;
                        var v = i.IntEncoder.decode(e.substr(p, o.BitLength.vendorId), o.BitLength.vendorId);
                        if (p += o.BitLength.vendorId, g) {
                            var y = i.IntEncoder.decode(e.substr(p, o.BitLength.vendorId), o.BitLength.vendorId);
                            p += o.BitLength.vendorId;
                            for (var m = v; m <= y; m++) n.set(m)
                        } else n.set(v)
                    }
                } else {
                    var b = e.substr(p, d);
                    p += d, n = c.FixedVectorEncoder.decode(b, d)
                }
                return n.bitLength = p, n
            }, e.buildRangeEncoding = function(e) {
                var t = e.length,
                    n = i.IntEncoder.encode(t, o.BitLength.numEntries);
                return e.forEach((function(e) {
                    var t = 1 === e.length;
                    n += s.BooleanEncoder.encode(!t), n += i.IntEncoder.encode(e[0], o.BitLength.vendorId), t || (n += i.IntEncoder.encode(e[1], o.BitLength.vendorId))
                })), n
            }, e
        }();
    t.VendorVectorEncoder = p
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (r = t.VectorEncodingType || (t.VectorEncodingType = {}))[r.FIELD = 0] = "FIELD", r[r.RANGE = 1] = "RANGE"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(36)), r(n(37))
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(s, c)
                }
                u((r = r.apply(e, t || [])).next())
            }))
        },
        s = this && this.__generator || function(e, t) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = t.call(e, s)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(2),
        u = n(0),
        a = n(23),
        p = n(1),
        d = function(e) {
            function t(n) {
                var r = e.call(this) || this;
                r.isReady_ = !1, r.isLatest = !1;
                var o = t.baseUrl;
                if (r.lang_ = t.DEFAULT_LANGUAGE, r.isVendorList(n)) r.populate(n), r.readyPromise = Promise.resolve();
                else {
                    if (!o) throw new u.GVLError("must specify GVL.baseUrl before loading GVL json");
                    if (n > 0) {
                        var i = n;
                        t.CACHE.has(i) ? (r.populate(t.CACHE.get(i)), r.readyPromise = Promise.resolve()) : (o += t.versionedFilename.replace("[VERSION]", i + ""), r.readyPromise = r.fetchJson(o))
                    } else t.CACHE.has(t.LATEST_CACHE_KEY) ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)), r.readyPromise = Promise.resolve()) : (r.isLatest = !0, r.readyPromise = r.fetchJson(o + t.latestFilename))
                }
                return r
            }
            return o(t, e), Object.defineProperty(t, "baseUrl", {
                get: function() {
                    return this.baseUrl_
                },
                set: function(e) {
                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e)) throw new u.GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                    e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), this.baseUrl_ = e
                },
                enumerable: !0,
                configurable: !0
            }), t.emptyLanguageCache = function(e) {
                var n = !1;
                return void 0 === e && t.LANGUAGE_CACHE.size > 0 ? (t.LANGUAGE_CACHE = new Map, n = !0) : "string" == typeof e && this.consentLanguages.has(e.toUpperCase()) && (t.LANGUAGE_CACHE.delete(e.toUpperCase()), n = !0), n
            }, t.emptyCache = function(e) {
                var n = !1;
                return Number.isInteger(e) && e >= 0 ? (t.CACHE.delete(e), n = !0) : void 0 === e && (t.CACHE = new Map, n = !0), n
            }, t.prototype.cacheLanguage = function() {
                t.LANGUAGE_CACHE.has(this.lang_) || t.LANGUAGE_CACHE.set(this.lang_, {
                    purposes: this.purposes,
                    specialPurposes: this.specialPurposes,
                    features: this.features,
                    specialFeatures: this.specialFeatures,
                    stacks: this.stacks
                })
            }, t.prototype.fetchJson = function(e) {
                return i(this, void 0, void 0, (function() {
                    var t, n;
                    return s(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), t = this.populate, [4, a.Json.fetch(e)];
                            case 1:
                                return t.apply(this, [r.sent()]), [3, 3];
                            case 2:
                                throw n = r.sent(), new u.GVLError(n.message);
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.getJson = function() {
                return JSON.parse(JSON.stringify({
                    gvlSpecificationVersion: this.gvlSpecificationVersion,
                    vendorListVersion: this.vendorListVersion,
                    tcfPolicyVersion: this.tcfPolicyVersion,
                    lastUpdated: this.lastUpdated,
                    purposes: this.purposes,
                    specialPurposes: this.specialPurposes,
                    features: this.features,
                    specialFeatures: this.specialFeatures,
                    stacks: this.stacks,
                    vendors: this.fullVendorList
                }))
            }, t.prototype.changeLanguage = function(e) {
                return i(this, void 0, void 0, (function() {
                    var n, r, o, i, c;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (n = e.toUpperCase(), !t.consentLanguages.has(n)) return [3, 6];
                                if (n === this.lang_) return [3, 5];
                                if (this.lang_ = n, !t.LANGUAGE_CACHE.has(n)) return [3, 1];
                                for (o in r = t.LANGUAGE_CACHE.get(n)) r.hasOwnProperty(o) && (this[o] = r[o]);
                                return [3, 5];
                            case 1:
                                i = t.baseUrl + t.languageFilename.replace("[LANG]", e), s.label = 2;
                            case 2:
                                return s.trys.push([2, 4, , 5]), [4, this.fetchJson(i)];
                            case 3:
                                return s.sent(), this.cacheLanguage(), [3, 5];
                            case 4:
                                throw c = s.sent(), new u.GVLError("unable to load language: " + c.message);
                            case 5:
                                return [3, 7];
                            case 6:
                                throw new u.GVLError("unsupported language " + e);
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, Object.defineProperty(t.prototype, "language", {
                get: function() {
                    return this.lang_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isVendorList = function(e) {
                return void 0 !== e && void 0 !== e.vendors
            }, t.prototype.populate = function(e) {
                this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.stacks = e.stacks, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors_ = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.isReady_ = !0, this.isLatest && t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()), t.CACHE.has(this.vendorListVersion) || t.CACHE.set(this.vendorListVersion, this.getJson())), this.cacheLanguage()
            }, t.prototype.mapVendors = function(e) {
                var t = this;
                this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach((function(e) {
                    t.byPurposeVendorMap[e] = {
                        legInt: new Set,
                        consent: new Set,
                        flexible: new Set
                    }
                })), Object.keys(this.specialPurposes).forEach((function(e) {
                    t.bySpecialPurposeVendorMap[e] = new Set
                })), Object.keys(this.features).forEach((function(e) {
                    t.byFeatureVendorMap[e] = new Set
                })), Object.keys(this.specialFeatures).forEach((function(e) {
                    t.bySpecialFeatureVendorMap[e] = new Set
                })), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map((function(e) {
                    return +e
                }))), this.vendorIds = new Set(e), this.vendors_ = e.reduce((function(e, n) {
                    var r = t.vendors_["" + n];
                    return r && void 0 === r.deletedDate && (r.purposes.forEach((function(e) {
                        t.byPurposeVendorMap[e + ""].consent.add(n)
                    })), r.specialPurposes.forEach((function(e) {
                        t.bySpecialPurposeVendorMap[e + ""].add(n)
                    })), r.legIntPurposes.forEach((function(e) {
                        t.byPurposeVendorMap[e + ""].legInt.add(n)
                    })), r.flexiblePurposes && r.flexiblePurposes.forEach((function(e) {
                        t.byPurposeVendorMap[e + ""].flexible.add(n)
                    })), r.features.forEach((function(e) {
                        t.byFeatureVendorMap[e + ""].add(n)
                    })), r.specialFeatures.forEach((function(e) {
                        t.bySpecialFeatureVendorMap[e + ""].add(n)
                    })), e[n] = r), e
                }), {})
            }, t.prototype.getFilteredVendors = function(e, t, n, r) {
                var o = this,
                    i = e.charAt(0).toUpperCase() + e.slice(1),
                    s = {};
                return ("purpose" === e && n ? this["by" + i + "VendorMap"][t + ""][n] : this["by" + (r ? "Special" : "") + i + "VendorMap"][t + ""]).forEach((function(e) {
                    s[e + ""] = o.vendors[e + ""]
                })), s
            }, t.prototype.getVendorsWithConsentPurpose = function(e) {
                return this.getFilteredVendors("purpose", e, "consent")
            }, t.prototype.getVendorsWithLegIntPurpose = function(e) {
                return this.getFilteredVendors("purpose", e, "legInt")
            }, t.prototype.getVendorsWithFlexiblePurpose = function(e) {
                return this.getFilteredVendors("purpose", e, "flexible")
            }, t.prototype.getVendorsWithSpecialPurpose = function(e) {
                return this.getFilteredVendors("purpose", e, void 0, !0)
            }, t.prototype.getVendorsWithFeature = function(e) {
                return this.getFilteredVendors("feature", e)
            }, t.prototype.getVendorsWithSpecialFeature = function(e) {
                return this.getFilteredVendors("feature", e, void 0, !0)
            }, Object.defineProperty(t.prototype, "vendors", {
                get: function() {
                    return this.vendors_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.narrowVendorsTo = function(e) {
                this.mapVendors(e)
            }, Object.defineProperty(t.prototype, "isReady", {
                get: function() {
                    return this.isReady_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.clone = function() {
                return new t(this.getJson())
            }, t.isInstanceOf = function(e) {
                return "object" == typeof e && "function" == typeof e.narrowVendorsTo
            }, t.LANGUAGE_CACHE = new Map, t.CACHE = new Map, t.LATEST_CACHE_KEY = 0, t.DEFAULT_LANGUAGE = "EN", t.consentLanguages = new p.ConsentLanguages, t.latestFilename = "vendor-list.json", t.versionedFilename = "archives/vendor-list-v[VERSION].json", t.languageFilename = "purposes-[LANG].json", t
        }(c.Cloneable);
    t.GVL = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.absCall = function(e, t, n, r) {
            return new Promise((function(o, i) {
                var s = new XMLHttpRequest;
                s.withCredentials = n, s.addEventListener("load", (function() {
                    if (s.readyState == XMLHttpRequest.DONE)
                        if (s.status >= 200 && s.status < 300) {
                            var e = s.response;
                            if ("string" == typeof e) try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            o(e)
                        } else i(new Error("HTTP Status: " + s.status + " response type: " + s.responseType))
                })), s.addEventListener("error", (function() {
                    i(new Error("error"))
                })), s.addEventListener("abort", (function() {
                    i(new Error("aborted"))
                })), null === t ? s.open("GET", e, !0) : s.open("POST", e, !0), s.responseType = "json", s.timeout = r, s.ontimeout = function() {
                    i(new Error("Timeout " + r + "ms " + e))
                }, s.send(t)
            }))
        }, e.post = function(e, t, n, r) {
            return void 0 === n && (n = !1), void 0 === r && (r = 0), this.absCall(e, JSON.stringify(t), n, r)
        }, e.fetch = function(e, t, n) {
            return void 0 === t && (t = !1), void 0 === n && (n = 0), this.absCall(e, null, t, n)
        }, e
    }();
    t.Json = r
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2),
        s = n(0),
        c = n(22),
        u = n(1),
        a = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.isServiceSpecific_ = !1, n.supportOOB_ = !0, n.useNonStandardStacks_ = !1, n.purposeOneTreatment_ = !1, n.publisherCountryCode_ = "AA", n.version_ = 2, n.consentScreen_ = 0, n.policyVersion_ = 2, n.consentLanguage_ = "EN", n.cmpId_ = 0, n.cmpVersion_ = 0, n.vendorListVersion_ = 0, n.numCustomPurposes_ = 0, n.specialFeatureOptins = new u.Vector, n.purposeConsents = new u.Vector, n.purposeLegitimateInterests = new u.Vector, n.publisherConsents = new u.Vector, n.publisherLegitimateInterests = new u.Vector, n.publisherCustomConsents = new u.Vector, n.publisherCustomLegitimateInterests = new u.Vector, n.vendorConsents = new u.Vector, n.vendorLegitimateInterests = new u.Vector, n.vendorsDisclosed = new u.Vector, n.vendorsAllowed = new u.Vector, n.publisherRestrictions = new u.PurposeRestrictionVector, t && (n.gvl = t), n.created = new Date, n.updated(), n
            }
            return o(t, e), Object.defineProperty(t.prototype, "gvl", {
                get: function() {
                    return this.gvl_
                },
                set: function(e) {
                    c.GVL.isInstanceOf(e) || (e = new c.GVL(e)), this.gvl_ = e, this.publisherRestrictions.gvl = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cmpId", {
                get: function() {
                    return this.cmpId_
                },
                set: function(e) {
                    if (!(Number.isInteger(+e) && e > 1)) throw new s.TCModelError("cmpId", e);
                    this.cmpId_ = +e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cmpVersion", {
                get: function() {
                    return this.cmpVersion_
                },
                set: function(e) {
                    if (!(Number.isInteger(+e) && e > -1)) throw new s.TCModelError("cmpVersion", e);
                    this.cmpVersion_ = +e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "consentScreen", {
                get: function() {
                    return this.consentScreen_
                },
                set: function(e) {
                    if (!(Number.isInteger(+e) && e > -1)) throw new s.TCModelError("consentScreen", e);
                    this.consentScreen_ = +e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "consentLanguage", {
                get: function() {
                    return this.consentLanguage_
                },
                set: function(e) {
                    this.consentLanguage_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "publisherCountryCode", {
                get: function() {
                    return this.publisherCountryCode_
                },
                set: function(e) {
                    if (!/^([A-z]){2}$/.test(e)) throw new s.TCModelError("publisherCountryCode", e);
                    this.publisherCountryCode_ = e.toUpperCase()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "vendorListVersion", {
                get: function() {
                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                },
                set: function(e) {
                    if ((e = +e >> 0) < 0) throw new s.TCModelError("vendorListVersion", e);
                    this.vendorListVersion_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "policyVersion", {
                get: function() {
                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                },
                set: function(e) {
                    if (this.policyVersion_ = parseInt(e, 10), this.policyVersion_ < 0) throw new s.TCModelError("policyVersion", e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "version", {
                get: function() {
                    return this.version_
                },
                set: function(e) {
                    this.version_ = parseInt(e, 10)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isServiceSpecific", {
                get: function() {
                    return this.isServiceSpecific_
                },
                set: function(e) {
                    this.isServiceSpecific_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "useNonStandardStacks", {
                get: function() {
                    return this.useNonStandardStacks_
                },
                set: function(e) {
                    this.useNonStandardStacks_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "supportOOB", {
                get: function() {
                    return this.supportOOB_
                },
                set: function(e) {
                    this.supportOOB_ = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "purposeOneTreatment", {
                get: function() {
                    return this.purposeOneTreatment_
                },
                set: function(e) {
                    this.purposeOneTreatment_ = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setAllVendorConsents = function() {
                this.vendorConsents.set(this.gvl.vendors)
            }, t.prototype.unsetAllVendorConsents = function() {
                this.vendorConsents.empty()
            }, t.prototype.setAllVendorsDisclosed = function() {
                this.vendorsDisclosed.set(this.gvl.vendors)
            }, t.prototype.unsetAllVendorsDisclosed = function() {
                this.vendorsDisclosed.empty()
            }, t.prototype.setAllVendorsAllowed = function() {
                this.vendorsAllowed.set(this.gvl.vendors)
            }, t.prototype.unsetAllVendorsAllowed = function() {
                this.vendorsAllowed.empty()
            }, t.prototype.setAllVendorLegitimateInterests = function() {
                this.vendorLegitimateInterests.set(this.gvl.vendors)
            }, t.prototype.unsetAllVendorLegitimateInterests = function() {
                this.vendorLegitimateInterests.empty()
            }, t.prototype.setAllPurposeConsents = function() {
                this.purposeConsents.set(this.gvl.purposes)
            }, t.prototype.unsetAllPurposeConsents = function() {
                this.purposeConsents.empty()
            }, t.prototype.setAllPurposeLegitimateInterests = function() {
                this.purposeLegitimateInterests.set(this.gvl.purposes)
            }, t.prototype.unsetAllPurposeLegitimateInterests = function() {
                this.purposeLegitimateInterests.empty()
            }, t.prototype.setAllSpecialFeatureOptins = function() {
                this.specialFeatureOptins.set(this.gvl.specialFeatures)
            }, t.prototype.unsetAllSpecialFeatureOptins = function() {
                this.specialFeatureOptins.empty()
            }, t.prototype.setAll = function() {
                this.setAllVendorConsents(), this.setAllPurposeLegitimateInterests(), this.setAllSpecialFeatureOptins(), this.setAllPurposeConsents(), this.setAllVendorLegitimateInterests()
            }, t.prototype.unsetAll = function() {
                this.unsetAllVendorConsents(), this.unsetAllPurposeLegitimateInterests(), this.unsetAllSpecialFeatureOptins(), this.unsetAllPurposeConsents(), this.unsetAllVendorLegitimateInterests()
            }, Object.defineProperty(t.prototype, "numCustomPurposes", {
                get: function() {
                    var e = this.numCustomPurposes_;
                    if ("object" == typeof this.customPurposes) {
                        var t = Object.keys(this.customPurposes).sort((function(e, t) {
                            return +e - +t
                        }));
                        e = parseInt(t.pop(), 10)
                    }
                    return e
                },
                set: function(e) {
                    if (this.numCustomPurposes_ = parseInt(e, 10), this.numCustomPurposes_ < 0) throw new s.TCModelError("numCustomPurposes", e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.updated = function() {
                this.lastUpdated = new Date
            }, t.consentLanguages = c.GVL.consentLanguages, t
        }(i.Cloneable);
    t.TCModel = a
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(9);
    window.cpexCMPVersion = "8.4";
    var o = window.location.href.indexOf("debug") > -1,
        i = window.location.href.indexOf("selfTest") > -1,
        s = null,
        c = null,
        u = !1,
        a = !1,
        p = !1,
        d = ["https://a.slunecnice.cz/slunecnice/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://a.denik.cz/vlm/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://a.1gr.cz/mafra/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://a.centrum.cz/cent/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://a.csfd.cz/csfd/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://a.iprima.cz/iprima/SETSV/TTL=33696000/consent=%CONSENT%/GDPR=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpex&gdpr_consent=%CONSENT%&gdpr=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexmafra&gdpr_consent=%CONSENT%&gdpr=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexcsfd&gdpr_consent=%CONSENT%&gdpr=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexvlm&gdpr_consent=%CONSENT%&gdpr=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexiinfo&gdpr_consent=%CONSENT%&gdpr=1", "https://pixel-eu.rubiconproject.com/exchange/sync.php?p=cpexiprima&gdpr_consent=%CONSENT%&gdpr=1"];

    function l() {
        o && console.log.apply(this, arguments)
    }

    function f(e) {
        return (e = new RegExp("(?:^|;\\s*)" + ("" + e).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)").exec(document.cookie)) && e[1]
    }

    function h(e, t) {
        var n = new Date;
        n.setTime(n.getTime() + 31536e6), t || (t = n.toISOString());
        var r, o, i = "." + (r = document.domain.split("."), o = r.length, r[o - 2] + "." + r[o - 1]);
        document.cookie = e + "=" + t + "; path=/; domain=" + i + "; expires=" + n.toUTCString() + "; SameSite=None; Secure;", l("CMP SYNC: saving 1st party cookie for " + e + ", at domain: " + i)
    }

    function g(e, t) {
        if (e.size > 0) {
            var n = {};
            return e.forEach((function(e, r) {
                Array.isArray(t) ? t.forEach((function(t) {
                    t === r && (n[r] = e)
                })) : n[r] = e
            })), n
        }
        return !1
    }

    function v() {
        !1 === p && (p = !0, l("CMP SYNC: Init: page ready, adding iframes"), (s = function() {
            l("CMP SYNC: adding portal iframe");
            var e = document.createElement("iframe"),
                t = o ? "?debug=true" : "";
            return e.src = "https://cdn.cpex.cz/cmp/v2/portal.html" + t, e.name = "CrossDomainConsent", e.id = "cpex-portal", e.style.position = "absolute", e.style.bottom = "0px", e.style.right = "0px", e.style.width = "0px", e.style.height = "0px", e.style.border = "none", document.body.appendChild(e), e
        }()).addEventListener("load", E), void 0 === window.frames.__tcfapiLocator && ((c = window.document.createElement("iframe")).style.cssText = "display:none", c.name = "__tcfapiLocator", c.setAttribute("title", "TCF Locator"), window.document.body.appendChild(c)))
    }
    window.getConsentIfNotDenied = function() {
        var e;
        return __tcfapi("getTCData", 2, (function(t, n) {
            !1 !== n && t.vendor.consents && Object.keys(t.vendor.consents).length > 0 && (e = t)
        })), e
    }, window.isConsentPresent = function() {
        var e;
        return __tcfapi("getTCData", 2, (function(t, n) {
            if (!1 === n) return !1;
            t.vendor.consents && t.purpose.consents && (e = Object.keys(t.vendor.consents).length > 0 && Object.keys(t.purpose.consents).length > 0)
        })), e
    }, window.isConsentPresentFor = function(e) {
        var t = !0;
        return __tcfapi("getTCData", 2, (function(n, r) {
            if (!1 === r) return !1;
            e.forEach((function(e) {
                !1 === n.vendor.consents[e] && (t = !1)
            }))
        })), t
    };
    var y = [];
    window.__tcfapi = function(e, t, n, o) {
        function i() {
            var e = f("eupubconsent-v2");
            if (e) {
                try {
                    var t = r.TCString.decode(e),
                        i = g(t.purposeConsents),
                        s = g(t.vendorConsents, o)
                } catch (e) {
                    console.warn("CMP Consent parsing have failed", e)
                }
                if (i && s) return void n({
                    cmpId: 28,
                    tcString: e,
                    tcfPolicyVersion: 2,
                    eventStatus: "tcloaded",
                    gdprApplies: !0,
                    cmpStatus: "loaded",
                    purpose: {
                        consents: i
                    },
                    vendor: {
                        consents: s
                    },
                    listenerId: 999999
                }, !0)
            }
            n({
                cmpId: 28,
                tcfPolicyVersion: 2,
                cmpStatus: "loaded",
                eventStatus: "tcloaded",
                listenerId: 999999
            }, !1)
        }
        switch (e) {
            case "ping":
                n({
                    gdprApplies: !0,
                    cmpLoaded: !0,
                    cmpStatus: "loaded",
                    displayStatus: "hidden",
                    apiVersion: "2.0",
                    cmpId: 28,
                    gvlVersion: 55,
                    tcfPolicyVersion: 2
                });
                break;
            case "getTCData":
            case "addEventListener":
                i();
                break;
            default:
                return y
        }
    }, window.__tcfapi("getTCData", 2, (function(e) {
        window.dispatchEvent(new CustomEvent("cpexCMPLoaded", {
            detail: {
                consent: e.tcString,
                data: e
            }
        }))
    }));
    var m = 0;

    function b(e) {
        l("CMP SYNC: trying to fire consent pixels");
        var t = localStorage.getItem("pixelsLastFired") || 0,
            n = Date.now();
        if (n - 864e5 > t || e) {
            var r = getConsentIfNotDenied();
            r && (d.forEach((function(e) {
                ! function(e) {
                    const t = document.createElement("img");
                    t.setAttribute("src", e), t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.bottom = "0px", t.style.right = "0px", t.style.border = "none", document.body.appendChild(t)
                }(e.replace("%CONSENT%", r.tcString))
            })), localStorage.setItem("pixelsLastFired", n), l("CMP SYNC: added consent pixels"))
        } else l("CMP SYNC: 24 hours have not yet passed, based on pixelsLastFired in local storage")
    }

    function E() {
        l("CMP SYNC: requesting 3rd party cookies"), s.contentWindow.postMessage({
            name: "cpexCookieRead"
        }, "*")
    }

    function _() {
        if (!0 !== window.cpexCMPNoSync)
            if (l("CMP SYNC: exporting cookies to 3rd party"), s) {
                var e = {
                    name: "cpexCookieSave",
                    Consent: f("eupubconsent-v2"),
                    OptanonConsent: f("OptanonConsent"),
                    OptanonAlertBoxClosed: f("OptanonAlertBoxClosed")
                };
                if (e.Consent && e.OptanonConsent) g(r.TCString.decode(e.Consent).vendorConsents) && (l("CMP SYNC: passing data to the portal iframe: ", e), s.contentWindow.postMessage(e, "*"));
                else console.log("CMP: consent not present, export skipped")
            } else console.warn("CMP: consent exporting not possible, iframe not present")
    }

    function C() {
        if (window.oneTrustId) {
            if (a) return;
            a = !0, u = !0, l("CMP SYNC: loading OneTrust CMP");
            var e = document.createElement("script");
            e.type = "text/javascript", e.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), e.setAttribute("charset", "UTF-8"), e.setAttribute("data-domain-script", window.oneTrustId), document.getElementsByTagName("head")[0].appendChild(e)
        } else console.warn("CMP: Missing oneTrustId, might have been intentional to not load CMP banner")
    }

    function S() {
        l("CMP SYNC: consent changed"), __tcfapi("getTCData", 2, (function(e) {
            window.dispatchEvent(new CustomEvent("cpexCMPConsentChanged", {
                detail: e
            })), c && c.contentDocument.dispatchEvent(new CustomEvent("cpexCMPConsentChanged", e))
        })), _(), b(!0)
    }
    i && (window.cpexCMPSelfTestInterval = setInterval((function() {
        m++, window.__tcfapi("getTCData", 2, (function(e) {
            console.log("CMP eventStatus: " + e.eventStatus)
        })), m > 400 && clearInterval(window.cpexCMPSelfTestInterval)
    }), 50)), window.OptanonWrapper = function() {
        l("CMP SYNC: CMP loaded/updated");
        var e = document.getElementById("onetrust-close-btn-container");
        e && (void 0 === window.cpexCmpAllowCloseButton && -1 === window.location.href.indexOf("cpexCmpAllowCloseButton") && (e.style.display = "none"), e.addEventListener("click", (function(e) {
            document.getElementById("onetrust-consent-sdk").style.display = "none", e.stopPropagation()
        }), !0));
        var t = document.getElementById("onetrust-group-container");
        t && setTimeout((function() {
            t.scrollTop = 0, document.getElementById("onetrust-accept-btn-handler").focus()
        }), 150), OneTrust.OnConsentChanged(S)
    }, !0 === window.cpexCMPNoSync ? setTimeout(C, 8e3) : "loading" != document.readyState ? v() : document.addEventListener("DOMContentLoaded", v), window.addEventListener("load", (function() {
        _(), b()
    })), window.addEventListener("message", (function(e) {
        if (e.data) {
            "cpexCookieRead" === e.data.name && (l("CMP SYNC: received data from portal", e.data), e.data.noConsent && l("CMP SYNC: no 3rd party consent found"), e.data.TCFConsent && e.data.OptanonConsent && (l("CMP SYNC: consent from 3rd party received: ", e.data.TCFConsent), h("eupubconsent-v2", e.data.TCFConsent), h("OptanonConsent", e.data.OptanonConsent), h("OptanonAlertBoxClosed")), __tcfapi("getTCData", 2, (function(e) {
                e.tcstring || !1 === u && (window.cpexFastCmpBanner ? C() : setTimeout(C, 8e3))
            })));
            var t = "string" == typeof e.data,
                n = {};
            try {
                n = t ? JSON.parse(e.data) : e.data
            } catch (e) {}
            if (n.__tcfapiCall) {
                console.log(n);
                var r = n.__tcfapiCall;
                console.log(r);
                var clbk2 = function(){
                    console.log("clbk2", arguments);
                };
                window.__tcfapi(r.command, r.version, (function(n, o) {
                    console.log("data", n);
                    console.log("success", o);
                    var i = {
                        __tcfapiReturn: {
                            returnValue: n,
                            success: o,
                            callId: r.callId,
                            command: r.command
                        }
                    };
                    console.log("response", i);
                    e.source ? e.source.postMessage(t ? JSON.stringify(i) : i, "*") : console.warn("CMP: Request for consent is missing source attribute")
                }), r.parameter);

                window.__tcfapi(r.command, r.version, clbk2, r.parameter);
                if(r.command === "addEventListener") {
                    window.__tcfapi("addEventListener", 2, clbk2, undefined);
                    window.__tcfapi("addEventListener", 2, clbk2);
                }
            }
        }
    }))
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.name = "DecodingError", n
        }
        return o(t, e), t
    }(Error);
    t.DecodingError = i
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.name = "EncodingError", n
        }
        return o(t, e), t
    }(Error);
    t.EncodingError = i
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.name = "GVLError", n
        }
        return o(t, e), t
    }(Error);
    t.GVLError = i
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = "");
            var o = e.call(this, "invalid value " + n + " passed for " + t + " " + r) || this;
            return o.name = "TCModelError", o
        }
        return o(t, e), t
    }(Error);
    t.TCModelError = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.has = function(t) {
            return e.langSet.has(t)
        }, e.prototype.forEach = function(t) {
            e.langSet.forEach(t)
        }, Object.defineProperty(e.prototype, "size", {
            get: function() {
                return e.langSet.size
            },
            enumerable: !0,
            configurable: !0
        }), e.langSet = new Set(["BG", "CA", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "FI", "FR", "HR", "HU", "IT", "LT", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SK", "SL", "SV", "ZH"]), e
    }();
    t.ConsentLanguages = r
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(13),
        s = n(11),
        c = n(7),
        u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bitLength = 0, t.map = new Map, t
            }
            return o(t, e), t.prototype.has = function(e) {
                return this.map.has(e)
            }, t.prototype.isOkToHave = function(e, t, n) {
                var r, o = !0;
                if (null === (r = this.gvl) || void 0 === r ? void 0 : r.vendors) {
                    var i = this.gvl.vendors[n];
                    if (i)
                        if (e === c.RestrictionType.NOT_ALLOWED) o = i.legIntPurposes.includes(t) || i.purposes.includes(t);
                        else if (i.flexiblePurposes.length) switch (e) {
                            case c.RestrictionType.REQUIRE_CONSENT:
                                o = i.flexiblePurposes.includes(t) && i.legIntPurposes.includes(t);
                                break;
                            case c.RestrictionType.REQUIRE_LI:
                                o = i.flexiblePurposes.includes(t) && i.purposes.includes(t)
                        } else o = !1;
                    else o = !1
                }
                return o
            }, t.prototype.add = function(e, t) {
                if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                    var n = t.hash;
                    this.has(n) || (this.map.set(n, new s.BinarySearchTree), this.bitLength = 0), this.map.get(n).add(e)
                }
            }, t.prototype.getVendors = function(e) {
                var t = [];
                if (e) {
                    var n = e.hash;
                    this.has(n) && (t = this.map.get(n).get())
                } else {
                    var r = new Set;
                    this.map.forEach((function(e) {
                        e.get().forEach((function(e) {
                            r.add(e)
                        }))
                    })), t = Array.from(r)
                }
                return t
            }, t.prototype.getRestrictionType = function(e, t) {
                var n;
                return this.getRestrictions(e).forEach((function(e) {
                    e.purposeId === t && (void 0 === n || n > e.restrictionType) && (n = e.restrictionType)
                })), n
            }, t.prototype.vendorHasRestriction = function(e, t) {
                for (var n = !1, r = this.getRestrictions(e), o = 0; o < r.length && !n; o++) n = t.isSameAs(r[o]);
                return n
            }, t.prototype.getMaxVendorId = function() {
                var e = 0;
                return this.map.forEach((function(t) {
                    e = Math.max(t.max(), e)
                })), e
            }, t.prototype.getRestrictions = function(e) {
                var t = [];
                return this.map.forEach((function(n, r) {
                    e ? n.contains(e) && t.push(i.PurposeRestriction.unHash(r)) : t.push(i.PurposeRestriction.unHash(r))
                })), t
            }, t.prototype.getPurposes = function() {
                var e = new Set;
                return this.map.forEach((function(t, n) {
                    e.add(i.PurposeRestriction.unHash(n).purposeId)
                })), Array.from(e)
            }, t.prototype.remove = function(e, t) {
                var n = t.hash,
                    r = this.map.get(n);
                r && (r.remove(e), r.isEmpty() && (this.map.delete(n), this.bitLength = 0))
            }, Object.defineProperty(t.prototype, "gvl", {
                get: function() {
                    return this.gvl_
                },
                set: function(e) {
                    var t = this;
                    this.gvl_ || (this.gvl_ = e, this.map.forEach((function(e, n) {
                        var r = i.PurposeRestriction.unHash(n);
                        e.get().forEach((function(n) {
                            t.isOkToHave(r.restrictionType, r.purposeId, n) || e.remove(n)
                        }))
                    })))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isEmpty = function() {
                return 0 === this.map.size
            }, Object.defineProperty(t.prototype, "numRestrictions", {
                get: function() {
                    return this.map.size
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(n(2).Cloneable);
    t.PurposeRestrictionVector = u
}, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(14),
        i = function() {
            function e() {}
            return e.ID_TO_KEY = [o.Segment.CORE, o.Segment.VENDORS_DISCLOSED, o.Segment.VENDORS_ALLOWED, o.Segment.PUBLISHER_TC], e.KEY_TO_ID = ((r = {})[o.Segment.CORE] = 0, r[o.Segment.VENDORS_DISCLOSED] = 1, r[o.Segment.VENDORS_ALLOWED] = 2, r[o.Segment.PUBLISHER_TC] = 3, r), e
        }();
    t.SegmentIDs = i
}, function(e, t, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__generator || function(e, t) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = t.call(e, s)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        },
        s = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(2),
        u = n(0),
        a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.bitLength = 0, t.maxId_ = 0, t.set_ = new Set, t
            }
            return o(t, e), t.prototype[Symbol.iterator] = function() {
                var e;
                return i(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            e = 1, t.label = 1;
                        case 1:
                            return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4];
                        case 2:
                            t.sent(), t.label = 3;
                        case 3:
                            return e++, [3, 1];
                        case 4:
                            return [2]
                    }
                }))
            }, t.prototype.values = function() {
                return this.set_.values()
            }, Object.defineProperty(t.prototype, "maxId", {
                get: function() {
                    return this.maxId_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.has = function(e) {
                return this.set_.has(e)
            }, t.prototype.unset = function(e) {
                var t = this;
                Array.isArray(e) ? e.forEach((function(e) {
                    return t.unset(e)
                })) : "object" == typeof e ? this.unset(Object.keys(e).map((function(e) {
                    return +e
                }))) : (this.set_.delete(e), this.bitLength = 0, e === this.maxId && (this.maxId_ = 0, this.set_.forEach((function(e) {
                    t.maxId_ = Math.max(t.maxId, e)
                }))))
            }, t.prototype.isIntMap = function(e) {
                var t = this,
                    n = "object" == typeof e;
                return n && Object.keys(e).every((function(n) {
                    var r = Number.isInteger(parseInt(n, 10));
                    return (r = r && t.isValidNumber(e[n].id)) && void 0 !== e[n].name
                }))
            }, t.prototype.isValidNumber = function(e) {
                return parseInt(e, 10) > 0
            }, t.prototype.isSet = function(e) {
                var t = !1;
                return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
            }, t.prototype.set = function(e) {
                var t = this;
                if (Array.isArray(e)) e.forEach((function(e) {
                    return t.set(e)
                }));
                else if (this.isSet(e)) this.set(Array.from(e));
                else if (this.isIntMap(e)) this.set(Object.keys(e).map((function(e) {
                    return +e
                })));
                else {
                    if (!this.isValidNumber(e)) throw new u.TCModelError("set()", e, "must be positive integer array, positive integer, Set<number>, or IntMap");
                    this.set_.add(e), this.maxId_ = Math.max(this.maxId, e), this.bitLength = 0
                }
            }, t.prototype.empty = function() {
                this.set_ = new Set
            }, t.prototype.forEach = function(e) {
                var t, n;
                try {
                    for (var r = s(this), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        e(i[1], i[0])
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
            }, Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.set_.size
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setAll = function(e) {
                this.set(e)
            }, t
        }(c.Cloneable);
    t.Vector = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10),
        o = n(6),
        i = n(15),
        s = n(21),
        c = n(0),
        u = n(12),
        a = n(1),
        p = function() {
            function e() {}
            return e.encode = function(e, t) {
                var n, s = this;
                try {
                    n = this.fieldSequence["" + e.version][t]
                } catch (n) {
                    throw new c.EncodingError("Unable to encode version: " + e.version + ", segment: " + t)
                }
                var p = "";
                return t !== a.Segment.CORE && (p = i.IntEncoder.encode(a.SegmentIDs.KEY_TO_ID[t], o.BitLength.segmentType)), n.forEach((function(n) {
                    var r = e[n],
                        a = i.FieldEncoderMap[n],
                        d = o.BitLength[n];
                    void 0 === d && s.isPublisherCustom(n) && (d = +e[u.Fields.numCustomPurposes]);
                    try {
                        p += a.encode(r, d)
                    } catch (e) {
                        throw new c.EncodingError("Error encoding " + t + "->" + n + ": " + e.message)
                    }
                })), r.Base64Url.encode(p)
            }, e.decode = function(e, t, n) {
                var s = this,
                    p = r.Base64Url.decode(e),
                    d = 0;
                return n === a.Segment.CORE && (t.version = i.IntEncoder.decode(p.substr(d, o.BitLength[u.Fields.version]), o.BitLength[u.Fields.version])), n !== a.Segment.CORE && (d += o.BitLength.segmentType), this.fieldSequence["" + t.version][n].forEach((function(e) {
                    var n = i.FieldEncoderMap[e],
                        r = o.BitLength[e];
                    if (void 0 === r && s.isPublisherCustom(e) && (r = +t[u.Fields.numCustomPurposes]), 0 !== r) {
                        var a = p.substr(d, r);
                        if (n === i.VendorVectorEncoder ? t[e] = n.decode(a, t.version) : t[e] = n.decode(a, r), Number.isInteger(r)) d += r;
                        else {
                            if (!Number.isInteger(t[e].bitLength)) throw new c.DecodingError(e);
                            d += t[e].bitLength
                        }
                    }
                })), t
            }, e.isPublisherCustom = function(e) {
                return 0 === e.indexOf("publisherCustom")
            }, e.fieldSequence = new s.FieldSequence, e
        }();
    t.SegmentEncoder = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n(4),
        i = n(16),
        s = n(8),
        c = n(3),
        u = n(17),
        a = n(18),
        p = n(19),
        d = function() {
            function e() {}
            var t, n, d, l, f, h, g, v, y, m, b, E, _, C, S, O, w, L, I, P, V, T, F, A, x, M;
            return t = r.Fields.version, n = r.Fields.created, d = r.Fields.lastUpdated, l = r.Fields.cmpId, f = r.Fields.cmpVersion, h = r.Fields.consentScreen, g = r.Fields.consentLanguage, v = r.Fields.vendorListVersion, y = r.Fields.policyVersion, m = r.Fields.isServiceSpecific, b = r.Fields.useNonStandardStacks, E = r.Fields.specialFeatureOptins, _ = r.Fields.purposeConsents, C = r.Fields.purposeLegitimateInterests, S = r.Fields.purposeOneTreatment, O = r.Fields.publisherCountryCode, w = r.Fields.vendorConsents, L = r.Fields.vendorLegitimateInterests, I = r.Fields.publisherRestrictions, P = r.Fields.vendorsDisclosed, V = r.Fields.vendorsAllowed, T = r.Fields.publisherConsents, F = r.Fields.publisherLegitimateInterests, A = r.Fields.numCustomPurposes, x = r.Fields.publisherCustomConsents, M = r.Fields.publisherCustomLegitimateInterests, e[t] = c.IntEncoder, e[n] = i.DateEncoder, e[d] = i.DateEncoder, e[l] = c.IntEncoder, e[f] = c.IntEncoder, e[h] = c.IntEncoder, e[g] = u.LangEncoder, e[v] = c.IntEncoder, e[y] = c.IntEncoder, e[m] = o.BooleanEncoder, e[b] = o.BooleanEncoder, e[E] = s.FixedVectorEncoder, e[_] = s.FixedVectorEncoder, e[C] = s.FixedVectorEncoder, e[S] = o.BooleanEncoder, e[O] = u.LangEncoder, e[w] = p.VendorVectorEncoder, e[L] = p.VendorVectorEncoder, e[I] = a.PurposeRestrictionVectorEncoder, e.segmentType = c.IntEncoder, e[P] = p.VendorVectorEncoder, e[V] = p.VendorVectorEncoder, e[T] = s.FixedVectorEncoder, e[F] = s.FixedVectorEncoder, e[A] = c.IntEncoder, e[x] = s.FixedVectorEncoder, e[M] = s.FixedVectorEncoder, e
        }();
    t.FieldEncoderMap = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    t.FieldSequence = function() {
        var e, t;
        this[1] = ((e = {})[r.Segment.CORE] = [r.Fields.version, r.Fields.created, r.Fields.lastUpdated, r.Fields.cmpId, r.Fields.cmpVersion, r.Fields.consentScreen, r.Fields.consentLanguage, r.Fields.vendorListVersion, r.Fields.purposeConsents, r.Fields.vendorConsents], e), this[2] = ((t = {})[r.Segment.CORE] = [r.Fields.version, r.Fields.created, r.Fields.lastUpdated, r.Fields.cmpId, r.Fields.cmpVersion, r.Fields.consentScreen, r.Fields.consentLanguage, r.Fields.vendorListVersion, r.Fields.policyVersion, r.Fields.isServiceSpecific, r.Fields.useNonStandardStacks, r.Fields.specialFeatureOptins, r.Fields.purposeConsents, r.Fields.purposeLegitimateInterests, r.Fields.purposeOneTreatment, r.Fields.publisherCountryCode, r.Fields.vendorConsents, r.Fields.vendorLegitimateInterests, r.Fields.publisherRestrictions], t[r.Segment.PUBLISHER_TC] = [r.Fields.publisherConsents, r.Fields.publisherLegitimateInterests, r.Fields.numCustomPurposes, r.Fields.publisherCustomConsents, r.Fields.publisherCustomLegitimateInterests], t[r.Segment.VENDORS_ALLOWED] = [r.Fields.vendorsAllowed], t[r.Segment.VENDORS_DISCLOSED] = [r.Fields.vendorsDisclosed], t)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1);
    t.SegmentSequence = function(e, t) {
        if (this[1] = [r.Segment.CORE], this[2] = [r.Segment.CORE], 2 === e.version)
            if (e.isServiceSpecific) this[2].push(r.Segment.PUBLISHER_TC);
            else {
                var n = !(!t || !t.isForVendors);
                n && !0 !== e[r.Fields.supportOOB] || this[2].push(r.Segment.VENDORS_DISCLOSED), n && (e[r.Fields.supportOOB] && e[r.Fields.vendorsAllowed].size > 0 && this[2].push(r.Segment.VENDORS_ALLOWED), this[2].push(r.Segment.PUBLISHER_TC))
            }
    }
}, function(e, t, n) {
    "use strict";
    var r = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        o = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, o, i = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        s = n(1),
        c = function() {
            function e() {}
            return e.process = function(e, t) {
                var n, r, o = e.gvl;
                if (!o) throw new i.EncodingError("Unable to encode TCModel without a GVL");
                if (!o.isReady) throw new i.EncodingError("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
                (e = e.clone()).consentLanguage = o.language.toUpperCase(), (null === (n = t) || void 0 === n ? void 0 : n.version) > 0 && (null === (r = t) || void 0 === r ? void 0 : r.version) <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
                var s = e.version - 1;
                if (!this.processor[s]) throw new i.EncodingError("Invalid version: " + e.version);
                return this.processor[s](e, o)
            }, e.processor = [function(e) {
                return e
            }, function(e, t) {
                var n, i, c, u;
                e.publisherRestrictions.gvl = t, e.purposeLegitimateInterests.unset(1);
                var a = new Map;
                a.set("legIntPurposes", e.vendorLegitimateInterests), a.set("purposes", e.vendorConsents);
                try {
                    for (var p = r(a), d = p.next(); !d.done; d = p.next()) {
                        var l = o(d.value, 2),
                            f = l[0],
                            h = l[1];
                        try {
                            for (var g = (c = void 0, r(h.values())), v = g.next(); !v.done; v = g.next()) {
                                var y = v.value,
                                    m = t.vendors[y];
                                if (!m || m.deletedDate) h.unset(y);
                                else if (0 === m[f].length)
                                    if (e.isServiceSpecific)
                                        if (0 === m.flexiblePurposes.length) h.unset(y);
                                        else {
                                            for (var b = e.publisherRestrictions.getRestrictions(y), E = !1, _ = 0, C = b.length; _ < C && !E; _++) E = b[_].restrictionType === s.RestrictionType.REQUIRE_CONSENT && "purposes" === f || b[_].restrictionType === s.RestrictionType.REQUIRE_LI && "legIntPurposes" === f;
                                            E || h.unset(y)
                                        }
                                    else h.unset(y)
                            }
                        } catch (e) {
                            c = {
                                error: e
                            }
                        } finally {
                            try {
                                v && !v.done && (u = g.return) && u.call(g)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        d && !d.done && (i = p.return) && i.call(p)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return e.vendorsDisclosed.set(t.vendors), e
            }], e
        }();
    t.SemanticPreEncoder = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5),
        o = n(1),
        i = n(3),
        s = n(24),
        c = function() {
            function e() {}
            return e.encode = function(e, t) {
                var n, o, i = "";
                return e = r.SemanticPreEncoder.process(e, t), (o = Array.isArray(null === (n = t) || void 0 === n ? void 0 : n.segments) ? t.segments : new r.SegmentSequence(e, t)["" + e.version]).forEach((function(t, n) {
                    var s = "";
                    n < o.length - 1 && (s = "."), i += r.SegmentEncoder.encode(e, t) + s
                })), i
            }, e.decode = function(e, t) {
                var n = e.split("."),
                    c = n.length;
                t || (t = new s.TCModel);
                for (var u = 0; u < c; u++) {
                    var a = n[u],
                        p = r.Base64Url.decode(a.charAt(0)).substr(0, r.BitLength.segmentType),
                        d = o.SegmentIDs.ID_TO_KEY[i.IntEncoder.decode(p, r.BitLength.segmentType).toString()];
                    r.SegmentEncoder.decode(a, t, d)
                }
                return t
            }, e
        }();
    t.TCString = c
}]);
//# sourceMappingURL=cpex-cmp.min.js.map

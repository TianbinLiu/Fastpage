/*! https://github.com/xiazeyu/live2d-widget.js built@2019-5-13 14:52:15 */
var L2Dwidget = function(t) {
    var n = window.webpackJsonpL2Dwidget;
    window.webpackJsonpL2Dwidget = function(e, o, i) {
        for (var c, u, a = 0, s = []; a < e.length; a++) u = e[a], r[u] && s.push(r[u][0]), r[u] = 0;
        for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
        for (n && n(e, o, i); s.length;) s.shift()()
    };
    var e = {},
        r = {
            1: 0
        };

    function o(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    return o.e = function(t) {
        var n = r[t];
        if (0 === n) return new Promise(function(t) {
            t()
        });
        if (n) return n[2];
        var e = new Promise(function(e, o) {
            n = r[t] = [e, o]
        });
        n[2] = e;
        var i = document.getElementsByTagName("head")[0],
            c = document.createElement("script");
        c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, o.nc && c.setAttribute("nonce", o.nc), c.src = o.p + "L2Dwidget." + t + ".min.js";
        var u = setTimeout(a, 12e4);

        function a() {
            c.onerror = c.onload = null, clearTimeout(u);
            var n = r[t];
            0 !== n && (n && n[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0)
        }
        return c.onerror = c.onload = a, i.appendChild(c), e
    }, o.m = t, o.c = e, o.d = function(t, n, e) {
        o.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, o.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(n, "a", n), n
    }, o.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    }, o(o.s = 41)
}([function(t, n, e) {
    var r = e(16)("wks"),
        o = e(18),
        i = e(1).Symbol,
        c = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
    }).store = r
}, function(t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
}, function(t, n) {
    var e = t.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = e)
}, function(t, n, e) {
    var r = e(6);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, n, e) {
    var r = e(10),
        o = e(27);
    t.exports = e(7) ? function(t, n, e) {
        return r.f(t, n, o(1, e))
    } : function(t, n, e) {
        return t[n] = e, t
    }
}, function(t, n, e) {
    var r = e(1),
        o = e(4),
        i = e(11),
        c = e(18)("src"),
        u = e(46),
        a = ("" + u).split("toString");
    e(2).inspectSource = function(t) {
        return u.call(t)
    }, (t.exports = function(t, n, e, u) {
        var s = "function" == typeof e;
        s && (i(e, "name") || o(e, "name", n)), t[n] !== e && (s && (i(e, c) || o(e, c, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : u ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[c] || u.call(this)
    })
}, function(t, n) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, n, e) {
    t.exports = !e(26)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, n) {
    t.exports = {}
}, function(t, n) {
    var e = {}.toString;
    t.exports = function(t) {
        return e.call(t).slice(8, -1)
    }
}, function(t, n, e) {
    var r = e(3),
        o = e(44),
        i = e(45),
        c = Object.defineProperty;
    n.f = e(7) ? Object.defineProperty : function(t, n, e) {
        if (r(t), n = i(n, !0), r(e), o) try {
            return c(t, n, e)
        } catch (t) {}
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
        return "value" in e && (t[n] = e.value), t
    }
}, function(t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, n) {
        return e.call(t, n)
    }
}, function(t, n, e) {
    var r = e(1),
        o = e(2),
        i = e(4),
        c = e(5),
        u = e(13),
        a = function(t, n, e) {
            var s, f, l, p, d = t & a.F,
                v = t & a.G,
                h = t & a.S,
                y = t & a.P,
                m = t & a.B,
                b = v ? r : h ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                w = v ? o : o[n] || (o[n] = {}),
                g = w.prototype || (w.prototype = {});
            for (s in v && (e = n), e) l = ((f = !d && b && void 0 !== b[s]) ? b : e)[s], p = m && f ? u(l, r) : y && "function" == typeof l ? u(Function.call, l) : l, b && c(b, s, l, t & a.U), w[s] != l && i(w, s, p), y && g[s] != l && (g[s] = l)
        };
    r.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
}, function(t, n, e) {
    var r = e(14);
    t.exports = function(t, n, e) {
        if (r(t), void 0 === n) return t;
        switch (e) {
            case 1:
                return function(e) {
                    return t.call(n, e)
                };
            case 2:
                return function(e, r) {
                    return t.call(n, e, r)
                };
            case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o)
                }
        }
        return function() {
            return t.apply(n, arguments)
        }
    }
}, function(t, n) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, n, e) {
    var r = e(9),
        o = e(0)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var n, e, c;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
            try {
                return t[n]
            } catch (t) {}
        }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
    }
}, function(t, n, e) {
    var r = e(2),
        o = e(1),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: r.version,
        mode: e(17) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, n) {
    t.exports = !1
}, function(t, n) {
    var e = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
    }
}, function(t, n, e) {
    var r = e(6),
        o = e(1).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}, function(t, n) {
    var e = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
    }
}, function(t, n) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, n, e) {
    var r = e(53),
        o = e(21);
    t.exports = function(t) {
        return r(o(t))
    }
}, function(t, n, e) {
    var r = e(16)("keys"),
        o = e(18);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, n, e) {
    var r = e(10).f,
        o = e(11),
        i = e(0)("toStringTag");
    t.exports = function(t, n, e) {
        t && !o(t = e ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: n
        })
    }
}, function(t, n, e) {
    "use strict";
    var r = e(14);
    t.exports.f = function(t) {
        return new function(t) {
            var n, e;
            this.promise = new t(function(t, r) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = r
            }), this.resolve = r(n), this.reject = r(e)
        }(t)
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }
}, function(t, n, e) {
    "use strict";
    var r = e(17),
        o = e(12),
        i = e(5),
        c = e(4),
        u = e(8),
        a = e(49),
        s = e(24),
        f = e(56),
        l = e(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = function() {
            return this
        };
    t.exports = function(t, n, e, v, h, y, m) {
        a(e, n, v);
        var b, w, g, x = function(t) {
                if (!p && t in j) return j[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new e(this, t)
                        }
                }
                return function() {
                    return new e(this, t)
                }
            },
            _ = n + " Iterator",
            P = "values" == h,
            O = !1,
            j = t.prototype,
            S = j[l] || j["@@iterator"] || h && j[h],
            k = S || x(h),
            T = h ? P ? x("entries") : k : void 0,
            E = "Array" == n && j.entries || S;
        if (E && (g = f(E.call(new t))) !== Object.prototype && g.next && (s(g, _, !0), r || "function" == typeof g[l] || c(g, l, d)), P && S && "values" !== S.name && (O = !0, k = function() {
                return S.call(this)
            }), r && !m || !p && !O && j[l] || c(j, l, k), u[n] = k, u[_] = d, h)
            if (b = {
                    values: P ? k : x("values"),
                    keys: y ? k : x("keys"),
                    entries: T
                }, m)
                for (w in b) w in j || i(j, w, b[w]);
            else o(o.P + o.F * (p || O), n, b);
        return b
    }
}, function(t, n, e) {
    var r = e(52),
        o = e(31);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}, function(t, n, e) {
    var r = e(20),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function(t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, n, e) {
    var r = e(1).document;
    t.exports = r && r.documentElement
}, function(t, n, e) {
    var r = e(3),
        o = e(14),
        i = e(0)("species");
    t.exports = function(t, n) {
        var e, c = r(t).constructor;
        return void 0 === c || void 0 == (e = r(c)[i]) ? n : o(e)
    }
}, function(t, n, e) {
    var r, o, i, c = e(13),
        u = e(68),
        a = e(32),
        s = e(19),
        f = e(1),
        l = f.process,
        p = f.setImmediate,
        d = f.clearImmediate,
        v = f.MessageChannel,
        h = f.Dispatch,
        y = 0,
        m = {},
        b = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var n = m[t];
                delete m[t], n()
            }
        },
        w = function(t) {
            b.call(t.data)
        };
    p && d || (p = function(t) {
        for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
        return m[++y] = function() {
            u("function" == typeof t ? t : Function(t), n)
        }, r(y), y
    }, d = function(t) {
        delete m[t]
    }, "process" == e(9)(l) ? r = function(t) {
        l.nextTick(c(b, t, 1))
    } : h && h.now ? r = function(t) {
        h.now(c(b, t, 1))
    } : v ? (i = (o = new v).port2, o.port1.onmessage = w, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
        f.postMessage(t + "", "*")
    }, f.addEventListener("message", w, !1)) : r = "onreadystatechange" in s("script") ? function(t) {
        a.appendChild(s("script")).onreadystatechange = function() {
            a.removeChild(this), b.call(t)
        }
    } : function(t) {
        setTimeout(c(b, t, 1), 0)
    }), t.exports = {
        set: p,
        clear: d
    }
}, function(t, n) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, n, e) {
    var r = e(3),
        o = e(6),
        i = e(25);
    t.exports = function(t, n) {
        if (r(t), o(n) && n.constructor === t) return n;
        var e = i.f(t);
        return (0, e.resolve)(n), e.promise
    }
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.L2Dwidget = void 0;
    var r, o = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(n, e, r) {
                return e && t(n.prototype, e), r && t(n, r), n
            }
        }(),
        i = e(39),
        c = (r = i) && r.__esModule ? r : {
            default: r
        },
        u = e(38),
        a = e(40);
    var s = void 0,
        f = new(function(t) {
            function n() {
                ! function(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                var t = function(t, n) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !n || "object" != typeof n && "function" != typeof n ? t : n
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return t.config = u.config, t
            }
            return function(t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
            }(n, a.EventEmitter), o(n, [{
                key: "init",
                value: function() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, u.configApplyer)(n), this.emit("config", this.config), !u.config.mobile.show && c.default.mobile() || e.e(0).then(e.bind(null, 79)).then(function(n) {
                        (s = n).theRealInit(t)
                    }).catch(function(t) {
                        console.error(t)
                    })
                }
            }, {
                key: "captureFrame",
                value: function(t) {
                    return s.captureFrame(t)
                }
            }, {
                key: "downloadFrame",
                value: function() {
                    this.captureFrame(function(t) {
                        var n = document.createElement("a");
                        document.body.appendChild(n), n.setAttribute("type", "hidden"), n.href = t, n.download = "live2d.png", n.click()
                    })
                }
            }]), n
        }());
    n.L2Dwidget = f
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.config = n.configApplyer = void 0;
    var r = i(e(77)),
        o = i(e(78));

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = {};
    n.configApplyer = function(t) {
        (0, o.default)(c, t, r.default)
    }, n.config = c
}, function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = window.device,
        i = {},
        c = [];
    window.device = i;
    var u = window.document.documentElement,
        a = window.navigator.userAgent.toLowerCase(),
        s = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"];

    function f(t) {
        return -1 !== a.indexOf(t)
    }

    function l(t) {
        return u.className.match(new RegExp(t, "i"))
    }

    function p(t) {
        var n = null;
        l(t) || (n = u.className.replace(/^\s+|\s+$/g, ""), u.className = n + " " + t)
    }

    function d(t) {
        l(t) && (u.className = u.className.replace(" " + t, ""))
    }

    function v() {
        i.landscape() ? (d("portrait"), p("landscape"), h("landscape")) : (d("landscape"), p("portrait"), h("portrait")), b()
    }

    function h(t) {
        for (var n in c) c[n](t)
    }
    i.macos = function() {
        return f("mac")
    }, i.ios = function() {
        return i.iphone() || i.ipod() || i.ipad()
    }, i.iphone = function() {
        return !i.windows() && f("iphone")
    }, i.ipod = function() {
        return f("ipod")
    }, i.ipad = function() {
        return f("ipad")
    }, i.android = function() {
        return !i.windows() && f("android")
    }, i.androidPhone = function() {
        return i.android() && f("mobile")
    }, i.androidTablet = function() {
        return i.android() && !f("mobile")
    }, i.blackberry = function() {
        return f("blackberry") || f("bb10") || f("rim")
    }, i.blackberryPhone = function() {
        return i.blackberry() && !f("tablet")
    }, i.blackberryTablet = function() {
        return i.blackberry() && f("tablet")
    }, i.windows = function() {
        return f("windows")
    }, i.windowsPhone = function() {
        return i.windows() && f("phone")
    }, i.windowsTablet = function() {
        return i.windows() && f("touch") && !i.windowsPhone()
    }, i.fxos = function() {
        return (f("(mobile") || f("(tablet")) && f(" rv:")
    }, i.fxosPhone = function() {
        return i.fxos() && f("mobile")
    }, i.fxosTablet = function() {
        return i.fxos() && f("tablet")
    }, i.meego = function() {
        return f("meego")
    }, i.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }, i.nodeWebkit = function() {
        return "object" === r(window.process)
    }, i.mobile = function() {
        return i.androidPhone() || i.iphone() || i.ipod() || i.windowsPhone() || i.blackberryPhone() || i.fxosPhone() || i.meego()
    }, i.tablet = function() {
        return i.ipad() || i.androidTablet() || i.blackberryTablet() || i.windowsTablet() || i.fxosTablet()
    }, i.desktop = function() {
        return !i.tablet() && !i.mobile()
    }, i.television = function() {
        for (var t = 0; t < s.length;) {
            if (f(s[t])) return !0;
            t++
        }
        return !1
    }, i.portrait = function() {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("portrait") : window.innerHeight / window.innerWidth > 1
    }, i.landscape = function() {
        return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? screen.orientation.type.includes("landscape") : window.innerHeight / window.innerWidth < 1
    }, i.noConflict = function() {
        return window.device = o, this
    }, i.ios() ? i.ipad() ? p("ios ipad tablet") : i.iphone() ? p("ios iphone mobile") : i.ipod() && p("ios ipod mobile") : i.macos() ? p("macos desktop") : i.android() ? i.androidTablet() ? p("android tablet") : p("android mobile") : i.blackberry() ? i.blackberryTablet() ? p("blackberry tablet") : p("blackberry mobile") : i.windows() ? i.windowsTablet() ? p("windows tablet") : i.windowsPhone() ? p("windows mobile") : p("windows desktop") : i.fxos() ? i.fxosTablet() ? p("fxos tablet") : p("fxos mobile") : i.meego() ? p("meego mobile") : i.nodeWebkit() ? p("node-webkit") : i.television() ? p("television") : i.desktop() && p("desktop"), i.cordova() && p("cordova"), i.onChangeOrientation = function(t) {
        "function" == typeof t && c.push(t)
    };
    var y = "resize";

    function m(t) {
        for (var n = 0; n < t.length; n++)
            if (i[t[n]]()) return t[n];
        return "unknown"
    }

    function b() {
        i.orientation = m(["portrait", "landscape"])
    }
    Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (y = "orientationchange"), window.addEventListener ? window.addEventListener(y, v, !1) : window.attachEvent ? window.attachEvent(y, v) : window[y] = v, v(), i.type = m(["mobile", "tablet", "desktop"]), i.os = m(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "windows", "fxos", "meego", "television"]), b(), n.default = i
}, function(t, n, e) {
    "use strict";
    var r = function() {
        function t(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        return function(n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n
        }
    }();
    var o = function() {
        function t() {
            ! function(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.eventHandlers = {}
        }
        return r(t, [{
            key: "on",
            value: function(t, n) {
                if ("function" != typeof n) throw new TypeError("Event handler is not a function.");
                return this.eventHandlers[t] || (this.eventHandlers[t] = []), this.eventHandlers[t].push(n), this
            }
        }, {
            key: "emit",
            value: function(t) {
                for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                return this.eventHandlers[t] && this.eventHandlers[t].forEach(function(t) {
                    "function" == typeof t && t.apply(void 0, e)
                }), this.eventHandlers["*"] && this.eventHandlers["*"].forEach(function(n) {
                    "function" == typeof n && n.apply(void 0, [t].concat(e))
                }), this
            }
        }]), t
    }();
    t.exports = {
        EventEmitter: o
    }
}, function(t, n, e) {
    e(42), e(76), t.exports = e(37)
}, function(t, n, e) {
    e(43), e(47), e(58), e(62), e(74), e(75), t.exports = e(2).Promise
}, function(t, n, e) {
    "use strict";
    var r = e(15),
        o = {};
    o[e(0)("toStringTag")] = "z", o + "" != "[object z]" && e(5)(Object.prototype, "toString", function() {
        return "[object " + r(this) + "]"
    }, !0)
}, function(t, n, e) {
    t.exports = !e(7) && !e(26)(function() {
        return 7 != Object.defineProperty(e(19)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, n, e) {
    var r = e(6);
    t.exports = function(t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
        if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
        if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, n, e) {
    t.exports = e(16)("native-function-to-string", Function.toString)
}, function(t, n, e) {
    "use strict";
    var r = e(48)(!0);
    e(28)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, n = this._t,
            e = this._i;
        return e >= n.length ? {
            value: void 0,
            done: !0
        } : (t = r(n, e), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, n, e) {
    var r = e(20),
        o = e(21);
    t.exports = function(t) {
        return function(n, e) {
            var i, c, u = String(o(n)),
                a = r(e),
                s = u.length;
            return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function(t, n, e) {
    "use strict";
    var r = e(50),
        o = e(27),
        i = e(24),
        c = {};
    e(4)(c, e(0)("iterator"), function() {
        return this
    }), t.exports = function(t, n, e) {
        t.prototype = r(c, {
            next: o(1, e)
        }), i(t, n + " Iterator")
    }
}, function(t, n, e) {
    var r = e(3),
        o = e(51),
        i = e(31),
        c = e(23)("IE_PROTO"),
        u = function() {},
        a = function() {
            var t, n = e(19)("iframe"),
                r = i.length;
            for (n.style.display = "none", e(32).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[i[r]];
            return a()
        };
    t.exports = Object.create || function(t, n) {
        var e;
        return null !== t ? (u.prototype = r(t), e = new u, u.prototype = null, e[c] = t) : e = a(), void 0 === n ? e : o(e, n)
    }
}, function(t, n, e) {
    var r = e(10),
        o = e(3),
        i = e(29);
    t.exports = e(7) ? Object.defineProperties : function(t, n) {
        o(t);
        for (var e, c = i(n), u = c.length, a = 0; u > a;) r.f(t, e = c[a++], n[e]);
        return t
    }
}, function(t, n, e) {
    var r = e(11),
        o = e(22),
        i = e(54)(!1),
        c = e(23)("IE_PROTO");
    t.exports = function(t, n) {
        var e, u = o(t),
            a = 0,
            s = [];
        for (e in u) e != c && r(u, e) && s.push(e);
        for (; n.length > a;) r(u, e = n[a++]) && (~i(s, e) || s.push(e));
        return s
    }
}, function(t, n, e) {
    var r = e(9);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, n, e) {
    var r = e(22),
        o = e(30),
        i = e(55);
    t.exports = function(t) {
        return function(n, e, c) {
            var u, a = r(n),
                s = o(a.length),
                f = i(c, s);
            if (t && e != e) {
                for (; s > f;)
                    if ((u = a[f++]) != u) return !0
            } else
                for (; s > f; f++)
                    if ((t || f in a) && a[f] === e) return t || f || 0; return !t && -1
        }
    }
}, function(t, n, e) {
    var r = e(20),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
}, function(t, n, e) {
    var r = e(11),
        o = e(57),
        i = e(23)("IE_PROTO"),
        c = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
    }
}, function(t, n, e) {
    var r = e(21);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, n, e) {
    for (var r = e(59), o = e(29), i = e(5), c = e(1), u = e(4), a = e(8), s = e(0), f = s("iterator"), l = s("toStringTag"), p = a.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = o(d), h = 0; h < v.length; h++) {
        var y, m = v[h],
            b = d[m],
            w = c[m],
            g = w && w.prototype;
        if (g && (g[f] || u(g, f, p), g[l] || u(g, l, m), a[m] = p, b))
            for (y in r) g[y] || i(g, y, r[y], !0)
    }
}, function(t, n, e) {
    "use strict";
    var r = e(60),
        o = e(61),
        i = e(8),
        c = e(22);
    t.exports = e(28)(Array, "Array", function(t, n) {
        this._t = c(t), this._i = 0, this._k = n
    }, function() {
        var t = this._t,
            n = this._k,
            e = this._i++;
        return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, n, e) {
    var r = e(0)("unscopables"),
        o = Array.prototype;
    void 0 == o[r] && e(4)(o, r, {}), t.exports = function(t) {
        o[r][t] = !0
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return {
            value: n,
            done: !!t
        }
    }
}, function(t, n, e) {
    "use strict";
    var r, o, i, c, u = e(17),
        a = e(1),
        s = e(13),
        f = e(15),
        l = e(12),
        p = e(6),
        d = e(14),
        v = e(63),
        h = e(64),
        y = e(33),
        m = e(34).set,
        b = e(69)(),
        w = e(25),
        g = e(35),
        x = e(70),
        _ = e(36),
        P = a.TypeError,
        O = a.process,
        j = O && O.versions,
        S = j && j.v8 || "",
        k = a.Promise,
        T = "process" == f(O),
        E = function() {},
        L = o = w.f,
        M = !! function() {
            try {
                var t = k.resolve(1),
                    n = (t.constructor = {})[e(0)("species")] = function(t) {
                        t(E, E)
                    };
                return (T || "function" == typeof PromiseRejectionEvent) && t.then(E) instanceof n && 0 !== S.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        A = function(t) {
            var n;
            return !(!p(t) || "function" != typeof(n = t.then)) && n
        },
        C = function(t, n) {
            if (!t._n) {
                t._n = !0;
                var e = t._c;
                b(function() {
                    for (var r = t._v, o = 1 == t._s, i = 0, c = function(n) {
                            var e, i, c, u = o ? n.ok : n.fail,
                                a = n.resolve,
                                s = n.reject,
                                f = n.domain;
                            try {
                                u ? (o || (2 == t._h && N(t), t._h = 1), !0 === u ? e = r : (f && f.enter(), e = u(r), f && (f.exit(), c = !0)), e === n.promise ? s(P("Promise-chain cycle")) : (i = A(e)) ? i.call(e, a, s) : a(e)) : s(r)
                            } catch (t) {
                                f && !c && f.exit(), s(t)
                            }
                        }; e.length > i;) c(e[i++]);
                    t._c = [], t._n = !1, n && !t._h && F(t)
                })
            }
        },
        F = function(t) {
            m.call(a, function() {
                var n, e, r, o = t._v,
                    i = R(t);
                if (i && (n = g(function() {
                        T ? O.emit("unhandledRejection", o, t) : (e = a.onunhandledrejection) ? e({
                            promise: t,
                            reason: o
                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = T || R(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
            })
        },
        R = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        N = function(t) {
            m.call(a, function() {
                var n;
                T ? O.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({
                    promise: t,
                    reason: t._v
                })
            })
        },
        D = function(t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), C(n, !0))
        },
        H = function(t) {
            var n, e = this;
            if (!e._d) {
                e._d = !0, e = e._w || e;
                try {
                    if (e === t) throw P("Promise can't be resolved itself");
                    (n = A(t)) ? b(function() {
                        var r = {
                            _w: e,
                            _d: !1
                        };
                        try {
                            n.call(t, s(H, r, 1), s(D, r, 1))
                        } catch (t) {
                            D.call(r, t)
                        }
                    }): (e._v = t, e._s = 1, C(e, !1))
                } catch (t) {
                    D.call({
                        _w: e,
                        _d: !1
                    }, t)
                }
            }
        };
    M || (k = function(t) {
        v(this, k, "Promise", "_h"), d(t), r.call(this);
        try {
            t(s(H, this, 1), s(D, this, 1))
        } catch (t) {
            D.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = e(71)(k.prototype, {
        then: function(t, n) {
            var e = L(y(this, k));
            return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = T ? O.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && C(this, !1), e.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r;
        this.promise = t, this.resolve = s(H, t, 1), this.reject = s(D, t, 1)
    }, w.f = L = function(t) {
        return t === k || t === c ? new i(t) : o(t)
    }), l(l.G + l.W + l.F * !M, {
        Promise: k
    }), e(24)(k, "Promise"), e(72)("Promise"), c = e(2).Promise, l(l.S + l.F * !M, "Promise", {
        reject: function(t) {
            var n = L(this);
            return (0, n.reject)(t), n.promise
        }
    }), l(l.S + l.F * (u || !M), "Promise", {
        resolve: function(t) {
            return _(u && this === c ? k : this, t)
        }
    }), l(l.S + l.F * !(M && e(73)(function(t) {
        k.all(t).catch(E)
    })), "Promise", {
        all: function(t) {
            var n = this,
                e = L(n),
                r = e.resolve,
                o = e.reject,
                i = g(function() {
                    var e = [],
                        i = 0,
                        c = 1;
                    h(t, !1, function(t) {
                        var u = i++,
                            a = !1;
                        e.push(void 0), c++, n.resolve(t).then(function(t) {
                            a || (a = !0, e[u] = t, --c || r(e))
                        }, o)
                    }), --c || r(e)
                });
            return i.e && o(i.v), e.promise
        },
        race: function(t) {
            var n = this,
                e = L(n),
                r = e.reject,
                o = g(function() {
                    h(t, !1, function(t) {
                        n.resolve(t).then(e.resolve, r)
                    })
                });
            return o.e && r(o.v), e.promise
        }
    })
}, function(t, n) {
    t.exports = function(t, n, e, r) {
        if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
        return t
    }
}, function(t, n, e) {
    var r = e(13),
        o = e(65),
        i = e(66),
        c = e(3),
        u = e(30),
        a = e(67),
        s = {},
        f = {};
    (n = t.exports = function(t, n, e, l, p) {
        var d, v, h, y, m = p ? function() {
                return t
            } : a(t),
            b = r(e, l, n ? 2 : 1),
            w = 0;
        if ("function" != typeof m) throw TypeError(t + " is not iterable!");
        if (i(m)) {
            for (d = u(t.length); d > w; w++)
                if ((y = n ? b(c(v = t[w])[0], v[1]) : b(t[w])) === s || y === f) return y
        } else
            for (h = m.call(t); !(v = h.next()).done;)
                if ((y = o(h, b, v.value, n)) === s || y === f) return y
    }).BREAK = s, n.RETURN = f
}, function(t, n, e) {
    var r = e(3);
    t.exports = function(t, n, e, o) {
        try {
            return o ? n(r(e)[0], e[1]) : n(e)
        } catch (n) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), n
        }
    }
}, function(t, n, e) {
    var r = e(8),
        o = e(0)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}, function(t, n, e) {
    var r = e(15),
        o = e(0)("iterator"),
        i = e(8);
    t.exports = e(2).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function(t, n) {
    t.exports = function(t, n, e) {
        var r = void 0 === e;
        switch (n.length) {
            case 0:
                return r ? t() : t.call(e);
            case 1:
                return r ? t(n[0]) : t.call(e, n[0]);
            case 2:
                return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
            case 3:
                return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
            case 4:
                return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
        }
        return t.apply(e, n)
    }
}, function(t, n, e) {
    var r = e(1),
        o = e(34).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        c = r.process,
        u = r.Promise,
        a = "process" == e(9)(c);
    t.exports = function() {
        var t, n, e, s = function() {
            var r, o;
            for (a && (r = c.domain) && r.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? e() : n = void 0, r
                }
            }
            n = void 0, r && r.enter()
        };
        if (a) e = function() {
            c.nextTick(s)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (u && u.resolve) {
                var f = u.resolve(void 0);
                e = function() {
                    f.then(s)
                }
            } else e = function() {
                o.call(r, s)
            };
        else {
            var l = !0,
                p = document.createTextNode("");
            new i(s).observe(p, {
                characterData: !0
            }), e = function() {
                p.data = l = !l
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            n && (n.next = o), t || (t = o, e()), n = o
        }
    }
}, function(t, n, e) {
    var r = e(1).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, n, e) {
    var r = e(5);
    t.exports = function(t, n, e) {
        for (var o in n) r(t, o, n[o], e);
        return t
    }
}, function(t, n, e) {
    "use strict";
    var r = e(1),
        o = e(10),
        i = e(7),
        c = e(0)("species");
    t.exports = function(t) {
        var n = r[t];
        i && n && !n[c] && o.f(n, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, n, e) {
    var r = e(0)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
            var i = [7],
                c = i[r]();
            c.next = function() {
                return {
                    done: e = !0
                }
            }, i[r] = function() {
                return c
            }, t(i)
        } catch (t) {}
        return e
    }
}, function(t, n, e) {
    "use strict";
    var r = e(12),
        o = e(2),
        i = e(1),
        c = e(33),
        u = e(36);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var n = c(this, o.Promise || i.Promise),
                e = "function" == typeof t;
            return this.then(e ? function(e) {
                return u(n, t()).then(function() {
                    return e
                })
            } : t, e ? function(e) {
                return u(n, t()).then(function() {
                    throw e
                })
            } : t)
        }
    })
}, function(t, n, e) {
    "use strict";
    var r = e(12),
        o = e(25),
        i = e(35);
    r(r.S, "Promise", {
        try: function(t) {
            var n = o.f(this),
                e = i(t);
            return (e.e ? n.reject : n.resolve)(e.v), n.promise
        }
    })
}, function(t, n, e) {
    "use strict";

    function r() {
        try {
            return document.currentScript.src
        } catch (n) {
            var t = document.getElementsByTagName("script");
            return t[t.length - 1].src
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), e.p = r().replace(/[^/\\\\]+$/, ""), n.getCurrentPath = r
}, function(t, n, e) {
    "use strict";
    t.exports = {
        model: {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@latest/assets/shizuku.model.json",
            scale: 1
        },
        display: {
            superSample: 2,
            width: 200,
            height: 400,
            position: "right",
            hOffset: 0,
            vOffset: -20
        },
        mobile: {
            show: !0,
            scale: .8,
            motion: !0
        },
        name: {
            canvas: "live2dcanvas",
            div: "live2d-widget"
        },
        react: {
            opacity: 1
        },
        dev: {
            border: !1
        },
        dialog: {
            enable: !1,
            script: null
        }
    }
}, function(t, n, e) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = function t(n, e) {
        function o(n, e) {
            for (var o in e)
                if (e.hasOwnProperty(o)) {
                    var i = e[o];
                    if ("__proto__" === o) continue;
                    var c = n[o];
                    null == c ? n[o] = i : "object" === (void 0 === c ? "undefined" : r(c)) && null !== c && "object" === (void 0 === i ? "undefined" : r(i)) && null !== i && t(c, i)
                }
        }
        n = n || {};
        for (var i = arguments.length, c = 0; c < i;) {
            var u = arguments[c++];
            u && o(n, u)
        }
        return n
    }
}]).L2Dwidget;
//# sourceMappingURL=L2Dwidget.min.js.map

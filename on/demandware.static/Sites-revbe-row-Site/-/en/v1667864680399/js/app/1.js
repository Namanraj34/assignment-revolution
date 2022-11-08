(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        17: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Compile", (function() {
                return E
            })), n.d(e, "F", (function() {
                return y
            })), n.d(e, "H", (function() {
                return i
            })), n.d(e, "P", (function() {
                return r
            })), n.d(e, "Render", (function() {
                return O
            })), n.d(e, "__express", (function() {
                return P
            })), n.d(e, "autoEscaping", (function() {
                return M
            })), n.d(e, "defaultTags", (function() {
                return c
            })), n.d(e, "defineFilter", (function() {
                return S
            })), n.d(e, "defineHelper", (function() {
                return R
            })), n.d(e, "defineNativeHelper", (function() {
                return N
            })), n.d(e, "definePartial", (function() {
                return A
            })), n.d(e, "load", (function() {
                return k
            })), n.d(e, "renderFile", (function() {
                return L
            })), n.d(e, "setDefaultFilters", (function() {
                return w
            }));
            var i = {},
                r = {},
                a = /{{ *?(?:(?:([\w$]+) *?\((.*?)\) *?([\w$]*))|(?:([\w$]+) *?\((.*?)\) *?\/)|(?:([\w$@].*?) *?((?:\| *?[\w$]+ *)*))|(?:\/ *?([\w$]+))|(?:# *?([\w$]+))|(?:!\-\-[^]+?\-\-)) *?}}\n?/g,
                o = {
                    s: "{{",
                    e: "}}"
                },
                u = /@(?:((?:\.\.\/)+)|([\w$]+):)?/g,
                l = a,
                s = o;

            function c(t) {
                f(t[0], t[1]), a = l, o = s
            }

            function f(t, e) {
                var n = t + l.source.slice(s.s.length, 0 - (s.e.length + 3)) + e + "\\n?",
                    i = l.lastIndex;
                s = {
                    s: t,
                    e: e
                }, (l = RegExp(n, "g")).lastIndex = i
            }

            function d(t, e, n) {
                return t.replace(u, (function(t, i, r) {
                    return "hvals" + (i && i.length ? e[n - i.length / 3 - 1].id : r || "") + "."
                }))
            }
            var v = {
                    if: {
                        helperStart: function(t) {
                            return "if(" + t + "){"
                        },
                        helperEnd: function() {
                            return "}"
                        },
                        blocks: {
                            else: function() {
                                return "}else{"
                            }
                        }
                    },
                    each: {
                        helperStart: function(t, e) {
                            return "for(var i=0;i<" + t + ".length; i++){tR+=(function(hvals){var tR='';var hvals" + e + "=hvals;"
                        },
                        helperEnd: function(t) {
                            return "return tR})({this:" + t + "[i],index:i})};"
                        }
                    },
                    foreach: {
                        helperStart: function(t, e) {
                            return "for(var key in " + t + "){if(!" + t + ".hasOwnProperty(key)) continue;tR+=(function(hvals){var tR='';var hvals" + e + "=hvals;"
                        },
                        helperEnd: function(t) {
                            return "return tR})({this:" + t + "[key], key: key})};"
                        }
                    },
                    log: {
                        selfClosing: function(t) {
                            return "console.log(" + t + ");"
                        }
                    },
                    tags: {
                        selfClosing: function(t) {
                            return f(t.slice(0, t.indexOf(",")).trim(), t.slice(t.indexOf(",") + 1).trim()), ""
                        }
                    },
                    js: {
                        selfClosing: function(t) {
                            return t + ";"
                        }
                    }
                },
                p = {
                    "&": "&amp;",
                    "<": "&lt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };

            function h(t) {
                return p[t]
            }
            var m = /[&<"']/g,
                g = /[&<"']/,
                y = {
                    e: function(t) {
                        var e = String(t);
                        return g.test(e) ? e.replace(m, h) : e
                    }
                },
                x = {},
                b = {
                    start: "",
                    end: ""
                };

            function w(t) {
                if ("clear" === t) x = {};
                else
                    for (var e in t) t.hasOwnProperty(e) && (x[e] = t[e]);
                ! function() {
                    for (var t in b = {
                            start: "",
                            end: ""
                        }, x) x.hasOwnProperty(t) && x[t] && (b.start += "Sqrl.F." + t + "(", b.end += ")")
                }()
            }
            var C = !0;

            function M(t) {
                return C = t
            }

            function T(t, e) {
                var n, i = !1,
                    r = "",
                    a = "";
                if (e && "" !== e) {
                    n = e.split("|");
                    for (var o = 0; o < n.length; o++) n[o] = n[o].trim(), "" !== n[o] && ("safe" !== n[o] ? (r = "Sqrl.F." + n[o] + "(" + r, a += ")") : i = !0)
                }
                return r += b.start, a += b.end, !i && C && (r += "Sqrl.F.e(", a += ")"), r + t + a
            }

            function E(t) {
                var e, n = 0,
                    i = "var tR='';",
                    u = [],
                    c = -1,
                    f = 0,
                    p = {};

                function h(e) {
                    n !== e && (i += "tR+='" + t.slice(n, e).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "';")
                }

                function m(t, e) {
                    var n = d(t, u, c);
                    return "@" === t[0] ? T(n, e) : T("options." + n, e)
                }
                for (s = o, (l = a).lastIndex = 0; null !== (e = l.exec(t));)
                    if (h(e.index), n = e[0].length + e.index, e[1]) {
                        var g = e[3];
                        "" !== g && null !== g || (g = f, f++);
                        var y = v.hasOwnProperty(e[1]);
                        c += 1;
                        var x = e[2] || "";
                        x = d(x, u, c), y || (x = "[" + x + "]");
                        var b = {
                            name: e[1],
                            id: g,
                            params: x,
                            native: y
                        };
                        u[c] = b, y ? (i += v[e[1]].helperStart(x, g), n = l.lastIndex) : i += "tR+=Sqrl.H." + e[1] + "(" + x + ",function(hvals){var hvals" + g + "=hvals;var tR='';"
                    } else if (e[4]) {
                    var w = e[5] || "";
                    if (w = d(w, u, c), "include" === e[4]) {
                        var C = t.slice(0, e.index),
                            M = t.slice(e.index + e[0].length),
                            E = w.replace(/'|"/g, ""),
                            S = r[E];
                        t = C + S + M, n = l.lastIndex = e.index
                    } else v.hasOwnProperty(e[4]) && v[e[4]].hasOwnProperty("selfClosing") ? (i += v[e[4]].selfClosing(w), n = l.lastIndex) : i += "tR+=Sqrl.H." + e[4] + "(" + w + ");"
                } else if (e[6]) i += "tR+=" + m(e[6], e[7]) + ";";
                else if (e[8]) {
                    var R = u[c];
                    R && R.name === e[8] ? (c -= 1, !0 === R.native ? i += v[R.name].helperEnd(R.params, R.id) : p[R.id] ? i += "return tR}});" : i += "return tR});") : console.error("Helper beginning & end don't match.")
                } else if (e[9]) {
                    var N = u[c];
                    if (N.native) {
                        var O = v[N.name];
                        O.blocks && O.blocks[e[9]] ? (i += O.blocks[e[9]](N.id), n = l.lastIndex) : console.warn("Native helper '%s' doesn't accept that block.", N.name)
                    } else p[N.id] ? i += "return tR}," + e[9] + ":function(hvals){var hvals" + N.id + "=hvals;var tR='';" : (i += "return tR},{" + e[9] + ":function(hvals){var hvals" + N.id + "=hvals;var tR='';", p[N.id] = !0)
                }
                return h(t.length), i += "return tR", new Function("options", "Sqrl", i.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))
            }

            function S(t, e) {
                y[t] = e
            }

            function R(t, e) {
                i[t] = e
            }

            function N(t, e) {
                v[t] = e
            }

            function O(t, e) {
                return "function" == typeof t ? t(e, {
                    H: i,
                    F: y,
                    P: r
                }) : "string" == typeof t ? k(e, t)(e, {
                    H: i,
                    F: y,
                    P: r
                }) : void 0
            }

            function A(t, e) {
                r[t] = e
            }
            var H = {};

            function k(t, e) {
                var i = t.$file,
                    r = t.$name,
                    a = t.$cache;
                if (i) {
                    var o = n(26);
                    return !1 !== a ? (H.hasOwnProperty(i) || (H[i] = E(o.readFileSync(i, "utf8"))), H[i]) : E(o.readFileSync(i, "utf8"))
                }
                return "string" == typeof e ? r && !1 !== a ? (H.hasOwnProperty(r) || (H[r] = E(e)), H[r]) : !0 === a ? (H.hasOwnProperty(e) || (H[e] = E(e)), H[e]) : E(e) : r && !1 !== a && H.hasOwnProperty(r) ? H[r] : "No template"
            }

            function L(t, e) {
                return e.$file = t, k(e)(e, {
                    H: i,
                    F: y,
                    P: r
                })
            }

            function P(t, e, n) {
                return n(null, L(t, e))
            }
        },
        61: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return F
            }));
            var i = window,
                r = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                },
                a = window,
                o = a.cancelAnimationFrame || a.mozCancelAnimationFrame || function(t) {
                    clearTimeout(t)
                };

            function u() {
                for (var t, e, n, i = arguments[0] || {}, r = 1, a = arguments.length; r < a; r++)
                    if (null !== (t = arguments[r]))
                        for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
                return i
            }

            function l(t) {
                return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
            }

            function s(t, e, n, i) {
                if (i) try {
                    t.setItem(e, n)
                } catch (r) {}
                return n
            }

            function c() {
                var t = document,
                    e = t.body;
                return e || ((e = t.createElement("body")).fake = !0), e
            }
            var f = document.documentElement;

            function d(t) {
                var e = "";
                return t.fake && (e = f.style.overflow, t.style.background = "", t.style.overflow = f.style.overflow = "hidden", f.appendChild(t)), e
            }

            function v(t, e) {
                t.fake && (t.remove(), f.style.overflow = e, f.offsetHeight)
            }

            function p(t, e, n, i) {
                "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
            }

            function h(t) {
                return ("insertRule" in t ? t.cssRules : t.rules).length
            }

            function m(t, e, n) {
                for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i)
            }
            var g = "classList" in document.createElement("_"),
                y = g ? function(t, e) {
                    return t.classList.contains(e)
                } : function(t, e) {
                    return t.className.indexOf(e) >= 0
                },
                x = g ? function(t, e) {
                    y(t, e) || t.classList.add(e)
                } : function(t, e) {
                    y(t, e) || (t.className += " " + e)
                },
                b = g ? function(t, e) {
                    y(t, e) && t.classList.remove(e)
                } : function(t, e) {
                    y(t, e) && (t.className = t.className.replace(e, ""))
                };

            function w(t, e) {
                return t.hasAttribute(e)
            }

            function C(t, e) {
                return t.getAttribute(e)
            }

            function M(t) {
                return void 0 !== t.item
            }

            function T(t, e) {
                if (t = M(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
                    for (var n = t.length; n--;)
                        for (var i in e) t[n].setAttribute(i, e[i])
            }

            function E(t, e) {
                t = M(t) || t instanceof Array ? t : [t];
                for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
                    for (var r = n; r--;) t[i].removeAttribute(e[r])
            }

            function S(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
                return e
            }

            function R(t, e) {
                "none" !== t.style.display && (t.style.display = "none")
            }

            function N(t, e) {
                "none" === t.style.display && (t.style.display = "")
            }

            function O(t) {
                return "none" !== window.getComputedStyle(t).display
            }

            function A(t) {
                if ("string" == typeof t) {
                    var e = [t],
                        n = t.charAt(0).toUpperCase() + t.substr(1);
                    ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
                        "ms" === i && "transform" !== t || e.push(i + n)
                    })), t = e
                }
                for (var i = document.createElement("fakeelement"), r = (t.length, 0); r < t.length; r++) {
                    var a = t[r];
                    if (void 0 !== i.style[a]) return a
                }
                return !1
            }

            function H(t, e) {
                var n = !1;
                return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
            }
            var k = !1;
            try {
                var L = Object.defineProperty({}, "passive", {
                    get: function() {
                        k = !0
                    }
                });
                window.addEventListener("test", null, L)
            } catch (z) {}
            var P = !!k && {
                passive: !0
            };

            function B(t, e, n) {
                for (var i in e) {
                    var r = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && P;
                    t.addEventListener(i, e[i], r)
                }
            }

            function D(t, e) {
                for (var n in e) {
                    var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && P;
                    t.removeEventListener(n, e[n], i)
                }
            }

            function I() {
                return {
                    topics: {},
                    on: function(t, e) {
                        this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
                    },
                    off: function(t, e) {
                        if (this.topics[t])
                            for (var n = 0; n < this.topics[t].length; n++)
                                if (this.topics[t][n] === e) {
                                    this.topics[t].splice(n, 1);
                                    break
                                }
                    },
                    emit: function(t, e) {
                        e.type = t, this.topics[t] && this.topics[t].forEach((function(n) {
                            n(e, t)
                        }))
                    }
                }
            }
            Object.keys || (Object.keys = function(t) {
                var e = [];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }), "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            });
            var F = function(t) {
                t = u({
                    container: ".slider",
                    mode: "carousel",
                    axis: "horizontal",
                    items: 1,
                    gutter: 0,
                    edgePadding: 0,
                    fixedWidth: !1,
                    autoWidth: !1,
                    viewportMax: !1,
                    slideBy: 1,
                    center: !1,
                    controls: !0,
                    controlsPosition: "top",
                    controlsText: ["prev", "next"],
                    controlsContainer: !1,
                    prevButton: !1,
                    nextButton: !1,
                    nav: !0,
                    navPosition: "top",
                    navContainer: !1,
                    navAsThumbnails: !1,
                    arrowKeys: !1,
                    speed: 300,
                    autoplay: !1,
                    autoplayPosition: "top",
                    autoplayTimeout: 5e3,
                    autoplayDirection: "forward",
                    autoplayText: ["start", "stop"],
                    autoplayHoverPause: !1,
                    autoplayButton: !1,
                    autoplayButtonOutput: !0,
                    autoplayResetOnVisibility: !0,
                    animateIn: "tns-fadeIn",
                    animateOut: "tns-fadeOut",
                    animateNormal: "tns-normal",
                    animateDelay: !1,
                    loop: !0,
                    rewind: !1,
                    autoHeight: !1,
                    responsive: !1,
                    lazyload: !1,
                    lazyloadSelector: ".tns-lazy-img",
                    touch: !0,
                    mouseDrag: !1,
                    swipeAngle: 15,
                    nested: !1,
                    preventActionWhenRunning: !1,
                    preventScrollOnTouch: !1,
                    freezable: !0,
                    onInit: !1,
                    useLocalStorage: !0,
                    nonce: !1
                }, t || {});
                var e = document,
                    n = window,
                    i = {
                        ENTER: 13,
                        SPACE: 32,
                        LEFT: 37,
                        RIGHT: 39
                    },
                    a = {},
                    f = t.useLocalStorage;
                if (f) {
                    var g = navigator.userAgent,
                        M = new Date;
                    try {
                        (a = n.localStorage) ? (a.setItem(M, M), f = a.getItem(M) == M, a.removeItem(M)) : f = !1, f || (a = {})
                    } catch (z) {
                        f = !1
                    }
                    f && (a.tnsApp && a.tnsApp !== g && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(t) {
                        a.removeItem(t)
                    })), localStorage.tnsApp = g)
                }
                var k = a.tC ? l(a.tC) : s(a, "tC", function() {
                        var t = document,
                            e = c(),
                            n = d(e),
                            i = t.createElement("div"),
                            r = !1;
                        e.appendChild(i);
                        try {
                            for (var a, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
                                if (a = u[l], i.style.width = a, 100 === i.offsetWidth) {
                                    r = a.replace(o, "");
                                    break
                                }
                        } catch (z) {}
                        return e.fake ? v(e, n) : i.remove(), r
                    }(), f),
                    L = a.tPL ? l(a.tPL) : s(a, "tPL", function() {
                        var t, e = document,
                            n = c(),
                            i = d(n),
                            r = e.createElement("div"),
                            a = e.createElement("div"),
                            o = "";
                        r.className = "tns-t-subp2", a.className = "tns-t-ct";
                        for (var u = 0; u < 70; u++) o += "<div></div>";
                        return a.innerHTML = o, r.appendChild(a), n.appendChild(r), t = Math.abs(r.getBoundingClientRect().left - a.children[67].getBoundingClientRect().left) < 2, n.fake ? v(n, i) : r.remove(), t
                    }(), f),
                    P = a.tMQ ? l(a.tMQ) : s(a, "tMQ", function() {
                        if (window.matchMedia || window.msMatchMedia) return !0;
                        var t, e = document,
                            n = c(),
                            i = d(n),
                            r = e.createElement("div"),
                            a = e.createElement("style"),
                            o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                        return a.type = "text/css", r.className = "tns-mq-test", n.appendChild(a), n.appendChild(r), a.styleSheet ? a.styleSheet.cssText = o : a.appendChild(e.createTextNode(o)), t = window.getComputedStyle ? window.getComputedStyle(r).position : r.currentStyle.position, n.fake ? v(n, i) : r.remove(), "absolute" === t
                    }(), f),
                    W = a.tTf ? l(a.tTf) : s(a, "tTf", A("transform"), f),
                    q = a.t3D ? l(a.t3D) : s(a, "t3D", function(t) {
                        if (!t) return !1;
                        if (!window.getComputedStyle) return !1;
                        var e, n = document,
                            i = c(),
                            r = d(i),
                            a = n.createElement("p"),
                            o = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                        return o += "transform", i.insertBefore(a, null), a.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(a).getPropertyValue(o), i.fake ? v(i, r) : a.remove(), void 0 !== e && e.length > 0 && "none" !== e
                    }(W), f),
                    j = a.tTDu ? l(a.tTDu) : s(a, "tTDu", A("transitionDuration"), f),
                    $ = a.tTDe ? l(a.tTDe) : s(a, "tTDe", A("transitionDelay"), f),
                    V = a.tADu ? l(a.tADu) : s(a, "tADu", A("animationDuration"), f),
                    G = a.tADe ? l(a.tADe) : s(a, "tADe", A("animationDelay"), f),
                    Q = a.tTE ? l(a.tTE) : s(a, "tTE", H(j, "Transition"), f),
                    X = a.tAE ? l(a.tAE) : s(a, "tAE", H(V, "Animation"), f),
                    Y = n.console && "function" == typeof n.console.warn,
                    J = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                    K = {};
                if (J.forEach((function(n) {
                        if ("string" == typeof t[n]) {
                            var i = t[n],
                                r = e.querySelector(i);
                            if (K[n] = i, !r || !r.nodeName) return void(Y && console.warn("Can't find", t[n]));
                            t[n] = r
                        }
                    })), !(t.container.children.length < 1)) {
                    var _ = t.responsive,
                        U = t.nested,
                        Z = "carousel" === t.mode;
                    if (_) {
                        0 in _ && (t = u(t, _[0]), delete _[0]);
                        var tt = {};
                        for (var et in _) {
                            var nt = _[et];
                            nt = "number" == typeof nt ? {
                                items: nt
                            } : nt, tt[et] = nt
                        }
                        _ = tt, tt = null
                    }
                    if (Z || function t(e) {
                            for (var n in e) Z || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
                        }(t), !Z) {
                        t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
                        var it = t.animateIn,
                            rt = t.animateOut,
                            at = t.animateDelay,
                            ot = t.animateNormal
                    }
                    var ut, lt, st = "horizontal" === t.axis,
                        ct = e.createElement("div"),
                        ft = e.createElement("div"),
                        dt = t.container,
                        vt = dt.parentNode,
                        pt = dt.outerHTML,
                        ht = dt.children,
                        mt = ht.length,
                        gt = Ln(),
                        yt = !1;
                    _ && Zn(), Z && (dt.className += " tns-vpfix");
                    var xt, bt, wt, Ct, Mt, Tt, Et, St, Rt, Nt = t.autoWidth,
                        Ot = In("fixedWidth"),
                        At = In("edgePadding"),
                        Ht = In("gutter"),
                        kt = Bn(),
                        Lt = In("center"),
                        Pt = Nt ? 1 : Math.floor(In("items")),
                        Bt = In("slideBy"),
                        Dt = t.viewportMax || t.fixedWidthViewportWidth,
                        It = In("arrowKeys"),
                        Ft = In("speed"),
                        zt = t.rewind,
                        Wt = !zt && t.loop,
                        qt = In("autoHeight"),
                        jt = In("controls"),
                        $t = In("controlsText"),
                        Vt = In("nav"),
                        Gt = In("touch"),
                        Qt = In("mouseDrag"),
                        Xt = In("autoplay"),
                        Yt = In("autoplayTimeout"),
                        Jt = In("autoplayText"),
                        Kt = In("autoplayHoverPause"),
                        _t = In("autoplayResetOnVisibility"),
                        Ut = (Et = null, St = In("nonce"), Rt = document.createElement("style"), Et && Rt.setAttribute("media", Et), St && Rt.setAttribute("nonce", St), document.querySelector("head").appendChild(Rt), Rt.sheet ? Rt.sheet : Rt.styleSheet),
                        Zt = t.lazyload,
                        te = t.lazyloadSelector,
                        ee = [],
                        ne = Wt ? (Mt = function() {
                            if (Nt || Ot && !Dt) return mt - 1;
                            var e = Ot ? "fixedWidth" : "items",
                                n = [];
                            if ((Ot || t[e] < mt) && n.push(t[e]), _)
                                for (var i in _) {
                                    var r = _[i][e];
                                    r && (Ot || r < mt) && n.push(r)
                                }
                            return n.length || n.push(0), Math.ceil(Ot ? Dt / Math.min.apply(null, n) : Math.max.apply(null, n))
                        }(), Tt = Z ? Math.ceil((5 * Mt - mt) / 2) : 4 * Mt - mt, Tt = Math.max(Mt, Tt), Dn("edgePadding") ? Tt + 1 : Tt) : 0,
                        ie = Z ? mt + 2 * ne : mt + ne,
                        re = !(!Ot && !Nt || Wt),
                        ae = Ot ? Ei() : null,
                        oe = !Z || !Wt,
                        ue = st ? "left" : "top",
                        le = "",
                        se = "",
                        ce = Ot ? function() {
                            return Lt && !Wt ? mt - 1 : Math.ceil(-ae / (Ot + Ht))
                        } : Nt ? function() {
                            for (var t = 0; t < ie; t++)
                                if (xt[t] >= -ae) return t
                        } : function() {
                            return Lt && Z && !Wt ? mt - 1 : Wt || Z ? Math.max(0, ie - Math.ceil(Pt)) : ie - 1
                        },
                        fe = An(In("startIndex")),
                        de = fe,
                        ve = (On(), 0),
                        pe = Nt ? null : ce(),
                        he = t.preventActionWhenRunning,
                        me = t.swipeAngle,
                        ge = !me || "?",
                        ye = !1,
                        xe = t.onInit,
                        be = new I,
                        we = " tns-slider tns-" + t.mode,
                        Ce = dt.id || (Ct = window.tnsId, window.tnsId = Ct ? Ct + 1 : 1, "tns" + window.tnsId),
                        Me = In("disable"),
                        Te = !1,
                        Ee = t.freezable,
                        Se = !(!Ee || Nt) && Un(),
                        Re = !1,
                        Ne = {
                            click: Pi,
                            keydown: function(t) {
                                t = ji(t);
                                var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                                e >= 0 && (0 === e ? Je.disabled || Pi(t, -1) : Ke.disabled || Pi(t, 1))
                            }
                        },
                        Oe = {
                            click: function(t) {
                                if (ye) {
                                    if (he) return;
                                    ki()
                                }
                                var e = $i(t = ji(t));
                                for (; e !== tn && !w(e, "data-nav");) e = e.parentNode;
                                if (w(e, "data-nav")) {
                                    var n = an = Number(C(e, "data-nav")),
                                        i = Ot || Nt ? n * mt / nn : n * Pt;
                                    Li(Ie ? n : Math.min(Math.ceil(i), mt - 1), t), on === n && (dn && zi(), an = -1)
                                }
                            },
                            keydown: function(t) {
                                t = ji(t);
                                var n = e.activeElement;
                                if (!w(n, "data-nav")) return;
                                var r = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode),
                                    a = Number(C(n, "data-nav"));
                                r >= 0 && (0 === r ? a > 0 && qi(Ze[a - 1]) : 1 === r ? a < nn - 1 && qi(Ze[a + 1]) : (an = a, Li(a, t)))
                            }
                        },
                        Ae = {
                            mouseover: function() {
                                dn && (Di(), vn = !0)
                            },
                            mouseout: function() {
                                vn && (Bi(), vn = !1)
                            }
                        },
                        He = {
                            visibilitychange: function() {
                                e.hidden ? dn && (Di(), hn = !0) : hn && (Bi(), hn = !1)
                            }
                        },
                        ke = {
                            keydown: function(t) {
                                t = ji(t);
                                var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                                e >= 0 && Pi(t, 0 === e ? -1 : 1)
                            }
                        },
                        Le = {
                            touchstart: Xi,
                            touchmove: Yi,
                            touchend: Ji,
                            touchcancel: Ji
                        },
                        Pe = {
                            mousedown: Xi,
                            mousemove: Yi,
                            mouseup: Ji,
                            mouseleave: Ji
                        },
                        Be = Dn("controls"),
                        De = Dn("nav"),
                        Ie = !!Nt || t.navAsThumbnails,
                        Fe = Dn("autoplay"),
                        ze = Dn("touch"),
                        We = Dn("mouseDrag"),
                        qe = "tns-slide-active",
                        je = "tns-complete",
                        $e = {
                            load: function(t) {
                                li($i(t))
                            },
                            error: function(t) {
                                e = $i(t), x(e, "failed"), si(e);
                                var e
                            }
                        },
                        Ve = "force" === t.preventScrollOnTouch;
                    if (Be) var Ge, Qe, Xe = t.controlsContainer,
                        Ye = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                        Je = t.prevButton,
                        Ke = t.nextButton,
                        _e = t.prevButton ? t.prevButton.outerHTML : "",
                        Ue = t.nextButton ? t.nextButton.outerHTML : "";
                    if (De) var Ze, tn = t.navContainer,
                        en = t.navContainer ? t.navContainer.outerHTML : "",
                        nn = Nt ? mt : _i(),
                        rn = 0,
                        an = -1,
                        on = kn(),
                        un = on,
                        ln = "tns-nav-active",
                        sn = "Carousel Page ",
                        cn = " (Current Slide)";
                    if (Fe) var fn, dn, vn, pn, hn, mn = "forward" === t.autoplayDirection ? 1 : -1,
                        gn = t.autoplayButton,
                        yn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                        xn = ["<span class='tns-visually-hidden'>", " animation</span>"];
                    if (ze || We) var bn, wn, Cn = {},
                        Mn = {},
                        Tn = !1,
                        En = st ? function(t, e) {
                            return t.x - e.x
                        } : function(t, e) {
                            return t.y - e.y
                        };
                    Nt || Nn(Me || Se), W && (ue = W, le = "translate", q ? (le += st ? "3d(" : "3d(0px, ", se = st ? ", 0px, 0px)" : ", 0px)") : (le += st ? "X(" : "Y(", se = ")")), Z && (dt.className = dt.className.replace("tns-vpfix", "")),
                        function() {
                            Dn("gutter");
                            ct.className = "tns-outer", ft.className = "tns-inner", ct.id = Ce + "-ow", ft.id = Ce + "-iw", "" === dt.id && (dt.id = Ce);
                            we += L || Nt ? " tns-subpixel" : " tns-no-subpixel", we += k ? " tns-calc" : " tns-no-calc", Nt && (we += " tns-autowidth");
                            we += " tns-" + t.axis, dt.className += we, Z ? ((ut = e.createElement("div")).id = Ce + "-mw", ut.className = "tns-ovh", ct.appendChild(ut), ut.appendChild(ft)) : ct.appendChild(ft);
                            if (qt) {
                                (ut || ft).className += " tns-ah"
                            }
                            if (vt.insertBefore(ct, dt), ft.appendChild(dt), m(ht, (function(t, e) {
                                    x(t, "tns-item"), t.id || (t.id = Ce + "-item" + e), !Z && ot && x(t, ot), T(t, {
                                        "aria-hidden": "true",
                                        tabindex: "-1"
                                    })
                                })), ne) {
                                for (var n = e.createDocumentFragment(), i = e.createDocumentFragment(), r = ne; r--;) {
                                    var a = r % mt,
                                        o = ht[a].cloneNode(!0);
                                    if (x(o, "tns-slide-cloned"), E(o, "id"), i.insertBefore(o, i.firstChild), Z) {
                                        var u = ht[mt - 1 - a].cloneNode(!0);
                                        x(u, "tns-slide-cloned"), E(u, "id"), n.appendChild(u)
                                    }
                                }
                                dt.insertBefore(n, dt.firstChild), dt.appendChild(i), ht = dt.children
                            }
                        }(),
                        function() {
                            if (!Z)
                                for (var e = fe, i = fe + Math.min(mt, Pt); e < i; e++) {
                                    var r = ht[e];
                                    r.style.left = 100 * (e - fe) / Pt + "%", x(r, it), b(r, ot)
                                }
                            st && (L || Nt ? (p(Ut, "#" + Ce + " > .tns-item", "font-size:" + n.getComputedStyle(ht[0]).fontSize + ";", h(Ut)), p(Ut, "#" + Ce, "font-size:0;", h(Ut))) : Z && m(ht, (function(t, e) {
                                t.style.marginLeft = function(t) {
                                    return k ? k + "(" + 100 * t + "% / " + ie + ")" : 100 * t / ie + "%"
                                }(e)
                            })));
                            if (P) {
                                if (j) {
                                    var a = ut && t.autoHeight ? $n(t.speed) : "";
                                    p(Ut, "#" + Ce + "-mw", a, h(Ut))
                                }
                                a = Fn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), p(Ut, "#" + Ce + "-iw", a, h(Ut)), Z && (a = st && !Nt ? "width:" + zn(t.fixedWidth, t.gutter, t.items) + ";" : "", j && (a += $n(Ft)), p(Ut, "#" + Ce, a, h(Ut))), a = st && !Nt ? Wn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (a += qn(t.gutter)), Z || (j && (a += $n(Ft)), V && (a += Vn(Ft))), a && p(Ut, "#" + Ce + " > .tns-item", a, h(Ut))
                            } else {
                                Z && qt && (ut.style[j] = Ft / 1e3 + "s"), ft.style.cssText = Fn(At, Ht, Ot, qt), Z && st && !Nt && (dt.style.width = zn(Ot, Ht, Pt));
                                a = st && !Nt ? Wn(Ot, Ht, Pt) : "";
                                Ht && (a += qn(Ht)), a && p(Ut, "#" + Ce + " > .tns-item", a, h(Ut))
                            }
                            if (_ && P)
                                for (var o in _) {
                                    o = parseInt(o);
                                    var u = _[o],
                                        l = (a = "", ""),
                                        s = "",
                                        c = "",
                                        f = "",
                                        d = Nt ? null : In("items", o),
                                        v = In("fixedWidth", o),
                                        g = In("speed", o),
                                        y = In("edgePadding", o),
                                        w = In("autoHeight", o),
                                        C = In("gutter", o);
                                    j && ut && In("autoHeight", o) && "speed" in u && (l = "#" + Ce + "-mw{" + $n(g) + "}"), ("edgePadding" in u || "gutter" in u) && (s = "#" + Ce + "-iw{" + Fn(y, C, v, g, w) + "}"), Z && st && !Nt && ("fixedWidth" in u || "items" in u || Ot && "gutter" in u) && (c = "width:" + zn(v, C, d) + ";"), j && "speed" in u && (c += $n(g)), c && (c = "#" + Ce + "{" + c + "}"), ("fixedWidth" in u || Ot && "gutter" in u || !Z && "items" in u) && (f += Wn(v, C, d)), "gutter" in u && (f += qn(C)), !Z && "speed" in u && (j && (f += $n(g)), V && (f += Vn(g))), f && (f = "#" + Ce + " > .tns-item{" + f + "}"), (a = l + s + c + f) && Ut.insertRule("@media (min-width: " + o / 16 + "em) {" + a + "}", Ut.cssRules.length)
                                }
                        }(), Gn();
                    var Sn = Wt ? Z ? function() {
                            var t = ve,
                                e = pe;
                            t += Bt, e -= Bt, At ? (t += 1, e -= 1) : Ot && (kt + Ht) % (Ot + Ht) && (e -= 1), ne && (fe > e ? fe -= mt : fe < t && (fe += mt))
                        } : function() {
                            if (fe > pe)
                                for (; fe >= ve + mt;) fe -= mt;
                            else if (fe < ve)
                                for (; fe <= pe - mt;) fe += mt
                        } : function() {
                            fe = Math.max(ve, Math.min(pe, fe))
                        },
                        Rn = Z ? function() {
                            var t, e, n, i, r, a, o, u, l, s, c;
                            Mi(dt, ""), j || !Ft ? (Ni(), Ft && O(dt) || ki()) : (t = dt, e = ue, n = le, i = se, r = Si(), a = Ft, o = ki, u = Math.min(a, 10), l = r.indexOf("%") >= 0 ? "%" : "px", r = r.replace(l, ""), s = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), c = (r - s) / a * u, setTimeout((function r() {
                                a -= u, s += c, t.style[e] = n + s + l + i, a > 0 ? setTimeout(r, u) : o()
                            }), u)), st || Ki()
                        } : function() {
                            ee = [];
                            var t = {};
                            t[Q] = t[X] = ki, D(ht[de], t), B(ht[fe], t), Oi(de, it, rt, !0), Oi(fe, ot, it), Q && X && Ft && O(dt) || ki()
                        };
                    return {
                        version: "2.9.4",
                        getInfo: Zi,
                        events: be,
                        goTo: Li,
                        play: function() {
                            Xt && !dn && (Fi(), pn = !1)
                        },
                        pause: function() {
                            dn && (zi(), pn = !0)
                        },
                        isOn: yt,
                        updateSliderHeight: hi,
                        refresh: Gn,
                        destroy: function() {
                            if (Ut.disabled = !0, Ut.ownerNode && Ut.ownerNode.remove(), D(n, {
                                    resize: Kn
                                }), It && D(e, ke), Xe && D(Xe, Ne), tn && D(tn, Oe), D(dt, Ae), D(dt, He), gn && D(gn, {
                                    click: Wi
                                }), Xt && clearInterval(fn), Z && Q) {
                                var i = {};
                                i[Q] = ki, D(dt, i)
                            }
                            Gt && D(dt, Le), Qt && D(dt, Pe);
                            var r = [pt, Ye, _e, Ue, en, yn];
                            for (var a in J.forEach((function(e, n) {
                                    var i = "container" === e ? ct : t[e];
                                    if ("object" == typeof i && i) {
                                        var a = !!i.previousElementSibling && i.previousElementSibling,
                                            o = i.parentNode;
                                        i.outerHTML = r[n], t[e] = a ? a.nextElementSibling : o.firstElementChild
                                    }
                                })), J = it = rt = at = ot = st = ct = ft = dt = vt = pt = ht = mt = lt = gt = Nt = Ot = At = Ht = kt = Pt = Bt = Dt = It = Ft = zt = Wt = qt = Ut = Zt = xt = ee = ne = ie = re = ae = oe = ue = le = se = ce = fe = de = ve = pe = me = ge = ye = xe = be = we = Ce = Me = Te = Ee = Se = Re = Ne = Oe = Ae = He = ke = Le = Pe = Be = De = Ie = Fe = ze = We = qe = je = $e = bt = jt = $t = Xe = Ye = Je = Ke = Ge = Qe = Vt = tn = en = Ze = nn = rn = an = on = un = ln = sn = cn = Xt = Yt = mn = Jt = Kt = gn = yn = _t = xn = fn = dn = vn = pn = hn = Cn = Mn = bn = Tn = wn = En = Gt = Qt = null, this) "rebuild" !== a && (this[a] = null);
                            yt = !1
                        },
                        rebuild: function() {
                            return F(u(t, K))
                        }
                    }
                }

                function Nn(t) {
                    t && (jt = Vt = Gt = Qt = It = Xt = Kt = _t = !1)
                }

                function On() {
                    for (var t = Z ? fe - ne : fe; t < 0;) t += mt;
                    return t % mt + 1
                }

                function An(t) {
                    return t = t ? Math.max(0, Math.min(Wt ? mt - 1 : mt - Pt, t)) : 0, Z ? t + ne : t
                }

                function Hn(t) {
                    for (null == t && (t = fe), Z && (t -= ne); t < 0;) t += mt;
                    return Math.floor(t % mt)
                }

                function kn() {
                    var t, e = Hn();
                    return t = Ie ? e : Ot || Nt ? Math.ceil((e + 1) * nn / mt - 1) : Math.floor(e / Pt), !Wt && Z && fe === pe && (t = nn - 1), t
                }

                function Ln() {
                    return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
                }

                function Pn(t) {
                    return "top" === t ? "afterbegin" : "beforeend"
                }

                function Bn() {
                    var t = At ? 2 * At - Ht : 0;
                    return function t(n) {
                        if (null != n) {
                            var i, r, a = e.createElement("div");
                            return n.appendChild(a), r = (i = a.getBoundingClientRect()).right - i.left, a.remove(), r || t(n.parentNode)
                        }
                    }(vt) - t
                }

                function Dn(e) {
                    if (t[e]) return !0;
                    if (_)
                        for (var n in _)
                            if (_[n][e]) return !0;
                    return !1
                }

                function In(e, n) {
                    if (null == n && (n = gt), "items" === e && Ot) return Math.floor((kt + Ht) / (Ot + Ht)) || 1;
                    var i = t[e];
                    if (_)
                        for (var r in _) n >= parseInt(r) && e in _[r] && (i = _[r][e]);
                    return "slideBy" === e && "page" === i && (i = In("items")), Z || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
                }

                function Fn(t, e, n, i, r) {
                    var a = "";
                    if (void 0 !== t) {
                        var o = t;
                        e && (o -= e), a = st ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
                    } else if (e && !n) {
                        var u = "-" + e + "px";
                        a = "margin: 0 " + (st ? u + " 0 0" : "0 " + u + " 0") + ";"
                    }
                    return !Z && r && j && i && (a += $n(i)), a
                }

                function zn(t, e, n) {
                    return t ? (t + e) * ie + "px" : k ? k + "(" + 100 * ie + "% / " + n + ")" : 100 * ie / n + "%"
                }

                function Wn(t, e, n) {
                    var i;
                    if (t) i = t + e + "px";
                    else {
                        Z || (n = Math.floor(n));
                        var r = Z ? ie : n;
                        i = k ? k + "(100% / " + r + ")" : 100 / r + "%"
                    }
                    return i = "width:" + i, "inner" !== U ? i + ";" : i + " !important;"
                }

                function qn(t) {
                    var e = "";
                    !1 !== t && (e = (st ? "padding-" : "margin-") + (st ? "right" : "bottom") + ": " + t + "px;");
                    return e
                }

                function jn(t, e) {
                    var n = t.substring(0, t.length - e).toLowerCase();
                    return n && (n = "-" + n + "-"), n
                }

                function $n(t) {
                    return jn(j, 18) + "transition-duration:" + t / 1e3 + "s;"
                }

                function Vn(t) {
                    return jn(V, 17) + "animation-duration:" + t / 1e3 + "s;"
                }

                function Gn() {
                    if (Dn("autoHeight") || Nt || !st) {
                        var t = dt.querySelectorAll("img");
                        m(t, (function(t) {
                            var e = t.src;
                            Zt || (e && e.indexOf("data:image") < 0 ? (t.src = "", B(t, $e), x(t, "loading"), t.src = e) : li(t))
                        })), r((function() {
                            di(S(t), (function() {
                                bt = !0
                            }))
                        })), Dn("autoHeight") && (t = ci(fe, Math.min(fe + Pt - 1, ie - 1))), Zt ? Qn() : r((function() {
                            di(S(t), Qn)
                        }))
                    } else Z && Ri(), Yn(), Jn()
                }

                function Qn() {
                    if (Nt && mt > 1) {
                        var t = Wt ? fe : mt - 1;
                        ! function e() {
                            var n = ht[t].getBoundingClientRect().left,
                                i = ht[t - 1].getBoundingClientRect().right;
                            Math.abs(n - i) <= 1 ? Xn() : setTimeout((function() {
                                e()
                            }), 16)
                        }()
                    } else Xn()
                }

                function Xn() {
                    st && !Nt || (mi(), Nt ? (ae = Ei(), Ee && (Se = Un()), pe = ce(), Nn(Me || Se)) : Ki()), Z && Ri(), Yn(), Jn()
                }

                function Yn() {
                    if (gi(), ct.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ai() + "</span>  of " + mt + "</div>"), wt = ct.querySelector(".tns-liveregion .current"), Fe) {
                        var e = Xt ? "stop" : "start";
                        gn ? T(gn, {
                            "data-action": e
                        }) : t.autoplayButtonOutput && (ct.insertAdjacentHTML(Pn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + xn[0] + e + xn[1] + Jt[0] + "</button>"), gn = ct.querySelector("[data-action]")), gn && B(gn, {
                            click: Wi
                        }), Xt && (Fi(), Kt && B(dt, Ae), _t && B(dt, He))
                    }
                    if (De) {
                        if (tn) T(tn, {
                            "aria-label": "Carousel Pagination"
                        }), m(Ze = tn.children, (function(t, e) {
                            T(t, {
                                "data-nav": e,
                                tabindex: "-1",
                                "aria-label": sn + (e + 1),
                                "aria-controls": Ce
                            })
                        }));
                        else {
                            for (var n = "", i = Ie ? "" : 'style="display:none"', r = 0; r < mt; r++) n += '<button type="button" data-nav="' + r + '" tabindex="-1" aria-controls="' + Ce + '" ' + i + ' aria-label="' + sn + (r + 1) + '"></button>';
                            n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", ct.insertAdjacentHTML(Pn(t.navPosition), n), tn = ct.querySelector(".tns-nav"), Ze = tn.children
                        }
                        if (Ui(), j) {
                            var a = j.substring(0, j.length - 18).toLowerCase(),
                                o = "transition: all " + Ft / 1e3 + "s";
                            a && (o = "-" + a + "-" + o), p(Ut, "[aria-controls^=" + Ce + "-item]", o, h(Ut))
                        }
                        T(Ze[on], {
                            "aria-label": sn + (on + 1) + cn
                        }), E(Ze[on], "tabindex"), x(Ze[on], ln), B(tn, Oe)
                    }
                    Be && (Xe || Je && Ke || (ct.insertAdjacentHTML(Pn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Ce + '">' + $t[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Ce + '">' + $t[1] + "</button></div>"), Xe = ct.querySelector(".tns-controls")), Je && Ke || (Je = Xe.children[0], Ke = Xe.children[1]), t.controlsContainer && T(Xe, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    }), (t.controlsContainer || t.prevButton && t.nextButton) && T([Je, Ke], {
                        "aria-controls": Ce,
                        tabindex: "-1"
                    }), (t.controlsContainer || t.prevButton && t.nextButton) && (T(Je, {
                        "data-controls": "prev"
                    }), T(Ke, {
                        "data-controls": "next"
                    })), Ge = xi(Je), Qe = xi(Ke), Ci(), Xe ? B(Xe, Ne) : (B(Je, Ne), B(Ke, Ne))), ti()
                }

                function Jn() {
                    if (Z && Q) {
                        var i = {};
                        i[Q] = ki, B(dt, i)
                    }
                    Gt && B(dt, Le, t.preventScrollOnTouch), Qt && B(dt, Pe), It && B(e, ke), "inner" === U ? be.on("outerResized", (function() {
                        _n(), be.emit("innerLoaded", Zi())
                    })) : (_ || Ot || Nt || qt || !st) && B(n, {
                        resize: Kn
                    }), qt && ("outer" === U ? be.on("innerLoaded", fi) : Me || fi()), ui(), Me ? ii() : Se && ni(), be.on("indexChanged", vi), "inner" === U && be.emit("innerLoaded", Zi()), "function" == typeof xe && xe(Zi()), yt = !0
                }

                function Kn(t) {
                    r((function() {
                        _n(ji(t))
                    }))
                }

                function _n(n) {
                    if (yt) {
                        "outer" === U && be.emit("outerResized", Zi(n)), gt = Ln();
                        var i, r = lt,
                            a = !1;
                        _ && (Zn(), (i = r !== lt) && be.emit("newBreakpointStart", Zi(n)));
                        var o, u, l = Pt,
                            s = Me,
                            c = Se,
                            f = It,
                            d = jt,
                            v = Vt,
                            g = Gt,
                            y = Qt,
                            w = Xt,
                            C = Kt,
                            M = _t,
                            T = fe;
                        if (i) {
                            var E = Ot,
                                S = qt,
                                O = $t,
                                A = Lt,
                                H = Jt;
                            if (!P) var k = Ht,
                                L = At
                        }
                        if (It = In("arrowKeys"), jt = In("controls"), Vt = In("nav"), Gt = In("touch"), Lt = In("center"), Qt = In("mouseDrag"), Xt = In("autoplay"), Kt = In("autoplayHoverPause"), _t = In("autoplayResetOnVisibility"), i && (Me = In("disable"), Ot = In("fixedWidth"), Ft = In("speed"), qt = In("autoHeight"), $t = In("controlsText"), Jt = In("autoplayText"), Yt = In("autoplayTimeout"), P || (At = In("edgePadding"), Ht = In("gutter"))), Nn(Me), kt = Bn(), st && !Nt || Me || (mi(), st || (Ki(), a = !0)), (Ot || Nt) && (ae = Ei(), pe = ce()), (i || Ot) && (Pt = In("items"), Bt = In("slideBy"), (u = Pt !== l) && (Ot || Nt || (pe = ce()), Sn())), i && Me !== s && (Me ? ii() : function() {
                                if (!Te) return;
                                if (Ut.disabled = !1, dt.className += we, Ri(), Wt)
                                    for (var t = ne; t--;) Z && N(ht[t]), N(ht[ie - t - 1]);
                                if (!Z)
                                    for (var e = fe, n = fe + mt; e < n; e++) {
                                        var i = ht[e],
                                            r = e < fe + Pt ? it : ot;
                                        i.style.left = 100 * (e - fe) / Pt + "%", x(i, r)
                                    }
                                ei(), Te = !1
                            }()), Ee && (i || Ot || Nt) && (Se = Un()) !== c && (Se ? (Ni(Si(An(0))), ni()) : (! function() {
                                if (!Re) return;
                                At && P && (ft.style.margin = "");
                                if (ne)
                                    for (var t = "tns-transparent", e = ne; e--;) Z && b(ht[e], t), b(ht[ie - e - 1], t);
                                ei(), Re = !1
                            }(), a = !0)), Nn(Me || Se), Xt || (Kt = _t = !1), It !== f && (It ? B(e, ke) : D(e, ke)), jt !== d && (jt ? Xe ? N(Xe) : (Je && N(Je), Ke && N(Ke)) : Xe ? R(Xe) : (Je && R(Je), Ke && R(Ke))), Vt !== v && (Vt ? (N(tn), Ui()) : R(tn)), Gt !== g && (Gt ? B(dt, Le, t.preventScrollOnTouch) : D(dt, Le)), Qt !== y && (Qt ? B(dt, Pe) : D(dt, Pe)), Xt !== w && (Xt ? (gn && N(gn), dn || pn || Fi()) : (gn && R(gn), dn && zi())), Kt !== C && (Kt ? B(dt, Ae) : D(dt, Ae)), _t !== M && (_t ? B(e, He) : D(e, He)), i) {
                            if (Ot === E && Lt === A || (a = !0), qt !== S && (qt || (ft.style.height = "")), jt && $t !== O && (Je.innerHTML = $t[0], Ke.innerHTML = $t[1]), gn && Jt !== H) {
                                var I = Xt ? 1 : 0,
                                    F = gn.innerHTML,
                                    z = F.length - H[I].length;
                                F.substring(z) === H[I] && (gn.innerHTML = F.substring(0, z) + Jt[I])
                            }
                        } else Lt && (Ot || Nt) && (a = !0);
                        if ((u || Ot && !Nt) && (nn = _i(), Ui()), (o = fe !== T) ? (be.emit("indexChanged", Zi()), a = !0) : u ? o || vi() : (Ot || Nt) && (ui(), gi(), ri()), u && !Z && function() {
                                for (var t = fe + Math.min(mt, Pt), e = ie; e--;) {
                                    var n = ht[e];
                                    e >= fe && e < t ? (x(n, "tns-moving"), n.style.left = 100 * (e - fe) / Pt + "%", x(n, it), b(n, ot)) : n.style.left && (n.style.left = "", x(n, ot), b(n, it)), b(n, rt)
                                }
                                setTimeout((function() {
                                    m(ht, (function(t) {
                                        b(t, "tns-moving")
                                    }))
                                }), 300)
                            }(), !Me && !Se) {
                            if (i && !P && (At === L && Ht === k || (ft.style.cssText = Fn(At, Ht, Ot, Ft, qt)), st)) {
                                Z && (dt.style.width = zn(Ot, Ht, Pt));
                                var W = Wn(Ot, Ht, Pt) + qn(Ht);
                                ! function(t, e) {
                                    "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
                                }(Ut, h(Ut) - 1), p(Ut, "#" + Ce + " > .tns-item", W, h(Ut))
                            }
                            qt && fi(), a && (Ri(), de = fe)
                        }
                        i && be.emit("newBreakpointEnd", Zi(n))
                    }
                }

                function Un() {
                    if (!Ot && !Nt) return mt <= (Lt ? Pt - (Pt - 1) / 2 : Pt);
                    var t = Ot ? (Ot + Ht) * mt : xt[mt],
                        e = At ? kt + 2 * At : kt + Ht;
                    return Lt && (e -= Ot ? (kt - Ot) / 2 : (kt - (xt[fe + 1] - xt[fe] - Ht)) / 2), t <= e
                }

                function Zn() {
                    for (var t in lt = 0, _) t = parseInt(t), gt >= t && (lt = t)
                }

                function ti() {
                    !Xt && gn && R(gn), !Vt && tn && R(tn), jt || (Xe ? R(Xe) : (Je && R(Je), Ke && R(Ke)))
                }

                function ei() {
                    Xt && gn && N(gn), Vt && tn && N(tn), jt && (Xe ? N(Xe) : (Je && N(Je), Ke && N(Ke)))
                }

                function ni() {
                    if (!Re) {
                        if (At && (ft.style.margin = "0px"), ne)
                            for (var t = "tns-transparent", e = ne; e--;) Z && x(ht[e], t), x(ht[ie - e - 1], t);
                        ti(), Re = !0
                    }
                }

                function ii() {
                    if (!Te) {
                        if (Ut.disabled = !0, dt.className = dt.className.replace(we.substring(1), ""), E(dt, ["style"]), Wt)
                            for (var t = ne; t--;) Z && R(ht[t]), R(ht[ie - t - 1]);
                        if (st && Z || E(ft, ["style"]), !Z)
                            for (var e = fe, n = fe + mt; e < n; e++) {
                                var i = ht[e];
                                E(i, ["style"]), b(i, it), b(i, ot)
                            }
                        ti(), Te = !0
                    }
                }

                function ri() {
                    var t = ai();
                    wt.innerHTML !== t && (wt.innerHTML = t)
                }

                function ai() {
                    var t = oi(),
                        e = t[0] + 1,
                        n = t[1] + 1;
                    return e === n ? e + "" : e + " to " + n
                }

                function oi(t) {
                    null == t && (t = Si());
                    var e, n, i, r = fe;
                    if (Lt || At ? (Nt || Ot) && (n = -(parseFloat(t) + At), i = n + kt + 2 * At) : Nt && (n = xt[fe], i = n + kt), Nt) xt.forEach((function(t, a) {
                        a < ie && ((Lt || At) && t <= n + .5 && (r = a), i - t >= .5 && (e = a))
                    }));
                    else {
                        if (Ot) {
                            var a = Ot + Ht;
                            Lt || At ? (r = Math.floor(n / a), e = Math.ceil(i / a - 1)) : e = r + Math.ceil(kt / a) - 1
                        } else if (Lt || At) {
                            var o = Pt - 1;
                            if (Lt ? (r -= o / 2, e = fe + o / 2) : e = fe + o, At) {
                                var u = At * Pt / kt;
                                r -= u, e += u
                            }
                            r = Math.floor(r), e = Math.ceil(e)
                        } else e = r + Pt - 1;
                        r = Math.max(r, 0), e = Math.min(e, ie - 1)
                    }
                    return [r, e]
                }

                function ui() {
                    if (Zt && !Me) {
                        var t = oi();
                        t.push(te), ci.apply(null, t).forEach((function(t) {
                            if (!y(t, je)) {
                                var e = {};
                                e[Q] = function(t) {
                                    t.stopPropagation()
                                }, B(t, e), B(t, $e), t.src = C(t, "data-src");
                                var n = C(t, "data-srcset");
                                n && (t.srcset = n), x(t, "loading")
                            }
                        }))
                    }
                }

                function li(t) {
                    x(t, "loaded"), si(t)
                }

                function si(t) {
                    x(t, je), b(t, "loading"), D(t, $e)
                }

                function ci(t, e, n) {
                    var i = [];
                    for (n || (n = "img"); t <= e;) m(ht[t].querySelectorAll(n), (function(t) {
                        i.push(t)
                    })), t++;
                    return i
                }

                function fi() {
                    var t = ci.apply(null, oi());
                    r((function() {
                        di(t, hi)
                    }))
                }

                function di(t, e) {
                    return bt ? e() : (t.forEach((function(e, n) {
                        !Zt && e.complete && si(e), y(e, je) && t.splice(n, 1)
                    })), t.length ? void r((function() {
                        di(t, e)
                    })) : e())
                }

                function vi() {
                    ui(), gi(), ri(), Ci(),
                        function() {
                            if (Vt && (on = an >= 0 ? an : kn(), an = -1, on !== un)) {
                                var t = Ze[un],
                                    e = Ze[on];
                                T(t, {
                                    tabindex: "-1",
                                    "aria-label": sn + (un + 1)
                                }), b(t, ln), T(e, {
                                    "aria-label": sn + (on + 1) + cn
                                }), E(e, "tabindex"), x(e, ln), un = on
                            }
                        }()
                }

                function pi(t, e) {
                    for (var n = [], i = t, r = Math.min(t + e, ie); i < r; i++) n.push(ht[i].offsetHeight);
                    return Math.max.apply(null, n)
                }

                function hi() {
                    var t = qt ? pi(fe, Pt) : pi(ne, mt),
                        e = ut || ft;
                    e.style.height !== t && (e.style.height = t + "px")
                }

                function mi() {
                    xt = [0];
                    var t = st ? "left" : "top",
                        e = st ? "right" : "bottom",
                        n = ht[0].getBoundingClientRect()[t];
                    m(ht, (function(i, r) {
                        r && xt.push(i.getBoundingClientRect()[t] - n), r === ie - 1 && xt.push(i.getBoundingClientRect()[e] - n)
                    }))
                }

                function gi() {
                    var t = oi(),
                        e = t[0],
                        n = t[1];
                    m(ht, (function(t, i) {
                        i >= e && i <= n ? w(t, "aria-hidden") && (E(t, ["aria-hidden", "tabindex"]), x(t, qe)) : w(t, "aria-hidden") || (T(t, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }), b(t, qe))
                    }))
                }

                function yi(t) {
                    return t.nodeName.toLowerCase()
                }

                function xi(t) {
                    return "button" === yi(t)
                }

                function bi(t) {
                    return "true" === t.getAttribute("aria-disabled")
                }

                function wi(t, e, n) {
                    t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
                }

                function Ci() {
                    if (jt && !zt && !Wt) {
                        var t = Ge ? Je.disabled : bi(Je),
                            e = Qe ? Ke.disabled : bi(Ke),
                            n = fe <= ve,
                            i = !zt && fe >= pe;
                        n && !t && wi(Ge, Je, !0), !n && t && wi(Ge, Je, !1), i && !e && wi(Qe, Ke, !0), !i && e && wi(Qe, Ke, !1)
                    }
                }

                function Mi(t, e) {
                    j && (t.style[j] = e)
                }

                function Ti(t) {
                    return null == t && (t = fe), Nt ? (kt - (At ? Ht : 0) - (xt[t + 1] - xt[t] - Ht)) / 2 : Ot ? (kt - Ot) / 2 : (Pt - 1) / 2
                }

                function Ei() {
                    var t = kt + (At ? Ht : 0) - (Ot ? (Ot + Ht) * ie : xt[ie]);
                    return Lt && !Wt && (t = Ot ? -(Ot + Ht) * (ie - 1) - Ti() : Ti(ie - 1) - xt[ie - 1]), t > 0 && (t = 0), t
                }

                function Si(t) {
                    var e;
                    if (null == t && (t = fe), st && !Nt)
                        if (Ot) e = -(Ot + Ht) * t, Lt && (e += Ti());
                        else {
                            var n = W ? ie : Pt;
                            Lt && (t -= Ti()), e = 100 * -t / n
                        }
                    else e = -xt[t], Lt && Nt && (e += Ti());
                    return re && (e = Math.max(e, ae)), e += !st || Nt || Ot ? "px" : "%"
                }

                function Ri(t) {
                    Mi(dt, "0s"), Ni(t)
                }

                function Ni(t) {
                    null == t && (t = Si()), dt.style[ue] = le + t + se
                }

                function Oi(t, e, n, i) {
                    var r = t + Pt;
                    Wt || (r = Math.min(r, ie));
                    for (var a = t; a < r; a++) {
                        var o = ht[a];
                        i || (o.style.left = 100 * (a - fe) / Pt + "%"), at && $ && (o.style[$] = o.style[G] = at * (a - t) / 1e3 + "s"), b(o, e), x(o, n), i && ee.push(o)
                    }
                }

                function Ai(t, e) {
                    oe && Sn(), (fe !== de || e) && (be.emit("indexChanged", Zi()), be.emit("transitionStart", Zi()), qt && fi(), dn && t && ["click", "keydown"].indexOf(t.type) >= 0 && zi(), ye = !0, Rn())
                }

                function Hi(t) {
                    return t.toLowerCase().replace(/-/g, "")
                }

                function ki(t) {
                    if (Z || ye) {
                        if (be.emit("transitionEnd", Zi(t)), !Z && ee.length > 0)
                            for (var e = 0; e < ee.length; e++) {
                                var n = ee[e];
                                n.style.left = "", G && $ && (n.style[G] = "", n.style[$] = ""), b(n, rt), x(n, ot)
                            }
                        if (!t || !Z && t.target.parentNode === dt || t.target === dt && Hi(t.propertyName) === Hi(ue)) {
                            if (!oe) {
                                var i = fe;
                                Sn(), fe !== i && (be.emit("indexChanged", Zi()), Ri())
                            }
                            "inner" === U && be.emit("innerLoaded", Zi()), ye = !1, de = fe
                        }
                    }
                }

                function Li(t, e) {
                    if (!Se)
                        if ("prev" === t) Pi(e, -1);
                        else if ("next" === t) Pi(e, 1);
                    else {
                        if (ye) {
                            if (he) return;
                            ki()
                        }
                        var n = Hn(),
                            i = 0;
                        if ("first" === t ? i = -n : "last" === t ? i = Z ? mt - Pt - n : mt - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(mt - 1, t))), i = t - n)), !Z && i && Math.abs(i) < Pt) {
                            var r = i > 0 ? 1 : -1;
                            i += fe + i - mt >= ve ? mt * r : 2 * mt * r * -1
                        }
                        fe += i, Z && Wt && (fe < ve && (fe += mt), fe > pe && (fe -= mt)), Hn(fe) !== Hn(de) && Ai(e)
                    }
                }

                function Pi(t, e) {
                    if (ye) {
                        if (he) return;
                        ki()
                    }
                    var n;
                    if (!e) {
                        for (var i = $i(t = ji(t)); i !== Xe && [Je, Ke].indexOf(i) < 0;) i = i.parentNode;
                        var r = [Je, Ke].indexOf(i);
                        r >= 0 && (n = !0, e = 0 === r ? -1 : 1)
                    }
                    if (zt) {
                        if (fe === ve && -1 === e) return void Li("last", t);
                        if (fe === pe && 1 === e) return void Li("first", t)
                    }
                    e && (fe += Bt * e, Nt && (fe = Math.floor(fe)), Ai(n || t && "keydown" === t.type ? t : null))
                }

                function Bi() {
                    fn = setInterval((function() {
                        Pi(null, mn)
                    }), Yt), dn = !0
                }

                function Di() {
                    clearInterval(fn), dn = !1
                }

                function Ii(t, e) {
                    T(gn, {
                        "data-action": t
                    }), gn.innerHTML = xn[0] + t + xn[1] + e
                }

                function Fi() {
                    Bi(), gn && Ii("stop", Jt[1])
                }

                function zi() {
                    Di(), gn && Ii("start", Jt[0])
                }

                function Wi() {
                    dn ? (zi(), pn = !0) : (Fi(), pn = !1)
                }

                function qi(t) {
                    t.focus()
                }

                function ji(t) {
                    return Vi(t = t || n.event) ? t.changedTouches[0] : t
                }

                function $i(t) {
                    return t.target || n.event.srcElement
                }

                function Vi(t) {
                    return t.type.indexOf("touch") >= 0
                }

                function Gi(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }

                function Qi() {
                    return a = Mn.y - Cn.y, o = Mn.x - Cn.x, e = Math.atan2(a, o) * (180 / Math.PI), n = me, i = !1, (r = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : r <= n && (i = "vertical"), i === t.axis;
                    var e, n, i, r, a, o
                }

                function Xi(t) {
                    if (ye) {
                        if (he) return;
                        ki()
                    }
                    Xt && dn && Di(), Tn = !0, wn && (o(wn), wn = null);
                    var e = ji(t);
                    be.emit(Vi(t) ? "touchStart" : "dragStart", Zi(t)), !Vi(t) && ["img", "a"].indexOf(yi($i(t))) >= 0 && Gi(t), Mn.x = Cn.x = e.clientX, Mn.y = Cn.y = e.clientY, Z && (bn = parseFloat(dt.style[ue].replace(le, "")), Mi(dt, "0s"))
                }

                function Yi(t) {
                    if (Tn) {
                        var e = ji(t);
                        Mn.x = e.clientX, Mn.y = e.clientY, Z ? wn || (wn = r((function() {
                            ! function t(e) {
                                if (!ge) return void(Tn = !1);
                                o(wn), Tn && (wn = r((function() {
                                    t(e)
                                })));
                                "?" === ge && (ge = Qi());
                                if (ge) {
                                    !Ve && Vi(e) && (Ve = !0);
                                    try {
                                        e.type && be.emit(Vi(e) ? "touchMove" : "dragMove", Zi(e))
                                    } catch (a) {}
                                    var n = bn,
                                        i = En(Mn, Cn);
                                    if (!st || Ot || Nt) n += i, n += "px";
                                    else n += W ? i * Pt * 100 / ((kt + Ht) * ie) : 100 * i / (kt + Ht), n += "%";
                                    dt.style[ue] = le + n + se
                                }
                            }(t)
                        }))) : ("?" === ge && (ge = Qi()), ge && (Ve = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && Ve && t.preventDefault()
                    }
                }

                function Ji(e) {
                    if (Tn) {
                        wn && (o(wn), wn = null), Z && Mi(dt, ""), Tn = !1;
                        var n = ji(e);
                        Mn.x = n.clientX, Mn.y = n.clientY;
                        var i = En(Mn, Cn);
                        if (Math.abs(i)) {
                            if (!Vi(e)) {
                                var a = $i(e);
                                B(a, {
                                    click: function t(e) {
                                        Gi(e), D(a, {
                                            click: t
                                        })
                                    }
                                })
                            }
                            Z ? wn = r((function() {
                                if (st && !Nt) {
                                    var t = -i * Pt / (kt + Ht);
                                    t = i > 0 ? Math.floor(t) : Math.ceil(t), fe += t
                                } else {
                                    var n = -(bn + i);
                                    if (n <= 0) fe = ve;
                                    else if (n >= xt[ie - 1]) fe = pe;
                                    else
                                        for (var r = 0; r < ie && n >= xt[r];) fe = r, n > xt[r] && i < 0 && (fe += 1), r++
                                }
                                Ai(e, i), be.emit(Vi(e) ? "touchEnd" : "dragEnd", Zi(e))
                            })) : ge && Pi(e, i > 0 ? -1 : 1)
                        }
                    }
                    "auto" === t.preventScrollOnTouch && (Ve = !1), me && (ge = "?"), Xt && !dn && Bi()
                }

                function Ki() {
                    (ut || ft).style.height = xt[fe + Pt] - xt[fe] + "px"
                }

                function _i() {
                    var t = Ot ? (Ot + Ht) * mt / kt : mt / Pt;
                    return Math.min(Math.ceil(t), mt)
                }

                function Ui() {
                    if (Vt && !Ie && nn !== rn) {
                        var t = rn,
                            e = nn,
                            n = N;
                        for (rn > nn && (t = nn, e = rn, n = R); t < e;) n(Ze[t]), t++;
                        rn = nn
                    }
                }

                function Zi(t) {
                    return {
                        container: dt,
                        slideItems: ht,
                        navContainer: tn,
                        navItems: Ze,
                        controlsContainer: Xe,
                        hasControls: Be,
                        prevButton: Je,
                        nextButton: Ke,
                        items: Pt,
                        slideBy: Bt,
                        cloneCount: ne,
                        slideCount: mt,
                        slideCountNew: ie,
                        index: fe,
                        indexCached: de,
                        displayIndex: On(),
                        navCurrentIndex: on,
                        navCurrentIndexCached: un,
                        pages: nn,
                        pagesCached: rn,
                        sheet: Ut,
                        isOn: yt,
                        event: t || {}
                    }
                }
                Y && console.warn("No slides found in", t.container)
            }
        }
    }
]);
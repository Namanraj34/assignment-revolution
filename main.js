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
    }, n.p = "", n(n.s = 40)
}({
    10: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            "function" == typeof e ? e() : "object" == typeof e && Object.keys(e).forEach((function(t) {
                "function" == typeof e[t] && e[t]()
            }))
        }
    },
    40: function(e, t, n) {
        window.jQuery = window.$ = n(41);
        var r = n(42);
        window.EventEmitter = new r;
        var o = n(10);
        $(document).ready((function() {
            o(n(43)), window.navigator.userAgent.includes(window.poqUserAgentTarget) ? (document.querySelector(".b-header") && (document.querySelector(".b-header").style.display = "none"), document.querySelector(".b-footer") && (document.querySelector(".b-footer").style.display = "none"), document.querySelector(".b-account_navigation") && (document.querySelector(".b-account_navigation").style.display = "none", document.querySelector(".l-account").style.display = "block"), document.querySelector(".b-content_navigation") && (document.querySelector(".l-content_page").style.display = "block", document.querySelector(".b-content_navigation").style.display = "none"), document.querySelector(".b-order_details-title") && document.querySelector(".b-order_details-title").removeChild(document.querySelector(".b-order_details-title").firstElementChild), document.querySelector(".b-order_history-title_copy") && document.querySelector(".b-order_history-title_copy").removeChild(document.querySelector(".b-order_history-title_copy").firstElementChild), document.querySelector(".js-l-checkout-header") && (document.querySelector(".js-l-checkout-header").style.display = "none"), document.querySelector(".js-l-checkout-footer") && (document.querySelector(".js-l-checkout-footer").style.display = "none"), document.querySelector(".js-b-billing-terms_conditions") && (document.querySelector(".js-b-billing-terms_conditions").style.display = "none", document.querySelector(".js-b-billing-terms_conditions_poq").style.display = "block"), document.querySelector(".js-l-confirmation-continue_shopping") && (document.querySelector(".js-l-confirmation-continue_shopping").style.display = "none", document.querySelector(".js-l-confirmation-continue_shopping_poq").style.display = "block")) : (document.querySelector(".js-b-billing-terms_conditions_poq") && (document.querySelector(".js-b-billing-terms_conditions_poq").style.display = "none"), document.querySelector(".js-l-confirmation-continue_shopping_poq") && (document.querySelector(".js-l-confirmation-continue_shopping_poq").style.display = "none"))
        }))
    },
    41: function(e, t, n) {
        var r; /*!jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
        ! function(t, n) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, (function(n, o) {
            "use strict";
            var i = [],
                s = Object.getPrototypeOf,
                a = i.slice,
                u = i.flat ? function(e) {
                    return i.flat.call(e)
                } : function(e) {
                    return i.concat.apply([], e)
                },
                l = i.push,
                c = i.indexOf,
                f = {},
                p = f.toString,
                d = f.hasOwnProperty,
                h = d.toString,
                g = h.call(Object),
                y = {},
                v = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                },
                m = function(e) {
                    return null != e && e === e.window
                },
                x = n.document,
                b = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var r, o, i = (n = n || x).createElement("script");
                if (i.text = e, t)
                    for (r in b)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i)
            }

            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
            }
            var C = "3.6.1",
                S = function(e, t) {
                    return new S.fn.init(e, t)
                };

            function E(e) {
                var t = !!e && "length" in e && e.length,
                    n = T(e);
                return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            S.fn = S.prototype = {
                jquery: C,
                constructor: S,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = S.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return S.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(S.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                        return (t + 1) % 2
                    })))
                },
                odd: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                        return t % 2
                    })))
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: i.sort,
                splice: i.splice
            }, S.extend = S.fn.extend = function() {
                var e, t, n, r, o, i, s = arguments[0] || {},
                    a = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) r = e[t], "__proto__" !== t && s !== r && (l && r && (S.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], i = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}, o = !1, s[t] = S.extend(l, i, r)) : void 0 !== r && (s[t] = r));
                return s
            }, S.extend({
                expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || h.call(n) !== g))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    w(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (E(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (E(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : c.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) !== s && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var r, o, i = 0,
                        s = [];
                    if (E(e))
                        for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
                    else
                        for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
                    return u(s)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = i[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase()
            }));
            var j = function(e) {
                var t, n, r, o, i, s, a, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    S = ue(),
                    E = ue(),
                    j = ue(),
                    k = ue(),
                    A = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    q = {}.hasOwnProperty,
                    N = [],
                    D = N.pop,
                    L = N.push,
                    _ = N.push,
                    O = N.slice,
                    H = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    M = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    I = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]",
                    W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    F = new RegExp(R + "+", "g"),
                    $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    B = new RegExp("^" + R + "*," + R + "*"),
                    z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    U = new RegExp(R + "|>"),
                    X = new RegExp(W),
                    V = new RegExp("^" + M + "$"),
                    G = {
                        ID: new RegExp("^#(" + M + ")"),
                        CLASS: new RegExp("^\\.(" + M + ")"),
                        TAG: new RegExp("^(" + M + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + P + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        p()
                    },
                    se = be((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    _.apply(N = O.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
                } catch (t) {
                    _ = {
                        apply: N.length ? function(e, t) {
                            L.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, r, o) {
                    var i, a, l, c, f, h, v, m = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!o && (p(t), t = t || d, g)) {
                        if (11 !== w && (f = Z.exec(e)))
                            if (i = f[1]) {
                                if (9 === w) {
                                    if (!(l = t.getElementById(i))) return r;
                                    if (l.id === i) return r.push(l), r
                                } else if (m && (l = m.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                            } else {
                                if (f[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(i)), r
                            }
                        if (n.qsa && !k[e + " "] && (!y || !y.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
                                for ((m = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b)), a = (h = s(e)).length; a--;) h[a] = (c ? "#" + c : ":scope") + " " + xe(h[a]);
                                v = h.join(",")
                            }
                            try {
                                return _.apply(r, m.querySelectorAll(v)), r
                            } catch (t) {
                                k(e, !0)
                            } finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, o)
                }

                function ue() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function le(e) {
                    return e[b] = !0, e
                }

                function ce(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ge(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ye(e) {
                    return le((function(t) {
                        return t = +t, le((function(n, r) {
                            for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                        }))
                    }))
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ae.support = {}, i = ae.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }, p = ae.setDocument = function(e) {
                        var t, o, s = e ? e.ownerDocument || e : w;
                        return s != d && 9 === s.nodeType && s.documentElement && (h = (d = s).documentElement, g = !i(d), w != d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ce((function(e) {
                            return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ce((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ce((function(e) {
                            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce((function(e) {
                            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, v = [], y = [], (n.qsa = K.test(d.querySelectorAll)) && (ce((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                        })), ce((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                        }))), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
                        })), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !i) return e == d ? -1 : t == d ? 1 : o ? -1 : i ? 1 : c ? H(c, e) - H(c, t) : 0;
                            if (o === i) return pe(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[r] === a[r];) r++;
                            return r ? pe(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0
                        }), d
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            k(t, !0)
                        }
                        return 0 < ae(t, d, null, [e]).length
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != d && p(e), x(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) != d && p(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && q.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                        return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return c = null, e
                    }, o = ae.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = ae.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(F, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, f, p, d, h, g = i !== s ? "nextSibling" : "previousSibling",
                                        y = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        m = !u && !a,
                                        x = !1;
                                    if (y) {
                                        if (i) {
                                            for (; g;) {
                                                for (p = t; p = p[g];)
                                                    if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? y.firstChild : y.lastChild], s && m) {
                                            for (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                if (1 === p.nodeType && ++x && p === t) {
                                                    c[e] = [T, d, x];
                                                    break
                                                }
                                        } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                            for (;
                                                (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                        return (x -= o) === r || x % r == 0 && 0 <= x / r
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return o[b] ? o(t) : 1 < o.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, i = o(e, t), s = i.length; s--;) e[r = H(e, i[s])] = !(n[r] = i[s])
                                })) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = [],
                                    n = [],
                                    r = a(e.replace($, "$1"));
                                return r[b] ? le((function(e, t, n, o) {
                                    for (var i, s = r(e, null, o, []), a = e.length; a--;)(i = s[a]) && (e[a] = !(t[a] = i))
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: le((function(e) {
                                return function(t) {
                                    return 0 < ae(e, t).length
                                }
                            })),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return -1 < (t.textContent || o(t)).indexOf(e)
                                    }
                            })),
                            lang: le((function(e) {
                                return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ye((function() {
                                return [0]
                            })),
                            last: ye((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ye((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ye((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ye((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ye((function(e, t, n) {
                                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                                return e
                            })),
                            gt: ye((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = de(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function me() {}

                function xe(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function be(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        s = n && "parentNode" === i,
                        a = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || s) return e(t, n, o);
                        return !1
                    } : function(t, n, u) {
                        var l, c, f, p = [T, a];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || s)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[i]) && l[0] === T && l[1] === a) return p[2] = l[2];
                                        if ((c[i] = p)[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function we(e) {
                    return 1 < e.length ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, r, o) {
                    for (var i, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(i = e[a]) && (n && !n(i, r, o) || (s.push(i), l && t.push(a)));
                    return s
                }

                function Ce(e, t, n, r, o, i) {
                    return r && !r[b] && (r = Ce(r)), o && !o[b] && (o = Ce(o, i)), le((function(i, s, a, u) {
                        var l, c, f, p = [],
                            d = [],
                            h = s.length,
                            g = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || !i && t ? g : Te(g, p, e, a, u),
                            v = n ? o || (i ? e : h || r) ? [] : s : y;
                        if (n && n(y, v, a, u), r)
                            for (l = Te(v, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                                    o(null, v = [], l, u)
                                }
                                for (c = v.length; c--;)(f = v[c]) && -1 < (l = o ? H(i, f) : p[c]) && (i[l] = !(s[l] = f))
                            }
                        } else v = Te(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, u) : _.apply(s, v)
                    }))
                }

                function Se(e) {
                    for (var t, n, o, i = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = be((function(e) {
                            return e === t
                        }), a, !0), f = be((function(e) {
                            return -1 < H(t, e)
                        }), a, !0), p = [function(e, n, r) {
                            var o = !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, o
                        }]; u < i; u++)
                        if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                                return Ce(1 < u && we(p), 1 < u && xe(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < o && Se(e.slice(u, o)), o < i && Se(e = e.slice(o)), o < i && xe(e))
                            }
                            p.push(n)
                        }
                    return we(p)
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, s = ae.tokenize = function(e, t) {
                    var n, o, i, s, a, u, l, c = E[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, u = [], l = r.preFilter; a;) {
                        for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(i = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace($, " ")
                            }), a = a.slice(n.length)), r.filter) !(o = G[s].exec(a)) || l[s] && !(o = l[s](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: s,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? ae.error(e) : E(e, u).slice(0)
                }, a = ae.compile = function(e, t) {
                    var n, o, i, a, u, c, f = [],
                        h = [],
                        y = j[e + " "];
                    if (!y) {
                        for (t || (t = s(e)), n = t.length; n--;)(y = Se(t[n]))[b] ? f.push(y) : h.push(y);
                        (y = j(e, (o = h, a = 0 < (i = f).length, u = 0 < o.length, c = function(e, t, n, s, c) {
                            var f, h, y, v = 0,
                                m = "0",
                                x = e && [],
                                b = [],
                                w = l,
                                C = e || u && r.find.TAG("*", c),
                                S = T += null == w ? 1 : Math.random() || .1,
                                E = C.length;
                            for (c && (l = t == d || t || c); m !== E && null != (f = C[m]); m++) {
                                if (u && f) {
                                    for (h = 0, t || f.ownerDocument == d || (p(f), n = !g); y = o[h++];)
                                        if (y(f, t || d, n)) {
                                            s.push(f);
                                            break
                                        }
                                    c && (T = S)
                                }
                                a && ((f = !y && f) && v--, e && x.push(f))
                            }
                            if (v += m, a && m !== v) {
                                for (h = 0; y = i[h++];) y(x, b, t, n);
                                if (e) {
                                    if (0 < v)
                                        for (; m--;) x[m] || b[m] || (b[m] = D.call(s));
                                    b = Te(b)
                                }
                                _.apply(s, b), c && !e && 0 < b.length && 1 < v + i.length && ae.uniqueSort(s)
                            }
                            return c && (T = S, l = w), x
                        }, a ? le(c) : c))).selector = e
                    }
                    return y
                }, u = ae.select = function(e, t, n, o) {
                    var i, u, l, c, f, p = "function" == typeof e && e,
                        d = !o && s(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (2 < (u = d[0] = d[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                            if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
                                if (u.splice(i, 1), !(e = o.length && xe(u))) return _.apply(n, o), n;
                                break
                            }
                    }
                    return (p || a(e, d))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                })), ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || fe("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || fe("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ce((function(e) {
                    return null == e.getAttribute("disabled")
                })) || fe(P, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), ae
            }(n);
            S.find = j, S.expr = j.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = j.uniqueSort, S.text = j.getText, S.isXMLDoc = j.isXML, S.contains = j.contains, S.escapeSelector = j.escape;
            var k = function(e, t, n) {
                    for (var r = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && S(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                A = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                q = S.expr.match.needsContext;

            function N(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function L(e, t, n) {
                return v(t) ? S.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n
                })) : t.nodeType ? S.grep(e, (function(e) {
                    return e === t !== n
                })) : "string" != typeof t ? S.grep(e, (function(e) {
                    return -1 < c.call(t, e) !== n
                })) : S.filter(t, e, n)
            }
            S.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, (function(e) {
                    return 1 === e.nodeType
                })))
            }, S.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(S(e).filter((function() {
                        for (t = 0; t < r; t++)
                            if (S.contains(o[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, o[t], n);
                    return 1 < r ? S.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(L(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(L(this, e || [], !0))
                },
                is: function(e) {
                    return !!L(this, "string" == typeof e && q.test(e) ? S(e) : e || [], !1).length
                }
            });
            var _, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || _, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), D.test(r[1]) && S.isPlainObject(t))
                            for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = x.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
            }).prototype = S.fn, _ = S(x);
            var H = /^(?:parents|prev(?:Until|All))/,
                P = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function R(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            S.fn.extend({
                has: function(e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++)
                            if (S.contains(this, t[e])) return !0
                    }))
                },
                closest: function(e, t) {
                    var n, r = 0,
                        o = this.length,
                        i = [],
                        s = "string" != typeof e && S(e);
                    if (!q.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(1 < i.length ? S.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? c.call(S(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), S.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return k(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return k(e, "parentNode", n)
                },
                next: function(e) {
                    return R(e, "nextSibling")
                },
                prev: function(e) {
                    return R(e, "previousSibling")
                },
                nextAll: function(e) {
                    return k(e, "nextSibling")
                },
                prevAll: function(e) {
                    return k(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return k(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return k(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return A((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return A(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
                }
            }, (function(e, t) {
                S.fn[e] = function(n, r) {
                    var o = S.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = S.filter(r, o)), 1 < this.length && (P[e] || S.uniqueSort(o), H.test(e) && o.reverse()), this.pushStack(o)
                }
            }));
            var M = /[^\x20\t\r\n\f]+/g;

            function I(e) {
                return e
            }

            function W(e) {
                throw e
            }

            function F(e, t, n, r) {
                var o;
                try {
                    e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            S.Callbacks = function(e) {
                var t, n;
                e = "string" == typeof e ? (t = e, n = {}, S.each(t.match(M) || [], (function(e, t) {
                    n[t] = !0
                })), n) : S.extend({}, e);
                var r, o, i, s, a = [],
                    u = [],
                    l = -1,
                    c = function() {
                        for (s = s || e.once, i = r = !0; u.length; l = -1)
                            for (o = u.shift(); ++l < a.length;) !1 === a[l].apply(o[0], o[1]) && e.stopOnFalse && (l = a.length, o = !1);
                        e.memory || (o = !1), r = !1, s && (a = o ? [] : "")
                    },
                    f = {
                        add: function() {
                            return a && (o && !r && (l = a.length - 1, u.push(o)), function t(n) {
                                S.each(n, (function(n, r) {
                                    v(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== T(r) && t(r)
                                }))
                            }(arguments), o && !r && c()), this
                        },
                        remove: function() {
                            return S.each(arguments, (function(e, t) {
                                for (var n; - 1 < (n = S.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                            })), this
                        },
                        has: function(e) {
                            return e ? -1 < S.inArray(e, a) : 0 < a.length
                        },
                        empty: function() {
                            return a && (a = []), this
                        },
                        disable: function() {
                            return s = u = [], a = o = "", this
                        },
                        disabled: function() {
                            return !a
                        },
                        lock: function() {
                            return s = u = [], o || r || (a = o = ""), this
                        },
                        locked: function() {
                            return !!s
                        },
                        fireWith: function(e, t) {
                            return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return f
            }, S.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        o = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return o.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return S.Deferred((function(n) {
                                    S.each(t, (function(t, r) {
                                        var o = v(e[r[4]]) && e[r[4]];
                                        i[r[1]]((function() {
                                            var e = o && o.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            },
                            then: function(e, r, o) {
                                var i = 0;

                                function s(e, t, r, o) {
                                    return function() {
                                        var a = this,
                                            u = arguments,
                                            l = function() {
                                                var n, l;
                                                if (!(e < i)) {
                                                    if ((n = r.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = n && ("object" == typeof n || "function" == typeof n) && n.then, v(l) ? o ? l.call(n, s(i, t, I, o), s(i, t, W, o)) : (i++, l.call(n, s(i, t, I, o), s(i, t, W, o), s(i, t, I, t.notifyWith))) : (r !== I && (a = void 0, u = [n]), (o || t.resolveWith)(a, u))
                                                }
                                            },
                                            c = o ? l : function() {
                                                try {
                                                    l()
                                                } catch (l) {
                                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(l, c.stackTrace), i <= e + 1 && (r !== W && (a = void 0, u = [l]), t.rejectWith(a, u))
                                                }
                                            };
                                        e ? c() : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()), n.setTimeout(c))
                                    }
                                }
                                return S.Deferred((function(n) {
                                    t[0][3].add(s(0, n, v(o) ? o : I, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : I)), t[2][3].add(s(0, n, v(r) ? r : W))
                                })).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, o) : o
                            }
                        },
                        i = {};
                    return S.each(t, (function(e, n) {
                        var s = n[2],
                            a = n[5];
                        o[n[1]] = s.add, a && s.add((function() {
                            r = a
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function() {
                            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[n[0] + "With"] = s.fireWith
                    })), o.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        o = a.call(arguments),
                        i = S.Deferred(),
                        s = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : n, --t || i.resolveWith(r, o)
                            }
                        };
                    if (t <= 1 && (F(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || v(o[n] && o[n].then))) return i.then();
                    for (; n--;) F(o[n], s(n), i.reject);
                    return i.promise()
                }
            });
            var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, S.readyException = function(e) {
                n.setTimeout((function() {
                    throw e
                }))
            };
            var B = S.Deferred();

            function z() {
                x.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), S.ready()
            }
            S.fn.ready = function(e) {
                return B.then(e).catch((function(e) {
                    S.readyException(e)
                })), this
            }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || B.resolveWith(x, [S])
                }
            }), S.ready.then = B.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(S.ready) : (x.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
            var U = function(e, t, n, r, o, i, s) {
                    var a = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === T(n))
                        for (a in o = !0, n) U(e, t, a, n[a], !0, i, s);
                    else if (void 0 !== r && (o = !0, v(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(S(e), n)
                        })), t))
                        for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                    return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
                },
                X = /^-ms-/,
                V = /-([a-z])/g;

            function G(e, t) {
                return t.toUpperCase()
            }

            function Y(e) {
                return e.replace(X, "ms-").replace(V, G)
            }
            var Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function J() {
                this.expando = S.expando + J.uid++
            }
            J.uid = 1, J.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[Y(t)] = n;
                    else
                        for (r in t) o[Y(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(M) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !S.isEmptyObject(t)
                }
            };
            var K = new J,
                Z = new J,
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;

            function ne(e, t, n) {
                var r, o;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : ee.test(o) ? JSON.parse(o) : o)
                        } catch (e) {}
                        Z.set(e, t, n)
                    } else n = void 0;
                return n
            }
            S.extend({
                hasData: function(e) {
                    return Z.hasData(e) || K.hasData(e)
                },
                data: function(e, t, n) {
                    return Z.access(e, t, n)
                },
                removeData: function(e, t) {
                    Z.remove(e, t)
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                _removeData: function(e, t) {
                    K.remove(e, t)
                }
            }), S.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0],
                        s = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Z.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(i, r, o[r]));
                            K.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each((function() {
                        Z.set(this, e)
                    })) : U(this, (function(t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) || void 0 !== (n = ne(i, e)) ? n : void 0;
                        this.each((function() {
                            Z.set(this, e, t)
                        }))
                    }), null, t, 1 < arguments.length, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        Z.remove(this, e)
                    }))
                }
            }), S.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, S.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = S.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = S._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                        S.dequeue(e, t)
                    }), i)), !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: S.Callbacks("once memory").add((function() {
                            K.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), S.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        S.dequeue(this, e)
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        o = S.Deferred(),
                        i = this,
                        s = this.length,
                        a = function() {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                    return a(), o.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                se = x.documentElement,
                ae = function(e) {
                    return S.contains(e.ownerDocument, e)
                },
                ue = {
                    composed: !0
                };
            se.getRootNode && (ae = function(e) {
                return S.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
            });
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === S.css(e, "display")
            };

            function ce(e, t, n, r) {
                var o, i, s = 20,
                    a = r ? function() {
                        return r.cur()
                    } : function() {
                        return S.css(e, t, "")
                    },
                    u = a(),
                    l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && oe.exec(S.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; s--;) S.style(e, t, c + l), (1 - i) * (1 - (i = a() / u || .5)) <= 0 && (s = 0), c /= i;
                    c *= 2, S.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
            }
            var fe = {};

            function pe(e, t) {
                for (var n, r, o, i, s, a, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = K.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && le(r) && (l[c] = (u = s = i = void 0, s = (o = r).ownerDocument, a = o.nodeName, (u = fe[a]) || (i = s.body.appendChild(s.createElement(a)), u = S.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), fe[a] = u)))) : "none" !== n && (l[c] = "none", K.set(r, "display", n)));
                for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
                return e
            }
            S.fn.extend({
                show: function() {
                    return pe(this, !0)
                },
                hide: function() {
                    return pe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        le(this) ? S(this).show() : S(this).hide()
                    }))
                }
            });
            var de, he, ge = /^(?:checkbox|radio)$/i,
                ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i;
            de = x.createDocumentFragment().appendChild(x.createElement("div")), (he = x.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), de.appendChild(he), y.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", y.option = !!de.lastChild;
            var me = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function xe(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? S.merge([e], n) : n
            }

            function be(e, t) {
                for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }
            me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, y.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;

            function Te(e, t, n, r, o) {
                for (var i, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((i = e[d]) || 0 === i)
                        if ("object" === T(i)) S.merge(p, i.nodeType ? [i] : i);
                        else if (we.test(i)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (ye.exec(i) || ["", ""])[1].toLowerCase(), u = me[a] || me._default, s.innerHTML = u[1] + S.htmlPrefilter(i) + u[2], c = u[0]; c--;) s = s.lastChild;
                    S.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(i));
                for (f.textContent = "", d = 0; i = p[d++];)
                    if (r && -1 < S.inArray(i, r)) o && o.push(i);
                    else if (l = ae(i), s = xe(f.appendChild(i), "script"), l && be(s), n)
                    for (c = 0; i = s[c++];) ve.test(i.type || "") && n.push(i);
                return f
            }
            var Ce = /^([^.]*)(?:\.(.+)|)/;

            function Se() {
                return !0
            }

            function Ee() {
                return !1
            }

            function je(e, t) {
                return e === function() {
                    try {
                        return x.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function ke(e, t, n, r, o, i) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, a, n, r, t[a], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ee;
                else if (!o) return e;
                return 1 === i && (s = o, (o = function(e) {
                    return S().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = S.guid++)), e.each((function() {
                    S.event.add(this, t, o, r, n)
                }))
            }

            function Ae(e, t, n) {
                n ? (K.set(e, t, !1), S.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, o, i = K.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (i.length)(S.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (i = a.call(arguments), K.set(this, t, i), r = n(this, t), this[t](), i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                        } else i.length && (K.set(this, t, {
                            value: S.event.trigger(S.extend(i[0], S.Event.prototype), i.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === K.get(e, t) && S.event.add(e, t, Se)
            }
            S.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, s, a, u, l, c, f, p, d, h, g, y = K.get(e);
                    if (Q(e))
                        for (n.handler && (n = (i = n).handler, o = i.selector), o && S.find.matchesSelector(se, o), n.guid || (n.guid = S.guid++), (u = y.events) || (u = y.events = Object.create(null)), (s = y.handle) || (s = y.handle = function(t) {
                                return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (a = Ce.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && S.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, s, a, u, l, c, f, p, d, h, g, y = K.hasData(e) && K.get(e);
                    if (y && (u = y.events)) {
                        for (l = (t = (t || "").match(M) || [""]).length; l--;)
                            if (d = g = (a = Ce.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                                for (f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d])
                            } else
                                for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                        S.isEmptyObject(u) && K.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, s, a = new Array(arguments.length),
                        u = S.event.fix(e),
                        l = (K.get(this, "events") || Object.create(null))[u.type] || [],
                        c = S.event.special[u.type] || {};
                    for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                        for (s = S.event.handlers.call(this, u, l), t = 0;
                            (o = s[t++]) && !u.isPropagationStopped();)
                            for (u.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((S.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, u), u.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, s, a = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (i = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < S(o, this).index(l) : S.find(o, this, null, [l]).length), s[o] && i.push(r);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return l = this, u < t.length && a.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[S.expando] ? e : new S.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && N(t, "input") && Ae(t, "click", Se), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && N(t, "input") && Ae(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return ge.test(t.type) && t.click && N(t, "input") && K.get(t, "click") || N(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, S.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, S.Event = function(e, t) {
                if (!(this instanceof S.Event)) return new S.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: Ee,
                isPropagationStopped: Ee,
                isImmediatePropagationStopped: Ee,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, S.event.addProp), S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                S.event.special[e] = {
                    setup: function() {
                        return Ae(this, e, je), !1
                    },
                    trigger: function() {
                        return Ae(this, e), !0
                    },
                    _default: function(t) {
                        return K.get(t.target, e)
                    },
                    delegateType: t
                }
            })), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                S.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === this || S.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), S.fn.extend({
                on: function(e, t, n, r) {
                    return ke(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
                        S.event.remove(this, e, n, t)
                    }))
                }
            });
            var qe = /<script|<style|<link/i,
                Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
                De = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

            function Le(e, t) {
                return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
            }

            function _e(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Oe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function He(e, t) {
                var n, r, o, i, s, a;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (a = K.get(e).events))
                        for (o in K.remove(t, "handle events"), a)
                            for (n = 0, r = a[o].length; n < r; n++) S.event.add(t, o, a[o][n]);
                    Z.hasData(e) && (i = Z.access(e), s = S.extend({}, i), Z.set(t, s))
                }
            }

            function Pe(e, t, n, r) {
                t = u(t);
                var o, i, s, a, l, c, f = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    g = v(h);
                if (g || 1 < p && "string" == typeof h && !y.checkClone && Ne.test(h)) return e.each((function(o) {
                    var i = e.eq(o);
                    g && (t[0] = h.call(this, o, i.html())), Pe(i, t, n, r)
                }));
                if (p && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                    for (a = (s = S.map(xe(o, "script"), _e)).length; f < p; f++) l = o, f !== d && (l = S.clone(l, !0, !0), a && S.merge(s, xe(l, "script"))), n.call(e[f], l, f);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, S.map(s, Oe), f = 0; f < a; f++) l = s[f], ve.test(l.type || "") && !K.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }, c) : w(l.textContent.replace(De, ""), l, c))
                }
                return e
            }

            function Re(e, t, n) {
                for (var r, o = t ? S.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || S.cleanData(xe(r)), r.parentNode && (n && ae(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            S.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var r, o, i, s, a, u, l, c = e.cloneNode(!0),
                        f = ae(e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                        for (s = xe(c), r = 0, o = (i = xe(e)).length; r < o; r++) a = i[r], "input" === (l = (u = s[r]).nodeName.toLowerCase()) && ge.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (i = i || xe(e), s = s || xe(c), r = 0, o = i.length; r < o; r++) He(i[r], s[r]);
                        else He(e, c);
                    return 0 < (s = xe(c, "script")).length && be(s, !f && xe(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, r, o = S.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Q(n)) {
                            if (t = n[K.expando]) {
                                if (t.events)
                                    for (r in t.events) o[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                                n[K.expando] = void 0
                            }
                            n[Z.expando] && (n[Z.expando] = void 0)
                        }
                }
            }), S.fn.extend({
                detach: function(e) {
                    return Re(this, e, !0)
                },
                remove: function(e) {
                    return Re(this, e)
                },
                text: function(e) {
                    return U(this, (function(e) {
                        return void 0 === e ? S.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function() {
                    return Pe(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    }))
                },
                prepend: function() {
                    return Pe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(xe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return S.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return U(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !qe.test(e) && !me[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(xe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Pe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        S.inArray(this, e) < 0 && (S.cleanData(xe(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                S.fn[e] = function(e) {
                    for (var n, r = [], o = S(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), S(o[s])[t](n), l.apply(r, n.get());
                    return this.pushStack(r)
                }
            }));
            var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                Ie = /^--/,
                We = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                Fe = function(e, t, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.call(e), t) e.style[o] = i[o];
                    return r
                },
                $e = new RegExp(ie.join("|"), "i"),
                Be = "[\\x20\\t\\r\\n\\f]",
                ze = new RegExp("^" + Be + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Be + "+$", "g");

            function Ue(e, t, n) {
                var r, o, i, s, a = Ie.test(t),
                    u = e.style;
                return (n = n || We(e)) && (s = n.getPropertyValue(t) || n[t], a && (s = s.replace(ze, "$1")), "" !== s || ae(e) || (s = S.style(e, t)), !y.pixelBoxStyles() && Me.test(s) && $e.test(t) && (r = u.width, o = u.minWidth, i = u.maxWidth, u.minWidth = u.maxWidth = u.width = s, s = n.width, u.width = r, u.minWidth = o, u.maxWidth = i)), void 0 !== s ? s + "" : s
            }

            function Xe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), se.removeChild(l), c = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, o, i, s, a, u, l = x.createElement("div"),
                    c = x.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, S.extend(y, {
                    boxSizingReliable: function() {
                        return e(), o
                    },
                    pixelBoxStyles: function() {
                        return e(), s
                    },
                    pixelPosition: function() {
                        return e(), r
                    },
                    reliableMarginLeft: function() {
                        return e(), u
                    },
                    scrollboxSize: function() {
                        return e(), i
                    },
                    reliableTrDimensions: function() {
                        var e, t, r, o;
                        return null == a && (e = x.createElement("table"), t = x.createElement("tr"), r = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", se.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a
                    }
                }))
            }();
            var Ve = ["Webkit", "Moz", "ms"],
                Ge = x.createElement("div").style,
                Ye = {};

            function Qe(e) {
                return S.cssProps[e] || Ye[e] || (e in Ge ? e : Ye[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                        if ((e = Ve[n] + t) in Ge) return e
                }(e) || e)
            }
            var Je = /^(none|table(?!-c[ea]).+)/,
                Ke = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function et(e, t, n) {
                var r = oe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function tt(e, t, n, r, o, i) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (u += S.css(e, n + ie[s], !0, o)), r ? ("content" === n && (u -= S.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (u -= S.css(e, "border" + ie[s] + "Width", !0, o))) : (u += S.css(e, "padding" + ie[s], !0, o), "padding" !== n ? u += S.css(e, "border" + ie[s] + "Width", !0, o) : a += S.css(e, "border" + ie[s] + "Width", !0, o));
                return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - a - .5)) || 0), u
            }

            function nt(e, t, n) {
                var r = We(e),
                    o = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
                    i = o,
                    s = Ue(e, t, r),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Me.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && N(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === S.css(e, "boxSizing", !1, r), (i = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + tt(e, t, n || (o ? "border" : "content"), i, r, s) + "px"
            }

            function rt(e, t, n, r, o) {
                return new rt.prototype.init(e, t, n, r, o)
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ue(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, s, a = Y(t),
                            u = Ie.test(t),
                            l = e.style;
                        if (u || (t = Qe(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t];
                        "string" == (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = ce(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (S.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, s, a = Y(t);
                    return Ie.test(t) || (t = Qe(a)), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ue(e, t, r)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                }
            }), S.each(["height", "width"], (function(e, t) {
                S.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Je.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : Fe(e, Ke, (function() {
                            return nt(e, t, r)
                        }))
                    },
                    set: function(e, n, r) {
                        var o, i = We(e),
                            s = !y.scrollboxSize() && "absolute" === i.position,
                            a = (s || r) && "border-box" === S.css(e, "boxSizing", !1, i),
                            u = r ? tt(e, t, r, a, i) : 0;
                        return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - tt(e, t, "border", !1, i) - .5)), u && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = S.css(e, t)), et(0, n, u)
                    }
                }
            })), S.cssHooks.marginLeft = Xe(y.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                S.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, "margin" !== e && (S.cssHooks[e + t].set = et)
            })), S.fn.extend({
                css: function(e, t) {
                    return U(this, (function(e, t, n) {
                        var r, o, i = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (r = We(e), o = t.length; s < o; s++) i[t[s]] = S.css(e, t[s], !1, r);
                            return i
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                    }), e, t, 1 < arguments.length)
                }
            }), ((S.Tween = rt).prototype = {
                constructor: rt,
                init: function(e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (S.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = rt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                }
            }).init.prototype = rt.prototype, (rt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = rt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, S.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, S.fx = rt.prototype.init, S.fx.step = {};
            var ot, it, st, at, ut = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;

            function ct() {
                it && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, S.fx.interval), S.fx.tick())
            }

            function ft() {
                return n.setTimeout((function() {
                    ot = void 0
                })), ot = Date.now()
            }

            function pt(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ie[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function dt(e, t, n) {
                for (var r, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), i = 0, s = o.length; i < s; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function ht(e, t, n) {
                var r, o, i = 0,
                    s = ht.prefilters.length,
                    a = S.Deferred().always((function() {
                        delete u.elem
                    })),
                    u = function() {
                        if (o) return !1;
                        for (var t = ot || ft(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, s = l.tweens.length; i < s; i++) l.tweens[i].run(r);
                        return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
                    },
                    l = a.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: ot || ft(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (function(e, t) {
                        var n, r, o, i, s;
                        for (n in e)
                            if (o = t[r = Y(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = S.cssHooks[r]) && "expand" in s)
                                for (n in i = s.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                            else t[r] = o
                    }(c, l.opts.specialEasing); i < s; i++)
                    if (r = ht.prefilters[i].call(l, e, c, l.opts)) return v(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return S.map(c, dt, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            S.Animation = S.extend(ht, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, oe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(M);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, o, i, s, a, u, l, c, f = "width" in t || "height" in t,
                        p = this,
                        d = {},
                        h = e.style,
                        g = e.nodeType && le(e),
                        y = K.get(e, "fxshow");
                    for (r in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a()
                        }), s.unqueued++, p.always((function() {
                            p.always((function() {
                                s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                            }))
                        }))), t)
                        if (o = t[r], ut.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                if ("show" !== o || !y || void 0 === y[r]) continue;
                                g = !0
                            }
                            d[r] = y && y[r] || S.style(e, r)
                        }
                    if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = K.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = S.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done((function() {
                                h.display = l
                            })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = K.access(e, "fxshow", {
                            display: l
                        }), i && (y.hidden = !g), g && pe([e], !0), p.done((function() {
                            for (r in g || pe([e]), K.remove(e, "fxshow"), d) S.style(e, r, d[r])
                        }))), u = dt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                }
            }), S.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? S.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
                }, r
            }, S.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = S.isEmptyObject(e),
                        i = S.speed(t, n, r),
                        s = function() {
                            var t = ht(this, S.extend({}, e), i);
                            (o || K.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = S.timers,
                            s = K.get(this);
                        if (o) s[o] && s[o].stop && r(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && lt.test(o) && r(s[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        !t && n || S.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = K.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = S.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, S.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), S.each(["toggle", "show", "hide"], (function(e, t) {
                var n = S.fn[t];
                S.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, o)
                }
            })), S.each({
                slideDown: pt("show"),
                slideUp: pt("hide"),
                slideToggle: pt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                S.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), S.timers = [], S.fx.tick = function() {
                var e, t = 0,
                    n = S.timers;
                for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || S.fx.stop(), ot = void 0
            }, S.fx.timer = function(e) {
                S.timers.push(e), S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function() {
                it || (it = !0, ct())
            }, S.fx.stop = function() {
                it = null
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fn.delay = function(e, t) {
                return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(o)
                    }
                }))
            }, st = x.createElement("input"), at = x.createElement("select").appendChild(x.createElement("option")), st.type = "checkbox", y.checkOn = "" !== st.value, y.optSelected = at.selected, (st = x.createElement("input")).value = "t", st.type = "radio", y.radioValue = "t" === st.value;
            var gt, yt = S.expr.attrHandle;
            S.fn.extend({
                attr: function(e, t) {
                    return U(this, S.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        S.removeAttr(this, e)
                    }))
                }
            }), S.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === i && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && "radio" === t && N(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        o = t && t.match(M);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) e.removeAttribute(n)
                }
            }), gt = {
                set: function(e, t, n) {
                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = yt[t] || S.find.attr;
                yt[t] = function(e, t, r) {
                    var o, i, s = t.toLowerCase();
                    return r || (i = yt[s], yt[s] = o, o = null != n(e, t, r) ? s : null, yt[s] = i), o
                }
            }));
            var vt = /^(?:input|select|textarea|button)$/i,
                mt = /^(?:a|area)$/i;

            function xt(e) {
                return (e.match(M) || []).join(" ")
            }

            function bt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function wt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
            }
            S.fn.extend({
                prop: function(e, t) {
                    return U(this, S.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[S.propFix[e] || e]
                    }))
                }
            }), S.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = S.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : vt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                S.propFix[this.toLowerCase()] = this
            })), S.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, s;
                    return v(e) ? this.each((function(t) {
                        S(this).addClass(e.call(this, t, bt(this)))
                    })) : (t = wt(e)).length ? this.each((function() {
                        if (r = bt(this), n = 1 === this.nodeType && " " + xt(r) + " ") {
                            for (i = 0; i < t.length; i++) o = t[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s = xt(n), r !== s && this.setAttribute("class", s)
                        }
                    })) : this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, s;
                    return v(e) ? this.each((function(t) {
                        S(this).removeClass(e.call(this, t, bt(this)))
                    })) : arguments.length ? (t = wt(e)).length ? this.each((function() {
                        if (r = bt(this), n = 1 === this.nodeType && " " + xt(r) + " ") {
                            for (i = 0; i < t.length; i++)
                                for (o = t[i]; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            s = xt(n), r !== s && this.setAttribute("class", s)
                        }
                    })) : this : this.attr("class", "")
                },
                toggleClass: function(e, t) {
                    var n, r, o, i, s = typeof e,
                        a = "string" === s || Array.isArray(e);
                    return v(e) ? this.each((function(n) {
                        S(this).toggleClass(e.call(this, n, bt(this), t), t)
                    })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = wt(e), this.each((function() {
                        if (a)
                            for (i = S(this), o = 0; o < n.length; o++) r = n[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                        else void 0 !== e && "boolean" !== s || ((r = bt(this)) && K.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : K.get(this, "__className__") || ""))
                    })))
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && -1 < (" " + xt(bt(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var Tt = /\r/g;
            S.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = v(e), this.each((function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = r ? e.call(this, n, S(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = S.map(o, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    }))) : o ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = S.find.attr(e, "value");
                            return null != t ? t : xt(S.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, o = e.options,
                                i = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                u = s ? i + 1 : o.length;
                            for (r = i < 0 ? u : s ? i : 0; r < u; r++)
                                if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                    if (t = S(n).val(), s) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = S.makeArray(t), s = o.length; s--;)((r = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(r), i)) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), S.each(["radio", "checkbox"], (function() {
                S.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
                    }
                }, y.checkOn || (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), y.focusin = "onfocusin" in n;
            var Ct = /^(?:focusinfocus|focusoutblur)$/,
                St = function(e) {
                    e.stopPropagation()
                };
            S.extend(S.event, {
                trigger: function(e, t, r, o) {
                    var i, s, a, u, l, c, f, p, h = [r || x],
                        g = d.call(e, "type") ? e.type : e,
                        y = d.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = p = a = r = r || x, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(g + S.event.triggered) && (-1 < g.indexOf(".") && (g = (y = g.split(".")).shift(), y.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[S.expando] ? e : new S.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : S.makeArray(t, [e]), f = S.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                        if (!o && !f.noBubble && !m(r)) {
                            for (u = f.delegateType || g, Ct.test(u + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                            a === (r.ownerDocument || x) && h.push(a.defaultView || a.parentWindow || n)
                        }
                        for (i = 0;
                            (s = h[i++]) && !e.isPropagationStopped();) p = s, e.type = 1 < i ? u : f.bindType || g, (c = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && Q(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = g, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Q(r) || l && v(r[g]) && !m(r) && ((a = r[l]) && (r[l] = null), S.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, St), r[g](), e.isPropagationStopped() && p.removeEventListener(g, St), S.event.triggered = void 0, a && (r[l] = a)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    S.event.trigger(r, null, t)
                }
            }), S.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        S.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return S.event.trigger(e, t, n, !0)
                }
            }), y.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    S.event.simulate(t, e.target, S.event.fix(e))
                };
                S.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this,
                            o = K.access(r, t);
                        o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this,
                            o = K.access(r, t) - 1;
                        o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                    }
                }
            }));
            var Et = n.location,
                jt = {
                    guid: Date.now()
                },
                kt = /\?/;
            S.parseXML = function(e) {
                var t, r;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                return r = t && t.getElementsByTagName("parsererror")[0], t && !r || S.error("Invalid XML: " + (r ? S.map(r.childNodes, (function(e) {
                    return e.textContent
                })).join("\n") : e)), t
            };
            var At = /\[\]$/,
                qt = /\r?\n/g,
                Nt = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;

            function Lt(e, t, n, r) {
                var o;
                if (Array.isArray(t)) S.each(t, (function(t, o) {
                    n || At.test(e) ? r(e, o) : Lt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                }));
                else if (n || "object" !== T(t)) r(e, t);
                else
                    for (o in t) Lt(e + "[" + o + "]", t[o], n, r)
            }
            S.param = function(e, t) {
                var n, r = [],
                    o = function(e, t) {
                        var n = v(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, (function() {
                    o(this.name, this.value)
                }));
                else
                    for (n in e) Lt(n, e[n], t, o);
                return r.join("&")
            }, S.fn.extend({
                serialize: function() {
                    return S.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = S.prop(this, "elements");
                        return e ? S.makeArray(e) : this
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ge.test(e))
                    })).map((function(e, t) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(qt, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(qt, "\r\n")
                        }
                    })).get()
                }
            });
            var _t = /%20/g,
                Ot = /#.*$/,
                Ht = /([?&])_=[^&]*/,
                Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Rt = /^(?:GET|HEAD)$/,
                Mt = /^\/\//,
                It = {},
                Wt = {},
                Ft = "*/".concat("*"),
                $t = x.createElement("a");

            function Bt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(M) || [];
                    if (v(n))
                        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function zt(e, t, n, r) {
                var o = {},
                    i = e === Wt;

                function s(a) {
                    var u;
                    return o[a] = !0, S.each(e[a] || [], (function(e, a) {
                        var l = a(t, n, r);
                        return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
                    })), u
                }
                return s(t.dataTypes[0]) || !o["*"] && s("*")
            }

            function Ut(e, t) {
                var n, r, o = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && S.extend(!0, e, r), e
            }
            $t.href = Et.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Et.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ft,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(It),
                ajaxTransport: Bt(Wt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, o, i, s, a, u, l, c, f, p, d = S.ajaxSetup({}, t),
                        h = d.context || d,
                        g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                        y = S.Deferred(),
                        v = S.Callbacks("once memory"),
                        m = d.statusCode || {},
                        b = {},
                        w = {},
                        T = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s)
                                        for (s = {}; t = Pt.exec(i);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return l ? i : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (d.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) C.always(e[C.status]);
                                    else
                                        for (t in e) m[t] = [m[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return r && r.abort(t), E(0, t), this
                            }
                        };
                    if (y.promise(C), d.url = ((e || d.url || Et.href) + "").replace(Mt, Et.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                        u = x.createElement("a");
                        try {
                            u.href = d.url, u.href = u.href, d.crossDomain = $t.protocol + "//" + $t.host != u.protocol + "//" + u.host
                        } catch (e) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = S.param(d.data, d.traditional)), zt(It, d, t, C), l) return C;
                    for (f in (c = S.event && d.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), o = d.url.replace(Ot, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(_t, "+")) : (p = d.url.slice(o.length), d.data && (d.processData || "string" == typeof d.data) && (o += (kt.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (o = o.replace(Ht, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + jt.guid++ + p), d.url = o + p), d.ifModified && (S.lastModified[o] && C.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(f, d.headers[f]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort();
                    if (T = "abort", v.add(d.complete), C.done(d.success), C.fail(d.error), r = zt(Wt, d, t, C)) {
                        if (C.readyState = 1, c && g.trigger("ajaxSend", [C, d]), l) return C;
                        d.async && 0 < d.timeout && (a = n.setTimeout((function() {
                            C.abort("timeout")
                        }), d.timeout));
                        try {
                            l = !1, r.send(b, E)
                        } catch (e) {
                            if (l) throw e;
                            E(-1, e)
                        }
                    } else E(-1, "No Transport");

                    function E(e, t, s, u) {
                        var f, p, x, b, w, T = t;
                        l || (l = !0, a && n.clearTimeout(a), r = void 0, i = u || "", C.readyState = 0 < e ? 4 : 0, f = 200 <= e && e < 300 || 304 === e, s && (b = function(e, t, n) {
                            for (var r, o, i, s, a = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (o in a)
                                    if (a[o] && a[o].test(r)) {
                                        u.unshift(o);
                                        break
                                    }
                            if (u[0] in n) i = u[0];
                            else {
                                for (o in n) {
                                    if (!u[0] || e.converters[o + " " + u[0]]) {
                                        i = o;
                                        break
                                    }
                                    s || (s = o)
                                }
                                i = i || s
                            }
                            if (i) return i !== u[0] && u.unshift(i), n[i]
                        }(d, C, s)), !f && -1 < S.inArray("script", d.dataTypes) && S.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
                            var o, i, s, a, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                            for (i = c.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                                    if ("*" === i) i = u;
                                    else if ("*" !== u && u !== i) {
                                if (!(s = l[u + " " + i] || l["* " + i]))
                                    for (o in l)
                                        if ((a = o.split(" "))[1] === i && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                            !0 === s ? s = l[o] : !0 !== l[o] && (i = a[0], c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + u + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(d, b, C, f), f ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (S.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (S.etag[o] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, f = !(x = b.error))) : (x = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", f ? y.resolveWith(h, [p, T, C]) : y.rejectWith(h, [C, T, x]), C.statusCode(m), m = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, d, f ? p : x]), v.fireWith(h, [C, T]), c && (g.trigger("ajaxComplete", [C, d]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(e, t, n) {
                    return S.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return S.get(e, void 0, t, "script")
                }
            }), S.each(["get", "post"], (function(e, t) {
                S[t] = function(e, n, r, o) {
                    return v(n) && (o = o || r, r = n, n = void 0), S.ajax(S.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, S.isPlainObject(e) && e))
                }
            })), S.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), S._evalUrl = function(e, t, n) {
                return S.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        S.globalEval(e, t, n)
                    }
                })
            }, S.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function(e) {
                    return v(e) ? this.each((function(t) {
                        S(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = S(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each((function(n) {
                        S(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        S(this).replaceWith(this.childNodes)
                    })), this
                }
            }), S.expr.pseudos.hidden = function(e) {
                return !S.expr.pseudos.visible(e)
            }, S.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, S.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (o) {}
            };
            var Xt = {
                    0: 200,
                    1223: 204
                },
                Vt = S.ajaxSettings.xhr();
            y.cors = !!Vt && "withCredentials" in Vt, y.ajax = Vt = !!Vt, S.ajaxTransport((function(e) {
                var t, r;
                if (y.cors || Vt && !e.crossDomain) return {
                    send: function(o, i) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (s in e.xhrFields) a[s] = e.xhrFields[s];
                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                        t = function(e) {
                            return function() {
                                t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout((function() {
                                t && r()
                            }))
                        }, t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (o) {
                            if (t) throw o
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            })), S.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            })), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return S.globalEval(e), e
                    }
                }
            }), S.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), S.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, o) {
                        t = S("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), x.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }));
            var Gt, Yt = [],
                Qt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Yt.pop() || S.expando + "_" + jt.guid++;
                    return this[e] = !0, e
                }
            }), S.ajaxPrefilter("json jsonp", (function(e, t, r) {
                var o, i, s, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                    return s || S.error(o + " was not called"), s[0]
                }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                    s = arguments
                }, r.always((function() {
                    void 0 === i ? S(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Yt.push(o)), s && v(i) && i(s[0]), s = i = void 0
                })), "script"
            })), y.createHTMLDocument = ((Gt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), S.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(r)) : t = x), i = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, i), i && i.length && S(i).remove(), S.merge([], o.childNodes)));
                var r, o, i
            }, S.fn.load = function(e, t, n) {
                var r, o, i, s = this,
                    a = e.indexOf(" ");
                return -1 < a && (r = xt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    i = arguments, s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
                })).always(n && function(e, t) {
                    s.each((function() {
                        n.apply(this, i || [e.responseText, t, e])
                    }))
                }), this
            }, S.expr.pseudos.animated = function(e) {
                return S.grep(S.timers, (function(t) {
                    return e === t.elem
                })).length
            }, S.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, s, a, u, l = S.css(e, "position"),
                        c = S(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), a = c.offset(), i = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (s = (r = c.position()).top, o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(u) || 0), v(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, S.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        S.offset.setOffset(this, e, t)
                    }));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - S.css(r, "marginTop", !0),
                            left: t.left - o.left - S.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                        return e || se
                    }))
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function(r) {
                    return U(this, (function(e, r, o) {
                        var i;
                        if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                    }), e, r, arguments.length)
                }
            })), S.each(["top", "left"], (function(e, t) {
                S.cssHooks[t] = Xe(y.pixelPosition, (function(e, n) {
                    if (n) return n = Ue(e, t), Me.test(n) ? S(e).position()[t] + "px" : n
                }))
            })), S.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                S.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    S.fn[r] = function(o, i) {
                        var s = arguments.length && (n || "boolean" != typeof o),
                            a = n || (!0 === o || !0 === i ? "margin" : "border");
                        return U(this, (function(t, n, o) {
                            var i;
                            return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? S.css(t, n, a) : S.style(t, n, o, a)
                        }), t, s ? o : void 0, s)
                    }
                }))
            })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                S.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), S.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                S.fn[t] = function(e, n) {
                    return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Jt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            S.proxy = function(e, t) {
                var n, r, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (o = function() {
                    return e.apply(t || this, r.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || S.guid++, o
            }, S.holdReady = function(e) {
                e ? S.readyWait++ : S.ready(!0)
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = N, S.isFunction = v, S.isWindow = m, S.camelCase = Y, S.type = T, S.now = Date.now, S.isNumeric = function(e) {
                var t = S.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, S.trim = function(e) {
                return null == e ? "" : (e + "").replace(Jt, "$1")
            }, void 0 === (r = function() {
                return S
            }.apply(t, [])) || (e.exports = r);
            var Kt = n.jQuery,
                Zt = n.$;
            return S.noConflict = function(e) {
                return n.$ === S && (n.$ = Zt), e && n.jQuery === S && (n.jQuery = Kt), S
            }, void 0 === o && (n.jQuery = n.$ = S), S
        }))
    },
    42: function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            o = "~";

        function i() {}

        function s(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1
        }

        function a(e, t, n, r, i) {
            if ("function" != typeof n) throw new TypeError("The listener must be a function");
            var a = new s(n, r || e, i),
                u = o ? o + t : t;
            return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e
        }

        function u(e, t) {
            0 == --e._eventsCount ? e._events = new i : delete e._events[t]
        }

        function l() {
            this._events = new i, this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (o = !1)), l.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) r.call(e, t) && n.push(o ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, l.prototype.listeners = function(e) {
            var t = o ? o + e : e,
                n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var r = 0, i = n.length, s = new Array(i); r < i; r++) s[r] = n[r].fn;
            return s
        }, l.prototype.listenerCount = function(e) {
            var t = o ? o + e : e,
                n = this._events[t];
            return n ? n.fn ? 1 : n.length : 0
        }, l.prototype.emit = function(e, t, n, r, i, s) {
            var a = o ? o + e : e;
            if (!this._events[a]) return !1;
            var u, l, c = this._events[a],
                f = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(e, c.fn, void 0, !0), f) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, t), !0;
                    case 3:
                        return c.fn.call(c.context, t, n), !0;
                    case 4:
                        return c.fn.call(c.context, t, n, r), !0;
                    case 5:
                        return c.fn.call(c.context, t, n, r, i), !0;
                    case 6:
                        return c.fn.call(c.context, t, n, r, i, s), !0
                }
                for (l = 1, u = new Array(f - 1); l < f; l++) u[l - 1] = arguments[l];
                c.fn.apply(c.context, u)
            } else {
                var p, d = c.length;
                for (l = 0; l < d; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), f) {
                    case 1:
                        c[l].fn.call(c[l].context);
                        break;
                    case 2:
                        c[l].fn.call(c[l].context, t);
                        break;
                    case 3:
                        c[l].fn.call(c[l].context, t, n);
                        break;
                    case 4:
                        c[l].fn.call(c[l].context, t, n, r);
                        break;
                    default:
                        if (!u)
                            for (p = 1, u = new Array(f - 1); p < f; p++) u[p - 1] = arguments[p];
                        c[l].fn.apply(c[l].context, u)
                }
            }
            return !0
        }, l.prototype.on = function(e, t, n) {
            return a(this, e, t, n, !1)
        }, l.prototype.once = function(e, t, n) {
            return a(this, e, t, n, !0)
        }, l.prototype.removeListener = function(e, t, n, r) {
            var i = o ? o + e : e;
            if (!this._events[i]) return this;
            if (!t) return u(this, i), this;
            var s = this._events[i];
            if (s.fn) s.fn !== t || r && !s.once || n && s.context !== n || u(this, i);
            else {
                for (var a = 0, l = [], c = s.length; a < c; a++)(s[a].fn !== t || r && !s[a].once || n && s[a].context !== n) && l.push(s[a]);
                l.length ? this._events[i] = 1 === l.length ? l[0] : l : u(this, i)
            }
            return this
        }, l.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = o ? o + e : e, this._events[t] && u(this, t)) : (this._events = new i, this._eventsCount = 0), this
        }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = o, l.EventEmitter = l, e.exports = l
    },
    43: function(e, t) {
        e.exports = {
            init: function() {
                "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js")
            }
        }
    }
});
(window.webpackJsonp = window.webpackJsonp || []).push([
    [60], {
        12: function(t, n, i) {
            "use strict";

            function e(t, n) {
                if (!t) return !1;
                s(n && t.offsetParent ? t.offsetParent.offsetTop + t.offsetTop : t.offsetTop, 0)
            }

            function o() {
                s(0, 0)
            }

            function s(t, n) {
                window.scrollTo({
                    top: t,
                    left: n,
                    behavior: "smooth"
                })
            }
            i.r(n), i.d(n, "scrollTo", (function() {
                return e
            })), i.d(n, "scrollToTop", (function() {
                return o
            }))
        },
        55: function(t, n, i) {
            "use strict";

            function e(t) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return i ? function() {
                    for (var e = arguments.length, o = new Array(e), s = 0; s < e; s++) o[s] = arguments[s];
                    !1 !== n && (n = !1, window.setTimeout(() => {
                        n = !0, t.apply(this, o)
                    }, i))
                } : function() {
                    for (var i = arguments.length, e = new Array(i), o = 0; o < i; o++) e[o] = arguments[o];
                    n && window.cancelAnimationFrame(n), n = window.requestAnimationFrame(() => {
                        t.apply(this, e)
                    })
                }
            }
            i.d(n, "a", (function() {
                return e
            }))
        },
        96: function(t, n, i) {
            "use strict";
            i.r(n), i.d(n, "default", (function() {
                return r
            }));
            var e = i(15),
                o = i(0),
                s = i(55),
                c = i(12);
            class r extends e.a {
                initCache() {
                    this.classes = {}, this.classes.activeItem = "m-active"
                }
                initState() {
                    this.showHideBtn()
                }
                bindEvents() {
                    Object(o.on)("scroll.".concat(this.id), window, Object(s.a)(this.showHideBtn.bind(this))), Object(o.on)("click.".concat(this.id), this.element, c.scrollToTop)
                }
                showHideBtn() {
                    var t = window.pageYOffset - window.innerHeight;
                    this.element.classList.toggle(this.classes.activeItem, t > 0)
                }
                destroy() {
                    Object(o.off)("scroll.".concat(this.id), window), Object(o.off)("click.".concat(this.id), this.element)
                }
            }
        }
    }
]);
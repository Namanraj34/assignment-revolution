(window.webpackJsonp = window.webpackJsonp || []).push([
    [128], {
        120: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, "default", (function() {
                return c
            }));
            var o = e(15),
                i = e(0);
            class c extends o.a {
                bindEvents() {
                    Object(i.on)("click.".concat(this.id), this.element, this.handleYotpoClick.bind(this))
                }
                handleYotpoClick(t) {
                    t.preventDefault();
                    var n = new URL(this.options.url, document.location.origin);
                    n.searchParams.append("scrollToTabArea", "5"), document.location.href = n.toString()
                }
                destroy() {
                    Object(i.off)("click.".concat(this.id), this.element)
                }
            }
        }
    }
]);
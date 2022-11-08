(window.webpackJsonp = window.webpackJsonp || []).push([
    [110], {
        106: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, "default", (function() {
                return c
            }));
            var o = s(15),
                i = s(0);
            class c extends o.a {
                initState() {
                    this.setCookiesErrorVisibility()
                }
                initCache() {
                    this.selectors.closeButton = this.element.querySelector("[data-js-close]")
                }
                bindEvents() {
                    Object(i.on)("click.".concat(this.id), this.selectors.closeButton, this.closeMessage.bind(this))
                }
                setCookiesErrorVisibility() {
                    this.element.classList.toggle("h-hidden", this.areCookiesEnabled())
                }
                areCookiesEnabled() {
                    var e = navigator.cookieEnabled;
                    return void 0 !== e || e || (document.cookie = "testcookie", e = -1 !== document.cookie.indexOf("testcookie")), e
                }
                closeMessage() {
                    this.element.remove()
                }
                destroy() {
                    Object(i.off)("click.".concat(this.id), this.selectors.closeButton)
                }
            }
        }
    }
]);
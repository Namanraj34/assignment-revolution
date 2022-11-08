(window.webpackJsonp = window.webpackJsonp || []).push([
    [56], {
        192: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return l
            }));
            var o = n(15),
                c = n(0),
                a = n(27),
                i = n(22),
                s = n(16),
                r = n(7);
            var d = window.EventEmitter;
            class l extends o.a {
                initState() {
                    this.initConsentTrackingModal()
                }
                bindEvents() {
                    d.on("Localization:inited", this.initConsentTrackingModal, this)
                }
                initConsentTrackingModal() {
                    if (a.cookie.getItem("esw.Landing.Played")) {
                        var {
                            isConsentAssetOnline: t,
                            isConsented: e
                        } = this.options;
                        if (t && "boolean" != typeof e) {
                            var {
                                headingText: n,
                                body: o,
                                acceptURL: c,
                                acceptText: s,
                                rejectURL: d,
                                rejectText: l
                            } = this.options;
                            r.spinner.start(), i.a.open({
                                contentTemplate: "consentTracking",
                                cssClass: ["consent-tracking-modal"],
                                closeMethods: ["button"],
                                data: {
                                    headingText: n,
                                    body: o,
                                    acceptURL: c,
                                    acceptText: s,
                                    rejectURL: d,
                                    rejectText: l
                                },
                                onOpen: () => {
                                    this.initConsentTrackingEvents()
                                },
                                onClose: () => {
                                    this.destroyConsentTrackingEvents()
                                }
                            }), r.spinner.stop()
                        }
                    }
                }
                initConsentTrackingEvents() {
                    this.selectors.consentTrackingButtons = i.a.modal.modalBoxContent.querySelectorAll("button"), Object(c.on)("click.".concat(this.id), this.selectors.consentTrackingButtons, this.sendConsentTrackingInfo.bind(this)), Object(c.on)("click.".concat(this.id), i.a.modal.modalCloseBtn, this.sendConsentTrackingInfo.bind(this))
                }
                sendConsentTrackingInfo(t) {
                    var {
                        target: e
                    } = t, n = e.getAttribute("data-js-url") || this.options.acceptURL;
                    Object(s.a)(n).then(t => {
                        var {
                            queryString: e
                        } = t;
                        "true" === function(t) {
                            var e = "?" === t.charAt(0) ? t : "?".concat(t),
                                n = new URL(e, document.location.origin),
                                o = Object.create(null);
                            return n.searchParams.forEach((t, e) => {
                                o[e] = t
                            }), o
                        }(e).consent && d.emit("ConsentTracking:applied"), i.a.close()
                    }).catch(() => {
                        i.a.close()
                    })
                }
                destroyConsentTrackingEvents() {
                    Object(c.off)("click.".concat(this.id), this.selectors.consentTrackingButtons), Object(c.off)("click.".concat(this.id), i.a.modal.modalCloseBtn)
                }
                destroy() {
                    d.off("Localization:inited")
                }
            }
        },
        27: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "cookie", (function() {
                return o
            }));
            var o = {
                getItem(t) {
                    if (!t) return null;
                    var e = encodeURIComponent(t).replace(/[-.+*]/g, "\\$&"),
                        n = new RegExp("(?:(?:^|.*;)\\s*".concat(e, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
                    return decodeURIComponent(document.cookie.replace(n, "$1")) || null
                },
                setItem(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date(Date.now() + 31536e6),
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/",
                        c = arguments.length > 4 ? arguments[4] : void 0,
                        a = arguments.length > 5 ? arguments[5] : void 0;
                    if (!t || /^(?:expires|max-age|path|domain|secure)$/i.test(t)) return !1;
                    var i = "";
                    if (n) switch (n.constructor) {
                        case Number:
                            i = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=".concat(n);
                            break;
                        case String:
                            i = "; expires=".concat(n);
                            break;
                        case Date:
                            i = "; expires=".concat(n.toUTCString())
                    }
                    var s = encodeURIComponent(t),
                        r = encodeURIComponent(e),
                        d = c ? "; domain=".concat(c) : "",
                        l = o ? "; path=".concat(o) : "",
                        u = a ? "; secure" : "";
                    return document.cookie = "".concat(s, "=").concat(r).concat(i).concat(d).concat(l).concat(u), !0
                },
                removeItem(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this.hasItem(t)) return !1;
                    var o = encodeURIComponent(t),
                        c = n ? "; domain=".concat(n) : "",
                        a = e ? "; path=".concat(e) : "";
                    return document.cookie = "".concat(o, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT").concat(c).concat(a), !0
                },
                hasItem(t) {
                    if (!t || /^(?:expires|max-age|path|domain|secure)$/i.test(t)) return !1;
                    var e = encodeURIComponent(t);
                    return new RegExp("(?:^|;\\s*)".concat(e.replace(/[-.+*]/g, "\\$&"), "\\s*\\=")).test(document.cookie)
                },
                keys() {
                    for (var t = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/), e = t.length, n = 0; n < e; n++) t[n] = decodeURIComponent(t[n]);
                    return t
                }
            }
        },
        7: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "spinner", (function() {
                return i
            }));
            var o = n(0),
                c = document.createElement("div"),
                a = document.querySelector("body");
            c.classList.add("b-spinner");
            var i = {
                start() {
                    ! function(t) {
                        t.appendChild(c), Object(o.on)("click", c, s)
                    }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a)
                },
                stop() {
                    Object(o.off)("click", c), c.remove()
                }
            };

            function s(t) {
                t.stopPropagation()
            }
        }
    }
]);
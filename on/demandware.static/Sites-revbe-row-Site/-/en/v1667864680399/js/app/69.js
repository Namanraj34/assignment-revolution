(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        27: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "cookie", (function() {
                return n
            }));
            var n = {
                getItem(e) {
                    if (!e) return null;
                    var t = encodeURIComponent(e).replace(/[-.+*]/g, "\\$&"),
                        o = new RegExp("(?:(?:^|.*;)\\s*".concat(t, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
                    return decodeURIComponent(document.cookie.replace(o, "$1")) || null
                },
                setItem(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date(Date.now() + 31536e6),
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/",
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e || /^(?:expires|max-age|path|domain|secure)$/i.test(e)) return !1;
                    var c = "";
                    if (o) switch (o.constructor) {
                        case Number:
                            c = o === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=".concat(o);
                            break;
                        case String:
                            c = "; expires=".concat(o);
                            break;
                        case Date:
                            c = "; expires=".concat(o.toUTCString())
                    }
                    var s = encodeURIComponent(e),
                        a = encodeURIComponent(t),
                        l = r ? "; domain=".concat(r) : "",
                        u = n ? "; path=".concat(n) : "",
                        d = i ? "; secure" : "";
                    return document.cookie = "".concat(s, "=").concat(a).concat(c).concat(l).concat(u).concat(d), !0
                },
                removeItem(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this.hasItem(e)) return !1;
                    var n = encodeURIComponent(e),
                        r = o ? "; domain=".concat(o) : "",
                        i = t ? "; path=".concat(t) : "";
                    return document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT").concat(r).concat(i), !0
                },
                hasItem(e) {
                    if (!e || /^(?:expires|max-age|path|domain|secure)$/i.test(e)) return !1;
                    var t = encodeURIComponent(e);
                    return new RegExp("(?:^|;\\s*)".concat(t.replace(/[-.+*]/g, "\\$&"), "\\s*\\=")).test(document.cookie)
                },
                keys() {
                    for (var e = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/), t = e.length, o = 0; o < t; o++) e[o] = decodeURIComponent(e[o]);
                    return e
                }
            }
        },
        99: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "default", (function() {
                return u
            }));
            var n = o(15),
                r = o(0),
                i = o(22),
                c = o(27),
                s = o(16),
                a = o(18),
                l = window.EventEmitter;
            class u extends n.a {
                initCache() {
                    this.selectors.page = document.querySelector(".page")
                }
                initState() {
                    this.state.action = this.selectors.page.getAttribute("data-action"), this.state.queryString = this.selectors.page.getAttribute("data-querystring"), this.refineUrlCurrency(), c.cookie.getItem("esw.Landing.Played") || this.onLocalizationClick()
                }
                bindEvents() {
                    Object(r.on)("click.".concat(this.id), this.element, this.onLocalizationClick.bind(this))
                }
                refineUrlCurrency() {
                    var {
                        location: {
                            href: e
                        }
                    } = window;
                    if (-1 !== e.indexOf("emrc_currency")) {
                        var t = e.split("?");
                        if (!(t.length < 1)) {
                            var o = new URL(e).searchParams,
                                n = new URL(t[0]);
                            o.forEach((e, t) => {
                                "emrc_currency" !== t && n.searchParams.append(t, e)
                            }), window.history.replaceState({}, document.title, n.toString())
                        }
                    }
                }
                onLocalizationClick() {
                    this.isDisallowedUser() || i.a.open({
                        contentUrl: this.options.url,
                        requestData: {
                            querystring: {
                                action: this.state.action
                            }
                        },
                        onOpen: () => {
                            this.initLocalizationPopup()
                        },
                        onClose: () => {
                            this.destroyLocalizationPopupEvents(), l.emit("Localization:inited")
                        }
                    })
                }
                initLocalizationPopup() {
                    this.selectors.modalBoxContent = i.a.modal.modalBoxContent, this.selectors.country = this.selectors.modalBoxContent.querySelector("[data-js-country-selector]"), this.selectors.confirmButton = this.selectors.modalBoxContent.querySelector("[data-js-submit-localization]"), this.selectors.countrySelector = this.selectors.modalBoxContent.querySelector("[data-js-country-hidden]"), this.selectors.currencySelector = this.selectors.modalBoxContent.querySelector("[data-js-currency-selector]"), this.selectors.languageSelector = this.selectors.modalBoxContent.querySelector("[data-js-language-selector]"), this.selectors.warningCartContainer = this.selectors.modalBoxContent.querySelector("[data-js-cart-not-empty]"), this.state.allCountries = a.a(this.selectors.country.getAttribute("data-js-countries")), this.state.allCurrencies = a.a(this.selectors.currencySelector.getAttribute("data-js-currencies"), []), Object(r.on)("click.".concat(this.id), this.selectors.confirmButton, this.onLocalizationFormSubmit.bind(this)), l.on("countrySelect:changed", this.onCountryChange, this), c.cookie.setItem("esw.Landing.Played", !0)
                }
                onLocalizationFormSubmit() {
                    var {
                        countrySelector: e,
                        currencySelector: t,
                        languageSelector: o
                    } = this.selectors, n = this.selectors.confirmButton.getAttribute("data-url");
                    Object(s.a)(n, {
                        querystring: {
                            country: e && e.value,
                            currency: t && t.value,
                            locale: o && o.value,
                            queryString: this.state.queryString,
                            action: this.state.action
                        }
                    }).then(e => {
                        e && (c.cookie.keys().forEach(e => {
                            /amazon/i.test(e) && c.cookie.removeItem(e)
                        }), e.updateCookie && c.cookie.removeItem("selected.payment.method"), window.location.href = e.redirectUrl)
                    }).catch(() => {
                        i.a.close()
                    })
                }
                onCountryChange() {
                    this.updateCurrencyList(this.selectors.countrySelector.value);
                    var {
                        warningCartContainer: e
                    } = this.selectors;
                    e && (this.state.allCountries.forEach(e => {
                        e.countryCode === this.selectors.countrySelector.value && (this.state.isCurrentSiteCountry = e.isCurrentSiteCountry, this.state.destinationSite = e.destinationSite)
                    }), e.querySelector("[data-js-destination-site]").innerHTML = this.state.destinationSite, e.classList.toggle("h-hidden", this.state.isCurrentSiteCountry))
                }
                updateCurrencyList(e) {
                    var {
                        currencySelector: t
                    } = this.selectors, o = this.getSiteCurrencies(e);
                    t.options.length = 0, o.forEach(e => {
                        t[t.options.length] = new Option(e.displayValue, e.value, e.selected, e.selected)
                    })
                }
                getSiteCurrencies(e) {
                    var t = this.state.allCountries.find(t => t.countryCode === e),
                        o = t && t.siteID;
                    if (o) return this.state.allCurrencies[o]
                }
                isDisallowedUser() {
                    return new RegExp(/bot|crawl|slurp|spider|mediapartners|baidu|bing|dataprovider|google|yahoo|teoma|contaxe|yandex|libwww-perl|facebookexternalhit/i).test(navigator.userAgent)
                }
                destroyLocalizationPopupEvents() {
                    Object(r.off)("click.".concat(this.id), this.selectors.confirmButton), Object(r.off)("change.".concat(this.id), this.selectors.countrySelector)
                }
                destroy() {
                    Object(r.off)("click.".concat(this.id), this.element)
                }
            }
        }
    }
]);
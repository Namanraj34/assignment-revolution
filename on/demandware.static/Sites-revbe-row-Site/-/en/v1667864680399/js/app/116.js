(window.webpackJsonp = window.webpackJsonp || []).push([
    [116], {
        196: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "default", (function() {
                return c
            }));
            var o = a(15),
                n = a(0);

            function r(t, e) {
                if (!t || !Object.keys(e).length) return !1;
                var a;
                switch (t) {
                    case "productImpressions":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                currencyCode: a,
                                products: o
                            } = t;
                            if (!(e && a && o && o.length)) return !1;
                            return {
                                ecommerce: {
                                    localeLanguage: e,
                                    currencyCode: a,
                                    impressions: o
                                }
                            }
                        }(e);
                        break;
                    case "productClick":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a,
                                products: o,
                                url: n
                            } = t;
                            if (!(e && a && o && o.length && n)) return !1;
                            return {
                                event: "productClick",
                                ecommerce: {
                                    click: {
                                        localeLanguage: e,
                                        actionField: a,
                                        products: o
                                    }
                                },
                                eventCallback: () => {
                                    document.location = n
                                }
                            }
                        }(e);
                        break;
                    case "productDetails":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a,
                                products: o
                            } = t;
                            if (!(e && a && o && o.length)) return !1;
                            return {
                                ecommerce: {
                                    detail: {
                                        localeLanguage: e,
                                        actionField: a,
                                        products: o
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "addToCart":
                    case "cartUpdated":
                        a = function(t, e) {
                            var {
                                localeLanguage: a,
                                currencyCode: o,
                                products: n
                            } = e;
                            if (!a || !o || !n) return !1;
                            return {
                                event: t,
                                ecommerce: {
                                    localeLanguage: a,
                                    currencyCode: o,
                                    add: {
                                        products: n.length ? n : []
                                    }
                                }
                            }
                        }(t, e);
                        break;
                    case "removeFromCart":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                products: a
                            } = t;
                            if (!e || !a || !a.length) return !1;
                            return {
                                event: "removeFromCart",
                                ecommerce: {
                                    remove: {
                                        localeLanguage: e,
                                        products: a
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "promotionsView":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                promotions: a
                            } = t;
                            if (!e || !a || !a.length) return !1;
                            return {
                                ecommerce: {
                                    promoView: {
                                        localeLanguage: e,
                                        promotions: a
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "promotionClick":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                promotions: a,
                                url: o
                            } = t;
                            if (!(e && a && a.length && o)) return !1;
                            return {
                                event: "promotionClick",
                                ecommerce: {
                                    promoClick: {
                                        localeLanguage: e,
                                        promotions: a
                                    }
                                },
                                eventCallback: () => {
                                    document.location = o
                                }
                            }
                        }(e);
                        break;
                    case "checkoutView":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a,
                                products: o,
                                url: n
                            } = t;
                            if (!(e && a && o && o.length && n)) return !1;
                            return {
                                event: "checkout",
                                ecommerce: {
                                    checkout: {
                                        localeLanguage: e,
                                        actionField: a,
                                        products: o
                                    },
                                    eventCallback: () => {
                                        document.location = n
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "checkoutOptionClick":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a
                            } = t;
                            if (!e || !a) return !1;
                            return {
                                event: "checkoutOption",
                                ecommerce: {
                                    checkout_option: {
                                        localeLanguage: e,
                                        actionField: a
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "purchaseView":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a,
                                products: o,
                                currencyCode: n
                            } = t;
                            if (!(e && n && a && o && o.length)) {
                                var r = $(".b-confirmation_summary-title");
                                if (r.data("log")) try {
                                    $.ajax({
                                        url: r.data("log"),
                                        data: {
                                            emptyData: !0,
                                            localeLanguage: e || "",
                                            currencyCode: n || "",
                                            actionField: a ? JSON.stringify(a) : "",
                                            products: o && o.length ? JSON.stringify(o) : "",
                                            orderNumber: r.data("ordernumber"),
                                            format: "ajax"
                                        },
                                        dataType: "json"
                                    })
                                } catch (i) {
                                    return !1
                                }
                                return !1
                            }
                            return {
                                ecommerce: {
                                    purchase: {
                                        localeLanguage: e,
                                        currencyCode: n,
                                        actionField: a,
                                        products: o
                                    }
                                }
                            }
                        }(e);
                        break;
                    case "productDetailsWithPromotionsView":
                        a = function(t) {
                            var {
                                localeLanguage: e,
                                actionField: a,
                                products: o,
                                promotions: n
                            } = t;
                            if (!(e && a && o && o.length)) return !1;
                            var r = {
                                ecommerce: {
                                    detail: {
                                        localeLanguage: e,
                                        actionField: a,
                                        products: o
                                    }
                                }
                            };
                            n && n.length && (r.ecommerce.promoView = {
                                localeLanguage: e,
                                promotions: n
                            });
                            return r
                        }(e);
                        break;
                    default:
                        return !1
                }
                return a
            }
            var i = window.EventEmitter;
            class c extends o.a {
                initCache() {
                    this.selectors.promotions = this.element.querySelectorAll("[data-analytic-promo-id]"), this.selectors.step = this.element.querySelectorAll(".l-confirmation.receipt")
                }
                initOptions() {
                    if (this.selectors.step && this.selectors.step.length) {
                        var t = null;
                        this.selectors.step[0].dataset.componentOptions && (t = JSON.parse(this.selectors.step[0].dataset.componentOptions)), this.options.step = t && "checkoutStep" in t ? t.checkoutStep : null
                    }
                }
                initState() {
                    this.initOptions(), this.initGTM(), this.sendPromotionsAnalytics()
                }
                bindEvents() {
                    Object(n.on)("click.".concat(this.id), this.element, this.onPromotionClick.bind(this)), Object(n.on)("component:consentTracking", this.element, this.sendPromotionsAnalytics.bind(this)), i.on("Component:sendAnalytics", this.sendAnalyticsToGTM, this), i.on("ConsentTracking:applied", this.initGTM, this), i.on("Cart:updateCart", this.processCartUpdateAnalytics, this)
                }
                processCartUpdateAnalytics(t) {
                    var {
                        cartModel: e
                    } = t;
                    if (e && e.locale && e.currencyCode) {
                        var a = [];
                        this.analytics.actionType = "cartUpdated", this.analytics.localeLanguage = e.locale, this.analytics.currencyCode = e.currencyCode, e.items && e.items.length && e.items.forEach(t => {
                            if (!t.isBonusProductLineItem) {
                                var e = t.analytics;
                                e.quantity = t.quantity, a.push(e)
                            }
                        }), this.analytics.products = a, this.sendAnalyticsToGTM(this.analytics)
                    }
                }
                objectConversion(t) {
                    var e = "";
                    if (Array.isArray(t))
                        for (var a = 0; a < t.length; a++) try {
                            e += JSON.stringify(t[a])
                        } catch (o) {
                            e += '{circular parsing: "skipped from JSON stringify"}'
                        } else if ("object" == typeof t) try {
                            e += JSON.stringify(t)
                        } catch (o) {
                            e += '{circular parsing: "skipped from JSON stringify"}'
                        }
                    return e
                }
                checkNode(t, e) {
                    var a = null;
                    if ("object" == typeof t && Array.isArray(t))
                        for (var o = 0; o < t.length; o++) {
                            if ("object" == typeof(a = t[o]) && a.hasOwnProperty(e)) return a;
                            a = null
                        } else if ("object" == typeof t && !Array.isArray(t) && t.hasOwnProperty(e)) return t[e];
                    return a
                }
                goclone(t) {
                    if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var e = [], a = 0; a < t.length; a++) e[a] = this.goclone(t[a]);
                        return e
                    }
                    if ("object" == typeof t) {
                        var o = {};
                        for (var n in t) t.hasOwnProperty(n) && (o[n] = this.goclone(t[n]));
                        return o
                    }
                    return t
                }
                sendAnalyticsToGTM(t) {
                    var {
                        actionType: e,
                        localeLanguage: a,
                        currencyCode: o,
                        actionField: n,
                        products: i,
                        promotions: c,
                        url: s
                    } = t, l = $(".b-confirmation_summary-title");
                    if (this.consentTracking && this.options.gtmEnabled && window.dataLayer || $.ajax({
                            url: l.data("log"),
                            data: {
                                consentTracking: this.consentTracking,
                                gtmEnabled: this.options.gtmEnabled,
                                dataLayer: this.objectConversion(window.dataLayer),
                                orderNumber: l.data("ordernumber"),
                                format: "ajax"
                            },
                            dataType: "json"
                        }), e) {
                        var u = r(e, {
                            localeLanguage: a,
                            currencyCode: o,
                            actionField: n,
                            products: i,
                            promotions: c,
                            url: s
                        });
                        if (u && Object.keys(u).length && (window.dataLayer && window.dataLayer.push(u), this.options.step && 5 === this.options.step)) {
                            var d = this.goclone(u),
                                p = this.checkNode(window.dataLayer, "ecommerce");
                            if (p) this.checkNode(p.ecommerce.purchase, "actionField") || $.ajax({
                                url: l.data("log"),
                                data: {
                                    target: "actionField",
                                    dataLayer: this.objectConversion(window.dataLayer),
                                    objectShot: this.objectConversion(d),
                                    orderNumber: l.data("ordernumber"),
                                    format: "ajax"
                                },
                                dataType: "json"
                            });
                            else $.ajax({
                                url: l.data("log"),
                                data: {
                                    target: "ecommerce",
                                    dataLayer: this.objectConversion(window.dataLayer),
                                    objectShot: this.objectConversion(d),
                                    orderNumber: l.data("ordernumber"),
                                    format: "ajax"
                                },
                                dataType: "json"
                            })
                        }
                    }
                }
                initGTM() {
                    if (this.consentTracking && this.options.gtmEnabled && this.options.gtmContainerId) {
                        var t = window,
                            e = document,
                            a = "script",
                            o = "dataLayer",
                            n = this.options.gtmContainerId;
                        t[o] = t[o] || [], t[o].push({
                            "gtm.start": (new Date).getTime(),
                            event: "gtm.js"
                        });
                        var r = e.getElementsByTagName(a)[0],
                            i = e.createElement(a);
                        i.defer = !0, i.src = "https://www.googletagmanager.com/gtm.js?id=".concat(n + ""), r.parentNode.insertBefore(i, r)
                    }
                }
                onPromotionClick(t) {
                    var {
                        target: e
                    } = t, {
                        dataset: a
                    } = e;
                    "jsPromo" in a && this.consentTracking && "true" === e.getAttribute("data-analytic-promo-enabled") && (this.analytics.actionType = "promotionClick", this.analytics.promotions = {
                        id: e.getAttribute("data-analytic-promo-id"),
                        name: e.getAttribute("data-analytic-promo-name"),
                        creative: e.getAttribute("data-analytic-promo-creative"),
                        position: e.getAttribute("data-analytic-promo-position")
                    }, this.analytics.url = e.getAttribute("href"), this.analytics.promotions && this.analytics.promotions.length && this.sendAnalyticsToGTM(this.analytics))
                }
                sendPromotionsAnalytics() {
                    this.consentTracking && (this.options.step && 5 === this.options.step || (this.analytics.actionType = "promotionsView", this.analytics.promotions = this.getPromotions(), this.analytics.promotions && this.analytics.promotions.length && this.sendAnalyticsToGTM(this.analytics)))
                }
                getPromotions() {
                    if (this.selectors.promotions.length) {
                        var t = [];
                        if ([...this.selectors.promotions].forEach(e => {
                                if ("true" === e.getAttribute("data-analytic-promo-enabled")) {
                                    var a = {};
                                    a.id = e.getAttribute("data-analytic-promo-id"), a.name = e.getAttribute("data-analytic-promo-name"), a.creative = e.getAttribute("data-analytic-promo-creative"), a.position = e.getAttribute("data-analytic-promo-position"), t.push(a)
                                }
                            }), t.length) return t
                    }
                }
                destroy() {
                    Object(n.off)("all", this.element), i.off("Component:sendAnalytics"), i.off("ConsentTracking:applied"), i.off("Cart:updateCart")
                }
            }
        }
    }
]);
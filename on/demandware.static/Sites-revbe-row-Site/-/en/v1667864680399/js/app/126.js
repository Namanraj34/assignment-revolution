(window.webpackJsonp = window.webpackJsonp || []).push([
    [126], {
        121: function(t, i, s) {
            "use strict";
            s.r(i), s.d(i, "default", (function() {
                return c
            }));
            var e = s(15),
                n = s(0);
            class c extends e.a {
                bindEvents() {
                    Object(n.on)("click.".concat(this.id), this.element, this.sendPromoTileClickAnalytics.bind(this))
                }
                sendPromoTileClickAnalytics(t) {
                    var {
                        target: i
                    } = t;
                    i.hasAttribute("data-js-product-tile-link-image") && (this.analytics.actionType = "productClick", this.analytics.actionField = {
                        list: "Promo Tiles"
                    }, this.sendAnalyticsEvent())
                }
                destroy() {
                    Object(n.off)("click.".concat(this.id), this.element)
                }
            }
        }
    }
]);
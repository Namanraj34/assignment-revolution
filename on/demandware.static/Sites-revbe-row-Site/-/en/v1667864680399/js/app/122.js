(window.webpackJsonp = window.webpackJsonp || []).push([
    [122], {
        104: function(t, s, i) {
            "use strict";
            i.r(s), i.d(s, "default", (function() {
                return a
            }));
            var e = i(15),
                n = window.EventEmitter;
            class a extends e.a {
                bindEvents() {
                    n.on("AddToWishlistButton:updateIcon", this.updateWishListIcon, this), n.on("LineItemWishList:updateIcon", this.updateWishListIcon, this), n.on("WMP:updateIcon", this.updateWishListIcon, this)
                }
                initState() {
                    this.state.timer = null
                }
                updateWishListIcon(t) {
                    var {
                        isItemAdded: s,
                        isItemRemoved: i,
                        isListEmpty: e
                    } = t;
                    (s || i) && (this.addAnimationClass(), this.state.timer && clearTimeout(this.state.timer), this.state.timer = setTimeout(this.removeAnimationClass.bind(this), 1500)), this.element.classList.toggle("m-active", !e)
                }
                addAnimationClass() {
                    this.element.classList.add("wishlistIconAnimationClass")
                }
                removeAnimationClass() {
                    this.element.classList.remove("wishlistIconAnimationClass")
                }
                destroy() {
                    n.off("AddToWishlistButton:updateIcon"), n.off("LineItemWishList:updateIcon")
                }
            }
        }
    }
]);
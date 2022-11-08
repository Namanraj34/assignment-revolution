(window.webpackJsonp = window.webpackJsonp || []).push([
    [65], {
        102: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return a
            }));
            var r = n(15),
                i = n(0),
                o = n(78),
                u = n.n(o),
                s = n(18);
            class a extends r.a {
                constructor(e) {
                    super(e, {
                        resizable: !0
                    })
                }
                initCache() {
                    this.selectors.ctrlLeft = this.element.querySelector("[data-js-product-carousel-control-left]"), this.selectors.ctrlRight = this.element.querySelector("[data-js-product-carousel-control-right]"), this.selectors.swipeZone = this.element.querySelector("[data-js-product-carousel-swipe-zone]"), this.selectors.body = this.element.querySelector("[data-js-product-carousel-body]"), this.selectors.analyticsList = this.element.querySelectorAll("[data-analytics]"), this.selectors.items = this.selectors.body.children, this.selectors.lastItem = this.selectors.items[this.selectors.items.length - 1]
                }
                initState() {
                    this.state.slidePosition = 0, this.state.carouselSwipeRegion = new u.a.Region(this.element, !1, !1), this.carouselUpdate(), this.carouselSlide(), this.sendTilesAnalytics()
                }
                bindEvents() {
                    Object(i.on)("click.".concat(this.id), this.selectors.ctrlLeft, this.slideProductCarousel.bind(this, "left")), Object(i.on)("click.".concat(this.id), this.selectors.ctrlRight, this.slideProductCarousel.bind(this, "right")), Object(i.on)("component:consentTracking", this.element, this.sendTilesAnalytics.bind(this)), this.state.carouselSwipeRegion.bind(this.selectors.swipeZone, "swipe", this.carouselSwipe.bind(this), !1)
                }
                sendTilesAnalytics() {
                    this.consentTracking && (this.analytics.actionType = "productImpressions", this.analytics.products = [], [...this.selectors.analyticsList].forEach(e => {
                        var t = s.a(e.getAttribute("data-analytics")).products;
                        t && (t.list = "Products Slider", this.analytics.products.push(t))
                    }), this.analytics.products && this.analytics.products.length && this.sendAnalyticsEvent())
                }
                onResize() {
                    this.carouselUpdate(), this.carouselSlide()
                }
                carouselSwipe(e) {
                    var t = e.detail.data[0].currentDirection;
                    switch (!0) {
                        case t >= 315 && t <= 360 || t <= 45 && t >= 0:
                            this.slideProductCarousel("left");
                            break;
                        case t >= 135 && t <= 225:
                            this.slideProductCarousel("right")
                    }
                }
                carouselUpdate() {
                    this.state.itemWidth = this.selectors.items[0].offsetWidth
                }
                carouselSlide() {
                    this.selectors.body.style.transform = "translate3d(".concat(this.state.slidePosition * this.state.itemWidth, "px, 0, 0)")
                }
                slideProductCarousel(e) {
                    if ("left" === e) {
                        if (!this.state.slidePosition) return;
                        this.state.slidePosition++
                    } else if ("right" === e) {
                        var t = this.selectors.lastItem.getBoundingClientRect().right;
                        if (window.innerWidth > t) return;
                        this.state.slidePosition--
                    }
                    this.carouselSlide()
                }
                destroy() {
                    Object(i.off)("click.".concat(this.id), this.selectors.ctrlLeft), Object(i.off)("click.".concat(this.id), this.selectors.ctrlRight), Object(i.off)("component:consentTracking", this.element), this.state.carouselSwipeRegion.unbind(this.selectors.swipeZone, "swipe")
                }
            }
        },
        78: function(e, t, n) {
            n(79), e.exports = ZingTouch
        },
        79: function(e, t) {
            /*!
             *
             * ZingTouch v1.0.6
             * Author: ZingChart http://zingchart.com
             * License: MIT
             */
            ! function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                }
                var n = {};
                t.m = e, t.c = n, t.p = "", t(0)
            }([function(e, t, n) {
                "use strict";
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1));
                window.ZingTouch = r.default
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(2)),
                    o = r(n(4)),
                    u = r(n(10)),
                    s = r(n(12)),
                    a = r(n(13)),
                    c = r(n(14)),
                    l = r(n(15)),
                    f = r(n(16)),
                    d = {
                        _regions: [],
                        Gesture: o.default,
                        Expand: u.default,
                        Pan: s.default,
                        Pinch: a.default,
                        Rotate: c.default,
                        Swipe: l.default,
                        Tap: f.default,
                        Region: function(e, t, n) {
                            var r = d._regions.length,
                                o = new i.default(e, t, n, r);
                            return d._regions.push(o), o
                        }
                    };
                t.default = d
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(3)),
                    u = r(n(4)),
                    s = r(n(6)),
                    a = r(n(9)),
                    c = function() {
                        function e(t, n, r, i) {
                            var o = this;
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.id = i, this.element = t, this.capture = void 0 !== n && n, this.preventDefault = void 0 === r || r, this.state = new a.default(i);
                            (window.PointerEvent && !window.TouchEvent ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"]).map((function(e) {
                                t.addEventListener(e, (function(e) {
                                    (0, s.default)(e, o)
                                }), o.capture)
                            }))
                        }
                        return i(e, [{
                            key: "bind",
                            value: function(e, t, n, r, i) {
                                if (!e || e && !e.tagName) throw "Bind must contain an element";
                                return i = void 0 !== i && i, t ? void this.state.addBinding(e, t, n, r, i) : new o.default(e, i, this.state)
                            }
                        }, {
                            key: "bindOnce",
                            value: function(e, t, n, r) {
                                this.bind(e, t, n, r, !0)
                            }
                        }, {
                            key: "unbind",
                            value: function(e, t) {
                                var n = this,
                                    r = this.state.retrieveBindingsByElement(e),
                                    i = [];
                                return r.forEach((function(r) {
                                    t ? "string" == typeof t && n.state.registeredGestures[t] && n.state.registeredGestures[t].id === r.gesture.id && (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r)) : (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r))
                                })), i
                            }
                        }, {
                            key: "register",
                            value: function(e, t) {
                                if ("string" != typeof e) throw new Error("Parameter key is an invalid string");
                                if (!t instanceof u.default) throw new Error("Parameter gesture is an invalid Gesture object");
                                t.setType(e), this.state.registerGesture(t, e)
                            }
                        }, {
                            key: "unregister",
                            value: function(e) {
                                this.state.bindings.forEach((function(t) {
                                    t.gesture.getType() === e && t.element.removeEventListener(t.gesture.getId(), t.handler, t.capture)
                                }));
                                var t = this.state.registeredGestures[e];
                                return delete this.state.registeredGestures[e], t
                            }
                        }]), e
                    }();
                t.default = c
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = function e(t, n, r) {
                    var i = this;
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.element = t, Object.keys(r.registeredGestures).forEach((function(e) {
                        i[e] = function(t, o) {
                            return r.addBinding(i.element, e, t, o, n), i
                        }
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    i = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(n(5)),
                    o = function() {
                        function e() {
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.type = null, this.id = null
                        }
                        return r(e, [{
                            key: "setType",
                            value: function(e) {
                                this.type = e
                            }
                        }, {
                            key: "getType",
                            value: function() {
                                return this.type
                            }
                        }, {
                            key: "setId",
                            value: function(e) {
                                this.id = e
                            }
                        }, {
                            key: "getId",
                            value: function() {
                                return null !== this.id ? this.id : this.type
                            }
                        }, {
                            key: "update",
                            value: function(e) {
                                for (var t in e) this[t] && (this[t] = e[t])
                            }
                        }, {
                            key: "start",
                            value: function(e, t, n) {
                                return null
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                return null
                            }
                        }, {
                            key: "isValid",
                            value: function(e, t, n) {
                                var r = !0;
                                return e.length > 1 && e.forEach((function(e) {
                                    i.default.isInside(e.initial.x, e.initial.y, n) || (r = !1)
                                })), r
                            }
                        }]), e
                    }();
                t.default = o
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = 360,
                    r = {
                        normalizeEvent: function(e) {
                            switch (e) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                    return "start";
                                case "mousemove":
                                case "touchmove":
                                case "pointermove":
                                    return "move";
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                    return "end";
                                default:
                                    return null
                            }
                        },
                        isWithin: function(e, t, n, r, i) {
                            return Math.abs(t - r) <= i && Math.abs(e - n) <= i
                        },
                        distanceBetweenTwoPoints: function(e, t, n, r) {
                            var i = Math.sqrt((t - e) * (t - e) + (r - n) * (r - n));
                            return Math.round(100 * i) / 100
                        },
                        getMidpoint: function(e, t, n, r) {
                            return {
                                x: (e + t) / 2,
                                y: (n + r) / 2
                            }
                        },
                        getAngle: function(e, t, r, i) {
                            var o = Math.atan2(i - t, r - e) * (180 / Math.PI);
                            return n - (o < 0 ? n + o : o)
                        },
                        getAngularDistance: function(e, t) {
                            var r = (t - e) % n,
                                i = r < 0 ? 1 : -1;
                            return (r = Math.abs(r)) > 180 ? i * (n - r) : i * r
                        },
                        getVelocity: function(e, t, n, r, i, o) {
                            return this.distanceBetweenTwoPoints(e, r, t, i) / (o - n)
                        },
                        getRightMostInput: function(e) {
                            var t = null,
                                n = Number.MIN_VALUE;
                            return e.forEach((function(e) {
                                e.initial.x > n && (t = e)
                            })), t
                        },
                        isInteger: function(e) {
                            return "number" == typeof e && e % 1 == 0
                        },
                        isInside: function(e, t, n) {
                            var r = n.getBoundingClientRect();
                            return e > r.left && e < r.left + r.width && t > r.top && t < r.top + r.height
                        },
                        getPropagationPath: function(e) {
                            if (e.path) return e.path;
                            for (var t = [], n = e.target; n != document;) t.push(n), n = n.parentNode;
                            return t
                        },
                        getPathIndex: function(e, t) {
                            var n = e.length;
                            return e.forEach((function(e, r) {
                                e === t && (n = r)
                            })), n
                        },
                        setMSPreventDefault: function(e) {
                            e.style["-ms-content-zooming"] = "none", e.style["touch-action"] = "none"
                        },
                        removeMSPreventDefault: function(e) {
                            e.style["-ms-content-zooming"] = "", e.style["touch-action"] = ""
                        }
                    };
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(7)),
                    o = r(n(8)),
                    u = r(n(5));
                t.default = function(e, t) {
                    var n = t.state;
                    if (0 !== n.inputs.length || "start" === u.default.normalizeEvent(e.type)) {
                        if (void 0 !== e.buttons && "end" !== u.default.normalizeEvent(e.type) && 0 === e.buttons) return void n.resetInputs();
                        if (n.updateInputs(e, t.element)) {
                            var r = n.retrieveBindingsByInitialPos();
                            r.length > 0 && function() {
                                t.preventDefault ? (u.default.setMSPreventDefault(t.element), e.preventDefault ? e.preventDefault() : e.returnValue = !1) : u.default.removeMSPreventDefault(t.element);
                                var s = {};
                                (0, o.default)(r, e, n).forEach((function(t) {
                                    var n = t.binding.gesture.id;
                                    if (s[n]) {
                                        var r = u.default.getPropagationPath(e);
                                        u.default.getPathIndex(r, t.binding.element) < u.default.getPathIndex(r, s[n].binding.element) && (s[n] = t)
                                    } else s[n] = t
                                })), Object.keys(s).forEach((function(e) {
                                    var t = s[e];
                                    (0, i.default)(t.binding, t.data, t.events)
                                }))
                            }();
                            var s = 0;
                            n.inputs.forEach((function(e) {
                                "end" === e.getCurrentEventType() && s++
                            })), s === n.inputs.length && n.resetInputs()
                        }
                    }
                }
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n) {
                    t.events = n;
                    var r = new CustomEvent(e.gesture.getId(), {
                        detail: t,
                        bubbles: !0,
                        cancelable: !0
                    });
                    ! function(e, t, n) {
                        e.dispatchEvent(t), n.bindOnce && ZingTouch.unbind(n.element, n.gesture.getType())
                    }(e.element, r, e)
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(5));
                t.default = function(e, t, n) {
                    var i = r.default.normalizeEvent(t.type),
                        o = [];
                    return e.forEach((function(e) {
                        var t = e.gesture[i](n.inputs, n, e.element);
                        t && function() {
                            var r = [];
                            n.inputs.forEach((function(e) {
                                r.push(e.current)
                            })), o.push({
                                binding: e,
                                data: t,
                                events: r
                            })
                        }()
                    })), o
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    u = r(n(4)),
                    s = r(n(10)),
                    a = r(n(12)),
                    c = r(n(13)),
                    l = r(n(14)),
                    f = r(n(15)),
                    d = r(n(16)),
                    h = r(n(17)),
                    p = r(n(18)),
                    y = r(n(5)),
                    v = function() {
                        function e(t) {
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.regionId = t, this.inputs = [], this.bindings = [], this.numGestures = 0, this.registeredGestures = {}, this.registerGesture(new s.default, "expand"), this.registerGesture(new a.default, "pan"), this.registerGesture(new l.default, "rotate"), this.registerGesture(new c.default, "pinch"), this.registerGesture(new f.default, "swipe"), this.registerGesture(new d.default, "tap")
                        }
                        return o(e, [{
                            key: "addBinding",
                            value: function(e, t, n, r, o) {
                                var s = void 0;
                                if (e && void 0 === e.tagName) throw new Error("Parameter element is an invalid object.");
                                if ("function" != typeof n) throw new Error("Parameter handler is invalid.");
                                if ("string" == typeof t && -1 === Object.keys(this.registeredGestures).indexOf(t)) throw new Error("Parameter " + t + " is not a registered gesture");
                                if ("object" === (void 0 === t ? "undefined" : i(t)) && !(t instanceof u.default)) throw new Error("Parameter for the gesture is not of a Gesture type");
                                "string" == typeof t ? s = this.registeredGestures[t] : "" === (s = t).id && this.assignGestureId(s), this.bindings.push(new h.default(e, s, n, r, o)), e.addEventListener(s.getId(), n, r)
                            }
                        }, {
                            key: "retrieveBindingsByElement",
                            value: function(e) {
                                var t = [];
                                return this.bindings.map((function(n) {
                                    n.element === e && t.push(n)
                                })), t
                            }
                        }, {
                            key: "retrieveBindingsByInitialPos",
                            value: function() {
                                var e = this,
                                    t = [];
                                return this.bindings.forEach((function(n) {
                                    e.inputs.filter((function(e) {
                                        return y.default.isInside(e.initial.x, e.initial.y, n.element)
                                    })).length > 0 && t.push(n)
                                })), t
                            }
                        }, {
                            key: "updateInputs",
                            value: function(e, t) {
                                function n(e, t, n, r) {
                                    var i = y.default.normalizeEvent(e.type),
                                        o = function(e, t) {
                                            for (var n = 0; n < e.length; n++)
                                                if (e[n].identifier === t) return e[n];
                                            return null
                                        }(t.inputs, n);
                                    return "start" === i && o || "start" !== i && o && !y.default.isInside(o.current.x, o.current.y, r) ? void t.resetInputs() : "start" === i || o ? void("start" === i ? t.inputs.push(new p.default(e, n)) : o.update(e, n)) : void t.resetInputs()
                                }
                                switch (e.touches ? "TouchEvent" : e.pointerType ? "PointerEvent" : "MouseEvent") {
                                    case "TouchEvent":
                                        for (var r in e.changedTouches) e.changedTouches.hasOwnProperty(r) && y.default.isInteger(parseInt(r)) && n(e, this, e.changedTouches[r].identifier, t);
                                        break;
                                    case "PointerEvent":
                                        n(e, this, e.pointerId, t);
                                        break;
                                    case "MouseEvent":
                                    default:
                                        n(e, this, 0, t)
                                }
                                return !0
                            }
                        }, {
                            key: "resetInputs",
                            value: function() {
                                this.inputs = []
                            }
                        }, {
                            key: "numActiveInputs",
                            value: function() {
                                return this.inputs.filter((function(e) {
                                    return "end" !== e.current.type
                                })).length
                            }
                        }, {
                            key: "registerGesture",
                            value: function(e, t) {
                                this.assignGestureId(e), this.registeredGestures[t] = e
                            }
                        }, {
                            key: "assignGestureId",
                            value: function(e) {
                                e.setId(this.regionId + "-" + this.numGestures++)
                            }
                        }]), e
                    }();
                t.default = v
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.type = "expand", n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t
                }(function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(11)).default);
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    s = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "distance", n.threshold = e && e.threshold ? e.threshold : 1, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "start",
                            value: function(e, t, n) {
                                if (!this.isValid(e, t, n)) return null;
                                2 === e.length && (e[0].getGestureProgress(this.type).lastEmittedDistance = u.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y))
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                if (2 === t.numActiveInputs()) {
                                    var r = u.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                        i = u.default.distanceBetweenTwoPoints(e[0].previous.x, e[1].previous.x, e[0].previous.y, e[1].previous.y),
                                        o = u.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                        s = e[0].getGestureProgress(this.type);
                                    if ("Expand" === this.constructor.name) {
                                        if (r < i) s.lastEmittedDistance = r;
                                        else if (r - s.lastEmittedDistance >= this.threshold) return s.lastEmittedDistance = r, {
                                            distance: r,
                                            center: o
                                        }
                                    } else if (r > i) s.lastEmittedDistance = r;
                                    else if (r < i && s.lastEmittedDistance - r >= this.threshold) return s.lastEmittedDistance = r, {
                                        distance: r,
                                        center: o
                                    };
                                    return null
                                }
                            }
                        }]), t
                    }(o.default);
                t.default = s
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    s = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "pan", n.numInputs = e && e.numInputs ? e.numInputs : 1, n.threshold = e && e.threshold ? e.threshold : 1, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "start",
                            value: function(e) {
                                var t = this;
                                e.forEach((function(e) {
                                    var n = e.getGestureProgress(t.getId());
                                    n.active = !0, n.lastEmitted = {
                                        x: e.current.x,
                                        y: e.current.y
                                    }
                                }))
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                if (this.numInputs === e.length)
                                    for (var r = {
                                            data: []
                                        }, i = 0; i < e.length; i++) {
                                        var o, s = e[i].getGestureProgress(this.getId()),
                                            a = Math.abs(e[i].current.y - s.lastEmitted.y) > this.threshold,
                                            c = Math.abs(e[i].current.x - s.lastEmitted.x) > this.threshold;
                                        if (o = a || c, !s.active || !o) return null;
                                        r.data[i] = {
                                            distanceFromOrigin: u.default.distanceBetweenTwoPoints(e[i].initial.x, e[i].current.x, e[i].initial.y, e[i].current.y),
                                            directionFromOrigin: u.default.getAngle(e[i].initial.x, e[i].initial.y, e[i].current.x, e[i].current.y),
                                            currentDirection: u.default.getAngle(s.lastEmitted.x, s.lastEmitted.y, e[i].current.x, e[i].current.y)
                                        }, s.lastEmitted.x = e[i].current.x, s.lastEmitted.y = e[i].current.y
                                    }
                                return r
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                var t = this;
                                return e.forEach((function(e) {
                                    e.getGestureProgress(t.getId()).active = !1
                                })), null
                            }
                        }]), t
                    }(o.default);
                t.default = s
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(11)),
                    o = (r(n(5)), function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.type = "pinch", n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), t
                    }(i.default));
                t.default = o
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    s = function(e) {
                        function t() {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var e = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return e.type = "rotate", e
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "move",
                            value: function(e, t, n) {
                                if (t.numActiveInputs() <= 2) {
                                    var r = void 0,
                                        i = void 0,
                                        o = void 0,
                                        s = void 0;
                                    if (1 === t.numActiveInputs()) {
                                        var a = n.getBoundingClientRect();
                                        r = {
                                            x: a.left + a.width / 2,
                                            y: a.top + a.height / 2
                                        }, s = e[0], i = o = 0
                                    } else {
                                        r = u.default.getMidpoint(e[0].initial.x, e[1].initial.x, e[0].initial.y, e[1].initial.y);
                                        var c = u.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);
                                        i = r.x - c.x, o = r.y - c.y, s = u.default.getRightMostInput(e)
                                    }
                                    var l = u.default.getAngle(r.x, r.y, s.current.x + i, s.current.y + o),
                                        f = s.getGestureProgress(this.getId());
                                    return f.initialAngle ? (f.change = u.default.getAngularDistance(f.previousAngle, l), f.distance = f.distance + f.change) : (f.initialAngle = f.previousAngle = l, f.distance = f.change = 0), f.previousAngle = l, {
                                        angle: l,
                                        distanceFromOrigin: f.distance,
                                        distanceFromLast: f.change
                                    }
                                }
                                return null
                            }
                        }]), t
                    }(o.default);
                t.default = s
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    s = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "swipe", n.numInputs = e && e.numInputs ? e.numInputs : 1, n.maxRestTime = e && e.maxRestTime ? e.maxRestTime : 100, n.escapeVelocity = e && e.escapeVelocity ? e.escapeVelocity : .2, n.timeDistortion = e && e.timeDistortion ? e.timeDistortion : 100, n.maxProgressStack = e && e.maxProgressStack ? e.maxProgressStack : 10, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "move",
                            value: function(e, t, n) {
                                if (this.numInputs === e.length)
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r].getGestureProgress(this.getId());
                                        i.moves || (i.moves = []), i.moves.push({
                                            time: (new Date).getTime(),
                                            x: e[r].current.x,
                                            y: e[r].current.y
                                        }), i.length > this.maxProgressStack && i.moves.shift()
                                    }
                                return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                if (this.numInputs === e.length) {
                                    for (var t = {
                                            data: []
                                        }, n = 0; n < e.length; n++) {
                                        if ("end" !== e[n].current.type) return;
                                        var r = e[n].getGestureProgress(this.getId());
                                        if (r.moves && r.moves.length > 2) {
                                            var i = r.moves.pop();
                                            if ((new Date).getTime() - i.time > this.maxRestTime) return null;
                                            for (var o = void 0, s = r.moves.length - 1; - 1 !== s;) {
                                                if (r.moves[s].time !== i.time) {
                                                    o = r.moves[s];
                                                    break
                                                }
                                                s--
                                            }
                                            o || ((o = r.moves.pop()).time += this.timeDistortion);
                                            var a = u.default.getVelocity(o.x, o.y, o.time, i.x, i.y, i.time);
                                            t.data[n] = {
                                                velocity: a,
                                                distance: u.default.distanceBetweenTwoPoints(o.x, i.x, o.y, i.y),
                                                duration: i.time - o.time,
                                                currentDirection: u.default.getAngle(o.x, o.y, i.x, i.y)
                                            }
                                        }
                                    }
                                    for (n = 0; n < t.data.length; n++)
                                        if (a < this.escapeVelocity) return null;
                                    if (t.data.length > 0) return t
                                }
                                return null
                            }
                        }]), t
                    }(o.default);
                t.default = s
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    u = r(n(4)),
                    s = r(n(5)),
                    a = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "tap", n.minDelay = e && e.minDelay ? e.minDelay : 0, n.maxDelay = e && e.maxDelay ? e.maxDelay : 300, n.numInputs = e && e.numInputs ? e.numInputs : 1, n.tolerance = e && e.tolerance ? e.tolerance : 10, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), o(t, [{
                            key: "start",
                            value: function(e) {
                                var t = this;
                                return e.length === this.numInputs && e.forEach((function(e) {
                                    e.getGestureProgress(t.type).start = (new Date).getTime()
                                })), null
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                for (var r = this, o = 0; o < e.length; o++)
                                    if ("move" === e[o].getCurrentEventType()) {
                                        var u = e[o].current,
                                            a = e[o].previous;
                                        if (!s.default.isWithin(u.x, u.y, a.x, a.y, this.tolerance)) {
                                            var c = function() {
                                                var t = r.type;
                                                return e.forEach((function(e) {
                                                    e.resetProgress(t)
                                                })), {
                                                    v: null
                                                }
                                            }();
                                            if ("object" === (void 0 === c ? "undefined" : i(c))) return c.v
                                        }
                                    }
                                return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                var t = this;
                                if (e.length !== this.numInputs) return null;
                                for (var n = Number.MAX_VALUE, r = 0; r < e.length; r++) {
                                    if ("end" !== e[r].getCurrentEventType()) return null;
                                    var o = e[r].getGestureProgress(this.type);
                                    if (!o.start) return null;
                                    o.start < n && (n = o.start)
                                }
                                var u = (new Date).getTime() - n;
                                if (this.minDelay <= u && this.maxDelay >= u) return {
                                    interval: u
                                };
                                var s = function() {
                                    var n = t.type;
                                    return e.forEach((function(e) {
                                        e.resetProgress(n)
                                    })), {
                                        v: null
                                    }
                                }();
                                return "object" === (void 0 === s ? "undefined" : i(s)) ? s.v : void 0
                            }
                        }]), t
                    }(u.default);
                t.default = a
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = function e(t, n, r, i, o) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.element = t, this.gesture = n, this.handler = r, this.capture = void 0 !== i && i, this.bindOnce = void 0 !== o && o
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    i = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(n(19)),
                    o = function() {
                        function e(t, n) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var r = new i.default(t, n);
                            this.initial = r, this.current = r, this.previous = r, this.identifier = void 0 !== n ? n : 0, this.progress = {}
                        }
                        return r(e, [{
                            key: "update",
                            value: function(e, t) {
                                this.previous = this.current, this.current = new i.default(e, t)
                            }
                        }, {
                            key: "getGestureProgress",
                            value: function(e) {
                                return this.progress[e] || (this.progress[e] = {}), this.progress[e]
                            }
                        }, {
                            key: "getCurrentEventType",
                            value: function() {
                                return this.current.type
                            }
                        }, {
                            key: "resetProgress",
                            value: function(e) {
                                this.progress[e] = {}
                            }
                        }]), e
                    }();
                t.default = o
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(5));
                t.default = function e(t, n) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.originalEvent = t, this.type = r.default.normalizeEvent(t.type), this.x = 0, this.y = 0;
                    var i = void 0;
                    if (t.touches && t.changedTouches) {
                        for (var o = 0; o < t.changedTouches.length; o++)
                            if (t.changedTouches[o].identifier === n) {
                                i = t.changedTouches[o];
                                break
                            }
                    } else i = t;
                    this.x = this.clientX = i.clientX, this.y = this.clientY = i.clientY, this.pageX = i.pageX, this.pageY = i.pageY, this.screenX = i.screenX, this.screenY = i.screenY
                }
            }])
        }
    }
]);
(window.webpackJsonp = window.webpackJsonp || []).push([
    [109], {
        191: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, "default", (function() {
                return r
            }));
            var i = s(15),
                a = s(0),
                o = s(2);
            var n = window.EventEmitter;
            class r extends i.a {
                initCache() {
                    this.classes = {
                        activeItem: "m-active",
                        subDefault: ".m-default",
                        itemVisible: "m-visible"
                    }, this.selectors.navigationItemsMatrix = [], this.selectors.navigationActionElements = this.element.querySelectorAll("[data-js-nav-show-lvl]"), this.selectors.navigationRootItems = this.element.querySelectorAll("[data-js-nav-root-item]"), this.selectors.navigationRootContainer = this.element.querySelector("[data-js-nav-root-container]"), this.selectors.navL1Link = this.element.querySelectorAll(".b-nav-link_1"), this.selectors.navL2List = this.element.querySelectorAll(".b-nav-list_2"), this.element.querySelectorAll("[data-js-nav-item]").forEach(e => {
                        var t = parseInt(e.dataset.jsNavShowLvl, 10);
                        this.selectors.navigationItemsMatrix[t] = this.selectors.navigationItemsMatrix[t] || [], this.selectors.navigationItemsMatrix[t].push(e)
                    })
                }
                initState() {
                    this.state.activeMenuLevel = 1, this.state.isMobile = this.isMobileView(), this.state.isMobile && this.sortFirstLevelItemsPosition()
                }
                bindEvents() {
                    n.on("Header:hamburgerСloseClick", this.menuReset, this), Object(a.on)("click.".concat(this.id), this.selectors.navigationActionElements, this.menuNavigate.bind(this)), Object(a.on)("mouseover.navRootItem mouseleave.navRootItem", this.selectors.navigationRootItems, this.categoryRootItemHover.bind(this)), Object(a.on)("mouseover", this.selectors.navL2List, this.menuResetDefaults.bind(this)), Object(a.on)("mouseover", this.selectors.navL1Link, this.menuRestoreDefaults.bind(this))
                }
                menuResetDefaults(e) {
                    e.currentTarget.querySelectorAll(this.classes.subDefault).forEach(e => {
                        e.classList.remove(this.classes.itemVisible)
                    })
                }
                menuRestoreDefaults(e) {
                    e.currentTarget.parentElement.querySelectorAll(this.classes.subDefault).forEach(e => {
                        e.classList.add(this.classes.itemVisible)
                    })
                }
                isMobileView() {
                    return o.mediaQuery.is("small only")
                }
                onMediaQueryChange() {
                    var e = this.state.isMobile;
                    this.state.isMobile = this.isMobileView(), e !== this.state.isMobile && this.sortFirstLevelItemsPosition()
                }
                sortFirstLevelItemsPosition() {
                    var e = this.state.isMobile ? "mPosition" : "position";
                    [].slice.call(this.selectors.navigationRootContainer.children).sort((t, s) => parseInt(t.dataset[e], 10) - parseInt(s.dataset[e], 10)).forEach(e => {
                        this.selectors.navigationRootContainer.appendChild(e)
                    })
                }
                categoryRootItemHover(e) {
                    n.emit("CategoriesNavigation:navigationItemHover", "mouseover" === e.type ? "in" : "out")
                }
                createActiveLevelClass(e) {
                    return "m-active_level_".concat(e)
                }
                menuReset(e) {
                    this.element.classList.remove(this.createActiveLevelClass(e.level)), this.selectors.navigationItemsMatrix.forEach((e, t) => {
                        e.length && this.clearActiveItemState(t)
                    })
                }
                menuNavigate(e) {
                    if (!o.mediaQuery.is("large")) {
                        e.stopPropagation();
                        var t = e.currentTarget,
                            s = parseInt(t.dataset.jsNavShowLvl, 10);
                        if (this.element.classList.remove(this.createActiveLevelClass(this.state.activeMenuLevel)), void 0 === t.dataset.jsNavItem)
                            if (2 === this.state.activeMenuLevel) this.clearActiveItemState(this.state.activeMenuLevel);
                            else {
                                var i = this.element.querySelector(".h-hamburger-list_".concat(this.state.activeMenuLevel)),
                                    r = this.state.activeMenuLevel;
                                ! function(e, t) {
                                    if (!e || e && !(e instanceof HTMLElement)) throw new Error("element should be an HTML Element");
                                    Object(a.once)("transitionend", e, () => {
                                        "function" == typeof t && t()
                                    })
                                }(i, () => {
                                    this.clearActiveItemState(r)
                                })
                            }
                        this.state.activeMenuLevel = s, this.element.classList.add(this.createActiveLevelClass(this.state.activeMenuLevel)), void 0 !== t.dataset.jsNavItem && (this.clearActiveItemState(s), t.classList.add(this.classes.activeItem));
                        var l = this.element.querySelector(".m-active > .h-hamburger-list_3"),
                            c = 0;
                        l && (c = l.offsetHeight, l.parentNode.parentNode.style.height = 3 === s ? c + "px" : "auto"), n.emit("CategoriesNavigation:navigationItemClick", {
                            level: s
                        })
                    }
                }
                clearActiveItemState(e) {
                    this.selectors.navigationItemsMatrix[e].forEach(e => {
                        e.classList.remove(this.classes.activeItem)
                    })
                }
                destroy() {
                    n.off("Header:hamburgerСloseClick"), Object(a.off)("click.".concat(this.id), this.selectors.navigationActionElements), Object(a.off)("mouseover.navRootItem mouseleave.navRootItem", this.selectors.navigationRootItems), Object(a.off)("mouseover", this.selectors.navL2List), Object(a.off)("mouseover", this.selectors.navL1Link)
                }
                initLoad() {
                    var e = [].slice.call(this.element.querySelectorAll("[data-background-img]"));
                    if ("IntersectionObserver" in window) {
                        var t = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                if (e.isIntersecting) {
                                    var s = e.target;
                                    s.style.backgroundImage = "url('".concat(s.dataset.backgroundImg, "')"), t.unobserve(s)
                                }
                            }))
                        }));
                        e.forEach((function(e) {
                            t.observe(e)
                        }))
                    }
                }
            }
        }
    }
]);
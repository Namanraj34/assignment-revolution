(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        55: function(e, t, s) {
            "use strict";

            function a(e) {
                var t, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return s ? function() {
                    for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                    !1 !== t && (t = !1, window.setTimeout(() => {
                        t = !0, e.apply(this, i)
                    }, s))
                } : function() {
                    for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
                    t && window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
                        e.apply(this, a)
                    })
                }
            }
            s.d(t, "a", (function() {
                return a
            }))
        },
        64: function(e, t, s) {
            "use strict";
            var a, i, r, o = s(0),
                h = document.createElement("div"),
                n = {};
            h.classList.add("b-overlay"), h.setAttribute("role", "presentation"), Object(o.on)("click", h, (function() {
                Object(o.trigger)("overlay:click", h, {
                    bubbles: !0
                })
            })), n.insert = (e, t, s) => {
                i = e, r = t, a = s, e.prepend(h)
            }, n.remove = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                e.removeChild(h), r && r.apply(a)
            }, t.a = n
        },
        91: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, "default", (function() {
                return l
            }));
            var a = s(15),
                i = s(64),
                r = s(0),
                o = s(2),
                h = s(55),
                n = window.EventEmitter;
            class l extends a.a {
                initCache() {
                    this.classes = {
                        stickyClass: "m-sticky",
                        hamburgerOpened: "m-hamburger_opened",
                        searchOpened: "m-search_opened",
                        miniCartOpened: "m-mini_cart_opened",
                        customerServiceOpened: "m-customer_service_opened",
                        activeItem: "m-active",
                        hidden: "h-hidden"
                    }, this.selectors.hamburgerCta = this.element.querySelector("[data-js-header-hamburger-cta]"), this.selectors.searchCta = this.element.querySelector("[data-js-header-search-cta]"), this.selectors.searchBlock = this.element.querySelector("[data-js-header-search-block]"), this.selectors.navClose = this.element.querySelectorAll("[data-js-nav-close]"), this.selectors.hamburgerNav = this.element.querySelector("[data-js-hamburger-nav]"), this.selectors.hamburgerNavContent = this.element.querySelector("[data-js-hamburger-nav-content]"), this.selectors.headerHamburgerTools = this.element.querySelectorAll("[data-js-header-hamburger-tool]"), this.selectors.headerHamburgerToolControl = this.selectors.hamburgerNavContent.querySelectorAll("[data-js-hamburger-tool-show-lvl]"), this.selectors.megaMenuItems = this.element.querySelectorAll(".b-nav-megamenu"), this.selectors.secondLevelMenus = this.element.querySelectorAll(".b-nav-list_2")
                }
                initState() {
                    Object.assign(this.state, {
                        sticky: !1,
                        hamburgerOpened: !1,
                        hamburgerLevel: 1,
                        searchOpened: !1,
                        overlayOpened: !1,
                        customerServiceOpened: !1,
                        stickyHeight: this.element.getBoundingClientRect().height,
                        navItemMouseAction: !1,
                        miniCartOpened: !1
                    }), this.setHeaderHeight()
                }
                afterInit() {
                    this.toggleSearchBlock()
                }
                bindEvents() {
                    Object(r.on)("scroll.".concat(this.id), window, Object(h.a)(this.stickyChecker.bind(this))), Object(r.on)("overlay:click", this.element, this.closeOverlay.bind(this)), Object(r.on)("click.hamburger", this.selectors.hamburgerCta, this.toggleHamburger.bind(this)), Object(r.on)("click.search", this.selectors.searchCta, this.toggleSearch.bind(this)), Object(r.on)("click", this.selectors.navClose, this.closeMegaMenu.bind(this)), n.on("CategoriesNavigation:navigationItemClick", this.slideMenu, this), n.on("Suggestions:closeSearch", this.toggleSearch.bind(this)), n.on("Suggestions:resultsRendered", this.openSearch.bind(this)), n.on("MenuSearchSuggestions:toggleSearchResults", this.toggleMegaMenuSearch.bind(this)), n.on("MiniCart:open", this.openMiniCart, this), n.on("MiniCart:close", this.closeMiniCart, this), this.navItemHoverEvent(), this.headerHamburgerToolEvent()
                }
                closeMegaMenu() {
                    this.state.navItemMouseAction = !1, this.mouseHoverCategoryNavigationItem("out"), this.toggleMegaMenuClass(!0), this.navItemHoverEvent(), this.headerHamburgerToolEvent()
                }
                toggleMegaMenuClass(e) {
                    this.selectors.megaMenuItems.forEach(t => {
                        t.classList.toggle("h-hidden", e)
                    }), e ? Object(r.on)("mouseover.".concat(this.id), window, this.toggleMegaMenuClass.bind(this, !1)) : Object(r.off)("mouseover.".concat(this.id), window)
                }
                openMiniCart() {
                    this.element.classList.add(this.classes.miniCartOpened), this.state.miniCartOpened = !0, this.openOverlay(this.element)
                }
                closeMiniCart() {
                    this.element.classList.remove(this.classes.miniCartOpened), this.state.miniCartOpened = !1, n.emit("Header:closeMiniCart"), this.closeOverlay()
                }
                headerHamburgerToolAction(e) {
                    var t = e.target,
                        s = parseInt(t.dataset.jsHamburgerToolShowLvl, 10);
                    this.slideMenu({
                        level: s
                    }), t.closest("[data-js-header-hamburger-tool]").classList.toggle(this.classes.activeItem, 1 !== s)
                }
                onMediaQueryChange() {
                    this.toggleSearchBlock(), this.navItemHoverEvent(), this.headerHamburgerToolEvent(), o.mediaQuery.is("medium") && this.closeHamburger()
                }
                headerHamburgerToolEvent() {
                    o.mediaQuery.is("medium down") && Object(r.on)("click.".concat(this.id), this.selectors.headerHamburgerToolControl, this.headerHamburgerToolAction.bind(this))
                }
                navItemHoverEvent() {
                    o.mediaQuery.is("medium down") && this.state.navItemMouseAction ? (n.off("CategoriesNavigation:navigationItemHover"), this.state.navItemMouseAction = !1) : o.mediaQuery.is("large") && !this.state.navItemMouseAction && (n.on("CategoriesNavigation:navigationItemHover", this.mouseHoverCategoryNavigationItem, this), this.state.navItemMouseAction = !0, this.closeHamburger())
                }
                slideMenu(e) {
                    this.element.classList.remove(this.createHamburgerLevelClass(this.state.hamburgerLevel)), this.state.hamburgerLevel = e.level, this.element.classList.add(this.createHamburgerLevelClass(this.state.hamburgerLevel)), this.selectors.hamburgerNav.scrollTop = 0
                }
                createHamburgerLevelClass(e) {
                    return "m-hamburger-level_".concat(e)
                }
                mouseHoverCategoryNavigationItem(e) {
                    var t = event.target.closest(".b-nav-list_2"),
                        s = event.target.closest(".b-nav-item_2.m-has_sub_menu");
                    "in" === e && (this.closeOverlay(), this.openOverlay(this.element), t && s ? t.classList.add("m-hover") : this.selectors.secondLevelMenus.forEach(e => {
                        e.classList.remove("m-hover")
                    })), "out" === e && this.closeOverlay()
                }
                closeOverlay() {
                    this.state.overlayOpened && this.state.miniCartOpened && this.closeMiniCart(), this.state.overlayOpened && (this.state.overlayOpened = !1, i.a.remove(), n.emit("MenuSearchSuggestions:hideSearchResults"))
                }
                openOverlay(e, t) {
                    this.state.overlayOpened = !0, i.a.insert(e, t, this)
                }
                toggleHamburger() {
                    this.state.searchOpened && this.closeSearch(), this.state.hamburgerOpened ? this.closeHamburger() : this.openHamburger()
                }
                openHamburger() {
                    this.closeOverlay(), this.openOverlay(this.element, this.closeHamburger.bind(this, !0)), this.state.hamburgerOpened = !0, this.element.classList.add(this.classes.hamburgerOpened), this.selectors.hamburgerNavContent.parentNode.style.setProperty("--headerHeight", "".concat(this.element.clientHeight, "px"))
                }
                closeHamburger(e) {
                    this.closeOverlay(), e && (this.state.hamburgerOpened = !1, this.element.classList.remove(this.classes.hamburgerOpened), this.element.classList.remove(this.createHamburgerLevelClass(this.state.hamburgerLevel)), this.clearActiveToolState(), n.emit("Header:hamburgerСloseClick", {
                        level: this.state.hamburgerLevel
                    }), this.state.hamburgerLevel = 1)
                }
                clearActiveToolState() {
                    this.selectors.headerHamburgerTools.forEach(e => {
                        e.classList.remove(this.classes.activeItem)
                    })
                }
                toggleSearch(e) {
                    var {
                        searchKey: t = "",
                        searchVisibility: s = !1
                    } = e;
                    this.state.hamburgerOpened && this.closeHamburger(), this.state.searchOpened ? (this.selectors.searchCta.innerText = t || this.options.defaultSearchCtaText, this.closeSearch()) : s || this.openSearch()
                }
                toggleMegaMenuSearch(e) {
                    var {
                        toOpen: t,
                        className: s
                    } = e;
                    t ? this.selectors.hamburgerNav.classList.add(s) : this.selectors.hamburgerNav.classList.remove(s)
                }
                openSearch() {
                    this.openOverlay(this.element, this.closeSearch), this.toggleSearchBlock(!1), this.state.searchOpened = !0, this.element.classList.add(this.classes.searchOpened), this.setHeaderHeight(), n.emit("Header:openSearch")
                }
                closeSearch() {
                    this.toggleSearchBlock(!0), this.closeOverlay(), this.state.searchOpened = !1, this.element.classList.remove(this.classes.searchOpened)
                }
                toggleSearchBlock(e) {
                    o.mediaQuery.is("small only") ? this.selectors.searchBlock.classList.toggle(this.classes.hidden, void 0 === e ? this.options.hideMobileSearchHeader && this.options.isCartPage : e) : this.selectors.searchBlock.classList.remove(this.classes.hidden)
                }
                stickyChecker() {
                    window.pageYOffset > this.state.stickyHeight + 20 ? (document.body.style.paddingTop = "".concat(this.state.stickyHeight, "px"), this.element.classList.add(this.classes.stickyClass)) : (document.body.style.paddingTop = 0, this.element.classList.remove(this.classes.stickyClass)), this.setHeaderHeight()
                }
                setHeaderHeight() {
                    this.element.style.setProperty("--header-height", "".concat(this.element.clientHeight, "px"))
                }
                destroy() {
                    n.off("CategoriesNavigation:navigationItemClick"), n.off("MiniCart:open"), n.off("MiniCart:close"), Object(r.off)("all", this.element), Object(r.off)("scroll.".concat(this.id), window), Object(r.off)("click.hamburger", this.selectors.hamburgerCta), Object(r.off)("click.search", this.selectors.searchCta), o.mediaQuery.is("medium down") && Object(r.off)("click.".concat(this.id), this.selectors.headerHamburgerToolControl)
                }
            }
        }
    }
]);
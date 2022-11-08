(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "formValidator", (function() {
            return s
        }));
        var n = {
                phone(t) {
                    if (!window.intlTelInputGlobals) return !1;
                    var e = window.intlTelInputGlobals.instances;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var n = e[o];
                            if (parseInt(t.getAttribute("data-intl-tel-input-id"), 10) === n.id && !n.isValidNumber()) return !1
                        }
                    return !0
                },
                name: t => /^(?:[^ !"#$%&()'*+\-.,/\\`:;<=>?@[\]^_{|}~]{1,}['`\-.]?[ ]?){2,}$/.test(t.value),
                address: t => /^[^!$%*"+\\<=>?@[\]^_{|}~]{2,}$/.test(t.value),
                email: t => /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})){1,256}$/.test(t.value)
            },
            i = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
        var s = {
            getFormFields(t) {
                return [...t.querySelectorAll("[data-js-field]")].filter(this.isVisibleField)
            },
            checkHiddenAddress(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = t.querySelector("[data-js-accordion-container]"),
                    n = t.querySelector("[data-js-accordion-control]");
                if (o && n) {
                    var i = [...o.querySelectorAll("[data-js-field]")];
                    this.addresFieldsToExpand = !1, [...i].forEach(t => {
                        t.validity.valid || (this.addresFieldsToExpand = !0)
                    }), e && e.length && (this.addresFieldsToExpand = !0), this.addresFieldsToExpand && -1 === n.className.indexOf("m-accordion-expanded") && $(n).click()
                }
            },
            validateForm(t) {
                return this.clearFormErrors(t), !!t.hasAttribute("data-skip-validation") || (t.checkValidity() ? this.validateFormCustom(t) : (this.invalidateForm(t), this.checkHiddenAddress(t), !1))
            },
            validateFormCustom(t) {
                var e = this.getFormFields(t),
                    o = [],
                    n = !0;
                return [...e].forEach(t => {
                    this.validateFieldCustom(t) || (n = !1, o.push(t))
                }), n || this.checkHiddenAddress(t, o), n
            },
            invalidateForm(t) {
                [...this.getFormFields(t)].forEach(t => {
                    var e = t;
                    null !== t.getAttribute("data-js-country") && (e = t.querySelector("select")), e.validity.valid || this.invalidateField(e)
                })
            },
            validateField(t) {
                return t.value = t.value.trim(), t.value = t.value.replace(i, ""), this.clearValidationMessage(t), t.checkValidity() ? this.validateFieldCustom(t) : (this.invalidateField(t), !1)
            },
            validateFieldCustom(t) {
                var e, o = t.getAttribute("data-validation"),
                    i = t.hasAttribute("data-skip-validation");
                if (t.hasAttribute("data-js-country")) {
                    var s = t.getAttribute("data-selected-country") || t.value;
                    if (null === s || "" === s) return !1
                }
                if (i || !o || !t.hasAttribute("required") && !t.value.length) return !0;
                var r = t.getAttribute("maxlength"),
                    a = t.getAttribute("minlength"),
                    l = t.getAttribute("data-range-error"),
                    d = t.getAttribute("data-min-length-error"),
                    c = t.getAttribute("data-max-length-error"),
                    u = a && d,
                    h = r && c,
                    f = r && a && l,
                    m = t.value && t.value.toString().length || 0;
                return !Object.prototype.hasOwnProperty.call(n, o) || n[o](t) ? u && m < parseInt(a, 10) ? (this.setValidationMessage(t, d), !1) : h && m > parseInt(r, 10) ? (this.setValidationMessage(t, h), !1) : !f || !(parseInt(r, 10) < m || parseInt(a, 10) > m) || (this.setValidationMessage(t, l), !1) : (e = t.getAttribute("data-validation-".concat(o.toLowerCase())), u && m < parseInt(a, 10) ? (this.setValidationMessage(t, d), !1) : h && m > parseInt(r, 10) ? (this.setValidationMessage(t, h), !1) : f && (parseInt(r, 10) < m || parseInt(a, 10) > m) ? (this.setValidationMessage(t, l), !1) : (this.setValidationMessage(t, e), !1))
            },
            invalidateField(t) {
                t.setCustomValidity("");
                var {
                    rangeOverflow: e,
                    rangeUnderflow: o,
                    tooLong: n,
                    tooShort: i,
                    patternMismatch: s,
                    valueMissing: r
                } = t.validity, {
                    validationMessage: a
                } = t, l = t.getAttribute("data-range-error"), d = t.getAttribute("data-min-length-error"), c = t.getAttribute("data-max-length-error"), u = i && d, h = n && c, f = (n || i || e || o) && l;
                s && t.getAttribute("data-pattern-mismatch") && (a = t.getAttribute("data-pattern-mismatch")), u && (a = d), h && (a = c), f && (a = l), r && t.getAttribute("data-missing-error") && (a = t.getAttribute("data-missing-error")), this.setValidationMessage(t, a)
            },
            invalidateFields(t, e) {
                e && Object.keys(e).forEach(o => {
                    var n = t.querySelector('[name="'.concat(o, '"]')),
                        i = e[o];
                    n && (n.setCustomValidity(""), this.setValidationMessage(n, i))
                })
            },
            setValidationMessage(t, e) {
                var o = t.closest("label"),
                    n = t.closest("[data-js-field-container]").querySelector("[data-js-field-error-message]");
                o.classList.add("m-error"), n.innerHTML = e || ""
            },
            clearValidationMessage(t) {
                var e = t.closest("label"),
                    o = t.closest("[data-js-field-container]");
                e.classList.remove("m-error");
                var n = o.querySelector("[data-js-field-error-message]");
                n && (n.innerHTML = "")
            },
            clearFormErrors(t) {
                var e = t.querySelectorAll(".m-error"),
                    o = t.querySelectorAll("[data-js-field-error-message]");
                [...e].forEach(t => {
                    t.classList.remove("m-error")
                }), [...o].forEach(t => {
                    t.innerHTML = ""
                })
            },
            isVisibleField: t => t.offsetWidth || t.offsetHeight || t.getClientRects().length
        }
    }, , , , , , , , , , function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }));
        var n = {
            serialize(t) {
                var e = [];
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        var n = "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(t[o]));
                        e.push(n)
                    }
                return 0 !== e.length ? e.join("&") : ""
            }
        }
    }, , , , , function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return b
        }));
        var n = o(11),
            i = o(20),
            s = window.EventEmitter,
            r = {
                "X-Requested-With": "XMLHttpRequest"
            },
            a = {},
            l = 400;

        function d(t) {
            var e = {};
            if (t instanceof Headers)
                for (var [o, n] of t.entries()) e[o] = n;
            else e = t;
            return e
        }

        function c(t, e) {
            return t + JSON.stringify(e)
        }

        function u(t, e) {
            var o = c(t, e);
            return a[o]
        }

        function h(t, e, o) {
            var n = c(t, e);
            a[n] = o
        }

        function f(t, e) {
            var o = c(t, e);
            delete a[o]
        }

        function m(t) {
            var {
                errorMessage: e
            } = t, o = new Error(e);
            throw o.errorMessage = e, o.data = t, o
        }

        function p(t) {
            if (t.ok) return t;
            var {
                statusText: e,
                status: o
            } = t;
            if (o === l) return t.json().then(m);
            "5" === "".concat(o).charAt(0) && function(t) {
                var {
                    headers: e
                } = t, o = e.get("content-type");
                o && o.includes("application/json") && t.json().then(t => {
                    s.emit("Ajax:errorMessage", {
                        type: "error",
                        content: t.errorMessage
                    })
                })
            }(t);
            var n = new Error(e);
            throw n.errorMessage = e, n.response = t, n.status = o, n
        }

        function v(t) {
            var e = t.headers.get("content-type");
            if (e) {
                if (e.includes("application/json")) return t.json();
                if (e.includes("text/html")) return t.text()
            }
            return t
        }

        function g(t) {
            if ("object" == typeof t && !1 === t.success) throw new Error(t);
            return t
        }

        function y(t) {
            return "object" == typeof t && t.redirectUrl && (window.location.href = t.redirectUrl), t
        }

        function b(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = e;
            if (o.headers = Object.assign({}, d(o.headers), r), o.method = o.method || "GET", o.credentials = "same-origin", o.body && "object" == typeof o.body)
                if (o.body instanceof HTMLElement) {
                    var s = new i.a(o.body);
                    o.body = s.getSerializedData()
                } else o.body = n.a.serialize(o.body);
            if ("GET" === o.method && "object" == typeof o.querystring) {
                var a = new URL(t, document.location.origin);
                Object.keys(o.querystring).forEach(t => {
                    a.searchParams.append(t, o.querystring[t])
                }), delete o.querystring, t = a.toString()
            }
            var l = u(t, o);
            if (l) return l;
            var c = new URL(t, document.location.origin);
            c.searchParams.append("ajax", "true");
            var m = fetch(c.toString(), o).then(p).then(v).then(y).then(g).then(e => (f(t, o), e)).catch(e => (f(t, o), Promise.reject(e)));
            return h(t, o, m), m
        }
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "Compile", (function() {
            return O
        })), o.d(e, "F", (function() {
            return y
        })), o.d(e, "H", (function() {
            return n
        })), o.d(e, "P", (function() {
            return i
        })), o.d(e, "Render", (function() {
            return M
        })), o.d(e, "__express", (function() {
            return q
        })), o.d(e, "autoEscaping", (function() {
            return F
        })), o.d(e, "defaultTags", (function() {
            return c
        })), o.d(e, "defineFilter", (function() {
            return L
        })), o.d(e, "defineHelper", (function() {
            return E
        })), o.d(e, "defineNativeHelper", (function() {
            return k
        })), o.d(e, "definePartial", (function() {
            return S
        })), o.d(e, "load", (function() {
            return j
        })), o.d(e, "renderFile", (function() {
            return _
        })), o.d(e, "setDefaultFilters", (function() {
            return C
        }));
        var n = {},
            i = {},
            s = /{{ *?(?:(?:([\w$]+) *?\((.*?)\) *?([\w$]*))|(?:([\w$]+) *?\((.*?)\) *?\/)|(?:([\w$@].*?) *?((?:\| *?[\w$]+ *)*))|(?:\/ *?([\w$]+))|(?:# *?([\w$]+))|(?:!\-\-[^]+?\-\-)) *?}}\n?/g,
            r = {
                s: "{{",
                e: "}}"
            },
            a = /@(?:((?:\.\.\/)+)|([\w$]+):)?/g,
            l = s,
            d = r;

        function c(t) {
            u(t[0], t[1]), s = l, r = d
        }

        function u(t, e) {
            var o = t + l.source.slice(d.s.length, 0 - (d.e.length + 3)) + e + "\\n?",
                n = l.lastIndex;
            d = {
                s: t,
                e: e
            }, (l = RegExp(o, "g")).lastIndex = n
        }

        function h(t, e, o) {
            return t.replace(a, (function(t, n, i) {
                return "hvals" + (n && n.length ? e[o - n.length / 3 - 1].id : i || "") + "."
            }))
        }
        var f = {
                if: {
                    helperStart: function(t) {
                        return "if(" + t + "){"
                    },
                    helperEnd: function() {
                        return "}"
                    },
                    blocks: {
                        else: function() {
                            return "}else{"
                        }
                    }
                },
                each: {
                    helperStart: function(t, e) {
                        return "for(var i=0;i<" + t + ".length; i++){tR+=(function(hvals){var tR='';var hvals" + e + "=hvals;"
                    },
                    helperEnd: function(t) {
                        return "return tR})({this:" + t + "[i],index:i})};"
                    }
                },
                foreach: {
                    helperStart: function(t, e) {
                        return "for(var key in " + t + "){if(!" + t + ".hasOwnProperty(key)) continue;tR+=(function(hvals){var tR='';var hvals" + e + "=hvals;"
                    },
                    helperEnd: function(t) {
                        return "return tR})({this:" + t + "[key], key: key})};"
                    }
                },
                log: {
                    selfClosing: function(t) {
                        return "console.log(" + t + ");"
                    }
                },
                tags: {
                    selfClosing: function(t) {
                        return u(t.slice(0, t.indexOf(",")).trim(), t.slice(t.indexOf(",") + 1).trim()), ""
                    }
                },
                js: {
                    selfClosing: function(t) {
                        return t + ";"
                    }
                }
            },
            m = {
                "&": "&amp;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#39;"
            };

        function p(t) {
            return m[t]
        }
        var v = /[&<"']/g,
            g = /[&<"']/,
            y = {
                e: function(t) {
                    var e = String(t);
                    return g.test(e) ? e.replace(v, p) : e
                }
            },
            b = {},
            x = {
                start: "",
                end: ""
            };

        function C(t) {
            if ("clear" === t) b = {};
            else
                for (var e in t) t.hasOwnProperty(e) && (b[e] = t[e]);
            ! function() {
                for (var t in x = {
                        start: "",
                        end: ""
                    }, b) b.hasOwnProperty(t) && b[t] && (x.start += "Sqrl.F." + t + "(", x.end += ")")
            }()
        }
        var w = !0;

        function F(t) {
            return w = t
        }

        function B(t, e) {
            var o, n = !1,
                i = "",
                s = "";
            if (e && "" !== e) {
                o = e.split("|");
                for (var r = 0; r < o.length; r++) o[r] = o[r].trim(), "" !== o[r] && ("safe" !== o[r] ? (i = "Sqrl.F." + o[r] + "(" + i, s += ")") : n = !0)
            }
            return i += x.start, s += x.end, !n && w && (i += "Sqrl.F.e(", s += ")"), i + t + s
        }

        function O(t) {
            var e, o = 0,
                n = "var tR='';",
                a = [],
                c = -1,
                u = 0,
                m = {};

            function p(e) {
                o !== e && (n += "tR+='" + t.slice(o, e).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "';")
            }

            function v(t, e) {
                var o = h(t, a, c);
                return "@" === t[0] ? B(o, e) : B("options." + o, e)
            }
            for (d = r, (l = s).lastIndex = 0; null !== (e = l.exec(t));)
                if (p(e.index), o = e[0].length + e.index, e[1]) {
                    var g = e[3];
                    "" !== g && null !== g || (g = u, u++);
                    var y = f.hasOwnProperty(e[1]);
                    c += 1;
                    var b = e[2] || "";
                    b = h(b, a, c), y || (b = "[" + b + "]");
                    var x = {
                        name: e[1],
                        id: g,
                        params: b,
                        native: y
                    };
                    a[c] = x, y ? (n += f[e[1]].helperStart(b, g), o = l.lastIndex) : n += "tR+=Sqrl.H." + e[1] + "(" + b + ",function(hvals){var hvals" + g + "=hvals;var tR='';"
                } else if (e[4]) {
                var C = e[5] || "";
                if (C = h(C, a, c), "include" === e[4]) {
                    var w = t.slice(0, e.index),
                        F = t.slice(e.index + e[0].length),
                        O = C.replace(/'|"/g, ""),
                        L = i[O];
                    t = w + L + F, o = l.lastIndex = e.index
                } else f.hasOwnProperty(e[4]) && f[e[4]].hasOwnProperty("selfClosing") ? (n += f[e[4]].selfClosing(C), o = l.lastIndex) : n += "tR+=Sqrl.H." + e[4] + "(" + C + ");"
            } else if (e[6]) n += "tR+=" + v(e[6], e[7]) + ";";
            else if (e[8]) {
                var E = a[c];
                E && E.name === e[8] ? (c -= 1, !0 === E.native ? n += f[E.name].helperEnd(E.params, E.id) : m[E.id] ? n += "return tR}});" : n += "return tR});") : console.error("Helper beginning & end don't match.")
            } else if (e[9]) {
                var k = a[c];
                if (k.native) {
                    var M = f[k.name];
                    M.blocks && M.blocks[e[9]] ? (n += M.blocks[e[9]](k.id), o = l.lastIndex) : console.warn("Native helper '%s' doesn't accept that block.", k.name)
                } else m[k.id] ? n += "return tR}," + e[9] + ":function(hvals){var hvals" + k.id + "=hvals;var tR='';" : (n += "return tR},{" + e[9] + ":function(hvals){var hvals" + k.id + "=hvals;var tR='';", m[k.id] = !0)
            }
            return p(t.length), n += "return tR", new Function("options", "Sqrl", n.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))
        }

        function L(t, e) {
            y[t] = e
        }

        function E(t, e) {
            n[t] = e
        }

        function k(t, e) {
            f[t] = e
        }

        function M(t, e) {
            return "function" == typeof t ? t(e, {
                H: n,
                F: y,
                P: i
            }) : "string" == typeof t ? j(e, t)(e, {
                H: n,
                F: y,
                P: i
            }) : void 0
        }

        function S(t, e) {
            i[t] = e
        }
        var A = {};

        function j(t, e) {
            var n = t.$file,
                i = t.$name,
                s = t.$cache;
            if (n) {
                var r = o(26);
                return !1 !== s ? (A.hasOwnProperty(n) || (A[n] = O(r.readFileSync(n, "utf8"))), A[n]) : O(r.readFileSync(n, "utf8"))
            }
            return "string" == typeof e ? i && !1 !== s ? (A.hasOwnProperty(i) || (A[i] = O(e)), A[i]) : !0 === s ? (A.hasOwnProperty(e) || (A[e] = O(e)), A[e]) : O(e) : i && !1 !== s && A.hasOwnProperty(i) ? A[i] : "No template"
        }

        function _(t, e) {
            return e.$file = t, j(e)(e, {
                H: n,
                F: y,
                P: i
            })
        }

        function q(t, e, o) {
            return o(null, _(t, e))
        }
    }, , , function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return s
        }));
        var n = o(11),
            i = o(1);
        class s {
            constructor(t) {
                this.form = t, this.valid = !1, this.ignoredFields = /^(?:button|image|reset|file)$/i
            }
            getFields() {
                return this.form.elements
            }
            getData() {
                for (var t = {}, e = this.getFields(), o = 0; o < e.length; o++) {
                    var n = e[o];
                    if (!n.disabled && n.name && !this.ignoredFields.test(n.type)) {
                        var i = n.name,
                            s = n.value;
                        "checkbox" !== n.type && "radio" !== n.type || (s = n.checked), t[i] = s
                    }
                }
                return t
            }
            getSerializedData() {
                var t = this.getData();
                return n.a.serialize(t)
            }
            validate() {
                this.valid = i.formValidator.validateForm(this.form)
            }
            invalidateFields(t) {
                i.formValidator.invalidateFields(this.form, t)
            }
        }
    }, function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return s
        }));
        var n, i = o(17);

        function s() {
            return n || (t = document.querySelectorAll("script[type='text/x-squirrelly-template']"), n = {}, [...t].forEach(t => {
                var e = t.innerHTML,
                    o = i.Compile(e);
                n[t.id] = t => o(t, i)
            }), n);
            var t
        }
    }, function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return l
        }));
        var n = o(16),
            i = o(21),
            s = o(23),
            r = o.n(s),
            a = window.EventEmitter,
            l = {
                create(t) {
                    var e = this,
                        o = {
                            beforeOpen() {
                                var t = document.querySelector(".tingle-modal__close");
                                document.querySelector(".tingle-modal-box").appendChild(t)
                            },
                            onOpen() {
                                "function" == typeof t.onOpen && t.onOpen()
                            },
                            onClose() {
                                e.close(t)
                            },
                            beforeClose: () => !0,
                            closeMethods: t.closeMethods || ["overlay", "button", "escape"]
                        };
                    Array.isArray(t.cssClass) && (o.cssClass = t.cssClass), this.modal = new r.a.modal(o)
                },
                open(t) {
                    this.close(), this.create(t), this.replace(t)
                },
                close(t) {
                    this.modal && (this.modal.close(), this.modal.destroy(), delete this.modal, t && "function" == typeof t.onClose && t.onClose())
                },
                replace(t) {
                    if (t.contentUrl) Object(n.a)(t.contentUrl, t.requestData).then(t => {
                        this.modal.setContent(t), this.modal.open(), a.emit("Modal:opened")
                    });
                    else {
                        if (t.contentTemplate) {
                            var e = Object(i.a)()[t.contentTemplate];
                            t.data ? this.modal.setContent(e(t.data)) : this.modal.setContent(e())
                        } else t.content && this.modal.setContent(t.content);
                        this.modal.open()
                    }
                }
            }
    }, function(t, e, o) {
        var n, i;
        void 0 === (i = "function" == typeof(n = function() {
            function t(t) {
                this.opts = function() {
                    for (var t = 1; t < arguments.length; t++)
                        for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
                    return arguments[0]
                }({}, {
                    onClose: null,
                    onOpen: null,
                    beforeOpen: null,
                    beforeClose: null,
                    stickyFooter: !1,
                    footer: !1,
                    cssClass: [],
                    closeLabel: "Close",
                    closeMethods: ["overlay", "button", "escape"]
                }, t), this.init()
            }

            function e() {
                this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px")
            }

            function o() {
                this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose"), this.modal.style.display = "none", this.opts.cssClass.forEach((function(t) {
                    "string" == typeof t && this.modal.classList.add(t)
                }), this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = "×", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(this.modalBox)
            }

            function n() {
                this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter)
            }

            function i() {
                this._events = {
                    clickCloseBtn: this.close.bind(this),
                    clickOverlay: r.bind(this),
                    resize: this.checkOverflow.bind(this),
                    keyboardNav: s.bind(this)
                }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn), this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav)
            }

            function s(t) {
                -1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close()
            }

            function r(t) {
                -1 !== this.opts.closeMethods.indexOf("overlay") && ! function(t, e) {
                    for (;
                        (t = t.parentElement) && !t.classList.contains(e););
                    return t
                }(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth && this.close()
            }

            function a() {
                -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn), this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav)
            }
            var l = function() {
                var t, e = document.createElement("tingle-test-transition"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in o)
                    if (void 0 !== e.style[t]) return o[t]
            }();
            return t.prototype.init = function() {
                this.modal || (o.call(this), i.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter())
            }, t.prototype.destroy = function() {
                null !== this.modal && (a.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null)
            }, t.prototype.open = function() {
                var t = this;
                "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), this._scrollPosition = window.pageYOffset, document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), l ? this.modal.addEventListener(l, (function e() {
                    "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t.modal.removeEventListener(l, e, !1)
                }), !1) : "function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), this.checkOverflow()
            }, t.prototype.isOpen = function() {
                return !!this.modal.classList.contains("tingle-modal--visible")
            }, t.prototype.close = function() {
                if ("function" != typeof this.opts.beforeClose || this.opts.beforeClose.call(this)) {
                    document.body.classList.remove("tingle-enabled"), window.scrollTo(0, this._scrollPosition), document.body.style.top = null, this.modal.classList.remove("tingle-modal--visible");
                    var t = this;
                    l ? this.modal.addEventListener(l, (function e() {
                        t.modal.removeEventListener(l, e, !1), t.modal.style.display = "none", "function" == typeof t.opts.onClose && t.opts.onClose.call(this)
                    }), !1) : (t.modal.style.display = "none", "function" == typeof t.opts.onClose && t.opts.onClose.call(this))
                }
            }, t.prototype.setContent = function(t) {
                "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t))
            }, t.prototype.getContent = function() {
                return this.modalBoxContent
            }, t.prototype.addFooter = function() {
                n.call(this)
            }, t.prototype.setFooterContent = function(t) {
                this.modalBoxFooter.innerHTML = t
            }, t.prototype.getFooterContent = function() {
                return this.modalBoxFooter
            }, t.prototype.setStickyFooter = function(t) {
                this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), e.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))
            }, t.prototype.addFooterBtn = function(t, e, o) {
                var n = document.createElement("button");
                return n.innerHTML = t, n.addEventListener("click", o), "string" == typeof e && e.length && e.split(" ").forEach((function(t) {
                    n.classList.add(t)
                })), this.modalBoxFooter.appendChild(n), n
            }, t.prototype.resize = function() {
                console.warn("Resize is deprecated and will be removed in version 1.0")
            }, t.prototype.isOverflow = function() {
                var t = window.innerHeight;
                return this.modalBox.clientHeight >= t
            }, t.prototype.checkOverflow = function() {
                this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (e.call(this), this.setStickyFooter(!0)))
            }, {
                modal: t
            }
        }) ? n.call(e, o, e, t) : n) || (t.exports = i)
    }, , , function(t, e) {}]
]);
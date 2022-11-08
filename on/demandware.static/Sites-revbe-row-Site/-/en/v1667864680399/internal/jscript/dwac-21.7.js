(function(O) {
    if (typeof O.ac === "undefined") {
        return;
    }

    function a(c) {
        var h = document.cookie.split(";");
        for (var g = 0; g < h.length; g++) {
            var f = h[g].indexOf("=");
            if (f != -1) {
                var d = S(h[g].substring(0, f));
                if (c(d)) {
                    return S(unescape(h[g].substring(f + 1)));
                }
            }
        }
        return null;
    }

    function S(c) {
        return c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }

    function Y(d, g, c) {
        var f = d + "=" + escape(g) + ";path=/";
        if (c != -1) {
            f += ";expires=" + expires.toGMTString();
        }
        document.cookie = f;
    }

    function M(g) {
        var d = function(c) {
            if (c < 32) {
                return "";
            } else {
                return "%" + new Number(c).toString(16).toUpperCase();
            }
        };
        var h = "";
        for (var f = 0; f < g.length; f++) {
            var j = g.charCodeAt(f);
            if (((j >= 97) && (j <= 122)) || ((j >= 65) && (j <= 90)) || ((j >= 48) && (j <= 57)) || (j == 46) || (j == 45) || (j == 42) || (j == 95)) {
                h += g.charAt(f);
            } else {
                if (j == 32) {
                    h += "+";
                } else {
                    if (j < 128) {
                        h += d(j);
                    } else {
                        if ((j >= 128) && (j < 2048)) {
                            h += d((j >> 6) | 192);
                            h += d((j & 63) | 128);
                        } else {
                            if ((j >= 2048) && (j < 65536)) {
                                h += d((j >> 12) | 224);
                                h += d(((j >> 6) & 63) | 128);
                                h += d((j & 63) | 128);
                            } else {
                                if (j >= 65536) {
                                    h += d((j >> 18) | 240);
                                    h += d(((j >> 12) & 63) | 128);
                                    h += d(((j >> 6) & 63) | 128);
                                    h += d((j & 63) | 128);
                                }
                            }
                        }
                    }
                }
            }
        }
        return h;
    }

    function F() {
        var c = function(d) {
            return (d.length > 5) && (d.substring(0, 5) === "dwac_");
        };
        return a(c);
    }
    var b = (function() {
        if (O.ac._analytics_enabled === "false") {
            return {
                enabled: false,
                dwEnabled: false
            };
        }
        var d = F();
        if (d == null) {
            return {
                visitorID: "__ANNONYMOUS__",
                customer: "__ANNONYMOUS__",
                siteCurrency: "",
                sourceCode: "",
                enabled: "true",
                timeZone: O.ac._timeZone,
                dwEnabled: "true",
                encoding: "ISO-8859-1"
            };
        }
        var c = d.split("|");
        return {
            visitorID: c[0],
            repository: c[1],
            customer: c[2],
            sourceCode: c[3],
            siteCurrency: c[4],
            enabled: c[5] == "true",
            timeZone: c[6],
            dwEnabled: c[7] == "true",
            encoding: "ISO-8859-1"
        };
    }());
    var P = function(c) {
        if (typeof c != "boolean") {
            return;
        }
        Y("dwacdebug", "" + c, -1);
    };

    function Q() {
        var c = function(d) {
            return d === "dwacdebug";
        };
        return a(c) === "true";
    }

    function E() {
        var c = [];
        this.getEntries = function() {
            return c;
        };
        this.put = function(f, g) {
            for (var d = 0; d < c.length; d++) {
                if (c[d].key == f) {
                    c[d].value = g;
                    return;
                }
            }
            c.push({
                key: f,
                value: g
            });
        };
        this.putAll = function(g) {
            var d = g.getEntries();
            for (var f = 0; f < d.length; f++) {
                this.put(d[f].key, d[f].value);
            }
        };
        this.get = function(f) {
            for (var d = 0; d < c.length; d++) {
                if (c[d].key == f) {
                    return c[d].value;
                }
            }
            return null;
        };
        this.clear = function() {
            c.length = 0;
        };
        this.isEmpty = function() {
            return c.length == 0;
        };
    }
    var C = 500;
    var L = false;
    var V = null;
    var J = new E();
    var Z = new E();
    var K = new E();

    function D(c, d) {
        for (e in d) {
            if (typeof c[e] != "undefined") {
                d[e] = c[e];
            }
        }
        return d;
    }
    var T = function(f) {
        if (typeof f != "object") {
            return false;
        }
        var d = D(f, {
            id: null
        });
        if (typeof d.id != "string") {
            return false;
        }
        var c = J.get(d.id);
        if (c != null) {
            return false;
        }
        J.put(d.id, d);
        return true;
    };
    var U = function(c) {
        if (typeof c != "object") {
            return false;
        }
        var f = D(c, {
            id: null
        });
        if (typeof f.id != "string") {
            return false;
        }
        var d = K.get(f.id);
        if (d != null) {
            return false;
        }
        K.put(f.id, f);
        return true;
    };
    var H = function(f) {
        if (typeof f != "object") {
            return false;
        }
        var c = D(f, {
            id: null
        });
        if (typeof c.id != "string") {
            return false;
        }
        var d = Z.get(c.id);
        if (d != null) {
            return false;
        }
        Z.put(c.id, c);
        return true;
    };

    function X(c) {
        var d = new E();
        d.putAll(c);
        c.clear();
        return d;
    }

    function G() {
        return !J.isEmpty() || !K.isEmpty() || !Z.isEmpty();
    }
    var B = function() {
        if (O.ac._analytics != null) {
            var c = {
                pageInfo: O.ac._category,
                productImpressions: J,
                productViews: Z,
                productRecommendations: K,
                debugEnabled: Q()
            };
            O.ac._analytics.trackPageViewWithProducts(b, c, null);
            J.clear();
            Z.clear();
            K.clear();
            O.ac._events.length = 0;
        }
    };

    function R() {
        if (!L) {
            return;
        }
        if (V) {
            clearTimeout(V);
        }
        V = setTimeout(B, C);
    }

    function W(g, d) {
        if (typeof g == "undefined") {
            return;
        }
        var j = {};
        for (e in g) {
            var f = false;
            for (var c = 0;
                (c < d.length) && !f; c++) {
                var h = d[c];
                if ((e === h) && (typeof g[h] == "string")) {
                    f = true;
                }
            }
            j[e] = f ? M(g[e]) : g[e];
        }
        return j;
    }

    function I(c) {
        if (typeof c != "object") {
            return false;
        }
        if ((c.type === O.ac.EV_PRD_SEARCHHIT) || (c.type === O.ac.EV_PRD_SETPRODUCT)) {
            return T(W(c, ["id"]));
        }
        if (c.type === O.ac.EV_PRD_DETAIL) {
            return H(W(c, ["id"]));
        }
        if (c.type === O.ac.EV_PRD_RECOMMENDATION) {
            return U(W(c, ["id"]));
        }
        return false;
    }

    function N(d) {
        if (typeof d == "undefined") {
            return;
        }
        if (typeof d === "object") {
            if (d instanceof Array) {
                for (var c = 0; c < d.length; c++) {
                    I(d[c]);
                }
            } else {
                if (d[0] instanceof Object) {
                    I(d[0]);
                } else {
                    I(d);
                }
            }
        }
        if (L) {
            R();
        }
    }
    O.ac.capture = N;
    O.ac.setDebugEnabled = P;
    O.ac._handleCollectedData = function() {
        L = false;
        O.ac._events.forEach(N);
        L = true;
        R();
    };
    O.ac._scheduleDataSubmission = function() {
        if (O.ac._submitTimeout) {
            clearTimeout(O.ac._submitTimeout);
        }
        O.ac._submitTimeout = setTimeout(O.ac._handleCollectedData, 500);
    };
    (function A(c) {
        if (document.readyState === "complete") {
            setTimeout(c, 1);
        }
        if (document.addEventListener) {
            DOMContentLoaded = function() {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                c();
            };
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
            window.addEventListener("load", c, false);
        } else {
            if (document.attachEvent) {
                DOMContentLoaded = function() {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", DOMContentLoaded);
                        c();
                    }
                };
                document.attachEvent("onreadystatechange", DOMContentLoaded);
                window.attachEvent("onload", c);
            }
        }
    })(function() {
        O.ac._handleCollectedData();
    });
}((window.dw || {})));
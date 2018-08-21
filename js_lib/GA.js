// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [], []
        ]
    };

    var aa = this, ea = function () {
        if (null === ba) {
            var a;
            a:{
                var b = aa.document, c = b.querySelector && b.querySelector("script[nonce]");
                if (c) {
                    var d = c.nonce || c.getAttribute("nonce");
                    if (d && da.test(d)) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            ba = a || ""
        }
        return ba
    }, da = /^[\w+/_-]+[=]{0,2}$/, ba = null, fa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Ye = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.He = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a,
                d)
        }
    };
    var ha = function (a, b) {
        this.w = a;
        this.md = b
    };
    ha.prototype.zd = function () {
        return this.w
    };
    ha.prototype.getType = ha.prototype.zd;
    ha.prototype.getData = function () {
        return this.md
    };
    ha.prototype.getData = ha.prototype.getData;
    var ka = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, la = function () {
        this.ja = {};
        this.Ba = !1
    };
    la.prototype.get = function (a) {
        return this.ja["dust." + a]
    };
    la.prototype.set = function (a, b) {
        !this.Ba && (this.ja["dust." + a] = b)
    };
    la.prototype.has = function (a) {
        return this.ja.hasOwnProperty("dust." + a)
    };
    var ma = function (a) {
        var b = [], c;
        for (c in a.ja) a.ja.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    la.prototype.remove = function (a) {
        !this.Ba && delete this.ja["dust." + a]
    };
    la.prototype.J = function () {
        this.Ba = !0
    };
    var g = function (a) {
        this.ma = new la;
        this.h = [];
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ka(b) ? this.h[Number(b)] = a[Number(b)] : this.ma.set(b, a[b]))
    };
    g.prototype.toString = function () {
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            null === c || void 0 === c ? a.push("") : a.push(c.toString())
        }
        return a.join(",")
    };
    g.prototype.set = function (a, b) {
        if ("length" == a) {
            if (!ka(b)) throw"RangeError: Length property must be a valid integer.";
            this.h.length = Number(b)
        } else ka(a) ? this.h[Number(a)] = b : this.ma.set(a, b)
    };
    g.prototype.set = g.prototype.set;
    g.prototype.get = function (a) {
        return "length" == a ? this.length() : ka(a) ? this.h[Number(a)] : this.ma.get(a)
    };
    g.prototype.get = g.prototype.get;
    g.prototype.length = function () {
        return this.h.length
    };
    g.prototype.R = function () {
        for (var a = ma(this.ma), b = 0; b < this.h.length; b++) a.push(b + "");
        return new g(a)
    };
    g.prototype.getKeys = g.prototype.R;
    g.prototype.remove = function (a) {
        ka(a) ? delete this.h[Number(a)] : this.ma.remove(a)
    };
    g.prototype.remove = g.prototype.remove;
    g.prototype.pop = function () {
        return this.h.pop()
    };
    g.prototype.pop = g.prototype.pop;
    g.prototype.push = function (a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    g.prototype.push = g.prototype.push;
    g.prototype.shift = function () {
        return this.h.shift()
    };
    g.prototype.shift = g.prototype.shift;
    g.prototype.splice = function (a, b, c) {
        return new g(this.h.splice.apply(this.h, arguments))
    };
    g.prototype.splice = g.prototype.splice;
    g.prototype.unshift = function (a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    g.prototype.unshift = g.prototype.unshift;
    g.prototype.has = function (a) {
        return ka(a) && this.h.hasOwnProperty(a) || this.ma.has(a)
    };
    var na = function () {
        function a(a, b) {
            c[a] = b
        }

        function b() {
            c = {}
        }

        var c = {}, d = {
            add: a, reset: b, create: function (d) {
                var e = {
                    add: a, request: function (a, b) {
                        return c[a] ? c[a].apply(d, Array.prototype.slice.call(arguments, 1)) : !1
                    }, reset: b
                };
                e.add = e.add;
                e.request = e.request;
                e.reset = e.reset;
                return e
            }
        };
        d.add = d.add;
        d.reset = d.reset;
        return d
    };
    var oa = function () {
        function a(a, c) {
            if (b[a]) {
                if (b[a].Oa + c > b[a].max) throw Error("Quota exceeded");
                b[a].Oa += c
            }
        }

        var b = {}, c = void 0, d = void 0, e = {
            Wd: function (a) {
                c = a
            }, Ub: function () {
                c && a(c, 1)
            }, Xd: function (a) {
                d = a
            }, V: function (b) {
                d && a(d, b)
            }, qe: function (a, c) {
                b[a] = b[a] || {Oa: 0};
                b[a].max = c
            }, yd: function (a) {
                return b[a] && b[a].Oa || 0
            }, reset: function () {
                b = {}
            }, fd: a
        };
        e.onFnConsume = e.Wd;
        e.consumeFn = e.Ub;
        e.onStorageConsume = e.Xd;
        e.consumeStorage = e.V;
        e.setMax = e.qe;
        e.getConsumed = e.yd;
        e.reset = e.reset;
        e.consume = e.fd;
        return e
    };
    var pa = function (a, b, c) {
        this.K = a;
        this.aa = b;
        this.Z = c;
        this.h = new la
    };
    pa.prototype.add = function (a, b) {
        this.h.Ba || (this.K.V(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b))
    };
    pa.prototype.add = pa.prototype.add;
    pa.prototype.set = function (a, b) {
        this.h.Ba || (this.Z && this.Z.has(a) ? this.Z.set(a, b) : (this.K.V(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b)))
    };
    pa.prototype.set = pa.prototype.set;
    pa.prototype.get = function (a) {
        return this.h.has(a) ? this.h.get(a) : this.Z ? this.Z.get(a) : void 0
    };
    pa.prototype.get = pa.prototype.get;
    pa.prototype.has = function (a) {
        return !!this.h.has(a) || !(!this.Z || !this.Z.has(a))
    };
    pa.prototype.has = pa.prototype.has;
    pa.prototype.I = function () {
        return this.K
    };
    pa.prototype.J = function () {
        this.h.J()
    };
    var qa = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, ra = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    };
    var v = function (a, b) {
        la.call(this);
        this.kc = a;
        this.wd = b
    };
    fa(v, la);
    var ta = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = sa(a, b[d]), c instanceof ha); d++) ;
        return c
    }, sa = function (a, b) {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof v)) throw"Attempting to execute non-function " + b[0] + ".";
        return c.m.apply(c, [a].concat(b.slice(1)))
    };
    v.prototype.toString = function () {
        return this.kc
    };
    v.prototype.getName = function () {
        return this.kc
    };
    v.prototype.getName = v.prototype.getName;
    v.prototype.R = function () {
        return new g(ma(this))
    };
    v.prototype.getKeys = v.prototype.R;
    v.prototype.m = function (a, b) {
        var c, d = {
            B: function () {
                return a
            }, evaluate: function (b) {
                var c = a;
                return qa(b) ? sa(c, b) : b
            }, xa: function (b) {
                return ta(a, b)
            }, I: function () {
                return a.I()
            }, Ne: function () {
                c || (c = a.aa.create(d));
                return c
            }
        };
        a.I().Ub();
        return this.wd.apply(d, Array.prototype.slice.call(arguments, 1))
    };
    v.prototype.invoke = v.prototype.m;
    var ua = function () {
        la.call(this)
    };
    fa(ua, la);
    ua.prototype.R = function () {
        return new g(ma(this))
    };
    ua.prototype.getKeys = ua.prototype.R;
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, wa = function (a) {
        if (null == a) return String(a);
        var b = va.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, xa = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, ya = function (a) {
        if (!a || "object" != wa(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !xa(a, "constructor") && !xa(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || xa(a, b)
    }, za = function (a, b) {
        var c = b || ("array" == wa(a) ? [] : {}), d;
        for (d in a) if (xa(a, d)) {
            var e = a[d];
            "array" == wa(e) ? ("array" != wa(c[d]) && (c[d] = []), c[d] = za(e, c[d])) : ya(e) ? (ya(c[d]) || (c[d] = {}), c[d] = za(e, c[d])) : c[d] = e
        }
        return c
    };
    var Aa = function (a) {
        if (a instanceof g) {
            for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = Aa(a.get(d)));
            return b
        }
        if (a instanceof ua) {
            for (var e = {}, f = a.R(), h = f.length(), k = 0; k < h; k++) e[f.get(k)] = Aa(a.get(f.get(k)));
            return e
        }
        return a instanceof v ? function () {
            for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++) b[c] = Ba(b[c]);
            var d = new pa(oa(), na());
            return Aa(a.m.apply(a, [d].concat(b)))
        } : a
    }, Ba = function (a) {
        if (qa(a)) {
            for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = Ba(a[c]));
            return new g(b)
        }
        if (ya(a)) {
            var d =
                new ua, e;
            for (e in a) a.hasOwnProperty(e) && d.set(e, Ba(a[e]));
            return d
        }
        if ("function" === typeof a) return new v("", function (b) {
            for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++) c[d] = Aa(this.evaluate(c[d]));
            return Ba(a.apply(a, c))
        });
        var f = typeof a;
        if (null === a || "string" === f || "number" === f || "boolean" === f) return a
    };
    var Da = {
        control: function (a, b) {
            return new ha(a, this.evaluate(b))
        }, fn: function (a, b, c) {
            var d = this.B(), e = this.evaluate(b);
            if (!(e instanceof g)) throw"Error: non-List value given for Fn argument names.";
            var f = Array.prototype.slice.call(arguments, 2);
            this.I().V(a.length + f.length);
            return new v(a, function () {
                return function (a) {
                    for (var b = new pa(d.K, d.aa, d), c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++) if (c[h] = this.evaluate(c[h]), c[h] instanceof ha) return c[h];
                    for (var n = e.get("length"), p = 0; p < n; p++) p <
                    c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
                    b.set("arguments", new g(c));
                    var q = ta(b, f);
                    if (q instanceof ha) return "return" === q.w ? q.getData() : q
                }
            }())
        }, list: function (a) {
            var b = this.I();
            b.V(arguments.length);
            for (var c = new g, d = 0; d < arguments.length; d++) {
                var e = this.evaluate(arguments[d]);
                "string" === typeof e && b.V(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        }, map: function (a) {
            for (var b = this.I(), c = new ua, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.evaluate(arguments[d]) + "", f = this.evaluate(arguments[d + 1]), h =
                    e.length;
                h += "string" === typeof f ? f.length : 1;
                b.V(h);
                c.set(e, f)
            }
            return c
        }, undefined: function () {
        }
    };
    var w = function () {
        this.K = oa();
        this.aa = na();
        this.za = new pa(this.K, this.aa)
    };
    w.prototype.T = function (a, b) {
        var c = new v(a, b);
        c.J();
        this.za.set(a, c)
    };
    w.prototype.addInstruction = w.prototype.T;
    w.prototype.Tb = function (a, b) {
        Da.hasOwnProperty(a) && this.T(b || a, Da[a])
    };
    w.prototype.addNativeInstruction = w.prototype.Tb;
    w.prototype.I = function () {
        return this.K
    };
    w.prototype.getQuota = w.prototype.I;
    w.prototype.Va = function () {
        this.K = oa();
        this.za.K = this.K
    };
    w.prototype.resetQuota = w.prototype.Va;
    w.prototype.ne = function () {
        this.aa = na();
        this.za.aa = this.aa
    };
    w.prototype.resetPermissions = w.prototype.ne;
    w.prototype.O = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.wb(c)
    };
    w.prototype.execute = w.prototype.O;
    w.prototype.wb = function (a) {
        for (var b, c = 0; c < arguments.length; c++) {
            var d = sa(this.za, arguments[c]);
            b = d instanceof ha || d instanceof v || d instanceof g || d instanceof ua || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
        }
        return b
    };
    w.prototype.run = w.prototype.wb;
    w.prototype.J = function () {
        this.za.J()
    };
    w.prototype.makeImmutable = w.prototype.J;
    var Ea = function (a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var Fa = {
        ve: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (d = 1; d < arguments.length; d++) if (arguments[d] instanceof g) for (var e = arguments[d], f = 0; f < e.length(); f++) c.push(e.get(f)); else c.push(arguments[d]);
            return new g(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) &&
                !b.m(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.m(a, this.get(e), e, this) && d.push(this.get(e));
            return new g(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.m(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) && this.get(f) ===
                b) return f;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.m(a, this.get(e), e, this));
            return new g(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments,
                1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = 0; else {
                if (0 == d) throw"TypeError: Reduce on List with no elements.";
                for (var h = 0; h < d; h++) if (this.has(h)) {
                    e = this.get(h);
                    f = h + 1;
                    break
                }
                if (h == d) throw"TypeError: Reduce on List with no elements.";
            }
            for (h = f; h < d; h++) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = d - 1; else {
                if (0 == d) throw"TypeError: ReduceRight on List with no elements.";
                for (var h = 1; h <= d; h++) if (this.has(d -
                    h)) {
                    e = this.get(d - h);
                    f = d - (h + 1);
                    break
                }
                if (h > d) throw"TypeError: ReduceRight on List with no elements.";
            }
            for (h = f; 0 <= h; h--) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reverse: function () {
            for (var a = Ea(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b,
                c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new g(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.m(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function (a, b) {
            var c = Ea(this);
            void 0 === b ? c.sort() : c.sort(function (c, d) {
                return Number(b.m(a, c, d))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var x = {
            fc: {
                ADD: 0,
                AND: 1,
                APPLY: 2,
                ASSIGN: 3,
                BREAK: 4,
                CASE: 5,
                CONTINUE: 6,
                CONTROL: 49,
                CREATE_ARRAY: 7,
                CREATE_OBJECT: 8,
                DEFAULT: 9,
                DEFN: 50,
                DIVIDE: 10,
                DO: 11,
                EQUALS: 12,
                EXPRESSION_LIST: 13,
                FN: 51,
                FOR: 14,
                FOR_IN: 47,
                GET: 15,
                GET_CONTAINER_VARIABLE: 48,
                GET_INDEX: 16,
                GET_PROPERTY: 17,
                GREATER_THAN: 18,
                GREATER_THAN_EQUALS: 19,
                IDENTITY_EQUALS: 20,
                IDENTITY_NOT_EQUALS: 21,
                IF: 22,
                LESS_THAN: 23,
                LESS_THAN_EQUALS: 24,
                MODULUS: 25,
                MULTIPLY: 26,
                NEGATE: 27,
                NOT: 28,
                NOT_EQUALS: 29,
                NULL: 45,
                OR: 30,
                PLUS_EQUALS: 31,
                POST_DECREMENT: 32,
                POST_INCREMENT: 33,
                PRE_DECREMENT: 34,
                PRE_INCREMENT: 35,
                QUOTE: 46,
                RETURN: 36,
                SET_PROPERTY: 43,
                SUBTRACT: 37,
                SWITCH: 38,
                TERNARY: 39,
                TYPEOF: 40,
                UNDEFINED: 44,
                VAR: 41,
                WHILE: 42
            }
        },
        Ga = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Ha = new ha("break"), Ia = new ha("continue");
    x.add = function (a, b) {
        return this.evaluate(a) + this.evaluate(b)
    };
    x.and = function (a, b) {
        return this.evaluate(a) && this.evaluate(b)
    };
    x.apply = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof g)) throw"Error: Non-List argument given to Apply instruction.";
        if (null === a || void 0 === a) throw"TypeError: Can't read property " + b + " of " + a + ".";
        if ("boolean" == typeof a || "number" == typeof a) {
            if ("toString" == b) return a.toString();
            throw"TypeError: " + a + "." + b + " is not a function.";
        }
        if ("string" == typeof a) {
            if (0 <= ra(Ga, b)) return Ba(a[b].apply(a, Ea(c)));
            throw"TypeError: " + b + " is not a function";
        }
        if (a instanceof g) {
            if (a.has(b)) {
                var d =
                    a.get(b);
                if (d instanceof v) {
                    var e = Ea(c);
                    e.unshift(this.B());
                    return d.m.apply(d, e)
                }
                throw"TypeError: " + b + " is not a function";
            }
            if (0 <= ra(Fa.ve, b)) return e = Ea(c), e.unshift(this.B()), Fa[b].apply(a, e)
        }
        if (a instanceof v || a instanceof ua) {
            if (a.has(b)) {
                d = a.get(b);
                if (d instanceof v) return e = Ea(c), e.unshift(this.B()), d.m.apply(d, e);
                throw"TypeError: " + b + " is not a function";
            }
            if ("toString" == b) return a instanceof v ? a.getName() : a.toString();
            if ("hasOwnProperty" == b) return a.has.apply(a, Ea(c))
        }
        throw"TypeError: Object has no '" +
        b + "' property.";
    };
    x.assign = function (a, b) {
        a = this.evaluate(a);
        if ("string" != typeof a) throw"Invalid key name given for assignment.";
        var c = this.B();
        if (!c.has(a)) throw"Attempting to assign to undefined value " + b;
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    };
    x["break"] = function () {
        return Ha
    };
    x["case"] = function (a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof ha) return d
        }
    };
    x["continue"] = function () {
        return Ia
    };
    x.nd = function (a, b, c) {
        var d = new g;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [x.fc.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.B().set(a, this.evaluate(f))
    };
    x.qd = function (a, b) {
        return this.evaluate(a) / this.evaluate(b)
    };
    x.td = function (a, b) {
        return this.evaluate(a) == this.evaluate(b)
    };
    x.ud = function (a) {
        for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]);
        return b
    };
    x.xd = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.B();
        if ("string" == typeof b) for (var e = 0; e < b.length; e++) {
            d.set(a, e);
            var f = this.xa(c);
            if (f instanceof ha) {
                if ("break" == f.w) break;
                if ("return" == f.w) return f
            }
        } else if (b instanceof ua || b instanceof g || b instanceof v) {
            var h = b.R(), k = h.length();
            for (e = 0; e < k; e++) if (d.set(a, h.get(e)), f = this.xa(c), f instanceof ha) {
                if ("break" == f.w) break;
                if ("return" == f.w) return f
            }
        }
    };
    x.get = function (a) {
        return this.B().get(this.evaluate(a))
    };
    x.cc = function (a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (void 0 === a || null === a) throw"TypeError: cannot access property of " + a + ".";
        a instanceof ua || a instanceof g || a instanceof v ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ka(b) && (c = a[b]));
        return c
    };
    x.Ad = function (a, b) {
        return this.evaluate(a) > this.evaluate(b)
    };
    x.Bd = function (a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    };
    x.Fd = function (a, b) {
        return this.evaluate(a) === this.evaluate(b)
    };
    x.Gd = function (a, b) {
        return this.evaluate(a) !== this.evaluate(b)
    };
    x["if"] = function (a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = this.xa(d);
        if (e instanceof ha) return e
    };
    x.Od = function (a, b) {
        return this.evaluate(a) < this.evaluate(b)
    };
    x.Pd = function (a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    };
    x.Rd = function (a, b) {
        return this.evaluate(a) % this.evaluate(b)
    };
    x.multiply = function (a, b) {
        return this.evaluate(a) * this.evaluate(b)
    };
    x.Sd = function (a) {
        return -this.evaluate(a)
    };
    x.Td = function (a) {
        return !this.evaluate(a)
    };
    x.Ud = function (a, b) {
        return this.evaluate(a) != this.evaluate(b)
    };
    x["null"] = function () {
        return null
    };
    x.or = function (a, b) {
        return this.evaluate(a) || this.evaluate(b)
    };
    x.uc = function (a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    };
    x.vc = function (a) {
        return this.evaluate(a)
    };
    x.quote = function (a) {
        return Array.prototype.slice.apply(arguments)
    };
    x["return"] = function (a) {
        return new ha("return", this.evaluate(a))
    };
    x.setProperty = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (null === a || void 0 === a) throw"TypeError: Can't set property " + b + " of " + a + ".";
        (a instanceof v || a instanceof g || a instanceof ua) && a.set(b, c);
        return c
    };
    x.ue = function (a, b) {
        return this.evaluate(a) - this.evaluate(b)
    };
    x["switch"] = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!qa(b) || !qa(c)) throw"Error: Malformed switch instruction.";
        for (var d, e = !1, f = 0; f < b.length; f++) if (e || a === this.evaluate(b[f])) if (d = this.evaluate(c[f]), d instanceof ha) {
            var h = d.w;
            if ("break" == h) return;
            if ("return" == h || "continue" == h) return d
        } else e = !0;
        if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof ha && ("return" == d.w || "continue" == d.w))) return d
    };
    x.we = function (a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    };
    x["typeof"] = function (a) {
        a = this.evaluate(a);
        return a instanceof v ? "function" : typeof a
    };
    x.undefined = function () {
    };
    x["var"] = function (a) {
        for (var b = this.B(), c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" != typeof d || b.add(d, void 0)
        }
    };
    x["while"] = function (a, b, c, d) {
        var e, f = this.evaluate(d);
        if (this.evaluate(c) && (e = this.xa(f), e instanceof ha)) {
            if ("break" == e.w) return;
            if ("return" == e.w) return e
        }
        for (; this.evaluate(a);) {
            e = this.xa(f);
            if (e instanceof ha) {
                if ("break" == e.w) break;
                if ("return" == e.w) return e
            }
            this.evaluate(b)
        }
    };
    var Ka = function () {
        this.ec = !1;
        this.W = new w;
        Ja(this);
        this.ec = !0
    };
    Ka.prototype.Ld = function () {
        return this.ec
    };
    Ka.prototype.isInitialized = Ka.prototype.Ld;
    Ka.prototype.O = function (a) {
        return this.W.wb(a)
    };
    Ka.prototype.execute = Ka.prototype.O;
    Ka.prototype.J = function () {
        this.W.J()
    };
    Ka.prototype.makeImmutable = Ka.prototype.J;
    var Ja = function (a) {
        function b(a, b) {
            e.W.Tb(a, String(b))
        }

        function c(a, b) {
            e.W.T(String(d[a]), b)
        }

        var d = x.fc, e = a;
        b("control", d.CONTROL);
        b("fn", d.FN);
        b("list", d.CREATE_ARRAY);
        b("map", d.CREATE_OBJECT);
        b("undefined", d.UNDEFINED);
        c("ADD", x.add);
        c("AND", x.and);
        c("APPLY", x.apply);
        c("ASSIGN", x.assign);
        c("BREAK", x["break"]);
        c("CASE", x["case"]);
        c("CONTINUE", x["continue"]);
        c("DEFAULT", x["case"]);
        c("DEFN", x.nd);
        c("DIVIDE", x.qd);
        c("EQUALS", x.td);
        c("EXPRESSION_LIST", x.ud);
        c("FOR_IN", x.xd);
        c("GET", x.get);
        c("GET_INDEX",
            x.cc);
        c("GET_PROPERTY", x.cc);
        c("GREATER_THAN", x.Ad);
        c("GREATER_THAN_EQUALS", x.Bd);
        c("IDENTITY_EQUALS", x.Fd);
        c("IDENTITY_NOT_EQUALS", x.Gd);
        c("IF", x["if"]);
        c("LESS_THAN", x.Od);
        c("LESS_THAN_EQUALS", x.Pd);
        c("MODULUS", x.Rd);
        c("MULTIPLY", x.multiply);
        c("NEGATE", x.Sd);
        c("NOT", x.Td);
        c("NOT_EQUALS", x.Ud);
        c("NULL", x["null"]);
        c("OR", x.or);
        c("POST_DECREMENT", x.uc);
        c("POST_INCREMENT", x.uc);
        c("PRE_DECREMENT", x.vc);
        c("PRE_INCREMENT", x.vc);
        c("QUOTE", x.quote);
        c("RETURN", x["return"]);
        c("SET_PROPERTY", x.setProperty);
        c("SUBTRACT", x.ue);
        c("SWITCH", x["switch"]);
        c("TERNARY", x.we);
        c("TYPEOF", x["typeof"]);
        c("VAR", x["var"]);
        c("WHILE", x["while"])
    };
    Ka.prototype.T = function (a, b) {
        this.W.T(a, b)
    };
    Ka.prototype.addInstruction = Ka.prototype.T;
    Ka.prototype.I = function () {
        return this.W.I()
    };
    Ka.prototype.getQuota = Ka.prototype.I;
    Ka.prototype.Va = function () {
        this.W.Va()
    };
    Ka.prototype.resetQuota = Ka.prototype.Va;
    var La = function () {
        this.Ra = {}
    };
    La.prototype.get = function (a) {
        return this.Ra.hasOwnProperty(a) ? this.Ra[a] : void 0
    };
    La.prototype.add = function (a, b) {
        if (this.Ra.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
        var c = new v(a, function () {
            for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++) a[c] = this.evaluate(a[c]);
            return b.apply(this, a)
        });
        c.J();
        this.Ra[a] = c
    };
    La.prototype.addAll = function (a) {
        for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b])
    };
    var y = window, A = document, Ma = navigator, Na = function (a, b) {
            var c = y[a];
            y[a] = void 0 === c ? b : c;
            return y[a]
        }, Oa = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, B = function (a, b, c) {
            var d = A.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Oa(d, b);
            c && (d.onerror = c);
            ea() && d.setAttribute("nonce", ea());
            var e = A.getElementsByTagName("script")[0] || A.body || A.head;
            e.parentNode.insertBefore(d, e);
            return d
        },
        Pa = function (a, b) {
            var c = A.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = A.body && A.body.lastChild || A.body || A.head;
            d.parentNode.insertBefore(c, d);
            Oa(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, Qa = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a
        }, Ra = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, Sa = function (a, b,
                          c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, D = function (a) {
            y.setTimeout(a, 0)
        }, Ua = function (a) {
            var b = A.getElementById(a);
            if (b && Ta(b, "id") != a) for (var c = 1; c < document.all[a].length; c++) if (Ta(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        }, Ta = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, Wa = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
                " "));
            return b
        }, Xa = function (a) {
            var b = A.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        }, Ya = function (a) {
            Ma.sendBeacon && Ma.sendBeacon(a) || Qa(a)
        };
    var Za = function (a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (decodeURIComponent(e[0]).replace(/\+/g, " ") == b) return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g, " ")
        }
    }, G = function (a, b, c, d, e) {
        var f, h = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }, k = h(a.protocol) || h(y.location.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "protocol":
                f = k;
                break;
            case "host":
                f = (a.hostname || y.location.hostname).split(":")[0].toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(f);
                    l && l[0] && (f = f.substr(l[0].length))
                }
                break;
            case "port":
                f = String(1 * (a.hostname ? a.port : y.location.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                break;
            case "path":
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= ra(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Za(f, e));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, $a = function (a) {
        var b = "";
        a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
        return b
    }, N = function (a) {
        var b = A.createElement("a");
        a && (b.href = a);
        return b
    };
    var cb = function () {
        this.sc = new Ka;
        var a = new La;
        a.addAll(ab());
        bb(this, function (b) {
            return a.get(b)
        })
    }, ab = function () {
        return {
            callInWindow: db,
            encodeURI: encodeURI,
            encodeURIComponent: encodeURIComponent,
            getCurrentUrl: eb,
            getInWindow: fb,
            getReferrer: gb,
            getUrlComponent: hb,
            getUrlFragment: ib,
            isPlainObject: jb,
            loadIframe: kb,
            loadJavaScript: lb,
            removeUrlFragment: nb,
            replaceAll: ob,
            sendTrackingBeacon: pb,
            setInWindow: qb
        }
    };
    cb.prototype.O = function (a) {
        return this.sc.O(a)
    };
    cb.prototype.execute = cb.prototype.O;
    var bb = function (a, b) {
        a.sc.T("require", b)
    };

    function db(a, b) {
        for (var c = a.split("."), d = y, e = d[c[0]], f = 1; e && f < c.length; f++) d = e, e = e[c[f]];
        if ("function" == wa(e)) {
            var h = [];
            for (f = 1; f < arguments.length; f++) h.push(Aa(arguments[f]));
            e.apply(d, h)
        }
    }

    function eb() {
        return y.location.href
    }

    function fb(a, b, c) {
        for (var d = a.split("."), e = y, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e || null === e) return;
        b && (void 0 === e[d[f]] || c && !e[d[f]]) && (e[d[f]] = Aa(b));
        return Ba(e[d[f]])
    }

    function gb() {
        return A.referrer
    }

    function hb(a, b, c, d, e) {
        var f;
        if (d && d instanceof g) {
            f = [];
            for (var h = 0; h < d.length(); h++) {
                var k = d.get(h);
                "string" == typeof k && f.push(k)
            }
        }
        return G(N(a), b, c, f, e)
    }

    function ib(a) {
        return G(N(a), "fragment")
    }

    function jb(a) {
        return a instanceof ua
    }

    function kb(a, b) {
        var c = this.B();
        Pa(a, function () {
            b instanceof v && b.m(c)
        })
    }

    var rb = {};

    function lb(a, b, c, d) {
        var e = this.B(), f = function () {
            b instanceof v && b.m(e)
        }, h = function () {
            c instanceof v && c.m(e)
        };
        d ? rb[d] ? (rb[d].onSuccess.push(f), rb[d].onFailure.push(h)) : (rb[d] = {
            onSuccess: [f],
            onFailure: [h]
        }, f = function () {
            for (var a = rb[d].onSuccess, b = 0; b < a.length; b++) D(a[b]);
            a.push = function (a) {
                D(a);
                return 0
            }
        }, h = function () {
            for (var a = rb[d].onFailure, b = 0; b < a.length; b++) D(a[b]);
            rb[d] = null
        }, B(a, f, h)) : B(a, f, h)
    }

    function nb(a) {
        return $a(N(a))
    }

    function ob(a, b, c) {
        return a.replace(new RegExp(b, "g"), c)
    }

    function pb(a, b, c) {
        var d = this.B();
        Qa(a, function () {
            b instanceof v && b.m(d)
        }, function () {
            c instanceof v && c.m(d)
        })
    }

    function qb(a, b, c) {
        for (var d = a.split("."), e = y, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e) return !1;
        return void 0 === e[d[f]] || c ? (e[d[f]] = Aa(b), !0) : !1
    };var Ob, Pb = [], Qb = [], Rb = [], Sb = [], Tb = [], Ub = {}, Vb, Wb, Xb, Yb = function (a) {
        var b = a["function"];
        if (!b) throw"Error: No function name given for function call.";
        var c = !!Ub[b], d = {}, e;
        for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
        return c ? Ub[b](d) : Ob(b, d)
    }, cc = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
        return d
    }, bc = function (a, b, c) {
        if (qa(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(bc(a[e],
                        b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var h = Pb[f];
                    if (!h || b(h)) return;
                    c[f] = !0;
                    try {
                        var k = cc(h, b, c);
                        d = Yb(k);
                        Xb && (d = Xb.hd(d, k))
                    } catch (t) {
                        d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var l = 1; l < a.length; l += 2) d[bc(a[l], b, c)] = bc(a[l + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var m = !1, n = 1; n < a.length; n++) {
                        var p = bc(a[n], b, c);
                        Wb && (m = m || p === Wb.Ia);
                        d.push(p)
                    }
                    return Wb && m ? Wb.jd(d) : d.join("");
                case "escape":
                    d = bc(a[1], b, c);
                    if (Wb && qa(a[1]) && "macro" === a[1][0] && Wb.Md(a)) return Wb.ae(d);
                    d = String(d);
                    for (var q =
                        2; q < a.length; q++) sb[a[q]] && (d = sb[a[q]](d));
                    return d;
                case "tag":
                    var r = a[1];
                    if (!Sb[r]) throw Error("Unable to resolve tag reference " + r + ".");
                    return d = {Zb: a[2], index: r};
                case "zb":
                    var u = dc({"function": a[1], arg0: a[2], arg1: a[3], ignore_case: a[5]}, b, c);
                    a[4] && (u = !u);
                    return u;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, dc = function (a, b, c) {
        try {
            return Vb(cc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return null
    };
    var ec = null, hc = function (a) {
        function b(a) {
            for (var b = 0; b < a.length; b++) d[a[b]] = !0
        }

        var c = [], d = [];
        ec = fc(a);
        for (var e = 0; e < Qb.length; e++) {
            var f = Qb[e], h = gc(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(f.block || [])
            } else null === h && b(f.block || [])
        }
        var m = [];
        for (e = 0; e < Sb.length; e++) c[e] && !d[e] && (m[e] = !0);
        return m
    }, gc = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = ec(b[c]);
            if (!d) return null === d ? null : !1
        }
        var e = a.unless || [];
        for (c = 0; c < e.length; c++) {
            d = ec(e[c]);
            if (null === d) return null;
            if (d) return !1
        }
        return !0
    };
    var fc = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = dc(Rb[c], a));
            return b[c]
        }
    };
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var kc = {}, lc = null;
    kc.o = "";
    var mc = null, nc = "//www.googletagmanager.com/a?id=" + kc.o + "&cv=1", oc = {}, pc = {},
        qc = A.currentScript ? A.currentScript.src : void 0;
    var rc = function () {
    }, sc = function (a) {
        return "function" == typeof a
    }, tc = function (a) {
        return "string" == wa(a)
    }, uc = function (a) {
        return "number" == wa(a) && !isNaN(a)
    }, vc = function (a) {
        return Math.round(Number(a)) || 0
    }, wc = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, xc = function (a) {
        var b = [];
        if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, yc = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, zc = function (a, b) {
        if (!uc(a) || !uc(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) +
            a)
    }, Ac = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ac.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Ac.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    Ac.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var Bc = function () {
        var a = lc.sequence || 0;
        lc.sequence = a + 1;
        return a
    }, Cc = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Dc = function (a) {
        var b = !1;
        return function () {
            if (!b) try {
                a()
            } catch (c) {
            }
            b = !0
        }
    };
    var O = function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        return {
            Ib: a("convert_case_to"),
            Jb: a("convert_false_to"),
            Kb: a("convert_null_to"),
            Lb: a("convert_true_to"),
            Mb: a("convert_undefined_to"),
            L: a("function"),
            Ac: a("instance_name"),
            Bc: a("live_only"),
            Cc: a("malware_disabled"),
            Dc: a("once_per_event"),
            Ob: a("once_per_load"),
            Pb: a("setup_tags"),
            Ec: a("tag_id"),
            Qb: a("teardown_tags")
        }
    }();
    var Ec = new Ac, Fc = {}, Ic = {
        set: function (a, b) {
            za(Gc(a, b), Fc)
        }, get: function (a) {
            return Hc(a, 2)
        }, reset: function () {
            Ec = new Ac;
            Fc = {}
        }
    }, Hc = function (a, b) {
        return 2 != b ? Ec.get(a) : Jc(a)
    }, Jc = function (a, b, c) {
        var d = a.split(".");
        var e = function (a, b) {
            for (var c = 0; void 0 !== a && c < d.length; c++) {
                if (null === a) return !1;
                a = a[d[c]]
            }
            return void 0 !== a || 1 < c ? a : b.length ? e(Kc(b.pop()), b) : Lc(d)
        };
        return e(Fc.eventModel, [b, c]);
        return Lc(d)
    }, Lc = function (a) {
        for (var b = Fc, c = 0; c < a.length; c++) {
            if (null ===
                b) return !1;
            if (void 0 === b) break;
            b = b[a[c]]
        }
        return b
    };
    var Kc = function (a) {
        if (a) {
            var b = Lc(["gtag", "targets", a]);
            return ya(b) ? b : void 0
        }
    }, Mc = function (a, b) {
        function c(a) {
            if (a) for (var b in a) a.hasOwnProperty(b) && (d[b] = null)
        }

        var d = {};
        c(Fc);
        delete d.eventModel;
        c(Kc(a));
        c(Kc(b));
        c(Fc.eventModel);
        var e = [], f;
        for (f in d) d.hasOwnProperty(f) && e.push(f);
        return e
    };
    var Nc = function (a, b) {
        Ec.set(a, b);
        za(Gc(a, b), Fc)
    }, Gc = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Oc = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Pc = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Qc = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels",
            "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Rc = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    };
    var Sc = function (a) {
        var b = Hc("gtm.whitelist");
        b = ["google", "gtagfl", "oid", "op"];
        var c = b && Rc(xc(b), Pc), d = Hc("gtm.blacklist") || Hc("tagTypeBlacklist") || [];
        Oc.test(y.location && y.location.hostname) && (d = xc(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && Rc(xc(d), Qc), f = {};
        return function (h) {
            var k = h && h[O.L];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            var l = pc[k] || [], m = a(k);
            if (b) {
                var n;
                if (n = m) a:{
                    if (0 > ra(c, k)) if (l && 0 < l.length) for (var p = 0; p < l.length; p++) {
                        if (0 > ra(c, l[p])) {
                            n = !1;
                            break a
                        }
                    } else {
                        n = !1;
                        break a
                    }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (d) {
                var r;
                if (!(r = 0 <=
                    ra(e, k))) a:{
                    for (var u = l || [], t = new Ac, z = 0; z < e.length; z++) t.set(e[z], !0);
                    for (z = 0; z < u.length; z++) if (t.get(u[z])) {
                        r = !0;
                        break a
                    }
                    r = !1
                }
                q = r
            }
            return f[k] = !m || q
        }
    };
    var Vc = {
        hd: function (a, b) {
            b[O.Ib] && "string" === typeof a && (a = 1 == b[O.Ib] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(O.Kb) && null === a && (a = b[O.Kb]);
            b.hasOwnProperty(O.Mb) && void 0 === a && (a = b[O.Mb]);
            b.hasOwnProperty(O.Lb) && !0 === a && (a = b[O.Lb]);
            b.hasOwnProperty(O.Jb) && !1 === a && (a = b[O.Jb]);
            return a
        }
    };
    var Wc = function (a) {
        var b = lc.zones;
        !b && a && (b = lc.zones = a());
        return b
    }, Xc = {
        active: !0, isWhitelisted: function () {
            return !0
        }
    };
    var Yc = !1, Zc = 0, $c = [];

    function ad(a) {
        if (!Yc) {
            var b = A.createEventObject, c = "complete" == A.readyState, d = "interactive" == A.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Yc = !0;
                for (var e = 0; e < $c.length; e++) D($c[e])
            }
            $c.push = function () {
                for (var a = 0; a < arguments.length; a++) D(arguments[a]);
                return 0
            }
        }
    }

    function bd() {
        if (!Yc && 140 > Zc) {
            Zc++;
            try {
                A.documentElement.doScroll("left"), ad()
            } catch (a) {
                y.setTimeout(bd, 50)
            }
        }
    }

    var cd = function (a) {
        Yc ? a() : $c.push(a)
    };
    var dd = !1, ed = function () {
        return y.GoogleAnalyticsObject && y[y.GoogleAnalyticsObject]
    };
    var fd = function (a) {
        y.GoogleAnalyticsObject || (y.GoogleAnalyticsObject = a || "ga");
        var b = y.GoogleAnalyticsObject;
        if (!y[b]) {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            y[b] = c
        }
        return y[b]
    }, gd = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = ed();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var kd = function () {
        return "&tc=" + Sb.filter(function (a) {
            return a
        }).length
    }, ld = "0.005000" > Math.random(), md = function () {
        var a = 0, b = 0;
        return {
            Nd: function () {
                if (2 > a) return !1;
                1E3 <= (new Date).getTime() - b && (a = 0);
                return 2 <= a
            }, ie: function () {
                1E3 <= (new Date).getTime() - b && (a = 0);
                a++;
                b = (new Date).getTime()
            }
        }
    }, nd = "", od = function () {
        nd = [nc, "&v=3&t=t", "&pid=" + zc(), "&rv=86"].join("")
    }, pd = {}, qd = "", rd = void 0, sd = {}, td = {}, ud = void 0, vd = null, wd = 1E3, xd = function () {
        var a = rd;
        return void 0 === a ? "" : [nd,
            pd[a] ? "" : "&es=1", sd[a], kd(), qd, "&z=0"].join("")
    }, yd = function () {
        ud && (y.clearTimeout(ud), ud = void 0);
        void 0 === rd || pd[rd] && !qd || (td[rd] || vd.Nd() || 0 >= wd-- ? td[rd] = !0 : (vd.ie(), Qa(xd()), pd[rd] = !0, qd = ""))
    }, zd = function (a, b, c) {
        if (ld && !td[a] && b) {
            a !== rd && (yd(), rd = a);
            var d = c + String(b[O.L] || "").replace(/_/g, "");
            qd = qd ? qd + "." + d : "&tr=" + d;
            ud || (ud = y.setTimeout(yd, 500));
            2022 <= xd().length && yd()
        }
    };

    function Ad(a, b, c, d, e, f) {
        var h = Sb[a], k = Bd(a, b, c, d, e, f);
        if (!k) return null;
        var l = bc(h[O.Pb], f.Y, []);
        if (l && l.length) {
            var m = l[0];
            k = Ad(m.index, b, k, 1 === m.Zb ? e : k, e, f)
        }
        return k
    }

    function Bd(a, b, c, d, e, f) {
        function h() {
            var b = cc(k, f.Y);
            b.vtp_gtmOnSuccess = function () {
                zd(f.id, Sb[a], "5");
                c()
            };
            b.vtp_gtmOnFailure = function () {
                zd(f.id, Sb[a], "6");
                d()
            };
            b.vtp_gtmTagId = k.tag_id;
            if (k[O.Cc]) d(); else {
                zd(f.id, k, "1");
                try {
                    Yb(b)
                } catch (z) {
                    zd(f.id,
                        k, "7");
                    e()
                }
            }
        }

        var k = Sb[a];
        if (f.Y(k)) return null;
        var l = bc(k[O.Qb], f.Y, []);
        if (l && l.length) {
            var m = l[0], n = Ad(m.index, b, c, d, e, f);
            if (!n) return null;
            c = n;
            d = 2 === m.Zb ? e : n
        }
        if (k[O.Ob] || k[O.Dc]) {
            var p = k[O.Ob] ? Tb : b, q = c, r = d;
            if (!p[a]) {
                h = Dc(h);
                var u = Cd(a, p, h);
                c = u.S;
                d = u.ka
            }
            return function () {
                p[a](q, r)
            }
        }
        return h
    }

    function Cd(a, b, c) {
        var d = [], e = [];
        b[a] = Dd(d, e, c);
        return {
            S: function () {
                b[a] = Ed;
                for (var c = 0; c < d.length; c++) d[c]()
            }, ka: function () {
                b[a] = Fd;
                for (var c = 0; c < e.length; c++) e[c]()
            }
        }
    }

    function Dd(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ed(a) {
        a()
    }

    function Fd(a, b) {
        b()
    };

    function Gd(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return Dc(function () {
                    b++;
                    d && b >= c && a()
                })
            }, Pc: function () {
                d = !0;
                b >= c && a()
            }
        }
    }

    function Hd(a, b) {
        if (!ld) return;
        var c = function (a) {
            var d = b.Y(Sb[a]) ? "3" : "4", f = bc(Sb[a][O.Pb], b.Y, []);
            f && f.length && c(f[0].index);
            zd(b.id, Sb[a], d);
            var h = bc(Sb[a][O.Qb], b.Y, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var Id = !1;
    var Jd = function (a, b) {
        var c = {};
        c[O.L] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        for (d in void 0) (void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
        Sb.push(c);
        return Sb.length - 1
    };
    var Kd = "allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");
    var Ld = /[A-Z]+/, Md = /\s/, Nd = function (a) {
        if (tc(a) && (a = a.trim(), !Md.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Ld.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], ia: d}
                }
            }
        }
    };
    var Od = null, Pd = {}, Qd = {}, Rd;

    function Sd() {
        Od = Od || !lc.gtagRegistered;
        lc.gtagRegistered = !0;
        return Od
    }

    var Td = function (a, b) {
        var c = {event: a};
        b && (c.eventModel = za(b, void 0), b.event_callback && (c.eventCallback = b.event_callback), b.event_timeout && (c.eventTimeout = b.event_timeout));
        return c
    };

    function Ud(a) {
        if (void 0 === Qd[a.id]) {
            var b;
            if ("UA" == a.prefix) b = Jd("gtagua", {trackingId: a.id}); else if ("AW" == a.prefix) b = Jd("gtagaw", {conversionId: a}); else if ("DC" == a.prefix) b = Jd("gtagfl", {targetId: a.id}); else if ("GF" == a.prefix) b = Jd("gtaggf", {conversionId: a}); else if ("G" == a.prefix) b = Jd("get", {
                trackingId: a.id,
                isAutoTag: !0
            }); else return;
            if (!Rd) {
                var c = {name: "send_to", dataLayerVersion: 2}, d = {};
                d[O.L] = "__v";
                for (var e in c) c.hasOwnProperty(e) && (d["vtp_" + e] = c[e]);
                Pb.push(d);
                Rd = ["macro", Pb.length - 1]
            }
            var f = {
                arg0: Rd,
                arg1: a.id, ignore_case: !1
            };
            f[O.L] = "_lc";
            Rb.push(f);
            var h = {"if": [Rb.length - 1], add: [b]};
            h["if"] && (h.add || h.block) && Qb.push(h);
            Qd[a.id] = b
        }
    }

    var Wd = {
        event: function (a) {
            var b = a[1];
            if (tc(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!ya(a[2])) return;
                    c = a[2]
                }
                var d = Td(b, c);
                var e;
                var f = c, h = Hc("gtag.fields.send_to", 2);
                tc(h) || (h = "send_to");
                var k = f && f[h];
                void 0 === k && (k = Hc(h, 2), void 0 === k && (k = "default"));
                if (tc(k) || qa(k)) {
                    for (var l, m = k.toString().replace(/\s+/g, "").split(","), n = [], p = 0; p < m.length; p++) 0 <= m[p].indexOf("-") ? n.push(m[p]) : n = n.concat(Pd[m[p]] || []);
                    l = n;
                    for (var q = {}, r = 0; r < l.length; ++r) {
                        var u = Nd(l[r]);
                        u && (q[u.id] =
                            u)
                    }
                    var t = [], z;
                    for (z in q) if (q.hasOwnProperty(z)) {
                        var I = q[z];
                        "AW" === I.prefix && I.ia[1] && t.push(I.containerId)
                    }
                    for (var H = 0; H < t.length; ++H) delete q[t[H]];
                    var C = [], P;
                    for (P in q) q.hasOwnProperty(P) && C.push(q[P]);
                    e = C
                } else e = void 0;
                if (!e) return;
                var E = Sd();
                E || Vd();
                for (var L = [], F = 0; E && F < e.length; F++) {
                    var K = e[F];
                    L.push(K.id);
                    Ud(K)
                }
                d.eventModel = d.eventModel || {};
                0 < e.length ? d.eventModel.send_to = L.join() : delete d.eventModel.send_to;
                return d
            }
        }, set: function (a) {
            var b;
            2 == a.length && ya(a[1]) ?
                b = za(a[1], void 0) : 3 == a.length && tc(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b.eventModel = za(b, void 0), b.event = "gtag.set", b._clear = !0, b
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) return {event: "gtm.js", "gtm.start": a[1].getTime()}
        }, config: function (a) {
            var b = a[2] || {};
            if (2 > a.length || !tc(a[1]) || !ya(b)) return;
            var c = Nd(a[1]);
            if (!c) return;
            Sd() ? Ud(c) : Vd();
            var d = c.id, e;
            for (e in Pd) if (Pd.hasOwnProperty(e)) {
                var f = ra(Pd[e], d);
                0 <= f && Pd[e].splice(f, 1)
            }
            var h = c.id, k = b.groups || "default";
            k = k.toString().split(",");
            for (var l = 0; l < k.length; l++) Pd[k[l]] = Pd[k[l]] || [], Pd[k[l]].push(h);
            delete b.groups;
            Nc("gtag.targets." + c.id, void 0);
            Nc("gtag.targets." + c.id, za(b, void 0));
            var m = {};
            m.send_to = c.id;
            return Td("gtag.config", m);
        }
    }, Vd = Dc(function () {
    });
    var Xd = !1, Yd = [];

    function Zd() {
        if (!Xd) {
            Xd = !0;
            for (var a = 0; a < Yd.length; a++) D(Yd[a])
        }
    };var $d = [], ae = !1, ge = function (a) {
        var b = a.eventCallback, c = Dc(function () {
            sc(b) && D(function () {
                b(kc.o)
            })
        }), d = a.eventTimeout;
        d && y.setTimeout(c, Number(d));
        return c
    }, he = function () {
        for (var a = !1; !ae && 0 < $d.length;) {
            ae = !0;
            delete Fc.eventModel;
            var b = $d.shift();
            if (sc(b)) try {
                b.call(Ic)
            } catch (be) {
            } else if (qa(b)) {
                var c = b;
                if (tc(c[0])) {
                    var d = c[0].split("."), e = d.pop(), f = c.slice(1), h = Hc(d.join("."), 2);
                    if (void 0 !== h && null !== h) try {
                        h[e].apply(h, f)
                    } catch (be) {
                    }
                }
            } else {
                var k = b;
                if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                    Object.prototype.hasOwnProperty.call(k, "callee"))) {
                    a:{
                        var l = b;
                        if (l.length && tc(l[0])) {
                            var m = Wd[l[0]];
                            if (m) {
                                b = m(l);
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) {
                        ae = !1;
                        continue
                    }
                }
                var n;
                var p = void 0, q = b, r = q._clear;
                for (p in q) q.hasOwnProperty(p) && "_clear" !== p && (r && Nc(p, void 0), Nc(p, q[p]));
                var u = q.event;
                if (u) {
                    var t = q["gtm.uniqueEventId"];
                    t || (t = Bc(), q["gtm.uniqueEventId"] = t, Nc("gtm.uniqueEventId", t));
                    mc = u;
                    var z;
                    var I, H, C = q, P = C.event, E = C["gtm.uniqueEventId"], L = lc.zones;
                    H = L ? L.checkState(kc.o, E) : Xc;
                    if (H.active) {
                        var F = ge(C);
                        c:{
                            var K =
                                H.isWhitelisted;
                            if ("gtm.js" == P) {
                                if (Id) {
                                    I = !1;
                                    break c
                                }
                                Id = !0
                            }
                            var M = E, ia = P;
                            if (ld && !td[M] && rd !== M) {
                                yd();
                                rd = M;
                                qd = "";
                                var J = sd, R = M, S, Q = ia;
                                S = 0 === Q.indexOf("gtm.") ? encodeURIComponent(Q) : "*";
                                J[R] = "&e=" + S + "&eid=" + M;
                                ud || (ud = y.setTimeout(yd, 500))
                            }
                            var T = Sc(K), X = {id: E, name: P, ad: F || rc, Y: T, Wa: hc(T)};
                            for (var Tc, Zb = X, ce = Gd(Zb.ad), Qf = [], $b = [], mb = 0; mb < Sb.length; mb++) if (Zb.Wa[mb]) {
                                var Rf = Sb[mb];
                                var Db = ce.add();
                                try {
                                    var de = Ad(mb, Qf, Db, Db, Db, Zb);
                                    de ? $b.push(de) : (Hd(mb, Zb), Db())
                                } catch (be) {
                                    Db()
                                }
                            }
                            ce.Pc();
                            for (var Uc = 0; Uc < $b.length; Uc++) $b[Uc]();
                            Tc = 0 < $b.length;
                            if ("gtm.js" === P || "gtm.sync" === P) d:{
                            }
                            if (Tc) {
                                for (var Sf = {
                                    __cl: !0,
                                    __evl: !0,
                                    __fsl: !0,
                                    __hl: !0,
                                    __jel: !0,
                                    __lcl: !0,
                                    __sdl: !0,
                                    __tl: !0,
                                    __ytl: !0
                                }, ac = 0; ac < X.Wa.length; ac++) if (X.Wa[ac]) {
                                    var fe = Sb[ac];
                                    if (fe && !Sf[fe[O.L]]) {
                                        I = !0;
                                        break c
                                    }
                                }
                                I = !1
                            } else I = Tc
                        }
                        z = I ? !0 : !1
                    } else z = !1;
                    mc = null;
                    n = z
                } else n = !1;
                a = n || a
            }
            ae = !1
        }
        return !a
    }, ie = function () {
        var a = he();
        try {
            var b = y["dataLayer"].hide;
            if (b && void 0 !== b[kc.o] && b.end) {
                b[kc.o] = !1;
                var c = !0, d;
                for (d in b) if (b.hasOwnProperty(d) && !0 ===
                    b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch (e) {
        }
        return a
    }, je = function () {
        var a = Na("dataLayer", []), b = Na("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        $c.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        Yd.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for ($d.push.apply($d, b); 300 < this.length;) this.shift();
            return he()
        };
        $d.push.apply($d, a.slice(0));
        D(ie)
    };
    var ke = {};
    ke.Ia = new String("undefined");
    ke.ab = {};
    var le = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ke.Ia ? b : a[d]);
            return c.join("")
        }
    };
    le.prototype.toString = function () {
        return this.resolve("undefined")
    };
    le.prototype.valueOf = le.prototype.toString;
    ke.jd = function (a) {
        return new le(a)
    };
    var me = {};
    ke.je = function (a, b) {
        var c = Bc();
        me[c] = [a, b];
        return c
    };
    ke.Vb = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var c = me[a];
            if (c && "function" === typeof c[b]) c[b]();
            me[a] = void 0
        }
    };
    ke.Md = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    ke.ae = function (a) {
        if (a === ke.Ia) return a;
        var b = Bc();
        ke.ab[b] = a;
        return 'google_tag_manager["' + kc.o + '"].macro(' + b + ")"
    };
    ke.Fc = le;
    var ne = new Ac, oe = function (a, b) {
        function c(a) {
            var b = N(a), c = G(b, "protocol"), d = G(b, "host", !0), e = G(b, "port"),
                f = G(b, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
            return [c, d, e, f]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    };

    function pe(a) {
        var b = a.arg0, c = a.arg1;
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var d;
                a:{
                    if (b) {
                        var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var f = 0; f < e.length; f++) if (b[e[f]]) {
                                d = b[e[f]](c);
                                break a
                            }
                        } catch (u) {
                        }
                    }
                    d = !1
                }
                return d;
            case "_ew":
                var h, k;
                h = String(b);
                k = String(c);
                var l = h.length - k.length;
                return 0 <= l && h.indexOf(k, l) == l;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= ra(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var p = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + p, r = ne.get(q);
                    r || (r = new RegExp(c, p), ne.set(q, r));
                    n = r.test(b)
                } catch (u) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return oe(b, c)
        }
        return !1
    };

    function qe(a, b, c, d) {
        return (d || "https:" == y.location.protocol ? a : b) + c
    }

    function re(a, b) {
        for (var c = b || (a instanceof g ? new g : new ua), d = a.R(), e = 0; e < d.length(); e++) {
            var f = d.get(e);
            if (a.has(f)) {
                var h = a.get(f);
                h instanceof g ? (c.get(f) instanceof g || c.set(f, new g), re(h, c.get(f))) : h instanceof ua ? (c.get(f) instanceof ua || c.set(f, new ua), re(h, c.get(f))) : c.set(f, h)
            }
        }
        return c
    }

    function se() {
        return kc.o
    }

    function te() {
        return (new Date).getTime()
    }

    function ue(a, b) {
        return Ba(Hc(a, b || 2))
    }

    function ve() {
        return mc
    }

    function we(a) {
        return Xa('<a href="' + a + '"></a>')[0].href
    }

    function xe(a) {
        return vc(Aa(a))
    }

    function ye(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    }

    function ze(a, b) {
        return zc(a, b)
    }

    function Ae(a, b, c) {
        if (!(a instanceof g)) return null;
        for (var d = new ua, e = !1, f = 0; f < a.length(); f++) {
            var h = a.get(f);
            h instanceof ua && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
        }
        return e ? d : null
    }

    var Be = function () {
        var a = new La;
        a.addAll(ab());
        a.addAll({
            buildSafeUrl: qe,
            decodeHtmlUrl: we,
            copy: re,
            generateUniqueNumber: Bc,
            getContainerId: se,
            getCurrentTime: te,
            getDataLayerValue: ue,
            getEventName: ve,
            makeInteger: xe,
            makeString: ye,
            randomInteger: ze,
            tableToMap: Ae
        });
        return function (b) {
            return a.get(b)
        }
    };
    var Ce = new cb, De = function () {
        var a = data.runtime || [];
        Ob = function (a, b) {
            var c = new ua, d;
            for (d in b) b.hasOwnProperty(d) && c.set(d, Ba(b[d]));
            var e = Ce.O([a, c]);
            e instanceof ha && "return" === e.w && (e = e.getData());
            return Aa(e)
        };
        Vb = pe;
        bb(Ce, Be());
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (!qa(c) || 3 > c.length) {
                if (0 == c.length) continue;
                break
            }
            Ce.O(c)
        }
    };
    var Ee = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Fe = function (a) {
        return encodeURIComponent(a)
    }, Ge = function (a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return !1;
        var c = G(N(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var U = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }, He = function (a, b) {
        za(a, b)
    }, Ie = function (a) {
        return vc(a)
    }, Je = function (a, b) {
        return ra(a, b)
    };
    var Ke = function (a) {
        var b = {
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || Ta(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
        };
        b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
        return b
    }, Le = function (a) {
        lc.hasOwnProperty("autoEventsSettings") || (lc.autoEventsSettings = {});
        var b = lc.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Me = function (a, b, c, d) {
        var e = Le(a), f = Cc(e, b, d);
        e[b] =
            c(f)
    }, Ne = function (a, b, c) {
        var d = Le(a);
        return Cc(d, b, c)
    };
    var Oe = /(^|\.)doubleclick\.net$/i, Pe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Qe = function (a, b, c) {
        for (var d = String(b || A.cookie).split(";"), e = [], f = 0; f < d.length; f++) {
            var h = d[f].split("="), k = yc(h[0]);
            if (k && k == a) {
                var l = yc(h.slice(1).join("="));
                l && !1 !== c && (l = decodeURIComponent(l));
                e.push(l)
            }
        }
        return e
    }, Re = function (a, b, c, d, e, f) {
        f && (b = encodeURIComponent(b));
        var h = a + "=" + b + "; ";
        c && (h += "path=" + c + "; ");
        e && (h += "expires=" + e.toGMTString() + "; ");
        var k, l;
        if ("auto" == d) {
            var m = G(y.location, "host", !0).split(".");
            if (4 ==
                m.length && /^[0-9]*$/.exec(m[3])) l = ["none"]; else {
                for (var n = [], p = m.length - 2; 0 <= p; p--) n.push(m.slice(p).join("."));
                n.push("none");
                l = n
            }
        } else l = [d || "none"];
        k = l;
        for (var q = A.cookie, r = 0; r < k.length; r++) {
            var u = h, t = k[r], z = c;
            if (Oe.test(y.location.hostname) || "/" == z && Pe.test(t)) break;
            "none" != k[r] && (u += "domain=" + k[r] + ";");
            A.cookie = u;
            if (q != A.cookie || 0 <= ra(Qe(a), b)) break
        }
    };
    var Se = !1;
    if (A.querySelectorAll) try {
        var Te = A.querySelectorAll(":root");
        Te && 1 == Te.length && Te[0] == A.documentElement && (Se = !0)
    } catch (a) {
    }
    var Ue = Se;
    var Ve = function (a) {
        for (var b = [], c = document.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        return b
    }, Ye = function (a, b, c, d) {
        var e = We(a, d);
        if (1 === e.length) return e[0].id;
        if (0 !== e.length) {
            e = Xe(e, function (a) {
                return a.rd
            }, b);
            if (1 === e.length) return e[0].id;
            e = Xe(e, function (a) {
                return a.Zd
            }, c);
            return e[0] ? e[0].id : void 0
        }
    }, af = function (a, b, c, d, e) {
        c = void 0 === c ? "/" : c;
        var f = d = void 0 === d ? "auto" : d, h = c;
        if (Ze.test(document.location.hostname) || "/" ===
            h && $e.test(f)) return !1;
        var k = b;
        k && 1200 < k.length && (k = k.substring(0, 1200));
        b = k;
        var l = a + "=" + b + "; path=" + c + "; ";
        void 0 !== e && (l += "expires=" + (new Date((new Date).getTime() + e)).toGMTString() + "; ");
        if ("auto" === d) {
            var m = !1, n;
            a:{
                var p = [], q = document.location.hostname.split(".");
                if (4 === q.length) {
                    var r = q[q.length - 1];
                    if (parseInt(r, 10).toString() === r) {
                        n = ["none"];
                        break a
                    }
                }
                for (var u = q.length - 2; 0 <= u; u--) p.push(q.slice(u).join("."));
                p.push("none");
                n = p
            }
            for (var t = n, z = 0; z < t.length && !m; z++) m = af(a, b, c, t[z], e);
            return m
        }
        d &&
        "none" !== d && (l += "domain=" + d + ";");
        var I = document.cookie;
        document.cookie = l;
        return I != document.cookie || 0 <= Ve(a).indexOf(b)
    };

    function Xe(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h], l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function We(a, b) {
        for (var c = [], d = Ve(a), e = 0; e < d.length; e++) {
            var f = d[e].split("."), h = f.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = f.shift();
                k && (k = k.split("-"), c.push({id: f.join("."), rd: 1 * k[0] || 1, Zd: 1 * k[1] || 1}))
            }
        }
        return c
    }

    var $e = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Ze = /(^|\.)doubleclick\.net$/i;
    var bf = window, cf = document;
    var ff = function (a) {
        for (var b = bf.navigator.userAgent + (cf.cookie || "") + (cf.referrer || ""), c = b.length, d = bf.history.length; 0 < d;) b += d-- ^ c++;
        var e = 1, f, h, k;
        if (b) for (e = 0, h = b.length - 1; 0 <= h; h--) k = b.charCodeAt(h), e = (e << 6 & 268435455) + k + (k << 14), f = e & 266338304, e = 0 != f ? e ^ f >> 21 : e;
        var l = [Math.round(2147483647 * Math.random()) ^ e & 2147483647, Math.round(Date.now() / 1E3)].join("."),
            m = "" + df(void 0), n = ef(void 0);
        1 < n && (m += "-" + n);
        return [a, m, l].join(".")
    }, gf = function (a, b, c, d) {
        var e = df(b);
        return Ye(a, e, ef(c), d)
    };

    function df(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }

    function ef(a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };var hf = ["1"], jf = {}, mf = function (a, b, c) {
        b = void 0 === b ? "auto" : b;
        c = void 0 === c ? "/" : c;
        var d = kf(void 0 === a ? "_gcl" : a);
        if (!jf[d] && !lf(d, b, c)) {
            var e = ff("1");
            af(d, e, c, b, 7776E6);
            lf(d, b, c)
        }
    };

    function lf(a, b, c) {
        var d = gf(a, b, c, hf);
        d && (jf[a] = d);
        return d
    }

    function kf(a) {
        return (void 0 === a ? "_gcl" : a) + "_au"
    };var nf = function (a) {
        for (var b = [], c = A.cookie.split(";"), d = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push(f[1])
        }
        var h = [];
        if (!b || 0 == b.length) return h;
        for (var k = 0; k < b.length; k++) {
            var l = b[k].split(".");
            3 == l.length && "GCL" == l[0] && l[1] && h.push(l[2])
        }
        return h
    };
    var of = /^\w+$/, pf = /^[\w-]+$/, qf = /^\d+\.fls\.doubleclick\.net$/;

    function rf(a) {
        return a && "string" == typeof a && a.match(of) ? a : "_gcl"
    }

    function sf(a) {
        if (a) {
            if ("string" == typeof a) {
                var b = rf(a);
                return {va: b, sa: b, ya: b}
            }
            if (a && "object" == typeof a) return {va: rf(a.dc), sa: rf(a.aw), ya: rf(a.gf)}
        }
        return {va: "_gcl", sa: "_gcl", ya: "_gcl"}
    }

    function tf(a) {
        var b = N(y.location.href), c = G(b, "host", !1);
        if (c && c.match(qf)) {
            var d = G(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function uf(a) {
        return a.filter(function (a) {
            return pf.test(a)
        })
    }

    var wf = function (a) {
        var b = tf("gclaw");
        if (b) return b.split(".");
        var c = sf(a);
        if ("_gcl" == c.sa) {
            var d = vf();
            if (d && (null == d.F || "aw.ds" == d.F)) return [d.X]
        }
        return uf(nf(c.sa + "_aw"))
    }, xf = function (a) {
        var b = tf("gcldc");
        if (b) return b.split(".");
        var c = sf(a);
        if ("_gcl" == c.va) {
            var d = vf();
            if (d && ("ds" == d.F || "aw.ds" == d.F)) return [d.X]
        }
        return uf(nf(c.va + "_dc"))
    };

    function vf() {
        var a = N(y.location.href), b = G(a, "query", !1, void 0, "gclid"), c = G(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = G(a, "fragment");
            b = b || Za(d, "gclid");
            c = c || Za(d, "gclsrc")
        }
        return void 0 !== b && b.match(pf) ? {X: b, F: c} : null
    }

    var yf = function () {
        var a = tf("gac");
        if (a) return decodeURIComponent(a);
        for (var b = [], c = A.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({Ab: f[1], value: f[2]})
        }
        var h = {};
        if (b && b.length) for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split(".");
            "1" == l[0] && 3 == l.length && l[1] && (h[b[k].Ab] || (h[b[k].Ab] = []), h[b[k].Ab].push({
                timestamp: l[1],
                X: l[2]
            }))
        }
        var m = [], n;
        for (n in h) if (h.hasOwnProperty(n)) {
            for (var p = [], q = h[n], r = 0; r < q.length; r++) p.push(q[r].X);
            p = uf(p);
            p.length && m.push(n + ":" + p.join(","))
        }
        return m.join(";")
    }, zf = function (a, b, c) {
    };
    var Af;
    a:{
        Af = "g";
        break a;
        Af = "G"
    }
    var Bf = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GTM: Af}, Cf = function (a) {
        var b = kc.o.split("-"), c = b[0].toUpperCase();
        return (Bf[c] || "i") + "86" + (a && "GTM" === c ? b[1] : "")
    };
    var Df = function (a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }, Ef = function (a, b) {
        var c;
        if (2 === b.D) return a("ord", zc(1E11, 1E13)), !0;
        if (3 === b.D) return a("ord", "1"), a("num", zc(1E11, 1E13)), !0;
        if (4 === b.D) return Df(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.D) c = "1"; else if (6 === b.D) c = b.wc; else return !1;
        Df(c) && a("qty", c);
        Df(b.gb) && a("cost", b.gb);
        Df(b.Bb) && a("ord", b.Bb);
        return !0
    }, Ff = encodeURIComponent, Gf = function (a, b) {
        function c(a, b, c) {
            f.hasOwnProperty(a) || (b += "", e += ";" + a + "=" + (c ? b : Ff(b)))
        }

        var d = a.ib,
            e = a.protocol;
        e += a.Xa ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        e += ";src=" + Ff(d) + (";type=" + Ff(a.jb)) + (";cat=" + Ff(a.ra));
        var f = a.ld || {}, h;
        for (h in f) f.hasOwnProperty(h) && (e += ";" + Ff(h) + "=" + Ff(f[h] + ""));
        if (Ef(c, a)) {
            Df(a.Db) && c("u", a.Db);
            Df(a.tran) && c("tran", a.tran);
            c("gtm", Cf());
            !1 === a.Nc && c("npa", "1");
            if (a.fb) {
                var k = xf(a.fa);
                k && k.length && c("gcldc", k.join("."));
                var l = wf(a.fa);
                l && l.length && c("gclaw", l.join("."));
                var m = yf();
                m && c("gac", m);
            }
            Df(a.sb) && c("prd", a.sb, !0);
            for (var p in a.Fa) a.Fa.hasOwnProperty(p) && c(p, a.Fa[p]);
            e += b || "";
            Df(a.Ta) && c("~oref", a.Ta);
            a.Xa ? Pa(e + "?", a.S) : Qa(e + "?", a.S, a.ka)
        } else D(a.ka)
    };
    var If = function (a) {
        if (a) try {
            if (a.conversion_id && a.conversion_data) {
                var b = "/pagead/conversion/" + Hf(a.conversion_id) + "/?", c = Hf(JSON.stringify(a.conversion_data)),
                    d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
                if (a.conversionLinkerEnabled) {
                    var e;
                    a:{
                        var f = sf(a.conversionPrefix);
                        if ("_gcl" == f.ya) {
                            var h = vf();
                            if (h && "gf" == h.F) {
                                e = [h.X];
                                break a
                            }
                        }
                        e = uf(nf(f.ya + "_gf"))
                    }
                    var k = e;
                    k && k.length && (d += "&gclgf=" + Hf(k.join(".")))
                }
                Qa(d, a.onSuccess, a.onFailure)
            }
        } catch (l) {
        }
    }, Hf = function (a) {
        return null ===
        a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
    var Jf = !!y.MutationObserver, Kf = void 0, Lf = function (a) {
        if (!Kf) {
            var b = function () {
                var a = A.body;
                if (a) if (Jf) (new MutationObserver(function () {
                    for (var a = 0; a < Kf.length; a++) D(Kf[a])
                })).observe(a, {childList: !0, subtree: !0}); else {
                    var b = !1;
                    Ra(a, "DOMNodeInserted", function () {
                        b || (b = !0, D(function () {
                            b = !1;
                            for (var a = 0; a < Kf.length; a++) D(Kf[a])
                        }))
                    })
                }
            };
            Kf = [];
            A.body ? b() : D(b)
        }
        Kf.push(a)
    };
    var Yf = "www.googletagmanager.com/gtm.js";
    Yf = "www.googletagmanager.com/gtag/js";
    var Zf = Yf, $f = function (a, b, c, d) {
        Ra(a, b, c, d)
    }, ag = function (a, b) {
        return y.setTimeout(a, b)
    }, bg = function (a, b, c) {
        B(a, b, c)
    }, cg = function () {
        return y.location.href
    }, dg = function (a) {
        return G(N(a), "fragment")
    }, V = function (a, b) {
        return Hc(a, b || 2)
    }, eg = function (a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return y["dataLayer"].push(a)
    }, fg = function (a, b) {
        y[a] = b
    }, W = function (a, b, c) {
        b && (void 0 === y[a] || c && !y[a]) && (y[a] = b);
        return y[a]
    }, gg = function (a, b, c) {
        var d = b, e = c, f = sf(a);
        e = e || "auto";
        d = d || "/";
        var h = vf();
        if (null !=
            h) {
            var k = (new Date).getTime(), l = new Date(k + 7776E6), m = ["GCL", Math.round(k / 1E3), h.X].join(".");
            h.F && "aw.ds" != h.F || Re(f.sa + "_aw", m, d, e, l, !0);
            "aw.ds" != h.F && "ds" != h.F || Re(f.va + "_dc", m, d, e, l, !0);
            "gf" == h.F && Re(f.ya + "_gf", m, d, e, l, !0)
        }
    }, hg = function (a, b) {
        var c;
        a:{
            var d;
            d = 100;
            for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
            for (var h = a, k = 0; h && k <= d; k++) {
                if (e[String(h.tagName).toLowerCase()]) {
                    c = h;
                    break a
                }
                h = h.parentElement
            }
            c = null
        }
        return c
    }, Y = function (a, b, c, d) {
        var e = !d && "http:" == y.location.protocol;
        e && (e = 2 !== ig());
        return (e ?
            b : a) + c
    };
    var jg = function (a) {
        var b = 0;
        return b
    }, kg = function (a) {
    }, lg = function (a) {
        var b = !1;
        return b
    }, mg = function (a, b) {
        var c;
        a:{
            if (a &&
                qa(a)) for (var d = 0; d < a.length; d++) if (a[d] && b(a[d])) {
                c = a[d];
                break a
            }
            c = void 0
        }
        return c
    }, ng = function (a, b, c, d) {
        Me(a, b, c, d)
    }, og = function (a, b, c) {
        return Ne(a, b, c)
    }, pg = function (a) {
        return !!Ne(a, "init", !1)
    }, qg = function (a) {
        Le(a).init = !0
    };
    var ig = function () {
        var a = Zf;
        if (qc) {
            if (0 === qc.toLowerCase().indexOf("https://")) return 2;
            if (0 === qc.toLowerCase().indexOf("http://")) return 3
        }
        a = a.toLowerCase();
        for (var b = "https://" + a, c = "http://" + a, d = 1, e = A.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var h = e[f].src;
            if (h) {
                h = h.toLowerCase();
                if (0 === h.indexOf(c)) return 3;
                1 === d && 0 === h.indexOf(b) && (d = 2)
            }
        }
        return d
    };
    var sg = function (a, b) {
        return Jc(a, b, void 0)
    };
    var tg = function (a, b, c) {
        var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Zf;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        if (b) for (var e in b) b[e] && b.hasOwnProperty(e) && (d += "&" + e + "=" + encodeURIComponent(b[e]));
        var f = Y("https://", "http://", d);
        B(f, void 0, void 0)
    };
    var vg = function (a, b, c) {
        a instanceof ke.Fc && (a = a.resolve(ke.je(b, c)), b = rc);
        return {kb: a, S: b}
    };
    var wg = function (a, b, c) {
        this.n = a;
        this.t = b;
        this.p = c
    }, xg = function () {
        this.c = 1;
        this.e = [];
        this.p = null
    };

    function yg(a) {
        var b = lc, c = b.gss = b.gss || {};
        return c[a] = c[a] || new xg
    }

    var zg = function (a, b) {
        yg(a).p = b
    }, Ag = function (a, b, c) {
        var d = Math.floor((new Date).getTime() / 1E3);
        yg(a).e.push(new wg(b, d, c))
    }, Bg = function (a) {
    };
    var Kg = window, Lg = document, Mg = function (a) {
        var b = Kg._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Kg["ga-disable-" + a]) return !0;
        try {
            var c = Kg.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (m) {
        }
        for (var d = [], e = Lg.cookie.split(";"), f = /^\s*AMP_TOKEN=\s*(.*?)\s*$/, h = 0; h < e.length; h++) {
            var k = e[h].match(f);
            k && d.push(k[1])
        }
        for (var l = 0; l < d.length; l++) if ("$OPT_OUT" == decodeURIComponent(d[l])) return !0;
        return !1
    };
    var Pg = function (a) {
        if (1 === yg(a).c) {
            yg(a).c = 2;
            var b = encodeURIComponent(a);
            B(("http:" != y.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
        }
    }, Qg = function (a, b) {
    };
    var Z = {a: {}};
    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0
        })(function () {
            return mc
        })
    }();

    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = V(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();


    Z.a.gtagaw = ["google"], function () {
        var a = !1, b = !1, c = [],
            d = "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases allow_ad_personalization_signals".split(" "),
            e = function (a) {
                var b = W("google_trackConversion"),
                    c = a.gtm_onFailure;
                "function" == typeof b ? b(a) || c() : c()
            }, f = function () {
                for (; 0 < c.length;) e(c.shift())
            }, h = function () {
                a || (a = !0, bg(Y("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                    f();
                    c = {push: e}
                }, function () {
                    f();
                    a = !1
                }))
            }, k = function (a, c, d, e) {
                if (c) {
                    var f = a.ia[0], h = a.ia[1], k = W("_googWcmImpl", function () {
                        k.q = k.q || [];
                        k.q.push(arguments)
                    });
                    W("_googWcmAk", f);
                    b || (b = !0, bg(Y("https://", "http://", "www.gstatic.com/wcm/loader.js")));
                    var l = {ak: f, cl: h};
                    void 0 === d && (l.autoreplace = c);
                    k(2, d, l, c, e, new Date, e)
                }
            }, l = function (a) {
                if (a) {
                    for (var b = [], c = 0; c < a.length; ++c) {
                        var d = a[c];
                        d && b.push({
                            item_id: d.id,
                            quantity: d.quantity,
                            value: d.price,
                            start_date: d.start_date,
                            end_date: d.end_date
                        })
                    }
                    return b
                }
            }, m = function (a) {
                var b = a.vtp_conversionId, e = mc, f = "gtag.config" == e, m = b.ia[0], n = b.ia[1], z = void 0 !== n,
                    I = b.containerId, H = z ? b.id : void 0, C = function (a) {
                        return Jc(a, I, H)
                    }, P = !1 !== C("conversion_linker"), E = C("conversion_cookie_prefix");
                f && P && gg(E);
                if (f && z) {
                    var L = C("phone_conversion_number"), F = C("phone_conversion_callback"),
                        K = C("phone_conversion_css_class"), M = C("phone_conversion_options");
                    k(b, L, F || K, M)
                }
                var ia = !1 === C("aw_remarketing") || !1 === C("send_page_view");
                if (!f || !z && !ia) if (!0 === C("aw_remarketing_only") && (z = !1), !1 !== C("allow_ad_personalization_signals") || z) {
                    var J = {
                        google_conversion_id: m,
                        google_remarketing_only: !z,
                        onload_callback: a.vtp_gtmOnSuccess,
                        gtm_onFailure: a.vtp_gtmOnFailure,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: n,
                        google_conversion_language: C("language"),
                        google_conversion_value: C("value"),
                        google_conversion_currency: C("currency"),
                        google_conversion_order_id: C("transaction_id"),
                        google_user_id: C("user_id"),
                        google_conversion_page_url: C("page_location"),
                        google_conversion_referrer_url: C("page_referrer"),
                        google_gtm: Cf(void 0)
                    };
                    !1 === C("allow_ad_personalization_signals") && (J.google_allow_ad_personalization_signals = !1);
                    J.google_read_gcl_cookie_opt_out = !P;
                    P && E && (ya(E) ? J.google_gcl_cookie_prefix = E.aw : J.google_gcl_cookie_prefix = E);
                    var R = function () {
                        var a = C("custom_params"),
                            b = {event: e};
                        if (qa(a)) {
                            for (var c = 0; c < a.length; ++c) {
                                var f = a[c], h = C(f);
                                void 0 !== h && (b[f] = h)
                            }
                            return b
                        }
                        var k = C("eventModel");
                        if (!k) return null;
                        za(k, b);
                        for (var l = 0; l < d.length; ++l) delete b[d[l]];
                        return b
                    }();
                    R && (J.google_custom_params = R);
                    !z && C("items") && (J.google_gtag_event_data = {items: C("items"), value: C("value")});
                    if (z && "purchase" == e) {
                        C("aw_merchant_id") && (J.google_conversion_merchant_id = C("aw_merchant_id"), J.google_basket_feed_country = C("aw_feed_country"), J.google_basket_feed_language = C("aw_feed_language"),
                            J.google_basket_discount = C("discount"), J.google_basket_transaction_type = e, J.google_disable_merchant_reported_conversions = !0 === C("disable_merchant_reported_purchases"));
                        var S = l(C("items"));
                        S && (J.google_conversion_items = S)
                    }
                    c.push(J)
                }
                h()
            };
        Z.__gtagaw = m;
        Z.__gtagaw.b = "gtagaw";
        Z.__gtagaw.g = !0
    }();

    Z.a.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.b = "get";
            Z.__get.g = !0
        })(function (a) {
            if (a.vtp_isAutoTag) {
                for (var b = String(a.vtp_trackingId), c = mc || "", d = {}, e = 0; e < Kd.length; e++) {
                    var f = sg(Kd[e], b);
                    void 0 !== f && (d[Kd[e]] = f)
                }
                var h = sg("custom_params", b);
                if (qa(h)) for (var k = 0; k < h.length; k++) {
                    var l = h[k], m = sg(l, b);
                    void 0 !== m && (d[l] = m)
                } else {
                    var n = V("eventModel");
                    za(n, d)
                }
                var p = za(d, void 0);
                Pg(b);
                Ag(b, c, p);
                Bg(b)
            } else {
                var q = a.vtp_settings, r = q.eventParameters, u = q.userProperties, t = U(a.vtp_eventParameters,
                    "name", "value");
                za(t, r);
                var z = U(a.vtp_userProperties, "name", "value");
                za(z, u);
                r.user_properties = u;
                var I = String(q.streamId), H = String(a.vtp_eventName);
                Pg(I);
                Ag(I, H, r);
                Bg(I)
            }
            a.vtp_gtmOnSuccess()
        })
    }();


    Z.a.gtagfl = [], function () {
        function a(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    zc: b[3] ? a : "",
                    Ic: b[1],
                    Hc: b[3] || "",
                    ra: b[4] || "",
                    D: c
                }
            }
        }

        function b(a, b) {
            function c(b, c, e) {
                void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + ""))
            }

            var d = [], e = b("items") || [];
            if (qa(e)) for (var l = 0; l < e.length; l++) {
                var m = e[l], n = l + 1;
                c("i", n, m.id);
                c("p", n, m.price);
                c("q", n, m.quantity);
                c("c", n, b("country"));
                c("l", n, b("language"))
            }
            return d.join("|")
        }

        function c(a, b, c) {
            var d = /^u([1-9]\d?|100)$/, e = a("custom_map") || {}, f = Mc(b, c), m = {}, n = {};
            if (ya(e)) for (var p in e) if (e.hasOwnProperty(p) && d.test(p)) {
                var q = e[p];
                tc(q) && (m[p] = q)
            }
            for (var r = 0; r < f.length; r++) {
                var u = f[r];
                d.test(u) && (m[u] = u)
            }
            for (var t in m) m.hasOwnProperty(t) && (n[t] = a(m[t]));
            return n
        }

        (function (a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0
        })(function (d) {
            var e = d.vtp_gtmOnSuccess, f = d.vtp_gtmOnFailure, h = a(d.vtp_targetId);
            if (h) {
                var k =
                    function (a) {
                        return Jc(a, h.containerId, h.zc || void 0)
                    }, l = !1 !== k("conversion_linker"), m = k("conversion_cookie_prefix");
                if ("gtag.config" === mc) l && (gg(m), zf(m, void 0, void 0)), D(e); else {
                    var n = {}, p = k("dc_custom_params");
                    if (ya(p)) for (var q in p) if (p.hasOwnProperty(q)) {
                        var r = p[q];
                        void 0 !== r && null !== r && (n[q] = r)
                    }
                    var u = "";
                    if (5 === h.D || 6 === h.D) u = b(Fe, k);
                    var t = c(k, h.containerId, h.zc), z = 3 === ig(), I = !0 === k("allow_custom_scripts"), H = {
                        ra: h.ra,
                        fb: l,
                        fa: m,
                        gb: k("value"),
                        D: h.D,
                        ld: n,
                        ib: h.Ic,
                        jb: h.Hc,
                        ka: f,
                        S: e,
                        Ta: $a(N(cg())),
                        sb: u,
                        protocol: z ? "http:" : "https:",
                        wc: k("quantity"),
                        Xa: I,
                        sessionId: k("session_id"),
                        Bb: k("transaction_id"),
                        Fa: t,
                        Nc: !1 !== k("allow_ad_personalization_signals")
                    };
                    Gf(H, void 0)
                }
            } else D(f)
        })
    }();
    Z.a.gtaggf = ["google"], function () {
        var a = /.*\.google\.com\/booking\/flights.*/, b = function (a) {
            if (a) {
                for (var b = [], c = 0, f = 0; f < a.length; ++f) {
                    var h = a[f];
                    !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (b[c] = {
                        cabin: h.travel_class,
                        fare_product: h.fare_product,
                        booking_code: h.booking_code,
                        flight_number: h.flight_number,
                        origin: h.origin,
                        destination: h.destination,
                        departure_date: h.start_date
                    }, c++)
                }
                return b
            }
        };
        (function (a) {
            Z.__gtaggf = a;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0
        })(function (c) {
            var d =
                    mc, e = c.vtp_gtmOnSuccess, f = c.vtp_gtmOnFailure, h = c.vtp_conversionId, k = h.ia[0],
                l = h.containerId, m = function (a) {
                    return Jc(a, l, h.id)
                }, n = !1 !== m("conversion_linker"), p = m("conversion_cookie_prefix");
            if ("gtag.config" === d) n && gg(p), D(e); else {
                var q = {conversion_id: k, onFailure: f, onSuccess: e, conversionLinkerEnabled: n, conversionPrefix: p};
                if ("purchase" === d) {
                    var r = a.test(cg()), u = {
                        partner_id: k,
                        trip_type: m("trip_type"),
                        total_price: m("value"),
                        currency: m("currency"),
                        is_direct_booking: r,
                        flight_segment: b(m("items"))
                    }, t = m("passengers");
                    t && "object" === typeof t && (u.passengers_total = t.total, u.passengers_adult = t.adult, u.passengers_child = t.child, u.passengers_infant_in_seat = t.infant_in_seat, u.passengers_infant_in_lap = t.infant_in_lap, u.passengers_senior = t.senior);
                    q.conversion_data = u
                }
                If(q)
            }
        })
    }();


    Z.a.gtagua = ["google"], function () {
        var a, b = {
                client_id: 1,
                client_storage: "storage",
                cookie_name: 1,
                cookie_domain: 1,
                cookie_expires: 1,
                cookie_path: 1,
                cookie_update: 1,
                sample_rate: 1,
                site_speed_sample_rate: 1,
                use_amp_client_id: 1,
                store_gac: 1,
                conversion_linker: "storeGac"
            }, c = {
                anonymize_ip: 1,
                app_id: 1,
                app_installer_id: 1,
                app_name: 1,
                app_version: 1,
                campaign: {
                    name: "campaignName",
                    source: "campaignSource",
                    medium: "campaignMedium",
                    term: "campaignTerm",
                    content: "campaignContent",
                    id: "campaignId"
                },
                currency: "currencyCode",
                description: "exDescription",
                fatal: "exFatal",
                language: 1,
                non_interaction: 1,
                page_hostname: "hostname",
                page_referrer: "referrer",
                page_path: "page",
                page_location: "location",
                page_title: "title",
                screen_name: 1,
                transport_type: "transport",
                user_id: 1
            }, d = {
                content_id: 1,
                event_category: 1,
                event_action: 1,
                event_label: 1,
                link_attribution: 1,
                linker: 1,
                method: 1,
                name: 1,
                send_page_view: 1,
                value: 1
            }, e = {cookie_name: 1, cookie_expires: "duration", levels: 1}, f = {
                anonymize_ip: 1,
                fatal: 1,
                non_interaction: 1,
                use_amp_client_id: 1,
                send_page_view: 1,
                store_gac: 1,
                conversion_linker: 1
            },
            h = function (a, b, c, d) {
                if (void 0 !== c) if (f[b] && (c = wc(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c; else if (tc(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
            }, k = function (a) {
                return a && tc(a) ? a.replace(/(_[a-z])/g, function (a) {
                    return a[1].toUpperCase()
                }) : a
            }, l = function (a, b, c) {
                a.hasOwnProperty(b) || (a[b] = c)
            }, m = function (a, e, f) {
                var k = {}, m = {}, n = {}, p;
                var q = sg("experiments", a);
                if (qa(q)) {
                    for (var t = [], r = 0; r < q.length; r++) {
                        var u = q[r];
                        if (void 0 != u) {
                            var z = u.id, ia = u.variant;
                            void 0 !=
                            z && void 0 != ia && t.push(String(z) + "." + String(ia))
                        }
                    }
                    p = 0 < t.length ? t.join("!") : void 0
                } else p = void 0;
                p && l(m, "exp", p);
                var J = sg("custom_map", a);
                if (ya(J)) for (var R in J) if (J.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R)) {
                    var S = sg(J[R], a);
                    void 0 !== S && l(m, R, S)
                }
                for (var Q = Mc(a, void 0), T = 0; T < Q.length; ++T) {
                    var X = Q[T], ja = sg(X, a);
                    d.hasOwnProperty(X) ? h(d[X], X, ja, k) : c.hasOwnProperty(X) ? h(c[X], X, ja, m) : b.hasOwnProperty(X) ? h(b[X], X, ja, n) : /^(dimension|metric|content_group)\d+$/.test(X) && h(1, X, ja, m)
                }
                var ca = String(mc);
                l(n, "cookieDomain", "auto");
                l(m, "forceSSL", !0);
                var Ca = "general";
                0 <= Je("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ca) ? Ca = "ecommerce" : 0 <= Je("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ca) ? Ca = "engagement" : "exception" == ca && (Ca = "error");
                l(k, "eventCategory", Ca);
                0 <= Je(["view_item", "view_item_list", "view_promotion", "view_search_results"],
                    ca) && l(m, "nonInteraction", !0);
                "login" == ca || "sign_up" == ca || "share" == ca ? l(k, "eventLabel", sg("method", a)) : "search" == ca || "view_search_results" == ca ? l(k, "eventLabel", sg("search_term", a)) : "select_content" == ca && l(k, "eventLabel", sg("content_type", a));
                var Va = k.linker || {};
                if (Va.accept_incoming || 0 != Va.accept_incoming && Va.domains) n.allowLinker = !0;
                if (!1 === sg("allow_display_features", a) || !1 === sg("allow_ad_personalization_signals", a)) m.allowAdFeatures = !1;
                n.name = e;
                m["&gtm"] = Cf(!0);
                m.hitCallback = f;
                k.P = m;
                k.Xb = n;
                return k
            },
            n = function (a) {
                function b(a) {
                    var b = za(a, void 0);
                    b.list = a.list_name;
                    b.listPosition = a.list_position;
                    b.position = a.list_position || a.creative_slot;
                    b.creative = a.creative_name;
                    return b
                }

                function c(a) {
                    for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
                    return c.length ? c : void 0
                }

                function d(a) {
                    return {
                        id: e("transaction_id"),
                        affiliation: e("affiliation"),
                        revenue: e("value"),
                        tax: e("tax"),
                        shipping: e("shipping"),
                        coupon: e("coupon"),
                        list: e("list_name") || a
                    }
                }

                for (var e = function (b) {
                        return Jc(b, a, void 0)
                    }, f = e("items"),
                         h, k = 0; f && k < f.length && !(h = f[k].list_name); k++) ;
                var m = e("custom_map");
                if (ya(m)) for (k = 0; f && k < f.length; ++k) {
                    var n = f[k], p;
                    for (p in m) m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && l(n, p, n[m[p]])
                }
                var q = null, r = mc, u = e("promotions");
                "purchase" == r || "refund" == r ? q = {
                    action: r,
                    qa: d(),
                    la: c(f)
                } : "add_to_cart" == r ? q = {
                    action: "add",
                    la: c(f)
                } : "remove_from_cart" == r ? q = {
                    action: "remove",
                    la: c(f)
                } : "view_item" == r ? q = {
                    action: "detail",
                    qa: d(h),
                    la: c(f)
                } : "view_item_list" == r ? q = {action: "impressions", Hd: c(f)} : "view_promotion" ==
                r ? q = {
                    action: "promo_view",
                    tb: c(u)
                } : "select_content" == r && u && 0 < u.length ? q = {
                    action: "promo_click",
                    tb: c(u)
                } : "select_content" == r ? q = {
                    action: "click",
                    qa: {list: e("list_name") || h},
                    la: c(f)
                } : "begin_checkout" == r || "checkout_progress" == r ? q = {
                    action: "checkout",
                    la: c(f),
                    qa: {step: "begin_checkout" == r ? 1 : e("checkout_step"), option: e("checkout_option")}
                } : "set_checkout_option" == r && (q = {
                    action: "checkout_option",
                    qa: {step: e("checkout_step"), option: e("checkout_option")}
                });
                q && (q.Ke = e("currency"));
                return q
            }, p = {}, q = function (a, b) {
                var c =
                    p[a];
                p[a] = za(b, void 0);
                if (!c) return !1;
                for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
                for (d in c) if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
                return !1
            }, r = function (b) {
                var c = b.vtp_trackingId, d = fd(void 0), f = "gtag_" + c.split("-").join("_"), p = function (a) {
                    var b = [].slice.call(arguments, 0);
                    b[0] = f + "." + b[0];
                    d.apply(window, b)
                }, r = function () {
                    var a = function (a, b) {
                        for (var c = 0; b && c < b.length; c++) p(a, b[c])
                    }, b = n(c);
                    if (b) {
                        var d = b.action;
                        if ("impressions" == d) a("ec:addImpression", b.Hd); else if ("promo_click" ==
                            d || "promo_view" == d) {
                            var e = b.tb;
                            a("ec:addPromo", b.tb);
                            e && 0 < e.length && "promo_click" == d && p("ec:setAction", d)
                        } else a("ec:addProduct", b.la), p("ec:setAction", d, b.qa)
                    }
                }, u = function () {
                    var a = sg("optimize_id", c);
                    a && (p("require", a, {dataLayer: "dataLayer"}), p("require", "render"))
                }, E = m(c, f, b.vtp_gtmOnSuccess);
                q(f, E.Xb) && d(function () {
                    ed() && ed().remove(f)
                });
                d("create", c, E.Xb);
                (function () {
                    var a = sg("custom_map", c);
                    d(function () {
                        if (ya(a)) {
                            var b = E.P, c = ed().getByName(f), d;
                            for (d in a) if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                                var e =
                                    c.get(k(a[d]));
                                l(b, d, e)
                            }
                        }
                    })
                })();
                (function (a) {
                    if (a) {
                        var b = {};
                        if (ya(a)) for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
                        p("require", "linkid", b)
                    }
                })(E.linkAttribution);
                var L = E.linker;
                L && L.domains && gd(f + ".", L.domains, !!L.use_anchor, !!L.decorate_forms);
                var F = function (a, b, c) {
                    c && (b = "" + b);
                    E.P[a] = b
                }, K = mc;
                "page_view" == K ? (u(), p("send", "pageview", E.P)) : "gtag.config" == K ? (u(), 0 != E.sendPageView && p("send", "pageview", E.P)) : "screen_view" == K ? p("send", "screenview", E.P) : "timing_complete" == K ? (F("timingCategory", E.eventCategory,
                    !0), F("timingVar", E.name, !0), F("timingValue", vc(E.value)), void 0 !== E.eventLabel && F("timingLabel", E.eventLabel, !0), p("send", "timing", E.P)) : "exception" == K ? p("send", "exception", E.P) : (0 <= Je("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), K) && (p("require", "ec", "ec.js"), r()), F("eventCategory", E.eventCategory, !0), F("eventAction", E.eventAction || K, !0), void 0 !== E.eventLabel && F("eventLabel",
                    E.eventLabel, !0), void 0 !== E.value && F("eventValue", vc(E.value)), p("send", "event", E.P));
                a || (a = !0, bg("https://www.google-analytics.com/analytics.js", function () {
                    ed().loaded || b.vtp_gtmOnFailure()
                }, b.vtp_gtmOnFailure))
            };
        Z.__gtagua = r;
        Z.__gtagua.b = "gtagua";
        Z.__gtagua.g = !0
    }();

    var Rg = {
        macro: function (a) {
            if (ke.ab.hasOwnProperty(a)) return ke.ab[a]
        }
    };
    Rg.dataLayer = Ic;
    Rg.onHtmlSuccess = ke.Vb(!0);
    Rg.onHtmlFailure = ke.Vb(!1);
    Rg.callback = function (a) {
        oc.hasOwnProperty(a) && sc(oc[a]) && oc[a]();
        delete oc[a]
    };
    Rg.Uc = function () {
        lc[kc.o] = Rg;
        pc = Z.a;
        Wb = Wb || ke;
        Xb = Vc
    };
    Rg.Id = function () {
        lc = y.google_tag_manager = y.google_tag_manager || {};
        if (lc[kc.o]) {
            var a = lc.zones;
            a && a.unregisterChild(kc.o)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Pb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Sb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Rb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
                Qb.push(p)
            }
            Ub = Z;
            De();
            Rg.Uc();
            je();
            Yc = !1;
            Zc = 0;
            if ("interactive" ==
                A.readyState && !A.createEventObject || "complete" == A.readyState) ad(); else {
                Ra(A, "DOMContentLoaded", ad);
                Ra(A, "readystatechange", ad);
                if (A.createEventObject && A.documentElement.doScroll) {
                    var r = !0;
                    try {
                        r = !y.frameElement
                    } catch (t) {
                    }
                    r && bd()
                }
                Ra(y, "load", ad)
            }
            Xd = !1;
            "complete" === A.readyState ? Zd() : Ra(y, "load", Zd);
            a:{
                if (!ld) break a;
                od();
                rd = void 0;
                sd = {};
                pd = {};
                ud = void 0;
                td = {};
                qd = "";
                vd = md();
                y.setInterval(od, 864E5);
            }
        }
    };
    Rg.Id();

})()
import { g as dt, c as St } from "./_commonjsHelpers.042e6b4d.js";
const Ot = "modulepreload",
  xt = function (r) {
    return "/" + r;
  },
  at = {},
  Gt = function (e, t, n) {
    if (!t || t.length === 0) return e();
    const c = document.getElementsByTagName("link");
    return Promise.all(
      t.map((i) => {
        if (((i = xt(i)), i in at)) return;
        at[i] = !0;
        const h = i.endsWith(".css"),
          v = h ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let u = c.length - 1; u >= 0; u--) {
            const l = c[u];
            if (l.href === i && (!h || l.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${v}`)) return;
        const p = document.createElement("link");
        if (
          ((p.rel = h ? "stylesheet" : Ot),
          h || ((p.as = "script"), (p.crossOrigin = "")),
          (p.href = i),
          document.head.appendChild(p),
          h)
        )
          return new Promise((u, l) => {
            p.addEventListener("load", u),
              p.addEventListener("error", () =>
                l(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => e());
  };
var J = function (r) {
    return r.replace(/^\s+|\s+$/g, "");
  },
  Et = function (r) {
    return Object.prototype.toString.call(r) === "[object Array]";
  },
  At = function (r) {
    if (!r) return {};
    for (
      var e = {},
        t = J(r).split(`
`),
        n = 0;
      n < t.length;
      n++
    ) {
      var c = t[n],
        i = c.indexOf(":"),
        h = J(c.slice(0, i)).toLowerCase(),
        v = J(c.slice(i + 1));
      typeof e[h] > "u"
        ? (e[h] = v)
        : Et(e[h])
        ? e[h].push(v)
        : (e[h] = [e[h], v]);
    }
    return e;
  };
const Jt = dt(At);
var st = { exports: {} },
  X,
  ut;
function It() {
  if (ut) return X;
  ut = 1;
  var r = 1e3,
    e = r * 60,
    t = e * 60,
    n = t * 24,
    c = n * 7,
    i = n * 365.25;
  X = function (u, l) {
    l = l || {};
    var d = typeof u;
    if (d === "string" && u.length > 0) return h(u);
    if (d === "number" && isFinite(u)) return l.long ? y(u) : v(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(u)
    );
  };
  function h(u) {
    if (((u = String(u)), !(u.length > 100))) {
      var l =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          u
        );
      if (l) {
        var d = parseFloat(l[1]),
          C = (l[2] || "ms").toLowerCase();
        switch (C) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * i;
          case "weeks":
          case "week":
          case "w":
            return d * c;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function v(u) {
    var l = Math.abs(u);
    return l >= n
      ? Math.round(u / n) + "d"
      : l >= t
      ? Math.round(u / t) + "h"
      : l >= e
      ? Math.round(u / e) + "m"
      : l >= r
      ? Math.round(u / r) + "s"
      : u + "ms";
  }
  function y(u) {
    var l = Math.abs(u);
    return l >= n
      ? p(u, l, n, "day")
      : l >= t
      ? p(u, l, t, "hour")
      : l >= e
      ? p(u, l, e, "minute")
      : l >= r
      ? p(u, l, r, "second")
      : u + " ms";
  }
  function p(u, l, d, C) {
    var E = l >= d * 1.5;
    return Math.round(u / d) + " " + C + (E ? "s" : "");
  }
  return X;
}
function _t(r) {
  (t.debug = t),
    (t.default = t),
    (t.coerce = y),
    (t.disable = i),
    (t.enable = c),
    (t.enabled = h),
    (t.humanize = It()),
    (t.destroy = p),
    Object.keys(r).forEach((u) => {
      t[u] = r[u];
    }),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
  function e(u) {
    let l = 0;
    for (let d = 0; d < u.length; d++)
      (l = (l << 5) - l + u.charCodeAt(d)), (l |= 0);
    return t.colors[Math.abs(l) % t.colors.length];
  }
  t.selectColor = e;
  function t(u) {
    let l,
      d = null,
      C,
      E;
    function g(...S) {
      if (!g.enabled) return;
      const P = g,
        T = Number(new Date()),
        V = T - (l || T);
      (P.diff = V),
        (P.prev = l),
        (P.curr = T),
        (l = T),
        (S[0] = t.coerce(S[0])),
        typeof S[0] != "string" && S.unshift("%O");
      let R = 0;
      (S[0] = S[0].replace(/%([a-zA-Z%])/g, (H, $) => {
        if (H === "%%") return "%";
        R++;
        const L = t.formatters[$];
        if (typeof L == "function") {
          const Y = S[R];
          (H = L.call(P, Y)), S.splice(R, 1), R--;
        }
        return H;
      })),
        t.formatArgs.call(P, S),
        (P.log || t.log).apply(P, S);
    }
    return (
      (g.namespace = u),
      (g.useColors = t.useColors()),
      (g.color = t.selectColor(u)),
      (g.extend = n),
      (g.destroy = t.destroy),
      Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          d !== null
            ? d
            : (C !== t.namespaces && ((C = t.namespaces), (E = t.enabled(u))),
              E),
        set: (S) => {
          d = S;
        },
      }),
      typeof t.init == "function" && t.init(g),
      g
    );
  }
  function n(u, l) {
    const d = t(this.namespace + (typeof l > "u" ? ":" : l) + u);
    return (d.log = this.log), d;
  }
  function c(u) {
    t.save(u), (t.namespaces = u), (t.names = []), (t.skips = []);
    let l;
    const d = (typeof u == "string" ? u : "").split(/[\s,]+/),
      C = d.length;
    for (l = 0; l < C; l++)
      d[l] &&
        ((u = d[l].replace(/\*/g, ".*?")),
        u[0] === "-"
          ? t.skips.push(new RegExp("^" + u.slice(1) + "$"))
          : t.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [...t.names.map(v), ...t.skips.map(v).map((l) => "-" + l)].join(
      ","
    );
    return t.enable(""), u;
  }
  function h(u) {
    if (u[u.length - 1] === "*") return !0;
    let l, d;
    for (l = 0, d = t.skips.length; l < d; l++)
      if (t.skips[l].test(u)) return !1;
    for (l = 0, d = t.names.length; l < d; l++)
      if (t.names[l].test(u)) return !0;
    return !1;
  }
  function v(u) {
    return u
      .toString()
      .substring(2, u.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function y(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function p() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return t.enable(t.load()), t;
}
var Pt = _t;
(function (r, e) {
  (e.formatArgs = n),
    (e.save = c),
    (e.load = i),
    (e.useColors = t),
    (e.storage = h()),
    (e.destroy = (() => {
      let y = !1;
      return () => {
        y ||
          ((y = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function t() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function n(y) {
    if (
      ((y[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        y[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        r.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const p = "color: " + this.color;
    y.splice(1, 0, p, "color: inherit");
    let u = 0,
      l = 0;
    y[0].replace(/%[a-zA-Z%]/g, (d) => {
      d !== "%%" && (u++, d === "%c" && (l = u));
    }),
      y.splice(l, 0, p);
  }
  e.log = console.debug || console.log || (() => {});
  function c(y) {
    try {
      y ? e.storage.setItem("debug", y) : e.storage.removeItem("debug");
    } catch {}
  }
  function i() {
    let y;
    try {
      y = e.storage.getItem("debug");
    } catch {}
    return !y && typeof process < "u" && "env" in process && (y = {}.DEBUG), y;
  }
  function h() {
    try {
      return localStorage;
    } catch {}
  }
  r.exports = Pt(e);
  const { formatters: v } = r.exports;
  v.j = function (y) {
    try {
      return JSON.stringify(y);
    } catch (p) {
      return "[UnexpectedJSONParseError]: " + p.message;
    }
  };
})(st, st.exports);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function ct(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Xt(r) {
  var e, t;
  return ct(r) === !1
    ? !1
    : ((e = r.constructor),
      e === void 0
        ? !0
        : ((t = e.prototype),
          !(ct(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
var N = function (r, e) {
  return (
    (N =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, n) {
          t.__proto__ = n;
        }) ||
      function (t, n) {
        for (var c in n)
          Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
      }),
    N(r, e)
  );
};
function et(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  N(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function Zt(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) &&
      e.indexOf(n) < 0 &&
      (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, n = Object.getOwnPropertySymbols(r); c < n.length; c++)
      e.indexOf(n[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, n[c]) &&
        (t[n[c]] = r[n[c]]);
  return t;
}
function Kt(r, e, t, n) {
  function c(i) {
    return i instanceof t
      ? i
      : new t(function (h) {
          h(i);
        });
  }
  return new (t || (t = Promise))(function (i, h) {
    function v(u) {
      try {
        p(n.next(u));
      } catch (l) {
        h(l);
      }
    }
    function y(u) {
      try {
        p(n.throw(u));
      } catch (l) {
        h(l);
      }
    }
    function p(u) {
      u.done ? i(u.value) : c(u.value).then(v, y);
    }
    p((n = n.apply(r, e || [])).next());
  });
}
function Nt(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    n,
    c,
    i,
    h;
  return (
    (h = { next: v(0), throw: v(1), return: v(2) }),
    typeof Symbol == "function" &&
      (h[Symbol.iterator] = function () {
        return this;
      }),
    h
  );
  function v(p) {
    return function (u) {
      return y([p, u]);
    };
  }
  function y(p) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; h && ((h = 0), p[0] && (t = 0)), t; )
      try {
        if (
          ((n = 1),
          c &&
            (i =
              p[0] & 2
                ? c.return
                : p[0]
                ? c.throw || ((i = c.return) && i.call(c), 0)
                : c.next) &&
            !(i = i.call(c, p[1])).done)
        )
          return i;
        switch (((c = 0), i && (p = [p[0] & 2, i.value]), p[0])) {
          case 0:
          case 1:
            i = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, (c = p[1]), (p = [0]);
            continue;
          case 7:
            (p = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((i = t.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (p[0] === 6 || p[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!i || (p[1] > i[0] && p[1] < i[3]))) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < i[1]) {
              (t.label = i[1]), (i = p);
              break;
            }
            if (i && t.label < i[2]) {
              (t.label = i[2]), t.ops.push(p);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (u) {
        (p = [6, u]), (c = 0);
      } finally {
        n = i = 0;
      }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function D(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function W(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r),
    c,
    i = [],
    h;
  try {
    for (; (e === void 0 || e-- > 0) && !(c = n.next()).done; ) i.push(c.value);
  } catch (v) {
    h = { error: v };
  } finally {
    try {
      c && !c.done && (t = n.return) && t.call(n);
    } finally {
      if (h) throw h.error;
    }
  }
  return i;
}
function q(r, e, t) {
  if (t || arguments.length === 2)
    for (var n = 0, c = e.length, i; n < c; n++)
      (i || !(n in e)) &&
        (i || (i = Array.prototype.slice.call(e, 0, n)), (i[n] = e[n]));
  return r.concat(i || Array.prototype.slice.call(e));
}
function Q(r) {
  return this instanceof Q ? ((this.v = r), this) : new Q(r);
}
function Qt(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(r, e || []),
    c,
    i = [];
  return (
    (c = {}),
    h("next"),
    h("throw"),
    h("return"),
    (c[Symbol.asyncIterator] = function () {
      return this;
    }),
    c
  );
  function h(d) {
    n[d] &&
      (c[d] = function (C) {
        return new Promise(function (E, g) {
          i.push([d, C, E, g]) > 1 || v(d, C);
        });
      });
  }
  function v(d, C) {
    try {
      y(n[d](C));
    } catch (E) {
      l(i[0][3], E);
    }
  }
  function y(d) {
    d.value instanceof Q
      ? Promise.resolve(d.value.v).then(p, u)
      : l(i[0][2], d);
  }
  function p(d) {
    v("next", d);
  }
  function u(d) {
    v("throw", d);
  }
  function l(d, C) {
    d(C), i.shift(), i.length && v(i[0][0], i[0][1]);
  }
}
function tr(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof D == "function" ? D(r) : r[Symbol.iterator]()),
      (t = {}),
      n("next"),
      n("throw"),
      n("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function n(i) {
    t[i] =
      r[i] &&
      function (h) {
        return new Promise(function (v, y) {
          (h = r[i](h)), c(v, y, h.done, h.value);
        });
      };
  }
  function c(i, h, v, y) {
    Promise.resolve(y).then(function (p) {
      i({ value: p, done: v });
    }, h);
  }
}
function _(r) {
  return typeof r == "function";
}
function yt(r) {
  var e = function (n) {
      Error.call(n), (n.stack = new Error().stack);
    },
    t = r(e);
  return (
    (t.prototype = Object.create(Error.prototype)),
    (t.prototype.constructor = t),
    t
  );
}
var Z = yt(function (r) {
  return function (t) {
    r(this),
      (this.message = t
        ? t.length +
          ` errors occurred during unsubscription:
` +
          t.map(function (n, c) {
            return c + 1 + ") " + n.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = t);
  };
});
function ft(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var nt = (function () {
    function r(e) {
      (this.initialTeardown = e),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (r.prototype.unsubscribe = function () {
        var e, t, n, c, i;
        if (!this.closed) {
          this.closed = !0;
          var h = this._parentage;
          if (h)
            if (((this._parentage = null), Array.isArray(h)))
              try {
                for (var v = D(h), y = v.next(); !y.done; y = v.next()) {
                  var p = y.value;
                  p.remove(this);
                }
              } catch (g) {
                e = { error: g };
              } finally {
                try {
                  y && !y.done && (t = v.return) && t.call(v);
                } finally {
                  if (e) throw e.error;
                }
              }
            else h.remove(this);
          var u = this.initialTeardown;
          if (_(u))
            try {
              u();
            } catch (g) {
              i = g instanceof Z ? g.errors : [g];
            }
          var l = this._finalizers;
          if (l) {
            this._finalizers = null;
            try {
              for (var d = D(l), C = d.next(); !C.done; C = d.next()) {
                var E = C.value;
                try {
                  lt(E);
                } catch (g) {
                  (i = i ?? []),
                    g instanceof Z
                      ? (i = q(q([], W(i)), W(g.errors)))
                      : i.push(g);
                }
              }
            } catch (g) {
              n = { error: g };
            } finally {
              try {
                C && !C.done && (c = d.return) && c.call(d);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          if (i) throw new Z(i);
        }
      }),
      (r.prototype.add = function (e) {
        var t;
        if (e && e !== this)
          if (this.closed) lt(e);
          else {
            if (e instanceof r) {
              if (e.closed || e._hasParent(this)) return;
              e._addParent(this);
            }
            (this._finalizers =
              (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
          }
      }),
      (r.prototype._hasParent = function (e) {
        var t = this._parentage;
        return t === e || (Array.isArray(t) && t.includes(e));
      }),
      (r.prototype._addParent = function (e) {
        var t = this._parentage;
        this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
      }),
      (r.prototype._removeParent = function (e) {
        var t = this._parentage;
        t === e ? (this._parentage = null) : Array.isArray(t) && ft(t, e);
      }),
      (r.prototype.remove = function (e) {
        var t = this._finalizers;
        t && ft(t, e), e instanceof r && e._removeParent(this);
      }),
      (r.EMPTY = (function () {
        var e = new r();
        return (e.closed = !0), e;
      })()),
      r
    );
  })(),
  rr = nt.EMPTY;
function vt(r) {
  return (
    r instanceof nt ||
    (r && "closed" in r && _(r.remove) && _(r.add) && _(r.unsubscribe))
  );
}
function lt(r) {
  _(r) ? r() : r.unsubscribe();
}
var mt = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  tt = {
    setTimeout: function (r, e) {
      for (var t = [], n = 2; n < arguments.length; n++)
        t[n - 2] = arguments[n];
      var c = tt.delegate;
      return c?.setTimeout
        ? c.setTimeout.apply(c, q([r, e], W(t)))
        : setTimeout.apply(void 0, q([r, e], W(t)));
    },
    clearTimeout: function (r) {
      var e = tt.delegate;
      return (e?.clearTimeout || clearTimeout)(r);
    },
    delegate: void 0,
  };
function jt(r) {
  tt.setTimeout(function () {
    throw r;
  });
}
function ht() {}
function Mt(r) {
  r();
}
var it = (function (r) {
    et(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return (
        (n.isStopped = !1),
        t ? ((n.destination = t), vt(t) && t.add(n)) : (n.destination = Ht),
        n
      );
    }
    return (
      (e.create = function (t, n, c) {
        return new rt(t, n, c);
      }),
      (e.prototype.next = function (t) {
        this.isStopped || this._next(t);
      }),
      (e.prototype.error = function (t) {
        this.isStopped || ((this.isStopped = !0), this._error(t));
      }),
      (e.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          r.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (e.prototype._next = function (t) {
        this.destination.next(t);
      }),
      (e.prototype._error = function (t) {
        try {
          this.destination.error(t);
        } finally {
          this.unsubscribe();
        }
      }),
      (e.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      e
    );
  })(nt),
  Ut = Function.prototype.bind;
function K(r, e) {
  return Ut.call(r, e);
}
var Tt = (function () {
    function r(e) {
      this.partialObserver = e;
    }
    return (
      (r.prototype.next = function (e) {
        var t = this.partialObserver;
        if (t.next)
          try {
            t.next(e);
          } catch (n) {
            B(n);
          }
      }),
      (r.prototype.error = function (e) {
        var t = this.partialObserver;
        if (t.error)
          try {
            t.error(e);
          } catch (n) {
            B(n);
          }
        else B(e);
      }),
      (r.prototype.complete = function () {
        var e = this.partialObserver;
        if (e.complete)
          try {
            e.complete();
          } catch (t) {
            B(t);
          }
      }),
      r
    );
  })(),
  rt = (function (r) {
    et(e, r);
    function e(t, n, c) {
      var i = r.call(this) || this,
        h;
      if (_(t) || !t)
        h = { next: t ?? void 0, error: n ?? void 0, complete: c ?? void 0 };
      else {
        var v;
        i && mt.useDeprecatedNextContext
          ? ((v = Object.create(t)),
            (v.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (h = {
              next: t.next && K(t.next, v),
              error: t.error && K(t.error, v),
              complete: t.complete && K(t.complete, v),
            }))
          : (h = t);
      }
      return (i.destination = new Tt(h)), i;
    }
    return e;
  })(it);
function B(r) {
  jt(r);
}
function Rt(r) {
  throw r;
}
var Ht = { closed: !0, next: ht, error: Rt, complete: ht },
  kt = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function Lt(r) {
  return r;
}
function zt(r) {
  return r.length === 0
    ? Lt
    : r.length === 1
    ? r[0]
    : function (t) {
        return r.reduce(function (n, c) {
          return c(n);
        }, t);
      };
}
var er = (function () {
  function r(e) {
    e && (this._subscribe = e);
  }
  return (
    (r.prototype.lift = function (e) {
      var t = new r();
      return (t.source = this), (t.operator = e), t;
    }),
    (r.prototype.subscribe = function (e, t, n) {
      var c = this,
        i = Dt(e) ? e : new rt(e, t, n);
      return (
        Mt(function () {
          var h = c,
            v = h.operator,
            y = h.source;
          i.add(v ? v.call(i, y) : y ? c._subscribe(i) : c._trySubscribe(i));
        }),
        i
      );
    }),
    (r.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    }),
    (r.prototype.forEach = function (e, t) {
      var n = this;
      return (
        (t = pt(t)),
        new t(function (c, i) {
          var h = new rt({
            next: function (v) {
              try {
                e(v);
              } catch (y) {
                i(y), h.unsubscribe();
              }
            },
            error: i,
            complete: c,
          });
          n.subscribe(h);
        })
      );
    }),
    (r.prototype._subscribe = function (e) {
      var t;
      return (t = this.source) === null || t === void 0
        ? void 0
        : t.subscribe(e);
    }),
    (r.prototype[kt] = function () {
      return this;
    }),
    (r.prototype.pipe = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return zt(e)(this);
    }),
    (r.prototype.toPromise = function (e) {
      var t = this;
      return (
        (e = pt(e)),
        new e(function (n, c) {
          var i;
          t.subscribe(
            function (h) {
              return (i = h);
            },
            function (h) {
              return c(h);
            },
            function () {
              return n(i);
            }
          );
        })
      );
    }),
    (r.create = function (e) {
      return new r(e);
    }),
    r
  );
})();
function pt(r) {
  var e;
  return (e = r ?? mt.Promise) !== null && e !== void 0 ? e : Promise;
}
function Bt(r) {
  return r && _(r.next) && _(r.error) && _(r.complete);
}
function Dt(r) {
  return (r && r instanceof it) || (Bt(r) && vt(r));
}
function Wt(r) {
  return _(r?.lift);
}
function bt(r) {
  return function (e) {
    if (Wt(e))
      return e.lift(function (t) {
        try {
          return r(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function gt(r, e, t, n, c) {
  return new qt(r, e, t, n, c);
}
var qt = (function (r) {
    et(e, r);
    function e(t, n, c, i, h, v) {
      var y = r.call(this, t) || this;
      return (
        (y.onFinalize = h),
        (y.shouldUnsubscribe = v),
        (y._next = n
          ? function (p) {
              try {
                n(p);
              } catch (u) {
                t.error(u);
              }
            }
          : r.prototype._next),
        (y._error = i
          ? function (p) {
              try {
                i(p);
              } catch (u) {
                t.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : r.prototype._error),
        (y._complete = c
          ? function () {
              try {
                c();
              } catch (p) {
                t.error(p);
              } finally {
                this.unsubscribe();
              }
            }
          : r.prototype._complete),
        y
      );
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          r.prototype.unsubscribe.call(this),
            !n &&
              ((t = this.onFinalize) === null || t === void 0 || t.call(this));
        }
      }),
      e
    );
  })(it),
  Vt = yt(function (r) {
    return function () {
      r(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    };
  });
function nr(r, e) {
  var t = typeof e == "object";
  return new Promise(function (n, c) {
    var i = !1,
      h;
    r.subscribe({
      next: function (v) {
        (h = v), (i = !0);
      },
      error: c,
      complete: function () {
        i ? n(h) : t ? n(e.defaultValue) : c(new Vt());
      },
    });
  });
}
function ir(r, e) {
  return bt(function (t, n) {
    var c = 0;
    t.subscribe(
      gt(n, function (i) {
        n.next(r.call(e, i, c++));
      })
    );
  });
}
function or(r, e) {
  return bt(function (t, n) {
    var c = 0;
    t.subscribe(
      gt(n, function (i) {
        return r.call(e, i, c++) && n.next(i);
      })
    );
  });
}
var wt = { exports: {} };
(function (r, e) {
  (function (t, n) {
    r.exports = n();
  })(St, function () {
    function t() {
      return (
        (t =
          Object.assign ||
          function (o) {
            for (var s = 1; s < arguments.length; s++) {
              var f = arguments[s];
              for (var a in f)
                Object.prototype.hasOwnProperty.call(f, a) && (o[a] = f[a]);
            }
            return o;
          }),
        t.apply(this, arguments)
      );
    }
    function n(o, s) {
      if (o) {
        if (typeof o == "string") return c(o, s);
        var f = Object.prototype.toString.call(o).slice(8, -1);
        if (
          (f === "Object" && o.constructor && (f = o.constructor.name),
          f === "Map" || f === "Set")
        )
          return Array.from(o);
        if (
          f === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)
        )
          return c(o, s);
      }
    }
    function c(o, s) {
      (s == null || s > o.length) && (s = o.length);
      for (var f = 0, a = new Array(s); f < s; f++) a[f] = o[f];
      return a;
    }
    function i(o, s) {
      var f = (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
      if (f) return (f = f.call(o)).next.bind(f);
      if (
        Array.isArray(o) ||
        (f = n(o)) ||
        (s && o && typeof o.length == "number")
      ) {
        f && (o = f);
        var a = 0;
        return function () {
          return a >= o.length ? { done: !0 } : { done: !1, value: o[a++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var h = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function v(o) {
      var s = o.split("-"),
        f = s[1],
        a = s[2],
        b = s[3];
      if (!f || !a || !b)
        throw new Error(
          "Malformed asset _ref '" + o + `'. Expected an id like "` + h + '".'
        );
      var m = a.split("x"),
        w = m[0],
        F = m[1],
        A = +w,
        O = +F,
        x = isFinite(A) && isFinite(O);
      if (!x)
        throw new Error(
          "Malformed asset _ref '" + o + `'. Expected an id like "` + h + '".'
        );
      return { id: f, width: A, height: O, format: b };
    }
    var y = function (s) {
        var f = s;
        return f ? typeof f._ref == "string" : !1;
      },
      p = function (s) {
        var f = s;
        return f ? typeof f._id == "string" : !1;
      },
      u = function (s) {
        var f = s;
        return f && f.asset ? typeof f.asset.url == "string" : !1;
      };
    function l(o) {
      if (!o) return null;
      var s;
      if (typeof o == "string" && d(o)) s = { asset: { _ref: C(o) } };
      else if (typeof o == "string") s = { asset: { _ref: o } };
      else if (y(o)) s = { asset: o };
      else if (p(o)) s = { asset: { _ref: o._id || "" } };
      else if (u(o)) s = { asset: { _ref: C(o.asset.url) } };
      else if (typeof o.asset == "object") s = t({}, o);
      else return null;
      var f = o;
      return (
        f.crop && (s.crop = f.crop), f.hotspot && (s.hotspot = f.hotspot), E(s)
      );
    }
    function d(o) {
      return /^https?:\/\//.test("" + o);
    }
    function C(o) {
      var s = o.split("/").slice(-1);
      return ("image-" + s[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function E(o) {
      if (o.crop && o.hotspot) return o;
      var s = t({}, o);
      return (
        s.crop || (s.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
        s.hotspot || (s.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
        s
      );
    }
    var g = [
      ["width", "w"],
      ["height", "h"],
      ["format", "fm"],
      ["download", "dl"],
      ["blur", "blur"],
      ["sharpen", "sharp"],
      ["invert", "invert"],
      ["orientation", "or"],
      ["minHeight", "min-h"],
      ["maxHeight", "max-h"],
      ["minWidth", "min-w"],
      ["maxWidth", "max-w"],
      ["quality", "q"],
      ["fit", "fit"],
      ["crop", "crop"],
      ["saturation", "sat"],
      ["auto", "auto"],
      ["dpr", "dpr"],
      ["pad", "pad"],
    ];
    function S(o) {
      var s = t({}, o || {}),
        f = s.source;
      delete s.source;
      var a = l(f);
      if (!a)
        throw new Error(
          "Unable to resolve image URL from source (" + JSON.stringify(f) + ")"
        );
      var b = a.asset._ref || a.asset._id || "",
        m = v(b),
        w = Math.round(a.crop.left * m.width),
        F = Math.round(a.crop.top * m.height),
        A = {
          left: w,
          top: F,
          width: Math.round(m.width - a.crop.right * m.width - w),
          height: Math.round(m.height - a.crop.bottom * m.height - F),
        },
        O = (a.hotspot.height * m.height) / 2,
        x = (a.hotspot.width * m.width) / 2,
        j = a.hotspot.x * m.width,
        M = a.hotspot.y * m.height,
        I = { left: j - x, top: M - O, right: j + x, bottom: M + O };
      return (
        s.rect ||
          s.focalPoint ||
          s.ignoreImageParams ||
          s.crop ||
          (s = t({}, s, T({ crop: A, hotspot: I }, s))),
        P(t({}, s, { asset: m }))
      );
    }
    function P(o) {
      var s = (o.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
        f =
          o.asset.id +
          "-" +
          o.asset.width +
          "x" +
          o.asset.height +
          "." +
          o.asset.format,
        a = s + "/images/" + o.projectId + "/" + o.dataset + "/" + f,
        b = [];
      if (o.rect) {
        var m = o.rect,
          w = m.left,
          F = m.top,
          A = m.width,
          O = m.height,
          x = w !== 0 || F !== 0 || O !== o.asset.height || A !== o.asset.width;
        x && b.push("rect=" + w + "," + F + "," + A + "," + O);
      }
      o.bg && b.push("bg=" + o.bg),
        o.focalPoint &&
          (b.push("fp-x=" + o.focalPoint.x), b.push("fp-y=" + o.focalPoint.y));
      var j = [o.flipHorizontal && "h", o.flipVertical && "v"]
        .filter(Boolean)
        .join("");
      return (
        j && b.push("flip=" + j),
        g.forEach(function (M) {
          var I = M[0],
            U = M[1];
          typeof o[I] < "u"
            ? b.push(U + "=" + encodeURIComponent(o[I]))
            : typeof o[U] < "u" && b.push(U + "=" + encodeURIComponent(o[U]));
        }),
        b.length === 0 ? a : a + "?" + b.join("&")
      );
    }
    function T(o, s) {
      var f,
        a = s.width,
        b = s.height;
      if (!(a && b)) return { width: a, height: b, rect: o.crop };
      var m = o.crop,
        w = o.hotspot,
        F = a / b,
        A = m.width / m.height;
      if (A > F) {
        var O = Math.round(m.height),
          x = Math.round(O * F),
          j = Math.max(0, Math.round(m.top)),
          M = Math.round((w.right - w.left) / 2 + w.left),
          I = Math.max(0, Math.round(M - x / 2));
        I < m.left
          ? (I = m.left)
          : I + x > m.left + m.width && (I = m.left + m.width - x),
          (f = { left: I, top: j, width: x, height: O });
      } else {
        var U = m.width,
          z = Math.round(U / F),
          Ct = Math.max(0, Math.round(m.left)),
          Ft = Math.round((w.bottom - w.top) / 2 + w.top),
          k = Math.max(0, Math.round(Ft - z / 2));
        k < m.top
          ? (k = m.top)
          : k + z > m.top + m.height && (k = m.top + m.height - z),
          (f = { left: Ct, top: k, width: U, height: z });
      }
      return { width: a, height: b, rect: f };
    }
    var V = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
      R = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
      ot = ["format"];
    function H(o) {
      return o && "config" in o ? typeof o.config == "function" : !1;
    }
    function $(o) {
      return o && "clientConfig" in o ? typeof o.clientConfig == "object" : !1;
    }
    function L(o) {
      for (var s = g, f = i(s), a; !(a = f()).done; ) {
        var b = a.value,
          m = b[0],
          w = b[1];
        if (o === m || o === w) return m;
      }
      return o;
    }
    function Y(o) {
      if (H(o)) {
        var s = o.config(),
          f = s.apiHost,
          a = s.projectId,
          b = s.dataset,
          m = f || "https://api.sanity.io";
        return new G(null, {
          baseUrl: m.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: a,
          dataset: b,
        });
      }
      var w = o;
      if ($(w)) {
        var F = w.clientConfig,
          A = F.apiHost,
          O = F.projectId,
          x = F.dataset,
          j = A || "https://api.sanity.io";
        return new G(null, {
          baseUrl: j.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: O,
          dataset: x,
        });
      }
      return new G(null, o);
    }
    var G = (function () {
      function o(f, a) {
        (this.options = void 0),
          (this.options = f ? t({}, f.options || {}, a || {}) : t({}, a || {}));
      }
      var s = o.prototype;
      return (
        (s.withOptions = function (a) {
          var b = a.baseUrl || this.options.baseUrl,
            m = { baseUrl: b };
          for (var w in a)
            if (a.hasOwnProperty(w)) {
              var F = L(w);
              m[F] = a[w];
            }
          return new o(this, t({ baseUrl: b }, m));
        }),
        (s.image = function (a) {
          return this.withOptions({ source: a });
        }),
        (s.dataset = function (a) {
          return this.withOptions({ dataset: a });
        }),
        (s.projectId = function (a) {
          return this.withOptions({ projectId: a });
        }),
        (s.bg = function (a) {
          return this.withOptions({ bg: a });
        }),
        (s.dpr = function (a) {
          return this.withOptions(a && a !== 1 ? { dpr: a } : {});
        }),
        (s.width = function (a) {
          return this.withOptions({ width: a });
        }),
        (s.height = function (a) {
          return this.withOptions({ height: a });
        }),
        (s.focalPoint = function (a, b) {
          return this.withOptions({ focalPoint: { x: a, y: b } });
        }),
        (s.maxWidth = function (a) {
          return this.withOptions({ maxWidth: a });
        }),
        (s.minWidth = function (a) {
          return this.withOptions({ minWidth: a });
        }),
        (s.maxHeight = function (a) {
          return this.withOptions({ maxHeight: a });
        }),
        (s.minHeight = function (a) {
          return this.withOptions({ minHeight: a });
        }),
        (s.size = function (a, b) {
          return this.withOptions({ width: a, height: b });
        }),
        (s.blur = function (a) {
          return this.withOptions({ blur: a });
        }),
        (s.sharpen = function (a) {
          return this.withOptions({ sharpen: a });
        }),
        (s.rect = function (a, b, m, w) {
          return this.withOptions({
            rect: { left: a, top: b, width: m, height: w },
          });
        }),
        (s.format = function (a) {
          return this.withOptions({ format: a });
        }),
        (s.invert = function (a) {
          return this.withOptions({ invert: a });
        }),
        (s.orientation = function (a) {
          return this.withOptions({ orientation: a });
        }),
        (s.quality = function (a) {
          return this.withOptions({ quality: a });
        }),
        (s.forceDownload = function (a) {
          return this.withOptions({ download: a });
        }),
        (s.flipHorizontal = function () {
          return this.withOptions({ flipHorizontal: !0 });
        }),
        (s.flipVertical = function () {
          return this.withOptions({ flipVertical: !0 });
        }),
        (s.ignoreImageParams = function () {
          return this.withOptions({ ignoreImageParams: !0 });
        }),
        (s.fit = function (a) {
          if (V.indexOf(a) === -1)
            throw new Error('Invalid fit mode "' + a + '"');
          return this.withOptions({ fit: a });
        }),
        (s.crop = function (a) {
          if (R.indexOf(a) === -1)
            throw new Error('Invalid crop mode "' + a + '"');
          return this.withOptions({ crop: a });
        }),
        (s.saturation = function (a) {
          return this.withOptions({ saturation: a });
        }),
        (s.auto = function (a) {
          if (ot.indexOf(a) === -1)
            throw new Error('Invalid auto mode "' + a + '"');
          return this.withOptions({ auto: a });
        }),
        (s.pad = function (a) {
          return this.withOptions({ pad: a });
        }),
        (s.url = function () {
          return S(this.options);
        }),
        (s.toString = function () {
          return this.url();
        }),
        o
      );
    })();
    return Y;
  });
})(wt);
var $t = wt.exports;
const ar = dt($t);
export {
  tr as A,
  Lt as B,
  ht as C,
  qt as D,
  Vt as E,
  er as O,
  rt as S,
  Gt as _,
  Zt as a,
  ar as b,
  gt as c,
  et as d,
  nt as e,
  or as f,
  yt as g,
  Wt as h,
  Xt as i,
  rr as j,
  ft as k,
  nr as l,
  ir as m,
  Mt as n,
  bt as o,
  Jt as p,
  D as q,
  q as r,
  W as s,
  _ as t,
  kt as u,
  Qt as v,
  Nt as w,
  Q as x,
  jt as y,
  Kt as z,
};

function ft(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Wt(t, e) {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}
const et = (t, e, s) => Math.min(Math.max(s, t), e),
  d = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  R = (t) => typeof t == "number",
  w = (t) => Array.isArray(t) && !R(t[0]),
  ht = (t, e, s) => {
    const n = e - t;
    return ((((s - t) % n) + n) % n) + t;
  };
function dt(t, e) {
  return w(t) ? t[ht(0, t.length, e)] : t;
}
const st = (t, e, s) => -s * t + s * e + t,
  nt = () => {},
  T = (t) => t,
  Z = (t, e, s) => (e - t === 0 ? 1 : (s - t) / (e - t));
function it(t, e) {
  const s = t[t.length - 1];
  for (let n = 1; n <= e; n++) {
    const i = Z(0, e, n);
    t.push(st(s, 1, i));
  }
}
function pt(t) {
  const e = [0];
  return it(e, t - 1), e;
}
function mt(t, e = pt(t.length), s = T) {
  const n = t.length,
    i = n - e.length;
  return (
    i > 0 && it(e, i),
    (a) => {
      let r = 0;
      for (; r < n - 2 && !(a < e[r + 1]); r++);
      let o = et(0, 1, Z(e[r], e[r + 1], a));
      return (o = dt(s, r)(o)), st(t[r], t[r + 1], o);
    }
  );
}
const at = (t) => Array.isArray(t) && R(t[0]),
  B = (t) => typeof t == "object" && !!t.createAnimation,
  F = (t) => typeof t == "function",
  gt = (t) => typeof t == "string",
  P = { ms: (t) => t * 1e3, s: (t) => t / 1e3 },
  rt = (t, e, s) =>
    (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t,
  yt = 1e-7,
  vt = 12;
function Tt(t, e, s, n, i) {
  let a,
    r,
    o = 0;
  do (r = e + (s - e) / 2), (a = rt(r, n, i) - t), a > 0 ? (s = r) : (e = r);
  while (Math.abs(a) > yt && ++o < vt);
  return r;
}
function M(t, e, s, n) {
  if (t === e && s === n) return T;
  const i = (a) => Tt(a, 0, 1, t, s);
  return (a) => (a === 0 || a === 1 ? a : rt(i(a), e, n));
}
const bt =
    (t, e = "end") =>
    (s) => {
      s = e === "end" ? Math.min(s, 0.999) : Math.max(s, 0.001);
      const n = s * t,
        i = e === "end" ? Math.floor(n) : Math.ceil(n);
      return et(0, 1, i / t);
    },
  J = {
    ease: M(0.25, 0.1, 0.25, 1),
    "ease-in": M(0.42, 0, 1, 1),
    "ease-in-out": M(0.42, 0, 0.58, 1),
    "ease-out": M(0, 0, 0.58, 1),
  },
  At = /\((.*?)\)/;
function K(t) {
  if (F(t)) return t;
  if (at(t)) return M(...t);
  if (J[t]) return J[t];
  if (t.startsWith("steps")) {
    const e = At.exec(t);
    if (e) {
      const s = e[1].split(",");
      return bt(parseFloat(s[0]), s[1].trim());
    }
  }
  return T;
}
class Xt {
  constructor(
    e,
    s = [0, 1],
    {
      easing: n,
      duration: i = d.duration,
      delay: a = d.delay,
      endDelay: r = d.endDelay,
      repeat: o = d.repeat,
      offset: f,
      direction: g = "normal",
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = T),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((m, l) => {
        (this.resolve = m), (this.reject = l);
      })),
      (n = n || d.easing),
      B(n))
    ) {
      const m = n.createAnimation(s);
      (n = m.easing), (s = m.keyframes || s), (i = m.duration || i);
    }
    (this.repeat = o), (this.easing = w(n) ? T : K(n)), this.updateDuration(i);
    const V = mt(s, f, w(n) ? n.map(K) : T);
    (this.tick = (m) => {
      var l;
      a = a;
      let h = 0;
      this.pauseTime !== void 0
        ? (h = this.pauseTime)
        : (h = (m - this.startTime) * this.rate),
        (this.t = h),
        (h /= 1e3),
        (h = Math.max(h - a, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (h = this.totalDuration);
      const x = h / this.duration;
      let E = Math.floor(x),
        y = x % 1;
      !y && x >= 1 && (y = 1), y === 1 && E--;
      const j = E % 2;
      (g === "reverse" ||
        (g === "alternate" && j) ||
        (g === "alternate-reverse" && !j)) &&
        (y = 1 - y);
      const O = h >= this.totalDuration ? 1 : Math.min(y, 1),
        A = V(this.easing(O));
      e(A),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || h >= this.totalDuration + r)
          ? ((this.playState = "finished"),
            (l = this.resolve) === null || l === void 0 || l.call(this, A))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      this.play();
  }
  play() {
    const e = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = e - this.pauseTime)
        : this.startTime || (this.startTime = e),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var e;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (e = this.reject) === null || e === void 0 || e.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(e) {
    (this.duration = e), (this.totalDuration = e * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = e)
      : (this.startTime = performance.now() - e / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(e) {
    this.rate = e;
  }
}
class St {
  setAnimation(e) {
    (this.animation = e),
      e?.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const C = new WeakMap();
function ot(t) {
  return C.has(t) || C.set(t, { transforms: [], values: new Map() }), C.get(t);
}
function wt(t, e) {
  return t.has(e) || t.set(e, new St()), t.get(e);
}
const xt = ["", "X", "Y", "Z"],
  Et = ["translate", "scale", "rotate", "skew"],
  $ = { x: "translateX", y: "translateY", z: "translateZ" },
  Q = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  Ot = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: Q,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: T },
    skew: Q,
  },
  I = new Map(),
  G = (t) => `--motion-${t}`,
  z = ["x", "y", "z"];
Et.forEach((t) => {
  xt.forEach((e) => {
    z.push(t + e), I.set(G(t + e), Ot[t]);
  });
});
const Dt = (t, e) => z.indexOf(t) - z.indexOf(e),
  Mt = new Set(z),
  ct = (t) => Mt.has(t),
  Pt = (t, e) => {
    $[e] && (e = $[e]);
    const { transforms: s } = ot(t);
    ft(s, e), (t.style.transform = Rt(s));
  },
  Rt = (t) => t.sort(Dt).reduce(Ft, "").trim(),
  Ft = (t, e) => `${t} ${e}(var(${G(e)}))`,
  W = (t) => t.startsWith("--"),
  Y = new Set();
function It(t) {
  if (!Y.has(t)) {
    Y.add(t);
    try {
      const { syntax: e, initialValue: s } = I.has(t) ? I.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: e,
        initialValue: s,
      });
    } catch {}
  }
}
const L = (t, e) => document.createElement("div").animate(t, e),
  k = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        L({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!L({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        L({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  N = {},
  S = {};
for (const t in k) S[t] = () => (N[t] === void 0 && (N[t] = k[t]()), N[t]);
const Vt = 0.015,
  jt = (t, e) => {
    let s = "";
    const n = Math.round(e / Vt);
    for (let i = 0; i < n; i++) s += t(Z(0, n - 1, i)) + ", ";
    return s.substring(0, s.length - 2);
  },
  tt = (t, e) =>
    F(t)
      ? S.linearEasing()
        ? `linear(${jt(t, e)})`
        : d.easing
      : at(t)
      ? _t(t)
      : t,
  _t = ([t, e, s, n]) => `cubic-bezier(${t}, ${e}, ${s}, ${n})`;
function qt(t, e) {
  for (let s = 0; s < t.length; s++)
    t[s] === null && (t[s] = s ? t[s - 1] : e());
  return t;
}
const Ut = (t) => (Array.isArray(t) ? t : [t]);
function X(t) {
  return $[t] && (t = $[t]), ct(t) ? G(t) : t;
}
const U = {
  get: (t, e) => {
    e = X(e);
    let s = W(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!s && s !== 0) {
      const n = I.get(e);
      n && (s = n.initialValue);
    }
    return s;
  },
  set: (t, e, s) => {
    (e = X(e)), W(e) ? t.style.setProperty(e, s) : (t.style[e] = s);
  },
};
function lt(t, e = !0) {
  if (!(!t || t.playState === "finished"))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch {}
}
function $t(t, e) {
  var s;
  let n = e?.toDefaultUnit || T;
  const i = t[t.length - 1];
  if (gt(i)) {
    const a =
      ((s = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || s === void 0
        ? void 0
        : s[2]) || "";
    a && (n = (r) => r + a);
  }
  return n;
}
function zt() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Zt(t, e, s, n = {}, i) {
  const a = zt(),
    r = n.record !== !1 && a;
  let o,
    {
      duration: f = d.duration,
      delay: g = d.delay,
      endDelay: V = d.endDelay,
      repeat: m = d.repeat,
      easing: l = d.easing,
      persist: h = !1,
      direction: x,
      offset: E,
      allowWebkitAcceleration: y = !1,
    } = n;
  const j = ot(t),
    O = ct(e);
  let A = S.waapi();
  O && Pt(t, e);
  const p = X(e),
    _ = wt(j.values, p),
    v = I.get(p);
  return (
    lt(_.animation, !(B(l) && _.generator) && n.record !== !1),
    () => {
      const q = () => {
        var c, D;
        return (D =
          (c = U.get(t, p)) !== null && c !== void 0 ? c : v?.initialValue) !==
          null && D !== void 0
          ? D
          : 0;
      };
      let u = qt(Ut(s), q);
      const H = $t(u, v);
      if (B(l)) {
        const c = l.createAnimation(u, e !== "opacity", q, p, _);
        (l = c.easing), (u = c.keyframes || u), (f = c.duration || f);
      }
      if (
        (W(p) && (S.cssRegisterProperty() ? It(p) : (A = !1)),
        O && !S.linearEasing() && (F(l) || (w(l) && l.some(F))) && (A = !1),
        A)
      ) {
        v && (u = u.map((b) => (R(b) ? v.toDefaultUnit(b) : b))),
          u.length === 1 && (!S.partialKeyframes() || r) && u.unshift(q());
        const c = {
          delay: P.ms(g),
          duration: P.ms(f),
          endDelay: P.ms(V),
          easing: w(l) ? void 0 : tt(l, f),
          direction: x,
          iterations: m + 1,
          fill: "both",
        };
        (o = t.animate(
          { [p]: u, offset: E, easing: w(l) ? l.map((b) => tt(b, f)) : void 0 },
          c
        )),
          o.finished ||
            (o.finished = new Promise((b, ut) => {
              (o.onfinish = b), (o.oncancel = ut);
            }));
        const D = u[u.length - 1];
        o.finished
          .then(() => {
            h || (U.set(t, p, D), o.cancel());
          })
          .catch(nt),
          y || (o.playbackRate = 1.000001);
      } else if (i && O)
        (u = u.map((c) => (typeof c == "string" ? parseFloat(c) : c))),
          u.length === 1 && u.unshift(parseFloat(q())),
          (o = new i(
            (c) => {
              U.set(t, p, H ? H(c) : c);
            },
            u,
            Object.assign(Object.assign({}, n), { duration: f, easing: l })
          ));
      else {
        const c = u[u.length - 1];
        U.set(t, p, v && R(c) ? v.toDefaultUnit(c) : c);
      }
      return (
        r &&
          a(
            t,
            e,
            u,
            { duration: f, delay: g, easing: l, repeat: m, offset: E },
            "motion-one"
          ),
        _.setAnimation(o),
        o
      );
    }
  );
}
const Gt = (t, e) =>
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
function Ht(t, e) {
  var s;
  return (
    typeof t == "string"
      ? e
        ? (((s = e[t]) !== null && s !== void 0) ||
            (e[t] = document.querySelectorAll(t)),
          (t = e[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
const Ct = (t) => t(),
  Jt = (t, e, s = d.duration) =>
    new Proxy(
      { animations: t.map(Ct).filter(Boolean), duration: s, options: e },
      Nt
    ),
  Lt = (t) => t.animations[0],
  Nt = {
    get: (t, e) => {
      const s = Lt(t);
      switch (e) {
        case "duration":
          return t.duration;
        case "currentTime":
          return P.s(s?.[e] || 0);
        case "playbackRate":
        case "playState":
          return s?.[e];
        case "finished":
          return (
            t.finished ||
              (t.finished = Promise.all(t.animations.map(Bt)).catch(nt)),
            t.finished
          );
        case "stop":
          return () => {
            t.animations.forEach((n) => lt(n));
          };
        case "forEachNative":
          return (n) => {
            t.animations.forEach((i) => n(i, t));
          };
        default:
          return typeof s?.[e] > "u"
            ? void 0
            : () => t.animations.forEach((n) => n[e]());
      }
    },
    set: (t, e, s) => {
      switch (e) {
        case "currentTime":
          s = P.ms(s);
        case "currentTime":
        case "playbackRate":
          for (let n = 0; n < t.animations.length; n++) t.animations[n][e] = s;
          return !0;
      }
      return !1;
    },
  },
  Bt = (t) => t.finished;
function Qt(t = 0.1, { start: e = 0, from: s = 0, easing: n } = {}) {
  return (i, a) => {
    const r = R(s) ? s : Kt(s, a),
      o = Math.abs(r - i);
    let f = t * o;
    if (n) {
      const g = a * t;
      f = K(n)(f / g) * g;
    }
    return e + f;
  };
}
function Kt(t, e) {
  if (t === "first") return 0;
  {
    const s = e - 1;
    return t === "last" ? s : s / 2;
  }
}
function Yt(t, e, s) {
  return F(t) ? t(e, s) : t;
}
export {
  Xt as A,
  Yt as a,
  Zt as b,
  R as c,
  dt as d,
  Wt as e,
  gt as f,
  Gt as g,
  d as h,
  F as i,
  B as j,
  Ut as k,
  pt as l,
  st as m,
  it as n,
  T as o,
  Z as p,
  $t as q,
  Ht as r,
  Qt as s,
  P as t,
  I as u,
  X as v,
  Jt as w,
};

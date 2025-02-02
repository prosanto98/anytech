import {
  S as Z,
  i as W,
  s as Y,
  e as L,
  t as z,
  b as H,
  Y as j,
  d as A,
  f as T,
  g as I,
  h as _,
  j as J,
  Z as G,
  m as p,
  n as Q,
  o as w,
  q as N,
  r as X,
  L as k,
  U as V,
  C as E,
} from "./index.b1a51e70.js";
import {
  t as $,
  o as F,
  q as ee,
  u as te,
  v as ne,
  c as se,
  f as ae,
} from "./stagger.es.4e1bdac2.js";
import { a as y } from "./animate.es.d9152120.js";
function re(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ie = 5;
function K(t, e, s) {
  const l = Math.max(e - ie, 0);
  return re(s - t(l), e - l);
}
const v = { stiffness: 100, damping: 10, mass: 1 },
  oe = (t = v.stiffness, e = v.damping, s = v.mass) =>
    e / (2 * Math.sqrt(t * s));
function le(t, e, s) {
  return (t < e && s >= e) || (t > e && s <= e);
}
const ce = ({
    stiffness: t = v.stiffness,
    damping: e = v.damping,
    mass: s = v.mass,
    from: l = 0,
    to: o = 1,
    velocity: i = 0,
    restSpeed: n = 2,
    restDistance: f = 0.5,
  } = {}) => {
    i = i ? $.s(i) : 0;
    const c = { done: !1, hasReachedTarget: !1, current: l, target: o },
      h = o - l,
      a = Math.sqrt(t / s) / 1e3,
      u = oe(t, e, s);
    let d;
    if (u < 1) {
      const r = a * Math.sqrt(1 - u * u);
      d = (g) =>
        o -
        Math.exp(-u * a * g) *
          (((-i + u * a * h) / r) * Math.sin(r * g) + h * Math.cos(r * g));
    } else d = (r) => o - Math.exp(-a * r) * (h + (-i + a * h) * r);
    return (r) => {
      c.current = d(r);
      const g = r === 0 ? i : K(d, r, c.current),
        b = Math.abs(g) <= n,
        M = Math.abs(o - c.current) <= f;
      return (c.done = b && M), (c.hasReachedTarget = le(l, o, c.current)), c;
    };
  },
  D = 10,
  ue = 1e4;
function fe(t, e = F) {
  let s,
    l = D,
    o = t(0);
  const i = [e(o.current)];
  for (; !o.done && l < ue; )
    (o = t(l)),
      i.push(e(o.done ? o.target : o.current)),
      s === void 0 && o.hasReachedTarget && (s = l),
      (l += D);
  const n = l - D;
  return (
    i.length === 1 && i.push(o.current),
    { keyframes: i, duration: n / 1e3, overshootDuration: (s ?? n) / 1e3 }
  );
}
function B(t) {
  return se(t) && !isNaN(t);
}
function R(t) {
  return ae(t) ? parseFloat(t) : t;
}
function he(t) {
  const e = new WeakMap();
  return (s = {}) => {
    const l = new Map(),
      o = (n = 0, f = 100, c = 0, h = !1) => {
        const a = `${n}-${f}-${c}-${h}`;
        return (
          l.has(a) ||
            l.set(
              a,
              t(
                Object.assign(
                  {
                    from: n,
                    to: f,
                    velocity: c,
                    restSpeed: h ? 0.05 : 2,
                    restDistance: h ? 0.01 : 0.5,
                  },
                  s
                )
              )
            ),
          l.get(a)
        );
      },
      i = (n, f) => (e.has(n) || e.set(n, fe(n, f)), e.get(n));
    return {
      createAnimation: (n, f = !0, c, h, a) => {
        let u,
          d,
          r,
          g = 0,
          b = F;
        const M = n.length;
        if (f) {
          b = ee(n, h ? te.get(ne(h)) : void 0);
          const x = n[M - 1];
          if (((r = R(x)), M > 1 && n[0] !== null)) d = R(n[0]);
          else {
            const C = a?.generator;
            if (C) {
              const { animation: m, generatorStartTime: O } = a,
                P = m?.startTime || O || 0,
                S = m?.currentTime || performance.now() - P,
                q = C(S).current;
              (d = q), (g = K((U) => C(U).current, S, q));
            } else c && (d = R(c()));
          }
        }
        if (B(d) && B(r)) {
          const x = o(d, r, g, h?.includes("scale"));
          (u = Object.assign(Object.assign({}, i(x, b)), { easing: "linear" })),
            a &&
              ((a.generator = x), (a.generatorStartTime = performance.now()));
        }
        return (
          u ||
            (u = { easing: "ease", duration: i(o(0, 100)).overshootDuration }),
          u
        );
      },
    };
  };
}
const de = he(ce);
function pe(t) {
  let e, s, l, o, i, n, f, c, h;
  return {
    c() {
      (e = L("a")),
        (s = L("span")),
        (l = z(t[1])),
        (o = H()),
        (i = j("svg")),
        (n = j("path")),
        this.h();
    },
    l(a) {
      e = A(a, "A", { class: !0, href: !0 });
      var u = T(e);
      s = A(u, "SPAN", {});
      var d = T(s);
      (l = I(d, t[1])),
        d.forEach(_),
        (o = J(u)),
        (i = G(u, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        }));
      var r = T(i);
      (n = G(r, "path", { d: !0, fill: !0 })),
        T(n).forEach(_),
        r.forEach(_),
        u.forEach(_),
        this.h();
    },
    h() {
      p(
        n,
        "d",
        "M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
      ),
        p(n, "fill", "white"),
        p(i, "width", "6"),
        p(i, "height", "9"),
        p(i, "viewBox", "0 0 6 9"),
        p(i, "fill", "none"),
        p(i, "xmlns", "http://www.w3.org/2000/svg"),
        p(
          e,
          "class",
          (f =
            "md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] " +
            (t[2] === "solid" && "bg-orange-main") +
            " " +
            (t[2] === "outline" && "border "))
        ),
        p(e, "href", t[0]);
    },
    m(a, u) {
      Q(a, e, u),
        w(e, s),
        w(s, l),
        t[6](s),
        w(e, o),
        w(e, i),
        w(i, n),
        t[7](i),
        c ||
          ((h = [N(e, "mouseenter", t[8]), N(e, "mouseleave", t[9])]),
          (c = !0));
    },
    p(a, [u]) {
      u & 2 && X(l, a[1]),
        u & 4 &&
          f !==
            (f =
              "md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] " +
              (a[2] === "solid" && "bg-orange-main") +
              " " +
              (a[2] === "outline" && "border ")) &&
          p(e, "class", f),
        u & 1 && p(e, "href", a[0]);
    },
    i: k,
    o: k,
    d(a) {
      a && _(e), t[6](null), t[7](null), (c = !1), V(h);
    },
  };
}
function ge(t, e, s) {
  let { href: l } = e,
    { title: o } = e,
    { variant: i = "solid" } = e,
    n,
    f,
    c = { easing: de({ velocity: 30, damping: 10 }) };
  function h(r) {
    E[r ? "unshift" : "push"](() => {
      (n = r), s(3, n);
    });
  }
  function a(r) {
    E[r ? "unshift" : "push"](() => {
      (f = r), s(4, f);
    });
  }
  const u = () => {
      y(n, { x: "-2.5px" }, c), y(f, { x: "2.5px" }, c);
    },
    d = () => {
      y(n, { x: "0px" }, c), y(f, { x: "0px" }, c);
    };
  return (
    (t.$$set = (r) => {
      "href" in r && s(0, (l = r.href)),
        "title" in r && s(1, (o = r.title)),
        "variant" in r && s(2, (i = r.variant));
    }),
    [l, o, i, n, f, c, h, a, u, d]
  );
}
class _e extends Z {
  constructor(e) {
    super(), W(this, e, ge, pe, Y, { href: 0, title: 1, variant: 2 });
  }
}
export { _e as C };

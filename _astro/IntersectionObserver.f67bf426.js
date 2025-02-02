import {
  S as y,
  i as O,
  s as d,
  F as E,
  G as w,
  H as S,
  I as k,
  u as q,
  v as z,
  M as C,
  N as D,
  O as F,
  P as G,
} from "./index.b1a51e70.js";
const H = (l) => ({ intersecting: l & 1, entry: l & 2, observer: l & 4 }),
  v = (l) => ({ intersecting: l[0], entry: l[1], observer: l[2] });
function N(l) {
  let t;
  const n = l[9].default,
    r = E(n, l, l[8], v);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, i) {
      r && r.m(s, i), (t = !0);
    },
    p(s, [i]) {
      r &&
        r.p &&
        (!t || i & 263) &&
        w(r, n, s, s[8], t ? k(n, s[8], i, H) : S(s[8]), v);
    },
    i(s) {
      t || (q(r, s), (t = !0));
    },
    o(s) {
      z(r, s), (t = !1);
    },
    d(s) {
      r && r.d(s);
    },
  };
}
function P(l, t, n) {
  let { $$slots: r = {}, $$scope: s } = t,
    { element: i = null } = t,
    { once: a = !1 } = t,
    { intersecting: _ = !1 } = t,
    { root: g = null } = t,
    { rootMargin: f = "0px" } = t,
    { threshold: b = 0 } = t,
    { entry: c = null } = t,
    { observer: o = null } = t;
  const m = C();
  let h = null,
    u = null;
  const I = () => {
    n(
      2,
      (o = new IntersectionObserver(
        (e) => {
          e.forEach((M) => {
            n(1, (c = M)), n(0, (_ = M.isIntersecting));
          });
        },
        { root: g, rootMargin: f, threshold: b }
      ))
    );
  };
  return (
    D(
      () => (
        I(),
        () => {
          o && (o.disconnect(), n(2, (o = null)));
        }
      )
    ),
    F(async () => {
      c !== null &&
        (m("observe", c),
        c.isIntersecting && (m("intersect", c), a && o.unobserve(i))),
        await G(),
        i !== null &&
          i !== u &&
          (o.observe(i), u !== null && o.unobserve(u), (u = i)),
        h && f !== h && (o.disconnect(), (u = null), I()),
        (h = f);
    }),
    (l.$$set = (e) => {
      "element" in e && n(3, (i = e.element)),
        "once" in e && n(4, (a = e.once)),
        "intersecting" in e && n(0, (_ = e.intersecting)),
        "root" in e && n(5, (g = e.root)),
        "rootMargin" in e && n(6, (f = e.rootMargin)),
        "threshold" in e && n(7, (b = e.threshold)),
        "entry" in e && n(1, (c = e.entry)),
        "observer" in e && n(2, (o = e.observer)),
        "$$scope" in e && n(8, (s = e.$$scope));
    }),
    [_, c, o, i, a, g, f, b, s, r]
  );
}
class R extends y {
  constructor(t) {
    super(),
      O(this, t, P, N, d, {
        element: 3,
        once: 4,
        intersecting: 0,
        root: 5,
        rootMargin: 6,
        threshold: 7,
        entry: 1,
        observer: 2,
      });
  }
}
const j = R;
export { j as I };

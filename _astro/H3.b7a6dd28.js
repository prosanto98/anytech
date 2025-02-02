import {
  S as c,
  i as h,
  s as d,
  F as m,
  e as g,
  d as x,
  f as H,
  h as r,
  m as u,
  n as b,
  G as v,
  H as M,
  I as S,
  u as q,
  v as C,
  J as f,
  K as _,
} from "./index.b1a51e70.js";
function E(n) {
  let t, i, a;
  const o = n[2].default,
    e = m(o, n, n[1], null);
  return {
    c() {
      (t = g("h3")), e && e.c(), this.h();
    },
    l(s) {
      t = x(s, "H3", { class: !0 });
      var l = H(t);
      e && e.l(l), l.forEach(r), this.h();
    },
    h() {
      u(
        t,
        "class",
        (i =
          n[0].class +
          " text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat")
      );
    },
    m(s, l) {
      b(s, t, l), e && e.m(t, null), (a = !0);
    },
    p(s, [l]) {
      e &&
        e.p &&
        (!a || l & 2) &&
        v(e, o, s, s[1], a ? S(o, s[1], l, null) : M(s[1]), null),
        (!a ||
          (l & 1 &&
            i !==
              (i =
                s[0].class +
                " text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat"))) &&
          u(t, "class", i);
    },
    i(s) {
      a || (q(e, s), (a = !0));
    },
    o(s) {
      C(e, s), (a = !1);
    },
    d(s) {
      s && r(t), e && e.d(s);
    },
  };
}
function F(n, t, i) {
  let { $$slots: a = {}, $$scope: o } = t;
  return (
    (n.$$set = (e) => {
      i(0, (t = f(f({}, t), _(e)))), "$$scope" in e && i(1, (o = e.$$scope));
    }),
    (t = _(t)),
    [t, o, a]
  );
}
class I extends c {
  constructor(t) {
    super(), h(this, t, F, E, d, {});
  }
}
export { I as H };

import {
  S as c,
  i as h,
  s as d,
  F as m,
  e as g,
  d as H,
  f as v,
  h as r,
  m as f,
  n as x,
  G as M,
  H as S,
  I as b,
  u as q,
  v as C,
  J as u,
  K as _,
} from "./index.b1a51e70.js";
function E(n) {
  let t, i, a;
  const o = n[2].default,
    e = m(o, n, n[1], null);
  return {
    c() {
      (t = g("h1")), e && e.c(), this.h();
    },
    l(s) {
      t = H(s, "H1", { class: !0 });
      var l = v(t);
      e && e.l(l), l.forEach(r), this.h();
    },
    h() {
      f(
        t,
        "class",
        (i =
          n[0].class +
          " lg:text-head-1 font-Montserrat text-res-head-1 text-white")
      );
    },
    m(s, l) {
      x(s, t, l), e && e.m(t, null), (a = !0);
    },
    p(s, [l]) {
      e &&
        e.p &&
        (!a || l & 2) &&
        M(e, o, s, s[1], a ? b(o, s[1], l, null) : S(s[1]), null),
        (!a ||
          (l & 1 &&
            i !==
              (i =
                s[0].class +
                " lg:text-head-1 font-Montserrat text-res-head-1 text-white"))) &&
          f(t, "class", i);
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
      i(0, (t = u(u({}, t), _(e)))), "$$scope" in e && i(1, (o = e.$$scope));
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

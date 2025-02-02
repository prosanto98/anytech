import {
  S as h,
  i as m,
  s as d,
  F as g,
  e as p,
  d as H,
  f as b,
  h as i,
  m as o,
  V as c,
  n as v,
  G as M,
  H as S,
  I as q,
  u as C,
  v as E,
  J as f,
  K as _,
} from "./index.b1a51e70.js";
function F(n) {
  let s, u, a;
  const r = n[3].default,
    t = g(r, n, n[2], null);
  return {
    c() {
      (s = p("h5")), t && t.c(), this.h();
    },
    l(e) {
      s = H(e, "H5", { class: !0 });
      var l = b(s);
      t && t.l(l), l.forEach(i), this.h();
    },
    h() {
      o(
        s,
        "class",
        (u =
          n[1].class +
          " text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat")
      ),
        c(s, "uppercase", n[0]);
    },
    m(e, l) {
      v(e, s, l), t && t.m(s, null), (a = !0);
    },
    p(e, [l]) {
      t &&
        t.p &&
        (!a || l & 4) &&
        M(t, r, e, e[2], a ? q(r, e[2], l, null) : S(e[2]), null),
        (!a ||
          (l & 2 &&
            u !==
              (u =
                e[1].class +
                " text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat"))) &&
          o(s, "class", u),
        (!a || l & 3) && c(s, "uppercase", e[0]);
    },
    i(e) {
      a || (C(t, e), (a = !0));
    },
    o(e) {
      E(t, e), (a = !1);
    },
    d(e) {
      e && i(s), t && t.d(e);
    },
  };
}
function G(n, s, u) {
  let { $$slots: a = {}, $$scope: r } = s,
    { uppercase: t = !0 } = s;
  return (
    (n.$$set = (e) => {
      u(1, (s = f(f({}, s), _(e)))),
        "uppercase" in e && u(0, (t = e.uppercase)),
        "$$scope" in e && u(2, (r = e.$$scope));
    }),
    (s = _(s)),
    [t, s, r, a]
  );
}
class J extends h {
  constructor(s) {
    super(), m(this, s, G, F, d, { uppercase: 0 });
  }
}
export { J as H };

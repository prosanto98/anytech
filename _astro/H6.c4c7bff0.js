import {
  S as _,
  i as h,
  s as d,
  F as m,
  e as g,
  d as p,
  f as H,
  h as o,
  m as u,
  n as b,
  G as v,
  H as x,
  I as M,
  u as S,
  v as q,
  J as f,
  K as c,
} from "./index.b1a51e70.js";
function C(n) {
  let e, i, a;
  const r = n[2].default,
    t = m(r, n, n[1], null);
  return {
    c() {
      (e = g("h6")), t && t.c(), this.h();
    },
    l(s) {
      e = p(s, "H6", { class: !0 });
      var l = H(e);
      t && t.l(l), l.forEach(o), this.h();
    },
    h() {
      u(
        e,
        "class",
        (i =
          n[0].class +
          " lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat")
      );
    },
    m(s, l) {
      b(s, e, l), t && t.m(e, null), (a = !0);
    },
    p(s, [l]) {
      t &&
        t.p &&
        (!a || l & 2) &&
        v(t, r, s, s[1], a ? M(r, s[1], l, null) : x(s[1]), null),
        (!a ||
          (l & 1 &&
            i !==
              (i =
                s[0].class +
                " lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat"))) &&
          u(e, "class", i);
    },
    i(s) {
      a || (S(t, s), (a = !0));
    },
    o(s) {
      q(t, s), (a = !1);
    },
    d(s) {
      s && o(e), t && t.d(s);
    },
  };
}
function E(n, e, i) {
  let { $$slots: a = {}, $$scope: r } = e;
  return (
    (n.$$set = (t) => {
      i(0, (e = f(f({}, e), c(t)))), "$$scope" in t && i(1, (r = t.$$scope));
    }),
    (e = c(e)),
    [e, r, a]
  );
}
class G extends _ {
  constructor(e) {
    super(), h(this, e, E, C, d, {});
  }
}
export { G as H };

import {
  S as f,
  i as g,
  s as _,
  e as d,
  d as h,
  f as m,
  h as n,
  l as i,
  m as u,
  n as b,
  L as c,
  J as o,
  K as r,
} from "./index.b1a51e70.js";
function v(a) {
  let e, l;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { style: !0, class: !0 })), m(e).forEach(n), this.h();
    },
    h() {
      i(e, "--bullet-bg", a[0]),
        u(
          e,
          "class",
          (l = "swiper-pagination " + a[1].class + " svelte-17j2dom")
        );
    },
    m(t, s) {
      b(t, e, s);
    },
    p(t, [s]) {
      s & 1 && i(e, "--bullet-bg", t[0]),
        s & 2 &&
          l !== (l = "swiper-pagination " + t[1].class + " svelte-17j2dom") &&
          u(e, "class", l);
    },
    i: c,
    o: c,
    d(t) {
      t && n(e);
    },
  };
}
function B(a, e, l) {
  let { bulletBg: t = "#d9ebff" } = e;
  return (
    (a.$$set = (s) => {
      l(1, (e = o(o({}, e), r(s)))), "bulletBg" in s && l(0, (t = s.bulletBg));
    }),
    (e = r(e)),
    [t, e]
  );
}
class P extends f {
  constructor(e) {
    super(), g(this, e, B, v, _, { bulletBg: 0 });
  }
}
export { P };

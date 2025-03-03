import {
  S as U,
  i as q,
  s as E,
  a as W,
  e as C,
  d as F,
  f as G,
  h,
  m as p,
  n as J,
  q as K,
  v as f,
  z as L,
  u as d,
  J as k,
  K as w,
  y as R,
  c as b,
  k as y,
  p as z,
  L as v,
  w as I,
} from "./index.b1a51e70.js";
import { i as S } from "./helpers.b4f12cfb.js";
import { S as B } from "./sanity-image.c13ea8e9.js";
import "./image-url.umd.aa29a042.js";
import "./_commonjsHelpers.042e6b4d.js";
function j(l) {
  let t, a;
  return (
    (t = new B({
      props: {
        sizes: "95vw",
        src: l[2],
        imageUrlBuilder: S,
        class: "h-full w-full md:hidden",
        alt: l[2].alt,
        loading: "lazy",
      },
    })),
    {
      c() {
        b(t.$$.fragment);
      },
      l(e) {
        y(t.$$.fragment, e);
      },
      m(e, s) {
        z(t, e, s), (a = !0);
      },
      p: v,
      i(e) {
        a || (d(t.$$.fragment, e), (a = !0));
      },
      o(e) {
        f(t.$$.fragment, e), (a = !1);
      },
      d(e) {
        I(t, e);
      },
    }
  );
}
function A(l) {
  let t, a;
  return (
    (t = new B({
      props: {
        sizes: "95vw",
        src: l[1],
        imageUrlBuilder: S,
        class: "h-full w-full hidden md:block",
        alt: l[1].alt,
        loading: "lazy",
      },
    })),
    {
      c() {
        b(t.$$.fragment);
      },
      l(e) {
        y(t.$$.fragment, e);
      },
      m(e, s) {
        z(t, e, s), (a = !0);
      },
      p: v,
      i(e) {
        a || (d(t.$$.fragment, e), (a = !0));
      },
      o(e) {
        f(t.$$.fragment, e), (a = !1);
      },
      d(e) {
        I(t, e);
      },
    }
  );
}
function D(l) {
  let t, a, e, s, o, u, m;
  W(l[5]);
  const c = [A, j],
    i = [];
  function g(n, r) {
    return n[0] >= 768 ? 0 : 1;
  }
  return (
    (a = g(l)),
    (e = i[a] = c[a](l)),
    {
      c() {
        (t = C("figure")), e.c(), this.h();
      },
      l(n) {
        t = F(n, "FIGURE", { class: !0 });
        var r = G(t);
        e.l(r), r.forEach(h), this.h();
      },
      h() {
        p(t, "class", (s = l[3].class));
      },
      m(n, r) {
        J(n, t, r),
          i[a].m(t, null),
          (o = !0),
          u || ((m = K(window, "resize", l[5])), (u = !0));
      },
      p(n, [r]) {
        let _ = a;
        (a = g(n)),
          a === _
            ? i[a].p(n, r)
            : (R(),
              f(i[_], 1, 1, () => {
                i[_] = null;
              }),
              L(),
              (e = i[a]),
              e ? e.p(n, r) : ((e = i[a] = c[a](n)), e.c()),
              d(e, 1),
              e.m(t, null)),
          (!o || (r & 8 && s !== (s = n[3].class))) && p(t, "class", s);
      },
      i(n) {
        o || (d(e), (o = !0));
      },
      o(n) {
        f(e), (o = !1);
      },
      d(n) {
        n && h(t), i[a].d(), (u = !1), m();
      },
    }
  );
}
function H(l, t, a) {
  let { images: e } = t,
    { desktopImage: s, mobileImage: o } = e,
    u = 0;
  function m() {
    a(0, (u = window.innerWidth));
  }
  return (
    (l.$$set = (c) => {
      a(3, (t = k(k({}, t), w(c)))), "images" in c && a(4, (e = c.images));
    }),
    (t = w(t)),
    [u, s, o, t, e, m]
  );
}
class T extends U {
  constructor(t) {
    super(), q(this, t, H, D, E, { images: 4 });
  }
}
export { T as default };

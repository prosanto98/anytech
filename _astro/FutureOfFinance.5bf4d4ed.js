import {
  S as O,
  i as R,
  s as M,
  e as _,
  c as $,
  b as C,
  d as h,
  f as F,
  k as b,
  h as d,
  j as G,
  m as p,
  n as z,
  o as v,
  p as w,
  L as U,
  u as y,
  v as E,
  w as I,
  N as L,
  C as k,
  B as W,
  a as T,
  D as V,
  q as A,
  E as H,
  U as J,
} from "./index.b1a51e70.js";
import K from "./Divider.add9a9d9.js";
import { C as P } from "./ContentBlockWithIcons.48e08d52.js";
import { i as j, b as N, a as Q } from "./helpers.b4f12cfb.js";
import { S as B } from "./sanity-image.c13ea8e9.js";
import { a as S } from "./animate.es.d9152120.js";
import { I as X } from "./IntersectionObserver.f67bf426.js";
import "./PortableText.1d01a1ba.js";
import "./H1.35f16beb.js";
import "./H2.7116a46a.js";
import "./H3.b7a6dd28.js";
import "./H4.9e23182b.js";
import "./H5.b9002f0d.js";
import "./H6.c4c7bff0.js";
import "./image-url.umd.aa29a042.js";
import "./_commonjsHelpers.042e6b4d.js";
import "./stagger.es.4e1bdac2.js";
function Y(i) {
  let e, t, n, r, s, l, m, f, u, o;
  return (
    (n = new B({
      props: {
        src: i[3],
        alt: i[3].alt,
        sizes: "115px",
        class: "object-contain w-full h-full",
        imageUrlBuilder: j,
        loading: "lazy",
      },
    })),
    (l = new B({
      props: {
        src: i[4],
        alt: i[4].alt,
        sizes: "87px",
        class: "object-contain w-full h-full",
        imageUrlBuilder: j,
        loading: "lazy",
      },
    })),
    (u = new B({
      props: {
        class: "object-contain w-full h-full",
        src: i[5],
        alt: i[5].alt,
        sizes: "73px",
        imageUrlBuilder: j,
        loading: "lazy",
      },
    })),
    {
      c() {
        (e = _("div")),
          (t = _("figure")),
          $(n.$$.fragment),
          (r = C()),
          (s = _("figure")),
          $(l.$$.fragment),
          (m = C()),
          (f = _("figure")),
          $(u.$$.fragment),
          this.h();
      },
      l(a) {
        e = h(a, "DIV", {});
        var c = F(e);
        t = h(c, "FIGURE", { class: !0 });
        var D = F(t);
        b(n.$$.fragment, D),
          D.forEach(d),
          (r = G(c)),
          (s = h(c, "FIGURE", { class: !0 }));
        var g = F(s);
        b(l.$$.fragment, g),
          g.forEach(d),
          (m = G(c)),
          (f = h(c, "FIGURE", { class: !0 }));
        var q = F(f);
        b(u.$$.fragment, q), q.forEach(d), c.forEach(d), this.h();
      },
      h() {
        p(
          t,
          "class",
          "absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
        ),
          p(
            s,
            "class",
            "absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
          ),
          p(
            f,
            "class",
            "absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
          );
      },
      m(a, c) {
        z(a, e, c),
          v(e, t),
          w(n, t, null),
          i[7](t),
          v(e, r),
          v(e, s),
          w(l, s, null),
          i[8](s),
          v(e, m),
          v(e, f),
          w(u, f, null),
          i[9](f),
          (o = !0);
      },
      p: U,
      i(a) {
        o ||
          (y(n.$$.fragment, a),
          y(l.$$.fragment, a),
          y(u.$$.fragment, a),
          (o = !0));
      },
      o(a) {
        E(n.$$.fragment, a), E(l.$$.fragment, a), E(u.$$.fragment, a), (o = !1);
      },
      d(a) {
        a && d(e), I(n), i[7](null), I(l), i[8](null), I(u), i[9](null);
      },
    }
  );
}
function Z(i, e, t) {
  let { icons: n } = e;
  const [r, s, l] = n;
  let m, f, u;
  const { easingFunctionCoordinates: o } = N;
  L(() => {
    S(
      m,
      { y: ["-5%", "5%", "-5%"], x: "50%" },
      { repeat: 1 / 0, duration: 20, easing: o, x: { delay: 0, duration: 0 } }
    ),
      S(
        f,
        { y: ["-7%", "7%", "-7%"] },
        { repeat: 1 / 0, duration: 16, easing: o }
      ),
      S(
        u,
        { y: ["-12%", "12%", "-12%"], x: "-50%" },
        { repeat: 1 / 0, duration: 15, easing: o, x: { delay: 0, duration: 0 } }
      );
  });
  function a(g) {
    k[g ? "unshift" : "push"](() => {
      (m = g), t(0, m);
    });
  }
  function c(g) {
    k[g ? "unshift" : "push"](() => {
      (f = g), t(1, f);
    });
  }
  function D(g) {
    k[g ? "unshift" : "push"](() => {
      (u = g), t(2, u);
    });
  }
  return (
    (i.$$set = (g) => {
      "icons" in g && t(6, (n = g.icons));
    }),
    [m, f, u, r, s, l, n, a, c, D]
  );
}
class x extends O {
  constructor(e) {
    super(), R(this, e, Z, Y, M, { icons: 6 });
  }
}
function ee(i) {
  let e, t, n, r, s, l, m;
  return {
    c() {
      (e = _("figure")),
        (t = _("img")),
        (r = C()),
        (s = _("figure")),
        (l = _("img")),
        this.h();
    },
    l(f) {
      e = h(f, "FIGURE", { class: !0 });
      var u = F(e);
      (t = h(u, "IMG", { class: !0, loading: !0, src: !0, alt: !0 })),
        u.forEach(d),
        (r = G(f)),
        (s = h(f, "FIGURE", { class: !0 }));
      var o = F(s);
      (l = h(o, "IMG", { class: !0, loading: !0, src: !0, alt: !0 })),
        o.forEach(d),
        this.h();
    },
    h() {
      p(t, "class", "object-cover w-full h-full overflow-visible"),
        p(t, "loading", "lazy"),
        W(t.src, (n = "/backgrounds/home/futureOfFinance/background.svg")) ||
          p(t, "src", n),
        p(t, "alt", "background frame"),
        p(e, "class", "absolute inset-0 w-full h-full -z-10"),
        p(l, "class", "object-cover w-full h-full overflow-visible"),
        p(l, "loading", "lazy"),
        W(l.src, (m = "/backgrounds/home/futureOfFinance/foreground.png")) ||
          p(l, "src", m),
        p(l, "alt", "foreground frame"),
        p(
          s,
          "class",
          "absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
        );
    },
    m(f, u) {
      z(f, e, u), v(e, t), i[3](e), z(f, r, u), z(f, s, u), v(s, l), i[4](s);
    },
    p: U,
    i: U,
    o: U,
    d(f) {
      f && d(e), i[3](null), f && d(r), f && d(s), i[4](null);
    },
  };
}
function ne(i, e, t) {
  let { scrollDistance: n } = e,
    r,
    s;
  const { easingFunction: l } = N,
    m = (a, c = 5) => {
      (a.style.transform = `translate3d(0%, ${n * c}%, 0)`),
        (a.style.transition = `transform 2500ms ${l} 0ms`),
        (a.style.animationFillMode = "forwards");
    },
    f = () => {
      r && s && (m(r, 5), m(s, -2));
    };
  function u(a) {
    k[a ? "unshift" : "push"](() => {
      (r = a), t(0, r);
    });
  }
  function o(a) {
    k[a ? "unshift" : "push"](() => {
      (s = a), t(1, s);
    });
  }
  return (
    (i.$$set = (a) => {
      "scrollDistance" in a && t(2, (n = a.scrollDistance));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && f();
    }),
    [r, s, n, u, o]
  );
}
class te extends O {
  constructor(e) {
    super(), R(this, e, ne, ee, M, { scrollDistance: 2 });
  }
}
function re(i) {
  let e, t;
  return (
    (e = new x({ props: { slot: "icons", icons: i[0].icons } })),
    {
      c() {
        $(e.$$.fragment);
      },
      l(n) {
        b(e.$$.fragment, n);
      },
      m(n, r) {
        w(e, n, r), (t = !0);
      },
      p(n, r) {
        const s = {};
        r & 1 && (s.icons = n[0].icons), e.$set(s);
      },
      i(n) {
        t || (y(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        E(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function se(i) {
  let e, t;
  return (
    (e = new te({ props: { slot: "frame", scrollDistance: i[4] } })),
    {
      c() {
        $(e.$$.fragment);
      },
      l(n) {
        b(e.$$.fragment, n);
      },
      m(n, r) {
        w(e, n, r), (t = !0);
      },
      p(n, r) {
        const s = {};
        r & 16 && (s.scrollDistance = n[4]), e.$set(s);
      },
      i(n) {
        t || (y(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        E(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function ie(i) {
  let e, t, n;
  return (
    (t = new P({
      props: {
        props: i[0],
        $$slots: { frame: [se], icons: [re] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (e = _("section")), $(t.$$.fragment), this.h();
      },
      l(r) {
        e = h(r, "SECTION", { class: !0 });
        var s = F(e);
        b(t.$$.fragment, s), s.forEach(d), this.h();
      },
      h() {
        p(e, "class", "container mt-[62px]");
      },
      m(r, s) {
        z(r, e, s), w(t, e, null), i[7](e), (n = !0);
      },
      p(r, s) {
        const l = {};
        s & 1 && (l.props = r[0]),
          s & 529 && (l.$$scope = { dirty: s, ctx: r }),
          t.$set(l);
      },
      i(r) {
        n || (y(t.$$.fragment, r), (n = !0));
      },
      o(r) {
        E(t.$$.fragment, r), (n = !1);
      },
      d(r) {
        r && d(e), I(t), i[7](null);
      },
    }
  );
}
function oe(i) {
  let e, t, n, r, s, l, m;
  T(i[6]);
  function f(o) {
    i[8](o);
  }
  let u = { element: i[1], $$slots: { default: [ie] }, $$scope: { ctx: i } };
  return (
    i[3] !== void 0 && (u.intersecting = i[3]),
    (e = new X({ props: u })),
    k.push(() => V(e, "intersecting", f)),
    (r = new K({})),
    {
      c() {
        $(e.$$.fragment), (n = C()), $(r.$$.fragment);
      },
      l(o) {
        b(e.$$.fragment, o), (n = G(o)), b(r.$$.fragment, o);
      },
      m(o, a) {
        w(e, o, a),
          z(o, n, a),
          w(r, o, a),
          (s = !0),
          l ||
            ((m = [A(window, "scroll", i[5]), A(window, "resize", i[6])]),
            (l = !0));
      },
      p(o, [a]) {
        const c = {};
        a & 2 && (c.element = o[1]),
          a & 531 && (c.$$scope = { dirty: a, ctx: o }),
          !t && a & 8 && ((t = !0), (c.intersecting = o[3]), H(() => (t = !1))),
          e.$set(c);
      },
      i(o) {
        s || (y(e.$$.fragment, o), y(r.$$.fragment, o), (s = !0));
      },
      o(o) {
        E(e.$$.fragment, o), E(r.$$.fragment, o), (s = !1);
      },
      d(o) {
        I(e, o), o && d(n), I(r, o), (l = !1), J(m);
      },
    }
  );
}
function ae(i, e, t) {
  let { props: n } = e,
    r,
    s = 0,
    l = !1,
    m = 0;
  const f = () => {
    l && t(4, (m = Q(r)));
  };
  function u() {
    t(2, (s = window.innerWidth));
  }
  function o(c) {
    k[c ? "unshift" : "push"](() => {
      (r = c), t(1, r);
    });
  }
  function a(c) {
    (l = c), t(3, l);
  }
  return (
    (i.$$set = (c) => {
      "props" in c && t(0, (n = c.props));
    }),
    [n, r, s, l, m, f, u, o, a]
  );
}
class Fe extends O {
  constructor(e) {
    super(), R(this, e, ae, oe, M, { props: 0 });
  }
}
export { Fe as default };

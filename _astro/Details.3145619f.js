import {
  S as V,
  i as q,
  s as z,
  C as F,
  D as R,
  c as H,
  k as M,
  p as N,
  E as U,
  u as d,
  v as D,
  w as O,
  e as b,
  t as k,
  d as v,
  f as x,
  g as E,
  h,
  n as j,
  o as m,
  r as I,
  m as w,
  z as G,
  A as J,
  b as B,
  j as C,
  y as K,
} from "./index.b1a51e70.js";
import { I as L } from "./IntersectionObserver.f67bf426.js";
function Q(i) {
  let e, r;
  return {
    c() {
      (e = b("span")), (r = k(i[1]));
    },
    l(s) {
      e = v(s, "SPAN", {});
      var n = x(e);
      (r = E(n, i[1])), n.forEach(h);
    },
    m(s, n) {
      j(s, e, n), m(e, r), i[4](e);
    },
    p(s, n) {
      n & 2 && I(r, s[1]);
    },
    d(s) {
      s && h(e), i[4](null);
    },
  };
}
function T(i) {
  let e, r, s;
  function n(t) {
    i[5](t);
  }
  let o = { element: i[2], $$slots: { default: [Q] }, $$scope: { ctx: i } };
  return (
    i[0] !== void 0 && (o.intersecting = i[0]),
    (e = new L({ props: o })),
    F.push(() => R(e, "intersecting", n)),
    {
      c() {
        H(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, a) {
        N(e, t, a), (s = !0);
      },
      p(t, [a]) {
        const l = {};
        a & 4 && (l.element = t[2]),
          a & 134 && (l.$$scope = { dirty: a, ctx: t }),
          !r && a & 1 && ((r = !0), (l.intersecting = t[0]), U(() => (r = !1))),
          e.$set(l);
      },
      i(t) {
        s || (d(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        O(e, t);
      },
    }
  );
}
function W(i, e, r) {
  let s = !1,
    { value: n } = e,
    o = 0,
    t,
    a = setInterval(() => {
      s && (r(1, (o += n > 50 ? 4 : 1)), o === n && clearInterval(a));
    }, 20);
  function l(u) {
    F[u ? "unshift" : "push"](() => {
      (t = u), r(2, t);
    });
  }
  function g(u) {
    (s = u), r(0, s);
  }
  return (
    (i.$$set = (u) => {
      "value" in u && r(3, (n = u.value));
    }),
    [s, o, t, n, l, g]
  );
}
class X extends V {
  constructor(e) {
    super(), q(this, e, W, T, z, { value: 3 });
  }
}
function A(i, e, r) {
  const s = i.slice();
  return (
    (s[1] = e[r].frontSymbol),
    (s[2] = e[r].number),
    (s[3] = e[r].backSymbol),
    (s[4] = e[r].description),
    s
  );
}
function P(i) {
  let e,
    r,
    s = (i[1] ?? "") + "",
    n,
    o,
    t = (i[3] ?? "") + "",
    a,
    l,
    g,
    u = i[4] + "",
    $,
    S,
    _;
  return (
    (o = new X({ props: { value: i[2] } })),
    {
      c() {
        (e = b("div")),
          (r = b("h2")),
          (n = k(s)),
          H(o.$$.fragment),
          (a = k(t)),
          (l = B()),
          (g = b("p")),
          ($ = k(u)),
          (S = B()),
          this.h();
      },
      l(c) {
        e = v(c, "DIV", { class: !0 });
        var f = x(e);
        r = v(f, "H2", { class: !0 });
        var p = x(r);
        (n = E(p, s)),
          M(o.$$.fragment, p),
          (a = E(p, t)),
          p.forEach(h),
          (l = C(f)),
          (g = v(f, "P", { class: !0 }));
        var y = x(g);
        ($ = E(y, u)), y.forEach(h), (S = C(f)), f.forEach(h), this.h();
      },
      h() {
        w(
          r,
          "class",
          "max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text"
        ),
          w(
            g,
            "class",
            "text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]"
          ),
          w(
            e,
            "class",
            "flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
          );
      },
      m(c, f) {
        j(c, e, f),
          m(e, r),
          m(r, n),
          N(o, r, null),
          m(r, a),
          m(e, l),
          m(e, g),
          m(g, $),
          m(e, S),
          (_ = !0);
      },
      p(c, f) {
        (!_ || f & 1) && s !== (s = (c[1] ?? "") + "") && I(n, s);
        const p = {};
        f & 1 && (p.value = c[2]),
          o.$set(p),
          (!_ || f & 1) && t !== (t = (c[3] ?? "") + "") && I(a, t),
          (!_ || f & 1) && u !== (u = c[4] + "") && I($, u);
      },
      i(c) {
        _ || (d(o.$$.fragment, c), (_ = !0));
      },
      o(c) {
        D(o.$$.fragment, c), (_ = !1);
      },
      d(c) {
        c && h(e), O(o);
      },
    }
  );
}
function Y(i) {
  let e,
    r,
    s = i[0],
    n = [];
  for (let t = 0; t < s.length; t += 1) n[t] = P(A(i, s, t));
  const o = (t) =>
    D(n[t], 1, 1, () => {
      n[t] = null;
    });
  return {
    c() {
      e = b("div");
      for (let t = 0; t < n.length; t += 1) n[t].c();
      this.h();
    },
    l(t) {
      e = v(t, "DIV", { class: !0 });
      var a = x(e);
      for (let l = 0; l < n.length; l += 1) n[l].l(a);
      a.forEach(h), this.h();
    },
    h() {
      w(
        e,
        "class",
        "items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28"
      );
    },
    m(t, a) {
      j(t, e, a);
      for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
      r = !0;
    },
    p(t, [a]) {
      if (a & 1) {
        s = t[0];
        let l;
        for (l = 0; l < s.length; l += 1) {
          const g = A(t, s, l);
          n[l]
            ? (n[l].p(g, a), d(n[l], 1))
            : ((n[l] = P(g)), n[l].c(), d(n[l], 1), n[l].m(e, null));
        }
        for (K(), l = s.length; l < n.length; l += 1) o(l);
        G();
      }
    },
    i(t) {
      if (!r) {
        for (let a = 0; a < s.length; a += 1) d(n[a]);
        r = !0;
      }
    },
    o(t) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1) D(n[a]);
      r = !1;
    },
    d(t) {
      t && h(e), J(n, t);
    },
  };
}
function Z(i, e, r) {
  let { details: s } = e;
  return (
    (i.$$set = (n) => {
      "details" in n && r(0, (s = n.details));
    }),
    [s]
  );
}
class ne extends V {
  constructor(e) {
    super(), q(this, e, Z, Y, z, { details: 0 });
  }
}
export { ne as default };

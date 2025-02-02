import {
  S as F,
  i as G,
  s as L,
  a as M,
  Y as p,
  Z as c,
  f,
  h as u,
  m as t,
  n as S,
  o as h,
  q as U,
  L as y,
  J as E,
  K as B,
} from "./index.b1a51e70.js";
function q(i) {
  let e, a, n, s, l, d, _, m, v, g;
  return (
    M(i[2]),
    {
      c() {
        (e = p("svg")),
          (a = p("path")),
          (n = p("defs")),
          (s = p("linearGradient")),
          (l = p("stop")),
          (d = p("stop")),
          this.h();
      },
      l(r) {
        e = c(r, "svg", {
          class: !0,
          preserveAspectRatio: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var o = f(e);
        (a = c(o, "path", { opacity: !0, d: !0, fill: !0 })),
          f(a).forEach(u),
          (n = c(o, "defs", {}));
        var x = f(n);
        s = c(x, "linearGradient", {
          id: !0,
          x1: !0,
          y1: !0,
          x2: !0,
          y2: !0,
          gradientUnits: !0,
        });
        var w = f(s);
        (l = c(w, "stop", { "stop-color": !0 })),
          f(l).forEach(u),
          (d = c(w, "stop", {
            offset: !0,
            "stop-color": !0,
            "stop-opacity": !0,
          })),
          f(d).forEach(u),
          w.forEach(u),
          x.forEach(u),
          o.forEach(u),
          this.h();
      },
      h() {
        t(a, "opacity", "0.7"),
          t(a, "d", "M-240 0L1680 0L-240 280L-240 0Z"),
          t(a, "fill", "url(#paint0_linear_6055_471)"),
          t(l, "stop-color", "#1F80F0"),
          t(d, "offset", "1"),
          t(d, "stop-color", "#1F80F0"),
          t(d, "stop-opacity", "0"),
          t(s, "id", "paint0_linear_6055_471"),
          t(s, "x1", "458.5"),
          t(s, "y1", "1561.14"),
          t(s, "x2", "392.705"),
          t(s, "y2", "52.1879"),
          t(s, "gradientUnits", "userSpaceOnUse"),
          t(
            e,
            "class",
            (_ =
              i[1].class + " max-h-[240px] md:my-sm my-lg w-full min-h-[60px]")
          ),
          t(e, "preserveAspectRatio", "xMidYMid slice"),
          t(
            e,
            "viewBox",
            (m = "0 0 " + (i[0] <= 1920 ? "1920" : i[0]) + " 280")
          ),
          t(e, "fill", "none"),
          t(e, "xmlns", "http://www.w3.org/2000/svg");
      },
      m(r, o) {
        S(r, e, o),
          h(e, a),
          h(e, n),
          h(n, s),
          h(s, l),
          h(s, d),
          v || ((g = U(window, "resize", i[2])), (v = !0));
      },
      p(r, [o]) {
        o & 2 &&
          _ !==
            (_ =
              r[1].class +
              " max-h-[240px] md:my-sm my-lg w-full min-h-[60px]") &&
          t(e, "class", _),
          o & 1 &&
            m !== (m = "0 0 " + (r[0] <= 1920 ? "1920" : r[0]) + " 280") &&
            t(e, "viewBox", m);
      },
      i: y,
      o: y,
      d(r) {
        r && u(e), (v = !1), g();
      },
    }
  );
}
function z(i, e, a) {
  let n = 0;
  function s() {
    a(0, (n = window.innerWidth));
  }
  return (
    (i.$$set = (l) => {
      a(1, (e = E(E({}, e), B(l))));
    }),
    (e = B(e)),
    [n, e, s]
  );
}
class R extends F {
  constructor(e) {
    super(), G(this, e, z, q, L, {});
  }
}
export { R as default };

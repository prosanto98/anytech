import { a as I } from "./image-url.umd.aa29a042.js";
import {
  c as L,
  m as N,
  d as W,
  e as G,
  b as V,
  A as z,
  w as H,
  f as J,
  r as P,
  k as Q,
  g as R,
  h as j,
  j as U,
  a as X,
  l as Y,
  n as Z,
  p as $,
} from "./stagger.es.4e1bdac2.js";
var q = function () {};
function B(e, t, a, i) {
  var n;
  return L(t)
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? a
    : (n = i.get(t)) !== null && n !== void 0
    ? n
    : e;
}
function tt(e, t, a) {
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    n.at > t && n.at < a && (G(e, n), i--);
  }
}
function et(e, t, a, i, n, f) {
  tt(e, n, f);
  for (let u = 0; u < t.length; u++)
    e.push({ value: t[u], at: N(n, f, i[u]), easing: W(a, u) });
}
function nt(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : -1) : e.at - t.at;
}
function lt(e, t = {}) {
  var a;
  const i = at(e, t),
    n = i.map((f) => V(...f, z)).filter(Boolean);
  return H(n, t, (a = i[0]) === null || a === void 0 ? void 0 : a[3].duration);
}
function at(e, t = {}) {
  var { defaultOptions: a = {} } = t,
    i = I(t, ["defaultOptions"]);
  const n = [],
    f = new Map(),
    u = {},
    O = new Map();
  let b = 0,
    c = 0,
    S = 0;
  for (let m = 0; m < e.length; m++) {
    const l = e[m];
    if (J(l)) {
      O.set(l, c);
      continue;
    } else if (!Array.isArray(l)) {
      O.set(l.name, B(c, l.at, b, O));
      continue;
    }
    const [k, g, o = {}] = l;
    o.at !== void 0 && (c = B(c, o.at, b, O));
    let s = 0;
    const h = P(k, u),
      p = h.length;
    for (let d = 0; d < p; d++) {
      const D = h[d],
        M = it(D, f);
      for (const v in g) {
        const C = st(v, M);
        let r = Q(g[v]);
        const w = R(o, v);
        let {
          duration: E = a.duration || j.duration,
          easing: A = a.easing || j.easing,
        } = w;
        if (U(A)) {
          q(v === "opacity" || r.length > 1);
          const T = A.createAnimation(r, v !== "opacity", () => 0, v);
          (A = T.easing), (r = T.keyframes || r), (E = T.duration || E);
        }
        const F = X(o.delay, d, p) || 0,
          K = c + F,
          _ = K + E;
        let { offset: y = Y(r.length) } = w;
        y.length === 1 && y[0] === 0 && (y[1] = 1);
        const x = y.length - r.length;
        x > 0 && Z(y, x),
          r.length === 1 && r.unshift(null),
          et(C, r, A, y, K, _),
          (s = Math.max(F + E, s)),
          (S = Math.max(_, S));
      }
    }
    (b = c), (c += s);
  }
  return (
    f.forEach((m, l) => {
      for (const k in m) {
        const g = m[k];
        g.sort(nt);
        const o = [],
          s = [],
          h = [];
        for (let p = 0; p < g.length; p++) {
          const { at: d, value: D, easing: M } = g[p];
          o.push(D), s.push($(0, S, d)), h.push(M || j.easing);
        }
        s[0] !== 0 && (s.unshift(0), o.unshift(o[0]), h.unshift("linear")),
          s[s.length - 1] !== 1 && (s.push(1), o.push(null)),
          n.push([
            l,
            k,
            o,
            Object.assign(
              Object.assign(Object.assign({}, a), {
                duration: S,
                easing: h,
                offset: s,
              }),
              i
            ),
          ]);
      }
    }),
    n
  );
}
function it(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function st(e, t) {
  return t[e] || (t[e] = []), t[e];
}
export { lt as t };

import {
  r as h,
  g as y,
  a as g,
  b as v,
  w as m,
  A as f,
  i as w,
} from "./stagger.es.4e1bdac2.js";
function A(t) {
  return function (n, o, e = {}) {
    n = h(n);
    const c = n.length,
      u = [];
    for (let i = 0; i < c; i++) {
      const l = n[i];
      for (const r in o) {
        const s = y(e, r);
        s.delay = g(s.delay, i, c);
        const d = v(l, r, o[r], s, t);
        u.push(d);
      }
    }
    return m(u, e, e.duration);
  };
}
const O = A(f);
function p(t, a = {}) {
  return m(
    [
      () => {
        const n = new f(t, [0, 1], a);
        return n.finished.catch(() => {}), n;
      },
    ],
    a,
    a.duration
  );
}
function F(t, a, n) {
  return (w(t) ? p : O)(t, a, n);
}
export { F as a };

function m(e) {
  e = e || 1;
  var t = [],
    r = 0;
  function a(d) {
    t.push(d) > 1 || n();
  }
  function o() {
    r--, n();
  }
  function n() {
    r < e && t.length > 0 && (t.shift()(), r++);
  }
  return [a, o];
}
function v(e, t) {
  const r = t?.timeout ?? 50,
    a = Date.now();
  return setTimeout(function () {
    e({
      didTimeout: !1,
      timeRemaining: function () {
        return Math.max(0, r - (Date.now() - a));
      },
    });
  }, 1);
}
const w = window.requestIdleCallback || v;
var p = w;
const f = ["mouseenter", "touchstart", "focus"],
  u = new Set(),
  i = new Set();
function g({ href: e }) {
  try {
    const t = new URL(e);
    return (
      window.location.origin === t.origin &&
      window.location.pathname !== t.pathname &&
      !u.has(e)
    );
  } catch {}
  return !1;
}
let s, c;
function b(e) {
  u.add(e.href),
    c.observe(e),
    f.map((t) => e.addEventListener(t, l, { passive: !0, once: !0 }));
}
function E(e) {
  c.unobserve(e), f.map((t) => e.removeEventListener(t, l));
}
function l({ target: e }) {
  e instanceof HTMLAnchorElement && h(e);
}
async function h(e) {
  E(e);
  const { href: t } = e;
  try {
    const r = await fetch(t).then((n) => n.text());
    s ||= new DOMParser();
    const a = s.parseFromString(r, "text/html"),
      o = Array.from(a.querySelectorAll('link[rel="stylesheet"]'));
    await Promise.all(
      o.filter((n) => !i.has(n.href)).map((n) => (i.add(n.href), fetch(n.href)))
    );
  } catch {}
}
function y({ selector: e = 'a[href][rel~="prefetch"]', throttle: t = 1 }) {
  if (!navigator.onLine)
    return Promise.reject(new Error("Cannot prefetch, no network connection"));
  if ("connection" in navigator) {
    const o = navigator.connection;
    if (o.saveData)
      return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));
    if (/(2|3)g/.test(o.effectiveType))
      return Promise.reject(
        new Error("Cannot prefetch, network conditions are poor")
      );
  }
  const [r, a] = m(t);
  (c =
    c ||
    new IntersectionObserver((o) => {
      o.forEach((n) => {
        n.isIntersecting &&
          n.target instanceof HTMLAnchorElement &&
          r(() => h(n.target).finally(a));
      });
    })),
    p(() => {
      [...document.querySelectorAll(e)].filter(g).forEach(b);
    });
}
y({});

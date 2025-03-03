import { X as h } from "./index.b1a51e70.js";
function v(r) {
  return r * r * r;
}
function f(r) {
  const o = r - 1;
  return o * o * o + 1;
}
function x(r, { delay: o = 0, duration: p = 400, easing: s = h } = {}) {
  const i = +getComputedStyle(r).opacity;
  return { delay: o, duration: p, easing: s, css: (a) => `opacity: ${a * i}` };
}
function F(
  r,
  { delay: o = 0, duration: p = 400, easing: s = f, axis: i = "y" } = {}
) {
  const a = getComputedStyle(r),
    c = +a.opacity,
    d = i === "y" ? "height" : "width",
    $ = parseFloat(a[d]),
    e = i === "y" ? ["top", "bottom"] : ["left", "right"],
    n = e.map((t) => `${t[0].toUpperCase()}${t.slice(1)}`),
    l = parseFloat(a[`padding${n[0]}`]),
    u = parseFloat(a[`padding${n[1]}`]),
    _ = parseFloat(a[`margin${n[0]}`]),
    y = parseFloat(a[`margin${n[1]}`]),
    g = parseFloat(a[`border${n[0]}Width`]),
    m = parseFloat(a[`border${n[1]}Width`]);
  return {
    delay: o,
    duration: p,
    easing: s,
    css: (t) =>
      `overflow: hidden;opacity: ${Math.min(t * 20, 1) * c};${d}: ${
        t * $
      }px;padding-${e[0]}: ${t * l}px;padding-${e[1]}: ${t * u}px;margin-${
        e[0]
      }: ${t * _}px;margin-${e[1]}: ${t * y}px;border-${e[0]}-width: ${
        t * g
      }px;border-${e[1]}-width: ${t * m}px;`,
  };
}
export { v as a, f as c, x as f, F as s };

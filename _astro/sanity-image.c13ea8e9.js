import {
  S as j,
  i as k,
  s as A,
  J as g,
  e as D,
  d as L,
  Q as _,
  n as C,
  R as O,
  L as y,
  h as P,
  T as q,
  K as T,
  C as z,
} from "./index.b1a51e70.js";
const E = {
  autoWidths: { maxWidth: 3840, step: 320 },
  autoFormat: !0,
  lqip: !1,
};
function b(t) {
  return (
    typeof t == "object" &&
    "asset" in t &&
    "metadata" in t.asset &&
    "dimensions" in t.asset.metadata
  );
}
function G(t) {
  return (
    typeof t == "object" &&
    "asset" in t &&
    "metadata" in t.asset &&
    "lqip" in t.asset.metadata
  );
}
function J(t, e) {
  const a = b(e) ? e.asset.metadata.dimensions.width : t.maxWidth,
    o = Math.ceil(a / t.step);
  return Array.from({ length: o }, (d, l) =>
    Math.min(Math.floor(t.step * (l + 1)), a)
  );
}
function K(t) {
  let e,
    a,
    o,
    d,
    l,
    m,
    n = [
      { srcset: (a = t[1].srcset) },
      { src: (o = t[1].builder.url()) },
      { width: (d = t[1].width) },
      { height: (l = t[1].height) },
      { style: (m = t[1].style) },
      t[2],
    ],
    r = {};
  for (let s = 0; s < n.length; s += 1) r = g(r, n[s]);
  return {
    c() {
      (e = D("img")), this.h();
    },
    l(s) {
      (e = L(s, "IMG", {
        srcset: !0,
        src: !0,
        width: !0,
        height: !0,
        style: !0,
      })),
        this.h();
    },
    h() {
      _(e, r);
    },
    m(s, u) {
      C(s, e, u), t[9](e);
    },
    p(s, [u]) {
      _(
        e,
        (r = O(n, [
          { srcset: a },
          { src: o },
          { width: d },
          { height: l },
          { style: m },
          u & 4 && s[2],
        ]))
      );
    },
    i: y,
    o: y,
    d(s) {
      s && P(e), t[9](null);
    },
  };
}
function N(t, e, a) {
  const o = [
    "imageUrlBuilder",
    "src",
    "widths",
    "lqip",
    "options",
    "autoFormat",
  ];
  let d = q(e, o);
  const l = (globalThis.sanityImageDefaults ??= E);
  let { imageUrlBuilder: m = l.imageUrlBuilder } = e,
    { src: n } = e,
    { widths: r = l.autoWidths } = e,
    { lqip: s = l.lqip } = e,
    { options: u = {} } = e,
    { autoFormat: h = l.autoFormat } = e;
  function S() {
    const i = m?.image(n).withOptions({ auto: h ? "format" : void 0 });
    if (!i)
      throw new Error("No image url builder specified, and no default set!");
    const p = Array.isArray(r) ? r : J(r ?? l.autoWidths, n),
      w = s ?? l.lqip,
      [B, U] = b(n)
        ? [
            n.asset.metadata.dimensions.width,
            n.asset.metadata.dimensions.height,
          ]
        : [void 0, void 0],
      v = p
        .map(
          (f) =>
            `${i
              .width(f)
              .withOptions(u ?? {})
              .url()} ${f}w`
        )
        .join(", "),
      I = `background: ${
        G(n) ? `url(${n.asset.metadata.lqip}) no-repeat` : void 0
      }; background-size: cover; `;
    let M = (s ? I : "") + (d.style ?? "");
    return {
      builder: i,
      determinedLqip: w,
      width: B,
      height: U,
      srcset: v,
      style: M,
    };
  }
  let c,
    F = S();
  function W(i) {
    z[i ? "unshift" : "push"](() => {
      (c = i), a(0, c);
    });
  }
  return (
    (t.$$set = (i) => {
      (e = g(g({}, e), T(i))),
        a(2, (d = q(e, o))),
        "imageUrlBuilder" in i && a(3, (m = i.imageUrlBuilder)),
        "src" in i && a(4, (n = i.src)),
        "widths" in i && a(5, (r = i.widths)),
        "lqip" in i && a(6, (s = i.lqip)),
        "options" in i && a(7, (u = i.options)),
        "autoFormat" in i && a(8, (h = i.autoFormat));
    }),
    [c, F, d, m, n, r, s, u, h, W]
  );
}
class R extends j {
  constructor(e) {
    super(),
      k(this, e, N, K, A, {
        imageUrlBuilder: 3,
        src: 4,
        widths: 5,
        lqip: 6,
        options: 7,
        autoFormat: 8,
      });
  }
}
export { R as S };

import {
  S as C,
  i as O,
  s as N,
  x as b,
  n as g,
  y as A,
  v as c,
  z as D,
  u as a,
  h as m,
  F as v,
  G as T,
  H as P,
  I as B,
  e as L,
  d as S,
  f as k,
  l as Ie,
  m as $,
  L as j,
  a4 as R,
  c as w,
  k as E,
  p as y,
  w as I,
  t as ie,
  g as fe,
  r as ve,
  A as ee,
  $ as De,
  a0 as He,
  Y as G,
  Z as K,
  o as M,
  b as Y,
  j as Q,
  a5 as Me,
  V as se,
  J as je,
  R as Re,
  a6 as ue,
  N as Ue,
  C as Ge,
} from "./index.b1a51e70.js";
import { H as Ke } from "./H1.35f16beb.js";
import { H as Ve } from "./H2.7116a46a.js";
import { H as qe } from "./H3.b7a6dd28.js";
import { H as Te } from "./H4.9e23182b.js";
import { H as Fe } from "./H5.b9002f0d.js";
import { S as Pe } from "./sanity-image.c13ea8e9.js";
import { i as Be } from "./helpers.b4f12cfb.js";
function ae(i, e) {
  var l = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(i, t).enumerable;
      })),
      l.push.apply(l, n);
  }
  return l;
}
function ce(i) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ae(Object(l), !0).forEach(function (n) {
          ze(i, n, l[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
      : ae(Object(l)).forEach(function (n) {
          Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(l, n));
        });
  }
  return i;
}
function ze(i, e, l) {
  return (
    (e = Ze(e)),
    e in i
      ? Object.defineProperty(i, e, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = l),
    i
  );
}
function Ze(i) {
  var e = We(i, "string");
  return typeof e == "symbol" ? e : String(e);
}
function We(i, e) {
  if (typeof i != "object" || i === null) return i;
  var l = i[Symbol.toPrimitive];
  if (l !== void 0) {
    var n = l.call(i, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function X(i) {
  return (
    i._type === "span" &&
    "text" in i &&
    typeof i.text == "string" &&
    (typeof i.marks > "u" ||
      (Array.isArray(i.marks) && i.marks.every((e) => typeof e == "string")))
  );
}
function Ee(i) {
  return (
    typeof i._type == "string" &&
    i._type[0] !== "@" &&
    (!("markDefs" in i) ||
      (Array.isArray(i.markDefs) &&
        i.markDefs.every((e) => typeof e._key == "string"))) &&
    "children" in i &&
    Array.isArray(i.children) &&
    i.children.every((e) => typeof e == "object" && "_type" in e)
  );
}
function Le(i) {
  return (
    Ee(i) &&
    "listItem" in i &&
    typeof i.listItem == "string" &&
    (typeof i.level > "u" || typeof i.level == "number")
  );
}
function Se(i) {
  return i._type === "@list";
}
function Ne(i) {
  return i._type === "@span";
}
function Ce(i) {
  return i._type === "@text";
}
const _e = ["strong", "em", "code", "underline", "strike-through"];
function Je(i, e, l) {
  if (!X(i) || !i.marks) return [];
  if (!i.marks.length) return [];
  const n = i.marks.slice(),
    t = {};
  return (
    n.forEach((r) => {
      t[r] = 1;
      for (let o = e + 1; o < l.length; o++) {
        const s = l[o];
        if (s && X(s) && Array.isArray(s.marks) && s.marks.indexOf(r) !== -1)
          t[r]++;
        else break;
      }
    }),
    n.sort((r, o) => Ye(t, r, o))
  );
}
function Ye(i, e, l) {
  const n = i[e],
    t = i[l];
  if (n !== t) return t - n;
  const r = _e.indexOf(e),
    o = _e.indexOf(l);
  return r !== o ? r - o : e.localeCompare(l);
}
function x(i) {
  var e;
  const { children: l, markDefs: n = [] } = i;
  if (!l || !l.length) return [];
  const t = l.map(Je),
    r = { _type: "@span", children: [], markType: "<unknown>" };
  let o = [r];
  for (let s = 0; s < l.length; s++) {
    const f = l[s];
    if (!f) continue;
    const u = t[s] || [];
    let _ = 1;
    if (o.length > 1)
      for (_; _ < o.length; _++) {
        const p = ((e = o[_]) == null ? void 0 : e.markKey) || "",
          h = u.indexOf(p);
        if (h === -1) break;
        u.splice(h, 1);
      }
    o = o.slice(0, _);
    let d = o[o.length - 1];
    if (d) {
      for (const p of u) {
        const h = n.find((z) => z._key === p),
          H = h ? h._type : p,
          U = {
            _type: "@span",
            _key: f._key,
            children: [],
            markDef: h,
            markType: H,
            markKey: p,
          };
        d.children.push(U), o.push(U), (d = U);
      }
      if (X(f)) {
        const p = f.text.split(`
`);
        for (let h = p.length; h-- > 1; )
          p.splice(
            h,
            0,
            `
`
          );
        d.children = d.children.concat(
          p.map((h) => ({ _type: "@text", text: h }))
        );
      } else d.children = d.children.concat(f);
    }
  }
  return r.children;
}
function Qe(i, e) {
  const l = [];
  let n;
  for (let t = 0; t < i.length; t++) {
    const r = i[t];
    if (r) {
      if (!Le(r)) {
        l.push(r), (n = void 0);
        continue;
      }
      if (!n) {
        (n = J(r, t, e)), l.push(n);
        continue;
      }
      if (Xe(r, n)) {
        n.children.push(r);
        continue;
      }
      if ((r.level || 1) > n.level) {
        const o = J(r, t, e);
        if (e === "html") {
          const s = n.children[n.children.length - 1],
            f = ce(ce({}, s), {}, { children: [...s.children, o] });
          n.children[n.children.length - 1] = f;
        } else n.children.push(o);
        n = o;
        continue;
      }
      if ((r.level || 1) < n.level) {
        const o = l[l.length - 1],
          s = o && oe(o, r);
        if (s) {
          (n = s), n.children.push(r);
          continue;
        }
        (n = J(r, t, e)), l.push(n);
        continue;
      }
      if (r.listItem !== n.listItem) {
        const o = l[l.length - 1],
          s = o && oe(o, { level: r.level || 1 });
        if (s && s.listItem === r.listItem) {
          (n = s), n.children.push(r);
          continue;
        } else {
          (n = J(r, t, e)), l.push(n);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", r), l.push(r);
    }
  }
  return l;
}
function Xe(i, e) {
  return (i.level || 1) === e.level && i.listItem === e.listItem;
}
function J(i, e, l) {
  return {
    _type: "@list",
    _key: "".concat(i._key || "".concat(e), "-parent"),
    mode: l,
    level: i.level || 1,
    listItem: i.listItem,
    children: [i],
  };
}
function oe(i, e) {
  const l = e.level || 1,
    n = e.listItem || "normal",
    t = typeof e.listItem == "string";
  if (Se(i) && (i.level || 1) === l && t && (i.listItem || "normal") === n)
    return i;
  if (!("children" in i)) return;
  const r = i.children[i.children.length - 1];
  return r && !X(r) ? oe(r, e) : void 0;
}
function Oe(i) {
  let e = "";
  return (
    i.children.forEach((l) => {
      Ce(l) ? (e += l.text) : Ne(l) && (e += Oe(l));
    }),
    e
  );
}
const xe = "html";
function Ae() {
  return Math.random().toFixed(5).split(".")[1];
}
function et(i) {
  return { _key: i._key || Ae(), ...i };
}
function tt(i) {
  return {
    _key: i._key || Ae(),
    ...i,
    ...(i._type === "block" && Array.isArray(i.children)
      ? { children: i.children.map(et) }
      : {}),
  };
}
function nt(i) {
  let e;
  const l = i[3].default,
    n = v(l, i, i[2], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 4) &&
        T(n, l, t, t[2], e ? B(l, t[2], r, null) : P(t[2]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function lt(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("del")), t && t.c();
    },
    l(r) {
      e = S(r, "DEL", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function rt(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("span")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "SPAN", { style: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      Ie(e, "text-decoration", "underline");
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function ot(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("code")), t && t.c();
    },
    l(r) {
      e = S(r, "CODE", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function it(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("em")), t && t.c();
    },
    l(r) {
      e = S(r, "EM", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function ft(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("strong")), t && t.c();
    },
    l(r) {
      e = S(r, "STRONG", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function st(i) {
  let e, l, n, t;
  const r = [ft, it, ot, rt, lt, nt],
    o = [];
  function s(f, u) {
    return f[0] === "strong"
      ? 0
      : f[0] === "em"
      ? 1
      : f[0] === "code"
      ? 2
      : f[0] === "underline"
      ? 3
      : f[0] === "strike-through"
      ? 4
      : 5;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function ut(i, e, l) {
  let n,
    { $$slots: t = {}, $$scope: r } = e,
    { portableText: o } = e;
  return (
    (i.$$set = (s) => {
      "portableText" in s && l(1, (o = s.portableText)),
        "$$scope" in s && l(2, (r = s.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 2 && l(0, ({ markType: n } = o), n);
    }),
    [n, o, r, t]
  );
}
class q extends C {
  constructor(e) {
    super(), O(this, e, ut, st, N, { portableText: 1 });
  }
}
function at(i) {
  let e;
  const l = i[4].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function ct(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L("a")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "A", { href: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      $(e, "href", i[0]);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null),
        (!l || o & 1) && $(e, "href", r[0]);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function _t(i) {
  let e, l, n, t;
  const r = [ct, at],
    o = [];
  function s(f, u) {
    return typeof f[0] == "string" ? 0 : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function mt(i, e, l) {
  let n,
    t,
    { $$slots: r = {}, $$scope: o } = e,
    { portableText: s } = e;
  return (
    (i.$$set = (f) => {
      "portableText" in f && l(1, (s = f.portableText)),
        "$$scope" in f && l(3, (o = f.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 2 && l(2, ({ value: n } = s), n),
        i.$$.dirty & 4 && l(0, (t = n?.href || n?.url || n?.link || n?.value));
    }),
    [t, s, n, o, r]
  );
}
class dt extends C {
  constructor(e) {
    super(), O(this, e, mt, _t, N, { portableText: 1 });
  }
}
function pt(i) {
  let e;
  const l = i[4].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function ht(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L("p")), t && t.c();
    },
    l(r) {
      e = S(r, "P", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function gt(i) {
  let e = i[0],
    l,
    n,
    t = i[0] && ne(i);
  return {
    c() {
      t && t.c(), (l = b());
    },
    l(r) {
      t && t.l(r), (l = b());
    },
    m(r, o) {
      t && t.m(r, o), g(r, l, o), (n = !0);
    },
    p(r, o) {
      r[0]
        ? e
          ? N(e, r[0])
            ? (t.d(1), (t = ne(r)), (e = r[0]), t.c(), t.m(l.parentNode, l))
            : t.p(r, o)
          : ((t = ne(r)), (e = r[0]), t.c(), t.m(l.parentNode, l))
        : e && (t.d(1), (t = null), (e = r[0]));
    },
    i(r) {
      n || (a(t), (n = !0));
    },
    o(r) {
      c(t), (n = !1);
    },
    d(r) {
      r && m(l), t && t.d(r);
    },
  };
}
function ne(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L(i[0])), t && t.c();
    },
    l(r) {
      e = S(r, (i[0] || "null").toUpperCase(), {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function $t(i) {
  let e, l, n, t, r;
  const o = [gt, ht, pt],
    s = [];
  function f(u, _) {
    return (
      _ & 1 && (e = null),
      e == null &&
        (e = !!["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(
          u[0]
        )),
      e ? 0 : u[0] === "normal" ? 1 : 2
    );
  }
  return (
    (l = f(i, -1)),
    (n = s[l] = o[l](i)),
    {
      c() {
        n.c(), (t = b());
      },
      l(u) {
        n.l(u), (t = b());
      },
      m(u, _) {
        s[l].m(u, _), g(u, t, _), (r = !0);
      },
      p(u, [_]) {
        let d = l;
        (l = f(u, _)),
          l === d
            ? s[l].p(u, _)
            : (A(),
              c(s[d], 1, 1, () => {
                s[d] = null;
              }),
              D(),
              (n = s[l]),
              n ? n.p(u, _) : ((n = s[l] = o[l](u)), n.c()),
              a(n, 1),
              n.m(t.parentNode, t));
      },
      i(u) {
        r || (a(n), (r = !0));
      },
      o(u) {
        c(n), (r = !1);
      },
      d(u) {
        s[l].d(u), u && m(t);
      },
    }
  );
}
function bt(i, e, l) {
  let n,
    t,
    { $$slots: r = {}, $$scope: o } = e,
    { portableText: s } = e;
  return (
    (i.$$set = (f) => {
      "portableText" in f && l(1, (s = f.portableText)),
        "$$scope" in f && l(3, (o = f.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 2 && l(2, ({ value: n } = s), n),
        i.$$.dirty & 4 && l(0, (t = n.style || "normal"));
    }),
    [t, s, n, o, r]
  );
}
class V extends C {
  constructor(e) {
    super(), O(this, e, bt, $t, N, { portableText: 1 });
  }
}
function kt(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L("ul")), t && t.c();
    },
    l(r) {
      e = S(r, "UL", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function wt(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L("ol")), t && t.c();
    },
    l(r) {
      e = S(r, "OL", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function yt(i) {
  let e, l, n, t;
  const r = [wt, kt],
    o = [];
  function s(f, u) {
    return f[0] === "number" ? 0 : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function It(i, e, l) {
  let n,
    t,
    { $$slots: r = {}, $$scope: o } = e,
    { portableText: s } = e;
  return (
    (i.$$set = (f) => {
      "portableText" in f && l(1, (s = f.portableText)),
        "$$scope" in f && l(3, (o = f.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 2 && l(2, ({ value: n } = s), n),
        i.$$.dirty & 4 && l(0, ({ listItem: t } = n), t);
    }),
    [t, s, n, o, r]
  );
}
class le extends C {
  constructor(e) {
    super(), O(this, e, It, yt, N, { portableText: 1 });
  }
}
function vt(i) {
  let e, l;
  const n = i[1].default,
    t = v(n, i, i[0], null);
  return {
    c() {
      (e = L("li")), t && t.c();
    },
    l(r) {
      e = S(r, "LI", {});
      var o = k(e);
      t && t.l(o), o.forEach(m);
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, [o]) {
      t &&
        t.p &&
        (!l || o & 1) &&
        T(t, n, r, r[0], l ? B(n, r[0], o, null) : P(r[0]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function Tt(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class re extends C {
  constructor(e) {
    super(), O(this, e, Tt, vt, N, {});
  }
}
function Pt(i) {
  let e;
  return {
    c() {
      e = L("br");
    },
    l(l) {
      e = S(l, "BR", {});
    },
    m(l, n) {
      g(l, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && m(e);
    },
  };
}
class Bt extends C {
  constructor(e) {
    super(), O(this, e, null, Pt, N, {});
  }
}
function Et(i) {
  let e;
  const l = i[1].default,
    n = v(l, i, i[0], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, [r]) {
      n &&
        n.p &&
        (!e || r & 1) &&
        T(n, l, t, t[0], e ? B(l, t[0], r, null) : P(t[0]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Lt(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class St extends C {
  constructor(e) {
    super(), O(this, e, Lt, Et, N, {});
  }
}
const Nt = {
  marks: {
    "strike-through": q,
    code: q,
    em: q,
    strong: q,
    underline: q,
    link: dt,
  },
  block: { blockquote: V, h1: V, h2: V, h3: V, h4: V, h5: V, h6: V, normal: V },
  list: { bullet: le, number: le },
  listItem: { bullet: re, number: re },
  types: {},
  hardBreak: Bt,
  unknownBlockStyle: V,
  unknownList: le,
  unknownListItem: re,
  unknownMark: q,
  unknownType: St,
};
function Ct(i, e = {}) {
  return {
    ...i,
    ...e,
    block: Z(i, e, "block"),
    list: Z(i, e, "list"),
    listItem: Z(i, e, "listItem"),
    marks: Z(i, e, "marks"),
    types: Z(i, e, "types"),
  };
}
function Z(i, e, l) {
  const n = e[l],
    t = i[l];
  return typeof n == "function" || (n && typeof t == "function")
    ? n
    : n
    ? { ...t, ...n }
    : t;
}
function Ot(i) {
  let e;
  const l = i[7].default,
    n = v(l, i, i[8], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 256) &&
        T(n, l, t, t[8], e ? B(l, t[8], r, null) : P(t[8]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function At(i) {
  let e, l, n;
  var t = i[0] || i[1].unknownBlockStyle;
  function r(o) {
    return {
      props: {
        portableText: o[2],
        $$slots: { default: [Ot] },
        $$scope: { ctx: o },
      },
    };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, [s]) {
        const f = {};
        if (
          (s & 4 && (f.portableText = o[2]),
          s & 256 && (f.$$scope = { dirty: s, ctx: o }),
          s & 3 && t !== (t = o[0] || o[1].unknownBlockStyle))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function Dt(i, e, l) {
  let n,
    t,
    r,
    o,
    { $$slots: s = {}, $$scope: f } = e,
    { global: u } = e,
    { node: _ } = e,
    { indexInParent: d } = e;
  return (
    (i.$$set = (p) => {
      "global" in p && l(3, (u = p.global)),
        "node" in p && l(4, (_ = p.node)),
        "indexInParent" in p && l(5, (d = p.indexInParent)),
        "$$scope" in p && l(8, (f = p.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 && l(1, ({ components: n } = u), n),
        i.$$.dirty & 16 && l(6, ({ style: t = "normal" } = _), t),
        i.$$.dirty & 66 &&
          l(0, (r = typeof n.block == "function" ? n.block : n.block[t])),
        i.$$.dirty & 73 && (r || u.missingComponentHandler(t, "blockStyle")),
        i.$$.dirty & 56 &&
          l(2, (o = (() => ({ global: u, indexInParent: d, value: _ }))()));
    }),
    [r, n, o, u, _, d, t, s, f]
  );
}
class Ht extends C {
  constructor(e) {
    super(), O(this, e, Dt, At, N, { global: 3, node: 4, indexInParent: 5 });
  }
}
function Mt(i) {
  let e, l, n;
  var t = i[0] || i[1].unknownType;
  function r(o) {
    return { props: { portableText: o[2] } };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, [s]) {
        const f = {};
        if (
          (s & 4 && (f.portableText = o[2]),
          s & 3 && t !== (t = o[0] || o[1].unknownType))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function jt(i, e, l) {
  let n,
    t,
    r,
    o,
    { global: s } = e,
    { node: f } = e,
    { parentBlock: u } = e,
    { indexInParent: _ } = e,
    { isInline: d = !1 } = e;
  return (
    (i.$$set = (p) => {
      "global" in p && l(3, (s = p.global)),
        "node" in p && l(4, (f = p.node)),
        "parentBlock" in p && l(5, (u = p.parentBlock)),
        "indexInParent" in p && l(6, (_ = p.indexInParent)),
        "isInline" in p && l(7, (d = p.isInline));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 && l(1, ({ components: n } = s), n),
        i.$$.dirty & 16 && l(8, ({ _type: t } = f), t),
        i.$$.dirty & 258 && l(0, (r = n.types[t])),
        i.$$.dirty & 265 && (r || s.missingComponentHandler(t, "block")),
        i.$$.dirty & 248 &&
          l(
            2,
            (o = (() => ({
              global: s,
              value: f,
              indexInParent: _,
              parentBlock: u,
              isInline: d,
            }))())
          );
    }),
    [r, n, o, s, f, u, _, d, t]
  );
}
class Rt extends C {
  constructor(e) {
    super(),
      O(this, e, jt, Mt, N, {
        global: 3,
        node: 4,
        parentBlock: 5,
        indexInParent: 6,
        isInline: 7,
      });
  }
}
function Ut(i) {
  let e;
  const l = i[8].default,
    n = v(l, i, i[9], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 512) &&
        T(n, l, t, t[9], e ? B(l, t[9], r, null) : P(t[9]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Gt(i) {
  let e, l, n;
  var t = i[0] || i[1].unknownList;
  function r(o) {
    return {
      props: {
        portableText: o[2],
        $$slots: { default: [Ut] },
        $$scope: { ctx: o },
      },
    };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, [s]) {
        const f = {};
        if (
          (s & 4 && (f.portableText = o[2]),
          s & 512 && (f.$$scope = { dirty: s, ctx: o }),
          s & 3 && t !== (t = o[0] || o[1].unknownList))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function Kt(i, e, l) {
  let n,
    t,
    r,
    o,
    s,
    { $$slots: f = {}, $$scope: u } = e,
    { global: _ } = e,
    { indexInParent: d } = e,
    { node: p } = e;
  return (
    (i.$$set = (h) => {
      "global" in h && l(3, (_ = h.global)),
        "indexInParent" in h && l(4, (d = h.indexInParent)),
        "node" in h && l(5, (p = h.node)),
        "$$scope" in h && l(9, (u = h.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 && l(1, ({ components: n } = _), n),
        i.$$.dirty & 32 && l(6, ({ listItem: t } = p), t),
        i.$$.dirty & 66 &&
          l(7, (r = typeof n.list == "function" ? n.list : n.list[t])),
        i.$$.dirty & 128 && l(0, (o = r)),
        i.$$.dirty & 73 && (o || _.missingComponentHandler(t, "listStyle")),
        i.$$.dirty & 56 &&
          l(2, (s = (() => ({ global: _, value: p, indexInParent: d }))()));
    }),
    [o, n, s, _, d, p, t, r, f, u]
  );
}
class Vt extends C {
  constructor(e) {
    super(), O(this, e, Kt, Gt, N, { global: 3, indexInParent: 4, node: 5 });
  }
}
function qt(i) {
  let e;
  const l = i[8].default,
    n = v(l, i, i[9], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 512) &&
        T(n, l, t, t[9], e ? B(l, t[9], r, null) : P(t[9]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Ft(i) {
  let e, l, n;
  var t = i[4];
  function r(o) {
    return {
      props: {
        portableText: { ...o[3], value: { ...o[0], listItem: void 0 } },
        $$slots: { default: [zt] },
        $$scope: { ctx: o },
      },
    };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, s) {
        const f = {};
        if (
          (s & 9 &&
            (f.portableText = {
              ...o[3],
              value: { ...o[0], listItem: void 0 },
            }),
          s & 512 && (f.$$scope = { dirty: s, ctx: o }),
          s & 16 && t !== (t = o[4]))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function zt(i) {
  let e;
  const l = i[8].default,
    n = v(l, i, i[9], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 512) &&
        T(n, l, t, t[9], e ? B(l, t[9], r, null) : P(t[9]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Zt(i) {
  let e, l, n, t;
  const r = [Ft, qt],
    o = [];
  function s(f, u) {
    return f[4] ? 0 : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, u) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function Wt(i) {
  let e, l, n;
  var t = i[2] || i[1].unknownListItem;
  function r(o) {
    return {
      props: {
        portableText: o[3],
        $$slots: { default: [Zt] },
        $$scope: { ctx: o },
      },
    };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, [s]) {
        const f = {};
        if (
          (s & 8 && (f.portableText = o[3]),
          s & 537 && (f.$$scope = { dirty: s, ctx: o }),
          s & 6 && t !== (t = o[2] || o[1].unknownListItem))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function Jt(i, e, l) {
  let n,
    t,
    r,
    o,
    s,
    { $$slots: f = {}, $$scope: u } = e,
    { global: _ } = e,
    { indexInParent: d } = e,
    { node: p } = e;
  return (
    (i.$$set = (h) => {
      "global" in h && l(5, (_ = h.global)),
        "indexInParent" in h && l(6, (d = h.indexInParent)),
        "node" in h && l(0, (p = h.node)),
        "$$scope" in h && l(9, (u = h.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32 && l(1, ({ components: n } = _), n),
        i.$$.dirty & 1 && l(7, ({ style: t = "normal" } = p), t),
        i.$$.dirty & 130 &&
          l(
            2,
            (r = typeof n.listItem == "function" ? n.listItem : n.listItem[t])
          ),
        i.$$.dirty & 164 &&
          (r || _.missingComponentHandler(t, "listItemStyle")),
        i.$$.dirty & 130 && l(4, (o = t !== "normal" ? n.block[t] : void 0)),
        i.$$.dirty & 97 &&
          l(3, (s = (() => ({ global: _, value: p, indexInParent: d }))()));
    }),
    [p, n, r, s, o, _, d, t, f, u]
  );
}
class Yt extends C {
  constructor(e) {
    super(), O(this, e, Jt, Wt, N, { global: 5, indexInParent: 6, node: 0 });
  }
}
function Qt(i) {
  let e;
  const l = i[7].default,
    n = v(l, i, i[8], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 256) &&
        T(n, l, t, t[8], e ? B(l, t[8], r, null) : P(t[8]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Xt(i) {
  let e, l, n;
  var t = i[0] || i[1].unknownMark;
  function r(o) {
    return {
      props: {
        portableText: o[2],
        $$slots: { default: [Qt] },
        $$scope: { ctx: o },
      },
    };
  }
  return (
    t && (e = R(t, r(i))),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, [s]) {
        const f = {};
        if (
          (s & 4 && (f.portableText = o[2]),
          s & 256 && (f.$$scope = { dirty: s, ctx: o }),
          s & 3 && t !== (t = o[0] || o[1].unknownMark))
        ) {
          if (e) {
            A();
            const u = e;
            c(u.$$.fragment, 1, 0, () => {
              I(u, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r(o))),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        } else t && e.$set(f);
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function xt(i, e, l) {
  let n,
    t,
    r,
    o,
    { $$slots: s = {}, $$scope: f } = e,
    { global: u } = e,
    { node: _ } = e,
    { parentBlock: d } = e;
  return (
    (i.$$set = (p) => {
      "global" in p && l(3, (u = p.global)),
        "node" in p && l(4, (_ = p.node)),
        "parentBlock" in p && l(5, (d = p.parentBlock)),
        "$$scope" in p && l(8, (f = p.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 8 && l(1, ({ components: n } = u), n),
        i.$$.dirty & 16 && l(6, ({ markType: t } = _), t),
        i.$$.dirty & 66 && l(0, (r = n.marks[t])),
        i.$$.dirty & 73 && (r || u.missingComponentHandler(t, "mark")),
        i.$$.dirty & 120 &&
          l(
            2,
            (o = (() => ({
              global: u,
              parentBlock: d,
              markType: t,
              value: _.markDef,
              markKey: _.markKey,
              plainTextContent: Oe(_),
            }))())
          );
    }),
    [r, n, o, u, _, d, t, s, f]
  );
}
class en extends C {
  constructor(e) {
    super(), O(this, e, xt, Xt, N, { global: 3, node: 4, parentBlock: 5 });
  }
}
function tn(i) {
  let e;
  return {
    c() {
      e = ie(i[0]);
    },
    l(l) {
      e = fe(l, i[0]);
    },
    m(l, n) {
      g(l, e, n);
    },
    p(l, n) {
      n & 1 && ve(e, l[0]);
    },
    i: j,
    o: j,
    d(l) {
      l && m(e);
    },
  };
}
function nn(i) {
  let e, l, n, t;
  const r = [rn, ln],
    o = [];
  function s(f, u) {
    return typeof f[1].hardBreak == "function" ? 0 : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, u) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function ln(i) {
  let e;
  return {
    c() {
      e = ie(i[0]);
    },
    l(l) {
      e = fe(l, i[0]);
    },
    m(l, n) {
      g(l, e, n);
    },
    p(l, n) {
      n & 1 && ve(e, l[0]);
    },
    i: j,
    o: j,
    d(l) {
      l && m(e);
    },
  };
}
function rn(i) {
  let e, l, n;
  var t = i[1].hardBreak;
  function r(o) {
    return {};
  }
  return (
    t && (e = R(t, r())),
    {
      c() {
        e && w(e.$$.fragment), (l = b());
      },
      l(o) {
        e && E(e.$$.fragment, o), (l = b());
      },
      m(o, s) {
        e && y(e, o, s), g(o, l, s), (n = !0);
      },
      p(o, s) {
        if (s & 2 && t !== (t = o[1].hardBreak)) {
          if (e) {
            A();
            const f = e;
            c(f.$$.fragment, 1, 0, () => {
              I(f, 1);
            }),
              D();
          }
          t
            ? ((e = R(t, r())),
              w(e.$$.fragment),
              a(e.$$.fragment, 1),
              y(e, l.parentNode, l))
            : (e = null);
        }
      },
      i(o) {
        n || (e && a(e.$$.fragment, o), (n = !0));
      },
      o(o) {
        e && c(e.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(l), e && I(e, o);
      },
    }
  );
}
function on(i) {
  let e, l, n, t;
  const r = [nn, tn],
    o = [];
  function s(f, u) {
    return f[0] ===
      `
`
      ? 0
      : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        let _ = e;
        (e = s(f)),
          e === _
            ? o[e].p(f, u)
            : (A(),
              c(o[_], 1, 1, () => {
                o[_] = null;
              }),
              D(),
              (l = o[e]),
              l ? l.p(f, u) : ((l = o[e] = r[e](f)), l.c()),
              a(l, 1),
              l.m(n.parentNode, n));
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function fn(i, e, l) {
  let n,
    t,
    { global: r } = e,
    { node: o } = e;
  return (
    (i.$$set = (s) => {
      "global" in s && l(2, (r = s.global)), "node" in s && l(3, (o = s.node));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 4 && l(1, ({ components: n } = r), n),
        i.$$.dirty & 8 && l(0, ({ text: t } = o), t);
    }),
    [t, n, r, o]
  );
}
class sn extends C {
  constructor(e) {
    super(), O(this, e, fn, on, N, { global: 2, node: 3 });
  }
}
function me(i, e, l) {
  const n = i.slice();
  return (n[6] = e[l]), (n[8] = l), n;
}
function de(i, e, l) {
  const n = i.slice();
  return (n[6] = e[l]), (n[8] = l), n;
}
function pe(i, e, l) {
  const n = i.slice();
  return (n[6] = e[l]), (n[8] = l), n;
}
function he(i, e, l) {
  const n = i.slice();
  return (n[6] = e[l]), (n[8] = l), n;
}
function un(i) {
  let e, l;
  return (
    (e = new Rt({
      props: {
        node: i[4],
        parentBlock: i[2],
        indexInParent: i[3],
        isInline: i[1],
        global: i[0],
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]),
          t & 4 && (r.parentBlock = n[2]),
          t & 8 && (r.indexInParent = n[3]),
          t & 2 && (r.isInline = n[1]),
          t & 1 && (r.global = n[0]),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function an(i) {
  let e, l;
  return (
    (e = new sn({ props: { node: i[4], global: i[0] } })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]), t & 1 && (r.global = n[0]), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function cn(i) {
  let e, l;
  return (
    (e = new Ht({
      props: {
        node: i[4],
        indexInParent: i[3],
        global: i[0],
        $$slots: { default: [pn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]),
          t & 8 && (r.indexInParent = n[3]),
          t & 1 && (r.global = n[0]),
          t & 4113 && (r.$$scope = { dirty: t, ctx: n }),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function _n(i) {
  let e, l;
  return (
    (e = new en({
      props: {
        node: i[4],
        parentBlock: i[2],
        global: i[0],
        $$slots: { default: [hn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]),
          t & 4 && (r.parentBlock = n[2]),
          t & 1 && (r.global = n[0]),
          t & 4117 && (r.$$scope = { dirty: t, ctx: n }),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function mn(i) {
  let e, l;
  return (
    (e = new Yt({
      props: {
        node: i[4],
        indexInParent: i[3],
        global: i[0],
        $$slots: { default: [gn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]),
          t & 8 && (r.indexInParent = n[3]),
          t & 1 && (r.global = n[0]),
          t & 4113 && (r.$$scope = { dirty: t, ctx: n }),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function dn(i) {
  let e, l;
  return (
    (e = new Vt({
      props: {
        node: i[4],
        indexInParent: i[3],
        global: i[0],
        $$slots: { default: [$n] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 && (r.node = n[4]),
          t & 8 && (r.indexInParent = n[3]),
          t & 1 && (r.global = n[0]),
          t & 4113 && (r.$$scope = { dirty: t, ctx: n }),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function ge(i) {
  let e, l;
  return (
    (e = new W({
      props: {
        options: {
          parentBlock: i[4],
          node: i[6],
          isInline: !0,
          indexInParent: i[8],
        },
        global: i[0],
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 &&
          (r.options = {
            parentBlock: n[4],
            node: n[6],
            isInline: !0,
            indexInParent: n[8],
          }),
          t & 1 && (r.global = n[0]),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function pn(i) {
  let e,
    l,
    n = x(i[4]),
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = ge(me(i, n, o));
  const r = (o) =>
    c(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = b();
    },
    l(o) {
      for (let s = 0; s < t.length; s += 1) t[s].l(o);
      e = b();
    },
    m(o, s) {
      for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(o, s);
      g(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 17) {
        n = x(o[4]);
        let f;
        for (f = 0; f < n.length; f += 1) {
          const u = me(o, n, f);
          t[f]
            ? (t[f].p(u, s), a(t[f], 1))
            : ((t[f] = ge(u)), t[f].c(), a(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (A(), f = n.length; f < t.length; f += 1) r(f);
        D();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < n.length; s += 1) a(t[s]);
        l = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let s = 0; s < t.length; s += 1) c(t[s]);
      l = !1;
    },
    d(o) {
      ee(t, o), o && m(e);
    },
  };
}
function $e(i) {
  let e, l;
  return (
    (e = new W({
      props: {
        options: {
          parentBlock: i[2],
          node: i[6],
          isInline: !0,
          indexInParent: i[8],
        },
        global: i[0],
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 20 &&
          (r.options = {
            parentBlock: n[2],
            node: n[6],
            isInline: !0,
            indexInParent: n[8],
          }),
          t & 1 && (r.global = n[0]),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function hn(i) {
  let e,
    l,
    n = i[4].children,
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = $e(de(i, n, o));
  const r = (o) =>
    c(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = b();
    },
    l(o) {
      for (let s = 0; s < t.length; s += 1) t[s].l(o);
      e = b();
    },
    m(o, s) {
      for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(o, s);
      g(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 21) {
        n = o[4].children;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const u = de(o, n, f);
          t[f]
            ? (t[f].p(u, s), a(t[f], 1))
            : ((t[f] = $e(u)), t[f].c(), a(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (A(), f = n.length; f < t.length; f += 1) r(f);
        D();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < n.length; s += 1) a(t[s]);
        l = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let s = 0; s < t.length; s += 1) c(t[s]);
      l = !1;
    },
    d(o) {
      ee(t, o), o && m(e);
    },
  };
}
function be(i) {
  let e, l;
  return (
    (e = new W({
      props: {
        options: {
          parentBlock: i[4],
          node: i[6],
          isInline: !0,
          indexInParent: i[8],
        },
        global: i[0],
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 &&
          (r.options = {
            parentBlock: n[4],
            node: n[6],
            isInline: !0,
            indexInParent: n[8],
          }),
          t & 1 && (r.global = n[0]),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function gn(i) {
  let e,
    l,
    n = x(i[4]),
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = be(pe(i, n, o));
  const r = (o) =>
    c(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = b();
    },
    l(o) {
      for (let s = 0; s < t.length; s += 1) t[s].l(o);
      e = b();
    },
    m(o, s) {
      for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(o, s);
      g(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 17) {
        n = x(o[4]);
        let f;
        for (f = 0; f < n.length; f += 1) {
          const u = pe(o, n, f);
          t[f]
            ? (t[f].p(u, s), a(t[f], 1))
            : ((t[f] = be(u)), t[f].c(), a(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (A(), f = n.length; f < t.length; f += 1) r(f);
        D();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < n.length; s += 1) a(t[s]);
        l = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let s = 0; s < t.length; s += 1) c(t[s]);
      l = !1;
    },
    d(o) {
      ee(t, o), o && m(e);
    },
  };
}
function ke(i) {
  let e, l;
  return (
    (e = new W({
      props: {
        options: {
          node: i[6],
          indexInParent: i[8],
          parentBlock: void 0,
          isInline: void 0,
        },
        global: i[0],
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 16 &&
          (r.options = {
            node: n[6],
            indexInParent: n[8],
            parentBlock: void 0,
            isInline: void 0,
          }),
          t & 1 && (r.global = n[0]),
          e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function $n(i) {
  let e,
    l,
    n = i[4].children,
    t = [];
  for (let o = 0; o < n.length; o += 1) t[o] = ke(he(i, n, o));
  const r = (o) =>
    c(t[o], 1, 1, () => {
      t[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < t.length; o += 1) t[o].c();
      e = b();
    },
    l(o) {
      for (let s = 0; s < t.length; s += 1) t[s].l(o);
      e = b();
    },
    m(o, s) {
      for (let f = 0; f < t.length; f += 1) t[f] && t[f].m(o, s);
      g(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 17) {
        n = o[4].children;
        let f;
        for (f = 0; f < n.length; f += 1) {
          const u = he(o, n, f);
          t[f]
            ? (t[f].p(u, s), a(t[f], 1))
            : ((t[f] = ke(u)), t[f].c(), a(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (A(), f = n.length; f < t.length; f += 1) r(f);
        D();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < n.length; s += 1) a(t[s]);
        l = !0;
      }
    },
    o(o) {
      t = t.filter(Boolean);
      for (let s = 0; s < t.length; s += 1) c(t[s]);
      l = !1;
    },
    d(o) {
      ee(t, o), o && m(e);
    },
  };
}
function bn(i) {
  let e, l, n, t, r, o, s, f, u;
  const _ = [dn, mn, _n, cn, an, un],
    d = [];
  function p(h, H) {
    return (
      H & 16 && (e = null),
      H & 16 && (l = null),
      H & 16 && (n = null),
      H & 16 && (t = null),
      H & 16 && (r = null),
      e == null && (e = !!Se(h[4])),
      e
        ? 0
        : (l == null && (l = !!Le(h[4])),
          l
            ? 1
            : (n == null && (n = !!Ne(h[4])),
              n
                ? 2
                : (t == null && (t = !!Ee(h[4])),
                  t
                    ? 3
                    : (r == null && (r = !!Ce(h[4])), r ? 4 : h[4] ? 5 : -1))))
    );
  }
  return (
    ~(o = p(i, -1)) && (s = d[o] = _[o](i)),
    {
      c() {
        s && s.c(), (f = b());
      },
      l(h) {
        s && s.l(h), (f = b());
      },
      m(h, H) {
        ~o && d[o].m(h, H), g(h, f, H), (u = !0);
      },
      p(h, [H]) {
        let U = o;
        (o = p(h, H)),
          o === U
            ? ~o && d[o].p(h, H)
            : (s &&
                (A(),
                c(d[U], 1, 1, () => {
                  d[U] = null;
                }),
                D()),
              ~o
                ? ((s = d[o]),
                  s ? s.p(h, H) : ((s = d[o] = _[o](h)), s.c()),
                  a(s, 1),
                  s.m(f.parentNode, f))
                : (s = null));
      },
      i(h) {
        u || (a(s), (u = !0));
      },
      o(h) {
        c(s), (u = !1);
      },
      d(h) {
        ~o && d[o].d(h), h && m(f);
      },
    }
  );
}
function kn(i, e, l) {
  let n,
    t,
    r,
    o,
    { global: s } = e,
    { options: f } = e;
  return (
    (i.$$set = (u) => {
      "global" in u && l(0, (s = u.global)),
        "options" in u && l(5, (f = u.options));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32 &&
        l(
          4,
          ({ node: n, indexInParent: t, parentBlock: r, isInline: o } = f),
          n,
          (l(3, t), l(5, f)),
          (l(2, r), l(5, f)),
          (l(1, o), l(5, f))
        );
    }),
    [s, o, r, t, n, f]
  );
}
class W extends C {
  constructor(e) {
    super(), O(this, e, kn, bn, N, { global: 0, options: 5 });
  }
}
const F = (i, e) =>
    `Unknown ${i}, specify a component for it in the \`components${
      e ? "." : ""
    }${e}\` prop`,
  wn = (i, e) => {
    switch (e) {
      case "block":
        return F(`block type "${i}"`, "types");
      case "blockStyle":
        return F(`block style "${i}"`, "block");
      case "listItemStyle":
        return F(`list item style "${i}"`, "listItem");
      case "listStyle":
        return F(`list style "${i}"`, "list");
      case "mark":
        return F(`mark type "${i}"`, "marks");
      default:
        return F("type");
    }
  };
function yn(i) {
  console.warn(i);
}
function we(i, e, l) {
  const n = i.slice();
  return (n[8] = e[l]), (n[10] = l), n;
}
function ye(i, e) {
  let l, n, t;
  return (
    (n = new W({
      props: {
        global: {
          components: e[4],
          missingComponentHandler: e[2],
          context: e[1],
          ptBlocks: e[3],
          ptRawValue: e[0],
        },
        options: { node: e[8], isInline: !1, indexInParent: e[10] },
      },
    })),
    {
      key: i,
      first: null,
      c() {
        (l = b()), w(n.$$.fragment), this.h();
      },
      l(r) {
        (l = b()), E(n.$$.fragment, r), this.h();
      },
      h() {
        this.first = l;
      },
      m(r, o) {
        g(r, l, o), y(n, r, o), (t = !0);
      },
      p(r, o) {
        e = r;
        const s = {};
        o & 31 &&
          (s.global = {
            components: e[4],
            missingComponentHandler: e[2],
            context: e[1],
            ptBlocks: e[3],
            ptRawValue: e[0],
          }),
          o & 8 &&
            (s.options = { node: e[8], isInline: !1, indexInParent: e[10] }),
          n.$set(s);
      },
      i(r) {
        t || (a(n.$$.fragment, r), (t = !0));
      },
      o(r) {
        c(n.$$.fragment, r), (t = !1);
      },
      d(r) {
        r && m(l), I(n, r);
      },
    }
  );
}
function In(i) {
  let e = [],
    l = new Map(),
    n,
    t,
    r = i[3];
  const o = (s) => s[8]._key;
  for (let s = 0; s < r.length; s += 1) {
    let f = we(i, r, s),
      u = o(f);
    l.set(u, (e[s] = ye(u, f)));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1) e[s].c();
      n = b();
    },
    l(s) {
      for (let f = 0; f < e.length; f += 1) e[f].l(s);
      n = b();
    },
    m(s, f) {
      for (let u = 0; u < e.length; u += 1) e[u] && e[u].m(s, f);
      g(s, n, f), (t = !0);
    },
    p(s, [f]) {
      f & 31 &&
        ((r = s[3]),
        A(),
        (e = De(e, f, o, 1, s, r, l, n.parentNode, He, ye, n, we)),
        D());
    },
    i(s) {
      if (!t) {
        for (let f = 0; f < r.length; f += 1) a(e[f]);
        t = !0;
      }
    },
    o(s) {
      for (let f = 0; f < e.length; f += 1) c(e[f]);
      t = !1;
    },
    d(s) {
      for (let f = 0; f < e.length; f += 1) e[f].d(s);
      s && m(n);
    },
  };
}
function vn(i, e, l) {
  let n,
    t,
    r,
    o,
    { value: s = [] } = e,
    { components: f = void 0 } = e,
    { context: u = {} } = e,
    { onMissingComponent: _ = !0 } = e;
  return (
    (i.$$set = (d) => {
      "value" in d && l(0, (s = d.value)),
        "components" in d && l(5, (f = d.components)),
        "context" in d && l(1, (u = d.context)),
        "onMissingComponent" in d && l(6, (_ = d.onMissingComponent));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 32 && l(4, (n = Ct(Nt, f))),
        i.$$.dirty & 1 && l(7, (t = (Array.isArray(s) ? s : [s]).map(tt))),
        i.$$.dirty & 128 && l(3, (r = Qe(t, xe))),
        i.$$.dirty & 64 &&
          l(
            2,
            (o = (d, p) => {
              if (_ === !1) return;
              const h = wn(d, p);
              if (typeof _ == "function") {
                _(h, { type: d, nodeType: p });
                return;
              }
              yn(h);
            })
          );
    }),
    [s, u, o, r, n, f, _, t]
  );
}
class Tn extends C {
  constructor(e) {
    super(),
      O(this, e, vn, In, N, {
        value: 0,
        components: 5,
        context: 1,
        onMissingComponent: 6,
      });
  }
}
function Pn(i) {
  let e, l, n, t, r, o, s, f, u, _, d;
  return {
    c() {
      (e = G("svg")),
        (l = G("g")),
        (n = G("path")),
        (t = G("path")),
        (r = G("defs")),
        (o = G("linearGradient")),
        (s = G("stop")),
        (f = G("stop")),
        (u = G("linearGradient")),
        (_ = G("stop")),
        (d = G("stop")),
        this.h();
    },
    l(p) {
      e = K(p, "svg", {
        class: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var h = k(e);
      l = K(h, "g", { id: !0 });
      var H = k(l);
      (n = K(H, "path", { id: !0, d: !0, fill: !0 })),
        k(n).forEach(m),
        (t = K(H, "path", { id: !0, d: !0, fill: !0 })),
        k(t).forEach(m),
        H.forEach(m),
        (r = K(h, "defs", {}));
      var U = k(r);
      o = K(U, "linearGradient", {
        id: !0,
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        gradientUnits: !0,
      });
      var z = k(o);
      (s = K(z, "stop", { "stop-color": !0 })),
        k(s).forEach(m),
        (f = K(z, "stop", { offset: !0, "stop-color": !0 })),
        k(f).forEach(m),
        z.forEach(m),
        (u = K(U, "linearGradient", {
          id: !0,
          x1: !0,
          y1: !0,
          x2: !0,
          y2: !0,
          gradientUnits: !0,
        }));
      var te = k(u);
      (_ = K(te, "stop", { "stop-color": !0 })),
        k(_).forEach(m),
        (d = K(te, "stop", { offset: !0, "stop-color": !0 })),
        k(d).forEach(m),
        te.forEach(m),
        U.forEach(m),
        h.forEach(m),
        this.h();
    },
    h() {
      $(n, "id", "Vector"),
        $(
          n,
          "d",
          "M31.466 33.9999L65.4668 7.62939e-06L49.3444 6.21993e-06L31.466 17.8774L31.466 33.9999Z"
        ),
        $(n, "fill", "url(#paint0_linear_6711_20249)"),
        $(t, "id", "Vector_2"),
        $(
          t,
          "d",
          "M-0.000785828 33.9999L34 7.62939e-06L17.8776 6.21993e-06L-0.000784418 17.8774L-0.000785828 33.9999Z"
        ),
        $(t, "fill", "url(#paint1_linear_6711_20249)"),
        $(l, "id", "Group 1261152613"),
        $(s, "stop-color", "#00E9EA"),
        $(f, "offset", "1"),
        $(f, "stop-color", "#1F80F0"),
        $(o, "id", "paint0_linear_6711_20249"),
        $(o, "x1", "97.9892"),
        $(o, "y1", "-5.90237"),
        $(o, "x2", "97.9892"),
        $(o, "y2", "40.5884"),
        $(o, "gradientUnits", "userSpaceOnUse"),
        $(_, "stop-color", "#00E9EA"),
        $(d, "offset", "1"),
        $(d, "stop-color", "#1F80F0"),
        $(u, "id", "paint1_linear_6711_20249"),
        $(u, "x1", "66.5224"),
        $(u, "y1", "-5.90237"),
        $(u, "x2", "66.5224"),
        $(u, "y2", "40.5884"),
        $(u, "gradientUnits", "userSpaceOnUse"),
        $(e, "class", "shrink-0"),
        $(e, "width", "66"),
        $(e, "height", "34"),
        $(e, "viewBox", "0 0 66 34"),
        $(e, "fill", "none"),
        $(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(p, h) {
      g(p, e, h),
        M(e, l),
        M(l, n),
        M(l, t),
        M(e, r),
        M(r, o),
        M(o, s),
        M(o, f),
        M(r, u),
        M(u, _),
        M(u, d);
    },
    p: j,
    i: j,
    o: j,
    d(p) {
      p && m(e);
    },
  };
}
class Bn extends C {
  constructor(e) {
    super(), O(this, e, null, Pn, N, {});
  }
}
function En(i) {
  let e, l, n;
  return (
    (l = new V({
      props: {
        portableText: i[0],
        $$slots: { default: [Dn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        (e = L("div")), w(l.$$.fragment), this.h();
      },
      l(t) {
        e = S(t, "DIV", { class: !0 });
        var r = k(e);
        E(l.$$.fragment, r), r.forEach(m), this.h();
      },
      h() {
        $(e, "class", "text-body-1");
      },
      m(t, r) {
        g(t, e, r), y(l, e, null), (n = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.portableText = t[0]),
          r & 8 && (o.$$scope = { dirty: r, ctx: t }),
          l.$set(o);
      },
      i(t) {
        n || (a(l.$$.fragment, t), (n = !0));
      },
      o(t) {
        c(l.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && m(e), I(l);
      },
    }
  );
}
function Ln(i) {
  let e, l, n, t;
  l = new Bn({});
  const r = i[2].default,
    o = v(r, i, i[3], null);
  return {
    c() {
      (e = L("span")), w(l.$$.fragment), (n = Y()), o && o.c(), this.h();
    },
    l(s) {
      e = S(s, "SPAN", { class: !0 });
      var f = k(e);
      E(l.$$.fragment, f), (n = Q(f)), o && o.l(f), f.forEach(m), this.h();
    },
    h() {
      $(
        e,
        "class",
        "flex max-lg:flex-col justify-between rounded-lg bg-white p-6 lg:p-10 shadow-subtle-shadow gap-11 py-md text-res-head-4 text-blue-text lg:text-head-4"
      );
    },
    m(s, f) {
      g(s, e, f), y(l, e, null), M(e, n), o && o.m(e, null), (t = !0);
    },
    p(s, f) {
      o &&
        o.p &&
        (!t || f & 8) &&
        T(o, r, s, s[3], t ? B(r, s[3], f, null) : P(s[3]), null);
    },
    i(s) {
      t || (a(l.$$.fragment, s), a(o, s), (t = !0));
    },
    o(s) {
      c(l.$$.fragment, s), c(o, s), (t = !1);
    },
    d(s) {
      s && m(e), I(l), o && o.d(s);
    },
  };
}
function Sn(i) {
  let e, l;
  return (
    (e = new Fe({
      props: {
        uppercase: !1,
        class: "!text-blue-dark",
        $$slots: { default: [Hn] },
        $$scope: { ctx: i },
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 8 && (r.$$scope = { dirty: t, ctx: n }), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Nn(i) {
  let e, l;
  return (
    (e = new Te({
      props: { $$slots: { default: [Mn] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 8 && (r.$$scope = { dirty: t, ctx: n }), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Cn(i) {
  let e, l;
  return (
    (e = new qe({
      props: { $$slots: { default: [jn] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 8 && (r.$$scope = { dirty: t, ctx: n }), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function On(i) {
  let e, l;
  return (
    (e = new Ve({
      props: { $$slots: { default: [Rn] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 8 && (r.$$scope = { dirty: t, ctx: n }), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function An(i) {
  let e, l;
  return (
    (e = new Ke({
      props: { $$slots: { default: [Un] }, $$scope: { ctx: i } },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p(n, t) {
        const r = {};
        t & 8 && (r.$$scope = { dirty: t, ctx: n }), e.$set(r);
      },
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function Dn(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Hn(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Mn(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function jn(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Rn(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Un(i) {
  let e;
  const l = i[2].default,
    n = v(l, i, i[3], null);
  return {
    c() {
      n && n.c();
    },
    l(t) {
      n && n.l(t);
    },
    m(t, r) {
      n && n.m(t, r), (e = !0);
    },
    p(t, r) {
      n &&
        n.p &&
        (!e || r & 8) &&
        T(n, l, t, t[3], e ? B(l, t[3], r, null) : P(t[3]), null);
    },
    i(t) {
      e || (a(n, t), (e = !0));
    },
    o(t) {
      c(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Gn(i) {
  let e, l, n, t;
  const r = [An, On, Cn, Nn, Sn, Ln, En],
    o = [];
  function s(f, u) {
    return f[1] === "h1"
      ? 0
      : f[1] === "h2"
      ? 1
      : f[1] === "h3"
      ? 2
      : f[1] === "h4"
      ? 3
      : f[1] === "h5"
      ? 4
      : f[1] === "blockquote"
      ? 5
      : 6;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        l.p(f, u);
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function Kn(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e,
    { portableText: r } = e,
    {
      value: { style: o },
    } = r;
  return (
    (i.$$set = (s) => {
      "portableText" in s && l(0, (r = s.portableText)),
        "$$scope" in s && l(3, (t = s.$$scope));
    }),
    [r, o, n, t]
  );
}
class Vn extends C {
  constructor(e) {
    super(), O(this, e, Kn, Gn, N, { portableText: 0 });
  }
}
function qn(i) {
  let e;
  return {
    c() {
      (e = L("hr")), this.h();
    },
    l(l) {
      (e = S(l, "HR", { class: !0 })), this.h();
    },
    h() {
      $(e, "class", "border-t-[#00000057] my-[15px]");
    },
    m(l, n) {
      g(l, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && m(e);
    },
  };
}
class Fn extends C {
  constructor(e) {
    super(), O(this, e, null, qn, N, {});
  }
}
function zn(i) {
  let e, l, n;
  const t = i[1].default,
    r = v(t, i, i[0], null);
  return {
    c() {
      (e = L("li")), (l = L("span")), r && r.c(), this.h();
    },
    l(o) {
      e = S(o, "LI", { class: !0, "data-listitem": !0 });
      var s = k(e);
      (l = S(s, "SPAN", { class: !0 })),
        k(l).forEach(m),
        r && r.l(s),
        s.forEach(m),
        this.h();
    },
    h() {
      $(l, "class", "mr-3 mt-3 h-1 w-1 shrink-0 bg-blue-dark rounded-full"),
        $(e, "class", "flex items-start lg:max-w-[723px]"),
        $(e, "data-listitem", "");
    },
    m(o, s) {
      g(o, e, s), M(e, l), r && r.m(e, null), (n = !0);
    },
    p(o, [s]) {
      r &&
        r.p &&
        (!n || s & 1) &&
        T(r, t, o, o[0], n ? B(t, o[0], s, null) : P(o[0]), null);
    },
    i(o) {
      n || (a(r, o), (n = !0));
    },
    o(o) {
      c(r, o), (n = !1);
    },
    d(o) {
      o && m(e), r && r.d(o);
    },
  };
}
function Zn(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class Wn extends C {
  constructor(e) {
    super(), O(this, e, Zn, zn, N, {});
  }
}
function Jn(i) {
  let e, l;
  const n = i[1].default,
    t = v(n, i, i[0], null);
  return {
    c() {
      (e = L("span")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      $(e, "class", "text-blue-main");
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, [o]) {
      t &&
        t.p &&
        (!l || o & 1) &&
        T(t, n, r, r[0], l ? B(n, r[0], o, null) : P(r[0]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function Yn(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class Qn extends C {
  constructor(e) {
    super(), O(this, e, Yn, Jn, N, {});
  }
}
function Xn(i) {
  let e, l;
  return (
    (e = new Pe({
      props: {
        src: i[0],
        alt: i[0]?.alt,
        imageUrlBuilder: Be,
        sizes: "(min-width:768px) 80vw, 98vw",
        class:
          "mx-auto max-h-[600px] w-full overflow-hidden rounded-[10px] lg:my-md",
        loading: "lazy",
      },
    })),
    {
      c() {
        w(e.$$.fragment);
      },
      l(n) {
        E(e.$$.fragment, n);
      },
      m(n, t) {
        y(e, n, t), (l = !0);
      },
      p: j,
      i(n) {
        l || (a(e.$$.fragment, n), (l = !0));
      },
      o(n) {
        c(e.$$.fragment, n), (l = !1);
      },
      d(n) {
        I(e, n);
      },
    }
  );
}
function xn(i) {
  let e, l, n, t, r, o, s, f;
  return (
    (l = new Pe({
      props: {
        src: i[0],
        alt: i[0]?.alt,
        imageUrlBuilder: Be,
        class:
          "aspect-square overflow-hidden rounded-lg object-cover w-full h-full",
        sizes: "(min-width:768px) 30vw, 98vw",
        loading: "lazy",
      },
    })),
    (r = new Te({
      props: { class: "mb-5", $$slots: { default: [el] }, $$scope: { ctx: i } },
    })),
    (s = new yl({ props: { value: i[0].description } })),
    {
      c() {
        (e = L("div")),
          w(l.$$.fragment),
          (n = Y()),
          (t = L("div")),
          w(r.$$.fragment),
          (o = Y()),
          w(s.$$.fragment),
          this.h();
      },
      l(u) {
        e = S(u, "DIV", { class: !0 });
        var _ = k(e);
        E(l.$$.fragment, _), (n = Q(_)), (t = S(_, "DIV", {}));
        var d = k(t);
        E(r.$$.fragment, d),
          (o = Q(d)),
          E(s.$$.fragment, d),
          d.forEach(m),
          _.forEach(m),
          this.h();
      },
      h() {
        $(e, "class", "gap-10 lg:my-5 grid lg:grid-cols-[1fr_2fr]");
      },
      m(u, _) {
        g(u, e, _),
          y(l, e, null),
          M(e, n),
          M(e, t),
          y(r, t, null),
          M(t, o),
          y(s, t, null),
          (f = !0);
      },
      p(u, _) {
        const d = {};
        _ & 4 && (d.$$scope = { dirty: _, ctx: u }), r.$set(d);
      },
      i(u) {
        f ||
          (a(l.$$.fragment, u),
          a(r.$$.fragment, u),
          a(s.$$.fragment, u),
          (f = !0));
      },
      o(u) {
        c(l.$$.fragment, u), c(r.$$.fragment, u), c(s.$$.fragment, u), (f = !1);
      },
      d(u) {
        u && m(e), I(l), I(r), I(s);
      },
    }
  );
}
function el(i) {
  let e = i[0].title + "",
    l;
  return {
    c() {
      l = ie(e);
    },
    l(n) {
      l = fe(n, e);
    },
    m(n, t) {
      g(n, l, t);
    },
    p: j,
    d(n) {
      n && m(l);
    },
  };
}
function tl(i) {
  let e, l, n, t;
  const r = [xn, Xn],
    o = [];
  function s(f, u) {
    return f[0]?.title && f[0]?.description ? 0 : 1;
  }
  return (
    (e = s(i)),
    (l = o[e] = r[e](i)),
    {
      c() {
        l.c(), (n = b());
      },
      l(f) {
        l.l(f), (n = b());
      },
      m(f, u) {
        o[e].m(f, u), g(f, n, u), (t = !0);
      },
      p(f, [u]) {
        l.p(f, u);
      },
      i(f) {
        t || (a(l), (t = !0));
      },
      o(f) {
        c(l), (t = !1);
      },
      d(f) {
        o[e].d(f), f && m(n);
      },
    }
  );
}
function nl(i, e, l) {
  let { portableText: n } = e,
    { value: t } = n;
  return (
    (i.$$set = (r) => {
      "portableText" in r && l(1, (n = r.portableText));
    }),
    [t, n]
  );
}
class ll extends C {
  constructor(e) {
    super(), O(this, e, nl, tl, N, { portableText: 1 });
  }
}
function rl(i) {
  let e, l;
  const n = i[5].default,
    t = v(n, i, i[4], null);
  return {
    c() {
      (e = L("a")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "A", { href: !0, class: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      $(e, "href", i[2]),
        $(
          e,
          "class",
          (i[0]
            ? "hover:text-blue-main/80 transition-colors duration-200 ease-linear"
            : "") +
            " " +
            (i[1] ? "text-theme-primary" : "")
        );
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, [o]) {
      t &&
        t.p &&
        (!l || o & 16) &&
        T(t, n, r, r[4], l ? B(n, r[4], o, null) : P(r[4]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function ol(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e,
    { portableText: r } = e,
    {
      value: { hoverEffect: o, highlight: s, href: f },
    } = r;
  return (
    (i.$$set = (u) => {
      "portableText" in u && l(3, (r = u.portableText)),
        "$$scope" in u && l(4, (t = u.$$scope));
    }),
    [o, s, f, r, t, n]
  );
}
class il extends C {
  constructor(e) {
    super(), O(this, e, ol, rl, N, { portableText: 3 });
  }
}
function fl(i) {
  let e, l;
  const n = i[4].default,
    t = v(n, i, i[3], null);
  return {
    c() {
      (e = L(i[1])), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, (i[1] || "null").toUpperCase(), { class: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      Me(i[1])(e, { class: "svelte-100a6vj" }),
        se(e, "space-y-2", i[0] === "bullet"),
        se(e, "number_el", i[0] === "number");
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, o) {
      t &&
        t.p &&
        (!l || o & 8) &&
        T(t, n, r, r[3], l ? B(n, r[3], o, null) : P(r[3]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function sl(i) {
  let e,
    l = i[1] && fl(i);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, t) {
      l && l.m(n, t), (e = !0);
    },
    p(n, [t]) {
      n[1] && l.p(n, t);
    },
    i(n) {
      e || (a(l), (e = !0));
    },
    o(n) {
      c(l), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function ul(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e,
    { portableText: r } = e,
    {
      value: { listItem: o },
    } = r;
  const f = { menu: "menu", number: "ol", primaryBullet: "ul" }[o] ?? "ul";
  return (
    (i.$$set = (u) => {
      "portableText" in u && l(2, (r = u.portableText)),
        "$$scope" in u && l(3, (t = u.$$scope));
    }),
    [o, f, r, t, n]
  );
}
class al extends C {
  constructor(e) {
    super(), O(this, e, ul, sl, N, { portableText: 2 });
  }
}
function cl(i) {
  let e, l, n, t, r;
  const o = i[1].default,
    s = v(o, i, i[0], null);
  return {
    c() {
      (e = L("li")),
        (l = L("span")),
        (n = L("span")),
        (t = Y()),
        s && s.c(),
        this.h();
    },
    l(f) {
      e = S(f, "LI", { class: !0, "data-listitem": !0 });
      var u = k(e);
      l = S(u, "SPAN", { class: !0 });
      var _ = k(l);
      (n = S(_, "SPAN", { class: !0 })),
        k(n).forEach(m),
        (t = Q(_)),
        _.forEach(m),
        s && s.l(u),
        u.forEach(m),
        this.h();
    },
    h() {
      $(n, "class", "w-1 h-1 bg-theme-primary rounded-full"),
        $(
          l,
          "class",
          "w-3.5 h-3.5 border shrink-0 border-theme-primary flex items-center justify-center mr-2.5 rounded-full"
        ),
        $(
          e,
          "class",
          "flex items-center text-[15px] text-theme-muted bullet-list"
        ),
        $(e, "data-listitem", "");
    },
    m(f, u) {
      g(f, e, u), M(e, l), M(l, n), M(l, t), s && s.m(e, null), (r = !0);
    },
    p(f, [u]) {
      s &&
        s.p &&
        (!r || u & 1) &&
        T(s, o, f, f[0], r ? B(o, f[0], u, null) : P(f[0]), null);
    },
    i(f) {
      r || (a(s, f), (r = !0));
    },
    o(f) {
      c(s, f), (r = !1);
    },
    d(f) {
      f && m(e), s && s.d(f);
    },
  };
}
function _l(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class ml extends C {
  constructor(e) {
    super(), O(this, e, _l, cl, N, {});
  }
}
function dl(i) {
  let e, l;
  const n = i[3].default,
    t = v(n, i, i[2], null);
  return {
    c() {
      (e = L("span")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "SPAN", { class: !0, style: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      $(e, "class", "inline-block"), Ie(e, "padding-left", i[0] + "px");
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, [o]) {
      t &&
        t.p &&
        (!l || o & 4) &&
        T(t, n, r, r[2], l ? B(n, r[2], o, null) : P(r[2]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function pl(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e,
    { portableText: r } = e,
    {
      value: { paddingLeft: o },
    } = r;
  return (
    (i.$$set = (s) => {
      "portableText" in s && l(1, (r = s.portableText)),
        "$$scope" in s && l(2, (t = s.$$scope));
    }),
    [o, r, t, n]
  );
}
class hl extends C {
  constructor(e) {
    super(), O(this, e, pl, dl, N, { portableText: 1 });
  }
}
function gl(i) {
  let e, l;
  const n = i[1].default,
    t = v(n, i, i[0], null);
  return {
    c() {
      (e = L("span")), t && t.c(), this.h();
    },
    l(r) {
      e = S(r, "SPAN", { class: !0 });
      var o = k(e);
      t && t.l(o), o.forEach(m), this.h();
    },
    h() {
      $(e, "class", "text-transparent bg-gradient-radial bg-clip-text");
    },
    m(r, o) {
      g(r, e, o), t && t.m(e, null), (l = !0);
    },
    p(r, [o]) {
      t &&
        t.p &&
        (!l || o & 1) &&
        T(t, n, r, r[0], l ? B(n, r[0], o, null) : P(r[0]), null);
    },
    i(r) {
      l || (a(t, r), (l = !0));
    },
    o(r) {
      c(t, r), (l = !1);
    },
    d(r) {
      r && m(e), t && t.d(r);
    },
  };
}
function $l(i, e, l) {
  let { $$slots: n = {}, $$scope: t } = e;
  return (
    (i.$$set = (r) => {
      "$$scope" in r && l(0, (t = r.$$scope));
    }),
    [t, n]
  );
}
class bl extends C {
  constructor(e) {
    super(), O(this, e, $l, gl, N, {});
  }
}
function kl(i) {
  let e, l, n;
  const t = [i[2], i[0]];
  let r = {};
  for (let o = 0; o < t.length; o += 1) r = je(r, t[o]);
  return (
    (l = new Tn({ props: r })),
    {
      c() {
        (e = L("div")), w(l.$$.fragment);
      },
      l(o) {
        e = S(o, "DIV", {});
        var s = k(e);
        E(l.$$.fragment, s), s.forEach(m);
      },
      m(o, s) {
        g(o, e, s), y(l, e, null), i[4](e), (n = !0);
      },
      p(o, [s]) {
        const f = s & 5 ? Re(t, [s & 4 && ue(o[2]), s & 1 && ue(o[0])]) : {};
        l.$set(f);
      },
      i(o) {
        n || (a(l.$$.fragment, o), (n = !0));
      },
      o(o) {
        c(l.$$.fragment, o), (n = !1);
      },
      d(o) {
        o && m(e), I(l), i[4](null);
      },
    }
  );
}
function wl(i, e, l) {
  let { value: n } = e,
    { components: t = void 0 } = e;
  const o = {
    value: n,
    components: {
      block: Vn,
      list: al,
      listItem: { primaryBullet: ml, normal: Wn },
      marks: { highlight: Qn, radialHighlight: bl, link: il, styled: hl },
      types: { image: ll, break: Fn },
    },
  };
  let s;
  Ue(() => {
    const u = s.querySelectorAll("p");
    Array.from(u).forEach((_) => {
      _.innerText || (_.style.paddingBottom = "1em");
    });
  });
  function f(u) {
    Ge[u ? "unshift" : "push"](() => {
      (s = u), l(1, s);
    });
  }
  return (
    (i.$$set = (u) => {
      "value" in u && l(3, (n = u.value)),
        "components" in u && l(0, (t = u.components));
    }),
    [t, s, o, n, f]
  );
}
class yl extends C {
  constructor(e) {
    super(), O(this, e, wl, kl, N, { value: 3, components: 0 });
  }
}
export { yl as P };

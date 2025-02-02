function E() {}
const st = (t) => t;
function kt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function rt(t) {
  return t();
}
function et() {
  return Object.create(null);
}
function b(t) {
  t.forEach(rt);
}
function q(t) {
  return typeof t == "function";
}
function Vt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let W;
function Xt(t, e) {
  return W || (W = document.createElement("a")), (W.href = e), t === W.href;
}
function Et(t) {
  return Object.keys(t).length === 0;
}
function Yt(t, e, n, i) {
  if (t) {
    const s = ot(t, e, n, i);
    return t[0](s);
  }
}
function ot(t, e, n, i) {
  return t[1] && i ? kt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Zt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const l = [],
        r = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
      return l;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function te(t, e, n, i, s, l) {
  if (s) {
    const r = ot(e, n, i, l);
    t.p(r, s);
  }
}
function ee(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function ne(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function ie(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function se(t) {
  return t && q(t.destroy) ? t.destroy : E;
}
const ct = typeof window < "u";
let lt = ct ? () => window.performance.now() : () => Date.now(),
  X = ct ? (t) => requestAnimationFrame(t) : E;
const C = new Set();
function at(t) {
  C.forEach((e) => {
    e.c(t) || (C.delete(e), e.f());
  }),
    C.size !== 0 && X(at);
}
function ut(t) {
  let e;
  return (
    C.size === 0 && X(at),
    {
      promise: new Promise((n) => {
        C.add((e = { c: t, f: n }));
      }),
      abort() {
        C.delete(e);
      },
    }
  );
}
let U = !1;
function Nt() {
  U = !0;
}
function St() {
  U = !1;
}
function At(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function jt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let a = 0; a < e.length; a++) {
      const f = e[a];
      f.claim_order !== void 0 && c.push(f);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let c = 0; c < e.length; c++) {
    const a = e[c].claim_order,
      f =
        (s > 0 && e[n[s]].claim_order <= a
          ? s + 1
          : At(1, s, (h) => e[n[h]].claim_order, a)) - 1;
    i[c] = n[f] + 1;
    const d = f + 1;
    (n[d] = c), (s = Math.max(d, s));
  }
  const l = [],
    r = [];
  let o = e.length - 1;
  for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
    for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(e[o]);
  l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
  for (let c = 0, a = 0; c < r.length; c++) {
    for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
    const f = a < l.length ? l[a] : null;
    t.insertBefore(r[c], f);
  }
}
function ft(t, e) {
  t.appendChild(e);
}
function dt(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Ct(t) {
  const e = Z("style");
  return Mt(dt(t), e), e.sheet;
}
function Mt(t, e) {
  return ft(t.head || t, e), e.sheet;
}
function Ot(t, e) {
  if (U) {
    for (
      jt(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function re(t, e, n) {
  U && !n
    ? Ot(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function Y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function oe(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Z(t) {
  return document.createElement(t);
}
function zt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function tt(t) {
  return document.createTextNode(t);
}
function ce() {
  return tt(" ");
}
function le() {
  return tt("");
}
function nt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function _t(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Dt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set
      ? (t[i] = e[i])
      : _t(t, i, e[i]);
}
function Pt(t, e) {
  Object.keys(e).forEach((n) => {
    Tt(t, n, e[n]);
  });
}
function Tt(t, e, n) {
  e in t ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n) : _t(t, e, n);
}
function ae(t) {
  return /-/.test(t) ? Pt : Dt;
}
function qt(t) {
  return Array.from(t.childNodes);
}
function Lt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ht(t, e, n, i, s = !1) {
  Lt(t);
  const l = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function mt(t, e, n, i) {
  return ht(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const l = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const o = s.attributes[r];
        n[o.name] || l.push(o.name);
      }
      l.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function ue(t, e, n) {
  return mt(t, e, n, Z);
}
function fe(t, e, n) {
  return mt(t, e, n, zt);
}
function Rt(t, e) {
  return ht(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => tt(e),
    !0
  );
}
function de(t) {
  return Rt(t, " ");
}
function _e(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function he(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
let B;
function Wt() {
  if (B === void 0) {
    B = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      B = !0;
    }
  }
  return B;
}
function me(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = Z("iframe");
  i.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ),
    i.setAttribute("aria-hidden", "true"),
    (i.tabIndex = -1);
  const s = Wt();
  let l;
  return (
    s
      ? ((i.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (l = nt(window, "message", (r) => {
          r.source === i.contentWindow && e();
        })))
      : ((i.src = "about:blank"),
        (i.onload = () => {
          (l = nt(i.contentWindow, "resize", e)), e();
        })),
    ft(t, i),
    () => {
      (s || (l && i.contentWindow)) && l(), Y(i);
    }
  );
}
function pe(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function pt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, i, e), s;
}
function ye(t, e) {
  return new t(e);
}
const I = new Map();
let H = 0;
function Bt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Ft(t, e) {
  const n = { stylesheet: Ct(e), rules: {} };
  return I.set(t, n), n;
}
function K(t, e, n, i, s, l, r, o = 0) {
  const c = 16.666 / i;
  let a = `{
`;
  for (let p = 0; p <= 1; p += c) {
    const g = e + (n - e) * l(p);
    a +=
      p * 100 +
      `%{${r(g, 1 - g)}}
`;
  }
  const f =
      a +
      `100% {${r(n, 1 - n)}}
}`,
    d = `__svelte_${Bt(f)}_${o}`,
    h = dt(t),
    { stylesheet: u, rules: _ } = I.get(h) || Ft(h, t);
  _[d] ||
    ((_[d] = !0), u.insertRule(`@keyframes ${d} ${f}`, u.cssRules.length));
  const y = t.style.animation || "";
  return (
    (t.style.animation = `${
      y ? `${y}, ` : ""
    }${d} ${i}ms linear ${s}ms 1 both`),
    (H += 1),
    d
  );
}
function yt(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
    ),
    s = n.length - i.length;
  s && ((t.style.animation = i.join(", ")), (H -= s), H || It());
}
function It() {
  X(() => {
    H ||
      (I.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && Y(e);
      }),
      I.clear());
  });
}
let P;
function z(t) {
  P = t;
}
function N() {
  if (!P) throw new Error("Function called outside component initialization");
  return P;
}
function ge(t) {
  N().$$.before_update.push(t);
}
function we(t) {
  N().$$.on_mount.push(t);
}
function $e(t) {
  N().$$.after_update.push(t);
}
function xe(t) {
  N().$$.on_destroy.push(t);
}
function be() {
  const t = N();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const l = pt(e, n, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function ve(t, e) {
  return N().$$.context.set(t, e), e;
}
function ke(t) {
  return N().$$.context.get(t);
}
const j = [],
  it = [];
let M = [];
const Q = [],
  gt = Promise.resolve();
let V = !1;
function wt() {
  V || ((V = !0), gt.then($t));
}
function Ee() {
  return wt(), gt;
}
function T(t) {
  M.push(t);
}
function Ne(t) {
  Q.push(t);
}
const J = new Set();
let A = 0;
function $t() {
  if (A !== 0) return;
  const t = P;
  do {
    try {
      for (; A < j.length; ) {
        const e = j[A];
        A++, z(e), Ht(e.$$);
      }
    } catch (e) {
      throw ((j.length = 0), (A = 0), e);
    }
    for (z(null), j.length = 0, A = 0; it.length; ) it.pop()();
    for (let e = 0; e < M.length; e += 1) {
      const n = M[e];
      J.has(n) || (J.add(n), n());
    }
    M.length = 0;
  } while (j.length);
  for (; Q.length; ) Q.pop()();
  (V = !1), J.clear(), z(t);
}
function Ht(t) {
  if (t.fragment !== null) {
    t.update(), b(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(T);
  }
}
function Ut(t) {
  const e = [],
    n = [];
  M.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (M = e);
}
let O;
function xt() {
  return (
    O ||
      ((O = Promise.resolve()),
      O.then(() => {
        O = null;
      })),
    O
  );
}
function D(t, e, n) {
  t.dispatchEvent(pt(`${e ? "intro" : "outro"}${n}`));
}
const F = new Set();
let x;
function Se() {
  x = { r: 0, c: [], p: x };
}
function Ae() {
  x.r || b(x.c), (x = x.p);
}
function bt(t, e) {
  t && t.i && (F.delete(t), t.i(e));
}
function Gt(t, e, n, i) {
  if (t && t.o) {
    if (F.has(t)) return;
    F.add(t),
      x.c.push(() => {
        F.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const vt = { duration: 0 };
function je(t, e, n) {
  const i = { direction: "out" };
  let s = e(t, n, i),
    l = !0,
    r;
  const o = x;
  o.r += 1;
  function c() {
    const {
      delay: a = 0,
      duration: f = 300,
      easing: d = st,
      tick: h = E,
      css: u,
    } = s || vt;
    u && (r = K(t, 1, 0, f, a, d, u));
    const _ = lt() + a,
      y = _ + f;
    T(() => D(t, !1, "start")),
      ut((p) => {
        if (l) {
          if (p >= y) return h(0, 1), D(t, !1, "end"), --o.r || b(o.c), !1;
          if (p >= _) {
            const g = d((p - _) / f);
            h(1 - g, g);
          }
        }
        return l;
      });
  }
  return (
    q(s)
      ? xt().then(() => {
          (s = s(i)), c();
        })
      : c(),
    {
      end(a) {
        a && s.tick && s.tick(1, 0), l && (r && yt(t, r), (l = !1));
      },
    }
  );
}
function Ce(t, e, n, i) {
  const s = { direction: "both" };
  let l = e(t, n, s),
    r = i ? 0 : 1,
    o = null,
    c = null,
    a = null;
  function f() {
    a && yt(t, a);
  }
  function d(u, _) {
    const y = u.b - r;
    return (
      (_ *= Math.abs(y)),
      {
        a: r,
        b: u.b,
        d: y,
        duration: _,
        start: u.start,
        end: u.start + _,
        group: u.group,
      }
    );
  }
  function h(u) {
    const {
        delay: _ = 0,
        duration: y = 300,
        easing: p = st,
        tick: g = E,
        css: v,
      } = l || vt,
      S = { start: lt() + _, b: u };
    u || ((S.group = x), (x.r += 1)),
      o || c
        ? (c = S)
        : (v && (f(), (a = K(t, r, u, y, _, p, v))),
          u && g(0, 1),
          (o = d(S, y)),
          T(() => D(t, u, "start")),
          ut((k) => {
            if (
              (c &&
                k > c.start &&
                ((o = d(c, y)),
                (c = null),
                D(t, o.b, "start"),
                v && (f(), (a = K(t, r, o.b, o.duration, 0, p, l.css)))),
              o)
            ) {
              if (k >= o.end)
                g((r = o.b), 1 - r),
                  D(t, o.b, "end"),
                  c || (o.b ? f() : --o.group.r || b(o.group.c)),
                  (o = null);
              else if (k >= o.start) {
                const L = k - o.start;
                (r = o.a + o.d * p(L / o.duration)), g(r, 1 - r);
              }
            }
            return !!(o || c);
          }));
  }
  return {
    run(u) {
      q(l)
        ? xt().then(() => {
            (l = l(s)), h(u);
          })
        : h(u);
    },
    end() {
      f(), (o = c = null);
    },
  };
}
const Me =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Oe(t, e) {
  Gt(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ze(t, e, n, i, s, l, r, o, c, a, f, d) {
  let h = t.length,
    u = l.length,
    _ = h;
  const y = {};
  for (; _--; ) y[t[_].key] = _;
  const p = [],
    g = new Map(),
    v = new Map(),
    S = [];
  for (_ = u; _--; ) {
    const m = d(s, l, _),
      w = n(m);
    let $ = r.get(w);
    $ ? i && S.push(() => $.p(m, e)) : (($ = a(w, m)), $.c()),
      g.set(w, (p[_] = $)),
      w in y && v.set(w, Math.abs(_ - y[w]));
  }
  const k = new Set(),
    L = new Set();
  function G(m) {
    bt(m, 1), m.m(o, f), r.set(m.key, m), (f = m.first), u--;
  }
  for (; h && u; ) {
    const m = p[u - 1],
      w = t[h - 1],
      $ = m.key,
      R = w.key;
    m === w
      ? ((f = m.first), h--, u--)
      : g.has(R)
      ? !r.has($) || k.has($)
        ? G(m)
        : L.has(R)
        ? h--
        : v.get($) > v.get(R)
        ? (L.add($), G(m))
        : (k.add(R), h--)
      : (c(w, r), h--);
  }
  for (; h--; ) {
    const m = t[h];
    g.has(m.key) || c(m, r);
  }
  for (; u; ) G(p[u - 1]);
  return b(S), p;
}
function De(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const r = t[l],
      o = e[l];
    if (o) {
      for (const c in r) c in o || (i[c] = 1);
      for (const c in o) s[c] || ((n[c] = o[c]), (s[c] = 1));
      t[l] = o;
    } else for (const c in r) s[c] = 1;
  }
  for (const r in i) r in n || (n[r] = void 0);
  return n;
}
function Pe(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Te(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function qe(t) {
  t && t.c();
}
function Le(t, e) {
  t && t.l(e);
}
function Jt(t, e, n, i) {
  const { fragment: s, after_update: l } = t.$$;
  s && s.m(e, n),
    i ||
      T(() => {
        const r = t.$$.on_mount.map(rt).filter(q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : b(r),
          (t.$$.on_mount = []);
      }),
    l.forEach(T);
}
function Kt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Ut(n.after_update),
    b(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Qt(t, e) {
  t.$$.dirty[0] === -1 && (j.push(t), wt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Re(t, e, n, i, s, l, r, o = [-1]) {
  const c = P;
  z(t);
  const a = (t.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: E,
    not_equal: s,
    bound: et(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: et(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  r && r(a.root);
  let f = !1;
  if (
    ((a.ctx = n
      ? n(t, e.props || {}, (d, h, ...u) => {
          const _ = u.length ? u[0] : h;
          return (
            a.ctx &&
              s(a.ctx[d], (a.ctx[d] = _)) &&
              (!a.skip_bound && a.bound[d] && a.bound[d](_), f && Qt(t, d)),
            h
          );
        })
      : []),
    a.update(),
    (f = !0),
    b(a.before_update),
    (a.fragment = i ? i(a.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      Nt();
      const d = qt(e.target);
      a.fragment && a.fragment.l(d), d.forEach(Y);
    } else a.fragment && a.fragment.c();
    e.intro && bt(t.$$.fragment),
      Jt(t, e.target, e.anchor, e.customElement),
      St(),
      $t();
  }
  z(c);
}
class We {
  $destroy() {
    Kt(this, 1), (this.$destroy = E);
  }
  $on(e, n) {
    if (!q(n)) return E;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Et(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  ze as $,
  oe as A,
  Xt as B,
  it as C,
  Te as D,
  Ne as E,
  Yt as F,
  te as G,
  ee as H,
  Zt as I,
  kt as J,
  ne as K,
  E as L,
  be as M,
  we as N,
  $e as O,
  Ee as P,
  Dt as Q,
  De as R,
  We as S,
  ie as T,
  b as U,
  pe as V,
  me as W,
  st as X,
  zt as Y,
  fe as Z,
  Me as _,
  T as a,
  Oe as a0,
  se as a1,
  Ce as a2,
  je as a3,
  ye as a4,
  ae as a5,
  Pe as a6,
  ve as a7,
  xe as a8,
  ke as a9,
  ge as aa,
  ce as b,
  qe as c,
  ue as d,
  Z as e,
  qt as f,
  Rt as g,
  Y as h,
  Re as i,
  de as j,
  Le as k,
  he as l,
  _t as m,
  re as n,
  Ot as o,
  Jt as p,
  nt as q,
  _e as r,
  Vt as s,
  tt as t,
  bt as u,
  Gt as v,
  Kt as w,
  le as x,
  Se as y,
  Ae as z,
};

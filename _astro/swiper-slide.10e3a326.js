import {
  S as qe,
  i as Xe,
  s as Ce,
  x as Pe,
  n as j,
  u as H,
  v as F,
  h as A,
  T as fe,
  M as ot,
  a7 as dt,
  N as Ye,
  O as Ue,
  a8 as Ke,
  J as re,
  K as Je,
  F as Q,
  e as U,
  b as R,
  d as K,
  f as J,
  j as q,
  a5 as pe,
  o as W,
  G as Z,
  H as ee,
  I as te,
  R as Qe,
  C as ne,
  m as ie,
  L as ye,
  P as ft,
  Q as Le,
  y as ct,
  z as ut,
  a9 as pt,
  aa as ht,
} from "./index.b1a51e70.js";
function Oe(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function xe(e = {}, t = {}) {
  Object.keys(t).forEach((i) => {
    typeof e[i] > "u"
      ? (e[i] = t[i])
      : Oe(t[i]) && Oe(e[i]) && Object.keys(t[i]).length > 0 && xe(e[i], t[i]);
  });
}
const Ze = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function B() {
  const e = typeof document < "u" ? document : {};
  return xe(e, Ze), e;
}
const mt = {
  document: Ze,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function D() {
  const e = typeof window < "u" ? window : {};
  return xe(e, mt), e;
}
function gt(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(i) {
      t.__proto__ = i;
    },
  });
}
class X extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), gt(this));
  }
}
function ae(e = []) {
  const t = [];
  return (
    e.forEach((i) => {
      Array.isArray(i) ? t.push(...ae(i)) : t.push(i);
    }),
    t
  );
}
function et(e, t) {
  return Array.prototype.filter.call(e, t);
}
function vt(e) {
  const t = [];
  for (let i = 0; i < e.length; i += 1) t.indexOf(e[i]) === -1 && t.push(e[i]);
  return t;
}
function wt(e, t) {
  if (typeof e != "string") return [e];
  const i = [],
    s = t.querySelectorAll(e);
  for (let n = 0; n < s.length; n += 1) i.push(s[n]);
  return i;
}
function w(e, t) {
  const i = D(),
    s = B();
  let n = [];
  if (!t && e instanceof X) return e;
  if (!e) return new X(n);
  if (typeof e == "string") {
    const r = e.trim();
    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
      let a = "div";
      r.indexOf("<li") === 0 && (a = "ul"),
        r.indexOf("<tr") === 0 && (a = "tbody"),
        (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (a = "tr"),
        r.indexOf("<tbody") === 0 && (a = "table"),
        r.indexOf("<option") === 0 && (a = "select");
      const d = s.createElement(a);
      d.innerHTML = r;
      for (let l = 0; l < d.childNodes.length; l += 1) n.push(d.childNodes[l]);
    } else n = wt(e.trim(), t || s);
  } else if (e.nodeType || e === i || e === s) n.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof X) return e;
    n = e;
  }
  return new X(vt(n));
}
w.fn = X.prototype;
function St(...e) {
  const t = ae(e.map((i) => i.split(" ")));
  return (
    this.forEach((i) => {
      i.classList.add(...t);
    }),
    this
  );
}
function Tt(...e) {
  const t = ae(e.map((i) => i.split(" ")));
  return (
    this.forEach((i) => {
      i.classList.remove(...t);
    }),
    this
  );
}
function bt(...e) {
  const t = ae(e.map((i) => i.split(" ")));
  this.forEach((i) => {
    t.forEach((s) => {
      i.classList.toggle(s);
    });
  });
}
function Et(...e) {
  const t = ae(e.map((i) => i.split(" ")));
  return (
    et(this, (i) => t.filter((s) => i.classList.contains(s)).length > 0)
      .length > 0
  );
}
function _t(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let i = 0; i < this.length; i += 1)
    if (arguments.length === 2) this[i].setAttribute(e, t);
    else for (const s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
  return this;
}
function Ct(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function yt(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function xt(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function Mt(...e) {
  let [t, i, s, n] = e;
  typeof e[1] == "function" && (([t, s, n] = e), (i = void 0)), n || (n = !1);
  function r(o) {
    const f = o.target;
    if (!f) return;
    const c = o.target.dom7EventData || [];
    if ((c.indexOf(o) < 0 && c.unshift(o), w(f).is(i))) s.apply(f, c);
    else {
      const u = w(f).parents();
      for (let p = 0; p < u.length; p += 1) w(u[p]).is(i) && s.apply(u[p], c);
    }
  }
  function a(o) {
    const f = o && o.target ? o.target.dom7EventData || [] : [];
    f.indexOf(o) < 0 && f.unshift(o), s.apply(this, f);
  }
  const d = t.split(" ");
  let l;
  for (let o = 0; o < this.length; o += 1) {
    const f = this[o];
    if (i)
      for (l = 0; l < d.length; l += 1) {
        const c = d[l];
        f.dom7LiveListeners || (f.dom7LiveListeners = {}),
          f.dom7LiveListeners[c] || (f.dom7LiveListeners[c] = []),
          f.dom7LiveListeners[c].push({ listener: s, proxyListener: r }),
          f.addEventListener(c, r, n);
      }
    else
      for (l = 0; l < d.length; l += 1) {
        const c = d[l];
        f.dom7Listeners || (f.dom7Listeners = {}),
          f.dom7Listeners[c] || (f.dom7Listeners[c] = []),
          f.dom7Listeners[c].push({ listener: s, proxyListener: a }),
          f.addEventListener(c, a, n);
      }
  }
  return this;
}
function Pt(...e) {
  let [t, i, s, n] = e;
  typeof e[1] == "function" && (([t, s, n] = e), (i = void 0)), n || (n = !1);
  const r = t.split(" ");
  for (let a = 0; a < r.length; a += 1) {
    const d = r[a];
    for (let l = 0; l < this.length; l += 1) {
      const o = this[l];
      let f;
      if (
        (!i && o.dom7Listeners
          ? (f = o.dom7Listeners[d])
          : i && o.dom7LiveListeners && (f = o.dom7LiveListeners[d]),
        f && f.length)
      )
        for (let c = f.length - 1; c >= 0; c -= 1) {
          const u = f[c];
          (s && u.listener === s) ||
          (s &&
            u.listener &&
            u.listener.dom7proxy &&
            u.listener.dom7proxy === s)
            ? (o.removeEventListener(d, u.proxyListener, n), f.splice(c, 1))
            : s ||
              (o.removeEventListener(d, u.proxyListener, n), f.splice(c, 1));
        }
    }
  }
  return this;
}
function Lt(...e) {
  const t = D(),
    i = e[0].split(" "),
    s = e[1];
  for (let n = 0; n < i.length; n += 1) {
    const r = i[n];
    for (let a = 0; a < this.length; a += 1) {
      const d = this[a];
      if (t.CustomEvent) {
        const l = new t.CustomEvent(r, {
          detail: s,
          bubbles: !0,
          cancelable: !0,
        });
        (d.dom7EventData = e.filter((o, f) => f > 0)),
          d.dispatchEvent(l),
          (d.dom7EventData = []),
          delete d.dom7EventData;
      }
    }
  }
  return this;
}
function Ot(e) {
  const t = this;
  function i(s) {
    s.target === this && (e.call(this, s), t.off("transitionend", i));
  }
  return e && t.on("transitionend", i), this;
}
function It(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function zt(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Dt() {
  if (this.length > 0) {
    const e = D(),
      t = B(),
      i = this[0],
      s = i.getBoundingClientRect(),
      n = t.body,
      r = i.clientTop || n.clientTop || 0,
      a = i.clientLeft || n.clientLeft || 0,
      d = i === e ? e.scrollY : i.scrollTop,
      l = i === e ? e.scrollX : i.scrollLeft;
    return { top: s.top + d - r, left: s.left + l - a };
  }
  return null;
}
function At() {
  const e = D();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function kt(e, t) {
  const i = D();
  let s;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (s = 0; s < this.length; s += 1)
        for (const n in e) this[s].style[n] = e[n];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
    return this;
  }
  return this;
}
function Nt(e) {
  return e
    ? (this.forEach((t, i) => {
        e.apply(t, [t, i]);
      }),
      this)
    : this;
}
function Gt(e) {
  const t = et(this, e);
  return w(t);
}
function Bt(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function Vt(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function $t(e) {
  const t = D(),
    i = B(),
    s = this[0];
  let n, r;
  if (!s || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (s.matches) return s.matches(e);
    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector) return s.msMatchesSelector(e);
    for (n = w(e), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
    return !1;
  }
  if (e === i) return s === i;
  if (e === t) return s === t;
  if (e.nodeType || e instanceof X) {
    for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
      if (n[r] === s) return !0;
    return !1;
  }
  return !1;
}
function Ht() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function Ft(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return w([]);
  if (e < 0) {
    const i = t + e;
    return i < 0 ? w([]) : w([this[i]]);
  }
  return w([this[e]]);
}
function jt(...e) {
  let t;
  const i = B();
  for (let s = 0; s < e.length; s += 1) {
    t = e[s];
    for (let n = 0; n < this.length; n += 1)
      if (typeof t == "string") {
        const r = i.createElement("div");
        for (r.innerHTML = t; r.firstChild; ) this[n].appendChild(r.firstChild);
      } else if (t instanceof X)
        for (let r = 0; r < t.length; r += 1) this[n].appendChild(t[r]);
      else this[n].appendChild(t);
  }
  return this;
}
function Wt(e) {
  const t = B();
  let i, s;
  for (i = 0; i < this.length; i += 1)
    if (typeof e == "string") {
      const n = t.createElement("div");
      for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
        this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
    } else if (e instanceof X)
      for (s = 0; s < e.length; s += 1)
        this[i].insertBefore(e[s], this[i].childNodes[0]);
    else this[i].insertBefore(e, this[i].childNodes[0]);
  return this;
}
function Rt(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e)
        ? w([this[0].nextElementSibling])
        : w([])
      : this[0].nextElementSibling
      ? w([this[0].nextElementSibling])
      : w([])
    : w([]);
}
function qt(e) {
  const t = [];
  let i = this[0];
  if (!i) return w([]);
  for (; i.nextElementSibling; ) {
    const s = i.nextElementSibling;
    e ? w(s).is(e) && t.push(s) : t.push(s), (i = s);
  }
  return w(t);
}
function Xt(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && w(t.previousElementSibling).is(e)
        ? w([t.previousElementSibling])
        : w([])
      : t.previousElementSibling
      ? w([t.previousElementSibling])
      : w([]);
  }
  return w([]);
}
function Yt(e) {
  const t = [];
  let i = this[0];
  if (!i) return w([]);
  for (; i.previousElementSibling; ) {
    const s = i.previousElementSibling;
    e ? w(s).is(e) && t.push(s) : t.push(s), (i = s);
  }
  return w(t);
}
function Ut(e) {
  const t = [];
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode !== null &&
      (e
        ? w(this[i].parentNode).is(e) && t.push(this[i].parentNode)
        : t.push(this[i].parentNode));
  return w(t);
}
function Kt(e) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    let s = this[i].parentNode;
    for (; s; ) e ? w(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
  }
  return w(t);
}
function Jt(e) {
  let t = this;
  return typeof e > "u" ? w([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function Qt(e) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    const s = this[i].querySelectorAll(e);
    for (let n = 0; n < s.length; n += 1) t.push(s[n]);
  }
  return w(t);
}
function Zt(e) {
  const t = [];
  for (let i = 0; i < this.length; i += 1) {
    const s = this[i].children;
    for (let n = 0; n < s.length; n += 1) (!e || w(s[n]).is(e)) && t.push(s[n]);
  }
  return w(t);
}
function ei() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const Ie = {
  addClass: St,
  removeClass: Tt,
  hasClass: Et,
  toggleClass: bt,
  attr: _t,
  removeAttr: Ct,
  transform: yt,
  transition: xt,
  on: Mt,
  off: Pt,
  trigger: Lt,
  transitionEnd: Ot,
  outerWidth: It,
  outerHeight: zt,
  styles: At,
  offset: Dt,
  css: kt,
  each: Nt,
  html: Bt,
  text: Vt,
  is: $t,
  index: Ht,
  eq: Ft,
  append: jt,
  prepend: Wt,
  next: Rt,
  nextAll: qt,
  prev: Xt,
  prevAll: Yt,
  parent: Ut,
  parents: Kt,
  closest: Jt,
  find: Qt,
  children: Zt,
  filter: Gt,
  remove: ei,
};
Object.keys(Ie).forEach((e) => {
  Object.defineProperty(w.fn, e, { value: Ie[e], writable: !0 });
});
function ti(e) {
  const t = e;
  Object.keys(t).forEach((i) => {
    try {
      t[i] = null;
    } catch {}
    try {
      delete t[i];
    } catch {}
  });
}
function Te(e, t = 0) {
  return setTimeout(e, t);
}
function le() {
  return Date.now();
}
function ii(e) {
  const t = D();
  let i;
  return (
    t.getComputedStyle && (i = t.getComputedStyle(e, null)),
    !i && e.currentStyle && (i = e.currentStyle),
    i || (i = e.style),
    i
  );
}
function si(e, t = "x") {
  const i = D();
  let s, n, r;
  const a = ii(e);
  return (
    i.WebKitCSSMatrix
      ? ((n = a.transform || a.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((d) => d.replace(",", "."))
            .join(", ")),
        (r = new i.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (i.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
        ? (n = parseFloat(s[12]))
        : (n = parseFloat(s[4]))),
    t === "y" &&
      (i.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
        ? (n = parseFloat(s[13]))
        : (n = parseFloat(s[5]))),
    n || 0
  );
}
function oe(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function ni(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function G(...e) {
  const t = Object(e[0]),
    i = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < e.length; s += 1) {
    const n = e[s];
    if (n != null && !ni(n)) {
      const r = Object.keys(Object(n)).filter((a) => i.indexOf(a) < 0);
      for (let a = 0, d = r.length; a < d; a += 1) {
        const l = r[a],
          o = Object.getOwnPropertyDescriptor(n, l);
        o !== void 0 &&
          o.enumerable &&
          (oe(t[l]) && oe(n[l])
            ? n[l].__swiper__
              ? (t[l] = n[l])
              : G(t[l], n[l])
            : !oe(t[l]) && oe(n[l])
            ? ((t[l] = {}), n[l].__swiper__ ? (t[l] = n[l]) : G(t[l], n[l]))
            : (t[l] = n[l]));
      }
    }
  }
  return t;
}
function de(e, t, i) {
  e.style.setProperty(t, i);
}
function tt({ swiper: e, targetPosition: t, side: i }) {
  const s = D(),
    n = -e.translate;
  let r = null,
    a;
  const d = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(e.cssModeFrameID);
  const l = t > n ? "next" : "prev",
    o = (c, u) => (l === "next" && c >= u) || (l === "prev" && c <= u),
    f = () => {
      (a = new Date().getTime()), r === null && (r = a);
      const c = Math.max(Math.min((a - r) / d, 1), 0),
        u = 0.5 - Math.cos(c * Math.PI) / 2;
      let p = n + u * (t - n);
      if ((o(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), o(p, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: p });
          }),
          s.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = s.requestAnimationFrame(f);
    };
  f();
}
let he;
function ri() {
  const e = D(),
    t = B();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let s = !1;
      try {
        const n = Object.defineProperty({}, "passive", {
          get() {
            s = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, n);
      } catch {}
      return s;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function it() {
  return he || (he = ri()), he;
}
let me;
function li({ userAgent: e } = {}) {
  const t = it(),
    i = D(),
    s = i.navigator.platform,
    n = e || i.navigator.userAgent,
    r = { ios: !1, android: !1 },
    a = i.screen.width,
    d = i.screen.height,
    l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let o = n.match(/(iPad).*OS\s([\d_]+)/);
  const f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    c = !o && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    u = s === "Win32";
  let p = s === "MacIntel";
  const m = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !o &&
      p &&
      t.touch &&
      m.indexOf(`${a}x${d}`) >= 0 &&
      ((o = n.match(/(Version)\/([\d.]+)/)),
      o || (o = [0, 1, "13_0_0"]),
      (p = !1)),
    l && !u && ((r.os = "android"), (r.android = !0)),
    (o || c || f) && ((r.os = "ios"), (r.ios = !0)),
    r
  );
}
function ai(e = {}) {
  return me || (me = li(e)), me;
}
let ge;
function oi() {
  const e = D();
  function t() {
    const i = e.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function di() {
  return ge || (ge = oi()), ge;
}
function fi({ swiper: e, on: t, emit: i }) {
  const s = D();
  let n = null,
    r = null;
  const a = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    },
    d = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((f) => {
          r = s.requestAnimationFrame(() => {
            const { width: c, height: u } = e;
            let p = c,
              m = u;
            f.forEach(({ contentBoxSize: b, contentRect: h, target: _ }) => {
              (_ && _ !== e.el) ||
                ((p = h ? h.width : (b[0] || b).inlineSize),
                (m = h ? h.height : (b[0] || b).blockSize));
            }),
              (p !== c || m !== u) && a();
          });
        })),
        n.observe(e.el));
    },
    l = () => {
      r && s.cancelAnimationFrame(r),
        n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
    },
    o = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
      d();
      return;
    }
    s.addEventListener("resize", a), s.addEventListener("orientationchange", o);
  }),
    t("destroy", () => {
      l(),
        s.removeEventListener("resize", a),
        s.removeEventListener("orientationchange", o);
    });
}
function ci({ swiper: e, extendParams: t, on: i, emit: s }) {
  const n = [],
    r = D(),
    a = (o, f = {}) => {
      const c = r.MutationObserver || r.WebkitMutationObserver,
        u = new c((p) => {
          if (p.length === 1) {
            s("observerUpdate", p[0]);
            return;
          }
          const m = function () {
            s("observerUpdate", p[0]);
          };
          r.requestAnimationFrame
            ? r.requestAnimationFrame(m)
            : r.setTimeout(m, 0);
        });
      u.observe(o, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        n.push(u);
    },
    d = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const o = e.$el.parents();
          for (let f = 0; f < o.length; f += 1) a(o[f]);
        }
        a(e.$el[0], { childList: e.params.observeSlideChildren }),
          a(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      n.forEach((o) => {
        o.disconnect();
      }),
        n.splice(0, n.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", d),
    i("destroy", l);
}
const ui = {
  on(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const n = i ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](t);
      }),
      s
    );
  },
  once(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function n(...r) {
      s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, r);
    }
    return (n.__emitterProxy = t), s.on(e, n, i);
  },
  onAny(e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const s = t ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const i = t.eventsAnyListeners.indexOf(e);
    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
  },
  off(e, t) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((n, r) => {
                (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                  i.eventsListeners[s].splice(r, 1);
              });
        }),
      i
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let i, s, n;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
        : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
      s.unshift(n),
      (Array.isArray(i) ? i : i.split(" ")).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((d) => {
            d.apply(n, [a, ...s]);
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((d) => {
              d.apply(n, s);
            });
      }),
      t
    );
  },
};
function pi() {
  const e = this;
  let t, i;
  const s = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (i = e.params.height)
      : (i = s[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (i === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(s.css("padding-left") || 0, 10) -
        parseInt(s.css("padding-right") || 0, 10)),
      (i =
        i -
        parseInt(s.css("padding-top") || 0, 10) -
        parseInt(s.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i,
      }));
}
function hi() {
  const e = this;
  function t(y) {
    return e.isHorizontal()
      ? y
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[y];
  }
  function i(y, E) {
    return parseFloat(y.getPropertyValue(t(E)) || 0);
  }
  const s = e.params,
    { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: d } = e,
    l = e.virtual && s.virtual.enabled,
    o = l ? e.virtual.slides.length : e.slides.length,
    f = n.children(`.${e.params.slideClass}`),
    c = l ? e.virtual.slides.length : f.length;
  let u = [];
  const p = [],
    m = [];
  let b = s.slidesOffsetBefore;
  typeof b == "function" && (b = s.slidesOffsetBefore.call(e));
  let h = s.slidesOffsetAfter;
  typeof h == "function" && (h = s.slidesOffsetAfter.call(e));
  const _ = e.snapGrid.length,
    S = e.slidesGrid.length;
  let v = s.spaceBetween,
    T = -b,
    C = 0,
    L = 0;
  if (typeof r > "u") return;
  typeof v == "string" &&
    v.indexOf("%") >= 0 &&
    (v = (parseFloat(v.replace("%", "")) / 100) * r),
    (e.virtualSize = -v),
    a
      ? f.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : f.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    s.centeredSlides &&
      s.cssMode &&
      (de(e.wrapperEl, "--swiper-centered-offset-before", ""),
      de(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const I = s.grid && s.grid.rows > 1 && e.grid;
  I && e.grid.initSlides(c);
  let P;
  const z =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (y) => typeof s.breakpoints[y].slidesPerView < "u"
    ).length > 0;
  for (let y = 0; y < c; y += 1) {
    P = 0;
    const E = f.eq(y);
    if ((I && e.grid.updateSlide(y, E, c, t), E.css("display") !== "none")) {
      if (s.slidesPerView === "auto") {
        z && (f[y].style[t("width")] = "");
        const O = getComputedStyle(E[0]),
          k = E[0].style.transform,
          g = E[0].style.webkitTransform;
        if (
          (k && (E[0].style.transform = "none"),
          g && (E[0].style.webkitTransform = "none"),
          s.roundLengths)
        )
          P = e.isHorizontal() ? E.outerWidth(!0) : E.outerHeight(!0);
        else {
          const M = i(O, "width"),
            $ = i(O, "padding-left"),
            ue = i(O, "padding-right"),
            x = i(O, "margin-left"),
            V = i(O, "margin-right"),
            Me = O.getPropertyValue("box-sizing");
          if (Me && Me === "border-box") P = M + x + V;
          else {
            const { clientWidth: lt, offsetWidth: at } = E[0];
            P = M + $ + ue + x + V + (at - lt);
          }
        }
        k && (E[0].style.transform = k),
          g && (E[0].style.webkitTransform = g),
          s.roundLengths && (P = Math.floor(P));
      } else
        (P = (r - (s.slidesPerView - 1) * v) / s.slidesPerView),
          s.roundLengths && (P = Math.floor(P)),
          f[y] && (f[y].style[t("width")] = `${P}px`);
      f[y] && (f[y].swiperSlideSize = P),
        m.push(P),
        s.centeredSlides
          ? ((T = T + P / 2 + C / 2 + v),
            C === 0 && y !== 0 && (T = T - r / 2 - v),
            y === 0 && (T = T - r / 2 - v),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            s.roundLengths && (T = Math.floor(T)),
            L % s.slidesPerGroup === 0 && u.push(T),
            p.push(T))
          : (s.roundLengths && (T = Math.floor(T)),
            (L - Math.min(e.params.slidesPerGroupSkip, L)) %
              e.params.slidesPerGroup ===
              0 && u.push(T),
            p.push(T),
            (T = T + P + v)),
        (e.virtualSize += P + v),
        (C = P),
        (L += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + h),
    a &&
      d &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
    s.setWrapperSize &&
      n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
    I && e.grid.updateWrapperSize(P, u, t),
    !s.centeredSlides)
  ) {
    const y = [];
    for (let E = 0; E < u.length; E += 1) {
      let O = u[E];
      s.roundLengths && (O = Math.floor(O)),
        u[E] <= e.virtualSize - r && y.push(O);
    }
    (u = y),
      Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
        u.push(e.virtualSize - r);
  }
  if ((u.length === 0 && (u = [0]), s.spaceBetween !== 0)) {
    const y = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
    f.filter((E, O) => (s.cssMode ? O !== f.length - 1 : !0)).css({
      [y]: `${v}px`,
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let y = 0;
    m.forEach((O) => {
      y += O + (s.spaceBetween ? s.spaceBetween : 0);
    }),
      (y -= s.spaceBetween);
    const E = y - r;
    u = u.map((O) => (O < 0 ? -b : O > E ? E + h : O));
  }
  if (s.centerInsufficientSlides) {
    let y = 0;
    if (
      (m.forEach((E) => {
        y += E + (s.spaceBetween ? s.spaceBetween : 0);
      }),
      (y -= s.spaceBetween),
      y < r)
    ) {
      const E = (r - y) / 2;
      u.forEach((O, k) => {
        u[k] = O - E;
      }),
        p.forEach((O, k) => {
          p[k] = O + E;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: u,
      slidesGrid: p,
      slidesSizesGrid: m,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    de(e.wrapperEl, "--swiper-centered-offset-before", `${-u[0]}px`),
      de(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - m[m.length - 1] / 2}px`
      );
    const y = -e.snapGrid[0],
      E = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + y)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + E));
  }
  if (
    (c !== o && e.emit("slidesLengthChange"),
    u.length !== _ &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    p.length !== S && e.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    !l && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const y = `${s.containerModifierClass}backface-hidden`,
      E = e.$el.hasClass(y);
    c <= s.maxBackfaceHiddenSlides
      ? E || e.$el.addClass(y)
      : E && e.$el.removeClass(y);
  }
}
function mi(e) {
  const t = this,
    i = [],
    s = t.virtual && t.params.virtual.enabled;
  let n = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const a = (d) =>
    s
      ? t.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === d
        )[0]
      : t.slides.eq(d)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || w([])).each((d) => {
        i.push(d);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const d = t.activeIndex + r;
        if (d > t.slides.length && !s) break;
        i.push(a(d));
      }
  else i.push(a(t.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const d = i[r].offsetHeight;
      n = d > n ? d : n;
    }
  (n || n === 0) && t.$wrapperEl.css("height", `${n}px`);
}
function gi() {
  const e = this,
    t = e.slides;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = e.isHorizontal()
      ? t[i].offsetLeft
      : t[i].offsetTop;
}
function vi(e = (this && this.translate) || 0) {
  const t = this,
    i = t.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  n && (a = e),
    s.removeClass(i.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let d = 0; d < s.length; d += 1) {
    const l = s[d];
    let o = l.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
    const f =
        (a + (i.centeredSlides ? t.minTranslate() : 0) - o) /
        (l.swiperSlideSize + i.spaceBetween),
      c =
        (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - o) /
        (l.swiperSlideSize + i.spaceBetween),
      u = -(a - o),
      p = u + t.slidesSizesGrid[d];
    ((u >= 0 && u < t.size - 1) ||
      (p > 1 && p <= t.size) ||
      (u <= 0 && p >= t.size)) &&
      (t.visibleSlides.push(l),
      t.visibleSlidesIndexes.push(d),
      s.eq(d).addClass(i.slideVisibleClass)),
      (l.progress = n ? -f : f),
      (l.originalProgress = n ? -c : c);
  }
  t.visibleSlides = w(t.visibleSlides);
}
function wi(e) {
  const t = this;
  if (typeof e > "u") {
    const o = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * o) || 0;
  }
  const i = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: r, isEnd: a } = t;
  const d = r,
    l = a;
  s === 0
    ? ((n = 0), (r = !0), (a = !0))
    : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (a = n >= 1)),
    Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !d && t.emit("reachBeginning toEdge"),
    a && !l && t.emit("reachEnd toEdge"),
    ((d && !r) || (l && !a)) && t.emit("fromEdge"),
    t.emit("progress", n);
}
function Si() {
  const e = this,
    { slides: t, params: i, $wrapperEl: s, activeIndex: n, realIndex: r } = e,
    a = e.virtual && i.virtual.enabled;
  t.removeClass(
    `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
  );
  let d;
  a
    ? (d = e.$wrapperEl.find(
        `.${i.slideClass}[data-swiper-slide-index="${n}"]`
      ))
    : (d = t.eq(n)),
    d.addClass(i.slideActiveClass),
    i.loop &&
      (d.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
            )
            .addClass(i.slideDuplicateActiveClass)
        : s
            .children(
              `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
            )
            .addClass(i.slideDuplicateActiveClass));
  let l = d.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
  i.loop && l.length === 0 && ((l = t.eq(0)), l.addClass(i.slideNextClass));
  let o = d.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
  i.loop && o.length === 0 && ((o = t.eq(-1)), o.addClass(i.slidePrevClass)),
    i.loop &&
      (l.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(i.slideDuplicateNextClass)
        : s
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(i.slideDuplicateNextClass),
      o.hasClass(i.slideDuplicateClass)
        ? s
            .children(
              `.${i.slideClass}:not(.${
                i.slideDuplicateClass
              })[data-swiper-slide-index="${o.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(i.slideDuplicatePrevClass)
        : s
            .children(
              `.${i.slideClass}.${
                i.slideDuplicateClass
              }[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`
            )
            .addClass(i.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function Ti(e) {
  const t = this,
    i = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: s,
      snapGrid: n,
      params: r,
      activeIndex: a,
      realIndex: d,
      snapIndex: l,
    } = t;
  let o = e,
    f;
  if (typeof o > "u") {
    for (let u = 0; u < s.length; u += 1)
      typeof s[u + 1] < "u"
        ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
          ? (o = u)
          : i >= s[u] && i < s[u + 1] && (o = u + 1)
        : i >= s[u] && (o = u);
    r.normalizeSlideIndex && (o < 0 || typeof o > "u") && (o = 0);
  }
  if (n.indexOf(i) >= 0) f = n.indexOf(i);
  else {
    const u = Math.min(r.slidesPerGroupSkip, o);
    f = u + Math.floor((o - u) / r.slidesPerGroup);
  }
  if ((f >= n.length && (f = n.length - 1), o === a)) {
    f !== l && ((t.snapIndex = f), t.emit("snapIndexChange"));
    return;
  }
  const c = parseInt(t.slides.eq(o).attr("data-swiper-slide-index") || o, 10);
  Object.assign(t, {
    snapIndex: f,
    realIndex: c,
    previousIndex: a,
    activeIndex: o,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    d !== c && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function bi(e) {
  const t = this,
    i = t.params,
    s = w(e).closest(`.${i.slideClass}`)[0];
  let n = !1,
    r;
  if (s) {
    for (let a = 0; a < t.slides.length; a += 1)
      if (t.slides[a] === s) {
        (n = !0), (r = a);
        break;
      }
  }
  if (s && n)
    (t.clickedSlide = s),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(w(s).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = r);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const Ei = {
  updateSize: pi,
  updateSlides: hi,
  updateAutoHeight: mi,
  updateSlidesOffset: gi,
  updateSlidesProgress: vi,
  updateProgress: wi,
  updateSlidesClasses: Si,
  updateActiveIndex: Ti,
  updateClickedSlide: bi,
};
function _i(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: i, rtlTranslate: s, translate: n, $wrapperEl: r } = t;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let a = si(r[0], e);
  return s && (a = -a), a || 0;
}
function Ci(e, t) {
  const i = this,
    {
      rtlTranslate: s,
      params: n,
      $wrapperEl: r,
      wrapperEl: a,
      progress: d,
    } = i;
  let l = 0,
    o = 0;
  const f = 0;
  i.isHorizontal() ? (l = s ? -e : e) : (o = e),
    n.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
    n.cssMode
      ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -l
          : -o)
      : n.virtualTranslate ||
        r.transform(`translate3d(${l}px, ${o}px, ${f}px)`),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : o);
  let c;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? (c = 0) : (c = (e - i.minTranslate()) / u),
    c !== d && i.updateProgress(e),
    i.emit("setTranslate", i.translate, t);
}
function yi() {
  return -this.snapGrid[0];
}
function xi() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Mi(e = 0, t = this.params.speed, i = !0, s = !0, n) {
  const r = this,
    { params: a, wrapperEl: d } = r;
  if (r.animating && a.preventInteractionOnTransition) return !1;
  const l = r.minTranslate(),
    o = r.maxTranslate();
  let f;
  if (
    (s && e > l ? (f = l) : s && e < o ? (f = o) : (f = e),
    r.updateProgress(f),
    a.cssMode)
  ) {
    const c = r.isHorizontal();
    if (t === 0) d[c ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll)
        return (
          tt({ swiper: r, targetPosition: -f, side: c ? "left" : "top" }), !0
        );
      d.scrollTo({ [c ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(f),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(f),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (u) {
              !r ||
                r.destroyed ||
                (u.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  i && r.emit("transitionEnd")));
            }),
          r.$wrapperEl[0].addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ),
          r.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const Pi = {
  getTranslate: _i,
  setTranslate: Ci,
  minTranslate: yi,
  maxTranslate: xi,
  translateTo: Mi,
};
function Li(e, t) {
  const i = this;
  i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t);
}
function st({ swiper: e, runCallbacks: t, direction: i, step: s }) {
  const { activeIndex: n, previousIndex: r } = e;
  let a = i;
  if (
    (a || (n > r ? (a = "next") : n < r ? (a = "prev") : (a = "reset")),
    e.emit(`transition${s}`),
    t && n !== r)
  ) {
    if (a === "reset") {
      e.emit(`slideResetTransition${s}`);
      return;
    }
    e.emit(`slideChangeTransition${s}`),
      a === "next"
        ? e.emit(`slideNextTransition${s}`)
        : e.emit(`slidePrevTransition${s}`);
  }
}
function Oi(e = !0, t) {
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    st({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
}
function Ii(e = !0, t) {
  const i = this,
    { params: s } = i;
  (i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      st({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
}
const zi = { setTransition: Li, transitionStart: Oi, transitionEnd: Ii };
function Di(e = 0, t = this.params.speed, i = !0, s, n) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const v = parseInt(e, 10);
    if (!isFinite(v))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = v;
  }
  const r = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: d,
    snapGrid: l,
    slidesGrid: o,
    previousIndex: f,
    activeIndex: c,
    rtlTranslate: u,
    wrapperEl: p,
    enabled: m,
  } = r;
  if ((r.animating && d.preventInteractionOnTransition) || (!m && !s && !n))
    return !1;
  const b = Math.min(r.params.slidesPerGroupSkip, a);
  let h = b + Math.floor((a - b) / r.params.slidesPerGroup);
  h >= l.length && (h = l.length - 1);
  const _ = -l[h];
  if (d.normalizeSlideIndex)
    for (let v = 0; v < o.length; v += 1) {
      const T = -Math.floor(_ * 100),
        C = Math.floor(o[v] * 100),
        L = Math.floor(o[v + 1] * 100);
      typeof o[v + 1] < "u"
        ? T >= C && T < L - (L - C) / 2
          ? (a = v)
          : T >= C && T < L && (a = v + 1)
        : T >= C && (a = v);
    }
  if (
    r.initialized &&
    a !== c &&
    ((!r.allowSlideNext && _ < r.translate && _ < r.minTranslate()) ||
      (!r.allowSlidePrev &&
        _ > r.translate &&
        _ > r.maxTranslate() &&
        (c || 0) !== a))
  )
    return !1;
  a !== (f || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(_);
  let S;
  if (
    (a > c ? (S = "next") : a < c ? (S = "prev") : (S = "reset"),
    (u && -_ === r.translate) || (!u && _ === r.translate))
  )
    return (
      r.updateActiveIndex(a),
      d.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      d.effect !== "slide" && r.setTranslate(_),
      S !== "reset" && (r.transitionStart(i, S), r.transitionEnd(i, S)),
      !1
    );
  if (d.cssMode) {
    const v = r.isHorizontal(),
      T = u ? _ : -_;
    if (t === 0) {
      const C = r.virtual && r.params.virtual.enabled;
      C &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        (p[v ? "scrollLeft" : "scrollTop"] = T),
        C &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""),
              (r._swiperImmediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          tt({ swiper: r, targetPosition: T, side: v ? "left" : "top" }), !0
        );
      p.scrollTo({ [v ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(_),
    r.updateActiveIndex(a),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(i, S),
    t === 0
      ? r.transitionEnd(i, S)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (T) {
            !r ||
              r.destroyed ||
              (T.target === this &&
                (r.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, S)));
          }),
        r.$wrapperEl[0].addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        ),
        r.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Ai(e = 0, t = this.params.speed, i = !0, s) {
  if (typeof e == "string") {
    const a = parseInt(e, 10);
    if (!isFinite(a))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = a;
  }
  const n = this;
  let r = e;
  return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
}
function ki(e = this.params.speed, t = !0, i) {
  const s = this,
    { animating: n, enabled: r, params: a } = s;
  if (!r) return s;
  let d = a.slidesPerGroup;
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (d = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : d;
  if (a.loop) {
    if (n && a.loopPreventsSlide) return !1;
    s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
  }
  return a.rewind && s.isEnd
    ? s.slideTo(0, e, t, i)
    : s.slideTo(s.activeIndex + l, e, t, i);
}
function Ni(e = this.params.speed, t = !0, i) {
  const s = this,
    {
      params: n,
      animating: r,
      snapGrid: a,
      slidesGrid: d,
      rtlTranslate: l,
      enabled: o,
    } = s;
  if (!o) return s;
  if (n.loop) {
    if (r && n.loopPreventsSlide) return !1;
    s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
  }
  const f = l ? s.translate : -s.translate;
  function c(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const u = c(f),
    p = a.map((h) => c(h));
  let m = a[p.indexOf(u) - 1];
  if (typeof m > "u" && n.cssMode) {
    let h;
    a.forEach((_, S) => {
      u >= _ && (h = S);
    }),
      typeof h < "u" && (m = a[h > 0 ? h - 1 : h]);
  }
  let b = 0;
  if (
    (typeof m < "u" &&
      ((b = d.indexOf(m)),
      b < 0 && (b = s.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((b = b - s.slidesPerViewDynamic("previous", !0) + 1),
        (b = Math.max(b, 0)))),
    n.rewind && s.isBeginning)
  ) {
    const h =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(h, e, t, i);
  }
  return s.slideTo(b, e, t, i);
}
function Gi(e = this.params.speed, t = !0, i) {
  const s = this;
  return s.slideTo(s.activeIndex, e, t, i);
}
function Bi(e = this.params.speed, t = !0, i, s = 0.5) {
  const n = this;
  let r = n.activeIndex;
  const a = Math.min(n.params.slidesPerGroupSkip, r),
    d = a + Math.floor((r - a) / n.params.slidesPerGroup),
    l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[d]) {
    const o = n.snapGrid[d],
      f = n.snapGrid[d + 1];
    l - o > (f - o) * s && (r += n.params.slidesPerGroup);
  } else {
    const o = n.snapGrid[d - 1],
      f = n.snapGrid[d];
    l - o <= (f - o) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, e, t, i)
  );
}
function Vi() {
  const e = this,
    { params: t, $wrapperEl: i } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let n = e.clickedIndex,
    r;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? n < e.loopedSlides - s / 2 ||
          n > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (n = i
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Te(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n)
        : n > e.slides.length - s
        ? (e.loopFix(),
          (n = i
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          Te(() => {
            e.slideTo(n);
          }))
        : e.slideTo(n);
  } else e.slideTo(n);
}
const $i = {
  slideTo: Di,
  slideToLoop: Ai,
  slideNext: ki,
  slidePrev: Ni,
  slideReset: Gi,
  slideToClosest: Bi,
  slideToClickedSlide: Vi,
};
function Hi() {
  const e = this,
    t = B(),
    { params: i, $wrapperEl: s } = e,
    n = s.children().length > 0 ? w(s.children()[0].parentNode) : s;
  n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
  let r = n.children(`.${i.slideClass}`);
  if (i.loopFillGroupWithBlank) {
    const l = i.slidesPerGroup - (r.length % i.slidesPerGroup);
    if (l !== i.slidesPerGroup) {
      for (let o = 0; o < l; o += 1) {
        const f = w(t.createElement("div")).addClass(
          `${i.slideClass} ${i.slideBlankClass}`
        );
        n.append(f);
      }
      r = n.children(`.${i.slideClass}`);
    }
  }
  i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = r.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(i.loopedSlides || i.slidesPerView, 10)
    )),
    (e.loopedSlides += i.loopAdditionalSlides),
    e.loopedSlides > r.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = r.length);
  const a = [],
    d = [];
  r.each((l, o) => {
    w(l).attr("data-swiper-slide-index", o);
  });
  for (let l = 0; l < e.loopedSlides; l += 1) {
    const o = l - Math.floor(l / r.length) * r.length;
    d.push(r.eq(o)[0]), a.unshift(r.eq(r.length - o - 1)[0]);
  }
  for (let l = 0; l < d.length; l += 1)
    n.append(w(d[l].cloneNode(!0)).addClass(i.slideDuplicateClass));
  for (let l = a.length - 1; l >= 0; l -= 1)
    n.prepend(w(a[l].cloneNode(!0)).addClass(i.slideDuplicateClass));
}
function Fi() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: i,
    loopedSlides: s,
    allowSlidePrev: n,
    allowSlideNext: r,
    snapGrid: a,
    rtlTranslate: d,
  } = e;
  let l;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const f = -a[t] - e.getTranslate();
  t < s
    ? ((l = i.length - s * 3 + t),
      (l += s),
      e.slideTo(l, 0, !1, !0) &&
        f !== 0 &&
        e.setTranslate((d ? -e.translate : e.translate) - f))
    : t >= i.length - s &&
      ((l = -i.length + t + s),
      (l += s),
      e.slideTo(l, 0, !1, !0) &&
        f !== 0 &&
        e.setTranslate((d ? -e.translate : e.translate) - f)),
    (e.allowSlidePrev = n),
    (e.allowSlideNext = r),
    e.emit("loopFix");
}
function ji() {
  const e = this,
    { $wrapperEl: t, params: i, slides: s } = e;
  t
    .children(
      `.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`
    )
    .remove(),
    s.removeAttr("data-swiper-slide-index");
}
const Wi = { loopCreate: Hi, loopFix: Fi, loopDestroy: ji };
function Ri(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (i.style.cursor = "move"), (i.style.cursor = e ? "grabbing" : "grab");
}
function qi() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Xi = { setGrabCursor: Ri, unsetGrabCursor: qi };
function Yi(e, t = this) {
  function i(s) {
    if (!s || s === B() || s === D()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(e);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(t);
}
function Ui(e) {
  const t = this,
    i = B(),
    s = D(),
    n = t.touchEventsData,
    { params: r, touches: a, enabled: d } = t;
  if (!d || (t.animating && r.preventInteractionOnTransition)) return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let l = e;
  l.originalEvent && (l = l.originalEvent);
  let o = w(l.target);
  if (
    (r.touchEventsTarget === "wrapper" && !o.closest(t.wrapperEl).length) ||
    ((n.isTouchEvent = l.type === "touchstart"),
    !n.isTouchEvent && "which" in l && l.which === 3) ||
    (!n.isTouchEvent && "button" in l && l.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const f = !!r.noSwipingClass && r.noSwipingClass !== "",
    c = e.composedPath ? e.composedPath() : e.path;
  f && l.target && l.target.shadowRoot && c && (o = w(c[0]));
  const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    p = !!(l.target && l.target.shadowRoot);
  if (r.noSwiping && (p ? Yi(u, o[0]) : o.closest(u)[0])) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !o.closest(r.swipeHandler)[0]) return;
  (a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (a.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const m = a.currentX,
    b = a.currentY,
    h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    _ = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (h && (m <= _ || m >= s.innerWidth - _))
    if (h === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (a.startX = m),
    (a.startY = b),
    (n.touchStartTime = le()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let S = !0;
    o.is(n.focusableElements) &&
      ((S = !1), o[0].nodeName === "SELECT" && (n.isTouched = !1)),
      i.activeElement &&
        w(i.activeElement).is(n.focusableElements) &&
        i.activeElement !== o[0] &&
        i.activeElement.blur();
    const v = S && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || v) &&
      !o[0].isContentEditable &&
      l.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !r.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", l);
}
function Ki(e) {
  const t = B(),
    i = this,
    s = i.touchEventsData,
    { params: n, touches: r, rtlTranslate: a, enabled: d } = i;
  if (!d) return;
  let l = e;
  if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l);
    return;
  }
  if (s.isTouchEvent && l.type !== "touchmove") return;
  const o =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    f = l.type === "touchmove" ? o.pageX : l.pageX,
    c = l.type === "touchmove" ? o.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (r.startX = f), (r.startY = c);
    return;
  }
  if (!i.allowTouchMove) {
    w(l.target).is(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: f, startY: c, currentX: f, currentY: c }),
        (s.touchStartTime = le()));
    return;
  }
  if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (
        (c < r.startY && i.translate <= i.maxTranslate()) ||
        (c > r.startY && i.translate >= i.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (f < r.startX && i.translate <= i.maxTranslate()) ||
      (f > r.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    s.isTouchEvent &&
    t.activeElement &&
    l.target === t.activeElement &&
    w(l.target).is(s.focusableElements)
  ) {
    (s.isMoved = !0), (i.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && i.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (r.currentX = f), (r.currentY = c);
  const u = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(u ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let _;
    (i.isHorizontal() && r.currentY === r.startY) ||
    (i.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : u * u + p * p >= 25 &&
        ((_ = (Math.atan2(Math.abs(p), Math.abs(u)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? _ > n.touchAngle
          : 90 - _ > n.touchAngle));
  }
  if (
    (s.isScrolling && i.emit("touchMoveOpposite", l),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling)
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (i.allowClick = !1),
    !n.cssMode && l.cancelable && l.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
    s.isMoved ||
      (n.loop && !n.cssMode && i.loopFix(),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (s.allowMomentumBounce = !1),
      n.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", l)),
    i.emit("sliderMove", l),
    (s.isMoved = !0);
  let m = i.isHorizontal() ? u : p;
  (r.diff = m),
    (m *= n.touchRatio),
    a && (m = -m),
    (i.swipeDirection = m > 0 ? "prev" : "next"),
    (s.currentTranslate = m + s.startTranslate);
  let b = !0,
    h = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (h = 0),
    m > 0 && s.currentTranslate > i.minTranslate()
      ? ((b = !1),
        n.resistance &&
          (s.currentTranslate =
            i.minTranslate() -
            1 +
            (-i.minTranslate() + s.startTranslate + m) ** h))
      : m < 0 &&
        s.currentTranslate < i.maxTranslate() &&
        ((b = !1),
        n.resistance &&
          (s.currentTranslate =
            i.maxTranslate() +
            1 -
            (i.maxTranslate() - s.startTranslate - m) ** h)),
    b && (l.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
      n.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    i.params.freeMode &&
      n.freeMode.enabled &&
      i.freeMode &&
      i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate));
}
function Ji(e) {
  const t = this,
    i = t.touchEventsData,
    { params: s, touches: n, rtlTranslate: r, slidesGrid: a, enabled: d } = t;
  if (!d) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    i.allowTouchCallbacks && t.emit("touchEnd", l),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  s.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const o = le(),
    f = o - i.touchStartTime;
  if (t.allowClick) {
    const S = l.path || (l.composedPath && l.composedPath());
    t.updateClickedSlide((S && S[0]) || l.target),
      t.emit("tap click", l),
      f < 300 &&
        o - i.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", l);
  }
  if (
    ((i.lastClickTime = le()),
    Te(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !t.swipeDirection ||
      n.diff === 0 ||
      i.currentTranslate === i.startTranslate)
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let c;
  if (
    (s.followFinger
      ? (c = r ? t.translate : -t.translate)
      : (c = -i.currentTranslate),
    s.cssMode)
  )
    return;
  if (t.params.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: c });
    return;
  }
  let u = 0,
    p = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < a.length;
    S += S < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const v = S < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof a[S + v] < "u"
      ? c >= a[S] && c < a[S + v] && ((u = S), (p = a[S + v] - a[S]))
      : c >= a[S] && ((u = S), (p = a[a.length - 1] - a[a.length - 2]));
  }
  let m = null,
    b = null;
  s.rewind &&
    (t.isBeginning
      ? (b =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0));
  const h = (c - a[u]) / p,
    _ = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (f > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? m : u + _)
        : t.slideTo(u)),
      t.swipeDirection === "prev" &&
        (h > 1 - s.longSwipesRatio
          ? t.slideTo(u + _)
          : b !== null && h < 0 && Math.abs(h) > s.longSwipesRatio
          ? t.slideTo(b)
          : t.slideTo(u));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
      ? l.target === t.navigation.nextEl
        ? t.slideTo(u + _)
        : t.slideTo(u)
      : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : u + _),
        t.swipeDirection === "prev" && t.slideTo(b !== null ? b : u));
  }
}
function ze() {
  const e = this,
    { params: t, el: i } = e;
  if (i && i.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = n),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Qi(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Zi() {
  const e = this,
    { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
  if (!s) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let n;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / r),
    n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let De = !1;
function es() {}
const nt = (e, t) => {
  const i = B(),
    {
      params: s,
      touchEvents: n,
      el: r,
      wrapperEl: a,
      device: d,
      support: l,
    } = e,
    o = !!s.nested,
    f = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  if (!l.touch)
    r[f](n.start, e.onTouchStart, !1),
      i[f](n.move, e.onTouchMove, o),
      i[f](n.end, e.onTouchEnd, !1);
  else {
    const u =
      n.start === "touchstart" && l.passiveListener && s.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    r[f](n.start, e.onTouchStart, u),
      r[f](
        n.move,
        e.onTouchMove,
        l.passiveListener ? { passive: !1, capture: o } : o
      ),
      r[f](n.end, e.onTouchEnd, u),
      n.cancel && r[f](n.cancel, e.onTouchEnd, u);
  }
  (s.preventClicks || s.preventClicksPropagation) &&
    r[f]("click", e.onClick, !0),
    s.cssMode && a[f]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[c](
          d.ios || d.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ze,
          !0
        )
      : e[c]("observerUpdate", ze, !0);
};
function ts() {
  const e = this,
    t = B(),
    { params: i, support: s } = e;
  (e.onTouchStart = Ui.bind(e)),
    (e.onTouchMove = Ki.bind(e)),
    (e.onTouchEnd = Ji.bind(e)),
    i.cssMode && (e.onScroll = Zi.bind(e)),
    (e.onClick = Qi.bind(e)),
    s.touch && !De && (t.addEventListener("touchstart", es), (De = !0)),
    nt(e, "on");
}
function is() {
  nt(this, "off");
}
const ss = { attachEvents: ts, detachEvents: is },
  Ae = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function ns() {
  const e = this,
    {
      activeIndex: t,
      initialized: i,
      loopedSlides: s = 0,
      params: n,
      $el: r,
    } = e,
    a = n.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  const d = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
  if (!d || e.currentBreakpoint === d) return;
  const o = (d in a ? a[d] : void 0) || e.originalParams,
    f = Ae(e, n),
    c = Ae(e, o),
    u = n.enabled;
  f && !c
    ? (r.removeClass(
        `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !f &&
      c &&
      (r.addClass(`${n.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && n.grid.fill === "column")) &&
        r.addClass(`${n.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      const _ = n[h] && n[h].enabled,
        S = o[h] && o[h].enabled;
      _ && !S && e[h].disable(), !_ && S && e[h].enable();
    });
  const p = o.direction && o.direction !== n.direction,
    m = n.loop && (o.slidesPerView !== n.slidesPerView || p);
  p && i && e.changeDirection(), G(e.params, o);
  const b = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    u && !b ? e.disable() : !u && b && e.enable(),
    (e.currentBreakpoint = d),
    e.emit("_beforeBreakpoint", o),
    m &&
      i &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - s + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", o);
}
function rs(e, t = "window", i) {
  if (!e || (t === "container" && !i)) return;
  let s = !1;
  const n = D(),
    r = t === "window" ? n.innerHeight : i.clientHeight,
    a = Object.keys(e).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const l = parseFloat(d.substr(1));
        return { value: r * l, point: d };
      }
      return { value: d, point: d };
    });
  a.sort((d, l) => parseInt(d.value, 10) - parseInt(l.value, 10));
  for (let d = 0; d < a.length; d += 1) {
    const { point: l, value: o } = a[d];
    t === "window"
      ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = l)
      : o <= i.clientWidth && (s = l);
  }
  return s || "max";
}
const ls = { setBreakpoint: ns, getBreakpoint: rs };
function as(e, t) {
  const i = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && i.push(t + n);
          })
        : typeof s == "string" && i.push(t + s);
    }),
    i
  );
}
function os() {
  const e = this,
    { classNames: t, params: i, rtl: s, $el: n, device: r, support: a } = e,
    d = as(
      [
        "initialized",
        i.direction,
        { "pointer-events": !a.touch },
        { "free-mode": e.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  t.push(...d), n.addClass([...t].join(" ")), e.emitContainerClasses();
}
function ds() {
  const e = this,
    { $el: t, classNames: i } = e;
  t.removeClass(i.join(" ")), e.emitContainerClasses();
}
const fs = { addClasses: os, removeClasses: ds };
function cs(e, t, i, s, n, r) {
  const a = D();
  let d;
  function l() {
    r && r();
  }
  !w(e).parent("picture")[0] && (!e.complete || !n) && t
    ? ((d = new a.Image()),
      (d.onload = l),
      (d.onerror = l),
      s && (d.sizes = s),
      i && (d.srcset = i),
      t && (d.src = t))
    : l();
}
function us() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let i = 0; i < e.imagesToLoad.length; i += 1) {
    const s = e.imagesToLoad[i];
    e.loadImage(
      s,
      s.currentSrc || s.getAttribute("src"),
      s.srcset || s.getAttribute("srcset"),
      s.sizes || s.getAttribute("sizes"),
      !0,
      t
    );
  }
}
const ps = { loadImage: cs, preloadImages: us };
function hs() {
  const e = this,
    { isLocked: t, params: i } = e,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const n = e.slides.length - 1,
      r = e.slidesGrid[n] + e.slidesSizesGrid[n] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const ms = { checkOverflow: hs },
  ke = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function gs(e, t) {
  return function (s = {}) {
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      G(t, s);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
        e[n] === !0 &&
        (e[n] = { auto: !0 }),
      !(n in e && "enabled" in r))
    ) {
      G(t, s);
      return;
    }
    e[n] === !0 && (e[n] = { enabled: !0 }),
      typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0),
      e[n] || (e[n] = { enabled: !1 }),
      G(t, s);
  };
}
const ve = {
    eventsEmitter: ui,
    update: Ei,
    translate: Pi,
    transition: zi,
    slide: $i,
    loop: Wi,
    grabCursor: Xi,
    events: ss,
    breakpoints: ls,
    checkOverflow: ms,
    classes: fs,
    images: ps,
  },
  we = {};
class N {
  constructor(...t) {
    let i, s;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (s = t[0])
        : ([i, s] = t),
      s || (s = {}),
      (s = G({}, s)),
      i && !s.el && (s.el = i),
      s.el && w(s.el).length > 1)
    ) {
      const d = [];
      return (
        w(s.el).each((l) => {
          const o = G({}, s, { el: l });
          d.push(new N(o));
        }),
        d
      );
    }
    const n = this;
    (n.__swiper__ = !0),
      (n.support = it()),
      (n.device = ai({ userAgent: s.userAgent })),
      (n.browser = di()),
      (n.eventsListeners = {}),
      (n.eventsAnyListeners = []),
      (n.modules = [...n.__modules__]),
      s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
    const r = {};
    n.modules.forEach((d) => {
      d({
        swiper: n,
        extendParams: gs(s, r),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n),
      });
    });
    const a = G({}, ke, r);
    return (
      (n.params = G({}, a, we, s)),
      (n.originalParams = G({}, n.params)),
      (n.passedParams = G({}, s)),
      n.params &&
        n.params.on &&
        Object.keys(n.params.on).forEach((d) => {
          n.on(d, n.params.on[d]);
        }),
      n.params && n.params.onAny && n.onAny(n.params.onAny),
      (n.$ = w),
      Object.assign(n, {
        enabled: n.params.enabled,
        el: i,
        classNames: [],
        slides: w(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return n.params.direction === "horizontal";
        },
        isVertical() {
          return n.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEvents: (function () {
          const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
            o = ["pointerdown", "pointermove", "pointerup"];
          return (
            (n.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (n.touchEventsDesktop = { start: o[0], move: o[1], end: o[2] }),
            n.support.touch || !n.params.simulateTouch
              ? n.touchEventsTouch
              : n.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: n.params.focusableElements,
          lastClickTime: le(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      n.emit("_swiper"),
      n.params.init && n.init(),
      n
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, i) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const n = s.minTranslate(),
      a = (s.maxTranslate() - n) * t + n;
    s.translateTo(a, typeof i > "u" ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(t) {
    const i = this;
    return i.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = [];
    t.slides.each((s) => {
      const n = t.getSlideClasses(s);
      i.push({ slideEl: s, classNames: n }), t.emit("_slideClass", s, n);
    }),
      t.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(t = "current", i = !1) {
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: a,
        slidesSizesGrid: d,
        size: l,
        activeIndex: o,
      } = s;
    let f = 1;
    if (n.centeredSlides) {
      let c = r[o].swiperSlideSize,
        u;
      for (let p = o + 1; p < r.length; p += 1)
        r[p] &&
          !u &&
          ((c += r[p].swiperSlideSize), (f += 1), c > l && (u = !0));
      for (let p = o - 1; p >= 0; p -= 1)
        r[p] &&
          !u &&
          ((c += r[p].swiperSlideSize), (f += 1), c > l && (u = !0));
    } else if (t === "current")
      for (let c = o + 1; c < r.length; c += 1)
        (i ? a[c] + d[c] - a[o] < l : a[c] - a[o] < l) && (f += 1);
    else for (let c = o - 1; c >= 0; c -= 1) a[o] - a[c] < l && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: i, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function n() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        d = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    t.params.freeMode && t.params.freeMode.enabled
      ? (n(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (r = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (r = t.slideTo(t.activeIndex, 0, !1, !0)),
        r || n()),
      s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, i = !0) {
    const s = this,
      n = s.params.direction;
    return (
      t || (t = n === "horizontal" ? "vertical" : "horizontal"),
      t === n ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.$el
          .removeClass(`${s.params.containerModifierClass}${n}`)
          .addClass(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.each((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        i && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const i = this;
    (i.rtl && t === "rtl") ||
      (!i.rtl && t === "ltr") ||
      ((i.rtl = t === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.$el.addClass(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.$el.removeClass(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(t) {
    const i = this;
    if (i.mounted) return !0;
    const s = w(t || i.params.el);
    if (((t = s[0]), !t)) return !1;
    t.swiper = i;
    const n = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const d = w(t.shadowRoot.querySelector(n()));
        return (d.children = (l) => s.children(l)), d;
      }
      return s.children ? s.children(n()) : w(s).children(n());
    })();
    if (a.length === 0 && i.params.createElements) {
      const l = B().createElement("div");
      (a = w(l)),
        (l.className = i.params.wrapperClass),
        s.append(l),
        s.children(`.${i.params.slideClass}`).each((o) => {
          a.append(o);
        });
    }
    return (
      Object.assign(i, {
        $el: s,
        el: t,
        $wrapperEl: a,
        wrapperEl: a[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl"),
        wrongRTL: a.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const i = this;
    return (
      i.initialized ||
        i.mount(t) === !1 ||
        (i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.params.loop && i.loopCreate(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.preloadImages && i.preloadImages(),
        i.params.loop
          ? i.slideTo(
              i.params.initialSlide + i.loopedSlides,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            )
          : i.slideTo(
              i.params.initialSlide,
              0,
              i.params.runCallbacksOnInit,
              !1,
              !0
            ),
        i.attachEvents(),
        (i.initialized = !0),
        i.emit("init"),
        i.emit("afterInit")),
      i
    );
  }
  destroy(t = !0, i = !0) {
    const s = this,
      { params: n, $el: r, $wrapperEl: a, slides: d } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          r.removeAttr("style"),
          a.removeAttr("style"),
          d &&
            d.length &&
            d
              .removeClass(
                [
                  n.slideVisibleClass,
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((l) => {
          s.off(l);
        }),
        t !== !1 && ((s.$el[0].swiper = null), ti(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    G(we, t);
  }
  static get extendedDefaults() {
    return we;
  }
  static get defaults() {
    return ke;
  }
  static installModule(t) {
    N.prototype.__modules__ || (N.prototype.__modules__ = []);
    const i = N.prototype.__modules__;
    typeof t == "function" && i.indexOf(t) < 0 && i.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((i) => N.installModule(i)), N)
      : (N.installModule(t), N);
  }
}
Object.keys(ve).forEach((e) => {
  Object.keys(ve[e]).forEach((t) => {
    N.prototype[t] = ve[e][t];
  });
});
N.use([fi, ci]);
function se(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Y(e, t) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : se(t[s]) && se(e[s]) && Object.keys(t[s]).length > 0
        ? t[s].__swiper__
          ? (e[s] = t[s])
          : Y(e[s], t[s])
        : (e[s] = t[s]);
    });
}
function be(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function Ee(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function _e(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function ce(e = "") {
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    i = [];
  return (
    t.forEach((s) => {
      i.indexOf(s) < 0 && i.push(s);
    }),
    i.join(" ")
  );
}
const rt = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function vs(e = {}, t = !0) {
  const i = { on: {} },
    s = {},
    n = {};
  Y(i, N.defaults),
    Y(i, N.extendedDefaults),
    (i._emitClasses = !0),
    (i.init = !1);
  const r = {},
    a = rt.map((l) => l.replace(/_/, "")),
    d = Object.assign({}, e);
  return (
    Object.keys(d).forEach((l) => {
      typeof e[l] > "u" ||
        (a.indexOf(l) >= 0
          ? se(e[l])
            ? ((i[l] = {}), (n[l] = {}), Y(i[l], e[l]), Y(n[l], e[l]))
            : ((i[l] = e[l]), (n[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (s[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (r[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      i[l] === !0 && (i[l] = {}), i[l] === !1 && delete i[l];
    }),
    { params: i, passedParams: n, rest: r, events: s }
  );
}
function ws(
  { el: e, nextEl: t, prevEl: i, paginationEl: s, scrollbarEl: n, swiper: r },
  a
) {
  be(a) &&
    t &&
    i &&
    ((r.params.navigation.nextEl = t),
    (r.originalParams.navigation.nextEl = t),
    (r.params.navigation.prevEl = i),
    (r.originalParams.navigation.prevEl = i)),
    Ee(a) &&
      s &&
      ((r.params.pagination.el = s), (r.originalParams.pagination.el = s)),
    _e(a) &&
      n &&
      ((r.params.scrollbar.el = n), (r.originalParams.scrollbar.el = n)),
    r.init(e);
}
function Ss(e, t, i, s, n) {
  const r = [];
  if (!t) return r;
  const a = (l) => {
    r.indexOf(l) < 0 && r.push(l);
  };
  if (i && s) {
    const l = s.map(n),
      o = i.map(n);
    l.join("") !== o.join("") && a("children"),
      s.length !== i.length && a("children");
  }
  return (
    rt
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (se(e[l]) && se(t[l])) {
            const o = Object.keys(e[l]),
              f = Object.keys(t[l]);
            o.length !== f.length
              ? a(l)
              : (o.forEach((c) => {
                  e[l][c] !== t[l][c] && a(l);
                }),
                f.forEach((c) => {
                  e[l][c] !== t[l][c] && a(l);
                }));
          } else e[l] !== t[l] && a(l);
      }),
    r
  );
}
function Ts({
  swiper: e,
  slides: t,
  passedParams: i,
  changedParams: s,
  nextEl: n,
  prevEl: r,
  scrollbarEl: a,
  paginationEl: d,
}) {
  const l = s.filter((C) => C !== "children" && C !== "direction"),
    {
      params: o,
      pagination: f,
      navigation: c,
      scrollbar: u,
      virtual: p,
      thumbs: m,
    } = e;
  let b, h, _, S, v;
  s.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    o.thumbs &&
    !o.thumbs.swiper &&
    (b = !0),
    s.includes("controller") &&
      i.controller &&
      i.controller.control &&
      o.controller &&
      !o.controller.control &&
      (h = !0),
    s.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || d) &&
      (o.pagination || o.pagination === !1) &&
      f &&
      !f.el &&
      (_ = !0),
    s.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (o.scrollbar || o.scrollbar === !1) &&
      u &&
      !u.el &&
      (S = !0),
    s.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || r) &&
      (i.navigation.nextEl || n) &&
      (o.navigation || o.navigation === !1) &&
      c &&
      !c.prevEl &&
      !c.nextEl &&
      (v = !0);
  const T = (C) => {
    e[C] &&
      (e[C].destroy(),
      C === "navigation"
        ? ((o[C].prevEl = void 0),
          (o[C].nextEl = void 0),
          (e[C].prevEl = void 0),
          (e[C].nextEl = void 0))
        : ((o[C].el = void 0), (e[C].el = void 0)));
  };
  l.forEach((C) => {
    if (se(o[C]) && se(i[C])) Y(o[C], i[C]);
    else {
      const L = i[C];
      (L === !0 || L === !1) &&
      (C === "navigation" || C === "pagination" || C === "scrollbar")
        ? L === !1 && T(C)
        : (o[C] = i[C]);
    }
  }),
    l.includes("controller") &&
      !h &&
      e.controller &&
      e.controller.control &&
      o.controller &&
      o.controller.control &&
      (e.controller.control = o.controller.control),
    s.includes("children") && t && p && o.virtual.enabled
      ? ((p.slides = t), p.update(!0))
      : s.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    b && m.init() && m.update(!0),
    h && (e.controller.control = o.controller.control),
    _ && (d && (o.pagination.el = d), f.init(), f.render(), f.update()),
    S &&
      (a && (o.scrollbar.el = a), u.init(), u.updateSize(), u.setTranslate()),
    v &&
      (n && (o.navigation.nextEl = n),
      r && (o.navigation.prevEl = r),
      c.init(),
      c.update()),
    s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    s.includes("direction") && e.changeDirection(i.direction, !1),
    e.update();
}
const bs = (e) => ({ virtualData: e & 2048 }),
  Ne = (e) => ({ virtualData: e[11] }),
  Es = (e) => ({ virtualData: e & 2048 }),
  Ge = (e) => ({ virtualData: e[11] }),
  _s = (e) => ({ virtualData: e & 2048 }),
  Be = (e) => ({ virtualData: e[11] }),
  Cs = (e) => ({ virtualData: e & 2048 }),
  Ve = (e) => ({ virtualData: e[11] }),
  ys = (e) => ({ virtualData: e & 2048 }),
  $e = (e) => ({ virtualData: e[11] });
function He(e) {
  let t, i, s;
  return {
    c() {
      (t = U("div")), (i = R()), (s = U("div")), this.h();
    },
    l(n) {
      (t = K(n, "DIV", { class: !0 })),
        J(t).forEach(A),
        (i = q(n)),
        (s = K(n, "DIV", { class: !0 })),
        J(s).forEach(A),
        this.h();
    },
    h() {
      ie(t, "class", "swiper-button-prev"),
        ie(s, "class", "swiper-button-next");
    },
    m(n, r) {
      j(n, t, r), e[15](t), j(n, i, r), j(n, s, r), e[16](s);
    },
    p: ye,
    d(n) {
      n && A(t), e[15](null), n && A(i), n && A(s), e[16](null);
    },
  };
}
function Fe(e) {
  let t;
  return {
    c() {
      (t = U("div")), this.h();
    },
    l(i) {
      (t = K(i, "DIV", { class: !0 })), J(t).forEach(A), this.h();
    },
    h() {
      ie(t, "class", "swiper-scrollbar");
    },
    m(i, s) {
      j(i, t, s), e[17](t);
    },
    p: ye,
    d(i) {
      i && A(t), e[17](null);
    },
  };
}
function je(e) {
  let t;
  return {
    c() {
      (t = U("div")), this.h();
    },
    l(i) {
      (t = K(i, "DIV", { class: !0 })), J(t).forEach(A), this.h();
    },
    h() {
      ie(t, "class", "swiper-pagination");
    },
    m(i, s) {
      j(i, t, s), e[18](t);
    },
    p: ye,
    d(i) {
      i && A(t), e[18](null);
    },
  };
}
function Se(e) {
  let t,
    i,
    s,
    n,
    r,
    a,
    d = be(e[4]),
    l,
    o = _e(e[4]),
    f,
    c = Ee(e[4]),
    u,
    p,
    m;
  const b = e[14]["container-start"],
    h = Q(b, e, e[13], $e),
    _ = e[14]["wrapper-start"],
    S = Q(_, e, e[13], Ve),
    v = e[14].default,
    T = Q(v, e, e[13], Be),
    C = e[14]["wrapper-end"],
    L = Q(C, e, e[13], Ge);
  let I = d && He(e),
    P = o && Fe(e),
    z = c && je(e);
  const y = e[14]["container-end"],
    E = Q(y, e, e[13], Ne);
  let O = [{ class: (p = ce(`${e[3]}${e[0] ? ` ${e[0]}` : ""}`)) }, e[5]],
    k = {};
  for (let g = 0; g < O.length; g += 1) k = re(k, O[g]);
  return {
    c() {
      (t = U(e[1])),
        h && h.c(),
        (i = R()),
        (s = U(e[2])),
        S && S.c(),
        (n = R()),
        T && T.c(),
        (r = R()),
        L && L.c(),
        (a = R()),
        I && I.c(),
        (l = R()),
        P && P.c(),
        (f = R()),
        z && z.c(),
        (u = R()),
        E && E.c(),
        this.h();
    },
    l(g) {
      t = K(g, (e[1] || "null").toUpperCase(), { class: !0 });
      var M = J(t);
      h && h.l(M),
        (i = q(M)),
        (s = K(M, (e[2] || "null").toUpperCase(), { class: !0 }));
      var $ = J(s);
      S && S.l($),
        (n = q($)),
        T && T.l($),
        (r = q($)),
        L && L.l($),
        $.forEach(A),
        (a = q(M)),
        I && I.l(M),
        (l = q(M)),
        P && P.l(M),
        (f = q(M)),
        z && z.l(M),
        (u = q(M)),
        E && E.l(M),
        M.forEach(A),
        this.h();
    },
    h() {
      pe(e[2])(s, { class: "swiper-wrapper" }), pe(e[1])(t, k);
    },
    m(g, M) {
      j(g, t, M),
        h && h.m(t, null),
        W(t, i),
        W(t, s),
        S && S.m(s, null),
        W(s, n),
        T && T.m(s, null),
        W(s, r),
        L && L.m(s, null),
        W(t, a),
        I && I.m(t, null),
        W(t, l),
        P && P.m(t, null),
        W(t, f),
        z && z.m(t, null),
        W(t, u),
        E && E.m(t, null),
        e[19](t),
        (m = !0);
    },
    p(g, M) {
      h &&
        h.p &&
        (!m || M & 10240) &&
        Z(h, b, g, g[13], m ? te(b, g[13], M, ys) : ee(g[13]), $e),
        S &&
          S.p &&
          (!m || M & 10240) &&
          Z(S, _, g, g[13], m ? te(_, g[13], M, Cs) : ee(g[13]), Ve),
        T &&
          T.p &&
          (!m || M & 10240) &&
          Z(T, v, g, g[13], m ? te(v, g[13], M, _s) : ee(g[13]), Be),
        L &&
          L.p &&
          (!m || M & 10240) &&
          Z(L, C, g, g[13], m ? te(C, g[13], M, Es) : ee(g[13]), Ge),
        M & 16 && (d = be(g[4])),
        d
          ? I
            ? I.p(g, M)
            : ((I = He(g)), I.c(), I.m(t, l))
          : I && (I.d(1), (I = null)),
        M & 16 && (o = _e(g[4])),
        o
          ? P
            ? P.p(g, M)
            : ((P = Fe(g)), P.c(), P.m(t, f))
          : P && (P.d(1), (P = null)),
        M & 16 && (c = Ee(g[4])),
        c
          ? z
            ? z.p(g, M)
            : ((z = je(g)), z.c(), z.m(t, u))
          : z && (z.d(1), (z = null)),
        E &&
          E.p &&
          (!m || M & 10240) &&
          Z(E, y, g, g[13], m ? te(y, g[13], M, bs) : ee(g[13]), Ne),
        pe(g[1])(
          t,
          (k = Qe(O, [
            (!m ||
              (M & 9 &&
                p !== (p = ce(`${g[3]}${g[0] ? ` ${g[0]}` : ""}`)))) && {
              class: p,
            },
            M & 32 && g[5],
          ]))
        );
    },
    i(g) {
      m || (H(h, g), H(S, g), H(T, g), H(L, g), H(E, g), (m = !0));
    },
    o(g) {
      F(h, g), F(S, g), F(T, g), F(L, g), F(E, g), (m = !1);
    },
    d(g) {
      g && A(t),
        h && h.d(g),
        S && S.d(g),
        T && T.d(g),
        L && L.d(g),
        I && I.d(),
        P && P.d(),
        z && z.d(),
        E && E.d(g),
        e[19](null);
    },
  };
}
function xs(e) {
  let t = e[1],
    i,
    s,
    n = e[1] && Se(e);
  return {
    c() {
      n && n.c(), (i = Pe());
    },
    l(r) {
      n && n.l(r), (i = Pe());
    },
    m(r, a) {
      n && n.m(r, a), j(r, i, a), (s = !0);
    },
    p(r, [a]) {
      r[1]
        ? t
          ? Ce(t, r[1])
            ? (n.d(1), (n = Se(r)), (t = r[1]), n.c(), n.m(i.parentNode, i))
            : n.p(r, a)
          : ((n = Se(r)), (t = r[1]), n.c(), n.m(i.parentNode, i))
        : t && (n.d(1), (n = null), (t = r[1]));
    },
    i(r) {
      s || (H(n), (s = !0));
    },
    o(r) {
      F(n), (s = !1);
    },
    d(r) {
      r && A(i), n && n.d(r);
    },
  };
}
function Ms(e, t, i) {
  const s = ["class", "tag", "wrapperTag", "swiper"];
  let n = fe(t, s),
    { $$slots: r = {}, $$scope: a } = t;
  const d = ot();
  let { class: l = void 0 } = t,
    { tag: o = "div" } = t,
    { wrapperTag: f = "div" } = t,
    c = "swiper",
    u = !1,
    p = null,
    m = null,
    b,
    h,
    _,
    S,
    v = null,
    T = null,
    C = null,
    L = null,
    I = null,
    P = { slides: [] };
  function z() {
    return p;
  }
  const y = (x) => {
      i(11, (P = x)),
        ft().then(() => {
          p.$wrapperEl.children(".swiper-slide").each((V) => {
            V.onSwiper && V.onSwiper(p);
          }),
            p.updateSlides(),
            p.updateProgress(),
            p.updateSlidesClasses(),
            p.lazy && p.params.lazy.enabled && p.lazy.load();
        });
    },
    E = () => {
      (b = vs(n)),
        i(4, (h = b.params)),
        (_ = b.passedParams),
        i(5, (S = b.rest));
    };
  E(), (m = _);
  const O = () => {
    u = !0;
  };
  if (
    ((h.onAny = (x, ...V) => {
      d(x, V);
    }),
    Object.assign(h.on, {
      _beforeBreakpoint: O,
      _containerClasses(x, V) {
        i(3, (c = V));
      },
    }),
    (p = new N(h)),
    dt("swiper", p),
    p.virtual && p.params.virtual.enabled)
  ) {
    const x = {
      cache: !1,
      renderExternal: (V) => {
        y(V),
          h.virtual && h.virtual.renderExternal && h.virtual.renderExternal(V);
      },
      renderExternalUpdate: !1,
    };
    Y(p.params.virtual, x), Y(p.originalParams.virtual, x);
  }
  Ye(() => {
    v &&
      (ws(
        {
          el: v,
          nextEl: C,
          prevEl: T,
          paginationEl: I,
          scrollbarEl: L,
          swiper: p,
        },
        h
      ),
      d("swiper", [p]),
      !h.virtual &&
        p.slides.each((x) => {
          x.onSwiper && x.onSwiper(p);
        }));
  }),
    Ue(() => {
      if (!p) return;
      E();
      const x = Ss(_, m);
      (x.length || u) &&
        p &&
        !p.destroyed &&
        Ts({
          swiper: p,
          passedParams: _,
          changedParams: x,
          nextEl: C,
          prevEl: T,
          scrollbarEl: L,
          paginationEl: I,
        }),
        (u = !1),
        (m = _);
    }),
    Ke(() => {
      typeof window < "u" && p && !p.destroyed && p.destroy(!0, !1);
    });
  function k(x) {
    ne[x ? "unshift" : "push"](() => {
      (T = x), i(7, T);
    });
  }
  function g(x) {
    ne[x ? "unshift" : "push"](() => {
      (C = x), i(8, C);
    });
  }
  function M(x) {
    ne[x ? "unshift" : "push"](() => {
      (L = x), i(9, L);
    });
  }
  function $(x) {
    ne[x ? "unshift" : "push"](() => {
      (I = x), i(10, I);
    });
  }
  function ue(x) {
    ne[x ? "unshift" : "push"](() => {
      (v = x), i(6, v);
    });
  }
  return (
    (e.$$set = (x) => {
      (t = re(re({}, t), Je(x))),
        i(29, (n = fe(t, s))),
        "class" in x && i(0, (l = x.class)),
        "tag" in x && i(1, (o = x.tag)),
        "wrapperTag" in x && i(2, (f = x.wrapperTag)),
        "$$scope" in x && i(13, (a = x.$$scope));
    }),
    [l, o, f, c, h, S, v, T, C, L, I, P, z, a, r, k, g, M, $, ue]
  );
}
class ks extends qe {
  constructor(t) {
    super(),
      Xe(this, t, Ms, xs, Ce, { class: 0, tag: 1, wrapperTag: 2, swiper: 12 });
  }
  get swiper() {
    return this.$$.ctx[12];
  }
}
const Ps = (e) => ({ data: e & 32 }),
  We = (e) => ({ data: e[5] }),
  Ls = (e) => ({ data: e & 32 }),
  Re = (e) => ({ data: e[5] });
function Os(e) {
  let t;
  const i = e[8].default,
    s = Q(i, e, e[7], We);
  return {
    c() {
      s && s.c();
    },
    l(n) {
      s && s.l(n);
    },
    m(n, r) {
      s && s.m(n, r), (t = !0);
    },
    p(n, r) {
      s &&
        s.p &&
        (!t || r & 160) &&
        Z(s, i, n, n[7], t ? te(i, n[7], r, Ps) : ee(n[7]), We);
    },
    i(n) {
      t || (H(s, n), (t = !0));
    },
    o(n) {
      F(s, n), (t = !1);
    },
    d(n) {
      s && s.d(n);
    },
  };
}
function Is(e) {
  let t, i, s;
  const n = e[8].default,
    r = Q(n, e, e[7], Re);
  return {
    c() {
      (t = U("div")), r && r.c(), this.h();
    },
    l(a) {
      t = K(a, "DIV", { class: !0, "data-swiper-zoom": !0 });
      var d = J(t);
      r && r.l(d), d.forEach(A), this.h();
    },
    h() {
      ie(t, "class", "swiper-zoom-container"),
        ie(
          t,
          "data-swiper-zoom",
          (i = typeof e[0] == "number" ? e[0] : void 0)
        );
    },
    m(a, d) {
      j(a, t, d), r && r.m(t, null), (s = !0);
    },
    p(a, d) {
      r &&
        r.p &&
        (!s || d & 160) &&
        Z(r, n, a, a[7], s ? te(n, a[7], d, Ls) : ee(a[7]), Re),
        (!s ||
          (d & 1 && i !== (i = typeof a[0] == "number" ? a[0] : void 0))) &&
          ie(t, "data-swiper-zoom", i);
    },
    i(a) {
      s || (H(r, a), (s = !0));
    },
    o(a) {
      F(r, a), (s = !1);
    },
    d(a) {
      a && A(t), r && r.d(a);
    },
  };
}
function zs(e) {
  let t, i, s, n, r;
  const a = [Is, Os],
    d = [];
  function l(c, u) {
    return c[0] ? 0 : 1;
  }
  (i = l(e)), (s = d[i] = a[i](e));
  let o = [
      { class: (n = ce(`${e[3]}${e[2] ? ` ${e[2]}` : ""}`)) },
      { "data-swiper-slide-index": e[1] },
      e[6],
    ],
    f = {};
  for (let c = 0; c < o.length; c += 1) f = re(f, o[c]);
  return {
    c() {
      (t = U("div")), s.c(), this.h();
    },
    l(c) {
      t = K(c, "DIV", { class: !0, "data-swiper-slide-index": !0 });
      var u = J(t);
      s.l(u), u.forEach(A), this.h();
    },
    h() {
      Le(t, f);
    },
    m(c, u) {
      j(c, t, u), d[i].m(t, null), e[9](t), (r = !0);
    },
    p(c, [u]) {
      let p = i;
      (i = l(c)),
        i === p
          ? d[i].p(c, u)
          : (ct(),
            F(d[p], 1, 1, () => {
              d[p] = null;
            }),
            ut(),
            (s = d[i]),
            s ? s.p(c, u) : ((s = d[i] = a[i](c)), s.c()),
            H(s, 1),
            s.m(t, null)),
        Le(
          t,
          (f = Qe(o, [
            (!r ||
              (u & 12 &&
                n !== (n = ce(`${c[3]}${c[2] ? ` ${c[2]}` : ""}`)))) && {
              class: n,
            },
            (!r || u & 2) && { "data-swiper-slide-index": c[1] },
            u & 64 && c[6],
          ]))
        );
    },
    i(c) {
      r || (H(s), (r = !0));
    },
    o(c) {
      F(s), (r = !1);
    },
    d(c) {
      c && A(t), d[i].d(), e[9](null);
    },
  };
}
function Ds(e, t, i) {
  let s;
  const n = ["zoom", "virtualIndex", "class"];
  let r = fe(t, n),
    { $$slots: a = {}, $$scope: d } = t,
    { zoom: l = void 0 } = t,
    { virtualIndex: o = void 0 } = t,
    { class: f = void 0 } = t,
    c = null,
    u = "swiper-slide",
    p = pt("swiper"),
    m = !1;
  const b = (v, T, C) => {
      T === c && i(3, (u = C));
    },
    h = () => {
      !p || m || (p.on("_slideClass", b), (m = !0));
    },
    _ = () => {
      p && (p.off("_slideClass", b), (m = !1));
    };
  Ye(() => {
    typeof o > "u" ||
      (i(
        4,
        (c.onSwiper = (v) => {
          (p = v), h();
        }),
        c
      ),
      h());
  }),
    Ue(() => {
      if (!(!c || !p)) {
        if (p.destroyed) {
          u !== "swiper-slide" && i(3, (u = "swiper-slide"));
          return;
        }
        h();
      }
    }),
    ht(() => {
      h();
    }),
    Ke(() => {
      p && _();
    });
  function S(v) {
    ne[v ? "unshift" : "push"](() => {
      (c = v), i(4, c);
    });
  }
  return (
    (e.$$set = (v) => {
      (t = re(re({}, t), Je(v))),
        i(6, (r = fe(t, n))),
        "zoom" in v && i(0, (l = v.zoom)),
        "virtualIndex" in v && i(1, (o = v.virtualIndex)),
        "class" in v && i(2, (f = v.class)),
        "$$scope" in v && i(7, (d = v.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 8 &&
        i(
          5,
          (s = {
            isActive:
              u.indexOf("swiper-slide-active") >= 0 ||
              u.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: u.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              u.indexOf("swiper-slide-prev") >= 0 ||
              u.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              u.indexOf("swiper-slide-next") >= 0 ||
              u.indexOf("swiper-slide-duplicate-next") >= 0,
          })
        );
    }),
    [l, o, f, u, c, s, r, d, a, S]
  );
}
class Ns extends qe {
  constructor(t) {
    super(), Xe(this, t, Ds, zs, Ce, { zoom: 0, virtualIndex: 1, class: 2 });
  }
}
export { w as $, ks as S, Ns as a, B as g, Te as n };

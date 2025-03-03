import { g as H, $ as M } from "./swiper-slide.10e3a326.js";
function S(a, k, d, m) {
  const o = H();
  return (
    a.params.createElements &&
      Object.keys(m).forEach((c) => {
        if (!d[c] && d.auto === !0) {
          let r = a.$el.children(`.${m[c]}`)[0];
          r ||
            ((r = o.createElement("div")),
            (r.className = m[c]),
            a.$el.append(r)),
            (d[c] = r),
            (k[c] = r);
        }
      }),
    d
  );
}
function y(a = "") {
  return `.${a
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function P({ swiper: a, extendParams: k, on: d, emit: m }) {
  const o = "swiper-pagination";
  k({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (l) => l,
      formatFractionTotal: (l) => l,
      bulletClass: `${o}-bullet`,
      bulletActiveClass: `${o}-bullet-active`,
      modifierClass: `${o}-`,
      currentClass: `${o}-current`,
      totalClass: `${o}-total`,
      hiddenClass: `${o}-hidden`,
      progressbarFillClass: `${o}-progressbar-fill`,
      progressbarOppositeClass: `${o}-progressbar-opposite`,
      clickableClass: `${o}-clickable`,
      lockClass: `${o}-lock`,
      horizontalClass: `${o}-horizontal`,
      verticalClass: `${o}-vertical`,
      paginationDisabledClass: `${o}-disabled`,
    },
  }),
    (a.pagination = { el: null, $el: null, bullets: [] });
  let c,
    r = 0;
  function I() {
    return (
      !a.params.pagination.el ||
      !a.pagination.el ||
      !a.pagination.$el ||
      a.pagination.$el.length === 0
    );
  }
  function v(l, e) {
    const { bulletActiveClass: i } = a.params.pagination;
    l[e]().addClass(`${i}-${e}`)[e]().addClass(`${i}-${e}-${e}`);
  }
  function C() {
    const l = a.rtl,
      e = a.params.pagination;
    if (I()) return;
    const i =
        a.virtual && a.params.virtual.enabled
          ? a.virtual.slides.length
          : a.slides.length,
      t = a.pagination.$el;
    let n;
    const u = a.params.loop
      ? Math.ceil((i - a.loopedSlides * 2) / a.params.slidesPerGroup)
      : a.snapGrid.length;
    if (
      (a.params.loop
        ? ((n = Math.ceil(
            (a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup
          )),
          n > i - 1 - a.loopedSlides * 2 && (n -= i - a.loopedSlides * 2),
          n > u - 1 && (n -= u),
          n < 0 && a.params.paginationType !== "bullets" && (n = u + n))
        : typeof a.snapIndex < "u"
        ? (n = a.snapIndex)
        : (n = a.activeIndex || 0),
      e.type === "bullets" &&
        a.pagination.bullets &&
        a.pagination.bullets.length > 0)
    ) {
      const s = a.pagination.bullets;
      let f, p, B;
      if (
        (e.dynamicBullets &&
          ((c = s.eq(0)[a.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          t.css(
            a.isHorizontal() ? "width" : "height",
            `${c * (e.dynamicMainBullets + 4)}px`
          ),
          e.dynamicMainBullets > 1 &&
            a.previousIndex !== void 0 &&
            ((r += n - (a.previousIndex - a.loopedSlides || 0)),
            r > e.dynamicMainBullets - 1
              ? (r = e.dynamicMainBullets - 1)
              : r < 0 && (r = 0)),
          (f = Math.max(n - r, 0)),
          (p = f + (Math.min(s.length, e.dynamicMainBullets) - 1)),
          (B = (p + f) / 2)),
        s.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map(($) => `${e.bulletActiveClass}${$}`)
            .join(" ")
        ),
        t.length > 1)
      )
        s.each(($) => {
          const b = M($),
            g = b.index();
          g === n && b.addClass(e.bulletActiveClass),
            e.dynamicBullets &&
              (g >= f && g <= p && b.addClass(`${e.bulletActiveClass}-main`),
              g === f && v(b, "prev"),
              g === p && v(b, "next"));
        });
      else {
        const $ = s.eq(n),
          b = $.index();
        if (($.addClass(e.bulletActiveClass), e.dynamicBullets)) {
          const g = s.eq(f),
            D = s.eq(p);
          for (let h = f; h <= p; h += 1)
            s.eq(h).addClass(`${e.bulletActiveClass}-main`);
          if (a.params.loop)
            if (b >= s.length) {
              for (let h = e.dynamicMainBullets; h >= 0; h -= 1)
                s.eq(s.length - h).addClass(`${e.bulletActiveClass}-main`);
              s.eq(s.length - e.dynamicMainBullets - 1).addClass(
                `${e.bulletActiveClass}-prev`
              );
            } else v(g, "prev"), v(D, "next");
          else v(g, "prev"), v(D, "next");
        }
      }
      if (e.dynamicBullets) {
        const $ = Math.min(s.length, e.dynamicMainBullets + 4),
          b = (c * $ - c) / 2 - B * c,
          g = l ? "right" : "left";
        s.css(a.isHorizontal() ? g : "top", `${b}px`);
      }
    }
    if (
      (e.type === "fraction" &&
        (t.find(y(e.currentClass)).text(e.formatFractionCurrent(n + 1)),
        t.find(y(e.totalClass)).text(e.formatFractionTotal(u))),
      e.type === "progressbar")
    ) {
      let s;
      e.progressbarOpposite
        ? (s = a.isHorizontal() ? "vertical" : "horizontal")
        : (s = a.isHorizontal() ? "horizontal" : "vertical");
      const f = (n + 1) / u;
      let p = 1,
        B = 1;
      s === "horizontal" ? (p = f) : (B = f),
        t
          .find(y(e.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${p}) scaleY(${B})`)
          .transition(a.params.speed);
    }
    e.type === "custom" && e.renderCustom
      ? (t.html(e.renderCustom(a, n + 1, u)), m("paginationRender", t[0]))
      : m("paginationUpdate", t[0]),
      a.params.watchOverflow &&
        a.enabled &&
        t[a.isLocked ? "addClass" : "removeClass"](e.lockClass);
  }
  function x() {
    const l = a.params.pagination;
    if (I()) return;
    const e =
        a.virtual && a.params.virtual.enabled
          ? a.virtual.slides.length
          : a.slides.length,
      i = a.pagination.$el;
    let t = "";
    if (l.type === "bullets") {
      let n = a.params.loop
        ? Math.ceil((e - a.loopedSlides * 2) / a.params.slidesPerGroup)
        : a.snapGrid.length;
      a.params.freeMode &&
        a.params.freeMode.enabled &&
        !a.params.loop &&
        n > e &&
        (n = e);
      for (let u = 0; u < n; u += 1)
        l.renderBullet
          ? (t += l.renderBullet.call(a, u, l.bulletClass))
          : (t += `<${l.bulletElement} class="${l.bulletClass}"></${l.bulletElement}>`);
      i.html(t), (a.pagination.bullets = i.find(y(l.bulletClass)));
    }
    l.type === "fraction" &&
      (l.renderFraction
        ? (t = l.renderFraction.call(a, l.currentClass, l.totalClass))
        : (t = `<span class="${l.currentClass}"></span> / <span class="${l.totalClass}"></span>`),
      i.html(t)),
      l.type === "progressbar" &&
        (l.renderProgressbar
          ? (t = l.renderProgressbar.call(a, l.progressbarFillClass))
          : (t = `<span class="${l.progressbarFillClass}"></span>`),
        i.html(t)),
      l.type !== "custom" && m("paginationRender", a.pagination.$el[0]);
  }
  function z() {
    a.params.pagination = S(
      a,
      a.originalParams.pagination,
      a.params.pagination,
      { el: "swiper-pagination" }
    );
    const l = a.params.pagination;
    if (!l.el) return;
    let e = M(l.el);
    e.length !== 0 &&
      (a.params.uniqueNavElements &&
        typeof l.el == "string" &&
        e.length > 1 &&
        ((e = a.$el.find(l.el)),
        e.length > 1 &&
          (e = e.filter((i) => M(i).parents(".swiper")[0] === a.el))),
      l.type === "bullets" && l.clickable && e.addClass(l.clickableClass),
      e.addClass(l.modifierClass + l.type),
      e.addClass(a.isHorizontal() ? l.horizontalClass : l.verticalClass),
      l.type === "bullets" &&
        l.dynamicBullets &&
        (e.addClass(`${l.modifierClass}${l.type}-dynamic`),
        (r = 0),
        l.dynamicMainBullets < 1 && (l.dynamicMainBullets = 1)),
      l.type === "progressbar" &&
        l.progressbarOpposite &&
        e.addClass(l.progressbarOppositeClass),
      l.clickable &&
        e.on("click", y(l.bulletClass), function (t) {
          t.preventDefault();
          let n = M(this).index() * a.params.slidesPerGroup;
          a.params.loop && (n += a.loopedSlides), a.slideTo(n);
        }),
      Object.assign(a.pagination, { $el: e, el: e[0] }),
      a.enabled || e.addClass(l.lockClass));
  }
  function E() {
    const l = a.params.pagination;
    if (I()) return;
    const e = a.pagination.$el;
    e.removeClass(l.hiddenClass),
      e.removeClass(l.modifierClass + l.type),
      e.removeClass(a.isHorizontal() ? l.horizontalClass : l.verticalClass),
      a.pagination.bullets &&
        a.pagination.bullets.removeClass &&
        a.pagination.bullets.removeClass(l.bulletActiveClass),
      l.clickable && e.off("click", y(l.bulletClass));
  }
  d("init", () => {
    a.params.pagination.enabled === !1 ? O() : (z(), x(), C());
  }),
    d("activeIndexChange", () => {
      (a.params.loop || typeof a.snapIndex > "u") && C();
    }),
    d("snapIndexChange", () => {
      a.params.loop || C();
    }),
    d("slidesLengthChange", () => {
      a.params.loop && (x(), C());
    }),
    d("snapGridLengthChange", () => {
      a.params.loop || (x(), C());
    }),
    d("destroy", () => {
      E();
    }),
    d("enable disable", () => {
      const { $el: l } = a.pagination;
      l &&
        l[a.enabled ? "removeClass" : "addClass"](
          a.params.pagination.lockClass
        );
    }),
    d("lock unlock", () => {
      C();
    }),
    d("click", (l, e) => {
      const i = e.target,
        { $el: t } = a.pagination;
      if (
        a.params.pagination.el &&
        a.params.pagination.hideOnClick &&
        t &&
        t.length > 0 &&
        !M(i).hasClass(a.params.pagination.bulletClass)
      ) {
        if (
          a.navigation &&
          ((a.navigation.nextEl && i === a.navigation.nextEl) ||
            (a.navigation.prevEl && i === a.navigation.prevEl))
        )
          return;
        const n = t.hasClass(a.params.pagination.hiddenClass);
        m(n === !0 ? "paginationShow" : "paginationHide"),
          t.toggleClass(a.params.pagination.hiddenClass);
      }
    });
  const F = () => {
      a.$el.removeClass(a.params.pagination.paginationDisabledClass),
        a.pagination.$el &&
          a.pagination.$el.removeClass(
            a.params.pagination.paginationDisabledClass
          ),
        z(),
        x(),
        C();
    },
    O = () => {
      a.$el.addClass(a.params.pagination.paginationDisabledClass),
        a.pagination.$el &&
          a.pagination.$el.addClass(
            a.params.pagination.paginationDisabledClass
          ),
        E();
    };
  Object.assign(a.pagination, {
    enable: F,
    disable: O,
    render: x,
    update: C,
    init: z,
    destroy: E,
  });
}
export { P };

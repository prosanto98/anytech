import { g as d, n as b } from "./swiper-slide.10e3a326.js";
function O({ swiper: a, extendParams: v, on: i, emit: e }) {
  let n;
  (a.autoplay = { running: !1, paused: !1 }),
    v({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  function u() {
    if (!a.size) {
      (a.autoplay.running = !1), (a.autoplay.paused = !1);
      return;
    }
    const t = a.slides.eq(a.activeIndex);
    let s = a.params.autoplay.delay;
    t.attr("data-swiper-autoplay") &&
      (s = t.attr("data-swiper-autoplay") || a.params.autoplay.delay),
      clearTimeout(n),
      (n = b(() => {
        let o;
        a.params.autoplay.reverseDirection
          ? a.params.loop
            ? (a.loopFix(),
              (o = a.slidePrev(a.params.speed, !0, !0)),
              e("autoplay"))
            : a.isBeginning
            ? a.params.autoplay.stopOnLastSlide
              ? l()
              : ((o = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0)),
                e("autoplay"))
            : ((o = a.slidePrev(a.params.speed, !0, !0)), e("autoplay"))
          : a.params.loop
          ? (a.loopFix(),
            (o = a.slideNext(a.params.speed, !0, !0)),
            e("autoplay"))
          : a.isEnd
          ? a.params.autoplay.stopOnLastSlide
            ? l()
            : ((o = a.slideTo(0, a.params.speed, !0, !0)), e("autoplay"))
          : ((o = a.slideNext(a.params.speed, !0, !0)), e("autoplay")),
          ((a.params.cssMode && a.autoplay.running) || o === !1) && u();
      }, s));
  }
  function y() {
    return typeof n < "u" || a.autoplay.running
      ? !1
      : ((a.autoplay.running = !0), e("autoplayStart"), u(), !0);
  }
  function l() {
    return !a.autoplay.running || typeof n > "u"
      ? !1
      : (n && (clearTimeout(n), (n = void 0)),
        (a.autoplay.running = !1),
        e("autoplayStop"),
        !0);
  }
  function r(t) {
    a.autoplay.running &&
      (a.autoplay.paused ||
        (n && clearTimeout(n),
        (a.autoplay.paused = !0),
        t === 0 || !a.params.autoplay.waitForTransition
          ? ((a.autoplay.paused = !1), u())
          : ["transitionend", "webkitTransitionEnd"].forEach((s) => {
              a.$wrapperEl[0].addEventListener(s, f);
            })));
  }
  function p() {
    const t = d();
    t.visibilityState === "hidden" && a.autoplay.running && r(),
      t.visibilityState === "visible" &&
        a.autoplay.paused &&
        (u(), (a.autoplay.paused = !1));
  }
  function f(t) {
    !a ||
      a.destroyed ||
      !a.$wrapperEl ||
      (t.target === a.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((s) => {
          a.$wrapperEl[0].removeEventListener(s, f);
        }),
        (a.autoplay.paused = !1),
        a.autoplay.running ? u() : l()));
  }
  function c() {
    a.params.autoplay.disableOnInteraction ? l() : (e("autoplayPause"), r()),
      ["transitionend", "webkitTransitionEnd"].forEach((t) => {
        a.$wrapperEl[0].removeEventListener(t, f);
      });
  }
  function m() {
    a.params.autoplay.disableOnInteraction ||
      ((a.autoplay.paused = !1), e("autoplayResume"), u());
  }
  function E() {
    a.params.autoplay.pauseOnMouseEnter &&
      (a.$el.on("mouseenter", c), a.$el.on("mouseleave", m));
  }
  function g() {
    a.$el.off("mouseenter", c), a.$el.off("mouseleave", m);
  }
  i("init", () => {
    a.params.autoplay.enabled &&
      (y(), d().addEventListener("visibilitychange", p), E());
  }),
    i("beforeTransitionStart", (t, s, o) => {
      a.autoplay.running &&
        (o || !a.params.autoplay.disableOnInteraction
          ? a.autoplay.pause(s)
          : l());
    }),
    i("sliderFirstMove", () => {
      a.autoplay.running &&
        (a.params.autoplay.disableOnInteraction ? l() : r());
    }),
    i("touchEnd", () => {
      a.params.cssMode &&
        a.autoplay.paused &&
        !a.params.autoplay.disableOnInteraction &&
        u();
    }),
    i("destroy", () => {
      g(),
        a.autoplay.running && l(),
        d().removeEventListener("visibilitychange", p);
    }),
    Object.assign(a.autoplay, { pause: r, run: u, start: y, stop: l });
}
export { O as A };

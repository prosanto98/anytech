const n = () => {},
  u =
    (t) =>
    (r, o, e, { client: c }) => {
      if (!t.hasAttribute("ssr")) return;
      const l = {};
      for (const [s, a] of Object.entries(e)) l[s] = i(s, a);
      try {
        new r({
          target: t,
          props: { ...o, $$slots: l, $$scope: { ctx: [] } },
          hydrate: c !== "only",
          $$inline: !0,
        });
      } catch {}
    };
function i(t, r) {
  let o;
  return [
    () => ({
      m(e) {
        (o = e),
          e.insertAdjacentHTML(
            "beforeend",
            `<astro-slot${
              t === "default" ? "" : ` name="${t}"`
            }>${r}</astro-slot>`
          );
      },
      c: n,
      l: n,
      d() {
        if (!o) return;
        const e = o.querySelector(
          `astro-slot${t === "default" ? ":not([name])" : `[name="${t}"]`}`
        );
        e && e.remove();
      },
    }),
    n,
    n,
  ];
}
export { u as default };

function a(e) {
  const n = (t) => {
    e &&
      !e.contains(t.target) &&
      !t.defaultPrevented &&
      e.dispatchEvent(new CustomEvent("click_outside"));
  };
  return (
    document.addEventListener("click", n, !0),
    {
      destroy() {
        document.removeEventListener("click", n, !0);
      },
    }
  );
}
const c = {
    en: { code: "en-SG", name: "English" },
    th: { code: "th-TH", name: "Thai" },
    id: { code: "id-ID", name: "Bahasa Indonesia" },
    tw: { code: "zh-TW", name: "Traditional Chinese" },
  },
  i = "en";
export { a as c, i as d, c as l };

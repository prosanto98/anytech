import {
  p as Vr,
  i as Jr,
  l as T,
  O as be,
  m as K,
  f as ve,
  _ as Gr,
  b as Mt,
} from "./image-url.umd.aa29a042.js";
const nt = {
    delay: 0,
    duration: 500,
    easingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easingFunctionCoordinates: [0.25, 0.46, 0.45, 0.94],
  },
  Oo = {
    anycaas: ["#1CC800", "#014AB8"],
    anybaas: ["#9747FF", "#014AB8"],
    anypaas: ["#40FEFF", "#014AB8"],
  },
  To = `
    _id,
    title,
    slug,
    excerpt,
    _updatedAt,
    tags[]->{
      name, _id
    },
    "image": image {
      ...,
      asset->{
        ...,
        metadata {
          lqip,
          dimensions
        }
      }
    }
`,
  Io = `
    _id,
    title,
    slug,
    excerpt,
    _updatedAt,
    tags[]->{
      name, _id
    },
    "image": image {
      ...,
      asset->{
        ...,
        metadata {
          lqip,
          dimensions
        }
      }
    }
`;
function Ue(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  const s = e.length - 1;
  return e.slice(0, s).reduce((o, i, a) => o + i + r[a], "") + e[s];
}
const M = {
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3,
    hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler.",
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message:
      "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR.",
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (e) =>
      `\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`,
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message:
      "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR.",
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (e) =>
      `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,
    hint: (e) => `Possible dynamic routes being matched: ${e.join(", ")}.`,
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (e, t) =>
      `Route \`${
        e || ""
      }\` returned a \`${t}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information.",
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message:
      'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided',
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (e, t, r, n) => `Unable to render \`${e}\`.

${
  n > 0
    ? `There ${r ? "are." : "is."} ${n} renderer${
        r ? "s." : ""
      } configured in your \`astro.config.mjs\` file,
but ${r ? "none were." : "it was not."} able to server-side render \`${e}\`.`
    : `No valid renderer was found ${
        t ? `for the \`.${t}\` file extension.` : "for this file extension."
      }`
}`,
    hint: (e) => `Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`,
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (e, t, r) =>
      `\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${r}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer.",
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (e) =>
      `Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (e) =>
      `Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`,
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (e) =>
      `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (e) =>
      `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message:
      "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information.",
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message:
      "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (e, t, r) =>
      `Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${r}\` (\`${t}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths.",
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message:
      "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: 'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.',
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (e) =>
      `Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`,
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message:
      "Cannot use `output: 'server'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information.",
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (e) =>
      `Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,
    hint: "Please make sure the component is properly imported.",
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (e, t) => {
      let r =
        "A `prerender` export has been detected, but its value cannot be statically analyzed.";
      return (
        e !== "const" &&
          (r += `
Expected \`const\` declaration but got \`${e}\`.`),
        t !== "true" &&
          (r += `
Expected \`true\` value but got \`${t}\`.`),
        r
      );
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`.",
  },
  InvalidComponentArgs: {
    title: "Invalid component arguments.",
    code: 3020,
    message: (e) =>
      `Invalid arguments passed to${e ? ` <${e}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`.",
  },
  PageNumberParamNotFound: {
    title: "Page number param not found.",
    code: 3021,
    message: (e) =>
      `[paginate()] page number param \`${e}\` not found in your filepath.`,
    hint: "Rename your file to `[page].astro` or `[...page].astro`.",
  },
  ImageMissingAlt: {
    title: "Missing alt property.",
    code: 3022,
    message: "The alt property is required.",
    hint: "The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information.",
  },
  InvalidImageService: {
    title: "Error while loading image service.",
    code: 3023,
    message:
      "There was an error loading the configured image service. Please see the stack trace for more information.",
  },
  MissingImageDimension: {
    title: "Missing image dimensions",
    code: 3024,
    message: (e, t) =>
      `Missing ${
        e === "both" ? "width and height attributes" : `${e} attribute`
      } for ${t}. When using remote images, both dimensions are always required in order to avoid CLS.`,
    hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets).",
  },
  UnsupportedImageFormat: {
    title: "Unsupported image format",
    code: 3025,
    message: (e, t, r) =>
      `Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(
        ", "
      )} are supported for optimization.`,
    hint: "If you do not need optimization, using an `img` tag directly instead of the `Image` component might be what you're looking for.",
  },
  PrerenderDynamicEndpointPathCollide: {
    title: "Prerendered dynamic endpoint has path collision.",
    code: 3026,
    message: (e) =>
      `Could not render \`${e}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
    hint: (e) =>
      `Rename \`${e}\` to \`${e.replace(/\.(js|ts)/, (t) => ".json" + t)}\``,
  },
  ExpectedImage: {
    title: "Expected src to be an image.",
    code: 3027,
    message: (e) =>
      `Expected \`src\` property to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\`.`,
    hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct.",
  },
  ExpectedImageOptions: {
    title: "Expected image options.",
    code: 3028,
    message: (e) =>
      `Expected getImage() parameter to be an object. Received \`${e}\`.`,
  },
  MarkdownImageNotFound: {
    title: "Image not found.",
    code: 3029,
    message: (e, t) =>
      `Could not find requested image \`${e}\`${t ? ` at \`${t}\`.` : "."}`,
    hint: "This is often caused by a typo in the image path. Please make sure the file exists, and is spelled correctly.",
  },
  ResponseSentError: {
    title: "Unable to set response",
    code: 3030,
    message:
      "The response has already been sent to the browser and cannot be altered.",
  },
  UnknownViteError: { title: "Unknown Vite Error.", code: 4e3 },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (e) => `Could not import \`${e}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists.",
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (e) =>
      `Invalid glob pattern: \`${e}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns.",
  },
  UnknownCSSError: { title: "Unknown CSS Error.", code: 5e3 },
  CSSSyntaxError: { title: "CSS Syntax Error.", code: 5001 },
  UnknownMarkdownError: { title: "Unknown Markdown Error.", code: 6e3 },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001,
  },
  InvalidFrontmatterInjectionError: {
    title: "Invalid frontmatter injection.",
    code: 6003,
    message:
      'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
    hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information.",
  },
  MdxIntegrationMissingError: {
    title: "MDX integration missing.",
    code: 6004,
    message: (e) =>
      `Unable to render ${e}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
    hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/",
  },
  UnknownConfigError: { title: "Unknown configuration error.", code: 7e3 },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (e) =>
      `Unable to resolve \`--config "${e}"\`. Does the file exist?`,
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (e) => `Legacy configuration detected: \`${e}\`.`,
    hint: `Please update your configuration to the new format.
See https://astro.build/config for more information.`,
  },
  UnknownCLIError: { title: "Unknown CLI Error.", code: 8e3 },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: (e) =>
      `\`astro sync\` command failed to generate content collection types: ${e}`,
    hint: "Check your `src/content/config.*` file for typos.",
  },
  UnknownContentCollectionError: {
    title: "Unknown Content Collection Error.",
    code: 9e3,
  },
  InvalidContentEntryFrontmatterError: {
    title: "Content entry frontmatter does not match schema.",
    code: 9001,
    message: (e, t, r) =>
      [
        `**${String(e)} → ${String(
          t
        )}** frontmatter does not match collection schema.`,
        ...r.errors.map((n) => n.message),
      ].join(`
`),
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas.",
  },
  InvalidContentEntrySlugError: {
    title: "Invalid content entry slug.",
    code: 9002,
    message: (e, t) =>
      `${String(e)} → ${String(
        t
      )} has an invalid slug. \`slug\` must be a string.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field.",
  },
  ContentSchemaContainsSlugError: {
    title: "Content Schema should not contain `slug`.",
    code: 9003,
    message: (e) =>
      `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${e} collection schema.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field.",
  },
  UnknownError: { title: "Unknown Error.", code: 99999 },
};
function Xr(e) {
  return e.replace(
    /\r\n|\r(?!\n)|\n/g,
    `
`
  );
}
function Qr(e) {
  const t = Object.entries(M).find((r) => r[1].code === e);
  if (t) return { name: t[0], data: t[1] };
}
function Yr(e, t) {
  if (!t || t.line === void 0 || t.column === void 0) return "";
  const r = Xr(e)
      .split(
        `
`
      )
      .map((i) => i.replace(/\t/g, "  ")),
    n = [];
  for (let i = -2; i <= 2; i++) r[t.line + i] && n.push(t.line + i);
  let s = 0;
  for (const i of n) {
    let a = `> ${i}`;
    a.length > s && (s = a.length);
  }
  let o = "";
  for (const i of n) {
    const a = i === t.line - 1;
    (o += a ? "> " : "  "),
      (o += `${i + 1} | ${r[i]}
`),
      a &&
        (o += `${Array.from({ length: s }).join(" ")}  | ${Array.from({
          length: t.column,
        }).join(" ")}^
`);
  }
  return o;
}
class me extends Error {
  constructor(t, ...r) {
    var n;
    super(...r), (this.type = "AstroError");
    const {
      code: s,
      name: o,
      title: i,
      message: a,
      stack: c,
      location: l,
      hint: d,
      frame: w,
    } = t;
    (this.errorCode = s),
      o && o !== "Error"
        ? (this.name = o)
        : (this.name =
            ((n = Qr(this.errorCode)) == null ? void 0 : n.name) ??
            "UnknownError"),
      (this.title = i),
      a && (this.message = a),
      (this.stack = c || this.stack),
      (this.loc = l),
      (this.hint = d),
      (this.frame = w);
  }
  setErrorCode(t) {
    this.errorCode = t;
  }
  setLocation(t) {
    this.loc = t;
  }
  setName(t) {
    this.name = t;
  }
  setMessage(t) {
    this.message = t;
  }
  setHint(t) {
    this.hint = t;
  }
  setFrame(t, r) {
    this.frame = Yr(t, r);
  }
  static is(t) {
    return t.type === "AstroError";
  }
}
function Kr(e) {
  return !(e.length !== 3 || !e[0] || typeof e[0] != "object");
}
function Pt(e, t) {
  var r;
  const n =
      ((r = t?.split("/").pop()) == null ? void 0 : r.replace(".astro", "")) ??
      "",
    s = (...o) => {
      if (!Kr(o))
        throw new me({
          ...M.InvalidComponentArgs,
          message: M.InvalidComponentArgs.message(n),
        });
      return e(...o);
    };
  return (
    Object.defineProperty(s, "name", { value: n, writable: !1 }),
    (s.isAstroComponentFactory = !0),
    (s.moduleId = t),
    s
  );
}
function Zr(e) {
  const t = Pt(e.factory, e.moduleId);
  return (t.propagation = e.propagation), t;
}
function en(e, t) {
  return typeof e == "function" ? Pt(e, t) : Zr(e);
}
const tn = "2.3.4";
function rn() {
  return (t, r) => {
    let n = [...Object.values(t)];
    if (n.length === 0)
      throw new Error(`Astro.glob(${JSON.stringify(r())}) - no matches found.`);
    return Promise.all(n.map((s) => s()));
  };
}
function nn(e) {
  return {
    site: e ? new URL(e) : void 0,
    generator: `Astro v${tn}`,
    glob: rn(),
  };
}
const { replace: sn } = "",
  on = /[&<>'"]/g,
  an = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  cn = (e) => an[e],
  ln = (e) => sn.call(e, on, cn);
function kt(e) {
  const t = {};
  return r(e), Object.keys(t).join(" ");
  function r(n) {
    n && typeof n.forEach == "function"
      ? n.forEach(r)
      : n === Object(n)
      ? Object.keys(n).forEach((s) => {
          n[s] && r(s);
        })
      : ((n = n === !1 || n == null ? "" : String(n).trim()),
        n &&
          n.split(/\s+/).forEach((s) => {
            t[s] = !0;
          }));
  }
}
function mt(e) {
  return !!e && typeof e == "object" && typeof e.then == "function";
}
const _e = ln;
class De extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const $ = (e) => (e instanceof De ? e : typeof e == "string" ? new De(e) : e);
function un(e) {
  return Object.prototype.toString.call(e) === "[object HTMLString]";
}
var dn =
    '(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));',
  hn =
    '(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));',
  fn =
    '(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));',
  pn =
    '(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));',
  mn =
    '(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));',
  gn =
    'var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';
function yn(e) {
  return e._metadata.hasHydrationScript
    ? !1
    : (e._metadata.hasHydrationScript = !0);
}
const St = { idle: dn, load: hn, only: pn, media: fn, visible: mn };
function wn(e, t) {
  return e._metadata.hasDirectives.has(t)
    ? !1
    : (e._metadata.hasDirectives.add(t), !0);
}
function Et(e) {
  if (!(e in St)) throw new Error(`Unknown directive: ${e}`);
  return St[e];
}
function bn(e, t) {
  switch (e) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${
        Et(t) + gn
      }<\/script>`;
    case "directive":
      return `<script>${Et(t)}<\/script>`;
  }
  return "";
}
const qt =
    /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,
  vn =
    /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,
  Sn = /^(contenteditable|draggable|spellcheck|value)$/i,
  En = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,
  $n = new Set(["set:html", "set:text"]),
  An = (e) =>
    e
      .trim()
      .replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (t, r) =>
        /[^\w]|\s/.test(t) ? "" : r === 0 ? t : t.toUpperCase()
      ),
  le = (e, t = !0) =>
    t ? String(e).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : e,
  st = (e) =>
    e.toLowerCase() === e
      ? e
      : e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`),
  _n = (e) =>
    Object.entries(e)
      .map(([t, r]) =>
        t[0] !== "-" && t[1] !== "-"
          ? `${st(t)}:${r}`
          : st(t) !== t
          ? `${st(t)}:var(${t});${t}:${r}`
          : `${t}:${r}`
      )
      .join(";");
function Cn(e) {
  let t = "";
  for (const [r, n] of Object.entries(e))
    t += `const ${An(r)} = ${JSON.stringify(n)};
`;
  return $(t);
}
function $t(e) {
  return e.length === 1
    ? e[0]
    : `${e.slice(0, -1).join(", ")} or ${e[e.length - 1]}`;
}
function P(e, t, r = !0) {
  if (e == null) return "";
  if (e === !1) return Sn.test(t) || En.test(t) ? $(` ${t}="false"`) : "";
  if ($n.has(t))
    return (
      console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),
      ""
    );
  if (t === "class:list") {
    const n = le(kt(e), r);
    return n === "" ? "" : $(` ${t.slice(0, -5)}="${n}"`);
  }
  return t === "style" && !(e instanceof De) && typeof e == "object"
    ? $(` ${t}="${le(_n(e), r)}"`)
    : t === "className"
    ? $(` class="${le(e, r)}"`)
    : e === !0 && (t.startsWith("data-") || vn.test(t))
    ? $(` ${t}`)
    : $(` ${t}="${le(e, r)}"`);
}
function lt(e, t = !0) {
  let r = "";
  for (const [n, s] of Object.entries(e)) r += P(s, n, t);
  return $(r);
}
function Ce(e, { props: t, children: r = "" }, n = !0) {
  const { lang: s, "data-astro-id": o, "define:vars": i, ...a } = t;
  return (
    i &&
      (e === "style" && (delete a["is:global"], delete a["is:scoped"]),
      e === "script" &&
        (delete a.hoist,
        (r =
          Cn(i) +
          `
` +
          r))),
    (r == null || r == "") && qt.test(e)
      ? `<${e}${lt(a, n)} />`
      : `<${e}${lt(a, n)}>${r}</${e}>`
  );
}
const ot = (e, t, r) => {
  const n = JSON.stringify(e.props),
    s = e.children;
  return (
    t === r.findIndex((o) => JSON.stringify(o.props) === n && o.children == s)
  );
};
function At(e) {
  e._metadata.hasRenderedHead = !0;
  const t = Array.from(e.styles)
    .filter(ot)
    .map((o) => Ce("style", o));
  e.styles.clear();
  const r = Array.from(e.scripts)
    .filter(ot)
    .map((o, i) => Ce("script", o, !1));
  let s =
    Array.from(e.links)
      .filter(ot)
      .map((o) => Ce("link", o, !1)).join(`
`) +
    t.join(`
`) +
    r.join(`
`);
  if (e.extraHead.length > 0) for (const o of e.extraHead) s += o;
  return $(s);
}
function* Rn(e) {
  e._metadata.hasRenderedHead ||
    (yield { type: "maybe-head", result: e, scope: e.scope });
}
const On = Symbol.for("astro.headAndContent");
function Tn(e) {
  return typeof e == "object" && !!e[On];
}
var _t;
const Nt = Symbol.for("astro.renderTemplateResult");
class In {
  constructor(t, r) {
    (this[_t] = !0),
      (this.htmlParts = t),
      (this.error = void 0),
      (this.expressions = r.map((n) =>
        mt(n)
          ? Promise.resolve(n).catch((s) => {
              if (!this.error) throw ((this.error = s), s);
            })
          : n
      ));
  }
  async *[((_t = Nt), Symbol.asyncIterator)]() {
    const { htmlParts: t, expressions: r } = this;
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        o = r[n];
      yield $(s), yield* ie(o);
    }
  }
}
function xn(e) {
  return typeof e == "object" && !!e[Nt];
}
async function* Ut(e) {
  for await (const t of e)
    if (t || t === 0)
      for await (const r of ie(t))
        switch (r.type) {
          case "directive": {
            yield r;
            break;
          }
          default: {
            yield $(r);
            break;
          }
        }
}
function ue(e, ...t) {
  return new In(e, t);
}
function jn(e) {
  return e == null ? !1 : e.isAstroComponentFactory === !0;
}
function Mn(e, t) {
  let r = t.propagation || "none";
  return (
    t.moduleId &&
      e.componentMetadata.has(t.moduleId) &&
      r === "none" &&
      (r = e.componentMetadata.get(t.moduleId).propagation),
    r === "in-tree" || r === "self"
  );
}
const j = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10,
};
function it(e, t = {}, r = new WeakSet()) {
  if (r.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r.add(e);
  const n = e.map((s) => Ht(s, t, r));
  return r.delete(e), n;
}
function Dt(e, t = {}, r = new WeakSet()) {
  if (r.has(e))
    throw new Error(`Cyclic reference detected while serializing props for <${t.displayName} client:${t.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r.add(e);
  const n = Object.fromEntries(
    Object.entries(e).map(([s, o]) => [s, Ht(o, t, r)])
  );
  return r.delete(e), n;
}
function Ht(e, t = {}, r = new WeakSet()) {
  switch (Object.prototype.toString.call(e)) {
    case "[object Date]":
      return [j.Date, e.toISOString()];
    case "[object RegExp]":
      return [j.RegExp, e.source];
    case "[object Map]":
      return [j.Map, JSON.stringify(it(Array.from(e), t, r))];
    case "[object Set]":
      return [j.Set, JSON.stringify(it(Array.from(e), t, r))];
    case "[object BigInt]":
      return [j.BigInt, e.toString()];
    case "[object URL]":
      return [j.URL, e.toString()];
    case "[object Array]":
      return [j.JSON, JSON.stringify(it(e, t, r))];
    case "[object Uint8Array]":
      return [j.Uint8Array, JSON.stringify(Array.from(e))];
    case "[object Uint16Array]":
      return [j.Uint16Array, JSON.stringify(Array.from(e))];
    case "[object Uint32Array]":
      return [j.Uint32Array, JSON.stringify(Array.from(e))];
    default:
      return e !== null && typeof e == "object"
        ? [j.Value, Dt(e, t, r)]
        : [j.Value, e];
  }
}
function Lt(e, t) {
  return JSON.stringify(Dt(e, t));
}
const Wt = ["load", "idle", "media", "visible", "only"],
  Pn = new Set(Wt),
  zt = new Set(Wt.map((e) => `client:${e}`));
function kn(e, t) {
  let r = { isPage: !1, hydration: null, props: {} };
  for (const [n, s] of Object.entries(t))
    if (
      (n.startsWith("server:") && n === "server:root" && (r.isPage = !0),
      n.startsWith("client:"))
    )
      switch (
        (r.hydration ||
          (r.hydration = {
            directive: "",
            value: "",
            componentUrl: "",
            componentExport: { value: "" },
          }),
        n)
      ) {
        case "client:component-path": {
          r.hydration.componentUrl = s;
          break;
        }
        case "client:component-export": {
          r.hydration.componentExport.value = s;
          break;
        }
        case "client:component-hydration":
          break;
        case "client:display-name":
          break;
        default: {
          if (
            ((r.hydration.directive = n.split(":")[1]),
            (r.hydration.value = s),
            !Pn.has(r.hydration.directive))
          )
            throw new Error(
              `Error: invalid hydration directive "${n}". Supported hydration methods: ${Array.from(
                zt
              ).join(", ")}`
            );
          if (
            r.hydration.directive === "media" &&
            typeof r.hydration.value != "string"
          )
            throw new me(M.MissingMediaQueryDirective);
          break;
        }
      }
    else
      n === "class:list"
        ? s && (r.props[n.slice(0, -5)] = kt(s))
        : (r.props[n] = s);
  for (const n of Object.getOwnPropertySymbols(t)) r.props[n] = t[n];
  return r;
}
async function qn(e, t) {
  const { renderer: r, result: n, astroId: s, props: o, attrs: i } = e,
    { hydrate: a, componentUrl: c, componentExport: l } = t;
  if (!l.value)
    throw new Error(
      `Unable to resolve a valid export for "${t.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  const d = { children: "", props: { uid: s } };
  if (i) for (const [g, A] of Object.entries(i)) d.props[g] = _e(A);
  (d.props["component-url"] = await n.resolve(decodeURI(c))),
    r.clientEntrypoint &&
      ((d.props["component-export"] = l.value),
      (d.props["renderer-url"] = await n.resolve(
        decodeURI(r.clientEntrypoint)
      )),
      (d.props.props = _e(Lt(o, t)))),
    (d.props.ssr = ""),
    (d.props.client = a);
  let w = await n.resolve("astro:scripts/before-hydration.js");
  return (
    w.length && (d.props["before-hydration-url"] = w),
    (d.props.opts = _e(
      JSON.stringify({ name: t.displayName, value: t.hydrateArgs || "" })
    )),
    d
  );
}
var Ft;
const Bt = Symbol.for("astro.componentInstance");
class Nn {
  constructor(t, r, n, s) {
    (this[Ft] = !0),
      (this.result = t),
      (this.props = r),
      (this.factory = s),
      (this.slotValues = {});
    for (const o in n) {
      const i = n[o](t);
      this.slotValues[o] = () => i;
    }
  }
  async init(t) {
    return (
      (this.returnValue = this.factory(t, this.props, this.slotValues)),
      this.returnValue
    );
  }
  async *render() {
    this.returnValue === void 0 && (await this.init(this.result));
    let t = this.returnValue;
    mt(t) && (t = await t), Tn(t) ? yield* t.content : yield* ie(t);
  }
}
Ft = Bt;
function Un(e, t) {
  if (e != null)
    for (const r of Object.keys(e))
      zt.has(r) &&
        console.warn(
          `You are attempting to render <${t} ${r} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
}
function Dn(e, t, r, n, s = {}) {
  Un(n, t);
  const o = new Nn(e, n, s, r);
  return Mn(e, r) && !e.propagators.has(r) && e.propagators.set(r, o), o;
}
function Hn(e) {
  return typeof e == "object" && !!e[Bt];
}
async function* ie(e) {
  if (((e = await e), e instanceof Jt))
    e.instructions && (yield* e.instructions), yield e;
  else if (un(e)) yield e;
  else if (Array.isArray(e)) for (const t of e) yield $(await ie(t));
  else
    typeof e == "function"
      ? yield* ie(e())
      : typeof e == "string"
      ? yield $(_e(e))
      : (!e && e !== 0) ||
        (xn(e)
          ? yield* Ut(e)
          : Hn(e)
          ? yield* e.render()
          : ArrayBuffer.isView(e)
          ? yield e
          : typeof e == "object" &&
            (Symbol.asyncIterator in e || Symbol.iterator in e)
          ? yield* e
          : yield e);
}
const Vt = Symbol.for("astro:slot-string");
class Jt extends De {
  constructor(t, r) {
    super(t), (this.instructions = r), (this[Vt] = !0);
  }
}
function Ln(e) {
  return !!e[Vt];
}
async function* Gt(e, t, r) {
  t && (yield* ie(typeof t == "function" ? t(e) : t)),
    r && !t && (yield* Gt(e, r));
}
async function et(e, t, r) {
  let n = "",
    s = null,
    o = Gt(e, t, r);
  for await (const i of o)
    typeof i.type == "string" ? (s === null && (s = []), s.push(i)) : (n += i);
  return $(new Jt(n, s));
}
async function Xt(e, t = {}) {
  let r = null,
    n = {};
  return (
    t &&
      (await Promise.all(
        Object.entries(t).map(([s, o]) =>
          et(e, o).then((i) => {
            i.instructions &&
              (r === null && (r = []), r.push(...i.instructions)),
              (n[s] = i);
          })
        )
      )),
    { slotInstructions: r, children: n }
  );
}
const Qt = Symbol.for("astro:fragment"),
  Ct = Symbol.for("astro:renderer");
new TextEncoder();
new TextDecoder();
function Yt(e, t) {
  if (typeof t.type == "string") {
    const r = t;
    switch (r.type) {
      case "directive": {
        const { hydration: n } = r;
        let s = n && yn(e),
          o = n && wn(e, n.directive),
          i = s ? "both" : o ? "directive" : null;
        if (i) {
          let a = bn(i, n.directive);
          return $(a);
        } else return "";
      }
      case "head":
        return e._metadata.hasRenderedHead ? "" : At(e);
      case "maybe-head":
        return e._metadata.hasRenderedHead || e._metadata.headInTree
          ? ""
          : At(e);
    }
  } else {
    if (Ln(t)) {
      let r = "";
      const n = t;
      if (n.instructions) for (const s of n.instructions) r += Yt(e, s);
      return (r += t.toString()), r;
    }
    return t.toString();
  }
}
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ const ut = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",
  at = ut.length;
function Wn(e) {
  let t = 0;
  if (e.length === 0) return t;
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    (t = (t << 5) - t + n), (t = t & t);
  }
  return t;
}
function zn(e) {
  let t,
    r = "",
    n = Wn(e);
  const s = n < 0 ? "Z" : "";
  for (n = Math.abs(n); n >= at; )
    (t = n % at), (n = Math.floor(n / at)), (r = ut[t] + r);
  return n > 0 && (r = ut[n] + r), s + r;
}
function Fn(e) {
  return typeof HTMLElement < "u" && HTMLElement.isPrototypeOf(e);
}
async function Bn(e, t, r, n) {
  const s = Vn(t);
  let o = "";
  for (const i in r) o += ` ${i}="${le(await r[i])}"`;
  return $(`<${s}${o}>${await et(e, n?.default)}</${s}>`);
}
function Vn(e) {
  const t = customElements.getName(e);
  return (
    t ||
    e.name
      .replace(/^HTML|Element$/g, "")
      .replace(/[A-Z]/g, "-$&")
      .toLowerCase()
      .replace(/^-/, "html-")
  );
}
const Rt = new Map([["solid", "solid-js"]]);
function Jn(e) {
  switch (e?.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue (jsx)",
      ];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit",
      ];
  }
}
function Gn(e) {
  return e === Qt;
}
function Xn(e) {
  return e && typeof e == "object" && e["astro:html"];
}
async function Qn(e, t, r, n, s = {}) {
  var o, i;
  if (!r && !n["client:only"])
    throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: a } = e._metadata,
    c = { displayName: t },
    { hydration: l, isPage: d, props: w } = kn(t, n);
  let g = "",
    A;
  l &&
    ((c.hydrate = l.directive),
    (c.hydrateArgs = l.value),
    (c.componentExport = l.componentExport),
    (c.componentUrl = l.componentUrl));
  const b = Jn(c.componentUrl),
    p = a.filter((m) => m.name !== "astro:jsx"),
    { children: h, slotInstructions: v } = await Xt(e, s);
  let u;
  if (c.hydrate !== "only") {
    let m = !1;
    try {
      m = r && r[Ct];
    } catch {}
    if (m) {
      const S = r[Ct];
      u = a.find(({ name: R }) => R === S);
    }
    if (!u) {
      let S;
      for (const R of a)
        try {
          if (await R.ssr.check.call({ result: e }, r, w, h)) {
            u = R;
            break;
          }
        } catch (N) {
          S ??= N;
        }
      if (!u && S) throw S;
    }
    if (!u && typeof HTMLElement == "function" && Fn(r)) return Bn(e, r, n, s);
  } else {
    if (c.hydrateArgs) {
      const m = c.hydrateArgs,
        S = Rt.has(m) ? Rt.get(m) : m;
      u = a.find(({ name: R }) => R === `@astrojs/${S}` || R === S);
    }
    if ((!u && p.length === 1 && (u = p[0]), !u)) {
      const m = (o = c.componentUrl) == null ? void 0 : o.split(".").pop();
      u = a.filter(({ name: S }) => S === `@astrojs/${m}` || S === m)[0];
    }
  }
  if (u)
    c.hydrate === "only"
      ? (g = await et(e, s?.fallback))
      : ({ html: g, attrs: A } = await u.ssr.renderToStaticMarkup.call(
          { result: e },
          r,
          w,
          h,
          c
        ));
  else {
    if (c.hydrate === "only")
      throw new me({
        ...M.NoClientOnlyHint,
        message: M.NoClientOnlyHint.message(c.displayName),
        hint: M.NoClientOnlyHint.hint(
          b.map((m) => m.replace("@astrojs/", "")).join("|")
        ),
      });
    if (typeof r != "string") {
      const m = p.filter((R) => b.includes(R.name)),
        S = p.length > 1;
      if (m.length === 0)
        throw new me({
          ...M.NoMatchingRenderer,
          message: M.NoMatchingRenderer.message(
            c.displayName,
            (i = c?.componentUrl) == null ? void 0 : i.split(".").pop(),
            S,
            p.length
          ),
          hint: M.NoMatchingRenderer.hint($t(b.map((R) => "`" + R + "`"))),
        });
      if (m.length === 1)
        (u = m[0]),
          ({ html: g, attrs: A } = await u.ssr.renderToStaticMarkup.call(
            { result: e },
            r,
            w,
            h,
            c
          ));
      else
        throw new Error(`Unable to render ${c.displayName}!

This component likely uses ${$t(b)},
but Astro encountered an error during server-side rendering.

Please ensure that ${c.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
    }
  }
  if (u && !u.clientEntrypoint && u.name !== "@astrojs/lit" && c.hydrate)
    throw new me({
      ...M.NoClientEntrypoint,
      message: M.NoClientEntrypoint.message(t, c.hydrate, u.name),
    });
  if (!g && typeof r == "string") {
    const m = Yn(r),
      S = Object.values(h).join(""),
      R = Ut(
        await ue`<${m}${lt(w)}${$(
          S === "" && qt.test(m) ? "/>" : `>${S}</${m}>`
        )}`
      );
    g = "";
    for await (const N of R) g += N;
  }
  if (!l)
    return (async function* () {
      v && (yield* v),
        d || u?.name === "astro:jsx"
          ? yield g
          : g && g.length > 0
          ? yield $(g.replace(/\<\/?astro-slot\b[^>]*>/g, ""))
          : yield "";
    })();
  const y = zn(`<!--${c.componentExport.value}:${c.componentUrl}-->
${g}
${Lt(w, c)}`),
    _ = await qn({ renderer: u, result: e, astroId: y, props: w, attrs: A }, c);
  let x = [];
  if (g) {
    if (Object.keys(h).length > 0)
      for (const m of Object.keys(h))
        g.includes(
          m === "default" ? "<astro-slot>" : `<astro-slot name="${m}">`
        ) || x.push(m);
  } else x = Object.keys(h);
  const W =
    x.length > 0
      ? x
          .map(
            (m) =>
              `<template data-astro-template${
                m !== "default" ? `="${m}"` : ""
              }>${h[m]}</template>`
          )
          .join("")
      : "";
  (_.children = `${g ?? ""}${W}`),
    _.children && (_.props["await-children"] = "");
  async function* z() {
    v && (yield* v),
      yield { type: "directive", hydration: l, result: e },
      yield $(Ce("astro-island", _, !1));
  }
  return z();
}
function Yn(e) {
  const t = /[&<>'"\s]+/g;
  return t.test(e) ? e.trim().split(t)[0].trim() : e;
}
async function Kn(e, t = {}) {
  const r = await et(e, t?.default);
  return r == null ? r : $(r);
}
async function Zn(e, t, r, n = {}) {
  const { slotInstructions: s, children: o } = await Xt(e, n),
    i = t.render({ slots: o }),
    a = s ? s.map((c) => Yt(e, c)).join("") : "";
  return $(a + i);
}
function Kt(e, t, r, n, s = {}) {
  return mt(r)
    ? Promise.resolve(r).then((o) => Kt(e, t, o, n, s))
    : Gn(r)
    ? Kn(e, s)
    : Xn(r)
    ? Zn(e, r, n, s)
    : jn(r)
    ? Dn(e, t, r, n, s)
    : Qn(e, t, r, n, s);
}
typeof process == "object" && Object.prototype.toString.call(process);
function $e(e, t, { class: r } = {}) {
  let n = "";
  r &&
    (typeof e.class < "u"
      ? (e.class += ` ${r}`)
      : typeof e["class:list"] < "u"
      ? (e["class:list"] = [e["class:list"], r])
      : (e.class = r));
  for (const [s, o] of Object.entries(e)) n += P(o, s, !0);
  return $(n);
}
const es = {
  autoWidths: { maxWidth: 3840, step: 320 },
  withWebp: !0,
  style: { display: "flex", alignItems: "stretch", backgroundSize: "cover" },
  img: {
    loading: "lazy",
    style: { width: "100%", height: "auto", objectFit: "cover" },
  },
  lqip: { enabled: !0, transitionDuration: 350 },
};
function ts(...e) {
  let t = {};
  return (
    e.forEach((r) => {
      Object.entries(r).forEach(([n, s]) => {
        t[n] = s;
      });
    }),
    t
  );
}
function Ot(...e) {
  let t = {};
  return (
    e.forEach((r) => {
      Object.entries(r).forEach(([n, s]) => {
        t[n] = t[n] && s && typeof s == "object" ? ts(t[n], s) : s;
      });
    }),
    t
  );
}
function Zt(e) {
  return (
    typeof e == "object" &&
    "asset" in e &&
    "metadata" in e.asset &&
    "dimensions" in e.asset.metadata
  );
}
function rs(e) {
  return (
    typeof e == "object" &&
    "asset" in e &&
    "metadata" in e.asset &&
    "lqip" in e.asset.metadata
  );
}
function ns(e, t) {
  const r = Zt(t) ? t.asset.metadata.dimensions.width : e.maxWidth,
    n = Math.ceil(r / e.step);
  return Array.from({ length: n }, (s, o) =>
    Math.min(Math.floor(e.step * (o + 1)), r)
  );
}
const ss = nn("http://localhost:3000"),
  os = en(async (e, t, r) => {
    const n = e.createAstro(ss, t, r);
    n.self = os;
    const s = (globalThis.sanityPictureDefaults ??= es),
      {
        imageUrlBuilder: o,
        src: i,
        sources: a,
        widths: c,
        img: l,
        lqip: d,
        sizes: w,
        ...g
      } = n.props,
      A = (o ?? s.imageUrlBuilder)?.image(i);
    if (!A)
      throw new Error("No image url builder specified, and no default set!");
    const b = Array.isArray(c) ? c : ns(c ?? s.autoWidths, i),
      p = a ?? [{}],
      h = d ?? s.lqip,
      v =
        h.enabled && rs(i)
          ? { backgroundImage: `url(${i.asset.metadata.lqip})` }
          : {},
      u = Ot({ style: v }, { style: s.style }, g),
      y = Ot(s.img, l ?? {}, { style: h.enabled ? { opacity: 0 } : {} }),
      [_, x] = Zt(i)
        ? [
            i.asset.metadata.dimensions.width,
            i.asset.metadata.dimensions.height,
          ]
        : [void 0, void 0];
    return ue`${Rn(e)}<picture${$e(u)}>
  ${p.map(({ options: W, withWebp: z, ...m }) => {
    const S = b
        .map(
          (E) =>
            `${A.width(E)
              .withOptions(W ?? {})
              .url()} ${E}w`
        )
        .join(", "),
      R = z ?? s.withWebp,
      N = R
        ? b
            .map(
              (E) =>
                `${A.width(E)
                  .withOptions(W ?? {})
                  .withOptions({ format: "webp" })
                  .url()} ${E}w`
            )
            .join(", ")
        : void 0;
    return ue`${Kt(
      e,
      "Fragment",
      Qt,
      {},
      {
        default: (E) => ue`${
          R &&
          ue`<source${P(N, "srcset")} type="image/webp"${P(w, "sizes")}${$e(
            m ?? {}
          )}>`
        }<source${P(S, "srcset")}${P(w, "sizes")}${$e(m ?? {})}>
      `,
      }
    )}`;
  })}
  <img${P(A.url(), "src")}${P(_, "width")}${P(x, "height")}${P(
      h.enabled ? "true" : "false",
      "data-x-lqip"
    )}${P(
      h.enabled ? h.transitionDuration.toString() : "0",
      "data-x-lqip-transition-duration"
    )}${$e(y)}>
</picture>`;
  }, "/opt/buildhome/repo/node_modules/.pnpm/astro-sanity-picture@0.2.0_astro@2.3.4/node_modules/astro-sanity-picture/src/sanity-picture.astro"),
  Ae = (e, t) => Ue`'${t?.as ?? e}': ${e} {
  ...,
  asset->{
    ...,
    metadata {
      lqip,
      dimensions
    }
  }
}`,
  is = (e, t = !0) => {
    if (Array.isArray(e)) {
      const [r, n, s = "order(_createdAt)"] = e;
      return Ue`*[_type == "${r}" && language == $locale && ${t}] | ${s} ${n}`;
    } else
      return Ue`coalesce(
		*[_type == "${e}" && language == $locale && ${t}][0],
		*[_type == "${e}" && language == $defaultLocale && ${t}][0],
		*[_type == "${e}" && ${t}][0],
	)`;
  };
Ue`${is("site")} {
  "seo" : {
      ${Ae("ogImage")},
      "favicon" : favicon.asset->url,
    },
  "header": {
    ${Ae("logo")},
    ${Ae("logoBlue")},
    navMenus,
		contactUs
  },
  "footer": {
		${Ae("logo")},
		footerTopLinks,
    contacts,
		footerCopyRight,
		footerBottomLinks,
		footerLinks,
  },
}`;
const as = typeof navigator > "u" ? !1 : navigator.product === "ReactNative",
  dt = { timeout: as ? 6e4 : 12e4 };
function cs(e) {
  const t =
      typeof e == "string"
        ? Object.assign({ url: e }, dt)
        : Object.assign({}, dt, e),
    r = new URL(t.url, "http://localhost");
  if (((t.timeout = er(t.timeout)), t.query)) {
    for (const [n, s] of Object.entries(t.query))
      if (s !== void 0)
        if (Array.isArray(s)) for (const o of s) r.searchParams.append(n, o);
        else r.searchParams.append(n, s);
  }
  return (
    (t.method =
      t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
    (t.url =
      r.origin === "http://localhost"
        ? "".concat(r.pathname, "?").concat(r.searchParams)
        : r.toString()),
    t
  );
}
function er(e) {
  if (e === !1 || e === 0) return !1;
  if (e.connect || e.socket) return e;
  const t = Number(e);
  return isNaN(t) ? er(dt.timeout) : { connect: t, socket: t };
}
const ls = /^https?:\/\//i;
function us(e) {
  if (!ls.test(e.url))
    throw new Error('"'.concat(e.url, '" is not a valid URL'));
}
var ds = (e) =>
  function (r, n) {
    const s = r === "onError";
    let o = n;
    for (
      var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), c = 2;
      c < i;
      c++
    )
      a[c - 2] = arguments[c];
    for (let l = 0; l < e[r].length; l++) {
      const d = e[r][l];
      if (((o = d(o, ...a)), s && !o)) break;
    }
    return o;
  };
function hs() {
  const e = Object.create(null);
  let t = 0;
  function r(s) {
    const o = t++;
    return (
      (e[o] = s),
      function () {
        delete e[o];
      }
    );
  }
  function n(s) {
    for (const o in e) e[o](s);
  }
  return { publish: n, subscribe: r };
}
const fs = ["request", "response", "progress", "error", "abort"],
  Tt = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function tr(e, t) {
  const r = [],
    n = Tt.reduce((o, i) => ((o[i] = o[i] || []), o), {
      processOptions: [cs],
      validateOptions: [us],
    });
  function s(o) {
    const i = fs.reduce((b, p) => ((b[p] = hs()), b), {}),
      a = ds(n),
      c = a("processOptions", o);
    a("validateOptions", c);
    const l = { options: c, channels: i, applyMiddleware: a };
    let d = null;
    const w = i.request.subscribe((b) => {
      d = t(b, (p, h) => A(p, h, b));
    });
    i.abort.subscribe(() => {
      w(), d && d.abort();
    });
    const g = a("onReturn", i, l);
    return g === i && i.request.publish(l), g;
    function A(b, p, h) {
      let v = b,
        u = p;
      if (!v)
        try {
          u = a("onResponse", p, h);
        } catch (y) {
          (u = null), (v = y);
        }
      (v = v && a("onError", v, h)),
        v ? i.error.publish(v) : u && i.response.publish(u);
    }
  }
  return (
    (s.use = function (i) {
      if (!i)
        throw new Error(
          "Tried to add middleware that resolved to falsey value"
        );
      if (typeof i == "function")
        throw new Error(
          "Tried to add middleware that was a function. It probably expects you to pass options to it."
        );
      if (i.onReturn && n.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
        );
      return (
        Tt.forEach((a) => {
          i[a] && n[a].push(i[a]);
        }),
        r.push(i),
        s
      );
    }),
    (s.clone = function () {
      return tr(r, t);
    }),
    e.forEach(s.use),
    s
  );
}
var rr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  q = (e, t, r) => (
    rr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  ce = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Z = (e, t, r, n) => (
    rr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  Re,
  Oe,
  ee,
  Te,
  D;
class ps {
  constructor() {
    (this.readyState = 0),
      (this.responseType = ""),
      ce(this, Re, void 0),
      ce(this, Oe, void 0),
      ce(this, ee, void 0),
      ce(this, Te, {}),
      ce(this, D, void 0);
  }
  open(t, r, n) {
    Z(this, Re, t),
      Z(this, Oe, r),
      Z(this, ee, ""),
      (this.readyState = 1),
      this.onreadystatechange(),
      Z(this, D, void 0);
  }
  abort() {
    q(this, D) && q(this, D).abort();
  }
  getAllResponseHeaders() {
    return q(this, ee);
  }
  setRequestHeader(t, r) {
    q(this, Te)[t] = r;
  }
  send(t) {
    const r = this.responseType !== "arraybuffer",
      n = { method: q(this, Re), headers: q(this, Te), body: t };
    typeof AbortController == "function" &&
      (Z(this, D, new AbortController()),
      typeof EventTarget < "u" &&
        q(this, D).signal instanceof EventTarget &&
        (n.signal = q(this, D).signal)),
      typeof document < "u" &&
        (n.credentials = this.withCredentials ? "include" : "omit"),
      fetch(q(this, Oe), n)
        .then(
          (s) => (
            s.headers.forEach((o, i) => {
              Z(
                this,
                ee,
                q(this, ee) +
                  "".concat(i, ": ").concat(
                    o,
                    `\r
`
                  )
              );
            }),
            (this.status = s.status),
            (this.statusText = s.statusText),
            (this.readyState = 3),
            r ? s.text() : s.arrayBuffer()
          )
        )
        .then((s) => {
          typeof s == "string" ? (this.responseText = s) : (this.response = s),
            (this.readyState = 4),
            this.onreadystatechange();
        })
        .catch((s) => {
          var o;
          if (s.name === "AbortError") {
            this.onabort();
            return;
          }
          (o = this.onerror) == null || o.call(this, s);
        });
  }
}
Re = new WeakMap();
Oe = new WeakMap();
ee = new WeakMap();
Te = new WeakMap();
D = new WeakMap();
const ht = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
  ms = ht === "xhr" ? XMLHttpRequest : ps;
var gs = (e, t) => {
  const r = e.options,
    n = e.applyMiddleware("finalizeOptions", r),
    s = {},
    o = e.applyMiddleware("interceptRequest", void 0, {
      adapter: ht,
      context: e,
    });
  if (o) {
    const y = setTimeout(t, 0, null, o);
    return { abort: () => clearTimeout(y) };
  }
  let i = new ms();
  const a = n.headers,
    c = n.timeout;
  let l = !1,
    d = !1,
    w = !1;
  if (
    ((i.onerror = (y) => {
      h(
        new Error(
          "Request error while attempting to reach "
            .concat(n.url)
            .concat(
              y.lengthComputable
                ? "("
                    .concat(y.loaded, " of ")
                    .concat(y.total, " bytes transferred)")
                : ""
            )
        )
      );
    }),
    (i.ontimeout = (y) => {
      h(
        new Error(
          "Request timeout while attempting to reach "
            .concat(n.url)
            .concat(
              y.lengthComputable
                ? "("
                    .concat(y.loaded, " of ")
                    .concat(y.total, " bytes transferred)")
                : ""
            )
        )
      );
    }),
    (i.onabort = () => {
      p(!0), (l = !0);
    }),
    (i.onreadystatechange = () => {
      b(), !(l || i.readyState !== 4) && i.status !== 0 && u();
    }),
    i.open(n.method, n.url, !0),
    (i.withCredentials = !!n.withCredentials),
    a && i.setRequestHeader)
  )
    for (const y in a) a.hasOwnProperty(y) && i.setRequestHeader(y, a[y]);
  return (
    n.rawBody && (i.responseType = "arraybuffer"),
    e.applyMiddleware("onRequest", {
      options: n,
      adapter: ht,
      request: i,
      context: e,
    }),
    i.send(n.body || null),
    c && (s.connect = setTimeout(() => A("ETIMEDOUT"), c.connect)),
    { abort: g }
  );
  function g() {
    (l = !0), i && i.abort();
  }
  function A(y) {
    (w = !0), i.abort();
    const _ = new Error(
      y === "ESOCKETTIMEDOUT"
        ? "Socket timed out on request to ".concat(n.url)
        : "Connection timed out on request to ".concat(n.url)
    );
    (_.code = y), e.channels.error.publish(_);
  }
  function b() {
    c && (p(), (s.socket = setTimeout(() => A("ESOCKETTIMEDOUT"), c.socket)));
  }
  function p(y) {
    (y || l || (i.readyState >= 2 && s.connect)) && clearTimeout(s.connect),
      s.socket && clearTimeout(s.socket);
  }
  function h(y) {
    if (d) return;
    p(!0), (d = !0), (i = null);
    const _ =
      y || new Error("Network error while attempting to reach ".concat(n.url));
    (_.isNetworkError = !0), (_.request = n), t(_);
  }
  function v() {
    return {
      body:
        i.response ||
        (i.responseType === "" || i.responseType === "text"
          ? i.responseText
          : ""),
      url: n.url,
      method: n.method,
      headers: Vr(i.getAllResponseHeaders()),
      statusCode: i.status,
      statusMessage: i.statusText,
    };
  }
  function u() {
    if (!(l || d || w)) {
      if (i.status === 0) {
        h(new Error("Unknown XHR error"));
        return;
      }
      p(), (d = !0), t(null, v());
    }
  }
};
const ys = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gs;
    return tr(e, t);
  },
  ws = typeof Buffer > "u" ? () => !1 : (e) => Buffer.isBuffer(e),
  bs = ["boolean", "string", "number"];
function vs() {
  return {
    processOptions: (e) => {
      const t = e.body;
      return !t ||
        !(
          !(typeof t.pipe == "function") &&
          !ws(t) &&
          (bs.indexOf(typeof t) !== -1 || Array.isArray(t) || Jr(t))
        )
        ? e
        : Object.assign({}, e, {
            body: JSON.stringify(e.body),
            headers: Object.assign({}, e.headers, {
              "Content-Type": "application/json",
            }),
          });
    },
  };
}
function Ss(e) {
  return {
    onResponse: (r) => {
      const n = r.headers["content-type"] || "",
        s = (e && e.force) || n.indexOf("application/json") !== -1;
      return !r.body || !n || !s
        ? r
        : Object.assign({}, r, { body: t(r.body) });
    },
    processOptions: (r) =>
      Object.assign({}, r, {
        headers: Object.assign({ Accept: "application/json" }, r.headers),
      }),
  };
  function t(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw (
        ((n.message = "Failed to parsed response body as JSON: ".concat(
          n.message
        )),
        n)
      );
    }
  }
}
let te;
typeof globalThis < "u"
  ? (te = globalThis)
  : typeof window < "u"
  ? (te = window)
  : typeof global < "u"
  ? (te = global)
  : typeof self < "u"
  ? (te = self)
  : (te = {});
var Es = te;
function $s() {
  const t =
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {})
      .implementation || Es.Observable;
  if (!t)
    throw new Error(
      "`Observable` is not available in global scope, and no implementation was passed"
    );
  return {
    onReturn: (r, n) =>
      new t(
        (s) => (
          r.error.subscribe((o) => s.error(o)),
          r.progress.subscribe((o) =>
            s.next(Object.assign({ type: "progress" }, o))
          ),
          r.response.subscribe((o) => {
            s.next(Object.assign({ type: "response" }, o)), s.complete();
          }),
          r.request.publish(n),
          () => r.abort.publish()
        )
      ),
  };
}
function As() {
  return {
    onRequest: (e) => {
      if (e.adapter !== "xhr") return;
      const t = e.request,
        r = e.context;
      "upload" in t &&
        "onprogress" in t.upload &&
        (t.upload.onprogress = n("upload")),
        "onprogress" in t && (t.onprogress = n("download"));
      function n(s) {
        return (o) => {
          const i = o.lengthComputable ? (o.loaded / o.total) * 100 : -1;
          r.channels.progress.publish({
            stage: s,
            percent: i,
            total: o.total,
            loaded: o.loaded,
            lengthComputable: o.lengthComputable,
          });
        };
      }
    },
  };
}
class _s {
  constructor(t) {
    (this.__CANCEL__ = !0), (this.message = t);
  }
  toString() {
    return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
  }
}
const nr = class {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t = null;
    (this.promise = new Promise((r) => {
      t = r;
    })),
      e((r) => {
        this.reason || ((this.reason = new _s(r)), t(this.reason));
      });
  }
};
let Cs = nr;
Cs.source = () => {
  let e;
  return {
    token: new nr((r) => {
      e = r;
    }),
    cancel: e,
  };
};
var sr = (e, t, r) =>
  r.method !== "GET" && r.method !== "HEAD" ? !1 : e.isNetworkError || !1;
const Rs = (e) =>
  e !== null && typeof e == "object" && typeof e.pipe == "function";
var Os = (e) => {
  const t = e.maxRetries || 5,
    r = e.retryDelay || Ts,
    n = e.shouldRetry;
  return {
    onError: (s, o) => {
      const i = o.options,
        a = i.maxRetries || t,
        c = i.shouldRetry || n,
        l = i.attemptNumber || 0;
      if (Rs(i.body) || !c(s, l, i) || l >= a) return s;
      const d = Object.assign({}, o, {
        options: Object.assign({}, i, { attemptNumber: l + 1 }),
      });
      return setTimeout(() => o.channels.request.publish(d), r(l)), null;
    },
  };
};
function Ts(e) {
  return 100 * Math.pow(2, e) + Math.random() * 100;
}
const gt = function () {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Os({ shouldRetry: sr, ...e });
};
gt.shouldRetry = sr;
var or = [];
const ct = 5;
class Is extends Error {
  constructor(t) {
    const r = ir(t);
    super(r.message), (this.statusCode = 400), Object.assign(this, r);
  }
}
class xs extends Error {
  constructor(t) {
    const r = ir(t);
    super(r.message), (this.statusCode = 500), Object.assign(this, r);
  }
}
function ir(e) {
  const t = e.body,
    r = {
      response: e,
      statusCode: e.statusCode,
      responseBody: Ps(t, e),
      message: "",
      details: void 0,
    };
  if (t.error && t.message)
    return (r.message = "".concat(t.error, " - ").concat(t.message)), r;
  if (js(t)) {
    const n = t.error.items || [],
      s = n
        .slice(0, ct)
        .map((i) => {
          var a;
          return (a = i.error) == null ? void 0 : a.description;
        })
        .filter(Boolean);
    let o = s.length
      ? `:
- `.concat(
          s.join(`
- `)
        )
      : "";
    return (
      n.length > ct &&
        (o += `
...and `.concat(n.length - ct, " more")),
      (r.message = "".concat(t.error.description).concat(o)),
      (r.details = t.error),
      r
    );
  }
  return t.error && t.error.description
    ? ((r.message = t.error.description), (r.details = t.error), r)
    : ((r.message = t.error || t.message || Ms(e)), r);
}
function js(e) {
  return (
    It(e) &&
    It(e.error) &&
    e.error.type === "mutationError" &&
    typeof e.error.description == "string"
  );
}
function It(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ms(e) {
  const t = e.statusMessage ? " ".concat(e.statusMessage) : "";
  return ""
    .concat(e.method, "-request to ")
    .concat(e.url, " resulted in HTTP ")
    .concat(e.statusCode)
    .concat(t);
}
function Ps(e, t) {
  return (t.headers["content-type"] || "")
    .toLowerCase()
    .indexOf("application/json") !== -1
    ? JSON.stringify(e, null, 2)
    : e;
}
const ks = {
    onResponse: (e) => {
      if (e.statusCode >= 500) throw new xs(e);
      if (e.statusCode >= 400) throw new Is(e);
      return e;
    },
  },
  qs = {
    onResponse: (e) => {
      const t = e.headers["x-sanity-warning"];
      return (
        (Array.isArray(t) ? t : [t])
          .filter(Boolean)
          .forEach((n) => console.warn(n)),
        e
      );
    },
  };
function ar(e, t) {
  let { maxRetries: r = 5, retryDelay: n } = t;
  const s = ys([
    r > 0 ? gt({ retryDelay: n, maxRetries: r, shouldRetry: Ns }) : {},
    ...e,
    qs,
    vs(),
    Ss(),
    As(),
    ks,
    $s({ implementation: be }),
  ]);
  function o(i) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s)(
      { maxRedirects: 0, ...i }
    );
  }
  return (o.defaultRequester = s), o;
}
function Ns(e, t, r) {
  const n = r.method === "GET" || r.method === "HEAD",
    s = r.uri.startsWith("/data/query"),
    o =
      e.response &&
      (e.response.statusCode === 429 ||
        e.response.statusCode === 502 ||
        e.response.statusCode === 503);
  return (n || s) && o ? !0 : gt.shouldRetry(e, t, r);
}
const Us = "X-Sanity-Project-ID";
function Ds(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const r = {},
    n = t.token || e.token;
  n && (r.Authorization = "Bearer ".concat(n)),
    !t.useGlobalApi &&
      !e.useProjectHostname &&
      e.projectId &&
      (r[Us] = e.projectId);
  const s = !!(typeof t.withCredentials > "u"
      ? e.token || e.withCredentials
      : t.withCredentials),
    o = typeof t.timeout > "u" ? e.timeout : t.timeout;
  return Object.assign({}, t, {
    headers: Object.assign({}, r, t.headers || {}),
    timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
    proxy: t.proxy || e.proxy,
    json: !0,
    withCredentials: s,
  });
}
function cr(e) {
  if (typeof e == "string" || Array.isArray(e)) return { id: e };
  if (
    typeof e == "object" &&
    e !== null &&
    "query" in e &&
    typeof e.query == "string"
  )
    return "params" in e && typeof e.params == "object" && e.params !== null
      ? { query: e.query, params: e.params }
      : { query: e.query };
  const t = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`",
  ].join(`
`);
  throw new Error(
    `Unknown selection - must be one of:

`.concat(t)
  );
}
const xt = ["image", "file"],
  jt = ["before", "after", "replace"],
  lr = (e) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
      );
  },
  Hs = (e) => {
    if (!/^[-a-z0-9]+$/i.test(e))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  Ls = (e) => {
    if (xt.indexOf(e) === -1)
      throw new Error(
        "Invalid asset type: "
          .concat(e, ". Must be one of ")
          .concat(xt.join(", "))
      );
  },
  ge = (e, t) => {
    if (t === null || typeof t != "object" || Array.isArray(t))
      throw new Error("".concat(e, "() takes an object of properties"));
  },
  ur = (e, t) => {
    if (
      typeof t != "string" ||
      !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
      t.includes("..")
    )
      throw new Error(
        "".concat(e, '(): "').concat(t, '" is not a valid document ID')
      );
  },
  He = (e, t) => {
    if (!t._id)
      throw new Error(
        "".concat(
          e,
          '() requires that the document contains an ID ("_id" property)'
        )
      );
    ur(e, t._id);
  },
  Ws = (e, t, r) => {
    const n = "insert(at, selector, items)";
    if (jt.indexOf(e) === -1) {
      const s = jt.map((o) => '"'.concat(o, '"')).join(", ");
      throw new Error(
        "".concat(n, ' takes an "at"-argument which is one of: ').concat(s)
      );
    }
    if (typeof t != "string")
      throw new Error(
        "".concat(n, ' takes a "selector"-argument which must be a string')
      );
    if (!Array.isArray(r))
      throw new Error(
        "".concat(n, ' takes an "items"-argument which must be an array')
      );
  },
  dr = (e) => {
    if (!e.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return e.dataset || "";
  },
  hr = (e) => {
    if (typeof e != "string" || !/^[a-z0-9._-]{1,75}$/i.test(e))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
      );
    return e;
  },
  fr = (e) => {
    let { query: t, params: r = {}, options: n = {} } = e;
    const s = new URLSearchParams(),
      { tag: o, ...i } = n;
    o && s.set("tag", o), s.set("query", t);
    for (const [a, c] of Object.entries(r))
      s.set("$".concat(a), JSON.stringify(c));
    for (const [a, c] of Object.entries(i)) c && s.set(a, "".concat(c));
    return "?".concat(s);
  };
var pr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  se = (e, t, r) => (
    pr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  mr = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  gr = (e, t, r, n) => (
    pr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  re,
  ne;
class yr {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.selection = t), (this.operations = r);
  }
  set(t) {
    return this._assign("set", t);
  }
  setIfMissing(t) {
    return this._assign("setIfMissing", t);
  }
  diffMatchPatch(t) {
    return ge("diffMatchPatch", t), this._assign("diffMatchPatch", t);
  }
  unset(t) {
    if (!Array.isArray(t))
      throw new Error(
        "unset(attrs) takes an array of attributes to unset, non-array given"
      );
    return (
      (this.operations = Object.assign({}, this.operations, { unset: t })), this
    );
  }
  inc(t) {
    return this._assign("inc", t);
  }
  dec(t) {
    return this._assign("dec", t);
  }
  insert(t, r, n) {
    return Ws(t, r, n), this._assign("insert", { [t]: r, items: n });
  }
  append(t, r) {
    return this.insert("after", "".concat(t, "[-1]"), r);
  }
  prepend(t, r) {
    return this.insert("before", "".concat(t, "[0]"), r);
  }
  splice(t, r, n, s) {
    const o = typeof n > "u" || n === -1,
      i = r < 0 ? r - 1 : r,
      a = o ? -1 : Math.max(0, r + n),
      c = i < 0 && a >= 0 ? "" : a,
      l = "".concat(t, "[").concat(i, ":").concat(c, "]");
    return this.insert("replace", l, s || []);
  }
  ifRevisionId(t) {
    return (this.operations.ifRevisionID = t), this;
  }
  serialize() {
    return { ...cr(this.selection), ...this.operations };
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = {}), this;
  }
  _assign(t, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return (
      ge(t, r),
      (this.operations = Object.assign({}, this.operations, {
        [t]: Object.assign({}, (n && this.operations[t]) || {}, r),
      })),
      this
    );
  }
  _set(t, r) {
    return this._assign(t, r, !1);
  }
}
const wr = class extends yr {
  constructor(e, t, r) {
    super(e, t), mr(this, re, void 0), gr(this, re, r);
  }
  clone() {
    return new wr(this.selection, { ...this.operations }, se(this, re));
  }
  commit(e) {
    if (!se(this, re))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const t = typeof this.selection == "string",
      r = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
    return se(this, re).mutate({ patch: this.serialize() }, r);
  }
};
let ye = wr;
re = new WeakMap();
const br = class extends yr {
  constructor(e, t, r) {
    super(e, t), mr(this, ne, void 0), gr(this, ne, r);
  }
  clone() {
    return new br(this.selection, { ...this.operations }, se(this, ne));
  }
  commit(e) {
    if (!se(this, ne))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const t = typeof this.selection == "string",
      r = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
    return se(this, ne).mutate({ patch: this.serialize() }, r);
  }
};
let we = br;
ne = new WeakMap();
var vr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  H = (e, t, r) => (
    vr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Sr = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Er = (e, t, r, n) => (
    vr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  F,
  B;
const $r = { returnDocuments: !1 };
class Ar {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.operations = t), (this.trxId = r);
  }
  create(t) {
    return ge("create", t), this._add({ create: t });
  }
  createIfNotExists(t) {
    const r = "createIfNotExists";
    return ge(r, t), He(r, t), this._add({ [r]: t });
  }
  createOrReplace(t) {
    const r = "createOrReplace";
    return ge(r, t), He(r, t), this._add({ [r]: t });
  }
  delete(t) {
    return ur("delete", t), this._add({ delete: { id: t } });
  }
  transactionId(t) {
    return t ? ((this.trxId = t), this) : this.trxId;
  }
  serialize() {
    return [...this.operations];
  }
  toJSON() {
    return this.serialize();
  }
  reset() {
    return (this.operations = []), this;
  }
  _add(t) {
    return this.operations.push(t), this;
  }
}
const _r = class extends Ar {
  constructor(e, t, r) {
    super(e, r), Sr(this, F, void 0), Er(this, F, t);
  }
  clone() {
    return new _r([...this.operations], H(this, F), this.trxId);
  }
  commit(e) {
    if (!H(this, F))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return H(this, F).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, $r, e || {})
    );
  }
  patch(e, t) {
    const r = typeof t == "function";
    if (typeof e != "string" && e instanceof we)
      return this._add({ patch: e.serialize() });
    if (r) {
      const s = t(new we(e, {}, H(this, F)));
      if (!(s instanceof we))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: s.serialize() });
    }
    return this._add({ patch: { id: e, ...t } });
  }
};
let Cr = _r;
F = new WeakMap();
const Rr = class extends Ar {
  constructor(e, t, r) {
    super(e, r), Sr(this, B, void 0), Er(this, B, t);
  }
  clone() {
    return new Rr([...this.operations], H(this, B), this.trxId);
  }
  commit(e) {
    if (!H(this, B))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return H(this, B).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, $r, e || {})
    );
  }
  patch(e, t) {
    const r = typeof t == "function";
    if (typeof e != "string" && e instanceof ye)
      return this._add({ patch: e.serialize() });
    if (r) {
      const s = t(new ye(e, {}, H(this, B)));
      if (!(s instanceof ye))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: s.serialize() });
    }
    return this._add({ patch: { id: e, ...t } });
  }
};
let Or = Rr;
B = new WeakMap();
const zs = (e, t) => (e === !1 ? void 0 : typeof e > "u" ? t : e),
  Fs = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
      dryRun: e.dryRun,
      returnIds: !0,
      returnDocuments: zs(e.returnDocuments, !0),
      visibility: e.visibility || "sync",
      autoGenerateArrayKeys: e.autoGenerateArrayKeys,
      skipCrossDatasetReferenceValidation:
        e.skipCrossDatasetReferenceValidation,
    };
  },
  yt = (e) => e.type === "response",
  Bs = (e) => e.body,
  Vs = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), Object.create(null)),
  Js = 11264;
function Tr(e, t, r, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const o = s.filterResponse === !1 ? (i) => i : (i) => i.result;
  return Se(e, t, "query", { query: r, params: n }, s).pipe(K(o));
}
function Ir(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const s = { uri: ae(e, "doc", r), json: !0, tag: n.tag };
  return Ee(e, t, s).pipe(
    ve(yt),
    K((o) => o.body.documents && o.body.documents[0])
  );
}
function xr(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const s = { uri: ae(e, "doc", r.join(",")), json: !0, tag: n.tag };
  return Ee(e, t, s).pipe(
    ve(yt),
    K((o) => {
      const i = Vs(o.body.documents || [], (a) => a._id);
      return r.map((a) => i[a] || null);
    })
  );
}
function jr(e, t, r, n) {
  return He("createIfNotExists", r), tt(e, t, r, "createIfNotExists", n);
}
function Mr(e, t, r, n) {
  return He("createOrReplace", r), tt(e, t, r, "createOrReplace", n);
}
function Pr(e, t, r, n) {
  return Se(e, t, "mutate", { mutations: [{ delete: cr(r) }] }, n);
}
function kr(e, t, r, n) {
  let s;
  r instanceof we || r instanceof ye
    ? (s = { patch: r.serialize() })
    : r instanceof Cr || r instanceof Or
    ? (s = r.serialize())
    : (s = r);
  const o = Array.isArray(s) ? s : [s],
    i = (n && n.transactionId) || void 0;
  return Se(e, t, "mutate", { mutations: o, transactionId: i }, n);
}
function Se(e, t, r, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const o = r === "mutate",
    i = r === "query",
    a = o ? "" : fr(n),
    c = !o && a.length < Js,
    l = c ? a : "",
    d = s.returnFirst,
    { timeout: w, token: g, tag: A, headers: b } = s,
    p = ae(e, r, l),
    h = {
      method: c ? "GET" : "POST",
      uri: p,
      json: !0,
      body: c ? void 0 : n,
      query: o && Fs(s),
      timeout: w,
      headers: b,
      token: g,
      tag: A,
      canUseCdn: i,
      signal: s.signal,
    };
  return Ee(e, t, h).pipe(
    ve(yt),
    K(Bs),
    K((v) => {
      if (!o) return v;
      const u = v.results || [];
      if (s.returnDocuments)
        return d ? u[0] && u[0].document : u.map((x) => x.document);
      const y = d ? "documentId" : "documentIds",
        _ = d ? u[0] && u[0].id : u.map((x) => x.id);
      return { transactionId: v.transactionId, results: u, [y]: _ };
    })
  );
}
function tt(e, t, r, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const o = { [n]: r },
    i = Object.assign({ returnFirst: !0, returnDocuments: !0 }, s);
  return Se(e, t, "mutate", { mutations: [o] }, i);
}
function Ee(e, t, r) {
  const n = r.url || r.uri,
    s = e.config(),
    o =
      typeof r.canUseCdn > "u"
        ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 &&
          n.indexOf("/data/") === 0
        : r.canUseCdn,
    i = s.useCdn && o,
    a =
      r.tag && s.requestTagPrefix
        ? [s.requestTagPrefix, r.tag].join(".")
        : r.tag || s.requestTagPrefix;
  a && (r.query = { tag: hr(a), ...r.query }),
    s.resultSourceMap && (r.query = { resultSourceMap: !0, ...r.query });
  const c = Ds(s, Object.assign({}, r, { url: wt(e, n, i) })),
    l = new be((d) => t(c, s.requester).subscribe(d));
  return r.signal ? l.pipe(Gs(r.signal)) : l;
}
function k(e, t, r) {
  return Ee(e, t, r).pipe(
    ve((s) => s.type === "response"),
    K((s) => s.body)
  );
}
function ae(e, t, r) {
  const n = e.config(),
    s = dr(n),
    o = "/".concat(t, "/").concat(s),
    i = r ? "".concat(o, "/").concat(r) : o;
  return "/data".concat(i).replace(/\/($|\?)/, "$1");
}
function wt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const { url: n, cdnUrl: s } = e.config(),
    o = r ? s : n;
  return "".concat(o, "/").concat(t.replace(/^\//, ""));
}
function Gs(e) {
  return (t) =>
    new be((r) => {
      const n = () => r.error(Qs(e));
      if (e && e.aborted) {
        n();
        return;
      }
      const s = t.subscribe(r);
      return (
        e.addEventListener("abort", n),
        () => {
          e.removeEventListener("abort", n), s.unsubscribe();
        }
      );
    });
}
const Xs = !!globalThis.DOMException;
function Qs(e) {
  var t, r;
  if (Xs)
    return new DOMException(
      (t = e?.reason) != null ? t : "The operation was aborted.",
      "AbortError"
    );
  const n = new Error(
    (r = e?.reason) != null ? r : "The operation was aborted."
  );
  return (n.name = "AbortError"), n;
}
var qr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  Le = (e, t, r) => (
    qr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  We = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  ze = (e, t, r, n) => (
    qr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  Ie,
  xe,
  je,
  Me;
class Ys {
  constructor(t, r) {
    We(this, Ie, void 0),
      We(this, xe, void 0),
      ze(this, Ie, t),
      ze(this, xe, r);
  }
  upload(t, r, n) {
    return Nr(Le(this, Ie), Le(this, xe), t, r, n);
  }
}
Ie = new WeakMap();
xe = new WeakMap();
class Ks {
  constructor(t, r) {
    We(this, je, void 0),
      We(this, Me, void 0),
      ze(this, je, t),
      ze(this, Me, r);
  }
  upload(t, r, n) {
    const s = Nr(Le(this, je), Le(this, Me), t, r, n);
    return T(
      s.pipe(
        ve((o) => o.type === "response"),
        K((o) => o.body.document)
      )
    );
  }
}
je = new WeakMap();
Me = new WeakMap();
function Nr(e, t, r, n) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  Ls(r);
  let o = s.extract || void 0;
  o && !o.length && (o = ["none"]);
  const i = dr(e.config()),
    a = r === "image" ? "images" : "files",
    c = Zs(s, n),
    {
      tag: l,
      label: d,
      title: w,
      description: g,
      creditLine: A,
      filename: b,
      source: p,
    } = c,
    h = {
      label: d,
      title: w,
      description: g,
      filename: b,
      meta: o,
      creditLine: A,
    };
  return (
    p && ((h.sourceId = p.id), (h.sourceName = p.name), (h.sourceUrl = p.url)),
    Ee(e, t, {
      tag: l,
      method: "POST",
      timeout: c.timeout || 0,
      uri: "/assets/".concat(a, "/").concat(i),
      headers: c.contentType ? { "Content-Type": c.contentType } : {},
      query: h,
      body: n,
    })
  );
}
function Zs(e, t) {
  return typeof File > "u" || !(t instanceof File)
    ? e
    : Object.assign(
        {
          filename: e.preserveFilename === !1 ? void 0 : t.name,
          contentType: t.type,
        },
        e
      );
}
const eo = "https://www.sanity.io/help/";
function bt(e) {
  return eo + e;
}
function to(e) {
  let t = !1,
    r;
  return function () {
    return t || ((r = e(...arguments)), (t = !0)), r;
  };
}
const vt = (e) =>
    to(function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return console.warn(e.join(" "), ...r);
    }),
  ro = vt([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
  ]),
  no = vt([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    "See ".concat(
      bt("js-client-browser-token"),
      " for more information and how to hide this warning."
    ),
  ]),
  so = vt([
    "Using the Sanity client without specifying an API version is deprecated.",
    "See ".concat(bt("js-client-api-version")),
  ]),
  oo = "apicdn.sanity.io",
  Fe = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
  },
  io = ["localhost", "127.0.0.1", "0.0.0.0"],
  ao = (e) => io.indexOf(e) !== -1,
  co = function (t) {
    if (t === "1" || t === "X") return;
    const r = new Date(t);
    if (
      !(/^\d{4}-\d{2}-\d{2}$/.test(t) && r instanceof Date && r.getTime() > 0)
    )
      throw new Error(
        "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
      );
  },
  Ur = (e, t) => {
    const r = Object.assign({}, t, e);
    r.apiVersion || so();
    const n = Object.assign({}, Fe, r),
      s = n.useProjectHostname;
    if (typeof Promise > "u") {
      const w = bt("js-client-promise-polyfill");
      throw new Error(
        "No native Promise-implementation found, polyfill needed - see ".concat(
          w
        )
      );
    }
    if (s && !n.projectId)
      throw new Error("Configuration must contain `projectId`");
    const o =
        typeof window < "u" && window.location && window.location.hostname,
      i = o && ao(window.location.hostname);
    o && i && n.token && n.ignoreBrowserTokenWarning !== !0
      ? no()
      : typeof n.useCdn > "u" && ro(),
      s && Hs(n.projectId),
      n.dataset && lr(n.dataset),
      "requestTagPrefix" in n &&
        (n.requestTagPrefix = n.requestTagPrefix
          ? hr(n.requestTagPrefix).replace(/\.+$/, "")
          : void 0),
      (n.apiVersion = "".concat(n.apiVersion).replace(/^v/, "")),
      (n.isDefaultApi = n.apiHost === Fe.apiHost),
      (n.useCdn = n.useCdn !== !1 && !n.withCredentials),
      co(n.apiVersion);
    const a = n.apiHost.split("://", 2),
      c = a[0],
      l = a[1],
      d = n.isDefaultApi ? oo : l;
    return (
      n.useProjectHostname
        ? ((n.url = ""
            .concat(c, "://")
            .concat(n.projectId, ".")
            .concat(l, "/v")
            .concat(n.apiVersion)),
          (n.cdnUrl = ""
            .concat(c, "://")
            .concat(n.projectId, ".")
            .concat(d, "/v")
            .concat(n.apiVersion)))
        : ((n.url = "".concat(n.apiHost, "/v").concat(n.apiVersion)),
          (n.cdnUrl = n.url)),
      n
    );
  };
var lo = (e, t) =>
  Object.keys(t)
    .concat(Object.keys(e))
    .reduce((r, n) => ((r[n] = typeof e[n] > "u" ? t[n] : e[n]), r), {});
const uo = (e, t) =>
    t.reduce((r, n) => (typeof e[n] > "u" || (r[n] = e[n]), r), {}),
  ho = 16e3 - 1200,
  fo = [
    "includePreviousRevision",
    "includeResult",
    "visibility",
    "effectFormat",
    "tag",
  ],
  po = { includeResult: !0 };
function Dr(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
      url: n,
      token: s,
      withCredentials: o,
      requestTagPrefix: i,
    } = this.config(),
    a = r.tag && i ? [i, r.tag].join(".") : r.tag,
    c = { ...lo(r, po), tag: a },
    l = uo(c, fo),
    d = fr({ query: e, params: t, options: { tag: a, ...l } }),
    w = "".concat(n).concat(ae(this, "listen", d));
  if (w.length > ho)
    return new be((p) => p.error(new Error("Query too large for listener")));
  const g = c.events ? c.events : ["mutation"],
    A = g.indexOf("reconnect") !== -1,
    b = {};
  return (
    (s || o) && (b.withCredentials = !0),
    s && (b.headers = { Authorization: "Bearer ".concat(s) }),
    new be((p) => {
      let h;
      S()
        .then((E) => {
          h = E;
        })
        .catch((E) => {
          p.error(E), N();
        });
      let v,
        u = !1;
      function y() {
        u ||
          (m(),
          !u &&
            h.readyState === h.CLOSED &&
            (z(), clearTimeout(v), (v = setTimeout(R, 100))));
      }
      function _(E) {
        p.error(mo(E));
      }
      function x(E) {
        const U = Hr(E);
        return U instanceof Error ? p.error(U) : p.next(U);
      }
      function W() {
        (u = !0), z(), p.complete();
      }
      function z() {
        h &&
          (h.removeEventListener("error", y),
          h.removeEventListener("channelError", _),
          h.removeEventListener("disconnect", W),
          g.forEach((E) => h.removeEventListener(E, x)),
          h.close());
      }
      function m() {
        A && p.next({ type: "reconnect" });
      }
      async function S() {
        const { default: E } = await Gr(
            () => import("./browser.448fb1b6.js").then((rt) => rt.b),
            [
              "_astro/browser.448fb1b6.js",
              "_astro/_commonjsHelpers.042e6b4d.js",
            ]
          ),
          U = new E(w, b);
        return (
          U.addEventListener("error", y),
          U.addEventListener("channelError", _),
          U.addEventListener("disconnect", W),
          g.forEach((rt) => U.addEventListener(rt, x)),
          U
        );
      }
      function R() {
        S()
          .then((E) => {
            h = E;
          })
          .catch((E) => {
            p.error(E), N();
          });
      }
      function N() {
        (u = !0), z();
      }
      return N;
    })
  );
}
function Hr(e) {
  try {
    const t = (e.data && JSON.parse(e.data)) || {};
    return Object.assign({ type: e.type }, t);
  } catch (t) {
    return t;
  }
}
function mo(e) {
  if (e instanceof Error) return e;
  const t = Hr(e);
  return t instanceof Error ? t : new Error(go(t));
}
function go(e) {
  return e.error
    ? e.error.description
      ? e.error.description
      : typeof e.error == "string"
      ? e.error
      : JSON.stringify(e.error, null, 2)
    : e.message || "Unknown listener error";
}
var Lr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  I = (e, t, r) => (
    Lr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Be = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Ve = (e, t, r, n) => (
    Lr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  V,
  J,
  G,
  X;
class yo {
  constructor(t, r) {
    Be(this, V, void 0), Be(this, J, void 0), Ve(this, V, t), Ve(this, J, r);
  }
  create(t, r) {
    return oe(I(this, V), I(this, J), "PUT", t, r);
  }
  edit(t, r) {
    return oe(I(this, V), I(this, J), "PATCH", t, r);
  }
  delete(t) {
    return oe(I(this, V), I(this, J), "DELETE", t);
  }
  list() {
    return k(I(this, V), I(this, J), { uri: "/datasets" });
  }
}
V = new WeakMap();
J = new WeakMap();
class wo {
  constructor(t, r) {
    Be(this, G, void 0), Be(this, X, void 0), Ve(this, G, t), Ve(this, X, r);
  }
  create(t, r) {
    return T(oe(I(this, G), I(this, X), "PUT", t, r));
  }
  edit(t, r) {
    return T(oe(I(this, G), I(this, X), "PATCH", t, r));
  }
  delete(t) {
    return T(oe(I(this, G), I(this, X), "DELETE", t));
  }
  list() {
    return T(k(I(this, G), I(this, X), { uri: "/datasets" }));
  }
}
G = new WeakMap();
X = new WeakMap();
function oe(e, t, r, n, s) {
  return lr(n), k(e, t, { method: r, uri: "/datasets/".concat(n), body: s });
}
var Wr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  L = (e, t, r) => (
    Wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Je = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Ge = (e, t, r, n) => (
    Wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  de,
  he,
  fe,
  pe;
class bo {
  constructor(t, r) {
    Je(this, de, void 0),
      Je(this, he, void 0),
      Ge(this, de, t),
      Ge(this, he, r);
  }
  list() {
    return k(L(this, de), L(this, he), { uri: "/projects" });
  }
  getById(t) {
    return k(L(this, de), L(this, he), { uri: "/projects/".concat(t) });
  }
}
de = new WeakMap();
he = new WeakMap();
class vo {
  constructor(t, r) {
    Je(this, fe, void 0),
      Je(this, pe, void 0),
      Ge(this, fe, t),
      Ge(this, pe, r);
  }
  list() {
    return T(k(L(this, fe), L(this, pe), { uri: "/projects" }));
  }
  getById(t) {
    return T(k(L(this, fe), L(this, pe), { uri: "/projects/".concat(t) }));
  }
}
fe = new WeakMap();
pe = new WeakMap();
var zr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  Xe = (e, t, r) => (
    zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Qe = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Ye = (e, t, r, n) => (
    zr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  Pe,
  ke,
  qe,
  Ne;
class So {
  constructor(t, r) {
    Qe(this, Pe, void 0),
      Qe(this, ke, void 0),
      Ye(this, Pe, t),
      Ye(this, ke, r);
  }
  getById(t) {
    return k(Xe(this, Pe), Xe(this, ke), { uri: "/users/".concat(t) });
  }
}
Pe = new WeakMap();
ke = new WeakMap();
class Eo {
  constructor(t, r) {
    Qe(this, qe, void 0),
      Qe(this, Ne, void 0),
      Ye(this, qe, t),
      Ye(this, Ne, r);
  }
  getById(t) {
    return T(k(Xe(this, qe), Xe(this, Ne), { uri: "/users/".concat(t) }));
  }
}
qe = new WeakMap();
Ne = new WeakMap();
var Fr = (e, t, r) => {
    if (!t.has(e)) throw TypeError("Cannot " + r);
  },
  f = (e, t, r) => (
    Fr(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  Ke = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  Ze = (e, t, r, n) => (
    Fr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  ),
  Q,
  O,
  Y,
  C;
const ft = class {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe;
    Ke(this, Q, void 0),
      Ke(this, O, void 0),
      (this.listen = Dr),
      this.config(t),
      Ze(this, O, e),
      (this.assets = new Ys(this, f(this, O))),
      (this.datasets = new yo(this, f(this, O))),
      (this.projects = new bo(this, f(this, O))),
      (this.users = new So(this, f(this, O)));
  }
  clone() {
    return new ft(f(this, O), this.config());
  }
  config(e) {
    if (e === void 0) return { ...f(this, Q) };
    if (f(this, Q) && f(this, Q).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return Ze(this, Q, Ur(e, f(this, Q) || {})), this;
  }
  withConfig(e) {
    return new ft(f(this, O), { ...this.config(), ...e });
  }
  fetch(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Tr(this, f(this, O), e, t, r);
  }
  getDocument(e, t) {
    return Ir(this, f(this, O), e, t);
  }
  getDocuments(e, t) {
    return xr(this, f(this, O), e, t);
  }
  create(e, t) {
    return tt(this, f(this, O), e, "create", t);
  }
  createIfNotExists(e, t) {
    return jr(this, f(this, O), e, t);
  }
  createOrReplace(e, t) {
    return Mr(this, f(this, O), e, t);
  }
  delete(e, t) {
    return Pr(this, f(this, O), e, t);
  }
  mutate(e, t) {
    return kr(this, f(this, O), e, t);
  }
  patch(e, t) {
    return new ye(e, t, this);
  }
  transaction(e) {
    return new Or(e, this);
  }
  request(e) {
    return k(this, f(this, O), e);
  }
  getUrl(e, t) {
    return wt(this, e, t);
  }
  getDataUrl(e, t) {
    return ae(this, e, t);
  }
};
let $o = ft;
Q = new WeakMap();
O = new WeakMap();
const pt = class {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe;
    Ke(this, Y, void 0),
      Ke(this, C, void 0),
      (this.listen = Dr),
      this.config(t),
      Ze(this, C, e),
      (this.assets = new Ks(this, f(this, C))),
      (this.datasets = new wo(this, f(this, C))),
      (this.projects = new vo(this, f(this, C))),
      (this.users = new Eo(this, f(this, C))),
      (this.observable = new $o(e, t));
  }
  clone() {
    return new pt(f(this, C), this.config());
  }
  config(e) {
    if (e === void 0) return { ...f(this, Y) };
    if (f(this, Y) && f(this, Y).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return (
      this.observable && this.observable.config(e),
      Ze(this, Y, Ur(e, f(this, Y) || {})),
      this
    );
  }
  withConfig(e) {
    return new pt(f(this, C), { ...this.config(), ...e });
  }
  fetch(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return T(Tr(this, f(this, C), e, t, r));
  }
  getDocument(e, t) {
    return T(Ir(this, f(this, C), e, t));
  }
  getDocuments(e, t) {
    return T(xr(this, f(this, C), e, t));
  }
  create(e, t) {
    return T(tt(this, f(this, C), e, "create", t));
  }
  createIfNotExists(e, t) {
    return T(jr(this, f(this, C), e, t));
  }
  createOrReplace(e, t) {
    return T(Mr(this, f(this, C), e, t));
  }
  delete(e, t) {
    return T(Pr(this, f(this, C), e, t));
  }
  mutate(e, t) {
    return T(kr(this, f(this, C), e, t));
  }
  patch(e, t) {
    return new we(e, t, this);
  }
  transaction(e) {
    return new Cr(e, this);
  }
  request(e) {
    return T(k(this, f(this, C), e));
  }
  dataRequest(e, t, r) {
    return T(Se(this, f(this, C), e, t, r));
  }
  getUrl(e, t) {
    return wt(this, e, t);
  }
  getDataUrl(e, t) {
    return ae(this, e, t);
  }
};
let Ao = pt;
Y = new WeakMap();
C = new WeakMap();
const _o = ar(or, {});
_o.defaultRequester;
const Co = (e) =>
    new Ao(ar(or, { maxRetries: e.maxRetries, retryDelay: e.retryDelay }), e),
  Br = Co({
    projectId: "6jywt20u",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: !0,
  });
Mt(Br);
const xo = Mt(Br),
  jo = (
    e,
    { x: t = 0, y: r = 0 },
    {
      duration: n = nt.duration,
      easing: s = nt.easingFunction,
      delay: o = nt.delay,
    } = {}
  ) => {
    e &&
      ((e.style.transform = `translate3d(${t}%, ${r}%, 0)`),
      (e.style.transition = `transform ${n}ms ${s} ${o}ms`));
  };
let Mo = (e) => {
  const t = e.getBoundingClientRect().top,
    r = e.offsetHeight,
    n = t / (r - window.innerHeight);
  return Math.min(1, Math.max(-1, n));
};
const Po = (e) => new Promise((t) => setTimeout(t, e)),
  ko = (e) => {
    let t = 0,
      r = 0;
    return (
      typeof window < "u" &&
        ((t = e.clientX / window.innerWidth - 0.5),
        (r = e.clientY / window.innerHeight - 0.5)),
      { x: t, y: r }
    );
  };
export {
  Mo as a,
  nt as b,
  jo as c,
  Po as d,
  ko as e,
  Ue as f,
  Oo as g,
  is as h,
  xo as i,
  To as j,
  Io as n,
  Br as s,
};

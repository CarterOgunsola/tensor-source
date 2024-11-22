(function (Rr) {
  typeof define == "function" && define.amd ? define(Rr) : Rr();
})(function () {
  "use strict";
  var Rr = document.createElement("style");
  (Rr.textContent = `body{margin:0;padding:0}.swiper-slide{height:auto!important;display:flex!important;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease}.swiper-slide-active{opacity:1!important;visibility:visible!important}[data-button-next] [data-hover-path],[data-button-prev] [data-hover-path]{stroke-dasharray:var(--length);stroke-dashoffset:var(--length);transition:stroke-dashoffset .5s ease}[data-button-next]:hover [data-hover-path],[data-button-prev]:hover [data-hover-path]{stroke-dashoffset:0}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}
  `),
    document.head.appendChild(Rr);
  function Yf() {
    console.log("Button hover effects applied.");
  }
  function Vf() {
    console.log("Navigation dropdown setup completed.");
  }
  function $f() {
    Yf(), Vf();
  }
  function ea(s) {
    return (
      s !== null &&
      typeof s == "object" &&
      "constructor" in s &&
      s.constructor === Object
    );
  }
  function Ss(s, e) {
    s === void 0 && (s = {}),
      e === void 0 && (e = {}),
      Object.keys(e).forEach((t) => {
        typeof s[t] > "u"
          ? (s[t] = e[t])
          : ea(e[t]) &&
            ea(s[t]) &&
            Object.keys(e[t]).length > 0 &&
            Ss(s[t], e[t]);
      });
  }
  const ta = {
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
  function lr() {
    const s = typeof document < "u" ? document : {};
    return Ss(s, ta), s;
  }
  const Xf = {
    document: ta,
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
    requestAnimationFrame(s) {
      return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
    },
    cancelAnimationFrame(s) {
      typeof setTimeout > "u" || clearTimeout(s);
    },
  };
  function pt() {
    const s = typeof window < "u" ? window : {};
    return Ss(s, Xf), s;
  }
  function Hf(s) {
    return (
      s === void 0 && (s = ""),
      s
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Wf(s) {
    const e = s;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {}
      try {
        delete e[t];
      } catch {}
    });
  }
  function As(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function Mn() {
    return Date.now();
  }
  function qf(s) {
    const e = pt();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(s, null)),
      !t && s.currentStyle && (t = s.currentStyle),
      t || (t = s.style),
      t
    );
  }
  function Uf(s, e) {
    e === void 0 && (e = "x");
    const t = pt();
    let i, r, n;
    const o = qf(s);
    return (
      t.WebKitCSSMatrix
        ? ((r = o.transform || o.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (n = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((n =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = n.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (r = n.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (r = n.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function Cn(s) {
    return (
      typeof s == "object" &&
      s !== null &&
      s.constructor &&
      Object.prototype.toString.call(s).slice(8, -1) === "Object"
    );
  }
  function jf(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? s instanceof HTMLElement
      : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function ht() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !jf(i)) {
        const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, o = r.length; n < o; n += 1) {
          const a = r[n],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (Cn(s[a]) && Cn(i[a])
              ? i[a].__swiper__
                ? (s[a] = i[a])
                : ht(s[a], i[a])
              : !Cn(s[a]) && Cn(i[a])
              ? ((s[a] = {}), i[a].__swiper__ ? (s[a] = i[a]) : ht(s[a], i[a]))
              : (s[a] = i[a]));
        }
      }
    }
    return s;
  }
  function kn(s, e, t) {
    s.style.setProperty(e, t);
  }
  function ia(s) {
    let { swiper: e, targetPosition: t, side: i } = s;
    const r = pt(),
      n = -e.translate;
    let o = null,
      a;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const f = t > n ? "next" : "prev",
      u = (d, c) => (f === "next" && d >= c) || (f === "prev" && d <= c),
      p = () => {
        (a = new Date().getTime()), o === null && (o = a);
        const d = Math.max(Math.min((a - o) / l, 1), 0),
          c = 0.5 - Math.cos(d * Math.PI) / 2;
        let g = n + c * (t - n);
        if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [i]: g }), u(g, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: g });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(p);
      };
    p();
  }
  function ra(s) {
    return (
      s.querySelector(".swiper-slide-transform") ||
      (s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
      s
    );
  }
  function Xt(s, e) {
    e === void 0 && (e = "");
    const t = [...s.children];
    return (
      s instanceof HTMLSlotElement && t.push(...s.assignedElements()),
      e ? t.filter((i) => i.matches(e)) : t
    );
  }
  function Qf(s, e) {
    const t = e.contains(s);
    return !t && e instanceof HTMLSlotElement
      ? [...e.assignedElements()].includes(s)
      : t;
  }
  function On(s) {
    try {
      console.warn(s);
      return;
    } catch {}
  }
  function Dn(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...(Array.isArray(e) ? e : Hf(e))), t;
  }
  function Zf(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function Kf(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
    }
    return t;
  }
  function hi(s, e) {
    return pt().getComputedStyle(s, null).getPropertyValue(e);
  }
  function na(s) {
    let e = s,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Jf(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function eu(s, e) {
    function t(i) {
      i.target === s &&
        (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function sa(s, e, t) {
    const i = pt();
    return t
      ? s[e === "width" ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(s, null)
              .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(s, null)
              .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
          )
      : s.offsetWidth;
  }
  function ii(s) {
    return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
  }
  let Ps;
  function tu() {
    const s = pt(),
      e = lr();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in s ||
        (s.DocumentTouch && e instanceof s.DocumentTouch)
      ),
    };
  }
  function oa() {
    return Ps || (Ps = tu()), Ps;
  }
  let Es;
  function iu(s) {
    let { userAgent: e } = s === void 0 ? {} : s;
    const t = oa(),
      i = pt(),
      r = i.navigator.platform,
      n = e || i.navigator.userAgent,
      o = { ios: !1, android: !1 },
      a = i.screen.width,
      l = i.screen.height,
      f = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
      d = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      c = r === "Win32";
    let g = r === "MacIntel";
    const h = [
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
      !u &&
        g &&
        t.touch &&
        h.indexOf(`${a}x${l}`) >= 0 &&
        ((u = n.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (g = !1)),
      f && !c && ((o.os = "android"), (o.android = !0)),
      (u || d || p) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function aa(s) {
    return s === void 0 && (s = {}), Es || (Es = iu(s)), Es;
  }
  let Ms;
  function ru() {
    const s = pt(),
      e = aa();
    let t = !1;
    function i() {
      const a = s.navigator.userAgent.toLowerCase();
      return (
        a.indexOf("safari") >= 0 &&
        a.indexOf("chrome") < 0 &&
        a.indexOf("android") < 0
      );
    }
    if (i()) {
      const a = String(s.navigator.userAgent);
      if (a.includes("Version/")) {
        const [l, f] = a
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((u) => Number(u));
        t = l < 16 || (l === 16 && f < 2);
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        s.navigator.userAgent
      ),
      n = i(),
      o = n || (r && e.ios);
    return {
      isSafari: t || n,
      needPerspectiveFix: t,
      need3dFix: o,
      isWebView: r,
    };
  }
  function nu() {
    return Ms || (Ms = ru()), Ms;
  }
  function su(s) {
    let { swiper: e, on: t, emit: i } = s;
    const r = pt();
    let n = null,
      o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((n = new ResizeObserver((p) => {
            o = r.requestAnimationFrame(() => {
              const { width: d, height: c } = e;
              let g = d,
                h = c;
              p.forEach((_) => {
                let { contentBoxSize: m, contentRect: w, target: y } = _;
                (y && y !== e.el) ||
                  ((g = w ? w.width : (m[0] || m).inlineSize),
                  (h = w ? w.height : (m[0] || m).blockSize));
              }),
                (g !== d || h !== c) && a();
            });
          })),
          n.observe(e.el));
      },
      f = () => {
        o && r.cancelAnimationFrame(o),
          n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
      },
      u = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", a),
        r.addEventListener("orientationchange", u);
    }),
      t("destroy", () => {
        f(),
          r.removeEventListener("resize", a),
          r.removeEventListener("orientationchange", u);
      });
  }
  function ou(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    const n = [],
      o = pt(),
      a = function (u, p) {
        p === void 0 && (p = {});
        const d = o.MutationObserver || o.WebkitMutationObserver,
          c = new d((g) => {
            if (e.__preventObserver__) return;
            if (g.length === 1) {
              r("observerUpdate", g[0]);
              return;
            }
            const h = function () {
              r("observerUpdate", g[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(h)
              : o.setTimeout(h, 0);
          });
        c.observe(u, {
          attributes: typeof p.attributes > "u" ? !0 : p.attributes,
          childList:
            e.isElement || (typeof p.childList > "u" ? !0 : p).childList,
          characterData: typeof p.characterData > "u" ? !0 : p.characterData,
        }),
          n.push(c);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const u = Jf(e.hostEl);
            for (let p = 0; p < u.length; p += 1) a(u[p]);
          }
          a(e.hostEl, { childList: e.params.observeSlideChildren }),
            a(e.wrapperEl, { attributes: !1 });
        }
      },
      f = () => {
        n.forEach((u) => {
          u.disconnect();
        }),
          n.splice(0, n.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", f);
  }
  var au = {
    on(s, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return (
        s.split(" ").forEach((n) => {
          i.eventsListeners[n] || (i.eventsListeners[n] = []),
            i.eventsListeners[n][r](e);
        }),
        i
      );
    },
    once(s, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r() {
        i.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        e.apply(i, o);
      }
      return (r.__emitterProxy = e), i.on(s, r, t);
    },
    onAny(s, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t
      );
    },
    offAny(s) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(s);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(s, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          s.split(" ").forEach((i) => {
            typeof e > "u"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((r, n) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(n, 1);
                });
          }),
        t
      );
    },
    emit() {
      const s = this;
      if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
      let e, t, i;
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        typeof n[0] == "string" || Array.isArray(n[0])
          ? ((e = n[0]), (t = n.slice(1, n.length)), (i = s))
          : ((e = n[0].events), (t = n[0].data), (i = n[0].context || s)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          s.eventsAnyListeners &&
            s.eventsAnyListeners.length &&
            s.eventsAnyListeners.forEach((f) => {
              f.apply(i, [l, ...t]);
            }),
            s.eventsListeners &&
              s.eventsListeners[l] &&
              s.eventsListeners[l].forEach((f) => {
                f.apply(i, t);
              });
        }),
        s
      );
    },
  };
  function lu() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width < "u" && s.params.width !== null
      ? (e = s.params.width)
      : (e = i.clientWidth),
      typeof s.params.height < "u" && s.params.height !== null
        ? (t = s.params.height)
        : (t = i.clientHeight),
      !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
        ((e =
          e -
          parseInt(hi(i, "padding-left") || 0, 10) -
          parseInt(hi(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(hi(i, "padding-top") || 0, 10) -
          parseInt(hi(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(s, {
          width: e,
          height: t,
          size: s.isHorizontal() ? e : t,
        }));
  }
  function fu() {
    const s = this;
    function e(S, k) {
      return parseFloat(S.getPropertyValue(s.getDirectionLabel(k)) || 0);
    }
    const t = s.params,
      { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: a } = s,
      l = s.virtual && t.virtual.enabled,
      f = l ? s.virtual.slides.length : s.slides.length,
      u = Xt(r, `.${s.params.slideClass}, swiper-slide`),
      p = l ? s.virtual.slides.length : u.length;
    let d = [];
    const c = [],
      g = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(s));
    let _ = t.slidesOffsetAfter;
    typeof _ == "function" && (_ = t.slidesOffsetAfter.call(s));
    const m = s.snapGrid.length,
      w = s.slidesGrid.length;
    let y = t.spaceBetween,
      v = -h,
      x = 0,
      T = 0;
    if (typeof n > "u") return;
    typeof y == "string" && y.indexOf("%") >= 0
      ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
      : typeof y == "string" && (y = parseFloat(y)),
      (s.virtualSize = -y),
      u.forEach((S) => {
        o ? (S.style.marginLeft = "") : (S.style.marginRight = ""),
          (S.style.marginBottom = ""),
          (S.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (kn(i, "--swiper-centered-offset-before", ""),
        kn(i, "--swiper-centered-offset-after", ""));
    const A = t.grid && t.grid.rows > 1 && s.grid;
    A ? s.grid.initSlides(u) : s.grid && s.grid.unsetSlides();
    let E;
    const P =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (S) => typeof t.breakpoints[S].slidesPerView < "u"
      ).length > 0;
    for (let S = 0; S < p; S += 1) {
      E = 0;
      let k;
      if (
        (u[S] && (k = u[S]),
        A && s.grid.updateSlide(S, k, u),
        !(u[S] && hi(k, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          P && (u[S].style[s.getDirectionLabel("width")] = "");
          const C = getComputedStyle(k),
            O = k.style.transform,
            I = k.style.webkitTransform;
          if (
            (O && (k.style.transform = "none"),
            I && (k.style.webkitTransform = "none"),
            t.roundLengths)
          )
            E = s.isHorizontal() ? sa(k, "width", !0) : sa(k, "height", !0);
          else {
            const L = e(C, "width"),
              R = e(C, "padding-left"),
              F = e(C, "padding-right"),
              $ = e(C, "margin-left"),
              J = e(C, "margin-right"),
              b = C.getPropertyValue("box-sizing");
            if (b && b === "border-box") E = L + $ + J;
            else {
              const { clientWidth: W, offsetWidth: Ae } = k;
              E = L + R + F + $ + J + (Ae - W);
            }
          }
          O && (k.style.transform = O),
            I && (k.style.webkitTransform = I),
            t.roundLengths && (E = Math.floor(E));
        } else
          (E = (n - (t.slidesPerView - 1) * y) / t.slidesPerView),
            t.roundLengths && (E = Math.floor(E)),
            u[S] && (u[S].style[s.getDirectionLabel("width")] = `${E}px`);
        u[S] && (u[S].swiperSlideSize = E),
          g.push(E),
          t.centeredSlides
            ? ((v = v + E / 2 + x / 2 + y),
              x === 0 && S !== 0 && (v = v - n / 2 - y),
              S === 0 && (v = v - n / 2 - y),
              Math.abs(v) < 1 / 1e3 && (v = 0),
              t.roundLengths && (v = Math.floor(v)),
              T % t.slidesPerGroup === 0 && d.push(v),
              c.push(v))
            : (t.roundLengths && (v = Math.floor(v)),
              (T - Math.min(s.params.slidesPerGroupSkip, T)) %
                s.params.slidesPerGroup ===
                0 && d.push(v),
              c.push(v),
              (v = v + E + y)),
          (s.virtualSize += E + y),
          (x = E),
          (T += 1);
      }
    }
    if (
      ((s.virtualSize = Math.max(s.virtualSize, n) + _),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${s.virtualSize + y}px`),
      t.setWrapperSize &&
        (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + y}px`),
      A && s.grid.updateWrapperSize(E, d),
      !t.centeredSlides)
    ) {
      const S = [];
      for (let k = 0; k < d.length; k += 1) {
        let C = d[k];
        t.roundLengths && (C = Math.floor(C)),
          d[k] <= s.virtualSize - n && S.push(C);
      }
      (d = S),
        Math.floor(s.virtualSize - n) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(s.virtualSize - n);
    }
    if (l && t.loop) {
      const S = g[0] + y;
      if (t.slidesPerGroup > 1) {
        const k = Math.ceil(
            (s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
          ),
          C = S * t.slidesPerGroup;
        for (let O = 0; O < k; O += 1) d.push(d[d.length - 1] + C);
      }
      for (
        let k = 0;
        k < s.virtual.slidesBefore + s.virtual.slidesAfter;
        k += 1
      )
        t.slidesPerGroup === 1 && d.push(d[d.length - 1] + S),
          c.push(c[c.length - 1] + S),
          (s.virtualSize += S);
    }
    if ((d.length === 0 && (d = [0]), y !== 0)) {
      const S =
        s.isHorizontal() && o
          ? "marginLeft"
          : s.getDirectionLabel("marginRight");
      u.filter((k, C) =>
        !t.cssMode || t.loop ? !0 : C !== u.length - 1
      ).forEach((k) => {
        k.style[S] = `${y}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let S = 0;
      g.forEach((C) => {
        S += C + (y || 0);
      }),
        (S -= y);
      const k = S > n ? S - n : 0;
      d = d.map((C) => (C <= 0 ? -h : C > k ? k + _ : C));
    }
    if (t.centerInsufficientSlides) {
      let S = 0;
      g.forEach((C) => {
        S += C + (y || 0);
      }),
        (S -= y);
      const k = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (S + k < n) {
        const C = (n - S - k) / 2;
        d.forEach((O, I) => {
          d[I] = O - C;
        }),
          c.forEach((O, I) => {
            c[I] = O + C;
          });
      }
    }
    if (
      (Object.assign(s, {
        slides: u,
        snapGrid: d,
        slidesGrid: c,
        slidesSizesGrid: g,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      kn(i, "--swiper-centered-offset-before", `${-d[0]}px`),
        kn(
          i,
          "--swiper-centered-offset-after",
          `${s.size / 2 - g[g.length - 1] / 2}px`
        );
      const S = -s.snapGrid[0],
        k = -s.slidesGrid[0];
      (s.snapGrid = s.snapGrid.map((C) => C + S)),
        (s.slidesGrid = s.slidesGrid.map((C) => C + k));
    }
    if (
      (p !== f && s.emit("slidesLengthChange"),
      d.length !== m &&
        (s.params.watchOverflow && s.checkOverflow(),
        s.emit("snapGridLengthChange")),
      c.length !== w && s.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && s.updateSlidesOffset(),
      s.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const S = `${t.containerModifierClass}backface-hidden`,
        k = s.el.classList.contains(S);
      p <= t.maxBackfaceHiddenSlides
        ? k || s.el.classList.add(S)
        : k && s.el.classList.remove(S);
    }
  }
  function uu(s) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      n;
    typeof s == "number"
      ? e.setTransition(s)
      : s === !0 && e.setTransition(e.params.speed);
    const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((a) => {
          t.push(a);
        });
      else
        for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
          const a = e.activeIndex + n;
          if (a > e.slides.length && !i) break;
          t.push(o(a));
        }
    else t.push(o(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
      if (typeof t[n] < "u") {
        const a = t[n].offsetHeight;
        r = a > r ? a : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function cu() {
    const s = this,
      e = s.slides,
      t = s.isElement
        ? s.isHorizontal()
          ? s.wrapperEl.offsetLeft
          : s.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        s.cssOverflowAdjustment();
  }
  const la = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function du(s) {
    s === void 0 && (s = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: n } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -s;
    r && (o = s), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      let u = f.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
      const p =
          (o + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (f.swiperSlideSize + a),
        d =
          (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (f.swiperSlideSize + a),
        c = -(o - u),
        g = c + e.slidesSizesGrid[l],
        h = c >= 0 && c <= e.size - e.slidesSizesGrid[l],
        _ =
          (c >= 0 && c < e.size - 1) ||
          (g > 1 && g <= e.size) ||
          (c <= 0 && g >= e.size);
      _ && (e.visibleSlides.push(f), e.visibleSlidesIndexes.push(l)),
        la(f, _, t.slideVisibleClass),
        la(f, h, t.slideFullyVisibleClass),
        (f.progress = r ? -p : p),
        (f.originalProgress = r ? -d : d);
    }
  }
  function pu(s) {
    const e = this;
    if (typeof s > "u") {
      const u = e.rtlTranslate ? -1 : 1;
      s = (e && e.translate && e.translate * u) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: n, isEnd: o, progressLoop: a } = e;
    const l = n,
      f = o;
    if (i === 0) (r = 0), (n = !0), (o = !0);
    else {
      r = (s - e.minTranslate()) / i;
      const u = Math.abs(s - e.minTranslate()) < 1,
        p = Math.abs(s - e.maxTranslate()) < 1;
      (n = u || r <= 0), (o = p || r >= 1), u && (r = 0), p && (r = 1);
    }
    if (t.loop) {
      const u = e.getSlideIndexByData(0),
        p = e.getSlideIndexByData(e.slides.length - 1),
        d = e.slidesGrid[u],
        c = e.slidesGrid[p],
        g = e.slidesGrid[e.slidesGrid.length - 1],
        h = Math.abs(s);
      h >= d ? (a = (h - d) / g) : (a = (h + g - c) / g), a > 1 && (a -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: a,
      isBeginning: n,
      isEnd: o,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(s),
      n && !l && e.emit("reachBeginning toEdge"),
      o && !f && e.emit("reachEnd toEdge"),
      ((l && !n) || (f && !o)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Cs = (s, e, t) => {
    e && !s.classList.contains(t)
      ? s.classList.add(t)
      : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function hu() {
    const s = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
      n = s.virtual && t.virtual.enabled,
      o = s.grid && t.grid && t.grid.rows > 1,
      a = (p) => Xt(i, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
    let l, f, u;
    if (n)
      if (t.loop) {
        let p = r - s.virtual.slidesBefore;
        p < 0 && (p = s.virtual.slides.length + p),
          p >= s.virtual.slides.length && (p -= s.virtual.slides.length),
          (l = a(`[data-swiper-slide-index="${p}"]`));
      } else l = a(`[data-swiper-slide-index="${r}"]`);
    else
      o
        ? ((l = e.filter((p) => p.column === r)[0]),
          (u = e.filter((p) => p.column === r + 1)[0]),
          (f = e.filter((p) => p.column === r - 1)[0]))
        : (l = e[r]);
    l &&
      (o ||
        ((u = Kf(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u && (u = e[0]),
        (f = Zf(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !f === 0 && (f = e[e.length - 1]))),
      e.forEach((p) => {
        Cs(p, p === l, t.slideActiveClass),
          Cs(p, p === u, t.slideNextClass),
          Cs(p, p === f, t.slidePrevClass);
      }),
      s.emitSlidesClasses();
  }
  const zn = (s, e) => {
      if (!s || s.destroyed || !s.params) return;
      const t = () =>
          s.isElement ? "swiper-slide" : `.${s.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
        !r &&
          s.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${s.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${s.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    ks = (s, e) => {
      if (!s.slides[e]) return;
      const t = s.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Os = (s) => {
      if (!s || s.destroyed || !s.params) return;
      let e = s.params.lazyPreloadPrevNext;
      const t = s.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          s.params.slidesPerView === "auto"
            ? s.slidesPerViewDynamic()
            : Math.ceil(s.params.slidesPerView),
        r = s.activeIndex;
      if (s.params.grid && s.params.grid.rows > 1) {
        const o = r,
          a = [o - e];
        a.push(...Array.from({ length: e }).map((l, f) => o + i + f)),
          s.slides.forEach((l, f) => {
            a.includes(l.column) && ks(s, f);
          });
        return;
      }
      const n = r + i - 1;
      if (s.params.rewind || s.params.loop)
        for (let o = r - e; o <= n + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < r || a > n) && ks(s, a);
        }
      else
        for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1)
          o !== r && (o > n || o < r) && ks(s, o);
    };
  function gu(s) {
    const { slidesGrid: e, params: t } = s,
      i = s.rtlTranslate ? s.translate : -s.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
      typeof e[n + 1] < "u"
        ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2
          ? (r = n)
          : i >= e[n] && i < e[n + 1] && (r = n + 1)
        : i >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function mu(s) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: n,
        realIndex: o,
        snapIndex: a,
      } = e;
    let l = s,
      f;
    const u = (c) => {
      let g = c - e.virtual.slidesBefore;
      return (
        g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
      );
    };
    if ((typeof l > "u" && (l = gu(e)), i.indexOf(t) >= 0)) f = i.indexOf(t);
    else {
      const c = Math.min(r.slidesPerGroupSkip, l);
      f = c + Math.floor((l - c) / r.slidesPerGroup);
    }
    if ((f >= i.length && (f = i.length - 1), l === n && !e.params.loop)) {
      f !== a && ((e.snapIndex = f), e.emit("snapIndexChange"));
      return;
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = u(l);
      return;
    }
    const p = e.grid && r.grid && r.grid.rows > 1;
    let d;
    if (e.virtual && r.virtual.enabled && r.loop) d = u(l);
    else if (p) {
      const c = e.slides.filter((h) => h.column === l)[0];
      let g = parseInt(c.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(c), 0)),
        (d = Math.floor(g / r.grid.rows));
    } else if (e.slides[l]) {
      const c = e.slides[l].getAttribute("data-swiper-slide-index");
      c ? (d = parseInt(c, 10)) : (d = l);
    } else d = l;
    Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: f,
      previousRealIndex: o,
      realIndex: d,
      previousIndex: n,
      activeIndex: l,
    }),
      e.initialized && Os(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== d && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function _u(s, e) {
    const t = this,
      i = t.params;
    let r = s.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(s) &&
      [...e.slice(e.indexOf(s) + 1, e.length)].forEach((a) => {
        !r &&
          a.matches &&
          a.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = a);
      });
    let n = !1,
      o;
    if (r) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === r) {
          (n = !0), (o = a);
          break;
        }
    }
    if (r && n)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = o);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var vu = {
    updateSize: lu,
    updateSlides: fu,
    updateAutoHeight: uu,
    updateSlidesOffset: cu,
    updateSlidesProgress: du,
    updateProgress: pu,
    updateSlidesClasses: hu,
    updateActiveIndex: mu,
    updateClickedSlide: _u,
  };
  function wu(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = Uf(n, s);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function yu(s, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: n, progress: o } = t;
    let a = 0,
      l = 0;
    const f = 0;
    t.isHorizontal() ? (a = i ? -s : s) : (l = s),
      r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? a : l),
      r.cssMode
        ? (n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -a
            : -l)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (a -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (n.style.transform = `translate3d(${a}px, ${l}px, ${f}px)`));
    let u;
    const p = t.maxTranslate() - t.minTranslate();
    p === 0 ? (u = 0) : (u = (s - t.minTranslate()) / p),
      u !== o && t.updateProgress(s),
      t.emit("setTranslate", t.translate, e);
  }
  function xu() {
    return -this.snapGrid[0];
  }
  function bu() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Tu(s, e, t, i, r) {
    s === void 0 && (s = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const n = this,
      { params: o, wrapperEl: a } = n;
    if (n.animating && o.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(),
      f = n.maxTranslate();
    let u;
    if (
      (i && s > l ? (u = l) : i && s < f ? (u = f) : (u = s),
      n.updateProgress(u),
      o.cssMode)
    ) {
      const p = n.isHorizontal();
      if (e === 0) a[p ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!n.support.smoothScroll)
          return (
            ia({ swiper: n, targetPosition: -u, side: p ? "left" : "top" }), !0
          );
        a.scrollTo({ [p ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (n.setTransition(0),
          n.setTranslate(u),
          t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
        : (n.setTransition(e),
          n.setTranslate(u),
          t &&
            (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
          n.animating ||
            ((n.animating = !0),
            n.onTranslateToWrapperTransitionEnd ||
              (n.onTranslateToWrapperTransitionEnd = function (d) {
                !n ||
                  n.destroyed ||
                  (d.target === this &&
                    (n.wrapperEl.removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    (n.animating = !1),
                    t && n.emit("transitionEnd")));
              }),
            n.wrapperEl.addEventListener(
              "transitionend",
              n.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Su = {
    getTranslate: wu,
    setTranslate: yu,
    minTranslate: xu,
    maxTranslate: bu,
    translateTo: Tu,
  };
  function Au(s, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${s}ms`),
      (t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
      t.emit("setTransition", s, e);
  }
  function fa(s) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = s;
    const { activeIndex: n, previousIndex: o } = e;
    let a = i;
    if (
      (a || (n > o ? (a = "next") : n < o ? (a = "prev") : (a = "reset")),
      e.emit(`transition${r}`),
      t && n !== o)
    ) {
      if (a === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        a === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function Pu(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      fa({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
  }
  function Eu(s, e) {
    s === void 0 && (s = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        fa({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
  }
  var Mu = { setTransition: Au, transitionStart: Pu, transitionEnd: Eu };
  function Cu(s, e, t, i, r) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let o = s;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: l,
      slidesGrid: f,
      previousIndex: u,
      activeIndex: p,
      rtlTranslate: d,
      wrapperEl: c,
      enabled: g,
    } = n;
    if (
      (!g && !i && !r) ||
      n.destroyed ||
      (n.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = n.params.speed);
    const h = Math.min(n.params.slidesPerGroupSkip, o);
    let _ = h + Math.floor((o - h) / n.params.slidesPerGroup);
    _ >= l.length && (_ = l.length - 1);
    const m = -l[_];
    if (a.normalizeSlideIndex)
      for (let x = 0; x < f.length; x += 1) {
        const T = -Math.floor(m * 100),
          A = Math.floor(f[x] * 100),
          E = Math.floor(f[x + 1] * 100);
        typeof f[x + 1] < "u"
          ? T >= A && T < E - (E - A) / 2
            ? (o = x)
            : T >= A && T < E && (o = x + 1)
          : T >= A && (o = x);
      }
    if (
      n.initialized &&
      o !== p &&
      ((!n.allowSlideNext &&
        (d
          ? m > n.translate && m > n.minTranslate()
          : m < n.translate && m < n.minTranslate())) ||
        (!n.allowSlidePrev &&
          m > n.translate &&
          m > n.maxTranslate() &&
          (p || 0) !== o))
    )
      return !1;
    o !== (u || 0) && t && n.emit("beforeSlideChangeStart"),
      n.updateProgress(m);
    let w;
    o > p ? (w = "next") : o < p ? (w = "prev") : (w = "reset");
    const y = n.virtual && n.params.virtual.enabled;
    if (!(y && r) && ((d && -m === n.translate) || (!d && m === n.translate)))
      return (
        n.updateActiveIndex(o),
        a.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        a.effect !== "slide" && n.setTranslate(m),
        w !== "reset" && (n.transitionStart(t, w), n.transitionEnd(t, w)),
        !1
      );
    if (a.cssMode) {
      const x = n.isHorizontal(),
        T = d ? m : -m;
      if (e === 0)
        y &&
          ((n.wrapperEl.style.scrollSnapType = "none"),
          (n._immediateVirtual = !0)),
          y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
            ? ((n._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                c[x ? "scrollLeft" : "scrollTop"] = T;
              }))
            : (c[x ? "scrollLeft" : "scrollTop"] = T),
          y &&
            requestAnimationFrame(() => {
              (n.wrapperEl.style.scrollSnapType = ""),
                (n._immediateVirtual = !1);
            });
      else {
        if (!n.support.smoothScroll)
          return (
            ia({ swiper: n, targetPosition: T, side: x ? "left" : "top" }), !0
          );
        c.scrollTo({ [x ? "left" : "top"]: T, behavior: "smooth" });
      }
      return !0;
    }
    return (
      n.setTransition(e),
      n.setTranslate(m),
      n.updateActiveIndex(o),
      n.updateSlidesClasses(),
      n.emit("beforeTransitionStart", e, i),
      n.transitionStart(t, w),
      e === 0
        ? n.transitionEnd(t, w)
        : n.animating ||
          ((n.animating = !0),
          n.onSlideToWrapperTransitionEnd ||
            (n.onSlideToWrapperTransitionEnd = function (T) {
              !n ||
                n.destroyed ||
                (T.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  (n.onSlideToWrapperTransitionEnd = null),
                  delete n.onSlideToWrapperTransitionEnd,
                  n.transitionEnd(t, w)));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function ku(s, e, t, i) {
    s === void 0 && (s = 0),
      t === void 0 && (t = !0),
      typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = s;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
      else {
        let a;
        if (n) {
          const d = o * r.params.grid.rows;
          a = r.slides.filter(
            (c) => c.getAttribute("data-swiper-slide-index") * 1 === d
          )[0].column;
        } else a = r.getSlideIndexByData(o);
        const l = n
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: f } = r.params;
        let u = r.params.slidesPerView;
        u === "auto"
          ? (u = r.slidesPerViewDynamic())
          : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            f && u % 2 === 0 && (u = u + 1));
        let p = l - a < u;
        if (
          (f && (p = p || a < Math.ceil(u / 2)),
          i && f && r.params.slidesPerView !== "auto" && !n && (p = !1),
          p)
        ) {
          const d = f
            ? a < r.activeIndex
              ? "prev"
              : "next"
            : a - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: d,
            slideTo: !0,
            activeSlideIndex: d === "next" ? a + 1 : a - l + 1,
            slideRealIndex: d === "next" ? r.realIndex : void 0,
          });
        }
        if (n) {
          const d = o * r.params.grid.rows;
          o = r.slides.filter(
            (c) => c.getAttribute("data-swiper-slide-index") * 1 === d
          )[0].column;
        } else o = r.getSlideIndexByData(o);
      }
    return (
      requestAnimationFrame(() => {
        r.slideTo(o, e, t, i);
      }),
      r
    );
  }
  function Ou(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: n, animating: o } = i;
    if (!r || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    let a = n.slidesPerGroup;
    n.slidesPerView === "auto" &&
      n.slidesPerGroup === 1 &&
      n.slidesPerGroupAuto &&
      (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : a,
      f = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (o && !f && n.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && n.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, s, e, t);
          }),
          !0
        );
    }
    return n.rewind && i.isEnd
      ? i.slideTo(0, s, e, t)
      : i.slideTo(i.activeIndex + l, s, e, t);
  }
  function Du(s, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: n,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: l,
        animating: f,
      } = i;
    if (!l || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (f && !u && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const p = a ? i.translate : -i.translate;
    function d(m) {
      return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
    }
    const c = d(p),
      g = n.map((m) => d(m));
    let h = n[g.indexOf(c) - 1];
    if (typeof h > "u" && r.cssMode) {
      let m;
      n.forEach((w, y) => {
        c >= w && (m = y);
      }),
        typeof m < "u" && (h = n[m > 0 ? m - 1 : m]);
    }
    let _ = 0;
    if (
      (typeof h < "u" &&
        ((_ = o.indexOf(h)),
        _ < 0 && (_ = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((_ = _ - i.slidesPerViewDynamic("previous", !0) + 1),
          (_ = Math.max(_, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const m =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(m, s, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(_, s, e, t);
        }),
        !0
      );
    return i.slideTo(_, s, e, t);
  }
  function zu(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof s > "u" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
      );
  }
  function Iu(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof s > "u" && (s = r.params.speed);
    let n = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, n),
      a = o + Math.floor((n - o) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
      const f = r.snapGrid[a],
        u = r.snapGrid[a + 1];
      l - f > (u - f) * i && (n += r.params.slidesPerGroup);
    } else {
      const f = r.snapGrid[a - 1],
        u = r.snapGrid[a];
      l - f <= (u - f) * i && (n -= r.params.slidesPerGroup);
    }
    return (
      (n = Math.max(n, 0)),
      (n = Math.min(n, r.slidesGrid.length - 1)),
      r.slideTo(n, s, e, t)
    );
  }
  function Lu() {
    const s = this;
    if (s.destroyed) return;
    const { params: e, slidesEl: t } = s,
      i =
        e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let r = s.clickedIndex,
      n;
    const o = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (s.animating) return;
      (n = parseInt(
        s.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < s.loopedSlides - i / 2 ||
            r > s.slides.length - s.loopedSlides + i / 2
            ? (s.loopFix(),
              (r = s.getSlideIndex(
                Xt(t, `${o}[data-swiper-slide-index="${n}"]`)[0]
              )),
              As(() => {
                s.slideTo(r);
              }))
            : s.slideTo(r)
          : r > s.slides.length - i
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              Xt(t, `${o}[data-swiper-slide-index="${n}"]`)[0]
            )),
            As(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r);
    } else s.slideTo(r);
  }
  var Ru = {
    slideTo: Cu,
    slideToLoop: ku,
    slideNext: Ou,
    slidePrev: Du,
    slideReset: zu,
    slideToClosest: Iu,
    slideToClickedSlide: Lu,
  };
  function Fu(s) {
    const e = this,
      { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    const r = () => {
        Xt(i, `.${t.slideClass}, swiper-slide`).forEach((p, d) => {
          p.setAttribute("data-swiper-slide-index", d);
        });
      },
      n = e.grid && t.grid && t.grid.rows > 1,
      o = t.slidesPerGroup * (n ? t.grid.rows : 1),
      a = e.slides.length % o !== 0,
      l = n && e.slides.length % t.grid.rows !== 0,
      f = (u) => {
        for (let p = 0; p < u; p += 1) {
          const d = e.isElement
            ? Dn("swiper-slide", [t.slideBlankClass])
            : Dn("div", [t.slideClass, t.slideBlankClass]);
          e.slidesEl.append(d);
        }
      };
    if (a) {
      if (t.loopAddBlankSlides) {
        const u = o - (e.slides.length % o);
        f(u), e.recalcSlides(), e.updateSlides();
      } else
        On(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else if (l) {
      if (t.loopAddBlankSlides) {
        const u = t.grid.rows - (e.slides.length % t.grid.rows);
        f(u), e.recalcSlides(), e.updateSlides();
      } else
        On(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else r();
    e.loopFix({
      slideRealIndex: s,
      direction: t.centeredSlides ? void 0 : "next",
    });
  }
  function Bu(s) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      byController: o,
      byMousewheel: a,
    } = s === void 0 ? {} : s;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: f,
        allowSlidePrev: u,
        allowSlideNext: p,
        slidesEl: d,
        params: c,
      } = l,
      { centeredSlides: g } = c;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && c.virtual.enabled)
    ) {
      t &&
        (!c.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : c.centeredSlides && l.snapIndex < c.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = u),
        (l.allowSlideNext = p),
        l.emit("loopFix");
      return;
    }
    let h = c.slidesPerView;
    h === "auto"
      ? (h = l.slidesPerViewDynamic())
      : ((h = Math.ceil(parseFloat(c.slidesPerView, 10))),
        g && h % 2 === 0 && (h = h + 1));
    const _ = c.slidesPerGroupAuto ? h : c.slidesPerGroup;
    let m = _;
    m % _ !== 0 && (m += _ - (m % _)),
      (m += c.loopAdditionalSlides),
      (l.loopedSlides = m);
    const w = l.grid && c.grid && c.grid.rows > 1;
    f.length < h + m
      ? On(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : w &&
        c.grid.fill === "row" &&
        On(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const y = [],
      v = [];
    let x = l.activeIndex;
    typeof n > "u"
      ? (n = l.getSlideIndex(
          f.filter((O) => O.classList.contains(c.slideActiveClass))[0]
        ))
      : (x = n);
    const T = i === "next" || !i,
      A = i === "prev" || !i;
    let E = 0,
      P = 0;
    const S = w ? Math.ceil(f.length / c.grid.rows) : f.length,
      C = (w ? f[n].column : n) + (g && typeof r > "u" ? -h / 2 + 0.5 : 0);
    if (C < m) {
      E = Math.max(m - C, _);
      for (let O = 0; O < m - C; O += 1) {
        const I = O - Math.floor(O / S) * S;
        if (w) {
          const L = S - I - 1;
          for (let R = f.length - 1; R >= 0; R -= 1)
            f[R].column === L && y.push(R);
        } else y.push(S - I - 1);
      }
    } else if (C + h > S - m) {
      P = Math.max(C - (S - m * 2), _);
      for (let O = 0; O < P; O += 1) {
        const I = O - Math.floor(O / S) * S;
        w
          ? f.forEach((L, R) => {
              L.column === I && v.push(R);
            })
          : v.push(I);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      A &&
        y.forEach((O) => {
          (f[O].swiperLoopMoveDOM = !0),
            d.prepend(f[O]),
            (f[O].swiperLoopMoveDOM = !1);
        }),
      T &&
        v.forEach((O) => {
          (f[O].swiperLoopMoveDOM = !0),
            d.append(f[O]),
            (f[O].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      c.slidesPerView === "auto"
        ? l.updateSlides()
        : w &&
          ((y.length > 0 && A) || (v.length > 0 && T)) &&
          l.slides.forEach((O, I) => {
            l.grid.updateSlide(I, O, l.slides);
          }),
      c.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (y.length > 0 && A) {
        if (typeof e > "u") {
          const O = l.slidesGrid[x],
            L = l.slidesGrid[x + E] - O;
          a
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(x + Math.ceil(E), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else if (r) {
          const O = w ? y.length / c.grid.rows : y.length;
          l.slideTo(l.activeIndex + O, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (v.length > 0 && T)
        if (typeof e > "u") {
          const O = l.slidesGrid[x],
            L = l.slidesGrid[x - P] - O;
          a
            ? l.setTranslate(l.translate - L)
            : (l.slideTo(x - P, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - L),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - L)));
        } else {
          const O = w ? v.length / c.grid.rows : v.length;
          l.slideTo(l.activeIndex - O, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = u),
      (l.allowSlideNext = p),
      l.controller && l.controller.control && !o)
    ) {
      const O = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: n,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((I) => {
            !I.destroyed &&
              I.params.loop &&
              I.loopFix({
                ...O,
                slideTo: I.params.slidesPerView === c.slidesPerView ? t : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...O,
            slideTo:
              l.controller.control.params.slidesPerView === c.slidesPerView
                ? t
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function Nu() {
    const s = this,
      { params: e, slidesEl: t } = s;
    if (!e.loop || (s.virtual && s.params.virtual.enabled)) return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach((r) => {
      const n =
        typeof r.swiperSlideIndex > "u"
          ? r.getAttribute("data-swiper-slide-index") * 1
          : r.swiperSlideIndex;
      i[n] = r;
    }),
      s.slides.forEach((r) => {
        r.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((r) => {
        t.append(r);
      }),
      s.recalcSlides(),
      s.slideTo(s.realIndex, 0);
  }
  var Gu = { loopCreate: Fu, loopFix: Bu, loopDestroy: Nu };
  function Yu(s) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = s ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Vu() {
    const s = this;
    (s.params.watchOverflow && s.isLocked) ||
      s.params.cssMode ||
      (s.isElement && (s.__preventObserver__ = !0),
      (s[
        s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      s.isElement &&
        requestAnimationFrame(() => {
          s.__preventObserver__ = !1;
        }));
  }
  var $u = { setGrabCursor: Yu, unsetGrabCursor: Vu };
  function Xu(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === lr() || i === pt()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(s);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function ua(s, e, t) {
    const i = pt(),
      { params: r } = s,
      n = r.edgeSwipeDetection,
      o = r.edgeSwipeThreshold;
    return n && (t <= o || t >= i.innerWidth - o)
      ? n === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Hu(s) {
    const e = this,
      t = lr();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      ua(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: n, touches: o, enabled: a } = e;
    if (
      !a ||
      (!n.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && n.preventInteractionOnTransition)
    )
      return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = i.target;
    if (
      (n.touchEventsTarget === "wrapper" && !Qf(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const f = !!n.noSwipingClass && n.noSwipingClass !== "",
      u = i.composedPath ? i.composedPath() : i.path;
    f && i.target && i.target.shadowRoot && u && (l = u[0]);
    const p = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      d = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (d ? Xu(p, l) : l.closest(p))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const c = o.currentX,
      g = o.currentY;
    if (!ua(e, i, c)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = c),
      (o.startY = g),
      (r.touchStartTime = Mn()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      n.threshold > 0 && (r.allowThresholdMove = !1);
    let h = !0;
    l.matches(r.focusableElements) &&
      ((h = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const _ = h && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || _) &&
      !l.isContentEditable &&
      i.preventDefault(),
      n.freeMode &&
        n.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !n.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Wu(s) {
    const e = lr(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: n, rtlTranslate: o, enabled: a } = t;
    if (!a || (!r.simulateTouch && s.pointerType === "mouse")) return;
    let l = s;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let f;
    if (l.type === "touchmove") {
      if (
        ((f = [...l.changedTouches].filter(
          (T) => T.identifier === i.touchId
        )[0]),
        !f || f.identifier !== i.touchId)
      )
        return;
    } else f = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const u = f.pageX,
      p = f.pageY;
    if (l.preventedByNestedSwiper) {
      (n.startX = u), (n.startY = p);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(n, { startX: u, startY: p, currentX: u, currentY: p }),
          (i.touchStartTime = Mn()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (
          (p < n.startY && t.translate <= t.maxTranslate()) ||
          (p > n.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else if (
        (u < n.startX && t.translate <= t.maxTranslate()) ||
        (u > n.startX && t.translate >= t.minTranslate())
      )
        return;
    }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = u),
      (n.currentY = p);
    const d = n.currentX - n.startX,
      c = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(d ** 2 + c ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let T;
      (t.isHorizontal() && n.currentY === n.startY) ||
      (t.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : d * d + c * c >= 25 &&
          ((T = (Math.atan2(Math.abs(c), Math.abs(d)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? T > r.touchAngle
            : 90 - T > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving > "u" &&
        (n.currentX !== n.startX || n.currentY !== n.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = t.isHorizontal() ? d : c,
      h = t.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
      (n.diff = g),
      (g *= r.touchRatio),
      o && ((g = -g), (h = -h));
    const _ = t.touchesDirection;
    (t.swipeDirection = g > 0 ? "prev" : "next"),
      (t.touchesDirection = h > 0 ? "prev" : "next");
    const m = t.params.loop && !r.cssMode,
      w =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (m && w && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const T = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(T);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    let y;
    if (
      (new Date().getTime(),
      i.isMoved &&
        i.allowThresholdMove &&
        _ !== t.touchesDirection &&
        m &&
        w &&
        Math.abs(g) >= 1)
    ) {
      Object.assign(n, {
        startX: u,
        startY: p,
        currentX: u,
        currentY: p,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate);
    let v = !0,
      x = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (m &&
            w &&
            !y &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((v = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + g) ** x)))
        : g < 0 &&
          (m &&
            w &&
            !y &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (r.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < t.maxTranslate() &&
            ((v = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - g) ** x))),
      v && (l.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (i.currentTranslate = i.startTranslate),
            (n.diff = t.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
        r.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function qu(s) {
    const e = this,
      t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].filter(
          (x) => x.identifier === t.touchId
        )[0]),
        !r || r.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      r = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(i.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: o,
      touches: a,
      rtlTranslate: l,
      slidesGrid: f,
      enabled: u,
    } = e;
    if (!u || (!o.simulateTouch && i.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", i),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    o.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const p = Mn(),
      d = p - t.touchStartTime;
    if (e.allowClick) {
      const x = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((x && x[0]) || i.target, x),
        e.emit("tap click", i),
        d < 300 &&
          p - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = Mn()),
      As(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (a.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let c;
    if (
      (o.followFinger
        ? (c = l ? e.translate : -e.translate)
        : (c = -t.currentTranslate),
      o.cssMode)
    )
      return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: c });
      return;
    }
    const g = c >= -e.maxTranslate() && !e.params.loop;
    let h = 0,
      _ = e.slidesSizesGrid[0];
    for (
      let x = 0;
      x < f.length;
      x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const T = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof f[x + T] < "u"
        ? (g || (c >= f[x] && c < f[x + T])) && ((h = x), (_ = f[x + T] - f[x]))
        : (g || c >= f[x]) &&
          ((h = x), (_ = f[f.length - 1] - f[f.length - 2]));
    }
    let m = null,
      w = null;
    o.rewind &&
      (e.isBeginning
        ? (w =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (m = 0));
    const y = (c - f[h]) / _,
      v = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (d > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (y >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? m : h + v)
          : e.slideTo(h)),
        e.swipeDirection === "prev" &&
          (y > 1 - o.longSwipesRatio
            ? e.slideTo(h + v)
            : w !== null && y < 0 && Math.abs(y) > o.longSwipesRatio
            ? e.slideTo(w)
            : e.slideTo(h));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(h + v)
          : e.slideTo(h)
        : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : h + v),
          e.swipeDirection === "prev" && e.slideTo(w !== null ? w : h));
    }
  }
  function ca() {
    const s = this,
      { params: e, el: t } = s;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && s.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = s,
      o = s.virtual && s.params.virtual.enabled;
    (s.allowSlideNext = !0),
      (s.allowSlidePrev = !0),
      s.updateSize(),
      s.updateSlides(),
      s.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    s.isEnd &&
    !s.isBeginning &&
    !s.params.centeredSlides &&
    !a
      ? s.slideTo(s.slides.length - 1, 0, !1, !0)
      : s.params.loop && !o
      ? s.slideToLoop(s.realIndex, 0, !1, !0)
      : s.slideTo(s.activeIndex, 0, !1, !0),
      s.autoplay &&
        s.autoplay.running &&
        s.autoplay.paused &&
        (clearTimeout(s.autoplay.resizeTimeout),
        (s.autoplay.resizeTimeout = setTimeout(() => {
          s.autoplay &&
            s.autoplay.running &&
            s.autoplay.paused &&
            s.autoplay.resume();
        }, 500))),
      (s.allowSlidePrev = r),
      (s.allowSlideNext = i),
      s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
  }
  function Uu(s) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && s.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function ju() {
    const s = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = s;
    if (!i) return;
    (s.previousTranslate = s.translate),
      s.isHorizontal()
        ? (s.translate = -e.scrollLeft)
        : (s.translate = -e.scrollTop),
      s.translate === 0 && (s.translate = 0),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
    let r;
    const n = s.maxTranslate() - s.minTranslate();
    n === 0 ? (r = 0) : (r = (s.translate - s.minTranslate()) / n),
      r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
      s.emit("setTranslate", s.translate, !1);
  }
  function Qu(s) {
    const e = this;
    zn(e, s.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Zu() {
    const s = this;
    s.documentTouchHandlerProceeded ||
      ((s.documentTouchHandlerProceeded = !0),
      s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const da = (s, e) => {
    const t = lr(),
      { params: i, el: r, wrapperEl: n, device: o } = s,
      a = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      f = e;
    !r ||
      typeof r == "string" ||
      (t[l]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: a }),
      r[l]("touchstart", s.onTouchStart, { passive: !1 }),
      r[l]("pointerdown", s.onTouchStart, { passive: !1 }),
      t[l]("touchmove", s.onTouchMove, { passive: !1, capture: a }),
      t[l]("pointermove", s.onTouchMove, { passive: !1, capture: a }),
      t[l]("touchend", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", s.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", s.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", s.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", s.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", s.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", s.onClick, !0),
      i.cssMode && n[l]("scroll", s.onScroll),
      i.updateOnWindowResize
        ? s[f](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ca,
            !0
          )
        : s[f]("observerUpdate", ca, !0),
      r[l]("load", s.onLoad, { capture: !0 }));
  };
  function Ku() {
    const s = this,
      { params: e } = s;
    (s.onTouchStart = Hu.bind(s)),
      (s.onTouchMove = Wu.bind(s)),
      (s.onTouchEnd = qu.bind(s)),
      (s.onDocumentTouchStart = Zu.bind(s)),
      e.cssMode && (s.onScroll = ju.bind(s)),
      (s.onClick = Uu.bind(s)),
      (s.onLoad = Qu.bind(s)),
      da(s, "on");
  }
  function Ju() {
    da(this, "off");
  }
  var ec = { attachEvents: Ku, detachEvents: Ju };
  const pa = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function tc() {
    const s = this,
      { realIndex: e, initialized: t, params: i, el: r } = s,
      n = i.breakpoints;
    if (!n || (n && Object.keys(n).length === 0)) return;
    const o = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
    if (!o || s.currentBreakpoint === o) return;
    const l = (o in n ? n[o] : void 0) || s.originalParams,
      f = pa(s, i),
      u = pa(s, l),
      p = s.params.grabCursor,
      d = l.grabCursor,
      c = i.enabled;
    f && !u
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        s.emitContainerClasses())
      : !f &&
        u &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((l.grid.fill && l.grid.fill === "column") ||
          (!l.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        s.emitContainerClasses()),
      p && !d ? s.unsetGrabCursor() : !p && d && s.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((y) => {
        if (typeof l[y] > "u") return;
        const v = i[y] && i[y].enabled,
          x = l[y] && l[y].enabled;
        v && !x && s[y].disable(), !v && x && s[y].enable();
      });
    const g = l.direction && l.direction !== i.direction,
      h = i.loop && (l.slidesPerView !== i.slidesPerView || g),
      _ = i.loop;
    g && t && s.changeDirection(), ht(s.params, l);
    const m = s.params.enabled,
      w = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
    }),
      c && !m ? s.disable() : !c && m && s.enable(),
      (s.currentBreakpoint = o),
      s.emit("_beforeBreakpoint", l),
      t &&
        (h
          ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
          : !_ && w
          ? (s.loopCreate(e), s.updateSlides())
          : _ && !w && s.loopDestroy()),
      s.emit("breakpoint", l);
  }
  function ic(s, e, t) {
    if ((e === void 0 && (e = "window"), !s || (e === "container" && !t)))
      return;
    let i = !1;
    const r = pt(),
      n = e === "window" ? r.innerHeight : t.clientHeight,
      o = Object.keys(s).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const l = parseFloat(a.substr(1));
          return { value: n * l, point: a };
        }
        return { value: a, point: a };
      });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: l, value: f } = o[a];
      e === "window"
        ? r.matchMedia(`(min-width: ${f}px)`).matches && (i = l)
        : f <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var rc = { setBreakpoint: tc, getBreakpoint: ic };
  function nc(s, e) {
    const t = [];
    return (
      s.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && t.push(e + r);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function sc() {
    const s = this,
      { classNames: e, params: t, rtl: i, el: r, device: n } = s,
      o = nc(
        [
          "initialized",
          t.direction,
          { "free-mode": s.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: n.android },
          { ios: n.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...o), r.classList.add(...e), s.emitContainerClasses();
  }
  function oc() {
    const s = this,
      { el: e, classNames: t } = s;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), s.emitContainerClasses());
  }
  var ac = { addClasses: sc, removeClasses: oc };
  function lc() {
    const s = this,
      { isLocked: e, params: t } = s,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const r = s.slides.length - 1,
        n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
      s.isLocked = s.size > n;
    } else s.isLocked = s.snapGrid.length === 1;
    t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
      t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
      e && e !== s.isLocked && (s.isEnd = !1),
      e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
  }
  var fc = { checkOverflow: lc },
    ha = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
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
      threshold: 5,
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
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
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
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function uc(s, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        n = i[r];
      if (typeof n != "object" || n === null) {
        ht(e, i);
        return;
      }
      if (
        (s[r] === !0 && (s[r] = { enabled: !0 }),
        r === "navigation" &&
          s[r] &&
          s[r].enabled &&
          !s[r].prevEl &&
          !s[r].nextEl &&
          (s[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 &&
          s[r] &&
          s[r].enabled &&
          !s[r].el &&
          (s[r].auto = !0),
        !(r in s && "enabled" in n))
      ) {
        ht(e, i);
        return;
      }
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = { enabled: !1 }),
        ht(e, i);
    };
  }
  const Ds = {
      eventsEmitter: au,
      update: vu,
      translate: Su,
      transition: Mu,
      slide: Ru,
      loop: Gu,
      grabCursor: $u,
      events: ec,
      breakpoints: rc,
      checkOverflow: fc,
      classes: ac,
    },
    zs = {};
  class Pt {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = ht({}, t)),
        e && !t.el && (t.el = e);
      const o = lr();
      if (
        t.el &&
        typeof t.el == "string" &&
        o.querySelectorAll(t.el).length > 1
      ) {
        const u = [];
        return (
          o.querySelectorAll(t.el).forEach((p) => {
            const d = ht({}, t, { el: p });
            u.push(new Pt(d));
          }),
          u
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = oa()),
        (a.device = aa({ userAgent: t.userAgent })),
        (a.browser = nu()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((u) => {
        u({
          params: t,
          swiper: a,
          extendParams: uc(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const f = ht({}, ha, l);
      return (
        (a.params = ht({}, f, zs, t)),
        (a.originalParams = ht({}, a.params)),
        (a.passedParams = ht({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((u) => {
            a.on(u, a.params.on[u]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
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
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = Xt(t, `.${i.slideClass}, swiper-slide`),
        n = na(r[0]);
      return na(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )[0]
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = Xt(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        o = (i.maxTranslate() - r) * e + r;
      i.translateTo(o, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: r,
          slides: n,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: l,
          activeIndex: f,
        } = i;
      let u = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let p = n[f] ? Math.ceil(n[f].swiperSlideSize) : 0,
          d;
        for (let c = f + 1; c < n.length; c += 1)
          n[c] &&
            !d &&
            ((p += Math.ceil(n[c].swiperSlideSize)),
            (u += 1),
            p > l && (d = !0));
        for (let c = f - 1; c >= 0; c -= 1)
          n[c] &&
            !d &&
            ((p += n[c].swiperSlideSize), (u += 1), p > l && (d = !0));
      } else if (e === "current")
        for (let p = f + 1; p < n.length; p += 1)
          (t ? o[p] + a[p] - o[f] < l : o[p] - o[f] < l) && (u += 1);
      else for (let p = f - 1; p >= 0; p -= 1) o[f] - o[p] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
          o.complete && zn(e, o);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        r(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const o =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(o.length - 1, 0, !1, !0);
        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((n) => {
            e === "vertical" ? (n.style.width = "") : (n.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(r())
          : Xt(i, r())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = Dn("div", t.params.wrapperClass)),
          i.append(o),
          Xt(i, `.${t.params.slideClass}`).forEach((a) => {
            o.append(a);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: o,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : o,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || hi(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || hi(i, "direction") === "rtl"),
          wrongRTL: hi(o, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach((n) => {
          n.complete
            ? zn(t, n)
            : n.addEventListener("load", (o) => {
                zn(t, o.target);
              });
        }),
        Os(t),
        (t.initialized = !0),
        Os(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: n, wrapperEl: o, slides: a } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n && typeof n != "string" && n.removeAttribute("style"),
            o && o.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((l) => {
                l.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Wf(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      ht(zs, e);
    }
    static get extendedDefaults() {
      return zs;
    }
    static get defaults() {
      return ha;
    }
    static installModule(e) {
      Pt.prototype.__modules__ || (Pt.prototype.__modules__ = []);
      const t = Pt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Pt.installModule(t)), Pt)
        : (Pt.installModule(e), Pt);
    }
  }
  Object.keys(Ds).forEach((s) => {
    Object.keys(Ds[s]).forEach((e) => {
      Pt.prototype[e] = Ds[s][e];
    });
  }),
    Pt.use([su, ou]);
  function cc(s, e, t, i) {
    return (
      s.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let n = Xt(s.el, `.${i[r]}`)[0];
            n || ((n = Dn("div", i[r])), (n.className = i[r]), s.el.append(n)),
              (t[r] = n),
              (e[r] = n);
          }
        }),
      t
    );
  }
  function dc(s) {
    let { swiper: e, extendParams: t, on: i, emit: r } = s;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    function n(g) {
      let h;
      return g &&
        typeof g == "string" &&
        e.isElement &&
        ((h = e.el.querySelector(g) || e.hostEl.querySelector(g)), h)
        ? h
        : (g &&
            (typeof g == "string" && (h = [...document.querySelectorAll(g)]),
            e.params.uniqueNavElements &&
            typeof g == "string" &&
            h &&
            h.length > 1 &&
            e.el.querySelectorAll(g).length === 1
              ? (h = e.el.querySelector(g))
              : h && h.length === 1 && (h = h[0])),
          g && !h ? g : h);
    }
    function o(g, h) {
      const _ = e.params.navigation;
      (g = ii(g)),
        g.forEach((m) => {
          m &&
            (m.classList[h ? "add" : "remove"](..._.disabledClass.split(" ")),
            m.tagName === "BUTTON" && (m.disabled = h),
            e.params.watchOverflow &&
              e.enabled &&
              m.classList[e.isLocked ? "add" : "remove"](_.lockClass));
        });
    }
    function a() {
      const { nextEl: g, prevEl: h } = e.navigation;
      if (e.params.loop) {
        o(h, !1), o(g, !1);
        return;
      }
      o(h, e.isBeginning && !e.params.rewind),
        o(g, e.isEnd && !e.params.rewind);
    }
    function l(g) {
      g.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function f(g) {
      g.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function u() {
      const g = e.params.navigation;
      if (
        ((e.params.navigation = cc(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(g.nextEl || g.prevEl))
      )
        return;
      let h = n(g.nextEl),
        _ = n(g.prevEl);
      Object.assign(e.navigation, { nextEl: h, prevEl: _ }),
        (h = ii(h)),
        (_ = ii(_));
      const m = (w, y) => {
        w && w.addEventListener("click", y === "next" ? f : l),
          !e.enabled && w && w.classList.add(...g.lockClass.split(" "));
      };
      h.forEach((w) => m(w, "next")), _.forEach((w) => m(w, "prev"));
    }
    function p() {
      let { nextEl: g, prevEl: h } = e.navigation;
      (g = ii(g)), (h = ii(h));
      const _ = (m, w) => {
        m.removeEventListener("click", w === "next" ? f : l),
          m.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      g.forEach((m) => _(m, "next")), h.forEach((m) => _(m, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? c() : (u(), a());
    }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        let { nextEl: g, prevEl: h } = e.navigation;
        if (((g = ii(g)), (h = ii(h)), e.enabled)) {
          a();
          return;
        }
        [...g, ...h]
          .filter((_) => !!_)
          .forEach((_) => _.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (g, h) => {
        let { nextEl: _, prevEl: m } = e.navigation;
        (_ = ii(_)), (m = ii(m));
        const w = h.target;
        let y = m.includes(w) || _.includes(w);
        if (e.isElement && !y) {
          const v = h.path || (h.composedPath && h.composedPath());
          v && (y = v.find((x) => _.includes(x) || m.includes(x)));
        }
        if (e.params.navigation.hideOnClick && !y) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === w || e.pagination.el.contains(w))
          )
            return;
          let v;
          _.length
            ? (v = _[0].classList.contains(e.params.navigation.hiddenClass))
            : m.length &&
              (v = m[0].classList.contains(e.params.navigation.hiddenClass)),
            r(v === !0 ? "navigationShow" : "navigationHide"),
            [..._, ...m]
              .filter((x) => !!x)
              .forEach((x) =>
                x.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const d = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u(),
          a();
      },
      c = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
    Object.assign(e.navigation, {
      enable: d,
      disable: c,
      update: a,
      init: u,
      destroy: p,
    });
  }
  function pc(s) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: n,
      overwriteParams: o,
      perspective: a,
      recreateShadows: l,
      getEffectParams: f,
    } = s;
    i("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const p = o ? o() : {};
      Object.assign(t.params, p), Object.assign(t.originalParams, p);
    }),
      i("setTranslate", () => {
        t.params.effect === e && r();
      }),
      i("setTransition", (p, d) => {
        t.params.effect === e && n(d);
      }),
      i("transitionEnd", () => {
        if (t.params.effect === e && l) {
          if (!f || !f().slideShadows) return;
          t.slides.forEach((p) => {
            p.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((d) => d.remove());
          }),
            l();
        }
      });
    let u;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (u = !0),
        requestAnimationFrame(() => {
          u && t.slides && t.slides.length && (r(), (u = !1));
        }));
    });
  }
  function hc(s, e) {
    const t = ra(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function gc(s) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = s;
    const { activeIndex: n } = e,
      o = (a) =>
        a.parentElement
          ? a.parentElement
          : e.slides.filter(
              (f) => f.shadowRoot && f.shadowRoot === a.parentNode
            )[0];
    if (e.params.virtualTranslate && t !== 0) {
      let a = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((f) => {
            const u = f.classList.contains("swiper-slide-transform") ? o(f) : f;
            return e.getSlideIndex(u) === n;
          })),
        l.forEach((f) => {
          eu(f, () => {
            if (a || !e || e.destroyed) return;
            (a = !0), (e.animating = !1);
            const u = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(u);
          });
        });
    }
  }
  function mc(s) {
    let { swiper: e, extendParams: t, on: i } = s;
    t({ fadeEffect: { crossFade: !1 } }),
      pc({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: o } = e,
            a = e.params.fadeEffect;
          for (let l = 0; l < o.length; l += 1) {
            const f = e.slides[l];
            let p = -f.swiperSlideOffset;
            e.params.virtualTranslate || (p -= e.translate);
            let d = 0;
            e.isHorizontal() || ((d = p), (p = 0));
            const c = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(f.progress), 0)
                : 1 + Math.min(Math.max(f.progress, -1), 0),
              g = hc(a, f);
            (g.style.opacity = c),
              (g.style.transform = `translate3d(${p}px, ${d}px, 0px)`);
          }
        },
        setTransition: (o) => {
          const a = e.slides.map((l) => ra(l));
          a.forEach((l) => {
            l.style.transitionDuration = `${o}ms`;
          }),
            gc({ swiper: e, duration: o, transformElements: a, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  class _c {
    constructor() {
      this.init(), this.calculateSvgLengths();
    }
    init() {
      new Pt("[data-testimonial-swiper]", {
        modules: [dc, mc],
        direction: "horizontal",
        effect: "fade",
        fadeEffect: { crossFade: !0 },
        speed: 800,
        loop: !0,
        loopAdditionalSlides: 2,
        loopedSlides: 2,
        watchSlidesProgress: !0,
        navigation: {
          nextEl: "[data-button-next]",
          prevEl: "[data-button-prev]",
        },
        allowTouchMove: !1,
        preventInteractionOnTransition: !0,
      });
    }
    calculateSvgLengths() {
      document.querySelectorAll("[data-hover-path]").forEach((t) => {
        const i = t.getTotalLength();
        t.style.setProperty("--length", i + 1);
      });
    }
  }
  function ri(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function ga(s, e) {
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = e);
  }
  /*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var gt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    fr = { duration: 0.5, overwrite: !1, delay: 0 },
    Is,
    $e,
    oe,
    Et = 1e8,
    ne = 1 / Et,
    Ls = Math.PI * 2,
    vc = Ls / 4,
    wc = 0,
    ma = Math.sqrt,
    yc = Math.cos,
    xc = Math.sin,
    Oe = function (e) {
      return typeof e == "string";
    },
    de = function (e) {
      return typeof e == "function";
    },
    ni = function (e) {
      return typeof e == "number";
    },
    Rs = function (e) {
      return typeof e > "u";
    },
    Ht = function (e) {
      return typeof e == "object";
    },
    ot = function (e) {
      return e !== !1;
    },
    Fs = function () {
      return typeof window < "u";
    },
    In = function (e) {
      return de(e) || Oe(e);
    },
    _a =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Xe = Array.isArray,
    Bs = /(?:-?\.?\d|\.)+/gi,
    va = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ur = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    wa = /[+-]=-?[.\d]+/,
    ya = /[^,'"\[\]\s]+/gi,
    bc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    le,
    Wt,
    Gs,
    Ys,
    mt = {},
    Ln = {},
    xa,
    ba = function (e) {
      return (Ln = Fi(e, mt)) && ft;
    },
    Vs = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Fr = function (e, t) {
      return !t && console.warn(e);
    },
    Ta = function (e, t) {
      return (e && (mt[e] = t) && Ln && (Ln[e] = t)) || mt;
    },
    Br = function () {
      return 0;
    },
    Tc = { suppressEvents: !0, isStart: !0, kill: !1 },
    Rn = { suppressEvents: !0, kill: !1 },
    Sc = { suppressEvents: !0 },
    $s = {},
    gi = [],
    Xs = {},
    Sa,
    _t = {},
    Hs = {},
    Aa = 30,
    Fn = [],
    Ws = "",
    qs = function (e) {
      var t = e[0],
        i,
        r;
      if ((Ht(t) || de(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = Fn.length; r-- && !Fn[r].targetTest(t); );
        i = Fn[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new el(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ri = function (e) {
      return e._gsap || qs(kt(e))[0]._gsap;
    },
    Pa = function (e, t, i) {
      return (i = e[t]) && de(i)
        ? e[t]()
        : (Rs(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    at = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    _e = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    De = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    cr = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    Ac = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Bn = function () {
      var e = gi.length,
        t = gi.slice(0),
        i,
        r;
      for (Xs = {}, gi.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    Ea = function (e, t, i, r) {
      gi.length && !$e && Bn(),
        e.render(t, i, r || ($e && t < 0 && (e._initted || e._startAt))),
        gi.length && !$e && Bn();
    },
    Ma = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(ya).length < 2
        ? t
        : Oe(e)
        ? e.trim()
        : e;
    },
    Ca = function (e) {
      return e;
    },
    Mt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Pc = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Fi = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    ka = function s(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = Ht(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Nn = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    Nr = function (e) {
      var t = e.parent || le,
        i = e.keyframes ? Pc(Xe(e.keyframes)) : Mt;
      if (ot(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Ec = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    Oa = function (e, t, i, r, n) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var o = e[r],
        a;
      if (n) for (a = t[n]; o && o[n] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    Gn = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = t._prev,
        o = t._next;
      n ? (n._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = n) : e[r] === t && (e[r] = n),
        (t._next = t._prev = t.parent = null);
    },
    mi = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Bi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Mc = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Us = function (e, t, i, r) {
      return (
        e._startAt &&
        ($e
          ? e._startAt.revert(Rn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    Cc = function s(e) {
      return !e || (e._ts && s(e.parent));
    },
    Da = function (e) {
      return e._repeat ? dr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    dr = function (e, t) {
      var i = Math.floor((e /= t));
      return e && i === e ? i - 1 : i;
    },
    Yn = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Vn = function (e) {
      return (e._end = De(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)
      ));
    },
    $n = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = De(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Vn(e),
          i._dirty || Bi(i, e)),
        e
      );
    },
    za = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = Yn(e.rawTime(), t)),
          (!t._dur || Yr(0, t.totalDuration(), i) - t._tTime > ne) &&
            t.render(i, !0)),
        Bi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -ne;
      }
    },
    qt = function (e, t, i, r) {
      return (
        t.parent && mi(t),
        (t._start = De(
          (ni(i) ? i : i || e !== le ? Ct(e, i, t) : e._time) + t._delay
        )),
        (t._end = De(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Oa(e, t, "_first", "_last", e._sort ? "_start" : 0),
        js(t) || (e._recent = t),
        r || za(e, t),
        e._ts < 0 && $n(e, e._tTime),
        e
      );
    },
    Ia = function (e, t) {
      return (
        (mt.ScrollTrigger || Vs("scrollTrigger", t)) &&
        mt.ScrollTrigger.create(t, e)
      );
    },
    La = function (e, t, i, r, n) {
      if ((no(e, t, n), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !$e &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Sa !== wt.frame
      )
        return gi.push(e), (e._lazy = [n, r]), 1;
    },
    kc = function s(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
    },
    js = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Oc = function (e, t, i, r) {
      var n = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && kc(e) && !(!e._initted && js(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !js(e))))
            ? 0
            : 1,
        a = e._rDelay,
        l = 0,
        f,
        u,
        p;
      if (
        (a &&
          e._repeat &&
          ((l = Yr(0, e._tDur, t)),
          (u = dr(l, a)),
          e._yoyo && u & 1 && (o = 1 - o),
          u !== dr(e._tTime, a) &&
            ((n = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== n || $e || r || e._zTime === ne || (!t && e._zTime))
      ) {
        if (!e._initted && La(e, t, r, i, l)) return;
        for (
          p = e._zTime,
            e._zTime = t || (i ? ne : 0),
            i || (i = t && !p),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            f = e._pt;
          f;

        )
          f.r(o, f.d), (f = f._next);
        t < 0 && Us(e, t, i, !0),
          e._onUpdate && !i && vt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && vt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && mi(e, 1),
            !i &&
              !$e &&
              (vt(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Dc = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < t) return r;
          r = r._prev;
        }
    },
    pr = function (e, t, i, r) {
      var n = e._repeat,
        o = De(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !r && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = n ? (n < 0 ? 1e10 : De(o * (n + 1) + e._rDelay * n)) : o),
        a > 0 && !r && $n(e, (e._tTime = e._tDur * a)),
        e.parent && Vn(e),
        i || Bi(e.parent, e),
        e
      );
    },
    Ra = function (e) {
      return e instanceof Ze ? Bi(e) : pr(e, e._dur);
    },
    zc = { _start: 0, endTime: Br, totalDuration: Br },
    Ct = function s(e, t, i) {
      var r = e.labels,
        n = e._recent || zc,
        o = e.duration() >= Et ? n.endTime(!1) : e._dur,
        a,
        l,
        f;
      return Oe(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (f = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (f ? (a < 0 ? n : i).totalDuration() / 100 : 1))
            : a < 0
            ? (t in r || (r[t] = o), r[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              f && i && (l = (l / 100) * (Xe(i) ? i[0] : i).totalDuration()),
              a > 1 ? s(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    Gr = function (e, t, i) {
      var r = ni(t[1]),
        n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[n],
        a,
        l;
      if ((r && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = ot(l.vars.inherit) && l.parent);
        (o.immediateRender = ot(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
      }
      return new Te(t[0], o, t[n + 1]);
    },
    _i = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    Yr = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    He = function (e, t) {
      return !Oe(e) || !(t = bc.exec(e)) ? "" : t[1];
    },
    Ic = function (e, t, i) {
      return _i(i, function (r) {
        return Yr(e, t, r);
      });
    },
    Qs = [].slice,
    Fa = function (e, t) {
      return (
        e &&
        Ht(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && Ht(e[0]))) &&
        !e.nodeType &&
        e !== Wt
      );
    },
    Lc = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var n;
          return (Oe(r) && !t) || Fa(r, 1)
            ? (n = i).push.apply(n, kt(r))
            : i.push(r);
        }) || i
      );
    },
    kt = function (e, t, i) {
      return oe && !t && oe.selector
        ? oe.selector(e)
        : Oe(e) && !i && (Gs || !gr())
        ? Qs.call((t || Ys).querySelectorAll(e), 0)
        : Xe(e)
        ? Lc(e, i)
        : Fa(e)
        ? Qs.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Zs = function (e) {
      return (
        (e = kt(e)[0] || Fr("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return kt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? Fr("Invalid scope") || Ys.createElement("div")
              : e
          );
        }
      );
    },
    Ba = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Na = function (e) {
      if (de(e)) return e;
      var t = Ht(e) ? e : { each: e },
        i = Ni(t.ease),
        r = t.from || 0,
        n = parseFloat(t.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        f = t.axis,
        u = r,
        p = r;
      return (
        Oe(r)
          ? (u = p = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((u = r[0]), (p = r[1])),
        function (d, c, g) {
          var h = (g || t).length,
            _ = o[h],
            m,
            w,
            y,
            v,
            x,
            T,
            A,
            E,
            P;
          if (!_) {
            if (((P = t.grid === "auto" ? 0 : (t.grid || [1, Et])[1]), !P)) {
              for (
                A = -Et;
                A < (A = g[P++].getBoundingClientRect().left) && P < h;

              );
              P < h && P--;
            }
            for (
              _ = o[h] = [],
                m = l ? Math.min(P, h) * u - 0.5 : r % P,
                w = P === Et ? 0 : l ? (h * p) / P - 0.5 : (r / P) | 0,
                A = 0,
                E = Et,
                T = 0;
              T < h;
              T++
            )
              (y = (T % P) - m),
                (v = w - ((T / P) | 0)),
                (_[T] = x =
                  f ? Math.abs(f === "y" ? v : y) : ma(y * y + v * v)),
                x > A && (A = x),
                x < E && (E = x);
            r === "random" && Ba(_),
              (_.max = A - E),
              (_.min = E),
              (_.v = h =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (P > h
                      ? h - 1
                      : f
                      ? f === "y"
                        ? h / P
                        : P
                      : Math.max(P, h / P)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (_.b = h < 0 ? n - h : n),
              (_.u = He(t.amount || t.each) || 0),
              (i = i && h < 0 ? Za(i) : i);
          }
          return (
            (h = (_[d] - _.min) / _.max || 0),
            De(_.b + (i ? i(h) : h) * _.v) + _.u
          );
        }
      );
    },
    Ks = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = De(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (ni(i) ? 0 : He(i));
      };
    },
    Ga = function (e, t) {
      var i = Xe(e),
        r,
        n;
      return (
        !i &&
          Ht(e) &&
          ((r = i = e.radius || Et),
          e.values
            ? ((e = kt(e.values)), (n = !ni(e[0])) && (r *= r))
            : (e = Ks(e.increment))),
        _i(
          t,
          i
            ? de(e)
              ? function (o) {
                  return (n = e(o)), Math.abs(n - o) <= r ? n : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(n ? o.x : o),
                      l = parseFloat(n ? o.y : 0),
                      f = Et,
                      u = 0,
                      p = e.length,
                      d,
                      c;
                    p--;

                  )
                    n
                      ? ((d = e[p].x - a),
                        (c = e[p].y - l),
                        (d = d * d + c * c))
                      : (d = Math.abs(e[p] - a)),
                      d < f && ((f = d), (u = p));
                  return (
                    (u = !r || f <= r ? e[u] : o),
                    n || u === o || ni(o) ? u : u + He(o)
                  );
                }
            : Ks(e)
        )
      );
    },
    Ya = function (e, t, i, r) {
      return _i(Xe(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return Xe(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    Rc = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (n, o) {
          return o(n);
        }, r);
      };
    },
    Fc = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || He(i));
      };
    },
    Bc = function (e, t, i) {
      return $a(e, t, 0, 1, i);
    },
    Va = function (e, t, i) {
      return _i(i, function (r) {
        return e[~~t(r)];
      });
    },
    Nc = function s(e, t, i) {
      var r = t - e;
      return Xe(e)
        ? Va(e, s(0, e.length), t)
        : _i(i, function (n) {
            return ((r + ((n - e) % r)) % r) + e;
          });
    },
    Gc = function s(e, t, i) {
      var r = t - e,
        n = r * 2;
      return Xe(e)
        ? Va(e, s(0, e.length - 1), t)
        : _i(i, function (o) {
            return (o = (n + ((o - e) % n)) % n || 0), e + (o > r ? n - o : o);
          });
    },
    Vr = function (e) {
      for (var t = 0, i = "", r, n, o, a; ~(r = e.indexOf("random(", t)); )
        (o = e.indexOf(")", r)),
          (a = e.charAt(r + 7) === "["),
          (n = e.substr(r + 7, o - r - 7).match(a ? ya : Bs)),
          (i +=
            e.substr(t, r - t) +
            Ya(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    $a = function (e, t, i, r, n) {
      var o = t - e,
        a = r - i;
      return _i(n, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    Yc = function s(e, t, i, r) {
      var n = isNaN(e + t)
        ? 0
        : function (c) {
            return (1 - c) * e + c * t;
          };
      if (!n) {
        var o = Oe(e),
          a = {},
          l,
          f,
          u,
          p,
          d;
        if ((i === !0 && (r = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (Xe(e) && !Xe(t)) {
          for (u = [], p = e.length, d = p - 2, f = 1; f < p; f++)
            u.push(s(e[f - 1], e[f]));
          p--,
            (n = function (g) {
              g *= p;
              var h = Math.min(d, ~~g);
              return u[h](g - h);
            }),
            (i = t);
        } else r || (e = Fi(Xe(e) ? [] : {}, e));
        if (!u) {
          for (l in t) io.call(a, e, l, "get", t[l]);
          n = function (g) {
            return ao(g, a) || (o ? e.p : e);
          };
        }
      }
      return _i(i, n);
    },
    Xa = function (e, t, i) {
      var r = e.labels,
        n = Et,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - t),
          a < 0 == !!i && a && n > (a = Math.abs(a)) && ((l = o), (n = a));
      return l;
    },
    vt = function (e, t, i) {
      var r = e.vars,
        n = r[t],
        o = oe,
        a = e._ctx,
        l,
        f,
        u;
      if (n)
        return (
          (l = r[t + "Params"]),
          (f = r.callbackScope || e),
          i && gi.length && Bn(),
          a && (oe = a),
          (u = l ? n.apply(f, l) : n.call(f)),
          (oe = o),
          u
        );
    },
    $r = function (e) {
      return (
        mi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!$e),
        e.progress() < 1 && vt(e, "onInterrupt"),
        e
      );
    },
    hr,
    Ha = [],
    Wa = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Fs() || e.headless)) {
          var t = e.name,
            i = de(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            n = {
              init: Br,
              render: ao,
              add: io,
              kill: rd,
              modifier: id,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: oo,
              aliases: {},
              register: 0,
            };
          if ((gr(), e !== r)) {
            if (_t[t]) return;
            Mt(r, Mt(Nn(e, n), o)),
              Fi(r.prototype, Fi(n, Nn(e, o))),
              (_t[(r.prop = t)] = r),
              e.targetTest && (Fn.push(r), ($s[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Ta(t, r), e.register && e.register(ft, r, lt);
        } else Ha.push(e);
    },
    te = 255,
    Xr = {
      aqua: [0, te, te],
      lime: [0, te, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, te],
      navy: [0, 0, 128],
      white: [te, te, te],
      olive: [128, 128, 0],
      yellow: [te, te, 0],
      orange: [te, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [te, 0, 0],
      pink: [te, 192, 203],
      cyan: [0, te, te],
      transparent: [te, te, te, 0],
    },
    Js = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          te +
          0.5) |
          0
      );
    },
    qa = function (e, t, i) {
      var r = e ? (ni(e) ? [e >> 16, (e >> 8) & te, e & te] : 0) : Xr.black,
        n,
        o,
        a,
        l,
        f,
        u,
        p,
        d,
        c,
        g;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Xr[e]))
          r = Xr[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((n = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                n +
                n +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & te, r & te, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & te, e & te]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = g = e.match(Bs)), !t))
            (l = (+r[0] % 360) / 360),
              (f = +r[1] / 100),
              (u = +r[2] / 100),
              (o = u <= 0.5 ? u * (f + 1) : u + f - u * f),
              (n = u * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Js(l + 1 / 3, n, o)),
              (r[1] = Js(l, n, o)),
              (r[2] = Js(l - 1 / 3, n, o));
          else if (~e.indexOf("="))
            return (r = e.match(va)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Bs) || Xr.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !g &&
          ((n = r[0] / te),
          (o = r[1] / te),
          (a = r[2] / te),
          (p = Math.max(n, o, a)),
          (d = Math.min(n, o, a)),
          (u = (p + d) / 2),
          p === d
            ? (l = f = 0)
            : ((c = p - d),
              (f = u > 0.5 ? c / (2 - p - d) : c / (p + d)),
              (l =
                p === n
                  ? (o - a) / c + (o < a ? 6 : 0)
                  : p === o
                  ? (a - n) / c + 2
                  : (n - o) / c + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(f * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Ua = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(vi).forEach(function (n) {
          var o = n.match(ur) || [];
          t.push.apply(t, o), i.push((r += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    ja = function (e, t, i) {
      var r = "",
        n = (e + r).match(vi),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        f,
        u,
        p;
      if (!n) return e;
      if (
        ((n = n.map(function (d) {
          return (
            (d = qa(d, t, 1)) &&
            o +
              (t
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        i && ((u = Ua(e)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (f = e.replace(vi, "1").split(ur), p = f.length - 1; a < p; a++)
          r +=
            f[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (u.length ? u : n.length ? n : i).shift());
      if (!f)
        for (f = e.split(vi), p = f.length - 1; a < p; a++) r += f[a] + n[a];
      return r + f[p];
    },
    vi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Xr) s += "|" + e + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    Vc = /hsl[a]?\(/,
    Qa = function (e) {
      var t = e.join(" "),
        i;
      if (((vi.lastIndex = 0), vi.test(t)))
        return (
          (i = Vc.test(t)),
          (e[1] = ja(e[1], i)),
          (e[0] = ja(e[0], i, Ua(e[1]))),
          !0
        );
    },
    Hr,
    wt = (function () {
      var s = Date.now,
        e = 500,
        t = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        o = n,
        a = [],
        l,
        f,
        u,
        p,
        d,
        c,
        g = function h(_) {
          var m = s() - r,
            w = _ === !0,
            y,
            v,
            x,
            T;
          if (
            ((m > e || m < 0) && (i += m - t),
            (r += m),
            (x = r - i),
            (y = x - o),
            (y > 0 || w) &&
              ((T = ++p.frame),
              (d = x - p.time * 1e3),
              (p.time = x = x / 1e3),
              (o += y + (y >= n ? 4 : n - y)),
              (v = 1)),
            w || (l = f(h)),
            v)
          )
            for (c = 0; c < a.length; c++) a[c](x, d, T, _);
        };
      return (
        (p = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (_) {
            return d / (1e3 / (_ || 60));
          },
          wake: function () {
            xa &&
              (!Gs &&
                Fs() &&
                ((Wt = Gs = window),
                (Ys = Wt.document || {}),
                (mt.gsap = ft),
                (Wt.gsapVersions || (Wt.gsapVersions = [])).push(ft.version),
                ba(Ln || Wt.GreenSockGlobals || (!Wt.gsap && Wt) || {}),
                Ha.forEach(Wa)),
              (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && p.sleep(),
              (f =
                u ||
                function (_) {
                  return setTimeout(_, (o - p.time * 1e3 + 1) | 0);
                }),
              (Hr = 1),
              g(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Hr = 0), (f = Br);
          },
          lagSmoothing: function (_, m) {
            (e = _ || 1 / 0), (t = Math.min(m || 33, e));
          },
          fps: function (_) {
            (n = 1e3 / (_ || 240)), (o = p.time * 1e3 + n);
          },
          add: function (_, m, w) {
            var y = m
              ? function (v, x, T, A) {
                  _(v, x, T, A), p.remove(y);
                }
              : _;
            return p.remove(_), a[w ? "unshift" : "push"](y), gr(), y;
          },
          remove: function (_, m) {
            ~(m = a.indexOf(_)) && a.splice(m, 1) && c >= m && c--;
          },
          _listeners: a,
        }),
        p
      );
    })(),
    gr = function () {
      return !Hr && wt.wake();
    },
    j = {},
    $c = /^[\d.\-M][\d.\-,\s]/,
    Xc = /["']/g,
    Hc = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          n = 1,
          o = i.length,
          a,
          l,
          f;
        n < o;
        n++
      )
        (l = i[n]),
          (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
          (f = l.substr(0, a)),
          (t[r] = isNaN(f) ? f.replace(Xc, "").trim() : +f),
          (r = l.substr(a + 1).trim());
      return t;
    },
    Wc = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    qc = function (e) {
      var t = (e + "").split("("),
        i = j[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Hc(t[1])] : Wc(e).split(",").map(Ma)
          )
        : j._CE && $c.test(e)
        ? j._CE("", e)
        : i;
    },
    Za = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ka = function s(e, t) {
      for (var i = e._first, r; i; )
        i instanceof Ze
          ? s(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? s(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    Ni = function (e, t) {
      return (e && (de(e) ? e : j[e] || qc(e))) || t;
    },
    Gi = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var n = { easeIn: t, easeOut: i, easeInOut: r },
        o;
      return (
        at(e, function (a) {
          (j[a] = mt[a] = n), (j[(o = a.toLowerCase())] = i);
          for (var l in n)
            j[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = j[a + "." + l] = n[l];
        }),
        n
      );
    },
    Ja = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    eo = function s(e, t, i) {
      var r = t >= 1 ? t : 1,
        n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (n / Ls) * (Math.asin(1 / r) || 0),
        a = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * xc((u - o) * n) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (f) {
                return 1 - a(1 - f);
              }
            : Ja(a);
      return (
        (n = Ls / n),
        (l.config = function (f, u) {
          return s(e, f, u);
        }),
        l
      );
    },
    to = function s(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : Ja(i);
      return (
        (r.config = function (n) {
          return s(e, n);
        }),
        r
      );
    };
  at("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
    var t = e < 5 ? e + 1 : e;
    Gi(
      s + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (j.Linear.easeNone = j.none = j.Linear.easeIn),
    Gi("Elastic", eo("in"), eo("out"), eo()),
    (function (s, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        n = function (a) {
          return a < t
            ? s * a * a
            : a < i
            ? s * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < r
            ? s * (a -= 2.25 / e) * a + 0.9375
            : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      Gi(
        "Bounce",
        function (o) {
          return 1 - n(1 - o);
        },
        n
      );
    })(7.5625, 2.75),
    Gi("Expo", function (s) {
      return s ? Math.pow(2, 10 * (s - 1)) : 0;
    }),
    Gi("Circ", function (s) {
      return -(ma(1 - s * s) - 1);
    }),
    Gi("Sine", function (s) {
      return s === 1 ? 1 : -yc(s * vc) + 1;
    }),
    Gi("Back", to("in"), to("out"), to()),
    (j.SteppedEase =
      j.steps =
      mt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              n = t ? 1 : 0,
              o = 1 - ne;
            return function (a) {
              return (((r * Yr(0, o, a)) | 0) + n) * i;
            };
          },
        }),
    (fr.ease = j["quad.out"]),
    at(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (Ws += s + "," + s + "Params,");
      }
    );
  var el = function (e, t) {
      (this.id = wc++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Pa),
        (this.set = t ? t.getSetter : oo);
    },
    Wr = (function () {
      function s(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          pr(this, +t.duration, 1, 1),
          (this.data = t.data),
          oe && ((this._ctx = oe), oe.data.push(this)),
          Hr || wt.wake();
      }
      var e = s.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              pr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((gr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              $n(this, i), !n._dp || n.parent || za(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              qt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === ne) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Ea(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + Da(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  Da(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? dr(this._tTime, n) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -ne ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? Yn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -ne ? 0 : this._rts),
            this.totalTime(Yr(-Math.abs(this._delay), this._tDur, n), r !== !1),
            Vn(this),
            Mc(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (gr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== ne &&
                        (this._tTime -= ne)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && qt(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (ot(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Yn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Sc);
          var r = $e;
          return (
            ($e = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            ($e = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : n;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Ra(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Ra(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Ct(this, i), ot(r));
        }),
        (e.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, ot(r));
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -ne : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -ne), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (n = i.rawTime(!0)) >= r &&
              n < this.endTime(!0) - ne)
          );
        }),
        (e.eventCallback = function (i, r, n) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  n && (o[i + "Params"] = n),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (n) {
            var o = de(i) ? i : Ca,
              a = function () {
                var f = r.then;
                (r.then = null),
                  de(o) && (o = o(r)) && (o.then || o === r) && (r.then = f),
                  n(o),
                  (r.then = f);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (e.kill = function () {
          $r(this);
        }),
        s
      );
    })();
  Mt(Wr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ne,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ze = (function (s) {
    ga(e, s);
    function e(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = ot(i.sortChildren)),
        le && qt(i.parent || le, ri(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Ia(ri(n), i.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, n, o) {
        return Gr(0, arguments, this), this;
      }),
      (t.from = function (r, n, o) {
        return Gr(1, arguments, this), this;
      }),
      (t.fromTo = function (r, n, o, a) {
        return Gr(2, arguments, this), this;
      }),
      (t.set = function (r, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Nr(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Te(r, n, Ct(this, o), 1),
          this
        );
      }),
      (t.call = function (r, n, o) {
        return qt(this, Te.delayedCall(0, r, n), o);
      }),
      (t.staggerTo = function (r, n, o, a, l, f, u) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = f),
          (o.onCompleteParams = u),
          (o.parent = this),
          new Te(r, o, Ct(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, n, o, a, l, f, u) {
        return (
          (o.runBackwards = 1),
          (Nr(o).immediateRender = ot(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, f, u)
        );
      }),
      (t.staggerFromTo = function (r, n, o, a, l, f, u, p) {
        return (
          (a.startAt = o),
          (Nr(a).immediateRender = ot(a.immediateRender)),
          this.staggerTo(r, n, a, l, f, u, p)
        );
      }),
      (t.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          f = this._dur,
          u = r <= 0 ? 0 : De(r),
          p = this._zTime < 0 != r < 0 && (this._initted || !f),
          d,
          c,
          g,
          h,
          _,
          m,
          w,
          y,
          v,
          x,
          T,
          A;
        if (
          (this !== le && u > l && r >= 0 && (u = l),
          u !== this._tTime || o || p)
        ) {
          if (
            (a !== this._time &&
              f &&
              ((u += this._time - a), (r += this._time - a)),
            (d = u),
            (v = this._start),
            (y = this._ts),
            (m = !y),
            p && (f || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((T = this._yoyo),
              (_ = f + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(_ * 100 + r, n, o);
            if (
              ((d = De(u % _)),
              u === l
                ? ((h = this._repeat), (d = f))
                : ((h = ~~(u / _)),
                  h && h === u / _ && ((d = f), h--),
                  d > f && (d = f)),
              (x = dr(this._tTime, _)),
              !a &&
                this._tTime &&
                x !== h &&
                this._tTime - x * _ - this._dur <= 0 &&
                (x = h),
              T && h & 1 && ((d = f - d), (A = 1)),
              h !== x && !this._lock)
            ) {
              var E = T && x & 1,
                P = E === (T && h & 1);
              if (
                (h < x && (E = !E),
                (a = E ? 0 : u % f ? f : u),
                (this._lock = 1),
                (this.render(a || (A ? 0 : De(h * _)), n, !f)._lock = 0),
                (this._tTime = u),
                !n && this.parent && vt(this, "onRepeat"),
                this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  m !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((f = this._dur),
                (l = this._tDur),
                P &&
                  ((this._lock = 2),
                  (a = E ? f : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !A && this.invalidate()),
                (this._lock = 0),
                !this._ts && !m)
              )
                return this;
              Ka(this, A);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = Dc(this, De(a), De(d))), w && (u -= d - (d = w._start))),
            (this._tTime = u),
            (this._time = d),
            (this._act = !y),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && d && !n && !h && (vt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (d >= a && r >= 0)
            for (c = this._first; c; ) {
              if (
                ((g = c._next), (c._act || d >= c._start) && c._ts && w !== c)
              ) {
                if (c.parent !== this) return this.render(r, n, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (d - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (d - c._start) * c._ts,
                    n,
                    o
                  ),
                  d !== this._time || (!this._ts && !m))
                ) {
                  (w = 0), g && (u += this._zTime = -ne);
                  break;
                }
              }
              c = g;
            }
          else {
            c = this._last;
            for (var S = r < 0 ? r : d; c; ) {
              if (
                ((g = c._prev), (c._act || S <= c._end) && c._ts && w !== c)
              ) {
                if (c.parent !== this) return this.render(r, n, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (S - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (S - c._start) * c._ts,
                    n,
                    o || ($e && (c._initted || c._startAt))
                  ),
                  d !== this._time || (!this._ts && !m))
                ) {
                  (w = 0), g && (u += this._zTime = S ? -ne : ne);
                  break;
                }
              }
              c = g;
            }
          }
          if (
            w &&
            !n &&
            (this.pause(),
            (w.render(d >= a ? 0 : -ne)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = v), Vn(this), this.render(r, n, o);
          this._onUpdate && !n && vt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
              (v === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !f) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  mi(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (u || a || !l) &&
                  (vt(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, n) {
        var o = this;
        if ((ni(n) || (n = Ct(this, n, r)), !(r instanceof Wr))) {
          if (Xe(r))
            return (
              r.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (Oe(r)) return this.addLabel(r, n);
          if (de(r)) r = Te.delayedCall(0, r);
          else return this;
        }
        return this !== r ? qt(this, r, n) : this;
      }),
      (t.getChildren = function (r, n, o, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Et);
        for (var l = [], f = this._first; f; )
          f._start >= a &&
            (f instanceof Te
              ? n && l.push(f)
              : (o && l.push(f),
                r && l.push.apply(l, f.getChildren(!0, n, o)))),
            (f = f._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
          if (n[o].vars.id === r) return n[o];
      }),
      (t.remove = function (r) {
        return Oe(r)
          ? this.removeLabel(r)
          : de(r)
          ? this.killTweensOf(r)
          : (Gn(this, r),
            r === this._recent && (this._recent = this._last),
            Bi(this));
      }),
      (t.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = De(
                wt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            s.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, n) {
        return (this.labels[r] = Ct(this, n)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, n, o) {
        var a = Te.delayedCall(0, n || Br, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), qt(this, a, Ct(this, r))
        );
      }),
      (t.removePause = function (r) {
        var n = this._first;
        for (r = Ct(this, r); n; )
          n._start === r && n.data === "isPause" && mi(n), (n = n._next);
      }),
      (t.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          wi !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (t.getTweensOf = function (r, n) {
        for (var o = [], a = kt(r), l = this._first, f = ni(n), u; l; )
          l instanceof Te
            ? Ac(l._targets, a) &&
              (f
                ? (!wi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              o.push(l)
            : (u = l.getTweensOf(a, n)).length && o.push.apply(o, u),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = Ct(o, r),
          l = n,
          f = l.startAt,
          u = l.onStart,
          p = l.onStartParams,
          d = l.immediateRender,
          c,
          g = Te.to(
            o,
            Mt(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (a - (f && "time" in f ? f.time : o._time)) / o.timeScale()
                  ) ||
                  ne,
                onStart: function () {
                  if ((o.pause(), !c)) {
                    var _ =
                      n.duration ||
                      Math.abs(
                        (a - (f && "time" in f ? f.time : o._time)) /
                          o.timeScale()
                      );
                    g._dur !== _ && pr(g, _, 0, 1).render(g._time, !0, !0),
                      (c = 1);
                  }
                  u && u.apply(g, p || []);
                },
              },
              n
            )
          );
        return d ? g.render(0) : g;
      }),
      (t.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, Mt({ startAt: { time: Ct(this, r) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Xa(this, Ct(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Xa(this, Ct(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + ne);
      }),
      (t.shiftChildren = function (r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, f; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (n) for (f in l) l[f] >= o && (l[f] += r);
        return Bi(this);
      }),
      (t.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return s.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n; )
          (o = n._next), this.remove(n), (n = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Bi(this)
        );
      }),
      (t.totalDuration = function (r) {
        var n = 0,
          o = this,
          a = o._last,
          l = Et,
          f,
          u,
          p;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (p = o.parent; a; )
            (f = a._prev),
              a._dirty && a.totalDuration(),
              (u = a._start),
              u > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (qt(o, a, u - a._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                a._ts &&
                ((n -= u),
                ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                  ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
                o.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = f);
          pr(o, o === le && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((le._ts && (Ea(le, Yn(r, le)), (Sa = wt.frame)), wt.frame >= Aa)) {
          Aa += gt.autoSleep || 120;
          var n = le._first;
          if ((!n || !n._ts) && gt.autoSleep && wt._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || wt.sleep();
          }
        }
      }),
      e
    );
  })(Wr);
  Mt(Ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Uc = function (e, t, i, r, n, o, a) {
      var l = new lt(this._pt, e, t, 0, 1, ol, null, n),
        f = 0,
        u = 0,
        p,
        d,
        c,
        g,
        h,
        _,
        m,
        w;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (m = ~r.indexOf("random(")) && (r = Vr(r)),
          o && ((w = [i, r]), o(w, e, t), (i = w[0]), (r = w[1])),
          d = i.match(Ns) || [];
        (p = Ns.exec(r));

      )
        (g = p[0]),
          (h = r.substring(f, p.index)),
          c ? (c = (c + 1) % 5) : h.substr(-5) === "rgba(" && (c = 1),
          g !== d[u++] &&
            ((_ = parseFloat(d[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || u === 1 ? h : ",",
              s: _,
              c: g.charAt(1) === "=" ? cr(_, g) - _ : parseFloat(g) - _,
              m: c && c < 4 ? Math.round : 0,
            }),
            (f = Ns.lastIndex));
      return (
        (l.c = f < r.length ? r.substring(f, r.length) : ""),
        (l.fp = a),
        (wa.test(r) || m) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    io = function (e, t, i, r, n, o, a, l, f, u) {
      de(r) && (r = r(n || 0, e, o));
      var p = e[t],
        d =
          i !== "get"
            ? i
            : de(p)
            ? f
              ? e[
                  t.indexOf("set") || !de(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](f)
              : e[t]()
            : p,
        c = de(p) ? (f ? Jc : nl) : so,
        g;
      if (
        (Oe(r) &&
          (~r.indexOf("random(") && (r = Vr(r)),
          r.charAt(1) === "=" &&
            ((g = cr(d, r) + (He(d) || 0)), (g || g === 0) && (r = g))),
        !u || d !== r || ro)
      )
        return !isNaN(d * r) && r !== ""
          ? ((g = new lt(
              this._pt,
              e,
              t,
              +d || 0,
              r - (d || 0),
              typeof p == "boolean" ? td : sl,
              0,
              c
            )),
            f && (g.fp = f),
            a && g.modifier(a, this, e),
            (this._pt = g))
          : (!p && !(t in e) && Vs(t, r),
            Uc.call(this, e, t, d, r, c, l || gt.stringFilter, f));
    },
    jc = function (e, t, i, r, n) {
      if (
        (de(e) && (e = qr(e, n, t, i, r)),
        !Ht(e) || (e.style && e.nodeType) || Xe(e) || _a(e))
      )
        return Oe(e) ? qr(e, n, t, i, r) : e;
      var o = {},
        a;
      for (a in e) o[a] = qr(e[a], n, t, i, r);
      return o;
    },
    tl = function (e, t, i, r, n, o) {
      var a, l, f, u;
      if (
        _t[e] &&
        (a = new _t[e]()).init(
          n,
          a.rawVars ? t[e] : jc(t[e], r, n, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new lt(i._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
        i !== hr)
      )
        for (f = i._ptLookup[i._targets.indexOf(n)], u = a._props.length; u--; )
          f[a._props[u]] = l;
      return a;
    },
    wi,
    ro,
    no = function s(e, t, i) {
      var r = e.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        f = r.onUpdate,
        u = r.runBackwards,
        p = r.yoyoEase,
        d = r.keyframes,
        c = r.autoRevert,
        g = e._dur,
        h = e._startAt,
        _ = e._targets,
        m = e.parent,
        w = m && m.data === "nested" ? m.vars.targets : _,
        y = e._overwrite === "auto" && !Is,
        v = e.timeline,
        x,
        T,
        A,
        E,
        P,
        S,
        k,
        C,
        O,
        I,
        L,
        R,
        F;
      if (
        (v && (!d || !n) && (n = "none"),
        (e._ease = Ni(n, fr.ease)),
        (e._yEase = p ? Za(Ni(p === !0 ? n : p, fr.ease)) : 0),
        p &&
          e._yoyo &&
          !e._repeat &&
          ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
        (e._from = !v && !!r.runBackwards),
        !v || (d && !r.stagger))
      ) {
        if (
          ((C = _[0] ? Ri(_[0]).harness : 0),
          (R = C && r[C.prop]),
          (x = Nn(r, $s)),
          h &&
            (h._zTime < 0 && h.progress(1),
            t < 0 && u && a && !c
              ? h.render(-1, !0)
              : h.revert(u && g ? Rn : Tc),
            (h._lazy = 0)),
          o)
        ) {
          if (
            (mi(
              (e._startAt = Te.set(
                _,
                Mt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: m,
                    immediateRender: !0,
                    lazy: !h && ot(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      f &&
                      function () {
                        return vt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && ($e || (!a && !c)) && e._startAt.revert(Rn),
            a && g && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (u && g && !h) {
          if (
            (t && (a = !1),
            (A = Mt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !h && ot(l),
                immediateRender: a,
                stagger: 0,
                parent: m,
              },
              x
            )),
            R && (A[C.prop] = R),
            mi((e._startAt = Te.set(_, A))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && ($e ? e._startAt.revert(Rn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            s(e._startAt, ne, ne);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (g && ot(l)) || (l && !g), T = 0;
          T < _.length;
          T++
        ) {
          if (
            ((P = _[T]),
            (k = P._gsap || qs(_)[T]._gsap),
            (e._ptLookup[T] = I = {}),
            Xs[k.id] && gi.length && Bn(),
            (L = w === _ ? T : w.indexOf(P)),
            C &&
              (O = new C()).init(P, R || x, e, L, w) !== !1 &&
              ((e._pt = E =
                new lt(e._pt, P, O.name, 0, 1, O.render, O, 0, O.priority)),
              O._props.forEach(function ($) {
                I[$] = E;
              }),
              O.priority && (S = 1)),
            !C || R)
          )
            for (A in x)
              _t[A] && (O = tl(A, x, e, L, P, w))
                ? O.priority && (S = 1)
                : (I[A] = E =
                    io.call(e, P, A, "get", x[A], L, w, 0, r.stringFilter));
          e._op && e._op[T] && e.kill(P, e._op[T]),
            y &&
              e._pt &&
              ((wi = e),
              le.killTweensOf(P, I, e.globalTime(t)),
              (F = !e.parent),
              (wi = 0)),
            e._pt && l && (Xs[k.id] = 1);
        }
        S && al(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = f),
        (e._initted = (!e._op || e._pt) && !F),
        d && t <= 0 && v.render(Et, !0, !0);
    },
    Qc = function (e, t, i, r, n, o, a, l) {
      var f = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        u,
        p,
        d,
        c;
      if (!f)
        for (
          f = e._ptCache[t] = [], d = e._ptLookup, c = e._targets.length;
          c--;

        ) {
          if (((u = d[c][t]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u)
            return (
              (ro = 1),
              (e.vars[t] = "+=0"),
              no(e, a),
              (ro = 0),
              l ? Fr(t + " not eligible for reset") : 1
            );
          f.push(u);
        }
      for (c = f.length; c--; )
        (p = f[c]),
          (u = p._pt || p),
          (u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + o * u.c),
          (u.c = i - u.s),
          p.e && (p.e = _e(i) + He(p.e)),
          p.b && (p.b = u.s + He(p.b));
    },
    Zc = function (e, t) {
      var i = e[0] ? Ri(e[0]).harness : 0,
        r = i && i.aliases,
        n,
        o,
        a,
        l;
      if (!r) return t;
      n = Fi({}, t);
      for (o in r)
        if (o in n)
          for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
      return n;
    },
    Kc = function (e, t, i, r) {
      var n = t.ease || r || "power1.inOut",
        o,
        a;
      if (Xe(t))
        (a = i[e] || (i[e] = [])),
          t.forEach(function (l, f) {
            return a.push({ t: (f / (t.length - 1)) * 100, v: l, e: n });
          });
      else
        for (o in t)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: n });
    },
    qr = function (e, t, i, r, n) {
      return de(e)
        ? e.call(t, i, r, n)
        : Oe(e) && ~e.indexOf("random(")
        ? Vr(e)
        : e;
    },
    il = Ws + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    rl = {};
  at(il + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (rl[s] = 1);
  });
  var Te = (function (s) {
    ga(e, s);
    function e(i, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Nr(r)) || this);
      var l = a.vars,
        f = l.duration,
        u = l.delay,
        p = l.immediateRender,
        d = l.stagger,
        c = l.overwrite,
        g = l.keyframes,
        h = l.defaults,
        _ = l.scrollTrigger,
        m = l.yoyoEase,
        w = r.parent || le,
        y = (Xe(i) || _a(i) ? ni(i[0]) : "length" in r) ? [i] : kt(i),
        v,
        x,
        T,
        A,
        E,
        P,
        S,
        k;
      if (
        ((a._targets = y.length
          ? qs(y)
          : Fr(
              "GSAP target " + i + " not found. https://gsap.com",
              !gt.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = c),
        g || d || In(f) || In(u))
      ) {
        if (
          ((r = a.vars),
          (v = a.timeline =
            new Ze({
              data: "nested",
              defaults: h || {},
              targets: w && w.data === "nested" ? w.vars.targets : y,
            })),
          v.kill(),
          (v.parent = v._dp = ri(a)),
          (v._start = 0),
          d || In(f) || In(u))
        ) {
          if (((A = y.length), (S = d && Na(d)), Ht(d)))
            for (E in d) ~il.indexOf(E) && (k || (k = {}), (k[E] = d[E]));
          for (x = 0; x < A; x++)
            (T = Nn(r, rl)),
              (T.stagger = 0),
              m && (T.yoyoEase = m),
              k && Fi(T, k),
              (P = y[x]),
              (T.duration = +qr(f, ri(a), x, P, y)),
              (T.delay = (+qr(u, ri(a), x, P, y) || 0) - a._delay),
              !d &&
                A === 1 &&
                T.delay &&
                ((a._delay = u = T.delay), (a._start += u), (T.delay = 0)),
              v.to(P, T, S ? S(x, P, y) : 0),
              (v._ease = j.none);
          v.duration() ? (f = u = 0) : (a.timeline = 0);
        } else if (g) {
          Nr(Mt(v.vars.defaults, { ease: "none" })),
            (v._ease = Ni(g.ease || r.ease || "none"));
          var C = 0,
            O,
            I,
            L;
          if (Xe(g))
            g.forEach(function (R) {
              return v.to(y, R, ">");
            }),
              v.duration();
          else {
            T = {};
            for (E in g)
              E === "ease" || E === "easeEach" || Kc(E, g[E], T, g.easeEach);
            for (E in T)
              for (
                O = T[E].sort(function (R, F) {
                  return R.t - F.t;
                }),
                  C = 0,
                  x = 0;
                x < O.length;
                x++
              )
                (I = O[x]),
                  (L = {
                    ease: I.e,
                    duration: ((I.t - (x ? O[x - 1].t : 0)) / 100) * f,
                  }),
                  (L[E] = I.v),
                  v.to(y, L, C),
                  (C += L.duration);
            v.duration() < f && v.to({}, { duration: f - v.duration() });
          }
        }
        f || a.duration((f = v.duration()));
      } else a.timeline = 0;
      return (
        c === !0 && !Is && ((wi = ri(a)), le.killTweensOf(y), (wi = 0)),
        qt(w, ri(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (p ||
          (!f &&
            !g &&
            a._start === De(w._time) &&
            ot(p) &&
            Cc(ri(a)) &&
            w.data !== "nested")) &&
          ((a._tTime = -ne), a.render(Math.max(0, -u) || 0)),
        _ && Ia(ri(a), _),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, o) {
        var a = this._time,
          l = this._tDur,
          f = this._dur,
          u = r < 0,
          p = r > l - ne && !u ? l : r < ne ? 0 : r,
          d,
          c,
          g,
          h,
          _,
          m,
          w,
          y,
          v;
        if (!f) Oc(this, r, n, o);
        else if (
          p !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u)
        ) {
          if (((d = p), (y = this.timeline), this._repeat)) {
            if (((h = f + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(h * 100 + r, n, o);
            if (
              ((d = De(p % h)),
              p === l
                ? ((g = this._repeat), (d = f))
                : ((g = ~~(p / h)),
                  g && g === De(p / h) && ((d = f), g--),
                  d > f && (d = f)),
              (m = this._yoyo && g & 1),
              m && ((v = this._yEase), (d = f - d)),
              (_ = dr(this._tTime, h)),
              d === a && !o && this._initted && g === _)
            )
              return (this._tTime = p), this;
            g !== _ &&
              (y && this._yEase && Ka(y, m),
              this.vars.repeatRefresh &&
                !m &&
                !this._lock &&
                this._time !== h &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(De(h * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (La(this, u ? r : d, o, n, p)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && g !== _))
              return this;
            if (f !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = p),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (v || this._ease)(d / f)),
            this._from && (this.ratio = w = 1 - w),
            d && !a && !n && !g && (vt(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (c = this._pt; c; ) c.r(w, c.d), (c = c._next);
          (y && y.render(r < 0 ? r : y._dur * y._ease(d / this._dur), n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (u && Us(this, r, n, o), vt(this, "onUpdate")),
            this._repeat &&
              g !== _ &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              vt(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (u && !this._onUpdate && Us(this, r, !0, !0),
              (r || !f) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                mi(this, 1),
              !n &&
                !(u && !a) &&
                (p || a || m) &&
                (vt(this, p === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          s.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, n, o, a, l) {
        Hr || wt.wake(), this._ts || this.play();
        var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || no(this, f),
          (u = this._ease(f / this._dur)),
          Qc(this, r, n, o, a, u, f, l)
            ? this.resetTo(r, n, o, a, 1)
            : ($n(this, 0),
              this.parent ||
                Oa(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (this._lazy = this._pt = 0), this.parent ? $r(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, wi && wi.vars.overwrite !== !0)
              ._first || $r(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              pr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? kt(r) : a,
          f = this._ptLookup,
          u = this._pt,
          p,
          d,
          c,
          g,
          h,
          _,
          m;
        if ((!n || n === "all") && Ec(a, l))
          return n === "all" && (this._pt = 0), $r(this);
        for (
          p = this._op = this._op || [],
            n !== "all" &&
              (Oe(n) &&
                ((h = {}),
                at(n, function (w) {
                  return (h[w] = 1);
                }),
                (n = h)),
              (n = Zc(a, n))),
            m = a.length;
          m--;

        )
          if (~l.indexOf(a[m])) {
            (d = f[m]),
              n === "all"
                ? ((p[m] = n), (g = d), (c = {}))
                : ((c = p[m] = p[m] || {}), (g = n));
            for (h in g)
              (_ = d && d[h]),
                _ &&
                  ((!("kill" in _.d) || _.d.kill(h) === !0) &&
                    Gn(this, _, "_pt"),
                  delete d[h]),
                c !== "all" && (c[h] = 1);
          }
        return this._initted && !this._pt && u && $r(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return Gr(1, arguments);
      }),
      (e.delayedCall = function (r, n, o, a) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (r, n, o) {
        return Gr(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, o) {
        return le.killTweensOf(r, n, o);
      }),
      e
    );
  })(Wr);
  Mt(Te.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    at("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Te[s] = function () {
        var e = new Ze(),
          t = Qs.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
      };
    });
  var so = function (e, t, i) {
      return (e[t] = i);
    },
    nl = function (e, t, i) {
      return e[t](i);
    },
    Jc = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    ed = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    oo = function (e, t) {
      return de(e[t]) ? nl : Rs(e[t]) && e.setAttribute ? ed : so;
    },
    sl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    td = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    ol = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    ao = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    id = function (e, t, i, r) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === r && n.modifier(e, t, i), (n = o);
    },
    rd = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? Gn(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    nd = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    al = function (e) {
      for (var t = e._pt, i, r, n, o; t; ) {
        for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (n = t),
          (t._next = r) ? (r._prev = t) : (o = t),
          (t = i);
      }
      e._pt = n;
    },
    lt = (function () {
      function s(t, i, r, n, o, a, l, f, u) {
        (this.t = i),
          (this.s = n),
          (this.c = o),
          (this.p = r),
          (this.r = a || sl),
          (this.d = l || this),
          (this.set = f || so),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = s.prototype;
      return (
        (e.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = nd),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  at(
    Ws +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return ($s[s] = 1);
    }
  ),
    (mt.TweenMax = mt.TweenLite = Te),
    (mt.TimelineLite = mt.TimelineMax = Ze),
    (le = new Ze({
      sortChildren: !1,
      defaults: fr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (gt.stringFilter = Qa);
  var Yi = [],
    Xn = {},
    sd = [],
    ll = 0,
    od = 0,
    lo = function (e) {
      return (Xn[e] || sd).map(function (t) {
        return t();
      });
    },
    fo = function () {
      var e = Date.now(),
        t = [];
      e - ll > 2 &&
        (lo("matchMediaInit"),
        Yi.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            o,
            a,
            l,
            f;
          for (a in r)
            (o = Wt.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== n[a] && ((n[a] = o), (f = 1));
          f && (i.revert(), l && t.push(i));
        }),
        lo("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (ll = e),
        lo("matchMedia"));
    },
    fl = (function () {
      function s(t, i) {
        (this.selector = i && Zs(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = od++),
          t && this.add(t);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          de(i) && ((n = r), (r = i), (i = de));
          var o = this,
            a = function () {
              var f = oe,
                u = o.selector,
                p;
              return (
                f && f !== o && f.data.push(o),
                n && (o.selector = Zs(n)),
                (oe = o),
                (p = r.apply(o, arguments)),
                de(p) && o._r.push(p),
                (oe = f),
                (o.selector = u),
                (o.isReverted = !1),
                p
              );
            };
          return (
            (o.last = a),
            i === de
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : i
              ? (o[i] = a)
              : a
          );
        }),
        (e.ignore = function (i) {
          var r = oe;
          (oe = null), i(this), (oe = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof Te &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var n = this;
          if (
            (i
              ? (function () {
                  for (var a = n.getTweens(), l = n.data.length, f; l--; )
                    (f = n.data[l]),
                      f.data === "isFlip" &&
                        (f.revert(),
                        f.getChildren(!0, !0, !1).forEach(function (u) {
                          return a.splice(a.indexOf(u), 1);
                        }));
                  for (
                    a
                      .map(function (u) {
                        return {
                          g:
                            u._dur ||
                            u._delay ||
                            (u._sat && !u._sat.vars.immediateRender)
                              ? u.globalTime(0)
                              : -1 / 0,
                          t: u,
                        };
                      })
                      .sort(function (u, p) {
                        return p.g - u.g || -1 / 0;
                      })
                      .forEach(function (u) {
                        return u.t.revert(i);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (f = n.data[l]),
                      f instanceof Ze
                        ? f.data !== "nested" &&
                          (f.scrollTrigger && f.scrollTrigger.revert(),
                          f.kill())
                        : !(f instanceof Te) && f.revert && f.revert(i);
                  n._r.forEach(function (u) {
                    return u(i, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            r)
          )
            for (var o = Yi.length; o--; )
              Yi[o].id === this.id && Yi.splice(o, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    ad = (function () {
      function s(t) {
        (this.contexts = []), (this.scope = t), oe && oe.data.push(this);
      }
      var e = s.prototype;
      return (
        (e.add = function (i, r, n) {
          Ht(i) || (i = { matches: i });
          var o = new fl(0, n || this.scope),
            a = (o.conditions = {}),
            l,
            f,
            u;
          oe && !o.selector && (o.selector = oe.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = i);
          for (f in i)
            f === "all"
              ? (u = 1)
              : ((l = Wt.matchMedia(i[f])),
                l &&
                  (Yi.indexOf(o) < 0 && Yi.push(o),
                  (a[f] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(fo)
                    : l.addEventListener("change", fo)));
          return (
            u &&
              r(o, function (p) {
                return o.add(null, p);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        s
      );
    })(),
    Hn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Wa(r);
        });
      },
      timeline: function (e) {
        return new Ze(e);
      },
      getTweensOf: function (e, t) {
        return le.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Oe(e) && (e = kt(e)[0]);
        var n = Ri(e || {}).get,
          o = i ? Ca : Ma;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o(((_t[t] && _t[t].get) || n)(e, t, i, r))
              : function (a, l, f) {
                  return o(((_t[a] && _t[a].get) || n)(e, a, l, f));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = kt(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return ft.quickSetter(u, t, i);
            }),
            n = r.length;
          return function (u) {
            for (var p = n; p--; ) r[p](u);
          };
        }
        e = e[0] || {};
        var o = _t[t],
          a = Ri(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          f = o
            ? function (u) {
                var p = new o();
                (hr._pt = 0),
                  p.init(e, i ? u + i : u, hr, 0, [e]),
                  p.render(1, p),
                  hr._pt && ao(1, hr);
              }
            : a.set(e, l);
        return o
          ? f
          : function (u) {
              return f(e, l, i ? u + i : u, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = ft.to(
            e,
            Fi(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          o = function (l, f, u) {
            return n.resetTo(t, l, f, u);
          };
        return (o.tween = n), o;
      },
      isTweening: function (e) {
        return le.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Ni(e.ease, fr.ease)), ka(fr, e || {});
      },
      config: function (e) {
        return ka(gt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          n = e.defaults,
          o = e.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !_t[a] &&
            !mt[a] &&
            Fr(t + " effect requires " + a + " plugin.")
          );
        }),
          (Hs[t] = function (a, l, f) {
            return i(kt(a), Mt(l || {}, n), f);
          }),
          o &&
            (Ze.prototype[t] = function (a, l, f) {
              return this.add(Hs[t](a, Ht(l) ? l : (f = l) && {}, this), f);
            });
      },
      registerEase: function (e, t) {
        j[e] = Ni(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Ni(e, t) : j;
      },
      getById: function (e) {
        return le.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new Ze(e),
          r,
          n;
        for (
          i.smoothChildTiming = ot(e.smoothChildTiming),
            le.remove(i),
            i._dp = 0,
            i._time = i._tTime = le._time,
            r = le._first;
          r;

        )
          (n = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof Te &&
                r.vars.onComplete === r._targets[0]
              )) &&
              qt(i, r, r._start - r._delay),
            (r = n);
        return qt(le, i, 0), i;
      },
      context: function (e, t) {
        return e ? new fl(e, t) : oe;
      },
      matchMedia: function (e) {
        return new ad(e);
      },
      matchMediaRefresh: function () {
        return (
          Yi.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || fo()
        );
      },
      addEventListener: function (e, t) {
        var i = Xn[e] || (Xn[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Xn[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Nc,
        wrapYoyo: Gc,
        distribute: Na,
        random: Ya,
        snap: Ga,
        normalize: Bc,
        getUnit: He,
        clamp: Ic,
        splitColor: qa,
        toArray: kt,
        selector: Zs,
        mapRange: $a,
        pipe: Rc,
        unitize: Fc,
        interpolate: Yc,
        shuffle: Ba,
      },
      install: ba,
      effects: Hs,
      ticker: wt,
      updateRoot: Ze.updateRoot,
      plugins: _t,
      globalTimeline: le,
      core: {
        PropTween: lt,
        globals: Ta,
        Tween: Te,
        Timeline: Ze,
        Animation: Wr,
        getCache: Ri,
        _removeLinkedListItem: Gn,
        reverting: function () {
          return $e;
        },
        context: function (e) {
          return e && oe && (oe.data.push(e), (e._ctx = oe)), oe;
        },
        suppressOverwrites: function (e) {
          return (Is = e);
        },
      },
    };
  at("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (Hn[s] = Te[s]);
  }),
    wt.add(Ze.updateRoot),
    (hr = Hn.to({}, { duration: 0 }));
  var ld = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    fd = function (e, t) {
      var i = e._targets,
        r,
        n,
        o;
      for (r in t)
        for (n = i.length; n--; )
          (o = e._ptLookup[n][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = ld(o, r)),
              o && o.modifier && o.modifier(t[r], e, i[n], r));
    },
    uo = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, n, o) {
          o._onInit = function (a) {
            var l, f;
            if (
              (Oe(n) &&
                ((l = {}),
                at(n, function (u) {
                  return (l[u] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (f in n) l[f] = t(n[f]);
              n = l;
            }
            fd(a, n);
          };
        },
      };
    },
    ft =
      Hn.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, n) {
            var o, a, l;
            this.tween = i;
            for (o in t)
              (l = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[o],
                  r,
                  n,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              $e ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        uo("roundProps", Ks),
        uo("modifiers"),
        uo("snap", Ga)
      ) || Hn;
  (Te.version = Ze.version = ft.version = "3.12.5"),
    (xa = 1),
    Fs() && gr(),
    j.Power0,
    j.Power1,
    j.Power2,
    j.Power3,
    j.Power4,
    j.Linear,
    j.Quad,
    j.Cubic,
    j.Quart,
    j.Quint,
    j.Strong,
    j.Elastic,
    j.Back,
    j.SteppedEase,
    j.Bounce,
    j.Sine,
    j.Expo,
    j.Circ;
  /*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ul,
    yi,
    mr,
    co,
    Vi,
    cl,
    po,
    ud = function () {
      return typeof window < "u";
    },
    si = {},
    $i = 180 / Math.PI,
    _r = Math.PI / 180,
    vr = Math.atan2,
    dl = 1e8,
    ho = /([A-Z])/g,
    cd = /(left|right|width|margin|padding|x)/i,
    dd = /[\s,\(]\S/,
    Ut = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    go = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    pd = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    hd = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    gd = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    pl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    hl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    md = function (e, t, i) {
      return (e.style[t] = i);
    },
    _d = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    vd = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    wd = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    yd = function (e, t, i, r, n) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(n, o);
    },
    xd = function (e, t, i, r, n) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(n, o);
    },
    fe = "transform",
    ut = fe + "Origin",
    bd = function s(e, t) {
      var i = this,
        r = this.target,
        n = r.style,
        o = r._gsap;
      if (e in si && n) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = Ut[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = oi(r, a));
                })
              : (this.tfm[e] = o.x ? o[e] : oi(r, e)),
            e === ut && (this.tfm.zOrigin = o.zOrigin);
        else
          return Ut.transform.split(",").forEach(function (a) {
            return s.call(i, a, t);
          });
        if (this.props.indexOf(fe) >= 0) return;
        o.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(ut, t, "")),
          (e = fe);
      }
      (n || t) && this.props.push(e, t, n[e]);
    },
    gl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Td = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        n,
        o;
      for (n = 0; n < e.length; n += 3)
        e[n + 1]
          ? (t[e[n]] = e[n + 2])
          : e[n + 2]
          ? (i[e[n]] = e[n + 2])
          : i.removeProperty(
              e[n].substr(0, 2) === "--"
                ? e[n]
                : e[n].replace(ho, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (n = po()),
          (!n || !n.isStart) &&
            !i[fe] &&
            (gl(i),
            r.zOrigin &&
              i[ut] &&
              ((i[ut] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    ml = function (e, t) {
      var i = { target: e, props: [], revert: Td, save: bd };
      return (
        e._gsap || ft.core.getCache(e),
        t &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    _l,
    mo = function (e, t) {
      var i = yi.createElementNS
        ? yi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : yi.createElement(e);
      return i && i.style ? i : yi.createElement(e);
    },
    jt = function s(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(ho, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && s(e, wr(t) || t, 1)) ||
        ""
      );
    },
    vl = "O,Moz,ms,Ms,Webkit".split(","),
    wr = function (e, t, i) {
      var r = t || Vi,
        n = r.style,
        o = 5;
      if (e in n && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(vl[o] + e in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? vl[o] : "") + e;
    },
    _o = function () {
      ud() &&
        window.document &&
        ((ul = window),
        (yi = ul.document),
        (mr = yi.documentElement),
        (Vi = mo("div") || { style: {} }),
        mo("div"),
        (fe = wr(fe)),
        (ut = fe + "Origin"),
        (Vi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (_l = !!wr("perspective")),
        (po = ft.core.reverting),
        (co = 1));
    },
    vo = function s(e) {
      var t = mo(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        n = this.style.cssText,
        o;
      if (
        (mr.appendChild(t),
        t.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (o = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = s);
        } catch {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        mr.removeChild(t),
        (this.style.cssText = n),
        o
      );
    },
    wl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    yl = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch {
        t = vo.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === vo ||
          (t = vo.call(e, !0)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +wl(e, ["x", "cx", "x1"]) || 0,
              y: +wl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    xl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && yl(e));
    },
    Xi = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in si && t !== ut && (t = fe),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(ho, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    xi = function (e, t, i, r, n, o) {
      var a = new lt(e._pt, t, i, 0, 1, o ? hl : pl);
      return (e._pt = a), (a.b = r), (a.e = n), e._props.push(i), a;
    },
    bl = { deg: 1, rad: 1, turn: 1 },
    Sd = { grid: 1, flex: 1 },
    bi = function s(e, t, i, r) {
      var n = parseFloat(i) || 0,
        o = (i + "").trim().substr((n + "").length) || "px",
        a = Vi.style,
        l = cd.test(t),
        f = e.tagName.toLowerCase() === "svg",
        u = (f ? "client" : "offset") + (l ? "Width" : "Height"),
        p = 100,
        d = r === "px",
        c = r === "%",
        g,
        h,
        _,
        m;
      if (r === o || !n || bl[r] || bl[o]) return n;
      if (
        (o !== "px" && !d && (n = s(e, t, i, "px")),
        (m = e.getCTM && xl(e)),
        (c || o === "%") && (si[t] || ~t.indexOf("adius")))
      )
        return (
          (g = m ? e.getBBox()[l ? "width" : "height"] : e[u]),
          _e(c ? (n / g) * p : (n / 100) * g)
        );
      if (
        ((a[l ? "width" : "height"] = p + (d ? o : r)),
        (h =
          ~t.indexOf("adius") || (r === "em" && e.appendChild && !f)
            ? e
            : e.parentNode),
        m && (h = (e.ownerSVGElement || {}).parentNode),
        (!h || h === yi || !h.appendChild) && (h = yi.body),
        (_ = h._gsap),
        _ && c && _.width && l && _.time === wt.time && !_.uncache)
      )
        return _e((n / _.width) * p);
      if (c && (t === "height" || t === "width")) {
        var w = e.style[t];
        (e.style[t] = p + r), (g = e[u]), w ? (e.style[t] = w) : Xi(e, t);
      } else
        (c || o === "%") &&
          !Sd[jt(h, "display")] &&
          (a.position = jt(e, "position")),
          h === e && (a.position = "static"),
          h.appendChild(Vi),
          (g = Vi[u]),
          h.removeChild(Vi),
          (a.position = "absolute");
      return (
        l && c && ((_ = Ri(h)), (_.time = wt.time), (_.width = h[u])),
        _e(d ? (g * n) / p : g && n ? (p / g) * n : 0)
      );
    },
    oi = function (e, t, i, r) {
      var n;
      return (
        co || _o(),
        t in Ut &&
          t !== "transform" &&
          ((t = Ut[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        si[t] && t !== "transform"
          ? ((n = jr(e, r)),
            (n =
              t !== "transformOrigin"
                ? n[t]
                : n.svg
                ? n.origin
                : qn(jt(e, ut)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Wn[t] && Wn[t](e, t, i)) ||
                jt(e, t) ||
                Pa(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? bi(e, t, n, i) + i : n
      );
    },
    Ad = function (e, t, i, r) {
      if (!i || i === "none") {
        var n = wr(t, e, 1),
          o = n && jt(e, n, 1);
        o && o !== i
          ? ((t = n), (i = o))
          : t === "borderColor" && (i = jt(e, "borderTopColor"));
      }
      var a = new lt(this._pt, e.style, t, 0, 1, ol),
        l = 0,
        f = 0,
        u,
        p,
        d,
        c,
        g,
        h,
        _,
        m,
        w,
        y,
        v,
        x;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((h = e.style[t]),
          (e.style[t] = r),
          (r = jt(e, t) || r),
          h ? (e.style[t] = h) : Xi(e, t)),
        (u = [i, r]),
        Qa(u),
        (i = u[0]),
        (r = u[1]),
        (d = i.match(ur) || []),
        (x = r.match(ur) || []),
        x.length)
      ) {
        for (; (p = ur.exec(r)); )
          (_ = p[0]),
            (w = r.substring(l, p.index)),
            g
              ? (g = (g + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (g = 1),
            _ !== (h = d[f++] || "") &&
              ((c = parseFloat(h) || 0),
              (v = h.substr((c + "").length)),
              _.charAt(1) === "=" && (_ = cr(c, _) + v),
              (m = parseFloat(_)),
              (y = _.substr((m + "").length)),
              (l = ur.lastIndex - y.length),
              y ||
                ((y = y || gt.units[t] || v),
                l === r.length && ((r += y), (a.e += y))),
              v !== y && (c = bi(e, t, h, y) || 0),
              (a._pt = {
                _next: a._pt,
                p: w || f === 1 ? w : ",",
                s: c,
                c: m - c,
                m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = t === "display" && r === "none" ? hl : pl;
      return wa.test(r) && (a.e = 0), (this._pt = a), a;
    },
    Tl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Pd = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Tl[i] || i),
        (t[1] = Tl[r] || r),
        t.join(" ")
      );
    },
    Ed = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          n = t.u,
          o = i._gsap,
          a,
          l,
          f;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), f = n.length; --f > -1; )
            (a = n[f]),
              si[a] && ((l = 1), (a = a === "transformOrigin" ? ut : fe)),
              Xi(i, a);
        l &&
          (Xi(i, fe),
          o &&
            (o.svg && i.removeAttribute("transform"),
            jr(i, 1),
            (o.uncache = 1),
            gl(r)));
      }
    },
    Wn = {
      clearProps: function (e, t, i, r, n) {
        if (n.data !== "isFromStart") {
          var o = (e._pt = new lt(e._pt, t, i, 0, 0, Ed));
          return (o.u = r), (o.pr = -10), (o.tween = n), e._props.push(i), 1;
        }
      },
    },
    Ur = [1, 0, 0, 1, 0, 0],
    Sl = {},
    Al = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Pl = function (e) {
      var t = jt(e, fe);
      return Al(t) ? Ur : t.substr(7).match(va).map(_e);
    },
    wo = function (e, t) {
      var i = e._gsap || Ri(e),
        r = e.style,
        n = Pl(e),
        o,
        a,
        l,
        f;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Ur : n)
        : (n === Ur &&
            !e.offsetParent &&
            e !== mr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = e.parentNode),
            (!o || !e.offsetParent) &&
              ((f = 1), (a = e.nextElementSibling), mr.appendChild(e)),
            (n = Pl(e)),
            l ? (r.display = l) : Xi(e, "display"),
            f &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : mr.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    yo = function (e, t, i, r, n, o) {
      var a = e._gsap,
        l = n || wo(e, !0),
        f = a.xOrigin || 0,
        u = a.yOrigin || 0,
        p = a.xOffset || 0,
        d = a.yOffset || 0,
        c = l[0],
        g = l[1],
        h = l[2],
        _ = l[3],
        m = l[4],
        w = l[5],
        y = t.split(" "),
        v = parseFloat(y[0]) || 0,
        x = parseFloat(y[1]) || 0,
        T,
        A,
        E,
        P;
      i
        ? l !== Ur &&
          (A = c * _ - g * h) &&
          ((E = v * (_ / A) + x * (-h / A) + (h * w - _ * m) / A),
          (P = v * (-g / A) + x * (c / A) - (c * w - g * m) / A),
          (v = E),
          (x = P))
        : ((T = yl(e)),
          (v = T.x + (~y[0].indexOf("%") ? (v / 100) * T.width : v)),
          (x =
            T.y + (~(y[1] || y[0]).indexOf("%") ? (x / 100) * T.height : x))),
        r || (r !== !1 && a.smooth)
          ? ((m = v - f),
            (w = x - u),
            (a.xOffset = p + (m * c + w * h) - m),
            (a.yOffset = d + (m * g + w * _) - w))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = v),
        (a.yOrigin = x),
        (a.smooth = !!r),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[ut] = "0px 0px"),
        o &&
          (xi(o, a, "xOrigin", f, v),
          xi(o, a, "yOrigin", u, x),
          xi(o, a, "xOffset", p, a.xOffset),
          xi(o, a, "yOffset", d, a.yOffset)),
        e.setAttribute("data-svg-origin", v + " " + x);
    },
    jr = function (e, t) {
      var i = e._gsap || new el(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        n = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        f = jt(e, ut) || "0",
        u,
        p,
        d,
        c,
        g,
        h,
        _,
        m,
        w,
        y,
        v,
        x,
        T,
        A,
        E,
        P,
        S,
        k,
        C,
        O,
        I,
        L,
        R,
        F,
        $,
        J,
        b,
        W,
        Ae,
        we,
        ie,
        pe;
      return (
        (u = p = d = h = _ = m = w = y = v = 0),
        (c = g = 1),
        (i.svg = !!(e.getCTM && xl(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[fe] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[fe] !== "none" ? l[fe] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (A = wo(e, i.svg)),
        i.svg &&
          (i.uncache
            ? (($ = e.getBBox()),
              (f = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px"),
              (F = ""))
            : (F = !t && e.getAttribute("data-svg-origin")),
          yo(e, F || f, !!F || i.originIsAbsolute, i.smooth !== !1, A)),
        (x = i.xOrigin || 0),
        (T = i.yOrigin || 0),
        A !== Ur &&
          ((k = A[0]),
          (C = A[1]),
          (O = A[2]),
          (I = A[3]),
          (u = L = A[4]),
          (p = R = A[5]),
          A.length === 6
            ? ((c = Math.sqrt(k * k + C * C)),
              (g = Math.sqrt(I * I + O * O)),
              (h = k || C ? vr(C, k) * $i : 0),
              (w = O || I ? vr(O, I) * $i + h : 0),
              w && (g *= Math.abs(Math.cos(w * _r))),
              i.svg && ((u -= x - (x * k + T * O)), (p -= T - (x * C + T * I))))
            : ((pe = A[6]),
              (we = A[7]),
              (b = A[8]),
              (W = A[9]),
              (Ae = A[10]),
              (ie = A[11]),
              (u = A[12]),
              (p = A[13]),
              (d = A[14]),
              (E = vr(pe, Ae)),
              (_ = E * $i),
              E &&
                ((P = Math.cos(-E)),
                (S = Math.sin(-E)),
                (F = L * P + b * S),
                ($ = R * P + W * S),
                (J = pe * P + Ae * S),
                (b = L * -S + b * P),
                (W = R * -S + W * P),
                (Ae = pe * -S + Ae * P),
                (ie = we * -S + ie * P),
                (L = F),
                (R = $),
                (pe = J)),
              (E = vr(-O, Ae)),
              (m = E * $i),
              E &&
                ((P = Math.cos(-E)),
                (S = Math.sin(-E)),
                (F = k * P - b * S),
                ($ = C * P - W * S),
                (J = O * P - Ae * S),
                (ie = I * S + ie * P),
                (k = F),
                (C = $),
                (O = J)),
              (E = vr(C, k)),
              (h = E * $i),
              E &&
                ((P = Math.cos(E)),
                (S = Math.sin(E)),
                (F = k * P + C * S),
                ($ = L * P + R * S),
                (C = C * P - k * S),
                (R = R * P - L * S),
                (k = F),
                (L = $)),
              _ &&
                Math.abs(_) + Math.abs(h) > 359.9 &&
                ((_ = h = 0), (m = 180 - m)),
              (c = _e(Math.sqrt(k * k + C * C + O * O))),
              (g = _e(Math.sqrt(R * R + pe * pe))),
              (E = vr(L, R)),
              (w = Math.abs(E) > 2e-4 ? E * $i : 0),
              (v = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
          i.svg &&
            ((F = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Al(jt(e, fe))),
            F && e.setAttribute("transform", F))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (n
            ? ((c *= -1),
              (w += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
            : ((g *= -1), (w += w <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          p -
          ((i.yPercent =
            p &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = d + o),
        (i.scaleX = _e(c)),
        (i.scaleY = _e(g)),
        (i.rotation = _e(h) + a),
        (i.rotationX = _e(_) + a),
        (i.rotationY = _e(m) + a),
        (i.skewX = w + a),
        (i.skewY = y + a),
        (i.transformPerspective = v + o),
        (i.zOrigin = parseFloat(f.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[ut] = qn(f)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = gt.force3D),
        (i.renderTransform = i.svg ? Cd : _l ? El : Md),
        (i.uncache = 0),
        i
      );
    },
    qn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    xo = function (e, t, i) {
      var r = He(t);
      return _e(parseFloat(t) + parseFloat(bi(e, "x", i + "px", r))) + r;
    },
    Md = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        El(e, t);
    },
    Hi = "0deg",
    Qr = "0px",
    Wi = ") ",
    El = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        f = i.rotation,
        u = i.rotationY,
        p = i.rotationX,
        d = i.skewX,
        c = i.skewY,
        g = i.scaleX,
        h = i.scaleY,
        _ = i.transformPerspective,
        m = i.force3D,
        w = i.target,
        y = i.zOrigin,
        v = "",
        x = (m === "auto" && e && e !== 1) || m === !0;
      if (y && (p !== Hi || u !== Hi)) {
        var T = parseFloat(u) * _r,
          A = Math.sin(T),
          E = Math.cos(T),
          P;
        (T = parseFloat(p) * _r),
          (P = Math.cos(T)),
          (o = xo(w, o, A * P * -y)),
          (a = xo(w, a, -Math.sin(T) * -y)),
          (l = xo(w, l, E * P * -y + y));
      }
      _ !== Qr && (v += "perspective(" + _ + Wi),
        (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
        (x || o !== Qr || a !== Qr || l !== Qr) &&
          (v +=
            l !== Qr || x
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Wi),
        f !== Hi && (v += "rotate(" + f + Wi),
        u !== Hi && (v += "rotateY(" + u + Wi),
        p !== Hi && (v += "rotateX(" + p + Wi),
        (d !== Hi || c !== Hi) && (v += "skew(" + d + ", " + c + Wi),
        (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + Wi),
        (w.style[fe] = v || "translate(0, 0)");
    },
    Cd = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        f = i.skewX,
        u = i.skewY,
        p = i.scaleX,
        d = i.scaleY,
        c = i.target,
        g = i.xOrigin,
        h = i.yOrigin,
        _ = i.xOffset,
        m = i.yOffset,
        w = i.forceCSS,
        y = parseFloat(o),
        v = parseFloat(a),
        x,
        T,
        A,
        E,
        P;
      (l = parseFloat(l)),
        (f = parseFloat(f)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (f += u), (l += u)),
        l || f
          ? ((l *= _r),
            (f *= _r),
            (x = Math.cos(l) * p),
            (T = Math.sin(l) * p),
            (A = Math.sin(l - f) * -d),
            (E = Math.cos(l - f) * d),
            f &&
              ((u *= _r),
              (P = Math.tan(f - u)),
              (P = Math.sqrt(1 + P * P)),
              (A *= P),
              (E *= P),
              u &&
                ((P = Math.tan(u)),
                (P = Math.sqrt(1 + P * P)),
                (x *= P),
                (T *= P))),
            (x = _e(x)),
            (T = _e(T)),
            (A = _e(A)),
            (E = _e(E)))
          : ((x = p), (E = d), (T = A = 0)),
        ((y && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
          ((y = bi(c, "x", o, "px")), (v = bi(c, "y", a, "px"))),
        (g || h || _ || m) &&
          ((y = _e(y + g - (g * x + h * A) + _)),
          (v = _e(v + h - (g * T + h * E) + m))),
        (r || n) &&
          ((P = c.getBBox()),
          (y = _e(y + (r / 100) * P.width)),
          (v = _e(v + (n / 100) * P.height))),
        (P =
          "matrix(" +
          x +
          "," +
          T +
          "," +
          A +
          "," +
          E +
          "," +
          y +
          "," +
          v +
          ")"),
        c.setAttribute("transform", P),
        w && (c.style[fe] = P);
    },
    kd = function (e, t, i, r, n) {
      var o = 360,
        a = Oe(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? $i : 1),
        f = l - r,
        u = r + f + "deg",
        p,
        d;
      return (
        a &&
          ((p = n.split("_")[1]),
          p === "short" &&
            ((f %= o), f !== f % (o / 2) && (f += f < 0 ? o : -o)),
          p === "cw" && f < 0
            ? (f = ((f + o * dl) % o) - ~~(f / o) * o)
            : p === "ccw" && f > 0 && (f = ((f - o * dl) % o) - ~~(f / o) * o)),
        (e._pt = d = new lt(e._pt, t, i, r, f, pd)),
        (d.e = u),
        (d.u = "deg"),
        e._props.push(i),
        d
      );
    },
    Ml = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Od = function (e, t, i) {
      var r = Ml({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        f,
        u,
        p,
        d,
        c,
        g;
      r.svg
        ? ((f = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[fe] = t),
          (a = jr(i, 1)),
          Xi(i, fe),
          i.setAttribute("transform", f))
        : ((f = getComputedStyle(i)[fe]),
          (o[fe] = t),
          (a = jr(i, 1)),
          (o[fe] = f));
      for (l in si)
        (f = r[l]),
          (u = a[l]),
          f !== u &&
            n.indexOf(l) < 0 &&
            ((c = He(f)),
            (g = He(u)),
            (p = c !== g ? bi(i, l, f, g) : parseFloat(f)),
            (d = parseFloat(u)),
            (e._pt = new lt(e._pt, a, l, p, d - p, go)),
            (e._pt.u = g || 0),
            e._props.push(l));
      Ml(a, r);
    };
  at("padding,margin,Width,Radius", function (s, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      o = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (
        a
      ) {
        return e < 2 ? s + a : "border" + a + s;
      });
    Wn[e > 1 ? "border" + s : s] = function (a, l, f, u, p) {
      var d, c;
      if (arguments.length < 4)
        return (
          (d = o.map(function (g) {
            return oi(a, g, f);
          })),
          (c = d.join(" ")),
          c.split(d[0]).length === 5 ? d[0] : c
        );
      (d = (u + "").split(" ")),
        (c = {}),
        o.forEach(function (g, h) {
          return (c[g] = d[h] = d[h] || d[((h - 1) / 2) | 0]);
        }),
        a.init(l, c, p);
    };
  });
  var Cl = {
    name: "css",
    register: _o,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, n) {
      var o = this._props,
        a = e.style,
        l = i.vars.startAt,
        f,
        u,
        p,
        d,
        c,
        g,
        h,
        _,
        m,
        w,
        y,
        v,
        x,
        T,
        A,
        E;
      co || _o(),
        (this.styles = this.styles || ml(e)),
        (E = this.styles.props),
        (this.tween = i);
      for (h in t)
        if (
          h !== "autoRound" &&
          ((u = t[h]), !(_t[h] && tl(h, t, i, r, e, n)))
        ) {
          if (
            ((c = typeof u),
            (g = Wn[h]),
            c === "function" && ((u = u.call(i, r, e, n)), (c = typeof u)),
            c === "string" && ~u.indexOf("random(") && (u = Vr(u)),
            g)
          )
            g(this, e, h, u, i) && (A = 1);
          else if (h.substr(0, 2) === "--")
            (f = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
              (u += ""),
              (vi.lastIndex = 0),
              vi.test(f) || ((_ = He(f)), (m = He(u))),
              m ? _ !== m && (f = bi(e, h, f, m) + m) : _ && (u += _),
              this.add(a, "setProperty", f, u, r, n, 0, 0, h),
              o.push(h),
              E.push(h, 0, a[h]);
          else if (c !== "undefined") {
            if (
              (l && h in l
                ? ((f =
                    typeof l[h] == "function" ? l[h].call(i, r, e, n) : l[h]),
                  Oe(f) && ~f.indexOf("random(") && (f = Vr(f)),
                  He(f + "") ||
                    f === "auto" ||
                    (f += gt.units[h] || He(oi(e, h)) || ""),
                  (f + "").charAt(1) === "=" && (f = oi(e, h)))
                : (f = oi(e, h)),
              (d = parseFloat(f)),
              (w = c === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              w && (u = u.substr(2)),
              (p = parseFloat(u)),
              h in Ut &&
                (h === "autoAlpha" &&
                  (d === 1 && oi(e, "visibility") === "hidden" && p && (d = 0),
                  E.push("visibility", 0, a.visibility),
                  xi(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    p ? "inherit" : "hidden",
                    !p
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = Ut[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (y = h in si),
              y)
            ) {
              if (
                (this.styles.save(h),
                v ||
                  ((x = e._gsap),
                  (x.renderTransform && !t.parseTransform) ||
                    jr(e, t.parseTransform),
                  (T = t.smoothOrigin !== !1 && x.smooth),
                  (v = this._pt =
                    new lt(this._pt, a, fe, 0, 1, x.renderTransform, x, 0, -1)),
                  (v.dep = 1)),
                h === "scale")
              )
                (this._pt = new lt(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (w ? cr(x.scaleY, w + p) : p) - x.scaleY || 0,
                  go
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                E.push(ut, 0, a[ut]),
                  (u = Pd(u)),
                  x.svg
                    ? yo(e, u, 0, T, 0, this)
                    : ((m = parseFloat(u.split(" ")[2]) || 0),
                      m !== x.zOrigin && xi(this, x, "zOrigin", x.zOrigin, m),
                      xi(this, a, h, qn(f), qn(u)));
                continue;
              } else if (h === "svgOrigin") {
                yo(e, u, 1, T, 0, this);
                continue;
              } else if (h in Sl) {
                kd(this, x, h, d, w ? cr(d, w + u) : u);
                continue;
              } else if (h === "smoothOrigin") {
                xi(this, x, "smooth", x.smooth, u);
                continue;
              } else if (h === "force3D") {
                x[h] = u;
                continue;
              } else if (h === "transform") {
                Od(this, u, e);
                continue;
              }
            } else h in a || (h = wr(h) || h);
            if (
              y ||
              ((p || p === 0) && (d || d === 0) && !dd.test(u) && h in a)
            )
              (_ = (f + "").substr((d + "").length)),
                p || (p = 0),
                (m = He(u) || (h in gt.units ? gt.units[h] : _)),
                _ !== m && (d = bi(e, h, f, m)),
                (this._pt = new lt(
                  this._pt,
                  y ? x : a,
                  h,
                  d,
                  (w ? cr(d, w + p) : p) - d,
                  !y && (m === "px" || h === "zIndex") && t.autoRound !== !1
                    ? gd
                    : go
                )),
                (this._pt.u = m || 0),
                _ !== m && m !== "%" && ((this._pt.b = f), (this._pt.r = hd));
            else if (h in a) Ad.call(this, e, h, f, w ? w + u : u);
            else if (h in e) this.add(e, h, f || e[h], w ? w + u : u, r, n);
            else if (h !== "parseTransform") {
              Vs(h, u);
              continue;
            }
            y || (h in a ? E.push(h, 0, a[h]) : E.push(h, 1, f || e[h])),
              o.push(h);
          }
        }
      A && al(this);
    },
    render: function (e, t) {
      if (t.tween._time || !po())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: oi,
    aliases: Ut,
    getSetter: function (e, t, i) {
      var r = Ut[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in si && t !== ut && (e._gsap.x || oi(e, "x"))
          ? i && cl === i
            ? t === "scale"
              ? wd
              : vd
            : (cl = i || {}) && (t === "scale" ? yd : xd)
          : e.style && !Rs(e.style[t])
          ? md
          : ~t.indexOf("-")
          ? _d
          : oo(e, t)
      );
    },
    core: { _removeProperty: Xi, _getMatrix: wo },
  };
  (ft.utils.checkPrefix = wr),
    (ft.core.getStyleSaver = ml),
    (function (s, e, t, i) {
      var r = at(s + "," + e + "," + t, function (n) {
        si[n] = 1;
      });
      at(e, function (n) {
        (gt.units[n] = "deg"), (Sl[n] = 1);
      }),
        (Ut[r[13]] = s + "," + e),
        at(i, function (n) {
          var o = n.split(":");
          Ut[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    at(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        gt.units[s] = "px";
      }
    ),
    ft.registerPlugin(Cl);
  var bo = ft.registerPlugin(Cl) || ft;
  bo.core.Tween;
  /*!
   * paths 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Dd = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    zd = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    Id = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    Ld = /(^[#\.][a-z]|[a-y][a-z])/i,
    Rd = Math.PI / 180,
    Un = Math.sin,
    jn = Math.cos,
    Zr = Math.abs,
    Kr = Math.sqrt,
    kl = function (e) {
      return typeof e == "string";
    },
    Ol = function (e) {
      return typeof e == "number";
    },
    Dl = 1e5,
    Ti = function (e) {
      return Math.round(e * Dl) / Dl || 0;
    };
  function Fd(s) {
    s = (kl(s) && Ld.test(s) && document.querySelector(s)) || s;
    var e = s.getAttribute ? s : 0,
      t;
    return e && (s = s.getAttribute("d"))
      ? (e._gsPath || (e._gsPath = {}),
        (t = e._gsPath[s]),
        t && !t._dirty ? t : (e._gsPath[s] = Si(s)))
      : s
      ? kl(s)
        ? Si(s)
        : Ol(s[0])
        ? [s]
        : s
      : console.warn("Expecting a <path> element or an SVG path data string");
  }
  function Jr(s) {
    var e = 0,
      t;
    for (s.reverse(); e < s.length; e += 2)
      (t = s[e]), (s[e] = s[e + 1]), (s[e + 1] = t);
    s.reversed = !s.reversed;
  }
  var Bd = function (e, t) {
      var i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
        r = [].slice.call(e.attributes),
        n = r.length,
        o;
      for (t = "," + t + ","; --n > -1; )
        (o = r[n].nodeName.toLowerCase()),
          t.indexOf("," + o + ",") < 0 &&
            i.setAttributeNS(null, o, r[n].nodeValue);
      return i;
    },
    Nd = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    },
    Gd = function (e, t) {
      for (var i = t ? t.split(",") : [], r = {}, n = i.length; --n > -1; )
        r[i[n]] = +e.getAttribute(i[n]) || 0;
      return r;
    };
  function zl(s, e) {
    var t = s.tagName.toLowerCase(),
      i = 0.552284749831,
      r,
      n,
      o,
      a,
      l,
      f,
      u,
      p,
      d,
      c,
      g,
      h,
      _,
      m,
      w,
      y,
      v,
      x,
      T,
      A,
      E,
      P;
    return t === "path" || !s.getBBox
      ? s
      : ((f = Bd(s, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
        (P = Gd(s, Nd[t])),
        t === "rect"
          ? ((a = P.rx),
            (l = P.ry || a),
            (n = P.x),
            (o = P.y),
            (c = P.width - a * 2),
            (g = P.height - l * 2),
            a || l
              ? ((h = n + a * (1 - i)),
                (_ = n + a),
                (m = _ + c),
                (w = m + a * i),
                (y = m + a),
                (v = o + l * (1 - i)),
                (x = o + l),
                (T = x + g),
                (A = T + l * i),
                (E = T + l),
                (r =
                  "M" +
                  y +
                  "," +
                  x +
                  " V" +
                  T +
                  " C" +
                  [
                    y,
                    A,
                    w,
                    E,
                    m,
                    E,
                    m - (m - _) / 3,
                    E,
                    _ + (m - _) / 3,
                    E,
                    _,
                    E,
                    h,
                    E,
                    n,
                    A,
                    n,
                    T,
                    n,
                    T - (T - x) / 3,
                    n,
                    x + (T - x) / 3,
                    n,
                    x,
                    n,
                    v,
                    h,
                    o,
                    _,
                    o,
                    _ + (m - _) / 3,
                    o,
                    m - (m - _) / 3,
                    o,
                    m,
                    o,
                    w,
                    o,
                    y,
                    v,
                    y,
                    x,
                  ].join(",") +
                  "z"))
              : (r =
                  "M" +
                  (n + c) +
                  "," +
                  o +
                  " v" +
                  g +
                  " h" +
                  -c +
                  " v" +
                  -g +
                  " h" +
                  c +
                  "z"))
          : t === "circle" || t === "ellipse"
          ? (t === "circle"
              ? ((a = l = P.r), (p = a * i))
              : ((a = P.rx), (l = P.ry), (p = l * i)),
            (n = P.cx),
            (o = P.cy),
            (u = a * i),
            (r =
              "M" +
              (n + a) +
              "," +
              o +
              " C" +
              [
                n + a,
                o + p,
                n + u,
                o + l,
                n,
                o + l,
                n - u,
                o + l,
                n - a,
                o + p,
                n - a,
                o,
                n - a,
                o - p,
                n - u,
                o - l,
                n,
                o - l,
                n + u,
                o - l,
                n + a,
                o - p,
                n + a,
                o,
              ].join(",") +
              "z"))
          : t === "line"
          ? (r = "M" + P.x1 + "," + P.y1 + " L" + P.x2 + "," + P.y2)
          : (t === "polyline" || t === "polygon") &&
            ((d = (s.getAttribute("points") + "").match(zd) || []),
            (n = d.shift()),
            (o = d.shift()),
            (r = "M" + n + "," + o + " L" + d.join(",")),
            t === "polygon" && (r += "," + n + "," + o + "z")),
        f.setAttribute("d", yr((f._gsRawPath = Si(r)))),
        e &&
          s.parentNode &&
          (s.parentNode.insertBefore(f, s), s.parentNode.removeChild(s)),
        f);
  }
  function Yd(s, e, t, i, r, n, o, a, l) {
    if (!(s === a && e === l)) {
      (t = Zr(t)), (i = Zr(i));
      var f = (r % 360) * Rd,
        u = jn(f),
        p = Un(f),
        d = Math.PI,
        c = d * 2,
        g = (s - a) / 2,
        h = (e - l) / 2,
        _ = u * g + p * h,
        m = -p * g + u * h,
        w = _ * _,
        y = m * m,
        v = w / (t * t) + y / (i * i);
      v > 1 && ((t = Kr(v) * t), (i = Kr(v) * i));
      var x = t * t,
        T = i * i,
        A = (x * T - x * y - T * w) / (x * y + T * w);
      A < 0 && (A = 0);
      var E = (n === o ? -1 : 1) * Kr(A),
        P = E * ((t * m) / i),
        S = E * -((i * _) / t),
        k = (s + a) / 2,
        C = (e + l) / 2,
        O = k + (u * P - p * S),
        I = C + (p * P + u * S),
        L = (_ - P) / t,
        R = (m - S) / i,
        F = (-_ - P) / t,
        $ = (-m - S) / i,
        J = L * L + R * R,
        b = (R < 0 ? -1 : 1) * Math.acos(L / Kr(J)),
        W =
          (L * $ - R * F < 0 ? -1 : 1) *
          Math.acos((L * F + R * $) / Kr(J * (F * F + $ * $)));
      isNaN(W) && (W = d),
        !o && W > 0 ? (W -= c) : o && W < 0 && (W += c),
        (b %= c),
        (W %= c);
      var Ae = Math.ceil(Zr(W) / (c / 4)),
        we = [],
        ie = W / Ae,
        pe = ((4 / 3) * Un(ie / 2)) / (1 + jn(ie / 2)),
        Ne = u * t,
        he = p * t,
        Ge = p * -i,
        Le = u * i,
        ge;
      for (ge = 0; ge < Ae; ge++)
        (r = b + ge * ie),
          (_ = jn(r)),
          (m = Un(r)),
          (L = jn((r += ie))),
          (R = Un(r)),
          we.push(_ - pe * m, m + pe * _, L + pe * R, R - pe * L, L, R);
      for (ge = 0; ge < we.length; ge += 2)
        (_ = we[ge]),
          (m = we[ge + 1]),
          (we[ge] = _ * Ne + m * Ge + O),
          (we[ge + 1] = _ * he + m * Le + I);
      return (we[ge - 2] = a), (we[ge - 1] = l), we;
    }
  }
  function Si(s) {
    var e =
        (s + "")
          .replace(Id, function (P) {
            var S = +P;
            return S < 1e-4 && S > -1e-4 ? 0 : S;
          })
          .match(Dd) || [],
      t = [],
      i = 0,
      r = 0,
      n = 2 / 3,
      o = e.length,
      a = 0,
      l = "ERROR: malformed path: " + s,
      f,
      u,
      p,
      d,
      c,
      g,
      h,
      _,
      m,
      w,
      y,
      v,
      x,
      T,
      A,
      E = function (S, k, C, O) {
        (w = (C - S) / 3),
          (y = (O - k) / 3),
          h.push(S + w, k + y, C - w, O - y, C, O);
      };
    if (!s || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), t;
    for (f = 0; f < o; f++)
      if (
        ((x = c),
        isNaN(e[f]) ? ((c = e[f].toUpperCase()), (g = c !== e[f])) : f--,
        (p = +e[f + 1]),
        (d = +e[f + 2]),
        g && ((p += i), (d += r)),
        f || ((_ = p), (m = d)),
        c === "M")
      )
        h && (h.length < 8 ? (t.length -= 1) : (a += h.length)),
          (i = _ = p),
          (r = m = d),
          (h = [p, d]),
          t.push(h),
          (f += 2),
          (c = "L");
      else if (c === "C")
        h || (h = [0, 0]),
          g || (i = r = 0),
          h.push(
            p,
            d,
            i + e[f + 3] * 1,
            r + e[f + 4] * 1,
            (i += e[f + 5] * 1),
            (r += e[f + 6] * 1)
          ),
          (f += 6);
      else if (c === "S")
        (w = i),
          (y = r),
          (x === "C" || x === "S") &&
            ((w += i - h[h.length - 4]), (y += r - h[h.length - 3])),
          g || (i = r = 0),
          h.push(w, y, p, d, (i += e[f + 3] * 1), (r += e[f + 4] * 1)),
          (f += 4);
      else if (c === "Q")
        (w = i + (p - i) * n),
          (y = r + (d - r) * n),
          g || (i = r = 0),
          (i += e[f + 3] * 1),
          (r += e[f + 4] * 1),
          h.push(w, y, i + (p - i) * n, r + (d - r) * n, i, r),
          (f += 4);
      else if (c === "T")
        (w = i - h[h.length - 4]),
          (y = r - h[h.length - 3]),
          h.push(
            i + w,
            r + y,
            p + (i + w * 1.5 - p) * n,
            d + (r + y * 1.5 - d) * n,
            (i = p),
            (r = d)
          ),
          (f += 2);
      else if (c === "H") E(i, r, (i = p), r), (f += 1);
      else if (c === "V") E(i, r, i, (r = p + (g ? r - i : 0))), (f += 1);
      else if (c === "L" || c === "Z")
        c === "Z" && ((p = _), (d = m), (h.closed = !0)),
          (c === "L" || Zr(i - p) > 0.5 || Zr(r - d) > 0.5) &&
            (E(i, r, p, d), c === "L" && (f += 2)),
          (i = p),
          (r = d);
      else if (c === "A") {
        if (
          ((T = e[f + 4]),
          (A = e[f + 5]),
          (w = e[f + 6]),
          (y = e[f + 7]),
          (u = 7),
          T.length > 1 &&
            (T.length < 3
              ? ((y = w), (w = A), u--)
              : ((y = A), (w = T.substr(2)), (u -= 2)),
            (A = T.charAt(1)),
            (T = T.charAt(0))),
          (v = Yd(
            i,
            r,
            +e[f + 1],
            +e[f + 2],
            +e[f + 3],
            +T,
            +A,
            (g ? i : 0) + w * 1,
            (g ? r : 0) + y * 1
          )),
          (f += u),
          v)
        )
          for (u = 0; u < v.length; u++) h.push(v[u]);
        (i = h[h.length - 2]), (r = h[h.length - 1]);
      } else console.log(l);
    return (
      (f = h.length),
      f < 6
        ? (t.pop(), (f = 0))
        : h[0] === h[f - 2] && h[1] === h[f - 1] && (h.closed = !0),
      (t.totalPoints = a + f),
      t
    );
  }
  function yr(s) {
    Ol(s[0]) && (s = [s]);
    var e = "",
      t = s.length,
      i,
      r,
      n,
      o;
    for (r = 0; r < t; r++) {
      for (
        o = s[r],
          e += "M" + Ti(o[0]) + "," + Ti(o[1]) + " C",
          i = o.length,
          n = 2;
        n < i;
        n++
      )
        e +=
          Ti(o[n++]) +
          "," +
          Ti(o[n++]) +
          " " +
          Ti(o[n++]) +
          "," +
          Ti(o[n++]) +
          " " +
          Ti(o[n++]) +
          "," +
          Ti(o[n]) +
          " ";
      o.closed && (e += "z");
    }
    return e;
  }
  /*!
   * MorphSVGPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Lt,
    To,
    en,
    Il,
    tn,
    Ll = function () {
      return (
        Lt ||
        (typeof window < "u" && (Lt = window.gsap) && Lt.registerPlugin && Lt)
      );
    },
    So = function (e) {
      return typeof e == "function";
    },
    qi = Math.atan2,
    Rl = Math.cos,
    Fl = Math.sin,
    ai = Math.sqrt,
    Qn = Math.PI,
    Bl = Qn * 2,
    Vd = Qn * 0.3,
    $d = Qn * 0.7,
    Nl = 1e20,
    rn = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    Xd = /(^[#\.][a-z]|[a-y][a-z])/i,
    Hd = /[achlmqstvz]/i,
    Ai = function (e) {
      return console && console.warn(e);
    },
    Wd = 1,
    Gl = function (e) {
      var t = e.length,
        i = 0,
        r = 0,
        n;
      for (n = 0; n < t; n++) (i += e[n++]), (r += e[n]);
      return [i / (t / 2), r / (t / 2)];
    },
    xr = function (e) {
      var t = e.length,
        i = e[0],
        r = i,
        n = e[1],
        o = n,
        a,
        l,
        f;
      for (f = 6; f < t; f += 6)
        (a = e[f]),
          (l = e[f + 1]),
          a > i ? (i = a) : a < r && (r = a),
          l > n ? (n = l) : l < o && (o = l);
      return (
        (e.centerX = (i + r) / 2),
        (e.centerY = (n + o) / 2),
        (e.size = (i - r) * (n - o))
      );
    },
    nn = function (e, t) {
      t === void 0 && (t = 3);
      for (
        var i = e.length,
          r = e[0][0],
          n = r,
          o = e[0][1],
          a = o,
          l = 1 / t,
          f,
          u,
          p,
          d,
          c,
          g,
          h,
          _,
          m,
          w,
          y,
          v,
          x,
          T,
          A,
          E;
        --i > -1;

      )
        for (c = e[i], f = c.length, d = 6; d < f; d += 6)
          for (
            m = c[d],
              w = c[d + 1],
              y = c[d + 2] - m,
              T = c[d + 3] - w,
              v = c[d + 4] - m,
              A = c[d + 5] - w,
              x = c[d + 6] - m,
              E = c[d + 7] - w,
              g = t;
            --g > -1;

          )
            (h = l * g),
              (_ = 1 - h),
              (u = (h * h * x + 3 * _ * (h * v + _ * y)) * h + m),
              (p = (h * h * E + 3 * _ * (h * A + _ * T)) * h + w),
              u > r ? (r = u) : u < n && (n = u),
              p > o ? (o = p) : p < a && (a = p);
      return (
        (e.centerX = (r + n) / 2),
        (e.centerY = (o + a) / 2),
        (e.left = n),
        (e.width = r - n),
        (e.top = a),
        (e.height = o - a),
        (e.size = (r - n) * (o - a))
      );
    },
    qd = function (e, t) {
      return t.length - e.length;
    },
    Yl = function (e, t) {
      var i = e.size || xr(e),
        r = t.size || xr(t);
      return Math.abs(r - i) < (i + r) / 20
        ? t.centerX - e.centerX || t.centerY - e.centerY
        : r - i;
    },
    Vl = function (e, t) {
      var i = e.slice(0),
        r = e.length,
        n = r - 2,
        o,
        a;
      for (t = t | 0, o = 0; o < r; o++)
        (a = (o + t) % n), (e[o++] = i[a]), (e[o] = i[a + 1]);
    },
    Ao = function (e, t, i, r, n) {
      var o = e.length,
        a = 0,
        l = o - 2,
        f,
        u,
        p,
        d;
      for (i *= 6, u = 0; u < o; u += 6)
        (f = (u + i) % l),
          (d = e[f] - (t[u] - r)),
          (p = e[f + 1] - (t[u + 1] - n)),
          (a += ai(p * p + d * d));
      return a;
    },
    Ud = function (e, t, i) {
      var r = e.length,
        n = Gl(e),
        o = Gl(t),
        a = o[0] - n[0],
        l = o[1] - n[1],
        f = Ao(e, t, 0, a, l),
        u = 0,
        p,
        d,
        c;
      for (c = 6; c < r; c += 6)
        (d = Ao(e, t, c / 6, a, l)), d < f && ((f = d), (u = c));
      if (i)
        for (p = e.slice(0), Jr(p), c = 6; c < r; c += 6)
          (d = Ao(p, t, c / 6, a, l)), d < f && ((f = d), (u = -c));
      return u / 6;
    },
    jd = function (e, t, i) {
      for (var r = e.length, n = Nl, o = 0, a = 0, l, f, u, p, d, c; --r > -1; )
        for (l = e[r], c = l.length, d = 0; d < c; d += 6)
          (f = l[d] - t),
            (u = l[d + 1] - i),
            (p = ai(f * f + u * u)),
            p < n && ((n = p), (o = l[d]), (a = l[d + 1]));
      return [o, a];
    },
    Qd = function (e, t, i, r, n, o) {
      var a = t.length,
        l = 0,
        f = Math.min(e.size || xr(e), t[i].size || xr(t[i])) * r,
        u = Nl,
        p = e.centerX + n,
        d = e.centerY + o,
        c,
        g,
        h,
        _,
        m;
      for (g = i; g < a && ((c = t[g].size || xr(t[g])), !(c < f)); g++)
        (h = t[g].centerX - p),
          (_ = t[g].centerY - d),
          (m = ai(h * h + _ * _)),
          m < u && ((l = g), (u = m));
      return (m = t[l]), t.splice(l, 1), m;
    },
    Po = function (e, t) {
      var i = 0,
        r = 0.999999,
        n = e.length,
        o = t / ((n - 2) / 6),
        a,
        l,
        f,
        u,
        p,
        d,
        c,
        g,
        h,
        _,
        m,
        w,
        y,
        v;
      for (y = 2; y < n; y += 6)
        for (i += o; i > r; )
          (a = e[y - 2]),
            (l = e[y - 1]),
            (f = e[y]),
            (u = e[y + 1]),
            (p = e[y + 2]),
            (d = e[y + 3]),
            (c = e[y + 4]),
            (g = e[y + 5]),
            (v = 1 / ((Math.floor(i) || 1) + 1)),
            (h = a + (f - a) * v),
            (m = f + (p - f) * v),
            (h += (m - h) * v),
            (m += (p + (c - p) * v - m) * v),
            (_ = l + (u - l) * v),
            (w = u + (d - u) * v),
            (_ += (w - _) * v),
            (w += (d + (g - d) * v - w) * v),
            e.splice(
              y,
              4,
              a + (f - a) * v,
              l + (u - l) * v,
              h,
              _,
              h + (m - h) * v,
              _ + (w - _) * v,
              m,
              w,
              p + (c - p) * v,
              d + (g - d) * v
            ),
            (y += 6),
            (n += 6),
            i--;
      return e;
    },
    Eo = function (e, t, i, r, n) {
      var o = t.length - e.length,
        a = o > 0 ? t : e,
        l = o > 0 ? e : t,
        f = 0,
        u = r === "complexity" ? qd : Yl,
        p = r === "position" ? 0 : typeof r == "number" ? r : 0.8,
        d = l.length,
        c = typeof i == "object" && i.push ? i.slice(0) : [i],
        g = c[0] === "reverse" || c[0] < 0,
        h = i === "log",
        _,
        m,
        w,
        y,
        v,
        x,
        T;
      if (l[0]) {
        if (
          a.length > 1 &&
          (e.sort(u),
          t.sort(u),
          (x = a.size || nn(a)),
          (x = l.size || nn(l)),
          (x = a.centerX - l.centerX),
          (T = a.centerY - l.centerY),
          u === Yl)
        )
          for (d = 0; d < l.length; d++)
            a.splice(d, 0, Qd(l[d], a, d, p, x, T));
        if (o)
          for (
            o < 0 && (o = -o),
              a[0].length > l[0].length &&
                Po(l[0], ((a[0].length - l[0].length) / 6) | 0),
              d = l.length;
            f < o;

          )
            (y = a[d].size || xr(a[d])),
              (w = jd(l, a[d].centerX, a[d].centerY)),
              (y = w[0]),
              (v = w[1]),
              (l[d++] = [y, v, y, v, y, v, y, v]),
              (l.totalPoints += 8),
              f++;
        for (d = 0; d < e.length; d++)
          (_ = t[d]),
            (m = e[d]),
            (o = _.length - m.length),
            o < 0 ? Po(_, (-o / 6) | 0) : o > 0 && Po(m, (o / 6) | 0),
            g && n !== !1 && !m.reversed && Jr(m),
            (i = c[d] || c[d] === 0 ? c[d] : "auto"),
            i &&
              (m.closed ||
              (Math.abs(m[0] - m[m.length - 2]) < 0.5 &&
                Math.abs(m[1] - m[m.length - 1]) < 0.5)
                ? i === "auto" || i === "log"
                  ? ((c[d] = i = Ud(m, _, !d || n === !1)),
                    i < 0 && ((g = !0), Jr(m), (i = -i)),
                    Vl(m, i * 6))
                  : i !== "reverse" &&
                    (d && i < 0 && Jr(m), Vl(m, (i < 0 ? -i : i) * 6))
                : !g &&
                  ((i === "auto" &&
                    Math.abs(_[0] - m[0]) +
                      Math.abs(_[1] - m[1]) +
                      Math.abs(_[_.length - 2] - m[m.length - 2]) +
                      Math.abs(_[_.length - 1] - m[m.length - 1]) >
                      Math.abs(_[0] - m[m.length - 2]) +
                        Math.abs(_[1] - m[m.length - 1]) +
                        Math.abs(_[_.length - 2] - m[0]) +
                        Math.abs(_[_.length - 1] - m[1])) ||
                    i % 2)
                ? (Jr(m), (c[d] = -1), (g = !0))
                : i === "auto"
                ? (c[d] = 0)
                : i === "reverse" && (c[d] = -1),
              m.closed !== _.closed && (m.closed = _.closed = !1));
        return (
          h && Ai("shapeIndex:[" + c.join(",") + "]"), (e.shapeIndex = c), c
        );
      }
    },
    $l = function (e, t, i, r, n) {
      var o = Si(e[0]),
        a = Si(e[1]);
      Eo(o, a, t || t === 0 ? t : "auto", i, n) &&
        ((e[0] = yr(o)),
        (e[1] = yr(a)),
        (r === "log" || r === !0) &&
          Ai('precompile:["' + e[0] + '","' + e[1] + '"]'));
    },
    Zd = function (e, t) {
      if (!t) return e;
      var i = e.match(rn) || [],
        r = i.length,
        n = "",
        o,
        a,
        l;
      for (
        t === "reverse"
          ? ((a = r - 1), (o = -2))
          : ((a = ((parseInt(t, 10) || 0) * 2 + 1 + r * 100) % r), (o = 2)),
          l = 0;
        l < r;
        l += 2
      )
        (n += i[a - 1] + "," + i[a] + " "), (a = (a + o) % r);
      return n;
    },
    Xl = function (e, t) {
      var i = 0,
        r = parseFloat(e[0]),
        n = parseFloat(e[1]),
        o = r + "," + n + " ",
        a = 0.999999,
        l,
        f,
        u,
        p,
        d,
        c,
        g;
      for (
        u = e.length, l = (t * 0.5) / (u * 0.5 - 1), f = 0;
        f < u - 2;
        f += 2
      ) {
        if (
          ((i += l),
          (c = parseFloat(e[f + 2])),
          (g = parseFloat(e[f + 3])),
          i > a)
        )
          for (d = 1 / (Math.floor(i) + 1), p = 1; i > a; )
            (o +=
              (r + (c - r) * d * p).toFixed(2) +
              "," +
              (n + (g - n) * d * p).toFixed(2) +
              " "),
              i--,
              p++;
        (o += c + "," + g + " "), (r = c), (n = g);
      }
      return o;
    },
    Mo = function (e) {
      var t = e[0].match(rn) || [],
        i = e[1].match(rn) || [],
        r = i.length - t.length;
      r > 0 ? (e[0] = Xl(t, r)) : (e[1] = Xl(i, -r));
    },
    Kd = function (e) {
      return isNaN(e)
        ? Mo
        : function (t) {
            Mo(t), (t[1] = Zd(t[1], parseInt(e, 10)));
          };
    },
    Jd = function (e, t, i) {
      var r = typeof e == "string",
        n,
        o;
      return (
        (!r || Xd.test(e) || (e.match(rn) || []).length < 3) &&
          ((n = To(e)[0]),
          n
            ? ((o = (n.nodeName + "").toUpperCase()),
              t && o !== "PATH" && ((n = zl(n, !1)), (o = "PATH")),
              (e = n.getAttribute(o === "PATH" ? "d" : "points") || ""),
              n === i && (e = n.getAttributeNS(null, "data-original") || e))
            : (Ai("WARNING: invalid morph to: " + e), (e = !1))),
        e
      );
    },
    Hl = function (e, t) {
      for (
        var i = e.length,
          r = 0.2 * (t || 1),
          n,
          o,
          a,
          l,
          f,
          u,
          p,
          d,
          c,
          g,
          h,
          _;
        --i > -1;

      ) {
        for (
          o = e[i],
            h = o.isSmooth = o.isSmooth || [0, 0, 0, 0],
            _ = o.smoothData = o.smoothData || [0, 0, 0, 0],
            h.length = 4,
            d = o.length - 2,
            p = 6;
          p < d;
          p += 6
        )
          (a = o[p] - o[p - 2]),
            (l = o[p + 1] - o[p - 1]),
            (f = o[p + 2] - o[p]),
            (u = o[p + 3] - o[p + 1]),
            (c = qi(l, a)),
            (g = qi(u, f)),
            (n = Math.abs(c - g) < r),
            n &&
              ((_[p - 2] = c),
              (_[p + 2] = g),
              (_[p - 1] = ai(a * a + l * l)),
              (_[p + 3] = ai(f * f + u * u))),
            h.push(n, n, 0, 0, n, n);
        o[d] === o[0] &&
          o[d + 1] === o[1] &&
          ((a = o[0] - o[d - 2]),
          (l = o[1] - o[d - 1]),
          (f = o[2] - o[0]),
          (u = o[3] - o[1]),
          (c = qi(l, a)),
          (g = qi(u, f)),
          Math.abs(c - g) < r &&
            ((_[d - 2] = c),
            (_[2] = g),
            (_[d - 1] = ai(a * a + l * l)),
            (_[3] = ai(f * f + u * u)),
            (h[d - 2] = h[d - 1] = !0)));
      }
      return e;
    },
    Wl = function (e) {
      var t = e.trim().split(" "),
        i = ~e.indexOf("left")
          ? 0
          : ~e.indexOf("right")
          ? 100
          : isNaN(parseFloat(t[0]))
          ? 50
          : parseFloat(t[0]),
        r = ~e.indexOf("top")
          ? 0
          : ~e.indexOf("bottom")
          ? 100
          : isNaN(parseFloat(t[1]))
          ? 50
          : parseFloat(t[1]);
      return { x: i / 100, y: r / 100 };
    },
    ep = function (e) {
      return e !== e % Qn ? e + (e < 0 ? Bl : -Bl) : e;
    },
    ql =
      "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
    tp = function (e, t, i, r) {
      var n = this._origin,
        o = this._eOrigin,
        a = e[i] - n.x,
        l = e[i + 1] - n.y,
        f = ai(a * a + l * l),
        u = qi(l, a),
        p,
        d;
      return (
        (a = t[i] - o.x),
        (l = t[i + 1] - o.y),
        (p = qi(l, a) - u),
        (d = ep(p)),
        !r && en && Math.abs(d + en.ca) < Vd && (r = en),
        (this._anchorPT = en =
          {
            _next: this._anchorPT,
            t: e,
            sa: u,
            ca: r && d * r.ca < 0 && Math.abs(d) > $d ? p : d,
            sl: f,
            cl: ai(a * a + l * l) - f,
            i,
          })
      );
    },
    Ul = function (e) {
      (Lt = Ll()),
        (tn = tn || (Lt && Lt.plugins.morphSVG)),
        Lt && tn
          ? ((To = Lt.utils.toArray),
            (tn.prototype._tweenRotation = tp),
            (Il = 1))
          : e && Ai("Please gsap.registerPlugin(MorphSVGPlugin)");
    },
    br = {
      version: "3.12.5",
      name: "morphSVG",
      rawVars: 1,
      register: function (e, t) {
        (Lt = e), (tn = t), Ul();
      },
      init: function (e, t, i, r, n) {
        if ((Il || Ul(1), !t)) return Ai("invalid shape"), !1;
        So(t) && (t = t.call(i, r, e, n));
        var o, a, l, f, u, p, d, c, g, h, _, m, w, y, v, x, T, A, E, P, S, k;
        if (typeof t == "string" || t.getBBox || t[0]) t = { shape: t };
        else if (typeof t == "object") {
          o = {};
          for (a in t)
            o[a] = So(t[a]) && a !== "render" ? t[a].call(i, r, e, n) : t[a];
          t = o;
        }
        var C = e.nodeType ? window.getComputedStyle(e) : {},
          O = C.fill + "",
          I = !(
            O === "none" ||
            (O.match(rn) || [])[3] === "0" ||
            C.fillRule === "evenodd"
          ),
          L = (t.origin || "50 50").split(",");
        if (
          ((o = (e.nodeName + "").toUpperCase()),
          (u = o === "POLYLINE" || o === "POLYGON"),
          o !== "PATH" && !u && !t.prop)
        )
          return Ai("Cannot morph a <" + o + "> element. " + ql), !1;
        if (
          ((a = o === "PATH" ? "d" : "points"), !t.prop && !So(e.setAttribute))
        )
          return !1;
        if (
          ((f = Jd(t.shape || t.d || t.points || "", a === "d", e)),
          u && Hd.test(f))
        )
          return Ai("A <" + o + "> cannot accept path data. " + ql), !1;
        if (
          ((p = t.shapeIndex || t.shapeIndex === 0 ? t.shapeIndex : "auto"),
          (d = t.map || br.defaultMap),
          (this._prop = t.prop),
          (this._render = t.render || br.defaultRender),
          (this._apply =
            "updateTarget" in t ? t.updateTarget : br.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision)),
          (this._tween = i),
          f)
        ) {
          if (
            ((this._target = e),
            (T = typeof t.precompile == "object"),
            (h = this._prop ? e[this._prop] : e.getAttribute(a)),
            !this._prop &&
              !e.getAttributeNS(null, "data-original") &&
              e.setAttributeNS(null, "data-original", h),
            a === "d" || this._prop)
          ) {
            if (
              ((h = Si(T ? t.precompile[0] : h)),
              (_ = Si(T ? t.precompile[1] : f)),
              !T && !Eo(h, _, p, d, I))
            )
              return !1;
            for (
              (t.precompile === "log" || t.precompile === !0) &&
                Ai('precompile:["' + yr(h) + '","' + yr(_) + '"]'),
                S = (t.type || br.defaultType) !== "linear",
                S &&
                  ((h = Hl(h, t.smoothTolerance)),
                  (_ = Hl(_, t.smoothTolerance)),
                  h.size || nn(h),
                  _.size || nn(_),
                  (P = Wl(L[0])),
                  (this._origin = h.origin =
                    { x: h.left + P.x * h.width, y: h.top + P.y * h.height }),
                  L[1] && (P = Wl(L[1])),
                  (this._eOrigin = {
                    x: _.left + P.x * _.width,
                    y: _.top + P.y * _.height,
                  })),
                this._rawPath = e._gsRawPath = h,
                w = h.length;
              --w > -1;

            )
              for (
                v = h[w],
                  x = _[w],
                  c = v.isSmooth || [],
                  g = x.isSmooth || [],
                  y = v.length,
                  en = 0,
                  m = 0;
                m < y;
                m += 2
              )
                (x[m] !== v[m] || x[m + 1] !== v[m + 1]) &&
                  (S
                    ? c[m] && g[m]
                      ? ((A = v.smoothData),
                        (E = x.smoothData),
                        (k = m + (m === y - 4 ? 7 - y : 5)),
                        (this._controlPT = {
                          _next: this._controlPT,
                          i: m,
                          j: w,
                          l1s: A[m + 1],
                          l1c: E[m + 1] - A[m + 1],
                          l2s: A[k],
                          l2c: E[k] - A[k],
                        }),
                        (l = this._tweenRotation(v, x, m + 2)),
                        this._tweenRotation(v, x, m, l),
                        this._tweenRotation(v, x, k - 1, l),
                        (m += 4))
                      : this._tweenRotation(v, x, m)
                    : ((l = this.add(v, m, v[m], x[m], 0, 0, 0, 0, 0, 1)),
                      (l =
                        this.add(
                          v,
                          m + 1,
                          v[m + 1],
                          x[m + 1],
                          0,
                          0,
                          0,
                          0,
                          0,
                          1
                        ) || l)));
          } else
            l = this.add(
              e,
              "setAttribute",
              e.getAttribute(a) + "",
              f + "",
              r,
              n,
              0,
              Kd(p),
              a
            );
          S &&
            (this.add(
              this._origin,
              "x",
              this._origin.x,
              this._eOrigin.x,
              0,
              0,
              0,
              0,
              0,
              1
            ),
            (l = this.add(
              this._origin,
              "y",
              this._origin.y,
              this._eOrigin.y,
              0,
              0,
              0,
              0,
              0,
              1
            ))),
            l && (this._props.push("morphSVG"), (l.end = f), (l.endProp = a));
        }
        return Wd;
      },
      render: function (e, t) {
        for (
          var i = t._rawPath,
            r = t._controlPT,
            n = t._anchorPT,
            o = t._rnd,
            a = t._target,
            l = t._pt,
            f,
            u,
            p,
            d,
            c,
            g,
            h,
            _,
            m,
            w,
            y,
            v,
            x;
          l;

        )
          l.r(e, l.d), (l = l._next);
        if (e === 1 && t._apply)
          for (l = t._pt; l; )
            l.end &&
              (t._prop
                ? (a[t._prop] = l.end)
                : a.setAttribute(l.endProp, l.end)),
              (l = l._next);
        else if (i) {
          for (; n; )
            (g = n.sa + e * n.ca),
              (c = n.sl + e * n.cl),
              (n.t[n.i] = t._origin.x + Rl(g) * c),
              (n.t[n.i + 1] = t._origin.y + Fl(g) * c),
              (n = n._next);
          for (p = e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1; r; )
            (h = r.i),
              (d = i[r.j]),
              (x = h + (h === d.length - 4 ? 7 - d.length : 5)),
              (g = qi(d[x] - d[h + 1], d[x - 1] - d[h])),
              (y = Fl(g)),
              (v = Rl(g)),
              (m = d[h + 2]),
              (w = d[h + 3]),
              (c = r.l1s + p * r.l1c),
              (d[h] = m - v * c),
              (d[h + 1] = w - y * c),
              (c = r.l2s + p * r.l2c),
              (d[x - 1] = m + v * c),
              (d[x] = w + y * c),
              (r = r._next);
          if (((a._gsRawPath = i), t._apply)) {
            for (f = "", u = " ", _ = 0; _ < i.length; _++)
              for (
                d = i[_],
                  c = d.length,
                  f +=
                    "M" +
                    ((d[0] * o) | 0) / o +
                    u +
                    ((d[1] * o) | 0) / o +
                    " C",
                  h = 2;
                h < c;
                h++
              )
                f += ((d[h] * o) | 0) / o + u;
            t._prop ? (a[t._prop] = f) : a.setAttribute("d", f);
          }
        }
        t._render && i && t._render.call(t._tween, i, a);
      },
      kill: function (e) {
        this._pt = this._rawPath = 0;
      },
      getRawPath: Fd,
      stringToRawPath: Si,
      rawPathToString: yr,
      normalizeStrings: function (e, t, i) {
        var r = i.shapeIndex,
          n = i.map,
          o = [e, t];
        return $l(o, r, n), o;
      },
      pathFilter: $l,
      pointsFilter: Mo,
      getTotalSize: nn,
      equalizeSegmentQuantity: Eo,
      convertToPath: function (e, t) {
        return To(e).map(function (i) {
          return zl(i, t !== !1);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: !0,
      defaultMap: "size",
    };
  Ll() && Lt.registerPlugin(br);
  function jl(s, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function ip(s, e, t) {
    return e && jl(s.prototype, e), t && jl(s, t), s;
  }
  /*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Be,
    Zn,
    yt,
    Pi,
    Ei,
    Tr,
    Ql,
    Ui,
    sn,
    Zl,
    li,
    Rt,
    Kl,
    Jl = function () {
      return (
        Be ||
        (typeof window < "u" && (Be = window.gsap) && Be.registerPlugin && Be)
      );
    },
    ef = 1,
    Sr = [],
    H = [],
    Qt = [],
    on = Date.now,
    Co = function (e, t) {
      return t;
    },
    rp = function () {
      var e = sn.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, H),
        r.push.apply(r, Qt),
        (H = i),
        (Qt = r),
        (Co = function (o, a) {
          return t[o](a);
        });
    },
    Mi = function (e, t) {
      return ~Qt.indexOf(e) && Qt[Qt.indexOf(e) + 1][t];
    },
    an = function (e) {
      return !!~Zl.indexOf(e);
    },
    Ke = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
    },
    Je = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Kn = "scrollLeft",
    Jn = "scrollTop",
    ko = function () {
      return (li && li.isPressed) || H.cache++;
    },
    es = function (e, t) {
      var i = function r(n) {
        if (n || n === 0) {
          ef && (yt.history.scrollRestoration = "manual");
          var o = li && li.isPressed;
          (n = r.v = Math.round(n) || (li && li.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = H.cache),
            o && Co("ss", n);
        } else
          (t || H.cache !== r.cacheID || Co("ref")) &&
            ((r.cacheID = H.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    et = {
      s: Kn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: es(function (s) {
        return arguments.length
          ? yt.scrollTo(s, Me.sc())
          : yt.pageXOffset || Pi[Kn] || Ei[Kn] || Tr[Kn] || 0;
      }),
    },
    Me = {
      s: Jn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: et,
      sc: es(function (s) {
        return arguments.length
          ? yt.scrollTo(et.sc(), s)
          : yt.pageYOffset || Pi[Jn] || Ei[Jn] || Tr[Jn] || 0;
      }),
    },
    ct = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Be.utils.toArray)(e)[0] ||
        (typeof e == "string" && Be.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Ci = function (e, t) {
      var i = t.s,
        r = t.sc;
      an(e) && (e = Pi.scrollingElement || Ei);
      var n = H.indexOf(e),
        o = r === Me.sc ? 1 : 2;
      !~n && (n = H.push(e) - 1), H[n + o] || Ke(e, "scroll", ko);
      var a = H[n + o],
        l =
          a ||
          (H[n + o] =
            es(Mi(e, i), !0) ||
            (an(e)
              ? r
              : es(function (f) {
                  return arguments.length ? (e[i] = f) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = Be.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Oo = function (e, t, i) {
      var r = e,
        n = e,
        o = on(),
        a = o,
        l = t || 50,
        f = Math.max(500, l * 3),
        u = function (g, h) {
          var _ = on();
          h || _ - o > l
            ? ((n = r), (r = g), (a = o), (o = _))
            : i
            ? (r += g)
            : (r = n + ((g - n) / (_ - a)) * (o - a));
        },
        p = function () {
          (n = r = i ? 0 : r), (a = o = 0);
        },
        d = function (g) {
          var h = a,
            _ = n,
            m = on();
          return (
            (g || g === 0) && g !== r && u(g),
            o === a || m - a > f
              ? 0
              : ((r + (i ? _ : -_)) / ((i ? m : o) - h)) * 1e3
          );
        };
      return { update: u, reset: p, getVelocity: d };
    },
    ln = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    tf = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    rf = function () {
      (sn = Be.core.globals().ScrollTrigger), sn && sn.core && rp();
    },
    nf = function (e) {
      return (
        (Be = e || Jl()),
        !Zn &&
          Be &&
          typeof document < "u" &&
          document.body &&
          ((yt = window),
          (Pi = document),
          (Ei = Pi.documentElement),
          (Tr = Pi.body),
          (Zl = [yt, Pi, Ei, Tr]),
          Be.utils.clamp,
          (Kl = Be.core.context || function () {}),
          (Ui = "onpointerenter" in Tr ? "pointer" : "mouse"),
          (Ql = ve.isTouch =
            yt.matchMedia &&
            yt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in yt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Rt = ve.eventTypes =
            (
              "ontouchstart" in Ei
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ei
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ef = 0);
          }, 500),
          rf(),
          (Zn = 1)),
        Zn
      );
    };
  (et.op = Me), (H.cache = 0);
  var ve = (function () {
    function s(t) {
      this.init(t);
    }
    var e = s.prototype;
    return (
      (e.init = function (i) {
        Zn || nf(Be) || console.warn("Please gsap.registerPlugin(Observer)"),
          sn || rf();
        var r = i.tolerance,
          n = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          f = i.debounce,
          u = i.preventDefault,
          p = i.onStop,
          d = i.onStopDelay,
          c = i.ignore,
          g = i.wheelSpeed,
          h = i.event,
          _ = i.onDragStart,
          m = i.onDragEnd,
          w = i.onDrag,
          y = i.onPress,
          v = i.onRelease,
          x = i.onRight,
          T = i.onLeft,
          A = i.onUp,
          E = i.onDown,
          P = i.onChangeX,
          S = i.onChangeY,
          k = i.onChange,
          C = i.onToggleX,
          O = i.onToggleY,
          I = i.onHover,
          L = i.onHoverEnd,
          R = i.onMove,
          F = i.ignoreCheck,
          $ = i.isNormalizer,
          J = i.onGestureStart,
          b = i.onGestureEnd,
          W = i.onWheel,
          Ae = i.onEnable,
          we = i.onDisable,
          ie = i.onClick,
          pe = i.scrollSpeed,
          Ne = i.capture,
          he = i.allowClicks,
          Ge = i.lockAxis,
          Le = i.onLockAxis;
        (this.target = a = ct(a) || Ei),
          (this.vars = i),
          c && (c = Be.utils.toArray(c)),
          (r = r || 1e-9),
          (n = n || 0),
          (g = g || 1),
          (pe = pe || 1),
          (o = o || "wheel,touch,pointer"),
          (f = f !== !1),
          l || (l = parseFloat(yt.getComputedStyle(Tr).lineHeight) || 22);
        var ge,
          st,
          Bt,
          K,
          ye,
          dt,
          Tt,
          M = this,
          St = 0,
          ci = 0,
          Oi = i.passive || !u,
          Pe = Ci(a, et),
          Di = Ci(a, Me),
          rr = Pe(),
          Dr = Di(),
          Re =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Rt[0] === "pointerdown",
          zi = an(a),
          xe = a.ownerDocument || Pi,
          Nt = [0, 0, 0],
          It = [0, 0, 0],
          di = 0,
          Tn = function () {
            return (di = on());
          },
          Ee = function (N, ee) {
            return (
              ((M.event = N) && c && ~c.indexOf(N.target)) ||
              (ee && Re && N.pointerType !== "touch") ||
              (F && F(N, ee))
            );
          },
          xs = function () {
            M._vx.reset(), M._vy.reset(), st.pause(), p && p(M);
          },
          Ii = function () {
            var N = (M.deltaX = tf(Nt)),
              ee = (M.deltaY = tf(It)),
              D = Math.abs(N) >= r,
              V = Math.abs(ee) >= r;
            k && (D || V) && k(M, N, ee, Nt, It),
              D &&
                (x && M.deltaX > 0 && x(M),
                T && M.deltaX < 0 && T(M),
                P && P(M),
                C && M.deltaX < 0 != St < 0 && C(M),
                (St = M.deltaX),
                (Nt[0] = Nt[1] = Nt[2] = 0)),
              V &&
                (E && M.deltaY > 0 && E(M),
                A && M.deltaY < 0 && A(M),
                S && S(M),
                O && M.deltaY < 0 != ci < 0 && O(M),
                (ci = M.deltaY),
                (It[0] = It[1] = It[2] = 0)),
              (K || Bt) && (R && R(M), Bt && (w(M), (Bt = !1)), (K = !1)),
              dt && !(dt = !1) && Le && Le(M),
              ye && (W(M), (ye = !1)),
              (ge = 0);
          },
          zr = function (N, ee, D) {
            (Nt[D] += N),
              (It[D] += ee),
              M._vx.update(N),
              M._vy.update(ee),
              f ? ge || (ge = requestAnimationFrame(Ii)) : Ii();
          },
          Ir = function (N, ee) {
            Ge &&
              !Tt &&
              ((M.axis = Tt = Math.abs(N) > Math.abs(ee) ? "x" : "y"),
              (dt = !0)),
              Tt !== "y" && ((Nt[2] += N), M._vx.update(N, !0)),
              Tt !== "x" && ((It[2] += ee), M._vy.update(ee, !0)),
              f ? ge || (ge = requestAnimationFrame(Ii)) : Ii();
          },
          Li = function (N) {
            if (!Ee(N, 1)) {
              N = ln(N, u);
              var ee = N.clientX,
                D = N.clientY,
                V = ee - M.x,
                B = D - M.y,
                G = M.isDragging;
              (M.x = ee),
                (M.y = D),
                (G ||
                  Math.abs(M.startX - ee) >= n ||
                  Math.abs(M.startY - D) >= n) &&
                  (w && (Bt = !0),
                  G || (M.isDragging = !0),
                  Ir(V, B),
                  G || (_ && _(M)));
            }
          },
          nr = (M.onPress = function (Y) {
            Ee(Y, 1) ||
              (Y && Y.button) ||
              ((M.axis = Tt = null),
              st.pause(),
              (M.isPressed = !0),
              (Y = ln(Y)),
              (St = ci = 0),
              (M.startX = M.x = Y.clientX),
              (M.startY = M.y = Y.clientY),
              M._vx.reset(),
              M._vy.reset(),
              Ke($ ? a : xe, Rt[1], Li, Oi, !0),
              (M.deltaX = M.deltaY = 0),
              y && y(M));
          }),
          q = (M.onRelease = function (Y) {
            if (!Ee(Y, 1)) {
              Je($ ? a : xe, Rt[1], Li, !0);
              var N = !isNaN(M.y - M.startY),
                ee = M.isDragging,
                D =
                  ee &&
                  (Math.abs(M.x - M.startX) > 3 ||
                    Math.abs(M.y - M.startY) > 3),
                V = ln(Y);
              !D &&
                N &&
                (M._vx.reset(),
                M._vy.reset(),
                u &&
                  he &&
                  Be.delayedCall(0.08, function () {
                    if (on() - di > 300 && !Y.defaultPrevented) {
                      if (Y.target.click) Y.target.click();
                      else if (xe.createEvent) {
                        var B = xe.createEvent("MouseEvents");
                        B.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          yt,
                          1,
                          V.screenX,
                          V.screenY,
                          V.clientX,
                          V.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          Y.target.dispatchEvent(B);
                      }
                    }
                  })),
                (M.isDragging = M.isGesturing = M.isPressed = !1),
                p && ee && !$ && st.restart(!0),
                m && ee && m(M),
                v && v(M, D);
            }
          }),
          sr = function (N) {
            return (
              N.touches &&
              N.touches.length > 1 &&
              (M.isGesturing = !0) &&
              J(N, M.isDragging)
            );
          },
          Gt = function () {
            return (M.isGesturing = !1) || b(M);
          },
          Yt = function (N) {
            if (!Ee(N)) {
              var ee = Pe(),
                D = Di();
              zr((ee - rr) * pe, (D - Dr) * pe, 1),
                (rr = ee),
                (Dr = D),
                p && st.restart(!0);
            }
          },
          Vt = function (N) {
            if (!Ee(N)) {
              (N = ln(N, u)), W && (ye = !0);
              var ee =
                (N.deltaMode === 1
                  ? l
                  : N.deltaMode === 2
                  ? yt.innerHeight
                  : 1) * g;
              zr(N.deltaX * ee, N.deltaY * ee, 0), p && !$ && st.restart(!0);
            }
          },
          or = function (N) {
            if (!Ee(N)) {
              var ee = N.clientX,
                D = N.clientY,
                V = ee - M.x,
                B = D - M.y;
              (M.x = ee),
                (M.y = D),
                (K = !0),
                p && st.restart(!0),
                (V || B) && Ir(V, B);
            }
          },
          Lr = function (N) {
            (M.event = N), I(M);
          },
          pi = function (N) {
            (M.event = N), L(M);
          },
          Sn = function (N) {
            return Ee(N) || (ln(N, u) && ie(M));
          };
        (st = M._dc = Be.delayedCall(d || 0.25, xs).pause()),
          (M.deltaX = M.deltaY = 0),
          (M._vx = Oo(0, 50, !0)),
          (M._vy = Oo(0, 50, !0)),
          (M.scrollX = Pe),
          (M.scrollY = Di),
          (M.isDragging = M.isGesturing = M.isPressed = !1),
          Kl(this),
          (M.enable = function (Y) {
            return (
              M.isEnabled ||
                (Ke(zi ? xe : a, "scroll", ko),
                o.indexOf("scroll") >= 0 &&
                  Ke(zi ? xe : a, "scroll", Yt, Oi, Ne),
                o.indexOf("wheel") >= 0 && Ke(a, "wheel", Vt, Oi, Ne),
                ((o.indexOf("touch") >= 0 && Ql) ||
                  o.indexOf("pointer") >= 0) &&
                  (Ke(a, Rt[0], nr, Oi, Ne),
                  Ke(xe, Rt[2], q),
                  Ke(xe, Rt[3], q),
                  he && Ke(a, "click", Tn, !0, !0),
                  ie && Ke(a, "click", Sn),
                  J && Ke(xe, "gesturestart", sr),
                  b && Ke(xe, "gestureend", Gt),
                  I && Ke(a, Ui + "enter", Lr),
                  L && Ke(a, Ui + "leave", pi),
                  R && Ke(a, Ui + "move", or)),
                (M.isEnabled = !0),
                Y && Y.type && nr(Y),
                Ae && Ae(M)),
              M
            );
          }),
          (M.disable = function () {
            M.isEnabled &&
              (Sr.filter(function (Y) {
                return Y !== M && an(Y.target);
              }).length || Je(zi ? xe : a, "scroll", ko),
              M.isPressed &&
                (M._vx.reset(), M._vy.reset(), Je($ ? a : xe, Rt[1], Li, !0)),
              Je(zi ? xe : a, "scroll", Yt, Ne),
              Je(a, "wheel", Vt, Ne),
              Je(a, Rt[0], nr, Ne),
              Je(xe, Rt[2], q),
              Je(xe, Rt[3], q),
              Je(a, "click", Tn, !0),
              Je(a, "click", Sn),
              Je(xe, "gesturestart", sr),
              Je(xe, "gestureend", Gt),
              Je(a, Ui + "enter", Lr),
              Je(a, Ui + "leave", pi),
              Je(a, Ui + "move", or),
              (M.isEnabled = M.isPressed = M.isDragging = !1),
              we && we(M));
          }),
          (M.kill = M.revert =
            function () {
              M.disable();
              var Y = Sr.indexOf(M);
              Y >= 0 && Sr.splice(Y, 1), li === M && (li = 0);
            }),
          Sr.push(M),
          $ && an(a) && (li = M),
          M.enable(h);
      }),
      ip(s, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      s
    );
  })();
  (ve.version = "3.12.5"),
    (ve.create = function (s) {
      return new ve(s);
    }),
    (ve.register = nf),
    (ve.getAll = function () {
      return Sr.slice();
    }),
    (ve.getById = function (s) {
      return Sr.filter(function (e) {
        return e.vars.id === s;
      })[0];
    }),
    Jl() && Be.registerPlugin(ve);
  /*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var z,
    Ar,
    Q,
    ue,
    Ft,
    se,
    sf,
    ts,
    fn,
    un,
    cn,
    is,
    We,
    rs,
    Do,
    tt,
    of,
    af,
    Pr,
    lf,
    zo,
    ff,
    it,
    Io,
    uf,
    cf,
    ki,
    Lo,
    Ro,
    Er,
    Fo,
    ns,
    Bo,
    No,
    ss = 1,
    qe = Date.now,
    Go = qe(),
    Ot = 0,
    dn = 0,
    df = function (e, t, i) {
      var r = xt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    pf = function (e, t) {
      return t && (!xt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    np = function s() {
      return dn && requestAnimationFrame(s);
    },
    hf = function () {
      return (rs = 1);
    },
    gf = function () {
      return (rs = 0);
    },
    Zt = function (e) {
      return e;
    },
    pn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    mf = function () {
      return typeof window < "u";
    },
    _f = function () {
      return z || (mf() && (z = window.gsap) && z.registerPlugin && z);
    },
    ji = function (e) {
      return !!~sf.indexOf(e);
    },
    vf = function (e) {
      return (
        (e === "Height" ? Fo : Q["inner" + e]) ||
        Ft["client" + e] ||
        se["client" + e]
      );
    },
    wf = function (e) {
      return (
        Mi(e, "getBoundingClientRect") ||
        (ji(e)
          ? function () {
              return (vs.width = Q.innerWidth), (vs.height = Fo), vs;
            }
          : function () {
              return fi(e);
            })
      );
    },
    sp = function (e, t, i) {
      var r = i.d,
        n = i.d2,
        o = i.a;
      return (o = Mi(e, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (t ? vf(n) : e["client" + n]) || 0;
          };
    },
    op = function (e, t) {
      return !t || ~Qt.indexOf(e)
        ? wf(e)
        : function () {
            return vs;
          };
    },
    Kt = function (e, t) {
      var i = t.s,
        r = t.d2,
        n = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (o = Mi(e, i))
          ? o() - wf(e)()[n]
          : ji(e)
          ? (Ft[i] || se[i]) - vf(r)
          : e[i] - e["offset" + r]
      );
    },
    os = function (e, t) {
      for (var i = 0; i < Pr.length; i += 3)
        (!t || ~t.indexOf(Pr[i + 1])) && e(Pr[i], Pr[i + 1], Pr[i + 2]);
    },
    xt = function (e) {
      return typeof e == "string";
    },
    rt = function (e) {
      return typeof e == "function";
    },
    hn = function (e) {
      return typeof e == "number";
    },
    Qi = function (e) {
      return typeof e == "object";
    },
    gn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    Yo = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Mr = Math.abs,
    yf = "left",
    xf = "top",
    Vo = "right",
    $o = "bottom",
    Zi = "width",
    Ki = "height",
    mn = "Right",
    _n = "Left",
    vn = "Top",
    wn = "Bottom",
    Se = "padding",
    Dt = "margin",
    Cr = "Width",
    Xo = "Height",
    Ce = "px",
    zt = function (e) {
      return Q.getComputedStyle(e);
    },
    ap = function (e) {
      var t = zt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    bf = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    fi = function (e, t) {
      var i =
          t &&
          zt(e)[Do] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          z
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    as = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Tf = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        n;
      for (n in i) t.push(i[n] / r);
      return t;
    },
    lp = function (e) {
      return function (t) {
        return z.utils.snap(Tf(e), t);
      };
    },
    Ho = function (e) {
      var t = z.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, n) {
            return r - n;
          });
      return i
        ? function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!n) return t(r);
            if (n > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a = t(r);
            return !n || Math.abs(a - r) < o || a - r < 0 == n < 0
              ? a
              : t(n < 0 ? r - e : r + e);
          };
    },
    fp = function (e) {
      return function (t, i) {
        return Ho(Tf(e))(t, i.direction);
      };
    },
    ls = function (e, t, i, r) {
      return i.split(",").forEach(function (n) {
        return e(t, n, r);
      });
    },
    ze = function (e, t, i, r, n) {
      return e.addEventListener(t, i, { passive: !r, capture: !!n });
    },
    Ie = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    fs = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Sf = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    us = { toggleActions: "play", anticipatePin: 0 },
    cs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    ds = function (e, t) {
      if (xt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in cs
              ? cs[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    ps = function (e, t, i, r, n, o, a, l) {
      var f = n.startColor,
        u = n.endColor,
        p = n.fontSize,
        d = n.indent,
        c = n.fontWeight,
        g = ue.createElement("div"),
        h = ji(i) || Mi(i, "pinType") === "fixed",
        _ = e.indexOf("scroller") !== -1,
        m = h ? se : i,
        w = e.indexOf("start") !== -1,
        y = w ? f : u,
        v =
          "border-color:" +
          y +
          ";font-size:" +
          p +
          ";color:" +
          y +
          ";font-weight:" +
          c +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((_ || l) && h ? "fixed;" : "absolute;")),
        (_ || l || !h) &&
          (v += (r === Me ? Vo : $o) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (g._isStart = w),
        g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (g.style.cssText = v),
        (g.innerText = t || t === 0 ? e + "-" + t : e),
        m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
        (g._offset = g["offset" + r.op.d2]),
        hs(g, 0, r, w),
        g
      );
    },
    hs = function (e, t, i, r) {
      var n = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + o + Cr] = 1),
        (n["border" + a + Cr] = 0),
        (n[i.p] = t + "px"),
        z.set(e, n);
    },
    X = [],
    Wo = {},
    yn,
    Af = function () {
      return qe() - Ot > 34 && (yn || (yn = requestAnimationFrame(ui)));
    },
    kr = function () {
      (!it || !it.isPressed || it.startX > se.clientWidth) &&
        (H.cache++,
        it ? yn || (yn = requestAnimationFrame(ui)) : ui(),
        Ot || er("scrollStart"),
        (Ot = qe()));
    },
    qo = function () {
      (cf = Q.innerWidth), (uf = Q.innerHeight);
    },
    xn = function () {
      H.cache++,
        !We &&
          !ff &&
          !ue.fullscreenElement &&
          !ue.webkitFullscreenElement &&
          (!Io ||
            cf !== Q.innerWidth ||
            Math.abs(Q.innerHeight - uf) > Q.innerHeight * 0.25) &&
          ts.restart(!0);
    },
    Ji = {},
    up = [],
    Pf = function s() {
      return Ie(U, "scrollEnd", s) || ir(!0);
    },
    er = function (e) {
      return (
        (Ji[e] &&
          Ji[e].map(function (t) {
            return t();
          })) ||
        up
      );
    },
    bt = [],
    Ef = function (e) {
      for (var t = 0; t < bt.length; t += 5)
        (!e || (bt[t + 4] && bt[t + 4].query === e)) &&
          ((bt[t].style.cssText = bt[t + 1]),
          bt[t].getBBox && bt[t].setAttribute("transform", bt[t + 2] || ""),
          (bt[t + 3].uncache = 1));
    },
    Uo = function (e, t) {
      var i;
      for (tt = 0; tt < X.length; tt++)
        (i = X[tt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (ns = !0), t && Ef(t), t || er("revert");
    },
    Mf = function (e, t) {
      H.cache++,
        (t || !nt) &&
          H.forEach(function (i) {
            return rt(i) && i.cacheID++ && (i.rec = 0);
          }),
        xt(e) && (Q.history.scrollRestoration = Ro = e);
    },
    nt,
    tr = 0,
    Cf,
    cp = function () {
      if (Cf !== tr) {
        var e = (Cf = tr);
        requestAnimationFrame(function () {
          return e === tr && ir(!0);
        });
      }
    },
    kf = function () {
      se.appendChild(Er),
        (Fo = (!it && Er.offsetHeight) || Q.innerHeight),
        se.removeChild(Er);
    },
    Of = function (e) {
      return fn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    ir = function (e, t) {
      if (Ot && !e && !ns) {
        ze(U, "scrollEnd", Pf);
        return;
      }
      kf(),
        (nt = U.isRefreshing = !0),
        H.forEach(function (r) {
          return rt(r) && ++r.cacheID && (r.rec = r());
        });
      var i = er("refreshInit");
      lf && U.sort(),
        t || Uo(),
        H.forEach(function (r) {
          rt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        X.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (ns = !1),
        X.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
          }
        }),
        (Bo = 1),
        Of(!0),
        X.forEach(function (r) {
          var n = Kt(r.scroller, r._dir),
            o = r.vars.end === "max" || (r._endClamp && r.end > n),
            a = r._startClamp && r.start >= n;
          (o || a) &&
            r.setPositions(
              a ? n - 1 : r.start,
              o ? Math.max(a ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        Of(!1),
        (Bo = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        H.forEach(function (r) {
          rt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Mf(Ro, 1),
        ts.pause(),
        tr++,
        (nt = 2),
        ui(2),
        X.forEach(function (r) {
          return rt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (nt = U.isRefreshing = !1),
        er("refresh");
    },
    jo = 0,
    gs = 1,
    bn,
    ui = function (e) {
      if (e === 2 || (!nt && !ns)) {
        (U.isUpdating = !0), bn && bn.update(0);
        var t = X.length,
          i = qe(),
          r = i - Go >= 50,
          n = t && X[0].scroll();
        if (
          ((gs = jo > n ? -1 : 1),
          nt || (jo = n),
          r &&
            (Ot && !rs && i - Ot > 200 && ((Ot = 0), er("scrollEnd")),
            (cn = Go),
            (Go = i)),
          gs < 0)
        ) {
          for (tt = t; tt-- > 0; ) X[tt] && X[tt].update(0, r);
          gs = 1;
        } else for (tt = 0; tt < t; tt++) X[tt] && X[tt].update(0, r);
        U.isUpdating = !1;
      }
      yn = 0;
    },
    Qo = [
      yf,
      xf,
      $o,
      Vo,
      Dt + wn,
      Dt + mn,
      Dt + vn,
      Dt + _n,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ms = Qo.concat([
      Zi,
      Ki,
      "boxSizing",
      "max" + Cr,
      "max" + Xo,
      "position",
      Dt,
      Se,
      Se + vn,
      Se + mn,
      Se + wn,
      Se + _n,
    ]),
    dp = function (e, t, i) {
      Or(i);
      var r = e._gsap;
      if (r.spacerIsNative) Or(r.spacerState);
      else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t), n.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Zo = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var n = Qo.length, o = t.style, a = e.style, l; n--; )
          (l = Qo[n]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[$o] = a[Vo] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Zi] = as(e, et) + Ce),
          (o[Ki] = as(e, Me) + Ce),
          (o[Se] = a[Dt] = a[xf] = a[yf] = "0"),
          Or(r),
          (a[Zi] = a["max" + Cr] = i[Zi]),
          (a[Ki] = a["max" + Xo] = i[Ki]),
          (a[Se] = i[Se]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    pp = /([A-Z])/g,
    Or = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          n,
          o;
        for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (o = e[r + 1]),
            (n = e[r]),
            o
              ? (t[n] = o)
              : t[n] && t.removeProperty(n.replace(pp, "-$1").toLowerCase());
      }
    },
    _s = function (e) {
      for (var t = ms.length, i = e.style, r = [], n = 0; n < t; n++)
        r.push(ms[n], i[ms[n]]);
      return (r.t = e), r;
    },
    hp = function (e, t, i) {
      for (var r = [], n = e.length, o = i ? 8 : 0, a; o < n; o += 2)
        (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
      return (r.t = e.t), r;
    },
    vs = { left: 0, top: 0 },
    Df = function (e, t, i, r, n, o, a, l, f, u, p, d, c, g) {
      rt(e) && (e = e(l)),
        xt(e) &&
          e.substr(0, 3) === "max" &&
          (e = d + (e.charAt(4) === "=" ? ds("0" + e.substr(3), i) : 0));
      var h = c ? c.time() : 0,
        _,
        m,
        w;
      if ((c && c.seek(0), isNaN(e) || (e = +e), hn(e)))
        c &&
          (e = z.utils.mapRange(
            c.scrollTrigger.start,
            c.scrollTrigger.end,
            0,
            d,
            e
          )),
          a && hs(a, i, r, !0);
      else {
        rt(t) && (t = t(l));
        var y = (e || "0").split(" "),
          v,
          x,
          T,
          A;
        (w = ct(t, l) || se),
          (v = fi(w) || {}),
          (!v || (!v.left && !v.top)) &&
            zt(w).display === "none" &&
            ((A = w.style.display),
            (w.style.display = "block"),
            (v = fi(w)),
            A ? (w.style.display = A) : w.style.removeProperty("display")),
          (x = ds(y[0], v[r.d])),
          (T = ds(y[1] || "0", i)),
          (e = v[r.p] - f[r.p] - u + x + n - T),
          a && hs(a, T, r, i - T < 20 || (a._isStart && T > 20)),
          (i -= i - T);
      }
      if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), o)) {
        var E = e + i,
          P = o._isStart;
        (_ = "scroll" + r.d2),
          hs(
            o,
            E,
            r,
            (P && E > 20) ||
              (!P && (p ? Math.max(se[_], Ft[_]) : o.parentNode[_]) <= E + 1)
          ),
          p &&
            ((f = fi(a)),
            p && (o.style[r.op.p] = f[r.op.p] - r.op.m - o._offset + Ce));
      }
      return (
        c &&
          w &&
          ((_ = fi(w)),
          c.seek(d),
          (m = fi(w)),
          (c._caScrollDist = _[r.p] - m[r.p]),
          (e = (e / c._caScrollDist) * d)),
        c && c.seek(h),
        c ? e : Math.round(e)
      );
    },
    gp = /(webkit|moz|length|cssText|inset)/i,
    zf = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var n = e.style,
          o,
          a;
        if (t === se) {
          (e._stOrig = n.cssText), (a = zt(e));
          for (o in a)
            !+o &&
              !gp.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = i), (n.left = r);
        } else n.cssText = e._stOrig;
        (z.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    If = function (e, t, i) {
      var r = t,
        n = r;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== r &&
            a !== n &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - n) > 3 &&
            ((o = a), i && i()),
          (n = r),
          (r = o),
          o
        );
      };
    },
    ws = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), z.set(e, r);
    },
    Lf = function (e, t) {
      var i = Ci(e, t),
        r = "_scroll" + t.p2,
        n = function o(a, l, f, u, p) {
          var d = o.tween,
            c = l.onComplete,
            g = {};
          f = f || i();
          var h = If(i, f, function () {
            d.kill(), (o.tween = 0);
          });
          return (
            (p = (u && p) || 0),
            (u = u || a - f),
            d && d.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = g),
            (g[r] = function () {
              return h(f + u * d.ratio + p * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              H.cache++, o.tween && ui();
            }),
            (l.onComplete = function () {
              (o.tween = 0), c && c.call(d);
            }),
            (d = o.tween = z.to(e, l)),
            d
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        ze(e, "wheel", i.wheelHandler),
        U.isTouch && ze(e, "touchmove", i.wheelHandler),
        n
      );
    },
    U = (function () {
      function s(t, i) {
        Ar ||
          s.register(z) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Lo(this),
          this.init(t, i);
      }
      var e = s.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !dn)
          ) {
            this.update = this.refresh = this.kill = Zt;
            return;
          }
          i = bf(xt(i) || hn(i) || i.nodeType ? { trigger: i } : i, us);
          var n = i,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            f = n.onToggle,
            u = n.onRefresh,
            p = n.scrub,
            d = n.trigger,
            c = n.pin,
            g = n.pinSpacing,
            h = n.invalidateOnRefresh,
            _ = n.anticipatePin,
            m = n.onScrubComplete,
            w = n.onSnapComplete,
            y = n.once,
            v = n.snap,
            x = n.pinReparent,
            T = n.pinSpacer,
            A = n.containerAnimation,
            E = n.fastScrollEnd,
            P = n.preventOverlaps,
            S =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? et
                : Me,
            k = !p && p !== 0,
            C = ct(i.scroller || Q),
            O = z.core.getCache(C),
            I = ji(C),
            L =
              ("pinType" in i
                ? i.pinType
                : Mi(C, "pinType") || (I && "fixed")) === "fixed",
            R = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            F = k && i.toggleActions.split(" "),
            $ = "markers" in i ? i.markers : us.markers,
            J = I ? 0 : parseFloat(zt(C)["border" + S.p2 + Cr]) || 0,
            b = this,
            W =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(b);
              },
            Ae = sp(C, I, S),
            we = op(C, I),
            ie = 0,
            pe = 0,
            Ne = 0,
            he = Ci(C, S),
            Ge,
            Le,
            ge,
            st,
            Bt,
            K,
            ye,
            dt,
            Tt,
            M,
            St,
            ci,
            Oi,
            Pe,
            Di,
            rr,
            Dr,
            Re,
            zi,
            xe,
            Nt,
            It,
            di,
            Tn,
            Ee,
            xs,
            Ii,
            zr,
            Ir,
            Li,
            nr,
            q,
            sr,
            Gt,
            Yt,
            Vt,
            or,
            Lr,
            pi;
          if (
            ((b._startClamp = b._endClamp = !1),
            (b._dir = S),
            (_ *= 45),
            (b.scroller = C),
            (b.scroll = A ? A.time.bind(A) : he),
            (st = he()),
            (b.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((lf = 1), i.refreshPriority === -9999 && (bn = b)),
            (O.tweenScroll = O.tweenScroll || {
              top: Lf(C, Me),
              left: Lf(C, et),
            }),
            (b.tweenTo = Ge = O.tweenScroll[S.p]),
            (b.scrubDuration = function (D) {
              (sr = hn(D) && D),
                sr
                  ? q
                    ? q.duration(D)
                    : (q = z.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: sr,
                        paused: !0,
                        onComplete: function () {
                          return m && m(b);
                        },
                      }))
                  : (q && q.progress(1).kill(), (q = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !b.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (b.animation = r.pause()),
              (r.scrollTrigger = b),
              b.scrubDuration(p),
              (Li = 0),
              l || (l = r.vars.id)),
            v &&
              ((!Qi(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in se.style &&
                z.set(I ? [se, Ft] : C, { scrollBehavior: "auto" }),
              H.forEach(function (D) {
                return (
                  rt(D) &&
                  D.target === (I ? ue.scrollingElement || Ft : C) &&
                  (D.smooth = !1)
                );
              }),
              (ge = rt(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? lp(r)
                : v.snapTo === "labelsDirectional"
                ? fp(r)
                : v.directional !== !1
                ? function (D, V) {
                    return Ho(v.snapTo)(D, qe() - pe < 500 ? 0 : V.direction);
                  }
                : z.utils.snap(v.snapTo)),
              (Gt = v.duration || { min: 0.1, max: 2 }),
              (Gt = Qi(Gt) ? un(Gt.min, Gt.max) : un(Gt, Gt)),
              (Yt = z
                .delayedCall(v.delay || sr / 2 || 0.1, function () {
                  var D = he(),
                    V = qe() - pe < 500,
                    B = Ge.tween;
                  if (
                    (V || Math.abs(b.getVelocity()) < 10) &&
                    !B &&
                    !rs &&
                    ie !== D
                  ) {
                    var G = (D - K) / Pe,
                      Fe = r && !k ? r.totalProgress() : G,
                      Z = V ? 0 : ((Fe - nr) / (qe() - cn)) * 1e3 || 0,
                      be = z.utils.clamp(-G, 1 - G, (Mr(Z / 2) * Z) / 0.185),
                      Ue = G + (v.inertia === !1 ? 0 : be),
                      me,
                      ae,
                      re = v,
                      $t = re.onStart,
                      ce = re.onInterrupt,
                      At = re.onComplete;
                    if (
                      ((me = ge(Ue, b)),
                      hn(me) || (me = Ue),
                      (ae = Math.round(K + me * Pe)),
                      D <= ye && D >= K && ae !== D)
                    ) {
                      if (B && !B._initted && B.data <= Mr(ae - D)) return;
                      v.inertia === !1 && (be = me - G),
                        Ge(
                          ae,
                          {
                            duration: Gt(
                              Mr(
                                (Math.max(Mr(Ue - Fe), Mr(me - Fe)) * 0.185) /
                                  Z /
                                  0.05 || 0
                              )
                            ),
                            ease: v.ease || "power3",
                            data: Mr(ae - D),
                            onInterrupt: function () {
                              return Yt.restart(!0) && ce && ce(b);
                            },
                            onComplete: function () {
                              b.update(),
                                (ie = he()),
                                r &&
                                  (q
                                    ? q.resetTo(
                                        "totalProgress",
                                        me,
                                        r._tTime / r._tDur
                                      )
                                    : r.progress(me)),
                                (Li = nr =
                                  r && !k ? r.totalProgress() : b.progress),
                                w && w(b),
                                At && At(b);
                            },
                          },
                          D,
                          be * Pe,
                          ae - D - be * Pe
                        ),
                        $t && $t(b, Ge.tween);
                    }
                  } else b.isActive && ie !== D && Yt.restart(!0);
                })
                .pause())),
            l && (Wo[l] = b),
            (d = b.trigger = ct(d || (c !== !0 && c))),
            (pi = d && d._gsap && d._gsap.stRevert),
            pi && (pi = pi(b)),
            (c = c === !0 ? d : ct(c)),
            xt(a) && (a = { targets: d, className: a }),
            c &&
              (g === !1 ||
                g === Dt ||
                (g =
                  !g &&
                  c.parentNode &&
                  c.parentNode.style &&
                  zt(c.parentNode).display === "flex"
                    ? !1
                    : Se),
              (b.pin = c),
              (Le = z.core.getCache(c)),
              Le.spacer
                ? (Di = Le.pinState)
                : (T &&
                    ((T = ct(T)),
                    T && !T.nodeType && (T = T.current || T.nativeElement),
                    (Le.spacerIsNative = !!T),
                    T && (Le.spacerState = _s(T))),
                  (Le.spacer = Re = T || ue.createElement("div")),
                  Re.classList.add("pin-spacer"),
                  l && Re.classList.add("pin-spacer-" + l),
                  (Le.pinState = Di = _s(c))),
              i.force3D !== !1 && z.set(c, { force3D: !0 }),
              (b.spacer = Re = Le.spacer),
              (Ir = zt(c)),
              (Tn = Ir[g + S.os2]),
              (xe = z.getProperty(c)),
              (Nt = z.quickSetter(c, S.a, Ce)),
              Zo(c, Re, Ir),
              (Dr = _s(c))),
            $)
          ) {
            (ci = Qi($) ? bf($, Sf) : Sf),
              (M = ps("scroller-start", l, C, S, ci, 0)),
              (St = ps("scroller-end", l, C, S, ci, 0, M)),
              (zi = M["offset" + S.op.d2]);
            var Sn = ct(Mi(C, "content") || C);
            (dt = this.markerStart = ps("start", l, Sn, S, ci, zi, 0, A)),
              (Tt = this.markerEnd = ps("end", l, Sn, S, ci, zi, 0, A)),
              A && (Lr = z.quickSetter([dt, Tt], S.a, Ce)),
              !L &&
                !(Qt.length && Mi(C, "fixedMarkers") === !0) &&
                (ap(I ? se : C),
                z.set([M, St], { force3D: !0 }),
                (xs = z.quickSetter(M, S.a, Ce)),
                (zr = z.quickSetter(St, S.a, Ce)));
          }
          if (A) {
            var Y = A.vars.onUpdate,
              N = A.vars.onUpdateParams;
            A.eventCallback("onUpdate", function () {
              b.update(0, 0, 1), Y && Y.apply(A, N || []);
            });
          }
          if (
            ((b.previous = function () {
              return X[X.indexOf(b) - 1];
            }),
            (b.next = function () {
              return X[X.indexOf(b) + 1];
            }),
            (b.revert = function (D, V) {
              if (!V) return b.kill(!0);
              var B = D !== !1 || !b.enabled,
                G = We;
              B !== b.isReverted &&
                (B &&
                  ((Vt = Math.max(he(), b.scroll.rec || 0)),
                  (Ne = b.progress),
                  (or = r && r.progress())),
                dt &&
                  [dt, Tt, M, St].forEach(function (Fe) {
                    return (Fe.style.display = B ? "none" : "block");
                  }),
                B && ((We = b), b.update(B)),
                c &&
                  (!x || !b.isActive) &&
                  (B ? dp(c, Re, Di) : Zo(c, Re, zt(c), Ee)),
                B || b.update(B),
                (We = G),
                (b.isReverted = B));
            }),
            (b.refresh = function (D, V, B, G) {
              if (!((We || !b.enabled) && !V)) {
                if (c && D && Ot) {
                  ze(s, "scrollEnd", Pf);
                  return;
                }
                !nt && W && W(b),
                  (We = b),
                  Ge.tween && !B && (Ge.tween.kill(), (Ge.tween = 0)),
                  q && q.pause(),
                  h && r && r.revert({ kill: !1 }).invalidate(),
                  b.isReverted || b.revert(!0, !0),
                  (b._subPinOffset = !1);
                var Fe = Ae(),
                  Z = we(),
                  be = A ? A.duration() : Kt(C, S),
                  Ue = Pe <= 0.01,
                  me = 0,
                  ae = G || 0,
                  re = Qi(B) ? B.end : i.end,
                  $t = i.endTrigger || d,
                  ce = Qi(B)
                    ? B.start
                    : i.start ||
                      (i.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
                  At = (b.pinnedContainer =
                    i.pinnedContainer && ct(i.pinnedContainer, b)),
                  Jt = (d && Math.max(0, X.indexOf(b))) || 0,
                  Ye = Jt,
                  Ve,
                  je,
                  ar,
                  bs,
                  Qe,
                  ke,
                  ei,
                  Jo,
                  Gf,
                  An,
                  ti,
                  Pn,
                  Ts;
                for (
                  $ &&
                  Qi(B) &&
                  ((Pn = z.getProperty(M, S.p)), (Ts = z.getProperty(St, S.p)));
                  Ye--;

                )
                  (ke = X[Ye]),
                    ke.end || ke.refresh(0, 1) || (We = b),
                    (ei = ke.pin),
                    ei &&
                      (ei === d || ei === c || ei === At) &&
                      !ke.isReverted &&
                      (An || (An = []), An.unshift(ke), ke.revert(!0, !0)),
                    ke !== X[Ye] && (Jt--, Ye--);
                for (
                  rt(ce) && (ce = ce(b)),
                    ce = df(ce, "start", b),
                    K =
                      Df(
                        ce,
                        d,
                        Fe,
                        S,
                        he(),
                        dt,
                        M,
                        b,
                        Z,
                        J,
                        L,
                        be,
                        A,
                        b._startClamp && "_startClamp"
                      ) || (c ? -0.001 : 0),
                    rt(re) && (re = re(b)),
                    xt(re) &&
                      !re.indexOf("+=") &&
                      (~re.indexOf(" ")
                        ? (re = (xt(ce) ? ce.split(" ")[0] : "") + re)
                        : ((me = ds(re.substr(2), Fe)),
                          (re = xt(ce)
                            ? ce
                            : (A
                                ? z.utils.mapRange(
                                    0,
                                    A.duration(),
                                    A.scrollTrigger.start,
                                    A.scrollTrigger.end,
                                    K
                                  )
                                : K) + me),
                          ($t = d))),
                    re = df(re, "end", b),
                    ye =
                      Math.max(
                        K,
                        Df(
                          re || ($t ? "100% 0" : be),
                          $t,
                          Fe,
                          S,
                          he() + me,
                          Tt,
                          St,
                          b,
                          Z,
                          J,
                          L,
                          be,
                          A,
                          b._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    me = 0,
                    Ye = Jt;
                  Ye--;

                )
                  (ke = X[Ye]),
                    (ei = ke.pin),
                    ei &&
                      ke.start - ke._pinPush <= K &&
                      !A &&
                      ke.end > 0 &&
                      ((Ve =
                        ke.end -
                        (b._startClamp ? Math.max(0, ke.start) : ke.start)),
                      ((ei === d && ke.start - ke._pinPush < K) || ei === At) &&
                        isNaN(ce) &&
                        (me += Ve * (1 - ke.progress)),
                      ei === c && (ae += Ve));
                if (
                  ((K += me),
                  (ye += me),
                  b._startClamp && (b._startClamp += me),
                  b._endClamp &&
                    !nt &&
                    ((b._endClamp = ye || -0.001),
                    (ye = Math.min(ye, Kt(C, S)))),
                  (Pe = ye - K || ((K -= 0.01) && 0.001)),
                  Ue &&
                    (Ne = z.utils.clamp(0, 1, z.utils.normalize(K, ye, Vt))),
                  (b._pinPush = ae),
                  dt &&
                    me &&
                    ((Ve = {}),
                    (Ve[S.a] = "+=" + me),
                    At && (Ve[S.p] = "-=" + he()),
                    z.set([dt, Tt], Ve)),
                  c && !(Bo && b.end >= Kt(C, S)))
                )
                  (Ve = zt(c)),
                    (bs = S === Me),
                    (ar = he()),
                    (It = parseFloat(xe(S.a)) + ae),
                    !be &&
                      ye > 1 &&
                      ((ti = (I ? ue.scrollingElement || Ft : C).style),
                      (ti = {
                        style: ti,
                        value: ti["overflow" + S.a.toUpperCase()],
                      }),
                      I &&
                        zt(se)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (ti.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    Zo(c, Re, Ve),
                    (Dr = _s(c)),
                    (je = fi(c, !0)),
                    (Jo = L && Ci(C, bs ? et : Me)()),
                    g
                      ? ((Ee = [g + S.os2, Pe + ae + Ce]),
                        (Ee.t = Re),
                        (Ye = g === Se ? as(c, S) + Pe + ae : 0),
                        Ye &&
                          (Ee.push(S.d, Ye + Ce),
                          Re.style.flexBasis !== "auto" &&
                            (Re.style.flexBasis = Ye + Ce)),
                        Or(Ee),
                        At &&
                          X.forEach(function (En) {
                            En.pin === At &&
                              En.vars.pinSpacing !== !1 &&
                              (En._subPinOffset = !0);
                          }),
                        L && he(Vt))
                      : ((Ye = as(c, S)),
                        Ye &&
                          Re.style.flexBasis !== "auto" &&
                          (Re.style.flexBasis = Ye + Ce)),
                    L &&
                      ((Qe = {
                        top: je.top + (bs ? ar - K : Jo) + Ce,
                        left: je.left + (bs ? Jo : ar - K) + Ce,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Qe[Zi] = Qe["max" + Cr] = Math.ceil(je.width) + Ce),
                      (Qe[Ki] = Qe["max" + Xo] = Math.ceil(je.height) + Ce),
                      (Qe[Dt] =
                        Qe[Dt + vn] =
                        Qe[Dt + mn] =
                        Qe[Dt + wn] =
                        Qe[Dt + _n] =
                          "0"),
                      (Qe[Se] = Ve[Se]),
                      (Qe[Se + vn] = Ve[Se + vn]),
                      (Qe[Se + mn] = Ve[Se + mn]),
                      (Qe[Se + wn] = Ve[Se + wn]),
                      (Qe[Se + _n] = Ve[Se + _n]),
                      (rr = hp(Di, Qe, x)),
                      nt && he(0)),
                    r
                      ? ((Gf = r._initted),
                        zo(1),
                        r.render(r.duration(), !0, !0),
                        (di = xe(S.a) - It + Pe + ae),
                        (Ii = Math.abs(Pe - di) > 1),
                        L && Ii && rr.splice(rr.length - 2, 2),
                        r.render(0, !0, !0),
                        Gf || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        zo(0))
                      : (di = Pe),
                    ti &&
                      (ti.value
                        ? (ti.style["overflow" + S.a.toUpperCase()] = ti.value)
                        : ti.style.removeProperty("overflow-" + S.a));
                else if (d && he() && !A)
                  for (je = d.parentNode; je && je !== se; )
                    je._pinOffset &&
                      ((K -= je._pinOffset), (ye -= je._pinOffset)),
                      (je = je.parentNode);
                An &&
                  An.forEach(function (En) {
                    return En.revert(!1, !0);
                  }),
                  (b.start = K),
                  (b.end = ye),
                  (st = Bt = nt ? Vt : he()),
                  !A && !nt && (st < Vt && he(Vt), (b.scroll.rec = 0)),
                  b.revert(!1, !0),
                  (pe = qe()),
                  Yt && ((ie = -1), Yt.restart(!0)),
                  (We = 0),
                  r &&
                    k &&
                    (r._initted || or) &&
                    r.progress() !== or &&
                    r.progress(or || 0, !0).render(r.time(), !0, !0),
                  (Ue || Ne !== b.progress || A || h) &&
                    (r &&
                      !k &&
                      r.totalProgress(
                        A && K < -0.001 && !Ne
                          ? z.utils.normalize(K, ye, 0)
                          : Ne,
                        !0
                      ),
                    (b.progress = Ue || (st - K) / Pe === Ne ? 0 : Ne)),
                  c && g && (Re._pinOffset = Math.round(b.progress * di)),
                  q && q.invalidate(),
                  isNaN(Pn) ||
                    ((Pn -= z.getProperty(M, S.p)),
                    (Ts -= z.getProperty(St, S.p)),
                    ws(M, S, Pn),
                    ws(dt, S, Pn - (G || 0)),
                    ws(St, S, Ts),
                    ws(Tt, S, Ts - (G || 0))),
                  Ue && !nt && b.update(),
                  u && !nt && !Oi && ((Oi = !0), u(b), (Oi = !1));
              }
            }),
            (b.getVelocity = function () {
              return ((he() - Bt) / (qe() - cn)) * 1e3 || 0;
            }),
            (b.endAnimation = function () {
              gn(b.callbackAnimation),
                r &&
                  (q
                    ? q.progress(1)
                    : r.paused()
                    ? k || gn(r, b.direction < 0, 1)
                    : gn(r, r.reversed()));
            }),
            (b.labelToScroll = function (D) {
              return (
                (r &&
                  r.labels &&
                  (K || b.refresh() || K) +
                    (r.labels[D] / r.duration()) * Pe) ||
                0
              );
            }),
            (b.getTrailing = function (D) {
              var V = X.indexOf(b),
                B = b.direction > 0 ? X.slice(0, V).reverse() : X.slice(V + 1);
              return (
                xt(D)
                  ? B.filter(function (G) {
                      return G.vars.preventOverlaps === D;
                    })
                  : B
              ).filter(function (G) {
                return b.direction > 0 ? G.end <= K : G.start >= ye;
              });
            }),
            (b.update = function (D, V, B) {
              if (!(A && !B && !D)) {
                var G = nt === !0 ? Vt : b.scroll(),
                  Fe = D ? 0 : (G - K) / Pe,
                  Z = Fe < 0 ? 0 : Fe > 1 ? 1 : Fe || 0,
                  be = b.progress,
                  Ue,
                  me,
                  ae,
                  re,
                  $t,
                  ce,
                  At,
                  Jt;
                if (
                  (V &&
                    ((Bt = st),
                    (st = A ? he() : G),
                    v && ((nr = Li), (Li = r && !k ? r.totalProgress() : Z))),
                  _ &&
                    c &&
                    !We &&
                    !ss &&
                    Ot &&
                    (!Z && K < G + ((G - Bt) / (qe() - cn)) * _
                      ? (Z = 1e-4)
                      : Z === 1 &&
                        ye > G + ((G - Bt) / (qe() - cn)) * _ &&
                        (Z = 0.9999)),
                  Z !== be && b.enabled)
                ) {
                  if (
                    ((Ue = b.isActive = !!Z && Z < 1),
                    (me = !!be && be < 1),
                    (ce = Ue !== me),
                    ($t = ce || !!Z != !!be),
                    (b.direction = Z > be ? 1 : -1),
                    (b.progress = Z),
                    $t &&
                      !We &&
                      ((ae = Z && !be ? 0 : Z === 1 ? 1 : be === 1 ? 2 : 3),
                      k &&
                        ((re =
                          (!ce && F[ae + 1] !== "none" && F[ae + 1]) || F[ae]),
                        (Jt =
                          r &&
                          (re === "complete" || re === "reset" || re in r)))),
                    P &&
                      (ce || Jt) &&
                      (Jt || p || !r) &&
                      (rt(P)
                        ? P(b)
                        : b.getTrailing(P).forEach(function (ar) {
                            return ar.endAnimation();
                          })),
                    k ||
                      (q && !We && !ss
                        ? (q._dp._time - q._start !== q._time &&
                            q.render(q._dp._time - q._start),
                          q.resetTo
                            ? q.resetTo("totalProgress", Z, r._tTime / r._tDur)
                            : ((q.vars.totalProgress = Z),
                              q.invalidate().restart()))
                        : r && r.totalProgress(Z, !!(We && (pe || D)))),
                    c)
                  ) {
                    if ((D && g && (Re.style[g + S.os2] = Tn), !L))
                      Nt(pn(It + di * Z));
                    else if ($t) {
                      if (
                        ((At = !D && Z > be && ye + 1 > G && G + 1 >= Kt(C, S)),
                        x)
                      )
                        if (!D && (Ue || At)) {
                          var Ye = fi(c, !0),
                            Ve = G - K;
                          zf(
                            c,
                            se,
                            Ye.top + (S === Me ? Ve : 0) + Ce,
                            Ye.left + (S === Me ? 0 : Ve) + Ce
                          );
                        } else zf(c, Re);
                      Or(Ue || At ? rr : Dr),
                        (Ii && Z < 1 && Ue) ||
                          Nt(It + (Z === 1 && !At ? di : 0));
                    }
                  }
                  v && !Ge.tween && !We && !ss && Yt.restart(!0),
                    a &&
                      (ce || (y && Z && (Z < 1 || !No))) &&
                      fn(a.targets).forEach(function (ar) {
                        return ar.classList[Ue || y ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !k && !D && o(b),
                    $t && !We
                      ? (k &&
                          (Jt &&
                            (re === "complete"
                              ? r.pause().totalProgress(1)
                              : re === "reset"
                              ? r.restart(!0).pause()
                              : re === "restart"
                              ? r.restart(!0)
                              : r[re]()),
                          o && o(b)),
                        (ce || !No) &&
                          (f && ce && Yo(b, f),
                          R[ae] && Yo(b, R[ae]),
                          y && (Z === 1 ? b.kill(!1, 1) : (R[ae] = 0)),
                          ce ||
                            ((ae = Z === 1 ? 1 : 3), R[ae] && Yo(b, R[ae]))),
                        E &&
                          !Ue &&
                          Math.abs(b.getVelocity()) > (hn(E) ? E : 2500) &&
                          (gn(b.callbackAnimation),
                          q
                            ? q.progress(1)
                            : gn(r, re === "reverse" ? 1 : !Z, 1)))
                      : k && o && !We && o(b);
                }
                if (zr) {
                  var je = A ? (G / A.duration()) * (A._caScrollDist || 0) : G;
                  xs(je + (M._isFlipped ? 1 : 0)), zr(je);
                }
                Lr && Lr((-G / A.duration()) * (A._caScrollDist || 0));
              }
            }),
            (b.enable = function (D, V) {
              b.enabled ||
                ((b.enabled = !0),
                ze(C, "resize", xn),
                I || ze(C, "scroll", kr),
                W && ze(s, "refreshInit", W),
                D !== !1 && ((b.progress = Ne = 0), (st = Bt = ie = he())),
                V !== !1 && b.refresh());
            }),
            (b.getTween = function (D) {
              return D && Ge ? Ge.tween : q;
            }),
            (b.setPositions = function (D, V, B, G) {
              if (A) {
                var Fe = A.scrollTrigger,
                  Z = A.duration(),
                  be = Fe.end - Fe.start;
                (D = Fe.start + (be * D) / Z), (V = Fe.start + (be * V) / Z);
              }
              b.refresh(
                !1,
                !1,
                {
                  start: pf(D, B && !!b._startClamp),
                  end: pf(V, B && !!b._endClamp),
                },
                G
              ),
                b.update();
            }),
            (b.adjustPinSpacing = function (D) {
              if (Ee && D) {
                var V = Ee.indexOf(S.d) + 1;
                (Ee[V] = parseFloat(Ee[V]) + D + Ce),
                  (Ee[1] = parseFloat(Ee[1]) + D + Ce),
                  Or(Ee);
              }
            }),
            (b.disable = function (D, V) {
              if (
                b.enabled &&
                (D !== !1 && b.revert(!0, !0),
                (b.enabled = b.isActive = !1),
                V || (q && q.pause()),
                (Vt = 0),
                Le && (Le.uncache = 1),
                W && Ie(s, "refreshInit", W),
                Yt &&
                  (Yt.pause(), Ge.tween && Ge.tween.kill() && (Ge.tween = 0)),
                !I)
              ) {
                for (var B = X.length; B--; )
                  if (X[B].scroller === C && X[B] !== b) return;
                Ie(C, "resize", xn), I || Ie(C, "scroll", kr);
              }
            }),
            (b.kill = function (D, V) {
              b.disable(D, V), q && !V && q.kill(), l && delete Wo[l];
              var B = X.indexOf(b);
              B >= 0 && X.splice(B, 1),
                B === tt && gs > 0 && tt--,
                (B = 0),
                X.forEach(function (G) {
                  return G.scroller === b.scroller && (B = 1);
                }),
                B || nt || (b.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  D && r.revert({ kill: !1 }),
                  V || r.kill()),
                dt &&
                  [dt, Tt, M, St].forEach(function (G) {
                    return G.parentNode && G.parentNode.removeChild(G);
                  }),
                bn === b && (bn = 0),
                c &&
                  (Le && (Le.uncache = 1),
                  (B = 0),
                  X.forEach(function (G) {
                    return G.pin === c && B++;
                  }),
                  B || (Le.spacer = 0)),
                i.onKill && i.onKill(b);
            }),
            X.push(b),
            b.enable(!1, !1),
            pi && pi(b),
            r && r.add && !Pe)
          ) {
            var ee = b.update;
            (b.update = function () {
              (b.update = ee), K || ye || b.refresh();
            }),
              z.delayedCall(0.01, b.update),
              (Pe = 0.01),
              (K = ye = 0);
          } else b.refresh();
          c && cp();
        }),
        (s.register = function (i) {
          return (
            Ar ||
              ((z = i || _f()),
              mf() && window.document && s.enable(),
              (Ar = dn)),
            Ar
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) us[r] = i[r];
          return us;
        }),
        (s.disable = function (i, r) {
          (dn = 0),
            X.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            Ie(Q, "wheel", kr),
            Ie(ue, "scroll", kr),
            clearInterval(is),
            Ie(ue, "touchcancel", Zt),
            Ie(se, "touchstart", Zt),
            ls(Ie, ue, "pointerdown,touchstart,mousedown", hf),
            ls(Ie, ue, "pointerup,touchend,mouseup", gf),
            ts.kill(),
            os(Ie);
          for (var n = 0; n < H.length; n += 3)
            fs(Ie, H[n], H[n + 1]), fs(Ie, H[n], H[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((Q = window),
            (ue = document),
            (Ft = ue.documentElement),
            (se = ue.body),
            z &&
              ((fn = z.utils.toArray),
              (un = z.utils.clamp),
              (Lo = z.core.context || Zt),
              (zo = z.core.suppressOverwrites || Zt),
              (Ro = Q.history.scrollRestoration || "auto"),
              (jo = Q.pageYOffset),
              z.core.globals("ScrollTrigger", s),
              se))
          ) {
            (dn = 1),
              (Er = document.createElement("div")),
              (Er.style.height = "100vh"),
              (Er.style.position = "absolute"),
              kf(),
              np(),
              ve.register(z),
              (s.isTouch = ve.isTouch),
              (ki =
                ve.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Io = ve.isTouch === 1),
              ze(Q, "wheel", kr),
              (sf = [Q, ue, Ft, se]),
              z.matchMedia
                ? ((s.matchMedia = function (l) {
                    var f = z.matchMedia(),
                      u;
                    for (u in l) f.add(u, l[u]);
                    return f;
                  }),
                  z.addEventListener("matchMediaInit", function () {
                    return Uo();
                  }),
                  z.addEventListener("matchMediaRevert", function () {
                    return Ef();
                  }),
                  z.addEventListener("matchMedia", function () {
                    ir(0, 1), er("matchMedia");
                  }),
                  z.matchMedia("(orientation: portrait)", function () {
                    return qo(), qo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              qo(),
              ze(ue, "scroll", kr);
            var i = se.style,
              r = i.borderTopStyle,
              n = z.core.Animation.prototype,
              o,
              a;
            for (
              n.revert ||
                Object.defineProperty(n, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = fi(se),
                Me.m = Math.round(o.top + Me.sc()) || 0,
                et.m = Math.round(o.left + et.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                is = setInterval(Af, 250),
                z.delayedCall(0.5, function () {
                  return (ss = 0);
                }),
                ze(ue, "touchcancel", Zt),
                ze(se, "touchstart", Zt),
                ls(ze, ue, "pointerdown,touchstart,mousedown", hf),
                ls(ze, ue, "pointerup,touchend,mouseup", gf),
                Do = z.utils.checkPrefix("transform"),
                ms.push(Do),
                Ar = qe(),
                ts = z.delayedCall(0.2, ir).pause(),
                Pr = [
                  ue,
                  "visibilitychange",
                  function () {
                    var l = Q.innerWidth,
                      f = Q.innerHeight;
                    ue.hidden
                      ? ((of = l), (af = f))
                      : (of !== l || af !== f) && xn();
                  },
                  ue,
                  "DOMContentLoaded",
                  ir,
                  Q,
                  "load",
                  ir,
                  Q,
                  "resize",
                  xn,
                ],
                os(ze),
                X.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                a = 0;
              a < H.length;
              a += 3
            )
              fs(Ie, H[a], H[a + 1]), fs(Ie, H[a], H[a + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (No = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(is)) || ((is = r) && setInterval(Af, r)),
            "ignoreMobileResize" in i &&
              (Io = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (os(Ie) || os(ze, i.autoRefreshEvents || "none"),
              (ff = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = ct(i),
            o = H.indexOf(n),
            a = ji(n);
          ~o && H.splice(o, a ? 6 : 2),
            r && (a ? Qt.unshift(Q, r, se, r, Ft, r) : Qt.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          X.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var o = (xt(i) ? ct(i) : i).getBoundingClientRect(),
            a = o[n ? Zi : Ki] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < Q.innerWidth
            : o.bottom - a > 0 && o.top + a < Q.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          xt(i) && (i = ct(i));
          var o = i.getBoundingClientRect(),
            a = o[n ? Zi : Ki],
            l =
              r == null
                ? a / 2
                : r in cs
                ? cs[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return n ? (o.left + l) / Q.innerWidth : (o.top + l) / Q.innerHeight;
        }),
        (s.killAll = function (i) {
          if (
            (X.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            i !== !0)
          ) {
            var r = Ji.killAll || [];
            (Ji = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (U.version = "3.12.5"),
    (U.saveStyles = function (s) {
      return s
        ? fn(s).forEach(function (e) {
            if (e && e.style) {
              var t = bt.indexOf(e);
              t >= 0 && bt.splice(t, 5),
                bt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  z.core.getCache(e),
                  Lo()
                );
            }
          })
        : bt;
    }),
    (U.revert = function (s, e) {
      return Uo(!s, e);
    }),
    (U.create = function (s, e) {
      return new U(s, e);
    }),
    (U.refresh = function (s) {
      return s ? xn() : (Ar || U.register()) && ir(!0);
    }),
    (U.update = function (s) {
      return ++H.cache && ui(s === !0 ? 2 : 0);
    }),
    (U.clearScrollMemory = Mf),
    (U.maxScroll = function (s, e) {
      return Kt(s, e ? et : Me);
    }),
    (U.getScrollFunc = function (s, e) {
      return Ci(ct(s), e ? et : Me);
    }),
    (U.getById = function (s) {
      return Wo[s];
    }),
    (U.getAll = function () {
      return X.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (U.isScrolling = function () {
      return !!Ot;
    }),
    (U.snapDirectional = Ho),
    (U.addEventListener = function (s, e) {
      var t = Ji[s] || (Ji[s] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (U.removeEventListener = function (s, e) {
      var t = Ji[s],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (U.batch = function (s, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        n = e.batchMax || 1e9,
        o = function (f, u) {
          var p = [],
            d = [],
            c = z
              .delayedCall(r, function () {
                u(p, d), (p = []), (d = []);
              })
              .pause();
          return function (g) {
            p.length || c.restart(!0),
              p.push(g.trigger),
              d.push(g),
              n <= p.length && c.progress(1);
          };
        },
        a;
      for (a in e)
        i[a] =
          a.substr(0, 2) === "on" && rt(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        rt(n) &&
          ((n = n()),
          ze(U, "refresh", function () {
            return (n = e.batchMax());
          })),
        fn(s).forEach(function (l) {
          var f = {};
          for (a in i) f[a] = i[a];
          (f.trigger = l), t.push(U.create(f));
        }),
        t
      );
    });
  var Rf = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    Ko = function s(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (ve.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Ft && s(se, t);
    },
    ys = { auto: 1, scroll: 1 },
    mp = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        n = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = n._gsap || z.core.getCache(n),
        a = qe(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== se &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(ys[(l = zt(n)).overflowY] || ys[l.overflowX]));

        )
          n = n.parentNode;
        (o._isScroll =
          n &&
          n !== i &&
          !ji(n) &&
          (ys[(l = zt(n)).overflowY] || ys[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Ff = function (e, t, i, r) {
      return ve.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && mp),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && ze(ue, ve.eventTypes[0], Nf, !1, !0);
        },
        onDisable: function () {
          return Ie(ue, ve.eventTypes[0], Nf, !0);
        },
      });
    },
    _p = /(input|label|select|textarea)/i,
    Bf,
    Nf = function (e) {
      var t = _p.test(e.target.tagName);
      (t || Bf) && ((e._gsapAllow = !0), (Bf = t));
    },
    vp = function (e) {
      Qi(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        n = t.allowNestedScroll,
        o = t.onRelease,
        a,
        l,
        f = ct(e.target) || Ft,
        u = z.core.globals().ScrollSmoother,
        p = u && u.get(),
        d =
          ki &&
          ((e.content && ct(e.content)) ||
            (p && e.content !== !1 && !p.smooth() && p.content())),
        c = Ci(f, Me),
        g = Ci(f, et),
        h = 1,
        _ =
          (ve.isTouch && Q.visualViewport
            ? Q.visualViewport.scale * Q.visualViewport.width
            : Q.outerWidth) / Q.innerWidth,
        m = 0,
        w = rt(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        y,
        v,
        x = Ff(f, e.type, !0, n),
        T = function () {
          return (v = !1);
        },
        A = Zt,
        E = Zt,
        P = function () {
          (l = Kt(f, Me)),
            (E = un(ki ? 1 : 0, l)),
            i && (A = un(0, Kt(f, et))),
            (y = tr);
        },
        S = function () {
          (d._gsap.y = pn(parseFloat(d._gsap.y) + c.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (c.offset = c.cacheID = 0);
        },
        k = function () {
          if (v) {
            requestAnimationFrame(T);
            var $ = pn(a.deltaY / 2),
              J = E(c.v - $);
            if (d && J !== c.v + c.offset) {
              c.offset = J - c.v;
              var b = pn((parseFloat(d && d._gsap.y) || 0) - c.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                b +
                ", 0, 1)"),
                (d._gsap.y = b + "px"),
                (c.cacheID = H.cache),
                ui();
            }
            return !0;
          }
          c.offset && S(), (v = !0);
        },
        C,
        O,
        I,
        L,
        R = function () {
          P(),
            C.isActive() &&
              C.vars.scrollY > l &&
              (c() > l ? C.progress(1) && c(l) : C.resetTo("scrollY", l));
        };
      return (
        d && z.set(d, { y: "+=0" }),
        (e.ignoreCheck = function (F) {
          return (
            (ki && F.type === "touchmove" && k()) ||
            (h > 1.05 && F.type !== "touchstart") ||
            a.isGesturing ||
            (F.touches && F.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          v = !1;
          var F = h;
          (h = pn(((Q.visualViewport && Q.visualViewport.scale) || 1) / _)),
            C.pause(),
            F !== h && Ko(f, h > 1.01 ? !0 : i ? !1 : "x"),
            (O = g()),
            (I = c()),
            P(),
            (y = tr);
        }),
        (e.onRelease = e.onGestureStart =
          function (F, $) {
            if ((c.offset && S(), !$)) L.restart(!0);
            else {
              H.cache++;
              var J = w(),
                b,
                W;
              i &&
                ((b = g()),
                (W = b + (J * 0.05 * -F.velocityX) / 0.227),
                (J *= Rf(g, b, W, Kt(f, et))),
                (C.vars.scrollX = A(W))),
                (b = c()),
                (W = b + (J * 0.05 * -F.velocityY) / 0.227),
                (J *= Rf(c, b, W, Kt(f, Me))),
                (C.vars.scrollY = E(W)),
                C.invalidate().duration(J).play(0.01),
                ((ki && C.vars.scrollY >= l) || b >= l - 1) &&
                  z.to({}, { onUpdate: R, duration: J });
            }
            o && o(F);
          }),
        (e.onWheel = function () {
          C._ts && C.pause(), qe() - m > 1e3 && ((y = 0), (m = qe()));
        }),
        (e.onChange = function (F, $, J, b, W) {
          if (
            (tr !== y && P(),
            $ && i && g(A(b[2] === $ ? O + (F.startX - F.x) : g() + $ - b[1])),
            J)
          ) {
            c.offset && S();
            var Ae = W[2] === J,
              we = Ae ? I + F.startY - F.y : c() + J - W[1],
              ie = E(we);
            Ae && we !== ie && (I += ie - we), c(ie);
          }
          (J || $) && ui();
        }),
        (e.onEnable = function () {
          Ko(f, i ? !1 : "x"),
            U.addEventListener("refresh", R),
            ze(Q, "resize", R),
            c.smooth &&
              ((c.target.style.scrollBehavior = "auto"),
              (c.smooth = g.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          Ko(f, !0),
            Ie(Q, "resize", R),
            U.removeEventListener("refresh", R),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new ve(e)),
        (a.iOS = ki),
        ki && !c() && c(1),
        ki && z.ticker.add(Zt),
        (L = a._dc),
        (C = z.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: If(c, c(), function () {
              return C.pause();
            }),
          },
          onUpdate: ui,
          onComplete: L.vars.onComplete,
        })),
        a
      );
    };
  (U.sort = function (s) {
    return X.sort(
      s ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            e.start -
            (t.start + (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  }),
    (U.observe = function (s) {
      return new ve(s);
    }),
    (U.normalizeScroll = function (s) {
      if (typeof s > "u") return it;
      if (s === !0 && it) return it.enable();
      if (s === !1) {
        it && it.kill(), (it = s);
        return;
      }
      var e = s instanceof ve ? s : vp(s);
      return (
        it && it.target === e.target && it.kill(), ji(e.target) && (it = e), e
      );
    }),
    (U.core = {
      _getVelocityProp: Oo,
      _inputObserver: Ff,
      _scrollers: H,
      _proxies: Qt,
      bridge: {
        ss: function () {
          Ot || er("scrollStart"), (Ot = qe());
        },
        ref: function () {
          return We;
        },
      },
    }),
    _f() && z.registerPlugin(U),
    bo.registerPlugin(br, U);
  class wp {
    constructor() {
      (this.elements = {
        steps: document.querySelectorAll(".home_works_step"),
        svgs: document.querySelectorAll(".home_works_content_svgs svg path"),
        mainSvg: document.querySelector(".home_works_content_icon_item path"),
      }),
        this.createTriggers();
    }
    createTriggers() {
      const { mainSvg: e } = this.elements;
      this.elements.steps.forEach((t, i) => {
        if (i === this.elements.svgs.length - 1) return;
        this.elements.svgs[i];
        const r = this.elements.svgs[i + 1];
        bo.to(e, {
          morphSVG: r,
          scrollTrigger: {
            trigger: t,
            duration: 1,
            ease: "power2.inOut",
            immediateRender: !1,
            start: "top top",
            scrub: 1,
            smoothness: 0.75,
            anticipation: 0.2,
          },
        });
      });
    }
  }
  function yp() {
    console.log("Home page animations initialized."), new _c(), new wp();
  }
  function xp() {
    yp();
  }
  function bp() {
    console.log("About page animations initialized.");
  }
  function Tp() {
    bp();
  }
  function Sp() {
    const s = document.querySelector("[data-page-name]");
    if (!s) {
      console.warn("No data-page-name attribute found on the page wrapper.");
      return;
    }
    const e = s.getAttribute("data-page-name");
    $f();
    const i = { home: xp, about: Tp }[e];
    i ? i() : console.warn(`No specific animations found for page: ${e}`);
  }
  document.addEventListener("DOMContentLoaded", () => {
    Sp();
  }),
    console.log("Hello, Vite!");
});

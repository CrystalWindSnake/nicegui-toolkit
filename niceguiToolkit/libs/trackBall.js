const g = Vue.unref
const G = Vue.isRef
const re = Vue.toRefs
const le = Vue.customRef
const ie = Vue.getCurrentScope
const se = Vue.onScopeDispose
const J = Vue.getCurrentInstance
const K = Vue.onMounted
const ue = Vue.nextTick
const x = Vue.ref
const I = Vue.watch
const h = Vue.computed
const ce = Vue.readonly
const ae = Vue.watchEffect
const Z = Vue.reactive
const z = Vue.defineComponent
const W = Vue.openBlock
const q = Vue.createElementBlock
const L = Vue.normalizeStyle
const S = Vue.createElementVNode
const E = Vue.mergeProps
const j = Vue.renderSlot
const fe = Vue.createBlock
const pe = Vue.Teleport
const R = Vue.createVNode
const de = Vue.withCtx
const ve = Vue.toDisplayString
function P(e) {
  return ie() ? (se(e), !0) : !1;
}
function w(e) {
  return typeof e == "function" ? e() : g(e);
}
const V = typeof window < "u" && typeof document < "u", he = Object.prototype.toString, ye = (e) => he.call(e) === "[object Object]", me = () => {
};
function ge(e, o = {}) {
  if (!G(e))
    return re(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = le(() => ({
      get() {
        return e.value[r];
      },
      set(t) {
        var i;
        if ((i = w(o.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[r] = t, e.value = l;
          } else {
            const l = { ...e.value, [r]: t };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[r] = t;
      }
    }));
  return n;
}
function ee(e, o = !0) {
  J() ? K(e) : o ? e() : ue(e);
}
function xe(e, o = 1e3, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: t = !1
  } = n;
  let i = null;
  const s = x(!1);
  function l() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, l();
  }
  function c() {
    const a = w(o);
    a <= 0 || (s.value = !0, t && e(), l(), i = setInterval(e, a));
  }
  if (r && V && c(), G(o) || typeof o == "function") {
    const a = I(o, () => {
      s.value && V && c();
    });
    P(a);
  }
  return P(u), {
    isActive: s,
    pause: u,
    resume: c
  };
}
function M(e) {
  var o;
  const n = w(e);
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
const T = V ? window : void 0, we = V ? window.document : void 0;
function A(...e) {
  let o, n, r, t;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, t] = e, o = T) : [o, n, r, t] = e, !o)
    return me;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((a) => a()), i.length = 0;
  }, l = (a, f, p, v) => (a.addEventListener(f, p, v), () => a.removeEventListener(f, p, v)), u = I(
    () => [M(o), w(t)],
    ([a, f]) => {
      if (s(), !a)
        return;
      const p = ye(f) ? { ...f } : f;
      i.push(
        ...n.flatMap((v) => r.map((k) => l(a, v, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return P(c), c;
}
function ke() {
  const e = x(!1);
  return J() && K(() => {
    e.value = !0;
  }), e;
}
function H(e) {
  const o = ke();
  return h(() => (o.value, !!e()));
}
function Ce(e, o = {}) {
  const {
    immediate: n = !0,
    fpsLimit: r = void 0,
    window: t = T
  } = o, i = x(!1), s = r ? 1e3 / r : null;
  let l = 0, u = null;
  function c(p) {
    if (!i.value || !t)
      return;
    const v = p - (l || p);
    if (s && v < s) {
      u = t.requestAnimationFrame(c);
      return;
    }
    e({ delta: v, timestamp: p }), l = p, u = t.requestAnimationFrame(c);
  }
  function a() {
    !i.value && t && (i.value = !0, u = t.requestAnimationFrame(c));
  }
  function f() {
    i.value = !1, u != null && t && (t.cancelAnimationFrame(u), u = null);
  }
  return n && a(), P(f), {
    isActive: ce(i),
    pause: f,
    resume: a
  };
}
function be(e, o = {}) {
  const { window: n = T } = o, r = H(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let t;
  const i = x(!1), s = (c) => {
    i.value = c.matches;
  }, l = () => {
    t && ("removeEventListener" in t ? t.removeEventListener("change", s) : t.removeListener(s));
  }, u = ae(() => {
    r.value && (l(), t = n.matchMedia(w(e)), "addEventListener" in t ? t.addEventListener("change", s) : t.addListener(s), i.value = t.matches);
  });
  return P(() => {
    u(), l(), t = void 0;
  }), i;
}
function Se(e, o, n = {}) {
  const { window: r = T, ...t } = n;
  let i;
  const s = H(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = I(
    () => M(e),
    (a) => {
      l(), s.value && r && a && (i = new MutationObserver(o), i.observe(a, t));
    },
    { immediate: !0 }
  ), c = () => {
    l(), u();
  };
  return P(c), {
    isSupported: s,
    stop: c
  };
}
function Ae(e, o = {}) {
  var n, r;
  const {
    pointerTypes: t,
    preventDefault: i,
    stopPropagation: s,
    exact: l,
    onMove: u,
    onEnd: c,
    onStart: a,
    initialValue: f,
    axis: p = "both",
    draggingElement: v = T,
    containerElement: k,
    handle: C = e
  } = o, d = x(
    (n = w(f)) != null ? n : { x: 0, y: 0 }
  ), b = x(), F = (y) => t ? t.includes(y.pointerType) : !0, _ = (y) => {
    w(i) && y.preventDefault(), w(s) && y.stopPropagation();
  }, B = (y) => {
    var $;
    if (!F(y) || w(l) && y.target !== w(e))
      return;
    const Y = (($ = w(k)) != null ? $ : w(e)).getBoundingClientRect(), X = {
      x: y.clientX - Y.left,
      y: y.clientY - Y.top
    };
    (a == null ? void 0 : a(X, y)) !== !1 && (b.value = X, _(y));
  }, m = (y) => {
    if (!F(y) || !b.value)
      return;
    let { x: $, y: N } = d.value;
    (p === "x" || p === "both") && ($ = y.clientX - b.value.x), (p === "y" || p === "both") && (N = y.clientY - b.value.y), d.value = {
      x: $,
      y: N
    }, u == null || u(d.value, y), _(y);
  }, O = (y) => {
    F(y) && b.value && (b.value = void 0, c == null || c(d.value, y), _(y));
  };
  if (V) {
    const y = { capture: (r = o.capture) != null ? r : !0 };
    A(C, "pointerdown", B, y), A(v, "pointermove", m, y), A(v, "pointerup", O, y);
  }
  return {
    ...ge(d),
    position: d,
    isDragging: h(() => !!b.value),
    style: h(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Ee(e, o, n = {}) {
  const { window: r = T, ...t } = n;
  let i;
  const s = H(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => Array.isArray(e) ? e.map((f) => M(f)) : [M(e)]), c = I(
    u,
    (f) => {
      if (l(), s.value && r) {
        i = new ResizeObserver(o);
        for (const p of f)
          p && i.observe(p, t);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), a = () => {
    l(), c();
  };
  return P(a), {
    isSupported: s,
    stop: a
  };
}
function te(e, o = {}) {
  const {
    reset: n = !0,
    windowResize: r = !0,
    windowScroll: t = !0,
    immediate: i = !0
  } = o, s = x(0), l = x(0), u = x(0), c = x(0), a = x(0), f = x(0), p = x(0), v = x(0);
  function k() {
    const C = M(e);
    if (!C) {
      n && (s.value = 0, l.value = 0, u.value = 0, c.value = 0, a.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = C.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, c.value = d.right, a.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return Ee(e, k), I(() => M(e), (C) => !C && k()), t && A("scroll", k, { capture: !0, passive: !0 }), r && A("resize", k, { passive: !0 }), ee(() => {
    i && k();
  }), {
    height: s,
    bottom: l,
    left: u,
    right: c,
    top: a,
    width: f,
    x: p,
    y: v,
    update: k
  };
}
function _e(e) {
  const {
    x: o,
    y: n,
    document: r = we,
    multiple: t,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, l = H(() => w(t) ? r && "elementsFromPoint" in r : r && "elementFromPoint" in r), u = x(null), c = () => {
    var f, p;
    u.value = w(t) ? (f = r == null ? void 0 : r.elementsFromPoint(w(o), w(n))) != null ? f : [] : (p = r == null ? void 0 : r.elementFromPoint(w(o), w(n))) != null ? p : null;
  }, a = i === "requestAnimationFrame" ? Ce(c, { immediate: s }) : xe(c, i, { immediate: s });
  return {
    isSupported: l,
    element: u,
    ...a
  };
}
const Ie = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function ne(e = {}) {
  const {
    type: o = "page",
    touch: n = !0,
    resetOnTouchEnds: r = !1,
    initialValue: t = { x: 0, y: 0 },
    window: i = T,
    target: s = i,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let c = null;
  const a = x(t.x), f = x(t.y), p = x(null), v = typeof o == "function" ? o : Ie[o], k = (m) => {
    const O = v(m);
    c = m, O && ([a.value, f.value] = O, p.value = "mouse");
  }, C = (m) => {
    if (m.touches.length > 0) {
      const O = v(m.touches[0]);
      O && ([a.value, f.value] = O, p.value = "touch");
    }
  }, d = () => {
    if (!c || !i)
      return;
    const m = v(c);
    c instanceof MouseEvent && m && (a.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, b = () => {
    a.value = t.x, f.value = t.y;
  }, F = u ? (m) => u(() => k(m), {}) : (m) => k(m), _ = u ? (m) => u(() => C(m), {}) : (m) => C(m), B = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    A(s, ["mousemove", "dragover"], F, m), n && o !== "movement" && (A(s, ["touchstart", "touchmove"], _, m), r && A(s, "touchend", b, m)), l && o === "page" && A(i, "scroll", B, { passive: !0 });
  }
  return {
    x: a,
    y: f,
    sourceType: p
  };
}
function D(e = {}) {
  const {
    window: o = T,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: t = !0,
    includeScrollbar: i = !0
  } = e, s = x(n), l = x(r), u = () => {
    o && (i ? (s.value = o.innerWidth, l.value = o.innerHeight) : (s.value = o.document.documentElement.clientWidth, l.value = o.document.documentElement.clientHeight));
  };
  if (u(), ee(u), A("resize", u, { passive: !0 }), t) {
    const c = be("(orientation: portrait)");
    I(c, () => u());
  }
  return { width: s, height: l };
}
function oe() {
  const { width: e, height: o } = D(), n = h(() => `0 0 ${e.value} ${o.value}`), r = h(() => ({
    width: e.value,
    height: o.value
  }));
  return {
    viewBox: n,
    styles: r
  };
}
function Te(e, o) {
  const n = h(() => e.value ? e.value.getAttribute(o.elementTypeAttr) === "Input" ? e.value.closest(".q-input") : e.value : null), r = oe(), t = Z(te(e));
  Se(
    n,
    () => {
      t.update();
    },
    { attributes: !0 }
  ), A("scroll", t.update, !0);
  const i = h(() => n.value ? {
    display: "block",
    width: t.width,
    height: t.height,
    x: t.left,
    y: t.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), s = h(() => n.value ? {
    cx: t.x,
    cy: t.y
  } : {
    r: 0
  }), l = h(() => n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y
  } : {
    r: 0
  }), u = h(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y
  } : {
    r: 0
  }), c = h(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height / 2
  } : {
    r: 0
  }), a = h(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height
  } : {
    r: 0
  }), f = h(() => n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y + t.height
  } : {
    r: 0
  }), p = h(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height
  } : {
    r: 0
  }), v = h(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: r,
    rectStyles: i,
    p1: s,
    p2: l,
    p3: u,
    p4: c,
    p5: a,
    p6: f,
    p7: p,
    p8: v
  };
}
const Fe = ["viewBox"], Oe = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(e) {
    const o = e, n = h(() => o.selectedElement), {
      svgConfig: { viewBox: r, styles: t },
      rectStyles: i,
      p1: s,
      p2: l,
      p3: u,
      p4: c,
      p5: a,
      p6: f,
      p7: p,
      p8: v
    } = Te(n, o.selectorConfig);
    return (k, C) => (W(), q("svg", {
      class: "vis-aiming",
      viewBox: g(r),
      version: "1.1",
      style: L([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, g(t)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      S("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: L(g(i))
      }, null, 4),
      S("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      S("circle", E({ fill: "hotpink" }, g(l), { r: "2" }), null, 16),
      S("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      S("circle", E({ fill: "hotpink" }, g(c), { r: "2" }), null, 16),
      S("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(a), { r: "2" }), null, 16),
      S("circle", E({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      S("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      S("circle", E({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Fe));
  }
}), Pe = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const o = x(null), { style: n } = Ae(o, {
      initialValue: { x: 40, y: 40 }
    });
    return (r, t) => (W(), q("div", {
      ref_key: "el",
      ref: o,
      style: L([g(n), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      j(r.$slots, "default")
    ], 4));
  }
}), Be = oe;
function Le(e, o) {
  const { width: n } = D(), { x: r, y: t } = ne({ type: "client" }), i = h(() => {
    let u = r.value, c = t.value;
    return n.value - r.value < 10 && (u -= 10), t.value < 10 && (c += 10), { x: u, y: c };
  }), s = h(() => o.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    message: h(() => o.value ? o.value.getAttribute(e.elementTypeAttr) : null),
    typeNameTagStyles: s
  };
}
function Me(e) {
  const { width: o, height: n } = D(), { x: r, y: t } = ne({ type: "client" }), { element: i } = _e({ x: r, y: t }), s = h(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = Z(te(s));
  A("scroll", l.update, !0);
  const u = h(() => s.value ? {
    display: "block",
    width: l.width,
    height: l.height,
    x: l.left,
    y: l.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), c = h(() => s.value ? {
    x1: 0,
    y1: l.top,
    x2: o.value,
    y2: l.top
  } : {
    x1: 0,
    y1: 8,
    x2: l.width,
    y2: 8,
    "stroke-width": 0
  }), a = h(() => s.value ? {
    x1: l.left + l.width,
    y1: 0,
    x2: l.left + l.width,
    y2: n.value
  } : {
    x1: o.value,
    y1: 8,
    x2: o.value,
    y2: n.value,
    "stroke-width": 0
  }), f = h(() => s.value ? {
    x1: 0,
    y1: l.top + l.height,
    x2: o.value,
    y2: l.top + l.height
  } : {
    x1: 0,
    y1: 8,
    x2: l.width,
    y2: 8,
    "stroke-width": 0
  }), p = h(() => s.value ? {
    x1: l.left,
    y1: 0,
    x2: l.left,
    y2: n.value
  } : {
    x1: o.value,
    y1: 8,
    x2: o.value,
    y2: n.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: p };
}
function $e(e, o) {
  A(
    document.querySelector("body"),
    "click",
    (n) => {
      n.target.closest("[layout-tool-panel]") || (o.value = e.value, n.stopPropagation());
    },
    { capture: !0 }
  ), A(
    document.querySelector("body"),
    "mouseenter",
    (n) => {
      e.value && n.stopPropagation();
    },
    { capture: !0 }
  );
}
function Ve(e, o) {
  let n = e.parentElement.closest(`${o.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return { id: parseInt(n.getAttribute(o.idAttr)), dom: n };
    n = n.parentElement.closest(`${o.selectors}`);
  }
  return null;
}
const We = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function Q(e, o) {
  if (!We.has(e.getAttribute(o.elementTypeAttr)))
    return {
      isFlex: !1,
      direction: null
    };
  const n = window.getComputedStyle(e, null), r = n.getPropertyValue("display") === "flex";
  let t = null;
  return r && (t = n.getPropertyValue("flex-direction")), {
    isFlex: r,
    direction: t
  };
}
function U(e, o) {
  const n = `[${o.idAttr}="${e}"]`;
  return document.querySelector(n);
}
function He(e, o) {
  function n(t, i) {
    return window.getComputedStyle(U(t, e), null).getPropertyValue(i);
  }
  function r(t) {
    const i = U(t, e);
    o.value = i;
  }
  return { queryStyle: n, selectTarget: r };
}
const Ne = ["viewBox"], qe = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: o, emit: n }) {
    const r = e, t = n, { viewBox: i, styles: s } = Be(), { hoverElement: l, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: p } = Me(r.selectorConfig), { typeNameTagStyles: v, message: k } = Le(
      r.selectorConfig,
      l
    ), C = x(null);
    return $e(l, C), I(l, (d) => {
      if (d) {
        const b = parseInt(d.getAttribute(r.selectorConfig.idAttr));
        t("hoverChange", { id: b });
        return;
      }
      t("hoverChange", { id: null });
    }), I(C, (d) => {
      const b = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const F = parseInt(d.getAttribute(r.selectorConfig.idAttr)), _ = Ve(d, r.selectorConfig);
        let B = {
          isFlex: !1,
          direction: null
        };
        _ && (B = Q(_.dom, r.selectorConfig)), t("selectedChange", {
          id: F,
          parentBoxId: _ !== null ? _.id : null,
          flexInfo: Q(d, r.selectorConfig),
          parentFlexInfo: B
        });
        return;
      }
      t("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: b,
        parentFlexInfo: b
      });
    }), o(He(r.selectorConfig, C)), (d, b) => (W(), fe(pe, { to: "body" }, [
      (W(), q("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: L([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, g(s)])
      }, [
        S("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: L(g(u))
        }, null, 4),
        S("line", E({ class: "top" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        S("line", E({ class: "right" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        S("line", E({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        S("line", E({ class: "left" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Ne)),
      R(Oe, {
        "selected-element": C.value,
        selectorConfig: r.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      R(Pe, { style: { "z-index": "9999999" } }, {
        default: de(() => [
          j(d.$slots, "default")
        ]),
        _: 3
      }),
      S("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: L([g(v), { "z-index": "9999999" }])
      }, ve(g(k)), 5)
    ]));
  }
});
export {
  qe as default
};
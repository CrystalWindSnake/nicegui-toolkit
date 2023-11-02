const g = Vue.unref
const J = Vue.isRef
const re = Vue.toRefs
const le = Vue.customRef
const ie = Vue.getCurrentScope
const se = Vue.onScopeDispose
const K = Vue.getCurrentInstance
const Z = Vue.onMounted
const ue = Vue.nextTick
const x = Vue.ref
const I = Vue.watch
const h = Vue.computed
const ce = Vue.readonly
const ae = Vue.watchEffect
const j = Vue.reactive
const q = Vue.defineComponent
const W = Vue.openBlock
const D = Vue.createElementBlock
const $ = Vue.normalizeStyle
const C = Vue.createElementVNode
const E = Vue.mergeProps
const N = Vue.renderSlot
const fe = Vue.createBlock
const pe = Vue.Teleport
const Q = Vue.createVNode
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
  if (!J(e))
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
  K() ? Z(e) : o ? e() : ue(e);
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
  if (r && V && c(), J(o) || typeof o == "function") {
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
function L(e) {
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
    () => [L(o), w(t)],
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
  return K() && Z(() => {
    e.value = !0;
  }), e;
}
function z(e) {
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
  const { window: n = T } = o, r = z(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
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
  const s = z(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = I(
    () => L(e),
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
    handle: b = e
  } = o, d = x(
    (n = w(f)) != null ? n : { x: 0, y: 0 }
  ), S = x(), F = (y) => t ? t.includes(y.pointerType) : !0, _ = (y) => {
    w(i) && y.preventDefault(), w(s) && y.stopPropagation();
  }, B = (y) => {
    var M;
    if (!F(y) || w(l) && y.target !== w(e))
      return;
    const X = ((M = w(k)) != null ? M : w(e)).getBoundingClientRect(), R = {
      x: y.clientX - X.left,
      y: y.clientY - X.top
    };
    (a == null ? void 0 : a(R, y)) !== !1 && (S.value = R, _(y));
  }, m = (y) => {
    if (!F(y) || !S.value)
      return;
    let { x: M, y: H } = d.value;
    (p === "x" || p === "both") && (M = y.clientX - S.value.x), (p === "y" || p === "both") && (H = y.clientY - S.value.y), d.value = {
      x: M,
      y: H
    }, u == null || u(d.value, y), _(y);
  }, O = (y) => {
    F(y) && S.value && (S.value = void 0, c == null || c(d.value, y), _(y));
  };
  if (V) {
    const y = { capture: (r = o.capture) != null ? r : !0 };
    A(b, "pointerdown", B, y), A(v, "pointermove", m, y), A(v, "pointerup", O, y);
  }
  return {
    ...ge(d),
    position: d,
    isDragging: h(() => !!S.value),
    style: h(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Ee(e, o, n = {}) {
  const { window: r = T, ...t } = n;
  let i;
  const s = z(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => Array.isArray(e) ? e.map((f) => L(f)) : [L(e)]), c = I(
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
    const b = L(e);
    if (!b) {
      n && (s.value = 0, l.value = 0, u.value = 0, c.value = 0, a.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = b.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, c.value = d.right, a.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return Ee(e, k), I(() => L(e), (b) => !b && k()), t && A("scroll", k, { capture: !0, passive: !0 }), r && A("resize", k, { passive: !0 }), ee(() => {
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
  } = e, l = z(() => w(t) ? r && "elementsFromPoint" in r : r && "elementFromPoint" in r), u = x(null), c = () => {
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
  }, b = (m) => {
    if (m.touches.length > 0) {
      const O = v(m.touches[0]);
      O && ([a.value, f.value] = O, p.value = "touch");
    }
  }, d = () => {
    if (!c || !i)
      return;
    const m = v(c);
    c instanceof MouseEvent && m && (a.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, S = () => {
    a.value = t.x, f.value = t.y;
  }, F = u ? (m) => u(() => k(m), {}) : (m) => k(m), _ = u ? (m) => u(() => b(m), {}) : (m) => b(m), B = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    A(s, ["mousemove", "dragover"], F, m), n && o !== "movement" && (A(s, ["touchstart", "touchmove"], _, m), r && A(s, "touchend", S, m)), l && o === "page" && A(i, "scroll", B, { passive: !0 });
  }
  return {
    x: a,
    y: f,
    sourceType: p
  };
}
function Y(e = {}) {
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
  const { width: e, height: o } = Y(), n = h(() => `0 0 ${e.value} ${o.value}`), r = h(() => ({
    width: e.value,
    height: o.value
  }));
  return {
    viewBox: n,
    styles: r
  };
}
function Te(e, o) {
  const n = h(() => e.value ? e.value.getAttribute(o.elementTypeAttr) === "Input" ? e.value.closest(".q-input") : e.value : null), r = oe(), t = j(te(e));
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
const Fe = ["viewBox"], Oe = /* @__PURE__ */ q({
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
    return (k, b) => (W(), D("svg", {
      class: "vis-aiming",
      viewBox: g(r),
      version: "1.1",
      style: $([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, g(t)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: $(g(i))
      }, null, 4),
      C("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      C("circle", E({ fill: "hotpink" }, g(l), { r: "2" }), null, 16),
      C("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      C("circle", E({ fill: "hotpink" }, g(c), { r: "2" }), null, 16),
      C("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(a), { r: "2" }), null, 16),
      C("circle", E({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      C("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      C("circle", E({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Fe));
  }
}), Pe = /* @__PURE__ */ q({
  __name: "Panel",
  setup(e) {
    const o = x(null), { style: n } = Ae(o, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (r, t) => (W(), D("div", {
      style: $([g(n), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      C("div", {
        ref_key: "el",
        ref: o,
        style: { position: "absolute", width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
      }, [
        N(r.$slots, "title")
      ], 512),
      N(r.$slots, "default")
    ], 4));
  }
}), Be = oe;
function $e(e, o) {
  const { width: n } = Y(), { x: r, y: t } = ne({ type: "client" }), i = h(() => {
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
function Le(e) {
  const { width: o, height: n } = Y(), { x: r, y: t } = ne({ type: "client" }), { element: i } = _e({ x: r, y: t }), s = h(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = j(te(s));
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
function Me(e, o) {
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
function U(e, o) {
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
function G(e, o) {
  const n = `[${o.idAttr}="${e}"]`;
  return document.querySelector(n);
}
function ze(e, o) {
  function n(t, i) {
    return window.getComputedStyle(G(t, e), null).getPropertyValue(i);
  }
  function r(t) {
    const i = G(t, e);
    o.value = i;
  }
  return { queryStyle: n, selectTarget: r };
}
const He = ["viewBox"], qe = /* @__PURE__ */ q({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: o, emit: n }) {
    const r = e, t = n, { viewBox: i, styles: s } = Be(), { hoverElement: l, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: p } = Le(r.selectorConfig), { typeNameTagStyles: v, message: k } = $e(
      r.selectorConfig,
      l
    ), b = x(null);
    return Me(l, b), I(l, (d) => {
      if (d) {
        const S = parseInt(d.getAttribute(r.selectorConfig.idAttr));
        t("hoverChange", { id: S });
        return;
      }
      t("hoverChange", { id: null });
    }), I(b, (d) => {
      const S = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const F = parseInt(d.getAttribute(r.selectorConfig.idAttr)), _ = Ve(d, r.selectorConfig);
        let B = {
          isFlex: !1,
          direction: null
        };
        _ && (B = U(_.dom, r.selectorConfig)), t("selectedChange", {
          id: F,
          parentBoxId: _ !== null ? _.id : null,
          flexInfo: U(d, r.selectorConfig),
          parentFlexInfo: B
        });
        return;
      }
      t("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: S,
        parentFlexInfo: S
      });
    }), o(ze(r.selectorConfig, b)), (d, S) => (W(), fe(pe, { to: "body" }, [
      (W(), D("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: $([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, g(s)])
      }, [
        C("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: $(g(u))
        }, null, 4),
        C("line", E({ class: "top" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", E({ class: "right" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", E({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", E({ class: "left" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, He)),
      Q(Oe, {
        "selected-element": b.value,
        selectorConfig: r.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      Q(Pe, { style: { "z-index": "9999999" } }, {
        default: de(() => [
          N(d.$slots, "default")
        ]),
        _: 3
      }),
      C("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: $([g(v), { "z-index": "9999999" }])
      }, ve(g(k)), 5)
    ]));
  }
});
export {
  qe as default
};
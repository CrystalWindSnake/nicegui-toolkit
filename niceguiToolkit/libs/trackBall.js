const g = Vue.unref
const K = Vue.isRef
const se = Vue.toRefs
const ue = Vue.customRef
const ce = Vue.getCurrentScope
const ae = Vue.onScopeDispose
const Z = Vue.getCurrentInstance
const j = Vue.onMounted
const fe = Vue.nextTick
const x = Vue.ref
const T = Vue.watch
const h = Vue.computed
const pe = Vue.readonly
const de = Vue.watchEffect
const ee = Vue.reactive
const D = Vue.defineComponent
const V = Vue.openBlock
const Y = Vue.createElementBlock
const B = Vue.normalizeStyle
const C = Vue.createElementVNode
const b = Vue.mergeProps
const H = Vue.renderSlot
const ve = Vue.createBlock
const he = Vue.Teleport
const U = Vue.createVNode
const ye = Vue.withCtx
const me = Vue.toDisplayString
function O(e) {
  return ce() ? (ae(e), !0) : !1;
}
function w(e) {
  return typeof e == "function" ? e() : g(e);
}
const W = typeof window < "u" && typeof document < "u", ge = Object.prototype.toString, xe = (e) => ge.call(e) === "[object Object]", we = () => {
};
function ke(e, n = {}) {
  if (!K(e))
    return se(e);
  const o = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    o[r] = ue(() => ({
      get() {
        return e.value[r];
      },
      set(t) {
        var i;
        if ((i = w(n.replaceRef)) != null ? i : !0)
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
  return o;
}
function te(e, n = !0) {
  Z() ? j(e) : n ? e() : fe(e);
}
function Ce(e, n = 1e3, o = {}) {
  const {
    immediate: r = !0,
    immediateCallback: t = !1
  } = o;
  let i = null;
  const s = x(!1);
  function l() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, l();
  }
  function c() {
    const a = w(n);
    a <= 0 || (s.value = !0, t && e(), l(), i = setInterval(e, a));
  }
  if (r && W && c(), K(n) || typeof n == "function") {
    const a = T(n, () => {
      s.value && W && c();
    });
    O(a);
  }
  return O(u), {
    isActive: s,
    pause: u,
    resume: c
  };
}
function M(e) {
  var n;
  const o = w(e);
  return (n = o == null ? void 0 : o.$el) != null ? n : o;
}
const I = W ? window : void 0, Se = W ? window.document : void 0;
function _(...e) {
  let n, o, r, t;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, r, t] = e, n = I) : [n, o, r, t] = e, !n)
    return we;
  Array.isArray(o) || (o = [o]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((a) => a()), i.length = 0;
  }, l = (a, f, p, v) => (a.addEventListener(f, p, v), () => a.removeEventListener(f, p, v)), u = T(
    () => [M(n), w(t)],
    ([a, f]) => {
      if (s(), !a)
        return;
      const p = xe(f) ? { ...f } : f;
      i.push(
        ...o.flatMap((v) => r.map((k) => l(a, v, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), s();
  };
  return O(c), c;
}
function Ee() {
  const e = x(!1);
  return Z() && j(() => {
    e.value = !0;
  }), e;
}
function N(e) {
  const n = Ee();
  return h(() => (n.value, !!e()));
}
function _e(e, n = {}) {
  const {
    immediate: o = !0,
    fpsLimit: r = void 0,
    window: t = I
  } = n, i = x(!1), s = r ? 1e3 / r : null;
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
  return o && a(), O(f), {
    isActive: pe(i),
    pause: f,
    resume: a
  };
}
function be(e, n = {}) {
  const { window: o = I } = n, r = N(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let t;
  const i = x(!1), s = (c) => {
    i.value = c.matches;
  }, l = () => {
    t && ("removeEventListener" in t ? t.removeEventListener("change", s) : t.removeListener(s));
  }, u = de(() => {
    r.value && (l(), t = o.matchMedia(w(e)), "addEventListener" in t ? t.addEventListener("change", s) : t.addListener(s), i.value = t.matches);
  });
  return O(() => {
    u(), l(), t = void 0;
  }), i;
}
function Ae(e, n, o = {}) {
  const { window: r = I, ...t } = o;
  let i;
  const s = N(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = T(
    () => M(e),
    (a) => {
      l(), s.value && r && a && (i = new MutationObserver(n), i.observe(a, t));
    },
    { immediate: !0 }
  ), c = () => {
    l(), u();
  };
  return O(c), {
    isSupported: s,
    stop: c
  };
}
function Te(e, n = {}) {
  var o, r;
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
    draggingElement: v = I,
    containerElement: k,
    handle: S = e
  } = n, d = x(
    (o = w(f)) != null ? o : { x: 0, y: 0 }
  ), E = x(), F = (y) => t ? t.includes(y.pointerType) : !0, A = (y) => {
    w(i) && y.preventDefault(), w(s) && y.stopPropagation();
  }, P = (y) => {
    var $;
    if (!F(y) || w(l) && y.target !== w(e))
      return;
    const R = (($ = w(k)) != null ? $ : w(e)).getBoundingClientRect(), Q = {
      x: y.clientX - R.left,
      y: y.clientY - R.top
    };
    (a == null ? void 0 : a(Q, y)) !== !1 && (E.value = Q, A(y));
  }, m = (y) => {
    if (!F(y) || !E.value)
      return;
    let { x: $, y: z } = d.value;
    (p === "x" || p === "both") && ($ = y.clientX - E.value.x), (p === "y" || p === "both") && (z = y.clientY - E.value.y), d.value = {
      x: $,
      y: z
    }, u == null || u(d.value, y), A(y);
  }, L = (y) => {
    F(y) && E.value && (E.value = void 0, c == null || c(d.value, y), A(y));
  };
  if (W) {
    const y = { capture: (r = n.capture) != null ? r : !0 };
    _(S, "pointerdown", P, y), _(v, "pointermove", m, y), _(v, "pointerup", L, y);
  }
  return {
    ...ke(d),
    position: d,
    isDragging: h(() => !!E.value),
    style: h(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Ie(e, n, o = {}) {
  const { window: r = I, ...t } = o;
  let i;
  const s = N(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => Array.isArray(e) ? e.map((f) => M(f)) : [M(e)]), c = T(
    u,
    (f) => {
      if (l(), s.value && r) {
        i = new ResizeObserver(n);
        for (const p of f)
          p && i.observe(p, t);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), a = () => {
    l(), c();
  };
  return O(a), {
    isSupported: s,
    stop: a
  };
}
function ne(e, n = {}) {
  const {
    reset: o = !0,
    windowResize: r = !0,
    windowScroll: t = !0,
    immediate: i = !0
  } = n, s = x(0), l = x(0), u = x(0), c = x(0), a = x(0), f = x(0), p = x(0), v = x(0);
  function k() {
    const S = M(e);
    if (!S) {
      o && (s.value = 0, l.value = 0, u.value = 0, c.value = 0, a.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = S.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, c.value = d.right, a.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return Ie(e, k), T(() => M(e), (S) => !S && k()), t && _("scroll", k, { capture: !0, passive: !0 }), r && _("resize", k, { passive: !0 }), te(() => {
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
function Fe(e) {
  const {
    x: n,
    y: o,
    document: r = Se,
    multiple: t,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, l = N(() => w(t) ? r && "elementsFromPoint" in r : r && "elementFromPoint" in r), u = x(null), c = () => {
    var f, p;
    u.value = w(t) ? (f = r == null ? void 0 : r.elementsFromPoint(w(n), w(o))) != null ? f : [] : (p = r == null ? void 0 : r.elementFromPoint(w(n), w(o))) != null ? p : null;
  }, a = i === "requestAnimationFrame" ? _e(c, { immediate: s }) : Ce(c, i, { immediate: s });
  return {
    isSupported: l,
    element: u,
    ...a
  };
}
const Le = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function oe(e = {}) {
  const {
    type: n = "page",
    touch: o = !0,
    resetOnTouchEnds: r = !1,
    initialValue: t = { x: 0, y: 0 },
    window: i = I,
    target: s = i,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let c = null;
  const a = x(t.x), f = x(t.y), p = x(null), v = typeof n == "function" ? n : Le[n], k = (m) => {
    const L = v(m);
    c = m, L && ([a.value, f.value] = L, p.value = "mouse");
  }, S = (m) => {
    if (m.touches.length > 0) {
      const L = v(m.touches[0]);
      L && ([a.value, f.value] = L, p.value = "touch");
    }
  }, d = () => {
    if (!c || !i)
      return;
    const m = v(c);
    c instanceof MouseEvent && m && (a.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, E = () => {
    a.value = t.x, f.value = t.y;
  }, F = u ? (m) => u(() => k(m), {}) : (m) => k(m), A = u ? (m) => u(() => S(m), {}) : (m) => S(m), P = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    _(s, ["mousemove", "dragover"], F, m), o && n !== "movement" && (_(s, ["touchstart", "touchmove"], A, m), r && _(s, "touchend", E, m)), l && n === "page" && _(i, "scroll", P, { passive: !0 });
  }
  return {
    x: a,
    y: f,
    sourceType: p
  };
}
function X(e = {}) {
  const {
    window: n = I,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: t = !0,
    includeScrollbar: i = !0
  } = e, s = x(o), l = x(r), u = () => {
    n && (i ? (s.value = n.innerWidth, l.value = n.innerHeight) : (s.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight));
  };
  if (u(), te(u), _("resize", u, { passive: !0 }), t) {
    const c = be("(orientation: portrait)");
    T(c, () => u());
  }
  return { width: s, height: l };
}
function re() {
  const { width: e, height: n } = X(), o = h(() => `0 0 ${e.value} ${n.value}`), r = h(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: o,
    styles: r
  };
}
function le(e, n) {
  return e.classList.contains(n.selectors.slice(1));
}
function ie(e, n) {
  if (!le(e, n))
    return null;
  for (const o of e.classList)
    if (o.startsWith(n.elementTypeAttr))
      return o.slice(n.elementTypeAttr.length + 1);
  return null;
}
function q(e, n) {
  if (!le(e, n))
    return null;
  for (const o of e.classList)
    if (o.startsWith(n.idAttr))
      return parseInt(o.slice(n.idAttr.length + 1));
  return null;
}
function Oe(e, n) {
  const o = h(() => e.value ? e.value : null), r = re(), t = ee(ne(e));
  Ae(
    o,
    () => {
      t.update();
    },
    { attributes: !0 }
  ), _("scroll", t.update, !0);
  const i = h(() => o.value ? {
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
  }), s = h(() => o.value ? {
    cx: t.x,
    cy: t.y
  } : {
    r: 0
  }), l = h(() => o.value ? {
    cx: t.x + t.width / 2,
    cy: t.y
  } : {
    r: 0
  }), u = h(() => o.value ? {
    cx: t.x + t.width,
    cy: t.y
  } : {
    r: 0
  }), c = h(() => o.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height / 2
  } : {
    r: 0
  }), a = h(() => o.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height
  } : {
    r: 0
  }), f = h(() => o.value ? {
    cx: t.x + t.width / 2,
    cy: t.y + t.height
  } : {
    r: 0
  }), p = h(() => o.value ? {
    cx: t.x,
    cy: t.y + t.height
  } : {
    r: 0
  }), v = h(() => o.value ? {
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
const Pe = ["viewBox"], Be = /* @__PURE__ */ D({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(e) {
    const n = e, o = h(() => n.selectedElement), {
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
    } = Oe(o, n.selectorConfig);
    return (k, S) => (V(), Y("svg", {
      class: "vis-aiming",
      viewBox: g(r),
      version: "1.1",
      style: B([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, g(t)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: B(g(i))
      }, null, 4),
      C("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      C("circle", b({ fill: "hotpink" }, g(l), { r: "2" }), null, 16),
      C("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      C("circle", b({ fill: "hotpink" }, g(c), { r: "2" }), null, 16),
      C("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, g(a), { r: "2" }), null, 16),
      C("circle", b({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      C("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      C("circle", b({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Pe));
  }
}), Me = /* @__PURE__ */ D({
  __name: "Panel",
  setup(e) {
    const n = x(null), { style: o } = Te(n, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (r, t) => (V(), Y("div", {
      style: B([g(o), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      C("div", {
        ref_key: "el",
        ref: n,
        class: "cursor-move",
        style: { position: "absolute", width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
      }, [
        H(r.$slots, "title")
      ], 512),
      H(r.$slots, "default")
    ], 4));
  }
}), $e = re;
function We(e, n) {
  const { width: o } = X(), { x: r, y: t } = oe({ type: "client" }), i = h(() => {
    let u = r.value, c = t.value;
    return o.value - r.value < 10 && (u -= 10), t.value < 10 && (c += 10), { x: u, y: c };
  }), s = h(() => n.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: h(() => n.value ? ie(n.value, e) : null),
    typeNameTagStyles: s
  };
}
function Ve(e) {
  const { width: n, height: o } = X(), { x: r, y: t } = oe({ type: "client" }), { element: i } = Fe({ x: r, y: t }), s = h(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = ee(ne(s));
  _("scroll", l.update, !0);
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
    x2: n.value,
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
    y2: o.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: o.value,
    "stroke-width": 0
  }), f = h(() => s.value ? {
    x1: 0,
    y1: l.top + l.height,
    x2: n.value,
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
    y2: o.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: o.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: p };
}
function Ne(e) {
  return !!e.closest(".q-color-picker");
}
function ze(e, n) {
  _(
    document.querySelector("body"),
    "click",
    (o) => {
      const r = o.target;
      r.closest("[layout-tool-panel]") || Ne(r) || (n.value = e.value, o.stopPropagation());
    },
    { capture: !0 }
  ), _(
    document.querySelector("body"),
    "mouseenter",
    (o) => {
      e.value && o.stopPropagation();
    },
    { capture: !0 }
  );
}
function He(e, n) {
  let o = e.parentElement.closest(`${n.selectors}`);
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: q(o, n), dom: o };
    o = o.parentElement.closest(`${n.selectors}`);
  }
  return null;
}
const qe = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function G(e, n) {
  if (!qe.has(ie(e, n)))
    return {
      isFlex: !1,
      direction: null
    };
  const o = window.getComputedStyle(e, null), r = o.getPropertyValue("display") === "flex";
  let t = null;
  return r && (t = o.getPropertyValue("flex-direction")), {
    isFlex: r,
    direction: t
  };
}
function J(e, n) {
  const o = `.${n.idAttr}-${e}`;
  return document.querySelector(o);
}
function De(e, n) {
  function o(t, i) {
    return window.getComputedStyle(J(t, e), null).getPropertyValue(i);
  }
  function r(t) {
    const i = J(t, e);
    n.value = i;
  }
  return { queryStyle: o, selectTarget: r };
}
const Ye = ["viewBox"], Re = /* @__PURE__ */ D({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: n, emit: o }) {
    const r = e, t = o, { viewBox: i, styles: s } = $e(), { hoverElement: l, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: p } = Ve(r.selectorConfig), { typeNameTagStyles: v, typeName: k } = We(
      r.selectorConfig,
      l
    ), S = x(null);
    return ze(l, S), T(l, (d) => {
      if (d) {
        const E = q(d, r.selectorConfig);
        t("hoverChange", { id: E });
        return;
      }
      t("hoverChange", { id: null });
    }), T(S, (d) => {
      const E = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const F = q(d, r.selectorConfig), A = He(d, r.selectorConfig);
        let P = {
          isFlex: !1,
          direction: null
        };
        A && (P = G(A.dom, r.selectorConfig)), t("selectedChange", {
          id: F,
          parentBoxId: A !== null ? A.id : null,
          flexInfo: G(d, r.selectorConfig),
          parentFlexInfo: P
        });
        return;
      }
      t("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: E,
        parentFlexInfo: E
      });
    }), n(De(r.selectorConfig, S)), (d, E) => (V(), ve(he, { to: "body" }, [
      (V(), Y("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: B([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, g(s)])
      }, [
        C("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: B(g(u))
        }, null, 4),
        C("line", b({ class: "top" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", b({ class: "right" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", b({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", b({ class: "left" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Ye)),
      U(Be, {
        "selected-element": S.value,
        selectorConfig: r.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      U(Me, { style: { "z-index": "9999999" } }, {
        default: ye(() => [
          H(d.$slots, "default")
        ]),
        _: 3
      }),
      C("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: B([g(v), { "z-index": "9999999" }])
      }, me(g(k)), 5)
    ]));
  }
});
export {
  Re as default
};
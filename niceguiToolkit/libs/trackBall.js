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
const y = Vue.computed
const ae = Vue.readonly
const ce = Vue.watchEffect
const fe = Vue.toRef
const Z = Vue.reactive
const z = Vue.defineComponent
const W = Vue.openBlock
const q = Vue.createElementBlock
const L = Vue.normalizeStyle
const C = Vue.createElementVNode
const _ = Vue.mergeProps
const j = Vue.renderSlot
const pe = Vue.createBlock
const de = Vue.Teleport
const R = Vue.createVNode
const ve = Vue.withCtx
const he = Vue.toDisplayString
function P(e) {
  return ie() ? (se(e), !0) : !1;
}
function w(e) {
  return typeof e == "function" ? e() : g(e);
}
const V = typeof window < "u" && typeof document < "u", ye = Object.prototype.toString, me = (e) => ye.call(e) === "[object Object]", ge = () => {
};
function xe(e, n = {}) {
  if (!G(e))
    return re(e);
  const o = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const t in e.value)
    o[t] = le(() => ({
      get() {
        return e.value[t];
      },
      set(r) {
        var i;
        if ((i = w(n.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[t] = r, e.value = l;
          } else {
            const l = { ...e.value, [t]: r };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[t] = r;
      }
    }));
  return o;
}
function ee(e, n = !0) {
  J() ? K(e) : n ? e() : ue(e);
}
function we(e, n = 1e3, o = {}) {
  const {
    immediate: t = !0,
    immediateCallback: r = !1
  } = o;
  let i = null;
  const s = x(!1);
  function l() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, l();
  }
  function a() {
    const c = w(n);
    c <= 0 || (s.value = !0, r && e(), l(), i = setInterval(e, c));
  }
  if (t && V && a(), G(n) || typeof n == "function") {
    const c = I(n, () => {
      s.value && V && a();
    });
    P(c);
  }
  return P(u), {
    isActive: s,
    pause: u,
    resume: a
  };
}
function M(e) {
  var n;
  const o = w(e);
  return (n = o == null ? void 0 : o.$el) != null ? n : o;
}
const F = V ? window : void 0, ke = V ? window.document : void 0;
function E(...e) {
  let n, o, t, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, t, r] = e, n = F) : [n, o, t, r] = e, !n)
    return ge;
  Array.isArray(o) || (o = [o]), Array.isArray(t) || (t = [t]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, l = (c, f, p, v) => (c.addEventListener(f, p, v), () => c.removeEventListener(f, p, v)), u = I(
    () => [M(n), w(r)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = me(f) ? { ...f } : f;
      i.push(
        ...o.flatMap((v) => t.map((k) => l(c, v, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), s();
  };
  return P(a), a;
}
function Se() {
  const e = x(!1);
  return J() && K(() => {
    e.value = !0;
  }), e;
}
function H(e) {
  const n = Se();
  return y(() => (n.value, !!e()));
}
function be(e, n = {}) {
  const {
    immediate: o = !0,
    fpsLimit: t = void 0,
    window: r = F
  } = n, i = x(!1), s = t ? 1e3 / t : null;
  let l = 0, u = null;
  function a(p) {
    if (!i.value || !r)
      return;
    const v = p - (l || p);
    if (s && v < s) {
      u = r.requestAnimationFrame(a);
      return;
    }
    e({ delta: v, timestamp: p }), l = p, u = r.requestAnimationFrame(a);
  }
  function c() {
    !i.value && r && (i.value = !0, u = r.requestAnimationFrame(a));
  }
  function f() {
    i.value = !1, u != null && r && (r.cancelAnimationFrame(u), u = null);
  }
  return o && c(), P(f), {
    isActive: ae(i),
    pause: f,
    resume: c
  };
}
function Ce(e, n = {}) {
  const { window: o = F } = n, t = H(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let r;
  const i = x(!1), s = (a) => {
    i.value = a.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", s) : r.removeListener(s));
  }, u = ce(() => {
    t.value && (l(), r = o.matchMedia(w(e)), "addEventListener" in r ? r.addEventListener("change", s) : r.addListener(s), i.value = r.matches);
  });
  return P(() => {
    u(), l(), r = void 0;
  }), i;
}
function Ee(e, n, o = {}) {
  const { window: t = F, ...r } = o;
  let i;
  const s = H(() => t && "MutationObserver" in t), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = I(
    () => M(e),
    (c) => {
      l(), s.value && t && c && (i = new MutationObserver(n), i.observe(c, r));
    },
    { immediate: !0 }
  ), a = () => {
    l(), u();
  };
  return P(a), {
    isSupported: s,
    stop: a
  };
}
function _e(e, n = {}) {
  var o, t;
  const {
    pointerTypes: r,
    preventDefault: i,
    stopPropagation: s,
    exact: l,
    onMove: u,
    onEnd: a,
    onStart: c,
    initialValue: f,
    axis: p = "both",
    draggingElement: v = F,
    containerElement: k,
    handle: S = e
  } = n, d = x(
    (o = w(f)) != null ? o : { x: 0, y: 0 }
  ), b = x(), T = (h) => r ? r.includes(h.pointerType) : !0, A = (h) => {
    w(i) && h.preventDefault(), w(s) && h.stopPropagation();
  }, B = (h) => {
    var $;
    if (!T(h) || w(l) && h.target !== w(e))
      return;
    const Y = (($ = w(k)) != null ? $ : w(e)).getBoundingClientRect(), X = {
      x: h.clientX - Y.left,
      y: h.clientY - Y.top
    };
    (c == null ? void 0 : c(X, h)) !== !1 && (b.value = X, A(h));
  }, m = (h) => {
    if (!T(h) || !b.value)
      return;
    let { x: $, y: N } = d.value;
    (p === "x" || p === "both") && ($ = h.clientX - b.value.x), (p === "y" || p === "both") && (N = h.clientY - b.value.y), d.value = {
      x: $,
      y: N
    }, u == null || u(d.value, h), A(h);
  }, O = (h) => {
    T(h) && b.value && (b.value = void 0, a == null || a(d.value, h), A(h));
  };
  if (V) {
    const h = { capture: (t = n.capture) != null ? t : !0 };
    E(S, "pointerdown", B, h), E(v, "pointermove", m, h), E(v, "pointerup", O, h);
  }
  return {
    ...xe(d),
    position: d,
    isDragging: y(() => !!b.value),
    style: y(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Ae(e, n, o = {}) {
  const { window: t = F, ...r } = o;
  let i;
  const s = H(() => t && "ResizeObserver" in t), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = y(() => Array.isArray(e) ? e.map((f) => M(f)) : [M(e)]), a = I(
    u,
    (f) => {
      if (l(), s.value && t) {
        i = new ResizeObserver(n);
        for (const p of f)
          p && i.observe(p, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    l(), a();
  };
  return P(c), {
    isSupported: s,
    stop: c
  };
}
function te(e, n = {}) {
  const {
    reset: o = !0,
    windowResize: t = !0,
    windowScroll: r = !0,
    immediate: i = !0
  } = n, s = x(0), l = x(0), u = x(0), a = x(0), c = x(0), f = x(0), p = x(0), v = x(0);
  function k() {
    const S = M(e);
    if (!S) {
      o && (s.value = 0, l.value = 0, u.value = 0, a.value = 0, c.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = S.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, a.value = d.right, c.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return Ae(e, k), I(() => M(e), (S) => !S && k()), r && E("scroll", k, { capture: !0, passive: !0 }), t && E("resize", k, { passive: !0 }), ee(() => {
    i && k();
  }), {
    height: s,
    bottom: l,
    left: u,
    right: a,
    top: c,
    width: f,
    x: p,
    y: v,
    update: k
  };
}
function Ie(e) {
  const {
    x: n,
    y: o,
    document: t = ke,
    multiple: r,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, l = H(() => w(r) ? t && "elementsFromPoint" in t : t && "elementFromPoint" in t), u = x(null), a = () => {
    var f, p;
    u.value = w(r) ? (f = t == null ? void 0 : t.elementsFromPoint(w(n), w(o))) != null ? f : [] : (p = t == null ? void 0 : t.elementFromPoint(w(n), w(o))) != null ? p : null;
  }, c = i === "requestAnimationFrame" ? be(a, { immediate: s }) : we(a, i, { immediate: s });
  return {
    isSupported: l,
    element: u,
    ...c
  };
}
const Fe = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function ne(e = {}) {
  const {
    type: n = "page",
    touch: o = !0,
    resetOnTouchEnds: t = !1,
    initialValue: r = { x: 0, y: 0 },
    window: i = F,
    target: s = i,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let a = null;
  const c = x(r.x), f = x(r.y), p = x(null), v = typeof n == "function" ? n : Fe[n], k = (m) => {
    const O = v(m);
    a = m, O && ([c.value, f.value] = O, p.value = "mouse");
  }, S = (m) => {
    if (m.touches.length > 0) {
      const O = v(m.touches[0]);
      O && ([c.value, f.value] = O, p.value = "touch");
    }
  }, d = () => {
    if (!a || !i)
      return;
    const m = v(a);
    a instanceof MouseEvent && m && (c.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, b = () => {
    c.value = r.x, f.value = r.y;
  }, T = u ? (m) => u(() => k(m), {}) : (m) => k(m), A = u ? (m) => u(() => S(m), {}) : (m) => S(m), B = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    E(s, ["mousemove", "dragover"], T, m), o && n !== "movement" && (E(s, ["touchstart", "touchmove"], A, m), t && E(s, "touchend", b, m)), l && n === "page" && E(i, "scroll", B, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: p
  };
}
function D(e = {}) {
  const {
    window: n = F,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: t = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: i = !0
  } = e, s = x(o), l = x(t), u = () => {
    n && (i ? (s.value = n.innerWidth, l.value = n.innerHeight) : (s.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight));
  };
  if (u(), ee(u), E("resize", u, { passive: !0 }), r) {
    const a = Ce("(orientation: portrait)");
    I(a, () => u());
  }
  return { width: s, height: l };
}
function oe() {
  const { width: e, height: n } = D(), o = y(() => `0 0 ${e.value} ${n.value}`), t = y(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: o,
    styles: t
  };
}
function Te(e) {
  const n = fe(e), o = oe(), t = Z(te(e));
  Ee(
    n,
    () => {
      t.update();
    },
    { attributes: !0 }
  ), E("scroll", t.update, !0);
  const r = y(() => n.value ? {
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
  }), i = y(() => n.value ? {
    cx: t.x,
    cy: t.y
  } : {
    r: 0
  }), s = y(() => n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y
  } : {
    r: 0
  }), l = y(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y
  } : {
    r: 0
  }), u = y(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height / 2
  } : {
    r: 0
  }), a = y(() => n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height
  } : {
    r: 0
  }), c = y(() => n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y + t.height
  } : {
    r: 0
  }), f = y(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height
  } : {
    r: 0
  }), p = y(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: o,
    rectStyles: r,
    p1: i,
    p2: s,
    p3: l,
    p4: u,
    p5: a,
    p6: c,
    p7: f,
    p8: p
  };
}
const Oe = ["viewBox"], Pe = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    selectedElement: {}
  },
  setup(e) {
    const n = e, o = y(() => n.selectedElement), {
      svgConfig: { viewBox: t, styles: r },
      rectStyles: i,
      p1: s,
      p2: l,
      p3: u,
      p4: a,
      p5: c,
      p6: f,
      p7: p,
      p8: v
    } = Te(o);
    return (k, S) => (W(), q("svg", {
      class: "vis-aiming",
      viewBox: g(t),
      version: "1.1",
      style: L([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, g(r)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: L(g(i))
      }, null, 4),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, g(l), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, g(a), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, g(c), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Oe));
  }
}), Be = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const n = x(null), { style: o } = _e(n, {
      initialValue: { x: 40, y: 40 }
    });
    return (t, r) => (W(), q("div", {
      ref_key: "el",
      ref: n,
      style: L([g(o), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      j(t.$slots, "default")
    ], 4));
  }
}), Le = oe;
function Me(e, n) {
  const { width: o } = D(), { x: t, y: r } = ne({ type: "client" }), i = y(() => {
    let u = t.value, a = r.value;
    return o.value - t.value < 10 && (u -= 10), r.value < 10 && (a += 10), { x: u, y: a };
  }), s = y(() => n.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    message: y(() => n.value ? n.value.getAttribute(e.elementTypeAttr) : null),
    typeNameTagStyles: s
  };
}
function $e(e) {
  const { width: n, height: o } = D(), { x: t, y: r } = ne({ type: "client" }), { element: i } = Ie({ x: t, y: r }), s = y(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = Z(te(s));
  E("scroll", l.update, !0);
  const u = y(() => s.value ? {
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
  }), a = y(() => s.value ? {
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
  }), c = y(() => s.value ? {
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
  }), f = y(() => s.value ? {
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
  }), p = y(() => s.value ? {
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
  return { hoverElement: s, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p };
}
function Ve(e, n) {
  E(
    document.querySelector("body"),
    "click",
    (o) => {
      o.target.closest("[layout-tool-panel]") || (n.value = e.value, o.stopPropagation());
    },
    { capture: !0 }
  ), E(
    document.querySelector("body"),
    "mouseenter",
    (o) => {
      e.value && o.stopPropagation();
    },
    { capture: !0 }
  );
}
function We(e, n) {
  let o = e.parentElement.closest(`${n.selectors}`);
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: parseInt(o.getAttribute(n.idAttr)), dom: o };
    o = o.parentElement.closest(`${n.selectors}`);
  }
  return null;
}
const He = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function Q(e, n) {
  if (!He.has(e.getAttribute(n.elementTypeAttr)))
    return {
      isFlex: !1,
      direction: null
    };
  const o = window.getComputedStyle(e, null), t = o.getPropertyValue("display") === "flex";
  let r = null;
  return t && (r = o.getPropertyValue("flex-direction")), {
    isFlex: t,
    direction: r
  };
}
function U(e, n) {
  const o = `[${n.idAttr}="${e}"]`;
  return document.querySelector(o);
}
function Ne(e, n) {
  function o(r, i) {
    return window.getComputedStyle(U(r, e), null).getPropertyValue(i);
  }
  function t(r) {
    const i = U(r, e);
    n.value = i;
  }
  return { queryStyle: o, selectTarget: t };
}
const ze = ["viewBox"], De = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: n, emit: o }) {
    const t = e, r = o, { viewBox: i, styles: s } = Le(), { hoverElement: l, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p } = $e(t.selectorConfig), { typeNameTagStyles: v, message: k } = Me(
      t.selectorConfig,
      l
    ), S = x(null);
    return Ve(l, S), I(l, (d) => {
      if (d) {
        const b = parseInt(d.getAttribute(t.selectorConfig.idAttr));
        r("hoverChange", { id: b });
        return;
      }
      r("hoverChange", { id: null });
    }), I(S, (d) => {
      const b = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const T = parseInt(d.getAttribute(t.selectorConfig.idAttr)), A = We(d, t.selectorConfig);
        let B = {
          isFlex: !1,
          direction: null
        };
        A && (B = Q(A.dom, t.selectorConfig)), r("selectedChange", {
          id: T,
          parentBoxId: A !== null ? A.id : null,
          flexInfo: Q(d, t.selectorConfig),
          parentFlexInfo: B
        });
        return;
      }
      r("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: b,
        parentFlexInfo: b
      });
    }), n(Ne(t.selectorConfig, S)), (d, b) => (W(), pe(de, { to: "body" }, [
      (W(), q("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: L([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, g(s)])
      }, [
        C("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: L(g(u))
        }, null, 4),
        C("line", _({ class: "top" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "right" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "left" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, ze)),
      R(Pe, {
        "selected-element": S.value,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element"]),
      R(Be, { style: { "z-index": "9999999" } }, {
        default: ve(() => [
          j(d.$slots, "default")
        ]),
        _: 3
      }),
      C("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: L([g(v), { "z-index": "9999999" }])
      }, he(g(k)), 5)
    ]));
  }
});
export {
  De as default
};
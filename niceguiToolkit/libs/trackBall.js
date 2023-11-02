const x = Vue.unref
const G = Vue.isRef
const le = Vue.toRefs
const ie = Vue.customRef
const se = Vue.getCurrentScope
const ue = Vue.onScopeDispose
const J = Vue.getCurrentInstance
const K = Vue.onMounted
const ae = Vue.nextTick
const g = Vue.ref
const I = Vue.watch
const y = Vue.computed
const ce = Vue.readonly
const Z = Vue.watchEffect
const fe = Vue.toRef
const j = Vue.reactive
const z = Vue.defineComponent
const W = Vue.openBlock
const q = Vue.createElementBlock
const M = Vue.normalizeStyle
const C = Vue.createElementVNode
const _ = Vue.mergeProps
const ee = Vue.renderSlot
const pe = Vue.createBlock
const de = Vue.Teleport
const R = Vue.createVNode
const ve = Vue.withCtx
const he = Vue.toDisplayString
function P(e) {
  return se() ? (ue(e), !0) : !1;
}
function k(e) {
  return typeof e == "function" ? e() : x(e);
}
const V = typeof window < "u" && typeof document < "u", ye = Object.prototype.toString, me = (e) => ye.call(e) === "[object Object]", ge = () => {
};
function xe(e, n = {}) {
  if (!G(e))
    return le(e);
  const r = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const t in e.value)
    r[t] = ie(() => ({
      get() {
        return e.value[t];
      },
      set(o) {
        var i;
        if ((i = k(n.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[t] = o, e.value = l;
          } else {
            const l = { ...e.value, [t]: o };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[t] = o;
      }
    }));
  return r;
}
function te(e, n = !0) {
  J() ? K(e) : n ? e() : ae(e);
}
function we(e, n = 1e3, r = {}) {
  const {
    immediate: t = !0,
    immediateCallback: o = !1
  } = r;
  let i = null;
  const s = g(!1);
  function l() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, l();
  }
  function a() {
    const c = k(n);
    c <= 0 || (s.value = !0, o && e(), l(), i = setInterval(e, c));
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
function L(e) {
  var n;
  const r = k(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const O = V ? window : void 0, ke = V ? window.document : void 0;
function E(...e) {
  let n, r, t, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, t, o] = e, n = O) : [n, r, t, o] = e, !n)
    return ge;
  Array.isArray(r) || (r = [r]), Array.isArray(t) || (t = [t]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, l = (c, f, p, v) => (c.addEventListener(f, p, v), () => c.removeEventListener(f, p, v)), u = I(
    () => [L(n), k(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = me(f) ? { ...f } : f;
      i.push(
        ...r.flatMap((v) => t.map((w) => l(c, v, w, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), s();
  };
  return P(a), a;
}
function be() {
  const e = g(!1);
  return J() && K(() => {
    e.value = !0;
  }), e;
}
function H(e) {
  const n = be();
  return y(() => (n.value, !!e()));
}
function Se(e, n = {}) {
  const {
    immediate: r = !0,
    fpsLimit: t = void 0,
    window: o = O
  } = n, i = g(!1), s = t ? 1e3 / t : null;
  let l = 0, u = null;
  function a(p) {
    if (!i.value || !o)
      return;
    const v = p - (l || p);
    if (s && v < s) {
      u = o.requestAnimationFrame(a);
      return;
    }
    e({ delta: v, timestamp: p }), l = p, u = o.requestAnimationFrame(a);
  }
  function c() {
    !i.value && o && (i.value = !0, u = o.requestAnimationFrame(a));
  }
  function f() {
    i.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return r && c(), P(f), {
    isActive: ce(i),
    pause: f,
    resume: c
  };
}
function Ce(e, n = {}) {
  const { window: r = O } = n, t = H(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let o;
  const i = g(!1), s = (a) => {
    i.value = a.matches;
  }, l = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, u = Z(() => {
    t.value && (l(), o = r.matchMedia(k(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), i.value = o.matches);
  });
  return P(() => {
    u(), l(), o = void 0;
  }), i;
}
function Ee(e, n, r = {}) {
  const { window: t = O, ...o } = r;
  let i;
  const s = H(() => t && "MutationObserver" in t), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = I(
    () => L(e),
    (c) => {
      l(), s.value && t && c && (i = new MutationObserver(n), i.observe(c, o));
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
  var r, t;
  const {
    pointerTypes: o,
    preventDefault: i,
    stopPropagation: s,
    exact: l,
    onMove: u,
    onEnd: a,
    onStart: c,
    initialValue: f,
    axis: p = "both",
    draggingElement: v = O,
    containerElement: w,
    handle: b = e
  } = n, d = g(
    (r = k(f)) != null ? r : { x: 0, y: 0 }
  ), S = g(), F = (h) => o ? o.includes(h.pointerType) : !0, A = (h) => {
    k(i) && h.preventDefault(), k(s) && h.stopPropagation();
  }, B = (h) => {
    var $;
    if (!F(h) || k(l) && h.target !== k(e))
      return;
    const Y = (($ = k(w)) != null ? $ : k(e)).getBoundingClientRect(), X = {
      x: h.clientX - Y.left,
      y: h.clientY - Y.top
    };
    (c == null ? void 0 : c(X, h)) !== !1 && (S.value = X, A(h));
  }, m = (h) => {
    if (!F(h) || !S.value)
      return;
    let { x: $, y: N } = d.value;
    (p === "x" || p === "both") && ($ = h.clientX - S.value.x), (p === "y" || p === "both") && (N = h.clientY - S.value.y), d.value = {
      x: $,
      y: N
    }, u == null || u(d.value, h), A(h);
  }, T = (h) => {
    F(h) && S.value && (S.value = void 0, a == null || a(d.value, h), A(h));
  };
  if (V) {
    const h = { capture: (t = n.capture) != null ? t : !0 };
    E(b, "pointerdown", B, h), E(v, "pointermove", m, h), E(v, "pointerup", T, h);
  }
  return {
    ...xe(d),
    position: d,
    isDragging: y(() => !!S.value),
    style: y(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Ae(e, n, r = {}) {
  const { window: t = O, ...o } = r;
  let i;
  const s = H(() => t && "ResizeObserver" in t), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = y(() => Array.isArray(e) ? e.map((f) => L(f)) : [L(e)]), a = I(
    u,
    (f) => {
      if (l(), s.value && t) {
        i = new ResizeObserver(n);
        for (const p of f)
          p && i.observe(p, o);
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
function ne(e, n = {}) {
  const {
    reset: r = !0,
    windowResize: t = !0,
    windowScroll: o = !0,
    immediate: i = !0
  } = n, s = g(0), l = g(0), u = g(0), a = g(0), c = g(0), f = g(0), p = g(0), v = g(0);
  function w() {
    const b = L(e);
    if (!b) {
      r && (s.value = 0, l.value = 0, u.value = 0, a.value = 0, c.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = b.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, a.value = d.right, c.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return Ae(e, w), I(() => L(e), (b) => !b && w()), o && E("scroll", w, { capture: !0, passive: !0 }), t && E("resize", w, { passive: !0 }), te(() => {
    i && w();
  }), {
    height: s,
    bottom: l,
    left: u,
    right: a,
    top: c,
    width: f,
    x: p,
    y: v,
    update: w
  };
}
function Ie(e) {
  const {
    x: n,
    y: r,
    document: t = ke,
    multiple: o,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, l = H(() => k(o) ? t && "elementsFromPoint" in t : t && "elementFromPoint" in t), u = g(null), a = () => {
    var f, p;
    u.value = k(o) ? (f = t == null ? void 0 : t.elementsFromPoint(k(n), k(r))) != null ? f : [] : (p = t == null ? void 0 : t.elementFromPoint(k(n), k(r))) != null ? p : null;
  }, c = i === "requestAnimationFrame" ? Se(a, { immediate: s }) : we(a, i, { immediate: s });
  return {
    isSupported: l,
    element: u,
    ...c
  };
}
const Oe = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function oe(e = {}) {
  const {
    type: n = "page",
    touch: r = !0,
    resetOnTouchEnds: t = !1,
    initialValue: o = { x: 0, y: 0 },
    window: i = O,
    target: s = i,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let a = null;
  const c = g(o.x), f = g(o.y), p = g(null), v = typeof n == "function" ? n : Oe[n], w = (m) => {
    const T = v(m);
    a = m, T && ([c.value, f.value] = T, p.value = "mouse");
  }, b = (m) => {
    if (m.touches.length > 0) {
      const T = v(m.touches[0]);
      T && ([c.value, f.value] = T, p.value = "touch");
    }
  }, d = () => {
    if (!a || !i)
      return;
    const m = v(a);
    a instanceof MouseEvent && m && (c.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, S = () => {
    c.value = o.x, f.value = o.y;
  }, F = u ? (m) => u(() => w(m), {}) : (m) => w(m), A = u ? (m) => u(() => b(m), {}) : (m) => b(m), B = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    E(s, ["mousemove", "dragover"], F, m), r && n !== "movement" && (E(s, ["touchstart", "touchmove"], A, m), t && E(s, "touchend", S, m)), l && n === "page" && E(i, "scroll", B, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: p
  };
}
function D(e = {}) {
  const {
    window: n = O,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: t = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0
  } = e, s = g(r), l = g(t), u = () => {
    n && (i ? (s.value = n.innerWidth, l.value = n.innerHeight) : (s.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight));
  };
  if (u(), te(u), E("resize", u, { passive: !0 }), o) {
    const a = Ce("(orientation: portrait)");
    I(a, () => u());
  }
  return { width: s, height: l };
}
function re() {
  const { width: e, height: n } = D(), r = y(() => `0 0 ${e.value} ${n.value}`), t = y(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: r,
    styles: t
  };
}
function Fe(e) {
  const n = fe(e), r = re(), t = j(ne(e)), o = g({});
  Z(() => {
    n.value && (console.log("useMutationObserver start"), Ee(n, (w) => {
      console.log("trigger start"), w[0] && (o.value = {}, console.log("useMutationObserver change:", w));
    }, {
      attributes: !0
    }));
  }), console.log("test"), E("scroll", t.update, !0);
  const i = y(() => (o.value, n.value ? {
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
  })), s = y(() => (o.value, n.value ? {
    cx: t.x,
    cy: t.y
  } : {
    r: 0
  })), l = y(() => (o.value, n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y
  } : {
    r: 0
  })), u = y(() => (o.value, n.value ? {
    cx: t.x + t.width,
    cy: t.y
  } : {
    r: 0
  })), a = y(() => (o.value, n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height / 2
  } : {
    r: 0
  })), c = y(() => (o.value, n.value ? {
    cx: t.x + t.width,
    cy: t.y + t.height
  } : {
    r: 0
  })), f = y(() => (o.value, n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y + t.height
  } : {
    r: 0
  })), p = y(() => (o.value, n.value ? {
    cx: t.x,
    cy: t.y + t.height
  } : {
    r: 0
  })), v = y(() => (o.value, n.value ? {
    cx: t.x,
    cy: t.y + t.height / 2
  } : {
    r: 0
  }));
  return {
    svgConfig: r,
    rectStyles: i,
    p1: s,
    p2: l,
    p3: u,
    p4: a,
    p5: c,
    p6: f,
    p7: p,
    p8: v
  };
}
const Te = ["viewBox"], Pe = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    selectedElement: {}
  },
  setup(e) {
    const n = e, r = y(() => n.selectedElement), {
      svgConfig: { viewBox: t, styles: o },
      rectStyles: i,
      p1: s,
      p2: l,
      p3: u,
      p4: a,
      p5: c,
      p6: f,
      p7: p,
      p8: v
    } = Fe(r);
    return (w, b) => (W(), q("svg", {
      class: "vis-aiming",
      viewBox: x(t),
      version: "1.1",
      style: M([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, x(o)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: M(x(i))
      }, null, 4),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, x(s), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, x(l), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, x(u), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, x(a), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, x(c), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, x(f), { r: "2" }), null, 16),
      C("circle", _({
        stroke: "hotpink",
        fill: "white"
      }, x(p), { r: "2" }), null, 16),
      C("circle", _({ fill: "hotpink" }, x(v), { r: "2" }), null, 16)
    ], 12, Te));
  }
}), Be = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const n = g(null), { style: r } = _e(n, {
      initialValue: { x: 40, y: 40 }
    });
    return (t, o) => (W(), q("div", {
      ref_key: "el",
      ref: n,
      style: M([x(r), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      ee(t.$slots, "default")
    ], 4));
  }
}), Me = re;
function Le(e, n) {
  const { width: r } = D(), { x: t, y: o } = oe({ type: "client" }), i = y(() => {
    let u = t.value, a = o.value;
    return r.value - t.value < 10 && (u -= 10), o.value < 10 && (a += 10), { x: u, y: a };
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
  const { width: n, height: r } = D(), { x: t, y: o } = oe({ type: "client" }), { element: i } = Ie({ x: t, y: o }), s = y(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = j(ne(s));
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
    y2: r.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: r.value,
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
    y2: r.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: r.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p };
}
function Ve(e, n) {
  E(
    document.querySelector("body"),
    "click",
    (r) => {
      r.target.closest("[layout-tool-panel]") || (n.value = e.value, r.stopPropagation());
    },
    { capture: !0 }
  ), E(
    document.querySelector("body"),
    "mouseenter",
    (r) => {
      e.value && r.stopPropagation();
    },
    { capture: !0 }
  );
}
function We(e, n) {
  let r = e.parentElement.closest(`${n.selectors}`);
  for (; r !== null; ) {
    if (window.getComputedStyle(r, null).getPropertyValue("display") === "flex")
      return { id: parseInt(r.getAttribute(n.idAttr)), dom: r };
    r = r.parentElement.closest(`${n.selectors}`);
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
  const r = window.getComputedStyle(e, null), t = r.getPropertyValue("display") === "flex";
  let o = null;
  return t && (o = r.getPropertyValue("flex-direction")), {
    isFlex: t,
    direction: o
  };
}
function U(e, n) {
  const r = `[${n.idAttr}="${e}"]`;
  return document.querySelector(r);
}
function Ne(e, n) {
  function r(o, i) {
    return window.getComputedStyle(U(o, e), null).getPropertyValue(i);
  }
  function t(o) {
    const i = U(o, e);
    n.value = i;
  }
  return { queryStyle: r, selectTarget: t };
}
const ze = ["viewBox"], De = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: n, emit: r }) {
    const t = e, o = r, { viewBox: i, styles: s } = Me(), { hoverElement: l, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p } = $e(t.selectorConfig), { typeNameTagStyles: v, message: w } = Le(
      t.selectorConfig,
      l
    ), b = g(null);
    return Ve(l, b), I(l, (d) => {
      if (d) {
        const S = parseInt(d.getAttribute(t.selectorConfig.idAttr));
        o("hoverChange", { id: S });
        return;
      }
      o("hoverChange", { id: null });
    }), I(b, (d) => {
      const S = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const F = parseInt(d.getAttribute(t.selectorConfig.idAttr)), A = We(d, t.selectorConfig);
        let B = {
          isFlex: !1,
          direction: null
        };
        A && (B = Q(A.dom, t.selectorConfig)), o("selectedChange", {
          id: F,
          parentBoxId: A !== null ? A.id : null,
          flexInfo: Q(d, t.selectorConfig),
          parentFlexInfo: B
        });
        return;
      }
      o("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: S,
        parentFlexInfo: S
      });
    }), n(Ne(t.selectorConfig, b)), (d, S) => (W(), pe(de, { to: "body" }, [
      (W(), q("svg", {
        class: "vis-hover",
        viewBox: x(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: M([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, x(s)])
      }, [
        C("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: M(x(u))
        }, null, 4),
        C("line", _({ class: "top" }, x(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "right" }, x(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "bottom" }, x(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        C("line", _({ class: "left" }, x(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, ze)),
      R(Pe, {
        "selected-element": b.value,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element"]),
      R(Be, { style: { "z-index": "9999999" } }, {
        default: ve(() => [
          ee(d.$slots, "default")
        ]),
        _: 3
      }),
      C("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: M([x(v), { "z-index": "9999999" }])
      }, he(x(w)), 5)
    ]));
  }
});
export {
  De as default
};
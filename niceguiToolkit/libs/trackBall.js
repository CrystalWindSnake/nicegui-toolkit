const g = Vue.unref
const Q = Vue.isRef
const ne = Vue.toRefs
const re = Vue.customRef
const oe = Vue.getCurrentScope
const le = Vue.onScopeDispose
const U = Vue.getCurrentInstance
const G = Vue.onMounted
const ie = Vue.nextTick
const w = Vue.ref
const T = Vue.watch
const y = Vue.computed
const se = Vue.readonly
const ue = Vue.watchEffect
const ae = Vue.toRef
const J = Vue.reactive
const z = Vue.defineComponent
const M = Vue.openBlock
const H = Vue.createElementBlock
const O = Vue.normalizeStyle
const E = Vue.createElementVNode
const S = Vue.mergeProps
const K = Vue.renderSlot
const ce = Vue.Fragment
const R = Vue.createVNode
const fe = Vue.withCtx
const ve = Vue.createBlock
const pe = Vue.Teleport
const de = Vue.toDisplayString
function B(e) {
  return oe() ? (le(e), !0) : !1;
}
function _(e) {
  return typeof e == "function" ? e() : g(e);
}
const W = typeof window < "u" && typeof document < "u", he = Object.prototype.toString, ye = (e) => he.call(e) === "[object Object]", me = () => {
};
function ge(e, n = {}) {
  if (!Q(e))
    return ne(e);
  const r = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const t in e.value)
    r[t] = re(() => ({
      get() {
        return e.value[t];
      },
      set(l) {
        var s;
        if ((s = _(n.replaceRef)) != null ? s : !0)
          if (Array.isArray(e.value)) {
            const o = [...e.value];
            o[t] = l, e.value = o;
          } else {
            const o = { ...e.value, [t]: l };
            Object.setPrototypeOf(o, Object.getPrototypeOf(e.value)), e.value = o;
          }
        else
          e.value[t] = l;
      }
    }));
  return r;
}
function Z(e, n = !0) {
  U() ? G(e) : n ? e() : ie(e);
}
function we(e, n = 1e3, r = {}) {
  const {
    immediate: t = !0,
    immediateCallback: l = !1
  } = r;
  let s = null;
  const i = w(!1);
  function o() {
    s && (clearInterval(s), s = null);
  }
  function u() {
    i.value = !1, o();
  }
  function a() {
    const c = _(n);
    c <= 0 || (i.value = !0, l && e(), o(), s = setInterval(e, c));
  }
  if (t && W && a(), Q(n) || typeof n == "function") {
    const c = T(n, () => {
      i.value && W && a();
    });
    B(c);
  }
  return B(u), {
    isActive: i,
    pause: u,
    resume: a
  };
}
function $(e) {
  var n;
  const r = _(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const L = W ? window : void 0, xe = W ? window.document : void 0;
function b(...e) {
  let n, r, t, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, t, l] = e, n = L) : [n, r, t, l] = e, !n)
    return me;
  Array.isArray(r) || (r = [r]), Array.isArray(t) || (t = [t]);
  const s = [], i = () => {
    s.forEach((c) => c()), s.length = 0;
  }, o = (c, f, v, p) => (c.addEventListener(f, v, p), () => c.removeEventListener(f, v, p)), u = T(
    () => [$(n), _(l)],
    ([c, f]) => {
      if (i(), !c)
        return;
      const v = ye(f) ? { ...f } : f;
      s.push(
        ...r.flatMap((p) => t.map((x) => o(c, p, x, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), i();
  };
  return B(a), a;
}
function ke() {
  const e = w(!1);
  return U() && G(() => {
    e.value = !0;
  }), e;
}
function D(e) {
  const n = ke();
  return y(() => (n.value, !!e()));
}
function _e(e, n = {}) {
  const {
    immediate: r = !0,
    fpsLimit: t = void 0,
    window: l = L
  } = n, s = w(!1), i = t ? 1e3 / t : null;
  let o = 0, u = null;
  function a(v) {
    if (!s.value || !l)
      return;
    const p = v - (o || v);
    if (i && p < i) {
      u = l.requestAnimationFrame(a);
      return;
    }
    e({ delta: p, timestamp: v }), o = v, u = l.requestAnimationFrame(a);
  }
  function c() {
    !s.value && l && (s.value = !0, u = l.requestAnimationFrame(a));
  }
  function f() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return r && c(), B(f), {
    isActive: se(s),
    pause: f,
    resume: c
  };
}
function Ee(e, n = {}) {
  const { window: r = L } = n, t = D(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let l;
  const s = w(!1), i = (a) => {
    s.value = a.matches;
  }, o = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", i) : l.removeListener(i));
  }, u = ue(() => {
    t.value && (o(), l = r.matchMedia(_(e)), "addEventListener" in l ? l.addEventListener("change", i) : l.addListener(i), s.value = l.matches);
  });
  return B(() => {
    u(), o(), l = void 0;
  }), s;
}
function be(e, n = {}) {
  var r, t;
  const {
    pointerTypes: l,
    preventDefault: s,
    stopPropagation: i,
    exact: o,
    onMove: u,
    onEnd: a,
    onStart: c,
    initialValue: f,
    axis: v = "both",
    draggingElement: p = L,
    containerElement: x,
    handle: k = e
  } = n, d = w(
    (r = _(f)) != null ? r : { x: 0, y: 0 }
  ), A = w(), F = (h) => l ? l.includes(h.pointerType) : !0, I = (h) => {
    _(s) && h.preventDefault(), _(i) && h.stopPropagation();
  }, N = (h) => {
    var P;
    if (!F(h) || _(o) && h.target !== _(e))
      return;
    const q = ((P = _(x)) != null ? P : _(e)).getBoundingClientRect(), X = {
      x: h.clientX - q.left,
      y: h.clientY - q.top
    };
    (c == null ? void 0 : c(X, h)) !== !1 && (A.value = X, I(h));
  }, m = (h) => {
    if (!F(h) || !A.value)
      return;
    let { x: P, y: V } = d.value;
    (v === "x" || v === "both") && (P = h.clientX - A.value.x), (v === "y" || v === "both") && (V = h.clientY - A.value.y), d.value = {
      x: P,
      y: V
    }, u == null || u(d.value, h), I(h);
  }, C = (h) => {
    F(h) && A.value && (A.value = void 0, a == null || a(d.value, h), I(h));
  };
  if (W) {
    const h = { capture: (t = n.capture) != null ? t : !0 };
    b(k, "pointerdown", N, h), b(p, "pointermove", m, h), b(p, "pointerup", C, h);
  }
  return {
    ...ge(d),
    position: d,
    isDragging: y(() => !!A.value),
    style: y(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function Se(e, n, r = {}) {
  const { window: t = L, ...l } = r;
  let s;
  const i = D(() => t && "ResizeObserver" in t), o = () => {
    s && (s.disconnect(), s = void 0);
  }, u = y(() => Array.isArray(e) ? e.map((f) => $(f)) : [$(e)]), a = T(
    u,
    (f) => {
      if (o(), i.value && t) {
        s = new ResizeObserver(n);
        for (const v of f)
          v && s.observe(v, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    o(), a();
  };
  return B(c), {
    isSupported: i,
    stop: c
  };
}
function j(e, n = {}) {
  const {
    reset: r = !0,
    windowResize: t = !0,
    windowScroll: l = !0,
    immediate: s = !0
  } = n, i = w(0), o = w(0), u = w(0), a = w(0), c = w(0), f = w(0), v = w(0), p = w(0);
  function x() {
    const k = $(e);
    if (!k) {
      r && (i.value = 0, o.value = 0, u.value = 0, a.value = 0, c.value = 0, f.value = 0, v.value = 0, p.value = 0);
      return;
    }
    const d = k.getBoundingClientRect();
    i.value = d.height, o.value = d.bottom, u.value = d.left, a.value = d.right, c.value = d.top, f.value = d.width, v.value = d.x, p.value = d.y;
  }
  return Se(e, x), T(() => $(e), (k) => !k && x()), l && b("scroll", x, { capture: !0, passive: !0 }), t && b("resize", x, { passive: !0 }), Z(() => {
    s && x();
  }), {
    height: i,
    bottom: o,
    left: u,
    right: a,
    top: c,
    width: f,
    x: v,
    y: p,
    update: x
  };
}
function Ae(e) {
  const {
    x: n,
    y: r,
    document: t = xe,
    multiple: l,
    interval: s = "requestAnimationFrame",
    immediate: i = !0
  } = e, o = D(() => _(l) ? t && "elementsFromPoint" in t : t && "elementFromPoint" in t), u = w(null), a = () => {
    var f, v;
    u.value = _(l) ? (f = t == null ? void 0 : t.elementsFromPoint(_(n), _(r))) != null ? f : [] : (v = t == null ? void 0 : t.elementFromPoint(_(n), _(r))) != null ? v : null;
  }, c = s === "requestAnimationFrame" ? _e(a, { immediate: i }) : we(a, s, { immediate: i });
  return {
    isSupported: o,
    element: u,
    ...c
  };
}
const Ce = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function ee(e = {}) {
  const {
    type: n = "page",
    touch: r = !0,
    resetOnTouchEnds: t = !1,
    initialValue: l = { x: 0, y: 0 },
    window: s = L,
    target: i = s,
    scroll: o = !0,
    eventFilter: u
  } = e;
  let a = null;
  const c = w(l.x), f = w(l.y), v = w(null), p = typeof n == "function" ? n : Ce[n], x = (m) => {
    const C = p(m);
    a = m, C && ([c.value, f.value] = C, v.value = "mouse");
  }, k = (m) => {
    if (m.touches.length > 0) {
      const C = p(m.touches[0]);
      C && ([c.value, f.value] = C, v.value = "touch");
    }
  }, d = () => {
    if (!a || !s)
      return;
    const m = p(a);
    a instanceof MouseEvent && m && (c.value = m[0] + s.scrollX, f.value = m[1] + s.scrollY);
  }, A = () => {
    c.value = l.x, f.value = l.y;
  }, F = u ? (m) => u(() => x(m), {}) : (m) => x(m), I = u ? (m) => u(() => k(m), {}) : (m) => k(m), N = u ? () => u(() => d(), {}) : () => d();
  if (i) {
    const m = { passive: !0 };
    b(i, ["mousemove", "dragover"], F, m), r && n !== "movement" && (b(i, ["touchstart", "touchmove"], I, m), t && b(i, "touchend", A, m)), o && n === "page" && b(s, "scroll", N, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: v
  };
}
function Y(e = {}) {
  const {
    window: n = L,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: t = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: s = !0
  } = e, i = w(r), o = w(t), u = () => {
    n && (s ? (i.value = n.innerWidth, o.value = n.innerHeight) : (i.value = n.document.documentElement.clientWidth, o.value = n.document.documentElement.clientHeight));
  };
  if (u(), Z(u), b("resize", u, { passive: !0 }), l) {
    const a = Ee("(orientation: portrait)");
    T(a, () => u());
  }
  return { width: i, height: o };
}
function te() {
  const { width: e, height: n } = Y(), r = y(() => `0 0 ${e.value} ${n.value}`), t = y(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: r,
    styles: t
  };
}
function Te(e) {
  const n = ae(e), r = te(), t = J(j(e));
  b("scroll", t.update, !0);
  const l = y(() => n.value ? {
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
  }), s = y(() => n.value ? {
    cx: t.x,
    cy: t.y
  } : {
    r: 0
  }), i = y(() => n.value ? {
    cx: t.x + t.width / 2,
    cy: t.y
  } : {
    r: 0
  }), o = y(() => n.value ? {
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
  }), v = y(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: r,
    rectStyles: l,
    p1: s,
    p2: i,
    p3: o,
    p4: u,
    p5: a,
    p6: c,
    p7: f,
    p8: v
  };
}
const Le = ["viewBox"], Oe = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    selectedElement: {}
  },
  setup(e) {
    const n = e, r = y(() => n.selectedElement), {
      svgConfig: { viewBox: t, styles: l },
      rectStyles: s,
      p1: i,
      p2: o,
      p3: u,
      p4: a,
      p5: c,
      p6: f,
      p7: v,
      p8: p
    } = Te(r);
    return (x, k) => (M(), H("svg", {
      class: "vis-aiming",
      viewBox: g(t),
      version: "1.1",
      style: O([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(l)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      E("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: O(g(s))
      }, null, 4),
      E("circle", S({
        stroke: "hotpink",
        fill: "white"
      }, g(i), { r: "2" }), null, 16),
      E("circle", S({ fill: "hotpink" }, g(o), { r: "2" }), null, 16),
      E("circle", S({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      E("circle", S({ fill: "hotpink" }, g(a), { r: "2" }), null, 16),
      E("circle", S({
        stroke: "hotpink",
        fill: "white"
      }, g(c), { r: "2" }), null, 16),
      E("circle", S({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      E("circle", S({
        stroke: "hotpink",
        fill: "white"
      }, g(v), { r: "2" }), null, 16),
      E("circle", S({ fill: "hotpink" }, g(p), { r: "2" }), null, 16)
    ], 12, Le));
  }
}), Be = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const n = w(null), { style: r } = be(n, {
      initialValue: { x: 40, y: 40 }
    });
    return (t, l) => (M(), H("div", {
      ref_key: "el",
      ref: n,
      style: O([g(r), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      K(t.$slots, "default")
    ], 4));
  }
}), Fe = te;
function Ie(e, n) {
  const { width: r } = Y(), { x: t, y: l } = ee({ type: "client" }), s = y(() => {
    let u = t.value, a = l.value;
    return r.value - t.value < 10 && (u -= 10), l.value < 10 && (a += 10), { x: u, y: a };
  }), i = y(() => n.value ? {
    display: "block",
    left: `${s.value.x}px`,
    top: `${s.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    message: y(() => n.value ? n.value.getAttribute(e.elementTypeAttr) : null),
    typeNameTagStyles: i
  };
}
function Pe(e) {
  const { width: n, height: r } = Y(), { x: t, y: l } = ee({ type: "client" }), { element: s } = Ae({ x: t, y: l }), i = y(() => {
    if (s.value === null)
      return null;
    const p = s.value.closest(e.selectors);
    return p === null ? null : p;
  }), o = J(j(i));
  b("scroll", o.update, !0);
  const u = y(() => i.value ? {
    display: "block",
    width: o.width,
    height: o.height,
    x: o.left,
    y: o.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), a = y(() => i.value ? {
    x1: 0,
    y1: o.top,
    x2: n.value,
    y2: o.top
  } : {
    x1: 0,
    y1: 8,
    x2: o.width,
    y2: 8,
    "stroke-width": 0
  }), c = y(() => i.value ? {
    x1: o.left + o.width,
    y1: 0,
    x2: o.left + o.width,
    y2: r.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: r.value,
    "stroke-width": 0
  }), f = y(() => i.value ? {
    x1: 0,
    y1: o.top + o.height,
    x2: n.value,
    y2: o.top + o.height
  } : {
    x1: 0,
    y1: 8,
    x2: o.width,
    y2: 8,
    "stroke-width": 0
  }), v = y(() => i.value ? {
    x1: o.left,
    y1: 0,
    x2: o.left,
    y2: r.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: r.value,
    "stroke-width": 0
  });
  return { hoverElement: i, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: v };
}
function Me(e, n) {
  b(
    document.querySelector("body"),
    "click",
    (r) => {
      r.target.closest("[layout-tool-panel]") || (n.value = e.value, r.stopPropagation());
    },
    { capture: !0 }
  ), b(
    document.querySelector("body"),
    "mouseenter",
    (r) => {
      e.value && r.stopPropagation();
    },
    { capture: !0 }
  );
}
const We = ["viewBox"], He = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { emit: n }) {
    const r = e, t = n, { viewBox: l, styles: s } = Fe(), { hoverElement: i, rectStyles: o, topLine: u, rightLine: a, bottomLine: c, leftLine: f } = Pe(r.selectorConfig), { typeNameTagStyles: v, message: p } = Ie(
      r.selectorConfig,
      i
    ), x = w(null);
    return Me(i, x), T(i, (k) => {
      if (k) {
        const d = parseInt(k.getAttribute(r.selectorConfig.idAttr));
        t("hoverChange", { id: d });
        return;
      }
      t("hoverChange", { id: null });
    }), T(x, (k) => {
      if (k) {
        const d = parseInt(k.getAttribute(r.selectorConfig.idAttr));
        t("selectedChange", { id: d });
        return;
      }
      t("selectedChange", { id: null });
    }), (k, d) => (M(), H(ce, null, [
      R(Be, null, {
        default: fe(() => [
          K(k.$slots, "default")
        ]),
        _: 3
      }),
      (M(), H("svg", {
        class: "vis-hover",
        viewBox: g(l),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: O([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(s)])
      }, [
        E("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: O(g(o))
        }, null, 4),
        E("line", S({ class: "top" }, g(u), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        E("line", S({ class: "right" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        E("line", S({ class: "bottom" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        E("line", S({ class: "left" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, We)),
      R(Oe, { "selected-element": x.value }, null, 8, ["selected-element"]),
      (M(), ve(pe, { to: "body" }, [
        E("div", {
          class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow z-9999 rounded p-1 bg-green-400",
          style: O(g(v))
        }, de(g(p)), 5)
      ]))
    ], 64));
  }
});
export {
  He as default
};
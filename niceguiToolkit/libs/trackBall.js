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
const V = Vue.defineComponent
const W = Vue.openBlock
const q = Vue.createElementBlock
const O = Vue.normalizeStyle
const _ = Vue.createElementVNode
const A = Vue.mergeProps
const K = Vue.renderSlot
const ce = Vue.createBlock
const fe = Vue.Teleport
const R = Vue.createVNode
const pe = Vue.withCtx
const ve = Vue.toDisplayString
function P(e) {
  return oe() ? (le(e), !0) : !1;
}
function x(e) {
  return typeof e == "function" ? e() : g(e);
}
const F = typeof window < "u" && typeof document < "u", de = Object.prototype.toString, he = (e) => de.call(e) === "[object Object]", ye = () => {
};
function me(e, n = {}) {
  if (!Q(e))
    return ne(e);
  const l = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const t in e.value)
    l[t] = re(() => ({
      get() {
        return e.value[t];
      },
      set(r) {
        var i;
        if ((i = x(n.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const o = [...e.value];
            o[t] = r, e.value = o;
          } else {
            const o = { ...e.value, [t]: r };
            Object.setPrototypeOf(o, Object.getPrototypeOf(e.value)), e.value = o;
          }
        else
          e.value[t] = r;
      }
    }));
  return l;
}
function Z(e, n = !0) {
  U() ? G(e) : n ? e() : ie(e);
}
function ge(e, n = 1e3, l = {}) {
  const {
    immediate: t = !0,
    immediateCallback: r = !1
  } = l;
  let i = null;
  const s = w(!1);
  function o() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, o();
  }
  function a() {
    const c = x(n);
    c <= 0 || (s.value = !0, r && e(), o(), i = setInterval(e, c));
  }
  if (t && F && a(), Q(n) || typeof n == "function") {
    const c = T(n, () => {
      s.value && F && a();
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
  const l = x(e);
  return (n = l == null ? void 0 : l.$el) != null ? n : l;
}
const L = F ? window : void 0, we = F ? window.document : void 0;
function b(...e) {
  let n, l, t, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([l, t, r] = e, n = L) : [n, l, t, r] = e, !n)
    return ye;
  Array.isArray(l) || (l = [l]), Array.isArray(t) || (t = [t]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, o = (c, f, p, d) => (c.addEventListener(f, p, d), () => c.removeEventListener(f, p, d)), u = T(
    () => [M(n), x(r)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = he(f) ? { ...f } : f;
      i.push(
        ...l.flatMap((d) => t.map((k) => o(c, d, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), s();
  };
  return P(a), a;
}
function xe() {
  const e = w(!1);
  return U() && G(() => {
    e.value = !0;
  }), e;
}
function z(e) {
  const n = xe();
  return y(() => (n.value, !!e()));
}
function ke(e, n = {}) {
  const {
    immediate: l = !0,
    fpsLimit: t = void 0,
    window: r = L
  } = n, i = w(!1), s = t ? 1e3 / t : null;
  let o = 0, u = null;
  function a(p) {
    if (!i.value || !r)
      return;
    const d = p - (o || p);
    if (s && d < s) {
      u = r.requestAnimationFrame(a);
      return;
    }
    e({ delta: d, timestamp: p }), o = p, u = r.requestAnimationFrame(a);
  }
  function c() {
    !i.value && r && (i.value = !0, u = r.requestAnimationFrame(a));
  }
  function f() {
    i.value = !1, u != null && r && (r.cancelAnimationFrame(u), u = null);
  }
  return l && c(), P(f), {
    isActive: se(i),
    pause: f,
    resume: c
  };
}
function _e(e, n = {}) {
  const { window: l = L } = n, t = z(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let r;
  const i = w(!1), s = (a) => {
    i.value = a.matches;
  }, o = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", s) : r.removeListener(s));
  }, u = ue(() => {
    t.value && (o(), r = l.matchMedia(x(e)), "addEventListener" in r ? r.addEventListener("change", s) : r.addListener(s), i.value = r.matches);
  });
  return P(() => {
    u(), o(), r = void 0;
  }), i;
}
function Se(e, n = {}) {
  var l, t;
  const {
    pointerTypes: r,
    preventDefault: i,
    stopPropagation: s,
    exact: o,
    onMove: u,
    onEnd: a,
    onStart: c,
    initialValue: f,
    axis: p = "both",
    draggingElement: d = L,
    containerElement: k,
    handle: S = e
  } = n, v = w(
    (l = x(f)) != null ? l : { x: 0, y: 0 }
  ), E = w(), B = (h) => r ? r.includes(h.pointerType) : !0, I = (h) => {
    x(i) && h.preventDefault(), x(s) && h.stopPropagation();
  }, H = (h) => {
    var $;
    if (!B(h) || x(o) && h.target !== x(e))
      return;
    const Y = (($ = x(k)) != null ? $ : x(e)).getBoundingClientRect(), X = {
      x: h.clientX - Y.left,
      y: h.clientY - Y.top
    };
    (c == null ? void 0 : c(X, h)) !== !1 && (E.value = X, I(h));
  }, m = (h) => {
    if (!B(h) || !E.value)
      return;
    let { x: $, y: N } = v.value;
    (p === "x" || p === "both") && ($ = h.clientX - E.value.x), (p === "y" || p === "both") && (N = h.clientY - E.value.y), v.value = {
      x: $,
      y: N
    }, u == null || u(v.value, h), I(h);
  }, C = (h) => {
    B(h) && E.value && (E.value = void 0, a == null || a(v.value, h), I(h));
  };
  if (F) {
    const h = { capture: (t = n.capture) != null ? t : !0 };
    b(S, "pointerdown", H, h), b(d, "pointermove", m, h), b(d, "pointerup", C, h);
  }
  return {
    ...me(v),
    position: v,
    isDragging: y(() => !!E.value),
    style: y(
      () => `left:${v.value.x}px;top:${v.value.y}px;`
    )
  };
}
function Ee(e, n, l = {}) {
  const { window: t = L, ...r } = l;
  let i;
  const s = z(() => t && "ResizeObserver" in t), o = () => {
    i && (i.disconnect(), i = void 0);
  }, u = y(() => Array.isArray(e) ? e.map((f) => M(f)) : [M(e)]), a = T(
    u,
    (f) => {
      if (o(), s.value && t) {
        i = new ResizeObserver(n);
        for (const p of f)
          p && i.observe(p, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    o(), a();
  };
  return P(c), {
    isSupported: s,
    stop: c
  };
}
function j(e, n = {}) {
  const {
    reset: l = !0,
    windowResize: t = !0,
    windowScroll: r = !0,
    immediate: i = !0
  } = n, s = w(0), o = w(0), u = w(0), a = w(0), c = w(0), f = w(0), p = w(0), d = w(0);
  function k() {
    const S = M(e);
    if (!S) {
      l && (s.value = 0, o.value = 0, u.value = 0, a.value = 0, c.value = 0, f.value = 0, p.value = 0, d.value = 0);
      return;
    }
    const v = S.getBoundingClientRect();
    s.value = v.height, o.value = v.bottom, u.value = v.left, a.value = v.right, c.value = v.top, f.value = v.width, p.value = v.x, d.value = v.y;
  }
  return Ee(e, k), T(() => M(e), (S) => !S && k()), r && b("scroll", k, { capture: !0, passive: !0 }), t && b("resize", k, { passive: !0 }), Z(() => {
    i && k();
  }), {
    height: s,
    bottom: o,
    left: u,
    right: a,
    top: c,
    width: f,
    x: p,
    y: d,
    update: k
  };
}
function be(e) {
  const {
    x: n,
    y: l,
    document: t = we,
    multiple: r,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, o = z(() => x(r) ? t && "elementsFromPoint" in t : t && "elementFromPoint" in t), u = w(null), a = () => {
    var f, p;
    u.value = x(r) ? (f = t == null ? void 0 : t.elementsFromPoint(x(n), x(l))) != null ? f : [] : (p = t == null ? void 0 : t.elementFromPoint(x(n), x(l))) != null ? p : null;
  }, c = i === "requestAnimationFrame" ? ke(a, { immediate: s }) : ge(a, i, { immediate: s });
  return {
    isSupported: o,
    element: u,
    ...c
  };
}
const Ae = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function ee(e = {}) {
  const {
    type: n = "page",
    touch: l = !0,
    resetOnTouchEnds: t = !1,
    initialValue: r = { x: 0, y: 0 },
    window: i = L,
    target: s = i,
    scroll: o = !0,
    eventFilter: u
  } = e;
  let a = null;
  const c = w(r.x), f = w(r.y), p = w(null), d = typeof n == "function" ? n : Ae[n], k = (m) => {
    const C = d(m);
    a = m, C && ([c.value, f.value] = C, p.value = "mouse");
  }, S = (m) => {
    if (m.touches.length > 0) {
      const C = d(m.touches[0]);
      C && ([c.value, f.value] = C, p.value = "touch");
    }
  }, v = () => {
    if (!a || !i)
      return;
    const m = d(a);
    a instanceof MouseEvent && m && (c.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, E = () => {
    c.value = r.x, f.value = r.y;
  }, B = u ? (m) => u(() => k(m), {}) : (m) => k(m), I = u ? (m) => u(() => S(m), {}) : (m) => S(m), H = u ? () => u(() => v(), {}) : () => v();
  if (s) {
    const m = { passive: !0 };
    b(s, ["mousemove", "dragover"], B, m), l && n !== "movement" && (b(s, ["touchstart", "touchmove"], I, m), t && b(s, "touchend", E, m)), o && n === "page" && b(i, "scroll", H, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: p
  };
}
function D(e = {}) {
  const {
    window: n = L,
    initialWidth: l = Number.POSITIVE_INFINITY,
    initialHeight: t = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: i = !0
  } = e, s = w(l), o = w(t), u = () => {
    n && (i ? (s.value = n.innerWidth, o.value = n.innerHeight) : (s.value = n.document.documentElement.clientWidth, o.value = n.document.documentElement.clientHeight));
  };
  if (u(), Z(u), b("resize", u, { passive: !0 }), r) {
    const a = _e("(orientation: portrait)");
    T(a, () => u());
  }
  return { width: s, height: o };
}
function te() {
  const { width: e, height: n } = D(), l = y(() => `0 0 ${e.value} ${n.value}`), t = y(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: l,
    styles: t
  };
}
function Ce(e) {
  const n = ae(e), l = te(), t = J(j(e));
  b("scroll", t.update, !0);
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
  }), p = y(() => n.value ? {
    cx: t.x,
    cy: t.y + t.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: l,
    rectStyles: r,
    p1: i,
    p2: s,
    p3: o,
    p4: u,
    p5: a,
    p6: c,
    p7: f,
    p8: p
  };
}
const Te = ["viewBox"], Le = /* @__PURE__ */ V({
  __name: "Aiming",
  props: {
    selectedElement: {}
  },
  setup(e) {
    const n = e, l = y(() => n.selectedElement), {
      svgConfig: { viewBox: t, styles: r },
      rectStyles: i,
      p1: s,
      p2: o,
      p3: u,
      p4: a,
      p5: c,
      p6: f,
      p7: p,
      p8: d
    } = Ce(l);
    return (k, S) => (W(), q("svg", {
      class: "vis-aiming",
      viewBox: g(t),
      version: "1.1",
      style: O([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(r)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      _("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: O(g(i))
      }, null, 4),
      _("circle", A({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      _("circle", A({ fill: "hotpink" }, g(o), { r: "2" }), null, 16),
      _("circle", A({
        stroke: "hotpink",
        fill: "white"
      }, g(u), { r: "2" }), null, 16),
      _("circle", A({ fill: "hotpink" }, g(a), { r: "2" }), null, 16),
      _("circle", A({
        stroke: "hotpink",
        fill: "white"
      }, g(c), { r: "2" }), null, 16),
      _("circle", A({ fill: "hotpink" }, g(f), { r: "2" }), null, 16),
      _("circle", A({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      _("circle", A({ fill: "hotpink" }, g(d), { r: "2" }), null, 16)
    ], 12, Te));
  }
}), Oe = /* @__PURE__ */ V({
  __name: "Panel",
  setup(e) {
    const n = w(null), { style: l } = Se(n, {
      initialValue: { x: 40, y: 40 }
    });
    return (t, r) => (W(), q("div", {
      ref_key: "el",
      ref: n,
      style: O([g(l), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      K(t.$slots, "default")
    ], 4));
  }
}), Pe = te;
function Be(e, n) {
  const { width: l } = D(), { x: t, y: r } = ee({ type: "client" }), i = y(() => {
    let u = t.value, a = r.value;
    return l.value - t.value < 10 && (u -= 10), r.value < 10 && (a += 10), { x: u, y: a };
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
function Ie(e) {
  const { width: n, height: l } = D(), { x: t, y: r } = ee({ type: "client" }), { element: i } = be({ x: t, y: r }), s = y(() => {
    if (i.value === null)
      return null;
    const d = i.value.closest(e.selectors);
    return d === null || d.closest("[layout-tool-panel]") ? null : d;
  }), o = J(j(s));
  b("scroll", o.update, !0);
  const u = y(() => s.value ? {
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
  }), a = y(() => s.value ? {
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
  }), c = y(() => s.value ? {
    x1: o.left + o.width,
    y1: 0,
    x2: o.left + o.width,
    y2: l.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: l.value,
    "stroke-width": 0
  }), f = y(() => s.value ? {
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
  }), p = y(() => s.value ? {
    x1: o.left,
    y1: 0,
    x2: o.left,
    y2: l.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: l.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p };
}
function $e(e, n) {
  b(
    document.querySelector("body"),
    "click",
    (l) => {
      l.target.closest("[layout-tool-panel]") || (n.value = e.value, l.stopPropagation());
    },
    { capture: !0 }
  ), b(
    document.querySelector("body"),
    "mouseenter",
    (l) => {
      e.value && l.stopPropagation();
    },
    { capture: !0 }
  );
}
function Fe(e) {
  function n(l, t) {
    const r = `[${e.idAttr}="${l}"]`;
    return window.getComputedStyle(document.querySelector(r)).getPropertyValue(t);
  }
  return { queryStyle: n };
}
const Me = ["viewBox"], He = /* @__PURE__ */ V({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: n, emit: l }) {
    const t = e, r = l, { viewBox: i, styles: s } = Pe(), { hoverElement: o, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p } = Ie(t.selectorConfig), { typeNameTagStyles: d, message: k } = Be(
      t.selectorConfig,
      o
    ), S = w(null);
    return $e(o, S), T(o, (v) => {
      if (v) {
        const E = parseInt(v.getAttribute(t.selectorConfig.idAttr));
        r("hoverChange", { id: E });
        return;
      }
      r("hoverChange", { id: null });
    }), T(S, (v) => {
      if (v) {
        const E = parseInt(v.getAttribute(t.selectorConfig.idAttr));
        r("selectedChange", { id: E });
        return;
      }
      r("selectedChange", { id: null });
    }), n(Fe(t.selectorConfig)), (v, E) => (W(), ce(fe, { to: "body" }, [
      (W(), q("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: O([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(s)])
      }, [
        _("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: O(g(u))
        }, null, 4),
        _("line", A({ class: "top" }, g(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", A({ class: "right" }, g(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", A({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", A({ class: "left" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Me)),
      R(Le, { "selected-element": S.value }, null, 8, ["selected-element"]),
      R(Oe, null, {
        default: pe(() => [
          K(v.$slots, "default")
        ]),
        _: 3
      }),
      _("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow z-9999 rounded p-1 bg-green-400",
        style: O(g(d))
      }, ve(g(k)), 5)
    ]));
  }
});
export {
  He as default
};
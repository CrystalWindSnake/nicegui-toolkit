const g = Vue.unref
const U = Vue.isRef
const re = Vue.toRefs
const oe = Vue.customRef
const le = Vue.getCurrentScope
const ie = Vue.onScopeDispose
const G = Vue.getCurrentInstance
const J = Vue.onMounted
const se = Vue.nextTick
const x = Vue.ref
const P = Vue.watch
const y = Vue.computed
const ue = Vue.readonly
const ae = Vue.watchEffect
const ce = Vue.toRef
const K = Vue.reactive
const N = Vue.defineComponent
const V = Vue.openBlock
const q = Vue.createElementBlock
const B = Vue.normalizeStyle
const _ = Vue.createElementVNode
const A = Vue.mergeProps
const Z = Vue.renderSlot
const fe = Vue.createBlock
const pe = Vue.Teleport
const R = Vue.createVNode
const de = Vue.withCtx
const ve = Vue.toDisplayString
function F(e) {
  return le() ? (ie(e), !0) : !1;
}
function w(e) {
  return typeof e == "function" ? e() : g(e);
}
const $ = typeof window < "u" && typeof document < "u", he = Object.prototype.toString, ye = (e) => he.call(e) === "[object Object]", me = () => {
};
function ge(e, n = {}) {
  if (!U(e))
    return re(e);
  const r = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const t in e.value)
    r[t] = oe(() => ({
      get() {
        return e.value[t];
      },
      set(o) {
        var i;
        if ((i = w(n.replaceRef)) != null ? i : !0)
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
function j(e, n = !0) {
  G() ? J(e) : n ? e() : se(e);
}
function xe(e, n = 1e3, r = {}) {
  const {
    immediate: t = !0,
    immediateCallback: o = !1
  } = r;
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
    c <= 0 || (s.value = !0, o && e(), l(), i = setInterval(e, c));
  }
  if (t && $ && a(), U(n) || typeof n == "function") {
    const c = P(n, () => {
      s.value && $ && a();
    });
    F(c);
  }
  return F(u), {
    isActive: s,
    pause: u,
    resume: a
  };
}
function M(e) {
  var n;
  const r = w(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const T = $ ? window : void 0, we = $ ? window.document : void 0;
function b(...e) {
  let n, r, t, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, t, o] = e, n = T) : [n, r, t, o] = e, !n)
    return me;
  Array.isArray(r) || (r = [r]), Array.isArray(t) || (t = [t]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, l = (c, f, p, v) => (c.addEventListener(f, p, v), () => c.removeEventListener(f, p, v)), u = P(
    () => [M(n), w(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = ye(f) ? { ...f } : f;
      i.push(
        ...r.flatMap((v) => t.map((k) => l(c, v, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), s();
  };
  return F(a), a;
}
function ke() {
  const e = x(!1);
  return G() && J(() => {
    e.value = !0;
  }), e;
}
function z(e) {
  const n = ke();
  return y(() => (n.value, !!e()));
}
function Se(e, n = {}) {
  const {
    immediate: r = !0,
    fpsLimit: t = void 0,
    window: o = T
  } = n, i = x(!1), s = t ? 1e3 / t : null;
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
  return r && c(), F(f), {
    isActive: ue(i),
    pause: f,
    resume: c
  };
}
function _e(e, n = {}) {
  const { window: r = T } = n, t = z(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let o;
  const i = x(!1), s = (a) => {
    i.value = a.matches;
  }, l = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, u = ae(() => {
    t.value && (l(), o = r.matchMedia(w(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), i.value = o.matches);
  });
  return F(() => {
    u(), l(), o = void 0;
  }), i;
}
function Ee(e, n = {}) {
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
    draggingElement: v = T,
    containerElement: k,
    handle: S = e
  } = n, d = x(
    (r = w(f)) != null ? r : { x: 0, y: 0 }
  ), E = x(), C = (h) => o ? o.includes(h.pointerType) : !0, L = (h) => {
    w(i) && h.preventDefault(), w(s) && h.stopPropagation();
  }, W = (h) => {
    var O;
    if (!C(h) || w(l) && h.target !== w(e))
      return;
    const Y = ((O = w(k)) != null ? O : w(e)).getBoundingClientRect(), X = {
      x: h.clientX - Y.left,
      y: h.clientY - Y.top
    };
    (c == null ? void 0 : c(X, h)) !== !1 && (E.value = X, L(h));
  }, m = (h) => {
    if (!C(h) || !E.value)
      return;
    let { x: O, y: H } = d.value;
    (p === "x" || p === "both") && (O = h.clientX - E.value.x), (p === "y" || p === "both") && (H = h.clientY - E.value.y), d.value = {
      x: O,
      y: H
    }, u == null || u(d.value, h), L(h);
  }, I = (h) => {
    C(h) && E.value && (E.value = void 0, a == null || a(d.value, h), L(h));
  };
  if ($) {
    const h = { capture: (t = n.capture) != null ? t : !0 };
    b(S, "pointerdown", W, h), b(v, "pointermove", m, h), b(v, "pointerup", I, h);
  }
  return {
    ...ge(d),
    position: d,
    isDragging: y(() => !!E.value),
    style: y(
      () => `left:${d.value.x}px;top:${d.value.y}px;`
    )
  };
}
function be(e, n, r = {}) {
  const { window: t = T, ...o } = r;
  let i;
  const s = z(() => t && "ResizeObserver" in t), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = y(() => Array.isArray(e) ? e.map((f) => M(f)) : [M(e)]), a = P(
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
  return F(c), {
    isSupported: s,
    stop: c
  };
}
function ee(e, n = {}) {
  const {
    reset: r = !0,
    windowResize: t = !0,
    windowScroll: o = !0,
    immediate: i = !0
  } = n, s = x(0), l = x(0), u = x(0), a = x(0), c = x(0), f = x(0), p = x(0), v = x(0);
  function k() {
    const S = M(e);
    if (!S) {
      r && (s.value = 0, l.value = 0, u.value = 0, a.value = 0, c.value = 0, f.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const d = S.getBoundingClientRect();
    s.value = d.height, l.value = d.bottom, u.value = d.left, a.value = d.right, c.value = d.top, f.value = d.width, p.value = d.x, v.value = d.y;
  }
  return be(e, k), P(() => M(e), (S) => !S && k()), o && b("scroll", k, { capture: !0, passive: !0 }), t && b("resize", k, { passive: !0 }), j(() => {
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
function Ae(e) {
  const {
    x: n,
    y: r,
    document: t = we,
    multiple: o,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, l = z(() => w(o) ? t && "elementsFromPoint" in t : t && "elementFromPoint" in t), u = x(null), a = () => {
    var f, p;
    u.value = w(o) ? (f = t == null ? void 0 : t.elementsFromPoint(w(n), w(r))) != null ? f : [] : (p = t == null ? void 0 : t.elementFromPoint(w(n), w(r))) != null ? p : null;
  }, c = i === "requestAnimationFrame" ? Se(a, { immediate: s }) : xe(a, i, { immediate: s });
  return {
    isSupported: l,
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
function te(e = {}) {
  const {
    type: n = "page",
    touch: r = !0,
    resetOnTouchEnds: t = !1,
    initialValue: o = { x: 0, y: 0 },
    window: i = T,
    target: s = i,
    scroll: l = !0,
    eventFilter: u
  } = e;
  let a = null;
  const c = x(o.x), f = x(o.y), p = x(null), v = typeof n == "function" ? n : Ce[n], k = (m) => {
    const I = v(m);
    a = m, I && ([c.value, f.value] = I, p.value = "mouse");
  }, S = (m) => {
    if (m.touches.length > 0) {
      const I = v(m.touches[0]);
      I && ([c.value, f.value] = I, p.value = "touch");
    }
  }, d = () => {
    if (!a || !i)
      return;
    const m = v(a);
    a instanceof MouseEvent && m && (c.value = m[0] + i.scrollX, f.value = m[1] + i.scrollY);
  }, E = () => {
    c.value = o.x, f.value = o.y;
  }, C = u ? (m) => u(() => k(m), {}) : (m) => k(m), L = u ? (m) => u(() => S(m), {}) : (m) => S(m), W = u ? () => u(() => d(), {}) : () => d();
  if (s) {
    const m = { passive: !0 };
    b(s, ["mousemove", "dragover"], C, m), r && n !== "movement" && (b(s, ["touchstart", "touchmove"], L, m), t && b(s, "touchend", E, m)), l && n === "page" && b(i, "scroll", W, { passive: !0 });
  }
  return {
    x: c,
    y: f,
    sourceType: p
  };
}
function D(e = {}) {
  const {
    window: n = T,
    initialWidth: r = Number.POSITIVE_INFINITY,
    initialHeight: t = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: i = !0
  } = e, s = x(r), l = x(t), u = () => {
    n && (i ? (s.value = n.innerWidth, l.value = n.innerHeight) : (s.value = n.document.documentElement.clientWidth, l.value = n.document.documentElement.clientHeight));
  };
  if (u(), j(u), b("resize", u, { passive: !0 }), o) {
    const a = _e("(orientation: portrait)");
    P(a, () => u());
  }
  return { width: s, height: l };
}
function ne() {
  const { width: e, height: n } = D(), r = y(() => `0 0 ${e.value} ${n.value}`), t = y(() => ({
    width: e.value,
    height: n.value
  }));
  return {
    viewBox: r,
    styles: t
  };
}
function Ie(e) {
  const n = ce(e), r = ne(), t = K(ee(e));
  b("scroll", t.update, !0);
  const o = y(() => n.value ? {
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
    svgConfig: r,
    rectStyles: o,
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
const Pe = ["viewBox"], Te = /* @__PURE__ */ N({
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
    } = Ie(r);
    return (k, S) => (V(), q("svg", {
      class: "vis-aiming",
      viewBox: g(t),
      version: "1.1",
      style: B([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(o)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      _("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: B(g(i))
      }, null, 4),
      _("circle", A({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      _("circle", A({ fill: "hotpink" }, g(l), { r: "2" }), null, 16),
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
      _("circle", A({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Pe));
  }
}), Be = /* @__PURE__ */ N({
  __name: "Panel",
  setup(e) {
    const n = x(null), { style: r } = Ee(n, {
      initialValue: { x: 40, y: 40 }
    });
    return (t, o) => (V(), q("div", {
      ref_key: "el",
      ref: n,
      style: B([g(r), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      Z(t.$slots, "default")
    ], 4));
  }
}), Fe = ne;
function Le(e, n) {
  const { width: r } = D(), { x: t, y: o } = te({ type: "client" }), i = y(() => {
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
function Oe(e) {
  const { width: n, height: r } = D(), { x: t, y: o } = te({ type: "client" }), { element: i } = Ae({ x: t, y: o }), s = y(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(e.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), l = K(ee(s));
  b("scroll", l.update, !0);
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
function $e(e, n) {
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
function Me(e, n) {
  let r = e.parentElement.closest(`${n.selectors}`);
  for (; r !== null; ) {
    if (window.getComputedStyle(r, null).getPropertyValue("display") === "flex")
      return parseInt(r.getAttribute(n.idAttr));
    r = r.parentElement.closest(`${n.selectors}`);
  }
  return null;
}
function Ve(e, n) {
  const r = window.getComputedStyle(e, null), t = r.getPropertyValue("display") === "flex";
  let o = null;
  return t && (o = r.getPropertyValue("flex-direction")), {
    isFlex: t,
    direction: o
  };
}
function Q(e, n) {
  const r = `[${n.idAttr}="${e}"]`;
  return document.querySelector(r);
}
function We(e, n) {
  function r(o, i) {
    return window.getComputedStyle(Q(o, e), null).getPropertyValue(i);
  }
  function t(o) {
    const i = Q(o, e);
    n.value = i;
  }
  return { queryStyle: r, selectTarget: t };
}
const He = ["viewBox"], qe = /* @__PURE__ */ N({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(e, { expose: n, emit: r }) {
    const t = e, o = r, { viewBox: i, styles: s } = Fe(), { hoverElement: l, rectStyles: u, topLine: a, rightLine: c, bottomLine: f, leftLine: p } = Oe(t.selectorConfig), { typeNameTagStyles: v, message: k } = Le(
      t.selectorConfig,
      l
    ), S = x(null);
    return $e(l, S), P(l, (d) => {
      if (d) {
        const E = parseInt(d.getAttribute(t.selectorConfig.idAttr));
        o("hoverChange", { id: E });
        return;
      }
      o("hoverChange", { id: null });
    }), P(S, (d) => {
      const E = {
        isFlex: !1,
        direction: null
      };
      if (d) {
        const C = parseInt(d.getAttribute(t.selectorConfig.idAttr));
        o("selectedChange", {
          id: C,
          parentBoxId: Me(d, t.selectorConfig),
          flexInfo: Ve(d, t.selectorConfig)
        });
        return;
      }
      o("selectedChange", { id: null, parentBoxId: null, flexInfo: E });
    }), n(We(t.selectorConfig, S)), (d, E) => (V(), fe(pe, { to: "body" }, [
      (V(), q("svg", {
        class: "vis-hover",
        viewBox: g(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: B([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, g(s)])
      }, [
        _("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: B(g(u))
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
      ], 12, He)),
      R(Te, { "selected-element": S.value }, null, 8, ["selected-element"]),
      R(Be, null, {
        default: de(() => [
          Z(d.$slots, "default")
        ]),
        _: 3
      }),
      _("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow z-9999 rounded p-1 bg-green-400",
        style: B(g(v))
      }, ve(g(k)), 5)
    ]));
  }
});
export {
  qe as default
};
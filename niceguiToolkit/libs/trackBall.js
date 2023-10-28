const Q = Vue.getCurrentScope
const U = Vue.onScopeDispose
const m = Vue.unref
const N = Vue.getCurrentInstance
const H = Vue.onMounted
const G = Vue.nextTick
const y = Vue.ref
const J = Vue.isRef
const A = Vue.watch
const v = Vue.computed
const K = Vue.readonly
const Z = Vue.watchEffect
const ee = Vue.toRef
const P = Vue.reactive
const V = Vue.defineComponent
const B = Vue.openBlock
const M = Vue.createElementBlock
const F = Vue.normalizeStyle
const k = Vue.createElementVNode
const b = Vue.mergeProps
const te = Vue.Fragment
const ne = Vue.toDisplayString
const oe = Vue.createVNode
function C(t) {
  return Q() ? (U(t), !0) : !1;
}
function E(t) {
  return typeof t == "function" ? t() : m(t);
}
const T = typeof window < "u" && typeof document < "u", re = Object.prototype.toString, ie = (t) => re.call(t) === "[object Object]", le = () => {
};
function z(t, n = !0) {
  N() ? H(t) : n ? t() : G(t);
}
function se(t, n = 1e3, o = {}) {
  const {
    immediate: e = !0,
    immediateCallback: l = !1
  } = o;
  let s = null;
  const r = y(!1);
  function i() {
    s && (clearInterval(s), s = null);
  }
  function u() {
    r.value = !1, i();
  }
  function c() {
    const a = E(n);
    a <= 0 || (r.value = !0, l && t(), i(), s = setInterval(t, a));
  }
  if (e && T && c(), J(n) || typeof n == "function") {
    const a = A(n, () => {
      r.value && T && c();
    });
    C(a);
  }
  return C(u), {
    isActive: r,
    pause: u,
    resume: c
  };
}
function I(t) {
  var n;
  const o = E(t);
  return (n = o == null ? void 0 : o.$el) != null ? n : o;
}
const _ = T ? window : void 0, ue = T ? window.document : void 0;
function S(...t) {
  let n, o, e, l;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, e, l] = t, n = _) : [n, o, e, l] = t, !n)
    return le;
  Array.isArray(o) || (o = [o]), Array.isArray(e) || (e = [e]);
  const s = [], r = () => {
    s.forEach((a) => a()), s.length = 0;
  }, i = (a, f, d, p) => (a.addEventListener(f, d, p), () => a.removeEventListener(f, d, p)), u = A(
    () => [I(n), E(l)],
    ([a, f]) => {
      if (r(), !a)
        return;
      const d = ie(f) ? { ...f } : f;
      s.push(
        ...o.flatMap((p) => e.map((g) => i(a, p, g, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), r();
  };
  return C(c), c;
}
function ce() {
  const t = y(!1);
  return N() && H(() => {
    t.value = !0;
  }), t;
}
function W(t) {
  const n = ce();
  return v(() => (n.value, !!t()));
}
function ae(t, n = {}) {
  const {
    immediate: o = !0,
    fpsLimit: e = void 0,
    window: l = _
  } = n, s = y(!1), r = e ? 1e3 / e : null;
  let i = 0, u = null;
  function c(d) {
    if (!s.value || !l)
      return;
    const p = d - (i || d);
    if (r && p < r) {
      u = l.requestAnimationFrame(c);
      return;
    }
    t({ delta: p, timestamp: d }), i = d, u = l.requestAnimationFrame(c);
  }
  function a() {
    !s.value && l && (s.value = !0, u = l.requestAnimationFrame(c));
  }
  function f() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return o && a(), C(f), {
    isActive: K(s),
    pause: f,
    resume: a
  };
}
function fe(t, n = {}) {
  const { window: o = _ } = n, e = W(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let l;
  const s = y(!1), r = (c) => {
    s.value = c.matches;
  }, i = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", r) : l.removeListener(r));
  }, u = Z(() => {
    e.value && (i(), l = o.matchMedia(E(t)), "addEventListener" in l ? l.addEventListener("change", r) : l.addListener(r), s.value = l.matches);
  });
  return C(() => {
    u(), i(), l = void 0;
  }), s;
}
function de(t, n, o = {}) {
  const { window: e = _, ...l } = o;
  let s;
  const r = W(() => e && "ResizeObserver" in e), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = v(() => Array.isArray(t) ? t.map((f) => I(f)) : [I(t)]), c = A(
    u,
    (f) => {
      if (i(), r.value && e) {
        s = new ResizeObserver(n);
        for (const d of f)
          d && s.observe(d, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), a = () => {
    i(), c();
  };
  return C(a), {
    isSupported: r,
    stop: a
  };
}
function R(t, n = {}) {
  const {
    reset: o = !0,
    windowResize: e = !0,
    windowScroll: l = !0,
    immediate: s = !0
  } = n, r = y(0), i = y(0), u = y(0), c = y(0), a = y(0), f = y(0), d = y(0), p = y(0);
  function g() {
    const x = I(t);
    if (!x) {
      o && (r.value = 0, i.value = 0, u.value = 0, c.value = 0, a.value = 0, f.value = 0, d.value = 0, p.value = 0);
      return;
    }
    const w = x.getBoundingClientRect();
    r.value = w.height, i.value = w.bottom, u.value = w.left, c.value = w.right, a.value = w.top, f.value = w.width, d.value = w.x, p.value = w.y;
  }
  return de(t, g), A(() => I(t), (x) => !x && g()), l && S("scroll", g, { capture: !0, passive: !0 }), e && S("resize", g, { passive: !0 }), z(() => {
    s && g();
  }), {
    height: r,
    bottom: i,
    left: u,
    right: c,
    top: a,
    width: f,
    x: d,
    y: p,
    update: g
  };
}
function ve(t) {
  const {
    x: n,
    y: o,
    document: e = ue,
    multiple: l,
    interval: s = "requestAnimationFrame",
    immediate: r = !0
  } = t, i = W(() => E(l) ? e && "elementsFromPoint" in e : e && "elementFromPoint" in e), u = y(null), c = () => {
    var f, d;
    u.value = E(l) ? (f = e == null ? void 0 : e.elementsFromPoint(E(n), E(o))) != null ? f : [] : (d = e == null ? void 0 : e.elementFromPoint(E(n), E(o))) != null ? d : null;
  }, a = s === "requestAnimationFrame" ? ae(c, { immediate: r }) : se(c, s, { immediate: r });
  return {
    isSupported: i,
    element: u,
    ...a
  };
}
const pe = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function $(t = {}) {
  const {
    type: n = "page",
    touch: o = !0,
    resetOnTouchEnds: e = !1,
    initialValue: l = { x: 0, y: 0 },
    window: s = _,
    target: r = s,
    scroll: i = !0,
    eventFilter: u
  } = t;
  let c = null;
  const a = y(l.x), f = y(l.y), d = y(null), p = typeof n == "function" ? n : pe[n], g = (h) => {
    const L = p(h);
    c = h, L && ([a.value, f.value] = L, d.value = "mouse");
  }, x = (h) => {
    if (h.touches.length > 0) {
      const L = p(h.touches[0]);
      L && ([a.value, f.value] = L, d.value = "touch");
    }
  }, w = () => {
    if (!c || !s)
      return;
    const h = p(c);
    c instanceof MouseEvent && h && (a.value = h[0] + s.scrollX, f.value = h[1] + s.scrollY);
  }, Y = () => {
    a.value = l.x, f.value = l.y;
  }, X = u ? (h) => u(() => g(h), {}) : (h) => g(h), j = u ? (h) => u(() => x(h), {}) : (h) => x(h), D = u ? () => u(() => w(), {}) : () => w();
  if (r) {
    const h = { passive: !0 };
    S(r, ["mousemove", "dragover"], X, h), o && n !== "movement" && (S(r, ["touchstart", "touchmove"], j, h), e && S(r, "touchend", Y, h)), i && n === "page" && S(s, "scroll", D, { passive: !0 });
  }
  return {
    x: a,
    y: f,
    sourceType: d
  };
}
function O(t = {}) {
  const {
    window: n = _,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: e = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: s = !0
  } = t, r = y(o), i = y(e), u = () => {
    n && (s ? (r.value = n.innerWidth, i.value = n.innerHeight) : (r.value = n.document.documentElement.clientWidth, i.value = n.document.documentElement.clientHeight));
  };
  if (u(), z(u), S("resize", u, { passive: !0 }), l) {
    const c = fe("(orientation: portrait)");
    A(c, () => u());
  }
  return { width: r, height: i };
}
function q() {
  const { width: t, height: n } = O(), o = v(() => `0 0 ${t.value} ${n.value}`), e = v(() => ({
    width: t.value,
    height: n.value
  }));
  return {
    viewBox: o,
    styles: e
  };
}
function he(t) {
  const n = ee(t), o = q(), e = P(R(t));
  S("scroll", e.update, !0);
  const l = v(() => n.value ? {
    display: "block",
    width: e.width,
    height: e.height,
    x: e.left,
    y: e.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), s = v(() => n.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), r = v(() => n.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), i = v(() => n.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), u = v(() => n.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), c = v(() => n.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), a = v(() => n.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), f = v(() => n.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), d = v(() => n.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: o,
    rectStyles: l,
    p1: s,
    p2: r,
    p3: i,
    p4: u,
    p5: c,
    p6: a,
    p7: f,
    p8: d
  };
}
const me = ["viewBox"], ye = /* @__PURE__ */ V({
  __name: "Aiming",
  props: {
    selectedElement: {}
  },
  setup(t) {
    const n = t, o = v(() => n.selectedElement), {
      svgConfig: { viewBox: e, styles: l },
      rectStyles: s,
      p1: r,
      p2: i,
      p3: u,
      p4: c,
      p5: a,
      p6: f,
      p7: d,
      p8: p
    } = he(o);
    return (g, x) => (B(), M("svg", {
      class: "vis-aiming",
      viewBox: m(e),
      version: "1.1",
      style: F([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, m(l)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      k("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: F(m(s))
      }, null, 4),
      k("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, m(r), { r: "2" }), null, 16),
      k("circle", b({ fill: "hotpink" }, m(i), { r: "2" }), null, 16),
      k("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, m(u), { r: "2" }), null, 16),
      k("circle", b({ fill: "hotpink" }, m(c), { r: "2" }), null, 16),
      k("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, m(a), { r: "2" }), null, 16),
      k("circle", b({ fill: "hotpink" }, m(f), { r: "2" }), null, 16),
      k("circle", b({
        stroke: "hotpink",
        fill: "white"
      }, m(d), { r: "2" }), null, 16),
      k("circle", b({ fill: "hotpink" }, m(p), { r: "2" }), null, 16)
    ], 12, me));
  }
}), ge = q;
function we(t, n) {
  const { width: o } = O(), { x: e, y: l } = $({ type: "client" }), s = v(() => {
    let u = e.value, c = l.value;
    return o.value - e.value < 10 && (u -= 10), l.value < 10 && (c += 10), { x: u, y: c };
  }), r = v(() => n.value ? {
    display: "block",
    left: `${s.value.x}px`,
    top: `${s.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    message: v(() => n.value ? n.value.getAttribute(t.elementTypeAttr) : null),
    typeNameTagStyles: r
  };
}
function xe(t) {
  const { width: n, height: o } = O(), { x: e, y: l } = $({ type: "client" }), { element: s } = ve({ x: e, y: l }), r = v(() => {
    if (s.value === null)
      return null;
    const p = s.value.closest(t.selectors);
    return p === null ? null : p;
  }), i = P(R(r));
  S("scroll", i.update, !0);
  const u = v(() => r.value ? {
    display: "block",
    width: i.width,
    height: i.height,
    x: i.left,
    y: i.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), c = v(() => r.value ? {
    x1: 0,
    y1: i.top,
    x2: n.value,
    y2: i.top
  } : {
    x1: 0,
    y1: 8,
    x2: i.width,
    y2: 8,
    "stroke-width": 0
  }), a = v(() => r.value ? {
    x1: i.left + i.width,
    y1: 0,
    x2: i.left + i.width,
    y2: o.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: o.value,
    "stroke-width": 0
  }), f = v(() => r.value ? {
    x1: 0,
    y1: i.top + i.height,
    x2: n.value,
    y2: i.top + i.height
  } : {
    x1: 0,
    y1: 8,
    x2: i.width,
    y2: 8,
    "stroke-width": 0
  }), d = v(() => r.value ? {
    x1: i.left,
    y1: 0,
    x2: i.left,
    y2: o.value
  } : {
    x1: n.value,
    y1: 8,
    x2: n.value,
    y2: o.value,
    "stroke-width": 0
  });
  return { hoverElement: r, rectStyles: u, topLine: c, rightLine: a, bottomLine: f, leftLine: d };
}
function ke(t, n) {
  S(
    document.querySelector("body"),
    "click",
    (o) => {
      n.value = t.value, o.stopPropagation();
    },
    { capture: !0 }
  ), S(
    document.querySelector("body"),
    "mouseenter",
    (o) => {
      t.value && o.stopPropagation();
    },
    { capture: !0 }
  );
}
const be = ["viewBox"], Ee = /* @__PURE__ */ V({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(t, { emit: n }) {
    const o = t, e = n, { viewBox: l, styles: s } = ge(), { hoverElement: r, rectStyles: i, topLine: u, rightLine: c, bottomLine: a, leftLine: f } = xe(o.selectorConfig), { typeNameTagStyles: d, message: p } = we(
      o.selectorConfig,
      r
    ), g = y(null);
    return ke(r, g), A(r, (x) => {
      if (x) {
        const w = parseInt(x.getAttribute(o.selectorConfig.idAttr));
        e("hoverChange", { id: w });
        return;
      }
      e("hoverChange", { id: null });
    }), A(g, (x) => {
      if (x) {
        const w = parseInt(x.getAttribute(o.selectorConfig.idAttr));
        e("selectedChange", { id: w });
        return;
      }
      e("selectedChange", { id: null });
    }), (x, w) => (B(), M(te, null, [
      (B(), M("svg", {
        class: "vis-hover",
        viewBox: m(l),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: F([{ position: "absolute", top: "0", left: "0", "pointer-events": "none" }, m(s)])
      }, [
        k("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: F(m(i))
        }, null, 4),
        k("line", b({ class: "top" }, m(u), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        k("line", b({ class: "right" }, m(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        k("line", b({ class: "bottom" }, m(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        k("line", b({ class: "left" }, m(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, be)),
      k("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow z-9999 rounded p-1 bg-green-400",
        style: F(m(d))
      }, ne(m(p)), 5),
      oe(ye, { "selected-element": g.value }, null, 8, ["selected-element"])
    ], 64));
  }
});
export {
  Ee as default
};
const h = Vue.ref
const H = Vue.watch
const F = Vue.defineComponent
const m = Vue.computed
const L = Vue.openBlock
const O = Vue.createElementBlock
const $ = Vue.normalizeStyle
const b = Vue.createElementVNode
const ne = Vue.toDisplayString
const v = Vue.createVNode
const A = Vue.resolveComponent
const S = Vue.withCtx
const Z = Vue.createTextVNode
const _ = Vue.unref
const oe = Vue.isRef
const he = Vue.toRefs
const ve = Vue.customRef
const me = Vue.getCurrentScope
const ye = Vue.onScopeDispose
const le = Vue.getCurrentInstance
const Q = Vue.onMounted
const ge = Vue.nextTick
const xe = Vue.readonly
const _e = Vue.watchEffect
const re = Vue.reactive
const W = Vue.mergeProps
const j = Vue.renderSlot
const we = Vue.createBlock
const be = Vue.Teleport
function Pe(t) {
  function e() {
    switch (t) {
      case "up":
      case "bottom":
        return "ns-resize";
      default:
        return "ew-resize";
    }
  }
  function l() {
    switch (t) {
      case "left":
        return (o, n) => o.x - n.x;
      case "right":
        return (o, n) => n.x - o.x;
      case "up":
        return (o, n) => o.y - n.y;
      case "bottom":
        return (o, n) => n.y - o.y;
      default:
        throw new Error("");
    }
  }
  return {
    getCursorIcon: e,
    getMoveIncrementHandler: l
  };
}
function ke(t, e, l) {
  const o = l ?? h(0);
  return H(t, (n) => {
    if (!n)
      return;
    const r = Pe(e);
    n.style.cursor = r.getCursorIcon();
    const s = r.getMoveIncrementHandler(), i = {
      x: 0,
      y: 0
    }, c = (a) => {
      o.value += s(i, a), i.x = a.x, i.y = a.y;
    };
    n.addEventListener(
      "mousedown",
      (a) => {
        a.stopPropagation(), document.querySelector("body").style.cursor = n.style.cursor, i.x = a.x, i.y = a.y, document.addEventListener("mousemove", c);
      },
      { capture: !0 }
    ), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", c), document.querySelector("body").style.cursor = "default";
    });
  }), o;
}
let ie = null;
function $e(t) {
  ie = t;
}
function se(t) {
  ie(t);
}
function Ce(t) {
  return null;
}
const Ee = /* @__PURE__ */ F({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {}
  },
  setup(t) {
    const e = t, l = Ce(e.styleName) ?? { value: 0, unit: "px" }, o = h(l.value), n = h(l.unit), r = h(null), s = m(() => `${o.value}${n.value}`);
    H(s, (a) => {
      se([{ action: "style", commandType: "set", values: { [e.styleName]: a } }]);
    }), ke(r, e.direction, o);
    const i = {
      "clip-path": e.clipPath
    };
    function c() {
    }
    return (a, u) => (L(), O("div", {
      ref_key: "target",
      ref: r,
      class: "target",
      style: $([{ display: "flex", "justify-content": "center", "align-items": "center" }, i])
    }, [
      b("div", { onClick: c }, [
        b("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, ne(o.value), 513)
      ])
    ], 512));
  }
});
const Se = (t, e) => {
  const l = t.__vccOpts || t;
  for (const [o, n] of e)
    l[o] = n;
  return l;
}, T = /* @__PURE__ */ Se(Ee, [["__scopeId", "data-v-9e4eb37c"]]), ze = { class: "relative w-full h-full" }, We = /* @__PURE__ */ b("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin", -1), He = /* @__PURE__ */ F({
  __name: "Spacing",
  setup(t) {
    const e = {
      horizontalWidthPercent: 22,
      verticalHeightPercent: 22
    }, l = {
      left: {
        clipPath: `polygon(0 0, 100% ${e.verticalHeightPercent}%, 100% ${100 - e.verticalHeightPercent}%, 0% 100%)`
      },
      up: {
        clipPath: `polygon(0 0, 100% 0, ${100 - e.horizontalWidthPercent}% 100%, ${e.horizontalWidthPercent}% 100%)`
      },
      right: {
        clipPath: `polygon(0 ${e.verticalHeightPercent}%, 100% 0, 100% 100%,0 ${100 - e.verticalHeightPercent}%)`
      },
      bottom: {
        clipPath: `polygon(${e.horizontalWidthPercent}% 0, ${100 - e.horizontalWidthPercent}% 0, 100% 100% , 0 100%)`
      }
    }, o = {
      left: {
        clipPath: `polygon(0 ${e.verticalHeightPercent}%, 100% ${e.verticalHeightPercent * 2}%, 100% ${100 - e.verticalHeightPercent * 2}%, 0% ${100 - e.verticalHeightPercent}%)`
      },
      up: {
        clipPath: `polygon(${e.horizontalWidthPercent}% 0, ${100 - e.horizontalWidthPercent}% 0, ${100 - e.horizontalWidthPercent * 2}% 100%, ${e.horizontalWidthPercent * 2}% 100%)`
      },
      right: {
        clipPath: `polygon(0 ${e.verticalHeightPercent * 2}% , 100% ${e.verticalHeightPercent}% ,100% ${100 - e.verticalHeightPercent}%,0 ${100 - e.verticalHeightPercent * 2}%)`
      },
      bottom: {
        clipPath: `polygon(${e.horizontalWidthPercent * 2}% 0 ,${100 - e.horizontalWidthPercent * 2}% 0 ,${100 - e.horizontalWidthPercent}% 100%,${e.horizontalWidthPercent}% 100%)`
      }
    };
    return (n, r) => (L(), O("div", ze, [
      b("p", {
        class: "m-0 p-0 absolute pointer-events-none",
        style: $([{ top: `${e.verticalHeightPercent}%`, left: `${e.horizontalWidthPercent}%` }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
      }, " padding", 4),
      We,
      v(T, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "margin-left",
        "clip-path": l.left.clipPath,
        style: $([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "margin-top",
        "clip-path": l.up.clipPath,
        style: $([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute h-full right-0",
        direction: "right",
        "style-name": "margin-right",
        "clip-path": l.right.clipPath,
        style: $([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute bottom-0 w-full",
        direction: "bottom",
        "style-name": "margin-bottom",
        "clip-path": l.bottom.clipPath,
        style: $([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "padding-left",
        "clip-path": o.left.clipPath,
        style: $([{ left: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "padding-top",
        "clip-path": o.up.clipPath,
        style: $([{ top: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute h-full",
        direction: "right",
        "style-name": "padding-right",
        "clip-path": o.right.clipPath,
        style: $([{ right: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(T, {
        class: "absolute w-full",
        direction: "bottom",
        "style-name": "padding-bottom",
        "clip-path": o.bottom.clipPath,
        style: $([{ bottom: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"])
    ]));
  }
}), qe = { class: "row no-wrap items-center gap-2 px-3 py-2" }, Ae = /* @__PURE__ */ b("span", null, "display ", -1), Ie = /* @__PURE__ */ F({
  __name: "Layout",
  setup(t) {
    const e = h("block");
    return H(e, (l) => {
      se([{ action: "style", commandType: "set", values: { display: l } }]);
    }), (l, o) => {
      const n = A("q-tooltip"), r = A("q-icon"), s = A("q-btn-toggle");
      return L(), O("div", qe, [
        Ae,
        v(s, {
          size: "sm",
          padding: "4px",
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (i) => e.value = i),
          "toggle-color": "primary",
          options: [
            { value: "block", slot: "block" },
            { value: "flex", slot: "flex" }
          ]
        }, {
          block: S(() => [
            v(r, { name: "inbox" }, {
              default: S(() => [
                v(n, { style: { "z-index": "99999999" } }, {
                  default: S(() => [
                    Z(" block ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          flex: S(() => [
            v(r, { name: "inventory_2" }, {
              default: S(() => [
                v(n, { style: { "z-index": "99999999" } }, {
                  default: S(() => [
                    Z(" flex box ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Te = /* @__PURE__ */ F({
  __name: "MainPanel",
  setup(t) {
    const e = h("style");
    return (l, o) => {
      const n = A("q-tab"), r = A("q-tabs"), s = A("q-expansion-item"), i = A("q-separator"), c = A("q-list"), a = A("q-tab-panel"), u = A("q-tab-panels");
      return L(), O("div", null, [
        v(r, {
          class: "text-teal",
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (p) => e.value = p)
        }, {
          default: S(() => [
            v(n, {
              name: "style",
              label: "style"
            }),
            v(n, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        v(u, {
          modelValue: e.value,
          "onUpdate:modelValue": o[1] || (o[1] = (p) => e.value = p),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: S(() => [
            v(a, { name: "style" }, {
              default: S(() => [
                v(c, { bordered: "" }, {
                  default: S(() => [
                    v(s, {
                      "expand-separator": "",
                      label: "布局",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: S(() => [
                        v(Ie)
                      ]),
                      _: 1
                    }),
                    v(i),
                    v(s, {
                      "expand-separator": "",
                      label: "空间",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: S(() => [
                        v(He, { style: { width: "100%", height: "8rem" } })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
function B(t) {
  return me() ? (ye(t), !0) : !1;
}
function P(t) {
  return typeof t == "function" ? t() : _(t);
}
const Y = typeof window < "u" && typeof document < "u", Le = Object.prototype.toString, Ve = (t) => Le.call(t) === "[object Object]", Me = () => {
};
function Be(t, e = {}) {
  if (!oe(t))
    return he(t);
  const l = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const o in t.value)
    l[o] = ve(() => ({
      get() {
        return t.value[o];
      },
      set(n) {
        var r;
        if ((r = P(e.replaceRef)) != null ? r : !0)
          if (Array.isArray(t.value)) {
            const i = [...t.value];
            i[o] = n, t.value = i;
          } else {
            const i = { ...t.value, [o]: n };
            Object.setPrototypeOf(i, Object.getPrototypeOf(t.value)), t.value = i;
          }
        else
          t.value[o] = n;
      }
    }));
  return l;
}
function ce(t, e = !0) {
  le() ? Q(t) : e ? t() : ge(t);
}
function Fe(t, e = 1e3, l = {}) {
  const {
    immediate: o = !0,
    immediateCallback: n = !1
  } = l;
  let r = null;
  const s = h(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function c() {
    s.value = !1, i();
  }
  function a() {
    const u = P(e);
    u <= 0 || (s.value = !0, n && t(), i(), r = setInterval(t, u));
  }
  if (o && Y && a(), oe(e) || typeof e == "function") {
    const u = H(e, () => {
      s.value && Y && a();
    });
    B(u);
  }
  return B(c), {
    isActive: s,
    pause: c,
    resume: a
  };
}
function N(t) {
  var e;
  const l = P(t);
  return (e = l == null ? void 0 : l.$el) != null ? e : l;
}
const V = Y ? window : void 0, Oe = Y ? window.document : void 0;
function E(...t) {
  let e, l, o, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([l, o, n] = t, e = V) : [e, l, o, n] = t, !e)
    return Me;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((u) => u()), r.length = 0;
  }, i = (u, p, d, f) => (u.addEventListener(p, d, f), () => u.removeEventListener(p, d, f)), c = H(
    () => [N(e), P(n)],
    ([u, p]) => {
      if (s(), !u)
        return;
      const d = Ve(p) ? { ...p } : p;
      r.push(
        ...l.flatMap((f) => o.map((k) => i(u, f, k, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    c(), s();
  };
  return B(a), a;
}
function Ne() {
  const t = h(!1);
  return le() && Q(() => {
    t.value = !0;
  }), t;
}
function U(t) {
  const e = Ne();
  return m(() => (e.value, !!t()));
}
function De(t, e = {}) {
  const {
    immediate: l = !0,
    fpsLimit: o = void 0,
    window: n = V
  } = e, r = h(!1), s = o ? 1e3 / o : null;
  let i = 0, c = null;
  function a(d) {
    if (!r.value || !n)
      return;
    const f = d - (i || d);
    if (s && f < s) {
      c = n.requestAnimationFrame(a);
      return;
    }
    t({ delta: f, timestamp: d }), i = d, c = n.requestAnimationFrame(a);
  }
  function u() {
    !r.value && n && (r.value = !0, c = n.requestAnimationFrame(a));
  }
  function p() {
    r.value = !1, c != null && n && (n.cancelAnimationFrame(c), c = null);
  }
  return l && u(), B(p), {
    isActive: xe(r),
    pause: p,
    resume: u
  };
}
function Ye(t, e = {}) {
  const { window: l = V } = e, o = U(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let n;
  const r = h(!1), s = (a) => {
    r.value = a.matches;
  }, i = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, c = _e(() => {
    o.value && (i(), n = l.matchMedia(P(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), r.value = n.matches);
  });
  return B(() => {
    c(), i(), n = void 0;
  }), r;
}
function Xe(t, e, l = {}) {
  const { window: o = V, ...n } = l;
  let r;
  const s = U(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, c = H(
    () => N(t),
    (u) => {
      i(), s.value && o && u && (r = new MutationObserver(e), r.observe(u, n));
    },
    { immediate: !0 }
  ), a = () => {
    i(), c();
  };
  return B(a), {
    isSupported: s,
    stop: a
  };
}
function Ue(t, e = {}) {
  var l, o;
  const {
    pointerTypes: n,
    preventDefault: r,
    stopPropagation: s,
    exact: i,
    onMove: c,
    onEnd: a,
    onStart: u,
    initialValue: p,
    axis: d = "both",
    draggingElement: f = V,
    containerElement: k,
    handle: z = t
  } = e, y = h(
    (l = P(p)) != null ? l : { x: 0, y: 0 }
  ), w = h(), C = (x) => n ? n.includes(x.pointerType) : !0, q = (x) => {
    P(r) && x.preventDefault(), P(s) && x.stopPropagation();
  }, I = (x) => {
    var D;
    if (!C(x) || P(i) && x.target !== P(t))
      return;
    const J = ((D = P(k)) != null ? D : P(t)).getBoundingClientRect(), K = {
      x: x.clientX - J.left,
      y: x.clientY - J.top
    };
    (u == null ? void 0 : u(K, x)) !== !1 && (w.value = K, q(x));
  }, g = (x) => {
    if (!C(x) || !w.value)
      return;
    let { x: D, y: R } = y.value;
    (d === "x" || d === "both") && (D = x.clientX - w.value.x), (d === "y" || d === "both") && (R = x.clientY - w.value.y), y.value = {
      x: D,
      y: R
    }, c == null || c(y.value, x), q(x);
  }, M = (x) => {
    C(x) && w.value && (w.value = void 0, a == null || a(y.value, x), q(x));
  };
  if (Y) {
    const x = { capture: (o = e.capture) != null ? o : !0 };
    E(z, "pointerdown", I, x), E(f, "pointermove", g, x), E(f, "pointerup", M, x);
  }
  return {
    ...Be(y),
    position: y,
    isDragging: m(() => !!w.value),
    style: m(
      () => `left:${y.value.x}px;top:${y.value.y}px;`
    )
  };
}
function Re(t, e, l = {}) {
  const { window: o = V, ...n } = l;
  let r;
  const s = U(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, c = m(() => Array.isArray(t) ? t.map((p) => N(p)) : [N(t)]), a = H(
    c,
    (p) => {
      if (i(), s.value && o) {
        r = new ResizeObserver(e);
        for (const d of p)
          d && r.observe(d, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    i(), a();
  };
  return B(u), {
    isSupported: s,
    stop: u
  };
}
function ae(t, e = {}) {
  const {
    reset: l = !0,
    windowResize: o = !0,
    windowScroll: n = !0,
    immediate: r = !0
  } = e, s = h(0), i = h(0), c = h(0), a = h(0), u = h(0), p = h(0), d = h(0), f = h(0);
  function k() {
    const z = N(t);
    if (!z) {
      l && (s.value = 0, i.value = 0, c.value = 0, a.value = 0, u.value = 0, p.value = 0, d.value = 0, f.value = 0);
      return;
    }
    const y = z.getBoundingClientRect();
    s.value = y.height, i.value = y.bottom, c.value = y.left, a.value = y.right, u.value = y.top, p.value = y.width, d.value = y.x, f.value = y.y;
  }
  return Re(t, k), H(() => N(t), (z) => !z && k()), n && E("scroll", k, { capture: !0, passive: !0 }), o && E("resize", k, { passive: !0 }), ce(() => {
    r && k();
  }), {
    height: s,
    bottom: i,
    left: c,
    right: a,
    top: u,
    width: p,
    x: d,
    y: f,
    update: k
  };
}
function Qe(t) {
  const {
    x: e,
    y: l,
    document: o = Oe,
    multiple: n,
    interval: r = "requestAnimationFrame",
    immediate: s = !0
  } = t, i = U(() => P(n) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), c = h(null), a = () => {
    var p, d;
    c.value = P(n) ? (p = o == null ? void 0 : o.elementsFromPoint(P(e), P(l))) != null ? p : [] : (d = o == null ? void 0 : o.elementFromPoint(P(e), P(l))) != null ? d : null;
  }, u = r === "requestAnimationFrame" ? De(a, { immediate: s }) : Fe(a, r, { immediate: s });
  return {
    isSupported: i,
    element: c,
    ...u
  };
}
const Ge = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function ue(t = {}) {
  const {
    type: e = "page",
    touch: l = !0,
    resetOnTouchEnds: o = !1,
    initialValue: n = { x: 0, y: 0 },
    window: r = V,
    target: s = r,
    scroll: i = !0,
    eventFilter: c
  } = t;
  let a = null;
  const u = h(n.x), p = h(n.y), d = h(null), f = typeof e == "function" ? e : Ge[e], k = (g) => {
    const M = f(g);
    a = g, M && ([u.value, p.value] = M, d.value = "mouse");
  }, z = (g) => {
    if (g.touches.length > 0) {
      const M = f(g.touches[0]);
      M && ([u.value, p.value] = M, d.value = "touch");
    }
  }, y = () => {
    if (!a || !r)
      return;
    const g = f(a);
    a instanceof MouseEvent && g && (u.value = g[0] + r.scrollX, p.value = g[1] + r.scrollY);
  }, w = () => {
    u.value = n.x, p.value = n.y;
  }, C = c ? (g) => c(() => k(g), {}) : (g) => k(g), q = c ? (g) => c(() => z(g), {}) : (g) => z(g), I = c ? () => c(() => y(), {}) : () => y();
  if (s) {
    const g = { passive: !0 };
    E(s, ["mousemove", "dragover"], C, g), l && e !== "movement" && (E(s, ["touchstart", "touchmove"], q, g), o && E(s, "touchend", w, g)), i && e === "page" && E(r, "scroll", I, { passive: !0 });
  }
  return {
    x: u,
    y: p,
    sourceType: d
  };
}
function G(t = {}) {
  const {
    window: e = V,
    initialWidth: l = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: r = !0
  } = t, s = h(l), i = h(o), c = () => {
    e && (r ? (s.value = e.innerWidth, i.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, i.value = e.document.documentElement.clientHeight));
  };
  if (c(), ce(c), E("resize", c, { passive: !0 }), n) {
    const a = Ye("(orientation: portrait)");
    H(a, () => c());
  }
  return { width: s, height: i };
}
function pe() {
  const { width: t, height: e } = G(), l = m(() => `0 0 ${t.value} ${e.value}`), o = m(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: l,
    styles: o
  };
}
function de(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function fe(t, e) {
  if (!de(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.elementTypeAttr))
      return l.slice(e.elementTypeAttr.length + 1);
  return null;
}
function X(t, e) {
  if (!de(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.idAttr))
      return parseInt(l.slice(e.idAttr.length + 1));
  return null;
}
function Je(t, e) {
  const l = m(() => t.value ? t.value : null), o = pe(), n = re(ae(t));
  Xe(
    l,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), E("scroll", n.update, !0);
  const r = m(() => l.value ? {
    display: "block",
    width: n.width,
    height: n.height,
    x: n.left,
    y: n.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), s = m(() => l.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), i = m(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), c = m(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), a = m(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), u = m(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), p = m(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = m(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), f = m(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: o,
    rectStyles: r,
    p1: s,
    p2: i,
    p3: c,
    p4: a,
    p5: u,
    p6: p,
    p7: d,
    p8: f
  };
}
const Ke = ["viewBox"], Ze = /* @__PURE__ */ F({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, l = m(() => e.selectedElement), {
      svgConfig: { viewBox: o, styles: n },
      rectStyles: r,
      p1: s,
      p2: i,
      p3: c,
      p4: a,
      p5: u,
      p6: p,
      p7: d,
      p8: f
    } = Je(l, e.selectorConfig);
    return (k, z) => (L(), O("svg", {
      class: "vis-aiming",
      viewBox: _(o),
      version: "1.1",
      style: $([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, _(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      b("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: $(_(r))
      }, null, 4),
      b("circle", W({
        stroke: "hotpink",
        fill: "white"
      }, _(s), { r: "2" }), null, 16),
      b("circle", W({ fill: "hotpink" }, _(i), { r: "2" }), null, 16),
      b("circle", W({
        stroke: "hotpink",
        fill: "white"
      }, _(c), { r: "2" }), null, 16),
      b("circle", W({ fill: "hotpink" }, _(a), { r: "2" }), null, 16),
      b("circle", W({
        stroke: "hotpink",
        fill: "white"
      }, _(u), { r: "2" }), null, 16),
      b("circle", W({ fill: "hotpink" }, _(p), { r: "2" }), null, 16),
      b("circle", W({
        stroke: "hotpink",
        fill: "white"
      }, _(d), { r: "2" }), null, 16),
      b("circle", W({ fill: "hotpink" }, _(f), { r: "2" }), null, 16)
    ], 12, Ke));
  }
}), je = /* @__PURE__ */ F({
  __name: "Panel",
  setup(t) {
    const e = h(null), { style: l } = Ue(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (o, n) => (L(), O("div", {
      style: $([_(l), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      b("div", {
        ref_key: "el",
        ref: e,
        class: "cursor-move",
        style: { "background-color": "aqua", width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
      }, [
        j(o.$slots, "title")
      ], 512),
      j(o.$slots, "default")
    ], 4));
  }
}), et = pe;
function tt(t, e) {
  const { width: l } = G(), { x: o, y: n } = ue({ type: "client" }), r = m(() => {
    let c = o.value, a = n.value;
    return l.value - o.value < 10 && (c -= 10), n.value < 10 && (a += 10), { x: c, y: a };
  }), s = m(() => e.value ? {
    display: "block",
    left: `${r.value.x}px`,
    top: `${r.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: m(() => e.value ? fe(e.value, t) : null),
    typeNameTagStyles: s
  };
}
function nt(t) {
  const { width: e, height: l } = G(), { x: o, y: n } = ue({ type: "client" }), { element: r } = Qe({ x: o, y: n }), s = m(() => {
    if (r.value === null)
      return null;
    const f = r.value.closest(t.selectors);
    return f === null || f.closest("[layout-tool-panel]") ? null : f;
  }), i = re(ae(s));
  E("scroll", i.update, !0);
  const c = m(() => s.value ? {
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
  }), a = m(() => s.value ? {
    x1: 0,
    y1: i.top,
    x2: e.value,
    y2: i.top
  } : {
    x1: 0,
    y1: 8,
    x2: i.width,
    y2: 8,
    "stroke-width": 0
  }), u = m(() => s.value ? {
    x1: i.left + i.width,
    y1: 0,
    x2: i.left + i.width,
    y2: l.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: l.value,
    "stroke-width": 0
  }), p = m(() => s.value ? {
    x1: 0,
    y1: i.top + i.height,
    x2: e.value,
    y2: i.top + i.height
  } : {
    x1: 0,
    y1: 8,
    x2: i.width,
    y2: 8,
    "stroke-width": 0
  }), d = m(() => s.value ? {
    x1: i.left,
    y1: 0,
    x2: i.left,
    y2: l.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: l.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: c, topLine: a, rightLine: u, bottomLine: p, leftLine: d };
}
function ot(t) {
  return !!t.closest(".q-color-picker");
}
function lt(t, e) {
  E(
    document.querySelector("body"),
    "click",
    (l) => {
      const o = l.target;
      o.closest("[layout-tool-panel]") || ot(o) || (e.value = t.value, l.stopPropagation());
    },
    { capture: !0 }
  ), E(
    document.querySelector("body"),
    "mouseenter",
    (l) => {
      t.value && l.stopPropagation();
    },
    { capture: !0 }
  );
}
function rt(t, e) {
  let l = t.parentElement.closest(`${e.selectors}`);
  for (; l !== null; ) {
    if (window.getComputedStyle(l, null).getPropertyValue("display") === "flex")
      return { id: X(l, e), dom: l };
    l = l.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const it = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function ee(t, e) {
  if (!it.has(fe(t, e)))
    return {
      isFlex: !1,
      direction: null
    };
  const l = window.getComputedStyle(t, null), o = l.getPropertyValue("display") === "flex";
  let n = null;
  return o && (n = l.getPropertyValue("flex-direction")), {
    isFlex: o,
    direction: n
  };
}
function te(t, e) {
  const l = `.${e.idAttr}-${t}`;
  return document.querySelector(l);
}
function st(t, e) {
  function l(n, r) {
    return window.getComputedStyle(te(n, t), null).getPropertyValue(r);
  }
  function o(n) {
    const r = te(n, t);
    e.value = r;
  }
  return { queryStyle: l, selectTarget: o };
}
function ct(t) {
  var e = document.createElement("link");
  e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.setAttribute("type", "text/css"), document.head.appendChild(e);
}
const at = ["viewBox"], pt = /* @__PURE__ */ F({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: l }) {
    const o = t, n = l;
    function r(w) {
      const C = y.value;
      if (!C)
        throw new Error("No components are selected");
      const q = X(C, o.selectorConfig);
      if (!q)
        throw new Error("not found selected element");
      n("command", { id: q, options: w }), console.log("emitCommnad:", w);
    }
    $e(r), Q(() => {
      ct(o.styleUrl);
    });
    const { viewBox: s, styles: i } = et(), { hoverElement: c, rectStyles: a, topLine: u, rightLine: p, bottomLine: d, leftLine: f } = nt(o.selectorConfig), { typeNameTagStyles: k, typeName: z } = tt(
      o.selectorConfig,
      c
    ), y = h(null);
    return lt(c, y), H(c, (w) => {
      if (w) {
        const C = X(w, o.selectorConfig);
        n("hoverChange", { id: C });
        return;
      }
      n("hoverChange", { id: null });
    }), H(y, (w) => {
      const C = {
        isFlex: !1,
        direction: null
      };
      if (w) {
        const q = X(w, o.selectorConfig), I = rt(w, o.selectorConfig);
        let g = {
          isFlex: !1,
          direction: null
        };
        I && (g = ee(I.dom, o.selectorConfig)), n("selectedChange", {
          id: q,
          parentBoxId: I !== null ? I.id : null,
          flexInfo: ee(w, o.selectorConfig),
          parentFlexInfo: g
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: C,
        parentFlexInfo: C
      });
    }), e(st(o.selectorConfig, y)), (w, C) => (L(), we(be, { to: "body" }, [
      (L(), O("svg", {
        class: "vis-hover",
        viewBox: _(s),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: $([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, _(i)])
      }, [
        b("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: $(_(a))
        }, null, 4),
        b("line", W({ class: "top" }, _(u), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", W({ class: "right" }, _(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", W({ class: "bottom" }, _(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", W({ class: "left" }, _(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, at)),
      v(Ze, {
        "selected-element": y.value,
        selectorConfig: o.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      v(je, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "300px" }
      }, {
        default: S(() => [
          v(Te)
        ]),
        _: 1
      }),
      b("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: $([_(k), { "z-index": "9999999" }])
      }, ne(_(z)), 5)
    ]));
  }
});
export {
  pt as default
};
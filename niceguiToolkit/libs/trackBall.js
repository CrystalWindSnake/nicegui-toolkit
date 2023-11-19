const h = Vue.ref
const H = Vue.watch
const F = Vue.defineComponent
const m = Vue.computed
const T = Vue.openBlock
const O = Vue.createElementBlock
const $ = Vue.normalizeStyle
const b = Vue.createElementVNode
const te = Vue.toDisplayString
const v = Vue.createVNode
const q = Vue.resolveComponent
const S = Vue.withCtx
const K = Vue.createTextVNode
const _ = Vue.unref
const ne = Vue.isRef
const he = Vue.toRefs
const ve = Vue.customRef
const me = Vue.getCurrentScope
const ye = Vue.onScopeDispose
const oe = Vue.getCurrentInstance
const le = Vue.onMounted
const ge = Vue.nextTick
const xe = Vue.readonly
const _e = Vue.watchEffect
const re = Vue.reactive
const z = Vue.mergeProps
const Z = Vue.renderSlot
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
  function o() {
    switch (t) {
      case "left":
        return (l, n) => l.x - n.x;
      case "right":
        return (l, n) => n.x - l.x;
      case "up":
        return (l, n) => l.y - n.y;
      case "bottom":
        return (l, n) => n.y - l.y;
      default:
        throw new Error("");
    }
  }
  return {
    getCursorIcon: e,
    getMoveIncrementHandler: o
  };
}
function ke(t, e, o) {
  const l = o ?? h(0);
  return H(t, (n) => {
    if (!n)
      return;
    const r = Pe(e);
    n.style.cursor = r.getCursorIcon();
    const s = r.getMoveIncrementHandler(), i = {
      x: 0,
      y: 0
    }, c = (u) => {
      l.value += s(i, u), i.x = u.x, i.y = u.y;
    };
    n.addEventListener(
      "mousedown",
      (u) => {
        u.stopPropagation(), document.querySelector("body").style.cursor = n.style.cursor, i.x = u.x, i.y = u.y, document.addEventListener("mousemove", c);
      },
      { capture: !0 }
    ), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", c), document.querySelector("body").style.cursor = "default";
    });
  }), l;
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
const Se = /* @__PURE__ */ F({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {}
  },
  setup(t) {
    const e = t, o = Ce(e.styleName) ?? { value: 0, unit: "px" }, l = h(o.value), n = h(o.unit), r = h(null), s = m(() => `${l.value}${n.value}`);
    H(s, (u) => {
      se([{ action: "style", commandType: "set", values: { [e.styleName]: u } }]);
    }), ke(r, e.direction, l);
    const i = {
      "clip-path": e.clipPath
    };
    function c() {
    }
    return (u, a) => (T(), O("div", {
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
        }, te(l.value), 513)
      ])
    ], 512));
  }
});
const Ee = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, n] of e)
    o[l] = n;
  return o;
}, A = /* @__PURE__ */ Ee(Se, [["__scopeId", "data-v-9e4eb37c"]]), ze = { class: "relative w-full h-full" }, We = /* @__PURE__ */ b("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin", -1), He = /* @__PURE__ */ F({
  __name: "Spacing",
  setup(t) {
    const e = {
      horizontalWidthPercent: 22,
      verticalHeightPercent: 22
    }, o = {
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
    }, l = {
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
    return (n, r) => (T(), O("div", ze, [
      b("p", {
        class: "m-0 p-0 absolute pointer-events-none",
        style: $([{ top: `${e.verticalHeightPercent}%`, left: `${e.horizontalWidthPercent}%` }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
      }, " padding", 4),
      We,
      v(A, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "margin-left",
        "clip-path": o.left.clipPath,
        style: $([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "margin-top",
        "clip-path": o.up.clipPath,
        style: $([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute h-full right-0",
        direction: "right",
        "style-name": "margin-right",
        "clip-path": o.right.clipPath,
        style: $([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute bottom-0 w-full",
        direction: "bottom",
        "style-name": "margin-bottom",
        "clip-path": o.bottom.clipPath,
        style: $([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "padding-left",
        "clip-path": l.left.clipPath,
        style: $([{ left: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "padding-top",
        "clip-path": l.up.clipPath,
        style: $([{ top: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute h-full",
        direction: "right",
        "style-name": "padding-right",
        "clip-path": l.right.clipPath,
        style: $([{ right: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      v(A, {
        class: "absolute w-full",
        direction: "bottom",
        "style-name": "padding-bottom",
        "clip-path": l.bottom.clipPath,
        style: $([{ bottom: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"])
    ]));
  }
}), qe = { class: "row no-wrap items-center gap-2 px-3 py-2" }, Ie = /* @__PURE__ */ b("span", null, "display ", -1), Ae = /* @__PURE__ */ F({
  __name: "Layout",
  setup(t) {
    const e = h("block");
    return H(e, (o) => {
      se([{ action: "style", commandType: "set", values: { display: o } }]);
    }), (o, l) => {
      const n = q("q-tooltip"), r = q("q-icon"), s = q("q-btn-toggle");
      return T(), O("div", qe, [
        Ie,
        v(s, {
          size: "sm",
          padding: "4px",
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (i) => e.value = i),
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
                    K(" block ")
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
                    K(" flex box ")
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
    return (o, l) => {
      const n = q("q-tab"), r = q("q-tabs"), s = q("q-expansion-item"), i = q("q-separator"), c = q("q-list"), u = q("q-tab-panel"), a = q("q-tab-panels");
      return T(), O("div", null, [
        v(r, {
          class: "text-teal",
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (p) => e.value = p)
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
        v(a, {
          modelValue: e.value,
          "onUpdate:modelValue": l[1] || (l[1] = (p) => e.value = p),
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: S(() => [
            v(u, { name: "style" }, {
              default: S(() => [
                v(c, { bordered: "" }, {
                  default: S(() => [
                    v(s, {
                      label: "布局",
                      "header-class": "text-primary"
                    }, {
                      default: S(() => [
                        v(Ae)
                      ]),
                      _: 1
                    }),
                    v(i),
                    v(s, {
                      label: "空间",
                      "header-class": "text-primary"
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
const Y = typeof window < "u" && typeof document < "u", Ve = Object.prototype.toString, Le = (t) => Ve.call(t) === "[object Object]", Me = () => {
};
function Be(t, e = {}) {
  if (!ne(t))
    return he(t);
  const o = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const l in t.value)
    o[l] = ve(() => ({
      get() {
        return t.value[l];
      },
      set(n) {
        var r;
        if ((r = P(e.replaceRef)) != null ? r : !0)
          if (Array.isArray(t.value)) {
            const i = [...t.value];
            i[l] = n, t.value = i;
          } else {
            const i = { ...t.value, [l]: n };
            Object.setPrototypeOf(i, Object.getPrototypeOf(t.value)), t.value = i;
          }
        else
          t.value[l] = n;
      }
    }));
  return o;
}
function ce(t, e = !0) {
  oe() ? le(t) : e ? t() : ge(t);
}
function Fe(t, e = 1e3, o = {}) {
  const {
    immediate: l = !0,
    immediateCallback: n = !1
  } = o;
  let r = null;
  const s = h(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function c() {
    s.value = !1, i();
  }
  function u() {
    const a = P(e);
    a <= 0 || (s.value = !0, n && t(), i(), r = setInterval(t, a));
  }
  if (l && Y && u(), ne(e) || typeof e == "function") {
    const a = H(e, () => {
      s.value && Y && u();
    });
    B(a);
  }
  return B(c), {
    isActive: s,
    pause: c,
    resume: u
  };
}
function N(t) {
  var e;
  const o = P(t);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
const V = Y ? window : void 0, Oe = Y ? window.document : void 0;
function C(...t) {
  let e, o, l, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, l, n] = t, e = V) : [e, o, l, n] = t, !e)
    return Me;
  Array.isArray(o) || (o = [o]), Array.isArray(l) || (l = [l]);
  const r = [], s = () => {
    r.forEach((a) => a()), r.length = 0;
  }, i = (a, p, d, f) => (a.addEventListener(p, d, f), () => a.removeEventListener(p, d, f)), c = H(
    () => [N(e), P(n)],
    ([a, p]) => {
      if (s(), !a)
        return;
      const d = Le(p) ? { ...p } : p;
      r.push(
        ...o.flatMap((f) => l.map((k) => i(a, f, k, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), s();
  };
  return B(u), u;
}
function Ne() {
  const t = h(!1);
  return oe() && le(() => {
    t.value = !0;
  }), t;
}
function X(t) {
  const e = Ne();
  return m(() => (e.value, !!t()));
}
function De(t, e = {}) {
  const {
    immediate: o = !0,
    fpsLimit: l = void 0,
    window: n = V
  } = e, r = h(!1), s = l ? 1e3 / l : null;
  let i = 0, c = null;
  function u(d) {
    if (!r.value || !n)
      return;
    const f = d - (i || d);
    if (s && f < s) {
      c = n.requestAnimationFrame(u);
      return;
    }
    t({ delta: f, timestamp: d }), i = d, c = n.requestAnimationFrame(u);
  }
  function a() {
    !r.value && n && (r.value = !0, c = n.requestAnimationFrame(u));
  }
  function p() {
    r.value = !1, c != null && n && (n.cancelAnimationFrame(c), c = null);
  }
  return o && a(), B(p), {
    isActive: xe(r),
    pause: p,
    resume: a
  };
}
function Ye(t, e = {}) {
  const { window: o = V } = e, l = X(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let n;
  const r = h(!1), s = (u) => {
    r.value = u.matches;
  }, i = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, c = _e(() => {
    l.value && (i(), n = o.matchMedia(P(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), r.value = n.matches);
  });
  return B(() => {
    c(), i(), n = void 0;
  }), r;
}
function Xe(t, e, o = {}) {
  const { window: l = V, ...n } = o;
  let r;
  const s = X(() => l && "MutationObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, c = H(
    () => N(t),
    (a) => {
      i(), s.value && l && a && (r = new MutationObserver(e), r.observe(a, n));
    },
    { immediate: !0 }
  ), u = () => {
    i(), c();
  };
  return B(u), {
    isSupported: s,
    stop: u
  };
}
function Re(t, e = {}) {
  var o, l;
  const {
    pointerTypes: n,
    preventDefault: r,
    stopPropagation: s,
    exact: i,
    onMove: c,
    onEnd: u,
    onStart: a,
    initialValue: p,
    axis: d = "both",
    draggingElement: f = V,
    containerElement: k,
    handle: E = t
  } = e, g = h(
    (o = P(p)) != null ? o : { x: 0, y: 0 }
  ), w = h(), W = (x) => n ? n.includes(x.pointerType) : !0, L = (x) => {
    P(r) && x.preventDefault(), P(s) && x.stopPropagation();
  }, I = (x) => {
    var D;
    if (!W(x) || P(i) && x.target !== P(t))
      return;
    const G = ((D = P(k)) != null ? D : P(t)).getBoundingClientRect(), J = {
      x: x.clientX - G.left,
      y: x.clientY - G.top
    };
    (a == null ? void 0 : a(J, x)) !== !1 && (w.value = J, L(x));
  }, y = (x) => {
    if (!W(x) || !w.value)
      return;
    let { x: D, y: R } = g.value;
    (d === "x" || d === "both") && (D = x.clientX - w.value.x), (d === "y" || d === "both") && (R = x.clientY - w.value.y), g.value = {
      x: D,
      y: R
    }, c == null || c(g.value, x), L(x);
  }, M = (x) => {
    W(x) && w.value && (w.value = void 0, u == null || u(g.value, x), L(x));
  };
  if (Y) {
    const x = { capture: (l = e.capture) != null ? l : !0 };
    C(E, "pointerdown", I, x), C(f, "pointermove", y, x), C(f, "pointerup", M, x);
  }
  return {
    ...Be(g),
    position: g,
    isDragging: m(() => !!w.value),
    style: m(
      () => `left:${g.value.x}px;top:${g.value.y}px;`
    )
  };
}
function Ue(t, e, o = {}) {
  const { window: l = V, ...n } = o;
  let r;
  const s = X(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, c = m(() => Array.isArray(t) ? t.map((p) => N(p)) : [N(t)]), u = H(
    c,
    (p) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(e);
        for (const d of p)
          d && r.observe(d, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), a = () => {
    i(), u();
  };
  return B(a), {
    isSupported: s,
    stop: a
  };
}
function ue(t, e = {}) {
  const {
    reset: o = !0,
    windowResize: l = !0,
    windowScroll: n = !0,
    immediate: r = !0
  } = e, s = h(0), i = h(0), c = h(0), u = h(0), a = h(0), p = h(0), d = h(0), f = h(0);
  function k() {
    const E = N(t);
    if (!E) {
      o && (s.value = 0, i.value = 0, c.value = 0, u.value = 0, a.value = 0, p.value = 0, d.value = 0, f.value = 0);
      return;
    }
    const g = E.getBoundingClientRect();
    s.value = g.height, i.value = g.bottom, c.value = g.left, u.value = g.right, a.value = g.top, p.value = g.width, d.value = g.x, f.value = g.y;
  }
  return Ue(t, k), H(() => N(t), (E) => !E && k()), n && C("scroll", k, { capture: !0, passive: !0 }), l && C("resize", k, { passive: !0 }), ce(() => {
    r && k();
  }), {
    height: s,
    bottom: i,
    left: c,
    right: u,
    top: a,
    width: p,
    x: d,
    y: f,
    update: k
  };
}
function Qe(t) {
  const {
    x: e,
    y: o,
    document: l = Oe,
    multiple: n,
    interval: r = "requestAnimationFrame",
    immediate: s = !0
  } = t, i = X(() => P(n) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), c = h(null), u = () => {
    var p, d;
    c.value = P(n) ? (p = l == null ? void 0 : l.elementsFromPoint(P(e), P(o))) != null ? p : [] : (d = l == null ? void 0 : l.elementFromPoint(P(e), P(o))) != null ? d : null;
  }, a = r === "requestAnimationFrame" ? De(u, { immediate: s }) : Fe(u, r, { immediate: s });
  return {
    isSupported: i,
    element: c,
    ...a
  };
}
const Ge = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function ae(t = {}) {
  const {
    type: e = "page",
    touch: o = !0,
    resetOnTouchEnds: l = !1,
    initialValue: n = { x: 0, y: 0 },
    window: r = V,
    target: s = r,
    scroll: i = !0,
    eventFilter: c
  } = t;
  let u = null;
  const a = h(n.x), p = h(n.y), d = h(null), f = typeof e == "function" ? e : Ge[e], k = (y) => {
    const M = f(y);
    u = y, M && ([a.value, p.value] = M, d.value = "mouse");
  }, E = (y) => {
    if (y.touches.length > 0) {
      const M = f(y.touches[0]);
      M && ([a.value, p.value] = M, d.value = "touch");
    }
  }, g = () => {
    if (!u || !r)
      return;
    const y = f(u);
    u instanceof MouseEvent && y && (a.value = y[0] + r.scrollX, p.value = y[1] + r.scrollY);
  }, w = () => {
    a.value = n.x, p.value = n.y;
  }, W = c ? (y) => c(() => k(y), {}) : (y) => k(y), L = c ? (y) => c(() => E(y), {}) : (y) => E(y), I = c ? () => c(() => g(), {}) : () => g();
  if (s) {
    const y = { passive: !0 };
    C(s, ["mousemove", "dragover"], W, y), o && e !== "movement" && (C(s, ["touchstart", "touchmove"], L, y), l && C(s, "touchend", w, y)), i && e === "page" && C(r, "scroll", I, { passive: !0 });
  }
  return {
    x: a,
    y: p,
    sourceType: d
  };
}
function Q(t = {}) {
  const {
    window: e = V,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: r = !0
  } = t, s = h(o), i = h(l), c = () => {
    e && (r ? (s.value = e.innerWidth, i.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, i.value = e.document.documentElement.clientHeight));
  };
  if (c(), ce(c), C("resize", c, { passive: !0 }), n) {
    const u = Ye("(orientation: portrait)");
    H(u, () => c());
  }
  return { width: s, height: i };
}
function pe() {
  const { width: t, height: e } = Q(), o = m(() => `0 0 ${t.value} ${e.value}`), l = m(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: o,
    styles: l
  };
}
function de(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function fe(t, e) {
  if (!de(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.elementTypeAttr))
      return o.slice(e.elementTypeAttr.length + 1);
  return null;
}
function U(t, e) {
  if (!de(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.idAttr))
      return parseInt(o.slice(e.idAttr.length + 1));
  return null;
}
function Je(t, e) {
  const o = m(() => t.value ? t.value : null), l = pe(), n = re(ue(t));
  Xe(
    o,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), C("scroll", n.update, !0);
  const r = m(() => o.value ? {
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
  }), s = m(() => o.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), i = m(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), c = m(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), u = m(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), a = m(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), p = m(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = m(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), f = m(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: l,
    rectStyles: r,
    p1: s,
    p2: i,
    p3: c,
    p4: u,
    p5: a,
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
    const e = t, o = m(() => e.selectedElement), {
      svgConfig: { viewBox: l, styles: n },
      rectStyles: r,
      p1: s,
      p2: i,
      p3: c,
      p4: u,
      p5: a,
      p6: p,
      p7: d,
      p8: f
    } = Je(o, e.selectorConfig);
    return (k, E) => (T(), O("svg", {
      class: "vis-aiming",
      viewBox: _(l),
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
      b("circle", z({
        stroke: "hotpink",
        fill: "white"
      }, _(s), { r: "2" }), null, 16),
      b("circle", z({ fill: "hotpink" }, _(i), { r: "2" }), null, 16),
      b("circle", z({
        stroke: "hotpink",
        fill: "white"
      }, _(c), { r: "2" }), null, 16),
      b("circle", z({ fill: "hotpink" }, _(u), { r: "2" }), null, 16),
      b("circle", z({
        stroke: "hotpink",
        fill: "white"
      }, _(a), { r: "2" }), null, 16),
      b("circle", z({ fill: "hotpink" }, _(p), { r: "2" }), null, 16),
      b("circle", z({
        stroke: "hotpink",
        fill: "white"
      }, _(d), { r: "2" }), null, 16),
      b("circle", z({ fill: "hotpink" }, _(f), { r: "2" }), null, 16)
    ], 12, Ke));
  }
}), je = /* @__PURE__ */ F({
  __name: "Panel",
  setup(t) {
    const e = h(null), { style: o } = Re(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (l, n) => (T(), O("div", {
      style: $([_(o), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      b("div", {
        ref_key: "el",
        ref: e,
        class: "cursor-move",
        style: { "background-color": "aqua", width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
      }, [
        Z(l.$slots, "title")
      ], 512),
      Z(l.$slots, "default")
    ], 4));
  }
}), et = pe;
function tt(t, e) {
  const { width: o } = Q(), { x: l, y: n } = ae({ type: "client" }), r = m(() => {
    let c = l.value, u = n.value;
    return o.value - l.value < 10 && (c -= 10), n.value < 10 && (u += 10), { x: c, y: u };
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
  const { width: e, height: o } = Q(), { x: l, y: n } = ae({ type: "client" }), { element: r } = Qe({ x: l, y: n }), s = m(() => {
    if (r.value === null)
      return null;
    const f = r.value.closest(t.selectors);
    return f === null || f.closest("[layout-tool-panel]") ? null : f;
  }), i = re(ue(s));
  C("scroll", i.update, !0);
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
  }), u = m(() => s.value ? {
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
  }), a = m(() => s.value ? {
    x1: i.left + i.width,
    y1: 0,
    x2: i.left + i.width,
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
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
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: c, topLine: u, rightLine: a, bottomLine: p, leftLine: d };
}
function ot(t) {
  return !!t.closest(".q-color-picker");
}
function lt(t, e) {
  C(
    document.querySelector("body"),
    "click",
    (o) => {
      const l = o.target;
      l.closest("[layout-tool-panel]") || ot(l) || (e.value = t.value, o.stopPropagation());
    },
    { capture: !0 }
  ), C(
    document.querySelector("body"),
    "mouseenter",
    (o) => {
      t.value && o.stopPropagation();
    },
    { capture: !0 }
  );
}
function rt(t, e) {
  let o = t.parentElement.closest(`${e.selectors}`);
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: U(o, e), dom: o };
    o = o.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const it = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function j(t, e) {
  if (!it.has(fe(t, e)))
    return {
      isFlex: !1,
      direction: null
    };
  const o = window.getComputedStyle(t, null), l = o.getPropertyValue("display") === "flex";
  let n = null;
  return l && (n = o.getPropertyValue("flex-direction")), {
    isFlex: l,
    direction: n
  };
}
function ee(t, e) {
  const o = `.${e.idAttr}-${t}`;
  return document.querySelector(o);
}
function st(t, e) {
  function o(n, r) {
    return window.getComputedStyle(ee(n, t), null).getPropertyValue(r);
  }
  function l(n) {
    const r = ee(n, t);
    e.value = r;
  }
  return { queryStyle: o, selectTarget: l };
}
const ct = ["viewBox"], at = /* @__PURE__ */ F({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: o }) {
    const l = t, n = o;
    function r(w) {
      n("command", { id: 1, options: w }), console.log("emitCommnad:", w);
    }
    $e(r);
    const { viewBox: s, styles: i } = et(), { hoverElement: c, rectStyles: u, topLine: a, rightLine: p, bottomLine: d, leftLine: f } = nt(l.selectorConfig), { typeNameTagStyles: k, typeName: E } = tt(
      l.selectorConfig,
      c
    ), g = h(null);
    return lt(c, g), H(c, (w) => {
      if (w) {
        const W = U(w, l.selectorConfig);
        n("hoverChange", { id: W });
        return;
      }
      n("hoverChange", { id: null });
    }), H(g, (w) => {
      const W = {
        isFlex: !1,
        direction: null
      };
      if (w) {
        const L = U(w, l.selectorConfig), I = rt(w, l.selectorConfig);
        let y = {
          isFlex: !1,
          direction: null
        };
        I && (y = j(I.dom, l.selectorConfig)), n("selectedChange", {
          id: L,
          parentBoxId: I !== null ? I.id : null,
          flexInfo: j(w, l.selectorConfig),
          parentFlexInfo: y
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: W,
        parentFlexInfo: W
      });
    }), e(st(l.selectorConfig, g)), (w, W) => (T(), we(be, { to: "body" }, [
      (T(), O("svg", {
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
          style: $(_(u))
        }, null, 4),
        b("line", z({ class: "top" }, _(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", z({ class: "right" }, _(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", z({ class: "bottom" }, _(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", z({ class: "left" }, _(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, ct)),
      v(Ze, {
        "selected-element": g.value,
        selectorConfig: l.selectorConfig,
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
      }, te(_(E)), 5)
    ]));
  }
});
export {
  at as default
};
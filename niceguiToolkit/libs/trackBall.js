const h = Vue.ref
const H = Vue.watch
const M = Vue.defineComponent
const A = Vue.openBlock
const F = Vue.createElementBlock
const k = Vue.normalizeStyle
const b = Vue.createElementVNode
const te = Vue.toDisplayString
const y = Vue.createVNode
const W = Vue.resolveComponent
const S = Vue.withCtx
const K = Vue.createTextVNode
const _ = Vue.unref
const ne = Vue.isRef
const pe = Vue.toRefs
const fe = Vue.customRef
const he = Vue.getCurrentScope
const ve = Vue.onScopeDispose
const oe = Vue.getCurrentInstance
const le = Vue.onMounted
const me = Vue.nextTick
const g = Vue.computed
const ye = Vue.readonly
const ge = Vue.watchEffect
const re = Vue.reactive
const E = Vue.mergeProps
const Z = Vue.renderSlot
const xe = Vue.createBlock
const we = Vue.Teleport
function _e(t) {
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
function be(t, e, o) {
  const l = o ?? h(0);
  return H(t, (n) => {
    if (!n)
      return;
    const i = _e(e);
    n.style.cursor = i.getCursorIcon();
    const s = i.getMoveIncrementHandler(), r = {
      x: 0,
      y: 0
    }, u = (a) => {
      l.value += s(r, a), r.x = a.x, r.y = a.y;
    };
    n.addEventListener(
      "mousedown",
      (a) => {
        a.stopPropagation(), document.querySelector("body").style.cursor = n.style.cursor, r.x = a.x, r.y = a.y, document.addEventListener("mousemove", u);
      },
      { capture: !0 }
    ), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", u), document.querySelector("body").style.cursor = "default";
    });
  }), l;
}
const Pe = /* @__PURE__ */ M({
  __name: "SliderBlock",
  props: {
    modelValue: {},
    clipPath: {},
    direction: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, l = e, n = h(o.modelValue), i = h(null);
    H(n, (u) => {
      l("update:modelValue", u);
    }), be(i, o.direction, n);
    const s = {
      "clip-path": o.clipPath
    };
    function r() {
      alert("onClickNumber");
    }
    return (u, a) => (A(), F("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: k([{ display: "flex", "justify-content": "center", "align-items": "center" }, s])
    }, [
      b("div", { onClick: r }, [
        b("div", {
          ref: "numberElement",
          onClickCapture: r,
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, te(n.value), 545)
      ])
    ], 512));
  }
});
const ke = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, n] of e)
    o[l] = n;
  return o;
}, q = /* @__PURE__ */ ke(Pe, [["__scopeId", "data-v-8ca4e32e"]]), $e = {
  class: "box",
  style: { position: "relative", width: "100%", height: "100%" }
}, Ve = /* @__PURE__ */ b("p", { style: { margin: "0", padding: "0", top: "0", left: "0", "font-size": "0.6rem", "user-select": "none", color: "whitesmoke", "z-index": "999", position: "absolute", "pointer-events": "none" } }, " margin", -1), Ce = /* @__PURE__ */ M({
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
    }, n = h(0), i = h(0), s = h(0), r = h(0), u = h(0), a = h(0), c = h(0), p = h(0);
    return (f, d) => (A(), F("div", $e, [
      b("p", {
        style: k([{ top: `${e.verticalHeightPercent}%`, left: `${e.horizontalWidthPercent}%` }, { margin: "0", padding: "0", "font-size": "0.6rem", "user-select": "none", color: "whitesmoke", "z-index": "999", position: "absolute", "pointer-events": "none" }])
      }, " padding", 4),
      Ve,
      y(q, {
        class: "box margin-left",
        direction: "left",
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        "clip-path": o.left.clipPath,
        style: k([{ width: `${e.horizontalWidthPercent}%` }, { position: "absolute", height: "100%", "background-color": "#393939" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box margin-up",
        direction: "up",
        modelValue: s.value,
        "onUpdate:modelValue": d[1] || (d[1] = (v) => s.value = v),
        "clip-path": o.up.clipPath,
        style: k([{ height: `${e.verticalHeightPercent}%` }, { position: "absolute", width: "100%", "background-color": "#424242" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box margin-right",
        direction: "right",
        modelValue: i.value,
        "onUpdate:modelValue": d[2] || (d[2] = (v) => i.value = v),
        "clip-path": o.right.clipPath,
        style: k([{ width: `${e.horizontalWidthPercent}%` }, { position: "absolute", right: "0", height: "100%", "background-color": "#393939" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box margin-bottom",
        direction: "bottom",
        modelValue: r.value,
        "onUpdate:modelValue": d[3] || (d[3] = (v) => r.value = v),
        "clip-path": o.bottom.clipPath,
        style: k([{ height: `${e.verticalHeightPercent}%` }, { position: "absolute", bottom: "0", width: "100%", "background-color": "#424242" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box padding-left",
        direction: "left",
        modelValue: u.value,
        "onUpdate:modelValue": d[4] || (d[4] = (v) => u.value = v),
        "clip-path": l.left.clipPath,
        style: k([{ left: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { position: "absolute", height: "100%", "background-color": "#c84848" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box padding-up",
        direction: "up",
        modelValue: c.value,
        "onUpdate:modelValue": d[5] || (d[5] = (v) => c.value = v),
        "clip-path": l.up.clipPath,
        style: k([{ top: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { position: "absolute", width: "100%", "background-color": "#c84848" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box padding-right",
        direction: "right",
        modelValue: a.value,
        "onUpdate:modelValue": d[6] || (d[6] = (v) => a.value = v),
        "clip-path": l.right.clipPath,
        style: k([{ right: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { position: "absolute", height: "100%", "background-color": "#c84848" }])
      }, null, 8, ["modelValue", "clip-path", "style"]),
      y(q, {
        class: "box padding-bottom",
        direction: "bottom",
        modelValue: p.value,
        "onUpdate:modelValue": d[7] || (d[7] = (v) => p.value = v),
        "clip-path": l.bottom.clipPath,
        style: k([{ bottom: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { position: "absolute", width: "100%", "background-color": "#c84848" }])
      }, null, 8, ["modelValue", "clip-path", "style"])
    ]));
  }
}), Se = { class: "row no-wrap items-center gap-2 px-3 py-2" }, Ee = /* @__PURE__ */ b("span", null, "display ", -1), ze = /* @__PURE__ */ M({
  __name: "Layout",
  setup(t) {
    const e = h(["block", "flex"]);
    return (o, l) => {
      const n = W("q-tooltip"), i = W("q-icon"), s = W("q-btn-toggle");
      return A(), F("div", Se, [
        Ee,
        y(s, {
          size: "sm",
          padding: "4px",
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (r) => e.value = r),
          "toggle-color": "primary",
          options: [
            { value: "block", slot: "block" },
            { value: "flex", slot: "flex" }
          ]
        }, {
          block: S(() => [
            y(i, { name: "inbox" }, {
              default: S(() => [
                y(n, { style: { "z-index": "99999999" } }, {
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
            y(i, { name: "inventory_2" }, {
              default: S(() => [
                y(n, { style: { "z-index": "99999999" } }, {
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
}), We = /* @__PURE__ */ M({
  __name: "MainPanel",
  setup(t) {
    const e = h("style");
    return (o, l) => {
      const n = W("q-tab"), i = W("q-tabs"), s = W("q-expansion-item"), r = W("q-separator"), u = W("q-list"), a = W("q-tab-panel"), c = W("q-tab-panels");
      return A(), F("div", null, [
        y(i, {
          class: "text-teal",
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (p) => e.value = p)
        }, {
          default: S(() => [
            y(n, {
              name: "style",
              label: "style"
            }),
            y(n, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        y(c, {
          modelValue: e.value,
          "onUpdate:modelValue": l[1] || (l[1] = (p) => e.value = p),
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: S(() => [
            y(a, { name: "style" }, {
              default: S(() => [
                y(u, { bordered: "" }, {
                  default: S(() => [
                    y(s, {
                      label: "布局",
                      "header-class": "text-primary"
                    }, {
                      default: S(() => [
                        y(ze)
                      ]),
                      _: 1
                    }),
                    y(r),
                    y(s, {
                      label: "空间",
                      "header-class": "text-primary"
                    }, {
                      default: S(() => [
                        y(Ce, { style: { width: "100%", height: "8rem" } })
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
  return he() ? (ve(t), !0) : !1;
}
function P(t) {
  return typeof t == "function" ? t() : _(t);
}
const D = typeof window < "u" && typeof document < "u", He = Object.prototype.toString, qe = (t) => He.call(t) === "[object Object]", Ae = () => {
};
function Ie(t, e = {}) {
  if (!ne(t))
    return pe(t);
  const o = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const l in t.value)
    o[l] = fe(() => ({
      get() {
        return t.value[l];
      },
      set(n) {
        var i;
        if ((i = P(e.replaceRef)) != null ? i : !0)
          if (Array.isArray(t.value)) {
            const r = [...t.value];
            r[l] = n, t.value = r;
          } else {
            const r = { ...t.value, [l]: n };
            Object.setPrototypeOf(r, Object.getPrototypeOf(t.value)), t.value = r;
          }
        else
          t.value[l] = n;
      }
    }));
  return o;
}
function ie(t, e = !0) {
  oe() ? le(t) : e ? t() : me(t);
}
function Le(t, e = 1e3, o = {}) {
  const {
    immediate: l = !0,
    immediateCallback: n = !1
  } = o;
  let i = null;
  const s = h(!1);
  function r() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, r();
  }
  function a() {
    const c = P(e);
    c <= 0 || (s.value = !0, n && t(), r(), i = setInterval(t, c));
  }
  if (l && D && a(), ne(e) || typeof e == "function") {
    const c = H(e, () => {
      s.value && D && a();
    });
    B(c);
  }
  return B(u), {
    isActive: s,
    pause: u,
    resume: a
  };
}
function N(t) {
  var e;
  const o = P(t);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
const I = D ? window : void 0, Te = D ? window.document : void 0;
function C(...t) {
  let e, o, l, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, l, n] = t, e = I) : [e, o, l, n] = t, !e)
    return Ae;
  Array.isArray(o) || (o = [o]), Array.isArray(l) || (l = [l]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, r = (c, p, f, d) => (c.addEventListener(p, f, d), () => c.removeEventListener(p, f, d)), u = H(
    () => [N(e), P(n)],
    ([c, p]) => {
      if (s(), !c)
        return;
      const f = qe(p) ? { ...p } : p;
      i.push(
        ...o.flatMap((d) => l.map((v) => r(c, d, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), s();
  };
  return B(a), a;
}
function Be() {
  const t = h(!1);
  return oe() && le(() => {
    t.value = !0;
  }), t;
}
function Y(t) {
  const e = Be();
  return g(() => (e.value, !!t()));
}
function Me(t, e = {}) {
  const {
    immediate: o = !0,
    fpsLimit: l = void 0,
    window: n = I
  } = e, i = h(!1), s = l ? 1e3 / l : null;
  let r = 0, u = null;
  function a(f) {
    if (!i.value || !n)
      return;
    const d = f - (r || f);
    if (s && d < s) {
      u = n.requestAnimationFrame(a);
      return;
    }
    t({ delta: d, timestamp: f }), r = f, u = n.requestAnimationFrame(a);
  }
  function c() {
    !i.value && n && (i.value = !0, u = n.requestAnimationFrame(a));
  }
  function p() {
    i.value = !1, u != null && n && (n.cancelAnimationFrame(u), u = null);
  }
  return o && c(), B(p), {
    isActive: ye(i),
    pause: p,
    resume: c
  };
}
function Fe(t, e = {}) {
  const { window: o = I } = e, l = Y(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let n;
  const i = h(!1), s = (a) => {
    i.value = a.matches;
  }, r = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, u = ge(() => {
    l.value && (r(), n = o.matchMedia(P(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), i.value = n.matches);
  });
  return B(() => {
    u(), r(), n = void 0;
  }), i;
}
function Oe(t, e, o = {}) {
  const { window: l = I, ...n } = o;
  let i;
  const s = Y(() => l && "MutationObserver" in l), r = () => {
    i && (i.disconnect(), i = void 0);
  }, u = H(
    () => N(t),
    (c) => {
      r(), s.value && l && c && (i = new MutationObserver(e), i.observe(c, n));
    },
    { immediate: !0 }
  ), a = () => {
    r(), u();
  };
  return B(a), {
    isSupported: s,
    stop: a
  };
}
function Ne(t, e = {}) {
  var o, l;
  const {
    pointerTypes: n,
    preventDefault: i,
    stopPropagation: s,
    exact: r,
    onMove: u,
    onEnd: a,
    onStart: c,
    initialValue: p,
    axis: f = "both",
    draggingElement: d = I,
    containerElement: v,
    handle: $ = t
  } = e, m = h(
    (o = P(p)) != null ? o : { x: 0, y: 0 }
  ), V = h(), L = (x) => n ? n.includes(x.pointerType) : !0, z = (x) => {
    P(i) && x.preventDefault(), P(s) && x.stopPropagation();
  }, O = (x) => {
    var U;
    if (!L(x) || P(r) && x.target !== P(t))
      return;
    const G = ((U = P(v)) != null ? U : P(t)).getBoundingClientRect(), J = {
      x: x.clientX - G.left,
      y: x.clientY - G.top
    };
    (c == null ? void 0 : c(J, x)) !== !1 && (V.value = J, z(x));
  }, w = (x) => {
    if (!L(x) || !V.value)
      return;
    let { x: U, y: R } = m.value;
    (f === "x" || f === "both") && (U = x.clientX - V.value.x), (f === "y" || f === "both") && (R = x.clientY - V.value.y), m.value = {
      x: U,
      y: R
    }, u == null || u(m.value, x), z(x);
  }, T = (x) => {
    L(x) && V.value && (V.value = void 0, a == null || a(m.value, x), z(x));
  };
  if (D) {
    const x = { capture: (l = e.capture) != null ? l : !0 };
    C($, "pointerdown", O, x), C(d, "pointermove", w, x), C(d, "pointerup", T, x);
  }
  return {
    ...Ie(m),
    position: m,
    isDragging: g(() => !!V.value),
    style: g(
      () => `left:${m.value.x}px;top:${m.value.y}px;`
    )
  };
}
function Ue(t, e, o = {}) {
  const { window: l = I, ...n } = o;
  let i;
  const s = Y(() => l && "ResizeObserver" in l), r = () => {
    i && (i.disconnect(), i = void 0);
  }, u = g(() => Array.isArray(t) ? t.map((p) => N(p)) : [N(t)]), a = H(
    u,
    (p) => {
      if (r(), s.value && l) {
        i = new ResizeObserver(e);
        for (const f of p)
          f && i.observe(f, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    r(), a();
  };
  return B(c), {
    isSupported: s,
    stop: c
  };
}
function se(t, e = {}) {
  const {
    reset: o = !0,
    windowResize: l = !0,
    windowScroll: n = !0,
    immediate: i = !0
  } = e, s = h(0), r = h(0), u = h(0), a = h(0), c = h(0), p = h(0), f = h(0), d = h(0);
  function v() {
    const $ = N(t);
    if (!$) {
      o && (s.value = 0, r.value = 0, u.value = 0, a.value = 0, c.value = 0, p.value = 0, f.value = 0, d.value = 0);
      return;
    }
    const m = $.getBoundingClientRect();
    s.value = m.height, r.value = m.bottom, u.value = m.left, a.value = m.right, c.value = m.top, p.value = m.width, f.value = m.x, d.value = m.y;
  }
  return Ue(t, v), H(() => N(t), ($) => !$ && v()), n && C("scroll", v, { capture: !0, passive: !0 }), l && C("resize", v, { passive: !0 }), ie(() => {
    i && v();
  }), {
    height: s,
    bottom: r,
    left: u,
    right: a,
    top: c,
    width: p,
    x: f,
    y: d,
    update: v
  };
}
function De(t) {
  const {
    x: e,
    y: o,
    document: l = Te,
    multiple: n,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = t, r = Y(() => P(n) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), u = h(null), a = () => {
    var p, f;
    u.value = P(n) ? (p = l == null ? void 0 : l.elementsFromPoint(P(e), P(o))) != null ? p : [] : (f = l == null ? void 0 : l.elementFromPoint(P(e), P(o))) != null ? f : null;
  }, c = i === "requestAnimationFrame" ? Me(a, { immediate: s }) : Le(a, i, { immediate: s });
  return {
    isSupported: r,
    element: u,
    ...c
  };
}
const Ye = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function ue(t = {}) {
  const {
    type: e = "page",
    touch: o = !0,
    resetOnTouchEnds: l = !1,
    initialValue: n = { x: 0, y: 0 },
    window: i = I,
    target: s = i,
    scroll: r = !0,
    eventFilter: u
  } = t;
  let a = null;
  const c = h(n.x), p = h(n.y), f = h(null), d = typeof e == "function" ? e : Ye[e], v = (w) => {
    const T = d(w);
    a = w, T && ([c.value, p.value] = T, f.value = "mouse");
  }, $ = (w) => {
    if (w.touches.length > 0) {
      const T = d(w.touches[0]);
      T && ([c.value, p.value] = T, f.value = "touch");
    }
  }, m = () => {
    if (!a || !i)
      return;
    const w = d(a);
    a instanceof MouseEvent && w && (c.value = w[0] + i.scrollX, p.value = w[1] + i.scrollY);
  }, V = () => {
    c.value = n.x, p.value = n.y;
  }, L = u ? (w) => u(() => v(w), {}) : (w) => v(w), z = u ? (w) => u(() => $(w), {}) : (w) => $(w), O = u ? () => u(() => m(), {}) : () => m();
  if (s) {
    const w = { passive: !0 };
    C(s, ["mousemove", "dragover"], L, w), o && e !== "movement" && (C(s, ["touchstart", "touchmove"], z, w), l && C(s, "touchend", V, w)), r && e === "page" && C(i, "scroll", O, { passive: !0 });
  }
  return {
    x: c,
    y: p,
    sourceType: f
  };
}
function Q(t = {}) {
  const {
    window: e = I,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: i = !0
  } = t, s = h(o), r = h(l), u = () => {
    e && (i ? (s.value = e.innerWidth, r.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, r.value = e.document.documentElement.clientHeight));
  };
  if (u(), ie(u), C("resize", u, { passive: !0 }), n) {
    const a = Fe("(orientation: portrait)");
    H(a, () => u());
  }
  return { width: s, height: r };
}
function ae() {
  const { width: t, height: e } = Q(), o = g(() => `0 0 ${t.value} ${e.value}`), l = g(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: o,
    styles: l
  };
}
function ce(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function de(t, e) {
  if (!ce(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.elementTypeAttr))
      return o.slice(e.elementTypeAttr.length + 1);
  return null;
}
function X(t, e) {
  if (!ce(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.idAttr))
      return parseInt(o.slice(e.idAttr.length + 1));
  return null;
}
function Re(t, e) {
  const o = g(() => t.value ? t.value : null), l = ae(), n = re(se(t));
  Oe(
    o,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), C("scroll", n.update, !0);
  const i = g(() => o.value ? {
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
  }), s = g(() => o.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), r = g(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), u = g(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), a = g(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), c = g(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), p = g(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), f = g(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = g(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: l,
    rectStyles: i,
    p1: s,
    p2: r,
    p3: u,
    p4: a,
    p5: c,
    p6: p,
    p7: f,
    p8: d
  };
}
const Xe = ["viewBox"], Qe = /* @__PURE__ */ M({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, o = g(() => e.selectedElement), {
      svgConfig: { viewBox: l, styles: n },
      rectStyles: i,
      p1: s,
      p2: r,
      p3: u,
      p4: a,
      p5: c,
      p6: p,
      p7: f,
      p8: d
    } = Re(o, e.selectorConfig);
    return (v, $) => (A(), F("svg", {
      class: "vis-aiming",
      viewBox: _(l),
      version: "1.1",
      style: k([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, _(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      b("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: k(_(i))
      }, null, 4),
      b("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, _(s), { r: "2" }), null, 16),
      b("circle", E({ fill: "hotpink" }, _(r), { r: "2" }), null, 16),
      b("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, _(u), { r: "2" }), null, 16),
      b("circle", E({ fill: "hotpink" }, _(a), { r: "2" }), null, 16),
      b("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, _(c), { r: "2" }), null, 16),
      b("circle", E({ fill: "hotpink" }, _(p), { r: "2" }), null, 16),
      b("circle", E({
        stroke: "hotpink",
        fill: "white"
      }, _(f), { r: "2" }), null, 16),
      b("circle", E({ fill: "hotpink" }, _(d), { r: "2" }), null, 16)
    ], 12, Xe));
  }
}), Ge = /* @__PURE__ */ M({
  __name: "Panel",
  setup(t) {
    const e = h(null), { style: o } = Ne(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (l, n) => (A(), F("div", {
      style: k([_(o), { position: "fixed" }]),
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
}), Je = ae;
function Ke(t, e) {
  const { width: o } = Q(), { x: l, y: n } = ue({ type: "client" }), i = g(() => {
    let u = l.value, a = n.value;
    return o.value - l.value < 10 && (u -= 10), n.value < 10 && (a += 10), { x: u, y: a };
  }), s = g(() => e.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: g(() => e.value ? de(e.value, t) : null),
    typeNameTagStyles: s
  };
}
function Ze(t) {
  const { width: e, height: o } = Q(), { x: l, y: n } = ue({ type: "client" }), { element: i } = De({ x: l, y: n }), s = g(() => {
    if (i.value === null)
      return null;
    const d = i.value.closest(t.selectors);
    return d === null || d.closest("[layout-tool-panel]") ? null : d;
  }), r = re(se(s));
  C("scroll", r.update, !0);
  const u = g(() => s.value ? {
    display: "block",
    width: r.width,
    height: r.height,
    x: r.left,
    y: r.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), a = g(() => s.value ? {
    x1: 0,
    y1: r.top,
    x2: e.value,
    y2: r.top
  } : {
    x1: 0,
    y1: 8,
    x2: r.width,
    y2: 8,
    "stroke-width": 0
  }), c = g(() => s.value ? {
    x1: r.left + r.width,
    y1: 0,
    x2: r.left + r.width,
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
    "stroke-width": 0
  }), p = g(() => s.value ? {
    x1: 0,
    y1: r.top + r.height,
    x2: e.value,
    y2: r.top + r.height
  } : {
    x1: 0,
    y1: 8,
    x2: r.width,
    y2: 8,
    "stroke-width": 0
  }), f = g(() => s.value ? {
    x1: r.left,
    y1: 0,
    x2: r.left,
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: a, rightLine: c, bottomLine: p, leftLine: f };
}
function je(t) {
  return !!t.closest(".q-color-picker");
}
function et(t, e) {
  C(
    document.querySelector("body"),
    "click",
    (o) => {
      const l = o.target;
      l.closest("[layout-tool-panel]") || je(l) || (e.value = t.value, o.stopPropagation());
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
function tt(t, e) {
  let o = t.parentElement.closest(`${e.selectors}`);
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: X(o, e), dom: o };
    o = o.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const nt = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function j(t, e) {
  if (!nt.has(de(t, e)))
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
function ot(t, e) {
  function o(n, i) {
    return window.getComputedStyle(ee(n, t), null).getPropertyValue(i);
  }
  function l(n) {
    const i = ee(n, t);
    e.value = i;
  }
  return { queryStyle: o, selectTarget: l };
}
const lt = ["viewBox"], it = /* @__PURE__ */ M({
  __name: "TrackBall",
  props: {
    selectorConfig: {}
  },
  emits: ["hoverChange", "selectedChange"],
  setup(t, { expose: e, emit: o }) {
    const l = t, n = o, { viewBox: i, styles: s } = Je(), { hoverElement: r, rectStyles: u, topLine: a, rightLine: c, bottomLine: p, leftLine: f } = Ze(l.selectorConfig), { typeNameTagStyles: d, typeName: v } = Ke(
      l.selectorConfig,
      r
    ), $ = h(null);
    return et(r, $), H(r, (m) => {
      if (m) {
        const V = X(m, l.selectorConfig);
        n("hoverChange", { id: V });
        return;
      }
      n("hoverChange", { id: null });
    }), H($, (m) => {
      const V = {
        isFlex: !1,
        direction: null
      };
      if (m) {
        const L = X(m, l.selectorConfig), z = tt(m, l.selectorConfig);
        let O = {
          isFlex: !1,
          direction: null
        };
        z && (O = j(z.dom, l.selectorConfig)), n("selectedChange", {
          id: L,
          parentBoxId: z !== null ? z.id : null,
          flexInfo: j(m, l.selectorConfig),
          parentFlexInfo: O
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: V,
        parentFlexInfo: V
      });
    }), e(ot(l.selectorConfig, $)), (m, V) => (A(), xe(we, { to: "body" }, [
      (A(), F("svg", {
        class: "vis-hover",
        viewBox: _(i),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: k([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, _(s)])
      }, [
        b("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: k(_(u))
        }, null, 4),
        b("line", E({ class: "top" }, _(a), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", E({ class: "right" }, _(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", E({ class: "bottom" }, _(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        b("line", E({ class: "left" }, _(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, lt)),
      y(Qe, {
        "selected-element": $.value,
        selectorConfig: l.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      y(Ge, { style: { "z-index": "9999999", width: "300px" } }, {
        default: S(() => [
          y(We)
        ]),
        _: 1
      }),
      b("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: k([_(d), { "z-index": "9999999" }])
      }, te(_(v)), 5)
    ]));
  }
});
export {
  it as default
};
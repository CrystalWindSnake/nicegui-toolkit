const m = Vue.ref
const I = Vue.watch
const g = Vue.computed
const D = Vue.defineComponent
const T = Vue.openBlock
const A = Vue.createElementBlock
const z = Vue.normalizeStyle
const P = Vue.createElementVNode
const H = Vue.toDisplayString
const f = Vue.createVNode
const E = Vue.resolveComponent
const h = Vue.withCtx
const x = Vue.unref
const U = Vue.isRef
const F = Vue.createTextVNode
const se = Vue.createCommentVNode
const Pe = Vue.pushScopeId
const ke = Vue.popScopeId
const $e = Vue.withDirectives
const ze = Vue.vShow
const Ce = Vue.toRefs
const Se = Vue.customRef
const Ee = Vue.getCurrentScope
const Le = Vue.onScopeDispose
const ae = Vue.getCurrentInstance
const K = Vue.onMounted
const qe = Vue.nextTick
const Ve = Vue.readonly
const Ie = Vue.watchEffect
const ce = Vue.reactive
const V = Vue.mergeProps
const le = Vue.renderSlot
const We = Vue.createBlock
const He = Vue.Teleport
const ue = {
  selectTarget: null
};
function Te(t) {
  ue.selectTarget = t;
}
function de() {
  return ue;
}
let pe = m(!1);
function oe(t) {
  pe.value = t ?? !0;
}
function Ae() {
  return pe;
}
function Me(t) {
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
function Fe(t, e, l) {
  const o = l ?? m(0);
  return I(t, (n) => {
    if (!n)
      return;
    const i = Me(e);
    n.style.cursor = i.getCursorIcon();
    const s = i.getMoveIncrementHandler(), r = {
      x: 0,
      y: 0
    }, a = (c) => {
      o.value += s(r, c), r.x = c.x, r.y = c.y;
    };
    n.addEventListener(
      "mousedown",
      (c) => {
        c.stopPropagation(), oe(), document.querySelector("body").style.cursor = n.style.cursor, r.x = c.x, r.y = c.y, document.addEventListener("mousemove", a);
      },
      { capture: !0 }
    ), document.addEventListener(
      "mouseup",
      (c) => {
        document.removeEventListener("mousemove", a), document.querySelector("body").style.cursor = "default", oe(!1), c.stopPropagation();
      },
      { capture: !0 }
    );
  }), o;
}
let fe = null;
function Be(t) {
  fe = t;
}
function Oe(t) {
  fe(t);
}
function ve(t) {
  function e(o) {
    return window.getComputedStyle(t, null).getPropertyValue(o);
  }
  function l() {
    const o = {
      isFlex: !1,
      direction: "",
      justifyContent: "",
      alignItem: ""
    };
    return t && (o.isFlex = e("display") === "flex", o.direction = e("flex-direction")), o;
  }
  return {
    getStyle: e,
    getFlexBoxInfo: l
  };
}
const j = /* @__PURE__ */ new Map([
  ["display", m(null)],
  ["padding-left", m(null)],
  ["padding-top", m(null)],
  ["padding-right", m(null)],
  ["padding-bottom", m(null)],
  ["margin-left", m(null)],
  ["margin-top", m(null)],
  ["margin-right", m(null)],
  ["margin-bottom", m(null)]
]);
function Ne(t) {
  I(t, (e) => {
    if (!e) {
      j.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const l = ve(e);
    j.forEach((o, n) => {
      o.value = l.getStyle(n);
    });
  });
}
function De(t) {
  return j.has(t) || j.set(t, m(null)), j.get(t);
}
function R(t, e) {
  const l = De(t);
  return g({
    get: () => l.value,
    set: (n) => {
      const i = {
        action: "style",
        commandType: "set",
        values: { [t]: n }
      }, s = e ? e(n) : [];
      Oe([i, ...s]), l.value = n;
    }
  });
}
const Ue = /* @__PURE__ */ D({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {}
  },
  setup(t) {
    const e = t, l = R(e.styleName), o = g(() => {
      if (!l.value)
        return {
          value: 0,
          unit: "px"
        };
      const u = /(-?\d+)([a-zA-Z%]+)/, d = l.value.match(u), p = parseFloat(d[1]), v = d[2];
      return { value: p, unit: v };
    });
    let n = o.value.value, i = o.value.unit;
    const s = g({
      get: () => o.value.value,
      set: (u) => {
        n = u, l.value = `${n}${i}`;
      }
    });
    g({
      get: () => o.value.unit,
      set: (u) => {
        i = u, l.value = `${n}${i}`;
      }
    });
    const r = m(null);
    Fe(r, e.direction, s);
    const a = {
      "clip-path": e.clipPath
    };
    function c() {
    }
    return (u, d) => (T(), A("div", {
      ref_key: "target",
      ref: r,
      class: "target",
      style: z([{ display: "flex", "justify-content": "center", "align-items": "center" }, a])
    }, [
      P("div", { onClick: c }, [
        P("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, H(s.value), 513)
      ])
    ], 512));
  }
});
const he = (t, e) => {
  const l = t.__vccOpts || t;
  for (const [o, n] of e)
    l[o] = n;
  return l;
}, B = /* @__PURE__ */ he(Ue, [["__scopeId", "data-v-db7c4047"]]), Ye = { class: "relative w-full h-full" }, Xe = /* @__PURE__ */ P("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin", -1), Re = /* @__PURE__ */ D({
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
    return (n, i) => (T(), A("div", Ye, [
      P("p", {
        class: "m-0 p-0 absolute pointer-events-none",
        style: z([{ top: `${e.verticalHeightPercent}%`, left: `${e.horizontalWidthPercent}%` }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
      }, " padding", 4),
      Xe,
      f(B, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "margin-left",
        "clip-path": l.left.clipPath,
        style: z([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "margin-top",
        "clip-path": l.up.clipPath,
        style: z([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute h-full right-0",
        direction: "right",
        "style-name": "margin-right",
        "clip-path": l.right.clipPath,
        style: z([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute bottom-0 w-full",
        direction: "bottom",
        "style-name": "margin-bottom",
        "clip-path": l.bottom.clipPath,
        style: z([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "padding-left",
        "clip-path": o.left.clipPath,
        style: z([{ left: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "padding-top",
        "clip-path": o.up.clipPath,
        style: z([{ top: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute h-full",
        direction: "right",
        "style-name": "padding-right",
        "clip-path": o.right.clipPath,
        style: z([{ right: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(B, {
        class: "absolute w-full",
        direction: "bottom",
        "style-name": "padding-bottom",
        "clip-path": o.bottom.clipPath,
        style: z([{ bottom: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"])
    ]));
  }
}), me = (t) => (Pe("data-v-c97dc6b2"), t = t(), ke(), t), je = { class: "col no-wrap" }, Ge = /* @__PURE__ */ me(() => /* @__PURE__ */ P("span", { class: "item-title text-capitalize" }, "display ", -1)), Qe = { key: 0 }, Ze = /* @__PURE__ */ me(() => /* @__PURE__ */ P("span", { class: "item-title text-caption text-capitalize" }, "direction", -1)), Je = { class: "item-title text-left text-caption text-capitalize" }, Ke = { class: "item-title text-left text-caption text-capitalize" }, et = /* @__PURE__ */ D({
  __name: "Layout",
  setup(t) {
    const e = R("display"), l = R("flex-direction"), o = R("align-items"), n = g(() => l.value === "row" ? {
      title: "vertical align",
      start: {
        icon: "vertical_align_top",
        tooltipLabel: "top"
      },
      center: {
        icon: "align_vertical_center",
        tooltipLabel: "center"
      },
      end: {
        icon: "vertical_align_bottom",
        tooltipLabel: "bottom"
      }
    } : {
      title: "horizontal align",
      start: {
        icon: "align_horizontal_left",
        tooltipLabel: "left"
      },
      center: {
        icon: "align_horizontal_center",
        tooltipLabel: "center"
      },
      end: {
        icon: "align_horizontal_right",
        tooltipLabel: "right"
      }
    }), i = R("justify-content"), s = g(() => l.value === "row" ? {
      title: "horizontal justify",
      start: {
        icon: "align_horizontal_left",
        tooltipLabel: "left"
      },
      center: {
        icon: "align_horizontal_center",
        tooltipLabel: "center"
      },
      end: {
        icon: "align_horizontal_right",
        tooltipLabel: "right"
      }
    } : {
      title: "vertical justify",
      start: {
        icon: "vertical_align_top",
        tooltipLabel: "top"
      },
      center: {
        icon: "align_vertical_center",
        tooltipLabel: "center"
      },
      end: {
        icon: "vertical_align_bottom",
        tooltipLabel: "bottom"
      }
    }), r = de().selectTarget, a = g(() => ve(r.value).getFlexBoxInfo());
    return I(a, (c) => {
      l.value = c.direction;
    }), (c, u) => {
      const d = E("q-tooltip"), p = E("q-icon"), v = E("q-btn-toggle"), k = E("q-item"), C = E("q-separator"), y = E("q-btn"), q = E("q-list");
      return T(), A("div", je, [
        f(q, { bordered: "" }, {
          default: h(() => [
            f(k, { class: "items-center gap-2 px-3 py-2" }, {
              default: h(() => [
                Ge,
                f(v, {
                  size: "sm",
                  padding: "4px",
                  modelValue: x(e),
                  "onUpdate:modelValue": u[0] || (u[0] = (w) => U(e) ? e.value = w : null),
                  "toggle-color": "primary",
                  options: [
                    { value: "block", slot: "block" },
                    { value: "flex", slot: "flex" }
                  ]
                }, {
                  block: h(() => [
                    f(p, { name: "inbox" }, {
                      default: h(() => [
                        f(d, { style: { "z-index": "99999999" } }, {
                          default: h(() => [
                            F(" block ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  flex: h(() => [
                    f(p, { name: "inventory_2" }, {
                      default: h(() => [
                        f(d, { style: { "z-index": "99999999" } }, {
                          default: h(() => [
                            F(" flex box ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            f(C),
            a.value.isFlex ? (T(), A("div", Qe, [
              f(k, { class: "items-center gap-2 px-3 py-2" }, {
                default: h(() => [
                  Ze,
                  f(v, {
                    modelValue: x(l),
                    "onUpdate:modelValue": u[1] || (u[1] = (w) => U(l) ? l.value = w : null),
                    padding: "8px",
                    size: "sm",
                    "toggle-color": "primary",
                    options: [
                      { value: "row", label: "Horizontal" },
                      { value: "column", label: "Vertical" }
                    ]
                  }, null, 8, ["modelValue"]),
                  f(y, {
                    icon: "home",
                    square: "",
                    size: "sm",
                    dense: ""
                  })
                ]),
                _: 1
              }),
              f(k, { class: "items-center gap-2 px-3 py-2" }, {
                default: h(() => [
                  P("span", Je, H(n.value.title), 1),
                  f(v, {
                    modelValue: x(o),
                    "onUpdate:modelValue": u[2] || (u[2] = (w) => U(o) ? o.value = w : null),
                    padding: "8px",
                    size: "sm",
                    "toggle-color": "primary",
                    options: [
                      { value: "start", slot: "start" },
                      { value: "center", slot: "center" },
                      { value: "end", slot: "end" }
                    ]
                  }, {
                    start: h(() => [
                      f(p, {
                        name: n.value.start.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(n.value.start.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    center: h(() => [
                      f(p, {
                        name: n.value.center.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(n.value.center.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    end: h(() => [
                      f(p, {
                        name: n.value.end.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(n.value.end.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              f(k, { class: "items-center gap-2 px-3 py-2" }, {
                default: h(() => [
                  P("span", Ke, H(s.value.title), 1),
                  f(v, {
                    modelValue: x(i),
                    "onUpdate:modelValue": u[3] || (u[3] = (w) => U(i) ? i.value = w : null),
                    padding: "8px",
                    size: "sm",
                    "toggle-color": "primary",
                    options: [
                      { value: "start", slot: "start" },
                      { value: "center", slot: "center" },
                      { value: "end", slot: "end" }
                    ]
                  }, {
                    start: h(() => [
                      f(p, {
                        name: s.value.start.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(s.value.start.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    center: h(() => [
                      f(p, {
                        name: s.value.center.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(s.value.center.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    end: h(() => [
                      f(p, {
                        name: s.value.end.icon
                      }, {
                        default: h(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: h(() => [
                              F(H(s.value.end.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])) : se("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const tt = /* @__PURE__ */ he(et, [["__scopeId", "data-v-c97dc6b2"]]), nt = /* @__PURE__ */ D({
  __name: "MainPanel",
  setup(t) {
    const e = m("style"), l = de().selectTarget;
    Ne(l);
    const o = g(() => !!l.value);
    return (n, i) => {
      const s = E("q-tab"), r = E("q-tabs"), a = E("q-expansion-item"), c = E("q-separator"), u = E("q-list"), d = E("q-tab-panel"), p = E("q-tab-panels");
      return T(), A("div", null, [
        f(r, {
          class: "text-teal",
          modelValue: e.value,
          "onUpdate:modelValue": i[0] || (i[0] = (v) => e.value = v)
        }, {
          default: h(() => [
            f(s, {
              name: "style",
              label: "style"
            }),
            f(s, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        $e(f(p, {
          modelValue: e.value,
          "onUpdate:modelValue": i[1] || (i[1] = (v) => e.value = v),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: h(() => [
            f(d, { name: "style" }, {
              default: h(() => [
                f(u, { bordered: "" }, {
                  default: h(() => [
                    f(a, {
                      "expand-separator": "",
                      label: "布局",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: h(() => [
                        f(tt)
                      ]),
                      _: 1
                    }),
                    f(c),
                    f(a, {
                      "expand-separator": "",
                      label: "空间",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: h(() => [
                        f(Re, { style: { width: "100%", height: "8rem" } })
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
        }, 8, ["modelValue"]), [
          [ze, o.value]
        ])
      ]);
    };
  }
});
function N(t) {
  return Ee() ? (Le(t), !0) : !1;
}
function $(t) {
  return typeof t == "function" ? t() : x(t);
}
const G = typeof window < "u" && typeof document < "u", lt = Object.prototype.toString, ot = (t) => lt.call(t) === "[object Object]", it = () => {
};
function rt(t, e = {}) {
  if (!U(t))
    return Ce(t);
  const l = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const o in t.value)
    l[o] = Se(() => ({
      get() {
        return t.value[o];
      },
      set(n) {
        var i;
        if ((i = $(e.replaceRef)) != null ? i : !0)
          if (Array.isArray(t.value)) {
            const r = [...t.value];
            r[o] = n, t.value = r;
          } else {
            const r = { ...t.value, [o]: n };
            Object.setPrototypeOf(r, Object.getPrototypeOf(t.value)), t.value = r;
          }
        else
          t.value[o] = n;
      }
    }));
  return l;
}
function ge(t, e = !0) {
  ae() ? K(t) : e ? t() : qe(t);
}
function st(t, e = 1e3, l = {}) {
  const {
    immediate: o = !0,
    immediateCallback: n = !1
  } = l;
  let i = null;
  const s = m(!1);
  function r() {
    i && (clearInterval(i), i = null);
  }
  function a() {
    s.value = !1, r();
  }
  function c() {
    const u = $(e);
    u <= 0 || (s.value = !0, n && t(), r(), i = setInterval(t, u));
  }
  if (o && G && c(), U(e) || typeof e == "function") {
    const u = I(e, () => {
      s.value && G && c();
    });
    N(u);
  }
  return N(a), {
    isActive: s,
    pause: a,
    resume: c
  };
}
function Y(t) {
  var e;
  const l = $(t);
  return (e = l == null ? void 0 : l.$el) != null ? e : l;
}
const O = G ? window : void 0, at = G ? window.document : void 0;
function L(...t) {
  let e, l, o, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([l, o, n] = t, e = O) : [e, l, o, n] = t, !e)
    return it;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const i = [], s = () => {
    i.forEach((u) => u()), i.length = 0;
  }, r = (u, d, p, v) => (u.addEventListener(d, p, v), () => u.removeEventListener(d, p, v)), a = I(
    () => [Y(e), $(n)],
    ([u, d]) => {
      if (s(), !u)
        return;
      const p = ot(d) ? { ...d } : d;
      i.push(
        ...l.flatMap((v) => o.map((k) => r(u, v, k, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), s();
  };
  return N(c), c;
}
function ct() {
  const t = m(!1);
  return ae() && K(() => {
    t.value = !0;
  }), t;
}
function Z(t) {
  const e = ct();
  return g(() => (e.value, !!t()));
}
function ut(t, e = {}) {
  const {
    immediate: l = !0,
    fpsLimit: o = void 0,
    window: n = O
  } = e, i = m(!1), s = o ? 1e3 / o : null;
  let r = 0, a = null;
  function c(p) {
    if (!i.value || !n)
      return;
    const v = p - (r || p);
    if (s && v < s) {
      a = n.requestAnimationFrame(c);
      return;
    }
    t({ delta: v, timestamp: p }), r = p, a = n.requestAnimationFrame(c);
  }
  function u() {
    !i.value && n && (i.value = !0, a = n.requestAnimationFrame(c));
  }
  function d() {
    i.value = !1, a != null && n && (n.cancelAnimationFrame(a), a = null);
  }
  return l && u(), N(d), {
    isActive: Ve(i),
    pause: d,
    resume: u
  };
}
function dt(t, e = {}) {
  const { window: l = O } = e, o = Z(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let n;
  const i = m(!1), s = (c) => {
    i.value = c.matches;
  }, r = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, a = Ie(() => {
    o.value && (r(), n = l.matchMedia($(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), i.value = n.matches);
  });
  return N(() => {
    a(), r(), n = void 0;
  }), i;
}
function pt(t, e, l = {}) {
  const { window: o = O, ...n } = l;
  let i;
  const s = Z(() => o && "MutationObserver" in o), r = () => {
    i && (i.disconnect(), i = void 0);
  }, a = I(
    () => Y(t),
    (u) => {
      r(), s.value && o && u && (i = new MutationObserver(e), i.observe(u, n));
    },
    { immediate: !0 }
  ), c = () => {
    r(), a();
  };
  return N(c), {
    isSupported: s,
    stop: c
  };
}
function ft(t, e = {}) {
  var l, o;
  const {
    pointerTypes: n,
    preventDefault: i,
    stopPropagation: s,
    exact: r,
    onMove: a,
    onEnd: c,
    onStart: u,
    initialValue: d,
    axis: p = "both",
    draggingElement: v = O,
    containerElement: k,
    handle: C = t
  } = e, y = m(
    (l = $(d)) != null ? l : { x: 0, y: 0 }
  ), q = m(), w = (b) => n ? n.includes(b.pointerType) : !0, S = (b) => {
    $(i) && b.preventDefault(), $(s) && b.stopPropagation();
  }, M = (b) => {
    var X;
    if (!w(b) || $(r) && b.target !== $(t))
      return;
    const te = ((X = $(k)) != null ? X : $(t)).getBoundingClientRect(), ne = {
      x: b.clientX - te.left,
      y: b.clientY - te.top
    };
    (u == null ? void 0 : u(ne, b)) !== !1 && (q.value = ne, S(b));
  }, _ = (b) => {
    if (!w(b) || !q.value)
      return;
    let { x: X, y: J } = y.value;
    (p === "x" || p === "both") && (X = b.clientX - q.value.x), (p === "y" || p === "both") && (J = b.clientY - q.value.y), y.value = {
      x: X,
      y: J
    }, a == null || a(y.value, b), S(b);
  }, W = (b) => {
    w(b) && q.value && (q.value = void 0, c == null || c(y.value, b), S(b));
  };
  if (G) {
    const b = { capture: (o = e.capture) != null ? o : !0 };
    L(C, "pointerdown", M, b), L(v, "pointermove", _, b), L(v, "pointerup", W, b);
  }
  return {
    ...rt(y),
    position: y,
    isDragging: g(() => !!q.value),
    style: g(
      () => `left:${y.value.x}px;top:${y.value.y}px;`
    )
  };
}
function vt(t, e, l = {}) {
  const { window: o = O, ...n } = l;
  let i;
  const s = Z(() => o && "ResizeObserver" in o), r = () => {
    i && (i.disconnect(), i = void 0);
  }, a = g(() => Array.isArray(t) ? t.map((d) => Y(d)) : [Y(t)]), c = I(
    a,
    (d) => {
      if (r(), s.value && o) {
        i = new ResizeObserver(e);
        for (const p of d)
          p && i.observe(p, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    r(), c();
  };
  return N(u), {
    isSupported: s,
    stop: u
  };
}
function ye(t, e = {}) {
  const {
    reset: l = !0,
    windowResize: o = !0,
    windowScroll: n = !0,
    immediate: i = !0
  } = e, s = m(0), r = m(0), a = m(0), c = m(0), u = m(0), d = m(0), p = m(0), v = m(0);
  function k() {
    const C = Y(t);
    if (!C) {
      l && (s.value = 0, r.value = 0, a.value = 0, c.value = 0, u.value = 0, d.value = 0, p.value = 0, v.value = 0);
      return;
    }
    const y = C.getBoundingClientRect();
    s.value = y.height, r.value = y.bottom, a.value = y.left, c.value = y.right, u.value = y.top, d.value = y.width, p.value = y.x, v.value = y.y;
  }
  return vt(t, k), I(() => Y(t), (C) => !C && k()), n && L("scroll", k, { capture: !0, passive: !0 }), o && L("resize", k, { passive: !0 }), ge(() => {
    i && k();
  }), {
    height: s,
    bottom: r,
    left: a,
    right: c,
    top: u,
    width: d,
    x: p,
    y: v,
    update: k
  };
}
function ht(t) {
  const {
    x: e,
    y: l,
    document: o = at,
    multiple: n,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = t, r = Z(() => $(n) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), a = m(null), c = () => {
    var d, p;
    a.value = $(n) ? (d = o == null ? void 0 : o.elementsFromPoint($(e), $(l))) != null ? d : [] : (p = o == null ? void 0 : o.elementFromPoint($(e), $(l))) != null ? p : null;
  }, u = i === "requestAnimationFrame" ? ut(c, { immediate: s }) : st(c, i, { immediate: s });
  return {
    isSupported: r,
    element: a,
    ...u
  };
}
const mt = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function _e(t = {}) {
  const {
    type: e = "page",
    touch: l = !0,
    resetOnTouchEnds: o = !1,
    initialValue: n = { x: 0, y: 0 },
    window: i = O,
    target: s = i,
    scroll: r = !0,
    eventFilter: a
  } = t;
  let c = null;
  const u = m(n.x), d = m(n.y), p = m(null), v = typeof e == "function" ? e : mt[e], k = (_) => {
    const W = v(_);
    c = _, W && ([u.value, d.value] = W, p.value = "mouse");
  }, C = (_) => {
    if (_.touches.length > 0) {
      const W = v(_.touches[0]);
      W && ([u.value, d.value] = W, p.value = "touch");
    }
  }, y = () => {
    if (!c || !i)
      return;
    const _ = v(c);
    c instanceof MouseEvent && _ && (u.value = _[0] + i.scrollX, d.value = _[1] + i.scrollY);
  }, q = () => {
    u.value = n.x, d.value = n.y;
  }, w = a ? (_) => a(() => k(_), {}) : (_) => k(_), S = a ? (_) => a(() => C(_), {}) : (_) => C(_), M = a ? () => a(() => y(), {}) : () => y();
  if (s) {
    const _ = { passive: !0 };
    L(s, ["mousemove", "dragover"], w, _), l && e !== "movement" && (L(s, ["touchstart", "touchmove"], S, _), o && L(s, "touchend", q, _)), r && e === "page" && L(i, "scroll", M, { passive: !0 });
  }
  return {
    x: u,
    y: d,
    sourceType: p
  };
}
function ee(t = {}) {
  const {
    window: e = O,
    initialWidth: l = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: i = !0
  } = t, s = m(l), r = m(o), a = () => {
    e && (i ? (s.value = e.innerWidth, r.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, r.value = e.document.documentElement.clientHeight));
  };
  if (a(), ge(a), L("resize", a, { passive: !0 }), n) {
    const c = dt("(orientation: portrait)");
    I(c, () => a());
  }
  return { width: s, height: r };
}
function xe() {
  const { width: t, height: e } = ee(), l = g(() => `0 0 ${t.value} ${e.value}`), o = g(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: l,
    styles: o
  };
}
function be(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function we(t, e) {
  if (!be(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.elementTypeAttr))
      return l.slice(e.elementTypeAttr.length + 1);
  return null;
}
function Q(t, e) {
  if (!be(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.idAttr))
      return parseInt(l.slice(e.idAttr.length + 1));
  return null;
}
function gt(t, e) {
  const l = g(() => t.value ? t.value : null), o = xe(), n = ce(ye(t));
  pt(
    l,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), L("scroll", n.update, !0);
  const i = g(() => l.value ? {
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
  }), s = g(() => l.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), r = g(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), a = g(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), c = g(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), u = g(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = g(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), p = g(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), v = g(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: o,
    rectStyles: i,
    p1: s,
    p2: r,
    p3: a,
    p4: c,
    p5: u,
    p6: d,
    p7: p,
    p8: v
  };
}
const yt = ["viewBox"], _t = /* @__PURE__ */ D({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, l = g(() => e.selectedElement), {
      svgConfig: { viewBox: o, styles: n },
      rectStyles: i,
      p1: s,
      p2: r,
      p3: a,
      p4: c,
      p5: u,
      p6: d,
      p7: p,
      p8: v
    } = gt(l, e.selectorConfig);
    return (k, C) => (T(), A("svg", {
      class: "vis-aiming",
      viewBox: x(o),
      version: "1.1",
      style: z([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, x(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      P("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: z(x(i))
      }, null, 4),
      P("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, x(s), { r: "2" }), null, 16),
      P("circle", V({ fill: "hotpink" }, x(r), { r: "2" }), null, 16),
      P("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, x(a), { r: "2" }), null, 16),
      P("circle", V({ fill: "hotpink" }, x(c), { r: "2" }), null, 16),
      P("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, x(u), { r: "2" }), null, 16),
      P("circle", V({ fill: "hotpink" }, x(d), { r: "2" }), null, 16),
      P("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, x(p), { r: "2" }), null, 16),
      P("circle", V({ fill: "hotpink" }, x(v), { r: "2" }), null, 16)
    ], 12, yt));
  }
}), xt = /* @__PURE__ */ D({
  __name: "Panel",
  setup(t) {
    const e = m(null), { style: l } = ft(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (o, n) => (T(), A("div", {
      style: z([x(l), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      P("div", {
        ref_key: "el",
        ref: e,
        class: "cursor-move",
        style: { "background-color": "aqua", width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
      }, [
        le(o.$slots, "title")
      ], 512),
      le(o.$slots, "default")
    ], 4));
  }
}), bt = xe;
function wt(t, e) {
  const { width: l } = ee(), { x: o, y: n } = _e({ type: "client" }), i = g(() => {
    let a = o.value, c = n.value;
    return l.value - o.value < 10 && (a -= 10), n.value < 10 && (c += 10), { x: a, y: c };
  }), s = g(() => e.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: g(() => e.value ? we(e.value, t) : null),
    typeNameTagStyles: s
  };
}
function Pt(t) {
  const { width: e, height: l } = ee(), { x: o, y: n } = _e({ type: "client" }), { element: i } = ht({ x: o, y: n }), s = g(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(t.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), r = ce(ye(s));
  L("scroll", r.update, !0);
  const a = g(() => s.value ? {
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
  }), c = g(() => s.value ? {
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
  }), u = g(() => s.value ? {
    x1: r.left + r.width,
    y1: 0,
    x2: r.left + r.width,
    y2: l.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: l.value,
    "stroke-width": 0
  }), d = g(() => s.value ? {
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
  }), p = g(() => s.value ? {
    x1: r.left,
    y1: 0,
    x2: r.left,
    y2: l.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: l.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: a, topLine: c, rightLine: u, bottomLine: d, leftLine: p };
}
function kt(t) {
  return !!t.closest(".q-color-picker");
}
function $t(t, e) {
  L(
    document.querySelector("body"),
    "click",
    (l) => {
      console.log("hookPageMouseEvent click", l.target);
      const o = l.target;
      o.closest("[layout-tool-panel]") || kt(o) || (e.value = t.value, l.stopPropagation());
    },
    { capture: !0 }
  ), L(
    document.querySelector("body"),
    "mouseenter",
    (l) => {
      t.value && l.stopPropagation();
    },
    { capture: !0 }
  );
}
function zt(t, e) {
  let l = t.parentElement.closest(`${e.selectors}`);
  for (; l !== null; ) {
    if (window.getComputedStyle(l, null).getPropertyValue("display") === "flex")
      return { id: Q(l, e), dom: l };
    l = l.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const Ct = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function ie(t, e) {
  if (!Ct.has(we(t, e)))
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
function re(t, e) {
  const l = `.${e.idAttr}-${t}`;
  return document.querySelector(l);
}
function St(t, e) {
  function l(n, i) {
    return window.getComputedStyle(re(n, t), null).getPropertyValue(i);
  }
  function o(n) {
    const i = re(n, t);
    e.value = i;
  }
  return { queryStyle: l, selectTarget: o };
}
function Et(t) {
  var e = document.createElement("link");
  e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.setAttribute("type", "text/css"), document.head.appendChild(e);
}
const Lt = ["viewBox"], qt = {
  key: 0,
  class: "vis-executing-mask",
  style: { "z-index": "9999900", width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0" }
}, It = /* @__PURE__ */ D({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: l }) {
    const o = t, n = l;
    function i(w) {
      const S = y.value;
      if (!S)
        return;
      const M = Q(S, o.selectorConfig);
      if (!M)
        throw new Error("not found selected element");
      n("command", { id: M, options: w });
    }
    Be(i), K(() => {
      Et(o.styleUrl);
    });
    const { viewBox: s, styles: r } = bt(), { hoverElement: a, rectStyles: c, topLine: u, rightLine: d, bottomLine: p, leftLine: v } = Pt(o.selectorConfig), { typeNameTagStyles: k, typeName: C } = wt(
      o.selectorConfig,
      a
    ), y = m(null);
    $t(a, y), I(a, (w) => {
      if (w) {
        const S = Q(w, o.selectorConfig);
        n("hoverChange", { id: S });
        return;
      }
      n("hoverChange", { id: null });
    }), I(y, (w) => {
      const S = {
        isFlex: !1,
        direction: null
      };
      if (w) {
        const M = Q(w, o.selectorConfig), _ = zt(w, o.selectorConfig);
        let W = {
          isFlex: !1,
          direction: null
        };
        _ && (W = ie(_.dom, o.selectorConfig)), n("selectedChange", {
          id: M,
          parentBoxId: _ !== null ? _.id : null,
          flexInfo: ie(w, o.selectorConfig),
          parentFlexInfo: W
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: S,
        parentFlexInfo: S
      });
    }), e(St(o.selectorConfig, y)), Te(y);
    const q = Ae();
    return (w, S) => (T(), We(He, { to: "body" }, [
      (T(), A("svg", {
        class: "vis-hover",
        viewBox: x(s),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: z([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, x(r)])
      }, [
        P("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: z(x(c))
        }, null, 4),
        P("line", V({ class: "top" }, x(u), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        P("line", V({ class: "right" }, x(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        P("line", V({ class: "bottom" }, x(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        P("line", V({ class: "left" }, x(v), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Lt)),
      f(_t, {
        "selected-element": y.value,
        selectorConfig: o.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      f(xt, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "300px" }
      }, {
        default: h(() => [
          f(nt)
        ]),
        _: 1
      }),
      x(q) ? (T(), A("div", qt)) : se("", !0),
      P("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: z([x(k), { "z-index": "9999999" }])
      }, H(x(C)), 5)
    ]));
  }
});
export {
  It as default
};
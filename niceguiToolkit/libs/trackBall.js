const m = Vue.ref
const V = Vue.watch
const g = Vue.computed
const D = Vue.defineComponent
const H = Vue.openBlock
const F = Vue.createElementBlock
const C = Vue.normalizeStyle
const w = Vue.createElementVNode
const W = Vue.toDisplayString
const f = Vue.createVNode
const E = Vue.resolveComponent
const v = Vue.withCtx
const x = Vue.unref
const U = Vue.isRef
const A = Vue.createTextVNode
const xe = Vue.createCommentVNode
const be = Vue.pushScopeId
const we = Vue.popScopeId
const Pe = Vue.withDirectives
const ke = Vue.vShow
const $e = Vue.toRefs
const ze = Vue.customRef
const Ce = Vue.getCurrentScope
const Se = Vue.onScopeDispose
const ie = Vue.getCurrentInstance
const K = Vue.onMounted
const Ee = Vue.nextTick
const Le = Vue.readonly
const qe = Vue.watchEffect
const se = Vue.reactive
const q = Vue.mergeProps
const le = Vue.renderSlot
const Ve = Vue.createBlock
const Ie = Vue.Teleport
function We(t) {
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
function He(t, e, l) {
  const o = l ?? m(0);
  return V(t, (n) => {
    if (!n)
      return;
    const r = We(e);
    n.style.cursor = r.getCursorIcon();
    const s = r.getMoveIncrementHandler(), i = {
      x: 0,
      y: 0
    }, a = (u) => {
      o.value += s(i, u), i.x = u.x, i.y = u.y;
    };
    n.addEventListener(
      "mousedown",
      (u) => {
        u.stopPropagation(), document.querySelector("body").style.cursor = n.style.cursor, i.x = u.x, i.y = u.y, document.addEventListener("mousemove", a);
      },
      { capture: !0 }
    ), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", a), document.querySelector("body").style.cursor = "default";
    });
  }), o;
}
let ae = null;
function Te(t) {
  ae = t;
}
function Ae(t) {
  ae(t);
}
function ce(t) {
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
function Me(t) {
  V(t, (e) => {
    if (!e) {
      j.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const l = ce(e);
    j.forEach((o, n) => {
      o.value = l.getStyle(n);
    });
  });
}
function Fe(t) {
  return j.has(t) || j.set(t, m(null)), j.get(t);
}
function R(t, e) {
  const l = Fe(t);
  return g({
    get: () => l.value,
    set: (n) => {
      const r = {
        action: "style",
        commandType: "set",
        values: { [t]: n }
      }, s = e ? e(n) : [];
      Ae([r, ...s]), l.value = n;
    }
  });
}
const Be = /* @__PURE__ */ D({
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
      const c = /(-?\d+)([a-zA-Z%]+)/, d = l.value.match(c), p = parseFloat(d[1]), h = d[2];
      return { value: p, unit: h };
    });
    let n = o.value.value, r = o.value.unit;
    const s = g({
      get: () => o.value.value,
      set: (c) => {
        n = c, l.value = `${n}${r}`;
      }
    });
    g({
      get: () => o.value.unit,
      set: (c) => {
        r = c, l.value = `${n}${r}`;
      }
    });
    const i = m(null);
    He(i, e.direction, s);
    const a = {
      "clip-path": e.clipPath
    };
    function u() {
    }
    return (c, d) => (H(), F("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: C([{ display: "flex", "justify-content": "center", "align-items": "center" }, a])
    }, [
      w("div", { onClick: u }, [
        w("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, W(s.value), 513)
      ])
    ], 512));
  }
});
const ue = (t, e) => {
  const l = t.__vccOpts || t;
  for (const [o, n] of e)
    l[o] = n;
  return l;
}, M = /* @__PURE__ */ ue(Be, [["__scopeId", "data-v-db7c4047"]]), Oe = { class: "relative w-full h-full" }, Ne = /* @__PURE__ */ w("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin", -1), De = /* @__PURE__ */ D({
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
    return (n, r) => (H(), F("div", Oe, [
      w("p", {
        class: "m-0 p-0 absolute pointer-events-none",
        style: C([{ top: `${e.verticalHeightPercent}%`, left: `${e.horizontalWidthPercent}%` }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
      }, " padding", 4),
      Ne,
      f(M, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "margin-left",
        "clip-path": l.left.clipPath,
        style: C([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "margin-top",
        "clip-path": l.up.clipPath,
        style: C([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute h-full right-0",
        direction: "right",
        "style-name": "margin-right",
        "clip-path": l.right.clipPath,
        style: C([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute bottom-0 w-full",
        direction: "bottom",
        "style-name": "margin-bottom",
        "clip-path": l.bottom.clipPath,
        style: C([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute h-full",
        direction: "left",
        "style-name": "padding-left",
        "clip-path": o.left.clipPath,
        style: C([{ left: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute w-full",
        direction: "up",
        "style-name": "padding-top",
        "clip-path": o.up.clipPath,
        style: C([{ top: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute h-full",
        direction: "right",
        "style-name": "padding-right",
        "clip-path": o.right.clipPath,
        style: C([{ right: `${e.horizontalWidthPercent}%`, width: `${e.horizontalWidthPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"]),
      f(M, {
        class: "absolute w-full",
        direction: "bottom",
        "style-name": "padding-bottom",
        "clip-path": o.bottom.clipPath,
        style: C([{ bottom: `${e.verticalHeightPercent}%`, height: `${e.verticalHeightPercent}%` }, { "background-color": "#c84848" }])
      }, null, 8, ["clip-path", "style"])
    ]));
  }
}), de = {
  selectTarget: null
};
function Ue(t) {
  de.selectTarget = t;
}
function pe() {
  return de;
}
const fe = (t) => (be("data-v-c97dc6b2"), t = t(), we(), t), Ye = { class: "col no-wrap" }, Xe = /* @__PURE__ */ fe(() => /* @__PURE__ */ w("span", { class: "item-title text-capitalize" }, "display ", -1)), Re = { key: 0 }, je = /* @__PURE__ */ fe(() => /* @__PURE__ */ w("span", { class: "item-title text-caption text-capitalize" }, "direction", -1)), Ge = { class: "item-title text-left text-caption text-capitalize" }, Qe = { class: "item-title text-left text-caption text-capitalize" }, Ze = /* @__PURE__ */ D({
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
    }), r = R("justify-content"), s = g(() => l.value === "row" ? {
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
    }), i = pe().selectTarget, a = g(() => ce(i.value).getFlexBoxInfo());
    return V(a, (u) => {
      l.value = u.direction;
    }), (u, c) => {
      const d = E("q-tooltip"), p = E("q-icon"), h = E("q-btn-toggle"), $ = E("q-item"), S = E("q-separator"), y = E("q-btn"), P = E("q-list");
      return H(), F("div", Ye, [
        f(P, { bordered: "" }, {
          default: v(() => [
            f($, { class: "items-center gap-2 px-3 py-2" }, {
              default: v(() => [
                Xe,
                f(h, {
                  size: "sm",
                  padding: "4px",
                  modelValue: x(e),
                  "onUpdate:modelValue": c[0] || (c[0] = (k) => U(e) ? e.value = k : null),
                  "toggle-color": "primary",
                  options: [
                    { value: "block", slot: "block" },
                    { value: "flex", slot: "flex" }
                  ]
                }, {
                  block: v(() => [
                    f(p, { name: "inbox" }, {
                      default: v(() => [
                        f(d, { style: { "z-index": "99999999" } }, {
                          default: v(() => [
                            A(" block ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  flex: v(() => [
                    f(p, { name: "inventory_2" }, {
                      default: v(() => [
                        f(d, { style: { "z-index": "99999999" } }, {
                          default: v(() => [
                            A(" flex box ")
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
            f(S),
            a.value.isFlex ? (H(), F("div", Re, [
              f($, { class: "items-center gap-2 px-3 py-2" }, {
                default: v(() => [
                  je,
                  f(h, {
                    modelValue: x(l),
                    "onUpdate:modelValue": c[1] || (c[1] = (k) => U(l) ? l.value = k : null),
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
              f($, { class: "items-center gap-2 px-3 py-2" }, {
                default: v(() => [
                  w("span", Ge, W(n.value.title), 1),
                  f(h, {
                    modelValue: x(o),
                    "onUpdate:modelValue": c[2] || (c[2] = (k) => U(o) ? o.value = k : null),
                    padding: "8px",
                    size: "sm",
                    "toggle-color": "primary",
                    options: [
                      { value: "start", slot: "start" },
                      { value: "center", slot: "center" },
                      { value: "end", slot: "end" }
                    ]
                  }, {
                    start: v(() => [
                      f(p, {
                        name: n.value.start.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(n.value.start.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    center: v(() => [
                      f(p, {
                        name: n.value.center.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(n.value.center.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    end: v(() => [
                      f(p, {
                        name: n.value.end.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(n.value.end.tooltipLabel), 1)
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
              f($, { class: "items-center gap-2 px-3 py-2" }, {
                default: v(() => [
                  w("span", Qe, W(s.value.title), 1),
                  f(h, {
                    modelValue: x(r),
                    "onUpdate:modelValue": c[3] || (c[3] = (k) => U(r) ? r.value = k : null),
                    padding: "8px",
                    size: "sm",
                    "toggle-color": "primary",
                    options: [
                      { value: "start", slot: "start" },
                      { value: "center", slot: "center" },
                      { value: "end", slot: "end" }
                    ]
                  }, {
                    start: v(() => [
                      f(p, {
                        name: s.value.start.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(s.value.start.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    center: v(() => [
                      f(p, {
                        name: s.value.center.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(s.value.center.tooltipLabel), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["name"])
                    ]),
                    end: v(() => [
                      f(p, {
                        name: s.value.end.icon
                      }, {
                        default: v(() => [
                          f(d, { style: { "z-index": "99999999" } }, {
                            default: v(() => [
                              A(W(s.value.end.tooltipLabel), 1)
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
            ])) : xe("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Je = /* @__PURE__ */ ue(Ze, [["__scopeId", "data-v-c97dc6b2"]]), Ke = /* @__PURE__ */ D({
  __name: "MainPanel",
  setup(t) {
    const e = m("style"), l = pe().selectTarget;
    Me(l);
    const o = g(() => !!l.value);
    return (n, r) => {
      const s = E("q-tab"), i = E("q-tabs"), a = E("q-expansion-item"), u = E("q-separator"), c = E("q-list"), d = E("q-tab-panel"), p = E("q-tab-panels");
      return H(), F("div", null, [
        f(i, {
          class: "text-teal",
          modelValue: e.value,
          "onUpdate:modelValue": r[0] || (r[0] = (h) => e.value = h)
        }, {
          default: v(() => [
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
        Pe(f(p, {
          modelValue: e.value,
          "onUpdate:modelValue": r[1] || (r[1] = (h) => e.value = h),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: v(() => [
            f(d, { name: "style" }, {
              default: v(() => [
                f(c, { bordered: "" }, {
                  default: v(() => [
                    f(a, {
                      "expand-separator": "",
                      label: "布局",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: v(() => [
                        f(Je)
                      ]),
                      _: 1
                    }),
                    f(u),
                    f(a, {
                      "expand-separator": "",
                      label: "空间",
                      "header-class": "text-red-1 bg-accent",
                      "expand-icon-class": "text-red-1"
                    }, {
                      default: v(() => [
                        f(De, { style: { width: "100%", height: "8rem" } })
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
          [ke, o.value]
        ])
      ]);
    };
  }
});
function N(t) {
  return Ce() ? (Se(t), !0) : !1;
}
function z(t) {
  return typeof t == "function" ? t() : x(t);
}
const G = typeof window < "u" && typeof document < "u", et = Object.prototype.toString, tt = (t) => et.call(t) === "[object Object]", nt = () => {
};
function lt(t, e = {}) {
  if (!U(t))
    return $e(t);
  const l = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const o in t.value)
    l[o] = ze(() => ({
      get() {
        return t.value[o];
      },
      set(n) {
        var r;
        if ((r = z(e.replaceRef)) != null ? r : !0)
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
function he(t, e = !0) {
  ie() ? K(t) : e ? t() : Ee(t);
}
function ot(t, e = 1e3, l = {}) {
  const {
    immediate: o = !0,
    immediateCallback: n = !1
  } = l;
  let r = null;
  const s = m(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function a() {
    s.value = !1, i();
  }
  function u() {
    const c = z(e);
    c <= 0 || (s.value = !0, n && t(), i(), r = setInterval(t, c));
  }
  if (o && G && u(), U(e) || typeof e == "function") {
    const c = V(e, () => {
      s.value && G && u();
    });
    N(c);
  }
  return N(a), {
    isActive: s,
    pause: a,
    resume: u
  };
}
function Y(t) {
  var e;
  const l = z(t);
  return (e = l == null ? void 0 : l.$el) != null ? e : l;
}
const B = G ? window : void 0, rt = G ? window.document : void 0;
function L(...t) {
  let e, l, o, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([l, o, n] = t, e = B) : [e, l, o, n] = t, !e)
    return nt;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, d, p, h) => (c.addEventListener(d, p, h), () => c.removeEventListener(d, p, h)), a = V(
    () => [Y(e), z(n)],
    ([c, d]) => {
      if (s(), !c)
        return;
      const p = tt(d) ? { ...d } : d;
      r.push(
        ...l.flatMap((h) => o.map(($) => i(c, h, $, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), s();
  };
  return N(u), u;
}
function it() {
  const t = m(!1);
  return ie() && K(() => {
    t.value = !0;
  }), t;
}
function Z(t) {
  const e = it();
  return g(() => (e.value, !!t()));
}
function st(t, e = {}) {
  const {
    immediate: l = !0,
    fpsLimit: o = void 0,
    window: n = B
  } = e, r = m(!1), s = o ? 1e3 / o : null;
  let i = 0, a = null;
  function u(p) {
    if (!r.value || !n)
      return;
    const h = p - (i || p);
    if (s && h < s) {
      a = n.requestAnimationFrame(u);
      return;
    }
    t({ delta: h, timestamp: p }), i = p, a = n.requestAnimationFrame(u);
  }
  function c() {
    !r.value && n && (r.value = !0, a = n.requestAnimationFrame(u));
  }
  function d() {
    r.value = !1, a != null && n && (n.cancelAnimationFrame(a), a = null);
  }
  return l && c(), N(d), {
    isActive: Le(r),
    pause: d,
    resume: c
  };
}
function at(t, e = {}) {
  const { window: l = B } = e, o = Z(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let n;
  const r = m(!1), s = (u) => {
    r.value = u.matches;
  }, i = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, a = qe(() => {
    o.value && (i(), n = l.matchMedia(z(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), r.value = n.matches);
  });
  return N(() => {
    a(), i(), n = void 0;
  }), r;
}
function ct(t, e, l = {}) {
  const { window: o = B, ...n } = l;
  let r;
  const s = Z(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, a = V(
    () => Y(t),
    (c) => {
      i(), s.value && o && c && (r = new MutationObserver(e), r.observe(c, n));
    },
    { immediate: !0 }
  ), u = () => {
    i(), a();
  };
  return N(u), {
    isSupported: s,
    stop: u
  };
}
function ut(t, e = {}) {
  var l, o;
  const {
    pointerTypes: n,
    preventDefault: r,
    stopPropagation: s,
    exact: i,
    onMove: a,
    onEnd: u,
    onStart: c,
    initialValue: d,
    axis: p = "both",
    draggingElement: h = B,
    containerElement: $,
    handle: S = t
  } = e, y = m(
    (l = z(d)) != null ? l : { x: 0, y: 0 }
  ), P = m(), k = (b) => n ? n.includes(b.pointerType) : !0, I = (b) => {
    z(r) && b.preventDefault(), z(s) && b.stopPropagation();
  }, T = (b) => {
    var X;
    if (!k(b) || z(i) && b.target !== z(t))
      return;
    const te = ((X = z($)) != null ? X : z(t)).getBoundingClientRect(), ne = {
      x: b.clientX - te.left,
      y: b.clientY - te.top
    };
    (c == null ? void 0 : c(ne, b)) !== !1 && (P.value = ne, I(b));
  }, _ = (b) => {
    if (!k(b) || !P.value)
      return;
    let { x: X, y: J } = y.value;
    (p === "x" || p === "both") && (X = b.clientX - P.value.x), (p === "y" || p === "both") && (J = b.clientY - P.value.y), y.value = {
      x: X,
      y: J
    }, a == null || a(y.value, b), I(b);
  }, O = (b) => {
    k(b) && P.value && (P.value = void 0, u == null || u(y.value, b), I(b));
  };
  if (G) {
    const b = { capture: (o = e.capture) != null ? o : !0 };
    L(S, "pointerdown", T, b), L(h, "pointermove", _, b), L(h, "pointerup", O, b);
  }
  return {
    ...lt(y),
    position: y,
    isDragging: g(() => !!P.value),
    style: g(
      () => `left:${y.value.x}px;top:${y.value.y}px;`
    )
  };
}
function dt(t, e, l = {}) {
  const { window: o = B, ...n } = l;
  let r;
  const s = Z(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, a = g(() => Array.isArray(t) ? t.map((d) => Y(d)) : [Y(t)]), u = V(
    a,
    (d) => {
      if (i(), s.value && o) {
        r = new ResizeObserver(e);
        for (const p of d)
          p && r.observe(p, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    i(), u();
  };
  return N(c), {
    isSupported: s,
    stop: c
  };
}
function ve(t, e = {}) {
  const {
    reset: l = !0,
    windowResize: o = !0,
    windowScroll: n = !0,
    immediate: r = !0
  } = e, s = m(0), i = m(0), a = m(0), u = m(0), c = m(0), d = m(0), p = m(0), h = m(0);
  function $() {
    const S = Y(t);
    if (!S) {
      l && (s.value = 0, i.value = 0, a.value = 0, u.value = 0, c.value = 0, d.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const y = S.getBoundingClientRect();
    s.value = y.height, i.value = y.bottom, a.value = y.left, u.value = y.right, c.value = y.top, d.value = y.width, p.value = y.x, h.value = y.y;
  }
  return dt(t, $), V(() => Y(t), (S) => !S && $()), n && L("scroll", $, { capture: !0, passive: !0 }), o && L("resize", $, { passive: !0 }), he(() => {
    r && $();
  }), {
    height: s,
    bottom: i,
    left: a,
    right: u,
    top: c,
    width: d,
    x: p,
    y: h,
    update: $
  };
}
function pt(t) {
  const {
    x: e,
    y: l,
    document: o = rt,
    multiple: n,
    interval: r = "requestAnimationFrame",
    immediate: s = !0
  } = t, i = Z(() => z(n) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), a = m(null), u = () => {
    var d, p;
    a.value = z(n) ? (d = o == null ? void 0 : o.elementsFromPoint(z(e), z(l))) != null ? d : [] : (p = o == null ? void 0 : o.elementFromPoint(z(e), z(l))) != null ? p : null;
  }, c = r === "requestAnimationFrame" ? st(u, { immediate: s }) : ot(u, r, { immediate: s });
  return {
    isSupported: i,
    element: a,
    ...c
  };
}
const ft = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function me(t = {}) {
  const {
    type: e = "page",
    touch: l = !0,
    resetOnTouchEnds: o = !1,
    initialValue: n = { x: 0, y: 0 },
    window: r = B,
    target: s = r,
    scroll: i = !0,
    eventFilter: a
  } = t;
  let u = null;
  const c = m(n.x), d = m(n.y), p = m(null), h = typeof e == "function" ? e : ft[e], $ = (_) => {
    const O = h(_);
    u = _, O && ([c.value, d.value] = O, p.value = "mouse");
  }, S = (_) => {
    if (_.touches.length > 0) {
      const O = h(_.touches[0]);
      O && ([c.value, d.value] = O, p.value = "touch");
    }
  }, y = () => {
    if (!u || !r)
      return;
    const _ = h(u);
    u instanceof MouseEvent && _ && (c.value = _[0] + r.scrollX, d.value = _[1] + r.scrollY);
  }, P = () => {
    c.value = n.x, d.value = n.y;
  }, k = a ? (_) => a(() => $(_), {}) : (_) => $(_), I = a ? (_) => a(() => S(_), {}) : (_) => S(_), T = a ? () => a(() => y(), {}) : () => y();
  if (s) {
    const _ = { passive: !0 };
    L(s, ["mousemove", "dragover"], k, _), l && e !== "movement" && (L(s, ["touchstart", "touchmove"], I, _), o && L(s, "touchend", P, _)), i && e === "page" && L(r, "scroll", T, { passive: !0 });
  }
  return {
    x: c,
    y: d,
    sourceType: p
  };
}
function ee(t = {}) {
  const {
    window: e = B,
    initialWidth: l = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: r = !0
  } = t, s = m(l), i = m(o), a = () => {
    e && (r ? (s.value = e.innerWidth, i.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, i.value = e.document.documentElement.clientHeight));
  };
  if (a(), he(a), L("resize", a, { passive: !0 }), n) {
    const u = at("(orientation: portrait)");
    V(u, () => a());
  }
  return { width: s, height: i };
}
function ge() {
  const { width: t, height: e } = ee(), l = g(() => `0 0 ${t.value} ${e.value}`), o = g(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: l,
    styles: o
  };
}
function ye(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function _e(t, e) {
  if (!ye(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.elementTypeAttr))
      return l.slice(e.elementTypeAttr.length + 1);
  return null;
}
function Q(t, e) {
  if (!ye(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.idAttr))
      return parseInt(l.slice(e.idAttr.length + 1));
  return null;
}
function ht(t, e) {
  const l = g(() => t.value ? t.value : null), o = ge(), n = se(ve(t));
  ct(
    l,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), L("scroll", n.update, !0);
  const r = g(() => l.value ? {
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
  }), i = g(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), a = g(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), u = g(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), c = g(() => l.value ? {
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
  }), h = g(() => l.value ? {
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
    p3: a,
    p4: u,
    p5: c,
    p6: d,
    p7: p,
    p8: h
  };
}
const vt = ["viewBox"], mt = /* @__PURE__ */ D({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, l = g(() => e.selectedElement), {
      svgConfig: { viewBox: o, styles: n },
      rectStyles: r,
      p1: s,
      p2: i,
      p3: a,
      p4: u,
      p5: c,
      p6: d,
      p7: p,
      p8: h
    } = ht(l, e.selectorConfig);
    return ($, S) => (H(), F("svg", {
      class: "vis-aiming",
      viewBox: x(o),
      version: "1.1",
      style: C([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, x(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      w("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: C(x(r))
      }, null, 4),
      w("circle", q({
        stroke: "hotpink",
        fill: "white"
      }, x(s), { r: "2" }), null, 16),
      w("circle", q({ fill: "hotpink" }, x(i), { r: "2" }), null, 16),
      w("circle", q({
        stroke: "hotpink",
        fill: "white"
      }, x(a), { r: "2" }), null, 16),
      w("circle", q({ fill: "hotpink" }, x(u), { r: "2" }), null, 16),
      w("circle", q({
        stroke: "hotpink",
        fill: "white"
      }, x(c), { r: "2" }), null, 16),
      w("circle", q({ fill: "hotpink" }, x(d), { r: "2" }), null, 16),
      w("circle", q({
        stroke: "hotpink",
        fill: "white"
      }, x(p), { r: "2" }), null, 16),
      w("circle", q({ fill: "hotpink" }, x(h), { r: "2" }), null, 16)
    ], 12, vt));
  }
}), gt = /* @__PURE__ */ D({
  __name: "Panel",
  setup(t) {
    const e = m(null), { style: l } = ut(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (o, n) => (H(), F("div", {
      style: C([x(l), { position: "fixed" }]),
      "layout-tool-panel": ""
    }, [
      w("div", {
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
}), yt = ge;
function _t(t, e) {
  const { width: l } = ee(), { x: o, y: n } = me({ type: "client" }), r = g(() => {
    let a = o.value, u = n.value;
    return l.value - o.value < 10 && (a -= 10), n.value < 10 && (u += 10), { x: a, y: u };
  }), s = g(() => e.value ? {
    display: "block",
    left: `${r.value.x}px`,
    top: `${r.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: g(() => e.value ? _e(e.value, t) : null),
    typeNameTagStyles: s
  };
}
function xt(t) {
  const { width: e, height: l } = ee(), { x: o, y: n } = me({ type: "client" }), { element: r } = pt({ x: o, y: n }), s = g(() => {
    if (r.value === null)
      return null;
    const h = r.value.closest(t.selectors);
    return h === null || h.closest("[layout-tool-panel]") ? null : h;
  }), i = se(ve(s));
  L("scroll", i.update, !0);
  const a = g(() => s.value ? {
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
  }), u = g(() => s.value ? {
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
  }), c = g(() => s.value ? {
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
  }), d = g(() => s.value ? {
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
  }), p = g(() => s.value ? {
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
  return { hoverElement: s, rectStyles: a, topLine: u, rightLine: c, bottomLine: d, leftLine: p };
}
function bt(t) {
  return !!t.closest(".q-color-picker");
}
function wt(t, e) {
  L(
    document.querySelector("body"),
    "click",
    (l) => {
      const o = l.target;
      o.closest("[layout-tool-panel]") || bt(o) || (e.value = t.value, l.stopPropagation());
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
function Pt(t, e) {
  let l = t.parentElement.closest(`${e.selectors}`);
  for (; l !== null; ) {
    if (window.getComputedStyle(l, null).getPropertyValue("display") === "flex")
      return { id: Q(l, e), dom: l };
    l = l.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const kt = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function oe(t, e) {
  if (!kt.has(_e(t, e)))
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
function $t(t, e) {
  function l(n, r) {
    return window.getComputedStyle(re(n, t), null).getPropertyValue(r);
  }
  function o(n) {
    const r = re(n, t);
    e.value = r;
  }
  return { queryStyle: l, selectTarget: o };
}
function zt(t) {
  var e = document.createElement("link");
  e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.setAttribute("type", "text/css"), document.head.appendChild(e);
}
const Ct = ["viewBox"], Et = /* @__PURE__ */ D({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: l }) {
    const o = t, n = l;
    function r(P) {
      const k = y.value;
      if (!k)
        throw new Error("No components are selected");
      const I = Q(k, o.selectorConfig);
      if (!I)
        throw new Error("not found selected element");
      n("command", { id: I, options: P });
    }
    Te(r), K(() => {
      zt(o.styleUrl);
    });
    const { viewBox: s, styles: i } = yt(), { hoverElement: a, rectStyles: u, topLine: c, rightLine: d, bottomLine: p, leftLine: h } = xt(o.selectorConfig), { typeNameTagStyles: $, typeName: S } = _t(
      o.selectorConfig,
      a
    ), y = m(null);
    return wt(a, y), V(a, (P) => {
      if (P) {
        const k = Q(P, o.selectorConfig);
        n("hoverChange", { id: k });
        return;
      }
      n("hoverChange", { id: null });
    }), V(y, (P) => {
      const k = {
        isFlex: !1,
        direction: null
      };
      if (P) {
        const I = Q(P, o.selectorConfig), T = Pt(P, o.selectorConfig);
        let _ = {
          isFlex: !1,
          direction: null
        };
        T && (_ = oe(T.dom, o.selectorConfig)), n("selectedChange", {
          id: I,
          parentBoxId: T !== null ? T.id : null,
          flexInfo: oe(P, o.selectorConfig),
          parentFlexInfo: _
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: k,
        parentFlexInfo: k
      });
    }), e($t(o.selectorConfig, y)), Ue(y), (P, k) => (H(), Ve(Ie, { to: "body" }, [
      (H(), F("svg", {
        class: "vis-hover",
        viewBox: x(s),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: C([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, x(i)])
      }, [
        w("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: C(x(u))
        }, null, 4),
        w("line", q({ class: "top" }, x(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        w("line", q({ class: "right" }, x(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        w("line", q({ class: "bottom" }, x(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        w("line", q({ class: "left" }, x(h), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Ct)),
      f(mt, {
        "selected-element": y.value,
        selectorConfig: o.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      f(gt, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "300px" }
      }, {
        default: v(() => [
          f(Ke)
        ]),
        _: 1
      }),
      w("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: C([x($), { "z-index": "9999999" }])
      }, W(x(S)), 5)
    ]));
  }
});
export {
  Et as default
};
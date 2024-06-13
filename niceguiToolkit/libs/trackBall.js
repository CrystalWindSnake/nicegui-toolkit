const b = Vue.ref
const H = Vue.watch
const h = Vue.computed
const Q = Vue.toValue
const B = Vue.defineComponent
const T = Vue.openBlock
const D = Vue.createElementBlock
const S = Vue.normalizeStyle
const _ = Vue.createElementVNode
const q = Vue.toDisplayString
const $ = Vue.resolveComponent
const J = Vue.createBlock
const m = Vue.withCtx
const u = Vue.createVNode
const g = Vue.unref
const N = Vue.isRef
const F = Vue.createTextVNode
const le = Vue.createCommentVNode
const $e = Vue.pushScopeId
const ke = Vue.popScopeId
const Ce = Vue.withDirectives
const Le = Vue.vShow
const Se = Vue.toRefs
const qe = Vue.customRef
const Ee = Vue.getCurrentScope
const Ie = Vue.onScopeDispose
const fe = Vue.getCurrentInstance
const oe = Vue.onMounted
const Ve = Vue.nextTick
const Fe = Vue.readonly
const Te = Vue.watchEffect
const me = Vue.reactive
const V = Vue.mergeProps
const ne = Vue.renderSlot
const We = Vue.Teleport
const ve = {
  selectTarget: null
};
function He(t) {
  ve.selectTarget = t;
}
function ie() {
  return ve;
}
let he = b(!1);
function ue(t) {
  he.value = t ?? !0;
}
function Ae() {
  return he;
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
function Be(t, e, l) {
  const o = l ?? b(0);
  return H(t, (n) => {
    if (!n)
      return;
    const i = Me(e);
    n.style.cursor = i.getCursorIcon();
    const a = i.getMoveIncrementHandler(), r = {
      x: 0,
      y: 0
    }, s = (c) => {
      o.value += a(r, c), r.x = c.x, r.y = c.y;
    };
    n.addEventListener(
      "mousedown",
      (c) => {
        c.stopPropagation(), ue(), document.querySelector("body").style.cursor = n.style.cursor, r.x = c.x, r.y = c.y, document.addEventListener("mousemove", s);
      },
      { capture: !0 }
    ), document.addEventListener(
      "mouseup",
      (c) => {
        document.removeEventListener("mousemove", s), document.querySelector("body").style.cursor = "default", ue(!1), c.stopPropagation();
      },
      { capture: !0 }
    );
  }), o;
}
let ge = null;
function Oe(t) {
  ge = t;
}
function Ne(t) {
  ge(t);
}
function K(t) {
  function e(n) {
    return h(() => {
      const a = Q(t);
      return a ? window.getComputedStyle(a, null).getPropertyValue(Q(n)) : "";
    });
  }
  function l(n) {
    const i = n ?? e("display");
    return h(() => Q(t) ? {
      isFlex: i.value === "flex",
      direction: e("flex-direction").value,
      justifyContent: e("justify-content").value,
      alignItem: e("align-items").value
    } : {
      isFlex: !1,
      direction: "",
      justifyContent: "",
      alignItem: ""
    });
  }
  function o() {
    return h(() => {
      const i = Q(t);
      if (!i || !i.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const r = K(i.parentElement).getFlexBoxInfo();
      return {
        isFlex: r.value.isFlex,
        direction: r.value.direction
      };
    });
  }
  return {
    getStyle: e,
    getFlexBoxInfo: l,
    getParentFlexBoxInfo: o
  };
}
const G = /* @__PURE__ */ new Map();
function De(t) {
  H(t, (e) => {
    if (!e) {
      G.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const l = K(e);
    G.forEach((o, n) => {
      o.value = l.getStyle(n).value;
    });
  });
}
function Ue(t) {
  return G.has(t) || G.set(t, b(null)), G.get(t);
}
function Y(t, e) {
  const l = Ue(t);
  return h({
    get: () => l.value,
    set: (n) => {
      const i = {
        action: "style",
        commandType: "set",
        values: { [t]: n }
      }, a = e ? e(n) : [];
      Ne([i, ...a]), l.value = n;
    }
  });
}
const Ye = /* @__PURE__ */ B({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {}
  },
  setup(t) {
    const e = t, l = Y(e.styleName), o = h(() => {
      if (!l.value)
        return {
          value: 0,
          unit: "px"
        };
      const p = /(-?\d+)([a-zA-Z%]+)/, d = l.value.match(p), f = parseFloat(d[1]), v = d[2];
      return { value: f, unit: v };
    });
    let n = o.value.value, i = o.value.unit;
    const a = h({
      get: () => o.value.value,
      set: (p) => {
        n = p, l.value = `${n}${i}`;
      }
    });
    h({
      get: () => o.value.unit,
      set: (p) => {
        i = p, l.value = `${n}${i}`;
      }
    });
    const r = b(null);
    Be(r, e.direction, a);
    const s = {
      "clip-path": e.clipPath
    };
    function c() {
    }
    return (p, d) => (T(), D("div", {
      ref_key: "target",
      ref: r,
      class: "target",
      style: S([{ display: "flex", "justify-content": "center", "align-items": "center" }, s])
    }, [
      _("div", { onClick: c }, [
        _("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, q(a.value), 513)
      ])
    ], 512));
  }
});
const re = (t, e) => {
  const l = t.__vccOpts || t;
  for (const [o, n] of e)
    l[o] = n;
  return l;
}, M = /* @__PURE__ */ re(Ye, [["__scopeId", "data-v-0659f7ca"]]), Xe = {
  class: "relative w-full",
  style: { height: "8rem" }
}, je = /* @__PURE__ */ _("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin ", -1), Ge = /* @__PURE__ */ B({
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
    return (n, i) => {
      const a = $("q-expansion-item");
      return T(), J(a, {
        "expand-separator": "",
        label: "Spacing(间距)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: m(() => [
          _("div", Xe, [
            _("p", {
              class: "m-0 p-0 absolute pointer-events-none",
              style: S([{
                top: `${e.verticalHeightPercent}%`,
                left: `${e.horizontalWidthPercent}%`
              }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
            }, " padding ", 4),
            je,
            u(M, {
              class: "absolute h-full",
              direction: "left",
              "style-name": "margin-left",
              "clip-path": l.left.clipPath,
              style: S([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute w-full",
              direction: "up",
              "style-name": "margin-top",
              "clip-path": l.up.clipPath,
              style: S([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute h-full right-0",
              direction: "right",
              "style-name": "margin-right",
              "clip-path": l.right.clipPath,
              style: S([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute bottom-0 w-full",
              direction: "bottom",
              "style-name": "margin-bottom",
              "clip-path": l.bottom.clipPath,
              style: S([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "left",
              "style-name": "padding-left",
              "clip-path": o.left.clipPath,
              style: S({
                left: `${e.horizontalWidthPercent}%`,
                width: `${e.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "up",
              "style-name": "padding-top",
              "clip-path": o.up.clipPath,
              style: S([{
                top: `${e.verticalHeightPercent}%`,
                height: `${e.verticalHeightPercent}%`
              }, {}])
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "right",
              "style-name": "padding-right",
              "clip-path": o.right.clipPath,
              style: S({
                right: `${e.horizontalWidthPercent}%`,
                width: `${e.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            u(M, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "bottom",
              "style-name": "padding-bottom",
              "clip-path": o.bottom.clipPath,
              style: S({
                bottom: `${e.verticalHeightPercent}%`,
                height: `${e.verticalHeightPercent}%`
              })
            }, null, 8, ["clip-path", "style"])
          ])
        ]),
        _: 1
      });
    };
  }
}), ye = (t) => ($e("data-v-a7f87a6a"), t = t(), ke(), t), Re = { class: "col no-wrap" }, Qe = /* @__PURE__ */ ye(() => /* @__PURE__ */ _("span", { class: "item-title text-capitalize" }, "display ", -1)), Ze = { key: 0 }, Je = /* @__PURE__ */ ye(() => /* @__PURE__ */ _("span", { class: "item-title text-caption text-capitalize" }, "direction", -1)), Ke = { class: "item-title text-left text-caption text-capitalize" }, et = { class: "item-title text-left text-caption text-capitalize" }, tt = /* @__PURE__ */ B({
  __name: "Layout",
  setup(t) {
    const e = Y("display"), l = Y("flex-direction"), o = Y("align-items"), n = h(() => l.value === "row" ? {
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
    }), i = Y("justify-content"), a = h(() => l.value === "row" ? {
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
    }), r = ie().selectTarget, c = K(r).getFlexBoxInfo(e);
    return (p, d) => {
      const f = $("q-tooltip"), v = $("q-icon"), z = $("q-btn-toggle"), L = $("q-item"), y = $("q-separator"), I = $("q-list"), k = $("q-expansion-item");
      return T(), J(k, {
        "expand-separator": "",
        label: "Layout(布局)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: m(() => [
          _("div", Re, [
            u(I, { bordered: "" }, {
              default: m(() => [
                u(L, { class: "items-center gap-2 px-3 py-2" }, {
                  default: m(() => [
                    Qe,
                    u(z, {
                      size: "sm",
                      padding: "4px",
                      modelValue: g(e),
                      "onUpdate:modelValue": d[0] || (d[0] = (P) => N(e) ? e.value = P : null),
                      "toggle-color": "primary",
                      options: [
                        { value: "block", slot: "block" },
                        { value: "flex", slot: "flex" }
                      ]
                    }, {
                      block: m(() => [
                        u(v, { name: "inbox" }, {
                          default: m(() => [
                            u(f, { style: { "z-index": "99999999" } }, {
                              default: m(() => [
                                F(" block ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      flex: m(() => [
                        u(v, { name: "inventory_2" }, {
                          default: m(() => [
                            u(f, { style: { "z-index": "99999999" } }, {
                              default: m(() => [
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
                u(y),
                g(c).isFlex ? (T(), D("div", Ze, [
                  u(L, { class: "items-center gap-2 px-3 py-2" }, {
                    default: m(() => [
                      Je,
                      u(z, {
                        modelValue: g(l),
                        "onUpdate:modelValue": d[1] || (d[1] = (P) => N(l) ? l.value = P : null),
                        padding: "8px",
                        size: "sm",
                        "toggle-color": "primary",
                        options: [
                          { value: "row", label: "Horizontal" },
                          { value: "column", label: "Vertical" }
                        ]
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  u(L, { class: "items-center gap-2 px-3 py-2" }, {
                    default: m(() => [
                      _("span", Ke, q(n.value.title), 1),
                      u(z, {
                        modelValue: g(o),
                        "onUpdate:modelValue": d[2] || (d[2] = (P) => N(o) ? o.value = P : null),
                        padding: "8px",
                        size: "sm",
                        "toggle-color": "primary",
                        options: [
                          { value: "start", slot: "start" },
                          { value: "center", slot: "center" },
                          { value: "end", slot: "end" }
                        ]
                      }, {
                        start: m(() => [
                          u(v, {
                            name: n.value.start.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(n.value.start.tooltipLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["name"])
                        ]),
                        center: m(() => [
                          u(v, {
                            name: n.value.center.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(n.value.center.tooltipLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["name"])
                        ]),
                        end: m(() => [
                          u(v, {
                            name: n.value.end.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(n.value.end.tooltipLabel), 1)
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
                  u(L, { class: "items-center gap-2 px-3 py-2" }, {
                    default: m(() => [
                      _("span", et, q(a.value.title), 1),
                      u(z, {
                        modelValue: g(i),
                        "onUpdate:modelValue": d[3] || (d[3] = (P) => N(i) ? i.value = P : null),
                        padding: "8px",
                        size: "sm",
                        "toggle-color": "primary",
                        options: [
                          { value: "start", slot: "start" },
                          { value: "center", slot: "center" },
                          { value: "end", slot: "end" }
                        ]
                      }, {
                        start: m(() => [
                          u(v, {
                            name: a.value.start.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(a.value.start.tooltipLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["name"])
                        ]),
                        center: m(() => [
                          u(v, {
                            name: a.value.center.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(a.value.center.tooltipLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["name"])
                        ]),
                        end: m(() => [
                          u(v, {
                            name: a.value.end.icon
                          }, {
                            default: m(() => [
                              u(f, { style: { "z-index": "99999999" } }, {
                                default: m(() => [
                                  F(q(a.value.end.tooltipLabel), 1)
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
                ])) : le("", !0)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
});
const nt = /* @__PURE__ */ re(tt, [["__scopeId", "data-v-a7f87a6a"]]), lt = { class: "col no-wrap" }, ot = { class: "item-title text-left text-caption text-capitalize" }, it = /* @__PURE__ */ B({
  __name: "FlexItem",
  setup(t) {
    const l = K(ie().selectTarget).getParentFlexBoxInfo(), o = Y("align-self"), n = h(() => l.value.direction === "row" ? {
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
    });
    return (i, a) => {
      const r = $("q-tooltip"), s = $("q-icon"), c = $("q-btn-toggle"), p = $("q-item"), d = $("q-list"), f = $("q-expansion-item");
      return g(l).isFlex ? (T(), J(f, {
        key: 0,
        "expand-separator": "",
        label: "FlexItem(Flex子元素)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: m(() => [
          _("div", lt, [
            u(d, { bordered: "" }, {
              default: m(() => [
                u(p, { class: "items-center gap-2 px-3 py-2" }, {
                  default: m(() => [
                    _("span", ot, q(n.value.title), 1),
                    u(c, {
                      modelValue: g(o),
                      "onUpdate:modelValue": a[0] || (a[0] = (v) => N(o) ? o.value = v : null),
                      padding: "8px",
                      size: "sm",
                      "toggle-color": "primary",
                      options: [
                        { value: "flex-start", slot: "start" },
                        { value: "center", slot: "center" },
                        { value: "flex-end", slot: "end" }
                      ]
                    }, {
                      start: m(() => [
                        u(s, {
                          name: n.value.start.icon
                        }, {
                          default: m(() => [
                            u(r, { style: { "z-index": "99999999" } }, {
                              default: m(() => [
                                F(q(n.value.start.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      center: m(() => [
                        u(s, {
                          name: n.value.center.icon
                        }, {
                          default: m(() => [
                            u(r, { style: { "z-index": "99999999" } }, {
                              default: m(() => [
                                F(q(n.value.center.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      end: m(() => [
                        u(s, {
                          name: n.value.end.icon
                        }, {
                          default: m(() => [
                            u(r, { style: { "z-index": "99999999" } }, {
                              default: m(() => [
                                F(q(n.value.end.tooltipLabel), 1)
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
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })) : le("", !0);
    };
  }
});
const rt = /* @__PURE__ */ re(it, [["__scopeId", "data-v-8082beae"]]), at = /* @__PURE__ */ B({
  __name: "MainPanel",
  setup(t) {
    const e = b("style"), l = ie().selectTarget;
    De(l);
    const o = h(() => !!l.value);
    return (n, i) => {
      const a = $("q-tab"), r = $("q-tabs"), s = $("q-separator"), c = $("q-list"), p = $("q-tab-panel"), d = $("q-tab-panels");
      return T(), D("div", null, [
        u(r, {
          class: "bg-secondary-5",
          modelValue: e.value,
          "onUpdate:modelValue": i[0] || (i[0] = (f) => e.value = f),
          align: "left",
          dense: "",
          "no-caps": ""
        }, {
          default: m(() => [
            u(a, {
              name: "style",
              label: "style"
            }),
            u(a, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        Ce(u(d, {
          modelValue: e.value,
          "onUpdate:modelValue": i[1] || (i[1] = (f) => e.value = f),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: m(() => [
            u(p, {
              name: "style",
              style: { padding: "0" }
            }, {
              default: m(() => [
                u(c, { bordered: "" }, {
                  default: m(() => [
                    u(rt),
                    u(nt),
                    u(s),
                    u(Ge)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]), [
          [Le, o.value]
        ])
      ]);
    };
  }
});
function U(t) {
  return Ee() ? (Ie(t), !0) : !1;
}
function C(t) {
  return typeof t == "function" ? t() : g(t);
}
const R = typeof window < "u" && typeof document < "u", st = Object.prototype.toString, ct = (t) => st.call(t) === "[object Object]", ut = () => {
};
function pt(t, e = {}) {
  if (!N(t))
    return Se(t);
  const l = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const o in t.value)
    l[o] = qe(() => ({
      get() {
        return t.value[o];
      },
      set(n) {
        var i;
        if ((i = C(e.replaceRef)) != null ? i : !0)
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
function _e(t, e = !0) {
  fe() ? oe(t) : e ? t() : Ve(t);
}
function dt(t, e = 1e3, l = {}) {
  const {
    immediate: o = !0,
    immediateCallback: n = !1
  } = l;
  let i = null;
  const a = b(!1);
  function r() {
    i && (clearInterval(i), i = null);
  }
  function s() {
    a.value = !1, r();
  }
  function c() {
    const p = C(e);
    p <= 0 || (a.value = !0, n && t(), r(), i = setInterval(t, p));
  }
  if (o && R && c(), N(e) || typeof e == "function") {
    const p = H(e, () => {
      a.value && R && c();
    });
    U(p);
  }
  return U(s), {
    isActive: a,
    pause: s,
    resume: c
  };
}
function X(t) {
  var e;
  const l = C(t);
  return (e = l == null ? void 0 : l.$el) != null ? e : l;
}
const O = R ? window : void 0, ft = R ? window.document : void 0;
function E(...t) {
  let e, l, o, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([l, o, n] = t, e = O) : [e, l, o, n] = t, !e)
    return ut;
  Array.isArray(l) || (l = [l]), Array.isArray(o) || (o = [o]);
  const i = [], a = () => {
    i.forEach((p) => p()), i.length = 0;
  }, r = (p, d, f, v) => (p.addEventListener(d, f, v), () => p.removeEventListener(d, f, v)), s = H(
    () => [X(e), C(n)],
    ([p, d]) => {
      if (a(), !p)
        return;
      const f = ct(d) ? { ...d } : d;
      i.push(
        ...l.flatMap((v) => o.map((z) => r(p, v, z, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), a();
  };
  return U(c), c;
}
function mt() {
  const t = b(!1);
  return fe() && oe(() => {
    t.value = !0;
  }), t;
}
function ee(t) {
  const e = mt();
  return h(() => (e.value, !!t()));
}
function vt(t, e = {}) {
  const {
    immediate: l = !0,
    fpsLimit: o = void 0,
    window: n = O
  } = e, i = b(!1), a = o ? 1e3 / o : null;
  let r = 0, s = null;
  function c(f) {
    if (!i.value || !n)
      return;
    const v = f - (r || f);
    if (a && v < a) {
      s = n.requestAnimationFrame(c);
      return;
    }
    t({ delta: v, timestamp: f }), r = f, s = n.requestAnimationFrame(c);
  }
  function p() {
    !i.value && n && (i.value = !0, s = n.requestAnimationFrame(c));
  }
  function d() {
    i.value = !1, s != null && n && (n.cancelAnimationFrame(s), s = null);
  }
  return l && p(), U(d), {
    isActive: Fe(i),
    pause: d,
    resume: p
  };
}
function ht(t, e = {}) {
  const { window: l = O } = e, o = ee(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let n;
  const i = b(!1), a = (c) => {
    i.value = c.matches;
  }, r = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", a) : n.removeListener(a));
  }, s = Te(() => {
    o.value && (r(), n = l.matchMedia(C(t)), "addEventListener" in n ? n.addEventListener("change", a) : n.addListener(a), i.value = n.matches);
  });
  return U(() => {
    s(), r(), n = void 0;
  }), i;
}
function gt(t, e, l = {}) {
  const { window: o = O, ...n } = l;
  let i;
  const a = ee(() => o && "MutationObserver" in o), r = () => {
    i && (i.disconnect(), i = void 0);
  }, s = H(
    () => X(t),
    (p) => {
      r(), a.value && o && p && (i = new MutationObserver(e), i.observe(p, n));
    },
    { immediate: !0 }
  ), c = () => {
    r(), s();
  };
  return U(c), {
    isSupported: a,
    stop: c
  };
}
function yt(t, e = {}) {
  var l, o;
  const {
    pointerTypes: n,
    preventDefault: i,
    stopPropagation: a,
    exact: r,
    onMove: s,
    onEnd: c,
    onStart: p,
    initialValue: d,
    axis: f = "both",
    draggingElement: v = O,
    containerElement: z,
    handle: L = t
  } = e, y = b(
    (l = C(d)) != null ? l : { x: 0, y: 0 }
  ), I = b(), k = (w) => n ? n.includes(w.pointerType) : !0, P = (w) => {
    C(i) && w.preventDefault(), C(a) && w.stopPropagation();
  }, A = (w) => {
    var j;
    if (!k(w) || C(r) && w.target !== C(t))
      return;
    const se = ((j = C(z)) != null ? j : C(t)).getBoundingClientRect(), ce = {
      x: w.clientX - se.left,
      y: w.clientY - se.top
    };
    (p == null ? void 0 : p(ce, w)) !== !1 && (I.value = ce, P(w));
  }, x = (w) => {
    if (!k(w) || !I.value)
      return;
    let { x: j, y: te } = y.value;
    (f === "x" || f === "both") && (j = w.clientX - I.value.x), (f === "y" || f === "both") && (te = w.clientY - I.value.y), y.value = {
      x: j,
      y: te
    }, s == null || s(y.value, w), P(w);
  }, W = (w) => {
    k(w) && I.value && (I.value = void 0, c == null || c(y.value, w), P(w));
  };
  if (R) {
    const w = { capture: (o = e.capture) != null ? o : !0 };
    E(L, "pointerdown", A, w), E(v, "pointermove", x, w), E(v, "pointerup", W, w);
  }
  return {
    ...pt(y),
    position: y,
    isDragging: h(() => !!I.value),
    style: h(
      () => `left:${y.value.x}px;top:${y.value.y}px;`
    )
  };
}
function _t(t, e, l = {}) {
  const { window: o = O, ...n } = l;
  let i;
  const a = ee(() => o && "ResizeObserver" in o), r = () => {
    i && (i.disconnect(), i = void 0);
  }, s = h(() => Array.isArray(t) ? t.map((d) => X(d)) : [X(t)]), c = H(
    s,
    (d) => {
      if (r(), a.value && o) {
        i = new ResizeObserver(e);
        for (const f of d)
          f && i.observe(f, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    r(), c();
  };
  return U(p), {
    isSupported: a,
    stop: p
  };
}
function xe(t, e = {}) {
  const {
    reset: l = !0,
    windowResize: o = !0,
    windowScroll: n = !0,
    immediate: i = !0
  } = e, a = b(0), r = b(0), s = b(0), c = b(0), p = b(0), d = b(0), f = b(0), v = b(0);
  function z() {
    const L = X(t);
    if (!L) {
      l && (a.value = 0, r.value = 0, s.value = 0, c.value = 0, p.value = 0, d.value = 0, f.value = 0, v.value = 0);
      return;
    }
    const y = L.getBoundingClientRect();
    a.value = y.height, r.value = y.bottom, s.value = y.left, c.value = y.right, p.value = y.top, d.value = y.width, f.value = y.x, v.value = y.y;
  }
  return _t(t, z), H(() => X(t), (L) => !L && z()), n && E("scroll", z, { capture: !0, passive: !0 }), o && E("resize", z, { passive: !0 }), _e(() => {
    i && z();
  }), {
    height: a,
    bottom: r,
    left: s,
    right: c,
    top: p,
    width: d,
    x: f,
    y: v,
    update: z
  };
}
function xt(t) {
  const {
    x: e,
    y: l,
    document: o = ft,
    multiple: n,
    interval: i = "requestAnimationFrame",
    immediate: a = !0
  } = t, r = ee(() => C(n) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), s = b(null), c = () => {
    var d, f;
    s.value = C(n) ? (d = o == null ? void 0 : o.elementsFromPoint(C(e), C(l))) != null ? d : [] : (f = o == null ? void 0 : o.elementFromPoint(C(e), C(l))) != null ? f : null;
  }, p = i === "requestAnimationFrame" ? vt(c, { immediate: a }) : dt(c, i, { immediate: a });
  return {
    isSupported: r,
    element: s,
    ...p
  };
}
const bt = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function be(t = {}) {
  const {
    type: e = "page",
    touch: l = !0,
    resetOnTouchEnds: o = !1,
    initialValue: n = { x: 0, y: 0 },
    window: i = O,
    target: a = i,
    scroll: r = !0,
    eventFilter: s
  } = t;
  let c = null;
  const p = b(n.x), d = b(n.y), f = b(null), v = typeof e == "function" ? e : bt[e], z = (x) => {
    const W = v(x);
    c = x, W && ([p.value, d.value] = W, f.value = "mouse");
  }, L = (x) => {
    if (x.touches.length > 0) {
      const W = v(x.touches[0]);
      W && ([p.value, d.value] = W, f.value = "touch");
    }
  }, y = () => {
    if (!c || !i)
      return;
    const x = v(c);
    c instanceof MouseEvent && x && (p.value = x[0] + i.scrollX, d.value = x[1] + i.scrollY);
  }, I = () => {
    p.value = n.x, d.value = n.y;
  }, k = s ? (x) => s(() => z(x), {}) : (x) => z(x), P = s ? (x) => s(() => L(x), {}) : (x) => L(x), A = s ? () => s(() => y(), {}) : () => y();
  if (a) {
    const x = { passive: !0 };
    E(a, ["mousemove", "dragover"], k, x), l && e !== "movement" && (E(a, ["touchstart", "touchmove"], P, x), o && E(a, "touchend", I, x)), r && e === "page" && E(i, "scroll", A, { passive: !0 });
  }
  return {
    x: p,
    y: d,
    sourceType: f
  };
}
function ae(t = {}) {
  const {
    window: e = O,
    initialWidth: l = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: i = !0
  } = t, a = b(l), r = b(o), s = () => {
    e && (i ? (a.value = e.innerWidth, r.value = e.innerHeight) : (a.value = e.document.documentElement.clientWidth, r.value = e.document.documentElement.clientHeight));
  };
  if (s(), _e(s), E("resize", s, { passive: !0 }), n) {
    const c = ht("(orientation: portrait)");
    H(c, () => s());
  }
  return { width: a, height: r };
}
function we() {
  const { width: t, height: e } = ae(), l = h(() => `0 0 ${t.value} ${e.value}`), o = h(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: l,
    styles: o
  };
}
function Pe(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function ze(t, e) {
  if (!Pe(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.elementTypeAttr))
      return l.slice(e.elementTypeAttr.length + 1);
  return null;
}
function Z(t, e) {
  if (!Pe(t, e))
    return null;
  for (const l of t.classList)
    if (l.startsWith(e.idAttr))
      return parseInt(l.slice(e.idAttr.length + 1));
  return null;
}
function wt(t, e) {
  const l = h(() => t.value ? t.value : null), o = we(), n = me(xe(t));
  gt(
    l,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), E("scroll", n.update, !0);
  const i = h(() => l.value ? {
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
  }), a = h(() => l.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), r = h(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), s = h(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), c = h(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), p = h(() => l.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = h(() => l.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), f = h(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), v = h(() => l.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: o,
    rectStyles: i,
    p1: a,
    p2: r,
    p3: s,
    p4: c,
    p5: p,
    p6: d,
    p7: f,
    p8: v
  };
}
const Pt = ["viewBox"], zt = /* @__PURE__ */ B({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, l = h(() => e.selectedElement), {
      svgConfig: { viewBox: o, styles: n },
      rectStyles: i,
      p1: a,
      p2: r,
      p3: s,
      p4: c,
      p5: p,
      p6: d,
      p7: f,
      p8: v
    } = wt(l, e.selectorConfig);
    return (z, L) => (T(), D("svg", {
      class: "vis-aiming",
      viewBox: g(o),
      version: "1.1",
      style: S([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, g(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      _("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: S(g(i))
      }, null, 4),
      _("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, g(a), { r: "2" }), null, 16),
      _("circle", V({ fill: "hotpink" }, g(r), { r: "2" }), null, 16),
      _("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, g(s), { r: "2" }), null, 16),
      _("circle", V({ fill: "hotpink" }, g(c), { r: "2" }), null, 16),
      _("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, g(p), { r: "2" }), null, 16),
      _("circle", V({ fill: "hotpink" }, g(d), { r: "2" }), null, 16),
      _("circle", V({
        stroke: "hotpink",
        fill: "white"
      }, g(f), { r: "2" }), null, 16),
      _("circle", V({ fill: "hotpink" }, g(v), { r: "2" }), null, 16)
    ], 12, Pt));
  }
}), $t = /* @__PURE__ */ _("span", null, "toolkit", -1), kt = /* @__PURE__ */ B({
  __name: "Panel",
  setup(t) {
    const e = b(null), { style: l } = yt(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (o, n) => {
      const i = $("q-icon");
      return T(), D("div", {
        style: S([g(l), { position: "fixed" }]),
        "layout-tool-panel": ""
      }, [
        _("div", {
          ref_key: "el",
          ref: e,
          class: "cursor-move bg-secondary row items-center gap-2 text-cyan-1 text-h6 text-weight-bolder px-2",
          style: { width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
        }, [
          u(i, { name: "gps_fixed" }),
          $t
        ], 512),
        ne(o.$slots, "default"),
        ne(o.$slots, "footer")
      ], 4);
    };
  }
}), Ct = we;
function Lt(t, e) {
  const { width: l } = ae(), { x: o, y: n } = be({ type: "client" }), i = h(() => {
    let s = o.value, c = n.value;
    return l.value - o.value < 10 && (s -= 10), n.value < 10 && (c += 10), { x: s, y: c };
  }), a = h(() => e.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: h(() => e.value ? ze(e.value, t) : null),
    typeNameTagStyles: a
  };
}
function St(t) {
  const { width: e, height: l } = ae(), { x: o, y: n } = be({ type: "client" }), { element: i } = xt({ x: o, y: n }), a = h(() => {
    if (i.value === null)
      return null;
    const v = i.value.closest(t.selectors);
    return v === null || v.closest("[layout-tool-panel]") ? null : v;
  }), r = me(xe(a));
  E("scroll", r.update, !0);
  const s = h(() => a.value ? {
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
  }), c = h(() => a.value ? {
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
  }), p = h(() => a.value ? {
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
  }), d = h(() => a.value ? {
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
  }), f = h(() => a.value ? {
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
  return { hoverElement: a, rectStyles: s, topLine: c, rightLine: p, bottomLine: d, leftLine: f };
}
function qt(t) {
  return !!t.closest(".q-color-picker");
}
function Et(t, e) {
  E(
    document.querySelector("body"),
    "click",
    (l) => {
      const o = l.target;
      o.closest("[layout-tool-panel]") || qt(o) || (e.value = t.value, l.stopPropagation());
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
function It(t, e) {
  let l = t.parentElement.closest(`${e.selectors}`);
  for (; l !== null; ) {
    if (window.getComputedStyle(l, null).getPropertyValue("display") === "flex")
      return { id: Z(l, e), dom: l };
    l = l.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const Vt = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function pe(t, e) {
  if (!Vt.has(ze(t, e)))
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
function de(t, e) {
  const l = `.${e.idAttr}-${t}`;
  return document.querySelector(l);
}
function Ft(t, e) {
  function l(n, i) {
    return window.getComputedStyle(de(n, t), null).getPropertyValue(i);
  }
  function o(n) {
    const i = de(n, t);
    e.value = i;
  }
  return { queryStyle: l, selectTarget: o };
}
function Tt(t) {
  if (t) {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.setAttribute("type", "text/css"), document.head.appendChild(e);
  }
}
const Wt = ["viewBox"], Ht = {
  key: 0,
  class: "vis-executing-mask",
  style: { "z-index": "9999900", width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0" }
}, Mt = /* @__PURE__ */ B({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: l }) {
    const o = t, n = l;
    function i(k) {
      const P = y.value;
      if (!P)
        return;
      const A = Z(P, o.selectorConfig);
      if (!A)
        throw new Error("not found selected element");
      console.log('emit("command"'), n("command", { id: A, options: k });
    }
    Oe(i), oe(() => {
      Tt(o.styleUrl);
    });
    const { viewBox: a, styles: r } = Ct(), { hoverElement: s, rectStyles: c, topLine: p, rightLine: d, bottomLine: f, leftLine: v } = St(o.selectorConfig), { typeNameTagStyles: z, typeName: L } = Lt(
      o.selectorConfig,
      s
    ), y = b(null);
    Et(s, y), H(s, (k) => {
      if (k) {
        const P = Z(k, o.selectorConfig);
        n("hoverChange", { id: P });
        return;
      }
      n("hoverChange", { id: null });
    }), H(y, (k) => {
      const P = {
        isFlex: !1,
        direction: null
      };
      if (k) {
        const A = Z(k, o.selectorConfig), x = It(k, o.selectorConfig);
        let W = {
          isFlex: !1,
          direction: null
        };
        x && (W = pe(x.dom, o.selectorConfig)), n("selectedChange", {
          id: A,
          parentBoxId: x !== null ? x.id : null,
          flexInfo: pe(k, o.selectorConfig),
          parentFlexInfo: W
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: P,
        parentFlexInfo: P
      });
    }), e(Ft(o.selectorConfig, y)), He(y);
    const I = Ae();
    return (k, P) => (T(), J(We, { to: "body" }, [
      (T(), D("svg", {
        class: "vis-hover",
        viewBox: g(a),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: S([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, g(r)])
      }, [
        _("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: S(g(c))
        }, null, 4),
        _("line", V({ class: "top" }, g(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", V({ class: "right" }, g(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", V({ class: "bottom" }, g(f), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        _("line", V({ class: "left" }, g(v), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, Wt)),
      u(zt, {
        "selected-element": y.value,
        selectorConfig: o.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      u(kt, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "300px" }
      }, {
        footer: m(() => [
          ne(k.$slots, "footer")
        ]),
        default: m(() => [
          u(at)
        ]),
        _: 3
      }),
      g(I) ? (T(), D("div", Ht)) : le("", !0),
      _("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: S([g(z), { "z-index": "9999999" }])
      }, q(g(L)), 5)
    ]));
  }
});
export {
  Mt as default
};
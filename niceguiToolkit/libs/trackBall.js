const b = Vue.ref
const O = Vue.watch
const h = Vue.computed
const Y = Vue.toValue
const C = Vue.defineComponent
const $ = Vue.openBlock
const N = Vue.createElementBlock
const M = Vue.normalizeStyle
const x = Vue.createElementVNode
const T = Vue.toDisplayString
const g = Vue.resolveComponent
const W = Vue.createBlock
const f = Vue.withCtx
const r = Vue.createVNode
const G = Vue.isRef
const v = Vue.unref
const Ce = Vue.createSlots
const Me = Vue.renderList
const L = Vue.createTextVNode
const pe = Vue.createCommentVNode
const Ee = Vue.pushScopeId
const He = Vue.popScopeId
const We = Vue.withKeys
const Oe = Vue.normalizeProps
const Fe = Vue.guardReactiveProps
const Te = Vue.withDirectives
const Le = Vue.vShow
const Be = Vue.toRefs
const Ae = Vue.customRef
const Ne = Vue.getCurrentScope
const De = Vue.onScopeDispose
const ye = Vue.getCurrentInstance
const de = Vue.onMounted
const Re = Vue.nextTick
const Ue = Vue.readonly
const je = Vue.watchEffect
const xe = Vue.reactive
const F = Vue.mergeProps
const ue = Vue.renderSlot
const Ye = Vue.Teleport
const be = {
  selectTarget: null
};
function Xe(t) {
  be.selectTarget = t;
}
function fe() {
  return be;
}
let we = !1;
function ie(t) {
  we = t ?? !0;
}
function Ge() {
  return we;
}
function Ke(t) {
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
function Qe(t, e, o, l) {
  const n = o ?? b(0);
  return O(t, (i) => {
    if (!i)
      return;
    const s = Ke(e);
    i.style.cursor = s.getCursorIcon();
    const a = s.getMoveIncrementHandler(), u = {
      x: 0,
      y: 0
    }, _ = (d) => {
      const p = a(u, d);
      (!l || l(n.value + p)) && (n.value += a(u, d)), u.x = d.x, u.y = d.y;
    }, c = (d) => {
      d.stopPropagation();
    }, m = (d) => {
      d.stopPropagation(), document.querySelector("body").style.cursor = "default", ie(!1), document.removeEventListener("mousemove", _);
    };
    i.addEventListener(
      "mousedown",
      (d) => {
        d.stopPropagation(), ie(), document.querySelector("body").style.cursor = i.style.cursor, u.x = d.x, u.y = d.y, document.addEventListener("mousemove", _), document.addEventListener("mouseup", c, {
          capture: !0,
          once: !0
        }), document.addEventListener("click", m, {
          capture: !0,
          once: !0
        });
      },
      { capture: !0 }
    );
  }), n;
}
const qe = [];
function Ze(t) {
  qe.push(t);
}
function Je(t) {
  qe.forEach((e) => e(t));
}
function se(t) {
  function e(n) {
    return h(() => {
      const s = Y(t);
      return s ? window.getComputedStyle(s, null).getPropertyValue(Y(n)) : "";
    });
  }
  function o(n) {
    const i = n ?? e("display");
    return h(() => Y(t) ? {
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
  function l() {
    return h(() => {
      const i = Y(t);
      if (!i || !i.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const a = se(i.parentElement).getFlexBoxInfo();
      return {
        isFlex: a.value.isFlex,
        direction: a.value.direction
      };
    });
  }
  return {
    getStyle: e,
    getFlexBoxInfo: o,
    getParentFlexBoxInfo: l
  };
}
const ee = /* @__PURE__ */ new Map();
function et(t) {
  O(t, (e) => {
    if (!e) {
      ee.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const o = se(e);
    ee.forEach((l, n) => {
      l.value = o.getStyle(n).value;
    });
  });
}
function tt(t) {
  return ee.has(t) || ee.set(t, b(null)), ee.get(t);
}
function U(t, e) {
  const o = tt(t);
  return h({
    get: () => o.value,
    set: (n) => {
      const i = {
        action: "style",
        commandType: "set",
        values: { [t]: n }
      }, s = e ? e(n) : [];
      Je([i, ...s]), o.value = n;
    }
  });
}
const nt = /* @__PURE__ */ C({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {},
    valueFilter: { type: Function }
  },
  setup(t) {
    const e = t, o = U(e.styleName), l = h(() => {
      if (!o.value)
        return {
          value: 0,
          unit: "px"
        };
      const c = /(-?\d+)([a-zA-Z%]+)/, m = o.value.match(c), d = parseFloat(m[1]), p = m[2];
      return { value: d, unit: p };
    });
    let n = l.value.value, i = l.value.unit;
    const s = h({
      get: () => l.value.value,
      set: (c) => {
        n = c, o.value = `${n}${i}`;
      }
    });
    h({
      get: () => l.value.unit,
      set: (c) => {
        i = c, o.value = `${n}${i}`;
      }
    });
    const a = b(null);
    Qe(a, e.direction, s, e.valueFilter);
    const u = {
      "clip-path": e.clipPath
    };
    function _() {
    }
    return (c, m) => ($(), N("div", {
      ref_key: "target",
      ref: a,
      class: "target",
      style: M([{ display: "flex", "justify-content": "center", "align-items": "center" }, u])
    }, [
      x("div", { onClick: _ }, [
        x("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, T(s.value), 513)
      ])
    ], 512));
  }
});
const B = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [l, n] of e)
    o[l] = n;
  return o;
}, A = /* @__PURE__ */ B(nt, [["__scopeId", "data-v-19de9462"]]), ot = {
  class: "relative w-full",
  style: { height: "8rem" }
}, lt = /* @__PURE__ */ x("p", {
  class: "m-0 p-0 absolute",
  style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
}, " margin ", -1), it = /* @__PURE__ */ C({
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
    }, n = (i) => i >= 0;
    return (i, s) => {
      const a = g("q-expansion-item");
      return $(), W(a, {
        "expand-separator": "",
        label: "Spacing(间距)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", ot, [
            x("p", {
              class: "m-0 p-0 absolute pointer-events-none",
              style: M([{
                top: `${e.verticalHeightPercent}%`,
                left: `${e.horizontalWidthPercent}%`
              }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
            }, " padding ", 4),
            lt,
            r(A, {
              class: "absolute h-full",
              direction: "left",
              "style-name": "margin-left",
              "clip-path": o.left.clipPath,
              style: M([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute w-full",
              direction: "up",
              "style-name": "margin-top",
              "clip-path": o.up.clipPath,
              style: M([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute h-full right-0",
              direction: "right",
              "style-name": "margin-right",
              "clip-path": o.right.clipPath,
              style: M([{ width: `${e.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute bottom-0 w-full",
              direction: "bottom",
              "style-name": "margin-bottom",
              "clip-path": o.bottom.clipPath,
              style: M([{ height: `${e.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "left",
              "style-name": "padding-left",
              "value-filter": n,
              "clip-path": l.left.clipPath,
              style: M({
                left: `${e.horizontalWidthPercent}%`,
                width: `${e.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "up",
              "style-name": "padding-top",
              "value-filter": n,
              "clip-path": l.up.clipPath,
              style: M([{
                top: `${e.verticalHeightPercent}%`,
                height: `${e.verticalHeightPercent}%`
              }, {}])
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "right",
              "style-name": "padding-right",
              "value-filter": n,
              "clip-path": l.right.clipPath,
              style: M({
                right: `${e.horizontalWidthPercent}%`,
                width: `${e.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            r(A, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "bottom",
              "style-name": "padding-bottom",
              "value-filter": n,
              "clip-path": l.bottom.clipPath,
              style: M({
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
});
function ce(t) {
  return G(t) ? t : b(Y(t));
}
function ne(t, e) {
  const o = ce(e), l = h(() => Y(t).map((n) => {
    const i = n.label ?? n.value;
    return {
      value: n.value,
      label: i,
      icon: n.icon ?? null,
      tooltip: n.tooltip ?? i
    };
  }));
  return {
    value: o,
    options: l
  };
}
const st = { key: 1 }, oe = /* @__PURE__ */ C({
  __name: "ToggleButtons",
  props: {
    model: {}
  },
  setup(t) {
    const e = t, { value: o, options: l } = e.model, n = h(
      () => l.value.map((i) => ({ value: i.value, slot: i.value }))
    );
    return (i, s) => {
      const a = g("q-tooltip"), u = g("q-icon"), _ = g("q-btn-toggle");
      return $(), W(_, {
        modelValue: v(o),
        "onUpdate:modelValue": s[0] || (s[0] = (c) => G(o) ? o.value = c : null),
        padding: "8px",
        size: "sm",
        "toggle-color": "primary",
        options: n.value
      }, Ce({ _: 2 }, [
        Me(v(l), (c) => ({
          name: c.value,
          fn: f(() => [
            c.icon ? ($(), W(u, {
              key: 0,
              name: c.icon
            }, {
              default: f(() => [
                r(a, { style: { "z-index": "99999999" } }, {
                  default: f(() => [
                    L(T(c.tooltip), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["name"])) : ($(), N("span", st, T(c.label), 1))
          ])
        }))
      ]), 1032, ["modelValue", "options"]);
    };
  }
}), Pe = (t) => (Ee("data-v-3f7cbfe8"), t = t(), He(), t), at = { class: "col no-wrap" }, rt = /* @__PURE__ */ Pe(() => /* @__PURE__ */ x("span", { class: "item-title text-capitalize" }, "display ", -1)), ut = { key: 0 }, ct = /* @__PURE__ */ Pe(() => /* @__PURE__ */ x("span", { class: "item-title text-caption text-capitalize" }, "direction", -1)), pt = { class: "item-title text-left text-caption text-capitalize" }, dt = { class: "item-title text-left text-caption text-capitalize" }, ft = /* @__PURE__ */ C({
  __name: "Layout",
  setup(t) {
    const e = U("display"), o = fe().selectTarget, l = se(o), n = ne(
      [
        { value: "block", icon: "inbox" },
        { value: "flex", icon: "inventory_2" }
      ],
      e
    ), i = l.getFlexBoxInfo(
      n.value
    ), s = U("flex-direction"), a = ne(
      [
        { value: "row", label: "Horizontal" },
        { value: "column", label: "Vertical" }
      ],
      s
    ), u = U("align-items"), _ = h(
      () => a.value.value === "row" ? "vertical align" : "horizontal align"
    ), c = h(() => a.value.value === "row" ? [
      { value: "start", icon: "vertical_align_top", tooltip: "top" },
      { value: "center", icon: "align_vertical_center", tooltip: "center" },
      { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" }
    ] : [
      { value: "start", icon: "align_horizontal_left", tooltip: "left" },
      { value: "center", icon: "align_horizontal_center", tooltip: "center" },
      { value: "end", icon: "align_horizontal_right", tooltip: "right" }
    ]), m = ne(c, u), d = U("justify-content"), p = h(
      () => a.value.value === "row" ? "vertical justify" : "horizontal justify"
    ), V = h(() => a.value.value === "row" ? [
      { value: "start", icon: "align_horizontal_left", tooltip: "left" },
      { value: "center", icon: "align_horizontal_center", tooltip: "center" },
      { value: "end", icon: "align_horizontal_right", tooltip: "right" }
    ] : [
      { value: "start", icon: "vertical_align_top", tooltip: "top" },
      { value: "center", icon: "align_vertical_center", tooltip: "center" },
      { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" }
    ]), S = ne(V, d);
    return (y, q) => {
      const I = g("q-item"), E = g("q-separator"), k = g("q-list"), w = g("q-expansion-item");
      return $(), W(w, {
        "expand-separator": "",
        label: "Layout(布局)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", at, [
            r(k, { bordered: "" }, {
              default: f(() => [
                r(I, { class: "items-center gap-2 px-3 py-2" }, {
                  default: f(() => [
                    rt,
                    r(oe, {
                      padding: "4px",
                      model: v(n)
                    }, null, 8, ["model"])
                  ]),
                  _: 1
                }),
                r(E),
                v(i).isFlex ? ($(), N("div", ut, [
                  r(I, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      ct,
                      r(oe, { model: v(a) }, null, 8, ["model"])
                    ]),
                    _: 1
                  }),
                  r(I, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      x("span", pt, T(_.value), 1),
                      r(oe, { model: v(m) }, null, 8, ["model"])
                    ]),
                    _: 1
                  }),
                  r(I, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      x("span", dt, T(p.value), 1),
                      r(oe, { model: v(S) }, null, 8, ["model"])
                    ]),
                    _: 1
                  })
                ])) : pe("", !0)
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
const _t = /* @__PURE__ */ B(ft, [["__scopeId", "data-v-3f7cbfe8"]]), mt = { class: "col no-wrap" }, vt = { class: "item-title text-left text-caption text-capitalize" }, ht = /* @__PURE__ */ C({
  __name: "FlexItem",
  setup(t) {
    const o = se(fe().selectTarget).getParentFlexBoxInfo(), l = U("align-self"), n = h(() => o.value.direction === "row" ? {
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
      },
      stretch: {
        icon: "settings_overscan",
        tooltipLabel: "stretch"
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
      },
      stretch: {
        icon: "settings_overscan",
        tooltipLabel: "stretch"
      }
    });
    return (i, s) => {
      const a = g("q-tooltip"), u = g("q-icon"), _ = g("q-btn-toggle"), c = g("q-item"), m = g("q-list"), d = g("q-expansion-item");
      return v(o).isFlex ? ($(), W(d, {
        key: 0,
        "expand-separator": "",
        label: "FlexItem(Flex子元素)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", mt, [
            r(m, { bordered: "" }, {
              default: f(() => [
                r(c, { class: "items-center gap-2 px-3 py-2" }, {
                  default: f(() => [
                    x("span", vt, T(n.value.title), 1),
                    r(_, {
                      modelValue: v(l),
                      "onUpdate:modelValue": s[0] || (s[0] = (p) => G(l) ? l.value = p : null),
                      padding: "8px",
                      size: "sm",
                      "toggle-color": "primary",
                      options: [
                        { value: "flex-start", slot: "start" },
                        { value: "center", slot: "center" },
                        { value: "flex-end", slot: "end" },
                        { value: "stretch", slot: "stretch" }
                      ]
                    }, {
                      start: f(() => [
                        r(u, {
                          name: n.value.start.icon
                        }, {
                          default: f(() => [
                            r(a, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(T(n.value.start.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      center: f(() => [
                        r(u, {
                          name: n.value.center.icon
                        }, {
                          default: f(() => [
                            r(a, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(T(n.value.center.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      end: f(() => [
                        r(u, {
                          name: n.value.end.icon
                        }, {
                          default: f(() => [
                            r(a, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(T(n.value.end.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      stretch: f(() => [
                        r(u, {
                          name: n.value.stretch.icon
                        }, {
                          default: f(() => [
                            r(a, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(T(n.value.stretch.tooltipLabel), 1)
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
      })) : pe("", !0);
    };
  }
});
const gt = /* @__PURE__ */ B(ht, [["__scopeId", "data-v-1f03c1b9"]]), yt = { class: "cus-input" }, xt = /* @__PURE__ */ C({
  __name: "ValueInput",
  props: {
    model: {}
  },
  setup(t) {
    const o = t.model, l = b(null), n = b(null), {
      inputValue: i,
      selectValue: s,
      selectDisplay: a,
      inputPlaceholder: u,
      itemOptions: _,
      updateInput: c
    } = o;
    function m(d) {
      var p;
      d.currentTarget === d.target && (c(d.currentTarget.value), (p = l.value) == null || p.blur());
    }
    return (d, p) => {
      const V = g("q-icon"), S = g("q-item-section"), y = g("q-item-label"), q = g("q-item"), I = g("q-select"), E = g("q-input");
      return $(), N("div", yt, [
        r(E, {
          ref_key: "inputRef",
          ref: l,
          class: "q-input",
          "model-value": v(i),
          placeholder: v(u),
          square: "",
          outlined: "",
          dense: "",
          mask: "#",
          "reverse-fill-mask": "",
          onBlur: m,
          onKeyup: We(m, ["enter"])
        }, {
          append: f(() => [
            r(I, {
              ref_key: "selectRef",
              ref: n,
              "display-value": v(a),
              "hide-dropdown-icon": "",
              class: "q-select",
              dense: "",
              "options-cover": "",
              modelValue: v(s),
              "onUpdate:modelValue": p[0] || (p[0] = (k) => G(s) ? s.value = k : null),
              options: v(_),
              color: "teal",
              "emit-value": "",
              "options-selected-class": "text-deep-orange",
              onPopupShow: p[1] || (p[1] = (k) => v(ie)(!0)),
              onPopupHide: p[2] || (p[2] = (k) => v(ie)(!1)),
              "popup-content-style": "z-index:9999999"
            }, {
              option: f((k) => [
                r(q, Oe(Fe(k.itemProps)), {
                  default: f(() => [
                    r(S, { avatar: "" }, {
                      default: f(() => [
                        v(s) === k.opt.value ? ($(), W(V, {
                          key: 0,
                          name: "check"
                        })) : pe("", !0)
                      ]),
                      _: 2
                    }, 1024),
                    r(S, null, {
                      default: f(() => [
                        r(y, null, {
                          default: f(() => [
                            L(T(k.opt.value), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1040)
              ]),
              _: 1
            }, 8, ["display-value", "modelValue", "options"])
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "onKeyup"])
      ]);
    };
  }
});
const K = /* @__PURE__ */ B(xt, [["__scopeId", "data-v-495359de"]]);
function Q(t, e, o) {
  e = e ?? {};
  const l = t.map((p) => typeof p == "string" ? { value: p, label: p } : p);
  function n(p) {
    return l.find((V) => V.value === p);
  }
  const i = ce(e.inputValue ?? null), s = ce(e.selectValue ?? null), a = {
    lastInvaildInputValue: i.value
  };
  bt(s, i, o, a), wt(s, i, o, a);
  const u = b(null), _ = h(() => {
    var p;
    return s.value ? (p = n(s.value)) == null ? void 0 : p.label : "";
  }), c = h(() => {
    if (s.value) {
      const p = n(s.value);
      return (p == null ? void 0 : p.value) ?? (p == null ? void 0 : p.label);
    }
    return "";
  });
  function m(p) {
    i.value = p;
  }
  function d(p) {
    s.value = p;
  }
  return {
    inputValue: i,
    selectValue: s,
    selectItem: u,
    selectDisplay: _,
    inputPlaceholder: c,
    itemOptions: l,
    updateInput: m,
    updateSelect: d
  };
}
function bt(t, e, o, l) {
  const { nonValueOptions: n, defaultOptionValue: i, optionValueIfnonValue: s } = o ?? {};
  O(e, (a) => {
    a !== null && (n && i && a.length > 0 && t.value && n.includes(t.value) && (t.value = i), s && n && a && t.value && n.includes(t.value) && (t.value = s), !a && n && (t.value = n[0]), a && (l.lastInvaildInputValue = a));
  });
}
function wt(t, e, o, l) {
  const { nonValueOptions: n } = o ?? {};
  O(t, (i) => {
    i !== null && (n && n.includes(i) ? e.value = "" : !e.value && l.lastInvaildInputValue !== null && (e.value = l.lastInvaildInputValue));
  });
}
const qt = [
  "px",
  "%",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  {
    label: "-",
    value: "auto"
  }
], Pt = [
  "px",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  "%",
  {
    label: "-",
    value: "auto"
  }
], Vt = [
  "px",
  "%",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  {
    label: "-",
    value: "auto"
  }
], $t = [
  "px",
  "%",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  {
    label: "-",
    value: "none"
  }
], It = [
  "px",
  "%",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  {
    label: "-",
    value: "auto"
  }
], kt = [
  "px",
  "%",
  "rem",
  "em",
  "ch",
  "vw",
  "vh",
  {
    label: "-",
    value: "none"
  }
];
function Z(t, e, o) {
  const l = U(e), n = h(() => {
    const i = t.inputValue, s = t.selectValue;
    return s.value && o.includes(s.value) ? s.value : `${i.value}${s.value}`;
  });
  O(n, (i) => {
    l.value = i;
  });
}
const zt = /* @__PURE__ */ C({
  __name: "Width",
  setup(t) {
    const o = Q(
      qt,
      { selectValue: "auto" },
      {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto"
      }
    );
    return Z(o, "width", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Width")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const St = /* @__PURE__ */ B(zt, [["__scopeId", "data-v-32e7ebff"]]), Ct = /* @__PURE__ */ C({
  __name: "Height",
  setup(t) {
    const o = Q(
      Pt,
      { selectValue: "auto" },
      {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto"
      }
    );
    return Z(o, "height", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Height")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Mt = /* @__PURE__ */ B(Ct, [["__scopeId", "data-v-fe62d792"]]), Et = /* @__PURE__ */ C({
  __name: "MaxWidth",
  setup(t) {
    const o = Q(
      $t,
      { selectValue: "none" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none"
      }
    );
    return Z(o, "max-width", ["none"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Max W")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Ht = /* @__PURE__ */ B(Et, [["__scopeId", "data-v-c2f1619e"]]), Wt = /* @__PURE__ */ C({
  __name: "MinWidth",
  setup(t) {
    const o = Q(
      Vt,
      { inputValue: "0", selectValue: "px" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"]
      }
    );
    return Z(o, "min-width", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Min W")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Ot = /* @__PURE__ */ B(Wt, [["__scopeId", "data-v-4b11a972"]]), Ft = /* @__PURE__ */ C({
  __name: "MaxHeight",
  setup(t) {
    const o = Q(
      kt,
      { selectValue: "none" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none"
      }
    );
    return Z(o, "max-height", ["none"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Max H")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Tt = /* @__PURE__ */ B(Ft, [["__scopeId", "data-v-2dec6911"]]), Lt = /* @__PURE__ */ C({
  __name: "MinHeight",
  setup(t) {
    const o = Q(
      It,
      { inputValue: "0", selectValue: "px" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"]
      }
    );
    return Z(o, "min-height", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), W(s, { dense: "" }, {
        default: f(() => [
          r(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => [
              L("Min H")
            ]),
            _: 1
          }),
          r(i, null, {
            default: f(() => [
              r(K, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Bt = /* @__PURE__ */ B(Lt, [["__scopeId", "data-v-e5219a82"]]), At = { class: "col no-wrap" }, Nt = /* @__PURE__ */ C({
  __name: "Size",
  setup(t) {
    return (e, o) => {
      const l = g("q-item-section"), n = g("q-item"), i = g("q-list"), s = g("q-expansion-item");
      return $(), W(s, {
        "expand-separator": "",
        label: "Size(大小)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", At, [
            r(i, { bordered: "" }, {
              default: f(() => [
                r(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    r(l, null, {
                      default: f(() => [
                        r(St)
                      ]),
                      _: 1
                    }),
                    r(l, { class: "!ml-0" }, {
                      default: f(() => [
                        r(Mt)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                r(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    r(l, null, {
                      default: f(() => [
                        r(Ot)
                      ]),
                      _: 1
                    }),
                    r(l, { class: "!ml-0" }, {
                      default: f(() => [
                        r(Bt)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                r(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    r(l, null, {
                      default: f(() => [
                        r(Ht)
                      ]),
                      _: 1
                    }),
                    r(l, { class: "!ml-0" }, {
                      default: f(() => [
                        r(Tt)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
const Dt = /* @__PURE__ */ B(Nt, [["__scopeId", "data-v-bb8f5952"]]), Rt = /* @__PURE__ */ C({
  __name: "MainPanel",
  setup(t) {
    const e = b("style"), o = fe().selectTarget;
    et(o);
    const l = h(() => !!o.value);
    return (n, i) => {
      const s = g("q-tab"), a = g("q-tabs"), u = g("q-separator"), _ = g("q-list"), c = g("q-tab-panel"), m = g("q-tab-panels");
      return $(), N("div", null, [
        r(a, {
          class: "bg-secondary-5",
          modelValue: e.value,
          "onUpdate:modelValue": i[0] || (i[0] = (d) => e.value = d),
          align: "left",
          dense: "",
          "no-caps": ""
        }, {
          default: f(() => [
            r(s, {
              name: "style",
              label: "style"
            }),
            r(s, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        Te(r(m, {
          modelValue: e.value,
          "onUpdate:modelValue": i[1] || (i[1] = (d) => e.value = d),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: f(() => [
            r(c, {
              name: "style",
              style: { padding: "0" }
            }, {
              default: f(() => [
                r(_, { bordered: "" }, {
                  default: f(() => [
                    r(gt),
                    r(_t),
                    r(u),
                    r(it),
                    r(u),
                    r(Dt)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]), [
          [Le, l.value]
        ])
      ]);
    };
  }
});
function j(t) {
  return Ne() ? (De(t), !0) : !1;
}
function z(t) {
  return typeof t == "function" ? t() : v(t);
}
const te = typeof window < "u" && typeof document < "u", Ut = Object.prototype.toString, jt = (t) => Ut.call(t) === "[object Object]", Yt = () => {
};
function Xt(t, e = {}) {
  if (!G(t))
    return Be(t);
  const o = Array.isArray(t.value) ? Array.from({ length: t.value.length }) : {};
  for (const l in t.value)
    o[l] = Ae(() => ({
      get() {
        return t.value[l];
      },
      set(n) {
        var i;
        if ((i = z(e.replaceRef)) != null ? i : !0)
          if (Array.isArray(t.value)) {
            const a = [...t.value];
            a[l] = n, t.value = a;
          } else {
            const a = { ...t.value, [l]: n };
            Object.setPrototypeOf(a, Object.getPrototypeOf(t.value)), t.value = a;
          }
        else
          t.value[l] = n;
      }
    }));
  return o;
}
function Ve(t, e = !0) {
  ye() ? de(t) : e ? t() : Re(t);
}
function Gt(t, e = 1e3, o = {}) {
  const {
    immediate: l = !0,
    immediateCallback: n = !1
  } = o;
  let i = null;
  const s = b(!1);
  function a() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, a();
  }
  function _() {
    const c = z(e);
    c <= 0 || (s.value = !0, n && t(), a(), i = setInterval(t, c));
  }
  if (l && te && _(), G(e) || typeof e == "function") {
    const c = O(e, () => {
      s.value && te && _();
    });
    j(c);
  }
  return j(u), {
    isActive: s,
    pause: u,
    resume: _
  };
}
function X(t) {
  var e;
  const o = z(t);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
const D = te ? window : void 0, Kt = te ? window.document : void 0;
function H(...t) {
  let e, o, l, n;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, l, n] = t, e = D) : [e, o, l, n] = t, !e)
    return Yt;
  Array.isArray(o) || (o = [o]), Array.isArray(l) || (l = [l]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, a = (c, m, d, p) => (c.addEventListener(m, d, p), () => c.removeEventListener(m, d, p)), u = O(
    () => [X(e), z(n)],
    ([c, m]) => {
      if (s(), !c)
        return;
      const d = jt(m) ? { ...m } : m;
      i.push(
        ...o.flatMap((p) => l.map((V) => a(c, p, V, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), _ = () => {
    u(), s();
  };
  return j(_), _;
}
function Qt() {
  const t = b(!1);
  return ye() && de(() => {
    t.value = !0;
  }), t;
}
function ae(t) {
  const e = Qt();
  return h(() => (e.value, !!t()));
}
function Zt(t, e = {}) {
  const {
    immediate: o = !0,
    fpsLimit: l = void 0,
    window: n = D
  } = e, i = b(!1), s = l ? 1e3 / l : null;
  let a = 0, u = null;
  function _(d) {
    if (!i.value || !n)
      return;
    const p = d - (a || d);
    if (s && p < s) {
      u = n.requestAnimationFrame(_);
      return;
    }
    t({ delta: p, timestamp: d }), a = d, u = n.requestAnimationFrame(_);
  }
  function c() {
    !i.value && n && (i.value = !0, u = n.requestAnimationFrame(_));
  }
  function m() {
    i.value = !1, u != null && n && (n.cancelAnimationFrame(u), u = null);
  }
  return o && c(), j(m), {
    isActive: Ue(i),
    pause: m,
    resume: c
  };
}
function Jt(t, e = {}) {
  const { window: o = D } = e, l = ae(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let n;
  const i = b(!1), s = (_) => {
    i.value = _.matches;
  }, a = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, u = je(() => {
    l.value && (a(), n = o.matchMedia(z(t)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), i.value = n.matches);
  });
  return j(() => {
    u(), a(), n = void 0;
  }), i;
}
function en(t, e, o = {}) {
  const { window: l = D, ...n } = o;
  let i;
  const s = ae(() => l && "MutationObserver" in l), a = () => {
    i && (i.disconnect(), i = void 0);
  }, u = O(
    () => X(t),
    (c) => {
      a(), s.value && l && c && (i = new MutationObserver(e), i.observe(c, n));
    },
    { immediate: !0 }
  ), _ = () => {
    a(), u();
  };
  return j(_), {
    isSupported: s,
    stop: _
  };
}
function tn(t, e = {}) {
  var o, l;
  const {
    pointerTypes: n,
    preventDefault: i,
    stopPropagation: s,
    exact: a,
    onMove: u,
    onEnd: _,
    onStart: c,
    initialValue: m,
    axis: d = "both",
    draggingElement: p = D,
    containerElement: V,
    handle: S = t
  } = e, y = b(
    (o = z(m)) != null ? o : { x: 0, y: 0 }
  ), q = b(), I = (P) => n ? n.includes(P.pointerType) : !0, E = (P) => {
    z(i) && P.preventDefault(), z(s) && P.stopPropagation();
  }, k = (P) => {
    var J;
    if (!I(P) || z(a) && P.target !== z(t))
      return;
    const me = ((J = z(V)) != null ? J : z(t)).getBoundingClientRect(), ve = {
      x: P.clientX - me.left,
      y: P.clientY - me.top
    };
    (c == null ? void 0 : c(ve, P)) !== !1 && (q.value = ve, E(P));
  }, w = (P) => {
    if (!I(P) || !q.value)
      return;
    let { x: J, y: re } = y.value;
    (d === "x" || d === "both") && (J = P.clientX - q.value.x), (d === "y" || d === "both") && (re = P.clientY - q.value.y), y.value = {
      x: J,
      y: re
    }, u == null || u(y.value, P), E(P);
  }, R = (P) => {
    I(P) && q.value && (q.value = void 0, _ == null || _(y.value, P), E(P));
  };
  if (te) {
    const P = { capture: (l = e.capture) != null ? l : !0 };
    H(S, "pointerdown", k, P), H(p, "pointermove", w, P), H(p, "pointerup", R, P);
  }
  return {
    ...Xt(y),
    position: y,
    isDragging: h(() => !!q.value),
    style: h(
      () => `left:${y.value.x}px;top:${y.value.y}px;`
    )
  };
}
function nn(t, e, o = {}) {
  const { window: l = D, ...n } = o;
  let i;
  const s = ae(() => l && "ResizeObserver" in l), a = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => Array.isArray(t) ? t.map((m) => X(m)) : [X(t)]), _ = O(
    u,
    (m) => {
      if (a(), s.value && l) {
        i = new ResizeObserver(e);
        for (const d of m)
          d && i.observe(d, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), c = () => {
    a(), _();
  };
  return j(c), {
    isSupported: s,
    stop: c
  };
}
function $e(t, e = {}) {
  const {
    reset: o = !0,
    windowResize: l = !0,
    windowScroll: n = !0,
    immediate: i = !0
  } = e, s = b(0), a = b(0), u = b(0), _ = b(0), c = b(0), m = b(0), d = b(0), p = b(0);
  function V() {
    const S = X(t);
    if (!S) {
      o && (s.value = 0, a.value = 0, u.value = 0, _.value = 0, c.value = 0, m.value = 0, d.value = 0, p.value = 0);
      return;
    }
    const y = S.getBoundingClientRect();
    s.value = y.height, a.value = y.bottom, u.value = y.left, _.value = y.right, c.value = y.top, m.value = y.width, d.value = y.x, p.value = y.y;
  }
  return nn(t, V), O(() => X(t), (S) => !S && V()), n && H("scroll", V, { capture: !0, passive: !0 }), l && H("resize", V, { passive: !0 }), Ve(() => {
    i && V();
  }), {
    height: s,
    bottom: a,
    left: u,
    right: _,
    top: c,
    width: m,
    x: d,
    y: p,
    update: V
  };
}
function on(t) {
  const {
    x: e,
    y: o,
    document: l = Kt,
    multiple: n,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = t, a = ae(() => z(n) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), u = b(null), _ = () => {
    var m, d;
    u.value = z(n) ? (m = l == null ? void 0 : l.elementsFromPoint(z(e), z(o))) != null ? m : [] : (d = l == null ? void 0 : l.elementFromPoint(z(e), z(o))) != null ? d : null;
  }, c = i === "requestAnimationFrame" ? Zt(_, { immediate: s }) : Gt(_, i, { immediate: s });
  return {
    isSupported: a,
    element: u,
    ...c
  };
}
const ln = {
  page: (t) => [t.pageX, t.pageY],
  client: (t) => [t.clientX, t.clientY],
  screen: (t) => [t.screenX, t.screenY],
  movement: (t) => t instanceof Touch ? null : [t.movementX, t.movementY]
};
function Ie(t = {}) {
  const {
    type: e = "page",
    touch: o = !0,
    resetOnTouchEnds: l = !1,
    initialValue: n = { x: 0, y: 0 },
    window: i = D,
    target: s = i,
    scroll: a = !0,
    eventFilter: u
  } = t;
  let _ = null;
  const c = b(n.x), m = b(n.y), d = b(null), p = typeof e == "function" ? e : ln[e], V = (w) => {
    const R = p(w);
    _ = w, R && ([c.value, m.value] = R, d.value = "mouse");
  }, S = (w) => {
    if (w.touches.length > 0) {
      const R = p(w.touches[0]);
      R && ([c.value, m.value] = R, d.value = "touch");
    }
  }, y = () => {
    if (!_ || !i)
      return;
    const w = p(_);
    _ instanceof MouseEvent && w && (c.value = w[0] + i.scrollX, m.value = w[1] + i.scrollY);
  }, q = () => {
    c.value = n.x, m.value = n.y;
  }, I = u ? (w) => u(() => V(w), {}) : (w) => V(w), E = u ? (w) => u(() => S(w), {}) : (w) => S(w), k = u ? () => u(() => y(), {}) : () => y();
  if (s) {
    const w = { passive: !0 };
    H(s, ["mousemove", "dragover"], I, w), o && e !== "movement" && (H(s, ["touchstart", "touchmove"], E, w), l && H(s, "touchend", q, w)), a && e === "page" && H(i, "scroll", k, { passive: !0 });
  }
  return {
    x: c,
    y: m,
    sourceType: d
  };
}
function _e(t = {}) {
  const {
    window: e = D,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: i = !0
  } = t, s = b(o), a = b(l), u = () => {
    e && (i ? (s.value = e.innerWidth, a.value = e.innerHeight) : (s.value = e.document.documentElement.clientWidth, a.value = e.document.documentElement.clientHeight));
  };
  if (u(), Ve(u), H("resize", u, { passive: !0 }), n) {
    const _ = Jt("(orientation: portrait)");
    O(_, () => u());
  }
  return { width: s, height: a };
}
function ke() {
  const { width: t, height: e } = _e(), o = h(() => `0 0 ${t.value} ${e.value}`), l = h(() => ({
    width: t.value,
    height: e.value
  }));
  return {
    viewBox: o,
    styles: l
  };
}
function ze(t, e) {
  return t.classList.contains(e.selectors.slice(1));
}
function Se(t, e) {
  if (!ze(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.elementTypeAttr))
      return o.slice(e.elementTypeAttr.length + 1);
  return null;
}
function le(t, e) {
  if (!ze(t, e))
    return null;
  for (const o of t.classList)
    if (o.startsWith(e.idAttr))
      return parseInt(o.slice(e.idAttr.length + 1));
  return null;
}
function sn(t, e) {
  const o = h(() => t.value ? t.value : null), l = ke(), n = xe($e(t));
  en(
    o,
    () => {
      n.update();
    },
    { attributes: !0 }
  ), H("scroll", n.update, !0);
  const i = h(() => o.value ? {
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
  }), s = h(() => o.value ? {
    cx: n.x,
    cy: n.y
  } : {
    r: 0
  }), a = h(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y
  } : {
    r: 0
  }), u = h(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y
  } : {
    r: 0
  }), _ = h(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height / 2
  } : {
    r: 0
  }), c = h(() => o.value ? {
    cx: n.x + n.width,
    cy: n.y + n.height
  } : {
    r: 0
  }), m = h(() => o.value ? {
    cx: n.x + n.width / 2,
    cy: n.y + n.height
  } : {
    r: 0
  }), d = h(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height
  } : {
    r: 0
  }), p = h(() => o.value ? {
    cx: n.x,
    cy: n.y + n.height / 2
  } : {
    r: 0
  });
  return {
    svgConfig: l,
    rectStyles: i,
    p1: s,
    p2: a,
    p3: u,
    p4: _,
    p5: c,
    p6: m,
    p7: d,
    p8: p
  };
}
const an = ["viewBox"], rn = /* @__PURE__ */ C({
  __name: "Aiming",
  props: {
    selectedElement: {},
    selectorConfig: {}
  },
  setup(t) {
    const e = t, o = h(() => e.selectedElement), {
      svgConfig: { viewBox: l, styles: n },
      rectStyles: i,
      p1: s,
      p2: a,
      p3: u,
      p4: _,
      p5: c,
      p6: m,
      p7: d,
      p8: p
    } = sn(o, e.selectorConfig);
    return (V, S) => ($(), N("svg", {
      class: "vis-aiming",
      viewBox: v(l),
      version: "1.1",
      style: M([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, v(n)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      x("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: M(v(i))
      }, null, 4),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(s), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(a), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(u), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(_), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(c), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(m), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(d), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(p), { r: "2" }), null, 16)
    ], 12, an));
  }
}), un = /* @__PURE__ */ x("span", null, "toolkit", -1), cn = /* @__PURE__ */ C({
  __name: "Panel",
  setup(t) {
    const e = b(null), { style: o } = tn(e, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (l, n) => {
      const i = g("q-icon");
      return $(), N("div", {
        style: M([v(o), { position: "fixed" }]),
        "layout-tool-panel": ""
      }, [
        x("div", {
          ref_key: "el",
          ref: e,
          class: "cursor-move bg-secondary row items-center gap-2 text-cyan-1 text-h6 text-weight-bolder px-2",
          style: { width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
        }, [
          r(i, { name: "gps_fixed" }),
          un
        ], 512),
        ue(l.$slots, "default"),
        ue(l.$slots, "footer")
      ], 4);
    };
  }
}), pn = ke;
function dn(t, e) {
  const { width: o } = _e(), { x: l, y: n } = Ie({ type: "client" }), i = h(() => {
    let u = l.value, _ = n.value;
    return o.value - l.value < 10 && (u -= 10), n.value < 10 && (_ += 10), { x: u, y: _ };
  }), s = h(() => e.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: h(() => e.value ? Se(e.value, t) : null),
    typeNameTagStyles: s
  };
}
function fn(t) {
  const { width: e, height: o } = _e(), { x: l, y: n } = Ie({ type: "client" }), { element: i } = on({ x: l, y: n }), s = h(() => {
    if (i.value === null)
      return null;
    const p = i.value.closest(t.selectors);
    return p === null || p.closest("[layout-tool-panel]") ? null : p;
  }), a = xe($e(s));
  H("scroll", a.update, !0);
  const u = h(() => s.value ? {
    display: "block",
    width: a.width,
    height: a.height,
    x: a.left,
    y: a.top
  } : {
    display: "none",
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }), _ = h(() => s.value ? {
    x1: 0,
    y1: a.top,
    x2: e.value,
    y2: a.top
  } : {
    x1: 0,
    y1: 8,
    x2: a.width,
    y2: 8,
    "stroke-width": 0
  }), c = h(() => s.value ? {
    x1: a.left + a.width,
    y1: 0,
    x2: a.left + a.width,
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
    "stroke-width": 0
  }), m = h(() => s.value ? {
    x1: 0,
    y1: a.top + a.height,
    x2: e.value,
    y2: a.top + a.height
  } : {
    x1: 0,
    y1: 8,
    x2: a.width,
    y2: 8,
    "stroke-width": 0
  }), d = h(() => s.value ? {
    x1: a.left,
    y1: 0,
    x2: a.left,
    y2: o.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: o.value,
    "stroke-width": 0
  });
  return { hoverElement: s, rectStyles: u, topLine: _, rightLine: c, bottomLine: m, leftLine: d };
}
function _n(t) {
  return !!t.closest(".q-color-picker");
}
function mn(t, e) {
  H(
    document.querySelector("body"),
    "click",
    (o) => {
      if (Ge())
        return;
      const l = o.target;
      l.closest("[layout-tool-panel]") || _n(l) || t.value !== null && (e.value = t.value, o.stopPropagation());
    },
    { capture: !0 }
  ), H(
    document.querySelector("body"),
    "mouseenter",
    (o) => {
      t.value && o.stopPropagation();
    },
    { capture: !0 }
  );
}
function vn(t, e) {
  let o = t.parentElement.closest(`${e.selectors}`);
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: le(o, e), dom: o };
    o = o.parentElement.closest(`${e.selectors}`);
  }
  return null;
}
const hn = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function he(t, e) {
  if (!hn.has(Se(t, e)))
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
function ge(t, e) {
  const o = `.${e.idAttr}-${t}`;
  return document.querySelector(o);
}
function gn(t, e) {
  function o(n, i) {
    return window.getComputedStyle(ge(n, t), null).getPropertyValue(i);
  }
  function l(n) {
    const i = ge(n, t);
    e.value = i;
  }
  return { queryStyle: o, selectTarget: l };
}
function yn(t) {
  if (t) {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e.setAttribute("type", "text/css"), document.head.appendChild(e);
  }
}
const xn = ["viewBox"], wn = /* @__PURE__ */ C({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(t, { expose: e, emit: o }) {
    const l = t, n = o;
    function i(q) {
      const I = y.value;
      if (!I)
        return;
      const E = le(I, l.selectorConfig);
      if (!E)
        throw new Error("not found selected element");
      n("command", { id: E, commands: q }), console.log("send cmd:", q);
    }
    Ze(i), de(() => {
      yn(l.styleUrl);
    });
    const { viewBox: s, styles: a } = pn(), { hoverElement: u, rectStyles: _, topLine: c, rightLine: m, bottomLine: d, leftLine: p } = fn(l.selectorConfig), { typeNameTagStyles: V, typeName: S } = dn(
      l.selectorConfig,
      u
    ), y = b(null);
    return mn(u, y), O(u, (q) => {
      if (q) {
        const I = le(q, l.selectorConfig);
        n("hoverChange", { id: I });
        return;
      }
      n("hoverChange", { id: null });
    }), O(y, (q) => {
      const I = {
        isFlex: !1,
        direction: null
      };
      if (q) {
        const E = le(q, l.selectorConfig), k = vn(q, l.selectorConfig);
        let w = {
          isFlex: !1,
          direction: null
        };
        k && (w = he(k.dom, l.selectorConfig)), n("selectedChange", {
          id: E,
          parentBoxId: k !== null ? k.id : null,
          flexInfo: he(q, l.selectorConfig),
          parentFlexInfo: w
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: I,
        parentFlexInfo: I
      });
    }), e(gn(l.selectorConfig, y)), Xe(y), (q, I) => ($(), W(Ye, { to: "body" }, [
      ($(), N("svg", {
        class: "vis-hover",
        viewBox: v(s),
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        style: M([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, v(a)])
      }, [
        x("rect", {
          fill: "none",
          stroke: "red",
          "stroke-width": "1",
          style: M(v(_))
        }, null, 4),
        x("line", F({ class: "top" }, v(c), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        x("line", F({ class: "right" }, v(m), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        x("line", F({ class: "bottom" }, v(d), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16),
        x("line", F({ class: "left" }, v(p), {
          stroke: "red",
          "stroke-dasharray": "3 2"
        }), null, 16)
      ], 12, xn)),
      r(rn, {
        "selected-element": y.value,
        selectorConfig: l.selectorConfig,
        style: { "z-index": "9999999" }
      }, null, 8, ["selected-element", "selectorConfig"]),
      r(cn, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "350px" }
      }, {
        footer: f(() => [
          ue(q.$slots, "footer")
        ]),
        default: f(() => [
          r(Rt)
        ]),
        _: 3
      }),
      x("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: M([v(V), { "z-index": "9999999" }])
      }, T(v(S)), 5)
    ]));
  }
});
export {
  wn as default
};
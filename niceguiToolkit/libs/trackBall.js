const y = Vue.ref
const M = Vue.watch
const h = Vue.computed
const j = Vue.toValue
const I = Vue.defineComponent
const $ = Vue.openBlock
const G = Vue.createElementBlock
const S = Vue.normalizeStyle
const x = Vue.createElementVNode
const O = Vue.toDisplayString
const g = Vue.resolveComponent
const H = Vue.createBlock
const f = Vue.withCtx
const a = Vue.createVNode
const te = Vue.isRef
const v = Vue.unref
const Ee = Vue.createSlots
const Fe = Vue.renderList
const L = Vue.createTextVNode
const ve = Vue.createCommentVNode
const Oe = Vue.withKeys
const Le = Vue.normalizeProps
const Be = Vue.guardReactiveProps
const Ae = Vue.toRefs
const Ne = Vue.customRef
const Re = Vue.getCurrentScope
const De = Vue.onScopeDispose
const he = Vue.onMounted
const Ue = Vue.nextTick
const Pe = Vue.getCurrentInstance
const ge = Vue.readonly
const je = Vue.watchEffect
const Ve = Vue.reactive
const Ge = Vue.withDirectives
const Ye = Vue.vShow
const F = Vue.mergeProps
const _e = Vue.renderSlot
const Xe = Vue.Teleport
const $e = {
  selectTarget: null
};
function Ke(e) {
  $e.selectTarget = e;
}
function ye() {
  return $e;
}
let Ie = !1;
function de(e) {
  Ie = e ?? !0;
}
function Qe() {
  return Ie;
}
function Ze(e) {
  function t() {
    switch (e) {
      case "up":
      case "bottom":
        return "ns-resize";
      default:
        return "ew-resize";
    }
  }
  function o() {
    switch (e) {
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
    getCursorIcon: t,
    getMoveIncrementHandler: o
  };
}
function Je(e, t, o, l) {
  const n = o ?? y(0);
  return M(e, (i) => {
    if (!i)
      return;
    const s = Ze(t);
    i.style.cursor = s.getCursorIcon();
    const r = s.getMoveIncrementHandler(), u = {
      x: 0,
      y: 0
    }, _ = (c) => {
      const d = r(u, c);
      (!l || l(n.value + d)) && (n.value += r(u, c)), u.x = c.x, u.y = c.y;
    }, p = (c) => {
      c.stopPropagation();
    }, m = (c) => {
      c.stopPropagation(), document.querySelector("body").style.cursor = "default", de(!1), document.removeEventListener("mousemove", _);
    };
    i.addEventListener(
      "mousedown",
      (c) => {
        c.stopPropagation(), de(), document.querySelector("body").style.cursor = i.style.cursor, u.x = c.x, u.y = c.y, document.addEventListener("mousemove", _), document.addEventListener("mouseup", p, {
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
const ke = [];
function et(e) {
  ke.push(e);
}
function tt(e) {
  ke.forEach((t) => t(e));
}
function ae(e) {
  function t(i) {
    return h(() => {
      const r = j(e);
      return r ? window.getComputedStyle(r, null).getPropertyValue(j(i)) : "";
    });
  }
  function o(i) {
    return h(() => {
      const r = j(e);
      if (r) {
        const u = j(i);
        return r.style[u];
      }
      return "";
    });
  }
  function l(i) {
    const s = i ?? t("display");
    return h(() => j(e) ? {
      isFlex: s.value === "flex",
      direction: t("flex-direction").value,
      justifyContent: t("justify-content").value,
      alignItem: t("align-items").value
    } : {
      isFlex: !1,
      direction: "",
      justifyContent: "",
      alignItem: ""
    });
  }
  function n() {
    return h(() => {
      const s = j(e);
      if (!s || !s.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const u = ae(s.parentElement).getFlexBoxInfo();
      return {
        isFlex: u.value.isFlex,
        direction: u.value.direction
      };
    });
  }
  return {
    getStyle: o,
    getComputedStyle: t,
    getFlexBoxInfo: l,
    getParentFlexBoxInfo: n
  };
}
const se = /* @__PURE__ */ new Map();
function nt(e) {
  M(e, (t) => {
    if (!t) {
      se.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const o = ae(t);
    se.forEach((l, n) => {
      l.value = o.getComputedStyle(n).value;
    });
  });
}
function ot(e) {
  return se.has(e) || se.set(e, y(null)), se.get(e);
}
function Z(e, t) {
  const o = ot(e);
  return h({
    get: () => o.value,
    set: (n) => {
      const i = {
        action: "style",
        commandType: "set",
        values: { [e]: n }
      }, s = t ? t(n) : [];
      tt([i, ...s]), o.value = n;
    }
  });
}
const lt = /* @__PURE__ */ I({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {},
    valueFilter: { type: Function }
  },
  setup(e) {
    const t = e, o = Z(t.styleName), l = h(() => {
      if (!o.value)
        return {
          value: 0,
          unit: "px"
        };
      const p = /(-?\d+)([a-zA-Z%]+)/, m = o.value.match(p), c = parseFloat(m[1]), d = m[2];
      return { value: c, unit: d };
    });
    let n = l.value.value, i = l.value.unit;
    const s = h({
      get: () => l.value.value,
      set: (p) => {
        n = p, o.value = `${n}${i}`;
      }
    });
    h({
      get: () => l.value.unit,
      set: (p) => {
        i = p, o.value = `${n}${i}`;
      }
    });
    const r = y(null);
    Je(r, t.direction, s, t.valueFilter);
    const u = {
      "clip-path": t.clipPath
    };
    function _() {
    }
    return (p, m) => ($(), G("div", {
      ref_key: "target",
      ref: r,
      class: "target",
      style: S([{ display: "flex", "justify-content": "center", "align-items": "center" }, u])
    }, [
      x("div", { onClick: _ }, [
        x("div", {
          ref: "numberElement",
          class: "number",
          style: { "user-select": "none", color: "aliceblue", cursor: "pointer" }
        }, O(s.value), 513)
      ])
    ], 512));
  }
});
const B = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, D = /* @__PURE__ */ B(lt, [["__scopeId", "data-v-19de9462"]]), it = {
  class: "relative w-full",
  style: { height: "8rem" }
}, st = /* @__PURE__ */ I({
  __name: "Spacing",
  setup(e) {
    const t = {
      horizontalWidthPercent: 22,
      verticalHeightPercent: 22
    }, o = {
      left: {
        clipPath: `polygon(0 0, 100% ${t.verticalHeightPercent}%, 100% ${100 - t.verticalHeightPercent}%, 0% 100%)`
      },
      up: {
        clipPath: `polygon(0 0, 100% 0, ${100 - t.horizontalWidthPercent}% 100%, ${t.horizontalWidthPercent}% 100%)`
      },
      right: {
        clipPath: `polygon(0 ${t.verticalHeightPercent}%, 100% 0, 100% 100%,0 ${100 - t.verticalHeightPercent}%)`
      },
      bottom: {
        clipPath: `polygon(${t.horizontalWidthPercent}% 0, ${100 - t.horizontalWidthPercent}% 0, 100% 100% , 0 100%)`
      }
    }, l = {
      left: {
        clipPath: `polygon(0 ${t.verticalHeightPercent}%, 100% ${t.verticalHeightPercent * 2}%, 100% ${100 - t.verticalHeightPercent * 2}%, 0% ${100 - t.verticalHeightPercent}%)`
      },
      up: {
        clipPath: `polygon(${t.horizontalWidthPercent}% 0, ${100 - t.horizontalWidthPercent}% 0, ${100 - t.horizontalWidthPercent * 2}% 100%, ${t.horizontalWidthPercent * 2}% 100%)`
      },
      right: {
        clipPath: `polygon(0 ${t.verticalHeightPercent * 2}% , 100% ${t.verticalHeightPercent}% ,100% ${100 - t.verticalHeightPercent}%,0 ${100 - t.verticalHeightPercent * 2}%)`
      },
      bottom: {
        clipPath: `polygon(${t.horizontalWidthPercent * 2}% 0 ,${100 - t.horizontalWidthPercent * 2}% 0 ,${100 - t.horizontalWidthPercent}% 100%,${t.horizontalWidthPercent}% 100%)`
      }
    }, n = (i) => i >= 0;
    return (i, s) => {
      const r = g("q-expansion-item");
      return $(), H(r, {
        "expand-separator": "",
        label: "Spacing(间距)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", it, [
            x("p", {
              class: "m-0 p-0 absolute pointer-events-none",
              style: S([{
                top: `${t.verticalHeightPercent}%`,
                left: `${t.horizontalWidthPercent}%`
              }, { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }])
            }, " padding ", 4),
            s[0] || (s[0] = x("p", {
              class: "m-0 p-0 absolute",
              style: { "font-size": "0.6rem", color: "whitesmoke", "z-index": "999" }
            }, " margin ", -1)),
            a(D, {
              class: "absolute h-full",
              direction: "left",
              "style-name": "margin-left",
              "clip-path": o.left.clipPath,
              style: S([{ width: `${t.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute w-full",
              direction: "up",
              "style-name": "margin-top",
              "clip-path": o.up.clipPath,
              style: S([{ height: `${t.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute h-full right-0",
              direction: "right",
              "style-name": "margin-right",
              "clip-path": o.right.clipPath,
              style: S([{ width: `${t.horizontalWidthPercent}%` }, { "background-color": "#393939" }])
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute bottom-0 w-full",
              direction: "bottom",
              "style-name": "margin-bottom",
              "clip-path": o.bottom.clipPath,
              style: S([{ height: `${t.verticalHeightPercent}%` }, { "background-color": "#424242" }])
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "left",
              "style-name": "padding-left",
              "value-filter": n,
              "clip-path": l.left.clipPath,
              style: S({
                left: `${t.horizontalWidthPercent}%`,
                width: `${t.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "up",
              "style-name": "padding-top",
              "value-filter": n,
              "clip-path": l.up.clipPath,
              style: S([{
                top: `${t.verticalHeightPercent}%`,
                height: `${t.verticalHeightPercent}%`
              }, {}])
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute h-full bg-blue-grey-8",
              direction: "right",
              "style-name": "padding-right",
              "value-filter": n,
              "clip-path": l.right.clipPath,
              style: S({
                right: `${t.horizontalWidthPercent}%`,
                width: `${t.horizontalWidthPercent}%`
              })
            }, null, 8, ["clip-path", "style"]),
            a(D, {
              class: "absolute w-full bg-blue-grey-8",
              direction: "bottom",
              "style-name": "padding-bottom",
              "value-filter": n,
              "clip-path": l.bottom.clipPath,
              style: S({
                bottom: `${t.verticalHeightPercent}%`,
                height: `${t.verticalHeightPercent}%`
              })
            }, null, 8, ["clip-path", "style"])
          ])
        ]),
        _: 1
      });
    };
  }
});
function me(e) {
  return te(e) ? e : y(j(e));
}
function ue(e, t) {
  const o = me(t), l = h(() => j(e).map((n) => {
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
const rt = { key: 1 }, ce = /* @__PURE__ */ I({
  __name: "ToggleButtons",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, { value: o, options: l } = t.model, n = h(
      () => l.value.map((i) => ({ value: i.value, slot: i.value }))
    );
    return (i, s) => {
      const r = g("q-tooltip"), u = g("q-icon"), _ = g("q-btn-toggle");
      return $(), H(_, {
        modelValue: v(o),
        "onUpdate:modelValue": s[0] || (s[0] = (p) => te(o) ? o.value = p : null),
        padding: "8px",
        size: "sm",
        "toggle-color": "primary",
        options: n.value
      }, Ee({ _: 2 }, [
        Fe(v(l), (p) => ({
          name: p.value,
          fn: f(() => [
            p.icon ? ($(), H(u, {
              key: 0,
              name: p.icon
            }, {
              default: f(() => [
                a(r, { style: { "z-index": "99999999" } }, {
                  default: f(() => [
                    L(O(p.tooltip), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["name"])) : ($(), G("span", rt, O(p.label), 1))
          ])
        }))
      ]), 1032, ["modelValue", "options"]);
    };
  }
}), at = { class: "col no-wrap" }, ut = { key: 0 }, ct = { class: "item-title text-left text-caption text-capitalize" }, pt = { class: "item-title text-left text-caption text-capitalize" }, dt = /* @__PURE__ */ I({
  __name: "Layout",
  setup(e) {
    const t = Z("display"), o = ye().selectTarget, l = ae(o), n = ue(
      [
        { value: "block", icon: "inbox" },
        { value: "flex", icon: "inventory_2" }
      ],
      t
    ), i = l.getFlexBoxInfo(
      n.value
    ), s = Z("flex-direction"), r = ue(
      [
        { value: "row", label: "Horizontal" },
        { value: "column", label: "Vertical" }
      ],
      s
    ), u = Z("align-items"), _ = h(
      () => r.value.value === "row" ? "vertical align" : "horizontal align"
    ), p = h(() => r.value.value === "row" ? [
      { value: "start", icon: "vertical_align_top", tooltip: "top" },
      { value: "center", icon: "align_vertical_center", tooltip: "center" },
      { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" }
    ] : [
      { value: "start", icon: "align_horizontal_left", tooltip: "left" },
      { value: "center", icon: "align_horizontal_center", tooltip: "center" },
      { value: "end", icon: "align_horizontal_right", tooltip: "right" }
    ]), m = ue(p, u), c = Z("justify-content"), d = h(
      () => r.value.value === "row" ? "vertical justify" : "horizontal justify"
    ), b = h(() => r.value.value === "row" ? [
      { value: "start", icon: "align_horizontal_left", tooltip: "left" },
      { value: "center", icon: "align_horizontal_center", tooltip: "center" },
      { value: "end", icon: "align_horizontal_right", tooltip: "right" }
    ] : [
      { value: "start", icon: "vertical_align_top", tooltip: "top" },
      { value: "center", icon: "align_vertical_center", tooltip: "center" },
      { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" }
    ]), k = ue(b, c);
    return (V, z) => {
      const E = g("q-item"), N = g("q-separator"), W = g("q-list"), q = g("q-expansion-item");
      return $(), H(q, {
        "expand-separator": "",
        label: "Layout(布局)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", at, [
            a(W, { bordered: "" }, {
              default: f(() => [
                a(E, { class: "items-center gap-2 px-3 py-2" }, {
                  default: f(() => [
                    z[0] || (z[0] = x("span", { class: "item-title text-capitalize" }, "display ", -1)),
                    a(ce, {
                      padding: "4px",
                      model: v(n)
                    }, null, 8, ["model"])
                  ]),
                  _: 1
                }),
                a(N),
                v(i).isFlex ? ($(), G("div", ut, [
                  a(E, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      z[1] || (z[1] = x("span", { class: "item-title text-caption text-capitalize" }, "direction", -1)),
                      a(ce, { model: v(r) }, null, 8, ["model"])
                    ]),
                    _: 1
                  }),
                  a(E, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      x("span", ct, O(_.value), 1),
                      a(ce, { model: v(m) }, null, 8, ["model"])
                    ]),
                    _: 1
                  }),
                  a(E, { class: "items-center gap-2 px-3 py-2" }, {
                    default: f(() => [
                      x("span", pt, O(d.value), 1),
                      a(ce, { model: v(k) }, null, 8, ["model"])
                    ]),
                    _: 1
                  })
                ])) : ve("", !0)
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
const ft = /* @__PURE__ */ B(dt, [["__scopeId", "data-v-3f7cbfe8"]]), _t = { class: "col no-wrap" }, mt = { class: "item-title text-left text-caption text-capitalize" }, vt = /* @__PURE__ */ I({
  __name: "FlexItem",
  setup(e) {
    const o = ae(ye().selectTarget).getParentFlexBoxInfo(), l = Z("align-self"), n = h(() => o.value.direction === "row" ? {
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
      const r = g("q-tooltip"), u = g("q-icon"), _ = g("q-btn-toggle"), p = g("q-item"), m = g("q-list"), c = g("q-expansion-item");
      return v(o).isFlex ? ($(), H(c, {
        key: 0,
        "expand-separator": "",
        label: "FlexItem(Flex子元素)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", _t, [
            a(m, { bordered: "" }, {
              default: f(() => [
                a(p, { class: "items-center gap-2 px-3 py-2" }, {
                  default: f(() => [
                    x("span", mt, O(n.value.title), 1),
                    a(_, {
                      modelValue: v(l),
                      "onUpdate:modelValue": s[0] || (s[0] = (d) => te(l) ? l.value = d : null),
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
                        a(u, {
                          name: n.value.start.icon
                        }, {
                          default: f(() => [
                            a(r, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(O(n.value.start.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      center: f(() => [
                        a(u, {
                          name: n.value.center.icon
                        }, {
                          default: f(() => [
                            a(r, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(O(n.value.center.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      end: f(() => [
                        a(u, {
                          name: n.value.end.icon
                        }, {
                          default: f(() => [
                            a(r, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(O(n.value.end.tooltipLabel), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      stretch: f(() => [
                        a(u, {
                          name: n.value.stretch.icon
                        }, {
                          default: f(() => [
                            a(r, { style: { "z-index": "99999999" } }, {
                              default: f(() => [
                                L(O(n.value.stretch.tooltipLabel), 1)
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
      })) : ve("", !0);
    };
  }
});
const ht = /* @__PURE__ */ B(vt, [["__scopeId", "data-v-1f03c1b9"]]), gt = { class: "cus-input" }, yt = /* @__PURE__ */ I({
  __name: "ValueInput",
  props: {
    model: {}
  },
  setup(e) {
    const o = e.model, l = y(null), n = y(null), {
      inputValue: i,
      selectValue: s,
      selectDisplay: r,
      inputPlaceholder: u,
      itemOptions: _,
      updateInput: p
    } = o;
    function m(c) {
      var d;
      c.currentTarget === c.target && (p(c.currentTarget.value), (d = l.value) == null || d.blur());
    }
    return (c, d) => {
      const b = g("q-icon"), k = g("q-item-section"), V = g("q-item-label"), z = g("q-item"), E = g("q-select"), N = g("q-input");
      return $(), G("div", gt, [
        a(N, {
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
          onKeyup: Oe(m, ["enter"])
        }, {
          append: f(() => [
            a(E, {
              ref_key: "selectRef",
              ref: n,
              "display-value": v(r),
              "hide-dropdown-icon": "",
              class: "q-select",
              dense: "",
              "options-cover": "",
              modelValue: v(s),
              "onUpdate:modelValue": d[0] || (d[0] = (W) => te(s) ? s.value = W : null),
              options: v(_),
              color: "teal",
              "emit-value": "",
              "options-selected-class": "text-deep-orange",
              onPopupShow: d[1] || (d[1] = (W) => v(de)(!0)),
              onPopupHide: d[2] || (d[2] = (W) => v(de)(!1)),
              "popup-content-style": "z-index:9999999"
            }, {
              option: f((W) => [
                a(z, Le(Be(W.itemProps)), {
                  default: f(() => [
                    a(k, { avatar: "" }, {
                      default: f(() => [
                        v(s) === W.opt.value ? ($(), H(b, {
                          key: 0,
                          name: "check"
                        })) : ve("", !0)
                      ]),
                      _: 2
                    }, 1024),
                    a(k, null, {
                      default: f(() => [
                        a(V, null, {
                          default: f(() => [
                            L(O(W.opt.value), 1)
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
        }, 8, ["model-value", "placeholder"])
      ]);
    };
  }
});
const ne = /* @__PURE__ */ B(yt, [["__scopeId", "data-v-495359de"]]);
function oe(e, t, o) {
  t = t ?? {};
  const l = e.map((d) => typeof d == "string" ? { value: d, label: d } : d);
  function n(d) {
    return l.find((b) => b.value === d);
  }
  const i = me(t.inputValue ?? null), s = me(t.selectValue ?? null), r = {
    lastInvaildInputValue: i.value
  };
  xt(s, i, o, r), bt(s, i, o, r);
  const u = y(null), _ = h(() => {
    var d;
    return s.value ? (d = n(s.value)) == null ? void 0 : d.label : "";
  }), p = h(() => {
    if (s.value) {
      const d = n(s.value);
      return (d == null ? void 0 : d.value) ?? (d == null ? void 0 : d.label);
    }
    return "";
  });
  function m(d) {
    i.value = d;
  }
  function c(d) {
    s.value = d;
  }
  return {
    inputValue: i,
    selectValue: s,
    selectItem: u,
    selectDisplay: _,
    inputPlaceholder: p,
    itemOptions: l,
    updateInput: m,
    updateSelect: c
  };
}
function xt(e, t, o, l) {
  const { nonValueOptions: n, defaultOptionValue: i, optionValueIfnonValue: s } = o ?? {};
  M(t, (r) => {
    r !== null && (n && i && r.length > 0 && e.value && n.includes(e.value) && (e.value = i), s && n && r && e.value && n.includes(e.value) && (e.value = s), !r && n && (e.value = n[0]), r && (l.lastInvaildInputValue = r));
  });
}
function bt(e, t, o, l) {
  const { nonValueOptions: n } = o ?? {};
  M(e, (i) => {
    i !== null && (n && n.includes(i) ? t.value = "" : !t.value && l.lastInvaildInputValue !== null && (t.value = l.lastInvaildInputValue));
  });
}
const wt = [
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
], qt = [
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
], Pt = [
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
    value: "none"
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
    value: "auto"
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
    value: "none"
  }
];
function le(e, t, o) {
  const l = Z(t), n = h(() => {
    const i = e.inputValue, s = e.selectValue;
    return s.value && o.includes(s.value) ? s.value : `${i.value}${s.value}`;
  });
  M(n, (i) => {
    l.value = i;
  });
}
function J(e) {
  return Re() ? (De(e), !0) : !1;
}
function P(e) {
  return typeof e == "function" ? e() : v(e);
}
const re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const kt = (e) => e != null, zt = Object.prototype.toString, St = (e) => zt.call(e) === "[object Object]", Mt = () => {
};
function Ct(e) {
  return e || Pe();
}
function Tt(e, t = {}) {
  if (!te(e))
    return Ae(e);
  const o = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    o[l] = Ne(() => ({
      get() {
        return e.value[l];
      },
      set(n) {
        var i;
        if ((i = P(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const r = [...e.value];
            r[l] = n, e.value = r;
          } else {
            const r = { ...e.value, [l]: n };
            Object.setPrototypeOf(r, Object.getPrototypeOf(e.value)), e.value = r;
          }
        else
          e.value[l] = n;
      }
    }));
  return o;
}
function ze(e, t = !0, o) {
  Ct() ? he(e, o) : t ? e() : Ue(e);
}
function Ht(e, t = 1e3, o = {}) {
  const {
    immediate: l = !0,
    immediateCallback: n = !1
  } = o;
  let i = null;
  const s = y(!1);
  function r() {
    i && (clearInterval(i), i = null);
  }
  function u() {
    s.value = !1, r();
  }
  function _() {
    const p = P(t);
    p <= 0 || (s.value = !0, n && e(), r(), i = setInterval(e, p));
  }
  if (l && re && _(), te(t) || typeof t == "function") {
    const p = M(t, () => {
      s.value && re && _();
    });
    J(p);
  }
  return J(u), {
    isActive: s,
    pause: u,
    resume: _
  };
}
function ee(e) {
  var t;
  const o = P(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const Y = re ? window : void 0, Wt = re ? window.document : void 0;
function T(...e) {
  let t, o, l, n;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, l, n] = e, t = Y) : [t, o, l, n] = e, !t)
    return Mt;
  Array.isArray(o) || (o = [o]), Array.isArray(l) || (l = [l]);
  const i = [], s = () => {
    i.forEach((p) => p()), i.length = 0;
  }, r = (p, m, c, d) => (p.addEventListener(m, c, d), () => p.removeEventListener(m, c, d)), u = M(
    () => [ee(t), P(n)],
    ([p, m]) => {
      if (s(), !p)
        return;
      const c = St(m) ? { ...m } : m;
      i.push(
        ...o.flatMap((d) => l.map((b) => r(p, d, b, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), _ = () => {
    u(), s();
  };
  return J(_), _;
}
function Et() {
  const e = y(!1), t = Pe();
  return t && he(() => {
    e.value = !0;
  }, t), e;
}
function fe(e) {
  const t = Et();
  return h(() => (t.value, !!e()));
}
function Se(e, t, o = {}) {
  const { window: l = Y, ...n } = o;
  let i;
  const s = fe(() => l && "MutationObserver" in l), r = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => {
    const c = P(e), d = (Array.isArray(c) ? c : [c]).map(ee).filter(kt);
    return new Set(d);
  }), _ = M(
    () => u.value,
    (c) => {
      r(), s.value && c.size && (i = new MutationObserver(t), c.forEach((d) => i.observe(d, n)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => i == null ? void 0 : i.takeRecords(), m = () => {
    r(), _();
  };
  return J(m), {
    isSupported: s,
    stop: m,
    takeRecords: p
  };
}
function Ft(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: l = void 0,
    window: n = Y
  } = t, i = y(!1), s = l ? 1e3 / l : null;
  let r = 0, u = null;
  function _(c) {
    if (!i.value || !n)
      return;
    r || (r = c);
    const d = c - r;
    if (s && d < s) {
      u = n.requestAnimationFrame(_);
      return;
    }
    r = c, e({ delta: d, timestamp: c }), u = n.requestAnimationFrame(_);
  }
  function p() {
    !i.value && n && (i.value = !0, r = 0, u = n.requestAnimationFrame(_));
  }
  function m() {
    i.value = !1, u != null && n && (n.cancelAnimationFrame(u), u = null);
  }
  return o && p(), J(m), {
    isActive: ge(i),
    pause: m,
    resume: p
  };
}
function Ot(e, t = {}) {
  const { window: o = Y } = t, l = fe(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let n;
  const i = y(!1), s = (_) => {
    i.value = _.matches;
  }, r = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", s) : n.removeListener(s));
  }, u = je(() => {
    l.value && (r(), n = o.matchMedia(P(e)), "addEventListener" in n ? n.addEventListener("change", s) : n.addListener(s), i.value = n.matches);
  });
  return J(() => {
    u(), r(), n = void 0;
  }), i;
}
function Lt(e, t = {}) {
  var o, l;
  const {
    pointerTypes: n,
    preventDefault: i,
    stopPropagation: s,
    exact: r,
    onMove: u,
    onEnd: _,
    onStart: p,
    initialValue: m,
    axis: c = "both",
    draggingElement: d = Y,
    containerElement: b,
    handle: k = e
  } = t, V = y(
    (o = P(m)) != null ? o : { x: 0, y: 0 }
  ), z = y(), E = (w) => n ? n.includes(w.pointerType) : !0, N = (w) => {
    P(i) && w.preventDefault(), P(s) && w.stopPropagation();
  }, W = (w) => {
    var K;
    if (w.button !== 0 || P(t.disabled) || !E(w) || P(r) && w.target !== P(e))
      return;
    const A = P(b), Q = (K = A == null ? void 0 : A.getBoundingClientRect) == null ? void 0 : K.call(A), R = P(e).getBoundingClientRect(), be = {
      x: w.clientX - (A ? R.left - Q.left + A.scrollLeft : R.left),
      y: w.clientY - (A ? R.top - Q.top + A.scrollTop : R.top)
    };
    (p == null ? void 0 : p(be, w)) !== !1 && (z.value = be, N(w));
  }, q = (w) => {
    if (P(t.disabled) || !E(w) || !z.value)
      return;
    const K = P(b), A = P(e).getBoundingClientRect();
    let { x: Q, y: R } = V.value;
    (c === "x" || c === "both") && (Q = w.clientX - z.value.x, K && (Q = Math.min(Math.max(0, Q), K.scrollWidth - A.width))), (c === "y" || c === "both") && (R = w.clientY - z.value.y, K && (R = Math.min(Math.max(0, R), K.scrollHeight - A.height))), V.value = {
      x: Q,
      y: R
    }, u == null || u(V.value, w), N(w);
  }, X = (w) => {
    P(t.disabled) || !E(w) || z.value && (z.value = void 0, _ == null || _(V.value, w), N(w));
  };
  if (re) {
    const w = { capture: (l = t.capture) != null ? l : !0 };
    T(k, "pointerdown", W, w), T(d, "pointermove", q, w), T(d, "pointerup", X, w);
  }
  return {
    ...Tt(V),
    position: V,
    isDragging: h(() => !!z.value),
    style: h(
      () => `left:${V.value.x}px;top:${V.value.y}px;`
    )
  };
}
function Bt(e, t, o = {}) {
  const { window: l = Y, ...n } = o;
  let i;
  const s = fe(() => l && "ResizeObserver" in l), r = () => {
    i && (i.disconnect(), i = void 0);
  }, u = h(() => Array.isArray(e) ? e.map((m) => ee(m)) : [ee(e)]), _ = M(
    u,
    (m) => {
      if (r(), s.value && l) {
        i = new ResizeObserver(t);
        for (const c of m)
          c && i.observe(c, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    r(), _();
  };
  return J(p), {
    isSupported: s,
    stop: p
  };
}
function Me(e, t = {}) {
  const {
    reset: o = !0,
    windowResize: l = !0,
    windowScroll: n = !0,
    immediate: i = !0
  } = t, s = y(0), r = y(0), u = y(0), _ = y(0), p = y(0), m = y(0), c = y(0), d = y(0);
  function b() {
    const k = ee(e);
    if (!k) {
      o && (s.value = 0, r.value = 0, u.value = 0, _.value = 0, p.value = 0, m.value = 0, c.value = 0, d.value = 0);
      return;
    }
    const V = k.getBoundingClientRect();
    s.value = V.height, r.value = V.bottom, u.value = V.left, _.value = V.right, p.value = V.top, m.value = V.width, c.value = V.x, d.value = V.y;
  }
  return Bt(e, b), M(() => ee(e), (k) => !k && b()), Se(e, b, {
    attributeFilter: ["style", "class"]
  }), n && T("scroll", b, { capture: !0, passive: !0 }), l && T("resize", b, { passive: !0 }), ze(() => {
    i && b();
  }), {
    height: s,
    bottom: r,
    left: u,
    right: _,
    top: p,
    width: m,
    x: c,
    y: d,
    update: b
  };
}
function At(e) {
  const {
    x: t,
    y: o,
    document: l = Wt,
    multiple: n,
    interval: i = "requestAnimationFrame",
    immediate: s = !0
  } = e, r = fe(() => P(n) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), u = y(null), _ = () => {
    var m, c;
    u.value = P(n) ? (m = l == null ? void 0 : l.elementsFromPoint(P(t), P(o))) != null ? m : [] : (c = l == null ? void 0 : l.elementFromPoint(P(t), P(o))) != null ? c : null;
  }, p = i === "requestAnimationFrame" ? Ft(_, { immediate: s }) : Ht(_, i, { immediate: s });
  return {
    isSupported: r,
    element: u,
    ...p
  };
}
const Nt = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Ce(e = {}) {
  const {
    type: t = "page",
    touch: o = !0,
    resetOnTouchEnds: l = !1,
    initialValue: n = { x: 0, y: 0 },
    window: i = Y,
    target: s = i,
    scroll: r = !0,
    eventFilter: u
  } = e;
  let _ = null;
  const p = y(n.x), m = y(n.y), c = y(null), d = typeof t == "function" ? t : Nt[t], b = (q) => {
    const X = d(q);
    _ = q, X && ([p.value, m.value] = X, c.value = "mouse");
  }, k = (q) => {
    if (q.touches.length > 0) {
      const X = d(q.touches[0]);
      X && ([p.value, m.value] = X, c.value = "touch");
    }
  }, V = () => {
    if (!_ || !i)
      return;
    const q = d(_);
    _ instanceof MouseEvent && q && (p.value = q[0] + i.scrollX, m.value = q[1] + i.scrollY);
  }, z = () => {
    p.value = n.x, m.value = n.y;
  }, E = u ? (q) => u(() => b(q), {}) : (q) => b(q), N = u ? (q) => u(() => k(q), {}) : (q) => k(q), W = u ? () => u(() => V(), {}) : () => V();
  if (s) {
    const q = { passive: !0 };
    T(s, ["mousemove", "dragover"], E, q), o && t !== "movement" && (T(s, ["touchstart", "touchmove"], N, q), l && T(s, "touchend", z, q)), r && t === "page" && T(i, "scroll", W, { passive: !0 });
  }
  return {
    x: p,
    y: m,
    sourceType: c
  };
}
function xe(e = {}) {
  const {
    window: t = Y,
    initialWidth: o = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: n = !0,
    includeScrollbar: i = !0
  } = e, s = y(o), r = y(l), u = () => {
    t && (i ? (s.value = t.innerWidth, r.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, r.value = t.document.documentElement.clientHeight));
  };
  if (u(), ze(u), T("resize", u, { passive: !0 }), n) {
    const _ = Ot("(orientation: portrait)");
    M(_, () => u());
  }
  return { width: s, height: r };
}
const C = y(null);
function Rt(e) {
  C.value = e;
}
function Dt() {
  return ge(C);
}
function Ut() {
  const e = Ve(Me(C));
  Se(
    C,
    () => {
      e.update();
    },
    { attributes: !0 }
  ), T("scroll", e.update, !0);
  const t = h(() => C.value ? {
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
  }), o = h(() => C.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), l = h(() => C.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), n = h(() => C.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), i = h(() => C.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), s = h(() => C.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), r = h(() => C.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), u = h(() => C.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), _ = h(() => C.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return {
    selectTarget: ge(C),
    rectStyles: t,
    p1: o,
    p2: l,
    p3: n,
    p4: i,
    p5: s,
    p6: r,
    p7: u,
    p8: _
  };
}
const jt = /* @__PURE__ */ I({
  __name: "Width",
  setup(e) {
    const t = wt, o = Dt(), n = ae(o).getStyle("width");
    M(n, (s) => {
      console.log("width:", s === null), buildInputValueDto(s).splitTo();
    });
    const i = oe(
      t,
      { selectValue: "auto" },
      {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto"
      }
    );
    return le(i, "width", ["auto"]), (s, r) => {
      const u = g("q-item-section"), _ = g("q-item");
      return $(), H(_, { dense: "" }, {
        default: f(() => [
          a(u, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => r[0] || (r[0] = [
              L("Width")
            ])),
            _: 1
          }),
          a(u, null, {
            default: f(() => [
              a(ne, { model: v(i) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Gt = /* @__PURE__ */ B(jt, [["__scopeId", "data-v-e786e232"]]), Yt = /* @__PURE__ */ I({
  __name: "Height",
  setup(e) {
    const o = oe(
      qt,
      { selectValue: "auto" },
      {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto"
      }
    );
    return le(o, "height", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), H(s, { dense: "" }, {
        default: f(() => [
          a(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => n[0] || (n[0] = [
              L("Height")
            ])),
            _: 1
          }),
          a(i, null, {
            default: f(() => [
              a(ne, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Xt = /* @__PURE__ */ B(Yt, [["__scopeId", "data-v-fe62d792"]]), Kt = /* @__PURE__ */ I({
  __name: "MaxWidth",
  setup(e) {
    const o = oe(
      Vt,
      { selectValue: "none" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none"
      }
    );
    return le(o, "max-width", ["none"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), H(s, { dense: "" }, {
        default: f(() => [
          a(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => n[0] || (n[0] = [
              L("Max W")
            ])),
            _: 1
          }),
          a(i, null, {
            default: f(() => [
              a(ne, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Qt = /* @__PURE__ */ B(Kt, [["__scopeId", "data-v-c2f1619e"]]), Zt = /* @__PURE__ */ I({
  __name: "MinWidth",
  setup(e) {
    const o = oe(
      Pt,
      { inputValue: "0", selectValue: "px" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"]
      }
    );
    return le(o, "min-width", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), H(s, { dense: "" }, {
        default: f(() => [
          a(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => n[0] || (n[0] = [
              L("Min W")
            ])),
            _: 1
          }),
          a(i, null, {
            default: f(() => [
              a(ne, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Jt = /* @__PURE__ */ B(Zt, [["__scopeId", "data-v-4b11a972"]]), en = /* @__PURE__ */ I({
  __name: "MaxHeight",
  setup(e) {
    const o = oe(
      It,
      { selectValue: "none" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none"
      }
    );
    return le(o, "max-height", ["none"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), H(s, { dense: "" }, {
        default: f(() => [
          a(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => n[0] || (n[0] = [
              L("Max H")
            ])),
            _: 1
          }),
          a(i, null, {
            default: f(() => [
              a(ne, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const tn = /* @__PURE__ */ B(en, [["__scopeId", "data-v-2dec6911"]]), nn = /* @__PURE__ */ I({
  __name: "MinHeight",
  setup(e) {
    const o = oe(
      $t,
      { inputValue: "0", selectValue: "px" },
      {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"]
      }
    );
    return le(o, "min-height", ["auto"]), (l, n) => {
      const i = g("q-item-section"), s = g("q-item");
      return $(), H(s, { dense: "" }, {
        default: f(() => [
          a(i, {
            class: "item-title",
            style: { "flex-grow": "0", "flex-basis": "auto" }
          }, {
            default: f(() => n[0] || (n[0] = [
              L("Min H")
            ])),
            _: 1
          }),
          a(i, null, {
            default: f(() => [
              a(ne, { model: v(o) }, null, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const on = /* @__PURE__ */ B(nn, [["__scopeId", "data-v-e5219a82"]]), ln = { class: "col no-wrap" }, sn = /* @__PURE__ */ I({
  __name: "Size",
  setup(e) {
    return (t, o) => {
      const l = g("q-item-section"), n = g("q-item"), i = g("q-list"), s = g("q-expansion-item");
      return $(), H(s, {
        "expand-separator": "",
        label: "Size(大小)",
        "header-class": "text-red-1 bg-green-8",
        "expand-icon-class": "text-red-1"
      }, {
        default: f(() => [
          x("div", ln, [
            a(i, { bordered: "" }, {
              default: f(() => [
                a(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    a(l, null, {
                      default: f(() => [
                        a(Gt)
                      ]),
                      _: 1
                    }),
                    a(l, { class: "!ml-0" }, {
                      default: f(() => [
                        a(Xt)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    a(l, null, {
                      default: f(() => [
                        a(Jt)
                      ]),
                      _: 1
                    }),
                    a(l, { class: "!ml-0" }, {
                      default: f(() => [
                        a(on)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(n, {
                  class: "!p-0",
                  dense: ""
                }, {
                  default: f(() => [
                    a(l, null, {
                      default: f(() => [
                        a(Qt)
                      ]),
                      _: 1
                    }),
                    a(l, { class: "!ml-0" }, {
                      default: f(() => [
                        a(tn)
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
const rn = /* @__PURE__ */ B(sn, [["__scopeId", "data-v-bb8f5952"]]), an = /* @__PURE__ */ I({
  __name: "MainPanel",
  setup(e) {
    const t = y("style"), o = ye().selectTarget;
    nt(o);
    const l = h(() => !!o.value);
    return (n, i) => {
      const s = g("q-tab"), r = g("q-tabs"), u = g("q-separator"), _ = g("q-list"), p = g("q-tab-panel"), m = g("q-tab-panels");
      return $(), G("div", null, [
        a(r, {
          class: "bg-secondary-5",
          modelValue: t.value,
          "onUpdate:modelValue": i[0] || (i[0] = (c) => t.value = c),
          align: "left",
          dense: "",
          "no-caps": ""
        }, {
          default: f(() => [
            a(s, {
              name: "style",
              label: "style"
            }),
            a(s, {
              name: "cusStyle",
              label: "cus style"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        Ge(a(m, {
          modelValue: t.value,
          "onUpdate:modelValue": i[1] || (i[1] = (c) => t.value = c),
          "keep-alive": "",
          animated: "",
          swipeable: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: f(() => [
            a(p, {
              name: "style",
              style: { padding: "0" }
            }, {
              default: f(() => [
                a(_, { bordered: "" }, {
                  default: f(() => [
                    a(ht),
                    a(ft),
                    a(u),
                    a(st),
                    a(u),
                    a(rn)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]), [
          [Ye, l.value]
        ])
      ]);
    };
  }
});
function Te() {
  const { width: e, height: t } = xe(), o = h(() => `0 0 ${e.value} ${t.value}`), l = h(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: o,
    styles: l
  };
}
function He(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function We(e, t) {
  if (!He(e, t))
    return null;
  for (const o of e.classList)
    if (o.startsWith(t.elementTypePrefix))
      return o.slice(t.elementTypePrefix.length + 1);
  return null;
}
function pe(e, t) {
  if (!He(e, t))
    return null;
  for (const o of e.classList)
    if (o.startsWith(t.idPrefix))
      return parseInt(o.slice(t.idPrefix.length + 1));
  return null;
}
const un = ["viewBox"], cn = /* @__PURE__ */ I({
  __name: "Aiming",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, { viewBox: o, styles: l } = Te(), { rectStyles: n, p1: i, p2: s, p3: r, p4: u, p5: _, p6: p, p7: m, p8: c } = t.model;
    return (d, b) => ($(), G("svg", {
      class: "vis-aiming",
      viewBox: v(o),
      version: "1.1",
      style: S([{ position: "fixed", top: "0", left: "0", "pointer-events": "none" }, v(l)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      x("rect", {
        stroke: "hotpink",
        fill: "none",
        width: "100%",
        height: "100%",
        style: S(v(n))
      }, null, 4),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(i), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(s), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(r), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(u), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(_), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(p), { r: "2" }), null, 16),
      x("circle", F({
        stroke: "hotpink",
        fill: "white"
      }, v(m), { r: "2" }), null, 16),
      x("circle", F({ fill: "hotpink" }, v(c), { r: "2" }), null, 16)
    ], 12, un));
  }
}), pn = /* @__PURE__ */ I({
  __name: "Panel",
  setup(e) {
    const t = y(null), { style: o } = Lt(t, {
      initialValue: { x: 40, y: 40 },
      preventDefault: !0
    });
    return (l, n) => {
      const i = g("q-icon");
      return $(), G("div", {
        style: S([v(o), { position: "fixed" }]),
        "layout-tool-panel": ""
      }, [
        x("div", {
          ref_key: "el",
          ref: t,
          class: "cursor-move bg-secondary row items-center gap-2 text-cyan-1 text-h6 text-weight-bolder px-2",
          style: { width: "100%", top: "0", left: "0", "z-index": "999", height: "2rem" }
        }, [
          a(i, { name: "gps_fixed" }),
          n[0] || (n[0] = x("span", null, "toolkit", -1))
        ], 512),
        _e(l.$slots, "default"),
        _e(l.$slots, "footer")
      ], 4);
    };
  }
}), U = y(null);
function dn(e) {
  U.value = e;
}
function fn() {
  const { width: e, height: t } = xe(), o = Ve(Me(U));
  T("scroll", o.update, !0);
  const l = h(() => U.value ? {
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
  }), n = h(() => U.value ? {
    x1: 0,
    y1: o.top,
    x2: e.value,
    y2: o.top
  } : {
    x1: 0,
    y1: 8,
    x2: o.width,
    y2: 8,
    "stroke-width": 0
  }), i = h(() => U.value ? {
    x1: o.left + o.width,
    y1: 0,
    x2: o.left + o.width,
    y2: t.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: t.value,
    "stroke-width": 0
  }), s = h(() => U.value ? {
    x1: 0,
    y1: o.top + o.height,
    x2: e.value,
    y2: o.top + o.height
  } : {
    x1: 0,
    y1: 8,
    x2: o.width,
    y2: 8,
    "stroke-width": 0
  }), r = h(() => U.value ? {
    x1: o.left,
    y1: 0,
    x2: o.left,
    y2: t.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: t.value,
    "stroke-width": 0
  });
  return { hoverElement: U, rectStyles: l, topLine: n, rightLine: i, bottomLine: s, leftLine: r };
}
const _n = ["viewBox"], ie = "red", mn = /* @__PURE__ */ I({
  __name: "VisHover",
  setup(e) {
    const { viewBox: t, styles: o } = Te(), { rectStyles: l, topLine: n, rightLine: i, bottomLine: s, leftLine: r } = fn();
    return (u, _) => ($(), G("svg", {
      class: "vis-hover",
      viewBox: v(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: S([{ position: "fixed", top: "0", left: "0", "pointer-events": "none", "z-index": "9999999" }, v(o)])
    }, [
      x("rect", {
        fill: "none",
        stroke: ie,
        "stroke-width": "1",
        style: S(v(l))
      }, null, 4),
      x("line", F({ class: "top" }, v(n), {
        stroke: ie,
        "stroke-dasharray": "3 2"
      }), null, 16),
      x("line", F({ class: "right" }, v(i), {
        stroke: ie,
        "stroke-dasharray": "3 2"
      }), null, 16),
      x("line", F({ class: "bottom" }, v(s), {
        stroke: ie,
        "stroke-dasharray": "3 2"
      }), null, 16),
      x("line", F({ class: "left" }, v(r), {
        stroke: ie,
        "stroke-dasharray": "3 2"
      }), null, 16)
    ], 12, _n));
  }
});
function vn(e, t) {
  const { width: o } = xe(), { x: l, y: n } = Ce({ type: "client" }), i = h(() => {
    let u = l.value, _ = n.value;
    return o.value - l.value < 10 && (u -= 10), n.value < 10 && (_ += 10), { x: u, y: _ };
  }), s = h(() => t.value ? {
    display: "block",
    left: `${i.value.x}px`,
    top: `${i.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: h(() => t.value ? We(t.value, e) : null),
    typeNameTagStyles: s
  };
}
function hn(e) {
  const { x: t, y: o } = Ce({ type: "client" }), { element: l } = At({ x: t, y: o }), n = h(() => {
    if (l.value === null)
      return null;
    const i = l.value.closest(e.selectors);
    return i === null || i.closest("[layout-tool-panel]") ? null : i;
  });
  return M(n, (i) => {
    dn(i);
  }), { hoverElement: n };
}
function gn(e) {
  return !!e.closest(".q-color-picker");
}
function yn(e) {
  T(
    document.querySelector("body"),
    "click",
    (t) => {
      if (Qe())
        return;
      const o = t.target;
      o.closest("[layout-tool-panel]") || gn(o) || e.value !== null && (Rt(e.value), t.stopPropagation());
    },
    { capture: !0 }
  ), T(
    document.querySelector("body"),
    "mouseenter",
    (t) => {
      e.value && t.stopPropagation();
    },
    { capture: !0 }
  );
}
function xn(e, t) {
  let o = e.parentElement.closest(
    `${t.selectors}`
  );
  for (; o !== null; ) {
    if (window.getComputedStyle(o, null).getPropertyValue("display") === "flex")
      return { id: pe(o, t), dom: o };
    o = o.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const bn = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function we(e, t) {
  if (!bn.has(We(e, t)))
    return {
      isFlex: !1,
      direction: null
    };
  const o = window.getComputedStyle(e, null), l = o.getPropertyValue("display") === "flex";
  let n = null;
  return l && (n = o.getPropertyValue("flex-direction")), {
    isFlex: l,
    direction: n
  };
}
function qe(e, t) {
  const o = `.${t.idPrefix}-${e}`;
  return document.querySelector(o);
}
function wn(e, t) {
  function o(n, i) {
    return window.getComputedStyle(qe(n, e), null).getPropertyValue(i);
  }
  function l(n) {
    const i = qe(n, e);
    t.value = i;
  }
  return { queryStyle: o, selectTarget: l };
}
function qn(e) {
  if (e) {
    var t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("href", e), t.setAttribute("type", "text/css"), document.head.appendChild(t);
  }
}
const Vn = /* @__PURE__ */ I({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    styleUrl: {}
  },
  emits: ["hoverChange", "selectedChange", "command"],
  setup(e, { expose: t, emit: o }) {
    const l = e, n = o;
    function i(m) {
      const c = p.value;
      if (!c)
        return;
      const d = pe(c, l.selectorConfig);
      if (!d)
        throw new Error("not found selected element");
      n("command", { id: d, commands: m }), console.log("send cmd:", m);
    }
    et(i), he(() => {
      qn(l.styleUrl);
    });
    const { hoverElement: s } = hn(l.selectorConfig), { typeNameTagStyles: r, typeName: u } = vn(
      l.selectorConfig,
      s
    ), _ = Ut(), p = _.selectTarget;
    return yn(s), M(s, (m) => {
      if (m) {
        const c = pe(m, l.selectorConfig);
        n("hoverChange", { id: c });
        return;
      }
      n("hoverChange", { id: null });
    }), M(p, (m) => {
      const c = {
        isFlex: !1,
        direction: null
      };
      if (m) {
        const d = pe(m, l.selectorConfig), b = xn(m, l.selectorConfig);
        let k = {
          isFlex: !1,
          direction: null
        };
        b && (k = we(b.dom, l.selectorConfig)), n("selectedChange", {
          id: d,
          parentBoxId: b !== null ? b.id : null,
          flexInfo: we(m, l.selectorConfig),
          parentFlexInfo: k
        });
        return;
      }
      n("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: c,
        parentFlexInfo: c
      });
    }), t(wn(l.selectorConfig, p)), Ke(p), (m, c) => ($(), H(Xe, { to: "body" }, [
      a(mn),
      a(cn, {
        model: v(_),
        style: { "z-index": "9999999" }
      }, null, 8, ["model"]),
      a(pn, {
        class: "non-selectable",
        style: { "z-index": "9999999", width: "350px" }
      }, {
        footer: f(() => [
          _e(m.$slots, "footer")
        ]),
        default: f(() => [
          a(an)
        ]),
        _: 3
      }),
      x("div", {
        class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
        style: S([v(r), { "z-index": "9999999" }])
      }, O(v(u)), 5)
    ]));
  }
});
export {
  Vn as default
};
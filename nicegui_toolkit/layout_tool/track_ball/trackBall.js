const m = Vue.ref
const Oe = Vue.reactive
const Ue = Vue.inject
const d = Vue.computed
const mt = Vue.getCurrentInstance
const Nn = Vue.cloneVNode
const z = Vue.defineComponent
const pe = Vue.watch
const Ve = Vue.onMounted
const Kl = Vue.onUnmounted
const $ = Vue.openBlock
const V = Vue.createElementBlock
const D = Vue.normalizeClass
const le = Vue.renderSlot
const ie = Vue.normalizeStyle
const j = Vue.createElementVNode
const ve = Vue.resolveComponent
const X = Vue.createBlock
const he = Vue.createCommentVNode
const $o = Vue.toRef
const _e = Vue.toRefs
const f = Vue.createVNode
const re = Vue.mergeProps
const qe = Vue.createTextVNode
const Fe = Vue.nextTick
const Ot = Vue.provide
const Pe = Vue.Fragment
const La = Vue.createSlots
const Z = Vue.withCtx
const at = Vue.withModifiers
const dt = Vue.onUpdated
const Ht = Vue.onBeforeUnmount
const un = Vue.readonly
const Vr = Vue.onDeactivated
const Va = Vue.Teleport
const Ln = Vue.Transition
const ut = Vue.withDirectives
const ct = Vue.vShow
const Vt = Vue.resolveDynamicComponent
const je = Vue.toDisplayString
const St = Vue.renderList
const Dr = Vue.TransitionGroup
const Vn = Vue.watchEffect
const eo = Vue.isVNode
const Ar = Vue.Comment
const zt = Vue.h
const Rl = Vue.normalizeProps
const to = Vue.withKeys
const Da = Vue.createApp
const kt = Vue.toValue
const q = Vue.unref
const no = Vue.isRef
const jr = Vue.customRef
const Fr = Vue.getCurrentScope
const Mr = Vue.onScopeDispose
const xt = Object.prototype.toString;
function Ae(e) {
  return xt.call(e) === "[object Array]";
}
function Dn(e) {
  return xt.call(e) === "[object Null]";
}
function Ft(e) {
  return xt.call(e) === "[object Boolean]";
}
function Le(e) {
  return xt.call(e) === "[object Object]";
}
const ko = (e) => xt.call(e) === "[object Promise]";
function Pt(e) {
  return xt.call(e) === "[object String]";
}
function Ce(e) {
  return xt.call(e) === "[object Number]" && e === e;
}
function Ke(e) {
  return e === void 0;
}
function Ge(e) {
  return typeof e == "function";
}
function Kr(e) {
  return Le(e) && Object.keys(e).length === 0;
}
const Aa = (e) => (e == null ? void 0 : e.$) !== void 0, Bt = Symbol("ArcoConfigProvider"), mn = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
}, Rr = {
  locale: "zh-CN",
  empty: {
    description: "暂无数据"
  },
  drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  modal: {
    okText: "确定",
    cancelText: "取消"
  },
  pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条"
  },
  table: {
    okText: "确定",
    resetText: "重置"
  },
  upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    retry: "点击重试",
    buttonText: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  calendar: mn,
  datePicker: {
    view: mn.view,
    month: mn.month,
    week: mn.week,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      time: "请选择时间"
    },
    rangePlaceholder: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"],
      time: ["开始时间", "结束时间"]
    },
    selectTime: "选择时间",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  image: {
    loading: "加载中"
  },
  imagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  typography: {
    copied: "已复制",
    copy: "复制",
    expand: "展开",
    collapse: "折叠",
    edit: "编辑"
  },
  form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  },
  colorPicker: {
    history: "最近使用颜色",
    preset: "系统预设颜色",
    empty: "暂无"
  }
}, Hr = m("zh-CN"), Wr = Oe({
  "zh-CN": Rr
}), lo = () => {
  const e = Ue(Bt, void 0), t = d(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : Wr[Hr.value];
  }), n = d(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (o, ...r) => {
      const a = o.split(".");
      let i = t.value;
      for (const s of a) {
        if (!i[s])
          return o;
        i = i[s];
      }
      return Pt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var c;
        return (c = r[u]) != null ? c : s;
      }) : i;
    }
  };
};
var qr = Object.defineProperty, Gr = Object.defineProperties, Ur = Object.getOwnPropertyDescriptors, wo = Object.getOwnPropertySymbols, Yr = Object.prototype.hasOwnProperty, Zr = Object.prototype.propertyIsEnumerable, So = (e, t, n) => t in e ? qr(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    Yr.call(t, n) && So(e, n, t[n]);
  if (wo)
    for (var n of wo(t))
      Zr.call(t, n) && So(e, n, t[n]);
  return e;
}, Jr = (e, t) => Gr(e, Ur(t));
const Qr = "A", ei = "arco", Hl = "$arco", Re = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : Qr;
}, He = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[Hl] = Jr(Xr({}, (n = e.config.globalProperties[Hl]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, Y = (e) => {
  var t, n, l;
  const o = mt(), r = Ue(Bt, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[Hl]) == null ? void 0 : t.classPrefix) != null ? l : ei;
  return e ? `${a}-${e}` : a;
};
var ja = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(o, r) {
      return o[0] === n ? (l = r, !0) : !1;
    }), l;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var l = e(this.__entries__, n), o = this.__entries__[l];
        return o && o[1];
      }, t.prototype.set = function(n, l) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = l : this.__entries__.push([n, l]);
      }, t.prototype.delete = function(n) {
        var l = this.__entries__, o = e(l, n);
        ~o && l.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, l) {
        l === void 0 && (l = null);
        for (var o = 0, r = this.__entries__; o < r.length; o++) {
          var a = r[o];
          n.call(l, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Wl = typeof window < "u" && typeof document < "u" && window.document === document, On = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ti = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(On) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ni = 2;
function li(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    ti(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < ni)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var oi = 20, ai = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ri = typeof MutationObserver < "u", ii = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = li(this.refresh.bind(this), oi);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, l = n.indexOf(t);
      ~l && n.splice(l, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Wl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ri ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Wl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = ai.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Fa = function(e, t) {
  for (var n = 0, l = Object.keys(t); n < l.length; n++) {
    var o = l[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Mt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || On;
}, Ma = An(0, 0, 0, 0);
function xn(e) {
  return parseFloat(e) || 0;
}
function Eo(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + xn(r);
  }, 0);
}
function si(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = xn(a);
  }
  return n;
}
function ui(e) {
  var t = e.getBBox();
  return An(0, 0, t.width, t.height);
}
function ci(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Ma;
  var l = Mt(e).getComputedStyle(e), o = si(l), r = o.left + o.right, a = o.top + o.bottom, i = xn(l.width), s = xn(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= Eo(l, "left", "right") + r), Math.round(s + a) !== n && (s -= Eo(l, "top", "bottom") + a)), !fi(e)) {
    var u = Math.round(i + r) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return An(o.left, o.top, i, s);
}
var di = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Mt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Mt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function fi(e) {
  return e === Mt(e).document.documentElement;
}
function vi(e) {
  return Wl ? di(e) ? ui(e) : ci(e) : Ma;
}
function pi(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Fa(a, {
    x: t,
    y: n,
    width: l,
    height: o,
    top: n,
    right: t + l,
    bottom: o + n,
    left: t
  }), a;
}
function An(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var hi = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = An(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = vi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), mi = (
  /** @class */
  function() {
    function e(t, n) {
      var l = pi(n);
      Fa(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), yi = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new ja(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new hi(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(l) {
          return new mi(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ka = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ja(), Ra = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = ii.getInstance(), l = new yi(t, n, this);
      Ka.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Ra.prototype[e] = function() {
    var t;
    return (t = Ka.get(this))[e].apply(t, arguments);
  };
});
var oo = function() {
  return typeof On.ResizeObserver < "u" ? On.ResizeObserver : Ra;
}(), Oo;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Oo || (Oo = {}));
var xo;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(xo || (xo = {}));
const jn = (e) => !!(e && e.shapeFlag & 1), cn = (e, t) => !!(e && e.shapeFlag & 6), gi = (e, t) => !!(e && e.shapeFlag & 8), ao = (e, t) => !!(e && e.shapeFlag & 16), Ha = (e, t) => !!(e && e.shapeFlag & 32), Dt = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (jn(l) || cn(l))
        return l;
      if (ao(l, l.children)) {
        const o = Dt(l.children);
        if (o)
          return o;
      } else if (Ha(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const r = Dt(o);
          if (r)
            return r;
        }
      } else if (Ae(l)) {
        const o = Dt(l);
        if (o)
          return o;
      }
    }
}, bi = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Wa = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (jn(l) || cn(l)) {
        const r = Ge(t) ? t(l) : t;
        return e[n] = Nn(l, r, !0), !0;
      }
      const o = ro(l);
      if (o && o.length > 0 && Wa(o, t))
        return !0;
    }
  return !1;
}, ro = (e) => {
  if (ao(e, e.children))
    return e.children;
  if (Ae(e))
    return e;
}, qa = (e) => {
  var t, n;
  if (jn(e))
    return e.el;
  if (cn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = qa(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = ro(e);
    return Ga(l);
  }
}, Ga = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = qa(t);
      if (n)
        return n;
    }
}, Cn = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    jn(r) || cn(r) || t && gi(r, r.children) ? o.push(r) : ao(r, r.children) ? o.push(...Cn(r.children, t)) : Ha(r, r.children) ? o.push(...Cn((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : Ae(r) && o.push(...Cn(r, t));
  return o;
}, Ua = (e, t) => {
  var n;
  const l = [];
  if (cn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Ua(e.component.subTree, t));
  else {
    const o = ro(e);
    o && l.push(...Ya(o, t));
  }
  return l;
}, Ya = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Ua(l, t));
  return n;
};
var on = z({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = m(), r = d(() => Aa(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new oo((u) => {
        const c = u[0];
        t("resize", c);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return pe(r, (s) => {
      l && i(), s && a(s);
    }), Ve(() => {
      r.value && a(r.value);
    }), Kl(() => {
      i();
    }), () => {
      var s, u;
      const c = Dt((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? Nn(c, {
        ref: o
      }, !0) : null;
    };
  }
});
const Za = typeof window > "u" ? global : window, Xa = Za.requestAnimationFrame, Pn = Za.cancelAnimationFrame;
function ql(e) {
  let t = 0;
  const n = (...l) => {
    t && Pn(t), t = Xa(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    Pn(t), t = 0;
  }, n;
}
const io = () => {
}, _i = () => {
  const {
    body: e
  } = document, t = document.documentElement;
  let n;
  try {
    n = (window.top || window.self || window).document.body;
  } catch {
  }
  return {
    height: Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight, (n == null ? void 0 : n.scrollHeight) || 0, (n == null ? void 0 : n.clientHeight) || 0),
    width: Math.max(e.scrollWidth, e.offsetWidth, t.clientWidth, t.scrollWidth, t.offsetWidth, (n == null ? void 0 : n.scrollWidth) || 0, (n == null ? void 0 : n.clientWidth) || 0)
  };
}, so = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), At = (() => so ? io : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), Bn = (() => so ? io : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Ci = (e, t) => {
  var n;
  return so ? io() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Po = (e, t) => {
  if (Pt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Ci(n, t);
  }
  return e;
}, $i = (e, t) => {
  const n = e.getBoundingClientRect(), l = t.getBoundingClientRect();
  return {
    top: n.top - l.top,
    bottom: l.bottom - n.bottom,
    left: n.left - l.left,
    right: l.right - n.right,
    width: n.width,
    height: n.height
  };
};
var de = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const ki = z({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      prefixCls: Y("icon-hover")
    };
  }
});
function wi(e, t, n, l, o, r) {
  return $(), V("span", {
    class: D([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [le(e.$slots, "default")], 2);
}
var Qe = /* @__PURE__ */ de(ki, [["render", wi]]);
const Si = z({
  name: "IconClose",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ei = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Oi = /* @__PURE__ */ j("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), xi = [Oi];
function Pi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, xi, 14, Ei);
}
var Gn = /* @__PURE__ */ de(Si, [["render", Pi]]);
const dn = Object.assign(Gn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Gn.name, Gn);
  }
}), Bi = z({
  name: "IconInfoCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ti = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ii = /* @__PURE__ */ j("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), zi = [Ii];
function Ni(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, zi, 14, Ti);
}
var Un = /* @__PURE__ */ de(Bi, [["render", Ni]]);
const Li = Object.assign(Un, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Un.name, Un);
  }
}), Vi = z({
  name: "IconCheckCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Di = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ai = /* @__PURE__ */ j("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ji = [Ai];
function Fi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ji, 14, Di);
}
var Yn = /* @__PURE__ */ de(Vi, [["render", Fi]]);
const uo = Object.assign(Yn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Yn.name, Yn);
  }
}), Mi = z({
  name: "IconExclamationCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ki = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ri = /* @__PURE__ */ j("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Hi = [Ri];
function Wi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Hi, 14, Ki);
}
var Zn = /* @__PURE__ */ de(Mi, [["render", Wi]]);
const Ja = Object.assign(Zn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Zn.name, Zn);
  }
}), qi = z({
  name: "IconCloseCircleFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Gi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ui = /* @__PURE__ */ j("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Yi = [Ui];
function Zi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Yi, 14, Gi);
}
var Xn = /* @__PURE__ */ de(qi, [["render", Zi]]);
const Qa = Object.assign(Xn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Xn.name, Xn);
  }
}), Kt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], Xi = z({
  name: "IconLoading",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ji = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Qi = /* @__PURE__ */ j("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), es = [Qi];
function ts(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, es, 14, Ji);
}
var Jn = /* @__PURE__ */ de(Xi, [["render", ts]]);
const pt = Object.assign(Jn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Jn.name, Jn);
  }
}), ns = z({
  name: "FeedbackIcon",
  components: {
    IconLoading: pt,
    IconCheckCircleFill: uo,
    IconExclamationCircleFill: Ja,
    IconCloseCircleFill: Qa
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = Y("feedback-icon");
    return {
      cls: d(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function ls(e, t, n, l, o, r) {
  const a = ve("icon-loading"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), u = ve("icon-close-circle-fill");
  return $(), V("span", {
    class: D(e.cls)
  }, [e.type === "validating" ? ($(), X(a, {
    key: 0
  })) : e.type === "success" ? ($(), X(i, {
    key: 1
  })) : e.type === "warning" ? ($(), X(s, {
    key: 2
  })) : e.type === "error" ? ($(), X(u, {
    key: 3
  })) : he("v-if", !0)], 2);
}
var co = /* @__PURE__ */ de(ns, [["render", ls]]);
const fo = {
  key: "Enter",
  code: "Enter"
}, os = {
  key: "Backspace",
  code: "Backspace"
};
var as = Object.defineProperty, Bo = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, To = (e, t, n) => t in e ? as(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ss = (e, t) => {
  for (var n in t || (t = {}))
    rs.call(t, n) && To(e, n, t[n]);
  if (Bo)
    for (var n of Bo(t))
      is.call(t, n) && To(e, n, t[n]);
  return e;
};
const Wt = (e, t) => {
  const n = ss({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function vo(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const us = Symbol("ArcoFormItemContext"), yt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Ue(us, {}), r = d(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : o.size;
  }), a = d(() => (t == null ? void 0 : t.value) || o.disabled), i = d(() => (n == null ? void 0 : n.value) || o.error), s = $o(o, "feedback"), u = $o(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: r,
    mergedDisabled: a,
    mergedError: i,
    feedback: s,
    eventHandlers: u
  };
}, gt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Ue(Bt, void 0);
  return {
    mergedSize: d(() => {
      var o, r;
      return (r = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function cs(e) {
  const t = m();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: o,
      selectionEnd: r,
      value: a
    } = e.value;
    if (o == null || r == null)
      return;
    const i = a.slice(0, Math.max(0, o)), s = a.slice(Math.max(0, r));
    t.value = {
      selectionStart: o,
      selectionEnd: r,
      value: a,
      beforeTxt: i,
      afterTxt: s
    };
  }
  function l() {
    if (!e.value || !t.value)
      return;
    const {
      value: o
    } = e.value, {
      beforeTxt: r,
      afterTxt: a,
      selectionStart: i
    } = t.value;
    if (!r || !a || !i)
      return;
    let s = o.length;
    if (o.endsWith(a))
      s = o.length - a.length;
    else if (o.startsWith(r))
      s = r.length;
    else {
      const u = r[i - 1], c = o.indexOf(u, i - 1);
      c !== -1 && (s = c + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var ds = Object.defineProperty, Io = Object.getOwnPropertySymbols, fs = Object.prototype.hasOwnProperty, vs = Object.prototype.propertyIsEnumerable, zo = (e, t, n) => t in e ? ds(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, No = (e, t) => {
  for (var n in t || (t = {}))
    fs.call(t, n) && zo(e, n, t[n]);
  if (Io)
    for (var n of Io(t))
      vs.call(t, n) && zo(e, n, t[n]);
  return e;
}, nn = z({
  name: "Input",
  inheritAttrs: !1,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    input: (e, t) => !0,
    change: (e, t) => !0,
    pressEnter: (e) => !0,
    clear: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      modelValue: i
    } = _e(e), s = Y("input"), u = m(), {
      mergedSize: c,
      mergedDisabled: v,
      mergedError: p,
      feedback: h,
      eventHandlers: y
    } = yt({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: b
    } = gt(c), [w, N] = cs(u), T = m(e.defaultValue), S = d(() => {
      var W;
      return (W = e.modelValue) != null ? W : T.value;
    });
    pe(i, (W) => {
      (Ke(W) || Dn(W)) && (T.value = "");
    });
    let C = S.value;
    const E = m(!1), _ = d(() => e.allowClear && !e.readonly && !v.value && !!S.value), g = m(!1), A = m(""), F = (W) => {
      var P;
      return Ge(e.wordLength) ? e.wordLength(W) : (P = W.length) != null ? P : 0;
    }, L = d(() => F(S.value)), O = d(() => p.value || !!(Le(e.maxLength) && e.maxLength.errorOnly && L.value > R.value)), K = d(() => Le(e.maxLength) && !!e.maxLength.errorOnly), R = d(() => Le(e.maxLength) ? e.maxLength.length : e.maxLength), Q = d(() => {
      const W = F("a");
      return Math.floor(R.value / W);
    }), te = (W) => {
      var P, H;
      R.value && !K.value && F(W) > R.value && (W = (H = (P = e.wordSlice) == null ? void 0 : P.call(e, W, R.value)) != null ? H : W.slice(0, Q.value)), T.value = W, t("update:modelValue", W);
    }, oe = (W) => {
      u.value && W.target !== u.value && (W.preventDefault(), u.value.focus());
    }, x = (W, P) => {
      var H, ce;
      W !== C && (C = W, t("change", W, P), (ce = (H = y.value) == null ? void 0 : H.onChange) == null || ce.call(H, P));
    }, G = (W) => {
      var P, H;
      E.value = !0, C = S.value, t("focus", W), (H = (P = y.value) == null ? void 0 : P.onFocus) == null || H.call(P, W);
    }, me = (W) => {
      var P, H;
      E.value = !1, x(S.value, W), t("blur", W), (H = (P = y.value) == null ? void 0 : P.onBlur) == null || H.call(P, W);
    }, ne = (W) => {
      var P, H, ce;
      const {
        value: we,
        selectionStart: Ee,
        selectionEnd: Je
      } = W.target;
      if (W.type === "compositionend") {
        if (g.value = !1, A.value = "", R.value && !K.value && L.value >= R.value && F(we) > R.value && Ee === Je) {
          se();
          return;
        }
        te(we), t("input", we, W), (H = (P = y.value) == null ? void 0 : P.onInput) == null || H.call(P, W), se();
      } else
        g.value = !0, A.value = S.value + ((ce = W.data) != null ? ce : "");
    }, se = () => {
      w(), Fe(() => {
        u.value && S.value !== u.value.value && (u.value.value = S.value, N());
      });
    }, Se = (W) => {
      var P, H;
      const {
        value: ce
      } = W.target;
      if (!g.value) {
        if (R.value && !K.value && L.value >= R.value && F(ce) > R.value && W.inputType === "insertText") {
          se();
          return;
        }
        te(ce), t("input", ce, W), (H = (P = y.value) == null ? void 0 : P.onInput) == null || H.call(P, W), se();
      }
    }, ge = (W) => {
      te(""), x("", W), t("clear", W);
    }, ye = (W) => {
      const P = W.key || W.code;
      !g.value && P === fo.key && (x(S.value, W), t("pressEnter", W));
    }, ue = d(() => [`${s}-outer`, `${s}-outer-size-${b.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: v.value
    }]), $e = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: v.value,
      [`${s}-focus`]: E.value
    }]), tt = d(() => [s, `${s}-size-${b.value}`]), Be = d(() => Wt(l, Kt)), De = d(() => vo(l, Kt)), Me = d(() => {
      const W = No(No({}, De.value), e.inputAttrs);
      return O.value && (W["aria-invalid"] = !0), W;
    }), ze = (W) => {
      var P;
      return f("span", re({
        class: $e.value,
        onMousedown: oe
      }, W ? void 0 : Be.value), [n.prefix && f("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), f("input", re({
        ref: u,
        class: tt.value,
        value: S.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: v.value,
        onInput: Se,
        onKeydown: ye,
        onFocus: G,
        onBlur: me,
        onCompositionstart: ne,
        onCompositionupdate: ne,
        onCompositionend: ne
      }, Me.value), null), _.value && f(Qe, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: ge
      }, {
        default: () => [f(dn, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!h.value) && f("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [!!e.maxLength && e.showWordLimit && f("span", {
        class: `${s}-word-limit`
      }, [L.value, qe("/"), R.value]), (P = n.suffix) == null ? void 0 : P.call(n), !!h.value && f(co, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? f("span", re({
        class: ue.value
      }, Be.value), [n.prepend && f("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), ze(!0), n.append && f("span", {
        class: `${s}-append`
      }, [n.append()])]) : ze()
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const ps = z({
  name: "IconSearch",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), hs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ms = /* @__PURE__ */ j("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), ys = [ms];
function gs(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ys, 14, hs);
}
var Qn = /* @__PURE__ */ de(ps, [["render", gs]]);
const Gl = Object.assign(Qn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Qn.name, Qn);
  }
}), er = Symbol("ArcoButtonGroup"), bs = z({
  name: "Button",
  components: {
    IconLoading: pt
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      size: n,
      disabled: l
    } = _e(e), o = Y("btn"), r = Ue(er, void 0), a = d(() => {
      var h;
      return (h = n.value) != null ? h : r == null ? void 0 : r.size;
    }), i = d(() => !!(l.value || r != null && r.disabled)), {
      mergedSize: s,
      mergedDisabled: u
    } = yt({
      size: a,
      disabled: i
    }), {
      mergedSize: c
    } = gt(s), v = d(() => {
      var h, y, b, w, N, T;
      return [o, `${o}-${(y = (h = e.type) != null ? h : r == null ? void 0 : r.type) != null ? y : "secondary"}`, `${o}-shape-${(w = (b = e.shape) != null ? b : r == null ? void 0 : r.shape) != null ? w : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(T = (N = e.status) != null ? N : r == null ? void 0 : r.status) != null ? T : "normal"}`, {
        [`${o}-long`]: e.long,
        [`${o}-loading`]: e.loading,
        [`${o}-disabled`]: u.value,
        [`${o}-link`]: Pt(e.href)
      }];
    });
    return {
      prefixCls: o,
      cls: v,
      mergedDisabled: u,
      handleClick: (h) => {
        if (e.disabled || e.loading) {
          h.preventDefault();
          return;
        }
        t("click", h);
      }
    };
  }
}), _s = ["href"], Cs = ["type", "disabled"];
function $s(e, t, n, l, o, r) {
  const a = ve("icon-loading");
  return e.href ? ($(), V("a", {
    key: 0,
    class: D([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: D(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), X(a, {
    key: 0,
    spin: "true"
  })) : le(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), le(e.$slots, "default")], 10, _s)) : ($(), V("button", {
    key: 1,
    class: D([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: D(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), X(a, {
    key: 0,
    spin: !0
  })) : le(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), le(e.$slots, "default")], 10, Cs));
}
var el = /* @__PURE__ */ de(bs, [["render", $s]]);
const ks = z({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const {
      type: t,
      size: n,
      status: l,
      disabled: o,
      shape: r
    } = _e(e), a = Y("btn-group");
    return Ot(er, Oe({
      type: t,
      size: n,
      shape: r,
      status: l,
      disabled: o
    })), {
      prefixCls: a
    };
  }
});
function ws(e, t, n, l, o, r) {
  return $(), V("div", {
    class: D(e.prefixCls)
  }, [le(e.$slots, "default")], 2);
}
var tl = /* @__PURE__ */ de(ks, [["render", ws]]);
const Fn = Object.assign(el, {
  Group: tl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + el.name, el), e.component(n + tl.name, tl);
  }
});
var nl = z({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l
    } = _e(e), o = Y("input-search"), {
      mergedSize: r
    } = gt(l), a = m(), i = (v) => {
      a.value.inputRef && t("search", a.value.inputRef.value, v);
    }, s = () => {
      var v;
      return f(Pe, null, [e.loading ? f(pt, null, null) : f(Qe, {
        onClick: i
      }, {
        default: () => [f(Gl, null, null)]
      }), (v = n.suffix) == null ? void 0 : v.call(n)]);
    }, u = () => {
      var v;
      let p = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
        default: (v = n["button-default"]) != null ? v : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : p = {
        icon: () => f(Gl, null, null)
      }, f(Fn, re({
        type: "primary",
        class: `${o}-btn`,
        disabled: e.disabled,
        size: r.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), p);
    };
    return {
      inputRef: a,
      render: () => f(nn, {
        ref: a,
        class: o,
        size: r.value,
        disabled: e.disabled
      }, {
        prepend: n.prepend,
        prefix: n.prefix,
        suffix: e.searchButton ? n.suffix : s,
        append: e.searchButton ? u : n.append
      })
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const Ss = z({
  name: "IconEye",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Es = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Os = /* @__PURE__ */ j("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), xs = /* @__PURE__ */ j("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Ps = [Os, xs];
function Bs(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ps, 14, Es);
}
var ll = /* @__PURE__ */ de(Ss, [["render", Bs]]);
const Ts = Object.assign(ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ll.name, ll);
  }
}), Is = z({
  name: "IconEyeInvisible",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), zs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ns = /* @__PURE__ */ j("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Ls = /* @__PURE__ */ j("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Vs = [Ns, Ls];
function Ds(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Vs, 14, zs);
}
var ol = /* @__PURE__ */ de(Is, [["render", Ds]]);
const As = Object.assign(ol, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ol.name, ol);
  }
});
function js(e) {
  const t = m(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function Tn(e, t) {
  const {
    value: n
  } = _e(t), [l, o] = js(Ke(n.value) ? e : n.value);
  return pe(n, (a) => {
    Ke(a) && o(void 0);
  }), [d(() => Ke(n.value) ? l.value : n.value), o, l];
}
const Fs = z({
  name: "InputPassword",
  components: {
    IconEye: Ts,
    IconEyeInvisible: As,
    AIconHover: Qe,
    AInput: nn
  },
  props: {
    visibility: {
      type: Boolean,
      default: void 0
    },
    defaultVisibility: {
      type: Boolean,
      default: !0
    },
    invisibleButton: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["visibility-change", "update:visibility"],
  setup(e, {
    emit: t
  }) {
    const {
      visibility: n,
      defaultVisibility: l
    } = _e(e), o = m(), r = () => {
      s(!a.value);
    }, [a, i] = Tn(l.value, Oe({
      value: n
    })), s = (u) => {
      u !== a.value && (t("visibility-change", u), t("update:visibility", u), i(u));
    };
    return {
      inputRef: o,
      mergedVisible: a,
      handleInvisible: r
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  }
});
function Ms(e, t, n, l, o, r) {
  const a = ve("icon-eye"), i = ve("icon-eye-invisible"), s = ve("a-icon-hover"), u = ve("a-input");
  return $(), X(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, La({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: Z(() => [le(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: Z(() => [le(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: Z(() => [e.invisibleButton ? ($(), X(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = at(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = at(() => {
      }, ["prevent"]))
    }, {
      default: Z(() => [e.mergedVisible ? ($(), X(i, {
        key: 1
      })) : ($(), X(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : he("v-if", !0), le(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: Z(() => [le(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var al = /* @__PURE__ */ de(Fs, [["render", Ms]]);
const Ks = z({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: Y("input-group")
    };
  }
});
function Rs(e, t, n, l, o, r) {
  return $(), V("div", {
    class: D(e.prefixCls)
  }, [le(e.$slots, "default")], 2);
}
var rl = /* @__PURE__ */ de(Ks, [["render", Rs]]);
const Mn = Object.assign(nn, {
  Search: nl,
  Password: al,
  Group: rl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + nn.name, nn), e.component(n + rl.name, rl), e.component(n + nl.name, nl), e.component(n + al.name, al);
  }
});
var Hs = Object.defineProperty, Lo = Object.getOwnPropertySymbols, Ws = Object.prototype.hasOwnProperty, qs = Object.prototype.propertyIsEnumerable, Vo = (e, t, n) => t in e ? Hs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jt = (e, t) => {
  for (var n in t || (t = {}))
    Ws.call(t, n) && Vo(e, n, t[n]);
  if (Lo)
    for (var n of Lo(t))
      qs.call(t, n) && Vo(e, n, t[n]);
  return e;
};
const Gs = () => {
  const {
    height: e,
    width: t
  } = _i();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, Do = (e, t) => {
  var n, l;
  const o = e.getBoundingClientRect();
  return {
    top: o.top,
    bottom: o.bottom,
    left: o.left,
    right: o.right,
    scrollTop: o.top - t.top,
    scrollBottom: o.bottom - t.top,
    scrollLeft: o.left - t.left,
    scrollRight: o.right - t.left,
    width: (n = e.offsetWidth) != null ? n : e.clientWidth,
    height: (l = e.offsetHeight) != null ? l : e.clientHeight
  };
}, Us = (e) => {
  switch (e) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
}, yn = (e, t) => {
  switch (t) {
    case "top":
      switch (e) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return e;
      }
    case "bottom":
      switch (e) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return e;
      }
    case "left":
      switch (e) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return e;
      }
    case "right":
      switch (e) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return e;
      }
    default:
      return e;
  }
}, Ys = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = Us(e), s = Gs(), u = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + o.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + o.width)
  };
  let c = e;
  if (i === "top" && u.top < 0)
    if (l.top > o.height)
      t.top = -n.top;
    else {
      const v = Qt("bottom", l, o, {
        offset: r,
        translate: a
      });
      s.height - (n.top + v.top + o.height) > 0 && (c = yn(e, "bottom"), t.top = v.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const v = Qt("top", l, o, {
        offset: r,
        translate: a
      });
      n.top + v.top > 0 && (c = yn(e, "top"), t.top = v.top);
    }
  if (i === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const v = Qt("right", l, o, {
        offset: r,
        translate: a
      });
      s.width - (n.left + v.left + o.width) > 0 && (c = yn(e, "right"), t.left = v.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const v = Qt("left", l, o, {
        offset: r,
        translate: a
      });
      n.left + v.left > 0 && (c = yn(e, "left"), t.left = v.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - o.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: c
  };
}, Qt = (e, t, n, {
  offset: l = 0,
  translate: o = [0, 0]
} = {}) => {
  var r;
  const a = (r = Ae(o) ? o : o[e]) != null ? r : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollTop - n.height - l + a[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollBottom + l + a[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollTop + a[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - l + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    case "right":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "rt":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollTop + a[1]
      };
    case "rb":
      return {
        left: t.scrollRight + l + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, Zs = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, Xs = (e, t, n, l, {
  offset: o = 0,
  translate: r = [0, 0],
  customStyle: a = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, u = Qt(e, n, l, {
    offset: o,
    translate: r
  });
  if (i) {
    const v = Ys(e, u, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: o,
      translate: r
    });
    u = v.popupPosition, s = v.position;
  }
  return {
    style: Jt({
      left: `${u.left}px`,
      top: `${u.top}px`
    }, a),
    position: s
  };
}, Js = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? Jt({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : Jt({
      left: `${r}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, l);
  }
  let o = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return o > n.height - 8 && (t.height > n.height ? o = n.height / 2 : o = n.height - 8), ["left", "lt", "lb"].includes(e) ? Jt({
    top: `${o}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, l) : Jt({
    top: `${o}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, l);
}, Qs = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Ao = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    Qs(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, tr = () => {
  const e = {}, t = m(), n = () => {
    const l = Ga(e.value);
    l !== t.value && (t.value = l);
  };
  return Ve(() => n()), dt(() => n()), {
    children: e,
    firstElement: t
  };
};
var Ul = z({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: l,
      firstElement: o
    } = tr();
    let r;
    const a = (s) => {
      s && (r = new oo((u) => {
        const c = u[0];
        t("resize", c);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return pe(o, (s) => {
      r && i(), s && a(s);
    }), Ht(() => {
      r && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function it(e, t) {
  const n = m(e[t]);
  return dt(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const jo = Symbol("ArcoTrigger"), eu = 1e3, tu = 5e3, nu = 1;
class lu {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || tu : Array.from(this.popupStack.popup).pop() || eu) + nu, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const il = new lu();
function ou(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = m(0), o = () => {
    l.value = il.add(e);
  }, r = () => {
    il.delete(l.value, e);
  }, a = () => e === "dialog" ? il.isLastDialog(l.value) : !1;
  return pe(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : r();
  }, {
    immediate: !0
  }), n && (Ve(() => {
    o();
  }), Ht(() => {
    r();
  })), {
    zIndex: un(l),
    open: o,
    close: r,
    isLastDialog: a
  };
}
const au = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new oo((r) => {
        const a = r[0];
        Ge(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var ru = z({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = m(!1);
    return Ve(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const iu = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = m(e.value), r = m(), a = () => {
    const i = Po(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : Po(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return Ve(() => a()), pe(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var su = Object.defineProperty, uu = Object.defineProperties, cu = Object.getOwnPropertyDescriptors, Fo = Object.getOwnPropertySymbols, du = Object.prototype.hasOwnProperty, fu = Object.prototype.propertyIsEnumerable, Mo = (e, t, n) => t in e ? su(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, vu = (e, t) => {
  for (var n in t || (t = {}))
    du.call(t, n) && Mo(e, n, t[n]);
  if (Fo)
    for (var n of Fo(t))
      fu.call(t, n) && Mo(e, n, t[n]);
  return e;
}, pu = (e, t) => uu(e, cu(t));
const hu = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var sl = z({
  name: "Trigger",
  inheritAttrs: !1,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: !1
    },
    alignPoint: {
      type: Boolean,
      default: !1
    },
    popupHoverStay: {
      type: Boolean,
      default: !0
    },
    blurToClose: {
      type: Boolean,
      default: !0
    },
    clickToClose: {
      type: Boolean,
      default: !0
    },
    clickOutsideToClose: {
      type: Boolean,
      default: !0
    },
    unmountOnClose: {
      type: Boolean,
      default: !0
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: !1
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: !1
    },
    autoFixPosition: {
      type: Boolean,
      default: !0
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: !1
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: !1
    },
    hideEmpty: {
      type: Boolean,
      default: !1
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: !0
    },
    renderToBody: {
      type: Boolean,
      default: !0
    },
    preventFocus: {
      type: Boolean,
      default: !1
    },
    scrollToClose: {
      type: Boolean,
      default: !1
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    show: () => !0,
    hide: () => !0,
    resize: () => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      popupContainer: o
    } = _e(e), r = Y("trigger"), a = d(() => Wt(l, hu)), i = Ue(Bt, void 0), s = d(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Ue(jo, void 0), {
      children: v,
      firstElement: p
    } = tr(), h = m(), y = m(e.defaultPopupVisible), b = m(e.position), w = m({}), N = m({}), T = m({}), S = m(), C = m({
      top: 0,
      left: 0
    });
    let E = null, _ = null;
    const g = d(() => {
      var k;
      return (k = e.popupVisible) != null ? k : y.value;
    }), {
      teleportContainer: A,
      containerRef: F
    } = iu({
      popupContainer: o,
      visible: g,
      documentContainer: !0
    }), {
      zIndex: L
    } = ou("popup", {
      visible: g
    });
    let O = 0, K = !1, R = !1;
    const Q = () => {
      O && (window.clearTimeout(O), O = 0);
    }, te = (k) => {
      if (e.alignPoint) {
        const {
          pageX: I,
          pageY: ee
        } = k;
        C.value = {
          top: ee,
          left: I
        };
      }
    }, oe = () => {
      if (!p.value || !h.value || !F.value)
        return;
      const k = F.value.getBoundingClientRect(), I = e.alignPoint ? {
        top: C.value.top,
        bottom: C.value.top,
        left: C.value.left,
        right: C.value.left,
        scrollTop: C.value.top,
        scrollBottom: C.value.top,
        scrollLeft: C.value.left,
        scrollRight: C.value.left,
        width: 0,
        height: 0
      } : Do(p.value, k), ee = () => Do(h.value, k), Ye = ee(), {
        style: We,
        position: rt
      } = Xs(e.position, k, I, Ye, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (N.value = {
        transformOrigin: Zs(rt)
      }), e.autoFitPopupMinWidth ? We.minWidth = `${I.width}px` : e.autoFitPopupWidth && (We.width = `${I.width}px`), b.value !== rt && (b.value = rt), w.value = We, e.showArrow && Fe(() => {
        T.value = Js(rt, I, ee(), {
          customStyle: e.arrowStyle
        });
      });
    }, x = (k, I) => {
      if (k === g.value && O === 0)
        return;
      const ee = () => {
        y.value = k, t("update:popupVisible", k), t("popupVisibleChange", k), k && Fe(() => {
          oe();
        });
      };
      k || (E = null, _ = null), I ? (Q(), k !== g.value && (O = window.setTimeout(ee, I))) : ee();
    }, G = (k) => {
      var I;
      (I = l.onClick) == null || I.call(l, k), !(e.disabled || g.value && !e.clickToClose) && (s.value.includes("click") ? (te(k), x(!g.value)) : s.value.includes("contextMenu") && g.value && x(!1));
    }, me = (k) => {
      var I;
      (I = l.onMouseenter) == null || I.call(l, k), !(e.disabled || !s.value.includes("hover")) && (te(k), x(!0, e.mouseEnterDelay));
    }, ne = (k) => {
      c == null || c.onMouseenter(k), me(k);
    }, se = (k) => {
      var I;
      (I = l.onMouseleave) == null || I.call(l, k), !(e.disabled || !s.value.includes("hover")) && x(!1, e.mouseLeaveDelay);
    }, Se = (k) => {
      c == null || c.onMouseleave(k), se(k);
    }, ge = (k) => {
      var I;
      (I = l.onFocusin) == null || I.call(l, k), !(e.disabled || !s.value.includes("focus")) && x(!0, e.focusDelay);
    }, ye = (k) => {
      var I;
      (I = l.onFocusout) == null || I.call(l, k), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && x(!1);
    }, ue = (k) => {
      var I;
      (I = l.onContextmenu) == null || I.call(l, k), !(e.disabled || !s.value.includes("contextMenu") || g.value && !e.clickToClose) && (te(k), x(!g.value), k.preventDefault());
    };
    Ot(jo, Oe({
      onMouseenter: ne,
      onMouseleave: Se,
      addChildRef: (k) => {
        u.add(k), c == null || c.addChildRef(k);
      },
      removeChildRef: (k) => {
        u.delete(k), c == null || c.removeChildRef(k);
      }
    }));
    const Be = () => {
      Bn(document.documentElement, "mousedown", ze), K = !1;
    }, De = it(n, "content"), Me = d(() => {
      var k;
      return e.hideEmpty && bi((k = De.value) == null ? void 0 : k.call(De));
    }), ze = (k) => {
      var I, ee, Ye;
      if (!((I = p.value) != null && I.contains(k.target) || (ee = h.value) != null && ee.contains(k.target))) {
        for (const We of u)
          if ((Ye = We.value) != null && Ye.contains(k.target))
            return;
        Be(), x(!1);
      }
    }, Ze = (k, I) => {
      const [ee, Ye] = k, {
        scrollTop: We,
        scrollLeft: rt
      } = I;
      return Math.abs(We - ee) >= e.scrollToCloseDistance || Math.abs(rt - Ye) >= e.scrollToCloseDistance;
    }, W = ql((k) => {
      if (g.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const I = k.target;
          E || (E = [I.scrollTop, I.scrollLeft]), Ze(E, I) ? x(!1) : oe();
        } else
          oe();
    }), P = () => {
      Bn(window, "scroll", H), R = !1;
    }, H = ql((k) => {
      const I = k.target.documentElement;
      _ || (_ = [I.scrollTop, I.scrollLeft]), Ze(_, I) && (x(!1), P());
    }), ce = () => {
      g.value && oe();
    }, we = () => {
      ce(), t("resize");
    }, Ee = (k) => {
      e.preventFocus && k.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Je = d(() => g.value ? e.openedClass : void 0);
    let Ie;
    pe(g, (k) => {
      if (e.clickOutsideToClose && (!k && K ? Be() : k && !K && (At(document.documentElement, "mousedown", ze), K = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (At(window, "scroll", H), R = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (k) {
          Ie = Ao(p.value);
          for (const I of Ie)
            I.addEventListener("scroll", W);
        } else if (Ie) {
          for (const I of Ie)
            I.removeEventListener("scroll", W);
          Ie = void 0;
        }
      }
      k && (Ct.value = !0);
    }), pe(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      g.value && oe();
    });
    const {
      createResizeObserver: _t,
      destroyResizeObserver: Ut
    } = au({
      elementRef: F,
      onResize: ce
    });
    Ve(() => {
      if (_t(), g.value && (oe(), e.clickOutsideToClose && !K && (At(document.documentElement, "mousedown", ze), K = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ie = Ao(p.value);
        for (const k of Ie)
          k.addEventListener("scroll", W);
      }
    }), dt(() => {
      g.value && oe();
    }), Vr(() => {
      x(!1);
    }), Ht(() => {
      if (c == null || c.removeChildRef(h), Ut(), K && Be(), R && P(), Ie) {
        for (const k of Ie)
          k.removeEventListener("scroll", W);
        Ie = void 0;
      }
    });
    const Ct = m(g.value), ot = m(!1), Tt = () => {
      ot.value = !0;
    }, Yt = () => {
      ot.value = !1, g.value && t("show");
    }, B = () => {
      ot.value = !1, g.value || (Ct.value = !1, t("hide"));
    };
    return () => {
      var k, I;
      return v.value = (I = (k = n.default) == null ? void 0 : k.call(n)) != null ? I : [], Wa(v.value, {
        class: Je.value,
        onClick: G,
        onMouseenter: me,
        onMouseleave: se,
        onFocusin: ge,
        onFocusout: ye,
        onContextmenu: ue
      }), f(Pe, null, [e.autoFixPosition ? f(Ul, {
        onResize: we
      }, {
        default: () => [v.value]
      }) : v.value, f(ru, null, {
        default: () => [f(Va, {
          to: A.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || g.value || Ct.value) && !Me.value && f(Ul, {
            onResize: ce
          }, {
            default: () => [f("div", re({
              ref: h,
              class: [`${r}-popup`, `${r}-position-${b.value}`],
              style: pu(vu({}, w.value), {
                zIndex: L.value,
                pointerEvents: ot.value ? "none" : "auto"
              }),
              "trigger-placement": b.value,
              onMouseenter: ne,
              onMouseleave: Se,
              onMousedown: Ee
            }, a.value), [f(Ln, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: Tt,
              onAfterEnter: Yt,
              onBeforeLeave: Tt,
              onAfterLeave: B
            }, {
              default: () => {
                var ee;
                return [ut(f("div", {
                  class: `${r}-popup-wrapper`,
                  style: N.value
                }, [f("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ee = n.content) == null ? void 0 : ee.call(n)]), e.showArrow && f("div", {
                  ref: S,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: T.value
                }, null)]), [[ct, g.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const an = Object.assign(sl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + sl.name, sl);
  }
}), mu = z({
  name: "IconEmpty",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), yu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gu = /* @__PURE__ */ j("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), bu = [gu];
function _u(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, bu, 14, yu);
}
var ul = /* @__PURE__ */ de(mu, [["render", _u]]);
const Cu = Object.assign(ul, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ul.name, ul);
  }
});
var cl = z({
  name: "Empty",
  inheritAttrs: !1,
  props: {
    description: String,
    imgSrc: String,
    inConfigProvider: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = Y("empty"), {
      t: o
    } = lo(), r = Ue(Bt, void 0);
    return () => {
      var a, i, s, u;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : f("div", re({
        class: l
      }, n), [f("div", {
        class: `${l}-image`
      }, [(i = (a = t.image) == null ? void 0 : a.call(t)) != null ? i : e.imgSrc ? f("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : f(Cu, null, null)]), f("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const $u = Object.assign(cl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + cl.name, cl);
  }
}), ku = 5;
var wu = z({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = Y("dot-loading");
    return () => {
      const n = e.size ? {
        width: `${e.size}px`,
        height: `${e.size}px`
      } : {};
      return f("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(ku).fill(1).map((l, o) => f("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), dl = z({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String,
    hideIcon: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = Y("spin"), l = Ue(Bt, void 0), o = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = Dt(t.icon());
        if (i)
          return Nn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(wu, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : f(pt, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var i, s, u;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, v = !!((i = t.tip) != null ? i : e.tip);
      return f(Pe, null, [!e.hideIcon && f("div", {
        class: `${n}-icon`,
        style: c
      }, [r()]), v && f("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => f("div", {
      class: o.value
    }, [t.default ? f(Pe, null, [t.default(), e.loading && f("div", {
      class: `${n}-mask`
    }, [f("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Su = Object.assign(dl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + dl.name, dl);
  }
}), Eu = z({
  name: "Thumb",
  props: {
    data: {
      type: Object
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    alwaysShow: {
      type: Boolean,
      default: !1
    },
    both: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll"],
  setup(e, {
    emit: t
  }) {
    const n = Y("scrollbar"), l = m(!1), o = m(), r = m(), a = d(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = m(0), s = m(!1), u = m(0), c = d(() => {
      var T, S;
      return {
        [a.value.size]: `${(S = (T = e.data) == null ? void 0 : T.thumbSize) != null ? S : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), v = (T) => {
      T.preventDefault(), r.value && (u.value = T[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, At(window, "mousemove", y), At(window, "mouseup", b), At(window, "contextmenu", b));
    }, p = (T) => {
      var S, C, E, _;
      if (T.preventDefault(), r.value) {
        const g = h(T[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((C = (S = e.data) == null ? void 0 : S.thumbSize) != null ? C : 0) : i.value - ((_ = (E = e.data) == null ? void 0 : E.thumbSize) != null ? _ : 0));
        g !== i.value && (i.value = g, t("scroll", g));
      }
    }, h = (T) => T < 0 ? 0 : e.data && T > e.data.max ? e.data.max : T, y = (T) => {
      if (o.value && r.value) {
        const S = h(T[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, b = () => {
      s.value = !1, Bn(window, "mousemove", y), Bn(window, "mouseup", b);
    }, w = (T) => {
      s.value || (T = h(T), T !== i.value && (i.value = T));
    }, N = d(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: r,
      prefixCls: n,
      thumbCls: N,
      thumbStyle: c,
      handleThumbMouseDown: v,
      handleTrackClick: p,
      setOffset: w
    };
  }
});
function Ou(e, t, n, l, o, r) {
  return $(), X(Ln, null, {
    default: Z(() => [j("div", {
      ref: "trackRef",
      class: D([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = at((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [j("div", {
      ref: "thumbRef",
      class: D(e.thumbCls),
      style: ie(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [j("div", {
      class: D(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var xu = /* @__PURE__ */ de(Eu, [["render", Ou]]);
const Ko = 20, gn = 15, Pu = z({
  name: "Scrollbar",
  components: {
    ResizeObserver: Ul,
    Thumb: xu
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      default: "embed"
    },
    outerClass: [String, Object, Array],
    outerStyle: {
      type: [String, Object, Array]
    },
    hide: {
      type: Boolean,
      default: !1
    },
    disableHorizontal: {
      type: Boolean,
      default: !1
    },
    disableVertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    scroll: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("scrollbar"), l = m(), o = m(), r = m(), a = m(), i = m(), s = m(!1), u = m(!1), c = d(() => s.value && !e.disableHorizontal), v = d(() => u.value && !e.disableVertical), p = m(!1), h = () => {
      var C, E, _, g, A, F;
      if (l.value) {
        const {
          clientWidth: L,
          clientHeight: O,
          offsetWidth: K,
          offsetHeight: R,
          scrollWidth: Q,
          scrollHeight: te,
          scrollTop: oe,
          scrollLeft: x
        } = l.value;
        s.value = Q > L, u.value = te > O, p.value = c.value && v.value;
        const G = e.type === "embed" && p.value ? K - gn : K, me = e.type === "embed" && p.value ? R - gn : R, ne = Math.round(G / Math.min(Q / L, G / Ko)), se = G - ne, Se = (Q - L) / se, ge = Math.round(me / Math.min(te / O, me / Ko)), ye = me - ge, ue = (te - O) / ye;
        if (o.value = {
          ratio: Se,
          thumbSize: ne,
          max: se
        }, r.value = {
          ratio: ue,
          thumbSize: ge,
          max: ye
        }, oe > 0) {
          const $e = Math.round(oe / ((E = (C = r.value) == null ? void 0 : C.ratio) != null ? E : 1));
          (_ = i.value) == null || _.setOffset($e);
        }
        if (x > 0) {
          const $e = Math.round(x / ((A = (g = r.value) == null ? void 0 : g.ratio) != null ? A : 1));
          (F = a.value) == null || F.setOffset($e);
        }
      }
    };
    Ve(() => {
      h();
    });
    const y = () => {
      h();
    }, b = (C) => {
      var E, _, g, A, F, L;
      if (l.value) {
        if (c.value && !e.disableHorizontal) {
          const O = Math.round(l.value.scrollLeft / ((_ = (E = o.value) == null ? void 0 : E.ratio) != null ? _ : 1));
          (g = a.value) == null || g.setOffset(O);
        }
        if (v.value && !e.disableVertical) {
          const O = Math.round(l.value.scrollTop / ((F = (A = r.value) == null ? void 0 : A.ratio) != null ? F : 1));
          (L = i.value) == null || L.setOffset(O);
        }
      }
      t("scroll", C);
    }, w = (C) => {
      var E, _;
      l.value && l.value.scrollTo({
        left: C * ((_ = (E = o.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, N = (C) => {
      var E, _;
      l.value && l.value.scrollTo({
        top: C * ((_ = (E = r.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, T = d(() => {
      const C = {};
      return e.type === "track" && (c.value && (C.paddingBottom = `${gn}px`), v.value && (C.paddingRight = `${gn}px`)), [C, e.outerStyle];
    }), S = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: p.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: S,
      style: T,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: r,
      isBoth: p,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: v,
      handleResize: y,
      handleScroll: b,
      handleHorizontalScroll: w,
      handleVerticalScroll: N
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      Le(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
    },
    scrollTop(e) {
      var t;
      (t = this.$refs.containerRef) == null || t.scrollTo({
        top: e
      });
    },
    scrollLeft(e) {
      var t;
      (t = this.$refs.containerRef) == null || t.scrollTo({
        left: e
      });
    }
  }
});
function Bu(e, t, n, l, o, r) {
  const a = ve("ResizeObserver"), i = ve("thumb");
  return $(), V("div", {
    class: D(e.cls),
    style: ie(e.style)
  }, [f(a, {
    onResize: e.handleResize
  }, {
    default: Z(() => [j("div", re({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(a, {
      onResize: e.handleResize
    }, {
      default: Z(() => [le(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? ($(), X(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0), !e.hide && e.hasVerticalScrollbar ? ($(), X(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0)], 6);
}
var fl = /* @__PURE__ */ de(Pu, [["render", Bu]]);
const nr = Object.assign(fl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + fl.name, fl);
  }
}), Tu = (e) => {
  const t = m(), n = () => Aa(t.value) ? t.value.$refs[e] : t.value, l = m();
  return Ve(() => {
    l.value = n();
  }), pe([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Iu = Object.defineProperty, Ro = Object.getOwnPropertySymbols, zu = Object.prototype.hasOwnProperty, Nu = Object.prototype.propertyIsEnumerable, Ho = (e, t, n) => t in e ? Iu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Lu = (e, t) => {
  for (var n in t || (t = {}))
    zu.call(t, n) && Ho(e, n, t[n]);
  if (Ro)
    for (var n of Ro(t))
      Nu.call(t, n) && Ho(e, n, t[n]);
  return e;
};
const Vu = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return Lu({
        type: "embed"
      }, Ft(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Du = z({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: nr,
    Empty: $u,
    Spin: Su
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: !0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: !1
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var l, o, r;
    const {
      scrollbar: a
    } = _e(e), i = Y("select-dropdown"), s = Ue(Bt, void 0), u = (r = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: c,
      elementRef: v
    } = Tu("containerRef"), {
      displayScrollbar: p,
      scrollbarProps: h
    } = Vu(a), y = (w) => {
      const {
        scrollTop: N,
        scrollHeight: T,
        offsetHeight: S
      } = w.target;
      T - (N + S) <= e.bottomOffset && t("reachBottom", w), t("scroll", w);
    }, b = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: b,
      wrapperRef: v,
      wrapperComRef: c,
      handleScroll: y,
      displayScrollbar: p,
      scrollbarProps: h
    };
  }
});
function Au(e, t, n, l, o, r) {
  const a = ve("spin");
  return $(), V("div", {
    class: D(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? ($(), V("div", {
    key: 0,
    class: D(`${e.prefixCls}-header`)
  }, [le(e.$slots, "header")], 2)) : he("v-if", !0), e.loading ? ($(), X(a, {
    key: 1,
    class: D(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? ($(), V("div", {
    key: 2,
    class: D(`${e.prefixCls}-empty`)
  }, [le(e.$slots, "empty", {}, () => [($(), X(Vt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : he("v-if", !0), e.virtualList && !e.loading && !e.empty ? le(e.$slots, "virtual-list", {
    key: 3
  }) : he("v-if", !0), e.virtualList ? he("v-if", !0) : ut(($(), X(Vt(e.displayScrollbar ? "ScrollbarComponent" : "div"), re({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: Z(() => [j("ul", {
      class: D(`${e.prefixCls}-list`)
    }, [le(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[ct, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? ($(), V("div", {
    key: 5,
    class: D(`${e.prefixCls}-footer`)
  }, [le(e.$slots, "footer")], 2)) : he("v-if", !0)], 2);
}
var ju = /* @__PURE__ */ de(Du, [["render", Au]]), Wo = z({
  name: "IconCheck",
  render() {
    return f("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200",
      fill: "currentColor"
    }, [f("path", {
      d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const lr = Symbol("ArcoCheckboxGroup");
var $n = z({
  name: "Checkbox",
  components: {
    IconCheck: Wo,
    IconHover: Qe
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !1
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    uninjectGroupContext: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      disabled: l,
      modelValue: o
    } = _e(e), r = Y("checkbox"), a = m(), i = e.uninjectGroupContext ? void 0 : Ue(lr, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = yt({
      disabled: l
    }), v = m(e.defaultChecked), p = d(() => {
      var C;
      return s ? i == null ? void 0 : i.computedValue : (C = e.modelValue) != null ? C : v.value;
    }), h = d(() => {
      var C;
      return Ae(p.value) ? p.value.includes((C = e.value) != null ? C : !0) : p.value;
    }), y = d(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !h.value && (i == null ? void 0 : i.isMaxed)), b = (C) => {
      C.stopPropagation();
    }, w = (C) => {
      var E, _, g, A;
      const {
        checked: F
      } = C.target;
      let L = F;
      if (Ae(p.value)) {
        const O = new Set(p.value);
        F ? O.add((E = e.value) != null ? E : !0) : O.delete((_ = e.value) != null ? _ : !0), L = Array.from(O);
      }
      v.value = F, s && Ae(L) ? i == null || i.handleChange(L, C) : (t("update:modelValue", L), t("change", L, C), (A = (g = c.value) == null ? void 0 : g.onChange) == null || A.call(g, C)), Fe(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, N = d(() => [r, {
      [`${r}-checked`]: h.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: y.value
    }]), T = (C) => {
      var E, _;
      (_ = (E = c.value) == null ? void 0 : E.onFocus) == null || _.call(E, C);
    }, S = (C) => {
      var E, _;
      (_ = (E = c.value) == null ? void 0 : E.onBlur) == null || _.call(E, C);
    };
    return pe(o, (C) => {
      (Ke(C) || Dn(C)) && (v.value = !1);
    }), pe(p, (C) => {
      var E;
      let _;
      Ae(C) ? _ = C.includes((E = e.value) != null ? E : !0) : _ = C, v.value !== _ && (v.value = _), a.value && a.value.checked !== _ && (a.value.checked = _);
    }), () => {
      var C, E, _, g;
      return f("label", {
        "aria-disabled": y.value,
        class: N.value
      }, [f("input", {
        ref: a,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${r}-target`,
        disabled: y.value,
        onClick: b,
        onChange: w,
        onFocus: T,
        onBlur: S
      }, null), (g = (_ = (E = n.checkbox) != null ? E : (C = i == null ? void 0 : i.slots) == null ? void 0 : C.checkbox) == null ? void 0 : _({
        checked: h.value,
        disabled: y.value
      })) != null ? g : f(Qe, {
        class: `${r}-icon-hover`,
        disabled: y.value || h.value
      }, {
        default: () => [f("div", {
          class: `${r}-icon`
        }, [h.value && f(Wo, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && f("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), vl = z({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      disabled: l
    } = _e(e), o = Y("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: a
    } = yt({
      disabled: l
    }), i = m(e.defaultValue), s = d(() => Ae(e.modelValue) ? e.modelValue : i.value), u = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = d(() => {
      var y;
      return ((y = e.options) != null ? y : []).map((b) => Pt(b) || Ce(b) ? {
        label: b,
        value: b
      } : b);
    });
    Ot(lr, Oe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (y, b) => {
        var w, N;
        i.value = y, t("update:modelValue", y), t("change", y, b), (N = (w = a.value) == null ? void 0 : w.onChange) == null || N.call(w, b);
      }
    }));
    const p = d(() => [o, `${o}-direction-${e.direction}`]);
    pe(() => e.modelValue, (y) => {
      Ae(y) ? i.value = [...y] : i.value = [];
    });
    const h = () => c.value.map((y) => {
      const b = s.value.includes(y.value);
      return f($n, {
        key: y.value,
        value: y.value,
        disabled: y.disabled || !b && u.value,
        indeterminate: y.indeterminate,
        modelValue: b
      }, {
        default: () => [n.label ? n.label({
          data: y
        }) : Ge(y.label) ? y.label() : y.label]
      });
    });
    return () => {
      var y;
      return f("span", {
        class: p.value
      }, [c.value.length > 0 ? h() : (y = n.default) == null ? void 0 : y.call(n)]);
    };
  }
});
const or = Object.assign($n, {
  Group: vl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + $n.name, $n), e.component(n + vl.name, vl);
  }
}), ar = Symbol("ArcoSelectContext");
var Fu = Object.defineProperty, Mu = Object.defineProperties, Ku = Object.getOwnPropertyDescriptors, qo = Object.getOwnPropertySymbols, Ru = Object.prototype.hasOwnProperty, Hu = Object.prototype.propertyIsEnumerable, Go = (e, t, n) => t in e ? Fu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, po = (e, t) => {
  for (var n in t || (t = {}))
    Ru.call(t, n) && Go(e, n, t[n]);
  if (qo)
    for (var n of qo(t))
      Hu.call(t, n) && Go(e, n, t[n]);
  return e;
}, rr = (e, t) => Mu(e, Ku(t));
const Wu = (e) => Le(e) && "isGroup" in e, ir = (e) => Le(e) && "isGroup" in e, qu = (e, t = "value") => String(Le(e) ? e[t] : e), rn = (e, t = "value") => Le(e) ? `__arco__option__object__${e[t]}` : e || Ce(e) || Pt(e) || Ft(e) ? `__arco__option__${typeof e}-${e}` : "", Gu = (e) => e.has("__arco__option__string-"), Uu = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var r;
  if (Le(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: rn(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : qu(i, t),
      render: e[n.render],
      disabled: !!e[n.disabled],
      tagProps: e[n.tagProps]
    };
  }
  const a = {
    value: e,
    label: String(e),
    disabled: !1
  };
  return po({
    raw: a,
    index: o,
    key: rn(e, t),
    origin: l
  }, a);
}, Yl = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (Wu(i)) {
      const s = Yl((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(rr(po({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = Uu(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Uo = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (ir(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(rr(po({}, i), {
          options: s
        }));
      } else
        Kn(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return l(e);
}, Kn = (e, {
  inputValue: t,
  filterOption: n
}) => Ge(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, Yu = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!ho(e[n], t[n]))
      return !1;
  return !0;
}, Zu = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!ho(e[l], t[l]))
      return !1;
  return !0;
}, ho = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? Yu(e, t) : n === "[object Array]" ? Zu(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, Xu = z({
  name: "Option",
  components: {
    Checkbox: or
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: void 0
    },
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(e) {
    const {
      disabled: t,
      tagProps: n,
      index: l
    } = _e(e), o = Y("select-option"), r = Ue(ar, void 0), a = mt(), i = m(), s = m(n.value);
    pe(n, (_, g) => {
      ho(_, g) || (s.value = _);
    });
    const u = m(""), c = d(() => {
      var _, g;
      return (g = (_ = e.value) != null ? _ : e.label) != null ? g : u.value;
    }), v = d(() => {
      var _;
      return (_ = e.label) != null ? _ : u.value;
    }), p = d(() => rn(c.value, r == null ? void 0 : r.valueKey)), h = d(() => {
      var _;
      return (_ = r == null ? void 0 : r.component) != null ? _ : "li";
    }), y = () => {
      var _;
      if (!e.label && i.value) {
        const g = (_ = i.value.textContent) != null ? _ : "";
        u.value !== g && (u.value = g);
      }
    };
    Ve(() => y()), dt(() => y());
    const b = d(() => {
      var _;
      return (_ = r == null ? void 0 : r.valueKeys.includes(p.value)) != null ? _ : !1;
    }), w = d(() => (r == null ? void 0 : r.activeKey) === p.value);
    let N = m(!0);
    if (!e.internal) {
      const _ = Oe({
        raw: {
          value: c,
          label: v,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: l,
        key: p,
        origin: "slot",
        value: c,
        label: v,
        disabled: t,
        tagProps: s
      });
      N = d(() => Kn(_, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, _)), Ht(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const T = (_) => {
      e.disabled || r == null || r.onSelect(p.value, _);
    }, S = () => {
      e.disabled || r == null || r.setActiveKey(p.value);
    }, C = () => {
      e.disabled || r == null || r.setActiveKey();
    }, E = d(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: b.value,
      [`${o}-active`]: w.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: E,
      selectCtx: r,
      itemRef: i,
      component: h,
      isSelected: b,
      isValid: N,
      handleClick: T,
      handleMouseEnter: S,
      handleMouseLeave: C
    };
  }
});
function Ju(e, t, n, l, o, r) {
  const a = ve("checkbox");
  return ut(($(), X(Vt(e.component), {
    ref: "itemRef",
    class: D([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: Z(() => [e.$slots.icon ? ($(), V("span", {
      key: 0,
      class: D(`${e.prefixCls}-icon`)
    }, [le(e.$slots, "icon")], 2)) : he("v-if", !0), e.selectCtx && e.selectCtx.multiple ? ($(), X(a, {
      key: 1,
      class: D(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: Z(() => [le(e.$slots, "default", {}, () => [qe(je(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : ($(), V("span", {
      key: 2,
      class: D(`${e.prefixCls}-content`)
    }, [le(e.$slots, "default", {}, () => [qe(je(e.label), 1)])], 2)), e.$slots.suffix ? ($(), V("span", {
      key: 3,
      class: D(`${e.prefixCls}-suffix`)
    }, [le(e.$slots, "suffix")], 2)) : he("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ct, e.isValid]]);
}
var kn = /* @__PURE__ */ de(Xu, [["render", Ju]]), Qu = Object.defineProperty, ec = Object.defineProperties, tc = Object.getOwnPropertyDescriptors, Yo = Object.getOwnPropertySymbols, nc = Object.prototype.hasOwnProperty, lc = Object.prototype.propertyIsEnumerable, Zo = (e, t, n) => t in e ? Qu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pl = (e, t) => {
  for (var n in t || (t = {}))
    nc.call(t, n) && Zo(e, n, t[n]);
  if (Yo)
    for (var n of Yo(t))
      lc.call(t, n) && Zo(e, n, t[n]);
  return e;
}, oc = (e, t) => ec(e, tc(t));
const ac = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, rc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = d(() => pl(pl({}, ac), a == null ? void 0 : a.value)), s = Oe(/* @__PURE__ */ new Map()), u = d(() => Array.from(s.values()).sort((S, C) => Ce(S.index) && Ce(C.index) ? S.index - C.index : 0)), c = d(() => {
    var S, C;
    const E = /* @__PURE__ */ new Map();
    return {
      optionInfos: Yl((S = e == null ? void 0 : e.value) != null ? S : [], {
        valueKey: (C = r == null ? void 0 : r.value) != null ? C : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: E
      }),
      optionInfoMap: E
    };
  }), v = d(() => {
    var S, C;
    const E = /* @__PURE__ */ new Map();
    return {
      optionInfos: Yl((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: (C = r == null ? void 0 : r.value) != null ? C : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: E
      }),
      optionInfoMap: E
    };
  }), p = Oe(/* @__PURE__ */ new Map());
  pe([u, e ?? m([]), t ?? m([]), r ?? m("value")], () => {
    p.clear(), u.value.forEach((S, C) => {
      p.set(S.key, oc(pl({}, S), {
        index: C
      }));
    }), c.value.optionInfoMap.forEach((S) => {
      p.has(S.key) || (S.index = p.size, p.set(S.key, S));
    }), v.value.optionInfoMap.forEach((S) => {
      p.has(S.key) || (S.index = p.size, p.set(S.key, S));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const h = d(() => {
    var S;
    const C = Uo(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((S = o == null ? void 0 : o.value) == null || S) && C.push(...Uo(v.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), C;
  }), y = d(() => Array.from(p.values()).filter((S) => S.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Kn(S, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), b = d(() => y.value.filter((S) => !S.disabled).map((S) => S.key));
  return {
    validOptions: h,
    optionInfoMap: p,
    validOptionInfos: y,
    enabledOptionKeys: b,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (S, C) => {
      s.set(S, C);
    },
    removeSlotOptionInfo: (S) => {
      s.delete(S);
    }
  };
}, bn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Xo = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), ic = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = Pt(l) ? {
      key: l
    } : l;
    t[Xo(o)] = n;
  }), (n) => {
    const l = Xo({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, sc = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: l,
  filterOption: o,
  showExtraOptions: r,
  component: a,
  valueKey: i,
  fieldNames: s,
  loading: u,
  popupVisible: c,
  valueKeys: v,
  dropdownRef: p,
  optionRefs: h,
  virtualListRef: y,
  onSelect: b,
  onPopupVisibleChange: w,
  enterToOpen: N = !0,
  defaultActiveFirstOption: T
}) => {
  const {
    validOptions: S,
    optionInfoMap: C,
    validOptionInfos: E,
    enabledOptionKeys: _,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F
  } = rc({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), L = m();
  pe(_, (te) => {
    (!L.value || !te.includes(L.value)) && (L.value = te[0]);
  });
  const O = (te) => {
    L.value = te;
  }, K = (te) => {
    const oe = _.value.length;
    if (oe === 0)
      return;
    if (!L.value)
      return te === "down" ? _.value[0] : _.value[oe - 1];
    const x = _.value.indexOf(L.value), G = (oe + x + (te === "up" ? -1 : 1)) % oe;
    return _.value[G];
  }, R = (te) => {
    var oe, x;
    y != null && y.value && y.value.scrollTo({
      key: te
    });
    const G = C.get(te), me = (oe = p == null ? void 0 : p.value) == null ? void 0 : oe.wrapperRef, ne = (x = h == null ? void 0 : h.value[te]) != null ? x : G == null ? void 0 : G.ref;
    if (!me || !ne || me.scrollHeight === me.offsetHeight)
      return;
    const se = $i(ne, me), Se = me.scrollTop;
    se.top < 0 ? me.scrollTo(0, Se + se.top) : se.bottom < 0 && me.scrollTo(0, Se - se.bottom);
  };
  pe(c, (te) => {
    var oe;
    if (te) {
      const x = v.value[v.value.length - 1];
      let G = (oe = T == null ? void 0 : T.value) == null || oe ? _.value[0] : void 0;
      _.value.includes(x) && (G = x), G !== L.value && (L.value = G), Fe(() => {
        L.value && R(L.value);
      });
    }
  });
  const Q = ic(/* @__PURE__ */ new Map([[bn.ENTER, (te) => {
    !(u != null && u.value) && !te.isComposing && (c.value ? L.value && (b(L.value, te), te.preventDefault()) : N && (w(!0), te.preventDefault()));
  }], [bn.ESC, (te) => {
    c.value && (w(!1), te.preventDefault());
  }], [bn.ARROW_DOWN, (te) => {
    if (c.value) {
      const oe = K("down");
      oe && (L.value = oe, R(oe)), te.preventDefault();
    }
  }], [bn.ARROW_UP, (te) => {
    if (c.value) {
      const oe = K("up");
      oe && (L.value = oe, R(oe)), te.preventDefault();
    }
  }]]));
  return Ot(ar, Oe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: v,
    activeKey: L,
    setActiveKey: O,
    onSelect: b,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F
  })), {
    validOptions: S,
    optionInfoMap: C,
    validOptionInfos: E,
    enabledOptionKeys: _,
    activeKey: L,
    setActiveKey: O,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F,
    getNextActiveKey: K,
    scrollIntoView: R,
    handleKeyDown: Q
  };
}, uc = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = m(0), a = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = m(0), u = d(() => {
    const g = s.value + o.value * 3;
    return g > i.value ? i.value : g;
  }), c = d(() => {
    const g = i.value - o.value * 3;
    return g < 0 ? 0 : g;
  }), v = (g) => {
    g < 0 ? s.value = 0 : g > c.value ? s.value = c.value : s.value = g;
  }, p = m(n.value), h = d(() => l.value !== 30 ? l.value : r.value || l.value), y = (g, A) => {
    a.set(g, A);
  }, b = (g) => {
    var A;
    if (p.value)
      return h.value;
    const F = e.value[g];
    return (A = a.get(F)) != null ? A : h.value;
  }, w = (g) => a.has(g);
  Ve(() => {
    const g = Array.from(a.values()).reduce((A, F) => A + F, 0);
    g > 0 && (r.value = g / a.size);
  });
  const N = (g) => p.value ? h.value * g : T(0, g), T = (g, A) => {
    let F = 0;
    for (let L = g; L < A; L++)
      F += b(L);
    return F;
  }, S = d(() => p.value ? h.value * s.value : T(0, s.value)), C = (g) => {
    const A = g >= S.value;
    let F = Math.abs(g - S.value);
    const L = A ? s.value : s.value - 1;
    let O = 0;
    for (; F > 0; )
      F -= b(L + O), A ? O++ : O--;
    return O;
  }, E = (g) => {
    const A = C(g), F = s.value + A - o.value;
    return F < 0 ? 0 : F > c.value ? c.value : F;
  }, _ = d(() => p.value ? h.value * (i.value - u.value) : T(u.value, i.value));
  return {
    frontPadding: S,
    behindPadding: _,
    start: s,
    end: u,
    getStartByScroll: E,
    setItemSize: y,
    hasItemSize: w,
    setStart: v,
    getScrollOffset: N
  };
};
var cc = z({
  name: "VirtualListItem",
  props: {
    hasItemSize: {
      type: Function,
      required: !0
    },
    setItemSize: {
      type: Function,
      required: !0
    }
  },
  setup(e, {
    slots: t
  }) {
    var n;
    const l = (n = mt()) == null ? void 0 : n.vnode.key, o = m(), r = () => {
      var a, i, s, u;
      const c = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, v = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      v && e.setItemSize(l, v);
    };
    return Ve(() => r()), Ht(() => r()), () => {
      var a;
      const i = Dt((a = t.default) == null ? void 0 : a.call(t));
      return i ? Nn(i, {
        ref: o
      }, !0) : null;
    };
  }
}), dc = Object.defineProperty, Jo = Object.getOwnPropertySymbols, fc = Object.prototype.hasOwnProperty, vc = Object.prototype.propertyIsEnumerable, Qo = (e, t, n) => t in e ? dc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, pc = (e, t) => {
  for (var n in t || (t = {}))
    fc.call(t, n) && Qo(e, n, t[n]);
  if (Jo)
    for (var n of Jo(t))
      vc.call(t, n) && Qo(e, n, t[n]);
  return e;
};
const hc = z({
  name: "VirtualList",
  components: {
    VirtualListItem: cc
  },
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 0
    },
    itemKey: {
      type: String,
      default: "key"
    },
    fixedSize: {
      type: Boolean,
      default: !1
    },
    estimatedSize: {
      type: Number,
      default: 30
    },
    buffer: {
      type: Number,
      default: 10
    },
    component: {
      type: [String, Object],
      default: "div"
    },
    listAttrs: {
      type: Object
    },
    contentAttrs: {
      type: Object
    },
    paddingPosition: {
      type: String,
      default: "content"
    }
  },
  emits: {
    scroll: (e) => !0,
    reachBottom: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      data: n,
      itemKey: l,
      fixedSize: o,
      estimatedSize: r,
      buffer: a,
      height: i
    } = _e(e), s = Y("virtual-list"), u = d(() => Le(e.component) ? pc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = m(), v = m(), p = d(() => ({
      height: Ce(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((L, O) => {
      var K;
      return (K = L[l.value]) != null ? K : O;
    })), {
      frontPadding: y,
      behindPadding: b,
      start: w,
      end: N,
      getStartByScroll: T,
      setItemSize: S,
      hasItemSize: C,
      setStart: E,
      getScrollOffset: _
    } = uc({
      dataKeys: h,
      contentRef: v,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), g = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(w.value, N.value)), A = (L) => {
      const {
        scrollTop: O,
        scrollHeight: K,
        offsetHeight: R
      } = L.target, Q = T(O);
      Q !== w.value && (E(Q), Fe(() => {
        F(O);
      })), t("scroll", L), Math.floor(K - (O + R)) <= 0 && t("reachBottom", L);
    }, F = (L) => {
      var O, K;
      if (c.value)
        if (Ce(L))
          c.value.scrollTop = L;
        else {
          const R = (K = L.index) != null ? K : h.value.indexOf((O = L.key) != null ? O : "");
          E(R - a.value), c.value.scrollTop = _(R), Fe(() => {
            if (c.value) {
              const Q = _(R);
              Q !== c.value.scrollTop && (c.value.scrollTop = Q);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: c,
      contentRef: v,
      frontPadding: y,
      currentList: g,
      behindPadding: b,
      onScroll: A,
      setItemSize: S,
      hasItemSize: C,
      start: w,
      scrollTo: F,
      style: p,
      mergedComponent: u
    };
  }
});
function mc(e, t, n, l, o, r) {
  const a = ve("VirtualListItem");
  return $(), X(Vt(e.mergedComponent.container), {
    ref: "containerRef",
    class: D(e.prefixCls),
    style: ie(e.style),
    onScroll: e.onScroll
  }, {
    default: Z(() => [($(), X(Vt(e.mergedComponent.list), re(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: Z(() => [($(), X(Vt(e.mergedComponent.content), re({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: Z(() => [($(!0), V(Pe, null, St(e.currentList, (i, s) => {
          var u;
          return $(), X(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: Z(() => [le(e.$slots, "item", {
              item: i,
              index: e.start + s
            })]),
            _: 2
          }, 1032, ["has-item-size", "set-item-size"]);
        }), 128))]),
        _: 3
      }, 16, ["style"]))]),
      _: 3
    }, 16, ["style"]))]),
    _: 3
  }, 8, ["class", "style", "onScroll"]);
}
var sr = /* @__PURE__ */ de(hc, [["render", mc]]);
const yc = z({
  name: "Popover",
  components: {
    Trigger: an
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    title: String,
    content: String,
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "top"
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("popover"), l = m(e.defaultPopupVisible), o = d(() => {
      var s;
      return (s = e.popupVisible) != null ? s : l.value;
    }), r = (s) => {
      l.value = s, t("update:popupVisible", s), t("popupVisibleChange", s);
    }, a = d(() => [`${n}-popup-content`, e.contentClass]), i = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: a,
      arrowCls: i,
      handlePopupVisibleChange: r
    };
  }
});
function gc(e, t, n, l, o, r) {
  const a = ve("trigger");
  return $(), X(a, {
    class: D(e.prefixCls),
    trigger: e.trigger,
    position: e.position,
    "popup-visible": e.computedPopupVisible,
    "popup-offset": 10,
    "content-class": e.contentCls,
    "content-style": e.contentStyle,
    "arrow-class": e.arrowCls,
    "arrow-style": e.arrowStyle,
    "show-arrow": "",
    "popup-container": e.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: Z(() => [j("div", {
      class: D(`${e.prefixCls}-title`)
    }, [le(e.$slots, "title", {}, () => [qe(je(e.title), 1)])], 2), j("div", {
      class: D(`${e.prefixCls}-content`)
    }, [le(e.$slots, "content", {}, () => [qe(je(e.content), 1)])], 2)]),
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var hl = /* @__PURE__ */ de(yc, [["render", gc]]);
const bc = Object.assign(hl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + hl.name, hl);
  }
});
var _c = Object.defineProperty, ea = Object.getOwnPropertySymbols, Cc = Object.prototype.hasOwnProperty, $c = Object.prototype.propertyIsEnumerable, ta = (e, t, n) => t in e ? _c(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ml = (e, t) => {
  for (var n in t || (t = {}))
    Cc.call(t, n) && ta(e, n, t[n]);
  if (ea)
    for (var n of ea(t))
      $c.call(t, n) && ta(e, n, t[n]);
  return e;
};
const kc = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], wc = ["normal", "processing", "success", "warning", "danger"];
var yl = z({
  name: "Badge",
  props: {
    text: {
      type: String
    },
    dot: {
      type: Boolean
    },
    dotStyle: {
      type: Object
    },
    maxCount: {
      type: Number,
      default: 99
    },
    offset: {
      type: Array,
      default: () => []
    },
    color: {
      type: String
    },
    status: {
      type: String,
      validator: (e) => wc.includes(e)
    },
    count: {
      type: Number
    }
  },
  setup(e, {
    slots: t
  }) {
    const {
      status: n,
      color: l,
      dotStyle: o,
      offset: r,
      text: a,
      dot: i,
      maxCount: s,
      count: u
    } = _e(e), c = Y("badge"), v = Sc(c, n == null ? void 0 : n.value, t == null ? void 0 : t.default), p = d(() => {
      const y = ml({}, (o == null ? void 0 : o.value) || {}), [b, w] = (r == null ? void 0 : r.value) || [];
      b && (y.marginRight = `${-b}px`), w && (y.marginTop = `${w}px`);
      const N = !(l != null && l.value) || kc.includes(l == null ? void 0 : l.value) ? {} : {
        backgroundColor: l.value
      };
      return {
        mergedStyle: ml(ml({}, N), y),
        computedDotStyle: y,
        computedColorStyle: N
      };
    }), h = () => {
      const y = a == null ? void 0 : a.value, b = l == null ? void 0 : l.value, w = n == null ? void 0 : n.value, N = i == null ? void 0 : i.value, T = Number(u == null ? void 0 : u.value), S = (u == null ? void 0 : u.value) != null, {
        computedDotStyle: C,
        mergedStyle: E
      } = p.value;
      return t.content ? f("span", {
        class: `${c}-custom-dot`,
        style: C
      }, [t.content()]) : y && !b && !w ? f("span", {
        class: `${c}-text`,
        style: C
      }, [y]) : w || b && !S ? f("span", {
        class: `${c}-status-wrapper`
      }, [f("span", {
        class: [`${c}-status-dot`, {
          [`${c}-status-${w}`]: w,
          [`${c}-color-${b}`]: b
        }],
        style: E
      }, null), y && f("span", {
        class: `${c}-status-text`
      }, [y])]) : (N || b) && T > 0 ? f("span", {
        class: [`${c}-dot`, {
          [`${c}-color-${b}`]: b
        }],
        style: E
      }, null) : T === 0 ? null : f("span", {
        class: `${c}-number`,
        style: E
      }, [f("span", null, [s.value && T > s.value ? `${s.value}+` : T])]);
    };
    return () => f("span", {
      class: v.value
    }, [t.default && t.default(), h()]);
  }
});
const Sc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), Ec = Object.assign(yl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + yl.name, yl);
  }
}), Oc = z({
  name: "IconDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), xc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Pc = /* @__PURE__ */ j("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Bc = [Pc];
function Tc(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Bc, 14, xc);
}
var gl = /* @__PURE__ */ de(Oc, [["render", Tc]]);
const ur = Object.assign(gl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + gl.name, gl);
  }
}), Ic = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = m((l = t == null ? void 0 : t.value) != null ? l : !1), r = d(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : o.value;
  }), a = (i) => {
    i !== r.value && (o.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return pe(r, (i) => {
    o.value !== i && (o.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: a
  };
}, zc = z({
  name: "IconRight",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Nc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Lc = /* @__PURE__ */ j("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Vc = [Lc];
function Dc(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Vc, 14, Nc);
}
var bl = /* @__PURE__ */ de(zc, [["render", Dc]]);
const Ac = Object.assign(bl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + bl.name, bl);
  }
}), jc = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = m(), s = m((a = e == null ? void 0 : e.value) != null ? a : ""), u = m(!1), c = m(!1), v = m("");
  let p;
  const h = d(() => {
    var _;
    return (_ = t == null ? void 0 : t.value) != null ? _ : s.value;
  }), y = (_, g) => {
    s.value = _, n(o, _), n(l, _, g);
  }, b = (_) => {
    const {
      value: g
    } = _.target;
    c.value || (y(g, _), Fe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, w = (_) => {
    l === "input" && h.value !== p && (p = h.value, n("change", h.value, _));
  }, N = (_) => {
    var g;
    const {
      value: A
    } = _.target;
    _.type === "compositionend" ? (c.value = !1, v.value = "", y(A, _), Fe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (c.value = !0, v.value = h.value + ((g = _.data) != null ? g : ""));
  }, T = (_) => {
    var g, A;
    u.value = !0, p = h.value, n("focus", _), (A = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onFocus) == null || A.call(g, _);
  }, S = (_) => {
    var g, A;
    u.value = !1, n("blur", _), (A = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onBlur) == null || A.call(g, _), w(_);
  }, C = (_) => {
    const g = _.key || _.code;
    !c.value && g === fo.key && (n("pressEnter", _), w(_));
  }, E = (_) => {
    i.value && _.target !== i.value && (_.preventDefault(), i.value.focus());
  };
  return pe(h, (_) => {
    i.value && _ !== i.value.value && (i.value.value = _);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: v,
    computedValue: h,
    handleInput: b,
    handleComposition: N,
    handleFocus: T,
    handleBlur: S,
    handleKeyDown: C,
    handleMousedown: E
  };
};
var Fc = z({
  name: "InputLabel",
  inheritAttrs: !1,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(e, {
    attrs: t,
    emit: n,
    slots: l
  }) {
    var o;
    const {
      size: r,
      disabled: a,
      error: i,
      inputValue: s,
      uninjectFormItemContext: u
    } = _e(e), c = (o = e.baseCls) != null ? o : Y("input-label"), {
      mergedSize: v,
      mergedDisabled: p,
      mergedError: h,
      eventHandlers: y
    } = yt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: b
    } = gt(v), {
      inputRef: w,
      _focused: N,
      computedValue: T,
      handleInput: S,
      handleComposition: C,
      handleFocus: E,
      handleBlur: _,
      handleMousedown: g
    } = jc({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: y
    }), A = d(() => {
      var x;
      return (x = e.focused) != null ? x : N.value;
    }), F = d(() => e.enabledInput && N.value || !e.modelValue), L = () => {
      var x, G;
      return e.modelValue ? (G = (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? G : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? L() : e.placeholder), K = () => {
      var x, G;
      return e.modelValue ? (G = (x = l.default) == null ? void 0 : x.call(l, {
        data: e.modelValue
      })) != null ? G : L() : null;
    }, R = d(() => [c, `${c}-size-${b.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: A.value,
      [`${c}-disabled`]: p.value,
      [`${c}-error`]: h.value
    }]), Q = d(() => Wt(t, Kt)), te = d(() => vo(t, Kt));
    return {
      inputRef: w,
      render: () => f("span", re(Q.value, {
        class: R.value,
        title: L(),
        onMousedown: g
      }), [l.prefix && f("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), f("input", re(te.value, {
        ref: w,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !F.value
        }],
        value: T.value,
        readonly: !e.enabledInput,
        placeholder: O.value,
        disabled: p.value,
        onInput: S,
        onFocus: E,
        onBlur: _,
        onCompositionstart: C,
        onCompositionupdate: C,
        onCompositionend: C
      }), null), f("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: F.value
        }]
      }, [K()]), l.suffix && f("span", {
        class: `${c}-suffix`
      }, [l.suffix()])])
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
}), Mc = Object.defineProperty, na = Object.getOwnPropertySymbols, Kc = Object.prototype.hasOwnProperty, Rc = Object.prototype.propertyIsEnumerable, la = (e, t, n) => t in e ? Mc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Hc = (e, t) => {
  for (var n in t || (t = {}))
    Kc.call(t, n) && la(e, n, t[n]);
  if (na)
    for (var n of na(t))
      Rc.call(t, n) && la(e, n, t[n]);
  return e;
};
const Wc = (e, t) => {
  const n = [];
  for (const l of e)
    if (Le(l))
      n.push({
        raw: l,
        value: l[t.value],
        label: l[t.label],
        closable: l[t.closable],
        tagProps: l[t.tagProps]
      });
    else if (e || Ce(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Hc({
        raw: o
      }, o));
    }
  return n;
}, oa = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], qc = z({
  name: "Tag",
  components: {
    IconHover: Qe,
    IconClose: dn,
    IconLoading: pt
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    checkable: {
      type: Boolean,
      default: !1
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !0
    },
    nowrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:visible": (e) => !0,
    "update:checked": (e) => !0,
    close: (e) => !0,
    check: (e, t) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      size: n
    } = _e(e), l = Y("tag"), o = d(() => e.color && oa.includes(e.color)), r = d(() => e.color && !oa.includes(e.color)), a = m(e.defaultVisible), i = m(e.defaultChecked), s = d(() => {
      var w;
      return (w = e.visible) != null ? w : a.value;
    }), u = d(() => {
      var w;
      return e.checkable ? (w = e.checked) != null ? w : i.value : !0;
    }), {
      mergedSize: c
    } = gt(n), v = d(() => c.value === "mini" ? "small" : c.value), p = (w) => {
      a.value = !1, t("update:visible", !1), t("close", w);
    }, h = (w) => {
      if (e.checkable) {
        const N = !u.value;
        i.value = N, t("update:checked", N), t("check", N, w);
      }
    }, y = d(() => [l, `${l}-size-${v.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: r.value
    }]), b = d(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: y,
      style: b,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: p
    };
  }
});
function Gc(e, t, n, l, o, r) {
  const a = ve("icon-close"), i = ve("icon-hover"), s = ve("icon-loading");
  return e.computedVisible ? ($(), V("span", {
    key: 0,
    class: D(e.cls),
    style: ie(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: D(`${e.prefixCls}-icon`)
  }, [le(e.$slots, "icon")], 2)) : he("v-if", !0), e.nowrap ? ($(), V("span", {
    key: 1,
    class: D(`${e.prefixCls}-text`)
  }, [le(e.$slots, "default")], 2)) : le(e.$slots, "default", {
    key: 2
  }), e.closable ? ($(), X(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: D(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleClose, ["stop"])
  }, {
    default: Z(() => [le(e.$slots, "close-icon", {}, () => [f(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : he("v-if", !0), e.loading ? ($(), V("span", {
    key: 4,
    class: D(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : he("v-if", !0)], 6)) : he("v-if", !0);
}
var _l = /* @__PURE__ */ de(qc, [["render", Gc]]);
const fn = Object.assign(_l, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + _l.name, _l);
  }
});
var Uc = Object.defineProperty, aa = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Zc = Object.prototype.propertyIsEnumerable, ra = (e, t, n) => t in e ? Uc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, _n = (e, t) => {
  for (var n in t || (t = {}))
    Yc.call(t, n) && ra(e, n, t[n]);
  if (aa)
    for (var n of aa(t))
      Zc.call(t, n) && ra(e, n, t[n]);
  return e;
};
const Xc = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Cl = z({
  name: "InputTag",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: [Boolean, Object],
      default: !1
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: !1
    },
    fieldNames: {
      type: Object
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:inputValue": (e) => !0,
    change: (e, t) => !0,
    inputValueChange: (e, t) => !0,
    pressEnter: (e, t) => !0,
    remove: (e, t) => !0,
    clear: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      uninjectFormItemContext: i,
      modelValue: s
    } = _e(e), u = e.baseCls || Y("input-tag"), c = m(), v = m(), {
      mergedSize: p,
      mergedDisabled: h,
      mergedError: y,
      feedback: b,
      eventHandlers: w
    } = yt({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: N
    } = gt(p), T = d(() => _n(_n({}, Xc), e.fieldNames)), S = m(!1), C = m(e.defaultValue), E = m(e.defaultInputValue), _ = m(!1), g = m(""), A = d(() => Le(e.retainInputValue) ? _n({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), F = Oe({
      width: "12px"
    }), L = d(() => e.focused || S.value), O = (P, H) => {
      E.value = P, t("update:inputValue", P), t("inputValueChange", P, H);
    }, K = (P) => {
      var H;
      const {
        value: ce
      } = P.target;
      P.type === "compositionend" ? (_.value = !1, g.value = "", O(ce, P), Fe(() => {
        c.value && Q.value !== c.value.value && (c.value.value = Q.value);
      })) : (_.value = !0, g.value = Q.value + ((H = P.data) != null ? H : ""));
    }, R = d(() => {
      var P;
      return (P = e.modelValue) != null ? P : C.value;
    }), Q = d(() => {
      var P;
      return (P = e.inputValue) != null ? P : E.value;
    });
    pe(s, (P) => {
      (Ke(P) || Dn(P)) && (C.value = []);
    });
    const te = (P) => {
      c.value && P.target !== c.value && (P.preventDefault(), c.value.focus());
    }, oe = (P) => {
      const {
        value: H
      } = P.target;
      _.value || (O(H, P), Fe(() => {
        c.value && Q.value !== c.value.value && (c.value.value = Q.value);
      }));
    }, x = d(() => Wc(R.value, T.value)), G = d(() => {
      if (e.maxTagCount > 0) {
        const P = x.value.length - e.maxTagCount;
        if (P > 0) {
          const H = x.value.slice(0, e.maxTagCount), ce = {
            value: "__arco__more",
            label: `+${P}...`,
            closable: !1
          };
          return H.push(_n({
            raw: ce
          }, ce)), H;
        }
      }
      return x.value;
    }), me = (P, H) => {
      var ce, we;
      C.value = P, t("update:modelValue", P), t("change", P, H), (we = (ce = w.value) == null ? void 0 : ce.onChange) == null || we.call(ce, H);
    }, ne = (P, H, ce) => {
      var we;
      const Ee = (we = R.value) == null ? void 0 : we.filter((Je, Ie) => Ie !== H);
      me(Ee, ce), t("remove", P, ce);
    }, se = (P) => {
      me([], P), t("clear", P);
    }, Se = d(() => !h.value && !e.readonly && e.allowClear && !!R.value.length), ge = (P) => {
      var H;
      if (Q.value) {
        if (P.preventDefault(), e.uniqueValue && ((H = R.value) != null && H.includes(Q.value))) {
          t("pressEnter", Q.value, P);
          return;
        }
        const ce = R.value.concat(Q.value);
        me(ce, P), t("pressEnter", Q.value, P), A.value.create || O("", P);
      }
    }, ye = (P) => {
      var H, ce;
      S.value = !0, t("focus", P), (ce = (H = w.value) == null ? void 0 : H.onFocus) == null || ce.call(H, P);
    }, ue = (P) => {
      var H, ce;
      S.value = !1, !A.value.blur && Q.value && O("", P), t("blur", P), (ce = (H = w.value) == null ? void 0 : H.onBlur) == null || ce.call(H, P);
    }, $e = () => {
      for (let P = x.value.length - 1; P >= 0; P--)
        if (x.value[P].closable)
          return P;
      return -1;
    }, tt = (P) => {
      if (h.value || e.readonly)
        return;
      const H = P.key || P.code;
      if (!_.value && Q.value && H === fo.key && ge(P), !_.value && G.value.length > 0 && !Q.value && H === os.key) {
        const ce = $e();
        ce >= 0 && ne(x.value[ce].value, ce, P);
      }
    }, Be = (P) => {
      P > 12 ? F.width = `${P}px` : F.width = "12px";
    };
    Ve(() => {
      v.value && Be(v.value.offsetWidth);
    });
    const De = () => {
      v.value && Be(v.value.offsetWidth);
    };
    pe(Q, (P) => {
      c.value && !_.value && P !== c.value.value && (c.value.value = P);
    });
    const Me = d(() => [u, `${u}-size-${N.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: y.value,
      [`${u}-focus`]: L.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: G.value.length > 0,
      [`${u}-has-prefix`]: !!n.prefix,
      [`${u}-has-suffix`]: !!n.suffix || Se.value || b.value,
      [`${u}-has-placeholder`]: !R.value.length
    }]), ze = d(() => Wt(l, Kt)), Ze = d(() => vo(l, Kt));
    return {
      inputRef: c,
      render: () => {
        var P;
        return f("span", re({
          class: Me.value,
          onMousedown: te
        }, ze.value), [f(on, {
          onResize: De
        }, {
          default: () => [f("span", {
            ref: v,
            class: `${u}-mirror`
          }, [G.value.length > 0 ? g.value || Q.value : g.value || Q.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), f(Dr, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [G.value.map((H, ce) => f(fn, re({
            key: `tag-${H.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && H.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, H.tagProps, {
            onClose: (we) => ne(H.value, ce, we)
          }), {
            default: () => {
              var we, Ee, Je, Ie;
              return [(Ie = (Je = (we = n.tag) == null ? void 0 : we.call(n, {
                data: H.raw
              })) != null ? Je : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, H.raw)) != null ? Ie : H.label];
            }
          })), f("input", re(Ze.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: F,
            placeholder: G.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: oe,
            onKeydown: tt,
            onFocus: ye,
            onBlur: ue,
            onCompositionstart: K,
            onCompositionupdate: K,
            onCompositionend: K
          }), null)]
        }), Se.value && f(Qe, {
          class: `${u}-clear-btn`,
          onClick: se,
          onMousedown: (H) => H.stopPropagation()
        }, {
          default: () => [f(dn, null, null)]
        }), (n.suffix || !!b.value) && f("span", {
          class: `${u}-suffix`
        }, [(P = n.suffix) == null ? void 0 : P.call(n), !!b.value && f(co, {
          type: b.value
        }, null)])]);
      }
    };
  },
  methods: {
    focus() {
      var e;
      (e = this.inputRef) == null || e.focus();
    },
    blur() {
      var e;
      (e = this.inputRef) == null || e.blur();
    }
  },
  render() {
    return this.render();
  }
});
const Jc = Object.assign(Cl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Cl.name, Cl);
  }
});
var ia = z({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    opened: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    allowSearch: {
      type: Boolean,
      default: (e) => Ae(e.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    },
    retainInputValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l,
      disabled: o,
      error: r
    } = _e(e), a = Y("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: v
    } = yt({
      size: l,
      disabled: o,
      error: r
    }), {
      mergedSize: p
    } = gt(c), {
      opened: h
    } = _e(e), y = m(), b = d(() => {
      var O;
      return (O = y.value) == null ? void 0 : O.inputRef;
    }), w = d(() => e.modelValue.length === 0), N = d(() => e.allowSearch || e.allowCreate), T = d(() => e.allowClear && !e.disabled && !w.value), S = (O) => {
      var K, R;
      t("focus", O), (R = (K = s.value) == null ? void 0 : K.onFocus) == null || R.call(K, O);
    }, C = (O) => {
      var K, R;
      t("blur", O), (R = (K = s.value) == null ? void 0 : K.onBlur) == null || R.call(K, O);
    }, E = (O) => {
      t("remove", O);
    }, _ = (O) => {
      t("clear", O);
    }, g = () => {
      var O, K, R, Q;
      return e.loading ? (K = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? K : f(pt, null, null) : e.allowSearch && e.opened ? (Q = (R = n["search-icon"]) == null ? void 0 : R.call(n)) != null ? Q : f(Gl, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(ur, {
        class: `${a}-arrow-icon`
      }, null);
    }, A = () => f(Pe, null, [T.value && f(Qe, {
      class: `${a}-clear-btn`,
      onClick: _,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [f(dn, null, null)]
    }), f("span", {
      class: `${a}-icon`
    }, [g()]), !!i.value && f(co, {
      type: i.value
    }, null)]);
    pe(h, (O) => {
      !O && b.value && b.value.isSameNode(document.activeElement) && b.value.blur();
    });
    const F = d(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: b,
      handleFocus: S,
      handleBlur: C,
      render: () => e.multiple ? f(Jc, {
        ref: y,
        baseCls: a,
        class: F.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: p.value,
        error: v.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        tagNowrap: e.tagNowrap,
        retainInputValue: !0,
        uninjectFormItemContext: !0,
        onRemove: E,
        onFocus: S,
        onBlur: C
      }, {
        prefix: n.prefix,
        suffix: A,
        tag: n.label
      }) : f(Fc, {
        ref: y,
        baseCls: a,
        class: F.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: p.value,
        error: v.value,
        enabledInput: N.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: C
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: A
      })
    };
  },
  methods: {
    focus() {
      this.inputRef && this.inputRef.focus();
    },
    blur() {
      this.inputRef && this.inputRef.blur();
    }
  },
  render() {
    return this.render();
  }
});
const Qc = z({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    return {
      prefixCls: Y("select-group")
    };
  }
});
function ed(e, t, n, l, o, r) {
  return $(), V(Pe, null, [j("li", {
    class: D(`${e.prefixCls}-title`)
  }, [le(e.$slots, "label", {}, () => [qe(je(e.label), 1)])], 2), le(e.$slots, "default")], 64);
}
var wn = /* @__PURE__ */ de(Qc, [["render", ed]]);
const sa = typeof window > "u" ? global : window;
function td(e, t) {
  let n = 0;
  return (...l) => {
    n && sa.clearTimeout(n), n = sa.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var nd = Object.defineProperty, ld = Object.defineProperties, od = Object.getOwnPropertyDescriptors, ua = Object.getOwnPropertySymbols, ad = Object.prototype.hasOwnProperty, rd = Object.prototype.propertyIsEnumerable, ca = (e, t, n) => t in e ? nd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zt = (e, t) => {
  for (var n in t || (t = {}))
    ad.call(t, n) && ca(e, n, t[n]);
  if (ua)
    for (var n of ua(t))
      rd.call(t, n) && ca(e, n, t[n]);
  return e;
}, id = (e, t) => ld(e, od(t));
function sd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !eo(e);
}
const ud = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var $l = z({
  name: "Select",
  components: {
    Trigger: an,
    SelectView: ia
  },
  inheritAttrs: !1,
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean, Object, Array],
      default: (e) => Ke(e.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (e) => !!e.multiple
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: !0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    unmountOnClose: {
      type: Boolean,
      default: !1
    },
    filterOption: {
      type: [Boolean, Function],
      default: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: !0
    },
    showExtraOptions: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    },
    scrollbar: {
      type: [Boolean, Object],
      default: !0
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: !1
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: !1
    },
    tagNowrap: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:inputValue": (e) => !0,
    "update:popupVisible": (e) => !0,
    change: (e) => !0,
    inputValueChange: (e) => !0,
    popupVisibleChange: (e) => !0,
    clear: (e) => !0,
    remove: (e) => !0,
    search: (e) => !0,
    dropdownScroll: (e) => !0,
    dropdownReachBottom: (e) => !0,
    exceedLimit: (e, t) => !0
  },
  setup(e, {
    slots: t,
    emit: n,
    attrs: l
  }) {
    const {
      size: o,
      disabled: r,
      error: a,
      options: i,
      filterOption: s,
      valueKey: u,
      multiple: c,
      popupVisible: v,
      defaultPopupVisible: p,
      showExtraOptions: h,
      modelValue: y,
      fieldNames: b,
      loading: w,
      defaultActiveFirstOption: N
    } = _e(e), T = Y("select"), {
      mergedSize: S,
      mergedDisabled: C,
      mergedError: E,
      eventHandlers: _
    } = yt({
      size: o,
      disabled: r,
      error: a
    }), g = d(() => e.virtualListProps ? "div" : "li"), A = d(() => Le(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (Ge(e.formatLabel))
        return (B) => {
          const k = Ee.get(B.value);
          return e.formatLabel(k);
        };
    });
    const F = m(), L = m({}), O = m(), {
      computedPopupVisible: K,
      handlePopupVisibleChange: R
    } = Ic({
      popupVisible: v,
      defaultPopupVisible: p,
      emit: n
    }), Q = m(e.defaultValue), te = d(() => {
      var B;
      const k = (B = e.modelValue) != null ? B : Q.value;
      return (Ae(k) ? k : k || Ce(k) || Pt(k) || Ft(k) ? [k] : []).map((ee) => ({
        value: ee,
        key: rn(ee, e.valueKey)
      }));
    });
    pe(y, (B) => {
      (Ke(B) || Dn(B)) && (Q.value = c.value ? [] : B);
    });
    const oe = d(() => te.value.map((B) => B.key)), x = d(() => Zt(Zt({}, ud), b == null ? void 0 : b.value)), G = m(), me = (B) => {
      const k = {};
      return B.forEach((I) => {
        k[I] = Ee.get(I);
      }), k;
    }, ne = (B) => {
      G.value = me(B);
    }, se = (B) => Ge(e.fallbackOption) ? e.fallbackOption(B) : {
      [x.value.value]: B,
      [x.value.label]: String(Le(B) ? B[u == null ? void 0 : u.value] : B)
    }, Se = () => {
      const B = [], k = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const I of te.value)
          if (!k.includes(I.key) && I.value !== "") {
            const ee = Ee.get(I.key);
            (!ee || ee.origin === "extraOptions") && (B.push(I), k.push(I.key));
          }
      }
      if (e.allowCreate && $e.value) {
        const I = rn($e.value);
        if (!k.includes(I)) {
          const ee = Ee.get(I);
          (!ee || ee.origin === "extraOptions") && B.push({
            value: $e.value,
            key: I
          });
        }
      }
      return B;
    }, ge = m([]), ye = d(() => ge.value.map((B) => {
      var k;
      let I = se(B.value);
      const ee = (k = G.value) == null ? void 0 : k[B.key];
      return !Ke(ee) && !Kr(ee) && (I = Zt(Zt({}, I), ee)), I;
    }));
    Fe(() => {
      Vn(() => {
        var B;
        const k = Se();
        if (k.length !== ge.value.length)
          ge.value = k;
        else if (k.length > 0) {
          for (let I = 0; I < k.length; I++)
            if (k[I].key !== ((B = ge.value[I]) == null ? void 0 : B.key)) {
              ge.value = k;
              break;
            }
        }
      });
    });
    const ue = m(""), $e = d(() => {
      var B;
      return (B = e.inputValue) != null ? B : ue.value;
    });
    pe(K, (B) => {
      !B && !A.value && $e.value && De("");
    });
    const tt = (B) => {
      var k, I;
      return e.multiple ? B.map((ee) => {
        var Ye, We;
        return (We = (Ye = Ee.get(ee)) == null ? void 0 : Ye.value) != null ? We : "";
      }) : (I = (k = Ee.get(B[0])) == null ? void 0 : k.value) != null ? I : Gu(Ee) ? void 0 : "";
    }, Be = (B) => {
      var k, I;
      const ee = tt(B);
      Q.value = ee, n("update:modelValue", ee), n("change", ee), (I = (k = _.value) == null ? void 0 : k.onChange) == null || I.call(k), ne(B);
    }, De = (B) => {
      ue.value = B, n("update:inputValue", B), n("inputValueChange", B);
    }, Me = (B, k) => {
      if (e.multiple) {
        if (oe.value.includes(B)) {
          const I = oe.value.filter((ee) => ee !== B);
          Be(I);
        } else if (Ie.value.includes(B))
          if (e.limit > 0 && oe.value.length >= e.limit) {
            const I = Ee.get(B);
            n("exceedLimit", I == null ? void 0 : I.value, k);
          } else {
            const I = oe.value.concat(B);
            Be(I);
          }
        A.value || De("");
      } else {
        if (B !== oe.value[0] && Be([B]), A.value) {
          const I = Ee.get(B);
          I && De(I.label);
        }
        R(!1);
      }
    }, ze = td((B) => {
      n("search", B);
    }, e.searchDelay), Ze = (B) => {
      B !== $e.value && (K.value || R(!0), De(B), e.allowSearch && ze(B));
    }, W = (B) => {
      const k = Ee.get(B), I = oe.value.filter((ee) => ee !== B);
      Be(I), n("remove", k == null ? void 0 : k.value);
    }, P = (B) => {
      B == null || B.stopPropagation();
      const k = oe.value.filter((I) => {
        var ee;
        return (ee = Ee.get(I)) == null ? void 0 : ee.disabled;
      });
      Be(k), De(""), n("clear", B);
    }, H = (B) => {
      n("dropdownScroll", B);
    }, ce = (B) => {
      n("dropdownReachBottom", B);
    }, {
      validOptions: we,
      optionInfoMap: Ee,
      validOptionInfos: Je,
      enabledOptionKeys: Ie,
      handleKeyDown: _t
    } = sc({
      multiple: c,
      options: i,
      extraOptions: ye,
      inputValue: $e,
      filterOption: s,
      showExtraOptions: h,
      component: g,
      valueKey: u,
      fieldNames: b,
      loading: w,
      popupVisible: K,
      valueKeys: oe,
      dropdownRef: F,
      optionRefs: L,
      virtualListRef: O,
      defaultActiveFirstOption: N,
      onSelect: Me,
      onPopupVisibleChange: R
    }), Ut = d(() => {
      var B;
      const k = [];
      for (const I of te.value) {
        const ee = Ee.get(I.key);
        ee && k.push(id(Zt({}, ee), {
          value: I.key,
          label: (B = ee == null ? void 0 : ee.label) != null ? B : String(Le(I.value) ? I.value[u == null ? void 0 : u.value] : I.value),
          closable: !(ee != null && ee.disabled),
          tagProps: ee == null ? void 0 : ee.tagProps
        }));
      }
      return k;
    }), Ct = (B) => {
      if (Ge(t.option)) {
        const k = t.option;
        return () => k({
          data: B.raw
        });
      }
      return Ge(B.render) ? B.render : () => B.label;
    }, ot = (B) => {
      if (ir(B)) {
        let k;
        return f(wn, {
          key: B.key,
          label: B.label
        }, sd(k = B.options.map((I) => ot(I))) ? k : {
          default: () => [k]
        });
      }
      return Kn(B, {
        inputValue: $e.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(kn, {
        ref: (k) => {
          k != null && k.$el && (L.value[B.key] = k.$el);
        },
        key: B.key,
        value: B.value,
        label: B.label,
        disabled: B.disabled,
        internal: !0
      }, {
        default: Ct(B)
      }) : null;
    }, Tt = () => f(ju, {
      ref: F,
      loading: e.loading,
      empty: Je.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: H,
      onReachBottom: ce
    }, {
      default: () => {
        var B, k;
        return [...(k = (B = t.default) == null ? void 0 : B.call(t)) != null ? k : [], ...we.value.map(ot)];
      },
      "virtual-list": () => f(sr, re(e.virtualListProps, {
        ref: O,
        data: we.value
      }), {
        item: ({
          item: B
        }) => ot(B)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), Yt = ({
      data: B
    }) => {
      var k, I, ee, Ye;
      if ((t.label || Ge(e.formatLabel)) && B) {
        const We = Ee.get(B.value);
        if (We != null && We.raw)
          return (ee = (k = t.label) == null ? void 0 : k.call(t, {
            data: We.raw
          })) != null ? ee : (I = e.formatLabel) == null ? void 0 : I.call(e, We.raw);
      }
      return (Ye = B == null ? void 0 : B.label) != null ? Ye : "";
    };
    return () => f(an, re({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: C.value,
      popupVisible: K.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: R
    }, e.triggerProps), {
      default: () => {
        var B, k;
        return [(k = (B = t.trigger) == null ? void 0 : B.call(t)) != null ? k : f(ia, re({
          class: T,
          modelValue: Ut.value,
          inputValue: $e.value,
          multiple: e.multiple,
          disabled: C.value,
          error: E.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: !!e.allowSearch,
          opened: K.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: S.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: Ze,
          onRemove: W,
          onClear: P,
          onKeydown: _t
        }, l), {
          label: Yt,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: Tt
    });
  }
});
const cd = Object.assign($l, {
  Option: kn,
  OptGroup: wn,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + $l.name, $l), e.component(n + kn.name, kn), e.component(n + wn.name, wn);
  }
}), dd = z({
  name: "IconLeft",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), fd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vd = /* @__PURE__ */ j("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), pd = [vd];
function hd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, pd, 14, fd);
}
var kl = /* @__PURE__ */ de(dd, [["render", hd]]);
const md = Object.assign(kl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + kl.name, kl);
  }
}), yd = z({
  name: "IconUp",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), gd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bd = /* @__PURE__ */ j("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), _d = [bd];
function Cd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, _d, 14, gd);
}
var wl = /* @__PURE__ */ de(yd, [["render", Cd]]);
const $d = Object.assign(wl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + wl.name, wl);
  }
}), kd = (e) => {
  const t = {}, n = m([]), l = () => {
    if (t.value) {
      const o = Ya(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Ve(() => l()), dt(() => l()), {
    children: t,
    components: n
  };
}, cr = Symbol("collapseCtx"), wd = z({
  name: "Collapse",
  props: {
    activeKey: {
      type: Array,
      default: void 0
    },
    defaultActiveKey: {
      type: Array,
      default: () => []
    },
    accordion: {
      type: Boolean,
      default: !1
    },
    showExpandIcon: {
      type: Boolean,
      default: void 0
    },
    expandIconPosition: {
      type: String,
      default: "left"
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:activeKey": (e) => !0,
    change: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      expandIconPosition: l,
      destroyOnHide: o,
      showExpandIcon: r
    } = _e(e), a = Y("collapse"), i = m(e.defaultActiveKey), s = d(() => {
      var v;
      const p = (v = e.activeKey) != null ? v : i.value;
      return Ae(p) ? p : [p];
    });
    Ot(cr, Oe({
      activeKeys: s,
      slots: n,
      showExpandIcon: r,
      expandIconPosition: l,
      destroyOnHide: o,
      handleClick: (v, p) => {
        let h = [];
        if (e.accordion)
          s.value.includes(v) || (h = [v]), i.value = h;
        else {
          h = [...s.value];
          const y = h.indexOf(v);
          y > -1 ? h.splice(y, 1) : e.accordion ? h = [v] : h.push(v), i.value = h;
        }
        t("update:activeKey", h), t("change", h, p);
      }
    }));
    const c = d(() => [a, {
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      prefixCls: a,
      cls: c
    };
  }
});
function Sd(e, t, n, l, o, r) {
  return $(), V("div", {
    class: D(e.cls)
  }, [le(e.$slots, "default")], 2);
}
var Sl = /* @__PURE__ */ de(wd, [["render", Sd]]);
const Ed = z({
  name: "IconCaretRight",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-caret-right`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Od = ["stroke-width", "stroke-linecap", "stroke-linejoin"], xd = /* @__PURE__ */ j("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Pd = [xd];
function Bd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Pd, 14, Od);
}
var El = /* @__PURE__ */ de(Ed, [["render", Bd]]);
const Td = Object.assign(El, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + El.name, El);
  }
}), Id = z({
  name: "IconCaretLeft",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-caret-left`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), zd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nd = /* @__PURE__ */ j("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ld = [Nd];
function Vd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ld, 14, zd);
}
var Ol = /* @__PURE__ */ de(Id, [["render", Vd]]);
const Dd = Object.assign(Ol, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ol.name, Ol);
  }
});
var wt = z({
  name: "CollapseItem",
  components: {
    IconHover: Qe,
    IconCaretRight: Td,
    IconCaretLeft: Dd
  },
  props: {
    header: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    showExpandIcon: {
      type: Boolean,
      default: !0
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    var n;
    const l = mt(), o = Y("collapse-item"), r = Ue(cr, {}), a = l && Ce(l == null ? void 0 : l.vnode.key) ? l.vnode.key : String((n = l == null ? void 0 : l.vnode.key) != null ? n : ""), i = d(() => {
      var C;
      return (C = r.activeKeys) == null ? void 0 : C.includes(a);
    }), s = d(() => r.destroyOnHide || e.destroyOnHide), u = d(() => {
      var C;
      return (C = r == null ? void 0 : r.showExpandIcon) != null ? C : e.showExpandIcon;
    }), c = m(s.value ? i.value : !0), v = d(() => {
      var C;
      return (C = r == null ? void 0 : r.expandIconPosition) != null ? C : "left";
    }), p = (C) => {
      var E;
      e.disabled || (E = r.handleClick) == null || E.call(r, a, C);
    };
    pe(i, (C) => {
      C && !c.value && (c.value = !0);
    });
    const h = {
      onEnter: (C) => {
        C.style.height = `${C.scrollHeight}px`;
      },
      onAfterEnter: (C) => {
        C.style.height = "auto";
      },
      onBeforeLeave: (C) => {
        C.style.height = `${C.scrollHeight}px`;
      },
      onLeave: (C) => {
        C.style.height = "0";
      },
      onAfterLeave: () => {
        s.value && (c.value = !1);
      }
    }, y = d(() => [o, {
      [`${o}-active`]: i.value
    }]), b = d(() => [`${o}-header`, `${o}-header-${r == null ? void 0 : r.expandIconPosition}`, {
      [`${o}-header-disabled`]: e.disabled
    }]), w = d(() => [{
      [`${o}-icon-right`]: (r == null ? void 0 : r.expandIconPosition) === "right"
    }]), N = d(() => [`${o}-content`, {
      [`${o}-content-expend`]: i.value
    }]), T = () => v.value === "right" ? f(ve("icon-caret-left"), {
      class: `${o}-expand-icon`
    }, null) : f(ve("icon-caret-right"), {
      class: `${o}-expand-icon`
    }, null), S = () => u.value && f(ve("icon-hover"), {
      prefix: o,
      class: w.value,
      disabled: e.disabled
    }, {
      default: () => {
        var C, E, _, g;
        return [(g = (_ = (E = t["expand-icon"]) != null ? E : (C = r == null ? void 0 : r.slots) == null ? void 0 : C["expand-icon"]) == null ? void 0 : _({
          active: i.value,
          disabled: e.disabled,
          position: v.value
        })) != null ? g : T()];
      }
    });
    return () => {
      var C, E, _;
      return f("div", {
        class: y.value
      }, [f("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: b.value,
        onClick: p
      }, [S(), f("div", {
        class: `${o}-header-title`
      }, [(E = (C = t.header) == null ? void 0 : C.call(t)) != null ? E : e.header]), t.extra && f("div", {
        class: `${o}-header-extra`
      }, [(_ = t.extra) == null ? void 0 : _.call(t)])]), f(Ln, re({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var g;
          return [ut(f("div", {
            role: "region",
            class: N.value
          }, [c.value && f("div", {
            ref: "contentBoxRef",
            class: `${o}-content-box`
          }, [(g = t.default) == null ? void 0 : g.call(t)])]), [[ct, i.value]])];
        }
      })]);
    };
  }
});
const Ad = Object.assign(Sl, {
  Item: wt,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Sl.name, Sl), e.component(n + wt.name, wt);
  }
}), jd = z({
  name: "IconPlus",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Fd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Md = /* @__PURE__ */ j("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Kd = [Md];
function Rd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Kd, 14, Fd);
}
var xl = /* @__PURE__ */ de(jd, [["render", Rd]]);
const dr = Object.assign(xl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xl.name, xl);
  }
});
var fr = z({
  name: "RenderFunction",
  props: {
    renderFunc: {
      type: Function,
      required: !0
    }
  },
  render() {
    return this.renderFunc(this.$attrs);
  }
}), Hd = Object.defineProperty, da = Object.getOwnPropertySymbols, Wd = Object.prototype.hasOwnProperty, qd = Object.prototype.propertyIsEnumerable, fa = (e, t, n) => t in e ? Hd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, va = (e, t) => {
  for (var n in t || (t = {}))
    Wd.call(t, n) && fa(e, n, t[n]);
  if (da)
    for (var n of da(t))
      qd.call(t, n) && fa(e, n, t[n]);
  return e;
};
const Gd = z({
  name: "Tooltip",
  components: {
    Trigger: an
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("tooltip"), l = m(e.defaultPopupVisible), o = d(() => {
      var c;
      return (c = e.popupVisible) != null ? c : l.value;
    }), r = (c) => {
      l.value = c, t("update:popupVisible", c), t("popupVisibleChange", c);
    }, a = d(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = d(() => {
      if (e.backgroundColor || e.contentStyle)
        return va({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), u = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return va({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: a,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: u,
      handlePopupVisibleChange: r
    };
  }
});
function Ud(e, t, n, l, o, r) {
  const a = ve("Trigger");
  return $(), X(a, {
    class: D(e.prefixCls),
    trigger: "hover",
    position: e.position,
    "popup-visible": e.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": e.contentCls,
    "content-style": e.computedContentStyle,
    "arrow-class": e.arrowCls,
    "arrow-style": e.computedArrowStyle,
    "popup-container": e.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    role: "tooltip",
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: Z(() => [le(e.$slots, "content", {}, () => [qe(je(e.content), 1)])]),
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Pl = /* @__PURE__ */ de(Gd, [["render", Ud]]);
const vn = Object.assign(Pl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Pl.name, Pl);
  }
}), Yd = z({
  name: "IconDragDotVertical",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-drag-dot-vertical`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Zd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Xd = /* @__PURE__ */ j("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Jd = /* @__PURE__ */ j("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), Qd = [Xd, Jd];
function ef(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qd, 14, Zd);
}
var Bl = /* @__PURE__ */ de(Yd, [["render", ef]]);
const tf = Object.assign(Bl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bl.name, Bl);
  }
}), nf = z({
  name: "Popconfirm",
  components: {
    ArcoButton: Fn,
    Trigger: an,
    IconInfoCircleFill: Li,
    IconCheckCircleFill: uo,
    IconExclamationCircleFill: Ja,
    IconCloseCircleFill: Qa
  },
  props: {
    content: String,
    position: {
      type: String,
      default: "top"
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "info"
    },
    okText: String,
    cancelText: String,
    okLoading: {
      type: Boolean,
      default: !1
    },
    okButtonProps: {
      type: Object
    },
    cancelButtonProps: {
      type: Object
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    },
    onBeforeOk: {
      type: Function
    },
    onBeforeCancel: {
      type: Function
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    ok: () => !0,
    cancel: () => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("popconfirm"), {
      t: l
    } = lo(), o = m(e.defaultPopupVisible), r = d(() => {
      var b;
      return (b = e.popupVisible) != null ? b : o.value;
    }), a = m(!1), i = d(() => e.okLoading || a.value);
    let s = 0;
    const u = () => {
      s++, a.value && (a.value = !1), o.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, c = (b) => {
      b ? (o.value = b, t("update:popupVisible", b), t("popupVisibleChange", b)) : u();
    }, v = async () => {
      const b = s, w = await new Promise(async (N) => {
        var T;
        if (Ge(e.onBeforeOk)) {
          let S = e.onBeforeOk((C = !0) => N(C));
          if ((ko(S) || !Ft(S)) && (a.value = !0), ko(S))
            try {
              S = (T = await S) != null ? T : !0;
            } catch {
              S = !1;
            }
          Ft(S) && N(S);
        } else
          N(!0);
      });
      b === s && (w ? (t("ok"), u()) : a.value && (a.value = !1));
    }, p = () => {
      var b;
      let w = !0;
      Ge(e.onBeforeCancel) && (w = (b = e.onBeforeCancel()) != null ? b : !1), w && (t("cancel"), u());
    }, h = d(() => [`${n}-popup-content`, e.contentClass]), y = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: h,
      arrowCls: y,
      computedPopupVisible: r,
      mergedOkLoading: i,
      handlePopupVisibleChange: c,
      handleOk: v,
      handleCancel: p,
      t: l
    };
  }
});
function lf(e, t, n, l, o, r) {
  const a = ve("icon-info-circle-fill"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), u = ve("icon-close-circle-fill"), c = ve("arco-button"), v = ve("trigger");
  return $(), X(v, {
    class: D(e.prefixCls),
    trigger: "click",
    position: e.position,
    "show-arrow": "",
    "popup-visible": e.computedPopupVisible,
    "popup-offset": 10,
    "popup-container": e.popupContainer,
    "content-class": e.contentCls,
    "content-style": e.contentStyle,
    "arrow-class": e.arrowCls,
    "arrow-style": e.arrowStyle,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: Z(() => [j("div", {
      class: D(`${e.prefixCls}-body`)
    }, [j("span", {
      class: D(`${e.prefixCls}-icon`)
    }, [le(e.$slots, "icon", {}, () => [e.type === "info" ? ($(), X(a, {
      key: 0
    })) : e.type === "success" ? ($(), X(i, {
      key: 1
    })) : e.type === "warning" ? ($(), X(s, {
      key: 2
    })) : e.type === "error" ? ($(), X(u, {
      key: 3
    })) : he("v-if", !0)])], 2), j("span", {
      class: D(`${e.prefixCls}-content`)
    }, [le(e.$slots, "content", {}, () => [qe(je(e.content), 1)])], 2)], 2), j("div", {
      class: D(`${e.prefixCls}-footer`)
    }, [f(c, re({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: Z(() => [qe(je(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(c, re({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: Z(() => [qe(je(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var Tl = /* @__PURE__ */ de(nf, [["render", lf]]);
const vr = Object.assign(Tl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Tl.name, Tl);
  }
});
var Il = z({
  name: "Space",
  props: {
    align: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean
    },
    fill: {
      type: Boolean
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = Y("space"), l = d(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), o = d(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function r(i) {
      if (Ce(i))
        return i;
      switch (i) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }
    const a = (i) => {
      const s = {}, u = `${r(Ae(e.size) ? e.size[0] : e.size)}px`, c = `${r(Ae(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var i;
      const s = Cn((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== Ar);
      return f("div", {
        class: o.value
      }, [s.map((u, c) => {
        var v, p;
        const h = t.split && c > 0;
        return f(Pe, {
          key: (v = u.key) != null ? v : `item-${c}`
        }, [h && f("div", {
          class: `${n}-item-split`,
          style: a(!1)
        }, [(p = t.split) == null ? void 0 : p.call(t)]), f("div", {
          class: `${n}-item`,
          style: a(c === s.length - 1)
        }, [u])]);
      })]);
    };
  }
});
const of = Object.assign(Il, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Il.name, Il);
  }
}), af = z({
  name: "IconCaretDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-caret-down`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), rf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], sf = /* @__PURE__ */ j("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), uf = [sf];
function cf(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, uf, 14, rf);
}
var zl = /* @__PURE__ */ de(af, [["render", cf]]);
const df = Object.assign(zl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zl.name, zl);
  }
}), ff = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, mo = Symbol("ArcoTabs"), vf = z({
  name: "TabsTab",
  components: {
    IconHover: Qe,
    IconClose: dn
  },
  props: {
    tab: {
      type: Object,
      required: !0
    },
    active: Boolean,
    editable: Boolean
  },
  emits: ["click", "delete"],
  setup(e, {
    emit: t
  }) {
    const n = Y("tabs-tab"), l = Ue(mo, {}), o = (u) => {
      e.tab.disabled || t("click", e.tab.key, u);
    }, r = (u) => {
      u.key === "Enter" && o(u);
    }, a = d(() => Object.assign(l.trigger === "click" ? {
      onClick: o
    } : {
      onMouseover: o
    }, {
      onKeydown: r
    })), i = (u) => {
      e.tab.disabled || t("delete", e.tab.key, u);
    }, s = d(() => [n, {
      [`${n}-active`]: e.active,
      [`${n}-closable`]: e.editable && e.tab.closable,
      [`${n}-disabled`]: e.tab.disabled
    }]);
    return {
      prefixCls: n,
      cls: s,
      eventHandlers: a,
      handleDelete: i
    };
  }
});
function pf(e, t, n, l, o, r) {
  const a = ve("icon-close"), i = ve("icon-hover");
  return $(), V("div", re({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [j("span", {
    class: D(`${e.prefixCls}-title`)
  }, [le(e.$slots, "default")], 2), e.editable && e.tab.closable ? ($(), X(i, {
    key: 0,
    class: D(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleDelete, ["stop"])
  }, {
    default: Z(() => [f(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : he("v-if", !0)], 16);
}
var hf = /* @__PURE__ */ de(vf, [["render", pf]]);
function mf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !eo(e);
}
var pa = z({
  name: "TabsButton",
  props: {
    type: {
      type: String,
      default: "next"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    onClick: {
      type: Function
    }
  },
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = Y("tabs-nav-button"), l = (a) => {
      e.disabled || t("click", e.type, a);
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? f(Ac, null, null) : f(md, null, null) : e.type === "next" ? f(ur, null, null) : f($d, null, null), r = d(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let a;
      return f("div", {
        class: r.value,
        onClick: l
      }, [f(Qe, {
        disabled: e.disabled
      }, mf(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const yf = z({
  name: "TabsNavInk",
  props: {
    activeTabRef: {
      type: Object
    },
    direction: {
      type: String
    },
    disabled: Boolean,
    animation: Boolean
  },
  setup(e) {
    const {
      activeTabRef: t
    } = _e(e), n = Y("tabs-nav-ink"), l = m(0), o = m(0), r = d(() => e.direction === "vertical" ? {
      top: `${l.value}px`,
      height: `${o.value}px`
    } : {
      left: `${l.value}px`,
      width: `${o.value}px`
    }), a = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, u = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== l.value || u !== o.value) && (l.value = s, o.value = u);
      }
    };
    Ve(() => {
      Fe(() => a());
    }), dt(() => {
      a();
    });
    const i = d(() => [n, {
      [`${n}-animation`]: e.animation,
      [`${n}-disabled`]: e.disabled
    }]);
    return {
      prefixCls: n,
      cls: i,
      style: r
    };
  }
});
function gf(e, t, n, l, o, r) {
  return $(), V("div", {
    class: D(e.cls),
    style: ie(e.style)
  }, null, 6);
}
var bf = /* @__PURE__ */ de(yf, [["render", gf]]), _f = z({
  name: "TabsNav",
  props: {
    tabs: {
      type: Array,
      required: !0
    },
    direction: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !0
    },
    activeKey: {
      type: [String, Number]
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    position: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      required: !0
    },
    showAddButton: {
      type: Boolean,
      default: !1
    },
    editable: {
      type: Boolean,
      default: !1
    },
    animation: {
      type: Boolean,
      required: !0
    },
    headerPadding: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "add", "delete"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      tabs: l,
      activeKey: o,
      activeIndex: r,
      direction: a
    } = _e(e), i = Y("tabs-nav"), s = m(), u = m(), c = m({}), v = d(() => {
      if (!Ke(o.value))
        return c.value[o.value];
    }), p = m(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), y = m(!1), b = m(0), w = m(0), N = m([]), T = m(0), S = () => {
      var ne, se, Se;
      return (Se = a.value === "vertical" ? (ne = s.value) == null ? void 0 : ne.offsetHeight : (se = s.value) == null ? void 0 : se.offsetWidth) != null ? Se : 0;
    }, C = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, E = () => l.value.map((ne) => {
      const se = c.value[ne.key];
      return a.value === "vertical" ? se.offsetTop + se.offsetHeight : se.offsetLeft + se.offsetWidth;
    }), _ = () => {
      y.value = g(), y.value ? (b.value = S(), w.value = C(), N.value = E(), T.value > w.value && (T.value = w.value)) : T.value = 0;
    }, g = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, A = (ne) => {
      var se;
      return ((se = N.value[ne - 1]) != null ? se : 0) >= T.value && N.value[ne] <= T.value + b.value;
    }, F = (ne) => s.value ? ne === "previous" ? T.value - b.value : T.value + b.value : 0, L = (ne) => !s.value || !u.value || ne < 0 ? 0 : ne > w.value ? w.value : ne, O = (ne, se) => {
      t("click", ne, se);
    }, K = (ne, se) => {
      t("delete", ne, se);
    }, R = (ne) => {
      T.value = L(F(ne));
    }, Q = () => {
      _(), p.value && p.value.$forceUpdate();
    };
    pe(l, () => {
      Fe(() => {
        _();
      });
    }), pe(r, (ne, se) => {
      Fe(() => {
        var Se;
        if (y.value)
          if (ne >= se) {
            const ge = ne < N.value.length - 1 ? ne + 1 : ne;
            A(ge) || (T.value = N.value[ge] - b.value);
          } else {
            const ge = ne > 0 ? ne - 1 : ne;
            A(ge) || (T.value = (Se = N.value[ge - 1]) != null ? Se : 0);
          }
      });
    }), Ve(() => {
      _();
    });
    const te = () => !h.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (ne) => t("add", ne)
    }, [f(Qe, null, {
      default: () => [f(dr, null, null)]
    })]), oe = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), x = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), G = d(() => ff({
      direction: e.direction,
      type: e.type,
      offset: T.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: y.value
    }]);
    return () => {
      var ne;
      return f("div", {
        class: oe.value
      }, [y.value && f(pa, {
        type: "previous",
        direction: e.direction,
        disabled: T.value <= 0,
        onClick: R
      }, null), f(on, {
        onResize: () => _()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(on, {
          onResize: Q
        }, {
          default: () => [f("div", {
            ref: u,
            class: x.value,
            style: G.value
          }, [e.tabs.map((se, Se) => f(hf, {
            key: se.key,
            ref: (ge) => {
              ge != null && ge.$el && (c.value[se.key] = ge.$el);
            },
            active: se.key === o.value,
            tab: se,
            editable: e.editable,
            onClick: O,
            onDelete: K
          }, {
            default: () => {
              var ge, ye, ue;
              return [(ue = (ye = (ge = se.slots).title) == null ? void 0 : ye.call(ge)) != null ? ue : se.title];
            }
          })), e.type === "line" && v.value && f(bf, {
            ref: p,
            activeTabRef: v.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !y.value && te()])]
      }), y.value && f(pa, {
        type: "next",
        direction: e.direction,
        disabled: T.value >= w.value,
        onClick: R
      }, null), f("div", {
        class: `${i}-extra`
      }, [y.value && te(), (ne = n.extra) == null ? void 0 : ne.call(n)])]);
    };
  }
}), Nl = z({
  name: "Tabs",
  props: {
    activeKey: {
      type: [String, Number],
      default: void 0
    },
    defaultActiveKey: {
      type: [String, Number],
      default: void 0
    },
    position: {
      type: String,
      default: "top"
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: "line"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    editable: {
      type: Boolean,
      default: !1
    },
    showAddButton: {
      type: Boolean,
      default: !1
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    },
    lazyLoad: {
      type: Boolean,
      default: !1
    },
    justify: {
      type: Boolean,
      default: !1
    },
    animation: {
      type: Boolean,
      default: !1
    },
    headerPadding: {
      type: Boolean,
      default: !0
    },
    autoSwitch: {
      type: Boolean,
      default: !1
    },
    hideContent: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: {
    "update:activeKey": (e) => !0,
    change: (e) => !0,
    tabClick: (e, t) => !0,
    add: (e) => !0,
    delete: (e, t) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      size: l,
      lazyLoad: o,
      destroyOnHide: r,
      trigger: a
    } = _e(e), i = Y("tabs"), {
      mergedSize: s
    } = gt(l), u = d(() => e.direction === "vertical" ? "left" : e.position), c = d(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: v,
      components: p
    } = kd("TabPane"), h = Oe(/* @__PURE__ */ new Map()), y = d(() => {
      const O = [];
      return p.value.forEach((K) => {
        const R = h.get(K);
        R && O.push(R);
      }), O;
    }), b = d(() => y.value.map((O) => O.key)), w = (O, K) => {
      h.set(O, K);
    }, N = (O) => {
      h.delete(O);
    }, T = m(e.defaultActiveKey), S = d(() => {
      var O;
      const K = (O = e.activeKey) != null ? O : T.value;
      return Ke(K) ? b.value[0] : K;
    }), C = d(() => {
      const O = b.value.indexOf(S.value);
      return O === -1 ? 0 : O;
    });
    Ot(mo, Oe({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: S,
      addItem: w,
      removeItem: N,
      trigger: a
    }));
    const E = (O) => {
      O !== S.value && (T.value = O, t("update:activeKey", O), t("change", O));
    }, _ = (O, K) => {
      E(O), t("tabClick", O, K);
    }, g = (O) => {
      t("add", O), e.autoSwitch && Fe(() => {
        const K = b.value[b.value.length - 1];
        E(K);
      });
    }, A = (O, K) => {
      t("delete", O, K);
    }, F = () => f("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [f("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${C.value * 100}%`
      }
    }, [v.value])]), L = d(() => [i, `${i}-${c.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return v.value = (O = n.default) == null ? void 0 : O.call(n), f("div", {
        class: L.value
      }, [u.value === "bottom" && F(), f(_f, {
        tabs: y.value,
        activeKey: S.value,
        activeIndex: C.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: _,
        onAdd: g,
        onDelete: A
      }, {
        extra: n.extra
      }), u.value !== "bottom" && F()]);
    };
  }
}), Cf = Object.defineProperty, ha = Object.getOwnPropertySymbols, $f = Object.prototype.hasOwnProperty, kf = Object.prototype.propertyIsEnumerable, ma = (e, t, n) => t in e ? Cf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wf = (e, t) => {
  for (var n in t || (t = {}))
    $f.call(t, n) && ma(e, n, t[n]);
  if (ha)
    for (var n of ha(t))
      kf.call(t, n) && ma(e, n, t[n]);
  return e;
};
const Sf = z({
  name: "TabPane",
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    },
    destroyOnHide: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    var n;
    const {
      title: l,
      disabled: o,
      closable: r
    } = _e(e), a = mt(), i = Y("tabs"), s = Ue(mo, {}), u = m(), c = d(() => a == null ? void 0 : a.vnode.key), v = d(() => c.value === s.activeKey), p = m(s.lazyLoad ? v.value : !0), h = Oe({
      key: c,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, h)), Ht(() => {
      var y;
      a != null && a.uid && ((y = s.removeItem) == null || y.call(s, a.uid));
    }), pe(v, (y) => {
      y ? p.value || (p.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (p.value = !1);
    }), dt(() => {
      h.slots = wf({}, t);
    }), {
      prefixCls: i,
      active: v,
      itemRef: u,
      mounted: p
    };
  }
});
function Ef(e, t, n, l, o, r) {
  return $(), V("div", {
    ref: "itemRef",
    class: D([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? ($(), V("div", {
    key: 0,
    class: D(`${e.prefixCls}-pane`)
  }, [le(e.$slots, "default")], 2)) : he("v-if", !0)], 2);
}
var Sn = /* @__PURE__ */ de(Sf, [["render", Ef]]);
const Of = Object.assign(Nl, {
  TabPane: Sn,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Nl.name, Nl), e.component(n + Sn.name, Sn);
  }
}), pr = Symbol("TreeInjectionKey");
function xf(e) {
  const t = [];
  function n(l) {
    l && l.forEach((o) => {
      t.push(o), n(o.children);
    });
  }
  return n(e), t;
}
function Pf(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function ya(e) {
  return e.selectable && !e.disabled;
}
function ga(e) {
  return !e.isLeaf && e.children;
}
function Bf(e) {
  return Ft(e.isLeaf) ? e.isLeaf : !e.children;
}
function Zl(e) {
  return Set.prototype.add.bind(e);
}
function Xl(e) {
  return Set.prototype.delete.bind(e);
}
function jt(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function yo(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((l) => {
    jt(l) && n.push(l.key, ...yo(l));
  }), n;
}
function hr(e) {
  var t;
  const {
    node: n,
    checkedKeySet: l,
    indeterminateKeySet: o
  } = e;
  let r = n.parent;
  for (; r; ) {
    if (jt(r)) {
      const a = r.key, i = ((t = r.children) == null ? void 0 : t.filter(jt)) || [];
      let s = 0;
      const u = i.length;
      i.some(({
        key: c
      }) => {
        if (l.has(c))
          s += 1;
        else if (o.has(c))
          return s += 0.5, !0;
        return !1;
      }), s && s !== u ? o.add(a) : o.delete(a), s && s === u ? l.add(a) : l.delete(a);
    }
    r = r.parent;
  }
}
function ba(e) {
  const {
    node: t,
    checked: n,
    checkedKeys: l,
    indeterminateKeys: o,
    checkStrictly: r = !1
  } = e, {
    key: a
  } = t, i = new Set(l), s = new Set(o);
  if (n ? i.add(a) : i.delete(a), s.delete(a), !r) {
    const u = yo(t);
    n ? u.forEach(Zl(i)) : u.forEach(Xl(i)), u.forEach(Xl(s)), hr({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function Tf(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: l,
    onlyCheckLeaf: o
  } = e, r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return l ? t.forEach(Zl(r)) : t.forEach((s) => {
    var u;
    const c = n.get(s);
    if (!c || a.has(s) || o && ((u = c.children) != null && u.length))
      return;
    const v = yo(c);
    v.forEach(Zl(a)), v.forEach(Xl(i)), r.add(s), i.delete(s), hr({
      node: c,
      checkedKeySet: r,
      indeterminateKeySet: i
    });
  }), [[...r, ...a], [...i]];
}
function Rn() {
  return Ue(pr) || {};
}
const If = z({
  name: "IconFile",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-file`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), zf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nf = /* @__PURE__ */ j("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), Lf = [Nf];
function Vf(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Lf, 14, zf);
}
var Ll = /* @__PURE__ */ de(If, [["render", Vf]]);
const Df = Object.assign(Ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ll.name, Ll);
  }
});
var Af = z({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: pt,
    RenderFunction: fr
  },
  props: {
    prefixCls: String,
    loading: Boolean,
    showLine: Boolean,
    treeNodeData: {
      type: Object
    },
    icons: {
      type: Object
    },
    nodeStatus: {
      type: Object
    }
  },
  emits: ["click"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const {
      icons: l,
      nodeStatus: o,
      treeNodeData: r
    } = _e(e), a = Rn(), i = it(t, "switcher-icon"), s = it(t, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var u, c, v;
        const p = (c = (u = l == null ? void 0 : l.value) == null ? void 0 : u.switcherIcon) != null ? c : i.value;
        return p ? p(o.value) : (v = a.switcherIcon) == null ? void 0 : v.call(a, r.value, o.value);
      },
      getLoadingIcon: () => {
        var u, c, v;
        const p = (c = (u = l == null ? void 0 : l.value) == null ? void 0 : u.loadingIcon) != null ? c : s.value;
        return p ? p(o.value) : (v = a.loadingIcon) == null ? void 0 : v.call(a, r.value, o.value);
      },
      onClick(u) {
        n("click", u);
      }
    };
  },
  render() {
    var e, t, n;
    const {
      prefixCls: l,
      getSwitcherIcon: o,
      getLoadingIcon: r,
      onClick: a,
      nodeStatus: i = {},
      loading: s,
      showLine: u
    } = this, {
      expanded: c,
      isLeaf: v
    } = i;
    if (s)
      return (e = r()) != null ? e : zt(pt);
    let p = null, h = !1;
    if (v)
      u && (p = (n = o()) != null ? n : zt(Df));
    else {
      const b = u ? zt("span", {
        class: `${l}-${c ? "minus" : "plus"}-icon`
      }) : zt(df);
      p = (t = o()) != null ? t : b, h = !u;
    }
    if (!p)
      return null;
    const y = zt("span", {
      class: `${l}-switcher-icon`,
      onClick: a
    }, p);
    return h ? zt(Qe, {
      class: `${l}-icon-hover`
    }, () => y) : y;
  }
}), jf = Object.defineProperty, Ff = Object.defineProperties, Mf = Object.getOwnPropertyDescriptors, _a = Object.getOwnPropertySymbols, Kf = Object.prototype.hasOwnProperty, Rf = Object.prototype.propertyIsEnumerable, Ca = (e, t, n) => t in e ? jf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jl = (e, t) => {
  for (var n in t || (t = {}))
    Kf.call(t, n) && Ca(e, n, t[n]);
  if (_a)
    for (var n of _a(t))
      Rf.call(t, n) && Ca(e, n, t[n]);
  return e;
}, $a = (e, t) => Ff(e, Mf(t));
const mr = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Hf(e, t) {
  return !!(Ke(e) ? t : e);
}
function Wf(e, t) {
  const n = Jl({}, e);
  return t && Object.keys(t).forEach((o) => {
    const r = t[o];
    r !== o && (n[o] = e[r], delete n[r]);
  }), n;
}
function ka({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: l,
  level: o
}) {
  return Ke(e) ? Ge(t) ? t(l, {
    isLeaf: n,
    level: o
  }) : t ?? !1 : e;
}
function qf(e) {
  var t, n;
  const {
    treeNodeData: l,
    parentNode: o,
    isTail: r = !0,
    treeProps: a
  } = e, {
    fieldNames: i
  } = a || {}, s = Wf(l, i), u = a.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), c = o ? o.level + 1 : 0, v = $a(Jl({}, Wt(s, ["children"])), {
    key: (n = s.key) != null ? n : mr(),
    selectable: ka({
      subEnable: s.selectable,
      superEnable: a == null ? void 0 : a.selectable,
      isLeaf: u,
      level: c,
      treeNodeData: l
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: ka({
      subEnable: s.checkable,
      superEnable: a == null ? void 0 : a.checkable,
      isLeaf: u,
      level: c,
      treeNodeData: l
    }),
    isLeaf: u,
    isTail: r,
    blockNode: !!(a != null && a.blockNode),
    showLine: !!(a != null && a.showLine),
    level: c,
    lineless: o ? [...o.lineless, o.isTail] : [],
    draggable: Hf(s.draggable, a == null ? void 0 : a.draggable)
  });
  return $a(Jl({}, v), {
    treeNodeProps: v,
    treeNodeData: l,
    parent: o,
    parentKey: o == null ? void 0 : o.key,
    pathParentKeys: o ? [...o.pathParentKeys, o.key] : []
  });
}
function Gf(e, t) {
  function n(l, o) {
    if (!l)
      return;
    const {
      fieldNames: r
    } = t, a = [];
    return l.forEach((i, s) => {
      const u = qf({
        treeNodeData: i,
        treeProps: t,
        parentNode: o,
        isTail: s === l.length - 1
      });
      u.children = n(i[(r == null ? void 0 : r.children) || "children"], u), a.push(u);
    }), a;
  }
  return n(e);
}
function yr() {
  const e = mt(), t = () => {
    var l;
    return (l = e == null ? void 0 : e.vnode.key) != null ? l : mr();
  }, n = m(t());
  return dt(() => {
    n.value = t();
  }), n;
}
function Uf(e) {
  const {
    key: t,
    refTitle: n
  } = _e(e), l = Rn(), o = m(!1), r = m(!1), a = m(!1), i = m(0), s = ql((u) => {
    if (!n.value)
      return;
    const c = n.value.getBoundingClientRect(), v = window.pageYOffset + c.top, {
      pageY: p
    } = u, h = c.height / 4, y = p - v;
    i.value = y < h ? -1 : y < c.height - h ? 0 : 1, a.value = l.allowDrop ? l.allowDrop(t.value, i.value) : !0;
  });
  return {
    isDragOver: o,
    isDragging: r,
    isAllowDrop: a,
    dropPosition: i,
    setDragStatus(u, c) {
      switch (u) {
        case "dragStart":
          r.value = !0, i.value = 0, l.onDragStart && l.onDragStart(t.value, c);
          break;
        case "dragEnd":
          r.value = !1, o.value = !1, i.value = 0, s.cancel(), l.onDragEnd && l.onDragEnd(t.value, c);
          break;
        case "dragOver":
          o.value = !0, s(c), l.onDragOver && l.onDragOver(t.value, c);
          break;
        case "dragLeave":
          o.value = !1, i.value = 0, s.cancel(), l.onDragLeave && l.onDragLeave(t.value, c);
          break;
        case "drop":
          l.onDrop && l.onDrop(t.value, i.value, c), o.value = !1, i.value = 0, s.cancel();
          break;
      }
    }
  };
}
function Yf(e) {
  return Ae(e) ? e : [e];
}
const Zf = z({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: Af,
    Checkbox: or,
    RenderFunction: fr,
    IconDragDotVertical: tf
  },
  props: {
    title: {
      type: String
    },
    selectable: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    disableCheckbox: {
      type: Boolean
    },
    checkable: {
      type: Boolean
    },
    draggable: {
      type: Boolean
    },
    isLeaf: {
      type: Boolean
    },
    icon: {
      type: Function
    },
    switcherIcon: {
      type: Function
    },
    loadingIcon: {
      type: Function
    },
    dragIcon: {
      type: Function
    },
    isTail: {
      type: Boolean
    },
    blockNode: {
      type: Boolean
    },
    showLine: {
      type: Boolean
    },
    level: {
      type: Number,
      default: 0
    },
    lineless: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = yr(), n = Y("tree-node"), l = Rn(), o = d(() => {
      var x;
      return (x = l.key2TreeNode) == null ? void 0 : x.get(t.value);
    }), r = d(() => o.value.treeNodeData), a = d(() => o.value.children), i = d(() => {
      var x;
      const G = (x = l.treeProps) == null ? void 0 : x.actionOnNodeClick;
      return G ? Yf(G) : [];
    }), {
      isLeaf: s,
      isTail: u,
      selectable: c,
      disabled: v,
      disableCheckbox: p,
      draggable: h
    } = _e(e), y = d(() => {
      var x;
      return [`${n}`, {
        [`${n}-selected`]: A.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: u.value,
        [`${n}-expanded`]: F.value,
        [`${n}-disabled-selectable`]: !c.value && !((x = l.treeProps) != null && x.disableSelectActionOnly),
        [`${n}-disabled`]: v.value
      }];
    }), b = m(), {
      isDragOver: w,
      isDragging: N,
      isAllowDrop: T,
      dropPosition: S,
      setDragStatus: C
    } = Uf(Oe({
      key: t,
      refTitle: b
    })), E = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: w.value && T.value && S.value < 0,
      [`${n}-title-gap-bottom`]: w.value && T.value && S.value > 0,
      [`${n}-title-highlight`]: !N.value && w.value && T.value && S.value === 0,
      [`${n}-title-dragging`]: N.value,
      [`${n}-title-block`]: o.value.blockNode
    }]), _ = d(() => {
      var x, G;
      return (G = (x = l.checkedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), g = d(() => {
      var x, G;
      return (G = (x = l.indeterminateKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), A = d(() => {
      var x, G;
      return (G = (x = l.selectedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), F = d(() => {
      var x, G;
      return (G = (x = l.expandedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), L = d(() => {
      var x, G;
      return (G = (x = l.loadingKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), O = d(() => l.dragIcon), K = d(() => l.nodeIcon);
    function R(x) {
      var G, me;
      s.value || (!((G = a.value) != null && G.length) && Ge(l.onLoadMore) ? l.onLoadMore(t.value) : (me = l == null ? void 0 : l.onExpand) == null || me.call(l, !F.value, t.value, x));
    }
    const Q = Oe({
      loading: L,
      checked: _,
      selected: A,
      indeterminate: g,
      expanded: F,
      isLeaf: s
    }), te = d(() => l.nodeTitle ? () => {
      var x;
      return (x = l.nodeTitle) == null ? void 0 : x.call(l, r.value, Q);
    } : void 0), oe = d(() => l.nodeExtra ? () => {
      var x;
      return (x = l.nodeExtra) == null ? void 0 : x.call(l, r.value, Q);
    } : void 0);
    return {
      nodekey: t,
      refTitle: b,
      prefixCls: n,
      classNames: y,
      titleClassNames: E,
      indeterminate: g,
      checked: _,
      expanded: F,
      selected: A,
      treeTitle: te,
      treeNodeData: r,
      loading: L,
      treeDragIcon: O,
      treeNodeIcon: K,
      extra: oe,
      nodeStatus: Q,
      onCheckboxChange(x, G) {
        var me;
        p.value || v.value || (me = l.onCheck) == null || me.call(l, x, t.value, G);
      },
      onTitleClick(x) {
        var G;
        i.value.includes("expand") && R(x), !(!c.value || v.value) && ((G = l.onSelect) == null || G.call(l, t.value, x));
      },
      onSwitcherClick: R,
      onDragStart(x) {
        var G;
        if (h.value) {
          x.stopPropagation(), C("dragStart", x);
          try {
            (G = x.dataTransfer) == null || G.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(x) {
        h.value && (x.stopPropagation(), C("dragEnd", x));
      },
      onDragOver(x) {
        h && (x.stopPropagation(), x.preventDefault(), C("dragOver", x));
      },
      onDragLeave(x) {
        h.value && (x.stopPropagation(), C("dragLeave", x));
      },
      onDrop(x) {
        !h.value || !T.value || (x.stopPropagation(), x.preventDefault(), C("drop", x));
      }
    };
  }
}), Xf = ["data-level", "data-key"], Jf = ["draggable"];
function Qf(e, t, n, l, o, r) {
  const a = ve("NodeSwitcher"), i = ve("Checkbox"), s = ve("RenderFunction"), u = ve("IconDragDotVertical");
  return $(), V("div", {
    class: D(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [he(" 缩进 "), j("span", {
    class: D(`${e.prefixCls}-indent`)
  }, [($(!0), V(Pe, null, St(e.level, (c) => ($(), V("span", {
    key: c,
    class: D([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[c - 1]
    }])
  }, null, 2))), 128))], 2), he(" switcher "), j("span", {
    class: D([`${e.prefixCls}-switcher`, {
      [`${e.prefixCls}-switcher-expanded`]: e.expanded
    }])
  }, [f(a, {
    "prefix-cls": e.prefixCls,
    loading: e.loading,
    "show-line": e.showLine,
    "tree-node-data": e.treeNodeData,
    icons: {
      switcherIcon: e.switcherIcon,
      loadingIcon: e.loadingIcon
    },
    "node-status": e.nodeStatus,
    onClick: e.onSwitcherClick
  }, La({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: Z(() => [he(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), le(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: Z(() => [he(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), le(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), he(" checkbox "), e.checkable ? ($(), X(i, {
    key: 0,
    disabled: e.disableCheckbox || e.disabled,
    "model-value": e.checked,
    indeterminate: e.indeterminate,
    "uninject-group-context": "",
    onChange: e.onCheckboxChange
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : he("v-if", !0), he(" 内容 "), j("span", {
    ref: "refTitle",
    class: D(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...c) => e.onDragStart && e.onDragStart(...c)),
    onDragend: t[1] || (t[1] = (...c) => e.onDragEnd && e.onDragEnd(...c)),
    onDragover: t[2] || (t[2] = (...c) => e.onDragOver && e.onDragOver(...c)),
    onDragleave: t[3] || (t[3] = (...c) => e.onDragLeave && e.onDragLeave(...c)),
    onDrop: t[4] || (t[4] = (...c) => e.onDrop && e.onDrop(...c)),
    onClick: t[5] || (t[5] = (...c) => e.onTitleClick && e.onTitleClick(...c))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? ($(), V("span", {
    key: 0,
    class: D([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [he(" 节点图标 "), e.$slots.icon ? le(e.$slots, "icon", Rl(re({
    key: 0
  }, e.nodeStatus))) : e.icon ? ($(), X(s, re({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? ($(), X(s, re({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : he("v-if", !0)], 2)) : he("v-if", !0), j("span", {
    class: D(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? ($(), X(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : ($(), V(Pe, {
    key: 1
  }, [he(" 标题，treeTitle 优先级高于节点的 title "), le(e.$slots, "title", {
    title: e.title
  }, () => [qe(je(e.title), 1)])], 2112)), e.draggable ? ($(), V("span", {
    key: 2,
    class: D([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [he(" 拖拽图标 "), e.$slots["drag-icon"] ? le(e.$slots, "drag-icon", Rl(re({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? ($(), X(s, re({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? ($(), X(s, re({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : ($(), X(u, {
    key: 3
  }))], 2)) : he("v-if", !0)], 2)], 42, Jf), he(" 额外 "), e.extra ? ($(), X(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : he("v-if", !0)], 10, Xf);
}
var Ql = /* @__PURE__ */ de(Zf, [["render", Qf]]);
const ev = z({
  name: "ExpandTransition",
  props: {
    expanded: Boolean
  },
  emits: ["end"],
  setup(e, {
    emit: t
  }) {
    return {
      onEnter(n) {
        const l = `${n.scrollHeight}px`;
        n.style.height = e.expanded ? "0" : l, n.offsetHeight, n.style.height = e.expanded ? l : "0";
      },
      onAfterEnter(n) {
        n.style.height = e.expanded ? "" : "0", t("end");
      },
      onBeforeLeave(n) {
        n.style.display = "none";
      }
    };
  }
});
function tv(e, t, n, l, o, r) {
  return $(), X(Ln, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var nv = /* @__PURE__ */ de(ev, [["render", tv]]);
const lv = z({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: nv,
    BaseTreeNode: Ql
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${Y("tree")}-node-list`], l = Rn(), {
      nodeKey: o
    } = _e(e), r = d(() => {
      var s, u;
      return (u = (s = l.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : u.call(s, o.value);
    }), a = d(() => {
      var s;
      const u = new Set(l.expandedKeys || []), c = (s = l.flattenTreeData) == null ? void 0 : s.filter((v) => {
        var p, h;
        return (p = v.pathParentKeys) != null && p.includes(o.value) ? !l.filterTreeNode || ((h = l.filterTreeNode) == null ? void 0 : h.call(l, v.treeNodeData)) : !1;
      });
      return c == null ? void 0 : c.filter((v) => {
        var p;
        if (r.value)
          return (p = v.pathParentKeys) == null ? void 0 : p.every((y) => u.has(y));
        const h = v.pathParentKeys.indexOf(o.value);
        return v.pathParentKeys.slice(h + 1).every((y) => u.has(y));
      });
    }), i = d(() => {
      var s, u;
      return ((s = l.currentExpandKeys) == null ? void 0 : s.includes(o.value)) && ((u = a.value) == null ? void 0 : u.length);
    });
    return {
      classNames: n,
      visibleNodeList: a,
      show: i,
      expanded: r,
      onTransitionEnd() {
        var s;
        (s = l.onExpandEnd) == null || s.call(l, o.value);
      }
    };
  }
});
function ov(e, t, n, l, o, r) {
  const a = ve("BaseTreeNode"), i = ve("ExpandTransition");
  return $(), X(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: Z(() => [e.show ? ($(), V("div", {
      key: 0,
      class: D(e.classNames)
    }, [($(!0), V(Pe, null, St(e.visibleNodeList, (s) => ($(), X(a, re({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : he("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var av = /* @__PURE__ */ de(lv, [["render", ov]]), rv = Object.defineProperty, wa = Object.getOwnPropertySymbols, iv = Object.prototype.hasOwnProperty, sv = Object.prototype.propertyIsEnumerable, Sa = (e, t, n) => t in e ? rv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, uv = (e, t) => {
  for (var n in t || (t = {}))
    iv.call(t, n) && Sa(e, n, t[n]);
  if (wa)
    for (var n of wa(t))
      sv.call(t, n) && Sa(e, n, t[n]);
  return e;
}, cv = z({
  name: "TreeNode",
  inheritAttrs: !1,
  props: uv({}, Ql.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = yr();
    return () => f(Pe, null, [f(Ql, re(e, n, {
      key: l.value
    }), t), f(av, {
      key: l.value,
      nodeKey: l.value
    }, null)]);
  }
});
function dv(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: l,
    checkStrictly: o,
    halfCheckedKeys: r,
    onlyCheckLeaf: a
  } = _e(e), i = m(!1), s = m([]), u = m([]), c = m(), v = m(), p = (y) => Tf({
    initCheckedKeys: y,
    key2TreeNode: l.value,
    checkStrictly: o.value,
    onlyCheckLeaf: a.value
  }), h = (y) => {
    const b = p(y);
    [s.value, u.value] = b;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), Vn(() => {
    n.value ? [c.value, v.value] = p(n.value) : i.value && (c.value = void 0, v.value = void 0, s.value = [], u.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => c.value || s.value),
    indeterminateKeys: d(() => o.value && r.value ? r.value : v.value || u.value),
    setCheckedState(y, b, w = !1) {
      return w ? h(y) : (s.value = y, u.value = b), [s.value, u.value];
    }
  };
}
function fv(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: l,
    showLine: o,
    blockNode: r,
    checkable: a,
    loadMore: i,
    draggable: s
  } = _e(e), u = m([]);
  Vn(() => {
    var p, h;
    u.value = Gf(t.value || [], {
      selectable: (p = l == null ? void 0 : l.value) != null ? p : !1,
      showLine: !!(o != null && o.value),
      blockNode: !!(r != null && r.value),
      checkable: (h = a == null ? void 0 : a.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const c = d(() => xf(u.value)), v = d(() => Pf(c.value));
  return {
    treeData: u,
    flattenTreeData: c,
    key2TreeNode: v
  };
}
const vv = z({
  name: "Tree",
  components: {
    VirtualList: sr,
    TreeNode: cv
  },
  props: {
    size: {
      type: String,
      default: "medium"
    },
    blockNode: {
      type: Boolean
    },
    defaultExpandAll: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean
    },
    checkable: {
      type: [Boolean, String, Function],
      default: !1
    },
    selectable: {
      type: [Boolean, Function],
      default: !0
    },
    checkStrictly: {
      type: Boolean
    },
    checkedStrategy: {
      type: String,
      default: "all"
    },
    defaultSelectedKeys: {
      type: Array
    },
    selectedKeys: {
      type: Array
    },
    defaultCheckedKeys: {
      type: Array
    },
    checkedKeys: {
      type: Array
    },
    defaultExpandedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    data: {
      type: Array,
      default: () => []
    },
    fieldNames: {
      type: Object
    },
    showLine: {
      type: Boolean
    },
    loadMore: {
      type: Function
    },
    draggable: {
      type: Boolean
    },
    allowDrop: {
      type: Function
    },
    filterTreeNode: {
      type: Function
    },
    searchValue: {
      type: String,
      default: ""
    },
    virtualListProps: {
      type: Object
    },
    defaultExpandSelected: {
      type: Boolean
    },
    defaultExpandChecked: {
      type: Boolean
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    halfCheckedKeys: {
      type: Array
    },
    onlyCheckLeaf: {
      type: Boolean,
      default: !1
    },
    animation: {
      type: Boolean,
      default: !0
    },
    actionOnNodeClick: {
      type: String
    },
    disableSelectActionOnly: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    select: (e, t) => !0,
    "update:selectedKeys": (e) => !0,
    check: (e, t) => !0,
    "update:checkedKeys": (e) => !0,
    "update:halfCheckedKeys": (e) => !0,
    expand: (e, t) => !0,
    "update:expandedKeys": (e) => !0,
    dragStart: (e, t) => !0,
    dragEnd: (e, t) => !0,
    dragOver: (e, t) => !0,
    dragLeave: (e, t) => !0,
    drop: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      data: l,
      showLine: o,
      multiple: r,
      loadMore: a,
      checkStrictly: i,
      checkedKeys: s,
      defaultCheckedKeys: u,
      selectedKeys: c,
      defaultSelectedKeys: v,
      expandedKeys: p,
      defaultExpandedKeys: h,
      checkedStrategy: y,
      selectable: b,
      checkable: w,
      blockNode: N,
      fieldNames: T,
      size: S,
      defaultExpandAll: C,
      filterTreeNode: E,
      draggable: _,
      allowDrop: g,
      defaultExpandSelected: A,
      defaultExpandChecked: F,
      autoExpandParent: L,
      halfCheckedKeys: O,
      onlyCheckLeaf: K,
      animation: R
    } = _e(e), Q = Y("tree"), te = d(() => [`${Q}`, {
      [`${Q}-checkable`]: w.value,
      [`${Q}-show-line`]: o.value
    }, `${Q}-size-${S.value}`]), oe = it(n, "switcher-icon"), x = it(n, "loading-icon"), G = it(n, "drag-icon"), me = it(n, "icon"), ne = it(n, "title"), se = it(n, "extra"), {
      treeData: Se,
      flattenTreeData: ge,
      key2TreeNode: ye
    } = fv(Oe({
      treeData: l,
      selectable: b,
      showLine: o,
      blockNode: N,
      checkable: w,
      fieldNames: T,
      loadMore: a,
      draggable: _
    })), {
      checkedKeys: ue,
      indeterminateKeys: $e,
      setCheckedState: tt
    } = dv(Oe({
      defaultCheckedKeys: u,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ye,
      halfCheckedKeys: O,
      onlyCheckLeaf: K
    })), [Be, De] = Tn((v == null ? void 0 : v.value) || [], Oe({
      value: c
    })), Me = m([]), ze = m();
    function Ze() {
      if (h != null && h.value) {
        const M = /* @__PURE__ */ new Set([]);
        return h.value.forEach((U) => {
          if (M.has(U))
            return;
          const J = ye.value.get(U);
          J && [...L.value ? J.pathParentKeys : [], U].forEach((ae) => M.add(ae));
        }), [...M];
      }
      if (C.value)
        return ge.value.filter((M) => M.children && M.children.length).map((M) => M.key);
      if (A.value || F.value) {
        const M = /* @__PURE__ */ new Set([]), U = (J) => {
          J.forEach((ae) => {
            const fe = ye.value.get(ae);
            fe && (fe.pathParentKeys || []).forEach((be) => M.add(be));
          });
        };
        return A.value && U(Be.value), F.value && U(ue.value), [...M];
      }
      return [];
    }
    const [W, P] = Tn(Ze(), Oe({
      value: p
    })), H = m([]), ce = d(() => {
      const M = new Set(W.value), U = new Set(H.value);
      return ge.value.filter((J) => {
        var ae;
        if (!(!E || !E.value || (E == null ? void 0 : E.value(J.treeNodeData))))
          return !1;
        const be = Ke(J.parentKey), $t = (ae = J.pathParentKeys) == null ? void 0 : ae.every((It) => M.has(It) && !U.has(It));
        return be || $t;
      });
    });
    function we(M, U = y.value) {
      let J = [...M];
      return U === "parent" ? J = M.filter((ae) => {
        const fe = ye.value.get(ae);
        return fe && !(!Ke(fe.parentKey) && M.includes(fe.parentKey));
      }) : U === "child" && (J = M.filter((ae) => {
        var fe, be;
        return !((be = (fe = ye.value.get(ae)) == null ? void 0 : fe.children) != null && be.length);
      })), J;
    }
    function Ee(M) {
      return M.map((U) => {
        var J;
        return ((J = ye.value.get(U)) == null ? void 0 : J.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Je(M) {
      const {
        targetKey: U,
        targetChecked: J,
        newCheckedKeys: ae,
        newIndeterminateKeys: fe,
        event: be
      } = M, $t = U ? ye.value.get(U) : void 0, It = we(ae);
      t("update:checkedKeys", It), t("update:halfCheckedKeys", fe), t("check", It, {
        checked: J,
        node: $t == null ? void 0 : $t.treeNodeData,
        checkedNodes: Ee(It),
        halfCheckedKeys: fe,
        halfCheckedNodes: Ee(fe),
        e: be
      });
    }
    function Ie(M) {
      const {
        targetKey: U,
        targetSelected: J,
        newSelectedKeys: ae,
        event: fe
      } = M, be = U ? ye.value.get(U) : void 0;
      t("update:selectedKeys", ae), t("select", ae, {
        selected: J,
        node: be == null ? void 0 : be.treeNodeData,
        selectedNodes: Ee(ae),
        e: fe
      });
    }
    function _t(M) {
      const {
        targetKey: U,
        targetExpanded: J,
        newExpandedKeys: ae,
        event: fe
      } = M, be = U ? ye.value.get(U) : void 0;
      t("expand", ae, {
        expanded: J,
        node: be == null ? void 0 : be.treeNodeData,
        expandedNodes: Ee(ae),
        e: fe
      }), t("update:expandedKeys", ae);
    }
    function Ut(M) {
      const [U, J] = tt(M, [], !0);
      Je({
        newCheckedKeys: U,
        newIndeterminateKeys: J
      });
    }
    function Ct(M) {
      let U = M;
      !r.value && M.length > 1 && (U = [M[0]]), De(U), Ie({
        newSelectedKeys: U
      });
    }
    function ot(M) {
      H.value = [], P(M), _t({
        newExpandedKeys: M
      });
    }
    function Tt(M, U, J) {
      if (!M.length)
        return;
      let ae = [...ue.value], fe = [...$e.value];
      M.forEach((be) => {
        const $t = ye.value.get(be);
        $t && ([ae, fe] = ba({
          node: $t,
          checked: U,
          checkedKeys: [...ae],
          indeterminateKeys: [...fe],
          checkStrictly: i.value
        }));
      }), tt(ae, fe), Je({
        targetKey: J,
        targetChecked: Ke(J) ? void 0 : U,
        newCheckedKeys: ae,
        newIndeterminateKeys: fe
      });
    }
    function Yt(M, U, J) {
      if (!M.length)
        return;
      let ae;
      if (r.value) {
        const fe = new Set(Be.value);
        M.forEach((be) => {
          U ? fe.add(be) : fe.delete(be);
        }), ae = [...fe];
      } else
        ae = U ? [M[0]] : [];
      De(ae), Ie({
        targetKey: J,
        targetSelected: Ke(J) ? void 0 : U,
        newSelectedKeys: ae
      });
    }
    function B(M, U, J) {
      const ae = new Set(W.value);
      M.forEach((be) => {
        U ? ae.add(be) : ae.delete(be), Ye(be);
      });
      const fe = [...ae];
      P(fe), _t({
        targetKey: J,
        targetExpanded: Ke(J) ? void 0 : U,
        newExpandedKeys: fe
      });
    }
    function k(M, U, J) {
      const ae = ye.value.get(U);
      if (!ae)
        return;
      const [fe, be] = ba({
        node: ae,
        checked: M,
        checkedKeys: ue.value,
        indeterminateKeys: $e.value,
        checkStrictly: i.value
      });
      tt(fe, be), Je({
        targetKey: U,
        targetChecked: M,
        newCheckedKeys: fe,
        newIndeterminateKeys: be,
        event: J
      });
    }
    function I(M, U) {
      if (!ye.value.get(M))
        return;
      let ae, fe;
      if (r.value) {
        const be = new Set(Be.value);
        fe = !be.has(M), fe ? be.add(M) : be.delete(M), ae = [...be];
      } else
        fe = !0, ae = [M];
      De(ae), Ie({
        targetKey: M,
        targetSelected: fe,
        newSelectedKeys: ae,
        event: U
      });
    }
    function ee(M, U, J) {
      if (H.value.includes(U) || !ye.value.get(U))
        return;
      const fe = new Set(W.value);
      M ? fe.add(U) : fe.delete(U);
      const be = [...fe];
      P(be), R.value && H.value.push(U), _t({
        targetKey: U,
        targetExpanded: M,
        newExpandedKeys: be,
        event: J
      });
    }
    function Ye(M) {
      const U = H.value.indexOf(M);
      H.value.splice(U, 1);
    }
    const We = d(() => a != null && a.value ? async (M) => {
      if (!Ge(a.value))
        return;
      const U = ye.value.get(M);
      if (!U)
        return;
      const {
        treeNodeData: J
      } = U;
      Me.value = [.../* @__PURE__ */ new Set([...Me.value, M])];
      try {
        await a.value(J), Me.value = Me.value.filter((ae) => ae !== M), ee(!0, M), ue.value.includes(M) && k(!0, M);
      } catch (ae) {
        Me.value = Me.value.filter((fe) => fe !== M), console.error("[tree]load data error: ", ae);
      }
    } : void 0), rt = Oe({
      treeProps: e,
      switcherIcon: oe,
      loadingIcon: x,
      dragIcon: G,
      nodeIcon: me,
      nodeTitle: ne,
      nodeExtra: se,
      treeData: Se,
      flattenTreeData: ge,
      key2TreeNode: ye,
      checkedKeys: ue,
      indeterminateKeys: $e,
      selectedKeys: Be,
      expandedKeys: W,
      loadingKeys: Me,
      currentExpandKeys: H,
      onLoadMore: We,
      filterTreeNode: E,
      onCheck: k,
      onSelect: I,
      onExpand: ee,
      onExpandEnd: Ye,
      allowDrop(M, U) {
        const J = ye.value.get(M);
        return J && Ge(g.value) ? !!g.value({
          dropNode: J.treeNodeData,
          dropPosition: U
        }) : !0;
      },
      onDragStart(M, U) {
        const J = ye.value.get(M);
        ze.value = J, J && t("dragStart", U, J.treeNodeData);
      },
      onDragEnd(M, U) {
        const J = ye.value.get(M);
        ze.value = void 0, J && t("dragEnd", U, J.treeNodeData);
      },
      onDragOver(M, U) {
        const J = ye.value.get(M);
        J && t("dragOver", U, J.treeNodeData);
      },
      onDragLeave(M, U) {
        const J = ye.value.get(M);
        J && t("dragLeave", U, J.treeNodeData);
      },
      onDrop(M, U, J) {
        const ae = ye.value.get(M);
        ze.value && ae && !(ae.key === ze.value.key || ae.pathParentKeys.includes(ze.value.key || "")) && t("drop", {
          e: J,
          dragNode: ze.value.treeNodeData,
          dropNode: ae.treeNodeData,
          dropPosition: U
        });
      }
    });
    return Ot(pr, rt), {
      classNames: te,
      visibleTreeNodeList: ce,
      treeContext: rt,
      virtualListRef: m(),
      computedSelectedKeys: Be,
      computedExpandedKeys: W,
      computedCheckedKeys: ue,
      computedIndeterminateKeys: $e,
      getPublicCheckedKeys: we,
      getNodes: Ee,
      internalCheckNodes: Tt,
      internalSetCheckedKeys: Ut,
      internalSelectNodes: Yt,
      internalSetSelectedKeys: Ct,
      internalExpandNodes: B,
      internalSetExpandedKeys: ot
    };
  },
  methods: {
    toggleCheck(e, t) {
      const {
        key2TreeNode: n,
        onCheck: l,
        checkedKeys: o
      } = this.treeContext, r = !o.includes(e), a = n.get(e);
      a && jt(a) && l(r, e, t);
    },
    scrollIntoView(e) {
      this.virtualListRef && this.virtualListRef.scrollTo(e);
    },
    getSelectedNodes() {
      return this.getNodes(this.computedSelectedKeys);
    },
    getCheckedNodes(e = {}) {
      const {
        checkedStrategy: t,
        includeHalfChecked: n
      } = e, l = this.getPublicCheckedKeys(this.computedCheckedKeys, t);
      return [...this.getNodes(l), ...n ? this.getHalfCheckedNodes() : []];
    },
    getHalfCheckedNodes() {
      return this.getNodes(this.computedIndeterminateKeys);
    },
    getExpandedNodes() {
      return this.getNodes(this.computedExpandedKeys);
    },
    checkAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && jt(o);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: l,
        treeContext: o
      } = this, {
        key2TreeNode: r
      } = o, a = Ae(e), i = (a ? e : [e]).filter((s) => {
        const u = r.get(s);
        return u && jt(u) && (l || !n || Bf(u));
      });
      this.internalCheckNodes(i, t, a ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && ya(o);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ae(e), o = (l ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && ya(a);
      });
      this.internalSelectNodes(o, t, l ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && ga(o);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ae(e), o = (l ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && ga(a);
      });
      this.internalExpandNodes(o, t, l ? void 0 : e);
    }
  }
});
function pv(e, t, n, l, o, r) {
  const a = ve("TreeNode"), i = ve("VirtualList");
  return $(), V("div", {
    class: D(e.classNames)
  }, [e.virtualListProps ? ($(), X(i, re({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: Z(({
      item: s
    }) => [f(a, re({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : ($(!0), V(Pe, {
    key: 1
  }, St(e.visibleTreeNodeList, (s) => ($(), X(a, re({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var Vl = /* @__PURE__ */ de(vv, [["render", pv]]);
const hv = Object.assign(Vl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Vl.name, Vl);
  }
}), mv = z({
  name: "TypographyEditContent",
  components: {
    Input: Mn
  },
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  emits: ["change", "end", "update:text"],
  setup(e, {
    emit: t
  }) {
    const l = [`${Y("typography")}-edit-content`], o = m();
    function r(i) {
      t("update:text", i), t("change", i);
    }
    function a() {
      t("end");
    }
    return Ve(() => {
      if (!o.value || !o.value.$el)
        return;
      const i = o.value.$el.querySelector("input");
      if (!i)
        return;
      i.focus && i.focus();
      const {
        length: s
      } = i.value;
      i.setSelectionRange(s, s);
    }), {
      classNames: l,
      inputRef: o,
      onBlur: a,
      onChange: r,
      onEnd: a
    };
  }
});
function yv(e, t, n, l, o, r) {
  const a = ve("Input");
  return $(), V("div", {
    class: D(e.classNames)
  }, [f(a, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: to(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var gv = /* @__PURE__ */ de(mv, [["render", yv]]);
const bv = z({
  name: "IconCopy",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-copy`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), _v = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Cv = /* @__PURE__ */ j("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), $v = [Cv];
function kv(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, $v, 14, _v);
}
var Dl = /* @__PURE__ */ de(bv, [["render", kv]]);
const wv = Object.assign(Dl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Dl.name, Dl);
  }
}), Sv = z({
  name: "IconEdit",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (e) => ["butt", "round", "square"].includes(e)
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e)
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("icon"), l = d(() => [n, `${n}-edit`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const a = {};
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ev = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ov = /* @__PURE__ */ j("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), xv = [Ov];
function Pv(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: ie(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, xv, 14, Ev);
}
var Al = /* @__PURE__ */ de(Sv, [["render", Pv]]);
const Bv = Object.assign(Al, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Al.name, Al);
  }
}), Tv = z({
  name: "TypographyOperations",
  components: {
    Tooltip: vn,
    IconCheckCircleFill: uo,
    IconCopy: wv,
    IconEdit: Bv
  },
  props: {
    editable: Boolean,
    copyable: Boolean,
    expandable: Boolean,
    isCopied: Boolean,
    isEllipsis: Boolean,
    expanded: Boolean,
    forceRenderExpand: Boolean,
    editTooltipProps: Object,
    copyTooltipProps: Object
  },
  emits: {
    edit: () => !0,
    copy: () => !0,
    expand: () => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = Y("typography"), l = d(() => e.forceRenderExpand || e.expandable && e.isEllipsis), {
      t: o
    } = lo();
    return {
      prefixCls: n,
      showExpand: l,
      t: o,
      onEditClick() {
        t("edit");
      },
      onCopyClick() {
        t("copy");
      },
      onExpandClick() {
        t("expand");
      }
    };
  }
});
function Iv(e, t, n, l, o, r) {
  const a = ve("IconEdit"), i = ve("Tooltip"), s = ve("IconCheckCircleFill"), u = ve("IconCopy");
  return $(), V(Pe, null, [e.editable ? ($(), X(i, re({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: Z(() => [j("span", {
      class: D(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = at((...c) => e.onEditClick && e.onEditClick(...c), ["stop"]))
    }, [f(a)], 2)]),
    _: 1
  }, 16, ["content"])) : he("v-if", !0), e.copyable ? ($(), X(i, Rl(re({
    key: 1
  }, e.copyTooltipProps)), {
    content: Z(() => [le(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [qe(je(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: Z(() => [j("span", {
      class: D({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = at((...c) => e.onCopyClick && e.onCopyClick(...c), ["stop"]))
    }, [le(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? ($(), X(s, {
      key: 0
    })) : ($(), X(u, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : he("v-if", !0), e.showExpand ? ($(), V("a", {
    key: 2,
    class: D(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = at((...c) => e.onExpandClick && e.onExpandClick(...c), ["stop"]))
  }, [le(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [qe(je(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : he("v-if", !0)], 64);
}
var Ea = /* @__PURE__ */ de(Tv, [["render", Iv]]);
let Ne;
function zv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function jl(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var Nv = (e, t, n, l) => {
  Ne || (Ne = document.createElement("div"), document.body.appendChild(Ne));
  const {
    rows: o,
    suffix: r,
    ellipsisStr: a
  } = t, i = window.getComputedStyle(e), s = zv(i), u = jl(i.lineHeight), c = Math.round(u * o + jl(i.paddingTop) + jl(i.paddingBottom));
  Ne.setAttribute("style", s), Ne.setAttribute("aria-hidden", "true"), Ne.style.height = "auto", Ne.style.minHeight = "auto", Ne.style.maxHeight = "auto", Ne.style.position = "fixed", Ne.style.left = "0", Ne.style.top = "-99999999px", Ne.style.zIndex = "-200", Ne.style.whiteSpace = "normal";
  const v = Da({
    render() {
      return f("span", null, [n]);
    }
  });
  v.mount(Ne);
  const p = Array.prototype.slice.apply(Ne.childNodes[0].cloneNode(!0).childNodes);
  v.unmount(), Ne.innerHTML = "";
  const h = document.createTextNode(`${a}${r}`);
  Ne.appendChild(h), p.forEach((N) => {
    Ne.appendChild(N);
  });
  const y = document.createTextNode(l);
  Ne.insertBefore(y, h);
  function b() {
    return Ne.offsetHeight <= c;
  }
  if (b())
    return {
      ellipsis: !1,
      text: l
    };
  function w(N, T = 0, S = l.length, C = 0) {
    const E = Math.floor((T + S) / 2), _ = l.slice(0, E);
    if (N.textContent = _, T >= S - 1)
      for (let g = S; g >= T; g -= 1) {
        const A = l.slice(0, g);
        if (N.textContent = A, b() || !A)
          return;
      }
    b() ? w(N, E, S, E) : w(N, T, E, C);
  }
  return w(y), {
    text: y.textContent,
    ellipsis: !0
  };
};
const Lv = async (e) => {
  var t;
  if ((t = navigator.clipboard) != null && t.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch (r) {
      console.error(r ?? new DOMException("The request is not allowed", "NotAllowedError"));
    }
  const n = document.createElement("span");
  n.textContent = e, n.style.whiteSpace = "pre", document.body.appendChild(n);
  const l = window.getSelection(), o = window.document.createRange();
  l == null || l.removeAllRanges(), o.selectNode(n), l == null || l.addRange(o);
  try {
    window.document.execCommand("copy");
  } catch (r) {
    console.error(`execCommand Error: ${r}`);
  }
  l == null || l.removeAllRanges(), window.document.body.removeChild(n);
};
let Nt;
function Vv(e) {
  if (!e)
    return "";
  Nt || (Nt = document.createElement("div"), Nt.setAttribute("aria-hidden", "true"), document.body.appendChild(Nt));
  const t = Da({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(Nt);
  const n = Nt.innerText;
  return t.unmount(), n;
}
var Dv = Object.defineProperty, Av = Object.defineProperties, jv = Object.getOwnPropertyDescriptors, Oa = Object.getOwnPropertySymbols, Fv = Object.prototype.hasOwnProperty, Mv = Object.prototype.propertyIsEnumerable, xa = (e, t, n) => t in e ? Dv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Kv = (e, t) => {
  for (var n in t || (t = {}))
    Fv.call(t, n) && xa(e, n, t[n]);
  if (Oa)
    for (var n of Oa(t))
      Mv.call(t, n) && xa(e, n, t[n]);
  return e;
}, Rv = (e, t) => Av(e, jv(t));
function gr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !eo(e);
}
function Hv(e) {
  const {
    bold: t,
    mark: n,
    underline: l,
    delete: o,
    code: r
  } = e, a = [];
  return t && a.push("b"), l && a.push("u"), o && a.push("del"), r && a.push("code"), n && a.push("mark"), a;
}
function Pa(e, t) {
  const {
    mark: n
  } = e, l = Hv(e), o = Le(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return l.reduce((r, a) => f(a, a === "mark" ? {
    style: o
  } : {}, gr(r) ? r : {
    default: () => [r]
  }), t);
}
function Wv(e) {
  const t = !!e.showTooltip, n = Le(e.showTooltip) && e.showTooltip.type === "popover" ? bc : vn, l = Le(e.showTooltip) && e.showTooltip.props || {};
  return Rv(Kv({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: !1,
    css: !1
  }, Wt(e, ["showTooltip"])), {
    showTooltip: t,
    TooltipComponent: n,
    tooltipProps: l
  });
}
var qv = z({
  name: "TypographyBase",
  inheritAttrs: !1,
  props: {
    component: {
      type: String,
      required: !0
    },
    type: {
      type: String
    },
    bold: {
      type: Boolean
    },
    mark: {
      type: [Boolean, Object],
      default: !1
    },
    underline: {
      type: Boolean
    },
    delete: {
      type: Boolean
    },
    code: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    editable: {
      type: Boolean
    },
    editing: {
      type: Boolean,
      default: void 0
    },
    defaultEditing: {
      type: Boolean
    },
    editText: {
      type: String
    },
    copyable: {
      type: Boolean
    },
    copyText: {
      type: String
    },
    copyDelay: {
      type: Number,
      default: 3e3
    },
    ellipsis: {
      type: [Boolean, Object],
      default: !1
    },
    editTooltipProps: {
      type: Object
    },
    copyTooltipProps: {
      type: Object
    }
  },
  emits: {
    editStart: () => !0,
    change: (e) => !0,
    "update:editText": (e) => !0,
    editEnd: () => !0,
    "update:editing": (e) => !0,
    copy: (e) => !0,
    ellipsis: (e) => !0,
    expand: (e) => !0
  },
  setup(e, {
    slots: t,
    emit: n,
    attrs: l
  }) {
    const {
      editing: o,
      defaultEditing: r,
      ellipsis: a,
      copyable: i,
      editable: s,
      copyText: u,
      editText: c,
      copyDelay: v,
      component: p
    } = _e(e), h = Y("typography"), y = d(() => [h, {
      [`${h}-${e.type}`]: e.type,
      [`${h}-disabled`]: e.disabled
    }]), b = m(), w = m(""), [N, T] = Tn(r.value, Oe({
      value: o
    })), S = d(() => s.value && N.value);
    function C() {
      n("update:editing", !0), n("editStart"), T(!0);
    }
    function E(ue) {
      n("update:editText", ue), n("change", ue);
    }
    function _() {
      N.value && (n("update:editing", !1), n("editEnd"), T(!1));
    }
    const g = m(!1);
    let A = null;
    function F() {
      var ue;
      const $e = (ue = u.value) != null ? ue : w.value;
      Lv($e || ""), g.value = !0, n("copy", $e), A = setTimeout(() => {
        g.value = !1;
      }, v.value);
    }
    Kl(() => {
      A && clearTimeout(A), A = null;
    });
    const L = m(!1), O = m(!1), K = m(""), R = d(() => Wv(Le(a.value) && a.value || {}));
    let Q = null;
    function te() {
      const ue = !O.value;
      O.value = ue, n("expand", ue);
    }
    function oe(ue = !1) {
      return R.value.css ? f(Ea, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: g.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: ue || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: C,
        onCopy: F,
        onExpand: te
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(Ea, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: g.value,
        isEllipsis: L.value,
        expanded: O.value,
        forceRenderExpand: ue,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: C,
        onCopy: F,
        onExpand: te
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      });
    }
    function x() {
      if (!b.value)
        return;
      const {
        ellipsis: ue,
        text: $e
      } = Nv(b.value, R.value, oe(!!R.value.expandable), w.value);
      L.value !== ue && (L.value = ue, R.value.css || n("ellipsis", ue)), K.value !== $e && (K.value = $e || "");
    }
    function G() {
      a.value && !O.value && (Pn(Q), Q = Xa(() => {
        x();
      }));
    }
    Kl(() => {
      Pn(Q);
    }), pe(() => R.value.rows, () => {
      G();
    }), pe(a, (ue) => {
      ue ? G() : L.value = !1;
    });
    let me = [];
    const ne = () => {
      if (a.value || i.value || s.value) {
        const ue = Vv(me);
        ue !== w.value && (w.value = ue, G());
      }
    };
    Ve(ne), dt(ne);
    const se = m(), Se = m(!1), ge = () => {
      if (b.value && se.value) {
        const ue = se.value.offsetHeight > b.value.offsetHeight;
        ue !== Se.value && (Se.value = ue, n("ellipsis", ue));
      }
    }, ye = d(() => O.value ? {} : {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": R.value.rows,
      "-webkit-box-orient": "vertical"
    });
    return () => {
      var ue, $e;
      if (me = ((ue = t.default) == null ? void 0 : ue.call(t)) || [], S.value) {
        const ce = ($e = c.value) != null ? $e : w.value;
        return f(gv, {
          text: ce,
          onChange: (we) => {
            we !== ce && E(we);
          },
          onEnd: _
        }, null);
      }
      const {
        suffix: tt,
        ellipsisStr: Be,
        showTooltip: De,
        tooltipProps: Me,
        TooltipComponent: ze
      } = R.value, Ze = L.value && !O.value, W = Ze && !De ? {
        title: w.value
      } : {}, P = p.value;
      if (R.value.css) {
        const ce = Pa(e, me), we = f(P, re({
          class: y.value,
          ref: b,
          style: ye.value
        }, W, l), {
          default: () => [f("span", {
            ref: se
          }, [ce])]
        });
        return Se.value ? f(ze, re(Me, {
          onResize: () => ge()
        }), {
          default: () => [we],
          content: () => w.value
        }) : f(on, {
          onResize: () => {
            ge();
          }
        }, gr(we) ? we : {
          default: () => [we]
        });
      }
      const H = Pa(e, Ze ? K.value : me);
      return f(on, {
        onResize: () => G()
      }, {
        default: () => [f(P, re({
          class: y.value,
          ref: b
        }, W, l), {
          default: () => [Ze && De ? f(ze, Me, {
            default: () => [f("span", null, [H])],
            content: () => w.value
          }) : H, Ze ? Be : null, tt, oe()]
        })]
      });
    };
  }
}), Gv = z({
  name: "TypographyParagraph",
  inheritAttrs: !1,
  props: {
    blockquote: {
      type: Boolean
    },
    spacing: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const {
      blockquote: t,
      spacing: n
    } = _e(e), l = Y("typography"), o = d(() => t != null && t.value ? "blockquote" : "div"), r = d(() => [{
      [`${l}-spacing-close`]: (n == null ? void 0 : n.value) === "close"
    }]);
    return {
      component: o,
      classNames: r
    };
  },
  render() {
    const {
      component: e,
      classNames: t
    } = this;
    return f(qv, re({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function Uv(e) {
  function t() {
    switch (e) {
      case "up":
      case "bottom":
        return "ns-resize";
      default:
        return "ew-resize";
    }
  }
  function n() {
    switch (e) {
      case "left":
        return (l, o) => l.x - o.x;
      case "right":
        return (l, o) => o.x - l.x;
      case "up":
        return (l, o) => l.y - o.y;
      case "bottom":
        return (l, o) => o.y - l.y;
      default:
        throw new Error("");
    }
  }
  return {
    getCursorIcon: t,
    getMoveIncrementHandler: n
  };
}
function Yv(e, t, n, l) {
  const o = n ?? m(0);
  return pe(e, (r) => {
    if (!r)
      return;
    const a = Uv(t);
    r.style.cursor = a.getCursorIcon();
    const i = a.getMoveIncrementHandler(), s = {
      x: 0,
      y: 0
    }, u = (p) => {
      const h = i(s, p);
      (!l || l(o.value + h)) && (o.value += i(s, p)), s.x = p.x, s.y = p.y;
    }, c = (p) => {
      p.stopPropagation();
    }, v = (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = "default", document.removeEventListener("mousemove", u);
    };
    r.addEventListener("mousedown", (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = r.style.cursor, s.x = p.x, s.y = p.y, document.addEventListener("mousemove", u), document.addEventListener("mouseup", c, {
        capture: !0,
        once: !0
      }), document.addEventListener("click", v, {
        capture: !0,
        once: !0
      });
    }, {
      capture: !0
    });
  }), o;
}
function Hn(e) {
  function t(r) {
    return d(() => {
      const i = kt(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue(kt(r)) : "";
    });
  }
  function n(r) {
    return d(() => {
      const i = kt(e);
      if (i) {
        const s = kt(r);
        return i.style[s];
      }
      return "";
    });
  }
  function l(r) {
    const a = r ?? t("display");
    return d(() => kt(e) ? {
      isFlex: a.value === "flex",
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
  function o() {
    return d(() => {
      const a = kt(e);
      if (!a || !a.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Hn(a.parentElement).getFlexBoxInfo();
      return {
        isFlex: s.value.isFlex,
        direction: s.value.direction
      };
    });
  }
  return {
    getStyle: n,
    getComputedStyle: t,
    getFlexBoxInfo: l,
    getParentFlexBoxInfo: o
  };
}
const ln = /* @__PURE__ */ new Map();
function Zv(e) {
  pe(e, (t) => {
    if (!t) {
      ln.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const n = Hn(t);
    ln.forEach((l, o) => {
      l.value = n.getComputedStyle(o).value;
    });
  });
}
function Xv(e) {
  return ln.has(e) || ln.set(e, m(null)), ln.get(e);
}
function Et(e) {
  return Fr() ? (Mr(e), !0) : !1;
}
function xe(e) {
  return typeof e == "function" ? e() : q(e);
}
const sn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jv = (e) => e != null, Qv = Object.prototype.toString, ep = (e) => Qv.call(e) === "[object Object]", tp = () => {
};
function np(e) {
  return e || mt();
}
function lp(e, t = {}) {
  if (!no(e))
    return _e(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    n[l] = jr(() => ({
      get() {
        return e.value[l];
      },
      set(o) {
        var r;
        if ((r = xe(t.replaceRef)) != null ? r : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[l] = o, e.value = i;
          } else {
            const i = { ...e.value, [l]: o };
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[l] = o;
      }
    }));
  return n;
}
function br(e, t = !0, n) {
  np() ? Ve(e, n) : t ? e() : Fe(e);
}
function op(e, t = 1e3, n = {}) {
  const {
    immediate: l = !0,
    immediateCallback: o = !1
  } = n;
  let r = null;
  const a = m(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function s() {
    a.value = !1, i();
  }
  function u() {
    const c = xe(t);
    c <= 0 || (a.value = !0, o && e(), i(), r = setInterval(e, c));
  }
  if (l && sn && u(), no(t) || typeof t == "function") {
    const c = pe(t, () => {
      a.value && sn && u();
    });
    Et(c);
  }
  return Et(s), {
    isActive: a,
    pause: s,
    resume: u
  };
}
function Rt(e) {
  var t;
  const n = xe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const bt = sn ? window : void 0, ap = sn ? window.document : void 0;
function Xe(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = bt) : [t, n, l, o] = e, !t)
    return tp;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const r = [], a = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, v, p, h) => (c.addEventListener(v, p, h), () => c.removeEventListener(v, p, h)), s = pe(
    () => [Rt(t), xe(o)],
    ([c, v]) => {
      if (a(), !c)
        return;
      const p = ep(v) ? { ...v } : v;
      r.push(
        ...n.flatMap((h) => l.map((y) => i(c, h, y, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    s(), a();
  };
  return Et(u), u;
}
function rp() {
  const e = m(!1), t = mt();
  return t && Ve(() => {
    e.value = !0;
  }, t), e;
}
function Wn(e) {
  const t = rp();
  return d(() => (t.value, !!e()));
}
function _r(e, t, n = {}) {
  const { window: l = bt, ...o } = n;
  let r;
  const a = Wn(() => l && "MutationObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => {
    const p = xe(e), h = (Array.isArray(p) ? p : [p]).map(Rt).filter(Jv);
    return new Set(h);
  }), u = pe(
    () => s.value,
    (p) => {
      i(), a.value && p.size && (r = new MutationObserver(t), p.forEach((h) => r.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), v = () => {
    i(), u();
  };
  return Et(v), {
    isSupported: a,
    stop: v,
    takeRecords: c
  };
}
function ip(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: l = void 0,
    window: o = bt
  } = t, r = m(!1), a = l ? 1e3 / l : null;
  let i = 0, s = null;
  function u(p) {
    if (!r.value || !o)
      return;
    i || (i = p);
    const h = p - i;
    if (a && h < a) {
      s = o.requestAnimationFrame(u);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), s = o.requestAnimationFrame(u);
  }
  function c() {
    !r.value && o && (r.value = !0, i = 0, s = o.requestAnimationFrame(u));
  }
  function v() {
    r.value = !1, s != null && o && (o.cancelAnimationFrame(s), s = null);
  }
  return n && c(), Et(v), {
    isActive: un(r),
    pause: v,
    resume: c
  };
}
function sp(e, t = {}) {
  const { window: n = bt } = t, l = Wn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = m(!1), a = (u) => {
    r.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", a) : o.removeListener(a));
  }, s = Vn(() => {
    l.value && (i(), o = n.matchMedia(xe(e)), "addEventListener" in o ? o.addEventListener("change", a) : o.addListener(a), r.value = o.matches);
  });
  return Et(() => {
    s(), i(), o = void 0;
  }), r;
}
function up(e, t = {}) {
  var n, l;
  const {
    pointerTypes: o,
    preventDefault: r,
    stopPropagation: a,
    exact: i,
    onMove: s,
    onEnd: u,
    onStart: c,
    initialValue: v,
    axis: p = "both",
    draggingElement: h = bt,
    containerElement: y,
    handle: b = e
  } = t, w = m(
    (n = xe(v)) != null ? n : { x: 0, y: 0 }
  ), N = m(), T = (g) => o ? o.includes(g.pointerType) : !0, S = (g) => {
    xe(r) && g.preventDefault(), xe(a) && g.stopPropagation();
  }, C = (g) => {
    var A;
    if (g.button !== 0 || xe(t.disabled) || !T(g) || xe(i) && g.target !== xe(e))
      return;
    const F = xe(y), L = (A = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : A.call(F), O = xe(e).getBoundingClientRect(), K = {
      x: g.clientX - (F ? O.left - L.left + F.scrollLeft : O.left),
      y: g.clientY - (F ? O.top - L.top + F.scrollTop : O.top)
    };
    (c == null ? void 0 : c(K, g)) !== !1 && (N.value = K, S(g));
  }, E = (g) => {
    if (xe(t.disabled) || !T(g) || !N.value)
      return;
    const A = xe(y), F = xe(e).getBoundingClientRect();
    let { x: L, y: O } = w.value;
    (p === "x" || p === "both") && (L = g.clientX - N.value.x, A && (L = Math.min(Math.max(0, L), A.scrollWidth - F.width))), (p === "y" || p === "both") && (O = g.clientY - N.value.y, A && (O = Math.min(Math.max(0, O), A.scrollHeight - F.height))), w.value = {
      x: L,
      y: O
    }, s == null || s(w.value, g), S(g);
  }, _ = (g) => {
    xe(t.disabled) || !T(g) || N.value && (N.value = void 0, u == null || u(w.value, g), S(g));
  };
  if (sn) {
    const g = { capture: (l = t.capture) != null ? l : !0 };
    Xe(b, "pointerdown", C, g), Xe(h, "pointermove", E, g), Xe(h, "pointerup", _, g);
  }
  return {
    ...lp(w),
    position: w,
    isDragging: d(() => !!N.value),
    style: d(
      () => `left:${w.value.x}px;top:${w.value.y}px;`
    )
  };
}
function cp(e, t, n = {}) {
  const { window: l = bt, ...o } = n;
  let r;
  const a = Wn(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((v) => Rt(v)) : [Rt(e)]), u = pe(
    s,
    (v) => {
      if (i(), a.value && l) {
        r = new ResizeObserver(t);
        for (const p of v)
          p && r.observe(p, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), u();
  };
  return Et(c), {
    isSupported: a,
    stop: c
  };
}
function Cr(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: l = !0,
    windowScroll: o = !0,
    immediate: r = !0
  } = t, a = m(0), i = m(0), s = m(0), u = m(0), c = m(0), v = m(0), p = m(0), h = m(0);
  function y() {
    const b = Rt(e);
    if (!b) {
      n && (a.value = 0, i.value = 0, s.value = 0, u.value = 0, c.value = 0, v.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const w = b.getBoundingClientRect();
    a.value = w.height, i.value = w.bottom, s.value = w.left, u.value = w.right, c.value = w.top, v.value = w.width, p.value = w.x, h.value = w.y;
  }
  return cp(e, y), pe(() => Rt(e), (b) => !b && y()), _r(e, y, {
    attributeFilter: ["style", "class"]
  }), o && Xe("scroll", y, { capture: !0, passive: !0 }), l && Xe("resize", y, { passive: !0 }), br(() => {
    r && y();
  }), {
    height: a,
    bottom: i,
    left: s,
    right: u,
    top: c,
    width: v,
    x: p,
    y: h,
    update: y
  };
}
function dp(e) {
  const {
    x: t,
    y: n,
    document: l = ap,
    multiple: o,
    interval: r = "requestAnimationFrame",
    immediate: a = !0
  } = e, i = Wn(() => xe(o) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), s = m(null), u = () => {
    var v, p;
    s.value = xe(o) ? (v = l == null ? void 0 : l.elementsFromPoint(xe(t), xe(n))) != null ? v : [] : (p = l == null ? void 0 : l.elementFromPoint(xe(t), xe(n))) != null ? p : null;
  }, c = r === "requestAnimationFrame" ? ip(u, { immediate: a }) : op(u, r, { immediate: a });
  return {
    isSupported: i,
    element: s,
    ...c
  };
}
const fp = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function $r(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: l = !1,
    initialValue: o = { x: 0, y: 0 },
    window: r = bt,
    target: a = r,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let u = null;
  const c = m(o.x), v = m(o.y), p = m(null), h = typeof t == "function" ? t : fp[t], y = (E) => {
    const _ = h(E);
    u = E, _ && ([c.value, v.value] = _, p.value = "mouse");
  }, b = (E) => {
    if (E.touches.length > 0) {
      const _ = h(E.touches[0]);
      _ && ([c.value, v.value] = _, p.value = "touch");
    }
  }, w = () => {
    if (!u || !r)
      return;
    const E = h(u);
    u instanceof MouseEvent && E && (c.value = E[0] + r.scrollX, v.value = E[1] + r.scrollY);
  }, N = () => {
    c.value = o.x, v.value = o.y;
  }, T = s ? (E) => s(() => y(E), {}) : (E) => y(E), S = s ? (E) => s(() => b(E), {}) : (E) => b(E), C = s ? () => s(() => w(), {}) : () => w();
  if (a) {
    const E = { passive: !0 };
    Xe(a, ["mousemove", "dragover"], T, E), n && t !== "movement" && (Xe(a, ["touchstart", "touchmove"], S, E), l && Xe(a, "touchend", N, E)), i && t === "page" && Xe(r, "scroll", C, { passive: !0 });
  }
  return {
    x: c,
    y: v,
    sourceType: p
  };
}
function go(e = {}) {
  const {
    window: t = bt,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: r = !0
  } = e, a = m(n), i = m(l), s = () => {
    t && (r ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), br(s), Xe("resize", s, { passive: !0 }), o) {
    const u = sp("(orientation: portrait)");
    pe(u, () => s());
  }
  return { width: a, height: i };
}
function vp(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function pp() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function hp(e) {
  const t = /^(\d*\.?\d+)(px|%|rem|em|ex|ch|vw|vh|vmin|vmax)$|^auto$/i, n = e.match(t);
  if (n) {
    const l = n[1] || "", o = n[2] || "auto";
    return {
      number: l,
      unit: o
    };
  } else
    return {
      number: "",
      unit: ""
    };
}
function kr(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function bo(e, t) {
  if (!kr(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function vt(e, t) {
  if (!kr(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length));
  return null;
}
function wr(e, t) {
  const n = `*.${t.idPrefix}${e}`, l = document.querySelector(n);
  if (!l)
    throw new Error(`target element with id ${e} not found`);
  return l;
}
function mp(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function yp(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function gp(e) {
  if (!e) {
    console.error("Element is not provided or is not a valid element.");
    return;
  }
  e.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  });
}
function Fl(e, t) {
  t.add && e.classList.add(t.add), t.remove && e.classList.remove(t.remove), t.change && e.classList.replace(t.change.oldClass, t.change.newClass);
}
const ke = m(null), nt = {
  props: Oe(/* @__PURE__ */ new Map()),
  styles: Oe(/* @__PURE__ */ new Map()),
  propsCode: m(null),
  stylesCode: m(null),
  classes: m([])
}, In = /* @__PURE__ */ new Map();
function En() {
  return ke;
}
function bp(e) {
  const t = wr(e, qn());
  ke.value = t, gp(t);
}
function _p(e) {
  ke.value = e, Or();
}
function Sr(e) {
  if (In.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = m(Symbol(e));
  return In.set(e, t), un(t);
}
function Cp(e) {
  const t = In.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function Er() {
  return un(nt);
}
function $p(e) {
  if (nt.props.clear(), nt.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      nt.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      nt.styles.set(t, n);
  e.propsCode !== void 0 && (nt.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (nt.stylesCode.value = e.stylesCode), e.classes !== void 0 && (nt.classes.value = e.classes), Or();
}
function kp() {
  return {
    props: nt.propsCode,
    styles: nt.stylesCode
  };
}
function wp(e) {
  return d(() => nt.styles.has(e));
}
function Sp() {
  return d(() => ke.value !== null);
}
function Ep() {
  return d(() => ke.value === null ? null : bo(ke.value, qn()));
}
function Or() {
  for (const e of In.values())
    e.value = Symbol(e.value.description);
}
const zn = m("en"), _o = /* @__PURE__ */ new Map(), Ba = d(() => {
  const e = _o.get(zn.value);
  if (e == null)
    throw new Error(`No message found for locale ${zn.value}`);
  return e;
});
function Op(e) {
  zn.value = e;
}
function xp(e, t) {
  _o.set(e, t);
}
function Te(e) {
  var t;
  return Ba.value.hasOwnProperty(e) ? Ba.value[e] : (console.warn(`No message found for key ${e} in locale ${zn.value}`), ((t = _o.get("en")) == null ? void 0 : t[e]) || e.split(".").pop() || "");
}
const xr = m(!1), Pp = un(xr);
function Bp(e) {
  xr.value = e;
}
const Lt = m(null);
let st = d(() => null), pn, Pr, Br, Tr, Ir, zr;
function qn() {
  return pn;
}
function Tp(e) {
  Lt.value = wr(e, pn);
}
function Ip() {
  Lt.value = null;
}
function zp() {
  return Pr;
}
function Np(e) {
  Br = e.emitSetCommandFn, Tr = e.emitResetCommandFn, e.emitJumpSourceCodeFn, Ir = e.emitApplyCommandFn, zr = e.emitClassesUpdateFn, pn = e.selectorConfig, Pr = e.elementTreeData;
  const {
    hoverElement: t
  } = jp(e.selectorConfig);
  Fp(t), st = t, Op(e.languageConfig.locale), Object.entries(e.languageConfig.messages).forEach(([n, l]) => {
    xp(n, l);
  });
}
function Lp() {
  const e = ke.value;
  if (e) {
    const t = mp(e, pn);
    yp(t);
  }
}
function Ml(e) {
  const {
    targetId: t,
    classes: n
  } = e;
  let l = t;
  l === void 0 && ke.value && (l = vt(ke.value, pn)), zr({
    targetId: l,
    classes: n
  });
}
function Vp() {
  Ir();
}
function Dp() {
  return Pp;
}
function Co(e) {
  Array.isArray(e) || (e = [e]), Br(e);
}
function Ap(e, t = "style") {
  Tr([{
    propertyName: e,
    type: t
  }]);
}
function jp(e) {
  const {
    x: t,
    y: n
  } = $r({
    type: "client"
  }), {
    element: l
  } = dp({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (l.value === null)
        return null;
      const r = l.value.closest(e.selectors);
      return r === null || r.closest("[layout-tool-panel]") ? Lt.value ? Lt.value : null : r;
    })
  };
}
function Fp(e) {
  Xe(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (_p(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Xe(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Mp(e, t) {
  const n = Xv(e);
  return d({
    get: () => n.value,
    set: (o) => {
      const r = {
        propertyName: e,
        values: {
          [e]: o
        }
      }, a = t ? t(o) : [];
      Co([r, ...a]), n.value = o;
    }
  });
}
const Kp = /* @__PURE__ */ z({
  __name: "SliderBlock",
  props: {
    styleName: {},
    clipPath: {},
    direction: {},
    valueFilter: {
      type: Function
    }
  },
  setup(e) {
    const t = e, n = Mp(t.styleName), l = d(() => {
      if (!n.value)
        return {
          value: 0,
          unit: "px"
        };
      const c = /(-?\d+)([a-zA-Z%]+)/, v = n.value.match(c), p = parseFloat(v[1]), h = v[2];
      return {
        value: p,
        unit: h
      };
    });
    let o = l.value.value, r = l.value.unit;
    const a = d({
      get: () => l.value.value,
      set: (c) => {
        o = c, n.value = `${o}${r}`;
      }
    });
    d({
      get: () => l.value.unit,
      set: (c) => {
        r = c, n.value = `${o}${r}`;
      }
    });
    const i = m(null);
    Yv(i, t.direction, a, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function u() {
    }
    return (c, v) => ($(), V("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: ie([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [j("div", {
      onClick: u
    }, [j("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, je(a.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, ft = /* @__PURE__ */ et(Kp, [["__scopeId", "data-v-19de9462"]]), Rp = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, Hp = /* @__PURE__ */ z({
  __name: "Spacing",
  setup(e) {
    const t = {
      horizontalWidthPercent: 22,
      verticalHeightPercent: 22
    }, n = {
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
    }, o = (r) => r >= 0;
    return (r, a) => {
      const i = wt;
      return $(), X(i, {
        header: q(Te)("nt.style.spacing.header"),
        key: "spacing"
      }, {
        default: Z(() => [j("div", Rp, [j("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: ie([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), a[0] || (a[0] = j("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), f(ft, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: ie([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: ie([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: ie([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: ie([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": o,
          "clip-path": l.left.clipPath,
          style: ie({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": o,
          "clip-path": l.up.clipPath,
          style: ie([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": o,
          "clip-path": l.right.clipPath,
          style: ie({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ft, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": o,
          "clip-path": l.bottom.clipPath,
          style: ie({
            bottom: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          })
        }, null, 8, ["clip-path", "style"])])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const ht = {
  visTypeName: 999,
  mainPanelTooltip: 910,
  visHover: 900,
  aiming: 900,
  panel: 900
}, hn = {
  mainPanelTooltip: "body"
}, Wp = {
  class: "flex flex-row gap-0"
}, en = /* @__PURE__ */ z({
  __name: "IconRadio",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: l,
      userEdited: o
    } = t.model, r = l.value.some((i) => i.icon);
    function a(i) {
      n.value = i, o();
    }
    return (i, s) => {
      const u = Fn, c = vn, v = fn;
      return $(), V("div", Wp, [q(r) ? ($(!0), V(Pe, {
        key: 0
      }, St(q(l), (p) => ($(), X(c, {
        content: p.label,
        key: p.value,
        "popup-container": hn.mainPanelTooltip,
        style: ie({
          "z-index": ht.mainPanelTooltip
        })
      }, {
        default: Z(() => [f(u, {
          size: "small",
          type: "outline",
          status: q(n) === p.value ? "success" : void 0,
          onClick: (h) => a(p.value)
        }, {
          icon: Z(() => [j("span", {
            class: D(p.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content", "popup-container", "style"]))), 128)) : ($(!0), V(Pe, {
        key: 1
      }, St(q(l), (p) => ($(), X(v, {
        key: p.value,
        checked: q(n) === p.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => a(p.value)
      }, {
        default: Z(() => [qe(je(p.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function tn(e) {
  const {
    propertyName: t,
    options: n
  } = e, l = m(void 0), o = d(() => kt(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), r = Sr(e.propertyName);
  pe(r, () => {
    if (!ke.value)
      return;
    const i = vp(ke.value, t);
    l.value = i;
  }, {
    immediate: !0
  });
  function a() {
    Co({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: l.value
      }
    });
  }
  return {
    value: l,
    options: o,
    userEdited: a
  };
}
const lt = /* @__PURE__ */ z({
  __name: "ItemLabel",
  props: {
    keyId: {},
    label: {}
  },
  emits: ["reset"],
  setup(e, {
    emit: t
  }) {
    const n = e, l = t, o = d(() => n.label ?? n.keyId), r = wp(n.keyId);
    function a() {
      Ap(n.keyId), l("reset");
    }
    const i = d(() => r.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, u) => {
      const c = vr;
      return $(), X(c, {
        "popup-container": hn.mainPanelTooltip,
        content: q(Te)("nt.property-reset-confirm"),
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: a,
        style: ie({
          "z-index": ht.mainPanelTooltip
        })
      }, {
        default: Z(() => [j("div", {
          class: "px-2",
          style: ie(i.value)
        }, [j("span", {
          class: D(["item-title text-capitalize", {
            "bg-gray-300": q(r)
          }])
        }, je(o.value), 3)], 4)]),
        _: 1
      }, 8, ["popup-container", "content", "style"]);
    };
  }
}), qp = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Gp = /* @__PURE__ */ z({
  __name: "Layout",
  setup(e) {
    const t = Hn(ke), n = tn({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), l = t.getFlexBoxInfo(n.value), o = tn({
      propertyName: "flex-direction",
      options: [{
        value: "row",
        label: "Horizontal",
        icon: "i-mdi-arrow-right-thin"
      }, {
        value: "column",
        label: "Vertical",
        icon: "i-mdi-arrow-down-thin"
      }]
    }), r = d(() => o.value.value === "row" ? Te("nt.style.layout.align-title-byRow") : Te("nt.style.layout.align-title-byCol")), a = d(() => o.value.value === "row" ? [{
      value: "start",
      icon: "i-mdi-align-vertical-top",
      tooltip: "top"
    }, {
      value: "center",
      icon: "i-mdi-align-vertical-center",
      tooltip: "center"
    }, {
      value: "end",
      icon: "i-mdi-align-vertical-bottom",
      tooltip: "bottom"
    }] : [{
      value: "start",
      icon: "i-mdi-align-horizontal-left",
      tooltip: "left"
    }, {
      value: "center",
      icon: "i-mdi-align-horizontal-center",
      tooltip: "center"
    }, {
      value: "end",
      icon: "i-mdi-align-horizontal-right",
      tooltip: "right"
    }]), i = tn({
      propertyName: "align-items",
      options: a
    }), s = d(() => o.value.value === "row" ? Te("nt.style.layout.justify-title-byRow") : Te("nt.style.layout.justify-title-byCol")), u = d(() => o.value.value === "row" ? [{
      value: "start",
      icon: "i-mdi-align-horizontal-left",
      tooltip: "left"
    }, {
      value: "center",
      icon: "i-mdi-align-horizontal-center",
      tooltip: "center"
    }, {
      value: "end",
      icon: "i-mdi-align-horizontal-right",
      tooltip: "right"
    }] : [{
      value: "start",
      icon: "i-mdi-align-vertical-top",
      tooltip: "top"
    }, {
      value: "center",
      icon: "i-mdi-align-vertical-center",
      tooltip: "center"
    }, {
      value: "end",
      icon: "i-mdi-align-vertical-bottom",
      tooltip: "bottom"
    }]), c = tn({
      propertyName: "justify-content",
      options: u
    });
    return (v, p) => {
      const h = wt;
      return $(), X(h, {
        header: q(Te)("nt.style.layout.header"),
        key: "layout"
      }, {
        default: Z(() => [j("div", qp, [f(lt, {
          keyId: "display",
          label: q(Te)("nt.style.layout.display-label")
        }, null, 8, ["label"]), f(en, {
          model: q(n)
        }, null, 8, ["model"]), q(l).isFlex ? ($(), V(Pe, {
          key: 0
        }, [f(lt, {
          keyId: "flex-direction",
          label: q(Te)("nt.style.layout.direction")
        }, null, 8, ["label"]), f(en, {
          model: q(o)
        }, null, 8, ["model"]), f(lt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(en, {
          model: q(c)
        }, null, 8, ["model"]), f(lt, {
          keyId: "align-items",
          label: r.value
        }, null, 8, ["label"]), f(en, {
          model: q(i)
        }, null, 8, ["model"])], 64)) : he("", !0)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Up = /* @__PURE__ */ et(Gp, [["__scopeId", "data-v-b52fb1c7"]]), Yp = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Zp = /* @__PURE__ */ z({
  __name: "FlexItem",
  setup(e) {
    const n = Hn(ke).getParentFlexBoxInfo(), l = d(() => n.value.direction === "row" ? {
      title: Te("nt.style.flexitem.title.vertical"),
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
      title: Te("nt.style.flexitem.title.horizontal"),
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
    }), o = tn({
      propertyName: "align-self",
      options: [{
        value: "flex-start",
        icon: "i-mdi-align-horizontal-left"
      }, {
        value: "center",
        icon: "i-mdi-align-horizontal-center"
      }, {
        value: "flex-end",
        icon: "i-mdi-align-horizontal-right"
      }, {
        value: "stretch",
        icon: "i-mdi-arrow-expand-horizontal"
      }]
    });
    return (r, a) => {
      const i = wt;
      return q(n).isFlex ? ($(), X(i, {
        header: q(Te)("nt.style.flexitem.header"),
        key: "flex-item"
      }, {
        default: Z(() => [j("div", Yp, [f(lt, {
          keyId: "align-self",
          label: l.value.title
        }, null, 8, ["label"]), f(en, {
          model: q(o)
        }, null, 8, ["model"])])]),
        _: 1
      }, 8, ["header"])) : he("", !0);
    };
  }
});
const Xp = /* @__PURE__ */ et(Zp, [["__scopeId", "data-v-ef8fe436"]]);
const Jp = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, qt = /* @__PURE__ */ z({
  __name: "InputWithUnitSelector",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      inputValue: n,
      selectValue: l,
      inputPlaceholder: o,
      itemOptions: r,
      userEdited: a,
      updateInput: i,
      updateSelect: s
    } = t.model, u = m(null);
    function c(p, h) {
      var y;
      h.currentTarget === h.target && (i(p), a(), (y = u.value) == null || y.blur());
    }
    function v(p) {
      s(p), a();
    }
    return (p, h) => {
      const y = Mn, b = cd;
      return $(), V("div", Jp, [f(y, {
        ref_key: "inputRef",
        ref: u,
        size: "mini",
        modelValue: q(n),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => no(n) ? n.value = w : null),
        placeholder: q(o),
        onChange: c
      }, null, 8, ["modelValue", "placeholder"]), f(b, {
        "popup-container": hn.mainPanelTooltip,
        size: "mini",
        options: q(r),
        "model-value": q(l),
        onChange: v,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": Z(() => h[1] || (h[1] = [])),
        _: 1
      }, 8, ["popup-container", "options", "model-value"])]);
    };
  }
});
function Qp(e, t) {
  return e.styles.get(t);
}
function Gt(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: l
  } = e, o = m(t.input), r = m(t.select ?? (l == null ? void 0 : l.defaultOptionValue)), a = n.map((b) => typeof b == "string" ? {
    value: b,
    label: b
  } : b);
  function i(b) {
    return a.find((w) => w.value === b);
  }
  const s = m(null), u = d(() => {
    var b;
    return r.value ? (b = i(r.value)) == null ? void 0 : b.label : "";
  }), c = d(() => {
    if (r.value) {
      const b = i(r.value);
      return (b == null ? void 0 : b.value) ?? (b == null ? void 0 : b.label);
    }
    return "";
  }), v = Sr(e.propertyName);
  pe(v, () => {
    const b = Qp(Er(), e.propertyName);
    if (b === void 0) {
      o.value = t.input, r.value = t.select;
      return;
    }
    const {
      number: w,
      unit: N
    } = hp(b);
    o.value = w, r.value = N;
  });
  function p() {
    const b = o.value, w = r.value;
    let N = "";
    w === "auto" ? N = w : N = `${b}${w}`, Co({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: N
      }
    });
  }
  function h(b) {
    Ta(r, o, l);
  }
  function y(b) {
    r.value = b, Ia(r, o, l);
  }
  return Ta(r, o, l), Ia(r, o, l), {
    inputValue: o,
    selectValue: r,
    selectItem: s,
    selectDisplay: u,
    inputPlaceholder: c,
    itemOptions: a,
    userEdited: p,
    updateSelect: y,
    updateInput: h
  };
}
function Ta(e, t, n) {
  const {
    nonValueOptions: l,
    defaultOptionValue: o,
    optionValueIfnonValue: r
  } = n ?? {}, a = t.value;
  a && (l && o && a.length > 0 && e.value && l.includes(e.value) && (e.value = o), r && l && a && e.value && l.includes(e.value) && (e.value = r), !a && l && (e.value = l[0]));
}
function Ia(e, t, n) {
  const {
    nonValueOptions: l
  } = n ?? {}, o = e.value;
  if (o) {
    if (l && l.includes(o))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const r = pp();
      n.specialProperty === "width" ? t.value = `${r.width}` : n.specialProperty === "height" && (t.value = `${r.height}`);
    }
  }
}
const eh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], th = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], nh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], lh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], oh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], ah = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], rh = /* @__PURE__ */ z({
  __name: "Width",
  setup(e) {
    const n = Gt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: eh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "width",
      label: "Width",
      class: "nt-size-width-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const ih = /* @__PURE__ */ et(rh, [["__scopeId", "data-v-01e1e2dc"]]), sh = /* @__PURE__ */ z({
  __name: "Height",
  setup(e) {
    const n = Gt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: th,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "height",
      label: "Height",
      class: "nt-size-height-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const uh = /* @__PURE__ */ et(sh, [["__scopeId", "data-v-219d1f9b"]]), ch = /* @__PURE__ */ z({
  __name: "MaxWidth",
  setup(e) {
    const n = Gt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: lh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "max-width",
      label: "Max W",
      class: "nt-size-max-width-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-max-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const dh = /* @__PURE__ */ et(ch, [["__scopeId", "data-v-539b11de"]]), fh = /* @__PURE__ */ z({
  __name: "MinWidth",
  setup(e) {
    const n = Gt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: nh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "min-width",
      label: "Min W",
      class: "nt-size-min-width-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-min-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const vh = /* @__PURE__ */ et(fh, [["__scopeId", "data-v-df273eca"]]), ph = /* @__PURE__ */ z({
  __name: "MaxHeight",
  setup(e) {
    const n = Gt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: ah,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "max-height",
      label: "Max H",
      class: "nt-size-max-height-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-max-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const hh = /* @__PURE__ */ et(ph, [["__scopeId", "data-v-97c693cb"]]), mh = /* @__PURE__ */ z({
  __name: "MinHeight",
  setup(e) {
    const n = Gt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: oh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(Pe, null, [f(lt, {
      "key-id": "min-height",
      label: "Min H",
      class: "nt-size-min-height-label"
    }), f(qt, {
      model: q(n),
      class: "nt-size-min-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const yh = /* @__PURE__ */ et(mh, [["__scopeId", "data-v-2eecce31"]]), gh = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, bh = /* @__PURE__ */ z({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const l = wt;
      return $(), X(l, {
        header: q(Te)("nt.style.size.header"),
        key: "size"
      }, {
        default: Z(() => [j("div", gh, [f(ih), f(uh), f(vh), f(yh), f(dh), f(hh)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const _h = /* @__PURE__ */ et(bh, [["__scopeId", "data-v-c5aac6a8"]]);
function Ch() {
  return {
    treeData: zp()
  };
}
const $h = {
  class: "relative"
}, kh = /* @__PURE__ */ z({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = m(null);
    function n(u) {
      const c = u[0];
      bp(c);
    }
    function l(u) {
      var h;
      const c = u.target;
      if (!c || !c.classList.contains("arco-tree-node-title"))
        return;
      const v = (h = c.parentElement) == null ? void 0 : h.getAttribute("data-key");
      if (!v)
        throw new Error("Cannot find key for selected element");
      const p = parseInt(v);
      p < 0 || Tp(p);
    }
    function o(u) {
      Ip();
    }
    pe(En(), (u) => {
      if (u || t.value.selectAll(!1), t.value && u) {
        const c = vt(u, qn());
        if (c == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(c, !0);
      }
    });
    const r = m(!0), a = d(() => r.value ? "i-mdi-arrow-collapse-vertical" : "i-mdi-arrow-expand-vertical"), i = d(() => r.value ? Te("tree.collapse_all") : Te("tree.expand_all"));
    function s() {
      r.value = !r.value, t.value.expandAll(r.value), r.value || t.value.expandNode(-1, !r.value);
    }
    return (u, c) => {
      const v = hv, p = vn, h = nr;
      return $(), X(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: Z(() => [j("div", $h, [f(v, {
          ref_key: "el",
          ref: t,
          data: u.model.treeData,
          "show-line": "",
          "block-node": "",
          onSelect: n,
          onMouseenterCapture: at(l, ["stop"]),
          onMouseleaveCapture: at(o, ["stop"])
        }, null, 8, ["data"]), f(p, {
          content: i.value,
          "popup-container": hn.mainPanelTooltip,
          style: ie({
            "z-index": ht.mainPanelTooltip
          })
        }, {
          default: Z(() => [j("div", {
            class: D(["text-xl absolute top-0 right-5 cursor-pointer", a.value]),
            onClick: s
          }, null, 2)]),
          _: 1
        }, 8, ["content", "popup-container", "style"])])]),
        _: 1
      });
    };
  }
});
const wh = /* @__PURE__ */ et(kh, [["__scopeId", "data-v-0112a70c"]]);
function Sh() {
  return {
    code: kp()
  };
}
const Eh = {}, Oh = {
  class: "border border-gray-300 border-solid p-2 rounded-md"
};
function xh(e, t) {
  return $(), V("div", Oh, [le(e.$slots, "default")]);
}
const Nr = /* @__PURE__ */ et(Eh, [["render", xh]]), Ph = /* @__PURE__ */ z({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (l, o) => {
      const r = Gv;
      return $(), V("div", null, [o[0] || (o[0] = j("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "styles", -1)), f(Nr, null, {
        default: Z(() => [f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: Z(() => [qe(je(q(n)), 1)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
}), Bh = {
  class: "w-fit relative"
}, Th = /* @__PURE__ */ z({
  __name: "EditableTag",
  props: {
    tagKey: {},
    value: {}
  },
  emits: ["valueChange", "remove"],
  setup(e, {
    emit: t
  }) {
    const n = e, l = t, o = m(null), r = m(n.value);
    let a = n.value;
    const i = m(!1), s = () => {
      i.value = !0, Fe(() => {
        o.value && o.value.focus();
      });
    }, u = () => {
      i.value = !1, l("valueChange", {
        key: n.tagKey,
        oldValue: a,
        newValue: r.value
      }), a = r.value;
    }, c = () => {
      o.value.blur();
    }, v = () => {
      l("remove", {
        key: n.tagKey
      });
    };
    return (p, h) => {
      const y = Mn, b = fn;
      return $(), V("div", Bh, [ut(f(y, {
        ref_key: "inputRef",
        ref: o,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: r.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
        modelModifiers: {
          trim: !0
        },
        onKeyup: to(c, ["enter"]),
        onBlur: u
      }, null, 8, ["modelValue"]), [[ct, i.value]]), f(b, {
        class: "cursor-pointer",
        style: ie({
          visibility: i.value ? "hidden" : "visible"
        }),
        color: "arcoblue",
        closable: "",
        onClick: s,
        onClose: v
      }, {
        default: Z(() => [qe(je(r.value), 1)]),
        _: 1
      }, 8, ["style"])]);
    };
  }
}), Ih = {
  class: "w-fit relative"
}, zh = /* @__PURE__ */ z({
  __name: "AddableTag",
  emits: ["add"],
  setup(e, {
    emit: t
  }) {
    const n = t, l = m(null), o = m(""), r = m(!1), a = () => {
      r.value = !0, Fe(() => {
        l.value && l.value.focus();
      });
    }, i = () => {
      r.value = !1, o.value && (n("add", {
        value: o.value
      }), o.value = "");
    }, s = () => {
      l.value.blur();
    };
    return (u, c) => {
      const v = Mn, p = dr, h = fn;
      return $(), V("div", Ih, [ut(f(v, {
        ref_key: "inputRef",
        ref: l,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (y) => o.value = y),
        modelModifiers: {
          trim: !0
        },
        onKeyup: to(s, ["enter"]),
        onBlur: i
      }, null, 8, ["modelValue"]), [[ct, r.value]]), f(h, {
        class: "cursor-pointer",
        style: ie({
          visibility: r.value ? "hidden" : "visible"
        }),
        onClick: a
      }, {
        icon: Z(() => [f(p)]),
        _: 1
      }, 8, ["style"])]);
    };
  }
}), Nh = {
  class: "flex flex-wrap gap-4"
}, Lh = /* @__PURE__ */ z({
  __name: "ClassesList",
  setup(e) {
    const t = d(() => Er().classes);
    function n(r, a, i) {
      const s = [...t.value];
      s[r] = i, Ml({
        classes: s
      }), Fl(En().value, {
        change: {
          oldClass: a,
          newClass: i
        }
      });
    }
    function l(r) {
      const a = [...t.value];
      a.splice(r, 1), Ml({
        classes: a
      }), Fl(En().value, {
        remove: t.value[r]
      });
    }
    function o(r) {
      const a = [...t.value, r];
      Ml({
        classes: a
      }), Fl(En().value, {
        add: r
      });
    }
    return (r, a) => ($(), V("div", null, [a[3] || (a[3] = j("div", {
      class: "text-lg mb-2 text-gray-400"
    }, "classes", -1)), f(Nr, null, {
      default: Z(() => [j("div", Nh, [($(!0), V(Pe, null, St(t.value, (i, s) => ($(), X(Th, {
        tagKey: s,
        value: i,
        onValueChange: a[0] || (a[0] = (u) => n(u.key, u.oldValue, u.newValue)),
        onRemove: a[1] || (a[1] = (u) => l(u.key))
      }, null, 8, ["tagKey", "value"]))), 256)), f(zh, {
        onAdd: a[2] || (a[2] = (i) => o(i.value))
      })])]),
      _: 1
    })]));
  }
}), Vh = {
  class: "flex flex-col gap-2"
}, Dh = /* @__PURE__ */ z({
  __name: "Code",
  setup(e) {
    const t = Sh();
    return (n, l) => ($(), V("div", Vh, [f(Lh), f(Ph, {
      model: q(t)
    }, null, 8, ["model"])]));
  }
}), Ah = {
  class: "bg-white/30 backdrop-blur-md"
}, jh = /* @__PURE__ */ z({
  __name: "MainPanel",
  setup(e) {
    Zv(ke);
    const t = d(() => !!ke.value), n = Ch();
    return (l, o) => {
      const r = Ad, a = Sn, i = Of;
      return $(), V("div", Ah, [f(i, {
        "default-active-key": "element-tree"
      }, {
        default: Z(() => [f(a, {
          key: "style",
          title: q(Te)("nt.mainPanel.style"),
          disabled: !t.value
        }, {
          default: Z(() => [f(r, {
            accordion: ""
          }, {
            default: Z(() => [f(Xp), f(Up), f(Hp), f(_h)]),
            _: 1
          })]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "element-tree",
          title: q(Te)("nt.mainPanel.navigator")
        }, {
          default: Z(() => [f(wh, {
            model: q(n)
          }, null, 8, ["model"])]),
          _: 1
        }, 8, ["title"]), f(a, {
          key: "nicegui",
          title: q(Te)("nt.mainPanel.code"),
          class: "x-panel-nicegui",
          disabled: !t.value
        }, {
          default: Z(() => [f(Dh)]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "cusStyle",
          title: q(Te)("nt.mainPanel.cusStyle")
        }, null, 8, ["title"])]),
        _: 1
      })]);
    };
  }
});
const Fh = /* @__PURE__ */ et(jh, [["__scopeId", "data-v-95f5c566"]]);
function Mh() {
  const e = Oe(Cr(ke));
  _r(ke, () => {
    e.update();
  }, {
    attributes: !0
  }), Xe("scroll", e.update, !0);
  const t = d(() => ke.value ? {
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
  }), n = d(() => ke.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), l = d(() => ke.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), o = d(() => ke.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), r = d(() => ke.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), a = d(() => ke.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), i = d(() => ke.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), s = d(() => ke.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), u = d(() => ke.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return {
    rectStyles: t,
    p1: n,
    p2: l,
    p3: o,
    p4: r,
    p5: a,
    p6: i,
    p7: s,
    p8: u
  };
}
function Lr() {
  const {
    width: e,
    height: t
  } = go(), n = d(() => `0 0 ${e.value} ${t.value}`), l = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: l
  };
}
const Kh = ["viewBox"], Rh = /* @__PURE__ */ z({
  __name: "Aiming",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Lr(), {
      rectStyles: l,
      p1: o,
      p2: r,
      p3: a,
      p4: i,
      p5: s,
      p6: u,
      p7: c,
      p8: v
    } = Mh();
    return (p, h) => ($(), V("svg", {
      class: "vis-aiming",
      viewBox: q(t),
      version: "1.1",
      style: ie([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [q(n), {
        "z-index": q(ht).aiming
      }]]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [j("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: ie(q(l))
    }, null, 4), j("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, q(o), {
      r: "2"
    }), null, 16), j("circle", re({
      fill: "hotpink"
    }, q(r), {
      r: "2"
    }), null, 16), j("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, q(a), {
      r: "2"
    }), null, 16), j("circle", re({
      fill: "hotpink"
    }, q(i), {
      r: "2"
    }), null, 16), j("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, q(s), {
      r: "2"
    }), null, 16), j("circle", re({
      fill: "hotpink"
    }, q(u), {
      r: "2"
    }), null, 16), j("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, q(c), {
      r: "2"
    }), null, 16), j("circle", re({
      fill: "hotpink"
    }, q(v), {
      r: "2"
    }), null, 16)], 12, Kh));
  }
});
const Hh = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, Wh = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const t = m(null), {
      style: n
    } = up(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), l = Ep(), o = Sp(), r = Dp();
    return (a, i) => {
      const s = fn, u = of, c = Fn, v = Ec, p = vr, h = vn;
      return $(), V("div", {
        class: "non-selectable w-[350px]",
        style: ie([[q(n), {
          zIndex: ht.panel
        }], {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [j("div", Hh, [j("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(u, {
        class: "h-full"
      }, {
        default: Z(() => [i[0] || (i[0] = j("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), i[1] || (i[1] = j("span", {
          class: "font-bold"
        }, "toolkit", -1)), ut(f(s, {
          color: "green"
        }, {
          default: Z(() => [qe(je(q(l)), 1)]),
          _: 1
        }, 512), [[ct, q(o)]])]),
        _: 1
      })], 512), f(h, {
        content: q(Te)("nt.apply_command_tooltip")
      }, {
        default: Z(() => [f(p, {
          "popup-container": hn.mainPanelTooltip,
          content: q(Te)("nt.apply_command_confirm"),
          "ok-text": "Apply",
          "cancel-text": "No",
          position: "bottom",
          onOk: q(Vp),
          style: ie({
            "z-index": ht.mainPanelTooltip
          })
        }, {
          default: Z(() => [ut(f(v, {
            count: 9,
            dot: "",
            dotStyle: {
              width: "10px",
              height: "10px"
            },
            class: "nt-apply-command"
          }, {
            default: Z(() => [f(c, {
              shape: "circle",
              size: "mini"
            }, {
              default: Z(() => i[2] || (i[2] = [j("div", {
                class: "i-codicon-git-stash-apply text-1xl"
              }, null, -1)])),
              _: 1
            })]),
            _: 1
          }, 512), [[ct, q(r)]])]),
          _: 1
        }, 8, ["popup-container", "content", "onOk", "style"])]),
        _: 1
      }, 8, ["content"]), f(h, {
        content: q(Te)("nt.jump2code")
      }, {
        default: Z(() => [ut(f(c, {
          shape: "circle",
          size: "mini",
          onClick: q(Lp)
        }, {
          default: Z(() => i[3] || (i[3] = [j("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[ct, q(o)]])]),
        _: 1
      }, 8, ["content"])]), le(a.$slots, "default"), le(a.$slots, "footer")], 4);
    };
  }
});
function qh() {
  const {
    width: e,
    height: t
  } = go(), n = Oe(Cr(st));
  Xe("scroll", n.update, !0);
  const l = d(() => st.value ? {
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
  }), o = d(() => st.value ? {
    x1: 0,
    y1: n.top,
    x2: e.value,
    y2: n.top
  } : {
    x1: 0,
    y1: 8,
    x2: n.width,
    y2: 8,
    "stroke-width": 0
  }), r = d(() => st.value ? {
    x1: n.left + n.width,
    y1: 0,
    x2: n.left + n.width,
    y2: t.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: t.value,
    "stroke-width": 0
  }), a = d(() => st.value ? {
    x1: 0,
    y1: n.top + n.height,
    x2: e.value,
    y2: n.top + n.height
  } : {
    x1: 0,
    y1: 8,
    x2: n.width,
    y2: 8,
    "stroke-width": 0
  }), i = d(() => st.value ? {
    x1: n.left,
    y1: 0,
    x2: n.left,
    y2: t.value
  } : {
    x1: e.value,
    y1: 8,
    x2: e.value,
    y2: t.value,
    "stroke-width": 0
  });
  return {
    rectStyles: l,
    topLine: o,
    rightLine: r,
    bottomLine: a,
    leftLine: i
  };
}
const Gh = ["viewBox"], Xt = "red", Uh = /* @__PURE__ */ z({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Lr(), {
      rectStyles: l,
      topLine: o,
      rightLine: r,
      bottomLine: a,
      leftLine: i
    } = qh();
    return (s, u) => ($(), V("svg", {
      class: "vis-hover",
      viewBox: q(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: ie([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [q(n), {
        "z-index": q(ht).visHover
      }]])
    }, [j("rect", {
      fill: "none",
      stroke: Xt,
      "stroke-width": "1",
      style: ie(q(l))
    }, null, 4), j("line", re({
      class: "top"
    }, q(o), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), j("line", re({
      class: "right"
    }, q(r), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), j("line", re({
      class: "bottom"
    }, q(a), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), j("line", re({
      class: "left"
    }, q(i), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, Gh));
  }
});
function Yh(e, t) {
  const {
    width: n
  } = go(), {
    x: l,
    y: o
  } = $r({
    type: "client"
  }), r = d(() => {
    let s = l.value, u = o.value;
    return n.value - l.value < 10 && (s -= 10), o.value < 10 && (u += 10), {
      x: s,
      y: u
    };
  }), a = d(() => t.value ? {
    display: "block",
    left: `${r.value.x}px`,
    top: `${r.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: d(() => t.value ? bo(t.value, e) : null),
    typeNameTagStyles: a
  };
}
function Zh(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: vt(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const Xh = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function za(e, t) {
  if (!Xh.has(bo(e, t)))
    return {
      isFlex: !1,
      direction: null
    };
  const n = window.getComputedStyle(e, null), l = n.getPropertyValue("display") === "flex";
  let o = null;
  return l && (o = n.getPropertyValue("flex-direction")), {
    isFlex: l,
    direction: o
  };
}
function Na(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function Jh(e, t) {
  function n(i) {
    i.selectTarget && o(i.selectTarget.id), i.serverResetCommand && r(i.serverResetCommand.propertyName), i.trackRecord && a(i.trackRecord);
  }
  function l(i, s) {
    return window.getComputedStyle(Na(i, e), null).getPropertyValue(s);
  }
  function o(i) {
    const s = Na(i, e);
    t.value = s;
  }
  function r(i) {
    Cp(i);
  }
  function a(i) {
    Bp(i.hasChanged);
  }
  return {
    queryStyle: l,
    sendMessage: n
  };
}
async function Qh(e) {
  if (!e)
    return;
  const {
    loadResource: t
  } = await import("../../static/utils/resources.js"), n = window.path_prefix;
  await t(n + `${e}/trackBall.css`);
}
const em = /* @__PURE__ */ z({
  __name: "VisTypeName",
  setup(e) {
    const {
      typeNameTagStyles: t,
      typeName: n
    } = Yh(qn(), st);
    return (l, o) => ($(), V("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: ie([q(t), {
        zIndex: q(ht).visTypeName
      }])
    }, je(q(n)), 5));
  }
}), nm = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    currentTargetContext: {},
    resource_path: {},
    elementTreeData: {},
    languageConfig: {}
  },
  emits: ["init", "hoverChange", "selectedChange", "setCommand", "resetCommand", "jumpSourceCode", "applyCommand", "classesUpdate"],
  setup(e, {
    expose: t,
    emit: n
  }) {
    const l = e, o = n;
    function r(i) {
      const s = ke.value;
      if (!s)
        return;
      const u = vt(s, l.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      o("setCommand", {
        id: u,
        commands: i
      });
    }
    function a(i) {
      const s = ke.value;
      if (!s)
        return;
      const u = vt(s, l.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      o("resetCommand", {
        id: u,
        commands: i
      });
    }
    return Ve(async () => {
      await Qh(l.resource_path), o("init");
    }), Np({
      selectorConfig: l.selectorConfig,
      languageConfig: l.languageConfig,
      elementTreeData: l.elementTreeData,
      emitSetCommandFn: r,
      emitResetCommandFn: a,
      emitJumpSourceCodeFn: () => {
        const i = ke.value;
        if (!i)
          return;
        const s = vt(i, l.selectorConfig);
        if (!s)
          throw new Error("not found selected element");
        o("jumpSourceCode", {
          id: s
        });
      },
      emitApplyCommandFn: () => {
        o("applyCommand");
      },
      emitClassesUpdateFn: (i) => {
        o("classesUpdate", i);
      }
    }), pe(() => l.currentTargetContext, () => {
      $p(l.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    }), pe(st, (i) => {
      if (i) {
        const s = vt(i, l.selectorConfig);
        o("hoverChange", {
          id: s
        });
        return;
      }
      o("hoverChange", {
        id: null
      });
    }), pe(ke, (i) => {
      const s = {
        isFlex: !1,
        direction: null
      };
      if (i) {
        const u = vt(i, l.selectorConfig), c = Zh(i, l.selectorConfig);
        let v = {
          isFlex: !1,
          direction: null
        };
        c && (v = za(c.dom, l.selectorConfig)), o("selectedChange", {
          id: u,
          parentBoxId: c !== null ? c.id : null,
          flexInfo: za(i, l.selectorConfig),
          parentFlexInfo: v
        });
        return;
      }
      o("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: s,
        parentFlexInfo: s
      });
    }), t(Jh(l.selectorConfig, ke)), (i, s) => ($(), X(Va, {
      to: "body"
    }, [f(Uh), f(Rh), f(Wh, null, {
      default: Z(() => [le(i.$slots, "header"), f(Fh), le(i.$slots, "footer")]),
      _: 3
    }), f(em)]));
  }
});
export {
  nm as default
};
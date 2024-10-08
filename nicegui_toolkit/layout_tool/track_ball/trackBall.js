const m = Vue.ref
const Oe = Vue.reactive
const Ue = Vue.inject
const d = Vue.computed
const ht = Vue.getCurrentInstance
const Tn = Vue.cloneVNode
const z = Vue.defineComponent
const pe = Vue.watch
const Ve = Vue.onMounted
const jl = Vue.onUnmounted
const $ = Vue.openBlock
const V = Vue.createElementBlock
const D = Vue.normalizeClass
const le = Vue.renderSlot
const de = Vue.normalizeStyle
const A = Vue.createElementVNode
const ve = Vue.resolveComponent
const X = Vue.createBlock
const he = Vue.createCommentVNode
const _o = Vue.toRef
const _e = Vue.toRefs
const f = Vue.createVNode
const re = Vue.mergeProps
const qe = Vue.createTextVNode
const Fe = Vue.nextTick
const Et = Vue.provide
const Pe = Vue.Fragment
const za = Vue.createSlots
const Z = Vue.withCtx
const at = Vue.withModifiers
const ut = Vue.onUpdated
const Rt = Vue.onBeforeUnmount
const sn = Vue.readonly
const Tr = Vue.onDeactivated
const Na = Vue.Teleport
const zn = Vue.Transition
const ft = Vue.withDirectives
const vt = Vue.vShow
const Lt = Vue.resolveDynamicComponent
const je = Vue.toDisplayString
const wt = Vue.renderList
const zr = Vue.TransitionGroup
const Nn = Vue.watchEffect
const Xl = Vue.isVNode
const Nr = Vue.Comment
const Tt = Vue.h
const Fl = Vue.normalizeProps
const Jl = Vue.withKeys
const La = Vue.createApp
const $t = Vue.toValue
const U = Vue.unref
const Ql = Vue.isRef
const Lr = Vue.customRef
const Vr = Vue.getCurrentScope
const Dr = Vue.onScopeDispose
const Ot = Object.prototype.toString;
function Ae(e) {
  return Ot.call(e) === "[object Array]";
}
function Ln(e) {
  return Ot.call(e) === "[object Null]";
}
function jt(e) {
  return Ot.call(e) === "[object Boolean]";
}
function Le(e) {
  return Ot.call(e) === "[object Object]";
}
const Co = (e) => Ot.call(e) === "[object Promise]";
function xt(e) {
  return Ot.call(e) === "[object String]";
}
function $e(e) {
  return Ot.call(e) === "[object Number]" && e === e;
}
function Ke(e) {
  return e === void 0;
}
function Ge(e) {
  return typeof e == "function";
}
function Ar(e) {
  return Le(e) && Object.keys(e).length === 0;
}
const Va = (e) => (e == null ? void 0 : e.$) !== void 0, Pt = Symbol("ArcoConfigProvider"), pn = {
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
}, jr = {
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
  calendar: pn,
  datePicker: {
    view: pn.view,
    month: pn.month,
    week: pn.week,
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
}, Fr = m("zh-CN"), Mr = Oe({
  "zh-CN": jr
}), eo = () => {
  const e = Ue(Pt, void 0), t = d(() => {
    var a;
    return (a = e == null ? void 0 : e.locale) != null ? a : Mr[Fr.value];
  }), n = d(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (a, ...r) => {
      const o = a.split(".");
      let i = t.value;
      for (const s of o) {
        if (!i[s])
          return a;
        i = i[s];
      }
      return xt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, c) => {
        var u;
        return (u = r[c]) != null ? u : s;
      }) : i;
    }
  };
};
var Kr = Object.defineProperty, Rr = Object.defineProperties, Hr = Object.getOwnPropertyDescriptors, $o = Object.getOwnPropertySymbols, Wr = Object.prototype.hasOwnProperty, qr = Object.prototype.propertyIsEnumerable, ko = (e, t, n) => t in e ? Kr(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Gr = (e, t) => {
  for (var n in t || (t = {}))
    Wr.call(t, n) && ko(e, n, t[n]);
  if ($o)
    for (var n of $o(t))
      qr.call(t, n) && ko(e, n, t[n]);
  return e;
}, Ur = (e, t) => Rr(e, Hr(t));
const Yr = "A", Zr = "arco", Ml = "$arco", Re = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : Yr;
}, He = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[Ml] = Ur(Gr({}, (n = e.config.globalProperties[Ml]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, Y = (e) => {
  var t, n, l;
  const a = ht(), r = Ue(Pt, void 0), o = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = a == null ? void 0 : a.appContext.config.globalProperties[Ml]) == null ? void 0 : t.classPrefix) != null ? l : Zr;
  return e ? `${o}-${e}` : o;
};
var Da = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(a, r) {
      return a[0] === n ? (l = r, !0) : !1;
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
        var l = e(this.__entries__, n), a = this.__entries__[l];
        return a && a[1];
      }, t.prototype.set = function(n, l) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = l : this.__entries__.push([n, l]);
      }, t.prototype.delete = function(n) {
        var l = this.__entries__, a = e(l, n);
        ~a && l.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, l) {
        l === void 0 && (l = null);
        for (var a = 0, r = this.__entries__; a < r.length; a++) {
          var o = r[a];
          n.call(l, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), Kl = typeof window < "u" && typeof document < "u" && window.document === document, Sn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Xr = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Sn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Jr = 2;
function Qr(e, t) {
  var n = !1, l = !1, a = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function o() {
    Xr(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - a < Jr)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(o, t);
    a = s;
  }
  return i;
}
var ei = 20, ti = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ni = typeof MutationObserver < "u", li = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Qr(this.refresh.bind(this), ei);
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
      !Kl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ni ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Kl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, a = ti.some(function(r) {
        return !!~l.indexOf(r);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Aa = function(e, t) {
  for (var n = 0, l = Object.keys(t); n < l.length; n++) {
    var a = l[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Ft = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Sn;
}, ja = Vn(0, 0, 0, 0);
function En(e) {
  return parseFloat(e) || 0;
}
function wo(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, a) {
    var r = e["border-" + a + "-width"];
    return l + En(r);
  }, 0);
}
function oi(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, a = t; l < a.length; l++) {
    var r = a[l], o = e["padding-" + r];
    n[r] = En(o);
  }
  return n;
}
function ai(e) {
  var t = e.getBBox();
  return Vn(0, 0, t.width, t.height);
}
function ri(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return ja;
  var l = Ft(e).getComputedStyle(e), a = oi(l), r = a.left + a.right, o = a.top + a.bottom, i = En(l.width), s = En(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= wo(l, "left", "right") + r), Math.round(s + o) !== n && (s -= wo(l, "top", "bottom") + o)), !si(e)) {
    var c = Math.round(i + r) - t, u = Math.round(s + o) - n;
    Math.abs(c) !== 1 && (i -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return Vn(a.left, a.top, i, s);
}
var ii = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ft(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Ft(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function si(e) {
  return e === Ft(e).document.documentElement;
}
function ui(e) {
  return Kl ? ii(e) ? ai(e) : ri(e) : ja;
}
function ci(e) {
  var t = e.x, n = e.y, l = e.width, a = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(r.prototype);
  return Aa(o, {
    x: t,
    y: n,
    width: l,
    height: a,
    top: n,
    right: t + l,
    bottom: a + n,
    left: t
  }), o;
}
function Vn(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var di = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Vn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ui(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), fi = (
  /** @class */
  function() {
    function e(t, n) {
      var l = ci(n);
      Aa(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), vi = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Da(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ft(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new di(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ft(t).Element))
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
          return new fi(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Fa = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Da(), Ma = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = li.getInstance(), l = new vi(t, n, this);
      Fa.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Ma.prototype[e] = function() {
    var t;
    return (t = Fa.get(this))[e].apply(t, arguments);
  };
});
var to = function() {
  return typeof Sn.ResizeObserver < "u" ? Sn.ResizeObserver : Ma;
}(), So;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(So || (So = {}));
var Eo;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Eo || (Eo = {}));
const Dn = (e) => !!(e && e.shapeFlag & 1), un = (e, t) => !!(e && e.shapeFlag & 6), pi = (e, t) => !!(e && e.shapeFlag & 8), no = (e, t) => !!(e && e.shapeFlag & 16), Ka = (e, t) => !!(e && e.shapeFlag & 32), Vt = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (Dn(l) || un(l))
        return l;
      if (no(l, l.children)) {
        const a = Vt(l.children);
        if (a)
          return a;
      } else if (Ka(l, l.children)) {
        const a = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (a) {
          const r = Vt(a);
          if (r)
            return r;
        }
      } else if (Ae(l)) {
        const a = Vt(l);
        if (a)
          return a;
      }
    }
}, hi = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Ra = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (Dn(l) || un(l)) {
        const r = Ge(t) ? t(l) : t;
        return e[n] = Tn(l, r, !0), !0;
      }
      const a = lo(l);
      if (a && a.length > 0 && Ra(a, t))
        return !0;
    }
  return !1;
}, lo = (e) => {
  if (no(e, e.children))
    return e.children;
  if (Ae(e))
    return e;
}, Ha = (e) => {
  var t, n;
  if (Dn(e))
    return e.el;
  if (un(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Ha(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = lo(e);
    return Wa(l);
  }
}, Wa = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Ha(t);
      if (n)
        return n;
    }
}, bn = (e, t = !1) => {
  var n, l;
  const a = [];
  for (const r of e ?? [])
    Dn(r) || un(r) || t && pi(r, r.children) ? a.push(r) : no(r, r.children) ? a.push(...bn(r.children, t)) : Ka(r, r.children) ? a.push(...bn((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : Ae(r) && a.push(...bn(r, t));
  return a;
}, qa = (e, t) => {
  var n;
  const l = [];
  if (un(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...qa(e.component.subTree, t));
  else {
    const a = lo(e);
    a && l.push(...Ga(a, t));
  }
  return l;
}, Ga = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...qa(l, t));
  return n;
};
var ln = z({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const a = m(), r = d(() => Va(a.value) ? a.value.$el : a.value), o = (s) => {
      s && (l = new to((c) => {
        const u = c[0];
        t("resize", u);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return pe(r, (s) => {
      l && i(), s && o(s);
    }), Ve(() => {
      r.value && o(r.value);
    }), jl(() => {
      i();
    }), () => {
      var s, c;
      const u = Vt((c = (s = n.default) == null ? void 0 : s.call(n)) != null ? c : []);
      return u ? Tn(u, {
        ref: a
      }, !0) : null;
    };
  }
});
const Ua = typeof window > "u" ? global : window, Ya = Ua.requestAnimationFrame, On = Ua.cancelAnimationFrame;
function Rl(e) {
  let t = 0;
  const n = (...l) => {
    t && On(t), t = Ya(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    On(t), t = 0;
  }, n;
}
const oo = () => {
}, mi = () => {
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
}, ao = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Dt = (() => ao ? oo : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), xn = (() => ao ? oo : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), yi = (e, t) => {
  var n;
  return ao ? oo() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Oo = (e, t) => {
  if (xt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return yi(n, t);
  }
  return e;
}, gi = (e, t) => {
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
var ce = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const bi = z({
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
function _i(e, t, n, l, a, r) {
  return $(), V("span", {
    class: D([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [le(e.$slots, "default")], 2);
}
var Qe = /* @__PURE__ */ ce(bi, [["render", _i]]);
const Ci = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), $i = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ki = /* @__PURE__ */ A("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), wi = [ki];
function Si(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, wi, 14, $i);
}
var Hn = /* @__PURE__ */ ce(Ci, [["render", Si]]);
const cn = Object.assign(Hn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Hn.name, Hn);
  }
}), Ei = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Oi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], xi = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Pi = [xi];
function Bi(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Pi, 14, Oi);
}
var Wn = /* @__PURE__ */ ce(Ei, [["render", Bi]]);
const Ii = Object.assign(Wn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Wn.name, Wn);
  }
}), Ti = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), zi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ni = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Li = [Ni];
function Vi(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Li, 14, zi);
}
var qn = /* @__PURE__ */ ce(Ti, [["render", Vi]]);
const ro = Object.assign(qn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + qn.name, qn);
  }
}), Di = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Ai = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ji = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Fi = [ji];
function Mi(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Fi, 14, Ai);
}
var Gn = /* @__PURE__ */ ce(Di, [["render", Mi]]);
const Za = Object.assign(Gn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Gn.name, Gn);
  }
}), Ki = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Ri = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hi = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Wi = [Hi];
function qi(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Wi, 14, Ri);
}
var Un = /* @__PURE__ */ ce(Ki, [["render", qi]]);
const Xa = Object.assign(Un, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Un.name, Un);
  }
}), Mt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], Gi = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Ui = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yi = /* @__PURE__ */ A("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), Zi = [Yi];
function Xi(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Zi, 14, Ui);
}
var Yn = /* @__PURE__ */ ce(Gi, [["render", Xi]]);
const pt = Object.assign(Yn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Yn.name, Yn);
  }
}), Ji = z({
  name: "FeedbackIcon",
  components: {
    IconLoading: pt,
    IconCheckCircleFill: ro,
    IconExclamationCircleFill: Za,
    IconCloseCircleFill: Xa
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
function Qi(e, t, n, l, a, r) {
  const o = ve("icon-loading"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), c = ve("icon-close-circle-fill");
  return $(), V("span", {
    class: D(e.cls)
  }, [e.type === "validating" ? ($(), X(o, {
    key: 0
  })) : e.type === "success" ? ($(), X(i, {
    key: 1
  })) : e.type === "warning" ? ($(), X(s, {
    key: 2
  })) : e.type === "error" ? ($(), X(c, {
    key: 3
  })) : he("v-if", !0)], 2);
}
var io = /* @__PURE__ */ ce(Ji, [["render", Qi]]);
const so = {
  key: "Enter",
  code: "Enter"
}, es = {
  key: "Backspace",
  code: "Backspace"
};
var ts = Object.defineProperty, xo = Object.getOwnPropertySymbols, ns = Object.prototype.hasOwnProperty, ls = Object.prototype.propertyIsEnumerable, Po = (e, t, n) => t in e ? ts(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, os = (e, t) => {
  for (var n in t || (t = {}))
    ns.call(t, n) && Po(e, n, t[n]);
  if (xo)
    for (var n of xo(t))
      ls.call(t, n) && Po(e, n, t[n]);
  return e;
};
const Ht = (e, t) => {
  const n = os({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function uo(e, t) {
  const n = {};
  return t.forEach((l) => {
    const a = l;
    l in e && (n[a] = e[a]);
  }), n;
}
const as = Symbol("ArcoFormItemContext"), mt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const a = l ? {} : Ue(as, {}), r = d(() => {
    var u;
    return (u = e == null ? void 0 : e.value) != null ? u : a.size;
  }), o = d(() => (t == null ? void 0 : t.value) || a.disabled), i = d(() => (n == null ? void 0 : n.value) || a.error), s = _o(a, "feedback"), c = _o(a, "eventHandlers");
  return {
    formItemCtx: a,
    mergedSize: r,
    mergedDisabled: o,
    mergedError: i,
    feedback: s,
    eventHandlers: c
  };
}, yt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Ue(Pt, void 0);
  return {
    mergedSize: d(() => {
      var a, r;
      return (r = (a = e == null ? void 0 : e.value) != null ? a : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function rs(e) {
  const t = m();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: a,
      selectionEnd: r,
      value: o
    } = e.value;
    if (a == null || r == null)
      return;
    const i = o.slice(0, Math.max(0, a)), s = o.slice(Math.max(0, r));
    t.value = {
      selectionStart: a,
      selectionEnd: r,
      value: o,
      beforeTxt: i,
      afterTxt: s
    };
  }
  function l() {
    if (!e.value || !t.value)
      return;
    const {
      value: a
    } = e.value, {
      beforeTxt: r,
      afterTxt: o,
      selectionStart: i
    } = t.value;
    if (!r || !o || !i)
      return;
    let s = a.length;
    if (a.endsWith(o))
      s = a.length - o.length;
    else if (a.startsWith(r))
      s = r.length;
    else {
      const c = r[i - 1], u = a.indexOf(c, i - 1);
      u !== -1 && (s = u + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var is = Object.defineProperty, Bo = Object.getOwnPropertySymbols, ss = Object.prototype.hasOwnProperty, us = Object.prototype.propertyIsEnumerable, Io = (e, t, n) => t in e ? is(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, To = (e, t) => {
  for (var n in t || (t = {}))
    ss.call(t, n) && Io(e, n, t[n]);
  if (Bo)
    for (var n of Bo(t))
      us.call(t, n) && Io(e, n, t[n]);
  return e;
}, tn = z({
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
      size: a,
      disabled: r,
      error: o,
      modelValue: i
    } = _e(e), s = Y("input"), c = m(), {
      mergedSize: u,
      mergedDisabled: v,
      mergedError: p,
      feedback: h,
      eventHandlers: y
    } = mt({
      size: a,
      disabled: r,
      error: o
    }), {
      mergedSize: b
    } = yt(u), [w, N] = rs(c), I = m(e.defaultValue), S = d(() => {
      var W;
      return (W = e.modelValue) != null ? W : I.value;
    });
    pe(i, (W) => {
      (Ke(W) || Ln(W)) && (I.value = "");
    });
    let C = S.value;
    const E = m(!1), _ = d(() => e.allowClear && !e.readonly && !v.value && !!S.value), g = m(!1), j = m(""), F = (W) => {
      var P;
      return Ge(e.wordLength) ? e.wordLength(W) : (P = W.length) != null ? P : 0;
    }, L = d(() => F(S.value)), O = d(() => p.value || !!(Le(e.maxLength) && e.maxLength.errorOnly && L.value > R.value)), K = d(() => Le(e.maxLength) && !!e.maxLength.errorOnly), R = d(() => Le(e.maxLength) ? e.maxLength.length : e.maxLength), Q = d(() => {
      const W = F("a");
      return Math.floor(R.value / W);
    }), te = (W) => {
      var P, H;
      R.value && !K.value && F(W) > R.value && (W = (H = (P = e.wordSlice) == null ? void 0 : P.call(e, W, R.value)) != null ? H : W.slice(0, Q.value)), I.value = W, t("update:modelValue", W);
    }, oe = (W) => {
      c.value && W.target !== c.value && (W.preventDefault(), c.value.focus());
    }, x = (W, P) => {
      var H, ue;
      W !== C && (C = W, t("change", W, P), (ue = (H = y.value) == null ? void 0 : H.onChange) == null || ue.call(H, P));
    }, q = (W) => {
      var P, H;
      E.value = !0, C = S.value, t("focus", W), (H = (P = y.value) == null ? void 0 : P.onFocus) == null || H.call(P, W);
    }, me = (W) => {
      var P, H;
      E.value = !1, x(S.value, W), t("blur", W), (H = (P = y.value) == null ? void 0 : P.onBlur) == null || H.call(P, W);
    }, ne = (W) => {
      var P, H, ue;
      const {
        value: we,
        selectionStart: Ee,
        selectionEnd: Je
      } = W.target;
      if (W.type === "compositionend") {
        if (g.value = !1, j.value = "", R.value && !K.value && L.value >= R.value && F(we) > R.value && Ee === Je) {
          ie();
          return;
        }
        te(we), t("input", we, W), (H = (P = y.value) == null ? void 0 : P.onInput) == null || H.call(P, W), ie();
      } else
        g.value = !0, j.value = S.value + ((ue = W.data) != null ? ue : "");
    }, ie = () => {
      w(), Fe(() => {
        c.value && S.value !== c.value.value && (c.value.value = S.value, N());
      });
    }, Se = (W) => {
      var P, H;
      const {
        value: ue
      } = W.target;
      if (!g.value) {
        if (R.value && !K.value && L.value >= R.value && F(ue) > R.value && W.inputType === "insertText") {
          ie();
          return;
        }
        te(ue), t("input", ue, W), (H = (P = y.value) == null ? void 0 : P.onInput) == null || H.call(P, W), ie();
      }
    }, ge = (W) => {
      te(""), x("", W), t("clear", W);
    }, ye = (W) => {
      const P = W.key || W.code;
      !g.value && P === so.key && (x(S.value, W), t("pressEnter", W));
    }, se = d(() => [`${s}-outer`, `${s}-outer-size-${b.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: v.value
    }]), ke = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: v.value,
      [`${s}-focus`]: E.value
    }]), tt = d(() => [s, `${s}-size-${b.value}`]), Be = d(() => Ht(l, Mt)), De = d(() => uo(l, Mt)), Me = d(() => {
      const W = To(To({}, De.value), e.inputAttrs);
      return O.value && (W["aria-invalid"] = !0), W;
    }), Te = (W) => {
      var P;
      return f("span", re({
        class: ke.value,
        onMousedown: oe
      }, W ? void 0 : Be.value), [n.prefix && f("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), f("input", re({
        ref: c,
        class: tt.value,
        value: S.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: v.value,
        onInput: Se,
        onKeydown: ye,
        onFocus: q,
        onBlur: me,
        onCompositionstart: ne,
        onCompositionupdate: ne,
        onCompositionend: ne
      }, Me.value), null), _.value && f(Qe, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: ge
      }, {
        default: () => [f(cn, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!h.value) && f("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [!!e.maxLength && e.showWordLimit && f("span", {
        class: `${s}-word-limit`
      }, [L.value, qe("/"), R.value]), (P = n.suffix) == null ? void 0 : P.call(n), !!h.value && f(io, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: c,
      render: () => n.prepend || n.append ? f("span", re({
        class: se.value
      }, Be.value), [n.prepend && f("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), Te(!0), n.append && f("span", {
        class: `${s}-append`
      }, [n.append()])]) : Te()
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
const cs = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), ds = ["stroke-width", "stroke-linecap", "stroke-linejoin"], fs = /* @__PURE__ */ A("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), vs = [fs];
function ps(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, vs, 14, ds);
}
var Zn = /* @__PURE__ */ ce(cs, [["render", ps]]);
const Hl = Object.assign(Zn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Zn.name, Zn);
  }
}), Ja = Symbol("ArcoButtonGroup"), hs = z({
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
    } = _e(e), a = Y("btn"), r = Ue(Ja, void 0), o = d(() => {
      var h;
      return (h = n.value) != null ? h : r == null ? void 0 : r.size;
    }), i = d(() => !!(l.value || r != null && r.disabled)), {
      mergedSize: s,
      mergedDisabled: c
    } = mt({
      size: o,
      disabled: i
    }), {
      mergedSize: u
    } = yt(s), v = d(() => {
      var h, y, b, w, N, I;
      return [a, `${a}-${(y = (h = e.type) != null ? h : r == null ? void 0 : r.type) != null ? y : "secondary"}`, `${a}-shape-${(w = (b = e.shape) != null ? b : r == null ? void 0 : r.shape) != null ? w : "square"}`, `${a}-size-${u.value}`, `${a}-status-${(I = (N = e.status) != null ? N : r == null ? void 0 : r.status) != null ? I : "normal"}`, {
        [`${a}-long`]: e.long,
        [`${a}-loading`]: e.loading,
        [`${a}-disabled`]: c.value,
        [`${a}-link`]: xt(e.href)
      }];
    });
    return {
      prefixCls: a,
      cls: v,
      mergedDisabled: c,
      handleClick: (h) => {
        if (e.disabled || e.loading) {
          h.preventDefault();
          return;
        }
        t("click", h);
      }
    };
  }
}), ms = ["href"], ys = ["type", "disabled"];
function gs(e, t, n, l, a, r) {
  const o = ve("icon-loading");
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
  }, [e.loading ? ($(), X(o, {
    key: 0,
    spin: "true"
  })) : le(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), le(e.$slots, "default")], 10, ms)) : ($(), V("button", {
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
  }, [e.loading ? ($(), X(o, {
    key: 0,
    spin: !0
  })) : le(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), le(e.$slots, "default")], 10, ys));
}
var Xn = /* @__PURE__ */ ce(hs, [["render", gs]]);
const bs = z({
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
      disabled: a,
      shape: r
    } = _e(e), o = Y("btn-group");
    return Et(Ja, Oe({
      type: t,
      size: n,
      shape: r,
      status: l,
      disabled: a
    })), {
      prefixCls: o
    };
  }
});
function _s(e, t, n, l, a, r) {
  return $(), V("div", {
    class: D(e.prefixCls)
  }, [le(e.$slots, "default")], 2);
}
var Jn = /* @__PURE__ */ ce(bs, [["render", _s]]);
const An = Object.assign(Xn, {
  Group: Jn,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Xn.name, Xn), e.component(n + Jn.name, Jn);
  }
});
var Qn = z({
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
    } = _e(e), a = Y("input-search"), {
      mergedSize: r
    } = yt(l), o = m(), i = (v) => {
      o.value.inputRef && t("search", o.value.inputRef.value, v);
    }, s = () => {
      var v;
      return f(Pe, null, [e.loading ? f(pt, null, null) : f(Qe, {
        onClick: i
      }, {
        default: () => [f(Hl, null, null)]
      }), (v = n.suffix) == null ? void 0 : v.call(n)]);
    }, c = () => {
      var v;
      let p = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
        default: (v = n["button-default"]) != null ? v : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : p = {
        icon: () => f(Hl, null, null)
      }, f(An, re({
        type: "primary",
        class: `${a}-btn`,
        disabled: e.disabled,
        size: r.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), p);
    };
    return {
      inputRef: o,
      render: () => f(tn, {
        ref: o,
        class: a,
        size: r.value,
        disabled: e.disabled
      }, {
        prepend: n.prepend,
        prefix: n.prefix,
        suffix: e.searchButton ? n.suffix : s,
        append: e.searchButton ? c : n.append
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
const Cs = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), $s = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ks = /* @__PURE__ */ A("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), ws = /* @__PURE__ */ A("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Ss = [ks, ws];
function Es(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Ss, 14, $s);
}
var el = /* @__PURE__ */ ce(Cs, [["render", Es]]);
const Os = Object.assign(el, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + el.name, el);
  }
}), xs = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Ps = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Bs = /* @__PURE__ */ A("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Is = /* @__PURE__ */ A("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Ts = [Bs, Is];
function zs(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Ts, 14, Ps);
}
var tl = /* @__PURE__ */ ce(xs, [["render", zs]]);
const Ns = Object.assign(tl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + tl.name, tl);
  }
});
function Ls(e) {
  const t = m(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function Pn(e, t) {
  const {
    value: n
  } = _e(t), [l, a] = Ls(Ke(n.value) ? e : n.value);
  return pe(n, (o) => {
    Ke(o) && a(void 0);
  }), [d(() => Ke(n.value) ? l.value : n.value), a, l];
}
const Vs = z({
  name: "InputPassword",
  components: {
    IconEye: Os,
    IconEyeInvisible: Ns,
    AIconHover: Qe,
    AInput: tn
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
    } = _e(e), a = m(), r = () => {
      s(!o.value);
    }, [o, i] = Pn(l.value, Oe({
      value: n
    })), s = (c) => {
      c !== o.value && (t("visibility-change", c), t("update:visibility", c), i(c));
    };
    return {
      inputRef: a,
      mergedVisible: o,
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
function Ds(e, t, n, l, a, r) {
  const o = ve("icon-eye"), i = ve("icon-eye-invisible"), s = ve("a-icon-hover"), c = ve("a-input");
  return $(), X(c, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, za({
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
      })) : ($(), X(o, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : he("v-if", !0), le(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: Z(() => [le(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var nl = /* @__PURE__ */ ce(Vs, [["render", Ds]]);
const As = z({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: Y("input-group")
    };
  }
});
function js(e, t, n, l, a, r) {
  return $(), V("div", {
    class: D(e.prefixCls)
  }, [le(e.$slots, "default")], 2);
}
var ll = /* @__PURE__ */ ce(As, [["render", js]]);
const jn = Object.assign(tn, {
  Search: Qn,
  Password: nl,
  Group: ll,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + tn.name, tn), e.component(n + ll.name, ll), e.component(n + Qn.name, Qn), e.component(n + nl.name, nl);
  }
});
var Fs = Object.defineProperty, zo = Object.getOwnPropertySymbols, Ms = Object.prototype.hasOwnProperty, Ks = Object.prototype.propertyIsEnumerable, No = (e, t, n) => t in e ? Fs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xt = (e, t) => {
  for (var n in t || (t = {}))
    Ms.call(t, n) && No(e, n, t[n]);
  if (zo)
    for (var n of zo(t))
      Ks.call(t, n) && No(e, n, t[n]);
  return e;
};
const Rs = () => {
  const {
    height: e,
    width: t
  } = mi();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, Lo = (e, t) => {
  var n, l;
  const a = e.getBoundingClientRect();
  return {
    top: a.top,
    bottom: a.bottom,
    left: a.left,
    right: a.right,
    scrollTop: a.top - t.top,
    scrollBottom: a.bottom - t.top,
    scrollLeft: a.left - t.left,
    scrollRight: a.right - t.left,
    width: (n = e.offsetWidth) != null ? n : e.clientWidth,
    height: (l = e.offsetHeight) != null ? l : e.clientHeight
  };
}, Hs = (e) => {
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
}, hn = (e, t) => {
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
}, Ws = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: a,
  offset: r,
  translate: o
}) => {
  const i = Hs(e), s = Rs(), c = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + a.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + a.width)
  };
  let u = e;
  if (i === "top" && c.top < 0)
    if (l.top > a.height)
      t.top = -n.top;
    else {
      const v = Jt("bottom", l, a, {
        offset: r,
        translate: o
      });
      s.height - (n.top + v.top + a.height) > 0 && (u = hn(e, "bottom"), t.top = v.top);
    }
  if (i === "bottom" && c.bottom < 0)
    if (s.height - l.bottom > a.height)
      t.top = -n.top + (s.height - a.height);
    else {
      const v = Jt("top", l, a, {
        offset: r,
        translate: o
      });
      n.top + v.top > 0 && (u = hn(e, "top"), t.top = v.top);
    }
  if (i === "left" && c.left < 0)
    if (l.left > a.width)
      t.left = -n.left;
    else {
      const v = Jt("right", l, a, {
        offset: r,
        translate: o
      });
      s.width - (n.left + v.left + a.width) > 0 && (u = hn(e, "right"), t.left = v.left);
    }
  if (i === "right" && c.right < 0)
    if (s.width - l.right > a.width)
      t.left = -n.left + (s.width - a.width);
    else {
      const v = Jt("left", l, a, {
        offset: r,
        translate: o
      });
      n.left + v.left > 0 && (u = hn(e, "left"), t.left = v.left);
    }
  return (i === "top" || i === "bottom") && (c.left < 0 ? t.left = -n.left : c.right < 0 && (t.left = -n.left + (s.width - a.width))), (i === "left" || i === "right") && (c.top < 0 ? t.top = -n.top : c.bottom < 0 && (t.top = -n.top + (s.height - a.height))), {
    popupPosition: t,
    position: u
  };
}, Jt = (e, t, n, {
  offset: l = 0,
  translate: a = [0, 0]
} = {}) => {
  var r;
  const o = (r = Ae(a) ? a : a[e]) != null ? r : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + o[0],
        top: t.scrollTop - n.height - l + o[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + o[0],
        top: t.scrollTop - n.height - l + o[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + o[0],
        top: t.scrollTop - n.height - l + o[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + o[0],
        top: t.scrollBottom + l + o[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + o[0],
        top: t.scrollBottom + l + o[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + o[0],
        top: t.scrollBottom + l + o[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - l + o[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + o[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - l + o[0],
        top: t.scrollTop + o[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - l + o[0],
        top: t.scrollBottom - n.height + o[1]
      };
    case "right":
      return {
        left: t.scrollRight + l + o[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + o[1]
      };
    case "rt":
      return {
        left: t.scrollRight + l + o[0],
        top: t.scrollTop + o[1]
      };
    case "rb":
      return {
        left: t.scrollRight + l + o[0],
        top: t.scrollBottom - n.height + o[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, qs = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, Gs = (e, t, n, l, {
  offset: a = 0,
  translate: r = [0, 0],
  customStyle: o = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, c = Jt(e, n, l, {
    offset: a,
    translate: r
  });
  if (i) {
    const v = Ws(e, c, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: a,
      translate: r
    });
    c = v.popupPosition, s = v.position;
  }
  return {
    style: Xt({
      left: `${c.left}px`,
      top: `${c.top}px`
    }, o),
    position: s
  };
}, Us = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? Xt({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : Xt({
      left: `${r}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, l);
  }
  let a = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return a > n.height - 8 && (t.height > n.height ? a = n.height / 2 : a = n.height - 8), ["left", "lt", "lb"].includes(e) ? Xt({
    top: `${a}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, l) : Xt({
    top: `${a}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, l);
}, Ys = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Vo = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    Ys(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Qa = () => {
  const e = {}, t = m(), n = () => {
    const l = Wa(e.value);
    l !== t.value && (t.value = l);
  };
  return Ve(() => n()), ut(() => n()), {
    children: e,
    firstElement: t
  };
};
var Wl = z({
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
      firstElement: a
    } = Qa();
    let r;
    const o = (s) => {
      s && (r = new to((c) => {
        const u = c[0];
        t("resize", u);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return pe(a, (s) => {
      r && i(), s && o(s);
    }), Rt(() => {
      r && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function it(e, t) {
  const n = m(e[t]);
  return ut(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const Do = Symbol("ArcoTrigger"), Zs = 1e3, Xs = 5e3, Js = 1;
class Qs {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || Xs : Array.from(this.popupStack.popup).pop() || Zs) + Js, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const ol = new Qs();
function eu(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = m(0), a = () => {
    l.value = ol.add(e);
  }, r = () => {
    ol.delete(l.value, e);
  }, o = () => e === "dialog" ? ol.isLastDialog(l.value) : !1;
  return pe(() => t == null ? void 0 : t.value, (i) => {
    i ? a() : r();
  }, {
    immediate: !0
  }), n && (Ve(() => {
    a();
  }), Rt(() => {
    r();
  })), {
    zIndex: sn(l),
    open: a,
    close: r,
    isLastDialog: o
  };
}
const tu = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new to((r) => {
        const o = r[0];
        Ge(t) && t(o);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var nu = z({
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
const lu = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const a = m(e.value), r = m(), o = () => {
    const i = Oo(e.value), s = i ? e.value : n, c = i ?? (l ? document.documentElement : Oo(n));
    s !== a.value && (a.value = s), c !== r.value && (r.value = c);
  };
  return Ve(() => o()), pe(t, (i) => {
    a.value !== e.value && i && o();
  }), {
    teleportContainer: a,
    containerRef: r
  };
};
var ou = Object.defineProperty, au = Object.defineProperties, ru = Object.getOwnPropertyDescriptors, Ao = Object.getOwnPropertySymbols, iu = Object.prototype.hasOwnProperty, su = Object.prototype.propertyIsEnumerable, jo = (e, t, n) => t in e ? ou(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, uu = (e, t) => {
  for (var n in t || (t = {}))
    iu.call(t, n) && jo(e, n, t[n]);
  if (Ao)
    for (var n of Ao(t))
      su.call(t, n) && jo(e, n, t[n]);
  return e;
}, cu = (e, t) => au(e, ru(t));
const du = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var al = z({
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
      popupContainer: a
    } = _e(e), r = Y("trigger"), o = d(() => Ht(l, du)), i = Ue(Pt, void 0), s = d(() => [].concat(e.trigger)), c = /* @__PURE__ */ new Set(), u = Ue(Do, void 0), {
      children: v,
      firstElement: p
    } = Qa(), h = m(), y = m(e.defaultPopupVisible), b = m(e.position), w = m({}), N = m({}), I = m({}), S = m(), C = m({
      top: 0,
      left: 0
    });
    let E = null, _ = null;
    const g = d(() => {
      var k;
      return (k = e.popupVisible) != null ? k : y.value;
    }), {
      teleportContainer: j,
      containerRef: F
    } = lu({
      popupContainer: a,
      visible: g,
      documentContainer: !0
    }), {
      zIndex: L
    } = eu("popup", {
      visible: g
    });
    let O = 0, K = !1, R = !1;
    const Q = () => {
      O && (window.clearTimeout(O), O = 0);
    }, te = (k) => {
      if (e.alignPoint) {
        const {
          pageX: T,
          pageY: ee
        } = k;
        C.value = {
          top: ee,
          left: T
        };
      }
    }, oe = () => {
      if (!p.value || !h.value || !F.value)
        return;
      const k = F.value.getBoundingClientRect(), T = e.alignPoint ? {
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
      } : Lo(p.value, k), ee = () => Lo(h.value, k), Ye = ee(), {
        style: We,
        position: rt
      } = Gs(e.position, k, T, Ye, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (N.value = {
        transformOrigin: qs(rt)
      }), e.autoFitPopupMinWidth ? We.minWidth = `${T.width}px` : e.autoFitPopupWidth && (We.width = `${T.width}px`), b.value !== rt && (b.value = rt), w.value = We, e.showArrow && Fe(() => {
        I.value = Us(rt, T, ee(), {
          customStyle: e.arrowStyle
        });
      });
    }, x = (k, T) => {
      if (k === g.value && O === 0)
        return;
      const ee = () => {
        y.value = k, t("update:popupVisible", k), t("popupVisibleChange", k), k && Fe(() => {
          oe();
        });
      };
      k || (E = null, _ = null), T ? (Q(), k !== g.value && (O = window.setTimeout(ee, T))) : ee();
    }, q = (k) => {
      var T;
      (T = l.onClick) == null || T.call(l, k), !(e.disabled || g.value && !e.clickToClose) && (s.value.includes("click") ? (te(k), x(!g.value)) : s.value.includes("contextMenu") && g.value && x(!1));
    }, me = (k) => {
      var T;
      (T = l.onMouseenter) == null || T.call(l, k), !(e.disabled || !s.value.includes("hover")) && (te(k), x(!0, e.mouseEnterDelay));
    }, ne = (k) => {
      u == null || u.onMouseenter(k), me(k);
    }, ie = (k) => {
      var T;
      (T = l.onMouseleave) == null || T.call(l, k), !(e.disabled || !s.value.includes("hover")) && x(!1, e.mouseLeaveDelay);
    }, Se = (k) => {
      u == null || u.onMouseleave(k), ie(k);
    }, ge = (k) => {
      var T;
      (T = l.onFocusin) == null || T.call(l, k), !(e.disabled || !s.value.includes("focus")) && x(!0, e.focusDelay);
    }, ye = (k) => {
      var T;
      (T = l.onFocusout) == null || T.call(l, k), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && x(!1);
    }, se = (k) => {
      var T;
      (T = l.onContextmenu) == null || T.call(l, k), !(e.disabled || !s.value.includes("contextMenu") || g.value && !e.clickToClose) && (te(k), x(!g.value), k.preventDefault());
    };
    Et(Do, Oe({
      onMouseenter: ne,
      onMouseleave: Se,
      addChildRef: (k) => {
        c.add(k), u == null || u.addChildRef(k);
      },
      removeChildRef: (k) => {
        c.delete(k), u == null || u.removeChildRef(k);
      }
    }));
    const Be = () => {
      xn(document.documentElement, "mousedown", Te), K = !1;
    }, De = it(n, "content"), Me = d(() => {
      var k;
      return e.hideEmpty && hi((k = De.value) == null ? void 0 : k.call(De));
    }), Te = (k) => {
      var T, ee, Ye;
      if (!((T = p.value) != null && T.contains(k.target) || (ee = h.value) != null && ee.contains(k.target))) {
        for (const We of c)
          if ((Ye = We.value) != null && Ye.contains(k.target))
            return;
        Be(), x(!1);
      }
    }, Ze = (k, T) => {
      const [ee, Ye] = k, {
        scrollTop: We,
        scrollLeft: rt
      } = T;
      return Math.abs(We - ee) >= e.scrollToCloseDistance || Math.abs(rt - Ye) >= e.scrollToCloseDistance;
    }, W = Rl((k) => {
      if (g.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const T = k.target;
          E || (E = [T.scrollTop, T.scrollLeft]), Ze(E, T) ? x(!1) : oe();
        } else
          oe();
    }), P = () => {
      xn(window, "scroll", H), R = !1;
    }, H = Rl((k) => {
      const T = k.target.documentElement;
      _ || (_ = [T.scrollTop, T.scrollLeft]), Ze(_, T) && (x(!1), P());
    }), ue = () => {
      g.value && oe();
    }, we = () => {
      ue(), t("resize");
    }, Ee = (k) => {
      e.preventFocus && k.preventDefault();
    };
    u == null || u.addChildRef(h);
    const Je = d(() => g.value ? e.openedClass : void 0);
    let Ie;
    pe(g, (k) => {
      if (e.clickOutsideToClose && (!k && K ? Be() : k && !K && (Dt(document.documentElement, "mousedown", Te), K = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Dt(window, "scroll", H), R = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (k) {
          Ie = Vo(p.value);
          for (const T of Ie)
            T.addEventListener("scroll", W);
        } else if (Ie) {
          for (const T of Ie)
            T.removeEventListener("scroll", W);
          Ie = void 0;
        }
      }
      k && (_t.value = !0);
    }), pe(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      g.value && oe();
    });
    const {
      createResizeObserver: bt,
      destroyResizeObserver: Gt
    } = tu({
      elementRef: F,
      onResize: ue
    });
    Ve(() => {
      if (bt(), g.value && (oe(), e.clickOutsideToClose && !K && (Dt(document.documentElement, "mousedown", Te), K = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ie = Vo(p.value);
        for (const k of Ie)
          k.addEventListener("scroll", W);
      }
    }), ut(() => {
      g.value && oe();
    }), Tr(() => {
      x(!1);
    }), Rt(() => {
      if (u == null || u.removeChildRef(h), Gt(), K && Be(), R && P(), Ie) {
        for (const k of Ie)
          k.removeEventListener("scroll", W);
        Ie = void 0;
      }
    });
    const _t = m(g.value), ot = m(!1), Bt = () => {
      ot.value = !0;
    }, Ut = () => {
      ot.value = !1, g.value && t("show");
    }, B = () => {
      ot.value = !1, g.value || (_t.value = !1, t("hide"));
    };
    return () => {
      var k, T;
      return v.value = (T = (k = n.default) == null ? void 0 : k.call(n)) != null ? T : [], Ra(v.value, {
        class: Je.value,
        onClick: q,
        onMouseenter: me,
        onMouseleave: ie,
        onFocusin: ge,
        onFocusout: ye,
        onContextmenu: se
      }), f(Pe, null, [e.autoFixPosition ? f(Wl, {
        onResize: we
      }, {
        default: () => [v.value]
      }) : v.value, f(nu, null, {
        default: () => [f(Na, {
          to: j.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || g.value || _t.value) && !Me.value && f(Wl, {
            onResize: ue
          }, {
            default: () => [f("div", re({
              ref: h,
              class: [`${r}-popup`, `${r}-position-${b.value}`],
              style: cu(uu({}, w.value), {
                zIndex: L.value,
                pointerEvents: ot.value ? "none" : "auto"
              }),
              "trigger-placement": b.value,
              onMouseenter: ne,
              onMouseleave: Se,
              onMousedown: Ee
            }, o.value), [f(zn, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: Bt,
              onAfterEnter: Ut,
              onBeforeLeave: Bt,
              onAfterLeave: B
            }, {
              default: () => {
                var ee;
                return [ft(f("div", {
                  class: `${r}-popup-wrapper`,
                  style: N.value
                }, [f("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ee = n.content) == null ? void 0 : ee.call(n)]), e.showArrow && f("div", {
                  ref: S,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: I.value
                }, null)]), [[vt, g.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const on = Object.assign(al, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + al.name, al);
  }
}), fu = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), vu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], pu = /* @__PURE__ */ A("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), hu = [pu];
function mu(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, hu, 14, vu);
}
var rl = /* @__PURE__ */ ce(fu, [["render", mu]]);
const yu = Object.assign(rl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + rl.name, rl);
  }
});
var il = z({
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
      t: a
    } = eo(), r = Ue(Pt, void 0);
    return () => {
      var o, i, s, c;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : f("div", re({
        class: l
      }, n), [f("div", {
        class: `${l}-image`
      }, [(i = (o = t.image) == null ? void 0 : o.call(t)) != null ? i : e.imgSrc ? f("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : f(yu, null, null)]), f("div", {
        class: `${l}-description`
      }, [(c = (s = t.default) == null ? void 0 : s.call(t)) != null ? c : e.description || a("empty.description")])]);
    };
  }
});
const gu = Object.assign(il, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + il.name, il);
  }
}), bu = 5;
var _u = z({
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
      }, [Array(bu).fill(1).map((l, a) => f("div", {
        class: `${t}-item`,
        key: a,
        style: n
      }, null))]);
    };
  }
}), sl = z({
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
    const n = Y("spin"), l = Ue(Pt, void 0), a = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = Vt(t.icon());
        if (i)
          return Tn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(_u, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : f(pt, {
        spin: !0,
        size: e.size
      }, null);
    }, o = () => {
      var i, s, c;
      const u = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, v = !!((i = t.tip) != null ? i : e.tip);
      return f(Pe, null, [!e.hideIcon && f("div", {
        class: `${n}-icon`,
        style: u
      }, [r()]), v && f("div", {
        class: `${n}-tip`
      }, [(c = (s = t.tip) == null ? void 0 : s.call(t)) != null ? c : e.tip])]);
    };
    return () => f("div", {
      class: a.value
    }, [t.default ? f(Pe, null, [t.default(), e.loading && f("div", {
      class: `${n}-mask`
    }, [f("div", {
      class: `${n}-mask-icon`
    }, [o()])])]) : o()]);
  }
});
const Cu = Object.assign(sl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + sl.name, sl);
  }
}), $u = z({
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
    const n = Y("scrollbar"), l = m(!1), a = m(), r = m(), o = d(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = m(0), s = m(!1), c = m(0), u = d(() => {
      var I, S;
      return {
        [o.value.size]: `${(S = (I = e.data) == null ? void 0 : I.thumbSize) != null ? S : 0}px`,
        [o.value.direction]: `${i.value}px`
      };
    }), v = (I) => {
      I.preventDefault(), r.value && (c.value = I[o.value.client] - r.value.getBoundingClientRect()[o.value.direction], s.value = !0, Dt(window, "mousemove", y), Dt(window, "mouseup", b), Dt(window, "contextmenu", b));
    }, p = (I) => {
      var S, C, E, _;
      if (I.preventDefault(), r.value) {
        const g = h(I[o.value.client] > r.value.getBoundingClientRect()[o.value.direction] ? i.value + ((C = (S = e.data) == null ? void 0 : S.thumbSize) != null ? C : 0) : i.value - ((_ = (E = e.data) == null ? void 0 : E.thumbSize) != null ? _ : 0));
        g !== i.value && (i.value = g, t("scroll", g));
      }
    }, h = (I) => I < 0 ? 0 : e.data && I > e.data.max ? e.data.max : I, y = (I) => {
      if (a.value && r.value) {
        const S = h(I[o.value.client] - a.value.getBoundingClientRect()[o.value.direction] - c.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, b = () => {
      s.value = !1, xn(window, "mousemove", y), xn(window, "mouseup", b);
    }, w = (I) => {
      s.value || (I = h(I), I !== i.value && (i.value = I));
    }, N = d(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: a,
      thumbRef: r,
      prefixCls: n,
      thumbCls: N,
      thumbStyle: u,
      handleThumbMouseDown: v,
      handleTrackClick: p,
      setOffset: w
    };
  }
});
function ku(e, t, n, l, a, r) {
  return $(), X(zn, null, {
    default: Z(() => [A("div", {
      ref: "trackRef",
      class: D([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = at((...o) => e.handleTrackClick && e.handleTrackClick(...o), ["self"]))
    }, [A("div", {
      ref: "thumbRef",
      class: D(e.thumbCls),
      style: de(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...o) => e.handleThumbMouseDown && e.handleThumbMouseDown(...o))
    }, [A("div", {
      class: D(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var wu = /* @__PURE__ */ ce($u, [["render", ku]]);
const Fo = 20, mn = 15, Su = z({
  name: "Scrollbar",
  components: {
    ResizeObserver: Wl,
    Thumb: wu
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
    const n = Y("scrollbar"), l = m(), a = m(), r = m(), o = m(), i = m(), s = m(!1), c = m(!1), u = d(() => s.value && !e.disableHorizontal), v = d(() => c.value && !e.disableVertical), p = m(!1), h = () => {
      var C, E, _, g, j, F;
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
        s.value = Q > L, c.value = te > O, p.value = u.value && v.value;
        const q = e.type === "embed" && p.value ? K - mn : K, me = e.type === "embed" && p.value ? R - mn : R, ne = Math.round(q / Math.min(Q / L, q / Fo)), ie = q - ne, Se = (Q - L) / ie, ge = Math.round(me / Math.min(te / O, me / Fo)), ye = me - ge, se = (te - O) / ye;
        if (a.value = {
          ratio: Se,
          thumbSize: ne,
          max: ie
        }, r.value = {
          ratio: se,
          thumbSize: ge,
          max: ye
        }, oe > 0) {
          const ke = Math.round(oe / ((E = (C = r.value) == null ? void 0 : C.ratio) != null ? E : 1));
          (_ = i.value) == null || _.setOffset(ke);
        }
        if (x > 0) {
          const ke = Math.round(x / ((j = (g = r.value) == null ? void 0 : g.ratio) != null ? j : 1));
          (F = o.value) == null || F.setOffset(ke);
        }
      }
    };
    Ve(() => {
      h();
    });
    const y = () => {
      h();
    }, b = (C) => {
      var E, _, g, j, F, L;
      if (l.value) {
        if (u.value && !e.disableHorizontal) {
          const O = Math.round(l.value.scrollLeft / ((_ = (E = a.value) == null ? void 0 : E.ratio) != null ? _ : 1));
          (g = o.value) == null || g.setOffset(O);
        }
        if (v.value && !e.disableVertical) {
          const O = Math.round(l.value.scrollTop / ((F = (j = r.value) == null ? void 0 : j.ratio) != null ? F : 1));
          (L = i.value) == null || L.setOffset(O);
        }
      }
      t("scroll", C);
    }, w = (C) => {
      var E, _;
      l.value && l.value.scrollTo({
        left: C * ((_ = (E = a.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, N = (C) => {
      var E, _;
      l.value && l.value.scrollTo({
        top: C * ((_ = (E = r.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, I = d(() => {
      const C = {};
      return e.type === "track" && (u.value && (C.paddingBottom = `${mn}px`), v.value && (C.paddingRight = `${mn}px`)), [C, e.outerStyle];
    }), S = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: p.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: S,
      style: I,
      containerRef: l,
      horizontalThumbRef: o,
      verticalThumbRef: i,
      horizontalData: a,
      verticalData: r,
      isBoth: p,
      hasHorizontalScrollbar: u,
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
function Eu(e, t, n, l, a, r) {
  const o = ve("ResizeObserver"), i = ve("thumb");
  return $(), V("div", {
    class: D(e.cls),
    style: de(e.style)
  }, [f(o, {
    onResize: e.handleResize
  }, {
    default: Z(() => [A("div", re({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(o, {
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
var ul = /* @__PURE__ */ ce(Su, [["render", Eu]]);
const er = Object.assign(ul, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + ul.name, ul);
  }
}), Ou = (e) => {
  const t = m(), n = () => Va(t.value) ? t.value.$refs[e] : t.value, l = m();
  return Ve(() => {
    l.value = n();
  }), pe([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var xu = Object.defineProperty, Mo = Object.getOwnPropertySymbols, Pu = Object.prototype.hasOwnProperty, Bu = Object.prototype.propertyIsEnumerable, Ko = (e, t, n) => t in e ? xu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Iu = (e, t) => {
  for (var n in t || (t = {}))
    Pu.call(t, n) && Ko(e, n, t[n]);
  if (Mo)
    for (var n of Mo(t))
      Bu.call(t, n) && Ko(e, n, t[n]);
  return e;
};
const Tu = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return Iu({
        type: "embed"
      }, jt(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, zu = z({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: er,
    Empty: gu,
    Spin: Cu
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
    var l, a, r;
    const {
      scrollbar: o
    } = _e(e), i = Y("select-dropdown"), s = Ue(Pt, void 0), c = (r = (a = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : a.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: u,
      elementRef: v
    } = Ou("containerRef"), {
      displayScrollbar: p,
      scrollbarProps: h
    } = Tu(o), y = (w) => {
      const {
        scrollTop: N,
        scrollHeight: I,
        offsetHeight: S
      } = w.target;
      I - (N + S) <= e.bottomOffset && t("reachBottom", w), t("scroll", w);
    }, b = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: c,
      cls: b,
      wrapperRef: v,
      wrapperComRef: u,
      handleScroll: y,
      displayScrollbar: p,
      scrollbarProps: h
    };
  }
});
function Nu(e, t, n, l, a, r) {
  const o = ve("spin");
  return $(), V("div", {
    class: D(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? ($(), V("div", {
    key: 0,
    class: D(`${e.prefixCls}-header`)
  }, [le(e.$slots, "header")], 2)) : he("v-if", !0), e.loading ? ($(), X(o, {
    key: 1,
    class: D(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? ($(), V("div", {
    key: 2,
    class: D(`${e.prefixCls}-empty`)
  }, [le(e.$slots, "empty", {}, () => [($(), X(Lt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : he("v-if", !0), e.virtualList && !e.loading && !e.empty ? le(e.$slots, "virtual-list", {
    key: 3
  }) : he("v-if", !0), e.virtualList ? he("v-if", !0) : ft(($(), X(Lt(e.displayScrollbar ? "ScrollbarComponent" : "div"), re({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: Z(() => [A("ul", {
      class: D(`${e.prefixCls}-list`)
    }, [le(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[vt, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? ($(), V("div", {
    key: 5,
    class: D(`${e.prefixCls}-footer`)
  }, [le(e.$slots, "footer")], 2)) : he("v-if", !0)], 2);
}
var Lu = /* @__PURE__ */ ce(zu, [["render", Nu]]), Ro = z({
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
const tr = Symbol("ArcoCheckboxGroup");
var _n = z({
  name: "Checkbox",
  components: {
    IconCheck: Ro,
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
      modelValue: a
    } = _e(e), r = Y("checkbox"), o = m(), i = e.uninjectGroupContext ? void 0 : Ue(tr, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: c,
      eventHandlers: u
    } = mt({
      disabled: l
    }), v = m(e.defaultChecked), p = d(() => {
      var C;
      return s ? i == null ? void 0 : i.computedValue : (C = e.modelValue) != null ? C : v.value;
    }), h = d(() => {
      var C;
      return Ae(p.value) ? p.value.includes((C = e.value) != null ? C : !0) : p.value;
    }), y = d(() => (i == null ? void 0 : i.disabled) || (c == null ? void 0 : c.value) || !h.value && (i == null ? void 0 : i.isMaxed)), b = (C) => {
      C.stopPropagation();
    }, w = (C) => {
      var E, _, g, j;
      const {
        checked: F
      } = C.target;
      let L = F;
      if (Ae(p.value)) {
        const O = new Set(p.value);
        F ? O.add((E = e.value) != null ? E : !0) : O.delete((_ = e.value) != null ? _ : !0), L = Array.from(O);
      }
      v.value = F, s && Ae(L) ? i == null || i.handleChange(L, C) : (t("update:modelValue", L), t("change", L, C), (j = (g = u.value) == null ? void 0 : g.onChange) == null || j.call(g, C)), Fe(() => {
        o.value && o.value.checked !== h.value && (o.value.checked = h.value);
      });
    }, N = d(() => [r, {
      [`${r}-checked`]: h.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: y.value
    }]), I = (C) => {
      var E, _;
      (_ = (E = u.value) == null ? void 0 : E.onFocus) == null || _.call(E, C);
    }, S = (C) => {
      var E, _;
      (_ = (E = u.value) == null ? void 0 : E.onBlur) == null || _.call(E, C);
    };
    return pe(a, (C) => {
      (Ke(C) || Ln(C)) && (v.value = !1);
    }), pe(p, (C) => {
      var E;
      let _;
      Ae(C) ? _ = C.includes((E = e.value) != null ? E : !0) : _ = C, v.value !== _ && (v.value = _), o.value && o.value.checked !== _ && (o.value.checked = _);
    }), () => {
      var C, E, _, g;
      return f("label", {
        "aria-disabled": y.value,
        class: N.value
      }, [f("input", {
        ref: o,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${r}-target`,
        disabled: y.value,
        onClick: b,
        onChange: w,
        onFocus: I,
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
        }, [h.value && f(Ro, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && f("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), cl = z({
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
    } = _e(e), a = Y("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: o
    } = mt({
      disabled: l
    }), i = m(e.defaultValue), s = d(() => Ae(e.modelValue) ? e.modelValue : i.value), c = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), u = d(() => {
      var y;
      return ((y = e.options) != null ? y : []).map((b) => xt(b) || $e(b) ? {
        label: b,
        value: b
      } : b);
    });
    Et(tr, Oe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: c,
      slots: n,
      handleChange: (y, b) => {
        var w, N;
        i.value = y, t("update:modelValue", y), t("change", y, b), (N = (w = o.value) == null ? void 0 : w.onChange) == null || N.call(w, b);
      }
    }));
    const p = d(() => [a, `${a}-direction-${e.direction}`]);
    pe(() => e.modelValue, (y) => {
      Ae(y) ? i.value = [...y] : i.value = [];
    });
    const h = () => u.value.map((y) => {
      const b = s.value.includes(y.value);
      return f(_n, {
        key: y.value,
        value: y.value,
        disabled: y.disabled || !b && c.value,
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
      }, [u.value.length > 0 ? h() : (y = n.default) == null ? void 0 : y.call(n)]);
    };
  }
});
const nr = Object.assign(_n, {
  Group: cl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + _n.name, _n), e.component(n + cl.name, cl);
  }
}), lr = Symbol("ArcoSelectContext");
var Vu = Object.defineProperty, Du = Object.defineProperties, Au = Object.getOwnPropertyDescriptors, Ho = Object.getOwnPropertySymbols, ju = Object.prototype.hasOwnProperty, Fu = Object.prototype.propertyIsEnumerable, Wo = (e, t, n) => t in e ? Vu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, co = (e, t) => {
  for (var n in t || (t = {}))
    ju.call(t, n) && Wo(e, n, t[n]);
  if (Ho)
    for (var n of Ho(t))
      Fu.call(t, n) && Wo(e, n, t[n]);
  return e;
}, or = (e, t) => Du(e, Au(t));
const Mu = (e) => Le(e) && "isGroup" in e, ar = (e) => Le(e) && "isGroup" in e, Ku = (e, t = "value") => String(Le(e) ? e[t] : e), an = (e, t = "value") => Le(e) ? `__arco__option__object__${e[t]}` : e || $e(e) || xt(e) || jt(e) ? `__arco__option__${typeof e}-${e}` : "", Ru = (e) => e.has("__arco__option__string-"), Hu = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: a = -1
}) => {
  var r;
  if (Le(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: a,
      key: an(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : Ku(i, t),
      render: e[n.render],
      disabled: !!e[n.disabled],
      tagProps: e[n.tagProps]
    };
  }
  const o = {
    value: e,
    label: String(e),
    disabled: !1
  };
  return co({
    raw: o,
    index: a,
    key: an(e, t),
    origin: l
  }, o);
}, ql = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: a
}) => {
  var r;
  const o = [];
  for (const i of e)
    if (Mu(i)) {
      const s = ql((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: a
      });
      s.length > 0 && o.push(or(co({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = Hu(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      o.push(s), a.get(s.key) || a.set(s.key, s);
    }
  return o;
}, qo = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (a) => {
    var r;
    const o = [];
    for (const i of a)
      if (ar(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && o.push(or(co({}, i), {
          options: s
        }));
      } else
        Fn(i, {
          inputValue: t,
          filterOption: n
        }) && o.push(i);
    return o;
  };
  return l(e);
}, Fn = (e, {
  inputValue: t,
  filterOption: n
}) => Ge(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, Wu = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!fo(e[n], t[n]))
      return !1;
  return !0;
}, qu = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!fo(e[l], t[l]))
      return !1;
  return !0;
}, fo = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? Wu(e, t) : n === "[object Array]" ? qu(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, Gu = z({
  name: "Option",
  components: {
    Checkbox: nr
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
    } = _e(e), a = Y("select-option"), r = Ue(lr, void 0), o = ht(), i = m(), s = m(n.value);
    pe(n, (_, g) => {
      fo(_, g) || (s.value = _);
    });
    const c = m(""), u = d(() => {
      var _, g;
      return (g = (_ = e.value) != null ? _ : e.label) != null ? g : c.value;
    }), v = d(() => {
      var _;
      return (_ = e.label) != null ? _ : c.value;
    }), p = d(() => an(u.value, r == null ? void 0 : r.valueKey)), h = d(() => {
      var _;
      return (_ = r == null ? void 0 : r.component) != null ? _ : "li";
    }), y = () => {
      var _;
      if (!e.label && i.value) {
        const g = (_ = i.value.textContent) != null ? _ : "";
        c.value !== g && (c.value = g);
      }
    };
    Ve(() => y()), ut(() => y());
    const b = d(() => {
      var _;
      return (_ = r == null ? void 0 : r.valueKeys.includes(p.value)) != null ? _ : !1;
    }), w = d(() => (r == null ? void 0 : r.activeKey) === p.value);
    let N = m(!0);
    if (!e.internal) {
      const _ = Oe({
        raw: {
          value: u,
          label: v,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: l,
        key: p,
        origin: "slot",
        value: u,
        label: v,
        disabled: t,
        tagProps: s
      });
      N = d(() => Fn(_, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), o && (r == null || r.addSlotOptionInfo(o.uid, _)), Rt(() => {
        o && (r == null || r.removeSlotOptionInfo(o.uid));
      });
    }
    const I = (_) => {
      e.disabled || r == null || r.onSelect(p.value, _);
    }, S = () => {
      e.disabled || r == null || r.setActiveKey(p.value);
    }, C = () => {
      e.disabled || r == null || r.setActiveKey();
    }, E = d(() => [a, {
      [`${a}-disabled`]: e.disabled,
      [`${a}-selected`]: b.value,
      [`${a}-active`]: w.value,
      [`${a}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: a,
      cls: E,
      selectCtx: r,
      itemRef: i,
      component: h,
      isSelected: b,
      isValid: N,
      handleClick: I,
      handleMouseEnter: S,
      handleMouseLeave: C
    };
  }
});
function Uu(e, t, n, l, a, r) {
  const o = ve("checkbox");
  return ft(($(), X(Lt(e.component), {
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
    }, [le(e.$slots, "icon")], 2)) : he("v-if", !0), e.selectCtx && e.selectCtx.multiple ? ($(), X(o, {
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
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[vt, e.isValid]]);
}
var Cn = /* @__PURE__ */ ce(Gu, [["render", Uu]]), Yu = Object.defineProperty, Zu = Object.defineProperties, Xu = Object.getOwnPropertyDescriptors, Go = Object.getOwnPropertySymbols, Ju = Object.prototype.hasOwnProperty, Qu = Object.prototype.propertyIsEnumerable, Uo = (e, t, n) => t in e ? Yu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dl = (e, t) => {
  for (var n in t || (t = {}))
    Ju.call(t, n) && Uo(e, n, t[n]);
  if (Go)
    for (var n of Go(t))
      Qu.call(t, n) && Uo(e, n, t[n]);
  return e;
}, ec = (e, t) => Zu(e, Xu(t));
const tc = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, nc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: a,
  valueKey: r,
  fieldNames: o
}) => {
  const i = d(() => dl(dl({}, tc), o == null ? void 0 : o.value)), s = Oe(/* @__PURE__ */ new Map()), c = d(() => Array.from(s.values()).sort((S, C) => $e(S.index) && $e(C.index) ? S.index - C.index : 0)), u = d(() => {
    var S, C;
    const E = /* @__PURE__ */ new Map();
    return {
      optionInfos: ql((S = e == null ? void 0 : e.value) != null ? S : [], {
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
      optionInfos: ql((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: (C = r == null ? void 0 : r.value) != null ? C : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: E
      }),
      optionInfoMap: E
    };
  }), p = Oe(/* @__PURE__ */ new Map());
  pe([c, e ?? m([]), t ?? m([]), r ?? m("value")], () => {
    p.clear(), c.value.forEach((S, C) => {
      p.set(S.key, ec(dl({}, S), {
        index: C
      }));
    }), u.value.optionInfoMap.forEach((S) => {
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
    const C = qo(u.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((S = a == null ? void 0 : a.value) == null || S) && C.push(...qo(v.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), C;
  }), y = d(() => Array.from(p.values()).filter((S) => S.origin === "extraOptions" && (a == null ? void 0 : a.value) === !1 ? !1 : Fn(S, {
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
}, yn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Yo = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), lc = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const a = xt(l) ? {
      key: l
    } : l;
    t[Yo(a)] = n;
  }), (n) => {
    const l = Yo({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), a = t[l];
    a && (n.stopPropagation(), a(n));
  };
}, oc = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: l,
  filterOption: a,
  showExtraOptions: r,
  component: o,
  valueKey: i,
  fieldNames: s,
  loading: c,
  popupVisible: u,
  valueKeys: v,
  dropdownRef: p,
  optionRefs: h,
  virtualListRef: y,
  onSelect: b,
  onPopupVisibleChange: w,
  enterToOpen: N = !0,
  defaultActiveFirstOption: I
}) => {
  const {
    validOptions: S,
    optionInfoMap: C,
    validOptionInfos: E,
    enabledOptionKeys: _,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: F
  } = nc({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: a,
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
    const x = _.value.indexOf(L.value), q = (oe + x + (te === "up" ? -1 : 1)) % oe;
    return _.value[q];
  }, R = (te) => {
    var oe, x;
    y != null && y.value && y.value.scrollTo({
      key: te
    });
    const q = C.get(te), me = (oe = p == null ? void 0 : p.value) == null ? void 0 : oe.wrapperRef, ne = (x = h == null ? void 0 : h.value[te]) != null ? x : q == null ? void 0 : q.ref;
    if (!me || !ne || me.scrollHeight === me.offsetHeight)
      return;
    const ie = gi(ne, me), Se = me.scrollTop;
    ie.top < 0 ? me.scrollTo(0, Se + ie.top) : ie.bottom < 0 && me.scrollTo(0, Se - ie.bottom);
  };
  pe(u, (te) => {
    var oe;
    if (te) {
      const x = v.value[v.value.length - 1];
      let q = (oe = I == null ? void 0 : I.value) == null || oe ? _.value[0] : void 0;
      _.value.includes(x) && (q = x), q !== L.value && (L.value = q), Fe(() => {
        L.value && R(L.value);
      });
    }
  });
  const Q = lc(/* @__PURE__ */ new Map([[yn.ENTER, (te) => {
    !(c != null && c.value) && !te.isComposing && (u.value ? L.value && (b(L.value, te), te.preventDefault()) : N && (w(!0), te.preventDefault()));
  }], [yn.ESC, (te) => {
    u.value && (w(!1), te.preventDefault());
  }], [yn.ARROW_DOWN, (te) => {
    if (u.value) {
      const oe = K("down");
      oe && (L.value = oe, R(oe)), te.preventDefault();
    }
  }], [yn.ARROW_UP, (te) => {
    if (u.value) {
      const oe = K("up");
      oe && (L.value = oe, R(oe)), te.preventDefault();
    }
  }]]));
  return Et(lr, Oe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: a,
    component: o,
    valueKeys: v,
    activeKey: L,
    setActiveKey: O,
    onSelect: b,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: F
  })), {
    validOptions: S,
    optionInfoMap: C,
    validOptionInfos: E,
    enabledOptionKeys: _,
    activeKey: L,
    setActiveKey: O,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: F,
    getNextActiveKey: K,
    scrollIntoView: R,
    handleKeyDown: Q
  };
}, ac = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: a
}) => {
  const r = m(0), o = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = m(0), c = d(() => {
    const g = s.value + a.value * 3;
    return g > i.value ? i.value : g;
  }), u = d(() => {
    const g = i.value - a.value * 3;
    return g < 0 ? 0 : g;
  }), v = (g) => {
    g < 0 ? s.value = 0 : g > u.value ? s.value = u.value : s.value = g;
  }, p = m(n.value), h = d(() => l.value !== 30 ? l.value : r.value || l.value), y = (g, j) => {
    o.set(g, j);
  }, b = (g) => {
    var j;
    if (p.value)
      return h.value;
    const F = e.value[g];
    return (j = o.get(F)) != null ? j : h.value;
  }, w = (g) => o.has(g);
  Ve(() => {
    const g = Array.from(o.values()).reduce((j, F) => j + F, 0);
    g > 0 && (r.value = g / o.size);
  });
  const N = (g) => p.value ? h.value * g : I(0, g), I = (g, j) => {
    let F = 0;
    for (let L = g; L < j; L++)
      F += b(L);
    return F;
  }, S = d(() => p.value ? h.value * s.value : I(0, s.value)), C = (g) => {
    const j = g >= S.value;
    let F = Math.abs(g - S.value);
    const L = j ? s.value : s.value - 1;
    let O = 0;
    for (; F > 0; )
      F -= b(L + O), j ? O++ : O--;
    return O;
  }, E = (g) => {
    const j = C(g), F = s.value + j - a.value;
    return F < 0 ? 0 : F > u.value ? u.value : F;
  }, _ = d(() => p.value ? h.value * (i.value - c.value) : I(c.value, i.value));
  return {
    frontPadding: S,
    behindPadding: _,
    start: s,
    end: c,
    getStartByScroll: E,
    setItemSize: y,
    hasItemSize: w,
    setStart: v,
    getScrollOffset: N
  };
};
var rc = z({
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
    const l = (n = ht()) == null ? void 0 : n.vnode.key, a = m(), r = () => {
      var o, i, s, c;
      const u = (i = (o = a.value) == null ? void 0 : o.$el) != null ? i : a.value, v = (c = (s = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : s.call(u).height) != null ? c : u == null ? void 0 : u.offsetHeight;
      v && e.setItemSize(l, v);
    };
    return Ve(() => r()), Rt(() => r()), () => {
      var o;
      const i = Vt((o = t.default) == null ? void 0 : o.call(t));
      return i ? Tn(i, {
        ref: a
      }, !0) : null;
    };
  }
}), ic = Object.defineProperty, Zo = Object.getOwnPropertySymbols, sc = Object.prototype.hasOwnProperty, uc = Object.prototype.propertyIsEnumerable, Xo = (e, t, n) => t in e ? ic(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, cc = (e, t) => {
  for (var n in t || (t = {}))
    sc.call(t, n) && Xo(e, n, t[n]);
  if (Zo)
    for (var n of Zo(t))
      uc.call(t, n) && Xo(e, n, t[n]);
  return e;
};
const dc = z({
  name: "VirtualList",
  components: {
    VirtualListItem: rc
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
      fixedSize: a,
      estimatedSize: r,
      buffer: o,
      height: i
    } = _e(e), s = Y("virtual-list"), c = d(() => Le(e.component) ? cc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), u = m(), v = m(), p = d(() => ({
      height: $e(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((L, O) => {
      var K;
      return (K = L[l.value]) != null ? K : O;
    })), {
      frontPadding: y,
      behindPadding: b,
      start: w,
      end: N,
      getStartByScroll: I,
      setItemSize: S,
      hasItemSize: C,
      setStart: E,
      getScrollOffset: _
    } = ac({
      dataKeys: h,
      contentRef: v,
      fixedSize: a,
      estimatedSize: r,
      buffer: o
    }), g = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(w.value, N.value)), j = (L) => {
      const {
        scrollTop: O,
        scrollHeight: K,
        offsetHeight: R
      } = L.target, Q = I(O);
      Q !== w.value && (E(Q), Fe(() => {
        F(O);
      })), t("scroll", L), Math.floor(K - (O + R)) <= 0 && t("reachBottom", L);
    }, F = (L) => {
      var O, K;
      if (u.value)
        if ($e(L))
          u.value.scrollTop = L;
        else {
          const R = (K = L.index) != null ? K : h.value.indexOf((O = L.key) != null ? O : "");
          E(R - o.value), u.value.scrollTop = _(R), Fe(() => {
            if (u.value) {
              const Q = _(R);
              Q !== u.value.scrollTop && (u.value.scrollTop = Q);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: u,
      contentRef: v,
      frontPadding: y,
      currentList: g,
      behindPadding: b,
      onScroll: j,
      setItemSize: S,
      hasItemSize: C,
      start: w,
      scrollTo: F,
      style: p,
      mergedComponent: c
    };
  }
});
function fc(e, t, n, l, a, r) {
  const o = ve("VirtualListItem");
  return $(), X(Lt(e.mergedComponent.container), {
    ref: "containerRef",
    class: D(e.prefixCls),
    style: de(e.style),
    onScroll: e.onScroll
  }, {
    default: Z(() => [($(), X(Lt(e.mergedComponent.list), re(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: Z(() => [($(), X(Lt(e.mergedComponent.content), re({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: Z(() => [($(!0), V(Pe, null, wt(e.currentList, (i, s) => {
          var c;
          return $(), X(o, {
            key: (c = i[e.itemKey]) != null ? c : e.start + s,
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
var rr = /* @__PURE__ */ ce(dc, [["render", fc]]);
const vc = z({
  name: "Popover",
  components: {
    Trigger: on
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
    const n = Y("popover"), l = m(e.defaultPopupVisible), a = d(() => {
      var s;
      return (s = e.popupVisible) != null ? s : l.value;
    }), r = (s) => {
      l.value = s, t("update:popupVisible", s), t("popupVisibleChange", s);
    }, o = d(() => [`${n}-popup-content`, e.contentClass]), i = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      computedPopupVisible: a,
      contentCls: o,
      arrowCls: i,
      handlePopupVisibleChange: r
    };
  }
});
function pc(e, t, n, l, a, r) {
  const o = ve("trigger");
  return $(), X(o, {
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
    content: Z(() => [A("div", {
      class: D(`${e.prefixCls}-title`)
    }, [le(e.$slots, "title", {}, () => [qe(je(e.title), 1)])], 2), A("div", {
      class: D(`${e.prefixCls}-content`)
    }, [le(e.$slots, "content", {}, () => [qe(je(e.content), 1)])], 2)]),
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var fl = /* @__PURE__ */ ce(vc, [["render", pc]]);
const hc = Object.assign(fl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + fl.name, fl);
  }
});
var mc = Object.defineProperty, Jo = Object.getOwnPropertySymbols, yc = Object.prototype.hasOwnProperty, gc = Object.prototype.propertyIsEnumerable, Qo = (e, t, n) => t in e ? mc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, vl = (e, t) => {
  for (var n in t || (t = {}))
    yc.call(t, n) && Qo(e, n, t[n]);
  if (Jo)
    for (var n of Jo(t))
      gc.call(t, n) && Qo(e, n, t[n]);
  return e;
};
const bc = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], _c = ["normal", "processing", "success", "warning", "danger"];
var pl = z({
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
      validator: (e) => _c.includes(e)
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
      dotStyle: a,
      offset: r,
      text: o,
      dot: i,
      maxCount: s,
      count: c
    } = _e(e), u = Y("badge"), v = Cc(u, n == null ? void 0 : n.value, t == null ? void 0 : t.default), p = d(() => {
      const y = vl({}, (a == null ? void 0 : a.value) || {}), [b, w] = (r == null ? void 0 : r.value) || [];
      b && (y.marginRight = `${-b}px`), w && (y.marginTop = `${w}px`);
      const N = !(l != null && l.value) || bc.includes(l == null ? void 0 : l.value) ? {} : {
        backgroundColor: l.value
      };
      return {
        mergedStyle: vl(vl({}, N), y),
        computedDotStyle: y,
        computedColorStyle: N
      };
    }), h = () => {
      const y = o == null ? void 0 : o.value, b = l == null ? void 0 : l.value, w = n == null ? void 0 : n.value, N = i == null ? void 0 : i.value, I = Number(c == null ? void 0 : c.value), S = (c == null ? void 0 : c.value) != null, {
        computedDotStyle: C,
        mergedStyle: E
      } = p.value;
      return t.content ? f("span", {
        class: `${u}-custom-dot`,
        style: C
      }, [t.content()]) : y && !b && !w ? f("span", {
        class: `${u}-text`,
        style: C
      }, [y]) : w || b && !S ? f("span", {
        class: `${u}-status-wrapper`
      }, [f("span", {
        class: [`${u}-status-dot`, {
          [`${u}-status-${w}`]: w,
          [`${u}-color-${b}`]: b
        }],
        style: E
      }, null), y && f("span", {
        class: `${u}-status-text`
      }, [y])]) : (N || b) && I > 0 ? f("span", {
        class: [`${u}-dot`, {
          [`${u}-color-${b}`]: b
        }],
        style: E
      }, null) : I === 0 ? null : f("span", {
        class: `${u}-number`,
        style: E
      }, [f("span", null, [s.value && I > s.value ? `${s.value}+` : I])]);
    };
    return () => f("span", {
      class: v.value
    }, [t.default && t.default(), h()]);
  }
});
const Cc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), $c = Object.assign(pl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + pl.name, pl);
  }
}), kc = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), wc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sc = /* @__PURE__ */ A("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Ec = [Sc];
function Oc(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Ec, 14, wc);
}
var hl = /* @__PURE__ */ ce(kc, [["render", Oc]]);
const ir = Object.assign(hl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + hl.name, hl);
  }
}), xc = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const a = m((l = t == null ? void 0 : t.value) != null ? l : !1), r = d(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : a.value;
  }), o = (i) => {
    i !== r.value && (a.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return pe(r, (i) => {
    a.value !== i && (a.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: o
  };
}, Pc = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Bc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ic = /* @__PURE__ */ A("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Tc = [Ic];
function zc(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Tc, 14, Bc);
}
var ml = /* @__PURE__ */ ce(Pc, [["render", zc]]);
const Nc = Object.assign(ml, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ml.name, ml);
  }
}), Lc = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: a = "update:modelValue",
  eventHandlers: r
}) => {
  var o;
  const i = m(), s = m((o = e == null ? void 0 : e.value) != null ? o : ""), c = m(!1), u = m(!1), v = m("");
  let p;
  const h = d(() => {
    var _;
    return (_ = t == null ? void 0 : t.value) != null ? _ : s.value;
  }), y = (_, g) => {
    s.value = _, n(a, _), n(l, _, g);
  }, b = (_) => {
    const {
      value: g
    } = _.target;
    u.value || (y(g, _), Fe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, w = (_) => {
    l === "input" && h.value !== p && (p = h.value, n("change", h.value, _));
  }, N = (_) => {
    var g;
    const {
      value: j
    } = _.target;
    _.type === "compositionend" ? (u.value = !1, v.value = "", y(j, _), Fe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (u.value = !0, v.value = h.value + ((g = _.data) != null ? g : ""));
  }, I = (_) => {
    var g, j;
    c.value = !0, p = h.value, n("focus", _), (j = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onFocus) == null || j.call(g, _);
  }, S = (_) => {
    var g, j;
    c.value = !1, n("blur", _), (j = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onBlur) == null || j.call(g, _), w(_);
  }, C = (_) => {
    const g = _.key || _.code;
    !u.value && g === so.key && (n("pressEnter", _), w(_));
  }, E = (_) => {
    i.value && _.target !== i.value && (_.preventDefault(), i.value.focus());
  };
  return pe(h, (_) => {
    i.value && _ !== i.value.value && (i.value.value = _);
  }), {
    inputRef: i,
    _value: s,
    _focused: c,
    isComposition: u,
    compositionValue: v,
    computedValue: h,
    handleInput: b,
    handleComposition: N,
    handleFocus: I,
    handleBlur: S,
    handleKeyDown: C,
    handleMousedown: E
  };
};
var Vc = z({
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
    var a;
    const {
      size: r,
      disabled: o,
      error: i,
      inputValue: s,
      uninjectFormItemContext: c
    } = _e(e), u = (a = e.baseCls) != null ? a : Y("input-label"), {
      mergedSize: v,
      mergedDisabled: p,
      mergedError: h,
      eventHandlers: y
    } = mt({
      size: r,
      disabled: o,
      error: i,
      uninject: c == null ? void 0 : c.value
    }), {
      mergedSize: b
    } = yt(v), {
      inputRef: w,
      _focused: N,
      computedValue: I,
      handleInput: S,
      handleComposition: C,
      handleFocus: E,
      handleBlur: _,
      handleMousedown: g
    } = Lc({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: y
    }), j = d(() => {
      var x;
      return (x = e.focused) != null ? x : N.value;
    }), F = d(() => e.enabledInput && N.value || !e.modelValue), L = () => {
      var x, q;
      return e.modelValue ? (q = (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? q : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? L() : e.placeholder), K = () => {
      var x, q;
      return e.modelValue ? (q = (x = l.default) == null ? void 0 : x.call(l, {
        data: e.modelValue
      })) != null ? q : L() : null;
    }, R = d(() => [u, `${u}-size-${b.value}`, {
      [`${u}-search`]: e.enabledInput,
      [`${u}-focus`]: j.value,
      [`${u}-disabled`]: p.value,
      [`${u}-error`]: h.value
    }]), Q = d(() => Ht(t, Mt)), te = d(() => uo(t, Mt));
    return {
      inputRef: w,
      render: () => f("span", re(Q.value, {
        class: R.value,
        title: L(),
        onMousedown: g
      }), [l.prefix && f("span", {
        class: `${u}-prefix`
      }, [l.prefix()]), f("input", re(te.value, {
        ref: w,
        class: [`${u}-input`, {
          [`${u}-input-hidden`]: !F.value
        }],
        value: I.value,
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
        class: [`${u}-value`, {
          [`${u}-value-hidden`]: F.value
        }]
      }, [K()]), l.suffix && f("span", {
        class: `${u}-suffix`
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
}), Dc = Object.defineProperty, ea = Object.getOwnPropertySymbols, Ac = Object.prototype.hasOwnProperty, jc = Object.prototype.propertyIsEnumerable, ta = (e, t, n) => t in e ? Dc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Fc = (e, t) => {
  for (var n in t || (t = {}))
    Ac.call(t, n) && ta(e, n, t[n]);
  if (ea)
    for (var n of ea(t))
      jc.call(t, n) && ta(e, n, t[n]);
  return e;
};
const Mc = (e, t) => {
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
    else if (e || $e(e)) {
      const a = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Fc({
        raw: a
      }, a));
    }
  return n;
}, na = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Kc = z({
  name: "Tag",
  components: {
    IconHover: Qe,
    IconClose: cn,
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
    } = _e(e), l = Y("tag"), a = d(() => e.color && na.includes(e.color)), r = d(() => e.color && !na.includes(e.color)), o = m(e.defaultVisible), i = m(e.defaultChecked), s = d(() => {
      var w;
      return (w = e.visible) != null ? w : o.value;
    }), c = d(() => {
      var w;
      return e.checkable ? (w = e.checked) != null ? w : i.value : !0;
    }), {
      mergedSize: u
    } = yt(n), v = d(() => u.value === "mini" ? "small" : u.value), p = (w) => {
      o.value = !1, t("update:visible", !1), t("close", w);
    }, h = (w) => {
      if (e.checkable) {
        const N = !c.value;
        i.value = N, t("update:checked", N), t("check", N, w);
      }
    }, y = d(() => [l, `${l}-size-${v.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: a.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: c.value,
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
      computedChecked: c,
      handleClick: h,
      handleClose: p
    };
  }
});
function Rc(e, t, n, l, a, r) {
  const o = ve("icon-close"), i = ve("icon-hover"), s = ve("icon-loading");
  return e.computedVisible ? ($(), V("span", {
    key: 0,
    class: D(e.cls),
    style: de(e.style),
    onClick: t[0] || (t[0] = (...c) => e.handleClick && e.handleClick(...c))
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
    default: Z(() => [le(e.$slots, "close-icon", {}, () => [f(o)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : he("v-if", !0), e.loading ? ($(), V("span", {
    key: 4,
    class: D(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : he("v-if", !0)], 6)) : he("v-if", !0);
}
var yl = /* @__PURE__ */ ce(Kc, [["render", Rc]]);
const dn = Object.assign(yl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + yl.name, yl);
  }
});
var Hc = Object.defineProperty, la = Object.getOwnPropertySymbols, Wc = Object.prototype.hasOwnProperty, qc = Object.prototype.propertyIsEnumerable, oa = (e, t, n) => t in e ? Hc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gn = (e, t) => {
  for (var n in t || (t = {}))
    Wc.call(t, n) && oa(e, n, t[n]);
  if (la)
    for (var n of la(t))
      qc.call(t, n) && oa(e, n, t[n]);
  return e;
};
const Gc = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var gl = z({
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
      size: a,
      disabled: r,
      error: o,
      uninjectFormItemContext: i,
      modelValue: s
    } = _e(e), c = e.baseCls || Y("input-tag"), u = m(), v = m(), {
      mergedSize: p,
      mergedDisabled: h,
      mergedError: y,
      feedback: b,
      eventHandlers: w
    } = mt({
      size: a,
      disabled: r,
      error: o,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: N
    } = yt(p), I = d(() => gn(gn({}, Gc), e.fieldNames)), S = m(!1), C = m(e.defaultValue), E = m(e.defaultInputValue), _ = m(!1), g = m(""), j = d(() => Le(e.retainInputValue) ? gn({
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
        value: ue
      } = P.target;
      P.type === "compositionend" ? (_.value = !1, g.value = "", O(ue, P), Fe(() => {
        u.value && Q.value !== u.value.value && (u.value.value = Q.value);
      })) : (_.value = !0, g.value = Q.value + ((H = P.data) != null ? H : ""));
    }, R = d(() => {
      var P;
      return (P = e.modelValue) != null ? P : C.value;
    }), Q = d(() => {
      var P;
      return (P = e.inputValue) != null ? P : E.value;
    });
    pe(s, (P) => {
      (Ke(P) || Ln(P)) && (C.value = []);
    });
    const te = (P) => {
      u.value && P.target !== u.value && (P.preventDefault(), u.value.focus());
    }, oe = (P) => {
      const {
        value: H
      } = P.target;
      _.value || (O(H, P), Fe(() => {
        u.value && Q.value !== u.value.value && (u.value.value = Q.value);
      }));
    }, x = d(() => Mc(R.value, I.value)), q = d(() => {
      if (e.maxTagCount > 0) {
        const P = x.value.length - e.maxTagCount;
        if (P > 0) {
          const H = x.value.slice(0, e.maxTagCount), ue = {
            value: "__arco__more",
            label: `+${P}...`,
            closable: !1
          };
          return H.push(gn({
            raw: ue
          }, ue)), H;
        }
      }
      return x.value;
    }), me = (P, H) => {
      var ue, we;
      C.value = P, t("update:modelValue", P), t("change", P, H), (we = (ue = w.value) == null ? void 0 : ue.onChange) == null || we.call(ue, H);
    }, ne = (P, H, ue) => {
      var we;
      const Ee = (we = R.value) == null ? void 0 : we.filter((Je, Ie) => Ie !== H);
      me(Ee, ue), t("remove", P, ue);
    }, ie = (P) => {
      me([], P), t("clear", P);
    }, Se = d(() => !h.value && !e.readonly && e.allowClear && !!R.value.length), ge = (P) => {
      var H;
      if (Q.value) {
        if (P.preventDefault(), e.uniqueValue && ((H = R.value) != null && H.includes(Q.value))) {
          t("pressEnter", Q.value, P);
          return;
        }
        const ue = R.value.concat(Q.value);
        me(ue, P), t("pressEnter", Q.value, P), j.value.create || O("", P);
      }
    }, ye = (P) => {
      var H, ue;
      S.value = !0, t("focus", P), (ue = (H = w.value) == null ? void 0 : H.onFocus) == null || ue.call(H, P);
    }, se = (P) => {
      var H, ue;
      S.value = !1, !j.value.blur && Q.value && O("", P), t("blur", P), (ue = (H = w.value) == null ? void 0 : H.onBlur) == null || ue.call(H, P);
    }, ke = () => {
      for (let P = x.value.length - 1; P >= 0; P--)
        if (x.value[P].closable)
          return P;
      return -1;
    }, tt = (P) => {
      if (h.value || e.readonly)
        return;
      const H = P.key || P.code;
      if (!_.value && Q.value && H === so.key && ge(P), !_.value && q.value.length > 0 && !Q.value && H === es.key) {
        const ue = ke();
        ue >= 0 && ne(x.value[ue].value, ue, P);
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
      u.value && !_.value && P !== u.value.value && (u.value.value = P);
    });
    const Me = d(() => [c, `${c}-size-${N.value}`, {
      [`${c}-disabled`]: h.value,
      [`${c}-disabled-input`]: e.disabledInput,
      [`${c}-error`]: y.value,
      [`${c}-focus`]: L.value,
      [`${c}-readonly`]: e.readonly,
      [`${c}-has-tag`]: q.value.length > 0,
      [`${c}-has-prefix`]: !!n.prefix,
      [`${c}-has-suffix`]: !!n.suffix || Se.value || b.value,
      [`${c}-has-placeholder`]: !R.value.length
    }]), Te = d(() => Ht(l, Mt)), Ze = d(() => uo(l, Mt));
    return {
      inputRef: u,
      render: () => {
        var P;
        return f("span", re({
          class: Me.value,
          onMousedown: te
        }, Te.value), [f(ln, {
          onResize: De
        }, {
          default: () => [f("span", {
            ref: v,
            class: `${c}-mirror`
          }, [q.value.length > 0 ? g.value || Q.value : g.value || Q.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${c}-prefix`
        }, [n.prefix()]), f(zr, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${c}-inner`, {
            [`${c}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [q.value.map((H, ue) => f(dn, re({
            key: `tag-${H.value}`,
            class: `${c}-tag`,
            closable: !h.value && !e.readonly && H.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, H.tagProps, {
            onClose: (we) => ne(H.value, ue, we)
          }), {
            default: () => {
              var we, Ee, Je, Ie;
              return [(Ie = (Je = (we = n.tag) == null ? void 0 : we.call(n, {
                data: H.raw
              })) != null ? Je : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, H.raw)) != null ? Ie : H.label];
            }
          })), f("input", re(Ze.value, {
            ref: u,
            key: "input-tag-input",
            class: `${c}-input`,
            style: F,
            placeholder: q.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: oe,
            onKeydown: tt,
            onFocus: ye,
            onBlur: se,
            onCompositionstart: K,
            onCompositionupdate: K,
            onCompositionend: K
          }), null)]
        }), Se.value && f(Qe, {
          class: `${c}-clear-btn`,
          onClick: ie,
          onMousedown: (H) => H.stopPropagation()
        }, {
          default: () => [f(cn, null, null)]
        }), (n.suffix || !!b.value) && f("span", {
          class: `${c}-suffix`
        }, [(P = n.suffix) == null ? void 0 : P.call(n), !!b.value && f(io, {
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
const Uc = Object.assign(gl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + gl.name, gl);
  }
});
var aa = z({
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
      disabled: a,
      error: r
    } = _e(e), o = Y("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: c,
      mergedSize: u,
      mergedError: v
    } = mt({
      size: l,
      disabled: a,
      error: r
    }), {
      mergedSize: p
    } = yt(u), {
      opened: h
    } = _e(e), y = m(), b = d(() => {
      var O;
      return (O = y.value) == null ? void 0 : O.inputRef;
    }), w = d(() => e.modelValue.length === 0), N = d(() => e.allowSearch || e.allowCreate), I = d(() => e.allowClear && !e.disabled && !w.value), S = (O) => {
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
      return e.loading ? (K = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? K : f(pt, null, null) : e.allowSearch && e.opened ? (Q = (R = n["search-icon"]) == null ? void 0 : R.call(n)) != null ? Q : f(Hl, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(ir, {
        class: `${o}-arrow-icon`
      }, null);
    }, j = () => f(Pe, null, [I.value && f(Qe, {
      class: `${o}-clear-btn`,
      onClick: _,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [f(cn, null, null)]
    }), f("span", {
      class: `${o}-icon`
    }, [g()]), !!i.value && f(io, {
      type: i.value
    }, null)]);
    pe(h, (O) => {
      !O && b.value && b.value.isSameNode(document.activeElement) && b.value.blur();
    });
    const F = d(() => [`${o}-${e.multiple ? "multiple" : "single"}`, {
      [`${o}-opened`]: e.opened,
      [`${o}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: b,
      handleFocus: S,
      handleBlur: C,
      render: () => e.multiple ? f(Uc, {
        ref: y,
        baseCls: o,
        class: F.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: c.value,
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
        suffix: j,
        tag: n.label
      }) : f(Vc, {
        ref: y,
        baseCls: o,
        class: F.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: c.value,
        size: p.value,
        error: v.value,
        enabledInput: N.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: C
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: j
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
const Yc = z({
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
function Zc(e, t, n, l, a, r) {
  return $(), V(Pe, null, [A("li", {
    class: D(`${e.prefixCls}-title`)
  }, [le(e.$slots, "label", {}, () => [qe(je(e.label), 1)])], 2), le(e.$slots, "default")], 64);
}
var $n = /* @__PURE__ */ ce(Yc, [["render", Zc]]);
const ra = typeof window > "u" ? global : window;
function Xc(e, t) {
  let n = 0;
  return (...l) => {
    n && ra.clearTimeout(n), n = ra.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var Jc = Object.defineProperty, Qc = Object.defineProperties, ed = Object.getOwnPropertyDescriptors, ia = Object.getOwnPropertySymbols, td = Object.prototype.hasOwnProperty, nd = Object.prototype.propertyIsEnumerable, sa = (e, t, n) => t in e ? Jc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Yt = (e, t) => {
  for (var n in t || (t = {}))
    td.call(t, n) && sa(e, n, t[n]);
  if (ia)
    for (var n of ia(t))
      nd.call(t, n) && sa(e, n, t[n]);
  return e;
}, ld = (e, t) => Qc(e, ed(t));
function od(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xl(e);
}
const ad = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var bl = z({
  name: "Select",
  components: {
    Trigger: on,
    SelectView: aa
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
      size: a,
      disabled: r,
      error: o,
      options: i,
      filterOption: s,
      valueKey: c,
      multiple: u,
      popupVisible: v,
      defaultPopupVisible: p,
      showExtraOptions: h,
      modelValue: y,
      fieldNames: b,
      loading: w,
      defaultActiveFirstOption: N
    } = _e(e), I = Y("select"), {
      mergedSize: S,
      mergedDisabled: C,
      mergedError: E,
      eventHandlers: _
    } = mt({
      size: a,
      disabled: r,
      error: o
    }), g = d(() => e.virtualListProps ? "div" : "li"), j = d(() => Le(e.allowSearch) && !!e.allowSearch.retainInputValue);
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
    } = xc({
      popupVisible: v,
      defaultPopupVisible: p,
      emit: n
    }), Q = m(e.defaultValue), te = d(() => {
      var B;
      const k = (B = e.modelValue) != null ? B : Q.value;
      return (Ae(k) ? k : k || $e(k) || xt(k) || jt(k) ? [k] : []).map((ee) => ({
        value: ee,
        key: an(ee, e.valueKey)
      }));
    });
    pe(y, (B) => {
      (Ke(B) || Ln(B)) && (Q.value = u.value ? [] : B);
    });
    const oe = d(() => te.value.map((B) => B.key)), x = d(() => Yt(Yt({}, ad), b == null ? void 0 : b.value)), q = m(), me = (B) => {
      const k = {};
      return B.forEach((T) => {
        k[T] = Ee.get(T);
      }), k;
    }, ne = (B) => {
      q.value = me(B);
    }, ie = (B) => Ge(e.fallbackOption) ? e.fallbackOption(B) : {
      [x.value.value]: B,
      [x.value.label]: String(Le(B) ? B[c == null ? void 0 : c.value] : B)
    }, Se = () => {
      const B = [], k = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const T of te.value)
          if (!k.includes(T.key) && T.value !== "") {
            const ee = Ee.get(T.key);
            (!ee || ee.origin === "extraOptions") && (B.push(T), k.push(T.key));
          }
      }
      if (e.allowCreate && ke.value) {
        const T = an(ke.value);
        if (!k.includes(T)) {
          const ee = Ee.get(T);
          (!ee || ee.origin === "extraOptions") && B.push({
            value: ke.value,
            key: T
          });
        }
      }
      return B;
    }, ge = m([]), ye = d(() => ge.value.map((B) => {
      var k;
      let T = ie(B.value);
      const ee = (k = q.value) == null ? void 0 : k[B.key];
      return !Ke(ee) && !Ar(ee) && (T = Yt(Yt({}, T), ee)), T;
    }));
    Fe(() => {
      Nn(() => {
        var B;
        const k = Se();
        if (k.length !== ge.value.length)
          ge.value = k;
        else if (k.length > 0) {
          for (let T = 0; T < k.length; T++)
            if (k[T].key !== ((B = ge.value[T]) == null ? void 0 : B.key)) {
              ge.value = k;
              break;
            }
        }
      });
    });
    const se = m(""), ke = d(() => {
      var B;
      return (B = e.inputValue) != null ? B : se.value;
    });
    pe(K, (B) => {
      !B && !j.value && ke.value && De("");
    });
    const tt = (B) => {
      var k, T;
      return e.multiple ? B.map((ee) => {
        var Ye, We;
        return (We = (Ye = Ee.get(ee)) == null ? void 0 : Ye.value) != null ? We : "";
      }) : (T = (k = Ee.get(B[0])) == null ? void 0 : k.value) != null ? T : Ru(Ee) ? void 0 : "";
    }, Be = (B) => {
      var k, T;
      const ee = tt(B);
      Q.value = ee, n("update:modelValue", ee), n("change", ee), (T = (k = _.value) == null ? void 0 : k.onChange) == null || T.call(k), ne(B);
    }, De = (B) => {
      se.value = B, n("update:inputValue", B), n("inputValueChange", B);
    }, Me = (B, k) => {
      if (e.multiple) {
        if (oe.value.includes(B)) {
          const T = oe.value.filter((ee) => ee !== B);
          Be(T);
        } else if (Ie.value.includes(B))
          if (e.limit > 0 && oe.value.length >= e.limit) {
            const T = Ee.get(B);
            n("exceedLimit", T == null ? void 0 : T.value, k);
          } else {
            const T = oe.value.concat(B);
            Be(T);
          }
        j.value || De("");
      } else {
        if (B !== oe.value[0] && Be([B]), j.value) {
          const T = Ee.get(B);
          T && De(T.label);
        }
        R(!1);
      }
    }, Te = Xc((B) => {
      n("search", B);
    }, e.searchDelay), Ze = (B) => {
      B !== ke.value && (K.value || R(!0), De(B), e.allowSearch && Te(B));
    }, W = (B) => {
      const k = Ee.get(B), T = oe.value.filter((ee) => ee !== B);
      Be(T), n("remove", k == null ? void 0 : k.value);
    }, P = (B) => {
      B == null || B.stopPropagation();
      const k = oe.value.filter((T) => {
        var ee;
        return (ee = Ee.get(T)) == null ? void 0 : ee.disabled;
      });
      Be(k), De(""), n("clear", B);
    }, H = (B) => {
      n("dropdownScroll", B);
    }, ue = (B) => {
      n("dropdownReachBottom", B);
    }, {
      validOptions: we,
      optionInfoMap: Ee,
      validOptionInfos: Je,
      enabledOptionKeys: Ie,
      handleKeyDown: bt
    } = oc({
      multiple: u,
      options: i,
      extraOptions: ye,
      inputValue: ke,
      filterOption: s,
      showExtraOptions: h,
      component: g,
      valueKey: c,
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
    }), Gt = d(() => {
      var B;
      const k = [];
      for (const T of te.value) {
        const ee = Ee.get(T.key);
        ee && k.push(ld(Yt({}, ee), {
          value: T.key,
          label: (B = ee == null ? void 0 : ee.label) != null ? B : String(Le(T.value) ? T.value[c == null ? void 0 : c.value] : T.value),
          closable: !(ee != null && ee.disabled),
          tagProps: ee == null ? void 0 : ee.tagProps
        }));
      }
      return k;
    }), _t = (B) => {
      if (Ge(t.option)) {
        const k = t.option;
        return () => k({
          data: B.raw
        });
      }
      return Ge(B.render) ? B.render : () => B.label;
    }, ot = (B) => {
      if (ar(B)) {
        let k;
        return f($n, {
          key: B.key,
          label: B.label
        }, od(k = B.options.map((T) => ot(T))) ? k : {
          default: () => [k]
        });
      }
      return Fn(B, {
        inputValue: ke.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(Cn, {
        ref: (k) => {
          k != null && k.$el && (L.value[B.key] = k.$el);
        },
        key: B.key,
        value: B.value,
        label: B.label,
        disabled: B.disabled,
        internal: !0
      }, {
        default: _t(B)
      }) : null;
    }, Bt = () => f(Lu, {
      ref: F,
      loading: e.loading,
      empty: Je.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: H,
      onReachBottom: ue
    }, {
      default: () => {
        var B, k;
        return [...(k = (B = t.default) == null ? void 0 : B.call(t)) != null ? k : [], ...we.value.map(ot)];
      },
      "virtual-list": () => f(rr, re(e.virtualListProps, {
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
    }), Ut = ({
      data: B
    }) => {
      var k, T, ee, Ye;
      if ((t.label || Ge(e.formatLabel)) && B) {
        const We = Ee.get(B.value);
        if (We != null && We.raw)
          return (ee = (k = t.label) == null ? void 0 : k.call(t, {
            data: We.raw
          })) != null ? ee : (T = e.formatLabel) == null ? void 0 : T.call(e, We.raw);
      }
      return (Ye = B == null ? void 0 : B.label) != null ? Ye : "";
    };
    return () => f(on, re({
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
        return [(k = (B = t.trigger) == null ? void 0 : B.call(t)) != null ? k : f(aa, re({
          class: I,
          modelValue: Gt.value,
          inputValue: ke.value,
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
          onKeydown: bt
        }, l), {
          label: Ut,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: Bt
    });
  }
});
const rd = Object.assign(bl, {
  Option: Cn,
  OptGroup: $n,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + bl.name, bl), e.component(n + Cn.name, Cn), e.component(n + $n.name, $n);
  }
}), id = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), sd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ud = /* @__PURE__ */ A("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), cd = [ud];
function dd(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, cd, 14, sd);
}
var _l = /* @__PURE__ */ ce(id, [["render", dd]]);
const fd = Object.assign(_l, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + _l.name, _l);
  }
}), vd = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), pd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], hd = /* @__PURE__ */ A("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), md = [hd];
function yd(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, md, 14, pd);
}
var Cl = /* @__PURE__ */ ce(vd, [["render", yd]]);
const gd = Object.assign(Cl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Cl.name, Cl);
  }
}), bd = (e) => {
  const t = {}, n = m([]), l = () => {
    if (t.value) {
      const a = Ga(t.value, e);
      (a.length !== n.value.length || a.toString() !== n.value.toString()) && (n.value = a);
    }
  };
  return Ve(() => l()), ut(() => l()), {
    children: t,
    components: n
  };
}, sr = Symbol("collapseCtx"), _d = z({
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
      destroyOnHide: a,
      showExpandIcon: r
    } = _e(e), o = Y("collapse"), i = m(e.defaultActiveKey), s = d(() => {
      var v;
      const p = (v = e.activeKey) != null ? v : i.value;
      return Ae(p) ? p : [p];
    });
    Et(sr, Oe({
      activeKeys: s,
      slots: n,
      showExpandIcon: r,
      expandIconPosition: l,
      destroyOnHide: a,
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
    const u = d(() => [o, {
      [`${o}-borderless`]: !e.bordered
    }]);
    return {
      prefixCls: o,
      cls: u
    };
  }
});
function Cd(e, t, n, l, a, r) {
  return $(), V("div", {
    class: D(e.cls)
  }, [le(e.$slots, "default")], 2);
}
var $l = /* @__PURE__ */ ce(_d, [["render", Cd]]);
const $d = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), kd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wd = /* @__PURE__ */ A("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Sd = [wd];
function Ed(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Sd, 14, kd);
}
var kl = /* @__PURE__ */ ce($d, [["render", Ed]]);
const Od = Object.assign(kl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + kl.name, kl);
  }
}), xd = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Pd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Bd = /* @__PURE__ */ A("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Id = [Bd];
function Td(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Id, 14, Pd);
}
var wl = /* @__PURE__ */ ce(xd, [["render", Td]]);
const zd = Object.assign(wl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + wl.name, wl);
  }
});
var kt = z({
  name: "CollapseItem",
  components: {
    IconHover: Qe,
    IconCaretRight: Od,
    IconCaretLeft: zd
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
    const l = ht(), a = Y("collapse-item"), r = Ue(sr, {}), o = l && $e(l == null ? void 0 : l.vnode.key) ? l.vnode.key : String((n = l == null ? void 0 : l.vnode.key) != null ? n : ""), i = d(() => {
      var C;
      return (C = r.activeKeys) == null ? void 0 : C.includes(o);
    }), s = d(() => r.destroyOnHide || e.destroyOnHide), c = d(() => {
      var C;
      return (C = r == null ? void 0 : r.showExpandIcon) != null ? C : e.showExpandIcon;
    }), u = m(s.value ? i.value : !0), v = d(() => {
      var C;
      return (C = r == null ? void 0 : r.expandIconPosition) != null ? C : "left";
    }), p = (C) => {
      var E;
      e.disabled || (E = r.handleClick) == null || E.call(r, o, C);
    };
    pe(i, (C) => {
      C && !u.value && (u.value = !0);
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
        s.value && (u.value = !1);
      }
    }, y = d(() => [a, {
      [`${a}-active`]: i.value
    }]), b = d(() => [`${a}-header`, `${a}-header-${r == null ? void 0 : r.expandIconPosition}`, {
      [`${a}-header-disabled`]: e.disabled
    }]), w = d(() => [{
      [`${a}-icon-right`]: (r == null ? void 0 : r.expandIconPosition) === "right"
    }]), N = d(() => [`${a}-content`, {
      [`${a}-content-expend`]: i.value
    }]), I = () => v.value === "right" ? f(ve("icon-caret-left"), {
      class: `${a}-expand-icon`
    }, null) : f(ve("icon-caret-right"), {
      class: `${a}-expand-icon`
    }, null), S = () => c.value && f(ve("icon-hover"), {
      prefix: a,
      class: w.value,
      disabled: e.disabled
    }, {
      default: () => {
        var C, E, _, g;
        return [(g = (_ = (E = t["expand-icon"]) != null ? E : (C = r == null ? void 0 : r.slots) == null ? void 0 : C["expand-icon"]) == null ? void 0 : _({
          active: i.value,
          disabled: e.disabled,
          position: v.value
        })) != null ? g : I()];
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
        class: `${a}-header-title`
      }, [(E = (C = t.header) == null ? void 0 : C.call(t)) != null ? E : e.header]), t.extra && f("div", {
        class: `${a}-header-extra`
      }, [(_ = t.extra) == null ? void 0 : _.call(t)])]), f(zn, re({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var g;
          return [ft(f("div", {
            role: "region",
            class: N.value
          }, [u.value && f("div", {
            ref: "contentBoxRef",
            class: `${a}-content-box`
          }, [(g = t.default) == null ? void 0 : g.call(t)])]), [[vt, i.value]])];
        }
      })]);
    };
  }
});
const Nd = Object.assign($l, {
  Item: kt,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + $l.name, $l), e.component(n + kt.name, kt);
  }
}), Ld = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Vd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Dd = /* @__PURE__ */ A("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Ad = [Dd];
function jd(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Ad, 14, Vd);
}
var Sl = /* @__PURE__ */ ce(Ld, [["render", jd]]);
const ur = Object.assign(Sl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Sl.name, Sl);
  }
});
var cr = z({
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
}), Fd = Object.defineProperty, ua = Object.getOwnPropertySymbols, Md = Object.prototype.hasOwnProperty, Kd = Object.prototype.propertyIsEnumerable, ca = (e, t, n) => t in e ? Fd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, da = (e, t) => {
  for (var n in t || (t = {}))
    Md.call(t, n) && ca(e, n, t[n]);
  if (ua)
    for (var n of ua(t))
      Kd.call(t, n) && ca(e, n, t[n]);
  return e;
};
const Rd = z({
  name: "Tooltip",
  components: {
    Trigger: on
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
    const n = Y("tooltip"), l = m(e.defaultPopupVisible), a = d(() => {
      var u;
      return (u = e.popupVisible) != null ? u : l.value;
    }), r = (u) => {
      l.value = u, t("update:popupVisible", u), t("popupVisibleChange", u);
    }, o = d(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = d(() => {
      if (e.backgroundColor || e.contentStyle)
        return da({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), c = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return da({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: a,
      contentCls: o,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: c,
      handlePopupVisibleChange: r
    };
  }
});
function Hd(e, t, n, l, a, r) {
  const o = ve("Trigger");
  return $(), X(o, {
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
var El = /* @__PURE__ */ ce(Rd, [["render", Hd]]);
const fn = Object.assign(El, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + El.name, El);
  }
}), Wd = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), qd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gd = /* @__PURE__ */ A("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ud = /* @__PURE__ */ A("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), Yd = [Gd, Ud];
function Zd(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Yd, 14, qd);
}
var Ol = /* @__PURE__ */ ce(Wd, [["render", Zd]]);
const Xd = Object.assign(Ol, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ol.name, Ol);
  }
}), Jd = z({
  name: "Popconfirm",
  components: {
    ArcoButton: An,
    Trigger: on,
    IconInfoCircleFill: Ii,
    IconCheckCircleFill: ro,
    IconExclamationCircleFill: Za,
    IconCloseCircleFill: Xa
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
    } = eo(), a = m(e.defaultPopupVisible), r = d(() => {
      var b;
      return (b = e.popupVisible) != null ? b : a.value;
    }), o = m(!1), i = d(() => e.okLoading || o.value);
    let s = 0;
    const c = () => {
      s++, o.value && (o.value = !1), a.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, u = (b) => {
      b ? (a.value = b, t("update:popupVisible", b), t("popupVisibleChange", b)) : c();
    }, v = async () => {
      const b = s, w = await new Promise(async (N) => {
        var I;
        if (Ge(e.onBeforeOk)) {
          let S = e.onBeforeOk((C = !0) => N(C));
          if ((Co(S) || !jt(S)) && (o.value = !0), Co(S))
            try {
              S = (I = await S) != null ? I : !0;
            } catch {
              S = !1;
            }
          jt(S) && N(S);
        } else
          N(!0);
      });
      b === s && (w ? (t("ok"), c()) : o.value && (o.value = !1));
    }, p = () => {
      var b;
      let w = !0;
      Ge(e.onBeforeCancel) && (w = (b = e.onBeforeCancel()) != null ? b : !1), w && (t("cancel"), c());
    }, h = d(() => [`${n}-popup-content`, e.contentClass]), y = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: h,
      arrowCls: y,
      computedPopupVisible: r,
      mergedOkLoading: i,
      handlePopupVisibleChange: u,
      handleOk: v,
      handleCancel: p,
      t: l
    };
  }
});
function Qd(e, t, n, l, a, r) {
  const o = ve("icon-info-circle-fill"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), c = ve("icon-close-circle-fill"), u = ve("arco-button"), v = ve("trigger");
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
    content: Z(() => [A("div", {
      class: D(`${e.prefixCls}-body`)
    }, [A("span", {
      class: D(`${e.prefixCls}-icon`)
    }, [le(e.$slots, "icon", {}, () => [e.type === "info" ? ($(), X(o, {
      key: 0
    })) : e.type === "success" ? ($(), X(i, {
      key: 1
    })) : e.type === "warning" ? ($(), X(s, {
      key: 2
    })) : e.type === "error" ? ($(), X(c, {
      key: 3
    })) : he("v-if", !0)])], 2), A("span", {
      class: D(`${e.prefixCls}-content`)
    }, [le(e.$slots, "content", {}, () => [qe(je(e.content), 1)])], 2)], 2), A("div", {
      class: D(`${e.prefixCls}-footer`)
    }, [f(u, re({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: Z(() => [qe(je(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(u, re({
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
var xl = /* @__PURE__ */ ce(Jd, [["render", Qd]]);
const ef = Object.assign(xl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + xl.name, xl);
  }
});
var Pl = z({
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
    }), a = d(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function r(i) {
      if ($e(i))
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
    const o = (i) => {
      const s = {}, c = `${r(Ae(e.size) ? e.size[0] : e.size)}px`, u = `${r(Ae(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: u
      } : {} : (e.direction === "horizontal" && (s.marginRight = c), (e.direction === "vertical" || e.wrap) && (s.marginBottom = u), s);
    };
    return () => {
      var i;
      const s = bn((i = t.default) == null ? void 0 : i.call(t), !0).filter((c) => c.type !== Nr);
      return f("div", {
        class: a.value
      }, [s.map((c, u) => {
        var v, p;
        const h = t.split && u > 0;
        return f(Pe, {
          key: (v = c.key) != null ? v : `item-${u}`
        }, [h && f("div", {
          class: `${n}-item-split`,
          style: o(!1)
        }, [(p = t.split) == null ? void 0 : p.call(t)]), f("div", {
          class: `${n}-item`,
          style: o(u === s.length - 1)
        }, [c])]);
      })]);
    };
  }
});
const tf = Object.assign(Pl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Pl.name, Pl);
  }
}), nf = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), lf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], of = /* @__PURE__ */ A("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), af = [of];
function rf(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, af, 14, lf);
}
var Bl = /* @__PURE__ */ ce(nf, [["render", rf]]);
const sf = Object.assign(Bl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bl.name, Bl);
  }
}), uf = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, vo = Symbol("ArcoTabs"), cf = z({
  name: "TabsTab",
  components: {
    IconHover: Qe,
    IconClose: cn
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
    const n = Y("tabs-tab"), l = Ue(vo, {}), a = (c) => {
      e.tab.disabled || t("click", e.tab.key, c);
    }, r = (c) => {
      c.key === "Enter" && a(c);
    }, o = d(() => Object.assign(l.trigger === "click" ? {
      onClick: a
    } : {
      onMouseover: a
    }, {
      onKeydown: r
    })), i = (c) => {
      e.tab.disabled || t("delete", e.tab.key, c);
    }, s = d(() => [n, {
      [`${n}-active`]: e.active,
      [`${n}-closable`]: e.editable && e.tab.closable,
      [`${n}-disabled`]: e.tab.disabled
    }]);
    return {
      prefixCls: n,
      cls: s,
      eventHandlers: o,
      handleDelete: i
    };
  }
});
function df(e, t, n, l, a, r) {
  const o = ve("icon-close"), i = ve("icon-hover");
  return $(), V("div", re({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [A("span", {
    class: D(`${e.prefixCls}-title`)
  }, [le(e.$slots, "default")], 2), e.editable && e.tab.closable ? ($(), X(i, {
    key: 0,
    class: D(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleDelete, ["stop"])
  }, {
    default: Z(() => [f(o)]),
    _: 1
  }, 8, ["class", "onClick"])) : he("v-if", !0)], 16);
}
var ff = /* @__PURE__ */ ce(cf, [["render", df]]);
function vf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xl(e);
}
var fa = z({
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
    const n = Y("tabs-nav-button"), l = (o) => {
      e.disabled || t("click", e.type, o);
    }, a = () => e.direction === "horizontal" ? e.type === "next" ? f(Nc, null, null) : f(fd, null, null) : e.type === "next" ? f(ir, null, null) : f(gd, null, null), r = d(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let o;
      return f("div", {
        class: r.value,
        onClick: l
      }, [f(Qe, {
        disabled: e.disabled
      }, vf(o = a()) ? o : {
        default: () => [o]
      })]);
    };
  }
});
const pf = z({
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
    } = _e(e), n = Y("tabs-nav-ink"), l = m(0), a = m(0), r = d(() => e.direction === "vertical" ? {
      top: `${l.value}px`,
      height: `${a.value}px`
    } : {
      left: `${l.value}px`,
      width: `${a.value}px`
    }), o = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, c = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== l.value || c !== a.value) && (l.value = s, a.value = c);
      }
    };
    Ve(() => {
      Fe(() => o());
    }), ut(() => {
      o();
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
function hf(e, t, n, l, a, r) {
  return $(), V("div", {
    class: D(e.cls),
    style: de(e.style)
  }, null, 6);
}
var mf = /* @__PURE__ */ ce(pf, [["render", hf]]), yf = z({
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
      activeKey: a,
      activeIndex: r,
      direction: o
    } = _e(e), i = Y("tabs-nav"), s = m(), c = m(), u = m({}), v = d(() => {
      if (!Ke(a.value))
        return u.value[a.value];
    }), p = m(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), y = m(!1), b = m(0), w = m(0), N = m([]), I = m(0), S = () => {
      var ne, ie, Se;
      return (Se = o.value === "vertical" ? (ne = s.value) == null ? void 0 : ne.offsetHeight : (ie = s.value) == null ? void 0 : ie.offsetWidth) != null ? Se : 0;
    }, C = () => !c.value || !s.value ? 0 : o.value === "vertical" ? c.value.offsetHeight - s.value.offsetHeight : c.value.offsetWidth - s.value.offsetWidth, E = () => l.value.map((ne) => {
      const ie = u.value[ne.key];
      return o.value === "vertical" ? ie.offsetTop + ie.offsetHeight : ie.offsetLeft + ie.offsetWidth;
    }), _ = () => {
      y.value = g(), y.value ? (b.value = S(), w.value = C(), N.value = E(), I.value > w.value && (I.value = w.value)) : I.value = 0;
    }, g = () => s.value && c.value ? e.direction === "vertical" ? c.value.offsetHeight > s.value.offsetHeight : c.value.offsetWidth > s.value.offsetWidth : !1, j = (ne) => {
      var ie;
      return ((ie = N.value[ne - 1]) != null ? ie : 0) >= I.value && N.value[ne] <= I.value + b.value;
    }, F = (ne) => s.value ? ne === "previous" ? I.value - b.value : I.value + b.value : 0, L = (ne) => !s.value || !c.value || ne < 0 ? 0 : ne > w.value ? w.value : ne, O = (ne, ie) => {
      t("click", ne, ie);
    }, K = (ne, ie) => {
      t("delete", ne, ie);
    }, R = (ne) => {
      I.value = L(F(ne));
    }, Q = () => {
      _(), p.value && p.value.$forceUpdate();
    };
    pe(l, () => {
      Fe(() => {
        _();
      });
    }), pe(r, (ne, ie) => {
      Fe(() => {
        var Se;
        if (y.value)
          if (ne >= ie) {
            const ge = ne < N.value.length - 1 ? ne + 1 : ne;
            j(ge) || (I.value = N.value[ge] - b.value);
          } else {
            const ge = ne > 0 ? ne - 1 : ne;
            j(ge) || (I.value = (Se = N.value[ge - 1]) != null ? Se : 0);
          }
      });
    }), Ve(() => {
      _();
    });
    const te = () => !h.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (ne) => t("add", ne)
    }, [f(Qe, null, {
      default: () => [f(ur, null, null)]
    })]), oe = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), x = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), q = d(() => uf({
      direction: e.direction,
      type: e.type,
      offset: I.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: y.value
    }]);
    return () => {
      var ne;
      return f("div", {
        class: oe.value
      }, [y.value && f(fa, {
        type: "previous",
        direction: e.direction,
        disabled: I.value <= 0,
        onClick: R
      }, null), f(ln, {
        onResize: () => _()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(ln, {
          onResize: Q
        }, {
          default: () => [f("div", {
            ref: c,
            class: x.value,
            style: q.value
          }, [e.tabs.map((ie, Se) => f(ff, {
            key: ie.key,
            ref: (ge) => {
              ge != null && ge.$el && (u.value[ie.key] = ge.$el);
            },
            active: ie.key === a.value,
            tab: ie,
            editable: e.editable,
            onClick: O,
            onDelete: K
          }, {
            default: () => {
              var ge, ye, se;
              return [(se = (ye = (ge = ie.slots).title) == null ? void 0 : ye.call(ge)) != null ? se : ie.title];
            }
          })), e.type === "line" && v.value && f(mf, {
            ref: p,
            activeTabRef: v.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !y.value && te()])]
      }), y.value && f(fa, {
        type: "next",
        direction: e.direction,
        disabled: I.value >= w.value,
        onClick: R
      }, null), f("div", {
        class: `${i}-extra`
      }, [y.value && te(), (ne = n.extra) == null ? void 0 : ne.call(n)])]);
    };
  }
}), Il = z({
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
      lazyLoad: a,
      destroyOnHide: r,
      trigger: o
    } = _e(e), i = Y("tabs"), {
      mergedSize: s
    } = yt(l), c = d(() => e.direction === "vertical" ? "left" : e.position), u = d(() => ["left", "right"].includes(c.value) ? "vertical" : "horizontal"), {
      children: v,
      components: p
    } = bd("TabPane"), h = Oe(/* @__PURE__ */ new Map()), y = d(() => {
      const O = [];
      return p.value.forEach((K) => {
        const R = h.get(K);
        R && O.push(R);
      }), O;
    }), b = d(() => y.value.map((O) => O.key)), w = (O, K) => {
      h.set(O, K);
    }, N = (O) => {
      h.delete(O);
    }, I = m(e.defaultActiveKey), S = d(() => {
      var O;
      const K = (O = e.activeKey) != null ? O : I.value;
      return Ke(K) ? b.value[0] : K;
    }), C = d(() => {
      const O = b.value.indexOf(S.value);
      return O === -1 ? 0 : O;
    });
    Et(vo, Oe({
      lazyLoad: a,
      destroyOnHide: r,
      activeKey: S,
      addItem: w,
      removeItem: N,
      trigger: o
    }));
    const E = (O) => {
      O !== S.value && (I.value = O, t("update:activeKey", O), t("change", O));
    }, _ = (O, K) => {
      E(O), t("tabClick", O, K);
    }, g = (O) => {
      t("add", O), e.autoSwitch && Fe(() => {
        const K = b.value[b.value.length - 1];
        E(K);
      });
    }, j = (O, K) => {
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
    }, [v.value])]), L = d(() => [i, `${i}-${u.value}`, `${i}-${c.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return v.value = (O = n.default) == null ? void 0 : O.call(n), f("div", {
        class: L.value
      }, [c.value === "bottom" && F(), f(yf, {
        tabs: y.value,
        activeKey: S.value,
        activeIndex: C.value,
        direction: u.value,
        position: c.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: _,
        onAdd: g,
        onDelete: j
      }, {
        extra: n.extra
      }), c.value !== "bottom" && F()]);
    };
  }
}), gf = Object.defineProperty, va = Object.getOwnPropertySymbols, bf = Object.prototype.hasOwnProperty, _f = Object.prototype.propertyIsEnumerable, pa = (e, t, n) => t in e ? gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Cf = (e, t) => {
  for (var n in t || (t = {}))
    bf.call(t, n) && pa(e, n, t[n]);
  if (va)
    for (var n of va(t))
      _f.call(t, n) && pa(e, n, t[n]);
  return e;
};
const $f = z({
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
      disabled: a,
      closable: r
    } = _e(e), o = ht(), i = Y("tabs"), s = Ue(vo, {}), c = m(), u = d(() => o == null ? void 0 : o.vnode.key), v = d(() => u.value === s.activeKey), p = m(s.lazyLoad ? v.value : !0), h = Oe({
      key: u,
      title: l,
      disabled: a,
      closable: r,
      slots: t
    });
    return o != null && o.uid && ((n = s.addItem) == null || n.call(s, o.uid, h)), Rt(() => {
      var y;
      o != null && o.uid && ((y = s.removeItem) == null || y.call(s, o.uid));
    }), pe(v, (y) => {
      y ? p.value || (p.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (p.value = !1);
    }), ut(() => {
      h.slots = Cf({}, t);
    }), {
      prefixCls: i,
      active: v,
      itemRef: c,
      mounted: p
    };
  }
});
function kf(e, t, n, l, a, r) {
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
var kn = /* @__PURE__ */ ce($f, [["render", kf]]);
const wf = Object.assign(Il, {
  TabPane: kn,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Il.name, Il), e.component(n + kn.name, kn);
  }
}), dr = Symbol("TreeInjectionKey");
function Sf(e) {
  const t = [];
  function n(l) {
    l && l.forEach((a) => {
      t.push(a), n(a.children);
    });
  }
  return n(e), t;
}
function Ef(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function ha(e) {
  return e.selectable && !e.disabled;
}
function ma(e) {
  return !e.isLeaf && e.children;
}
function Of(e) {
  return jt(e.isLeaf) ? e.isLeaf : !e.children;
}
function Gl(e) {
  return Set.prototype.add.bind(e);
}
function Ul(e) {
  return Set.prototype.delete.bind(e);
}
function At(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function po(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((l) => {
    At(l) && n.push(l.key, ...po(l));
  }), n;
}
function fr(e) {
  var t;
  const {
    node: n,
    checkedKeySet: l,
    indeterminateKeySet: a
  } = e;
  let r = n.parent;
  for (; r; ) {
    if (At(r)) {
      const o = r.key, i = ((t = r.children) == null ? void 0 : t.filter(At)) || [];
      let s = 0;
      const c = i.length;
      i.some(({
        key: u
      }) => {
        if (l.has(u))
          s += 1;
        else if (a.has(u))
          return s += 0.5, !0;
        return !1;
      }), s && s !== c ? a.add(o) : a.delete(o), s && s === c ? l.add(o) : l.delete(o);
    }
    r = r.parent;
  }
}
function ya(e) {
  const {
    node: t,
    checked: n,
    checkedKeys: l,
    indeterminateKeys: a,
    checkStrictly: r = !1
  } = e, {
    key: o
  } = t, i = new Set(l), s = new Set(a);
  if (n ? i.add(o) : i.delete(o), s.delete(o), !r) {
    const c = po(t);
    n ? c.forEach(Gl(i)) : c.forEach(Ul(i)), c.forEach(Ul(s)), fr({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function xf(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: l,
    onlyCheckLeaf: a
  } = e, r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return l ? t.forEach(Gl(r)) : t.forEach((s) => {
    var c;
    const u = n.get(s);
    if (!u || o.has(s) || a && ((c = u.children) != null && c.length))
      return;
    const v = po(u);
    v.forEach(Gl(o)), v.forEach(Ul(i)), r.add(s), i.delete(s), fr({
      node: u,
      checkedKeySet: r,
      indeterminateKeySet: i
    });
  }), [[...r, ...o], [...i]];
}
function Mn() {
  return Ue(dr) || {};
}
const Pf = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), Bf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], If = /* @__PURE__ */ A("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), Tf = [If];
function zf(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Tf, 14, Bf);
}
var Tl = /* @__PURE__ */ ce(Pf, [["render", zf]]);
const Nf = Object.assign(Tl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Tl.name, Tl);
  }
});
var Lf = z({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: pt,
    RenderFunction: cr
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
      nodeStatus: a,
      treeNodeData: r
    } = _e(e), o = Mn(), i = it(t, "switcher-icon"), s = it(t, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var c, u, v;
        const p = (u = (c = l == null ? void 0 : l.value) == null ? void 0 : c.switcherIcon) != null ? u : i.value;
        return p ? p(a.value) : (v = o.switcherIcon) == null ? void 0 : v.call(o, r.value, a.value);
      },
      getLoadingIcon: () => {
        var c, u, v;
        const p = (u = (c = l == null ? void 0 : l.value) == null ? void 0 : c.loadingIcon) != null ? u : s.value;
        return p ? p(a.value) : (v = o.loadingIcon) == null ? void 0 : v.call(o, r.value, a.value);
      },
      onClick(c) {
        n("click", c);
      }
    };
  },
  render() {
    var e, t, n;
    const {
      prefixCls: l,
      getSwitcherIcon: a,
      getLoadingIcon: r,
      onClick: o,
      nodeStatus: i = {},
      loading: s,
      showLine: c
    } = this, {
      expanded: u,
      isLeaf: v
    } = i;
    if (s)
      return (e = r()) != null ? e : Tt(pt);
    let p = null, h = !1;
    if (v)
      c && (p = (n = a()) != null ? n : Tt(Nf));
    else {
      const b = c ? Tt("span", {
        class: `${l}-${u ? "minus" : "plus"}-icon`
      }) : Tt(sf);
      p = (t = a()) != null ? t : b, h = !c;
    }
    if (!p)
      return null;
    const y = Tt("span", {
      class: `${l}-switcher-icon`,
      onClick: o
    }, p);
    return h ? Tt(Qe, {
      class: `${l}-icon-hover`
    }, () => y) : y;
  }
}), Vf = Object.defineProperty, Df = Object.defineProperties, Af = Object.getOwnPropertyDescriptors, ga = Object.getOwnPropertySymbols, jf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, ba = (e, t, n) => t in e ? Vf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Yl = (e, t) => {
  for (var n in t || (t = {}))
    jf.call(t, n) && ba(e, n, t[n]);
  if (ga)
    for (var n of ga(t))
      Ff.call(t, n) && ba(e, n, t[n]);
  return e;
}, _a = (e, t) => Df(e, Af(t));
const vr = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Mf(e, t) {
  return !!(Ke(e) ? t : e);
}
function Kf(e, t) {
  const n = Yl({}, e);
  return t && Object.keys(t).forEach((a) => {
    const r = t[a];
    r !== a && (n[a] = e[r], delete n[r]);
  }), n;
}
function Ca({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: l,
  level: a
}) {
  return Ke(e) ? Ge(t) ? t(l, {
    isLeaf: n,
    level: a
  }) : t ?? !1 : e;
}
function Rf(e) {
  var t, n;
  const {
    treeNodeData: l,
    parentNode: a,
    isTail: r = !0,
    treeProps: o
  } = e, {
    fieldNames: i
  } = o || {}, s = Kf(l, i), c = o.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), u = a ? a.level + 1 : 0, v = _a(Yl({}, Ht(s, ["children"])), {
    key: (n = s.key) != null ? n : vr(),
    selectable: Ca({
      subEnable: s.selectable,
      superEnable: o == null ? void 0 : o.selectable,
      isLeaf: c,
      level: u,
      treeNodeData: l
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: Ca({
      subEnable: s.checkable,
      superEnable: o == null ? void 0 : o.checkable,
      isLeaf: c,
      level: u,
      treeNodeData: l
    }),
    isLeaf: c,
    isTail: r,
    blockNode: !!(o != null && o.blockNode),
    showLine: !!(o != null && o.showLine),
    level: u,
    lineless: a ? [...a.lineless, a.isTail] : [],
    draggable: Mf(s.draggable, o == null ? void 0 : o.draggable)
  });
  return _a(Yl({}, v), {
    treeNodeProps: v,
    treeNodeData: l,
    parent: a,
    parentKey: a == null ? void 0 : a.key,
    pathParentKeys: a ? [...a.pathParentKeys, a.key] : []
  });
}
function Hf(e, t) {
  function n(l, a) {
    if (!l)
      return;
    const {
      fieldNames: r
    } = t, o = [];
    return l.forEach((i, s) => {
      const c = Rf({
        treeNodeData: i,
        treeProps: t,
        parentNode: a,
        isTail: s === l.length - 1
      });
      c.children = n(i[(r == null ? void 0 : r.children) || "children"], c), o.push(c);
    }), o;
  }
  return n(e);
}
function pr() {
  const e = ht(), t = () => {
    var l;
    return (l = e == null ? void 0 : e.vnode.key) != null ? l : vr();
  }, n = m(t());
  return ut(() => {
    n.value = t();
  }), n;
}
function Wf(e) {
  const {
    key: t,
    refTitle: n
  } = _e(e), l = Mn(), a = m(!1), r = m(!1), o = m(!1), i = m(0), s = Rl((c) => {
    if (!n.value)
      return;
    const u = n.value.getBoundingClientRect(), v = window.pageYOffset + u.top, {
      pageY: p
    } = c, h = u.height / 4, y = p - v;
    i.value = y < h ? -1 : y < u.height - h ? 0 : 1, o.value = l.allowDrop ? l.allowDrop(t.value, i.value) : !0;
  });
  return {
    isDragOver: a,
    isDragging: r,
    isAllowDrop: o,
    dropPosition: i,
    setDragStatus(c, u) {
      switch (c) {
        case "dragStart":
          r.value = !0, i.value = 0, l.onDragStart && l.onDragStart(t.value, u);
          break;
        case "dragEnd":
          r.value = !1, a.value = !1, i.value = 0, s.cancel(), l.onDragEnd && l.onDragEnd(t.value, u);
          break;
        case "dragOver":
          a.value = !0, s(u), l.onDragOver && l.onDragOver(t.value, u);
          break;
        case "dragLeave":
          a.value = !1, i.value = 0, s.cancel(), l.onDragLeave && l.onDragLeave(t.value, u);
          break;
        case "drop":
          l.onDrop && l.onDrop(t.value, i.value, u), a.value = !1, i.value = 0, s.cancel();
          break;
      }
    }
  };
}
function qf(e) {
  return Ae(e) ? e : [e];
}
const Gf = z({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: Lf,
    Checkbox: nr,
    RenderFunction: cr,
    IconDragDotVertical: Xd
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
    const t = pr(), n = Y("tree-node"), l = Mn(), a = d(() => {
      var x;
      return (x = l.key2TreeNode) == null ? void 0 : x.get(t.value);
    }), r = d(() => a.value.treeNodeData), o = d(() => a.value.children), i = d(() => {
      var x;
      const q = (x = l.treeProps) == null ? void 0 : x.actionOnNodeClick;
      return q ? qf(q) : [];
    }), {
      isLeaf: s,
      isTail: c,
      selectable: u,
      disabled: v,
      disableCheckbox: p,
      draggable: h
    } = _e(e), y = d(() => {
      var x;
      return [`${n}`, {
        [`${n}-selected`]: j.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: c.value,
        [`${n}-expanded`]: F.value,
        [`${n}-disabled-selectable`]: !u.value && !((x = l.treeProps) != null && x.disableSelectActionOnly),
        [`${n}-disabled`]: v.value
      }];
    }), b = m(), {
      isDragOver: w,
      isDragging: N,
      isAllowDrop: I,
      dropPosition: S,
      setDragStatus: C
    } = Wf(Oe({
      key: t,
      refTitle: b
    })), E = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: w.value && I.value && S.value < 0,
      [`${n}-title-gap-bottom`]: w.value && I.value && S.value > 0,
      [`${n}-title-highlight`]: !N.value && w.value && I.value && S.value === 0,
      [`${n}-title-dragging`]: N.value,
      [`${n}-title-block`]: a.value.blockNode
    }]), _ = d(() => {
      var x, q;
      return (q = (x = l.checkedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), g = d(() => {
      var x, q;
      return (q = (x = l.indeterminateKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), j = d(() => {
      var x, q;
      return (q = (x = l.selectedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), F = d(() => {
      var x, q;
      return (q = (x = l.expandedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), L = d(() => {
      var x, q;
      return (q = (x = l.loadingKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), O = d(() => l.dragIcon), K = d(() => l.nodeIcon);
    function R(x) {
      var q, me;
      s.value || (!((q = o.value) != null && q.length) && Ge(l.onLoadMore) ? l.onLoadMore(t.value) : (me = l == null ? void 0 : l.onExpand) == null || me.call(l, !F.value, t.value, x));
    }
    const Q = Oe({
      loading: L,
      checked: _,
      selected: j,
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
      selected: j,
      treeTitle: te,
      treeNodeData: r,
      loading: L,
      treeDragIcon: O,
      treeNodeIcon: K,
      extra: oe,
      nodeStatus: Q,
      onCheckboxChange(x, q) {
        var me;
        p.value || v.value || (me = l.onCheck) == null || me.call(l, x, t.value, q);
      },
      onTitleClick(x) {
        var q;
        i.value.includes("expand") && R(x), !(!u.value || v.value) && ((q = l.onSelect) == null || q.call(l, t.value, x));
      },
      onSwitcherClick: R,
      onDragStart(x) {
        var q;
        if (h.value) {
          x.stopPropagation(), C("dragStart", x);
          try {
            (q = x.dataTransfer) == null || q.setData("text/plain", "");
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
        !h.value || !I.value || (x.stopPropagation(), x.preventDefault(), C("drop", x));
      }
    };
  }
}), Uf = ["data-level", "data-key"], Yf = ["draggable"];
function Zf(e, t, n, l, a, r) {
  const o = ve("NodeSwitcher"), i = ve("Checkbox"), s = ve("RenderFunction"), c = ve("IconDragDotVertical");
  return $(), V("div", {
    class: D(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [he(" 缩进 "), A("span", {
    class: D(`${e.prefixCls}-indent`)
  }, [($(!0), V(Pe, null, wt(e.level, (u) => ($(), V("span", {
    key: u,
    class: D([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[u - 1]
    }])
  }, null, 2))), 128))], 2), he(" switcher "), A("span", {
    class: D([`${e.prefixCls}-switcher`, {
      [`${e.prefixCls}-switcher-expanded`]: e.expanded
    }])
  }, [f(o, {
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
  }, za({
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
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : he("v-if", !0), he(" 内容 "), A("span", {
    ref: "refTitle",
    class: D(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...u) => e.onDragStart && e.onDragStart(...u)),
    onDragend: t[1] || (t[1] = (...u) => e.onDragEnd && e.onDragEnd(...u)),
    onDragover: t[2] || (t[2] = (...u) => e.onDragOver && e.onDragOver(...u)),
    onDragleave: t[3] || (t[3] = (...u) => e.onDragLeave && e.onDragLeave(...u)),
    onDrop: t[4] || (t[4] = (...u) => e.onDrop && e.onDrop(...u)),
    onClick: t[5] || (t[5] = (...u) => e.onTitleClick && e.onTitleClick(...u))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? ($(), V("span", {
    key: 0,
    class: D([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [he(" 节点图标 "), e.$slots.icon ? le(e.$slots, "icon", Fl(re({
    key: 0
  }, e.nodeStatus))) : e.icon ? ($(), X(s, re({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? ($(), X(s, re({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : he("v-if", !0)], 2)) : he("v-if", !0), A("span", {
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
  }, [he(" 拖拽图标 "), e.$slots["drag-icon"] ? le(e.$slots, "drag-icon", Fl(re({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? ($(), X(s, re({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? ($(), X(s, re({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : ($(), X(c, {
    key: 3
  }))], 2)) : he("v-if", !0)], 2)], 42, Yf), he(" 额外 "), e.extra ? ($(), X(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : he("v-if", !0)], 10, Uf);
}
var Zl = /* @__PURE__ */ ce(Gf, [["render", Zf]]);
const Xf = z({
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
function Jf(e, t, n, l, a, r) {
  return $(), X(zn, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: Z(() => [le(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var Qf = /* @__PURE__ */ ce(Xf, [["render", Jf]]);
const ev = z({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: Qf,
    BaseTreeNode: Zl
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${Y("tree")}-node-list`], l = Mn(), {
      nodeKey: a
    } = _e(e), r = d(() => {
      var s, c;
      return (c = (s = l.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : c.call(s, a.value);
    }), o = d(() => {
      var s;
      const c = new Set(l.expandedKeys || []), u = (s = l.flattenTreeData) == null ? void 0 : s.filter((v) => {
        var p, h;
        return (p = v.pathParentKeys) != null && p.includes(a.value) ? !l.filterTreeNode || ((h = l.filterTreeNode) == null ? void 0 : h.call(l, v.treeNodeData)) : !1;
      });
      return u == null ? void 0 : u.filter((v) => {
        var p;
        if (r.value)
          return (p = v.pathParentKeys) == null ? void 0 : p.every((y) => c.has(y));
        const h = v.pathParentKeys.indexOf(a.value);
        return v.pathParentKeys.slice(h + 1).every((y) => c.has(y));
      });
    }), i = d(() => {
      var s, c;
      return ((s = l.currentExpandKeys) == null ? void 0 : s.includes(a.value)) && ((c = o.value) == null ? void 0 : c.length);
    });
    return {
      classNames: n,
      visibleNodeList: o,
      show: i,
      expanded: r,
      onTransitionEnd() {
        var s;
        (s = l.onExpandEnd) == null || s.call(l, a.value);
      }
    };
  }
});
function tv(e, t, n, l, a, r) {
  const o = ve("BaseTreeNode"), i = ve("ExpandTransition");
  return $(), X(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: Z(() => [e.show ? ($(), V("div", {
      key: 0,
      class: D(e.classNames)
    }, [($(!0), V(Pe, null, wt(e.visibleNodeList, (s) => ($(), X(o, re({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : he("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var nv = /* @__PURE__ */ ce(ev, [["render", tv]]), lv = Object.defineProperty, $a = Object.getOwnPropertySymbols, ov = Object.prototype.hasOwnProperty, av = Object.prototype.propertyIsEnumerable, ka = (e, t, n) => t in e ? lv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, rv = (e, t) => {
  for (var n in t || (t = {}))
    ov.call(t, n) && ka(e, n, t[n]);
  if ($a)
    for (var n of $a(t))
      av.call(t, n) && ka(e, n, t[n]);
  return e;
}, iv = z({
  name: "TreeNode",
  inheritAttrs: !1,
  props: rv({}, Zl.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = pr();
    return () => f(Pe, null, [f(Zl, re(e, n, {
      key: l.value
    }), t), f(nv, {
      key: l.value,
      nodeKey: l.value
    }, null)]);
  }
});
function sv(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: l,
    checkStrictly: a,
    halfCheckedKeys: r,
    onlyCheckLeaf: o
  } = _e(e), i = m(!1), s = m([]), c = m([]), u = m(), v = m(), p = (y) => xf({
    initCheckedKeys: y,
    key2TreeNode: l.value,
    checkStrictly: a.value,
    onlyCheckLeaf: o.value
  }), h = (y) => {
    const b = p(y);
    [s.value, c.value] = b;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), Nn(() => {
    n.value ? [u.value, v.value] = p(n.value) : i.value && (u.value = void 0, v.value = void 0, s.value = [], c.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => u.value || s.value),
    indeterminateKeys: d(() => a.value && r.value ? r.value : v.value || c.value),
    setCheckedState(y, b, w = !1) {
      return w ? h(y) : (s.value = y, c.value = b), [s.value, c.value];
    }
  };
}
function uv(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: l,
    showLine: a,
    blockNode: r,
    checkable: o,
    loadMore: i,
    draggable: s
  } = _e(e), c = m([]);
  Nn(() => {
    var p, h;
    c.value = Hf(t.value || [], {
      selectable: (p = l == null ? void 0 : l.value) != null ? p : !1,
      showLine: !!(a != null && a.value),
      blockNode: !!(r != null && r.value),
      checkable: (h = o == null ? void 0 : o.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const u = d(() => Sf(c.value)), v = d(() => Ef(u.value));
  return {
    treeData: c,
    flattenTreeData: u,
    key2TreeNode: v
  };
}
const cv = z({
  name: "Tree",
  components: {
    VirtualList: rr,
    TreeNode: iv
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
      showLine: a,
      multiple: r,
      loadMore: o,
      checkStrictly: i,
      checkedKeys: s,
      defaultCheckedKeys: c,
      selectedKeys: u,
      defaultSelectedKeys: v,
      expandedKeys: p,
      defaultExpandedKeys: h,
      checkedStrategy: y,
      selectable: b,
      checkable: w,
      blockNode: N,
      fieldNames: I,
      size: S,
      defaultExpandAll: C,
      filterTreeNode: E,
      draggable: _,
      allowDrop: g,
      defaultExpandSelected: j,
      defaultExpandChecked: F,
      autoExpandParent: L,
      halfCheckedKeys: O,
      onlyCheckLeaf: K,
      animation: R
    } = _e(e), Q = Y("tree"), te = d(() => [`${Q}`, {
      [`${Q}-checkable`]: w.value,
      [`${Q}-show-line`]: a.value
    }, `${Q}-size-${S.value}`]), oe = it(n, "switcher-icon"), x = it(n, "loading-icon"), q = it(n, "drag-icon"), me = it(n, "icon"), ne = it(n, "title"), ie = it(n, "extra"), {
      treeData: Se,
      flattenTreeData: ge,
      key2TreeNode: ye
    } = uv(Oe({
      treeData: l,
      selectable: b,
      showLine: a,
      blockNode: N,
      checkable: w,
      fieldNames: I,
      loadMore: o,
      draggable: _
    })), {
      checkedKeys: se,
      indeterminateKeys: ke,
      setCheckedState: tt
    } = sv(Oe({
      defaultCheckedKeys: c,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ye,
      halfCheckedKeys: O,
      onlyCheckLeaf: K
    })), [Be, De] = Pn((v == null ? void 0 : v.value) || [], Oe({
      value: u
    })), Me = m([]), Te = m();
    function Ze() {
      if (h != null && h.value) {
        const M = /* @__PURE__ */ new Set([]);
        return h.value.forEach((G) => {
          if (M.has(G))
            return;
          const J = ye.value.get(G);
          J && [...L.value ? J.pathParentKeys : [], G].forEach((ae) => M.add(ae));
        }), [...M];
      }
      if (C.value)
        return ge.value.filter((M) => M.children && M.children.length).map((M) => M.key);
      if (j.value || F.value) {
        const M = /* @__PURE__ */ new Set([]), G = (J) => {
          J.forEach((ae) => {
            const fe = ye.value.get(ae);
            fe && (fe.pathParentKeys || []).forEach((be) => M.add(be));
          });
        };
        return j.value && G(Be.value), F.value && G(se.value), [...M];
      }
      return [];
    }
    const [W, P] = Pn(Ze(), Oe({
      value: p
    })), H = m([]), ue = d(() => {
      const M = new Set(W.value), G = new Set(H.value);
      return ge.value.filter((J) => {
        var ae;
        if (!(!E || !E.value || (E == null ? void 0 : E.value(J.treeNodeData))))
          return !1;
        const be = Ke(J.parentKey), Ct = (ae = J.pathParentKeys) == null ? void 0 : ae.every((It) => M.has(It) && !G.has(It));
        return be || Ct;
      });
    });
    function we(M, G = y.value) {
      let J = [...M];
      return G === "parent" ? J = M.filter((ae) => {
        const fe = ye.value.get(ae);
        return fe && !(!Ke(fe.parentKey) && M.includes(fe.parentKey));
      }) : G === "child" && (J = M.filter((ae) => {
        var fe, be;
        return !((be = (fe = ye.value.get(ae)) == null ? void 0 : fe.children) != null && be.length);
      })), J;
    }
    function Ee(M) {
      return M.map((G) => {
        var J;
        return ((J = ye.value.get(G)) == null ? void 0 : J.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Je(M) {
      const {
        targetKey: G,
        targetChecked: J,
        newCheckedKeys: ae,
        newIndeterminateKeys: fe,
        event: be
      } = M, Ct = G ? ye.value.get(G) : void 0, It = we(ae);
      t("update:checkedKeys", It), t("update:halfCheckedKeys", fe), t("check", It, {
        checked: J,
        node: Ct == null ? void 0 : Ct.treeNodeData,
        checkedNodes: Ee(It),
        halfCheckedKeys: fe,
        halfCheckedNodes: Ee(fe),
        e: be
      });
    }
    function Ie(M) {
      const {
        targetKey: G,
        targetSelected: J,
        newSelectedKeys: ae,
        event: fe
      } = M, be = G ? ye.value.get(G) : void 0;
      t("update:selectedKeys", ae), t("select", ae, {
        selected: J,
        node: be == null ? void 0 : be.treeNodeData,
        selectedNodes: Ee(ae),
        e: fe
      });
    }
    function bt(M) {
      const {
        targetKey: G,
        targetExpanded: J,
        newExpandedKeys: ae,
        event: fe
      } = M, be = G ? ye.value.get(G) : void 0;
      t("expand", ae, {
        expanded: J,
        node: be == null ? void 0 : be.treeNodeData,
        expandedNodes: Ee(ae),
        e: fe
      }), t("update:expandedKeys", ae);
    }
    function Gt(M) {
      const [G, J] = tt(M, [], !0);
      Je({
        newCheckedKeys: G,
        newIndeterminateKeys: J
      });
    }
    function _t(M) {
      let G = M;
      !r.value && M.length > 1 && (G = [M[0]]), De(G), Ie({
        newSelectedKeys: G
      });
    }
    function ot(M) {
      H.value = [], P(M), bt({
        newExpandedKeys: M
      });
    }
    function Bt(M, G, J) {
      if (!M.length)
        return;
      let ae = [...se.value], fe = [...ke.value];
      M.forEach((be) => {
        const Ct = ye.value.get(be);
        Ct && ([ae, fe] = ya({
          node: Ct,
          checked: G,
          checkedKeys: [...ae],
          indeterminateKeys: [...fe],
          checkStrictly: i.value
        }));
      }), tt(ae, fe), Je({
        targetKey: J,
        targetChecked: Ke(J) ? void 0 : G,
        newCheckedKeys: ae,
        newIndeterminateKeys: fe
      });
    }
    function Ut(M, G, J) {
      if (!M.length)
        return;
      let ae;
      if (r.value) {
        const fe = new Set(Be.value);
        M.forEach((be) => {
          G ? fe.add(be) : fe.delete(be);
        }), ae = [...fe];
      } else
        ae = G ? [M[0]] : [];
      De(ae), Ie({
        targetKey: J,
        targetSelected: Ke(J) ? void 0 : G,
        newSelectedKeys: ae
      });
    }
    function B(M, G, J) {
      const ae = new Set(W.value);
      M.forEach((be) => {
        G ? ae.add(be) : ae.delete(be), Ye(be);
      });
      const fe = [...ae];
      P(fe), bt({
        targetKey: J,
        targetExpanded: Ke(J) ? void 0 : G,
        newExpandedKeys: fe
      });
    }
    function k(M, G, J) {
      const ae = ye.value.get(G);
      if (!ae)
        return;
      const [fe, be] = ya({
        node: ae,
        checked: M,
        checkedKeys: se.value,
        indeterminateKeys: ke.value,
        checkStrictly: i.value
      });
      tt(fe, be), Je({
        targetKey: G,
        targetChecked: M,
        newCheckedKeys: fe,
        newIndeterminateKeys: be,
        event: J
      });
    }
    function T(M, G) {
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
        event: G
      });
    }
    function ee(M, G, J) {
      if (H.value.includes(G) || !ye.value.get(G))
        return;
      const fe = new Set(W.value);
      M ? fe.add(G) : fe.delete(G);
      const be = [...fe];
      P(be), R.value && H.value.push(G), bt({
        targetKey: G,
        targetExpanded: M,
        newExpandedKeys: be,
        event: J
      });
    }
    function Ye(M) {
      const G = H.value.indexOf(M);
      H.value.splice(G, 1);
    }
    const We = d(() => o != null && o.value ? async (M) => {
      if (!Ge(o.value))
        return;
      const G = ye.value.get(M);
      if (!G)
        return;
      const {
        treeNodeData: J
      } = G;
      Me.value = [.../* @__PURE__ */ new Set([...Me.value, M])];
      try {
        await o.value(J), Me.value = Me.value.filter((ae) => ae !== M), ee(!0, M), se.value.includes(M) && k(!0, M);
      } catch (ae) {
        Me.value = Me.value.filter((fe) => fe !== M), console.error("[tree]load data error: ", ae);
      }
    } : void 0), rt = Oe({
      treeProps: e,
      switcherIcon: oe,
      loadingIcon: x,
      dragIcon: q,
      nodeIcon: me,
      nodeTitle: ne,
      nodeExtra: ie,
      treeData: Se,
      flattenTreeData: ge,
      key2TreeNode: ye,
      checkedKeys: se,
      indeterminateKeys: ke,
      selectedKeys: Be,
      expandedKeys: W,
      loadingKeys: Me,
      currentExpandKeys: H,
      onLoadMore: We,
      filterTreeNode: E,
      onCheck: k,
      onSelect: T,
      onExpand: ee,
      onExpandEnd: Ye,
      allowDrop(M, G) {
        const J = ye.value.get(M);
        return J && Ge(g.value) ? !!g.value({
          dropNode: J.treeNodeData,
          dropPosition: G
        }) : !0;
      },
      onDragStart(M, G) {
        const J = ye.value.get(M);
        Te.value = J, J && t("dragStart", G, J.treeNodeData);
      },
      onDragEnd(M, G) {
        const J = ye.value.get(M);
        Te.value = void 0, J && t("dragEnd", G, J.treeNodeData);
      },
      onDragOver(M, G) {
        const J = ye.value.get(M);
        J && t("dragOver", G, J.treeNodeData);
      },
      onDragLeave(M, G) {
        const J = ye.value.get(M);
        J && t("dragLeave", G, J.treeNodeData);
      },
      onDrop(M, G, J) {
        const ae = ye.value.get(M);
        Te.value && ae && !(ae.key === Te.value.key || ae.pathParentKeys.includes(Te.value.key || "")) && t("drop", {
          e: J,
          dragNode: Te.value.treeNodeData,
          dropNode: ae.treeNodeData,
          dropPosition: G
        });
      }
    });
    return Et(dr, rt), {
      classNames: te,
      visibleTreeNodeList: ue,
      treeContext: rt,
      virtualListRef: m(),
      computedSelectedKeys: Be,
      computedExpandedKeys: W,
      computedCheckedKeys: se,
      computedIndeterminateKeys: ke,
      getPublicCheckedKeys: we,
      getNodes: Ee,
      internalCheckNodes: Bt,
      internalSetCheckedKeys: Gt,
      internalSelectNodes: Ut,
      internalSetSelectedKeys: _t,
      internalExpandNodes: B,
      internalSetExpandedKeys: ot
    };
  },
  methods: {
    toggleCheck(e, t) {
      const {
        key2TreeNode: n,
        onCheck: l,
        checkedKeys: a
      } = this.treeContext, r = !a.includes(e), o = n.get(e);
      o && At(o) && l(r, e, t);
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
        const a = t.get(l);
        return a && At(a);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: l,
        treeContext: a
      } = this, {
        key2TreeNode: r
      } = a, o = Ae(e), i = (o ? e : [e]).filter((s) => {
        const c = r.get(s);
        return c && At(c) && (l || !n || Of(c));
      });
      this.internalCheckNodes(i, t, o ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const a = t.get(l);
        return a && ha(a);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ae(e), a = (l ? e : [e]).filter((r) => {
        const o = n.get(r);
        return o && ha(o);
      });
      this.internalSelectNodes(a, t, l ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const a = t.get(l);
        return a && ma(a);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ae(e), a = (l ? e : [e]).filter((r) => {
        const o = n.get(r);
        return o && ma(o);
      });
      this.internalExpandNodes(a, t, l ? void 0 : e);
    }
  }
});
function dv(e, t, n, l, a, r) {
  const o = ve("TreeNode"), i = ve("VirtualList");
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
    }) => [f(o, re({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : ($(!0), V(Pe, {
    key: 1
  }, wt(e.visibleTreeNodeList, (s) => ($(), X(o, re({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var zl = /* @__PURE__ */ ce(cv, [["render", dv]]);
const fv = Object.assign(zl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + zl.name, zl);
  }
}), vv = z({
  name: "TypographyEditContent",
  components: {
    Input: jn
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
    const l = [`${Y("typography")}-edit-content`], a = m();
    function r(i) {
      t("update:text", i), t("change", i);
    }
    function o() {
      t("end");
    }
    return Ve(() => {
      if (!a.value || !a.value.$el)
        return;
      const i = a.value.$el.querySelector("input");
      if (!i)
        return;
      i.focus && i.focus();
      const {
        length: s
      } = i.value;
      i.setSelectionRange(s, s);
    }), {
      classNames: l,
      inputRef: a,
      onBlur: o,
      onChange: r,
      onEnd: o
    };
  }
});
function pv(e, t, n, l, a, r) {
  const o = ve("Input");
  return $(), V("div", {
    class: D(e.classNames)
  }, [f(o, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: Jl(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var hv = /* @__PURE__ */ ce(vv, [["render", pv]]);
const mv = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), yv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gv = /* @__PURE__ */ A("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), bv = [gv];
function _v(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, bv, 14, yv);
}
var Nl = /* @__PURE__ */ ce(mv, [["render", _v]]);
const Cv = Object.assign(Nl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Nl.name, Nl);
  }
}), $v = z({
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
    }]), a = d(() => {
      const o = {};
      return e.size && (o.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
    });
    return {
      cls: l,
      innerStyle: a,
      onClick: (o) => {
        t("click", o);
      }
    };
  }
}), kv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wv = /* @__PURE__ */ A("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), Sv = [wv];
function Ev(e, t, n, l, a, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: D(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
  }, Sv, 14, kv);
}
var Ll = /* @__PURE__ */ ce($v, [["render", Ev]]);
const Ov = Object.assign(Ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ll.name, Ll);
  }
}), xv = z({
  name: "TypographyOperations",
  components: {
    Tooltip: fn,
    IconCheckCircleFill: ro,
    IconCopy: Cv,
    IconEdit: Ov
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
      t: a
    } = eo();
    return {
      prefixCls: n,
      showExpand: l,
      t: a,
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
function Pv(e, t, n, l, a, r) {
  const o = ve("IconEdit"), i = ve("Tooltip"), s = ve("IconCheckCircleFill"), c = ve("IconCopy");
  return $(), V(Pe, null, [e.editable ? ($(), X(i, re({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: Z(() => [A("span", {
      class: D(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = at((...u) => e.onEditClick && e.onEditClick(...u), ["stop"]))
    }, [f(o)], 2)]),
    _: 1
  }, 16, ["content"])) : he("v-if", !0), e.copyable ? ($(), X(i, Fl(re({
    key: 1
  }, e.copyTooltipProps)), {
    content: Z(() => [le(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [qe(je(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: Z(() => [A("span", {
      class: D({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = at((...u) => e.onCopyClick && e.onCopyClick(...u), ["stop"]))
    }, [le(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? ($(), X(s, {
      key: 0
    })) : ($(), X(c, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : he("v-if", !0), e.showExpand ? ($(), V("a", {
    key: 2,
    class: D(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = at((...u) => e.onExpandClick && e.onExpandClick(...u), ["stop"]))
  }, [le(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [qe(je(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : he("v-if", !0)], 64);
}
var wa = /* @__PURE__ */ ce(xv, [["render", Pv]]);
let ze;
function Bv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function Vl(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var Iv = (e, t, n, l) => {
  ze || (ze = document.createElement("div"), document.body.appendChild(ze));
  const {
    rows: a,
    suffix: r,
    ellipsisStr: o
  } = t, i = window.getComputedStyle(e), s = Bv(i), c = Vl(i.lineHeight), u = Math.round(c * a + Vl(i.paddingTop) + Vl(i.paddingBottom));
  ze.setAttribute("style", s), ze.setAttribute("aria-hidden", "true"), ze.style.height = "auto", ze.style.minHeight = "auto", ze.style.maxHeight = "auto", ze.style.position = "fixed", ze.style.left = "0", ze.style.top = "-99999999px", ze.style.zIndex = "-200", ze.style.whiteSpace = "normal";
  const v = La({
    render() {
      return f("span", null, [n]);
    }
  });
  v.mount(ze);
  const p = Array.prototype.slice.apply(ze.childNodes[0].cloneNode(!0).childNodes);
  v.unmount(), ze.innerHTML = "";
  const h = document.createTextNode(`${o}${r}`);
  ze.appendChild(h), p.forEach((N) => {
    ze.appendChild(N);
  });
  const y = document.createTextNode(l);
  ze.insertBefore(y, h);
  function b() {
    return ze.offsetHeight <= u;
  }
  if (b())
    return {
      ellipsis: !1,
      text: l
    };
  function w(N, I = 0, S = l.length, C = 0) {
    const E = Math.floor((I + S) / 2), _ = l.slice(0, E);
    if (N.textContent = _, I >= S - 1)
      for (let g = S; g >= I; g -= 1) {
        const j = l.slice(0, g);
        if (N.textContent = j, b() || !j)
          return;
      }
    b() ? w(N, E, S, E) : w(N, I, E, C);
  }
  return w(y), {
    text: y.textContent,
    ellipsis: !0
  };
};
const Tv = async (e) => {
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
  const l = window.getSelection(), a = window.document.createRange();
  l == null || l.removeAllRanges(), a.selectNode(n), l == null || l.addRange(a);
  try {
    window.document.execCommand("copy");
  } catch (r) {
    console.error(`execCommand Error: ${r}`);
  }
  l == null || l.removeAllRanges(), window.document.body.removeChild(n);
};
let zt;
function zv(e) {
  if (!e)
    return "";
  zt || (zt = document.createElement("div"), zt.setAttribute("aria-hidden", "true"), document.body.appendChild(zt));
  const t = La({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(zt);
  const n = zt.innerText;
  return t.unmount(), n;
}
var Nv = Object.defineProperty, Lv = Object.defineProperties, Vv = Object.getOwnPropertyDescriptors, Sa = Object.getOwnPropertySymbols, Dv = Object.prototype.hasOwnProperty, Av = Object.prototype.propertyIsEnumerable, Ea = (e, t, n) => t in e ? Nv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, jv = (e, t) => {
  for (var n in t || (t = {}))
    Dv.call(t, n) && Ea(e, n, t[n]);
  if (Sa)
    for (var n of Sa(t))
      Av.call(t, n) && Ea(e, n, t[n]);
  return e;
}, Fv = (e, t) => Lv(e, Vv(t));
function hr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Xl(e);
}
function Mv(e) {
  const {
    bold: t,
    mark: n,
    underline: l,
    delete: a,
    code: r
  } = e, o = [];
  return t && o.push("b"), l && o.push("u"), a && o.push("del"), r && o.push("code"), n && o.push("mark"), o;
}
function Oa(e, t) {
  const {
    mark: n
  } = e, l = Mv(e), a = Le(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return l.reduce((r, o) => f(o, o === "mark" ? {
    style: a
  } : {}, hr(r) ? r : {
    default: () => [r]
  }), t);
}
function Kv(e) {
  const t = !!e.showTooltip, n = Le(e.showTooltip) && e.showTooltip.type === "popover" ? hc : fn, l = Le(e.showTooltip) && e.showTooltip.props || {};
  return Fv(jv({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: !1,
    css: !1
  }, Ht(e, ["showTooltip"])), {
    showTooltip: t,
    TooltipComponent: n,
    tooltipProps: l
  });
}
var Rv = z({
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
      editing: a,
      defaultEditing: r,
      ellipsis: o,
      copyable: i,
      editable: s,
      copyText: c,
      editText: u,
      copyDelay: v,
      component: p
    } = _e(e), h = Y("typography"), y = d(() => [h, {
      [`${h}-${e.type}`]: e.type,
      [`${h}-disabled`]: e.disabled
    }]), b = m(), w = m(""), [N, I] = Pn(r.value, Oe({
      value: a
    })), S = d(() => s.value && N.value);
    function C() {
      n("update:editing", !0), n("editStart"), I(!0);
    }
    function E(se) {
      n("update:editText", se), n("change", se);
    }
    function _() {
      N.value && (n("update:editing", !1), n("editEnd"), I(!1));
    }
    const g = m(!1);
    let j = null;
    function F() {
      var se;
      const ke = (se = c.value) != null ? se : w.value;
      Tv(ke || ""), g.value = !0, n("copy", ke), j = setTimeout(() => {
        g.value = !1;
      }, v.value);
    }
    jl(() => {
      j && clearTimeout(j), j = null;
    });
    const L = m(!1), O = m(!1), K = m(""), R = d(() => Kv(Le(o.value) && o.value || {}));
    let Q = null;
    function te() {
      const se = !O.value;
      O.value = se, n("expand", se);
    }
    function oe(se = !1) {
      return R.value.css ? f(wa, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: g.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: se || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: C,
        onCopy: F,
        onExpand: te
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(wa, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: g.value,
        isEllipsis: L.value,
        expanded: O.value,
        forceRenderExpand: se,
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
        ellipsis: se,
        text: ke
      } = Iv(b.value, R.value, oe(!!R.value.expandable), w.value);
      L.value !== se && (L.value = se, R.value.css || n("ellipsis", se)), K.value !== ke && (K.value = ke || "");
    }
    function q() {
      o.value && !O.value && (On(Q), Q = Ya(() => {
        x();
      }));
    }
    jl(() => {
      On(Q);
    }), pe(() => R.value.rows, () => {
      q();
    }), pe(o, (se) => {
      se ? q() : L.value = !1;
    });
    let me = [];
    const ne = () => {
      if (o.value || i.value || s.value) {
        const se = zv(me);
        se !== w.value && (w.value = se, q());
      }
    };
    Ve(ne), ut(ne);
    const ie = m(), Se = m(!1), ge = () => {
      if (b.value && ie.value) {
        const se = ie.value.offsetHeight > b.value.offsetHeight;
        se !== Se.value && (Se.value = se, n("ellipsis", se));
      }
    }, ye = d(() => O.value ? {} : {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": R.value.rows,
      "-webkit-box-orient": "vertical"
    });
    return () => {
      var se, ke;
      if (me = ((se = t.default) == null ? void 0 : se.call(t)) || [], S.value) {
        const ue = (ke = u.value) != null ? ke : w.value;
        return f(hv, {
          text: ue,
          onChange: (we) => {
            we !== ue && E(we);
          },
          onEnd: _
        }, null);
      }
      const {
        suffix: tt,
        ellipsisStr: Be,
        showTooltip: De,
        tooltipProps: Me,
        TooltipComponent: Te
      } = R.value, Ze = L.value && !O.value, W = Ze && !De ? {
        title: w.value
      } : {}, P = p.value;
      if (R.value.css) {
        const ue = Oa(e, me), we = f(P, re({
          class: y.value,
          ref: b,
          style: ye.value
        }, W, l), {
          default: () => [f("span", {
            ref: ie
          }, [ue])]
        });
        return Se.value ? f(Te, re(Me, {
          onResize: () => ge()
        }), {
          default: () => [we],
          content: () => w.value
        }) : f(ln, {
          onResize: () => {
            ge();
          }
        }, hr(we) ? we : {
          default: () => [we]
        });
      }
      const H = Oa(e, Ze ? K.value : me);
      return f(ln, {
        onResize: () => q()
      }, {
        default: () => [f(P, re({
          class: y.value,
          ref: b
        }, W, l), {
          default: () => [Ze && De ? f(Te, Me, {
            default: () => [f("span", null, [H])],
            content: () => w.value
          }) : H, Ze ? Be : null, tt, oe()]
        })]
      });
    };
  }
}), Hv = z({
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
    } = _e(e), l = Y("typography"), a = d(() => t != null && t.value ? "blockquote" : "div"), r = d(() => [{
      [`${l}-spacing-close`]: (n == null ? void 0 : n.value) === "close"
    }]);
    return {
      component: a,
      classNames: r
    };
  },
  render() {
    const {
      component: e,
      classNames: t
    } = this;
    return f(Rv, re({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function Wv(e) {
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
        return (l, a) => l.x - a.x;
      case "right":
        return (l, a) => a.x - l.x;
      case "up":
        return (l, a) => l.y - a.y;
      case "bottom":
        return (l, a) => a.y - l.y;
      default:
        throw new Error("");
    }
  }
  return {
    getCursorIcon: t,
    getMoveIncrementHandler: n
  };
}
function qv(e, t, n, l) {
  const a = n ?? m(0);
  return pe(e, (r) => {
    if (!r)
      return;
    const o = Wv(t);
    r.style.cursor = o.getCursorIcon();
    const i = o.getMoveIncrementHandler(), s = {
      x: 0,
      y: 0
    }, c = (p) => {
      const h = i(s, p);
      (!l || l(a.value + h)) && (a.value += i(s, p)), s.x = p.x, s.y = p.y;
    }, u = (p) => {
      p.stopPropagation();
    }, v = (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = "default", document.removeEventListener("mousemove", c);
    };
    r.addEventListener("mousedown", (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = r.style.cursor, s.x = p.x, s.y = p.y, document.addEventListener("mousemove", c), document.addEventListener("mouseup", u, {
        capture: !0,
        once: !0
      }), document.addEventListener("click", v, {
        capture: !0,
        once: !0
      });
    }, {
      capture: !0
    });
  }), a;
}
function Kn(e) {
  function t(r) {
    return d(() => {
      const i = $t(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue($t(r)) : "";
    });
  }
  function n(r) {
    return d(() => {
      const i = $t(e);
      if (i) {
        const s = $t(r);
        return i.style[s];
      }
      return "";
    });
  }
  function l(r) {
    const o = r ?? t("display");
    return d(() => $t(e) ? {
      isFlex: o.value === "flex",
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
  function a() {
    return d(() => {
      const o = $t(e);
      if (!o || !o.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Kn(o.parentElement).getFlexBoxInfo();
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
    getParentFlexBoxInfo: a
  };
}
const nn = /* @__PURE__ */ new Map();
function Gv(e) {
  pe(e, (t) => {
    if (!t) {
      nn.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const n = Kn(t);
    nn.forEach((l, a) => {
      l.value = n.getComputedStyle(a).value;
    });
  });
}
function Uv(e) {
  return nn.has(e) || nn.set(e, m(null)), nn.get(e);
}
function St(e) {
  return Vr() ? (Dr(e), !0) : !1;
}
function xe(e) {
  return typeof e == "function" ? e() : U(e);
}
const rn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Yv = (e) => e != null, Zv = Object.prototype.toString, Xv = (e) => Zv.call(e) === "[object Object]", Jv = () => {
};
function Qv(e) {
  return e || ht();
}
function ep(e, t = {}) {
  if (!Ql(e))
    return _e(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    n[l] = Lr(() => ({
      get() {
        return e.value[l];
      },
      set(a) {
        var r;
        if ((r = xe(t.replaceRef)) != null ? r : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[l] = a, e.value = i;
          } else {
            const i = { ...e.value, [l]: a };
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[l] = a;
      }
    }));
  return n;
}
function mr(e, t = !0, n) {
  Qv() ? Ve(e, n) : t ? e() : Fe(e);
}
function tp(e, t = 1e3, n = {}) {
  const {
    immediate: l = !0,
    immediateCallback: a = !1
  } = n;
  let r = null;
  const o = m(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function s() {
    o.value = !1, i();
  }
  function c() {
    const u = xe(t);
    u <= 0 || (o.value = !0, a && e(), i(), r = setInterval(e, u));
  }
  if (l && rn && c(), Ql(t) || typeof t == "function") {
    const u = pe(t, () => {
      o.value && rn && c();
    });
    St(u);
  }
  return St(s), {
    isActive: o,
    pause: s,
    resume: c
  };
}
function Kt(e) {
  var t;
  const n = xe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const gt = rn ? window : void 0, np = rn ? window.document : void 0;
function Xe(...e) {
  let t, n, l, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, a] = e, t = gt) : [t, n, l, a] = e, !t)
    return Jv;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const r = [], o = () => {
    r.forEach((u) => u()), r.length = 0;
  }, i = (u, v, p, h) => (u.addEventListener(v, p, h), () => u.removeEventListener(v, p, h)), s = pe(
    () => [Kt(t), xe(a)],
    ([u, v]) => {
      if (o(), !u)
        return;
      const p = Xv(v) ? { ...v } : v;
      r.push(
        ...n.flatMap((h) => l.map((y) => i(u, h, y, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), o();
  };
  return St(c), c;
}
function lp() {
  const e = m(!1), t = ht();
  return t && Ve(() => {
    e.value = !0;
  }, t), e;
}
function Rn(e) {
  const t = lp();
  return d(() => (t.value, !!e()));
}
function yr(e, t, n = {}) {
  const { window: l = gt, ...a } = n;
  let r;
  const o = Rn(() => l && "MutationObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => {
    const p = xe(e), h = (Array.isArray(p) ? p : [p]).map(Kt).filter(Yv);
    return new Set(h);
  }), c = pe(
    () => s.value,
    (p) => {
      i(), o.value && p.size && (r = new MutationObserver(t), p.forEach((h) => r.observe(h, a)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => r == null ? void 0 : r.takeRecords(), v = () => {
    i(), c();
  };
  return St(v), {
    isSupported: o,
    stop: v,
    takeRecords: u
  };
}
function op(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: l = void 0,
    window: a = gt
  } = t, r = m(!1), o = l ? 1e3 / l : null;
  let i = 0, s = null;
  function c(p) {
    if (!r.value || !a)
      return;
    i || (i = p);
    const h = p - i;
    if (o && h < o) {
      s = a.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), s = a.requestAnimationFrame(c);
  }
  function u() {
    !r.value && a && (r.value = !0, i = 0, s = a.requestAnimationFrame(c));
  }
  function v() {
    r.value = !1, s != null && a && (a.cancelAnimationFrame(s), s = null);
  }
  return n && u(), St(v), {
    isActive: sn(r),
    pause: v,
    resume: u
  };
}
function ap(e, t = {}) {
  const { window: n = gt } = t, l = Rn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let a;
  const r = m(!1), o = (c) => {
    r.value = c.matches;
  }, i = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", o) : a.removeListener(o));
  }, s = Nn(() => {
    l.value && (i(), a = n.matchMedia(xe(e)), "addEventListener" in a ? a.addEventListener("change", o) : a.addListener(o), r.value = a.matches);
  });
  return St(() => {
    s(), i(), a = void 0;
  }), r;
}
function rp(e, t = {}) {
  var n, l;
  const {
    pointerTypes: a,
    preventDefault: r,
    stopPropagation: o,
    exact: i,
    onMove: s,
    onEnd: c,
    onStart: u,
    initialValue: v,
    axis: p = "both",
    draggingElement: h = gt,
    containerElement: y,
    handle: b = e
  } = t, w = m(
    (n = xe(v)) != null ? n : { x: 0, y: 0 }
  ), N = m(), I = (g) => a ? a.includes(g.pointerType) : !0, S = (g) => {
    xe(r) && g.preventDefault(), xe(o) && g.stopPropagation();
  }, C = (g) => {
    var j;
    if (g.button !== 0 || xe(t.disabled) || !I(g) || xe(i) && g.target !== xe(e))
      return;
    const F = xe(y), L = (j = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : j.call(F), O = xe(e).getBoundingClientRect(), K = {
      x: g.clientX - (F ? O.left - L.left + F.scrollLeft : O.left),
      y: g.clientY - (F ? O.top - L.top + F.scrollTop : O.top)
    };
    (u == null ? void 0 : u(K, g)) !== !1 && (N.value = K, S(g));
  }, E = (g) => {
    if (xe(t.disabled) || !I(g) || !N.value)
      return;
    const j = xe(y), F = xe(e).getBoundingClientRect();
    let { x: L, y: O } = w.value;
    (p === "x" || p === "both") && (L = g.clientX - N.value.x, j && (L = Math.min(Math.max(0, L), j.scrollWidth - F.width))), (p === "y" || p === "both") && (O = g.clientY - N.value.y, j && (O = Math.min(Math.max(0, O), j.scrollHeight - F.height))), w.value = {
      x: L,
      y: O
    }, s == null || s(w.value, g), S(g);
  }, _ = (g) => {
    xe(t.disabled) || !I(g) || N.value && (N.value = void 0, c == null || c(w.value, g), S(g));
  };
  if (rn) {
    const g = { capture: (l = t.capture) != null ? l : !0 };
    Xe(b, "pointerdown", C, g), Xe(h, "pointermove", E, g), Xe(h, "pointerup", _, g);
  }
  return {
    ...ep(w),
    position: w,
    isDragging: d(() => !!N.value),
    style: d(
      () => `left:${w.value.x}px;top:${w.value.y}px;`
    )
  };
}
function ip(e, t, n = {}) {
  const { window: l = gt, ...a } = n;
  let r;
  const o = Rn(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((v) => Kt(v)) : [Kt(e)]), c = pe(
    s,
    (v) => {
      if (i(), o.value && l) {
        r = new ResizeObserver(t);
        for (const p of v)
          p && r.observe(p, a);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), c();
  };
  return St(u), {
    isSupported: o,
    stop: u
  };
}
function gr(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: l = !0,
    windowScroll: a = !0,
    immediate: r = !0
  } = t, o = m(0), i = m(0), s = m(0), c = m(0), u = m(0), v = m(0), p = m(0), h = m(0);
  function y() {
    const b = Kt(e);
    if (!b) {
      n && (o.value = 0, i.value = 0, s.value = 0, c.value = 0, u.value = 0, v.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const w = b.getBoundingClientRect();
    o.value = w.height, i.value = w.bottom, s.value = w.left, c.value = w.right, u.value = w.top, v.value = w.width, p.value = w.x, h.value = w.y;
  }
  return ip(e, y), pe(() => Kt(e), (b) => !b && y()), yr(e, y, {
    attributeFilter: ["style", "class"]
  }), a && Xe("scroll", y, { capture: !0, passive: !0 }), l && Xe("resize", y, { passive: !0 }), mr(() => {
    r && y();
  }), {
    height: o,
    bottom: i,
    left: s,
    right: c,
    top: u,
    width: v,
    x: p,
    y: h,
    update: y
  };
}
function sp(e) {
  const {
    x: t,
    y: n,
    document: l = np,
    multiple: a,
    interval: r = "requestAnimationFrame",
    immediate: o = !0
  } = e, i = Rn(() => xe(a) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), s = m(null), c = () => {
    var v, p;
    s.value = xe(a) ? (v = l == null ? void 0 : l.elementsFromPoint(xe(t), xe(n))) != null ? v : [] : (p = l == null ? void 0 : l.elementFromPoint(xe(t), xe(n))) != null ? p : null;
  }, u = r === "requestAnimationFrame" ? op(c, { immediate: o }) : tp(c, r, { immediate: o });
  return {
    isSupported: i,
    element: s,
    ...u
  };
}
const up = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function br(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: l = !1,
    initialValue: a = { x: 0, y: 0 },
    window: r = gt,
    target: o = r,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let c = null;
  const u = m(a.x), v = m(a.y), p = m(null), h = typeof t == "function" ? t : up[t], y = (E) => {
    const _ = h(E);
    c = E, _ && ([u.value, v.value] = _, p.value = "mouse");
  }, b = (E) => {
    if (E.touches.length > 0) {
      const _ = h(E.touches[0]);
      _ && ([u.value, v.value] = _, p.value = "touch");
    }
  }, w = () => {
    if (!c || !r)
      return;
    const E = h(c);
    c instanceof MouseEvent && E && (u.value = E[0] + r.scrollX, v.value = E[1] + r.scrollY);
  }, N = () => {
    u.value = a.x, v.value = a.y;
  }, I = s ? (E) => s(() => y(E), {}) : (E) => y(E), S = s ? (E) => s(() => b(E), {}) : (E) => b(E), C = s ? () => s(() => w(), {}) : () => w();
  if (o) {
    const E = { passive: !0 };
    Xe(o, ["mousemove", "dragover"], I, E), n && t !== "movement" && (Xe(o, ["touchstart", "touchmove"], S, E), l && Xe(o, "touchend", N, E)), i && t === "page" && Xe(r, "scroll", C, { passive: !0 });
  }
  return {
    x: u,
    y: v,
    sourceType: p
  };
}
function ho(e = {}) {
  const {
    window: t = gt,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: a = !0,
    includeScrollbar: r = !0
  } = e, o = m(n), i = m(l), s = () => {
    t && (r ? (o.value = t.innerWidth, i.value = t.innerHeight) : (o.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), mr(s), Xe("resize", s, { passive: !0 }), a) {
    const c = ap("(orientation: portrait)");
    pe(c, () => s());
  }
  return { width: o, height: i };
}
function cp(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function dp() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function fp(e) {
  const t = /^(\d*\.?\d+)(px|%|rem|em|ex|ch|vw|vh|vmin|vmax)$|^auto$/i, n = e.match(t);
  if (n) {
    const l = n[1] || "", a = n[2] || "auto";
    return {
      number: l,
      unit: a
    };
  } else
    return {
      number: "",
      unit: ""
    };
}
function _r(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function mo(e, t) {
  if (!_r(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function dt(e, t) {
  if (!_r(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length));
  return null;
}
function Cr(e, t) {
  const n = `*.${t.idPrefix}${e}`, l = document.querySelector(n);
  if (!l)
    throw new Error(`target element with id ${e} not found`);
  return l;
}
function vp(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function pp(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function hp(e) {
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
function Dl(e, t) {
  t.add && e.classList.add(t.add), t.remove && e.classList.remove(t.remove), t.change && e.classList.replace(t.change.oldClass, t.change.newClass);
}
const Ce = m(null), nt = {
  props: Oe(/* @__PURE__ */ new Map()),
  styles: Oe(/* @__PURE__ */ new Map()),
  propsCode: m(null),
  stylesCode: m(null),
  classes: m([])
}, Bn = /* @__PURE__ */ new Map();
function wn() {
  return Ce;
}
function mp(e) {
  const t = Cr(e, go());
  Ce.value = t, hp(t);
}
function yp(e) {
  Ce.value = e, wr();
}
function $r(e) {
  if (Bn.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = m(Symbol(e));
  return Bn.set(e, t), sn(t);
}
function gp(e) {
  const t = Bn.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function kr() {
  return sn(nt);
}
function bp(e) {
  if (nt.props.clear(), nt.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      nt.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      nt.styles.set(t, n);
  e.propsCode !== void 0 && (nt.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (nt.stylesCode.value = e.stylesCode), e.classes !== void 0 && (nt.classes.value = e.classes), wr();
}
function _p() {
  return {
    props: nt.propsCode,
    styles: nt.stylesCode
  };
}
function Cp(e) {
  return d(() => nt.styles.has(e));
}
function $p() {
  return d(() => Ce.value !== null);
}
function kp() {
  return d(() => Ce.value === null ? null : mo(Ce.value, go()));
}
function wr() {
  for (const e of Bn.values())
    e.value = Symbol(e.value.description);
}
const In = m("en"), yo = /* @__PURE__ */ new Map(), xa = d(() => {
  const e = yo.get(In.value);
  if (e == null)
    throw new Error(`No message found for locale ${In.value}`);
  return e;
});
function wp(e) {
  In.value = e;
}
function Sp(e, t) {
  yo.set(e, t);
}
function Ne(e) {
  var t;
  return xa.value.hasOwnProperty(e) ? xa.value[e] : (console.warn(`No message found for key ${e} in locale ${In.value}`), ((t = yo.get("en")) == null ? void 0 : t[e]) || e.split(".").pop() || "");
}
const Nt = m(null);
let st = d(() => null), vn, Sr, Er, Or, xr, Pr;
function go() {
  return vn;
}
function Ep(e) {
  Nt.value = Cr(e, vn);
}
function Op() {
  Nt.value = null;
}
function xp() {
  return Sr;
}
function Pp(e) {
  Er = e.emitSetCommandFn, Or = e.emitResetCommandFn, e.emitJumpSourceCodeFn, xr = e.emitApplyCommandFn, Pr = e.emitClassesUpdateFn, vn = e.selectorConfig, Sr = e.elementTreeData;
  const {
    hoverElement: t
  } = Np(e.selectorConfig);
  Lp(t), st = t, wp(e.languageConfig.locale), Object.entries(e.languageConfig.messages).forEach(([n, l]) => {
    Sp(n, l);
  });
}
function Bp() {
  const e = Ce.value;
  if (e) {
    const t = vp(e, vn);
    pp(t);
  }
}
function Al(e) {
  const {
    targetId: t,
    classes: n
  } = e;
  let l = t;
  l === void 0 && Ce.value && (l = dt(Ce.value, vn)), Pr({
    targetId: l,
    classes: n
  });
}
function Ip() {
  xr();
}
function Tp() {
  return d(() => !0);
}
function bo(e) {
  Array.isArray(e) || (e = [e]), Er(e);
}
function zp(e, t = "style") {
  Or([{
    propertyName: e,
    type: t
  }]);
}
function Np(e) {
  const {
    x: t,
    y: n
  } = br({
    type: "client"
  }), {
    element: l
  } = sp({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (l.value === null)
        return null;
      const r = l.value.closest(e.selectors);
      return r === null || r.closest("[layout-tool-panel]") ? Nt.value ? Nt.value : null : r;
    })
  };
}
function Lp(e) {
  Xe(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (yp(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Xe(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Vp(e, t) {
  const n = Uv(e);
  return d({
    get: () => n.value,
    set: (a) => {
      const r = {
        propertyName: e,
        values: {
          [e]: a
        }
      }, o = t ? t(a) : [];
      bo([r, ...o]), n.value = a;
    }
  });
}
const Dp = /* @__PURE__ */ z({
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
    const t = e, n = Vp(t.styleName), l = d(() => {
      if (!n.value)
        return {
          value: 0,
          unit: "px"
        };
      const u = /(-?\d+)([a-zA-Z%]+)/, v = n.value.match(u), p = parseFloat(v[1]), h = v[2];
      return {
        value: p,
        unit: h
      };
    });
    let a = l.value.value, r = l.value.unit;
    const o = d({
      get: () => l.value.value,
      set: (u) => {
        a = u, n.value = `${a}${r}`;
      }
    });
    d({
      get: () => l.value.unit,
      set: (u) => {
        r = u, n.value = `${a}${r}`;
      }
    });
    const i = m(null);
    qv(i, t.direction, o, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function c() {
    }
    return (u, v) => ($(), V("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: de([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [A("div", {
      onClick: c
    }, [A("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, je(o.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
}, ct = /* @__PURE__ */ et(Dp, [["__scopeId", "data-v-19de9462"]]), Ap = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, jp = /* @__PURE__ */ z({
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
    }, a = (r) => r >= 0;
    return (r, o) => {
      const i = kt;
      return $(), X(i, {
        header: U(Ne)("nt.style.spacing.header"),
        key: "spacing"
      }, {
        default: Z(() => [A("div", Ap, [A("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: de([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), o[0] || (o[0] = A("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), f(ct, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: de([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: de([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: de([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: de([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": a,
          "clip-path": l.left.clipPath,
          style: de({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": a,
          "clip-path": l.up.clipPath,
          style: de([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": a,
          "clip-path": l.right.clipPath,
          style: de({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ct, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": a,
          "clip-path": l.bottom.clipPath,
          style: de({
            bottom: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          })
        }, null, 8, ["clip-path", "style"])])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Fp = {
  class: "flex flex-row gap-0"
}, Qt = /* @__PURE__ */ z({
  __name: "IconRadio",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: l,
      userEdited: a
    } = t.model, r = l.value.some((i) => i.icon);
    function o(i) {
      n.value = i, a();
    }
    return (i, s) => {
      const c = An, u = fn, v = dn;
      return $(), V("div", Fp, [U(r) ? ($(!0), V(Pe, {
        key: 0
      }, wt(U(l), (p) => ($(), X(u, {
        content: p.label,
        key: p.value,
        "popup-container": "[layout-tool-panel]"
      }, {
        default: Z(() => [f(c, {
          size: "small",
          type: "outline",
          status: U(n) === p.value ? "success" : void 0,
          onClick: (h) => o(p.value)
        }, {
          icon: Z(() => [A("span", {
            class: D(p.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content"]))), 128)) : ($(!0), V(Pe, {
        key: 1
      }, wt(U(l), (p) => ($(), X(v, {
        key: p.value,
        checked: U(n) === p.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => o(p.value)
      }, {
        default: Z(() => [qe(je(p.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function en(e) {
  const {
    propertyName: t,
    options: n
  } = e, l = m(void 0), a = d(() => $t(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), r = $r(e.propertyName);
  pe(r, () => {
    if (!Ce.value)
      return;
    const i = cp(Ce.value, t);
    l.value = i;
  }, {
    immediate: !0
  });
  function o() {
    bo({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: l.value
      }
    });
  }
  return {
    value: l,
    options: a,
    userEdited: o
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
    const n = e, l = t, a = d(() => n.label ?? n.keyId), r = Cp(n.keyId);
    function o() {
      zp(n.keyId), l("reset");
    }
    const i = d(() => r.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, c) => {
      const u = ef;
      return $(), X(u, {
        "popup-container": "[layout-tool-panel]",
        content: "Do you want to reset this setting?",
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: o
      }, {
        default: Z(() => [A("div", {
          class: "px-2",
          style: de(i.value)
        }, [A("span", {
          class: D(["item-title text-capitalize", {
            "bg-gray-300": U(r)
          }])
        }, je(a.value), 3)], 4)]),
        _: 1
      });
    };
  }
}), Mp = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Kp = /* @__PURE__ */ z({
  __name: "Layout",
  setup(e) {
    const t = Kn(Ce), n = en({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), l = t.getFlexBoxInfo(n.value), a = en({
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
    }), r = d(() => a.value.value === "row" ? Ne("nt.style.layout.align-title-byRow") : Ne("nt.style.layout.align-title-byCol")), o = d(() => a.value.value === "row" ? [{
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
    }]), i = en({
      propertyName: "align-items",
      options: o
    }), s = d(() => a.value.value === "row" ? Ne("nt.style.layout.justify-title-byRow") : Ne("nt.style.layout.justify-title-byCol")), c = d(() => a.value.value === "row" ? [{
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
    }]), u = en({
      propertyName: "justify-content",
      options: c
    });
    return (v, p) => {
      const h = kt;
      return $(), X(h, {
        header: U(Ne)("nt.style.layout.header"),
        key: "layout"
      }, {
        default: Z(() => [A("div", Mp, [f(lt, {
          keyId: "display",
          label: U(Ne)("nt.style.layout.display-label")
        }, null, 8, ["label"]), f(Qt, {
          model: U(n)
        }, null, 8, ["model"]), U(l).isFlex ? ($(), V(Pe, {
          key: 0
        }, [f(lt, {
          keyId: "flex-direction",
          label: U(Ne)("nt.style.layout.direction")
        }, null, 8, ["label"]), f(Qt, {
          model: U(a)
        }, null, 8, ["model"]), f(lt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(Qt, {
          model: U(u)
        }, null, 8, ["model"]), f(lt, {
          keyId: "align-items",
          label: r.value
        }, null, 8, ["label"]), f(Qt, {
          model: U(i)
        }, null, 8, ["model"])], 64)) : he("", !0)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Rp = /* @__PURE__ */ et(Kp, [["__scopeId", "data-v-b52fb1c7"]]), Hp = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Wp = /* @__PURE__ */ z({
  __name: "FlexItem",
  setup(e) {
    const n = Kn(Ce).getParentFlexBoxInfo(), l = d(() => n.value.direction === "row" ? {
      title: Ne("nt.style.flexitem.title.vertical"),
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
      title: Ne("nt.style.flexitem.title.horizontal"),
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
    }), a = en({
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
    return (r, o) => {
      const i = kt;
      return U(n).isFlex ? ($(), X(i, {
        header: U(Ne)("nt.style.flexitem.header"),
        key: "flex-item"
      }, {
        default: Z(() => [A("div", Hp, [f(lt, {
          keyId: "align-self",
          label: l.value.title
        }, null, 8, ["label"]), f(Qt, {
          model: U(a)
        }, null, 8, ["model"])])]),
        _: 1
      }, 8, ["header"])) : he("", !0);
    };
  }
});
const qp = /* @__PURE__ */ et(Wp, [["__scopeId", "data-v-ef8fe436"]]);
const Gp = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, Wt = /* @__PURE__ */ z({
  __name: "InputWithUnitSelector",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      inputValue: n,
      selectValue: l,
      inputPlaceholder: a,
      itemOptions: r,
      userEdited: o,
      updateInput: i,
      updateSelect: s
    } = t.model, c = m(null);
    function u(p, h) {
      var y;
      h.currentTarget === h.target && (i(p), o(), (y = c.value) == null || y.blur());
    }
    function v(p) {
      s(p), o();
    }
    return (p, h) => {
      const y = jn, b = rd;
      return $(), V("div", Gp, [f(y, {
        ref_key: "inputRef",
        ref: c,
        size: "mini",
        modelValue: U(n),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => Ql(n) ? n.value = w : null),
        placeholder: U(a),
        onChange: u
      }, null, 8, ["modelValue", "placeholder"]), f(b, {
        "popup-container": "[layout-tool-panel]",
        size: "mini",
        options: U(r),
        "model-value": U(l),
        onChange: v,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": Z(() => h[1] || (h[1] = [])),
        _: 1
      }, 8, ["options", "model-value"])]);
    };
  }
});
function Up(e, t) {
  return e.styles.get(t);
}
function qt(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: l
  } = e, a = m(t.input), r = m(t.select ?? (l == null ? void 0 : l.defaultOptionValue)), o = n.map((b) => typeof b == "string" ? {
    value: b,
    label: b
  } : b);
  function i(b) {
    return o.find((w) => w.value === b);
  }
  const s = m(null), c = d(() => {
    var b;
    return r.value ? (b = i(r.value)) == null ? void 0 : b.label : "";
  }), u = d(() => {
    if (r.value) {
      const b = i(r.value);
      return (b == null ? void 0 : b.value) ?? (b == null ? void 0 : b.label);
    }
    return "";
  }), v = $r(e.propertyName);
  pe(v, () => {
    const b = Up(kr(), e.propertyName);
    if (b === void 0) {
      a.value = t.input, r.value = t.select;
      return;
    }
    const {
      number: w,
      unit: N
    } = fp(b);
    a.value = w, r.value = N;
  });
  function p() {
    const b = a.value, w = r.value;
    let N = "";
    w === "auto" ? N = w : N = `${b}${w}`, bo({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: N
      }
    });
  }
  function h(b) {
    Pa(r, a, l);
  }
  function y(b) {
    r.value = b, Ba(r, a, l);
  }
  return Pa(r, a, l), Ba(r, a, l), {
    inputValue: a,
    selectValue: r,
    selectItem: s,
    selectDisplay: c,
    inputPlaceholder: u,
    itemOptions: o,
    userEdited: p,
    updateSelect: y,
    updateInput: h
  };
}
function Pa(e, t, n) {
  const {
    nonValueOptions: l,
    defaultOptionValue: a,
    optionValueIfnonValue: r
  } = n ?? {}, o = t.value;
  o && (l && a && o.length > 0 && e.value && l.includes(e.value) && (e.value = a), r && l && o && e.value && l.includes(e.value) && (e.value = r), !o && l && (e.value = l[0]));
}
function Ba(e, t, n) {
  const {
    nonValueOptions: l
  } = n ?? {}, a = e.value;
  if (a) {
    if (l && l.includes(a))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const r = dp();
      n.specialProperty === "width" ? t.value = `${r.width}` : n.specialProperty === "height" && (t.value = `${r.height}`);
    }
  }
}
const Yp = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Zp = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], Xp = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Jp = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Qp = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], eh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], th = /* @__PURE__ */ z({
  __name: "Width",
  setup(e) {
    const n = qt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Yp,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "width",
      label: "Width"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const nh = /* @__PURE__ */ et(th, [["__scopeId", "data-v-bf60f62f"]]), lh = /* @__PURE__ */ z({
  __name: "Height",
  setup(e) {
    const n = qt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Zp,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "height",
      label: "Height"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const oh = /* @__PURE__ */ et(lh, [["__scopeId", "data-v-6ddf53f3"]]), ah = /* @__PURE__ */ z({
  __name: "MaxWidth",
  setup(e) {
    const n = qt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Jp,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "max-width",
      label: "Max W"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const rh = /* @__PURE__ */ et(ah, [["__scopeId", "data-v-839a5360"]]), ih = /* @__PURE__ */ z({
  __name: "MinWidth",
  setup(e) {
    const n = qt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Xp,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "min-width",
      label: "Min W"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const sh = /* @__PURE__ */ et(ih, [["__scopeId", "data-v-01858b83"]]), uh = /* @__PURE__ */ z({
  __name: "MaxHeight",
  setup(e) {
    const n = qt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: eh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "max-height",
      label: "Max H"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const ch = /* @__PURE__ */ et(uh, [["__scopeId", "data-v-3543e0dd"]]), dh = /* @__PURE__ */ z({
  __name: "MinHeight",
  setup(e) {
    const n = qt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Qp,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (l, a) => ($(), V(Pe, null, [f(lt, {
      "key-id": "min-height",
      label: "Min H"
    }), f(Wt, {
      model: U(n)
    }, null, 8, ["model"])], 64));
  }
});
const fh = /* @__PURE__ */ et(dh, [["__scopeId", "data-v-0ba932b2"]]), vh = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, ph = /* @__PURE__ */ z({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const l = kt;
      return $(), X(l, {
        header: U(Ne)("nt.style.size.header"),
        key: "size"
      }, {
        default: Z(() => [A("div", vh, [f(nh), f(oh), f(sh), f(fh), f(rh), f(ch)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const hh = /* @__PURE__ */ et(ph, [["__scopeId", "data-v-c5aac6a8"]]);
function mh() {
  return {
    treeData: xp()
  };
}
const yh = {
  class: "relative"
}, gh = /* @__PURE__ */ z({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = m(null);
    function n(c) {
      const u = c[0];
      mp(u);
    }
    function l(c) {
      var h;
      const u = c.target;
      if (!u || !u.classList.contains("arco-tree-node-title"))
        return;
      const v = (h = u.parentElement) == null ? void 0 : h.getAttribute("data-key");
      if (!v)
        throw new Error("Cannot find key for selected element");
      const p = parseInt(v);
      p < 0 || Ep(p);
    }
    function a(c) {
      Op();
    }
    pe(wn(), (c) => {
      if (c || t.value.selectAll(!1), t.value && c) {
        const u = dt(c, go());
        if (u == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(u, !0);
      }
    });
    const r = m(!0), o = d(() => r.value ? "i-mdi-arrow-collapse-vertical" : "i-mdi-arrow-expand-vertical"), i = d(() => r.value ? Ne("tree.collapse_all") : Ne("tree.expand_all"));
    function s() {
      r.value = !r.value, t.value.expandAll(r.value), r.value || t.value.expandNode(-1, !r.value);
    }
    return (c, u) => {
      const v = fv, p = fn, h = er;
      return $(), X(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: Z(() => [A("div", yh, [f(v, {
          ref_key: "el",
          ref: t,
          data: c.model.treeData,
          "show-line": "",
          "block-node": "",
          onSelect: n,
          onMouseenterCapture: at(l, ["stop"]),
          onMouseleaveCapture: at(a, ["stop"])
        }, null, 8, ["data"]), f(p, {
          content: i.value,
          "popup-container": "body",
          style: {
            "z-index": "9999999"
          }
        }, {
          default: Z(() => [A("div", {
            class: D(["text-xl absolute top-0 right-5 cursor-pointer", o.value]),
            onClick: s
          }, null, 2)]),
          _: 1
        }, 8, ["content"])])]),
        _: 1
      });
    };
  }
});
const bh = /* @__PURE__ */ et(gh, [["__scopeId", "data-v-d4408ade"]]);
function _h() {
  return {
    code: _p()
  };
}
const Ch = {}, $h = {
  class: "border border-gray-300 border-solid p-2 rounded-md"
};
function kh(e, t) {
  return $(), V("div", $h, [le(e.$slots, "default")]);
}
const Br = /* @__PURE__ */ et(Ch, [["render", kh]]), wh = /* @__PURE__ */ z({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (l, a) => {
      const r = Hv;
      return $(), V("div", null, [a[0] || (a[0] = A("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "styles", -1)), f(Br, null, {
        default: Z(() => [f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: Z(() => [qe(je(U(n)), 1)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
}), Sh = {
  class: "w-fit relative"
}, Eh = /* @__PURE__ */ z({
  __name: "EditableTag",
  props: {
    tagKey: {},
    value: {}
  },
  emits: ["valueChange", "remove"],
  setup(e, {
    emit: t
  }) {
    const n = e, l = t, a = m(null), r = m(n.value);
    let o = n.value;
    const i = m(!1), s = () => {
      i.value = !0, Fe(() => {
        a.value && a.value.focus();
      });
    }, c = () => {
      i.value = !1, l("valueChange", {
        key: n.tagKey,
        oldValue: o,
        newValue: r.value
      }), o = r.value;
    }, u = () => {
      a.value.blur();
    }, v = () => {
      l("remove", {
        key: n.tagKey
      });
    };
    return (p, h) => {
      const y = jn, b = dn;
      return $(), V("div", Sh, [ft(f(y, {
        ref_key: "inputRef",
        ref: a,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: r.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
        modelModifiers: {
          trim: !0
        },
        onKeyup: Jl(u, ["enter"]),
        onBlur: c
      }, null, 8, ["modelValue"]), [[vt, i.value]]), f(b, {
        class: "cursor-pointer",
        style: de({
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
}), Oh = {
  class: "w-fit relative"
}, xh = /* @__PURE__ */ z({
  __name: "AddableTag",
  emits: ["add"],
  setup(e, {
    emit: t
  }) {
    const n = t, l = m(null), a = m(""), r = m(!1), o = () => {
      r.value = !0, Fe(() => {
        l.value && l.value.focus();
      });
    }, i = () => {
      r.value = !1, a.value && (n("add", {
        value: a.value
      }), a.value = "");
    }, s = () => {
      l.value.blur();
    };
    return (c, u) => {
      const v = jn, p = ur, h = dn;
      return $(), V("div", Oh, [ft(f(v, {
        ref_key: "inputRef",
        ref: l,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: a.value,
        "onUpdate:modelValue": u[0] || (u[0] = (y) => a.value = y),
        modelModifiers: {
          trim: !0
        },
        onKeyup: Jl(s, ["enter"]),
        onBlur: i
      }, null, 8, ["modelValue"]), [[vt, r.value]]), f(h, {
        class: "cursor-pointer",
        style: de({
          visibility: r.value ? "hidden" : "visible"
        }),
        onClick: o
      }, {
        icon: Z(() => [f(p)]),
        _: 1
      }, 8, ["style"])]);
    };
  }
}), Ph = {
  class: "flex flex-wrap gap-4"
}, Bh = /* @__PURE__ */ z({
  __name: "ClassesList",
  setup(e) {
    const t = d(() => kr().classes);
    function n(r, o, i) {
      const s = [...t.value];
      s[r] = i, Al({
        classes: s
      }), Dl(wn().value, {
        change: {
          oldClass: o,
          newClass: i
        }
      });
    }
    function l(r) {
      const o = [...t.value];
      o.splice(r, 1), Al({
        classes: o
      }), Dl(wn().value, {
        remove: t.value[r]
      });
    }
    function a(r) {
      const o = [...t.value, r];
      Al({
        classes: o
      }), Dl(wn().value, {
        add: r
      });
    }
    return (r, o) => ($(), V("div", null, [o[3] || (o[3] = A("div", {
      class: "text-lg mb-2 text-gray-400"
    }, "classes", -1)), f(Br, null, {
      default: Z(() => [A("div", Ph, [($(!0), V(Pe, null, wt(t.value, (i, s) => ($(), X(Eh, {
        tagKey: s,
        value: i,
        onValueChange: o[0] || (o[0] = (c) => n(c.key, c.oldValue, c.newValue)),
        onRemove: o[1] || (o[1] = (c) => l(c.key))
      }, null, 8, ["tagKey", "value"]))), 256)), f(xh, {
        onAdd: o[2] || (o[2] = (i) => a(i.value))
      })])]),
      _: 1
    })]));
  }
}), Ih = {
  class: "flex flex-col gap-2"
}, Th = /* @__PURE__ */ z({
  __name: "Code",
  setup(e) {
    const t = _h();
    return (n, l) => ($(), V("div", Ih, [f(Bh), f(wh, {
      model: U(t)
    }, null, 8, ["model"])]));
  }
}), zh = {
  class: "bg-white/30 backdrop-blur-md"
}, Nh = /* @__PURE__ */ z({
  __name: "MainPanel",
  setup(e) {
    Gv(Ce);
    const t = d(() => !!Ce.value), n = mh();
    return (l, a) => {
      const r = Nd, o = kn, i = wf;
      return $(), V("div", zh, [f(i, {
        "default-active-key": "element-tree"
      }, {
        default: Z(() => [f(o, {
          key: "style",
          title: U(Ne)("nt.mainPanel.style"),
          disabled: !t.value
        }, {
          default: Z(() => [f(r, {
            accordion: ""
          }, {
            default: Z(() => [f(qp), f(Rp), f(jp), f(hh)]),
            _: 1
          })]),
          _: 1
        }, 8, ["title", "disabled"]), f(o, {
          key: "element-tree",
          title: U(Ne)("nt.mainPanel.navigator")
        }, {
          default: Z(() => [f(bh, {
            model: U(n)
          }, null, 8, ["model"])]),
          _: 1
        }, 8, ["title"]), f(o, {
          key: "nicegui",
          title: U(Ne)("nt.mainPanel.code"),
          class: "x-panel-nicegui",
          disabled: !t.value
        }, {
          default: Z(() => [f(Th)]),
          _: 1
        }, 8, ["title", "disabled"]), f(o, {
          key: "cusStyle",
          title: U(Ne)("nt.mainPanel.cusStyle")
        }, null, 8, ["title"])]),
        _: 1
      })]);
    };
  }
});
const Lh = /* @__PURE__ */ et(Nh, [["__scopeId", "data-v-95f5c566"]]);
function Ir() {
  const {
    width: e,
    height: t
  } = ho(), n = d(() => `0 0 ${e.value} ${t.value}`), l = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: l
  };
}
const Vh = ["viewBox"], Dh = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      viewBox: n,
      styles: l
    } = Ir(), {
      rectStyles: a,
      p1: r,
      p2: o,
      p3: i,
      p4: s,
      p5: c,
      p6: u,
      p7: v,
      p8: p
    } = t.model;
    return (h, y) => ($(), V("svg", {
      class: "vis-aiming",
      viewBox: U(n),
      version: "1.1",
      style: de([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, U(l)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [A("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: de(U(a))
    }, null, 4), A("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, U(r), {
      r: "2"
    }), null, 16), A("circle", re({
      fill: "hotpink"
    }, U(o), {
      r: "2"
    }), null, 16), A("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, U(i), {
      r: "2"
    }), null, 16), A("circle", re({
      fill: "hotpink"
    }, U(s), {
      r: "2"
    }), null, 16), A("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, U(c), {
      r: "2"
    }), null, 16), A("circle", re({
      fill: "hotpink"
    }, U(u), {
      r: "2"
    }), null, 16), A("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, U(v), {
      r: "2"
    }), null, 16), A("circle", re({
      fill: "hotpink"
    }, U(p), {
      r: "2"
    }), null, 16)], 12, Vh));
  }
});
const Ah = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, jh = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const t = m(null), {
      style: n
    } = rp(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), l = kp(), a = $p();
    return (r, o) => {
      const i = dn, s = tf, c = An, u = $c, v = fn;
      return $(), V("div", {
        style: de([U(n), {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [A("div", Ah, [A("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(s, {
        class: "h-full"
      }, {
        default: Z(() => [o[1] || (o[1] = A("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), o[2] || (o[2] = A("span", {
          class: "font-bold"
        }, "toolkit", -1)), f(i, {
          color: "green"
        }, {
          default: Z(() => [qe(je(U(l)), 1)]),
          _: 1
        })]),
        _: 1
      })], 512), f(v, {
        content: U(Ne)("nt.apply_command")
      }, {
        default: Z(() => [f(u, {
          count: 9,
          dot: "",
          dotStyle: {
            width: "10px",
            height: "10px"
          }
        }, {
          default: Z(() => [ft(f(c, {
            shape: "circle",
            size: "mini",
            onClick: o[0] || (o[0] = (p) => U(Ip)())
          }, {
            default: Z(() => o[3] || (o[3] = [A("div", {
              class: "i-codicon-git-stash-apply text-1xl"
            }, null, -1)])),
            _: 1
          }, 512), [[vt, U(Tp)]])]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), f(v, {
        content: U(Ne)("nt.jump2code")
      }, {
        default: Z(() => [ft(f(c, {
          shape: "circle",
          size: "mini",
          onClick: U(Bp)
        }, {
          default: Z(() => o[4] || (o[4] = [A("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[vt, U(a)]])]),
        _: 1
      }, 8, ["content"])]), le(r.$slots, "default"), le(r.$slots, "footer")], 4);
    };
  }
});
function Fh() {
  const {
    width: e,
    height: t
  } = ho(), n = Oe(gr(st));
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
  }), a = d(() => st.value ? {
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
  }), o = d(() => st.value ? {
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
    topLine: a,
    rightLine: r,
    bottomLine: o,
    leftLine: i
  };
}
const Mh = ["viewBox"], Zt = "red", Kh = /* @__PURE__ */ z({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Ir(), {
      rectStyles: l,
      topLine: a,
      rightLine: r,
      bottomLine: o,
      leftLine: i
    } = Fh();
    return (s, c) => ($(), V("svg", {
      class: "vis-hover",
      viewBox: U(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: de([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none",
        "z-index": "9999999"
      }, U(n)])
    }, [A("rect", {
      fill: "none",
      stroke: Zt,
      "stroke-width": "1",
      style: de(U(l))
    }, null, 4), A("line", re({
      class: "top"
    }, U(a), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", re({
      class: "right"
    }, U(r), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", re({
      class: "bottom"
    }, U(o), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", re({
      class: "left"
    }, U(i), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, Mh));
  }
});
function Rh(e, t) {
  const {
    width: n
  } = ho(), {
    x: l,
    y: a
  } = br({
    type: "client"
  }), r = d(() => {
    let s = l.value, c = a.value;
    return n.value - l.value < 10 && (s -= 10), a.value < 10 && (c += 10), {
      x: s,
      y: c
    };
  }), o = d(() => t.value ? {
    display: "block",
    left: `${r.value.x}px`,
    top: `${r.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: d(() => t.value ? mo(t.value, e) : null),
    typeNameTagStyles: o
  };
}
function Hh(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: dt(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const Wh = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function Ia(e, t) {
  if (!Wh.has(mo(e, t)))
    return {
      isFlex: !1,
      direction: null
    };
  const n = window.getComputedStyle(e, null), l = n.getPropertyValue("display") === "flex";
  let a = null;
  return l && (a = n.getPropertyValue("flex-direction")), {
    isFlex: l,
    direction: a
  };
}
function Ta(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function qh(e, t) {
  function n(r, o) {
    return window.getComputedStyle(Ta(r, e), null).getPropertyValue(o);
  }
  function l(r) {
    const o = Ta(r, e);
    t.value = o;
  }
  function a(r) {
    gp(r);
  }
  return {
    queryStyle: n,
    selectTarget: l,
    onServerResetCommand: a
  };
}
async function Gh(e) {
  if (!e)
    return;
  const {
    loadResource: t
  } = await import("../../static/utils/resources.js"), n = window.path_prefix;
  await t(n + `${e}/trackBall.css`);
}
function Uh() {
  const e = Oe(gr(Ce));
  yr(Ce, () => {
    e.update();
  }, {
    attributes: !0
  }), Xe("scroll", e.update, !0);
  const t = d(() => Ce.value ? {
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
  }), n = d(() => Ce.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), l = d(() => Ce.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), a = d(() => Ce.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), r = d(() => Ce.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), o = d(() => Ce.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), i = d(() => Ce.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), s = d(() => Ce.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), c = d(() => Ce.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return sn(Ce), {
    rectStyles: t,
    p1: n,
    p2: l,
    p3: a,
    p4: r,
    p5: o,
    p6: i,
    p7: s,
    p8: c
  };
}
const Zh = /* @__PURE__ */ z({
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
    const l = e, a = n;
    function r(u) {
      const v = Ce.value;
      if (!v)
        return;
      const p = dt(v, l.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      a("setCommand", {
        id: p,
        commands: u
      });
    }
    function o(u) {
      const v = Ce.value;
      if (!v)
        return;
      const p = dt(v, l.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      a("resetCommand", {
        id: p,
        commands: u
      });
    }
    Ve(async () => {
      await Gh(l.resource_path), a("init");
    }), Pp({
      selectorConfig: l.selectorConfig,
      languageConfig: l.languageConfig,
      elementTreeData: l.elementTreeData,
      emitSetCommandFn: r,
      emitResetCommandFn: o,
      emitJumpSourceCodeFn: () => {
        const u = Ce.value;
        if (!u)
          return;
        const v = dt(u, l.selectorConfig);
        if (!v)
          throw new Error("not found selected element");
        a("jumpSourceCode", {
          id: v
        });
      },
      emitApplyCommandFn: () => {
        a("applyCommand");
      },
      emitClassesUpdateFn: (u) => {
        a("classesUpdate", u);
      }
    }), pe(() => l.currentTargetContext, () => {
      bp(l.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      typeNameTagStyles: i,
      typeName: s
    } = Rh(l.selectorConfig, st), c = Uh();
    return pe(st, (u) => {
      if (u) {
        const v = dt(u, l.selectorConfig);
        a("hoverChange", {
          id: v
        });
        return;
      }
      a("hoverChange", {
        id: null
      });
    }), pe(Ce, (u) => {
      const v = {
        isFlex: !1,
        direction: null
      };
      if (u) {
        const p = dt(u, l.selectorConfig), h = Hh(u, l.selectorConfig);
        let y = {
          isFlex: !1,
          direction: null
        };
        h && (y = Ia(h.dom, l.selectorConfig)), a("selectedChange", {
          id: p,
          parentBoxId: h !== null ? h.id : null,
          flexInfo: Ia(u, l.selectorConfig),
          parentFlexInfo: y
        });
        return;
      }
      a("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: v,
        parentFlexInfo: v
      });
    }), t(qh(l.selectorConfig, Ce)), (u, v) => ($(), X(Na, {
      to: "body"
    }, [f(Kh), f(Dh, {
      model: U(c),
      style: {
        "z-index": "9999999"
      }
    }, null, 8, ["model"]), f(jh, {
      class: "non-selectable",
      style: {
        "z-index": "9999999",
        width: "350px"
      }
    }, {
      default: Z(() => [le(u.$slots, "header"), f(Lh), le(u.$slots, "footer")]),
      _: 3
    }), A("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: de([U(i), {
        "z-index": "9999999"
      }])
    }, je(U(s)), 5)]));
  }
});
export {
  Zh as default
};
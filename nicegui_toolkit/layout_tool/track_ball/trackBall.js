const y = Vue.ref
const Oe = Vue.reactive
const Ge = Vue.inject
const d = Vue.computed
const dt = Vue.getCurrentInstance
const In = Vue.cloneVNode
const z = Vue.defineComponent
const pe = Vue.watch
const ze = Vue.onMounted
const wn = Vue.onUnmounted
const w = Vue.openBlock
const F = Vue.createElementBlock
const V = Vue.normalizeClass
const oe = Vue.renderSlot
const de = Vue.normalizeStyle
const M = Vue.createElementVNode
const ve = Vue.resolveComponent
const Z = Vue.createBlock
const he = Vue.createCommentVNode
const ml = Vue.toRef
const ge = Vue.toRefs
const v = Vue.createVNode
const ae = Vue.mergeProps
const He = Vue.createTextVNode
const We = Vue.nextTick
const ft = Vue.provide
const Be = Vue.Fragment
const Lr = Vue.createSlots
const Y = Vue.withCtx
const lt = Vue.withModifiers
const st = Vue.onUpdated
const Rt = Vue.onBeforeUnmount
const sn = Vue.readonly
const Ta = Vue.onDeactivated
const Vr = Vue.Teleport
const Tn = Vue.Transition
const Vt = Vue.withDirectives
const Dt = Vue.vShow
const Tt = Vue.resolveDynamicComponent
const Fe = Vue.toDisplayString
const At = Vue.renderList
const za = Vue.TransitionGroup
const zn = Vue.watchEffect
const Zo = Vue.isVNode
const Na = Vue.Comment
const Pt = Vue.h
const Ao = Vue.normalizeProps
const La = Vue.withKeys
const Dr = Vue.createApp
const _t = Vue.toValue
const ne = Vue.unref
const Xo = Vue.isRef
const Va = Vue.customRef
const Da = Vue.getCurrentScope
const Aa = Vue.onScopeDispose
const wt = Object.prototype.toString;
function De(e) {
  return wt.call(e) === "[object Array]";
}
function Nn(e) {
  return wt.call(e) === "[object Null]";
}
function jt(e) {
  return wt.call(e) === "[object Boolean]";
}
function Te(e) {
  return wt.call(e) === "[object Object]";
}
const yl = (e) => wt.call(e) === "[object Promise]";
function St(e) {
  return wt.call(e) === "[object String]";
}
function $e(e) {
  return wt.call(e) === "[object Number]" && e === e;
}
function je(e) {
  return e === void 0;
}
function qe(e) {
  return typeof e == "function";
}
function ja(e) {
  return Te(e) && Object.keys(e).length === 0;
}
const Ar = (e) => (e == null ? void 0 : e.$) !== void 0, Et = Symbol("ArcoConfigProvider"), fn = {
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
}, Fa = {
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
  calendar: fn,
  datePicker: {
    view: fn.view,
    month: fn.month,
    week: fn.week,
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
}, Ma = y("zh-CN"), Ka = Oe({
  "zh-CN": Fa
}), Jo = () => {
  const e = Ge(Et, void 0), t = d(() => {
    var l;
    return (l = e == null ? void 0 : e.locale) != null ? l : Ka[Ma.value];
  }), n = d(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (l, ...a) => {
      const r = l.split(".");
      let i = t.value;
      for (const s of r) {
        if (!i[s])
          return l;
        i = i[s];
      }
      return St(i) && a.length > 0 ? i.replace(/{(\d+)}/g, (s, c) => {
        var u;
        return (u = a[c]) != null ? u : s;
      }) : i;
    }
  };
};
var Ra = Object.defineProperty, Ha = Object.defineProperties, Wa = Object.getOwnPropertyDescriptors, gl = Object.getOwnPropertySymbols, qa = Object.prototype.hasOwnProperty, Ga = Object.prototype.propertyIsEnumerable, bl = (e, t, n) => t in e ? Ra(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ua = (e, t) => {
  for (var n in t || (t = {}))
    qa.call(t, n) && bl(e, n, t[n]);
  if (gl)
    for (var n of gl(t))
      Ga.call(t, n) && bl(e, n, t[n]);
  return e;
}, Ya = (e, t) => Ha(e, Wa(t));
const Za = "A", Xa = "arco", jo = "$arco", Me = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : Za;
}, Ke = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[jo] = Ya(Ua({}, (n = e.config.globalProperties[jo]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, U = (e) => {
  var t, n, o;
  const l = dt(), a = Ge(Et, void 0), r = (o = (n = a == null ? void 0 : a.prefixCls) != null ? n : (t = l == null ? void 0 : l.appContext.config.globalProperties[jo]) == null ? void 0 : t.classPrefix) != null ? o : Xa;
  return e ? `${r}-${e}` : r;
};
var jr = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(l, a) {
      return l[0] === n ? (o = a, !0) : !1;
    }), o;
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
        var o = e(this.__entries__, n), l = this.__entries__[o];
        return l && l[1];
      }, t.prototype.set = function(n, o) {
        var l = e(this.__entries__, n);
        ~l ? this.__entries__[l][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, l = e(o, n);
        ~l && o.splice(l, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var l = 0, a = this.__entries__; l < a.length; l++) {
          var r = a[l];
          n.call(o, r[1], r[0]);
        }
      }, t;
    }()
  );
}(), Fo = typeof window < "u" && typeof document < "u" && window.document === document, Sn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ja = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Sn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Qa = 2;
function ei(e, t) {
  var n = !1, o = !1, l = 0;
  function a() {
    n && (n = !1, e()), o && i();
  }
  function r() {
    Ja(a);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - l < Qa)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(r, t);
    l = s;
  }
  return i;
}
var ti = 20, ni = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], oi = typeof MutationObserver < "u", li = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ei(this.refresh.bind(this), ti);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, o = n.indexOf(t);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
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
      !Fo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), oi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Fo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, l = ni.some(function(a) {
        return !!~o.indexOf(a);
      });
      l && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Fr = function(e, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var l = o[n];
    Object.defineProperty(e, l, {
      value: t[l],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Ft = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Sn;
}, Mr = Ln(0, 0, 0, 0);
function En(e) {
  return parseFloat(e) || 0;
}
function _l(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, l) {
    var a = e["border-" + l + "-width"];
    return o + En(a);
  }, 0);
}
function ri(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, l = t; o < l.length; o++) {
    var a = l[o], r = e["padding-" + a];
    n[a] = En(r);
  }
  return n;
}
function ai(e) {
  var t = e.getBBox();
  return Ln(0, 0, t.width, t.height);
}
function ii(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Mr;
  var o = Ft(e).getComputedStyle(e), l = ri(o), a = l.left + l.right, r = l.top + l.bottom, i = En(o.width), s = En(o.height);
  if (o.boxSizing === "border-box" && (Math.round(i + a) !== t && (i -= _l(o, "left", "right") + a), Math.round(s + r) !== n && (s -= _l(o, "top", "bottom") + r)), !ui(e)) {
    var c = Math.round(i + a) - t, u = Math.round(s + r) - n;
    Math.abs(c) !== 1 && (i -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return Ln(l.left, l.top, i, s);
}
var si = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Ft(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Ft(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ui(e) {
  return e === Ft(e).document.documentElement;
}
function ci(e) {
  return Fo ? si(e) ? ai(e) : ii(e) : Mr;
}
function di(e) {
  var t = e.x, n = e.y, o = e.width, l = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, r = Object.create(a.prototype);
  return Fr(r, {
    x: t,
    y: n,
    width: o,
    height: l,
    top: n,
    right: t + o,
    bottom: l + n,
    left: t
  }), r;
}
function Ln(e, t, n, o) {
  return {
    x: e,
    y: t,
    width: n,
    height: o
  };
}
var fi = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ln(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ci(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), vi = (
  /** @class */
  function() {
    function e(t, n) {
      var o = di(n);
      Fr(this, {
        target: t,
        contentRect: o
      });
    }
    return e;
  }()
), pi = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new jr(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Ft(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new fi(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new vi(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Kr = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new jr(), Rr = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = li.getInstance(), o = new pi(t, n, this);
      Kr.set(this, o);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  Rr.prototype[e] = function() {
    var t;
    return (t = Kr.get(this))[e].apply(t, arguments);
  };
});
var Qo = function() {
  return typeof Sn.ResizeObserver < "u" ? Sn.ResizeObserver : Rr;
}(), $l;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})($l || ($l = {}));
var Cl;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Cl || (Cl = {}));
const Vn = (e) => !!(e && e.shapeFlag & 1), un = (e, t) => !!(e && e.shapeFlag & 6), hi = (e, t) => !!(e && e.shapeFlag & 8), el = (e, t) => !!(e && e.shapeFlag & 16), Hr = (e, t) => !!(e && e.shapeFlag & 32), zt = (e) => {
  var t, n;
  if (e)
    for (const o of e) {
      if (Vn(o) || un(o))
        return o;
      if (el(o, o.children)) {
        const l = zt(o.children);
        if (l)
          return l;
      } else if (Hr(o, o.children)) {
        const l = (n = (t = o.children).default) == null ? void 0 : n.call(t);
        if (l) {
          const a = zt(l);
          if (a)
            return a;
        }
      } else if (De(o)) {
        const l = zt(o);
        if (l)
          return l;
      }
    }
}, mi = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Wr = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (Vn(o) || un(o)) {
        const a = qe(t) ? t(o) : t;
        return e[n] = In(o, a, !0), !0;
      }
      const l = tl(o);
      if (l && l.length > 0 && Wr(l, t))
        return !0;
    }
  return !1;
}, tl = (e) => {
  if (el(e, e.children))
    return e.children;
  if (De(e))
    return e;
}, qr = (e) => {
  var t, n;
  if (Vn(e))
    return e.el;
  if (un(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const o = qr(e.component.subTree);
      if (o)
        return o;
    }
  } else {
    const o = tl(e);
    return Gr(o);
  }
}, Gr = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = qr(t);
      if (n)
        return n;
    }
}, bn = (e, t = !1) => {
  var n, o;
  const l = [];
  for (const a of e ?? [])
    Vn(a) || un(a) || t && hi(a, a.children) ? l.push(a) : el(a, a.children) ? l.push(...bn(a.children, t)) : Hr(a, a.children) ? l.push(...bn((o = (n = a.children).default) == null ? void 0 : o.call(n), t)) : De(a) && l.push(...bn(a, t));
  return l;
}, Ur = (e, t) => {
  var n;
  const o = [];
  if (un(e, e.type))
    e.type.name === t ? e.component && o.push(e.component.uid) : (n = e.component) != null && n.subTree && o.push(...Ur(e.component.subTree, t));
  else {
    const l = tl(e);
    l && o.push(...Yr(l, t));
  }
  return o;
}, Yr = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const o of e)
      n.push(...Ur(o, t));
  return n;
};
var on = z({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const l = y(), a = d(() => Ar(l.value) ? l.value.$el : l.value), r = (s) => {
      s && (o = new Qo((c) => {
        const u = c[0];
        t("resize", u);
      }), o.observe(s));
    }, i = () => {
      o && (o.disconnect(), o = null);
    };
    return pe(a, (s) => {
      o && i(), s && r(s);
    }), ze(() => {
      a.value && r(a.value);
    }), wn(() => {
      i();
    }), () => {
      var s, c;
      const u = zt((c = (s = n.default) == null ? void 0 : s.call(n)) != null ? c : []);
      return u ? In(u, {
        ref: l
      }, !0) : null;
    };
  }
});
const Zr = typeof window > "u" ? global : window, Xr = Zr.requestAnimationFrame, On = Zr.cancelAnimationFrame;
function Mo(e) {
  let t = 0;
  const n = (...o) => {
    t && On(t), t = Xr(() => {
      e(...o), t = 0;
    });
  };
  return n.cancel = () => {
    On(t), t = 0;
  }, n;
}
const nl = () => {
}, yi = () => {
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
}, ol = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Nt = (() => ol ? nl : (e, t, n, o = !1) => {
  e.addEventListener(t, n, o);
})(), xn = (() => ol ? nl : (e, t, n, o = !1) => {
  e.removeEventListener(t, n, o);
})(), gi = (e, t) => {
  var n;
  return ol ? nl() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, kl = (e, t) => {
  if (St(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return gi(n, t);
  }
  return e;
}, bi = (e, t) => {
  const n = e.getBoundingClientRect(), o = t.getBoundingClientRect();
  return {
    top: n.top - o.top,
    bottom: o.bottom - n.bottom,
    left: n.left - o.left,
    right: o.right - n.right,
    width: n.width,
    height: n.height
  };
};
var ue = (e, t) => {
  for (const [n, o] of t)
    e[n] = o;
  return e;
};
const _i = z({
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
      prefixCls: U("icon-hover")
    };
  }
});
function $i(e, t, n, o, l, a) {
  return w(), F("span", {
    class: V([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [oe(e.$slots, "default")], 2);
}
var Je = /* @__PURE__ */ ue(_i, [["render", $i]]);
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
    const n = U("icon"), o = d(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ki = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wi = /* @__PURE__ */ M("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Si = [wi];
function Ei(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Si, 14, ki);
}
var Hn = /* @__PURE__ */ ue(Ci, [["render", Ei]]);
const cn = Object.assign(Hn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Hn.name, Hn);
  }
}), Oi = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), xi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Pi = /* @__PURE__ */ M("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Bi = [Pi];
function Ii(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Bi, 14, xi);
}
var Wn = /* @__PURE__ */ ue(Oi, [["render", Ii]]);
const Ti = Object.assign(Wn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Wn.name, Wn);
  }
}), zi = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Ni = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Li = /* @__PURE__ */ M("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Vi = [Li];
function Di(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Vi, 14, Ni);
}
var qn = /* @__PURE__ */ ue(zi, [["render", Di]]);
const ll = Object.assign(qn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + qn.name, qn);
  }
}), Ai = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ji = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Fi = /* @__PURE__ */ M("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Mi = [Fi];
function Ki(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Mi, 14, ji);
}
var Gn = /* @__PURE__ */ ue(Ai, [["render", Ki]]);
const Jr = Object.assign(Gn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Gn.name, Gn);
  }
}), Ri = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Hi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wi = /* @__PURE__ */ M("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), qi = [Wi];
function Gi(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, qi, 14, Hi);
}
var Un = /* @__PURE__ */ ue(Ri, [["render", Gi]]);
const Qr = Object.assign(Un, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Un.name, Un);
  }
}), Mt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], Ui = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Yi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Zi = /* @__PURE__ */ M("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), Xi = [Zi];
function Ji(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Xi, 14, Yi);
}
var Yn = /* @__PURE__ */ ue(Ui, [["render", Ji]]);
const ct = Object.assign(Yn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Yn.name, Yn);
  }
}), Qi = z({
  name: "FeedbackIcon",
  components: {
    IconLoading: ct,
    IconCheckCircleFill: ll,
    IconExclamationCircleFill: Jr,
    IconCloseCircleFill: Qr
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = U("feedback-icon");
    return {
      cls: d(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function es(e, t, n, o, l, a) {
  const r = ve("icon-loading"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), c = ve("icon-close-circle-fill");
  return w(), F("span", {
    class: V(e.cls)
  }, [e.type === "validating" ? (w(), Z(r, {
    key: 0
  })) : e.type === "success" ? (w(), Z(i, {
    key: 1
  })) : e.type === "warning" ? (w(), Z(s, {
    key: 2
  })) : e.type === "error" ? (w(), Z(c, {
    key: 3
  })) : he("v-if", !0)], 2);
}
var rl = /* @__PURE__ */ ue(Qi, [["render", es]]);
const al = {
  key: "Enter",
  code: "Enter"
}, ts = {
  key: "Backspace",
  code: "Backspace"
};
var ns = Object.defineProperty, wl = Object.getOwnPropertySymbols, os = Object.prototype.hasOwnProperty, ls = Object.prototype.propertyIsEnumerable, Sl = (e, t, n) => t in e ? ns(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, rs = (e, t) => {
  for (var n in t || (t = {}))
    os.call(t, n) && Sl(e, n, t[n]);
  if (wl)
    for (var n of wl(t))
      ls.call(t, n) && Sl(e, n, t[n]);
  return e;
};
const Ht = (e, t) => {
  const n = rs({}, e);
  for (const o of t)
    o in n && delete n[o];
  return n;
};
function il(e, t) {
  const n = {};
  return t.forEach((o) => {
    const l = o;
    o in e && (n[l] = e[l]);
  }), n;
}
const as = Symbol("ArcoFormItemContext"), vt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: o
} = {}) => {
  const l = o ? {} : Ge(as, {}), a = d(() => {
    var u;
    return (u = e == null ? void 0 : e.value) != null ? u : l.size;
  }), r = d(() => (t == null ? void 0 : t.value) || l.disabled), i = d(() => (n == null ? void 0 : n.value) || l.error), s = ml(l, "feedback"), c = ml(l, "eventHandlers");
  return {
    formItemCtx: l,
    mergedSize: a,
    mergedDisabled: r,
    mergedError: i,
    feedback: s,
    eventHandlers: c
  };
}, pt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Ge(Et, void 0);
  return {
    mergedSize: d(() => {
      var l, a;
      return (a = (l = e == null ? void 0 : e.value) != null ? l : n == null ? void 0 : n.size) != null ? a : t;
    })
  };
};
function is(e) {
  const t = y();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: l,
      selectionEnd: a,
      value: r
    } = e.value;
    if (l == null || a == null)
      return;
    const i = r.slice(0, Math.max(0, l)), s = r.slice(Math.max(0, a));
    t.value = {
      selectionStart: l,
      selectionEnd: a,
      value: r,
      beforeTxt: i,
      afterTxt: s
    };
  }
  function o() {
    if (!e.value || !t.value)
      return;
    const {
      value: l
    } = e.value, {
      beforeTxt: a,
      afterTxt: r,
      selectionStart: i
    } = t.value;
    if (!a || !r || !i)
      return;
    let s = l.length;
    if (l.endsWith(r))
      s = l.length - r.length;
    else if (l.startsWith(a))
      s = a.length;
    else {
      const c = a[i - 1], u = l.indexOf(c, i - 1);
      u !== -1 && (s = u + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, o];
}
var ss = Object.defineProperty, El = Object.getOwnPropertySymbols, us = Object.prototype.hasOwnProperty, cs = Object.prototype.propertyIsEnumerable, Ol = (e, t, n) => t in e ? ss(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xl = (e, t) => {
  for (var n in t || (t = {}))
    us.call(t, n) && Ol(e, n, t[n]);
  if (El)
    for (var n of El(t))
      cs.call(t, n) && Ol(e, n, t[n]);
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
    attrs: o
  }) {
    const {
      size: l,
      disabled: a,
      error: r,
      modelValue: i
    } = ge(e), s = U("input"), c = y(), {
      mergedSize: u,
      mergedDisabled: f,
      mergedError: p,
      feedback: h,
      eventHandlers: m
    } = vt({
      size: l,
      disabled: a,
      error: r
    }), {
      mergedSize: g
    } = pt(u), [C, N] = is(c), I = y(e.defaultValue), S = d(() => {
      var W;
      return (W = e.modelValue) != null ? W : I.value;
    });
    pe(i, (W) => {
      (je(W) || Nn(W)) && (I.value = "");
    });
    let $ = S.value;
    const E = y(!1), _ = d(() => e.allowClear && !e.readonly && !f.value && !!S.value), b = y(!1), D = y(""), A = (W) => {
      var P;
      return qe(e.wordLength) ? e.wordLength(W) : (P = W.length) != null ? P : 0;
    }, L = d(() => A(S.value)), O = d(() => p.value || !!(Te(e.maxLength) && e.maxLength.errorOnly && L.value > R.value)), K = d(() => Te(e.maxLength) && !!e.maxLength.errorOnly), R = d(() => Te(e.maxLength) ? e.maxLength.length : e.maxLength), J = d(() => {
      const W = A("a");
      return Math.floor(R.value / W);
    }), ee = (W) => {
      var P, H;
      R.value && !K.value && A(W) > R.value && (W = (H = (P = e.wordSlice) == null ? void 0 : P.call(e, W, R.value)) != null ? H : W.slice(0, J.value)), I.value = W, t("update:modelValue", W);
    }, le = (W) => {
      c.value && W.target !== c.value && (W.preventDefault(), c.value.focus());
    }, x = (W, P) => {
      var H, ce;
      W !== $ && ($ = W, t("change", W, P), (ce = (H = m.value) == null ? void 0 : H.onChange) == null || ce.call(H, P));
    }, q = (W) => {
      var P, H;
      E.value = !0, $ = S.value, t("focus", W), (H = (P = m.value) == null ? void 0 : P.onFocus) == null || H.call(P, W);
    }, me = (W) => {
      var P, H;
      E.value = !1, x(S.value, W), t("blur", W), (H = (P = m.value) == null ? void 0 : P.onBlur) == null || H.call(P, W);
    }, te = (W) => {
      var P, H, ce;
      const {
        value: ke,
        selectionStart: Ee,
        selectionEnd: Xe
      } = W.target;
      if (W.type === "compositionend") {
        if (b.value = !1, D.value = "", R.value && !K.value && L.value >= R.value && A(ke) > R.value && Ee === Xe) {
          ie();
          return;
        }
        ee(ke), t("input", ke, W), (H = (P = m.value) == null ? void 0 : P.onInput) == null || H.call(P, W), ie();
      } else
        b.value = !0, D.value = S.value + ((ce = W.data) != null ? ce : "");
    }, ie = () => {
      C(), We(() => {
        c.value && S.value !== c.value.value && (c.value.value = S.value, N());
      });
    }, Se = (W) => {
      var P, H;
      const {
        value: ce
      } = W.target;
      if (!b.value) {
        if (R.value && !K.value && L.value >= R.value && A(ce) > R.value && W.inputType === "insertText") {
          ie();
          return;
        }
        ee(ce), t("input", ce, W), (H = (P = m.value) == null ? void 0 : P.onInput) == null || H.call(P, W), ie();
      }
    }, be = (W) => {
      ee(""), x("", W), t("clear", W);
    }, ye = (W) => {
      const P = W.key || W.code;
      !b.value && P === al.key && (x(S.value, W), t("pressEnter", W));
    }, se = d(() => [`${s}-outer`, `${s}-outer-size-${g.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: f.value
    }]), Ce = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: f.value,
      [`${s}-focus`]: E.value
    }]), Qe = d(() => [s, `${s}-size-${g.value}`]), Pe = d(() => Ht(o, Mt)), Ve = d(() => il(o, Mt)), Ae = d(() => {
      const W = xl(xl({}, Ve.value), e.inputAttrs);
      return O.value && (W["aria-invalid"] = !0), W;
    }), Ne = (W) => {
      var P;
      return v("span", ae({
        class: Ce.value,
        onMousedown: le
      }, W ? void 0 : Pe.value), [n.prefix && v("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), v("input", ae({
        ref: c,
        class: Qe.value,
        value: S.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: f.value,
        onInput: Se,
        onKeydown: ye,
        onFocus: q,
        onBlur: me,
        onCompositionstart: te,
        onCompositionupdate: te,
        onCompositionend: te
      }, Ae.value), null), _.value && v(Je, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: be
      }, {
        default: () => [v(cn, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!h.value) && v("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [!!e.maxLength && e.showWordLimit && v("span", {
        class: `${s}-word-limit`
      }, [L.value, He("/"), R.value]), (P = n.suffix) == null ? void 0 : P.call(n), !!h.value && v(rl, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: c,
      render: () => n.prepend || n.append ? v("span", ae({
        class: se.value
      }, Pe.value), [n.prepend && v("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), Ne(!0), n.append && v("span", {
        class: `${s}-append`
      }, [n.append()])]) : Ne()
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
const ds = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), fs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vs = /* @__PURE__ */ M("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), ps = [vs];
function hs(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, ps, 14, fs);
}
var Zn = /* @__PURE__ */ ue(ds, [["render", hs]]);
const Ko = Object.assign(Zn, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Zn.name, Zn);
  }
}), ea = Symbol("ArcoButtonGroup"), ms = z({
  name: "Button",
  components: {
    IconLoading: ct
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
      disabled: o
    } = ge(e), l = U("btn"), a = Ge(ea, void 0), r = d(() => {
      var h;
      return (h = n.value) != null ? h : a == null ? void 0 : a.size;
    }), i = d(() => !!(o.value || a != null && a.disabled)), {
      mergedSize: s,
      mergedDisabled: c
    } = vt({
      size: r,
      disabled: i
    }), {
      mergedSize: u
    } = pt(s), f = d(() => {
      var h, m, g, C, N, I;
      return [l, `${l}-${(m = (h = e.type) != null ? h : a == null ? void 0 : a.type) != null ? m : "secondary"}`, `${l}-shape-${(C = (g = e.shape) != null ? g : a == null ? void 0 : a.shape) != null ? C : "square"}`, `${l}-size-${u.value}`, `${l}-status-${(I = (N = e.status) != null ? N : a == null ? void 0 : a.status) != null ? I : "normal"}`, {
        [`${l}-long`]: e.long,
        [`${l}-loading`]: e.loading,
        [`${l}-disabled`]: c.value,
        [`${l}-link`]: St(e.href)
      }];
    });
    return {
      prefixCls: l,
      cls: f,
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
}), ys = ["href"], gs = ["type", "disabled"];
function bs(e, t, n, o, l, a) {
  const r = ve("icon-loading");
  return e.href ? (w(), F("a", {
    key: 0,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (w(), F("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (w(), Z(r, {
    key: 0,
    spin: "true"
  })) : oe(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), oe(e.$slots, "default")], 10, ys)) : (w(), F("button", {
    key: 1,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (w(), F("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (w(), Z(r, {
    key: 0,
    spin: !0
  })) : oe(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), oe(e.$slots, "default")], 10, gs));
}
var Xn = /* @__PURE__ */ ue(ms, [["render", bs]]);
const _s = z({
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
      status: o,
      disabled: l,
      shape: a
    } = ge(e), r = U("btn-group");
    return ft(ea, Oe({
      type: t,
      size: n,
      shape: a,
      status: o,
      disabled: l
    })), {
      prefixCls: r
    };
  }
});
function $s(e, t, n, o, l, a) {
  return w(), F("div", {
    class: V(e.prefixCls)
  }, [oe(e.$slots, "default")], 2);
}
var Jn = /* @__PURE__ */ ue(_s, [["render", $s]]);
const Dn = Object.assign(Xn, {
  Group: Jn,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
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
      size: o
    } = ge(e), l = U("input-search"), {
      mergedSize: a
    } = pt(o), r = y(), i = (f) => {
      r.value.inputRef && t("search", r.value.inputRef.value, f);
    }, s = () => {
      var f;
      return v(Be, null, [e.loading ? v(ct, null, null) : v(Je, {
        onClick: i
      }, {
        default: () => [v(Ko, null, null)]
      }), (f = n.suffix) == null ? void 0 : f.call(n)]);
    }, c = () => {
      var f;
      let p = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
        default: (f = n["button-default"]) != null ? f : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : p = {
        icon: () => v(Ko, null, null)
      }, v(Dn, ae({
        type: "primary",
        class: `${l}-btn`,
        disabled: e.disabled,
        size: a.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), p);
    };
    return {
      inputRef: r,
      render: () => v(tn, {
        ref: r,
        class: l,
        size: a.value,
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
    const n = U("icon"), o = d(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ks = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ws = /* @__PURE__ */ M("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Ss = /* @__PURE__ */ M("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Es = [ws, Ss];
function Os(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Es, 14, ks);
}
var eo = /* @__PURE__ */ ue(Cs, [["render", Os]]);
const xs = Object.assign(eo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + eo.name, eo);
  }
}), Ps = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Bs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Is = /* @__PURE__ */ M("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Ts = /* @__PURE__ */ M("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), zs = [Is, Ts];
function Ns(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zs, 14, Bs);
}
var to = /* @__PURE__ */ ue(Ps, [["render", Ns]]);
const Ls = Object.assign(to, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + to.name, to);
  }
});
function Vs(e) {
  const t = y(e);
  return [t, (o) => {
    t.value = o;
  }];
}
function Pn(e, t) {
  const {
    value: n
  } = ge(t), [o, l] = Vs(je(n.value) ? e : n.value);
  return pe(n, (r) => {
    je(r) && l(void 0);
  }), [d(() => je(n.value) ? o.value : n.value), l, o];
}
const Ds = z({
  name: "InputPassword",
  components: {
    IconEye: xs,
    IconEyeInvisible: Ls,
    AIconHover: Je,
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
      defaultVisibility: o
    } = ge(e), l = y(), a = () => {
      s(!r.value);
    }, [r, i] = Pn(o.value, Oe({
      value: n
    })), s = (c) => {
      c !== r.value && (t("visibility-change", c), t("update:visibility", c), i(c));
    };
    return {
      inputRef: l,
      mergedVisible: r,
      handleInvisible: a
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
function As(e, t, n, o, l, a) {
  const r = ve("icon-eye"), i = ve("icon-eye-invisible"), s = ve("a-icon-hover"), c = ve("a-input");
  return w(), Z(c, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Lr({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: Y(() => [oe(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: Y(() => [oe(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: Y(() => [e.invisibleButton ? (w(), Z(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = lt(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = lt(() => {
      }, ["prevent"]))
    }, {
      default: Y(() => [e.mergedVisible ? (w(), Z(i, {
        key: 1
      })) : (w(), Z(r, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : he("v-if", !0), oe(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: Y(() => [oe(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var no = /* @__PURE__ */ ue(Ds, [["render", As]]);
const js = z({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: U("input-group")
    };
  }
});
function Fs(e, t, n, o, l, a) {
  return w(), F("div", {
    class: V(e.prefixCls)
  }, [oe(e.$slots, "default")], 2);
}
var oo = /* @__PURE__ */ ue(js, [["render", Fs]]);
const ta = Object.assign(tn, {
  Search: Qn,
  Password: no,
  Group: oo,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + tn.name, tn), e.component(n + oo.name, oo), e.component(n + Qn.name, Qn), e.component(n + no.name, no);
  }
});
var Ms = Object.defineProperty, Pl = Object.getOwnPropertySymbols, Ks = Object.prototype.hasOwnProperty, Rs = Object.prototype.propertyIsEnumerable, Bl = (e, t, n) => t in e ? Ms(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xt = (e, t) => {
  for (var n in t || (t = {}))
    Ks.call(t, n) && Bl(e, n, t[n]);
  if (Pl)
    for (var n of Pl(t))
      Rs.call(t, n) && Bl(e, n, t[n]);
  return e;
};
const Hs = () => {
  const {
    height: e,
    width: t
  } = yi();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, Il = (e, t) => {
  var n, o;
  const l = e.getBoundingClientRect();
  return {
    top: l.top,
    bottom: l.bottom,
    left: l.left,
    right: l.right,
    scrollTop: l.top - t.top,
    scrollBottom: l.bottom - t.top,
    scrollLeft: l.left - t.left,
    scrollRight: l.right - t.left,
    width: (n = e.offsetWidth) != null ? n : e.clientWidth,
    height: (o = e.offsetHeight) != null ? o : e.clientHeight
  };
}, Ws = (e) => {
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
}, vn = (e, t) => {
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
}, qs = (e, t, {
  containerRect: n,
  triggerRect: o,
  popupRect: l,
  offset: a,
  translate: r
}) => {
  const i = Ws(e), s = Hs(), c = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + l.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + l.width)
  };
  let u = e;
  if (i === "top" && c.top < 0)
    if (o.top > l.height)
      t.top = -n.top;
    else {
      const f = Jt("bottom", o, l, {
        offset: a,
        translate: r
      });
      s.height - (n.top + f.top + l.height) > 0 && (u = vn(e, "bottom"), t.top = f.top);
    }
  if (i === "bottom" && c.bottom < 0)
    if (s.height - o.bottom > l.height)
      t.top = -n.top + (s.height - l.height);
    else {
      const f = Jt("top", o, l, {
        offset: a,
        translate: r
      });
      n.top + f.top > 0 && (u = vn(e, "top"), t.top = f.top);
    }
  if (i === "left" && c.left < 0)
    if (o.left > l.width)
      t.left = -n.left;
    else {
      const f = Jt("right", o, l, {
        offset: a,
        translate: r
      });
      s.width - (n.left + f.left + l.width) > 0 && (u = vn(e, "right"), t.left = f.left);
    }
  if (i === "right" && c.right < 0)
    if (s.width - o.right > l.width)
      t.left = -n.left + (s.width - l.width);
    else {
      const f = Jt("left", o, l, {
        offset: a,
        translate: r
      });
      n.left + f.left > 0 && (u = vn(e, "left"), t.left = f.left);
    }
  return (i === "top" || i === "bottom") && (c.left < 0 ? t.left = -n.left : c.right < 0 && (t.left = -n.left + (s.width - l.width))), (i === "left" || i === "right") && (c.top < 0 ? t.top = -n.top : c.bottom < 0 && (t.top = -n.top + (s.height - l.height))), {
    popupPosition: t,
    position: u
  };
}, Jt = (e, t, n, {
  offset: o = 0,
  translate: l = [0, 0]
} = {}) => {
  var a;
  const r = (a = De(l) ? l : l[e]) != null ? a : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + r[0],
        top: t.scrollTop - n.height - o + r[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + r[0],
        top: t.scrollTop - n.height - o + r[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + r[0],
        top: t.scrollTop - n.height - o + r[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + r[0],
        top: t.scrollBottom + o + r[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + r[0],
        top: t.scrollBottom + o + r[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + r[0],
        top: t.scrollBottom + o + r[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - o + r[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + r[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - o + r[0],
        top: t.scrollTop + r[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - o + r[0],
        top: t.scrollBottom - n.height + r[1]
      };
    case "right":
      return {
        left: t.scrollRight + o + r[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + r[1]
      };
    case "rt":
      return {
        left: t.scrollRight + o + r[0],
        top: t.scrollTop + r[1]
      };
    case "rb":
      return {
        left: t.scrollRight + o + r[0],
        top: t.scrollBottom - n.height + r[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, Gs = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, Us = (e, t, n, o, {
  offset: l = 0,
  translate: a = [0, 0],
  customStyle: r = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, c = Jt(e, n, o, {
    offset: l,
    translate: a
  });
  if (i) {
    const f = qs(e, c, {
      containerRect: t,
      popupRect: o,
      triggerRect: n,
      offset: l,
      translate: a
    });
    c = f.popupPosition, s = f.position;
  }
  return {
    style: Xt({
      left: `${c.left}px`,
      top: `${c.top}px`
    }, r),
    position: s
  };
}, Ys = (e, t, n, {
  customStyle: o = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let a = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return a > n.width - 8 && (t.width > n.width ? a = n.width / 2 : a = n.width - 8), ["top", "tl", "tr"].includes(e) ? Xt({
      left: `${a}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, o) : Xt({
      left: `${a}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, o);
  }
  let l = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return l > n.height - 8 && (t.height > n.height ? l = n.height / 2 : l = n.height - 8), ["left", "lt", "lb"].includes(e) ? Xt({
    top: `${l}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, o) : Xt({
    top: `${l}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, o);
}, Zs = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Tl = (e) => {
  var t;
  const n = [];
  let o = e;
  for (; o && o !== document.documentElement; )
    Zs(o) && n.push(o), o = (t = o.parentElement) != null ? t : void 0;
  return n;
}, na = () => {
  const e = {}, t = y(), n = () => {
    const o = Gr(e.value);
    o !== t.value && (t.value = o);
  };
  return ze(() => n()), st(() => n()), {
    children: e,
    firstElement: t
  };
};
var Ro = z({
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
      children: o,
      firstElement: l
    } = na();
    let a;
    const r = (s) => {
      s && (a = new Qo((c) => {
        const u = c[0];
        t("resize", u);
      }), a.observe(s));
    }, i = () => {
      a && (a.disconnect(), a = null);
    };
    return pe(l, (s) => {
      a && i(), s && r(s);
    }), Rt(() => {
      a && i();
    }), () => {
      var s;
      return o.value = (s = n.default) == null ? void 0 : s.call(n), o.value;
    };
  }
});
function at(e, t) {
  const n = y(e[t]);
  return st(() => {
    const o = e[t];
    n.value !== o && (n.value = o);
  }), n;
}
const zl = Symbol("ArcoTrigger"), Xs = 1e3, Js = 5e3, Qs = 1;
class eu {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || Js : Array.from(this.popupStack.popup).pop() || Xs) + Qs, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const lo = new eu();
function tu(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const o = y(0), l = () => {
    o.value = lo.add(e);
  }, a = () => {
    lo.delete(o.value, e);
  }, r = () => e === "dialog" ? lo.isLastDialog(o.value) : !1;
  return pe(() => t == null ? void 0 : t.value, (i) => {
    i ? l() : a();
  }, {
    immediate: !0
  }), n && (ze(() => {
    l();
  }), Rt(() => {
    a();
  })), {
    zIndex: sn(o),
    open: l,
    close: a,
    isLastDialog: r
  };
}
const nu = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new Qo((a) => {
        const r = a[0];
        qe(t) && t(r);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var ou = z({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = y(!1);
    return ze(() => n.value = !0), () => {
      var o;
      return n.value ? (o = t.default) == null ? void 0 : o.call(t) : null;
    };
  }
});
const lu = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: o
}) => {
  const l = y(e.value), a = y(), r = () => {
    const i = kl(e.value), s = i ? e.value : n, c = i ?? (o ? document.documentElement : kl(n));
    s !== l.value && (l.value = s), c !== a.value && (a.value = c);
  };
  return ze(() => r()), pe(t, (i) => {
    l.value !== e.value && i && r();
  }), {
    teleportContainer: l,
    containerRef: a
  };
};
var ru = Object.defineProperty, au = Object.defineProperties, iu = Object.getOwnPropertyDescriptors, Nl = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, uu = Object.prototype.propertyIsEnumerable, Ll = (e, t, n) => t in e ? ru(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, cu = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && Ll(e, n, t[n]);
  if (Nl)
    for (var n of Nl(t))
      uu.call(t, n) && Ll(e, n, t[n]);
  return e;
}, du = (e, t) => au(e, iu(t));
const fu = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var ro = z({
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
    attrs: o
  }) {
    const {
      popupContainer: l
    } = ge(e), a = U("trigger"), r = d(() => Ht(o, fu)), i = Ge(Et, void 0), s = d(() => [].concat(e.trigger)), c = /* @__PURE__ */ new Set(), u = Ge(zl, void 0), {
      children: f,
      firstElement: p
    } = na(), h = y(), m = y(e.defaultPopupVisible), g = y(e.position), C = y({}), N = y({}), I = y({}), S = y(), $ = y({
      top: 0,
      left: 0
    });
    let E = null, _ = null;
    const b = d(() => {
      var k;
      return (k = e.popupVisible) != null ? k : m.value;
    }), {
      teleportContainer: D,
      containerRef: A
    } = lu({
      popupContainer: l,
      visible: b,
      documentContainer: !0
    }), {
      zIndex: L
    } = tu("popup", {
      visible: b
    });
    let O = 0, K = !1, R = !1;
    const J = () => {
      O && (window.clearTimeout(O), O = 0);
    }, ee = (k) => {
      if (e.alignPoint) {
        const {
          pageX: T,
          pageY: Q
        } = k;
        $.value = {
          top: Q,
          left: T
        };
      }
    }, le = () => {
      if (!p.value || !h.value || !A.value)
        return;
      const k = A.value.getBoundingClientRect(), T = e.alignPoint ? {
        top: $.value.top,
        bottom: $.value.top,
        left: $.value.left,
        right: $.value.left,
        scrollTop: $.value.top,
        scrollBottom: $.value.top,
        scrollLeft: $.value.left,
        scrollRight: $.value.left,
        width: 0,
        height: 0
      } : Il(p.value, k), Q = () => Il(h.value, k), Ue = Q(), {
        style: Re,
        position: rt
      } = Us(e.position, k, T, Ue, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (N.value = {
        transformOrigin: Gs(rt)
      }), e.autoFitPopupMinWidth ? Re.minWidth = `${T.width}px` : e.autoFitPopupWidth && (Re.width = `${T.width}px`), g.value !== rt && (g.value = rt), C.value = Re, e.showArrow && We(() => {
        I.value = Ys(rt, T, Q(), {
          customStyle: e.arrowStyle
        });
      });
    }, x = (k, T) => {
      if (k === b.value && O === 0)
        return;
      const Q = () => {
        m.value = k, t("update:popupVisible", k), t("popupVisibleChange", k), k && We(() => {
          le();
        });
      };
      k || (E = null, _ = null), T ? (J(), k !== b.value && (O = window.setTimeout(Q, T))) : Q();
    }, q = (k) => {
      var T;
      (T = o.onClick) == null || T.call(o, k), !(e.disabled || b.value && !e.clickToClose) && (s.value.includes("click") ? (ee(k), x(!b.value)) : s.value.includes("contextMenu") && b.value && x(!1));
    }, me = (k) => {
      var T;
      (T = o.onMouseenter) == null || T.call(o, k), !(e.disabled || !s.value.includes("hover")) && (ee(k), x(!0, e.mouseEnterDelay));
    }, te = (k) => {
      u == null || u.onMouseenter(k), me(k);
    }, ie = (k) => {
      var T;
      (T = o.onMouseleave) == null || T.call(o, k), !(e.disabled || !s.value.includes("hover")) && x(!1, e.mouseLeaveDelay);
    }, Se = (k) => {
      u == null || u.onMouseleave(k), ie(k);
    }, be = (k) => {
      var T;
      (T = o.onFocusin) == null || T.call(o, k), !(e.disabled || !s.value.includes("focus")) && x(!0, e.focusDelay);
    }, ye = (k) => {
      var T;
      (T = o.onFocusout) == null || T.call(o, k), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && x(!1);
    }, se = (k) => {
      var T;
      (T = o.onContextmenu) == null || T.call(o, k), !(e.disabled || !s.value.includes("contextMenu") || b.value && !e.clickToClose) && (ee(k), x(!b.value), k.preventDefault());
    };
    ft(zl, Oe({
      onMouseenter: te,
      onMouseleave: Se,
      addChildRef: (k) => {
        c.add(k), u == null || u.addChildRef(k);
      },
      removeChildRef: (k) => {
        c.delete(k), u == null || u.removeChildRef(k);
      }
    }));
    const Pe = () => {
      xn(document.documentElement, "mousedown", Ne), K = !1;
    }, Ve = at(n, "content"), Ae = d(() => {
      var k;
      return e.hideEmpty && mi((k = Ve.value) == null ? void 0 : k.call(Ve));
    }), Ne = (k) => {
      var T, Q, Ue;
      if (!((T = p.value) != null && T.contains(k.target) || (Q = h.value) != null && Q.contains(k.target))) {
        for (const Re of c)
          if ((Ue = Re.value) != null && Ue.contains(k.target))
            return;
        Pe(), x(!1);
      }
    }, Ye = (k, T) => {
      const [Q, Ue] = k, {
        scrollTop: Re,
        scrollLeft: rt
      } = T;
      return Math.abs(Re - Q) >= e.scrollToCloseDistance || Math.abs(rt - Ue) >= e.scrollToCloseDistance;
    }, W = Mo((k) => {
      if (b.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const T = k.target;
          E || (E = [T.scrollTop, T.scrollLeft]), Ye(E, T) ? x(!1) : le();
        } else
          le();
    }), P = () => {
      xn(window, "scroll", H), R = !1;
    }, H = Mo((k) => {
      const T = k.target.documentElement;
      _ || (_ = [T.scrollTop, T.scrollLeft]), Ye(_, T) && (x(!1), P());
    }), ce = () => {
      b.value && le();
    }, ke = () => {
      ce(), t("resize");
    }, Ee = (k) => {
      e.preventFocus && k.preventDefault();
    };
    u == null || u.addChildRef(h);
    const Xe = d(() => b.value ? e.openedClass : void 0);
    let Ie;
    pe(b, (k) => {
      if (e.clickOutsideToClose && (!k && K ? Pe() : k && !K && (Nt(document.documentElement, "mousedown", Ne), K = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Nt(window, "scroll", H), R = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (k) {
          Ie = Tl(p.value);
          for (const T of Ie)
            T.addEventListener("scroll", W);
        } else if (Ie) {
          for (const T of Ie)
            T.removeEventListener("scroll", W);
          Ie = void 0;
        }
      }
      k && (yt.value = !0);
    }), pe(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      b.value && le();
    });
    const {
      createResizeObserver: mt,
      destroyResizeObserver: Gt
    } = nu({
      elementRef: A,
      onResize: ce
    });
    ze(() => {
      if (mt(), b.value && (le(), e.clickOutsideToClose && !K && (Nt(document.documentElement, "mousedown", Ne), K = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ie = Tl(p.value);
        for (const k of Ie)
          k.addEventListener("scroll", W);
      }
    }), st(() => {
      b.value && le();
    }), Ta(() => {
      x(!1);
    }), Rt(() => {
      if (u == null || u.removeChildRef(h), Gt(), K && Pe(), R && P(), Ie) {
        for (const k of Ie)
          k.removeEventListener("scroll", W);
        Ie = void 0;
      }
    });
    const yt = y(b.value), nt = y(!1), Ot = () => {
      nt.value = !0;
    }, Ut = () => {
      nt.value = !1, b.value && t("show");
    }, B = () => {
      nt.value = !1, b.value || (yt.value = !1, t("hide"));
    };
    return () => {
      var k, T;
      return f.value = (T = (k = n.default) == null ? void 0 : k.call(n)) != null ? T : [], Wr(f.value, {
        class: Xe.value,
        onClick: q,
        onMouseenter: me,
        onMouseleave: ie,
        onFocusin: be,
        onFocusout: ye,
        onContextmenu: se
      }), v(Be, null, [e.autoFixPosition ? v(Ro, {
        onResize: ke
      }, {
        default: () => [f.value]
      }) : f.value, v(ou, null, {
        default: () => [v(Vr, {
          to: D.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || b.value || yt.value) && !Ae.value && v(Ro, {
            onResize: ce
          }, {
            default: () => [v("div", ae({
              ref: h,
              class: [`${a}-popup`, `${a}-position-${g.value}`],
              style: du(cu({}, C.value), {
                zIndex: L.value,
                pointerEvents: nt.value ? "none" : "auto"
              }),
              "trigger-placement": g.value,
              onMouseenter: te,
              onMouseleave: Se,
              onMousedown: Ee
            }, r.value), [v(Tn, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: Ot,
              onAfterEnter: Ut,
              onBeforeLeave: Ot,
              onAfterLeave: B
            }, {
              default: () => {
                var Q;
                return [Vt(v("div", {
                  class: `${a}-popup-wrapper`,
                  style: N.value
                }, [v("div", {
                  class: [`${a}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(Q = n.content) == null ? void 0 : Q.call(n)]), e.showArrow && v("div", {
                  ref: S,
                  class: [`${a}-arrow`, e.arrowClass],
                  style: I.value
                }, null)]), [[Dt, b.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const ln = Object.assign(ro, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + ro.name, ro);
  }
}), vu = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), pu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], hu = /* @__PURE__ */ M("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), mu = [hu];
function yu(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, mu, 14, pu);
}
var ao = /* @__PURE__ */ ue(vu, [["render", yu]]);
const gu = Object.assign(ao, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + ao.name, ao);
  }
});
var io = z({
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
    const o = U("empty"), {
      t: l
    } = Jo(), a = Ge(Et, void 0);
    return () => {
      var r, i, s, c;
      return !e.inConfigProvider && (a != null && a.slots.empty) && !(t.image || e.imgSrc || e.description) ? a.slots.empty({
        component: "empty"
      }) : v("div", ae({
        class: o
      }, n), [v("div", {
        class: `${o}-image`
      }, [(i = (r = t.image) == null ? void 0 : r.call(t)) != null ? i : e.imgSrc ? v("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : v(gu, null, null)]), v("div", {
        class: `${o}-description`
      }, [(c = (s = t.default) == null ? void 0 : s.call(t)) != null ? c : e.description || l("empty.description")])]);
    };
  }
});
const bu = Object.assign(io, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + io.name, io);
  }
}), _u = 5;
var $u = z({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = U("dot-loading");
    return () => {
      const n = e.size ? {
        width: `${e.size}px`,
        height: `${e.size}px`
      } : {};
      return v("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(_u).fill(1).map((o, l) => v("div", {
        class: `${t}-item`,
        key: l,
        style: n
      }, null))]);
    };
  }
}), so = z({
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
    const n = U("spin"), o = Ge(Et, void 0), l = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), a = () => {
      if (t.icon) {
        const i = zt(t.icon());
        if (i)
          return In(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? v($u, {
        size: e.size
      }, null) : o != null && o.slots.loading ? o.slots.loading() : v(ct, {
        spin: !0,
        size: e.size
      }, null);
    }, r = () => {
      var i, s, c;
      const u = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, f = !!((i = t.tip) != null ? i : e.tip);
      return v(Be, null, [!e.hideIcon && v("div", {
        class: `${n}-icon`,
        style: u
      }, [a()]), f && v("div", {
        class: `${n}-tip`
      }, [(c = (s = t.tip) == null ? void 0 : s.call(t)) != null ? c : e.tip])]);
    };
    return () => v("div", {
      class: l.value
    }, [t.default ? v(Be, null, [t.default(), e.loading && v("div", {
      class: `${n}-mask`
    }, [v("div", {
      class: `${n}-mask-icon`
    }, [r()])])]) : r()]);
  }
});
const Cu = Object.assign(so, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + so.name, so);
  }
}), ku = z({
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
    const n = U("scrollbar"), o = y(!1), l = y(), a = y(), r = d(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = y(0), s = y(!1), c = y(0), u = d(() => {
      var I, S;
      return {
        [r.value.size]: `${(S = (I = e.data) == null ? void 0 : I.thumbSize) != null ? S : 0}px`,
        [r.value.direction]: `${i.value}px`
      };
    }), f = (I) => {
      I.preventDefault(), a.value && (c.value = I[r.value.client] - a.value.getBoundingClientRect()[r.value.direction], s.value = !0, Nt(window, "mousemove", m), Nt(window, "mouseup", g), Nt(window, "contextmenu", g));
    }, p = (I) => {
      var S, $, E, _;
      if (I.preventDefault(), a.value) {
        const b = h(I[r.value.client] > a.value.getBoundingClientRect()[r.value.direction] ? i.value + (($ = (S = e.data) == null ? void 0 : S.thumbSize) != null ? $ : 0) : i.value - ((_ = (E = e.data) == null ? void 0 : E.thumbSize) != null ? _ : 0));
        b !== i.value && (i.value = b, t("scroll", b));
      }
    }, h = (I) => I < 0 ? 0 : e.data && I > e.data.max ? e.data.max : I, m = (I) => {
      if (l.value && a.value) {
        const S = h(I[r.value.client] - l.value.getBoundingClientRect()[r.value.direction] - c.value);
        S !== i.value && (i.value = S, t("scroll", S));
      }
    }, g = () => {
      s.value = !1, xn(window, "mousemove", m), xn(window, "mouseup", g);
    }, C = (I) => {
      s.value || (I = h(I), I !== i.value && (i.value = I));
    }, N = d(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: o,
      trackRef: l,
      thumbRef: a,
      prefixCls: n,
      thumbCls: N,
      thumbStyle: u,
      handleThumbMouseDown: f,
      handleTrackClick: p,
      setOffset: C
    };
  }
});
function wu(e, t, n, o, l, a) {
  return w(), Z(Tn, null, {
    default: Y(() => [M("div", {
      ref: "trackRef",
      class: V([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = lt((...r) => e.handleTrackClick && e.handleTrackClick(...r), ["self"]))
    }, [M("div", {
      ref: "thumbRef",
      class: V(e.thumbCls),
      style: de(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...r) => e.handleThumbMouseDown && e.handleThumbMouseDown(...r))
    }, [M("div", {
      class: V(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Su = /* @__PURE__ */ ue(ku, [["render", wu]]);
const Vl = 20, pn = 15, Eu = z({
  name: "Scrollbar",
  components: {
    ResizeObserver: Ro,
    Thumb: Su
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
    const n = U("scrollbar"), o = y(), l = y(), a = y(), r = y(), i = y(), s = y(!1), c = y(!1), u = d(() => s.value && !e.disableHorizontal), f = d(() => c.value && !e.disableVertical), p = y(!1), h = () => {
      var $, E, _, b, D, A;
      if (o.value) {
        const {
          clientWidth: L,
          clientHeight: O,
          offsetWidth: K,
          offsetHeight: R,
          scrollWidth: J,
          scrollHeight: ee,
          scrollTop: le,
          scrollLeft: x
        } = o.value;
        s.value = J > L, c.value = ee > O, p.value = u.value && f.value;
        const q = e.type === "embed" && p.value ? K - pn : K, me = e.type === "embed" && p.value ? R - pn : R, te = Math.round(q / Math.min(J / L, q / Vl)), ie = q - te, Se = (J - L) / ie, be = Math.round(me / Math.min(ee / O, me / Vl)), ye = me - be, se = (ee - O) / ye;
        if (l.value = {
          ratio: Se,
          thumbSize: te,
          max: ie
        }, a.value = {
          ratio: se,
          thumbSize: be,
          max: ye
        }, le > 0) {
          const Ce = Math.round(le / ((E = ($ = a.value) == null ? void 0 : $.ratio) != null ? E : 1));
          (_ = i.value) == null || _.setOffset(Ce);
        }
        if (x > 0) {
          const Ce = Math.round(x / ((D = (b = a.value) == null ? void 0 : b.ratio) != null ? D : 1));
          (A = r.value) == null || A.setOffset(Ce);
        }
      }
    };
    ze(() => {
      h();
    });
    const m = () => {
      h();
    }, g = ($) => {
      var E, _, b, D, A, L;
      if (o.value) {
        if (u.value && !e.disableHorizontal) {
          const O = Math.round(o.value.scrollLeft / ((_ = (E = l.value) == null ? void 0 : E.ratio) != null ? _ : 1));
          (b = r.value) == null || b.setOffset(O);
        }
        if (f.value && !e.disableVertical) {
          const O = Math.round(o.value.scrollTop / ((A = (D = a.value) == null ? void 0 : D.ratio) != null ? A : 1));
          (L = i.value) == null || L.setOffset(O);
        }
      }
      t("scroll", $);
    }, C = ($) => {
      var E, _;
      o.value && o.value.scrollTo({
        left: $ * ((_ = (E = l.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, N = ($) => {
      var E, _;
      o.value && o.value.scrollTo({
        top: $ * ((_ = (E = a.value) == null ? void 0 : E.ratio) != null ? _ : 1)
      });
    }, I = d(() => {
      const $ = {};
      return e.type === "track" && (u.value && ($.paddingBottom = `${pn}px`), f.value && ($.paddingRight = `${pn}px`)), [$, e.outerStyle];
    }), S = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: p.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: S,
      style: I,
      containerRef: o,
      horizontalThumbRef: r,
      verticalThumbRef: i,
      horizontalData: l,
      verticalData: a,
      isBoth: p,
      hasHorizontalScrollbar: u,
      hasVerticalScrollbar: f,
      handleResize: m,
      handleScroll: g,
      handleHorizontalScroll: C,
      handleVerticalScroll: N
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, o;
      Te(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((o = this.$refs.containerRef) == null || o.scrollTo(e, t));
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
function Ou(e, t, n, o, l, a) {
  const r = ve("ResizeObserver"), i = ve("thumb");
  return w(), F("div", {
    class: V(e.cls),
    style: de(e.style)
  }, [v(r, {
    onResize: e.handleResize
  }, {
    default: Y(() => [M("div", ae({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [v(r, {
      onResize: e.handleResize
    }, {
      default: Y(() => [oe(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (w(), Z(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (w(), Z(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0)], 6);
}
var uo = /* @__PURE__ */ ue(Eu, [["render", Ou]]);
const oa = Object.assign(uo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + uo.name, uo);
  }
}), xu = (e) => {
  const t = y(), n = () => Ar(t.value) ? t.value.$refs[e] : t.value, o = y();
  return ze(() => {
    o.value = n();
  }), pe([t], () => {
    o.value = n();
  }), {
    componentRef: t,
    elementRef: o
  };
};
var Pu = Object.defineProperty, Dl = Object.getOwnPropertySymbols, Bu = Object.prototype.hasOwnProperty, Iu = Object.prototype.propertyIsEnumerable, Al = (e, t, n) => t in e ? Pu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Tu = (e, t) => {
  for (var n in t || (t = {}))
    Bu.call(t, n) && Al(e, n, t[n]);
  if (Dl)
    for (var n of Dl(t))
      Iu.call(t, n) && Al(e, n, t[n]);
  return e;
};
const zu = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return Tu({
        type: "embed"
      }, jt(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Nu = z({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: oa,
    Empty: bu,
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
    var o, l, a;
    const {
      scrollbar: r
    } = ge(e), i = U("select-dropdown"), s = Ge(Et, void 0), c = (a = (l = s == null ? void 0 : (o = s.slots).empty) == null ? void 0 : l.call(o, {
      component: "select"
    })) == null ? void 0 : a[0], {
      componentRef: u,
      elementRef: f
    } = xu("containerRef"), {
      displayScrollbar: p,
      scrollbarProps: h
    } = zu(r), m = (C) => {
      const {
        scrollTop: N,
        scrollHeight: I,
        offsetHeight: S
      } = C.target;
      I - (N + S) <= e.bottomOffset && t("reachBottom", C), t("scroll", C);
    }, g = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: c,
      cls: g,
      wrapperRef: f,
      wrapperComRef: u,
      handleScroll: m,
      displayScrollbar: p,
      scrollbarProps: h
    };
  }
});
function Lu(e, t, n, o, l, a) {
  const r = ve("spin");
  return w(), F("div", {
    class: V(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (w(), F("div", {
    key: 0,
    class: V(`${e.prefixCls}-header`)
  }, [oe(e.$slots, "header")], 2)) : he("v-if", !0), e.loading ? (w(), Z(r, {
    key: 1,
    class: V(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (w(), F("div", {
    key: 2,
    class: V(`${e.prefixCls}-empty`)
  }, [oe(e.$slots, "empty", {}, () => [(w(), Z(Tt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : he("v-if", !0), e.virtualList && !e.loading && !e.empty ? oe(e.$slots, "virtual-list", {
    key: 3
  }) : he("v-if", !0), e.virtualList ? he("v-if", !0) : Vt((w(), Z(Tt(e.displayScrollbar ? "ScrollbarComponent" : "div"), ae({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: Y(() => [M("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [oe(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[Dt, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (w(), F("div", {
    key: 5,
    class: V(`${e.prefixCls}-footer`)
  }, [oe(e.$slots, "footer")], 2)) : he("v-if", !0)], 2);
}
var Vu = /* @__PURE__ */ ue(Nu, [["render", Lu]]), jl = z({
  name: "IconCheck",
  render() {
    return v("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200",
      fill: "currentColor"
    }, [v("path", {
      d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const la = Symbol("ArcoCheckboxGroup");
var _n = z({
  name: "Checkbox",
  components: {
    IconCheck: jl,
    IconHover: Je
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
      disabled: o,
      modelValue: l
    } = ge(e), a = U("checkbox"), r = y(), i = e.uninjectGroupContext ? void 0 : Ge(la, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: c,
      eventHandlers: u
    } = vt({
      disabled: o
    }), f = y(e.defaultChecked), p = d(() => {
      var $;
      return s ? i == null ? void 0 : i.computedValue : ($ = e.modelValue) != null ? $ : f.value;
    }), h = d(() => {
      var $;
      return De(p.value) ? p.value.includes(($ = e.value) != null ? $ : !0) : p.value;
    }), m = d(() => (i == null ? void 0 : i.disabled) || (c == null ? void 0 : c.value) || !h.value && (i == null ? void 0 : i.isMaxed)), g = ($) => {
      $.stopPropagation();
    }, C = ($) => {
      var E, _, b, D;
      const {
        checked: A
      } = $.target;
      let L = A;
      if (De(p.value)) {
        const O = new Set(p.value);
        A ? O.add((E = e.value) != null ? E : !0) : O.delete((_ = e.value) != null ? _ : !0), L = Array.from(O);
      }
      f.value = A, s && De(L) ? i == null || i.handleChange(L, $) : (t("update:modelValue", L), t("change", L, $), (D = (b = u.value) == null ? void 0 : b.onChange) == null || D.call(b, $)), We(() => {
        r.value && r.value.checked !== h.value && (r.value.checked = h.value);
      });
    }, N = d(() => [a, {
      [`${a}-checked`]: h.value,
      [`${a}-indeterminate`]: e.indeterminate,
      [`${a}-disabled`]: m.value
    }]), I = ($) => {
      var E, _;
      (_ = (E = u.value) == null ? void 0 : E.onFocus) == null || _.call(E, $);
    }, S = ($) => {
      var E, _;
      (_ = (E = u.value) == null ? void 0 : E.onBlur) == null || _.call(E, $);
    };
    return pe(l, ($) => {
      (je($) || Nn($)) && (f.value = !1);
    }), pe(p, ($) => {
      var E;
      let _;
      De($) ? _ = $.includes((E = e.value) != null ? E : !0) : _ = $, f.value !== _ && (f.value = _), r.value && r.value.checked !== _ && (r.value.checked = _);
    }), () => {
      var $, E, _, b;
      return v("label", {
        "aria-disabled": m.value,
        class: N.value
      }, [v("input", {
        ref: r,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${a}-target`,
        disabled: m.value,
        onClick: g,
        onChange: C,
        onFocus: I,
        onBlur: S
      }, null), (b = (_ = (E = n.checkbox) != null ? E : ($ = i == null ? void 0 : i.slots) == null ? void 0 : $.checkbox) == null ? void 0 : _({
        checked: h.value,
        disabled: m.value
      })) != null ? b : v(Je, {
        class: `${a}-icon-hover`,
        disabled: m.value || h.value
      }, {
        default: () => [v("div", {
          class: `${a}-icon`
        }, [h.value && v(jl, {
          class: `${a}-icon-check`
        }, null)])]
      }), n.default && v("span", {
        class: `${a}-label`
      }, [n.default()])]);
    };
  }
}), co = z({
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
      disabled: o
    } = ge(e), l = U("checkbox-group"), {
      mergedDisabled: a,
      eventHandlers: r
    } = vt({
      disabled: o
    }), i = y(e.defaultValue), s = d(() => De(e.modelValue) ? e.modelValue : i.value), c = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), u = d(() => {
      var m;
      return ((m = e.options) != null ? m : []).map((g) => St(g) || $e(g) ? {
        label: g,
        value: g
      } : g);
    });
    ft(la, Oe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: a,
      isMaxed: c,
      slots: n,
      handleChange: (m, g) => {
        var C, N;
        i.value = m, t("update:modelValue", m), t("change", m, g), (N = (C = r.value) == null ? void 0 : C.onChange) == null || N.call(C, g);
      }
    }));
    const p = d(() => [l, `${l}-direction-${e.direction}`]);
    pe(() => e.modelValue, (m) => {
      De(m) ? i.value = [...m] : i.value = [];
    });
    const h = () => u.value.map((m) => {
      const g = s.value.includes(m.value);
      return v(_n, {
        key: m.value,
        value: m.value,
        disabled: m.disabled || !g && c.value,
        indeterminate: m.indeterminate,
        modelValue: g
      }, {
        default: () => [n.label ? n.label({
          data: m
        }) : qe(m.label) ? m.label() : m.label]
      });
    });
    return () => {
      var m;
      return v("span", {
        class: p.value
      }, [u.value.length > 0 ? h() : (m = n.default) == null ? void 0 : m.call(n)]);
    };
  }
});
const ra = Object.assign(_n, {
  Group: co,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + _n.name, _n), e.component(n + co.name, co);
  }
}), aa = Symbol("ArcoSelectContext");
var Du = Object.defineProperty, Au = Object.defineProperties, ju = Object.getOwnPropertyDescriptors, Fl = Object.getOwnPropertySymbols, Fu = Object.prototype.hasOwnProperty, Mu = Object.prototype.propertyIsEnumerable, Ml = (e, t, n) => t in e ? Du(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, sl = (e, t) => {
  for (var n in t || (t = {}))
    Fu.call(t, n) && Ml(e, n, t[n]);
  if (Fl)
    for (var n of Fl(t))
      Mu.call(t, n) && Ml(e, n, t[n]);
  return e;
}, ia = (e, t) => Au(e, ju(t));
const Ku = (e) => Te(e) && "isGroup" in e, sa = (e) => Te(e) && "isGroup" in e, Ru = (e, t = "value") => String(Te(e) ? e[t] : e), rn = (e, t = "value") => Te(e) ? `__arco__option__object__${e[t]}` : e || $e(e) || St(e) || jt(e) ? `__arco__option__${typeof e}-${e}` : "", Hu = (e) => e.has("__arco__option__string-"), Wu = (e, {
  valueKey: t,
  fieldNames: n,
  origin: o,
  index: l = -1
}) => {
  var a;
  if (Te(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: l,
      key: rn(i, t),
      origin: o,
      value: i,
      label: (a = e[n.label]) != null ? a : Ru(i, t),
      render: e[n.render],
      disabled: !!e[n.disabled],
      tagProps: e[n.tagProps]
    };
  }
  const r = {
    value: e,
    label: String(e),
    disabled: !1
  };
  return sl({
    raw: r,
    index: l,
    key: rn(e, t),
    origin: o
  }, r);
}, Ho = (e, {
  valueKey: t,
  fieldNames: n,
  origin: o,
  optionInfoMap: l
}) => {
  var a;
  const r = [];
  for (const i of e)
    if (Ku(i)) {
      const s = Ho((a = i.options) != null ? a : [], {
        valueKey: t,
        fieldNames: n,
        origin: o,
        optionInfoMap: l
      });
      s.length > 0 && r.push(ia(sl({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = Wu(i, {
        valueKey: t,
        fieldNames: n,
        origin: o
      });
      r.push(s), l.get(s.key) || l.set(s.key, s);
    }
  return r;
}, Kl = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const o = (l) => {
    var a;
    const r = [];
    for (const i of l)
      if (sa(i)) {
        const s = o((a = i.options) != null ? a : []);
        s.length > 0 && r.push(ia(sl({}, i), {
          options: s
        }));
      } else
        An(i, {
          inputValue: t,
          filterOption: n
        }) && r.push(i);
    return r;
  };
  return o(e);
}, An = (e, {
  inputValue: t,
  filterOption: n
}) => qe(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, qu = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!ul(e[n], t[n]))
      return !1;
  return !0;
}, Gu = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let o = 0; o < n; o++)
    if (!ul(e[o], t[o]))
      return !1;
  return !0;
}, ul = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? qu(e, t) : n === "[object Array]" ? Gu(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, Uu = z({
  name: "Option",
  components: {
    Checkbox: ra
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
      index: o
    } = ge(e), l = U("select-option"), a = Ge(aa, void 0), r = dt(), i = y(), s = y(n.value);
    pe(n, (_, b) => {
      ul(_, b) || (s.value = _);
    });
    const c = y(""), u = d(() => {
      var _, b;
      return (b = (_ = e.value) != null ? _ : e.label) != null ? b : c.value;
    }), f = d(() => {
      var _;
      return (_ = e.label) != null ? _ : c.value;
    }), p = d(() => rn(u.value, a == null ? void 0 : a.valueKey)), h = d(() => {
      var _;
      return (_ = a == null ? void 0 : a.component) != null ? _ : "li";
    }), m = () => {
      var _;
      if (!e.label && i.value) {
        const b = (_ = i.value.textContent) != null ? _ : "";
        c.value !== b && (c.value = b);
      }
    };
    ze(() => m()), st(() => m());
    const g = d(() => {
      var _;
      return (_ = a == null ? void 0 : a.valueKeys.includes(p.value)) != null ? _ : !1;
    }), C = d(() => (a == null ? void 0 : a.activeKey) === p.value);
    let N = y(!0);
    if (!e.internal) {
      const _ = Oe({
        raw: {
          value: u,
          label: f,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: o,
        key: p,
        origin: "slot",
        value: u,
        label: f,
        disabled: t,
        tagProps: s
      });
      N = d(() => An(_, {
        inputValue: a == null ? void 0 : a.inputValue,
        filterOption: a == null ? void 0 : a.filterOption
      })), r && (a == null || a.addSlotOptionInfo(r.uid, _)), Rt(() => {
        r && (a == null || a.removeSlotOptionInfo(r.uid));
      });
    }
    const I = (_) => {
      e.disabled || a == null || a.onSelect(p.value, _);
    }, S = () => {
      e.disabled || a == null || a.setActiveKey(p.value);
    }, $ = () => {
      e.disabled || a == null || a.setActiveKey();
    }, E = d(() => [l, {
      [`${l}-disabled`]: e.disabled,
      [`${l}-selected`]: g.value,
      [`${l}-active`]: C.value,
      [`${l}-multiple`]: a == null ? void 0 : a.multiple
    }]);
    return {
      prefixCls: l,
      cls: E,
      selectCtx: a,
      itemRef: i,
      component: h,
      isSelected: g,
      isValid: N,
      handleClick: I,
      handleMouseEnter: S,
      handleMouseLeave: $
    };
  }
});
function Yu(e, t, n, o, l, a) {
  const r = ve("checkbox");
  return Vt((w(), Z(Tt(e.component), {
    ref: "itemRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: Y(() => [e.$slots.icon ? (w(), F("span", {
      key: 0,
      class: V(`${e.prefixCls}-icon`)
    }, [oe(e.$slots, "icon")], 2)) : he("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (w(), Z(r, {
      key: 1,
      class: V(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: Y(() => [oe(e.$slots, "default", {}, () => [He(Fe(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (w(), F("span", {
      key: 2,
      class: V(`${e.prefixCls}-content`)
    }, [oe(e.$slots, "default", {}, () => [He(Fe(e.label), 1)])], 2)), e.$slots.suffix ? (w(), F("span", {
      key: 3,
      class: V(`${e.prefixCls}-suffix`)
    }, [oe(e.$slots, "suffix")], 2)) : he("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[Dt, e.isValid]]);
}
var $n = /* @__PURE__ */ ue(Uu, [["render", Yu]]), Zu = Object.defineProperty, Xu = Object.defineProperties, Ju = Object.getOwnPropertyDescriptors, Rl = Object.getOwnPropertySymbols, Qu = Object.prototype.hasOwnProperty, ec = Object.prototype.propertyIsEnumerable, Hl = (e, t, n) => t in e ? Zu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fo = (e, t) => {
  for (var n in t || (t = {}))
    Qu.call(t, n) && Hl(e, n, t[n]);
  if (Rl)
    for (var n of Rl(t))
      ec.call(t, n) && Hl(e, n, t[n]);
  return e;
}, tc = (e, t) => Xu(e, Ju(t));
const nc = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, oc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: o,
  showExtraOptions: l,
  valueKey: a,
  fieldNames: r
}) => {
  const i = d(() => fo(fo({}, nc), r == null ? void 0 : r.value)), s = Oe(/* @__PURE__ */ new Map()), c = d(() => Array.from(s.values()).sort((S, $) => $e(S.index) && $e($.index) ? S.index - $.index : 0)), u = d(() => {
    var S, $;
    const E = /* @__PURE__ */ new Map();
    return {
      optionInfos: Ho((S = e == null ? void 0 : e.value) != null ? S : [], {
        valueKey: ($ = a == null ? void 0 : a.value) != null ? $ : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: E
      }),
      optionInfoMap: E
    };
  }), f = d(() => {
    var S, $;
    const E = /* @__PURE__ */ new Map();
    return {
      optionInfos: Ho((S = t == null ? void 0 : t.value) != null ? S : [], {
        valueKey: ($ = a == null ? void 0 : a.value) != null ? $ : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: E
      }),
      optionInfoMap: E
    };
  }), p = Oe(/* @__PURE__ */ new Map());
  pe([c, e ?? y([]), t ?? y([]), a ?? y("value")], () => {
    p.clear(), c.value.forEach((S, $) => {
      p.set(S.key, tc(fo({}, S), {
        index: $
      }));
    }), u.value.optionInfoMap.forEach((S) => {
      p.has(S.key) || (S.index = p.size, p.set(S.key, S));
    }), f.value.optionInfoMap.forEach((S) => {
      p.has(S.key) || (S.index = p.size, p.set(S.key, S));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const h = d(() => {
    var S;
    const $ = Kl(u.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    });
    return ((S = l == null ? void 0 : l.value) == null || S) && $.push(...Kl(f.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    })), $;
  }), m = d(() => Array.from(p.values()).filter((S) => S.origin === "extraOptions" && (l == null ? void 0 : l.value) === !1 ? !1 : An(S, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: o == null ? void 0 : o.value
  }))), g = d(() => m.value.filter((S) => !S.disabled).map((S) => S.key));
  return {
    validOptions: h,
    optionInfoMap: p,
    validOptionInfos: m,
    enabledOptionKeys: g,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (S, $) => {
      s.set(S, $);
    },
    removeSlotOptionInfo: (S) => {
      s.delete(S);
    }
  };
}, hn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, Wl = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), lc = (e) => {
  const t = {};
  return e.forEach((n, o) => {
    const l = St(o) ? {
      key: o
    } : o;
    t[Wl(l)] = n;
  }), (n) => {
    const o = Wl({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), l = t[o];
    l && (n.stopPropagation(), l(n));
  };
}, rc = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: o,
  filterOption: l,
  showExtraOptions: a,
  component: r,
  valueKey: i,
  fieldNames: s,
  loading: c,
  popupVisible: u,
  valueKeys: f,
  dropdownRef: p,
  optionRefs: h,
  virtualListRef: m,
  onSelect: g,
  onPopupVisibleChange: C,
  enterToOpen: N = !0,
  defaultActiveFirstOption: I
}) => {
  const {
    validOptions: S,
    optionInfoMap: $,
    validOptionInfos: E,
    enabledOptionKeys: _,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: D,
    removeSlotOptionInfo: A
  } = oc({
    options: t,
    extraOptions: n,
    inputValue: o,
    filterOption: l,
    showExtraOptions: a,
    valueKey: i,
    fieldNames: s
  }), L = y();
  pe(_, (ee) => {
    (!L.value || !ee.includes(L.value)) && (L.value = ee[0]);
  });
  const O = (ee) => {
    L.value = ee;
  }, K = (ee) => {
    const le = _.value.length;
    if (le === 0)
      return;
    if (!L.value)
      return ee === "down" ? _.value[0] : _.value[le - 1];
    const x = _.value.indexOf(L.value), q = (le + x + (ee === "up" ? -1 : 1)) % le;
    return _.value[q];
  }, R = (ee) => {
    var le, x;
    m != null && m.value && m.value.scrollTo({
      key: ee
    });
    const q = $.get(ee), me = (le = p == null ? void 0 : p.value) == null ? void 0 : le.wrapperRef, te = (x = h == null ? void 0 : h.value[ee]) != null ? x : q == null ? void 0 : q.ref;
    if (!me || !te || me.scrollHeight === me.offsetHeight)
      return;
    const ie = bi(te, me), Se = me.scrollTop;
    ie.top < 0 ? me.scrollTo(0, Se + ie.top) : ie.bottom < 0 && me.scrollTo(0, Se - ie.bottom);
  };
  pe(u, (ee) => {
    var le;
    if (ee) {
      const x = f.value[f.value.length - 1];
      let q = (le = I == null ? void 0 : I.value) == null || le ? _.value[0] : void 0;
      _.value.includes(x) && (q = x), q !== L.value && (L.value = q), We(() => {
        L.value && R(L.value);
      });
    }
  });
  const J = lc(/* @__PURE__ */ new Map([[hn.ENTER, (ee) => {
    !(c != null && c.value) && !ee.isComposing && (u.value ? L.value && (g(L.value, ee), ee.preventDefault()) : N && (C(!0), ee.preventDefault()));
  }], [hn.ESC, (ee) => {
    u.value && (C(!1), ee.preventDefault());
  }], [hn.ARROW_DOWN, (ee) => {
    if (u.value) {
      const le = K("down");
      le && (L.value = le, R(le)), ee.preventDefault();
    }
  }], [hn.ARROW_UP, (ee) => {
    if (u.value) {
      const le = K("up");
      le && (L.value = le, R(le)), ee.preventDefault();
    }
  }]]));
  return ft(aa, Oe({
    multiple: e,
    valueKey: i,
    inputValue: o,
    filterOption: l,
    component: r,
    valueKeys: f,
    activeKey: L,
    setActiveKey: O,
    onSelect: g,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: D,
    removeSlotOptionInfo: A
  })), {
    validOptions: S,
    optionInfoMap: $,
    validOptionInfos: E,
    enabledOptionKeys: _,
    activeKey: L,
    setActiveKey: O,
    addSlotOptionInfo: D,
    removeSlotOptionInfo: A,
    getNextActiveKey: K,
    scrollIntoView: R,
    handleKeyDown: J
  };
}, ac = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: o,
  buffer: l
}) => {
  const a = y(0), r = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = y(0), c = d(() => {
    const b = s.value + l.value * 3;
    return b > i.value ? i.value : b;
  }), u = d(() => {
    const b = i.value - l.value * 3;
    return b < 0 ? 0 : b;
  }), f = (b) => {
    b < 0 ? s.value = 0 : b > u.value ? s.value = u.value : s.value = b;
  }, p = y(n.value), h = d(() => o.value !== 30 ? o.value : a.value || o.value), m = (b, D) => {
    r.set(b, D);
  }, g = (b) => {
    var D;
    if (p.value)
      return h.value;
    const A = e.value[b];
    return (D = r.get(A)) != null ? D : h.value;
  }, C = (b) => r.has(b);
  ze(() => {
    const b = Array.from(r.values()).reduce((D, A) => D + A, 0);
    b > 0 && (a.value = b / r.size);
  });
  const N = (b) => p.value ? h.value * b : I(0, b), I = (b, D) => {
    let A = 0;
    for (let L = b; L < D; L++)
      A += g(L);
    return A;
  }, S = d(() => p.value ? h.value * s.value : I(0, s.value)), $ = (b) => {
    const D = b >= S.value;
    let A = Math.abs(b - S.value);
    const L = D ? s.value : s.value - 1;
    let O = 0;
    for (; A > 0; )
      A -= g(L + O), D ? O++ : O--;
    return O;
  }, E = (b) => {
    const D = $(b), A = s.value + D - l.value;
    return A < 0 ? 0 : A > u.value ? u.value : A;
  }, _ = d(() => p.value ? h.value * (i.value - c.value) : I(c.value, i.value));
  return {
    frontPadding: S,
    behindPadding: _,
    start: s,
    end: c,
    getStartByScroll: E,
    setItemSize: m,
    hasItemSize: C,
    setStart: f,
    getScrollOffset: N
  };
};
var ic = z({
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
    const o = (n = dt()) == null ? void 0 : n.vnode.key, l = y(), a = () => {
      var r, i, s, c;
      const u = (i = (r = l.value) == null ? void 0 : r.$el) != null ? i : l.value, f = (c = (s = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : s.call(u).height) != null ? c : u == null ? void 0 : u.offsetHeight;
      f && e.setItemSize(o, f);
    };
    return ze(() => a()), Rt(() => a()), () => {
      var r;
      const i = zt((r = t.default) == null ? void 0 : r.call(t));
      return i ? In(i, {
        ref: l
      }, !0) : null;
    };
  }
}), sc = Object.defineProperty, ql = Object.getOwnPropertySymbols, uc = Object.prototype.hasOwnProperty, cc = Object.prototype.propertyIsEnumerable, Gl = (e, t, n) => t in e ? sc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, dc = (e, t) => {
  for (var n in t || (t = {}))
    uc.call(t, n) && Gl(e, n, t[n]);
  if (ql)
    for (var n of ql(t))
      cc.call(t, n) && Gl(e, n, t[n]);
  return e;
};
const fc = z({
  name: "VirtualList",
  components: {
    VirtualListItem: ic
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
      itemKey: o,
      fixedSize: l,
      estimatedSize: a,
      buffer: r,
      height: i
    } = ge(e), s = U("virtual-list"), c = d(() => Te(e.component) ? dc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), u = y(), f = y(), p = d(() => ({
      height: $e(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((L, O) => {
      var K;
      return (K = L[o.value]) != null ? K : O;
    })), {
      frontPadding: m,
      behindPadding: g,
      start: C,
      end: N,
      getStartByScroll: I,
      setItemSize: S,
      hasItemSize: $,
      setStart: E,
      getScrollOffset: _
    } = ac({
      dataKeys: h,
      contentRef: f,
      fixedSize: l,
      estimatedSize: a,
      buffer: r
    }), b = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(C.value, N.value)), D = (L) => {
      const {
        scrollTop: O,
        scrollHeight: K,
        offsetHeight: R
      } = L.target, J = I(O);
      J !== C.value && (E(J), We(() => {
        A(O);
      })), t("scroll", L), Math.floor(K - (O + R)) <= 0 && t("reachBottom", L);
    }, A = (L) => {
      var O, K;
      if (u.value)
        if ($e(L))
          u.value.scrollTop = L;
        else {
          const R = (K = L.index) != null ? K : h.value.indexOf((O = L.key) != null ? O : "");
          E(R - r.value), u.value.scrollTop = _(R), We(() => {
            if (u.value) {
              const J = _(R);
              J !== u.value.scrollTop && (u.value.scrollTop = J);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: u,
      contentRef: f,
      frontPadding: m,
      currentList: b,
      behindPadding: g,
      onScroll: D,
      setItemSize: S,
      hasItemSize: $,
      start: C,
      scrollTo: A,
      style: p,
      mergedComponent: c
    };
  }
});
function vc(e, t, n, o, l, a) {
  const r = ve("VirtualListItem");
  return w(), Z(Tt(e.mergedComponent.container), {
    ref: "containerRef",
    class: V(e.prefixCls),
    style: de(e.style),
    onScroll: e.onScroll
  }, {
    default: Y(() => [(w(), Z(Tt(e.mergedComponent.list), ae(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: Y(() => [(w(), Z(Tt(e.mergedComponent.content), ae({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: Y(() => [(w(!0), F(Be, null, At(e.currentList, (i, s) => {
          var c;
          return w(), Z(r, {
            key: (c = i[e.itemKey]) != null ? c : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: Y(() => [oe(e.$slots, "item", {
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
var ua = /* @__PURE__ */ ue(fc, [["render", vc]]);
const pc = z({
  name: "Popover",
  components: {
    Trigger: ln
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
    const n = U("popover"), o = y(e.defaultPopupVisible), l = d(() => {
      var s;
      return (s = e.popupVisible) != null ? s : o.value;
    }), a = (s) => {
      o.value = s, t("update:popupVisible", s), t("popupVisibleChange", s);
    }, r = d(() => [`${n}-popup-content`, e.contentClass]), i = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      computedPopupVisible: l,
      contentCls: r,
      arrowCls: i,
      handlePopupVisibleChange: a
    };
  }
});
function hc(e, t, n, o, l, a) {
  const r = ve("trigger");
  return w(), Z(r, {
    class: V(e.prefixCls),
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
    content: Y(() => [M("div", {
      class: V(`${e.prefixCls}-title`)
    }, [oe(e.$slots, "title", {}, () => [He(Fe(e.title), 1)])], 2), M("div", {
      class: V(`${e.prefixCls}-content`)
    }, [oe(e.$slots, "content", {}, () => [He(Fe(e.content), 1)])], 2)]),
    default: Y(() => [oe(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var vo = /* @__PURE__ */ ue(pc, [["render", hc]]);
const mc = Object.assign(vo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + vo.name, vo);
  }
});
var yc = Object.defineProperty, Ul = Object.getOwnPropertySymbols, gc = Object.prototype.hasOwnProperty, bc = Object.prototype.propertyIsEnumerable, Yl = (e, t, n) => t in e ? yc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, po = (e, t) => {
  for (var n in t || (t = {}))
    gc.call(t, n) && Yl(e, n, t[n]);
  if (Ul)
    for (var n of Ul(t))
      bc.call(t, n) && Yl(e, n, t[n]);
  return e;
};
const _c = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], $c = ["normal", "processing", "success", "warning", "danger"];
var ho = z({
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
      validator: (e) => $c.includes(e)
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
      color: o,
      dotStyle: l,
      offset: a,
      text: r,
      dot: i,
      maxCount: s,
      count: c
    } = ge(e), u = U("badge"), f = Cc(u, n == null ? void 0 : n.value, t == null ? void 0 : t.default), p = d(() => {
      const m = po({}, (l == null ? void 0 : l.value) || {}), [g, C] = (a == null ? void 0 : a.value) || [];
      g && (m.marginRight = `${-g}px`), C && (m.marginTop = `${C}px`);
      const N = !(o != null && o.value) || _c.includes(o == null ? void 0 : o.value) ? {} : {
        backgroundColor: o.value
      };
      return {
        mergedStyle: po(po({}, N), m),
        computedDotStyle: m,
        computedColorStyle: N
      };
    }), h = () => {
      const m = r == null ? void 0 : r.value, g = o == null ? void 0 : o.value, C = n == null ? void 0 : n.value, N = i == null ? void 0 : i.value, I = Number(c == null ? void 0 : c.value), S = (c == null ? void 0 : c.value) != null, {
        computedDotStyle: $,
        mergedStyle: E
      } = p.value;
      return t.content ? v("span", {
        class: `${u}-custom-dot`,
        style: $
      }, [t.content()]) : m && !g && !C ? v("span", {
        class: `${u}-text`,
        style: $
      }, [m]) : C || g && !S ? v("span", {
        class: `${u}-status-wrapper`
      }, [v("span", {
        class: [`${u}-status-dot`, {
          [`${u}-status-${C}`]: C,
          [`${u}-color-${g}`]: g
        }],
        style: E
      }, null), m && v("span", {
        class: `${u}-status-text`
      }, [m])]) : (N || g) && I > 0 ? v("span", {
        class: [`${u}-dot`, {
          [`${u}-color-${g}`]: g
        }],
        style: E
      }, null) : I === 0 ? null : v("span", {
        class: `${u}-number`,
        style: E
      }, [v("span", null, [s.value && I > s.value ? `${s.value}+` : I])]);
    };
    return () => v("span", {
      class: f.value
    }, [t.default && t.default(), h()]);
  }
});
const Cc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), kc = Object.assign(ho, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + ho.name, ho);
  }
}), wc = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Sc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ec = /* @__PURE__ */ M("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Oc = [Ec];
function xc(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Oc, 14, Sc);
}
var mo = /* @__PURE__ */ ue(wc, [["render", xc]]);
const ca = Object.assign(mo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + mo.name, mo);
  }
}), Pc = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var o;
  const l = y((o = t == null ? void 0 : t.value) != null ? o : !1), a = d(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : l.value;
  }), r = (i) => {
    i !== a.value && (l.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return pe(a, (i) => {
    l.value !== i && (l.value = i);
  }), {
    computedPopupVisible: a,
    handlePopupVisibleChange: r
  };
}, Bc = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Tc = /* @__PURE__ */ M("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), zc = [Tc];
function Nc(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zc, 14, Ic);
}
var yo = /* @__PURE__ */ ue(Bc, [["render", Nc]]);
const Lc = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + yo.name, yo);
  }
}), Vc = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: o = "input",
  updateEventName: l = "update:modelValue",
  eventHandlers: a
}) => {
  var r;
  const i = y(), s = y((r = e == null ? void 0 : e.value) != null ? r : ""), c = y(!1), u = y(!1), f = y("");
  let p;
  const h = d(() => {
    var _;
    return (_ = t == null ? void 0 : t.value) != null ? _ : s.value;
  }), m = (_, b) => {
    s.value = _, n(l, _), n(o, _, b);
  }, g = (_) => {
    const {
      value: b
    } = _.target;
    u.value || (m(b, _), We(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, C = (_) => {
    o === "input" && h.value !== p && (p = h.value, n("change", h.value, _));
  }, N = (_) => {
    var b;
    const {
      value: D
    } = _.target;
    _.type === "compositionend" ? (u.value = !1, f.value = "", m(D, _), We(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (u.value = !0, f.value = h.value + ((b = _.data) != null ? b : ""));
  }, I = (_) => {
    var b, D;
    c.value = !0, p = h.value, n("focus", _), (D = (b = a == null ? void 0 : a.value) == null ? void 0 : b.onFocus) == null || D.call(b, _);
  }, S = (_) => {
    var b, D;
    c.value = !1, n("blur", _), (D = (b = a == null ? void 0 : a.value) == null ? void 0 : b.onBlur) == null || D.call(b, _), C(_);
  }, $ = (_) => {
    const b = _.key || _.code;
    !u.value && b === al.key && (n("pressEnter", _), C(_));
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
    compositionValue: f,
    computedValue: h,
    handleInput: g,
    handleComposition: N,
    handleFocus: I,
    handleBlur: S,
    handleKeyDown: $,
    handleMousedown: E
  };
};
var Dc = z({
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
    slots: o
  }) {
    var l;
    const {
      size: a,
      disabled: r,
      error: i,
      inputValue: s,
      uninjectFormItemContext: c
    } = ge(e), u = (l = e.baseCls) != null ? l : U("input-label"), {
      mergedSize: f,
      mergedDisabled: p,
      mergedError: h,
      eventHandlers: m
    } = vt({
      size: a,
      disabled: r,
      error: i,
      uninject: c == null ? void 0 : c.value
    }), {
      mergedSize: g
    } = pt(f), {
      inputRef: C,
      _focused: N,
      computedValue: I,
      handleInput: S,
      handleComposition: $,
      handleFocus: E,
      handleBlur: _,
      handleMousedown: b
    } = Vc({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: m
    }), D = d(() => {
      var x;
      return (x = e.focused) != null ? x : N.value;
    }), A = d(() => e.enabledInput && N.value || !e.modelValue), L = () => {
      var x, q;
      return e.modelValue ? (q = (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? q : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? L() : e.placeholder), K = () => {
      var x, q;
      return e.modelValue ? (q = (x = o.default) == null ? void 0 : x.call(o, {
        data: e.modelValue
      })) != null ? q : L() : null;
    }, R = d(() => [u, `${u}-size-${g.value}`, {
      [`${u}-search`]: e.enabledInput,
      [`${u}-focus`]: D.value,
      [`${u}-disabled`]: p.value,
      [`${u}-error`]: h.value
    }]), J = d(() => Ht(t, Mt)), ee = d(() => il(t, Mt));
    return {
      inputRef: C,
      render: () => v("span", ae(J.value, {
        class: R.value,
        title: L(),
        onMousedown: b
      }), [o.prefix && v("span", {
        class: `${u}-prefix`
      }, [o.prefix()]), v("input", ae(ee.value, {
        ref: C,
        class: [`${u}-input`, {
          [`${u}-input-hidden`]: !A.value
        }],
        value: I.value,
        readonly: !e.enabledInput,
        placeholder: O.value,
        disabled: p.value,
        onInput: S,
        onFocus: E,
        onBlur: _,
        onCompositionstart: $,
        onCompositionupdate: $,
        onCompositionend: $
      }), null), v("span", {
        class: [`${u}-value`, {
          [`${u}-value-hidden`]: A.value
        }]
      }, [K()]), o.suffix && v("span", {
        class: `${u}-suffix`
      }, [o.suffix()])])
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
}), Ac = Object.defineProperty, Zl = Object.getOwnPropertySymbols, jc = Object.prototype.hasOwnProperty, Fc = Object.prototype.propertyIsEnumerable, Xl = (e, t, n) => t in e ? Ac(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Mc = (e, t) => {
  for (var n in t || (t = {}))
    jc.call(t, n) && Xl(e, n, t[n]);
  if (Zl)
    for (var n of Zl(t))
      Fc.call(t, n) && Xl(e, n, t[n]);
  return e;
};
const Kc = (e, t) => {
  const n = [];
  for (const o of e)
    if (Te(o))
      n.push({
        raw: o,
        value: o[t.value],
        label: o[t.label],
        closable: o[t.closable],
        tagProps: o[t.tagProps]
      });
    else if (e || $e(e)) {
      const l = {
        value: o,
        label: String(o),
        closable: !0
      };
      n.push(Mc({
        raw: l
      }, l));
    }
  return n;
}, Jl = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Rc = z({
  name: "Tag",
  components: {
    IconHover: Je,
    IconClose: cn,
    IconLoading: ct
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
    } = ge(e), o = U("tag"), l = d(() => e.color && Jl.includes(e.color)), a = d(() => e.color && !Jl.includes(e.color)), r = y(e.defaultVisible), i = y(e.defaultChecked), s = d(() => {
      var C;
      return (C = e.visible) != null ? C : r.value;
    }), c = d(() => {
      var C;
      return e.checkable ? (C = e.checked) != null ? C : i.value : !0;
    }), {
      mergedSize: u
    } = pt(n), f = d(() => u.value === "mini" ? "small" : u.value), p = (C) => {
      r.value = !1, t("update:visible", !1), t("close", C);
    }, h = (C) => {
      if (e.checkable) {
        const N = !c.value;
        i.value = N, t("update:checked", N), t("check", N, C);
      }
    }, m = d(() => [o, `${o}-size-${f.value}`, {
      [`${o}-loading`]: e.loading,
      [`${o}-hide`]: !s.value,
      [`${o}-${e.color}`]: l.value,
      [`${o}-bordered`]: e.bordered,
      [`${o}-checkable`]: e.checkable,
      [`${o}-checked`]: c.value,
      [`${o}-custom-color`]: a.value
    }]), g = d(() => {
      if (a.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: o,
      cls: m,
      style: g,
      computedVisible: s,
      computedChecked: c,
      handleClick: h,
      handleClose: p
    };
  }
});
function Hc(e, t, n, o, l, a) {
  const r = ve("icon-close"), i = ve("icon-hover"), s = ve("icon-loading");
  return e.computedVisible ? (w(), F("span", {
    key: 0,
    class: V(e.cls),
    style: de(e.style),
    onClick: t[0] || (t[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, [e.$slots.icon ? (w(), F("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [oe(e.$slots, "icon")], 2)) : he("v-if", !0), e.nowrap ? (w(), F("span", {
    key: 1,
    class: V(`${e.prefixCls}-text`)
  }, [oe(e.$slots, "default")], 2)) : oe(e.$slots, "default", {
    key: 2
  }), e.closable ? (w(), Z(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: lt(e.handleClose, ["stop"])
  }, {
    default: Y(() => [oe(e.$slots, "close-icon", {}, () => [v(r)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : he("v-if", !0), e.loading ? (w(), F("span", {
    key: 4,
    class: V(`${e.prefixCls}-loading-icon`)
  }, [v(s)], 2)) : he("v-if", !0)], 6)) : he("v-if", !0);
}
var go = /* @__PURE__ */ ue(Rc, [["render", Hc]]);
const jn = Object.assign(go, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + go.name, go);
  }
});
var Wc = Object.defineProperty, Ql = Object.getOwnPropertySymbols, qc = Object.prototype.hasOwnProperty, Gc = Object.prototype.propertyIsEnumerable, er = (e, t, n) => t in e ? Wc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, mn = (e, t) => {
  for (var n in t || (t = {}))
    qc.call(t, n) && er(e, n, t[n]);
  if (Ql)
    for (var n of Ql(t))
      Gc.call(t, n) && er(e, n, t[n]);
  return e;
};
const Uc = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var bo = z({
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
    attrs: o
  }) {
    const {
      size: l,
      disabled: a,
      error: r,
      uninjectFormItemContext: i,
      modelValue: s
    } = ge(e), c = e.baseCls || U("input-tag"), u = y(), f = y(), {
      mergedSize: p,
      mergedDisabled: h,
      mergedError: m,
      feedback: g,
      eventHandlers: C
    } = vt({
      size: l,
      disabled: a,
      error: r,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: N
    } = pt(p), I = d(() => mn(mn({}, Uc), e.fieldNames)), S = y(!1), $ = y(e.defaultValue), E = y(e.defaultInputValue), _ = y(!1), b = y(""), D = d(() => Te(e.retainInputValue) ? mn({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), A = Oe({
      width: "12px"
    }), L = d(() => e.focused || S.value), O = (P, H) => {
      E.value = P, t("update:inputValue", P), t("inputValueChange", P, H);
    }, K = (P) => {
      var H;
      const {
        value: ce
      } = P.target;
      P.type === "compositionend" ? (_.value = !1, b.value = "", O(ce, P), We(() => {
        u.value && J.value !== u.value.value && (u.value.value = J.value);
      })) : (_.value = !0, b.value = J.value + ((H = P.data) != null ? H : ""));
    }, R = d(() => {
      var P;
      return (P = e.modelValue) != null ? P : $.value;
    }), J = d(() => {
      var P;
      return (P = e.inputValue) != null ? P : E.value;
    });
    pe(s, (P) => {
      (je(P) || Nn(P)) && ($.value = []);
    });
    const ee = (P) => {
      u.value && P.target !== u.value && (P.preventDefault(), u.value.focus());
    }, le = (P) => {
      const {
        value: H
      } = P.target;
      _.value || (O(H, P), We(() => {
        u.value && J.value !== u.value.value && (u.value.value = J.value);
      }));
    }, x = d(() => Kc(R.value, I.value)), q = d(() => {
      if (e.maxTagCount > 0) {
        const P = x.value.length - e.maxTagCount;
        if (P > 0) {
          const H = x.value.slice(0, e.maxTagCount), ce = {
            value: "__arco__more",
            label: `+${P}...`,
            closable: !1
          };
          return H.push(mn({
            raw: ce
          }, ce)), H;
        }
      }
      return x.value;
    }), me = (P, H) => {
      var ce, ke;
      $.value = P, t("update:modelValue", P), t("change", P, H), (ke = (ce = C.value) == null ? void 0 : ce.onChange) == null || ke.call(ce, H);
    }, te = (P, H, ce) => {
      var ke;
      const Ee = (ke = R.value) == null ? void 0 : ke.filter((Xe, Ie) => Ie !== H);
      me(Ee, ce), t("remove", P, ce);
    }, ie = (P) => {
      me([], P), t("clear", P);
    }, Se = d(() => !h.value && !e.readonly && e.allowClear && !!R.value.length), be = (P) => {
      var H;
      if (J.value) {
        if (P.preventDefault(), e.uniqueValue && ((H = R.value) != null && H.includes(J.value))) {
          t("pressEnter", J.value, P);
          return;
        }
        const ce = R.value.concat(J.value);
        me(ce, P), t("pressEnter", J.value, P), D.value.create || O("", P);
      }
    }, ye = (P) => {
      var H, ce;
      S.value = !0, t("focus", P), (ce = (H = C.value) == null ? void 0 : H.onFocus) == null || ce.call(H, P);
    }, se = (P) => {
      var H, ce;
      S.value = !1, !D.value.blur && J.value && O("", P), t("blur", P), (ce = (H = C.value) == null ? void 0 : H.onBlur) == null || ce.call(H, P);
    }, Ce = () => {
      for (let P = x.value.length - 1; P >= 0; P--)
        if (x.value[P].closable)
          return P;
      return -1;
    }, Qe = (P) => {
      if (h.value || e.readonly)
        return;
      const H = P.key || P.code;
      if (!_.value && J.value && H === al.key && be(P), !_.value && q.value.length > 0 && !J.value && H === ts.key) {
        const ce = Ce();
        ce >= 0 && te(x.value[ce].value, ce, P);
      }
    }, Pe = (P) => {
      P > 12 ? A.width = `${P}px` : A.width = "12px";
    };
    ze(() => {
      f.value && Pe(f.value.offsetWidth);
    });
    const Ve = () => {
      f.value && Pe(f.value.offsetWidth);
    };
    pe(J, (P) => {
      u.value && !_.value && P !== u.value.value && (u.value.value = P);
    });
    const Ae = d(() => [c, `${c}-size-${N.value}`, {
      [`${c}-disabled`]: h.value,
      [`${c}-disabled-input`]: e.disabledInput,
      [`${c}-error`]: m.value,
      [`${c}-focus`]: L.value,
      [`${c}-readonly`]: e.readonly,
      [`${c}-has-tag`]: q.value.length > 0,
      [`${c}-has-prefix`]: !!n.prefix,
      [`${c}-has-suffix`]: !!n.suffix || Se.value || g.value,
      [`${c}-has-placeholder`]: !R.value.length
    }]), Ne = d(() => Ht(o, Mt)), Ye = d(() => il(o, Mt));
    return {
      inputRef: u,
      render: () => {
        var P;
        return v("span", ae({
          class: Ae.value,
          onMousedown: ee
        }, Ne.value), [v(on, {
          onResize: Ve
        }, {
          default: () => [v("span", {
            ref: f,
            class: `${c}-mirror`
          }, [q.value.length > 0 ? b.value || J.value : b.value || J.value || e.placeholder])]
        }), n.prefix && v("span", {
          class: `${c}-prefix`
        }, [n.prefix()]), v(za, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${c}-inner`, {
            [`${c}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [q.value.map((H, ce) => v(jn, ae({
            key: `tag-${H.value}`,
            class: `${c}-tag`,
            closable: !h.value && !e.readonly && H.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, H.tagProps, {
            onClose: (ke) => te(H.value, ce, ke)
          }), {
            default: () => {
              var ke, Ee, Xe, Ie;
              return [(Ie = (Xe = (ke = n.tag) == null ? void 0 : ke.call(n, {
                data: H.raw
              })) != null ? Xe : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, H.raw)) != null ? Ie : H.label];
            }
          })), v("input", ae(Ye.value, {
            ref: u,
            key: "input-tag-input",
            class: `${c}-input`,
            style: A,
            placeholder: q.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: le,
            onKeydown: Qe,
            onFocus: ye,
            onBlur: se,
            onCompositionstart: K,
            onCompositionupdate: K,
            onCompositionend: K
          }), null)]
        }), Se.value && v(Je, {
          class: `${c}-clear-btn`,
          onClick: ie,
          onMousedown: (H) => H.stopPropagation()
        }, {
          default: () => [v(cn, null, null)]
        }), (n.suffix || !!g.value) && v("span", {
          class: `${c}-suffix`
        }, [(P = n.suffix) == null ? void 0 : P.call(n), !!g.value && v(rl, {
          type: g.value
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
const Yc = Object.assign(bo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + bo.name, bo);
  }
});
var tr = z({
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
      default: (e) => De(e.modelValue)
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
      size: o,
      disabled: l,
      error: a
    } = ge(e), r = U("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: c,
      mergedSize: u,
      mergedError: f
    } = vt({
      size: o,
      disabled: l,
      error: a
    }), {
      mergedSize: p
    } = pt(u), {
      opened: h
    } = ge(e), m = y(), g = d(() => {
      var O;
      return (O = m.value) == null ? void 0 : O.inputRef;
    }), C = d(() => e.modelValue.length === 0), N = d(() => e.allowSearch || e.allowCreate), I = d(() => e.allowClear && !e.disabled && !C.value), S = (O) => {
      var K, R;
      t("focus", O), (R = (K = s.value) == null ? void 0 : K.onFocus) == null || R.call(K, O);
    }, $ = (O) => {
      var K, R;
      t("blur", O), (R = (K = s.value) == null ? void 0 : K.onBlur) == null || R.call(K, O);
    }, E = (O) => {
      t("remove", O);
    }, _ = (O) => {
      t("clear", O);
    }, b = () => {
      var O, K, R, J;
      return e.loading ? (K = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? K : v(ct, null, null) : e.allowSearch && e.opened ? (J = (R = n["search-icon"]) == null ? void 0 : R.call(n)) != null ? J : v(Ko, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : v(ca, {
        class: `${r}-arrow-icon`
      }, null);
    }, D = () => v(Be, null, [I.value && v(Je, {
      class: `${r}-clear-btn`,
      onClick: _,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [v(cn, null, null)]
    }), v("span", {
      class: `${r}-icon`
    }, [b()]), !!i.value && v(rl, {
      type: i.value
    }, null)]);
    pe(h, (O) => {
      !O && g.value && g.value.isSameNode(document.activeElement) && g.value.blur();
    });
    const A = d(() => [`${r}-${e.multiple ? "multiple" : "single"}`, {
      [`${r}-opened`]: e.opened,
      [`${r}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: g,
      handleFocus: S,
      handleBlur: $,
      render: () => e.multiple ? v(Yc, {
        ref: m,
        baseCls: r,
        class: A.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: c.value,
        size: p.value,
        error: f.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        tagNowrap: e.tagNowrap,
        retainInputValue: !0,
        uninjectFormItemContext: !0,
        onRemove: E,
        onFocus: S,
        onBlur: $
      }, {
        prefix: n.prefix,
        suffix: D,
        tag: n.label
      }) : v(Dc, {
        ref: m,
        baseCls: r,
        class: A.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: c.value,
        size: p.value,
        error: f.value,
        enabledInput: N.value,
        uninjectFormItemContext: !0,
        onFocus: S,
        onBlur: $
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: D
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
const Zc = z({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    return {
      prefixCls: U("select-group")
    };
  }
});
function Xc(e, t, n, o, l, a) {
  return w(), F(Be, null, [M("li", {
    class: V(`${e.prefixCls}-title`)
  }, [oe(e.$slots, "label", {}, () => [He(Fe(e.label), 1)])], 2), oe(e.$slots, "default")], 64);
}
var Cn = /* @__PURE__ */ ue(Zc, [["render", Xc]]);
const nr = typeof window > "u" ? global : window;
function Jc(e, t) {
  let n = 0;
  return (...o) => {
    n && nr.clearTimeout(n), n = nr.setTimeout(() => {
      n = 0, e(...o);
    }, t);
  };
}
var Qc = Object.defineProperty, ed = Object.defineProperties, td = Object.getOwnPropertyDescriptors, or = Object.getOwnPropertySymbols, nd = Object.prototype.hasOwnProperty, od = Object.prototype.propertyIsEnumerable, lr = (e, t, n) => t in e ? Qc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Yt = (e, t) => {
  for (var n in t || (t = {}))
    nd.call(t, n) && lr(e, n, t[n]);
  if (or)
    for (var n of or(t))
      od.call(t, n) && lr(e, n, t[n]);
  return e;
}, ld = (e, t) => ed(e, td(t));
function rd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Zo(e);
}
const ad = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var _o = z({
  name: "Select",
  components: {
    Trigger: ln,
    SelectView: tr
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
      default: (e) => je(e.multiple) ? "" : []
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
    attrs: o
  }) {
    const {
      size: l,
      disabled: a,
      error: r,
      options: i,
      filterOption: s,
      valueKey: c,
      multiple: u,
      popupVisible: f,
      defaultPopupVisible: p,
      showExtraOptions: h,
      modelValue: m,
      fieldNames: g,
      loading: C,
      defaultActiveFirstOption: N
    } = ge(e), I = U("select"), {
      mergedSize: S,
      mergedDisabled: $,
      mergedError: E,
      eventHandlers: _
    } = vt({
      size: l,
      disabled: a,
      error: r
    }), b = d(() => e.virtualListProps ? "div" : "li"), D = d(() => Te(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (qe(e.formatLabel))
        return (B) => {
          const k = Ee.get(B.value);
          return e.formatLabel(k);
        };
    });
    const A = y(), L = y({}), O = y(), {
      computedPopupVisible: K,
      handlePopupVisibleChange: R
    } = Pc({
      popupVisible: f,
      defaultPopupVisible: p,
      emit: n
    }), J = y(e.defaultValue), ee = d(() => {
      var B;
      const k = (B = e.modelValue) != null ? B : J.value;
      return (De(k) ? k : k || $e(k) || St(k) || jt(k) ? [k] : []).map((Q) => ({
        value: Q,
        key: rn(Q, e.valueKey)
      }));
    });
    pe(m, (B) => {
      (je(B) || Nn(B)) && (J.value = u.value ? [] : B);
    });
    const le = d(() => ee.value.map((B) => B.key)), x = d(() => Yt(Yt({}, ad), g == null ? void 0 : g.value)), q = y(), me = (B) => {
      const k = {};
      return B.forEach((T) => {
        k[T] = Ee.get(T);
      }), k;
    }, te = (B) => {
      q.value = me(B);
    }, ie = (B) => qe(e.fallbackOption) ? e.fallbackOption(B) : {
      [x.value.value]: B,
      [x.value.label]: String(Te(B) ? B[c == null ? void 0 : c.value] : B)
    }, Se = () => {
      const B = [], k = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const T of ee.value)
          if (!k.includes(T.key) && T.value !== "") {
            const Q = Ee.get(T.key);
            (!Q || Q.origin === "extraOptions") && (B.push(T), k.push(T.key));
          }
      }
      if (e.allowCreate && Ce.value) {
        const T = rn(Ce.value);
        if (!k.includes(T)) {
          const Q = Ee.get(T);
          (!Q || Q.origin === "extraOptions") && B.push({
            value: Ce.value,
            key: T
          });
        }
      }
      return B;
    }, be = y([]), ye = d(() => be.value.map((B) => {
      var k;
      let T = ie(B.value);
      const Q = (k = q.value) == null ? void 0 : k[B.key];
      return !je(Q) && !ja(Q) && (T = Yt(Yt({}, T), Q)), T;
    }));
    We(() => {
      zn(() => {
        var B;
        const k = Se();
        if (k.length !== be.value.length)
          be.value = k;
        else if (k.length > 0) {
          for (let T = 0; T < k.length; T++)
            if (k[T].key !== ((B = be.value[T]) == null ? void 0 : B.key)) {
              be.value = k;
              break;
            }
        }
      });
    });
    const se = y(""), Ce = d(() => {
      var B;
      return (B = e.inputValue) != null ? B : se.value;
    });
    pe(K, (B) => {
      !B && !D.value && Ce.value && Ve("");
    });
    const Qe = (B) => {
      var k, T;
      return e.multiple ? B.map((Q) => {
        var Ue, Re;
        return (Re = (Ue = Ee.get(Q)) == null ? void 0 : Ue.value) != null ? Re : "";
      }) : (T = (k = Ee.get(B[0])) == null ? void 0 : k.value) != null ? T : Hu(Ee) ? void 0 : "";
    }, Pe = (B) => {
      var k, T;
      const Q = Qe(B);
      J.value = Q, n("update:modelValue", Q), n("change", Q), (T = (k = _.value) == null ? void 0 : k.onChange) == null || T.call(k), te(B);
    }, Ve = (B) => {
      se.value = B, n("update:inputValue", B), n("inputValueChange", B);
    }, Ae = (B, k) => {
      if (e.multiple) {
        if (le.value.includes(B)) {
          const T = le.value.filter((Q) => Q !== B);
          Pe(T);
        } else if (Ie.value.includes(B))
          if (e.limit > 0 && le.value.length >= e.limit) {
            const T = Ee.get(B);
            n("exceedLimit", T == null ? void 0 : T.value, k);
          } else {
            const T = le.value.concat(B);
            Pe(T);
          }
        D.value || Ve("");
      } else {
        if (B !== le.value[0] && Pe([B]), D.value) {
          const T = Ee.get(B);
          T && Ve(T.label);
        }
        R(!1);
      }
    }, Ne = Jc((B) => {
      n("search", B);
    }, e.searchDelay), Ye = (B) => {
      B !== Ce.value && (K.value || R(!0), Ve(B), e.allowSearch && Ne(B));
    }, W = (B) => {
      const k = Ee.get(B), T = le.value.filter((Q) => Q !== B);
      Pe(T), n("remove", k == null ? void 0 : k.value);
    }, P = (B) => {
      B == null || B.stopPropagation();
      const k = le.value.filter((T) => {
        var Q;
        return (Q = Ee.get(T)) == null ? void 0 : Q.disabled;
      });
      Pe(k), Ve(""), n("clear", B);
    }, H = (B) => {
      n("dropdownScroll", B);
    }, ce = (B) => {
      n("dropdownReachBottom", B);
    }, {
      validOptions: ke,
      optionInfoMap: Ee,
      validOptionInfos: Xe,
      enabledOptionKeys: Ie,
      handleKeyDown: mt
    } = rc({
      multiple: u,
      options: i,
      extraOptions: ye,
      inputValue: Ce,
      filterOption: s,
      showExtraOptions: h,
      component: b,
      valueKey: c,
      fieldNames: g,
      loading: C,
      popupVisible: K,
      valueKeys: le,
      dropdownRef: A,
      optionRefs: L,
      virtualListRef: O,
      defaultActiveFirstOption: N,
      onSelect: Ae,
      onPopupVisibleChange: R
    }), Gt = d(() => {
      var B;
      const k = [];
      for (const T of ee.value) {
        const Q = Ee.get(T.key);
        Q && k.push(ld(Yt({}, Q), {
          value: T.key,
          label: (B = Q == null ? void 0 : Q.label) != null ? B : String(Te(T.value) ? T.value[c == null ? void 0 : c.value] : T.value),
          closable: !(Q != null && Q.disabled),
          tagProps: Q == null ? void 0 : Q.tagProps
        }));
      }
      return k;
    }), yt = (B) => {
      if (qe(t.option)) {
        const k = t.option;
        return () => k({
          data: B.raw
        });
      }
      return qe(B.render) ? B.render : () => B.label;
    }, nt = (B) => {
      if (sa(B)) {
        let k;
        return v(Cn, {
          key: B.key,
          label: B.label
        }, rd(k = B.options.map((T) => nt(T))) ? k : {
          default: () => [k]
        });
      }
      return An(B, {
        inputValue: Ce.value,
        filterOption: s == null ? void 0 : s.value
      }) ? v($n, {
        ref: (k) => {
          k != null && k.$el && (L.value[B.key] = k.$el);
        },
        key: B.key,
        value: B.value,
        label: B.label,
        disabled: B.disabled,
        internal: !0
      }, {
        default: yt(B)
      }) : null;
    }, Ot = () => v(Vu, {
      ref: A,
      loading: e.loading,
      empty: Xe.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: H,
      onReachBottom: ce
    }, {
      default: () => {
        var B, k;
        return [...(k = (B = t.default) == null ? void 0 : B.call(t)) != null ? k : [], ...ke.value.map(nt)];
      },
      "virtual-list": () => v(ua, ae(e.virtualListProps, {
        ref: O,
        data: ke.value
      }), {
        item: ({
          item: B
        }) => nt(B)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), Ut = ({
      data: B
    }) => {
      var k, T, Q, Ue;
      if ((t.label || qe(e.formatLabel)) && B) {
        const Re = Ee.get(B.value);
        if (Re != null && Re.raw)
          return (Q = (k = t.label) == null ? void 0 : k.call(t, {
            data: Re.raw
          })) != null ? Q : (T = e.formatLabel) == null ? void 0 : T.call(e, Re.raw);
      }
      return (Ue = B == null ? void 0 : B.label) != null ? Ue : "";
    };
    return () => v(ln, ae({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: $.value,
      popupVisible: K.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: R
    }, e.triggerProps), {
      default: () => {
        var B, k;
        return [(k = (B = t.trigger) == null ? void 0 : B.call(t)) != null ? k : v(tr, ae({
          class: I,
          modelValue: Gt.value,
          inputValue: Ce.value,
          multiple: e.multiple,
          disabled: $.value,
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
          onInputValueChange: Ye,
          onRemove: W,
          onClear: P,
          onKeydown: mt
        }, o), {
          label: Ut,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: Ot
    });
  }
});
const id = Object.assign(_o, {
  Option: $n,
  OptGroup: Cn,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + _o.name, _o), e.component(n + $n.name, $n), e.component(n + Cn.name, Cn);
  }
}), sd = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ud = ["stroke-width", "stroke-linecap", "stroke-linejoin"], cd = /* @__PURE__ */ M("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), dd = [cd];
function fd(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, dd, 14, ud);
}
var $o = /* @__PURE__ */ ue(sd, [["render", fd]]);
const vd = Object.assign($o, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + $o.name, $o);
  }
}), pd = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), hd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], md = /* @__PURE__ */ M("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), yd = [md];
function gd(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, yd, 14, hd);
}
var Co = /* @__PURE__ */ ue(pd, [["render", gd]]);
const bd = Object.assign(Co, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Co.name, Co);
  }
}), _d = (e) => {
  const t = {}, n = y([]), o = () => {
    if (t.value) {
      const l = Yr(t.value, e);
      (l.length !== n.value.length || l.toString() !== n.value.toString()) && (n.value = l);
    }
  };
  return ze(() => o()), st(() => o()), {
    children: t,
    components: n
  };
}, da = Symbol("collapseCtx"), $d = z({
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
      expandIconPosition: o,
      destroyOnHide: l,
      showExpandIcon: a
    } = ge(e), r = U("collapse"), i = y(e.defaultActiveKey), s = d(() => {
      var f;
      const p = (f = e.activeKey) != null ? f : i.value;
      return De(p) ? p : [p];
    });
    ft(da, Oe({
      activeKeys: s,
      slots: n,
      showExpandIcon: a,
      expandIconPosition: o,
      destroyOnHide: l,
      handleClick: (f, p) => {
        let h = [];
        if (e.accordion)
          s.value.includes(f) || (h = [f]), i.value = h;
        else {
          h = [...s.value];
          const m = h.indexOf(f);
          m > -1 ? h.splice(m, 1) : e.accordion ? h = [f] : h.push(f), i.value = h;
        }
        t("update:activeKey", h), t("change", h, p);
      }
    }));
    const u = d(() => [r, {
      [`${r}-borderless`]: !e.bordered
    }]);
    return {
      prefixCls: r,
      cls: u
    };
  }
});
function Cd(e, t, n, o, l, a) {
  return w(), F("div", {
    class: V(e.cls)
  }, [oe(e.$slots, "default")], 2);
}
var ko = /* @__PURE__ */ ue($d, [["render", Cd]]);
const kd = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-caret-right`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), wd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sd = /* @__PURE__ */ M("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ed = [Sd];
function Od(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Ed, 14, wd);
}
var wo = /* @__PURE__ */ ue(kd, [["render", Od]]);
const xd = Object.assign(wo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + wo.name, wo);
  }
}), Pd = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-caret-left`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Bd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Id = /* @__PURE__ */ M("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Td = [Id];
function zd(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Td, 14, Bd);
}
var So = /* @__PURE__ */ ue(Pd, [["render", zd]]);
const Nd = Object.assign(So, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + So.name, So);
  }
});
var Ct = z({
  name: "CollapseItem",
  components: {
    IconHover: Je,
    IconCaretRight: xd,
    IconCaretLeft: Nd
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
    const o = dt(), l = U("collapse-item"), a = Ge(da, {}), r = o && $e(o == null ? void 0 : o.vnode.key) ? o.vnode.key : String((n = o == null ? void 0 : o.vnode.key) != null ? n : ""), i = d(() => {
      var $;
      return ($ = a.activeKeys) == null ? void 0 : $.includes(r);
    }), s = d(() => a.destroyOnHide || e.destroyOnHide), c = d(() => {
      var $;
      return ($ = a == null ? void 0 : a.showExpandIcon) != null ? $ : e.showExpandIcon;
    }), u = y(s.value ? i.value : !0), f = d(() => {
      var $;
      return ($ = a == null ? void 0 : a.expandIconPosition) != null ? $ : "left";
    }), p = ($) => {
      var E;
      e.disabled || (E = a.handleClick) == null || E.call(a, r, $);
    };
    pe(i, ($) => {
      $ && !u.value && (u.value = !0);
    });
    const h = {
      onEnter: ($) => {
        $.style.height = `${$.scrollHeight}px`;
      },
      onAfterEnter: ($) => {
        $.style.height = "auto";
      },
      onBeforeLeave: ($) => {
        $.style.height = `${$.scrollHeight}px`;
      },
      onLeave: ($) => {
        $.style.height = "0";
      },
      onAfterLeave: () => {
        s.value && (u.value = !1);
      }
    }, m = d(() => [l, {
      [`${l}-active`]: i.value
    }]), g = d(() => [`${l}-header`, `${l}-header-${a == null ? void 0 : a.expandIconPosition}`, {
      [`${l}-header-disabled`]: e.disabled
    }]), C = d(() => [{
      [`${l}-icon-right`]: (a == null ? void 0 : a.expandIconPosition) === "right"
    }]), N = d(() => [`${l}-content`, {
      [`${l}-content-expend`]: i.value
    }]), I = () => f.value === "right" ? v(ve("icon-caret-left"), {
      class: `${l}-expand-icon`
    }, null) : v(ve("icon-caret-right"), {
      class: `${l}-expand-icon`
    }, null), S = () => c.value && v(ve("icon-hover"), {
      prefix: l,
      class: C.value,
      disabled: e.disabled
    }, {
      default: () => {
        var $, E, _, b;
        return [(b = (_ = (E = t["expand-icon"]) != null ? E : ($ = a == null ? void 0 : a.slots) == null ? void 0 : $["expand-icon"]) == null ? void 0 : _({
          active: i.value,
          disabled: e.disabled,
          position: f.value
        })) != null ? b : I()];
      }
    });
    return () => {
      var $, E, _;
      return v("div", {
        class: m.value
      }, [v("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: g.value,
        onClick: p
      }, [S(), v("div", {
        class: `${l}-header-title`
      }, [(E = ($ = t.header) == null ? void 0 : $.call(t)) != null ? E : e.header]), t.extra && v("div", {
        class: `${l}-header-extra`
      }, [(_ = t.extra) == null ? void 0 : _.call(t)])]), v(Tn, ae({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var b;
          return [Vt(v("div", {
            role: "region",
            class: N.value
          }, [u.value && v("div", {
            ref: "contentBoxRef",
            class: `${l}-content-box`
          }, [(b = t.default) == null ? void 0 : b.call(t)])]), [[Dt, i.value]])];
        }
      })]);
    };
  }
});
const Ld = Object.assign(ko, {
  Item: Ct,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + ko.name, ko), e.component(n + Ct.name, Ct);
  }
}), Vd = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Dd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ad = /* @__PURE__ */ M("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), jd = [Ad];
function Fd(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, jd, 14, Dd);
}
var Eo = /* @__PURE__ */ ue(Vd, [["render", Fd]]);
const Md = Object.assign(Eo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Eo.name, Eo);
  }
});
var fa = z({
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
}), Kd = Object.defineProperty, Rd = Object.defineProperties, Hd = Object.getOwnPropertyDescriptors, rr = Object.getOwnPropertySymbols, Wd = Object.prototype.hasOwnProperty, qd = Object.prototype.propertyIsEnumerable, ar = (e, t, n) => t in e ? Kd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Gd = (e, t) => {
  for (var n in t || (t = {}))
    Wd.call(t, n) && ar(e, n, t[n]);
  if (rr)
    for (var n of rr(t))
      qd.call(t, n) && ar(e, n, t[n]);
  return e;
}, Ud = (e, t) => Rd(e, Hd(t));
const ir = ["xxl", "xl", "lg", "md", "sm", "xs"], yn = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let bt = [], Yd = -1, gn = {};
const sr = {
  matchHandlers: {},
  dispatch(e, t) {
    return gn = e, bt.length < 1 ? !1 : (bt.forEach((n) => {
      n.func(gn, t);
    }), !0);
  },
  subscribe(e) {
    bt.length === 0 && this.register();
    const t = (++Yd).toString();
    return bt.push({
      token: t,
      func: e
    }), e(gn, null), t;
  },
  unsubscribe(e) {
    bt = bt.filter((t) => t.token !== e), bt.length === 0 && this.unregister();
  },
  unregister() {
    Object.keys(yn).forEach((e) => {
      const t = yn[e];
      if (!t)
        return;
      const n = this.matchHandlers[t];
      n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener));
    });
  },
  register() {
    Object.keys(yn).forEach((e) => {
      const t = yn[e];
      if (!t)
        return;
      const n = ({
        matches: l
      }) => {
        this.dispatch(Ud(Gd({}, gn), {
          [e]: l
        }), e);
      }, o = window.matchMedia(t);
      o.addEventListener ? o.addEventListener("change", n) : o.addListener(n), this.matchHandlers[t] = {
        mql: o,
        listener: n
      }, n(o);
    });
  }
};
function ur(e) {
  return Te(e);
}
function cr(e, t, n = !1) {
  const o = y({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), l = d(() => {
    let r = t;
    if (ur(e.value))
      for (let i = 0; i < ir.length; i++) {
        const s = ir[i];
        if ((o.value[s] || s === "xs" && n) && e.value[s] !== void 0) {
          r = e.value[s];
          break;
        }
      }
    else
      r = e.value;
    return r;
  });
  let a = "";
  return ze(() => {
    a = sr.subscribe((r) => {
      ur(e.value) && (o.value = r);
    });
  }), wn(() => {
    a && sr.unsubscribe(a);
  }), l;
}
const Zd = Symbol("RowContextInjectionKey"), Xd = z({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const {
      gutter: t,
      align: n,
      justify: o,
      div: l,
      wrap: a
    } = ge(e), r = U("row"), i = d(() => ({
      [`${r}`]: !l.value,
      [`${r}-nowrap`]: !a.value,
      [`${r}-align-${n.value}`]: n.value,
      [`${r}-justify-${o.value}`]: o.value
    })), s = d(() => Array.isArray(t.value) ? t.value[0] : t.value), c = d(() => Array.isArray(t.value) ? t.value[1] : 0), u = cr(s, 0), f = cr(c, 0), p = d(() => {
      const m = {};
      if ((u.value || f.value) && !l.value) {
        const g = -u.value / 2, C = -f.value / 2;
        g && (m.marginLeft = `${g}px`, m.marginRight = `${g}px`), C && (m.marginTop = `${C}px`, m.marginBottom = `${C}px`);
      }
      return m;
    }), h = d(() => [u.value, f.value]);
    return ft(Zd, Oe({
      gutter: h,
      div: l
    })), {
      classNames: i,
      styles: p
    };
  }
});
function Jd(e, t, n, o, l, a) {
  return w(), F("div", {
    class: V(e.classNames),
    style: de(e.styles)
  }, [oe(e.$slots, "default")], 6);
}
var Qd = /* @__PURE__ */ ue(Xd, [["render", Jd]]), ef = Object.defineProperty, dr = Object.getOwnPropertySymbols, tf = Object.prototype.hasOwnProperty, nf = Object.prototype.propertyIsEnumerable, fr = (e, t, n) => t in e ? ef(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, vr = (e, t) => {
  for (var n in t || (t = {}))
    tf.call(t, n) && fr(e, n, t[n]);
  if (dr)
    for (var n of dr(t))
      nf.call(t, n) && fr(e, n, t[n]);
  return e;
};
const of = z({
  name: "Tooltip",
  components: {
    Trigger: ln
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
    const n = U("tooltip"), o = y(e.defaultPopupVisible), l = d(() => {
      var u;
      return (u = e.popupVisible) != null ? u : o.value;
    }), a = (u) => {
      o.value = u, t("update:popupVisible", u), t("popupVisibleChange", u);
    }, r = d(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = d(() => {
      if (e.backgroundColor || e.contentStyle)
        return vr({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), c = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return vr({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: l,
      contentCls: r,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: c,
      handlePopupVisibleChange: a
    };
  }
});
function lf(e, t, n, o, l, a) {
  const r = ve("Trigger");
  return w(), Z(r, {
    class: V(e.prefixCls),
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
    content: Y(() => [oe(e.$slots, "content", {}, () => [He(Fe(e.content), 1)])]),
    default: Y(() => [oe(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Oo = /* @__PURE__ */ ue(of, [["render", lf]]);
const dn = Object.assign(Oo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + Oo.name, Oo);
  }
}), rf = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-drag-dot-vertical`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), af = ["stroke-width", "stroke-linecap", "stroke-linejoin"], sf = /* @__PURE__ */ M("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), uf = /* @__PURE__ */ M("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), cf = [sf, uf];
function df(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, cf, 14, af);
}
var xo = /* @__PURE__ */ ue(rf, [["render", df]]);
const ff = Object.assign(xo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + xo.name, xo);
  }
}), vf = z({
  name: "Popconfirm",
  components: {
    ArcoButton: Dn,
    Trigger: ln,
    IconInfoCircleFill: Ti,
    IconCheckCircleFill: ll,
    IconExclamationCircleFill: Jr,
    IconCloseCircleFill: Qr
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
    const n = U("popconfirm"), {
      t: o
    } = Jo(), l = y(e.defaultPopupVisible), a = d(() => {
      var g;
      return (g = e.popupVisible) != null ? g : l.value;
    }), r = y(!1), i = d(() => e.okLoading || r.value);
    let s = 0;
    const c = () => {
      s++, r.value && (r.value = !1), l.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, u = (g) => {
      g ? (l.value = g, t("update:popupVisible", g), t("popupVisibleChange", g)) : c();
    }, f = async () => {
      const g = s, C = await new Promise(async (N) => {
        var I;
        if (qe(e.onBeforeOk)) {
          let S = e.onBeforeOk(($ = !0) => N($));
          if ((yl(S) || !jt(S)) && (r.value = !0), yl(S))
            try {
              S = (I = await S) != null ? I : !0;
            } catch {
              S = !1;
            }
          jt(S) && N(S);
        } else
          N(!0);
      });
      g === s && (C ? (t("ok"), c()) : r.value && (r.value = !1));
    }, p = () => {
      var g;
      let C = !0;
      qe(e.onBeforeCancel) && (C = (g = e.onBeforeCancel()) != null ? g : !1), C && (t("cancel"), c());
    }, h = d(() => [`${n}-popup-content`, e.contentClass]), m = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: h,
      arrowCls: m,
      computedPopupVisible: a,
      mergedOkLoading: i,
      handlePopupVisibleChange: u,
      handleOk: f,
      handleCancel: p,
      t: o
    };
  }
});
function pf(e, t, n, o, l, a) {
  const r = ve("icon-info-circle-fill"), i = ve("icon-check-circle-fill"), s = ve("icon-exclamation-circle-fill"), c = ve("icon-close-circle-fill"), u = ve("arco-button"), f = ve("trigger");
  return w(), Z(f, {
    class: V(e.prefixCls),
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
    content: Y(() => [M("div", {
      class: V(`${e.prefixCls}-body`)
    }, [M("span", {
      class: V(`${e.prefixCls}-icon`)
    }, [oe(e.$slots, "icon", {}, () => [e.type === "info" ? (w(), Z(r, {
      key: 0
    })) : e.type === "success" ? (w(), Z(i, {
      key: 1
    })) : e.type === "warning" ? (w(), Z(s, {
      key: 2
    })) : e.type === "error" ? (w(), Z(c, {
      key: 3
    })) : he("v-if", !0)])], 2), M("span", {
      class: V(`${e.prefixCls}-content`)
    }, [oe(e.$slots, "content", {}, () => [He(Fe(e.content), 1)])], 2)], 2), M("div", {
      class: V(`${e.prefixCls}-footer`)
    }, [v(u, ae({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: Y(() => [He(Fe(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), v(u, ae({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: Y(() => [He(Fe(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: Y(() => [oe(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var Po = /* @__PURE__ */ ue(vf, [["render", pf]]);
const hf = Object.assign(Po, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + Po.name, Po);
  }
});
var Bo = z({
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
    const n = U("space"), o = d(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), l = d(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${o.value}`]: o.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function a(i) {
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
    const r = (i) => {
      const s = {}, c = `${a(De(e.size) ? e.size[0] : e.size)}px`, u = `${a(De(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: u
      } : {} : (e.direction === "horizontal" && (s.marginRight = c), (e.direction === "vertical" || e.wrap) && (s.marginBottom = u), s);
    };
    return () => {
      var i;
      const s = bn((i = t.default) == null ? void 0 : i.call(t), !0).filter((c) => c.type !== Na);
      return v("div", {
        class: l.value
      }, [s.map((c, u) => {
        var f, p;
        const h = t.split && u > 0;
        return v(Be, {
          key: (f = c.key) != null ? f : `item-${u}`
        }, [h && v("div", {
          class: `${n}-item-split`,
          style: r(!1)
        }, [(p = t.split) == null ? void 0 : p.call(t)]), v("div", {
          class: `${n}-item`,
          style: r(u === s.length - 1)
        }, [c])]);
      })]);
    };
  }
});
const mf = Object.assign(Bo, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + Bo.name, Bo);
  }
}), yf = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-caret-down`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), gf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bf = /* @__PURE__ */ M("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), _f = [bf];
function $f(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, _f, 14, gf);
}
var Io = /* @__PURE__ */ ue(yf, [["render", $f]]);
const Cf = Object.assign(Io, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Io.name, Io);
  }
}), kf = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, cl = Symbol("ArcoTabs"), wf = z({
  name: "TabsTab",
  components: {
    IconHover: Je,
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
    const n = U("tabs-tab"), o = Ge(cl, {}), l = (c) => {
      e.tab.disabled || t("click", e.tab.key, c);
    }, a = (c) => {
      c.key === "Enter" && l(c);
    }, r = d(() => Object.assign(o.trigger === "click" ? {
      onClick: l
    } : {
      onMouseover: l
    }, {
      onKeydown: a
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
      eventHandlers: r,
      handleDelete: i
    };
  }
});
function Sf(e, t, n, o, l, a) {
  const r = ve("icon-close"), i = ve("icon-hover");
  return w(), F("div", ae({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [M("span", {
    class: V(`${e.prefixCls}-title`)
  }, [oe(e.$slots, "default")], 2), e.editable && e.tab.closable ? (w(), Z(i, {
    key: 0,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: lt(e.handleDelete, ["stop"])
  }, {
    default: Y(() => [v(r)]),
    _: 1
  }, 8, ["class", "onClick"])) : he("v-if", !0)], 16);
}
var Ef = /* @__PURE__ */ ue(wf, [["render", Sf]]);
function Of(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Zo(e);
}
var pr = z({
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
    const n = U("tabs-nav-button"), o = (r) => {
      e.disabled || t("click", e.type, r);
    }, l = () => e.direction === "horizontal" ? e.type === "next" ? v(Lc, null, null) : v(vd, null, null) : e.type === "next" ? v(ca, null, null) : v(bd, null, null), a = d(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let r;
      return v("div", {
        class: a.value,
        onClick: o
      }, [v(Je, {
        disabled: e.disabled
      }, Of(r = l()) ? r : {
        default: () => [r]
      })]);
    };
  }
});
const xf = z({
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
    } = ge(e), n = U("tabs-nav-ink"), o = y(0), l = y(0), a = d(() => e.direction === "vertical" ? {
      top: `${o.value}px`,
      height: `${l.value}px`
    } : {
      left: `${o.value}px`,
      width: `${l.value}px`
    }), r = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, c = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== o.value || c !== l.value) && (o.value = s, l.value = c);
      }
    };
    ze(() => {
      We(() => r());
    }), st(() => {
      r();
    });
    const i = d(() => [n, {
      [`${n}-animation`]: e.animation,
      [`${n}-disabled`]: e.disabled
    }]);
    return {
      prefixCls: n,
      cls: i,
      style: a
    };
  }
});
function Pf(e, t, n, o, l, a) {
  return w(), F("div", {
    class: V(e.cls),
    style: de(e.style)
  }, null, 6);
}
var Bf = /* @__PURE__ */ ue(xf, [["render", Pf]]), If = z({
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
      tabs: o,
      activeKey: l,
      activeIndex: a,
      direction: r
    } = ge(e), i = U("tabs-nav"), s = y(), c = y(), u = y({}), f = d(() => {
      if (!je(l.value))
        return u.value[l.value];
    }), p = y(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), m = y(!1), g = y(0), C = y(0), N = y([]), I = y(0), S = () => {
      var te, ie, Se;
      return (Se = r.value === "vertical" ? (te = s.value) == null ? void 0 : te.offsetHeight : (ie = s.value) == null ? void 0 : ie.offsetWidth) != null ? Se : 0;
    }, $ = () => !c.value || !s.value ? 0 : r.value === "vertical" ? c.value.offsetHeight - s.value.offsetHeight : c.value.offsetWidth - s.value.offsetWidth, E = () => o.value.map((te) => {
      const ie = u.value[te.key];
      return r.value === "vertical" ? ie.offsetTop + ie.offsetHeight : ie.offsetLeft + ie.offsetWidth;
    }), _ = () => {
      m.value = b(), m.value ? (g.value = S(), C.value = $(), N.value = E(), I.value > C.value && (I.value = C.value)) : I.value = 0;
    }, b = () => s.value && c.value ? e.direction === "vertical" ? c.value.offsetHeight > s.value.offsetHeight : c.value.offsetWidth > s.value.offsetWidth : !1, D = (te) => {
      var ie;
      return ((ie = N.value[te - 1]) != null ? ie : 0) >= I.value && N.value[te] <= I.value + g.value;
    }, A = (te) => s.value ? te === "previous" ? I.value - g.value : I.value + g.value : 0, L = (te) => !s.value || !c.value || te < 0 ? 0 : te > C.value ? C.value : te, O = (te, ie) => {
      t("click", te, ie);
    }, K = (te, ie) => {
      t("delete", te, ie);
    }, R = (te) => {
      I.value = L(A(te));
    }, J = () => {
      _(), p.value && p.value.$forceUpdate();
    };
    pe(o, () => {
      We(() => {
        _();
      });
    }), pe(a, (te, ie) => {
      We(() => {
        var Se;
        if (m.value)
          if (te >= ie) {
            const be = te < N.value.length - 1 ? te + 1 : te;
            D(be) || (I.value = N.value[be] - g.value);
          } else {
            const be = te > 0 ? te - 1 : te;
            D(be) || (I.value = (Se = N.value[be - 1]) != null ? Se : 0);
          }
      });
    }), ze(() => {
      _();
    });
    const ee = () => !h.value || !e.showAddButton ? null : v("div", {
      class: `${i}-add-btn`,
      onClick: (te) => t("add", te)
    }, [v(Je, null, {
      default: () => [v(Md, null, null)]
    })]), le = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), x = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), q = d(() => kf({
      direction: e.direction,
      type: e.type,
      offset: I.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: m.value
    }]);
    return () => {
      var te;
      return v("div", {
        class: le.value
      }, [m.value && v(pr, {
        type: "previous",
        direction: e.direction,
        disabled: I.value <= 0,
        onClick: R
      }, null), v(on, {
        onResize: () => _()
      }, {
        default: () => [v("div", {
          class: me.value,
          ref: s
        }, [v(on, {
          onResize: J
        }, {
          default: () => [v("div", {
            ref: c,
            class: x.value,
            style: q.value
          }, [e.tabs.map((ie, Se) => v(Ef, {
            key: ie.key,
            ref: (be) => {
              be != null && be.$el && (u.value[ie.key] = be.$el);
            },
            active: ie.key === l.value,
            tab: ie,
            editable: e.editable,
            onClick: O,
            onDelete: K
          }, {
            default: () => {
              var be, ye, se;
              return [(se = (ye = (be = ie.slots).title) == null ? void 0 : ye.call(be)) != null ? se : ie.title];
            }
          })), e.type === "line" && f.value && v(Bf, {
            ref: p,
            activeTabRef: f.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !m.value && ee()])]
      }), m.value && v(pr, {
        type: "next",
        direction: e.direction,
        disabled: I.value >= C.value,
        onClick: R
      }, null), v("div", {
        class: `${i}-extra`
      }, [m.value && ee(), (te = n.extra) == null ? void 0 : te.call(n)])]);
    };
  }
}), To = z({
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
      size: o,
      lazyLoad: l,
      destroyOnHide: a,
      trigger: r
    } = ge(e), i = U("tabs"), {
      mergedSize: s
    } = pt(o), c = d(() => e.direction === "vertical" ? "left" : e.position), u = d(() => ["left", "right"].includes(c.value) ? "vertical" : "horizontal"), {
      children: f,
      components: p
    } = _d("TabPane"), h = Oe(/* @__PURE__ */ new Map()), m = d(() => {
      const O = [];
      return p.value.forEach((K) => {
        const R = h.get(K);
        R && O.push(R);
      }), O;
    }), g = d(() => m.value.map((O) => O.key)), C = (O, K) => {
      h.set(O, K);
    }, N = (O) => {
      h.delete(O);
    }, I = y(e.defaultActiveKey), S = d(() => {
      var O;
      const K = (O = e.activeKey) != null ? O : I.value;
      return je(K) ? g.value[0] : K;
    }), $ = d(() => {
      const O = g.value.indexOf(S.value);
      return O === -1 ? 0 : O;
    });
    ft(cl, Oe({
      lazyLoad: l,
      destroyOnHide: a,
      activeKey: S,
      addItem: C,
      removeItem: N,
      trigger: r
    }));
    const E = (O) => {
      O !== S.value && (I.value = O, t("update:activeKey", O), t("change", O));
    }, _ = (O, K) => {
      E(O), t("tabClick", O, K);
    }, b = (O) => {
      t("add", O), e.autoSwitch && We(() => {
        const K = g.value[g.value.length - 1];
        E(K);
      });
    }, D = (O, K) => {
      t("delete", O, K);
    }, A = () => v("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [v("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${$.value * 100}%`
      }
    }, [f.value])]), L = d(() => [i, `${i}-${u.value}`, `${i}-${c.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return f.value = (O = n.default) == null ? void 0 : O.call(n), v("div", {
        class: L.value
      }, [c.value === "bottom" && A(), v(If, {
        tabs: m.value,
        activeKey: S.value,
        activeIndex: $.value,
        direction: u.value,
        position: c.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: _,
        onAdd: b,
        onDelete: D
      }, {
        extra: n.extra
      }), c.value !== "bottom" && A()]);
    };
  }
}), Tf = Object.defineProperty, hr = Object.getOwnPropertySymbols, zf = Object.prototype.hasOwnProperty, Nf = Object.prototype.propertyIsEnumerable, mr = (e, t, n) => t in e ? Tf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Lf = (e, t) => {
  for (var n in t || (t = {}))
    zf.call(t, n) && mr(e, n, t[n]);
  if (hr)
    for (var n of hr(t))
      Nf.call(t, n) && mr(e, n, t[n]);
  return e;
};
const Vf = z({
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
      title: o,
      disabled: l,
      closable: a
    } = ge(e), r = dt(), i = U("tabs"), s = Ge(cl, {}), c = y(), u = d(() => r == null ? void 0 : r.vnode.key), f = d(() => u.value === s.activeKey), p = y(s.lazyLoad ? f.value : !0), h = Oe({
      key: u,
      title: o,
      disabled: l,
      closable: a,
      slots: t
    });
    return r != null && r.uid && ((n = s.addItem) == null || n.call(s, r.uid, h)), Rt(() => {
      var m;
      r != null && r.uid && ((m = s.removeItem) == null || m.call(s, r.uid));
    }), pe(f, (m) => {
      m ? p.value || (p.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (p.value = !1);
    }), st(() => {
      h.slots = Lf({}, t);
    }), {
      prefixCls: i,
      active: f,
      itemRef: c,
      mounted: p
    };
  }
});
function Df(e, t, n, o, l, a) {
  return w(), F("div", {
    ref: "itemRef",
    class: V([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (w(), F("div", {
    key: 0,
    class: V(`${e.prefixCls}-pane`)
  }, [oe(e.$slots, "default")], 2)) : he("v-if", !0)], 2);
}
var kn = /* @__PURE__ */ ue(Vf, [["render", Df]]);
const Af = Object.assign(To, {
  TabPane: kn,
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + To.name, To), e.component(n + kn.name, kn);
  }
}), va = Symbol("TreeInjectionKey");
function jf(e) {
  const t = [];
  function n(o) {
    o && o.forEach((l) => {
      t.push(l), n(l.children);
    });
  }
  return n(e), t;
}
function Ff(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function yr(e) {
  return e.selectable && !e.disabled;
}
function gr(e) {
  return !e.isLeaf && e.children;
}
function Mf(e) {
  return jt(e.isLeaf) ? e.isLeaf : !e.children;
}
function Wo(e) {
  return Set.prototype.add.bind(e);
}
function qo(e) {
  return Set.prototype.delete.bind(e);
}
function Lt(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function dl(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((o) => {
    Lt(o) && n.push(o.key, ...dl(o));
  }), n;
}
function pa(e) {
  var t;
  const {
    node: n,
    checkedKeySet: o,
    indeterminateKeySet: l
  } = e;
  let a = n.parent;
  for (; a; ) {
    if (Lt(a)) {
      const r = a.key, i = ((t = a.children) == null ? void 0 : t.filter(Lt)) || [];
      let s = 0;
      const c = i.length;
      i.some(({
        key: u
      }) => {
        if (o.has(u))
          s += 1;
        else if (l.has(u))
          return s += 0.5, !0;
        return !1;
      }), s && s !== c ? l.add(r) : l.delete(r), s && s === c ? o.add(r) : o.delete(r);
    }
    a = a.parent;
  }
}
function br(e) {
  const {
    node: t,
    checked: n,
    checkedKeys: o,
    indeterminateKeys: l,
    checkStrictly: a = !1
  } = e, {
    key: r
  } = t, i = new Set(o), s = new Set(l);
  if (n ? i.add(r) : i.delete(r), s.delete(r), !a) {
    const c = dl(t);
    n ? c.forEach(Wo(i)) : c.forEach(qo(i)), c.forEach(qo(s)), pa({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function Kf(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: o,
    onlyCheckLeaf: l
  } = e, a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return o ? t.forEach(Wo(a)) : t.forEach((s) => {
    var c;
    const u = n.get(s);
    if (!u || r.has(s) || l && ((c = u.children) != null && c.length))
      return;
    const f = dl(u);
    f.forEach(Wo(r)), f.forEach(qo(i)), a.add(s), i.delete(s), pa({
      node: u,
      checkedKeySet: a,
      indeterminateKeySet: i
    });
  }), [[...a, ...r], [...i]];
}
function Fn() {
  return Ge(va) || {};
}
const Rf = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-file`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Hf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wf = /* @__PURE__ */ M("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), qf = [Wf];
function Gf(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, qf, 14, Hf);
}
var zo = /* @__PURE__ */ ue(Rf, [["render", Gf]]);
const Uf = Object.assign(zo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + zo.name, zo);
  }
});
var Yf = z({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: ct,
    RenderFunction: fa
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
      icons: o,
      nodeStatus: l,
      treeNodeData: a
    } = ge(e), r = Fn(), i = at(t, "switcher-icon"), s = at(t, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var c, u, f;
        const p = (u = (c = o == null ? void 0 : o.value) == null ? void 0 : c.switcherIcon) != null ? u : i.value;
        return p ? p(l.value) : (f = r.switcherIcon) == null ? void 0 : f.call(r, a.value, l.value);
      },
      getLoadingIcon: () => {
        var c, u, f;
        const p = (u = (c = o == null ? void 0 : o.value) == null ? void 0 : c.loadingIcon) != null ? u : s.value;
        return p ? p(l.value) : (f = r.loadingIcon) == null ? void 0 : f.call(r, a.value, l.value);
      },
      onClick(c) {
        n("click", c);
      }
    };
  },
  render() {
    var e, t, n;
    const {
      prefixCls: o,
      getSwitcherIcon: l,
      getLoadingIcon: a,
      onClick: r,
      nodeStatus: i = {},
      loading: s,
      showLine: c
    } = this, {
      expanded: u,
      isLeaf: f
    } = i;
    if (s)
      return (e = a()) != null ? e : Pt(ct);
    let p = null, h = !1;
    if (f)
      c && (p = (n = l()) != null ? n : Pt(Uf));
    else {
      const g = c ? Pt("span", {
        class: `${o}-${u ? "minus" : "plus"}-icon`
      }) : Pt(Cf);
      p = (t = l()) != null ? t : g, h = !c;
    }
    if (!p)
      return null;
    const m = Pt("span", {
      class: `${o}-switcher-icon`,
      onClick: r
    }, p);
    return h ? Pt(Je, {
      class: `${o}-icon-hover`
    }, () => m) : m;
  }
}), Zf = Object.defineProperty, Xf = Object.defineProperties, Jf = Object.getOwnPropertyDescriptors, _r = Object.getOwnPropertySymbols, Qf = Object.prototype.hasOwnProperty, ev = Object.prototype.propertyIsEnumerable, $r = (e, t, n) => t in e ? Zf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Go = (e, t) => {
  for (var n in t || (t = {}))
    Qf.call(t, n) && $r(e, n, t[n]);
  if (_r)
    for (var n of _r(t))
      ev.call(t, n) && $r(e, n, t[n]);
  return e;
}, Cr = (e, t) => Xf(e, Jf(t));
const ha = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function tv(e, t) {
  return !!(je(e) ? t : e);
}
function nv(e, t) {
  const n = Go({}, e);
  return t && Object.keys(t).forEach((l) => {
    const a = t[l];
    a !== l && (n[l] = e[a], delete n[a]);
  }), n;
}
function kr({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: o,
  level: l
}) {
  return je(e) ? qe(t) ? t(o, {
    isLeaf: n,
    level: l
  }) : t ?? !1 : e;
}
function ov(e) {
  var t, n;
  const {
    treeNodeData: o,
    parentNode: l,
    isTail: a = !0,
    treeProps: r
  } = e, {
    fieldNames: i
  } = r || {}, s = nv(o, i), c = r.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), u = l ? l.level + 1 : 0, f = Cr(Go({}, Ht(s, ["children"])), {
    key: (n = s.key) != null ? n : ha(),
    selectable: kr({
      subEnable: s.selectable,
      superEnable: r == null ? void 0 : r.selectable,
      isLeaf: c,
      level: u,
      treeNodeData: o
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: kr({
      subEnable: s.checkable,
      superEnable: r == null ? void 0 : r.checkable,
      isLeaf: c,
      level: u,
      treeNodeData: o
    }),
    isLeaf: c,
    isTail: a,
    blockNode: !!(r != null && r.blockNode),
    showLine: !!(r != null && r.showLine),
    level: u,
    lineless: l ? [...l.lineless, l.isTail] : [],
    draggable: tv(s.draggable, r == null ? void 0 : r.draggable)
  });
  return Cr(Go({}, f), {
    treeNodeProps: f,
    treeNodeData: o,
    parent: l,
    parentKey: l == null ? void 0 : l.key,
    pathParentKeys: l ? [...l.pathParentKeys, l.key] : []
  });
}
function lv(e, t) {
  function n(o, l) {
    if (!o)
      return;
    const {
      fieldNames: a
    } = t, r = [];
    return o.forEach((i, s) => {
      const c = ov({
        treeNodeData: i,
        treeProps: t,
        parentNode: l,
        isTail: s === o.length - 1
      });
      c.children = n(i[(a == null ? void 0 : a.children) || "children"], c), r.push(c);
    }), r;
  }
  return n(e);
}
function ma() {
  const e = dt(), t = () => {
    var o;
    return (o = e == null ? void 0 : e.vnode.key) != null ? o : ha();
  }, n = y(t());
  return st(() => {
    n.value = t();
  }), n;
}
function rv(e) {
  const {
    key: t,
    refTitle: n
  } = ge(e), o = Fn(), l = y(!1), a = y(!1), r = y(!1), i = y(0), s = Mo((c) => {
    if (!n.value)
      return;
    const u = n.value.getBoundingClientRect(), f = window.pageYOffset + u.top, {
      pageY: p
    } = c, h = u.height / 4, m = p - f;
    i.value = m < h ? -1 : m < u.height - h ? 0 : 1, r.value = o.allowDrop ? o.allowDrop(t.value, i.value) : !0;
  });
  return {
    isDragOver: l,
    isDragging: a,
    isAllowDrop: r,
    dropPosition: i,
    setDragStatus(c, u) {
      switch (c) {
        case "dragStart":
          a.value = !0, i.value = 0, o.onDragStart && o.onDragStart(t.value, u);
          break;
        case "dragEnd":
          a.value = !1, l.value = !1, i.value = 0, s.cancel(), o.onDragEnd && o.onDragEnd(t.value, u);
          break;
        case "dragOver":
          l.value = !0, s(u), o.onDragOver && o.onDragOver(t.value, u);
          break;
        case "dragLeave":
          l.value = !1, i.value = 0, s.cancel(), o.onDragLeave && o.onDragLeave(t.value, u);
          break;
        case "drop":
          o.onDrop && o.onDrop(t.value, i.value, u), l.value = !1, i.value = 0, s.cancel();
          break;
      }
    }
  };
}
function av(e) {
  return De(e) ? e : [e];
}
const iv = z({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: Yf,
    Checkbox: ra,
    RenderFunction: fa,
    IconDragDotVertical: ff
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
    const t = ma(), n = U("tree-node"), o = Fn(), l = d(() => {
      var x;
      return (x = o.key2TreeNode) == null ? void 0 : x.get(t.value);
    }), a = d(() => l.value.treeNodeData), r = d(() => l.value.children), i = d(() => {
      var x;
      const q = (x = o.treeProps) == null ? void 0 : x.actionOnNodeClick;
      return q ? av(q) : [];
    }), {
      isLeaf: s,
      isTail: c,
      selectable: u,
      disabled: f,
      disableCheckbox: p,
      draggable: h
    } = ge(e), m = d(() => {
      var x;
      return [`${n}`, {
        [`${n}-selected`]: D.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: c.value,
        [`${n}-expanded`]: A.value,
        [`${n}-disabled-selectable`]: !u.value && !((x = o.treeProps) != null && x.disableSelectActionOnly),
        [`${n}-disabled`]: f.value
      }];
    }), g = y(), {
      isDragOver: C,
      isDragging: N,
      isAllowDrop: I,
      dropPosition: S,
      setDragStatus: $
    } = rv(Oe({
      key: t,
      refTitle: g
    })), E = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: C.value && I.value && S.value < 0,
      [`${n}-title-gap-bottom`]: C.value && I.value && S.value > 0,
      [`${n}-title-highlight`]: !N.value && C.value && I.value && S.value === 0,
      [`${n}-title-dragging`]: N.value,
      [`${n}-title-block`]: l.value.blockNode
    }]), _ = d(() => {
      var x, q;
      return (q = (x = o.checkedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), b = d(() => {
      var x, q;
      return (q = (x = o.indeterminateKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), D = d(() => {
      var x, q;
      return (q = (x = o.selectedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), A = d(() => {
      var x, q;
      return (q = (x = o.expandedKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), L = d(() => {
      var x, q;
      return (q = (x = o.loadingKeys) == null ? void 0 : x.includes) == null ? void 0 : q.call(x, t.value);
    }), O = d(() => o.dragIcon), K = d(() => o.nodeIcon);
    function R(x) {
      var q, me;
      s.value || (!((q = r.value) != null && q.length) && qe(o.onLoadMore) ? o.onLoadMore(t.value) : (me = o == null ? void 0 : o.onExpand) == null || me.call(o, !A.value, t.value, x));
    }
    const J = Oe({
      loading: L,
      checked: _,
      selected: D,
      indeterminate: b,
      expanded: A,
      isLeaf: s
    }), ee = d(() => o.nodeTitle ? () => {
      var x;
      return (x = o.nodeTitle) == null ? void 0 : x.call(o, a.value, J);
    } : void 0), le = d(() => o.nodeExtra ? () => {
      var x;
      return (x = o.nodeExtra) == null ? void 0 : x.call(o, a.value, J);
    } : void 0);
    return {
      nodekey: t,
      refTitle: g,
      prefixCls: n,
      classNames: m,
      titleClassNames: E,
      indeterminate: b,
      checked: _,
      expanded: A,
      selected: D,
      treeTitle: ee,
      treeNodeData: a,
      loading: L,
      treeDragIcon: O,
      treeNodeIcon: K,
      extra: le,
      nodeStatus: J,
      onCheckboxChange(x, q) {
        var me;
        p.value || f.value || (me = o.onCheck) == null || me.call(o, x, t.value, q);
      },
      onTitleClick(x) {
        var q;
        i.value.includes("expand") && R(x), !(!u.value || f.value) && ((q = o.onSelect) == null || q.call(o, t.value, x));
      },
      onSwitcherClick: R,
      onDragStart(x) {
        var q;
        if (h.value) {
          x.stopPropagation(), $("dragStart", x);
          try {
            (q = x.dataTransfer) == null || q.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(x) {
        h.value && (x.stopPropagation(), $("dragEnd", x));
      },
      onDragOver(x) {
        h && (x.stopPropagation(), x.preventDefault(), $("dragOver", x));
      },
      onDragLeave(x) {
        h.value && (x.stopPropagation(), $("dragLeave", x));
      },
      onDrop(x) {
        !h.value || !I.value || (x.stopPropagation(), x.preventDefault(), $("drop", x));
      }
    };
  }
}), sv = ["data-level", "data-key"], uv = ["draggable"];
function cv(e, t, n, o, l, a) {
  const r = ve("NodeSwitcher"), i = ve("Checkbox"), s = ve("RenderFunction"), c = ve("IconDragDotVertical");
  return w(), F("div", {
    class: V(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [he(" 缩进 "), M("span", {
    class: V(`${e.prefixCls}-indent`)
  }, [(w(!0), F(Be, null, At(e.level, (u) => (w(), F("span", {
    key: u,
    class: V([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[u - 1]
    }])
  }, null, 2))), 128))], 2), he(" switcher "), M("span", {
    class: V([`${e.prefixCls}-switcher`, {
      [`${e.prefixCls}-switcher-expanded`]: e.expanded
    }])
  }, [v(r, {
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
  }, Lr({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: Y(() => [he(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), oe(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: Y(() => [he(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), oe(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), he(" checkbox "), e.checkable ? (w(), Z(i, {
    key: 0,
    disabled: e.disableCheckbox || e.disabled,
    "model-value": e.checked,
    indeterminate: e.indeterminate,
    "uninject-group-context": "",
    onChange: e.onCheckboxChange
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : he("v-if", !0), he(" 内容 "), M("span", {
    ref: "refTitle",
    class: V(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...u) => e.onDragStart && e.onDragStart(...u)),
    onDragend: t[1] || (t[1] = (...u) => e.onDragEnd && e.onDragEnd(...u)),
    onDragover: t[2] || (t[2] = (...u) => e.onDragOver && e.onDragOver(...u)),
    onDragleave: t[3] || (t[3] = (...u) => e.onDragLeave && e.onDragLeave(...u)),
    onDrop: t[4] || (t[4] = (...u) => e.onDrop && e.onDrop(...u)),
    onClick: t[5] || (t[5] = (...u) => e.onTitleClick && e.onTitleClick(...u))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? (w(), F("span", {
    key: 0,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [he(" 节点图标 "), e.$slots.icon ? oe(e.$slots, "icon", Ao(ae({
    key: 0
  }, e.nodeStatus))) : e.icon ? (w(), Z(s, ae({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? (w(), Z(s, ae({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : he("v-if", !0)], 2)) : he("v-if", !0), M("span", {
    class: V(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? (w(), Z(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : (w(), F(Be, {
    key: 1
  }, [he(" 标题，treeTitle 优先级高于节点的 title "), oe(e.$slots, "title", {
    title: e.title
  }, () => [He(Fe(e.title), 1)])], 2112)), e.draggable ? (w(), F("span", {
    key: 2,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [he(" 拖拽图标 "), e.$slots["drag-icon"] ? oe(e.$slots, "drag-icon", Ao(ae({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? (w(), Z(s, ae({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? (w(), Z(s, ae({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : (w(), Z(c, {
    key: 3
  }))], 2)) : he("v-if", !0)], 2)], 42, uv), he(" 额外 "), e.extra ? (w(), Z(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : he("v-if", !0)], 10, sv);
}
var Uo = /* @__PURE__ */ ue(iv, [["render", cv]]);
const dv = z({
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
        const o = `${n.scrollHeight}px`;
        n.style.height = e.expanded ? "0" : o, n.offsetHeight, n.style.height = e.expanded ? o : "0";
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
function fv(e, t, n, o, l, a) {
  return w(), Z(Tn, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: Y(() => [oe(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var vv = /* @__PURE__ */ ue(dv, [["render", fv]]);
const pv = z({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: vv,
    BaseTreeNode: Uo
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${U("tree")}-node-list`], o = Fn(), {
      nodeKey: l
    } = ge(e), a = d(() => {
      var s, c;
      return (c = (s = o.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : c.call(s, l.value);
    }), r = d(() => {
      var s;
      const c = new Set(o.expandedKeys || []), u = (s = o.flattenTreeData) == null ? void 0 : s.filter((f) => {
        var p, h;
        return (p = f.pathParentKeys) != null && p.includes(l.value) ? !o.filterTreeNode || ((h = o.filterTreeNode) == null ? void 0 : h.call(o, f.treeNodeData)) : !1;
      });
      return u == null ? void 0 : u.filter((f) => {
        var p;
        if (a.value)
          return (p = f.pathParentKeys) == null ? void 0 : p.every((m) => c.has(m));
        const h = f.pathParentKeys.indexOf(l.value);
        return f.pathParentKeys.slice(h + 1).every((m) => c.has(m));
      });
    }), i = d(() => {
      var s, c;
      return ((s = o.currentExpandKeys) == null ? void 0 : s.includes(l.value)) && ((c = r.value) == null ? void 0 : c.length);
    });
    return {
      classNames: n,
      visibleNodeList: r,
      show: i,
      expanded: a,
      onTransitionEnd() {
        var s;
        (s = o.onExpandEnd) == null || s.call(o, l.value);
      }
    };
  }
});
function hv(e, t, n, o, l, a) {
  const r = ve("BaseTreeNode"), i = ve("ExpandTransition");
  return w(), Z(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: Y(() => [e.show ? (w(), F("div", {
      key: 0,
      class: V(e.classNames)
    }, [(w(!0), F(Be, null, At(e.visibleNodeList, (s) => (w(), Z(r, ae({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : he("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var mv = /* @__PURE__ */ ue(pv, [["render", hv]]), yv = Object.defineProperty, wr = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, Sr = (e, t, n) => t in e ? yv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, _v = (e, t) => {
  for (var n in t || (t = {}))
    gv.call(t, n) && Sr(e, n, t[n]);
  if (wr)
    for (var n of wr(t))
      bv.call(t, n) && Sr(e, n, t[n]);
  return e;
}, $v = z({
  name: "TreeNode",
  inheritAttrs: !1,
  props: _v({}, Uo.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = ma();
    return () => v(Be, null, [v(Uo, ae(e, n, {
      key: o.value
    }), t), v(mv, {
      key: o.value,
      nodeKey: o.value
    }, null)]);
  }
});
function Cv(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: o,
    checkStrictly: l,
    halfCheckedKeys: a,
    onlyCheckLeaf: r
  } = ge(e), i = y(!1), s = y([]), c = y([]), u = y(), f = y(), p = (m) => Kf({
    initCheckedKeys: m,
    key2TreeNode: o.value,
    checkStrictly: l.value,
    onlyCheckLeaf: r.value
  }), h = (m) => {
    const g = p(m);
    [s.value, c.value] = g;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), zn(() => {
    n.value ? [u.value, f.value] = p(n.value) : i.value && (u.value = void 0, f.value = void 0, s.value = [], c.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => u.value || s.value),
    indeterminateKeys: d(() => l.value && a.value ? a.value : f.value || c.value),
    setCheckedState(m, g, C = !1) {
      return C ? h(m) : (s.value = m, c.value = g), [s.value, c.value];
    }
  };
}
function kv(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: o,
    showLine: l,
    blockNode: a,
    checkable: r,
    loadMore: i,
    draggable: s
  } = ge(e), c = y([]);
  zn(() => {
    var p, h;
    c.value = lv(t.value || [], {
      selectable: (p = o == null ? void 0 : o.value) != null ? p : !1,
      showLine: !!(l != null && l.value),
      blockNode: !!(a != null && a.value),
      checkable: (h = r == null ? void 0 : r.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const u = d(() => jf(c.value)), f = d(() => Ff(u.value));
  return {
    treeData: c,
    flattenTreeData: u,
    key2TreeNode: f
  };
}
const wv = z({
  name: "Tree",
  components: {
    VirtualList: ua,
    TreeNode: $v
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
      data: o,
      showLine: l,
      multiple: a,
      loadMore: r,
      checkStrictly: i,
      checkedKeys: s,
      defaultCheckedKeys: c,
      selectedKeys: u,
      defaultSelectedKeys: f,
      expandedKeys: p,
      defaultExpandedKeys: h,
      checkedStrategy: m,
      selectable: g,
      checkable: C,
      blockNode: N,
      fieldNames: I,
      size: S,
      defaultExpandAll: $,
      filterTreeNode: E,
      draggable: _,
      allowDrop: b,
      defaultExpandSelected: D,
      defaultExpandChecked: A,
      autoExpandParent: L,
      halfCheckedKeys: O,
      onlyCheckLeaf: K,
      animation: R
    } = ge(e), J = U("tree"), ee = d(() => [`${J}`, {
      [`${J}-checkable`]: C.value,
      [`${J}-show-line`]: l.value
    }, `${J}-size-${S.value}`]), le = at(n, "switcher-icon"), x = at(n, "loading-icon"), q = at(n, "drag-icon"), me = at(n, "icon"), te = at(n, "title"), ie = at(n, "extra"), {
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ye
    } = kv(Oe({
      treeData: o,
      selectable: g,
      showLine: l,
      blockNode: N,
      checkable: C,
      fieldNames: I,
      loadMore: r,
      draggable: _
    })), {
      checkedKeys: se,
      indeterminateKeys: Ce,
      setCheckedState: Qe
    } = Cv(Oe({
      defaultCheckedKeys: c,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ye,
      halfCheckedKeys: O,
      onlyCheckLeaf: K
    })), [Pe, Ve] = Pn((f == null ? void 0 : f.value) || [], Oe({
      value: u
    })), Ae = y([]), Ne = y();
    function Ye() {
      if (h != null && h.value) {
        const j = /* @__PURE__ */ new Set([]);
        return h.value.forEach((G) => {
          if (j.has(G))
            return;
          const X = ye.value.get(G);
          X && [...L.value ? X.pathParentKeys : [], G].forEach((re) => j.add(re));
        }), [...j];
      }
      if ($.value)
        return be.value.filter((j) => j.children && j.children.length).map((j) => j.key);
      if (D.value || A.value) {
        const j = /* @__PURE__ */ new Set([]), G = (X) => {
          X.forEach((re) => {
            const fe = ye.value.get(re);
            fe && (fe.pathParentKeys || []).forEach((_e) => j.add(_e));
          });
        };
        return D.value && G(Pe.value), A.value && G(se.value), [...j];
      }
      return [];
    }
    const [W, P] = Pn(Ye(), Oe({
      value: p
    })), H = y([]), ce = d(() => {
      const j = new Set(W.value), G = new Set(H.value);
      return be.value.filter((X) => {
        var re;
        if (!(!E || !E.value || (E == null ? void 0 : E.value(X.treeNodeData))))
          return !1;
        const _e = je(X.parentKey), gt = (re = X.pathParentKeys) == null ? void 0 : re.every((xt) => j.has(xt) && !G.has(xt));
        return _e || gt;
      });
    });
    function ke(j, G = m.value) {
      let X = [...j];
      return G === "parent" ? X = j.filter((re) => {
        const fe = ye.value.get(re);
        return fe && !(!je(fe.parentKey) && j.includes(fe.parentKey));
      }) : G === "child" && (X = j.filter((re) => {
        var fe, _e;
        return !((_e = (fe = ye.value.get(re)) == null ? void 0 : fe.children) != null && _e.length);
      })), X;
    }
    function Ee(j) {
      return j.map((G) => {
        var X;
        return ((X = ye.value.get(G)) == null ? void 0 : X.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Xe(j) {
      const {
        targetKey: G,
        targetChecked: X,
        newCheckedKeys: re,
        newIndeterminateKeys: fe,
        event: _e
      } = j, gt = G ? ye.value.get(G) : void 0, xt = ke(re);
      t("update:checkedKeys", xt), t("update:halfCheckedKeys", fe), t("check", xt, {
        checked: X,
        node: gt == null ? void 0 : gt.treeNodeData,
        checkedNodes: Ee(xt),
        halfCheckedKeys: fe,
        halfCheckedNodes: Ee(fe),
        e: _e
      });
    }
    function Ie(j) {
      const {
        targetKey: G,
        targetSelected: X,
        newSelectedKeys: re,
        event: fe
      } = j, _e = G ? ye.value.get(G) : void 0;
      t("update:selectedKeys", re), t("select", re, {
        selected: X,
        node: _e == null ? void 0 : _e.treeNodeData,
        selectedNodes: Ee(re),
        e: fe
      });
    }
    function mt(j) {
      const {
        targetKey: G,
        targetExpanded: X,
        newExpandedKeys: re,
        event: fe
      } = j, _e = G ? ye.value.get(G) : void 0;
      t("expand", re, {
        expanded: X,
        node: _e == null ? void 0 : _e.treeNodeData,
        expandedNodes: Ee(re),
        e: fe
      }), t("update:expandedKeys", re);
    }
    function Gt(j) {
      const [G, X] = Qe(j, [], !0);
      Xe({
        newCheckedKeys: G,
        newIndeterminateKeys: X
      });
    }
    function yt(j) {
      let G = j;
      !a.value && j.length > 1 && (G = [j[0]]), Ve(G), Ie({
        newSelectedKeys: G
      });
    }
    function nt(j) {
      H.value = [], P(j), mt({
        newExpandedKeys: j
      });
    }
    function Ot(j, G, X) {
      if (!j.length)
        return;
      let re = [...se.value], fe = [...Ce.value];
      j.forEach((_e) => {
        const gt = ye.value.get(_e);
        gt && ([re, fe] = br({
          node: gt,
          checked: G,
          checkedKeys: [...re],
          indeterminateKeys: [...fe],
          checkStrictly: i.value
        }));
      }), Qe(re, fe), Xe({
        targetKey: X,
        targetChecked: je(X) ? void 0 : G,
        newCheckedKeys: re,
        newIndeterminateKeys: fe
      });
    }
    function Ut(j, G, X) {
      if (!j.length)
        return;
      let re;
      if (a.value) {
        const fe = new Set(Pe.value);
        j.forEach((_e) => {
          G ? fe.add(_e) : fe.delete(_e);
        }), re = [...fe];
      } else
        re = G ? [j[0]] : [];
      Ve(re), Ie({
        targetKey: X,
        targetSelected: je(X) ? void 0 : G,
        newSelectedKeys: re
      });
    }
    function B(j, G, X) {
      const re = new Set(W.value);
      j.forEach((_e) => {
        G ? re.add(_e) : re.delete(_e), Ue(_e);
      });
      const fe = [...re];
      P(fe), mt({
        targetKey: X,
        targetExpanded: je(X) ? void 0 : G,
        newExpandedKeys: fe
      });
    }
    function k(j, G, X) {
      const re = ye.value.get(G);
      if (!re)
        return;
      const [fe, _e] = br({
        node: re,
        checked: j,
        checkedKeys: se.value,
        indeterminateKeys: Ce.value,
        checkStrictly: i.value
      });
      Qe(fe, _e), Xe({
        targetKey: G,
        targetChecked: j,
        newCheckedKeys: fe,
        newIndeterminateKeys: _e,
        event: X
      });
    }
    function T(j, G) {
      if (!ye.value.get(j))
        return;
      let re, fe;
      if (a.value) {
        const _e = new Set(Pe.value);
        fe = !_e.has(j), fe ? _e.add(j) : _e.delete(j), re = [..._e];
      } else
        fe = !0, re = [j];
      Ve(re), Ie({
        targetKey: j,
        targetSelected: fe,
        newSelectedKeys: re,
        event: G
      });
    }
    function Q(j, G, X) {
      if (H.value.includes(G) || !ye.value.get(G))
        return;
      const fe = new Set(W.value);
      j ? fe.add(G) : fe.delete(G);
      const _e = [...fe];
      P(_e), R.value && H.value.push(G), mt({
        targetKey: G,
        targetExpanded: j,
        newExpandedKeys: _e,
        event: X
      });
    }
    function Ue(j) {
      const G = H.value.indexOf(j);
      H.value.splice(G, 1);
    }
    const Re = d(() => r != null && r.value ? async (j) => {
      if (!qe(r.value))
        return;
      const G = ye.value.get(j);
      if (!G)
        return;
      const {
        treeNodeData: X
      } = G;
      Ae.value = [.../* @__PURE__ */ new Set([...Ae.value, j])];
      try {
        await r.value(X), Ae.value = Ae.value.filter((re) => re !== j), Q(!0, j), se.value.includes(j) && k(!0, j);
      } catch (re) {
        Ae.value = Ae.value.filter((fe) => fe !== j), console.error("[tree]load data error: ", re);
      }
    } : void 0), rt = Oe({
      treeProps: e,
      switcherIcon: le,
      loadingIcon: x,
      dragIcon: q,
      nodeIcon: me,
      nodeTitle: te,
      nodeExtra: ie,
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ye,
      checkedKeys: se,
      indeterminateKeys: Ce,
      selectedKeys: Pe,
      expandedKeys: W,
      loadingKeys: Ae,
      currentExpandKeys: H,
      onLoadMore: Re,
      filterTreeNode: E,
      onCheck: k,
      onSelect: T,
      onExpand: Q,
      onExpandEnd: Ue,
      allowDrop(j, G) {
        const X = ye.value.get(j);
        return X && qe(b.value) ? !!b.value({
          dropNode: X.treeNodeData,
          dropPosition: G
        }) : !0;
      },
      onDragStart(j, G) {
        const X = ye.value.get(j);
        Ne.value = X, X && t("dragStart", G, X.treeNodeData);
      },
      onDragEnd(j, G) {
        const X = ye.value.get(j);
        Ne.value = void 0, X && t("dragEnd", G, X.treeNodeData);
      },
      onDragOver(j, G) {
        const X = ye.value.get(j);
        X && t("dragOver", G, X.treeNodeData);
      },
      onDragLeave(j, G) {
        const X = ye.value.get(j);
        X && t("dragLeave", G, X.treeNodeData);
      },
      onDrop(j, G, X) {
        const re = ye.value.get(j);
        Ne.value && re && !(re.key === Ne.value.key || re.pathParentKeys.includes(Ne.value.key || "")) && t("drop", {
          e: X,
          dragNode: Ne.value.treeNodeData,
          dropNode: re.treeNodeData,
          dropPosition: G
        });
      }
    });
    return ft(va, rt), {
      classNames: ee,
      visibleTreeNodeList: ce,
      treeContext: rt,
      virtualListRef: y(),
      computedSelectedKeys: Pe,
      computedExpandedKeys: W,
      computedCheckedKeys: se,
      computedIndeterminateKeys: Ce,
      getPublicCheckedKeys: ke,
      getNodes: Ee,
      internalCheckNodes: Ot,
      internalSetCheckedKeys: Gt,
      internalSelectNodes: Ut,
      internalSetSelectedKeys: yt,
      internalExpandNodes: B,
      internalSetExpandedKeys: nt
    };
  },
  methods: {
    toggleCheck(e, t) {
      const {
        key2TreeNode: n,
        onCheck: o,
        checkedKeys: l
      } = this.treeContext, a = !l.includes(e), r = n.get(e);
      r && Lt(r) && o(a, e, t);
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
      } = e, o = this.getPublicCheckedKeys(this.computedCheckedKeys, t);
      return [...this.getNodes(o), ...n ? this.getHalfCheckedNodes() : []];
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
      } = this.treeContext, n = e ? [...t.keys()].filter((o) => {
        const l = t.get(o);
        return l && Lt(l);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: o,
        treeContext: l
      } = this, {
        key2TreeNode: a
      } = l, r = De(e), i = (r ? e : [e]).filter((s) => {
        const c = a.get(s);
        return c && Lt(c) && (o || !n || Mf(c));
      });
      this.internalCheckNodes(i, t, r ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((o) => {
        const l = t.get(o);
        return l && yr(l);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, o = De(e), l = (o ? e : [e]).filter((a) => {
        const r = n.get(a);
        return r && yr(r);
      });
      this.internalSelectNodes(l, t, o ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((o) => {
        const l = t.get(o);
        return l && gr(l);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, o = De(e), l = (o ? e : [e]).filter((a) => {
        const r = n.get(a);
        return r && gr(r);
      });
      this.internalExpandNodes(l, t, o ? void 0 : e);
    }
  }
});
function Sv(e, t, n, o, l, a) {
  const r = ve("TreeNode"), i = ve("VirtualList");
  return w(), F("div", {
    class: V(e.classNames)
  }, [e.virtualListProps ? (w(), Z(i, ae({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: Y(({
      item: s
    }) => [v(r, ae({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : (w(!0), F(Be, {
    key: 1
  }, At(e.visibleTreeNodeList, (s) => (w(), Z(r, ae({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var No = /* @__PURE__ */ ue(wv, [["render", Sv]]);
const Ev = Object.assign(No, {
  install: (e, t) => {
    Ke(e, t);
    const n = Me(t);
    e.component(n + No.name, No);
  }
}), Ov = z({
  name: "TypographyEditContent",
  components: {
    Input: ta
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
    const o = [`${U("typography")}-edit-content`], l = y();
    function a(i) {
      t("update:text", i), t("change", i);
    }
    function r() {
      t("end");
    }
    return ze(() => {
      if (!l.value || !l.value.$el)
        return;
      const i = l.value.$el.querySelector("input");
      if (!i)
        return;
      i.focus && i.focus();
      const {
        length: s
      } = i.value;
      i.setSelectionRange(s, s);
    }), {
      classNames: o,
      inputRef: l,
      onBlur: r,
      onChange: a,
      onEnd: r
    };
  }
});
function xv(e, t, n, o, l, a) {
  const r = ve("Input");
  return w(), F("div", {
    class: V(e.classNames)
  }, [v(r, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: La(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var Pv = /* @__PURE__ */ ue(Ov, [["render", xv]]);
const Bv = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-copy`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Iv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Tv = /* @__PURE__ */ M("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), zv = [Tv];
function Nv(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zv, 14, Iv);
}
var Lo = /* @__PURE__ */ ue(Bv, [["render", Nv]]);
const Lv = Object.assign(Lo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Lo.name, Lo);
  }
}), Vv = z({
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
    const n = U("icon"), o = d(() => [n, `${n}-edit`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const r = {};
      return e.size && (r.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Dv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Av = /* @__PURE__ */ M("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), jv = [Av];
function Fv(e, t, n, o, l, a) {
  return w(), F("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: de(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, jv, 14, Dv);
}
var Vo = /* @__PURE__ */ ue(Vv, [["render", Fv]]);
const Mv = Object.assign(Vo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Vo.name, Vo);
  }
}), Kv = z({
  name: "TypographyOperations",
  components: {
    Tooltip: dn,
    IconCheckCircleFill: ll,
    IconCopy: Lv,
    IconEdit: Mv
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
    const n = U("typography"), o = d(() => e.forceRenderExpand || e.expandable && e.isEllipsis), {
      t: l
    } = Jo();
    return {
      prefixCls: n,
      showExpand: o,
      t: l,
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
function Rv(e, t, n, o, l, a) {
  const r = ve("IconEdit"), i = ve("Tooltip"), s = ve("IconCheckCircleFill"), c = ve("IconCopy");
  return w(), F(Be, null, [e.editable ? (w(), Z(i, ae({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: Y(() => [M("span", {
      class: V(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = lt((...u) => e.onEditClick && e.onEditClick(...u), ["stop"]))
    }, [v(r)], 2)]),
    _: 1
  }, 16, ["content"])) : he("v-if", !0), e.copyable ? (w(), Z(i, Ao(ae({
    key: 1
  }, e.copyTooltipProps)), {
    content: Y(() => [oe(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [He(Fe(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: Y(() => [M("span", {
      class: V({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = lt((...u) => e.onCopyClick && e.onCopyClick(...u), ["stop"]))
    }, [oe(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? (w(), Z(s, {
      key: 0
    })) : (w(), Z(c, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : he("v-if", !0), e.showExpand ? (w(), F("a", {
    key: 2,
    class: V(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = lt((...u) => e.onExpandClick && e.onExpandClick(...u), ["stop"]))
  }, [oe(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [He(Fe(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : he("v-if", !0)], 64);
}
var Er = /* @__PURE__ */ ue(Kv, [["render", Rv]]);
let Le;
function Hv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function Do(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var Wv = (e, t, n, o) => {
  Le || (Le = document.createElement("div"), document.body.appendChild(Le));
  const {
    rows: l,
    suffix: a,
    ellipsisStr: r
  } = t, i = window.getComputedStyle(e), s = Hv(i), c = Do(i.lineHeight), u = Math.round(c * l + Do(i.paddingTop) + Do(i.paddingBottom));
  Le.setAttribute("style", s), Le.setAttribute("aria-hidden", "true"), Le.style.height = "auto", Le.style.minHeight = "auto", Le.style.maxHeight = "auto", Le.style.position = "fixed", Le.style.left = "0", Le.style.top = "-99999999px", Le.style.zIndex = "-200", Le.style.whiteSpace = "normal";
  const f = Dr({
    render() {
      return v("span", null, [n]);
    }
  });
  f.mount(Le);
  const p = Array.prototype.slice.apply(Le.childNodes[0].cloneNode(!0).childNodes);
  f.unmount(), Le.innerHTML = "";
  const h = document.createTextNode(`${r}${a}`);
  Le.appendChild(h), p.forEach((N) => {
    Le.appendChild(N);
  });
  const m = document.createTextNode(o);
  Le.insertBefore(m, h);
  function g() {
    return Le.offsetHeight <= u;
  }
  if (g())
    return {
      ellipsis: !1,
      text: o
    };
  function C(N, I = 0, S = o.length, $ = 0) {
    const E = Math.floor((I + S) / 2), _ = o.slice(0, E);
    if (N.textContent = _, I >= S - 1)
      for (let b = S; b >= I; b -= 1) {
        const D = o.slice(0, b);
        if (N.textContent = D, g() || !D)
          return;
      }
    g() ? C(N, E, S, E) : C(N, I, E, $);
  }
  return C(m), {
    text: m.textContent,
    ellipsis: !0
  };
};
const qv = async (e) => {
  var t;
  if ((t = navigator.clipboard) != null && t.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch (a) {
      console.error(a ?? new DOMException("The request is not allowed", "NotAllowedError"));
    }
  const n = document.createElement("span");
  n.textContent = e, n.style.whiteSpace = "pre", document.body.appendChild(n);
  const o = window.getSelection(), l = window.document.createRange();
  o == null || o.removeAllRanges(), l.selectNode(n), o == null || o.addRange(l);
  try {
    window.document.execCommand("copy");
  } catch (a) {
    console.error(`execCommand Error: ${a}`);
  }
  o == null || o.removeAllRanges(), window.document.body.removeChild(n);
};
let Bt;
function Gv(e) {
  if (!e)
    return "";
  Bt || (Bt = document.createElement("div"), Bt.setAttribute("aria-hidden", "true"), document.body.appendChild(Bt));
  const t = Dr({
    render() {
      return v("div", null, [e]);
    }
  });
  t.mount(Bt);
  const n = Bt.innerText;
  return t.unmount(), n;
}
var Uv = Object.defineProperty, Yv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, Or = Object.getOwnPropertySymbols, Xv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? Uv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qv = (e, t) => {
  for (var n in t || (t = {}))
    Xv.call(t, n) && xr(e, n, t[n]);
  if (Or)
    for (var n of Or(t))
      Jv.call(t, n) && xr(e, n, t[n]);
  return e;
}, ep = (e, t) => Yv(e, Zv(t));
function ya(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Zo(e);
}
function tp(e) {
  const {
    bold: t,
    mark: n,
    underline: o,
    delete: l,
    code: a
  } = e, r = [];
  return t && r.push("b"), o && r.push("u"), l && r.push("del"), a && r.push("code"), n && r.push("mark"), r;
}
function Pr(e, t) {
  const {
    mark: n
  } = e, o = tp(e), l = Te(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return o.reduce((a, r) => v(r, r === "mark" ? {
    style: l
  } : {}, ya(a) ? a : {
    default: () => [a]
  }), t);
}
function np(e) {
  const t = !!e.showTooltip, n = Te(e.showTooltip) && e.showTooltip.type === "popover" ? mc : dn, o = Te(e.showTooltip) && e.showTooltip.props || {};
  return ep(Qv({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: !1,
    css: !1
  }, Ht(e, ["showTooltip"])), {
    showTooltip: t,
    TooltipComponent: n,
    tooltipProps: o
  });
}
var op = z({
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
    attrs: o
  }) {
    const {
      editing: l,
      defaultEditing: a,
      ellipsis: r,
      copyable: i,
      editable: s,
      copyText: c,
      editText: u,
      copyDelay: f,
      component: p
    } = ge(e), h = U("typography"), m = d(() => [h, {
      [`${h}-${e.type}`]: e.type,
      [`${h}-disabled`]: e.disabled
    }]), g = y(), C = y(""), [N, I] = Pn(a.value, Oe({
      value: l
    })), S = d(() => s.value && N.value);
    function $() {
      n("update:editing", !0), n("editStart"), I(!0);
    }
    function E(se) {
      n("update:editText", se), n("change", se);
    }
    function _() {
      N.value && (n("update:editing", !1), n("editEnd"), I(!1));
    }
    const b = y(!1);
    let D = null;
    function A() {
      var se;
      const Ce = (se = c.value) != null ? se : C.value;
      qv(Ce || ""), b.value = !0, n("copy", Ce), D = setTimeout(() => {
        b.value = !1;
      }, f.value);
    }
    wn(() => {
      D && clearTimeout(D), D = null;
    });
    const L = y(!1), O = y(!1), K = y(""), R = d(() => np(Te(r.value) && r.value || {}));
    let J = null;
    function ee() {
      const se = !O.value;
      O.value = se, n("expand", se);
    }
    function le(se = !1) {
      return R.value.css ? v(Er, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: b.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: se || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: $,
        onCopy: A,
        onExpand: ee
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : v(Er, {
        editable: s.value,
        copyable: i.value,
        expandable: R.value.expandable,
        isCopied: b.value,
        isEllipsis: L.value,
        expanded: O.value,
        forceRenderExpand: se,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: $,
        onCopy: A,
        onExpand: ee
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      });
    }
    function x() {
      if (!g.value)
        return;
      const {
        ellipsis: se,
        text: Ce
      } = Wv(g.value, R.value, le(!!R.value.expandable), C.value);
      L.value !== se && (L.value = se, R.value.css || n("ellipsis", se)), K.value !== Ce && (K.value = Ce || "");
    }
    function q() {
      r.value && !O.value && (On(J), J = Xr(() => {
        x();
      }));
    }
    wn(() => {
      On(J);
    }), pe(() => R.value.rows, () => {
      q();
    }), pe(r, (se) => {
      se ? q() : L.value = !1;
    });
    let me = [];
    const te = () => {
      if (r.value || i.value || s.value) {
        const se = Gv(me);
        se !== C.value && (C.value = se, q());
      }
    };
    ze(te), st(te);
    const ie = y(), Se = y(!1), be = () => {
      if (g.value && ie.value) {
        const se = ie.value.offsetHeight > g.value.offsetHeight;
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
      var se, Ce;
      if (me = ((se = t.default) == null ? void 0 : se.call(t)) || [], S.value) {
        const ce = (Ce = u.value) != null ? Ce : C.value;
        return v(Pv, {
          text: ce,
          onChange: (ke) => {
            ke !== ce && E(ke);
          },
          onEnd: _
        }, null);
      }
      const {
        suffix: Qe,
        ellipsisStr: Pe,
        showTooltip: Ve,
        tooltipProps: Ae,
        TooltipComponent: Ne
      } = R.value, Ye = L.value && !O.value, W = Ye && !Ve ? {
        title: C.value
      } : {}, P = p.value;
      if (R.value.css) {
        const ce = Pr(e, me), ke = v(P, ae({
          class: m.value,
          ref: g,
          style: ye.value
        }, W, o), {
          default: () => [v("span", {
            ref: ie
          }, [ce])]
        });
        return Se.value ? v(Ne, ae(Ae, {
          onResize: () => be()
        }), {
          default: () => [ke],
          content: () => C.value
        }) : v(on, {
          onResize: () => {
            be();
          }
        }, ya(ke) ? ke : {
          default: () => [ke]
        });
      }
      const H = Pr(e, Ye ? K.value : me);
      return v(on, {
        onResize: () => q()
      }, {
        default: () => [v(P, ae({
          class: m.value,
          ref: g
        }, W, o), {
          default: () => [Ye && Ve ? v(Ne, Ae, {
            default: () => [v("span", null, [H])],
            content: () => C.value
          }) : H, Ye ? Pe : null, Qe, le()]
        })]
      });
    };
  }
}), lp = z({
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
    } = ge(e), o = U("typography"), l = d(() => t != null && t.value ? "blockquote" : "div"), a = d(() => [{
      [`${o}-spacing-close`]: (n == null ? void 0 : n.value) === "close"
    }]);
    return {
      component: l,
      classNames: a
    };
  },
  render() {
    const {
      component: e,
      classNames: t
    } = this;
    return v(op, ae({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function rp(e) {
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
        return (o, l) => o.x - l.x;
      case "right":
        return (o, l) => l.x - o.x;
      case "up":
        return (o, l) => o.y - l.y;
      case "bottom":
        return (o, l) => l.y - o.y;
      default:
        throw new Error("");
    }
  }
  return {
    getCursorIcon: t,
    getMoveIncrementHandler: n
  };
}
function ap(e, t, n, o) {
  const l = n ?? y(0);
  return pe(e, (a) => {
    if (!a)
      return;
    const r = rp(t);
    a.style.cursor = r.getCursorIcon();
    const i = r.getMoveIncrementHandler(), s = {
      x: 0,
      y: 0
    }, c = (p) => {
      const h = i(s, p);
      (!o || o(l.value + h)) && (l.value += i(s, p)), s.x = p.x, s.y = p.y;
    }, u = (p) => {
      p.stopPropagation();
    }, f = (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = "default", document.removeEventListener("mousemove", c);
    };
    a.addEventListener("mousedown", (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = a.style.cursor, s.x = p.x, s.y = p.y, document.addEventListener("mousemove", c), document.addEventListener("mouseup", u, {
        capture: !0,
        once: !0
      }), document.addEventListener("click", f, {
        capture: !0,
        once: !0
      });
    }, {
      capture: !0
    });
  }), l;
}
function Mn(e) {
  function t(a) {
    return d(() => {
      const i = _t(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue(_t(a)) : "";
    });
  }
  function n(a) {
    return d(() => {
      const i = _t(e);
      if (i) {
        const s = _t(a);
        return i.style[s];
      }
      return "";
    });
  }
  function o(a) {
    const r = a ?? t("display");
    return d(() => _t(e) ? {
      isFlex: r.value === "flex",
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
  function l() {
    return d(() => {
      const r = _t(e);
      if (!r || !r.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Mn(r.parentElement).getFlexBoxInfo();
      return {
        isFlex: s.value.isFlex,
        direction: s.value.direction
      };
    });
  }
  return {
    getStyle: n,
    getComputedStyle: t,
    getFlexBoxInfo: o,
    getParentFlexBoxInfo: l
  };
}
const nn = /* @__PURE__ */ new Map();
function ip(e) {
  pe(e, (t) => {
    if (!t) {
      nn.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const n = Mn(t);
    nn.forEach((o, l) => {
      o.value = n.getComputedStyle(l).value;
    });
  });
}
function sp(e) {
  return nn.has(e) || nn.set(e, y(null)), nn.get(e);
}
function kt(e) {
  return Da() ? (Aa(e), !0) : !1;
}
function xe(e) {
  return typeof e == "function" ? e() : ne(e);
}
const an = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const up = (e) => e != null, cp = Object.prototype.toString, dp = (e) => cp.call(e) === "[object Object]", fp = () => {
};
function vp(e) {
  return e || dt();
}
function pp(e, t = {}) {
  if (!Xo(e))
    return ge(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const o in e.value)
    n[o] = Va(() => ({
      get() {
        return e.value[o];
      },
      set(l) {
        var a;
        if ((a = xe(t.replaceRef)) != null ? a : !0)
          if (Array.isArray(e.value)) {
            const i = [...e.value];
            i[o] = l, e.value = i;
          } else {
            const i = { ...e.value, [o]: l };
            Object.setPrototypeOf(i, Object.getPrototypeOf(e.value)), e.value = i;
          }
        else
          e.value[o] = l;
      }
    }));
  return n;
}
function ga(e, t = !0, n) {
  vp() ? ze(e, n) : t ? e() : We(e);
}
function hp(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: l = !1
  } = n;
  let a = null;
  const r = y(!1);
  function i() {
    a && (clearInterval(a), a = null);
  }
  function s() {
    r.value = !1, i();
  }
  function c() {
    const u = xe(t);
    u <= 0 || (r.value = !0, l && e(), i(), a = setInterval(e, u));
  }
  if (o && an && c(), Xo(t) || typeof t == "function") {
    const u = pe(t, () => {
      r.value && an && c();
    });
    kt(u);
  }
  return kt(s), {
    isActive: r,
    pause: s,
    resume: c
  };
}
function Kt(e) {
  var t;
  const n = xe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ht = an ? window : void 0, mp = an ? window.document : void 0;
function Ze(...e) {
  let t, n, o, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, l] = e, t = ht) : [t, n, o, l] = e, !t)
    return fp;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], r = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, f, p, h) => (u.addEventListener(f, p, h), () => u.removeEventListener(f, p, h)), s = pe(
    () => [Kt(t), xe(l)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const p = dp(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((h) => o.map((m) => i(u, h, m, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), r();
  };
  return kt(c), c;
}
function yp() {
  const e = y(!1), t = dt();
  return t && ze(() => {
    e.value = !0;
  }, t), e;
}
function Kn(e) {
  const t = yp();
  return d(() => (t.value, !!e()));
}
function ba(e, t, n = {}) {
  const { window: o = ht, ...l } = n;
  let a;
  const r = Kn(() => o && "MutationObserver" in o), i = () => {
    a && (a.disconnect(), a = void 0);
  }, s = d(() => {
    const p = xe(e), h = (Array.isArray(p) ? p : [p]).map(Kt).filter(up);
    return new Set(h);
  }), c = pe(
    () => s.value,
    (p) => {
      i(), r.value && p.size && (a = new MutationObserver(t), p.forEach((h) => a.observe(h, l)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => a == null ? void 0 : a.takeRecords(), f = () => {
    i(), c();
  };
  return kt(f), {
    isSupported: r,
    stop: f,
    takeRecords: u
  };
}
function gp(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: l = ht
  } = t, a = y(!1), r = o ? 1e3 / o : null;
  let i = 0, s = null;
  function c(p) {
    if (!a.value || !l)
      return;
    i || (i = p);
    const h = p - i;
    if (r && h < r) {
      s = l.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), s = l.requestAnimationFrame(c);
  }
  function u() {
    !a.value && l && (a.value = !0, i = 0, s = l.requestAnimationFrame(c));
  }
  function f() {
    a.value = !1, s != null && l && (l.cancelAnimationFrame(s), s = null);
  }
  return n && u(), kt(f), {
    isActive: sn(a),
    pause: f,
    resume: u
  };
}
function bp(e, t = {}) {
  const { window: n = ht } = t, o = Kn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let l;
  const a = y(!1), r = (c) => {
    a.value = c.matches;
  }, i = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", r) : l.removeListener(r));
  }, s = zn(() => {
    o.value && (i(), l = n.matchMedia(xe(e)), "addEventListener" in l ? l.addEventListener("change", r) : l.addListener(r), a.value = l.matches);
  });
  return kt(() => {
    s(), i(), l = void 0;
  }), a;
}
function _p(e, t = {}) {
  var n, o;
  const {
    pointerTypes: l,
    preventDefault: a,
    stopPropagation: r,
    exact: i,
    onMove: s,
    onEnd: c,
    onStart: u,
    initialValue: f,
    axis: p = "both",
    draggingElement: h = ht,
    containerElement: m,
    handle: g = e
  } = t, C = y(
    (n = xe(f)) != null ? n : { x: 0, y: 0 }
  ), N = y(), I = (b) => l ? l.includes(b.pointerType) : !0, S = (b) => {
    xe(a) && b.preventDefault(), xe(r) && b.stopPropagation();
  }, $ = (b) => {
    var D;
    if (b.button !== 0 || xe(t.disabled) || !I(b) || xe(i) && b.target !== xe(e))
      return;
    const A = xe(m), L = (D = A == null ? void 0 : A.getBoundingClientRect) == null ? void 0 : D.call(A), O = xe(e).getBoundingClientRect(), K = {
      x: b.clientX - (A ? O.left - L.left + A.scrollLeft : O.left),
      y: b.clientY - (A ? O.top - L.top + A.scrollTop : O.top)
    };
    (u == null ? void 0 : u(K, b)) !== !1 && (N.value = K, S(b));
  }, E = (b) => {
    if (xe(t.disabled) || !I(b) || !N.value)
      return;
    const D = xe(m), A = xe(e).getBoundingClientRect();
    let { x: L, y: O } = C.value;
    (p === "x" || p === "both") && (L = b.clientX - N.value.x, D && (L = Math.min(Math.max(0, L), D.scrollWidth - A.width))), (p === "y" || p === "both") && (O = b.clientY - N.value.y, D && (O = Math.min(Math.max(0, O), D.scrollHeight - A.height))), C.value = {
      x: L,
      y: O
    }, s == null || s(C.value, b), S(b);
  }, _ = (b) => {
    xe(t.disabled) || !I(b) || N.value && (N.value = void 0, c == null || c(C.value, b), S(b));
  };
  if (an) {
    const b = { capture: (o = t.capture) != null ? o : !0 };
    Ze(g, "pointerdown", $, b), Ze(h, "pointermove", E, b), Ze(h, "pointerup", _, b);
  }
  return {
    ...pp(C),
    position: C,
    isDragging: d(() => !!N.value),
    style: d(
      () => `left:${C.value.x}px;top:${C.value.y}px;`
    )
  };
}
function $p(e, t, n = {}) {
  const { window: o = ht, ...l } = n;
  let a;
  const r = Kn(() => o && "ResizeObserver" in o), i = () => {
    a && (a.disconnect(), a = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((f) => Kt(f)) : [Kt(e)]), c = pe(
    s,
    (f) => {
      if (i(), r.value && o) {
        a = new ResizeObserver(t);
        for (const p of f)
          p && a.observe(p, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), c();
  };
  return kt(u), {
    isSupported: r,
    stop: u
  };
}
function _a(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: o = !0,
    windowScroll: l = !0,
    immediate: a = !0
  } = t, r = y(0), i = y(0), s = y(0), c = y(0), u = y(0), f = y(0), p = y(0), h = y(0);
  function m() {
    const g = Kt(e);
    if (!g) {
      n && (r.value = 0, i.value = 0, s.value = 0, c.value = 0, u.value = 0, f.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const C = g.getBoundingClientRect();
    r.value = C.height, i.value = C.bottom, s.value = C.left, c.value = C.right, u.value = C.top, f.value = C.width, p.value = C.x, h.value = C.y;
  }
  return $p(e, m), pe(() => Kt(e), (g) => !g && m()), ba(e, m, {
    attributeFilter: ["style", "class"]
  }), l && Ze("scroll", m, { capture: !0, passive: !0 }), o && Ze("resize", m, { passive: !0 }), ga(() => {
    a && m();
  }), {
    height: r,
    bottom: i,
    left: s,
    right: c,
    top: u,
    width: f,
    x: p,
    y: h,
    update: m
  };
}
function Cp(e) {
  const {
    x: t,
    y: n,
    document: o = mp,
    multiple: l,
    interval: a = "requestAnimationFrame",
    immediate: r = !0
  } = e, i = Kn(() => xe(l) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), s = y(null), c = () => {
    var f, p;
    s.value = xe(l) ? (f = o == null ? void 0 : o.elementsFromPoint(xe(t), xe(n))) != null ? f : [] : (p = o == null ? void 0 : o.elementFromPoint(xe(t), xe(n))) != null ? p : null;
  }, u = a === "requestAnimationFrame" ? gp(c, { immediate: r }) : hp(c, a, { immediate: r });
  return {
    isSupported: i,
    element: s,
    ...u
  };
}
const kp = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function $a(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: o = !1,
    initialValue: l = { x: 0, y: 0 },
    window: a = ht,
    target: r = a,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let c = null;
  const u = y(l.x), f = y(l.y), p = y(null), h = typeof t == "function" ? t : kp[t], m = (E) => {
    const _ = h(E);
    c = E, _ && ([u.value, f.value] = _, p.value = "mouse");
  }, g = (E) => {
    if (E.touches.length > 0) {
      const _ = h(E.touches[0]);
      _ && ([u.value, f.value] = _, p.value = "touch");
    }
  }, C = () => {
    if (!c || !a)
      return;
    const E = h(c);
    c instanceof MouseEvent && E && (u.value = E[0] + a.scrollX, f.value = E[1] + a.scrollY);
  }, N = () => {
    u.value = l.x, f.value = l.y;
  }, I = s ? (E) => s(() => m(E), {}) : (E) => m(E), S = s ? (E) => s(() => g(E), {}) : (E) => g(E), $ = s ? () => s(() => C(), {}) : () => C();
  if (r) {
    const E = { passive: !0 };
    Ze(r, ["mousemove", "dragover"], I, E), n && t !== "movement" && (Ze(r, ["touchstart", "touchmove"], S, E), o && Ze(r, "touchend", N, E)), i && t === "page" && Ze(a, "scroll", $, { passive: !0 });
  }
  return {
    x: u,
    y: f,
    sourceType: p
  };
}
function fl(e = {}) {
  const {
    window: t = ht,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: a = !0
  } = e, r = y(n), i = y(o), s = () => {
    t && (a ? (r.value = t.innerWidth, i.value = t.innerHeight) : (r.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), ga(s), Ze("resize", s, { passive: !0 }), l) {
    const c = bp("(orientation: portrait)");
    pe(c, () => s());
  }
  return { width: r, height: i };
}
function wp(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function Sp() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function Ep(e) {
  const t = /^(\d*\.?\d+)(px|%|rem|em|ex|ch|vw|vh|vmin|vmax)$|^auto$/i, n = e.match(t);
  if (n) {
    const o = n[1] || "", l = n[2] || "auto";
    return {
      number: o,
      unit: l
    };
  } else
    return {
      number: "",
      unit: ""
    };
}
function Ca(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function vl(e, t) {
  if (!Ca(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function $t(e, t) {
  if (!Ca(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length));
  return null;
}
function ka(e, t) {
  const n = `*.${t.idPrefix}${e}`, o = document.querySelector(n);
  if (!o)
    throw new Error(`target element with id ${e} not found`);
  return o;
}
function Op(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function xp(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function Pp(e) {
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
const we = y(null), ot = {
  props: Oe(/* @__PURE__ */ new Map()),
  styles: Oe(/* @__PURE__ */ new Map()),
  propsCode: y(null),
  stylesCode: y(null)
}, Bn = /* @__PURE__ */ new Map();
function Bp() {
  return we;
}
function Ip(e) {
  const t = ka(e, pl());
  we.value = t, Pp(t);
}
function Tp(e) {
  we.value = e, Sa();
}
function wa(e) {
  if (Bn.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = y(Symbol(e));
  return Bn.set(e, t), sn(t);
}
function zp(e) {
  const t = Bn.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function Np() {
  return sn(ot);
}
function Lp(e) {
  if (ot.props.clear(), ot.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      ot.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      ot.styles.set(t, n);
  e.propsCode !== void 0 && (ot.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (ot.stylesCode.value = e.stylesCode), Sa();
}
function Vp() {
  return {
    props: ot.propsCode,
    styles: ot.stylesCode
  };
}
function Dp(e) {
  return d(() => ot.styles.has(e));
}
function Ap() {
  return d(() => we.value !== null);
}
function jp() {
  return d(() => we.value === null ? null : vl(we.value, pl()));
}
function Sa() {
  for (const e of Bn.values())
    e.value = Symbol(e.value.description);
}
const Yo = y("en"), Ea = /* @__PURE__ */ new Map(), Fp = d(() => {
  const e = Ea.get(Yo.value);
  if (e == null)
    throw new Error(`No message found for locale ${Yo.value}`);
  return e;
});
function Mp(e) {
  Yo.value = e;
}
function Kp(e, t) {
  Ea.set(e, t);
}
function Br(e) {
  return Fp.value[e];
}
const It = y(null);
let it = d(() => null), Rn, Oa, xa, Pa, Ba;
function pl() {
  return Rn;
}
function Rp(e) {
  It.value = ka(e, Rn);
}
function Hp() {
  It.value = null;
}
function Wp() {
  return Oa;
}
function qp(e) {
  xa = e.emitSetCommandFn, Pa = e.emitResetCommandFn, e.emitJumpSourceCodeFn, Ba = e.emitApplyCommandFn, Rn = e.selectorConfig, Oa = e.elementTreeData;
  const {
    hoverElement: t
  } = Xp(e.selectorConfig);
  Jp(t), it = t, Mp(e.languageConfig.locale), Object.entries(e.languageConfig.messages).forEach(([n, o]) => {
    Kp(n, o);
  });
}
function Gp() {
  const e = we.value;
  if (e) {
    const t = Op(e, Rn);
    xp(t);
  }
}
function Up() {
  Ba();
}
function Yp() {
  return d(() => !0);
}
function hl(e) {
  Array.isArray(e) || (e = [e]), xa(e);
}
function Zp(e, t = "style") {
  Pa([{
    propertyName: e,
    type: t
  }]);
}
function Xp(e) {
  const {
    x: t,
    y: n
  } = $a({
    type: "client"
  }), {
    element: o
  } = Cp({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (o.value === null)
        return null;
      const a = o.value.closest(e.selectors);
      return a === null || a.closest("[layout-tool-panel]") ? It.value ? It.value : null : a;
    })
  };
}
function Jp(e) {
  Ze(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (Tp(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Ze(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Qp(e, t) {
  const n = sp(e);
  return d({
    get: () => n.value,
    set: (l) => {
      const a = {
        propertyName: e,
        values: {
          [e]: l
        }
      }, r = t ? t(l) : [];
      hl([a, ...r]), n.value = l;
    }
  });
}
const eh = /* @__PURE__ */ z({
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
    const t = e, n = Qp(t.styleName), o = d(() => {
      if (!n.value)
        return {
          value: 0,
          unit: "px"
        };
      const u = /(-?\d+)([a-zA-Z%]+)/, f = n.value.match(u), p = parseFloat(f[1]), h = f[2];
      return {
        value: p,
        unit: h
      };
    });
    let l = o.value.value, a = o.value.unit;
    const r = d({
      get: () => o.value.value,
      set: (u) => {
        l = u, n.value = `${l}${a}`;
      }
    });
    d({
      get: () => o.value.unit,
      set: (u) => {
        a = u, n.value = `${l}${a}`;
      }
    });
    const i = y(null);
    ap(i, t.direction, r, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function c() {
    }
    return (u, f) => (w(), F("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: de([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [M("div", {
      onClick: c
    }, [M("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, Fe(r.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, ut = /* @__PURE__ */ et(eh, [["__scopeId", "data-v-19de9462"]]), th = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, nh = /* @__PURE__ */ z({
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
    }, o = {
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
    }, l = (a) => a >= 0;
    return (a, r) => {
      const i = Ct;
      return w(), Z(i, {
        header: "Spacing(间距)",
        key: "spacing"
      }, {
        default: Y(() => [M("div", th, [M("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: de([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), r[0] || (r[0] = M("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), v(ut, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: de([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: de([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: de([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: de([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": l,
          "clip-path": o.left.clipPath,
          style: de({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": l,
          "clip-path": o.up.clipPath,
          style: de([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": l,
          "clip-path": o.right.clipPath,
          style: de({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), v(ut, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": l,
          "clip-path": o.bottom.clipPath,
          style: de({
            bottom: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          })
        }, null, 8, ["clip-path", "style"])])]),
        _: 1
      });
    };
  }
});
const oh = {
  class: "flex flex-row gap-0"
}, Qt = /* @__PURE__ */ z({
  __name: "IconRadio",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: o,
      userEdited: l
    } = t.model, a = o.value.some((i) => i.icon);
    function r(i) {
      n.value = i, l();
    }
    return (i, s) => {
      const c = Dn, u = dn, f = jn;
      return w(), F("div", oh, [ne(a) ? (w(!0), F(Be, {
        key: 0
      }, At(ne(o), (p) => (w(), Z(u, {
        content: p.label,
        key: p.value,
        "popup-container": "[layout-tool-panel]"
      }, {
        default: Y(() => [v(c, {
          size: "small",
          type: "outline",
          status: ne(n) === p.value ? "success" : void 0,
          onClick: (h) => r(p.value)
        }, {
          icon: Y(() => [M("span", {
            class: V(p.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content"]))), 128)) : (w(!0), F(Be, {
        key: 1
      }, At(ne(o), (p) => (w(), Z(f, {
        key: p.value,
        checked: ne(n) === p.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => r(p.value)
      }, {
        default: Y(() => [He(Fe(p.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function en(e) {
  const {
    propertyName: t,
    options: n
  } = e, o = y(void 0), l = d(() => _t(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), a = wa(e.propertyName);
  pe(a, () => {
    if (!we.value)
      return;
    const i = wp(we.value, t);
    o.value = i;
  }, {
    immediate: !0
  });
  function r() {
    hl({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: o.value
      }
    });
  }
  return {
    value: o,
    options: l,
    userEdited: r
  };
}
const tt = /* @__PURE__ */ z({
  __name: "ItemLabel",
  props: {
    keyId: {},
    label: {}
  },
  emits: ["reset"],
  setup(e, {
    emit: t
  }) {
    const n = e, o = t, l = d(() => n.label ?? n.keyId), a = Dp(n.keyId);
    function r() {
      Zp(n.keyId), o("reset");
    }
    const i = d(() => a.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, c) => {
      const u = hf;
      return w(), Z(u, {
        "popup-container": "[layout-tool-panel]",
        content: "Do you want to reset this setting?",
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: r
      }, {
        default: Y(() => [M("div", {
          class: "px-2",
          style: de(i.value)
        }, [M("span", {
          class: V(["item-title text-capitalize", {
            "bg-gray-300": ne(a)
          }])
        }, Fe(l.value), 3)], 4)]),
        _: 1
      });
    };
  }
}), lh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, rh = /* @__PURE__ */ z({
  __name: "Layout",
  setup(e) {
    const t = Mn(we), n = en({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), o = t.getFlexBoxInfo(n.value), l = en({
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
    }), a = d(() => l.value.value === "row" ? "vertical align" : "horizontal align"), r = d(() => l.value.value === "row" ? [{
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
      options: r
    }), s = d(() => l.value.value === "row" ? "vertical justify" : "horizontal justify"), c = d(() => l.value.value === "row" ? [{
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
    return (f, p) => {
      const h = Ct;
      return w(), Z(h, {
        header: "Layout(布局)",
        key: "layout"
      }, {
        default: Y(() => [M("div", lh, [v(tt, {
          keyId: "display",
          label: "Display"
        }), v(Qt, {
          model: ne(n)
        }, null, 8, ["model"]), ne(o).isFlex ? (w(), F(Be, {
          key: 0
        }, [v(tt, {
          keyId: "flex-direction",
          label: "direction"
        }), v(Qt, {
          model: ne(l)
        }, null, 8, ["model"]), v(tt, {
          keyId: "align-items",
          label: a.value
        }, null, 8, ["label"]), v(Qt, {
          model: ne(i)
        }, null, 8, ["model"]), v(tt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), v(Qt, {
          model: ne(u)
        }, null, 8, ["model"])], 64)) : he("", !0)])]),
        _: 1
      });
    };
  }
});
const ah = /* @__PURE__ */ et(rh, [["__scopeId", "data-v-e3b78876"]]), ih = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, sh = /* @__PURE__ */ z({
  __name: "FlexItem",
  setup(e) {
    const n = Mn(we).getParentFlexBoxInfo(), o = d(() => n.value.direction === "row" ? {
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
    }), l = en({
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
    return (a, r) => {
      const i = Ct;
      return ne(n).isFlex ? (w(), Z(i, {
        header: "FlexItem(Flex子元素)",
        key: "flex-item"
      }, {
        default: Y(() => [M("div", ih, [v(tt, {
          keyId: "align-self",
          label: o.value.title
        }, null, 8, ["label"]), v(Qt, {
          model: ne(l)
        }, null, 8, ["model"])])]),
        _: 1
      })) : he("", !0);
    };
  }
});
const uh = /* @__PURE__ */ et(sh, [["__scopeId", "data-v-2faba385"]]);
const ch = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, Wt = /* @__PURE__ */ z({
  __name: "InputWithUnitSelector",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      inputValue: n,
      selectValue: o,
      inputPlaceholder: l,
      itemOptions: a,
      userEdited: r,
      updateInput: i,
      updateSelect: s
    } = t.model, c = y(null);
    function u(p, h) {
      var m;
      h.currentTarget === h.target && (i(p), r(), (m = c.value) == null || m.blur());
    }
    function f(p) {
      s(p), r();
    }
    return (p, h) => {
      const m = ta, g = id;
      return w(), F("div", ch, [v(m, {
        ref_key: "inputRef",
        ref: c,
        size: "mini",
        modelValue: ne(n),
        "onUpdate:modelValue": h[0] || (h[0] = (C) => Xo(n) ? n.value = C : null),
        placeholder: ne(l),
        onChange: u
      }, null, 8, ["modelValue", "placeholder"]), v(g, {
        "popup-container": "[layout-tool-panel]",
        size: "mini",
        options: ne(a),
        "model-value": ne(o),
        onChange: f,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": Y(() => h[1] || (h[1] = [])),
        _: 1
      }, 8, ["options", "model-value"])]);
    };
  }
});
function dh(e, t) {
  return e.styles.get(t);
}
function qt(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: o
  } = e, l = y(t.input), a = y(t.select ?? (o == null ? void 0 : o.defaultOptionValue)), r = n.map((g) => typeof g == "string" ? {
    value: g,
    label: g
  } : g);
  function i(g) {
    return r.find((C) => C.value === g);
  }
  const s = y(null), c = d(() => {
    var g;
    return a.value ? (g = i(a.value)) == null ? void 0 : g.label : "";
  }), u = d(() => {
    if (a.value) {
      const g = i(a.value);
      return (g == null ? void 0 : g.value) ?? (g == null ? void 0 : g.label);
    }
    return "";
  }), f = wa(e.propertyName);
  pe(f, () => {
    const g = dh(Np(), e.propertyName);
    if (g === void 0) {
      l.value = t.input, a.value = t.select;
      return;
    }
    const {
      number: C,
      unit: N
    } = Ep(g);
    l.value = C, a.value = N;
  });
  function p() {
    const g = l.value, C = a.value;
    let N = "";
    C === "auto" ? N = C : N = `${g}${C}`, hl({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: N
      }
    });
  }
  function h(g) {
    Ir(a, l, o);
  }
  function m(g) {
    a.value = g, Tr(a, l, o);
  }
  return Ir(a, l, o), Tr(a, l, o), {
    inputValue: l,
    selectValue: a,
    selectItem: s,
    selectDisplay: c,
    inputPlaceholder: u,
    itemOptions: r,
    userEdited: p,
    updateSelect: m,
    updateInput: h
  };
}
function Ir(e, t, n) {
  const {
    nonValueOptions: o,
    defaultOptionValue: l,
    optionValueIfnonValue: a
  } = n ?? {}, r = t.value;
  r && (o && l && r.length > 0 && e.value && o.includes(e.value) && (e.value = l), a && o && r && e.value && o.includes(e.value) && (e.value = a), !r && o && (e.value = o[0]));
}
function Tr(e, t, n) {
  const {
    nonValueOptions: o
  } = n ?? {}, l = e.value;
  if (l) {
    if (o && o.includes(l))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const a = Sp();
      n.specialProperty === "width" ? t.value = `${a.width}` : n.specialProperty === "height" && (t.value = `${a.height}`);
    }
  }
}
const fh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], vh = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], ph = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], hh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], mh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], yh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], gh = /* @__PURE__ */ z({
  __name: "Width",
  setup(e) {
    const n = qt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: fh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "width",
      label: "Width"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const bh = /* @__PURE__ */ et(gh, [["__scopeId", "data-v-bf60f62f"]]), _h = /* @__PURE__ */ z({
  __name: "Height",
  setup(e) {
    const n = qt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: vh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "height",
      label: "Height"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const $h = /* @__PURE__ */ et(_h, [["__scopeId", "data-v-6ddf53f3"]]), Ch = /* @__PURE__ */ z({
  __name: "MaxWidth",
  setup(e) {
    const n = qt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: hh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "max-width",
      label: "Max W"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const kh = /* @__PURE__ */ et(Ch, [["__scopeId", "data-v-839a5360"]]), wh = /* @__PURE__ */ z({
  __name: "MinWidth",
  setup(e) {
    const n = qt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: ph,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "min-width",
      label: "Min W"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const Sh = /* @__PURE__ */ et(wh, [["__scopeId", "data-v-01858b83"]]), Eh = /* @__PURE__ */ z({
  __name: "MaxHeight",
  setup(e) {
    const n = qt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: yh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "max-height",
      label: "Max H"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const Oh = /* @__PURE__ */ et(Eh, [["__scopeId", "data-v-3543e0dd"]]), xh = /* @__PURE__ */ z({
  __name: "MinHeight",
  setup(e) {
    const n = qt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: mh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (o, l) => (w(), F(Be, null, [v(tt, {
      "key-id": "min-height",
      label: "Min H"
    }), v(Wt, {
      model: ne(n)
    }, null, 8, ["model"])], 64));
  }
});
const Ph = /* @__PURE__ */ et(xh, [["__scopeId", "data-v-0ba932b2"]]), Bh = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, Ih = /* @__PURE__ */ z({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const o = Ct;
      return w(), Z(o, {
        header: "Size(大小)",
        key: "size"
      }, {
        default: Y(() => [M("div", Bh, [v(bh), v($h), v(Sh), v(Ph), v(kh), v(Oh)])]),
        _: 1
      });
    };
  }
});
const Th = /* @__PURE__ */ et(Ih, [["__scopeId", "data-v-53efd847"]]);
function zh() {
  return {
    treeData: Wp()
  };
}
const Nh = {
  class: "relative"
}, Lh = /* @__PURE__ */ z({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = y(null);
    function n(c) {
      const u = c[0];
      Ip(u);
    }
    function o(c) {
      var h;
      const u = c.target;
      if (!u || !u.classList.contains("arco-tree-node-title"))
        return;
      const f = (h = u.parentElement) == null ? void 0 : h.getAttribute("data-key");
      if (!f)
        throw new Error("Cannot find key for selected element");
      const p = parseInt(f);
      p < 0 || Rp(p);
    }
    function l(c) {
      Hp();
    }
    pe(Bp(), (c) => {
      if (c || t.value.selectAll(!1), t.value && c) {
        const u = $t(c, pl());
        if (u == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(u, !0);
      }
    });
    const a = y(!0), r = d(() => a.value ? "i-mdi-arrow-collapse-vertical" : "i-mdi-arrow-expand-vertical"), i = d(() => a.value ? Br("tree.collapse_all") : Br("tree.expand_all"));
    function s() {
      a.value = !a.value, t.value.expandAll(a.value), a.value || t.value.expandNode(-1, !a.value);
    }
    return (c, u) => {
      const f = Ev, p = dn, h = oa;
      return w(), Z(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: Y(() => [M("div", Nh, [v(f, {
          ref_key: "el",
          ref: t,
          data: c.model.treeData,
          "show-line": "",
          "block-node": "",
          onSelect: n,
          onMouseenterCapture: lt(o, ["stop"]),
          onMouseleaveCapture: lt(l, ["stop"])
        }, null, 8, ["data"]), v(p, {
          content: i.value,
          "popup-container": "body",
          style: {
            "z-index": "9999999"
          }
        }, {
          default: Y(() => [M("div", {
            class: V(["text-xl absolute top-0 right-5 cursor-pointer", r.value]),
            onClick: s
          }, null, 2)]),
          _: 1
        }, 8, ["content"])])]),
        _: 1
      });
    };
  }
});
const Vh = /* @__PURE__ */ et(Lh, [["__scopeId", "data-v-d4408ade"]]);
function Dh() {
  return {
    code: Vp()
  };
}
const Ah = /* @__PURE__ */ z({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (o, l) => {
      const a = jn, r = lp, i = Qd;
      return w(), Z(i, null, {
        default: Y(() => [v(a, null, {
          default: Y(() => l[0] || (l[0] = [He("styles:")])),
          _: 1
        }), v(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: Y(() => [He(Fe(ne(n)), 1)]),
          _: 1
        })]),
        _: 1
      });
    };
  }
}), jh = {
  class: "bg-white/30 backdrop-blur-md"
}, Fh = /* @__PURE__ */ z({
  __name: "MainPanel",
  setup(e) {
    ip(we);
    const t = d(() => !!we.value), n = Dh(), o = zh();
    return (l, a) => {
      const r = Ld, i = kn, s = Af;
      return w(), F("div", jh, [v(s, {
        "default-active-key": "element-tree"
      }, {
        default: Y(() => [v(i, {
          key: "style",
          title: "style",
          disabled: !t.value
        }, {
          default: Y(() => [v(r, {
            accordion: ""
          }, {
            default: Y(() => [v(uh), v(ah), v(nh), v(Th)]),
            _: 1
          })]),
          _: 1
        }, 8, ["disabled"]), v(i, {
          key: "element-tree",
          title: "navigator"
        }, {
          default: Y(() => [v(Vh, {
            model: ne(o)
          }, null, 8, ["model"])]),
          _: 1
        }), v(i, {
          key: "nicegui",
          title: "nicegui",
          class: "x-panel-nicegui"
        }, {
          default: Y(() => [v(Ah, {
            model: ne(n)
          }, null, 8, ["model"])]),
          _: 1
        }), v(i, {
          key: "cusStyle",
          title: "cus style"
        })]),
        _: 1
      })]);
    };
  }
});
const Mh = /* @__PURE__ */ et(Fh, [["__scopeId", "data-v-247f3e5d"]]);
function Ia() {
  const {
    width: e,
    height: t
  } = fl(), n = d(() => `0 0 ${e.value} ${t.value}`), o = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: o
  };
}
const Kh = ["viewBox"], Rh = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      viewBox: n,
      styles: o
    } = Ia(), {
      rectStyles: l,
      p1: a,
      p2: r,
      p3: i,
      p4: s,
      p5: c,
      p6: u,
      p7: f,
      p8: p
    } = t.model;
    return (h, m) => (w(), F("svg", {
      class: "vis-aiming",
      viewBox: ne(n),
      version: "1.1",
      style: de([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, ne(o)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [M("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: de(ne(l))
    }, null, 4), M("circle", ae({
      stroke: "hotpink",
      fill: "white"
    }, ne(a), {
      r: "2"
    }), null, 16), M("circle", ae({
      fill: "hotpink"
    }, ne(r), {
      r: "2"
    }), null, 16), M("circle", ae({
      stroke: "hotpink",
      fill: "white"
    }, ne(i), {
      r: "2"
    }), null, 16), M("circle", ae({
      fill: "hotpink"
    }, ne(s), {
      r: "2"
    }), null, 16), M("circle", ae({
      stroke: "hotpink",
      fill: "white"
    }, ne(c), {
      r: "2"
    }), null, 16), M("circle", ae({
      fill: "hotpink"
    }, ne(u), {
      r: "2"
    }), null, 16), M("circle", ae({
      stroke: "hotpink",
      fill: "white"
    }, ne(f), {
      r: "2"
    }), null, 16), M("circle", ae({
      fill: "hotpink"
    }, ne(p), {
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
    const t = y(null), {
      style: n
    } = _p(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), o = jp(), l = Ap();
    return (a, r) => {
      const i = jn, s = mf, c = Dn, u = kc, f = dn;
      return w(), F("div", {
        style: de([ne(n), {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [M("div", Hh, [M("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [v(s, {
        class: "h-full"
      }, {
        default: Y(() => [r[1] || (r[1] = M("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), r[2] || (r[2] = M("span", {
          class: "font-bold"
        }, "toolkit", -1)), v(i, {
          color: "green"
        }, {
          default: Y(() => [He(Fe(ne(o)), 1)]),
          _: 1
        })]),
        _: 1
      })], 512), v(f, {
        content: "apply changes"
      }, {
        default: Y(() => [v(u, {
          count: 9,
          dot: "",
          dotStyle: {
            width: "10px",
            height: "10px"
          }
        }, {
          default: Y(() => [Vt(v(c, {
            shape: "circle",
            size: "mini",
            onClick: r[0] || (r[0] = (p) => ne(Up)())
          }, {
            default: Y(() => r[3] || (r[3] = [M("div", {
              class: "i-codicon-git-stash-apply text-1xl"
            }, null, -1)])),
            _: 1
          }, 512), [[Dt, ne(Yp)]])]),
          _: 1
        })]),
        _: 1
      }), v(f, {
        content: "jump to code"
      }, {
        default: Y(() => [Vt(v(c, {
          shape: "circle",
          size: "mini",
          onClick: ne(Gp)
        }, {
          default: Y(() => r[4] || (r[4] = [M("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[Dt, ne(l)]])]),
        _: 1
      })]), oe(a.$slots, "default"), oe(a.$slots, "footer")], 4);
    };
  }
});
function qh() {
  const {
    width: e,
    height: t
  } = fl(), n = Oe(_a(it));
  Ze("scroll", n.update, !0);
  const o = d(() => it.value ? {
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
  }), l = d(() => it.value ? {
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
  }), a = d(() => it.value ? {
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
  }), r = d(() => it.value ? {
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
  }), i = d(() => it.value ? {
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
    rectStyles: o,
    topLine: l,
    rightLine: a,
    bottomLine: r,
    leftLine: i
  };
}
const Gh = ["viewBox"], Zt = "red", Uh = /* @__PURE__ */ z({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Ia(), {
      rectStyles: o,
      topLine: l,
      rightLine: a,
      bottomLine: r,
      leftLine: i
    } = qh();
    return (s, c) => (w(), F("svg", {
      class: "vis-hover",
      viewBox: ne(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: de([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none",
        "z-index": "9999999"
      }, ne(n)])
    }, [M("rect", {
      fill: "none",
      stroke: Zt,
      "stroke-width": "1",
      style: de(ne(o))
    }, null, 4), M("line", ae({
      class: "top"
    }, ne(l), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), M("line", ae({
      class: "right"
    }, ne(a), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), M("line", ae({
      class: "bottom"
    }, ne(r), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16), M("line", ae({
      class: "left"
    }, ne(i), {
      stroke: Zt,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, Gh));
  }
});
function Yh(e, t) {
  const {
    width: n
  } = fl(), {
    x: o,
    y: l
  } = $a({
    type: "client"
  }), a = d(() => {
    let s = o.value, c = l.value;
    return n.value - o.value < 10 && (s -= 10), l.value < 10 && (c += 10), {
      x: s,
      y: c
    };
  }), r = d(() => t.value ? {
    display: "block",
    left: `${a.value.x}px`,
    top: `${a.value.y}px`,
    transform: "translate(25%,-50%)"
  } : {
    display: "none"
  });
  return {
    typeName: d(() => t.value ? vl(t.value, e) : null),
    typeNameTagStyles: r
  };
}
function Zh(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: $t(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const Xh = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function zr(e, t) {
  if (!Xh.has(vl(e, t)))
    return {
      isFlex: !1,
      direction: null
    };
  const n = window.getComputedStyle(e, null), o = n.getPropertyValue("display") === "flex";
  let l = null;
  return o && (l = n.getPropertyValue("flex-direction")), {
    isFlex: o,
    direction: l
  };
}
function Nr(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function Jh(e, t) {
  function n(a, r) {
    return window.getComputedStyle(Nr(a, e), null).getPropertyValue(r);
  }
  function o(a) {
    const r = Nr(a, e);
    t.value = r;
  }
  function l(a) {
    zp(a);
  }
  return {
    queryStyle: n,
    selectTarget: o,
    onServerResetCommand: l
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
function em() {
  const e = Oe(_a(we));
  ba(we, () => {
    e.update();
  }, {
    attributes: !0
  }), Ze("scroll", e.update, !0);
  const t = d(() => we.value ? {
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
  }), n = d(() => we.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), o = d(() => we.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), l = d(() => we.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), a = d(() => we.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), r = d(() => we.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), i = d(() => we.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), s = d(() => we.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), c = d(() => we.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return sn(we), {
    rectStyles: t,
    p1: n,
    p2: o,
    p3: l,
    p4: a,
    p5: r,
    p6: i,
    p7: s,
    p8: c
  };
}
const nm = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    currentTargetContext: {},
    resource_path: {},
    elementTreeData: {},
    languageConfig: {}
  },
  emits: ["hoverChange", "selectedChange", "setCommand", "resetCommand", "jumpSourceCode", "applyCommand"],
  setup(e, {
    expose: t,
    emit: n
  }) {
    const o = e, l = n;
    function a(u) {
      const f = we.value;
      if (!f)
        return;
      const p = $t(f, o.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      l("setCommand", {
        id: p,
        commands: u
      });
    }
    function r(u) {
      const f = we.value;
      if (!f)
        return;
      const p = $t(f, o.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      l("resetCommand", {
        id: p,
        commands: u
      });
    }
    ze(async () => {
      await Qh(o.resource_path);
    }), qp({
      selectorConfig: o.selectorConfig,
      languageConfig: o.languageConfig,
      elementTreeData: o.elementTreeData,
      emitSetCommandFn: a,
      emitResetCommandFn: r,
      emitJumpSourceCodeFn: () => {
        const u = we.value;
        if (!u)
          return;
        const f = $t(u, o.selectorConfig);
        if (!f)
          throw new Error("not found selected element");
        l("jumpSourceCode", {
          id: f
        });
      },
      emitApplyCommandFn: () => {
        l("applyCommand");
      }
    }), pe(() => o.currentTargetContext, () => {
      Lp(o.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      typeNameTagStyles: i,
      typeName: s
    } = Yh(o.selectorConfig, it), c = em();
    return pe(it, (u) => {
      if (u) {
        const f = $t(u, o.selectorConfig);
        l("hoverChange", {
          id: f
        });
        return;
      }
      l("hoverChange", {
        id: null
      });
    }), pe(we, (u) => {
      const f = {
        isFlex: !1,
        direction: null
      };
      if (u) {
        const p = $t(u, o.selectorConfig), h = Zh(u, o.selectorConfig);
        let m = {
          isFlex: !1,
          direction: null
        };
        h && (m = zr(h.dom, o.selectorConfig)), l("selectedChange", {
          id: p,
          parentBoxId: h !== null ? h.id : null,
          flexInfo: zr(u, o.selectorConfig),
          parentFlexInfo: m
        });
        return;
      }
      l("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: f,
        parentFlexInfo: f
      });
    }), t(Jh(o.selectorConfig, we)), (u, f) => (w(), Z(Vr, {
      to: "body"
    }, [v(Uh), v(Rh, {
      model: ne(c),
      style: {
        "z-index": "9999999"
      }
    }, null, 8, ["model"]), v(Wh, {
      class: "non-selectable",
      style: {
        "z-index": "9999999",
        width: "350px"
      }
    }, {
      default: Y(() => [oe(u.$slots, "header"), v(Mh), oe(u.$slots, "footer")]),
      _: 3
    }), M("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: de([ne(i), {
        "z-index": "9999999"
      }])
    }, Fe(ne(s)), 5)]));
  }
});
export {
  nm as default
};
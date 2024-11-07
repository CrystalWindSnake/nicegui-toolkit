const y = Vue.ref
const Pe = Vue.reactive
const We = Vue.inject
const d = Vue.computed
const gt = Vue.getCurrentInstance
const jn = Vue.cloneVNode
const P = Vue.defineComponent
const ve = Vue.watch
const Ae = Vue.onMounted
const Qo = Vue.onUnmounted
const C = Vue.openBlock
const N = Vue.createElementBlock
const V = Vue.normalizeClass
const H = Vue.renderSlot
const re = Vue.normalizeStyle
const D = Vue.createElementVNode
const ee = Vue.resolveComponent
const J = Vue.createBlock
const pe = Vue.createCommentVNode
const Vl = Vue.toRef
const ye = Vue.toRefs
const f = Vue.createVNode
const ie = Vue.mergeProps
const Ie = Vue.createTextVNode
const qe = Vue.nextTick
const bt = Vue.provide
const Oe = Vue.Fragment
const dn = Vue.createSlots
const F = Vue.withCtx
const at = Vue.withModifiers
const ct = Vue.onUpdated
const Wt = Vue.onBeforeUnmount
const qt = Vue.readonly
const Jr = Vue.onDeactivated
const Za = Vue.Teleport
const Mn = Vue.Transition
const ht = Vue.withDirectives
const mt = Vue.vShow
const Dt = Vue.resolveDynamicComponent
const xe = Vue.toDisplayString
const yt = Vue.renderList
const Qr = Vue.TransitionGroup
const Fn = Vue.watchEffect
const fl = Vue.isVNode
const ei = Vue.Comment
const Nt = Vue.h
const el = Vue.normalizeProps
const Ya = Vue.withKeys
const Xa = Vue.createApp
const wt = Vue.toValue
const R = Vue.unref
const Kn = Vue.isRef
const ti = Vue.customRef
const ni = Vue.getCurrentScope
const oi = Vue.onScopeDispose
const Nl = Vue.mergeModels
const li = Vue.useModel
const xt = Object.prototype.toString;
function Re(e) {
  return xt.call(e) === "[object Array]";
}
function hn(e) {
  return xt.call(e) === "[object Null]";
}
function Ft(e) {
  return xt.call(e) === "[object Boolean]";
}
function De(e) {
  return xt.call(e) === "[object Object]";
}
const Ll = (e) => xt.call(e) === "[object Promise]";
function Tt(e) {
  return xt.call(e) === "[object String]";
}
function $e(e) {
  return xt.call(e) === "[object Number]" && e === e;
}
function Ke(e) {
  return e === void 0;
}
function Ue(e) {
  return typeof e == "function";
}
function ai(e) {
  return De(e) && Object.keys(e).length === 0;
}
const Ja = (e) => (e == null ? void 0 : e.$) !== void 0, It = Symbol("ArcoConfigProvider"), _n = {
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
}, ri = {
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
  calendar: _n,
  datePicker: {
    view: _n.view,
    month: _n.month,
    week: _n.week,
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
}, ii = y("zh-CN"), si = Pe({
  "zh-CN": ri
}), pl = () => {
  const e = We(It, void 0), t = d(() => {
    var l;
    return (l = e == null ? void 0 : e.locale) != null ? l : si[ii.value];
  }), n = d(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (l, ...r) => {
      const a = l.split(".");
      let i = t.value;
      for (const s of a) {
        if (!i[s])
          return l;
        i = i[s];
      }
      return Tt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var c;
        return (c = r[u]) != null ? c : s;
      }) : i;
    }
  };
};
var ui = Object.defineProperty, ci = Object.defineProperties, di = Object.getOwnPropertyDescriptors, Dl = Object.getOwnPropertySymbols, fi = Object.prototype.hasOwnProperty, pi = Object.prototype.propertyIsEnumerable, Al = (e, t, n) => t in e ? ui(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, vi = (e, t) => {
  for (var n in t || (t = {}))
    fi.call(t, n) && Al(e, n, t[n]);
  if (Dl)
    for (var n of Dl(t))
      pi.call(t, n) && Al(e, n, t[n]);
  return e;
}, hi = (e, t) => ci(e, di(t));
const mi = "A", yi = "arco", tl = "$arco", je = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : mi;
}, Me = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[tl] = hi(vi({}, (n = e.config.globalProperties[tl]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, U = (e) => {
  var t, n, o;
  const l = gt(), r = We(It, void 0), a = (o = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = l == null ? void 0 : l.appContext.config.globalProperties[tl]) == null ? void 0 : t.classPrefix) != null ? o : yi;
  return e ? `${a}-${e}` : a;
};
var Qa = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(l, r) {
      return l[0] === n ? (o = r, !0) : !1;
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
        for (var l = 0, r = this.__entries__; l < r.length; l++) {
          var a = r[l];
          n.call(o, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), nl = typeof window < "u" && typeof document < "u" && window.document === document, In = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), gi = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(In) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), bi = 2;
function _i(e, t) {
  var n = !1, o = !1, l = 0;
  function r() {
    n && (n = !1, e()), o && i();
  }
  function a() {
    gi(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - l < bi)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    l = s;
  }
  return i;
}
var $i = 20, Ci = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ki = typeof MutationObserver < "u", wi = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = _i(this.refresh.bind(this), $i);
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
      !nl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ki ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !nl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, l = Ci.some(function(r) {
        return !!~o.indexOf(r);
      });
      l && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), er = function(e, t) {
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
}, Kt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || In;
}, tr = Rn(0, 0, 0, 0);
function zn(e) {
  return parseFloat(e) || 0;
}
function jl(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, l) {
    var r = e["border-" + l + "-width"];
    return o + zn(r);
  }, 0);
}
function Si(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, l = t; o < l.length; o++) {
    var r = l[o], a = e["padding-" + r];
    n[r] = zn(a);
  }
  return n;
}
function Ei(e) {
  var t = e.getBBox();
  return Rn(0, 0, t.width, t.height);
}
function Oi(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return tr;
  var o = Kt(e).getComputedStyle(e), l = Si(o), r = l.left + l.right, a = l.top + l.bottom, i = zn(o.width), s = zn(o.height);
  if (o.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= jl(o, "left", "right") + r), Math.round(s + a) !== n && (s -= jl(o, "top", "bottom") + a)), !Bi(e)) {
    var u = Math.round(i + r) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Rn(l.left, l.top, i, s);
}
var Pi = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Kt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Kt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Bi(e) {
  return e === Kt(e).document.documentElement;
}
function xi(e) {
  return nl ? Pi(e) ? Ei(e) : Oi(e) : tr;
}
function Ti(e) {
  var t = e.x, n = e.y, o = e.width, l = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return er(a, {
    x: t,
    y: n,
    width: o,
    height: l,
    top: n,
    right: t + o,
    bottom: l + n,
    left: t
  }), a;
}
function Rn(e, t, n, o) {
  return {
    x: e,
    y: t,
    width: n,
    height: o
  };
}
var Ii = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Rn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = xi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), zi = (
  /** @class */
  function() {
    function e(t, n) {
      var o = Ti(n);
      er(this, {
        target: t,
        contentRect: o
      });
    }
    return e;
  }()
), Vi = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new Qa(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Kt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Ii(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Kt(t).Element))
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
          return new zi(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), nr = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Qa(), or = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = wi.getInstance(), o = new Vi(t, n, this);
      nr.set(this, o);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  or.prototype[e] = function() {
    var t;
    return (t = nr.get(this))[e].apply(t, arguments);
  };
});
var vl = function() {
  return typeof In.ResizeObserver < "u" ? In.ResizeObserver : or;
}(), Ml;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Ml || (Ml = {}));
var Fl;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Fl || (Fl = {}));
const Hn = (e) => !!(e && e.shapeFlag & 1), mn = (e, t) => !!(e && e.shapeFlag & 6), Ni = (e, t) => !!(e && e.shapeFlag & 8), hl = (e, t) => !!(e && e.shapeFlag & 16), lr = (e, t) => !!(e && e.shapeFlag & 32), At = (e) => {
  var t, n;
  if (e)
    for (const o of e) {
      if (Hn(o) || mn(o))
        return o;
      if (hl(o, o.children)) {
        const l = At(o.children);
        if (l)
          return l;
      } else if (lr(o, o.children)) {
        const l = (n = (t = o.children).default) == null ? void 0 : n.call(t);
        if (l) {
          const r = At(l);
          if (r)
            return r;
        }
      } else if (Re(o)) {
        const l = At(o);
        if (l)
          return l;
      }
    }
}, Li = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, ar = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (Hn(o) || mn(o)) {
        const r = Ue(t) ? t(o) : t;
        return e[n] = jn(o, r, !0), !0;
      }
      const l = ml(o);
      if (l && l.length > 0 && ar(l, t))
        return !0;
    }
  return !1;
}, ml = (e) => {
  if (hl(e, e.children))
    return e.children;
  if (Re(e))
    return e;
}, rr = (e) => {
  var t, n;
  if (Hn(e))
    return e.el;
  if (mn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const o = rr(e.component.subTree);
      if (o)
        return o;
    }
  } else {
    const o = ml(e);
    return ir(o);
  }
}, ir = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = rr(t);
      if (n)
        return n;
    }
}, Sn = (e, t = !1) => {
  var n, o;
  const l = [];
  for (const r of e ?? [])
    Hn(r) || mn(r) || t && Ni(r, r.children) ? l.push(r) : hl(r, r.children) ? l.push(...Sn(r.children, t)) : lr(r, r.children) ? l.push(...Sn((o = (n = r.children).default) == null ? void 0 : o.call(n), t)) : Re(r) && l.push(...Sn(r, t));
  return l;
}, sr = (e, t) => {
  var n;
  const o = [];
  if (mn(e, e.type))
    e.type.name === t ? e.component && o.push(e.component.uid) : (n = e.component) != null && n.subTree && o.push(...sr(e.component.subTree, t));
  else {
    const l = ml(e);
    l && o.push(...ur(l, t));
  }
  return o;
}, ur = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const o of e)
      n.push(...sr(o, t));
  return n;
};
var fn = P({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const l = y(), r = d(() => Ja(l.value) ? l.value.$el : l.value), a = (s) => {
      s && (o = new vl((u) => {
        const c = u[0];
        t("resize", c);
      }), o.observe(s));
    }, i = () => {
      o && (o.disconnect(), o = null);
    };
    return ve(r, (s) => {
      o && i(), s && a(s);
    }), Ae(() => {
      r.value && a(r.value);
    }), Qo(() => {
      i();
    }), () => {
      var s, u;
      const c = At((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? jn(c, {
        ref: l
      }, !0) : null;
    };
  }
});
const cr = typeof window > "u" ? global : window, dr = cr.requestAnimationFrame, Vn = cr.cancelAnimationFrame;
function ol(e) {
  let t = 0;
  const n = (...o) => {
    t && Vn(t), t = dr(() => {
      e(...o), t = 0;
    });
  };
  return n.cancel = () => {
    Vn(t), t = 0;
  }, n;
}
const yl = () => {
}, Di = () => {
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
}, gl = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), jt = (() => gl ? yl : (e, t, n, o = !1) => {
  e.addEventListener(t, n, o);
})(), Nn = (() => gl ? yl : (e, t, n, o = !1) => {
  e.removeEventListener(t, n, o);
})(), Ai = (e, t) => {
  var n;
  return gl ? yl() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Kl = (e, t) => {
  if (Tt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Ai(n, t);
  }
  return e;
}, ji = (e, t) => {
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
var oe = (e, t) => {
  for (const [n, o] of t)
    e[n] = o;
  return e;
};
const Mi = P({
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
function Fi(e, t, n, o, l, r) {
  return C(), N("span", {
    class: V([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [H(e.$slots, "default")], 2);
}
var Qe = /* @__PURE__ */ oe(Mi, [["render", Fi]]);
const Ki = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ri = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hi = /* @__PURE__ */ D("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Wi = [Hi];
function qi(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Wi, 14, Ri);
}
var eo = /* @__PURE__ */ oe(Ki, [["render", qi]]);
const yn = Object.assign(eo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + eo.name, eo);
  }
}), Gi = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ui = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Zi = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Yi = [Zi];
function Xi(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Yi, 14, Ui);
}
var to = /* @__PURE__ */ oe(Gi, [["render", Xi]]);
const Ji = Object.assign(to, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + to.name, to);
  }
}), Qi = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), es = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ts = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ns = [ts];
function os(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ns, 14, es);
}
var no = /* @__PURE__ */ oe(Qi, [["render", os]]);
const bl = Object.assign(no, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + no.name, no);
  }
}), ls = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), as = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rs = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), is = [rs];
function ss(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, is, 14, as);
}
var oo = /* @__PURE__ */ oe(ls, [["render", ss]]);
const fr = Object.assign(oo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + oo.name, oo);
  }
}), us = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), cs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ds = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), fs = [ds];
function ps(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, fs, 14, cs);
}
var lo = /* @__PURE__ */ oe(us, [["render", ps]]);
const pr = Object.assign(lo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + lo.name, lo);
  }
}), Rt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], vs = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), hs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ms = /* @__PURE__ */ D("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), ys = [ms];
function gs(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ys, 14, hs);
}
var ao = /* @__PURE__ */ oe(vs, [["render", gs]]);
const st = Object.assign(ao, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + ao.name, ao);
  }
}), bs = P({
  name: "FeedbackIcon",
  components: {
    IconLoading: st,
    IconCheckCircleFill: bl,
    IconExclamationCircleFill: fr,
    IconCloseCircleFill: pr
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
function _s(e, t, n, o, l, r) {
  const a = ee("icon-loading"), i = ee("icon-check-circle-fill"), s = ee("icon-exclamation-circle-fill"), u = ee("icon-close-circle-fill");
  return C(), N("span", {
    class: V(e.cls)
  }, [e.type === "validating" ? (C(), J(a, {
    key: 0
  })) : e.type === "success" ? (C(), J(i, {
    key: 1
  })) : e.type === "warning" ? (C(), J(s, {
    key: 2
  })) : e.type === "error" ? (C(), J(u, {
    key: 3
  })) : pe("v-if", !0)], 2);
}
var _l = /* @__PURE__ */ oe(bs, [["render", _s]]);
const $l = {
  key: "Enter",
  code: "Enter"
}, $s = {
  key: "Backspace",
  code: "Backspace"
};
var Cs = Object.defineProperty, Rl = Object.getOwnPropertySymbols, ks = Object.prototype.hasOwnProperty, ws = Object.prototype.propertyIsEnumerable, Hl = (e, t, n) => t in e ? Cs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ss = (e, t) => {
  for (var n in t || (t = {}))
    ks.call(t, n) && Hl(e, n, t[n]);
  if (Rl)
    for (var n of Rl(t))
      ws.call(t, n) && Hl(e, n, t[n]);
  return e;
};
const Gt = (e, t) => {
  const n = Ss({}, e);
  for (const o of t)
    o in n && delete n[o];
  return n;
};
function Cl(e, t) {
  const n = {};
  return t.forEach((o) => {
    const l = o;
    o in e && (n[l] = e[l]);
  }), n;
}
const Es = Symbol("ArcoFormItemContext"), dt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: o
} = {}) => {
  const l = o ? {} : We(Es, {}), r = d(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : l.size;
  }), a = d(() => (t == null ? void 0 : t.value) || l.disabled), i = d(() => (n == null ? void 0 : n.value) || l.error), s = Vl(l, "feedback"), u = Vl(l, "eventHandlers");
  return {
    formItemCtx: l,
    mergedSize: r,
    mergedDisabled: a,
    mergedError: i,
    feedback: s,
    eventHandlers: u
  };
}, ft = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = We(It, void 0);
  return {
    mergedSize: d(() => {
      var l, r;
      return (r = (l = e == null ? void 0 : e.value) != null ? l : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function Os(e) {
  const t = y();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: l,
      selectionEnd: r,
      value: a
    } = e.value;
    if (l == null || r == null)
      return;
    const i = a.slice(0, Math.max(0, l)), s = a.slice(Math.max(0, r));
    t.value = {
      selectionStart: l,
      selectionEnd: r,
      value: a,
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
      beforeTxt: r,
      afterTxt: a,
      selectionStart: i
    } = t.value;
    if (!r || !a || !i)
      return;
    let s = l.length;
    if (l.endsWith(a))
      s = l.length - a.length;
    else if (l.startsWith(r))
      s = r.length;
    else {
      const u = r[i - 1], c = l.indexOf(u, i - 1);
      c !== -1 && (s = c + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, o];
}
var Ps = Object.defineProperty, Wl = Object.getOwnPropertySymbols, Bs = Object.prototype.hasOwnProperty, xs = Object.prototype.propertyIsEnumerable, ql = (e, t, n) => t in e ? Ps(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Gl = (e, t) => {
  for (var n in t || (t = {}))
    Bs.call(t, n) && ql(e, n, t[n]);
  if (Wl)
    for (var n of Wl(t))
      xs.call(t, n) && ql(e, n, t[n]);
  return e;
}, rn = P({
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
      disabled: r,
      error: a,
      modelValue: i
    } = ye(e), s = U("input"), u = y(), {
      mergedSize: c,
      mergedDisabled: p,
      mergedError: v,
      feedback: h,
      eventHandlers: _
    } = dt({
      size: l,
      disabled: r,
      error: a
    }), {
      mergedSize: $
    } = ft(c), [w, L] = Os(u), x = y(e.defaultValue), E = d(() => {
      var Z;
      return (Z = e.modelValue) != null ? Z : x.value;
    });
    ve(i, (Z) => {
      (Ke(Z) || hn(Z)) && (x.value = "");
    });
    let b = E.value;
    const k = y(!1), m = d(() => e.allowClear && !e.readonly && !p.value && !!E.value), g = y(!1), j = y(""), M = (Z) => {
      var T;
      return Ue(e.wordLength) ? e.wordLength(Z) : (T = Z.length) != null ? T : 0;
    }, A = d(() => M(E.value)), O = d(() => v.value || !!(De(e.maxLength) && e.maxLength.errorOnly && A.value > q.value)), W = d(() => De(e.maxLength) && !!e.maxLength.errorOnly), q = d(() => De(e.maxLength) ? e.maxLength.length : e.maxLength), te = d(() => {
      const Z = M("a");
      return Math.floor(q.value / Z);
    }), le = (Z) => {
      var T, G;
      q.value && !W.value && M(Z) > q.value && (Z = (G = (T = e.wordSlice) == null ? void 0 : T.call(e, Z, q.value)) != null ? G : Z.slice(0, te.value)), x.value = Z, t("update:modelValue", Z);
    }, se = (Z) => {
      u.value && Z.target !== u.value && (Z.preventDefault(), u.value.focus());
    }, B = (Z, T) => {
      var G, fe;
      Z !== b && (b = Z, t("change", Z, T), (fe = (G = _.value) == null ? void 0 : G.onChange) == null || fe.call(G, T));
    }, Y = (Z) => {
      var T, G;
      k.value = !0, b = E.value, t("focus", Z), (G = (T = _.value) == null ? void 0 : T.onFocus) == null || G.call(T, Z);
    }, me = (Z) => {
      var T, G;
      k.value = !1, B(E.value, Z), t("blur", Z), (G = (T = _.value) == null ? void 0 : T.onBlur) == null || G.call(T, Z);
    }, ae = (Z) => {
      var T, G, fe;
      const {
        value: ke,
        selectionStart: Ee,
        selectionEnd: Je
      } = Z.target;
      if (Z.type === "compositionend") {
        if (g.value = !1, j.value = "", q.value && !W.value && A.value >= q.value && M(ke) > q.value && Ee === Je) {
          ce();
          return;
        }
        le(ke), t("input", ke, Z), (G = (T = _.value) == null ? void 0 : T.onInput) == null || G.call(T, Z), ce();
      } else
        g.value = !0, j.value = E.value + ((fe = Z.data) != null ? fe : "");
    }, ce = () => {
      w(), qe(() => {
        u.value && E.value !== u.value.value && (u.value.value = E.value, L());
      });
    }, Se = (Z) => {
      var T, G;
      const {
        value: fe
      } = Z.target;
      if (!g.value) {
        if (q.value && !W.value && A.value >= q.value && M(fe) > q.value && Z.inputType === "insertText") {
          ce();
          return;
        }
        le(fe), t("input", fe, Z), (G = (T = _.value) == null ? void 0 : T.onInput) == null || G.call(T, Z), ce();
      }
    }, be = (Z) => {
      le(""), B("", Z), t("clear", Z);
    }, ge = (Z) => {
      const T = Z.key || Z.code;
      !g.value && T === $l.key && (B(E.value, Z), t("pressEnter", Z));
    }, de = d(() => [`${s}-outer`, `${s}-outer-size-${$.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: p.value
    }]), Ce = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: p.value,
      [`${s}-focus`]: k.value
    }]), tt = d(() => [s, `${s}-size-${$.value}`]), Te = d(() => Gt(o, Rt)), Fe = d(() => Cl(o, Rt)), He = d(() => {
      const Z = Gl(Gl({}, Fe.value), e.inputAttrs);
      return O.value && (Z["aria-invalid"] = !0), Z;
    }), Ne = (Z) => {
      var T;
      return f("span", ie({
        class: Ce.value,
        onMousedown: se
      }, Z ? void 0 : Te.value), [n.prefix && f("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), f("input", ie({
        ref: u,
        class: tt.value,
        value: E.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: p.value,
        onInput: Se,
        onKeydown: ge,
        onFocus: Y,
        onBlur: me,
        onCompositionstart: ae,
        onCompositionupdate: ae,
        onCompositionend: ae
      }, He.value), null), m.value && f(Qe, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: be
      }, {
        default: () => [f(yn, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!h.value) && f("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [!!e.maxLength && e.showWordLimit && f("span", {
        class: `${s}-word-limit`
      }, [A.value, Ie("/"), q.value]), (T = n.suffix) == null ? void 0 : T.call(n), !!h.value && f(_l, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? f("span", ie({
        class: de.value
      }, Te.value), [n.prepend && f("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), Ne(!0), n.append && f("span", {
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
const Ts = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Is = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zs = /* @__PURE__ */ D("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Vs = [zs];
function Ns(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Vs, 14, Is);
}
var ro = /* @__PURE__ */ oe(Ts, [["render", Ns]]);
const ll = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + ro.name, ro);
  }
}), vr = Symbol("ArcoButtonGroup"), Ls = P({
  name: "Button",
  components: {
    IconLoading: st
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
    } = ye(e), l = U("btn"), r = We(vr, void 0), a = d(() => {
      var h;
      return (h = n.value) != null ? h : r == null ? void 0 : r.size;
    }), i = d(() => !!(o.value || r != null && r.disabled)), {
      mergedSize: s,
      mergedDisabled: u
    } = dt({
      size: a,
      disabled: i
    }), {
      mergedSize: c
    } = ft(s), p = d(() => {
      var h, _, $, w, L, x;
      return [l, `${l}-${(_ = (h = e.type) != null ? h : r == null ? void 0 : r.type) != null ? _ : "secondary"}`, `${l}-shape-${(w = ($ = e.shape) != null ? $ : r == null ? void 0 : r.shape) != null ? w : "square"}`, `${l}-size-${c.value}`, `${l}-status-${(x = (L = e.status) != null ? L : r == null ? void 0 : r.status) != null ? x : "normal"}`, {
        [`${l}-long`]: e.long,
        [`${l}-loading`]: e.loading,
        [`${l}-disabled`]: u.value,
        [`${l}-link`]: Tt(e.href)
      }];
    });
    return {
      prefixCls: l,
      cls: p,
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
}), Ds = ["href"], As = ["type", "disabled"];
function js(e, t, n, o, l, r) {
  const a = ee("icon-loading");
  return e.href ? (C(), N("a", {
    key: 0,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (C(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (C(), J(a, {
    key: 0,
    spin: "true"
  })) : H(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), H(e.$slots, "default")], 10, Ds)) : (C(), N("button", {
    key: 1,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (C(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (C(), J(a, {
    key: 0,
    spin: !0
  })) : H(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), H(e.$slots, "default")], 10, As));
}
var io = /* @__PURE__ */ oe(Ls, [["render", js]]);
const Ms = P({
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
      shape: r
    } = ye(e), a = U("btn-group");
    return bt(vr, Pe({
      type: t,
      size: n,
      shape: r,
      status: o,
      disabled: l
    })), {
      prefixCls: a
    };
  }
});
function Fs(e, t, n, o, l, r) {
  return C(), N("div", {
    class: V(e.prefixCls)
  }, [H(e.$slots, "default")], 2);
}
var En = /* @__PURE__ */ oe(Ms, [["render", Fs]]);
const gn = Object.assign(io, {
  Group: En,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + io.name, io), e.component(n + En.name, En);
  }
});
var so = P({
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
    } = ye(e), l = U("input-search"), {
      mergedSize: r
    } = ft(o), a = y(), i = (p) => {
      a.value.inputRef && t("search", a.value.inputRef.value, p);
    }, s = () => {
      var p;
      return f(Oe, null, [e.loading ? f(st, null, null) : f(Qe, {
        onClick: i
      }, {
        default: () => [f(ll, null, null)]
      }), (p = n.suffix) == null ? void 0 : p.call(n)]);
    }, u = () => {
      var p;
      let v = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? v = {
        default: (p = n["button-default"]) != null ? p : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : v = {
        icon: () => f(ll, null, null)
      }, f(gn, ie({
        type: "primary",
        class: `${l}-btn`,
        disabled: e.disabled,
        size: r.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), v);
    };
    return {
      inputRef: a,
      render: () => f(rn, {
        ref: a,
        class: l,
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
const Ks = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Rs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Hs = /* @__PURE__ */ D("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Ws = /* @__PURE__ */ D("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), qs = [Hs, Ws];
function Gs(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, qs, 14, Rs);
}
var uo = /* @__PURE__ */ oe(Ks, [["render", Gs]]);
const Us = Object.assign(uo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + uo.name, uo);
  }
}), Zs = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ys = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Xs = /* @__PURE__ */ D("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Js = /* @__PURE__ */ D("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Qs = [Xs, Js];
function eu(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qs, 14, Ys);
}
var co = /* @__PURE__ */ oe(Zs, [["render", eu]]);
const tu = Object.assign(co, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + co.name, co);
  }
});
function nu(e) {
  const t = y(e);
  return [t, (o) => {
    t.value = o;
  }];
}
function Ln(e, t) {
  const {
    value: n
  } = ye(t), [o, l] = nu(Ke(n.value) ? e : n.value);
  return ve(n, (a) => {
    Ke(a) && l(void 0);
  }), [d(() => Ke(n.value) ? o.value : n.value), l, o];
}
const ou = P({
  name: "InputPassword",
  components: {
    IconEye: Us,
    IconEyeInvisible: tu,
    AIconHover: Qe,
    AInput: rn
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
    } = ye(e), l = y(), r = () => {
      s(!a.value);
    }, [a, i] = Ln(o.value, Pe({
      value: n
    })), s = (u) => {
      u !== a.value && (t("visibility-change", u), t("update:visibility", u), i(u));
    };
    return {
      inputRef: l,
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
function lu(e, t, n, o, l, r) {
  const a = ee("icon-eye"), i = ee("icon-eye-invisible"), s = ee("a-icon-hover"), u = ee("a-input");
  return C(), J(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, dn({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: F(() => [H(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: F(() => [H(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: F(() => [e.invisibleButton ? (C(), J(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = at(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = at(() => {
      }, ["prevent"]))
    }, {
      default: F(() => [e.mergedVisible ? (C(), J(i, {
        key: 1
      })) : (C(), J(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : pe("v-if", !0), H(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: F(() => [H(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var fo = /* @__PURE__ */ oe(ou, [["render", lu]]);
const au = P({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: U("input-group")
    };
  }
});
function ru(e, t, n, o, l, r) {
  return C(), N("div", {
    class: V(e.prefixCls)
  }, [H(e.$slots, "default")], 2);
}
var po = /* @__PURE__ */ oe(au, [["render", ru]]);
const kl = Object.assign(rn, {
  Search: so,
  Password: fo,
  Group: po,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + rn.name, rn), e.component(n + po.name, po), e.component(n + so.name, so), e.component(n + fo.name, fo);
  }
});
var iu = Object.defineProperty, Ul = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, uu = Object.prototype.propertyIsEnumerable, Zl = (e, t, n) => t in e ? iu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, nn = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && Zl(e, n, t[n]);
  if (Ul)
    for (var n of Ul(t))
      uu.call(t, n) && Zl(e, n, t[n]);
  return e;
};
const cu = () => {
  const {
    height: e,
    width: t
  } = Di();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, Yl = (e, t) => {
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
}, du = (e) => {
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
}, $n = (e, t) => {
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
}, fu = (e, t, {
  containerRect: n,
  triggerRect: o,
  popupRect: l,
  offset: r,
  translate: a
}) => {
  const i = du(e), s = cu(), u = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + l.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + l.width)
  };
  let c = e;
  if (i === "top" && u.top < 0)
    if (o.top > l.height)
      t.top = -n.top;
    else {
      const p = on("bottom", o, l, {
        offset: r,
        translate: a
      });
      s.height - (n.top + p.top + l.height) > 0 && (c = $n(e, "bottom"), t.top = p.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - o.bottom > l.height)
      t.top = -n.top + (s.height - l.height);
    else {
      const p = on("top", o, l, {
        offset: r,
        translate: a
      });
      n.top + p.top > 0 && (c = $n(e, "top"), t.top = p.top);
    }
  if (i === "left" && u.left < 0)
    if (o.left > l.width)
      t.left = -n.left;
    else {
      const p = on("right", o, l, {
        offset: r,
        translate: a
      });
      s.width - (n.left + p.left + l.width) > 0 && (c = $n(e, "right"), t.left = p.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - o.right > l.width)
      t.left = -n.left + (s.width - l.width);
    else {
      const p = on("left", o, l, {
        offset: r,
        translate: a
      });
      n.left + p.left > 0 && (c = $n(e, "left"), t.left = p.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - l.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - l.height))), {
    popupPosition: t,
    position: c
  };
}, on = (e, t, n, {
  offset: o = 0,
  translate: l = [0, 0]
} = {}) => {
  var r;
  const a = (r = Re(l) ? l : l[e]) != null ? r : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollTop - n.height - o + a[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollTop - n.height - o + a[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollTop - n.height - o + a[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + a[0],
        top: t.scrollBottom + o + a[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + a[0],
        top: t.scrollBottom + o + a[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + a[0],
        top: t.scrollBottom + o + a[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - o + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - o + a[0],
        top: t.scrollTop + a[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - o + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    case "right":
      return {
        left: t.scrollRight + o + a[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + a[1]
      };
    case "rt":
      return {
        left: t.scrollRight + o + a[0],
        top: t.scrollTop + a[1]
      };
    case "rb":
      return {
        left: t.scrollRight + o + a[0],
        top: t.scrollBottom - n.height + a[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, pu = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, vu = (e, t, n, o, {
  offset: l = 0,
  translate: r = [0, 0],
  customStyle: a = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, u = on(e, n, o, {
    offset: l,
    translate: r
  });
  if (i) {
    const p = fu(e, u, {
      containerRect: t,
      popupRect: o,
      triggerRect: n,
      offset: l,
      translate: r
    });
    u = p.popupPosition, s = p.position;
  }
  return {
    style: nn({
      left: `${u.left}px`,
      top: `${u.top}px`
    }, a),
    position: s
  };
}, hu = (e, t, n, {
  customStyle: o = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? nn({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, o) : nn({
      left: `${r}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, o);
  }
  let l = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return l > n.height - 8 && (t.height > n.height ? l = n.height / 2 : l = n.height - 8), ["left", "lt", "lb"].includes(e) ? nn({
    top: `${l}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, o) : nn({
    top: `${l}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, o);
}, mu = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Xl = (e) => {
  var t;
  const n = [];
  let o = e;
  for (; o && o !== document.documentElement; )
    mu(o) && n.push(o), o = (t = o.parentElement) != null ? t : void 0;
  return n;
}, hr = () => {
  const e = {}, t = y(), n = () => {
    const o = ir(e.value);
    o !== t.value && (t.value = o);
  };
  return Ae(() => n()), ct(() => n()), {
    children: e,
    firstElement: t
  };
};
var al = P({
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
    } = hr();
    let r;
    const a = (s) => {
      s && (r = new vl((u) => {
        const c = u[0];
        t("resize", c);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return ve(l, (s) => {
      r && i(), s && a(s);
    }), Wt(() => {
      r && i();
    }), () => {
      var s;
      return o.value = (s = n.default) == null ? void 0 : s.call(n), o.value;
    };
  }
});
function it(e, t) {
  const n = y(e[t]);
  return ct(() => {
    const o = e[t];
    n.value !== o && (n.value = o);
  }), n;
}
const Jl = Symbol("ArcoTrigger"), yu = 1e3, gu = 5e3, bu = 1;
class _u {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || gu : Array.from(this.popupStack.popup).pop() || yu) + bu, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const vo = new _u();
function $u(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const o = y(0), l = () => {
    o.value = vo.add(e);
  }, r = () => {
    vo.delete(o.value, e);
  }, a = () => e === "dialog" ? vo.isLastDialog(o.value) : !1;
  return ve(() => t == null ? void 0 : t.value, (i) => {
    i ? l() : r();
  }, {
    immediate: !0
  }), n && (Ae(() => {
    l();
  }), Wt(() => {
    r();
  })), {
    zIndex: qt(o),
    open: l,
    close: r,
    isLastDialog: a
  };
}
const Cu = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new vl((r) => {
        const a = r[0];
        Ue(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var ku = P({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = y(!1);
    return Ae(() => n.value = !0), () => {
      var o;
      return n.value ? (o = t.default) == null ? void 0 : o.call(t) : null;
    };
  }
});
const wu = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: o
}) => {
  const l = y(e.value), r = y(), a = () => {
    const i = Kl(e.value), s = i ? e.value : n, u = i ?? (o ? document.documentElement : Kl(n));
    s !== l.value && (l.value = s), u !== r.value && (r.value = u);
  };
  return Ae(() => a()), ve(t, (i) => {
    l.value !== e.value && i && a();
  }), {
    teleportContainer: l,
    containerRef: r
  };
};
var Su = Object.defineProperty, Eu = Object.defineProperties, Ou = Object.getOwnPropertyDescriptors, Ql = Object.getOwnPropertySymbols, Pu = Object.prototype.hasOwnProperty, Bu = Object.prototype.propertyIsEnumerable, ea = (e, t, n) => t in e ? Su(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xu = (e, t) => {
  for (var n in t || (t = {}))
    Pu.call(t, n) && ea(e, n, t[n]);
  if (Ql)
    for (var n of Ql(t))
      Bu.call(t, n) && ea(e, n, t[n]);
  return e;
}, Tu = (e, t) => Eu(e, Ou(t));
const Iu = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var ho = P({
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
    } = ye(e), r = U("trigger"), a = d(() => Gt(o, Iu)), i = We(It, void 0), s = d(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = We(Jl, void 0), {
      children: p,
      firstElement: v
    } = hr(), h = y(), _ = y(e.defaultPopupVisible), $ = y(e.position), w = y({}), L = y({}), x = y({}), E = y(), b = y({
      top: 0,
      left: 0
    });
    let k = null, m = null;
    const g = d(() => {
      var S;
      return (S = e.popupVisible) != null ? S : _.value;
    }), {
      teleportContainer: j,
      containerRef: M
    } = wu({
      popupContainer: l,
      visible: g,
      documentContainer: !0
    }), {
      zIndex: A
    } = $u("popup", {
      visible: g
    });
    let O = 0, W = !1, q = !1;
    const te = () => {
      O && (window.clearTimeout(O), O = 0);
    }, le = (S) => {
      if (e.alignPoint) {
        const {
          pageX: z,
          pageY: ne
        } = S;
        b.value = {
          top: ne,
          left: z
        };
      }
    }, se = () => {
      if (!v.value || !h.value || !M.value)
        return;
      const S = M.value.getBoundingClientRect(), z = e.alignPoint ? {
        top: b.value.top,
        bottom: b.value.top,
        left: b.value.left,
        right: b.value.left,
        scrollTop: b.value.top,
        scrollBottom: b.value.top,
        scrollLeft: b.value.left,
        scrollRight: b.value.left,
        width: 0,
        height: 0
      } : Yl(v.value, S), ne = () => Yl(h.value, S), Ze = ne(), {
        style: Ge,
        position: rt
      } = vu(e.position, S, z, Ze, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (L.value = {
        transformOrigin: pu(rt)
      }), e.autoFitPopupMinWidth ? Ge.minWidth = `${z.width}px` : e.autoFitPopupWidth && (Ge.width = `${z.width}px`), $.value !== rt && ($.value = rt), w.value = Ge, e.showArrow && qe(() => {
        x.value = hu(rt, z, ne(), {
          customStyle: e.arrowStyle
        });
      });
    }, B = (S, z) => {
      if (S === g.value && O === 0)
        return;
      const ne = () => {
        _.value = S, t("update:popupVisible", S), t("popupVisibleChange", S), S && qe(() => {
          se();
        });
      };
      S || (k = null, m = null), z ? (te(), S !== g.value && (O = window.setTimeout(ne, z))) : ne();
    }, Y = (S) => {
      var z;
      (z = o.onClick) == null || z.call(o, S), !(e.disabled || g.value && !e.clickToClose) && (s.value.includes("click") ? (le(S), B(!g.value)) : s.value.includes("contextMenu") && g.value && B(!1));
    }, me = (S) => {
      var z;
      (z = o.onMouseenter) == null || z.call(o, S), !(e.disabled || !s.value.includes("hover")) && (le(S), B(!0, e.mouseEnterDelay));
    }, ae = (S) => {
      c == null || c.onMouseenter(S), me(S);
    }, ce = (S) => {
      var z;
      (z = o.onMouseleave) == null || z.call(o, S), !(e.disabled || !s.value.includes("hover")) && B(!1, e.mouseLeaveDelay);
    }, Se = (S) => {
      c == null || c.onMouseleave(S), ce(S);
    }, be = (S) => {
      var z;
      (z = o.onFocusin) == null || z.call(o, S), !(e.disabled || !s.value.includes("focus")) && B(!0, e.focusDelay);
    }, ge = (S) => {
      var z;
      (z = o.onFocusout) == null || z.call(o, S), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && B(!1);
    }, de = (S) => {
      var z;
      (z = o.onContextmenu) == null || z.call(o, S), !(e.disabled || !s.value.includes("contextMenu") || g.value && !e.clickToClose) && (le(S), B(!g.value), S.preventDefault());
    };
    bt(Jl, Pe({
      onMouseenter: ae,
      onMouseleave: Se,
      addChildRef: (S) => {
        u.add(S), c == null || c.addChildRef(S);
      },
      removeChildRef: (S) => {
        u.delete(S), c == null || c.removeChildRef(S);
      }
    }));
    const Te = () => {
      Nn(document.documentElement, "mousedown", Ne), W = !1;
    }, Fe = it(n, "content"), He = d(() => {
      var S;
      return e.hideEmpty && Li((S = Fe.value) == null ? void 0 : S.call(Fe));
    }), Ne = (S) => {
      var z, ne, Ze;
      if (!((z = v.value) != null && z.contains(S.target) || (ne = h.value) != null && ne.contains(S.target))) {
        for (const Ge of u)
          if ((Ze = Ge.value) != null && Ze.contains(S.target))
            return;
        Te(), B(!1);
      }
    }, Ye = (S, z) => {
      const [ne, Ze] = S, {
        scrollTop: Ge,
        scrollLeft: rt
      } = z;
      return Math.abs(Ge - ne) >= e.scrollToCloseDistance || Math.abs(rt - Ze) >= e.scrollToCloseDistance;
    }, Z = ol((S) => {
      if (g.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const z = S.target;
          k || (k = [z.scrollTop, z.scrollLeft]), Ye(k, z) ? B(!1) : se();
        } else
          se();
    }), T = () => {
      Nn(window, "scroll", G), q = !1;
    }, G = ol((S) => {
      const z = S.target.documentElement;
      m || (m = [z.scrollTop, z.scrollLeft]), Ye(m, z) && (B(!1), T());
    }), fe = () => {
      g.value && se();
    }, ke = () => {
      fe(), t("resize");
    }, Ee = (S) => {
      e.preventFocus && S.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Je = d(() => g.value ? e.openedClass : void 0);
    let Ve;
    ve(g, (S) => {
      if (e.clickOutsideToClose && (!S && W ? Te() : S && !W && (jt(document.documentElement, "mousedown", Ne), W = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (jt(window, "scroll", G), q = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (S) {
          Ve = Xl(v.value);
          for (const z of Ve)
            z.addEventListener("scroll", Z);
        } else if (Ve) {
          for (const z of Ve)
            z.removeEventListener("scroll", Z);
          Ve = void 0;
        }
      }
      S && (Ct.value = !0);
    }), ve(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      g.value && se();
    });
    const {
      createResizeObserver: $t,
      destroyResizeObserver: Jt
    } = Cu({
      elementRef: M,
      onResize: fe
    });
    Ae(() => {
      if ($t(), g.value && (se(), e.clickOutsideToClose && !W && (jt(document.documentElement, "mousedown", Ne), W = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ve = Xl(v.value);
        for (const S of Ve)
          S.addEventListener("scroll", Z);
      }
    }), ct(() => {
      g.value && se();
    }), Jr(() => {
      B(!1);
    }), Wt(() => {
      if (c == null || c.removeChildRef(h), Jt(), W && Te(), q && T(), Ve) {
        for (const S of Ve)
          S.removeEventListener("scroll", Z);
        Ve = void 0;
      }
    });
    const Ct = y(g.value), lt = y(!1), zt = () => {
      lt.value = !0;
    }, Qt = () => {
      lt.value = !1, g.value && t("show");
    }, I = () => {
      lt.value = !1, g.value || (Ct.value = !1, t("hide"));
    };
    return () => {
      var S, z;
      return p.value = (z = (S = n.default) == null ? void 0 : S.call(n)) != null ? z : [], ar(p.value, {
        class: Je.value,
        onClick: Y,
        onMouseenter: me,
        onMouseleave: ce,
        onFocusin: be,
        onFocusout: ge,
        onContextmenu: de
      }), f(Oe, null, [e.autoFixPosition ? f(al, {
        onResize: ke
      }, {
        default: () => [p.value]
      }) : p.value, f(ku, null, {
        default: () => [f(Za, {
          to: j.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || g.value || Ct.value) && !He.value && f(al, {
            onResize: fe
          }, {
            default: () => [f("div", ie({
              ref: h,
              class: [`${r}-popup`, `${r}-position-${$.value}`],
              style: Tu(xu({}, w.value), {
                zIndex: A.value,
                pointerEvents: lt.value ? "none" : "auto"
              }),
              "trigger-placement": $.value,
              onMouseenter: ae,
              onMouseleave: Se,
              onMousedown: Ee
            }, a.value), [f(Mn, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: zt,
              onAfterEnter: Qt,
              onBeforeLeave: zt,
              onAfterLeave: I
            }, {
              default: () => {
                var ne;
                return [ht(f("div", {
                  class: `${r}-popup-wrapper`,
                  style: L.value
                }, [f("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ne = n.content) == null ? void 0 : ne.call(n)]), e.showArrow && f("div", {
                  ref: E,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: x.value
                }, null)]), [[mt, g.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Ot = Object.assign(ho, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + ho.name, ho);
  }
}), zu = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Vu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Nu = /* @__PURE__ */ D("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), Lu = [Nu];
function Du(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Lu, 14, Vu);
}
var mo = /* @__PURE__ */ oe(zu, [["render", Du]]);
const Au = Object.assign(mo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + mo.name, mo);
  }
});
var yo = P({
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
    } = pl(), r = We(It, void 0);
    return () => {
      var a, i, s, u;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : f("div", ie({
        class: o
      }, n), [f("div", {
        class: `${o}-image`
      }, [(i = (a = t.image) == null ? void 0 : a.call(t)) != null ? i : e.imgSrc ? f("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : f(Au, null, null)]), f("div", {
        class: `${o}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || l("empty.description")])]);
    };
  }
});
const mr = Object.assign(yo, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + yo.name, yo);
  }
}), ju = 5;
var Mu = P({
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
      return f("div", {
        class: t,
        style: {
          width: e.size ? `${e.size * 7}px` : void 0,
          height: e.size ? `${e.size}px` : void 0
        }
      }, [Array(ju).fill(1).map((o, l) => f("div", {
        class: `${t}-item`,
        key: l,
        style: n
      }, null))]);
    };
  }
}), go = P({
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
    const n = U("spin"), o = We(It, void 0), l = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = At(t.icon());
        if (i)
          return jn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(Mu, {
        size: e.size
      }, null) : o != null && o.slots.loading ? o.slots.loading() : f(st, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var i, s, u;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, p = !!((i = t.tip) != null ? i : e.tip);
      return f(Oe, null, [!e.hideIcon && f("div", {
        class: `${n}-icon`,
        style: c
      }, [r()]), p && f("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => f("div", {
      class: l.value
    }, [t.default ? f(Oe, null, [t.default(), e.loading && f("div", {
      class: `${n}-mask`
    }, [f("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Fu = Object.assign(go, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + go.name, go);
  }
}), Ku = P({
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
    const n = U("scrollbar"), o = y(!1), l = y(), r = y(), a = d(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = y(0), s = y(!1), u = y(0), c = d(() => {
      var x, E;
      return {
        [a.value.size]: `${(E = (x = e.data) == null ? void 0 : x.thumbSize) != null ? E : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), p = (x) => {
      x.preventDefault(), r.value && (u.value = x[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, jt(window, "mousemove", _), jt(window, "mouseup", $), jt(window, "contextmenu", $));
    }, v = (x) => {
      var E, b, k, m;
      if (x.preventDefault(), r.value) {
        const g = h(x[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((b = (E = e.data) == null ? void 0 : E.thumbSize) != null ? b : 0) : i.value - ((m = (k = e.data) == null ? void 0 : k.thumbSize) != null ? m : 0));
        g !== i.value && (i.value = g, t("scroll", g));
      }
    }, h = (x) => x < 0 ? 0 : e.data && x > e.data.max ? e.data.max : x, _ = (x) => {
      if (l.value && r.value) {
        const E = h(x[a.value.client] - l.value.getBoundingClientRect()[a.value.direction] - u.value);
        E !== i.value && (i.value = E, t("scroll", E));
      }
    }, $ = () => {
      s.value = !1, Nn(window, "mousemove", _), Nn(window, "mouseup", $);
    }, w = (x) => {
      s.value || (x = h(x), x !== i.value && (i.value = x));
    }, L = d(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: o,
      trackRef: l,
      thumbRef: r,
      prefixCls: n,
      thumbCls: L,
      thumbStyle: c,
      handleThumbMouseDown: p,
      handleTrackClick: v,
      setOffset: w
    };
  }
});
function Ru(e, t, n, o, l, r) {
  return C(), J(Mn, null, {
    default: F(() => [D("div", {
      ref: "trackRef",
      class: V([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = at((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [D("div", {
      ref: "thumbRef",
      class: V(e.thumbCls),
      style: re(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [D("div", {
      class: V(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Hu = /* @__PURE__ */ oe(Ku, [["render", Ru]]);
const ta = 20, Cn = 15, Wu = P({
  name: "Scrollbar",
  components: {
    ResizeObserver: al,
    Thumb: Hu
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
    const n = U("scrollbar"), o = y(), l = y(), r = y(), a = y(), i = y(), s = y(!1), u = y(!1), c = d(() => s.value && !e.disableHorizontal), p = d(() => u.value && !e.disableVertical), v = y(!1), h = () => {
      var b, k, m, g, j, M;
      if (o.value) {
        const {
          clientWidth: A,
          clientHeight: O,
          offsetWidth: W,
          offsetHeight: q,
          scrollWidth: te,
          scrollHeight: le,
          scrollTop: se,
          scrollLeft: B
        } = o.value;
        s.value = te > A, u.value = le > O, v.value = c.value && p.value;
        const Y = e.type === "embed" && v.value ? W - Cn : W, me = e.type === "embed" && v.value ? q - Cn : q, ae = Math.round(Y / Math.min(te / A, Y / ta)), ce = Y - ae, Se = (te - A) / ce, be = Math.round(me / Math.min(le / O, me / ta)), ge = me - be, de = (le - O) / ge;
        if (l.value = {
          ratio: Se,
          thumbSize: ae,
          max: ce
        }, r.value = {
          ratio: de,
          thumbSize: be,
          max: ge
        }, se > 0) {
          const Ce = Math.round(se / ((k = (b = r.value) == null ? void 0 : b.ratio) != null ? k : 1));
          (m = i.value) == null || m.setOffset(Ce);
        }
        if (B > 0) {
          const Ce = Math.round(B / ((j = (g = r.value) == null ? void 0 : g.ratio) != null ? j : 1));
          (M = a.value) == null || M.setOffset(Ce);
        }
      }
    };
    Ae(() => {
      h();
    });
    const _ = () => {
      h();
    }, $ = (b) => {
      var k, m, g, j, M, A;
      if (o.value) {
        if (c.value && !e.disableHorizontal) {
          const O = Math.round(o.value.scrollLeft / ((m = (k = l.value) == null ? void 0 : k.ratio) != null ? m : 1));
          (g = a.value) == null || g.setOffset(O);
        }
        if (p.value && !e.disableVertical) {
          const O = Math.round(o.value.scrollTop / ((M = (j = r.value) == null ? void 0 : j.ratio) != null ? M : 1));
          (A = i.value) == null || A.setOffset(O);
        }
      }
      t("scroll", b);
    }, w = (b) => {
      var k, m;
      o.value && o.value.scrollTo({
        left: b * ((m = (k = l.value) == null ? void 0 : k.ratio) != null ? m : 1)
      });
    }, L = (b) => {
      var k, m;
      o.value && o.value.scrollTo({
        top: b * ((m = (k = r.value) == null ? void 0 : k.ratio) != null ? m : 1)
      });
    }, x = d(() => {
      const b = {};
      return e.type === "track" && (c.value && (b.paddingBottom = `${Cn}px`), p.value && (b.paddingRight = `${Cn}px`)), [b, e.outerStyle];
    }), E = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: v.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: E,
      style: x,
      containerRef: o,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: l,
      verticalData: r,
      isBoth: v,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: p,
      handleResize: _,
      handleScroll: $,
      handleHorizontalScroll: w,
      handleVerticalScroll: L
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, o;
      De(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((o = this.$refs.containerRef) == null || o.scrollTo(e, t));
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
function qu(e, t, n, o, l, r) {
  const a = ee("ResizeObserver"), i = ee("thumb");
  return C(), N("div", {
    class: V(e.cls),
    style: re(e.style)
  }, [f(a, {
    onResize: e.handleResize
  }, {
    default: F(() => [D("div", ie({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(a, {
      onResize: e.handleResize
    }, {
      default: F(() => [H(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (C(), J(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (C(), J(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0)], 6);
}
var bo = /* @__PURE__ */ oe(Wu, [["render", qu]]);
const Wn = Object.assign(bo, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + bo.name, bo);
  }
}), Gu = (e) => {
  const t = y(), n = () => Ja(t.value) ? t.value.$refs[e] : t.value, o = y();
  return Ae(() => {
    o.value = n();
  }), ve([t], () => {
    o.value = n();
  }), {
    componentRef: t,
    elementRef: o
  };
};
var Uu = Object.defineProperty, na = Object.getOwnPropertySymbols, Zu = Object.prototype.hasOwnProperty, Yu = Object.prototype.propertyIsEnumerable, oa = (e, t, n) => t in e ? Uu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xu = (e, t) => {
  for (var n in t || (t = {}))
    Zu.call(t, n) && oa(e, n, t[n]);
  if (na)
    for (var n of na(t))
      Yu.call(t, n) && oa(e, n, t[n]);
  return e;
};
const Ju = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return Xu({
        type: "embed"
      }, Ft(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Qu = P({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Wn,
    Empty: mr,
    Spin: Fu
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
    var o, l, r;
    const {
      scrollbar: a
    } = ye(e), i = U("select-dropdown"), s = We(It, void 0), u = (r = (l = s == null ? void 0 : (o = s.slots).empty) == null ? void 0 : l.call(o, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: c,
      elementRef: p
    } = Gu("containerRef"), {
      displayScrollbar: v,
      scrollbarProps: h
    } = Ju(a), _ = (w) => {
      const {
        scrollTop: L,
        scrollHeight: x,
        offsetHeight: E
      } = w.target;
      x - (L + E) <= e.bottomOffset && t("reachBottom", w), t("scroll", w);
    }, $ = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: $,
      wrapperRef: p,
      wrapperComRef: c,
      handleScroll: _,
      displayScrollbar: v,
      scrollbarProps: h
    };
  }
});
function ec(e, t, n, o, l, r) {
  const a = ee("spin");
  return C(), N("div", {
    class: V(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (C(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-header`)
  }, [H(e.$slots, "header")], 2)) : pe("v-if", !0), e.loading ? (C(), J(a, {
    key: 1,
    class: V(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (C(), N("div", {
    key: 2,
    class: V(`${e.prefixCls}-empty`)
  }, [H(e.$slots, "empty", {}, () => [(C(), J(Dt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : pe("v-if", !0), e.virtualList && !e.loading && !e.empty ? H(e.$slots, "virtual-list", {
    key: 3
  }) : pe("v-if", !0), e.virtualList ? pe("v-if", !0) : ht((C(), J(Dt(e.displayScrollbar ? "ScrollbarComponent" : "div"), ie({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: F(() => [D("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [H(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[mt, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (C(), N("div", {
    key: 5,
    class: V(`${e.prefixCls}-footer`)
  }, [H(e.$slots, "footer")], 2)) : pe("v-if", !0)], 2);
}
var tc = /* @__PURE__ */ oe(Qu, [["render", ec]]), la = P({
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
const yr = Symbol("ArcoCheckboxGroup");
var On = P({
  name: "Checkbox",
  components: {
    IconCheck: la,
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
      disabled: o,
      modelValue: l
    } = ye(e), r = U("checkbox"), a = y(), i = e.uninjectGroupContext ? void 0 : We(yr, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = dt({
      disabled: o
    }), p = y(e.defaultChecked), v = d(() => {
      var b;
      return s ? i == null ? void 0 : i.computedValue : (b = e.modelValue) != null ? b : p.value;
    }), h = d(() => {
      var b;
      return Re(v.value) ? v.value.includes((b = e.value) != null ? b : !0) : v.value;
    }), _ = d(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !h.value && (i == null ? void 0 : i.isMaxed)), $ = (b) => {
      b.stopPropagation();
    }, w = (b) => {
      var k, m, g, j;
      const {
        checked: M
      } = b.target;
      let A = M;
      if (Re(v.value)) {
        const O = new Set(v.value);
        M ? O.add((k = e.value) != null ? k : !0) : O.delete((m = e.value) != null ? m : !0), A = Array.from(O);
      }
      p.value = M, s && Re(A) ? i == null || i.handleChange(A, b) : (t("update:modelValue", A), t("change", A, b), (j = (g = c.value) == null ? void 0 : g.onChange) == null || j.call(g, b)), qe(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, L = d(() => [r, {
      [`${r}-checked`]: h.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: _.value
    }]), x = (b) => {
      var k, m;
      (m = (k = c.value) == null ? void 0 : k.onFocus) == null || m.call(k, b);
    }, E = (b) => {
      var k, m;
      (m = (k = c.value) == null ? void 0 : k.onBlur) == null || m.call(k, b);
    };
    return ve(l, (b) => {
      (Ke(b) || hn(b)) && (p.value = !1);
    }), ve(v, (b) => {
      var k;
      let m;
      Re(b) ? m = b.includes((k = e.value) != null ? k : !0) : m = b, p.value !== m && (p.value = m), a.value && a.value.checked !== m && (a.value.checked = m);
    }), () => {
      var b, k, m, g;
      return f("label", {
        "aria-disabled": _.value,
        class: L.value
      }, [f("input", {
        ref: a,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${r}-target`,
        disabled: _.value,
        onClick: $,
        onChange: w,
        onFocus: x,
        onBlur: E
      }, null), (g = (m = (k = n.checkbox) != null ? k : (b = i == null ? void 0 : i.slots) == null ? void 0 : b.checkbox) == null ? void 0 : m({
        checked: h.value,
        disabled: _.value
      })) != null ? g : f(Qe, {
        class: `${r}-icon-hover`,
        disabled: _.value || h.value
      }, {
        default: () => [f("div", {
          class: `${r}-icon`
        }, [h.value && f(la, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && f("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), _o = P({
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
    } = ye(e), l = U("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: a
    } = dt({
      disabled: o
    }), i = y(e.defaultValue), s = d(() => Re(e.modelValue) ? e.modelValue : i.value), u = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = d(() => {
      var _;
      return ((_ = e.options) != null ? _ : []).map(($) => Tt($) || $e($) ? {
        label: $,
        value: $
      } : $);
    });
    bt(yr, Pe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (_, $) => {
        var w, L;
        i.value = _, t("update:modelValue", _), t("change", _, $), (L = (w = a.value) == null ? void 0 : w.onChange) == null || L.call(w, $);
      }
    }));
    const v = d(() => [l, `${l}-direction-${e.direction}`]);
    ve(() => e.modelValue, (_) => {
      Re(_) ? i.value = [..._] : i.value = [];
    });
    const h = () => c.value.map((_) => {
      const $ = s.value.includes(_.value);
      return f(On, {
        key: _.value,
        value: _.value,
        disabled: _.disabled || !$ && u.value,
        indeterminate: _.indeterminate,
        modelValue: $
      }, {
        default: () => [n.label ? n.label({
          data: _
        }) : Ue(_.label) ? _.label() : _.label]
      });
    });
    return () => {
      var _;
      return f("span", {
        class: v.value
      }, [c.value.length > 0 ? h() : (_ = n.default) == null ? void 0 : _.call(n)]);
    };
  }
});
const gr = Object.assign(On, {
  Group: _o,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + On.name, On), e.component(n + _o.name, _o);
  }
}), br = Symbol("ArcoSelectContext");
var nc = Object.defineProperty, oc = Object.defineProperties, lc = Object.getOwnPropertyDescriptors, aa = Object.getOwnPropertySymbols, ac = Object.prototype.hasOwnProperty, rc = Object.prototype.propertyIsEnumerable, ra = (e, t, n) => t in e ? nc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wl = (e, t) => {
  for (var n in t || (t = {}))
    ac.call(t, n) && ra(e, n, t[n]);
  if (aa)
    for (var n of aa(t))
      rc.call(t, n) && ra(e, n, t[n]);
  return e;
}, _r = (e, t) => oc(e, lc(t));
const ic = (e) => De(e) && "isGroup" in e, $r = (e) => De(e) && "isGroup" in e, sc = (e, t = "value") => String(De(e) ? e[t] : e), pn = (e, t = "value") => De(e) ? `__arco__option__object__${e[t]}` : e || $e(e) || Tt(e) || Ft(e) ? `__arco__option__${typeof e}-${e}` : "", uc = (e) => e.has("__arco__option__string-"), cc = (e, {
  valueKey: t,
  fieldNames: n,
  origin: o,
  index: l = -1
}) => {
  var r;
  if (De(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: l,
      key: pn(i, t),
      origin: o,
      value: i,
      label: (r = e[n.label]) != null ? r : sc(i, t),
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
  return wl({
    raw: a,
    index: l,
    key: pn(e, t),
    origin: o
  }, a);
}, rl = (e, {
  valueKey: t,
  fieldNames: n,
  origin: o,
  optionInfoMap: l
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (ic(i)) {
      const s = rl((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: o,
        optionInfoMap: l
      });
      s.length > 0 && a.push(_r(wl({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = cc(i, {
        valueKey: t,
        fieldNames: n,
        origin: o
      });
      a.push(s), l.get(s.key) || l.set(s.key, s);
    }
  return a;
}, ia = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const o = (l) => {
    var r;
    const a = [];
    for (const i of l)
      if ($r(i)) {
        const s = o((r = i.options) != null ? r : []);
        s.length > 0 && a.push(_r(wl({}, i), {
          options: s
        }));
      } else
        qn(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return o(e);
}, qn = (e, {
  inputValue: t,
  filterOption: n
}) => Ue(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, dc = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Sl(e[n], t[n]))
      return !1;
  return !0;
}, fc = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let o = 0; o < n; o++)
    if (!Sl(e[o], t[o]))
      return !1;
  return !0;
}, Sl = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? dc(e, t) : n === "[object Array]" ? fc(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, pc = P({
  name: "Option",
  components: {
    Checkbox: gr
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
    } = ye(e), l = U("select-option"), r = We(br, void 0), a = gt(), i = y(), s = y(n.value);
    ve(n, (m, g) => {
      Sl(m, g) || (s.value = m);
    });
    const u = y(""), c = d(() => {
      var m, g;
      return (g = (m = e.value) != null ? m : e.label) != null ? g : u.value;
    }), p = d(() => {
      var m;
      return (m = e.label) != null ? m : u.value;
    }), v = d(() => pn(c.value, r == null ? void 0 : r.valueKey)), h = d(() => {
      var m;
      return (m = r == null ? void 0 : r.component) != null ? m : "li";
    }), _ = () => {
      var m;
      if (!e.label && i.value) {
        const g = (m = i.value.textContent) != null ? m : "";
        u.value !== g && (u.value = g);
      }
    };
    Ae(() => _()), ct(() => _());
    const $ = d(() => {
      var m;
      return (m = r == null ? void 0 : r.valueKeys.includes(v.value)) != null ? m : !1;
    }), w = d(() => (r == null ? void 0 : r.activeKey) === v.value);
    let L = y(!0);
    if (!e.internal) {
      const m = Pe({
        raw: {
          value: c,
          label: p,
          disabled: t,
          tagProps: s
        },
        ref: i,
        index: o,
        key: v,
        origin: "slot",
        value: c,
        label: p,
        disabled: t,
        tagProps: s
      });
      L = d(() => qn(m, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, m)), Wt(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const x = (m) => {
      e.disabled || r == null || r.onSelect(v.value, m);
    }, E = () => {
      e.disabled || r == null || r.setActiveKey(v.value);
    }, b = () => {
      e.disabled || r == null || r.setActiveKey();
    }, k = d(() => [l, {
      [`${l}-disabled`]: e.disabled,
      [`${l}-selected`]: $.value,
      [`${l}-active`]: w.value,
      [`${l}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: l,
      cls: k,
      selectCtx: r,
      itemRef: i,
      component: h,
      isSelected: $,
      isValid: L,
      handleClick: x,
      handleMouseEnter: E,
      handleMouseLeave: b
    };
  }
});
function vc(e, t, n, o, l, r) {
  const a = ee("checkbox");
  return ht((C(), J(Dt(e.component), {
    ref: "itemRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: F(() => [e.$slots.icon ? (C(), N("span", {
      key: 0,
      class: V(`${e.prefixCls}-icon`)
    }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (C(), J(a, {
      key: 1,
      class: V(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: F(() => [H(e.$slots, "default", {}, () => [Ie(xe(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (C(), N("span", {
      key: 2,
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "default", {}, () => [Ie(xe(e.label), 1)])], 2)), e.$slots.suffix ? (C(), N("span", {
      key: 3,
      class: V(`${e.prefixCls}-suffix`)
    }, [H(e.$slots, "suffix")], 2)) : pe("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[mt, e.isValid]]);
}
var Pn = /* @__PURE__ */ oe(pc, [["render", vc]]), hc = Object.defineProperty, mc = Object.defineProperties, yc = Object.getOwnPropertyDescriptors, sa = Object.getOwnPropertySymbols, gc = Object.prototype.hasOwnProperty, bc = Object.prototype.propertyIsEnumerable, ua = (e, t, n) => t in e ? hc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, $o = (e, t) => {
  for (var n in t || (t = {}))
    gc.call(t, n) && ua(e, n, t[n]);
  if (sa)
    for (var n of sa(t))
      bc.call(t, n) && ua(e, n, t[n]);
  return e;
}, _c = (e, t) => mc(e, yc(t));
const $c = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, Cc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: o,
  showExtraOptions: l,
  valueKey: r,
  fieldNames: a
}) => {
  const i = d(() => $o($o({}, $c), a == null ? void 0 : a.value)), s = Pe(/* @__PURE__ */ new Map()), u = d(() => Array.from(s.values()).sort((E, b) => $e(E.index) && $e(b.index) ? E.index - b.index : 0)), c = d(() => {
    var E, b;
    const k = /* @__PURE__ */ new Map();
    return {
      optionInfos: rl((E = e == null ? void 0 : e.value) != null ? E : [], {
        valueKey: (b = r == null ? void 0 : r.value) != null ? b : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: k
      }),
      optionInfoMap: k
    };
  }), p = d(() => {
    var E, b;
    const k = /* @__PURE__ */ new Map();
    return {
      optionInfos: rl((E = t == null ? void 0 : t.value) != null ? E : [], {
        valueKey: (b = r == null ? void 0 : r.value) != null ? b : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: k
      }),
      optionInfoMap: k
    };
  }), v = Pe(/* @__PURE__ */ new Map());
  ve([u, e ?? y([]), t ?? y([]), r ?? y("value")], () => {
    v.clear(), u.value.forEach((E, b) => {
      v.set(E.key, _c($o({}, E), {
        index: b
      }));
    }), c.value.optionInfoMap.forEach((E) => {
      v.has(E.key) || (E.index = v.size, v.set(E.key, E));
    }), p.value.optionInfoMap.forEach((E) => {
      v.has(E.key) || (E.index = v.size, v.set(E.key, E));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const h = d(() => {
    var E;
    const b = ia(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    });
    return ((E = l == null ? void 0 : l.value) == null || E) && b.push(...ia(p.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    })), b;
  }), _ = d(() => Array.from(v.values()).filter((E) => E.origin === "extraOptions" && (l == null ? void 0 : l.value) === !1 ? !1 : qn(E, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: o == null ? void 0 : o.value
  }))), $ = d(() => _.value.filter((E) => !E.disabled).map((E) => E.key));
  return {
    validOptions: h,
    optionInfoMap: v,
    validOptionInfos: _,
    enabledOptionKeys: $,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (E, b) => {
      s.set(E, b);
    },
    removeSlotOptionInfo: (E) => {
      s.delete(E);
    }
  };
}, kn = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, ca = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), kc = (e) => {
  const t = {};
  return e.forEach((n, o) => {
    const l = Tt(o) ? {
      key: o
    } : o;
    t[ca(l)] = n;
  }), (n) => {
    const o = ca({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), l = t[o];
    l && (n.stopPropagation(), l(n));
  };
}, wc = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: o,
  filterOption: l,
  showExtraOptions: r,
  component: a,
  valueKey: i,
  fieldNames: s,
  loading: u,
  popupVisible: c,
  valueKeys: p,
  dropdownRef: v,
  optionRefs: h,
  virtualListRef: _,
  onSelect: $,
  onPopupVisibleChange: w,
  enterToOpen: L = !0,
  defaultActiveFirstOption: x
}) => {
  const {
    validOptions: E,
    optionInfoMap: b,
    validOptionInfos: k,
    enabledOptionKeys: m,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: M
  } = Cc({
    options: t,
    extraOptions: n,
    inputValue: o,
    filterOption: l,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), A = y();
  ve(m, (le) => {
    (!A.value || !le.includes(A.value)) && (A.value = le[0]);
  });
  const O = (le) => {
    A.value = le;
  }, W = (le) => {
    const se = m.value.length;
    if (se === 0)
      return;
    if (!A.value)
      return le === "down" ? m.value[0] : m.value[se - 1];
    const B = m.value.indexOf(A.value), Y = (se + B + (le === "up" ? -1 : 1)) % se;
    return m.value[Y];
  }, q = (le) => {
    var se, B;
    _ != null && _.value && _.value.scrollTo({
      key: le
    });
    const Y = b.get(le), me = (se = v == null ? void 0 : v.value) == null ? void 0 : se.wrapperRef, ae = (B = h == null ? void 0 : h.value[le]) != null ? B : Y == null ? void 0 : Y.ref;
    if (!me || !ae || me.scrollHeight === me.offsetHeight)
      return;
    const ce = ji(ae, me), Se = me.scrollTop;
    ce.top < 0 ? me.scrollTo(0, Se + ce.top) : ce.bottom < 0 && me.scrollTo(0, Se - ce.bottom);
  };
  ve(c, (le) => {
    var se;
    if (le) {
      const B = p.value[p.value.length - 1];
      let Y = (se = x == null ? void 0 : x.value) == null || se ? m.value[0] : void 0;
      m.value.includes(B) && (Y = B), Y !== A.value && (A.value = Y), qe(() => {
        A.value && q(A.value);
      });
    }
  });
  const te = kc(/* @__PURE__ */ new Map([[kn.ENTER, (le) => {
    !(u != null && u.value) && !le.isComposing && (c.value ? A.value && ($(A.value, le), le.preventDefault()) : L && (w(!0), le.preventDefault()));
  }], [kn.ESC, (le) => {
    c.value && (w(!1), le.preventDefault());
  }], [kn.ARROW_DOWN, (le) => {
    if (c.value) {
      const se = W("down");
      se && (A.value = se, q(se)), le.preventDefault();
    }
  }], [kn.ARROW_UP, (le) => {
    if (c.value) {
      const se = W("up");
      se && (A.value = se, q(se)), le.preventDefault();
    }
  }]]));
  return bt(br, Pe({
    multiple: e,
    valueKey: i,
    inputValue: o,
    filterOption: l,
    component: a,
    valueKeys: p,
    activeKey: A,
    setActiveKey: O,
    onSelect: $,
    getNextSlotOptionIndex: g,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: M
  })), {
    validOptions: E,
    optionInfoMap: b,
    validOptionInfos: k,
    enabledOptionKeys: m,
    activeKey: A,
    setActiveKey: O,
    addSlotOptionInfo: j,
    removeSlotOptionInfo: M,
    getNextActiveKey: W,
    scrollIntoView: q,
    handleKeyDown: te
  };
}, Sc = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: o,
  buffer: l
}) => {
  const r = y(0), a = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = y(0), u = d(() => {
    const g = s.value + l.value * 3;
    return g > i.value ? i.value : g;
  }), c = d(() => {
    const g = i.value - l.value * 3;
    return g < 0 ? 0 : g;
  }), p = (g) => {
    g < 0 ? s.value = 0 : g > c.value ? s.value = c.value : s.value = g;
  }, v = y(n.value), h = d(() => o.value !== 30 ? o.value : r.value || o.value), _ = (g, j) => {
    a.set(g, j);
  }, $ = (g) => {
    var j;
    if (v.value)
      return h.value;
    const M = e.value[g];
    return (j = a.get(M)) != null ? j : h.value;
  }, w = (g) => a.has(g);
  Ae(() => {
    const g = Array.from(a.values()).reduce((j, M) => j + M, 0);
    g > 0 && (r.value = g / a.size);
  });
  const L = (g) => v.value ? h.value * g : x(0, g), x = (g, j) => {
    let M = 0;
    for (let A = g; A < j; A++)
      M += $(A);
    return M;
  }, E = d(() => v.value ? h.value * s.value : x(0, s.value)), b = (g) => {
    const j = g >= E.value;
    let M = Math.abs(g - E.value);
    const A = j ? s.value : s.value - 1;
    let O = 0;
    for (; M > 0; )
      M -= $(A + O), j ? O++ : O--;
    return O;
  }, k = (g) => {
    const j = b(g), M = s.value + j - l.value;
    return M < 0 ? 0 : M > c.value ? c.value : M;
  }, m = d(() => v.value ? h.value * (i.value - u.value) : x(u.value, i.value));
  return {
    frontPadding: E,
    behindPadding: m,
    start: s,
    end: u,
    getStartByScroll: k,
    setItemSize: _,
    hasItemSize: w,
    setStart: p,
    getScrollOffset: L
  };
};
var Ec = P({
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
    const o = (n = gt()) == null ? void 0 : n.vnode.key, l = y(), r = () => {
      var a, i, s, u;
      const c = (i = (a = l.value) == null ? void 0 : a.$el) != null ? i : l.value, p = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      p && e.setItemSize(o, p);
    };
    return Ae(() => r()), Wt(() => r()), () => {
      var a;
      const i = At((a = t.default) == null ? void 0 : a.call(t));
      return i ? jn(i, {
        ref: l
      }, !0) : null;
    };
  }
}), Oc = Object.defineProperty, da = Object.getOwnPropertySymbols, Pc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, fa = (e, t, n) => t in e ? Oc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xc = (e, t) => {
  for (var n in t || (t = {}))
    Pc.call(t, n) && fa(e, n, t[n]);
  if (da)
    for (var n of da(t))
      Bc.call(t, n) && fa(e, n, t[n]);
  return e;
};
const Tc = P({
  name: "VirtualList",
  components: {
    VirtualListItem: Ec
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
      estimatedSize: r,
      buffer: a,
      height: i
    } = ye(e), s = U("virtual-list"), u = d(() => De(e.component) ? xc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = y(), p = y(), v = d(() => ({
      height: $e(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((A, O) => {
      var W;
      return (W = A[o.value]) != null ? W : O;
    })), {
      frontPadding: _,
      behindPadding: $,
      start: w,
      end: L,
      getStartByScroll: x,
      setItemSize: E,
      hasItemSize: b,
      setStart: k,
      getScrollOffset: m
    } = Sc({
      dataKeys: h,
      contentRef: p,
      fixedSize: l,
      estimatedSize: r,
      buffer: a
    }), g = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(w.value, L.value)), j = (A) => {
      const {
        scrollTop: O,
        scrollHeight: W,
        offsetHeight: q
      } = A.target, te = x(O);
      te !== w.value && (k(te), qe(() => {
        M(O);
      })), t("scroll", A), Math.floor(W - (O + q)) <= 0 && t("reachBottom", A);
    }, M = (A) => {
      var O, W;
      if (c.value)
        if ($e(A))
          c.value.scrollTop = A;
        else {
          const q = (W = A.index) != null ? W : h.value.indexOf((O = A.key) != null ? O : "");
          k(q - a.value), c.value.scrollTop = m(q), qe(() => {
            if (c.value) {
              const te = m(q);
              te !== c.value.scrollTop && (c.value.scrollTop = te);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: c,
      contentRef: p,
      frontPadding: _,
      currentList: g,
      behindPadding: $,
      onScroll: j,
      setItemSize: E,
      hasItemSize: b,
      start: w,
      scrollTo: M,
      style: v,
      mergedComponent: u
    };
  }
});
function Ic(e, t, n, o, l, r) {
  const a = ee("VirtualListItem");
  return C(), J(Dt(e.mergedComponent.container), {
    ref: "containerRef",
    class: V(e.prefixCls),
    style: re(e.style),
    onScroll: e.onScroll
  }, {
    default: F(() => [(C(), J(Dt(e.mergedComponent.list), ie(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: F(() => [(C(), J(Dt(e.mergedComponent.content), ie({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: F(() => [(C(!0), N(Oe, null, yt(e.currentList, (i, s) => {
          var u;
          return C(), J(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: F(() => [H(e.$slots, "item", {
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
var Cr = /* @__PURE__ */ oe(Tc, [["render", Ic]]);
const zc = P({
  name: "Popover",
  components: {
    Trigger: Ot
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
    }), r = (s) => {
      o.value = s, t("update:popupVisible", s), t("popupVisibleChange", s);
    }, a = d(() => [`${n}-popup-content`, e.contentClass]), i = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      computedPopupVisible: l,
      contentCls: a,
      arrowCls: i,
      handlePopupVisibleChange: r
    };
  }
});
function Vc(e, t, n, o, l, r) {
  const a = ee("trigger");
  return C(), J(a, {
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
    content: F(() => [D("div", {
      class: V(`${e.prefixCls}-title`)
    }, [H(e.$slots, "title", {}, () => [Ie(xe(e.title), 1)])], 2), D("div", {
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "content", {}, () => [Ie(xe(e.content), 1)])], 2)]),
    default: F(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Co = /* @__PURE__ */ oe(zc, [["render", Vc]]);
const Nc = Object.assign(Co, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Co.name, Co);
  }
});
var Lc = Object.defineProperty, pa = Object.getOwnPropertySymbols, Dc = Object.prototype.hasOwnProperty, Ac = Object.prototype.propertyIsEnumerable, va = (e, t, n) => t in e ? Lc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ko = (e, t) => {
  for (var n in t || (t = {}))
    Dc.call(t, n) && va(e, n, t[n]);
  if (pa)
    for (var n of pa(t))
      Ac.call(t, n) && va(e, n, t[n]);
  return e;
};
const jc = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Mc = ["normal", "processing", "success", "warning", "danger"];
var wo = P({
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
      validator: (e) => Mc.includes(e)
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
      offset: r,
      text: a,
      dot: i,
      maxCount: s,
      count: u
    } = ye(e), c = U("badge"), p = Fc(c, n == null ? void 0 : n.value, t == null ? void 0 : t.default), v = d(() => {
      const _ = ko({}, (l == null ? void 0 : l.value) || {}), [$, w] = (r == null ? void 0 : r.value) || [];
      $ && (_.marginRight = `${-$}px`), w && (_.marginTop = `${w}px`);
      const L = !(o != null && o.value) || jc.includes(o == null ? void 0 : o.value) ? {} : {
        backgroundColor: o.value
      };
      return {
        mergedStyle: ko(ko({}, L), _),
        computedDotStyle: _,
        computedColorStyle: L
      };
    }), h = () => {
      const _ = a == null ? void 0 : a.value, $ = o == null ? void 0 : o.value, w = n == null ? void 0 : n.value, L = i == null ? void 0 : i.value, x = Number(u == null ? void 0 : u.value), E = (u == null ? void 0 : u.value) != null, {
        computedDotStyle: b,
        mergedStyle: k
      } = v.value;
      return t.content ? f("span", {
        class: `${c}-custom-dot`,
        style: b
      }, [t.content()]) : _ && !$ && !w ? f("span", {
        class: `${c}-text`,
        style: b
      }, [_]) : w || $ && !E ? f("span", {
        class: `${c}-status-wrapper`
      }, [f("span", {
        class: [`${c}-status-dot`, {
          [`${c}-status-${w}`]: w,
          [`${c}-color-${$}`]: $
        }],
        style: k
      }, null), _ && f("span", {
        class: `${c}-status-text`
      }, [_])]) : (L || $) && x > 0 ? f("span", {
        class: [`${c}-dot`, {
          [`${c}-color-${$}`]: $
        }],
        style: k
      }, null) : x === 0 ? null : f("span", {
        class: `${c}-number`,
        style: k
      }, [f("span", null, [s.value && x > s.value ? `${s.value}+` : x])]);
    };
    return () => f("span", {
      class: p.value
    }, [t.default && t.default(), h()]);
  }
});
const Fc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), Kc = Object.assign(wo, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + wo.name, wo);
  }
}), Rc = P({
  name: "IconMore",
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
    const n = U("icon"), o = d(() => [n, `${n}-more`, {
      [`${n}-spin`]: e.spin
    }]), l = d(() => {
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Hc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wc = /* @__PURE__ */ D("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), qc = /* @__PURE__ */ D("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"
}, null, -1), Gc = [Wc, qc];
function Uc(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Gc, 14, Hc);
}
var So = /* @__PURE__ */ oe(Rc, [["render", Uc]]);
const Zc = Object.assign(So, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + So.name, So);
  }
}), Yc = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Xc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Jc = /* @__PURE__ */ D("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Qc = [Jc];
function ed(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qc, 14, Xc);
}
var Eo = /* @__PURE__ */ oe(Yc, [["render", ed]]);
const kr = Object.assign(Eo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Eo.name, Eo);
  }
}), El = Symbol("ArcoDropdown"), td = P({
  name: "DropdownPanel",
  components: {
    Scrollbar: Wn,
    Empty: mr
  },
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    isEmpty: {
      type: Boolean,
      default: !1
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const o = U("dropdown"), l = We(El, {}), r = y(), a = (u) => {
      const {
        scrollTop: c,
        scrollHeight: p,
        offsetHeight: v
      } = u.target;
      p - (c + v) <= e.bottomOffset && t("reachBottom", u), t("scroll", u);
    }, i = d(() => {
      if ($e(l.popupMaxHeight))
        return {
          maxHeight: `${l.popupMaxHeight}px`
        };
      if (!l.popupMaxHeight)
        return {
          maxHeight: "none",
          overflowY: "hidden"
        };
    }), s = d(() => [o, {
      [`${o}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: o,
      cls: s,
      style: i,
      wrapperRef: r,
      handleScroll: a
    };
  }
});
function nd(e, t, n, o, l, r) {
  const a = ee("empty"), i = ee("Scrollbar");
  return C(), N("div", {
    class: V(e.cls)
  }, [e.isEmpty ? (C(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-empty`)
  }, [H(e.$slots, "empty", {}, () => [f(a)])], 2)) : pe("v-if", !0), f(i, {
    ref: "wrapperRef",
    class: V(`${e.prefixCls}-list-wrapper`),
    style: re(e.style),
    onScroll: e.handleScroll
  }, {
    default: F(() => [D("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [H(e.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class", "style", "onScroll"]), e.$slots.footer && !e.isEmpty ? (C(), N("div", {
    key: 1,
    class: V(`${e.prefixCls}-footer`)
  }, [H(e.$slots, "footer")], 2)) : pe("v-if", !0)], 2);
}
var wr = /* @__PURE__ */ oe(td, [["render", nd]]);
const Gn = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var o;
  const l = y((o = t == null ? void 0 : t.value) != null ? o : !1), r = d(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : l.value;
  }), a = (i) => {
    i !== r.value && (l.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return ve(r, (i) => {
    l.value !== i && (l.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: a
  };
}, od = P({
  name: "Dropdown",
  components: {
    Trigger: Ot,
    DropdownPanel: wr
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
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "bottom"
    },
    popupContainer: {
      type: [String, Object]
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: !0
    },
    hideOnSelect: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    select: (e, t) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      defaultPopupVisible: n,
      popupVisible: o,
      popupMaxHeight: l
    } = ye(e), r = U("dropdown"), {
      computedPopupVisible: a,
      handlePopupVisibleChange: i
    } = Gn({
      defaultPopupVisible: n,
      popupVisible: o,
      emit: t
    });
    return bt(El, Pe({
      popupMaxHeight: l,
      onOptionClick: (u, c) => {
        t("select", u, c), e.hideOnSelect && i(!1);
      }
    })), {
      prefixCls: r,
      computedPopupVisible: a,
      handlePopupVisibleChange: i
    };
  }
});
function ld(e, t, n, o, l, r) {
  const a = ee("DropdownPanel"), i = ee("Trigger");
  return C(), J(i, {
    "popup-visible": e.computedPopupVisible,
    "animation-name": "slide-dynamic-origin",
    "auto-fit-transform-origin": "",
    trigger: e.trigger,
    position: e.position,
    "popup-offset": 4,
    "popup-container": e.popupContainer,
    "opened-class": `${e.prefixCls}-open`,
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: F(() => [f(a, null, dn({
      default: F(() => [H(e.$slots, "content")]),
      _: 2
    }, [e.$slots.footer ? {
      name: "footer",
      fn: F(() => [H(e.$slots, "footer")])
    } : void 0]), 1024)]),
    default: F(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "popup-container", "opened-class", "onPopupVisibleChange"]);
}
var Bn = /* @__PURE__ */ oe(od, [["render", ld]]);
const ad = P({
  name: "Doption",
  props: {
    value: {
      type: [String, Number, Object]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: Boolean,
    uninjectContext: Boolean
  },
  emits: {
    click: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const n = U("dropdown-option"), o = y(), l = d(() => {
      var s, u, c;
      return (c = (u = e.value) != null ? u : (s = o.value) == null ? void 0 : s.textContent) != null ? c : void 0;
    }), r = e.uninjectContext ? void 0 : We(El, void 0), a = (s) => {
      e.disabled || (t("click", s), r == null || r.onOptionClick(l.value, s));
    }, i = d(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-active`]: e.active
    }]);
    return {
      prefixCls: n,
      cls: i,
      liRef: o,
      handleClick: a
    };
  }
});
function rd(e, t, n, o, l, r) {
  return C(), N("li", {
    ref: "liRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [e.$slots.icon ? (C(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), D("span", {
    class: V(`${e.prefixCls}-content`)
  }, [H(e.$slots, "default")], 2), e.$slots.suffix ? (C(), N("span", {
    key: 1,
    class: V(`${e.prefixCls}-suffix`)
  }, [H(e.$slots, "suffix")], 2)) : pe("v-if", !0)], 2);
}
var sn = /* @__PURE__ */ oe(ad, [["render", rd]]);
const id = P({
  name: "Dgroup",
  props: {
    title: String
  },
  setup() {
    return {
      prefixCls: U("dropdown-group")
    };
  }
});
function sd(e, t, n, o, l, r) {
  return C(), N(Oe, null, [D("li", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "title", {}, () => [Ie(xe(e.title), 1)])], 2), H(e.$slots, "default")], 64);
}
var Oo = /* @__PURE__ */ oe(id, [["render", sd]]);
const ud = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), cd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], dd = /* @__PURE__ */ D("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), fd = [dd];
function pd(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, fd, 14, cd);
}
var Po = /* @__PURE__ */ oe(ud, [["render", pd]]);
const Sr = Object.assign(Po, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Po.name, Po);
  }
}), vd = P({
  name: "Dsubmenu",
  components: {
    Trigger: Ot,
    DropdownPanel: wr,
    DropdownOption: sn,
    IconRight: Sr
  },
  props: {
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "rt"
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: !1
    },
    optionProps: {
      type: Object
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      defaultPopupVisible: n,
      popupVisible: o
    } = ye(e), l = U("dropdown"), {
      computedPopupVisible: r,
      handlePopupVisibleChange: a
    } = Gn({
      defaultPopupVisible: n,
      popupVisible: o,
      emit: t
    });
    return {
      prefixCls: l,
      computedPopupVisible: r,
      handlePopupVisibleChange: a
    };
  }
});
function hd(e, t, n, o, l, r) {
  const a = ee("IconRight"), i = ee("dropdown-option"), s = ee("dropdown-panel"), u = ee("Trigger");
  return C(), J(u, {
    "popup-visible": e.computedPopupVisible,
    trigger: e.trigger,
    position: e.position,
    disabled: e.disabled,
    "popup-offset": 4,
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: F(() => [f(s, {
      class: V(`${e.prefixCls}-submenu`)
    }, dn({
      default: F(() => [H(e.$slots, "content")]),
      _: 2
    }, [e.$slots.footer ? {
      name: "footer",
      fn: F(() => [H(e.$slots, "footer")])
    } : void 0]), 1032, ["class"])]),
    default: F(() => [f(i, ie(e.optionProps, {
      active: e.computedPopupVisible,
      "uninject-context": ""
    }), dn({
      suffix: F(() => [H(e.$slots, "suffix", {}, () => [f(a)])]),
      default: F(() => [H(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: F(() => [H(e.$slots, "icon")])
    } : void 0]), 1040, ["active"])]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "disabled", "onPopupVisibleChange"]);
}
var Bo = /* @__PURE__ */ oe(vd, [["render", hd]]);
const md = P({
  name: "DropdownButton",
  components: {
    IconMore: Zc,
    Button: gn,
    ButtonGroup: En,
    Dropdown: Bn
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
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "br"
    },
    popupContainer: {
      type: [String, Object]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    buttonProps: {
      type: Object
    },
    hideOnSelect: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    "update:popupVisible": (e) => !0,
    popupVisibleChange: (e) => !0,
    click: (e) => !0,
    select: (e, t) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      defaultPopupVisible: n,
      popupVisible: o
    } = ye(e), l = U("dropdown"), {
      computedPopupVisible: r,
      handlePopupVisibleChange: a
    } = Gn({
      defaultPopupVisible: n,
      popupVisible: o,
      emit: t
    });
    return {
      prefixCls: l,
      computedPopupVisible: r,
      handleClick: (u) => {
        t("click", u);
      },
      handleSelect: (u, c) => {
        t("select", u, c);
      },
      handlePopupVisibleChange: a
    };
  }
});
function yd(e, t, n, o, l, r) {
  const a = ee("Button"), i = ee("IconMore"), s = ee("Dropdown"), u = ee("ButtonGroup");
  return C(), J(u, null, {
    default: F(() => [f(a, ie({
      size: e.size,
      type: e.type,
      disabled: e.disabled
    }, e.buttonProps, {
      onClick: e.handleClick
    }), {
      default: F(() => [H(e.$slots, "default")]),
      _: 3
    }, 16, ["size", "type", "disabled", "onClick"]), f(s, {
      "popup-visible": e.computedPopupVisible,
      trigger: e.trigger,
      position: e.position,
      "popup-container": e.popupContainer,
      "hide-on-select": e.hideOnSelect,
      onSelect: e.handleSelect,
      onPopupVisibleChange: e.handlePopupVisibleChange
    }, {
      content: F(() => [H(e.$slots, "content")]),
      default: F(() => [f(a, {
        size: e.size,
        type: e.type,
        disabled: e.disabled
      }, {
        icon: F(() => [H(e.$slots, "icon", {
          popupVisible: e.computedPopupVisible
        }, () => [f(i)])]),
        _: 3
      }, 8, ["size", "type", "disabled"])]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "popup-container", "hide-on-select", "onSelect", "onPopupVisibleChange"])]),
    _: 3
  });
}
var xo = /* @__PURE__ */ oe(md, [["render", yd]]);
const gd = Object.assign(Bn, {
  Option: sn,
  Group: Oo,
  Submenu: Bo,
  Button: xo,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Bn.name, Bn), e.component(n + sn.name, sn), e.component(n + Oo.name, Oo), e.component(n + Bo.name, Bo), e.component(n + xo.name, xo);
  }
}), bd = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: o = "input",
  updateEventName: l = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = y(), s = y((a = e == null ? void 0 : e.value) != null ? a : ""), u = y(!1), c = y(!1), p = y("");
  let v;
  const h = d(() => {
    var m;
    return (m = t == null ? void 0 : t.value) != null ? m : s.value;
  }), _ = (m, g) => {
    s.value = m, n(l, m), n(o, m, g);
  }, $ = (m) => {
    const {
      value: g
    } = m.target;
    c.value || (_(g, m), qe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, w = (m) => {
    o === "input" && h.value !== v && (v = h.value, n("change", h.value, m));
  }, L = (m) => {
    var g;
    const {
      value: j
    } = m.target;
    m.type === "compositionend" ? (c.value = !1, p.value = "", _(j, m), qe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (c.value = !0, p.value = h.value + ((g = m.data) != null ? g : ""));
  }, x = (m) => {
    var g, j;
    u.value = !0, v = h.value, n("focus", m), (j = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onFocus) == null || j.call(g, m);
  }, E = (m) => {
    var g, j;
    u.value = !1, n("blur", m), (j = (g = r == null ? void 0 : r.value) == null ? void 0 : g.onBlur) == null || j.call(g, m), w(m);
  }, b = (m) => {
    const g = m.key || m.code;
    !c.value && g === $l.key && (n("pressEnter", m), w(m));
  }, k = (m) => {
    i.value && m.target !== i.value && (m.preventDefault(), i.value.focus());
  };
  return ve(h, (m) => {
    i.value && m !== i.value.value && (i.value.value = m);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: p,
    computedValue: h,
    handleInput: $,
    handleComposition: L,
    handleFocus: x,
    handleBlur: E,
    handleKeyDown: b,
    handleMousedown: k
  };
};
var _d = P({
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
      size: r,
      disabled: a,
      error: i,
      inputValue: s,
      uninjectFormItemContext: u
    } = ye(e), c = (l = e.baseCls) != null ? l : U("input-label"), {
      mergedSize: p,
      mergedDisabled: v,
      mergedError: h,
      eventHandlers: _
    } = dt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: $
    } = ft(p), {
      inputRef: w,
      _focused: L,
      computedValue: x,
      handleInput: E,
      handleComposition: b,
      handleFocus: k,
      handleBlur: m,
      handleMousedown: g
    } = bd({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: _
    }), j = d(() => {
      var B;
      return (B = e.focused) != null ? B : L.value;
    }), M = d(() => e.enabledInput && L.value || !e.modelValue), A = () => {
      var B, Y;
      return e.modelValue ? (Y = (B = e.formatLabel) == null ? void 0 : B.call(e, e.modelValue)) != null ? Y : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? A() : e.placeholder), W = () => {
      var B, Y;
      return e.modelValue ? (Y = (B = o.default) == null ? void 0 : B.call(o, {
        data: e.modelValue
      })) != null ? Y : A() : null;
    }, q = d(() => [c, `${c}-size-${$.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: j.value,
      [`${c}-disabled`]: v.value,
      [`${c}-error`]: h.value
    }]), te = d(() => Gt(t, Rt)), le = d(() => Cl(t, Rt));
    return {
      inputRef: w,
      render: () => f("span", ie(te.value, {
        class: q.value,
        title: A(),
        onMousedown: g
      }), [o.prefix && f("span", {
        class: `${c}-prefix`
      }, [o.prefix()]), f("input", ie(le.value, {
        ref: w,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !M.value
        }],
        value: x.value,
        readonly: !e.enabledInput,
        placeholder: O.value,
        disabled: v.value,
        onInput: E,
        onFocus: k,
        onBlur: m,
        onCompositionstart: b,
        onCompositionupdate: b,
        onCompositionend: b
      }), null), f("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: M.value
        }]
      }, [W()]), o.suffix && f("span", {
        class: `${c}-suffix`
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
}), $d = Object.defineProperty, ha = Object.getOwnPropertySymbols, Cd = Object.prototype.hasOwnProperty, kd = Object.prototype.propertyIsEnumerable, ma = (e, t, n) => t in e ? $d(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wd = (e, t) => {
  for (var n in t || (t = {}))
    Cd.call(t, n) && ma(e, n, t[n]);
  if (ha)
    for (var n of ha(t))
      kd.call(t, n) && ma(e, n, t[n]);
  return e;
};
const Sd = (e, t) => {
  const n = [];
  for (const o of e)
    if (De(o))
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
      n.push(wd({
        raw: l
      }, l));
    }
  return n;
}, ya = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Ed = P({
  name: "Tag",
  components: {
    IconHover: Qe,
    IconClose: yn,
    IconLoading: st
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
    } = ye(e), o = U("tag"), l = d(() => e.color && ya.includes(e.color)), r = d(() => e.color && !ya.includes(e.color)), a = y(e.defaultVisible), i = y(e.defaultChecked), s = d(() => {
      var w;
      return (w = e.visible) != null ? w : a.value;
    }), u = d(() => {
      var w;
      return e.checkable ? (w = e.checked) != null ? w : i.value : !0;
    }), {
      mergedSize: c
    } = ft(n), p = d(() => c.value === "mini" ? "small" : c.value), v = (w) => {
      a.value = !1, t("update:visible", !1), t("close", w);
    }, h = (w) => {
      if (e.checkable) {
        const L = !u.value;
        i.value = L, t("update:checked", L), t("check", L, w);
      }
    }, _ = d(() => [o, `${o}-size-${p.value}`, {
      [`${o}-loading`]: e.loading,
      [`${o}-hide`]: !s.value,
      [`${o}-${e.color}`]: l.value,
      [`${o}-bordered`]: e.bordered,
      [`${o}-checkable`]: e.checkable,
      [`${o}-checked`]: u.value,
      [`${o}-custom-color`]: r.value
    }]), $ = d(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: o,
      cls: _,
      style: $,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: v
    };
  }
});
function Od(e, t, n, o, l, r) {
  const a = ee("icon-close"), i = ee("icon-hover"), s = ee("icon-loading");
  return e.computedVisible ? (C(), N("span", {
    key: 0,
    class: V(e.cls),
    style: re(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? (C(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), e.nowrap ? (C(), N("span", {
    key: 1,
    class: V(`${e.prefixCls}-text`)
  }, [H(e.$slots, "default")], 2)) : H(e.$slots, "default", {
    key: 2
  }), e.closable ? (C(), J(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleClose, ["stop"])
  }, {
    default: F(() => [H(e.$slots, "close-icon", {}, () => [f(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : pe("v-if", !0), e.loading ? (C(), N("span", {
    key: 4,
    class: V(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : pe("v-if", !0)], 6)) : pe("v-if", !0);
}
var To = /* @__PURE__ */ oe(Ed, [["render", Od]]);
const Un = Object.assign(To, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + To.name, To);
  }
});
var Pd = Object.defineProperty, ga = Object.getOwnPropertySymbols, Bd = Object.prototype.hasOwnProperty, xd = Object.prototype.propertyIsEnumerable, ba = (e, t, n) => t in e ? Pd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wn = (e, t) => {
  for (var n in t || (t = {}))
    Bd.call(t, n) && ba(e, n, t[n]);
  if (ga)
    for (var n of ga(t))
      xd.call(t, n) && ba(e, n, t[n]);
  return e;
};
const Td = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Io = P({
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
      disabled: r,
      error: a,
      uninjectFormItemContext: i,
      modelValue: s
    } = ye(e), u = e.baseCls || U("input-tag"), c = y(), p = y(), {
      mergedSize: v,
      mergedDisabled: h,
      mergedError: _,
      feedback: $,
      eventHandlers: w
    } = dt({
      size: l,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: L
    } = ft(v), x = d(() => wn(wn({}, Td), e.fieldNames)), E = y(!1), b = y(e.defaultValue), k = y(e.defaultInputValue), m = y(!1), g = y(""), j = d(() => De(e.retainInputValue) ? wn({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), M = Pe({
      width: "12px"
    }), A = d(() => e.focused || E.value), O = (T, G) => {
      k.value = T, t("update:inputValue", T), t("inputValueChange", T, G);
    }, W = (T) => {
      var G;
      const {
        value: fe
      } = T.target;
      T.type === "compositionend" ? (m.value = !1, g.value = "", O(fe, T), qe(() => {
        c.value && te.value !== c.value.value && (c.value.value = te.value);
      })) : (m.value = !0, g.value = te.value + ((G = T.data) != null ? G : ""));
    }, q = d(() => {
      var T;
      return (T = e.modelValue) != null ? T : b.value;
    }), te = d(() => {
      var T;
      return (T = e.inputValue) != null ? T : k.value;
    });
    ve(s, (T) => {
      (Ke(T) || hn(T)) && (b.value = []);
    });
    const le = (T) => {
      c.value && T.target !== c.value && (T.preventDefault(), c.value.focus());
    }, se = (T) => {
      const {
        value: G
      } = T.target;
      m.value || (O(G, T), qe(() => {
        c.value && te.value !== c.value.value && (c.value.value = te.value);
      }));
    }, B = d(() => Sd(q.value, x.value)), Y = d(() => {
      if (e.maxTagCount > 0) {
        const T = B.value.length - e.maxTagCount;
        if (T > 0) {
          const G = B.value.slice(0, e.maxTagCount), fe = {
            value: "__arco__more",
            label: `+${T}...`,
            closable: !1
          };
          return G.push(wn({
            raw: fe
          }, fe)), G;
        }
      }
      return B.value;
    }), me = (T, G) => {
      var fe, ke;
      b.value = T, t("update:modelValue", T), t("change", T, G), (ke = (fe = w.value) == null ? void 0 : fe.onChange) == null || ke.call(fe, G);
    }, ae = (T, G, fe) => {
      var ke;
      const Ee = (ke = q.value) == null ? void 0 : ke.filter((Je, Ve) => Ve !== G);
      me(Ee, fe), t("remove", T, fe);
    }, ce = (T) => {
      me([], T), t("clear", T);
    }, Se = d(() => !h.value && !e.readonly && e.allowClear && !!q.value.length), be = (T) => {
      var G;
      if (te.value) {
        if (T.preventDefault(), e.uniqueValue && ((G = q.value) != null && G.includes(te.value))) {
          t("pressEnter", te.value, T);
          return;
        }
        const fe = q.value.concat(te.value);
        me(fe, T), t("pressEnter", te.value, T), j.value.create || O("", T);
      }
    }, ge = (T) => {
      var G, fe;
      E.value = !0, t("focus", T), (fe = (G = w.value) == null ? void 0 : G.onFocus) == null || fe.call(G, T);
    }, de = (T) => {
      var G, fe;
      E.value = !1, !j.value.blur && te.value && O("", T), t("blur", T), (fe = (G = w.value) == null ? void 0 : G.onBlur) == null || fe.call(G, T);
    }, Ce = () => {
      for (let T = B.value.length - 1; T >= 0; T--)
        if (B.value[T].closable)
          return T;
      return -1;
    }, tt = (T) => {
      if (h.value || e.readonly)
        return;
      const G = T.key || T.code;
      if (!m.value && te.value && G === $l.key && be(T), !m.value && Y.value.length > 0 && !te.value && G === $s.key) {
        const fe = Ce();
        fe >= 0 && ae(B.value[fe].value, fe, T);
      }
    }, Te = (T) => {
      T > 12 ? M.width = `${T}px` : M.width = "12px";
    };
    Ae(() => {
      p.value && Te(p.value.offsetWidth);
    });
    const Fe = () => {
      p.value && Te(p.value.offsetWidth);
    };
    ve(te, (T) => {
      c.value && !m.value && T !== c.value.value && (c.value.value = T);
    });
    const He = d(() => [u, `${u}-size-${L.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: _.value,
      [`${u}-focus`]: A.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: Y.value.length > 0,
      [`${u}-has-prefix`]: !!n.prefix,
      [`${u}-has-suffix`]: !!n.suffix || Se.value || $.value,
      [`${u}-has-placeholder`]: !q.value.length
    }]), Ne = d(() => Gt(o, Rt)), Ye = d(() => Cl(o, Rt));
    return {
      inputRef: c,
      render: () => {
        var T;
        return f("span", ie({
          class: He.value,
          onMousedown: le
        }, Ne.value), [f(fn, {
          onResize: Fe
        }, {
          default: () => [f("span", {
            ref: p,
            class: `${u}-mirror`
          }, [Y.value.length > 0 ? g.value || te.value : g.value || te.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), f(Qr, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [Y.value.map((G, fe) => f(Un, ie({
            key: `tag-${G.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && G.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, G.tagProps, {
            onClose: (ke) => ae(G.value, fe, ke)
          }), {
            default: () => {
              var ke, Ee, Je, Ve;
              return [(Ve = (Je = (ke = n.tag) == null ? void 0 : ke.call(n, {
                data: G.raw
              })) != null ? Je : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, G.raw)) != null ? Ve : G.label];
            }
          })), f("input", ie(Ye.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: M,
            placeholder: Y.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: se,
            onKeydown: tt,
            onFocus: ge,
            onBlur: de,
            onCompositionstart: W,
            onCompositionupdate: W,
            onCompositionend: W
          }), null)]
        }), Se.value && f(Qe, {
          class: `${u}-clear-btn`,
          onClick: ce,
          onMousedown: (G) => G.stopPropagation()
        }, {
          default: () => [f(yn, null, null)]
        }), (n.suffix || !!$.value) && f("span", {
          class: `${u}-suffix`
        }, [(T = n.suffix) == null ? void 0 : T.call(n), !!$.value && f(_l, {
          type: $.value
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
const Id = Object.assign(Io, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Io.name, Io);
  }
});
var _a = P({
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
      default: (e) => Re(e.modelValue)
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
      error: r
    } = ye(e), a = U("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: p
    } = dt({
      size: o,
      disabled: l,
      error: r
    }), {
      mergedSize: v
    } = ft(c), {
      opened: h
    } = ye(e), _ = y(), $ = d(() => {
      var O;
      return (O = _.value) == null ? void 0 : O.inputRef;
    }), w = d(() => e.modelValue.length === 0), L = d(() => e.allowSearch || e.allowCreate), x = d(() => e.allowClear && !e.disabled && !w.value), E = (O) => {
      var W, q;
      t("focus", O), (q = (W = s.value) == null ? void 0 : W.onFocus) == null || q.call(W, O);
    }, b = (O) => {
      var W, q;
      t("blur", O), (q = (W = s.value) == null ? void 0 : W.onBlur) == null || q.call(W, O);
    }, k = (O) => {
      t("remove", O);
    }, m = (O) => {
      t("clear", O);
    }, g = () => {
      var O, W, q, te;
      return e.loading ? (W = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? W : f(st, null, null) : e.allowSearch && e.opened ? (te = (q = n["search-icon"]) == null ? void 0 : q.call(n)) != null ? te : f(ll, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(kr, {
        class: `${a}-arrow-icon`
      }, null);
    }, j = () => f(Oe, null, [x.value && f(Qe, {
      class: `${a}-clear-btn`,
      onClick: m,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [f(yn, null, null)]
    }), f("span", {
      class: `${a}-icon`
    }, [g()]), !!i.value && f(_l, {
      type: i.value
    }, null)]);
    ve(h, (O) => {
      !O && $.value && $.value.isSameNode(document.activeElement) && $.value.blur();
    });
    const M = d(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: $,
      handleFocus: E,
      handleBlur: b,
      render: () => e.multiple ? f(Id, {
        ref: _,
        baseCls: a,
        class: M.value,
        modelValue: e.modelValue,
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: v.value,
        error: p.value,
        maxTagCount: e.maxTagCount,
        disabledInput: !e.allowSearch && !e.allowCreate,
        tagNowrap: e.tagNowrap,
        retainInputValue: !0,
        uninjectFormItemContext: !0,
        onRemove: k,
        onFocus: E,
        onBlur: b
      }, {
        prefix: n.prefix,
        suffix: j,
        tag: n.label
      }) : f(_d, {
        ref: _,
        baseCls: a,
        class: M.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: v.value,
        error: p.value,
        enabledInput: L.value,
        uninjectFormItemContext: !0,
        onFocus: E,
        onBlur: b
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
const zd = P({
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
function Vd(e, t, n, o, l, r) {
  return C(), N(Oe, null, [D("li", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "label", {}, () => [Ie(xe(e.label), 1)])], 2), H(e.$slots, "default")], 64);
}
var xn = /* @__PURE__ */ oe(zd, [["render", Vd]]);
const $a = typeof window > "u" ? global : window;
function Nd(e, t) {
  let n = 0;
  return (...o) => {
    n && $a.clearTimeout(n), n = $a.setTimeout(() => {
      n = 0, e(...o);
    }, t);
  };
}
var Ld = Object.defineProperty, Dd = Object.defineProperties, Ad = Object.getOwnPropertyDescriptors, Ca = Object.getOwnPropertySymbols, jd = Object.prototype.hasOwnProperty, Md = Object.prototype.propertyIsEnumerable, ka = (e, t, n) => t in e ? Ld(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, en = (e, t) => {
  for (var n in t || (t = {}))
    jd.call(t, n) && ka(e, n, t[n]);
  if (Ca)
    for (var n of Ca(t))
      Md.call(t, n) && ka(e, n, t[n]);
  return e;
}, Fd = (e, t) => Dd(e, Ad(t));
function Kd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !fl(e);
}
const Rd = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var zo = P({
  name: "Select",
  components: {
    Trigger: Ot,
    SelectView: _a
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
    attrs: o
  }) {
    const {
      size: l,
      disabled: r,
      error: a,
      options: i,
      filterOption: s,
      valueKey: u,
      multiple: c,
      popupVisible: p,
      defaultPopupVisible: v,
      showExtraOptions: h,
      modelValue: _,
      fieldNames: $,
      loading: w,
      defaultActiveFirstOption: L
    } = ye(e), x = U("select"), {
      mergedSize: E,
      mergedDisabled: b,
      mergedError: k,
      eventHandlers: m
    } = dt({
      size: l,
      disabled: r,
      error: a
    }), g = d(() => e.virtualListProps ? "div" : "li"), j = d(() => De(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (Ue(e.formatLabel))
        return (I) => {
          const S = Ee.get(I.value);
          return e.formatLabel(S);
        };
    });
    const M = y(), A = y({}), O = y(), {
      computedPopupVisible: W,
      handlePopupVisibleChange: q
    } = Gn({
      popupVisible: p,
      defaultPopupVisible: v,
      emit: n
    }), te = y(e.defaultValue), le = d(() => {
      var I;
      const S = (I = e.modelValue) != null ? I : te.value;
      return (Re(S) ? S : S || $e(S) || Tt(S) || Ft(S) ? [S] : []).map((ne) => ({
        value: ne,
        key: pn(ne, e.valueKey)
      }));
    });
    ve(_, (I) => {
      (Ke(I) || hn(I)) && (te.value = c.value ? [] : I);
    });
    const se = d(() => le.value.map((I) => I.key)), B = d(() => en(en({}, Rd), $ == null ? void 0 : $.value)), Y = y(), me = (I) => {
      const S = {};
      return I.forEach((z) => {
        S[z] = Ee.get(z);
      }), S;
    }, ae = (I) => {
      Y.value = me(I);
    }, ce = (I) => Ue(e.fallbackOption) ? e.fallbackOption(I) : {
      [B.value.value]: I,
      [B.value.label]: String(De(I) ? I[u == null ? void 0 : u.value] : I)
    }, Se = () => {
      const I = [], S = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const z of le.value)
          if (!S.includes(z.key) && z.value !== "") {
            const ne = Ee.get(z.key);
            (!ne || ne.origin === "extraOptions") && (I.push(z), S.push(z.key));
          }
      }
      if (e.allowCreate && Ce.value) {
        const z = pn(Ce.value);
        if (!S.includes(z)) {
          const ne = Ee.get(z);
          (!ne || ne.origin === "extraOptions") && I.push({
            value: Ce.value,
            key: z
          });
        }
      }
      return I;
    }, be = y([]), ge = d(() => be.value.map((I) => {
      var S;
      let z = ce(I.value);
      const ne = (S = Y.value) == null ? void 0 : S[I.key];
      return !Ke(ne) && !ai(ne) && (z = en(en({}, z), ne)), z;
    }));
    qe(() => {
      Fn(() => {
        var I;
        const S = Se();
        if (S.length !== be.value.length)
          be.value = S;
        else if (S.length > 0) {
          for (let z = 0; z < S.length; z++)
            if (S[z].key !== ((I = be.value[z]) == null ? void 0 : I.key)) {
              be.value = S;
              break;
            }
        }
      });
    });
    const de = y(""), Ce = d(() => {
      var I;
      return (I = e.inputValue) != null ? I : de.value;
    });
    ve(W, (I) => {
      !I && !j.value && Ce.value && Fe("");
    });
    const tt = (I) => {
      var S, z;
      return e.multiple ? I.map((ne) => {
        var Ze, Ge;
        return (Ge = (Ze = Ee.get(ne)) == null ? void 0 : Ze.value) != null ? Ge : "";
      }) : (z = (S = Ee.get(I[0])) == null ? void 0 : S.value) != null ? z : uc(Ee) ? void 0 : "";
    }, Te = (I) => {
      var S, z;
      const ne = tt(I);
      te.value = ne, n("update:modelValue", ne), n("change", ne), (z = (S = m.value) == null ? void 0 : S.onChange) == null || z.call(S), ae(I);
    }, Fe = (I) => {
      de.value = I, n("update:inputValue", I), n("inputValueChange", I);
    }, He = (I, S) => {
      if (e.multiple) {
        if (se.value.includes(I)) {
          const z = se.value.filter((ne) => ne !== I);
          Te(z);
        } else if (Ve.value.includes(I))
          if (e.limit > 0 && se.value.length >= e.limit) {
            const z = Ee.get(I);
            n("exceedLimit", z == null ? void 0 : z.value, S);
          } else {
            const z = se.value.concat(I);
            Te(z);
          }
        j.value || Fe("");
      } else {
        if (I !== se.value[0] && Te([I]), j.value) {
          const z = Ee.get(I);
          z && Fe(z.label);
        }
        q(!1);
      }
    }, Ne = Nd((I) => {
      n("search", I);
    }, e.searchDelay), Ye = (I) => {
      I !== Ce.value && (W.value || q(!0), Fe(I), e.allowSearch && Ne(I));
    }, Z = (I) => {
      const S = Ee.get(I), z = se.value.filter((ne) => ne !== I);
      Te(z), n("remove", S == null ? void 0 : S.value);
    }, T = (I) => {
      I == null || I.stopPropagation();
      const S = se.value.filter((z) => {
        var ne;
        return (ne = Ee.get(z)) == null ? void 0 : ne.disabled;
      });
      Te(S), Fe(""), n("clear", I);
    }, G = (I) => {
      n("dropdownScroll", I);
    }, fe = (I) => {
      n("dropdownReachBottom", I);
    }, {
      validOptions: ke,
      optionInfoMap: Ee,
      validOptionInfos: Je,
      enabledOptionKeys: Ve,
      handleKeyDown: $t
    } = wc({
      multiple: c,
      options: i,
      extraOptions: ge,
      inputValue: Ce,
      filterOption: s,
      showExtraOptions: h,
      component: g,
      valueKey: u,
      fieldNames: $,
      loading: w,
      popupVisible: W,
      valueKeys: se,
      dropdownRef: M,
      optionRefs: A,
      virtualListRef: O,
      defaultActiveFirstOption: L,
      onSelect: He,
      onPopupVisibleChange: q
    }), Jt = d(() => {
      var I;
      const S = [];
      for (const z of le.value) {
        const ne = Ee.get(z.key);
        ne && S.push(Fd(en({}, ne), {
          value: z.key,
          label: (I = ne == null ? void 0 : ne.label) != null ? I : String(De(z.value) ? z.value[u == null ? void 0 : u.value] : z.value),
          closable: !(ne != null && ne.disabled),
          tagProps: ne == null ? void 0 : ne.tagProps
        }));
      }
      return S;
    }), Ct = (I) => {
      if (Ue(t.option)) {
        const S = t.option;
        return () => S({
          data: I.raw
        });
      }
      return Ue(I.render) ? I.render : () => I.label;
    }, lt = (I) => {
      if ($r(I)) {
        let S;
        return f(xn, {
          key: I.key,
          label: I.label
        }, Kd(S = I.options.map((z) => lt(z))) ? S : {
          default: () => [S]
        });
      }
      return qn(I, {
        inputValue: Ce.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(Pn, {
        ref: (S) => {
          S != null && S.$el && (A.value[I.key] = S.$el);
        },
        key: I.key,
        value: I.value,
        label: I.label,
        disabled: I.disabled,
        internal: !0
      }, {
        default: Ct(I)
      }) : null;
    }, zt = () => f(tc, {
      ref: M,
      loading: e.loading,
      empty: Je.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: G,
      onReachBottom: fe
    }, {
      default: () => {
        var I, S;
        return [...(S = (I = t.default) == null ? void 0 : I.call(t)) != null ? S : [], ...ke.value.map(lt)];
      },
      "virtual-list": () => f(Cr, ie(e.virtualListProps, {
        ref: O,
        data: ke.value
      }), {
        item: ({
          item: I
        }) => lt(I)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), Qt = ({
      data: I
    }) => {
      var S, z, ne, Ze;
      if ((t.label || Ue(e.formatLabel)) && I) {
        const Ge = Ee.get(I.value);
        if (Ge != null && Ge.raw)
          return (ne = (S = t.label) == null ? void 0 : S.call(t, {
            data: Ge.raw
          })) != null ? ne : (z = e.formatLabel) == null ? void 0 : z.call(e, Ge.raw);
      }
      return (Ze = I == null ? void 0 : I.label) != null ? Ze : "";
    };
    return () => f(Ot, ie({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: b.value,
      popupVisible: W.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: q
    }, e.triggerProps), {
      default: () => {
        var I, S;
        return [(S = (I = t.trigger) == null ? void 0 : I.call(t)) != null ? S : f(_a, ie({
          class: x,
          modelValue: Jt.value,
          inputValue: Ce.value,
          multiple: e.multiple,
          disabled: b.value,
          error: k.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: !!e.allowSearch,
          opened: W.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: E.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: Ye,
          onRemove: Z,
          onClear: T,
          onKeydown: $t
        }, o), {
          label: Qt,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: zt
    });
  }
});
const Hd = Object.assign(zo, {
  Option: Pn,
  OptGroup: xn,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + zo.name, zo), e.component(n + Pn.name, Pn), e.component(n + xn.name, xn);
  }
}), Wd = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), qd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gd = /* @__PURE__ */ D("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), Ud = [Gd];
function Zd(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ud, 14, qd);
}
var Vo = /* @__PURE__ */ oe(Wd, [["render", Zd]]);
const Yd = Object.assign(Vo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Vo.name, Vo);
  }
}), Xd = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Jd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Qd = /* @__PURE__ */ D("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), ef = [Qd];
function tf(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ef, 14, Jd);
}
var No = /* @__PURE__ */ oe(Xd, [["render", tf]]);
const nf = Object.assign(No, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + No.name, No);
  }
}), of = (e) => {
  const t = {}, n = y([]), o = () => {
    if (t.value) {
      const l = ur(t.value, e);
      (l.length !== n.value.length || l.toString() !== n.value.toString()) && (n.value = l);
    }
  };
  return Ae(() => o()), ct(() => o()), {
    children: t,
    components: n
  };
}, Er = Symbol("collapseCtx"), lf = P({
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
      showExpandIcon: r
    } = ye(e), a = U("collapse"), i = y(e.defaultActiveKey), s = d(() => {
      var p;
      const v = (p = e.activeKey) != null ? p : i.value;
      return Re(v) ? v : [v];
    });
    bt(Er, Pe({
      activeKeys: s,
      slots: n,
      showExpandIcon: r,
      expandIconPosition: o,
      destroyOnHide: l,
      handleClick: (p, v) => {
        let h = [];
        if (e.accordion)
          s.value.includes(p) || (h = [p]), i.value = h;
        else {
          h = [...s.value];
          const _ = h.indexOf(p);
          _ > -1 ? h.splice(_, 1) : e.accordion ? h = [p] : h.push(p), i.value = h;
        }
        t("update:activeKey", h), t("change", h, v);
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
function af(e, t, n, o, l, r) {
  return C(), N("div", {
    class: V(e.cls)
  }, [H(e.$slots, "default")], 2);
}
var Lo = /* @__PURE__ */ oe(lf, [["render", af]]);
const rf = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), sf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], uf = /* @__PURE__ */ D("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), cf = [uf];
function df(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, cf, 14, sf);
}
var Do = /* @__PURE__ */ oe(rf, [["render", df]]);
const ff = Object.assign(Do, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Do.name, Do);
  }
}), pf = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), vf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], hf = /* @__PURE__ */ D("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), mf = [hf];
function yf(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, mf, 14, vf);
}
var Ao = /* @__PURE__ */ oe(pf, [["render", yf]]);
const gf = Object.assign(Ao, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Ao.name, Ao);
  }
});
var St = P({
  name: "CollapseItem",
  components: {
    IconHover: Qe,
    IconCaretRight: ff,
    IconCaretLeft: gf
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
    const o = gt(), l = U("collapse-item"), r = We(Er, {}), a = o && $e(o == null ? void 0 : o.vnode.key) ? o.vnode.key : String((n = o == null ? void 0 : o.vnode.key) != null ? n : ""), i = d(() => {
      var b;
      return (b = r.activeKeys) == null ? void 0 : b.includes(a);
    }), s = d(() => r.destroyOnHide || e.destroyOnHide), u = d(() => {
      var b;
      return (b = r == null ? void 0 : r.showExpandIcon) != null ? b : e.showExpandIcon;
    }), c = y(s.value ? i.value : !0), p = d(() => {
      var b;
      return (b = r == null ? void 0 : r.expandIconPosition) != null ? b : "left";
    }), v = (b) => {
      var k;
      e.disabled || (k = r.handleClick) == null || k.call(r, a, b);
    };
    ve(i, (b) => {
      b && !c.value && (c.value = !0);
    });
    const h = {
      onEnter: (b) => {
        b.style.height = `${b.scrollHeight}px`;
      },
      onAfterEnter: (b) => {
        b.style.height = "auto";
      },
      onBeforeLeave: (b) => {
        b.style.height = `${b.scrollHeight}px`;
      },
      onLeave: (b) => {
        b.style.height = "0";
      },
      onAfterLeave: () => {
        s.value && (c.value = !1);
      }
    }, _ = d(() => [l, {
      [`${l}-active`]: i.value
    }]), $ = d(() => [`${l}-header`, `${l}-header-${r == null ? void 0 : r.expandIconPosition}`, {
      [`${l}-header-disabled`]: e.disabled
    }]), w = d(() => [{
      [`${l}-icon-right`]: (r == null ? void 0 : r.expandIconPosition) === "right"
    }]), L = d(() => [`${l}-content`, {
      [`${l}-content-expend`]: i.value
    }]), x = () => p.value === "right" ? f(ee("icon-caret-left"), {
      class: `${l}-expand-icon`
    }, null) : f(ee("icon-caret-right"), {
      class: `${l}-expand-icon`
    }, null), E = () => u.value && f(ee("icon-hover"), {
      prefix: l,
      class: w.value,
      disabled: e.disabled
    }, {
      default: () => {
        var b, k, m, g;
        return [(g = (m = (k = t["expand-icon"]) != null ? k : (b = r == null ? void 0 : r.slots) == null ? void 0 : b["expand-icon"]) == null ? void 0 : m({
          active: i.value,
          disabled: e.disabled,
          position: p.value
        })) != null ? g : x()];
      }
    });
    return () => {
      var b, k, m;
      return f("div", {
        class: _.value
      }, [f("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: $.value,
        onClick: v
      }, [E(), f("div", {
        class: `${l}-header-title`
      }, [(k = (b = t.header) == null ? void 0 : b.call(t)) != null ? k : e.header]), t.extra && f("div", {
        class: `${l}-header-extra`
      }, [(m = t.extra) == null ? void 0 : m.call(t)])]), f(Mn, ie({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var g;
          return [ht(f("div", {
            role: "region",
            class: L.value
          }, [c.value && f("div", {
            ref: "contentBoxRef",
            class: `${l}-content-box`
          }, [(g = t.default) == null ? void 0 : g.call(t)])]), [[mt, i.value]])];
        }
      })]);
    };
  }
});
const bf = Object.assign(Lo, {
  Item: St,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Lo.name, Lo), e.component(n + St.name, St);
  }
}), _f = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), $f = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Cf = /* @__PURE__ */ D("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), kf = [Cf];
function wf(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, kf, 14, $f);
}
var jo = /* @__PURE__ */ oe(_f, [["render", wf]]);
const Sf = Object.assign(jo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + jo.name, jo);
  }
});
var Or = P({
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
}), Ef = Object.defineProperty, wa = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, Pf = Object.prototype.propertyIsEnumerable, Sa = (e, t, n) => t in e ? Ef(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ea = (e, t) => {
  for (var n in t || (t = {}))
    Of.call(t, n) && Sa(e, n, t[n]);
  if (wa)
    for (var n of wa(t))
      Pf.call(t, n) && Sa(e, n, t[n]);
  return e;
};
const Bf = P({
  name: "Tooltip",
  components: {
    Trigger: Ot
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
      var c;
      return (c = e.popupVisible) != null ? c : o.value;
    }), r = (c) => {
      o.value = c, t("update:popupVisible", c), t("popupVisibleChange", c);
    }, a = d(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = d(() => {
      if (e.backgroundColor || e.contentStyle)
        return Ea({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), u = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return Ea({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: l,
      contentCls: a,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: u,
      handlePopupVisibleChange: r
    };
  }
});
function xf(e, t, n, o, l, r) {
  const a = ee("Trigger");
  return C(), J(a, {
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
    content: F(() => [H(e.$slots, "content", {}, () => [Ie(xe(e.content), 1)])]),
    default: F(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Mo = /* @__PURE__ */ oe(Bf, [["render", xf]]);
const bn = Object.assign(Mo, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Mo.name, Mo);
  }
}), Tf = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), If = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zf = /* @__PURE__ */ D("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Vf = /* @__PURE__ */ D("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), Nf = [zf, Vf];
function Lf(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Nf, 14, If);
}
var Fo = /* @__PURE__ */ oe(Tf, [["render", Lf]]);
const Df = Object.assign(Fo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Fo.name, Fo);
  }
}), Af = P({
  name: "Popconfirm",
  components: {
    ArcoButton: gn,
    Trigger: Ot,
    IconInfoCircleFill: Ji,
    IconCheckCircleFill: bl,
    IconExclamationCircleFill: fr,
    IconCloseCircleFill: pr
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
    } = pl(), l = y(e.defaultPopupVisible), r = d(() => {
      var $;
      return ($ = e.popupVisible) != null ? $ : l.value;
    }), a = y(!1), i = d(() => e.okLoading || a.value);
    let s = 0;
    const u = () => {
      s++, a.value && (a.value = !1), l.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, c = ($) => {
      $ ? (l.value = $, t("update:popupVisible", $), t("popupVisibleChange", $)) : u();
    }, p = async () => {
      const $ = s, w = await new Promise(async (L) => {
        var x;
        if (Ue(e.onBeforeOk)) {
          let E = e.onBeforeOk((b = !0) => L(b));
          if ((Ll(E) || !Ft(E)) && (a.value = !0), Ll(E))
            try {
              E = (x = await E) != null ? x : !0;
            } catch {
              E = !1;
            }
          Ft(E) && L(E);
        } else
          L(!0);
      });
      $ === s && (w ? (t("ok"), u()) : a.value && (a.value = !1));
    }, v = () => {
      var $;
      let w = !0;
      Ue(e.onBeforeCancel) && (w = ($ = e.onBeforeCancel()) != null ? $ : !1), w && (t("cancel"), u());
    }, h = d(() => [`${n}-popup-content`, e.contentClass]), _ = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: h,
      arrowCls: _,
      computedPopupVisible: r,
      mergedOkLoading: i,
      handlePopupVisibleChange: c,
      handleOk: p,
      handleCancel: v,
      t: o
    };
  }
});
function jf(e, t, n, o, l, r) {
  const a = ee("icon-info-circle-fill"), i = ee("icon-check-circle-fill"), s = ee("icon-exclamation-circle-fill"), u = ee("icon-close-circle-fill"), c = ee("arco-button"), p = ee("trigger");
  return C(), J(p, {
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
    content: F(() => [D("div", {
      class: V(`${e.prefixCls}-body`)
    }, [D("span", {
      class: V(`${e.prefixCls}-icon`)
    }, [H(e.$slots, "icon", {}, () => [e.type === "info" ? (C(), J(a, {
      key: 0
    })) : e.type === "success" ? (C(), J(i, {
      key: 1
    })) : e.type === "warning" ? (C(), J(s, {
      key: 2
    })) : e.type === "error" ? (C(), J(u, {
      key: 3
    })) : pe("v-if", !0)])], 2), D("span", {
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "content", {}, () => [Ie(xe(e.content), 1)])], 2)], 2), D("div", {
      class: V(`${e.prefixCls}-footer`)
    }, [f(c, ie({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: F(() => [Ie(xe(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(c, ie({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: F(() => [Ie(xe(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: F(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var Ko = /* @__PURE__ */ oe(Af, [["render", jf]]);
const Pr = Object.assign(Ko, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Ko.name, Ko);
  }
});
var Ro = P({
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
    const a = (i) => {
      const s = {}, u = `${r(Re(e.size) ? e.size[0] : e.size)}px`, c = `${r(Re(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var i;
      const s = Sn((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== ei);
      return f("div", {
        class: l.value
      }, [s.map((u, c) => {
        var p, v;
        const h = t.split && c > 0;
        return f(Oe, {
          key: (p = u.key) != null ? p : `item-${c}`
        }, [h && f("div", {
          class: `${n}-item-split`,
          style: a(!1)
        }, [(v = t.split) == null ? void 0 : v.call(t)]), f("div", {
          class: `${n}-item`,
          style: a(c === s.length - 1)
        }, [u])]);
      })]);
    };
  }
});
const Mf = Object.assign(Ro, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Ro.name, Ro);
  }
}), Ff = P({
  name: "Switch",
  components: {
    IconLoading: st
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "circle"
    },
    size: {
      type: String
    },
    checkedValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    checkedColor: {
      type: String
    },
    uncheckedColor: {
      type: String
    },
    beforeChange: {
      type: Function
    },
    checkedText: {
      type: String
    },
    uncheckedText: {
      type: String
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  setup(e, {
    emit: t
  }) {
    const {
      disabled: n,
      size: o,
      modelValue: l
    } = ye(e), r = U("switch"), {
      mergedSize: a
    } = ft(o), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = dt({
      disabled: n,
      size: a
    }), c = y(e.defaultChecked ? e.checkedValue : e.uncheckedValue), p = d(() => {
      var b;
      return ((b = e.modelValue) != null ? b : c.value) === e.checkedValue;
    }), v = y(!1), h = d(() => v.value || e.loading), _ = (b, k) => {
      var m, g;
      c.value = b ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, k), (g = (m = u.value) == null ? void 0 : m.onChange) == null || g.call(m, k);
    }, $ = async (b) => {
      if (h.value || i.value)
        return;
      const k = !p.value, m = k ? e.checkedValue : e.uncheckedValue, g = e.beforeChange;
      if (Ue(g)) {
        v.value = !0;
        try {
          const j = await g(m);
          (j ?? !0) && _(k, b);
        } finally {
          v.value = !1;
        }
      } else
        _(k, b);
    }, w = (b) => {
      var k, m;
      t("focus", b), (m = (k = u.value) == null ? void 0 : k.onFocus) == null || m.call(k, b);
    }, L = (b) => {
      var k, m;
      t("blur", b), (m = (k = u.value) == null ? void 0 : k.onBlur) == null || m.call(k, b);
    };
    ve(l, (b) => {
      (Ke(b) || hn(b)) && (c.value = e.uncheckedValue);
    });
    const x = d(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: p.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: h.value,
      [`${r}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), E = d(() => {
      if (p.value && e.checkedColor)
        return e.type === "line" ? {
          "--custom-color": e.checkedColor
        } : {
          backgroundColor: e.checkedColor
        };
      if (!p.value && e.uncheckedColor)
        return e.type === "line" ? {
          "--custom-color": e.uncheckedColor
        } : {
          backgroundColor: e.uncheckedColor
        };
    });
    return {
      prefixCls: r,
      cls: x,
      mergedDisabled: i,
      buttonStyle: E,
      computedCheck: p,
      computedLoading: h,
      handleClick: $,
      handleFocus: w,
      handleBlur: L
    };
  }
}), Kf = ["aria-checked", "disabled"];
function Rf(e, t, n, o, l, r) {
  const a = ee("icon-loading");
  return C(), N("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: V(e.cls),
    style: re(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: t[2] || (t[2] = (...i) => e.handleBlur && e.handleBlur(...i))
  }, [D("span", {
    class: V(`${e.prefixCls}-handle`)
  }, [D("span", {
    class: V(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? (C(), J(a, {
    key: 0
  })) : (C(), N(Oe, {
    key: 1
  }, [e.computedCheck ? H(e.$slots, "checked-icon", {
    key: 0
  }) : H(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), pe("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? (C(), N(Oe, {
    key: 0
  }, [D("span", {
    class: V(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? H(e.$slots, "checked", {
    key: 0
  }, () => [Ie(xe(e.checkedText), 1)]) : H(e.$slots, "unchecked", {
    key: 1
  }, () => [Ie(xe(e.uncheckedText), 1)])], 2), D("span", {
    class: V(`${e.prefixCls}-text`)
  }, [e.computedCheck ? H(e.$slots, "checked", {
    key: 0
  }, () => [Ie(xe(e.checkedText), 1)]) : H(e.$slots, "unchecked", {
    key: 1
  }, () => [Ie(xe(e.uncheckedText), 1)])], 2)], 64)) : pe("v-if", !0)], 46, Kf);
}
var Ho = /* @__PURE__ */ oe(Ff, [["render", Rf]]);
const Hf = Object.assign(Ho, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Ho.name, Ho);
  }
}), Wf = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), qf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gf = /* @__PURE__ */ D("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Uf = [Gf];
function Zf(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Uf, 14, qf);
}
var Wo = /* @__PURE__ */ oe(Wf, [["render", Zf]]);
const Yf = Object.assign(Wo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Wo.name, Wo);
  }
}), Xf = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, Ol = Symbol("ArcoTabs"), Jf = P({
  name: "TabsTab",
  components: {
    IconHover: Qe,
    IconClose: yn
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
    const n = U("tabs-tab"), o = We(Ol, {}), l = (u) => {
      e.tab.disabled || t("click", e.tab.key, u);
    }, r = (u) => {
      u.key === "Enter" && l(u);
    }, a = d(() => Object.assign(o.trigger === "click" ? {
      onClick: l
    } : {
      onMouseover: l
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
function Qf(e, t, n, o, l, r) {
  const a = ee("icon-close"), i = ee("icon-hover");
  return C(), N("div", ie({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [D("span", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "default")], 2), e.editable && e.tab.closable ? (C(), J(i, {
    key: 0,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleDelete, ["stop"])
  }, {
    default: F(() => [f(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : pe("v-if", !0)], 16);
}
var ep = /* @__PURE__ */ oe(Jf, [["render", Qf]]);
function tp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !fl(e);
}
var Oa = P({
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
    const n = U("tabs-nav-button"), o = (a) => {
      e.disabled || t("click", e.type, a);
    }, l = () => e.direction === "horizontal" ? e.type === "next" ? f(Sr, null, null) : f(Yd, null, null) : e.type === "next" ? f(kr, null, null) : f(nf, null, null), r = d(() => [n, {
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
        onClick: o
      }, [f(Qe, {
        disabled: e.disabled
      }, tp(a = l()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const np = P({
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
    } = ye(e), n = U("tabs-nav-ink"), o = y(0), l = y(0), r = d(() => e.direction === "vertical" ? {
      top: `${o.value}px`,
      height: `${l.value}px`
    } : {
      left: `${o.value}px`,
      width: `${l.value}px`
    }), a = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, u = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== o.value || u !== l.value) && (o.value = s, l.value = u);
      }
    };
    Ae(() => {
      qe(() => a());
    }), ct(() => {
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
function op(e, t, n, o, l, r) {
  return C(), N("div", {
    class: V(e.cls),
    style: re(e.style)
  }, null, 6);
}
var lp = /* @__PURE__ */ oe(np, [["render", op]]), ap = P({
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
      activeIndex: r,
      direction: a
    } = ye(e), i = U("tabs-nav"), s = y(), u = y(), c = y({}), p = d(() => {
      if (!Ke(l.value))
        return c.value[l.value];
    }), v = y(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), _ = y(!1), $ = y(0), w = y(0), L = y([]), x = y(0), E = () => {
      var ae, ce, Se;
      return (Se = a.value === "vertical" ? (ae = s.value) == null ? void 0 : ae.offsetHeight : (ce = s.value) == null ? void 0 : ce.offsetWidth) != null ? Se : 0;
    }, b = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, k = () => o.value.map((ae) => {
      const ce = c.value[ae.key];
      return a.value === "vertical" ? ce.offsetTop + ce.offsetHeight : ce.offsetLeft + ce.offsetWidth;
    }), m = () => {
      _.value = g(), _.value ? ($.value = E(), w.value = b(), L.value = k(), x.value > w.value && (x.value = w.value)) : x.value = 0;
    }, g = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, j = (ae) => {
      var ce;
      return ((ce = L.value[ae - 1]) != null ? ce : 0) >= x.value && L.value[ae] <= x.value + $.value;
    }, M = (ae) => s.value ? ae === "previous" ? x.value - $.value : x.value + $.value : 0, A = (ae) => !s.value || !u.value || ae < 0 ? 0 : ae > w.value ? w.value : ae, O = (ae, ce) => {
      t("click", ae, ce);
    }, W = (ae, ce) => {
      t("delete", ae, ce);
    }, q = (ae) => {
      x.value = A(M(ae));
    }, te = () => {
      m(), v.value && v.value.$forceUpdate();
    };
    ve(o, () => {
      qe(() => {
        m();
      });
    }), ve(r, (ae, ce) => {
      qe(() => {
        var Se;
        if (_.value)
          if (ae >= ce) {
            const be = ae < L.value.length - 1 ? ae + 1 : ae;
            j(be) || (x.value = L.value[be] - $.value);
          } else {
            const be = ae > 0 ? ae - 1 : ae;
            j(be) || (x.value = (Se = L.value[be - 1]) != null ? Se : 0);
          }
      });
    }), Ae(() => {
      m();
    });
    const le = () => !h.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (ae) => t("add", ae)
    }, [f(Qe, null, {
      default: () => [f(Sf, null, null)]
    })]), se = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), B = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), Y = d(() => Xf({
      direction: e.direction,
      type: e.type,
      offset: x.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: _.value
    }]);
    return () => {
      var ae;
      return f("div", {
        class: se.value
      }, [_.value && f(Oa, {
        type: "previous",
        direction: e.direction,
        disabled: x.value <= 0,
        onClick: q
      }, null), f(fn, {
        onResize: () => m()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(fn, {
          onResize: te
        }, {
          default: () => [f("div", {
            ref: u,
            class: B.value,
            style: Y.value
          }, [e.tabs.map((ce, Se) => f(ep, {
            key: ce.key,
            ref: (be) => {
              be != null && be.$el && (c.value[ce.key] = be.$el);
            },
            active: ce.key === l.value,
            tab: ce,
            editable: e.editable,
            onClick: O,
            onDelete: W
          }, {
            default: () => {
              var be, ge, de;
              return [(de = (ge = (be = ce.slots).title) == null ? void 0 : ge.call(be)) != null ? de : ce.title];
            }
          })), e.type === "line" && p.value && f(lp, {
            ref: v,
            activeTabRef: p.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !_.value && le()])]
      }), _.value && f(Oa, {
        type: "next",
        direction: e.direction,
        disabled: x.value >= w.value,
        onClick: q
      }, null), f("div", {
        class: `${i}-extra`
      }, [_.value && le(), (ae = n.extra) == null ? void 0 : ae.call(n)])]);
    };
  }
}), qo = P({
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
      destroyOnHide: r,
      trigger: a
    } = ye(e), i = U("tabs"), {
      mergedSize: s
    } = ft(o), u = d(() => e.direction === "vertical" ? "left" : e.position), c = d(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: p,
      components: v
    } = of("TabPane"), h = Pe(/* @__PURE__ */ new Map()), _ = d(() => {
      const O = [];
      return v.value.forEach((W) => {
        const q = h.get(W);
        q && O.push(q);
      }), O;
    }), $ = d(() => _.value.map((O) => O.key)), w = (O, W) => {
      h.set(O, W);
    }, L = (O) => {
      h.delete(O);
    }, x = y(e.defaultActiveKey), E = d(() => {
      var O;
      const W = (O = e.activeKey) != null ? O : x.value;
      return Ke(W) ? $.value[0] : W;
    }), b = d(() => {
      const O = $.value.indexOf(E.value);
      return O === -1 ? 0 : O;
    });
    bt(Ol, Pe({
      lazyLoad: l,
      destroyOnHide: r,
      activeKey: E,
      addItem: w,
      removeItem: L,
      trigger: a
    }));
    const k = (O) => {
      O !== E.value && (x.value = O, t("update:activeKey", O), t("change", O));
    }, m = (O, W) => {
      k(O), t("tabClick", O, W);
    }, g = (O) => {
      t("add", O), e.autoSwitch && qe(() => {
        const W = $.value[$.value.length - 1];
        k(W);
      });
    }, j = (O, W) => {
      t("delete", O, W);
    }, M = () => f("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [f("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${b.value * 100}%`
      }
    }, [p.value])]), A = d(() => [i, `${i}-${c.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return p.value = (O = n.default) == null ? void 0 : O.call(n), f("div", {
        class: A.value
      }, [u.value === "bottom" && M(), f(ap, {
        tabs: _.value,
        activeKey: E.value,
        activeIndex: b.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: m,
        onAdd: g,
        onDelete: j
      }, {
        extra: n.extra
      }), u.value !== "bottom" && M()]);
    };
  }
}), rp = Object.defineProperty, Pa = Object.getOwnPropertySymbols, ip = Object.prototype.hasOwnProperty, sp = Object.prototype.propertyIsEnumerable, Ba = (e, t, n) => t in e ? rp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, up = (e, t) => {
  for (var n in t || (t = {}))
    ip.call(t, n) && Ba(e, n, t[n]);
  if (Pa)
    for (var n of Pa(t))
      sp.call(t, n) && Ba(e, n, t[n]);
  return e;
};
const cp = P({
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
      closable: r
    } = ye(e), a = gt(), i = U("tabs"), s = We(Ol, {}), u = y(), c = d(() => a == null ? void 0 : a.vnode.key), p = d(() => c.value === s.activeKey), v = y(s.lazyLoad ? p.value : !0), h = Pe({
      key: c,
      title: o,
      disabled: l,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, h)), Wt(() => {
      var _;
      a != null && a.uid && ((_ = s.removeItem) == null || _.call(s, a.uid));
    }), ve(p, (_) => {
      _ ? v.value || (v.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (v.value = !1);
    }), ct(() => {
      h.slots = up({}, t);
    }), {
      prefixCls: i,
      active: p,
      itemRef: u,
      mounted: v
    };
  }
});
function dp(e, t, n, o, l, r) {
  return C(), N("div", {
    ref: "itemRef",
    class: V([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (C(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-pane`)
  }, [H(e.$slots, "default")], 2)) : pe("v-if", !0)], 2);
}
var Tn = /* @__PURE__ */ oe(cp, [["render", dp]]);
const fp = Object.assign(qo, {
  TabPane: Tn,
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + qo.name, qo), e.component(n + Tn.name, Tn);
  }
}), Br = Symbol("TreeInjectionKey");
function pp(e) {
  const t = [];
  function n(o) {
    o && o.forEach((l) => {
      t.push(l), n(l.children);
    });
  }
  return n(e), t;
}
function vp(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function xa(e) {
  return e.selectable && !e.disabled;
}
function Ta(e) {
  return !e.isLeaf && e.children;
}
function hp(e) {
  return Ft(e.isLeaf) ? e.isLeaf : !e.children;
}
function il(e) {
  return Set.prototype.add.bind(e);
}
function sl(e) {
  return Set.prototype.delete.bind(e);
}
function Mt(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function Pl(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((o) => {
    Mt(o) && n.push(o.key, ...Pl(o));
  }), n;
}
function xr(e) {
  var t;
  const {
    node: n,
    checkedKeySet: o,
    indeterminateKeySet: l
  } = e;
  let r = n.parent;
  for (; r; ) {
    if (Mt(r)) {
      const a = r.key, i = ((t = r.children) == null ? void 0 : t.filter(Mt)) || [];
      let s = 0;
      const u = i.length;
      i.some(({
        key: c
      }) => {
        if (o.has(c))
          s += 1;
        else if (l.has(c))
          return s += 0.5, !0;
        return !1;
      }), s && s !== u ? l.add(a) : l.delete(a), s && s === u ? o.add(a) : o.delete(a);
    }
    r = r.parent;
  }
}
function Ia(e) {
  const {
    node: t,
    checked: n,
    checkedKeys: o,
    indeterminateKeys: l,
    checkStrictly: r = !1
  } = e, {
    key: a
  } = t, i = new Set(o), s = new Set(l);
  if (n ? i.add(a) : i.delete(a), s.delete(a), !r) {
    const u = Pl(t);
    n ? u.forEach(il(i)) : u.forEach(sl(i)), u.forEach(sl(s)), xr({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function mp(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: o,
    onlyCheckLeaf: l
  } = e, r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return o ? t.forEach(il(r)) : t.forEach((s) => {
    var u;
    const c = n.get(s);
    if (!c || a.has(s) || l && ((u = c.children) != null && u.length))
      return;
    const p = Pl(c);
    p.forEach(il(a)), p.forEach(sl(i)), r.add(s), i.delete(s), xr({
      node: c,
      checkedKeySet: r,
      indeterminateKeySet: i
    });
  }), [[...r, ...a], [...i]];
}
function Zn() {
  return We(Br) || {};
}
const yp = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), gp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bp = /* @__PURE__ */ D("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), _p = [bp];
function $p(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, _p, 14, gp);
}
var Go = /* @__PURE__ */ oe(yp, [["render", $p]]);
const Cp = Object.assign(Go, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Go.name, Go);
  }
});
var kp = P({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: st,
    RenderFunction: Or
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
      treeNodeData: r
    } = ye(e), a = Zn(), i = it(t, "switcher-icon"), s = it(t, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var u, c, p;
        const v = (c = (u = o == null ? void 0 : o.value) == null ? void 0 : u.switcherIcon) != null ? c : i.value;
        return v ? v(l.value) : (p = a.switcherIcon) == null ? void 0 : p.call(a, r.value, l.value);
      },
      getLoadingIcon: () => {
        var u, c, p;
        const v = (c = (u = o == null ? void 0 : o.value) == null ? void 0 : u.loadingIcon) != null ? c : s.value;
        return v ? v(l.value) : (p = a.loadingIcon) == null ? void 0 : p.call(a, r.value, l.value);
      },
      onClick(u) {
        n("click", u);
      }
    };
  },
  render() {
    var e, t, n;
    const {
      prefixCls: o,
      getSwitcherIcon: l,
      getLoadingIcon: r,
      onClick: a,
      nodeStatus: i = {},
      loading: s,
      showLine: u
    } = this, {
      expanded: c,
      isLeaf: p
    } = i;
    if (s)
      return (e = r()) != null ? e : Nt(st);
    let v = null, h = !1;
    if (p)
      u && (v = (n = l()) != null ? n : Nt(Cp));
    else {
      const $ = u ? Nt("span", {
        class: `${o}-${c ? "minus" : "plus"}-icon`
      }) : Nt(Yf);
      v = (t = l()) != null ? t : $, h = !u;
    }
    if (!v)
      return null;
    const _ = Nt("span", {
      class: `${o}-switcher-icon`,
      onClick: a
    }, v);
    return h ? Nt(Qe, {
      class: `${o}-icon-hover`
    }, () => _) : _;
  }
}), wp = Object.defineProperty, Sp = Object.defineProperties, Ep = Object.getOwnPropertyDescriptors, za = Object.getOwnPropertySymbols, Op = Object.prototype.hasOwnProperty, Pp = Object.prototype.propertyIsEnumerable, Va = (e, t, n) => t in e ? wp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ul = (e, t) => {
  for (var n in t || (t = {}))
    Op.call(t, n) && Va(e, n, t[n]);
  if (za)
    for (var n of za(t))
      Pp.call(t, n) && Va(e, n, t[n]);
  return e;
}, Na = (e, t) => Sp(e, Ep(t));
const Tr = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Bp(e, t) {
  return !!(Ke(e) ? t : e);
}
function xp(e, t) {
  const n = ul({}, e);
  return t && Object.keys(t).forEach((l) => {
    const r = t[l];
    r !== l && (n[l] = e[r], delete n[r]);
  }), n;
}
function La({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: o,
  level: l
}) {
  return Ke(e) ? Ue(t) ? t(o, {
    isLeaf: n,
    level: l
  }) : t ?? !1 : e;
}
function Tp(e) {
  var t, n;
  const {
    treeNodeData: o,
    parentNode: l,
    isTail: r = !0,
    treeProps: a
  } = e, {
    fieldNames: i
  } = a || {}, s = xp(o, i), u = a.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), c = l ? l.level + 1 : 0, p = Na(ul({}, Gt(s, ["children"])), {
    key: (n = s.key) != null ? n : Tr(),
    selectable: La({
      subEnable: s.selectable,
      superEnable: a == null ? void 0 : a.selectable,
      isLeaf: u,
      level: c,
      treeNodeData: o
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: La({
      subEnable: s.checkable,
      superEnable: a == null ? void 0 : a.checkable,
      isLeaf: u,
      level: c,
      treeNodeData: o
    }),
    isLeaf: u,
    isTail: r,
    blockNode: !!(a != null && a.blockNode),
    showLine: !!(a != null && a.showLine),
    level: c,
    lineless: l ? [...l.lineless, l.isTail] : [],
    draggable: Bp(s.draggable, a == null ? void 0 : a.draggable)
  });
  return Na(ul({}, p), {
    treeNodeProps: p,
    treeNodeData: o,
    parent: l,
    parentKey: l == null ? void 0 : l.key,
    pathParentKeys: l ? [...l.pathParentKeys, l.key] : []
  });
}
function Ip(e, t) {
  function n(o, l) {
    if (!o)
      return;
    const {
      fieldNames: r
    } = t, a = [];
    return o.forEach((i, s) => {
      const u = Tp({
        treeNodeData: i,
        treeProps: t,
        parentNode: l,
        isTail: s === o.length - 1
      });
      u.children = n(i[(r == null ? void 0 : r.children) || "children"], u), a.push(u);
    }), a;
  }
  return n(e);
}
function Ir() {
  const e = gt(), t = () => {
    var o;
    return (o = e == null ? void 0 : e.vnode.key) != null ? o : Tr();
  }, n = y(t());
  return ct(() => {
    n.value = t();
  }), n;
}
function zp(e) {
  const {
    key: t,
    refTitle: n
  } = ye(e), o = Zn(), l = y(!1), r = y(!1), a = y(!1), i = y(0), s = ol((u) => {
    if (!n.value)
      return;
    const c = n.value.getBoundingClientRect(), p = window.pageYOffset + c.top, {
      pageY: v
    } = u, h = c.height / 4, _ = v - p;
    i.value = _ < h ? -1 : _ < c.height - h ? 0 : 1, a.value = o.allowDrop ? o.allowDrop(t.value, i.value) : !0;
  });
  return {
    isDragOver: l,
    isDragging: r,
    isAllowDrop: a,
    dropPosition: i,
    setDragStatus(u, c) {
      switch (u) {
        case "dragStart":
          r.value = !0, i.value = 0, o.onDragStart && o.onDragStart(t.value, c);
          break;
        case "dragEnd":
          r.value = !1, l.value = !1, i.value = 0, s.cancel(), o.onDragEnd && o.onDragEnd(t.value, c);
          break;
        case "dragOver":
          l.value = !0, s(c), o.onDragOver && o.onDragOver(t.value, c);
          break;
        case "dragLeave":
          l.value = !1, i.value = 0, s.cancel(), o.onDragLeave && o.onDragLeave(t.value, c);
          break;
        case "drop":
          o.onDrop && o.onDrop(t.value, i.value, c), l.value = !1, i.value = 0, s.cancel();
          break;
      }
    }
  };
}
function Vp(e) {
  return Re(e) ? e : [e];
}
const Np = P({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: kp,
    Checkbox: gr,
    RenderFunction: Or,
    IconDragDotVertical: Df
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
    const t = Ir(), n = U("tree-node"), o = Zn(), l = d(() => {
      var B;
      return (B = o.key2TreeNode) == null ? void 0 : B.get(t.value);
    }), r = d(() => l.value.treeNodeData), a = d(() => l.value.children), i = d(() => {
      var B;
      const Y = (B = o.treeProps) == null ? void 0 : B.actionOnNodeClick;
      return Y ? Vp(Y) : [];
    }), {
      isLeaf: s,
      isTail: u,
      selectable: c,
      disabled: p,
      disableCheckbox: v,
      draggable: h
    } = ye(e), _ = d(() => {
      var B;
      return [`${n}`, {
        [`${n}-selected`]: j.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: u.value,
        [`${n}-expanded`]: M.value,
        [`${n}-disabled-selectable`]: !c.value && !((B = o.treeProps) != null && B.disableSelectActionOnly),
        [`${n}-disabled`]: p.value
      }];
    }), $ = y(), {
      isDragOver: w,
      isDragging: L,
      isAllowDrop: x,
      dropPosition: E,
      setDragStatus: b
    } = zp(Pe({
      key: t,
      refTitle: $
    })), k = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: w.value && x.value && E.value < 0,
      [`${n}-title-gap-bottom`]: w.value && x.value && E.value > 0,
      [`${n}-title-highlight`]: !L.value && w.value && x.value && E.value === 0,
      [`${n}-title-dragging`]: L.value,
      [`${n}-title-block`]: l.value.blockNode
    }]), m = d(() => {
      var B, Y;
      return (Y = (B = o.checkedKeys) == null ? void 0 : B.includes) == null ? void 0 : Y.call(B, t.value);
    }), g = d(() => {
      var B, Y;
      return (Y = (B = o.indeterminateKeys) == null ? void 0 : B.includes) == null ? void 0 : Y.call(B, t.value);
    }), j = d(() => {
      var B, Y;
      return (Y = (B = o.selectedKeys) == null ? void 0 : B.includes) == null ? void 0 : Y.call(B, t.value);
    }), M = d(() => {
      var B, Y;
      return (Y = (B = o.expandedKeys) == null ? void 0 : B.includes) == null ? void 0 : Y.call(B, t.value);
    }), A = d(() => {
      var B, Y;
      return (Y = (B = o.loadingKeys) == null ? void 0 : B.includes) == null ? void 0 : Y.call(B, t.value);
    }), O = d(() => o.dragIcon), W = d(() => o.nodeIcon);
    function q(B) {
      var Y, me;
      s.value || (!((Y = a.value) != null && Y.length) && Ue(o.onLoadMore) ? o.onLoadMore(t.value) : (me = o == null ? void 0 : o.onExpand) == null || me.call(o, !M.value, t.value, B));
    }
    const te = Pe({
      loading: A,
      checked: m,
      selected: j,
      indeterminate: g,
      expanded: M,
      isLeaf: s
    }), le = d(() => o.nodeTitle ? () => {
      var B;
      return (B = o.nodeTitle) == null ? void 0 : B.call(o, r.value, te);
    } : void 0), se = d(() => o.nodeExtra ? () => {
      var B;
      return (B = o.nodeExtra) == null ? void 0 : B.call(o, r.value, te);
    } : void 0);
    return {
      nodekey: t,
      refTitle: $,
      prefixCls: n,
      classNames: _,
      titleClassNames: k,
      indeterminate: g,
      checked: m,
      expanded: M,
      selected: j,
      treeTitle: le,
      treeNodeData: r,
      loading: A,
      treeDragIcon: O,
      treeNodeIcon: W,
      extra: se,
      nodeStatus: te,
      onCheckboxChange(B, Y) {
        var me;
        v.value || p.value || (me = o.onCheck) == null || me.call(o, B, t.value, Y);
      },
      onTitleClick(B) {
        var Y;
        i.value.includes("expand") && q(B), !(!c.value || p.value) && ((Y = o.onSelect) == null || Y.call(o, t.value, B));
      },
      onSwitcherClick: q,
      onDragStart(B) {
        var Y;
        if (h.value) {
          B.stopPropagation(), b("dragStart", B);
          try {
            (Y = B.dataTransfer) == null || Y.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(B) {
        h.value && (B.stopPropagation(), b("dragEnd", B));
      },
      onDragOver(B) {
        h && (B.stopPropagation(), B.preventDefault(), b("dragOver", B));
      },
      onDragLeave(B) {
        h.value && (B.stopPropagation(), b("dragLeave", B));
      },
      onDrop(B) {
        !h.value || !x.value || (B.stopPropagation(), B.preventDefault(), b("drop", B));
      }
    };
  }
}), Lp = ["data-level", "data-key"], Dp = ["draggable"];
function Ap(e, t, n, o, l, r) {
  const a = ee("NodeSwitcher"), i = ee("Checkbox"), s = ee("RenderFunction"), u = ee("IconDragDotVertical");
  return C(), N("div", {
    class: V(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [pe(" 缩进 "), D("span", {
    class: V(`${e.prefixCls}-indent`)
  }, [(C(!0), N(Oe, null, yt(e.level, (c) => (C(), N("span", {
    key: c,
    class: V([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[c - 1]
    }])
  }, null, 2))), 128))], 2), pe(" switcher "), D("span", {
    class: V([`${e.prefixCls}-switcher`, {
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
  }, dn({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: F(() => [pe(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), H(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: F(() => [pe(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), H(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), pe(" checkbox "), e.checkable ? (C(), J(i, {
    key: 0,
    disabled: e.disableCheckbox || e.disabled,
    "model-value": e.checked,
    indeterminate: e.indeterminate,
    "uninject-group-context": "",
    onChange: e.onCheckboxChange
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : pe("v-if", !0), pe(" 内容 "), D("span", {
    ref: "refTitle",
    class: V(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...c) => e.onDragStart && e.onDragStart(...c)),
    onDragend: t[1] || (t[1] = (...c) => e.onDragEnd && e.onDragEnd(...c)),
    onDragover: t[2] || (t[2] = (...c) => e.onDragOver && e.onDragOver(...c)),
    onDragleave: t[3] || (t[3] = (...c) => e.onDragLeave && e.onDragLeave(...c)),
    onDrop: t[4] || (t[4] = (...c) => e.onDrop && e.onDrop(...c)),
    onClick: t[5] || (t[5] = (...c) => e.onTitleClick && e.onTitleClick(...c))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? (C(), N("span", {
    key: 0,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [pe(" 节点图标 "), e.$slots.icon ? H(e.$slots, "icon", el(ie({
    key: 0
  }, e.nodeStatus))) : e.icon ? (C(), J(s, ie({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? (C(), J(s, ie({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : pe("v-if", !0)], 2)) : pe("v-if", !0), D("span", {
    class: V(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? (C(), J(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : (C(), N(Oe, {
    key: 1
  }, [pe(" 标题，treeTitle 优先级高于节点的 title "), H(e.$slots, "title", {
    title: e.title
  }, () => [Ie(xe(e.title), 1)])], 2112)), e.draggable ? (C(), N("span", {
    key: 2,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [pe(" 拖拽图标 "), e.$slots["drag-icon"] ? H(e.$slots, "drag-icon", el(ie({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? (C(), J(s, ie({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? (C(), J(s, ie({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : (C(), J(u, {
    key: 3
  }))], 2)) : pe("v-if", !0)], 2)], 42, Dp), pe(" 额外 "), e.extra ? (C(), J(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : pe("v-if", !0)], 10, Lp);
}
var cl = /* @__PURE__ */ oe(Np, [["render", Ap]]);
const jp = P({
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
function Mp(e, t, n, o, l, r) {
  return C(), J(Mn, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: F(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var Fp = /* @__PURE__ */ oe(jp, [["render", Mp]]);
const Kp = P({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: Fp,
    BaseTreeNode: cl
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${U("tree")}-node-list`], o = Zn(), {
      nodeKey: l
    } = ye(e), r = d(() => {
      var s, u;
      return (u = (s = o.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : u.call(s, l.value);
    }), a = d(() => {
      var s;
      const u = new Set(o.expandedKeys || []), c = (s = o.flattenTreeData) == null ? void 0 : s.filter((p) => {
        var v, h;
        return (v = p.pathParentKeys) != null && v.includes(l.value) ? !o.filterTreeNode || ((h = o.filterTreeNode) == null ? void 0 : h.call(o, p.treeNodeData)) : !1;
      });
      return c == null ? void 0 : c.filter((p) => {
        var v;
        if (r.value)
          return (v = p.pathParentKeys) == null ? void 0 : v.every((_) => u.has(_));
        const h = p.pathParentKeys.indexOf(l.value);
        return p.pathParentKeys.slice(h + 1).every((_) => u.has(_));
      });
    }), i = d(() => {
      var s, u;
      return ((s = o.currentExpandKeys) == null ? void 0 : s.includes(l.value)) && ((u = a.value) == null ? void 0 : u.length);
    });
    return {
      classNames: n,
      visibleNodeList: a,
      show: i,
      expanded: r,
      onTransitionEnd() {
        var s;
        (s = o.onExpandEnd) == null || s.call(o, l.value);
      }
    };
  }
});
function Rp(e, t, n, o, l, r) {
  const a = ee("BaseTreeNode"), i = ee("ExpandTransition");
  return C(), J(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: F(() => [e.show ? (C(), N("div", {
      key: 0,
      class: V(e.classNames)
    }, [(C(!0), N(Oe, null, yt(e.visibleNodeList, (s) => (C(), J(a, ie({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : pe("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var Hp = /* @__PURE__ */ oe(Kp, [["render", Rp]]), Wp = Object.defineProperty, Da = Object.getOwnPropertySymbols, qp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, Aa = (e, t, n) => t in e ? Wp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Up = (e, t) => {
  for (var n in t || (t = {}))
    qp.call(t, n) && Aa(e, n, t[n]);
  if (Da)
    for (var n of Da(t))
      Gp.call(t, n) && Aa(e, n, t[n]);
  return e;
}, Zp = P({
  name: "TreeNode",
  inheritAttrs: !1,
  props: Up({}, cl.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = Ir();
    return () => f(Oe, null, [f(cl, ie(e, n, {
      key: o.value
    }), t), f(Hp, {
      key: o.value,
      nodeKey: o.value
    }, null)]);
  }
});
function Yp(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: o,
    checkStrictly: l,
    halfCheckedKeys: r,
    onlyCheckLeaf: a
  } = ye(e), i = y(!1), s = y([]), u = y([]), c = y(), p = y(), v = (_) => mp({
    initCheckedKeys: _,
    key2TreeNode: o.value,
    checkStrictly: l.value,
    onlyCheckLeaf: a.value
  }), h = (_) => {
    const $ = v(_);
    [s.value, u.value] = $;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), Fn(() => {
    n.value ? [c.value, p.value] = v(n.value) : i.value && (c.value = void 0, p.value = void 0, s.value = [], u.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => c.value || s.value),
    indeterminateKeys: d(() => l.value && r.value ? r.value : p.value || u.value),
    setCheckedState(_, $, w = !1) {
      return w ? h(_) : (s.value = _, u.value = $), [s.value, u.value];
    }
  };
}
function Xp(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: o,
    showLine: l,
    blockNode: r,
    checkable: a,
    loadMore: i,
    draggable: s
  } = ye(e), u = y([]);
  Fn(() => {
    var v, h;
    u.value = Ip(t.value || [], {
      selectable: (v = o == null ? void 0 : o.value) != null ? v : !1,
      showLine: !!(l != null && l.value),
      blockNode: !!(r != null && r.value),
      checkable: (h = a == null ? void 0 : a.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const c = d(() => pp(u.value)), p = d(() => vp(c.value));
  return {
    treeData: u,
    flattenTreeData: c,
    key2TreeNode: p
  };
}
const Jp = P({
  name: "Tree",
  components: {
    VirtualList: Cr,
    TreeNode: Zp
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
      multiple: r,
      loadMore: a,
      checkStrictly: i,
      checkedKeys: s,
      defaultCheckedKeys: u,
      selectedKeys: c,
      defaultSelectedKeys: p,
      expandedKeys: v,
      defaultExpandedKeys: h,
      checkedStrategy: _,
      selectable: $,
      checkable: w,
      blockNode: L,
      fieldNames: x,
      size: E,
      defaultExpandAll: b,
      filterTreeNode: k,
      draggable: m,
      allowDrop: g,
      defaultExpandSelected: j,
      defaultExpandChecked: M,
      autoExpandParent: A,
      halfCheckedKeys: O,
      onlyCheckLeaf: W,
      animation: q
    } = ye(e), te = U("tree"), le = d(() => [`${te}`, {
      [`${te}-checkable`]: w.value,
      [`${te}-show-line`]: l.value
    }, `${te}-size-${E.value}`]), se = it(n, "switcher-icon"), B = it(n, "loading-icon"), Y = it(n, "drag-icon"), me = it(n, "icon"), ae = it(n, "title"), ce = it(n, "extra"), {
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ge
    } = Xp(Pe({
      treeData: o,
      selectable: $,
      showLine: l,
      blockNode: L,
      checkable: w,
      fieldNames: x,
      loadMore: a,
      draggable: m
    })), {
      checkedKeys: de,
      indeterminateKeys: Ce,
      setCheckedState: tt
    } = Yp(Pe({
      defaultCheckedKeys: u,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ge,
      halfCheckedKeys: O,
      onlyCheckLeaf: W
    })), [Te, Fe] = Ln((p == null ? void 0 : p.value) || [], Pe({
      value: c
    })), He = y([]), Ne = y();
    function Ye() {
      if (h != null && h.value) {
        const K = /* @__PURE__ */ new Set([]);
        return h.value.forEach((X) => {
          if (K.has(X))
            return;
          const Q = ge.value.get(X);
          Q && [...A.value ? Q.pathParentKeys : [], X].forEach((ue) => K.add(ue));
        }), [...K];
      }
      if (b.value)
        return be.value.filter((K) => K.children && K.children.length).map((K) => K.key);
      if (j.value || M.value) {
        const K = /* @__PURE__ */ new Set([]), X = (Q) => {
          Q.forEach((ue) => {
            const he = ge.value.get(ue);
            he && (he.pathParentKeys || []).forEach((_e) => K.add(_e));
          });
        };
        return j.value && X(Te.value), M.value && X(de.value), [...K];
      }
      return [];
    }
    const [Z, T] = Ln(Ye(), Pe({
      value: v
    })), G = y([]), fe = d(() => {
      const K = new Set(Z.value), X = new Set(G.value);
      return be.value.filter((Q) => {
        var ue;
        if (!(!k || !k.value || (k == null ? void 0 : k.value(Q.treeNodeData))))
          return !1;
        const _e = Ke(Q.parentKey), kt = (ue = Q.pathParentKeys) == null ? void 0 : ue.every((Vt) => K.has(Vt) && !X.has(Vt));
        return _e || kt;
      });
    });
    function ke(K, X = _.value) {
      let Q = [...K];
      return X === "parent" ? Q = K.filter((ue) => {
        const he = ge.value.get(ue);
        return he && !(!Ke(he.parentKey) && K.includes(he.parentKey));
      }) : X === "child" && (Q = K.filter((ue) => {
        var he, _e;
        return !((_e = (he = ge.value.get(ue)) == null ? void 0 : he.children) != null && _e.length);
      })), Q;
    }
    function Ee(K) {
      return K.map((X) => {
        var Q;
        return ((Q = ge.value.get(X)) == null ? void 0 : Q.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Je(K) {
      const {
        targetKey: X,
        targetChecked: Q,
        newCheckedKeys: ue,
        newIndeterminateKeys: he,
        event: _e
      } = K, kt = X ? ge.value.get(X) : void 0, Vt = ke(ue);
      t("update:checkedKeys", Vt), t("update:halfCheckedKeys", he), t("check", Vt, {
        checked: Q,
        node: kt == null ? void 0 : kt.treeNodeData,
        checkedNodes: Ee(Vt),
        halfCheckedKeys: he,
        halfCheckedNodes: Ee(he),
        e: _e
      });
    }
    function Ve(K) {
      const {
        targetKey: X,
        targetSelected: Q,
        newSelectedKeys: ue,
        event: he
      } = K, _e = X ? ge.value.get(X) : void 0;
      t("update:selectedKeys", ue), t("select", ue, {
        selected: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        selectedNodes: Ee(ue),
        e: he
      });
    }
    function $t(K) {
      const {
        targetKey: X,
        targetExpanded: Q,
        newExpandedKeys: ue,
        event: he
      } = K, _e = X ? ge.value.get(X) : void 0;
      t("expand", ue, {
        expanded: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        expandedNodes: Ee(ue),
        e: he
      }), t("update:expandedKeys", ue);
    }
    function Jt(K) {
      const [X, Q] = tt(K, [], !0);
      Je({
        newCheckedKeys: X,
        newIndeterminateKeys: Q
      });
    }
    function Ct(K) {
      let X = K;
      !r.value && K.length > 1 && (X = [K[0]]), Fe(X), Ve({
        newSelectedKeys: X
      });
    }
    function lt(K) {
      G.value = [], T(K), $t({
        newExpandedKeys: K
      });
    }
    function zt(K, X, Q) {
      if (!K.length)
        return;
      let ue = [...de.value], he = [...Ce.value];
      K.forEach((_e) => {
        const kt = ge.value.get(_e);
        kt && ([ue, he] = Ia({
          node: kt,
          checked: X,
          checkedKeys: [...ue],
          indeterminateKeys: [...he],
          checkStrictly: i.value
        }));
      }), tt(ue, he), Je({
        targetKey: Q,
        targetChecked: Ke(Q) ? void 0 : X,
        newCheckedKeys: ue,
        newIndeterminateKeys: he
      });
    }
    function Qt(K, X, Q) {
      if (!K.length)
        return;
      let ue;
      if (r.value) {
        const he = new Set(Te.value);
        K.forEach((_e) => {
          X ? he.add(_e) : he.delete(_e);
        }), ue = [...he];
      } else
        ue = X ? [K[0]] : [];
      Fe(ue), Ve({
        targetKey: Q,
        targetSelected: Ke(Q) ? void 0 : X,
        newSelectedKeys: ue
      });
    }
    function I(K, X, Q) {
      const ue = new Set(Z.value);
      K.forEach((_e) => {
        X ? ue.add(_e) : ue.delete(_e), Ze(_e);
      });
      const he = [...ue];
      T(he), $t({
        targetKey: Q,
        targetExpanded: Ke(Q) ? void 0 : X,
        newExpandedKeys: he
      });
    }
    function S(K, X, Q) {
      const ue = ge.value.get(X);
      if (!ue)
        return;
      const [he, _e] = Ia({
        node: ue,
        checked: K,
        checkedKeys: de.value,
        indeterminateKeys: Ce.value,
        checkStrictly: i.value
      });
      tt(he, _e), Je({
        targetKey: X,
        targetChecked: K,
        newCheckedKeys: he,
        newIndeterminateKeys: _e,
        event: Q
      });
    }
    function z(K, X) {
      if (!ge.value.get(K))
        return;
      let ue, he;
      if (r.value) {
        const _e = new Set(Te.value);
        he = !_e.has(K), he ? _e.add(K) : _e.delete(K), ue = [..._e];
      } else
        he = !0, ue = [K];
      Fe(ue), Ve({
        targetKey: K,
        targetSelected: he,
        newSelectedKeys: ue,
        event: X
      });
    }
    function ne(K, X, Q) {
      if (G.value.includes(X) || !ge.value.get(X))
        return;
      const he = new Set(Z.value);
      K ? he.add(X) : he.delete(X);
      const _e = [...he];
      T(_e), q.value && G.value.push(X), $t({
        targetKey: X,
        targetExpanded: K,
        newExpandedKeys: _e,
        event: Q
      });
    }
    function Ze(K) {
      const X = G.value.indexOf(K);
      G.value.splice(X, 1);
    }
    const Ge = d(() => a != null && a.value ? async (K) => {
      if (!Ue(a.value))
        return;
      const X = ge.value.get(K);
      if (!X)
        return;
      const {
        treeNodeData: Q
      } = X;
      He.value = [.../* @__PURE__ */ new Set([...He.value, K])];
      try {
        await a.value(Q), He.value = He.value.filter((ue) => ue !== K), ne(!0, K), de.value.includes(K) && S(!0, K);
      } catch (ue) {
        He.value = He.value.filter((he) => he !== K), console.error("[tree]load data error: ", ue);
      }
    } : void 0), rt = Pe({
      treeProps: e,
      switcherIcon: se,
      loadingIcon: B,
      dragIcon: Y,
      nodeIcon: me,
      nodeTitle: ae,
      nodeExtra: ce,
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ge,
      checkedKeys: de,
      indeterminateKeys: Ce,
      selectedKeys: Te,
      expandedKeys: Z,
      loadingKeys: He,
      currentExpandKeys: G,
      onLoadMore: Ge,
      filterTreeNode: k,
      onCheck: S,
      onSelect: z,
      onExpand: ne,
      onExpandEnd: Ze,
      allowDrop(K, X) {
        const Q = ge.value.get(K);
        return Q && Ue(g.value) ? !!g.value({
          dropNode: Q.treeNodeData,
          dropPosition: X
        }) : !0;
      },
      onDragStart(K, X) {
        const Q = ge.value.get(K);
        Ne.value = Q, Q && t("dragStart", X, Q.treeNodeData);
      },
      onDragEnd(K, X) {
        const Q = ge.value.get(K);
        Ne.value = void 0, Q && t("dragEnd", X, Q.treeNodeData);
      },
      onDragOver(K, X) {
        const Q = ge.value.get(K);
        Q && t("dragOver", X, Q.treeNodeData);
      },
      onDragLeave(K, X) {
        const Q = ge.value.get(K);
        Q && t("dragLeave", X, Q.treeNodeData);
      },
      onDrop(K, X, Q) {
        const ue = ge.value.get(K);
        Ne.value && ue && !(ue.key === Ne.value.key || ue.pathParentKeys.includes(Ne.value.key || "")) && t("drop", {
          e: Q,
          dragNode: Ne.value.treeNodeData,
          dropNode: ue.treeNodeData,
          dropPosition: X
        });
      }
    });
    return bt(Br, rt), {
      classNames: le,
      visibleTreeNodeList: fe,
      treeContext: rt,
      virtualListRef: y(),
      computedSelectedKeys: Te,
      computedExpandedKeys: Z,
      computedCheckedKeys: de,
      computedIndeterminateKeys: Ce,
      getPublicCheckedKeys: ke,
      getNodes: Ee,
      internalCheckNodes: zt,
      internalSetCheckedKeys: Jt,
      internalSelectNodes: Qt,
      internalSetSelectedKeys: Ct,
      internalExpandNodes: I,
      internalSetExpandedKeys: lt
    };
  },
  methods: {
    toggleCheck(e, t) {
      const {
        key2TreeNode: n,
        onCheck: o,
        checkedKeys: l
      } = this.treeContext, r = !l.includes(e), a = n.get(e);
      a && Mt(a) && o(r, e, t);
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
        return l && Mt(l);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: o,
        treeContext: l
      } = this, {
        key2TreeNode: r
      } = l, a = Re(e), i = (a ? e : [e]).filter((s) => {
        const u = r.get(s);
        return u && Mt(u) && (o || !n || hp(u));
      });
      this.internalCheckNodes(i, t, a ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((o) => {
        const l = t.get(o);
        return l && xa(l);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, o = Re(e), l = (o ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && xa(a);
      });
      this.internalSelectNodes(l, t, o ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((o) => {
        const l = t.get(o);
        return l && Ta(l);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, o = Re(e), l = (o ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && Ta(a);
      });
      this.internalExpandNodes(l, t, o ? void 0 : e);
    }
  }
});
function Qp(e, t, n, o, l, r) {
  const a = ee("TreeNode"), i = ee("VirtualList");
  return C(), N("div", {
    class: V(e.classNames)
  }, [e.virtualListProps ? (C(), J(i, ie({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: F(({
      item: s
    }) => [f(a, ie({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : (C(!0), N(Oe, {
    key: 1
  }, yt(e.visibleTreeNodeList, (s) => (C(), J(a, ie({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var Uo = /* @__PURE__ */ oe(Jp, [["render", Qp]]);
const ev = Object.assign(Uo, {
  install: (e, t) => {
    Me(e, t);
    const n = je(t);
    e.component(n + Uo.name, Uo);
  }
}), tv = P({
  name: "TypographyEditContent",
  components: {
    Input: kl
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
    function r(i) {
      t("update:text", i), t("change", i);
    }
    function a() {
      t("end");
    }
    return Ae(() => {
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
      onBlur: a,
      onChange: r,
      onEnd: a
    };
  }
});
function nv(e, t, n, o, l, r) {
  const a = ee("Input");
  return C(), N("div", {
    class: V(e.classNames)
  }, [f(a, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: Ya(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var ov = /* @__PURE__ */ oe(tv, [["render", nv]]);
const lv = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), av = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rv = /* @__PURE__ */ D("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), iv = [rv];
function sv(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, iv, 14, av);
}
var Zo = /* @__PURE__ */ oe(lv, [["render", sv]]);
const uv = Object.assign(Zo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Zo.name, Zo);
  }
}), cv = P({
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
      const a = {};
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), dv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], fv = /* @__PURE__ */ D("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), pv = [fv];
function vv(e, t, n, o, l, r) {
  return C(), N("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, pv, 14, dv);
}
var Yo = /* @__PURE__ */ oe(cv, [["render", vv]]);
const hv = Object.assign(Yo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Yo.name, Yo);
  }
}), mv = P({
  name: "TypographyOperations",
  components: {
    Tooltip: bn,
    IconCheckCircleFill: bl,
    IconCopy: uv,
    IconEdit: hv
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
    } = pl();
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
function yv(e, t, n, o, l, r) {
  const a = ee("IconEdit"), i = ee("Tooltip"), s = ee("IconCheckCircleFill"), u = ee("IconCopy");
  return C(), N(Oe, null, [e.editable ? (C(), J(i, ie({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: F(() => [D("span", {
      class: V(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = at((...c) => e.onEditClick && e.onEditClick(...c), ["stop"]))
    }, [f(a)], 2)]),
    _: 1
  }, 16, ["content"])) : pe("v-if", !0), e.copyable ? (C(), J(i, el(ie({
    key: 1
  }, e.copyTooltipProps)), {
    content: F(() => [H(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [Ie(xe(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: F(() => [D("span", {
      class: V({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = at((...c) => e.onCopyClick && e.onCopyClick(...c), ["stop"]))
    }, [H(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? (C(), J(s, {
      key: 0
    })) : (C(), J(u, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : pe("v-if", !0), e.showExpand ? (C(), N("a", {
    key: 2,
    class: V(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = at((...c) => e.onExpandClick && e.onExpandClick(...c), ["stop"]))
  }, [H(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [Ie(xe(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : pe("v-if", !0)], 64);
}
var ja = /* @__PURE__ */ oe(mv, [["render", yv]]);
let Le;
function gv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function Xo(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var bv = (e, t, n, o) => {
  Le || (Le = document.createElement("div"), document.body.appendChild(Le));
  const {
    rows: l,
    suffix: r,
    ellipsisStr: a
  } = t, i = window.getComputedStyle(e), s = gv(i), u = Xo(i.lineHeight), c = Math.round(u * l + Xo(i.paddingTop) + Xo(i.paddingBottom));
  Le.setAttribute("style", s), Le.setAttribute("aria-hidden", "true"), Le.style.height = "auto", Le.style.minHeight = "auto", Le.style.maxHeight = "auto", Le.style.position = "fixed", Le.style.left = "0", Le.style.top = "-99999999px", Le.style.zIndex = "-200", Le.style.whiteSpace = "normal";
  const p = Xa({
    render() {
      return f("span", null, [n]);
    }
  });
  p.mount(Le);
  const v = Array.prototype.slice.apply(Le.childNodes[0].cloneNode(!0).childNodes);
  p.unmount(), Le.innerHTML = "";
  const h = document.createTextNode(`${a}${r}`);
  Le.appendChild(h), v.forEach((L) => {
    Le.appendChild(L);
  });
  const _ = document.createTextNode(o);
  Le.insertBefore(_, h);
  function $() {
    return Le.offsetHeight <= c;
  }
  if ($())
    return {
      ellipsis: !1,
      text: o
    };
  function w(L, x = 0, E = o.length, b = 0) {
    const k = Math.floor((x + E) / 2), m = o.slice(0, k);
    if (L.textContent = m, x >= E - 1)
      for (let g = E; g >= x; g -= 1) {
        const j = o.slice(0, g);
        if (L.textContent = j, $() || !j)
          return;
      }
    $() ? w(L, k, E, k) : w(L, x, k, b);
  }
  return w(_), {
    text: _.textContent,
    ellipsis: !0
  };
};
const _v = async (e) => {
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
  const o = window.getSelection(), l = window.document.createRange();
  o == null || o.removeAllRanges(), l.selectNode(n), o == null || o.addRange(l);
  try {
    window.document.execCommand("copy");
  } catch (r) {
    console.error(`execCommand Error: ${r}`);
  }
  o == null || o.removeAllRanges(), window.document.body.removeChild(n);
};
let Lt;
function $v(e) {
  if (!e)
    return "";
  Lt || (Lt = document.createElement("div"), Lt.setAttribute("aria-hidden", "true"), document.body.appendChild(Lt));
  const t = Xa({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(Lt);
  const n = Lt.innerText;
  return t.unmount(), n;
}
var Cv = Object.defineProperty, kv = Object.defineProperties, wv = Object.getOwnPropertyDescriptors, Ma = Object.getOwnPropertySymbols, Sv = Object.prototype.hasOwnProperty, Ev = Object.prototype.propertyIsEnumerable, Fa = (e, t, n) => t in e ? Cv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ov = (e, t) => {
  for (var n in t || (t = {}))
    Sv.call(t, n) && Fa(e, n, t[n]);
  if (Ma)
    for (var n of Ma(t))
      Ev.call(t, n) && Fa(e, n, t[n]);
  return e;
}, Pv = (e, t) => kv(e, wv(t));
function zr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !fl(e);
}
function Bv(e) {
  const {
    bold: t,
    mark: n,
    underline: o,
    delete: l,
    code: r
  } = e, a = [];
  return t && a.push("b"), o && a.push("u"), l && a.push("del"), r && a.push("code"), n && a.push("mark"), a;
}
function Ka(e, t) {
  const {
    mark: n
  } = e, o = Bv(e), l = De(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return o.reduce((r, a) => f(a, a === "mark" ? {
    style: l
  } : {}, zr(r) ? r : {
    default: () => [r]
  }), t);
}
function xv(e) {
  const t = !!e.showTooltip, n = De(e.showTooltip) && e.showTooltip.type === "popover" ? Nc : bn, o = De(e.showTooltip) && e.showTooltip.props || {};
  return Pv(Ov({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: !1,
    css: !1
  }, Gt(e, ["showTooltip"])), {
    showTooltip: t,
    TooltipComponent: n,
    tooltipProps: o
  });
}
var Tv = P({
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
      defaultEditing: r,
      ellipsis: a,
      copyable: i,
      editable: s,
      copyText: u,
      editText: c,
      copyDelay: p,
      component: v
    } = ye(e), h = U("typography"), _ = d(() => [h, {
      [`${h}-${e.type}`]: e.type,
      [`${h}-disabled`]: e.disabled
    }]), $ = y(), w = y(""), [L, x] = Ln(r.value, Pe({
      value: l
    })), E = d(() => s.value && L.value);
    function b() {
      n("update:editing", !0), n("editStart"), x(!0);
    }
    function k(de) {
      n("update:editText", de), n("change", de);
    }
    function m() {
      L.value && (n("update:editing", !1), n("editEnd"), x(!1));
    }
    const g = y(!1);
    let j = null;
    function M() {
      var de;
      const Ce = (de = u.value) != null ? de : w.value;
      _v(Ce || ""), g.value = !0, n("copy", Ce), j = setTimeout(() => {
        g.value = !1;
      }, p.value);
    }
    Qo(() => {
      j && clearTimeout(j), j = null;
    });
    const A = y(!1), O = y(!1), W = y(""), q = d(() => xv(De(a.value) && a.value || {}));
    let te = null;
    function le() {
      const de = !O.value;
      O.value = de, n("expand", de);
    }
    function se(de = !1) {
      return q.value.css ? f(ja, {
        editable: s.value,
        copyable: i.value,
        expandable: q.value.expandable,
        isCopied: g.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: de || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: b,
        onCopy: M,
        onExpand: le
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(ja, {
        editable: s.value,
        copyable: i.value,
        expandable: q.value.expandable,
        isCopied: g.value,
        isEllipsis: A.value,
        expanded: O.value,
        forceRenderExpand: de,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: b,
        onCopy: M,
        onExpand: le
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      });
    }
    function B() {
      if (!$.value)
        return;
      const {
        ellipsis: de,
        text: Ce
      } = bv($.value, q.value, se(!!q.value.expandable), w.value);
      A.value !== de && (A.value = de, q.value.css || n("ellipsis", de)), W.value !== Ce && (W.value = Ce || "");
    }
    function Y() {
      a.value && !O.value && (Vn(te), te = dr(() => {
        B();
      }));
    }
    Qo(() => {
      Vn(te);
    }), ve(() => q.value.rows, () => {
      Y();
    }), ve(a, (de) => {
      de ? Y() : A.value = !1;
    });
    let me = [];
    const ae = () => {
      if (a.value || i.value || s.value) {
        const de = $v(me);
        de !== w.value && (w.value = de, Y());
      }
    };
    Ae(ae), ct(ae);
    const ce = y(), Se = y(!1), be = () => {
      if ($.value && ce.value) {
        const de = ce.value.offsetHeight > $.value.offsetHeight;
        de !== Se.value && (Se.value = de, n("ellipsis", de));
      }
    }, ge = d(() => O.value ? {} : {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": q.value.rows,
      "-webkit-box-orient": "vertical"
    });
    return () => {
      var de, Ce;
      if (me = ((de = t.default) == null ? void 0 : de.call(t)) || [], E.value) {
        const fe = (Ce = c.value) != null ? Ce : w.value;
        return f(ov, {
          text: fe,
          onChange: (ke) => {
            ke !== fe && k(ke);
          },
          onEnd: m
        }, null);
      }
      const {
        suffix: tt,
        ellipsisStr: Te,
        showTooltip: Fe,
        tooltipProps: He,
        TooltipComponent: Ne
      } = q.value, Ye = A.value && !O.value, Z = Ye && !Fe ? {
        title: w.value
      } : {}, T = v.value;
      if (q.value.css) {
        const fe = Ka(e, me), ke = f(T, ie({
          class: _.value,
          ref: $,
          style: ge.value
        }, Z, o), {
          default: () => [f("span", {
            ref: ce
          }, [fe])]
        });
        return Se.value ? f(Ne, ie(He, {
          onResize: () => be()
        }), {
          default: () => [ke],
          content: () => w.value
        }) : f(fn, {
          onResize: () => {
            be();
          }
        }, zr(ke) ? ke : {
          default: () => [ke]
        });
      }
      const G = Ka(e, Ye ? W.value : me);
      return f(fn, {
        onResize: () => Y()
      }, {
        default: () => [f(T, ie({
          class: _.value,
          ref: $
        }, Z, o), {
          default: () => [Ye && Fe ? f(Ne, He, {
            default: () => [f("span", null, [G])],
            content: () => w.value
          }) : G, Ye ? Te : null, tt, se()]
        })]
      });
    };
  }
}), Iv = P({
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
    } = ye(e), o = U("typography"), l = d(() => t != null && t.value ? "blockquote" : "div"), r = d(() => [{
      [`${o}-spacing-close`]: (n == null ? void 0 : n.value) === "close"
    }]);
    return {
      component: l,
      classNames: r
    };
  },
  render() {
    const {
      component: e,
      classNames: t
    } = this;
    return f(Tv, ie({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function zv(e) {
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
function Vv(e, t, n, o) {
  const l = n ?? y(0);
  return ve(e, (r) => {
    if (!r)
      return;
    const a = zv(t);
    r.style.cursor = a.getCursorIcon();
    const i = a.getMoveIncrementHandler(), s = {
      x: 0,
      y: 0
    }, u = (v) => {
      const h = i(s, v);
      (!o || o(l.value + h)) && (l.value += i(s, v)), s.x = v.x, s.y = v.y;
    }, c = (v) => {
      v.stopPropagation();
    }, p = (v) => {
      v.stopPropagation(), document.querySelector("body").style.cursor = "default", document.removeEventListener("mousemove", u);
    };
    r.addEventListener("mousedown", (v) => {
      v.stopPropagation(), document.querySelector("body").style.cursor = r.style.cursor, s.x = v.x, s.y = v.y, document.addEventListener("mousemove", u), document.addEventListener("mouseup", c, {
        capture: !0,
        once: !0
      }), document.addEventListener("click", p, {
        capture: !0,
        once: !0
      });
    }, {
      capture: !0
    });
  }), l;
}
function Yn(e) {
  function t(r) {
    return d(() => {
      const i = wt(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue(wt(r)) : "";
    });
  }
  function n(r) {
    return d(() => {
      const i = wt(e);
      if (i) {
        const s = wt(r);
        return i.style[s];
      }
      return "";
    });
  }
  function o(r) {
    const a = r ?? t("display");
    return d(() => wt(e) ? {
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
  function l() {
    return d(() => {
      const a = wt(e);
      if (!a || !a.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Yn(a.parentElement).getFlexBoxInfo();
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
const un = /* @__PURE__ */ new Map();
function Nv(e) {
  ve(e, (t) => {
    if (!t) {
      un.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const n = Yn(t);
    un.forEach((o, l) => {
      o.value = n.getComputedStyle(l).value;
    });
  });
}
function Lv(e) {
  return un.has(e) || un.set(e, y(null)), un.get(e);
}
function Pt(e) {
  return ni() ? (oi(e), !0) : !1;
}
function Be(e) {
  return typeof e == "function" ? e() : R(e);
}
const vn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dv = (e) => e != null, Av = Object.prototype.toString, jv = (e) => Av.call(e) === "[object Object]", dl = () => {
};
function Mv(e, t) {
  function n(...o) {
    return new Promise((l, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(r);
    });
  }
  return n;
}
const Fv = (e) => e();
function Kv(e, t = {}) {
  let n, o, l = dl;
  const r = (i) => {
    clearTimeout(i), l(), l = dl;
  };
  return (i) => {
    const s = Be(e), u = Be(t.maxWait);
    return n && r(n), s <= 0 || u !== void 0 && u <= 0 ? (o && (r(o), o = null), Promise.resolve(i())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, u && !o && (o = setTimeout(() => {
        n && r(n), o = null, c(i());
      }, u)), n = setTimeout(() => {
        o && r(o), o = null, c(i());
      }, s);
    });
  };
}
function Rv(e) {
  return e || gt();
}
function Hv(e, t, n = {}) {
  const {
    eventFilter: o = Fv,
    ...l
  } = n;
  return ve(
    e,
    Mv(
      o,
      t
    ),
    l
  );
}
function Wv(e, t = {}) {
  if (!Kn(e))
    return ye(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const o in e.value)
    n[o] = ti(() => ({
      get() {
        return e.value[o];
      },
      set(l) {
        var r;
        if ((r = Be(t.replaceRef)) != null ? r : !0)
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
function Vr(e, t = !0, n) {
  Rv() ? Ae(e, n) : t ? e() : qe(e);
}
function qv(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: l = !1
  } = n;
  let r = null;
  const a = y(!1);
  function i() {
    r && (clearInterval(r), r = null);
  }
  function s() {
    a.value = !1, i();
  }
  function u() {
    const c = Be(t);
    c <= 0 || (a.value = !0, l && e(), i(), r = setInterval(e, c));
  }
  if (o && vn && u(), Kn(t) || typeof t == "function") {
    const c = ve(t, () => {
      a.value && vn && u();
    });
    Pt(c);
  }
  return Pt(s), {
    isActive: a,
    pause: s,
    resume: u
  };
}
function Gv(e, t, n = {}) {
  const {
    debounce: o = 0,
    maxWait: l = void 0,
    ...r
  } = n;
  return Hv(
    e,
    t,
    {
      ...r,
      eventFilter: Kv(o, { maxWait: l })
    }
  );
}
function Ht(e) {
  var t;
  const n = Be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _t = vn ? window : void 0, Uv = vn ? window.document : void 0;
function Xe(...e) {
  let t, n, o, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, l] = e, t = _t) : [t, n, o, l] = e, !t)
    return dl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], a = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, v, h) => (c.addEventListener(p, v, h), () => c.removeEventListener(p, v, h)), s = ve(
    () => [Ht(t), Be(l)],
    ([c, p]) => {
      if (a(), !c)
        return;
      const v = jv(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((h) => o.map((_) => i(c, h, _, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    s(), a();
  };
  return Pt(u), u;
}
function Zv() {
  const e = y(!1), t = gt();
  return t && Ae(() => {
    e.value = !0;
  }, t), e;
}
function Xn(e) {
  const t = Zv();
  return d(() => (t.value, !!e()));
}
function Nr(e, t, n = {}) {
  const { window: o = _t, ...l } = n;
  let r;
  const a = Xn(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => {
    const v = Be(e), h = (Array.isArray(v) ? v : [v]).map(Ht).filter(Dv);
    return new Set(h);
  }), u = ve(
    () => s.value,
    (v) => {
      i(), a.value && v.size && (r = new MutationObserver(t), v.forEach((h) => r.observe(h, l)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), u();
  };
  return Pt(p), {
    isSupported: a,
    stop: p,
    takeRecords: c
  };
}
function Yv(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: l = _t
  } = t, r = y(!1), a = o ? 1e3 / o : null;
  let i = 0, s = null;
  function u(v) {
    if (!r.value || !l)
      return;
    i || (i = v);
    const h = v - i;
    if (a && h < a) {
      s = l.requestAnimationFrame(u);
      return;
    }
    i = v, e({ delta: h, timestamp: v }), s = l.requestAnimationFrame(u);
  }
  function c() {
    !r.value && l && (r.value = !0, i = 0, s = l.requestAnimationFrame(u));
  }
  function p() {
    r.value = !1, s != null && l && (l.cancelAnimationFrame(s), s = null);
  }
  return n && c(), Pt(p), {
    isActive: qt(r),
    pause: p,
    resume: c
  };
}
function Xv(e, t = {}) {
  const { window: n = _t } = t, o = Xn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let l;
  const r = y(!1), a = (u) => {
    r.value = u.matches;
  }, i = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", a) : l.removeListener(a));
  }, s = Fn(() => {
    o.value && (i(), l = n.matchMedia(Be(e)), "addEventListener" in l ? l.addEventListener("change", a) : l.addListener(a), r.value = l.matches);
  });
  return Pt(() => {
    s(), i(), l = void 0;
  }), r;
}
function Jv(e, t = {}) {
  var n, o;
  const {
    pointerTypes: l,
    preventDefault: r,
    stopPropagation: a,
    exact: i,
    onMove: s,
    onEnd: u,
    onStart: c,
    initialValue: p,
    axis: v = "both",
    draggingElement: h = _t,
    containerElement: _,
    handle: $ = e
  } = t, w = y(
    (n = Be(p)) != null ? n : { x: 0, y: 0 }
  ), L = y(), x = (g) => l ? l.includes(g.pointerType) : !0, E = (g) => {
    Be(r) && g.preventDefault(), Be(a) && g.stopPropagation();
  }, b = (g) => {
    var j;
    if (g.button !== 0 || Be(t.disabled) || !x(g) || Be(i) && g.target !== Be(e))
      return;
    const M = Be(_), A = (j = M == null ? void 0 : M.getBoundingClientRect) == null ? void 0 : j.call(M), O = Be(e).getBoundingClientRect(), W = {
      x: g.clientX - (M ? O.left - A.left + M.scrollLeft : O.left),
      y: g.clientY - (M ? O.top - A.top + M.scrollTop : O.top)
    };
    (c == null ? void 0 : c(W, g)) !== !1 && (L.value = W, E(g));
  }, k = (g) => {
    if (Be(t.disabled) || !x(g) || !L.value)
      return;
    const j = Be(_), M = Be(e).getBoundingClientRect();
    let { x: A, y: O } = w.value;
    (v === "x" || v === "both") && (A = g.clientX - L.value.x, j && (A = Math.min(Math.max(0, A), j.scrollWidth - M.width))), (v === "y" || v === "both") && (O = g.clientY - L.value.y, j && (O = Math.min(Math.max(0, O), j.scrollHeight - M.height))), w.value = {
      x: A,
      y: O
    }, s == null || s(w.value, g), E(g);
  }, m = (g) => {
    Be(t.disabled) || !x(g) || L.value && (L.value = void 0, u == null || u(w.value, g), E(g));
  };
  if (vn) {
    const g = { capture: (o = t.capture) != null ? o : !0 };
    Xe($, "pointerdown", b, g), Xe(h, "pointermove", k, g), Xe(h, "pointerup", m, g);
  }
  return {
    ...Wv(w),
    position: w,
    isDragging: d(() => !!L.value),
    style: d(
      () => `left:${w.value.x}px;top:${w.value.y}px;`
    )
  };
}
function Qv(e, t, n = {}) {
  const { window: o = _t, ...l } = n;
  let r;
  const a = Xn(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((p) => Ht(p)) : [Ht(e)]), u = ve(
    s,
    (p) => {
      if (i(), a.value && o) {
        r = new ResizeObserver(t);
        for (const v of p)
          v && r.observe(v, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), u();
  };
  return Pt(c), {
    isSupported: a,
    stop: c
  };
}
function Lr(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: o = !0,
    windowScroll: l = !0,
    immediate: r = !0
  } = t, a = y(0), i = y(0), s = y(0), u = y(0), c = y(0), p = y(0), v = y(0), h = y(0);
  function _() {
    const $ = Ht(e);
    if (!$) {
      n && (a.value = 0, i.value = 0, s.value = 0, u.value = 0, c.value = 0, p.value = 0, v.value = 0, h.value = 0);
      return;
    }
    const w = $.getBoundingClientRect();
    a.value = w.height, i.value = w.bottom, s.value = w.left, u.value = w.right, c.value = w.top, p.value = w.width, v.value = w.x, h.value = w.y;
  }
  return Qv(e, _), ve(() => Ht(e), ($) => !$ && _()), Nr(e, _, {
    attributeFilter: ["style", "class"]
  }), l && Xe("scroll", _, { capture: !0, passive: !0 }), o && Xe("resize", _, { passive: !0 }), Vr(() => {
    r && _();
  }), {
    height: a,
    bottom: i,
    left: s,
    right: u,
    top: c,
    width: p,
    x: v,
    y: h,
    update: _
  };
}
function eh(e) {
  const {
    x: t,
    y: n,
    document: o = Uv,
    multiple: l,
    interval: r = "requestAnimationFrame",
    immediate: a = !0
  } = e, i = Xn(() => Be(l) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), s = y(null), u = () => {
    var p, v;
    s.value = Be(l) ? (p = o == null ? void 0 : o.elementsFromPoint(Be(t), Be(n))) != null ? p : [] : (v = o == null ? void 0 : o.elementFromPoint(Be(t), Be(n))) != null ? v : null;
  }, c = r === "requestAnimationFrame" ? Yv(u, { immediate: a }) : qv(u, r, { immediate: a });
  return {
    isSupported: i,
    element: s,
    ...c
  };
}
const th = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Dr(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: o = !1,
    initialValue: l = { x: 0, y: 0 },
    window: r = _t,
    target: a = r,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let u = null;
  const c = y(l.x), p = y(l.y), v = y(null), h = typeof t == "function" ? t : th[t], _ = (k) => {
    const m = h(k);
    u = k, m && ([c.value, p.value] = m, v.value = "mouse");
  }, $ = (k) => {
    if (k.touches.length > 0) {
      const m = h(k.touches[0]);
      m && ([c.value, p.value] = m, v.value = "touch");
    }
  }, w = () => {
    if (!u || !r)
      return;
    const k = h(u);
    u instanceof MouseEvent && k && (c.value = k[0] + r.scrollX, p.value = k[1] + r.scrollY);
  }, L = () => {
    c.value = l.x, p.value = l.y;
  }, x = s ? (k) => s(() => _(k), {}) : (k) => _(k), E = s ? (k) => s(() => $(k), {}) : (k) => $(k), b = s ? () => s(() => w(), {}) : () => w();
  if (a) {
    const k = { passive: !0 };
    Xe(a, ["mousemove", "dragover"], x, k), n && t !== "movement" && (Xe(a, ["touchstart", "touchmove"], E, k), o && Xe(a, "touchend", L, k)), i && t === "page" && Xe(r, "scroll", b, { passive: !0 });
  }
  return {
    x: c,
    y: p,
    sourceType: v
  };
}
function Bl(e = {}) {
  const {
    window: t = _t,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: r = !0
  } = e, a = y(n), i = y(o), s = () => {
    t && (r ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), Vr(s), Xe("resize", s, { passive: !0 }), l) {
    const u = Xv("(orientation: portrait)");
    ve(u, () => s());
  }
  return { width: a, height: i };
}
function Ar(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function nh() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function jr() {
  const {
    width: e,
    height: t
  } = Bl(), n = d(() => `0 0 ${e.value} ${t.value}`), o = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: o
  };
}
function oh(e) {
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
function Mr(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function xl(e, t) {
  if (!Mr(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function Bt(e, t) {
  if (!Mr(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length));
  return null;
}
function Fr(e, t) {
  const n = `*.${t.idPrefix}${e}`, o = document.querySelector(n);
  if (!o)
    throw new Error(`target element with id ${e} not found`);
  return o;
}
function lh(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function ah(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function rh(e) {
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
function cn(e, t) {
  t.add && e.classList.add(t.add), t.remove && e.classList.remove(t.remove), t.change && e.classList.replace(t.change.oldClass, t.change.newClass);
}
let Kr;
function ih(e) {
  Kr = e;
}
function pt() {
  return Kr;
}
const we = y(null), ot = {
  props: Pe(/* @__PURE__ */ new Map()),
  styles: Pe(/* @__PURE__ */ new Map()),
  propsCode: y(null),
  stylesCode: y(null),
  classes: y([])
}, Dn = /* @__PURE__ */ new Map();
function Et() {
  return we;
}
function sh(e) {
  const t = Fr(e, pt());
  we.value = t, rh(t);
}
function uh(e) {
  we.value = e, Hr();
}
function Tl(e) {
  if (Dn.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = y(Symbol(e));
  return Dn.set(e, t), qt(t);
}
function ch(e) {
  const t = Dn.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function Rr() {
  return qt(ot);
}
function dh(e) {
  if (ot.props.clear(), ot.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      ot.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      ot.styles.set(t, n);
  e.propsCode !== void 0 && (ot.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (ot.stylesCode.value = e.stylesCode), e.classes !== void 0 && (ot.classes.value = e.classes), Hr();
}
function fh() {
  return {
    props: ot.propsCode,
    styles: ot.stylesCode
  };
}
function ph(e) {
  return d(() => ot.styles.has(e));
}
function vh() {
  return d(() => we.value !== null);
}
function hh() {
  return d(() => we.value === null ? null : xl(we.value, pt()));
}
function Hr() {
  for (const e of Dn.values())
    e.value = Symbol(e.value.description);
}
let Ut;
function mh(e, t) {
  Ut = e;
}
function yh() {
  Ut("applyCommand");
}
function Jn(e) {
  Array.isArray(e) || (e = [e]);
  const t = we.value;
  if (!t)
    return;
  const n = Bt(t, pt());
  if (!n)
    throw new Error("not found selected element");
  Ut("setCommand", {
    id: n,
    commands: e
  });
}
function gh(e, t = "style") {
  const n = [{
    propertyName: e,
    type: t
  }], o = we.value;
  if (!o)
    return;
  const l = Bt(o, pt());
  if (!l)
    throw new Error("not found selected element");
  Ut("resetCommand", {
    id: l,
    commands: n
  });
}
function Jo(e) {
  const {
    targetId: t,
    classes: n
  } = e;
  let o = t;
  const l = we;
  o === void 0 && l.value && (o = Bt(l.value, pt())), Ut("classesUpdate", {
    targetId: o,
    classes: n
  });
}
function bh(e, t) {
  const n = Lv(e);
  return d({
    get: () => n.value,
    set: (l) => {
      const r = {
        propertyName: e,
        values: {
          [e]: l
        }
      }, a = t ? t(l) : [];
      Jn([r, ...a]), n.value = l;
    }
  });
}
const _h = /* @__PURE__ */ P({
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
    const t = e, n = bh(t.styleName), o = d(() => {
      if (!n.value)
        return {
          value: 0,
          unit: "px"
        };
      const c = /(-?\d+)([a-zA-Z%]+)/, p = n.value.match(c), v = parseFloat(p[1]), h = p[2];
      return {
        value: v,
        unit: h
      };
    });
    let l = o.value.value, r = o.value.unit;
    const a = d({
      get: () => o.value.value,
      set: (c) => {
        l = c, n.value = `${l}${r}`;
      }
    });
    d({
      get: () => o.value.unit,
      set: (c) => {
        r = c, n.value = `${l}${r}`;
      }
    });
    const i = y(null);
    Vv(i, t.direction, a, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function u() {
    }
    return (c, p) => (C(), N("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: re([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [D("div", {
      onClick: u
    }, [D("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, xe(a.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, vt = /* @__PURE__ */ et(_h, [["__scopeId", "data-v-8ffbe3fa"]]), An = y("en"), Il = /* @__PURE__ */ new Map(), Ra = d(() => {
  const e = Il.get(An.value);
  if (e == null)
    throw new Error(`No message found for locale ${An.value}`);
  return e;
});
function $h(e) {
  An.value = e;
}
function Ch(e, t) {
  Il.set(e, t);
}
function ze(e) {
  var t;
  return Ra.value.hasOwnProperty(e) ? Ra.value[e] : (console.warn(`No message found for key ${e} in locale ${An.value}`), ((t = Il.get("en")) == null ? void 0 : t[e]) || e.split(".").pop() || "");
}
const kh = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, wh = /* @__PURE__ */ P({
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
    }, l = (r) => r >= 0;
    return (r, a) => {
      const i = St;
      return C(), J(i, {
        header: R(ze)("nt.style.spacing.header"),
        key: "spacing"
      }, {
        default: F(() => [D("div", kh, [D("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: re([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), a[0] || (a[0] = D("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), f(vt, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: re([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: re([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: re([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: re([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": l,
          "clip-path": o.left.clipPath,
          style: re({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": l,
          "clip-path": o.up.clipPath,
          style: re([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": l,
          "clip-path": o.right.clipPath,
          style: re({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(vt, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": l,
          "clip-path": o.bottom.clipPath,
          style: re({
            bottom: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          })
        }, null, 8, ["clip-path", "style"])])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const ut = {
  visTypeName: 999,
  mainPanelTooltip: 910,
  visHover: 900,
  aiming: 900,
  panel: 900
}, Zt = {
  mainPanelTooltip: "body",
  trackBallPanel: ".layout-tool-panel"
}, Sh = {
  tailwindSearch: "tailwindSearch"
}, Eh = {
  class: "flex flex-row gap-0"
}, ln = /* @__PURE__ */ P({
  __name: "IconRadio",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: o,
      userEdited: l
    } = t.model, r = o.value.some((i) => i.icon);
    function a(i) {
      n.value = i, l();
    }
    return (i, s) => {
      const u = gn, c = bn, p = Un;
      return C(), N("div", Eh, [R(r) ? (C(!0), N(Oe, {
        key: 0
      }, yt(R(o), (v) => (C(), J(c, {
        content: v.label,
        key: v.value,
        "popup-container": Zt.mainPanelTooltip,
        style: re({
          "z-index": ut.mainPanelTooltip
        })
      }, {
        default: F(() => [f(u, {
          size: "small",
          type: "outline",
          status: R(n) === v.value ? "success" : void 0,
          onClick: (h) => a(v.value)
        }, {
          icon: F(() => [D("span", {
            class: V(v.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content", "popup-container", "style"]))), 128)) : (C(!0), N(Oe, {
        key: 1
      }, yt(R(o), (v) => (C(), J(p, {
        key: v.value,
        checked: R(n) === v.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => a(v.value)
      }, {
        default: F(() => [Ie(xe(v.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function an(e) {
  const {
    propertyName: t,
    options: n
  } = e, o = y(void 0), l = d(() => wt(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), r = Tl(e.propertyName);
  ve(r, () => {
    if (!we.value)
      return;
    const i = Ar(we.value, t);
    o.value = i;
  }, {
    immediate: !0
  });
  function a() {
    Jn({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: o.value
      }
    });
  }
  return {
    value: o,
    options: l,
    userEdited: a
  };
}
const Oh = /* @__PURE__ */ P({
  __name: "BooleanSwitch",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: o,
      userEdited: l
    } = t.model;
    return (r, a) => {
      const i = Hf;
      return C(), J(i, {
        class: "justify-self-start",
        modelValue: R(n),
        "onUpdate:modelValue": a[0] || (a[0] = (s) => Kn(n) ? n.value = s : null),
        "checked-value": R(o).checkedValue,
        "unchecked-value": R(o).uncheckedValue,
        onChange: R(l)
      }, null, 8, ["modelValue", "checked-value", "unchecked-value", "onChange"]);
    };
  }
});
function Ph(e) {
  const {
    propertyName: t,
    options: n
  } = e, o = y(void 0), l = Tl(e.propertyName);
  ve(l, () => {
    if (!we.value)
      return;
    const a = Ar(we.value, t);
    o.value = a;
  }, {
    immediate: !0
  });
  function r() {
    Jn({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: o.value
      }
    });
  }
  return {
    value: o,
    options: n,
    userEdited: r
  };
}
const nt = /* @__PURE__ */ P({
  __name: "ItemLabel",
  props: {
    keyId: {},
    label: {}
  },
  emits: ["reset"],
  setup(e, {
    emit: t
  }) {
    const n = e, o = t, l = d(() => n.label ?? n.keyId), r = ph(n.keyId);
    function a() {
      gh(n.keyId), o("reset");
    }
    const i = d(() => r.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, u) => {
      const c = Pr;
      return C(), J(c, {
        "popup-container": Zt.mainPanelTooltip,
        content: R(ze)("nt.property-reset-confirm"),
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: a,
        style: re({
          "z-index": ut.mainPanelTooltip
        })
      }, {
        default: F(() => [D("div", {
          class: "px-2",
          style: re(i.value)
        }, [D("span", {
          class: V(["item-title text-capitalize", {
            "bg-gray-300": R(r)
          }])
        }, xe(l.value), 3)], 4)]),
        _: 1
      }, 8, ["popup-container", "content", "style"]);
    };
  }
}), Bh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, xh = /* @__PURE__ */ P({
  __name: "Layout",
  setup(e) {
    const t = Yn(we), n = an({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), o = t.getFlexBoxInfo(n.value), l = an({
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
    }), r = d(() => l.value.value === "row" ? ze("nt.style.layout.align-title-byRow") : ze("nt.style.layout.align-title-byCol")), a = d(() => l.value.value === "row" ? [{
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
    }]), i = an({
      propertyName: "align-items",
      options: a
    }), s = d(() => l.value.value === "row" ? ze("nt.style.layout.justify-title-byRow") : ze("nt.style.layout.justify-title-byCol")), u = d(() => l.value.value === "row" ? [{
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
    }]), c = an({
      propertyName: "justify-content",
      options: u
    }), p = Ph({
      propertyName: "flex-wrap",
      options: {
        checkedValue: "wrap",
        uncheckedValue: "nowrap"
      }
    });
    return (v, h) => {
      const _ = St;
      return C(), J(_, {
        header: R(ze)("nt.style.layout.header"),
        key: "layout"
      }, {
        default: F(() => [D("div", Bh, [f(nt, {
          keyId: "display",
          label: R(ze)("nt.style.layout.display-label")
        }, null, 8, ["label"]), f(ln, {
          model: R(n)
        }, null, 8, ["model"]), R(o).isFlex ? (C(), N(Oe, {
          key: 0
        }, [f(nt, {
          keyId: "flex-direction",
          label: R(ze)("nt.style.layout.direction")
        }, null, 8, ["label"]), f(ln, {
          model: R(l)
        }, null, 8, ["model"]), f(nt, {
          keyId: "flex-wrap",
          label: R(ze)("nt.style.layout.wrap-label")
        }, null, 8, ["label"]), f(Oh, {
          model: R(p)
        }, null, 8, ["model"]), f(nt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(ln, {
          model: R(c)
        }, null, 8, ["model"]), f(nt, {
          keyId: "align-items",
          label: r.value
        }, null, 8, ["label"]), f(ln, {
          model: R(i)
        }, null, 8, ["model"])], 64)) : pe("", !0)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Th = /* @__PURE__ */ et(xh, [["__scopeId", "data-v-c9b8652d"]]), Ih = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, zh = /* @__PURE__ */ P({
  __name: "FlexItem",
  setup(e) {
    const n = Yn(we).getParentFlexBoxInfo(), o = d(() => n.value.direction === "row" ? {
      title: ze("nt.style.flexitem.title.vertical"),
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
      title: ze("nt.style.flexitem.title.horizontal"),
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
    }), l = an({
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
      const i = St;
      return R(n).isFlex ? (C(), J(i, {
        header: R(ze)("nt.style.flexitem.header"),
        key: "flex-item"
      }, {
        default: F(() => [D("div", Ih, [f(nt, {
          keyId: "align-self",
          label: o.value.title
        }, null, 8, ["label"]), f(ln, {
          model: R(l)
        }, null, 8, ["model"])])]),
        _: 1
      }, 8, ["header"])) : pe("", !0);
    };
  }
});
const Vh = /* @__PURE__ */ et(zh, [["__scopeId", "data-v-b4b936b1"]]);
const Nh = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, Yt = /* @__PURE__ */ P({
  __name: "InputWithUnitSelector",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      inputValue: n,
      selectValue: o,
      inputPlaceholder: l,
      itemOptions: r,
      userEdited: a,
      updateInput: i,
      updateSelect: s
    } = t.model, u = y(null);
    function c(v, h) {
      var _;
      h.currentTarget === h.target && (i(v), a(), (_ = u.value) == null || _.blur());
    }
    function p(v) {
      s(v), a();
    }
    return (v, h) => {
      const _ = kl, $ = Hd;
      return C(), N("div", Nh, [f(_, {
        ref_key: "inputRef",
        ref: u,
        size: "mini",
        modelValue: R(n),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => Kn(n) ? n.value = w : null),
        placeholder: R(l),
        onChange: c
      }, null, 8, ["modelValue", "placeholder"]), f($, {
        "popup-container": Zt.mainPanelTooltip,
        size: "mini",
        options: R(r),
        "model-value": R(o),
        onChange: p,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": F(() => h[1] || (h[1] = [])),
        _: 1
      }, 8, ["popup-container", "options", "model-value"])]);
    };
  }
});
function Lh(e, t) {
  return e.styles.get(t);
}
function Xt(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: o
  } = e, l = y(t.input), r = y(t.select ?? (o == null ? void 0 : o.defaultOptionValue)), a = n.map(($) => typeof $ == "string" ? {
    value: $,
    label: $
  } : $);
  function i($) {
    return a.find((w) => w.value === $);
  }
  const s = y(null), u = d(() => {
    var $;
    return r.value ? ($ = i(r.value)) == null ? void 0 : $.label : "";
  }), c = d(() => {
    if (r.value) {
      const $ = i(r.value);
      return ($ == null ? void 0 : $.value) ?? ($ == null ? void 0 : $.label);
    }
    return "";
  }), p = Tl(e.propertyName);
  ve(p, () => {
    const $ = Lh(Rr(), e.propertyName);
    if ($ === void 0) {
      l.value = t.input, r.value = t.select;
      return;
    }
    const {
      number: w,
      unit: L
    } = oh($);
    l.value = w, r.value = L;
  });
  function v() {
    const $ = l.value, w = r.value;
    let L = "";
    w === "auto" ? L = w : L = `${$}${w}`, Jn({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: L
      }
    });
  }
  function h($) {
    Ha(r, l, o);
  }
  function _($) {
    r.value = $, Wa(r, l, o);
  }
  return Ha(r, l, o), Wa(r, l, o), {
    inputValue: l,
    selectValue: r,
    selectItem: s,
    selectDisplay: u,
    inputPlaceholder: c,
    itemOptions: a,
    userEdited: v,
    updateSelect: _,
    updateInput: h
  };
}
function Ha(e, t, n) {
  const {
    nonValueOptions: o,
    defaultOptionValue: l,
    optionValueIfnonValue: r
  } = n ?? {}, a = t.value;
  a && (o && l && a.length > 0 && e.value && o.includes(e.value) && (e.value = l), r && o && a && e.value && o.includes(e.value) && (e.value = r), !a && o && (e.value = o[0]));
}
function Wa(e, t, n) {
  const {
    nonValueOptions: o
  } = n ?? {}, l = e.value;
  if (l) {
    if (o && o.includes(l))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const r = nh();
      n.specialProperty === "width" ? t.value = `${r.width}` : n.specialProperty === "height" && (t.value = `${r.height}`);
    }
  }
}
const Dh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Ah = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], jh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Mh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Fh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Kh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Rh = /* @__PURE__ */ P({
  __name: "Width",
  setup(e) {
    const n = Xt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Dh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "width",
      label: "Width",
      class: "nt-size-width-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const Hh = /* @__PURE__ */ et(Rh, [["__scopeId", "data-v-86358352"]]), Wh = /* @__PURE__ */ P({
  __name: "Height",
  setup(e) {
    const n = Xt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Ah,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "height",
      label: "Height",
      class: "nt-size-height-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const qh = /* @__PURE__ */ et(Wh, [["__scopeId", "data-v-2b248a0c"]]), Gh = /* @__PURE__ */ P({
  __name: "MaxWidth",
  setup(e) {
    const n = Xt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Mh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "max-width",
      label: "Max W",
      class: "nt-size-max-width-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-max-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const Uh = /* @__PURE__ */ et(Gh, [["__scopeId", "data-v-e73acc89"]]), Zh = /* @__PURE__ */ P({
  __name: "MinWidth",
  setup(e) {
    const n = Xt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: jh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "min-width",
      label: "Min W",
      class: "nt-size-min-width-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-min-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const Yh = /* @__PURE__ */ et(Zh, [["__scopeId", "data-v-abad8f34"]]), Xh = /* @__PURE__ */ P({
  __name: "MaxHeight",
  setup(e) {
    const n = Xt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Kh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "max-height",
      label: "Max H",
      class: "nt-size-max-height-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-max-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const Jh = /* @__PURE__ */ et(Xh, [["__scopeId", "data-v-466a7530"]]), Qh = /* @__PURE__ */ P({
  __name: "MinHeight",
  setup(e) {
    const n = Xt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Fh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (o, l) => (C(), N(Oe, null, [f(nt, {
      "key-id": "min-height",
      label: "Min H",
      class: "nt-size-min-height-label"
    }), f(Yt, {
      model: R(n),
      class: "nt-size-min-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const em = /* @__PURE__ */ et(Qh, [["__scopeId", "data-v-ce4a9fb1"]]), tm = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, nm = /* @__PURE__ */ P({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const o = St;
      return C(), J(o, {
        header: R(ze)("nt.style.size.header"),
        key: "size"
      }, {
        default: F(() => [D("div", tm, [f(Hh), f(qh), f(Yh), f(em), f(Uh), f(Jh)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const om = /* @__PURE__ */ et(nm, [["__scopeId", "data-v-f3882379"]]);
let Wr;
const zl = y(null);
function lm(e) {
  Wr = e;
}
function am() {
  return {
    treeData: Wr
  };
}
function rm() {
  return qt(zl);
}
function im(e) {
  zl.value = Fr(e, pt());
}
function sm() {
  zl.value = null;
}
const um = {
  class: "relative"
}, cm = /* @__PURE__ */ P({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = y(null);
    function n(u) {
      const c = u[0];
      sh(c);
    }
    function o(u) {
      var h;
      const c = u.target;
      if (!c || !c.classList.contains("arco-tree-node-title"))
        return;
      const p = (h = c.parentElement) == null ? void 0 : h.getAttribute("data-key");
      if (!p)
        throw new Error("Cannot find key for selected element");
      const v = parseInt(p);
      v < 0 || im(v);
    }
    function l(u) {
      sm();
    }
    ve(Et(), (u) => {
      if (u || t.value.selectAll(!1), t.value && u) {
        const c = Bt(u, pt());
        if (c == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(c, !0);
      }
    });
    const r = y(!0), a = d(() => r.value ? "i-mdi-arrow-collapse-vertical" : "i-mdi-arrow-expand-vertical"), i = d(() => r.value ? ze("tree.collapse_all") : ze("tree.expand_all"));
    function s() {
      r.value = !r.value, t.value.expandAll(r.value), r.value || t.value.expandNode(-1, !r.value);
    }
    return (u, c) => {
      const p = ev, v = bn, h = Wn;
      return C(), J(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: F(() => [D("div", um, [f(p, {
          ref_key: "el",
          ref: t,
          data: u.model.treeData,
          "show-line": "",
          "block-node": "",
          onSelect: n,
          onMouseenterCapture: at(o, ["stop"]),
          onMouseleaveCapture: at(l, ["stop"])
        }, null, 8, ["data"]), f(v, {
          content: i.value,
          "popup-container": Zt.mainPanelTooltip,
          style: re({
            "z-index": ut.mainPanelTooltip
          })
        }, {
          default: F(() => [D("div", {
            class: V(["text-xl absolute top-0 right-5 cursor-pointer", a.value]),
            onClick: s
          }, null, 2)]),
          _: 1
        }, 8, ["content", "popup-container", "style"])])]),
        _: 1
      });
    };
  }
});
const dm = /* @__PURE__ */ et(cm, [["__scopeId", "data-v-b2b63fa1"]]);
function fm() {
  return {
    code: fh()
  };
}
const pm = {}, vm = {
  class: "border border-gray-300 border-solid p-2 rounded-md"
};
function hm(e, t) {
  return C(), N("div", vm, [H(e.$slots, "default")]);
}
const mm = /* @__PURE__ */ et(pm, [["render", hm]]), ym = /* @__PURE__ */ P({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (o, l) => {
      const r = Iv;
      return C(), N("div", null, [l[0] || (l[0] = D("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "styles", -1)), f(mm, null, {
        default: F(() => [f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: F(() => [Ie(xe(R(n)), 1)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
});
let qa = 0;
const qr = /* @__PURE__ */ new Map();
function gm() {
  const e = qa;
  return qa++, e;
}
function bm(e, t) {
  const n = gm();
  qr.set(n, t);
  function o(l) {
    Ut("serverQuery", {
      method: e,
      handlerId: n,
      params: l
    });
  }
  return {
    query: o
  };
}
function _m(e, t) {
  e = parseInt(e);
  const n = qr.get(e);
  if (n) {
    n(t);
    return;
  }
  throw new Error(`No handler found for id ${e}`);
}
const Gr = /* @__PURE__ */ P({
  __name: "PromptBoard",
  props: /* @__PURE__ */ Nl({
    clearValueWhenConfirm: {
      type: Boolean,
      default: !0
    }
  }, {
    inputVal: {
      default: ""
    },
    inputValModifiers: {}
  }),
  emits: /* @__PURE__ */ Nl(["confirm"], ["update:inputVal"]),
  setup(e, {
    expose: t,
    emit: n
  }) {
    const o = e, l = y(!1);
    let r = !1;
    const a = n, i = y([]), s = y(!1), u = y(), c = y(), p = y(), v = li(e, "inputVal"), h = bm(Sh.tailwindSearch, (m) => {
      i.value = m;
    });
    Gv(v, (m) => {
      h.query({
        query: m
      });
    }, {
      debounce: 600
    });
    const _ = {
      show() {
        l.value = !0, qe(() => {
          var m;
          (m = p.value) == null || m.focus();
        }), r = !1;
      },
      hide() {
        l.value = !1;
      }
    };
    document.addEventListener("click", (m) => {
      var A, O;
      if (!l.value)
        return;
      const g = m.target, j = (A = c.value) == null ? void 0 : A.contains(g);
      !((O = u.value) != null && O.contains(g)) && !j && $(v.value);
    }, {
      capture: !0
    });
    const $ = (m) => {
      a("confirm", m), r = !0, o.clearValueWhenConfirm && (v.value = "", E = ""), _.hide();
    }, w = () => {
      $(v.value);
    };
    function L(m) {
      m !== void 0 && (v.value = m), s.value = !1, $(m === void 0 ? v.value : m);
    }
    function x() {
      s.value = !0;
    }
    let E = v.value;
    function b(m) {
      cn(Et().value, {
        add: m
      }), E = m;
    }
    function k(m) {
      r || cn(Et().value, {
        remove: m
      });
    }
    return t(_), (m, g) => {
      const j = sn;
      return C(), N("div", {
        class: "nt-tw-options-panel",
        ref_key: "root",
        ref: u
      }, [f(R(gd), {
        onSelect: L,
        "popup-visible": s.value,
        position: "bottom",
        "auto-fit-position": "",
        trigger: "contextMenu",
        "hide-on-select": !1,
        "popup-container": Zt.trackBallPanel,
        style: re({
          zindex: ut.panel
        })
      }, {
        content: F(() => [D("div", {
          ref_key: "dropdownRef",
          ref: c
        }, [(C(!0), N(Oe, null, yt(i.value, (M) => (C(), J(j, {
          key: M,
          onMouseenter: (A) => b(M),
          onMouseleave: (A) => k(M)
        }, {
          default: F(() => [Ie(xe(M), 1)]),
          _: 2
        }, 1032, ["onMouseenter", "onMouseleave"]))), 128))], 512)]),
        default: F(() => [ht(f(R(kl), {
          ref_key: "inputRef",
          ref: p,
          class: "w-[10ch] absolute top-0 left-0 h-full",
          size: "mini",
          modelValue: v.value,
          "onUpdate:modelValue": g[0] || (g[0] = (M) => v.value = M),
          modelModifiers: {
            trim: !0
          },
          onKeyup: Ya(w, ["enter"]),
          onFocus: x
        }, null, 8, ["modelValue"]), [[mt, l.value]])]),
        _: 1
      }, 8, ["popup-visible", "popup-container", "style"])], 512);
    };
  }
}), $m = {
  class: "w-fit relative"
}, Cm = /* @__PURE__ */ P({
  __name: "EditableTag",
  props: {
    tagKey: {},
    value: {}
  },
  emits: ["valueChange", "remove"],
  setup(e, {
    emit: t
  }) {
    const n = e, o = t, l = y(), r = y(!1), a = y(n.value), i = {
      showPromptBoard() {
        var p;
        (p = l.value) == null || p.show(), r.value = !0;
      },
      hidePromptBoard() {
        var p;
        (p = l.value) == null || p.hide(), r.value = !1;
      }
    };
    let s = n.value;
    const u = () => {
      o("remove", {
        key: n.tagKey
      });
    };
    function c(p) {
      i.hidePromptBoard(), p && p !== s && (o("valueChange", {
        key: n.tagKey,
        oldValue: s,
        newValue: p
      }), s = p);
    }
    return (p, v) => {
      const h = Un;
      return C(), N("div", $m, [f(Gr, {
        ref_key: "promptBoard",
        ref: l,
        "input-val": a.value,
        "onUpdate:inputVal": v[0] || (v[0] = (_) => a.value = _),
        "clear-value-when-confirm": !1,
        onConfirm: c
      }, null, 8, ["input-val"]), f(h, {
        class: "cursor-pointer",
        style: re({
          visibility: r.value ? "hidden" : "visible"
        }),
        color: "arcoblue",
        closable: "",
        onClick: i.showPromptBoard,
        onClose: u
      }, {
        default: F(() => [Ie(xe(a.value), 1)]),
        _: 1
      }, 8, ["style", "onClick"])]);
    };
  }
}), km = {
  class: "w-fit relative flex items-center"
}, wm = /* @__PURE__ */ P({
  __name: "AddableTag",
  emits: ["add"],
  setup(e, {
    emit: t
  }) {
    const n = y(), o = y(!1), l = t, r = {
      showPromptBoard() {
        var i;
        (i = n.value) == null || i.show(), o.value = !0;
      },
      hidePromptBoard() {
        var i;
        (i = n.value) == null || i.hide(), o.value = !1;
      }
    };
    function a(i) {
      r.hidePromptBoard(), i && l("add", {
        value: i
      });
    }
    return (i, s) => (C(), N("div", km, [f(Gr, {
      ref_key: "promptBoard",
      ref: n,
      onConfirm: a
    }, null, 512), D("div", {
      class: "cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-1",
      style: re({
        visibility: o.value ? "hidden" : "visible"
      }),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...u) => r.showPromptBoard && r.showPromptBoard(...u))
    }, s[1] || (s[1] = [D("div", {
      class: "i-mdi-plus"
    }, null, -1)]), 4)]));
  }
}), Sm = {
  class: "flex flex-wrap gap-4"
}, Em = /* @__PURE__ */ P({
  __name: "EditorArea",
  setup(e) {
    const t = d(() => Rr().classes);
    function n(r, a, i) {
      const s = [...t.value];
      s[r] = i, Jo({
        classes: s
      }), cn(Et().value, {
        change: {
          oldClass: a,
          newClass: i
        }
      });
    }
    function o(r) {
      const a = [...t.value];
      a.splice(r, 1), Jo({
        classes: a
      }), cn(Et().value, {
        remove: t.value[r]
      });
    }
    function l(r) {
      const a = [...t.value, r];
      Jo({
        classes: a
      }), cn(Et().value, {
        add: r
      });
    }
    return (r, a) => (C(), N("div", Sm, [(C(!0), N(Oe, null, yt(t.value, (i, s) => (C(), J(Cm, {
      key: i + s,
      tagKey: s,
      value: i,
      onValueChange: a[0] || (a[0] = (u) => n(u.key, u.oldValue, u.newValue)),
      onRemove: a[1] || (a[1] = (u) => o(u.key))
    }, null, 8, ["tagKey", "value"]))), 128)), f(wm, {
      class: "nt-classes-add-tag",
      onAdd: a[2] || (a[2] = (i) => l(i.value))
    })]));
  }
}), Om = {
  class: "flex flex-col gap-2"
}, Pm = /* @__PURE__ */ P({
  __name: "Code",
  setup(e) {
    const t = fm();
    return (n, o) => {
      const l = ee("Block");
      return C(), N("div", Om, [D("div", null, [o[0] || (o[0] = D("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "classes", -1)), f(l, null, {
        default: F(() => [f(Em)]),
        _: 1
      })]), f(ym, {
        model: R(t)
      }, null, 8, ["model"])]);
    };
  }
}), Ur = y(!1), Zr = y(""), Bm = {
  class: "nt-testing-content"
}, xm = /* @__PURE__ */ P({
  __name: "TestingContent",
  setup(e) {
    return (t, n) => (C(), N("pre", Bm, xe(R(Zr)), 1));
  }
}), Tm = {
  class: "bg-white/30 backdrop-blur-md"
}, Im = /* @__PURE__ */ P({
  __name: "MainPanel",
  setup(e) {
    Nv(we);
    const t = d(() => !!we.value), n = am();
    return (o, l) => {
      const r = bf, a = Tn, i = Wn, s = fp;
      return C(), N("div", Tm, [f(s, {
        "default-active-key": "element-tree"
      }, {
        default: F(() => [f(a, {
          key: "style",
          title: R(ze)("nt.mainPanel.style"),
          disabled: !t.value
        }, {
          default: F(() => [f(r, {
            accordion: ""
          }, {
            default: F(() => [f(Vh), f(Th), f(wh), f(om)]),
            _: 1
          })]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "element-tree",
          title: R(ze)("nt.mainPanel.navigator")
        }, {
          default: F(() => [f(dm, {
            model: R(n)
          }, null, 8, ["model"])]),
          _: 1
        }, 8, ["title"]), f(a, {
          key: "nicegui",
          title: R(ze)("nt.mainPanel.code"),
          class: "x-panel-nicegui",
          disabled: !t.value
        }, {
          default: F(() => [f(Pm)]),
          _: 1
        }, 8, ["title", "disabled"]), R(Ur) ? (C(), J(a, {
          key: "testing",
          title: "testing"
        }, {
          default: F(() => [f(i, {
            style: {
              "max-height": "500px",
              overflow: "auto"
            }
          }, {
            default: F(() => [f(xm)]),
            _: 1
          })]),
          _: 1
        })) : pe("", !0)]),
        _: 1
      })]);
    };
  }
});
const zm = /* @__PURE__ */ et(Im, [["__scopeId", "data-v-dff155cd"]]);
function Vm() {
  const e = Pe(Lr(we));
  Nr(we, () => {
    e.update();
  }, {
    attributes: !0
  }), Xe("scroll", e.update, !0);
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
  }), r = d(() => we.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), a = d(() => we.value ? {
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
  }), u = d(() => we.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return {
    rectStyles: t,
    p1: n,
    p2: o,
    p3: l,
    p4: r,
    p5: a,
    p6: i,
    p7: s,
    p8: u
  };
}
const Nm = ["viewBox"], Lm = /* @__PURE__ */ P({
  __name: "Aiming",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = jr(), {
      rectStyles: o,
      p1: l,
      p2: r,
      p3: a,
      p4: i,
      p5: s,
      p6: u,
      p7: c,
      p8: p
    } = Vm();
    return (v, h) => (C(), N("svg", {
      class: "vis-aiming",
      viewBox: R(t),
      version: "1.1",
      style: re([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [R(n), {
        "z-index": R(ut).aiming
      }]]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [D("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: re(R(o))
    }, null, 4), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, R(l), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, R(r), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, R(a), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, R(i), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, R(s), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, R(u), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, R(c), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, R(p), {
      r: "2"
    }), null, 16)], 12, Nm));
  }
});
const Yr = y(!1), Dm = qt(Yr);
function Am(e) {
  Yr.value = e;
}
const jm = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, Mm = /* @__PURE__ */ P({
  __name: "Panel",
  setup(e) {
    const t = y(null), {
      style: n
    } = Jv(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), o = hh(), l = vh(), r = Dm;
    function a() {
      const i = Et().value;
      if (i) {
        const s = lh(i, pt());
        ah(s);
      }
    }
    return (i, s) => {
      const u = Un, c = Mf, p = gn, v = Kc, h = Pr, _ = bn;
      return C(), N("div", {
        class: "non-selectable w-[350px]",
        style: re([[R(n), {
          zIndex: ut.panel
        }], {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [D("div", jm, [D("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(c, {
        class: "h-full"
      }, {
        default: F(() => [s[0] || (s[0] = D("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), s[1] || (s[1] = D("span", {
          class: "font-bold"
        }, "toolkit", -1)), ht(f(u, {
          color: "green"
        }, {
          default: F(() => [Ie(xe(R(o)), 1)]),
          _: 1
        }, 512), [[mt, R(l)]])]),
        _: 1
      })], 512), f(_, {
        content: R(ze)("nt.apply_command_tooltip")
      }, {
        default: F(() => [f(h, {
          "popup-container": Zt.mainPanelTooltip,
          content: R(ze)("nt.apply_command_confirm"),
          "ok-text": "Apply",
          "cancel-text": "No",
          position: "bottom",
          onOk: yh,
          style: re({
            "z-index": ut.mainPanelTooltip
          })
        }, {
          default: F(() => [ht(f(v, {
            count: 9,
            dot: "",
            dotStyle: {
              width: "10px",
              height: "10px"
            },
            class: "nt-apply-command"
          }, {
            default: F(() => [f(p, {
              shape: "circle",
              size: "mini"
            }, {
              default: F(() => s[2] || (s[2] = [D("div", {
                class: "i-codicon-git-stash-apply text-1xl"
              }, null, -1)])),
              _: 1
            })]),
            _: 1
          }, 512), [[mt, R(r)]])]),
          _: 1
        }, 8, ["popup-container", "content", "onOk", "style"])]),
        _: 1
      }, 8, ["content"]), f(_, {
        content: R(ze)("nt.jump2code")
      }, {
        default: F(() => [ht(f(p, {
          shape: "circle",
          size: "mini",
          onClick: a
        }, {
          default: F(() => s[3] || (s[3] = [D("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 512), [[mt, R(l)]])]),
        _: 1
      }, 8, ["content"])]), H(i.$slots, "default"), H(i.$slots, "footer")], 4);
    };
  }
});
let Xr = d(() => null);
function Qn() {
  return Xr;
}
function Fm(e) {
  const {
    hoverElement: t
  } = Km(e);
  Xe(document.querySelector("body"), "mouseenter", (n) => {
    t.value && n.stopPropagation();
  }, {
    capture: !0
  }), Xr = t;
}
function Km(e) {
  const {
    x: t,
    y: n
  } = Dr({
    type: "client"
  }), {
    element: o
  } = eh({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (o.value === null)
        return null;
      const r = o.value.closest(e.selectors), a = rm();
      return r === null || r.closest("[layout-tool-panel]") ? a.value ? a.value : null : r;
    })
  };
}
function Rm() {
  const {
    width: e,
    height: t
  } = Bl(), n = Qn(), o = Pe(Lr(n));
  Xe("scroll", o.update, !0);
  const l = d(() => n.value ? {
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
  }), r = d(() => n.value ? {
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
  }), a = d(() => n.value ? {
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
  }), i = d(() => n.value ? {
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
  }), s = d(() => n.value ? {
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
  return {
    rectStyles: l,
    topLine: r,
    rightLine: a,
    bottomLine: i,
    leftLine: s
  };
}
const Hm = ["viewBox"], tn = "red", Wm = /* @__PURE__ */ P({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = jr(), {
      rectStyles: o,
      topLine: l,
      rightLine: r,
      bottomLine: a,
      leftLine: i
    } = Rm();
    return (s, u) => (C(), N("svg", {
      class: "vis-hover",
      viewBox: R(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: re([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [R(n), {
        "z-index": R(ut).visHover
      }]])
    }, [D("rect", {
      fill: "none",
      stroke: tn,
      "stroke-width": "1",
      style: re(R(o))
    }, null, 4), D("line", ie({
      class: "top"
    }, R(l), {
      stroke: tn,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "right"
    }, R(r), {
      stroke: tn,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "bottom"
    }, R(a), {
      stroke: tn,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "left"
    }, R(i), {
      stroke: tn,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, Hm));
  }
});
function qm(e) {
  ih(e.config), Gm(e.languageConfig), Fm(e.config), Ym(Qn()), mh(e.emits, {
    selectorConfig: e.config
  }), lm(e.elementTreeData);
}
function Gm(e) {
  $h(e.locale), Object.entries(e.messages).forEach(([t, n]) => {
    Ch(t, n);
  });
}
function Um(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: Bt(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const Zm = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function Ga(e, t) {
  if (!Zm.has(xl(e, t)))
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
function Ua(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function Ym(e) {
  Xe(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (uh(e.value), t.stopPropagation());
  }, {
    capture: !0
  });
}
function Xm(e, t) {
  function n(u) {
    u.selectTarget && l(u.selectTarget.id), u.serverResetCommand && r(u.serverResetCommand.propertyName), u.trackRecord && a(u.trackRecord), u.testing && i(u.testing);
  }
  function o(u, c) {
    return window.getComputedStyle(Ua(u, e), null).getPropertyValue(c);
  }
  function l(u) {
    const c = Ua(u, e);
    t.value = c;
  }
  function r(u) {
    ch(u);
  }
  function a(u) {
    Am(u.hasChanged);
  }
  function i(u) {
    u.isTesting !== void 0 && (Ur.value = u.isTesting), u.content !== void 0 && (Zr.value = u.content);
  }
  function s(u, c) {
    _m(u, c);
  }
  return {
    queryStyle: o,
    sendMessage: n,
    tailwindSearch: s
  };
}
async function Jm(e) {
  if (!e)
    return;
  const t = "../../static/utils/resources.js", {
    loadResource: n
  } = await import(t), o = window.path_prefix;
  await n(o + `${e}/trackBall.css`);
}
const Qm = /* @__PURE__ */ P({
  __name: "VisTypeName",
  setup(e) {
    function t(l, r) {
      const {
        width: a
      } = Bl(), {
        x: i,
        y: s
      } = Dr({
        type: "client"
      }), u = d(() => {
        let v = i.value, h = s.value;
        return a.value - i.value < 10 && (v -= 10), s.value < 10 && (h += 10), {
          x: v,
          y: h
        };
      }), c = d(() => r.value ? {
        display: "block",
        left: `${u.value.x}px`,
        top: `${u.value.y}px`,
        transform: "translate(25%,-50%)"
      } : {
        display: "none"
      });
      return {
        typeName: d(() => r.value ? xl(r.value, l) : null),
        typeNameTagStyles: c
      };
    }
    const {
      typeNameTagStyles: n,
      typeName: o
    } = t(pt(), Qn());
    return (l, r) => (C(), N("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: re([R(n), {
        zIndex: R(ut).visTypeName
      }])
    }, xe(R(o)), 5));
  }
}), ty = /* @__PURE__ */ P({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    currentTargetContext: {},
    resource_path: {},
    elementTreeData: {},
    languageConfig: {}
  },
  setup(e, {
    expose: t,
    emit: n
  }) {
    const o = e, l = n;
    return qm({
      config: o.selectorConfig,
      languageConfig: o.languageConfig,
      emits: l,
      elementTreeData: o.elementTreeData
    }), Ae(async () => {
      await Jm(o.resource_path), l("init");
    }), ve(() => o.currentTargetContext, () => {
      dh(o.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    }), ve(Qn(), (r) => {
      if (r) {
        const a = Bt(r, o.selectorConfig);
        l("hoverChange", {
          id: a
        });
        return;
      }
      l("hoverChange", {
        id: null
      });
    }), ve(we, (r) => {
      const a = {
        isFlex: !1,
        direction: null
      };
      if (r) {
        const i = Bt(r, o.selectorConfig), s = Um(r, o.selectorConfig);
        let u = {
          isFlex: !1,
          direction: null
        };
        s && (u = Ga(s.dom, o.selectorConfig)), l("selectedChange", {
          id: i,
          parentBoxId: s !== null ? s.id : null,
          flexInfo: Ga(r, o.selectorConfig),
          parentFlexInfo: u
        });
        return;
      }
      l("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: a,
        parentFlexInfo: a
      });
    }), t({
      ...Xm(o.selectorConfig, we)
    }), (r, a) => (C(), J(Za, {
      to: "body"
    }, [f(Wm), f(Lm), f(Mm, null, {
      default: F(() => [H(r.$slots, "header"), f(zm), H(r.$slots, "footer")]),
      _: 3
    }), f(Qm)]));
  }
});
export {
  ty as default
};
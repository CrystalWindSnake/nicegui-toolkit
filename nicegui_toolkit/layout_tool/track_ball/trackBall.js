const m = Vue.ref
const Pe = Vue.reactive
const We = Vue.inject
const d = Vue.computed
const bt = Vue.getCurrentInstance
const Fn = Vue.cloneVNode
const P = Vue.defineComponent
const ve = Vue.watch
const Ae = Vue.onMounted
const el = Vue.onUnmounted
const $ = Vue.openBlock
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
const ze = Vue.createTextVNode
const qe = Vue.nextTick
const _t = Vue.provide
const Oe = Vue.Fragment
const cn = Vue.createSlots
const M = Vue.withCtx
const at = Vue.withModifiers
const dt = Vue.onUpdated
const qt = Vue.onBeforeUnmount
const vn = Vue.readonly
const ti = Vue.onDeactivated
const Za = Vue.Teleport
const Mn = Vue.Transition
const mt = Vue.withDirectives
const yt = Vue.vShow
const Dt = Vue.resolveDynamicComponent
const xe = Vue.toDisplayString
const gt = Vue.renderList
const ni = Vue.TransitionGroup
const Kn = Vue.watchEffect
const pl = Vue.isVNode
const oi = Vue.Comment
const Vt = Vue.h
const tl = Vue.normalizeProps
const Ya = Vue.withKeys
const Xa = Vue.createApp
const St = Vue.toValue
const K = Vue.unref
const Rn = Vue.isRef
const li = Vue.customRef
const ai = Vue.getCurrentScope
const ri = Vue.onScopeDispose
const Nl = Vue.mergeModels
const ii = Vue.useModel
const Bt = Object.prototype.toString;
function Re(e) {
  return Bt.call(e) === "[object Array]";
}
function hn(e) {
  return Bt.call(e) === "[object Null]";
}
function Kt(e) {
  return Bt.call(e) === "[object Boolean]";
}
function De(e) {
  return Bt.call(e) === "[object Object]";
}
const Ll = (e) => Bt.call(e) === "[object Promise]";
function xt(e) {
  return Bt.call(e) === "[object String]";
}
function Ce(e) {
  return Bt.call(e) === "[object Number]" && e === e;
}
function Ke(e) {
  return e === void 0;
}
function Ue(e) {
  return typeof e == "function";
}
function si(e) {
  return De(e) && Object.keys(e).length === 0;
}
const Ja = (e) => (e == null ? void 0 : e.$) !== void 0, Tt = Symbol("ArcoConfigProvider"), Cn = {
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
}, ui = {
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
  calendar: Cn,
  datePicker: {
    view: Cn.view,
    month: Cn.month,
    week: Cn.week,
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
}, ci = m("zh-CN"), di = Pe({
  "zh-CN": ui
}), vl = () => {
  const e = We(Tt, void 0), t = d(() => {
    var l;
    return (l = e == null ? void 0 : e.locale) != null ? l : di[ci.value];
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
      return xt(i) && r.length > 0 ? i.replace(/{(\d+)}/g, (s, u) => {
        var c;
        return (c = r[u]) != null ? c : s;
      }) : i;
    }
  };
};
var fi = Object.defineProperty, pi = Object.defineProperties, vi = Object.getOwnPropertyDescriptors, Dl = Object.getOwnPropertySymbols, hi = Object.prototype.hasOwnProperty, mi = Object.prototype.propertyIsEnumerable, Al = (e, t, n) => t in e ? fi(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yi = (e, t) => {
  for (var n in t || (t = {}))
    hi.call(t, n) && Al(e, n, t[n]);
  if (Dl)
    for (var n of Dl(t))
      mi.call(t, n) && Al(e, n, t[n]);
  return e;
}, gi = (e, t) => pi(e, vi(t));
const bi = "A", _i = "arco", nl = "$arco", je = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : bi;
}, Fe = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[nl] = gi(yi({}, (n = e.config.globalProperties[nl]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, U = (e) => {
  var t, n, o;
  const l = bt(), r = We(Tt, void 0), a = (o = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = l == null ? void 0 : l.appContext.config.globalProperties[nl]) == null ? void 0 : t.classPrefix) != null ? o : _i;
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
}(), ol = typeof window < "u" && typeof document < "u" && window.document === document, zn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ci = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(zn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), $i = 2;
function ki(e, t) {
  var n = !1, o = !1, l = 0;
  function r() {
    n && (n = !1, e()), o && i();
  }
  function a() {
    Ci(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - l < $i)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    l = s;
  }
  return i;
}
var wi = 20, Si = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ei = typeof MutationObserver < "u", Oi = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ki(this.refresh.bind(this), wi);
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
      !ol || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ei ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ol || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, l = Si.some(function(r) {
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
}, Rt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || zn;
}, tr = Hn(0, 0, 0, 0);
function Vn(e) {
  return parseFloat(e) || 0;
}
function jl(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, l) {
    var r = e["border-" + l + "-width"];
    return o + Vn(r);
  }, 0);
}
function Pi(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, l = t; o < l.length; o++) {
    var r = l[o], a = e["padding-" + r];
    n[r] = Vn(a);
  }
  return n;
}
function Bi(e) {
  var t = e.getBBox();
  return Hn(0, 0, t.width, t.height);
}
function xi(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return tr;
  var o = Rt(e).getComputedStyle(e), l = Pi(o), r = l.left + l.right, a = l.top + l.bottom, i = Vn(o.width), s = Vn(o.height);
  if (o.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= jl(o, "left", "right") + r), Math.round(s + a) !== n && (s -= jl(o, "top", "bottom") + a)), !Ii(e)) {
    var u = Math.round(i + r) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Hn(l.left, l.top, i, s);
}
var Ti = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Rt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Rt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ii(e) {
  return e === Rt(e).document.documentElement;
}
function zi(e) {
  return ol ? Ti(e) ? Bi(e) : xi(e) : tr;
}
function Vi(e) {
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
function Hn(e, t, n, o) {
  return {
    x: e,
    y: t,
    width: n,
    height: o
  };
}
var Ni = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Hn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = zi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Li = (
  /** @class */
  function() {
    function e(t, n) {
      var o = Vi(n);
      er(this, {
        target: t,
        contentRect: o
      });
    }
    return e;
  }()
), Di = (
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
        if (!(t instanceof Rt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Ni(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Rt(t).Element))
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
          return new Li(o.target, o.broadcastRect());
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
      var n = Oi.getInstance(), o = new Di(t, n, this);
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
var hl = function() {
  return typeof zn.ResizeObserver < "u" ? zn.ResizeObserver : or;
}(), Fl;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Fl || (Fl = {}));
var Ml;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(Ml || (Ml = {}));
const Wn = (e) => !!(e && e.shapeFlag & 1), mn = (e, t) => !!(e && e.shapeFlag & 6), Ai = (e, t) => !!(e && e.shapeFlag & 8), ml = (e, t) => !!(e && e.shapeFlag & 16), lr = (e, t) => !!(e && e.shapeFlag & 32), At = (e) => {
  var t, n;
  if (e)
    for (const o of e) {
      if (Wn(o) || mn(o))
        return o;
      if (ml(o, o.children)) {
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
}, ji = (e) => {
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
      if (Wn(o) || mn(o)) {
        const r = Ue(t) ? t(o) : t;
        return e[n] = Fn(o, r, !0), !0;
      }
      const l = yl(o);
      if (l && l.length > 0 && ar(l, t))
        return !0;
    }
  return !1;
}, yl = (e) => {
  if (ml(e, e.children))
    return e.children;
  if (Re(e))
    return e;
}, rr = (e) => {
  var t, n;
  if (Wn(e))
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
    const o = yl(e);
    return ir(o);
  }
}, ir = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = rr(t);
      if (n)
        return n;
    }
}, En = (e, t = !1) => {
  var n, o;
  const l = [];
  for (const r of e ?? [])
    Wn(r) || mn(r) || t && Ai(r, r.children) ? l.push(r) : ml(r, r.children) ? l.push(...En(r.children, t)) : lr(r, r.children) ? l.push(...En((o = (n = r.children).default) == null ? void 0 : o.call(n), t)) : Re(r) && l.push(...En(r, t));
  return l;
}, sr = (e, t) => {
  var n;
  const o = [];
  if (mn(e, e.type))
    e.type.name === t ? e.component && o.push(e.component.uid) : (n = e.component) != null && n.subTree && o.push(...sr(e.component.subTree, t));
  else {
    const l = yl(e);
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
var dn = P({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let o;
    const l = m(), r = d(() => Ja(l.value) ? l.value.$el : l.value), a = (s) => {
      s && (o = new hl((u) => {
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
    }), el(() => {
      i();
    }), () => {
      var s, u;
      const c = At((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? Fn(c, {
        ref: l
      }, !0) : null;
    };
  }
});
const cr = typeof window > "u" ? global : window, dr = cr.requestAnimationFrame, Nn = cr.cancelAnimationFrame;
function ll(e) {
  let t = 0;
  const n = (...o) => {
    t && Nn(t), t = dr(() => {
      e(...o), t = 0;
    });
  };
  return n.cancel = () => {
    Nn(t), t = 0;
  }, n;
}
const gl = () => {
}, Fi = () => {
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
}, bl = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), jt = (() => bl ? gl : (e, t, n, o = !1) => {
  e.addEventListener(t, n, o);
})(), Ln = (() => bl ? gl : (e, t, n, o = !1) => {
  e.removeEventListener(t, n, o);
})(), Mi = (e, t) => {
  var n;
  return bl ? gl() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Kl = (e, t) => {
  if (xt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Mi(n, t);
  }
  return e;
}, Ki = (e, t) => {
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
const Ri = P({
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
function Hi(e, t, n, o, l, r) {
  return $(), N("span", {
    class: V([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [H(e.$slots, "default")], 2);
}
var Qe = /* @__PURE__ */ oe(Ri, [["render", Hi]]);
const Wi = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), qi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gi = /* @__PURE__ */ D("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Ui = [Gi];
function Zi(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Ui, 14, qi);
}
var to = /* @__PURE__ */ oe(Wi, [["render", Zi]]);
const yn = Object.assign(to, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + to.name, to);
  }
}), Yi = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Xi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ji = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Qi = [Ji];
function es(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Qi, 14, Xi);
}
var no = /* @__PURE__ */ oe(Yi, [["render", es]]);
const ts = Object.assign(no, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + no.name, no);
  }
}), ns = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), os = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ls = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), as = [ls];
function rs(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, as, 14, os);
}
var oo = /* @__PURE__ */ oe(ns, [["render", rs]]);
const _l = Object.assign(oo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + oo.name, oo);
  }
}), is = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ss = ["stroke-width", "stroke-linecap", "stroke-linejoin"], us = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), cs = [us];
function ds(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, cs, 14, ss);
}
var lo = /* @__PURE__ */ oe(is, [["render", ds]]);
const fr = Object.assign(lo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + lo.name, lo);
  }
}), fs = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ps = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vs = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), hs = [vs];
function ms(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, hs, 14, ps);
}
var ao = /* @__PURE__ */ oe(fs, [["render", ms]]);
const pr = Object.assign(ao, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + ao.name, ao);
  }
}), Ht = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], ys = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), gs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], bs = /* @__PURE__ */ D("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), _s = [bs];
function Cs(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, _s, 14, gs);
}
var ro = /* @__PURE__ */ oe(ys, [["render", Cs]]);
const ut = Object.assign(ro, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + ro.name, ro);
  }
}), $s = P({
  name: "FeedbackIcon",
  components: {
    IconLoading: ut,
    IconCheckCircleFill: _l,
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
function ks(e, t, n, o, l, r) {
  const a = ee("icon-loading"), i = ee("icon-check-circle-fill"), s = ee("icon-exclamation-circle-fill"), u = ee("icon-close-circle-fill");
  return $(), N("span", {
    class: V(e.cls)
  }, [e.type === "validating" ? ($(), J(a, {
    key: 0
  })) : e.type === "success" ? ($(), J(i, {
    key: 1
  })) : e.type === "warning" ? ($(), J(s, {
    key: 2
  })) : e.type === "error" ? ($(), J(u, {
    key: 3
  })) : pe("v-if", !0)], 2);
}
var Cl = /* @__PURE__ */ oe($s, [["render", ks]]);
const $l = {
  key: "Enter",
  code: "Enter"
}, ws = {
  key: "Backspace",
  code: "Backspace"
};
var Ss = Object.defineProperty, Rl = Object.getOwnPropertySymbols, Es = Object.prototype.hasOwnProperty, Os = Object.prototype.propertyIsEnumerable, Hl = (e, t, n) => t in e ? Ss(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ps = (e, t) => {
  for (var n in t || (t = {}))
    Es.call(t, n) && Hl(e, n, t[n]);
  if (Rl)
    for (var n of Rl(t))
      Os.call(t, n) && Hl(e, n, t[n]);
  return e;
};
const Gt = (e, t) => {
  const n = Ps({}, e);
  for (const o of t)
    o in n && delete n[o];
  return n;
};
function kl(e, t) {
  const n = {};
  return t.forEach((o) => {
    const l = o;
    o in e && (n[l] = e[l]);
  }), n;
}
const Bs = Symbol("ArcoFormItemContext"), ft = ({
  size: e,
  disabled: t,
  error: n,
  uninject: o
} = {}) => {
  const l = o ? {} : We(Bs, {}), r = d(() => {
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
}, pt = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = We(Tt, void 0);
  return {
    mergedSize: d(() => {
      var l, r;
      return (r = (l = e == null ? void 0 : e.value) != null ? l : n == null ? void 0 : n.size) != null ? r : t;
    })
  };
};
function xs(e) {
  const t = m();
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
var Ts = Object.defineProperty, Wl = Object.getOwnPropertySymbols, Is = Object.prototype.hasOwnProperty, zs = Object.prototype.propertyIsEnumerable, ql = (e, t, n) => t in e ? Ts(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Gl = (e, t) => {
  for (var n in t || (t = {}))
    Is.call(t, n) && ql(e, n, t[n]);
  if (Wl)
    for (var n of Wl(t))
      zs.call(t, n) && ql(e, n, t[n]);
  return e;
}, an = P({
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
    } = ye(e), s = U("input"), u = m(), {
      mergedSize: c,
      mergedDisabled: p,
      mergedError: v,
      feedback: h,
      eventHandlers: _
    } = ft({
      size: l,
      disabled: r,
      error: a
    }), {
      mergedSize: C
    } = pt(c), [w, L] = xs(u), B = m(e.defaultValue), E = d(() => {
      var Z;
      return (Z = e.modelValue) != null ? Z : B.value;
    });
    ve(i, (Z) => {
      (Ke(Z) || hn(Z)) && (B.value = "");
    });
    let g = E.value;
    const k = m(!1), y = d(() => e.allowClear && !e.readonly && !p.value && !!E.value), b = m(!1), A = m(""), F = (Z) => {
      var T;
      return Ue(e.wordLength) ? e.wordLength(Z) : (T = Z.length) != null ? T : 0;
    }, j = d(() => F(E.value)), O = d(() => v.value || !!(De(e.maxLength) && e.maxLength.errorOnly && j.value > q.value)), W = d(() => De(e.maxLength) && !!e.maxLength.errorOnly), q = d(() => De(e.maxLength) ? e.maxLength.length : e.maxLength), te = d(() => {
      const Z = F("a");
      return Math.floor(q.value / Z);
    }), le = (Z) => {
      var T, G;
      q.value && !W.value && F(Z) > q.value && (Z = (G = (T = e.wordSlice) == null ? void 0 : T.call(e, Z, q.value)) != null ? G : Z.slice(0, te.value)), B.value = Z, t("update:modelValue", Z);
    }, se = (Z) => {
      u.value && Z.target !== u.value && (Z.preventDefault(), u.value.focus());
    }, x = (Z, T) => {
      var G, fe;
      Z !== g && (g = Z, t("change", Z, T), (fe = (G = _.value) == null ? void 0 : G.onChange) == null || fe.call(G, T));
    }, Y = (Z) => {
      var T, G;
      k.value = !0, g = E.value, t("focus", Z), (G = (T = _.value) == null ? void 0 : T.onFocus) == null || G.call(T, Z);
    }, me = (Z) => {
      var T, G;
      k.value = !1, x(E.value, Z), t("blur", Z), (G = (T = _.value) == null ? void 0 : T.onBlur) == null || G.call(T, Z);
    }, ae = (Z) => {
      var T, G, fe;
      const {
        value: we,
        selectionStart: Ee,
        selectionEnd: Je
      } = Z.target;
      if (Z.type === "compositionend") {
        if (b.value = !1, A.value = "", q.value && !W.value && j.value >= q.value && F(we) > q.value && Ee === Je) {
          ce();
          return;
        }
        le(we), t("input", we, Z), (G = (T = _.value) == null ? void 0 : T.onInput) == null || G.call(T, Z), ce();
      } else
        b.value = !0, A.value = E.value + ((fe = Z.data) != null ? fe : "");
    }, ce = () => {
      w(), qe(() => {
        u.value && E.value !== u.value.value && (u.value.value = E.value, L());
      });
    }, Se = (Z) => {
      var T, G;
      const {
        value: fe
      } = Z.target;
      if (!b.value) {
        if (q.value && !W.value && j.value >= q.value && F(fe) > q.value && Z.inputType === "insertText") {
          ce();
          return;
        }
        le(fe), t("input", fe, Z), (G = (T = _.value) == null ? void 0 : T.onInput) == null || G.call(T, Z), ce();
      }
    }, be = (Z) => {
      le(""), x("", Z), t("clear", Z);
    }, ge = (Z) => {
      const T = Z.key || Z.code;
      !b.value && T === $l.key && (x(E.value, Z), t("pressEnter", Z));
    }, de = d(() => [`${s}-outer`, `${s}-outer-size-${C.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: p.value
    }]), ke = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: p.value,
      [`${s}-focus`]: k.value
    }]), tt = d(() => [s, `${s}-size-${C.value}`]), Te = d(() => Gt(o, Ht)), Me = d(() => kl(o, Ht)), He = d(() => {
      const Z = Gl(Gl({}, Me.value), e.inputAttrs);
      return O.value && (Z["aria-invalid"] = !0), Z;
    }), Ne = (Z) => {
      var T;
      return f("span", ie({
        class: ke.value,
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
      }, He.value), null), y.value && f(Qe, {
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
      }, [j.value, ze("/"), q.value]), (T = n.suffix) == null ? void 0 : T.call(n), !!h.value && f(Cl, {
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
const Vs = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ns = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ls = /* @__PURE__ */ D("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Ds = [Ls];
function As(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Ds, 14, Ns);
}
var io = /* @__PURE__ */ oe(Vs, [["render", As]]);
const al = Object.assign(io, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + io.name, io);
  }
}), vr = Symbol("ArcoButtonGroup"), js = P({
  name: "Button",
  components: {
    IconLoading: ut
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
    } = ft({
      size: a,
      disabled: i
    }), {
      mergedSize: c
    } = pt(s), p = d(() => {
      var h, _, C, w, L, B;
      return [l, `${l}-${(_ = (h = e.type) != null ? h : r == null ? void 0 : r.type) != null ? _ : "secondary"}`, `${l}-shape-${(w = (C = e.shape) != null ? C : r == null ? void 0 : r.shape) != null ? w : "square"}`, `${l}-size-${c.value}`, `${l}-status-${(B = (L = e.status) != null ? L : r == null ? void 0 : r.status) != null ? B : "normal"}`, {
        [`${l}-long`]: e.long,
        [`${l}-loading`]: e.loading,
        [`${l}-disabled`]: u.value,
        [`${l}-link`]: xt(e.href)
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
}), Fs = ["href"], Ms = ["type", "disabled"];
function Ks(e, t, n, o, l, r) {
  const a = ee("icon-loading");
  return e.href ? ($(), N("a", {
    key: 0,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), J(a, {
    key: 0,
    spin: "true"
  })) : H(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), H(e.$slots, "default")], 10, Fs)) : ($(), N("button", {
    key: 1,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), J(a, {
    key: 0,
    spin: !0
  })) : H(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), H(e.$slots, "default")], 10, Ms));
}
var so = /* @__PURE__ */ oe(js, [["render", Ks]]);
const Rs = P({
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
    return _t(vr, Pe({
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
function Hs(e, t, n, o, l, r) {
  return $(), N("div", {
    class: V(e.prefixCls)
  }, [H(e.$slots, "default")], 2);
}
var On = /* @__PURE__ */ oe(Rs, [["render", Hs]]);
const gn = Object.assign(so, {
  Group: On,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + so.name, so), e.component(n + On.name, On);
  }
});
var uo = P({
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
    } = pt(o), a = m(), i = (p) => {
      a.value.inputRef && t("search", a.value.inputRef.value, p);
    }, s = () => {
      var p;
      return f(Oe, null, [e.loading ? f(ut, null, null) : f(Qe, {
        onClick: i
      }, {
        default: () => [f(al, null, null)]
      }), (p = n.suffix) == null ? void 0 : p.call(n)]);
    }, u = () => {
      var p;
      let v = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? v = {
        default: (p = n["button-default"]) != null ? p : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : v = {
        icon: () => f(al, null, null)
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
      render: () => f(an, {
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
const Ws = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), qs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gs = /* @__PURE__ */ D("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Us = /* @__PURE__ */ D("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), Zs = [Gs, Us];
function Ys(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Zs, 14, qs);
}
var co = /* @__PURE__ */ oe(Ws, [["render", Ys]]);
const Xs = Object.assign(co, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + co.name, co);
  }
}), Js = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Qs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], eu = /* @__PURE__ */ D("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), tu = /* @__PURE__ */ D("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), nu = [eu, tu];
function ou(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, nu, 14, Qs);
}
var fo = /* @__PURE__ */ oe(Js, [["render", ou]]);
const lu = Object.assign(fo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + fo.name, fo);
  }
});
function au(e) {
  const t = m(e);
  return [t, (o) => {
    t.value = o;
  }];
}
function Dn(e, t) {
  const {
    value: n
  } = ye(t), [o, l] = au(Ke(n.value) ? e : n.value);
  return ve(n, (a) => {
    Ke(a) && l(void 0);
  }), [d(() => Ke(n.value) ? o.value : n.value), l, o];
}
const ru = P({
  name: "InputPassword",
  components: {
    IconEye: Xs,
    IconEyeInvisible: lu,
    AIconHover: Qe,
    AInput: an
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
    } = ye(e), l = m(), r = () => {
      s(!a.value);
    }, [a, i] = Dn(o.value, Pe({
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
function iu(e, t, n, o, l, r) {
  const a = ee("icon-eye"), i = ee("icon-eye-invisible"), s = ee("a-icon-hover"), u = ee("a-input");
  return $(), J(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, cn({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: M(() => [H(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: M(() => [H(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: M(() => [e.invisibleButton ? ($(), J(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = at(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = at(() => {
      }, ["prevent"]))
    }, {
      default: M(() => [e.mergedVisible ? ($(), J(i, {
        key: 1
      })) : ($(), J(a, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : pe("v-if", !0), H(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: M(() => [H(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var po = /* @__PURE__ */ oe(ru, [["render", iu]]);
const su = P({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: U("input-group")
    };
  }
});
function uu(e, t, n, o, l, r) {
  return $(), N("div", {
    class: V(e.prefixCls)
  }, [H(e.$slots, "default")], 2);
}
var vo = /* @__PURE__ */ oe(su, [["render", uu]]);
const wl = Object.assign(an, {
  Search: uo,
  Password: po,
  Group: vo,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + an.name, an), e.component(n + vo.name, vo), e.component(n + uo.name, uo), e.component(n + po.name, po);
  }
});
var cu = Object.defineProperty, Ul = Object.getOwnPropertySymbols, du = Object.prototype.hasOwnProperty, fu = Object.prototype.propertyIsEnumerable, Zl = (e, t, n) => t in e ? cu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, tn = (e, t) => {
  for (var n in t || (t = {}))
    du.call(t, n) && Zl(e, n, t[n]);
  if (Ul)
    for (var n of Ul(t))
      fu.call(t, n) && Zl(e, n, t[n]);
  return e;
};
const pu = () => {
  const {
    height: e,
    width: t
  } = Fi();
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
}, vu = (e) => {
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
}, hu = (e, t, {
  containerRect: n,
  triggerRect: o,
  popupRect: l,
  offset: r,
  translate: a
}) => {
  const i = vu(e), s = pu(), u = {
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
      const p = nn("bottom", o, l, {
        offset: r,
        translate: a
      });
      s.height - (n.top + p.top + l.height) > 0 && (c = $n(e, "bottom"), t.top = p.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - o.bottom > l.height)
      t.top = -n.top + (s.height - l.height);
    else {
      const p = nn("top", o, l, {
        offset: r,
        translate: a
      });
      n.top + p.top > 0 && (c = $n(e, "top"), t.top = p.top);
    }
  if (i === "left" && u.left < 0)
    if (o.left > l.width)
      t.left = -n.left;
    else {
      const p = nn("right", o, l, {
        offset: r,
        translate: a
      });
      s.width - (n.left + p.left + l.width) > 0 && (c = $n(e, "right"), t.left = p.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - o.right > l.width)
      t.left = -n.left + (s.width - l.width);
    else {
      const p = nn("left", o, l, {
        offset: r,
        translate: a
      });
      n.left + p.left > 0 && (c = $n(e, "left"), t.left = p.left);
    }
  return (i === "top" || i === "bottom") && (u.left < 0 ? t.left = -n.left : u.right < 0 && (t.left = -n.left + (s.width - l.width))), (i === "left" || i === "right") && (u.top < 0 ? t.top = -n.top : u.bottom < 0 && (t.top = -n.top + (s.height - l.height))), {
    popupPosition: t,
    position: c
  };
}, nn = (e, t, n, {
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
}, mu = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, yu = (e, t, n, o, {
  offset: l = 0,
  translate: r = [0, 0],
  customStyle: a = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, u = nn(e, n, o, {
    offset: l,
    translate: r
  });
  if (i) {
    const p = hu(e, u, {
      containerRect: t,
      popupRect: o,
      triggerRect: n,
      offset: l,
      translate: r
    });
    u = p.popupPosition, s = p.position;
  }
  return {
    style: tn({
      left: `${u.left}px`,
      top: `${u.top}px`
    }, a),
    position: s
  };
}, gu = (e, t, n, {
  customStyle: o = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let r = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return r > n.width - 8 && (t.width > n.width ? r = n.width / 2 : r = n.width - 8), ["top", "tl", "tr"].includes(e) ? tn({
      left: `${r}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, o) : tn({
      left: `${r}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, o);
  }
  let l = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return l > n.height - 8 && (t.height > n.height ? l = n.height / 2 : l = n.height - 8), ["left", "lt", "lb"].includes(e) ? tn({
    top: `${l}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, o) : tn({
    top: `${l}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, o);
}, bu = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Xl = (e) => {
  var t;
  const n = [];
  let o = e;
  for (; o && o !== document.documentElement; )
    bu(o) && n.push(o), o = (t = o.parentElement) != null ? t : void 0;
  return n;
}, hr = () => {
  const e = {}, t = m(), n = () => {
    const o = ir(e.value);
    o !== t.value && (t.value = o);
  };
  return Ae(() => n()), dt(() => n()), {
    children: e,
    firstElement: t
  };
};
var rl = P({
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
      s && (r = new hl((u) => {
        const c = u[0];
        t("resize", c);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return ve(l, (s) => {
      r && i(), s && a(s);
    }), qt(() => {
      r && i();
    }), () => {
      var s;
      return o.value = (s = n.default) == null ? void 0 : s.call(n), o.value;
    };
  }
});
function it(e, t) {
  const n = m(e[t]);
  return dt(() => {
    const o = e[t];
    n.value !== o && (n.value = o);
  }), n;
}
const Jl = Symbol("ArcoTrigger"), _u = 1e3, Cu = 5e3, $u = 1;
class ku {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || Cu : Array.from(this.popupStack.popup).pop() || _u) + $u, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const ho = new ku();
function wu(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const o = m(0), l = () => {
    o.value = ho.add(e);
  }, r = () => {
    ho.delete(o.value, e);
  }, a = () => e === "dialog" ? ho.isLastDialog(o.value) : !1;
  return ve(() => t == null ? void 0 : t.value, (i) => {
    i ? l() : r();
  }, {
    immediate: !0
  }), n && (Ae(() => {
    l();
  }), qt(() => {
    r();
  })), {
    zIndex: vn(o),
    open: l,
    close: r,
    isLastDialog: a
  };
}
const Su = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new hl((r) => {
        const a = r[0];
        Ue(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var Eu = P({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = m(!1);
    return Ae(() => n.value = !0), () => {
      var o;
      return n.value ? (o = t.default) == null ? void 0 : o.call(t) : null;
    };
  }
});
const Ou = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: o
}) => {
  const l = m(e.value), r = m(), a = () => {
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
var Pu = Object.defineProperty, Bu = Object.defineProperties, xu = Object.getOwnPropertyDescriptors, Ql = Object.getOwnPropertySymbols, Tu = Object.prototype.hasOwnProperty, Iu = Object.prototype.propertyIsEnumerable, ea = (e, t, n) => t in e ? Pu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zu = (e, t) => {
  for (var n in t || (t = {}))
    Tu.call(t, n) && ea(e, n, t[n]);
  if (Ql)
    for (var n of Ql(t))
      Iu.call(t, n) && ea(e, n, t[n]);
  return e;
}, Vu = (e, t) => Bu(e, xu(t));
const Nu = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var mo = P({
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
    } = ye(e), r = U("trigger"), a = d(() => Gt(o, Nu)), i = We(Tt, void 0), s = d(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = We(Jl, void 0), {
      children: p,
      firstElement: v
    } = hr(), h = m(), _ = m(e.defaultPopupVisible), C = m(e.position), w = m({}), L = m({}), B = m({}), E = m(), g = m({
      top: 0,
      left: 0
    });
    let k = null, y = null;
    const b = d(() => {
      var S;
      return (S = e.popupVisible) != null ? S : _.value;
    }), {
      teleportContainer: A,
      containerRef: F
    } = Ou({
      popupContainer: l,
      visible: b,
      documentContainer: !0
    }), {
      zIndex: j
    } = wu("popup", {
      visible: b
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
        g.value = {
          top: ne,
          left: z
        };
      }
    }, se = () => {
      if (!v.value || !h.value || !F.value)
        return;
      const S = F.value.getBoundingClientRect(), z = e.alignPoint ? {
        top: g.value.top,
        bottom: g.value.top,
        left: g.value.left,
        right: g.value.left,
        scrollTop: g.value.top,
        scrollBottom: g.value.top,
        scrollLeft: g.value.left,
        scrollRight: g.value.left,
        width: 0,
        height: 0
      } : Yl(v.value, S), ne = () => Yl(h.value, S), Ze = ne(), {
        style: Ge,
        position: rt
      } = yu(e.position, S, z, Ze, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (L.value = {
        transformOrigin: mu(rt)
      }), e.autoFitPopupMinWidth ? Ge.minWidth = `${z.width}px` : e.autoFitPopupWidth && (Ge.width = `${z.width}px`), C.value !== rt && (C.value = rt), w.value = Ge, e.showArrow && qe(() => {
        B.value = gu(rt, z, ne(), {
          customStyle: e.arrowStyle
        });
      });
    }, x = (S, z) => {
      if (S === b.value && O === 0)
        return;
      const ne = () => {
        _.value = S, t("update:popupVisible", S), t("popupVisibleChange", S), S && qe(() => {
          se();
        });
      };
      S || (k = null, y = null), z ? (te(), S !== b.value && (O = window.setTimeout(ne, z))) : ne();
    }, Y = (S) => {
      var z;
      (z = o.onClick) == null || z.call(o, S), !(e.disabled || b.value && !e.clickToClose) && (s.value.includes("click") ? (le(S), x(!b.value)) : s.value.includes("contextMenu") && b.value && x(!1));
    }, me = (S) => {
      var z;
      (z = o.onMouseenter) == null || z.call(o, S), !(e.disabled || !s.value.includes("hover")) && (le(S), x(!0, e.mouseEnterDelay));
    }, ae = (S) => {
      c == null || c.onMouseenter(S), me(S);
    }, ce = (S) => {
      var z;
      (z = o.onMouseleave) == null || z.call(o, S), !(e.disabled || !s.value.includes("hover")) && x(!1, e.mouseLeaveDelay);
    }, Se = (S) => {
      c == null || c.onMouseleave(S), ce(S);
    }, be = (S) => {
      var z;
      (z = o.onFocusin) == null || z.call(o, S), !(e.disabled || !s.value.includes("focus")) && x(!0, e.focusDelay);
    }, ge = (S) => {
      var z;
      (z = o.onFocusout) == null || z.call(o, S), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && x(!1);
    }, de = (S) => {
      var z;
      (z = o.onContextmenu) == null || z.call(o, S), !(e.disabled || !s.value.includes("contextMenu") || b.value && !e.clickToClose) && (le(S), x(!b.value), S.preventDefault());
    };
    _t(Jl, Pe({
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
      Ln(document.documentElement, "mousedown", Ne), W = !1;
    }, Me = it(n, "content"), He = d(() => {
      var S;
      return e.hideEmpty && ji((S = Me.value) == null ? void 0 : S.call(Me));
    }), Ne = (S) => {
      var z, ne, Ze;
      if (!((z = v.value) != null && z.contains(S.target) || (ne = h.value) != null && ne.contains(S.target))) {
        for (const Ge of u)
          if ((Ze = Ge.value) != null && Ze.contains(S.target))
            return;
        Te(), x(!1);
      }
    }, Ye = (S, z) => {
      const [ne, Ze] = S, {
        scrollTop: Ge,
        scrollLeft: rt
      } = z;
      return Math.abs(Ge - ne) >= e.scrollToCloseDistance || Math.abs(rt - Ze) >= e.scrollToCloseDistance;
    }, Z = ll((S) => {
      if (b.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const z = S.target;
          k || (k = [z.scrollTop, z.scrollLeft]), Ye(k, z) ? x(!1) : se();
        } else
          se();
    }), T = () => {
      Ln(window, "scroll", G), q = !1;
    }, G = ll((S) => {
      const z = S.target.documentElement;
      y || (y = [z.scrollTop, z.scrollLeft]), Ye(y, z) && (x(!1), T());
    }), fe = () => {
      b.value && se();
    }, we = () => {
      fe(), t("resize");
    }, Ee = (S) => {
      e.preventFocus && S.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Je = d(() => b.value ? e.openedClass : void 0);
    let Ve;
    ve(b, (S) => {
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
      S && (kt.value = !0);
    }), ve(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      b.value && se();
    });
    const {
      createResizeObserver: $t,
      destroyResizeObserver: Xt
    } = Su({
      elementRef: F,
      onResize: fe
    });
    Ae(() => {
      if ($t(), b.value && (se(), e.clickOutsideToClose && !W && (jt(document.documentElement, "mousedown", Ne), W = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ve = Xl(v.value);
        for (const S of Ve)
          S.addEventListener("scroll", Z);
      }
    }), dt(() => {
      b.value && se();
    }), ti(() => {
      x(!1);
    }), qt(() => {
      if (c == null || c.removeChildRef(h), Xt(), W && Te(), q && T(), Ve) {
        for (const S of Ve)
          S.removeEventListener("scroll", Z);
        Ve = void 0;
      }
    });
    const kt = m(b.value), lt = m(!1), It = () => {
      lt.value = !0;
    }, Jt = () => {
      lt.value = !1, b.value && t("show");
    }, I = () => {
      lt.value = !1, b.value || (kt.value = !1, t("hide"));
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
      }), f(Oe, null, [e.autoFixPosition ? f(rl, {
        onResize: we
      }, {
        default: () => [p.value]
      }) : p.value, f(Eu, null, {
        default: () => [f(Za, {
          to: A.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || b.value || kt.value) && !He.value && f(rl, {
            onResize: fe
          }, {
            default: () => [f("div", ie({
              ref: h,
              class: [`${r}-popup`, `${r}-position-${C.value}`],
              style: Vu(zu({}, w.value), {
                zIndex: j.value,
                pointerEvents: lt.value ? "none" : "auto"
              }),
              "trigger-placement": C.value,
              onMouseenter: ae,
              onMouseleave: Se,
              onMousedown: Ee
            }, a.value), [f(Mn, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: It,
              onAfterEnter: Jt,
              onBeforeLeave: It,
              onAfterLeave: I
            }, {
              default: () => {
                var ne;
                return [mt(f("div", {
                  class: `${r}-popup-wrapper`,
                  style: L.value
                }, [f("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(ne = n.content) == null ? void 0 : ne.call(n)]), e.showArrow && f("div", {
                  ref: E,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: B.value
                }, null)]), [[yt, b.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Ot = Object.assign(mo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + mo.name, mo);
  }
}), Lu = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Du = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Au = /* @__PURE__ */ D("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), ju = [Au];
function Fu(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, ju, 14, Du);
}
var yo = /* @__PURE__ */ oe(Lu, [["render", Fu]]);
const Mu = Object.assign(yo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + yo.name, yo);
  }
});
var go = P({
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
    } = vl(), r = We(Tt, void 0);
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
      }, null) : f(Mu, null, null)]), f("div", {
        class: `${o}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || l("empty.description")])]);
    };
  }
});
const mr = Object.assign(go, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + go.name, go);
  }
}), Ku = 5;
var Ru = P({
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
      }, [Array(Ku).fill(1).map((o, l) => f("div", {
        class: `${t}-item`,
        key: l,
        style: n
      }, null))]);
    };
  }
}), bo = P({
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
    const n = U("spin"), o = We(Tt, void 0), l = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), r = () => {
      if (t.icon) {
        const i = At(t.icon());
        if (i)
          return Fn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(Ru, {
        size: e.size
      }, null) : o != null && o.slots.loading ? o.slots.loading() : f(ut, {
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
const Hu = Object.assign(bo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + bo.name, bo);
  }
}), Wu = P({
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
    const n = U("scrollbar"), o = m(!1), l = m(), r = m(), a = d(() => e.direction === "horizontal" ? {
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
      var B, E;
      return {
        [a.value.size]: `${(E = (B = e.data) == null ? void 0 : B.thumbSize) != null ? E : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), p = (B) => {
      B.preventDefault(), r.value && (u.value = B[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, jt(window, "mousemove", _), jt(window, "mouseup", C), jt(window, "contextmenu", C));
    }, v = (B) => {
      var E, g, k, y;
      if (B.preventDefault(), r.value) {
        const b = h(B[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((g = (E = e.data) == null ? void 0 : E.thumbSize) != null ? g : 0) : i.value - ((y = (k = e.data) == null ? void 0 : k.thumbSize) != null ? y : 0));
        b !== i.value && (i.value = b, t("scroll", b));
      }
    }, h = (B) => B < 0 ? 0 : e.data && B > e.data.max ? e.data.max : B, _ = (B) => {
      if (l.value && r.value) {
        const E = h(B[a.value.client] - l.value.getBoundingClientRect()[a.value.direction] - u.value);
        E !== i.value && (i.value = E, t("scroll", E));
      }
    }, C = () => {
      s.value = !1, Ln(window, "mousemove", _), Ln(window, "mouseup", C);
    }, w = (B) => {
      s.value || (B = h(B), B !== i.value && (i.value = B));
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
function qu(e, t, n, o, l, r) {
  return $(), J(Mn, null, {
    default: M(() => [D("div", {
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
var Gu = /* @__PURE__ */ oe(Wu, [["render", qu]]);
const ta = 20, kn = 15, Uu = P({
  name: "Scrollbar",
  components: {
    ResizeObserver: rl,
    Thumb: Gu
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
    const n = U("scrollbar"), o = m(), l = m(), r = m(), a = m(), i = m(), s = m(!1), u = m(!1), c = d(() => s.value && !e.disableHorizontal), p = d(() => u.value && !e.disableVertical), v = m(!1), h = () => {
      var g, k, y, b, A, F;
      if (o.value) {
        const {
          clientWidth: j,
          clientHeight: O,
          offsetWidth: W,
          offsetHeight: q,
          scrollWidth: te,
          scrollHeight: le,
          scrollTop: se,
          scrollLeft: x
        } = o.value;
        s.value = te > j, u.value = le > O, v.value = c.value && p.value;
        const Y = e.type === "embed" && v.value ? W - kn : W, me = e.type === "embed" && v.value ? q - kn : q, ae = Math.round(Y / Math.min(te / j, Y / ta)), ce = Y - ae, Se = (te - j) / ce, be = Math.round(me / Math.min(le / O, me / ta)), ge = me - be, de = (le - O) / ge;
        if (l.value = {
          ratio: Se,
          thumbSize: ae,
          max: ce
        }, r.value = {
          ratio: de,
          thumbSize: be,
          max: ge
        }, se > 0) {
          const ke = Math.round(se / ((k = (g = r.value) == null ? void 0 : g.ratio) != null ? k : 1));
          (y = i.value) == null || y.setOffset(ke);
        }
        if (x > 0) {
          const ke = Math.round(x / ((A = (b = r.value) == null ? void 0 : b.ratio) != null ? A : 1));
          (F = a.value) == null || F.setOffset(ke);
        }
      }
    };
    Ae(() => {
      h();
    });
    const _ = () => {
      h();
    }, C = (g) => {
      var k, y, b, A, F, j;
      if (o.value) {
        if (c.value && !e.disableHorizontal) {
          const O = Math.round(o.value.scrollLeft / ((y = (k = l.value) == null ? void 0 : k.ratio) != null ? y : 1));
          (b = a.value) == null || b.setOffset(O);
        }
        if (p.value && !e.disableVertical) {
          const O = Math.round(o.value.scrollTop / ((F = (A = r.value) == null ? void 0 : A.ratio) != null ? F : 1));
          (j = i.value) == null || j.setOffset(O);
        }
      }
      t("scroll", g);
    }, w = (g) => {
      var k, y;
      o.value && o.value.scrollTo({
        left: g * ((y = (k = l.value) == null ? void 0 : k.ratio) != null ? y : 1)
      });
    }, L = (g) => {
      var k, y;
      o.value && o.value.scrollTo({
        top: g * ((y = (k = r.value) == null ? void 0 : k.ratio) != null ? y : 1)
      });
    }, B = d(() => {
      const g = {};
      return e.type === "track" && (c.value && (g.paddingBottom = `${kn}px`), p.value && (g.paddingRight = `${kn}px`)), [g, e.outerStyle];
    }), E = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: v.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: E,
      style: B,
      containerRef: o,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: l,
      verticalData: r,
      isBoth: v,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: p,
      handleResize: _,
      handleScroll: C,
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
function Zu(e, t, n, o, l, r) {
  const a = ee("ResizeObserver"), i = ee("thumb");
  return $(), N("div", {
    class: V(e.cls),
    style: re(e.style)
  }, [f(a, {
    onResize: e.handleResize
  }, {
    default: M(() => [D("div", ie({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(a, {
      onResize: e.handleResize
    }, {
      default: M(() => [H(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? ($(), J(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0), !e.hide && e.hasVerticalScrollbar ? ($(), J(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0)], 6);
}
var _o = /* @__PURE__ */ oe(Uu, [["render", Zu]]);
const qn = Object.assign(_o, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + _o.name, _o);
  }
}), Yu = (e) => {
  const t = m(), n = () => Ja(t.value) ? t.value.$refs[e] : t.value, o = m();
  return Ae(() => {
    o.value = n();
  }), ve([t], () => {
    o.value = n();
  }), {
    componentRef: t,
    elementRef: o
  };
};
var Xu = Object.defineProperty, na = Object.getOwnPropertySymbols, Ju = Object.prototype.hasOwnProperty, Qu = Object.prototype.propertyIsEnumerable, oa = (e, t, n) => t in e ? Xu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ec = (e, t) => {
  for (var n in t || (t = {}))
    Ju.call(t, n) && oa(e, n, t[n]);
  if (na)
    for (var n of na(t))
      Qu.call(t, n) && oa(e, n, t[n]);
  return e;
};
const tc = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return ec({
        type: "embed"
      }, Kt(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, nc = P({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: qn,
    Empty: mr,
    Spin: Hu
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
    } = ye(e), i = U("select-dropdown"), s = We(Tt, void 0), u = (r = (l = s == null ? void 0 : (o = s.slots).empty) == null ? void 0 : l.call(o, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: c,
      elementRef: p
    } = Yu("containerRef"), {
      displayScrollbar: v,
      scrollbarProps: h
    } = tc(a), _ = (w) => {
      const {
        scrollTop: L,
        scrollHeight: B,
        offsetHeight: E
      } = w.target;
      B - (L + E) <= e.bottomOffset && t("reachBottom", w), t("scroll", w);
    }, C = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: C,
      wrapperRef: p,
      wrapperComRef: c,
      handleScroll: _,
      displayScrollbar: v,
      scrollbarProps: h
    };
  }
});
function oc(e, t, n, o, l, r) {
  const a = ee("spin");
  return $(), N("div", {
    class: V(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? ($(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-header`)
  }, [H(e.$slots, "header")], 2)) : pe("v-if", !0), e.loading ? ($(), J(a, {
    key: 1,
    class: V(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? ($(), N("div", {
    key: 2,
    class: V(`${e.prefixCls}-empty`)
  }, [H(e.$slots, "empty", {}, () => [($(), J(Dt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : pe("v-if", !0), e.virtualList && !e.loading && !e.empty ? H(e.$slots, "virtual-list", {
    key: 3
  }) : pe("v-if", !0), e.virtualList ? pe("v-if", !0) : mt(($(), J(Dt(e.displayScrollbar ? "ScrollbarComponent" : "div"), ie({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: M(() => [D("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [H(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[yt, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? ($(), N("div", {
    key: 5,
    class: V(`${e.prefixCls}-footer`)
  }, [H(e.$slots, "footer")], 2)) : pe("v-if", !0)], 2);
}
var lc = /* @__PURE__ */ oe(nc, [["render", oc]]), la = P({
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
var Pn = P({
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
    } = ye(e), r = U("checkbox"), a = m(), i = e.uninjectGroupContext ? void 0 : We(yr, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = ft({
      disabled: o
    }), p = m(e.defaultChecked), v = d(() => {
      var g;
      return s ? i == null ? void 0 : i.computedValue : (g = e.modelValue) != null ? g : p.value;
    }), h = d(() => {
      var g;
      return Re(v.value) ? v.value.includes((g = e.value) != null ? g : !0) : v.value;
    }), _ = d(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !h.value && (i == null ? void 0 : i.isMaxed)), C = (g) => {
      g.stopPropagation();
    }, w = (g) => {
      var k, y, b, A;
      const {
        checked: F
      } = g.target;
      let j = F;
      if (Re(v.value)) {
        const O = new Set(v.value);
        F ? O.add((k = e.value) != null ? k : !0) : O.delete((y = e.value) != null ? y : !0), j = Array.from(O);
      }
      p.value = F, s && Re(j) ? i == null || i.handleChange(j, g) : (t("update:modelValue", j), t("change", j, g), (A = (b = c.value) == null ? void 0 : b.onChange) == null || A.call(b, g)), qe(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, L = d(() => [r, {
      [`${r}-checked`]: h.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: _.value
    }]), B = (g) => {
      var k, y;
      (y = (k = c.value) == null ? void 0 : k.onFocus) == null || y.call(k, g);
    }, E = (g) => {
      var k, y;
      (y = (k = c.value) == null ? void 0 : k.onBlur) == null || y.call(k, g);
    };
    return ve(l, (g) => {
      (Ke(g) || hn(g)) && (p.value = !1);
    }), ve(v, (g) => {
      var k;
      let y;
      Re(g) ? y = g.includes((k = e.value) != null ? k : !0) : y = g, p.value !== y && (p.value = y), a.value && a.value.checked !== y && (a.value.checked = y);
    }), () => {
      var g, k, y, b;
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
        onClick: C,
        onChange: w,
        onFocus: B,
        onBlur: E
      }, null), (b = (y = (k = n.checkbox) != null ? k : (g = i == null ? void 0 : i.slots) == null ? void 0 : g.checkbox) == null ? void 0 : y({
        checked: h.value,
        disabled: _.value
      })) != null ? b : f(Qe, {
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
}), Co = P({
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
    } = ft({
      disabled: o
    }), i = m(e.defaultValue), s = d(() => Re(e.modelValue) ? e.modelValue : i.value), u = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = d(() => {
      var _;
      return ((_ = e.options) != null ? _ : []).map((C) => xt(C) || Ce(C) ? {
        label: C,
        value: C
      } : C);
    });
    _t(yr, Pe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (_, C) => {
        var w, L;
        i.value = _, t("update:modelValue", _), t("change", _, C), (L = (w = a.value) == null ? void 0 : w.onChange) == null || L.call(w, C);
      }
    }));
    const v = d(() => [l, `${l}-direction-${e.direction}`]);
    ve(() => e.modelValue, (_) => {
      Re(_) ? i.value = [..._] : i.value = [];
    });
    const h = () => c.value.map((_) => {
      const C = s.value.includes(_.value);
      return f(Pn, {
        key: _.value,
        value: _.value,
        disabled: _.disabled || !C && u.value,
        indeterminate: _.indeterminate,
        modelValue: C
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
const gr = Object.assign(Pn, {
  Group: Co,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Pn.name, Pn), e.component(n + Co.name, Co);
  }
}), br = Symbol("ArcoSelectContext");
var ac = Object.defineProperty, rc = Object.defineProperties, ic = Object.getOwnPropertyDescriptors, aa = Object.getOwnPropertySymbols, sc = Object.prototype.hasOwnProperty, uc = Object.prototype.propertyIsEnumerable, ra = (e, t, n) => t in e ? ac(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sl = (e, t) => {
  for (var n in t || (t = {}))
    sc.call(t, n) && ra(e, n, t[n]);
  if (aa)
    for (var n of aa(t))
      uc.call(t, n) && ra(e, n, t[n]);
  return e;
}, _r = (e, t) => rc(e, ic(t));
const cc = (e) => De(e) && "isGroup" in e, Cr = (e) => De(e) && "isGroup" in e, dc = (e, t = "value") => String(De(e) ? e[t] : e), fn = (e, t = "value") => De(e) ? `__arco__option__object__${e[t]}` : e || Ce(e) || xt(e) || Kt(e) ? `__arco__option__${typeof e}-${e}` : "", fc = (e) => e.has("__arco__option__string-"), pc = (e, {
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
      key: fn(i, t),
      origin: o,
      value: i,
      label: (r = e[n.label]) != null ? r : dc(i, t),
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
  return Sl({
    raw: a,
    index: l,
    key: fn(e, t),
    origin: o
  }, a);
}, il = (e, {
  valueKey: t,
  fieldNames: n,
  origin: o,
  optionInfoMap: l
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (cc(i)) {
      const s = il((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: o,
        optionInfoMap: l
      });
      s.length > 0 && a.push(_r(Sl({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = pc(i, {
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
      if (Cr(i)) {
        const s = o((r = i.options) != null ? r : []);
        s.length > 0 && a.push(_r(Sl({}, i), {
          options: s
        }));
      } else
        Gn(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return o(e);
}, Gn = (e, {
  inputValue: t,
  filterOption: n
}) => Ue(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, vc = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!El(e[n], t[n]))
      return !1;
  return !0;
}, hc = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let o = 0; o < n; o++)
    if (!El(e[o], t[o]))
      return !1;
  return !0;
}, El = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? vc(e, t) : n === "[object Array]" ? hc(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, mc = P({
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
    } = ye(e), l = U("select-option"), r = We(br, void 0), a = bt(), i = m(), s = m(n.value);
    ve(n, (y, b) => {
      El(y, b) || (s.value = y);
    });
    const u = m(""), c = d(() => {
      var y, b;
      return (b = (y = e.value) != null ? y : e.label) != null ? b : u.value;
    }), p = d(() => {
      var y;
      return (y = e.label) != null ? y : u.value;
    }), v = d(() => fn(c.value, r == null ? void 0 : r.valueKey)), h = d(() => {
      var y;
      return (y = r == null ? void 0 : r.component) != null ? y : "li";
    }), _ = () => {
      var y;
      if (!e.label && i.value) {
        const b = (y = i.value.textContent) != null ? y : "";
        u.value !== b && (u.value = b);
      }
    };
    Ae(() => _()), dt(() => _());
    const C = d(() => {
      var y;
      return (y = r == null ? void 0 : r.valueKeys.includes(v.value)) != null ? y : !1;
    }), w = d(() => (r == null ? void 0 : r.activeKey) === v.value);
    let L = m(!0);
    if (!e.internal) {
      const y = Pe({
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
      L = d(() => Gn(y, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, y)), qt(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const B = (y) => {
      e.disabled || r == null || r.onSelect(v.value, y);
    }, E = () => {
      e.disabled || r == null || r.setActiveKey(v.value);
    }, g = () => {
      e.disabled || r == null || r.setActiveKey();
    }, k = d(() => [l, {
      [`${l}-disabled`]: e.disabled,
      [`${l}-selected`]: C.value,
      [`${l}-active`]: w.value,
      [`${l}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: l,
      cls: k,
      selectCtx: r,
      itemRef: i,
      component: h,
      isSelected: C,
      isValid: L,
      handleClick: B,
      handleMouseEnter: E,
      handleMouseLeave: g
    };
  }
});
function yc(e, t, n, o, l, r) {
  const a = ee("checkbox");
  return mt(($(), J(Dt(e.component), {
    ref: "itemRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: M(() => [e.$slots.icon ? ($(), N("span", {
      key: 0,
      class: V(`${e.prefixCls}-icon`)
    }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), e.selectCtx && e.selectCtx.multiple ? ($(), J(a, {
      key: 1,
      class: V(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: M(() => [H(e.$slots, "default", {}, () => [ze(xe(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : ($(), N("span", {
      key: 2,
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "default", {}, () => [ze(xe(e.label), 1)])], 2)), e.$slots.suffix ? ($(), N("span", {
      key: 3,
      class: V(`${e.prefixCls}-suffix`)
    }, [H(e.$slots, "suffix")], 2)) : pe("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[yt, e.isValid]]);
}
var Bn = /* @__PURE__ */ oe(mc, [["render", yc]]), gc = Object.defineProperty, bc = Object.defineProperties, _c = Object.getOwnPropertyDescriptors, sa = Object.getOwnPropertySymbols, Cc = Object.prototype.hasOwnProperty, $c = Object.prototype.propertyIsEnumerable, ua = (e, t, n) => t in e ? gc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, $o = (e, t) => {
  for (var n in t || (t = {}))
    Cc.call(t, n) && ua(e, n, t[n]);
  if (sa)
    for (var n of sa(t))
      $c.call(t, n) && ua(e, n, t[n]);
  return e;
}, kc = (e, t) => bc(e, _c(t));
const wc = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, Sc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: o,
  showExtraOptions: l,
  valueKey: r,
  fieldNames: a
}) => {
  const i = d(() => $o($o({}, wc), a == null ? void 0 : a.value)), s = Pe(/* @__PURE__ */ new Map()), u = d(() => Array.from(s.values()).sort((E, g) => Ce(E.index) && Ce(g.index) ? E.index - g.index : 0)), c = d(() => {
    var E, g;
    const k = /* @__PURE__ */ new Map();
    return {
      optionInfos: il((E = e == null ? void 0 : e.value) != null ? E : [], {
        valueKey: (g = r == null ? void 0 : r.value) != null ? g : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: k
      }),
      optionInfoMap: k
    };
  }), p = d(() => {
    var E, g;
    const k = /* @__PURE__ */ new Map();
    return {
      optionInfos: il((E = t == null ? void 0 : t.value) != null ? E : [], {
        valueKey: (g = r == null ? void 0 : r.value) != null ? g : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: k
      }),
      optionInfoMap: k
    };
  }), v = Pe(/* @__PURE__ */ new Map());
  ve([u, e ?? m([]), t ?? m([]), r ?? m("value")], () => {
    v.clear(), u.value.forEach((E, g) => {
      v.set(E.key, kc($o({}, E), {
        index: g
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
    const g = ia(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    });
    return ((E = l == null ? void 0 : l.value) == null || E) && g.push(...ia(p.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: o == null ? void 0 : o.value
    })), g;
  }), _ = d(() => Array.from(v.values()).filter((E) => E.origin === "extraOptions" && (l == null ? void 0 : l.value) === !1 ? !1 : Gn(E, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: o == null ? void 0 : o.value
  }))), C = d(() => _.value.filter((E) => !E.disabled).map((E) => E.key));
  return {
    validOptions: h,
    optionInfoMap: v,
    validOptionInfos: _,
    enabledOptionKeys: C,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (E, g) => {
      s.set(E, g);
    },
    removeSlotOptionInfo: (E) => {
      s.delete(E);
    }
  };
}, wn = {
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
}), Ec = (e) => {
  const t = {};
  return e.forEach((n, o) => {
    const l = xt(o) ? {
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
}, Oc = ({
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
  onSelect: C,
  onPopupVisibleChange: w,
  enterToOpen: L = !0,
  defaultActiveFirstOption: B
}) => {
  const {
    validOptions: E,
    optionInfoMap: g,
    validOptionInfos: k,
    enabledOptionKeys: y,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F
  } = Sc({
    options: t,
    extraOptions: n,
    inputValue: o,
    filterOption: l,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), j = m();
  ve(y, (le) => {
    (!j.value || !le.includes(j.value)) && (j.value = le[0]);
  });
  const O = (le) => {
    j.value = le;
  }, W = (le) => {
    const se = y.value.length;
    if (se === 0)
      return;
    if (!j.value)
      return le === "down" ? y.value[0] : y.value[se - 1];
    const x = y.value.indexOf(j.value), Y = (se + x + (le === "up" ? -1 : 1)) % se;
    return y.value[Y];
  }, q = (le) => {
    var se, x;
    _ != null && _.value && _.value.scrollTo({
      key: le
    });
    const Y = g.get(le), me = (se = v == null ? void 0 : v.value) == null ? void 0 : se.wrapperRef, ae = (x = h == null ? void 0 : h.value[le]) != null ? x : Y == null ? void 0 : Y.ref;
    if (!me || !ae || me.scrollHeight === me.offsetHeight)
      return;
    const ce = Ki(ae, me), Se = me.scrollTop;
    ce.top < 0 ? me.scrollTo(0, Se + ce.top) : ce.bottom < 0 && me.scrollTo(0, Se - ce.bottom);
  };
  ve(c, (le) => {
    var se;
    if (le) {
      const x = p.value[p.value.length - 1];
      let Y = (se = B == null ? void 0 : B.value) == null || se ? y.value[0] : void 0;
      y.value.includes(x) && (Y = x), Y !== j.value && (j.value = Y), qe(() => {
        j.value && q(j.value);
      });
    }
  });
  const te = Ec(/* @__PURE__ */ new Map([[wn.ENTER, (le) => {
    !(u != null && u.value) && !le.isComposing && (c.value ? j.value && (C(j.value, le), le.preventDefault()) : L && (w(!0), le.preventDefault()));
  }], [wn.ESC, (le) => {
    c.value && (w(!1), le.preventDefault());
  }], [wn.ARROW_DOWN, (le) => {
    if (c.value) {
      const se = W("down");
      se && (j.value = se, q(se)), le.preventDefault();
    }
  }], [wn.ARROW_UP, (le) => {
    if (c.value) {
      const se = W("up");
      se && (j.value = se, q(se)), le.preventDefault();
    }
  }]]));
  return _t(br, Pe({
    multiple: e,
    valueKey: i,
    inputValue: o,
    filterOption: l,
    component: a,
    valueKeys: p,
    activeKey: j,
    setActiveKey: O,
    onSelect: C,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F
  })), {
    validOptions: E,
    optionInfoMap: g,
    validOptionInfos: k,
    enabledOptionKeys: y,
    activeKey: j,
    setActiveKey: O,
    addSlotOptionInfo: A,
    removeSlotOptionInfo: F,
    getNextActiveKey: W,
    scrollIntoView: q,
    handleKeyDown: te
  };
}, Pc = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: o,
  buffer: l
}) => {
  const r = m(0), a = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = m(0), u = d(() => {
    const b = s.value + l.value * 3;
    return b > i.value ? i.value : b;
  }), c = d(() => {
    const b = i.value - l.value * 3;
    return b < 0 ? 0 : b;
  }), p = (b) => {
    b < 0 ? s.value = 0 : b > c.value ? s.value = c.value : s.value = b;
  }, v = m(n.value), h = d(() => o.value !== 30 ? o.value : r.value || o.value), _ = (b, A) => {
    a.set(b, A);
  }, C = (b) => {
    var A;
    if (v.value)
      return h.value;
    const F = e.value[b];
    return (A = a.get(F)) != null ? A : h.value;
  }, w = (b) => a.has(b);
  Ae(() => {
    const b = Array.from(a.values()).reduce((A, F) => A + F, 0);
    b > 0 && (r.value = b / a.size);
  });
  const L = (b) => v.value ? h.value * b : B(0, b), B = (b, A) => {
    let F = 0;
    for (let j = b; j < A; j++)
      F += C(j);
    return F;
  }, E = d(() => v.value ? h.value * s.value : B(0, s.value)), g = (b) => {
    const A = b >= E.value;
    let F = Math.abs(b - E.value);
    const j = A ? s.value : s.value - 1;
    let O = 0;
    for (; F > 0; )
      F -= C(j + O), A ? O++ : O--;
    return O;
  }, k = (b) => {
    const A = g(b), F = s.value + A - l.value;
    return F < 0 ? 0 : F > c.value ? c.value : F;
  }, y = d(() => v.value ? h.value * (i.value - u.value) : B(u.value, i.value));
  return {
    frontPadding: E,
    behindPadding: y,
    start: s,
    end: u,
    getStartByScroll: k,
    setItemSize: _,
    hasItemSize: w,
    setStart: p,
    getScrollOffset: L
  };
};
var Bc = P({
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
    const o = (n = bt()) == null ? void 0 : n.vnode.key, l = m(), r = () => {
      var a, i, s, u;
      const c = (i = (a = l.value) == null ? void 0 : a.$el) != null ? i : l.value, p = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      p && e.setItemSize(o, p);
    };
    return Ae(() => r()), qt(() => r()), () => {
      var a;
      const i = At((a = t.default) == null ? void 0 : a.call(t));
      return i ? Fn(i, {
        ref: l
      }, !0) : null;
    };
  }
}), xc = Object.defineProperty, da = Object.getOwnPropertySymbols, Tc = Object.prototype.hasOwnProperty, Ic = Object.prototype.propertyIsEnumerable, fa = (e, t, n) => t in e ? xc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zc = (e, t) => {
  for (var n in t || (t = {}))
    Tc.call(t, n) && fa(e, n, t[n]);
  if (da)
    for (var n of da(t))
      Ic.call(t, n) && fa(e, n, t[n]);
  return e;
};
const Vc = P({
  name: "VirtualList",
  components: {
    VirtualListItem: Bc
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
    } = ye(e), s = U("virtual-list"), u = d(() => De(e.component) ? zc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = m(), p = m(), v = d(() => ({
      height: Ce(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((j, O) => {
      var W;
      return (W = j[o.value]) != null ? W : O;
    })), {
      frontPadding: _,
      behindPadding: C,
      start: w,
      end: L,
      getStartByScroll: B,
      setItemSize: E,
      hasItemSize: g,
      setStart: k,
      getScrollOffset: y
    } = Pc({
      dataKeys: h,
      contentRef: p,
      fixedSize: l,
      estimatedSize: r,
      buffer: a
    }), b = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(w.value, L.value)), A = (j) => {
      const {
        scrollTop: O,
        scrollHeight: W,
        offsetHeight: q
      } = j.target, te = B(O);
      te !== w.value && (k(te), qe(() => {
        F(O);
      })), t("scroll", j), Math.floor(W - (O + q)) <= 0 && t("reachBottom", j);
    }, F = (j) => {
      var O, W;
      if (c.value)
        if (Ce(j))
          c.value.scrollTop = j;
        else {
          const q = (W = j.index) != null ? W : h.value.indexOf((O = j.key) != null ? O : "");
          k(q - a.value), c.value.scrollTop = y(q), qe(() => {
            if (c.value) {
              const te = y(q);
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
      currentList: b,
      behindPadding: C,
      onScroll: A,
      setItemSize: E,
      hasItemSize: g,
      start: w,
      scrollTo: F,
      style: v,
      mergedComponent: u
    };
  }
});
function Nc(e, t, n, o, l, r) {
  const a = ee("VirtualListItem");
  return $(), J(Dt(e.mergedComponent.container), {
    ref: "containerRef",
    class: V(e.prefixCls),
    style: re(e.style),
    onScroll: e.onScroll
  }, {
    default: M(() => [($(), J(Dt(e.mergedComponent.list), ie(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: M(() => [($(), J(Dt(e.mergedComponent.content), ie({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: M(() => [($(!0), N(Oe, null, gt(e.currentList, (i, s) => {
          var u;
          return $(), J(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: M(() => [H(e.$slots, "item", {
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
var $r = /* @__PURE__ */ oe(Vc, [["render", Nc]]);
const Lc = P({
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
    const n = U("popover"), o = m(e.defaultPopupVisible), l = d(() => {
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
function Dc(e, t, n, o, l, r) {
  const a = ee("trigger");
  return $(), J(a, {
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
    content: M(() => [D("div", {
      class: V(`${e.prefixCls}-title`)
    }, [H(e.$slots, "title", {}, () => [ze(xe(e.title), 1)])], 2), D("div", {
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "content", {}, () => [ze(xe(e.content), 1)])], 2)]),
    default: M(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var ko = /* @__PURE__ */ oe(Lc, [["render", Dc]]);
const Ac = Object.assign(ko, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + ko.name, ko);
  }
});
var jc = Object.defineProperty, pa = Object.getOwnPropertySymbols, Fc = Object.prototype.hasOwnProperty, Mc = Object.prototype.propertyIsEnumerable, va = (e, t, n) => t in e ? jc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wo = (e, t) => {
  for (var n in t || (t = {}))
    Fc.call(t, n) && va(e, n, t[n]);
  if (pa)
    for (var n of pa(t))
      Mc.call(t, n) && va(e, n, t[n]);
  return e;
};
const Kc = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Rc = ["normal", "processing", "success", "warning", "danger"];
var So = P({
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
      validator: (e) => Rc.includes(e)
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
    } = ye(e), c = U("badge"), p = Hc(c, n == null ? void 0 : n.value, t == null ? void 0 : t.default), v = d(() => {
      const _ = wo({}, (l == null ? void 0 : l.value) || {}), [C, w] = (r == null ? void 0 : r.value) || [];
      C && (_.marginRight = `${-C}px`), w && (_.marginTop = `${w}px`);
      const L = !(o != null && o.value) || Kc.includes(o == null ? void 0 : o.value) ? {} : {
        backgroundColor: o.value
      };
      return {
        mergedStyle: wo(wo({}, L), _),
        computedDotStyle: _,
        computedColorStyle: L
      };
    }), h = () => {
      const _ = a == null ? void 0 : a.value, C = o == null ? void 0 : o.value, w = n == null ? void 0 : n.value, L = i == null ? void 0 : i.value, B = Number(u == null ? void 0 : u.value), E = (u == null ? void 0 : u.value) != null, {
        computedDotStyle: g,
        mergedStyle: k
      } = v.value;
      return t.content ? f("span", {
        class: `${c}-custom-dot`,
        style: g
      }, [t.content()]) : _ && !C && !w ? f("span", {
        class: `${c}-text`,
        style: g
      }, [_]) : w || C && !E ? f("span", {
        class: `${c}-status-wrapper`
      }, [f("span", {
        class: [`${c}-status-dot`, {
          [`${c}-status-${w}`]: w,
          [`${c}-color-${C}`]: C
        }],
        style: k
      }, null), _ && f("span", {
        class: `${c}-status-text`
      }, [_])]) : (L || C) && B > 0 ? f("span", {
        class: [`${c}-dot`, {
          [`${c}-color-${C}`]: C
        }],
        style: k
      }, null) : B === 0 ? null : f("span", {
        class: `${c}-number`,
        style: k
      }, [f("span", null, [s.value && B > s.value ? `${s.value}+` : B])]);
    };
    return () => f("span", {
      class: p.value
    }, [t.default && t.default(), h()]);
  }
});
const Hc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), Wc = Object.assign(So, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + So.name, So);
  }
}), qc = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Gc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Uc = /* @__PURE__ */ D("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Zc = /* @__PURE__ */ D("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"
}, null, -1), Yc = [Uc, Zc];
function Xc(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Yc, 14, Gc);
}
var Eo = /* @__PURE__ */ oe(qc, [["render", Xc]]);
const Jc = Object.assign(Eo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Eo.name, Eo);
  }
}), Qc = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ed = ["stroke-width", "stroke-linecap", "stroke-linejoin"], td = /* @__PURE__ */ D("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), nd = [td];
function od(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, nd, 14, ed);
}
var Oo = /* @__PURE__ */ oe(Qc, [["render", od]]);
const kr = Object.assign(Oo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Oo.name, Oo);
  }
}), Ol = Symbol("ArcoDropdown"), ld = P({
  name: "DropdownPanel",
  components: {
    Scrollbar: qn,
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
    const o = U("dropdown"), l = We(Ol, {}), r = m(), a = (u) => {
      const {
        scrollTop: c,
        scrollHeight: p,
        offsetHeight: v
      } = u.target;
      p - (c + v) <= e.bottomOffset && t("reachBottom", u), t("scroll", u);
    }, i = d(() => {
      if (Ce(l.popupMaxHeight))
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
function ad(e, t, n, o, l, r) {
  const a = ee("empty"), i = ee("Scrollbar");
  return $(), N("div", {
    class: V(e.cls)
  }, [e.isEmpty ? ($(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-empty`)
  }, [H(e.$slots, "empty", {}, () => [f(a)])], 2)) : pe("v-if", !0), f(i, {
    ref: "wrapperRef",
    class: V(`${e.prefixCls}-list-wrapper`),
    style: re(e.style),
    onScroll: e.handleScroll
  }, {
    default: M(() => [D("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [H(e.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class", "style", "onScroll"]), e.$slots.footer && !e.isEmpty ? ($(), N("div", {
    key: 1,
    class: V(`${e.prefixCls}-footer`)
  }, [H(e.$slots, "footer")], 2)) : pe("v-if", !0)], 2);
}
var wr = /* @__PURE__ */ oe(ld, [["render", ad]]);
const Un = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var o;
  const l = m((o = t == null ? void 0 : t.value) != null ? o : !1), r = d(() => {
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
}, rd = P({
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
    } = Un({
      defaultPopupVisible: n,
      popupVisible: o,
      emit: t
    });
    return _t(Ol, Pe({
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
function id(e, t, n, o, l, r) {
  const a = ee("DropdownPanel"), i = ee("Trigger");
  return $(), J(i, {
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
    content: M(() => [f(a, null, cn({
      default: M(() => [H(e.$slots, "content")]),
      _: 2
    }, [e.$slots.footer ? {
      name: "footer",
      fn: M(() => [H(e.$slots, "footer")])
    } : void 0]), 1024)]),
    default: M(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "popup-container", "opened-class", "onPopupVisibleChange"]);
}
var xn = /* @__PURE__ */ oe(rd, [["render", id]]);
const sd = P({
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
    const n = U("dropdown-option"), o = m(), l = d(() => {
      var s, u, c;
      return (c = (u = e.value) != null ? u : (s = o.value) == null ? void 0 : s.textContent) != null ? c : void 0;
    }), r = e.uninjectContext ? void 0 : We(Ol, void 0), a = (s) => {
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
function ud(e, t, n, o, l, r) {
  return $(), N("li", {
    ref: "liRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [e.$slots.icon ? ($(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), D("span", {
    class: V(`${e.prefixCls}-content`)
  }, [H(e.$slots, "default")], 2), e.$slots.suffix ? ($(), N("span", {
    key: 1,
    class: V(`${e.prefixCls}-suffix`)
  }, [H(e.$slots, "suffix")], 2)) : pe("v-if", !0)], 2);
}
var rn = /* @__PURE__ */ oe(sd, [["render", ud]]);
const cd = P({
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
function dd(e, t, n, o, l, r) {
  return $(), N(Oe, null, [D("li", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "title", {}, () => [ze(xe(e.title), 1)])], 2), H(e.$slots, "default")], 64);
}
var Po = /* @__PURE__ */ oe(cd, [["render", dd]]);
const fd = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), pd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vd = /* @__PURE__ */ D("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), hd = [vd];
function md(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, hd, 14, pd);
}
var Bo = /* @__PURE__ */ oe(fd, [["render", md]]);
const Sr = Object.assign(Bo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Bo.name, Bo);
  }
}), yd = P({
  name: "Dsubmenu",
  components: {
    Trigger: Ot,
    DropdownPanel: wr,
    DropdownOption: rn,
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
    } = Un({
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
function gd(e, t, n, o, l, r) {
  const a = ee("IconRight"), i = ee("dropdown-option"), s = ee("dropdown-panel"), u = ee("Trigger");
  return $(), J(u, {
    "popup-visible": e.computedPopupVisible,
    trigger: e.trigger,
    position: e.position,
    disabled: e.disabled,
    "popup-offset": 4,
    onPopupVisibleChange: e.handlePopupVisibleChange
  }, {
    content: M(() => [f(s, {
      class: V(`${e.prefixCls}-submenu`)
    }, cn({
      default: M(() => [H(e.$slots, "content")]),
      _: 2
    }, [e.$slots.footer ? {
      name: "footer",
      fn: M(() => [H(e.$slots, "footer")])
    } : void 0]), 1032, ["class"])]),
    default: M(() => [f(i, ie(e.optionProps, {
      active: e.computedPopupVisible,
      "uninject-context": ""
    }), cn({
      suffix: M(() => [H(e.$slots, "suffix", {}, () => [f(a)])]),
      default: M(() => [H(e.$slots, "default")]),
      _: 2
    }, [e.$slots.icon ? {
      name: "icon",
      fn: M(() => [H(e.$slots, "icon")])
    } : void 0]), 1040, ["active"])]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "disabled", "onPopupVisibleChange"]);
}
var xo = /* @__PURE__ */ oe(yd, [["render", gd]]);
const bd = P({
  name: "DropdownButton",
  components: {
    IconMore: Jc,
    Button: gn,
    ButtonGroup: On,
    Dropdown: xn
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
    } = Un({
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
function _d(e, t, n, o, l, r) {
  const a = ee("Button"), i = ee("IconMore"), s = ee("Dropdown"), u = ee("ButtonGroup");
  return $(), J(u, null, {
    default: M(() => [f(a, ie({
      size: e.size,
      type: e.type,
      disabled: e.disabled
    }, e.buttonProps, {
      onClick: e.handleClick
    }), {
      default: M(() => [H(e.$slots, "default")]),
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
      content: M(() => [H(e.$slots, "content")]),
      default: M(() => [f(a, {
        size: e.size,
        type: e.type,
        disabled: e.disabled
      }, {
        icon: M(() => [H(e.$slots, "icon", {
          popupVisible: e.computedPopupVisible
        }, () => [f(i)])]),
        _: 3
      }, 8, ["size", "type", "disabled"])]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "popup-container", "hide-on-select", "onSelect", "onPopupVisibleChange"])]),
    _: 3
  });
}
var To = /* @__PURE__ */ oe(bd, [["render", _d]]);
const Cd = Object.assign(xn, {
  Option: rn,
  Group: Po,
  Submenu: xo,
  Button: To,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + xn.name, xn), e.component(n + rn.name, rn), e.component(n + Po.name, Po), e.component(n + xo.name, xo), e.component(n + To.name, To);
  }
}), $d = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: o = "input",
  updateEventName: l = "update:modelValue",
  eventHandlers: r
}) => {
  var a;
  const i = m(), s = m((a = e == null ? void 0 : e.value) != null ? a : ""), u = m(!1), c = m(!1), p = m("");
  let v;
  const h = d(() => {
    var y;
    return (y = t == null ? void 0 : t.value) != null ? y : s.value;
  }), _ = (y, b) => {
    s.value = y, n(l, y), n(o, y, b);
  }, C = (y) => {
    const {
      value: b
    } = y.target;
    c.value || (_(b, y), qe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, w = (y) => {
    o === "input" && h.value !== v && (v = h.value, n("change", h.value, y));
  }, L = (y) => {
    var b;
    const {
      value: A
    } = y.target;
    y.type === "compositionend" ? (c.value = !1, p.value = "", _(A, y), qe(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (c.value = !0, p.value = h.value + ((b = y.data) != null ? b : ""));
  }, B = (y) => {
    var b, A;
    u.value = !0, v = h.value, n("focus", y), (A = (b = r == null ? void 0 : r.value) == null ? void 0 : b.onFocus) == null || A.call(b, y);
  }, E = (y) => {
    var b, A;
    u.value = !1, n("blur", y), (A = (b = r == null ? void 0 : r.value) == null ? void 0 : b.onBlur) == null || A.call(b, y), w(y);
  }, g = (y) => {
    const b = y.key || y.code;
    !c.value && b === $l.key && (n("pressEnter", y), w(y));
  }, k = (y) => {
    i.value && y.target !== i.value && (y.preventDefault(), i.value.focus());
  };
  return ve(h, (y) => {
    i.value && y !== i.value.value && (i.value.value = y);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: p,
    computedValue: h,
    handleInput: C,
    handleComposition: L,
    handleFocus: B,
    handleBlur: E,
    handleKeyDown: g,
    handleMousedown: k
  };
};
var kd = P({
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
    } = ft({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: C
    } = pt(p), {
      inputRef: w,
      _focused: L,
      computedValue: B,
      handleInput: E,
      handleComposition: g,
      handleFocus: k,
      handleBlur: y,
      handleMousedown: b
    } = $d({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: _
    }), A = d(() => {
      var x;
      return (x = e.focused) != null ? x : L.value;
    }), F = d(() => e.enabledInput && L.value || !e.modelValue), j = () => {
      var x, Y;
      return e.modelValue ? (Y = (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? Y : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? j() : e.placeholder), W = () => {
      var x, Y;
      return e.modelValue ? (Y = (x = o.default) == null ? void 0 : x.call(o, {
        data: e.modelValue
      })) != null ? Y : j() : null;
    }, q = d(() => [c, `${c}-size-${C.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: A.value,
      [`${c}-disabled`]: v.value,
      [`${c}-error`]: h.value
    }]), te = d(() => Gt(t, Ht)), le = d(() => kl(t, Ht));
    return {
      inputRef: w,
      render: () => f("span", ie(te.value, {
        class: q.value,
        title: j(),
        onMousedown: b
      }), [o.prefix && f("span", {
        class: `${c}-prefix`
      }, [o.prefix()]), f("input", ie(le.value, {
        ref: w,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !F.value
        }],
        value: B.value,
        readonly: !e.enabledInput,
        placeholder: O.value,
        disabled: v.value,
        onInput: E,
        onFocus: k,
        onBlur: y,
        onCompositionstart: g,
        onCompositionupdate: g,
        onCompositionend: g
      }), null), f("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: F.value
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
}), wd = Object.defineProperty, ha = Object.getOwnPropertySymbols, Sd = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, ma = (e, t, n) => t in e ? wd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Od = (e, t) => {
  for (var n in t || (t = {}))
    Sd.call(t, n) && ma(e, n, t[n]);
  if (ha)
    for (var n of ha(t))
      Ed.call(t, n) && ma(e, n, t[n]);
  return e;
};
const Pd = (e, t) => {
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
    else if (e || Ce(e)) {
      const l = {
        value: o,
        label: String(o),
        closable: !0
      };
      n.push(Od({
        raw: l
      }, l));
    }
  return n;
}, ya = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Bd = P({
  name: "Tag",
  components: {
    IconHover: Qe,
    IconClose: yn,
    IconLoading: ut
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
    } = ye(e), o = U("tag"), l = d(() => e.color && ya.includes(e.color)), r = d(() => e.color && !ya.includes(e.color)), a = m(e.defaultVisible), i = m(e.defaultChecked), s = d(() => {
      var w;
      return (w = e.visible) != null ? w : a.value;
    }), u = d(() => {
      var w;
      return e.checkable ? (w = e.checked) != null ? w : i.value : !0;
    }), {
      mergedSize: c
    } = pt(n), p = d(() => c.value === "mini" ? "small" : c.value), v = (w) => {
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
    }]), C = d(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: o,
      cls: _,
      style: C,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: v
    };
  }
});
function xd(e, t, n, o, l, r) {
  const a = ee("icon-close"), i = ee("icon-hover"), s = ee("icon-loading");
  return e.computedVisible ? ($(), N("span", {
    key: 0,
    class: V(e.cls),
    style: re(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? ($(), N("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [H(e.$slots, "icon")], 2)) : pe("v-if", !0), e.nowrap ? ($(), N("span", {
    key: 1,
    class: V(`${e.prefixCls}-text`)
  }, [H(e.$slots, "default")], 2)) : H(e.$slots, "default", {
    key: 2
  }), e.closable ? ($(), J(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleClose, ["stop"])
  }, {
    default: M(() => [H(e.$slots, "close-icon", {}, () => [f(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : pe("v-if", !0), e.loading ? ($(), N("span", {
    key: 4,
    class: V(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : pe("v-if", !0)], 6)) : pe("v-if", !0);
}
var Io = /* @__PURE__ */ oe(Bd, [["render", xd]]);
const Zn = Object.assign(Io, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Io.name, Io);
  }
});
var Td = Object.defineProperty, ga = Object.getOwnPropertySymbols, Id = Object.prototype.hasOwnProperty, zd = Object.prototype.propertyIsEnumerable, ba = (e, t, n) => t in e ? Td(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sn = (e, t) => {
  for (var n in t || (t = {}))
    Id.call(t, n) && ba(e, n, t[n]);
  if (ga)
    for (var n of ga(t))
      zd.call(t, n) && ba(e, n, t[n]);
  return e;
};
const Vd = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var zo = P({
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
    } = ye(e), u = e.baseCls || U("input-tag"), c = m(), p = m(), {
      mergedSize: v,
      mergedDisabled: h,
      mergedError: _,
      feedback: C,
      eventHandlers: w
    } = ft({
      size: l,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: L
    } = pt(v), B = d(() => Sn(Sn({}, Vd), e.fieldNames)), E = m(!1), g = m(e.defaultValue), k = m(e.defaultInputValue), y = m(!1), b = m(""), A = d(() => De(e.retainInputValue) ? Sn({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), F = Pe({
      width: "12px"
    }), j = d(() => e.focused || E.value), O = (T, G) => {
      k.value = T, t("update:inputValue", T), t("inputValueChange", T, G);
    }, W = (T) => {
      var G;
      const {
        value: fe
      } = T.target;
      T.type === "compositionend" ? (y.value = !1, b.value = "", O(fe, T), qe(() => {
        c.value && te.value !== c.value.value && (c.value.value = te.value);
      })) : (y.value = !0, b.value = te.value + ((G = T.data) != null ? G : ""));
    }, q = d(() => {
      var T;
      return (T = e.modelValue) != null ? T : g.value;
    }), te = d(() => {
      var T;
      return (T = e.inputValue) != null ? T : k.value;
    });
    ve(s, (T) => {
      (Ke(T) || hn(T)) && (g.value = []);
    });
    const le = (T) => {
      c.value && T.target !== c.value && (T.preventDefault(), c.value.focus());
    }, se = (T) => {
      const {
        value: G
      } = T.target;
      y.value || (O(G, T), qe(() => {
        c.value && te.value !== c.value.value && (c.value.value = te.value);
      }));
    }, x = d(() => Pd(q.value, B.value)), Y = d(() => {
      if (e.maxTagCount > 0) {
        const T = x.value.length - e.maxTagCount;
        if (T > 0) {
          const G = x.value.slice(0, e.maxTagCount), fe = {
            value: "__arco__more",
            label: `+${T}...`,
            closable: !1
          };
          return G.push(Sn({
            raw: fe
          }, fe)), G;
        }
      }
      return x.value;
    }), me = (T, G) => {
      var fe, we;
      g.value = T, t("update:modelValue", T), t("change", T, G), (we = (fe = w.value) == null ? void 0 : fe.onChange) == null || we.call(fe, G);
    }, ae = (T, G, fe) => {
      var we;
      const Ee = (we = q.value) == null ? void 0 : we.filter((Je, Ve) => Ve !== G);
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
        me(fe, T), t("pressEnter", te.value, T), A.value.create || O("", T);
      }
    }, ge = (T) => {
      var G, fe;
      E.value = !0, t("focus", T), (fe = (G = w.value) == null ? void 0 : G.onFocus) == null || fe.call(G, T);
    }, de = (T) => {
      var G, fe;
      E.value = !1, !A.value.blur && te.value && O("", T), t("blur", T), (fe = (G = w.value) == null ? void 0 : G.onBlur) == null || fe.call(G, T);
    }, ke = () => {
      for (let T = x.value.length - 1; T >= 0; T--)
        if (x.value[T].closable)
          return T;
      return -1;
    }, tt = (T) => {
      if (h.value || e.readonly)
        return;
      const G = T.key || T.code;
      if (!y.value && te.value && G === $l.key && be(T), !y.value && Y.value.length > 0 && !te.value && G === ws.key) {
        const fe = ke();
        fe >= 0 && ae(x.value[fe].value, fe, T);
      }
    }, Te = (T) => {
      T > 12 ? F.width = `${T}px` : F.width = "12px";
    };
    Ae(() => {
      p.value && Te(p.value.offsetWidth);
    });
    const Me = () => {
      p.value && Te(p.value.offsetWidth);
    };
    ve(te, (T) => {
      c.value && !y.value && T !== c.value.value && (c.value.value = T);
    });
    const He = d(() => [u, `${u}-size-${L.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: _.value,
      [`${u}-focus`]: j.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: Y.value.length > 0,
      [`${u}-has-prefix`]: !!n.prefix,
      [`${u}-has-suffix`]: !!n.suffix || Se.value || C.value,
      [`${u}-has-placeholder`]: !q.value.length
    }]), Ne = d(() => Gt(o, Ht)), Ye = d(() => kl(o, Ht));
    return {
      inputRef: c,
      render: () => {
        var T;
        return f("span", ie({
          class: He.value,
          onMousedown: le
        }, Ne.value), [f(dn, {
          onResize: Me
        }, {
          default: () => [f("span", {
            ref: p,
            class: `${u}-mirror`
          }, [Y.value.length > 0 ? b.value || te.value : b.value || te.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), f(ni, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [Y.value.map((G, fe) => f(Zn, ie({
            key: `tag-${G.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && G.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, G.tagProps, {
            onClose: (we) => ae(G.value, fe, we)
          }), {
            default: () => {
              var we, Ee, Je, Ve;
              return [(Ve = (Je = (we = n.tag) == null ? void 0 : we.call(n, {
                data: G.raw
              })) != null ? Je : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, G.raw)) != null ? Ve : G.label];
            }
          })), f("input", ie(Ye.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: F,
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
        }), (n.suffix || !!C.value) && f("span", {
          class: `${u}-suffix`
        }, [(T = n.suffix) == null ? void 0 : T.call(n), !!C.value && f(Cl, {
          type: C.value
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
const Nd = Object.assign(zo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + zo.name, zo);
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
    } = ft({
      size: o,
      disabled: l,
      error: r
    }), {
      mergedSize: v
    } = pt(c), {
      opened: h
    } = ye(e), _ = m(), C = d(() => {
      var O;
      return (O = _.value) == null ? void 0 : O.inputRef;
    }), w = d(() => e.modelValue.length === 0), L = d(() => e.allowSearch || e.allowCreate), B = d(() => e.allowClear && !e.disabled && !w.value), E = (O) => {
      var W, q;
      t("focus", O), (q = (W = s.value) == null ? void 0 : W.onFocus) == null || q.call(W, O);
    }, g = (O) => {
      var W, q;
      t("blur", O), (q = (W = s.value) == null ? void 0 : W.onBlur) == null || q.call(W, O);
    }, k = (O) => {
      t("remove", O);
    }, y = (O) => {
      t("clear", O);
    }, b = () => {
      var O, W, q, te;
      return e.loading ? (W = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? W : f(ut, null, null) : e.allowSearch && e.opened ? (te = (q = n["search-icon"]) == null ? void 0 : q.call(n)) != null ? te : f(al, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(kr, {
        class: `${a}-arrow-icon`
      }, null);
    }, A = () => f(Oe, null, [B.value && f(Qe, {
      class: `${a}-clear-btn`,
      onClick: y,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [f(yn, null, null)]
    }), f("span", {
      class: `${a}-icon`
    }, [b()]), !!i.value && f(Cl, {
      type: i.value
    }, null)]);
    ve(h, (O) => {
      !O && C.value && C.value.isSameNode(document.activeElement) && C.value.blur();
    });
    const F = d(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: C,
      handleFocus: E,
      handleBlur: g,
      render: () => e.multiple ? f(Nd, {
        ref: _,
        baseCls: a,
        class: F.value,
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
        onBlur: g
      }, {
        prefix: n.prefix,
        suffix: A,
        tag: n.label
      }) : f(kd, {
        ref: _,
        baseCls: a,
        class: F.value,
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
        onBlur: g
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
const Ld = P({
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
function Dd(e, t, n, o, l, r) {
  return $(), N(Oe, null, [D("li", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "label", {}, () => [ze(xe(e.label), 1)])], 2), H(e.$slots, "default")], 64);
}
var Tn = /* @__PURE__ */ oe(Ld, [["render", Dd]]);
const Ca = typeof window > "u" ? global : window;
function Ad(e, t) {
  let n = 0;
  return (...o) => {
    n && Ca.clearTimeout(n), n = Ca.setTimeout(() => {
      n = 0, e(...o);
    }, t);
  };
}
var jd = Object.defineProperty, Fd = Object.defineProperties, Md = Object.getOwnPropertyDescriptors, $a = Object.getOwnPropertySymbols, Kd = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, ka = (e, t, n) => t in e ? jd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qt = (e, t) => {
  for (var n in t || (t = {}))
    Kd.call(t, n) && ka(e, n, t[n]);
  if ($a)
    for (var n of $a(t))
      Rd.call(t, n) && ka(e, n, t[n]);
  return e;
}, Hd = (e, t) => Fd(e, Md(t));
function Wd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pl(e);
}
const qd = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var Vo = P({
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
      fieldNames: C,
      loading: w,
      defaultActiveFirstOption: L
    } = ye(e), B = U("select"), {
      mergedSize: E,
      mergedDisabled: g,
      mergedError: k,
      eventHandlers: y
    } = ft({
      size: l,
      disabled: r,
      error: a
    }), b = d(() => e.virtualListProps ? "div" : "li"), A = d(() => De(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (Ue(e.formatLabel))
        return (I) => {
          const S = Ee.get(I.value);
          return e.formatLabel(S);
        };
    });
    const F = m(), j = m({}), O = m(), {
      computedPopupVisible: W,
      handlePopupVisibleChange: q
    } = Un({
      popupVisible: p,
      defaultPopupVisible: v,
      emit: n
    }), te = m(e.defaultValue), le = d(() => {
      var I;
      const S = (I = e.modelValue) != null ? I : te.value;
      return (Re(S) ? S : S || Ce(S) || xt(S) || Kt(S) ? [S] : []).map((ne) => ({
        value: ne,
        key: fn(ne, e.valueKey)
      }));
    });
    ve(_, (I) => {
      (Ke(I) || hn(I)) && (te.value = c.value ? [] : I);
    });
    const se = d(() => le.value.map((I) => I.key)), x = d(() => Qt(Qt({}, qd), C == null ? void 0 : C.value)), Y = m(), me = (I) => {
      const S = {};
      return I.forEach((z) => {
        S[z] = Ee.get(z);
      }), S;
    }, ae = (I) => {
      Y.value = me(I);
    }, ce = (I) => Ue(e.fallbackOption) ? e.fallbackOption(I) : {
      [x.value.value]: I,
      [x.value.label]: String(De(I) ? I[u == null ? void 0 : u.value] : I)
    }, Se = () => {
      const I = [], S = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const z of le.value)
          if (!S.includes(z.key) && z.value !== "") {
            const ne = Ee.get(z.key);
            (!ne || ne.origin === "extraOptions") && (I.push(z), S.push(z.key));
          }
      }
      if (e.allowCreate && ke.value) {
        const z = fn(ke.value);
        if (!S.includes(z)) {
          const ne = Ee.get(z);
          (!ne || ne.origin === "extraOptions") && I.push({
            value: ke.value,
            key: z
          });
        }
      }
      return I;
    }, be = m([]), ge = d(() => be.value.map((I) => {
      var S;
      let z = ce(I.value);
      const ne = (S = Y.value) == null ? void 0 : S[I.key];
      return !Ke(ne) && !si(ne) && (z = Qt(Qt({}, z), ne)), z;
    }));
    qe(() => {
      Kn(() => {
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
    const de = m(""), ke = d(() => {
      var I;
      return (I = e.inputValue) != null ? I : de.value;
    });
    ve(W, (I) => {
      !I && !A.value && ke.value && Me("");
    });
    const tt = (I) => {
      var S, z;
      return e.multiple ? I.map((ne) => {
        var Ze, Ge;
        return (Ge = (Ze = Ee.get(ne)) == null ? void 0 : Ze.value) != null ? Ge : "";
      }) : (z = (S = Ee.get(I[0])) == null ? void 0 : S.value) != null ? z : fc(Ee) ? void 0 : "";
    }, Te = (I) => {
      var S, z;
      const ne = tt(I);
      te.value = ne, n("update:modelValue", ne), n("change", ne), (z = (S = y.value) == null ? void 0 : S.onChange) == null || z.call(S), ae(I);
    }, Me = (I) => {
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
        A.value || Me("");
      } else {
        if (I !== se.value[0] && Te([I]), A.value) {
          const z = Ee.get(I);
          z && Me(z.label);
        }
        q(!1);
      }
    }, Ne = Ad((I) => {
      n("search", I);
    }, e.searchDelay), Ye = (I) => {
      I !== ke.value && (W.value || q(!0), Me(I), e.allowSearch && Ne(I));
    }, Z = (I) => {
      const S = Ee.get(I), z = se.value.filter((ne) => ne !== I);
      Te(z), n("remove", S == null ? void 0 : S.value);
    }, T = (I) => {
      I == null || I.stopPropagation();
      const S = se.value.filter((z) => {
        var ne;
        return (ne = Ee.get(z)) == null ? void 0 : ne.disabled;
      });
      Te(S), Me(""), n("clear", I);
    }, G = (I) => {
      n("dropdownScroll", I);
    }, fe = (I) => {
      n("dropdownReachBottom", I);
    }, {
      validOptions: we,
      optionInfoMap: Ee,
      validOptionInfos: Je,
      enabledOptionKeys: Ve,
      handleKeyDown: $t
    } = Oc({
      multiple: c,
      options: i,
      extraOptions: ge,
      inputValue: ke,
      filterOption: s,
      showExtraOptions: h,
      component: b,
      valueKey: u,
      fieldNames: C,
      loading: w,
      popupVisible: W,
      valueKeys: se,
      dropdownRef: F,
      optionRefs: j,
      virtualListRef: O,
      defaultActiveFirstOption: L,
      onSelect: He,
      onPopupVisibleChange: q
    }), Xt = d(() => {
      var I;
      const S = [];
      for (const z of le.value) {
        const ne = Ee.get(z.key);
        ne && S.push(Hd(Qt({}, ne), {
          value: z.key,
          label: (I = ne == null ? void 0 : ne.label) != null ? I : String(De(z.value) ? z.value[u == null ? void 0 : u.value] : z.value),
          closable: !(ne != null && ne.disabled),
          tagProps: ne == null ? void 0 : ne.tagProps
        }));
      }
      return S;
    }), kt = (I) => {
      if (Ue(t.option)) {
        const S = t.option;
        return () => S({
          data: I.raw
        });
      }
      return Ue(I.render) ? I.render : () => I.label;
    }, lt = (I) => {
      if (Cr(I)) {
        let S;
        return f(Tn, {
          key: I.key,
          label: I.label
        }, Wd(S = I.options.map((z) => lt(z))) ? S : {
          default: () => [S]
        });
      }
      return Gn(I, {
        inputValue: ke.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(Bn, {
        ref: (S) => {
          S != null && S.$el && (j.value[I.key] = S.$el);
        },
        key: I.key,
        value: I.value,
        label: I.label,
        disabled: I.disabled,
        internal: !0
      }, {
        default: kt(I)
      }) : null;
    }, It = () => f(lc, {
      ref: F,
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
        return [...(S = (I = t.default) == null ? void 0 : I.call(t)) != null ? S : [], ...we.value.map(lt)];
      },
      "virtual-list": () => f($r, ie(e.virtualListProps, {
        ref: O,
        data: we.value
      }), {
        item: ({
          item: I
        }) => lt(I)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), Jt = ({
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
      disabled: g.value,
      popupVisible: W.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: q
    }, e.triggerProps), {
      default: () => {
        var I, S;
        return [(S = (I = t.trigger) == null ? void 0 : I.call(t)) != null ? S : f(_a, ie({
          class: B,
          modelValue: Xt.value,
          inputValue: ke.value,
          multiple: e.multiple,
          disabled: g.value,
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
          label: Jt,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: It
    });
  }
});
const Gd = Object.assign(Vo, {
  Option: Bn,
  OptGroup: Tn,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Vo.name, Vo), e.component(n + Bn.name, Bn), e.component(n + Tn.name, Tn);
  }
}), Ud = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Zd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yd = /* @__PURE__ */ D("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), Xd = [Yd];
function Jd(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Xd, 14, Zd);
}
var No = /* @__PURE__ */ oe(Ud, [["render", Jd]]);
const Qd = Object.assign(No, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + No.name, No);
  }
}), ef = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), tf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], nf = /* @__PURE__ */ D("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), of = [nf];
function lf(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, of, 14, tf);
}
var Lo = /* @__PURE__ */ oe(ef, [["render", lf]]);
const af = Object.assign(Lo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Lo.name, Lo);
  }
}), rf = (e) => {
  const t = {}, n = m([]), o = () => {
    if (t.value) {
      const l = ur(t.value, e);
      (l.length !== n.value.length || l.toString() !== n.value.toString()) && (n.value = l);
    }
  };
  return Ae(() => o()), dt(() => o()), {
    children: t,
    components: n
  };
}, Er = Symbol("collapseCtx"), sf = P({
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
    } = ye(e), a = U("collapse"), i = m(e.defaultActiveKey), s = d(() => {
      var p;
      const v = (p = e.activeKey) != null ? p : i.value;
      return Re(v) ? v : [v];
    });
    _t(Er, Pe({
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
function uf(e, t, n, o, l, r) {
  return $(), N("div", {
    class: V(e.cls)
  }, [H(e.$slots, "default")], 2);
}
var Do = /* @__PURE__ */ oe(sf, [["render", uf]]);
const cf = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), df = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ff = /* @__PURE__ */ D("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), pf = [ff];
function vf(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, pf, 14, df);
}
var Ao = /* @__PURE__ */ oe(cf, [["render", vf]]);
const hf = Object.assign(Ao, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Ao.name, Ao);
  }
}), mf = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), yf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gf = /* @__PURE__ */ D("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), bf = [gf];
function _f(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, bf, 14, yf);
}
var jo = /* @__PURE__ */ oe(mf, [["render", _f]]);
const Cf = Object.assign(jo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + jo.name, jo);
  }
});
var Et = P({
  name: "CollapseItem",
  components: {
    IconHover: Qe,
    IconCaretRight: hf,
    IconCaretLeft: Cf
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
    const o = bt(), l = U("collapse-item"), r = We(Er, {}), a = o && Ce(o == null ? void 0 : o.vnode.key) ? o.vnode.key : String((n = o == null ? void 0 : o.vnode.key) != null ? n : ""), i = d(() => {
      var g;
      return (g = r.activeKeys) == null ? void 0 : g.includes(a);
    }), s = d(() => r.destroyOnHide || e.destroyOnHide), u = d(() => {
      var g;
      return (g = r == null ? void 0 : r.showExpandIcon) != null ? g : e.showExpandIcon;
    }), c = m(s.value ? i.value : !0), p = d(() => {
      var g;
      return (g = r == null ? void 0 : r.expandIconPosition) != null ? g : "left";
    }), v = (g) => {
      var k;
      e.disabled || (k = r.handleClick) == null || k.call(r, a, g);
    };
    ve(i, (g) => {
      g && !c.value && (c.value = !0);
    });
    const h = {
      onEnter: (g) => {
        g.style.height = `${g.scrollHeight}px`;
      },
      onAfterEnter: (g) => {
        g.style.height = "auto";
      },
      onBeforeLeave: (g) => {
        g.style.height = `${g.scrollHeight}px`;
      },
      onLeave: (g) => {
        g.style.height = "0";
      },
      onAfterLeave: () => {
        s.value && (c.value = !1);
      }
    }, _ = d(() => [l, {
      [`${l}-active`]: i.value
    }]), C = d(() => [`${l}-header`, `${l}-header-${r == null ? void 0 : r.expandIconPosition}`, {
      [`${l}-header-disabled`]: e.disabled
    }]), w = d(() => [{
      [`${l}-icon-right`]: (r == null ? void 0 : r.expandIconPosition) === "right"
    }]), L = d(() => [`${l}-content`, {
      [`${l}-content-expend`]: i.value
    }]), B = () => p.value === "right" ? f(ee("icon-caret-left"), {
      class: `${l}-expand-icon`
    }, null) : f(ee("icon-caret-right"), {
      class: `${l}-expand-icon`
    }, null), E = () => u.value && f(ee("icon-hover"), {
      prefix: l,
      class: w.value,
      disabled: e.disabled
    }, {
      default: () => {
        var g, k, y, b;
        return [(b = (y = (k = t["expand-icon"]) != null ? k : (g = r == null ? void 0 : r.slots) == null ? void 0 : g["expand-icon"]) == null ? void 0 : y({
          active: i.value,
          disabled: e.disabled,
          position: p.value
        })) != null ? b : B()];
      }
    });
    return () => {
      var g, k, y;
      return f("div", {
        class: _.value
      }, [f("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: C.value,
        onClick: v
      }, [E(), f("div", {
        class: `${l}-header-title`
      }, [(k = (g = t.header) == null ? void 0 : g.call(t)) != null ? k : e.header]), t.extra && f("div", {
        class: `${l}-header-extra`
      }, [(y = t.extra) == null ? void 0 : y.call(t)])]), f(Mn, ie({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var b;
          return [mt(f("div", {
            role: "region",
            class: L.value
          }, [c.value && f("div", {
            ref: "contentBoxRef",
            class: `${l}-content-box`
          }, [(b = t.default) == null ? void 0 : b.call(t)])]), [[yt, i.value]])];
        }
      })]);
    };
  }
});
const $f = Object.assign(Do, {
  Item: Et,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Do.name, Do), e.component(n + Et.name, Et);
  }
}), kf = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), wf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Sf = /* @__PURE__ */ D("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), Ef = [Sf];
function Of(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Ef, 14, wf);
}
var Fo = /* @__PURE__ */ oe(kf, [["render", Of]]);
const Pf = Object.assign(Fo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Fo.name, Fo);
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
}), Bf = Object.defineProperty, wa = Object.getOwnPropertySymbols, xf = Object.prototype.hasOwnProperty, Tf = Object.prototype.propertyIsEnumerable, Sa = (e, t, n) => t in e ? Bf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ea = (e, t) => {
  for (var n in t || (t = {}))
    xf.call(t, n) && Sa(e, n, t[n]);
  if (wa)
    for (var n of wa(t))
      Tf.call(t, n) && Sa(e, n, t[n]);
  return e;
};
const If = P({
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
    const n = U("tooltip"), o = m(e.defaultPopupVisible), l = d(() => {
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
function zf(e, t, n, o, l, r) {
  const a = ee("Trigger");
  return $(), J(a, {
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
    content: M(() => [H(e.$slots, "content", {}, () => [ze(xe(e.content), 1)])]),
    default: M(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Mo = /* @__PURE__ */ oe(If, [["render", zf]]);
const bn = Object.assign(Mo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Mo.name, Mo);
  }
}), Vf = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Nf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Lf = /* @__PURE__ */ D("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Df = /* @__PURE__ */ D("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), Af = [Lf, Df];
function jf(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Af, 14, Nf);
}
var Ko = /* @__PURE__ */ oe(Vf, [["render", jf]]);
const Ff = Object.assign(Ko, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Ko.name, Ko);
  }
}), Mf = P({
  name: "Popconfirm",
  components: {
    ArcoButton: gn,
    Trigger: Ot,
    IconInfoCircleFill: ts,
    IconCheckCircleFill: _l,
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
    } = vl(), l = m(e.defaultPopupVisible), r = d(() => {
      var C;
      return (C = e.popupVisible) != null ? C : l.value;
    }), a = m(!1), i = d(() => e.okLoading || a.value);
    let s = 0;
    const u = () => {
      s++, a.value && (a.value = !1), l.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, c = (C) => {
      C ? (l.value = C, t("update:popupVisible", C), t("popupVisibleChange", C)) : u();
    }, p = async () => {
      const C = s, w = await new Promise(async (L) => {
        var B;
        if (Ue(e.onBeforeOk)) {
          let E = e.onBeforeOk((g = !0) => L(g));
          if ((Ll(E) || !Kt(E)) && (a.value = !0), Ll(E))
            try {
              E = (B = await E) != null ? B : !0;
            } catch {
              E = !1;
            }
          Kt(E) && L(E);
        } else
          L(!0);
      });
      C === s && (w ? (t("ok"), u()) : a.value && (a.value = !1));
    }, v = () => {
      var C;
      let w = !0;
      Ue(e.onBeforeCancel) && (w = (C = e.onBeforeCancel()) != null ? C : !1), w && (t("cancel"), u());
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
function Kf(e, t, n, o, l, r) {
  const a = ee("icon-info-circle-fill"), i = ee("icon-check-circle-fill"), s = ee("icon-exclamation-circle-fill"), u = ee("icon-close-circle-fill"), c = ee("arco-button"), p = ee("trigger");
  return $(), J(p, {
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
    content: M(() => [D("div", {
      class: V(`${e.prefixCls}-body`)
    }, [D("span", {
      class: V(`${e.prefixCls}-icon`)
    }, [H(e.$slots, "icon", {}, () => [e.type === "info" ? ($(), J(a, {
      key: 0
    })) : e.type === "success" ? ($(), J(i, {
      key: 1
    })) : e.type === "warning" ? ($(), J(s, {
      key: 2
    })) : e.type === "error" ? ($(), J(u, {
      key: 3
    })) : pe("v-if", !0)])], 2), D("span", {
      class: V(`${e.prefixCls}-content`)
    }, [H(e.$slots, "content", {}, () => [ze(xe(e.content), 1)])], 2)], 2), D("div", {
      class: V(`${e.prefixCls}-footer`)
    }, [f(c, ie({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: M(() => [ze(xe(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(c, ie({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: M(() => [ze(xe(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: M(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var Ro = /* @__PURE__ */ oe(Mf, [["render", Kf]]);
const Pr = Object.assign(Ro, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Ro.name, Ro);
  }
});
var Ho = P({
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
      const s = {}, u = `${r(Re(e.size) ? e.size[0] : e.size)}px`, c = `${r(Re(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var i;
      const s = En((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== oi);
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
const Rf = Object.assign(Ho, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Ho.name, Ho);
  }
}), Hf = P({
  name: "Switch",
  components: {
    IconLoading: ut
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
    } = pt(o), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = ft({
      disabled: n,
      size: a
    }), c = m(e.defaultChecked ? e.checkedValue : e.uncheckedValue), p = d(() => {
      var g;
      return ((g = e.modelValue) != null ? g : c.value) === e.checkedValue;
    }), v = m(!1), h = d(() => v.value || e.loading), _ = (g, k) => {
      var y, b;
      c.value = g ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, k), (b = (y = u.value) == null ? void 0 : y.onChange) == null || b.call(y, k);
    }, C = async (g) => {
      if (h.value || i.value)
        return;
      const k = !p.value, y = k ? e.checkedValue : e.uncheckedValue, b = e.beforeChange;
      if (Ue(b)) {
        v.value = !0;
        try {
          const A = await b(y);
          (A ?? !0) && _(k, g);
        } finally {
          v.value = !1;
        }
      } else
        _(k, g);
    }, w = (g) => {
      var k, y;
      t("focus", g), (y = (k = u.value) == null ? void 0 : k.onFocus) == null || y.call(k, g);
    }, L = (g) => {
      var k, y;
      t("blur", g), (y = (k = u.value) == null ? void 0 : k.onBlur) == null || y.call(k, g);
    };
    ve(l, (g) => {
      (Ke(g) || hn(g)) && (c.value = e.uncheckedValue);
    });
    const B = d(() => [r, `${r}-type-${e.type}`, {
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
      cls: B,
      mergedDisabled: i,
      buttonStyle: E,
      computedCheck: p,
      computedLoading: h,
      handleClick: C,
      handleFocus: w,
      handleBlur: L
    };
  }
}), Wf = ["aria-checked", "disabled"];
function qf(e, t, n, o, l, r) {
  const a = ee("icon-loading");
  return $(), N("button", {
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
  }, [e.computedLoading ? ($(), J(a, {
    key: 0
  })) : ($(), N(Oe, {
    key: 1
  }, [e.computedCheck ? H(e.$slots, "checked-icon", {
    key: 0
  }) : H(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), pe("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? ($(), N(Oe, {
    key: 0
  }, [D("span", {
    class: V(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? H(e.$slots, "checked", {
    key: 0
  }, () => [ze(xe(e.checkedText), 1)]) : H(e.$slots, "unchecked", {
    key: 1
  }, () => [ze(xe(e.uncheckedText), 1)])], 2), D("span", {
    class: V(`${e.prefixCls}-text`)
  }, [e.computedCheck ? H(e.$slots, "checked", {
    key: 0
  }, () => [ze(xe(e.checkedText), 1)]) : H(e.$slots, "unchecked", {
    key: 1
  }, () => [ze(xe(e.uncheckedText), 1)])], 2)], 64)) : pe("v-if", !0)], 46, Wf);
}
var Wo = /* @__PURE__ */ oe(Hf, [["render", qf]]);
const Gf = Object.assign(Wo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Wo.name, Wo);
  }
}), Uf = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Zf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Yf = /* @__PURE__ */ D("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Xf = [Yf];
function Jf(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, Xf, 14, Zf);
}
var qo = /* @__PURE__ */ oe(Uf, [["render", Jf]]);
const Qf = Object.assign(qo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + qo.name, qo);
  }
}), ep = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, Pl = Symbol("ArcoTabs"), tp = P({
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
    const n = U("tabs-tab"), o = We(Pl, {}), l = (u) => {
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
function np(e, t, n, o, l, r) {
  const a = ee("icon-close"), i = ee("icon-hover");
  return $(), N("div", ie({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [D("span", {
    class: V(`${e.prefixCls}-title`)
  }, [H(e.$slots, "default")], 2), e.editable && e.tab.closable ? ($(), J(i, {
    key: 0,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleDelete, ["stop"])
  }, {
    default: M(() => [f(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : pe("v-if", !0)], 16);
}
var op = /* @__PURE__ */ oe(tp, [["render", np]]);
function lp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pl(e);
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
    }, l = () => e.direction === "horizontal" ? e.type === "next" ? f(Sr, null, null) : f(Qd, null, null) : e.type === "next" ? f(kr, null, null) : f(af, null, null), r = d(() => [n, {
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
      }, lp(a = l()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const ap = P({
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
    } = ye(e), n = U("tabs-nav-ink"), o = m(0), l = m(0), r = d(() => e.direction === "vertical" ? {
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
function rp(e, t, n, o, l, r) {
  return $(), N("div", {
    class: V(e.cls),
    style: re(e.style)
  }, null, 6);
}
var ip = /* @__PURE__ */ oe(ap, [["render", rp]]), sp = P({
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
    } = ye(e), i = U("tabs-nav"), s = m(), u = m(), c = m({}), p = d(() => {
      if (!Ke(l.value))
        return c.value[l.value];
    }), v = m(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), _ = m(!1), C = m(0), w = m(0), L = m([]), B = m(0), E = () => {
      var ae, ce, Se;
      return (Se = a.value === "vertical" ? (ae = s.value) == null ? void 0 : ae.offsetHeight : (ce = s.value) == null ? void 0 : ce.offsetWidth) != null ? Se : 0;
    }, g = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, k = () => o.value.map((ae) => {
      const ce = c.value[ae.key];
      return a.value === "vertical" ? ce.offsetTop + ce.offsetHeight : ce.offsetLeft + ce.offsetWidth;
    }), y = () => {
      _.value = b(), _.value ? (C.value = E(), w.value = g(), L.value = k(), B.value > w.value && (B.value = w.value)) : B.value = 0;
    }, b = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, A = (ae) => {
      var ce;
      return ((ce = L.value[ae - 1]) != null ? ce : 0) >= B.value && L.value[ae] <= B.value + C.value;
    }, F = (ae) => s.value ? ae === "previous" ? B.value - C.value : B.value + C.value : 0, j = (ae) => !s.value || !u.value || ae < 0 ? 0 : ae > w.value ? w.value : ae, O = (ae, ce) => {
      t("click", ae, ce);
    }, W = (ae, ce) => {
      t("delete", ae, ce);
    }, q = (ae) => {
      B.value = j(F(ae));
    }, te = () => {
      y(), v.value && v.value.$forceUpdate();
    };
    ve(o, () => {
      qe(() => {
        y();
      });
    }), ve(r, (ae, ce) => {
      qe(() => {
        var Se;
        if (_.value)
          if (ae >= ce) {
            const be = ae < L.value.length - 1 ? ae + 1 : ae;
            A(be) || (B.value = L.value[be] - C.value);
          } else {
            const be = ae > 0 ? ae - 1 : ae;
            A(be) || (B.value = (Se = L.value[be - 1]) != null ? Se : 0);
          }
      });
    }), Ae(() => {
      y();
    });
    const le = () => !h.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (ae) => t("add", ae)
    }, [f(Qe, null, {
      default: () => [f(Pf, null, null)]
    })]), se = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), x = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), Y = d(() => ep({
      direction: e.direction,
      type: e.type,
      offset: B.value
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
        disabled: B.value <= 0,
        onClick: q
      }, null), f(dn, {
        onResize: () => y()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(dn, {
          onResize: te
        }, {
          default: () => [f("div", {
            ref: u,
            class: x.value,
            style: Y.value
          }, [e.tabs.map((ce, Se) => f(op, {
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
          })), e.type === "line" && p.value && f(ip, {
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
        disabled: B.value >= w.value,
        onClick: q
      }, null), f("div", {
        class: `${i}-extra`
      }, [_.value && le(), (ae = n.extra) == null ? void 0 : ae.call(n)])]);
    };
  }
}), Go = P({
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
    } = pt(o), u = d(() => e.direction === "vertical" ? "left" : e.position), c = d(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: p,
      components: v
    } = rf("TabPane"), h = Pe(/* @__PURE__ */ new Map()), _ = d(() => {
      const O = [];
      return v.value.forEach((W) => {
        const q = h.get(W);
        q && O.push(q);
      }), O;
    }), C = d(() => _.value.map((O) => O.key)), w = (O, W) => {
      h.set(O, W);
    }, L = (O) => {
      h.delete(O);
    }, B = m(e.defaultActiveKey), E = d(() => {
      var O;
      const W = (O = e.activeKey) != null ? O : B.value;
      return Ke(W) ? C.value[0] : W;
    }), g = d(() => {
      const O = C.value.indexOf(E.value);
      return O === -1 ? 0 : O;
    });
    _t(Pl, Pe({
      lazyLoad: l,
      destroyOnHide: r,
      activeKey: E,
      addItem: w,
      removeItem: L,
      trigger: a
    }));
    const k = (O) => {
      O !== E.value && (B.value = O, t("update:activeKey", O), t("change", O));
    }, y = (O, W) => {
      k(O), t("tabClick", O, W);
    }, b = (O) => {
      t("add", O), e.autoSwitch && qe(() => {
        const W = C.value[C.value.length - 1];
        k(W);
      });
    }, A = (O, W) => {
      t("delete", O, W);
    }, F = () => f("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [f("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${g.value * 100}%`
      }
    }, [p.value])]), j = d(() => [i, `${i}-${c.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return p.value = (O = n.default) == null ? void 0 : O.call(n), f("div", {
        class: j.value
      }, [u.value === "bottom" && F(), f(sp, {
        tabs: _.value,
        activeKey: E.value,
        activeIndex: g.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: y,
        onAdd: b,
        onDelete: A
      }, {
        extra: n.extra
      }), u.value !== "bottom" && F()]);
    };
  }
}), up = Object.defineProperty, Pa = Object.getOwnPropertySymbols, cp = Object.prototype.hasOwnProperty, dp = Object.prototype.propertyIsEnumerable, Ba = (e, t, n) => t in e ? up(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fp = (e, t) => {
  for (var n in t || (t = {}))
    cp.call(t, n) && Ba(e, n, t[n]);
  if (Pa)
    for (var n of Pa(t))
      dp.call(t, n) && Ba(e, n, t[n]);
  return e;
};
const pp = P({
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
    } = ye(e), a = bt(), i = U("tabs"), s = We(Pl, {}), u = m(), c = d(() => a == null ? void 0 : a.vnode.key), p = d(() => c.value === s.activeKey), v = m(s.lazyLoad ? p.value : !0), h = Pe({
      key: c,
      title: o,
      disabled: l,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, h)), qt(() => {
      var _;
      a != null && a.uid && ((_ = s.removeItem) == null || _.call(s, a.uid));
    }), ve(p, (_) => {
      _ ? v.value || (v.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (v.value = !1);
    }), dt(() => {
      h.slots = fp({}, t);
    }), {
      prefixCls: i,
      active: p,
      itemRef: u,
      mounted: v
    };
  }
});
function vp(e, t, n, o, l, r) {
  return $(), N("div", {
    ref: "itemRef",
    class: V([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? ($(), N("div", {
    key: 0,
    class: V(`${e.prefixCls}-pane`)
  }, [H(e.$slots, "default")], 2)) : pe("v-if", !0)], 2);
}
var In = /* @__PURE__ */ oe(pp, [["render", vp]]);
const hp = Object.assign(Go, {
  TabPane: In,
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Go.name, Go), e.component(n + In.name, In);
  }
}), Br = Symbol("TreeInjectionKey");
function mp(e) {
  const t = [];
  function n(o) {
    o && o.forEach((l) => {
      t.push(l), n(l.children);
    });
  }
  return n(e), t;
}
function yp(e) {
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
function gp(e) {
  return Kt(e.isLeaf) ? e.isLeaf : !e.children;
}
function sl(e) {
  return Set.prototype.add.bind(e);
}
function ul(e) {
  return Set.prototype.delete.bind(e);
}
function Ft(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function Bl(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((o) => {
    Ft(o) && n.push(o.key, ...Bl(o));
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
    if (Ft(r)) {
      const a = r.key, i = ((t = r.children) == null ? void 0 : t.filter(Ft)) || [];
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
    const u = Bl(t);
    n ? u.forEach(sl(i)) : u.forEach(ul(i)), u.forEach(ul(s)), xr({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function bp(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: o,
    onlyCheckLeaf: l
  } = e, r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return o ? t.forEach(sl(r)) : t.forEach((s) => {
    var u;
    const c = n.get(s);
    if (!c || a.has(s) || l && ((u = c.children) != null && u.length))
      return;
    const p = Bl(c);
    p.forEach(sl(a)), p.forEach(ul(i)), r.add(s), i.delete(s), xr({
      node: c,
      checkedKeySet: r,
      indeterminateKeySet: i
    });
  }), [[...r, ...a], [...i]];
}
function Yn() {
  return We(Br) || {};
}
const _p = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Cp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], $p = /* @__PURE__ */ D("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), kp = [$p];
function wp(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, kp, 14, Cp);
}
var Uo = /* @__PURE__ */ oe(_p, [["render", wp]]);
const Sp = Object.assign(Uo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Uo.name, Uo);
  }
});
var Ep = P({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: ut,
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
    } = ye(e), a = Yn(), i = it(t, "switcher-icon"), s = it(t, "loading-icon");
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
      return (e = r()) != null ? e : Vt(ut);
    let v = null, h = !1;
    if (p)
      u && (v = (n = l()) != null ? n : Vt(Sp));
    else {
      const C = u ? Vt("span", {
        class: `${o}-${c ? "minus" : "plus"}-icon`
      }) : Vt(Qf);
      v = (t = l()) != null ? t : C, h = !u;
    }
    if (!v)
      return null;
    const _ = Vt("span", {
      class: `${o}-switcher-icon`,
      onClick: a
    }, v);
    return h ? Vt(Qe, {
      class: `${o}-icon-hover`
    }, () => _) : _;
  }
}), Op = Object.defineProperty, Pp = Object.defineProperties, Bp = Object.getOwnPropertyDescriptors, za = Object.getOwnPropertySymbols, xp = Object.prototype.hasOwnProperty, Tp = Object.prototype.propertyIsEnumerable, Va = (e, t, n) => t in e ? Op(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, cl = (e, t) => {
  for (var n in t || (t = {}))
    xp.call(t, n) && Va(e, n, t[n]);
  if (za)
    for (var n of za(t))
      Tp.call(t, n) && Va(e, n, t[n]);
  return e;
}, Na = (e, t) => Pp(e, Bp(t));
const Tr = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Ip(e, t) {
  return !!(Ke(e) ? t : e);
}
function zp(e, t) {
  const n = cl({}, e);
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
function Vp(e) {
  var t, n;
  const {
    treeNodeData: o,
    parentNode: l,
    isTail: r = !0,
    treeProps: a
  } = e, {
    fieldNames: i
  } = a || {}, s = zp(o, i), u = a.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), c = l ? l.level + 1 : 0, p = Na(cl({}, Gt(s, ["children"])), {
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
    draggable: Ip(s.draggable, a == null ? void 0 : a.draggable)
  });
  return Na(cl({}, p), {
    treeNodeProps: p,
    treeNodeData: o,
    parent: l,
    parentKey: l == null ? void 0 : l.key,
    pathParentKeys: l ? [...l.pathParentKeys, l.key] : []
  });
}
function Np(e, t) {
  function n(o, l) {
    if (!o)
      return;
    const {
      fieldNames: r
    } = t, a = [];
    return o.forEach((i, s) => {
      const u = Vp({
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
  const e = bt(), t = () => {
    var o;
    return (o = e == null ? void 0 : e.vnode.key) != null ? o : Tr();
  }, n = m(t());
  return dt(() => {
    n.value = t();
  }), n;
}
function Lp(e) {
  const {
    key: t,
    refTitle: n
  } = ye(e), o = Yn(), l = m(!1), r = m(!1), a = m(!1), i = m(0), s = ll((u) => {
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
function Dp(e) {
  return Re(e) ? e : [e];
}
const Ap = P({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: Ep,
    Checkbox: gr,
    RenderFunction: Or,
    IconDragDotVertical: Ff
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
    const t = Ir(), n = U("tree-node"), o = Yn(), l = d(() => {
      var x;
      return (x = o.key2TreeNode) == null ? void 0 : x.get(t.value);
    }), r = d(() => l.value.treeNodeData), a = d(() => l.value.children), i = d(() => {
      var x;
      const Y = (x = o.treeProps) == null ? void 0 : x.actionOnNodeClick;
      return Y ? Dp(Y) : [];
    }), {
      isLeaf: s,
      isTail: u,
      selectable: c,
      disabled: p,
      disableCheckbox: v,
      draggable: h
    } = ye(e), _ = d(() => {
      var x;
      return [`${n}`, {
        [`${n}-selected`]: A.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: u.value,
        [`${n}-expanded`]: F.value,
        [`${n}-disabled-selectable`]: !c.value && !((x = o.treeProps) != null && x.disableSelectActionOnly),
        [`${n}-disabled`]: p.value
      }];
    }), C = m(), {
      isDragOver: w,
      isDragging: L,
      isAllowDrop: B,
      dropPosition: E,
      setDragStatus: g
    } = Lp(Pe({
      key: t,
      refTitle: C
    })), k = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: w.value && B.value && E.value < 0,
      [`${n}-title-gap-bottom`]: w.value && B.value && E.value > 0,
      [`${n}-title-highlight`]: !L.value && w.value && B.value && E.value === 0,
      [`${n}-title-dragging`]: L.value,
      [`${n}-title-block`]: l.value.blockNode
    }]), y = d(() => {
      var x, Y;
      return (Y = (x = o.checkedKeys) == null ? void 0 : x.includes) == null ? void 0 : Y.call(x, t.value);
    }), b = d(() => {
      var x, Y;
      return (Y = (x = o.indeterminateKeys) == null ? void 0 : x.includes) == null ? void 0 : Y.call(x, t.value);
    }), A = d(() => {
      var x, Y;
      return (Y = (x = o.selectedKeys) == null ? void 0 : x.includes) == null ? void 0 : Y.call(x, t.value);
    }), F = d(() => {
      var x, Y;
      return (Y = (x = o.expandedKeys) == null ? void 0 : x.includes) == null ? void 0 : Y.call(x, t.value);
    }), j = d(() => {
      var x, Y;
      return (Y = (x = o.loadingKeys) == null ? void 0 : x.includes) == null ? void 0 : Y.call(x, t.value);
    }), O = d(() => o.dragIcon), W = d(() => o.nodeIcon);
    function q(x) {
      var Y, me;
      s.value || (!((Y = a.value) != null && Y.length) && Ue(o.onLoadMore) ? o.onLoadMore(t.value) : (me = o == null ? void 0 : o.onExpand) == null || me.call(o, !F.value, t.value, x));
    }
    const te = Pe({
      loading: j,
      checked: y,
      selected: A,
      indeterminate: b,
      expanded: F,
      isLeaf: s
    }), le = d(() => o.nodeTitle ? () => {
      var x;
      return (x = o.nodeTitle) == null ? void 0 : x.call(o, r.value, te);
    } : void 0), se = d(() => o.nodeExtra ? () => {
      var x;
      return (x = o.nodeExtra) == null ? void 0 : x.call(o, r.value, te);
    } : void 0);
    return {
      nodekey: t,
      refTitle: C,
      prefixCls: n,
      classNames: _,
      titleClassNames: k,
      indeterminate: b,
      checked: y,
      expanded: F,
      selected: A,
      treeTitle: le,
      treeNodeData: r,
      loading: j,
      treeDragIcon: O,
      treeNodeIcon: W,
      extra: se,
      nodeStatus: te,
      onCheckboxChange(x, Y) {
        var me;
        v.value || p.value || (me = o.onCheck) == null || me.call(o, x, t.value, Y);
      },
      onTitleClick(x) {
        var Y;
        i.value.includes("expand") && q(x), !(!c.value || p.value) && ((Y = o.onSelect) == null || Y.call(o, t.value, x));
      },
      onSwitcherClick: q,
      onDragStart(x) {
        var Y;
        if (h.value) {
          x.stopPropagation(), g("dragStart", x);
          try {
            (Y = x.dataTransfer) == null || Y.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(x) {
        h.value && (x.stopPropagation(), g("dragEnd", x));
      },
      onDragOver(x) {
        h && (x.stopPropagation(), x.preventDefault(), g("dragOver", x));
      },
      onDragLeave(x) {
        h.value && (x.stopPropagation(), g("dragLeave", x));
      },
      onDrop(x) {
        !h.value || !B.value || (x.stopPropagation(), x.preventDefault(), g("drop", x));
      }
    };
  }
}), jp = ["data-level", "data-key"], Fp = ["draggable"];
function Mp(e, t, n, o, l, r) {
  const a = ee("NodeSwitcher"), i = ee("Checkbox"), s = ee("RenderFunction"), u = ee("IconDragDotVertical");
  return $(), N("div", {
    class: V(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [pe(" 缩进 "), D("span", {
    class: V(`${e.prefixCls}-indent`)
  }, [($(!0), N(Oe, null, gt(e.level, (c) => ($(), N("span", {
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
  }, cn({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: M(() => [pe(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), H(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: M(() => [pe(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), H(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), pe(" checkbox "), e.checkable ? ($(), J(i, {
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
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? ($(), N("span", {
    key: 0,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [pe(" 节点图标 "), e.$slots.icon ? H(e.$slots, "icon", tl(ie({
    key: 0
  }, e.nodeStatus))) : e.icon ? ($(), J(s, ie({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? ($(), J(s, ie({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : pe("v-if", !0)], 2)) : pe("v-if", !0), D("span", {
    class: V(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? ($(), J(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : ($(), N(Oe, {
    key: 1
  }, [pe(" 标题，treeTitle 优先级高于节点的 title "), H(e.$slots, "title", {
    title: e.title
  }, () => [ze(xe(e.title), 1)])], 2112)), e.draggable ? ($(), N("span", {
    key: 2,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [pe(" 拖拽图标 "), e.$slots["drag-icon"] ? H(e.$slots, "drag-icon", tl(ie({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? ($(), J(s, ie({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? ($(), J(s, ie({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : ($(), J(u, {
    key: 3
  }))], 2)) : pe("v-if", !0)], 2)], 42, Fp), pe(" 额外 "), e.extra ? ($(), J(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : pe("v-if", !0)], 10, jp);
}
var dl = /* @__PURE__ */ oe(Ap, [["render", Mp]]);
const Kp = P({
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
function Rp(e, t, n, o, l, r) {
  return $(), J(Mn, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: M(() => [H(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var Hp = /* @__PURE__ */ oe(Kp, [["render", Rp]]);
const Wp = P({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: Hp,
    BaseTreeNode: dl
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${U("tree")}-node-list`], o = Yn(), {
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
function qp(e, t, n, o, l, r) {
  const a = ee("BaseTreeNode"), i = ee("ExpandTransition");
  return $(), J(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: M(() => [e.show ? ($(), N("div", {
      key: 0,
      class: V(e.classNames)
    }, [($(!0), N(Oe, null, gt(e.visibleNodeList, (s) => ($(), J(a, ie({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : pe("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var Gp = /* @__PURE__ */ oe(Wp, [["render", qp]]), Up = Object.defineProperty, Da = Object.getOwnPropertySymbols, Zp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, Aa = (e, t, n) => t in e ? Up(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Xp = (e, t) => {
  for (var n in t || (t = {}))
    Zp.call(t, n) && Aa(e, n, t[n]);
  if (Da)
    for (var n of Da(t))
      Yp.call(t, n) && Aa(e, n, t[n]);
  return e;
}, Jp = P({
  name: "TreeNode",
  inheritAttrs: !1,
  props: Xp({}, dl.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const o = Ir();
    return () => f(Oe, null, [f(dl, ie(e, n, {
      key: o.value
    }), t), f(Gp, {
      key: o.value,
      nodeKey: o.value
    }, null)]);
  }
});
function Qp(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: o,
    checkStrictly: l,
    halfCheckedKeys: r,
    onlyCheckLeaf: a
  } = ye(e), i = m(!1), s = m([]), u = m([]), c = m(), p = m(), v = (_) => bp({
    initCheckedKeys: _,
    key2TreeNode: o.value,
    checkStrictly: l.value,
    onlyCheckLeaf: a.value
  }), h = (_) => {
    const C = v(_);
    [s.value, u.value] = C;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), Kn(() => {
    n.value ? [c.value, p.value] = v(n.value) : i.value && (c.value = void 0, p.value = void 0, s.value = [], u.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => c.value || s.value),
    indeterminateKeys: d(() => l.value && r.value ? r.value : p.value || u.value),
    setCheckedState(_, C, w = !1) {
      return w ? h(_) : (s.value = _, u.value = C), [s.value, u.value];
    }
  };
}
function ev(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: o,
    showLine: l,
    blockNode: r,
    checkable: a,
    loadMore: i,
    draggable: s
  } = ye(e), u = m([]);
  Kn(() => {
    var v, h;
    u.value = Np(t.value || [], {
      selectable: (v = o == null ? void 0 : o.value) != null ? v : !1,
      showLine: !!(l != null && l.value),
      blockNode: !!(r != null && r.value),
      checkable: (h = a == null ? void 0 : a.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const c = d(() => mp(u.value)), p = d(() => yp(c.value));
  return {
    treeData: u,
    flattenTreeData: c,
    key2TreeNode: p
  };
}
const tv = P({
  name: "Tree",
  components: {
    VirtualList: $r,
    TreeNode: Jp
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
      selectable: C,
      checkable: w,
      blockNode: L,
      fieldNames: B,
      size: E,
      defaultExpandAll: g,
      filterTreeNode: k,
      draggable: y,
      allowDrop: b,
      defaultExpandSelected: A,
      defaultExpandChecked: F,
      autoExpandParent: j,
      halfCheckedKeys: O,
      onlyCheckLeaf: W,
      animation: q
    } = ye(e), te = U("tree"), le = d(() => [`${te}`, {
      [`${te}-checkable`]: w.value,
      [`${te}-show-line`]: l.value
    }, `${te}-size-${E.value}`]), se = it(n, "switcher-icon"), x = it(n, "loading-icon"), Y = it(n, "drag-icon"), me = it(n, "icon"), ae = it(n, "title"), ce = it(n, "extra"), {
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ge
    } = ev(Pe({
      treeData: o,
      selectable: C,
      showLine: l,
      blockNode: L,
      checkable: w,
      fieldNames: B,
      loadMore: a,
      draggable: y
    })), {
      checkedKeys: de,
      indeterminateKeys: ke,
      setCheckedState: tt
    } = Qp(Pe({
      defaultCheckedKeys: u,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ge,
      halfCheckedKeys: O,
      onlyCheckLeaf: W
    })), [Te, Me] = Dn((p == null ? void 0 : p.value) || [], Pe({
      value: c
    })), He = m([]), Ne = m();
    function Ye() {
      if (h != null && h.value) {
        const R = /* @__PURE__ */ new Set([]);
        return h.value.forEach((X) => {
          if (R.has(X))
            return;
          const Q = ge.value.get(X);
          Q && [...j.value ? Q.pathParentKeys : [], X].forEach((ue) => R.add(ue));
        }), [...R];
      }
      if (g.value)
        return be.value.filter((R) => R.children && R.children.length).map((R) => R.key);
      if (A.value || F.value) {
        const R = /* @__PURE__ */ new Set([]), X = (Q) => {
          Q.forEach((ue) => {
            const he = ge.value.get(ue);
            he && (he.pathParentKeys || []).forEach((_e) => R.add(_e));
          });
        };
        return A.value && X(Te.value), F.value && X(de.value), [...R];
      }
      return [];
    }
    const [Z, T] = Dn(Ye(), Pe({
      value: v
    })), G = m([]), fe = d(() => {
      const R = new Set(Z.value), X = new Set(G.value);
      return be.value.filter((Q) => {
        var ue;
        if (!(!k || !k.value || (k == null ? void 0 : k.value(Q.treeNodeData))))
          return !1;
        const _e = Ke(Q.parentKey), wt = (ue = Q.pathParentKeys) == null ? void 0 : ue.every((zt) => R.has(zt) && !X.has(zt));
        return _e || wt;
      });
    });
    function we(R, X = _.value) {
      let Q = [...R];
      return X === "parent" ? Q = R.filter((ue) => {
        const he = ge.value.get(ue);
        return he && !(!Ke(he.parentKey) && R.includes(he.parentKey));
      }) : X === "child" && (Q = R.filter((ue) => {
        var he, _e;
        return !((_e = (he = ge.value.get(ue)) == null ? void 0 : he.children) != null && _e.length);
      })), Q;
    }
    function Ee(R) {
      return R.map((X) => {
        var Q;
        return ((Q = ge.value.get(X)) == null ? void 0 : Q.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Je(R) {
      const {
        targetKey: X,
        targetChecked: Q,
        newCheckedKeys: ue,
        newIndeterminateKeys: he,
        event: _e
      } = R, wt = X ? ge.value.get(X) : void 0, zt = we(ue);
      t("update:checkedKeys", zt), t("update:halfCheckedKeys", he), t("check", zt, {
        checked: Q,
        node: wt == null ? void 0 : wt.treeNodeData,
        checkedNodes: Ee(zt),
        halfCheckedKeys: he,
        halfCheckedNodes: Ee(he),
        e: _e
      });
    }
    function Ve(R) {
      const {
        targetKey: X,
        targetSelected: Q,
        newSelectedKeys: ue,
        event: he
      } = R, _e = X ? ge.value.get(X) : void 0;
      t("update:selectedKeys", ue), t("select", ue, {
        selected: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        selectedNodes: Ee(ue),
        e: he
      });
    }
    function $t(R) {
      const {
        targetKey: X,
        targetExpanded: Q,
        newExpandedKeys: ue,
        event: he
      } = R, _e = X ? ge.value.get(X) : void 0;
      t("expand", ue, {
        expanded: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        expandedNodes: Ee(ue),
        e: he
      }), t("update:expandedKeys", ue);
    }
    function Xt(R) {
      const [X, Q] = tt(R, [], !0);
      Je({
        newCheckedKeys: X,
        newIndeterminateKeys: Q
      });
    }
    function kt(R) {
      let X = R;
      !r.value && R.length > 1 && (X = [R[0]]), Me(X), Ve({
        newSelectedKeys: X
      });
    }
    function lt(R) {
      G.value = [], T(R), $t({
        newExpandedKeys: R
      });
    }
    function It(R, X, Q) {
      if (!R.length)
        return;
      let ue = [...de.value], he = [...ke.value];
      R.forEach((_e) => {
        const wt = ge.value.get(_e);
        wt && ([ue, he] = Ia({
          node: wt,
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
    function Jt(R, X, Q) {
      if (!R.length)
        return;
      let ue;
      if (r.value) {
        const he = new Set(Te.value);
        R.forEach((_e) => {
          X ? he.add(_e) : he.delete(_e);
        }), ue = [...he];
      } else
        ue = X ? [R[0]] : [];
      Me(ue), Ve({
        targetKey: Q,
        targetSelected: Ke(Q) ? void 0 : X,
        newSelectedKeys: ue
      });
    }
    function I(R, X, Q) {
      const ue = new Set(Z.value);
      R.forEach((_e) => {
        X ? ue.add(_e) : ue.delete(_e), Ze(_e);
      });
      const he = [...ue];
      T(he), $t({
        targetKey: Q,
        targetExpanded: Ke(Q) ? void 0 : X,
        newExpandedKeys: he
      });
    }
    function S(R, X, Q) {
      const ue = ge.value.get(X);
      if (!ue)
        return;
      const [he, _e] = Ia({
        node: ue,
        checked: R,
        checkedKeys: de.value,
        indeterminateKeys: ke.value,
        checkStrictly: i.value
      });
      tt(he, _e), Je({
        targetKey: X,
        targetChecked: R,
        newCheckedKeys: he,
        newIndeterminateKeys: _e,
        event: Q
      });
    }
    function z(R, X) {
      if (!ge.value.get(R))
        return;
      let ue, he;
      if (r.value) {
        const _e = new Set(Te.value);
        he = !_e.has(R), he ? _e.add(R) : _e.delete(R), ue = [..._e];
      } else
        he = !0, ue = [R];
      Me(ue), Ve({
        targetKey: R,
        targetSelected: he,
        newSelectedKeys: ue,
        event: X
      });
    }
    function ne(R, X, Q) {
      if (G.value.includes(X) || !ge.value.get(X))
        return;
      const he = new Set(Z.value);
      R ? he.add(X) : he.delete(X);
      const _e = [...he];
      T(_e), q.value && G.value.push(X), $t({
        targetKey: X,
        targetExpanded: R,
        newExpandedKeys: _e,
        event: Q
      });
    }
    function Ze(R) {
      const X = G.value.indexOf(R);
      G.value.splice(X, 1);
    }
    const Ge = d(() => a != null && a.value ? async (R) => {
      if (!Ue(a.value))
        return;
      const X = ge.value.get(R);
      if (!X)
        return;
      const {
        treeNodeData: Q
      } = X;
      He.value = [.../* @__PURE__ */ new Set([...He.value, R])];
      try {
        await a.value(Q), He.value = He.value.filter((ue) => ue !== R), ne(!0, R), de.value.includes(R) && S(!0, R);
      } catch (ue) {
        He.value = He.value.filter((he) => he !== R), console.error("[tree]load data error: ", ue);
      }
    } : void 0), rt = Pe({
      treeProps: e,
      switcherIcon: se,
      loadingIcon: x,
      dragIcon: Y,
      nodeIcon: me,
      nodeTitle: ae,
      nodeExtra: ce,
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ge,
      checkedKeys: de,
      indeterminateKeys: ke,
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
      allowDrop(R, X) {
        const Q = ge.value.get(R);
        return Q && Ue(b.value) ? !!b.value({
          dropNode: Q.treeNodeData,
          dropPosition: X
        }) : !0;
      },
      onDragStart(R, X) {
        const Q = ge.value.get(R);
        Ne.value = Q, Q && t("dragStart", X, Q.treeNodeData);
      },
      onDragEnd(R, X) {
        const Q = ge.value.get(R);
        Ne.value = void 0, Q && t("dragEnd", X, Q.treeNodeData);
      },
      onDragOver(R, X) {
        const Q = ge.value.get(R);
        Q && t("dragOver", X, Q.treeNodeData);
      },
      onDragLeave(R, X) {
        const Q = ge.value.get(R);
        Q && t("dragLeave", X, Q.treeNodeData);
      },
      onDrop(R, X, Q) {
        const ue = ge.value.get(R);
        Ne.value && ue && !(ue.key === Ne.value.key || ue.pathParentKeys.includes(Ne.value.key || "")) && t("drop", {
          e: Q,
          dragNode: Ne.value.treeNodeData,
          dropNode: ue.treeNodeData,
          dropPosition: X
        });
      }
    });
    return _t(Br, rt), {
      classNames: le,
      visibleTreeNodeList: fe,
      treeContext: rt,
      virtualListRef: m(),
      computedSelectedKeys: Te,
      computedExpandedKeys: Z,
      computedCheckedKeys: de,
      computedIndeterminateKeys: ke,
      getPublicCheckedKeys: we,
      getNodes: Ee,
      internalCheckNodes: It,
      internalSetCheckedKeys: Xt,
      internalSelectNodes: Jt,
      internalSetSelectedKeys: kt,
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
      a && Ft(a) && o(r, e, t);
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
        return l && Ft(l);
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
        return u && Ft(u) && (o || !n || gp(u));
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
function nv(e, t, n, o, l, r) {
  const a = ee("TreeNode"), i = ee("VirtualList");
  return $(), N("div", {
    class: V(e.classNames)
  }, [e.virtualListProps ? ($(), J(i, ie({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: M(({
      item: s
    }) => [f(a, ie({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : ($(!0), N(Oe, {
    key: 1
  }, gt(e.visibleTreeNodeList, (s) => ($(), J(a, ie({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var Zo = /* @__PURE__ */ oe(tv, [["render", nv]]);
const ov = Object.assign(Zo, {
  install: (e, t) => {
    Fe(e, t);
    const n = je(t);
    e.component(n + Zo.name, Zo);
  }
}), lv = P({
  name: "TypographyEditContent",
  components: {
    Input: wl
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
    const o = [`${U("typography")}-edit-content`], l = m();
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
function av(e, t, n, o, l, r) {
  const a = ee("Input");
  return $(), N("div", {
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
var rv = /* @__PURE__ */ oe(lv, [["render", av]]);
const iv = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), sv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], uv = /* @__PURE__ */ D("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), cv = [uv];
function dv(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, cv, 14, sv);
}
var Yo = /* @__PURE__ */ oe(iv, [["render", dv]]);
const fv = Object.assign(Yo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Yo.name, Yo);
  }
}), pv = P({
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
      return e.size && (a.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: o,
      innerStyle: l,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), vv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], hv = /* @__PURE__ */ D("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), mv = [hv];
function yv(e, t, n, o, l, r) {
  return $(), N("svg", {
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
  }, mv, 14, vv);
}
var Xo = /* @__PURE__ */ oe(pv, [["render", yv]]);
const gv = Object.assign(Xo, {
  install: (e, t) => {
    var n;
    const o = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(o + Xo.name, Xo);
  }
}), bv = P({
  name: "TypographyOperations",
  components: {
    Tooltip: bn,
    IconCheckCircleFill: _l,
    IconCopy: fv,
    IconEdit: gv
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
    } = vl();
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
function _v(e, t, n, o, l, r) {
  const a = ee("IconEdit"), i = ee("Tooltip"), s = ee("IconCheckCircleFill"), u = ee("IconCopy");
  return $(), N(Oe, null, [e.editable ? ($(), J(i, ie({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: M(() => [D("span", {
      class: V(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = at((...c) => e.onEditClick && e.onEditClick(...c), ["stop"]))
    }, [f(a)], 2)]),
    _: 1
  }, 16, ["content"])) : pe("v-if", !0), e.copyable ? ($(), J(i, tl(ie({
    key: 1
  }, e.copyTooltipProps)), {
    content: M(() => [H(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [ze(xe(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: M(() => [D("span", {
      class: V({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = at((...c) => e.onCopyClick && e.onCopyClick(...c), ["stop"]))
    }, [H(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? ($(), J(s, {
      key: 0
    })) : ($(), J(u, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : pe("v-if", !0), e.showExpand ? ($(), N("a", {
    key: 2,
    class: V(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = at((...c) => e.onExpandClick && e.onExpandClick(...c), ["stop"]))
  }, [H(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [ze(xe(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : pe("v-if", !0)], 64);
}
var ja = /* @__PURE__ */ oe(bv, [["render", _v]]);
let Le;
function Cv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function Jo(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var $v = (e, t, n, o) => {
  Le || (Le = document.createElement("div"), document.body.appendChild(Le));
  const {
    rows: l,
    suffix: r,
    ellipsisStr: a
  } = t, i = window.getComputedStyle(e), s = Cv(i), u = Jo(i.lineHeight), c = Math.round(u * l + Jo(i.paddingTop) + Jo(i.paddingBottom));
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
  function C() {
    return Le.offsetHeight <= c;
  }
  if (C())
    return {
      ellipsis: !1,
      text: o
    };
  function w(L, B = 0, E = o.length, g = 0) {
    const k = Math.floor((B + E) / 2), y = o.slice(0, k);
    if (L.textContent = y, B >= E - 1)
      for (let b = E; b >= B; b -= 1) {
        const A = o.slice(0, b);
        if (L.textContent = A, C() || !A)
          return;
      }
    C() ? w(L, k, E, k) : w(L, B, k, g);
  }
  return w(_), {
    text: _.textContent,
    ellipsis: !0
  };
};
const kv = async (e) => {
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
let Nt;
function wv(e) {
  if (!e)
    return "";
  Nt || (Nt = document.createElement("div"), Nt.setAttribute("aria-hidden", "true"), document.body.appendChild(Nt));
  const t = Xa({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(Nt);
  const n = Nt.innerText;
  return t.unmount(), n;
}
var Sv = Object.defineProperty, Ev = Object.defineProperties, Ov = Object.getOwnPropertyDescriptors, Fa = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Bv = Object.prototype.propertyIsEnumerable, Ma = (e, t, n) => t in e ? Sv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xv = (e, t) => {
  for (var n in t || (t = {}))
    Pv.call(t, n) && Ma(e, n, t[n]);
  if (Fa)
    for (var n of Fa(t))
      Bv.call(t, n) && Ma(e, n, t[n]);
  return e;
}, Tv = (e, t) => Ev(e, Ov(t));
function zr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pl(e);
}
function Iv(e) {
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
  } = e, o = Iv(e), l = De(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return o.reduce((r, a) => f(a, a === "mark" ? {
    style: l
  } : {}, zr(r) ? r : {
    default: () => [r]
  }), t);
}
function zv(e) {
  const t = !!e.showTooltip, n = De(e.showTooltip) && e.showTooltip.type === "popover" ? Ac : bn, o = De(e.showTooltip) && e.showTooltip.props || {};
  return Tv(xv({
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
var Vv = P({
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
    }]), C = m(), w = m(""), [L, B] = Dn(r.value, Pe({
      value: l
    })), E = d(() => s.value && L.value);
    function g() {
      n("update:editing", !0), n("editStart"), B(!0);
    }
    function k(de) {
      n("update:editText", de), n("change", de);
    }
    function y() {
      L.value && (n("update:editing", !1), n("editEnd"), B(!1));
    }
    const b = m(!1);
    let A = null;
    function F() {
      var de;
      const ke = (de = u.value) != null ? de : w.value;
      kv(ke || ""), b.value = !0, n("copy", ke), A = setTimeout(() => {
        b.value = !1;
      }, p.value);
    }
    el(() => {
      A && clearTimeout(A), A = null;
    });
    const j = m(!1), O = m(!1), W = m(""), q = d(() => zv(De(a.value) && a.value || {}));
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
        isCopied: b.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: de || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: g,
        onCopy: F,
        onExpand: le
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(ja, {
        editable: s.value,
        copyable: i.value,
        expandable: q.value.expandable,
        isCopied: b.value,
        isEllipsis: j.value,
        expanded: O.value,
        forceRenderExpand: de,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: g,
        onCopy: F,
        onExpand: le
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      });
    }
    function x() {
      if (!C.value)
        return;
      const {
        ellipsis: de,
        text: ke
      } = $v(C.value, q.value, se(!!q.value.expandable), w.value);
      j.value !== de && (j.value = de, q.value.css || n("ellipsis", de)), W.value !== ke && (W.value = ke || "");
    }
    function Y() {
      a.value && !O.value && (Nn(te), te = dr(() => {
        x();
      }));
    }
    el(() => {
      Nn(te);
    }), ve(() => q.value.rows, () => {
      Y();
    }), ve(a, (de) => {
      de ? Y() : j.value = !1;
    });
    let me = [];
    const ae = () => {
      if (a.value || i.value || s.value) {
        const de = wv(me);
        de !== w.value && (w.value = de, Y());
      }
    };
    Ae(ae), dt(ae);
    const ce = m(), Se = m(!1), be = () => {
      if (C.value && ce.value) {
        const de = ce.value.offsetHeight > C.value.offsetHeight;
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
      var de, ke;
      if (me = ((de = t.default) == null ? void 0 : de.call(t)) || [], E.value) {
        const fe = (ke = c.value) != null ? ke : w.value;
        return f(rv, {
          text: fe,
          onChange: (we) => {
            we !== fe && k(we);
          },
          onEnd: y
        }, null);
      }
      const {
        suffix: tt,
        ellipsisStr: Te,
        showTooltip: Me,
        tooltipProps: He,
        TooltipComponent: Ne
      } = q.value, Ye = j.value && !O.value, Z = Ye && !Me ? {
        title: w.value
      } : {}, T = v.value;
      if (q.value.css) {
        const fe = Ka(e, me), we = f(T, ie({
          class: _.value,
          ref: C,
          style: ge.value
        }, Z, o), {
          default: () => [f("span", {
            ref: ce
          }, [fe])]
        });
        return Se.value ? f(Ne, ie(He, {
          onResize: () => be()
        }), {
          default: () => [we],
          content: () => w.value
        }) : f(dn, {
          onResize: () => {
            be();
          }
        }, zr(we) ? we : {
          default: () => [we]
        });
      }
      const G = Ka(e, Ye ? W.value : me);
      return f(dn, {
        onResize: () => Y()
      }, {
        default: () => [f(T, ie({
          class: _.value,
          ref: C
        }, Z, o), {
          default: () => [Ye && Me ? f(Ne, He, {
            default: () => [f("span", null, [G])],
            content: () => w.value
          }) : G, Ye ? Te : null, tt, se()]
        })]
      });
    };
  }
}), Nv = P({
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
    return f(Vv, ie({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function Lv(e) {
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
function Dv(e, t, n, o) {
  const l = n ?? m(0);
  return ve(e, (r) => {
    if (!r)
      return;
    const a = Lv(t);
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
function Xn(e) {
  function t(r) {
    return d(() => {
      const i = St(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue(St(r)) : "";
    });
  }
  function n(r) {
    return d(() => {
      const i = St(e);
      if (i) {
        const s = St(r);
        return i.style[s];
      }
      return "";
    });
  }
  function o(r) {
    const a = r ?? t("display");
    return d(() => St(e) ? {
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
      const a = St(e);
      if (!a || !a.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Xn(a.parentElement).getFlexBoxInfo();
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
const sn = /* @__PURE__ */ new Map();
function Av(e) {
  ve(e, (t) => {
    if (!t) {
      sn.forEach((o) => {
        o.value = null;
      });
      return;
    }
    const n = Xn(t);
    sn.forEach((o, l) => {
      o.value = n.getComputedStyle(l).value;
    });
  });
}
function jv(e) {
  return sn.has(e) || sn.set(e, m(null)), sn.get(e);
}
function Pt(e) {
  return ai() ? (ri(e), !0) : !1;
}
function Be(e) {
  return typeof e == "function" ? e() : K(e);
}
const pn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fv = (e) => e != null, Mv = Object.prototype.toString, Kv = (e) => Mv.call(e) === "[object Object]", fl = () => {
};
function Rv(e, t) {
  function n(...o) {
    return new Promise((l, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(r);
    });
  }
  return n;
}
const Hv = (e) => e();
function Wv(e, t = {}) {
  let n, o, l = fl;
  const r = (i) => {
    clearTimeout(i), l(), l = fl;
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
function qv(e) {
  return e || bt();
}
function Gv(e, t, n = {}) {
  const {
    eventFilter: o = Hv,
    ...l
  } = n;
  return ve(
    e,
    Rv(
      o,
      t
    ),
    l
  );
}
function Uv(e, t = {}) {
  if (!Rn(e))
    return ye(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const o in e.value)
    n[o] = li(() => ({
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
  qv() ? Ae(e, n) : t ? e() : qe(e);
}
function Zv(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: l = !1
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
    const c = Be(t);
    c <= 0 || (a.value = !0, l && e(), i(), r = setInterval(e, c));
  }
  if (o && pn && u(), Rn(t) || typeof t == "function") {
    const c = ve(t, () => {
      a.value && pn && u();
    });
    Pt(c);
  }
  return Pt(s), {
    isActive: a,
    pause: s,
    resume: u
  };
}
function Yv(e, t, n = {}) {
  const {
    debounce: o = 0,
    maxWait: l = void 0,
    ...r
  } = n;
  return Gv(
    e,
    t,
    {
      ...r,
      eventFilter: Wv(o, { maxWait: l })
    }
  );
}
function Wt(e) {
  var t;
  const n = Be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ct = pn ? window : void 0, Xv = pn ? window.document : void 0;
function Xe(...e) {
  let t, n, o, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, l] = e, t = Ct) : [t, n, o, l] = e, !t)
    return fl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], a = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, v, h) => (c.addEventListener(p, v, h), () => c.removeEventListener(p, v, h)), s = ve(
    () => [Wt(t), Be(l)],
    ([c, p]) => {
      if (a(), !c)
        return;
      const v = Kv(p) ? { ...p } : p;
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
function Jv() {
  const e = m(!1), t = bt();
  return t && Ae(() => {
    e.value = !0;
  }, t), e;
}
function Jn(e) {
  const t = Jv();
  return d(() => (t.value, !!e()));
}
function Nr(e, t, n = {}) {
  const { window: o = Ct, ...l } = n;
  let r;
  const a = Jn(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => {
    const v = Be(e), h = (Array.isArray(v) ? v : [v]).map(Wt).filter(Fv);
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
function Qv(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: l = Ct
  } = t, r = m(!1), a = o ? 1e3 / o : null;
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
    isActive: vn(r),
    pause: p,
    resume: c
  };
}
function eh(e, t = {}) {
  const { window: n = Ct } = t, o = Jn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let l;
  const r = m(!1), a = (u) => {
    r.value = u.matches;
  }, i = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", a) : l.removeListener(a));
  }, s = Kn(() => {
    o.value && (i(), l = n.matchMedia(Be(e)), "addEventListener" in l ? l.addEventListener("change", a) : l.addListener(a), r.value = l.matches);
  });
  return Pt(() => {
    s(), i(), l = void 0;
  }), r;
}
function th(e, t = {}) {
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
    draggingElement: h = Ct,
    containerElement: _,
    handle: C = e
  } = t, w = m(
    (n = Be(p)) != null ? n : { x: 0, y: 0 }
  ), L = m(), B = (b) => l ? l.includes(b.pointerType) : !0, E = (b) => {
    Be(r) && b.preventDefault(), Be(a) && b.stopPropagation();
  }, g = (b) => {
    var A;
    if (b.button !== 0 || Be(t.disabled) || !B(b) || Be(i) && b.target !== Be(e))
      return;
    const F = Be(_), j = (A = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : A.call(F), O = Be(e).getBoundingClientRect(), W = {
      x: b.clientX - (F ? O.left - j.left + F.scrollLeft : O.left),
      y: b.clientY - (F ? O.top - j.top + F.scrollTop : O.top)
    };
    (c == null ? void 0 : c(W, b)) !== !1 && (L.value = W, E(b));
  }, k = (b) => {
    if (Be(t.disabled) || !B(b) || !L.value)
      return;
    const A = Be(_), F = Be(e).getBoundingClientRect();
    let { x: j, y: O } = w.value;
    (v === "x" || v === "both") && (j = b.clientX - L.value.x, A && (j = Math.min(Math.max(0, j), A.scrollWidth - F.width))), (v === "y" || v === "both") && (O = b.clientY - L.value.y, A && (O = Math.min(Math.max(0, O), A.scrollHeight - F.height))), w.value = {
      x: j,
      y: O
    }, s == null || s(w.value, b), E(b);
  }, y = (b) => {
    Be(t.disabled) || !B(b) || L.value && (L.value = void 0, u == null || u(w.value, b), E(b));
  };
  if (pn) {
    const b = { capture: (o = t.capture) != null ? o : !0 };
    Xe(C, "pointerdown", g, b), Xe(h, "pointermove", k, b), Xe(h, "pointerup", y, b);
  }
  return {
    ...Uv(w),
    position: w,
    isDragging: d(() => !!L.value),
    style: d(
      () => `left:${w.value.x}px;top:${w.value.y}px;`
    )
  };
}
function nh(e, t, n = {}) {
  const { window: o = Ct, ...l } = n;
  let r;
  const a = Jn(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((p) => Wt(p)) : [Wt(e)]), u = ve(
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
  } = t, a = m(0), i = m(0), s = m(0), u = m(0), c = m(0), p = m(0), v = m(0), h = m(0);
  function _() {
    const C = Wt(e);
    if (!C) {
      n && (a.value = 0, i.value = 0, s.value = 0, u.value = 0, c.value = 0, p.value = 0, v.value = 0, h.value = 0);
      return;
    }
    const w = C.getBoundingClientRect();
    a.value = w.height, i.value = w.bottom, s.value = w.left, u.value = w.right, c.value = w.top, p.value = w.width, v.value = w.x, h.value = w.y;
  }
  return nh(e, _), ve(() => Wt(e), (C) => !C && _()), Nr(e, _, {
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
function oh(e) {
  const {
    x: t,
    y: n,
    document: o = Xv,
    multiple: l,
    interval: r = "requestAnimationFrame",
    immediate: a = !0
  } = e, i = Jn(() => Be(l) ? o && "elementsFromPoint" in o : o && "elementFromPoint" in o), s = m(null), u = () => {
    var p, v;
    s.value = Be(l) ? (p = o == null ? void 0 : o.elementsFromPoint(Be(t), Be(n))) != null ? p : [] : (v = o == null ? void 0 : o.elementFromPoint(Be(t), Be(n))) != null ? v : null;
  }, c = r === "requestAnimationFrame" ? Qv(u, { immediate: a }) : Zv(u, r, { immediate: a });
  return {
    isSupported: i,
    element: s,
    ...c
  };
}
const lh = {
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
    window: r = Ct,
    target: a = r,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let u = null;
  const c = m(l.x), p = m(l.y), v = m(null), h = typeof t == "function" ? t : lh[t], _ = (k) => {
    const y = h(k);
    u = k, y && ([c.value, p.value] = y, v.value = "mouse");
  }, C = (k) => {
    if (k.touches.length > 0) {
      const y = h(k.touches[0]);
      y && ([c.value, p.value] = y, v.value = "touch");
    }
  }, w = () => {
    if (!u || !r)
      return;
    const k = h(u);
    u instanceof MouseEvent && k && (c.value = k[0] + r.scrollX, p.value = k[1] + r.scrollY);
  }, L = () => {
    c.value = l.x, p.value = l.y;
  }, B = s ? (k) => s(() => _(k), {}) : (k) => _(k), E = s ? (k) => s(() => C(k), {}) : (k) => C(k), g = s ? () => s(() => w(), {}) : () => w();
  if (a) {
    const k = { passive: !0 };
    Xe(a, ["mousemove", "dragover"], B, k), n && t !== "movement" && (Xe(a, ["touchstart", "touchmove"], E, k), o && Xe(a, "touchend", L, k)), i && t === "page" && Xe(r, "scroll", g, { passive: !0 });
  }
  return {
    x: c,
    y: p,
    sourceType: v
  };
}
function xl(e = {}) {
  const {
    window: t = Ct,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: l = !0,
    includeScrollbar: r = !0
  } = e, a = m(n), i = m(o), s = () => {
    t && (r ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), Vr(s), Xe("resize", s, { passive: !0 }), l) {
    const u = eh("(orientation: portrait)");
    ve(u, () => s());
  }
  return { width: a, height: i };
}
function Ar(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function ah() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function rh(e) {
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
function jr(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function Tl(e, t) {
  if (!jr(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function ht(e, t) {
  if (!jr(e, t))
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
function ih(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function sh(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function uh(e) {
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
function un(e, t) {
  t.add && e.classList.add(t.add), t.remove && e.classList.remove(t.remove), t.change && e.classList.replace(t.change.oldClass, t.change.newClass);
}
const $e = m(null), ot = {
  props: Pe(/* @__PURE__ */ new Map()),
  styles: Pe(/* @__PURE__ */ new Map()),
  propsCode: m(null),
  stylesCode: m(null),
  classes: m([])
}, An = /* @__PURE__ */ new Map();
function Mt() {
  return $e;
}
function ch(e) {
  const t = Fr(e, Qn());
  $e.value = t, uh(t);
}
function dh(e) {
  $e.value = e, Kr();
}
function Il(e) {
  if (An.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = m(Symbol(e));
  return An.set(e, t), vn(t);
}
function fh(e) {
  const t = An.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function Mr() {
  return vn(ot);
}
function ph(e) {
  if (ot.props.clear(), ot.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      ot.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      ot.styles.set(t, n);
  e.propsCode !== void 0 && (ot.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (ot.stylesCode.value = e.stylesCode), e.classes !== void 0 && (ot.classes.value = e.classes), Kr();
}
function vh() {
  return {
    props: ot.propsCode,
    styles: ot.stylesCode
  };
}
function hh(e) {
  return d(() => ot.styles.has(e));
}
function mh() {
  return d(() => $e.value !== null);
}
function yh() {
  return d(() => $e.value === null ? null : Tl($e.value, Qn()));
}
function Kr() {
  for (const e of An.values())
    e.value = Symbol(e.value.description);
}
const jn = m("en"), zl = /* @__PURE__ */ new Map(), Ra = d(() => {
  const e = zl.get(jn.value);
  if (e == null)
    throw new Error(`No message found for locale ${jn.value}`);
  return e;
});
function gh(e) {
  jn.value = e;
}
function bh(e, t) {
  zl.set(e, t);
}
function Ie(e) {
  var t;
  return Ra.value.hasOwnProperty(e) ? Ra.value[e] : (console.warn(`No message found for key ${e} in locale ${jn.value}`), ((t = zl.get("en")) == null ? void 0 : t[e]) || e.split(".").pop() || "");
}
const Rr = m(!1), _h = vn(Rr);
function Ch(e) {
  Rr.value = e;
}
const Lt = m(null);
let st = d(() => null), _n, Hr, Wr, qr, Gr, Ur;
function Qn() {
  return _n;
}
function $h(e) {
  Lt.value = Fr(e, _n);
}
function kh() {
  Lt.value = null;
}
function wh() {
  return Hr;
}
function Sh(e) {
  Wr = e.emitSetCommandFn, qr = e.emitResetCommandFn, e.emitJumpSourceCodeFn, Gr = e.emitApplyCommandFn, Ur = e.emitClassesUpdateFn, _n = e.selectorConfig, Hr = e.elementTreeData;
  const {
    hoverElement: t
  } = xh(e.selectorConfig);
  Th(t), st = t, gh(e.languageConfig.locale), Object.entries(e.languageConfig.messages).forEach(([n, o]) => {
    bh(n, o);
  });
}
function Eh() {
  const e = $e.value;
  if (e) {
    const t = ih(e, _n);
    sh(t);
  }
}
function Qo(e) {
  const {
    targetId: t,
    classes: n
  } = e;
  let o = t;
  o === void 0 && $e.value && (o = ht($e.value, _n)), Ur({
    targetId: o,
    classes: n
  });
}
function Oh() {
  Gr();
}
function Ph() {
  return _h;
}
function eo(e) {
  Array.isArray(e) || (e = [e]), Wr(e);
}
function Bh(e, t = "style") {
  qr([{
    propertyName: e,
    type: t
  }]);
}
function xh(e) {
  const {
    x: t,
    y: n
  } = Dr({
    type: "client"
  }), {
    element: o
  } = oh({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (o.value === null)
        return null;
      const r = o.value.closest(e.selectors);
      return r === null || r.closest("[layout-tool-panel]") ? Lt.value ? Lt.value : null : r;
    })
  };
}
function Th(e) {
  Xe(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (dh(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Xe(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Ih(e, t) {
  const n = jv(e);
  return d({
    get: () => n.value,
    set: (l) => {
      const r = {
        propertyName: e,
        values: {
          [e]: l
        }
      }, a = t ? t(l) : [];
      eo([r, ...a]), n.value = l;
    }
  });
}
const zh = /* @__PURE__ */ P({
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
    const t = e, n = Ih(t.styleName), o = d(() => {
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
    const i = m(null);
    Dv(i, t.direction, a, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function u() {
    }
    return (c, p) => ($(), N("div", {
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
}, vt = /* @__PURE__ */ et(zh, [["__scopeId", "data-v-19de9462"]]), Vh = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, Nh = /* @__PURE__ */ P({
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
      const i = Et;
      return $(), J(i, {
        header: K(Ie)("nt.style.spacing.header"),
        key: "spacing"
      }, {
        default: M(() => [D("div", Vh, [D("p", {
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
const ct = {
  visTypeName: 999,
  mainPanelTooltip: 910,
  visHover: 900,
  aiming: 900,
  panel: 900
}, Ut = {
  mainPanelTooltip: "body",
  trackBallPanel: ".layout-tool-panel"
}, Lh = {
  class: "flex flex-row gap-0"
}, on = /* @__PURE__ */ P({
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
      const u = gn, c = bn, p = Zn;
      return $(), N("div", Lh, [K(r) ? ($(!0), N(Oe, {
        key: 0
      }, gt(K(o), (v) => ($(), J(c, {
        content: v.label,
        key: v.value,
        "popup-container": Ut.mainPanelTooltip,
        style: re({
          "z-index": ct.mainPanelTooltip
        })
      }, {
        default: M(() => [f(u, {
          size: "small",
          type: "outline",
          status: K(n) === v.value ? "success" : void 0,
          onClick: (h) => a(v.value)
        }, {
          icon: M(() => [D("span", {
            class: V(v.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content", "popup-container", "style"]))), 128)) : ($(!0), N(Oe, {
        key: 1
      }, gt(K(o), (v) => ($(), J(p, {
        key: v.value,
        checked: K(n) === v.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => a(v.value)
      }, {
        default: M(() => [ze(xe(v.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function ln(e) {
  const {
    propertyName: t,
    options: n
  } = e, o = m(void 0), l = d(() => St(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), r = Il(e.propertyName);
  ve(r, () => {
    if (!$e.value)
      return;
    const i = Ar($e.value, t);
    o.value = i;
  }, {
    immediate: !0
  });
  function a() {
    eo({
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
const Dh = /* @__PURE__ */ P({
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
      const i = Gf;
      return $(), J(i, {
        class: "justify-self-start",
        modelValue: K(n),
        "onUpdate:modelValue": a[0] || (a[0] = (s) => Rn(n) ? n.value = s : null),
        "checked-value": K(o).checkedValue,
        "unchecked-value": K(o).uncheckedValue,
        onChange: K(l)
      }, null, 8, ["modelValue", "checked-value", "unchecked-value", "onChange"]);
    };
  }
});
function Ah(e) {
  const {
    propertyName: t,
    options: n
  } = e, o = m(void 0), l = Il(e.propertyName);
  ve(l, () => {
    if (!$e.value)
      return;
    const a = Ar($e.value, t);
    o.value = a;
  }, {
    immediate: !0
  });
  function r() {
    eo({
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
    const n = e, o = t, l = d(() => n.label ?? n.keyId), r = hh(n.keyId);
    function a() {
      Bh(n.keyId), o("reset");
    }
    const i = d(() => r.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, u) => {
      const c = Pr;
      return $(), J(c, {
        "popup-container": Ut.mainPanelTooltip,
        content: K(Ie)("nt.property-reset-confirm"),
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: a,
        style: re({
          "z-index": ct.mainPanelTooltip
        })
      }, {
        default: M(() => [D("div", {
          class: "px-2",
          style: re(i.value)
        }, [D("span", {
          class: V(["item-title text-capitalize", {
            "bg-gray-300": K(r)
          }])
        }, xe(l.value), 3)], 4)]),
        _: 1
      }, 8, ["popup-container", "content", "style"]);
    };
  }
}), jh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Fh = /* @__PURE__ */ P({
  __name: "Layout",
  setup(e) {
    const t = Xn($e), n = ln({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), o = t.getFlexBoxInfo(n.value), l = ln({
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
    }), r = d(() => l.value.value === "row" ? Ie("nt.style.layout.align-title-byRow") : Ie("nt.style.layout.align-title-byCol")), a = d(() => l.value.value === "row" ? [{
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
    }]), i = ln({
      propertyName: "align-items",
      options: a
    }), s = d(() => l.value.value === "row" ? Ie("nt.style.layout.justify-title-byRow") : Ie("nt.style.layout.justify-title-byCol")), u = d(() => l.value.value === "row" ? [{
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
    }]), c = ln({
      propertyName: "justify-content",
      options: u
    }), p = Ah({
      propertyName: "flex-wrap",
      options: {
        checkedValue: "wrap",
        uncheckedValue: "nowrap"
      }
    });
    return (v, h) => {
      const _ = Et;
      return $(), J(_, {
        header: K(Ie)("nt.style.layout.header"),
        key: "layout"
      }, {
        default: M(() => [D("div", jh, [f(nt, {
          keyId: "display",
          label: K(Ie)("nt.style.layout.display-label")
        }, null, 8, ["label"]), f(on, {
          model: K(n)
        }, null, 8, ["model"]), K(o).isFlex ? ($(), N(Oe, {
          key: 0
        }, [f(nt, {
          keyId: "flex-direction",
          label: K(Ie)("nt.style.layout.direction")
        }, null, 8, ["label"]), f(on, {
          model: K(l)
        }, null, 8, ["model"]), f(nt, {
          keyId: "flex-wrap",
          label: K(Ie)("nt.style.layout.wrap-label")
        }, null, 8, ["label"]), f(Dh, {
          model: K(p)
        }, null, 8, ["model"]), f(nt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(on, {
          model: K(c)
        }, null, 8, ["model"]), f(nt, {
          keyId: "align-items",
          label: r.value
        }, null, 8, ["label"]), f(on, {
          model: K(i)
        }, null, 8, ["model"])], 64)) : pe("", !0)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Mh = /* @__PURE__ */ et(Fh, [["__scopeId", "data-v-ebec49a9"]]), Kh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Rh = /* @__PURE__ */ P({
  __name: "FlexItem",
  setup(e) {
    const n = Xn($e).getParentFlexBoxInfo(), o = d(() => n.value.direction === "row" ? {
      title: Ie("nt.style.flexitem.title.vertical"),
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
      title: Ie("nt.style.flexitem.title.horizontal"),
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
    }), l = ln({
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
      const i = Et;
      return K(n).isFlex ? ($(), J(i, {
        header: K(Ie)("nt.style.flexitem.header"),
        key: "flex-item"
      }, {
        default: M(() => [D("div", Kh, [f(nt, {
          keyId: "align-self",
          label: o.value.title
        }, null, 8, ["label"]), f(on, {
          model: K(l)
        }, null, 8, ["model"])])]),
        _: 1
      }, 8, ["header"])) : pe("", !0);
    };
  }
});
const Hh = /* @__PURE__ */ et(Rh, [["__scopeId", "data-v-ef8fe436"]]);
const Wh = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, Zt = /* @__PURE__ */ P({
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
    } = t.model, u = m(null);
    function c(v, h) {
      var _;
      h.currentTarget === h.target && (i(v), a(), (_ = u.value) == null || _.blur());
    }
    function p(v) {
      s(v), a();
    }
    return (v, h) => {
      const _ = wl, C = Gd;
      return $(), N("div", Wh, [f(_, {
        ref_key: "inputRef",
        ref: u,
        size: "mini",
        modelValue: K(n),
        "onUpdate:modelValue": h[0] || (h[0] = (w) => Rn(n) ? n.value = w : null),
        placeholder: K(l),
        onChange: c
      }, null, 8, ["modelValue", "placeholder"]), f(C, {
        "popup-container": Ut.mainPanelTooltip,
        size: "mini",
        options: K(r),
        "model-value": K(o),
        onChange: p,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": M(() => h[1] || (h[1] = [])),
        _: 1
      }, 8, ["popup-container", "options", "model-value"])]);
    };
  }
});
function qh(e, t) {
  return e.styles.get(t);
}
function Yt(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: o
  } = e, l = m(t.input), r = m(t.select ?? (o == null ? void 0 : o.defaultOptionValue)), a = n.map((C) => typeof C == "string" ? {
    value: C,
    label: C
  } : C);
  function i(C) {
    return a.find((w) => w.value === C);
  }
  const s = m(null), u = d(() => {
    var C;
    return r.value ? (C = i(r.value)) == null ? void 0 : C.label : "";
  }), c = d(() => {
    if (r.value) {
      const C = i(r.value);
      return (C == null ? void 0 : C.value) ?? (C == null ? void 0 : C.label);
    }
    return "";
  }), p = Il(e.propertyName);
  ve(p, () => {
    const C = qh(Mr(), e.propertyName);
    if (C === void 0) {
      l.value = t.input, r.value = t.select;
      return;
    }
    const {
      number: w,
      unit: L
    } = rh(C);
    l.value = w, r.value = L;
  });
  function v() {
    const C = l.value, w = r.value;
    let L = "";
    w === "auto" ? L = w : L = `${C}${w}`, eo({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: L
      }
    });
  }
  function h(C) {
    Ha(r, l, o);
  }
  function _(C) {
    r.value = C, Wa(r, l, o);
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
      const r = ah();
      n.specialProperty === "width" ? t.value = `${r.width}` : n.specialProperty === "height" && (t.value = `${r.height}`);
    }
  }
}
const Gh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Uh = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], Zh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Yh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Xh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Jh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Qh = /* @__PURE__ */ P({
  __name: "Width",
  setup(e) {
    const n = Yt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Gh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "width",
      label: "Width",
      class: "nt-size-width-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const em = /* @__PURE__ */ et(Qh, [["__scopeId", "data-v-01e1e2dc"]]), tm = /* @__PURE__ */ P({
  __name: "Height",
  setup(e) {
    const n = Yt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Uh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "height",
      label: "Height",
      class: "nt-size-height-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const nm = /* @__PURE__ */ et(tm, [["__scopeId", "data-v-219d1f9b"]]), om = /* @__PURE__ */ P({
  __name: "MaxWidth",
  setup(e) {
    const n = Yt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Yh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "max-width",
      label: "Max W",
      class: "nt-size-max-width-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-max-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const lm = /* @__PURE__ */ et(om, [["__scopeId", "data-v-539b11de"]]), am = /* @__PURE__ */ P({
  __name: "MinWidth",
  setup(e) {
    const n = Yt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Zh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "min-width",
      label: "Min W",
      class: "nt-size-min-width-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-min-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const rm = /* @__PURE__ */ et(am, [["__scopeId", "data-v-df273eca"]]), im = /* @__PURE__ */ P({
  __name: "MaxHeight",
  setup(e) {
    const n = Yt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Jh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "max-height",
      label: "Max H",
      class: "nt-size-max-height-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-max-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const sm = /* @__PURE__ */ et(im, [["__scopeId", "data-v-97c693cb"]]), um = /* @__PURE__ */ P({
  __name: "MinHeight",
  setup(e) {
    const n = Yt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Xh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (o, l) => ($(), N(Oe, null, [f(nt, {
      "key-id": "min-height",
      label: "Min H",
      class: "nt-size-min-height-label"
    }), f(Zt, {
      model: K(n),
      class: "nt-size-min-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const cm = /* @__PURE__ */ et(um, [["__scopeId", "data-v-2eecce31"]]), dm = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, fm = /* @__PURE__ */ P({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const o = Et;
      return $(), J(o, {
        header: K(Ie)("nt.style.size.header"),
        key: "size"
      }, {
        default: M(() => [D("div", dm, [f(em), f(nm), f(rm), f(cm), f(lm), f(sm)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const pm = /* @__PURE__ */ et(fm, [["__scopeId", "data-v-c5aac6a8"]]);
function vm() {
  return {
    treeData: wh()
  };
}
const hm = {
  class: "relative"
}, mm = /* @__PURE__ */ P({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = m(null);
    function n(u) {
      const c = u[0];
      ch(c);
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
      v < 0 || $h(v);
    }
    function l(u) {
      kh();
    }
    ve(Mt(), (u) => {
      if (u || t.value.selectAll(!1), t.value && u) {
        const c = ht(u, Qn());
        if (c == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(c, !0);
      }
    });
    const r = m(!0), a = d(() => r.value ? "i-mdi-arrow-collapse-vertical" : "i-mdi-arrow-expand-vertical"), i = d(() => r.value ? Ie("tree.collapse_all") : Ie("tree.expand_all"));
    function s() {
      r.value = !r.value, t.value.expandAll(r.value), r.value || t.value.expandNode(-1, !r.value);
    }
    return (u, c) => {
      const p = ov, v = bn, h = qn;
      return $(), J(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: M(() => [D("div", hm, [f(p, {
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
          "popup-container": Ut.mainPanelTooltip,
          style: re({
            "z-index": ct.mainPanelTooltip
          })
        }, {
          default: M(() => [D("div", {
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
const ym = /* @__PURE__ */ et(mm, [["__scopeId", "data-v-0112a70c"]]);
function gm() {
  return {
    code: vh()
  };
}
const bm = {}, _m = {
  class: "border border-gray-300 border-solid p-2 rounded-md"
};
function Cm(e, t) {
  return $(), N("div", _m, [H(e.$slots, "default")]);
}
const $m = /* @__PURE__ */ et(bm, [["render", Cm]]), km = /* @__PURE__ */ P({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (o, l) => {
      const r = Nv;
      return $(), N("div", null, [l[0] || (l[0] = D("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "styles", -1)), f($m, null, {
        default: M(() => [f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: M(() => [ze(xe(K(n)), 1)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
});
let Zr;
function wm(e) {
  Zr = e;
}
let qa = 0;
const Yr = /* @__PURE__ */ new Map();
function Sm() {
  const e = qa;
  return qa++, e;
}
function Em(e, t) {
  const n = Sm();
  Yr.set(n, t);
  function o(l) {
    Zr("serverQuery", {
      method: e,
      handlerId: n,
      params: l
    });
  }
  return {
    query: o
  };
}
function Om(e, t) {
  e = parseInt(e);
  const n = Yr.get(e);
  if (n) {
    n(t);
    return;
  }
  throw new Error(`No handler found for id ${e}`);
}
const Xr = /* @__PURE__ */ P({
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
    const o = e, l = m(!1), r = n, a = m([]), i = m(!1), s = m(), u = m(), c = m(), p = ii(e, "inputVal"), v = Em("twSearch", (k) => {
      a.value = k;
    });
    Yv(p, (k) => {
      v.query({
        query: k
      });
    }, {
      debounce: 600
    });
    const h = {
      show() {
        l.value = !0, qe(() => {
          var k;
          (k = c.value) == null || k.focus();
        });
      },
      hide() {
        l.value = !1;
      }
    };
    document.addEventListener("click", (k) => {
      var F, j;
      if (!l.value)
        return;
      const y = k.target, b = (F = u.value) == null ? void 0 : F.contains(y);
      !((j = s.value) != null && j.contains(y)) && !b && _(p.value);
    }, {
      capture: !0
    });
    const _ = (k) => {
      r("confirm", k), o.clearValueWhenConfirm && (p.value = "", B = ""), h.hide();
    }, C = () => {
      _(p.value);
    };
    function w(k) {
      k !== void 0 && (p.value = k), i.value = !1, _(k === void 0 ? p.value : k);
    }
    function L() {
      i.value = !0;
    }
    let B = p.value;
    function E(k) {
      un(Mt().value, {
        add: k
      }), B = k;
    }
    function g(k) {
      un(Mt().value, {
        remove: k
      });
    }
    return t(h), (k, y) => {
      const b = rn;
      return $(), N("div", {
        ref_key: "root",
        ref: s
      }, [f(K(Cd), {
        onSelect: w,
        "popup-visible": i.value,
        position: "bottom",
        "auto-fit-position": "",
        trigger: "contextMenu",
        "hide-on-select": !1,
        "popup-container": Ut.trackBallPanel,
        style: re({
          zindex: ct.panel
        })
      }, {
        content: M(() => [D("div", {
          ref_key: "dropdownRef",
          ref: u
        }, [($(!0), N(Oe, null, gt(a.value, (A) => ($(), J(b, {
          key: A,
          onMouseenter: (F) => E(A),
          onMouseleave: (F) => g(A)
        }, {
          default: M(() => [ze(xe(A), 1)]),
          _: 2
        }, 1032, ["onMouseenter", "onMouseleave"]))), 128))], 512)]),
        default: M(() => [mt(f(K(wl), {
          ref_key: "inputRef",
          ref: c,
          class: "w-[10ch] absolute top-0 left-0 h-full",
          size: "mini",
          modelValue: p.value,
          "onUpdate:modelValue": y[0] || (y[0] = (A) => p.value = A),
          modelModifiers: {
            trim: !0
          },
          onKeyup: Ya(C, ["enter"]),
          onFocus: L
        }, null, 8, ["modelValue"]), [[yt, l.value]])]),
        _: 1
      }, 8, ["popup-visible", "popup-container", "style"])], 512);
    };
  }
}), Pm = {
  class: "w-fit relative"
}, Bm = /* @__PURE__ */ P({
  __name: "EditableTag",
  props: {
    tagKey: {},
    value: {}
  },
  emits: ["valueChange", "remove"],
  setup(e, {
    emit: t
  }) {
    const n = e, o = t, l = m(), r = m(!1), a = m(n.value), i = {
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
      const h = Zn;
      return $(), N("div", Pm, [f(Xr, {
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
        default: M(() => [ze(xe(a.value), 1)]),
        _: 1
      }, 8, ["style", "onClick"])]);
    };
  }
}), xm = {
  class: "w-fit relative flex items-center"
}, Tm = /* @__PURE__ */ P({
  __name: "AddableTag",
  emits: ["add"],
  setup(e, {
    emit: t
  }) {
    const n = m(), o = m(!1), l = t, r = {
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
    return (i, s) => ($(), N("div", xm, [f(Xr, {
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
}), Im = {
  class: "flex flex-wrap gap-4"
}, zm = /* @__PURE__ */ P({
  __name: "EditorArea",
  setup(e) {
    const t = d(() => Mr().classes);
    function n(r, a, i) {
      const s = [...t.value];
      s[r] = i, Qo({
        classes: s
      }), un(Mt().value, {
        change: {
          oldClass: a,
          newClass: i
        }
      });
    }
    function o(r) {
      const a = [...t.value];
      a.splice(r, 1), Qo({
        classes: a
      }), un(Mt().value, {
        remove: t.value[r]
      });
    }
    function l(r) {
      const a = [...t.value, r];
      Qo({
        classes: a
      }), un(Mt().value, {
        add: r
      });
    }
    return (r, a) => ($(), N("div", Im, [($(!0), N(Oe, null, gt(t.value, (i, s) => ($(), J(Bm, {
      key: i + s,
      tagKey: s,
      value: i,
      onValueChange: a[0] || (a[0] = (u) => n(u.key, u.oldValue, u.newValue)),
      onRemove: a[1] || (a[1] = (u) => o(u.key))
    }, null, 8, ["tagKey", "value"]))), 128)), f(Tm, {
      class: "nt-classes-add-tag",
      onAdd: a[2] || (a[2] = (i) => l(i.value))
    })]));
  }
}), Vm = {
  class: "flex flex-col gap-2"
}, Nm = /* @__PURE__ */ P({
  __name: "Code",
  setup(e) {
    const t = gm();
    return (n, o) => {
      const l = ee("Block");
      return $(), N("div", Vm, [D("div", null, [o[0] || (o[0] = D("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "classes", -1)), f(l, null, {
        default: M(() => [f(zm)]),
        _: 1
      })]), f(km, {
        model: K(t)
      }, null, 8, ["model"])]);
    };
  }
}), Jr = m(!1), Qr = m(""), Lm = {
  class: "nt-testing-content"
}, Dm = /* @__PURE__ */ P({
  __name: "TestingContent",
  setup(e) {
    return (t, n) => ($(), N("pre", Lm, xe(K(Qr)), 1));
  }
}), Am = {
  class: "bg-white/30 backdrop-blur-md"
}, jm = /* @__PURE__ */ P({
  __name: "MainPanel",
  setup(e) {
    Av($e);
    const t = d(() => !!$e.value), n = vm();
    return (o, l) => {
      const r = $f, a = In, i = qn, s = hp;
      return $(), N("div", Am, [f(s, {
        "default-active-key": "element-tree"
      }, {
        default: M(() => [f(a, {
          key: "style",
          title: K(Ie)("nt.mainPanel.style"),
          disabled: !t.value
        }, {
          default: M(() => [f(r, {
            accordion: ""
          }, {
            default: M(() => [f(Hh), f(Mh), f(Nh), f(pm)]),
            _: 1
          })]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "element-tree",
          title: K(Ie)("nt.mainPanel.navigator")
        }, {
          default: M(() => [f(ym, {
            model: K(n)
          }, null, 8, ["model"])]),
          _: 1
        }, 8, ["title"]), f(a, {
          key: "nicegui",
          title: K(Ie)("nt.mainPanel.code"),
          class: "x-panel-nicegui",
          disabled: !t.value
        }, {
          default: M(() => [f(Nm)]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "cusStyle",
          title: K(Ie)("nt.mainPanel.cusStyle")
        }, null, 8, ["title"]), K(Jr) ? ($(), J(a, {
          key: "testing",
          title: "testing"
        }, {
          default: M(() => [f(i, {
            style: {
              "max-height": "500px",
              overflow: "auto"
            }
          }, {
            default: M(() => [f(Dm)]),
            _: 1
          })]),
          _: 1
        })) : pe("", !0)]),
        _: 1
      })]);
    };
  }
});
const Fm = /* @__PURE__ */ et(jm, [["__scopeId", "data-v-fe8c1f8e"]]);
function Mm() {
  const e = Pe(Lr($e));
  Nr($e, () => {
    e.update();
  }, {
    attributes: !0
  }), Xe("scroll", e.update, !0);
  const t = d(() => $e.value ? {
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
  }), n = d(() => $e.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), o = d(() => $e.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), l = d(() => $e.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), r = d(() => $e.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), a = d(() => $e.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), i = d(() => $e.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), s = d(() => $e.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), u = d(() => $e.value ? {
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
function ei() {
  const {
    width: e,
    height: t
  } = xl(), n = d(() => `0 0 ${e.value} ${t.value}`), o = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: o
  };
}
const Km = ["viewBox"], Rm = /* @__PURE__ */ P({
  __name: "Aiming",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = ei(), {
      rectStyles: o,
      p1: l,
      p2: r,
      p3: a,
      p4: i,
      p5: s,
      p6: u,
      p7: c,
      p8: p
    } = Mm();
    return (v, h) => ($(), N("svg", {
      class: "vis-aiming",
      viewBox: K(t),
      version: "1.1",
      style: re([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [K(n), {
        "z-index": K(ct).aiming
      }]]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [D("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: re(K(o))
    }, null, 4), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(l), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, K(r), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(a), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, K(i), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(s), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, K(u), {
      r: "2"
    }), null, 16), D("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(c), {
      r: "2"
    }), null, 16), D("circle", ie({
      fill: "hotpink"
    }, K(p), {
      r: "2"
    }), null, 16)], 12, Km));
  }
});
const Hm = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, Wm = /* @__PURE__ */ P({
  __name: "Panel",
  setup(e) {
    const t = m(null), {
      style: n
    } = th(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), o = yh(), l = mh(), r = Ph();
    return (a, i) => {
      const s = Zn, u = Rf, c = gn, p = Wc, v = Pr, h = bn;
      return $(), N("div", {
        class: "non-selectable w-[350px]",
        style: re([[K(n), {
          zIndex: ct.panel
        }], {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [D("div", Hm, [D("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(u, {
        class: "h-full"
      }, {
        default: M(() => [i[0] || (i[0] = D("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), i[1] || (i[1] = D("span", {
          class: "font-bold"
        }, "toolkit", -1)), mt(f(s, {
          color: "green"
        }, {
          default: M(() => [ze(xe(K(o)), 1)]),
          _: 1
        }, 512), [[yt, K(l)]])]),
        _: 1
      })], 512), f(h, {
        content: K(Ie)("nt.apply_command_tooltip")
      }, {
        default: M(() => [f(v, {
          "popup-container": Ut.mainPanelTooltip,
          content: K(Ie)("nt.apply_command_confirm"),
          "ok-text": "Apply",
          "cancel-text": "No",
          position: "bottom",
          onOk: K(Oh),
          style: re({
            "z-index": ct.mainPanelTooltip
          })
        }, {
          default: M(() => [mt(f(p, {
            count: 9,
            dot: "",
            dotStyle: {
              width: "10px",
              height: "10px"
            },
            class: "nt-apply-command"
          }, {
            default: M(() => [f(c, {
              shape: "circle",
              size: "mini"
            }, {
              default: M(() => i[2] || (i[2] = [D("div", {
                class: "i-codicon-git-stash-apply text-1xl"
              }, null, -1)])),
              _: 1
            })]),
            _: 1
          }, 512), [[yt, K(r)]])]),
          _: 1
        }, 8, ["popup-container", "content", "onOk", "style"])]),
        _: 1
      }, 8, ["content"]), f(h, {
        content: K(Ie)("nt.jump2code")
      }, {
        default: M(() => [mt(f(c, {
          shape: "circle",
          size: "mini",
          onClick: K(Eh)
        }, {
          default: M(() => i[3] || (i[3] = [D("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[yt, K(l)]])]),
        _: 1
      }, 8, ["content"])]), H(a.$slots, "default"), H(a.$slots, "footer")], 4);
    };
  }
});
function qm() {
  const {
    width: e,
    height: t
  } = xl(), n = Pe(Lr(st));
  Xe("scroll", n.update, !0);
  const o = d(() => st.value ? {
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
  }), l = d(() => st.value ? {
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
    rectStyles: o,
    topLine: l,
    rightLine: r,
    bottomLine: a,
    leftLine: i
  };
}
const Gm = ["viewBox"], en = "red", Um = /* @__PURE__ */ P({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = ei(), {
      rectStyles: o,
      topLine: l,
      rightLine: r,
      bottomLine: a,
      leftLine: i
    } = qm();
    return (s, u) => ($(), N("svg", {
      class: "vis-hover",
      viewBox: K(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: re([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [K(n), {
        "z-index": K(ct).visHover
      }]])
    }, [D("rect", {
      fill: "none",
      stroke: en,
      "stroke-width": "1",
      style: re(K(o))
    }, null, 4), D("line", ie({
      class: "top"
    }, K(l), {
      stroke: en,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "right"
    }, K(r), {
      stroke: en,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "bottom"
    }, K(a), {
      stroke: en,
      "stroke-dasharray": "3 2"
    }), null, 16), D("line", ie({
      class: "left"
    }, K(i), {
      stroke: en,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, Gm));
  }
});
function Zm(e, t) {
  const {
    width: n
  } = xl(), {
    x: o,
    y: l
  } = Dr({
    type: "client"
  }), r = d(() => {
    let s = o.value, u = l.value;
    return n.value - o.value < 10 && (s -= 10), l.value < 10 && (u += 10), {
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
    typeName: d(() => t.value ? Tl(t.value, e) : null),
    typeNameTagStyles: a
  };
}
function Ym(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: ht(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const Xm = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function Ga(e, t) {
  if (!Xm.has(Tl(e, t)))
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
function Jm(e, t) {
  function n(s) {
    s.selectTarget && l(s.selectTarget.id), s.serverResetCommand && r(s.serverResetCommand.propertyName), s.trackRecord && a(s.trackRecord), s.testing && i(s.testing);
  }
  function o(s, u) {
    return window.getComputedStyle(Ua(s, e), null).getPropertyValue(u);
  }
  function l(s) {
    const u = Ua(s, e);
    t.value = u;
  }
  function r(s) {
    fh(s);
  }
  function a(s) {
    Ch(s.hasChanged);
  }
  function i(s) {
    s.isTesting !== void 0 && (Jr.value = s.isTesting), s.content !== void 0 && (Qr.value = s.content);
  }
  return {
    queryStyle: o,
    sendMessage: n
  };
}
async function Qm(e) {
  if (!e)
    return;
  const {
    loadResource: t
  } = await import("../../static/utils/resources.js"), n = window.path_prefix;
  await t(n + `${e}/trackBall.css`);
}
const ey = /* @__PURE__ */ P({
  __name: "VisTypeName",
  setup(e) {
    const {
      typeNameTagStyles: t,
      typeName: n
    } = Zm(Qn(), st);
    return (o, l) => ($(), N("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: re([K(t), {
        zIndex: K(ct).visTypeName
      }])
    }, xe(K(n)), 5));
  }
}), ny = /* @__PURE__ */ P({
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
    wm(l);
    function r(i) {
      const s = $e.value;
      if (!s)
        return;
      const u = ht(s, o.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      l("setCommand", {
        id: u,
        commands: i
      });
    }
    function a(i) {
      const s = $e.value;
      if (!s)
        return;
      const u = ht(s, o.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      l("resetCommand", {
        id: u,
        commands: i
      });
    }
    return Ae(async () => {
      await Qm(o.resource_path), l("init");
    }), Sh({
      selectorConfig: o.selectorConfig,
      languageConfig: o.languageConfig,
      elementTreeData: o.elementTreeData,
      emitSetCommandFn: r,
      emitResetCommandFn: a,
      emitJumpSourceCodeFn: () => {
        const i = $e.value;
        if (!i)
          return;
        const s = ht(i, o.selectorConfig);
        if (!s)
          throw new Error("not found selected element");
        l("jumpSourceCode", {
          id: s
        });
      },
      emitApplyCommandFn: () => {
        l("applyCommand");
      },
      emitClassesUpdateFn: (i) => {
        l("classesUpdate", i);
      }
    }), ve(() => o.currentTargetContext, () => {
      ph(o.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    }), ve(st, (i) => {
      if (i) {
        const s = ht(i, o.selectorConfig);
        l("hoverChange", {
          id: s
        });
        return;
      }
      l("hoverChange", {
        id: null
      });
    }), ve($e, (i) => {
      const s = {
        isFlex: !1,
        direction: null
      };
      if (i) {
        const u = ht(i, o.selectorConfig), c = Ym(i, o.selectorConfig);
        let p = {
          isFlex: !1,
          direction: null
        };
        c && (p = Ga(c.dom, o.selectorConfig)), l("selectedChange", {
          id: u,
          parentBoxId: c !== null ? c.id : null,
          flexInfo: Ga(i, o.selectorConfig),
          parentFlexInfo: p
        });
        return;
      }
      l("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: s,
        parentFlexInfo: s
      });
    }), t({
      ...Jm(o.selectorConfig, $e),
      twSearch: (i, s) => {
        Om(i, s);
      }
    }), (i, s) => ($(), J(Za, {
      to: "body"
    }, [f(Um), f(Rm), f(Wm, null, {
      default: M(() => [H(i.$slots, "header"), f(Fm), H(i.$slots, "footer")]),
      _: 3
    }), f(ey)]));
  }
});
export {
  ny as default
};
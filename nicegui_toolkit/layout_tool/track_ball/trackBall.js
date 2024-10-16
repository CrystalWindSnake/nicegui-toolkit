const m = Vue.ref
const Oe = Vue.reactive
const Ue = Vue.inject
const d = Vue.computed
const gt = Vue.getCurrentInstance
const Vn = Vue.cloneVNode
const I = Vue.defineComponent
const fe = Vue.watch
const Ae = Vue.onMounted
const Wl = Vue.onUnmounted
const $ = Vue.openBlock
const V = Vue.createElementBlock
const L = Vue.normalizeClass
const J = Vue.renderSlot
const re = Vue.normalizeStyle
const A = Vue.createElementVNode
const he = Vue.resolveComponent
const X = Vue.createBlock
const pe = Vue.createCommentVNode
const So = Vue.toRef
const ge = Vue.toRefs
const f = Vue.createVNode
const ie = Vue.mergeProps
const Ne = Vue.createTextVNode
const Ke = Vue.nextTick
const Ot = Vue.provide
const xe = Vue.Fragment
const Aa = Vue.createSlots
const Z = Vue.withCtx
const at = Vue.withModifiers
const ft = Vue.onUpdated
const Ht = Vue.onBeforeUnmount
const un = Vue.readonly
const jr = Vue.onDeactivated
const Fa = Vue.Teleport
const Ln = Vue.Transition
const ut = Vue.withDirectives
const ct = Vue.vShow
const Lt = Vue.resolveDynamicComponent
const Be = Vue.toDisplayString
const St = Vue.renderList
const Mr = Vue.TransitionGroup
const Dn = Vue.watchEffect
const lo = Vue.isVNode
const Kr = Vue.Comment
const zt = Vue.h
const ql = Vue.normalizeProps
const oo = Vue.withKeys
const ja = Vue.createApp
const kt = Vue.toValue
const K = Vue.unref
const An = Vue.isRef
const Rr = Vue.customRef
const Hr = Vue.getCurrentScope
const Wr = Vue.onScopeDispose
const xt = Object.prototype.toString;
function Me(e) {
  return xt.call(e) === "[object Array]";
}
function cn(e) {
  return xt.call(e) === "[object Null]";
}
function jt(e) {
  return xt.call(e) === "[object Boolean]";
}
function De(e) {
  return xt.call(e) === "[object Object]";
}
const Eo = (e) => xt.call(e) === "[object Promise]";
function Pt(e) {
  return xt.call(e) === "[object String]";
}
function $e(e) {
  return xt.call(e) === "[object Number]" && e === e;
}
function je(e) {
  return e === void 0;
}
function Ge(e) {
  return typeof e == "function";
}
function qr(e) {
  return De(e) && Object.keys(e).length === 0;
}
const Ma = (e) => (e == null ? void 0 : e.$) !== void 0, Bt = Symbol("ArcoConfigProvider"), yn = {
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
}, Gr = {
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
  calendar: yn,
  datePicker: {
    view: yn.view,
    month: yn.month,
    week: yn.week,
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
}, Ur = m("zh-CN"), Yr = Oe({
  "zh-CN": Gr
}), ao = () => {
  const e = Ue(Bt, void 0), t = d(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : Yr[Ur.value];
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
var Zr = Object.defineProperty, Xr = Object.defineProperties, Jr = Object.getOwnPropertyDescriptors, Oo = Object.getOwnPropertySymbols, Qr = Object.prototype.hasOwnProperty, ei = Object.prototype.propertyIsEnumerable, xo = (e, t, n) => t in e ? Zr(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ti = (e, t) => {
  for (var n in t || (t = {}))
    Qr.call(t, n) && xo(e, n, t[n]);
  if (Oo)
    for (var n of Oo(t))
      ei.call(t, n) && xo(e, n, t[n]);
  return e;
}, ni = (e, t) => Xr(e, Jr(t));
const li = "A", oi = "arco", Gl = "$arco", Re = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : li;
}, He = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[Gl] = ni(ti({}, (n = e.config.globalProperties[Gl]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, Y = (e) => {
  var t, n, l;
  const o = gt(), r = Ue(Bt, void 0), a = (l = (n = r == null ? void 0 : r.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[Gl]) == null ? void 0 : t.classPrefix) != null ? l : oi;
  return e ? `${a}-${e}` : a;
};
var Ka = function() {
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
}(), Ul = typeof window < "u" && typeof document < "u" && window.document === document, xn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ai = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(xn) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ri = 2;
function ii(e, t) {
  var n = !1, l = !1, o = 0;
  function r() {
    n && (n = !1, e()), l && i();
  }
  function a() {
    ai(r);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < ri)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    o = s;
  }
  return i;
}
var si = 20, ui = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ci = typeof MutationObserver < "u", di = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ii(this.refresh.bind(this), si);
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
      !Ul || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ci ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ul || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = ui.some(function(r) {
        return !!~l.indexOf(r);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ra = function(e, t) {
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
  return t || xn;
}, Ha = Fn(0, 0, 0, 0);
function Pn(e) {
  return parseFloat(e) || 0;
}
function Po(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var r = e["border-" + o + "-width"];
    return l + Pn(r);
  }, 0);
}
function fi(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var r = o[l], a = e["padding-" + r];
    n[r] = Pn(a);
  }
  return n;
}
function vi(e) {
  var t = e.getBBox();
  return Fn(0, 0, t.width, t.height);
}
function pi(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Ha;
  var l = Mt(e).getComputedStyle(e), o = fi(l), r = o.left + o.right, a = o.top + o.bottom, i = Pn(l.width), s = Pn(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + r) !== t && (i -= Po(l, "left", "right") + r), Math.round(s + a) !== n && (s -= Po(l, "top", "bottom") + a)), !mi(e)) {
    var u = Math.round(i + r) - t, c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (i -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Fn(o.left, o.top, i, s);
}
var hi = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Mt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Mt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function mi(e) {
  return e === Mt(e).document.documentElement;
}
function yi(e) {
  return Ul ? hi(e) ? vi(e) : pi(e) : Ha;
}
function gi(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return Ra(a, {
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
function Fn(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var bi = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Fn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), _i = (
  /** @class */
  function() {
    function e(t, n) {
      var l = gi(n);
      Ra(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), Ci = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new Ka(), typeof t != "function")
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
        n.has(t) || (n.set(t, new bi(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new _i(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Wa = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ka(), qa = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = di.getInstance(), l = new Ci(t, n, this);
      Wa.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  qa.prototype[e] = function() {
    var t;
    return (t = Wa.get(this))[e].apply(t, arguments);
  };
});
var ro = function() {
  return typeof xn.ResizeObserver < "u" ? xn.ResizeObserver : qa;
}(), Bo;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Bo || (Bo = {}));
var To;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(To || (To = {}));
const jn = (e) => !!(e && e.shapeFlag & 1), dn = (e, t) => !!(e && e.shapeFlag & 6), $i = (e, t) => !!(e && e.shapeFlag & 8), io = (e, t) => !!(e && e.shapeFlag & 16), Ga = (e, t) => !!(e && e.shapeFlag & 32), Dt = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (jn(l) || dn(l))
        return l;
      if (io(l, l.children)) {
        const o = Dt(l.children);
        if (o)
          return o;
      } else if (Ga(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const r = Dt(o);
          if (r)
            return r;
        }
      } else if (Me(l)) {
        const o = Dt(l);
        if (o)
          return o;
      }
    }
}, ki = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, Ua = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (jn(l) || dn(l)) {
        const r = Ge(t) ? t(l) : t;
        return e[n] = Vn(l, r, !0), !0;
      }
      const o = so(l);
      if (o && o.length > 0 && Ua(o, t))
        return !0;
    }
  return !1;
}, so = (e) => {
  if (io(e, e.children))
    return e.children;
  if (Me(e))
    return e;
}, Ya = (e) => {
  var t, n;
  if (jn(e))
    return e.el;
  if (dn(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Ya(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = so(e);
    return Za(l);
  }
}, Za = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Ya(t);
      if (n)
        return n;
    }
}, $n = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const r of e ?? [])
    jn(r) || dn(r) || t && $i(r, r.children) ? o.push(r) : io(r, r.children) ? o.push(...$n(r.children, t)) : Ga(r, r.children) ? o.push(...$n((l = (n = r.children).default) == null ? void 0 : l.call(n), t)) : Me(r) && o.push(...$n(r, t));
  return o;
}, Xa = (e, t) => {
  var n;
  const l = [];
  if (dn(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...Xa(e.component.subTree, t));
  else {
    const o = so(e);
    o && l.push(...Ja(o, t));
  }
  return l;
}, Ja = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...Xa(l, t));
  return n;
};
var on = I({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = m(), r = d(() => Ma(o.value) ? o.value.$el : o.value), a = (s) => {
      s && (l = new ro((u) => {
        const c = u[0];
        t("resize", c);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return fe(r, (s) => {
      l && i(), s && a(s);
    }), Ae(() => {
      r.value && a(r.value);
    }), Wl(() => {
      i();
    }), () => {
      var s, u;
      const c = Dt((u = (s = n.default) == null ? void 0 : s.call(n)) != null ? u : []);
      return c ? Vn(c, {
        ref: o
      }, !0) : null;
    };
  }
});
const Qa = typeof window > "u" ? global : window, er = Qa.requestAnimationFrame, Bn = Qa.cancelAnimationFrame;
function Yl(e) {
  let t = 0;
  const n = (...l) => {
    t && Bn(t), t = er(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    Bn(t), t = 0;
  }, n;
}
const uo = () => {
}, wi = () => {
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
}, co = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), At = (() => co ? uo : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), Tn = (() => co ? uo : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), Si = (e, t) => {
  var n;
  return co ? uo() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Io = (e, t) => {
  if (Pt(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return Si(n, t);
  }
  return e;
}, Ei = (e, t) => {
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
const Oi = I({
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
function xi(e, t, n, l, o, r) {
  return $(), V("span", {
    class: L([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [J(e.$slots, "default")], 2);
}
var Qe = /* @__PURE__ */ ce(Oi, [["render", xi]]);
const Pi = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Bi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ti = /* @__PURE__ */ A("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), Ii = [Ti];
function zi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ii, 14, Bi);
}
var Yn = /* @__PURE__ */ ce(Pi, [["render", zi]]);
const fn = Object.assign(Yn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Yn.name, Yn);
  }
}), Ni = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Vi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Li = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Di = [Li];
function Ai(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Di, 14, Vi);
}
var Zn = /* @__PURE__ */ ce(Ni, [["render", Ai]]);
const Fi = Object.assign(Zn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Zn.name, Zn);
  }
}), ji = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Mi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ki = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ri = [Ki];
function Hi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ri, 14, Mi);
}
var Xn = /* @__PURE__ */ ce(ji, [["render", Hi]]);
const fo = Object.assign(Xn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Xn.name, Xn);
  }
}), Wi = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), qi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Gi = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ui = [Gi];
function Yi(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Ui, 14, qi);
}
var Jn = /* @__PURE__ */ ce(Wi, [["render", Yi]]);
const tr = Object.assign(Jn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Jn.name, Jn);
  }
}), Zi = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Xi = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ji = /* @__PURE__ */ A("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Qi = [Ji];
function es(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Qi, 14, Xi);
}
var Qn = /* @__PURE__ */ ce(Zi, [["render", es]]);
const nr = Object.assign(Qn, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Qn.name, Qn);
  }
}), Kt = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], ts = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ns = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ls = /* @__PURE__ */ A("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), os = [ls];
function as(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, os, 14, ns);
}
var el = /* @__PURE__ */ ce(ts, [["render", as]]);
const dt = Object.assign(el, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + el.name, el);
  }
}), rs = I({
  name: "FeedbackIcon",
  components: {
    IconLoading: dt,
    IconCheckCircleFill: fo,
    IconExclamationCircleFill: tr,
    IconCloseCircleFill: nr
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
function is(e, t, n, l, o, r) {
  const a = he("icon-loading"), i = he("icon-check-circle-fill"), s = he("icon-exclamation-circle-fill"), u = he("icon-close-circle-fill");
  return $(), V("span", {
    class: L(e.cls)
  }, [e.type === "validating" ? ($(), X(a, {
    key: 0
  })) : e.type === "success" ? ($(), X(i, {
    key: 1
  })) : e.type === "warning" ? ($(), X(s, {
    key: 2
  })) : e.type === "error" ? ($(), X(u, {
    key: 3
  })) : pe("v-if", !0)], 2);
}
var vo = /* @__PURE__ */ ce(rs, [["render", is]]);
const po = {
  key: "Enter",
  code: "Enter"
}, ss = {
  key: "Backspace",
  code: "Backspace"
};
var us = Object.defineProperty, zo = Object.getOwnPropertySymbols, cs = Object.prototype.hasOwnProperty, ds = Object.prototype.propertyIsEnumerable, No = (e, t, n) => t in e ? us(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, fs = (e, t) => {
  for (var n in t || (t = {}))
    cs.call(t, n) && No(e, n, t[n]);
  if (zo)
    for (var n of zo(t))
      ds.call(t, n) && No(e, n, t[n]);
  return e;
};
const Wt = (e, t) => {
  const n = fs({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function ho(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const vs = Symbol("ArcoFormItemContext"), vt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Ue(vs, {}), r = d(() => {
    var c;
    return (c = e == null ? void 0 : e.value) != null ? c : o.size;
  }), a = d(() => (t == null ? void 0 : t.value) || o.disabled), i = d(() => (n == null ? void 0 : n.value) || o.error), s = So(o, "feedback"), u = So(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: r,
    mergedDisabled: a,
    mergedError: i,
    feedback: s,
    eventHandlers: u
  };
}, pt = (e, {
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
function ps(e) {
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
var hs = Object.defineProperty, Vo = Object.getOwnPropertySymbols, ms = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, Lo = (e, t, n) => t in e ? hs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Do = (e, t) => {
  for (var n in t || (t = {}))
    ms.call(t, n) && Lo(e, n, t[n]);
  if (Vo)
    for (var n of Vo(t))
      ys.call(t, n) && Lo(e, n, t[n]);
  return e;
}, nn = I({
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
    } = ge(e), s = Y("input"), u = m(), {
      mergedSize: c,
      mergedDisabled: v,
      mergedError: p,
      feedback: h,
      eventHandlers: g
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), {
      mergedSize: C
    } = pt(c), [k, N] = ps(u), B = m(e.defaultValue), E = d(() => {
      var q;
      return (q = e.modelValue) != null ? q : B.value;
    });
    fe(i, (q) => {
      (je(q) || cn(q)) && (B.value = "");
    });
    let y = E.value;
    const w = m(!1), b = d(() => e.allowClear && !e.readonly && !v.value && !!E.value), _ = m(!1), F = m(""), j = (q) => {
      var P;
      return Ge(e.wordLength) ? e.wordLength(q) : (P = q.length) != null ? P : 0;
    }, D = d(() => j(E.value)), O = d(() => p.value || !!(De(e.maxLength) && e.maxLength.errorOnly && D.value > H.value)), R = d(() => De(e.maxLength) && !!e.maxLength.errorOnly), H = d(() => De(e.maxLength) ? e.maxLength.length : e.maxLength), ee = d(() => {
      const q = j("a");
      return Math.floor(H.value / q);
    }), ne = (q) => {
      var P, W;
      H.value && !R.value && j(q) > H.value && (q = (W = (P = e.wordSlice) == null ? void 0 : P.call(e, q, H.value)) != null ? W : q.slice(0, ee.value)), B.value = q, t("update:modelValue", q);
    }, oe = (q) => {
      u.value && q.target !== u.value && (q.preventDefault(), u.value.focus());
    }, x = (q, P) => {
      var W, de;
      q !== y && (y = q, t("change", q, P), (de = (W = g.value) == null ? void 0 : W.onChange) == null || de.call(W, P));
    }, G = (q) => {
      var P, W;
      w.value = !0, y = E.value, t("focus", q), (W = (P = g.value) == null ? void 0 : P.onFocus) == null || W.call(P, q);
    }, me = (q) => {
      var P, W;
      w.value = !1, x(E.value, q), t("blur", q), (W = (P = g.value) == null ? void 0 : P.onBlur) == null || W.call(P, q);
    }, le = (q) => {
      var P, W, de;
      const {
        value: we,
        selectionStart: Ee,
        selectionEnd: Je
      } = q.target;
      if (q.type === "compositionend") {
        if (_.value = !1, F.value = "", H.value && !R.value && D.value >= H.value && j(we) > H.value && Ee === Je) {
          se();
          return;
        }
        ne(we), t("input", we, q), (W = (P = g.value) == null ? void 0 : P.onInput) == null || W.call(P, q), se();
      } else
        _.value = !0, F.value = E.value + ((de = q.data) != null ? de : "");
    }, se = () => {
      k(), Ke(() => {
        u.value && E.value !== u.value.value && (u.value.value = E.value, N());
      });
    }, Se = (q) => {
      var P, W;
      const {
        value: de
      } = q.target;
      if (!_.value) {
        if (H.value && !R.value && D.value >= H.value && j(de) > H.value && q.inputType === "insertText") {
          se();
          return;
        }
        ne(de), t("input", de, q), (W = (P = g.value) == null ? void 0 : P.onInput) == null || W.call(P, q), se();
      }
    }, be = (q) => {
      ne(""), x("", q), t("clear", q);
    }, ye = (q) => {
      const P = q.key || q.code;
      !_.value && P === po.key && (x(E.value, q), t("pressEnter", q));
    }, ue = d(() => [`${s}-outer`, `${s}-outer-size-${C.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: v.value
    }]), ke = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: O.value,
      [`${s}-disabled`]: v.value,
      [`${s}-focus`]: w.value
    }]), tt = d(() => [s, `${s}-size-${C.value}`]), Te = d(() => Wt(l, Kt)), Fe = d(() => ho(l, Kt)), We = d(() => {
      const q = Do(Do({}, Fe.value), e.inputAttrs);
      return O.value && (q["aria-invalid"] = !0), q;
    }), Ve = (q) => {
      var P;
      return f("span", ie({
        class: ke.value,
        onMousedown: oe
      }, q ? void 0 : Te.value), [n.prefix && f("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), f("input", ie({
        ref: u,
        class: tt.value,
        value: E.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: v.value,
        onInput: Se,
        onKeydown: ye,
        onFocus: G,
        onBlur: me,
        onCompositionstart: le,
        onCompositionupdate: le,
        onCompositionend: le
      }, We.value), null), b.value && f(Qe, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: be
      }, {
        default: () => [f(fn, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!h.value) && f("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: h.value
        }]
      }, [!!e.maxLength && e.showWordLimit && f("span", {
        class: `${s}-word-limit`
      }, [D.value, Ne("/"), H.value]), (P = n.suffix) == null ? void 0 : P.call(n), !!h.value && f(vo, {
        type: h.value
      }, null)])]);
    };
    return {
      inputRef: u,
      render: () => n.prepend || n.append ? f("span", ie({
        class: ue.value
      }, Te.value), [n.prepend && f("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), Ve(!0), n.append && f("span", {
        class: `${s}-append`
      }, [n.append()])]) : Ve()
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
const gs = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), bs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], _s = /* @__PURE__ */ A("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), Cs = [_s];
function $s(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Cs, 14, bs);
}
var tl = /* @__PURE__ */ ce(gs, [["render", $s]]);
const Zl = Object.assign(tl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + tl.name, tl);
  }
}), lr = Symbol("ArcoButtonGroup"), ks = I({
  name: "Button",
  components: {
    IconLoading: dt
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
    } = ge(e), o = Y("btn"), r = Ue(lr, void 0), a = d(() => {
      var h;
      return (h = n.value) != null ? h : r == null ? void 0 : r.size;
    }), i = d(() => !!(l.value || r != null && r.disabled)), {
      mergedSize: s,
      mergedDisabled: u
    } = vt({
      size: a,
      disabled: i
    }), {
      mergedSize: c
    } = pt(s), v = d(() => {
      var h, g, C, k, N, B;
      return [o, `${o}-${(g = (h = e.type) != null ? h : r == null ? void 0 : r.type) != null ? g : "secondary"}`, `${o}-shape-${(k = (C = e.shape) != null ? C : r == null ? void 0 : r.shape) != null ? k : "square"}`, `${o}-size-${c.value}`, `${o}-status-${(B = (N = e.status) != null ? N : r == null ? void 0 : r.status) != null ? B : "normal"}`, {
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
}), ws = ["href"], Ss = ["type", "disabled"];
function Es(e, t, n, l, o, r) {
  const a = he("icon-loading");
  return e.href ? ($(), V("a", {
    key: 0,
    class: L([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: L(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), X(a, {
    key: 0,
    spin: "true"
  })) : J(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), J(e.$slots, "default")], 10, ws)) : ($(), V("button", {
    key: 1,
    class: L([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: L(`${e.prefixCls}-icon`)
  }, [e.loading ? ($(), X(a, {
    key: 0,
    spin: !0
  })) : J(e.$slots, "icon", {
    key: 1
  })], 2)) : pe("v-if", !0), J(e.$slots, "default")], 10, Ss));
}
var nl = /* @__PURE__ */ ce(ks, [["render", Es]]);
const Os = I({
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
    } = ge(e), a = Y("btn-group");
    return Ot(lr, Oe({
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
function xs(e, t, n, l, o, r) {
  return $(), V("div", {
    class: L(e.prefixCls)
  }, [J(e.$slots, "default")], 2);
}
var ll = /* @__PURE__ */ ce(Os, [["render", xs]]);
const Mn = Object.assign(nl, {
  Group: ll,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + nl.name, nl), e.component(n + ll.name, ll);
  }
});
var ol = I({
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
    } = ge(e), o = Y("input-search"), {
      mergedSize: r
    } = pt(l), a = m(), i = (v) => {
      a.value.inputRef && t("search", a.value.inputRef.value, v);
    }, s = () => {
      var v;
      return f(xe, null, [e.loading ? f(dt, null, null) : f(Qe, {
        onClick: i
      }, {
        default: () => [f(Zl, null, null)]
      }), (v = n.suffix) == null ? void 0 : v.call(n)]);
    }, u = () => {
      var v;
      let p = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
        default: (v = n["button-default"]) != null ? v : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : p = {
        icon: () => f(Zl, null, null)
      }, f(Mn, ie({
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
const Ps = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Bs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ts = /* @__PURE__ */ A("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), Is = /* @__PURE__ */ A("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), zs = [Ts, Is];
function Ns(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, zs, 14, Bs);
}
var al = /* @__PURE__ */ ce(Ps, [["render", Ns]]);
const Vs = Object.assign(al, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + al.name, al);
  }
}), Ls = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ds = ["stroke-width", "stroke-linecap", "stroke-linejoin"], As = /* @__PURE__ */ A("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), Fs = /* @__PURE__ */ A("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), js = [As, Fs];
function Ms(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, js, 14, Ds);
}
var rl = /* @__PURE__ */ ce(Ls, [["render", Ms]]);
const Ks = Object.assign(rl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + rl.name, rl);
  }
});
function Rs(e) {
  const t = m(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function In(e, t) {
  const {
    value: n
  } = ge(t), [l, o] = Rs(je(n.value) ? e : n.value);
  return fe(n, (a) => {
    je(a) && o(void 0);
  }), [d(() => je(n.value) ? l.value : n.value), o, l];
}
const Hs = I({
  name: "InputPassword",
  components: {
    IconEye: Vs,
    IconEyeInvisible: Ks,
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
    } = ge(e), o = m(), r = () => {
      s(!a.value);
    }, [a, i] = In(l.value, Oe({
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
function Ws(e, t, n, l, o, r) {
  const a = he("icon-eye"), i = he("icon-eye-invisible"), s = he("a-icon-hover"), u = he("a-input");
  return $(), X(u, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, Aa({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: Z(() => [J(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: Z(() => [J(e.$slots, "prefix")])
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
    }, 8, ["onClick"])) : pe("v-if", !0), J(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: Z(() => [J(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var il = /* @__PURE__ */ ce(Hs, [["render", Ws]]);
const qs = I({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: Y("input-group")
    };
  }
});
function Gs(e, t, n, l, o, r) {
  return $(), V("div", {
    class: L(e.prefixCls)
  }, [J(e.$slots, "default")], 2);
}
var sl = /* @__PURE__ */ ce(qs, [["render", Gs]]);
const Kn = Object.assign(nn, {
  Search: ol,
  Password: il,
  Group: sl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + nn.name, nn), e.component(n + sl.name, sl), e.component(n + ol.name, ol), e.component(n + il.name, il);
  }
});
var Us = Object.defineProperty, Ao = Object.getOwnPropertySymbols, Ys = Object.prototype.hasOwnProperty, Zs = Object.prototype.propertyIsEnumerable, Fo = (e, t, n) => t in e ? Us(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jt = (e, t) => {
  for (var n in t || (t = {}))
    Ys.call(t, n) && Fo(e, n, t[n]);
  if (Ao)
    for (var n of Ao(t))
      Zs.call(t, n) && Fo(e, n, t[n]);
  return e;
};
const Xs = () => {
  const {
    height: e,
    width: t
  } = wi();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, jo = (e, t) => {
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
}, Js = (e) => {
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
}, gn = (e, t) => {
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
}, Qs = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: r,
  translate: a
}) => {
  const i = Js(e), s = Xs(), u = {
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
      s.height - (n.top + v.top + o.height) > 0 && (c = gn(e, "bottom"), t.top = v.top);
    }
  if (i === "bottom" && u.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const v = Qt("top", l, o, {
        offset: r,
        translate: a
      });
      n.top + v.top > 0 && (c = gn(e, "top"), t.top = v.top);
    }
  if (i === "left" && u.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const v = Qt("right", l, o, {
        offset: r,
        translate: a
      });
      s.width - (n.left + v.left + o.width) > 0 && (c = gn(e, "right"), t.left = v.left);
    }
  if (i === "right" && u.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const v = Qt("left", l, o, {
        offset: r,
        translate: a
      });
      n.left + v.left > 0 && (c = gn(e, "left"), t.left = v.left);
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
  const a = (r = Me(o) ? o : o[e]) != null ? r : [0, 0];
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
}, eu = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, tu = (e, t, n, l, {
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
    const v = Qs(e, u, {
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
}, nu = (e, t, n, {
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
}, lu = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, Mo = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    lu(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, or = () => {
  const e = {}, t = m(), n = () => {
    const l = Za(e.value);
    l !== t.value && (t.value = l);
  };
  return Ae(() => n()), ft(() => n()), {
    children: e,
    firstElement: t
  };
};
var Xl = I({
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
    } = or();
    let r;
    const a = (s) => {
      s && (r = new ro((u) => {
        const c = u[0];
        t("resize", c);
      }), r.observe(s));
    }, i = () => {
      r && (r.disconnect(), r = null);
    };
    return fe(o, (s) => {
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
  return ft(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const Ko = Symbol("ArcoTrigger"), ou = 1e3, au = 5e3, ru = 1;
class iu {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || au : Array.from(this.popupStack.popup).pop() || ou) + ru, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const ul = new iu();
function su(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = m(0), o = () => {
    l.value = ul.add(e);
  }, r = () => {
    ul.delete(l.value, e);
  }, a = () => e === "dialog" ? ul.isLastDialog(l.value) : !1;
  return fe(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : r();
  }, {
    immediate: !0
  }), n && (Ae(() => {
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
const uu = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new ro((r) => {
        const a = r[0];
        Ge(t) && t(a);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var cu = I({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = m(!1);
    return Ae(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const du = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = m(e.value), r = m(), a = () => {
    const i = Io(e.value), s = i ? e.value : n, u = i ?? (l ? document.documentElement : Io(n));
    s !== o.value && (o.value = s), u !== r.value && (r.value = u);
  };
  return Ae(() => a()), fe(t, (i) => {
    o.value !== e.value && i && a();
  }), {
    teleportContainer: o,
    containerRef: r
  };
};
var fu = Object.defineProperty, vu = Object.defineProperties, pu = Object.getOwnPropertyDescriptors, Ro = Object.getOwnPropertySymbols, hu = Object.prototype.hasOwnProperty, mu = Object.prototype.propertyIsEnumerable, Ho = (e, t, n) => t in e ? fu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yu = (e, t) => {
  for (var n in t || (t = {}))
    hu.call(t, n) && Ho(e, n, t[n]);
  if (Ro)
    for (var n of Ro(t))
      mu.call(t, n) && Ho(e, n, t[n]);
  return e;
}, gu = (e, t) => vu(e, pu(t));
const bu = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var cl = I({
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
    } = ge(e), r = Y("trigger"), a = d(() => Wt(l, bu)), i = Ue(Bt, void 0), s = d(() => [].concat(e.trigger)), u = /* @__PURE__ */ new Set(), c = Ue(Ko, void 0), {
      children: v,
      firstElement: p
    } = or(), h = m(), g = m(e.defaultPopupVisible), C = m(e.position), k = m({}), N = m({}), B = m({}), E = m(), y = m({
      top: 0,
      left: 0
    });
    let w = null, b = null;
    const _ = d(() => {
      var S;
      return (S = e.popupVisible) != null ? S : g.value;
    }), {
      teleportContainer: F,
      containerRef: j
    } = du({
      popupContainer: o,
      visible: _,
      documentContainer: !0
    }), {
      zIndex: D
    } = su("popup", {
      visible: _
    });
    let O = 0, R = !1, H = !1;
    const ee = () => {
      O && (window.clearTimeout(O), O = 0);
    }, ne = (S) => {
      if (e.alignPoint) {
        const {
          pageX: z,
          pageY: te
        } = S;
        y.value = {
          top: te,
          left: z
        };
      }
    }, oe = () => {
      if (!p.value || !h.value || !j.value)
        return;
      const S = j.value.getBoundingClientRect(), z = e.alignPoint ? {
        top: y.value.top,
        bottom: y.value.top,
        left: y.value.left,
        right: y.value.left,
        scrollTop: y.value.top,
        scrollBottom: y.value.top,
        scrollLeft: y.value.left,
        scrollRight: y.value.left,
        width: 0,
        height: 0
      } : jo(p.value, S), te = () => jo(h.value, S), Ye = te(), {
        style: qe,
        position: rt
      } = tu(e.position, S, z, Ye, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (N.value = {
        transformOrigin: eu(rt)
      }), e.autoFitPopupMinWidth ? qe.minWidth = `${z.width}px` : e.autoFitPopupWidth && (qe.width = `${z.width}px`), C.value !== rt && (C.value = rt), k.value = qe, e.showArrow && Ke(() => {
        B.value = nu(rt, z, te(), {
          customStyle: e.arrowStyle
        });
      });
    }, x = (S, z) => {
      if (S === _.value && O === 0)
        return;
      const te = () => {
        g.value = S, t("update:popupVisible", S), t("popupVisibleChange", S), S && Ke(() => {
          oe();
        });
      };
      S || (w = null, b = null), z ? (ee(), S !== _.value && (O = window.setTimeout(te, z))) : te();
    }, G = (S) => {
      var z;
      (z = l.onClick) == null || z.call(l, S), !(e.disabled || _.value && !e.clickToClose) && (s.value.includes("click") ? (ne(S), x(!_.value)) : s.value.includes("contextMenu") && _.value && x(!1));
    }, me = (S) => {
      var z;
      (z = l.onMouseenter) == null || z.call(l, S), !(e.disabled || !s.value.includes("hover")) && (ne(S), x(!0, e.mouseEnterDelay));
    }, le = (S) => {
      c == null || c.onMouseenter(S), me(S);
    }, se = (S) => {
      var z;
      (z = l.onMouseleave) == null || z.call(l, S), !(e.disabled || !s.value.includes("hover")) && x(!1, e.mouseLeaveDelay);
    }, Se = (S) => {
      c == null || c.onMouseleave(S), se(S);
    }, be = (S) => {
      var z;
      (z = l.onFocusin) == null || z.call(l, S), !(e.disabled || !s.value.includes("focus")) && x(!0, e.focusDelay);
    }, ye = (S) => {
      var z;
      (z = l.onFocusout) == null || z.call(l, S), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && x(!1);
    }, ue = (S) => {
      var z;
      (z = l.onContextmenu) == null || z.call(l, S), !(e.disabled || !s.value.includes("contextMenu") || _.value && !e.clickToClose) && (ne(S), x(!_.value), S.preventDefault());
    };
    Ot(Ko, Oe({
      onMouseenter: le,
      onMouseleave: Se,
      addChildRef: (S) => {
        u.add(S), c == null || c.addChildRef(S);
      },
      removeChildRef: (S) => {
        u.delete(S), c == null || c.removeChildRef(S);
      }
    }));
    const Te = () => {
      Tn(document.documentElement, "mousedown", Ve), R = !1;
    }, Fe = it(n, "content"), We = d(() => {
      var S;
      return e.hideEmpty && ki((S = Fe.value) == null ? void 0 : S.call(Fe));
    }), Ve = (S) => {
      var z, te, Ye;
      if (!((z = p.value) != null && z.contains(S.target) || (te = h.value) != null && te.contains(S.target))) {
        for (const qe of u)
          if ((Ye = qe.value) != null && Ye.contains(S.target))
            return;
        Te(), x(!1);
      }
    }, Ze = (S, z) => {
      const [te, Ye] = S, {
        scrollTop: qe,
        scrollLeft: rt
      } = z;
      return Math.abs(qe - te) >= e.scrollToCloseDistance || Math.abs(rt - Ye) >= e.scrollToCloseDistance;
    }, q = Yl((S) => {
      if (_.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const z = S.target;
          w || (w = [z.scrollTop, z.scrollLeft]), Ze(w, z) ? x(!1) : oe();
        } else
          oe();
    }), P = () => {
      Tn(window, "scroll", W), H = !1;
    }, W = Yl((S) => {
      const z = S.target.documentElement;
      b || (b = [z.scrollTop, z.scrollLeft]), Ze(b, z) && (x(!1), P());
    }), de = () => {
      _.value && oe();
    }, we = () => {
      de(), t("resize");
    }, Ee = (S) => {
      e.preventFocus && S.preventDefault();
    };
    c == null || c.addChildRef(h);
    const Je = d(() => _.value ? e.openedClass : void 0);
    let ze;
    fe(_, (S) => {
      if (e.clickOutsideToClose && (!S && R ? Te() : S && !R && (At(document.documentElement, "mousedown", Ve), R = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (At(window, "scroll", W), H = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (S) {
          ze = Mo(p.value);
          for (const z of ze)
            z.addEventListener("scroll", q);
        } else if (ze) {
          for (const z of ze)
            z.removeEventListener("scroll", q);
          ze = void 0;
        }
      }
      S && (Ct.value = !0);
    }), fe(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      _.value && oe();
    });
    const {
      createResizeObserver: _t,
      destroyResizeObserver: Ut
    } = uu({
      elementRef: j,
      onResize: de
    });
    Ae(() => {
      if (_t(), _.value && (oe(), e.clickOutsideToClose && !R && (At(document.documentElement, "mousedown", Ve), R = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        ze = Mo(p.value);
        for (const S of ze)
          S.addEventListener("scroll", q);
      }
    }), ft(() => {
      _.value && oe();
    }), jr(() => {
      x(!1);
    }), Ht(() => {
      if (c == null || c.removeChildRef(h), Ut(), R && Te(), H && P(), ze) {
        for (const S of ze)
          S.removeEventListener("scroll", q);
        ze = void 0;
      }
    });
    const Ct = m(_.value), ot = m(!1), Tt = () => {
      ot.value = !0;
    }, Yt = () => {
      ot.value = !1, _.value && t("show");
    }, T = () => {
      ot.value = !1, _.value || (Ct.value = !1, t("hide"));
    };
    return () => {
      var S, z;
      return v.value = (z = (S = n.default) == null ? void 0 : S.call(n)) != null ? z : [], Ua(v.value, {
        class: Je.value,
        onClick: G,
        onMouseenter: me,
        onMouseleave: se,
        onFocusin: be,
        onFocusout: ye,
        onContextmenu: ue
      }), f(xe, null, [e.autoFixPosition ? f(Xl, {
        onResize: we
      }, {
        default: () => [v.value]
      }) : v.value, f(cu, null, {
        default: () => [f(Fa, {
          to: F.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || _.value || Ct.value) && !We.value && f(Xl, {
            onResize: de
          }, {
            default: () => [f("div", ie({
              ref: h,
              class: [`${r}-popup`, `${r}-position-${C.value}`],
              style: gu(yu({}, k.value), {
                zIndex: D.value,
                pointerEvents: ot.value ? "none" : "auto"
              }),
              "trigger-placement": C.value,
              onMouseenter: le,
              onMouseleave: Se,
              onMousedown: Ee
            }, a.value), [f(Ln, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: Tt,
              onAfterEnter: Yt,
              onBeforeLeave: Tt,
              onAfterLeave: T
            }, {
              default: () => {
                var te;
                return [ut(f("div", {
                  class: `${r}-popup-wrapper`,
                  style: N.value
                }, [f("div", {
                  class: [`${r}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(te = n.content) == null ? void 0 : te.call(n)]), e.showArrow && f("div", {
                  ref: E,
                  class: [`${r}-arrow`, e.arrowClass],
                  style: B.value
                }, null)]), [[ct, _.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const an = Object.assign(cl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + cl.name, cl);
  }
}), _u = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Cu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], $u = /* @__PURE__ */ A("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), ku = [$u];
function wu(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, ku, 14, Cu);
}
var dl = /* @__PURE__ */ ce(_u, [["render", wu]]);
const Su = Object.assign(dl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + dl.name, dl);
  }
});
var fl = I({
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
    } = ao(), r = Ue(Bt, void 0);
    return () => {
      var a, i, s, u;
      return !e.inConfigProvider && (r != null && r.slots.empty) && !(t.image || e.imgSrc || e.description) ? r.slots.empty({
        component: "empty"
      }) : f("div", ie({
        class: l
      }, n), [f("div", {
        class: `${l}-image`
      }, [(i = (a = t.image) == null ? void 0 : a.call(t)) != null ? i : e.imgSrc ? f("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : f(Su, null, null)]), f("div", {
        class: `${l}-description`
      }, [(u = (s = t.default) == null ? void 0 : s.call(t)) != null ? u : e.description || o("empty.description")])]);
    };
  }
});
const Eu = Object.assign(fl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + fl.name, fl);
  }
}), Ou = 5;
var xu = I({
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
      }, [Array(Ou).fill(1).map((l, o) => f("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), vl = I({
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
          return Vn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(xu, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : f(dt, {
        spin: !0,
        size: e.size
      }, null);
    }, a = () => {
      var i, s, u;
      const c = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, v = !!((i = t.tip) != null ? i : e.tip);
      return f(xe, null, [!e.hideIcon && f("div", {
        class: `${n}-icon`,
        style: c
      }, [r()]), v && f("div", {
        class: `${n}-tip`
      }, [(u = (s = t.tip) == null ? void 0 : s.call(t)) != null ? u : e.tip])]);
    };
    return () => f("div", {
      class: o.value
    }, [t.default ? f(xe, null, [t.default(), e.loading && f("div", {
      class: `${n}-mask`
    }, [f("div", {
      class: `${n}-mask-icon`
    }, [a()])])]) : a()]);
  }
});
const Pu = Object.assign(vl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + vl.name, vl);
  }
}), Bu = I({
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
      var B, E;
      return {
        [a.value.size]: `${(E = (B = e.data) == null ? void 0 : B.thumbSize) != null ? E : 0}px`,
        [a.value.direction]: `${i.value}px`
      };
    }), v = (B) => {
      B.preventDefault(), r.value && (u.value = B[a.value.client] - r.value.getBoundingClientRect()[a.value.direction], s.value = !0, At(window, "mousemove", g), At(window, "mouseup", C), At(window, "contextmenu", C));
    }, p = (B) => {
      var E, y, w, b;
      if (B.preventDefault(), r.value) {
        const _ = h(B[a.value.client] > r.value.getBoundingClientRect()[a.value.direction] ? i.value + ((y = (E = e.data) == null ? void 0 : E.thumbSize) != null ? y : 0) : i.value - ((b = (w = e.data) == null ? void 0 : w.thumbSize) != null ? b : 0));
        _ !== i.value && (i.value = _, t("scroll", _));
      }
    }, h = (B) => B < 0 ? 0 : e.data && B > e.data.max ? e.data.max : B, g = (B) => {
      if (o.value && r.value) {
        const E = h(B[a.value.client] - o.value.getBoundingClientRect()[a.value.direction] - u.value);
        E !== i.value && (i.value = E, t("scroll", E));
      }
    }, C = () => {
      s.value = !1, Tn(window, "mousemove", g), Tn(window, "mouseup", C);
    }, k = (B) => {
      s.value || (B = h(B), B !== i.value && (i.value = B));
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
      setOffset: k
    };
  }
});
function Tu(e, t, n, l, o, r) {
  return $(), X(Ln, null, {
    default: Z(() => [A("div", {
      ref: "trackRef",
      class: L([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = at((...a) => e.handleTrackClick && e.handleTrackClick(...a), ["self"]))
    }, [A("div", {
      ref: "thumbRef",
      class: L(e.thumbCls),
      style: re(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...a) => e.handleThumbMouseDown && e.handleThumbMouseDown(...a))
    }, [A("div", {
      class: L(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var Iu = /* @__PURE__ */ ce(Bu, [["render", Tu]]);
const Wo = 20, bn = 15, zu = I({
  name: "Scrollbar",
  components: {
    ResizeObserver: Xl,
    Thumb: Iu
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
      var y, w, b, _, F, j;
      if (l.value) {
        const {
          clientWidth: D,
          clientHeight: O,
          offsetWidth: R,
          offsetHeight: H,
          scrollWidth: ee,
          scrollHeight: ne,
          scrollTop: oe,
          scrollLeft: x
        } = l.value;
        s.value = ee > D, u.value = ne > O, p.value = c.value && v.value;
        const G = e.type === "embed" && p.value ? R - bn : R, me = e.type === "embed" && p.value ? H - bn : H, le = Math.round(G / Math.min(ee / D, G / Wo)), se = G - le, Se = (ee - D) / se, be = Math.round(me / Math.min(ne / O, me / Wo)), ye = me - be, ue = (ne - O) / ye;
        if (o.value = {
          ratio: Se,
          thumbSize: le,
          max: se
        }, r.value = {
          ratio: ue,
          thumbSize: be,
          max: ye
        }, oe > 0) {
          const ke = Math.round(oe / ((w = (y = r.value) == null ? void 0 : y.ratio) != null ? w : 1));
          (b = i.value) == null || b.setOffset(ke);
        }
        if (x > 0) {
          const ke = Math.round(x / ((F = (_ = r.value) == null ? void 0 : _.ratio) != null ? F : 1));
          (j = a.value) == null || j.setOffset(ke);
        }
      }
    };
    Ae(() => {
      h();
    });
    const g = () => {
      h();
    }, C = (y) => {
      var w, b, _, F, j, D;
      if (l.value) {
        if (c.value && !e.disableHorizontal) {
          const O = Math.round(l.value.scrollLeft / ((b = (w = o.value) == null ? void 0 : w.ratio) != null ? b : 1));
          (_ = a.value) == null || _.setOffset(O);
        }
        if (v.value && !e.disableVertical) {
          const O = Math.round(l.value.scrollTop / ((j = (F = r.value) == null ? void 0 : F.ratio) != null ? j : 1));
          (D = i.value) == null || D.setOffset(O);
        }
      }
      t("scroll", y);
    }, k = (y) => {
      var w, b;
      l.value && l.value.scrollTo({
        left: y * ((b = (w = o.value) == null ? void 0 : w.ratio) != null ? b : 1)
      });
    }, N = (y) => {
      var w, b;
      l.value && l.value.scrollTo({
        top: y * ((b = (w = r.value) == null ? void 0 : w.ratio) != null ? b : 1)
      });
    }, B = d(() => {
      const y = {};
      return e.type === "track" && (c.value && (y.paddingBottom = `${bn}px`), v.value && (y.paddingRight = `${bn}px`)), [y, e.outerStyle];
    }), E = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: p.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: E,
      style: B,
      containerRef: l,
      horizontalThumbRef: a,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: r,
      isBoth: p,
      hasHorizontalScrollbar: c,
      hasVerticalScrollbar: v,
      handleResize: g,
      handleScroll: C,
      handleHorizontalScroll: k,
      handleVerticalScroll: N
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      De(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
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
function Nu(e, t, n, l, o, r) {
  const a = he("ResizeObserver"), i = he("thumb");
  return $(), V("div", {
    class: L(e.cls),
    style: re(e.style)
  }, [f(a, {
    onResize: e.handleResize
  }, {
    default: Z(() => [A("div", ie({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(a, {
      onResize: e.handleResize
    }, {
      default: Z(() => [J(e.$slots, "default")]),
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
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0), !e.hide && e.hasVerticalScrollbar ? ($(), X(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : pe("v-if", !0)], 6);
}
var pl = /* @__PURE__ */ ce(zu, [["render", Nu]]);
const mo = Object.assign(pl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + pl.name, pl);
  }
}), Vu = (e) => {
  const t = m(), n = () => Ma(t.value) ? t.value.$refs[e] : t.value, l = m();
  return Ae(() => {
    l.value = n();
  }), fe([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var Lu = Object.defineProperty, qo = Object.getOwnPropertySymbols, Du = Object.prototype.hasOwnProperty, Au = Object.prototype.propertyIsEnumerable, Go = (e, t, n) => t in e ? Lu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Fu = (e, t) => {
  for (var n in t || (t = {}))
    Du.call(t, n) && Go(e, n, t[n]);
  if (qo)
    for (var n of qo(t))
      Au.call(t, n) && Go(e, n, t[n]);
  return e;
};
const ju = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return Fu({
        type: "embed"
      }, jt(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, Mu = I({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: mo,
    Empty: Eu,
    Spin: Pu
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
    } = ge(e), i = Y("select-dropdown"), s = Ue(Bt, void 0), u = (r = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : r[0], {
      componentRef: c,
      elementRef: v
    } = Vu("containerRef"), {
      displayScrollbar: p,
      scrollbarProps: h
    } = ju(a), g = (k) => {
      const {
        scrollTop: N,
        scrollHeight: B,
        offsetHeight: E
      } = k.target;
      B - (N + E) <= e.bottomOffset && t("reachBottom", k), t("scroll", k);
    }, C = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: u,
      cls: C,
      wrapperRef: v,
      wrapperComRef: c,
      handleScroll: g,
      displayScrollbar: p,
      scrollbarProps: h
    };
  }
});
function Ku(e, t, n, l, o, r) {
  const a = he("spin");
  return $(), V("div", {
    class: L(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? ($(), V("div", {
    key: 0,
    class: L(`${e.prefixCls}-header`)
  }, [J(e.$slots, "header")], 2)) : pe("v-if", !0), e.loading ? ($(), X(a, {
    key: 1,
    class: L(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? ($(), V("div", {
    key: 2,
    class: L(`${e.prefixCls}-empty`)
  }, [J(e.$slots, "empty", {}, () => [($(), X(Lt(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : pe("v-if", !0), e.virtualList && !e.loading && !e.empty ? J(e.$slots, "virtual-list", {
    key: 3
  }) : pe("v-if", !0), e.virtualList ? pe("v-if", !0) : ut(($(), X(Lt(e.displayScrollbar ? "ScrollbarComponent" : "div"), ie({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: Z(() => [A("ul", {
      class: L(`${e.prefixCls}-list`)
    }, [J(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[ct, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? ($(), V("div", {
    key: 5,
    class: L(`${e.prefixCls}-footer`)
  }, [J(e.$slots, "footer")], 2)) : pe("v-if", !0)], 2);
}
var Ru = /* @__PURE__ */ ce(Mu, [["render", Ku]]), Uo = I({
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
const ar = Symbol("ArcoCheckboxGroup");
var kn = I({
  name: "Checkbox",
  components: {
    IconCheck: Uo,
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
    } = ge(e), r = Y("checkbox"), a = m(), i = e.uninjectGroupContext ? void 0 : Ue(ar, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: u,
      eventHandlers: c
    } = vt({
      disabled: l
    }), v = m(e.defaultChecked), p = d(() => {
      var y;
      return s ? i == null ? void 0 : i.computedValue : (y = e.modelValue) != null ? y : v.value;
    }), h = d(() => {
      var y;
      return Me(p.value) ? p.value.includes((y = e.value) != null ? y : !0) : p.value;
    }), g = d(() => (i == null ? void 0 : i.disabled) || (u == null ? void 0 : u.value) || !h.value && (i == null ? void 0 : i.isMaxed)), C = (y) => {
      y.stopPropagation();
    }, k = (y) => {
      var w, b, _, F;
      const {
        checked: j
      } = y.target;
      let D = j;
      if (Me(p.value)) {
        const O = new Set(p.value);
        j ? O.add((w = e.value) != null ? w : !0) : O.delete((b = e.value) != null ? b : !0), D = Array.from(O);
      }
      v.value = j, s && Me(D) ? i == null || i.handleChange(D, y) : (t("update:modelValue", D), t("change", D, y), (F = (_ = c.value) == null ? void 0 : _.onChange) == null || F.call(_, y)), Ke(() => {
        a.value && a.value.checked !== h.value && (a.value.checked = h.value);
      });
    }, N = d(() => [r, {
      [`${r}-checked`]: h.value,
      [`${r}-indeterminate`]: e.indeterminate,
      [`${r}-disabled`]: g.value
    }]), B = (y) => {
      var w, b;
      (b = (w = c.value) == null ? void 0 : w.onFocus) == null || b.call(w, y);
    }, E = (y) => {
      var w, b;
      (b = (w = c.value) == null ? void 0 : w.onBlur) == null || b.call(w, y);
    };
    return fe(o, (y) => {
      (je(y) || cn(y)) && (v.value = !1);
    }), fe(p, (y) => {
      var w;
      let b;
      Me(y) ? b = y.includes((w = e.value) != null ? w : !0) : b = y, v.value !== b && (v.value = b), a.value && a.value.checked !== b && (a.value.checked = b);
    }), () => {
      var y, w, b, _;
      return f("label", {
        "aria-disabled": g.value,
        class: N.value
      }, [f("input", {
        ref: a,
        type: "checkbox",
        checked: h.value,
        value: e.value,
        class: `${r}-target`,
        disabled: g.value,
        onClick: C,
        onChange: k,
        onFocus: B,
        onBlur: E
      }, null), (_ = (b = (w = n.checkbox) != null ? w : (y = i == null ? void 0 : i.slots) == null ? void 0 : y.checkbox) == null ? void 0 : b({
        checked: h.value,
        disabled: g.value
      })) != null ? _ : f(Qe, {
        class: `${r}-icon-hover`,
        disabled: g.value || h.value
      }, {
        default: () => [f("div", {
          class: `${r}-icon`
        }, [h.value && f(Uo, {
          class: `${r}-icon-check`
        }, null)])]
      }), n.default && f("span", {
        class: `${r}-label`
      }, [n.default()])]);
    };
  }
}), hl = I({
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
    } = ge(e), o = Y("checkbox-group"), {
      mergedDisabled: r,
      eventHandlers: a
    } = vt({
      disabled: l
    }), i = m(e.defaultValue), s = d(() => Me(e.modelValue) ? e.modelValue : i.value), u = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), c = d(() => {
      var g;
      return ((g = e.options) != null ? g : []).map((C) => Pt(C) || $e(C) ? {
        label: C,
        value: C
      } : C);
    });
    Ot(ar, Oe({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: r,
      isMaxed: u,
      slots: n,
      handleChange: (g, C) => {
        var k, N;
        i.value = g, t("update:modelValue", g), t("change", g, C), (N = (k = a.value) == null ? void 0 : k.onChange) == null || N.call(k, C);
      }
    }));
    const p = d(() => [o, `${o}-direction-${e.direction}`]);
    fe(() => e.modelValue, (g) => {
      Me(g) ? i.value = [...g] : i.value = [];
    });
    const h = () => c.value.map((g) => {
      const C = s.value.includes(g.value);
      return f(kn, {
        key: g.value,
        value: g.value,
        disabled: g.disabled || !C && u.value,
        indeterminate: g.indeterminate,
        modelValue: C
      }, {
        default: () => [n.label ? n.label({
          data: g
        }) : Ge(g.label) ? g.label() : g.label]
      });
    });
    return () => {
      var g;
      return f("span", {
        class: p.value
      }, [c.value.length > 0 ? h() : (g = n.default) == null ? void 0 : g.call(n)]);
    };
  }
});
const rr = Object.assign(kn, {
  Group: hl,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + kn.name, kn), e.component(n + hl.name, hl);
  }
}), ir = Symbol("ArcoSelectContext");
var Hu = Object.defineProperty, Wu = Object.defineProperties, qu = Object.getOwnPropertyDescriptors, Yo = Object.getOwnPropertySymbols, Gu = Object.prototype.hasOwnProperty, Uu = Object.prototype.propertyIsEnumerable, Zo = (e, t, n) => t in e ? Hu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yo = (e, t) => {
  for (var n in t || (t = {}))
    Gu.call(t, n) && Zo(e, n, t[n]);
  if (Yo)
    for (var n of Yo(t))
      Uu.call(t, n) && Zo(e, n, t[n]);
  return e;
}, sr = (e, t) => Wu(e, qu(t));
const Yu = (e) => De(e) && "isGroup" in e, ur = (e) => De(e) && "isGroup" in e, Zu = (e, t = "value") => String(De(e) ? e[t] : e), rn = (e, t = "value") => De(e) ? `__arco__option__object__${e[t]}` : e || $e(e) || Pt(e) || jt(e) ? `__arco__option__${typeof e}-${e}` : "", Xu = (e) => e.has("__arco__option__string-"), Ju = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var r;
  if (De(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: rn(i, t),
      origin: l,
      value: i,
      label: (r = e[n.label]) != null ? r : Zu(i, t),
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
  return yo({
    raw: a,
    index: o,
    key: rn(e, t),
    origin: l
  }, a);
}, Jl = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var r;
  const a = [];
  for (const i of e)
    if (Yu(i)) {
      const s = Jl((r = i.options) != null ? r : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && a.push(sr(yo({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = Ju(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      a.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return a;
}, Xo = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var r;
    const a = [];
    for (const i of o)
      if (ur(i)) {
        const s = l((r = i.options) != null ? r : []);
        s.length > 0 && a.push(sr(yo({}, i), {
          options: s
        }));
      } else
        Rn(i, {
          inputValue: t,
          filterOption: n
        }) && a.push(i);
    return a;
  };
  return l(e);
}, Rn = (e, {
  inputValue: t,
  filterOption: n
}) => Ge(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, Qu = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!go(e[n], t[n]))
      return !1;
  return !0;
}, ec = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!go(e[l], t[l]))
      return !1;
  return !0;
}, go = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? Qu(e, t) : n === "[object Array]" ? ec(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, tc = I({
  name: "Option",
  components: {
    Checkbox: rr
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
    } = ge(e), o = Y("select-option"), r = Ue(ir, void 0), a = gt(), i = m(), s = m(n.value);
    fe(n, (b, _) => {
      go(b, _) || (s.value = b);
    });
    const u = m(""), c = d(() => {
      var b, _;
      return (_ = (b = e.value) != null ? b : e.label) != null ? _ : u.value;
    }), v = d(() => {
      var b;
      return (b = e.label) != null ? b : u.value;
    }), p = d(() => rn(c.value, r == null ? void 0 : r.valueKey)), h = d(() => {
      var b;
      return (b = r == null ? void 0 : r.component) != null ? b : "li";
    }), g = () => {
      var b;
      if (!e.label && i.value) {
        const _ = (b = i.value.textContent) != null ? b : "";
        u.value !== _ && (u.value = _);
      }
    };
    Ae(() => g()), ft(() => g());
    const C = d(() => {
      var b;
      return (b = r == null ? void 0 : r.valueKeys.includes(p.value)) != null ? b : !1;
    }), k = d(() => (r == null ? void 0 : r.activeKey) === p.value);
    let N = m(!0);
    if (!e.internal) {
      const b = Oe({
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
      N = d(() => Rn(b, {
        inputValue: r == null ? void 0 : r.inputValue,
        filterOption: r == null ? void 0 : r.filterOption
      })), a && (r == null || r.addSlotOptionInfo(a.uid, b)), Ht(() => {
        a && (r == null || r.removeSlotOptionInfo(a.uid));
      });
    }
    const B = (b) => {
      e.disabled || r == null || r.onSelect(p.value, b);
    }, E = () => {
      e.disabled || r == null || r.setActiveKey(p.value);
    }, y = () => {
      e.disabled || r == null || r.setActiveKey();
    }, w = d(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: C.value,
      [`${o}-active`]: k.value,
      [`${o}-multiple`]: r == null ? void 0 : r.multiple
    }]);
    return {
      prefixCls: o,
      cls: w,
      selectCtx: r,
      itemRef: i,
      component: h,
      isSelected: C,
      isValid: N,
      handleClick: B,
      handleMouseEnter: E,
      handleMouseLeave: y
    };
  }
});
function nc(e, t, n, l, o, r) {
  const a = he("checkbox");
  return ut(($(), X(Lt(e.component), {
    ref: "itemRef",
    class: L([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: Z(() => [e.$slots.icon ? ($(), V("span", {
      key: 0,
      class: L(`${e.prefixCls}-icon`)
    }, [J(e.$slots, "icon")], 2)) : pe("v-if", !0), e.selectCtx && e.selectCtx.multiple ? ($(), X(a, {
      key: 1,
      class: L(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: Z(() => [J(e.$slots, "default", {}, () => [Ne(Be(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : ($(), V("span", {
      key: 2,
      class: L(`${e.prefixCls}-content`)
    }, [J(e.$slots, "default", {}, () => [Ne(Be(e.label), 1)])], 2)), e.$slots.suffix ? ($(), V("span", {
      key: 3,
      class: L(`${e.prefixCls}-suffix`)
    }, [J(e.$slots, "suffix")], 2)) : pe("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[ct, e.isValid]]);
}
var wn = /* @__PURE__ */ ce(tc, [["render", nc]]), lc = Object.defineProperty, oc = Object.defineProperties, ac = Object.getOwnPropertyDescriptors, Jo = Object.getOwnPropertySymbols, rc = Object.prototype.hasOwnProperty, ic = Object.prototype.propertyIsEnumerable, Qo = (e, t, n) => t in e ? lc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ml = (e, t) => {
  for (var n in t || (t = {}))
    rc.call(t, n) && Qo(e, n, t[n]);
  if (Jo)
    for (var n of Jo(t))
      ic.call(t, n) && Qo(e, n, t[n]);
  return e;
}, sc = (e, t) => oc(e, ac(t));
const uc = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, cc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: r,
  fieldNames: a
}) => {
  const i = d(() => ml(ml({}, uc), a == null ? void 0 : a.value)), s = Oe(/* @__PURE__ */ new Map()), u = d(() => Array.from(s.values()).sort((E, y) => $e(E.index) && $e(y.index) ? E.index - y.index : 0)), c = d(() => {
    var E, y;
    const w = /* @__PURE__ */ new Map();
    return {
      optionInfos: Jl((E = e == null ? void 0 : e.value) != null ? E : [], {
        valueKey: (y = r == null ? void 0 : r.value) != null ? y : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: w
      }),
      optionInfoMap: w
    };
  }), v = d(() => {
    var E, y;
    const w = /* @__PURE__ */ new Map();
    return {
      optionInfos: Jl((E = t == null ? void 0 : t.value) != null ? E : [], {
        valueKey: (y = r == null ? void 0 : r.value) != null ? y : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: w
      }),
      optionInfoMap: w
    };
  }), p = Oe(/* @__PURE__ */ new Map());
  fe([u, e ?? m([]), t ?? m([]), r ?? m("value")], () => {
    p.clear(), u.value.forEach((E, y) => {
      p.set(E.key, sc(ml({}, E), {
        index: y
      }));
    }), c.value.optionInfoMap.forEach((E) => {
      p.has(E.key) || (E.index = p.size, p.set(E.key, E));
    }), v.value.optionInfoMap.forEach((E) => {
      p.has(E.key) || (E.index = p.size, p.set(E.key, E));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const h = d(() => {
    var E;
    const y = Xo(c.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((E = o == null ? void 0 : o.value) == null || E) && y.push(...Xo(v.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), y;
  }), g = d(() => Array.from(p.values()).filter((E) => E.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Rn(E, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), C = d(() => g.value.filter((E) => !E.disabled).map((E) => E.key));
  return {
    validOptions: h,
    optionInfoMap: p,
    validOptionInfos: g,
    enabledOptionKeys: C,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (E, y) => {
      s.set(E, y);
    },
    removeSlotOptionInfo: (E) => {
      s.delete(E);
    }
  };
}, _n = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, ea = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), dc = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = Pt(l) ? {
      key: l
    } : l;
    t[ea(o)] = n;
  }), (n) => {
    const l = ea({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, fc = ({
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
  virtualListRef: g,
  onSelect: C,
  onPopupVisibleChange: k,
  enterToOpen: N = !0,
  defaultActiveFirstOption: B
}) => {
  const {
    validOptions: E,
    optionInfoMap: y,
    validOptionInfos: w,
    enabledOptionKeys: b,
    getNextSlotOptionIndex: _,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: j
  } = cc({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: r,
    valueKey: i,
    fieldNames: s
  }), D = m();
  fe(b, (ne) => {
    (!D.value || !ne.includes(D.value)) && (D.value = ne[0]);
  });
  const O = (ne) => {
    D.value = ne;
  }, R = (ne) => {
    const oe = b.value.length;
    if (oe === 0)
      return;
    if (!D.value)
      return ne === "down" ? b.value[0] : b.value[oe - 1];
    const x = b.value.indexOf(D.value), G = (oe + x + (ne === "up" ? -1 : 1)) % oe;
    return b.value[G];
  }, H = (ne) => {
    var oe, x;
    g != null && g.value && g.value.scrollTo({
      key: ne
    });
    const G = y.get(ne), me = (oe = p == null ? void 0 : p.value) == null ? void 0 : oe.wrapperRef, le = (x = h == null ? void 0 : h.value[ne]) != null ? x : G == null ? void 0 : G.ref;
    if (!me || !le || me.scrollHeight === me.offsetHeight)
      return;
    const se = Ei(le, me), Se = me.scrollTop;
    se.top < 0 ? me.scrollTo(0, Se + se.top) : se.bottom < 0 && me.scrollTo(0, Se - se.bottom);
  };
  fe(c, (ne) => {
    var oe;
    if (ne) {
      const x = v.value[v.value.length - 1];
      let G = (oe = B == null ? void 0 : B.value) == null || oe ? b.value[0] : void 0;
      b.value.includes(x) && (G = x), G !== D.value && (D.value = G), Ke(() => {
        D.value && H(D.value);
      });
    }
  });
  const ee = dc(/* @__PURE__ */ new Map([[_n.ENTER, (ne) => {
    !(u != null && u.value) && !ne.isComposing && (c.value ? D.value && (C(D.value, ne), ne.preventDefault()) : N && (k(!0), ne.preventDefault()));
  }], [_n.ESC, (ne) => {
    c.value && (k(!1), ne.preventDefault());
  }], [_n.ARROW_DOWN, (ne) => {
    if (c.value) {
      const oe = R("down");
      oe && (D.value = oe, H(oe)), ne.preventDefault();
    }
  }], [_n.ARROW_UP, (ne) => {
    if (c.value) {
      const oe = R("up");
      oe && (D.value = oe, H(oe)), ne.preventDefault();
    }
  }]]));
  return Ot(ir, Oe({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: a,
    valueKeys: v,
    activeKey: D,
    setActiveKey: O,
    onSelect: C,
    getNextSlotOptionIndex: _,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: j
  })), {
    validOptions: E,
    optionInfoMap: y,
    validOptionInfos: w,
    enabledOptionKeys: b,
    activeKey: D,
    setActiveKey: O,
    addSlotOptionInfo: F,
    removeSlotOptionInfo: j,
    getNextActiveKey: R,
    scrollIntoView: H,
    handleKeyDown: ee
  };
}, vc = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const r = m(0), a = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = m(0), u = d(() => {
    const _ = s.value + o.value * 3;
    return _ > i.value ? i.value : _;
  }), c = d(() => {
    const _ = i.value - o.value * 3;
    return _ < 0 ? 0 : _;
  }), v = (_) => {
    _ < 0 ? s.value = 0 : _ > c.value ? s.value = c.value : s.value = _;
  }, p = m(n.value), h = d(() => l.value !== 30 ? l.value : r.value || l.value), g = (_, F) => {
    a.set(_, F);
  }, C = (_) => {
    var F;
    if (p.value)
      return h.value;
    const j = e.value[_];
    return (F = a.get(j)) != null ? F : h.value;
  }, k = (_) => a.has(_);
  Ae(() => {
    const _ = Array.from(a.values()).reduce((F, j) => F + j, 0);
    _ > 0 && (r.value = _ / a.size);
  });
  const N = (_) => p.value ? h.value * _ : B(0, _), B = (_, F) => {
    let j = 0;
    for (let D = _; D < F; D++)
      j += C(D);
    return j;
  }, E = d(() => p.value ? h.value * s.value : B(0, s.value)), y = (_) => {
    const F = _ >= E.value;
    let j = Math.abs(_ - E.value);
    const D = F ? s.value : s.value - 1;
    let O = 0;
    for (; j > 0; )
      j -= C(D + O), F ? O++ : O--;
    return O;
  }, w = (_) => {
    const F = y(_), j = s.value + F - o.value;
    return j < 0 ? 0 : j > c.value ? c.value : j;
  }, b = d(() => p.value ? h.value * (i.value - u.value) : B(u.value, i.value));
  return {
    frontPadding: E,
    behindPadding: b,
    start: s,
    end: u,
    getStartByScroll: w,
    setItemSize: g,
    hasItemSize: k,
    setStart: v,
    getScrollOffset: N
  };
};
var pc = I({
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
    const l = (n = gt()) == null ? void 0 : n.vnode.key, o = m(), r = () => {
      var a, i, s, u;
      const c = (i = (a = o.value) == null ? void 0 : a.$el) != null ? i : o.value, v = (u = (s = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : s.call(c).height) != null ? u : c == null ? void 0 : c.offsetHeight;
      v && e.setItemSize(l, v);
    };
    return Ae(() => r()), Ht(() => r()), () => {
      var a;
      const i = Dt((a = t.default) == null ? void 0 : a.call(t));
      return i ? Vn(i, {
        ref: o
      }, !0) : null;
    };
  }
}), hc = Object.defineProperty, ta = Object.getOwnPropertySymbols, mc = Object.prototype.hasOwnProperty, yc = Object.prototype.propertyIsEnumerable, na = (e, t, n) => t in e ? hc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gc = (e, t) => {
  for (var n in t || (t = {}))
    mc.call(t, n) && na(e, n, t[n]);
  if (ta)
    for (var n of ta(t))
      yc.call(t, n) && na(e, n, t[n]);
  return e;
};
const bc = I({
  name: "VirtualList",
  components: {
    VirtualListItem: pc
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
    } = ge(e), s = Y("virtual-list"), u = d(() => De(e.component) ? gc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), c = m(), v = m(), p = d(() => ({
      height: $e(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), h = d(() => n.value.map((D, O) => {
      var R;
      return (R = D[l.value]) != null ? R : O;
    })), {
      frontPadding: g,
      behindPadding: C,
      start: k,
      end: N,
      getStartByScroll: B,
      setItemSize: E,
      hasItemSize: y,
      setStart: w,
      getScrollOffset: b
    } = vc({
      dataKeys: h,
      contentRef: v,
      fixedSize: o,
      estimatedSize: r,
      buffer: a
    }), _ = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice(k.value, N.value)), F = (D) => {
      const {
        scrollTop: O,
        scrollHeight: R,
        offsetHeight: H
      } = D.target, ee = B(O);
      ee !== k.value && (w(ee), Ke(() => {
        j(O);
      })), t("scroll", D), Math.floor(R - (O + H)) <= 0 && t("reachBottom", D);
    }, j = (D) => {
      var O, R;
      if (c.value)
        if ($e(D))
          c.value.scrollTop = D;
        else {
          const H = (R = D.index) != null ? R : h.value.indexOf((O = D.key) != null ? O : "");
          w(H - a.value), c.value.scrollTop = b(H), Ke(() => {
            if (c.value) {
              const ee = b(H);
              ee !== c.value.scrollTop && (c.value.scrollTop = ee);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: c,
      contentRef: v,
      frontPadding: g,
      currentList: _,
      behindPadding: C,
      onScroll: F,
      setItemSize: E,
      hasItemSize: y,
      start: k,
      scrollTo: j,
      style: p,
      mergedComponent: u
    };
  }
});
function _c(e, t, n, l, o, r) {
  const a = he("VirtualListItem");
  return $(), X(Lt(e.mergedComponent.container), {
    ref: "containerRef",
    class: L(e.prefixCls),
    style: re(e.style),
    onScroll: e.onScroll
  }, {
    default: Z(() => [($(), X(Lt(e.mergedComponent.list), ie(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: Z(() => [($(), X(Lt(e.mergedComponent.content), ie({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: Z(() => [($(!0), V(xe, null, St(e.currentList, (i, s) => {
          var u;
          return $(), X(a, {
            key: (u = i[e.itemKey]) != null ? u : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: Z(() => [J(e.$slots, "item", {
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
var cr = /* @__PURE__ */ ce(bc, [["render", _c]]);
const Cc = I({
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
function $c(e, t, n, l, o, r) {
  const a = he("trigger");
  return $(), X(a, {
    class: L(e.prefixCls),
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
      class: L(`${e.prefixCls}-title`)
    }, [J(e.$slots, "title", {}, () => [Ne(Be(e.title), 1)])], 2), A("div", {
      class: L(`${e.prefixCls}-content`)
    }, [J(e.$slots, "content", {}, () => [Ne(Be(e.content), 1)])], 2)]),
    default: Z(() => [J(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var yl = /* @__PURE__ */ ce(Cc, [["render", $c]]);
const kc = Object.assign(yl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + yl.name, yl);
  }
});
var wc = Object.defineProperty, la = Object.getOwnPropertySymbols, Sc = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable, oa = (e, t, n) => t in e ? wc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gl = (e, t) => {
  for (var n in t || (t = {}))
    Sc.call(t, n) && oa(e, n, t[n]);
  if (la)
    for (var n of la(t))
      Ec.call(t, n) && oa(e, n, t[n]);
  return e;
};
const Oc = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], xc = ["normal", "processing", "success", "warning", "danger"];
var bl = I({
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
      validator: (e) => xc.includes(e)
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
    } = ge(e), c = Y("badge"), v = Pc(c, n == null ? void 0 : n.value, t == null ? void 0 : t.default), p = d(() => {
      const g = gl({}, (o == null ? void 0 : o.value) || {}), [C, k] = (r == null ? void 0 : r.value) || [];
      C && (g.marginRight = `${-C}px`), k && (g.marginTop = `${k}px`);
      const N = !(l != null && l.value) || Oc.includes(l == null ? void 0 : l.value) ? {} : {
        backgroundColor: l.value
      };
      return {
        mergedStyle: gl(gl({}, N), g),
        computedDotStyle: g,
        computedColorStyle: N
      };
    }), h = () => {
      const g = a == null ? void 0 : a.value, C = l == null ? void 0 : l.value, k = n == null ? void 0 : n.value, N = i == null ? void 0 : i.value, B = Number(u == null ? void 0 : u.value), E = (u == null ? void 0 : u.value) != null, {
        computedDotStyle: y,
        mergedStyle: w
      } = p.value;
      return t.content ? f("span", {
        class: `${c}-custom-dot`,
        style: y
      }, [t.content()]) : g && !C && !k ? f("span", {
        class: `${c}-text`,
        style: y
      }, [g]) : k || C && !E ? f("span", {
        class: `${c}-status-wrapper`
      }, [f("span", {
        class: [`${c}-status-dot`, {
          [`${c}-status-${k}`]: k,
          [`${c}-color-${C}`]: C
        }],
        style: w
      }, null), g && f("span", {
        class: `${c}-status-text`
      }, [g])]) : (N || C) && B > 0 ? f("span", {
        class: [`${c}-dot`, {
          [`${c}-color-${C}`]: C
        }],
        style: w
      }, null) : B === 0 ? null : f("span", {
        class: `${c}-number`,
        style: w
      }, [f("span", null, [s.value && B > s.value ? `${s.value}+` : B])]);
    };
    return () => f("span", {
      class: v.value
    }, [t.default && t.default(), h()]);
  }
});
const Pc = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), Bc = Object.assign(bl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + bl.name, bl);
  }
}), Tc = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ic = ["stroke-width", "stroke-linecap", "stroke-linejoin"], zc = /* @__PURE__ */ A("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), Nc = [zc];
function Vc(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Nc, 14, Ic);
}
var _l = /* @__PURE__ */ ce(Tc, [["render", Vc]]);
const dr = Object.assign(_l, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + _l.name, _l);
  }
}), Lc = ({
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
  return fe(r, (i) => {
    o.value !== i && (o.value = i);
  }), {
    computedPopupVisible: r,
    handlePopupVisibleChange: a
  };
}, Dc = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Ac = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Fc = /* @__PURE__ */ A("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), jc = [Fc];
function Mc(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, jc, 14, Ac);
}
var Cl = /* @__PURE__ */ ce(Dc, [["render", Mc]]);
const Kc = Object.assign(Cl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Cl.name, Cl);
  }
}), Rc = ({
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
    var b;
    return (b = t == null ? void 0 : t.value) != null ? b : s.value;
  }), g = (b, _) => {
    s.value = b, n(o, b), n(l, b, _);
  }, C = (b) => {
    const {
      value: _
    } = b.target;
    c.value || (g(_, b), Ke(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    }));
  }, k = (b) => {
    l === "input" && h.value !== p && (p = h.value, n("change", h.value, b));
  }, N = (b) => {
    var _;
    const {
      value: F
    } = b.target;
    b.type === "compositionend" ? (c.value = !1, v.value = "", g(F, b), Ke(() => {
      i.value && h.value !== i.value.value && (i.value.value = h.value);
    })) : (c.value = !0, v.value = h.value + ((_ = b.data) != null ? _ : ""));
  }, B = (b) => {
    var _, F;
    u.value = !0, p = h.value, n("focus", b), (F = (_ = r == null ? void 0 : r.value) == null ? void 0 : _.onFocus) == null || F.call(_, b);
  }, E = (b) => {
    var _, F;
    u.value = !1, n("blur", b), (F = (_ = r == null ? void 0 : r.value) == null ? void 0 : _.onBlur) == null || F.call(_, b), k(b);
  }, y = (b) => {
    const _ = b.key || b.code;
    !c.value && _ === po.key && (n("pressEnter", b), k(b));
  }, w = (b) => {
    i.value && b.target !== i.value && (b.preventDefault(), i.value.focus());
  };
  return fe(h, (b) => {
    i.value && b !== i.value.value && (i.value.value = b);
  }), {
    inputRef: i,
    _value: s,
    _focused: u,
    isComposition: c,
    compositionValue: v,
    computedValue: h,
    handleInput: C,
    handleComposition: N,
    handleFocus: B,
    handleBlur: E,
    handleKeyDown: y,
    handleMousedown: w
  };
};
var Hc = I({
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
    } = ge(e), c = (o = e.baseCls) != null ? o : Y("input-label"), {
      mergedSize: v,
      mergedDisabled: p,
      mergedError: h,
      eventHandlers: g
    } = vt({
      size: r,
      disabled: a,
      error: i,
      uninject: u == null ? void 0 : u.value
    }), {
      mergedSize: C
    } = pt(v), {
      inputRef: k,
      _focused: N,
      computedValue: B,
      handleInput: E,
      handleComposition: y,
      handleFocus: w,
      handleBlur: b,
      handleMousedown: _
    } = Rc({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: g
    }), F = d(() => {
      var x;
      return (x = e.focused) != null ? x : N.value;
    }), j = d(() => e.enabledInput && N.value || !e.modelValue), D = () => {
      var x, G;
      return e.modelValue ? (G = (x = e.formatLabel) == null ? void 0 : x.call(e, e.modelValue)) != null ? G : e.modelValue.label : "";
    }, O = d(() => e.enabledInput && e.modelValue ? D() : e.placeholder), R = () => {
      var x, G;
      return e.modelValue ? (G = (x = l.default) == null ? void 0 : x.call(l, {
        data: e.modelValue
      })) != null ? G : D() : null;
    }, H = d(() => [c, `${c}-size-${C.value}`, {
      [`${c}-search`]: e.enabledInput,
      [`${c}-focus`]: F.value,
      [`${c}-disabled`]: p.value,
      [`${c}-error`]: h.value
    }]), ee = d(() => Wt(t, Kt)), ne = d(() => ho(t, Kt));
    return {
      inputRef: k,
      render: () => f("span", ie(ee.value, {
        class: H.value,
        title: D(),
        onMousedown: _
      }), [l.prefix && f("span", {
        class: `${c}-prefix`
      }, [l.prefix()]), f("input", ie(ne.value, {
        ref: k,
        class: [`${c}-input`, {
          [`${c}-input-hidden`]: !j.value
        }],
        value: B.value,
        readonly: !e.enabledInput,
        placeholder: O.value,
        disabled: p.value,
        onInput: E,
        onFocus: w,
        onBlur: b,
        onCompositionstart: y,
        onCompositionupdate: y,
        onCompositionend: y
      }), null), f("span", {
        class: [`${c}-value`, {
          [`${c}-value-hidden`]: j.value
        }]
      }, [R()]), l.suffix && f("span", {
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
}), Wc = Object.defineProperty, aa = Object.getOwnPropertySymbols, qc = Object.prototype.hasOwnProperty, Gc = Object.prototype.propertyIsEnumerable, ra = (e, t, n) => t in e ? Wc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Uc = (e, t) => {
  for (var n in t || (t = {}))
    qc.call(t, n) && ra(e, n, t[n]);
  if (aa)
    for (var n of aa(t))
      Gc.call(t, n) && ra(e, n, t[n]);
  return e;
};
const Yc = (e, t) => {
  const n = [];
  for (const l of e)
    if (De(l))
      n.push({
        raw: l,
        value: l[t.value],
        label: l[t.label],
        closable: l[t.closable],
        tagProps: l[t.tagProps]
      });
    else if (e || $e(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(Uc({
        raw: o
      }, o));
    }
  return n;
}, ia = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Zc = I({
  name: "Tag",
  components: {
    IconHover: Qe,
    IconClose: fn,
    IconLoading: dt
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
    } = ge(e), l = Y("tag"), o = d(() => e.color && ia.includes(e.color)), r = d(() => e.color && !ia.includes(e.color)), a = m(e.defaultVisible), i = m(e.defaultChecked), s = d(() => {
      var k;
      return (k = e.visible) != null ? k : a.value;
    }), u = d(() => {
      var k;
      return e.checkable ? (k = e.checked) != null ? k : i.value : !0;
    }), {
      mergedSize: c
    } = pt(n), v = d(() => c.value === "mini" ? "small" : c.value), p = (k) => {
      a.value = !1, t("update:visible", !1), t("close", k);
    }, h = (k) => {
      if (e.checkable) {
        const N = !u.value;
        i.value = N, t("update:checked", N), t("check", N, k);
      }
    }, g = d(() => [l, `${l}-size-${v.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: u.value,
      [`${l}-custom-color`]: r.value
    }]), C = d(() => {
      if (r.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: g,
      style: C,
      computedVisible: s,
      computedChecked: u,
      handleClick: h,
      handleClose: p
    };
  }
});
function Xc(e, t, n, l, o, r) {
  const a = he("icon-close"), i = he("icon-hover"), s = he("icon-loading");
  return e.computedVisible ? ($(), V("span", {
    key: 0,
    class: L(e.cls),
    style: re(e.style),
    onClick: t[0] || (t[0] = (...u) => e.handleClick && e.handleClick(...u))
  }, [e.$slots.icon ? ($(), V("span", {
    key: 0,
    class: L(`${e.prefixCls}-icon`)
  }, [J(e.$slots, "icon")], 2)) : pe("v-if", !0), e.nowrap ? ($(), V("span", {
    key: 1,
    class: L(`${e.prefixCls}-text`)
  }, [J(e.$slots, "default")], 2)) : J(e.$slots, "default", {
    key: 2
  }), e.closable ? ($(), X(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: L(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleClose, ["stop"])
  }, {
    default: Z(() => [J(e.$slots, "close-icon", {}, () => [f(a)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : pe("v-if", !0), e.loading ? ($(), V("span", {
    key: 4,
    class: L(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : pe("v-if", !0)], 6)) : pe("v-if", !0);
}
var $l = /* @__PURE__ */ ce(Zc, [["render", Xc]]);
const vn = Object.assign($l, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + $l.name, $l);
  }
});
var Jc = Object.defineProperty, sa = Object.getOwnPropertySymbols, Qc = Object.prototype.hasOwnProperty, ed = Object.prototype.propertyIsEnumerable, ua = (e, t, n) => t in e ? Jc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Cn = (e, t) => {
  for (var n in t || (t = {}))
    Qc.call(t, n) && ua(e, n, t[n]);
  if (sa)
    for (var n of sa(t))
      ed.call(t, n) && ua(e, n, t[n]);
  return e;
};
const td = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var kl = I({
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
    } = ge(e), u = e.baseCls || Y("input-tag"), c = m(), v = m(), {
      mergedSize: p,
      mergedDisabled: h,
      mergedError: g,
      feedback: C,
      eventHandlers: k
    } = vt({
      size: o,
      disabled: r,
      error: a,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: N
    } = pt(p), B = d(() => Cn(Cn({}, td), e.fieldNames)), E = m(!1), y = m(e.defaultValue), w = m(e.defaultInputValue), b = m(!1), _ = m(""), F = d(() => De(e.retainInputValue) ? Cn({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), j = Oe({
      width: "12px"
    }), D = d(() => e.focused || E.value), O = (P, W) => {
      w.value = P, t("update:inputValue", P), t("inputValueChange", P, W);
    }, R = (P) => {
      var W;
      const {
        value: de
      } = P.target;
      P.type === "compositionend" ? (b.value = !1, _.value = "", O(de, P), Ke(() => {
        c.value && ee.value !== c.value.value && (c.value.value = ee.value);
      })) : (b.value = !0, _.value = ee.value + ((W = P.data) != null ? W : ""));
    }, H = d(() => {
      var P;
      return (P = e.modelValue) != null ? P : y.value;
    }), ee = d(() => {
      var P;
      return (P = e.inputValue) != null ? P : w.value;
    });
    fe(s, (P) => {
      (je(P) || cn(P)) && (y.value = []);
    });
    const ne = (P) => {
      c.value && P.target !== c.value && (P.preventDefault(), c.value.focus());
    }, oe = (P) => {
      const {
        value: W
      } = P.target;
      b.value || (O(W, P), Ke(() => {
        c.value && ee.value !== c.value.value && (c.value.value = ee.value);
      }));
    }, x = d(() => Yc(H.value, B.value)), G = d(() => {
      if (e.maxTagCount > 0) {
        const P = x.value.length - e.maxTagCount;
        if (P > 0) {
          const W = x.value.slice(0, e.maxTagCount), de = {
            value: "__arco__more",
            label: `+${P}...`,
            closable: !1
          };
          return W.push(Cn({
            raw: de
          }, de)), W;
        }
      }
      return x.value;
    }), me = (P, W) => {
      var de, we;
      y.value = P, t("update:modelValue", P), t("change", P, W), (we = (de = k.value) == null ? void 0 : de.onChange) == null || we.call(de, W);
    }, le = (P, W, de) => {
      var we;
      const Ee = (we = H.value) == null ? void 0 : we.filter((Je, ze) => ze !== W);
      me(Ee, de), t("remove", P, de);
    }, se = (P) => {
      me([], P), t("clear", P);
    }, Se = d(() => !h.value && !e.readonly && e.allowClear && !!H.value.length), be = (P) => {
      var W;
      if (ee.value) {
        if (P.preventDefault(), e.uniqueValue && ((W = H.value) != null && W.includes(ee.value))) {
          t("pressEnter", ee.value, P);
          return;
        }
        const de = H.value.concat(ee.value);
        me(de, P), t("pressEnter", ee.value, P), F.value.create || O("", P);
      }
    }, ye = (P) => {
      var W, de;
      E.value = !0, t("focus", P), (de = (W = k.value) == null ? void 0 : W.onFocus) == null || de.call(W, P);
    }, ue = (P) => {
      var W, de;
      E.value = !1, !F.value.blur && ee.value && O("", P), t("blur", P), (de = (W = k.value) == null ? void 0 : W.onBlur) == null || de.call(W, P);
    }, ke = () => {
      for (let P = x.value.length - 1; P >= 0; P--)
        if (x.value[P].closable)
          return P;
      return -1;
    }, tt = (P) => {
      if (h.value || e.readonly)
        return;
      const W = P.key || P.code;
      if (!b.value && ee.value && W === po.key && be(P), !b.value && G.value.length > 0 && !ee.value && W === ss.key) {
        const de = ke();
        de >= 0 && le(x.value[de].value, de, P);
      }
    }, Te = (P) => {
      P > 12 ? j.width = `${P}px` : j.width = "12px";
    };
    Ae(() => {
      v.value && Te(v.value.offsetWidth);
    });
    const Fe = () => {
      v.value && Te(v.value.offsetWidth);
    };
    fe(ee, (P) => {
      c.value && !b.value && P !== c.value.value && (c.value.value = P);
    });
    const We = d(() => [u, `${u}-size-${N.value}`, {
      [`${u}-disabled`]: h.value,
      [`${u}-disabled-input`]: e.disabledInput,
      [`${u}-error`]: g.value,
      [`${u}-focus`]: D.value,
      [`${u}-readonly`]: e.readonly,
      [`${u}-has-tag`]: G.value.length > 0,
      [`${u}-has-prefix`]: !!n.prefix,
      [`${u}-has-suffix`]: !!n.suffix || Se.value || C.value,
      [`${u}-has-placeholder`]: !H.value.length
    }]), Ve = d(() => Wt(l, Kt)), Ze = d(() => ho(l, Kt));
    return {
      inputRef: c,
      render: () => {
        var P;
        return f("span", ie({
          class: We.value,
          onMousedown: ne
        }, Ve.value), [f(on, {
          onResize: Fe
        }, {
          default: () => [f("span", {
            ref: v,
            class: `${u}-mirror`
          }, [G.value.length > 0 ? _.value || ee.value : _.value || ee.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${u}-prefix`
        }, [n.prefix()]), f(Mr, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${u}-inner`, {
            [`${u}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [G.value.map((W, de) => f(vn, ie({
            key: `tag-${W.value}`,
            class: `${u}-tag`,
            closable: !h.value && !e.readonly && W.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, W.tagProps, {
            onClose: (we) => le(W.value, de, we)
          }), {
            default: () => {
              var we, Ee, Je, ze;
              return [(ze = (Je = (we = n.tag) == null ? void 0 : we.call(n, {
                data: W.raw
              })) != null ? Je : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, W.raw)) != null ? ze : W.label];
            }
          })), f("input", ie(Ze.value, {
            ref: c,
            key: "input-tag-input",
            class: `${u}-input`,
            style: j,
            placeholder: G.value.length === 0 ? e.placeholder : void 0,
            disabled: h.value,
            readonly: e.readonly || e.disabledInput,
            onInput: oe,
            onKeydown: tt,
            onFocus: ye,
            onBlur: ue,
            onCompositionstart: R,
            onCompositionupdate: R,
            onCompositionend: R
          }), null)]
        }), Se.value && f(Qe, {
          class: `${u}-clear-btn`,
          onClick: se,
          onMousedown: (W) => W.stopPropagation()
        }, {
          default: () => [f(fn, null, null)]
        }), (n.suffix || !!C.value) && f("span", {
          class: `${u}-suffix`
        }, [(P = n.suffix) == null ? void 0 : P.call(n), !!C.value && f(vo, {
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
const nd = Object.assign(kl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + kl.name, kl);
  }
});
var ca = I({
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
      default: (e) => Me(e.modelValue)
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
    } = ge(e), a = Y("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: u,
      mergedSize: c,
      mergedError: v
    } = vt({
      size: l,
      disabled: o,
      error: r
    }), {
      mergedSize: p
    } = pt(c), {
      opened: h
    } = ge(e), g = m(), C = d(() => {
      var O;
      return (O = g.value) == null ? void 0 : O.inputRef;
    }), k = d(() => e.modelValue.length === 0), N = d(() => e.allowSearch || e.allowCreate), B = d(() => e.allowClear && !e.disabled && !k.value), E = (O) => {
      var R, H;
      t("focus", O), (H = (R = s.value) == null ? void 0 : R.onFocus) == null || H.call(R, O);
    }, y = (O) => {
      var R, H;
      t("blur", O), (H = (R = s.value) == null ? void 0 : R.onBlur) == null || H.call(R, O);
    }, w = (O) => {
      t("remove", O);
    }, b = (O) => {
      t("clear", O);
    }, _ = () => {
      var O, R, H, ee;
      return e.loading ? (R = (O = n["loading-icon"]) == null ? void 0 : O.call(n)) != null ? R : f(dt, null, null) : e.allowSearch && e.opened ? (ee = (H = n["search-icon"]) == null ? void 0 : H.call(n)) != null ? ee : f(Zl, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(dr, {
        class: `${a}-arrow-icon`
      }, null);
    }, F = () => f(xe, null, [B.value && f(Qe, {
      class: `${a}-clear-btn`,
      onClick: b,
      onMousedown: (O) => O.stopPropagation()
    }, {
      default: () => [f(fn, null, null)]
    }), f("span", {
      class: `${a}-icon`
    }, [_()]), !!i.value && f(vo, {
      type: i.value
    }, null)]);
    fe(h, (O) => {
      !O && C.value && C.value.isSameNode(document.activeElement) && C.value.blur();
    });
    const j = d(() => [`${a}-${e.multiple ? "multiple" : "single"}`, {
      [`${a}-opened`]: e.opened,
      [`${a}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: C,
      handleFocus: E,
      handleBlur: y,
      render: () => e.multiple ? f(nd, {
        ref: g,
        baseCls: a,
        class: j.value,
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
        onRemove: w,
        onFocus: E,
        onBlur: y
      }, {
        prefix: n.prefix,
        suffix: F,
        tag: n.label
      }) : f(Hc, {
        ref: g,
        baseCls: a,
        class: j.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: u.value,
        size: p.value,
        error: v.value,
        enabledInput: N.value,
        uninjectFormItemContext: !0,
        onFocus: E,
        onBlur: y
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: F
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
const ld = I({
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
function od(e, t, n, l, o, r) {
  return $(), V(xe, null, [A("li", {
    class: L(`${e.prefixCls}-title`)
  }, [J(e.$slots, "label", {}, () => [Ne(Be(e.label), 1)])], 2), J(e.$slots, "default")], 64);
}
var Sn = /* @__PURE__ */ ce(ld, [["render", od]]);
const da = typeof window > "u" ? global : window;
function ad(e, t) {
  let n = 0;
  return (...l) => {
    n && da.clearTimeout(n), n = da.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var rd = Object.defineProperty, id = Object.defineProperties, sd = Object.getOwnPropertyDescriptors, fa = Object.getOwnPropertySymbols, ud = Object.prototype.hasOwnProperty, cd = Object.prototype.propertyIsEnumerable, va = (e, t, n) => t in e ? rd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zt = (e, t) => {
  for (var n in t || (t = {}))
    ud.call(t, n) && va(e, n, t[n]);
  if (fa)
    for (var n of fa(t))
      cd.call(t, n) && va(e, n, t[n]);
  return e;
}, dd = (e, t) => id(e, sd(t));
function fd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !lo(e);
}
const vd = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var wl = I({
  name: "Select",
  components: {
    Trigger: an,
    SelectView: ca
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
      modelValue: g,
      fieldNames: C,
      loading: k,
      defaultActiveFirstOption: N
    } = ge(e), B = Y("select"), {
      mergedSize: E,
      mergedDisabled: y,
      mergedError: w,
      eventHandlers: b
    } = vt({
      size: o,
      disabled: r,
      error: a
    }), _ = d(() => e.virtualListProps ? "div" : "li"), F = d(() => De(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (Ge(e.formatLabel))
        return (T) => {
          const S = Ee.get(T.value);
          return e.formatLabel(S);
        };
    });
    const j = m(), D = m({}), O = m(), {
      computedPopupVisible: R,
      handlePopupVisibleChange: H
    } = Lc({
      popupVisible: v,
      defaultPopupVisible: p,
      emit: n
    }), ee = m(e.defaultValue), ne = d(() => {
      var T;
      const S = (T = e.modelValue) != null ? T : ee.value;
      return (Me(S) ? S : S || $e(S) || Pt(S) || jt(S) ? [S] : []).map((te) => ({
        value: te,
        key: rn(te, e.valueKey)
      }));
    });
    fe(g, (T) => {
      (je(T) || cn(T)) && (ee.value = c.value ? [] : T);
    });
    const oe = d(() => ne.value.map((T) => T.key)), x = d(() => Zt(Zt({}, vd), C == null ? void 0 : C.value)), G = m(), me = (T) => {
      const S = {};
      return T.forEach((z) => {
        S[z] = Ee.get(z);
      }), S;
    }, le = (T) => {
      G.value = me(T);
    }, se = (T) => Ge(e.fallbackOption) ? e.fallbackOption(T) : {
      [x.value.value]: T,
      [x.value.label]: String(De(T) ? T[u == null ? void 0 : u.value] : T)
    }, Se = () => {
      const T = [], S = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const z of ne.value)
          if (!S.includes(z.key) && z.value !== "") {
            const te = Ee.get(z.key);
            (!te || te.origin === "extraOptions") && (T.push(z), S.push(z.key));
          }
      }
      if (e.allowCreate && ke.value) {
        const z = rn(ke.value);
        if (!S.includes(z)) {
          const te = Ee.get(z);
          (!te || te.origin === "extraOptions") && T.push({
            value: ke.value,
            key: z
          });
        }
      }
      return T;
    }, be = m([]), ye = d(() => be.value.map((T) => {
      var S;
      let z = se(T.value);
      const te = (S = G.value) == null ? void 0 : S[T.key];
      return !je(te) && !qr(te) && (z = Zt(Zt({}, z), te)), z;
    }));
    Ke(() => {
      Dn(() => {
        var T;
        const S = Se();
        if (S.length !== be.value.length)
          be.value = S;
        else if (S.length > 0) {
          for (let z = 0; z < S.length; z++)
            if (S[z].key !== ((T = be.value[z]) == null ? void 0 : T.key)) {
              be.value = S;
              break;
            }
        }
      });
    });
    const ue = m(""), ke = d(() => {
      var T;
      return (T = e.inputValue) != null ? T : ue.value;
    });
    fe(R, (T) => {
      !T && !F.value && ke.value && Fe("");
    });
    const tt = (T) => {
      var S, z;
      return e.multiple ? T.map((te) => {
        var Ye, qe;
        return (qe = (Ye = Ee.get(te)) == null ? void 0 : Ye.value) != null ? qe : "";
      }) : (z = (S = Ee.get(T[0])) == null ? void 0 : S.value) != null ? z : Xu(Ee) ? void 0 : "";
    }, Te = (T) => {
      var S, z;
      const te = tt(T);
      ee.value = te, n("update:modelValue", te), n("change", te), (z = (S = b.value) == null ? void 0 : S.onChange) == null || z.call(S), le(T);
    }, Fe = (T) => {
      ue.value = T, n("update:inputValue", T), n("inputValueChange", T);
    }, We = (T, S) => {
      if (e.multiple) {
        if (oe.value.includes(T)) {
          const z = oe.value.filter((te) => te !== T);
          Te(z);
        } else if (ze.value.includes(T))
          if (e.limit > 0 && oe.value.length >= e.limit) {
            const z = Ee.get(T);
            n("exceedLimit", z == null ? void 0 : z.value, S);
          } else {
            const z = oe.value.concat(T);
            Te(z);
          }
        F.value || Fe("");
      } else {
        if (T !== oe.value[0] && Te([T]), F.value) {
          const z = Ee.get(T);
          z && Fe(z.label);
        }
        H(!1);
      }
    }, Ve = ad((T) => {
      n("search", T);
    }, e.searchDelay), Ze = (T) => {
      T !== ke.value && (R.value || H(!0), Fe(T), e.allowSearch && Ve(T));
    }, q = (T) => {
      const S = Ee.get(T), z = oe.value.filter((te) => te !== T);
      Te(z), n("remove", S == null ? void 0 : S.value);
    }, P = (T) => {
      T == null || T.stopPropagation();
      const S = oe.value.filter((z) => {
        var te;
        return (te = Ee.get(z)) == null ? void 0 : te.disabled;
      });
      Te(S), Fe(""), n("clear", T);
    }, W = (T) => {
      n("dropdownScroll", T);
    }, de = (T) => {
      n("dropdownReachBottom", T);
    }, {
      validOptions: we,
      optionInfoMap: Ee,
      validOptionInfos: Je,
      enabledOptionKeys: ze,
      handleKeyDown: _t
    } = fc({
      multiple: c,
      options: i,
      extraOptions: ye,
      inputValue: ke,
      filterOption: s,
      showExtraOptions: h,
      component: _,
      valueKey: u,
      fieldNames: C,
      loading: k,
      popupVisible: R,
      valueKeys: oe,
      dropdownRef: j,
      optionRefs: D,
      virtualListRef: O,
      defaultActiveFirstOption: N,
      onSelect: We,
      onPopupVisibleChange: H
    }), Ut = d(() => {
      var T;
      const S = [];
      for (const z of ne.value) {
        const te = Ee.get(z.key);
        te && S.push(dd(Zt({}, te), {
          value: z.key,
          label: (T = te == null ? void 0 : te.label) != null ? T : String(De(z.value) ? z.value[u == null ? void 0 : u.value] : z.value),
          closable: !(te != null && te.disabled),
          tagProps: te == null ? void 0 : te.tagProps
        }));
      }
      return S;
    }), Ct = (T) => {
      if (Ge(t.option)) {
        const S = t.option;
        return () => S({
          data: T.raw
        });
      }
      return Ge(T.render) ? T.render : () => T.label;
    }, ot = (T) => {
      if (ur(T)) {
        let S;
        return f(Sn, {
          key: T.key,
          label: T.label
        }, fd(S = T.options.map((z) => ot(z))) ? S : {
          default: () => [S]
        });
      }
      return Rn(T, {
        inputValue: ke.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(wn, {
        ref: (S) => {
          S != null && S.$el && (D.value[T.key] = S.$el);
        },
        key: T.key,
        value: T.value,
        label: T.label,
        disabled: T.disabled,
        internal: !0
      }, {
        default: Ct(T)
      }) : null;
    }, Tt = () => f(Ru, {
      ref: j,
      loading: e.loading,
      empty: Je.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: W,
      onReachBottom: de
    }, {
      default: () => {
        var T, S;
        return [...(S = (T = t.default) == null ? void 0 : T.call(t)) != null ? S : [], ...we.value.map(ot)];
      },
      "virtual-list": () => f(cr, ie(e.virtualListProps, {
        ref: O,
        data: we.value
      }), {
        item: ({
          item: T
        }) => ot(T)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), Yt = ({
      data: T
    }) => {
      var S, z, te, Ye;
      if ((t.label || Ge(e.formatLabel)) && T) {
        const qe = Ee.get(T.value);
        if (qe != null && qe.raw)
          return (te = (S = t.label) == null ? void 0 : S.call(t, {
            data: qe.raw
          })) != null ? te : (z = e.formatLabel) == null ? void 0 : z.call(e, qe.raw);
      }
      return (Ye = T == null ? void 0 : T.label) != null ? Ye : "";
    };
    return () => f(an, ie({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: y.value,
      popupVisible: R.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: H
    }, e.triggerProps), {
      default: () => {
        var T, S;
        return [(S = (T = t.trigger) == null ? void 0 : T.call(t)) != null ? S : f(ca, ie({
          class: B,
          modelValue: Ut.value,
          inputValue: ke.value,
          multiple: e.multiple,
          disabled: y.value,
          error: w.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: !!e.allowSearch,
          opened: R.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: E.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: Ze,
          onRemove: q,
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
const pd = Object.assign(wl, {
  Option: wn,
  OptGroup: Sn,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + wl.name, wl), e.component(n + wn.name, wn), e.component(n + Sn.name, Sn);
  }
}), hd = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), md = ["stroke-width", "stroke-linecap", "stroke-linejoin"], yd = /* @__PURE__ */ A("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), gd = [yd];
function bd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, gd, 14, md);
}
var Sl = /* @__PURE__ */ ce(hd, [["render", bd]]);
const _d = Object.assign(Sl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Sl.name, Sl);
  }
}), Cd = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), $d = ["stroke-width", "stroke-linecap", "stroke-linejoin"], kd = /* @__PURE__ */ A("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), wd = [kd];
function Sd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, wd, 14, $d);
}
var El = /* @__PURE__ */ ce(Cd, [["render", Sd]]);
const Ed = Object.assign(El, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + El.name, El);
  }
}), Od = (e) => {
  const t = {}, n = m([]), l = () => {
    if (t.value) {
      const o = Ja(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Ae(() => l()), ft(() => l()), {
    children: t,
    components: n
  };
}, fr = Symbol("collapseCtx"), xd = I({
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
    } = ge(e), a = Y("collapse"), i = m(e.defaultActiveKey), s = d(() => {
      var v;
      const p = (v = e.activeKey) != null ? v : i.value;
      return Me(p) ? p : [p];
    });
    Ot(fr, Oe({
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
          const g = h.indexOf(v);
          g > -1 ? h.splice(g, 1) : e.accordion ? h = [v] : h.push(v), i.value = h;
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
function Pd(e, t, n, l, o, r) {
  return $(), V("div", {
    class: L(e.cls)
  }, [J(e.$slots, "default")], 2);
}
var Ol = /* @__PURE__ */ ce(xd, [["render", Pd]]);
const Bd = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Td = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Id = /* @__PURE__ */ A("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), zd = [Id];
function Nd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, zd, 14, Td);
}
var xl = /* @__PURE__ */ ce(Bd, [["render", Nd]]);
const Vd = Object.assign(xl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xl.name, xl);
  }
}), Ld = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Dd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ad = /* @__PURE__ */ A("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Fd = [Ad];
function jd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Fd, 14, Dd);
}
var Pl = /* @__PURE__ */ ce(Ld, [["render", jd]]);
const Md = Object.assign(Pl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Pl.name, Pl);
  }
});
var wt = I({
  name: "CollapseItem",
  components: {
    IconHover: Qe,
    IconCaretRight: Vd,
    IconCaretLeft: Md
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
    const l = gt(), o = Y("collapse-item"), r = Ue(fr, {}), a = l && $e(l == null ? void 0 : l.vnode.key) ? l.vnode.key : String((n = l == null ? void 0 : l.vnode.key) != null ? n : ""), i = d(() => {
      var y;
      return (y = r.activeKeys) == null ? void 0 : y.includes(a);
    }), s = d(() => r.destroyOnHide || e.destroyOnHide), u = d(() => {
      var y;
      return (y = r == null ? void 0 : r.showExpandIcon) != null ? y : e.showExpandIcon;
    }), c = m(s.value ? i.value : !0), v = d(() => {
      var y;
      return (y = r == null ? void 0 : r.expandIconPosition) != null ? y : "left";
    }), p = (y) => {
      var w;
      e.disabled || (w = r.handleClick) == null || w.call(r, a, y);
    };
    fe(i, (y) => {
      y && !c.value && (c.value = !0);
    });
    const h = {
      onEnter: (y) => {
        y.style.height = `${y.scrollHeight}px`;
      },
      onAfterEnter: (y) => {
        y.style.height = "auto";
      },
      onBeforeLeave: (y) => {
        y.style.height = `${y.scrollHeight}px`;
      },
      onLeave: (y) => {
        y.style.height = "0";
      },
      onAfterLeave: () => {
        s.value && (c.value = !1);
      }
    }, g = d(() => [o, {
      [`${o}-active`]: i.value
    }]), C = d(() => [`${o}-header`, `${o}-header-${r == null ? void 0 : r.expandIconPosition}`, {
      [`${o}-header-disabled`]: e.disabled
    }]), k = d(() => [{
      [`${o}-icon-right`]: (r == null ? void 0 : r.expandIconPosition) === "right"
    }]), N = d(() => [`${o}-content`, {
      [`${o}-content-expend`]: i.value
    }]), B = () => v.value === "right" ? f(he("icon-caret-left"), {
      class: `${o}-expand-icon`
    }, null) : f(he("icon-caret-right"), {
      class: `${o}-expand-icon`
    }, null), E = () => u.value && f(he("icon-hover"), {
      prefix: o,
      class: k.value,
      disabled: e.disabled
    }, {
      default: () => {
        var y, w, b, _;
        return [(_ = (b = (w = t["expand-icon"]) != null ? w : (y = r == null ? void 0 : r.slots) == null ? void 0 : y["expand-icon"]) == null ? void 0 : b({
          active: i.value,
          disabled: e.disabled,
          position: v.value
        })) != null ? _ : B()];
      }
    });
    return () => {
      var y, w, b;
      return f("div", {
        class: g.value
      }, [f("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: C.value,
        onClick: p
      }, [E(), f("div", {
        class: `${o}-header-title`
      }, [(w = (y = t.header) == null ? void 0 : y.call(t)) != null ? w : e.header]), t.extra && f("div", {
        class: `${o}-header-extra`
      }, [(b = t.extra) == null ? void 0 : b.call(t)])]), f(Ln, ie({
        name: "collapse-slider"
      }, h), {
        default: () => {
          var _;
          return [ut(f("div", {
            role: "region",
            class: N.value
          }, [c.value && f("div", {
            ref: "contentBoxRef",
            class: `${o}-content-box`
          }, [(_ = t.default) == null ? void 0 : _.call(t)])]), [[ct, i.value]])];
        }
      })]);
    };
  }
});
const Kd = Object.assign(Ol, {
  Item: wt,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Ol.name, Ol), e.component(n + wt.name, wt);
  }
}), Rd = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Hd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Wd = /* @__PURE__ */ A("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), qd = [Wd];
function Gd(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, qd, 14, Hd);
}
var Bl = /* @__PURE__ */ ce(Rd, [["render", Gd]]);
const vr = Object.assign(Bl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Bl.name, Bl);
  }
});
var pr = I({
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
}), Ud = Object.defineProperty, pa = Object.getOwnPropertySymbols, Yd = Object.prototype.hasOwnProperty, Zd = Object.prototype.propertyIsEnumerable, ha = (e, t, n) => t in e ? Ud(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ma = (e, t) => {
  for (var n in t || (t = {}))
    Yd.call(t, n) && ha(e, n, t[n]);
  if (pa)
    for (var n of pa(t))
      Zd.call(t, n) && ha(e, n, t[n]);
  return e;
};
const Xd = I({
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
        return ma({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), u = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return ma({
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
function Jd(e, t, n, l, o, r) {
  const a = he("Trigger");
  return $(), X(a, {
    class: L(e.prefixCls),
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
    content: Z(() => [J(e.$slots, "content", {}, () => [Ne(Be(e.content), 1)])]),
    default: Z(() => [J(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Tl = /* @__PURE__ */ ce(Xd, [["render", Jd]]);
const pn = Object.assign(Tl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Tl.name, Tl);
  }
}), Qd = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), ef = ["stroke-width", "stroke-linecap", "stroke-linejoin"], tf = /* @__PURE__ */ A("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), nf = /* @__PURE__ */ A("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), lf = [tf, nf];
function of(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, lf, 14, ef);
}
var Il = /* @__PURE__ */ ce(Qd, [["render", of]]);
const af = Object.assign(Il, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Il.name, Il);
  }
}), rf = I({
  name: "Popconfirm",
  components: {
    ArcoButton: Mn,
    Trigger: an,
    IconInfoCircleFill: Fi,
    IconCheckCircleFill: fo,
    IconExclamationCircleFill: tr,
    IconCloseCircleFill: nr
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
    } = ao(), o = m(e.defaultPopupVisible), r = d(() => {
      var C;
      return (C = e.popupVisible) != null ? C : o.value;
    }), a = m(!1), i = d(() => e.okLoading || a.value);
    let s = 0;
    const u = () => {
      s++, a.value && (a.value = !1), o.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, c = (C) => {
      C ? (o.value = C, t("update:popupVisible", C), t("popupVisibleChange", C)) : u();
    }, v = async () => {
      const C = s, k = await new Promise(async (N) => {
        var B;
        if (Ge(e.onBeforeOk)) {
          let E = e.onBeforeOk((y = !0) => N(y));
          if ((Eo(E) || !jt(E)) && (a.value = !0), Eo(E))
            try {
              E = (B = await E) != null ? B : !0;
            } catch {
              E = !1;
            }
          jt(E) && N(E);
        } else
          N(!0);
      });
      C === s && (k ? (t("ok"), u()) : a.value && (a.value = !1));
    }, p = () => {
      var C;
      let k = !0;
      Ge(e.onBeforeCancel) && (k = (C = e.onBeforeCancel()) != null ? C : !1), k && (t("cancel"), u());
    }, h = d(() => [`${n}-popup-content`, e.contentClass]), g = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: h,
      arrowCls: g,
      computedPopupVisible: r,
      mergedOkLoading: i,
      handlePopupVisibleChange: c,
      handleOk: v,
      handleCancel: p,
      t: l
    };
  }
});
function sf(e, t, n, l, o, r) {
  const a = he("icon-info-circle-fill"), i = he("icon-check-circle-fill"), s = he("icon-exclamation-circle-fill"), u = he("icon-close-circle-fill"), c = he("arco-button"), v = he("trigger");
  return $(), X(v, {
    class: L(e.prefixCls),
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
      class: L(`${e.prefixCls}-body`)
    }, [A("span", {
      class: L(`${e.prefixCls}-icon`)
    }, [J(e.$slots, "icon", {}, () => [e.type === "info" ? ($(), X(a, {
      key: 0
    })) : e.type === "success" ? ($(), X(i, {
      key: 1
    })) : e.type === "warning" ? ($(), X(s, {
      key: 2
    })) : e.type === "error" ? ($(), X(u, {
      key: 3
    })) : pe("v-if", !0)])], 2), A("span", {
      class: L(`${e.prefixCls}-content`)
    }, [J(e.$slots, "content", {}, () => [Ne(Be(e.content), 1)])], 2)], 2), A("div", {
      class: L(`${e.prefixCls}-footer`)
    }, [f(c, ie({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: Z(() => [Ne(Be(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(c, ie({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: Z(() => [Ne(Be(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: Z(() => [J(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var zl = /* @__PURE__ */ ce(rf, [["render", sf]]);
const hr = Object.assign(zl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + zl.name, zl);
  }
});
var Nl = I({
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
      const s = {}, u = `${r(Me(e.size) ? e.size[0] : e.size)}px`, c = `${r(Me(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: c
      } : {} : (e.direction === "horizontal" && (s.marginRight = u), (e.direction === "vertical" || e.wrap) && (s.marginBottom = c), s);
    };
    return () => {
      var i;
      const s = $n((i = t.default) == null ? void 0 : i.call(t), !0).filter((u) => u.type !== Kr);
      return f("div", {
        class: o.value
      }, [s.map((u, c) => {
        var v, p;
        const h = t.split && c > 0;
        return f(xe, {
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
const uf = Object.assign(Nl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Nl.name, Nl);
  }
}), cf = I({
  name: "Switch",
  components: {
    IconLoading: dt
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
      size: l,
      modelValue: o
    } = ge(e), r = Y("switch"), {
      mergedSize: a
    } = pt(l), {
      mergedDisabled: i,
      mergedSize: s,
      eventHandlers: u
    } = vt({
      disabled: n,
      size: a
    }), c = m(e.defaultChecked ? e.checkedValue : e.uncheckedValue), v = d(() => {
      var y;
      return ((y = e.modelValue) != null ? y : c.value) === e.checkedValue;
    }), p = m(!1), h = d(() => p.value || e.loading), g = (y, w) => {
      var b, _;
      c.value = y ? e.checkedValue : e.uncheckedValue, t("update:modelValue", c.value), t("change", c.value, w), (_ = (b = u.value) == null ? void 0 : b.onChange) == null || _.call(b, w);
    }, C = async (y) => {
      if (h.value || i.value)
        return;
      const w = !v.value, b = w ? e.checkedValue : e.uncheckedValue, _ = e.beforeChange;
      if (Ge(_)) {
        p.value = !0;
        try {
          const F = await _(b);
          (F ?? !0) && g(w, y);
        } finally {
          p.value = !1;
        }
      } else
        g(w, y);
    }, k = (y) => {
      var w, b;
      t("focus", y), (b = (w = u.value) == null ? void 0 : w.onFocus) == null || b.call(w, y);
    }, N = (y) => {
      var w, b;
      t("blur", y), (b = (w = u.value) == null ? void 0 : w.onBlur) == null || b.call(w, y);
    };
    fe(o, (y) => {
      (je(y) || cn(y)) && (c.value = e.uncheckedValue);
    });
    const B = d(() => [r, `${r}-type-${e.type}`, {
      [`${r}-small`]: s.value === "small" || s.value === "mini",
      [`${r}-checked`]: v.value,
      [`${r}-disabled`]: i.value,
      [`${r}-loading`]: h.value,
      [`${r}-custom-color`]: e.type === "line" && (e.checkedColor || e.uncheckedColor)
    }]), E = d(() => {
      if (v.value && e.checkedColor)
        return e.type === "line" ? {
          "--custom-color": e.checkedColor
        } : {
          backgroundColor: e.checkedColor
        };
      if (!v.value && e.uncheckedColor)
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
      computedCheck: v,
      computedLoading: h,
      handleClick: C,
      handleFocus: k,
      handleBlur: N
    };
  }
}), df = ["aria-checked", "disabled"];
function ff(e, t, n, l, o, r) {
  const a = he("icon-loading");
  return $(), V("button", {
    type: "button",
    role: "switch",
    "aria-checked": e.computedCheck,
    class: L(e.cls),
    style: re(e.buttonStyle),
    disabled: e.mergedDisabled,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: t[1] || (t[1] = (...i) => e.handleFocus && e.handleFocus(...i)),
    onBlur: t[2] || (t[2] = (...i) => e.handleBlur && e.handleBlur(...i))
  }, [A("span", {
    class: L(`${e.prefixCls}-handle`)
  }, [A("span", {
    class: L(`${e.prefixCls}-handle-icon`)
  }, [e.computedLoading ? ($(), X(a, {
    key: 0
  })) : ($(), V(xe, {
    key: 1
  }, [e.computedCheck ? J(e.$slots, "checked-icon", {
    key: 0
  }) : J(e.$slots, "unchecked-icon", {
    key: 1
  })], 2112))], 2)], 2), pe("  prettier-ignore  "), e.type !== "line" && e.size !== "small" && (e.$slots.checked || e.checkedText || e.$slots.unchecked || e.uncheckedText) ? ($(), V(xe, {
    key: 0
  }, [A("span", {
    class: L(`${e.prefixCls}-text-holder`)
  }, [e.computedCheck ? J(e.$slots, "checked", {
    key: 0
  }, () => [Ne(Be(e.checkedText), 1)]) : J(e.$slots, "unchecked", {
    key: 1
  }, () => [Ne(Be(e.uncheckedText), 1)])], 2), A("span", {
    class: L(`${e.prefixCls}-text`)
  }, [e.computedCheck ? J(e.$slots, "checked", {
    key: 0
  }, () => [Ne(Be(e.checkedText), 1)]) : J(e.$slots, "unchecked", {
    key: 1
  }, () => [Ne(Be(e.uncheckedText), 1)])], 2)], 64)) : pe("v-if", !0)], 46, df);
}
var Vl = /* @__PURE__ */ ce(cf, [["render", ff]]);
const vf = Object.assign(Vl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Vl.name, Vl);
  }
}), pf = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), hf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], mf = /* @__PURE__ */ A("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), yf = [mf];
function gf(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, yf, 14, hf);
}
var Ll = /* @__PURE__ */ ce(pf, [["render", gf]]);
const bf = Object.assign(Ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ll.name, Ll);
  }
}), _f = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, bo = Symbol("ArcoTabs"), Cf = I({
  name: "TabsTab",
  components: {
    IconHover: Qe,
    IconClose: fn
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
    const n = Y("tabs-tab"), l = Ue(bo, {}), o = (u) => {
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
function $f(e, t, n, l, o, r) {
  const a = he("icon-close"), i = he("icon-hover");
  return $(), V("div", ie({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [A("span", {
    class: L(`${e.prefixCls}-title`)
  }, [J(e.$slots, "default")], 2), e.editable && e.tab.closable ? ($(), X(i, {
    key: 0,
    class: L(`${e.prefixCls}-close-btn`),
    onClick: at(e.handleDelete, ["stop"])
  }, {
    default: Z(() => [f(a)]),
    _: 1
  }, 8, ["class", "onClick"])) : pe("v-if", !0)], 16);
}
var kf = /* @__PURE__ */ ce(Cf, [["render", $f]]);
function wf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !lo(e);
}
var ya = I({
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
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? f(Kc, null, null) : f(_d, null, null) : e.type === "next" ? f(dr, null, null) : f(Ed, null, null), r = d(() => [n, {
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
      }, wf(a = o()) ? a : {
        default: () => [a]
      })]);
    };
  }
});
const Sf = I({
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
    } = ge(e), n = Y("tabs-nav-ink"), l = m(0), o = m(0), r = d(() => e.direction === "vertical" ? {
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
    Ae(() => {
      Ke(() => a());
    }), ft(() => {
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
function Ef(e, t, n, l, o, r) {
  return $(), V("div", {
    class: L(e.cls),
    style: re(e.style)
  }, null, 6);
}
var Of = /* @__PURE__ */ ce(Sf, [["render", Ef]]), xf = I({
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
    } = ge(e), i = Y("tabs-nav"), s = m(), u = m(), c = m({}), v = d(() => {
      if (!je(o.value))
        return c.value[o.value];
    }), p = m(), h = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), g = m(!1), C = m(0), k = m(0), N = m([]), B = m(0), E = () => {
      var le, se, Se;
      return (Se = a.value === "vertical" ? (le = s.value) == null ? void 0 : le.offsetHeight : (se = s.value) == null ? void 0 : se.offsetWidth) != null ? Se : 0;
    }, y = () => !u.value || !s.value ? 0 : a.value === "vertical" ? u.value.offsetHeight - s.value.offsetHeight : u.value.offsetWidth - s.value.offsetWidth, w = () => l.value.map((le) => {
      const se = c.value[le.key];
      return a.value === "vertical" ? se.offsetTop + se.offsetHeight : se.offsetLeft + se.offsetWidth;
    }), b = () => {
      g.value = _(), g.value ? (C.value = E(), k.value = y(), N.value = w(), B.value > k.value && (B.value = k.value)) : B.value = 0;
    }, _ = () => s.value && u.value ? e.direction === "vertical" ? u.value.offsetHeight > s.value.offsetHeight : u.value.offsetWidth > s.value.offsetWidth : !1, F = (le) => {
      var se;
      return ((se = N.value[le - 1]) != null ? se : 0) >= B.value && N.value[le] <= B.value + C.value;
    }, j = (le) => s.value ? le === "previous" ? B.value - C.value : B.value + C.value : 0, D = (le) => !s.value || !u.value || le < 0 ? 0 : le > k.value ? k.value : le, O = (le, se) => {
      t("click", le, se);
    }, R = (le, se) => {
      t("delete", le, se);
    }, H = (le) => {
      B.value = D(j(le));
    }, ee = () => {
      b(), p.value && p.value.$forceUpdate();
    };
    fe(l, () => {
      Ke(() => {
        b();
      });
    }), fe(r, (le, se) => {
      Ke(() => {
        var Se;
        if (g.value)
          if (le >= se) {
            const be = le < N.value.length - 1 ? le + 1 : le;
            F(be) || (B.value = N.value[be] - C.value);
          } else {
            const be = le > 0 ? le - 1 : le;
            F(be) || (B.value = (Se = N.value[be - 1]) != null ? Se : 0);
          }
      });
    }), Ae(() => {
      b();
    });
    const ne = () => !h.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (le) => t("add", le)
    }, [f(Qe, null, {
      default: () => [f(vr, null, null)]
    })]), oe = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), x = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), G = d(() => _f({
      direction: e.direction,
      type: e.type,
      offset: B.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: g.value
    }]);
    return () => {
      var le;
      return f("div", {
        class: oe.value
      }, [g.value && f(ya, {
        type: "previous",
        direction: e.direction,
        disabled: B.value <= 0,
        onClick: H
      }, null), f(on, {
        onResize: () => b()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(on, {
          onResize: ee
        }, {
          default: () => [f("div", {
            ref: u,
            class: x.value,
            style: G.value
          }, [e.tabs.map((se, Se) => f(kf, {
            key: se.key,
            ref: (be) => {
              be != null && be.$el && (c.value[se.key] = be.$el);
            },
            active: se.key === o.value,
            tab: se,
            editable: e.editable,
            onClick: O,
            onDelete: R
          }, {
            default: () => {
              var be, ye, ue;
              return [(ue = (ye = (be = se.slots).title) == null ? void 0 : ye.call(be)) != null ? ue : se.title];
            }
          })), e.type === "line" && v.value && f(Of, {
            ref: p,
            activeTabRef: v.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !g.value && ne()])]
      }), g.value && f(ya, {
        type: "next",
        direction: e.direction,
        disabled: B.value >= k.value,
        onClick: H
      }, null), f("div", {
        class: `${i}-extra`
      }, [g.value && ne(), (le = n.extra) == null ? void 0 : le.call(n)])]);
    };
  }
}), Dl = I({
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
    } = ge(e), i = Y("tabs"), {
      mergedSize: s
    } = pt(l), u = d(() => e.direction === "vertical" ? "left" : e.position), c = d(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), {
      children: v,
      components: p
    } = Od("TabPane"), h = Oe(/* @__PURE__ */ new Map()), g = d(() => {
      const O = [];
      return p.value.forEach((R) => {
        const H = h.get(R);
        H && O.push(H);
      }), O;
    }), C = d(() => g.value.map((O) => O.key)), k = (O, R) => {
      h.set(O, R);
    }, N = (O) => {
      h.delete(O);
    }, B = m(e.defaultActiveKey), E = d(() => {
      var O;
      const R = (O = e.activeKey) != null ? O : B.value;
      return je(R) ? C.value[0] : R;
    }), y = d(() => {
      const O = C.value.indexOf(E.value);
      return O === -1 ? 0 : O;
    });
    Ot(bo, Oe({
      lazyLoad: o,
      destroyOnHide: r,
      activeKey: E,
      addItem: k,
      removeItem: N,
      trigger: a
    }));
    const w = (O) => {
      O !== E.value && (B.value = O, t("update:activeKey", O), t("change", O));
    }, b = (O, R) => {
      w(O), t("tabClick", O, R);
    }, _ = (O) => {
      t("add", O), e.autoSwitch && Ke(() => {
        const R = C.value[C.value.length - 1];
        w(R);
      });
    }, F = (O, R) => {
      t("delete", O, R);
    }, j = () => f("div", {
      class: [`${i}-content`, {
        [`${i}-content-hide`]: e.hideContent
      }]
    }, [f("div", {
      class: [`${i}-content-list`, {
        [`${i}-content-animation`]: e.animation
      }],
      style: {
        marginLeft: `-${y.value * 100}%`
      }
    }, [v.value])]), D = d(() => [i, `${i}-${c.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var O;
      return v.value = (O = n.default) == null ? void 0 : O.call(n), f("div", {
        class: D.value
      }, [u.value === "bottom" && j(), f(xf, {
        tabs: g.value,
        activeKey: E.value,
        activeIndex: y.value,
        direction: c.value,
        position: u.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: b,
        onAdd: _,
        onDelete: F
      }, {
        extra: n.extra
      }), u.value !== "bottom" && j()]);
    };
  }
}), Pf = Object.defineProperty, ga = Object.getOwnPropertySymbols, Bf = Object.prototype.hasOwnProperty, Tf = Object.prototype.propertyIsEnumerable, ba = (e, t, n) => t in e ? Pf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, If = (e, t) => {
  for (var n in t || (t = {}))
    Bf.call(t, n) && ba(e, n, t[n]);
  if (ga)
    for (var n of ga(t))
      Tf.call(t, n) && ba(e, n, t[n]);
  return e;
};
const zf = I({
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
    } = ge(e), a = gt(), i = Y("tabs"), s = Ue(bo, {}), u = m(), c = d(() => a == null ? void 0 : a.vnode.key), v = d(() => c.value === s.activeKey), p = m(s.lazyLoad ? v.value : !0), h = Oe({
      key: c,
      title: l,
      disabled: o,
      closable: r,
      slots: t
    });
    return a != null && a.uid && ((n = s.addItem) == null || n.call(s, a.uid, h)), Ht(() => {
      var g;
      a != null && a.uid && ((g = s.removeItem) == null || g.call(s, a.uid));
    }), fe(v, (g) => {
      g ? p.value || (p.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (p.value = !1);
    }), ft(() => {
      h.slots = If({}, t);
    }), {
      prefixCls: i,
      active: v,
      itemRef: u,
      mounted: p
    };
  }
});
function Nf(e, t, n, l, o, r) {
  return $(), V("div", {
    ref: "itemRef",
    class: L([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? ($(), V("div", {
    key: 0,
    class: L(`${e.prefixCls}-pane`)
  }, [J(e.$slots, "default")], 2)) : pe("v-if", !0)], 2);
}
var En = /* @__PURE__ */ ce(zf, [["render", Nf]]);
const Vf = Object.assign(Dl, {
  TabPane: En,
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Dl.name, Dl), e.component(n + En.name, En);
  }
}), mr = Symbol("TreeInjectionKey");
function Lf(e) {
  const t = [];
  function n(l) {
    l && l.forEach((o) => {
      t.push(o), n(o.children);
    });
  }
  return n(e), t;
}
function Df(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function _a(e) {
  return e.selectable && !e.disabled;
}
function Ca(e) {
  return !e.isLeaf && e.children;
}
function Af(e) {
  return jt(e.isLeaf) ? e.isLeaf : !e.children;
}
function Ql(e) {
  return Set.prototype.add.bind(e);
}
function eo(e) {
  return Set.prototype.delete.bind(e);
}
function Ft(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function _o(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((l) => {
    Ft(l) && n.push(l.key, ..._o(l));
  }), n;
}
function yr(e) {
  var t;
  const {
    node: n,
    checkedKeySet: l,
    indeterminateKeySet: o
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
function $a(e) {
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
    const u = _o(t);
    n ? u.forEach(Ql(i)) : u.forEach(eo(i)), u.forEach(eo(s)), yr({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function Ff(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: l,
    onlyCheckLeaf: o
  } = e, r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return l ? t.forEach(Ql(r)) : t.forEach((s) => {
    var u;
    const c = n.get(s);
    if (!c || a.has(s) || o && ((u = c.children) != null && u.length))
      return;
    const v = _o(c);
    v.forEach(Ql(a)), v.forEach(eo(i)), r.add(s), i.delete(s), yr({
      node: c,
      checkedKeySet: r,
      indeterminateKeySet: i
    });
  }), [[...r, ...a], [...i]];
}
function Hn() {
  return Ue(mr) || {};
}
const jf = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Mf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Kf = /* @__PURE__ */ A("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), Rf = [Kf];
function Hf(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Rf, 14, Mf);
}
var Al = /* @__PURE__ */ ce(jf, [["render", Hf]]);
const Wf = Object.assign(Al, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Al.name, Al);
  }
});
var qf = I({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: dt,
    RenderFunction: pr
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
    } = ge(e), a = Hn(), i = it(t, "switcher-icon"), s = it(t, "loading-icon");
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
      return (e = r()) != null ? e : zt(dt);
    let p = null, h = !1;
    if (v)
      u && (p = (n = o()) != null ? n : zt(Wf));
    else {
      const C = u ? zt("span", {
        class: `${l}-${c ? "minus" : "plus"}-icon`
      }) : zt(bf);
      p = (t = o()) != null ? t : C, h = !u;
    }
    if (!p)
      return null;
    const g = zt("span", {
      class: `${l}-switcher-icon`,
      onClick: a
    }, p);
    return h ? zt(Qe, {
      class: `${l}-icon-hover`
    }, () => g) : g;
  }
}), Gf = Object.defineProperty, Uf = Object.defineProperties, Yf = Object.getOwnPropertyDescriptors, ka = Object.getOwnPropertySymbols, Zf = Object.prototype.hasOwnProperty, Xf = Object.prototype.propertyIsEnumerable, wa = (e, t, n) => t in e ? Gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, to = (e, t) => {
  for (var n in t || (t = {}))
    Zf.call(t, n) && wa(e, n, t[n]);
  if (ka)
    for (var n of ka(t))
      Xf.call(t, n) && wa(e, n, t[n]);
  return e;
}, Sa = (e, t) => Uf(e, Yf(t));
const gr = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Jf(e, t) {
  return !!(je(e) ? t : e);
}
function Qf(e, t) {
  const n = to({}, e);
  return t && Object.keys(t).forEach((o) => {
    const r = t[o];
    r !== o && (n[o] = e[r], delete n[r]);
  }), n;
}
function Ea({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: l,
  level: o
}) {
  return je(e) ? Ge(t) ? t(l, {
    isLeaf: n,
    level: o
  }) : t ?? !1 : e;
}
function ev(e) {
  var t, n;
  const {
    treeNodeData: l,
    parentNode: o,
    isTail: r = !0,
    treeProps: a
  } = e, {
    fieldNames: i
  } = a || {}, s = Qf(l, i), u = a.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), c = o ? o.level + 1 : 0, v = Sa(to({}, Wt(s, ["children"])), {
    key: (n = s.key) != null ? n : gr(),
    selectable: Ea({
      subEnable: s.selectable,
      superEnable: a == null ? void 0 : a.selectable,
      isLeaf: u,
      level: c,
      treeNodeData: l
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: Ea({
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
    draggable: Jf(s.draggable, a == null ? void 0 : a.draggable)
  });
  return Sa(to({}, v), {
    treeNodeProps: v,
    treeNodeData: l,
    parent: o,
    parentKey: o == null ? void 0 : o.key,
    pathParentKeys: o ? [...o.pathParentKeys, o.key] : []
  });
}
function tv(e, t) {
  function n(l, o) {
    if (!l)
      return;
    const {
      fieldNames: r
    } = t, a = [];
    return l.forEach((i, s) => {
      const u = ev({
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
function br() {
  const e = gt(), t = () => {
    var l;
    return (l = e == null ? void 0 : e.vnode.key) != null ? l : gr();
  }, n = m(t());
  return ft(() => {
    n.value = t();
  }), n;
}
function nv(e) {
  const {
    key: t,
    refTitle: n
  } = ge(e), l = Hn(), o = m(!1), r = m(!1), a = m(!1), i = m(0), s = Yl((u) => {
    if (!n.value)
      return;
    const c = n.value.getBoundingClientRect(), v = window.pageYOffset + c.top, {
      pageY: p
    } = u, h = c.height / 4, g = p - v;
    i.value = g < h ? -1 : g < c.height - h ? 0 : 1, a.value = l.allowDrop ? l.allowDrop(t.value, i.value) : !0;
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
function lv(e) {
  return Me(e) ? e : [e];
}
const ov = I({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: qf,
    Checkbox: rr,
    RenderFunction: pr,
    IconDragDotVertical: af
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
    const t = br(), n = Y("tree-node"), l = Hn(), o = d(() => {
      var x;
      return (x = l.key2TreeNode) == null ? void 0 : x.get(t.value);
    }), r = d(() => o.value.treeNodeData), a = d(() => o.value.children), i = d(() => {
      var x;
      const G = (x = l.treeProps) == null ? void 0 : x.actionOnNodeClick;
      return G ? lv(G) : [];
    }), {
      isLeaf: s,
      isTail: u,
      selectable: c,
      disabled: v,
      disableCheckbox: p,
      draggable: h
    } = ge(e), g = d(() => {
      var x;
      return [`${n}`, {
        [`${n}-selected`]: F.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: u.value,
        [`${n}-expanded`]: j.value,
        [`${n}-disabled-selectable`]: !c.value && !((x = l.treeProps) != null && x.disableSelectActionOnly),
        [`${n}-disabled`]: v.value
      }];
    }), C = m(), {
      isDragOver: k,
      isDragging: N,
      isAllowDrop: B,
      dropPosition: E,
      setDragStatus: y
    } = nv(Oe({
      key: t,
      refTitle: C
    })), w = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: h.value,
      [`${n}-title-gap-top`]: k.value && B.value && E.value < 0,
      [`${n}-title-gap-bottom`]: k.value && B.value && E.value > 0,
      [`${n}-title-highlight`]: !N.value && k.value && B.value && E.value === 0,
      [`${n}-title-dragging`]: N.value,
      [`${n}-title-block`]: o.value.blockNode
    }]), b = d(() => {
      var x, G;
      return (G = (x = l.checkedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), _ = d(() => {
      var x, G;
      return (G = (x = l.indeterminateKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), F = d(() => {
      var x, G;
      return (G = (x = l.selectedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), j = d(() => {
      var x, G;
      return (G = (x = l.expandedKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), D = d(() => {
      var x, G;
      return (G = (x = l.loadingKeys) == null ? void 0 : x.includes) == null ? void 0 : G.call(x, t.value);
    }), O = d(() => l.dragIcon), R = d(() => l.nodeIcon);
    function H(x) {
      var G, me;
      s.value || (!((G = a.value) != null && G.length) && Ge(l.onLoadMore) ? l.onLoadMore(t.value) : (me = l == null ? void 0 : l.onExpand) == null || me.call(l, !j.value, t.value, x));
    }
    const ee = Oe({
      loading: D,
      checked: b,
      selected: F,
      indeterminate: _,
      expanded: j,
      isLeaf: s
    }), ne = d(() => l.nodeTitle ? () => {
      var x;
      return (x = l.nodeTitle) == null ? void 0 : x.call(l, r.value, ee);
    } : void 0), oe = d(() => l.nodeExtra ? () => {
      var x;
      return (x = l.nodeExtra) == null ? void 0 : x.call(l, r.value, ee);
    } : void 0);
    return {
      nodekey: t,
      refTitle: C,
      prefixCls: n,
      classNames: g,
      titleClassNames: w,
      indeterminate: _,
      checked: b,
      expanded: j,
      selected: F,
      treeTitle: ne,
      treeNodeData: r,
      loading: D,
      treeDragIcon: O,
      treeNodeIcon: R,
      extra: oe,
      nodeStatus: ee,
      onCheckboxChange(x, G) {
        var me;
        p.value || v.value || (me = l.onCheck) == null || me.call(l, x, t.value, G);
      },
      onTitleClick(x) {
        var G;
        i.value.includes("expand") && H(x), !(!c.value || v.value) && ((G = l.onSelect) == null || G.call(l, t.value, x));
      },
      onSwitcherClick: H,
      onDragStart(x) {
        var G;
        if (h.value) {
          x.stopPropagation(), y("dragStart", x);
          try {
            (G = x.dataTransfer) == null || G.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(x) {
        h.value && (x.stopPropagation(), y("dragEnd", x));
      },
      onDragOver(x) {
        h && (x.stopPropagation(), x.preventDefault(), y("dragOver", x));
      },
      onDragLeave(x) {
        h.value && (x.stopPropagation(), y("dragLeave", x));
      },
      onDrop(x) {
        !h.value || !B.value || (x.stopPropagation(), x.preventDefault(), y("drop", x));
      }
    };
  }
}), av = ["data-level", "data-key"], rv = ["draggable"];
function iv(e, t, n, l, o, r) {
  const a = he("NodeSwitcher"), i = he("Checkbox"), s = he("RenderFunction"), u = he("IconDragDotVertical");
  return $(), V("div", {
    class: L(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [pe(" 缩进 "), A("span", {
    class: L(`${e.prefixCls}-indent`)
  }, [($(!0), V(xe, null, St(e.level, (c) => ($(), V("span", {
    key: c,
    class: L([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[c - 1]
    }])
  }, null, 2))), 128))], 2), pe(" switcher "), A("span", {
    class: L([`${e.prefixCls}-switcher`, {
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
  }, Aa({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: Z(() => [pe(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), J(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: Z(() => [pe(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), J(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), pe(" checkbox "), e.checkable ? ($(), X(i, {
    key: 0,
    disabled: e.disableCheckbox || e.disabled,
    "model-value": e.checked,
    indeterminate: e.indeterminate,
    "uninject-group-context": "",
    onChange: e.onCheckboxChange
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : pe("v-if", !0), pe(" 内容 "), A("span", {
    ref: "refTitle",
    class: L(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...c) => e.onDragStart && e.onDragStart(...c)),
    onDragend: t[1] || (t[1] = (...c) => e.onDragEnd && e.onDragEnd(...c)),
    onDragover: t[2] || (t[2] = (...c) => e.onDragOver && e.onDragOver(...c)),
    onDragleave: t[3] || (t[3] = (...c) => e.onDragLeave && e.onDragLeave(...c)),
    onDrop: t[4] || (t[4] = (...c) => e.onDrop && e.onDrop(...c)),
    onClick: t[5] || (t[5] = (...c) => e.onTitleClick && e.onTitleClick(...c))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? ($(), V("span", {
    key: 0,
    class: L([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [pe(" 节点图标 "), e.$slots.icon ? J(e.$slots, "icon", ql(ie({
    key: 0
  }, e.nodeStatus))) : e.icon ? ($(), X(s, ie({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? ($(), X(s, ie({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : pe("v-if", !0)], 2)) : pe("v-if", !0), A("span", {
    class: L(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? ($(), X(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : ($(), V(xe, {
    key: 1
  }, [pe(" 标题，treeTitle 优先级高于节点的 title "), J(e.$slots, "title", {
    title: e.title
  }, () => [Ne(Be(e.title), 1)])], 2112)), e.draggable ? ($(), V("span", {
    key: 2,
    class: L([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [pe(" 拖拽图标 "), e.$slots["drag-icon"] ? J(e.$slots, "drag-icon", ql(ie({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? ($(), X(s, ie({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? ($(), X(s, ie({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : ($(), X(u, {
    key: 3
  }))], 2)) : pe("v-if", !0)], 2)], 42, rv), pe(" 额外 "), e.extra ? ($(), X(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : pe("v-if", !0)], 10, av);
}
var no = /* @__PURE__ */ ce(ov, [["render", iv]]);
const sv = I({
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
function uv(e, t, n, l, o, r) {
  return $(), X(Ln, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: Z(() => [J(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var cv = /* @__PURE__ */ ce(sv, [["render", uv]]);
const dv = I({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: cv,
    BaseTreeNode: no
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${Y("tree")}-node-list`], l = Hn(), {
      nodeKey: o
    } = ge(e), r = d(() => {
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
          return (p = v.pathParentKeys) == null ? void 0 : p.every((g) => u.has(g));
        const h = v.pathParentKeys.indexOf(o.value);
        return v.pathParentKeys.slice(h + 1).every((g) => u.has(g));
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
function fv(e, t, n, l, o, r) {
  const a = he("BaseTreeNode"), i = he("ExpandTransition");
  return $(), X(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: Z(() => [e.show ? ($(), V("div", {
      key: 0,
      class: L(e.classNames)
    }, [($(!0), V(xe, null, St(e.visibleNodeList, (s) => ($(), X(a, ie({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : pe("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var vv = /* @__PURE__ */ ce(dv, [["render", fv]]), pv = Object.defineProperty, Oa = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, mv = Object.prototype.propertyIsEnumerable, xa = (e, t, n) => t in e ? pv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, yv = (e, t) => {
  for (var n in t || (t = {}))
    hv.call(t, n) && xa(e, n, t[n]);
  if (Oa)
    for (var n of Oa(t))
      mv.call(t, n) && xa(e, n, t[n]);
  return e;
}, gv = I({
  name: "TreeNode",
  inheritAttrs: !1,
  props: yv({}, no.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = br();
    return () => f(xe, null, [f(no, ie(e, n, {
      key: l.value
    }), t), f(vv, {
      key: l.value,
      nodeKey: l.value
    }, null)]);
  }
});
function bv(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: l,
    checkStrictly: o,
    halfCheckedKeys: r,
    onlyCheckLeaf: a
  } = ge(e), i = m(!1), s = m([]), u = m([]), c = m(), v = m(), p = (g) => Ff({
    initCheckedKeys: g,
    key2TreeNode: l.value,
    checkStrictly: o.value,
    onlyCheckLeaf: a.value
  }), h = (g) => {
    const C = p(g);
    [s.value, u.value] = C;
  };
  return h(n.value || (t == null ? void 0 : t.value) || []), Dn(() => {
    n.value ? [c.value, v.value] = p(n.value) : i.value && (c.value = void 0, v.value = void 0, s.value = [], u.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => c.value || s.value),
    indeterminateKeys: d(() => o.value && r.value ? r.value : v.value || u.value),
    setCheckedState(g, C, k = !1) {
      return k ? h(g) : (s.value = g, u.value = C), [s.value, u.value];
    }
  };
}
function _v(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: l,
    showLine: o,
    blockNode: r,
    checkable: a,
    loadMore: i,
    draggable: s
  } = ge(e), u = m([]);
  Dn(() => {
    var p, h;
    u.value = tv(t.value || [], {
      selectable: (p = l == null ? void 0 : l.value) != null ? p : !1,
      showLine: !!(o != null && o.value),
      blockNode: !!(r != null && r.value),
      checkable: (h = a == null ? void 0 : a.value) != null ? h : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const c = d(() => Lf(u.value)), v = d(() => Df(c.value));
  return {
    treeData: u,
    flattenTreeData: c,
    key2TreeNode: v
  };
}
const Cv = I({
  name: "Tree",
  components: {
    VirtualList: cr,
    TreeNode: gv
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
      checkedStrategy: g,
      selectable: C,
      checkable: k,
      blockNode: N,
      fieldNames: B,
      size: E,
      defaultExpandAll: y,
      filterTreeNode: w,
      draggable: b,
      allowDrop: _,
      defaultExpandSelected: F,
      defaultExpandChecked: j,
      autoExpandParent: D,
      halfCheckedKeys: O,
      onlyCheckLeaf: R,
      animation: H
    } = ge(e), ee = Y("tree"), ne = d(() => [`${ee}`, {
      [`${ee}-checkable`]: k.value,
      [`${ee}-show-line`]: o.value
    }, `${ee}-size-${E.value}`]), oe = it(n, "switcher-icon"), x = it(n, "loading-icon"), G = it(n, "drag-icon"), me = it(n, "icon"), le = it(n, "title"), se = it(n, "extra"), {
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ye
    } = _v(Oe({
      treeData: l,
      selectable: C,
      showLine: o,
      blockNode: N,
      checkable: k,
      fieldNames: B,
      loadMore: a,
      draggable: b
    })), {
      checkedKeys: ue,
      indeterminateKeys: ke,
      setCheckedState: tt
    } = bv(Oe({
      defaultCheckedKeys: u,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: ye,
      halfCheckedKeys: O,
      onlyCheckLeaf: R
    })), [Te, Fe] = In((v == null ? void 0 : v.value) || [], Oe({
      value: c
    })), We = m([]), Ve = m();
    function Ze() {
      if (h != null && h.value) {
        const M = /* @__PURE__ */ new Set([]);
        return h.value.forEach((U) => {
          if (M.has(U))
            return;
          const Q = ye.value.get(U);
          Q && [...D.value ? Q.pathParentKeys : [], U].forEach((ae) => M.add(ae));
        }), [...M];
      }
      if (y.value)
        return be.value.filter((M) => M.children && M.children.length).map((M) => M.key);
      if (F.value || j.value) {
        const M = /* @__PURE__ */ new Set([]), U = (Q) => {
          Q.forEach((ae) => {
            const ve = ye.value.get(ae);
            ve && (ve.pathParentKeys || []).forEach((_e) => M.add(_e));
          });
        };
        return F.value && U(Te.value), j.value && U(ue.value), [...M];
      }
      return [];
    }
    const [q, P] = In(Ze(), Oe({
      value: p
    })), W = m([]), de = d(() => {
      const M = new Set(q.value), U = new Set(W.value);
      return be.value.filter((Q) => {
        var ae;
        if (!(!w || !w.value || (w == null ? void 0 : w.value(Q.treeNodeData))))
          return !1;
        const _e = je(Q.parentKey), $t = (ae = Q.pathParentKeys) == null ? void 0 : ae.every((It) => M.has(It) && !U.has(It));
        return _e || $t;
      });
    });
    function we(M, U = g.value) {
      let Q = [...M];
      return U === "parent" ? Q = M.filter((ae) => {
        const ve = ye.value.get(ae);
        return ve && !(!je(ve.parentKey) && M.includes(ve.parentKey));
      }) : U === "child" && (Q = M.filter((ae) => {
        var ve, _e;
        return !((_e = (ve = ye.value.get(ae)) == null ? void 0 : ve.children) != null && _e.length);
      })), Q;
    }
    function Ee(M) {
      return M.map((U) => {
        var Q;
        return ((Q = ye.value.get(U)) == null ? void 0 : Q.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Je(M) {
      const {
        targetKey: U,
        targetChecked: Q,
        newCheckedKeys: ae,
        newIndeterminateKeys: ve,
        event: _e
      } = M, $t = U ? ye.value.get(U) : void 0, It = we(ae);
      t("update:checkedKeys", It), t("update:halfCheckedKeys", ve), t("check", It, {
        checked: Q,
        node: $t == null ? void 0 : $t.treeNodeData,
        checkedNodes: Ee(It),
        halfCheckedKeys: ve,
        halfCheckedNodes: Ee(ve),
        e: _e
      });
    }
    function ze(M) {
      const {
        targetKey: U,
        targetSelected: Q,
        newSelectedKeys: ae,
        event: ve
      } = M, _e = U ? ye.value.get(U) : void 0;
      t("update:selectedKeys", ae), t("select", ae, {
        selected: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        selectedNodes: Ee(ae),
        e: ve
      });
    }
    function _t(M) {
      const {
        targetKey: U,
        targetExpanded: Q,
        newExpandedKeys: ae,
        event: ve
      } = M, _e = U ? ye.value.get(U) : void 0;
      t("expand", ae, {
        expanded: Q,
        node: _e == null ? void 0 : _e.treeNodeData,
        expandedNodes: Ee(ae),
        e: ve
      }), t("update:expandedKeys", ae);
    }
    function Ut(M) {
      const [U, Q] = tt(M, [], !0);
      Je({
        newCheckedKeys: U,
        newIndeterminateKeys: Q
      });
    }
    function Ct(M) {
      let U = M;
      !r.value && M.length > 1 && (U = [M[0]]), Fe(U), ze({
        newSelectedKeys: U
      });
    }
    function ot(M) {
      W.value = [], P(M), _t({
        newExpandedKeys: M
      });
    }
    function Tt(M, U, Q) {
      if (!M.length)
        return;
      let ae = [...ue.value], ve = [...ke.value];
      M.forEach((_e) => {
        const $t = ye.value.get(_e);
        $t && ([ae, ve] = $a({
          node: $t,
          checked: U,
          checkedKeys: [...ae],
          indeterminateKeys: [...ve],
          checkStrictly: i.value
        }));
      }), tt(ae, ve), Je({
        targetKey: Q,
        targetChecked: je(Q) ? void 0 : U,
        newCheckedKeys: ae,
        newIndeterminateKeys: ve
      });
    }
    function Yt(M, U, Q) {
      if (!M.length)
        return;
      let ae;
      if (r.value) {
        const ve = new Set(Te.value);
        M.forEach((_e) => {
          U ? ve.add(_e) : ve.delete(_e);
        }), ae = [...ve];
      } else
        ae = U ? [M[0]] : [];
      Fe(ae), ze({
        targetKey: Q,
        targetSelected: je(Q) ? void 0 : U,
        newSelectedKeys: ae
      });
    }
    function T(M, U, Q) {
      const ae = new Set(q.value);
      M.forEach((_e) => {
        U ? ae.add(_e) : ae.delete(_e), Ye(_e);
      });
      const ve = [...ae];
      P(ve), _t({
        targetKey: Q,
        targetExpanded: je(Q) ? void 0 : U,
        newExpandedKeys: ve
      });
    }
    function S(M, U, Q) {
      const ae = ye.value.get(U);
      if (!ae)
        return;
      const [ve, _e] = $a({
        node: ae,
        checked: M,
        checkedKeys: ue.value,
        indeterminateKeys: ke.value,
        checkStrictly: i.value
      });
      tt(ve, _e), Je({
        targetKey: U,
        targetChecked: M,
        newCheckedKeys: ve,
        newIndeterminateKeys: _e,
        event: Q
      });
    }
    function z(M, U) {
      if (!ye.value.get(M))
        return;
      let ae, ve;
      if (r.value) {
        const _e = new Set(Te.value);
        ve = !_e.has(M), ve ? _e.add(M) : _e.delete(M), ae = [..._e];
      } else
        ve = !0, ae = [M];
      Fe(ae), ze({
        targetKey: M,
        targetSelected: ve,
        newSelectedKeys: ae,
        event: U
      });
    }
    function te(M, U, Q) {
      if (W.value.includes(U) || !ye.value.get(U))
        return;
      const ve = new Set(q.value);
      M ? ve.add(U) : ve.delete(U);
      const _e = [...ve];
      P(_e), H.value && W.value.push(U), _t({
        targetKey: U,
        targetExpanded: M,
        newExpandedKeys: _e,
        event: Q
      });
    }
    function Ye(M) {
      const U = W.value.indexOf(M);
      W.value.splice(U, 1);
    }
    const qe = d(() => a != null && a.value ? async (M) => {
      if (!Ge(a.value))
        return;
      const U = ye.value.get(M);
      if (!U)
        return;
      const {
        treeNodeData: Q
      } = U;
      We.value = [.../* @__PURE__ */ new Set([...We.value, M])];
      try {
        await a.value(Q), We.value = We.value.filter((ae) => ae !== M), te(!0, M), ue.value.includes(M) && S(!0, M);
      } catch (ae) {
        We.value = We.value.filter((ve) => ve !== M), console.error("[tree]load data error: ", ae);
      }
    } : void 0), rt = Oe({
      treeProps: e,
      switcherIcon: oe,
      loadingIcon: x,
      dragIcon: G,
      nodeIcon: me,
      nodeTitle: le,
      nodeExtra: se,
      treeData: Se,
      flattenTreeData: be,
      key2TreeNode: ye,
      checkedKeys: ue,
      indeterminateKeys: ke,
      selectedKeys: Te,
      expandedKeys: q,
      loadingKeys: We,
      currentExpandKeys: W,
      onLoadMore: qe,
      filterTreeNode: w,
      onCheck: S,
      onSelect: z,
      onExpand: te,
      onExpandEnd: Ye,
      allowDrop(M, U) {
        const Q = ye.value.get(M);
        return Q && Ge(_.value) ? !!_.value({
          dropNode: Q.treeNodeData,
          dropPosition: U
        }) : !0;
      },
      onDragStart(M, U) {
        const Q = ye.value.get(M);
        Ve.value = Q, Q && t("dragStart", U, Q.treeNodeData);
      },
      onDragEnd(M, U) {
        const Q = ye.value.get(M);
        Ve.value = void 0, Q && t("dragEnd", U, Q.treeNodeData);
      },
      onDragOver(M, U) {
        const Q = ye.value.get(M);
        Q && t("dragOver", U, Q.treeNodeData);
      },
      onDragLeave(M, U) {
        const Q = ye.value.get(M);
        Q && t("dragLeave", U, Q.treeNodeData);
      },
      onDrop(M, U, Q) {
        const ae = ye.value.get(M);
        Ve.value && ae && !(ae.key === Ve.value.key || ae.pathParentKeys.includes(Ve.value.key || "")) && t("drop", {
          e: Q,
          dragNode: Ve.value.treeNodeData,
          dropNode: ae.treeNodeData,
          dropPosition: U
        });
      }
    });
    return Ot(mr, rt), {
      classNames: ne,
      visibleTreeNodeList: de,
      treeContext: rt,
      virtualListRef: m(),
      computedSelectedKeys: Te,
      computedExpandedKeys: q,
      computedCheckedKeys: ue,
      computedIndeterminateKeys: ke,
      getPublicCheckedKeys: we,
      getNodes: Ee,
      internalCheckNodes: Tt,
      internalSetCheckedKeys: Ut,
      internalSelectNodes: Yt,
      internalSetSelectedKeys: Ct,
      internalExpandNodes: T,
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
      a && Ft(a) && l(r, e, t);
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
        return o && Ft(o);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: l,
        treeContext: o
      } = this, {
        key2TreeNode: r
      } = o, a = Me(e), i = (a ? e : [e]).filter((s) => {
        const u = r.get(s);
        return u && Ft(u) && (l || !n || Af(u));
      });
      this.internalCheckNodes(i, t, a ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && _a(o);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Me(e), o = (l ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && _a(a);
      });
      this.internalSelectNodes(o, t, l ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && Ca(o);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Me(e), o = (l ? e : [e]).filter((r) => {
        const a = n.get(r);
        return a && Ca(a);
      });
      this.internalExpandNodes(o, t, l ? void 0 : e);
    }
  }
});
function $v(e, t, n, l, o, r) {
  const a = he("TreeNode"), i = he("VirtualList");
  return $(), V("div", {
    class: L(e.classNames)
  }, [e.virtualListProps ? ($(), X(i, ie({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: Z(({
      item: s
    }) => [f(a, ie({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : ($(!0), V(xe, {
    key: 1
  }, St(e.visibleTreeNodeList, (s) => ($(), X(a, ie({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var Fl = /* @__PURE__ */ ce(Cv, [["render", $v]]);
const kv = Object.assign(Fl, {
  install: (e, t) => {
    He(e, t);
    const n = Re(t);
    e.component(n + Fl.name, Fl);
  }
}), wv = I({
  name: "TypographyEditContent",
  components: {
    Input: Kn
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
    return Ae(() => {
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
function Sv(e, t, n, l, o, r) {
  const a = he("Input");
  return $(), V("div", {
    class: L(e.classNames)
  }, [f(a, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: oo(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var Ev = /* @__PURE__ */ ce(wv, [["render", Sv]]);
const Ov = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), xv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Pv = /* @__PURE__ */ A("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), Bv = [Pv];
function Tv(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Bv, 14, xv);
}
var jl = /* @__PURE__ */ ce(Ov, [["render", Tv]]);
const Iv = Object.assign(jl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + jl.name, jl);
  }
}), zv = I({
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
      return e.size && (a.fontSize = $e(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (a) => {
        t("click", a);
      }
    };
  }
}), Nv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Vv = /* @__PURE__ */ A("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), Lv = [Vv];
function Dv(e, t, n, l, o, r) {
  return $(), V("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: L(e.cls),
    style: re(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, Lv, 14, Nv);
}
var Ml = /* @__PURE__ */ ce(zv, [["render", Dv]]);
const Av = Object.assign(Ml, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ml.name, Ml);
  }
}), Fv = I({
  name: "TypographyOperations",
  components: {
    Tooltip: pn,
    IconCheckCircleFill: fo,
    IconCopy: Iv,
    IconEdit: Av
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
    } = ao();
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
function jv(e, t, n, l, o, r) {
  const a = he("IconEdit"), i = he("Tooltip"), s = he("IconCheckCircleFill"), u = he("IconCopy");
  return $(), V(xe, null, [e.editable ? ($(), X(i, ie({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: Z(() => [A("span", {
      class: L(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = at((...c) => e.onEditClick && e.onEditClick(...c), ["stop"]))
    }, [f(a)], 2)]),
    _: 1
  }, 16, ["content"])) : pe("v-if", !0), e.copyable ? ($(), X(i, ql(ie({
    key: 1
  }, e.copyTooltipProps)), {
    content: Z(() => [J(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [Ne(Be(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: Z(() => [A("span", {
      class: L({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = at((...c) => e.onCopyClick && e.onCopyClick(...c), ["stop"]))
    }, [J(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? ($(), X(s, {
      key: 0
    })) : ($(), X(u, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : pe("v-if", !0), e.showExpand ? ($(), V("a", {
    key: 2,
    class: L(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = at((...c) => e.onExpandClick && e.onExpandClick(...c), ["stop"]))
  }, [J(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [Ne(Be(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : pe("v-if", !0)], 64);
}
var Pa = /* @__PURE__ */ ce(Fv, [["render", jv]]);
let Le;
function Mv(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function Kl(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var Kv = (e, t, n, l) => {
  Le || (Le = document.createElement("div"), document.body.appendChild(Le));
  const {
    rows: o,
    suffix: r,
    ellipsisStr: a
  } = t, i = window.getComputedStyle(e), s = Mv(i), u = Kl(i.lineHeight), c = Math.round(u * o + Kl(i.paddingTop) + Kl(i.paddingBottom));
  Le.setAttribute("style", s), Le.setAttribute("aria-hidden", "true"), Le.style.height = "auto", Le.style.minHeight = "auto", Le.style.maxHeight = "auto", Le.style.position = "fixed", Le.style.left = "0", Le.style.top = "-99999999px", Le.style.zIndex = "-200", Le.style.whiteSpace = "normal";
  const v = ja({
    render() {
      return f("span", null, [n]);
    }
  });
  v.mount(Le);
  const p = Array.prototype.slice.apply(Le.childNodes[0].cloneNode(!0).childNodes);
  v.unmount(), Le.innerHTML = "";
  const h = document.createTextNode(`${a}${r}`);
  Le.appendChild(h), p.forEach((N) => {
    Le.appendChild(N);
  });
  const g = document.createTextNode(l);
  Le.insertBefore(g, h);
  function C() {
    return Le.offsetHeight <= c;
  }
  if (C())
    return {
      ellipsis: !1,
      text: l
    };
  function k(N, B = 0, E = l.length, y = 0) {
    const w = Math.floor((B + E) / 2), b = l.slice(0, w);
    if (N.textContent = b, B >= E - 1)
      for (let _ = E; _ >= B; _ -= 1) {
        const F = l.slice(0, _);
        if (N.textContent = F, C() || !F)
          return;
      }
    C() ? k(N, w, E, w) : k(N, B, w, y);
  }
  return k(g), {
    text: g.textContent,
    ellipsis: !0
  };
};
const Rv = async (e) => {
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
function Hv(e) {
  if (!e)
    return "";
  Nt || (Nt = document.createElement("div"), Nt.setAttribute("aria-hidden", "true"), document.body.appendChild(Nt));
  const t = ja({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(Nt);
  const n = Nt.innerText;
  return t.unmount(), n;
}
var Wv = Object.defineProperty, qv = Object.defineProperties, Gv = Object.getOwnPropertyDescriptors, Ba = Object.getOwnPropertySymbols, Uv = Object.prototype.hasOwnProperty, Yv = Object.prototype.propertyIsEnumerable, Ta = (e, t, n) => t in e ? Wv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zv = (e, t) => {
  for (var n in t || (t = {}))
    Uv.call(t, n) && Ta(e, n, t[n]);
  if (Ba)
    for (var n of Ba(t))
      Yv.call(t, n) && Ta(e, n, t[n]);
  return e;
}, Xv = (e, t) => qv(e, Gv(t));
function _r(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !lo(e);
}
function Jv(e) {
  const {
    bold: t,
    mark: n,
    underline: l,
    delete: o,
    code: r
  } = e, a = [];
  return t && a.push("b"), l && a.push("u"), o && a.push("del"), r && a.push("code"), n && a.push("mark"), a;
}
function Ia(e, t) {
  const {
    mark: n
  } = e, l = Jv(e), o = De(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return l.reduce((r, a) => f(a, a === "mark" ? {
    style: o
  } : {}, _r(r) ? r : {
    default: () => [r]
  }), t);
}
function Qv(e) {
  const t = !!e.showTooltip, n = De(e.showTooltip) && e.showTooltip.type === "popover" ? kc : pn, l = De(e.showTooltip) && e.showTooltip.props || {};
  return Xv(Zv({
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
var ep = I({
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
    } = ge(e), h = Y("typography"), g = d(() => [h, {
      [`${h}-${e.type}`]: e.type,
      [`${h}-disabled`]: e.disabled
    }]), C = m(), k = m(""), [N, B] = In(r.value, Oe({
      value: o
    })), E = d(() => s.value && N.value);
    function y() {
      n("update:editing", !0), n("editStart"), B(!0);
    }
    function w(ue) {
      n("update:editText", ue), n("change", ue);
    }
    function b() {
      N.value && (n("update:editing", !1), n("editEnd"), B(!1));
    }
    const _ = m(!1);
    let F = null;
    function j() {
      var ue;
      const ke = (ue = u.value) != null ? ue : k.value;
      Rv(ke || ""), _.value = !0, n("copy", ke), F = setTimeout(() => {
        _.value = !1;
      }, v.value);
    }
    Wl(() => {
      F && clearTimeout(F), F = null;
    });
    const D = m(!1), O = m(!1), R = m(""), H = d(() => Qv(De(a.value) && a.value || {}));
    let ee = null;
    function ne() {
      const ue = !O.value;
      O.value = ue, n("expand", ue);
    }
    function oe(ue = !1) {
      return H.value.css ? f(Pa, {
        editable: s.value,
        copyable: i.value,
        expandable: H.value.expandable,
        isCopied: _.value,
        isEllipsis: Se.value,
        expanded: O.value,
        forceRenderExpand: ue || O.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: y,
        onCopy: j,
        onExpand: ne
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(Pa, {
        editable: s.value,
        copyable: i.value,
        expandable: H.value.expandable,
        isCopied: _.value,
        isEllipsis: D.value,
        expanded: O.value,
        forceRenderExpand: ue,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: y,
        onCopy: j,
        onExpand: ne
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
        ellipsis: ue,
        text: ke
      } = Kv(C.value, H.value, oe(!!H.value.expandable), k.value);
      D.value !== ue && (D.value = ue, H.value.css || n("ellipsis", ue)), R.value !== ke && (R.value = ke || "");
    }
    function G() {
      a.value && !O.value && (Bn(ee), ee = er(() => {
        x();
      }));
    }
    Wl(() => {
      Bn(ee);
    }), fe(() => H.value.rows, () => {
      G();
    }), fe(a, (ue) => {
      ue ? G() : D.value = !1;
    });
    let me = [];
    const le = () => {
      if (a.value || i.value || s.value) {
        const ue = Hv(me);
        ue !== k.value && (k.value = ue, G());
      }
    };
    Ae(le), ft(le);
    const se = m(), Se = m(!1), be = () => {
      if (C.value && se.value) {
        const ue = se.value.offsetHeight > C.value.offsetHeight;
        ue !== Se.value && (Se.value = ue, n("ellipsis", ue));
      }
    }, ye = d(() => O.value ? {} : {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": H.value.rows,
      "-webkit-box-orient": "vertical"
    });
    return () => {
      var ue, ke;
      if (me = ((ue = t.default) == null ? void 0 : ue.call(t)) || [], E.value) {
        const de = (ke = c.value) != null ? ke : k.value;
        return f(Ev, {
          text: de,
          onChange: (we) => {
            we !== de && w(we);
          },
          onEnd: b
        }, null);
      }
      const {
        suffix: tt,
        ellipsisStr: Te,
        showTooltip: Fe,
        tooltipProps: We,
        TooltipComponent: Ve
      } = H.value, Ze = D.value && !O.value, q = Ze && !Fe ? {
        title: k.value
      } : {}, P = p.value;
      if (H.value.css) {
        const de = Ia(e, me), we = f(P, ie({
          class: g.value,
          ref: C,
          style: ye.value
        }, q, l), {
          default: () => [f("span", {
            ref: se
          }, [de])]
        });
        return Se.value ? f(Ve, ie(We, {
          onResize: () => be()
        }), {
          default: () => [we],
          content: () => k.value
        }) : f(on, {
          onResize: () => {
            be();
          }
        }, _r(we) ? we : {
          default: () => [we]
        });
      }
      const W = Ia(e, Ze ? R.value : me);
      return f(on, {
        onResize: () => G()
      }, {
        default: () => [f(P, ie({
          class: g.value,
          ref: C
        }, q, l), {
          default: () => [Ze && Fe ? f(Ve, We, {
            default: () => [f("span", null, [W])],
            content: () => k.value
          }) : W, Ze ? Te : null, tt, oe()]
        })]
      });
    };
  }
}), tp = I({
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
    } = ge(e), l = Y("typography"), o = d(() => t != null && t.value ? "blockquote" : "div"), r = d(() => [{
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
    return f(ep, ie({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function np(e) {
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
function lp(e, t, n, l) {
  const o = n ?? m(0);
  return fe(e, (r) => {
    if (!r)
      return;
    const a = np(t);
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
function Wn(e) {
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
      const s = Wn(a.parentElement).getFlexBoxInfo();
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
function op(e) {
  fe(e, (t) => {
    if (!t) {
      ln.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const n = Wn(t);
    ln.forEach((l, o) => {
      l.value = n.getComputedStyle(o).value;
    });
  });
}
function ap(e) {
  return ln.has(e) || ln.set(e, m(null)), ln.get(e);
}
function Et(e) {
  return Hr() ? (Wr(e), !0) : !1;
}
function Pe(e) {
  return typeof e == "function" ? e() : K(e);
}
const sn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rp = (e) => e != null, ip = Object.prototype.toString, sp = (e) => ip.call(e) === "[object Object]", up = () => {
};
function cp(e) {
  return e || gt();
}
function dp(e, t = {}) {
  if (!An(e))
    return ge(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    n[l] = Rr(() => ({
      get() {
        return e.value[l];
      },
      set(o) {
        var r;
        if ((r = Pe(t.replaceRef)) != null ? r : !0)
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
function Cr(e, t = !0, n) {
  cp() ? Ae(e, n) : t ? e() : Ke(e);
}
function fp(e, t = 1e3, n = {}) {
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
    const c = Pe(t);
    c <= 0 || (a.value = !0, o && e(), i(), r = setInterval(e, c));
  }
  if (l && sn && u(), An(t) || typeof t == "function") {
    const c = fe(t, () => {
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
  const n = Pe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const bt = sn ? window : void 0, vp = sn ? window.document : void 0;
function Xe(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = bt) : [t, n, l, o] = e, !t)
    return up;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const r = [], a = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, v, p, h) => (c.addEventListener(v, p, h), () => c.removeEventListener(v, p, h)), s = fe(
    () => [Rt(t), Pe(o)],
    ([c, v]) => {
      if (a(), !c)
        return;
      const p = sp(v) ? { ...v } : v;
      r.push(
        ...n.flatMap((h) => l.map((g) => i(c, h, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    s(), a();
  };
  return Et(u), u;
}
function pp() {
  const e = m(!1), t = gt();
  return t && Ae(() => {
    e.value = !0;
  }, t), e;
}
function qn(e) {
  const t = pp();
  return d(() => (t.value, !!e()));
}
function $r(e, t, n = {}) {
  const { window: l = bt, ...o } = n;
  let r;
  const a = qn(() => l && "MutationObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => {
    const p = Pe(e), h = (Array.isArray(p) ? p : [p]).map(Rt).filter(rp);
    return new Set(h);
  }), u = fe(
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
function hp(e, t = {}) {
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
function mp(e, t = {}) {
  const { window: n = bt } = t, l = qn(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = m(!1), a = (u) => {
    r.value = u.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", a) : o.removeListener(a));
  }, s = Dn(() => {
    l.value && (i(), o = n.matchMedia(Pe(e)), "addEventListener" in o ? o.addEventListener("change", a) : o.addListener(a), r.value = o.matches);
  });
  return Et(() => {
    s(), i(), o = void 0;
  }), r;
}
function yp(e, t = {}) {
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
    containerElement: g,
    handle: C = e
  } = t, k = m(
    (n = Pe(v)) != null ? n : { x: 0, y: 0 }
  ), N = m(), B = (_) => o ? o.includes(_.pointerType) : !0, E = (_) => {
    Pe(r) && _.preventDefault(), Pe(a) && _.stopPropagation();
  }, y = (_) => {
    var F;
    if (_.button !== 0 || Pe(t.disabled) || !B(_) || Pe(i) && _.target !== Pe(e))
      return;
    const j = Pe(g), D = (F = j == null ? void 0 : j.getBoundingClientRect) == null ? void 0 : F.call(j), O = Pe(e).getBoundingClientRect(), R = {
      x: _.clientX - (j ? O.left - D.left + j.scrollLeft : O.left),
      y: _.clientY - (j ? O.top - D.top + j.scrollTop : O.top)
    };
    (c == null ? void 0 : c(R, _)) !== !1 && (N.value = R, E(_));
  }, w = (_) => {
    if (Pe(t.disabled) || !B(_) || !N.value)
      return;
    const F = Pe(g), j = Pe(e).getBoundingClientRect();
    let { x: D, y: O } = k.value;
    (p === "x" || p === "both") && (D = _.clientX - N.value.x, F && (D = Math.min(Math.max(0, D), F.scrollWidth - j.width))), (p === "y" || p === "both") && (O = _.clientY - N.value.y, F && (O = Math.min(Math.max(0, O), F.scrollHeight - j.height))), k.value = {
      x: D,
      y: O
    }, s == null || s(k.value, _), E(_);
  }, b = (_) => {
    Pe(t.disabled) || !B(_) || N.value && (N.value = void 0, u == null || u(k.value, _), E(_));
  };
  if (sn) {
    const _ = { capture: (l = t.capture) != null ? l : !0 };
    Xe(C, "pointerdown", y, _), Xe(h, "pointermove", w, _), Xe(h, "pointerup", b, _);
  }
  return {
    ...dp(k),
    position: k,
    isDragging: d(() => !!N.value),
    style: d(
      () => `left:${k.value.x}px;top:${k.value.y}px;`
    )
  };
}
function gp(e, t, n = {}) {
  const { window: l = bt, ...o } = n;
  let r;
  const a = qn(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((v) => Rt(v)) : [Rt(e)]), u = fe(
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
function kr(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: l = !0,
    windowScroll: o = !0,
    immediate: r = !0
  } = t, a = m(0), i = m(0), s = m(0), u = m(0), c = m(0), v = m(0), p = m(0), h = m(0);
  function g() {
    const C = Rt(e);
    if (!C) {
      n && (a.value = 0, i.value = 0, s.value = 0, u.value = 0, c.value = 0, v.value = 0, p.value = 0, h.value = 0);
      return;
    }
    const k = C.getBoundingClientRect();
    a.value = k.height, i.value = k.bottom, s.value = k.left, u.value = k.right, c.value = k.top, v.value = k.width, p.value = k.x, h.value = k.y;
  }
  return gp(e, g), fe(() => Rt(e), (C) => !C && g()), $r(e, g, {
    attributeFilter: ["style", "class"]
  }), o && Xe("scroll", g, { capture: !0, passive: !0 }), l && Xe("resize", g, { passive: !0 }), Cr(() => {
    r && g();
  }), {
    height: a,
    bottom: i,
    left: s,
    right: u,
    top: c,
    width: v,
    x: p,
    y: h,
    update: g
  };
}
function bp(e) {
  const {
    x: t,
    y: n,
    document: l = vp,
    multiple: o,
    interval: r = "requestAnimationFrame",
    immediate: a = !0
  } = e, i = qn(() => Pe(o) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), s = m(null), u = () => {
    var v, p;
    s.value = Pe(o) ? (v = l == null ? void 0 : l.elementsFromPoint(Pe(t), Pe(n))) != null ? v : [] : (p = l == null ? void 0 : l.elementFromPoint(Pe(t), Pe(n))) != null ? p : null;
  }, c = r === "requestAnimationFrame" ? hp(u, { immediate: a }) : fp(u, r, { immediate: a });
  return {
    isSupported: i,
    element: s,
    ...c
  };
}
const _p = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function wr(e = {}) {
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
  const c = m(o.x), v = m(o.y), p = m(null), h = typeof t == "function" ? t : _p[t], g = (w) => {
    const b = h(w);
    u = w, b && ([c.value, v.value] = b, p.value = "mouse");
  }, C = (w) => {
    if (w.touches.length > 0) {
      const b = h(w.touches[0]);
      b && ([c.value, v.value] = b, p.value = "touch");
    }
  }, k = () => {
    if (!u || !r)
      return;
    const w = h(u);
    u instanceof MouseEvent && w && (c.value = w[0] + r.scrollX, v.value = w[1] + r.scrollY);
  }, N = () => {
    c.value = o.x, v.value = o.y;
  }, B = s ? (w) => s(() => g(w), {}) : (w) => g(w), E = s ? (w) => s(() => C(w), {}) : (w) => C(w), y = s ? () => s(() => k(), {}) : () => k();
  if (a) {
    const w = { passive: !0 };
    Xe(a, ["mousemove", "dragover"], B, w), n && t !== "movement" && (Xe(a, ["touchstart", "touchmove"], E, w), l && Xe(a, "touchend", N, w)), i && t === "page" && Xe(r, "scroll", y, { passive: !0 });
  }
  return {
    x: c,
    y: v,
    sourceType: p
  };
}
function Co(e = {}) {
  const {
    window: t = bt,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: r = !0
  } = e, a = m(n), i = m(l), s = () => {
    t && (r ? (a.value = t.innerWidth, i.value = t.innerHeight) : (a.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), Cr(s), Xe("resize", s, { passive: !0 }), o) {
    const u = mp("(orientation: portrait)");
    fe(u, () => s());
  }
  return { width: a, height: i };
}
function Sr(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function Cp() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function $p(e) {
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
function Er(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function $o(e, t) {
  if (!Er(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length);
  return null;
}
function mt(e, t) {
  if (!Er(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length));
  return null;
}
function Or(e, t) {
  const n = `*.${t.idPrefix}${e}`, l = document.querySelector(n);
  if (!l)
    throw new Error(`target element with id ${e} not found`);
  return l;
}
function kp(e, t) {
  for (const n of e.classList)
    if (n.startsWith(t.sourceCodePrefix))
      return n.slice(t.sourceCodePrefix.length);
  throw new Error("source code link not found");
}
function wp(e) {
  const t = document.createElement("a");
  t.href = e, t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
function Sp(e) {
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
function Rl(e, t) {
  t.add && e.classList.add(t.add), t.remove && e.classList.remove(t.remove), t.change && e.classList.replace(t.change.oldClass, t.change.newClass);
}
const Ce = m(null), lt = {
  props: Oe(/* @__PURE__ */ new Map()),
  styles: Oe(/* @__PURE__ */ new Map()),
  propsCode: m(null),
  stylesCode: m(null),
  classes: m([])
}, zn = /* @__PURE__ */ new Map();
function On() {
  return Ce;
}
function Ep(e) {
  const t = Or(e, Gn());
  Ce.value = t, Sp(t);
}
function Op(e) {
  Ce.value = e, Pr();
}
function ko(e) {
  if (zn.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = m(Symbol(e));
  return zn.set(e, t), un(t);
}
function xp(e) {
  const t = zn.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function xr() {
  return un(lt);
}
function Pp(e) {
  if (lt.props.clear(), lt.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      lt.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      lt.styles.set(t, n);
  e.propsCode !== void 0 && (lt.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (lt.stylesCode.value = e.stylesCode), e.classes !== void 0 && (lt.classes.value = e.classes), Pr();
}
function Bp() {
  return {
    props: lt.propsCode,
    styles: lt.stylesCode
  };
}
function Tp(e) {
  return d(() => lt.styles.has(e));
}
function Ip() {
  return d(() => Ce.value !== null);
}
function zp() {
  return d(() => Ce.value === null ? null : $o(Ce.value, Gn()));
}
function Pr() {
  for (const e of zn.values())
    e.value = Symbol(e.value.description);
}
const Nn = m("en"), wo = /* @__PURE__ */ new Map(), za = d(() => {
  const e = wo.get(Nn.value);
  if (e == null)
    throw new Error(`No message found for locale ${Nn.value}`);
  return e;
});
function Np(e) {
  Nn.value = e;
}
function Vp(e, t) {
  wo.set(e, t);
}
function Ie(e) {
  var t;
  return za.value.hasOwnProperty(e) ? za.value[e] : (console.warn(`No message found for key ${e} in locale ${Nn.value}`), ((t = wo.get("en")) == null ? void 0 : t[e]) || e.split(".").pop() || "");
}
const Br = m(!1), Lp = un(Br);
function Dp(e) {
  Br.value = e;
}
const Vt = m(null);
let st = d(() => null), hn, Tr, Ir, zr, Nr, Vr;
function Gn() {
  return hn;
}
function Ap(e) {
  Vt.value = Or(e, hn);
}
function Fp() {
  Vt.value = null;
}
function jp() {
  return Tr;
}
function Mp(e) {
  Ir = e.emitSetCommandFn, zr = e.emitResetCommandFn, e.emitJumpSourceCodeFn, Nr = e.emitApplyCommandFn, Vr = e.emitClassesUpdateFn, hn = e.selectorConfig, Tr = e.elementTreeData;
  const {
    hoverElement: t
  } = qp(e.selectorConfig);
  Gp(t), st = t, Np(e.languageConfig.locale), Object.entries(e.languageConfig.messages).forEach(([n, l]) => {
    Vp(n, l);
  });
}
function Kp() {
  const e = Ce.value;
  if (e) {
    const t = kp(e, hn);
    wp(t);
  }
}
function Hl(e) {
  const {
    targetId: t,
    classes: n
  } = e;
  let l = t;
  l === void 0 && Ce.value && (l = mt(Ce.value, hn)), Vr({
    targetId: l,
    classes: n
  });
}
function Rp() {
  Nr();
}
function Hp() {
  return Lp;
}
function Un(e) {
  Array.isArray(e) || (e = [e]), Ir(e);
}
function Wp(e, t = "style") {
  zr([{
    propertyName: e,
    type: t
  }]);
}
function qp(e) {
  const {
    x: t,
    y: n
  } = wr({
    type: "client"
  }), {
    element: l
  } = bp({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (l.value === null)
        return null;
      const r = l.value.closest(e.selectors);
      return r === null || r.closest("[layout-tool-panel]") ? Vt.value ? Vt.value : null : r;
    })
  };
}
function Gp(e) {
  Xe(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (Op(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Xe(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Up(e, t) {
  const n = ap(e);
  return d({
    get: () => n.value,
    set: (o) => {
      const r = {
        propertyName: e,
        values: {
          [e]: o
        }
      }, a = t ? t(o) : [];
      Un([r, ...a]), n.value = o;
    }
  });
}
const Yp = /* @__PURE__ */ I({
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
    const t = e, n = Up(t.styleName), l = d(() => {
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
    lp(i, t.direction, a, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function u() {
    }
    return (c, v) => ($(), V("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: re([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [A("div", {
      onClick: u
    }, [A("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, Be(a.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, ht = /* @__PURE__ */ et(Yp, [["__scopeId", "data-v-19de9462"]]), Zp = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, Xp = /* @__PURE__ */ I({
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
        header: K(Ie)("nt.style.spacing.header"),
        key: "spacing"
      }, {
        default: Z(() => [A("div", Zp, [A("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: re([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), a[0] || (a[0] = A("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), f(ht, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: re([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: re([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: re([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: re([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": o,
          "clip-path": l.left.clipPath,
          style: re({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": o,
          "clip-path": l.up.clipPath,
          style: re([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": o,
          "clip-path": l.right.clipPath,
          style: re({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(ht, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": o,
          "clip-path": l.bottom.clipPath,
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
const yt = {
  visTypeName: 999,
  mainPanelTooltip: 910,
  visHover: 900,
  aiming: 900,
  panel: 900
}, mn = {
  mainPanelTooltip: "body"
}, Jp = {
  class: "flex flex-row gap-0"
}, en = /* @__PURE__ */ I({
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
      const u = Mn, c = pn, v = vn;
      return $(), V("div", Jp, [K(r) ? ($(!0), V(xe, {
        key: 0
      }, St(K(l), (p) => ($(), X(c, {
        content: p.label,
        key: p.value,
        "popup-container": mn.mainPanelTooltip,
        style: re({
          "z-index": yt.mainPanelTooltip
        })
      }, {
        default: Z(() => [f(u, {
          size: "small",
          type: "outline",
          status: K(n) === p.value ? "success" : void 0,
          onClick: (h) => a(p.value)
        }, {
          icon: Z(() => [A("span", {
            class: L(p.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content", "popup-container", "style"]))), 128)) : ($(!0), V(xe, {
        key: 1
      }, St(K(l), (p) => ($(), X(v, {
        key: p.value,
        checked: K(n) === p.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (h) => a(p.value)
      }, {
        default: Z(() => [Ne(Be(p.label), 1)]),
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
  })), r = ko(e.propertyName);
  fe(r, () => {
    if (!Ce.value)
      return;
    const i = Sr(Ce.value, t);
    l.value = i;
  }, {
    immediate: !0
  });
  function a() {
    Un({
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
const Qp = /* @__PURE__ */ I({
  __name: "BooleanSwitch",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: l,
      userEdited: o
    } = t.model;
    return (r, a) => {
      const i = vf;
      return $(), X(i, {
        class: "justify-self-start",
        modelValue: K(n),
        "onUpdate:modelValue": a[0] || (a[0] = (s) => An(n) ? n.value = s : null),
        "checked-value": K(l).checkedValue,
        "unchecked-value": K(l).uncheckedValue,
        onChange: K(o)
      }, null, 8, ["modelValue", "checked-value", "unchecked-value", "onChange"]);
    };
  }
});
function eh(e) {
  const {
    propertyName: t,
    options: n
  } = e, l = m(void 0), o = ko(e.propertyName);
  fe(o, () => {
    if (!Ce.value)
      return;
    const a = Sr(Ce.value, t);
    l.value = a;
  }, {
    immediate: !0
  });
  function r() {
    Un({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: l.value
      }
    });
  }
  return {
    value: l,
    options: n,
    userEdited: r
  };
}
const nt = /* @__PURE__ */ I({
  __name: "ItemLabel",
  props: {
    keyId: {},
    label: {}
  },
  emits: ["reset"],
  setup(e, {
    emit: t
  }) {
    const n = e, l = t, o = d(() => n.label ?? n.keyId), r = Tp(n.keyId);
    function a() {
      Wp(n.keyId), l("reset");
    }
    const i = d(() => r.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, u) => {
      const c = hr;
      return $(), X(c, {
        "popup-container": mn.mainPanelTooltip,
        content: K(Ie)("nt.property-reset-confirm"),
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: a,
        style: re({
          "z-index": yt.mainPanelTooltip
        })
      }, {
        default: Z(() => [A("div", {
          class: "px-2",
          style: re(i.value)
        }, [A("span", {
          class: L(["item-title text-capitalize", {
            "bg-gray-300": K(r)
          }])
        }, Be(o.value), 3)], 4)]),
        _: 1
      }, 8, ["popup-container", "content", "style"]);
    };
  }
}), th = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, nh = /* @__PURE__ */ I({
  __name: "Layout",
  setup(e) {
    const t = Wn(Ce), n = tn({
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
    }), r = d(() => o.value.value === "row" ? Ie("nt.style.layout.align-title-byRow") : Ie("nt.style.layout.align-title-byCol")), a = d(() => o.value.value === "row" ? [{
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
    }), s = d(() => o.value.value === "row" ? Ie("nt.style.layout.justify-title-byRow") : Ie("nt.style.layout.justify-title-byCol")), u = d(() => o.value.value === "row" ? [{
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
    }), v = eh({
      propertyName: "flex-wrap",
      options: {
        checkedValue: "wrap",
        uncheckedValue: "nowrap"
      }
    });
    return (p, h) => {
      const g = wt;
      return $(), X(g, {
        header: K(Ie)("nt.style.layout.header"),
        key: "layout"
      }, {
        default: Z(() => [A("div", th, [f(nt, {
          keyId: "display",
          label: K(Ie)("nt.style.layout.display-label")
        }, null, 8, ["label"]), f(en, {
          model: K(n)
        }, null, 8, ["model"]), K(l).isFlex ? ($(), V(xe, {
          key: 0
        }, [f(nt, {
          keyId: "flex-direction",
          label: K(Ie)("nt.style.layout.direction")
        }, null, 8, ["label"]), f(en, {
          model: K(o)
        }, null, 8, ["model"]), f(nt, {
          keyId: "flex-wrap",
          label: K(Ie)("nt.style.layout.wrap-label")
        }, null, 8, ["label"]), f(Qp, {
          model: K(v)
        }, null, 8, ["model"]), f(nt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(en, {
          model: K(c)
        }, null, 8, ["model"]), f(nt, {
          keyId: "align-items",
          label: r.value
        }, null, 8, ["label"]), f(en, {
          model: K(i)
        }, null, 8, ["model"])], 64)) : pe("", !0)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const lh = /* @__PURE__ */ et(nh, [["__scopeId", "data-v-ebec49a9"]]), oh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, ah = /* @__PURE__ */ I({
  __name: "FlexItem",
  setup(e) {
    const n = Wn(Ce).getParentFlexBoxInfo(), l = d(() => n.value.direction === "row" ? {
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
      return K(n).isFlex ? ($(), X(i, {
        header: K(Ie)("nt.style.flexitem.header"),
        key: "flex-item"
      }, {
        default: Z(() => [A("div", oh, [f(nt, {
          keyId: "align-self",
          label: l.value.title
        }, null, 8, ["label"]), f(en, {
          model: K(o)
        }, null, 8, ["model"])])]),
        _: 1
      }, 8, ["header"])) : pe("", !0);
    };
  }
});
const rh = /* @__PURE__ */ et(ah, [["__scopeId", "data-v-ef8fe436"]]);
const ih = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, qt = /* @__PURE__ */ I({
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
      var g;
      h.currentTarget === h.target && (i(p), a(), (g = u.value) == null || g.blur());
    }
    function v(p) {
      s(p), a();
    }
    return (p, h) => {
      const g = Kn, C = pd;
      return $(), V("div", ih, [f(g, {
        ref_key: "inputRef",
        ref: u,
        size: "mini",
        modelValue: K(n),
        "onUpdate:modelValue": h[0] || (h[0] = (k) => An(n) ? n.value = k : null),
        placeholder: K(o),
        onChange: c
      }, null, 8, ["modelValue", "placeholder"]), f(C, {
        "popup-container": mn.mainPanelTooltip,
        size: "mini",
        options: K(r),
        "model-value": K(l),
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
function sh(e, t) {
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
  } = e, o = m(t.input), r = m(t.select ?? (l == null ? void 0 : l.defaultOptionValue)), a = n.map((C) => typeof C == "string" ? {
    value: C,
    label: C
  } : C);
  function i(C) {
    return a.find((k) => k.value === C);
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
  }), v = ko(e.propertyName);
  fe(v, () => {
    const C = sh(xr(), e.propertyName);
    if (C === void 0) {
      o.value = t.input, r.value = t.select;
      return;
    }
    const {
      number: k,
      unit: N
    } = $p(C);
    o.value = k, r.value = N;
  });
  function p() {
    const C = o.value, k = r.value;
    let N = "";
    k === "auto" ? N = k : N = `${C}${k}`, Un({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: N
      }
    });
  }
  function h(C) {
    Na(r, o, l);
  }
  function g(C) {
    r.value = C, Va(r, o, l);
  }
  return Na(r, o, l), Va(r, o, l), {
    inputValue: o,
    selectValue: r,
    selectItem: s,
    selectDisplay: u,
    inputPlaceholder: c,
    itemOptions: a,
    userEdited: p,
    updateSelect: g,
    updateInput: h
  };
}
function Na(e, t, n) {
  const {
    nonValueOptions: l,
    defaultOptionValue: o,
    optionValueIfnonValue: r
  } = n ?? {}, a = t.value;
  a && (l && o && a.length > 0 && e.value && l.includes(e.value) && (e.value = o), r && l && a && e.value && l.includes(e.value) && (e.value = r), !a && l && (e.value = l[0]));
}
function Va(e, t, n) {
  const {
    nonValueOptions: l
  } = n ?? {}, o = e.value;
  if (o) {
    if (l && l.includes(o))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const r = Cp();
      n.specialProperty === "width" ? t.value = `${r.width}` : n.specialProperty === "height" && (t.value = `${r.height}`);
    }
  }
}
const uh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], ch = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], dh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], fh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], vh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], ph = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], hh = /* @__PURE__ */ I({
  __name: "Width",
  setup(e) {
    const n = Gt({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: uh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "width",
      label: "Width",
      class: "nt-size-width-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const mh = /* @__PURE__ */ et(hh, [["__scopeId", "data-v-01e1e2dc"]]), yh = /* @__PURE__ */ I({
  __name: "Height",
  setup(e) {
    const n = Gt({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: ch,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "height",
      label: "Height",
      class: "nt-size-height-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const gh = /* @__PURE__ */ et(yh, [["__scopeId", "data-v-219d1f9b"]]), bh = /* @__PURE__ */ I({
  __name: "MaxWidth",
  setup(e) {
    const n = Gt({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: fh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "max-width",
      label: "Max W",
      class: "nt-size-max-width-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-max-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const _h = /* @__PURE__ */ et(bh, [["__scopeId", "data-v-539b11de"]]), Ch = /* @__PURE__ */ I({
  __name: "MinWidth",
  setup(e) {
    const n = Gt({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: dh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "min-width",
      label: "Min W",
      class: "nt-size-min-width-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-min-width-input"
    }, null, 8, ["model"])], 64));
  }
});
const $h = /* @__PURE__ */ et(Ch, [["__scopeId", "data-v-df273eca"]]), kh = /* @__PURE__ */ I({
  __name: "MaxHeight",
  setup(e) {
    const n = Gt({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: ph,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "max-height",
      label: "Max H",
      class: "nt-size-max-height-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-max-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const wh = /* @__PURE__ */ et(kh, [["__scopeId", "data-v-97c693cb"]]), Sh = /* @__PURE__ */ I({
  __name: "MinHeight",
  setup(e) {
    const n = Gt({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: vh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (l, o) => ($(), V(xe, null, [f(nt, {
      "key-id": "min-height",
      label: "Min H",
      class: "nt-size-min-height-label"
    }), f(qt, {
      model: K(n),
      class: "nt-size-min-height-input"
    }, null, 8, ["model"])], 64));
  }
});
const Eh = /* @__PURE__ */ et(Sh, [["__scopeId", "data-v-2eecce31"]]), Oh = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, xh = /* @__PURE__ */ I({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const l = wt;
      return $(), X(l, {
        header: K(Ie)("nt.style.size.header"),
        key: "size"
      }, {
        default: Z(() => [A("div", Oh, [f(mh), f(gh), f($h), f(Eh), f(_h), f(wh)])]),
        _: 1
      }, 8, ["header"]);
    };
  }
});
const Ph = /* @__PURE__ */ et(xh, [["__scopeId", "data-v-c5aac6a8"]]);
function Bh() {
  return {
    treeData: jp()
  };
}
const Th = {
  class: "relative"
}, Ih = /* @__PURE__ */ I({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = m(null);
    function n(u) {
      const c = u[0];
      Ep(c);
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
      p < 0 || Ap(p);
    }
    function o(u) {
      Fp();
    }
    fe(On(), (u) => {
      if (u || t.value.selectAll(!1), t.value && u) {
        const c = mt(u, Gn());
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
      const v = kv, p = pn, h = mo;
      return $(), X(h, {
        style: {
          height: "500px",
          overflow: "auto"
        }
      }, {
        default: Z(() => [A("div", Th, [f(v, {
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
          "popup-container": mn.mainPanelTooltip,
          style: re({
            "z-index": yt.mainPanelTooltip
          })
        }, {
          default: Z(() => [A("div", {
            class: L(["text-xl absolute top-0 right-5 cursor-pointer", a.value]),
            onClick: s
          }, null, 2)]),
          _: 1
        }, 8, ["content", "popup-container", "style"])])]),
        _: 1
      });
    };
  }
});
const zh = /* @__PURE__ */ et(Ih, [["__scopeId", "data-v-0112a70c"]]);
function Nh() {
  return {
    code: Bp()
  };
}
const Vh = {}, Lh = {
  class: "border border-gray-300 border-solid p-2 rounded-md"
};
function Dh(e, t) {
  return $(), V("div", Lh, [J(e.$slots, "default")]);
}
const Lr = /* @__PURE__ */ et(Vh, [["render", Dh]]), Ah = /* @__PURE__ */ I({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (l, o) => {
      const r = tp;
      return $(), V("div", null, [o[0] || (o[0] = A("div", {
        class: "text-lg mb-2 text-gray-400"
      }, "styles", -1)), f(Lr, null, {
        default: Z(() => [f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: Z(() => [Ne(Be(K(n)), 1)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
}), Fh = {
  class: "w-fit relative"
}, jh = /* @__PURE__ */ I({
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
      i.value = !0, Ke(() => {
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
      const g = Kn, C = vn;
      return $(), V("div", Fh, [ut(f(g, {
        ref_key: "inputRef",
        ref: o,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: r.value,
        "onUpdate:modelValue": h[0] || (h[0] = (k) => r.value = k),
        modelModifiers: {
          trim: !0
        },
        onKeyup: oo(c, ["enter"]),
        onBlur: u
      }, null, 8, ["modelValue"]), [[ct, i.value]]), f(C, {
        class: "cursor-pointer",
        style: re({
          visibility: i.value ? "hidden" : "visible"
        }),
        color: "arcoblue",
        closable: "",
        onClick: s,
        onClose: v
      }, {
        default: Z(() => [Ne(Be(r.value), 1)]),
        _: 1
      }, 8, ["style"])]);
    };
  }
}), Mh = {
  class: "w-fit relative"
}, Kh = /* @__PURE__ */ I({
  __name: "AddableTag",
  emits: ["add"],
  setup(e, {
    emit: t
  }) {
    const n = t, l = m(null), o = m(""), r = m(!1), a = () => {
      r.value = !0, Ke(() => {
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
      const v = Kn, p = vr, h = vn;
      return $(), V("div", Mh, [ut(f(v, {
        ref_key: "inputRef",
        ref: l,
        class: "w-[120%] absolute top-0 left-0 h-full",
        size: "mini",
        modelValue: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => o.value = g),
        modelModifiers: {
          trim: !0
        },
        onKeyup: oo(s, ["enter"]),
        onBlur: i
      }, null, 8, ["modelValue"]), [[ct, r.value]]), f(h, {
        class: "cursor-pointer",
        style: re({
          visibility: r.value ? "hidden" : "visible"
        }),
        onClick: a
      }, {
        icon: Z(() => [f(p)]),
        _: 1
      }, 8, ["style"])]);
    };
  }
}), Rh = {
  class: "flex flex-wrap gap-4"
}, Hh = /* @__PURE__ */ I({
  __name: "ClassesList",
  setup(e) {
    const t = d(() => xr().classes);
    function n(r, a, i) {
      const s = [...t.value];
      s[r] = i, Hl({
        classes: s
      }), Rl(On().value, {
        change: {
          oldClass: a,
          newClass: i
        }
      });
    }
    function l(r) {
      const a = [...t.value];
      a.splice(r, 1), Hl({
        classes: a
      }), Rl(On().value, {
        remove: t.value[r]
      });
    }
    function o(r) {
      const a = [...t.value, r];
      Hl({
        classes: a
      }), Rl(On().value, {
        add: r
      });
    }
    return (r, a) => ($(), V("div", null, [a[3] || (a[3] = A("div", {
      class: "text-lg mb-2 text-gray-400"
    }, "classes", -1)), f(Lr, null, {
      default: Z(() => [A("div", Rh, [($(!0), V(xe, null, St(t.value, (i, s) => ($(), X(jh, {
        key: i + s,
        tagKey: s,
        value: i,
        onValueChange: a[0] || (a[0] = (u) => n(u.key, u.oldValue, u.newValue)),
        onRemove: a[1] || (a[1] = (u) => l(u.key))
      }, null, 8, ["tagKey", "value"]))), 128)), f(Kh, {
        class: "nt-classes-add-tag",
        onAdd: a[2] || (a[2] = (i) => o(i.value))
      })])]),
      _: 1
    })]));
  }
}), Wh = {
  class: "flex flex-col gap-2"
}, qh = /* @__PURE__ */ I({
  __name: "Code",
  setup(e) {
    const t = Nh();
    return (n, l) => ($(), V("div", Wh, [f(Hh), f(Ah, {
      model: K(t)
    }, null, 8, ["model"])]));
  }
}), Dr = m(!1), Ar = m(""), Gh = {
  class: "nt-testing-content"
}, Uh = /* @__PURE__ */ I({
  __name: "TestingContent",
  setup(e) {
    return (t, n) => ($(), V("pre", Gh, Be(K(Ar)), 1));
  }
}), Yh = {
  class: "bg-white/30 backdrop-blur-md"
}, Zh = /* @__PURE__ */ I({
  __name: "MainPanel",
  setup(e) {
    op(Ce);
    const t = d(() => !!Ce.value), n = Bh();
    return (l, o) => {
      const r = Kd, a = En, i = mo, s = Vf;
      return $(), V("div", Yh, [f(s, {
        "default-active-key": "element-tree"
      }, {
        default: Z(() => [f(a, {
          key: "style",
          title: K(Ie)("nt.mainPanel.style"),
          disabled: !t.value
        }, {
          default: Z(() => [f(r, {
            accordion: ""
          }, {
            default: Z(() => [f(rh), f(lh), f(Xp), f(Ph)]),
            _: 1
          })]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "element-tree",
          title: K(Ie)("nt.mainPanel.navigator")
        }, {
          default: Z(() => [f(zh, {
            model: K(n)
          }, null, 8, ["model"])]),
          _: 1
        }, 8, ["title"]), f(a, {
          key: "nicegui",
          title: K(Ie)("nt.mainPanel.code"),
          class: "x-panel-nicegui",
          disabled: !t.value
        }, {
          default: Z(() => [f(qh)]),
          _: 1
        }, 8, ["title", "disabled"]), f(a, {
          key: "cusStyle",
          title: K(Ie)("nt.mainPanel.cusStyle")
        }, null, 8, ["title"]), K(Dr) ? ($(), X(a, {
          key: "testing",
          title: "testing"
        }, {
          default: Z(() => [f(i, {
            style: {
              "max-height": "500px",
              overflow: "auto"
            }
          }, {
            default: Z(() => [f(Uh)]),
            _: 1
          })]),
          _: 1
        })) : pe("", !0)]),
        _: 1
      })]);
    };
  }
});
const Xh = /* @__PURE__ */ et(Zh, [["__scopeId", "data-v-fe8c1f8e"]]);
function Jh() {
  const e = Oe(kr(Ce));
  $r(Ce, () => {
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
  }), o = d(() => Ce.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), r = d(() => Ce.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), a = d(() => Ce.value ? {
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
  }), u = d(() => Ce.value ? {
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
function Fr() {
  const {
    width: e,
    height: t
  } = Co(), n = d(() => `0 0 ${e.value} ${t.value}`), l = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: l
  };
}
const Qh = ["viewBox"], em = /* @__PURE__ */ I({
  __name: "Aiming",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Fr(), {
      rectStyles: l,
      p1: o,
      p2: r,
      p3: a,
      p4: i,
      p5: s,
      p6: u,
      p7: c,
      p8: v
    } = Jh();
    return (p, h) => ($(), V("svg", {
      class: "vis-aiming",
      viewBox: K(t),
      version: "1.1",
      style: re([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, [K(n), {
        "z-index": K(yt).aiming
      }]]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [A("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: re(K(l))
    }, null, 4), A("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(o), {
      r: "2"
    }), null, 16), A("circle", ie({
      fill: "hotpink"
    }, K(r), {
      r: "2"
    }), null, 16), A("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(a), {
      r: "2"
    }), null, 16), A("circle", ie({
      fill: "hotpink"
    }, K(i), {
      r: "2"
    }), null, 16), A("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(s), {
      r: "2"
    }), null, 16), A("circle", ie({
      fill: "hotpink"
    }, K(u), {
      r: "2"
    }), null, 16), A("circle", ie({
      stroke: "hotpink",
      fill: "white"
    }, K(c), {
      r: "2"
    }), null, 16), A("circle", ie({
      fill: "hotpink"
    }, K(v), {
      r: "2"
    }), null, 16)], 12, Qh));
  }
});
const tm = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, nm = /* @__PURE__ */ I({
  __name: "Panel",
  setup(e) {
    const t = m(null), {
      style: n
    } = yp(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), l = zp(), o = Ip(), r = Hp();
    return (a, i) => {
      const s = vn, u = uf, c = Mn, v = Bc, p = hr, h = pn;
      return $(), V("div", {
        class: "non-selectable w-[350px]",
        style: re([[K(n), {
          zIndex: yt.panel
        }], {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [A("div", tm, [A("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(u, {
        class: "h-full"
      }, {
        default: Z(() => [i[0] || (i[0] = A("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), i[1] || (i[1] = A("span", {
          class: "font-bold"
        }, "toolkit", -1)), ut(f(s, {
          color: "green"
        }, {
          default: Z(() => [Ne(Be(K(l)), 1)]),
          _: 1
        }, 512), [[ct, K(o)]])]),
        _: 1
      })], 512), f(h, {
        content: K(Ie)("nt.apply_command_tooltip")
      }, {
        default: Z(() => [f(p, {
          "popup-container": mn.mainPanelTooltip,
          content: K(Ie)("nt.apply_command_confirm"),
          "ok-text": "Apply",
          "cancel-text": "No",
          position: "bottom",
          onOk: K(Rp),
          style: re({
            "z-index": yt.mainPanelTooltip
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
              default: Z(() => i[2] || (i[2] = [A("div", {
                class: "i-codicon-git-stash-apply text-1xl"
              }, null, -1)])),
              _: 1
            })]),
            _: 1
          }, 512), [[ct, K(r)]])]),
          _: 1
        }, 8, ["popup-container", "content", "onOk", "style"])]),
        _: 1
      }, 8, ["content"]), f(h, {
        content: K(Ie)("nt.jump2code")
      }, {
        default: Z(() => [ut(f(c, {
          shape: "circle",
          size: "mini",
          onClick: K(Kp)
        }, {
          default: Z(() => i[3] || (i[3] = [A("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[ct, K(o)]])]),
        _: 1
      }, 8, ["content"])]), J(a.$slots, "default"), J(a.$slots, "footer")], 4);
    };
  }
});
function lm() {
  const {
    width: e,
    height: t
  } = Co(), n = Oe(kr(st));
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
const om = ["viewBox"], Xt = "red", am = /* @__PURE__ */ I({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = Fr(), {
      rectStyles: l,
      topLine: o,
      rightLine: r,
      bottomLine: a,
      leftLine: i
    } = lm();
    return (s, u) => ($(), V("svg", {
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
        "z-index": K(yt).visHover
      }]])
    }, [A("rect", {
      fill: "none",
      stroke: Xt,
      "stroke-width": "1",
      style: re(K(l))
    }, null, 4), A("line", ie({
      class: "top"
    }, K(o), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", ie({
      class: "right"
    }, K(r), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", ie({
      class: "bottom"
    }, K(a), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16), A("line", ie({
      class: "left"
    }, K(i), {
      stroke: Xt,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, om));
  }
});
function rm(e, t) {
  const {
    width: n
  } = Co(), {
    x: l,
    y: o
  } = wr({
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
    typeName: d(() => t.value ? $o(t.value, e) : null),
    typeNameTagStyles: a
  };
}
function im(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: mt(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const sm = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function La(e, t) {
  if (!sm.has($o(e, t)))
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
function Da(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function um(e, t) {
  function n(s) {
    s.selectTarget && o(s.selectTarget.id), s.serverResetCommand && r(s.serverResetCommand.propertyName), s.trackRecord && a(s.trackRecord), s.testing && i(s.testing);
  }
  function l(s, u) {
    return window.getComputedStyle(Da(s, e), null).getPropertyValue(u);
  }
  function o(s) {
    const u = Da(s, e);
    t.value = u;
  }
  function r(s) {
    xp(s);
  }
  function a(s) {
    Dp(s.hasChanged);
  }
  function i(s) {
    s.isTesting !== void 0 && (Dr.value = s.isTesting), s.content !== void 0 && (Ar.value = s.content);
  }
  return {
    queryStyle: l,
    sendMessage: n
  };
}
async function cm(e) {
  if (!e)
    return;
  const {
    loadResource: t
  } = await import("../../static/utils/resources.js"), n = window.path_prefix;
  await t(n + `${e}/trackBall.css`);
}
const dm = /* @__PURE__ */ I({
  __name: "VisTypeName",
  setup(e) {
    const {
      typeNameTagStyles: t,
      typeName: n
    } = rm(Gn(), st);
    return (l, o) => ($(), V("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: re([K(t), {
        zIndex: K(yt).visTypeName
      }])
    }, Be(K(n)), 5));
  }
}), vm = /* @__PURE__ */ I({
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
      const s = Ce.value;
      if (!s)
        return;
      const u = mt(s, l.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      o("setCommand", {
        id: u,
        commands: i
      });
    }
    function a(i) {
      const s = Ce.value;
      if (!s)
        return;
      const u = mt(s, l.selectorConfig);
      if (!u)
        throw new Error("not found selected element");
      o("resetCommand", {
        id: u,
        commands: i
      });
    }
    return Ae(async () => {
      await cm(l.resource_path), o("init");
    }), Mp({
      selectorConfig: l.selectorConfig,
      languageConfig: l.languageConfig,
      elementTreeData: l.elementTreeData,
      emitSetCommandFn: r,
      emitResetCommandFn: a,
      emitJumpSourceCodeFn: () => {
        const i = Ce.value;
        if (!i)
          return;
        const s = mt(i, l.selectorConfig);
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
    }), fe(() => l.currentTargetContext, () => {
      Pp(l.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    }), fe(st, (i) => {
      if (i) {
        const s = mt(i, l.selectorConfig);
        o("hoverChange", {
          id: s
        });
        return;
      }
      o("hoverChange", {
        id: null
      });
    }), fe(Ce, (i) => {
      const s = {
        isFlex: !1,
        direction: null
      };
      if (i) {
        const u = mt(i, l.selectorConfig), c = im(i, l.selectorConfig);
        let v = {
          isFlex: !1,
          direction: null
        };
        c && (v = La(c.dom, l.selectorConfig)), o("selectedChange", {
          id: u,
          parentBoxId: c !== null ? c.id : null,
          flexInfo: La(i, l.selectorConfig),
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
    }), t(um(l.selectorConfig, Ce)), (i, s) => ($(), X(Fa, {
      to: "body"
    }, [f(am), f(em), f(nm, null, {
      default: Z(() => [J(i.$slots, "header"), f(Xh), J(i.$slots, "footer")]),
      _: 3
    }), f(dm)]));
  }
});
export {
  vm as default
};
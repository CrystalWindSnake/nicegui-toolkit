const _ = Vue.ref
const Se = Vue.reactive
const Fe = Vue.inject
const d = Vue.computed
const bt = Vue.getCurrentInstance
const Rn = Vue.cloneVNode
const z = Vue.defineComponent
const ye = Vue.watch
const Ne = Vue.onMounted
const vn = Vue.onUnmounted
const k = Vue.openBlock
const D = Vue.createElementBlock
const V = Vue.normalizeClass
const ee = Vue.renderSlot
const ve = Vue.normalizeStyle
const H = Vue.createElementVNode
const be = Vue.resolveComponent
const ne = Vue.createBlock
const he = Vue.createCommentVNode
const Mo = Vue.toRef
const $e = Vue.toRefs
const f = Vue.createVNode
const re = Vue.mergeProps
const je = Vue.createTextVNode
const We = Vue.nextTick
const rt = Vue.provide
const Pe = Vue.Fragment
const da = Vue.createSlots
const le = Vue.withCtx
const ot = Vue.withModifiers
const it = Vue.onUpdated
const Xt = Vue.onBeforeUnmount
const bn = Vue.readonly
const $i = Vue.onDeactivated
const fa = Vue.Teleport
const Kn = Vue.Transition
const Kt = Vue.withDirectives
const Ht = Vue.vShow
const Et = Vue.resolveDynamicComponent
const ze = Vue.toDisplayString
const Wt = Vue.renderList
const Ci = Vue.TransitionGroup
const Bt = Vue.watchEffect
const xt = Vue.isVNode
const ki = Vue.Comment
const Lt = Vue.h
const oo = Vue.normalizeProps
const wi = Vue.withKeys
const va = Vue.createApp
const Ot = Vue.toValue
const ce = Vue.unref
const go = Vue.isRef
const Si = Vue.customRef
const Oi = Vue.getCurrentScope
const Ei = Vue.onScopeDispose
const zt = Object.prototype.toString;
function Ke(e) {
  return zt.call(e) === "[object Array]";
}
function Hn(e) {
  return zt.call(e) === "[object Null]";
}
function qt(e) {
  return zt.call(e) === "[object Boolean]";
}
function xe(e) {
  return zt.call(e) === "[object Object]";
}
const Fo = (e) => zt.call(e) === "[object Promise]";
function ft(e) {
  return zt.call(e) === "[object String]";
}
function pe(e) {
  return zt.call(e) === "[object Number]" && e === e;
}
function Me(e) {
  return e === void 0;
}
function Ge(e) {
  return typeof e == "function";
}
function xi(e) {
  return xe(e) && Object.keys(e).length === 0;
}
const pa = (e) => (e == null ? void 0 : e.$) !== void 0, _t = Symbol("ArcoConfigProvider"), Cn = {
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
}, Pi = {
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
}, Bi = _("zh-CN"), Ii = Se({
  "zh-CN": Pi
}), Jt = () => {
  const e = Fe(_t, void 0), t = d(() => {
    var o;
    return (o = e == null ? void 0 : e.locale) != null ? o : Ii[Bi.value];
  }), n = d(() => t.value.locale);
  return {
    i18nMessage: t,
    locale: n,
    t: (o, ...a) => {
      const r = o.split(".");
      let i = t.value;
      for (const s of r) {
        if (!i[s])
          return o;
        i = i[s];
      }
      return ft(i) && a.length > 0 ? i.replace(/{(\d+)}/g, (s, c) => {
        var u;
        return (u = a[c]) != null ? u : s;
      }) : i;
    }
  };
};
var zi = Object.defineProperty, Ni = Object.defineProperties, Ti = Object.getOwnPropertyDescriptors, Ro = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, Vi = Object.prototype.propertyIsEnumerable, Ko = (e, t, n) => t in e ? zi(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ji = (e, t) => {
  for (var n in t || (t = {}))
    Li.call(t, n) && Ko(e, n, t[n]);
  if (Ro)
    for (var n of Ro(t))
      Vi.call(t, n) && Ko(e, n, t[n]);
  return e;
}, Di = (e, t) => Ni(e, Ti(t));
const Ai = "A", Mi = "arco", ro = "$arco", Te = (e) => {
  var t;
  return (t = e == null ? void 0 : e.componentPrefix) != null ? t : Ai;
}, Le = (e, t) => {
  var n;
  t && t.classPrefix && (e.config.globalProperties[ro] = Di(ji({}, (n = e.config.globalProperties[ro]) != null ? n : {}), {
    classPrefix: t.classPrefix
  }));
}, K = (e) => {
  var t, n, l;
  const o = bt(), a = Fe(_t, void 0), r = (l = (n = a == null ? void 0 : a.prefixCls) != null ? n : (t = o == null ? void 0 : o.appContext.config.globalProperties[ro]) == null ? void 0 : t.classPrefix) != null ? l : Mi;
  return e ? `${r}-${e}` : r;
};
var ma = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(o, a) {
      return o[0] === n ? (l = a, !0) : !1;
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
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var r = a[o];
          n.call(l, r[1], r[0]);
        }
      }, t;
    }()
  );
}(), ao = typeof window < "u" && typeof document < "u" && window.document === document, Ln = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Fi = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ln) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ri = 2;
function Ki(e, t) {
  var n = !1, l = !1, o = 0;
  function a() {
    n && (n = !1, e()), l && i();
  }
  function r() {
    Fi(a);
  }
  function i() {
    var s = Date.now();
    if (n) {
      if (s - o < Ri)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(r, t);
    o = s;
  }
  return i;
}
var Hi = 20, Wi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qi = typeof MutationObserver < "u", Gi = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ki(this.refresh.bind(this), Hi);
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
      !ao || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ao || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, o = Wi.some(function(a) {
        return !!~l.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ha = function(e, t) {
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
}, Gt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ln;
}, ya = Wn(0, 0, 0, 0);
function Vn(e) {
  return parseFloat(e) || 0;
}
function Ho(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, o) {
    var a = e["border-" + o + "-width"];
    return l + Vn(a);
  }, 0);
}
function Ui(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, o = t; l < o.length; l++) {
    var a = o[l], r = e["padding-" + a];
    n[a] = Vn(r);
  }
  return n;
}
function Zi(e) {
  var t = e.getBBox();
  return Wn(0, 0, t.width, t.height);
}
function Yi(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return ya;
  var l = Gt(e).getComputedStyle(e), o = Ui(l), a = o.left + o.right, r = o.top + o.bottom, i = Vn(l.width), s = Vn(l.height);
  if (l.boxSizing === "border-box" && (Math.round(i + a) !== t && (i -= Ho(l, "left", "right") + a), Math.round(s + r) !== n && (s -= Ho(l, "top", "bottom") + r)), !Ji(e)) {
    var c = Math.round(i + a) - t, u = Math.round(s + r) - n;
    Math.abs(c) !== 1 && (i -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return Wn(o.left, o.top, i, s);
}
var Xi = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Gt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Gt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ji(e) {
  return e === Gt(e).document.documentElement;
}
function Qi(e) {
  return ao ? Xi(e) ? Zi(e) : Yi(e) : ya;
}
function es(e) {
  var t = e.x, n = e.y, l = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, r = Object.create(a.prototype);
  return ha(r, {
    x: t,
    y: n,
    width: l,
    height: o,
    top: n,
    right: t + l,
    bottom: o + n,
    left: t
  }), r;
}
function Wn(e, t, n, l) {
  return {
    x: e,
    y: t,
    width: n,
    height: l
  };
}
var ts = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Wn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Qi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), ns = (
  /** @class */
  function() {
    function e(t, n) {
      var l = es(n);
      ha(this, {
        target: t,
        contentRect: l
      });
    }
    return e;
  }()
), ls = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new ma(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Gt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new ts(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Gt(t).Element))
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
          return new ns(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ga = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ma(), ba = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Gi.getInstance(), l = new ls(t, n, this);
      ga.set(this, l);
    }
    return e;
  }()
);
["observe", "unobserve", "disconnect"].forEach(function(e) {
  ba.prototype[e] = function() {
    var t;
    return (t = ga.get(this))[e].apply(t, arguments);
  };
});
var bo = function() {
  return typeof Ln.ResizeObserver < "u" ? Ln.ResizeObserver : ba;
}(), Wo;
(function(e) {
  e[e.ELEMENT = 1] = "ELEMENT", e[e.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT", e[e.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT", e[e.COMPONENT = 6] = "COMPONENT", e[e.TEXT_CHILDREN = 8] = "TEXT_CHILDREN", e[e.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN", e[e.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN", e[e.TELEPORT = 64] = "TELEPORT", e[e.SUSPENSE = 128] = "SUSPENSE", e[e.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE", e[e.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE";
})(Wo || (Wo = {}));
var qo;
(function(e) {
  e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL";
})(qo || (qo = {}));
const qn = (e) => !!(e && e.shapeFlag & 1), _n = (e, t) => !!(e && e.shapeFlag & 6), os = (e, t) => !!(e && e.shapeFlag & 8), _o = (e, t) => !!(e && e.shapeFlag & 16), _a = (e, t) => !!(e && e.shapeFlag & 32), Mt = (e) => {
  var t, n;
  if (e)
    for (const l of e) {
      if (qn(l) || _n(l))
        return l;
      if (_o(l, l.children)) {
        const o = Mt(l.children);
        if (o)
          return o;
      } else if (_a(l, l.children)) {
        const o = (n = (t = l.children).default) == null ? void 0 : n.call(t);
        if (o) {
          const a = Mt(o);
          if (a)
            return a;
        }
      } else if (Ke(l)) {
        const o = Mt(l);
        if (o)
          return o;
      }
    }
}, rs = (e) => {
  if (!e)
    return !0;
  for (const t of e)
    if (t.children)
      return !1;
  return !0;
}, $a = (e, t) => {
  if (e && e.length > 0)
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      if (qn(l) || _n(l)) {
        const a = Ge(t) ? t(l) : t;
        return e[n] = Rn(l, a, !0), !0;
      }
      const o = $o(l);
      if (o && o.length > 0 && $a(o, t))
        return !0;
    }
  return !1;
}, $o = (e) => {
  if (_o(e, e.children))
    return e.children;
  if (Ke(e))
    return e;
}, Ca = (e) => {
  var t, n;
  if (qn(e))
    return e.el;
  if (_n(e)) {
    if (((t = e.el) == null ? void 0 : t.nodeType) === 1)
      return e.el;
    if ((n = e.component) != null && n.subTree) {
      const l = Ca(e.component.subTree);
      if (l)
        return l;
    }
  } else {
    const l = $o(e);
    return ka(l);
  }
}, ka = (e) => {
  if (e && e.length > 0)
    for (const t of e) {
      const n = Ca(t);
      if (n)
        return n;
    }
}, cn = (e, t = !1) => {
  var n, l;
  const o = [];
  for (const a of e ?? [])
    qn(a) || _n(a) || t && os(a, a.children) ? o.push(a) : _o(a, a.children) ? o.push(...cn(a.children, t)) : _a(a, a.children) ? o.push(...cn((l = (n = a.children).default) == null ? void 0 : l.call(n), t)) : Ke(a) && o.push(...cn(a, t));
  return o;
}, wa = (e, t) => {
  var n;
  const l = [];
  if (_n(e, e.type))
    e.type.name === t ? e.component && l.push(e.component.uid) : (n = e.component) != null && n.subTree && l.push(...wa(e.component.subTree, t));
  else {
    const o = $o(e);
    o && l.push(...Sa(o, t));
  }
  return l;
}, Sa = (e, t) => {
  const n = [];
  if (e && e.length > 0)
    for (const l of e)
      n.push(...wa(l, t));
  return n;
};
var pn = z({
  name: "ResizeObserver",
  emits: ["resize"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let l;
    const o = _(), a = d(() => pa(o.value) ? o.value.$el : o.value), r = (s) => {
      s && (l = new bo((c) => {
        const u = c[0];
        t("resize", u);
      }), l.observe(s));
    }, i = () => {
      l && (l.disconnect(), l = null);
    };
    return ye(a, (s) => {
      l && i(), s && r(s);
    }), Ne(() => {
      a.value && r(a.value);
    }), vn(() => {
      i();
    }), () => {
      var s, c;
      const u = Mt((c = (s = n.default) == null ? void 0 : s.call(n)) != null ? c : []);
      return u ? Rn(u, {
        ref: o
      }, !0) : null;
    };
  }
});
const Oa = typeof window > "u" ? global : window, Ea = Oa.requestAnimationFrame, jn = Oa.cancelAnimationFrame;
function io(e) {
  let t = 0;
  const n = (...l) => {
    t && jn(t), t = Ea(() => {
      e(...l), t = 0;
    });
  };
  return n.cancel = () => {
    jn(t), t = 0;
  }, n;
}
const Co = () => {
}, as = () => {
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
}, ko = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), Ft = (() => ko ? Co : (e, t, n, l = !1) => {
  e.addEventListener(t, n, l);
})(), Dn = (() => ko ? Co : (e, t, n, l = !1) => {
  e.removeEventListener(t, n, l);
})(), is = (e, t) => {
  var n;
  return ko ? Co() : (n = (t ?? document).querySelector(e)) != null ? n : void 0;
}, Go = (e, t) => {
  if (ft(e)) {
    const n = e[0] === "#" ? `[id='${e.slice(1)}']` : e;
    return is(n, t);
  }
  return e;
}, ss = (e, t) => {
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
var ae = (e, t) => {
  for (const [n, l] of t)
    e[n] = l;
  return e;
};
const us = z({
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
      prefixCls: K("icon-hover")
    };
  }
});
function cs(e, t, n, l, o, a) {
  return k(), D("span", {
    class: V([e.prefixCls, {
      [`${e.prefix}-icon-hover`]: e.prefix,
      [`${e.prefixCls}-size-${e.size}`]: e.size !== "medium",
      [`${e.prefixCls}-disabled`]: e.disabled
    }])
  }, [ee(e.$slots, "default")], 2);
}
var Je = /* @__PURE__ */ ae(us, [["render", cs]]);
const ds = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-close`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), fs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vs = /* @__PURE__ */ H("path", {
  d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"
}, null, -1), ps = [vs];
function ms(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, ps, 14, fs);
}
var tl = /* @__PURE__ */ ae(ds, [["render", ms]]);
const $n = Object.assign(tl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + tl.name, tl);
  }
}), hs = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-info-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ys = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gs = /* @__PURE__ */ H("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), bs = [gs];
function _s(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, bs, 14, ys);
}
var nl = /* @__PURE__ */ ae(hs, [["render", _s]]);
const $s = Object.assign(nl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + nl.name, nl);
  }
}), Cs = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-check-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ks = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ws = /* @__PURE__ */ H("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ss = [ws];
function Os(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Ss, 14, ks);
}
var ll = /* @__PURE__ */ ae(Cs, [["render", Os]]);
const wo = Object.assign(ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ll.name, ll);
  }
}), Es = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-exclamation-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), xs = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ps = /* @__PURE__ */ H("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Bs = [Ps];
function Is(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Bs, 14, xs);
}
var ol = /* @__PURE__ */ ae(Es, [["render", Is]]);
const xa = Object.assign(ol, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + ol.name, ol);
  }
}), zs = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-close-circle-fill`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Ns = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ts = /* @__PURE__ */ H("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Ls = [Ts];
function Vs(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Ls, 14, Ns);
}
var rl = /* @__PURE__ */ ae(zs, [["render", Vs]]);
const Pa = Object.assign(rl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + rl.name, rl);
  }
}), Ut = ["onFocus", "onFocusin", "onFocusout", "onBlur", "onChange", "onBeforeinput", "onInput", "onReset", "onSubmit", "onInvalid", "onKeydown", "onKeypress", "onKeyup", "onCopy", "onCut", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onSelect", "autocomplete", "autofocus", "maxlength", "minlength", "name", "pattern", "readonly", "required"], js = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-loading`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Ds = ["stroke-width", "stroke-linecap", "stroke-linejoin"], As = /* @__PURE__ */ H("path", {
  d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
}, null, -1), Ms = [As];
function Fs(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Ms, 14, Ds);
}
var al = /* @__PURE__ */ ae(js, [["render", Fs]]);
const ht = Object.assign(al, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + al.name, al);
  }
}), Rs = z({
  name: "FeedbackIcon",
  components: {
    IconLoading: ht,
    IconCheckCircleFill: wo,
    IconExclamationCircleFill: xa,
    IconCloseCircleFill: Pa
  },
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = K("feedback-icon");
    return {
      cls: d(() => [t, `${t}-status-${e.type}`])
    };
  }
});
function Ks(e, t, n, l, o, a) {
  const r = be("icon-loading"), i = be("icon-check-circle-fill"), s = be("icon-exclamation-circle-fill"), c = be("icon-close-circle-fill");
  return k(), D("span", {
    class: V(e.cls)
  }, [e.type === "validating" ? (k(), ne(r, {
    key: 0
  })) : e.type === "success" ? (k(), ne(i, {
    key: 1
  })) : e.type === "warning" ? (k(), ne(s, {
    key: 2
  })) : e.type === "error" ? (k(), ne(c, {
    key: 3
  })) : he("v-if", !0)], 2);
}
var So = /* @__PURE__ */ ae(Rs, [["render", Ks]]);
const Oo = {
  key: "Enter",
  code: "Enter"
}, Hs = {
  key: "Backspace",
  code: "Backspace"
};
var Ws = Object.defineProperty, Uo = Object.getOwnPropertySymbols, qs = Object.prototype.hasOwnProperty, Gs = Object.prototype.propertyIsEnumerable, Zo = (e, t, n) => t in e ? Ws(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Us = (e, t) => {
  for (var n in t || (t = {}))
    qs.call(t, n) && Zo(e, n, t[n]);
  if (Uo)
    for (var n of Uo(t))
      Gs.call(t, n) && Zo(e, n, t[n]);
  return e;
};
const yt = (e, t) => {
  const n = Us({}, e);
  for (const l of t)
    l in n && delete n[l];
  return n;
};
function Gn(e, t) {
  const n = {};
  return t.forEach((l) => {
    const o = l;
    l in e && (n[o] = e[o]);
  }), n;
}
const Zs = Symbol("ArcoFormItemContext"), vt = ({
  size: e,
  disabled: t,
  error: n,
  uninject: l
} = {}) => {
  const o = l ? {} : Fe(Zs, {}), a = d(() => {
    var u;
    return (u = e == null ? void 0 : e.value) != null ? u : o.size;
  }), r = d(() => (t == null ? void 0 : t.value) || o.disabled), i = d(() => (n == null ? void 0 : n.value) || o.error), s = Mo(o, "feedback"), c = Mo(o, "eventHandlers");
  return {
    formItemCtx: o,
    mergedSize: a,
    mergedDisabled: r,
    mergedError: i,
    feedback: s,
    eventHandlers: c
  };
}, st = (e, {
  defaultValue: t = "medium"
} = {}) => {
  const n = Fe(_t, void 0);
  return {
    mergedSize: d(() => {
      var o, a;
      return (a = (o = e == null ? void 0 : e.value) != null ? o : n == null ? void 0 : n.size) != null ? a : t;
    })
  };
};
function Ys(e) {
  const t = _();
  function n() {
    if (!e.value)
      return;
    const {
      selectionStart: o,
      selectionEnd: a,
      value: r
    } = e.value;
    if (o == null || a == null)
      return;
    const i = r.slice(0, Math.max(0, o)), s = r.slice(Math.max(0, a));
    t.value = {
      selectionStart: o,
      selectionEnd: a,
      value: r,
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
      beforeTxt: a,
      afterTxt: r,
      selectionStart: i
    } = t.value;
    if (!a || !r || !i)
      return;
    let s = o.length;
    if (o.endsWith(r))
      s = o.length - r.length;
    else if (o.startsWith(a))
      s = a.length;
    else {
      const c = a[i - 1], u = o.indexOf(c, i - 1);
      u !== -1 && (s = u + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, l];
}
var Xs = Object.defineProperty, Yo = Object.getOwnPropertySymbols, Js = Object.prototype.hasOwnProperty, Qs = Object.prototype.propertyIsEnumerable, Xo = (e, t, n) => t in e ? Xs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jo = (e, t) => {
  for (var n in t || (t = {}))
    Js.call(t, n) && Xo(e, n, t[n]);
  if (Yo)
    for (var n of Yo(t))
      Qs.call(t, n) && Xo(e, n, t[n]);
  return e;
}, dn = z({
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
      disabled: a,
      error: r,
      modelValue: i
    } = $e(e), s = K("input"), c = _(), {
      mergedSize: u,
      mergedDisabled: v,
      mergedError: p,
      feedback: m,
      eventHandlers: h
    } = vt({
      size: o,
      disabled: a,
      error: r
    }), {
      mergedSize: y
    } = st(u), [$, I] = Ys(c), E = _(e.defaultValue), w = d(() => {
      var Y;
      return (Y = e.modelValue) != null ? Y : E.value;
    });
    ye(i, (Y) => {
      (Me(Y) || Hn(Y)) && (E.value = "");
    });
    let C = w.value;
    const S = _(!1), g = d(() => e.allowClear && !e.readonly && !v.value && !!w.value), b = _(!1), N = _(""), M = (Y) => {
      var T;
      return Ge(e.wordLength) ? e.wordLength(Y) : (T = Y.length) != null ? T : 0;
    }, A = d(() => M(w.value)), x = d(() => p.value || !!(xe(e.maxLength) && e.maxLength.errorOnly && A.value > G.value)), W = d(() => xe(e.maxLength) && !!e.maxLength.errorOnly), G = d(() => xe(e.maxLength) ? e.maxLength.length : e.maxLength), R = d(() => {
      const Y = M("a");
      return Math.floor(G.value / Y);
    }), U = (Y) => {
      var T, Z;
      G.value && !W.value && M(Y) > G.value && (Y = (Z = (T = e.wordSlice) == null ? void 0 : T.call(e, Y, G.value)) != null ? Z : Y.slice(0, R.value)), E.value = Y, t("update:modelValue", Y);
    }, X = (Y) => {
      c.value && Y.target !== c.value && (Y.preventDefault(), c.value.focus());
    }, P = (Y, T) => {
      var Z, ge;
      Y !== C && (C = Y, t("change", Y, T), (ge = (Z = h.value) == null ? void 0 : Z.onChange) == null || ge.call(Z, T));
    }, F = (Y) => {
      var T, Z;
      S.value = !0, C = w.value, t("focus", Y), (Z = (T = h.value) == null ? void 0 : T.onFocus) == null || Z.call(T, Y);
    }, me = (Y) => {
      var T, Z;
      S.value = !1, P(w.value, Y), t("blur", Y), (Z = (T = h.value) == null ? void 0 : T.onBlur) == null || Z.call(T, Y);
    }, oe = (Y) => {
      var T, Z, ge;
      const {
        value: we,
        selectionStart: Ee,
        selectionEnd: Xe
      } = Y.target;
      if (Y.type === "compositionend") {
        if (b.value = !1, N.value = "", G.value && !W.value && A.value >= G.value && M(we) > G.value && Ee === Xe) {
          B();
          return;
        }
        U(we), t("input", we, Y), (Z = (T = h.value) == null ? void 0 : T.onInput) == null || Z.call(T, Y), B();
      } else
        b.value = !0, N.value = w.value + ((ge = Y.data) != null ? ge : "");
    }, B = () => {
      $(), We(() => {
        c.value && w.value !== c.value.value && (c.value.value = w.value, I());
      });
    }, te = (Y) => {
      var T, Z;
      const {
        value: ge
      } = Y.target;
      if (!b.value) {
        if (G.value && !W.value && A.value >= G.value && M(ge) > G.value && Y.inputType === "insertText") {
          B();
          return;
        }
        U(ge), t("input", ge, Y), (Z = (T = h.value) == null ? void 0 : T.onInput) == null || Z.call(T, Y), B();
      }
    }, Q = (Y) => {
      U(""), P("", Y), t("clear", Y);
    }, de = (Y) => {
      const T = Y.key || Y.code;
      !b.value && T === Oo.key && (P(w.value, Y), t("pressEnter", Y));
    }, ue = d(() => [`${s}-outer`, `${s}-outer-size-${y.value}`, {
      [`${s}-outer-has-suffix`]: !!n.suffix,
      [`${s}-outer-disabled`]: v.value
    }]), Ce = d(() => [`${s}-wrapper`, {
      [`${s}-error`]: x.value,
      [`${s}-disabled`]: v.value,
      [`${s}-focus`]: S.value
    }]), Qe = d(() => [s, `${s}-size-${y.value}`]), Ie = d(() => yt(l, Ut)), Re = d(() => Gn(l, Ut)), He = d(() => {
      const Y = Jo(Jo({}, Re.value), e.inputAttrs);
      return x.value && (Y["aria-invalid"] = !0), Y;
    }), De = (Y) => {
      var T;
      return f("span", re({
        class: Ce.value,
        onMousedown: X
      }, Y ? void 0 : Ie.value), [n.prefix && f("span", {
        class: `${s}-prefix`
      }, [n.prefix()]), f("input", re({
        ref: c,
        class: Qe.value,
        value: w.value,
        type: e.type,
        placeholder: e.placeholder,
        readonly: e.readonly,
        disabled: v.value,
        onInput: te,
        onKeydown: de,
        onFocus: F,
        onBlur: me,
        onCompositionstart: oe,
        onCompositionupdate: oe,
        onCompositionend: oe
      }, He.value), null), g.value && f(Je, {
        prefix: s,
        class: `${s}-clear-btn`,
        onClick: Q
      }, {
        default: () => [f($n, null, null)]
      }), (n.suffix || !!e.maxLength && e.showWordLimit || !!m.value) && f("span", {
        class: [`${s}-suffix`, {
          [`${s}-suffix-has-feedback`]: m.value
        }]
      }, [!!e.maxLength && e.showWordLimit && f("span", {
        class: `${s}-word-limit`
      }, [A.value, je("/"), G.value]), (T = n.suffix) == null ? void 0 : T.call(n), !!m.value && f(So, {
        type: m.value
      }, null)])]);
    };
    return {
      inputRef: c,
      render: () => n.prepend || n.append ? f("span", re({
        class: ue.value
      }, Ie.value), [n.prepend && f("span", {
        class: `${s}-prepend`
      }, [n.prepend()]), De(!0), n.append && f("span", {
        class: `${s}-append`
      }, [n.append()])]) : De()
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
const eu = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-search`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), tu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], nu = /* @__PURE__ */ H("path", {
  d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"
}, null, -1), lu = [nu];
function ou(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, lu, 14, tu);
}
var il = /* @__PURE__ */ ae(eu, [["render", ou]]);
const so = Object.assign(il, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + il.name, il);
  }
}), Ba = Symbol("ArcoButtonGroup"), ru = z({
  name: "Button",
  components: {
    IconLoading: ht
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
    } = $e(e), o = K("btn"), a = Fe(Ba, void 0), r = d(() => {
      var m;
      return (m = n.value) != null ? m : a == null ? void 0 : a.size;
    }), i = d(() => !!(l.value || a != null && a.disabled)), {
      mergedSize: s,
      mergedDisabled: c
    } = vt({
      size: r,
      disabled: i
    }), {
      mergedSize: u
    } = st(s), v = d(() => {
      var m, h, y, $, I, E;
      return [o, `${o}-${(h = (m = e.type) != null ? m : a == null ? void 0 : a.type) != null ? h : "secondary"}`, `${o}-shape-${($ = (y = e.shape) != null ? y : a == null ? void 0 : a.shape) != null ? $ : "square"}`, `${o}-size-${u.value}`, `${o}-status-${(E = (I = e.status) != null ? I : a == null ? void 0 : a.status) != null ? E : "normal"}`, {
        [`${o}-long`]: e.long,
        [`${o}-loading`]: e.loading,
        [`${o}-disabled`]: c.value,
        [`${o}-link`]: ft(e.href)
      }];
    });
    return {
      prefixCls: o,
      cls: v,
      mergedDisabled: c,
      handleClick: (m) => {
        if (e.disabled || e.loading) {
          m.preventDefault();
          return;
        }
        t("click", m);
      }
    };
  }
}), au = ["href"], iu = ["type", "disabled"];
function su(e, t, n, l, o, a) {
  const r = be("icon-loading");
  return e.href ? (k(), D("a", {
    key: 0,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    href: e.mergedDisabled || e.loading ? void 0 : e.href,
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (k(), D("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (k(), ne(r, {
    key: 0,
    spin: "true"
  })) : ee(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), ee(e.$slots, "default")], 10, au)) : (k(), D("button", {
    key: 1,
    class: V([e.cls, {
      [`${e.prefixCls}-only-icon`]: e.$slots.icon && !e.$slots.default
    }]),
    type: e.htmlType,
    disabled: e.mergedDisabled,
    onClick: t[1] || (t[1] = (...i) => e.handleClick && e.handleClick(...i))
  }, [e.loading || e.$slots.icon ? (k(), D("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [e.loading ? (k(), ne(r, {
    key: 0,
    spin: !0
  })) : ee(e.$slots, "icon", {
    key: 1
  })], 2)) : he("v-if", !0), ee(e.$slots, "default")], 10, iu));
}
var sl = /* @__PURE__ */ ae(ru, [["render", su]]);
const uu = z({
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
      shape: a
    } = $e(e), r = K("btn-group");
    return rt(Ba, Se({
      type: t,
      size: n,
      shape: a,
      status: l,
      disabled: o
    })), {
      prefixCls: r
    };
  }
});
function cu(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.prefixCls)
  }, [ee(e.$slots, "default")], 2);
}
var ul = /* @__PURE__ */ ae(uu, [["render", cu]]);
const Zt = Object.assign(sl, {
  Group: ul,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + sl.name, sl), e.component(n + ul.name, ul);
  }
});
var cl = z({
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
    } = $e(e), o = K("input-search"), {
      mergedSize: a
    } = st(l), r = _(), i = (v) => {
      r.value.inputRef && t("search", r.value.inputRef.value, v);
    }, s = () => {
      var v;
      return f(Pe, null, [e.loading ? f(ht, null, null) : f(Je, {
        onClick: i
      }, {
        default: () => [f(so, null, null)]
      }), (v = n.suffix) == null ? void 0 : v.call(n)]);
    }, c = () => {
      var v;
      let p = {};
      return e.buttonText || n["button-default"] || n["button-icon"] ? p = {
        default: (v = n["button-default"]) != null ? v : e.buttonText ? () => e.buttonText : void 0,
        icon: n["button-icon"]
      } : p = {
        icon: () => f(so, null, null)
      }, f(Zt, re({
        type: "primary",
        class: `${o}-btn`,
        disabled: e.disabled,
        size: a.value,
        loading: e.loading
      }, e.buttonProps, {
        onClick: i
      }), p);
    };
    return {
      inputRef: r,
      render: () => f(dn, {
        ref: r,
        class: o,
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
const du = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-eye`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), fu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], vu = /* @__PURE__ */ H("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1), pu = /* @__PURE__ */ H("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
}, null, -1), mu = [vu, pu];
function hu(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, mu, 14, fu);
}
var dl = /* @__PURE__ */ ae(du, [["render", hu]]);
const yu = Object.assign(dl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + dl.name, dl);
  }
}), gu = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-eye-invisible`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), bu = ["stroke-width", "stroke-linecap", "stroke-linejoin"], _u = /* @__PURE__ */ H("path", {
  d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"
}, null, -1), $u = /* @__PURE__ */ H("path", {
  d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"
}, null, -1), Cu = [_u, $u];
function ku(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Cu, 14, bu);
}
var fl = /* @__PURE__ */ ae(gu, [["render", ku]]);
const wu = Object.assign(fl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + fl.name, fl);
  }
});
function Su(e) {
  const t = _(e);
  return [t, (l) => {
    t.value = l;
  }];
}
function An(e, t) {
  const {
    value: n
  } = $e(t), [l, o] = Su(Me(n.value) ? e : n.value);
  return ye(n, (r) => {
    Me(r) && o(void 0);
  }), [d(() => Me(n.value) ? l.value : n.value), o, l];
}
const Ou = z({
  name: "InputPassword",
  components: {
    IconEye: yu,
    IconEyeInvisible: wu,
    AIconHover: Je,
    AInput: dn
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
    } = $e(e), o = _(), a = () => {
      s(!r.value);
    }, [r, i] = An(l.value, Se({
      value: n
    })), s = (c) => {
      c !== r.value && (t("visibility-change", c), t("update:visibility", c), i(c));
    };
    return {
      inputRef: o,
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
function Eu(e, t, n, l, o, a) {
  const r = be("icon-eye"), i = be("icon-eye-invisible"), s = be("a-icon-hover"), c = be("a-input");
  return k(), ne(c, {
    ref: "inputRef",
    type: e.mergedVisible ? "password" : "text"
  }, da({
    _: 2
  }, [e.$slots.prepend ? {
    name: "prepend",
    fn: le(() => [ee(e.$slots, "prepend")])
  } : void 0, e.$slots.prefix ? {
    name: "prefix",
    fn: le(() => [ee(e.$slots, "prefix")])
  } : void 0, e.invisibleButton || e.$slots.suffix ? {
    name: "suffix",
    fn: le(() => [e.invisibleButton ? (k(), ne(s, {
      key: 0,
      onClick: e.handleInvisible,
      onMousedown: t[0] || (t[0] = ot(() => {
      }, ["prevent"])),
      onMouseup: t[1] || (t[1] = ot(() => {
      }, ["prevent"]))
    }, {
      default: le(() => [e.mergedVisible ? (k(), ne(i, {
        key: 1
      })) : (k(), ne(r, {
        key: 0
      }))]),
      _: 1
    }, 8, ["onClick"])) : he("v-if", !0), ee(e.$slots, "suffix")])
  } : void 0, e.$slots.append ? {
    name: "append",
    fn: le(() => [ee(e.$slots, "append")])
  } : void 0]), 1032, ["type"]);
}
var vl = /* @__PURE__ */ ae(Ou, [["render", Eu]]);
const xu = z({
  name: "InputGroup",
  setup() {
    return {
      prefixCls: K("input-group")
    };
  }
});
function Pu(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.prefixCls)
  }, [ee(e.$slots, "default")], 2);
}
var pl = /* @__PURE__ */ ae(xu, [["render", Pu]]);
const Eo = Object.assign(dn, {
  Search: cl,
  Password: vl,
  Group: pl,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + dn.name, dn), e.component(n + pl.name, pl), e.component(n + cl.name, cl), e.component(n + vl.name, vl);
  }
});
var Bu = Object.defineProperty, Qo = Object.getOwnPropertySymbols, Iu = Object.prototype.hasOwnProperty, zu = Object.prototype.propertyIsEnumerable, er = (e, t, n) => t in e ? Bu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, rn = (e, t) => {
  for (var n in t || (t = {}))
    Iu.call(t, n) && er(e, n, t[n]);
  if (Qo)
    for (var n of Qo(t))
      zu.call(t, n) && er(e, n, t[n]);
  return e;
};
const Nu = () => {
  const {
    height: e,
    width: t
  } = as();
  return {
    width: Math.min(t, window.innerWidth),
    height: Math.min(e, window.innerHeight)
  };
}, tr = (e, t) => {
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
}, Tu = (e) => {
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
}, kn = (e, t) => {
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
}, Lu = (e, t, {
  containerRect: n,
  triggerRect: l,
  popupRect: o,
  offset: a,
  translate: r
}) => {
  const i = Tu(e), s = Nu(), c = {
    top: n.top + t.top,
    bottom: s.height - (n.top + t.top + o.height),
    left: n.left + t.left,
    right: s.width - (n.left + t.left + o.width)
  };
  let u = e;
  if (i === "top" && c.top < 0)
    if (l.top > o.height)
      t.top = -n.top;
    else {
      const v = an("bottom", l, o, {
        offset: a,
        translate: r
      });
      s.height - (n.top + v.top + o.height) > 0 && (u = kn(e, "bottom"), t.top = v.top);
    }
  if (i === "bottom" && c.bottom < 0)
    if (s.height - l.bottom > o.height)
      t.top = -n.top + (s.height - o.height);
    else {
      const v = an("top", l, o, {
        offset: a,
        translate: r
      });
      n.top + v.top > 0 && (u = kn(e, "top"), t.top = v.top);
    }
  if (i === "left" && c.left < 0)
    if (l.left > o.width)
      t.left = -n.left;
    else {
      const v = an("right", l, o, {
        offset: a,
        translate: r
      });
      s.width - (n.left + v.left + o.width) > 0 && (u = kn(e, "right"), t.left = v.left);
    }
  if (i === "right" && c.right < 0)
    if (s.width - l.right > o.width)
      t.left = -n.left + (s.width - o.width);
    else {
      const v = an("left", l, o, {
        offset: a,
        translate: r
      });
      n.left + v.left > 0 && (u = kn(e, "left"), t.left = v.left);
    }
  return (i === "top" || i === "bottom") && (c.left < 0 ? t.left = -n.left : c.right < 0 && (t.left = -n.left + (s.width - o.width))), (i === "left" || i === "right") && (c.top < 0 ? t.top = -n.top : c.bottom < 0 && (t.top = -n.top + (s.height - o.height))), {
    popupPosition: t,
    position: u
  };
}, an = (e, t, n, {
  offset: l = 0,
  translate: o = [0, 0]
} = {}) => {
  var a;
  const r = (a = Ke(o) ? o : o[e]) != null ? a : [0, 0];
  switch (e) {
    case "top":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + r[0],
        top: t.scrollTop - n.height - l + r[1]
      };
    case "tl":
      return {
        left: t.scrollLeft + r[0],
        top: t.scrollTop - n.height - l + r[1]
      };
    case "tr":
      return {
        left: t.scrollRight - n.width + r[0],
        top: t.scrollTop - n.height - l + r[1]
      };
    case "bottom":
      return {
        left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + r[0],
        top: t.scrollBottom + l + r[1]
      };
    case "bl":
      return {
        left: t.scrollLeft + r[0],
        top: t.scrollBottom + l + r[1]
      };
    case "br":
      return {
        left: t.scrollRight - n.width + r[0],
        top: t.scrollBottom + l + r[1]
      };
    case "left":
      return {
        left: t.scrollLeft - n.width - l + r[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + r[1]
      };
    case "lt":
      return {
        left: t.scrollLeft - n.width - l + r[0],
        top: t.scrollTop + r[1]
      };
    case "lb":
      return {
        left: t.scrollLeft - n.width - l + r[0],
        top: t.scrollBottom - n.height + r[1]
      };
    case "right":
      return {
        left: t.scrollRight + l + r[0],
        top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + r[1]
      };
    case "rt":
      return {
        left: t.scrollRight + l + r[0],
        top: t.scrollTop + r[1]
      };
    case "rb":
      return {
        left: t.scrollRight + l + r[0],
        top: t.scrollBottom - n.height + r[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, Vu = (e) => {
  let t = "0";
  ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
  let n = "0";
  return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"), `${t} ${n}`;
}, ju = (e, t, n, l, {
  offset: o = 0,
  translate: a = [0, 0],
  customStyle: r = {},
  autoFitPosition: i = !1
} = {}) => {
  let s = e, c = an(e, n, l, {
    offset: o,
    translate: a
  });
  if (i) {
    const v = Lu(e, c, {
      containerRect: t,
      popupRect: l,
      triggerRect: n,
      offset: o,
      translate: a
    });
    c = v.popupPosition, s = v.position;
  }
  return {
    style: rn({
      left: `${c.left}px`,
      top: `${c.top}px`
    }, r),
    position: s
  };
}, Du = (e, t, n, {
  customStyle: l = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
    let a = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
    return a > n.width - 8 && (t.width > n.width ? a = n.width / 2 : a = n.width - 8), ["top", "tl", "tr"].includes(e) ? rn({
      left: `${a}px`,
      bottom: "0",
      transform: "translate(-50%,50%) rotate(45deg)"
    }, l) : rn({
      left: `${a}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, l);
  }
  let o = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
  return o > n.height - 8 && (t.height > n.height ? o = n.height / 2 : o = n.height - 8), ["left", "lt", "lb"].includes(e) ? rn({
    top: `${o}px`,
    right: "0",
    transform: "translate(50%,-50%) rotate(45deg)"
  }, l) : rn({
    top: `${o}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, l);
}, Au = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth, nr = (e) => {
  var t;
  const n = [];
  let l = e;
  for (; l && l !== document.documentElement; )
    Au(l) && n.push(l), l = (t = l.parentElement) != null ? t : void 0;
  return n;
}, Ia = () => {
  const e = {}, t = _(), n = () => {
    const l = ka(e.value);
    l !== t.value && (t.value = l);
  };
  return Ne(() => n()), it(() => n()), {
    children: e,
    firstElement: t
  };
};
var uo = z({
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
    } = Ia();
    let a;
    const r = (s) => {
      s && (a = new bo((c) => {
        const u = c[0];
        t("resize", u);
      }), a.observe(s));
    }, i = () => {
      a && (a.disconnect(), a = null);
    };
    return ye(o, (s) => {
      a && i(), s && r(s);
    }), Xt(() => {
      a && i();
    }), () => {
      var s;
      return l.value = (s = n.default) == null ? void 0 : s.call(n), l.value;
    };
  }
});
function ct(e, t) {
  const n = _(e[t]);
  return it(() => {
    const l = e[t];
    n.value !== l && (n.value = l);
  }), n;
}
const lr = Symbol("ArcoTrigger"), Mu = 1e3, Fu = 5e3, Ru = 1;
class Ku {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    }, this.getNextZIndex = (t) => (t === "message" ? Array.from(this.popupStack.message).pop() || Fu : Array.from(this.popupStack.popup).pop() || Mu) + Ru, this.add = (t) => {
      const n = this.getNextZIndex(t);
      return this.popupStack[t].add(n), t === "dialog" && this.popupStack.popup.add(n), n;
    }, this.delete = (t, n) => {
      this.popupStack[n].delete(t), n === "dialog" && this.popupStack.popup.delete(t);
    }, this.isLastDialog = (t) => this.popupStack.dialog.size > 1 ? t === Array.from(this.popupStack.dialog).pop() : !0;
  }
}
const ml = new Ku();
function Hu(e, {
  visible: t,
  runOnMounted: n
} = {}) {
  const l = _(0), o = () => {
    l.value = ml.add(e);
  }, a = () => {
    ml.delete(l.value, e);
  }, r = () => e === "dialog" ? ml.isLastDialog(l.value) : !1;
  return ye(() => t == null ? void 0 : t.value, (i) => {
    i ? o() : a();
  }, {
    immediate: !0
  }), n && (Ne(() => {
    o();
  }), Xt(() => {
    a();
  })), {
    zIndex: bn(l),
    open: o,
    close: a,
    isLastDialog: r
  };
}
const Wu = ({
  elementRef: e,
  onResize: t
}) => {
  let n;
  return {
    createResizeObserver: () => {
      e.value && (n = new bo((a) => {
        const r = a[0];
        Ge(t) && t(r);
      }), n.observe(e.value));
    },
    destroyResizeObserver: () => {
      n && (n.disconnect(), n = null);
    }
  };
};
var qu = z({
  name: "ClientOnly",
  setup(e, {
    slots: t
  }) {
    const n = _(!1);
    return Ne(() => n.value = !0), () => {
      var l;
      return n.value ? (l = t.default) == null ? void 0 : l.call(t) : null;
    };
  }
});
const Gu = ({
  popupContainer: e,
  visible: t,
  defaultContainer: n = "body",
  documentContainer: l
}) => {
  const o = _(e.value), a = _(), r = () => {
    const i = Go(e.value), s = i ? e.value : n, c = i ?? (l ? document.documentElement : Go(n));
    s !== o.value && (o.value = s), c !== a.value && (a.value = c);
  };
  return Ne(() => r()), ye(t, (i) => {
    o.value !== e.value && i && r();
  }), {
    teleportContainer: o,
    containerRef: a
  };
};
var Uu = Object.defineProperty, Zu = Object.defineProperties, Yu = Object.getOwnPropertyDescriptors, or = Object.getOwnPropertySymbols, Xu = Object.prototype.hasOwnProperty, Ju = Object.prototype.propertyIsEnumerable, rr = (e, t, n) => t in e ? Uu(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Qu = (e, t) => {
  for (var n in t || (t = {}))
    Xu.call(t, n) && rr(e, n, t[n]);
  if (or)
    for (var n of or(t))
      Ju.call(t, n) && rr(e, n, t[n]);
  return e;
}, ec = (e, t) => Zu(e, Yu(t));
const tc = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var hl = z({
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
    } = $e(e), a = K("trigger"), r = d(() => yt(l, tc)), i = Fe(_t, void 0), s = d(() => [].concat(e.trigger)), c = /* @__PURE__ */ new Set(), u = Fe(lr, void 0), {
      children: v,
      firstElement: p
    } = Ia(), m = _(), h = _(e.defaultPopupVisible), y = _(e.position), $ = _({}), I = _({}), E = _({}), w = _(), C = _({
      top: 0,
      left: 0
    });
    let S = null, g = null;
    const b = d(() => {
      var O;
      return (O = e.popupVisible) != null ? O : h.value;
    }), {
      teleportContainer: N,
      containerRef: M
    } = Gu({
      popupContainer: o,
      visible: b,
      documentContainer: !0
    }), {
      zIndex: A
    } = Hu("popup", {
      visible: b
    });
    let x = 0, W = !1, G = !1;
    const R = () => {
      x && (window.clearTimeout(x), x = 0);
    }, U = (O) => {
      if (e.alignPoint) {
        const {
          pageX: j,
          pageY: se
        } = O;
        C.value = {
          top: se,
          left: j
        };
      }
    }, X = () => {
      if (!p.value || !m.value || !M.value)
        return;
      const O = M.value.getBoundingClientRect(), j = e.alignPoint ? {
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
      } : tr(p.value, O), se = () => tr(m.value, O), Ue = se(), {
        style: qe,
        position: ut
      } = ju(e.position, O, j, Ue, {
        offset: e.popupOffset,
        translate: e.popupTranslate,
        customStyle: e.popupStyle,
        autoFitPosition: e.autoFitPosition
      });
      e.autoFitTransformOrigin && (I.value = {
        transformOrigin: Vu(ut)
      }), e.autoFitPopupMinWidth ? qe.minWidth = `${j.width}px` : e.autoFitPopupWidth && (qe.width = `${j.width}px`), y.value !== ut && (y.value = ut), $.value = qe, e.showArrow && We(() => {
        E.value = Du(ut, j, se(), {
          customStyle: e.arrowStyle
        });
      });
    }, P = (O, j) => {
      if (O === b.value && x === 0)
        return;
      const se = () => {
        h.value = O, t("update:popupVisible", O), t("popupVisibleChange", O), O && We(() => {
          X();
        });
      };
      O || (S = null, g = null), j ? (R(), O !== b.value && (x = window.setTimeout(se, j))) : se();
    }, F = (O) => {
      var j;
      (j = l.onClick) == null || j.call(l, O), !(e.disabled || b.value && !e.clickToClose) && (s.value.includes("click") ? (U(O), P(!b.value)) : s.value.includes("contextMenu") && b.value && P(!1));
    }, me = (O) => {
      var j;
      (j = l.onMouseenter) == null || j.call(l, O), !(e.disabled || !s.value.includes("hover")) && (U(O), P(!0, e.mouseEnterDelay));
    }, oe = (O) => {
      u == null || u.onMouseenter(O), me(O);
    }, B = (O) => {
      var j;
      (j = l.onMouseleave) == null || j.call(l, O), !(e.disabled || !s.value.includes("hover")) && P(!1, e.mouseLeaveDelay);
    }, te = (O) => {
      u == null || u.onMouseleave(O), B(O);
    }, Q = (O) => {
      var j;
      (j = l.onFocusin) == null || j.call(l, O), !(e.disabled || !s.value.includes("focus")) && P(!0, e.focusDelay);
    }, de = (O) => {
      var j;
      (j = l.onFocusout) == null || j.call(l, O), !(e.disabled || !s.value.includes("focus")) && e.blurToClose && P(!1);
    }, ue = (O) => {
      var j;
      (j = l.onContextmenu) == null || j.call(l, O), !(e.disabled || !s.value.includes("contextMenu") || b.value && !e.clickToClose) && (U(O), P(!b.value), O.preventDefault());
    };
    rt(lr, Se({
      onMouseenter: oe,
      onMouseleave: te,
      addChildRef: (O) => {
        c.add(O), u == null || u.addChildRef(O);
      },
      removeChildRef: (O) => {
        c.delete(O), u == null || u.removeChildRef(O);
      }
    }));
    const Ie = () => {
      Dn(document.documentElement, "mousedown", De), W = !1;
    }, Re = ct(n, "content"), He = d(() => {
      var O;
      return e.hideEmpty && rs((O = Re.value) == null ? void 0 : O.call(Re));
    }), De = (O) => {
      var j, se, Ue;
      if (!((j = p.value) != null && j.contains(O.target) || (se = m.value) != null && se.contains(O.target))) {
        for (const qe of c)
          if ((Ue = qe.value) != null && Ue.contains(O.target))
            return;
        Ie(), P(!1);
      }
    }, Ze = (O, j) => {
      const [se, Ue] = O, {
        scrollTop: qe,
        scrollLeft: ut
      } = j;
      return Math.abs(qe - se) >= e.scrollToCloseDistance || Math.abs(ut - Ue) >= e.scrollToCloseDistance;
    }, Y = io((O) => {
      if (b.value)
        if (e.scrollToClose || i != null && i.scrollToClose) {
          const j = O.target;
          S || (S = [j.scrollTop, j.scrollLeft]), Ze(S, j) ? P(!1) : X();
        } else
          X();
    }), T = () => {
      Dn(window, "scroll", Z), G = !1;
    }, Z = io((O) => {
      const j = O.target.documentElement;
      g || (g = [j.scrollTop, j.scrollLeft]), Ze(g, j) && (P(!1), T());
    }), ge = () => {
      b.value && X();
    }, we = () => {
      ge(), t("resize");
    }, Ee = (O) => {
      e.preventFocus && O.preventDefault();
    };
    u == null || u.addChildRef(m);
    const Xe = d(() => b.value ? e.openedClass : void 0);
    let Ve;
    ye(b, (O) => {
      if (e.clickOutsideToClose && (!O && W ? Ie() : O && !W && (Ft(document.documentElement, "mousedown", De), W = !0)), (e.scrollToClose || i != null && i.scrollToClose) && (Ft(window, "scroll", Z), G = !0), e.updateAtScroll || i != null && i.updateAtScroll) {
        if (O) {
          Ve = nr(p.value);
          for (const j of Ve)
            j.addEventListener("scroll", Y);
        } else if (Ve) {
          for (const j of Ve)
            j.removeEventListener("scroll", Y);
          Ve = void 0;
        }
      }
      O && (kt.value = !0);
    }), ye(() => [e.autoFitPopupWidth, e.autoFitPopupMinWidth], () => {
      b.value && X();
    });
    const {
      createResizeObserver: Ct,
      destroyResizeObserver: tn
    } = Wu({
      elementRef: M,
      onResize: ge
    });
    Ne(() => {
      if (Ct(), b.value && (X(), e.clickOutsideToClose && !W && (Ft(document.documentElement, "mousedown", De), W = !0), e.updateAtScroll || i != null && i.updateAtScroll)) {
        Ve = nr(p.value);
        for (const O of Ve)
          O.addEventListener("scroll", Y);
      }
    }), it(() => {
      b.value && X();
    }), $i(() => {
      P(!1);
    }), Xt(() => {
      if (u == null || u.removeChildRef(m), tn(), W && Ie(), G && T(), Ve) {
        for (const O of Ve)
          O.removeEventListener("scroll", Y);
        Ve = void 0;
      }
    });
    const kt = _(b.value), nt = _(!1), Nt = () => {
      nt.value = !0;
    }, nn = () => {
      nt.value = !1, b.value && t("show");
    }, L = () => {
      nt.value = !1, b.value || (kt.value = !1, t("hide"));
    };
    return () => {
      var O, j;
      return v.value = (j = (O = n.default) == null ? void 0 : O.call(n)) != null ? j : [], $a(v.value, {
        class: Xe.value,
        onClick: F,
        onMouseenter: me,
        onMouseleave: B,
        onFocusin: Q,
        onFocusout: de,
        onContextmenu: ue
      }), f(Pe, null, [e.autoFixPosition ? f(uo, {
        onResize: we
      }, {
        default: () => [v.value]
      }) : v.value, f(qu, null, {
        default: () => [f(fa, {
          to: N.value,
          disabled: !e.renderToBody
        }, {
          default: () => [(!e.unmountOnClose || b.value || kt.value) && !He.value && f(uo, {
            onResize: ge
          }, {
            default: () => [f("div", re({
              ref: m,
              class: [`${a}-popup`, `${a}-position-${y.value}`],
              style: ec(Qu({}, $.value), {
                zIndex: A.value,
                pointerEvents: nt.value ? "none" : "auto"
              }),
              "trigger-placement": y.value,
              onMouseenter: oe,
              onMouseleave: te,
              onMousedown: Ee
            }, r.value), [f(Kn, {
              name: e.animationName,
              duration: e.duration,
              appear: !0,
              onBeforeEnter: Nt,
              onAfterEnter: nn,
              onBeforeLeave: Nt,
              onAfterLeave: L
            }, {
              default: () => {
                var se;
                return [Kt(f("div", {
                  class: `${a}-popup-wrapper`,
                  style: I.value
                }, [f("div", {
                  class: [`${a}-content`, e.contentClass],
                  style: e.contentStyle
                }, [(se = n.content) == null ? void 0 : se.call(n)]), e.showArrow && f("div", {
                  ref: w,
                  class: [`${a}-arrow`, e.arrowClass],
                  style: E.value
                }, null)]), [[Ht, b.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const mn = Object.assign(hl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + hl.name, hl);
  }
}), nc = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-empty`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), lc = ["stroke-width", "stroke-linecap", "stroke-linejoin"], oc = /* @__PURE__ */ H("path", {
  d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
}, null, -1), rc = [oc];
function ac(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, rc, 14, lc);
}
var yl = /* @__PURE__ */ ae(nc, [["render", ac]]);
const ic = Object.assign(yl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + yl.name, yl);
  }
});
var gl = z({
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
    const l = K("empty"), {
      t: o
    } = Jt(), a = Fe(_t, void 0);
    return () => {
      var r, i, s, c;
      return !e.inConfigProvider && (a != null && a.slots.empty) && !(t.image || e.imgSrc || e.description) ? a.slots.empty({
        component: "empty"
      }) : f("div", re({
        class: l
      }, n), [f("div", {
        class: `${l}-image`
      }, [(i = (r = t.image) == null ? void 0 : r.call(t)) != null ? i : e.imgSrc ? f("img", {
        src: e.imgSrc,
        alt: e.description || "empty"
      }, null) : f(ic, null, null)]), f("div", {
        class: `${l}-description`
      }, [(c = (s = t.default) == null ? void 0 : s.call(t)) != null ? c : e.description || o("empty.description")])]);
    };
  }
});
const za = Object.assign(gl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + gl.name, gl);
  }
}), sc = 5;
var uc = z({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(e) {
    const t = K("dot-loading");
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
      }, [Array(sc).fill(1).map((l, o) => f("div", {
        class: `${t}-item`,
        key: o,
        style: n
      }, null))]);
    };
  }
}), bl = z({
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
    const n = K("spin"), l = Fe(_t, void 0), o = d(() => [n, {
      [`${n}-loading`]: e.loading,
      [`${n}-with-tip`]: e.tip && !t.default
    }]), a = () => {
      if (t.icon) {
        const i = Mt(t.icon());
        if (i)
          return Rn(i, {
            spin: !0
          });
      }
      return t.element ? t.element() : e.dot ? f(uc, {
        size: e.size
      }, null) : l != null && l.slots.loading ? l.slots.loading() : f(ht, {
        spin: !0,
        size: e.size
      }, null);
    }, r = () => {
      var i, s, c;
      const u = e.size ? {
        fontSize: `${e.size}px`
      } : void 0, v = !!((i = t.tip) != null ? i : e.tip);
      return f(Pe, null, [!e.hideIcon && f("div", {
        class: `${n}-icon`,
        style: u
      }, [a()]), v && f("div", {
        class: `${n}-tip`
      }, [(c = (s = t.tip) == null ? void 0 : s.call(t)) != null ? c : e.tip])]);
    };
    return () => f("div", {
      class: o.value
    }, [t.default ? f(Pe, null, [t.default(), e.loading && f("div", {
      class: `${n}-mask`
    }, [f("div", {
      class: `${n}-mask-icon`
    }, [r()])])]) : r()]);
  }
});
const Na = Object.assign(bl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + bl.name, bl);
  }
}), cc = z({
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
    const n = K("scrollbar"), l = _(!1), o = _(), a = _(), r = d(() => e.direction === "horizontal" ? {
      size: "width",
      direction: "left",
      offset: "offsetWidth",
      client: "clientX"
    } : {
      size: "height",
      direction: "top",
      offset: "offsetHeight",
      client: "clientY"
    }), i = _(0), s = _(!1), c = _(0), u = d(() => {
      var E, w;
      return {
        [r.value.size]: `${(w = (E = e.data) == null ? void 0 : E.thumbSize) != null ? w : 0}px`,
        [r.value.direction]: `${i.value}px`
      };
    }), v = (E) => {
      E.preventDefault(), a.value && (c.value = E[r.value.client] - a.value.getBoundingClientRect()[r.value.direction], s.value = !0, Ft(window, "mousemove", h), Ft(window, "mouseup", y), Ft(window, "contextmenu", y));
    }, p = (E) => {
      var w, C, S, g;
      if (E.preventDefault(), a.value) {
        const b = m(E[r.value.client] > a.value.getBoundingClientRect()[r.value.direction] ? i.value + ((C = (w = e.data) == null ? void 0 : w.thumbSize) != null ? C : 0) : i.value - ((g = (S = e.data) == null ? void 0 : S.thumbSize) != null ? g : 0));
        b !== i.value && (i.value = b, t("scroll", b));
      }
    }, m = (E) => E < 0 ? 0 : e.data && E > e.data.max ? e.data.max : E, h = (E) => {
      if (o.value && a.value) {
        const w = m(E[r.value.client] - o.value.getBoundingClientRect()[r.value.direction] - c.value);
        w !== i.value && (i.value = w, t("scroll", w));
      }
    }, y = () => {
      s.value = !1, Dn(window, "mousemove", h), Dn(window, "mouseup", y);
    }, $ = (E) => {
      s.value || (E = m(E), E !== i.value && (i.value = E));
    }, I = d(() => [`${n}-thumb`, `${n}-thumb-direction-${e.direction}`, {
      [`${n}-thumb-dragging`]: s.value
    }]);
    return {
      visible: l,
      trackRef: o,
      thumbRef: a,
      prefixCls: n,
      thumbCls: I,
      thumbStyle: u,
      handleThumbMouseDown: v,
      handleTrackClick: p,
      setOffset: $
    };
  }
});
function dc(e, t, n, l, o, a) {
  return k(), ne(Kn, null, {
    default: le(() => [H("div", {
      ref: "trackRef",
      class: V([`${e.prefixCls}-track`, `${e.prefixCls}-track-direction-${e.direction}`]),
      onMousedown: t[1] || (t[1] = ot((...r) => e.handleTrackClick && e.handleTrackClick(...r), ["self"]))
    }, [H("div", {
      ref: "thumbRef",
      class: V(e.thumbCls),
      style: ve(e.thumbStyle),
      onMousedown: t[0] || (t[0] = (...r) => e.handleThumbMouseDown && e.handleThumbMouseDown(...r))
    }, [H("div", {
      class: V(`${e.prefixCls}-thumb-bar`)
    }, null, 2)], 38)], 34)]),
    _: 1
  });
}
var fc = /* @__PURE__ */ ae(cc, [["render", dc]]);
const ar = 20, wn = 15, vc = z({
  name: "Scrollbar",
  components: {
    ResizeObserver: uo,
    Thumb: fc
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
    const n = K("scrollbar"), l = _(), o = _(), a = _(), r = _(), i = _(), s = _(!1), c = _(!1), u = d(() => s.value && !e.disableHorizontal), v = d(() => c.value && !e.disableVertical), p = _(!1), m = () => {
      var C, S, g, b, N, M;
      if (l.value) {
        const {
          clientWidth: A,
          clientHeight: x,
          offsetWidth: W,
          offsetHeight: G,
          scrollWidth: R,
          scrollHeight: U,
          scrollTop: X,
          scrollLeft: P
        } = l.value;
        s.value = R > A, c.value = U > x, p.value = u.value && v.value;
        const F = e.type === "embed" && p.value ? W - wn : W, me = e.type === "embed" && p.value ? G - wn : G, oe = Math.round(F / Math.min(R / A, F / ar)), B = F - oe, te = (R - A) / B, Q = Math.round(me / Math.min(U / x, me / ar)), de = me - Q, ue = (U - x) / de;
        if (o.value = {
          ratio: te,
          thumbSize: oe,
          max: B
        }, a.value = {
          ratio: ue,
          thumbSize: Q,
          max: de
        }, X > 0) {
          const Ce = Math.round(X / ((S = (C = a.value) == null ? void 0 : C.ratio) != null ? S : 1));
          (g = i.value) == null || g.setOffset(Ce);
        }
        if (P > 0) {
          const Ce = Math.round(P / ((N = (b = a.value) == null ? void 0 : b.ratio) != null ? N : 1));
          (M = r.value) == null || M.setOffset(Ce);
        }
      }
    };
    Ne(() => {
      m();
    });
    const h = () => {
      m();
    }, y = (C) => {
      var S, g, b, N, M, A;
      if (l.value) {
        if (u.value && !e.disableHorizontal) {
          const x = Math.round(l.value.scrollLeft / ((g = (S = o.value) == null ? void 0 : S.ratio) != null ? g : 1));
          (b = r.value) == null || b.setOffset(x);
        }
        if (v.value && !e.disableVertical) {
          const x = Math.round(l.value.scrollTop / ((M = (N = a.value) == null ? void 0 : N.ratio) != null ? M : 1));
          (A = i.value) == null || A.setOffset(x);
        }
      }
      t("scroll", C);
    }, $ = (C) => {
      var S, g;
      l.value && l.value.scrollTo({
        left: C * ((g = (S = o.value) == null ? void 0 : S.ratio) != null ? g : 1)
      });
    }, I = (C) => {
      var S, g;
      l.value && l.value.scrollTo({
        top: C * ((g = (S = a.value) == null ? void 0 : S.ratio) != null ? g : 1)
      });
    }, E = d(() => {
      const C = {};
      return e.type === "track" && (u.value && (C.paddingBottom = `${wn}px`), v.value && (C.paddingRight = `${wn}px`)), [C, e.outerStyle];
    }), w = d(() => [`${n}`, `${n}-type-${e.type}`, {
      [`${n}-both`]: p.value
    }, e.outerClass]);
    return {
      prefixCls: n,
      cls: w,
      style: E,
      containerRef: l,
      horizontalThumbRef: r,
      verticalThumbRef: i,
      horizontalData: o,
      verticalData: a,
      isBoth: p,
      hasHorizontalScrollbar: u,
      hasVerticalScrollbar: v,
      handleResize: h,
      handleScroll: y,
      handleHorizontalScroll: $,
      handleVerticalScroll: I
    };
  },
  methods: {
    scrollTo(e, t) {
      var n, l;
      xe(e) ? (n = this.$refs.containerRef) == null || n.scrollTo(e) : (e || t) && ((l = this.$refs.containerRef) == null || l.scrollTo(e, t));
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
function pc(e, t, n, l, o, a) {
  const r = be("ResizeObserver"), i = be("thumb");
  return k(), D("div", {
    class: V(e.cls),
    style: ve(e.style)
  }, [f(r, {
    onResize: e.handleResize
  }, {
    default: le(() => [H("div", re({
      ref: "containerRef",
      class: `${e.prefixCls}-container`
    }, e.$attrs, {
      onScroll: t[0] || (t[0] = (...s) => e.handleScroll && e.handleScroll(...s))
    }), [f(r, {
      onResize: e.handleResize
    }, {
      default: le(() => [ee(e.$slots, "default")]),
      _: 3
    }, 8, ["onResize"])], 16)]),
    _: 3
  }, 8, ["onResize"]), !e.hide && e.hasHorizontalScrollbar ? (k(), ne(i, {
    key: 0,
    ref: "horizontalThumbRef",
    data: e.horizontalData,
    direction: "horizontal",
    both: e.isBoth,
    onScroll: e.handleHorizontalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0), !e.hide && e.hasVerticalScrollbar ? (k(), ne(i, {
    key: 1,
    ref: "verticalThumbRef",
    data: e.verticalData,
    direction: "vertical",
    both: e.isBoth,
    onScroll: e.handleVerticalScroll
  }, null, 8, ["data", "both", "onScroll"])) : he("v-if", !0)], 6);
}
var _l = /* @__PURE__ */ ae(vc, [["render", pc]]);
const Ta = Object.assign(_l, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + _l.name, _l);
  }
}), La = (e) => {
  const t = _(), n = () => pa(t.value) ? t.value.$refs[e] : t.value, l = _();
  return Ne(() => {
    l.value = n();
  }), ye([t], () => {
    l.value = n();
  }), {
    componentRef: t,
    elementRef: l
  };
};
var mc = Object.defineProperty, ir = Object.getOwnPropertySymbols, hc = Object.prototype.hasOwnProperty, yc = Object.prototype.propertyIsEnumerable, sr = (e, t, n) => t in e ? mc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, gc = (e, t) => {
  for (var n in t || (t = {}))
    hc.call(t, n) && sr(e, n, t[n]);
  if (ir)
    for (var n of ir(t))
      yc.call(t, n) && sr(e, n, t[n]);
  return e;
};
const Va = (e) => {
  const t = d(() => !!e.value), n = d(() => {
    if (e.value)
      return gc({
        type: "embed"
      }, qt(e.value) ? void 0 : e.value);
  });
  return {
    displayScrollbar: t,
    scrollbarProps: n
  };
}, bc = z({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Ta,
    Empty: za,
    Spin: Na
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
    var l, o, a;
    const {
      scrollbar: r
    } = $e(e), i = K("select-dropdown"), s = Fe(_t, void 0), c = (a = (o = s == null ? void 0 : (l = s.slots).empty) == null ? void 0 : o.call(l, {
      component: "select"
    })) == null ? void 0 : a[0], {
      componentRef: u,
      elementRef: v
    } = La("containerRef"), {
      displayScrollbar: p,
      scrollbarProps: m
    } = Va(r), h = ($) => {
      const {
        scrollTop: I,
        scrollHeight: E,
        offsetHeight: w
      } = $.target;
      E - (I + w) <= e.bottomOffset && t("reachBottom", $), t("scroll", $);
    }, y = d(() => [i, {
      [`${i}-has-header`]: !!n.header,
      [`${i}-has-footer`]: !!n.footer
    }]);
    return {
      prefixCls: i,
      SelectEmpty: c,
      cls: y,
      wrapperRef: v,
      wrapperComRef: u,
      handleScroll: h,
      displayScrollbar: p,
      scrollbarProps: m
    };
  }
});
function _c(e, t, n, l, o, a) {
  const r = be("spin");
  return k(), D("div", {
    class: V(e.cls)
  }, [e.$slots.header && (!e.empty || e.showHeaderOnEmpty) ? (k(), D("div", {
    key: 0,
    class: V(`${e.prefixCls}-header`)
  }, [ee(e.$slots, "header")], 2)) : he("v-if", !0), e.loading ? (k(), ne(r, {
    key: 1,
    class: V(`${e.prefixCls}-loading`)
  }, null, 8, ["class"])) : e.empty ? (k(), D("div", {
    key: 2,
    class: V(`${e.prefixCls}-empty`)
  }, [ee(e.$slots, "empty", {}, () => [(k(), ne(Et(e.SelectEmpty ? e.SelectEmpty : "Empty")))])], 2)) : he("v-if", !0), e.virtualList && !e.loading && !e.empty ? ee(e.$slots, "virtual-list", {
    key: 3
  }) : he("v-if", !0), e.virtualList ? he("v-if", !0) : Kt((k(), ne(Et(e.displayScrollbar ? "ScrollbarComponent" : "div"), re({
    key: 4,
    ref: "wrapperComRef",
    class: `${e.prefixCls}-list-wrapper`
  }, e.scrollbarProps, {
    onScroll: e.handleScroll
  }), {
    default: le(() => [H("ul", {
      class: V(`${e.prefixCls}-list`)
    }, [ee(e.$slots, "default")], 2)]),
    _: 3
  }, 16, ["class", "onScroll"])), [[Ht, !e.loading && !e.empty]]), e.$slots.footer && (!e.empty || e.showFooterOnEmpty) ? (k(), D("div", {
    key: 5,
    class: V(`${e.prefixCls}-footer`)
  }, [ee(e.$slots, "footer")], 2)) : he("v-if", !0)], 2);
}
var $c = /* @__PURE__ */ ae(bc, [["render", _c]]), ur = z({
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
const ja = Symbol("ArcoCheckboxGroup");
var Pn = z({
  name: "Checkbox",
  components: {
    IconCheck: ur,
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
      disabled: l,
      modelValue: o
    } = $e(e), a = K("checkbox"), r = _(), i = e.uninjectGroupContext ? void 0 : Fe(ja, void 0), s = (i == null ? void 0 : i.name) === "ArcoCheckboxGroup", {
      mergedDisabled: c,
      eventHandlers: u
    } = vt({
      disabled: l
    }), v = _(e.defaultChecked), p = d(() => {
      var C;
      return s ? i == null ? void 0 : i.computedValue : (C = e.modelValue) != null ? C : v.value;
    }), m = d(() => {
      var C;
      return Ke(p.value) ? p.value.includes((C = e.value) != null ? C : !0) : p.value;
    }), h = d(() => (i == null ? void 0 : i.disabled) || (c == null ? void 0 : c.value) || !m.value && (i == null ? void 0 : i.isMaxed)), y = (C) => {
      C.stopPropagation();
    }, $ = (C) => {
      var S, g, b, N;
      const {
        checked: M
      } = C.target;
      let A = M;
      if (Ke(p.value)) {
        const x = new Set(p.value);
        M ? x.add((S = e.value) != null ? S : !0) : x.delete((g = e.value) != null ? g : !0), A = Array.from(x);
      }
      v.value = M, s && Ke(A) ? i == null || i.handleChange(A, C) : (t("update:modelValue", A), t("change", A, C), (N = (b = u.value) == null ? void 0 : b.onChange) == null || N.call(b, C)), We(() => {
        r.value && r.value.checked !== m.value && (r.value.checked = m.value);
      });
    }, I = d(() => [a, {
      [`${a}-checked`]: m.value,
      [`${a}-indeterminate`]: e.indeterminate,
      [`${a}-disabled`]: h.value
    }]), E = (C) => {
      var S, g;
      (g = (S = u.value) == null ? void 0 : S.onFocus) == null || g.call(S, C);
    }, w = (C) => {
      var S, g;
      (g = (S = u.value) == null ? void 0 : S.onBlur) == null || g.call(S, C);
    };
    return ye(o, (C) => {
      (Me(C) || Hn(C)) && (v.value = !1);
    }), ye(p, (C) => {
      var S;
      let g;
      Ke(C) ? g = C.includes((S = e.value) != null ? S : !0) : g = C, v.value !== g && (v.value = g), r.value && r.value.checked !== g && (r.value.checked = g);
    }), () => {
      var C, S, g, b;
      return f("label", {
        "aria-disabled": h.value,
        class: I.value
      }, [f("input", {
        ref: r,
        type: "checkbox",
        checked: m.value,
        value: e.value,
        class: `${a}-target`,
        disabled: h.value,
        onClick: y,
        onChange: $,
        onFocus: E,
        onBlur: w
      }, null), (b = (g = (S = n.checkbox) != null ? S : (C = i == null ? void 0 : i.slots) == null ? void 0 : C.checkbox) == null ? void 0 : g({
        checked: m.value,
        disabled: h.value
      })) != null ? b : f(Je, {
        class: `${a}-icon-hover`,
        disabled: h.value || m.value
      }, {
        default: () => [f("div", {
          class: `${a}-icon`
        }, [m.value && f(ur, {
          class: `${a}-icon-check`
        }, null)])]
      }), n.default && f("span", {
        class: `${a}-label`
      }, [n.default()])]);
    };
  }
}), $l = z({
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
    } = $e(e), o = K("checkbox-group"), {
      mergedDisabled: a,
      eventHandlers: r
    } = vt({
      disabled: l
    }), i = _(e.defaultValue), s = d(() => Ke(e.modelValue) ? e.modelValue : i.value), c = d(() => e.max === void 0 ? !1 : s.value.length >= e.max), u = d(() => {
      var h;
      return ((h = e.options) != null ? h : []).map((y) => ft(y) || pe(y) ? {
        label: y,
        value: y
      } : y);
    });
    rt(ja, Se({
      name: "ArcoCheckboxGroup",
      computedValue: s,
      disabled: a,
      isMaxed: c,
      slots: n,
      handleChange: (h, y) => {
        var $, I;
        i.value = h, t("update:modelValue", h), t("change", h, y), (I = ($ = r.value) == null ? void 0 : $.onChange) == null || I.call($, y);
      }
    }));
    const p = d(() => [o, `${o}-direction-${e.direction}`]);
    ye(() => e.modelValue, (h) => {
      Ke(h) ? i.value = [...h] : i.value = [];
    });
    const m = () => u.value.map((h) => {
      const y = s.value.includes(h.value);
      return f(Pn, {
        key: h.value,
        value: h.value,
        disabled: h.disabled || !y && c.value,
        indeterminate: h.indeterminate,
        modelValue: y
      }, {
        default: () => [n.label ? n.label({
          data: h
        }) : Ge(h.label) ? h.label() : h.label]
      });
    });
    return () => {
      var h;
      return f("span", {
        class: p.value
      }, [u.value.length > 0 ? m() : (h = n.default) == null ? void 0 : h.call(n)]);
    };
  }
});
const Da = Object.assign(Pn, {
  Group: $l,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Pn.name, Pn), e.component(n + $l.name, $l);
  }
}), Aa = Symbol("ArcoSelectContext");
var Cc = Object.defineProperty, kc = Object.defineProperties, wc = Object.getOwnPropertyDescriptors, cr = Object.getOwnPropertySymbols, Sc = Object.prototype.hasOwnProperty, Oc = Object.prototype.propertyIsEnumerable, dr = (e, t, n) => t in e ? Cc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, xo = (e, t) => {
  for (var n in t || (t = {}))
    Sc.call(t, n) && dr(e, n, t[n]);
  if (cr)
    for (var n of cr(t))
      Oc.call(t, n) && dr(e, n, t[n]);
  return e;
}, Ma = (e, t) => kc(e, wc(t));
const Ec = (e) => xe(e) && "isGroup" in e, Fa = (e) => xe(e) && "isGroup" in e, xc = (e, t = "value") => String(xe(e) ? e[t] : e), hn = (e, t = "value") => xe(e) ? `__arco__option__object__${e[t]}` : e || pe(e) || ft(e) || qt(e) ? `__arco__option__${typeof e}-${e}` : "", Pc = (e) => e.has("__arco__option__string-"), Bc = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  index: o = -1
}) => {
  var a;
  if (xe(e)) {
    const i = e[n.value];
    return {
      raw: e,
      index: o,
      key: hn(i, t),
      origin: l,
      value: i,
      label: (a = e[n.label]) != null ? a : xc(i, t),
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
  return xo({
    raw: r,
    index: o,
    key: hn(e, t),
    origin: l
  }, r);
}, co = (e, {
  valueKey: t,
  fieldNames: n,
  origin: l,
  optionInfoMap: o
}) => {
  var a;
  const r = [];
  for (const i of e)
    if (Ec(i)) {
      const s = co((a = i.options) != null ? a : [], {
        valueKey: t,
        fieldNames: n,
        origin: l,
        optionInfoMap: o
      });
      s.length > 0 && r.push(Ma(xo({}, i), {
        key: `__arco__group__${i.label}`,
        options: s
      }));
    } else {
      const s = Bc(i, {
        valueKey: t,
        fieldNames: n,
        origin: l
      });
      r.push(s), o.get(s.key) || o.set(s.key, s);
    }
  return r;
}, fr = (e, {
  inputValue: t,
  filterOption: n
}) => {
  const l = (o) => {
    var a;
    const r = [];
    for (const i of o)
      if (Fa(i)) {
        const s = l((a = i.options) != null ? a : []);
        s.length > 0 && r.push(Ma(xo({}, i), {
          options: s
        }));
      } else
        Un(i, {
          inputValue: t,
          filterOption: n
        }) && r.push(i);
    return r;
  };
  return l(e);
}, Un = (e, {
  inputValue: t,
  filterOption: n
}) => Ge(n) ? !t || n(t, e.raw) : n ? e.label.toLowerCase().includes((t ?? "").toLowerCase()) : !0, Ic = (e, t) => {
  if (!e || !t || e.length !== t.length)
    return !1;
  for (const n of Object.keys(e))
    if (!Po(e[n], t[n]))
      return !1;
  return !0;
}, zc = (e, t) => {
  if (!e || !t)
    return !1;
  const {
    length: n
  } = e;
  if (n !== t.length)
    return !1;
  for (let l = 0; l < n; l++)
    if (!Po(e[l], t[l]))
      return !1;
  return !0;
}, Po = (e, t) => {
  const n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t) ? !1 : n === "[object Object]" ? Ic(e, t) : n === "[object Array]" ? zc(e, t) : n === "[object Function]" ? e === t ? !0 : e.toString() === t.toString() : e === t;
}, Nc = z({
  name: "Option",
  components: {
    Checkbox: Da
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
    } = $e(e), o = K("select-option"), a = Fe(Aa, void 0), r = bt(), i = _(), s = _(n.value);
    ye(n, (g, b) => {
      Po(g, b) || (s.value = g);
    });
    const c = _(""), u = d(() => {
      var g, b;
      return (b = (g = e.value) != null ? g : e.label) != null ? b : c.value;
    }), v = d(() => {
      var g;
      return (g = e.label) != null ? g : c.value;
    }), p = d(() => hn(u.value, a == null ? void 0 : a.valueKey)), m = d(() => {
      var g;
      return (g = a == null ? void 0 : a.component) != null ? g : "li";
    }), h = () => {
      var g;
      if (!e.label && i.value) {
        const b = (g = i.value.textContent) != null ? g : "";
        c.value !== b && (c.value = b);
      }
    };
    Ne(() => h()), it(() => h());
    const y = d(() => {
      var g;
      return (g = a == null ? void 0 : a.valueKeys.includes(p.value)) != null ? g : !1;
    }), $ = d(() => (a == null ? void 0 : a.activeKey) === p.value);
    let I = _(!0);
    if (!e.internal) {
      const g = Se({
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
      I = d(() => Un(g, {
        inputValue: a == null ? void 0 : a.inputValue,
        filterOption: a == null ? void 0 : a.filterOption
      })), r && (a == null || a.addSlotOptionInfo(r.uid, g)), Xt(() => {
        r && (a == null || a.removeSlotOptionInfo(r.uid));
      });
    }
    const E = (g) => {
      e.disabled || a == null || a.onSelect(p.value, g);
    }, w = () => {
      e.disabled || a == null || a.setActiveKey(p.value);
    }, C = () => {
      e.disabled || a == null || a.setActiveKey();
    }, S = d(() => [o, {
      [`${o}-disabled`]: e.disabled,
      [`${o}-selected`]: y.value,
      [`${o}-active`]: $.value,
      [`${o}-multiple`]: a == null ? void 0 : a.multiple
    }]);
    return {
      prefixCls: o,
      cls: S,
      selectCtx: a,
      itemRef: i,
      component: m,
      isSelected: y,
      isValid: I,
      handleClick: E,
      handleMouseEnter: w,
      handleMouseLeave: C
    };
  }
});
function Tc(e, t, n, l, o, a) {
  const r = be("checkbox");
  return Kt((k(), ne(Et(e.component), {
    ref: "itemRef",
    class: V([e.cls, {
      [`${e.prefixCls}-has-suffix`]: !!e.$slots.suffix
    }]),
    onClick: e.handleClick,
    onMouseenter: e.handleMouseEnter,
    onMouseleave: e.handleMouseLeave
  }, {
    default: le(() => [e.$slots.icon ? (k(), D("span", {
      key: 0,
      class: V(`${e.prefixCls}-icon`)
    }, [ee(e.$slots, "icon")], 2)) : he("v-if", !0), e.selectCtx && e.selectCtx.multiple ? (k(), ne(r, {
      key: 1,
      class: V(`${e.prefixCls}-checkbox`),
      "model-value": e.isSelected,
      disabled: e.disabled,
      "uninject-group-context": ""
    }, {
      default: le(() => [ee(e.$slots, "default", {}, () => [je(ze(e.label), 1)])]),
      _: 3
    }, 8, ["class", "model-value", "disabled"])) : (k(), D("span", {
      key: 2,
      class: V(`${e.prefixCls}-content`)
    }, [ee(e.$slots, "default", {}, () => [je(ze(e.label), 1)])], 2)), e.$slots.suffix ? (k(), D("span", {
      key: 3,
      class: V(`${e.prefixCls}-suffix`)
    }, [ee(e.$slots, "suffix")], 2)) : he("v-if", !0)]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [[Ht, e.isValid]]);
}
var Bn = /* @__PURE__ */ ae(Nc, [["render", Tc]]), Lc = Object.defineProperty, Vc = Object.defineProperties, jc = Object.getOwnPropertyDescriptors, vr = Object.getOwnPropertySymbols, Dc = Object.prototype.hasOwnProperty, Ac = Object.prototype.propertyIsEnumerable, pr = (e, t, n) => t in e ? Lc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Cl = (e, t) => {
  for (var n in t || (t = {}))
    Dc.call(t, n) && pr(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      Ac.call(t, n) && pr(e, n, t[n]);
  return e;
}, Mc = (e, t) => Vc(e, jc(t));
const Fc = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
}, Rc = ({
  options: e,
  extraOptions: t,
  inputValue: n,
  filterOption: l,
  showExtraOptions: o,
  valueKey: a,
  fieldNames: r
}) => {
  const i = d(() => Cl(Cl({}, Fc), r == null ? void 0 : r.value)), s = Se(/* @__PURE__ */ new Map()), c = d(() => Array.from(s.values()).sort((w, C) => pe(w.index) && pe(C.index) ? w.index - C.index : 0)), u = d(() => {
    var w, C;
    const S = /* @__PURE__ */ new Map();
    return {
      optionInfos: co((w = e == null ? void 0 : e.value) != null ? w : [], {
        valueKey: (C = a == null ? void 0 : a.value) != null ? C : "value",
        fieldNames: i.value,
        origin: "options",
        optionInfoMap: S
      }),
      optionInfoMap: S
    };
  }), v = d(() => {
    var w, C;
    const S = /* @__PURE__ */ new Map();
    return {
      optionInfos: co((w = t == null ? void 0 : t.value) != null ? w : [], {
        valueKey: (C = a == null ? void 0 : a.value) != null ? C : "value",
        fieldNames: i.value,
        origin: "extraOptions",
        optionInfoMap: S
      }),
      optionInfoMap: S
    };
  }), p = Se(/* @__PURE__ */ new Map());
  ye([c, e ?? _([]), t ?? _([]), a ?? _("value")], () => {
    p.clear(), c.value.forEach((w, C) => {
      p.set(w.key, Mc(Cl({}, w), {
        index: C
      }));
    }), u.value.optionInfoMap.forEach((w) => {
      p.has(w.key) || (w.index = p.size, p.set(w.key, w));
    }), v.value.optionInfoMap.forEach((w) => {
      p.has(w.key) || (w.index = p.size, p.set(w.key, w));
    });
  }, {
    immediate: !0,
    deep: !0
  });
  const m = d(() => {
    var w;
    const C = fr(u.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    });
    return ((w = o == null ? void 0 : o.value) == null || w) && C.push(...fr(v.value.optionInfos, {
      inputValue: n == null ? void 0 : n.value,
      filterOption: l == null ? void 0 : l.value
    })), C;
  }), h = d(() => Array.from(p.values()).filter((w) => w.origin === "extraOptions" && (o == null ? void 0 : o.value) === !1 ? !1 : Un(w, {
    inputValue: n == null ? void 0 : n.value,
    filterOption: l == null ? void 0 : l.value
  }))), y = d(() => h.value.filter((w) => !w.disabled).map((w) => w.key));
  return {
    validOptions: m,
    optionInfoMap: p,
    validOptionInfos: h,
    enabledOptionKeys: y,
    getNextSlotOptionIndex: () => s.size,
    addSlotOptionInfo: (w, C) => {
      s.set(w, C);
    },
    removeSlotOptionInfo: (w) => {
      s.delete(w);
    }
  };
}, Dt = {
  ENTER: "Enter",
  ESC: "Escape",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight"
}, mr = (e) => JSON.stringify({
  key: e.key,
  ctrl: !!e.ctrl,
  shift: !!e.shift,
  alt: !!e.alt,
  meta: !!e.meta
}), Ra = (e) => {
  const t = {};
  return e.forEach((n, l) => {
    const o = ft(l) ? {
      key: l
    } : l;
    t[mr(o)] = n;
  }), (n) => {
    const l = mr({
      key: n.key,
      ctrl: n.ctrlKey,
      shift: n.shiftKey,
      alt: n.altKey,
      meta: n.metaKey
    }), o = t[l];
    o && (n.stopPropagation(), o(n));
  };
}, Kc = ({
  multiple: e,
  options: t,
  extraOptions: n,
  inputValue: l,
  filterOption: o,
  showExtraOptions: a,
  component: r,
  valueKey: i,
  fieldNames: s,
  loading: c,
  popupVisible: u,
  valueKeys: v,
  dropdownRef: p,
  optionRefs: m,
  virtualListRef: h,
  onSelect: y,
  onPopupVisibleChange: $,
  enterToOpen: I = !0,
  defaultActiveFirstOption: E
}) => {
  const {
    validOptions: w,
    optionInfoMap: C,
    validOptionInfos: S,
    enabledOptionKeys: g,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: M
  } = Rc({
    options: t,
    extraOptions: n,
    inputValue: l,
    filterOption: o,
    showExtraOptions: a,
    valueKey: i,
    fieldNames: s
  }), A = _();
  ye(g, (U) => {
    (!A.value || !U.includes(A.value)) && (A.value = U[0]);
  });
  const x = (U) => {
    A.value = U;
  }, W = (U) => {
    const X = g.value.length;
    if (X === 0)
      return;
    if (!A.value)
      return U === "down" ? g.value[0] : g.value[X - 1];
    const P = g.value.indexOf(A.value), F = (X + P + (U === "up" ? -1 : 1)) % X;
    return g.value[F];
  }, G = (U) => {
    var X, P;
    h != null && h.value && h.value.scrollTo({
      key: U
    });
    const F = C.get(U), me = (X = p == null ? void 0 : p.value) == null ? void 0 : X.wrapperRef, oe = (P = m == null ? void 0 : m.value[U]) != null ? P : F == null ? void 0 : F.ref;
    if (!me || !oe || me.scrollHeight === me.offsetHeight)
      return;
    const B = ss(oe, me), te = me.scrollTop;
    B.top < 0 ? me.scrollTo(0, te + B.top) : B.bottom < 0 && me.scrollTo(0, te - B.bottom);
  };
  ye(u, (U) => {
    var X;
    if (U) {
      const P = v.value[v.value.length - 1];
      let F = (X = E == null ? void 0 : E.value) == null || X ? g.value[0] : void 0;
      g.value.includes(P) && (F = P), F !== A.value && (A.value = F), We(() => {
        A.value && G(A.value);
      });
    }
  });
  const R = Ra(/* @__PURE__ */ new Map([[Dt.ENTER, (U) => {
    !(c != null && c.value) && !U.isComposing && (u.value ? A.value && (y(A.value, U), U.preventDefault()) : I && ($(!0), U.preventDefault()));
  }], [Dt.ESC, (U) => {
    u.value && ($(!1), U.preventDefault());
  }], [Dt.ARROW_DOWN, (U) => {
    if (u.value) {
      const X = W("down");
      X && (A.value = X, G(X)), U.preventDefault();
    }
  }], [Dt.ARROW_UP, (U) => {
    if (u.value) {
      const X = W("up");
      X && (A.value = X, G(X)), U.preventDefault();
    }
  }]]));
  return rt(Aa, Se({
    multiple: e,
    valueKey: i,
    inputValue: l,
    filterOption: o,
    component: r,
    valueKeys: v,
    activeKey: A,
    setActiveKey: x,
    onSelect: y,
    getNextSlotOptionIndex: b,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: M
  })), {
    validOptions: w,
    optionInfoMap: C,
    validOptionInfos: S,
    enabledOptionKeys: g,
    activeKey: A,
    setActiveKey: x,
    addSlotOptionInfo: N,
    removeSlotOptionInfo: M,
    getNextActiveKey: W,
    scrollIntoView: G,
    handleKeyDown: R
  };
}, Hc = ({
  dataKeys: e,
  contentRef: t,
  fixedSize: n,
  estimatedSize: l,
  buffer: o
}) => {
  const a = _(0), r = /* @__PURE__ */ new Map(), i = d(() => e.value.length), s = _(0), c = d(() => {
    const b = s.value + o.value * 3;
    return b > i.value ? i.value : b;
  }), u = d(() => {
    const b = i.value - o.value * 3;
    return b < 0 ? 0 : b;
  }), v = (b) => {
    b < 0 ? s.value = 0 : b > u.value ? s.value = u.value : s.value = b;
  }, p = _(n.value), m = d(() => l.value !== 30 ? l.value : a.value || l.value), h = (b, N) => {
    r.set(b, N);
  }, y = (b) => {
    var N;
    if (p.value)
      return m.value;
    const M = e.value[b];
    return (N = r.get(M)) != null ? N : m.value;
  }, $ = (b) => r.has(b);
  Ne(() => {
    const b = Array.from(r.values()).reduce((N, M) => N + M, 0);
    b > 0 && (a.value = b / r.size);
  });
  const I = (b) => p.value ? m.value * b : E(0, b), E = (b, N) => {
    let M = 0;
    for (let A = b; A < N; A++)
      M += y(A);
    return M;
  }, w = d(() => p.value ? m.value * s.value : E(0, s.value)), C = (b) => {
    const N = b >= w.value;
    let M = Math.abs(b - w.value);
    const A = N ? s.value : s.value - 1;
    let x = 0;
    for (; M > 0; )
      M -= y(A + x), N ? x++ : x--;
    return x;
  }, S = (b) => {
    const N = C(b), M = s.value + N - o.value;
    return M < 0 ? 0 : M > u.value ? u.value : M;
  }, g = d(() => p.value ? m.value * (i.value - c.value) : E(c.value, i.value));
  return {
    frontPadding: w,
    behindPadding: g,
    start: s,
    end: c,
    getStartByScroll: S,
    setItemSize: h,
    hasItemSize: $,
    setStart: v,
    getScrollOffset: I
  };
};
var Wc = z({
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
    const l = (n = bt()) == null ? void 0 : n.vnode.key, o = _(), a = () => {
      var r, i, s, c;
      const u = (i = (r = o.value) == null ? void 0 : r.$el) != null ? i : o.value, v = (c = (s = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : s.call(u).height) != null ? c : u == null ? void 0 : u.offsetHeight;
      v && e.setItemSize(l, v);
    };
    return Ne(() => a()), Xt(() => a()), () => {
      var r;
      const i = Mt((r = t.default) == null ? void 0 : r.call(t));
      return i ? Rn(i, {
        ref: o
      }, !0) : null;
    };
  }
}), qc = Object.defineProperty, hr = Object.getOwnPropertySymbols, Gc = Object.prototype.hasOwnProperty, Uc = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? qc(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Zc = (e, t) => {
  for (var n in t || (t = {}))
    Gc.call(t, n) && yr(e, n, t[n]);
  if (hr)
    for (var n of hr(t))
      Uc.call(t, n) && yr(e, n, t[n]);
  return e;
};
const Yc = z({
  name: "VirtualList",
  components: {
    VirtualListItem: Wc
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
      estimatedSize: a,
      buffer: r,
      height: i
    } = $e(e), s = K("virtual-list"), c = d(() => xe(e.component) ? Zc({
      container: "div",
      list: "div",
      content: "div"
    }, e.component) : {
      container: e.component,
      list: "div",
      content: "div"
    }), u = _(), v = _(), p = d(() => ({
      height: pe(i.value) ? `${i.value}px` : i.value,
      overflow: "auto"
    })), m = d(() => n.value.map((A, x) => {
      var W;
      return (W = A[l.value]) != null ? W : x;
    })), {
      frontPadding: h,
      behindPadding: y,
      start: $,
      end: I,
      getStartByScroll: E,
      setItemSize: w,
      hasItemSize: C,
      setStart: S,
      getScrollOffset: g
    } = Hc({
      dataKeys: m,
      contentRef: v,
      fixedSize: o,
      estimatedSize: a,
      buffer: r
    }), b = d(() => e.threshold && n.value.length <= e.threshold ? n.value : n.value.slice($.value, I.value)), N = (A) => {
      const {
        scrollTop: x,
        scrollHeight: W,
        offsetHeight: G
      } = A.target, R = E(x);
      R !== $.value && (S(R), We(() => {
        M(x);
      })), t("scroll", A), Math.floor(W - (x + G)) <= 0 && t("reachBottom", A);
    }, M = (A) => {
      var x, W;
      if (u.value)
        if (pe(A))
          u.value.scrollTop = A;
        else {
          const G = (W = A.index) != null ? W : m.value.indexOf((x = A.key) != null ? x : "");
          S(G - r.value), u.value.scrollTop = g(G), We(() => {
            if (u.value) {
              const R = g(G);
              R !== u.value.scrollTop && (u.value.scrollTop = R);
            }
          });
        }
    };
    return {
      prefixCls: s,
      containerRef: u,
      contentRef: v,
      frontPadding: h,
      currentList: b,
      behindPadding: y,
      onScroll: N,
      setItemSize: w,
      hasItemSize: C,
      start: $,
      scrollTo: M,
      style: p,
      mergedComponent: c
    };
  }
});
function Xc(e, t, n, l, o, a) {
  const r = be("VirtualListItem");
  return k(), ne(Et(e.mergedComponent.container), {
    ref: "containerRef",
    class: V(e.prefixCls),
    style: ve(e.style),
    onScroll: e.onScroll
  }, {
    default: le(() => [(k(), ne(Et(e.mergedComponent.list), re(e.listAttrs, {
      style: e.paddingPosition === "list" ? {
        paddingTop: `${e.frontPadding}px`,
        paddingBottom: `${e.behindPadding}px`
      } : {}
    }), {
      default: le(() => [(k(), ne(Et(e.mergedComponent.content), re({
        ref: "contentRef"
      }, e.contentAttrs, {
        style: e.paddingPosition === "content" ? {
          paddingTop: `${e.frontPadding}px`,
          paddingBottom: `${e.behindPadding}px`
        } : {}
      }), {
        default: le(() => [(k(!0), D(Pe, null, Wt(e.currentList, (i, s) => {
          var c;
          return k(), ne(r, {
            key: (c = i[e.itemKey]) != null ? c : e.start + s,
            "has-item-size": e.hasItemSize,
            "set-item-size": e.setItemSize
          }, {
            default: le(() => [ee(e.$slots, "item", {
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
var Bo = /* @__PURE__ */ ae(Yc, [["render", Xc]]);
const Jc = ({
  itemRef: e,
  selector: t,
  index: n,
  parentClassName: l
}) => {
  const o = _(-1), a = d(() => {
    var c;
    return (c = n == null ? void 0 : n.value) != null ? c : o.value;
  }), r = _(), i = () => {
    var c, u, v;
    let p = (u = (c = e.value) == null ? void 0 : c.parentElement) != null ? u : void 0;
    if (l)
      for (; p && !p.className.includes(l); )
        p = (v = p.parentElement) != null ? v : void 0;
    return p;
  }, s = () => {
    if (Me(n == null ? void 0 : n.value) && r.value && e.value) {
      const c = Array.from(r.value.querySelectorAll(t)).indexOf(e.value);
      c !== o.value && (o.value = c);
    }
  };
  return ye(e, () => {
    e.value && !r.value && (r.value = i());
  }), Ne(() => {
    e.value && (r.value = i()), s();
  }), it(() => s()), {
    computedIndex: a
  };
}, Qc = z({
  name: "Popover",
  components: {
    Trigger: mn
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
    const n = K("popover"), l = _(e.defaultPopupVisible), o = d(() => {
      var s;
      return (s = e.popupVisible) != null ? s : l.value;
    }), a = (s) => {
      l.value = s, t("update:popupVisible", s), t("popupVisibleChange", s);
    }, r = d(() => [`${n}-popup-content`, e.contentClass]), i = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: r,
      arrowCls: i,
      handlePopupVisibleChange: a
    };
  }
});
function ed(e, t, n, l, o, a) {
  const r = be("trigger");
  return k(), ne(r, {
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
    content: le(() => [H("div", {
      class: V(`${e.prefixCls}-title`)
    }, [ee(e.$slots, "title", {}, () => [je(ze(e.title), 1)])], 2), H("div", {
      class: V(`${e.prefixCls}-content`)
    }, [ee(e.$slots, "content", {}, () => [je(ze(e.content), 1)])], 2)]),
    default: le(() => [ee(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var kl = /* @__PURE__ */ ae(Qc, [["render", ed]]);
const td = Object.assign(kl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + kl.name, kl);
  }
});
var nd = Object.defineProperty, gr = Object.getOwnPropertySymbols, ld = Object.prototype.hasOwnProperty, od = Object.prototype.propertyIsEnumerable, br = (e, t, n) => t in e ? nd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, wl = (e, t) => {
  for (var n in t || (t = {}))
    ld.call(t, n) && br(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      od.call(t, n) && br(e, n, t[n]);
  return e;
};
const rd = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], ad = ["normal", "processing", "success", "warning", "danger"];
var Sl = z({
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
      validator: (e) => ad.includes(e)
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
      offset: a,
      text: r,
      dot: i,
      maxCount: s,
      count: c
    } = $e(e), u = K("badge"), v = id(u, n == null ? void 0 : n.value, t == null ? void 0 : t.default), p = d(() => {
      const h = wl({}, (o == null ? void 0 : o.value) || {}), [y, $] = (a == null ? void 0 : a.value) || [];
      y && (h.marginRight = `${-y}px`), $ && (h.marginTop = `${$}px`);
      const I = !(l != null && l.value) || rd.includes(l == null ? void 0 : l.value) ? {} : {
        backgroundColor: l.value
      };
      return {
        mergedStyle: wl(wl({}, I), h),
        computedDotStyle: h,
        computedColorStyle: I
      };
    }), m = () => {
      const h = r == null ? void 0 : r.value, y = l == null ? void 0 : l.value, $ = n == null ? void 0 : n.value, I = i == null ? void 0 : i.value, E = Number(c == null ? void 0 : c.value), w = (c == null ? void 0 : c.value) != null, {
        computedDotStyle: C,
        mergedStyle: S
      } = p.value;
      return t.content ? f("span", {
        class: `${u}-custom-dot`,
        style: C
      }, [t.content()]) : h && !y && !$ ? f("span", {
        class: `${u}-text`,
        style: C
      }, [h]) : $ || y && !w ? f("span", {
        class: `${u}-status-wrapper`
      }, [f("span", {
        class: [`${u}-status-dot`, {
          [`${u}-status-${$}`]: $,
          [`${u}-color-${y}`]: y
        }],
        style: S
      }, null), h && f("span", {
        class: `${u}-status-text`
      }, [h])]) : (I || y) && E > 0 ? f("span", {
        class: [`${u}-dot`, {
          [`${u}-color-${y}`]: y
        }],
        style: S
      }, null) : E === 0 ? null : f("span", {
        class: `${u}-number`,
        style: S
      }, [f("span", null, [s.value && E > s.value ? `${s.value}+` : E])]);
    };
    return () => f("span", {
      class: v.value
    }, [t.default && t.default(), m()]);
  }
});
const id = (e, t, n) => d(() => [e, {
  [`${e}-status`]: t,
  [`${e}-no-children`]: !n
}]), sd = Object.assign(Sl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Sl.name, Sl);
  }
}), ud = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-more`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), cd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], dd = /* @__PURE__ */ H("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), fd = /* @__PURE__ */ H("path", {
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"
}, null, -1), vd = [dd, fd];
function pd(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, vd, 14, cd);
}
var Ol = /* @__PURE__ */ ae(ud, [["render", pd]]);
const md = Object.assign(Ol, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ol.name, Ol);
  }
}), hd = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-down`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), yd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gd = /* @__PURE__ */ H("path", {
  d: "M39.6 17.443 24.043 33 8.487 17.443"
}, null, -1), bd = [gd];
function _d(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, bd, 14, yd);
}
var El = /* @__PURE__ */ ae(hd, [["render", _d]]);
const Io = Object.assign(El, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + El.name, El);
  }
}), $d = ({
  popupVisible: e,
  defaultPopupVisible: t,
  emit: n
}) => {
  var l;
  const o = _((l = t == null ? void 0 : t.value) != null ? l : !1), a = d(() => {
    var i;
    return (i = e == null ? void 0 : e.value) != null ? i : o.value;
  }), r = (i) => {
    i !== a.value && (o.value = i, n("update:popupVisible", i), n("popupVisibleChange", i));
  };
  return ye(a, (i) => {
    o.value !== i && (o.value = i);
  }), {
    computedPopupVisible: a,
    handlePopupVisibleChange: r
  };
}, Cd = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-right`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), kd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wd = /* @__PURE__ */ H("path", {
  d: "m16 39.513 15.556-15.557L16 8.4"
}, null, -1), Sd = [wd];
function Od(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Sd, 14, kd);
}
var xl = /* @__PURE__ */ ae(Cd, [["render", Od]]);
const Ka = Object.assign(xl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + xl.name, xl);
  }
}), Ed = ({
  defaultValue: e,
  modelValue: t,
  emit: n,
  eventName: l = "input",
  updateEventName: o = "update:modelValue",
  eventHandlers: a
}) => {
  var r;
  const i = _(), s = _((r = e == null ? void 0 : e.value) != null ? r : ""), c = _(!1), u = _(!1), v = _("");
  let p;
  const m = d(() => {
    var g;
    return (g = t == null ? void 0 : t.value) != null ? g : s.value;
  }), h = (g, b) => {
    s.value = g, n(o, g), n(l, g, b);
  }, y = (g) => {
    const {
      value: b
    } = g.target;
    u.value || (h(b, g), We(() => {
      i.value && m.value !== i.value.value && (i.value.value = m.value);
    }));
  }, $ = (g) => {
    l === "input" && m.value !== p && (p = m.value, n("change", m.value, g));
  }, I = (g) => {
    var b;
    const {
      value: N
    } = g.target;
    g.type === "compositionend" ? (u.value = !1, v.value = "", h(N, g), We(() => {
      i.value && m.value !== i.value.value && (i.value.value = m.value);
    })) : (u.value = !0, v.value = m.value + ((b = g.data) != null ? b : ""));
  }, E = (g) => {
    var b, N;
    c.value = !0, p = m.value, n("focus", g), (N = (b = a == null ? void 0 : a.value) == null ? void 0 : b.onFocus) == null || N.call(b, g);
  }, w = (g) => {
    var b, N;
    c.value = !1, n("blur", g), (N = (b = a == null ? void 0 : a.value) == null ? void 0 : b.onBlur) == null || N.call(b, g), $(g);
  }, C = (g) => {
    const b = g.key || g.code;
    !u.value && b === Oo.key && (n("pressEnter", g), $(g));
  }, S = (g) => {
    i.value && g.target !== i.value && (g.preventDefault(), i.value.focus());
  };
  return ye(m, (g) => {
    i.value && g !== i.value.value && (i.value.value = g);
  }), {
    inputRef: i,
    _value: s,
    _focused: c,
    isComposition: u,
    compositionValue: v,
    computedValue: m,
    handleInput: y,
    handleComposition: I,
    handleFocus: E,
    handleBlur: w,
    handleKeyDown: C,
    handleMousedown: S
  };
};
var xd = z({
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
      size: a,
      disabled: r,
      error: i,
      inputValue: s,
      uninjectFormItemContext: c
    } = $e(e), u = (o = e.baseCls) != null ? o : K("input-label"), {
      mergedSize: v,
      mergedDisabled: p,
      mergedError: m,
      eventHandlers: h
    } = vt({
      size: a,
      disabled: r,
      error: i,
      uninject: c == null ? void 0 : c.value
    }), {
      mergedSize: y
    } = st(v), {
      inputRef: $,
      _focused: I,
      computedValue: E,
      handleInput: w,
      handleComposition: C,
      handleFocus: S,
      handleBlur: g,
      handleMousedown: b
    } = Ed({
      modelValue: s,
      emit: n,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers: h
    }), N = d(() => {
      var P;
      return (P = e.focused) != null ? P : I.value;
    }), M = d(() => e.enabledInput && I.value || !e.modelValue), A = () => {
      var P, F;
      return e.modelValue ? (F = (P = e.formatLabel) == null ? void 0 : P.call(e, e.modelValue)) != null ? F : e.modelValue.label : "";
    }, x = d(() => e.enabledInput && e.modelValue ? A() : e.placeholder), W = () => {
      var P, F;
      return e.modelValue ? (F = (P = l.default) == null ? void 0 : P.call(l, {
        data: e.modelValue
      })) != null ? F : A() : null;
    }, G = d(() => [u, `${u}-size-${y.value}`, {
      [`${u}-search`]: e.enabledInput,
      [`${u}-focus`]: N.value,
      [`${u}-disabled`]: p.value,
      [`${u}-error`]: m.value
    }]), R = d(() => yt(t, Ut)), U = d(() => Gn(t, Ut));
    return {
      inputRef: $,
      render: () => f("span", re(R.value, {
        class: G.value,
        title: A(),
        onMousedown: b
      }), [l.prefix && f("span", {
        class: `${u}-prefix`
      }, [l.prefix()]), f("input", re(U.value, {
        ref: $,
        class: [`${u}-input`, {
          [`${u}-input-hidden`]: !M.value
        }],
        value: E.value,
        readonly: !e.enabledInput,
        placeholder: x.value,
        disabled: p.value,
        onInput: w,
        onFocus: S,
        onBlur: g,
        onCompositionstart: C,
        onCompositionupdate: C,
        onCompositionend: C
      }), null), f("span", {
        class: [`${u}-value`, {
          [`${u}-value-hidden`]: M.value
        }]
      }, [W()]), l.suffix && f("span", {
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
}), Pd = Object.defineProperty, _r = Object.getOwnPropertySymbols, Bd = Object.prototype.hasOwnProperty, Id = Object.prototype.propertyIsEnumerable, $r = (e, t, n) => t in e ? Pd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, zd = (e, t) => {
  for (var n in t || (t = {}))
    Bd.call(t, n) && $r(e, n, t[n]);
  if (_r)
    for (var n of _r(t))
      Id.call(t, n) && $r(e, n, t[n]);
  return e;
};
const Nd = (e, t) => {
  const n = [];
  for (const l of e)
    if (xe(l))
      n.push({
        raw: l,
        value: l[t.value],
        label: l[t.label],
        closable: l[t.closable],
        tagProps: l[t.tagProps]
      });
    else if (e || pe(e)) {
      const o = {
        value: l,
        label: String(l),
        closable: !0
      };
      n.push(zd({
        raw: o
      }, o));
    }
  return n;
}, Cr = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Td = z({
  name: "Tag",
  components: {
    IconHover: Je,
    IconClose: $n,
    IconLoading: ht
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
    } = $e(e), l = K("tag"), o = d(() => e.color && Cr.includes(e.color)), a = d(() => e.color && !Cr.includes(e.color)), r = _(e.defaultVisible), i = _(e.defaultChecked), s = d(() => {
      var $;
      return ($ = e.visible) != null ? $ : r.value;
    }), c = d(() => {
      var $;
      return e.checkable ? ($ = e.checked) != null ? $ : i.value : !0;
    }), {
      mergedSize: u
    } = st(n), v = d(() => u.value === "mini" ? "small" : u.value), p = ($) => {
      r.value = !1, t("update:visible", !1), t("close", $);
    }, m = ($) => {
      if (e.checkable) {
        const I = !c.value;
        i.value = I, t("update:checked", I), t("check", I, $);
      }
    }, h = d(() => [l, `${l}-size-${v.value}`, {
      [`${l}-loading`]: e.loading,
      [`${l}-hide`]: !s.value,
      [`${l}-${e.color}`]: o.value,
      [`${l}-bordered`]: e.bordered,
      [`${l}-checkable`]: e.checkable,
      [`${l}-checked`]: c.value,
      [`${l}-custom-color`]: a.value
    }]), y = d(() => {
      if (a.value)
        return {
          backgroundColor: e.color
        };
    });
    return {
      prefixCls: l,
      cls: h,
      style: y,
      computedVisible: s,
      computedChecked: c,
      handleClick: m,
      handleClose: p
    };
  }
});
function Ld(e, t, n, l, o, a) {
  const r = be("icon-close"), i = be("icon-hover"), s = be("icon-loading");
  return e.computedVisible ? (k(), D("span", {
    key: 0,
    class: V(e.cls),
    style: ve(e.style),
    onClick: t[0] || (t[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, [e.$slots.icon ? (k(), D("span", {
    key: 0,
    class: V(`${e.prefixCls}-icon`)
  }, [ee(e.$slots, "icon")], 2)) : he("v-if", !0), e.nowrap ? (k(), D("span", {
    key: 1,
    class: V(`${e.prefixCls}-text`)
  }, [ee(e.$slots, "default")], 2)) : ee(e.$slots, "default", {
    key: 2
  }), e.closable ? (k(), ne(i, {
    key: 3,
    role: "button",
    "aria-label": "Close",
    prefix: e.prefixCls,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: ot(e.handleClose, ["stop"])
  }, {
    default: le(() => [ee(e.$slots, "close-icon", {}, () => [f(r)])]),
    _: 3
  }, 8, ["prefix", "class", "onClick"])) : he("v-if", !0), e.loading ? (k(), D("span", {
    key: 4,
    class: V(`${e.prefixCls}-loading-icon`)
  }, [f(s)], 2)) : he("v-if", !0)], 6)) : he("v-if", !0);
}
var Pl = /* @__PURE__ */ ae(Td, [["render", Ld]]);
const Zn = Object.assign(Pl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Pl.name, Pl);
  }
});
var Vd = Object.defineProperty, kr = Object.getOwnPropertySymbols, jd = Object.prototype.hasOwnProperty, Dd = Object.prototype.propertyIsEnumerable, wr = (e, t, n) => t in e ? Vd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Sn = (e, t) => {
  for (var n in t || (t = {}))
    jd.call(t, n) && wr(e, n, t[n]);
  if (kr)
    for (var n of kr(t))
      Dd.call(t, n) && wr(e, n, t[n]);
  return e;
};
const Ad = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var Bl = z({
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
      disabled: a,
      error: r,
      uninjectFormItemContext: i,
      modelValue: s
    } = $e(e), c = e.baseCls || K("input-tag"), u = _(), v = _(), {
      mergedSize: p,
      mergedDisabled: m,
      mergedError: h,
      feedback: y,
      eventHandlers: $
    } = vt({
      size: o,
      disabled: a,
      error: r,
      uninject: i == null ? void 0 : i.value
    }), {
      mergedSize: I
    } = st(p), E = d(() => Sn(Sn({}, Ad), e.fieldNames)), w = _(!1), C = _(e.defaultValue), S = _(e.defaultInputValue), g = _(!1), b = _(""), N = d(() => xe(e.retainInputValue) ? Sn({
      create: !1,
      blur: !1
    }, e.retainInputValue) : {
      create: e.retainInputValue,
      blur: e.retainInputValue
    }), M = Se({
      width: "12px"
    }), A = d(() => e.focused || w.value), x = (T, Z) => {
      S.value = T, t("update:inputValue", T), t("inputValueChange", T, Z);
    }, W = (T) => {
      var Z;
      const {
        value: ge
      } = T.target;
      T.type === "compositionend" ? (g.value = !1, b.value = "", x(ge, T), We(() => {
        u.value && R.value !== u.value.value && (u.value.value = R.value);
      })) : (g.value = !0, b.value = R.value + ((Z = T.data) != null ? Z : ""));
    }, G = d(() => {
      var T;
      return (T = e.modelValue) != null ? T : C.value;
    }), R = d(() => {
      var T;
      return (T = e.inputValue) != null ? T : S.value;
    });
    ye(s, (T) => {
      (Me(T) || Hn(T)) && (C.value = []);
    });
    const U = (T) => {
      u.value && T.target !== u.value && (T.preventDefault(), u.value.focus());
    }, X = (T) => {
      const {
        value: Z
      } = T.target;
      g.value || (x(Z, T), We(() => {
        u.value && R.value !== u.value.value && (u.value.value = R.value);
      }));
    }, P = d(() => Nd(G.value, E.value)), F = d(() => {
      if (e.maxTagCount > 0) {
        const T = P.value.length - e.maxTagCount;
        if (T > 0) {
          const Z = P.value.slice(0, e.maxTagCount), ge = {
            value: "__arco__more",
            label: `+${T}...`,
            closable: !1
          };
          return Z.push(Sn({
            raw: ge
          }, ge)), Z;
        }
      }
      return P.value;
    }), me = (T, Z) => {
      var ge, we;
      C.value = T, t("update:modelValue", T), t("change", T, Z), (we = (ge = $.value) == null ? void 0 : ge.onChange) == null || we.call(ge, Z);
    }, oe = (T, Z, ge) => {
      var we;
      const Ee = (we = G.value) == null ? void 0 : we.filter((Xe, Ve) => Ve !== Z);
      me(Ee, ge), t("remove", T, ge);
    }, B = (T) => {
      me([], T), t("clear", T);
    }, te = d(() => !m.value && !e.readonly && e.allowClear && !!G.value.length), Q = (T) => {
      var Z;
      if (R.value) {
        if (T.preventDefault(), e.uniqueValue && ((Z = G.value) != null && Z.includes(R.value))) {
          t("pressEnter", R.value, T);
          return;
        }
        const ge = G.value.concat(R.value);
        me(ge, T), t("pressEnter", R.value, T), N.value.create || x("", T);
      }
    }, de = (T) => {
      var Z, ge;
      w.value = !0, t("focus", T), (ge = (Z = $.value) == null ? void 0 : Z.onFocus) == null || ge.call(Z, T);
    }, ue = (T) => {
      var Z, ge;
      w.value = !1, !N.value.blur && R.value && x("", T), t("blur", T), (ge = (Z = $.value) == null ? void 0 : Z.onBlur) == null || ge.call(Z, T);
    }, Ce = () => {
      for (let T = P.value.length - 1; T >= 0; T--)
        if (P.value[T].closable)
          return T;
      return -1;
    }, Qe = (T) => {
      if (m.value || e.readonly)
        return;
      const Z = T.key || T.code;
      if (!g.value && R.value && Z === Oo.key && Q(T), !g.value && F.value.length > 0 && !R.value && Z === Hs.key) {
        const ge = Ce();
        ge >= 0 && oe(P.value[ge].value, ge, T);
      }
    }, Ie = (T) => {
      T > 12 ? M.width = `${T}px` : M.width = "12px";
    };
    Ne(() => {
      v.value && Ie(v.value.offsetWidth);
    });
    const Re = () => {
      v.value && Ie(v.value.offsetWidth);
    };
    ye(R, (T) => {
      u.value && !g.value && T !== u.value.value && (u.value.value = T);
    });
    const He = d(() => [c, `${c}-size-${I.value}`, {
      [`${c}-disabled`]: m.value,
      [`${c}-disabled-input`]: e.disabledInput,
      [`${c}-error`]: h.value,
      [`${c}-focus`]: A.value,
      [`${c}-readonly`]: e.readonly,
      [`${c}-has-tag`]: F.value.length > 0,
      [`${c}-has-prefix`]: !!n.prefix,
      [`${c}-has-suffix`]: !!n.suffix || te.value || y.value,
      [`${c}-has-placeholder`]: !G.value.length
    }]), De = d(() => yt(l, Ut)), Ze = d(() => Gn(l, Ut));
    return {
      inputRef: u,
      render: () => {
        var T;
        return f("span", re({
          class: He.value,
          onMousedown: U
        }, De.value), [f(pn, {
          onResize: Re
        }, {
          default: () => [f("span", {
            ref: v,
            class: `${c}-mirror`
          }, [F.value.length > 0 ? b.value || R.value : b.value || R.value || e.placeholder])]
        }), n.prefix && f("span", {
          class: `${c}-prefix`
        }, [n.prefix()]), f(Ci, {
          tag: "span",
          name: "input-tag-zoom",
          class: [`${c}-inner`, {
            [`${c}-nowrap`]: e.tagNowrap
          }]
        }, {
          default: () => [F.value.map((Z, ge) => f(Zn, re({
            key: `tag-${Z.value}`,
            class: `${c}-tag`,
            closable: !m.value && !e.readonly && Z.closable,
            visible: !0,
            nowrap: e.tagNowrap
          }, Z.tagProps, {
            onClose: (we) => oe(Z.value, ge, we)
          }), {
            default: () => {
              var we, Ee, Xe, Ve;
              return [(Ve = (Xe = (we = n.tag) == null ? void 0 : we.call(n, {
                data: Z.raw
              })) != null ? Xe : (Ee = e.formatTag) == null ? void 0 : Ee.call(e, Z.raw)) != null ? Ve : Z.label];
            }
          })), f("input", re(Ze.value, {
            ref: u,
            key: "input-tag-input",
            class: `${c}-input`,
            style: M,
            placeholder: F.value.length === 0 ? e.placeholder : void 0,
            disabled: m.value,
            readonly: e.readonly || e.disabledInput,
            onInput: X,
            onKeydown: Qe,
            onFocus: de,
            onBlur: ue,
            onCompositionstart: W,
            onCompositionupdate: W,
            onCompositionend: W
          }), null)]
        }), te.value && f(Je, {
          class: `${c}-clear-btn`,
          onClick: B,
          onMousedown: (Z) => Z.stopPropagation()
        }, {
          default: () => [f($n, null, null)]
        }), (n.suffix || !!y.value) && f("span", {
          class: `${c}-suffix`
        }, [(T = n.suffix) == null ? void 0 : T.call(n), !!y.value && f(So, {
          type: y.value
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
const Md = Object.assign(Bl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Bl.name, Bl);
  }
});
var Sr = z({
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
      default: (e) => Ke(e.modelValue)
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
      error: a
    } = $e(e), r = K("select-view"), {
      feedback: i,
      eventHandlers: s,
      mergedDisabled: c,
      mergedSize: u,
      mergedError: v
    } = vt({
      size: l,
      disabled: o,
      error: a
    }), {
      mergedSize: p
    } = st(u), {
      opened: m
    } = $e(e), h = _(), y = d(() => {
      var x;
      return (x = h.value) == null ? void 0 : x.inputRef;
    }), $ = d(() => e.modelValue.length === 0), I = d(() => e.allowSearch || e.allowCreate), E = d(() => e.allowClear && !e.disabled && !$.value), w = (x) => {
      var W, G;
      t("focus", x), (G = (W = s.value) == null ? void 0 : W.onFocus) == null || G.call(W, x);
    }, C = (x) => {
      var W, G;
      t("blur", x), (G = (W = s.value) == null ? void 0 : W.onBlur) == null || G.call(W, x);
    }, S = (x) => {
      t("remove", x);
    }, g = (x) => {
      t("clear", x);
    }, b = () => {
      var x, W, G, R;
      return e.loading ? (W = (x = n["loading-icon"]) == null ? void 0 : x.call(n)) != null ? W : f(ht, null, null) : e.allowSearch && e.opened ? (R = (G = n["search-icon"]) == null ? void 0 : G.call(n)) != null ? R : f(so, null, null) : n["arrow-icon"] ? n["arrow-icon"]() : f(Io, {
        class: `${r}-arrow-icon`
      }, null);
    }, N = () => f(Pe, null, [E.value && f(Je, {
      class: `${r}-clear-btn`,
      onClick: g,
      onMousedown: (x) => x.stopPropagation()
    }, {
      default: () => [f($n, null, null)]
    }), f("span", {
      class: `${r}-icon`
    }, [b()]), !!i.value && f(So, {
      type: i.value
    }, null)]);
    ye(m, (x) => {
      !x && y.value && y.value.isSameNode(document.activeElement) && y.value.blur();
    });
    const M = d(() => [`${r}-${e.multiple ? "multiple" : "single"}`, {
      [`${r}-opened`]: e.opened,
      [`${r}-borderless`]: !e.bordered
    }]);
    return {
      inputRef: y,
      handleFocus: w,
      handleBlur: C,
      render: () => e.multiple ? f(Md, {
        ref: h,
        baseCls: r,
        class: M.value,
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
        onRemove: S,
        onFocus: w,
        onBlur: C
      }, {
        prefix: n.prefix,
        suffix: N,
        tag: n.label
      }) : f(xd, {
        ref: h,
        baseCls: r,
        class: M.value,
        modelValue: e.modelValue[0],
        inputValue: e.inputValue,
        focused: e.opened,
        placeholder: e.placeholder,
        disabled: c.value,
        size: p.value,
        error: v.value,
        enabledInput: I.value,
        uninjectFormItemContext: !0,
        onFocus: w,
        onBlur: C
      }, {
        default: n.label,
        prefix: n.prefix,
        suffix: N
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
const Fd = z({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    return {
      prefixCls: K("select-group")
    };
  }
});
function Rd(e, t, n, l, o, a) {
  return k(), D(Pe, null, [H("li", {
    class: V(`${e.prefixCls}-title`)
  }, [ee(e.$slots, "label", {}, () => [je(ze(e.label), 1)])], 2), ee(e.$slots, "default")], 64);
}
var In = /* @__PURE__ */ ae(Fd, [["render", Rd]]);
const Or = typeof window > "u" ? global : window;
function Kd(e, t) {
  let n = 0;
  return (...l) => {
    n && Or.clearTimeout(n), n = Or.setTimeout(() => {
      n = 0, e(...l);
    }, t);
  };
}
var Hd = Object.defineProperty, Wd = Object.defineProperties, qd = Object.getOwnPropertyDescriptors, Er = Object.getOwnPropertySymbols, Gd = Object.prototype.hasOwnProperty, Ud = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? Hd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ln = (e, t) => {
  for (var n in t || (t = {}))
    Gd.call(t, n) && xr(e, n, t[n]);
  if (Er)
    for (var n of Er(t))
      Ud.call(t, n) && xr(e, n, t[n]);
  return e;
}, Zd = (e, t) => Wd(e, qd(t));
function Yd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !xt(e);
}
const Xd = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var Il = z({
  name: "Select",
  components: {
    Trigger: mn,
    SelectView: Sr
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
      default: (e) => Me(e.multiple) ? "" : []
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
      disabled: a,
      error: r,
      options: i,
      filterOption: s,
      valueKey: c,
      multiple: u,
      popupVisible: v,
      defaultPopupVisible: p,
      showExtraOptions: m,
      modelValue: h,
      fieldNames: y,
      loading: $,
      defaultActiveFirstOption: I
    } = $e(e), E = K("select"), {
      mergedSize: w,
      mergedDisabled: C,
      mergedError: S,
      eventHandlers: g
    } = vt({
      size: o,
      disabled: a,
      error: r
    }), b = d(() => e.virtualListProps ? "div" : "li"), N = d(() => xe(e.allowSearch) && !!e.allowSearch.retainInputValue);
    d(() => {
      if (Ge(e.formatLabel))
        return (L) => {
          const O = Ee.get(L.value);
          return e.formatLabel(O);
        };
    });
    const M = _(), A = _({}), x = _(), {
      computedPopupVisible: W,
      handlePopupVisibleChange: G
    } = $d({
      popupVisible: v,
      defaultPopupVisible: p,
      emit: n
    }), R = _(e.defaultValue), U = d(() => {
      var L;
      const O = (L = e.modelValue) != null ? L : R.value;
      return (Ke(O) ? O : O || pe(O) || ft(O) || qt(O) ? [O] : []).map((se) => ({
        value: se,
        key: hn(se, e.valueKey)
      }));
    });
    ye(h, (L) => {
      (Me(L) || Hn(L)) && (R.value = u.value ? [] : L);
    });
    const X = d(() => U.value.map((L) => L.key)), P = d(() => ln(ln({}, Xd), y == null ? void 0 : y.value)), F = _(), me = (L) => {
      const O = {};
      return L.forEach((j) => {
        O[j] = Ee.get(j);
      }), O;
    }, oe = (L) => {
      F.value = me(L);
    }, B = (L) => Ge(e.fallbackOption) ? e.fallbackOption(L) : {
      [P.value.value]: L,
      [P.value.label]: String(xe(L) ? L[c == null ? void 0 : c.value] : L)
    }, te = () => {
      const L = [], O = [];
      if (e.allowCreate || e.fallbackOption) {
        for (const j of U.value)
          if (!O.includes(j.key) && j.value !== "") {
            const se = Ee.get(j.key);
            (!se || se.origin === "extraOptions") && (L.push(j), O.push(j.key));
          }
      }
      if (e.allowCreate && Ce.value) {
        const j = hn(Ce.value);
        if (!O.includes(j)) {
          const se = Ee.get(j);
          (!se || se.origin === "extraOptions") && L.push({
            value: Ce.value,
            key: j
          });
        }
      }
      return L;
    }, Q = _([]), de = d(() => Q.value.map((L) => {
      var O;
      let j = B(L.value);
      const se = (O = F.value) == null ? void 0 : O[L.key];
      return !Me(se) && !xi(se) && (j = ln(ln({}, j), se)), j;
    }));
    We(() => {
      Bt(() => {
        var L;
        const O = te();
        if (O.length !== Q.value.length)
          Q.value = O;
        else if (O.length > 0) {
          for (let j = 0; j < O.length; j++)
            if (O[j].key !== ((L = Q.value[j]) == null ? void 0 : L.key)) {
              Q.value = O;
              break;
            }
        }
      });
    });
    const ue = _(""), Ce = d(() => {
      var L;
      return (L = e.inputValue) != null ? L : ue.value;
    });
    ye(W, (L) => {
      !L && !N.value && Ce.value && Re("");
    });
    const Qe = (L) => {
      var O, j;
      return e.multiple ? L.map((se) => {
        var Ue, qe;
        return (qe = (Ue = Ee.get(se)) == null ? void 0 : Ue.value) != null ? qe : "";
      }) : (j = (O = Ee.get(L[0])) == null ? void 0 : O.value) != null ? j : Pc(Ee) ? void 0 : "";
    }, Ie = (L) => {
      var O, j;
      const se = Qe(L);
      R.value = se, n("update:modelValue", se), n("change", se), (j = (O = g.value) == null ? void 0 : O.onChange) == null || j.call(O), oe(L);
    }, Re = (L) => {
      ue.value = L, n("update:inputValue", L), n("inputValueChange", L);
    }, He = (L, O) => {
      if (e.multiple) {
        if (X.value.includes(L)) {
          const j = X.value.filter((se) => se !== L);
          Ie(j);
        } else if (Ve.value.includes(L))
          if (e.limit > 0 && X.value.length >= e.limit) {
            const j = Ee.get(L);
            n("exceedLimit", j == null ? void 0 : j.value, O);
          } else {
            const j = X.value.concat(L);
            Ie(j);
          }
        N.value || Re("");
      } else {
        if (L !== X.value[0] && Ie([L]), N.value) {
          const j = Ee.get(L);
          j && Re(j.label);
        }
        G(!1);
      }
    }, De = Kd((L) => {
      n("search", L);
    }, e.searchDelay), Ze = (L) => {
      L !== Ce.value && (W.value || G(!0), Re(L), e.allowSearch && De(L));
    }, Y = (L) => {
      const O = Ee.get(L), j = X.value.filter((se) => se !== L);
      Ie(j), n("remove", O == null ? void 0 : O.value);
    }, T = (L) => {
      L == null || L.stopPropagation();
      const O = X.value.filter((j) => {
        var se;
        return (se = Ee.get(j)) == null ? void 0 : se.disabled;
      });
      Ie(O), Re(""), n("clear", L);
    }, Z = (L) => {
      n("dropdownScroll", L);
    }, ge = (L) => {
      n("dropdownReachBottom", L);
    }, {
      validOptions: we,
      optionInfoMap: Ee,
      validOptionInfos: Xe,
      enabledOptionKeys: Ve,
      handleKeyDown: Ct
    } = Kc({
      multiple: u,
      options: i,
      extraOptions: de,
      inputValue: Ce,
      filterOption: s,
      showExtraOptions: m,
      component: b,
      valueKey: c,
      fieldNames: y,
      loading: $,
      popupVisible: W,
      valueKeys: X,
      dropdownRef: M,
      optionRefs: A,
      virtualListRef: x,
      defaultActiveFirstOption: I,
      onSelect: He,
      onPopupVisibleChange: G
    }), tn = d(() => {
      var L;
      const O = [];
      for (const j of U.value) {
        const se = Ee.get(j.key);
        se && O.push(Zd(ln({}, se), {
          value: j.key,
          label: (L = se == null ? void 0 : se.label) != null ? L : String(xe(j.value) ? j.value[c == null ? void 0 : c.value] : j.value),
          closable: !(se != null && se.disabled),
          tagProps: se == null ? void 0 : se.tagProps
        }));
      }
      return O;
    }), kt = (L) => {
      if (Ge(t.option)) {
        const O = t.option;
        return () => O({
          data: L.raw
        });
      }
      return Ge(L.render) ? L.render : () => L.label;
    }, nt = (L) => {
      if (Fa(L)) {
        let O;
        return f(In, {
          key: L.key,
          label: L.label
        }, Yd(O = L.options.map((j) => nt(j))) ? O : {
          default: () => [O]
        });
      }
      return Un(L, {
        inputValue: Ce.value,
        filterOption: s == null ? void 0 : s.value
      }) ? f(Bn, {
        ref: (O) => {
          O != null && O.$el && (A.value[L.key] = O.$el);
        },
        key: L.key,
        value: L.value,
        label: L.label,
        disabled: L.disabled,
        internal: !0
      }, {
        default: kt(L)
      }) : null;
    }, Nt = () => f($c, {
      ref: M,
      loading: e.loading,
      empty: Xe.value.length === 0,
      virtualList: !!e.virtualListProps,
      scrollbar: e.scrollbar,
      showHeaderOnEmpty: e.showHeaderOnEmpty,
      showFooterOnEmpty: e.showFooterOnEmpty,
      onScroll: Z,
      onReachBottom: ge
    }, {
      default: () => {
        var L, O;
        return [...(O = (L = t.default) == null ? void 0 : L.call(t)) != null ? O : [], ...we.value.map(nt)];
      },
      "virtual-list": () => f(Bo, re(e.virtualListProps, {
        ref: x,
        data: we.value
      }), {
        item: ({
          item: L
        }) => nt(L)
      }),
      empty: t.empty,
      header: t.header,
      footer: t.footer
    }), nn = ({
      data: L
    }) => {
      var O, j, se, Ue;
      if ((t.label || Ge(e.formatLabel)) && L) {
        const qe = Ee.get(L.value);
        if (qe != null && qe.raw)
          return (se = (O = t.label) == null ? void 0 : O.call(t, {
            data: qe.raw
          })) != null ? se : (j = e.formatLabel) == null ? void 0 : j.call(e, qe.raw);
      }
      return (Ue = L == null ? void 0 : L.label) != null ? Ue : "";
    };
    return () => f(mn, re({
      trigger: "click",
      position: "bl",
      popupOffset: 4,
      animationName: "slide-dynamic-origin",
      hideEmpty: !0,
      preventFocus: !0,
      autoFitPopupWidth: !0,
      autoFitTransformOrigin: !0,
      disabled: C.value,
      popupVisible: W.value,
      unmountOnClose: e.unmountOnClose,
      clickToClose: !(e.allowSearch || e.allowCreate),
      popupContainer: e.popupContainer,
      onPopupVisibleChange: G
    }, e.triggerProps), {
      default: () => {
        var L, O;
        return [(O = (L = t.trigger) == null ? void 0 : L.call(t)) != null ? O : f(Sr, re({
          class: E,
          modelValue: tn.value,
          inputValue: Ce.value,
          multiple: e.multiple,
          disabled: C.value,
          error: S.value,
          loading: e.loading,
          allowClear: e.allowClear,
          allowCreate: e.allowCreate,
          allowSearch: !!e.allowSearch,
          opened: W.value,
          maxTagCount: e.maxTagCount,
          placeholder: e.placeholder,
          bordered: e.bordered,
          size: w.value,
          tagNowrap: e.tagNowrap,
          onInputValueChange: Ze,
          onRemove: Y,
          onClear: T,
          onKeydown: Ct
        }, l), {
          label: nn,
          prefix: t.prefix,
          "arrow-icon": t["arrow-icon"],
          "loading-icon": t["loading-icon"],
          "search-icon": t["search-icon"]
        })];
      },
      content: Nt
    });
  }
});
const Ha = Object.assign(Il, {
  Option: Bn,
  OptGroup: In,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Il.name, Il), e.component(n + Bn.name, Bn), e.component(n + In.name, In);
  }
}), Jd = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-left`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Qd = ["stroke-width", "stroke-linecap", "stroke-linejoin"], ef = /* @__PURE__ */ H("path", {
  d: "M32 8.4 16.444 23.956 32 39.513"
}, null, -1), tf = [ef];
function nf(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, tf, 14, Qd);
}
var zl = /* @__PURE__ */ ae(Jd, [["render", nf]]);
const Wa = Object.assign(zl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + zl.name, zl);
  }
}), lf = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-up`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), of = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rf = /* @__PURE__ */ H("path", {
  d: "M39.6 30.557 24.043 15 8.487 30.557"
}, null, -1), af = [rf];
function sf(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, af, 14, of);
}
var Nl = /* @__PURE__ */ ae(lf, [["render", sf]]);
const qa = Object.assign(Nl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Nl.name, Nl);
  }
}), uf = (e) => {
  const t = {}, n = _([]), l = () => {
    if (t.value) {
      const o = Sa(t.value, e);
      (o.length !== n.value.length || o.toString() !== n.value.toString()) && (n.value = o);
    }
  };
  return Ne(() => l()), it(() => l()), {
    children: t,
    components: n
  };
}, Ga = Symbol("collapseCtx"), cf = z({
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
      showExpandIcon: a
    } = $e(e), r = K("collapse"), i = _(e.defaultActiveKey), s = d(() => {
      var v;
      const p = (v = e.activeKey) != null ? v : i.value;
      return Ke(p) ? p : [p];
    });
    rt(Ga, Se({
      activeKeys: s,
      slots: n,
      showExpandIcon: a,
      expandIconPosition: l,
      destroyOnHide: o,
      handleClick: (v, p) => {
        let m = [];
        if (e.accordion)
          s.value.includes(v) || (m = [v]), i.value = m;
        else {
          m = [...s.value];
          const h = m.indexOf(v);
          h > -1 ? m.splice(h, 1) : e.accordion ? m = [v] : m.push(v), i.value = m;
        }
        t("update:activeKey", m), t("change", m, p);
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
function df(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.cls)
  }, [ee(e.$slots, "default")], 2);
}
var Tl = /* @__PURE__ */ ae(cf, [["render", df]]);
const ff = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-caret-right`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), vf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], pf = /* @__PURE__ */ H("path", {
  d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), mf = [pf];
function hf(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, mf, 14, vf);
}
var Ll = /* @__PURE__ */ ae(ff, [["render", hf]]);
const yf = Object.assign(Ll, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ll.name, Ll);
  }
}), gf = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-caret-left`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), bf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], _f = /* @__PURE__ */ H("path", {
  d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), $f = [_f];
function Cf(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, $f, 14, bf);
}
var Vl = /* @__PURE__ */ ae(gf, [["render", Cf]]);
const kf = Object.assign(Vl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Vl.name, Vl);
  }
});
var Pt = z({
  name: "CollapseItem",
  components: {
    IconHover: Je,
    IconCaretRight: yf,
    IconCaretLeft: kf
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
    const l = bt(), o = K("collapse-item"), a = Fe(Ga, {}), r = l && pe(l == null ? void 0 : l.vnode.key) ? l.vnode.key : String((n = l == null ? void 0 : l.vnode.key) != null ? n : ""), i = d(() => {
      var C;
      return (C = a.activeKeys) == null ? void 0 : C.includes(r);
    }), s = d(() => a.destroyOnHide || e.destroyOnHide), c = d(() => {
      var C;
      return (C = a == null ? void 0 : a.showExpandIcon) != null ? C : e.showExpandIcon;
    }), u = _(s.value ? i.value : !0), v = d(() => {
      var C;
      return (C = a == null ? void 0 : a.expandIconPosition) != null ? C : "left";
    }), p = (C) => {
      var S;
      e.disabled || (S = a.handleClick) == null || S.call(a, r, C);
    };
    ye(i, (C) => {
      C && !u.value && (u.value = !0);
    });
    const m = {
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
    }, h = d(() => [o, {
      [`${o}-active`]: i.value
    }]), y = d(() => [`${o}-header`, `${o}-header-${a == null ? void 0 : a.expandIconPosition}`, {
      [`${o}-header-disabled`]: e.disabled
    }]), $ = d(() => [{
      [`${o}-icon-right`]: (a == null ? void 0 : a.expandIconPosition) === "right"
    }]), I = d(() => [`${o}-content`, {
      [`${o}-content-expend`]: i.value
    }]), E = () => v.value === "right" ? f(be("icon-caret-left"), {
      class: `${o}-expand-icon`
    }, null) : f(be("icon-caret-right"), {
      class: `${o}-expand-icon`
    }, null), w = () => c.value && f(be("icon-hover"), {
      prefix: o,
      class: $.value,
      disabled: e.disabled
    }, {
      default: () => {
        var C, S, g, b;
        return [(b = (g = (S = t["expand-icon"]) != null ? S : (C = a == null ? void 0 : a.slots) == null ? void 0 : C["expand-icon"]) == null ? void 0 : g({
          active: i.value,
          disabled: e.disabled,
          position: v.value
        })) != null ? b : E()];
      }
    });
    return () => {
      var C, S, g;
      return f("div", {
        class: h.value
      }, [f("div", {
        role: "button",
        "aria-disabled": e.disabled,
        "aria-expanded": i.value,
        tabindex: "0",
        class: y.value,
        onClick: p
      }, [w(), f("div", {
        class: `${o}-header-title`
      }, [(S = (C = t.header) == null ? void 0 : C.call(t)) != null ? S : e.header]), t.extra && f("div", {
        class: `${o}-header-extra`
      }, [(g = t.extra) == null ? void 0 : g.call(t)])]), f(Kn, re({
        name: "collapse-slider"
      }, m), {
        default: () => {
          var b;
          return [Kt(f("div", {
            role: "region",
            class: I.value
          }, [u.value && f("div", {
            ref: "contentBoxRef",
            class: `${o}-content-box`
          }, [(b = t.default) == null ? void 0 : b.call(t)])]), [[Ht, i.value]])];
        }
      })]);
    };
  }
});
const wf = Object.assign(Tl, {
  Item: Pt,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Tl.name, Tl), e.component(n + Pt.name, Pt);
  }
});
function zo(e, t) {
  return t === void 0 && (t = 15), +parseFloat(Number(e).toPrecision(t));
}
function at(e) {
  var t = e.toString().split(/[eE]/), n = (t[0].split(".")[1] || "").length - +(t[1] || 0);
  return n > 0 ? n : 0;
}
function yn(e) {
  if (e.toString().indexOf("e") === -1)
    return Number(e.toString().replace(".", ""));
  var t = at(e);
  return t > 0 ? zo(Number(e) * Math.pow(10, t)) : Number(e);
}
function fo(e) {
  Za && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) && console.warn(e + " is beyond boundary when transfer to integer, the results may not be accurate");
}
function Yn(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var l = t[0], o = t.slice(1);
    return o.reduce(function(a, r) {
      return e(a, r);
    }, l);
  };
}
var gt = Yn(function(e, t) {
  var n = yn(e), l = yn(t), o = at(e) + at(t), a = n * l;
  return fo(a), a / Math.pow(10, o);
}), Sf = Yn(function(e, t) {
  var n = Math.pow(10, Math.max(at(e), at(t)));
  return (gt(e, n) + gt(t, n)) / n;
}), Of = Yn(function(e, t) {
  var n = Math.pow(10, Math.max(at(e), at(t)));
  return (gt(e, n) - gt(t, n)) / n;
}), Ua = Yn(function(e, t) {
  var n = yn(e), l = yn(t);
  return fo(n), fo(l), gt(n / l, zo(Math.pow(10, at(t) - at(e))));
});
function Ef(e, t) {
  var n = Math.pow(10, t), l = Ua(Math.round(Math.abs(gt(e, n))), n);
  return e < 0 && l !== 0 && (l = gt(l, -1)), l;
}
var Za = !0;
function xf(e) {
  e === void 0 && (e = !0), Za = e;
}
var vo = {
  strip: zo,
  plus: Sf,
  minus: Of,
  times: gt,
  divide: Ua,
  round: Ef,
  digitLength: at,
  float2Fixed: yn,
  enableBoundaryChecking: xf
};
const Pf = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-plus`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Bf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], If = /* @__PURE__ */ H("path", {
  d: "M5 24h38M24 5v38"
}, null, -1), zf = [If];
function Nf(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zf, 14, Bf);
}
var jl = /* @__PURE__ */ ae(Pf, [["render", Nf]]);
const Ya = Object.assign(jl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + jl.name, jl);
  }
}), Tf = z({
  name: "IconMinus",
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
    const n = K("icon"), l = d(() => [n, `${n}-minus`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Lf = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Vf = /* @__PURE__ */ H("path", {
  d: "M5 24h38"
}, null, -1), jf = [Vf];
function Df(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, jf, 14, Lf);
}
var Dl = /* @__PURE__ */ ae(Tf, [["render", Df]]);
const Af = Object.assign(Dl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Dl.name, Dl);
  }
});
var Mf = Object.defineProperty, Pr = Object.getOwnPropertySymbols, Ff = Object.prototype.hasOwnProperty, Rf = Object.prototype.propertyIsEnumerable, Br = (e, t, n) => t in e ? Mf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Kf = (e, t) => {
  for (var n in t || (t = {}))
    Ff.call(t, n) && Br(e, n, t[n]);
  if (Pr)
    for (var n of Pr(t))
      Rf.call(t, n) && Br(e, n, t[n]);
  return e;
};
const Hf = 800, Wf = 150;
vo.enableBoundaryChecking(!1);
var Al = z({
  name: "InputNumber",
  props: {
    modelValue: Number,
    defaultValue: Number,
    mode: {
      type: String,
      default: "embed"
    },
    precision: Number,
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    min: {
      type: Number,
      default: -1 / 0
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: String,
    hideButton: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: !1
    },
    modelEvent: {
      type: String,
      default: "change"
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    inputAttrs: {
      type: Object
    }
  },
  emits: {
    "update:modelValue": (e) => !0,
    change: (e, t) => !0,
    focus: (e) => !0,
    blur: (e) => !0,
    clear: (e) => !0,
    input: (e, t, n) => !0,
    keydown: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    var l;
    const {
      size: o,
      disabled: a
    } = $e(e), r = K("input-number"), i = _(), {
      mergedSize: s,
      mergedDisabled: c,
      eventHandlers: u
    } = vt({
      size: o,
      disabled: a
    }), {
      mergedSize: v
    } = st(s), p = d(() => {
      if (pe(e.precision)) {
        const B = `${e.step}`.split(".")[1], te = B && B.length || 0;
        return Math.max(te, e.precision);
      }
    }), m = (B) => {
      var te, Q;
      if (!pe(B))
        return "";
      const de = p.value ? B.toFixed(p.value) : String(B);
      return (Q = (te = e.formatter) == null ? void 0 : te.call(e, de)) != null ? Q : de;
    }, h = _(m((l = e.modelValue) != null ? l : e.defaultValue)), y = d(() => {
      var B, te;
      if (!h.value)
        return;
      const Q = Number((te = (B = e.parser) == null ? void 0 : B.call(e, h.value)) != null ? te : h.value);
      return Number.isNaN(Q) ? void 0 : Q;
    }), $ = _(pe(y.value) && y.value <= e.min), I = _(pe(y.value) && y.value >= e.max);
    let E = 0;
    const w = () => {
      E && (window.clearTimeout(E), E = 0);
    }, C = (B) => {
      if (!Me(B))
        return pe(e.min) && B < e.min && (B = e.min), pe(e.max) && B > e.max && (B = e.max), pe(p.value) ? vo.round(B, p.value) : B;
    }, S = (B) => {
      let te = !1, Q = !1;
      pe(B) && (B <= e.min && (te = !0), B >= e.max && (Q = !0)), I.value !== Q && (I.value = Q), $.value !== te && ($.value = te);
    }, g = () => {
      const B = C(y.value), te = m(B);
      (B !== y.value || h.value !== te) && (h.value = te), t("update:modelValue", B);
    };
    ye(() => [e.max, e.min], () => {
      g(), S(y.value);
    });
    const b = (B, te) => {
      if (c.value || B === "plus" && I.value || B === "minus" && $.value)
        return;
      let Q;
      pe(y.value) ? Q = C(vo[B](y.value, e.step)) : Q = e.min === -1 / 0 ? 0 : e.min, h.value = m(Q), S(Q), t("update:modelValue", Q), t("change", Q, te);
    }, N = (B, te, Q = !1) => {
      var de;
      B.preventDefault(), (de = i.value) == null || de.focus(), b(te, B), Q && (E = window.setTimeout(() => B.target.dispatchEvent(B), E ? Wf : Hf));
    }, M = (B, te) => {
      var Q, de, ue, Ce;
      B = B.trim().replace(/。/g, "."), B = (de = (Q = e.parser) == null ? void 0 : Q.call(e, B)) != null ? de : B, (pe(Number(B)) || /^(\.|-)$/.test(B)) && (h.value = (Ce = (ue = e.formatter) == null ? void 0 : ue.call(e, B)) != null ? Ce : B, S(y.value), t("input", y.value, h.value, te), e.modelEvent === "input" && (t("update:modelValue", y.value), t("change", y.value, te)));
    }, A = (B) => {
      t("focus", B);
    }, x = (B, te) => {
      te instanceof MouseEvent && !B || (g(), t("change", y.value, te));
    }, W = (B) => {
      t("blur", B);
    }, G = (B) => {
      var te, Q;
      h.value = "", t("update:modelValue", void 0), t("change", void 0, B), (Q = (te = u.value) == null ? void 0 : te.onChange) == null || Q.call(te, B), t("clear", B);
    }, R = Ra(/* @__PURE__ */ new Map([[Dt.ARROW_UP, (B) => {
      B.preventDefault(), !e.readOnly && b("plus", B);
    }], [Dt.ARROW_DOWN, (B) => {
      B.preventDefault(), !e.readOnly && b("minus", B);
    }]])), U = (B) => {
      t("keydown", B), B.defaultPrevented || R(B);
    };
    ye(() => e.modelValue, (B) => {
      B !== y.value && (h.value = m(B), S(B));
    });
    const X = () => {
      var B, te, Q;
      return e.readOnly ? null : f(Pe, null, [n.suffix && f("div", {
        class: `${r}-suffix`
      }, [(B = n.suffix) == null ? void 0 : B.call(n)]), f("div", {
        class: `${r}-step`
      }, [f("button", {
        class: [`${r}-step-button`, {
          [`${r}-step-button-disabled`]: c.value || I.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: c.value || I.value,
        onMousedown: (de) => N(de, "plus", !0),
        onMouseup: w,
        onMouseleave: w
      }, [n.plus ? (te = n.plus) == null ? void 0 : te.call(n) : f(qa, null, null)]), f("button", {
        class: [`${r}-step-button`, {
          [`${r}-step-button-disabled`]: c.value || $.value
        }],
        type: "button",
        tabindex: "-1",
        disabled: c.value || $.value,
        onMousedown: (de) => N(de, "minus", !0),
        onMouseup: w,
        onMouseleave: w
      }, [n.minus ? (Q = n.minus) == null ? void 0 : Q.call(n) : f(Io, null, null)])])]);
    }, P = d(() => [r, `${r}-mode-${e.mode}`, `${r}-size-${v.value}`, {
      [`${r}-readonly`]: e.readOnly
    }]), F = () => f(Zt, {
      size: v.value,
      tabindex: "-1",
      class: `${r}-step-button`,
      disabled: c.value || $.value,
      onMousedown: (B) => N(B, "minus", !0),
      onMouseup: w,
      onMouseleave: w
    }, {
      icon: () => f(Af, null, null)
    }), me = () => f(Zt, {
      size: v.value,
      tabindex: "-1",
      class: `${r}-step-button`,
      disabled: c.value || I.value,
      onMousedown: (B) => N(B, "plus", !0),
      onMouseup: w,
      onMouseleave: w
    }, {
      icon: () => f(Ya, null, null)
    });
    return {
      inputRef: i,
      render: () => {
        const B = e.mode === "embed" ? {
          prepend: n.prepend,
          prefix: n.prefix,
          suffix: e.hideButton ? n.suffix : X,
          append: n.append
        } : {
          prepend: e.hideButton ? n.prepend : F,
          prefix: n.prefix,
          suffix: n.suffix,
          append: e.hideButton ? n.append : me
        };
        return f(Eo, {
          key: `__arco__${e.mode}`,
          ref: i,
          class: P.value,
          type: "text",
          allowClear: e.allowClear,
          size: v.value,
          modelValue: h.value,
          placeholder: e.placeholder,
          disabled: c.value,
          readonly: e.readOnly,
          error: e.error,
          inputAttrs: Kf({
            role: "spinbutton",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": h.value
          }, e.inputAttrs),
          onInput: M,
          onFocus: A,
          onBlur: W,
          onClear: G,
          onChange: x,
          onKeydown: U
        }, B);
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
const qf = Object.assign(Al, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Al.name, Al);
  }
});
var Xa = z({
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
}), Gf = Object.defineProperty, Uf = Object.defineProperties, Zf = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, Yf = Object.prototype.hasOwnProperty, Xf = Object.prototype.propertyIsEnumerable, zr = (e, t, n) => t in e ? Gf(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Jf = (e, t) => {
  for (var n in t || (t = {}))
    Yf.call(t, n) && zr(e, n, t[n]);
  if (Ir)
    for (var n of Ir(t))
      Xf.call(t, n) && zr(e, n, t[n]);
  return e;
}, Qf = (e, t) => Uf(e, Zf(t));
const Mn = ["xxl", "xl", "lg", "md", "sm", "xs"], On = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let St = [], ev = -1, En = {};
const Nr = {
  matchHandlers: {},
  dispatch(e, t) {
    return En = e, St.length < 1 ? !1 : (St.forEach((n) => {
      n.func(En, t);
    }), !0);
  },
  subscribe(e) {
    St.length === 0 && this.register();
    const t = (++ev).toString();
    return St.push({
      token: t,
      func: e
    }), e(En, null), t;
  },
  unsubscribe(e) {
    St = St.filter((t) => t.token !== e), St.length === 0 && this.unregister();
  },
  unregister() {
    Object.keys(On).forEach((e) => {
      const t = On[e];
      if (!t)
        return;
      const n = this.matchHandlers[t];
      n && n.mql && n.listener && (n.mql.removeEventListener ? n.mql.removeEventListener("change", n.listener) : n.mql.removeListener(n.listener));
    });
  },
  register() {
    Object.keys(On).forEach((e) => {
      const t = On[e];
      if (!t)
        return;
      const n = ({
        matches: o
      }) => {
        this.dispatch(Qf(Jf({}, En), {
          [e]: o
        }), e);
      }, l = window.matchMedia(t);
      l.addEventListener ? l.addEventListener("change", n) : l.addListener(n), this.matchHandlers[t] = {
        mql: l,
        listener: n
      }, n(l);
    });
  }
};
function Tr(e) {
  return xe(e);
}
function mt(e, t, n = !1) {
  const l = _({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), o = d(() => {
    let r = t;
    if (Tr(e.value))
      for (let i = 0; i < Mn.length; i++) {
        const s = Mn[i];
        if ((l.value[s] || s === "xs" && n) && e.value[s] !== void 0) {
          r = e.value[s];
          break;
        }
      }
    else
      r = e.value;
    return r;
  });
  let a = "";
  return Ne(() => {
    a = Nr.subscribe((r) => {
      Tr(e.value) && (l.value = r);
    });
  }), vn(() => {
    a && Nr.unsubscribe(a);
  }), o;
}
const Ja = Symbol("RowContextInjectionKey"), Qa = Symbol("GridContextInjectionKey"), ei = Symbol("GridDataCollectorInjectionKey"), tv = z({
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
      justify: l,
      div: o,
      wrap: a
    } = $e(e), r = K("row"), i = d(() => ({
      [`${r}`]: !o.value,
      [`${r}-nowrap`]: !a.value,
      [`${r}-align-${n.value}`]: n.value,
      [`${r}-justify-${l.value}`]: l.value
    })), s = d(() => Array.isArray(t.value) ? t.value[0] : t.value), c = d(() => Array.isArray(t.value) ? t.value[1] : 0), u = mt(s, 0), v = mt(c, 0), p = d(() => {
      const h = {};
      if ((u.value || v.value) && !o.value) {
        const y = -u.value / 2, $ = -v.value / 2;
        y && (h.marginLeft = `${y}px`, h.marginRight = `${y}px`), $ && (h.marginTop = `${$}px`, h.marginBottom = `${$}px`);
      }
      return h;
    }), m = d(() => [u.value, v.value]);
    return rt(Ja, Se({
      gutter: m,
      div: o
    })), {
      classNames: i,
      styles: p
    };
  }
});
function nv(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.classNames),
    style: ve(e.styles)
  }, [ee(e.$slots, "default")], 6);
}
var zn = /* @__PURE__ */ ae(tv, [["render", nv]]);
function lv(e) {
  return d(() => {
    const {
      val: n,
      key: l,
      xs: o,
      sm: a,
      md: r,
      lg: i,
      xl: s,
      xxl: c
    } = e.value;
    if (!o && !a && !r && !i && !s && !c)
      return n;
    const u = {};
    return Mn.forEach((v) => {
      const p = e.value[v];
      pe(p) ? u[v] = p : xe(p) && pe(p[l]) && (u[v] = p[l]);
    }), u;
  });
}
var ov = Object.defineProperty, Lr = Object.getOwnPropertySymbols, rv = Object.prototype.hasOwnProperty, av = Object.prototype.propertyIsEnumerable, Vr = (e, t, n) => t in e ? ov(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Ml = (e, t) => {
  for (var n in t || (t = {}))
    rv.call(t, n) && Vr(e, n, t[n]);
  if (Lr)
    for (var n of Lr(t))
      av.call(t, n) && Vr(e, n, t[n]);
  return e;
};
function iv(e) {
  if (ft(e) && (["initial", "auto", "none"].includes(e) || /^\d+$/.test(e)) || pe(e))
    return e;
  if (ft(e) && /^\d+(px|em|rem|%)$/.test(e))
    return `0 0 ${e}`;
}
const sv = z({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(e) {
    const t = K("col"), n = Fe(Ja, {}), l = d(() => iv(e.flex)), o = d(() => {
      const {
        div: v
      } = n, {
        span: p,
        offset: m,
        order: h,
        xs: y,
        sm: $,
        md: I,
        lg: E,
        xl: w,
        xxl: C
      } = e, S = {
        [`${t}`]: !v,
        [`${t}-order-${h}`]: h,
        [`${t}-${p}`]: !v && !y && !$ && !I && !E && !w && !C,
        [`${t}-offset-${m}`]: m && m > 0
      }, g = {
        xs: y,
        sm: $,
        md: I,
        lg: E,
        xl: w,
        xxl: C
      };
      return Object.keys(g).forEach((b) => {
        const N = g[b];
        N && pe(N) ? S[`${t}-${b}-${N}`] = !0 : N && xe(N) && (S[`${t}-${b}-${N.span}`] = N.span, S[`${t}-${b}-offset-${N.offset}`] = N.offset, S[`${t}-${b}-order-${N.order}`] = N.order);
      }), S;
    }), a = d(() => l.value ? t : o.value), r = d(() => {
      const {
        gutter: v,
        div: p
      } = n, m = {};
      if (Array.isArray(v) && !p) {
        const h = v[0] && v[0] / 2 || 0, y = v[1] && v[1] / 2 || 0;
        h && (m.paddingLeft = `${h}px`, m.paddingRight = `${h}px`), y && (m.paddingTop = `${y}px`, m.paddingBottom = `${y}px`);
      }
      return m;
    }), i = d(() => l.value ? {
      flex: l.value
    } : {}), s = d(() => Gn(e, Mn)), c = lv(d(() => Ml({
      val: e.span,
      key: "span"
    }, s.value))), u = mt(c, 24, !0);
    return {
      visible: d(() => !!u.value),
      classNames: a,
      styles: d(() => Ml(Ml({}, r.value), i.value))
    };
  }
});
function uv(e, t, n, l, o, a) {
  return e.visible ? (k(), D("div", {
    key: 0,
    class: V(e.classNames),
    style: ve(e.styles)
  }, [ee(e.$slots, "default")], 6)) : he("v-if", !0);
}
var Fl = /* @__PURE__ */ ae(sv, [["render", uv]]);
function cv(e, t) {
  var n, l;
  const o = (n = t.span) != null ? n : 1, a = (l = t.offset) != null ? l : 0, r = Math.min(a, e);
  return {
    span: Math.min(r > 0 ? o + a : o, e),
    offset: r,
    suffix: "suffix" in t ? t.suffix !== !1 : !1
  };
}
function dv({
  cols: e,
  collapsed: t,
  collapsedRows: n,
  itemDataList: l
}) {
  let o = !1, a = [];
  function r(i) {
    return Math.ceil(i / e) > n;
  }
  if (t) {
    let i = 0;
    for (let s = 0; s < l.length; s++)
      l[s].suffix && (i += l[s].span, a.push(s));
    if (!r(i)) {
      let s = 0;
      for (; s < l.length; ) {
        const c = l[s];
        if (!c.suffix) {
          if (i += c.span, r(i))
            break;
          a.push(s);
        }
        s++;
      }
    }
    o = l.some((s, c) => !s.suffix && !a.includes(c));
  } else
    a = l.map((i, s) => s);
  return {
    overflow: o,
    displayIndexList: a
  };
}
const fv = z({
  name: "Grid",
  props: {
    cols: {
      type: [Number, Object],
      default: 24
    },
    rowGap: {
      type: [Number, Object],
      default: 0
    },
    colGap: {
      type: [Number, Object],
      default: 0
    },
    collapsed: {
      type: Boolean,
      default: !1
    },
    collapsedRows: {
      type: Number,
      default: 1
    }
  },
  setup(e) {
    const {
      cols: t,
      rowGap: n,
      colGap: l,
      collapsedRows: o,
      collapsed: a
    } = $e(e), r = mt(t, 24), i = mt(l, 0), s = mt(n, 0), c = K("grid"), u = d(() => [c]), v = d(() => [{
      gap: `${s.value}px ${i.value}px`,
      "grid-template-columns": `repeat(${r.value}, minmax(0px, 1fr))`
    }]), p = Se(/* @__PURE__ */ new Map()), m = d(() => {
      const y = [];
      for (const [$, I] of p.entries())
        y[$] = I;
      return y;
    }), h = Se({
      overflow: !1,
      displayIndexList: [],
      cols: r.value,
      colGap: i.value
    });
    return Bt(() => {
      h.cols = r.value, h.colGap = i.value;
    }), Bt(() => {
      const y = dv({
        cols: r.value,
        collapsed: a.value,
        collapsedRows: o.value,
        itemDataList: m.value
      });
      h.overflow = y.overflow, h.displayIndexList = y.displayIndexList;
    }), rt(Qa, h), rt(ei, {
      collectItemData(y, $) {
        p.set(y, $);
      },
      removeItemData(y) {
        p.delete(y);
      }
    }), {
      classNames: u,
      style: v
    };
  }
});
function vv(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.classNames),
    style: ve(e.style)
  }, [ee(e.$slots, "default")], 6);
}
var Rl = /* @__PURE__ */ ae(fv, [["render", vv]]), pv = Object.defineProperty, mv = Object.defineProperties, hv = Object.getOwnPropertyDescriptors, jr = Object.getOwnPropertySymbols, yv = Object.prototype.hasOwnProperty, gv = Object.prototype.propertyIsEnumerable, Dr = (e, t, n) => t in e ? pv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, bv = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && Dr(e, n, t[n]);
  if (jr)
    for (var n of jr(t))
      gv.call(t, n) && Dr(e, n, t[n]);
  return e;
}, _v = (e, t) => mv(e, hv(t));
const $v = z({
  name: "GridItem",
  props: {
    span: {
      type: [Number, Object],
      default: 1
    },
    offset: {
      type: [Number, Object],
      default: 0
    },
    suffix: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = K("grid-item"), n = _(), {
      computedIndex: l
    } = Jc({
      itemRef: n,
      selector: `.${t}`
    }), o = Fe(Qa, {
      overflow: !1,
      displayIndexList: [],
      cols: 24,
      colGap: 0
    }), a = Fe(ei), r = d(() => {
      var $;
      return ($ = o == null ? void 0 : o.displayIndexList) == null ? void 0 : $.includes(l.value);
    }), {
      span: i,
      offset: s
    } = $e(e), c = mt(i, 1), u = mt(s, 0), v = d(() => cv(o.cols, _v(bv({}, e), {
      span: c.value,
      offset: u.value
    }))), p = d(() => [t]), m = d(() => {
      const {
        offset: $,
        span: I
      } = v.value, {
        colGap: E
      } = o;
      return $ > 0 ? {
        "margin-left": `calc((${`(100% - ${E * (I - 1)}px) / ${I}`} * ${$}) + ${E * $}px)`
      } : {};
    }), h = d(() => {
      const {
        suffix: $,
        span: I
      } = v.value, {
        cols: E
      } = o;
      return $ ? `${E - I + 1}` : `span ${I}`;
    }), y = d(() => {
      const {
        span: $
      } = v.value;
      return n.value ? [{
        "grid-column": `${h.value} / span ${$}`
      }, m.value, !r.value || $ === 0 ? {
        display: "none"
      } : {}] : [];
    });
    return Bt(() => {
      l.value !== -1 && (a == null || a.collectItemData(l.value, v.value));
    }), vn(() => {
      l.value !== -1 && (a == null || a.removeItemData(l.value));
    }), {
      classNames: p,
      style: y,
      domRef: n,
      overflow: d(() => o.overflow)
    };
  }
});
function Cv(e, t, n, l, o, a) {
  return k(), D("div", {
    ref: "domRef",
    class: V(e.classNames),
    style: ve(e.style)
  }, [ee(e.$slots, "default", {
    overflow: e.overflow
  })], 6);
}
var Kl = /* @__PURE__ */ ae($v, [["render", Cv]]);
const xn = Object.assign(Rl, {
  Row: zn,
  Col: Fl,
  Item: Kl,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + zn.name, zn), e.component(n + Fl.name, Fl), e.component(n + Rl.name, Rl), e.component(n + Kl.name, Kl);
  }
});
var kv = Object.defineProperty, Ar = Object.getOwnPropertySymbols, wv = Object.prototype.hasOwnProperty, Sv = Object.prototype.propertyIsEnumerable, Mr = (e, t, n) => t in e ? kv(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Fr = (e, t) => {
  for (var n in t || (t = {}))
    wv.call(t, n) && Mr(e, n, t[n]);
  if (Ar)
    for (var n of Ar(t))
      Sv.call(t, n) && Mr(e, n, t[n]);
  return e;
};
const Ov = z({
  name: "Tooltip",
  components: {
    Trigger: mn
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
    const n = K("tooltip"), l = _(e.defaultPopupVisible), o = d(() => {
      var u;
      return (u = e.popupVisible) != null ? u : l.value;
    }), a = (u) => {
      l.value = u, t("update:popupVisible", u), t("popupVisibleChange", u);
    }, r = d(() => [`${n}-content`, e.contentClass, {
      [`${n}-mini`]: e.mini
    }]), i = d(() => {
      if (e.backgroundColor || e.contentStyle)
        return Fr({
          backgroundColor: e.backgroundColor
        }, e.contentStyle);
    }), s = d(() => [`${n}-popup-arrow`, e.arrowClass]), c = d(() => {
      if (e.backgroundColor || e.arrowStyle)
        return Fr({
          backgroundColor: e.backgroundColor
        }, e.arrowStyle);
    });
    return {
      prefixCls: n,
      computedPopupVisible: o,
      contentCls: r,
      computedContentStyle: i,
      arrowCls: s,
      computedArrowStyle: c,
      handlePopupVisibleChange: a
    };
  }
});
function Ev(e, t, n, l, o, a) {
  const r = be("Trigger");
  return k(), ne(r, {
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
    content: le(() => [ee(e.$slots, "content", {}, () => [je(ze(e.content), 1)])]),
    default: le(() => [ee(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var Hl = /* @__PURE__ */ ae(Ov, [["render", Ev]]);
const Xn = Object.assign(Hl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Hl.name, Hl);
  }
}), xv = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-drag-dot-vertical`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Pv = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Bv = /* @__PURE__ */ H("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), Iv = /* @__PURE__ */ H("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"
}, null, -1), zv = [Bv, Iv];
function Nv(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zv, 14, Pv);
}
var Wl = /* @__PURE__ */ ae(xv, [["render", Nv]]);
const Tv = Object.assign(Wl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Wl.name, Wl);
  }
}), Lv = z({
  name: "Pager",
  props: {
    pageNumber: {
      type: Number
    },
    current: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    style: {
      type: Object
    },
    activeStyle: {
      type: Object
    }
  },
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = K("pagination-item"), l = d(() => e.current === e.pageNumber), o = (i) => {
      e.disabled || t("click", e.pageNumber, i);
    }, a = d(() => [n, {
      [`${n}-active`]: l.value
    }]), r = d(() => l.value ? e.activeStyle : e.style);
    return {
      prefixCls: n,
      cls: a,
      mergedStyle: r,
      handleClick: o
    };
  }
});
function Vv(e, t, n, l, o, a) {
  return k(), D("li", {
    class: V(e.cls),
    style: ve(e.mergedStyle),
    onClick: t[0] || (t[0] = (...r) => e.handleClick && e.handleClick(...r))
  }, [ee(e.$slots, "default", {
    page: e.pageNumber
  }, () => [je(ze(e.pageNumber), 1)])], 6);
}
var jv = /* @__PURE__ */ ae(Lv, [["render", Vv]]);
const ti = (e, {
  min: t,
  max: n
}) => e < t ? t : e > n ? n : e, Dv = z({
  name: "StepPager",
  components: {
    IconLeft: Wa,
    IconRight: Ka
  },
  props: {
    pages: {
      type: Number,
      required: !0
    },
    current: {
      type: Number,
      required: !0
    },
    type: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    simple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = K("pagination-item"), l = e.type === "next", o = d(() => e.disabled ? e.disabled : !e.pages || l && e.current === e.pages ? !0 : !l && e.current <= 1), a = d(() => ti(e.current + (l ? 1 : -1), {
      min: 1,
      max: e.pages
    })), r = (s) => {
      o.value || t("click", a.value);
    }, i = d(() => [n, `${n}-${e.type}`, {
      [`${n}-disabled`]: o.value
    }]);
    return {
      prefixCls: n,
      cls: i,
      isNext: l,
      handleClick: r
    };
  }
});
function Av(e, t, n, l, o, a) {
  const r = be("icon-right"), i = be("icon-left");
  return k(), ne(Et(e.simple ? "span" : "li"), {
    class: V(e.cls),
    onClick: e.handleClick
  }, {
    default: le(() => [ee(e.$slots, "default", {
      type: e.isNext ? "next" : "previous"
    }, () => [e.isNext ? (k(), ne(r, {
      key: 0
    })) : (k(), ne(i, {
      key: 1
    }))])]),
    _: 3
  }, 8, ["class", "onClick"]);
}
var Rr = /* @__PURE__ */ ae(Dv, [["render", Av]]);
const Mv = z({
  name: "EllipsisPager",
  components: {
    IconMore: md
  },
  props: {
    current: {
      type: Number,
      required: !0
    },
    step: {
      type: Number,
      default: 5
    },
    pages: {
      type: Number,
      required: !0
    }
  },
  emits: ["click"],
  setup(e, {
    emit: t
  }) {
    const n = K("pagination-item"), l = d(() => ti(e.current + e.step, {
      min: 1,
      max: e.pages
    })), o = (r) => {
      t("click", l.value);
    }, a = d(() => [n, `${n}-ellipsis`]);
    return {
      prefixCls: n,
      cls: a,
      handleClick: o
    };
  }
});
function Fv(e, t, n, l, o, a) {
  const r = be("icon-more");
  return k(), D("li", {
    class: V(e.cls),
    onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
  }, [ee(e.$slots, "default", {}, () => [f(r)])], 2);
}
var Rv = /* @__PURE__ */ ae(Mv, [["render", Fv]]);
const Kv = z({
  name: "PageJumper",
  components: {
    InputNumber: qf
  },
  props: {
    current: {
      type: Number,
      required: !0
    },
    simple: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    pages: {
      type: Number,
      required: !0
    },
    size: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
  emits: ["change"],
  setup(e, {
    emit: t
  }) {
    const n = K("pagination-jumper"), {
      t: l
    } = Jt(), o = _(e.simple ? e.current : void 0), a = (s) => {
      const c = parseInt(s.toString(), 10);
      return Number.isNaN(c) ? void 0 : String(c);
    }, r = (s) => {
      t("change", o.value), We(() => {
        e.simple || (o.value = void 0);
      });
    };
    ye(() => e.current, (s) => {
      e.simple && s !== o.value && (o.value = s);
    });
    const i = d(() => [n, {
      [`${n}-simple`]: e.simple
    }]);
    return {
      prefixCls: n,
      cls: i,
      t: l,
      inputValue: o,
      handleChange: r,
      handleFormatter: a
    };
  }
});
function Hv(e, t, n, l, o, a) {
  const r = be("input-number");
  return k(), D("span", {
    class: V(e.cls)
  }, [e.simple ? he("v-if", !0) : (k(), D("span", {
    key: 0,
    class: V([`${e.prefixCls}-prepend`, `${e.prefixCls}-text-goto`])
  }, [ee(e.$slots, "jumper-prepend", {}, () => [je(ze(e.t("pagination.goto")), 1)])], 2)), f(r, {
    modelValue: e.inputValue,
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.inputValue = i),
    class: V(`${e.prefixCls}-input`),
    min: 1,
    max: e.pages,
    size: e.size,
    disabled: e.disabled,
    "hide-button": "",
    formatter: e.handleFormatter,
    onChange: e.handleChange
  }, null, 8, ["modelValue", "class", "max", "size", "disabled", "formatter", "onChange"]), e.$slots["jumper-append"] ? (k(), D("span", {
    key: 1,
    class: V(`${e.prefixCls}-append`)
  }, [ee(e.$slots, "jumper-append")], 2)) : he("v-if", !0), e.simple ? (k(), D(Pe, {
    key: 2
  }, [H("span", {
    class: V(`${e.prefixCls}-separator`)
  }, "/", 2), H("span", {
    class: V(`${e.prefixCls}-total-page`)
  }, ze(e.pages), 3)], 64)) : he("v-if", !0)], 2);
}
var Kr = /* @__PURE__ */ ae(Kv, [["render", Hv]]);
const Wv = z({
  name: "PageOptions",
  components: {
    ArcoSelect: Ha
  },
  props: {
    sizeOptions: {
      type: Array,
      required: !0
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String
    },
    onChange: {
      type: Function
    },
    selectProps: {
      type: Object
    }
  },
  emits: ["change"],
  setup(e, {
    emit: t
  }) {
    const n = K("pagination-options"), {
      t: l
    } = Jt(), o = d(() => e.sizeOptions.map((r) => ({
      value: r,
      label: `${r} ${l("pagination.countPerPage")}`
    })));
    return {
      prefixCls: n,
      options: o,
      handleChange: (r) => {
        t("change", r);
      }
    };
  }
});
function qv(e, t, n, l, o, a) {
  const r = be("arco-select");
  return k(), D("span", {
    class: V(e.prefixCls)
  }, [f(r, re({
    "model-value": e.pageSize,
    options: e.options,
    size: e.size,
    disabled: e.disabled
  }, e.selectProps, {
    onChange: e.handleChange
  }), null, 16, ["model-value", "options", "size", "disabled", "onChange"])], 2);
}
var Gv = /* @__PURE__ */ ae(Wv, [["render", qv]]), ql = z({
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: !0
    },
    current: Number,
    defaultCurrent: {
      type: Number,
      default: 1
    },
    pageSize: Number,
    defaultPageSize: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    hideOnSinglePage: {
      type: Boolean,
      default: !1
    },
    simple: {
      type: Boolean,
      default: !1
    },
    showTotal: {
      type: Boolean,
      default: !1
    },
    showMore: {
      type: Boolean,
      default: !1
    },
    showJumper: {
      type: Boolean,
      default: !1
    },
    showPageSize: {
      type: Boolean,
      default: !1
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    pageSizeProps: {
      type: Object
    },
    size: {
      type: String
    },
    pageItemStyle: {
      type: Object
    },
    activePageItemStyle: {
      type: Object
    },
    baseSize: {
      type: Number,
      default: 6
    },
    bufferSize: {
      type: Number,
      default: 2
    },
    autoAdjust: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    "update:current": (e) => !0,
    "update:pageSize": (e) => !0,
    change: (e) => !0,
    pageSizeChange: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const l = K("pagination"), {
      t: o
    } = Jt(), {
      disabled: a,
      pageItemStyle: r,
      activePageItemStyle: i,
      size: s
    } = $e(e), {
      mergedSize: c
    } = st(s), u = _(e.defaultCurrent), v = _(e.defaultPageSize), p = d(() => {
      var g;
      return (g = e.current) != null ? g : u.value;
    }), m = d(() => {
      var g;
      return (g = e.pageSize) != null ? g : v.value;
    }), h = d(() => Math.ceil(e.total / m.value)), y = (g) => {
      g !== p.value && pe(g) && !e.disabled && (u.value = g, t("update:current", g), t("change", g));
    }, $ = (g) => {
      v.value = g, t("update:pageSize", g), t("pageSizeChange", g);
    }, I = Se({
      current: p,
      pages: h,
      disabled: a,
      style: r,
      activeStyle: i,
      onClick: y
    }), E = (g, b = {}) => g === "more" ? f(Rv, re(b, I), {
      default: n["page-item-ellipsis"]
    }) : g === "previous" ? f(Rr, re({
      type: "previous"
    }, b, I), {
      default: n["page-item-step"]
    }) : g === "next" ? f(Rr, re({
      type: "next"
    }, b, I), {
      default: n["page-item-step"]
    }) : f(jv, re(b, I), {
      default: n["page-item"]
    }), w = d(() => {
      const g = [];
      if (h.value < e.baseSize + e.bufferSize * 2)
        for (let b = 1; b <= h.value; b++)
          g.push(E("page", {
            key: b,
            pageNumber: b
          }));
      else {
        let b = 1, N = h.value, M = !1, A = !1;
        p.value > 2 + e.bufferSize && (M = !0, b = Math.min(p.value - e.bufferSize, h.value - 2 * e.bufferSize)), p.value < h.value - (e.bufferSize + 1) && (A = !0, N = Math.max(p.value + e.bufferSize, 2 * e.bufferSize + 1)), M && (g.push(E("page", {
          key: 1,
          pageNumber: 1
        })), g.push(E("more", {
          key: "left-ellipsis-pager",
          step: -(e.bufferSize * 2 + 1)
        })));
        for (let x = b; x <= N; x++)
          g.push(E("page", {
            key: x,
            pageNumber: x
          }));
        A && (g.push(E("more", {
          key: "right-ellipsis-pager",
          step: e.bufferSize * 2 + 1
        })), g.push(E("page", {
          key: h.value,
          pageNumber: h.value
        })));
      }
      return g;
    }), C = () => e.simple ? f("span", {
      class: `${l}-simple`
    }, [E("previous", {
      simple: !0
    }), f(Kr, {
      disabled: e.disabled,
      current: p.value,
      size: c.value,
      pages: h.value,
      simple: !0,
      onChange: y
    }, null), E("next", {
      simple: !0
    })]) : f("ul", {
      class: `${l}-list`
    }, [E("previous", {
      simple: !0
    }), w.value, e.showMore && E("more", {
      key: "more",
      step: e.bufferSize * 2 + 1
    }), E("next", {
      simple: !0
    })]);
    ye(m, (g, b) => {
      if (e.autoAdjust && g !== b && p.value > 1) {
        const N = b * (p.value - 1) + 1, M = Math.ceil(N / g);
        M !== p.value && (u.value = M, t("update:current", M), t("change", M));
      }
    }), ye(h, (g, b) => {
      if (e.autoAdjust && g !== b && p.value > 1 && p.value > g) {
        const N = Math.max(g, 1);
        u.value = N, t("update:current", N), t("change", N);
      }
    });
    const S = d(() => [l, `${l}-size-${c.value}`, {
      [`${l}-simple`]: e.simple,
      [`${l}-disabled`]: e.disabled
    }]);
    return () => {
      var g, b;
      return e.hideOnSinglePage && h.value <= 1 ? null : f("div", {
        class: S.value
      }, [e.showTotal && f("span", {
        class: `${l}-total`
      }, [(b = (g = n.total) == null ? void 0 : g.call(n, {
        total: e.total
      })) != null ? b : o("pagination.total", e.total)]), C(), e.showPageSize && f(Gv, {
        disabled: e.disabled,
        sizeOptions: e.pageSizeOptions,
        pageSize: m.value,
        size: c.value,
        onChange: $,
        selectProps: e.pageSizeProps
      }, null), !e.simple && e.showJumper && f(Kr, {
        disabled: e.disabled,
        current: p.value,
        pages: h.value,
        size: c.value,
        onChange: y
      }, {
        "jumper-prepend": n["jumper-prepend"],
        "jumper-append": n["jumper-append"]
      })]);
    };
  }
});
const Uv = Object.assign(ql, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + ql.name, ql);
  }
}), Zv = (e, {
  emit: t
}) => {
  var n, l;
  const o = _(xe(e.paginationProps) && (n = e.paginationProps.defaultCurrent) != null ? n : 1), a = _(xe(e.paginationProps) && (l = e.paginationProps.defaultPageSize) != null ? l : 10), r = d(() => {
    var u;
    return xe(e.paginationProps) && (u = e.paginationProps.current) != null ? u : o.value;
  }), i = d(() => {
    var u;
    return xe(e.paginationProps) && (u = e.paginationProps.pageSize) != null ? u : a.value;
  });
  return {
    current: r,
    pageSize: i,
    handlePageChange: (u) => {
      o.value = u, t("pageChange", u);
    },
    handlePageSizeChange: (u) => {
      a.value = u, t("pageSizeChange", u);
    }
  };
};
function Hr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !xt(e);
}
var Gl = z({
  name: "List",
  props: {
    data: {
      type: Array
    },
    size: {
      type: String,
      default: "medium"
    },
    bordered: {
      type: Boolean,
      default: !0
    },
    split: {
      type: Boolean,
      default: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    hoverable: {
      type: Boolean,
      default: !1
    },
    paginationProps: {
      type: Object
    },
    gridProps: {
      type: Object
    },
    maxHeight: {
      type: [String, Number],
      default: 0
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    virtualListProps: {
      type: Object
    },
    scrollbar: {
      type: [Object, Boolean],
      default: !0
    }
  },
  emits: {
    scroll: () => !0,
    reachBottom: () => !0,
    pageChange: (e) => !0,
    pageSizeChange: (e) => !0
  },
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      scrollbar: l
    } = $e(e), o = K("list"), a = Fe(_t, void 0), {
      componentRef: r,
      elementRef: i
    } = La("containerRef"), s = d(() => e.virtualListProps), {
      displayScrollbar: c,
      scrollbarProps: u
    } = Va(l);
    let v = 0;
    const p = (R) => {
      const {
        scrollTop: U,
        scrollHeight: X,
        offsetHeight: P
      } = R.target, F = Math.floor(X - (U + P));
      U > v && F <= e.bottomOffset && t("reachBottom"), t("scroll"), v = U;
    };
    Ne(() => {
      if (i.value) {
        const {
          scrollTop: R,
          scrollHeight: U,
          offsetHeight: X
        } = i.value;
        U <= R + X && t("reachBottom");
      }
    });
    const {
      current: m,
      pageSize: h,
      handlePageChange: y,
      handlePageSizeChange: $
    } = Zv(e, {
      emit: t
    }), I = (R) => {
      if (!e.paginationProps)
        return R;
      if (e.paginationProps && R.length > h.value) {
        const U = (m.value - 1) * h.value;
        return R.slice(U, U + h.value);
      }
      return R;
    }, E = (R) => {
      let U;
      if (!e.gridProps)
        return null;
      const X = I(R);
      if (e.gridProps.span) {
        const P = [], F = 24 / e.gridProps.span;
        for (let me = 0; me < X.length; me += F) {
          let oe;
          const B = me + F, te = Math.floor(me / F);
          P.push(f(xn.Row, {
            key: te,
            class: `${o}-row`,
            gutter: e.gridProps.gutter
          }, Hr(oe = X.slice(me, B).map((Q, de) => {
            var ue;
            return f(xn.Col, {
              key: `${te}-${de}`,
              class: `${o}-col`,
              span: (ue = e.gridProps) == null ? void 0 : ue.span
            }, {
              default: () => {
                var Ce;
                return [xt(Q) ? Q : (Ce = n.item) == null ? void 0 : Ce.call(n, {
                  item: Q,
                  index: de
                })];
              }
            });
          })) ? oe : {
            default: () => [oe]
          }));
        }
        return P;
      }
      return f(xn.Row, {
        class: `${o}-row`,
        gutter: e.gridProps.gutter
      }, Hr(U = X.map((P, F) => f(xn.Col, re({
        key: F,
        class: `${o}-col`
      }, yt(e.gridProps, ["gutter"])), {
        default: () => {
          var me;
          return [xt(P) ? P : (me = n.item) == null ? void 0 : me.call(n, {
            item: P,
            index: F
          })];
        }
      }))) ? U : {
        default: () => [U]
      });
    }, w = (R) => I(R).map((X, P) => {
      var F;
      return xt(X) ? X : (F = n.item) == null ? void 0 : F.call(n, {
        item: X,
        index: P
      });
    }), C = () => {
      const R = n.default ? cn(n.default()) : e.data;
      return R && R.length > 0 ? e.gridProps ? E(R) : w(R) : W();
    }, S = () => {
      if (!e.paginationProps)
        return null;
      const R = yt(e.paginationProps, ["current", "pageSize", "defaultCurrent", "defaultPageSize"]);
      return f(Uv, re({
        class: `${o}-pagination`
      }, R, {
        current: m.value,
        pageSize: h.value,
        onChange: y,
        onPageSizeChange: $
      }), null);
    }, g = d(() => [o, `${o}-${e.size}`, {
      [`${o}-bordered`]: e.bordered,
      [`${o}-split`]: e.split,
      [`${o}-hover`]: e.hoverable
    }]), b = d(() => {
      if (e.maxHeight)
        return {
          maxHeight: pe(e.maxHeight) ? `${e.maxHeight}px` : e.maxHeight,
          overflowY: "auto"
        };
    }), N = d(() => [`${o}-content`, {
      [`${o}-virtual`]: s.value
    }]), M = _(), A = () => {
      var R;
      const U = I((R = e.data) != null ? R : []);
      return U.length ? f(Bo, re({
        ref: M,
        class: N.value,
        data: U
      }, e.virtualListProps, {
        onScroll: p
      }), {
        item: ({
          item: X,
          index: P
        }) => {
          var F;
          return (F = n.item) == null ? void 0 : F.call(n, {
            item: X,
            index: P
          });
        }
      }) : W();
    }, x = () => n["scroll-loading"] ? f("div", {
      class: [`${o}-item`, `${o}-scroll-loading`]
    }, [n["scroll-loading"]()]) : null, W = () => {
      var R, U, X, P, F;
      return n["scroll-loading"] ? null : (F = (P = (R = n.empty) == null ? void 0 : R.call(n)) != null ? P : (X = a == null ? void 0 : (U = a.slots).empty) == null ? void 0 : X.call(U, {
        component: "list"
      })) != null ? F : f(za, null, null);
    };
    return {
      virtualListRef: M,
      render: () => {
        const R = c.value ? Ta : "div";
        return f("div", {
          class: `${o}-wrapper`
        }, [f(Na, {
          class: `${o}-spin`,
          loading: e.loading
        }, {
          default: () => [f(R, re({
            ref: r,
            class: g.value,
            style: b.value
          }, u.value, {
            onScroll: p
          }), {
            default: () => [f("div", {
              class: `${o}-content-wrapper`
            }, [n.header && f("div", {
              class: `${o}-header`
            }, [n.header()]), s.value && !e.gridProps ? f(Pe, null, [A(), x()]) : f("div", {
              role: "list",
              class: N.value
            }, [C(), x()]), n.footer && f("div", {
              class: `${o}-footer`
            }, [n.footer()])])]
          }), S()]
        })]);
      }
    };
  },
  methods: {
    scrollIntoView(e) {
      this.virtualListRef && this.virtualListRef.scrollTo(e);
    }
  },
  render() {
    return this.render();
  }
}), Nn = z({
  name: "ListItem",
  props: {
    actionLayout: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = K("list-item"), l = () => {
      var o;
      const a = (o = t.actions) == null ? void 0 : o.call(t);
      return !a || !a.length ? null : f("ul", {
        class: `${n}-action`
      }, [a.map((r, i) => f("li", {
        key: `${n}-action-${i}`
      }, [r]))]);
    };
    return () => {
      var o, a;
      return f("div", {
        role: "listitem",
        class: n
      }, [f("div", {
        class: `${n}-main`
      }, [(o = t.meta) == null ? void 0 : o.call(t), f("div", {
        class: `${n}-content`
      }, [(a = t.default) == null ? void 0 : a.call(t)]), e.actionLayout === "vertical" && l()]), e.actionLayout === "horizontal" && l(), t.extra && f("div", {
        class: `${n}-extra`
      }, [t.extra()])]);
    };
  }
});
const Yv = z({
  name: "ListItemMeta",
  props: {
    title: String,
    description: String
  },
  setup(e, {
    slots: t
  }) {
    const n = K("list-item-meta"), l = !!(e.title || e.description || t.title || t.description);
    return {
      prefixCls: n,
      hasContent: l
    };
  }
});
function Xv(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.prefixCls)
  }, [e.$slots.avatar ? (k(), D("div", {
    key: 0,
    class: V(`${e.prefixCls}-avatar`)
  }, [ee(e.$slots, "avatar")], 2)) : he("v-if", !0), e.hasContent ? (k(), D("div", {
    key: 1,
    class: V(`${e.prefixCls}-content`)
  }, [e.$slots.title || e.title ? (k(), D("div", {
    key: 0,
    class: V(`${e.prefixCls}-title`)
  }, [ee(e.$slots, "title", {}, () => [je(ze(e.title), 1)])], 2)) : he("v-if", !0), e.$slots.description || e.description ? (k(), D("div", {
    key: 1,
    class: V(`${e.prefixCls}-description`)
  }, [ee(e.$slots, "description", {}, () => [je(ze(e.description), 1)])], 2)) : he("v-if", !0)], 2)) : he("v-if", !0)], 2);
}
var Ul = /* @__PURE__ */ ae(Yv, [["render", Xv]]);
const Jv = Object.assign(Gl, {
  Item: Object.assign(Nn, {
    Meta: Ul
  }),
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Gl.name, Gl), e.component(n + Nn.name, Nn), e.component(n + Ul.name, Ul);
  }
}), Qv = z({
  name: "Popconfirm",
  components: {
    ArcoButton: Zt,
    Trigger: mn,
    IconInfoCircleFill: $s,
    IconCheckCircleFill: wo,
    IconExclamationCircleFill: xa,
    IconCloseCircleFill: Pa
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
    const n = K("popconfirm"), {
      t: l
    } = Jt(), o = _(e.defaultPopupVisible), a = d(() => {
      var y;
      return (y = e.popupVisible) != null ? y : o.value;
    }), r = _(!1), i = d(() => e.okLoading || r.value);
    let s = 0;
    const c = () => {
      s++, r.value && (r.value = !1), o.value = !1, t("update:popupVisible", !1), t("popupVisibleChange", !1);
    }, u = (y) => {
      y ? (o.value = y, t("update:popupVisible", y), t("popupVisibleChange", y)) : c();
    }, v = async () => {
      const y = s, $ = await new Promise(async (I) => {
        var E;
        if (Ge(e.onBeforeOk)) {
          let w = e.onBeforeOk((C = !0) => I(C));
          if ((Fo(w) || !qt(w)) && (r.value = !0), Fo(w))
            try {
              w = (E = await w) != null ? E : !0;
            } catch {
              w = !1;
            }
          qt(w) && I(w);
        } else
          I(!0);
      });
      y === s && ($ ? (t("ok"), c()) : r.value && (r.value = !1));
    }, p = () => {
      var y;
      let $ = !0;
      Ge(e.onBeforeCancel) && ($ = (y = e.onBeforeCancel()) != null ? y : !1), $ && (t("cancel"), c());
    }, m = d(() => [`${n}-popup-content`, e.contentClass]), h = d(() => [`${n}-popup-arrow`, e.arrowClass]);
    return {
      prefixCls: n,
      contentCls: m,
      arrowCls: h,
      computedPopupVisible: a,
      mergedOkLoading: i,
      handlePopupVisibleChange: u,
      handleOk: v,
      handleCancel: p,
      t: l
    };
  }
});
function ep(e, t, n, l, o, a) {
  const r = be("icon-info-circle-fill"), i = be("icon-check-circle-fill"), s = be("icon-exclamation-circle-fill"), c = be("icon-close-circle-fill"), u = be("arco-button"), v = be("trigger");
  return k(), ne(v, {
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
    content: le(() => [H("div", {
      class: V(`${e.prefixCls}-body`)
    }, [H("span", {
      class: V(`${e.prefixCls}-icon`)
    }, [ee(e.$slots, "icon", {}, () => [e.type === "info" ? (k(), ne(r, {
      key: 0
    })) : e.type === "success" ? (k(), ne(i, {
      key: 1
    })) : e.type === "warning" ? (k(), ne(s, {
      key: 2
    })) : e.type === "error" ? (k(), ne(c, {
      key: 3
    })) : he("v-if", !0)])], 2), H("span", {
      class: V(`${e.prefixCls}-content`)
    }, [ee(e.$slots, "content", {}, () => [je(ze(e.content), 1)])], 2)], 2), H("div", {
      class: V(`${e.prefixCls}-footer`)
    }, [f(u, re({
      size: "mini"
    }, e.cancelButtonProps, {
      onClick: e.handleCancel
    }), {
      default: le(() => [je(ze(e.cancelText || e.t("popconfirm.cancelText")), 1)]),
      _: 1
    }, 16, ["onClick"]), f(u, re({
      type: "primary",
      size: "mini"
    }, e.okButtonProps, {
      loading: e.mergedOkLoading,
      onClick: e.handleOk
    }), {
      default: le(() => [je(ze(e.okText || e.t("popconfirm.okText")), 1)]),
      _: 1
    }, 16, ["loading", "onClick"])], 2)]),
    default: le(() => [ee(e.$slots, "default")]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "popup-container", "content-class", "content-style", "arrow-class", "arrow-style", "onPopupVisibleChange"]);
}
var Zl = /* @__PURE__ */ ae(Qv, [["render", ep]]);
const tp = Object.assign(Zl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Zl.name, Zl);
  }
});
var Yl = z({
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
    const n = K("space"), l = d(() => {
      var i;
      return (i = e.align) != null ? i : e.direction === "horizontal" ? "center" : "";
    }), o = d(() => [n, {
      [`${n}-${e.direction}`]: e.direction,
      [`${n}-align-${l.value}`]: l.value,
      [`${n}-wrap`]: e.wrap,
      [`${n}-fill`]: e.fill
    }]);
    function a(i) {
      if (pe(i))
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
      const s = {}, c = `${a(Ke(e.size) ? e.size[0] : e.size)}px`, u = `${a(Ke(e.size) ? e.size[1] : e.size)}px`;
      return i ? e.wrap ? {
        marginBottom: u
      } : {} : (e.direction === "horizontal" && (s.marginRight = c), (e.direction === "vertical" || e.wrap) && (s.marginBottom = u), s);
    };
    return () => {
      var i;
      const s = cn((i = t.default) == null ? void 0 : i.call(t), !0).filter((c) => c.type !== ki);
      return f("div", {
        class: o.value
      }, [s.map((c, u) => {
        var v, p;
        const m = t.split && u > 0;
        return f(Pe, {
          key: (v = c.key) != null ? v : `item-${u}`
        }, [m && f("div", {
          class: `${n}-item-split`,
          style: r(!1)
        }, [(p = t.split) == null ? void 0 : p.call(t)]), f("div", {
          class: `${n}-item`,
          style: r(u === s.length - 1)
        }, [c])]);
      })]);
    };
  }
});
const np = Object.assign(Yl, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Yl.name, Yl);
  }
}), lp = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-caret-down`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), op = ["stroke-width", "stroke-linecap", "stroke-linejoin"], rp = /* @__PURE__ */ H("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1), ap = [rp];
function ip(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, ap, 14, op);
}
var Xl = /* @__PURE__ */ ae(lp, [["render", ip]]);
const sp = Object.assign(Xl, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Xl.name, Xl);
  }
}), up = ({
  direction: e,
  type: t,
  offset: n
}) => e === "vertical" ? {
  transform: `translateY(${-n}px)`
} : {
  transform: `translateX(${-n}px)`
}, No = Symbol("ArcoTabs"), cp = z({
  name: "TabsTab",
  components: {
    IconHover: Je,
    IconClose: $n
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
    const n = K("tabs-tab"), l = Fe(No, {}), o = (c) => {
      e.tab.disabled || t("click", e.tab.key, c);
    }, a = (c) => {
      c.key === "Enter" && o(c);
    }, r = d(() => Object.assign(l.trigger === "click" ? {
      onClick: o
    } : {
      onMouseover: o
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
function dp(e, t, n, l, o, a) {
  const r = be("icon-close"), i = be("icon-hover");
  return k(), D("div", re({
    tabindex: "0",
    class: e.cls
  }, e.eventHandlers), [H("span", {
    class: V(`${e.prefixCls}-title`)
  }, [ee(e.$slots, "default")], 2), e.editable && e.tab.closable ? (k(), ne(i, {
    key: 0,
    class: V(`${e.prefixCls}-close-btn`),
    onClick: ot(e.handleDelete, ["stop"])
  }, {
    default: le(() => [f(r)]),
    _: 1
  }, 8, ["class", "onClick"])) : he("v-if", !0)], 16);
}
var fp = /* @__PURE__ */ ae(cp, [["render", dp]]);
function vp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !xt(e);
}
var Wr = z({
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
    const n = K("tabs-nav-button"), l = (r) => {
      e.disabled || t("click", e.type, r);
    }, o = () => e.direction === "horizontal" ? e.type === "next" ? f(Ka, null, null) : f(Wa, null, null) : e.type === "next" ? f(Io, null, null) : f(qa, null, null), a = d(() => [n, {
      [`${n}-disabled`]: e.disabled,
      [`${n}-left`]: e.direction === "horizontal" && e.type === "previous",
      [`${n}-right`]: e.direction === "horizontal" && e.type === "next",
      [`${n}-up`]: e.direction === "vertical" && e.type === "previous",
      [`${n}-down`]: e.direction === "vertical" && e.type === "next"
    }]);
    return () => {
      let r;
      return f("div", {
        class: a.value,
        onClick: l
      }, [f(Je, {
        disabled: e.disabled
      }, vp(r = o()) ? r : {
        default: () => [r]
      })]);
    };
  }
});
const pp = z({
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
    } = $e(e), n = K("tabs-nav-ink"), l = _(0), o = _(0), a = d(() => e.direction === "vertical" ? {
      top: `${l.value}px`,
      height: `${o.value}px`
    } : {
      left: `${l.value}px`,
      width: `${o.value}px`
    }), r = () => {
      if (t.value) {
        const s = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, c = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
        (s !== l.value || c !== o.value) && (l.value = s, o.value = c);
      }
    };
    Ne(() => {
      We(() => r());
    }), it(() => {
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
function mp(e, t, n, l, o, a) {
  return k(), D("div", {
    class: V(e.cls),
    style: ve(e.style)
  }, null, 6);
}
var hp = /* @__PURE__ */ ae(pp, [["render", mp]]), yp = z({
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
      activeIndex: a,
      direction: r
    } = $e(e), i = K("tabs-nav"), s = _(), c = _(), u = _({}), v = d(() => {
      if (!Me(o.value))
        return u.value[o.value];
    }), p = _(), m = d(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), h = _(!1), y = _(0), $ = _(0), I = _([]), E = _(0), w = () => {
      var oe, B, te;
      return (te = r.value === "vertical" ? (oe = s.value) == null ? void 0 : oe.offsetHeight : (B = s.value) == null ? void 0 : B.offsetWidth) != null ? te : 0;
    }, C = () => !c.value || !s.value ? 0 : r.value === "vertical" ? c.value.offsetHeight - s.value.offsetHeight : c.value.offsetWidth - s.value.offsetWidth, S = () => l.value.map((oe) => {
      const B = u.value[oe.key];
      return r.value === "vertical" ? B.offsetTop + B.offsetHeight : B.offsetLeft + B.offsetWidth;
    }), g = () => {
      h.value = b(), h.value ? (y.value = w(), $.value = C(), I.value = S(), E.value > $.value && (E.value = $.value)) : E.value = 0;
    }, b = () => s.value && c.value ? e.direction === "vertical" ? c.value.offsetHeight > s.value.offsetHeight : c.value.offsetWidth > s.value.offsetWidth : !1, N = (oe) => {
      var B;
      return ((B = I.value[oe - 1]) != null ? B : 0) >= E.value && I.value[oe] <= E.value + y.value;
    }, M = (oe) => s.value ? oe === "previous" ? E.value - y.value : E.value + y.value : 0, A = (oe) => !s.value || !c.value || oe < 0 ? 0 : oe > $.value ? $.value : oe, x = (oe, B) => {
      t("click", oe, B);
    }, W = (oe, B) => {
      t("delete", oe, B);
    }, G = (oe) => {
      E.value = A(M(oe));
    }, R = () => {
      g(), p.value && p.value.$forceUpdate();
    };
    ye(l, () => {
      We(() => {
        g();
      });
    }), ye(a, (oe, B) => {
      We(() => {
        var te;
        if (h.value)
          if (oe >= B) {
            const Q = oe < I.value.length - 1 ? oe + 1 : oe;
            N(Q) || (E.value = I.value[Q] - y.value);
          } else {
            const Q = oe > 0 ? oe - 1 : oe;
            N(Q) || (E.value = (te = I.value[Q - 1]) != null ? te : 0);
          }
      });
    }), Ne(() => {
      g();
    });
    const U = () => !m.value || !e.showAddButton ? null : f("div", {
      class: `${i}-add-btn`,
      onClick: (oe) => t("add", oe)
    }, [f(Je, null, {
      default: () => [f(Ya, null, null)]
    })]), X = d(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), P = d(() => [`${i}-tab-list`, {
      [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal"
    }]), F = d(() => up({
      direction: e.direction,
      type: e.type,
      offset: E.value
    })), me = d(() => [`${i}-tab`, {
      [`${i}-tab-scroll`]: h.value
    }]);
    return () => {
      var oe;
      return f("div", {
        class: X.value
      }, [h.value && f(Wr, {
        type: "previous",
        direction: e.direction,
        disabled: E.value <= 0,
        onClick: G
      }, null), f(pn, {
        onResize: () => g()
      }, {
        default: () => [f("div", {
          class: me.value,
          ref: s
        }, [f(pn, {
          onResize: R
        }, {
          default: () => [f("div", {
            ref: c,
            class: P.value,
            style: F.value
          }, [e.tabs.map((B, te) => f(fp, {
            key: B.key,
            ref: (Q) => {
              Q != null && Q.$el && (u.value[B.key] = Q.$el);
            },
            active: B.key === o.value,
            tab: B,
            editable: e.editable,
            onClick: x,
            onDelete: W
          }, {
            default: () => {
              var Q, de, ue;
              return [(ue = (de = (Q = B.slots).title) == null ? void 0 : de.call(Q)) != null ? ue : B.title];
            }
          })), e.type === "line" && v.value && f(hp, {
            ref: p,
            activeTabRef: v.value,
            direction: e.direction,
            disabled: !1,
            animation: e.animation
          }, null)])]
        }), !h.value && U()])]
      }), h.value && f(Wr, {
        type: "next",
        direction: e.direction,
        disabled: E.value >= $.value,
        onClick: G
      }, null), f("div", {
        class: `${i}-extra`
      }, [h.value && U(), (oe = n.extra) == null ? void 0 : oe.call(n)])]);
    };
  }
}), Jl = z({
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
      destroyOnHide: a,
      trigger: r
    } = $e(e), i = K("tabs"), {
      mergedSize: s
    } = st(l), c = d(() => e.direction === "vertical" ? "left" : e.position), u = d(() => ["left", "right"].includes(c.value) ? "vertical" : "horizontal"), {
      children: v,
      components: p
    } = uf("TabPane"), m = Se(/* @__PURE__ */ new Map()), h = d(() => {
      const x = [];
      return p.value.forEach((W) => {
        const G = m.get(W);
        G && x.push(G);
      }), x;
    }), y = d(() => h.value.map((x) => x.key)), $ = (x, W) => {
      m.set(x, W);
    }, I = (x) => {
      m.delete(x);
    }, E = _(e.defaultActiveKey), w = d(() => {
      var x;
      const W = (x = e.activeKey) != null ? x : E.value;
      return Me(W) ? y.value[0] : W;
    }), C = d(() => {
      const x = y.value.indexOf(w.value);
      return x === -1 ? 0 : x;
    });
    rt(No, Se({
      lazyLoad: o,
      destroyOnHide: a,
      activeKey: w,
      addItem: $,
      removeItem: I,
      trigger: r
    }));
    const S = (x) => {
      x !== w.value && (E.value = x, t("update:activeKey", x), t("change", x));
    }, g = (x, W) => {
      S(x), t("tabClick", x, W);
    }, b = (x) => {
      t("add", x), e.autoSwitch && We(() => {
        const W = y.value[y.value.length - 1];
        S(W);
      });
    }, N = (x, W) => {
      t("delete", x, W);
    }, M = () => f("div", {
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
    }, [v.value])]), A = d(() => [i, `${i}-${u.value}`, `${i}-${c.value}`, `${i}-type-${e.type}`, `${i}-size-${s.value}`, {
      [`${i}-justify`]: e.justify
    }]);
    return () => {
      var x;
      return v.value = (x = n.default) == null ? void 0 : x.call(n), f("div", {
        class: A.value
      }, [c.value === "bottom" && M(), f(yp, {
        tabs: h.value,
        activeKey: w.value,
        activeIndex: C.value,
        direction: u.value,
        position: c.value,
        editable: e.editable,
        animation: e.animation,
        showAddButton: e.showAddButton,
        headerPadding: e.headerPadding,
        size: s.value,
        type: e.type,
        onClick: g,
        onAdd: b,
        onDelete: N
      }, {
        extra: n.extra
      }), c.value !== "bottom" && M()]);
    };
  }
}), gp = Object.defineProperty, qr = Object.getOwnPropertySymbols, bp = Object.prototype.hasOwnProperty, _p = Object.prototype.propertyIsEnumerable, Gr = (e, t, n) => t in e ? gp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, $p = (e, t) => {
  for (var n in t || (t = {}))
    bp.call(t, n) && Gr(e, n, t[n]);
  if (qr)
    for (var n of qr(t))
      _p.call(t, n) && Gr(e, n, t[n]);
  return e;
};
const Cp = z({
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
      closable: a
    } = $e(e), r = bt(), i = K("tabs"), s = Fe(No, {}), c = _(), u = d(() => r == null ? void 0 : r.vnode.key), v = d(() => u.value === s.activeKey), p = _(s.lazyLoad ? v.value : !0), m = Se({
      key: u,
      title: l,
      disabled: o,
      closable: a,
      slots: t
    });
    return r != null && r.uid && ((n = s.addItem) == null || n.call(s, r.uid, m)), Xt(() => {
      var h;
      r != null && r.uid && ((h = s.removeItem) == null || h.call(s, r.uid));
    }), ye(v, (h) => {
      h ? p.value || (p.value = !0) : (e.destroyOnHide || s.destroyOnHide) && (p.value = !1);
    }), it(() => {
      m.slots = $p({}, t);
    }), {
      prefixCls: i,
      active: v,
      itemRef: c,
      mounted: p
    };
  }
});
function kp(e, t, n, l, o, a) {
  return k(), D("div", {
    ref: "itemRef",
    class: V([`${e.prefixCls}-content-item`, {
      [`${e.prefixCls}-content-item-active`]: e.active
    }])
  }, [e.mounted ? (k(), D("div", {
    key: 0,
    class: V(`${e.prefixCls}-pane`)
  }, [ee(e.$slots, "default")], 2)) : he("v-if", !0)], 2);
}
var Tn = /* @__PURE__ */ ae(Cp, [["render", kp]]);
const wp = Object.assign(Jl, {
  TabPane: Tn,
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + Jl.name, Jl), e.component(n + Tn.name, Tn);
  }
}), ni = Symbol("TreeInjectionKey");
function Sp(e) {
  const t = [];
  function n(l) {
    l && l.forEach((o) => {
      t.push(o), n(o.children);
    });
  }
  return n(e), t;
}
function Op(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.key, n);
  }), t;
}
function Ur(e) {
  return e.selectable && !e.disabled;
}
function Zr(e) {
  return !e.isLeaf && e.children;
}
function Ep(e) {
  return qt(e.isLeaf) ? e.isLeaf : !e.children;
}
function po(e) {
  return Set.prototype.add.bind(e);
}
function mo(e) {
  return Set.prototype.delete.bind(e);
}
function Rt(e) {
  return e.disabled || e.disableCheckbox ? !1 : !!e.checkable;
}
function To(e) {
  var t;
  const n = [];
  return (t = e.children) == null || t.forEach((l) => {
    Rt(l) && n.push(l.key, ...To(l));
  }), n;
}
function li(e) {
  var t;
  const {
    node: n,
    checkedKeySet: l,
    indeterminateKeySet: o
  } = e;
  let a = n.parent;
  for (; a; ) {
    if (Rt(a)) {
      const r = a.key, i = ((t = a.children) == null ? void 0 : t.filter(Rt)) || [];
      let s = 0;
      const c = i.length;
      i.some(({
        key: u
      }) => {
        if (l.has(u))
          s += 1;
        else if (o.has(u))
          return s += 0.5, !0;
        return !1;
      }), s && s !== c ? o.add(r) : o.delete(r), s && s === c ? l.add(r) : l.delete(r);
    }
    a = a.parent;
  }
}
function Yr(e) {
  const {
    node: t,
    checked: n,
    checkedKeys: l,
    indeterminateKeys: o,
    checkStrictly: a = !1
  } = e, {
    key: r
  } = t, i = new Set(l), s = new Set(o);
  if (n ? i.add(r) : i.delete(r), s.delete(r), !a) {
    const c = To(t);
    n ? c.forEach(po(i)) : c.forEach(mo(i)), c.forEach(mo(s)), li({
      node: t,
      checkedKeySet: i,
      indeterminateKeySet: s
    });
  }
  return [[...i], [...s]];
}
function xp(e) {
  const {
    initCheckedKeys: t,
    key2TreeNode: n,
    checkStrictly: l,
    onlyCheckLeaf: o
  } = e, a = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  return l ? t.forEach(po(a)) : t.forEach((s) => {
    var c;
    const u = n.get(s);
    if (!u || r.has(s) || o && ((c = u.children) != null && c.length))
      return;
    const v = To(u);
    v.forEach(po(r)), v.forEach(mo(i)), a.add(s), i.delete(s), li({
      node: u,
      checkedKeySet: a,
      indeterminateKeySet: i
    });
  }), [[...a, ...r], [...i]];
}
function Jn() {
  return Fe(ni) || {};
}
const Pp = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-file`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), Bp = ["stroke-width", "stroke-linecap", "stroke-linejoin"], Ip = /* @__PURE__ */ H("path", {
  d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"
}, null, -1), zp = [Ip];
function Np(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, zp, 14, Bp);
}
var Ql = /* @__PURE__ */ ae(Pp, [["render", Np]]);
const Tp = Object.assign(Ql, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + Ql.name, Ql);
  }
});
var Lp = z({
  name: "TreeNodeSwitcher",
  components: {
    IconLoading: ht,
    RenderFunction: Xa
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
      treeNodeData: a
    } = $e(e), r = Jn(), i = ct(t, "switcher-icon"), s = ct(t, "loading-icon");
    return {
      getSwitcherIcon: () => {
        var c, u, v;
        const p = (u = (c = l == null ? void 0 : l.value) == null ? void 0 : c.switcherIcon) != null ? u : i.value;
        return p ? p(o.value) : (v = r.switcherIcon) == null ? void 0 : v.call(r, a.value, o.value);
      },
      getLoadingIcon: () => {
        var c, u, v;
        const p = (u = (c = l == null ? void 0 : l.value) == null ? void 0 : c.loadingIcon) != null ? u : s.value;
        return p ? p(o.value) : (v = r.loadingIcon) == null ? void 0 : v.call(r, a.value, o.value);
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
      getSwitcherIcon: o,
      getLoadingIcon: a,
      onClick: r,
      nodeStatus: i = {},
      loading: s,
      showLine: c
    } = this, {
      expanded: u,
      isLeaf: v
    } = i;
    if (s)
      return (e = a()) != null ? e : Lt(ht);
    let p = null, m = !1;
    if (v)
      c && (p = (n = o()) != null ? n : Lt(Tp));
    else {
      const y = c ? Lt("span", {
        class: `${l}-${u ? "minus" : "plus"}-icon`
      }) : Lt(sp);
      p = (t = o()) != null ? t : y, m = !c;
    }
    if (!p)
      return null;
    const h = Lt("span", {
      class: `${l}-switcher-icon`,
      onClick: r
    }, p);
    return m ? Lt(Je, {
      class: `${l}-icon-hover`
    }, () => h) : h;
  }
}), Vp = Object.defineProperty, jp = Object.defineProperties, Dp = Object.getOwnPropertyDescriptors, Xr = Object.getOwnPropertySymbols, Ap = Object.prototype.hasOwnProperty, Mp = Object.prototype.propertyIsEnumerable, Jr = (e, t, n) => t in e ? Vp(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, ho = (e, t) => {
  for (var n in t || (t = {}))
    Ap.call(t, n) && Jr(e, n, t[n]);
  if (Xr)
    for (var n of Xr(t))
      Mp.call(t, n) && Jr(e, n, t[n]);
  return e;
}, Qr = (e, t) => jp(e, Dp(t));
const oi = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function Fp(e, t) {
  return !!(Me(e) ? t : e);
}
function Rp(e, t) {
  const n = ho({}, e);
  return t && Object.keys(t).forEach((o) => {
    const a = t[o];
    a !== o && (n[o] = e[a], delete n[a]);
  }), n;
}
function ea({
  subEnable: e,
  superEnable: t,
  isLeaf: n,
  treeNodeData: l,
  level: o
}) {
  return Me(e) ? Ge(t) ? t(l, {
    isLeaf: n,
    level: o
  }) : t ?? !1 : e;
}
function Kp(e) {
  var t, n;
  const {
    treeNodeData: l,
    parentNode: o,
    isTail: a = !0,
    treeProps: r
  } = e, {
    fieldNames: i
  } = r || {}, s = Rp(l, i), c = r.loadMore ? !!s.isLeaf : !((t = s.children) != null && t.length), u = o ? o.level + 1 : 0, v = Qr(ho({}, yt(s, ["children"])), {
    key: (n = s.key) != null ? n : oi(),
    selectable: ea({
      subEnable: s.selectable,
      superEnable: r == null ? void 0 : r.selectable,
      isLeaf: c,
      level: u,
      treeNodeData: l
    }),
    disabled: !!s.disabled,
    disableCheckbox: !!s.disableCheckbox,
    checkable: ea({
      subEnable: s.checkable,
      superEnable: r == null ? void 0 : r.checkable,
      isLeaf: c,
      level: u,
      treeNodeData: l
    }),
    isLeaf: c,
    isTail: a,
    blockNode: !!(r != null && r.blockNode),
    showLine: !!(r != null && r.showLine),
    level: u,
    lineless: o ? [...o.lineless, o.isTail] : [],
    draggable: Fp(s.draggable, r == null ? void 0 : r.draggable)
  });
  return Qr(ho({}, v), {
    treeNodeProps: v,
    treeNodeData: l,
    parent: o,
    parentKey: o == null ? void 0 : o.key,
    pathParentKeys: o ? [...o.pathParentKeys, o.key] : []
  });
}
function Hp(e, t) {
  function n(l, o) {
    if (!l)
      return;
    const {
      fieldNames: a
    } = t, r = [];
    return l.forEach((i, s) => {
      const c = Kp({
        treeNodeData: i,
        treeProps: t,
        parentNode: o,
        isTail: s === l.length - 1
      });
      c.children = n(i[(a == null ? void 0 : a.children) || "children"], c), r.push(c);
    }), r;
  }
  return n(e);
}
function ri() {
  const e = bt(), t = () => {
    var l;
    return (l = e == null ? void 0 : e.vnode.key) != null ? l : oi();
  }, n = _(t());
  return it(() => {
    n.value = t();
  }), n;
}
function Wp(e) {
  const {
    key: t,
    refTitle: n
  } = $e(e), l = Jn(), o = _(!1), a = _(!1), r = _(!1), i = _(0), s = io((c) => {
    if (!n.value)
      return;
    const u = n.value.getBoundingClientRect(), v = window.pageYOffset + u.top, {
      pageY: p
    } = c, m = u.height / 4, h = p - v;
    i.value = h < m ? -1 : h < u.height - m ? 0 : 1, r.value = l.allowDrop ? l.allowDrop(t.value, i.value) : !0;
  });
  return {
    isDragOver: o,
    isDragging: a,
    isAllowDrop: r,
    dropPosition: i,
    setDragStatus(c, u) {
      switch (c) {
        case "dragStart":
          a.value = !0, i.value = 0, l.onDragStart && l.onDragStart(t.value, u);
          break;
        case "dragEnd":
          a.value = !1, o.value = !1, i.value = 0, s.cancel(), l.onDragEnd && l.onDragEnd(t.value, u);
          break;
        case "dragOver":
          o.value = !0, s(u), l.onDragOver && l.onDragOver(t.value, u);
          break;
        case "dragLeave":
          o.value = !1, i.value = 0, s.cancel(), l.onDragLeave && l.onDragLeave(t.value, u);
          break;
        case "drop":
          l.onDrop && l.onDrop(t.value, i.value, u), o.value = !1, i.value = 0, s.cancel();
          break;
      }
    }
  };
}
function qp(e) {
  return Ke(e) ? e : [e];
}
const Gp = z({
  name: "BaseTreeNode",
  components: {
    NodeSwitcher: Lp,
    Checkbox: Da,
    RenderFunction: Xa,
    IconDragDotVertical: Tv
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
    const t = ri(), n = K("tree-node"), l = Jn(), o = d(() => {
      var P;
      return (P = l.key2TreeNode) == null ? void 0 : P.get(t.value);
    }), a = d(() => o.value.treeNodeData), r = d(() => o.value.children), i = d(() => {
      var P;
      const F = (P = l.treeProps) == null ? void 0 : P.actionOnNodeClick;
      return F ? qp(F) : [];
    }), {
      isLeaf: s,
      isTail: c,
      selectable: u,
      disabled: v,
      disableCheckbox: p,
      draggable: m
    } = $e(e), h = d(() => {
      var P;
      return [`${n}`, {
        [`${n}-selected`]: N.value,
        [`${n}-is-leaf`]: s.value,
        [`${n}-is-tail`]: c.value,
        [`${n}-expanded`]: M.value,
        [`${n}-disabled-selectable`]: !u.value && !((P = l.treeProps) != null && P.disableSelectActionOnly),
        [`${n}-disabled`]: v.value
      }];
    }), y = _(), {
      isDragOver: $,
      isDragging: I,
      isAllowDrop: E,
      dropPosition: w,
      setDragStatus: C
    } = Wp(Se({
      key: t,
      refTitle: y
    })), S = d(() => [`${n}-title`, {
      [`${n}-title-draggable`]: m.value,
      [`${n}-title-gap-top`]: $.value && E.value && w.value < 0,
      [`${n}-title-gap-bottom`]: $.value && E.value && w.value > 0,
      [`${n}-title-highlight`]: !I.value && $.value && E.value && w.value === 0,
      [`${n}-title-dragging`]: I.value,
      [`${n}-title-block`]: o.value.blockNode
    }]), g = d(() => {
      var P, F;
      return (F = (P = l.checkedKeys) == null ? void 0 : P.includes) == null ? void 0 : F.call(P, t.value);
    }), b = d(() => {
      var P, F;
      return (F = (P = l.indeterminateKeys) == null ? void 0 : P.includes) == null ? void 0 : F.call(P, t.value);
    }), N = d(() => {
      var P, F;
      return (F = (P = l.selectedKeys) == null ? void 0 : P.includes) == null ? void 0 : F.call(P, t.value);
    }), M = d(() => {
      var P, F;
      return (F = (P = l.expandedKeys) == null ? void 0 : P.includes) == null ? void 0 : F.call(P, t.value);
    }), A = d(() => {
      var P, F;
      return (F = (P = l.loadingKeys) == null ? void 0 : P.includes) == null ? void 0 : F.call(P, t.value);
    }), x = d(() => l.dragIcon), W = d(() => l.nodeIcon);
    function G(P) {
      var F, me;
      s.value || (!((F = r.value) != null && F.length) && Ge(l.onLoadMore) ? l.onLoadMore(t.value) : (me = l == null ? void 0 : l.onExpand) == null || me.call(l, !M.value, t.value, P));
    }
    const R = Se({
      loading: A,
      checked: g,
      selected: N,
      indeterminate: b,
      expanded: M,
      isLeaf: s
    }), U = d(() => l.nodeTitle ? () => {
      var P;
      return (P = l.nodeTitle) == null ? void 0 : P.call(l, a.value, R);
    } : void 0), X = d(() => l.nodeExtra ? () => {
      var P;
      return (P = l.nodeExtra) == null ? void 0 : P.call(l, a.value, R);
    } : void 0);
    return {
      nodekey: t,
      refTitle: y,
      prefixCls: n,
      classNames: h,
      titleClassNames: S,
      indeterminate: b,
      checked: g,
      expanded: M,
      selected: N,
      treeTitle: U,
      treeNodeData: a,
      loading: A,
      treeDragIcon: x,
      treeNodeIcon: W,
      extra: X,
      nodeStatus: R,
      onCheckboxChange(P, F) {
        var me;
        p.value || v.value || (me = l.onCheck) == null || me.call(l, P, t.value, F);
      },
      onTitleClick(P) {
        var F;
        i.value.includes("expand") && G(P), !(!u.value || v.value) && ((F = l.onSelect) == null || F.call(l, t.value, P));
      },
      onSwitcherClick: G,
      onDragStart(P) {
        var F;
        if (m.value) {
          P.stopPropagation(), C("dragStart", P);
          try {
            (F = P.dataTransfer) == null || F.setData("text/plain", "");
          } catch {
          }
        }
      },
      onDragEnd(P) {
        m.value && (P.stopPropagation(), C("dragEnd", P));
      },
      onDragOver(P) {
        m && (P.stopPropagation(), P.preventDefault(), C("dragOver", P));
      },
      onDragLeave(P) {
        m.value && (P.stopPropagation(), C("dragLeave", P));
      },
      onDrop(P) {
        !m.value || !E.value || (P.stopPropagation(), P.preventDefault(), C("drop", P));
      }
    };
  }
}), Up = ["data-level", "data-key"], Zp = ["draggable"];
function Yp(e, t, n, l, o, a) {
  const r = be("NodeSwitcher"), i = be("Checkbox"), s = be("RenderFunction"), c = be("IconDragDotVertical");
  return k(), D("div", {
    class: V(e.classNames),
    "data-level": e.level,
    "data-key": e.nodekey
  }, [he(" 缩进 "), H("span", {
    class: V(`${e.prefixCls}-indent`)
  }, [(k(!0), D(Pe, null, Wt(e.level, (u) => (k(), D("span", {
    key: u,
    class: V([`${e.prefixCls}-indent-block`, {
      [`${e.prefixCls}-indent-block-lineless`]: e.lineless[u - 1]
    }])
  }, null, 2))), 128))], 2), he(" switcher "), H("span", {
    class: V([`${e.prefixCls}-switcher`, {
      [`${e.prefixCls}-switcher-expanded`]: e.expanded
    }])
  }, [f(r, {
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
  }, da({
    _: 2
  }, [e.$slots["switcher-icon"] ? {
    name: "switcher-icon",
    fn: le(() => [he(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), ee(e.$slots, "switcher-icon")])
  } : void 0, e.$slots["loading-icon"] ? {
    name: "loading-icon",
    fn: le(() => [he(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), ee(e.$slots, "loading-icon")])
  } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), he(" checkbox "), e.checkable ? (k(), ne(i, {
    key: 0,
    disabled: e.disableCheckbox || e.disabled,
    "model-value": e.checked,
    indeterminate: e.indeterminate,
    "uninject-group-context": "",
    onChange: e.onCheckboxChange
  }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : he("v-if", !0), he(" 内容 "), H("span", {
    ref: "refTitle",
    class: V(e.titleClassNames),
    draggable: e.draggable,
    onDragstart: t[0] || (t[0] = (...u) => e.onDragStart && e.onDragStart(...u)),
    onDragend: t[1] || (t[1] = (...u) => e.onDragEnd && e.onDragEnd(...u)),
    onDragover: t[2] || (t[2] = (...u) => e.onDragOver && e.onDragOver(...u)),
    onDragleave: t[3] || (t[3] = (...u) => e.onDragLeave && e.onDragLeave(...u)),
    onDrop: t[4] || (t[4] = (...u) => e.onDrop && e.onDrop(...u)),
    onClick: t[5] || (t[5] = (...u) => e.onTitleClick && e.onTitleClick(...u))
  }, [e.$slots.icon || e.icon || e.treeNodeIcon ? (k(), D("span", {
    key: 0,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`])
  }, [he(" 节点图标 "), e.$slots.icon ? ee(e.$slots, "icon", oo(re({
    key: 0
  }, e.nodeStatus))) : e.icon ? (k(), ne(s, re({
    key: 1,
    "render-func": e.icon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? (k(), ne(s, re({
    key: 2,
    "render-func": e.treeNodeIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : he("v-if", !0)], 2)) : he("v-if", !0), H("span", {
    class: V(`${e.prefixCls}-title-text`)
  }, [e.treeTitle ? (k(), ne(s, {
    key: 0,
    "render-func": e.treeTitle
  }, null, 8, ["render-func"])) : (k(), D(Pe, {
    key: 1
  }, [he(" 标题，treeTitle 优先级高于节点的 title "), ee(e.$slots, "title", {
    title: e.title
  }, () => [je(ze(e.title), 1)])], 2112)), e.draggable ? (k(), D("span", {
    key: 2,
    class: V([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`])
  }, [he(" 拖拽图标 "), e.$slots["drag-icon"] ? ee(e.$slots, "drag-icon", oo(re({
    key: 0
  }, e.nodeStatus))) : e.dragIcon ? (k(), ne(s, re({
    key: 1,
    "render-func": e.dragIcon
  }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? (k(), ne(s, re({
    key: 2,
    "render-func": e.treeDragIcon,
    node: e.treeNodeData
  }, e.nodeStatus), null, 16, ["render-func", "node"])) : (k(), ne(c, {
    key: 3
  }))], 2)) : he("v-if", !0)], 2)], 42, Zp), he(" 额外 "), e.extra ? (k(), ne(s, {
    key: 1,
    "render-func": e.extra
  }, null, 8, ["render-func"])) : he("v-if", !0)], 10, Up);
}
var yo = /* @__PURE__ */ ae(Gp, [["render", Yp]]);
const Xp = z({
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
function Jp(e, t, n, l, o, a) {
  return k(), ne(Kn, {
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave
  }, {
    default: le(() => [ee(e.$slots, "default")]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onBeforeLeave"]);
}
var Qp = /* @__PURE__ */ ae(Xp, [["render", Jp]]);
const em = z({
  name: "TransitionNodeList",
  components: {
    ExpandTransition: Qp,
    BaseTreeNode: yo
  },
  props: {
    nodeKey: {
      type: [String, Number],
      required: !0
    }
  },
  setup(e) {
    const n = [`${K("tree")}-node-list`], l = Jn(), {
      nodeKey: o
    } = $e(e), a = d(() => {
      var s, c;
      return (c = (s = l.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : c.call(s, o.value);
    }), r = d(() => {
      var s;
      const c = new Set(l.expandedKeys || []), u = (s = l.flattenTreeData) == null ? void 0 : s.filter((v) => {
        var p, m;
        return (p = v.pathParentKeys) != null && p.includes(o.value) ? !l.filterTreeNode || ((m = l.filterTreeNode) == null ? void 0 : m.call(l, v.treeNodeData)) : !1;
      });
      return u == null ? void 0 : u.filter((v) => {
        var p;
        if (a.value)
          return (p = v.pathParentKeys) == null ? void 0 : p.every((h) => c.has(h));
        const m = v.pathParentKeys.indexOf(o.value);
        return v.pathParentKeys.slice(m + 1).every((h) => c.has(h));
      });
    }), i = d(() => {
      var s, c;
      return ((s = l.currentExpandKeys) == null ? void 0 : s.includes(o.value)) && ((c = r.value) == null ? void 0 : c.length);
    });
    return {
      classNames: n,
      visibleNodeList: r,
      show: i,
      expanded: a,
      onTransitionEnd() {
        var s;
        (s = l.onExpandEnd) == null || s.call(l, o.value);
      }
    };
  }
});
function tm(e, t, n, l, o, a) {
  const r = be("BaseTreeNode"), i = be("ExpandTransition");
  return k(), ne(i, {
    expanded: e.expanded,
    onEnd: e.onTransitionEnd
  }, {
    default: le(() => [e.show ? (k(), D("div", {
      key: 0,
      class: V(e.classNames)
    }, [(k(!0), D(Pe, null, Wt(e.visibleNodeList, (s) => (k(), ne(r, re({
      key: s.key
    }, s.treeNodeProps), null, 16))), 128))], 2)) : he("v-if", !0)]),
    _: 1
  }, 8, ["expanded", "onEnd"]);
}
var nm = /* @__PURE__ */ ae(em, [["render", tm]]), lm = Object.defineProperty, ta = Object.getOwnPropertySymbols, om = Object.prototype.hasOwnProperty, rm = Object.prototype.propertyIsEnumerable, na = (e, t, n) => t in e ? lm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, am = (e, t) => {
  for (var n in t || (t = {}))
    om.call(t, n) && na(e, n, t[n]);
  if (ta)
    for (var n of ta(t))
      rm.call(t, n) && na(e, n, t[n]);
  return e;
}, im = z({
  name: "TreeNode",
  inheritAttrs: !1,
  props: am({}, yo.props),
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const l = ri();
    return () => f(Pe, null, [f(yo, re(e, n, {
      key: l.value
    }), t), f(nm, {
      key: l.value,
      nodeKey: l.value
    }, null)]);
  }
});
function sm(e) {
  const {
    defaultCheckedKeys: t,
    checkedKeys: n,
    key2TreeNode: l,
    checkStrictly: o,
    halfCheckedKeys: a,
    onlyCheckLeaf: r
  } = $e(e), i = _(!1), s = _([]), c = _([]), u = _(), v = _(), p = (h) => xp({
    initCheckedKeys: h,
    key2TreeNode: l.value,
    checkStrictly: o.value,
    onlyCheckLeaf: r.value
  }), m = (h) => {
    const y = p(h);
    [s.value, c.value] = y;
  };
  return m(n.value || (t == null ? void 0 : t.value) || []), Bt(() => {
    n.value ? [u.value, v.value] = p(n.value) : i.value && (u.value = void 0, v.value = void 0, s.value = [], c.value = []), i.value || (i.value = !0);
  }), {
    checkedKeys: d(() => u.value || s.value),
    indeterminateKeys: d(() => o.value && a.value ? a.value : v.value || c.value),
    setCheckedState(h, y, $ = !1) {
      return $ ? m(h) : (s.value = h, c.value = y), [s.value, c.value];
    }
  };
}
function um(e) {
  const {
    treeData: t,
    fieldNames: n,
    selectable: l,
    showLine: o,
    blockNode: a,
    checkable: r,
    loadMore: i,
    draggable: s
  } = $e(e), c = _([]);
  Bt(() => {
    var p, m;
    c.value = Hp(t.value || [], {
      selectable: (p = l == null ? void 0 : l.value) != null ? p : !1,
      showLine: !!(o != null && o.value),
      blockNode: !!(a != null && a.value),
      checkable: (m = r == null ? void 0 : r.value) != null ? m : !1,
      fieldNames: n == null ? void 0 : n.value,
      loadMore: !!(i != null && i.value),
      draggable: !!(s != null && s.value)
    });
  });
  const u = d(() => Sp(c.value)), v = d(() => Op(u.value));
  return {
    treeData: c,
    flattenTreeData: u,
    key2TreeNode: v
  };
}
const cm = z({
  name: "Tree",
  components: {
    VirtualList: Bo,
    TreeNode: im
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
      multiple: a,
      loadMore: r,
      checkStrictly: i,
      checkedKeys: s,
      defaultCheckedKeys: c,
      selectedKeys: u,
      defaultSelectedKeys: v,
      expandedKeys: p,
      defaultExpandedKeys: m,
      checkedStrategy: h,
      selectable: y,
      checkable: $,
      blockNode: I,
      fieldNames: E,
      size: w,
      defaultExpandAll: C,
      filterTreeNode: S,
      draggable: g,
      allowDrop: b,
      defaultExpandSelected: N,
      defaultExpandChecked: M,
      autoExpandParent: A,
      halfCheckedKeys: x,
      onlyCheckLeaf: W,
      animation: G
    } = $e(e), R = K("tree"), U = d(() => [`${R}`, {
      [`${R}-checkable`]: $.value,
      [`${R}-show-line`]: o.value
    }, `${R}-size-${w.value}`]), X = ct(n, "switcher-icon"), P = ct(n, "loading-icon"), F = ct(n, "drag-icon"), me = ct(n, "icon"), oe = ct(n, "title"), B = ct(n, "extra"), {
      treeData: te,
      flattenTreeData: Q,
      key2TreeNode: de
    } = um(Se({
      treeData: l,
      selectable: y,
      showLine: o,
      blockNode: I,
      checkable: $,
      fieldNames: E,
      loadMore: r,
      draggable: g
    })), {
      checkedKeys: ue,
      indeterminateKeys: Ce,
      setCheckedState: Qe
    } = sm(Se({
      defaultCheckedKeys: c,
      checkedKeys: s,
      checkStrictly: i,
      key2TreeNode: de,
      halfCheckedKeys: x,
      onlyCheckLeaf: W
    })), [Ie, Re] = An((v == null ? void 0 : v.value) || [], Se({
      value: u
    })), He = _([]), De = _();
    function Ze() {
      if (m != null && m.value) {
        const q = /* @__PURE__ */ new Set([]);
        return m.value.forEach((J) => {
          if (q.has(J))
            return;
          const ie = de.value.get(J);
          ie && [...A.value ? ie.pathParentKeys : [], J].forEach((fe) => q.add(fe));
        }), [...q];
      }
      if (C.value)
        return Q.value.filter((q) => q.children && q.children.length).map((q) => q.key);
      if (N.value || M.value) {
        const q = /* @__PURE__ */ new Set([]), J = (ie) => {
          ie.forEach((fe) => {
            const _e = de.value.get(fe);
            _e && (_e.pathParentKeys || []).forEach((ke) => q.add(ke));
          });
        };
        return N.value && J(Ie.value), M.value && J(ue.value), [...q];
      }
      return [];
    }
    const [Y, T] = An(Ze(), Se({
      value: p
    })), Z = _([]), ge = d(() => {
      const q = new Set(Y.value), J = new Set(Z.value);
      return Q.value.filter((ie) => {
        var fe;
        if (!(!S || !S.value || (S == null ? void 0 : S.value(ie.treeNodeData))))
          return !1;
        const ke = Me(ie.parentKey), wt = (fe = ie.pathParentKeys) == null ? void 0 : fe.every((Tt) => q.has(Tt) && !J.has(Tt));
        return ke || wt;
      });
    });
    function we(q, J = h.value) {
      let ie = [...q];
      return J === "parent" ? ie = q.filter((fe) => {
        const _e = de.value.get(fe);
        return _e && !(!Me(_e.parentKey) && q.includes(_e.parentKey));
      }) : J === "child" && (ie = q.filter((fe) => {
        var _e, ke;
        return !((ke = (_e = de.value.get(fe)) == null ? void 0 : _e.children) != null && ke.length);
      })), ie;
    }
    function Ee(q) {
      return q.map((J) => {
        var ie;
        return ((ie = de.value.get(J)) == null ? void 0 : ie.treeNodeData) || void 0;
      }).filter(Boolean);
    }
    function Xe(q) {
      const {
        targetKey: J,
        targetChecked: ie,
        newCheckedKeys: fe,
        newIndeterminateKeys: _e,
        event: ke
      } = q, wt = J ? de.value.get(J) : void 0, Tt = we(fe);
      t("update:checkedKeys", Tt), t("update:halfCheckedKeys", _e), t("check", Tt, {
        checked: ie,
        node: wt == null ? void 0 : wt.treeNodeData,
        checkedNodes: Ee(Tt),
        halfCheckedKeys: _e,
        halfCheckedNodes: Ee(_e),
        e: ke
      });
    }
    function Ve(q) {
      const {
        targetKey: J,
        targetSelected: ie,
        newSelectedKeys: fe,
        event: _e
      } = q, ke = J ? de.value.get(J) : void 0;
      t("update:selectedKeys", fe), t("select", fe, {
        selected: ie,
        node: ke == null ? void 0 : ke.treeNodeData,
        selectedNodes: Ee(fe),
        e: _e
      });
    }
    function Ct(q) {
      const {
        targetKey: J,
        targetExpanded: ie,
        newExpandedKeys: fe,
        event: _e
      } = q, ke = J ? de.value.get(J) : void 0;
      t("expand", fe, {
        expanded: ie,
        node: ke == null ? void 0 : ke.treeNodeData,
        expandedNodes: Ee(fe),
        e: _e
      }), t("update:expandedKeys", fe);
    }
    function tn(q) {
      const [J, ie] = Qe(q, [], !0);
      Xe({
        newCheckedKeys: J,
        newIndeterminateKeys: ie
      });
    }
    function kt(q) {
      let J = q;
      !a.value && q.length > 1 && (J = [q[0]]), Re(J), Ve({
        newSelectedKeys: J
      });
    }
    function nt(q) {
      Z.value = [], T(q), Ct({
        newExpandedKeys: q
      });
    }
    function Nt(q, J, ie) {
      if (!q.length)
        return;
      let fe = [...ue.value], _e = [...Ce.value];
      q.forEach((ke) => {
        const wt = de.value.get(ke);
        wt && ([fe, _e] = Yr({
          node: wt,
          checked: J,
          checkedKeys: [...fe],
          indeterminateKeys: [..._e],
          checkStrictly: i.value
        }));
      }), Qe(fe, _e), Xe({
        targetKey: ie,
        targetChecked: Me(ie) ? void 0 : J,
        newCheckedKeys: fe,
        newIndeterminateKeys: _e
      });
    }
    function nn(q, J, ie) {
      if (!q.length)
        return;
      let fe;
      if (a.value) {
        const _e = new Set(Ie.value);
        q.forEach((ke) => {
          J ? _e.add(ke) : _e.delete(ke);
        }), fe = [..._e];
      } else
        fe = J ? [q[0]] : [];
      Re(fe), Ve({
        targetKey: ie,
        targetSelected: Me(ie) ? void 0 : J,
        newSelectedKeys: fe
      });
    }
    function L(q, J, ie) {
      const fe = new Set(Y.value);
      q.forEach((ke) => {
        J ? fe.add(ke) : fe.delete(ke), Ue(ke);
      });
      const _e = [...fe];
      T(_e), Ct({
        targetKey: ie,
        targetExpanded: Me(ie) ? void 0 : J,
        newExpandedKeys: _e
      });
    }
    function O(q, J, ie) {
      const fe = de.value.get(J);
      if (!fe)
        return;
      const [_e, ke] = Yr({
        node: fe,
        checked: q,
        checkedKeys: ue.value,
        indeterminateKeys: Ce.value,
        checkStrictly: i.value
      });
      Qe(_e, ke), Xe({
        targetKey: J,
        targetChecked: q,
        newCheckedKeys: _e,
        newIndeterminateKeys: ke,
        event: ie
      });
    }
    function j(q, J) {
      if (!de.value.get(q))
        return;
      let fe, _e;
      if (a.value) {
        const ke = new Set(Ie.value);
        _e = !ke.has(q), _e ? ke.add(q) : ke.delete(q), fe = [...ke];
      } else
        _e = !0, fe = [q];
      Re(fe), Ve({
        targetKey: q,
        targetSelected: _e,
        newSelectedKeys: fe,
        event: J
      });
    }
    function se(q, J, ie) {
      if (Z.value.includes(J) || !de.value.get(J))
        return;
      const _e = new Set(Y.value);
      q ? _e.add(J) : _e.delete(J);
      const ke = [..._e];
      T(ke), G.value && Z.value.push(J), Ct({
        targetKey: J,
        targetExpanded: q,
        newExpandedKeys: ke,
        event: ie
      });
    }
    function Ue(q) {
      const J = Z.value.indexOf(q);
      Z.value.splice(J, 1);
    }
    const qe = d(() => r != null && r.value ? async (q) => {
      if (!Ge(r.value))
        return;
      const J = de.value.get(q);
      if (!J)
        return;
      const {
        treeNodeData: ie
      } = J;
      He.value = [.../* @__PURE__ */ new Set([...He.value, q])];
      try {
        await r.value(ie), He.value = He.value.filter((fe) => fe !== q), se(!0, q), ue.value.includes(q) && O(!0, q);
      } catch (fe) {
        He.value = He.value.filter((_e) => _e !== q), console.error("[tree]load data error: ", fe);
      }
    } : void 0), ut = Se({
      treeProps: e,
      switcherIcon: X,
      loadingIcon: P,
      dragIcon: F,
      nodeIcon: me,
      nodeTitle: oe,
      nodeExtra: B,
      treeData: te,
      flattenTreeData: Q,
      key2TreeNode: de,
      checkedKeys: ue,
      indeterminateKeys: Ce,
      selectedKeys: Ie,
      expandedKeys: Y,
      loadingKeys: He,
      currentExpandKeys: Z,
      onLoadMore: qe,
      filterTreeNode: S,
      onCheck: O,
      onSelect: j,
      onExpand: se,
      onExpandEnd: Ue,
      allowDrop(q, J) {
        const ie = de.value.get(q);
        return ie && Ge(b.value) ? !!b.value({
          dropNode: ie.treeNodeData,
          dropPosition: J
        }) : !0;
      },
      onDragStart(q, J) {
        const ie = de.value.get(q);
        De.value = ie, ie && t("dragStart", J, ie.treeNodeData);
      },
      onDragEnd(q, J) {
        const ie = de.value.get(q);
        De.value = void 0, ie && t("dragEnd", J, ie.treeNodeData);
      },
      onDragOver(q, J) {
        const ie = de.value.get(q);
        ie && t("dragOver", J, ie.treeNodeData);
      },
      onDragLeave(q, J) {
        const ie = de.value.get(q);
        ie && t("dragLeave", J, ie.treeNodeData);
      },
      onDrop(q, J, ie) {
        const fe = de.value.get(q);
        De.value && fe && !(fe.key === De.value.key || fe.pathParentKeys.includes(De.value.key || "")) && t("drop", {
          e: ie,
          dragNode: De.value.treeNodeData,
          dropNode: fe.treeNodeData,
          dropPosition: J
        });
      }
    });
    return rt(ni, ut), {
      classNames: U,
      visibleTreeNodeList: ge,
      treeContext: ut,
      virtualListRef: _(),
      computedSelectedKeys: Ie,
      computedExpandedKeys: Y,
      computedCheckedKeys: ue,
      computedIndeterminateKeys: Ce,
      getPublicCheckedKeys: we,
      getNodes: Ee,
      internalCheckNodes: Nt,
      internalSetCheckedKeys: tn,
      internalSelectNodes: nn,
      internalSetSelectedKeys: kt,
      internalExpandNodes: L,
      internalSetExpandedKeys: nt
    };
  },
  methods: {
    toggleCheck(e, t) {
      const {
        key2TreeNode: n,
        onCheck: l,
        checkedKeys: o
      } = this.treeContext, a = !o.includes(e), r = n.get(e);
      r && Rt(r) && l(a, e, t);
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
        return o && Rt(o);
      }) : [];
      this.internalSetCheckedKeys(n);
    },
    checkNode(e, t = !0, n = !1) {
      const {
        checkStrictly: l,
        treeContext: o
      } = this, {
        key2TreeNode: a
      } = o, r = Ke(e), i = (r ? e : [e]).filter((s) => {
        const c = a.get(s);
        return c && Rt(c) && (l || !n || Ep(c));
      });
      this.internalCheckNodes(i, t, r ? void 0 : e);
    },
    selectAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && Ur(o);
      }) : [];
      this.internalSetSelectedKeys(n);
    },
    selectNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ke(e), o = (l ? e : [e]).filter((a) => {
        const r = n.get(a);
        return r && Ur(r);
      });
      this.internalSelectNodes(o, t, l ? void 0 : e);
    },
    expandAll(e = !0) {
      const {
        key2TreeNode: t
      } = this.treeContext, n = e ? [...t.keys()].filter((l) => {
        const o = t.get(l);
        return o && Zr(o);
      }) : [];
      this.internalSetExpandedKeys(n);
    },
    expandNode(e, t = !0) {
      const {
        key2TreeNode: n
      } = this.treeContext, l = Ke(e), o = (l ? e : [e]).filter((a) => {
        const r = n.get(a);
        return r && Zr(r);
      });
      this.internalExpandNodes(o, t, l ? void 0 : e);
    }
  }
});
function dm(e, t, n, l, o, a) {
  const r = be("TreeNode"), i = be("VirtualList");
  return k(), D("div", {
    class: V(e.classNames)
  }, [e.virtualListProps ? (k(), ne(i, re({
    key: 0,
    ref: "virtualListRef"
  }, e.virtualListProps, {
    data: e.visibleTreeNodeList
  }), {
    item: le(({
      item: s
    }) => [f(r, re({
      key: `${e.searchValue}-${s.key}`
    }, s.treeNodeProps), null, 16)]),
    _: 1
  }, 16, ["data"])) : (k(!0), D(Pe, {
    key: 1
  }, Wt(e.visibleTreeNodeList, (s) => (k(), ne(r, re({
    key: s.key
  }, s.treeNodeProps), null, 16))), 128))], 2);
}
var eo = /* @__PURE__ */ ae(cm, [["render", dm]]);
const fm = Object.assign(eo, {
  install: (e, t) => {
    Le(e, t);
    const n = Te(t);
    e.component(n + eo.name, eo);
  }
}), vm = z({
  name: "TypographyEditContent",
  components: {
    Input: Eo
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
    const l = [`${K("typography")}-edit-content`], o = _();
    function a(i) {
      t("update:text", i), t("change", i);
    }
    function r() {
      t("end");
    }
    return Ne(() => {
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
      onBlur: r,
      onChange: a,
      onEnd: r
    };
  }
});
function pm(e, t, n, l, o, a) {
  const r = be("Input");
  return k(), D("div", {
    class: V(e.classNames)
  }, [f(r, {
    ref: "inputRef",
    "auto-size": "",
    "model-value": e.text,
    onBlur: e.onBlur,
    onInput: e.onChange,
    onKeydown: wi(e.onEnd, ["enter"])
  }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])], 2);
}
var mm = /* @__PURE__ */ ae(vm, [["render", pm]]);
const hm = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-copy`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), ym = ["stroke-width", "stroke-linecap", "stroke-linejoin"], gm = /* @__PURE__ */ H("path", {
  d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"
}, null, -1), bm = [gm];
function _m(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, bm, 14, ym);
}
var to = /* @__PURE__ */ ae(hm, [["render", _m]]);
const $m = Object.assign(to, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + to.name, to);
  }
}), Cm = z({
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
    const n = K("icon"), l = d(() => [n, `${n}-edit`, {
      [`${n}-spin`]: e.spin
    }]), o = d(() => {
      const r = {};
      return e.size && (r.fontSize = pe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
    });
    return {
      cls: l,
      innerStyle: o,
      onClick: (r) => {
        t("click", r);
      }
    };
  }
}), km = ["stroke-width", "stroke-linecap", "stroke-linejoin"], wm = /* @__PURE__ */ H("path", {
  d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"
}, null, -1), Sm = [wm];
function Om(e, t, n, l, o, a) {
  return k(), D("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: V(e.cls),
    style: ve(e.innerStyle),
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin,
    onClick: t[0] || (t[0] = (...r) => e.onClick && e.onClick(...r))
  }, Sm, 14, km);
}
var no = /* @__PURE__ */ ae(Cm, [["render", Om]]);
const Em = Object.assign(no, {
  install: (e, t) => {
    var n;
    const l = (n = t == null ? void 0 : t.iconPrefix) != null ? n : "";
    e.component(l + no.name, no);
  }
}), xm = z({
  name: "TypographyOperations",
  components: {
    Tooltip: Xn,
    IconCheckCircleFill: wo,
    IconCopy: $m,
    IconEdit: Em
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
    const n = K("typography"), l = d(() => e.forceRenderExpand || e.expandable && e.isEllipsis), {
      t: o
    } = Jt();
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
function Pm(e, t, n, l, o, a) {
  const r = be("IconEdit"), i = be("Tooltip"), s = be("IconCheckCircleFill"), c = be("IconCopy");
  return k(), D(Pe, null, [e.editable ? (k(), ne(i, re({
    key: 0,
    content: e.t("typography.edit")
  }, e.editTooltipProps), {
    default: le(() => [H("span", {
      class: V(`${e.prefixCls}-operation-edit`),
      onClick: t[0] || (t[0] = ot((...u) => e.onEditClick && e.onEditClick(...u), ["stop"]))
    }, [f(r)], 2)]),
    _: 1
  }, 16, ["content"])) : he("v-if", !0), e.copyable ? (k(), ne(i, oo(re({
    key: 1
  }, e.copyTooltipProps)), {
    content: le(() => [ee(e.$slots, "copy-tooltip", {
      copied: e.isCopied
    }, () => [je(ze(e.isCopied ? e.t("typography.copied") : e.t("typography.copy")), 1)])]),
    default: le(() => [H("span", {
      class: V({
        [`${e.prefixCls}-operation-copied`]: e.isCopied,
        [`${e.prefixCls}-operation-copy`]: !e.isCopied
      }),
      onClick: t[1] || (t[1] = ot((...u) => e.onCopyClick && e.onCopyClick(...u), ["stop"]))
    }, [ee(e.$slots, "copy-icon", {
      copied: e.isCopied
    }, () => [e.isCopied ? (k(), ne(s, {
      key: 0
    })) : (k(), ne(c, {
      key: 1
    }))])], 2)]),
    _: 3
  }, 16)) : he("v-if", !0), e.showExpand ? (k(), D("a", {
    key: 2,
    class: V(`${e.prefixCls}-operation-expand`),
    onClick: t[2] || (t[2] = ot((...u) => e.onExpandClick && e.onExpandClick(...u), ["stop"]))
  }, [ee(e.$slots, "expand-node", {
    expanded: e.expanded
  }, () => [je(ze(e.expanded ? e.t("typography.collapse") : e.t("typography.expand")), 1)])], 2)) : he("v-if", !0)], 64);
}
var la = /* @__PURE__ */ ae(xm, [["render", Pm]]);
let Ae;
function Bm(e) {
  return Array.prototype.slice.apply(e).map((n) => `${n}: ${e.getPropertyValue(n)};`).join("");
}
function lo(e) {
  if (!e)
    return 0;
  const t = e.match(/^\d*(\.\d*)?/);
  return t ? Number(t[0]) : 0;
}
var Im = (e, t, n, l) => {
  Ae || (Ae = document.createElement("div"), document.body.appendChild(Ae));
  const {
    rows: o,
    suffix: a,
    ellipsisStr: r
  } = t, i = window.getComputedStyle(e), s = Bm(i), c = lo(i.lineHeight), u = Math.round(c * o + lo(i.paddingTop) + lo(i.paddingBottom));
  Ae.setAttribute("style", s), Ae.setAttribute("aria-hidden", "true"), Ae.style.height = "auto", Ae.style.minHeight = "auto", Ae.style.maxHeight = "auto", Ae.style.position = "fixed", Ae.style.left = "0", Ae.style.top = "-99999999px", Ae.style.zIndex = "-200", Ae.style.whiteSpace = "normal";
  const v = va({
    render() {
      return f("span", null, [n]);
    }
  });
  v.mount(Ae);
  const p = Array.prototype.slice.apply(Ae.childNodes[0].cloneNode(!0).childNodes);
  v.unmount(), Ae.innerHTML = "";
  const m = document.createTextNode(`${r}${a}`);
  Ae.appendChild(m), p.forEach((I) => {
    Ae.appendChild(I);
  });
  const h = document.createTextNode(l);
  Ae.insertBefore(h, m);
  function y() {
    return Ae.offsetHeight <= u;
  }
  if (y())
    return {
      ellipsis: !1,
      text: l
    };
  function $(I, E = 0, w = l.length, C = 0) {
    const S = Math.floor((E + w) / 2), g = l.slice(0, S);
    if (I.textContent = g, E >= w - 1)
      for (let b = w; b >= E; b -= 1) {
        const N = l.slice(0, b);
        if (I.textContent = N, y() || !N)
          return;
      }
    y() ? $(I, S, w, S) : $(I, E, S, C);
  }
  return $(h), {
    text: h.textContent,
    ellipsis: !0
  };
};
const zm = async (e) => {
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
  const l = window.getSelection(), o = window.document.createRange();
  l == null || l.removeAllRanges(), o.selectNode(n), l == null || l.addRange(o);
  try {
    window.document.execCommand("copy");
  } catch (a) {
    console.error(`execCommand Error: ${a}`);
  }
  l == null || l.removeAllRanges(), window.document.body.removeChild(n);
};
let Vt;
function Nm(e) {
  if (!e)
    return "";
  Vt || (Vt = document.createElement("div"), Vt.setAttribute("aria-hidden", "true"), document.body.appendChild(Vt));
  const t = va({
    render() {
      return f("div", null, [e]);
    }
  });
  t.mount(Vt);
  const n = Vt.innerText;
  return t.unmount(), n;
}
var Tm = Object.defineProperty, Lm = Object.defineProperties, Vm = Object.getOwnPropertyDescriptors, oa = Object.getOwnPropertySymbols, jm = Object.prototype.hasOwnProperty, Dm = Object.prototype.propertyIsEnumerable, ra = (e, t, n) => t in e ? Tm(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n, Am = (e, t) => {
  for (var n in t || (t = {}))
    jm.call(t, n) && ra(e, n, t[n]);
  if (oa)
    for (var n of oa(t))
      Dm.call(t, n) && ra(e, n, t[n]);
  return e;
}, Mm = (e, t) => Lm(e, Vm(t));
function ai(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !xt(e);
}
function Fm(e) {
  const {
    bold: t,
    mark: n,
    underline: l,
    delete: o,
    code: a
  } = e, r = [];
  return t && r.push("b"), l && r.push("u"), o && r.push("del"), a && r.push("code"), n && r.push("mark"), r;
}
function aa(e, t) {
  const {
    mark: n
  } = e, l = Fm(e), o = xe(n) && n.color ? {
    backgroundColor: n.color
  } : {};
  return l.reduce((a, r) => f(r, r === "mark" ? {
    style: o
  } : {}, ai(a) ? a : {
    default: () => [a]
  }), t);
}
function Rm(e) {
  const t = !!e.showTooltip, n = xe(e.showTooltip) && e.showTooltip.type === "popover" ? td : Xn, l = xe(e.showTooltip) && e.showTooltip.props || {};
  return Mm(Am({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: !1,
    css: !1
  }, yt(e, ["showTooltip"])), {
    showTooltip: t,
    TooltipComponent: n,
    tooltipProps: l
  });
}
var Km = z({
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
      defaultEditing: a,
      ellipsis: r,
      copyable: i,
      editable: s,
      copyText: c,
      editText: u,
      copyDelay: v,
      component: p
    } = $e(e), m = K("typography"), h = d(() => [m, {
      [`${m}-${e.type}`]: e.type,
      [`${m}-disabled`]: e.disabled
    }]), y = _(), $ = _(""), [I, E] = An(a.value, Se({
      value: o
    })), w = d(() => s.value && I.value);
    function C() {
      n("update:editing", !0), n("editStart"), E(!0);
    }
    function S(ue) {
      n("update:editText", ue), n("change", ue);
    }
    function g() {
      I.value && (n("update:editing", !1), n("editEnd"), E(!1));
    }
    const b = _(!1);
    let N = null;
    function M() {
      var ue;
      const Ce = (ue = c.value) != null ? ue : $.value;
      zm(Ce || ""), b.value = !0, n("copy", Ce), N = setTimeout(() => {
        b.value = !1;
      }, v.value);
    }
    vn(() => {
      N && clearTimeout(N), N = null;
    });
    const A = _(!1), x = _(!1), W = _(""), G = d(() => Rm(xe(r.value) && r.value || {}));
    let R = null;
    function U() {
      const ue = !x.value;
      x.value = ue, n("expand", ue);
    }
    function X(ue = !1) {
      return G.value.css ? f(la, {
        editable: s.value,
        copyable: i.value,
        expandable: G.value.expandable,
        isCopied: b.value,
        isEllipsis: te.value,
        expanded: x.value,
        forceRenderExpand: ue || x.value,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: C,
        onCopy: M,
        onExpand: U
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      }) : f(la, {
        editable: s.value,
        copyable: i.value,
        expandable: G.value.expandable,
        isCopied: b.value,
        isEllipsis: A.value,
        expanded: x.value,
        forceRenderExpand: ue,
        editTooltipProps: e.editTooltipProps,
        copyTooltipProps: e.copyTooltipProps,
        onEdit: C,
        onCopy: M,
        onExpand: U
      }, {
        "copy-tooltip": t["copy-tooltip"],
        "copy-icon": t["copy-icon"],
        "expand-node": t["expand-node"]
      });
    }
    function P() {
      if (!y.value)
        return;
      const {
        ellipsis: ue,
        text: Ce
      } = Im(y.value, G.value, X(!!G.value.expandable), $.value);
      A.value !== ue && (A.value = ue, G.value.css || n("ellipsis", ue)), W.value !== Ce && (W.value = Ce || "");
    }
    function F() {
      r.value && !x.value && (jn(R), R = Ea(() => {
        P();
      }));
    }
    vn(() => {
      jn(R);
    }), ye(() => G.value.rows, () => {
      F();
    }), ye(r, (ue) => {
      ue ? F() : A.value = !1;
    });
    let me = [];
    const oe = () => {
      if (r.value || i.value || s.value) {
        const ue = Nm(me);
        ue !== $.value && ($.value = ue, F());
      }
    };
    Ne(oe), it(oe);
    const B = _(), te = _(!1), Q = () => {
      if (y.value && B.value) {
        const ue = B.value.offsetHeight > y.value.offsetHeight;
        ue !== te.value && (te.value = ue, n("ellipsis", ue));
      }
    }, de = d(() => x.value ? {} : {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": G.value.rows,
      "-webkit-box-orient": "vertical"
    });
    return () => {
      var ue, Ce;
      if (me = ((ue = t.default) == null ? void 0 : ue.call(t)) || [], w.value) {
        const ge = (Ce = u.value) != null ? Ce : $.value;
        return f(mm, {
          text: ge,
          onChange: (we) => {
            we !== ge && S(we);
          },
          onEnd: g
        }, null);
      }
      const {
        suffix: Qe,
        ellipsisStr: Ie,
        showTooltip: Re,
        tooltipProps: He,
        TooltipComponent: De
      } = G.value, Ze = A.value && !x.value, Y = Ze && !Re ? {
        title: $.value
      } : {}, T = p.value;
      if (G.value.css) {
        const ge = aa(e, me), we = f(T, re({
          class: h.value,
          ref: y,
          style: de.value
        }, Y, l), {
          default: () => [f("span", {
            ref: B
          }, [ge])]
        });
        return te.value ? f(De, re(He, {
          onResize: () => Q()
        }), {
          default: () => [we],
          content: () => $.value
        }) : f(pn, {
          onResize: () => {
            Q();
          }
        }, ai(we) ? we : {
          default: () => [we]
        });
      }
      const Z = aa(e, Ze ? W.value : me);
      return f(pn, {
        onResize: () => F()
      }, {
        default: () => [f(T, re({
          class: h.value,
          ref: y
        }, Y, l), {
          default: () => [Ze && Re ? f(De, He, {
            default: () => [f("span", null, [Z])],
            content: () => $.value
          }) : Z, Ze ? Ie : null, Qe, X()]
        })]
      });
    };
  }
}), Hm = z({
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
    } = $e(e), l = K("typography"), o = d(() => t != null && t.value ? "blockquote" : "div"), a = d(() => [{
      [`${l}-spacing-close`]: (n == null ? void 0 : n.value) === "close"
    }]);
    return {
      component: o,
      classNames: a
    };
  },
  render() {
    const {
      component: e,
      classNames: t
    } = this;
    return f(Km, re({
      class: t
    }, this.$attrs, {
      component: e
    }), this.$slots);
  }
});
function Wm(e) {
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
function qm(e, t, n, l) {
  const o = n ?? _(0);
  return ye(e, (a) => {
    if (!a)
      return;
    const r = Wm(t);
    a.style.cursor = r.getCursorIcon();
    const i = r.getMoveIncrementHandler(), s = {
      x: 0,
      y: 0
    }, c = (p) => {
      const m = i(s, p);
      (!l || l(o.value + m)) && (o.value += i(s, p)), s.x = p.x, s.y = p.y;
    }, u = (p) => {
      p.stopPropagation();
    }, v = (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = "default", document.removeEventListener("mousemove", c);
    };
    a.addEventListener("mousedown", (p) => {
      p.stopPropagation(), document.querySelector("body").style.cursor = a.style.cursor, s.x = p.x, s.y = p.y, document.addEventListener("mousemove", c), document.addEventListener("mouseup", u, {
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
function Qn(e) {
  function t(a) {
    return d(() => {
      const i = Ot(e);
      return i ? window.getComputedStyle(i, null).getPropertyValue(Ot(a)) : "";
    });
  }
  function n(a) {
    return d(() => {
      const i = Ot(e);
      if (i) {
        const s = Ot(a);
        return i.style[s];
      }
      return "";
    });
  }
  function l(a) {
    const r = a ?? t("display");
    return d(() => Ot(e) ? {
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
  function o() {
    return d(() => {
      const r = Ot(e);
      if (!r || !r.parentElement)
        return {
          isFlex: !1,
          direction: ""
        };
      const s = Qn(r.parentElement).getFlexBoxInfo();
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
const fn = /* @__PURE__ */ new Map();
function Gm(e) {
  ye(e, (t) => {
    if (!t) {
      fn.forEach((l) => {
        l.value = null;
      });
      return;
    }
    const n = Qn(t);
    fn.forEach((l, o) => {
      l.value = n.getComputedStyle(o).value;
    });
  });
}
function Um(e) {
  return fn.has(e) || fn.set(e, _(null)), fn.get(e);
}
function It(e) {
  return Oi() ? (Ei(e), !0) : !1;
}
function Be(e) {
  return typeof e == "function" ? e() : ce(e);
}
const gn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zm = (e) => e != null, Ym = Object.prototype.toString, Xm = (e) => Ym.call(e) === "[object Object]", Jm = () => {
};
function Qm(e) {
  return e || bt();
}
function eh(e, t = {}) {
  if (!go(e))
    return $e(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const l in e.value)
    n[l] = Si(() => ({
      get() {
        return e.value[l];
      },
      set(o) {
        var a;
        if ((a = Be(t.replaceRef)) != null ? a : !0)
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
function ii(e, t = !0, n) {
  Qm() ? Ne(e, n) : t ? e() : We(e);
}
function th(e, t = 1e3, n = {}) {
  const {
    immediate: l = !0,
    immediateCallback: o = !1
  } = n;
  let a = null;
  const r = _(!1);
  function i() {
    a && (clearInterval(a), a = null);
  }
  function s() {
    r.value = !1, i();
  }
  function c() {
    const u = Be(t);
    u <= 0 || (r.value = !0, o && e(), i(), a = setInterval(e, u));
  }
  if (l && gn && c(), go(t) || typeof t == "function") {
    const u = ye(t, () => {
      r.value && gn && c();
    });
    It(u);
  }
  return It(s), {
    isActive: r,
    pause: s,
    resume: c
  };
}
function Yt(e) {
  var t;
  const n = Be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $t = gn ? window : void 0, nh = gn ? window.document : void 0;
function Ye(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = $t) : [t, n, l, o] = e, !t)
    return Jm;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const a = [], r = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, v, p, m) => (u.addEventListener(v, p, m), () => u.removeEventListener(v, p, m)), s = ye(
    () => [Yt(t), Be(o)],
    ([u, v]) => {
      if (r(), !u)
        return;
      const p = Xm(v) ? { ...v } : v;
      a.push(
        ...n.flatMap((m) => l.map((h) => i(u, m, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), r();
  };
  return It(c), c;
}
function lh() {
  const e = _(!1), t = bt();
  return t && Ne(() => {
    e.value = !0;
  }, t), e;
}
function el(e) {
  const t = lh();
  return d(() => (t.value, !!e()));
}
function si(e, t, n = {}) {
  const { window: l = $t, ...o } = n;
  let a;
  const r = el(() => l && "MutationObserver" in l), i = () => {
    a && (a.disconnect(), a = void 0);
  }, s = d(() => {
    const p = Be(e), m = (Array.isArray(p) ? p : [p]).map(Yt).filter(Zm);
    return new Set(m);
  }), c = ye(
    () => s.value,
    (p) => {
      i(), r.value && p.size && (a = new MutationObserver(t), p.forEach((m) => a.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), u = () => a == null ? void 0 : a.takeRecords(), v = () => {
    i(), c();
  };
  return It(v), {
    isSupported: r,
    stop: v,
    takeRecords: u
  };
}
function oh(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: l = void 0,
    window: o = $t
  } = t, a = _(!1), r = l ? 1e3 / l : null;
  let i = 0, s = null;
  function c(p) {
    if (!a.value || !o)
      return;
    i || (i = p);
    const m = p - i;
    if (r && m < r) {
      s = o.requestAnimationFrame(c);
      return;
    }
    i = p, e({ delta: m, timestamp: p }), s = o.requestAnimationFrame(c);
  }
  function u() {
    !a.value && o && (a.value = !0, i = 0, s = o.requestAnimationFrame(c));
  }
  function v() {
    a.value = !1, s != null && o && (o.cancelAnimationFrame(s), s = null);
  }
  return n && u(), It(v), {
    isActive: bn(a),
    pause: v,
    resume: u
  };
}
function rh(e, t = {}) {
  const { window: n = $t } = t, l = el(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const a = _(!1), r = (c) => {
    a.value = c.matches;
  }, i = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", r) : o.removeListener(r));
  }, s = Bt(() => {
    l.value && (i(), o = n.matchMedia(Be(e)), "addEventListener" in o ? o.addEventListener("change", r) : o.addListener(r), a.value = o.matches);
  });
  return It(() => {
    s(), i(), o = void 0;
  }), a;
}
function ah(e, t = {}) {
  var n, l;
  const {
    pointerTypes: o,
    preventDefault: a,
    stopPropagation: r,
    exact: i,
    onMove: s,
    onEnd: c,
    onStart: u,
    initialValue: v,
    axis: p = "both",
    draggingElement: m = $t,
    containerElement: h,
    handle: y = e
  } = t, $ = _(
    (n = Be(v)) != null ? n : { x: 0, y: 0 }
  ), I = _(), E = (b) => o ? o.includes(b.pointerType) : !0, w = (b) => {
    Be(a) && b.preventDefault(), Be(r) && b.stopPropagation();
  }, C = (b) => {
    var N;
    if (b.button !== 0 || Be(t.disabled) || !E(b) || Be(i) && b.target !== Be(e))
      return;
    const M = Be(h), A = (N = M == null ? void 0 : M.getBoundingClientRect) == null ? void 0 : N.call(M), x = Be(e).getBoundingClientRect(), W = {
      x: b.clientX - (M ? x.left - A.left + M.scrollLeft : x.left),
      y: b.clientY - (M ? x.top - A.top + M.scrollTop : x.top)
    };
    (u == null ? void 0 : u(W, b)) !== !1 && (I.value = W, w(b));
  }, S = (b) => {
    if (Be(t.disabled) || !E(b) || !I.value)
      return;
    const N = Be(h), M = Be(e).getBoundingClientRect();
    let { x: A, y: x } = $.value;
    (p === "x" || p === "both") && (A = b.clientX - I.value.x, N && (A = Math.min(Math.max(0, A), N.scrollWidth - M.width))), (p === "y" || p === "both") && (x = b.clientY - I.value.y, N && (x = Math.min(Math.max(0, x), N.scrollHeight - M.height))), $.value = {
      x: A,
      y: x
    }, s == null || s($.value, b), w(b);
  }, g = (b) => {
    Be(t.disabled) || !E(b) || I.value && (I.value = void 0, c == null || c($.value, b), w(b));
  };
  if (gn) {
    const b = { capture: (l = t.capture) != null ? l : !0 };
    Ye(y, "pointerdown", C, b), Ye(m, "pointermove", S, b), Ye(m, "pointerup", g, b);
  }
  return {
    ...eh($),
    position: $,
    isDragging: d(() => !!I.value),
    style: d(
      () => `left:${$.value.x}px;top:${$.value.y}px;`
    )
  };
}
function ih(e, t, n = {}) {
  const { window: l = $t, ...o } = n;
  let a;
  const r = el(() => l && "ResizeObserver" in l), i = () => {
    a && (a.disconnect(), a = void 0);
  }, s = d(() => Array.isArray(e) ? e.map((v) => Yt(v)) : [Yt(e)]), c = ye(
    s,
    (v) => {
      if (i(), r.value && l) {
        a = new ResizeObserver(t);
        for (const p of v)
          p && a.observe(p, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), c();
  };
  return It(u), {
    isSupported: r,
    stop: u
  };
}
function ui(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: l = !0,
    windowScroll: o = !0,
    immediate: a = !0
  } = t, r = _(0), i = _(0), s = _(0), c = _(0), u = _(0), v = _(0), p = _(0), m = _(0);
  function h() {
    const y = Yt(e);
    if (!y) {
      n && (r.value = 0, i.value = 0, s.value = 0, c.value = 0, u.value = 0, v.value = 0, p.value = 0, m.value = 0);
      return;
    }
    const $ = y.getBoundingClientRect();
    r.value = $.height, i.value = $.bottom, s.value = $.left, c.value = $.right, u.value = $.top, v.value = $.width, p.value = $.x, m.value = $.y;
  }
  return ih(e, h), ye(() => Yt(e), (y) => !y && h()), si(e, h, {
    attributeFilter: ["style", "class"]
  }), o && Ye("scroll", h, { capture: !0, passive: !0 }), l && Ye("resize", h, { passive: !0 }), ii(() => {
    a && h();
  }), {
    height: r,
    bottom: i,
    left: s,
    right: c,
    top: u,
    width: v,
    x: p,
    y: m,
    update: h
  };
}
function sh(e) {
  const {
    x: t,
    y: n,
    document: l = nh,
    multiple: o,
    interval: a = "requestAnimationFrame",
    immediate: r = !0
  } = e, i = el(() => Be(o) ? l && "elementsFromPoint" in l : l && "elementFromPoint" in l), s = _(null), c = () => {
    var v, p;
    s.value = Be(o) ? (v = l == null ? void 0 : l.elementsFromPoint(Be(t), Be(n))) != null ? v : [] : (p = l == null ? void 0 : l.elementFromPoint(Be(t), Be(n))) != null ? p : null;
  }, u = a === "requestAnimationFrame" ? oh(c, { immediate: r }) : th(c, a, { immediate: r });
  return {
    isSupported: i,
    element: s,
    ...u
  };
}
const uh = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function ci(e = {}) {
  const {
    type: t = "page",
    touch: n = !0,
    resetOnTouchEnds: l = !1,
    initialValue: o = { x: 0, y: 0 },
    window: a = $t,
    target: r = a,
    scroll: i = !0,
    eventFilter: s
  } = e;
  let c = null;
  const u = _(o.x), v = _(o.y), p = _(null), m = typeof t == "function" ? t : uh[t], h = (S) => {
    const g = m(S);
    c = S, g && ([u.value, v.value] = g, p.value = "mouse");
  }, y = (S) => {
    if (S.touches.length > 0) {
      const g = m(S.touches[0]);
      g && ([u.value, v.value] = g, p.value = "touch");
    }
  }, $ = () => {
    if (!c || !a)
      return;
    const S = m(c);
    c instanceof MouseEvent && S && (u.value = S[0] + a.scrollX, v.value = S[1] + a.scrollY);
  }, I = () => {
    u.value = o.x, v.value = o.y;
  }, E = s ? (S) => s(() => h(S), {}) : (S) => h(S), w = s ? (S) => s(() => y(S), {}) : (S) => y(S), C = s ? () => s(() => $(), {}) : () => $();
  if (r) {
    const S = { passive: !0 };
    Ye(r, ["mousemove", "dragover"], E, S), n && t !== "movement" && (Ye(r, ["touchstart", "touchmove"], w, S), l && Ye(r, "touchend", I, S)), i && t === "page" && Ye(a, "scroll", C, { passive: !0 });
  }
  return {
    x: u,
    y: v,
    sourceType: p
  };
}
function Lo(e = {}) {
  const {
    window: t = $t,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: l = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: a = !0
  } = e, r = _(n), i = _(l), s = () => {
    t && (a ? (r.value = t.innerWidth, i.value = t.innerHeight) : (r.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight));
  };
  if (s(), ii(s), Ye("resize", s, { passive: !0 }), o) {
    const c = rh("(orientation: portrait)");
    ye(c, () => s());
  }
  return { width: r, height: i };
}
function ch(e, t) {
  return window.getComputedStyle(e, null).getPropertyValue(t);
}
function dh() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function fh(e) {
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
function di(e, t) {
  return e.classList.contains(t.selectors.slice(1));
}
function Vo(e, t) {
  if (!di(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.elementTypePrefix))
      return n.slice(t.elementTypePrefix.length + 1);
  return null;
}
function jt(e, t) {
  if (!di(e, t))
    return null;
  for (const n of e.classList)
    if (n.startsWith(t.idPrefix))
      return parseInt(n.slice(t.idPrefix.length + 1));
  return null;
}
function fi(e, t) {
  const n = `*.${t.idPrefix}-${e}`, l = document.querySelector(n);
  if (!l)
    throw new Error(`target element with id ${e} not found`);
  return l;
}
const Oe = _(null), lt = {
  props: Se(/* @__PURE__ */ new Map()),
  styles: Se(/* @__PURE__ */ new Map()),
  propsCode: _(null),
  stylesCode: _(null)
}, Fn = /* @__PURE__ */ new Map();
function vh() {
  return Oe;
}
function ph(e) {
  Oe.value = fi(e, Do());
}
function mh(e) {
  Oe.value = e, pi();
}
function vi(e) {
  if (Fn.has(e))
    throw new Error(`update flag for ${e} already exists`);
  const t = _(Symbol(e));
  return Fn.set(e, t), bn(t);
}
function hh(e) {
  const t = Fn.get(e);
  if (!t)
    throw new Error(`update flag for ${e} does not exist`);
  t.value = Symbol(e);
}
function yh() {
  return bn(lt);
}
function gh(e) {
  if (lt.props.clear(), lt.styles.clear(), e.props)
    for (const [t, n] of Object.entries(e.props))
      lt.props.set(t, n);
  if (e.styles)
    for (const [t, n] of Object.entries(e.styles))
      lt.styles.set(t, n);
  e.propsCode !== void 0 && (lt.propsCode.value = e.propsCode), e.stylesCode !== void 0 && (lt.stylesCode.value = e.stylesCode), pi();
}
function bh() {
  return {
    props: lt.propsCode,
    styles: lt.stylesCode
  };
}
function _h(e) {
  return d(() => lt.styles.has(e));
}
function $h() {
  return d(() => Oe.value !== null);
}
function Ch() {
  return d(() => Oe.value === null ? null : Vo(Oe.value, Do()));
}
function pi() {
  for (const e of Fn.values())
    e.value = Symbol(e.value.description);
}
const At = _(null);
let dt = d(() => null), jo, mi, hi, yi, gi, bi;
function Do() {
  return jo;
}
function kh(e) {
  At.value = fi(e, jo);
}
function wh() {
  At.value = null;
}
function Sh() {
  return mi;
}
function Oh(e) {
  hi = e.emitSetCommandFn, yi = e.emitResetCommandFn, gi = e.emitJumpSourceCodeFn, bi = e.emitApplyCommandFn, jo = e.selectorConfig, mi = e.elementTreeData;
  const {
    hoverElement: t
  } = Ih(e.selectorConfig);
  zh(t), dt = t;
}
function Eh() {
  gi();
}
function xh() {
  bi();
}
function Ph() {
  return d(() => !0);
}
function Ao(e) {
  Array.isArray(e) || (e = [e]), hi(e);
}
function Bh(e, t = "style") {
  yi([{
    propertyName: e,
    type: t
  }]);
}
function Ih(e) {
  const {
    x: t,
    y: n
  } = ci({
    type: "client"
  }), {
    element: l
  } = sh({
    x: t,
    y: n
  });
  return {
    hoverElement: d(() => {
      if (l.value === null)
        return null;
      const a = l.value.closest(e.selectors);
      return a === null || a.closest("[layout-tool-panel]") ? At.value ? At.value : null : a;
    })
  };
}
function zh(e) {
  Ye(document.querySelector("body"), "click", (t) => {
    t.target.closest("[layout-tool-panel]") || e.value !== null && (mh(e.value), t.stopPropagation());
  }, {
    capture: !0
  }), Ye(document.querySelector("body"), "mouseenter", (t) => {
    e.value && t.stopPropagation();
  }, {
    capture: !0
  });
}
function Nh(e, t) {
  const n = Um(e);
  return d({
    get: () => n.value,
    set: (o) => {
      const a = {
        propertyName: e,
        values: {
          [e]: o
        }
      }, r = t ? t(o) : [];
      Ao([a, ...r]), n.value = o;
    }
  });
}
const Th = /* @__PURE__ */ z({
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
    const t = e, n = Nh(t.styleName), l = d(() => {
      if (!n.value)
        return {
          value: 0,
          unit: "px"
        };
      const u = /(-?\d+)([a-zA-Z%]+)/, v = n.value.match(u), p = parseFloat(v[1]), m = v[2];
      return {
        value: p,
        unit: m
      };
    });
    let o = l.value.value, a = l.value.unit;
    const r = d({
      get: () => l.value.value,
      set: (u) => {
        o = u, n.value = `${o}${a}`;
      }
    });
    d({
      get: () => l.value.unit,
      set: (u) => {
        a = u, n.value = `${o}${a}`;
      }
    });
    const i = _(null);
    qm(i, t.direction, r, t.valueFilter);
    const s = {
      "clip-path": t.clipPath
    };
    function c() {
    }
    return (u, v) => (k(), D("div", {
      ref_key: "target",
      ref: i,
      class: "target",
      style: ve([{
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }, s])
    }, [H("div", {
      onClick: c
    }, [H("div", {
      ref: "numberElement",
      class: "number",
      style: {
        "user-select": "none",
        color: "aliceblue",
        cursor: "pointer"
      }
    }, ze(r.value), 513)])], 512));
  }
});
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, pt = /* @__PURE__ */ et(Th, [["__scopeId", "data-v-19de9462"]]), Lh = {
  class: "relative w-full",
  style: {
    height: "8rem"
  }
}, Vh = /* @__PURE__ */ z({
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
    }, o = (a) => a >= 0;
    return (a, r) => {
      const i = Pt;
      return k(), ne(i, {
        header: "Spacing(间距)",
        key: "spacing"
      }, {
        default: le(() => [H("div", Lh, [H("p", {
          class: "m-0 p-0 absolute pointer-events-none",
          style: ve([{
            top: `${t.verticalHeightPercent}%`,
            left: `${t.horizontalWidthPercent}%`
          }, {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }])
        }, " padding ", 4), r[0] || (r[0] = H("p", {
          class: "m-0 p-0 absolute",
          style: {
            "font-size": "0.6rem",
            color: "whitesmoke",
            "z-index": "999"
          }
        }, " margin ", -1)), f(pt, {
          class: "absolute h-full",
          direction: "left",
          "style-name": "margin-left",
          "clip-path": n.left.clipPath,
          style: ve([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute w-full",
          direction: "up",
          "style-name": "margin-top",
          "clip-path": n.up.clipPath,
          style: ve([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute h-full right-0",
          direction: "right",
          "style-name": "margin-right",
          "clip-path": n.right.clipPath,
          style: ve([{
            width: `${t.horizontalWidthPercent}%`
          }, {
            "background-color": "#393939"
          }])
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute bottom-0 w-full",
          direction: "bottom",
          "style-name": "margin-bottom",
          "clip-path": n.bottom.clipPath,
          style: ve([{
            height: `${t.verticalHeightPercent}%`
          }, {
            "background-color": "#424242"
          }])
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute h-full bg-blue-500",
          direction: "left",
          "style-name": "padding-left",
          "value-filter": o,
          "clip-path": l.left.clipPath,
          style: ve({
            left: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute w-full bg-blue-500",
          direction: "up",
          "style-name": "padding-top",
          "value-filter": o,
          "clip-path": l.up.clipPath,
          style: ve([{
            top: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          }, {}])
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute h-full bg-blue-500",
          direction: "right",
          "style-name": "padding-right",
          "value-filter": o,
          "clip-path": l.right.clipPath,
          style: ve({
            right: `${t.horizontalWidthPercent}%`,
            width: `${t.horizontalWidthPercent}%`
          })
        }, null, 8, ["clip-path", "style"]), f(pt, {
          class: "absolute w-full bg-blue-500",
          direction: "bottom",
          "style-name": "padding-bottom",
          "value-filter": o,
          "clip-path": l.bottom.clipPath,
          style: ve({
            bottom: `${t.verticalHeightPercent}%`,
            height: `${t.verticalHeightPercent}%`
          })
        }, null, 8, ["clip-path", "style"])])]),
        _: 1
      });
    };
  }
});
const jh = {
  class: "flex flex-row gap-0"
}, sn = /* @__PURE__ */ z({
  __name: "IconRadio",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      value: n,
      options: l,
      userEdited: o
    } = t.model, a = l.value.some((i) => i.icon);
    function r(i) {
      n.value = i, o();
    }
    return (i, s) => {
      const c = Zt, u = Xn, v = Zn;
      return k(), D("div", jh, [ce(a) ? (k(!0), D(Pe, {
        key: 0
      }, Wt(ce(l), (p) => (k(), ne(u, {
        content: p.label,
        key: p.value,
        "popup-container": "[layout-tool-panel]"
      }, {
        default: le(() => [f(c, {
          size: "small",
          type: "outline",
          status: ce(n) === p.value ? "success" : void 0,
          onClick: (m) => r(p.value)
        }, {
          icon: le(() => [H("span", {
            class: V(p.icon)
          }, null, 2)]),
          _: 2
        }, 1032, ["status", "onClick"])]),
        _: 2
      }, 1032, ["content"]))), 128)) : (k(!0), D(Pe, {
        key: 1
      }, Wt(ce(l), (p) => (k(), ne(v, {
        key: p.value,
        checked: ce(n) === p.value,
        checkable: "",
        bordered: "",
        color: "green",
        onCheck: (m) => r(p.value)
      }, {
        default: le(() => [je(ze(p.label), 1)]),
        _: 2
      }, 1032, ["checked", "onCheck"]))), 128))]);
    };
  }
});
function un(e) {
  const {
    propertyName: t,
    options: n
  } = e, l = _(void 0), o = d(() => Ot(n).map((i) => {
    const s = i.label ?? i.value;
    return {
      value: i.value,
      label: s,
      icon: i.icon ?? null,
      tooltip: i.tooltip ?? s
    };
  })), a = vi(e.propertyName);
  ye(a, () => {
    if (!Oe.value)
      return;
    const i = ch(Oe.value, t);
    l.value = i;
  }, {
    immediate: !0
  });
  function r() {
    Ao({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: l.value
      }
    });
  }
  return {
    value: l,
    options: o,
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
    const n = e, l = t, o = d(() => n.label ?? n.keyId), a = _h(n.keyId);
    function r() {
      Bh(n.keyId), l("reset");
    }
    const i = d(() => a.value ? "pointer-events: all; cursor: pointer;" : "pointer-events: none; cursor: default;");
    return (s, c) => {
      const u = tp;
      return k(), ne(u, {
        "popup-container": "[layout-tool-panel]",
        content: "Do you want to reset this setting?",
        "ok-text": "Reset",
        "cancel-text": "No",
        onOk: r
      }, {
        default: le(() => [H("div", {
          class: "px-2",
          style: ve(i.value)
        }, [H("span", {
          class: V(["item-title text-capitalize", {
            "bg-gray-300": ce(a)
          }])
        }, ze(o.value), 3)], 4)]),
        _: 1
      });
    };
  }
}), Dh = {
  class: "grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
}, Ah = /* @__PURE__ */ z({
  __name: "Layout",
  setup(e) {
    const t = Qn(Oe), n = un({
      propertyName: "display",
      options: [{
        value: "block"
      }, {
        value: "flex"
      }]
    }), l = t.getFlexBoxInfo(n.value), o = un({
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
    }), a = d(() => o.value.value === "row" ? "vertical align" : "horizontal align"), r = d(() => o.value.value === "row" ? [{
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
    }]), i = un({
      propertyName: "align-items",
      options: r
    }), s = d(() => o.value.value === "row" ? "vertical justify" : "horizontal justify"), c = d(() => o.value.value === "row" ? [{
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
    }]), u = un({
      propertyName: "justify-content",
      options: c
    });
    return (v, p) => {
      const m = Pt;
      return k(), ne(m, {
        header: "Layout(布局)",
        key: "layout"
      }, {
        default: le(() => [H("div", Dh, [f(tt, {
          keyId: "display",
          label: "Display"
        }), f(sn, {
          model: ce(n)
        }, null, 8, ["model"]), ce(l).isFlex ? (k(), D(Pe, {
          key: 0
        }, [f(tt, {
          keyId: "flex-direction",
          label: "direction"
        }), f(sn, {
          model: ce(o)
        }, null, 8, ["model"]), f(tt, {
          keyId: "align-items",
          label: a.value
        }, null, 8, ["label"]), f(sn, {
          model: ce(i)
        }, null, 8, ["model"]), f(tt, {
          keyId: "justify-content",
          label: s.value
        }, null, 8, ["label"]), f(sn, {
          model: ce(u)
        }, null, 8, ["model"])], 64)) : he("", !0)])]),
        _: 1
      });
    };
  }
});
const Mh = /* @__PURE__ */ et(Ah, [["__scopeId", "data-v-e3b78876"]]);
const Fh = {}, Rh = {
  class: "flex flex-row items-center gap-2"
};
function Kh(e, t) {
  const n = Nn;
  return k(), ne(n, null, {
    default: le(() => [H("div", Rh, [ee(e.$slots, "default")])]),
    _: 3
  });
}
const Hh = /* @__PURE__ */ et(Fh, [["render", Kh]]), Wh = /* @__PURE__ */ z({
  __name: "FlexItem",
  setup(e) {
    const n = Qn(Oe).getParentFlexBoxInfo(), l = d(() => n.value.direction === "row" ? {
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
    }), o = un({
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
      const i = Jv, s = Pt;
      return ce(n).isFlex ? (k(), ne(s, {
        header: "FlexItem(Flex子元素)",
        key: "flex-item"
      }, {
        default: le(() => [f(i, {
          size: "small"
        }, {
          default: le(() => [f(Hh, null, {
            default: le(() => [f(tt, {
              keyId: "align-self",
              label: l.value.title
            }, null, 8, ["label"]), f(sn, {
              model: ce(o)
            }, null, 8, ["model"])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : he("", !0);
    };
  }
});
const qh = /* @__PURE__ */ et(Wh, [["__scopeId", "data-v-44c63b0a"]]), Gh = {
  class: "grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1"
}, Qt = /* @__PURE__ */ z({
  __name: "InputWithUnitSelector",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      inputValue: n,
      selectValue: l,
      inputPlaceholder: o,
      itemOptions: a,
      userEdited: r,
      updateInput: i,
      updateSelect: s
    } = t.model, c = _(null);
    function u(p, m) {
      var h;
      m.currentTarget === m.target && (i(p), r(), (h = c.value) == null || h.blur());
    }
    function v(p) {
      s(p), r();
    }
    return (p, m) => {
      const h = Eo, y = Ha;
      return k(), D("div", Gh, [f(h, {
        ref_key: "inputRef",
        ref: c,
        size: "mini",
        modelValue: ce(n),
        "onUpdate:modelValue": m[0] || (m[0] = ($) => go(n) ? n.value = $ : null),
        placeholder: ce(o),
        onChange: u
      }, null, 8, ["modelValue", "placeholder"]), f(y, {
        "popup-container": "[layout-tool-panel]",
        size: "mini",
        options: ce(a),
        "model-value": ce(l),
        onChange: v,
        class: "x-unit-select p-0 min-w-[4ch]",
        "trigger-props": {
          contentClass: "w-[8ch]"
        }
      }, {
        "arrow-icon": le(() => m[1] || (m[1] = [])),
        _: 1
      }, 8, ["options", "model-value"])]);
    };
  }
});
function Uh(e, t) {
  return e.styles.get(t);
}
function en(e) {
  const {
    defaultValues: t = {
      input: void 0,
      select: void 0
    },
    options: n,
    configs: l
  } = e, o = _(t.input), a = _(t.select ?? (l == null ? void 0 : l.defaultOptionValue)), r = n.map((y) => typeof y == "string" ? {
    value: y,
    label: y
  } : y);
  function i(y) {
    return r.find(($) => $.value === y);
  }
  const s = _(null), c = d(() => {
    var y;
    return a.value ? (y = i(a.value)) == null ? void 0 : y.label : "";
  }), u = d(() => {
    if (a.value) {
      const y = i(a.value);
      return (y == null ? void 0 : y.value) ?? (y == null ? void 0 : y.label);
    }
    return "";
  }), v = vi(e.propertyName);
  ye(v, () => {
    const y = Uh(yh(), e.propertyName);
    if (y === void 0) {
      o.value = t.input, a.value = t.select;
      return;
    }
    const {
      number: $,
      unit: I
    } = fh(y);
    o.value = $, a.value = I;
  });
  function p() {
    const y = o.value, $ = a.value;
    let I = "";
    $ === "auto" ? I = $ : I = `${y}${$}`, Ao({
      propertyName: e.propertyName,
      values: {
        [e.propertyName]: I
      }
    });
  }
  function m(y) {
    ia(a, o, l);
  }
  function h(y) {
    a.value = y, sa(a, o, l);
  }
  return ia(a, o, l), sa(a, o, l), {
    inputValue: o,
    selectValue: a,
    selectItem: s,
    selectDisplay: c,
    inputPlaceholder: u,
    itemOptions: r,
    userEdited: p,
    updateSelect: h,
    updateInput: m
  };
}
function ia(e, t, n) {
  const {
    nonValueOptions: l,
    defaultOptionValue: o,
    optionValueIfnonValue: a
  } = n ?? {}, r = t.value;
  r && (l && o && r.length > 0 && e.value && l.includes(e.value) && (e.value = o), a && l && r && e.value && l.includes(e.value) && (e.value = a), !r && l && (e.value = l[0]));
}
function sa(e, t, n) {
  const {
    nonValueOptions: l
  } = n ?? {}, o = e.value;
  if (o) {
    if (l && l.includes(o))
      t.value = void 0;
    else if (!t.value && (n != null && n.specialProperty)) {
      const a = dh();
      n.specialProperty === "width" ? t.value = `${a.width}` : n.specialProperty === "height" && (t.value = `${a.height}`);
    }
  }
}
const Zh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Yh = ["px", "rem", "em", "ch", "vw", "vh", "%", {
  label: "-",
  value: "auto"
}], Xh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], Jh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], Qh = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "auto"
}], ey = ["px", "%", "rem", "em", "ch", "vw", "vh", {
  label: "-",
  value: "none"
}], ty = /* @__PURE__ */ z({
  __name: "Width",
  setup(e) {
    const n = en({
      propertyName: "width",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Zh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "width"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "width",
      label: "Width"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const ny = /* @__PURE__ */ et(ty, [["__scopeId", "data-v-bf60f62f"]]), ly = /* @__PURE__ */ z({
  __name: "Height",
  setup(e) {
    const n = en({
      propertyName: "height",
      defaultValues: {
        input: void 0,
        select: "auto"
      },
      options: Yh,
      configs: {
        nonValueOptions: ["auto"],
        optionValueIfnonValue: "px",
        defaultOptionValue: "auto",
        specialProperty: "height"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "height",
      label: "Height"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const oy = /* @__PURE__ */ et(ly, [["__scopeId", "data-v-6ddf53f3"]]), ry = /* @__PURE__ */ z({
  __name: "MaxWidth",
  setup(e) {
    const n = en({
      propertyName: "max-width",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: Jh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "width"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "max-width",
      label: "Max W"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const ay = /* @__PURE__ */ et(ry, [["__scopeId", "data-v-839a5360"]]), iy = /* @__PURE__ */ z({
  __name: "MinWidth",
  setup(e) {
    const n = en({
      propertyName: "min-width",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Xh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "width"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "min-width",
      label: "Min W"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const sy = /* @__PURE__ */ et(iy, [["__scopeId", "data-v-01858b83"]]), uy = /* @__PURE__ */ z({
  __name: "MaxHeight",
  setup(e) {
    const n = en({
      propertyName: "max-height",
      defaultValues: {
        input: void 0,
        select: "none"
      },
      options: ey,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["none"],
        defaultOptionValue: "none",
        specialProperty: "height"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "max-height",
      label: "Max H"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const cy = /* @__PURE__ */ et(uy, [["__scopeId", "data-v-3543e0dd"]]), dy = /* @__PURE__ */ z({
  __name: "MinHeight",
  setup(e) {
    const n = en({
      propertyName: "min-height",
      defaultValues: {
        input: "0",
        select: "px"
      },
      options: Qh,
      configs: {
        optionValueIfnonValue: "px",
        nonValueOptions: ["auto"],
        specialProperty: "height"
      }
    });
    return (l, o) => (k(), D(Pe, null, [f(tt, {
      "key-id": "min-height",
      label: "Min H"
    }), f(Qt, {
      model: ce(n)
    }, null, 8, ["model"])], 64));
  }
});
const fy = /* @__PURE__ */ et(dy, [["__scopeId", "data-v-0ba932b2"]]), vy = {
  class: "grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2"
}, py = /* @__PURE__ */ z({
  __name: "Size",
  setup(e) {
    return (t, n) => {
      const l = Pt;
      return k(), ne(l, {
        header: "Size(大小)",
        key: "size"
      }, {
        default: le(() => [H("div", vy, [f(ny), f(oy), f(sy), f(fy), f(ay), f(cy)])]),
        _: 1
      });
    };
  }
});
const my = /* @__PURE__ */ et(py, [["__scopeId", "data-v-53efd847"]]);
function hy() {
  return {
    treeData: Sh()
  };
}
const yy = /* @__PURE__ */ z({
  __name: "ElementTree",
  props: {
    model: {}
  },
  setup(e) {
    const t = _(null);
    function n(r) {
      const i = r[0];
      ph(i);
    }
    function l(r) {
      var u;
      const i = r.target;
      if (!i || !i.classList.contains("arco-tree-node-title"))
        return;
      const s = (u = i.parentElement) == null ? void 0 : u.getAttribute("data-key");
      if (!s)
        throw new Error("Cannot find key for selected element");
      const c = parseInt(s);
      c < 0 || kh(c);
    }
    function o(r) {
      wh();
    }
    function a(r) {
      if (!r || !r.classList)
        return null;
      const i = Do().idPrefix;
      for (let s of r.classList)
        if (s.startsWith(i))
          return parseInt(s.slice(i.length + 1));
      return null;
    }
    return ye(vh(), (r) => {
      if (r || t.value.selectAll(!1), t.value && r) {
        const i = a(r);
        if (i == null)
          throw new Error("Cannot find key for selected element");
        t.value.selectNode(i, !0);
      }
    }), (r, i) => {
      const s = fm;
      return k(), ne(s, {
        ref_key: "el",
        ref: t,
        data: r.model.treeData,
        "show-line": "",
        "block-node": "",
        onSelect: n,
        onMouseenterCapture: ot(l, ["stop"]),
        onMouseleaveCapture: ot(o, ["stop"])
      }, null, 8, ["data"]);
    };
  }
});
const gy = /* @__PURE__ */ et(yy, [["__scopeId", "data-v-3534882c"]]);
function by() {
  return {
    code: bh()
  };
}
const _y = /* @__PURE__ */ z({
  __name: "TargetContextDesc",
  props: {
    model: {}
  },
  setup(e) {
    const t = e;
    t.model.code.props;
    const n = t.model.code.styles;
    return (l, o) => {
      const a = Zn, r = Hm, i = zn;
      return k(), ne(i, null, {
        default: le(() => [f(a, null, {
          default: le(() => o[0] || (o[0] = [je("styles:")])),
          _: 1
        }), f(r, {
          code: "",
          copyable: "",
          "code-tooltip-props": {
            popupContainer: ".x-panel-nicegui"
          }
        }, {
          default: le(() => [je(ze(ce(n)), 1)]),
          _: 1
        })]),
        _: 1
      });
    };
  }
}), $y = {
  class: "bg-white/30 backdrop-blur-md"
}, Cy = /* @__PURE__ */ z({
  __name: "MainPanel",
  setup(e) {
    Gm(Oe);
    const t = d(() => !!Oe.value), n = by(), l = hy();
    return (o, a) => {
      const r = wf, i = Tn, s = wp;
      return k(), D("div", $y, [f(s, {
        "default-active-key": "element-tree"
      }, {
        default: le(() => [f(i, {
          key: "style",
          title: "style",
          disabled: !t.value
        }, {
          default: le(() => [f(r, {
            accordion: ""
          }, {
            default: le(() => [f(qh), f(Mh), f(Vh), f(my)]),
            _: 1
          })]),
          _: 1
        }, 8, ["disabled"]), f(i, {
          key: "element-tree",
          title: "navigator"
        }, {
          default: le(() => [f(gy, {
            model: ce(l)
          }, null, 8, ["model"])]),
          _: 1
        }), f(i, {
          key: "nicegui",
          title: "nicegui",
          class: "x-panel-nicegui"
        }, {
          default: le(() => [f(_y, {
            model: ce(n)
          }, null, 8, ["model"])]),
          _: 1
        }), f(i, {
          key: "cusStyle",
          title: "cus style"
        })]),
        _: 1
      })]);
    };
  }
});
function _i() {
  const {
    width: e,
    height: t
  } = Lo(), n = d(() => `0 0 ${e.value} ${t.value}`), l = d(() => ({
    width: e.value,
    height: t.value
  }));
  return {
    viewBox: n,
    styles: l
  };
}
const ky = ["viewBox"], wy = /* @__PURE__ */ z({
  __name: "Aiming",
  props: {
    model: {}
  },
  setup(e) {
    const t = e, {
      viewBox: n,
      styles: l
    } = _i(), {
      rectStyles: o,
      p1: a,
      p2: r,
      p3: i,
      p4: s,
      p5: c,
      p6: u,
      p7: v,
      p8: p
    } = t.model;
    return (m, h) => (k(), D("svg", {
      class: "vis-aiming",
      viewBox: ce(n),
      version: "1.1",
      style: ve([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none"
      }, ce(l)]),
      xmlns: "http://www.w3.org/2000/svg"
    }, [H("rect", {
      stroke: "hotpink",
      fill: "none",
      width: "100%",
      height: "100%",
      style: ve(ce(o))
    }, null, 4), H("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, ce(a), {
      r: "2"
    }), null, 16), H("circle", re({
      fill: "hotpink"
    }, ce(r), {
      r: "2"
    }), null, 16), H("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, ce(i), {
      r: "2"
    }), null, 16), H("circle", re({
      fill: "hotpink"
    }, ce(s), {
      r: "2"
    }), null, 16), H("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, ce(c), {
      r: "2"
    }), null, 16), H("circle", re({
      fill: "hotpink"
    }, ce(u), {
      r: "2"
    }), null, 16), H("circle", re({
      stroke: "hotpink",
      fill: "white"
    }, ce(v), {
      r: "2"
    }), null, 16), H("circle", re({
      fill: "hotpink"
    }, ce(p), {
      r: "2"
    }), null, 16)], 12, ky));
  }
});
const Sy = {
  class: "flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2",
  style: {
    top: "0",
    left: "0",
    "z-index": "999",
    height: "2rem"
  }
}, Oy = /* @__PURE__ */ z({
  __name: "Panel",
  setup(e) {
    const t = _(null), {
      style: n
    } = ah(t, {
      initialValue: {
        x: 40,
        y: 40
      },
      preventDefault: !0
    }), l = Ch();
    return (o, a) => {
      const r = Zn, i = np, s = Zt, c = sd, u = Xn;
      return k(), D("div", {
        style: ve([ce(n), {
          position: "fixed"
        }]),
        "layout-tool-panel": ""
      }, [H("div", Sy, [H("div", {
        ref_key: "el",
        ref: t,
        class: "cursor-move grow"
      }, [f(i, {
        class: "h-full"
      }, {
        default: le(() => [a[1] || (a[1] = H("div", {
          class: "i-mdi-android-debug-bridge text-2xl"
        }, null, -1)), a[2] || (a[2] = H("span", {
          class: "font-bold"
        }, "toolkit", -1)), f(r, {
          color: "green"
        }, {
          default: le(() => [je(ze(ce(l)), 1)]),
          _: 1
        })]),
        _: 1
      })], 512), f(u, {
        content: "apply changes"
      }, {
        default: le(() => [f(c, {
          count: 9,
          dot: "",
          dotStyle: {
            width: "10px",
            height: "10px"
          }
        }, {
          default: le(() => [Kt(f(s, {
            shape: "circle",
            size: "mini",
            onClick: a[0] || (a[0] = (v) => ce(xh)())
          }, {
            default: le(() => a[3] || (a[3] = [H("div", {
              class: "i-codicon-git-stash-apply text-1xl"
            }, null, -1)])),
            _: 1
          }, 512), [[Ht, ce(Ph)]])]),
          _: 1
        })]),
        _: 1
      }), f(u, {
        content: "jump to code"
      }, {
        default: le(() => [Kt(f(s, {
          shape: "circle",
          size: "mini",
          onClick: ce(Eh)
        }, {
          default: le(() => a[4] || (a[4] = [H("div", {
            class: "i-mdi-code-braces"
          }, null, -1)])),
          _: 1
        }, 8, ["onClick"]), [[Ht, ce($h)]])]),
        _: 1
      })]), ee(o.$slots, "default"), ee(o.$slots, "footer")], 4);
    };
  }
});
function Ey() {
  const {
    width: e,
    height: t
  } = Lo(), n = Se(ui(dt));
  Ye("scroll", n.update, !0);
  const l = d(() => dt.value ? {
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
  }), o = d(() => dt.value ? {
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
  }), a = d(() => dt.value ? {
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
  }), r = d(() => dt.value ? {
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
  }), i = d(() => dt.value ? {
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
    rightLine: a,
    bottomLine: r,
    leftLine: i
  };
}
const xy = ["viewBox"], on = "red", Py = /* @__PURE__ */ z({
  __name: "VisHover",
  setup(e) {
    const {
      viewBox: t,
      styles: n
    } = _i(), {
      rectStyles: l,
      topLine: o,
      rightLine: a,
      bottomLine: r,
      leftLine: i
    } = Ey();
    return (s, c) => (k(), D("svg", {
      class: "vis-hover",
      viewBox: ce(t),
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      style: ve([{
        position: "fixed",
        top: "0",
        left: "0",
        "pointer-events": "none",
        "z-index": "9999999"
      }, ce(n)])
    }, [H("rect", {
      fill: "none",
      stroke: on,
      "stroke-width": "1",
      style: ve(ce(l))
    }, null, 4), H("line", re({
      class: "top"
    }, ce(o), {
      stroke: on,
      "stroke-dasharray": "3 2"
    }), null, 16), H("line", re({
      class: "right"
    }, ce(a), {
      stroke: on,
      "stroke-dasharray": "3 2"
    }), null, 16), H("line", re({
      class: "bottom"
    }, ce(r), {
      stroke: on,
      "stroke-dasharray": "3 2"
    }), null, 16), H("line", re({
      class: "left"
    }, ce(i), {
      stroke: on,
      "stroke-dasharray": "3 2"
    }), null, 16)], 12, xy));
  }
});
function By(e, t) {
  const {
    width: n
  } = Lo(), {
    x: l,
    y: o
  } = ci({
    type: "client"
  }), a = d(() => {
    let s = l.value, c = o.value;
    return n.value - l.value < 10 && (s -= 10), o.value < 10 && (c += 10), {
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
    typeName: d(() => t.value ? Vo(t.value, e) : null),
    typeNameTagStyles: r
  };
}
function Iy(e, t) {
  let n = e.parentElement.closest(`${t.selectors}`);
  for (; n !== null; ) {
    if (window.getComputedStyle(n, null).getPropertyValue("display") === "flex")
      return {
        id: jt(n, t),
        dom: n
      };
    n = n.parentElement.closest(`${t.selectors}`);
  }
  return null;
}
const zy = /* @__PURE__ */ new Set(["Row", "Column", "Element"]);
function ua(e, t) {
  if (!zy.has(Vo(e, t)))
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
function ca(e, t) {
  const n = `.${t.idPrefix}-${e}`;
  return document.querySelector(n);
}
function Ny(e, t) {
  function n(a, r) {
    return window.getComputedStyle(ca(a, e), null).getPropertyValue(r);
  }
  function l(a) {
    const r = ca(a, e);
    t.value = r;
  }
  function o(a) {
    hh(a);
  }
  return {
    queryStyle: n,
    selectTarget: l,
    onServerResetCommand: o
  };
}
async function Ty(e) {
  if (!e)
    return;
  const {
    loadResource: t
  } = await import("../../static/utils/resources.js"), n = window.path_prefix;
  await t(n + `${e}/trackBall.css`);
}
function Ly() {
  const e = Se(ui(Oe));
  si(Oe, () => {
    e.update();
  }, {
    attributes: !0
  }), Ye("scroll", e.update, !0);
  const t = d(() => Oe.value ? {
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
  }), n = d(() => Oe.value ? {
    cx: e.x,
    cy: e.y
  } : {
    r: 0
  }), l = d(() => Oe.value ? {
    cx: e.x + e.width / 2,
    cy: e.y
  } : {
    r: 0
  }), o = d(() => Oe.value ? {
    cx: e.x + e.width,
    cy: e.y
  } : {
    r: 0
  }), a = d(() => Oe.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height / 2
  } : {
    r: 0
  }), r = d(() => Oe.value ? {
    cx: e.x + e.width,
    cy: e.y + e.height
  } : {
    r: 0
  }), i = d(() => Oe.value ? {
    cx: e.x + e.width / 2,
    cy: e.y + e.height
  } : {
    r: 0
  }), s = d(() => Oe.value ? {
    cx: e.x,
    cy: e.y + e.height
  } : {
    r: 0
  }), c = d(() => Oe.value ? {
    cx: e.x,
    cy: e.y + e.height / 2
  } : {
    r: 0
  });
  return bn(Oe), {
    rectStyles: t,
    p1: n,
    p2: l,
    p3: o,
    p4: a,
    p5: r,
    p6: i,
    p7: s,
    p8: c
  };
}
const jy = /* @__PURE__ */ z({
  __name: "TrackBall",
  props: {
    selectorConfig: {},
    currentTargetContext: {},
    resource_path: {},
    elementTreeData: {}
  },
  emits: ["hoverChange", "selectedChange", "setCommand", "resetCommand", "jumpSourceCode", "applyCommand"],
  setup(e, {
    expose: t,
    emit: n
  }) {
    const l = e, o = n;
    function a(u) {
      const v = Oe.value;
      if (!v)
        return;
      const p = jt(v, l.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      o("setCommand", {
        id: p,
        commands: u
      });
    }
    function r(u) {
      const v = Oe.value;
      if (!v)
        return;
      const p = jt(v, l.selectorConfig);
      if (!p)
        throw new Error("not found selected element");
      o("resetCommand", {
        id: p,
        commands: u
      });
    }
    Ne(async () => {
      await Ty(l.resource_path);
    }), Oh({
      selectorConfig: l.selectorConfig,
      elementTreeData: l.elementTreeData,
      emitSetCommandFn: a,
      emitResetCommandFn: r,
      emitJumpSourceCodeFn: () => {
        const u = Oe.value;
        if (!u)
          return;
        const v = jt(u, l.selectorConfig);
        if (!v)
          throw new Error("not found selected element");
        o("jumpSourceCode", {
          id: v
        });
      },
      emitApplyCommandFn: () => {
        o("applyCommand");
      }
    }), ye(() => l.currentTargetContext, () => {
      gh(l.currentTargetContext);
    }, {
      immediate: !0,
      deep: !0
    });
    const {
      typeNameTagStyles: i,
      typeName: s
    } = By(l.selectorConfig, dt), c = Ly();
    return ye(dt, (u) => {
      if (u) {
        const v = jt(u, l.selectorConfig);
        o("hoverChange", {
          id: v
        });
        return;
      }
      o("hoverChange", {
        id: null
      });
    }), ye(Oe, (u) => {
      const v = {
        isFlex: !1,
        direction: null
      };
      if (u) {
        const p = jt(u, l.selectorConfig), m = Iy(u, l.selectorConfig);
        let h = {
          isFlex: !1,
          direction: null
        };
        m && (h = ua(m.dom, l.selectorConfig)), o("selectedChange", {
          id: p,
          parentBoxId: m !== null ? m.id : null,
          flexInfo: ua(u, l.selectorConfig),
          parentFlexInfo: h
        });
        return;
      }
      o("selectedChange", {
        id: null,
        parentBoxId: null,
        flexInfo: v,
        parentFlexInfo: v
      });
    }), t(Ny(l.selectorConfig, Oe)), (u, v) => (k(), ne(fa, {
      to: "body"
    }, [f(Py), f(wy, {
      model: ce(c),
      style: {
        "z-index": "9999999"
      }
    }, null, 8, ["model"]), f(Oy, {
      class: "non-selectable",
      style: {
        "z-index": "9999999",
        width: "350px"
      }
    }, {
      default: le(() => [ee(u.$slots, "header"), f(Cy), ee(u.$slots, "footer")]),
      _: 3
    }), H("div", {
      class: "vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400",
      style: ve([ce(i), {
        "z-index": "9999999"
      }])
    }, ze(ce(s)), 5)]));
  }
});
export {
  jy as default
};
/* JS */ gapi.loaded_0(function (_) {
  var window = this
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var la, na, pa, ya, Ba, Ca, Ga
  _.ja = function (a) {
    return function () {
      return _.fa[a].apply(this, arguments)
    }
  }
  _.fa = []
  la = function (a) {
    var b = 0
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
    }
  }
  na =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a
          a[b] = c.value
          return a
        }
  pa = function (a) {
    a = [
      'object' == typeof globalThis && globalThis,
      a,
      'object' == typeof window && window,
      'object' == typeof self && self,
      'object' == typeof global && global,
    ]
    for (var b = 0; b < a.length; ++b) {
      var c = a[b]
      if (c && c.Math == Math) return c
    }
    throw Error('a')
  }
  ya = pa(this)
  Ba = function (a, b) {
    if (b)
      a: {
        var c = ya
        a = a.split('.')
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d]
          if (!(e in c)) break a
          c = c[e]
        }
        a = a[a.length - 1]
        d = c[a]
        b = b(d)
        b != d &&
          null != b &&
          na(c, a, { configurable: !0, writable: !0, value: b })
      }
  }
  Ba('Symbol', function (a) {
    if (a) return a
    var b = function (e, f) {
      this.MM = e
      na(this, 'description', { configurable: !0, writable: !0, value: f })
    }
    b.prototype.toString = function () {
      return this.MM
    }
    var c = 0,
      d = function (e) {
        if (this instanceof d)
          throw new TypeError('Symbol is not a constructor')
        return new b('jscomp_symbol_' + (e || '') + '_' + c++, e)
      }
    return d
  })
  Ba('Symbol.iterator', function (a) {
    if (a) return a
    a = Symbol('Symbol.iterator')
    for (
      var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
          ' '
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = ya[b[c]]
      'function' === typeof d &&
        'function' != typeof d.prototype[a] &&
        na(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Ca(la(this))
          },
        })
    }
    return a
  })
  Ca = function (a) {
    a = { next: a }
    a[Symbol.iterator] = function () {
      return this
    }
    return a
  }
  _.Da = function (a) {
    var b =
      'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
    return b ? b.call(a) : { next: la(a) }
  }
  _.Ea =
    'function' == typeof Object.create
      ? Object.create
      : function (a) {
          var b = function () {}
          b.prototype = a
          return new b()
        }
  if ('function' == typeof Object.setPrototypeOf) Ga = Object.setPrototypeOf
  else {
    var Ia
    a: {
      var Ka = { a: !0 },
        Ma = {}
      try {
        Ma.__proto__ = Ka
        Ia = Ma.a
        break a
      } catch (a) {}
      Ia = !1
    }
    Ga = Ia
      ? function (a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  _.Pa = Ga
  Ba('Array.prototype.find', function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this
            d instanceof String && (d = String(d))
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f]
              if (b.call(c, g, f, d)) {
                b = g
                break a
              }
            }
            b = void 0
          }
          return b
        }
  })
  var Qa = function (a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          ' must not be null or undefined'
      )
    if (b instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          c +
          ' must not be a regular expression'
      )
    return a + ''
  }
  Ba('String.prototype.startsWith', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Qa(this, b, 'startsWith'),
            e = d.length,
            f = b.length
          c = Math.max(0, Math.min(c | 0, d.length))
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1
          return g >= f
        }
  })
  var Ra = function (a, b) {
    a instanceof String && (a += '')
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++
            return { value: b(f, a[f]), done: !1 }
          }
          d = !0
          return { done: !0, value: void 0 }
        },
      }
    e[Symbol.iterator] = function () {
      return e
    }
    return e
  }
  Ba('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return Ra(this, function (b) {
            return b
          })
        }
  })
  Ba('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return Ra(this, function (b, c) {
            return c
          })
        }
  })
  var Sa = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  Ba('Object.values', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d
          for (d in b) Sa(b, d) && c.push(b[d])
          return c
        }
  })
  Ba('Array.from', function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (k) {
                  return k
                }
          var e = [],
            f =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator]
          if ('function' == typeof f) {
            b = f.call(b)
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++))
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g))
          return e
        }
  })
  Ba('Array.prototype.entries', function (a) {
    return a
      ? a
      : function () {
          return Ra(this, function (b, c) {
            return [b, c]
          })
        }
  })
  Ba('Object.is', function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
  })
  Ba('Array.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this
          d instanceof String && (d = String(d))
          var e = d.length
          c = c || 0
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c]
            if (f === b || Object.is(f, b)) return !0
          }
          return !1
        }
  })
  Ba('String.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Qa(this, b, 'includes').indexOf(b, c || 0)
        }
  })
  Ba('Object.entries', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d
          for (d in b) Sa(b, d) && c.push([d, b[d]])
          return c
        }
  })
  var Ta =
    'function' == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c]
            if (d) for (var e in d) Sa(d, e) && (a[e] = d[e])
          }
          return a
        }
  Ba('Object.assign', function (a) {
    return a || Ta
  })
  Ba('Array.prototype.flat', function (a) {
    return a
      ? a
      : function (b) {
          b = void 0 === b ? 1 : b
          for (var c = [], d = 0; d < this.length; d++) {
            var e = this[d]
            Array.isArray(e) && 0 < b
              ? ((e = Array.prototype.flat.call(e, b - 1)), c.push.apply(c, e))
              : c.push(e)
          }
          return c
        }
  })
  Ba('WeakMap', function (a) {
    function b() {}
    function c(l) {
      var m = typeof l
      return ('object' === m && null !== l) || 'function' === m
    }
    function d(l) {
      if (!Sa(l, f)) {
        var m = new b()
        na(l, f, { value: m })
      }
    }
    function e(l) {
      var m = Object[l]
      m &&
        (Object[l] = function (n) {
          if (n instanceof b) return n
          Object.isExtensible(n) && d(n)
          return m(n)
        })
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3],
            ])
          if (2 != n.get(l) || 3 != n.get(m)) return !1
          n.delete(l)
          n.set(m, 4)
          return !n.has(l) && 4 == n.get(m)
        } catch (r) {
          return !1
        }
      })()
    )
      return a
    var f = '$jscomp_hidden_' + Math.random()
    e('freeze')
    e('preventExtensions')
    e('seal')
    var g = 0,
      k = function (l) {
        this.Ca = (g += Math.random() + 1).toString()
        if (l) {
          l = _.Da(l)
          for (var m; !(m = l.next()).done; )
            (m = m.value), this.set(m[0], m[1])
        }
      }
    k.prototype.set = function (l, m) {
      if (!c(l)) throw Error('b')
      d(l)
      if (!Sa(l, f)) throw Error('c`' + l)
      l[f][this.Ca] = m
      return this
    }
    k.prototype.get = function (l) {
      return c(l) && Sa(l, f) ? l[f][this.Ca] : void 0
    }
    k.prototype.has = function (l) {
      return c(l) && Sa(l, f) && Sa(l[f], this.Ca)
    }
    k.prototype.delete = function (l) {
      return c(l) && Sa(l, f) && Sa(l[f], this.Ca) ? delete l[f][this.Ca] : !1
    }
    return k
  })
  Ba('Map', function (a) {
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1
        try {
          var k = Object.seal({ x: 4 }),
            l = new a(_.Da([[k, 's']]))
          if (
            's' != l.get(k) ||
            1 != l.size ||
            l.get({ x: 4 }) ||
            l.set({ x: 4 }, 't') != l ||
            2 != l.size
          )
            return !1
          var m = l.entries(),
            n = m.next()
          if (n.done || n.value[0] != k || 's' != n.value[1]) return !1
          n = m.next()
          return n.done ||
            4 != n.value[0].x ||
            't' != n.value[1] ||
            !m.next().done
            ? !1
            : !0
        } catch (r) {
          return !1
        }
      })()
    )
      return a
    var b = new WeakMap(),
      c = function (k) {
        this.mf = {}
        this.Oe = f()
        this.size = 0
        if (k) {
          k = _.Da(k)
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1])
        }
      }
    c.prototype.set = function (k, l) {
      k = 0 === k ? 0 : k
      var m = d(this, k)
      m.list || (m.list = this.mf[m.id] = [])
      m.le
        ? (m.le.value = l)
        : ((m.le = {
            next: this.Oe,
            Oi: this.Oe.Oi,
            head: this.Oe,
            key: k,
            value: l,
          }),
          m.list.push(m.le),
          (this.Oe.Oi.next = m.le),
          (this.Oe.Oi = m.le),
          this.size++)
      return this
    }
    c.prototype.delete = function (k) {
      k = d(this, k)
      return k.le && k.list
        ? (k.list.splice(k.index, 1),
          k.list.length || delete this.mf[k.id],
          (k.le.Oi.next = k.le.next),
          (k.le.next.Oi = k.le.Oi),
          (k.le.head = null),
          this.size--,
          !0)
        : !1
    }
    c.prototype.clear = function () {
      this.mf = {}
      this.Oe = this.Oe.Oi = f()
      this.size = 0
    }
    c.prototype.has = function (k) {
      return !!d(this, k).le
    }
    c.prototype.get = function (k) {
      return (k = d(this, k).le) && k.value
    }
    c.prototype.entries = function () {
      return e(this, function (k) {
        return [k.key, k.value]
      })
    }
    c.prototype.keys = function () {
      return e(this, function (k) {
        return k.key
      })
    }
    c.prototype.values = function () {
      return e(this, function (k) {
        return k.value
      })
    }
    c.prototype.forEach = function (k, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; )
        (n = n.value), k.call(l, n[1], n[0], this)
    }
    c.prototype[Symbol.iterator] = c.prototype.entries
    var d = function (k, l) {
        var m = l && typeof l
        'object' == m || 'function' == m
          ? b.has(l)
            ? (m = b.get(l))
            : ((m = '' + ++g), b.set(l, m))
          : (m = 'p_' + l)
        var n = k.mf[m]
        if (n && Sa(k.mf, m))
          for (k = 0; k < n.length; k++) {
            var r = n[k]
            if ((l !== l && r.key !== r.key) || l === r.key)
              return { id: m, list: n, index: k, le: r }
          }
        return { id: m, list: n, index: -1, le: void 0 }
      },
      e = function (k, l) {
        var m = k.Oe
        return Ca(function () {
          if (m) {
            for (; m.head != k.Oe; ) m = m.Oi
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: l(m) }
            m = null
          }
          return { done: !0, value: void 0 }
        })
      },
      f = function () {
        var k = {}
        return (k.Oi = k.next = k.head = k)
      },
      g = 0
    return c
  })
  Ba('Set', function (a) {
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(_.Da([c]))
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1
          var e = d.entries(),
            f = e.next()
          if (f.done || f.value[0] != c || f.value[1] != c) return !1
          f = e.next()
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done
        } catch (g) {
          return !1
        }
      })()
    )
      return a
    var b = function (c) {
      this.Ha = new Map()
      if (c) {
        c = _.Da(c)
        for (var d; !(d = c.next()).done; ) this.add(d.value)
      }
      this.size = this.Ha.size
    }
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c
      this.Ha.set(c, c)
      this.size = this.Ha.size
      return this
    }
    b.prototype.delete = function (c) {
      c = this.Ha.delete(c)
      this.size = this.Ha.size
      return c
    }
    b.prototype.clear = function () {
      this.Ha.clear()
      this.size = 0
    }
    b.prototype.has = function (c) {
      return this.Ha.has(c)
    }
    b.prototype.entries = function () {
      return this.Ha.entries()
    }
    b.prototype.values = function () {
      return this.Ha.values()
    }
    b.prototype.keys = b.prototype.values
    b.prototype[Symbol.iterator] = b.prototype.values
    b.prototype.forEach = function (c, d) {
      var e = this
      this.Ha.forEach(function (f) {
        return c.call(d, f, f, e)
      })
    }
    return b
  })
  _.p = {}
  _.Ua = _.Ua || {}
  _.D = this || self
  _.Va = 'closure_uid_' + ((1e9 * Math.random()) >>> 0)
  _.L = function (a, b) {
    a = a.split('.')
    var c = _.D
    a[0] in c ||
      'undefined' == typeof c.execScript ||
      c.execScript('var ' + a[0])
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
        : (c[d] = b)
  }
  _.P = function (a, b) {
    function c() {}
    c.prototype = b.prototype
    a.T = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
    a.Lo = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        g[k - 2] = arguments[k]
      return b.prototype[e].apply(d, g)
    }
  }
  gadgets = window.gadgets || {}
  osapi = window.osapi = window.osapi || {}

  window.___jsl = window.___jsl || {}
  ;(window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: { parsetags: 'explicit' },
    appsapi: { plus_one_service: '/plus/v1' },
    csi: { rate: 0.01 },
    poshare: { hangoutContactPickerServer: 'https://plus.google.com' },
    gappsutil: {
      required_scopes: [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.people.recommended',
      ],
      display_on_page_ready: !1,
    },
    appsutil: {
      required_scopes: [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.people.recommended',
      ],
      display_on_page_ready: !1,
    },
    'oauth-flow': {
      authUrl: 'https://accounts.google.com/o/oauth2/auth',
      proxyUrl: 'https://accounts.google.com/o/oauth2/postmessageRelay',
      redirectUri: 'postmessage',
    },
    iframes: {
      sharebox: {
        params: { json: '&' },
        url: ':socialhost:/:session_prefix:_/sharebox/dialog',
      },
      plus: {
        url: ':socialhost:/:session_prefix:_/widget/render/badge?usegapi=1',
      },
      ':socialhost:': 'https://apis.google.com',
      ':im_socialhost:': 'https://plus.googleapis.com',
      domains_suggest: { url: 'https://domains.google.com/suggest/flow' },
      card: {
        params: { s: '#', userid: '&' },
        url: ':socialhost:/:session_prefix:_/hovercard/internalcard',
      },
      ':signuphost:': 'https://plus.google.com',
      ':gplus_url:': 'https://plus.google.com',
      plusone: {
        url: ':socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1',
      },
      plus_share: {
        url:
          ':socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1',
      },
      plus_circle: {
        url: ':socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1',
      },
      plus_followers: {
        url: ':socialhost:/_/im/_/widget/render/plus/followers?usegapi=1',
      },
      configurator: {
        url: ':socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1',
      },
      appcirclepicker: {
        url: ':socialhost:/:session_prefix:_/widget/render/appcirclepicker',
      },
      page: {
        url: ':socialhost:/:session_prefix:_/widget/render/page?usegapi=1',
      },
      person: {
        url: ':socialhost:/:session_prefix:_/widget/render/person?usegapi=1',
      },
      community: {
        url:
          ':ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1',
      },
      follow: {
        url: ':socialhost:/:session_prefix:_/widget/render/follow?usegapi=1',
      },
      commentcount: {
        url:
          ':socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1',
      },
      comments: {
        url: ':socialhost:/:session_prefix:_/widget/render/comments?usegapi=1',
      },
      blogger: {
        url: ':socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1',
      },
      youtube: {
        url: ':socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1',
      },
      reportabuse: {
        url:
          ':socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1',
      },
      additnow: { url: ':socialhost:/additnow/additnow.html' },
      appfinder: {
        url:
          'https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1',
      },
      ':source:': '1p',
    },
    poclient: { update_session: 'google.updateSessionCallback' },
    'googleapis.config': {
      rpc: '/rpc',
      root: 'https://content.googleapis.com',
      'root-1p': 'https://clients6.google.com',
      useGapiForXd3: !0,
      xd3: '/static/proxy.html',
      auth: { useInterimAuth: !1 },
    },
    report: {
      apis: [
        'iframes\\..*',
        'gadgets\\..*',
        'gapi\\.appcirclepicker\\..*',
        'gapi\\.client\\..*',
      ],
      rate: 1e-4,
    },
    client: { perApiBatch: !0 },
  })

  window.___jsl = window.___jsl || {}
  ;(window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: { parsetags: 'onload' },
    iframes: { ':source:': '3p' },
  })

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var fb, gb, jb
  _.Xa = function (a, b) {
    return 0 <= (0, _.Wa)(a, b)
  }
  _.Ya = function (a) {
    var b = typeof a
    return ('object' == b && null != a) || 'function' == b
  }
  _.Za = function () {}
  _.$a = function (a) {
    var b = typeof a
    return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null'
  }
  _.eb = function (a) {
    var b = _.$a(a)
    return 'array' == b || ('object' == b && 'number' == typeof a.length)
  }
  fb = function (a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  gb = function (a, b, c) {
    if (!a) throw Error()
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2)
      return function () {
        var e = Array.prototype.slice.call(arguments)
        Array.prototype.unshift.apply(e, d)
        return a.apply(b, e)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }
  _.Q = function (a, b, c) {
    _.Q =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf('native code')
        ? fb
        : gb
    return _.Q.apply(null, arguments)
  }
  _.hb = function () {
    return Date.now()
  }
  jb = function (a) {
    return a
  }
  _.Wa = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
      }
    : function (a, b) {
        if ('string' === typeof a)
          return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
        return -1
      }
  _.kb = Array.prototype.lastIndexOf
    ? function (a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
      }
    : function (a, b) {
        var c = a.length - 1
        0 > c && (c = Math.max(0, a.length + c))
        if ('string' === typeof a)
          return 'string' !== typeof b || 1 != b.length
            ? -1
            : a.lastIndexOf(b, c)
        for (; 0 <= c; c--) if (c in a && a[c] === b) return c
        return -1
      }
  _.lb = Array.prototype.forEach
    ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
          f < d;
          f++
        )
          f in e && b.call(c, e[f], f, a)
      }
  _.mb = Array.prototype.filter
    ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
      }
    : function (a, b) {
        for (
          var c = a.length,
            d = [],
            e = 0,
            f = 'string' === typeof a ? a.split('') : a,
            g = 0;
          g < c;
          g++
        )
          if (g in f) {
            var k = f[g]
            b.call(void 0, k, g, a) && (d[e++] = k)
          }
        return d
      }
  _.nb = Array.prototype.map
    ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
      }
    : function (a, b) {
        for (
          var c = a.length,
            d = Array(c),
            e = 'string' === typeof a ? a.split('') : a,
            f = 0;
          f < c;
          f++
        )
          f in e && (d[f] = b.call(void 0, e[f], f, a))
        return d
      }
  _.ob = Array.prototype.some
    ? function (a, b, c) {
        return Array.prototype.some.call(a, b, c)
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
          f < d;
          f++
        )
          if (f in e && b.call(c, e[f], f, a)) return !0
        return !1
      }
  _.pb = Array.prototype.every
    ? function (a, b, c) {
        return Array.prototype.every.call(a, b, c)
      }
    : function (a, b, c) {
        for (
          var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
          f < d;
          f++
        )
          if (f in e && !b.call(c, e[f], f, a)) return !1
        return !0
      }
  var rb
  _.qb = String.prototype.trim
    ? function (a) {
        return a.trim()
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
      }
  _.tb = function (a, b) {
    var c = 0
    a = (0, _.qb)(String(a)).split('.')
    b = (0, _.qb)(String(b)).split('.')
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || '',
        g = b[e] || ''
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', '']
        g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', '']
        if (0 == f[0].length && 0 == g[0].length) break
        c =
          rb(
            0 == f[1].length ? 0 : parseInt(f[1], 10),
            0 == g[1].length ? 0 : parseInt(g[1], 10)
          ) ||
          rb(0 == f[2].length, 0 == g[2].length) ||
          rb(f[2], g[2])
        f = f[3]
        g = g[3]
      } while (0 == c)
    }
    return c
  }
  rb = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }
  a: {
    var vb = _.D.navigator
    if (vb) {
      var xb = vb.userAgent
      if (xb) {
        _.ub = xb
        break a
      }
    }
    _.ub = ''
  }
  _.yb = function (a) {
    return -1 != _.ub.indexOf(a)
  }
  var Ab
  _.zb = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }
  Ab = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  )
  _.Bb = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e]
      for (c in d) a[c] = d[c]
      for (var f = 0; f < Ab.length; f++)
        (c = Ab[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  _.Cb = function () {
    return _.yb('Opera')
  }
  _.Db = function () {
    return _.yb('Trident') || _.yb('MSIE')
  }
  _.Eb = function () {
    return _.yb('Firefox') || _.yb('FxiOS')
  }
  _.Fb = function () {
    return (_.yb('Chrome') || _.yb('CriOS')) && !_.yb('Edge')
  }
  _.Gb = function (a) {
    var b = !1,
      c
    return function () {
      b || ((c = a()), (b = !0))
      return c
    }
  }
  var Jb
  _.Kb = function () {
    if (void 0 === Jb) {
      var a = null,
        b = _.D.trustedTypes
      if (b && b.createPolicy)
        try {
          a = b.createPolicy('goog#html', {
            createHTML: jb,
            createScript: jb,
            createScriptURL: jb,
          })
        } catch (c) {
          _.D.console && _.D.console.error(c.message)
        }
      Jb = a
    }
    return Jb
  }
  var Mb, Lb
  _.Nb = function (a, b) {
    this.aM = (a === Lb && b) || ''
    this.SO = Mb
  }
  _.Nb.prototype.Bh = !0
  _.Nb.prototype.nd = _.ja(4)
  _.Ob = function (a) {
    return a instanceof _.Nb && a.constructor === _.Nb && a.SO === Mb
      ? a.aM
      : 'type_error:Const'
  }
  _.Pb = function (a) {
    return new _.Nb(Lb, a)
  }
  Mb = {}
  Lb = {}
  _.Sb = function (a, b) {
    this.BB = b === _.Qb ? a : ''
  }
  _.h = _.Sb.prototype
  _.h.Bh = !0
  _.h.nd = _.ja(3)
  _.h.fA = !0
  _.h.th = _.ja(6)
  _.h.toString = function () {
    return this.BB.toString()
  }
  _.Qb = {}
  _.Tb = new _.Sb('about:invalid#zClosurez', _.Qb)
  _.Vb = function (a, b) {
    this.AB = b === _.Ub ? a : ''
  }
  _.Vb.prototype.Bh = !0
  _.Vb.prototype.nd = _.ja(2)
  _.Vb.prototype.toString = function () {
    return this.AB.toString()
  }
  _.Ub = {}
  _.Wb = new _.Vb('', _.Ub)
  _.Yb = {}
  _.Zb = function (a, b) {
    this.zB = b === _.Yb ? a : ''
    this.Bh = !0
  }
  _.ac = function (a) {
    a = _.Ob(a)
    return 0 === a.length ? $b : new _.Zb(a, _.Yb)
  }
  _.Zb.prototype.nd = _.ja(1)
  _.Zb.prototype.toString = function () {
    return this.zB.toString()
  }
  var $b = new _.Zb('', _.Yb)
  var bc
  _.cc = function (a, b, c) {
    this.yB = c === bc ? a : ''
    this.mQ = b
  }
  _.h = _.cc.prototype
  _.h.fA = !0
  _.h.th = _.ja(5)
  _.h.Bh = !0
  _.h.nd = _.ja(0)
  _.h.toString = function () {
    return this.yB.toString()
  }
  _.dc = function (a) {
    if (a instanceof _.cc && a.constructor === _.cc) return a.yB
    _.$a(a)
    return 'type_error:SafeHtml'
  }
  bc = {}
  _.ec = function (a, b) {
    var c = _.Kb()
    a = c ? c.createHTML(a) : a
    return new _.cc(a, b, bc)
  }
  _.fc = new _.cc((_.D.trustedTypes && _.D.trustedTypes.emptyHTML) || '', 0, bc)
  _.gc = _.ec('<br>', 0)
  _.hc = _.Gb(function () {
    var a = document.createElement('div'),
      b = document.createElement('div')
    b.appendChild(document.createElement('div'))
    a.appendChild(b)
    b = a.firstChild.firstChild
    a.innerHTML = _.dc(_.fc)
    return !b.parentElement
  })
  _.ic = String.prototype.repeat
    ? function (a, b) {
        return a.repeat(b)
      }
    : function (a, b) {
        return Array(b + 1).join(a)
      }
  _.jc = (2147483648 * Math.random()) | 0
  _.lc = function () {
    return _.yb('iPhone') && !_.yb('iPod') && !_.yb('iPad')
  }
  _.mc = function () {
    return _.lc() || _.yb('iPad') || _.yb('iPod')
  }
  var nc = function (a) {
    nc[' '](a)
    return a
  }
  nc[' '] = _.Za
  _.oc = function (a, b) {
    try {
      return nc(a[b]), !0
    } catch (c) {}
    return !1
  }
  _.pc = function (a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : (a[b] = c(b))
  }
  var Gc, Hc, Mc, Qc
  _.qc = _.Cb()
  _.rc = _.Db()
  _.sc = _.yb('Edge')
  _.tc = _.sc || _.rc
  _.uc =
    _.yb('Gecko') &&
    !(-1 != _.ub.toLowerCase().indexOf('webkit') && !_.yb('Edge')) &&
    !(_.yb('Trident') || _.yb('MSIE')) &&
    !_.yb('Edge')
  _.vc = -1 != _.ub.toLowerCase().indexOf('webkit') && !_.yb('Edge')
  _.wc = _.vc && _.yb('Mobile')
  _.xc = _.yb('Macintosh')
  _.yc = _.yb('Windows')
  _.zc = _.yb('Linux') || _.yb('CrOS')
  _.Ac = _.yb('Android')
  _.Bc = _.lc()
  _.Cc = _.yb('iPad')
  _.Dc = _.yb('iPod')
  _.Ec = _.mc()
  Gc = function () {
    var a = _.D.document
    return a ? a.documentMode : void 0
  }
  a: {
    var Ic = '',
      Jc = (function () {
        var a = _.ub
        if (_.uc) return /rv:([^\);]+)(\)|;)/.exec(a)
        if (_.sc) return /Edge\/([\d\.]+)/.exec(a)
        if (_.rc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        if (_.vc) return /WebKit\/(\S+)/.exec(a)
        if (_.qc) return /(?:Version)[ \/]?(\S+)/.exec(a)
      })()
    Jc && (Ic = Jc ? Jc[1] : '')
    if (_.rc) {
      var Kc = Gc()
      if (null != Kc && Kc > parseFloat(Ic)) {
        Hc = String(Kc)
        break a
      }
    }
    Hc = Ic
  }
  _.Lc = Hc
  Mc = {}
  _.Nc = function (a) {
    return _.pc(Mc, a, function () {
      return 0 <= _.tb(_.Lc, a)
    })
  }
  _.Pc = function (a) {
    return Number(_.Oc) >= a
  }
  if (_.D.document && _.rc) {
    var Rc = Gc()
    Qc = Rc ? Rc : parseInt(_.Lc, 10) || void 0
  } else Qc = void 0
  _.Oc = Qc

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Wc, Xc, Zc, ad, cd, ed, fd, gd, hd, id, jd, md, od, vd, wd, xd, yd, Gd, Hd
  _.Sc = function (a, b) {
    return (_.fa[a] = b)
  }
  _.Tc = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, _.Tc)
    else {
      var b = Error().stack
      b && (this.stack = b)
    }
    a && (this.message = String(a))
    this.wK = !0
  }
  _.Uc = function (a) {
    return Array.prototype.concat.apply([], arguments)
  }
  _.Vc = function (a) {
    var b = a.length
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]
      return c
    }
    return []
  }
  _.Sb.prototype.th = _.Sc(6, function () {
    return 1
  })
  _.cc.prototype.th = _.Sc(5, function () {
    return this.mQ
  })
  _.Nb.prototype.nd = _.Sc(4, function () {
    return this.aM
  })
  _.Sb.prototype.nd = _.Sc(3, function () {
    return this.BB.toString()
  })
  _.Vb.prototype.nd = _.Sc(2, function () {
    return this.AB
  })
  _.Zb.prototype.nd = _.Sc(1, function () {
    return this.zB
  })
  _.cc.prototype.nd = _.Sc(0, function () {
    return this.yB.toString()
  })
  Wc = null
  Xc = /^[\w+/_-]+[=]{0,2}$/
  Zc = function (a) {
    return (a = a.querySelector && a.querySelector('script[nonce]')) &&
      (a = a.nonce || a.getAttribute('nonce')) &&
      Xc.test(a)
      ? a
      : ''
  }
  _.$c = function (a) {
    if (a && a != _.D) return Zc(a.document)
    null === Wc && (Wc = Zc(_.D.document))
    return Wc
  }
  ad = 0
  _.bd = function (a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, _.Va) && a[_.Va]) ||
      (a[_.Va] = ++ad)
    )
  }
  _.P(_.Tc, Error)
  _.Tc.prototype.name = 'CustomError'
  _.dd = function (a, b) {
    return 0 == a.lastIndexOf(b, 0)
  }
  ed = /&/g
  fd = /</g
  gd = />/g
  hd = /"/g
  id = /'/g
  jd = /\x00/g
  md = /[\x00&<>"']/
  _.nd = function (a, b) {
    if (b)
      a = a
        .replace(ed, '&amp;')
        .replace(fd, '&lt;')
        .replace(gd, '&gt;')
        .replace(hd, '&quot;')
        .replace(id, '&#39;')
        .replace(jd, '&#0;')
    else {
      if (!md.test(a)) return a
      ;-1 != a.indexOf('&') && (a = a.replace(ed, '&amp;'))
      ;-1 != a.indexOf('<') && (a = a.replace(fd, '&lt;'))
      ;-1 != a.indexOf('>') && (a = a.replace(gd, '&gt;'))
      ;-1 != a.indexOf('"') && (a = a.replace(hd, '&quot;'))
      ;-1 != a.indexOf("'") && (a = a.replace(id, '&#39;'))
      ;-1 != a.indexOf('\x00') && (a = a.replace(jd, '&#0;'))
    }
    return a
  }
  od = {}
  _.pd = function (a, b) {
    this.CB = b === od ? a : ''
  }
  _.h = _.pd.prototype
  _.h.Bh = !0
  _.h.nd = function () {
    return this.CB.toString()
  }
  _.h.fA = !0
  _.h.th = function () {
    return 1
  }
  _.h.toString = function () {
    return this.CB + ''
  }
  _.qd = function (a) {
    if (a instanceof _.pd && a.constructor === _.pd) return a.CB
    _.$a(a)
    return 'type_error:TrustedResourceUrl'
  }
  _.rd = function (a) {
    return _.qd(a).toString()
  }
  _.sd = function (a) {
    var b = _.Kb()
    a = b ? b.createScriptURL(a) : a
    return new _.pd(a, od)
  }
  _.td = function (a) {
    return _.sd(_.Ob(a))
  }
  _.ud = function (a) {
    if (a instanceof _.Sb && a.constructor === _.Sb) return a.BB
    _.$a(a)
    return 'type_error:SafeUrl'
  }
  vd = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
  wd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
  xd = function (a) {
    a = String(a)
    a = a.replace(/(%0A|%0D)/g, '')
    var b = a.match(wd)
    return b && vd.test(b[1]) ? new _.Sb(a, _.Qb) : null
  }
  yd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
  _.zd = function (a) {
    if (a instanceof _.Sb) return a
    a = 'object' == typeof a && a.Bh ? a.nd() : String(a)
    return yd.test(a) ? new _.Sb(a, _.Qb) : xd(a)
  }
  _.Ad = function (a, b) {
    if (a instanceof _.Sb) return a
    a = 'object' == typeof a && a.Bh ? a.nd() : String(a)
    if (b && /^data:/i.test(a) && ((b = xd(a) || _.Tb), b.nd() == a)) return b
    yd.test(a) || (a = 'about:invalid#zClosurez')
    return new _.Sb(a, _.Qb)
  }
  _.Bd = function (a) {
    if (a instanceof _.cc) return a
    var b = 'object' == typeof a,
      c = null
    b && a.fA && (c = a.th())
    return _.ec(_.nd(b && a.Bh ? a.nd() : String(a)), c)
  }
  _.Cd = function (a, b) {
    if ((0, _.hc)()) for (; a.lastChild; ) a.removeChild(a.lastChild)
    a.innerHTML = _.dc(b)
  }
  _.Dd = function (a, b) {
    b = b instanceof _.Sb ? b : _.Ad(b)
    a.href = _.ud(b)
  }
  _.Ed = function (a, b, c, d) {
    a = a instanceof _.Sb ? a : _.Ad(a)
    b = b || _.D
    c = c instanceof _.Nb ? _.Ob(c) : c || ''
    return void 0 !== d ? b.open(_.ud(a), c, d, void 0) : b.open(_.ud(a), c)
  }
  _.Fd = function (a) {
    return (a = _.nd(a, void 0))
  }
  Gd = !_.rc || _.Pc(9)
  Hd = (!_.uc && !_.rc) || (_.rc && _.Pc(9)) || (_.uc && _.Nc('1.9.1'))
  _.Id = _.rc && !_.Nc('9')
  _.Jd = _.rc || _.qc || _.vc
  _.Kd = _.rc && !_.Pc(9)
  var Qd, Ud
  _.Nd = function (a) {
    return a ? new _.Ld(_.Md(a)) : cd || (cd = new _.Ld())
  }
  _.Od = function (a, b) {
    return 'string' === typeof b ? a.getElementById(b) : b
  }
  _.Pd = function (a, b, c, d) {
    a = d || a
    b = b && '*' != b ? String(b).toUpperCase() : ''
    if (a.querySelectorAll && a.querySelector && (b || c))
      return a.querySelectorAll(b + (c ? '.' + c : ''))
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c)
      if (b) {
        d = {}
        for (var e = 0, f = 0, g; (g = a[f]); f++)
          b == g.nodeName && (d[e++] = g)
        d.length = e
        return d
      }
      return a
    }
    a = a.getElementsByTagName(b || '*')
    if (c) {
      d = {}
      for (f = e = 0; (g = a[f]); f++)
        (b = g.className),
          'function' == typeof b.split &&
            _.Xa(b.split(/\s+/), c) &&
            (d[e++] = g)
      d.length = e
      return d
    }
    return a
  }
  _.Rd = function (a, b) {
    _.zb(b, function (c, d) {
      c && 'object' == typeof c && c.Bh && (c = c.nd())
      'style' == d
        ? (a.style.cssText = c)
        : 'class' == d
        ? (a.className = c)
        : 'for' == d
        ? (a.htmlFor = c)
        : Qd.hasOwnProperty(d)
        ? a.setAttribute(Qd[d], c)
        : _.dd(d, 'aria-') || _.dd(d, 'data-')
        ? a.setAttribute(d, c)
        : (a[d] = c)
    })
  }
  Qd = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width',
  }
  _.Sd = function (a) {
    return a ? a.parentWindow || a.defaultView : window
  }
  _.Vd = function (a, b) {
    var c = String(b[0]),
      d = b[1]
    if (!Gd && d && (d.name || d.type)) {
      c = ['<', c]
      d.name && c.push(' name="', _.Fd(d.name), '"')
      if (d.type) {
        c.push(' type="', _.Fd(d.type), '"')
        var e = {}
        _.Bb(e, d)
        delete e.type
        d = e
      }
      c.push('>')
      c = c.join('')
    }
    c = _.Td(a, c)
    d &&
      ('string' === typeof d
        ? (c.className = d)
        : Array.isArray(d)
        ? (c.className = d.join(' '))
        : _.Rd(c, d))
    2 < b.length && Ud(a, c, b, 2)
    return c
  }
  Ud = function (a, b, c, d) {
    function e(k) {
      k && b.appendChild('string' === typeof k ? a.createTextNode(k) : k)
    }
    for (; d < c.length; d++) {
      var f = c[d]
      if (!_.eb(f) || (_.Ya(f) && 0 < f.nodeType)) e(f)
      else {
        a: {
          if (f && 'number' == typeof f.length) {
            if (_.Ya(f)) {
              var g = 'function' == typeof f.item || 'string' == typeof f.item
              break a
            }
            if ('function' === typeof f) {
              g = 'function' == typeof f.item
              break a
            }
          }
          g = !1
        }
        _.lb(g ? _.Vc(f) : f, e)
      }
    }
  }
  _.Wd = function (a) {
    return _.Td(document, a)
  }
  _.Td = function (a, b) {
    b = String(b)
    'application/xhtml+xml' === a.contentType && (b = b.toLowerCase())
    return a.createElement(b)
  }
  _.Yd = function (a) {
    if (1 != a.nodeType) return !1
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1
    }
    return !0
  }
  _.Zd = function (a, b) {
    Ud(_.Md(a), a, arguments, 1)
  }
  _.$d = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b)
  }
  _.ae = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
  }
  _.be = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  }
  _.ce = function (a) {
    var b,
      c = a.parentNode
    if (c && 11 != c.nodeType) {
      if (a.removeNode) return a.removeNode(!1)
      for (; (b = a.firstChild); ) c.insertBefore(b, a)
      return _.be(a)
    }
  }
  _.de = function (a) {
    return Hd && void 0 != a.children
      ? a.children
      : _.mb(a.childNodes, function (b) {
          return 1 == b.nodeType
        })
  }
  _.ee = function (a) {
    return _.Ya(a) && 1 == a.nodeType
  }
  _.fe = function (a, b) {
    if (!a || !b) return !1
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b)
    if ('undefined' != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16)
    for (; b && a != b; ) b = b.parentNode
    return b == a
  }
  _.Md = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  _.ge = function (a, b) {
    if ('textContent' in a) a.textContent = b
    else if (3 == a.nodeType) a.data = String(b)
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild)
      a.firstChild.data = String(b)
    } else _.$d(a), a.appendChild(_.Md(a).createTextNode(String(b)))
  }
  _.Ld = function (a) {
    this.nb = a || _.D.document || document
  }
  _.h = _.Ld.prototype
  _.h.Fa = _.Nd
  _.h.uC = _.ja(7)
  _.h.tb = function () {
    return this.nb
  }
  _.h.H = function (a) {
    return _.Od(this.nb, a)
  }
  _.h.getElementsByTagName = function (a, b) {
    return (b || this.nb).getElementsByTagName(String(a))
  }
  _.h.ta = function (a, b, c) {
    return _.Vd(this.nb, arguments)
  }
  _.h.createElement = function (a) {
    return _.Td(this.nb, a)
  }
  _.h.createTextNode = function (a) {
    return this.nb.createTextNode(String(a))
  }
  _.h.wb = function () {
    var a = this.nb
    return a.parentWindow || a.defaultView
  }
  _.h.appendChild = function (a, b) {
    a.appendChild(b)
  }
  _.h.append = _.Zd
  _.h.canHaveChildren = _.Yd
  _.h.Id = _.$d
  _.h.uI = _.ae
  _.h.removeNode = _.be
  _.h.ZQ = _.ce
  _.h.Ry = _.de
  _.h.isElement = _.ee
  _.h.contains = _.fe
  _.h.Eh = _.ja(8)
  /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  _.he = window
  _.ie = document
  _.je = _.he.location
  _.ke = /\[native code\]/
  _.le = function (a, b, c) {
    return (a[b] = a[b] || c)
  }
  _.me = function () {
    var a
    if ((a = Object.create) && _.ke.test(a)) a = a(null)
    else {
      a = {}
      for (var b in a) a[b] = void 0
    }
    return a
  }
  _.ne = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  _.oe = function (a, b) {
    a = a || {}
    for (var c in a) _.ne(a, c) && (b[c] = a[c])
  }
  _.qe = _.le(_.he, 'gapi', {})
  _.se = function (a, b, c) {
    var d = new RegExp('([#].*&|[#])' + b + '=([^&#]*)', 'g')
    b = new RegExp('([?#].*&|[?#])' + b + '=([^&#]*)', 'g')
    if ((a = a && (d.exec(a) || b.exec(a))))
      try {
        c = decodeURIComponent(a[2])
      } catch (e) {}
    return c
  }
  _.te = new RegExp(
    /^/.source +
      /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source +
      /(\/\/[^\/?#]*)?/.source +
      /([^?#]*)?/.source +
      /(\?([^#]*))?/.source +
      /(#((#|[^#])*))?/.source +
      /$/.source
  )
  _.ue = new RegExp(
    /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source +
      /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
    'g'
  )
  _.ve = new RegExp(
    /\/?\??#?/.source +
      '(' +
      /[\/?#]/i.source +
      '|' +
      /[\uD800-\uDBFF]/i.source +
      '|' +
      /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source +
      '|' +
      /%[0-9a-f]?/i.source +
      ')$',
    'i'
  )
  _.xe = function (a, b, c) {
    _.we(a, b, c, 'add', 'at')
  }
  _.we = function (a, b, c, d, e) {
    if (a[d + 'EventListener']) a[d + 'EventListener'](b, c, !1)
    else if (a[e + 'tachEvent']) a[e + 'tachEvent']('on' + b, c)
  }
  _.ye = _.le(_.he, '___jsl', _.me())
  _.le(_.ye, 'I', 0)
  _.le(_.ye, 'hel', 10)
  var ze, Ae, Be, Ce, De, Ee, Fe
  ze = function (a) {
    var b = (window.___jsl = window.___jsl || {})
    b[a] = b[a] || []
    return b[a]
  }
  Ae = function (a) {
    var b = (window.___jsl = window.___jsl || {})
    b.cfg = (!a && b.cfg) || {}
    return b.cfg
  }
  Be = function (a) {
    return 'object' === typeof a && /\[native code\]/.test(a.push)
  }
  Ce = function (a, b, c) {
    if (b && 'object' === typeof b)
      for (var d in b)
        !Object.prototype.hasOwnProperty.call(b, d) ||
          (c && '___goc' === d && 'undefined' === typeof b[d]) ||
          (a[d] &&
          b[d] &&
          'object' === typeof a[d] &&
          'object' === typeof b[d] &&
          !Be(a[d]) &&
          !Be(b[d])
            ? Ce(a[d], b[d])
            : b[d] && 'object' === typeof b[d]
            ? ((a[d] = Be(b[d]) ? [] : {}), Ce(a[d], b[d]))
            : (a[d] = b[d]))
  }
  De = function (a) {
    if (a && !/^\s+$/.test(a)) {
      for (; 0 == a.charCodeAt(a.length - 1); ) a = a.substring(0, a.length - 1)
      try {
        var b = window.JSON.parse(a)
      } catch (c) {}
      if ('object' === typeof b) return b
      try {
        b = new Function('return (' + a + '\n)')()
      } catch (c) {}
      if ('object' === typeof b) return b
      try {
        b = new Function('return ({' + a + '\n})')()
      } catch (c) {}
      return 'object' === typeof b ? b : {}
    }
  }
  Ee = function (a, b) {
    var c = { ___goc: void 0 }
    a.length &&
      a[a.length - 1] &&
      Object.hasOwnProperty.call(a[a.length - 1], '___goc') &&
      'undefined' === typeof a[a.length - 1].___goc &&
      (c = a.pop())
    Ce(c, b)
    a.push(c)
  }
  Fe = function (a) {
    Ae(!0)
    var b = window.___gcfg,
      c = ze('cu'),
      d = window.___gu
    b && b !== d && (Ee(c, b), (window.___gu = b))
    b = ze('cu')
    var e = document.scripts || document.getElementsByTagName('script') || []
    d = []
    var f = []
    f.push.apply(f, ze('us'))
    for (var g = 0; g < e.length; ++g)
      for (var k = e[g], l = 0; l < f.length; ++l)
        k.src && 0 == k.src.indexOf(f[l]) && d.push(k)
    0 == d.length &&
      0 < e.length &&
      e[e.length - 1].src &&
      d.push(e[e.length - 1])
    for (e = 0; e < d.length; ++e)
      d[e].getAttribute('gapi_processed') ||
        (d[e].setAttribute('gapi_processed', !0),
        (f = d[e])
          ? ((g = f.nodeType),
            (f = 3 == g || 4 == g ? f.nodeValue : f.textContent || ''))
          : (f = void 0),
        (f = De(f)) && b.push(f))
    a && Ee(c, a)
    d = ze('cd')
    a = 0
    for (b = d.length; a < b; ++a) Ce(Ae(), d[a], !0)
    d = ze('ci')
    a = 0
    for (b = d.length; a < b; ++a) Ce(Ae(), d[a], !0)
    a = 0
    for (b = c.length; a < b; ++a) Ce(Ae(), c[a], !0)
  }
  _.R = function (a, b) {
    var c = Ae()
    if (!a) return c
    a = a.split('/')
    for (var d = 0, e = a.length; c && 'object' === typeof c && d < e; ++d)
      c = c[a[d]]
    return d === a.length && void 0 !== c ? c : b
  }
  _.Ge = function (a, b) {
    var c
    if ('string' === typeof a) {
      var d = (c = {})
      a = a.split('/')
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var g = {}
        d = d[a[e]] = g
      }
      d[a[e]] = b
    } else c = a
    Fe(c)
  }
  var He = function () {
    var a = window.__GOOGLEAPIS
    a &&
      (a.googleapis &&
        !a['googleapis.config'] &&
        (a['googleapis.config'] = a.googleapis),
      _.le(_.ye, 'ci', []).push(a),
      (window.__GOOGLEAPIS = void 0))
  }
  He && He()
  Fe()
  _.L('gapi.config.get', _.R)
  _.L('gapi.config.update', _.Ge)

  _.Ie = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c]
      if (_.eb(d)) {
        var e = a.length || 0,
          f = d.length || 0
        a.length = e + f
        for (var g = 0; g < f; g++) a[e + g] = d[g]
      } else a.push(d)
    }
  }
  _.Je = function (a) {
    for (var b = {}, c = 0, d = 0; d < a.length; ) {
      var e = a[d++]
      var f = e
      f = _.Ya(f) ? 'o' + _.bd(f) : (typeof f).charAt(0) + f
      Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e))
    }
    a.length = c
  }
  _.Ke = function (a) {
    return /^[\s\xa0]*$/.test(a)
  }
  _.Le = function (a, b) {
    var c = b || document
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]
    else {
      c = document
      var d = b || c
      a =
        d.querySelectorAll && d.querySelector && a
          ? d.querySelector(a ? '.' + a : '')
          : _.Pd(c, '*', a, b)[0] || null
    }
    return a || null
  }

  _.xh = function (a) {
    var b = (window.___jsl = window.___jsl || {})
    b.cfg = (!a && b.cfg) || {}
    return b.cfg
  }
  _.yh = function (a) {
    var b = _.xh()
    if (!a) return b
    a = a.split('/')
    for (var c = 0, d = a.length; b && 'object' === typeof b && c < d; ++c)
      b = b[a[c]]
    return c === a.length && void 0 !== b ? b : void 0
  }

  var Re,
    Se,
    Te,
    Ue,
    Ve,
    We,
    Xe,
    Ye,
    Ze,
    $e,
    af,
    bf,
    cf,
    df,
    ef,
    ff,
    gf,
    hf,
    jf,
    kf,
    lf,
    mf,
    nf,
    of,
    pf,
    qf,
    rf,
    sf,
    tf,
    uf,
    vf,
    yf,
    zf
  Te = void 0
  Ue = function (a) {
    try {
      return _.D.JSON.parse.call(_.D.JSON, a)
    } catch (b) {
      return !1
    }
  }
  Ve = function (a) {
    return Object.prototype.toString.call(a)
  }
  We = Ve(0)
  Xe = Ve(new Date(0))
  Ye = Ve(!0)
  Ze = Ve('')
  $e = Ve({})
  af = Ve([])
  bf = function (a, b) {
    if (b)
      for (var c = 0, d = b.length; c < d; ++c)
        if (a === b[c])
          throw new TypeError('Converting circular structure to JSON')
    d = typeof a
    if ('undefined' !== d) {
      c = Array.prototype.slice.call(b || [], 0)
      c[c.length] = a
      b = []
      var e = Ve(a)
      if (
        null != a &&
        'function' === typeof a.toJSON &&
        (Object.prototype.hasOwnProperty.call(a, 'toJSON') ||
          ((e !== af ||
            (a.constructor !== Array && a.constructor !== Object)) &&
            (e !== $e ||
              (a.constructor !== Array && a.constructor !== Object)) &&
            e !== Ze &&
            e !== We &&
            e !== Ye &&
            e !== Xe))
      )
        return bf(a.toJSON.call(a), c)
      if (null == a) b[b.length] = 'null'
      else if (e === We)
        (a = Number(a)),
          isNaN(a) || isNaN(a - a)
            ? (a = 'null')
            : -0 === a && 0 > 1 / a && (a = '-0'),
          (b[b.length] = String(a))
      else if (e === Ye) b[b.length] = String(!!Number(a))
      else {
        if (e === Xe) return bf(a.toISOString.call(a), c)
        if (e === af && Ve(a.length) === We) {
          b[b.length] = '['
          var f = 0
          for (d = Number(a.length) >> 0; f < d; ++f)
            f && (b[b.length] = ','), (b[b.length] = bf(a[f], c) || 'null')
          b[b.length] = ']'
        } else if (e == Ze && Ve(a.length) === We) {
          b[b.length] = '"'
          f = 0
          for (c = Number(a.length) >> 0; f < c; ++f)
            (d = String.prototype.charAt.call(a, f)),
              (e = String.prototype.charCodeAt.call(a, f)),
              (b[b.length] =
                '\b' === d
                  ? '\\b'
                  : '\f' === d
                  ? '\\f'
                  : '\n' === d
                  ? '\\n'
                  : '\r' === d
                  ? '\\r'
                  : '\t' === d
                  ? '\\t'
                  : '\\' === d || '"' === d
                  ? '\\' + d
                  : 31 >= e
                  ? '\\u' + (e + 65536).toString(16).substr(1)
                  : 32 <= e && 65535 >= e
                  ? d
                  : '\ufffd')
          b[b.length] = '"'
        } else if ('object' === d) {
          b[b.length] = '{'
          d = 0
          for (f in a)
            Object.prototype.hasOwnProperty.call(a, f) &&
              ((e = bf(a[f], c)),
              void 0 !== e &&
                (d++ && (b[b.length] = ','),
                (b[b.length] = bf(f)),
                (b[b.length] = ':'),
                (b[b.length] = e)))
          b[b.length] = '}'
        } else return
      }
      return b.join('')
    }
  }
  cf = /[\0-\x07\x0b\x0e-\x1f]/
  df = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/
  ef = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/
  ff = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/
  gf = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g
  hf = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g
  jf = /[ \t\n\r]+/g
  kf = /[^"]:/
  lf = /""/g
  mf = /true|false|null/g
  nf = /00/
  of = /[\{]([^0\}]|0[^:])/
  pf = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/
  qf = /[^\[,:][\[\{]/
  rf = /^(\{|\}|\[|\]|,|:|0)+/
  sf = /\u2028/g
  tf = /\u2029/g
  uf = function (a) {
    a = String(a)
    if (cf.test(a) || df.test(a) || ef.test(a) || ff.test(a)) return !1
    var b = a.replace(gf, '""')
    b = b.replace(hf, '0')
    b = b.replace(jf, '')
    if (kf.test(b)) return !1
    b = b.replace(lf, '0')
    b = b.replace(mf, '0')
    if (
      nf.test(b) ||
      of.test(b) ||
      pf.test(b) ||
      qf.test(b) ||
      !b ||
      (b = b.replace(rf, ''))
    )
      return !1
    a = a.replace(sf, '\\u2028').replace(tf, '\\u2029')
    b = void 0
    try {
      b = Te
        ? [Ue(a)]
        : eval(
            '(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n' +
              a +
              '\n)'
          )
    } catch (c) {
      return !1
    }
    return b && 1 === b.length ? b[0] : !1
  }
  vf = function () {
    var a = ((_.D.document || {}).scripts || []).length
    if ((void 0 === Re || void 0 === Te || Se !== a) && -1 !== Se) {
      Re = Te = !1
      Se = -1
      try {
        try {
          Te =
            !!_.D.JSON &&
            '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' ===
              _.D.JSON.stringify.call(_.D.JSON, {
                a: [3, !0, new Date(0)],
                c: function () {},
              }) &&
            !0 === Ue('true') &&
            3 === Ue('[{"a":3}]')[0].a
        } catch (b) {}
        Re =
          Te && !Ue('[00]') && !Ue('"\u0007"') && !Ue('"\\0"') && !Ue('"\\v"')
      } finally {
        Se = a
      }
    }
  }
  _.wf = function (a) {
    if (-1 === Se) return !1
    vf()
    return (Re ? Ue : uf)(a)
  }
  _.xf = function (a) {
    if (-1 !== Se)
      return vf(), Te ? _.D.JSON.stringify.call(_.D.JSON, a) : bf(a)
  }
  yf =
    !Date.prototype.toISOString ||
    'function' !== typeof Date.prototype.toISOString ||
    '1970-01-01T00:00:00.000Z' !== new Date(0).toISOString()
  zf = function () {
    var a = Date.prototype.getUTCFullYear.call(this)
    return [
      0 > a
        ? '-' + String(1e6 - a).substr(1)
        : 9999 >= a
        ? String(1e4 + a).substr(1)
        : '+' + String(1e6 + a).substr(1),
      '-',
      String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
      '-',
      String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
      'T',
      String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
      ':',
      String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
      ':',
      String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
      '.',
      String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
      'Z',
    ].join('')
  }
  Date.prototype.toISOString = yf ? zf : Date.prototype.toISOString

  var Af
  Af = window.console
  _.Bf = function (a) {
    Af && Af.log && Af.log(a)
  }
  _.Cf = function (a) {
    Af && (Af.error ? Af.error(a) : Af.log && Af.log(a))
  }
  _.Df = function (a) {
    Af && (Af.warn ? Af.warn(a) : Af.log && Af.log(a))
  }
  _.Ef = function () {}

  _.pg = function (a) {
    if (!a) return ''
    a = a.split('#')[0].split('?')[0]
    a = a.toLowerCase()
    0 == a.indexOf('//') && (a = window.location.protocol + a)
    ;/^[\w\-]*:\/\//.test(a) || (a = window.location.href)
    var b = a.substring(a.indexOf('://') + 3),
      c = b.indexOf('/')
    ;-1 != c && (b = b.substring(0, c))
    c = a.substring(0, a.indexOf('://'))
    if (!c) throw Error('s`' + a)
    if (
      'http' !== c &&
      'https' !== c &&
      'chrome-extension' !== c &&
      'moz-extension' !== c &&
      'file' !== c &&
      'android-app' !== c &&
      'chrome-search' !== c &&
      'chrome-untrusted' !== c &&
      'chrome' !== c &&
      'app' !== c &&
      'devtools' !== c
    )
      throw Error('t`' + c)
    a = ''
    var d = b.indexOf(':')
    if (-1 != d) {
      var e = b.substring(d + 1)
      b = b.substring(0, d)
      if (('http' === c && '80' !== e) || ('https' === c && '443' !== e))
        a = ':' + e
    }
    return c + '://' + b + a
  }

  var ql = function () {
    this.Sr = {
      rK: gl ? '../' + gl : null,
      iy: hl,
      pH: il,
      h9: jl,
      Zt: nl,
      U9: ol,
    }
    this.$e = _.he
    this.cK = this.nQ
    this.cR = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent)
    if (this.Sr.rK) {
      this.$e = this.Sr.pH(this.$e, this.Sr.rK)
      var a = this.$e.document,
        b = a.createElement('script')
      b.setAttribute('type', 'text/javascript')
      b.text =
        'window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};'
      a.body.appendChild(b)
      this.cK = this.$e.doPostMsg
    }
    this.NC = {}
    this.mD = {}
    a = (0, _.Q)(this.Kz, this)
    _.xe(this.$e, 'message', a)
    _.le(_.ye, 'RPMQ', []).push(a)
    this.$e != this.$e.parent &&
      pl(this, this.$e.parent, this.KA(this.$e.name), '*')
  }
  ql.prototype.KA = function (a) {
    return '{"h":"' + escape(a) + '"}'
  }
  var rl = function (a) {
      var b = null
      0 === a.indexOf('{"h":"') &&
        a.indexOf('"}') === a.length - 2 &&
        (b = unescape(a.substring(6, a.length - 2)))
      return b
    },
    sl = function (a) {
      if (!/^\s*{/.test(a)) return !1
      a = _.wf(a)
      return null !== a && 'object' === typeof a && !!a.g
    }
  ql.prototype.Kz = function (a) {
    var b = String(a.data)
    ;(0, _.Ef)(
      'gapix.rpc.receive(' +
        jl +
        '): ' +
        (!b || 512 >= b.length
          ? b
          : b.substr(0, 512) + '... (' + b.length + ' bytes)')
    )
    var c = 0 !== b.indexOf('!_')
    c || (b = b.substring(2))
    var d = sl(b)
    if (!c && !d) {
      if (!d && (c = rl(b))) {
        if (this.NC[c]) this.NC[c]()
        else this.mD[c] = 1
        return
      }
      var e = a.origin,
        f = this.Sr.iy
      this.cR
        ? _.he.setTimeout(function () {
            f(b, e)
          }, 0)
        : f(b, e)
    }
  }
  ql.prototype.Gc = function (a, b) {
    '..' === a || this.mD[a] ? (b(), delete this.mD[a]) : (this.NC[a] = b)
  }
  var pl = function (a, b, c, d) {
    var e = sl(c) ? '' : '!_'
    ;(0, _.Ef)(
      'gapix.rpc.send(' +
        jl +
        '): ' +
        (!c || 512 >= c.length
          ? c
          : c.substr(0, 512) + '... (' + c.length + ' bytes)')
    )
    a.cK(b, e + c, d)
  }
  ql.prototype.nQ = function (a, b, c) {
    a.postMessage(b, c)
  }
  ql.prototype.send = function (a, b, c) {
    ;(a = this.Sr.pH(this.$e, a)) && !a.closed && pl(this, a, b, c)
  }
  var tl,
    ul,
    vl,
    wl,
    xl,
    yl,
    zl,
    gl,
    jl,
    Al,
    Bl,
    Cl,
    Dl,
    il,
    nl,
    El,
    Fl,
    Kl,
    Ll,
    Nl,
    ol,
    Pl,
    Ol,
    Gl,
    Hl,
    Ql,
    hl,
    Rl,
    Sl
  tl = 0
  ul = []
  vl = {}
  wl = {}
  xl = _.he.location.href
  yl = _.se(xl, 'rpctoken')
  zl = _.se(xl, 'parent') || _.ie.referrer
  gl = _.se(xl, 'rly')
  jl = gl || ((_.he !== _.he.top || _.he.opener) && _.he.name) || '..'
  Al = null
  Bl = {}
  Cl = function () {}
  Dl = { send: Cl, Gc: Cl, KA: Cl }
  il = function (a, b) {
    '/' == b.charAt(0) && ((b = b.substring(1)), (a = _.he.top))
    if (0 === b.length) return a
    for (b = b.split('/'); b.length; ) {
      var c = b.shift()
      '{' == c.charAt(0) &&
        '}' == c.charAt(c.length - 1) &&
        (c = c.substring(1, c.length - 1))
      if ('..' === c) a = a == a.parent ? a.opener : a.parent
      else if ('..' !== c && a.frames[c]) {
        if (((a = a.frames[c]), !('postMessage' in a))) throw 'Not a window'
      } else return null
    }
    return a
  }
  nl = function (a) {
    return (a = vl[a]) && a.Dk
  }
  El = function (a) {
    if (a.f in {}) return !1
    var b = a.t,
      c = vl[a.r]
    a = a.origin
    return (
      c && (c.Dk === b || (!c.Dk && !b)) && (a === c.origin || '*' === c.origin)
    )
  }
  Fl = function (a) {
    var b = a.id.split('/'),
      c = b[b.length - 1],
      d = a.origin
    return function (e) {
      var f = e.origin
      return e.f == c && (d == f || '*' == d)
    }
  }
  _.Il = function (a, b, c) {
    a = Gl(a)
    wl[a.name] = { Gg: b, xq: a.xq, ro: c || El }
    Hl()
  }
  _.L('gapix.rpc.register', _.Il)
  _.Jl = function (a) {
    delete wl[Gl(a).name]
  }
  _.L('gapix.rpc.unregister', _.Jl)
  Kl = {}
  Ll = function (a, b) {
    ;(a = Kl['_' + a]) && a[1](this) && a[0].call(this, b)
  }
  Nl = function (a) {
    var b = a.c
    if (!b) return Cl
    var c = a.r,
      d = a.g ? 'legacy__' : ''
    return function () {
      var e = [].slice.call(arguments, 0)
      e.unshift(c, d + '__cb', null, b)
      _.Ml.apply(null, e)
    }
  }
  ol = function (a) {
    Al = a
  }
  Pl = function (a) {
    Bl[a] ||
      (Bl[a] = _.he.setTimeout(function () {
        Bl[a] = !1
        Ol(a)
      }, 0))
  }
  Ol = function (a) {
    var b = vl[a]
    if (b && b.ready) {
      var c = b.EB
      for (b.EB = []; c.length; ) Dl.send(a, _.xf(c.shift()), b.origin)
    }
  }
  Gl = function (a) {
    return 0 === a.indexOf('legacy__')
      ? { name: a.substring(8), xq: !0 }
      : { name: a, xq: !1 }
  }
  Hl = function () {
    for (
      var a = _.yh('rpc/residenceSec') || 60,
        b = new Date().getTime() / 1e3,
        c = 0,
        d;
      (d = ul[c]);
      ++c
    ) {
      var e = d.rpc
      if (!e || (0 < a && b - d.timestamp > a)) ul.splice(c, 1), --c
      else {
        var f = e.s,
          g = wl[f] || wl['*']
        if (g)
          if (
            (ul.splice(c, 1),
            --c,
            (e.origin = d.origin),
            (d = Nl(e)),
            (e.callback = d),
            g.ro(e))
          ) {
            if ('__cb' !== f && !!g.xq != !!e.g) break
            e = g.Gg.apply(e, e.a)
            void 0 !== e && d(e)
          } else (0, _.Ef)('gapix.rpc.rejected(' + jl + '): ' + f)
      }
    }
  }
  Ql = function (a, b, c) {
    ul.push({ rpc: a, origin: b, timestamp: new Date().getTime() / 1e3 })
    c || Hl()
  }
  hl = function (a, b) {
    a = _.wf(a)
    Ql(a, b, !1)
  }
  Rl = function (a) {
    for (; a.length; ) Ql(a.shift(), this.origin, !0)
    Hl()
  }
  Sl = function (a) {
    var b = !1
    a = a.split('|')
    var c = a[0]
    0 <= c.indexOf('/') && (b = !0)
    return { id: c, origin: a[1] || '*', sA: b }
  }
  _.Tl = function (a, b, c, d) {
    var e = Sl(a)
    d && (_.he.frames[e.id] = _.he.frames[e.id] || d)
    a = e.id
    if (!vl.hasOwnProperty(a)) {
      c = c || null
      d = e.origin
      if ('..' === a) (d = _.pg(zl)), (c = c || yl)
      else if (!e.sA) {
        var f = _.ie.getElementById(a)
        f && ((f = f.src), (d = _.pg(f)), (c = c || _.se(f, 'rpctoken')))
      }
      ;('*' === e.origin && d) || (d = e.origin)
      vl[a] = {
        Dk: c,
        EB: [],
        origin: d,
        PX: b,
        lK: function () {
          var g = a
          vl[g].ready = 1
          Ol(g)
        },
      }
      Dl.Gc(a, vl[a].lK)
    }
    return vl[a].lK
  }
  _.L('gapix.rpc.setup', _.Tl)
  _.Ml = function (a, b, c, d) {
    a = a || '..'
    _.Tl(a)
    a = a.split('|', 1)[0]
    var e = b,
      f = [].slice.call(arguments, 3),
      g = c,
      k = jl,
      l = yl,
      m = vl[a],
      n = k,
      r = Sl(a)
    if (m && '..' !== a) {
      if (r.sA) {
        if (!(l = vl[a].PX)) {
          l = Al ? Al.substring(1).split('/') : [jl]
          n = l.length - 1
          for (var u = _.he.parent; u !== _.he.top; ) {
            var q = u.parent
            if (!n--) {
              for (var v = null, t = q.frames.length, w = 0; w < t; ++w)
                q.frames[w] == u && (v = w)
              l.unshift('{' + v + '}')
            }
            u = q
          }
          l = '/' + l.join('/')
        }
        n = l
      } else n = k = '..'
      l = m.Dk
    }
    g && r
      ? ((m = El), r.sA && (m = Fl(r)), (Kl['_' + ++tl] = [g, m]), (g = tl))
      : (g = null)
    f = { s: e, f: k, r: n, t: l, c: g, a: f }
    e = Gl(e)
    f.s = e.name
    f.g = e.xq
    vl[a].EB.push(f)
    Pl(a)
  }
  _.L('gapix.rpc.call', _.Ml)
  _.Ul = function (a, b) {
    _.Tl(a)()
    Dl.send(a, Dl.KA(b), '*')
  }
  _.L('gapix.rpc.sendHandshake', _.Ul)
  if (
    'function' === typeof _.he.postMessage ||
    'object' === typeof _.he.postMessage
  )
    (Dl = new ql()),
      _.Il('__cb', Ll, function () {
        return !0
      }),
      _.Il('_processBatch', Rl, function () {
        return !0
      }),
      _.Tl('..')

  _.mg = (window.gapi || {}).load

  _.dn = _.le(_.ye, 'rw', _.me())

  var en = function (a, b) {
    ;(a = _.dn[a]) && a.state < b && (a.state = b)
  }
  var fn = function (a) {
    a = (a = _.dn[a]) ? a.oid : void 0
    if (a) {
      var b = _.ie.getElementById(a)
      b && b.parentNode.removeChild(b)
      delete _.dn[a]
      fn(a)
    }
  }
  _.gn = function (a) {
    a = a.container
    'string' === typeof a && (a = document.getElementById(a))
    return a
  }
  _.hn = function (a) {
    var b = a.clientWidth
    return (
      'position:absolute;top:-10000px;width:' +
      (b ? b + 'px' : a.style.width || '300px') +
      ';margin:0px;border-style:none;'
    )
  }
  _.jn = function (a, b) {
    var c = {},
      d = a.jc(),
      e = b && b.width,
      f = b && b.height,
      g = b && b.verticalAlign
    g && (c.verticalAlign = g)
    e || (e = d.width || a.width)
    f || (f = d.height || a.height)
    d.width = c.width = e
    d.height = c.height = f
    d = a.Ka()
    e = a.ma()
    en(e, 2)
    a: {
      e = a.Ab()
      c = c || {}
      if (_.ye.oa) {
        var k = d.id
        if (k) {
          f = (f = _.dn[k]) ? f.state : void 0
          if (1 === f || 4 === f) break a
          fn(k)
        }
      }
      ;(f = e.nextSibling) &&
        f.getAttribute &&
        f.getAttribute('data-gapistub') &&
        (e.parentNode.removeChild(f), (e.style.cssText = ''))
      f = c.width
      g = c.height
      var l = e.style
      l.textIndent = '0'
      l.margin = '0'
      l.padding = '0'
      l.background = 'transparent'
      l.borderStyle = 'none'
      l.cssFloat = 'none'
      l.styleFloat = 'none'
      l.lineHeight = 'normal'
      l.fontSize = '1px'
      l.verticalAlign = 'baseline'
      e = e.style
      e.display = 'inline-block'
      d = d.style
      d.position = 'static'
      d.left = '0'
      d.top = '0'
      d.visibility = 'visible'
      f && (e.width = d.width = f + 'px')
      g && (e.height = d.height = g + 'px')
      c.verticalAlign && (e.verticalAlign = c.verticalAlign)
      k && en(k, 3)
    }
    ;(k = b ? b.title : null) && a.Ka().setAttribute('title', k)
    ;(b = b ? b.ariaLabel : null) && a.Ka().setAttribute('aria-label', b)
  }
  _.kn = function (a) {
    var b = a.Ab()
    b && b.removeChild(a.Ka())
  }
  _.ln = function (a) {
    a.where = _.gn(a)
    var b = (a.messageHandlers = a.messageHandlers || {}),
      c = function (e) {
        _.jn(this, e)
      }
    b._ready = c
    b._renderstart = c
    var d = a.onClose
    a.onClose = function (e) {
      d && d.call(this, e)
      _.kn(this)
    }
    a.onCreate = function (e) {
      e = e.Ka()
      e.style.cssText = _.hn(e)
    }
  }

  _.Qe = (function () {
    var a = window.gadgets && window.gadgets.config && window.gadgets.config.get
    a && _.Ge(a())
    return {
      register: function (b, c, d) {
        d && d(_.R())
      },
      get: function (b) {
        return _.R(b)
      },
      update: function (b, c) {
        if (c) throw 'Config replacement is not supported'
        _.Ge(b)
      },
      init: function () {},
    }
  })()
  _.L('gadgets.config.register', _.Qe.register)
  _.L('gadgets.config.get', _.Qe.get)
  _.L('gadgets.config.init', _.Qe.init)
  _.L('gadgets.config.update', _.Qe.update)

  _.L('gadgets.json.stringify', _.xf)
  _.L('gadgets.json.parse', _.wf)

  ;(function () {
    function a(e, f) {
      if (!(e < c) && d)
        if (2 === e && d.warn) d.warn(f)
        else if (3 === e && d.error)
          try {
            d.error(f)
          } catch (g) {}
        else d.log && d.log(f)
    }
    var b = function (e) {
      a(1, e)
    }
    _.Ne = function (e) {
      a(2, e)
    }
    _.Oe = function (e) {
      a(3, e)
    }
    _.Pe = function () {}
    b.INFO = 1
    b.WARNING = 2
    b.NONE = 4
    var c = 1,
      d = window.console
        ? window.console
        : window.opera
        ? window.opera.postError
        : void 0
    return b
  })()

  _.Me = _.Me || {}

  _.Me = _.Me || {}
  ;(function () {
    var a = []
    _.Me.registerOnLoadHandler = function (b) {
      a.push(b)
    }
    _.Me.H9 = function () {
      for (var b = 0, c = a.length; b < c; ++b) a[b]()
    }
  })()

  _.Me = _.Me || {}
  ;(function () {
    function a(c) {
      var d = 'undefined' === typeof c
      if (null !== b && d) return b
      var e = {}
      c = c || window.location.href
      var f = c.indexOf('?'),
        g = c.indexOf('#')
      c = (-1 === g
        ? c.substr(f + 1)
        : [c.substr(f + 1, g - f - 1), '&', c.substr(g + 1)].join('')
      ).split('&')
      f = window.decodeURIComponent ? decodeURIComponent : unescape
      g = 0
      for (var k = c.length; g < k; ++g) {
        var l = c[g].indexOf('=')
        if (-1 !== l) {
          var m = c[g].substring(0, l)
          l = c[g].substring(l + 1)
          l = l.replace(/\+/g, ' ')
          try {
            e[m] = f(l)
          } catch (n) {}
        }
      }
      d && (b = e)
      return e
    }
    var b = null
    _.Me.getUrlParameters = a
    a()
  })()
  _.L('gadgets.util.getUrlParameters', _.Me.getUrlParameters)

  _.Ff = function () {
    var a = _.ie.readyState
    return (
      'complete' === a ||
      ('interactive' === a && -1 == navigator.userAgent.indexOf('MSIE'))
    )
  }
  _.Gf = function (a) {
    if (_.Ff()) a()
    else {
      var b = !1,
        c = function () {
          if (!b) return (b = !0), a.apply(this, arguments)
        }
      _.he.addEventListener
        ? (_.he.addEventListener('load', c, !1),
          _.he.addEventListener('DOMContentLoaded', c, !1))
        : _.he.attachEvent &&
          (_.he.attachEvent('onreadystatechange', function () {
            _.Ff() && c.apply(this, arguments)
          }),
          _.he.attachEvent('onload', c))
    }
  }
  _.se(_.he.location.href, 'rpctoken') && _.xe(_.ie, 'unload', function () {})
  var Hf = Hf || {}
  Hf.HK = null
  Hf.sJ = null
  Hf.qu = null
  Hf.frameElement = null
  Hf = Hf || {}
  Hf.DD ||
    (Hf.DD = (function () {
      function a(f, g, k) {
        'undefined' != typeof window.addEventListener
          ? window.addEventListener(f, g, k)
          : 'undefined' != typeof window.attachEvent &&
            window.attachEvent('on' + f, g)
        'message' === f &&
          ((window.___jsl = window.___jsl || {}),
          (f = window.___jsl),
          (f.RPMQ = f.RPMQ || []),
          f.RPMQ.push(g))
      }
      function b(f) {
        var g = _.wf(f.data)
        if (g && g.f) {
          ;(0, _.Pe)('gadgets.rpc.receive(' + window.name + '): ' + f.data)
          var k = _.If.getTargetOrigin(g.f)
          e &&
          ('undefined' !== typeof f.origin
            ? f.origin !== k
            : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1])
            ? _.Oe(
                'Invalid rpc message origin. ' + k + ' vs ' + (f.origin || '')
              )
            : c(g, f.origin)
        }
      }
      var c,
        d,
        e = !0
      return {
        HG: function () {
          return 'wpm'
        },
        nV: function () {
          return !0
        },
        init: function (f, g) {
          _.Qe.register('rpc', null, function (k) {
            'true' === String(((k && k.rpc) || {}).disableForceSecure) &&
              (e = !1)
          })
          c = f
          d = g
          a('message', b, !1)
          d('..', !0)
          return !0
        },
        Gc: function (f) {
          d(f, !0)
          return !0
        },
        call: function (f, g, k) {
          var l = _.If.getTargetOrigin(f),
            m = _.If.hE(f)
          l
            ? window.setTimeout(function () {
                var n = _.xf(k)
                ;(0, _.Pe)('gadgets.rpc.send(' + window.name + '): ' + n)
                m.postMessage(n, l)
              }, 0)
            : '..' != f &&
              _.Oe(
                'No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message'
              )
          return !0
        },
      }
    })())
  if (window.gadgets && window.gadgets.rpc)
    ('undefined' != typeof _.If && _.If) ||
      ((_.If = window.gadgets.rpc),
      (_.If.config = _.If.config),
      (_.If.register = _.If.register),
      (_.If.unregister = _.If.unregister),
      (_.If.registerDefault = _.If.registerDefault),
      (_.If.unregisterDefault = _.If.unregisterDefault),
      (_.If.forceParentVerifiable = _.If.forceParentVerifiable),
      (_.If.call = _.If.call),
      (_.If.getRelayUrl = _.If.getRelayUrl),
      (_.If.setRelayUrl = _.If.setRelayUrl),
      (_.If.setAuthToken = _.If.setAuthToken),
      (_.If.setupReceiver = _.If.setupReceiver),
      (_.If.getAuthToken = _.If.getAuthToken),
      (_.If.removeReceiver = _.If.removeReceiver),
      (_.If.getRelayChannel = _.If.getRelayChannel),
      (_.If.receive = _.If.receive),
      (_.If.nK = _.If.receiveSameDomain),
      (_.If.getOrigin = _.If.getOrigin),
      (_.If.getTargetOrigin = _.If.getTargetOrigin),
      (_.If.hE = _.If._getTargetWin),
      (_.If.fP = _.If._parseSiblingId))
  else {
    _.If = (function () {
      function a(C, N) {
        if (!W[C]) {
          var ea = F
          N || (ea = ma)
          W[C] = ea
          N = J[C] || []
          for (var aa = 0; aa < N.length; ++aa) {
            var ba = N[aa]
            ba.t = A[C]
            ea.call(C, ba.f, ba)
          }
          J[C] = []
        }
      }
      function b() {
        function C() {
          za = !0
        }
        I ||
          ('undefined' != typeof window.addEventListener
            ? window.addEventListener('unload', C, !1)
            : 'undefined' != typeof window.attachEvent &&
              window.attachEvent('onunload', C),
          (I = !0))
      }
      function c(C, N, ea, aa, ba) {
        ;(A[N] && A[N] === ea) ||
          (_.Oe('Invalid gadgets.rpc token. ' + A[N] + ' vs ' + ea), xa(N, 2))
        ba.onunload = function () {
          K[N] && !za && (xa(N, 1), _.If.removeReceiver(N))
        }
        b()
        aa = _.wf(decodeURIComponent(aa))
      }
      function d(C, N) {
        if (
          C &&
          'string' === typeof C.s &&
          'string' === typeof C.f &&
          C.a instanceof Array
        )
          if (
            (A[C.f] &&
              A[C.f] !== C.t &&
              (_.Oe('Invalid gadgets.rpc token. ' + A[C.f] + ' vs ' + C.t),
              xa(C.f, 2)),
            '__ack' === C.s)
          )
            window.setTimeout(function () {
              a(C.f, !0)
            }, 0)
          else {
            C.c &&
              (C.callback = function (oa) {
                _.If.call(C.f, (C.g ? 'legacy__' : '') + '__cb', null, C.c, oa)
              })
            if (N) {
              var ea = e(N)
              C.origin = N
              var aa = C.r
              try {
                var ba = e(aa)
              } catch (oa) {}
              ;(aa && ba == ea) || (aa = N)
              C.referer = aa
            }
            N = (t[C.s] || t['']).apply(C, C.a)
            C.c &&
              'undefined' !== typeof N &&
              _.If.call(C.f, '__cb', null, C.c, N)
          }
      }
      function e(C) {
        if (!C) return ''
        C = C.split('#')[0].split('?')[0]
        C = C.toLowerCase()
        0 == C.indexOf('//') && (C = window.location.protocol + C)
        ;-1 == C.indexOf('://') && (C = window.location.protocol + '//' + C)
        var N = C.substring(C.indexOf('://') + 3),
          ea = N.indexOf('/')
        ;-1 != ea && (N = N.substring(0, ea))
        C = C.substring(0, C.indexOf('://'))
        if (
          'http' !== C &&
          'https' !== C &&
          'chrome-extension' !== C &&
          'file' !== C &&
          'android-app' !== C &&
          'chrome-search' !== C &&
          'chrome-untrusted' !== C &&
          'chrome' !== C &&
          'devtools' !== C
        )
          throw Error('l')
        ea = ''
        var aa = N.indexOf(':')
        if (-1 != aa) {
          var ba = N.substring(aa + 1)
          N = N.substring(0, aa)
          if (('http' === C && '80' !== ba) || ('https' === C && '443' !== ba))
            ea = ':' + ba
        }
        return C + '://' + N + ea
      }
      function f(C) {
        if ('/' == C.charAt(0)) {
          var N = C.indexOf('|')
          return {
            id: 0 < N ? C.substring(1, N) : C.substring(1),
            origin: 0 < N ? C.substring(N + 1) : null,
          }
        }
        return null
      }
      function g(C) {
        if ('undefined' === typeof C || '..' === C) return window.parent
        var N = f(C)
        if (N) return window.top.frames[N.id]
        C = String(C)
        return (N = window.frames[C])
          ? N
          : (N = document.getElementById(C)) && N.contentWindow
          ? N.contentWindow
          : null
      }
      function k(C, N) {
        if (!0 !== K[C]) {
          'undefined' === typeof K[C] && (K[C] = 0)
          var ea = g(C)
          ;('..' !== C && null == ea) || !0 !== F.Gc(C, N)
            ? !0 !== K[C] && 10 > K[C]++
              ? window.setTimeout(function () {
                  k(C, N)
                }, 500)
              : ((W[C] = ma), (K[C] = !0))
            : (K[C] = !0)
        }
      }
      function l(C) {
        ;(C = w[C]) &&
          '/' === C.substring(0, 1) &&
          (C =
            '/' === C.substring(1, 2)
              ? document.location.protocol + C
              : document.location.protocol + '//' + document.location.host + C)
        return C
      }
      function m(C, N, ea) {
        N &&
          !/http(s)?:\/\/.+/.test(N) &&
          (0 == N.indexOf('//')
            ? (N = window.location.protocol + N)
            : '/' == N.charAt(0)
            ? (N = window.location.protocol + '//' + window.location.host + N)
            : -1 == N.indexOf('://') &&
              (N = window.location.protocol + '//' + N))
        w[C] = N
        'undefined' !== typeof ea && (y[C] = !!ea)
      }
      function n(C, N) {
        N = N || ''
        A[C] = String(N)
        k(C, N)
      }
      function r(C) {
        C = (C.passReferrer || '').split(':', 2)
        H = C[0] || 'none'
        V = C[1] || 'origin'
      }
      function u(C) {
        'true' === String(C.useLegacyProtocol) &&
          ((F = Hf.qu || ma), F.init(d, a))
      }
      function q(C, N) {
        function ea(aa) {
          aa = (aa && aa.rpc) || {}
          r(aa)
          var ba = aa.parentRelayUrl || ''
          ba = e(O.parent || N) + ba
          m('..', ba, 'true' === String(aa.useLegacyProtocol))
          u(aa)
          n('..', C)
        }
        !O.parent && N ? ea({}) : _.Qe.register('rpc', null, ea)
      }
      function v(C, N, ea) {
        if ('..' === C) q(ea || O.rpctoken || O.ifpctok || '', N)
        else
          a: {
            var aa = null
            if ('/' != C.charAt(0)) {
              if (!_.Me) break a
              aa = document.getElementById(C)
              if (!aa) throw Error('m`' + C)
            }
            aa = aa && aa.src
            N = N || e(aa)
            m(C, N)
            N = _.Me.getUrlParameters(aa)
            n(C, ea || N.rpctoken)
          }
      }
      var t = {},
        w = {},
        y = {},
        A = {},
        B = 0,
        x = {},
        K = {},
        O = {},
        W = {},
        J = {},
        H = null,
        V = null,
        ra = window.top !== window.self,
        sa = window.name,
        xa = function () {},
        Fa = window.console,
        Ja =
          (Fa &&
            Fa.log &&
            function (C) {
              Fa.log(C)
            }) ||
          function () {},
        ma = (function () {
          function C(N) {
            return function () {
              Ja(N + ': call ignored')
            }
          }
          return {
            HG: function () {
              return 'noop'
            },
            nV: function () {
              return !0
            },
            init: C('init'),
            Gc: C('setup'),
            call: C('call'),
          }
        })()
      _.Me && (O = _.Me.getUrlParameters())
      var za = !1,
        I = !1,
        F = (function () {
          if ('rmr' == O.rpctx) return Hf.HK
          var C =
            'function' === typeof window.postMessage
              ? Hf.DD
              : 'object' === typeof window.postMessage
              ? Hf.DD
              : window.ActiveXObject
              ? Hf.sJ
                ? Hf.sJ
                : Hf.qu
              : 0 < navigator.userAgent.indexOf('WebKit')
              ? Hf.HK
              : 'Gecko' === navigator.product
              ? Hf.frameElement
              : Hf.qu
          C || (C = ma)
          return C
        })()
      t[''] = function () {
        Ja('Unknown RPC service: ' + this.s)
      }
      t.__cb = function (C, N) {
        var ea = x[C]
        ea && (delete x[C], ea.call(this, N))
      }
      return {
        config: function (C) {
          'function' === typeof C.NK && (xa = C.NK)
        },
        register: function (C, N) {
          if ('__cb' === C || '__ack' === C) throw Error('n')
          if ('' === C) throw Error('o')
          t[C] = N
        },
        unregister: function (C) {
          if ('__cb' === C || '__ack' === C) throw Error('p')
          if ('' === C) throw Error('q')
          delete t[C]
        },
        registerDefault: function (C) {
          t[''] = C
        },
        unregisterDefault: function () {
          delete t['']
        },
        forceParentVerifiable: function () {},
        call: function (C, N, ea, aa) {
          C = C || '..'
          var ba = '..'
          '..' === C
            ? (ba = sa)
            : '/' == C.charAt(0) &&
              ((ba = e(window.location.href)),
              (ba = '/' + sa + (ba ? '|' + ba : '')))
          ++B
          ea && (x[B] = ea)
          var oa = {
            s: N,
            f: ba,
            c: ea ? B : 0,
            a: Array.prototype.slice.call(arguments, 3),
            t: A[C],
            l: !!y[C],
          }
          a: if (
            'bidir' === H ||
            ('c2p' === H && '..' === C) ||
            ('p2c' === H && '..' !== C)
          ) {
            var M = window.location.href
            var ia = '?'
            if ('query' === V) ia = '#'
            else if ('hash' === V) break a
            ia = M.lastIndexOf(ia)
            ia = -1 === ia ? M.length : ia
            M = M.substring(0, ia)
          } else M = null
          M && (oa.r = M)
          if ('..' === C || null != f(C) || document.getElementById(C))
            (M = W[C]) || null === f(C) || (M = F),
              0 === N.indexOf('legacy__') &&
                ((M = F), (oa.s = N.substring(8)), (oa.c = oa.c ? oa.c : B)),
              (oa.g = !0),
              (oa.r = ba),
              M
                ? (y[C] && (M = Hf.qu),
                  !1 === M.call(C, ba, oa) && ((W[C] = ma), F.call(C, ba, oa)))
                : J[C]
                ? J[C].push(oa)
                : (J[C] = [oa])
        },
        getRelayUrl: l,
        setRelayUrl: m,
        setAuthToken: n,
        setupReceiver: v,
        getAuthToken: function (C) {
          return A[C]
        },
        removeReceiver: function (C) {
          delete w[C]
          delete y[C]
          delete A[C]
          delete K[C]
          delete W[C]
        },
        getRelayChannel: function () {
          return F.HG()
        },
        receive: function (C, N) {
          4 < C.length ? F.g7(C, d) : c.apply(null, C.concat(N))
        },
        nK: function (C) {
          C.a = Array.prototype.slice.call(C.a)
          window.setTimeout(function () {
            d(C)
          }, 0)
        },
        getOrigin: e,
        getTargetOrigin: function (C) {
          var N = null,
            ea = l(C)
          ea
            ? (N = ea)
            : (ea = f(C))
            ? (N = ea.origin)
            : '..' == C
            ? (N = O.parent)
            : (C = document.getElementById(C)) &&
              'iframe' === C.tagName.toLowerCase() &&
              (N = C.src)
          return e(N)
        },
        init: function () {
          !1 === F.init(d, a) && (F = ma)
          ra
            ? v('..')
            : _.Qe.register('rpc', null, function (C) {
                C = C.rpc || {}
                r(C)
                u(C)
              })
        },
        hE: g,
        fP: f,
        ACK: '__ack',
        H4: sa || '..',
        S4: 0,
        R4: 1,
        Q4: 2,
      }
    })()
    _.If.init()
  }
  _.If.config({
    NK: function (a) {
      throw Error('r`' + a)
    },
  })
  _.Pe = _.Ef
  _.L('gadgets.rpc.config', _.If.config)
  _.L('gadgets.rpc.register', _.If.register)
  _.L('gadgets.rpc.unregister', _.If.unregister)
  _.L('gadgets.rpc.registerDefault', _.If.registerDefault)
  _.L('gadgets.rpc.unregisterDefault', _.If.unregisterDefault)
  _.L('gadgets.rpc.forceParentVerifiable', _.If.forceParentVerifiable)
  _.L('gadgets.rpc.call', _.If.call)
  _.L('gadgets.rpc.getRelayUrl', _.If.getRelayUrl)
  _.L('gadgets.rpc.setRelayUrl', _.If.setRelayUrl)
  _.L('gadgets.rpc.setAuthToken', _.If.setAuthToken)
  _.L('gadgets.rpc.setupReceiver', _.If.setupReceiver)
  _.L('gadgets.rpc.getAuthToken', _.If.getAuthToken)
  _.L('gadgets.rpc.removeReceiver', _.If.removeReceiver)
  _.L('gadgets.rpc.getRelayChannel', _.If.getRelayChannel)
  _.L('gadgets.rpc.receive', _.If.receive)
  _.L('gadgets.rpc.receiveSameDomain', _.If.nK)
  _.L('gadgets.rpc.getOrigin', _.If.getOrigin)
  _.L('gadgets.rpc.getTargetOrigin', _.If.getTargetOrigin)

  var zh
  zh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//
  _.Ah = function (a) {
    var b = _.yh('googleapis.config/sessionIndex')
    'string' === typeof b && 254 < b.length && (b = null)
    null == b && (b = window.__X_GOOG_AUTHUSER)
    'string' === typeof b && 254 < b.length && (b = null)
    if (null == b) {
      var c = window.google
      c && (b = c.authuser)
    }
    'string' === typeof b && 254 < b.length && (b = null)
    null == b &&
      ((a = a || window.location.href),
      (b = _.se(a, 'authuser') || null),
      null == b && (b = (b = a.match(zh)) ? b[1] : null))
    if (null == b) return null
    b = String(b)
    254 < b.length && (b = null)
    return b
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Rh = function () {
    this.yj = -1
  }
  var Sh = function () {
    this.yj = 64
    this.Bc = []
    this.xx = []
    this.bP = []
    this.zv = []
    this.zv[0] = 128
    for (var a = 1; a < this.yj; ++a) this.zv[a] = 0
    this.tw = this.tn = 0
    this.reset()
  }
  _.P(Sh, Rh)
  Sh.prototype.reset = function () {
    this.Bc[0] = 1732584193
    this.Bc[1] = 4023233417
    this.Bc[2] = 2562383102
    this.Bc[3] = 271733878
    this.Bc[4] = 3285377520
    this.tw = this.tn = 0
  }
  var Th = function (a, b, c) {
    c || (c = 0)
    var d = a.bP
    if ('string' === typeof b)
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4)
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4)
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16]
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295
    }
    b = a.Bc[0]
    c = a.Bc[1]
    var g = a.Bc[2],
      k = a.Bc[3],
      l = a.Bc[4]
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = k ^ (c & (g ^ k))
          var m = 1518500249
        } else (f = c ^ g ^ k), (m = 1859775393)
      else
        60 > e
          ? ((f = (c & g) | (k & (c | g))), (m = 2400959708))
          : ((f = c ^ g ^ k), (m = 3395469782))
      f = (((b << 5) | (b >>> 27)) + f + l + m + d[e]) & 4294967295
      l = k
      k = g
      g = ((c << 30) | (c >>> 2)) & 4294967295
      c = b
      b = f
    }
    a.Bc[0] = (a.Bc[0] + b) & 4294967295
    a.Bc[1] = (a.Bc[1] + c) & 4294967295
    a.Bc[2] = (a.Bc[2] + g) & 4294967295
    a.Bc[3] = (a.Bc[3] + k) & 4294967295
    a.Bc[4] = (a.Bc[4] + l) & 4294967295
  }
  Sh.prototype.update = function (a, b) {
    if (null != a) {
      void 0 === b && (b = a.length)
      for (var c = b - this.yj, d = 0, e = this.xx, f = this.tn; d < b; ) {
        if (0 == f) for (; d <= c; ) Th(this, a, d), (d += this.yj)
        if ('string' === typeof a)
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.yj)) {
              Th(this, e)
              f = 0
              break
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.yj)) {
              Th(this, e)
              f = 0
              break
            }
      }
      this.tn = f
      this.tw += b
    }
  }
  Sh.prototype.digest = function () {
    var a = [],
      b = 8 * this.tw
    56 > this.tn
      ? this.update(this.zv, 56 - this.tn)
      : this.update(this.zv, this.yj - (this.tn - 56))
    for (var c = this.yj - 1; 56 <= c; c--) (this.xx[c] = b & 255), (b /= 256)
    Th(this, this.xx)
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.Bc[c] >> d) & 255), ++b
    return a
  }
  _.Uh = function () {
    this.MC = new Sh()
  }
  _.h = _.Uh.prototype
  _.h.reset = function () {
    this.MC.reset()
  }
  _.h.tM = function (a) {
    this.MC.update(a)
  }
  _.h.GF = function () {
    return this.MC.digest()
  }
  _.h.Bw = function (a) {
    a = unescape(encodeURIComponent(a))
    for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c))
    this.tM(b)
  }
  _.h.Cg = function () {
    for (var a = this.GF(), b = '', c = 0; c < a.length; c++)
      b +=
        '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16)
    return b
  }

  var Wh, Vh, bi, ci, Xh, $h, Yh, di, Zh
  _.ai = function () {
    if (Vh) {
      var a = new _.he.Uint32Array(1)
      Wh.getRandomValues(a)
      a = Number('0.' + a[0])
    } else
      (a = Xh),
        (a += parseInt(Yh.substr(0, 20), 16)),
        (Yh = Zh(Yh)),
        (a /= $h + Math.pow(16, 20))
    return a
  }
  Wh = _.he.crypto
  Vh = !1
  bi = 0
  ci = 0
  Xh = 1
  $h = 0
  Yh = ''
  di = function (a) {
    a = a || _.he.event
    var b = (a.screenX + a.clientX) << 16
    b += a.screenY + a.clientY
    b *= new Date().getTime() % 1e6
    Xh = (Xh * b) % $h
    0 < bi && ++ci == bi && _.we(_.he, 'mousemove', di, 'remove', 'de')
  }
  Zh = function (a) {
    var b = new _.Uh()
    b.Bw(a)
    return b.Cg()
  }
  Vh = !!Wh && 'function' == typeof Wh.getRandomValues
  Vh ||
    (($h = 1e6 * (screen.width * screen.width + screen.height)),
    (Yh = Zh(
      _.ie.cookie +
        '|' +
        _.ie.location +
        '|' +
        new Date().getTime() +
        '|' +
        Math.random()
    )),
    (bi = _.yh('random/maxObserveMousemove') || 0),
    0 != bi && _.xe(_.he, 'mousemove', di))

  _.ji = function (a) {
    var b = window
    a = (a || b.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || []
    return '1' === decodeURIComponent(a[a.length - 1] || '')
  }

  var mj, qj, rj, sj, tj, uj, vj, wj, xj, yj, zj, Aj, Bj, Fj, Hj, Ij
  _.nj = function (a) {
    return !!a && 'object' === typeof a && _.ke.test(a.push)
  }
  _.oj = function (a) {
    for (var b = 0; b < this.length; b++) if (this[b] === a) return b
    return -1
  }
  _.pj = function (a, b) {
    if (!a) throw Error(b || '')
  }
  qj = /&/g
  rj = /</g
  sj = />/g
  tj = /"/g
  uj = /'/g
  vj = function (a) {
    return String(a)
      .replace(qj, '&amp;')
      .replace(rj, '&lt;')
      .replace(sj, '&gt;')
      .replace(tj, '&quot;')
      .replace(uj, '&#39;')
  }
  wj = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g
  xj = /%([a-f]|[0-9a-fA-F][a-f])/g
  yj = /^(https?|ftp|file|chrome-extension):$/i
  zj = function (a) {
    a = String(a)
    a = a
      .replace(wj, function (e) {
        try {
          return encodeURIComponent(e)
        } catch (f) {
          return encodeURIComponent(e.replace(/^[^%]+$/g, '\ufffd'))
        }
      })
      .replace(_.ue, function (e) {
        return e.replace(/%/g, '%25')
      })
      .replace(xj, function (e) {
        return e.toUpperCase()
      })
    a = a.match(_.te) || []
    var b = _.me(),
      c = function (e) {
        return e
          .replace(/\\/g, '%5C')
          .replace(/\^/g, '%5E')
          .replace(/`/g, '%60')
          .replace(/\{/g, '%7B')
          .replace(/\|/g, '%7C')
          .replace(/\}/g, '%7D')
      },
      d = !!(a[1] || '').match(yj)
    b.Lo = c((a[1] || '') + (a[2] || '') + (a[3] || (a[2] && d ? '/' : '')))
    d = function (e) {
      return c(e.replace(/\?/g, '%3F').replace(/#/g, '%23'))
    }
    b.query = a[5] ? [d(a[5])] : []
    b.nh = a[7] ? [d(a[7])] : []
    return b
  }
  Aj = function (a) {
    return (
      a.Lo +
      (0 < a.query.length ? '?' + a.query.join('&') : '') +
      (0 < a.nh.length ? '#' + a.nh.join('&') : '')
    )
  }
  Bj = function (a, b) {
    var c = []
    if (a)
      for (var d in a)
        if (_.ne(a, d) && null != a[d]) {
          var e = b ? b(a[d]) : a[d]
          c.push(encodeURIComponent(d) + '=' + encodeURIComponent(e))
        }
    return c
  }
  _.Cj = function (a, b, c, d) {
    a = zj(a)
    a.query.push.apply(a.query, Bj(b, d))
    a.nh.push.apply(a.nh, Bj(c, d))
    return Aj(a)
  }
  _.Dj = function (a, b) {
    var c = zj(b)
    b = c.Lo
    c.query.length && (b += '?' + c.query.join(''))
    c.nh.length && (b += '#' + c.nh.join(''))
    var d = ''
    2e3 < b.length &&
      ((c = b),
      (b = b.substr(0, 2e3)),
      (b = b.replace(_.ve, '')),
      (d = c.substr(b.length)))
    var e = a.createElement('div')
    a = a.createElement('a')
    c = zj(b)
    b = c.Lo
    c.query.length && (b += '?' + c.query.join(''))
    c.nh.length && (b += '#' + c.nh.join(''))
    _.Dd(a, new _.Sb(b, _.Qb))
    e.appendChild(a)
    b = _.ec(e.innerHTML, null)
    _.Cd(e, b)
    b = String(e.firstChild.href)
    e.parentNode && e.parentNode.removeChild(e)
    c = zj(b + d)
    b = c.Lo
    c.query.length && (b += '?' + c.query.join(''))
    c.nh.length && (b += '#' + c.nh.join(''))
    return b
  }
  _.Ej = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i
  Fj = function (a) {
    for (; a.firstChild; ) a.removeChild(a.firstChild)
  }
  _.Gj = function (a, b) {
    var c = _.le(_.ye, 'watt', _.me())
    _.le(c, a, b)
  }
  Hj = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//
  Ij = function (a) {
    var b = _.yh('googleapis.config/sessionDelegate')
    'string' === typeof b && 21 < b.length && (b = null)
    null == b && (b = (a = (a || window.location.href).match(Hj)) ? a[1] : null)
    if (null == b) return null
    b = String(b)
    21 < b.length && (b = null)
    return b
  }
  var Jj = function () {
      var a = _.ye.onl
      if (!a) {
        a = _.me()
        _.ye.onl = a
        var b = _.me()
        a.e = function (c) {
          var d = b[c]
          d && (delete b[c], d())
        }
        a.a = function (c, d) {
          b[c] = d
        }
        a.r = function (c) {
          delete b[c]
        }
      }
      return a
    },
    Kj = function (a, b) {
      b = b.onload
      return 'function' === typeof b ? (Jj().a(a, b), b) : null
    },
    Lj = function (a) {
      _.pj(/^\w+$/.test(a), 'Unsupported id - ' + a)
      Jj()
      return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    },
    Mj = function (a) {
      Jj().r(a)
    }
  var Oj, Pj, Tj
  _.Nj = {
    allowtransparency: 'true',
    frameborder: '0',
    hspace: '0',
    marginheight: '0',
    marginwidth: '0',
    scrolling: 'no',
    style: '',
    tabindex: '0',
    vspace: '0',
    width: '100%',
  }
  Oj = { allowtransparency: !0, onload: !0 }
  Pj = 0
  _.Qj = function (a, b) {
    var c = 0
    do var d = b.id || ['I', Pj++, '_', new Date().getTime()].join('')
    while (a.getElementById(d) && 5 > ++c)
    _.pj(5 > c, 'Error creating iframe id')
    return d
  }
  _.Rj = function (a, b) {
    return a ? b + '/' + a : ''
  }
  _.Sj = function (a, b, c, d) {
    var e = {},
      f = {}
    a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode)
    _.oe(d.queryParams || {}, e)
    _.oe(d.fragmentParams || {}, f)
    var g = d.pfname
    var k = _.me()
    _.yh('iframes/dropLegacyIdParam') || (k.id = c)
    k._gfid = c
    k.parent = a.location.protocol + '//' + a.location.host
    c = _.se(a.location.href, 'parent')
    g = g || ''
    !g &&
      c &&
      ((g =
        _.se(a.location.href, '_gfid', '') || _.se(a.location.href, 'id', '')),
      (g = _.Rj(g, _.se(a.location.href, 'pfname', ''))))
    g ||
      ((c = _.wf(_.se(a.location.href, 'jcp', ''))) &&
        'object' == typeof c &&
        (g = _.Rj(c.id, c.pfname)))
    k.pfname = g
    d.connectWithJsonParam && ((g = {}), (g.jcp = _.xf(k)), (k = g))
    g = _.se(b, 'rpctoken') || e.rpctoken || f.rpctoken
    g ||
      ((g = d.rpctoken || String(Math.round(1e8 * _.ai()))), (k.rpctoken = g))
    d.rpctoken = g
    _.oe(k, d.connectWithQueryParams ? e : f)
    k = a.location.href
    a = _.me()
    ;(g = _.se(k, '_bsh', _.ye.bsh)) && (a._bsh = g)
    ;(k = _.ye.dpo ? _.ye.h : _.se(k, 'jsh', _.ye.h)) && (a.jsh = k)
    d.hintInFragment ? _.oe(a, f) : _.oe(a, e)
    return _.Cj(b, e, f, d.paramsSerializer)
  }
  Tj = function (a) {
    _.pj(!a || _.Ej.test(a), 'Illegal url for new iframe - ' + a)
  }
  _.Uj = function (a, b, c, d, e) {
    Tj(c.src)
    var f,
      g = Kj(d, c),
      k = g ? Lj(d) : ''
    try {
      document.all &&
        (f = a.createElement(
          '<iframe frameborder="' +
            vj(String(c.frameborder)) +
            '" scrolling="' +
            vj(String(c.scrolling)) +
            '" ' +
            k +
            ' name="' +
            vj(String(c.name)) +
            '"/>'
        ))
    } catch (m) {
    } finally {
      f ||
        ((f = _.Nd(a).ta('IFRAME')),
        g &&
          ((f.onload = function () {
            f.onload = null
            g.call(this)
          }),
          Mj(d)))
    }
    f.setAttribute('ng-non-bindable', '')
    for (var l in c)
      (a = c[l]),
        'style' === l && 'object' === typeof a
          ? _.oe(a, f.style)
          : Oj[l] || f.setAttribute(l, String(a))
    ;(l = (e && e.beforeNode) || null) || (e && e.dontclear) || Fj(b)
    b.insertBefore(f, l)
    f = l ? l.previousSibling : b.lastChild
    c.allowtransparency && (f.allowTransparency = !0)
    return f
  }
  var Vj, Yj
  Vj = /^:[\w]+$/
  _.Wj = /:([a-zA-Z_]+):/g
  _.Xj = function () {
    var a = _.Ah() || '0',
      b = Ij()
    var c = _.Ah(void 0) || a
    var d = Ij(void 0),
      e = ''
    c && (e += 'u/' + encodeURIComponent(String(c)) + '/')
    d && (e += 'b/' + encodeURIComponent(String(d)) + '/')
    c = e || null
    ;(e = (d = !1 === _.yh('isLoggedIn')) ? '_/im/' : '') && (c = '')
    var f = _.yh('iframes/:socialhost:'),
      g = _.yh('iframes/:im_socialhost:')
    return (mj = {
      socialhost: f,
      ctx_socialhost: d ? g : f,
      session_index: a,
      session_delegate: b,
      session_prefix: c,
      im_prefix: e,
    })
  }
  Yj = function (a, b) {
    return _.Xj()[b] || ''
  }
  _.Zj = function (a) {
    return _.Dj(_.ie, a.replace(_.Wj, Yj))
  }
  _.ak = function (a) {
    var b = a
    Vj.test(a) &&
      ((b = _.yh('iframes/' + b.substring(1) + '/url')),
      _.pj(!!b, 'Unknown iframe url config for - ' + a))
    return _.Zj(b)
  }
  _.bk = function (a, b, c) {
    c = c || {}
    var d = c.attributes || {}
    _.pj(
      !(c.allowPost || c.forcePost) || !d.onload,
      'onload is not supported by post iframe (allowPost or forcePost)'
    )
    a = _.ak(a)
    d = b.ownerDocument || _.ie
    var e = _.Qj(d, c)
    a = _.Sj(d, a, e, c)
    var f = c,
      g = _.me()
    _.oe(_.Nj, g)
    _.oe(f.attributes, g)
    g.name = g.id = e
    g.src = a
    c.eurl = a
    c = (f = c) || {}
    var k = !!c.allowPost
    if (c.forcePost || (k && 2e3 < a.length)) {
      c = zj(a)
      g.src = ''
      f.dropDataPostorigin || (g['data-postorigin'] = a)
      a = _.Uj(d, b, g, e)
      if (-1 != navigator.userAgent.indexOf('WebKit')) {
        var l = a.contentWindow.document
        l.open()
        g = l.createElement('div')
        k = {}
        var m = e + '_inner'
        k.name = m
        k.src = ''
        k.style = 'display:none'
        _.Uj(d, g, k, m, f)
      }
      g = (f = c.query[0]) ? f.split('&') : []
      f = []
      for (k = 0; k < g.length; k++)
        (m = g[k].split('=', 2)),
          f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])])
      c.query = []
      g = Aj(c)
      _.pj(_.Ej.test(g), 'Invalid URL: ' + g)
      c = d.createElement('form')
      c.method = 'POST'
      c.target = e
      c.style.display = 'none'
      e = g instanceof _.Sb ? g : _.Ad(g)
      c.action = _.ud(e)
      for (e = 0; e < f.length; e++)
        (g = d.createElement('input')),
          (g.type = 'hidden'),
          (g.name = f[e][0]),
          (g.value = f[e][1]),
          c.appendChild(g)
      b.appendChild(c)
      c.submit()
      c.parentNode.removeChild(c)
      l && l.close()
      b = a
    } else b = _.Uj(d, b, g, e, f)
    return b
  }

  _.mn = _.me()

  _.nn = {}
  window.iframer = _.nn

  var on, pn, qn, rn, sn, tn, un, yn, zn
  on = function (a) {
    return this.Ya.Fy(a)
  }
  pn = function (a) {
    if (_.ke.test(Object.keys)) return Object.keys(a)
    var b = [],
      c
    for (c in a) _.ne(a, c) && b.push(c)
    return b
  }
  qn = function (a, b) {
    if (!_.Ff())
      try {
        a()
      } catch (c) {}
    _.Gf(b)
  }
  rn = { button: !0, div: !0, span: !0 }
  sn = function (a) {
    var b = _.le(_.ye, 'sws', [])
    return 0 <= _.oj.call(b, a)
  }
  tn = function (a) {
    return _.le(_.ye, 'watt', _.me())[a]
  }
  un = function (a) {
    return function (b, c) {
      return a ? _.Xj()[c] || a[c] || '' : _.Xj()[c] || ''
    }
  }
  _.vn = {
    callback: 1,
    clientid: 1,
    cookiepolicy: 1,
    openidrealm: -1,
    includegrantedscopes: -1,
    requestvisibleactions: 1,
    scope: 1,
  }
  _.wn = !1
  _.xn = function () {
    if (!_.wn) {
      for (
        var a = document.getElementsByTagName('meta'), b = 0;
        b < a.length;
        ++b
      ) {
        var c = a[b].name.toLowerCase()
        if (_.dd(c, 'google-signin-')) {
          c = c.substring(14)
          var d = a[b].content
          _.vn[c] && d && (_.mn[c] = d)
        }
      }
      if (window.self !== window.top) {
        a = document.location.toString()
        for (var e in _.vn) 0 < _.vn[e] && (b = _.se(a, e, '')) && (_.mn[e] = b)
      }
      _.wn = !0
    }
    e = _.me()
    _.oe(_.mn, e)
    return e
  }
  yn = function (a) {
    var b
    a.match(/^https?%3A/i) && (b = decodeURIComponent(a))
    return _.Dj(document, b ? b : a)
  }
  zn = function (a) {
    a = a || 'canonical'
    for (
      var b = document.getElementsByTagName('link'), c = 0, d = b.length;
      c < d;
      c++
    ) {
      var e = b[c],
        f = e.getAttribute('rel')
      if (
        f &&
        f.toLowerCase() == a &&
        (e = e.getAttribute('href')) &&
        (e = yn(e)) &&
        null != e.match(/^https?:\/\/[\w\-_\.]+/i)
      )
        return e
    }
    return window.location.href
  }
  _.An = function () {
    return (
      window.location.origin ||
      window.location.protocol + '//' + window.location.host
    )
  }
  _.Bn = function (a, b, c, d) {
    return (a = 'string' == typeof a ? a : void 0) ? yn(a) : zn(d)
  }
  _.Cn = function (a, b, c) {
    null == a && c && ((a = c.db), null == a && (a = c.gwidget && c.gwidget.db))
    return a || void 0
  }
  _.Dn = function (a, b, c) {
    null == a &&
      c &&
      ((a = c.ecp), null == a && (a = c.gwidget && c.gwidget.ecp))
    return a || void 0
  }
  _.En = function (a, b, c) {
    return _.Bn(a, b, c, b.action ? void 0 : 'publisher')
  }
  var Fn, Gn, Hn, In, Jn, Kn, Mn, Ln
  Fn = { se: '0' }
  Gn = { post: !0 }
  Hn = {
    style:
      'position:absolute;top:-10000px;width:450px;margin:0px;border-style:none',
  }
  In = 'onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh'.split(
    ' '
  )
  Jn = _.le(_.ye, 'WI', _.me())
  Kn = ['style', 'data-gapiscan']
  Mn = function (a) {
    for (
      var b = _.me(),
        c = 0 != a.nodeName.toLowerCase().indexOf('g:'),
        d = 0,
        e = a.attributes.length;
      d < e;
      d++
    ) {
      var f = a.attributes[d],
        g = f.name,
        k = f.value
      0 <= _.oj.call(Kn, g) ||
        (c && 0 != g.indexOf('data-')) ||
        'null' === k ||
        ('specified' in f && !f.specified) ||
        (c && (g = g.substr(5)), (b[g.toLowerCase()] = k))
    }
    a = a.style
    ;(c = Ln(a && a.height)) && (b.height = String(c))
    ;(a = Ln(a && a.width)) && (b.width = String(a))
    return b
  }
  _.On = function (a, b, c, d, e, f) {
    if (c.rd) var g = b
    else
      (g = document.createElement('div')),
        b.setAttribute('data-gapistub', !0),
        (g.style.cssText = 'position:absolute;width:450px;left:-10000px;'),
        b.parentNode.insertBefore(g, b)
    f.siteElement = g
    g.id || (g.id = _.Nn(a))
    b = _.me()
    b['>type'] = a
    _.oe(c, b)
    a = _.bk(d, g, e)
    f.iframeNode = a
    f.id = a.getAttribute('id')
  }
  _.Nn = function (a) {
    _.le(Jn, a, 0)
    return '___' + a + '_' + Jn[a]++
  }
  Ln = function (a) {
    var b = void 0
    'number' === typeof a
      ? (b = a)
      : 'string' === typeof a && (b = parseInt(a, 10))
    return b
  }
  var Pn = function () {},
    Sn = function (a) {
      var b = a.Km,
        c = function (l) {
          c.T.constructor.call(this, l)
          var m = this.ih.length
          this.Bg = []
          for (var n = 0; n < m; ++n)
            this.ih[n].I7 || (this.Bg[n] = new this.ih[n](l))
        }
      _.P(c, b)
      for (var d = []; a && a !== Object; ) {
        if ((b = a.Km)) {
          b.ih && (_.Ie(d, b.ih), _.Je(d))
          var e = b.prototype,
            f
          for (f in e)
            if (
              e.hasOwnProperty(f) &&
              'function' === typeof e[f] &&
              e[f] !== b
            ) {
              var g = !!e[f].q7,
                k = Qn(f, e, d, g)
              ;(g = Rn(f, e, k, g)) && (c.prototype[f] = g)
            }
        }
        a =
          a === Object
            ? Object
            : Object.getPrototypeOf
            ? Object.getPrototypeOf(a.prototype).constructor || Object
            : (a.T && a.T.constructor) || Object
      }
      c.prototype.ih = d
      return c
    },
    Qn = function (a, b, c, d) {
      for (
        var e = [], f = 0;
        f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d));
        ++f
      );
      return e
    },
    Rn = function (a, b, c, d) {
      return c.length
        ? d
          ? function (e) {
              var f = this.Bg[c[0]]
              return f
                ? f[a].apply(this.Bg[c[0]], arguments)
                : this.ih[c[0]].prototype[a].apply(this, arguments)
            }
          : b[a].JP
          ? function (e) {
              a: {
                var f = Array.prototype.slice.call(arguments, 0)
                for (var g = 0; g < c.length; ++g) {
                  var k = this.Bg[c[g]]
                  if (
                    (k = k
                      ? k[a].apply(k, f)
                      : this.ih[c[g]].prototype[a].apply(this, f))
                  ) {
                    f = k
                    break a
                  }
                }
                f = !1
              }
              return f
            }
          : b[a].IP
          ? function (e) {
              a: {
                var f = Array.prototype.slice.call(arguments, 0)
                for (var g = 0; g < c.length; ++g) {
                  var k = this.Bg[c[g]]
                  k = k
                    ? k[a].apply(k, f)
                    : this.ih[c[g]].prototype[a].apply(this, f)
                  if (null != k) {
                    f = k
                    break a
                  }
                }
                f = void 0
              }
              return f
            }
          : b[a].uJ
          ? function (e) {
              for (
                var f = Array.prototype.slice.call(arguments, 0), g = 0;
                g < c.length;
                ++g
              ) {
                var k = this.Bg[c[g]]
                k ? k[a].apply(k, f) : this.ih[c[g]].prototype[a].apply(this, f)
              }
            }
          : function (e) {
              for (
                var f = Array.prototype.slice.call(arguments, 0), g = [], k = 0;
                k < c.length;
                ++k
              ) {
                var l = this.Bg[c[k]]
                g.push(
                  l
                    ? l[a].apply(l, f)
                    : this.ih[c[k]].prototype[a].apply(this, f)
                )
              }
              return g
            }
        : d || b[a].JP || b[a].IP || b[a].uJ
        ? null
        : Tn
    },
    Tn = function () {
      return []
    }
  Pn.prototype.Fy = function (a) {
    if (this.Bg)
      for (var b = 0; b < this.Bg.length; ++b)
        if (this.Bg[b] instanceof a) return this.Bg[b]
    return null
  }
  var Un,
    Vn,
    Wn,
    Xn,
    Yn = /(?:^|\s)g-((\S)*)(?:$|\s)/,
    Zn = { plusone: !0, autocomplete: !0, profile: !0, signin: !0, signin2: !0 }
  Un = _.le(_.ye, 'SW', _.me())
  Vn = _.le(_.ye, 'SA', _.me())
  Wn = _.le(_.ye, 'SM', _.me())
  Xn = _.le(_.ye, 'FW', [])
  var $n = function (a, b) {
      return ('string' === typeof a ? document.getElementById(a) : a) || b
    },
    go = function (a, b) {
      var c
      co.ps0 = new Date().getTime()
      eo('ps0')
      a = $n(a, _.ie)
      var d = _.ie.documentMode
      if (a.querySelectorAll && (!d || 8 < d)) {
        d = b ? [b] : pn(Un).concat(pn(Vn)).concat(pn(Wn))
        for (var e = [], f = 0; f < d.length; f++) {
          var g = d[f]
          e.push('.g-' + g, 'g\\:' + g)
        }
        d = a.querySelectorAll(e.join(','))
      } else d = a.getElementsByTagName('*')
      a = _.me()
      for (e = 0; e < d.length; e++) {
        f = d[e]
        var k = f
        g = b
        var l = k.nodeName.toLowerCase(),
          m = void 0
        if (k.getAttribute('data-gapiscan')) g = null
        else {
          var n = l.indexOf('g:')
          0 == n
            ? (m = l.substr(2))
            : (n =
                (n = String(k.className || k.getAttribute('class'))) &&
                Yn.exec(n)) && (m = n[1])
          g = !m || !(Un[m] || Vn[m] || Wn[m]) || (g && m !== g) ? null : m
        }
        g &&
          (Zn[g] ||
            0 == f.nodeName.toLowerCase().indexOf('g:') ||
            0 != pn(Mn(f)).length) &&
          (f.setAttribute('data-gapiscan', !0), _.le(a, g, []).push(f))
      }
      for (r in a) Xn.push(r)
      co.ps1 = new Date().getTime()
      eo('ps1')
      if ((b = Xn.join(':')))
        try {
          _.qe.load(b, void 0)
        } catch (u) {
          _.Bf(u)
          return
        }
      e = []
      for (c in a) {
        d = a[c]
        var r = 0
        for (b = d.length; r < b; r++) (f = d[r]), fo(c, f, Mn(f), e, b)
      }
    }
  var ho = function (a, b) {
      var c = tn(a)
      b && c
        ? (c(b), (c = b.iframeNode) && c.setAttribute('data-gapiattached', !0))
        : _.qe.load(a, function () {
            var d = tn(a),
              e = b && b.iframeNode,
              f = b && b.userParams
            e && d
              ? (d(b), e.setAttribute('data-gapiattached', !0))
              : ((d = _.qe[a].go),
                'signin2' == a ? d(e, f) : d(e && e.parentNode, f))
          })
    },
    fo = function (a, b, c, d, e, f, g) {
      switch (io(b, a, f)) {
        case 0:
          a = Wn[a] ? a + '_annotation' : a
          d = {}
          d.iframeNode = b
          d.userParams = c
          ho(a, d)
          break
        case 1:
          if (b.parentNode) {
            for (var k in c) {
              if ((f = _.ne(c, k)))
                (f = c[k]),
                  (f =
                    !!f &&
                    'object' === typeof f &&
                    (!f.toString ||
                      f.toString === Object.prototype.toString ||
                      f.toString === Array.prototype.toString))
              if (f)
                try {
                  c[k] = _.xf(c[k])
                } catch (w) {
                  delete c[k]
                }
            }
            k = !0
            c.dontclear && (k = !1)
            delete c.dontclear
            var l
            f = {}
            var m = (l = a)
            'plus' == a &&
              c.action &&
              ((l = a + '_' + c.action), (m = a + '/' + c.action))
            ;(l = _.R('iframes/' + l + '/url')) ||
              (l =
                ':im_socialhost:/:session_prefix::im_prefix:_/widget/render/' +
                m +
                '?usegapi=1')
            for (n in Fn) f[n] = n + '/' + (c[n] || Fn[n]) + '/'
            var n = _.Dj(_.ie, l.replace(_.Wj, un(f)))
            m = 'iframes/' + a + '/params/'
            f = {}
            _.oe(c, f)
            ;(l = _.R('lang') || _.R('gwidget/lang')) && (f.hl = l)
            Gn[a] || (f.origin = _.An())
            f.exp = _.R(m + 'exp')
            if ((m = _.R(m + 'location')))
              for (l = 0; l < m.length; l++) {
                var r = m[l]
                f[r] = _.he.location[r]
              }
            switch (a) {
              case 'plus':
              case 'follow':
                f.url = _.En(f.href, c, null)
                delete f.href
                break
              case 'plusone':
                m = (m = c.href) ? yn(m) : zn()
                f.url = m
                f.db = _.Cn(c.db, void 0, _.R())
                f.ecp = _.Dn(c.ecp, void 0, _.R())
                delete f.href
                break
              case 'signin':
                f.url = zn()
            }
            _.ye.ILI && (f.iloader = '1')
            delete f['data-onload']
            delete f.rd
            for (var u in Fn) f[u] && delete f[u]
            f.gsrc = _.R('iframes/:source:')
            u = _.R('inline/css')
            'undefined' !== typeof u && 0 < e && u >= e && (f.ic = '1')
            u = /^#|^fr-/
            e = {}
            for (var q in f)
              _.ne(f, q) &&
                u.test(q) &&
                ((e[q.replace(u, '')] = f[q]), delete f[q])
            q = 'q' == _.R('iframes/' + a + '/params/si') ? f : e
            u = _.xn()
            for (var v in u)
              !_.ne(u, v) || _.ne(f, v) || _.ne(e, v) || (q[v] = u[v])
            v = [].concat(In)
            q = _.R('iframes/' + a + '/methods')
            _.nj(q) && (v = v.concat(q))
            for (t in c)
              _.ne(c, t) &&
                /^on/.test(t) &&
                ('plus' != a || 'onconnect' != t) &&
                (v.push(t), delete f[t])
            delete f.callback
            e._methods = v.join(',')
            var t = _.Cj(n, f, e)
            v = g || {}
            v.allowPost = 1
            v.attributes = Hn
            v.dontclear = !k
            g = {}
            g.userParams = c
            g.url = t
            g.type = a
            _.On(a, b, c, t, v, g)
            b = g.id
            c = _.me()
            c.id = b
            c.userParams = g.userParams
            c.url = g.url
            c.type = g.type
            c.state = 1
            _.dn[b] = c
            b = g
          } else b = null
          b && ((c = b.id) && d.push(c), ho(a, b))
      }
    },
    io = function (a, b, c) {
      if (a && 1 === a.nodeType && b) {
        if (c) return 1
        if (Wn[b]) {
          if (rn[a.nodeName.toLowerCase()])
            return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
              ? 0
              : 1
        } else {
          if (Vn[b]) return 0
          if (Un[b]) return 1
        }
      }
      return null
    }
  _.le(_.qe, 'platform', {}).go = function (a, b) {
    go(a, b)
  }
  var jo = _.le(_.ye, 'perf', _.me()),
    co = _.le(jo, 'g', _.me()),
    ko = _.le(jo, 'i', _.me()),
    oo,
    po,
    qo,
    eo,
    so,
    to,
    uo
  _.le(jo, 'r', [])
  oo = _.me()
  po = _.me()
  qo = function (a, b, c, d) {
    oo[c] = oo[c] || !!d
    _.le(po, c, [])
    po[c].push([a, b])
  }
  eo = function (a, b, c) {
    var d = jo.r
    'function' === typeof d ? d(a, b, c) : d.push([a, b, c])
  }
  so = function (a, b, c, d) {
    if ('_p' == b) throw Error('E')
    _.ro(a, b, c, d)
  }
  _.ro = function (a, b, c, d) {
    to(b, c)[a] = d || new Date().getTime()
    eo(a, b, c)
  }
  to = function (a, b) {
    a = _.le(ko, a, _.me())
    return _.le(a, b, _.me())
  }
  uo = function (a, b, c) {
    var d = null
    b && c && (d = to(b, c)[a])
    return d || co[a]
  }
  ;(function () {
    function a(g) {
      this.t = {}
      this.tick = function (k, l, m) {
        this.t[k] = [void 0 != m ? m : new Date().getTime(), l]
        if (void 0 == m)
          try {
            window.console.timeStamp('CSI/' + k)
          } catch (n) {}
      }
      this.getStartTickTime = function () {
        return this.t.start[0]
      }
      this.tick('start', null, g)
    }
    var b
    if (window.performance)
      var c = (b = window.performance.timing) && b.responseStart
    var d = 0 < c ? new a(c) : new a()
    window.__gapi_jstiming__ = { Timer: a, load: d }
    if (b) {
      var e = b.navigationStart
      0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e)
    }
    if (b) {
      var f = window.__gapi_jstiming__.load
      0 < e &&
        c >= e &&
        (f.tick('_wtsrt', void 0, e),
        f.tick('wtsrt_', '_wtsrt', c),
        f.tick('tbsd_', 'wtsrt_'))
    }
    try {
      ;(b = null),
        window.chrome &&
          window.chrome.csi &&
          ((b = Math.floor(window.chrome.csi().pageT)),
          f &&
            0 < e &&
            (f.tick('_tbnd', void 0, window.chrome.csi().startE),
            f.tick('tbnd_', '_tbnd', e))),
        null == b && window.gtbExternal && (b = window.gtbExternal.pageT()),
        null == b &&
          window.external &&
          ((b = window.external.pageT),
          f &&
            0 < e &&
            (f.tick('_tbnd', void 0, window.external.startE),
            f.tick('tbnd_', '_tbnd', e))),
        b && (window.__gapi_jstiming__.pt = b)
    } catch (g) {}
  })()
  if (window.__gapi_jstiming__) {
    window.__gapi_jstiming__.JE = {}
    window.__gapi_jstiming__.vX = 1
    var vo = function (a, b, c) {
        var d = a.t[b],
          e = a.t.start
        if (d && (e || c))
          return (
            (d = a.t[b][0]), (e = void 0 != c ? c : e[0]), Math.round(d - e)
          )
      },
      wo = function (a, b, c) {
        var d = ''
        window.__gapi_jstiming__.srt &&
          ((d += '&srt=' + window.__gapi_jstiming__.srt),
          delete window.__gapi_jstiming__.srt)
        window.__gapi_jstiming__.pt &&
          ((d += '&tbsrt=' + window.__gapi_jstiming__.pt),
          delete window.__gapi_jstiming__.pt)
        try {
          window.external && window.external.tran
            ? (d += '&tran=' + window.external.tran)
            : window.gtbExternal && window.gtbExternal.tran
            ? (d += '&tran=' + window.gtbExternal.tran())
            : window.chrome &&
              window.chrome.csi &&
              (d += '&tran=' + window.chrome.csi().tran)
        } catch (r) {}
        var e = window.chrome
        if (e && (e = e.loadTimes)) {
          e().wasFetchedViaSpdy && (d += '&p=s')
          if (e().wasNpnNegotiated) {
            d += '&npn=1'
            var f = e().npnNegotiatedProtocol
            f && (d += '&npnv=' + (encodeURIComponent || escape)(f))
          }
          e().wasAlternateProtocolAvailable && (d += '&apa=1')
        }
        var g = a.t,
          k = g.start
        e = []
        f = []
        for (var l in g)
          if ('start' != l && 0 != l.indexOf('_')) {
            var m = g[l][1]
            m
              ? g[m] && f.push(l + '.' + vo(a, l, g[m][0]))
              : k && e.push(l + '.' + vo(a, l))
          }
        delete g.start
        if (b) for (var n in b) d += '&' + n + '=' + b[n]
        ;(b = c) ||
          (b =
            'https:' == document.location.protocol
              ? 'https://csi.gstatic.com/csi'
              : 'http://csi.gstatic.com/csi')
        return [
          b,
          '?v=3',
          '&s=' + (window.__gapi_jstiming__.sn || 'gwidget') + '&action=',
          a.name,
          f.length ? '&it=' + f.join(',') : '',
          d,
          '&rt=',
          e.join(','),
        ].join('')
      },
      xo = function (a, b, c) {
        a = wo(a, b, c)
        if (!a) return ''
        b = new Image()
        var d = window.__gapi_jstiming__.vX++
        window.__gapi_jstiming__.JE[d] = b
        b.onload = b.onerror = function () {
          window.__gapi_jstiming__ && delete window.__gapi_jstiming__.JE[d]
        }
        b.src = a
        b = null
        return a
      }
    window.__gapi_jstiming__.report = function (a, b, c) {
      var d = document.visibilityState,
        e = 'visibilitychange'
      d ||
        ((d = document.webkitVisibilityState), (e = 'webkitvisibilitychange'))
      if ('prerender' == d) {
        var f = !1,
          g = function () {
            if (!f) {
              b ? (b.prerender = '1') : (b = { prerender: '1' })
              if (
                'prerender' ==
                (document.visibilityState || document.webkitVisibilityState)
              )
                var k = !1
              else xo(a, b, c), (k = !0)
              k && ((f = !0), document.removeEventListener(e, g, !1))
            }
          }
        document.addEventListener(e, g, !1)
        return ''
      }
      return xo(a, b, c)
    }
  }
  var yo = { g: 'gapi_global', m: 'gapi_module', w: 'gwidget' },
    zo = function (a, b) {
      this.type = a ? ('_p' == a ? 'm' : 'w') : 'g'
      this.name = a
      this.jo = b
    }
  zo.prototype.key = function () {
    switch (this.type) {
      case 'g':
        return this.type
      case 'm':
        return this.type + '.' + this.jo
      case 'w':
        return this.type + '.' + this.name + this.jo
    }
  }
  var Ao = new zo(),
    Bo = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
    Co = _.le(jo, '_c', _.me()),
    Do = Math.random() < (_.R('csi/rate') || 0),
    Fo = function (a, b, c) {
      for (
        var d = new zo(b, c),
          e = _.le(Co, d.key(), _.me()),
          f = po[a] || [],
          g = 0;
        g < f.length;
        ++g
      ) {
        var k = f[g],
          l = k[0],
          m = a,
          n = b,
          r = c
        k = uo(k[1], n, r)
        m = uo(m, n, r)
        e[l] = k && m ? m - k : null
      }
      oo[a] && Do && (Eo(Ao), Eo(d))
    },
    Go = function (a, b) {
      b = b || []
      for (var c = [], d = 0; d < b.length; d++) c.push(a + b[d])
      return c
    },
    Eo = function (a) {
      var b = _.he.__gapi_jstiming__
      b.sn = yo[a.type]
      var c = new b.Timer(0)
      a: {
        switch (a.type) {
          case 'g':
            var d = 'global'
            break a
          case 'm':
            d = a.jo
            break a
          case 'w':
            d = a.name
            break a
        }
        d = void 0
      }
      c.name = d
      d = !1
      var e = a.key(),
        f = Co[e]
      c.tick('_start', null, 0)
      for (var g in f) c.tick(g, '_start', f[g]), (d = !0)
      Co[e] = _.me()
      d &&
        ((g = []),
        g.push('l' + (_.R('isPlusUser') ? '1' : '0')),
        (d = 'm' + (Bo ? '1' : '0')),
        g.push(d),
        'm' == a.type
          ? g.push('p' + a.jo)
          : 'w' == a.type &&
            ((e = 'n' + a.jo), g.push(e), '0' == a.jo && g.push(d + e)),
        g.push('u' + (_.R('isLoggedIn') ? '1' : '0')),
        (a = Go('', g)),
        (a = Go('abc_', a).join(',')),
        b.report(c, { e: a }))
    }
  qo('blt', 'bs0', 'bs1')
  qo('psi', 'ps0', 'ps1')
  qo('rpcqi', 'rqe', 'rqd')
  qo('bsprt', 'bsrt0', 'bsrt1')
  qo('bsrqt', 'bsrt1', 'bsrt2')
  qo('bsrst', 'bsrt2', 'bsrt3')
  qo('mli', 'ml0', 'ml1')
  qo('mei', 'me0', 'me1', !0)
  qo('wcdi', 'wrs', 'wcdi')
  qo('wci', 'wrs', 'wdc')
  qo('wdi', 'wrs', 'wrdi')
  qo('wdt', 'bs0', 'wrdt')
  qo('wri', 'wrs', 'wrri', !0)
  qo('wrt', 'bs0', 'wrrt')
  qo('wji', 'wje0', 'wje1', !0)
  qo('wjli', 'wjl0', 'wjl1')
  qo('whi', 'wh0', 'wh1', !0)
  qo('wai', 'waaf0', 'waaf1', !0)
  qo('wadi', 'wrs', 'waaf1', !0)
  qo('wadt', 'bs0', 'waaf1', !0)
  qo('wprt', 'wrt0', 'wrt1')
  qo('wrqt', 'wrt1', 'wrt2')
  qo('wrst', 'wrt2', 'wrt3', !0)
  qo('fbprt', 'fsrt0', 'fsrt1')
  qo('fbrqt', 'fsrt1', 'fsrt2')
  qo('fbrst', 'fsrt2', 'fsrt3', !0)
  qo('fdns', 'fdns0', 'fdns1')
  qo('fcon', 'fcon0', 'fcon1')
  qo('freq', 'freq0', 'freq1')
  qo('frsp', 'frsp0', 'frsp1')
  qo('fttfb', 'fttfb0', 'fttfb1')
  qo('ftot', 'ftot0', 'ftot1', !0)
  var Ho = jo.r
  if ('function' !== typeof Ho) {
    for (var Io; (Io = Ho.shift()); ) Fo.apply(null, Io)
    jo.r = Fo
  }
  var Jo = ['div'],
    Ko = 'onload',
    Lo = !0,
    Mo = !0,
    No = function (a) {
      return a
    },
    Oo = null,
    Po = function (a) {
      var b = _.R(a)
      return 'undefined' !== typeof b ? b : _.R('gwidget/' + a)
    },
    kp,
    lp,
    mp,
    np,
    dp,
    fp,
    op,
    ep,
    pp,
    qp,
    rp,
    sp
  Oo = _.R()
  _.R('gwidget')
  var Qo = Po('parsetags')
  Ko = 'explicit' === Qo || 'onload' === Qo ? Qo : Ko
  var Ro = Po('google_analytics')
  'undefined' !== typeof Ro && (Lo = !!Ro)
  var So = Po('data_layer')
  'undefined' !== typeof So && (Mo = !!So)
  var To = function () {
      var a = this && this.ma()
      a && (_.ye.drw = a)
    },
    Uo = function () {
      _.ye.drw = null
    },
    Vo = function (a) {
      return function (b) {
        var c = a
        'number' === typeof b
          ? (c = b)
          : 'string' === typeof b &&
            ((c = b.indexOf('px')),
            -1 != c && (b = b.substring(0, c)),
            (c = parseInt(b, 10)))
        return c
      }
    },
    Wo = function (a) {
      'string' === typeof a && (a = window[a])
      return 'function' === typeof a ? a : null
    },
    Xo = function () {
      return Po('lang') || 'en-US'
    },
    Yo = function (a) {
      if (!_.p.rb('attach')) {
        var b = {},
          c = _.p.rb('inline'),
          d
        for (d in c) c.hasOwnProperty(d) && (b[d] = c[d])
        b.open = function (e) {
          var f = e.jc().renderData.id
          f = document.getElementById(f)
          if (!f) throw Error('F')
          return c.attach(e, f)
        }
        _.p.mc('attach', b)
      }
      a.style = 'attach'
    },
    Zo = (function () {
      var a = {}
      a.width = [Vo(450)]
      a.height = [Vo(24)]
      a.onready = [Wo]
      a.lang = [Xo, 'hl']
      a.iloader = [
        function () {
          return _.ye.ILI
        },
        'iloader',
      ]
      return a
    })(),
    bp = function (a) {
      var b = {}
      b.Ie = a[0]
      b.uo = -1
      b.p$ = '___' + b.Ie + '_'
      b.x_ = 'g:' + b.Ie
      b.O8 = 'g-' + b.Ie
      b.vK = []
      b.config = {}
      b.Ps = []
      b.wM = {}
      b.uw = {}
      var c = function (e) {
          for (var f in e)
            if (_.ne(e, f)) {
              b.config[f] = [Wo]
              b.Ps.push(f)
              var g = e[f],
                k = null,
                l = null,
                m = null
              'function' === typeof g
                ? (k = g)
                : g &&
                  'object' === typeof g &&
                  ((k = g.B8), (l = g.ww), (m = g.wD))
              m && (b.Ps.push(m), (b.config[m] = [Wo]), (b.wM[f] = m))
              k && (b.config[f] = [k])
              l && (b.uw[f] = l)
            }
        },
        d = function (e) {
          for (var f = {}, g = 0; g < e.length; ++g) f[e[g].toLowerCase()] = 1
          f[b.x_] = 1
          b.IV = f
        }
      a[1] && (b.parameters = a[1])
      ;(function (e) {
        b.config = e
        for (var f in Zo)
          Zo.hasOwnProperty(f) &&
            !b.config.hasOwnProperty(f) &&
            (b.config[f] = Zo[f])
      })(a[2] || {})
      a[3] && c(a[3])
      a[4] && d(a[4])
      a[5] && (b.tk = a[5])
      b.i$ = !0 === a[6]
      b.ZW = a[7]
      b.i_ = a[8]
      b.IV || d(Jo)
      b.eB = function (e) {
        b.uo++
        so('wrs', b.Ie, String(b.uo))
        var f = [],
          g = e.element,
          k = e.config,
          l = ':' + b.Ie
        ':plus' == l && e.rk && e.rk.action && (l += '_' + e.rk.action)
        var m = $o(b, k),
          n = {}
        _.oe(_.xn(), n)
        for (var r in e.rk) null != e.rk[r] && (n[r] = e.rk[r])
        r = {
          container: g.id,
          renderData: e.qX,
          style: 'inline',
          height: k.height,
          width: k.width,
        }
        Yo(r)
        b.tk && ((f[2] = r), (f[3] = n), (f[4] = m), b.tk('i', f))
        l = _.p.open(l, r, n, m)
        ap(b, l, k, g, e.kQ)
        f[5] = l
        b.tk && b.tk('e', f)
      }
      return b
    },
    $o = function (a, b) {
      for (var c = {}, d = a.Ps.length - 1; 0 <= d; --d) {
        var e = a.Ps[d],
          f = b[a.wM[e] || e] || b[e],
          g = b[e]
        g &&
          f !== g &&
          (f = (function (l, m) {
            return function (n) {
              m.apply(this, arguments)
              l.apply(this, arguments)
            }
          })(f, g))
        f && (c[e] = f)
      }
      for (var k in a.uw)
        a.uw.hasOwnProperty(k) && (c[k] = cp(c[k] || function () {}, a.uw[k]))
      c.drefresh = To
      c.erefresh = Uo
      return c
    },
    cp = function (a, b) {
      return function (c) {
        var d = b(c)
        if (d) {
          var e = c.href || null
          if (Lo) {
            if (window._gat)
              try {
                var f = window._gat._getTrackerByName('~0')
                f && 'UA-XXXXX-X' != f._getAccount()
                  ? f._trackSocial('Google', d, e)
                  : window._gaq &&
                    window._gaq.push(['_trackSocial', 'Google', d, e])
              } catch (k) {}
            if (window.ga && window.ga.getAll)
              try {
                var g = window.ga.getAll()
                for (f = 0; f < g.length; f++)
                  g[f].send('social', 'Google', d, e)
              } catch (k) {}
          }
          if (Mo && window.dataLayer)
            try {
              window.dataLayer.push({
                event: 'social',
                socialNetwork: 'Google',
                socialAction: d,
                socialTarget: e,
              })
            } catch (k) {}
        }
        a.call(this, c)
      }
    },
    ap = function (a, b, c, d, e) {
      dp(b, c)
      ep(b, d)
      fp(a, b, e)
      gp(a.Ie, a.uo.toString(), b)
      new hp().Ya.zm(a, b, c, d, e)
    },
    hp = function () {
      if (!this.Ya) {
        for (var a = this.constructor; a && !a.Km; ) a = a.T && a.T.constructor
        a.Km.BF || (a.Km.BF = Sn(a))
        this.Ya = new a.Km.BF(this)
        this.Fy || (this.Fy = on)
      }
    },
    ip = function () {},
    jp = hp
  ip.T || _.P(ip, Pn)
  jp.Km = ip
  ip.prototype.zm = (function (a) {
    a = a ? a : function () {}
    a.uJ = !0
    return a
  })()
  kp = function (a) {
    return _.Cm && 'undefined' != typeof _.Cm && a instanceof _.Cm
  }
  lp = function (a) {
    return kp(a) ? '_renderstart' : 'renderstart'
  }
  mp = function (a) {
    return kp(a) ? '_ready' : 'ready'
  }
  np = function () {
    return !0
  }
  dp = function (a, b) {
    if (b.onready) {
      var c = !1,
        d = function () {
          c || ((c = !0), b.onready.call(null))
        }
      a.register(mp(a), d, np)
      a.register(lp(a), d, np)
    }
  }
  fp = function (a, b, c) {
    var d = a.Ie,
      e = String(a.uo),
      f = !1,
      g = function () {
        f || ((f = !0), c && so('wrdt', d, e), so('wrdi', d, e))
      }
    b.register(lp(b), g, np)
    var k = !1
    a = function () {
      k || ((k = !0), g(), c && so('wrrt', d, e), so('wrri', d, e))
    }
    b.register(mp(b), a, np)
    kp(b)
      ? b.register('widget-interactive-' + b.id, a, np)
      : _.If.register('widget-interactive-' + b.id, a)
    _.If.register('widget-csi-tick-' + b.id, function (l, m, n) {
      'wdc' === l
        ? so('wdc', d, e, n)
        : 'wje0' === l
        ? so('wje0', d, e, n)
        : 'wje1' === l
        ? so('wje1', d, e, n)
        : 'wh0' == l
        ? _.ro('wh0', d, e, n)
        : 'wh1' == l
        ? _.ro('wh1', d, e, n)
        : 'wcdi' == l && _.ro('wcdi', d, e, n)
    })
  }
  op = function (a) {
    return 'number' == typeof a ? a + 'px' : '100%' == a ? a : null
  }
  ep = function (a, b) {
    var c = function (d) {
      d = d || a
      var e = op(d.width)
      e && b.style.width != e && (b.style.width = e)
      ;(d = op(d.height)) && b.style.height != d && (b.style.height = d)
    }
    kp(a)
      ? a.wL('onRestyle', c)
      : (a.register('ready', c, np),
        a.register('renderstart', c, np),
        a.register('resize', c, np))
  }
  pp = function (a, b) {
    for (var c in Zo)
      if (Zo.hasOwnProperty(c)) {
        var d = Zo[c][1]
        d && !b.hasOwnProperty(d) && (b[d] = a[d])
      }
    return b
  }
  qp = function (a, b) {
    var c = {},
      d
    for (d in a)
      a.hasOwnProperty(d) &&
        (c[a[d][1] || d] = ((a[d] && a[d][0]) || No)(b[d.toLowerCase()], b, Oo))
    return c
  }
  rp = function (a) {
    if ((a = a.ZW)) for (var b = 0; b < a.length; b++) new Image().src = a[b]
  }
  sp = function (a, b) {
    var c = b.userParams,
      d = b.siteElement
    d || (d = (d = b.iframeNode) && d.parentNode)
    if (d && 1 === d.nodeType) {
      var e = qp(a.config, c)
      a.vK.push({
        element: d,
        config: e,
        rk: pp(e, qp(a.parameters, c)),
        A9: 3,
        kQ: !!c['data-onload'],
        qX: b,
      })
    }
    b = a.vK
    for (a = a.eB; 0 < b.length; ) a(b.shift())
  }
  _.tp = function (a) {
    var b = bp(a)
    rp(b)
    _.Gj(b.Ie, function (d) {
      sp(b, d)
    })
    Un[b.Ie] = !0
    var c = {
      wa: function (d, e, f) {
        var g = e || {}
        g.type = b.Ie
        e = g.type
        delete g.type
        var k = $n(d)
        if (k) {
          d = {}
          for (var l in g) _.ne(g, l) && (d[l.toLowerCase()] = g[l])
          d.rd = 1
          ;(l = !!d.ri) && delete d.ri
          fo(e, k, d, [], 0, l, f)
        } else
          _.Bf(
            'string' === 'gapi.' + e + '.render: missing element ' + typeof d
              ? d
              : ''
          )
      },
      go: function (d) {
        go(d, b.Ie)
      },
      B9: function () {
        var d = _.le(_.ye, 'WI', _.me()),
          e
        for (e in d) delete d[e]
      },
    }
    a = function () {
      'onload' === Ko && c.go()
    }
    sn(b.Ie) || qn(a, a)
    _.L('gapi.' + b.Ie + '.go', c.go)
    _.L('gapi.' + b.Ie + '.render', c.wa)
    return c
  }
  var up = sp,
    vp = function (a, b) {
      a.uo++
      so('wrs', a.Ie, String(a.uo))
      var c = b.userParams,
        d = qp(a.config, c),
        e = [],
        f = b.iframeNode,
        g = b.siteElement,
        k = $o(a, d),
        l = qp(a.parameters, c)
      _.oe(_.xn(), l)
      l = pp(d, l)
      c = !!c['data-onload']
      var m = _.cm,
        n = _.me()
      n.renderData = b
      n.height = d.height
      n.width = d.width
      n.id = b.id
      n.url = b.url
      n.iframeEl = f
      n.where = n.container = g
      n.apis = ['_open']
      n.messageHandlers = k
      n.messageHandlersFilter = _.Km
      _.ln(n)
      f = l
      a.tk && ((e[2] = n), (e[3] = f), (e[4] = k), a.tk('i', e))
      k = m.wj(n)
      k.id = b.id
      k.CC(k, n)
      ap(a, k, d, g, c)
      e[5] = k
      a.tk && a.tk('e', e)
    }
  sp = function (a, b) {
    var c = b.url
    a.i_ || _.ji(c)
      ? _.Vm
        ? vp(a, b)
        : (0, _.mg)('gapi.iframes.impl', function () {
            vp(a, b)
          })
      : _.p.open
      ? up(a, b)
      : (0, _.mg)('iframes', function () {
          up(a, b)
        })
  }
  var wp = function () {
      var a = window
      return !!a.performance && !!a.performance.getEntries
    },
    gp = function (a, b, c) {
      if (wp()) {
        var d = (function () {
            var f = !1
            return function () {
              if (f) return !0
              f = !0
              return !1
            }
          })(),
          e = function () {
            d() ||
              window.setTimeout(function () {
                var f = c.Ka().src
                var g = f.indexOf('#')
                ;-1 != g && (f = f.substring(0, g))
                f = window.performance.getEntriesByName(f)
                1 > f.length
                  ? (f = null)
                  : ((f = f[0]), (f = 0 == f.responseStart ? null : f))
                if (f) {
                  g = Math.round(f.requestStart)
                  var k = Math.round(f.responseStart),
                    l = Math.round(f.responseEnd)
                  so('wrt0', a, b, Math.round(f.startTime))
                  so('wrt1', a, b, g)
                  so('wrt2', a, b, k)
                  so('wrt3', a, b, l)
                }
              }, 1e3)
          }
        c.register(lp(c), e, np)
        c.register(mp(c), e, np)
      }
    }
  _.L('gapi.widget.make', _.tp)

  _.Me = _.Me || {}
  _.Me.makeClosure = function (a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e)
      d.push(arguments[e])
    return function () {
      for (var g = d.slice(), k = 0, l = arguments.length; k < l; ++k)
        g.push(arguments[k])
      return b.apply(a, g)
    }
  }
  _.Me.Cq = function (a) {
    var b,
      c,
      d = {}
    for (b = 0; (c = a[b]); ++b) d[c] = c
    return d
  }

  _.Me = _.Me || {}
  ;(function () {
    function a(c, d) {
      return String.fromCharCode(d)
    }
    var b = {
      0: !1,
      10: !0,
      13: !0,
      34: !0,
      39: !0,
      60: !0,
      62: !0,
      92: !0,
      8232: !0,
      8233: !0,
      65282: !0,
      65287: !0,
      65308: !0,
      65310: !0,
      65340: !0,
    }
    _.Me.escape = function (c, d) {
      if (c) {
        if ('string' === typeof c) return _.Me.escapeString(c)
        if ('Array' === typeof c) {
          var e = 0
          for (d = c.length; e < d; ++e) c[e] = _.Me.escape(c[e])
        } else if ('object' === typeof c && d) {
          d = {}
          for (e in c)
            c.hasOwnProperty(e) &&
              (d[_.Me.escapeString(e)] = _.Me.escape(c[e], !0))
          return d
        }
      }
      return c
    }
    _.Me.escapeString = function (c) {
      if (!c) return c
      for (var d = [], e, f, g = 0, k = c.length; g < k; ++g)
        (e = c.charCodeAt(g)),
          (f = b[e]),
          !0 === f ? d.push('&#', e, ';') : !1 !== f && d.push(c.charAt(g))
      return d.join('')
    }
    _.Me.unescapeString = function (c) {
      return c ? c.replace(/&#([0-9]+);/g, a) : c
    }
  })()

  _.Dp = _.Dp || {}
  _.Dp.getViewportDimensions = function () {
    var a = 0,
      b = 0
    self.innerHeight
      ? ((a = self.innerWidth), (b = self.innerHeight))
      : document.documentElement && document.documentElement.clientHeight
      ? ((a = document.documentElement.clientWidth),
        (b = document.documentElement.clientHeight))
      : document.body &&
        ((a = document.body.clientWidth), (b = document.body.clientHeight))
    return { width: a, height: b }
  }

  _.Dp = _.Dp || {}
  ;(function () {
    function a() {
      function b(l, m) {
        l = window
          .getComputedStyle(l, '')
          .getPropertyValue(m)
          .match(/^([0-9]+)/)
        return parseInt(l[0], 10)
      }
      for (var c = 0, d = [document.body]; 0 < d.length; ) {
        var e = d.shift(),
          f = e.childNodes
        if ('undefined' !== typeof e.style) {
          var g = e.style.overflowY
          g ||
            (g = (g = document.defaultView.getComputedStyle(e, null))
              ? g.overflowY
              : null)
          if (
            'visible' != g &&
            'inherit' != g &&
            ((g = e.style.height),
            g ||
              (g = (g = document.defaultView.getComputedStyle(e, null))
                ? g.height
                : ''),
            0 < g.length && 'auto' != g)
          )
            continue
        }
        for (e = 0; e < f.length; e++) {
          g = f[e]
          if (
            'undefined' !== typeof g.offsetTop &&
            'undefined' !== typeof g.offsetHeight
          ) {
            var k = g.offsetTop + g.offsetHeight + b(g, 'margin-bottom')
            c = Math.max(c, k)
          }
          d.push(g)
        }
      }
      return (
        c +
        b(document.body, 'border-bottom') +
        b(document.body, 'margin-bottom') +
        b(document.body, 'padding-bottom')
      )
    }
    _.Dp.getHeight = function () {
      var b = _.Dp.getViewportDimensions().height,
        c = document.body,
        d = document.documentElement
      if ('CSS1Compat' === document.compatMode && d.scrollHeight)
        return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight
      if (0 <= navigator.userAgent.indexOf('AppleWebKit')) return a()
      if (c && d) {
        var e = d.scrollHeight,
          f = d.offsetHeight
        d.clientHeight !== f && ((e = c.scrollHeight), (f = c.offsetHeight))
        return e > b ? (e > f ? e : f) : e < f ? e : f
      }
    }
  })()

  _.Me = _.Me || {}
  _.Me.attachBrowserEvent = function (a, b, c, d) {
    'undefined' != typeof a.addEventListener
      ? a.addEventListener(b, c, d)
      : 'undefined' != typeof a.attachEvent
      ? a.attachEvent('on' + b, c)
      : _.Ne('cannot attachBrowserEvent: ' + b)
  }
  _.Me.nX = function (a) {
    var b = window
    b.removeEventListener
      ? b.removeEventListener('mousemove', a, !1)
      : b.detachEvent
      ? b.detachEvent('onmousemove', a)
      : _.Ne('cannot removeBrowserEvent: mousemove')
  }

  var rg
  rg = function () {
    function a() {
      e[0] = 1732584193
      e[1] = 4023233417
      e[2] = 2562383102
      e[3] = 271733878
      e[4] = 3285377520
      n = m = 0
    }
    function b(r) {
      for (var u = g, q = 0; 64 > q; q += 4)
        u[q / 4] = (r[q] << 24) | (r[q + 1] << 16) | (r[q + 2] << 8) | r[q + 3]
      for (q = 16; 80 > q; q++)
        (r = u[q - 3] ^ u[q - 8] ^ u[q - 14] ^ u[q - 16]),
          (u[q] = ((r << 1) | (r >>> 31)) & 4294967295)
      r = e[0]
      var v = e[1],
        t = e[2],
        w = e[3],
        y = e[4]
      for (q = 0; 80 > q; q++) {
        if (40 > q)
          if (20 > q) {
            var A = w ^ (v & (t ^ w))
            var B = 1518500249
          } else (A = v ^ t ^ w), (B = 1859775393)
        else
          60 > q
            ? ((A = (v & t) | (w & (v | t))), (B = 2400959708))
            : ((A = v ^ t ^ w), (B = 3395469782))
        A =
          ((((r << 5) | (r >>> 27)) & 4294967295) + A + y + B + u[q]) &
          4294967295
        y = w
        w = t
        t = ((v << 30) | (v >>> 2)) & 4294967295
        v = r
        r = A
      }
      e[0] = (e[0] + r) & 4294967295
      e[1] = (e[1] + v) & 4294967295
      e[2] = (e[2] + t) & 4294967295
      e[3] = (e[3] + w) & 4294967295
      e[4] = (e[4] + y) & 4294967295
    }
    function c(r, u) {
      if ('string' === typeof r) {
        r = unescape(encodeURIComponent(r))
        for (var q = [], v = 0, t = r.length; v < t; ++v)
          q.push(r.charCodeAt(v))
        r = q
      }
      u || (u = r.length)
      q = 0
      if (0 == m)
        for (; q + 64 < u; ) b(r.slice(q, q + 64)), (q += 64), (n += 64)
      for (; q < u; )
        if (((f[m++] = r[q++]), n++, 64 == m))
          for (m = 0, b(f); q + 64 < u; )
            b(r.slice(q, q + 64)), (q += 64), (n += 64)
    }
    function d() {
      var r = [],
        u = 8 * n
      56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56))
      for (var q = 63; 56 <= q; q--) (f[q] = u & 255), (u >>>= 8)
      b(f)
      for (q = u = 0; 5 > q; q++)
        for (var v = 24; 0 <= v; v -= 8) r[u++] = (e[q] >> v) & 255
      return r
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0
    var m, n
    a()
    return {
      reset: a,
      update: c,
      digest: d,
      Cg: function () {
        for (var r = d(), u = '', q = 0; q < r.length; q++)
          u +=
            '0123456789ABCDEF'.charAt(Math.floor(r[q] / 16)) +
            '0123456789ABCDEF'.charAt(r[q] % 16)
        return u
      },
    }
  }
  _.sg = (function () {
    function a(m) {
      var n = rg()
      n.update(m)
      return n.Cg()
    }
    var b = window.crypto
    if (b && 'function' == typeof b.getRandomValues)
      return function () {
        var m = new window.Uint32Array(1)
        b.getRandomValues(m)
        return Number('0.' + m[0])
      }
    var c = _.R('random/maxObserveMousemove')
    null == c && (c = -1)
    var d = 0,
      e = Math.random(),
      f = 1,
      g = 1e6 * (screen.width * screen.width + screen.height),
      k = function (m) {
        m = m || window.event
        var n = (m.screenX + m.clientX) << 16
        n += m.screenY + m.clientY
        n *= new Date().getTime() % 1e6
        f = (f * n) % g
        0 < c && ++d == c && _.Me.nX(k)
      }
    0 != c && _.Me.attachBrowserEvent(window, 'mousemove', k, !1)
    var l = a(
      document.cookie +
        '|' +
        document.location +
        '|' +
        new Date().getTime() +
        '|' +
        e
    )
    return function () {
      var m = f
      m += parseInt(l.substr(0, 20), 16)
      l = a(l)
      return m / (g + Math.pow(16, 20))
    }
  })()
  _.L('shindig.random', _.sg)

  var el
  el = function () {
    function a(k, l) {
      k = window
        .getComputedStyle(k, '')
        .getPropertyValue(l)
        .match(/^([0-9]+)/)
      return parseInt(k[0], 10)
    }
    for (var b = 0, c = [document.body]; 0 < c.length; ) {
      var d = c.shift(),
        e = d.childNodes
      if ('undefined' !== typeof d.style) {
        var f = d.style.overflowY
        f ||
          (f = (f = document.defaultView.getComputedStyle(d, null))
            ? f.overflowY
            : null)
        if (
          'visible' != f &&
          'inherit' != f &&
          ((f = d.style.height),
          f ||
            (f = (f = document.defaultView.getComputedStyle(d, null))
              ? f.height
              : ''),
          0 < f.length && 'auto' != f)
        )
          continue
      }
      for (d = 0; d < e.length; d++) {
        f = e[d]
        if (
          'undefined' !== typeof f.offsetTop &&
          'undefined' !== typeof f.offsetHeight
        ) {
          var g = f.offsetTop + f.offsetHeight + a(f, 'margin-bottom')
          b = Math.max(b, g)
        }
        c.push(f)
      }
    }
    return (
      b +
      a(document.body, 'border-bottom') +
      a(document.body, 'margin-bottom') +
      a(document.body, 'padding-bottom')
    )
  }
  _.fl = function () {
    var a = 0
    self.innerHeight
      ? (a = self.innerHeight)
      : document.documentElement && document.documentElement.clientHeight
      ? (a = document.documentElement.clientHeight)
      : document.body && (a = document.body.clientHeight)
    var b = document.body,
      c = document.documentElement
    if ('CSS1Compat' === document.compatMode && c.scrollHeight)
      return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight
    if (0 <= navigator.userAgent.indexOf('AppleWebKit')) return el()
    if (b && c) {
      var d = c.scrollHeight,
        e = c.offsetHeight
      c.clientHeight !== e && ((d = b.scrollHeight), (e = b.offsetHeight))
      return d > a ? (d > e ? d : e) : d < e ? d : e
    }
  }

  _.p.util = {}
  _.p.util.dh = {}
  _.p.util.dh.KP = function (a) {
    try {
      return !!a.document
    } catch (b) {}
    return !1
  }
  _.p.util.dh.mH = function (a) {
    var b = a.parent
    return a != b && _.p.util.dh.KP(b) ? _.p.util.dh.mH(b) : a
  }
  _.p.util.dh.C8 = function (a) {
    var b = a.userAgent || ''
    a = a.product || ''
    return (
      0 != b.indexOf('Opera') &&
      -1 == b.indexOf('WebKit') &&
      'Gecko' == a &&
      0 < b.indexOf('rv:1.')
    )
  }
  _.p.util.dh.makeClosure = function (a, b, c) {
    for (var d = [], e = 2, f = arguments.length; e < f; ++e)
      d.push(arguments[e])
    return function () {
      for (var g = d.slice(), k = 0, l = arguments.length; k < l; ++k)
        g.push(arguments[k])
      return b.apply(a, g)
    }
  }

  var Ep, Fp, Gp, Hp, Kp, Lp, Mp, Np, Op, Pp, Qp, Sp
  Ep = function () {
    _.If.register('_noop_echo', function () {
      this.callback(_.p.tS(_.p.bk[this.f]))
    })
  }
  Fp = function () {
    window.setTimeout(function () {
      _.If.call('..', '_noop_echo', _.p.NW)
    }, 0)
  }
  Gp = function (a, b, c) {
    var d = function (e) {
      var f = Array.prototype.slice.call(arguments, 0),
        g = f[f.length - 1]
      if ('function' === typeof g) {
        var k = g
        f.pop()
      }
      f.unshift(b, a, k, c)
      _.If.call.apply(_.If, f)
    }
    d._iframe_wrapped_rpc_ = !0
    return d
  }
  Hp = function (a) {
    _.p.Mv[a] ||
      ((_.p.Mv[a] = {}),
      _.If.register(a, function (b, c) {
        var d = this.f
        if (!('string' != typeof b || b in {} || d in {})) {
          var e = this.callback,
            f = _.p.Mv[a][d],
            g
          f && Object.hasOwnProperty.call(f, b)
            ? (g = f[b])
            : Object.hasOwnProperty.call(_.p.cn, a) && (g = _.p.cn[a])
          if (g)
            return (
              (d = Array.prototype.slice.call(arguments, 1)),
              g._iframe_wrapped_rpc_ && e && d.push(e),
              g.apply({}, d)
            )
        }
        _.Cf(
          [
            'Unregistered call in window "',
            window.name,
            '" for method "',
            a,
            '", via proxyId "',
            b,
            '" from frame "',
            d,
            '".',
          ].join('')
        )
        return null
      }))
    return _.p.Mv[a]
  }
  _.Ip = function () {
    var a = {}
    var b = window.location.href
    var c = b.indexOf('?'),
      d = b.indexOf('#')
    b = (-1 === d
      ? b.substr(c + 1)
      : [b.substr(c + 1, d - c - 1), '&', b.substr(d + 1)].join('')
    ).split('&')
    c = window.decodeURIComponent ? decodeURIComponent : unescape
    d = 0
    for (var e = b.length; d < e; ++d) {
      var f = b[d].indexOf('=')
      if (-1 !== f) {
        var g = b[d].substring(0, f)
        f = b[d].substring(f + 1)
        f = f.replace(/\+/g, ' ')
        try {
          a[g] = c(f)
        } catch (k) {}
      }
    }
    return a
  }
  _.Jp = function () {
    return (
      _.he.location.origin || _.he.location.protocol + '//' + _.he.location.host
    )
  }
  Kp = function (a) {
    _.ye.h = a
  }
  Lp = function (a) {
    _.ye.bsh = a
  }
  Mp = function (a) {
    var b = (window.___jsl = window.___jsl || {})
    b[a] = b[a] || []
    return b[a]
  }
  Np = function (a) {
    return 'object' === typeof a && /\[native code\]/.test(a.push)
  }
  Op = function (a, b, c) {
    if (b && 'object' === typeof b)
      for (var d in b)
        !Object.prototype.hasOwnProperty.call(b, d) ||
          (c && '___goc' === d && 'undefined' === typeof b[d]) ||
          (a[d] &&
          b[d] &&
          'object' === typeof a[d] &&
          'object' === typeof b[d] &&
          !Np(a[d]) &&
          !Np(b[d])
            ? Op(a[d], b[d])
            : b[d] && 'object' === typeof b[d]
            ? ((a[d] = Np(b[d]) ? [] : {}), Op(a[d], b[d]))
            : (a[d] = b[d]))
  }
  Pp = function (a) {
    if (a && !/^\s+$/.test(a)) {
      for (; 0 == a.charCodeAt(a.length - 1); ) a = a.substring(0, a.length - 1)
      try {
        var b = window.JSON.parse(a)
      } catch (c) {}
      if ('object' === typeof b) return b
      try {
        b = new Function('return (' + a + '\n)')()
      } catch (c) {}
      if ('object' === typeof b) return b
      try {
        b = new Function('return ({' + a + '\n})')()
      } catch (c) {}
      return 'object' === typeof b ? b : {}
    }
  }
  Qp = function (a, b) {
    var c = { ___goc: void 0 }
    a.length &&
      a[a.length - 1] &&
      Object.hasOwnProperty.call(a[a.length - 1], '___goc') &&
      'undefined' === typeof a[a.length - 1].___goc &&
      (c = a.pop())
    Op(c, b)
    a.push(c)
  }
  _.Rp = function (a, b) {
    var c
    if ('string' === typeof a) {
      var d = (c = {})
      a = a.split('/')
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var g = {}
        d = d[a[e]] = g
      }
      d[a[e]] = b
    } else c = a
    _.xh(!0)
    d = window.___gcfg
    b = Mp('cu')
    a = window.___gu
    d && d !== a && (Qp(b, d), (window.___gu = d))
    d = Mp('cu')
    e = document.scripts || document.getElementsByTagName('script') || []
    a = []
    f = []
    f.push.apply(f, Mp('us'))
    for (g = 0; g < e.length; ++g)
      for (var k = e[g], l = 0; l < f.length; ++l)
        k.src && 0 == k.src.indexOf(f[l]) && a.push(k)
    0 == a.length &&
      0 < e.length &&
      e[e.length - 1].src &&
      a.push(e[e.length - 1])
    for (e = 0; e < a.length; ++e)
      a[e].getAttribute('gapi_processed') ||
        (a[e].setAttribute('gapi_processed', !0),
        (f = a[e])
          ? ((g = f.nodeType),
            (f = 3 == g || 4 == g ? f.nodeValue : f.textContent || ''))
          : (f = void 0),
        (f = Pp(f)) && d.push(f))
    c && Qp(b, c)
    a = Mp('cd')
    c = 0
    for (d = a.length; c < d; ++c) Op(_.xh(), a[c], !0)
    a = Mp('ci')
    c = 0
    for (d = a.length; c < d; ++c) Op(_.xh(), a[c], !0)
    c = 0
    for (d = b.length; c < d; ++c) Op(_.xh(), b[c], !0)
  }
  Sp = function (a) {
    var b = _.se(a.location.href, 'urlindex')
    if ((b = _.le(_.ye, 'fUrl', [])[parseInt(b, 10)])) {
      var c = a.location.hash
      b += /#/.test(b) ? c.replace(/^#/, '&') : c
      a.location.replace(b)
    }
  }
  var Tp,
    Up = window.location.href,
    Vp = Up.indexOf('?'),
    Wp = Up.indexOf('#')
  Tp = (-1 === Wp
    ? Up.substr(Vp + 1)
    : [Up.substr(Vp + 1, Wp - Vp - 1), '&', Up.substr(Wp + 1)].join('')
  ).split('&')
  for (
    var Xp = window.decodeURIComponent ? decodeURIComponent : unescape,
      Yp = 0,
      Zp = Tp.length;
    Yp < Zp;
    ++Yp
  ) {
    var $p = Tp[Yp].indexOf('=')
    if (-1 !== $p) {
      var aq = Tp[Yp].substring($p + 1)
      aq = aq.replace(/\+/g, ' ')
      try {
        Xp(aq)
      } catch (a) {}
    }
  }
  if (window.ToolbarApi)
    (bq = window.ToolbarApi),
      (bq.kb = window.ToolbarApi.getInstance),
      (bq.prototype = window.ToolbarApi.prototype),
      (_.h = bq.prototype),
      (_.h.openWindow = bq.prototype.openWindow),
      (_.h.jF = bq.prototype.closeWindow),
      (_.h.vL = bq.prototype.setOnCloseHandler),
      (_.h.TE = bq.prototype.canClosePopup),
      (_.h.CK = bq.prototype.resizeWindow)
  else {
    var bq = function () {}
    bq.kb = function () {
      !cq && window.external && window.external.GTB_IsToolbar && (cq = new bq())
      return cq
    }
    _.h = bq.prototype
    _.h.openWindow = function (a) {
      return window.external.GTB_OpenPopup && window.external.GTB_OpenPopup(a)
    }
    _.h.jF = function (a) {
      window.external.GTB_ClosePopupWindow &&
        window.external.GTB_ClosePopupWindow(a)
    }
    _.h.vL = function (a, b) {
      window.external.GTB_SetOnCloseHandler &&
        window.external.GTB_SetOnCloseHandler(a, b)
    }
    _.h.TE = function (a) {
      return (
        window.external.GTB_CanClosePopup &&
        window.external.GTB_CanClosePopup(a)
      )
    }
    _.h.CK = function (a, b) {
      return (
        window.external.GTB_ResizeWindow &&
        window.external.GTB_ResizeWindow(a, b)
      )
    }
    var cq = null
    window.ToolbarApi = bq
    window.ToolbarApi.getInstance = bq.kb
  }
  var dq = /^[-_.0-9A-Za-z]+$/,
    eq = {
      open: 'open',
      onready: 'ready',
      close: 'close',
      onresize: 'resize',
      onOpen: 'open',
      onReady: 'ready',
      onClose: 'close',
      onResize: 'resize',
      onRenderStart: 'renderstart',
    },
    fq = { onBeforeParentOpen: 'beforeparentopen' },
    gq = {
      onOpen: function (a) {
        var b = a.jc()
        a.dg(b.container || b.element)
        return a
      },
      onClose: function (a) {
        a.remove()
      },
    },
    hq = function () {
      _.p.gI++
      return ['I', _.p.gI, '_', new Date().getTime()].join('')
    },
    iq,
    jq,
    kq,
    nq,
    oq,
    pq,
    qq,
    sq,
    rq
  _.p.dl = function (a) {
    var b = _.me()
    _.oe(_.Nj, b)
    _.oe(a, b)
    return b
  }
  iq = function (a) {
    return a instanceof Array ? a.join(',') : a instanceof Object ? _.xf(a) : a
  }
  jq = function (a) {
    var b = _.yh('googleapis.config/elog')
    if (b)
      try {
        b(a)
      } catch (c) {}
  }
  kq = function (a) {
    a && a.match(dq) && _.Rp('googleapis.config/gcv', a)
  }
  _.lq = function (a, b) {
    b = b || {}
    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
    return b
  }
  _.mq = function (a, b, c, d, e) {
    var f = [],
      g
    for (g in a)
      if (a.hasOwnProperty(g)) {
        var k = b,
          l = c,
          m = a[g],
          n = d,
          r = Hp(g)
        r[k] = r[k] || {}
        n = _.p.util.dh.makeClosure(n, m)
        m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0)
        r[k][l] = n
        f.push(g)
      }
    if (e) for (g in _.p.cn) _.p.cn.hasOwnProperty(g) && f.push(g)
    return f.join(',')
  }
  nq = function (a, b, c) {
    var d = {}
    if (a && a._methods) {
      a = a._methods.split(',')
      for (var e = 0; e < a.length; e++) {
        var f = a[e]
        d[f] = Gp(f, b, c)
      }
    }
    return d
  }
  oq = function (a) {
    if (a && a.disableMultiLevelParentRelay) a = !1
    else {
      var b
      if ((b = _.nn && _.nn._open && 'inline' != a.style && !0 !== a.inline))
        (a = a.container),
          (b = !(
            a &&
            (('string' == typeof a && document.getElementById(a)) ||
              document == (a.ownerDocument || a.document))
          ))
      a = b
    }
    return a
  }
  pq = function (a, b) {
    var c = {}
    b = b.params || {}
    for (var d in a)
      '#' == d.charAt(0) && (c[d.substring(1)] = a[d]),
        0 == d.indexOf('fr-') && (c[d.substring(3)] = a[d]),
        '#' == b[d] && (c[d] = a[d])
    for (var e in c) delete a['fr-' + e], delete a['#' + e], delete a[e]
    return c
  }
  qq = function (a) {
    if (':' == a.charAt(0)) {
      var b = _.yh('iframes/' + a.substring(1))
      a = {}
      _.oe(b, a)
      ;(b = a.url) && (a.url = _.Zj(b))
      a.params || (a.params = {})
      return a
    }
    return { url: _.Zj(a) }
  }
  sq = function (a) {
    function b() {}
    b.prototype = rq.prototype
    a.prototype = new b()
  }
  rq = function (a, b, c, d, e, f, g, k) {
    this.config = qq(a)
    this.openParams = this.Nq = b || {}
    this.params = c || {}
    this.methods = d
    this.nw = !1
    tq(this, b.style)
    this.Po = {}
    uq(this, function () {
      var l
      ;(l = this.Nq.style) && _.p.Ir[l]
        ? (l = _.p.Ir[l])
        : l
        ? (_.Df(
            [
              'Missing handler for style "',
              l,
              '". Continuing with default handler.',
            ].join('')
          ),
          (l = null))
        : (l = gq)
      if (l) {
        if ('function' === typeof l) var m = l(this)
        else {
          var n = {}
          for (m in l) {
            var r = l[m]
            n[m] =
              'function' === typeof r ? _.p.util.dh.makeClosure(l, r, this) : r
          }
          m = n
        }
        for (var u in e)
          (l = m[u]),
            'function' === typeof l &&
              vq(this, e[u], _.p.util.dh.makeClosure(m, l))
      }
      f && vq(this, 'close', f)
    })
    this.Li = this.ac = g
    this.jB = (k || []).slice()
    g && this.jB.unshift(g.ma())
  }
  rq.prototype.jc = function () {
    return this.Nq
  }
  rq.prototype.getParams = function () {
    return this.params
  }
  rq.prototype.St = function () {
    return this.methods
  }
  rq.prototype.Mc = function () {
    return this.Li
  }
  var tq = function (a, b) {
      a.nw ||
        ((b = b && !_.p.Ir[b] && _.p.ey[b])
          ? ((a.by = []),
            b(function () {
              a.nw = !0
              for (var c = 0, d = a.by.length; c < d; ++c) a.by[c].call(a)
            }))
          : (a.nw = !0))
    },
    uq = function (a, b) {
      a.nw ? b.call(a) : a.by.push(b)
    }
  rq.prototype.Od = function (a, b) {
    uq(this, function () {
      vq(this, a, b)
    })
  }
  var vq = function (a, b, c) {
    a.Po[b] = a.Po[b] || []
    a.Po[b].push(c)
  }
  rq.prototype.Vl = function (a, b) {
    uq(this, function () {
      var c = this.Po[a]
      if (c)
        for (var d = 0, e = c.length; d < e; ++d)
          if (c[d] === b) {
            c.splice(d, 1)
            break
          }
    })
  }
  rq.prototype.Mg = function (a, b) {
    var c = this.Po[a]
    if (c)
      for (
        var d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length;
        e < f;
        ++e
      )
        try {
          var g = c[e].apply({}, d)
        } catch (k) {
          _.Cf(
            [
              'Exception when calling callback "',
              a,
              '" with exception "',
              k.name,
              ': ',
              k.message,
              '".',
            ].join('')
          ),
            jq(k)
        }
    return g
  }
  var wq = function (a) {
    return 'number' == typeof a
      ? { value: a, Jy: a + 'px' }
      : '100%' == a
      ? { value: 100, Jy: '100%', EI: !0 }
      : null
  }
  rq.prototype.send = function (a, b, c) {
    _.p.QK(this, a, b, c)
  }
  rq.prototype.register = function (a, b) {
    var c = this
    c.Od(a, function (d) {
      b.call(c, d)
    })
  }
  var xq = function (a, b, c, d, e, f, g) {
    var k = this
    rq.call(this, a, b, c, d, eq, e, f, g)
    this.id = b.id || hq()
    this.er = (b.rpctoken && String(b.rpctoken)) || Math.round(1e9 * _.ai())
    this.rU = pq(this.params, this.config)
    this.xy = {}
    uq(this, function () {
      k.Mg('open')
      _.lq(k.xy, k)
    })
  }
  sq(xq)
  _.h = xq.prototype
  _.h.dg = function (a, b) {
    if (!this.config.url) return _.Cf('Cannot open iframe, empty URL.'), this
    var c = this.id
    _.p.bk[c] = this
    var d = _.lq(this.methods)
    d._ready = this.uv
    d._close = this.close
    d._open = this.SJ
    d._resizeMe = this.DK
    d._renderstart = this.KJ
    var e = this.rU
    this.er && (e.rpctoken = this.er)
    e._methods = _.mq(d, c, '', this, !0)
    this.el = a = 'string' === typeof a ? document.getElementById(a) : a
    d = { id: c }
    if (b) {
      d.attributes = b
      var f = b.style
      if ('string' === typeof f) {
        if (f) {
          var g = []
          f = f.split(';')
          for (var k = 0, l = f.length; k < l; ++k) {
            var m = f[k]
            if (0 != m.length || k + 1 != l)
              (m = m.split(':')),
                2 == m.length &&
                m[0].match(/^[ a-zA-Z_-]+$/) &&
                m[1].match(/^[ +.%0-9a-zA-Z_-]+$/)
                  ? g.push(m.join(':'))
                  : _.Cf(['Iframe style "', f[k], '" not allowed.'].join(''))
          }
          g = g.join(';')
        } else g = ''
        b.style = g
      }
    }
    this.jc().allowPost && (d.allowPost = !0)
    this.jc().forcePost && (d.forcePost = !0)
    d.queryParams = this.params
    d.fragmentParams = e
    d.paramsSerializer = iq
    this.Og = _.bk(this.config.url, a, d)
    a = this.Og.getAttribute('data-postorigin') || this.Og.src
    _.p.bk[c] = this
    _.If.setAuthToken(this.id, this.er)
    _.If.setRelayUrl(this.id, a)
    return this
  }
  _.h.Fg = function (a, b) {
    this.xy[a] = b
  }
  _.h.ma = function () {
    return this.id
  }
  _.h.Ka = function () {
    return this.Og
  }
  _.h.Ab = function () {
    return this.el
  }
  _.h.If = function (a) {
    this.el = a
  }
  _.h.uv = function (a) {
    var b = nq(a, this.id, '')
    this.Li &&
      'function' == typeof this.methods._ready &&
      ((a._methods = _.mq(b, this.Li.ma(), this.id, this, !1)),
      this.methods._ready(a))
    _.lq(a, this)
    _.lq(b, this)
    this.Mg('ready', a)
  }
  _.h.KJ = function (a) {
    this.Mg('renderstart', a)
  }
  _.h.close = function (a) {
    a = this.Mg('close', a)
    delete _.p.bk[this.id]
    return a
  }
  _.h.remove = function () {
    var a = document.getElementById(this.id)
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  _.h.SJ = function (a) {
    var b = nq(a.params, this.id, a.proxyId)
    delete a.params._methods
    '_parent' == a.openParams.anchor && (a.openParams.anchor = this.el)
    if (oq(a.openParams))
      new yq(
        a.url,
        a.openParams,
        a.params,
        b,
        b._onclose,
        this,
        a.openedByProxyChain
      )
    else {
      var c = new xq(
          a.url,
          a.openParams,
          a.params,
          b,
          b._onclose,
          this,
          a.openedByProxyChain
        ),
        d = this
      uq(c, function () {
        var e = { childId: c.ma() },
          f = c.xy
        f._toclose = c.close
        e._methods = _.mq(f, d.id, c.id, c, !1)
        b._onopen(e)
      })
    }
  }
  _.h.DK = function (a) {
    if (void 0 === this.Mg('resize', a) && this.Og) {
      var b = wq(a.width)
      null != b && (this.Og.style.width = b.Jy)
      a = wq(a.height)
      null != a && (this.Og.style.height = a.Jy)
      this.Og.parentElement &&
        ((null != b && b.EI) || (null != a && a.EI)) &&
        (this.Og.parentElement.style.display = 'block')
    }
  }
  var yq = function (a, b, c, d, e, f, g) {
    var k = this
    rq.call(this, a, b, c, d, fq, e, f, g)
    this.url = a
    this.km = null
    this.DB = hq()
    uq(this, function () {
      k.Mg('beforeparentopen')
      var l = _.lq(k.methods)
      l._onopen = k.DW
      l._ready = k.uv
      l._onclose = k.AW
      k.params._methods = _.mq(l, '..', k.DB, k, !0)
      l = {}
      for (var m in k.params) l[m] = iq(k.params[m])
      var n = k.config.url
      if (k.Nq.hideUrlFromParent) {
        m = window.name
        var r = n
        n = _.Cj(k.config.url, k.params, {}, iq)
        var u = l
        l = {}
        l._methods = u._methods
        l['#opener'] = u['#opener']
        l['#urlindex'] = u['#urlindex']
        l['#opener'] && void 0 != u['#urlindex']
          ? ((l['#opener'] = m + ',' + l['#opener']),
            (m = { url: r, params: l }))
          : ((r = _.le(_.ye, 'fUrl', [])),
            (u = r.length),
            (r[u] = n),
            (_.ye.rUrl = Sp),
            (l['#opener'] = m),
            (l['#urlindex'] = u),
            (m = _.pg(_.he.location.href)),
            (n =
              _.yh('iframes/relay_url_' + encodeURIComponent(m)) ||
              '/_/gapi/sibling/1/frame.html'),
            (m = { url: m + n, params: l }))
        n = m.url
        l = m.params
      }
      _.nn._open({
        url: n,
        openParams: k.Nq,
        params: l,
        proxyId: k.DB,
        openedByProxyChain: k.jB,
      })
    })
  }
  sq(yq)
  yq.prototype.IS = function () {
    return this.km
  }
  yq.prototype.DW = function (a) {
    this.km = a.childId
    var b = nq(a, '..', this.km)
    _.lq(b, this)
    this.close = b._toclose
    _.p.bk[this.km] = this
    this.Li &&
      this.methods._onopen &&
      ((a._methods = _.mq(b, this.Li.ma(), this.km, this, !1)),
      this.methods._onopen(a))
  }
  yq.prototype.uv = function (a) {
    var b = String(this.km),
      c = nq(a, '..', b)
    _.lq(a, this)
    _.lq(c, this)
    this.Mg('ready', a)
    this.Li &&
      this.methods._ready &&
      ((a._methods = _.mq(c, this.Li.ma(), b, this, !1)),
      this.methods._ready(a))
  }
  yq.prototype.AW = function (a) {
    if (this.Li && this.methods._onclose) this.methods._onclose(a)
    else return (a = this.Mg('close', a)), delete _.p.bk[this.km], a
  }
  var zq = function (a, b, c, d, e, f, g) {
    rq.call(this, a, b, c, d, fq, f, g)
    this.id = b.id || hq()
    this.XZ = e
    d._close = this.close
    this.onClosed = this.DJ
    this.JM = 0
    uq(this, function () {
      this.Mg('beforeparentopen')
      var k = _.lq(this.methods)
      this.params._methods = _.mq(k, '..', this.DB, this, !0)
      k = {}
      k.queryParams = this.params
      a = _.Sj(_.ie, this.config.url, this.id, k)
      var l = e.openWindow(a)
      this.canAutoClose = function (m) {
        m(e.TE(l))
      }
      e.vL(l, this)
      this.JM = l
    })
  }
  sq(zq)
  zq.prototype.close = function (a) {
    a = this.Mg('close', a)
    this.XZ.jF(this.JM)
    return a
  }
  zq.prototype.DJ = function () {
    this.Mg('close')
  }
  _.nn.send = function (a, b, c) {
    _.p.QK(_.nn, a, b, c)
  }
  ;(function () {
    function a(g) {
      return _.p.Ir[g]
    }
    function b(g, k) {
      _.p.Ir[g] = k
    }
    function c(g) {
      g = g || {}
      'auto' === g.height && (g.height = _.fl())
      var k = window && bq && bq.kb()
      k
        ? k.CK(g.width || 0, g.height || 0)
        : _.nn && _.nn._resizeMe && _.nn._resizeMe(g)
    }
    function d(g) {
      kq(g)
    }
    _.p.bk = {}
    _.p.Ir = {}
    _.p.ey = {}
    _.p.gI = 0
    _.p.Mv = {}
    _.p.cn = {}
    _.p.Bv = null
    _.p.Av = []
    _.p.NW = function (g) {
      var k = !1
      try {
        if (null != g) {
          var l = window.parent.frames[g.id]
          k = l.iframer.id == g.id && l.iframes.openedId_(_.nn.id)
        }
      } catch (m) {}
      try {
        _.p.Bv = {
          origin: this.origin,
          referer: this.referer,
          claimedOpenerId: g && g.id,
          claimedOpenerProxyChain: (g && g.proxyChain) || [],
          sameOrigin: k,
        }
        for (g = 0; g < _.p.Av.length; ++g) _.p.Av[g](_.p.Bv)
        _.p.Av = []
      } catch (m) {
        jq(m)
      }
    }
    _.p.tS = function (g) {
      var k = g && g.Li,
        l = null
      k && ((l = {}), (l.id = k.ma()), (l.proxyChain = g.jB))
      return l
    }
    Ep()
    if (window.parent != window) {
      var e = _.Ip()
      e.gcv && kq(e.gcv)
      var f = e.jsh
      f && Kp(f)
      _.lq(nq(e, '..', ''), _.nn)
      _.lq(e, _.nn)
      Fp()
    }
    _.p.rb = a
    _.p.mc = b
    _.p.OY = d
    _.p.resize = c
    _.p.IR = function (g) {
      return _.p.ey[g]
    }
    _.p.qC = function (g, k) {
      _.p.ey[g] = k
    }
    _.p.BK = c
    _.p.mZ = d
    _.p.iu = {}
    _.p.iu.get = a
    _.p.iu.set = b
    _.p.allow = function (g, k) {
      Hp(g)
      _.p.cn[g] = k || window[g]
    }
    _.p.M7 = function (g) {
      delete _.p.cn[g]
    }
    _.p.open = function (g, k, l, m, n, r) {
      3 == arguments.length
        ? (m = {})
        : 4 == arguments.length &&
          'function' === typeof m &&
          ((n = m), (m = {}))
      var u = 'bubble' === k.style && bq ? bq.kb() : null
      return u
        ? new zq(g, k, l, m, u, n, r)
        : oq(k)
        ? new yq(g, k, l, m, n, r)
        : new xq(g, k, l, m, n, r)
    }
    _.p.close = function (g, k) {
      _.nn && _.nn._close && _.nn._close(g, k)
    }
    _.p.ready = function (g, k, l) {
      2 == arguments.length && 'function' === typeof k && ((l = k), (k = {}))
      var m = g || {}
      'height' in m || (m.height = _.fl())
      m._methods = _.mq(k || {}, '..', '', _.nn, !0)
      _.nn && _.nn._ready && _.nn._ready(m, l)
    }
    _.p.bH = function (g) {
      _.p.Bv ? g(_.p.Bv) : _.p.Av.push(g)
    }
    _.p.HW = function (g) {
      return !!_.p.bk[g]
    }
    _.p.TR = function () {
      return [
        'https://ssl.gstatic.com/gb/js/',
        _.yh('googleapis.config/gcv'),
      ].join('')
    }
    _.p.hK = function (g) {
      var k = { mouseover: 1, mouseout: 1 }
      if (_.nn._event)
        for (var l = 0; l < g.length; l++) {
          var m = g[l]
          m in k &&
            document.addEventListener(
              m,
              function (n) {
                _.nn._event({ event: n.type, timestamp: new Date().getTime() })
              },
              !0
            )
        }
    }
    _.p.QK = function (g, k, l, m) {
      var n = this,
        r = []
      void 0 !== l && r.push(l)
      m &&
        r.push(function (u) {
          m.call(n, [u])
        })
      g[k] && g[k].apply(g, r)
    }
    _.p.Lw = function () {
      return !0
    }
    _.p.HP = function (g, k, l) {
      var m = Array.prototype.slice.call(arguments)
      _.p.bH(function (n) {
        n.sameOrigin &&
          (m.unshift(
            '/' +
              n.claimedOpenerId +
              '|' +
              window.location.protocol +
              '//' +
              window.location.host
          ),
          _.If.call.apply(_.If, m))
      })
    }
    _.p.jX = function (g, k) {
      _.If.register(g, k)
    }
    _.p.XY = Kp
    _.p.YK = Lp
    _.p.ZI = jq
    _.p.iI = _.nn
  })()
  _.L('iframes.allow', _.p.allow)
  _.L('iframes.callSiblingOpener', _.p.HP)
  _.L('iframes.registerForOpenedSibling', _.p.jX)
  _.L('iframes.close', _.p.close)
  _.L('iframes.getGoogleConnectJsUri', _.p.TR)
  _.L('iframes.getHandler', _.p.rb)
  _.L('iframes.getDeferredHandler', _.p.IR)
  _.L('iframes.getParentInfo', _.p.bH)
  _.L('iframes.iframer', _.p.iI)
  _.L('iframes.open', _.p.open)
  _.L('iframes.openedId_', _.p.HW)
  _.L('iframes.propagate', _.p.hK)
  _.L('iframes.ready', _.p.ready)
  _.L('iframes.resize', _.p.resize)
  _.L('iframes.setGoogleConnectJsVersion', _.p.OY)
  _.L('iframes.setBootstrapHint', _.p.YK)
  _.L('iframes.setJsHint', _.p.XY)
  _.L('iframes.setHandler', _.p.mc)
  _.L('iframes.setDeferredHandler', _.p.qC)
  _.L('IframeBase', rq)
  _.L('IframeBase.prototype.addCallback', rq.prototype.Od)
  _.L('IframeBase.prototype.getMethods', rq.prototype.St)
  _.L('IframeBase.prototype.getOpenerIframe', rq.prototype.Mc)
  _.L('IframeBase.prototype.getOpenParams', rq.prototype.jc)
  _.L('IframeBase.prototype.getParams', rq.prototype.getParams)
  _.L('IframeBase.prototype.removeCallback', rq.prototype.Vl)
  _.L('Iframe', xq)
  _.L('Iframe.prototype.close', xq.prototype.close)
  _.L('Iframe.prototype.exposeMethod', xq.prototype.Fg)
  _.L('Iframe.prototype.getId', xq.prototype.ma)
  _.L('Iframe.prototype.getIframeEl', xq.prototype.Ka)
  _.L('Iframe.prototype.getSiteEl', xq.prototype.Ab)
  _.L('Iframe.prototype.openInto', xq.prototype.dg)
  _.L('Iframe.prototype.remove', xq.prototype.remove)
  _.L('Iframe.prototype.setSiteEl', xq.prototype.If)
  _.L('Iframe.prototype.addCallback', xq.prototype.Od)
  _.L('Iframe.prototype.getMethods', xq.prototype.St)
  _.L('Iframe.prototype.getOpenerIframe', xq.prototype.Mc)
  _.L('Iframe.prototype.getOpenParams', xq.prototype.jc)
  _.L('Iframe.prototype.getParams', xq.prototype.getParams)
  _.L('Iframe.prototype.removeCallback', xq.prototype.Vl)
  _.L('IframeProxy', yq)
  _.L('IframeProxy.prototype.getTargetIframeId', yq.prototype.IS)
  _.L('IframeProxy.prototype.addCallback', yq.prototype.Od)
  _.L('IframeProxy.prototype.getMethods', yq.prototype.St)
  _.L('IframeProxy.prototype.getOpenerIframe', yq.prototype.Mc)
  _.L('IframeProxy.prototype.getOpenParams', yq.prototype.jc)
  _.L('IframeProxy.prototype.getParams', yq.prototype.getParams)
  _.L('IframeProxy.prototype.removeCallback', yq.prototype.Vl)
  _.L('IframeWindow', zq)
  _.L('IframeWindow.prototype.close', zq.prototype.close)
  _.L('IframeWindow.prototype.onClosed', zq.prototype.DJ)
  _.L('iframes.util.getTopMostAccessibleWindow', _.p.util.dh.mH)
  _.L('iframes.handlers.get', _.p.iu.get)
  _.L('iframes.handlers.set', _.p.iu.set)
  _.L('iframes.resizeMe', _.p.BK)
  _.L('iframes.setVersionOverride', _.p.mZ)
  _.L('iframes.CROSS_ORIGIN_IFRAMES_FILTER', _.p.Lw)
  _.L('IframeBase.prototype.send', rq.prototype.send)
  _.L('IframeBase.prototype.register', rq.prototype.register)
  _.L('Iframe.prototype.send', xq.prototype.send)
  _.L('Iframe.prototype.register', xq.prototype.register)
  _.L('IframeProxy.prototype.send', yq.prototype.send)
  _.L('IframeProxy.prototype.register', yq.prototype.register)
  _.L('IframeWindow.prototype.send', zq.prototype.send)
  _.L('IframeWindow.prototype.register', zq.prototype.register)
  _.L('iframes.iframer.send', _.p.iI.send)

  var qt = _.p.mc,
    rt = {
      open: function (a) {
        var b = _.gn(a.jc())
        return a.dg(b, { style: _.hn(b) })
      },
      attach: function (a, b) {
        var c = _.gn(a.jc()),
          d = b.id,
          e = b.getAttribute('data-postorigin') || b.src,
          f = /#(?:.*&)?rpctoken=(\d+)/.exec(e)
        f = f && f[1]
        a.id = d
        a.er = f
        a.el = c
        a.Og = b
        _.p.bk[d] = a
        b = _.lq(a.methods)
        b._ready = a.uv
        b._close = a.close
        b._open = a.SJ
        b._resizeMe = a.DK
        b._renderstart = a.KJ
        _.mq(b, d, '', a, !0)
        _.If.setAuthToken(a.id, a.er)
        _.If.setRelayUrl(a.id, e)
        c = _.p.dl({ style: _.hn(c) })
        for (var g in c)
          Object.prototype.hasOwnProperty.call(c, g) &&
            ('style' == g
              ? (a.Og.style.cssText = c[g])
              : a.Og.setAttribute(g, c[g]))
      },
    }
  rt.onready = _.jn
  rt.onRenderStart = _.jn
  rt.close = _.kn
  qt('inline', rt)

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Vg = function (a, b) {
    for (var c in a) if (a[c] == b) return !0
    return !1
  }
  _.Wg = function () {
    return (
      _.yb('Safari') &&
      !(
        _.Fb() ||
        _.yb('Coast') ||
        _.Cb() ||
        _.yb('Edge') ||
        _.yb('Edg/') ||
        _.yb('OPR') ||
        _.Eb() ||
        _.yb('Silk') ||
        _.yb('Android')
      )
    )
  }
  _.Xg = function () {
    return _.yb('Android') && !(_.Fb() || _.Eb() || _.Cb() || _.yb('Silk'))
  }
  _.Yg = _.Eb()
  _.Zg = _.lc() || _.yb('iPod')
  _.$g = _.yb('iPad')
  _.ah = _.Xg()
  _.bh = _.Fb()
  _.ch = _.Wg() && !_.mc()

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.dh = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d)
      255 < e && ((b[c++] = e & 255), (e >>= 8))
      b[c++] = e
    }
    return b
  }
  var eh
  eh = {}
  _.fh = null
  _.gh =
    _.uc ||
    (_.vc && !_.ch) ||
    _.qc ||
    (!_.ch && !_.rc && 'function' == typeof _.D.atob)
  _.ih = function (a, b) {
    void 0 === b && (b = 0)
    _.hh()
    b = eh[b]
    for (var c = [], d = 0; d < a.length; d += 3) {
      var e = a[d],
        f = d + 1 < a.length,
        g = f ? a[d + 1] : 0,
        k = d + 2 < a.length,
        l = k ? a[d + 2] : 0,
        m = e >> 2
      e = ((e & 3) << 4) | (g >> 4)
      g = ((g & 15) << 2) | (l >> 6)
      l &= 63
      k || ((l = 64), f || (g = 64))
      c.push(b[m], b[e], b[g] || '', b[l] || '')
    }
    return c.join('')
  }
  _.hh = function () {
    if (!_.fh) {
      _.fh = {}
      for (
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
            ''
          ),
          b = ['+/=', '+/', '-_=', '-_.', '-_'],
          c = 0;
        5 > c;
        c++
      ) {
        var d = a.concat(b[c].split(''))
        eh[c] = d
        for (var e = 0; e < d.length; e++) {
          var f = d[e]
          void 0 === _.fh[f] && (_.fh[f] = e)
        }
      }
    }
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Ch
  _.Bh = function (a) {
    this.nb = a || { cookie: '' }
  }
  _.h = _.Bh.prototype
  _.h.isEnabled = function () {
    return navigator.cookieEnabled
  }
  _.h.set = function (a, b, c) {
    var d = !1
    if ('object' === typeof c) {
      var e = c.I9
      d = c.secure || !1
      var f = c.domain || void 0
      var g = c.path || void 0
      var k = c.dJ
    }
    if (/[;=\s]/.test(a)) throw Error('y`' + a)
    if (/[;\r\n]/.test(b)) throw Error('z`' + b)
    void 0 === k && (k = -1)
    this.nb.cookie =
      a +
      '=' +
      b +
      (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (0 > k
        ? ''
        : 0 == k
        ? ';expires=' + new Date(1970, 1, 1).toUTCString()
        : ';expires=' + new Date(Date.now() + 1e3 * k).toUTCString()) +
      (d ? ';secure' : '') +
      (null != e ? ';samesite=' + e : '')
  }
  _.h.get = function (a, b) {
    for (
      var c = a + '=', d = (this.nb.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = (0, _.qb)(d[e])
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length)
      if (f == a) return ''
    }
    return b
  }
  _.h.remove = function (a, b, c) {
    var d = this.Pd(a)
    this.set(a, '', { dJ: 0, path: b, domain: c })
    return d
  }
  _.h.re = function () {
    return Ch(this).keys
  }
  _.h.Tc = function () {
    return Ch(this).values
  }
  _.h.isEmpty = function () {
    return !this.nb.cookie
  }
  _.h.Fb = function () {
    return this.nb.cookie ? (this.nb.cookie || '').split(';').length : 0
  }
  _.h.Pd = function (a) {
    return void 0 !== this.get(a)
  }
  _.h.Cj = function (a) {
    for (var b = Ch(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0
    return !1
  }
  _.h.clear = function () {
    for (var a = Ch(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
  }
  Ch = function (a) {
    a = (a.nb.cookie || '').split(';')
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = (0, _.qb)(a[f])),
        (d = e.indexOf('=')),
        -1 == d
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
    return { keys: b, values: c }
  }
  _.Dh = new _.Bh('undefined' == typeof document ? null : document)

  _.Ph = {}
  _.Qh = function (a) {
    return _.Ph[a || 'token'] || null
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.ki = function (a, b) {
    a: {
      for (
        var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e
          break a
        }
      b = -1
    }
    return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b]
  }
  _.li = function (a, b) {
    a.prototype = (0, _.Ea)(b.prototype)
    a.prototype.constructor = a
    if (_.Pa) (0, _.Pa)(a, b)
    else
      for (var c in b)
        if ('prototype' != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c)
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c]
    a.T = b.prototype
  }
  _.mi = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1)
    return function () {
      var d = c.slice()
      d.push.apply(d, arguments)
      return a.apply(this, d)
    }
  }
  _.ni = []
  _.oi = []
  _.pi = !1
  _.qi = function (a) {
    _.ni[_.ni.length] = a
    if (_.pi)
      for (var b = 0; b < _.oi.length; b++) a((0, _.Q)(_.oi[b].wrap, _.oi[b]))
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var vi
  _.ri = function (a, b) {
    b = (0, _.Wa)(a, b)
    var c
    ;(c = 0 <= b) && Array.prototype.splice.call(a, b, 1)
    return c
  }
  _.si = function (a) {
    a && 'function' == typeof a.Da && a.Da()
  }
  _.ti = function (a, b) {
    a = a.split('.')
    b = b || _.D
    for (var c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null
    return b
  }
  _.ui = function (a, b) {
    var c = a.length - b.length
    return 0 <= c && a.indexOf(b, c) == c
  }
  vi = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0
    return !1
  }
  _.wi = function (a) {
    for (var b in a) return !1
    return !0
  }
  _.xi = function () {
    this.Nb = this.Nb
    this.Ll = this.Ll
  }
  _.xi.prototype.Nb = !1
  _.xi.prototype.xn = function () {
    return this.Nb
  }
  _.xi.prototype.Da = function () {
    this.Nb || ((this.Nb = !0), this.va())
  }
  _.zi = function (a, b) {
    _.yi(a, _.mi(_.si, b))
  }
  _.yi = function (a, b) {
    a.Nb ? b() : (a.Ll || (a.Ll = []), a.Ll.push(b))
  }
  _.xi.prototype.va = function () {
    if (this.Ll) for (; this.Ll.length; ) this.Ll.shift()()
  }
  _.Ai = function (a, b) {
    this.type = a
    this.currentTarget = this.target = b
    this.defaultPrevented = this.Tl = !1
  }
  _.Ai.prototype.stopPropagation = function () {
    this.Tl = !0
  }
  _.Ai.prototype.preventDefault = function () {
    this.defaultPrevented = !0
  }
  var Ci, Di
  _.Bi = !_.rc || _.Pc(9)
  Ci = !_.rc || _.Pc(9)
  Di = _.rc && !_.Nc('9')
  !_.vc || _.Nc('528')
  ;(_.uc && _.Nc('1.9b')) ||
    (_.rc && _.Nc('8')) ||
    (_.qc && _.Nc('9.5')) ||
    (_.vc && _.Nc('528'))
  ;(_.uc && !_.Nc('8')) || (_.rc && _.Nc('9'))
  var Ei = (function () {
    if (!_.D.addEventListener || !Object.defineProperty) return !1
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0
        },
      })
    try {
      _.D.addEventListener('test', _.Za, b),
        _.D.removeEventListener('test', _.Za, b)
    } catch (c) {}
    return a
  })()
  _.Fi = function (a, b) {
    _.Ai.call(this, a ? a.type : '')
    this.relatedTarget = this.currentTarget = this.target = null
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0
    this.key = ''
    this.charCode = this.keyCode = 0
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1
    this.state = null
    this.sB = !1
    this.pointerId = 0
    this.pointerType = ''
    this.ne = null
    a && this.init(a, b)
  }
  _.P(_.Fi, _.Ai)
  var Gi = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  _.Fi.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null
    this.target = a.target || a.srcElement
    this.currentTarget = b
    ;(b = a.relatedTarget)
      ? _.uc && (_.oc(b, 'nodeName') || (b = null))
      : 'mouseover' == c
      ? (b = a.fromElement)
      : 'mouseout' == c && (b = a.toElement)
    this.relatedTarget = b
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = _.vc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = _.vc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0))
    this.button = a.button
    this.keyCode = a.keyCode || 0
    this.key = a.key || ''
    this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0)
    this.ctrlKey = a.ctrlKey
    this.altKey = a.altKey
    this.shiftKey = a.shiftKey
    this.metaKey = a.metaKey
    this.sB = _.xc ? a.metaKey : a.ctrlKey
    this.pointerId = a.pointerId || 0
    this.pointerType =
      'string' === typeof a.pointerType
        ? a.pointerType
        : Gi[a.pointerType] || ''
    this.state = a.state
    this.ne = a
    a.defaultPrevented && _.Fi.T.preventDefault.call(this)
  }
  _.Fi.prototype.stopPropagation = function () {
    _.Fi.T.stopPropagation.call(this)
    this.ne.stopPropagation
      ? this.ne.stopPropagation()
      : (this.ne.cancelBubble = !0)
  }
  _.Fi.prototype.preventDefault = function () {
    _.Fi.T.preventDefault.call(this)
    var a = this.ne
    if (a.preventDefault) a.preventDefault()
    else if (((a.returnValue = !1), Di))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1
      } catch (b) {}
  }
  _.Hi = 'closure_listenable_' + ((1e6 * Math.random()) | 0)
  _.Ii = function (a) {
    return !(!a || !a[_.Hi])
  }
  var Ji = 0
  var Ki = function (a, b, c, d, e) {
      this.listener = a
      this.Iv = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.Ne = e
      this.key = ++Ji
      this.Mn = this.Os = !1
    },
    Li = function (a) {
      a.Mn = !0
      a.listener = null
      a.Iv = null
      a.src = null
      a.Ne = null
    }
  var Mi = function (a) {
    this.src = a
    this.od = {}
    this.Tr = 0
  }
  Mi.prototype.add = function (a, b, c, d, e) {
    var f = a.toString()
    a = this.od[f]
    a || ((a = this.od[f] = []), this.Tr++)
    var g = Ni(a, b, d, e)
    ;-1 < g
      ? ((b = a[g]), c || (b.Os = !1))
      : ((b = new Ki(b, this.src, f, !!d, e)), (b.Os = c), a.push(b))
    return b
  }
  Mi.prototype.remove = function (a, b, c, d) {
    a = a.toString()
    if (!(a in this.od)) return !1
    var e = this.od[a]
    b = Ni(e, b, c, d)
    return -1 < b
      ? (Li(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.od[a], this.Tr--),
        !0)
      : !1
  }
  var Oi = function (a, b) {
    var c = b.type
    if (!(c in a.od)) return !1
    var d = _.ri(a.od[c], b)
    d && (Li(b), 0 == a.od[c].length && (delete a.od[c], a.Tr--))
    return d
  }
  Mi.prototype.removeAll = function (a) {
    a = a && a.toString()
    var b = 0,
      c
    for (c in this.od)
      if (!a || c == a) {
        for (var d = this.od[c], e = 0; e < d.length; e++) ++b, Li(d[e])
        delete this.od[c]
        this.Tr--
      }
    return b
  }
  Mi.prototype.Vm = function (a, b, c, d) {
    a = this.od[a.toString()]
    var e = -1
    a && (e = Ni(a, b, c, d))
    return -1 < e ? a[e] : null
  }
  Mi.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : '',
      e = void 0 !== b
    return vi(this.od, function (f) {
      for (var g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0
      return !1
    })
  }
  var Ni = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e]
      if (!f.Mn && f.listener == b && f.capture == !!c && f.Ne == d) return e
    }
    return -1
  }
  var Pi, Qi, Ri, Vi, Xi, Yi, ij, cj, Zi, jj
  Pi = 'closure_lm_' + ((1e6 * Math.random()) | 0)
  Qi = {}
  Ri = 0
  _.Ti = function (a, b, c, d, e) {
    if (d && d.once) return _.Si(a, b, c, d, e)
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) _.Ti(a, b[f], c, d, e)
      return null
    }
    c = _.Ui(c)
    return _.Ii(a)
      ? a.V(b, c, _.Ya(d) ? !!d.capture : !!d, e)
      : Vi(a, b, c, !1, d, e)
  }
  Vi = function (a, b, c, d, e, f) {
    if (!b) throw Error('A')
    var g = _.Ya(e) ? !!e.capture : !!e,
      k = _.Wi(a)
    k || (a[Pi] = k = new Mi(a))
    c = k.add(b, c, d, g, f)
    if (c.Iv) return c
    d = Xi()
    c.Iv = d
    d.src = a
    d.listener = c
    if (a.addEventListener)
      Ei || (e = g),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e)
    else if (a.attachEvent) a.attachEvent(Yi(b.toString()), d)
    else if (a.addListener && a.removeListener) a.addListener(d)
    else throw Error('B')
    Ri++
    return c
  }
  Xi = function () {
    var a = Zi,
      b = Ci
        ? function (c) {
            return a.call(b.src, b.listener, c)
          }
        : function (c) {
            c = a.call(b.src, b.listener, c)
            if (!c) return c
          }
    return b
  }
  _.Si = function (a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) _.Si(a, b[f], c, d, e)
      return null
    }
    c = _.Ui(c)
    return _.Ii(a)
      ? a.En(b, c, _.Ya(d) ? !!d.capture : !!d, e)
      : Vi(a, b, c, !0, d, e)
  }
  _.$i = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) _.$i(a, b[f], c, d, e)
    else
      (d = _.Ya(d) ? !!d.capture : !!d),
        (c = _.Ui(c)),
        _.Ii(a)
          ? a.Zb(b, c, d, e)
          : a && (a = _.Wi(a)) && (b = a.Vm(b, c, d, e)) && _.aj(b)
  }
  _.aj = function (a) {
    if ('number' === typeof a || !a || a.Mn) return !1
    var b = a.src
    if (_.Ii(b)) return b.kD(a)
    var c = a.type,
      d = a.Iv
    b.removeEventListener
      ? b.removeEventListener(c, d, a.capture)
      : b.detachEvent
      ? b.detachEvent(Yi(c), d)
      : b.addListener && b.removeListener && b.removeListener(d)
    Ri--
    ;(c = _.Wi(b))
      ? (Oi(c, a), 0 == c.Tr && ((c.src = null), (b[Pi] = null)))
      : Li(a)
    return !0
  }
  Yi = function (a) {
    return a in Qi ? Qi[a] : (Qi[a] = 'on' + a)
  }
  ij = function (a, b, c, d) {
    var e = !0
    if ((a = _.Wi(a)))
      if ((b = a.od[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a]
          f && f.capture == c && !f.Mn && ((f = cj(f, d)), (e = e && !1 !== f))
        }
    return e
  }
  cj = function (a, b) {
    var c = a.listener,
      d = a.Ne || a.src
    a.Os && _.aj(a)
    return c.call(d, b)
  }
  Zi = function (a, b) {
    if (a.Mn) return !0
    if (!Ci) {
      var c = b || _.ti('window.event')
      b = new _.Fi(c, this)
      var d = !0
      if (!(0 > c.keyCode || void 0 != c.returnValue)) {
        a: {
          var e = !1
          if (0 == c.keyCode)
            try {
              c.keyCode = -1
              break a
            } catch (g) {
              e = !0
            }
          if (e || void 0 == c.returnValue) c.returnValue = !0
        }
        c = []
        for (e = b.currentTarget; e; e = e.parentNode) c.push(e)
        a = a.type
        for (e = c.length - 1; !b.Tl && 0 <= e; e--) {
          b.currentTarget = c[e]
          var f = ij(c[e], a, !0, b)
          d = d && f
        }
        for (e = 0; !b.Tl && e < c.length; e++)
          (b.currentTarget = c[e]), (f = ij(c[e], a, !1, b)), (d = d && f)
      }
      return d
    }
    return cj(a, new _.Fi(b, this))
  }
  _.Wi = function (a) {
    a = a[Pi]
    return a instanceof Mi ? a : null
  }
  jj = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  _.Ui = function (a) {
    if ('function' === typeof a) return a
    a[jj] ||
      (a[jj] = function (b) {
        return a.handleEvent(b)
      })
    return a[jj]
  }
  _.qi(function (a) {
    Zi = a(Zi)
  })
  _.kj = function () {
    _.xi.call(this)
    this.Bi = new Mi(this)
    this.iP = this
    this.oB = null
  }
  _.P(_.kj, _.xi)
  _.kj.prototype[_.Hi] = !0
  _.h = _.kj.prototype
  _.h.jl = function () {
    return this.oB
  }
  _.h.dw = _.ja(12)
  _.h.addEventListener = function (a, b, c, d) {
    _.Ti(this, a, b, c, d)
  }
  _.h.removeEventListener = function (a, b, c, d) {
    _.$i(this, a, b, c, d)
  }
  _.h.dispatchEvent = function (a) {
    var b,
      c = this.jl()
    if (c) for (b = []; c; c = c.jl()) b.push(c)
    c = this.iP
    var d = a.type || a
    if ('string' === typeof a) a = new _.Ai(a, c)
    else if (a instanceof _.Ai) a.target = a.target || c
    else {
      var e = a
      a = new _.Ai(d, c)
      _.Bb(a, e)
    }
    e = !0
    if (b)
      for (var f = b.length - 1; !a.Tl && 0 <= f; f--) {
        var g = (a.currentTarget = b[f])
        e = g.wp(d, !0, a) && e
      }
    a.Tl ||
      ((g = a.currentTarget = c),
      (e = g.wp(d, !0, a) && e),
      a.Tl || (e = g.wp(d, !1, a) && e))
    if (b)
      for (f = 0; !a.Tl && f < b.length; f++)
        (g = a.currentTarget = b[f]), (e = g.wp(d, !1, a) && e)
    return e
  }
  _.h.va = function () {
    _.kj.T.va.call(this)
    this.HB()
    this.oB = null
  }
  _.h.V = function (a, b, c, d) {
    return this.Bi.add(String(a), b, !1, c, d)
  }
  _.h.En = function (a, b, c, d) {
    return this.Bi.add(String(a), b, !0, c, d)
  }
  _.h.Zb = function (a, b, c, d) {
    return this.Bi.remove(String(a), b, c, d)
  }
  _.h.kD = function (a) {
    return Oi(this.Bi, a)
  }
  _.h.HB = function (a) {
    this.Bi && this.Bi.removeAll(a)
  }
  _.h.wp = function (a, b, c) {
    a = this.Bi.od[String(a)]
    if (!a) return !0
    a = a.concat()
    for (var d = !0, e = 0; e < a.length; ++e) {
      var f = a[e]
      if (f && !f.Mn && f.capture == b) {
        var g = f.listener,
          k = f.Ne || f.src
        f.Os && this.kD(f)
        d = !1 !== g.call(k, c) && d
      }
    }
    return d && !c.defaultPrevented
  }
  _.h.Vm = function (a, b, c, d) {
    return this.Bi.Vm(String(a), b, c, d)
  }
  _.h.hasListener = function (a, b) {
    return this.Bi.hasListener(void 0 !== a ? String(a) : void 0, b)
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var mk, uk
  mk = function (a) {
    _.D.setTimeout(function () {
      throw a
    }, 0)
  }
  _.nk = function (a, b) {
    for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1
    for (var d in b) if (!(d in a)) return !1
    return !0
  }
  _.ok = function (a) {
    var b = {},
      c
    for (c in a) b[c] = a[c]
    return b
  }
  _.pk = function (a) {
    return a
  }
  _.qk = function (a, b) {
    a.src = _.qd(b)
    ;(b = _.$c(a.ownerDocument && a.ownerDocument.defaultView)) &&
      a.setAttribute('nonce', b)
  }
  _.rk = function (a) {
    var b = window.location
    a = a instanceof _.Sb ? a : _.Ad(a)
    b.href = _.ud(a)
  }
  _.sk = function (a) {
    a.prototype.$goog_Thenable = !0
  }
  _.tk = function (a) {
    if (!a) return !1
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  }
  uk = function (a, b) {
    this.jQ = a
    this.EX = b
    this.mv = 0
    this.Oe = null
  }
  uk.prototype.get = function () {
    if (0 < this.mv) {
      this.mv--
      var a = this.Oe
      this.Oe = a.next
      a.next = null
    } else a = this.jQ()
    return a
  }
  uk.prototype.put = function (a) {
    this.EX(a)
    100 > this.mv && (this.mv++, (a.next = this.Oe), (this.Oe = a))
  }
  var wk, xk, vk
  _.yk = function (a) {
    a = vk(a)
    'function' !== typeof _.D.setImmediate ||
    (_.D.Window &&
      _.D.Window.prototype &&
      !_.yb('Edge') &&
      _.D.Window.prototype.setImmediate == _.D.setImmediate)
      ? (wk || (wk = xk()), wk(a))
      : _.D.setImmediate(a)
  }
  xk = function () {
    var a = _.D.MessageChannel
    'undefined' === typeof a &&
      'undefined' !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !_.yb('Presto') &&
      (a = function () {
        var e = _.Wd('IFRAME')
        e.style.display = 'none'
        document.documentElement.appendChild(e)
        var f = e.contentWindow
        e = f.document
        e.open()
        e.close()
        var g = 'callImmediate' + Math.random(),
          k =
            'file:' == f.location.protocol
              ? '*'
              : f.location.protocol + '//' + f.location.host
        e = (0, _.Q)(function (l) {
          if (('*' == k || l.origin == k) && l.data == g) this.port1.onmessage()
        }, this)
        f.addEventListener('message', e, !1)
        this.port1 = {}
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, k)
          },
        }
      })
    if ('undefined' !== typeof a && !_.Db()) {
      var b = new a(),
        c = {},
        d = c
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next
          var e = c.cb
          c.cb = null
          e()
        }
      }
      return function (e) {
        d.next = { cb: e }
        d = d.next
        b.port2.postMessage(0)
      }
    }
    return function (e) {
      _.D.setTimeout(e, 0)
    }
  }
  vk = _.pk
  _.qi(function (a) {
    vk = a
  })
  var zk = function () {
    this.Gw = this.vo = null
  }
  zk.prototype.add = function (a, b) {
    var c = Ak.get()
    c.set(a, b)
    this.Gw ? (this.Gw.next = c) : (this.vo = c)
    this.Gw = c
  }
  zk.prototype.remove = function () {
    var a = null
    this.vo &&
      ((a = this.vo),
      (this.vo = this.vo.next),
      this.vo || (this.Gw = null),
      (a.next = null))
    return a
  }
  var Ak = new uk(
      function () {
        return new Bk()
      },
      function (a) {
        return a.reset()
      }
    ),
    Bk = function () {
      this.next = this.scope = this.Gg = null
    }
  Bk.prototype.set = function (a, b) {
    this.Gg = a
    this.scope = b
    this.next = null
  }
  Bk.prototype.reset = function () {
    this.next = this.scope = this.Gg = null
  }
  var Ck, Dk, Ek, Fk, Hk
  _.Gk = function (a, b) {
    Ck || Dk()
    Ek || (Ck(), (Ek = !0))
    Fk.add(a, b)
  }
  Dk = function () {
    if (_.D.Promise && _.D.Promise.resolve) {
      var a = _.D.Promise.resolve(void 0)
      Ck = function () {
        a.then(Hk)
      }
    } else
      Ck = function () {
        _.yk(Hk)
      }
  }
  Ek = !1
  Fk = new zk()
  Hk = function () {
    for (var a; (a = Fk.remove()); ) {
      try {
        a.Gg.call(a.scope)
      } catch (b) {
        mk(b)
      }
      Ak.put(a)
    }
    Ek = !1
  }
  var Jk, Kk, Vk, Tk
  _.Ik = function (a, b) {
    this.Ea = 0
    this.Ri = void 0
    this.Gm = this.Aj = this.Za = null
    this.bu = this.vy = !1
    if (a != _.Za)
      try {
        var c = this
        a.call(
          b,
          function (d) {
            c.Ug(2, d)
          },
          function (d) {
            c.Ug(3, d)
          }
        )
      } catch (d) {
        this.Ug(3, d)
      }
  }
  Jk = function () {
    this.next = this.context = this.Gn = this.Jq = this.Nk = null
    this.Ho = !1
  }
  Jk.prototype.reset = function () {
    this.context = this.Gn = this.Jq = this.Nk = null
    this.Ho = !1
  }
  Kk = new uk(
    function () {
      return new Jk()
    },
    function (a) {
      a.reset()
    }
  )
  _.Lk = function (a, b, c) {
    var d = Kk.get()
    d.Jq = a
    d.Gn = b
    d.context = c
    return d
  }
  _.Mk = function (a) {
    if (a instanceof _.Ik) return a
    var b = new _.Ik(_.Za)
    b.Ug(2, a)
    return b
  }
  _.Nk = function (a) {
    return new _.Ik(function (b, c) {
      c(a)
    })
  }
  _.Pk = function (a, b, c) {
    Ok(a, b, c, null) || _.Gk(_.mi(b, a))
  }
  _.Qk = function (a) {
    return new _.Ik(function (b, c) {
      var d = a.length,
        e = []
      if (d)
        for (
          var f = function (m, n) {
              d--
              e[m] = n
              0 == d && b(e)
            },
            g = function (m) {
              c(m)
            },
            k = 0,
            l;
          k < a.length;
          k++
        )
          (l = a[k]), _.Pk(l, _.mi(f, k), g)
      else b(e)
    })
  }
  _.Sk = function () {
    var a,
      b,
      c = new _.Ik(function (d, e) {
        a = d
        b = e
      })
    return new Rk(c, a, b)
  }
  _.Ik.prototype.then = function (a, b, c) {
    return Tk(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c
    )
  }
  _.sk(_.Ik)
  _.Ik.prototype.Nr = function (a, b) {
    return Tk(this, null, a, b)
  }
  _.Ik.prototype.cancel = function (a) {
    if (0 == this.Ea) {
      var b = new Uk(a)
      _.Gk(function () {
        Vk(this, b)
      }, this)
    }
  }
  Vk = function (a, b) {
    if (0 == a.Ea)
      if (a.Za) {
        var c = a.Za
        if (c.Aj) {
          for (
            var d = 0, e = null, f = null, g = c.Aj;
            g && (g.Ho || (d++, g.Nk == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g)
          e &&
            (0 == c.Ea && 1 == d
              ? Vk(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.Gm && (c.Gm = d),
                    (d.next = d.next.next))
                  : Wk(c),
                Xk(c, e, 3, b)))
        }
        a.Za = null
      } else a.Ug(3, b)
  }
  _.Zk = function (a, b) {
    a.Aj || (2 != a.Ea && 3 != a.Ea) || Yk(a)
    a.Gm ? (a.Gm.next = b) : (a.Aj = b)
    a.Gm = b
  }
  Tk = function (a, b, c, d) {
    var e = _.Lk(null, null, null)
    e.Nk = new _.Ik(function (f, g) {
      e.Jq = b
        ? function (k) {
            try {
              var l = b.call(d, k)
              f(l)
            } catch (m) {
              g(m)
            }
          }
        : f
      e.Gn = c
        ? function (k) {
            try {
              var l = c.call(d, k)
              void 0 === l && k instanceof Uk ? g(k) : f(l)
            } catch (m) {
              g(m)
            }
          }
        : g
    })
    e.Nk.Za = a
    _.Zk(a, e)
    return e.Nk
  }
  _.Ik.prototype.ZZ = function (a) {
    this.Ea = 0
    this.Ug(2, a)
  }
  _.Ik.prototype.$Z = function (a) {
    this.Ea = 0
    this.Ug(3, a)
  }
  _.Ik.prototype.Ug = function (a, b) {
    0 == this.Ea &&
      (this === b &&
        ((a = 3), (b = new TypeError('Promise cannot resolve to itself'))),
      (this.Ea = 1),
      Ok(b, this.ZZ, this.$Z, this) ||
        ((this.Ri = b),
        (this.Ea = a),
        (this.Za = null),
        Yk(this),
        3 != a || b instanceof Uk || $k(this, b)))
  }
  var Ok = function (a, b, c, d) {
      if (a instanceof _.Ik) return _.Zk(a, _.Lk(b || _.Za, c || null, d)), !0
      if (_.tk(a)) return a.then(b, c, d), !0
      if (_.Ya(a))
        try {
          var e = a.then
          if ('function' === typeof e) return al(a, e, b, c, d), !0
        } catch (f) {
          return c.call(d, f), !0
        }
      return !1
    },
    al = function (a, b, c, d, e) {
      var f = !1,
        g = function (l) {
          f || ((f = !0), c.call(e, l))
        },
        k = function (l) {
          f || ((f = !0), d.call(e, l))
        }
      try {
        b.call(a, g, k)
      } catch (l) {
        k(l)
      }
    },
    Yk = function (a) {
      a.vy || ((a.vy = !0), _.Gk(a.MQ, a))
    },
    Wk = function (a) {
      var b = null
      a.Aj && ((b = a.Aj), (a.Aj = b.next), (b.next = null))
      a.Aj || (a.Gm = null)
      return b
    }
  _.Ik.prototype.MQ = function () {
    for (var a; (a = Wk(this)); ) Xk(this, a, this.Ea, this.Ri)
    this.vy = !1
  }
  var Xk = function (a, b, c, d) {
      if (3 == c && b.Gn && !b.Ho) for (; a && a.bu; a = a.Za) a.bu = !1
      if (b.Nk) (b.Nk.Za = null), bl(b, c, d)
      else
        try {
          b.Ho ? b.Jq.call(b.context) : bl(b, c, d)
        } catch (e) {
          cl.call(null, e)
        }
      Kk.put(b)
    },
    bl = function (a, b, c) {
      2 == b ? a.Jq.call(a.context, c) : a.Gn && a.Gn.call(a.context, c)
    },
    $k = function (a, b) {
      a.bu = !0
      _.Gk(function () {
        a.bu && cl.call(null, b)
      })
    },
    cl = mk,
    Uk = function (a) {
      _.Tc.call(this, a)
      this.wK = !1
    }
  _.P(Uk, _.Tc)
  Uk.prototype.name = 'cancel'
  var Rk = function (a, b, c) {
    this.promise = a
    this.resolve = b
    this.reject = c
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.zs = function (a, b, c) {
    if (null !== a && b in a) throw Error('e`' + b)
    a[b] = c
  }
  _.Ks = function (a) {
    _.xi.call(this)
    this.Ud = a
    this.Pb = {}
  }
  _.P(_.Ks, _.xi)
  var Ls = []
  _.Ks.prototype.V = function (a, b, c, d) {
    return this.yq(a, b, c, d)
  }
  _.Ks.prototype.yq = function (a, b, c, d, e) {
    Array.isArray(b) || (b && (Ls[0] = b.toString()), (b = Ls))
    for (var f = 0; f < b.length; f++) {
      var g = _.Ti(
        a,
        b[f],
        c || this.handleEvent,
        d || !1,
        e || this.Ud || this
      )
      if (!g) break
      this.Pb[g.key] = g
    }
    return this
  }
  _.Ks.prototype.En = function (a, b, c, d) {
    return Ms(this, a, b, c, d)
  }
  var Ms = function (a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var g = 0; g < c.length; g++) Ms(a, b, c[g], d, e, f)
    else {
      b = _.Si(b, c, d || a.handleEvent, e, f || a.Ud || a)
      if (!b) return a
      a.Pb[b.key] = b
    }
    return a
  }
  _.Ks.prototype.Zb = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.Zb(a, b[f], c, d, e)
    else
      (c = c || this.handleEvent),
        (d = _.Ya(d) ? !!d.capture : !!d),
        (e = e || this.Ud || this),
        (c = _.Ui(c)),
        (d = !!d),
        (b = _.Ii(a)
          ? a.Vm(b, c, d, e)
          : a
          ? (a = _.Wi(a))
            ? a.Vm(b, c, d, e)
            : null
          : null),
        b && (_.aj(b), delete this.Pb[b.key])
    return this
  }
  _.Ks.prototype.removeAll = function () {
    _.zb(
      this.Pb,
      function (a, b) {
        this.Pb.hasOwnProperty(b) && _.aj(a)
      },
      this
    )
    this.Pb = {}
  }
  _.Ks.prototype.va = function () {
    _.Ks.T.va.call(this)
    this.removeAll()
  }
  _.Ks.prototype.handleEvent = function () {
    throw Error('H')
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */

  var Vu, Wu, Xu, Yu, $u, av, bv, cv, ev
  oauth2 = {}
  _.Uu = !1
  Vu = function (a) {
    try {
      _.Uu && window.console && window.console.log && window.console.log(a)
    } catch (b) {}
  }
  Wu = function (a, b) {
    if (!a) return -1
    if (a.indexOf) return a.indexOf(b, void 0)
    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c
    return -1
  }
  Xu = function (a, b) {
    function c() {}
    if (!a) throw 'Child class cannot be empty.'
    if (!b) throw 'Parent class cannot be empty.'
    c.prototype = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
  }
  Yu = function (a) {
    return '[object Function]' === Object.prototype.toString.call(a)
  }
  _.Zu = function (a) {
    var b = {}
    if (a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
    return b
  }
  $u = function (a) {
    var b = location.hash
    a = new RegExp('[&#]' + a + '=([^&]*)')
    b = decodeURIComponent(b)
    b = a.exec(b)
    return null == b ? '' : b[1].replace(/\+/g, ' ')
  }
  av = function (a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, !1)
    else if (a.attachEvent) a.attachEvent('on' + b, c)
    else throw 'Add event handler for ' + b + ' failed.'
  }
  bv = { token: 1, id_token: 1 }
  cv = function () {
    var a = navigator.userAgent.toLowerCase()
    return -1 != a.indexOf('msie') && 8 == parseInt(a.split('msie')[1], 10)
  }
  _.dv = window.JSON
  ev = function (a) {
    this.yD = a || []
    this.Xb = {}
  }
  ev.prototype.addEventListener = function (a, b) {
    if (!(0 <= Wu(this.yD, a))) throw 'Unrecognized event type: ' + a
    if (!Yu(b)) throw "The listener for event '" + a + "' is not a function."
    this.Xb[a] || (this.Xb[a] = [])
    0 > Wu(this.Xb[a], b) && this.Xb[a].push(b)
  }
  ev.prototype.removeEventListener = function (a, b) {
    if (!(0 <= Wu(this.yD, a))) throw 'Unrecognized event type: ' + a
    Yu(b) &&
      this.Xb[a] &&
      this.Xb[a].length &&
      ((b = Wu(this.Xb[a], b)), 0 <= b && this.Xb[a].splice(b, 1))
  }
  ev.prototype.dispatchEvent = function (a) {
    var b = a.type
    if (!(b && 0 <= Wu(this.yD, b)))
      throw 'Failed to dispatch unrecognized event type: ' + b
    if (this.Xb[b] && this.Xb[b].length)
      for (var c = 0, d = this.Xb[b].length; c < d; c++) this.Xb[b][c](a)
  }
  var fv, gv, hv, lv, mv, Dv, Ev, Gv, Hv, Jv, Sv
  fv = {}
  gv = {}
  hv = {
    google: {
      authServerUrl: 'https://accounts.google.com/o/oauth2/auth',
      idpIFrameUrl: 'https://accounts.google.com/o/oauth2/iframe',
    },
  }
  _.iv = function (a, b) {
    if ((a = hv[a])) return a[b]
  }
  _.jv = function (a, b) {
    if (!a) throw Error('M')
    if (!b.authServerUrl) throw Error('N')
    if (!b.idpIFrameUrl) throw Error('O')
    hv[a] = { authServerUrl: b.authServerUrl, idpIFrameUrl: b.idpIFrameUrl }
  }
  _.kv = void 0
  lv = function (a) {
    a.style.position = 'absolute'
    a.style.width = '1px'
    a.style.height = '1px'
    a.style.left = '-9999px'
    a.style.top = '-9999px'
    a.style.right = '-9999px'
    a.style.bottom = '-9999px'
    a.style.display = 'none'
    a.setAttribute('aria-hidden', 'true')
  }
  mv = function () {
    this.A_ = window
    this.et = this.Qk = this.Rq = this.Rg = null
  }
  mv.prototype.open = function (a, b, c, d) {
    nv(this)
    this.Rq
      ? (this.Qk && (this.Qk(), (this.Qk = null)), ov(this))
      : (this.Rq = 'authPopup' + Math.floor(1e6 * Math.random() + 1))
    a: {
      this.Rg = this.A_.open(a, this.Rq, b)
      try {
        this.Rg.focus()
        if (this.Rg.closed || 'undefined' == typeof this.Rg.closed)
          throw Error('Q')
        _.kv = this.Rg
      } catch (e) {
        d && setTimeout(d, 0)
        this.Rg = null
        break a
      }
      c && ((this.Qk = c), pv(this))
    }
  }
  var nv = function (a) {
      try {
        if (null == a.Rg || a.Rg.closed)
          (a.Rg = null), (a.Rq = null), ov(a), a.Qk && (a.Qk(), (a.Qk = null))
      } catch (b) {
        ;(a.Rg = null), (a.Rq = null), ov(a)
      }
    },
    pv = function (a) {
      a.et = window.setInterval(function () {
        nv(a)
      }, 300)
    },
    ov = function (a) {
      a.et && (window.clearInterval(a.et), (a.et = null))
    }
  gv = gv || {}
  var qv = function (a, b) {
    this.Qb = a
    this.pA = b
    this.Xc = null
    this.yl = !1
  }
  qv.prototype.start = function () {
    if (!this.yl && !this.Xc) {
      var a = this
      this.Xc = window.setTimeout(function () {
        a.clear()
        a.yl || (a.Qb(), (a.yl = !0))
      }, gv.kH(this.pA))
    }
  }
  qv.prototype.clear = function () {
    this.Xc && (window.clearTimeout(this.Xc), (this.Xc = null))
  }
  var rv = function (a, b) {
    var c = gv.Eo
    this.sU = gv.yo
    this.CM = c
    this.Qb = a
    this.pA = b
    this.Xc = null
    this.yl = !1
    var d = this
    this.DM = function () {
      document[d.sU] || (d.clear(), d.start())
    }
  }
  rv.prototype.start = function () {
    if (!this.yl && !this.Xc) {
      av(document, this.CM, this.DM)
      var a = this
      this.Xc = window.setTimeout(function () {
        a.clear()
        a.yl || (a.Qb(), (a.yl = !0))
      }, gv.kH(this.pA))
    }
  }
  rv.prototype.clear = function () {
    var a = this.CM,
      b = this.DM,
      c = document
    if (c.removeEventListener) c.removeEventListener(a, b, !1)
    else if (c.detachEvent) c.detachEvent('on' + a, b)
    else throw 'Remove event handler for ' + a + ' failed.'
    this.Xc && (window.clearTimeout(this.Xc), (this.Xc = null))
  }
  gv.yo = null
  gv.Eo = null
  gv.PU = function () {
    var a = document
    'undefined' !== typeof a.hidden
      ? ((gv.yo = 'hidden'), (gv.Eo = 'visibilitychange'))
      : 'undefined' !== typeof a.msHidden
      ? ((gv.yo = 'msHidden'), (gv.Eo = 'msvisibilitychange'))
      : 'undefined' !== typeof a.webkitHidden &&
        ((gv.yo = 'webkitHidden'), (gv.Eo = 'webkitvisibilitychange'))
  }
  gv.PU()
  gv.iQ = function (a, b) {
    return gv.yo && gv.Eo ? new rv(a, b) : new qv(a, b)
  }
  gv.kH = function (a) {
    return Math.max(1, a - new Date().getTime())
  }
  var sv = function (a, b) {
      document.cookie =
        'G_ENABLED_IDPS=' +
        a +
        ';domain=.' +
        b +
        ';expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/'
    },
    tv = function () {
      function a() {
        e[0] = 1732584193
        e[1] = 4023233417
        e[2] = 2562383102
        e[3] = 271733878
        e[4] = 3285377520
        n = m = 0
      }
      function b(r) {
        for (var u = g, q = 0; 64 > q; q += 4)
          u[q / 4] =
            (r[q] << 24) | (r[q + 1] << 16) | (r[q + 2] << 8) | r[q + 3]
        for (q = 16; 80 > q; q++)
          (r = u[q - 3] ^ u[q - 8] ^ u[q - 14] ^ u[q - 16]),
            (u[q] = ((r << 1) | (r >>> 31)) & 4294967295)
        r = e[0]
        var v = e[1],
          t = e[2],
          w = e[3],
          y = e[4]
        for (q = 0; 80 > q; q++) {
          if (40 > q)
            if (20 > q) {
              var A = w ^ (v & (t ^ w))
              var B = 1518500249
            } else (A = v ^ t ^ w), (B = 1859775393)
          else
            60 > q
              ? ((A = (v & t) | (w & (v | t))), (B = 2400959708))
              : ((A = v ^ t ^ w), (B = 3395469782))
          A =
            ((((r << 5) | (r >>> 27)) & 4294967295) + A + y + B + u[q]) &
            4294967295
          y = w
          w = t
          t = ((v << 30) | (v >>> 2)) & 4294967295
          v = r
          r = A
        }
        e[0] = (e[0] + r) & 4294967295
        e[1] = (e[1] + v) & 4294967295
        e[2] = (e[2] + t) & 4294967295
        e[3] = (e[3] + w) & 4294967295
        e[4] = (e[4] + y) & 4294967295
      }
      function c(r, u) {
        if ('string' === typeof r) {
          r = unescape(encodeURIComponent(r))
          for (var q = [], v = 0, t = r.length; v < t; ++v)
            q.push(r.charCodeAt(v))
          r = q
        }
        u || (u = r.length)
        q = 0
        if (0 == m)
          for (; q + 64 < u; ) b(r.slice(q, q + 64)), (q += 64), (n += 64)
        for (; q < u; )
          if (((f[m++] = r[q++]), n++, 64 == m))
            for (m = 0, b(f); q + 64 < u; )
              b(r.slice(q, q + 64)), (q += 64), (n += 64)
      }
      function d() {
        var r = [],
          u = 8 * n
        56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56))
        for (var q = 63; 56 <= q; q--) (f[q] = u & 255), (u >>>= 8)
        b(f)
        for (q = u = 0; 5 > q; q++)
          for (var v = 24; 0 <= v; v -= 8) r[u++] = (e[q] >> v) & 255
        return r
      }
      for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0
      var m, n
      a()
      return {
        reset: a,
        update: c,
        digest: d,
        Cg: function () {
          for (var r = d(), u = '', q = 0; q < r.length; q++)
            u +=
              '0123456789ABCDEF'.charAt(Math.floor(r[q] / 16)) +
              '0123456789ABCDEF'.charAt(r[q] % 16)
          return u
        },
      }
    },
    uv = window.crypto,
    vv = !1,
    wv = 0,
    xv = 1,
    yv = 0,
    zv = '',
    Av = function (a) {
      a = a || window.event
      var b = (a.screenX + a.clientX) << 16
      b += a.screenY + a.clientY
      b *= new Date().getTime() % 1e6
      xv = (xv * b) % yv
      if (3 == ++wv)
        if (((a = window), (b = Av), a.removeEventListener))
          a.removeEventListener('mousemove', b, !1)
        else if (a.detachEvent) a.detachEvent('onmousemove', b)
        else throw Error('R`mousemove')
    },
    Bv = function (a) {
      var b = tv()
      b.update(a)
      return b.Cg()
    }
  vv = !!uv && 'function' == typeof uv.getRandomValues
  vv ||
    ((yv = 1e6 * (screen.width * screen.width + screen.height)),
    (zv = Bv(
      document.cookie +
        '|' +
        document.location +
        '|' +
        new Date().getTime() +
        '|' +
        Math.random()
    )),
    av(window, 'mousemove', Av))
  fv = fv || {}
  fv.sN = 'ssIFrame_'
  _.Cv = function (a, b) {
    this.Jb = a
    if (!this.Jb) throw Error('S')
    a = _.iv(a, 'idpIFrameUrl')
    if (!a) throw Error('T')
    this.dI = a
    if (!b) throw Error('U')
    this.xk = b
    a = this.dI
    b = document.createElement('a')
    b.setAttribute('href', a)
    a = [b.protocol, '//', b.hostname]
    'http:' == b.protocol && '' != b.port && '0' != b.port && '80' != b.port
      ? (a.push(':'), a.push(b.port))
      : 'https:' == b.protocol &&
        '' != b.port &&
        '0' != b.port &&
        '443' != b.port &&
        (a.push(':'), a.push(b.port))
    this.$z = a.join('')
    this.SX = [location.protocol, '//', location.host].join('')
    this.Zz = this.rn = !1
    this.$H = null
    this.tv = []
    this.Kn = []
    this.li = {}
    this.Bl = void 0
  }
  _.Cv.prototype.show = function () {
    var a = this.Bl
    a.style.position = 'fixed'
    a.style.width = '100%'
    a.style.height = '100%'
    a.style.left = '0px'
    a.style.top = '0px'
    a.style.right = '0px'
    a.style.bottom = '0px'
    a.style.display = 'block'
    a.style.zIndex = '9999999'
    a.style.overflow = 'hidden'
    a.setAttribute('aria-hidden', 'false')
  }
  _.Cv.prototype.Dc = function () {
    lv(this.Bl)
  }
  _.Cv.prototype.Su = function (a) {
    if (this.rn) a && a(this)
    else {
      if (!this.Bl) {
        var b = fv.sN + this.Jb
        var c = this.Jb
        var d = location.hostname
        var e,
          f = document.cookie.match('(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)')
        f && 2 < f.length && (e = f[2])
        ;(f = e && 0 <= Wu(e.split('|'), c))
          ? sv(e, d)
          : sv(e ? e + '|' + c : c, d)
        c = !f
        f = this.dI
        var g = this.SX
        d = this.xk
        e = document.createElement('iframe')
        e.setAttribute('id', b)
        b = 'allow-scripts allow-same-origin'
        document.requestStorageAccess &&
          Yu(document.requestStorageAccess) &&
          (b += ' allow-storage-access-by-user-activation')
        e.setAttribute('sandbox', b)
        lv(e)
        e.setAttribute('frame-border', '0')
        b = [f, '#origin=', encodeURIComponent(g)]
        b.push('&rpcToken=')
        b.push(encodeURIComponent(d))
        c && b.push('&clearCache=1')
        _.Uu && b.push('&debug=1')
        document.body.appendChild(e)
        e.setAttribute('src', b.join(''))
        this.Bl = e
      }
      a && this.tv.push(a)
    }
  }
  _.Cv.prototype.fl = function () {
    return this.$H
  }
  Dv = function (a) {
    for (var b = 0; b < a.tv.length; b++) a.tv[b](a)
    a.tv = []
  }
  _.Fv = function (a, b, c, d) {
    if (a.rn) {
      if (a.rn && a.Zz)
        throw (
          ((a =
            'Failed to communicate with IDP IFrame due to unitialization error: ' +
            a.fl()),
          Vu(a),
          Error(a))
        )
      Ev(a, { method: b, params: c }, d)
    } else a.Kn.push({ rpc: { method: b, params: c }, callback: d }), a.Su()
  }
  Ev = function (a, b, c) {
    if (c) {
      for (var d = b.id; !d || a.li[d]; )
        d = new Date().getMilliseconds() + '-' + (1e6 * Math.random() + 1)
      b.id = d
      a.li[d] = c
    }
    b.rpcToken = a.xk
    a.Bl.contentWindow.postMessage(_.dv.stringify(b), a.$z)
  }
  Gv = function (a) {
    if (a && 0 <= a.indexOf('::')) throw Error('V')
  }
  _.Cv.prototype.Gh = function (a, b, c, d, e, f, g, k) {
    Gv(f)
    b = _.Zu(b)
    _.Fv(
      this,
      'getTokenResponse',
      {
        clientId: a,
        loginHint: c,
        request: b,
        sessionSelector: d,
        forceRefresh: g,
        skipCache: k,
        id: f,
      },
      e
    )
  }
  _.Cv.prototype.Ru = function (a, b, c, d, e) {
    b = _.Zu(b)
    _.Fv(
      this,
      'listIdpSessions',
      { clientId: a, request: b, sessionSelector: c, forceRefresh: e },
      d
    )
  }
  Hv = function (a, b, c) {
    Gv(b.identifier)
    _.Fv(a, 'getSessionSelector', b, c)
  }
  _.Iv = function (a, b, c, d, e) {
    Gv(b.identifier)
    _.Fv(
      a,
      'setSessionSelector',
      {
        domain: b.domain,
        crossSubDomains: b.crossSubDomains,
        policy: b.policy,
        id: b.id,
        hint: d,
        disabled: !!c,
      },
      e
    )
  }
  Jv = function (a, b, c) {
    _.Fv(a, 'monitorClient', { clientId: b }, c)
  }
  _.Cv.prototype.Zq = _.ja(29)
  _.Cv.prototype.lw = function (a, b) {
    _.Fv(this, 'showDialog', { J7: a }, b)
  }
  _.Cv.prototype.Uo = _.ja(31)
  fv.pu = {}
  fv.dz = function (a) {
    return fv.pu[a]
  }
  fv.Su = function (a, b) {
    var c = fv.dz(a)
    if (!c) {
      c = String
      if (vv) {
        var d = new window.Uint32Array(1)
        uv.getRandomValues(d)
        d = Number('0.' + d[0])
      } else
        (d = xv),
          (d += parseInt(zv.substr(0, 20), 16)),
          (zv = Bv(zv)),
          (d /= yv + Math.pow(16, 20))
      c = new _.Cv(a, c(2147483647 * d))
      fv.pu[a] = c
    }
    c.Su(b)
  }
  fv.LR = function (a) {
    for (var b in fv.pu) {
      var c = fv.dz(b)
      if (c && c.Bl && c.Bl.contentWindow == a.source && c.$z == a.origin)
        return c
    }
  }
  fv.uS = function (a) {
    for (var b in fv.pu) {
      var c = fv.dz(b)
      if (c && c.$z == a) return c
    }
  }
  fv = fv || {}
  var Lv = function () {
    var a = [],
      b
    for (b in Kv) a.push(Kv[b])
    ev.call(this, a)
    this.dk = {}
    Vu('EventBus is ready.')
  }
  Xu(Lv, ev)
  var Kv = {
      CO: 'sessionSelectorChanged',
      Ww: 'sessionStateChanged',
      Kw: 'authResult',
      dN: 'displayIFrame',
    },
    Nv = function (a) {
      var b = Mv
      a && (b.dk[a] || (b.dk[a] = []))
    },
    Ov = function (a, b, c) {
      return b && a.dk[b] && 0 <= Wu(a.dk[b], c)
    }
  _.h = Lv.prototype
  _.h.bX = function (a) {
    var b,
      c = !!a.source && (a.source.opener === window || a.source === _.kv)
    if ((b = c ? fv.uS(a.origin) : fv.LR(a))) {
      try {
        var d = _.dv.parse(a.data)
      } catch (e) {
        Vu('Bad event, an error happened when parsing data.')
        return
      }
      if (!c) {
        if (!d || !d.rpcToken || d.rpcToken != b.xk) {
          Vu('Bad event, no RPC token.')
          return
        }
        if (d.id && !d.method) {
          c = d
          if ((a = b.li[c.id])) delete b.li[c.id], a(c.result, c.error)
          return
        }
      }
      'fireIdpEvent' != d.method
        ? Vu('Bad IDP event, method unknown.')
        : (a = d.params) && a.type && this.cI[a.type]
        ? ((d = this.cI[a.type]),
          c && !d.mP
            ? Vu('Bad IDP event. Source window cannot be a popup.')
            : d.ro && !d.ro.call(this, b, a)
            ? Vu('Bad IDP event.')
            : d.Ne.call(this, b, a))
        : Vu('Bad IDP event.')
    } else Vu('Bad event, no corresponding Idp Stub.')
  }
  _.h.vY = function (a, b) {
    return Ov(this, a.Jb, b.clientId)
  }
  _.h.uY = function (a, b) {
    b = b.clientId
    return !b || Ov(this, a.Jb, b)
  }
  _.h.wP = function (a, b) {
    return Ov(this, a.Jb, b.clientId)
  }
  _.h.mW = function (a) {
    a.rn = !0
    Dv(a)
    for (var b = 0; b < a.Kn.length; b++) Ev(a, a.Kn[b].rpc, a.Kn[b].callback)
    a.Kn = []
  }
  _.h.lW = function (a, b) {
    b = { error: b.error }
    a.rn = !0
    a.Zz = !0
    a.$H = b
    a.Kn = []
    Dv(a)
  }
  _.h.Nv = function (a, b) {
    b.originIdp = a.Jb
    this.dispatchEvent(b)
  }
  var Mv = new Lv(),
    Pv = Mv,
    Qv = {}
  Qv.idpReady = { Ne: Pv.mW }
  Qv.idpError = { Ne: Pv.lW }
  Qv.sessionStateChanged = { Ne: Pv.Nv, ro: Pv.vY }
  Qv.sessionSelectorChanged = { Ne: Pv.Nv, ro: Pv.uY }
  Qv.authResult = { Ne: Pv.Nv, ro: Pv.wP, mP: !0 }
  Qv.displayIFrame = { Ne: Pv.Nv }
  Mv.cI = Qv || {}
  av(window, 'message', function (a) {
    Mv.bX.call(Mv, a)
  })
  _.Rv = function (a, b) {
    this.$d = !1
    if (!a) throw Error('W')
    var c = [],
      d
    for (d in a) c.push(a[d])
    ev.call(this, c)
    this.vd = [location.protocol, '//', location.host].join('')
    this.vc = b.crossSubDomains ? b.domain || this.vd : this.vd
    if (!b) throw Error('X')
    if (!b.idpId) throw Error('Y')
    if (!_.iv(b.idpId, 'authServerUrl') || !_.iv(b.idpId, 'idpIFrameUrl'))
      throw Error('Z`' + b.idpId)
    this.Jb = b.idpId
    this.Ub = void 0
    this.pQ = !!b.disableTokenRefresh
    this.hR = !!b.forceTokenRefresh
    this.wZ = !!b.skipTokenCache
    this.setOptions(b)
    this.ep = []
    this.El = this.BI = !1
    this.wn = void 0
    this.pK()
    this.Vc = void 0
    var e = this,
      f = function () {
        Vu('Token Manager is ready.')
        if (e.ep.length) for (var g = 0; g < e.ep.length; g++) e.ep[g].call(e)
        e.BI = !0
        e.ep = []
      }
    fv.Su(this.Jb, function (g) {
      e.Vc = g
      g.rn && g.Zz
        ? ((e.El = !0), (e.wn = g.fl()), e.pv(e.wn))
        : e.Ub
        ? Jv(e.Vc, e.Ub, function (k) {
            if (k) {
              k = e.Jb
              var l = e.Ub,
                m = Mv
              k &&
                l &&
                (m.dk[k] || (m.dk[k] = []),
                0 > Wu(m.dk[k], l) && m.dk[k].push(l))
              f()
            } else (e.wn = { error: 'Not a valid origin for the client: ' + e.vd + ' has not been whitelisted for client ID ' + e.Ub + ". Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID." }), (e.El = !0), e.pv(e.wn)
          })
        : (Nv(e.Jb), f())
    })
  }
  Xu(_.Rv, ev)
  _.Rv.prototype.setOptions = function () {}
  _.Rv.prototype.pK = function () {}
  _.Rv.prototype.pv = function () {}
  _.Rv.prototype.fl = function () {
    return this.wn
  }
  Sv = function (a, b, c) {
    return function () {
      b.apply(a, c)
    }
  }
  _.Tv = function (a, b, c) {
    if (a.BI) b.apply(a, c)
    else {
      if (a.El) throw a.wn
      a.ep.push(Sv(a, b, c))
    }
  }
  _.Rv.prototype.ZE = _.ja(32)
  _.Rv.prototype.Uo = _.ja(30)
  _.Vv = function (a, b) {
    _.Rv.call(this, a, b)
    this.aK = new mv()
    this.Pi = this.Pl = null
    Uv(this)
  }
  Xu(_.Vv, _.Rv)
  _.Vv.prototype.setOptions = function () {}
  var Wv = function (a, b) {
      a.Zd = {
        crossSubDomains: !!b.crossSubDomains,
        id: b.sessionSelectorId,
        domain: a.vc,
      }
      b.crossSubDomains && (a.Zd.policy = b.policy)
    },
    Xv = function (a, b) {
      if (!b.authParameters) throw Error('$')
      if (!b.authParameters.scope) throw Error('aa')
      if (!b.authParameters.response_type) throw Error('ba')
      a.Ko = b.authParameters
      a.Ko.redirect_uri ||
        (a.Ko.redirect_uri = [
          location.protocol,
          '//',
          location.host,
          location.pathname,
        ].join(''))
      a.Oh = _.Zu(b.rpcAuthParameters || a.Ko)
      if (!a.Oh.scope) throw Error('ca')
      if (!a.Oh.response_type) throw Error('da')
      a: {
        var c = a.Oh.response_type.split(' ')
        for (var d = 0, e = c.length; d < e; d++)
          if (c[d] && !bv[c[d]]) {
            c = !0
            break a
          }
        c = !1
      }
      if (c) throw Error('ea')
      b.enableSerialConsent && (a.Oh.enable_serial_consent = !0)
      b.authResultIdentifier && (a.xP = b.authResultIdentifier)
      b.spec_compliant && (a.Oh.spec_compliant = b.spec_compliant)
    }
  _.Vv.prototype.pK = function () {
    var a = this
    Mv.addEventListener(Kv.CO, function (b) {
      a.$d &&
        a.Zd &&
        b.originIdp == a.Jb &&
        !b.crossSubDomains == !a.Zd.crossSubDomains &&
        b.domain == a.Zd.domain &&
        b.id == a.Zd.id &&
        a.MJ(b)
    })
    Mv.addEventListener(Kv.Ww, function (b) {
      a.$d && b.originIdp == a.Jb && b.clientId == a.Ub && a.NJ(b)
    })
    Mv.addEventListener(Kv.Kw, function (b) {
      _.kv = void 0
      a.$d &&
        b.originIdp == a.Jb &&
        b.clientId == a.Ub &&
        b.id == a.Mi &&
        (a.Pl && (window.clearTimeout(a.Pl), (a.Pl = null)),
        (a.Mi = void 0),
        a.Hq(b))
    })
    Mv.addEventListener(Kv.dN, function (b) {
      a.$d && b.originIdp == a.Jb && (b.Dc ? a.Vc.Dc() : a.Vc.show())
    })
  }
  _.Vv.prototype.MJ = function () {}
  _.Vv.prototype.NJ = function () {}
  _.Vv.prototype.Hq = function () {}
  var Zv = function (a, b) {
      Yv(a)
      a.pQ ||
        ((a.Pi = gv.iQ(function () {
          a.Gh(!0)
        }, b - 3e5)),
        navigator.onLine && a.Pi.start())
    },
    Yv = function (a) {
      a.Pi && (a.Pi.clear(), (a.Pi = null))
    },
    Uv = function (a) {
      var b = window
      cv() && (b = document.body)
      av(b, 'online', function () {
        a.Pi && a.Pi.start()
      })
      av(b, 'offline', function () {
        a.Pi && a.Pi.clear()
      })
    }
  _.h = _.Vv.prototype
  _.h.Gh = function () {}
  _.h.lw = function (a, b) {
    this.Vc.lw(a, b)
  }
  _.h.vJ = _.ja(33)
  _.h.yV = function (a, b) {
    if (!this.Ub) throw Error('ia')
    this.Vc.Ru(this.Ub, this.Oh, this.Zd, a, b)
  }
  _.h.Ru = function (a, b) {
    _.Tv(this, this.yV, [a, b])
  }
  _.aw = function (a) {
    this.Wd = void 0
    this.Dg = !1
    this.Wn = void 0
    _.Vv.call(this, _.$v, a)
  }
  Xu(_.aw, _.Vv)
  _.$v = {
    XD: 'noSessionBound',
    Do: 'userLoggedOut',
    NM: 'activeSessionChanged',
    Ww: 'sessionStateChanged',
    XO: 'tokenReady',
    WO: 'tokenFailed',
    Kw: 'authResult',
    ERROR: 'error',
  }
  _.aw.prototype.setOptions = function (a) {
    if (!a.clientId) throw Error('ja')
    this.Ub = a.clientId
    this.Ca = a.id
    Wv(this, a)
    Xv(this, a)
  }
  _.aw.prototype.pv = function (a) {
    this.dispatchEvent({
      type: _.$v.ERROR,
      error: 'idpiframe_initialization_failed',
      details: a.error,
      idpId: this.Jb,
    })
  }
  var bw = function (a) {
    Yv(a)
    a.Wn = void 0
    a.BA = void 0
  }
  _.h = _.aw.prototype
  _.h.MJ = function (a) {
    var b = a.newValue || {}
    if (this.Wd != b.hint || this.Dg != !!b.disabled) {
      a = this.Wd
      var c = !this.Wd || this.Dg
      bw(this)
      this.Wd = b.hint
      this.Dg = !!b.disabled
      ;(b = !this.Wd || this.Dg) && !c
        ? this.dispatchEvent({ type: _.$v.Do, idpId: this.Jb })
        : b ||
          (a != this.Wd &&
            this.dispatchEvent({ type: _.$v.NM, idpId: this.Jb }),
          this.Wd && this.Gh())
    }
  }
  _.h.NJ = function (a) {
    this.Dg ||
      (this.Wd
        ? a.user || this.Wn
          ? a.user == this.Wd &&
            (this.Wn
              ? a.sessionState
                ? (this.Wn = a.sessionState)
                : (bw(this),
                  this.dispatchEvent({ type: _.$v.Do, idpId: this.Jb }))
              : a.sessionState && ((this.Wn = a.sessionState), this.Gh()))
          : this.Gh()
        : this.dispatchEvent({ type: _.$v.Ww, idpId: this.Jb }))
  }
  _.h.Hq = function (a) {
    this.dispatchEvent({ type: _.$v.Kw, authResult: a.authResult })
  }
  _.h.Jp = _.ja(35)
  _.h.Cp = function (a) {
    _.Tv(this, this.Qy, [a])
  }
  _.h.Qy = function (a) {
    Hv(this.Vc, this.Zd, a)
  }
  _.h.mw = function (a, b, c) {
    if (!a) throw Error('ka')
    bw(this)
    this.Wd = a
    this.Dg = !1
    b && _.Iv(this.Vc, this.Zd, !1, this.Wd)
    this.$d = !0
    this.Gh(c, !0)
  }
  _.h.start = function () {
    _.Tv(this, this.BZ, [])
  }
  _.h.BZ = function () {
    var a = this.Ub == $u('client_id') ? $u('login_hint') : void 0
    var b = this.Ub == $u('client_id') ? $u('state') : void 0
    this.YA = b
    if (a)
      window.history.replaceState
        ? window.history.replaceState(
            null,
            document.title,
            window.location.href.split('#')[0]
          )
        : (window.location.href.hash = ''),
        this.mw(a, !0, !0)
    else {
      var c = this
      this.Cp(function (d) {
        c.$d = !0
        d && d.hint
          ? (bw(c),
            (c.Wd = d.hint),
            (c.Dg = !!d.disabled),
            c.Dg
              ? c.dispatchEvent({ type: _.$v.Do, idpId: c.Jb })
              : c.mw(d.hint))
          : (bw(c),
            (c.Wd = void 0),
            (c.Dg = !(!d || !d.disabled)),
            c.dispatchEvent({
              type: _.$v.XD,
              autoOpenAuthUrl: !c.Dg,
              idpId: c.Jb,
            }))
      })
    }
  }
  _.h.wG = _.ja(36)
  _.h.Gh = function (a, b) {
    var c = this
    this.Vc.Gh(
      this.Ub,
      this.Oh,
      this.Wd,
      this.Zd,
      function (d, e) {
        ;(e = e || d.error)
          ? 'user_logged_out' == e
            ? (bw(c), c.dispatchEvent({ type: _.$v.Do, idpId: c.Jb }))
            : ((c.BA = null),
              c.dispatchEvent({ type: _.$v.WO, idpId: c.Jb, error: e }))
          : ((c.BA = d),
            (c.Wn = d.session_state),
            Zv(c, d.expires_at),
            (d.idpId = c.Jb),
            b && c.YA && ((d.state = c.YA), (c.YA = void 0)),
            c.dispatchEvent({ type: _.$v.XO, idpId: c.Jb, response: d }))
      },
      this.Ca,
      a
    )
  }
  _.h.Zq = _.ja(28)
  _.h.GK = _.ja(37)
  _.cw = function (a) {
    this.Kk = null
    _.Vv.call(this, {}, a)
    this.$d = !0
  }
  Xu(_.cw, _.Vv)
  _.h = _.cw.prototype
  _.h.setOptions = function (a) {
    if (!a.clientId) throw Error('ja')
    this.Ub = a.clientId
    this.Ca = a.id
    Wv(this, a)
    Xv(this, a)
  }
  _.h.pv = function (a) {
    this.Kk &&
      (this.Kk({
        authResult: {
          error: 'idpiframe_initialization_failed',
          details: a.error,
        },
      }),
      (this.Kk = null))
  }
  _.h.Hq = function (a) {
    if (this.Kk) {
      var b = this.Kk
      this.Kk = null
      b(a)
    }
  }
  _.h.Jp = _.ja(34)
  _.h.Cp = function (a) {
    this.El ? a(this.fl()) : _.Tv(this, this.Qy, [a])
  }
  _.h.Qy = function (a) {
    Hv(this.Vc, this.Zd, a)
  }
  _.dw = function (a, b, c) {
    a.El ? c(a.fl()) : _.Tv(a, a.BW, [b, c])
  }
  _.cw.prototype.BW = function (a, b) {
    this.Vc.Gh(
      this.Ub,
      this.Oh,
      a,
      this.Zd,
      function (c, d) {
        d ? b({ error: d }) : b(c)
      },
      this.Ca,
      this.hR,
      this.wZ
    )
  }
  _.cw.prototype.XI = _.ja(38)

  var ew, gw, hw, iw, jw, kw, lw, mw, nw, ow, pw, sw
  ew = function (a) {
    return Array.prototype.concat.apply([], arguments)
  }
  _.fw = function () {
    try {
      var a = Array.from(
        (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(64))
      )
    } catch (c) {
      a = []
      for (var b = 0; 64 > b; b++) a[b] = Math.floor(256 * Math.random())
    }
    return _.ih(a, 3).substring(0, 64)
  }
  gw = function (a, b, c) {
    if (!a.$d) throw Error('fa')
    b ? _.Iv(a.Vc, a.Zd, !0, void 0, c) : _.Iv(a.Vc, a.Zd, !0, a.Wd, c)
  }
  hw = function (a) {
    if (!a.$d) throw Error('fa')
    return a.BA
  }
  _.cw.prototype.XI = _.Sc(38, function (a, b) {
    var c = this.Vc,
      d = this.Ub,
      e = this.Zd,
      f = _.Zu(this.Oh)
    delete f.response_type
    _.Fv(
      c,
      'getOnlineCode',
      { clientId: d, loginHint: a, request: f, sessionSelector: e },
      b
    )
  })
  _.aw.prototype.GK = _.Sc(37, function (a) {
    hw(this) &&
      hw(this).access_token &&
      (this.Vc.Zq(this.Ub, hw(this).access_token, a), gw(this, !0))
  })
  _.aw.prototype.wG = _.Sc(36, function () {
    var a = this
    this.Cp(function (b) {
      b && b.hint
        ? b.disabled
          ? a.dispatchEvent({ type: _.$v.Do, idpId: a.Jb })
          : a.Gh(!0)
        : a.dispatchEvent({ type: _.$v.XD, idpId: a.Jb })
    })
  })
  _.aw.prototype.Jp = _.Sc(35, function () {
    var a = this
    return function (b) {
      b &&
        b.authResult &&
        b.authResult.login_hint &&
        a.mw(
          b.authResult.login_hint,
          a.Dg || b.authResult.login_hint != a.Wd,
          !0
        )
    }
  })
  _.cw.prototype.Jp = _.Sc(34, function (a) {
    var b = this
    return function (c) {
      c && c.authResult && c.authResult.login_hint
        ? b.Cp(function (d) {
            _.Iv(
              b.Vc,
              b.Zd,
              d && d.disabled,
              c.authResult.login_hint,
              function () {
                _.dw(b, c.authResult.login_hint, a)
              }
            )
          })
        : a(
            c && c.authResult && c.authResult.error
              ? c.authResult
              : c && c.authResult && !c.authResult.login_hint
              ? { error: 'wrong_response_type' }
              : { error: 'unknown_error' }
          )
    }
  })
  _.Vv.prototype.vJ = _.Sc(33, function () {
    this.Ub &&
      _.Fv(
        this.Vc,
        'startPolling',
        { clientId: this.Ub, origin: this.vd, id: this.Mi },
        void 0
      )
  })
  _.Cv.prototype.Zq = _.Sc(29, function (a, b, c) {
    _.Fv(this, 'revoke', { clientId: a, token: b }, c)
  })
  _.aw.prototype.Zq = _.Sc(28, function (a) {
    _.Tv(this, this.GK, [a])
  })
  iw = function () {
    var a = navigator.userAgent,
      b
    if ((b = !!a && -1 != a.indexOf('CriOS')))
      (b = -1),
        (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1),
        (b = 48 > b)
    return b
  }
  jw = function () {
    var a = navigator.userAgent.toLowerCase()
    if (
      !(
        -1 < a.indexOf('safari/') &&
        0 > a.indexOf('chrome/') &&
        0 > a.indexOf('crios/') &&
        0 > a.indexOf('android')
      )
    )
      return !1
    var b = /version\/(\d+)\.(\d+)[\.0-9]*/.exec(
      navigator.userAgent.toLowerCase()
    )
    if (!b || 3 > b.length) return !1
    a = parseInt(b[1], 10)
    b = parseInt(b[2], 10)
    return 12 < a || (12 == a && 1 <= b)
  }
  kw = function (a, b, c, d, e, f, g) {
    var k = _.iv(a, 'authServerUrl')
    if (!k) throw Error('P`' + a)
    a = _.Zu(d)
    a.response_type = g || 'permission'
    a.client_id = c
    a.ss_domain = b
    if (f && f.extraQueryParams)
      for (var l in f.extraQueryParams) a[l] = f.extraQueryParams[l]
    ;(b = e) &&
      !(b = jw()) &&
      ((b = navigator.userAgent.toLowerCase()),
      -1 < b.indexOf('ipad;') || -1 < b.indexOf('iphone;')
        ? ((b = /os (\d+)_\d+(_\d+)? like mac os x/.exec(
            navigator.userAgent.toLowerCase()
          )),
          (b = !b || 2 > b.length ? !1 : 14 <= parseInt(b[1], 10)))
        : (b = !1))
    b && !a.prompt && (a.prompt = 'select_account')
    k += 0 > k.indexOf('?') ? '?' : '&'
    b = []
    for (var m in a)
      if (a.hasOwnProperty(m)) {
        c = a[m]
        if (null === c || void 0 === c) c = ''
        b.push(encodeURIComponent(m) + '=' + encodeURIComponent(c))
      }
    return k + b.join('&')
  }
  lw = function (a, b, c, d) {
    if (!a.Ub) throw Error('ga')
    a.Mi = c || a.xP || 'auth' + Math.floor(1e6 * Math.random() + 1)
    b = b || {}
    b.extraQueryParams = b.extraQueryParams || {}
    if (!b.extraQueryParams.redirect_uri) {
      var e = a.vd.split('//')
      c = b.extraQueryParams
      var f = e[0],
        g = f.indexOf(':')
      0 < g && (f = f.substring(0, g))
      e = ['storagerelay://', f, '/', e[1], '?']
      e.push('id=' + a.Mi)
      c.redirect_uri = e.join('')
    }
    return kw(a.Jb, a.vc, a.Ub, a.Ko, !0, b, d)
  }
  mw = function (a, b) {
    a.Pl && window.clearTimeout(a.Pl)
    a.Pl = window.setTimeout(function () {
      a.Mi == b &&
        ((_.kv = void 0),
        (a.Pl = null),
        (a.Mi = void 0),
        a.Hq({ authResult: { error: 'popup_closed_by_user' } }))
    }, 1e3)
  }
  nw = function (a, b, c) {
    if (!a.Ub) throw Error('ha')
    c = c || {}
    c = lw(a, c.sessionMeta, c.oneTimeId, c.responseType)
    ;((Object.hasOwnProperty.call(window, 'ActiveXObject') &&
      !window.ActiveXObject) ||
      iw()) &&
      _.Tv(a, a.vJ, [])
    var d = a.Mi
    a.aK.open(
      c,
      b,
      function () {
        a.Mi == d && mw(a, d)
      },
      function () {
        a.Mi = void 0
        a.Hq({ authResult: { error: 'popup_blocked_by_browser' } })
      }
    )
  }
  ow = function (a) {
    _.Tv(a, a.wG, [])
  }
  pw = function (a, b, c) {
    a.El ? c(a.fl()) : _.Tv(a, a.XI, [b, c])
  }
  _.qw = function (a) {
    for (var b = [], c = 0, d = 0; c < a.length; ) {
      var e = a[c++]
      if (128 > e) b[d++] = String.fromCharCode(e)
      else if (191 < e && 224 > e) {
        var f = a[c++]
        b[d++] = String.fromCharCode(((e & 31) << 6) | (f & 63))
      } else if (239 < e && 365 > e) {
        f = a[c++]
        var g = a[c++],
          k = a[c++]
        e =
          (((e & 7) << 18) | ((f & 63) << 12) | ((g & 63) << 6) | (k & 63)) -
          65536
        b[d++] = String.fromCharCode(55296 + (e >> 10))
        b[d++] = String.fromCharCode(56320 + (e & 1023))
      } else
        (f = a[c++]),
          (g = a[c++]),
          (b[d++] = String.fromCharCode(
            ((e & 15) << 12) | ((f & 63) << 6) | (g & 63)
          ))
    }
    return b.join('')
  }
  _.rw = function (a, b) {
    function c(l) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          n = _.fh[m]
        if (null != n) return n
        if (!_.Ke(m)) throw Error('v`' + m)
      }
      return l
    }
    _.hh()
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        k = c(64)
      if (64 === k && -1 === e) break
      b((e << 2) | (f >> 4))
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != k && b(((g << 6) & 192) | k))
    }
  }
  sw = function (a) {
    var b = []
    _.rw(a, function (c) {
      b.push(c)
    })
    return b
  }
  _.tw = function (a, b) {
    _.Ph[b || 'token'] = a
  }
  _.uw = function (a) {
    delete _.Ph[a || 'token']
  }
  _.dv = {
    parse: function (a) {
      a = _.wf('[' + String(a) + ']')
      if (!1 === a || 1 !== a.length)
        throw new SyntaxError('JSON parsing failed.')
      return a[0]
    },
    stringify: function (a) {
      return _.xf(a)
    },
  }
  _.cw.prototype.Dy = function (a, b) {
    _.Tv(this, this.UQ, [a, b])
  }
  _.cw.prototype.UQ = function (a, b) {
    this.Vc.Dy(this.Ub, a, this.Oh, this.Zd, b)
  }
  _.Cv.prototype.Dy = function (a, b, c, d, e) {
    c = _.Zu(c)
    _.Fv(
      this,
      'gsi:fetchLoginHint',
      { clientId: a, loginHint: b, request: c, sessionSelector: d },
      e
    )
  }
  var vw,
    ww = ['client_id', 'cookie_policy', 'scope'],
    xw = 'client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection gsiwebsdk'.split(
      ' '
    ),
    yw = ['authuser', 'after_redirect', 'access_type', 'hl'],
    zw = ['login_hint', 'prompt'],
    Aw = { clientid: 'client_id', cookiepolicy: 'cookie_policy' },
    Bw = ['approval_prompt', 'authuser', 'login_hint', 'prompt', 'hd'],
    Cw = ['login_hint', 'g-oauth-window', 'status'],
    Dw = Math.min(_.R('oauth-flow/authWindowWidth', 599), screen.width - 20),
    Ew = Math.min(_.R('oauth-flow/authWindowHeight', 600), screen.height - 30)
  var Fw = function (a) {
    _.Tc.call(this, a)
  }
  _.li(Fw, _.Tc)
  Fw.prototype.name = 'gapi.auth2.ExternallyVisibleError'
  var Gw = function () {}
  Gw.prototype.select = function (a, b) {
    if (
      a.sessions &&
      1 == a.sessions.length &&
      ((a = a.sessions[0]), a.login_hint)
    ) {
      b(a)
      return
    }
    b()
  }
  var Hw = function () {}
  Hw.prototype.select = function (a, b) {
    if (a.sessions && a.sessions.length)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c]
        if (d.login_hint) {
          b(d)
          return
        }
      }
    b()
  }
  var Iw = function (a) {
    this.yP = a
  }
  Iw.prototype.select = function (a, b) {
    if (a.sessions)
      for (var c = 0; c < a.sessions.length; c++) {
        var d = a.sessions[c]
        if (
          d.session_state &&
          d.session_state.extraQueryParams &&
          d.session_state.extraQueryParams.authuser == this.yP
        ) {
          d.login_hint ? b(d) : b()
          return
        }
      }
    b()
  }
  var Jw = function (a) {
    this.Ld = a
    this.Xv = []
  }
  Jw.prototype.select = function (a) {
    var b = 0,
      c = this,
      d = function (e) {
        if (e) a(e)
        else {
          var f = c.Xv[b]
          f
            ? (b++,
              c.Ld.Ru(function (g) {
                g ? f.select(g, d) : d()
              }))
            : a()
        }
      }
    d()
  }
  var Kw = function (a) {
      a = new Jw(a)
      a.Xv.push(new Gw())
      return a
    },
    Lw = function (a) {
      a = new Jw(a)
      a.Xv.push(new Hw())
      return a
    },
    Mw = function (a, b) {
      void 0 === b || null === b
        ? (b = Kw(a))
        : ((a = new Jw(a)), a.Xv.push(new Iw(b)), (b = a))
      return b
    }
  var Nw = function (a) {
    this.Ne = a
    this.Fd = !0
  }
  Nw.prototype.remove = function () {
    this.Fd = !1
  }
  Nw.prototype.trigger = function () {}
  var Ow = function (a) {
      this.remove = function () {
        a.remove()
      }
      this.trigger = function () {
        a.trigger()
      }
    },
    Pw = function () {
      this.Xb = []
    }
  Pw.prototype.add = function (a) {
    this.Xb.push(a)
  }
  Pw.prototype.notify = function (a) {
    for (var b = this.Xb, c = [], d = 0; d < b.length; d++) {
      var e = b[d]
      e.Fd && (c.push(e), _.yk(Qw(e.Ne, a)))
    }
    this.Xb = c
  }
  var Qw = function (a, b) {
    return function () {
      a(b)
    }
  }
  var Sw = function (a) {
    this.ee = null
    this.s_ = new Rw(this)
    this.Xb = new Pw()
    void 0 != a && this.set(a)
  }
  Sw.prototype.set = function (a) {
    a != this.ee &&
      ((this.ee = a), (this.s_.value = a), this.Xb.notify(this.ee))
  }
  Sw.prototype.get = function () {
    return this.ee
  }
  Sw.prototype.V = function (a) {
    a = new Tw(this, a)
    this.Xb.add(a)
    return a
  }
  Sw.prototype.get = Sw.prototype.get
  var Tw = function (a, b) {
    Nw.call(this, b)
    this.BV = a
  }
  _.li(Tw, Nw)
  Tw.prototype.trigger = function () {
    var a = this.Ne
    a(this.BV.get())
  }
  var Rw = function (a) {
    this.value = null
    this.V = function (b) {
      return new Ow(a.V(b))
    }
  }
  var Uw = {
      H1: 'fetch_basic_profile',
      N2: 'login_hint',
      n4: 'prompt',
      t4: 'redirect_uri',
      M4: 'scope',
      d6: 'ux_mode',
      z5: 'state',
    },
    Vw = function (a) {
      this.Ba = {}
      if (a && !_.wi(a))
        if ('function' == typeof a.get) this.Ba = a.get()
        else
          for (var b in Uw) {
            var c = Uw[b]
            c in a && (this.Ba[c] = a[c])
          }
    }
  Vw.prototype.get = function () {
    return this.Ba
  }
  Vw.prototype.BL = function (a) {
    this.Ba.scope = a
    return this
  }
  Vw.prototype.Wp = function () {
    return this.Ba.scope
  }
  var Ww = function (a, b) {
    var c = a.Ba.scope
    b = ew(b.split(' '), c ? c.split(' ') : [])
    _.Je(b)
    a.Ba.scope = b.join(' ')
  }
  _.h = Vw.prototype
  _.h.aZ = function (a) {
    this.Ba.prompt = a
    return this
  }
  _.h.xS = function () {
    return this.Ba.prompt
  }
  _.h.yY = function () {
    _.Df('Property app_package_name no longer supported and was not set')
    return this
  }
  _.h.nR = function () {
    _.Df('Property app_package_name no longer supported')
  }
  _.h.Fe = function (a) {
    this.Ba.state = a
  }
  _.h.getState = function () {
    return this.Ba.state
  }
  var Xw = function () {
      return [
        'toolbar=no',
        'location=' + (window.opera ? 'no' : 'yes'),
        'directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no',
        'width=' + Dw,
        'height=' + Ew,
        'top=' + (screen.height - Ew) / 2,
        'left=' + (screen.width - Dw) / 2,
      ].join()
    },
    Yw = function (a) {
      a = a && a.id_token
      if (!a || !a.split('.')[1]) return null
      a = (a.split('.')[1] + '...').replace(/^((....)+).?.?.?$/, '$1')
      return JSON.parse(_.qw(sw(a)))
    },
    Zw = function () {
      vw = _.R('auth2/idpValue', 'google')
      var a = _.R(
          'oauth-flow/authUrl',
          'https://accounts.google.com/o/oauth2/auth'
        ),
        b = _.R(
          'oauth-flow/idpIframeUrl',
          'https://accounts.google.com/o/oauth2/iframe'
        )
      _.jv(vw, { authServerUrl: a, idpIFrameUrl: b })
    },
    $w = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = b[d]
        if (d === b.length - 1) {
          a[e] = c
          break
        }
        _.Ya(a[e]) || (a[e] = {})
        a = a[e]
      }
    },
    ax = function () {
      var a = window.location.origin
      a || (a = window.location.protocol + '//' + window.location.host)
      return a
    }
  var bx = function (a) {
    var b = a ? ((b = Yw(a)) ? b.sub : null) : null
    this.Ca = b
    this.uc = a ? _.ok(a) : null
  }
  _.h = bx.prototype
  _.h.ma = function () {
    return this.Ca
  }
  _.h.$y = function () {
    var a = Yw(this.uc)
    return a ? a.hd : null
  }
  _.h.zf = function () {
    return !!this.uc
  }
  _.h.Oj = function (a) {
    if (a) return this.uc
    a = cx
    var b = _.ok(this.uc)
    !a.zu || a.Uz || a.gU || (delete b.access_token, delete b.scope)
    return b
  }
  _.h.GB = function () {
    return cx.GB()
  }
  _.h.fj = function () {
    this.uc = null
  }
  _.h.UR = function () {
    return this.uc ? this.uc.scope : null
  }
  _.h.update = function (a) {
    this.Ca = a.Ca
    this.uc = a.uc
    this.uc.id_token ? (this.Hs = new dx(this.uc)) : this.Hs && (this.Hs = null)
  }
  var ex = function (a) {
    return a.uc && 'object' == typeof a.uc.session_state
      ? _.ok(a.uc.session_state.extraQueryParams || {})
      : {}
  }
  _.h = bx.prototype
  _.h.zp = function () {
    var a = ex(this)
    return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
  }
  _.h.ej = function (a) {
    var b = cx,
      c = new Vw(a)
    b.Uz = c.Wp() ? !0 : !1
    cx.zu && Ww(c, 'openid profile email')
    return new _.Ik(function (d, e) {
      var f = ex(this)
      f.login_hint = this.ma()
      f.scope = c.Wp()
      fx(b, d, e, f)
    }, this)
  }
  _.h.Yp = function (a) {
    return new _.Ik(function (b, c) {
      var d = a || {},
        e = cx
      d.login_hint = this.ma()
      e.Yp(d).then(b, c)
    }, this)
  }
  _.h.TS = function (a) {
    return this.ej(a)
  }
  _.h.disconnect = function () {
    return cx.disconnect()
  }
  _.h.qR = function () {
    return this.Hs
  }
  _.h.lu = function (a) {
    if (!this.zf()) return !1
    var b = this.uc && this.uc.scope ? this.uc.scope.split(' ') : ''
    return _.pb(a ? a.split(' ') : [], function (c) {
      return _.Xa(b, c)
    })
  }
  var dx = function (a) {
    a = Yw(a)
    this.kR = a.sub
    this.sd = a.name
    this.QS = a.given_name
    this.SQ = a.family_name
    this.jI = a.picture
    this.nt = a.email
  }
  _.h = dx.prototype
  _.h.ma = function () {
    return this.kR
  }
  _.h.getName = function () {
    return this.sd
  }
  _.h.SR = function () {
    return this.QS
  }
  _.h.NR = function () {
    return this.SQ
  }
  _.h.cS = function () {
    return this.jI
  }
  _.h.Nt = function () {
    return this.nt
  }
  var hx = function (a, b, c) {
      this.Kl = b
      this.ZV = a
      for (var d in a) a.hasOwnProperty(d) && gx(this, d)
      if (c && c.length)
        for (a = 0; a < c.length; a++) this[c[a]] = this.Kl[c[a]]
    },
    gx = function (a, b) {
      a[b] = function () {
        return a.ZV[b].apply(a.Kl, arguments)
      }
    }
  hx.prototype.then = function (a, b, c) {
    var d = this
    return _.Mk().then(function () {
      return ix(d.Kl, a, b, c)
    })
  }
  _.sk(hx)
  var jx
  jx = function (a) {
    var b = location
    if (a && 'none' != a)
      return 'single_host_origin' == a ? b.protocol + '//' + b.host : a
  }
  _.kx = function (a) {
    if (!a) throw new Fw('No cookiePolicy')
    var b = window.location.hostname
    'single_host_origin' == a && (a = window.location.protocol + '//' + b)
    if ('none' == a) return null
    var c = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a)
    if (!c) throw new Fw('Invalid cookiePolicy')
    a = c[2]
    c = c[1]
    var d = {}
    d.dotValue = a.split('.').length
    d.isSecure = -1 != c.indexOf('https')
    d.domain = a
    if (!_.ui(b, '.' + a) && !_.ui(b, a))
      throw new Fw('Invalid cookiePolicy domain')
    return d
  }
  var mx, lx, nx, ox, px, qx, sx, xx, tx, zx, Ax, ux
  mx = function (a) {
    var b = a || {},
      c = lx()
    _.lb(xw, function (d) {
      'undefined' === typeof b[d] &&
        'undefined' !== typeof c[d] &&
        (b[d] = c[d])
    })
    return b
  }
  lx = function () {
    for (
      var a = {}, b = document.getElementsByTagName('meta'), c = 0;
      c < b.length;
      ++c
    )
      if (b[c].name) {
        var d = b[c].name
        if (0 == d.indexOf('google-signin-')) {
          d = d.substring(14)
          var e = b[c].content
          Aw[d] && (d = Aw[d])
          _.Xa(xw, d) && e && (a[d] = 'true' == e ? !0 : 'false' == e ? !1 : e)
        }
      }
    return a
  }
  nx = function (a) {
    return String(a).replace(/_([a-z])/g, function (b, c) {
      return c.toUpperCase()
    })
  }
  ox = function (a) {
    _.lb(xw, function (b) {
      var c = nx(b)
      'undefined' !== typeof a[c] &&
        'undefined' === typeof a[b] &&
        ((a[b] = a[c]), delete a[c])
    })
  }
  px = function (a) {
    a = mx(a)
    ox(a)
    a.cookie_policy || (a.cookie_policy = 'single_host_origin')
    var b = xw + yw,
      c
    for (c in a) 0 > b.indexOf(c) && delete a[c]
    return a
  }
  qx = function (a, b) {
    if (!a) throw new Fw('Empty initial options.')
    for (var c = 0; c < ww.length; ++c)
      if (!((b && 'scope' == ww[c]) || a[ww[c]]))
        throw new Fw("Missing required parameter '" + ww[c] + "'")
    _.kx(a.cookie_policy)
  }
  sx = function (a) {
    var b = {
      authParameters: {
        redirect_uri: void 0,
        response_type: 'token id_token',
        scope: a.scope,
        'openid.realm': a.openid_realm,
      },
      clientId: a.client_id,
      crossSubDomains: !0,
      domain: jx(a.cookie_policy),
      disableTokenRefresh: !!a.disable_token_refresh,
      idpId: vw,
    }
    _.rx(b, a)
    _.lb(zw, function (c) {
      a[c] && (b.authParameters[c] = a[c])
    })
    'boolean' == typeof a.enable_serial_consent &&
      (b.enableSerialConsent = a.enable_serial_consent)
    return b
  }
  _.rx = function () {}
  xx = function (a) {
    var b = a.client_id,
      c = a.cookie_policy,
      d = a.scope,
      e = a.openid_realm,
      f = a.hosted_domain,
      g = a.oidc_spec_compliant,
      k = a.nonce,
      l = tx(a),
      m = {
        authParameters: { response_type: l, scope: d, 'openid.realm': e },
        rpcAuthParameters: { response_type: l, scope: d, 'openid.realm': e },
        clientId: b,
        crossSubDomains: !0,
        domain: jx(c),
        idpId: vw,
      }
    f && ((m.authParameters.hd = f), (m.rpcAuthParameters.hd = f))
    g && ((m.rpcAuthParameters.spec_compliant = g), (k = k || _.fw()))
    k &&
      ((m.authParameters.nonce = k),
      (m.rpcAuthParameters.nonce = k),
      (m.forceTokenRefresh = !0),
      (m.skipTokenCache = !0))
    _.lb(zw.concat(yw), function (n) {
      a[n] && (m.authParameters[n] = a[n])
    })
    void 0 !== a.authuser &&
      null !== a.authuser &&
      (m.authParameters.authuser = a.authuser)
    'boolean' == typeof a.include_granted_scopes &&
      ((b = new ux(a.response_type || 'token')),
      vx(b) &&
        (m.authParameters.include_granted_scopes = a.include_granted_scopes),
      wx(b) &&
        ((m.rpcAuthParameters.include_granted_scopes =
          a.include_granted_scopes),
        !1 === a.include_granted_scopes &&
          ((m.forceTokenRefresh = !0), (m.skipTokenCache = !0))))
    'boolean' == typeof a.enable_serial_consent &&
      (m.enableSerialConsent = a.enable_serial_consent)
    return m
  }
  tx = function (a) {
    a = new ux(a.response_type || 'token')
    var b = []
    wx(a) && b.push('token')
    yx(a, 'id_token') && b.push('id_token')
    0 == b.length && (b = ['token', 'id_token'])
    return b.join(' ')
  }
  zx = ['permission', 'id_token']
  Ax = /(^|[^_])token/
  ux = function (a) {
    this.Qn = []
    this.kA(a)
  }
  ux.prototype.kA = function (a) {
    a
      ? ((0 <= a.indexOf('permission') || a.match(Ax)) &&
          this.Qn.push('permission'),
        0 <= a.indexOf('id_token') && this.Qn.push('id_token'),
        0 <= a.indexOf('code') && this.Qn.push('code'))
      : (this.Qn = zx)
  }
  var vx = function (a) {
      return yx(a, 'code')
    },
    wx = function (a) {
      return yx(a, 'permission')
    }
  ux.prototype.toString = function () {
    return this.Qn.join(' ')
  }
  var yx = function (a, b) {
    var c = !1
    _.lb(a.Qn, function (d) {
      d == b && (c = !0)
    })
    return c
  }
  var cx, Bx, Dx, Fx, Gx, ix
  cx = null
  _.Cx = function () {
    return cx ? Bx() : null
  }
  Bx = function () {
    return new hx(Dx.prototype, cx, ['currentUser', 'isSignedIn'])
  }
  Dx = function (a) {
    delete a.include_granted_scopes
    this.Ba = sx(a)
    this.eQ = a.cookie_policy
    this.gU = !!a.scope
    ;(this.zu = !1 !== a.fetch_basic_profile) &&
      (this.Ba.authParameters.scope = Ex(this, 'openid profile email'))
    this.kq = a.hosted_domain
    this.p_ = a.ux_mode || 'popup'
    this.hX = a.redirect_uri || null
    Fx(this)
  }
  Fx = function (a) {
    a.currentUser = new Sw(new bx(null))
    a.isSignedIn = new Sw(!1)
    a.Ld = new _.aw(a.Ba)
    a.yn = null
    a.Fu = null
    a.oV = new _.Ik(function (b, c) {
      this.yn = b
      this.Fu = c
    }, a)
    a.sv = {}
    a.uq = !0
    Gx(a)
    a.Ld.start()
  }
  Gx = function (a) {
    a.Ld.addEventListener('error', function (b) {
      a.uq &&
        a.yn &&
        ((a.uq = !1),
        a.Fu({ error: b.error, details: b.details }),
        (a.yn = null),
        (a.Fu = null))
    })
    a.Ld.addEventListener('authResult', function (b) {
      b && b.authResult && a.Ke(b)
      a.Ld.Jp()(b)
    })
    a.Ld.addEventListener('tokenReady', function (b) {
      var c = new bx(b.response)
      if (a.kq && a.kq != c.$y())
        a.Ke({
          type: 'tokenFailed',
          reason:
            'Account domain does not match hosted_domain specified by gapi.auth2.init.',
          accountDomain: c.$y(),
          expectedDomain: a.kq,
        })
      else {
        a.currentUser.get().update(c)
        var d = a.currentUser
        d.Xb.notify(d.ee)
        a.isSignedIn.set(!0)
        c = c.zp()
        ;(d = _.kx(a.eQ)) &&
          c &&
          _.Dh.set(
            [
              'G_AUTHUSER_',
              'https:' === window.location.protocol && d.xe ? 'S' : 'H',
              d.jh,
            ].join(''),
            c,
            { domain: d.domain, secure: d.isSecure }
          )
        _.tw(b.response)
        a.Ke(b)
      }
    })
    a.Ld.addEventListener('noSessionBound', function (b) {
      a.uq && b.autoOpenAuthUrl
        ? ((a.uq = !1),
          Kw(a.Ld).select(function (c) {
            if (c && c.login_hint) {
              var d = a.Ld
              _.Tv(d, d.mw, [c.login_hint, !0])
            } else a.currentUser.set(new bx(null)), a.isSignedIn.set(!1), _.uw(), a.Ke(b)
          }))
        : (a.currentUser.set(new bx(null)),
          a.isSignedIn.set(!1),
          _.uw(),
          a.Ke(b))
    })
    a.Ld.addEventListener('tokenFailed', function (b) {
      a.Ke(b)
    })
    a.Ld.addEventListener('userLoggedOut', function (b) {
      a.currentUser.get().fj()
      var c = a.currentUser
      c.Xb.notify(c.ee)
      a.isSignedIn.set(!1)
      _.uw()
      a.Ke(b)
    })
  }
  ix = function (a, b, c, d) {
    return a.oV.then(
      function (e) {
        if (b) return b(e.RS)
      },
      c,
      d
    )
  }
  Dx.prototype.Ke = function (a) {
    if (a) {
      this.uq = !1
      var b = a.type || ''
      if (this.sv[b]) this.sv[b](a)
      this.yn && (this.yn({ RS: this }), (this.Fu = this.yn = null))
    }
  }
  var Hx = function (a, b) {
      _.zb(b, function (c, d) {
        a.sv[d] = function (e) {
          a.sv = {}
          c(e)
        }
      })
    },
    fx = function (a, b, c, d) {
      d = _.ok(d)
      a.kq && (d.hd = a.kq)
      var e = d.ux_mode || a.p_
      delete d.ux_mode
      delete d.app_package_name
      var f = {
        sessionMeta: { extraQueryParams: d },
        responseType: 'permission id_token',
      }
      'redirect' == e
        ? (d.redirect_uri ||
            (d.redirect_uri = a.hX || ax() + window.location.pathname),
          Ix(a, f))
        : (delete d.redirect_uri,
          Jx(a, f),
          Hx(a, {
            authResult: function (g) {
              g.authResult && g.authResult.error
                ? c(g.authResult)
                : Hx(a, {
                    tokenReady: function () {
                      b(a.currentUser.get())
                    },
                    tokenFailed: c,
                  })
            },
          }))
    }
  Dx.prototype.ej = function (a) {
    return new _.Ik(function (b, c) {
      var d = new Vw(a)
      this.Uz = d.Wp() ? !0 : !1
      this.zu
        ? ((d.Ba.fetch_basic_profile = !0), Ww(d, 'email profile openid'))
        : (d.Ba.fetch_basic_profile = !1)
      var e = Ex(this, d.Wp())
      d.BL(e)
      fx(this, b, c, d.get())
    }, this)
  }
  Dx.prototype.Yp = function (a) {
    var b = a || {}
    this.Uz = !!b.scope
    a = Ex(this, b.scope)
    if ('' == a) return _.Nk({ error: 'Missing required parameter: scope' })
    var c = { scope: a, access_type: 'offline', include_granted_scopes: !0 }
    _.lb(Bw, function (d) {
      null != b[d] && (c[d] = b[d])
    })
    c.hasOwnProperty('prompt') ||
      c.hasOwnProperty('approval_prompt') ||
      (c.prompt = 'consent')
    return 'postmessage' == b.redirect_uri || void 0 == b.redirect_uri
      ? Kx(this, c)
      : Lx(this, c, b.redirect_uri)
  }
  var Lx = function (a, b, c) {
      b.redirect_uri = c
      Ix(a, {
        sessionMeta: { extraQueryParams: b },
        responseType: 'code id_token',
      })
      return _.Mk({ message: 'Redirecting to IDP.' })
    },
    Kx = function (a, b) {
      b.origin = ax()
      delete b.redirect_uri
      Jx(a, {
        sessionMeta: { extraQueryParams: b },
        responseType: 'code permission id_token',
      })
      return new _.Ik(function (c, d) {
        Hx(this, {
          authResult: function (e) {
            ;(e = e && e.authResult) && e.code
              ? c({ code: e.code })
              : d(e && e.error ? e : { error: 'unknown_error' })
          },
        })
      }, a)
    },
    Jx = function (a, b) {
      $w(b, ['sessionMeta', 'extraQueryParams', 'gsiwebsdk'], '2')
      nw(a.Ld, Xw(), b)
    },
    Ix = function (a, b) {
      $w(b, ['sessionMeta', 'extraQueryParams', 'gsiwebsdk'], '2')
      var c = b || {}
      b = window.location
      var d = b.assign
      a = a.Ld
      if (!a.Ub) throw Error('ga')
      a = kw(a.Jb, a.vc, a.Ub, a.Ko, !1, c.sessionMeta, c.responseType)
      d.call(b, a)
    }
  Dx.prototype.fj = function (a) {
    var b = a || !1
    return new _.Ik(function (c) {
      gw(this.Ld, b, function () {
        c()
      })
    }, this)
  }
  Dx.prototype.UG = function () {
    return this.Ba.authParameters.scope
  }
  var Ex = function (a, b) {
    a = a.UG()
    b = ew(b ? b.split(' ') : [], a ? a.split(' ') : [])
    _.Je(b)
    return b.join(' ')
  }
  Dx.prototype.GB = function () {
    var a = this
    return new _.Ik(function (b, c) {
      Hx(a, {
        noSessionBound: c,
        tokenFailed: c,
        userLoggedOut: c,
        tokenReady: function (d) {
          b(d.response)
        },
      })
      ow(a.Ld)
    })
  }
  Dx.prototype.EE = function (a, b, c, d) {
    if ((a = 'string' === typeof a ? document.getElementById(a) : a)) {
      var e = this
      _.Ti(a, 'click', function () {
        var f = b
        'function' == typeof b && (f = b())
        e.ej(f).then(
          function (g) {
            c && c(g)
          },
          function (g) {
            d && d(g)
          }
        )
      })
    } else
      d &&
        d({
          error:
            'Could not attach click handler to the element. Reason: element not found.',
        })
  }
  Dx.prototype.disconnect = function () {
    return new _.Ik(function (a) {
      this.Ld.Zq(function () {
        a()
      })
    }, this)
  }
  Dx.prototype.attachClickHandler = Dx.prototype.EE
  var Mx
  _.Ik.prototype['catch'] = _.Ik.prototype.Nr
  Mx = null
  _.Nx = function (a) {
    a = px(a)
    if (cx) {
      if (_.nk(a, Mx || {})) return Bx()
      throw new Fw(
        'gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().'
      )
    }
    qx(a, !1 !== a.fetch_basic_profile)
    Zw()
    Mx = a
    cx = new Dx(a)
    _.ye.ga = 1
    return Bx()
  }
  var Px, Rx, Ox, Tx, Sx, Ux
  _.Qx = function (a, b) {
    Zw()
    a = px(a)
    qx(a)
    var c = xx(a),
      d = new _.cw(c)
    'none' == a.prompt
      ? Ox(d, a, function (e) {
          e.status = e.error
            ? { signed_in: !1, method: null, google_logged_in: !1 }
            : { signed_in: !0, method: 'AUTO', google_logged_in: !0 }
          b(e)
        })
      : Px(d, a, function (e) {
          if (e.error)
            e.status = { signed_in: !1, method: null, google_logged_in: !1 }
          else {
            var f = e.access_token || e.id_token
            e.status = {
              signed_in: !!f,
              method: 'PROMPT',
              google_logged_in: !!f,
            }
          }
          e['g-oauth-window'] = d.aK.Rg
          b(e)
        })
  }
  Px = function (a, b, c) {
    var d = new ux(b.response_type)
    c = Rx(a, d, c)
    var e = { responseType: d.toString() }
    $w(e, ['sessionMeta', 'extraQueryParams', 'gsiwebsdk'], b.gsiwebsdk || '2')
    vx(d) &&
      $w(
        e,
        ['sessionMeta', 'extraQueryParams', 'access_type'],
        b.access_type || 'offline'
      )
    b.redirect_uri &&
      $w(e, ['sessionMeta', 'extraQueryParams', 'redirect_uri'], b.redirect_uri)
    b.state && $w(e, ['sessionMeta', 'extraQueryParams', 'state'], b.state)
    b = Xw()
    a.El
      ? c({
          authResult: {
            error: 'idpiframe_initialization_failed',
            details: a.fl().error,
          },
        })
      : ((a.Kk = c), nw(a, b, e))
  }
  Rx = function (a, b, c) {
    if (wx(b)) {
      var d = Sx(c)
      return function (e) {
        e && e.authResult && !e.authResult.error
          ? a.Jp(function (f) {
              f && !f.error
                ? ((f = _.ok(f)), vx(b) && (f.code = e.authResult.code), d(f))
                : d(f ? f : { error: 'unknown_error' })
            })(e)
          : d(e && e.authResult ? e.authResult : { error: 'unknown_error' })
      }
    }
    return function (e) {
      e && e.authResult && !e.authResult.error
        ? c(_.ok(e.authResult))
        : c(e && e.authResult ? e.authResult : { error: 'unknown_error' })
    }
  }
  Ox = function (a, b, c) {
    if (vx(new ux(b.response_type)) && 'offline' == b.access_type)
      c({ error: 'immediate_failed', error_subtype: 'access_denied' })
    else {
      var d = Sx(c)
      b.login_hint
        ? a.Dy(b.login_hint, function (e) {
            e
              ? Tx(a, b, e, d)
              : c({ error: 'immediate_failed', error_subtype: 'access_denied' })
          })
        : void 0 !== b.authuser && null !== b.authuser
        ? Mw(a, b.authuser).select(function (e) {
            e && e.login_hint
              ? Tx(a, b, e.login_hint, d)
              : d({ error: 'immediate_failed', error_subtype: 'access_denied' })
          })
        : a.Cp(function (e) {
            e && e.hint
              ? Tx(a, b, e.hint, d)
              : e && e.disabled
              ? d({ error: 'immediate_failed', error_subtype: 'no_user_bound' })
              : ('first_valid' == b.session_selection ? Lw(a) : Kw(a)).select(
                  function (f) {
                    f && f.login_hint
                      ? Tx(a, b, f.login_hint, d)
                      : d({
                          error: 'immediate_failed',
                          error_subtype: 'no_user_bound',
                        })
                  }
                )
          })
    }
  }
  Tx = function (a, b, c, d) {
    b = new ux(b.response_type)
    var e = 0,
      f = {},
      g = function (k) {
        !k || k.error ? d(k) : (e--, _.Bb(f, k), 0 == e && d(f))
      }
    ;(wx(b) || yx(b, 'id_token')) && e++
    vx(b) && e++
    ;(wx(b) || yx(b, 'id_token')) && _.dw(a, c, g)
    vx(b) && pw(a, c, g)
  }
  Sx = function (a) {
    return function (b) {
      if (!b || b.error) _.uw(), b ? a(b) : a({ error: 'unknown_error' })
      else {
        if (b.access_token) {
          var c = _.ok(b)
          Ux(c)
          delete c.id_token
          delete c.code
          _.tw(c)
        }
        a(b)
      }
    }
  }
  Ux = function (a) {
    _.lb(Cw, function (b) {
      delete a[b]
    })
  }
  _.L('gapi.auth2.init', _.Nx)
  _.L('gapi.auth2.authorize', function (a, b) {
    if (null != cx)
      throw new Fw(
        "gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters)."
      )
    _.Qx(a, function (c) {
      Ux(c)
      b(c)
    })
  })
  _.L('gapi.auth2._gt', function () {
    return _.Qh()
  })
  _.L('gapi.auth2.enableDebugLogs', function (a) {
    a = !1 !== a
    _.Uu = '0' != a && !!a
  })
  _.L('gapi.auth2.getAuthInstance', _.Cx)
  _.L('gapi.auth2.BasicProfile', dx)
  _.L('gapi.auth2.BasicProfile.prototype.getId', dx.prototype.ma)
  _.L('gapi.auth2.BasicProfile.prototype.getName', dx.prototype.getName)
  _.L('gapi.auth2.BasicProfile.prototype.getGivenName', dx.prototype.SR)
  _.L('gapi.auth2.BasicProfile.prototype.getFamilyName', dx.prototype.NR)
  _.L('gapi.auth2.BasicProfile.prototype.getImageUrl', dx.prototype.cS)
  _.L('gapi.auth2.BasicProfile.prototype.getEmail', dx.prototype.Nt)
  _.L('gapi.auth2.GoogleAuth', Dx)
  _.L('gapi.auth2.GoogleAuth.prototype.attachClickHandler', Dx.prototype.EE)
  _.L('gapi.auth2.GoogleAuth.prototype.disconnect', Dx.prototype.disconnect)
  _.L('gapi.auth2.GoogleAuth.prototype.grantOfflineAccess', Dx.prototype.Yp)
  _.L('gapi.auth2.GoogleAuth.prototype.signIn', Dx.prototype.ej)
  _.L('gapi.auth2.GoogleAuth.prototype.signOut', Dx.prototype.fj)
  _.L('gapi.auth2.GoogleAuth.prototype.getInitialScopes', Dx.prototype.UG)
  _.L('gapi.auth2.GoogleUser', bx)
  _.L('gapi.auth2.GoogleUser.prototype.grant', bx.prototype.TS)
  _.L('gapi.auth2.GoogleUser.prototype.getId', bx.prototype.ma)
  _.L('gapi.auth2.GoogleUser.prototype.isSignedIn', bx.prototype.zf)
  _.L('gapi.auth2.GoogleUser.prototype.getAuthResponse', bx.prototype.Oj)
  _.L('gapi.auth2.GoogleUser.prototype.getBasicProfile', bx.prototype.qR)
  _.L('gapi.auth2.GoogleUser.prototype.getGrantedScopes', bx.prototype.UR)
  _.L('gapi.auth2.GoogleUser.prototype.getHostedDomain', bx.prototype.$y)
  _.L('gapi.auth2.GoogleUser.prototype.grantOfflineAccess', bx.prototype.Yp)
  _.L('gapi.auth2.GoogleUser.prototype.hasGrantedScopes', bx.prototype.lu)
  _.L('gapi.auth2.GoogleUser.prototype.reloadAuthResponse', bx.prototype.GB)
  _.L('gapi.auth2.LiveValue', Sw)
  _.L('gapi.auth2.LiveValue.prototype.listen', Sw.prototype.V)
  _.L('gapi.auth2.LiveValue.prototype.get', Sw.prototype.get)
  _.L('gapi.auth2.SigninOptionsBuilder', Vw)
  _.L(
    'gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName',
    Vw.prototype.nR
  )
  _.L(
    'gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName',
    Vw.prototype.yY
  )
  _.L('gapi.auth2.SigninOptionsBuilder.prototype.getScope', Vw.prototype.Wp)
  _.L('gapi.auth2.SigninOptionsBuilder.prototype.setScope', Vw.prototype.BL)
  _.L('gapi.auth2.SigninOptionsBuilder.prototype.getPrompt', Vw.prototype.xS)
  _.L('gapi.auth2.SigninOptionsBuilder.prototype.setPrompt', Vw.prototype.aZ)
  _.L('gapi.auth2.SigninOptionsBuilder.prototype.get', Vw.prototype.get)

  _.rx = function (a, b) {
    var c = b.oidc_spec_compliant
    b = b.nonce
    c && ((a.spec_compliant = c), (b = b || _.fw()))
    b &&
      ((a.authParameters.nonce = b),
      (a.forceTokenRefresh = !0),
      (a.skipTokenCache = !0))
  }

  _.Qe.A1 = function (a) {
    var b = []
    if (1 < arguments.length)
      for (var c = 0, d; (d = arguments[c]); ++c) b.push(d)
    else b = a
    return function (e) {
      for (var f = 0; b[f]; ++f) if (e === b[f]) return !0
      return !1
    }
  }
  _.Qe.J4 = function (a) {
    return function (b) {
      return a.test(b)
    }
  }
  _.Qe.jN = function (a) {
    return 'undefined' !== typeof a
  }
  _.Qe.J3 = function (a) {
    return 'string' === typeof a && 0 < a.length
  }
  _.Qe.$_ = function (a) {
    return 'boolean' === typeof a
  }
  _.Qe.S2 = function (a) {
    return function (b) {
      for (var c in a) if (a.hasOwnProperty(c) && !(0, a[c])(b[c])) return !1
      return !0
    }
  }

  _.Me = _.Me || {}
  ;(function () {
    function a(b) {
      var c = ''
      if (3 == b.nodeType || 4 == b.nodeType) c = b.nodeValue
      else if (b.innerText) c = b.innerText
      else if (b.innerHTML) c = b.innerHTML
      else if (b.firstChild) {
        c = []
        for (b = b.firstChild; b; b = b.nextSibling) c.push(a(b))
        c = c.join('')
      }
      return c
    }
    _.Me.createElement = function (b) {
      if (!document.body || document.body.namespaceURI)
        try {
          var c = document.createElementNS('http://www.w3.org/1999/xhtml', b)
        } catch (d) {}
      return c || document.createElement(b)
    }
    _.Me.createIframeElement = function (b) {
      var c = _.Me.createElement('iframe')
      try {
        var d = ['<', 'iframe'],
          e = b || {},
          f
        for (f in e)
          e.hasOwnProperty(f) &&
            (d.push(' '),
            d.push(f),
            d.push('="'),
            d.push(_.Me.escapeString(e[f])),
            d.push('"'))
        d.push('></')
        d.push('iframe')
        d.push('>')
        var g = _.Me.createElement(d.join(''))
        g &&
          (!c ||
            (g.tagName == c.tagName && g.namespaceURI == c.namespaceURI)) &&
          (c = g)
      } catch (l) {}
      d = c
      b = b || {}
      for (var k in b) b.hasOwnProperty(k) && (d[k] = b[k])
      return c
    }
    _.Me.getBodyElement = function () {
      if (document.body) return document.body
      try {
        var b = document.getElementsByTagNameNS(
          'http://www.w3.org/1999/xhtml',
          'body'
        )
        if (b && 1 == b.length) return b[0]
      } catch (c) {}
      return document.documentElement || document
    }
    _.Me.i8 = function (b) {
      return a(b)
    }
  })()

  _.Me = _.Me || {}
  ;(function () {
    function a(d) {
      b = d['core.util'] || {}
    }
    var b = {},
      c = {}
    _.Qe && _.Qe.register('core.util', null, a)
    _.Me.getFeatureParameters = function (d) {
      return 'undefined' === typeof b[d] ? null : b[d]
    }
    _.Me.hasFeature = function (d) {
      return 'undefined' !== typeof b[d]
    }
    _.Me.t8 = function () {
      return c
    }
  })()

  _.Eh = function () {
    function a() {
      e[0] = 1732584193
      e[1] = 4023233417
      e[2] = 2562383102
      e[3] = 271733878
      e[4] = 3285377520
      n = m = 0
    }
    function b(r) {
      for (var u = g, q = 0; 64 > q; q += 4)
        u[q / 4] = (r[q] << 24) | (r[q + 1] << 16) | (r[q + 2] << 8) | r[q + 3]
      for (q = 16; 80 > q; q++)
        (r = u[q - 3] ^ u[q - 8] ^ u[q - 14] ^ u[q - 16]),
          (u[q] = ((r << 1) | (r >>> 31)) & 4294967295)
      r = e[0]
      var v = e[1],
        t = e[2],
        w = e[3],
        y = e[4]
      for (q = 0; 80 > q; q++) {
        if (40 > q)
          if (20 > q) {
            var A = w ^ (v & (t ^ w))
            var B = 1518500249
          } else (A = v ^ t ^ w), (B = 1859775393)
        else
          60 > q
            ? ((A = (v & t) | (w & (v | t))), (B = 2400959708))
            : ((A = v ^ t ^ w), (B = 3395469782))
        A =
          ((((r << 5) | (r >>> 27)) & 4294967295) + A + y + B + u[q]) &
          4294967295
        y = w
        w = t
        t = ((v << 30) | (v >>> 2)) & 4294967295
        v = r
        r = A
      }
      e[0] = (e[0] + r) & 4294967295
      e[1] = (e[1] + v) & 4294967295
      e[2] = (e[2] + t) & 4294967295
      e[3] = (e[3] + w) & 4294967295
      e[4] = (e[4] + y) & 4294967295
    }
    function c(r, u) {
      if ('string' === typeof r) {
        r = unescape(encodeURIComponent(r))
        for (var q = [], v = 0, t = r.length; v < t; ++v)
          q.push(r.charCodeAt(v))
        r = q
      }
      u || (u = r.length)
      q = 0
      if (0 == m)
        for (; q + 64 < u; ) b(r.slice(q, q + 64)), (q += 64), (n += 64)
      for (; q < u; )
        if (((f[m++] = r[q++]), n++, 64 == m))
          for (m = 0, b(f); q + 64 < u; )
            b(r.slice(q, q + 64)), (q += 64), (n += 64)
    }
    function d() {
      var r = [],
        u = 8 * n
      56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56))
      for (var q = 63; 56 <= q; q--) (f[q] = u & 255), (u >>>= 8)
      b(f)
      for (q = u = 0; 5 > q; q++)
        for (var v = 24; 0 <= v; v -= 8) r[u++] = (e[q] >> v) & 255
      return r
    }
    for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0
    var m, n
    a()
    return {
      reset: a,
      update: c,
      digest: d,
      Cg: function () {
        for (var r = d(), u = '', q = 0; q < r.length; q++)
          u +=
            '0123456789ABCDEF'.charAt(Math.floor(r[q] / 16)) +
            '0123456789ABCDEF'.charAt(r[q] % 16)
        return u
      },
    }
  }
  var Gh = function (a, b, c) {
      var d = String(_.D.location.href)
      return d && a && b ? [b, Fh(_.pg(d), a, c || null)].join(' ') : null
    },
    Fh = function (a, b, c) {
      var d = [],
        e = []
      if (1 == (Array.isArray(c) ? 2 : 1))
        return (
          (e = [b, a]),
          _.lb(d, function (k) {
            e.push(k)
          }),
          Hh(e.join(' '))
        )
      var f = [],
        g = []
      _.lb(c, function (k) {
        g.push(k.key)
        f.push(k.value)
      })
      c = Math.floor(new Date().getTime() / 1e3)
      e = 0 == f.length ? [c, b, a] : [f.join(':'), c, b, a]
      _.lb(d, function (k) {
        e.push(k)
      })
      a = Hh(e.join(' '))
      a = [c, a]
      0 == g.length || a.push(g.join(''))
      return a.join('_')
    },
    Hh = function (a) {
      var b = _.Eh()
      b.update(a)
      return b.Cg().toLowerCase()
    }
  _.Ih = {}
  var Lh
  _.Jh = function (a) {
    return !!_.Ih.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
  }
  _.Kh = function (a) {
    a = void 0 === a ? !1 : a
    var b =
      _.D.__SAPISID || _.D.__APISID || _.D.__3PSAPISID || _.D.__OVERRIDE_SID
    _.Jh(a) && (b = b || _.D.__1PSAPISID)
    if (b) return !0
    var c = new _.Bh(document)
    b =
      c.get('SAPISID') ||
      c.get('APISID') ||
      c.get('__Secure-3PAPISID') ||
      c.get('SID')
    _.Jh(a) && (b = b || c.get('__Secure-1PAPISID'))
    return !!b
  }
  Lh = function (a, b, c, d) {
    ;(a = _.D[a]) || (a = new _.Bh(document).get(b))
    return a ? Gh(a, c, d) : null
  }
  _.Mh = function (a, b) {
    b = void 0 === b ? !1 : b
    var c = _.pg(String(_.D.location.href)),
      d = []
    if (_.Kh(b)) {
      c =
        0 == c.indexOf('https:') ||
        0 == c.indexOf('chrome-extension:') ||
        0 == c.indexOf('moz-extension:')
      var e = c ? _.D.__SAPISID : _.D.__APISID
      e ||
        ((e = new _.Bh(document)),
        (e = e.get(c ? 'SAPISID' : 'APISID') || e.get('__Secure-3PAPISID')))
      ;(e = e ? Gh(e, c ? 'SAPISIDHASH' : 'APISIDHASH', a) : null) && d.push(e)
      c &&
        _.Jh(b) &&
        ((b = Lh('__1PSAPISID', '__Secure-1PAPISID', 'SAPISID1PHASH', a)) &&
          d.push(b),
        (a = Lh('__3PSAPISID', '__Secure-3PAPISID', 'SAPISID3PHASH', a)) &&
          d.push(a))
    }
    return 0 == d.length ? null : d.join(' ')
  }

  _.Nh = function (a, b) {
    var c = { SAPISIDHASH: !0, SAPISID3PHASH: !0, APISIDHASH: !0 }
    _.Jh(void 0 === b ? !1 : b) && (c.SAPISID1PHASH = !0)
    return a &&
      (a.OriginToken ||
        (a.Authorization && c[String(a.Authorization).split(' ')[0]]))
      ? !0
      : !1
  }
  _.Oh = {
    MH: _.Nh,
    iV: _.Kh,
    ZG: function () {
      var a = null
      _.Kh() &&
        ((a = window.__PVT), null == a && (a = new _.Bh(document).get('BEAT')))
      return a
    },
    AG: _.Mh,
  }

  _.ck = function (a) {
    this.S = a
  }
  _.h = _.ck.prototype
  _.h.value = function () {
    return this.S
  }
  _.h.fm = function (a) {
    this.S.width = a
    return this
  }
  _.h.Nc = function () {
    return this.S.width
  }
  _.h.$i = function (a) {
    this.S.height = a
    return this
  }
  _.h.getHeight = function () {
    return this.S.height
  }
  _.h.Ge = function (a) {
    this.S.style = a
    return this
  }
  _.h.tl = _.ja(14)
  _.dk = function (a) {
    this.S = a
  }
  _.dk.prototype.jC = function (a) {
    this.S.anchor = a
    return this
  }
  _.dk.prototype.rh = function () {
    return this.S.anchor
  }
  _.dk.prototype.Zv = _.ja(16)
  _.ek = function (a) {
    a.S.show = !0
    return a
  }
  _.dk.prototype.$i = function (a) {
    this.S.height = a
    return this
  }
  _.dk.prototype.getHeight = function () {
    return this.S.height
  }
  _.dk.prototype.fm = function (a) {
    this.S.width = a
    return this
  }
  _.dk.prototype.Nc = function () {
    return this.S.width
  }
  _.fk = function (a) {
    this.S = a || {}
  }
  _.fk.prototype.value = function () {
    return this.S
  }
  _.fk.prototype.setUrl = function (a) {
    this.S.url = a
    return this
  }
  _.fk.prototype.getUrl = function () {
    return this.S.url
  }
  _.gk = function (a, b) {
    a.S.where = b
    return a
  }
  _.h = _.fk.prototype
  _.h.Ge = function (a) {
    this.S.style = a
    return this
  }
  _.h.tl = _.ja(13)
  _.h.Ee = function (a) {
    this.S.id = a
    return this
  }
  _.h.ma = function () {
    return this.S.id
  }
  _.h.zk = function (a) {
    this.S.rpctoken = a
    return this
  }
  _.hk = function (a, b) {
    a.S.queryParams = b
    return a
  }
  _.ik = function (a, b) {
    a.S.relayOpen = b
    return a
  }
  _.jk = function (a, b) {
    a.S.messageHandlers = b
    return a
  }
  _.kk = function (a, b) {
    a.S.messageHandlersFilter = b
    return a
  }
  _.fk.prototype.Xn = _.ja(17)
  _.fk.prototype.getContext = function () {
    return this.S.context
  }
  _.fk.prototype.Mc = function () {
    return this.S.openerIframe
  }
  _.fk.prototype.dl = function () {
    this.S.attributes = this.S.attributes || {}
    return new _.ck(this.S.attributes)
  }
  _.lk = function (a) {
    a.S.connectWithQueryParams = !0
    return a
  }

  _.dl = function (a) {
    return new _.Ik(a)
  }

  var Vl, Yl, $l, dm, em, jm
  _.fk.prototype.Xn = _.Sc(17, function (a) {
    this.S.apis = a
    return this
  })
  _.ck.prototype.tl = _.Sc(14, function () {
    return this.S.style
  })
  _.fk.prototype.tl = _.Sc(13, function () {
    return this.S.style
  })
  Vl = function (a, b) {
    a.S.onload = b
  }
  _.Wl = function (a) {
    return a.S.rpctoken
  }
  _.Xl = function (a, b) {
    a.S.onClose = b
    return a
  }
  Yl = function (a, b) {
    a.S.controllerData = b
  }
  _.Zl = function (a) {
    a.S.waitForOnload = !0
    return a
  }
  $l = function (a) {
    return (a = a.S.timeout) ? a : null
  }
  _.am = function (a, b, c) {
    if (a) {
      _.pj(_.nj(a), 'arrayForEach was called with a non array value')
      for (var d = 0; d < a.length; d++) b.call(c, a[d], d)
    }
  }
  _.bm = function (a, b, c) {
    if (a)
      if (_.nj(a)) _.am(a, b, c)
      else {
        _.pj(
          'object' === typeof a,
          'objectForEach was called with a non object value'
        )
        c = c || a
        for (var d in a) _.ne(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
      }
  }
  _.fm = function (a) {
    this.S = a || {}
  }
  _.fm.prototype.value = function () {
    return this.S
  }
  _.fm.prototype.getIframe = function () {
    return this.S.iframe
  }
  _.gm = function (a, b) {
    a.S.role = b
    return a
  }
  _.fm.prototype.aj = function (a) {
    this.S.setRpcReady = a
    return this
  }
  _.hm = function (a) {
    return a.S.setRpcReady
  }
  _.fm.prototype.zk = function (a) {
    this.S.rpctoken = a
    return this
  }
  _.im = function (a) {
    a.S.selfConnect = !0
    return a
  }
  jm = function (a) {
    this.S = a || {}
  }
  jm.prototype.value = function () {
    return this.S
  }
  var km = function (a) {
    var b = new jm()
    b.S.role = a
    return b
  }
  jm.prototype.gH = function () {
    return this.S.role
  }
  jm.prototype.mc = function (a) {
    this.S.handler = a
    return this
  }
  jm.prototype.rb = function () {
    return this.S.handler
  }
  var lm = function (a, b) {
    a.S.filter = b
    return a
  }
  jm.prototype.Xn = function (a) {
    this.S.apis = a
    return this
  }
  var nm = function (a) {
      this.resolve = this.reject = null
      this.promise = _.dl(
        (0, _.Q)(function (b, c) {
          this.resolve = b
          this.reject = c
        }, this)
      )
      a && (this.promise = mm(this.promise, a))
    },
    mm = function (a, b) {
      return a.then(function (c) {
        try {
          b(c)
        } catch (d) {}
        return c
      })
    }
  var om, pm
  om = { height: !0, width: !0 }
  pm = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i
  _.qm = function (a) {
    'number' === typeof a && (a = String(a) + 'px')
    return a
  }
  _.rm = function (a) {
    this.S = a || {}
  }
  _.li(_.rm, _.fk)
  var sm = function (a, b) {
    a.S.frameName = b
    return a
  }
  _.rm.prototype.Ac = function () {
    return this.S.frameName
  }
  var tm = function (a, b) {
    a.S.rpcAddr = b
    return a
  }
  _.rm.prototype.vf = function () {
    return this.S.rpcAddr
  }
  var um = function (a, b) {
    a.S.retAddr = b
    return a
  }
  _.h = _.rm.prototype
  _.h.Lg = function () {
    return this.S.retAddr
  }
  _.h.Sh = function (a) {
    this.S.origin = a
    return this
  }
  _.h.getOrigin = function () {
    return this.S.origin
  }
  _.h.aj = function (a) {
    this.S.setRpcReady = a
    return this
  }
  _.h.Zn = function (a) {
    this.S.context = a
  }
  var vm = function (a, b) {
    a.S._rpcReadyFn = b
  }
  _.rm.prototype.Ka = function () {
    return this.S.iframeEl
  }
  var zm
  _.wm = _.me()
  _.xm = _.me()
  _.ym = function (a) {
    return _.wm[a]
  }
  zm = function (a, b) {
    _.qe.load('gapi.iframes.style.' + a, b)
  }
  _.Bm = function (a) {
    a = a || {}
    this.Nb = !1
    this.XJ = _.me()
    this.lf = _.me()
    this.$e = a._window || _.he
    this.Yc = this.$e.location.href
    this.YJ = (this.pB = Am(this.Yc, 'parent')) ? Am(this.Yc, 'pfname') : ''
    this.Ca = this.pB ? Am(this.Yc, '_gfid') || Am(this.Yc, 'id') : ''
    this.Mj = _.Rj(this.Ca, this.YJ)
    this.vd = _.pg(this.Yc)
    if (this.Ca) {
      var b = new _.rm()
      tm(b, a._parentRpcAddr || '..')
      um(b, a._parentRetAddr || this.Ca)
      b.Sh(_.pg(this.pB || this.Yc))
      sm(b, this.YJ)
      this.Za = this.wj(b.value())
    } else this.Za = null
  }
  _.h = _.Bm.prototype
  _.h.xn = _.ja(11)
  _.h.Da = function () {
    if (!this.Nb) {
      for (
        var a = _.Da(Object.values(this.lf)), b = a.next();
        !b.done;
        b = a.next()
      )
        b.value.Da()
      this.Nb = !0
    }
  }
  _.h.Ac = function () {
    return this.Mj
  }
  _.h.getOrigin = function () {
    return this.vd
  }
  _.h.wb = function () {
    return this.$e
  }
  _.h.tb = function () {
    return this.$e.document
  }
  _.h.bw = _.ja(18)
  _.h.Zy = function (a) {
    return this.XJ[a]
  }
  _.h.wj = function (a) {
    _.pj(!this.Nb, 'Cannot attach iframe in disposed context')
    a = new _.rm(a)
    a.vf() || tm(a, a.ma())
    a.Lg() || um(a, '..')
    a.getOrigin() || a.Sh(_.pg(a.getUrl()))
    a.Ac() || sm(a, _.Rj(a.ma(), this.Mj))
    var b = a.Ac()
    if (this.lf[b]) return this.lf[b]
    var c = a.vf(),
      d = c
    a.getOrigin() && (d = c + '|' + a.getOrigin())
    var e = a.Lg(),
      f = _.Wl(a)
    f ||
      ((f =
        ((f = a.Ka()) && (f.getAttribute('data-postorigin') || f.src)) ||
        a.getUrl()),
      (f = _.se(f, 'rpctoken')))
    vm(a, _.Tl(d, e, f, a.S._popupWindow))
    d = ((window.gadgets || {}).rpc || {}).setAuthToken
    f && d && d(c, f)
    var g = new _.Cm(this, c, b, a),
      k = a.S.messageHandlersFilter
    _.bm(a.S.messageHandlers, function (l, m) {
      g.register(m, l, k)
    })
    _.hm(a) && g.aj()
    _.Dm(g, '_g_rpcReady')
    return g
  }
  _.h.TB = function (a) {
    sm(a, null)
    var b = a.ma()
    !b ||
      (Em.test(b) && !this.wb().document.getElementById(b)) ||
      (_.Bf('Ignoring requested iframe ID - ' + b), a.Ee(null))
  }
  var Am = function (a, b) {
    var c = _.se(a, b)
    c || (c = _.wf(_.se(a, 'jcp', ''))[b])
    return c || ''
  }
  _.Bm.prototype.Ih = function (a) {
    _.pj(!this.Nb, 'Cannot open iframe in disposed context')
    var b = new _.rm(a)
    Fm(this, b)
    var c = b.Ac()
    if (c && this.lf[c]) return this.lf[c]
    this.TB(b)
    c = b.getUrl()
    _.pj(c, 'No url for new iframe')
    var d = b.S.queryParams || {}
    d.usegapi = '1'
    _.hk(b, d)
    d = this.KH && this.KH(c, b)
    d ||
      ((d = b.S.where),
      _.pj(!!d, 'No location for new iframe'),
      (c = _.bk(c, d, a)),
      (b.S.iframeEl = c),
      (d = c.getAttribute('id')))
    tm(b, d).Ee(d)
    b.Sh(_.pg(b.S.eurl || ''))
    this.$I && this.$I(b, b.Ka())
    c = this.wj(a)
    c.CC && c.CC(c, a)
    ;(a = b.S.onCreate) && a(c)
    b.S.disableRelayOpen || c.Io('_open')
    return c
  }
  var Gm = function (a, b, c) {
      var d = b.S.canvasUrl
      if (!d) return c
      _.pj(
        !b.S.allowPost && !b.S.forcePost,
        'Post is not supported when using canvas url'
      )
      var e = b.getUrl()
      _.pj(
        e && _.pg(e) === a.vd && _.pg(d) === a.vd,
        'Wrong origin for canvas or hidden url ' + d
      )
      b.setUrl(d)
      _.Zl(b)
      b.S.canvasUrl = null
      return function (f) {
        var g = f.wb(),
          k = g.location.hash
        k = _.ak(e) + (/#/.test(e) ? k.replace(/^#/, '&') : k)
        g.location.replace(k)
        c && c(f)
      }
    },
    Hm = function (a, b, c) {
      var d = b.S.relayOpen
      if (d) {
        var e = a.Za
        d instanceof _.Cm
          ? ((e = d), _.ik(b, 0))
          : 0 < Number(d) && _.ik(b, Number(d) - 1)
        if (e) {
          _.pj(!!e.QJ, 'Relaying iframe open is disabled')
          if ((d = b.tl())) if ((d = _.xm[d])) b.Zn(a), d(b.value()), b.Zn(null)
          b.S.openerIframe = null
          c.resolve(e.QJ(b))
          return !0
        }
      }
      return !1
    },
    Im = function (a, b, c) {
      var d = b.tl()
      if (d)
        if (
          (_.pj(!!_.ym, 'Defer style is disabled, when requesting style ' + d),
          _.wm[d])
        )
          Fm(a, b)
        else
          return (
            zm(d, function () {
              _.pj(!!_.wm[d], 'Fail to load style - ' + d)
              c.resolve(a.open(b.value()))
            }),
            !0
          )
      return !1
    }
  _.Bm.prototype.open = function (a, b) {
    _.pj(!this.Nb, 'Cannot open iframe in disposed context')
    var c = new _.rm(a)
    b = Gm(this, c, b)
    var d = new nm(b)
    ;(b = c.getUrl()) && c.setUrl(_.ak(b))
    if (Hm(this, c, d) || Im(this, c, d) || Hm(this, c, d)) return d.promise
    if (null != $l(c)) {
      var e = setTimeout(function () {
          g.Ka().src = 'about:blank'
          d.reject({
            timeout: 'Exceeded time limit of :' + $l(c) + 'milliseconds',
          })
        }, $l(c)),
        f = d.resolve
      d.resolve = function (k) {
        clearTimeout(e)
        f(k)
      }
    }
    c.S.waitForOnload &&
      Vl(c.dl(), function () {
        d.resolve(g)
      })
    var g = this.Ih(a)
    c.S.waitForOnload || d.resolve(g)
    return d.promise
  }
  _.Bm.prototype.aH = _.ja(19)
  var Jm = function (a, b) {
    var c = a.Za,
      d = !0
    b.filter && (d = b.filter.call(b.yf, b.params))
    return _.Mk(d).then(function (e) {
      return e && c
        ? (b.WJ && b.WJ.call(a, b.params),
          (e = b.sender ? b.sender(b.params) : _.Dm(c, b.message, b.params)),
          b.t_
            ? e.then(function () {
                return !0
              })
            : !0)
        : !1
    })
  }
  _.h = _.Bm.prototype
  _.h.Kx = function (a, b, c) {
    a = Jm(this, {
      sender: function (d) {
        var e = _.cm.Za
        _.bm(_.cm.lf, function (f) {
          f !== e && _.Dm(f, '_g_wasClosed', d)
        })
        return _.Dm(e, '_g_closeMe', d)
      },
      message: '_g_closeMe',
      params: a,
      yf: c,
      filter: this.Zy('onCloseSelfFilter'),
    })
    b = new nm(b)
    b.resolve(a)
    return b.promise
  }
  _.h.QB = function (a, b, c) {
    a = a || {}
    b = new nm(b)
    b.resolve(
      Jm(this, {
        message: '_g_restyleMe',
        params: a,
        yf: c,
        filter: this.Zy('onRestyleSelfFilter'),
        t_: !0,
        WJ: this.sM,
      })
    )
    return b.promise
  }
  _.h.sM = function (a) {
    'auto' === a.height && (a.height = _.fl())
  }
  _.h.dL = _.ja(20)
  _.h.zL = _.ja(21)
  var Fm = function (a, b) {
    var c = b.tl()
    if (c) {
      b.Ge(null)
      var d = _.wm[c]
      _.pj(d, 'No such style: ' + c)
      b.Zn(a)
      d(b.value())
      b.Zn(null)
    }
  }
  _.Bm.prototype.ready = function (a, b, c, d) {
    var e = b || {},
      f = this.Za
    this.tj(
      function (k) {
        _.bm(
          e,
          function (l, m) {
            k.register(m, l, d)
          },
          this
        )
        k !== f && k.send('_ready', g, void 0, d)
      },
      void 0,
      d
    )
    var g = a || {}
    g.height = g.height || 'auto'
    this.sM(g)
    f && f.send('_ready', g, c, _.Km)
  }
  _.Bm.prototype.Nx = _.ja(22)
  var Lm = function (a) {
    a.Px || ((a.Px = _.me()), (a.aB = _.me()))
  }
  _.Bm.prototype.$w = function (a, b, c, d) {
    Lm(this)
    'object' === typeof a
      ? ((b = new jm(a)), (c = b.gH() || ''))
      : ((b = lm(km(a).mc(b).Xn(c), d)), (c = a))
    d = this.Px[c] || []
    a = !1
    for (var e = 0; e < d.length && !a; e++)
      Mm(this.lf[d[e].yf.Ac()], d[e].data, [b]), (a = b.S.runOnce)
    c = _.le(this.aB, c, [])
    a || b.S.dontWait || c.push(b)
  }
  _.Bm.prototype.uK = _.ja(23)
  var Mm = function (a, b, c) {
    c = c || []
    for (var d = 0; d < c.length; d++) {
      var e = c[d]
      if (e && a) {
        var f = e.S.filter || _.Nm
        if (a && f(a)) {
          f = e.S.apis || []
          for (var g = 0; g < f.length; g++) a.Io(f[g])
          e.rb() && e.rb()(a, b)
          e.S.runOnce && (c.splice(d, 1), --d)
        }
      }
    }
  }
  _.Bm.prototype.tj = function (a, b, c) {
    var d = this.$w
    a = lm(km('_opener').mc(a).Xn(b), c)
    a.S.runOnce = !0
    d.call(this, a.value())
  }
  _.Bm.prototype.$I = function (a, b) {
    var c = a.S.controller
    if (c) {
      _.pj(
        c.vd === a.getOrigin(),
        'Wrong controller origin ' + this.vd + ' !== ' + a.getOrigin()
      )
      var d = a.vf()
      tm(a, c.vf())
      um(a, c.Lg())
      var e = new _.rm()
      Yl(tm(e, d), a.S.controllerData)
      _.xe(b, 'load', function () {
        c.send('_g_control', e.value())
      })
    }
  }
  var Om = function (a, b, c) {
    a = a.wb()
    var d = a.document,
      e = c.S.reuseWindow
    if (e) {
      var f = c.ma()
      if (!f) throw Error('D')
    } else f = _.Qj(d, c)
    var g = f,
      k = c.S.rpcRelayUrl
    if (k) {
      k = _.Zj(k)
      g = c.S.fragmentParams || {}
      g.rly = f
      c.S.fragmentParams = g
      g = c.S.where || d.body
      _.pj(!!g, 'Cannot open window in a page with no body')
      var l = {}
      l.src = k
      l.style = 'display:none;'
      l.id = f
      l.name = f
      _.Uj(d, g, l, f)
      g = f + '_relay'
    }
    b = _.ak(b)
    var m = _.Sj(d, b, f, c.value())
    c.S.eurl = m
    b = c.S.openAsWindow
    'string' !== typeof b && (b = void 0)
    c = window.navigator.userAgent || ''
    ;/Trident|MSIE/i.test(c) &&
      /#/.test(c) &&
      (m =
        'javascript:window.location.replace(' +
        _.he.JSON.stringify(m).replace(/#/g, '\\x23') +
        ')')
    if (e) {
      var n = e
      setTimeout(function () {
        n.location.replace(m)
      })
    } else n = _.Ed(m, a, g, b)
    return { id: f, IM: n }
  }
  _.Bm.prototype.KH = function (a, b) {
    if (b.S.openAsWindow) {
      a = Om(this, a, b)
      var c = a.id
      _.pj(!!a.IM, 'Open popup window failed')
      b.S._popupWindow = a.IM
    }
    return c
  }
  _.Cm = function (a, b, c, d) {
    this.Nb = !1
    this.vi = a
    this.SB = b
    this.Mj = c
    this.Ba = d
    this.FK = this.Ba.Lg()
    this.vd = this.Ba.getOrigin()
    this.EU = this.Ba.Ka()
    this.VL = this.Ba.S.where
    this.Ln = []
    this.Io('_default')
    a = this.Ba.S.apis || []
    for (b = 0; b < a.length; b++) this.Io(a[b])
    this.vi.lf[c] = this
  }
  _.h = _.Cm.prototype
  _.h.xn = _.ja(10)
  _.h.Da = function () {
    if (!this.Nb) {
      for (var a = 0; a < this.Ln.length; a++) this.unregister(this.Ln[a])
      delete _.cm.lf[this.Ac()]
      this.Nb = !0
    }
  }
  _.h.getContext = function () {
    return this.vi
  }
  _.h.getOptions = function () {
    return this.Ba
  }
  _.h.vf = function () {
    return this.SB
  }
  _.h.Lg = function () {
    return this.FK
  }
  _.h.Ac = function () {
    return this.Mj
  }
  _.h.Ka = function () {
    return this.EU
  }
  _.h.Ab = function () {
    return this.VL
  }
  _.h.If = function (a) {
    this.VL = a
  }
  _.h.aj = function () {
    ;(0, this.Ba.S._rpcReadyFn)()
  }
  _.h.wL = function (a, b) {
    this.Ba.value()[a] = b
  }
  _.h.Tt = _.ja(24)
  _.h.jc = function () {
    return this.Ba.value()
  }
  _.h.ma = function () {
    return this.Ba.ma()
  }
  _.h.getOrigin = function () {
    return this.vd
  }
  _.h.register = function (a, b, c) {
    _.pj(!this.Nb, 'Cannot register handler on disposed iframe ' + a)
    _.pj((c || _.Nm)(this), 'Rejecting untrusted message ' + a)
    c = this.Mj + ':' + this.vi.Ac() + ':' + a
    1 == _.le(dm, c, []).push(b) &&
      (this.Ln.push(a), _.Il(c, Pm(c, this, '_g_wasClosed' === a)))
  }
  _.h.unregister = function (a, b) {
    var c = this.Mj + ':' + this.vi.Ac() + ':' + a,
      d = dm[c]
    d &&
      (b
        ? ((b = _.oj.call(d, b)), 0 <= b && d.splice(b, 1))
        : d.splice(0, d.length),
      0 == d.length &&
        ((b = _.oj.call(this.Ln, a)), 0 <= b && this.Ln.splice(b, 1), _.Jl(c)))
  }
  _.h.yS = function () {
    return this.Ln
  }
  _.h.Io = function (a) {
    this.ix = this.ix || []
    if (!(0 <= _.oj.call(this.ix, a))) {
      this.ix.push(a)
      a = em[a] || { map: {} }
      for (var b in a.map)
        _.ne(a.map, b) && this.register(b, a.map[b], a.filter)
    }
  }
  _.h.wb = function () {
    if (!_.Nm(this)) return null
    var a = this.Ba.S._popupWindow
    if (a) return a
    var b = this.SB.split('/')
    a = this.getContext().wb()
    for (var c = 0; c < b.length && a; c++) {
      var d = b[c]
      a = '..' === d ? (a == a.parent ? a.opener : a.parent) : a.frames[d]
    }
    return a
  }
  var Qm = function (a) {
    var b = {}
    if (a)
      for (var c in a)
        _.ne(a, c) && _.ne(om, c) && pm.test(a[c]) && (b[c] = a[c])
    return b
  }
  _.h = _.Cm.prototype
  _.h.close = function (a, b) {
    return _.Dm(this, '_g_close', a, b)
  }
  _.h.Rv = _.ja(25)
  _.h.Rn = function (a, b) {
    return _.Dm(this, '_g_restyleDone', a, b)
  }
  _.h.ZP = function (a) {
    return this.getContext().Kx(a, void 0, this)
  }
  _.h.LX = function (a) {
    if (a && 'object' === typeof a) return this.getContext().QB(a, void 0, this)
  }
  _.h.MX = function (a) {
    var b = this.Ba.S.onRestyle
    b && b.call(this, a, this)
    a = a && 'object' === typeof a ? Qm(a) : {}
    ;(b = this.Ka()) &&
      a &&
      'object' === typeof a &&
      (_.ne(a, 'height') && (a.height = _.qm(a.height)),
      _.ne(a, 'width') && (a.width = _.qm(a.width)),
      _.oe(a, b.style))
  }
  _.h.$P = function (a) {
    var b = this.Ba.S.onClose
    b && b.call(this, a, this)
    ;(this.iF && this.iF()) ||
      ((b = this.Ka()) && b.parentNode && b.parentNode.removeChild(b))
    if ((b = this.Ba.S.controller)) {
      var c = {}
      c.frameName = this.Ac()
      _.Dm(b, '_g_disposeControl', c)
    }
    Rm(this.Mj + ':' + this.vi.Ac() + ':_g_wasClosed', a, this)
  }
  _.h.qK = _.ja(26)
  _.h.Ul = function (a, b) {
    this.register('_g_wasClosed', a, b)
  }
  _.h.w_ = function () {
    delete this.getContext().lf[this.Ac()]
    this.getContext()
      .wb()
      .setTimeout(
        (0, _.Q)(function () {
          this.Da()
        }, this),
        0
      )
  }
  _.h.send = function (a, b, c, d) {
    _.pj(!this.Nb, 'Cannot send message to disposed iframe - ' + a)
    _.pj((d || _.Nm)(this), 'Wrong target for message ' + a)
    c = new nm(c)
    _.Ml(this.SB, this.vi.Ac() + ':' + this.Mj + ':' + a, c.resolve, b)
    return c.promise
  }
  _.Dm = function (a, b, c, d) {
    return a.send(b, c, d, _.Km)
  }
  _.Cm.prototype.RW = function (a) {
    return a
  }
  _.Cm.prototype.ping = function (a, b) {
    return _.Dm(this, '_g_ping', b, a)
  }
  var Em, Pm, Rm, Um
  Em = /^[\w\.\-]*$/
  _.Nm = function (a) {
    return a.vd === a.getContext().getOrigin()
  }
  _.Km = function () {
    return !0
  }
  Pm = function (a, b, c) {
    return function (d) {
      if (!b.Nb) {
        var e = this.origin,
          f = b.getOrigin()
        _.pj(e === f, 'Wrong origin ' + e + ' != ' + f)
        e = this.callback
        d = Rm(a, d, b)
        !c && 0 < d.length && _.Qk(d).then(e)
      }
    }
  }
  Rm = function (a, b, c) {
    a = dm[a]
    if (!a) return []
    for (var d = [], e = 0; e < a.length; e++) d.push(_.Mk(a[e].call(c, b, c)))
    return d
  }
  _.Sm = function (a, b, c) {
    _.pj('_default' != a, 'Cannot update default api')
    em[a] = { map: b, filter: c }
  }
  _.Tm = function (a, b, c) {
    _.pj('_default' != a, 'Cannot update default api')
    _.le(em, a, { map: {}, filter: _.Nm }).map[b] = c
  }
  Um = function (a, b) {
    _.le(em, '_default', { map: {}, filter: _.Km }).map[a] = b
    _.bm(_.cm.lf, function (c) {
      c.register(a, b, _.Km)
    })
  }
  _.Vm = function () {
    return _.cm
  }
  dm = _.me()
  em = _.me()
  _.cm = new _.Bm()
  Um('_g_rpcReady', _.Cm.prototype.aj)
  Um('_g_discover', _.Cm.prototype.yS)
  Um('_g_ping', _.Cm.prototype.RW)
  Um('_g_close', _.Cm.prototype.ZP)
  Um('_g_closeMe', _.Cm.prototype.$P)
  Um('_g_restyle', _.Cm.prototype.LX)
  Um('_g_restyleMe', _.Cm.prototype.MX)
  Um('_g_wasClosed', _.Cm.prototype.w_)
  _.h = _.Cm.prototype
  _.h.bQ = function (a) {
    var b = new _.rm(a)
    a = new _.fm(b.value())
    if (a.S.selfConnect) var c = this
    else
      (_.pj(
        Wm.test(b.getOrigin()),
        'Illegal origin for connected iframe - ' + b.getOrigin()
      ),
      (c = this.getContext().lf[b.Ac()]),
      c)
        ? _.hm(b) && (c.aj(), _.Dm(c, '_g_rpcReady'))
        : ((b = sm(um(tm(new _.rm(), b.vf()), b.Lg()).Sh(b.getOrigin()), b.Ac())
            .aj(_.hm(b))
            .zk(_.Wl(b))),
          (c = this.getContext().wj(b.value())))
    b = this.getContext()
    var d = a.S.role
    a = a.S.data
    Lm(b)
    d = d || ''
    _.le(b.Px, d, []).push({ yf: c, data: a })
    Mm(c, a, b.aB[d])
  }
  _.h.CC = function (a, b) {
    new _.rm(b).S._relayedDepth ||
      ((b = {}), _.im(_.gm(new _.fm(b), '_opener')), _.Dm(a, '_g_connect', b))
  }
  _.h.QJ = function (a) {
    var b = this,
      c = a.S.messageHandlers,
      d = a.S.messageHandlersFilter,
      e = a.S.onClose
    _.Xl(_.kk(_.jk(a, null), null), null)
    return _.Dm(this, '_g_open', a.value()).then(function (f) {
      var g = new _.rm(f[0]),
        k = g.Ac()
      f = new _.rm()
      var l = b.Lg(),
        m = g.Lg()
      um(tm(f, b.vf() + '/' + g.vf()), m + '/' + l)
      sm(f, k)
      f.Sh(g.getOrigin())
      f.Xn(g.S.apis)
      f.zk(_.Wl(a))
      _.jk(f, c)
      _.kk(f, d)
      _.Xl(f, e)
      ;(g = b.getContext().lf[k]) || (g = b.getContext().wj(f.value()))
      return g
    })
  }
  _.h.TB = function (a) {
    var b = a.getUrl()
    _.pj(!b || _.Ej.test(b), 'Illegal url for new iframe - ' + b)
    var c = a.dl().value()
    b = {}
    for (var d in c) _.ne(c, d) && _.ne(Xm, d) && (b[d] = c[d])
    _.ne(c, 'style') &&
      ((d = c.style), 'object' === typeof d && (b.style = Qm(d)))
    a.value().attributes = b
  }
  _.h.EW = function (a) {
    a = new _.rm(a)
    this.TB(a)
    var b = a.S._relayedDepth || 0
    a.S._relayedDepth = b + 1
    a.S.openerIframe = this
    var c = _.Wl(a)
    a.zk(null)
    return this.getContext()
      .open(a.value())
      .then(
        (0, _.Q)(function (d) {
          var e = new _.rm(d.jc()).S.apis,
            f = new _.rm()
          _.Ym(d, this, f)
          0 == b && _.gm(new _.fm(f.value()), '_opener')
          f.aj(!0)
          f.zk(c)
          _.Dm(d, '_g_connect', f.value())
          f = new _.rm()
          sm(um(tm(f, d.vf()), d.FK), d.Ac())
            .Sh(d.getOrigin())
            .Xn(e)
          return f.value()
        }, this)
      )
  }
  _.h.KX = function (a) {
    this.getContext().tj(
      function (b) {
        b.send('_g_wasRestyled', a, void 0, _.Km)
      },
      null,
      _.Km
    )
  }
  var Wm, Xm, Zm
  Wm = /^https?:\/\/[^\/%\\?#\s]+$/i
  Xm = {
    longdesc: !0,
    name: !0,
    src: !0,
    frameborder: !0,
    marginwidth: !0,
    marginheight: !0,
    scrolling: !0,
    align: !0,
    height: !0,
    width: !0,
    id: !0,
    class: !0,
    title: !0,
    tabindex: !0,
    hspace: !0,
    vspace: !0,
    allowtransparency: !0,
  }
  _.Ym = function (a, b, c) {
    var d = a.vf(),
      e = b.Lg()
    um(tm(c, a.Lg() + '/' + b.vf()), e + '/' + d)
    sm(c, b.Ac()).Sh(b.getOrigin())
  }
  Zm = _.cm.Za
  Zm && Zm.register('_g_restyleDone', _.Cm.prototype.KX, _.Km)
  Um('_g_connect', _.Cm.prototype.bQ)
  var $m = {}
  $m._g_open = _.Cm.prototype.EW
  _.Sm('_open', $m, _.Km)
  var bn = function (a, b) {
      if (_.wc && _.ch && a) {
        a.focus()
        var c = 0,
          d = null
        d = a.setInterval(function () {
          b.closed || 5 == c ? (a.clearInterval(d), an(b)) : (b.close(), c++)
        }, 150)
      } else b.close(), an(b)
    },
    an = function (a) {
      a.closed ||
        (a.document &&
          a.document.body &&
          _.ge(a.document.body, 'Please close this window.'))
    }
  _.Cm.prototype.dQ = function (a) {
    a = a && 'object' === typeof a ? a : {}
    for (
      var b = a.rpcAddr,
        c = (this.vf() + '/' + b).split('/'),
        d = this.getContext().wb(),
        e;
      (e = c.shift()) && d;

    )
      d = '..' == e ? d.parent : d.frames[e]
    _.pj(!!d, 'Bad rpc address ' + b)
    a._window = d
    a._parentRpcAddr = this.vf()
    a._parentRetAddr = this.Lg()
    b = new _.Bm(a)
    this.dW && this.dW(b, a.controllerData)
    this.Sx = this.Sx || []
    this.Sx.push(b, a.controllerData)
  }
  _.Cm.prototype.sQ = function () {
    var a = a || {}
    a = a.frameName
    for (var b = this.Sx || [], c = 0; c < b.length; c++)
      if (b[c].Ac() === a) {
        a = b.splice(c, 1)[0]
        a.Da()
        this.hW && this.hW(a)
        return
      }
    _.pj(!1, 'Unknown contolled iframe to dispose - ' + a)
  }
  _.Cm.prototype.iF = function () {
    var a = this.getOptions().S._popupWindow
    if (a) {
      var b = this.getContext().wb().document.getElementById(this.ma())
      b && b.parentNode && b.parentNode.removeChild(b)
      bn(this.getContext().wb(), a)
    }
    return !!a
  }
  _.Tm('control', '_g_control', _.Cm.prototype.dQ)
  _.Tm('control', '_g_disposeControl', _.Cm.prototype.sQ)
  _.Tm('gapi.load', '_g_gapi.load', function (a) {
    return new _.Ik(function (b) {
      _.qe.load((a && 'object' === typeof a && a.features) || '', b)
    })
  })

  _.Cm.prototype.Rv = _.Sc(25, function (a, b) {
    return _.Dm(this, '_g_restyle', a, b)
  })
  _.Cm.prototype.Tt = _.Sc(24, function (a) {
    return this.Ba.value()[a]
  })
  _.cn = function (a) {
    for (var b = _.me(), c = 0; c < a.length; c++) b[a[c]] = !0
    return function (d) {
      return !!b[d.vd]
    }
  }

  _.ng = (window.gapi && window.gapi.util) || {}

  _.ng = _.ng = {}
  _.ng.getOrigin = function (a) {
    return _.pg(a)
  }

  _.Ty = function (a) {
    if (0 !== a.indexOf('GCSC')) return null
    var b = { uA: !1 }
    a = a.substr(4)
    if (!a) return b
    var c = a.charAt(0)
    a = a.substr(1)
    var d = a.lastIndexOf('_')
    if (-1 == d) return b
    var e = _.Ry(a.substr(d + 1))
    if (null == e) return b
    a = a.substring(0, d)
    if ('_' !== a.charAt(0)) return b
    d = 'E' === c && e.xe
    return (!d && ('U' !== c || e.xe)) || (d && !_.Sy)
      ? b
      : { uA: !0, xe: d, WP: a.substr(1), domain: e.domain, jh: e.jh }
  }
  _.Uy = function (a, b) {
    this.sd = a
    a = b || {}
    this.KV = Number(a.maxAge) || 0
    this.vc = a.domain
    this.qk = a.path
    this.dY = !!a.secure
  }
  _.Uy.prototype.read = function () {
    for (
      var a = this.sd + '=', b = document.cookie.split(/;\s*/), c = 0;
      c < b.length;
      ++c
    ) {
      var d = b[c]
      if (0 == d.indexOf(a)) return d.substr(a.length)
    }
  }
  _.Uy.prototype.write = function (a, b) {
    if (!Vy.test(this.sd)) throw 'Invalid cookie name'
    if (!Wy.test(a)) throw 'Invalid cookie value'
    a = this.sd + '=' + a
    this.vc && (a += ';domain=' + this.vc)
    this.qk && (a += ';path=' + this.qk)
    b = 'number' === typeof b ? b : this.KV
    if (0 <= b) {
      var c = new Date()
      c.setSeconds(c.getSeconds() + b)
      a += ';expires=' + c.toUTCString()
    }
    this.dY && (a += ';secure')
    document.cookie = a
    return !0
  }
  _.Uy.prototype.clear = function () {
    this.write('', 0)
  }
  var Wy = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
    Vy = /^[A-Z_][A-Z0-9_]{0,63}$/
  _.Uy.iterate = function (a) {
    for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
      var d = b[c].split('='),
        e = d.shift()
      a(e, d.join('='))
    }
  }
  _.Xy = function (a) {
    this.Fh = a
  }
  _.Xy.prototype.read = function () {
    if (Yy.hasOwnProperty(this.Fh)) return Yy[this.Fh]
  }
  _.Xy.prototype.write = function (a) {
    Yy[this.Fh] = a
    return !0
  }
  _.Xy.prototype.clear = function () {
    delete Yy[this.Fh]
  }
  var Yy = {}
  _.Xy.iterate = function (a) {
    for (var b in Yy) Yy.hasOwnProperty(b) && a(b, Yy[b])
  }
  var Zy = function () {
      this.ee = null
      this.key = function () {
        return null
      }
      this.getItem = function () {
        return this.ee
      }
      this.setItem = function (a, b) {
        this.ee = b
        this.length = 1
      }
      this.removeItem = function () {
        this.clear()
      }
      this.clear = function () {
        this.ee = null
        this.length = 0
      }
      this.length = 0
    },
    $y = function (a) {
      try {
        var b = a || window.sessionStorage
        if (!b) return !1
        b.setItem(
          'gapi.sessionStorageTest',
          'gapi.sessionStorageTest' + b.length
        )
        b.removeItem('gapi.sessionStorageTest')
        return !0
      } catch (c) {
        return !1
      }
    },
    az = function (a, b) {
      this.sd = a
      this.Jf = $y(b) ? b || window.sessionStorage : new Zy()
    }
  az.prototype.read = function () {
    return this.Jf.getItem(this.sd)
  }
  az.prototype.write = function (a) {
    try {
      this.Jf.setItem(this.sd, a)
    } catch (b) {
      return !1
    }
    return !0
  }
  az.prototype.clear = function () {
    this.Jf.removeItem(this.sd)
  }
  az.iterate = function (a) {
    if ($y())
      for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
        var d = window.sessionStorage.key(b)
        a(d, window.sessionStorage[d])
      }
  }
  for (var bz = 0; 64 > bz; ++bz);
  _.Sy = 'https:' === window.location.protocol
  _.pz = _.Sy || 'http:' === window.location.protocol ? _.Uy : _.Xy
  _.Ry = function (a) {
    var b = a.substr(1),
      c = '',
      d = window.location.hostname
    if ('' !== b) {
      c = parseInt(b, 10)
      if (isNaN(c)) return null
      b = d.split('.')
      if (b.length < c - 1) return null
      b.length == c - 1 && (d = '.' + d)
    } else d = ''
    return { xe: 'S' == a.charAt(0), domain: d, jh: c }
  }
  var Az, Bz, Ez, Fz
  Az = _.me()
  Bz = _.me()
  _.Cz = _.me()
  _.Dz = _.me()
  Ez = 'state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status'.split(
    ' '
  )
  Fz = function (a) {
    this.$J = a
    this.NA = null
  }
  Fz.prototype.write = function (a) {
    var b = _.me(),
      c = _.me(),
      d = window.decodeURIComponent ? decodeURIComponent : unescape,
      e
    for (e in a)
      if (_.ne(a, e)) {
        var f = a[e]
        f = f.replace(/\+/g, ' ')
        c[e] = d(f)
        b[e] = a[e]
      }
    d = 0
    for (e = Ez.length; d < e; ++d) delete c[Ez[d]]
    a = String(a.authuser || 0)
    d = _.me()
    d[a] = c
    c = _.xf(d)
    this.$J.write(c)
    this.NA = b
  }
  Fz.prototype.read = function () {
    return this.NA
  }
  Fz.prototype.clear = function () {
    this.$J.clear()
    this.NA = _.me()
  }
  _.Gz = function (a) {
    return a ? { domain: a.domain, path: '/', secure: a.xe } : null
  }
  az.iterate(function (a) {
    var b = _.Ty(a)
    b && b.uA && (Az[a] = new Fz(new az(a)))
  })
  _.pz.iterate(function (a) {
    Az[a] && (Bz[a] = new _.pz(a, _.Gz(_.Ty(a))))
  })

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var hr, ir, kr, lr, mr, nr, or, pr, qr, tr, ur, vr, wr, Ar, Er, Fr, Gr
  _.Wq = function (a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c)
  }
  _.Xq = function (a, b, c, d) {
    return Array.prototype.splice.apply(a, _.Wq(arguments, 1))
  }
  _.Yq = function (a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
  }
  _.Zq = function (a, b) {
    this.x = void 0 !== a ? a : 0
    this.y = void 0 !== b ? b : 0
  }
  _.h = _.Zq.prototype
  _.h.clone = function () {
    return new _.Zq(this.x, this.y)
  }
  _.h.equals = function (a) {
    return a instanceof _.Zq && _.Yq(this, a)
  }
  _.h.ceil = function () {
    this.x = Math.ceil(this.x)
    this.y = Math.ceil(this.y)
    return this
  }
  _.h.floor = function () {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
    return this
  }
  _.h.round = function () {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
    return this
  }
  _.h.translate = function (a, b) {
    a instanceof _.Zq
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), 'number' === typeof b && (this.y += b))
    return this
  }
  _.h.scale = function (a, b) {
    this.x *= a
    this.y *= 'number' === typeof b ? b : a
    return this
  }
  _.$q = function (a, b) {
    this.width = a
    this.height = b
  }
  _.h = _.$q.prototype
  _.h.clone = function () {
    return new _.$q(this.width, this.height)
  }
  _.h.aspectRatio = function () {
    return this.width / this.height
  }
  _.h.isEmpty = function () {
    return !(this.width * this.height)
  }
  _.h.ceil = function () {
    this.width = Math.ceil(this.width)
    this.height = Math.ceil(this.height)
    return this
  }
  _.h.floor = function () {
    this.width = Math.floor(this.width)
    this.height = Math.floor(this.height)
    return this
  }
  _.h.round = function () {
    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    return this
  }
  _.h.scale = function (a, b) {
    this.width *= a
    this.height *= 'number' === typeof b ? b : a
    return this
  }
  _.ar = function (a) {
    return 'CSS1Compat' == a.compatMode
  }
  _.br = function (a) {
    a = a.document
    a = _.ar(a) ? a.documentElement : a.body
    return new _.$q(a.clientWidth, a.clientHeight)
  }
  _.cr = function (a) {
    return _.br(a || window)
  }
  _.dr = function (a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !_.vc && _.ar(a)
      ? a.documentElement
      : a.body || a.documentElement
  }
  _.er = function (a) {
    var b = _.dr(a)
    a = a.parentWindow || a.defaultView
    return _.rc && _.Nc('10') && a.pageYOffset != b.scrollTop
      ? new _.Zq(b.scrollLeft, b.scrollTop)
      : new _.Zq(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  }
  _.fr = function (a, b, c, d) {
    return _.Pd(a.nb, b, c, d)
  }
  _.gr = function (a) {
    a.lA = void 0
    a.kb = function () {
      return a.lA ? a.lA : (a.lA = new a())
    }
  }
  hr = function (a, b) {
    a = a.split('%s')
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s')
    _.Tc.call(this, c + a[d])
  }
  _.P(hr, _.Tc)
  hr.prototype.name = 'AssertionError'
  ir = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
  _.jr = function (a) {
    if (a instanceof _.Vb && a.constructor === _.Vb) return a.AB
    _.$a(a)
    return 'type_error:SafeStyle'
  }
  kr = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
  lr = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
  mr = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
  nr = /\/\*/
  or = function (a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d)
      if (']' == e) {
        if (b) return !1
        b = !0
      } else if ('[' == e) {
        if (!b) return !1
        b = !1
      } else if (!b && !c.test(e)) return !1
    }
    return b
  }
  pr = function (a) {
    return a.replace(lr, function (b, c, d, e) {
      var f = ''
      d = d.replace(/^(['"])(.*)\1$/, function (g, k, l) {
        f = k
        return l
      })
      b = (_.zd(d) || _.Tb).nd()
      return c + f + b + f + e
    })
  }
  qr = function (a) {
    if (a instanceof _.Sb)
      return (
        'url("' + _.ud(a).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') + '")'
      )
    if (a instanceof _.Nb) a = _.Ob(a)
    else {
      a = String(a)
      var b = a.replace(kr, '$1').replace(kr, '$1').replace(lr, 'url')
      if (mr.test(b)) {
        if ((b = !nr.test(a))) {
          for (var c = (b = !0), d = 0; d < a.length; d++) {
            var e = a.charAt(d)
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c)
          }
          b = b && c && or(a)
        }
        a = b ? pr(a) : 'zClosurez'
      } else a = 'zClosurez'
    }
    if (/[{;}]/.test(a))
      throw new hr('Value does not allow [{;}], got: %s.', [a])
    return a
  }
  _.rr = function (a) {
    var b = '',
      c
    for (c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error('g`' + c)
        var d = a[c]
        null != d &&
          ((d = Array.isArray(d) ? _.nb(d, qr).join(' ') : qr(d)),
          (b += c + ':' + d + ';'))
      }
    return b ? new _.Vb(b, _.Ub) : _.Wb
  }
  _.sr = function (a) {
    if (a instanceof _.Zb && a.constructor === _.Zb) return a.zB
    _.$a(a)
    return 'type_error:SafeStyleSheet'
  }
  tr = /^[a-zA-Z0-9-]+$/
  ur = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0,
  }
  vr = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0,
  }
  wr = function (a) {
    var b = _.Bd(_.fc),
      c = b.th(),
      d = [],
      e = function (f) {
        Array.isArray(f)
          ? _.lb(f, e)
          : ((f = _.Bd(f)),
            d.push(_.dc(f).toString()),
            (f = f.th()),
            0 == c ? (c = f) : 0 != f && c != f && (c = null))
      }
    _.lb(a, e)
    return _.ec(d.join(_.dc(b).toString()), c)
  }
  _.xr = function (a) {
    return wr(Array.prototype.slice.call(arguments))
  }
  _.yr = function (a, b, c) {
    var d = String(a)
    if (!tr.test(d)) throw Error('k')
    if (d.toUpperCase() in vr) throw Error('k')
    a = String(a)
    d = null
    var e = '<' + a,
      f = ''
    if (b)
      for (l in b)
        if (Object.prototype.hasOwnProperty.call(b, l)) {
          if (!tr.test(l)) throw Error('k')
          var g = b[l]
          if (null != g) {
            var k = l
            if (g instanceof _.Nb) g = _.Ob(g)
            else if ('style' == k.toLowerCase()) {
              if (!_.Ya(g)) throw Error('k')
              g instanceof _.Vb || (g = _.rr(g))
              g = _.jr(g)
            } else {
              if (/^on/i.test(k)) throw Error('k')
              if (k.toLowerCase() in ur)
                if (g instanceof _.pd) g = _.rd(g)
                else if (g instanceof _.Sb) g = _.ud(g)
                else if ('string' === typeof g) g = (_.zd(g) || _.Tb).nd()
                else throw Error('k')
            }
            g.Bh && (g = g.nd())
            k = k + '="' + _.nd(String(g)) + '"'
            f += ' ' + k
          }
        }
    var l = e + f
    null == c ? (c = []) : Array.isArray(c) || (c = [c])
    !0 === ir[a.toLowerCase()]
      ? (l += '>')
      : ((c = _.xr(c)),
        (l += '>' + _.dc(c).toString() + '</' + a + '>'),
        (d = c.th()))
    ;(b = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null)
    return _.ec(l, d)
  }
  _.zr = function (a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase()
    })
  }
  Ar = function (a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
      return c + d.toUpperCase()
    })
  }
  _.Br = function (a, b, c) {
    return _.Vd(document, arguments)
  }
  _.Cr = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
  }
  _.Dr = function (a) {
    var b
    if (
      _.Jd &&
      !(
        _.rc &&
        _.Nc('9') &&
        !_.Nc('10') &&
        _.D.SVGElement &&
        a instanceof _.D.SVGElement
      ) &&
      (b = a.parentElement)
    )
      return b
    b = a.parentNode
    return _.ee(b) ? b : null
  }
  Er = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }
  Fr = { IMG: ' ', BR: '\n' }
  Gr = function (a, b, c) {
    if (!(a.nodeName in Er))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
          : b.push(a.nodeValue)
      else if (a.nodeName in Fr) b.push(Fr[a.nodeName])
      else for (a = a.firstChild; a; ) Gr(a, b, c), (a = a.nextSibling)
  }
  _.Hr = function (a) {
    if (_.Id && null !== a && 'innerText' in a)
      a = a.innerText.replace(/(\r\n|\r|\n)/g, '\n')
    else {
      var b = []
      Gr(a, b, !0)
      a = b.join('')
    }
    a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
    a = a.replace(/\u200B/g, '')
    _.Id || (a = a.replace(/ +/g, ' '))
    ' ' != a && (a = a.replace(/^\s*/, ''))
    return a
  }
  _.Ir = function (a) {
    var b = []
    Gr(a, b, !1)
    return b.join('')
  }
  _.Jr = function (a, b, c, d) {
    this.top = a
    this.right = b
    this.bottom = c
    this.left = d
  }
  _.h = _.Jr.prototype
  _.h.Nc = function () {
    return this.right - this.left
  }
  _.h.getHeight = function () {
    return this.bottom - this.top
  }
  _.h.clone = function () {
    return new _.Jr(this.top, this.right, this.bottom, this.left)
  }
  _.h.contains = function (a) {
    return this && a
      ? a instanceof _.Jr
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1
  }
  _.h.expand = function (a, b, c, d) {
    _.Ya(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)))
    return this
  }
  _.h.ceil = function () {
    this.top = Math.ceil(this.top)
    this.right = Math.ceil(this.right)
    this.bottom = Math.ceil(this.bottom)
    this.left = Math.ceil(this.left)
    return this
  }
  _.h.floor = function () {
    this.top = Math.floor(this.top)
    this.right = Math.floor(this.right)
    this.bottom = Math.floor(this.bottom)
    this.left = Math.floor(this.left)
    return this
  }
  _.h.round = function () {
    this.top = Math.round(this.top)
    this.right = Math.round(this.right)
    this.bottom = Math.round(this.bottom)
    this.left = Math.round(this.left)
    return this
  }
  _.h.translate = function (a, b) {
    a instanceof _.Zq
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ((this.left += a),
        (this.right += a),
        'number' === typeof b && ((this.top += b), (this.bottom += b)))
    return this
  }
  _.h.scale = function (a, b) {
    b = 'number' === typeof b ? b : a
    this.left *= a
    this.right *= a
    this.top *= b
    this.bottom *= b
    return this
  }
  var Mr, Sr, Qr, Vr, gs, hs
  _.Lr = function (a, b, c) {
    if ('string' === typeof b) (b = _.Kr(a, b)) && (a.style[b] = c)
    else
      for (var d in b) {
        c = a
        var e = b[d],
          f = _.Kr(c, d)
        f && (c.style[f] = e)
      }
  }
  Mr = {}
  _.Kr = function (a, b) {
    var c = Mr[b]
    if (!c) {
      var d = _.zr(b)
      c = d
      void 0 === a.style[d] &&
        ((d =
          (_.vc ? 'Webkit' : _.uc ? 'Moz' : _.rc ? 'ms' : _.qc ? 'O' : null) +
          Ar(d)),
        void 0 !== a.style[d] && (c = d))
      Mr[b] = c
    }
    return c
  }
  _.Nr = function (a, b) {
    var c = _.Md(a)
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ''
      : ''
  }
  _.Or = function (a, b) {
    return a.currentStyle ? a.currentStyle[b] : null
  }
  _.Pr = function (a, b) {
    return _.Nr(a, b) || _.Or(a, b) || (a.style && a.style[b])
  }
  _.Rr = function (a, b, c) {
    if (b instanceof _.Zq) {
      var d = b.x
      b = b.y
    } else (d = b), (b = c)
    a.style.left = Qr(d, !1)
    a.style.top = Qr(b, !1)
  }
  Sr = function (a) {
    try {
      return a.getBoundingClientRect()
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 }
    }
  }
  _.Wr = function (a, b) {
    b = b || _.dr(document)
    var c = b || _.dr(document)
    var d = _.Tr(a),
      e = _.Tr(c),
      f = _.Ur(c)
    if (c == _.dr(document)) {
      var g = d.x - c.scrollLeft
      d = d.y - c.scrollTop
      _.rc && !_.Pc(10) && ((g += f.left), (d += f.top))
    } else (g = d.x - e.x - f.left), (d = d.y - e.y - f.top)
    a = Vr(a)
    f = c.clientHeight - a.height
    e = c.scrollLeft
    var k = c.scrollTop
    e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0))
    k += Math.min(d, Math.max(d - f, 0))
    c = new _.Zq(e, k)
    b.scrollLeft = c.x
    b.scrollTop = c.y
  }
  _.Tr = function (a) {
    var b = _.Md(a),
      c = new _.Zq(0, 0)
    var d = b ? _.Md(b) : document
    d = !_.rc || _.Pc(9) || _.ar(_.Nd(d).nb) ? d.documentElement : d.body
    if (a == d) return c
    a = Sr(a)
    b = _.er(_.Nd(b).nb)
    c.x = a.left + b.x
    c.y = a.top + b.y
    return c
  }
  _.Yr = function (a, b) {
    var c = new _.Zq(0, 0),
      d = _.Sd(_.Md(a))
    if (!_.oc(d, 'parent')) return c
    do {
      var e = d == b ? _.Tr(a) : _.Xr(a)
      c.x += e.x
      c.y += e.y
    } while (
      d &&
      d != b &&
      d != d.parent &&
      (a = d.frameElement) &&
      (d = d.parent)
    )
    return c
  }
  _.Xr = function (a) {
    a = Sr(a)
    return new _.Zq(a.left, a.top)
  }
  _.Zr = function (a, b, c) {
    if (b instanceof _.$q) (c = b.height), (b = b.width)
    else if (void 0 == c) throw Error('G')
    a.style.width = Qr(b, !0)
    a.style.height = Qr(c, !0)
  }
  Qr = function (a, b) {
    'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px')
    return a
  }
  _.$r = function (a) {
    var b = Vr
    if ('none' != _.Pr(a, 'display')) return b(a)
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position
    c.visibility = 'hidden'
    c.position = 'absolute'
    c.display = 'inline'
    a = b(a)
    c.display = d
    c.position = f
    c.visibility = e
    return a
  }
  Vr = function (a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = _.vc && !b && !c
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Sr(a)), new _.$q(a.right - a.left, a.bottom - a.top))
      : new _.$q(b, c)
  }
  _.as = function (a, b) {
    a.style.display = b ? '' : 'none'
  }
  _.cs = function (a) {
    var b = _.Nd(void 0),
      c = b.tb()
    if (_.rc && c.createStyleSheet)
      return (b = c.createStyleSheet()), _.bs(b, a), b
    c = _.fr(b, 'HEAD')[0]
    if (!c) {
      var d = _.fr(b, 'BODY')[0]
      c = b.ta('HEAD')
      d.parentNode.insertBefore(c, d)
    }
    d = b.ta('STYLE')
    var e = _.$c()
    e && d.setAttribute('nonce', e)
    _.bs(d, a)
    b.appendChild(c, d)
    return d
  }
  _.bs = function (a, b) {
    b = _.sr(b)
    _.rc && void 0 !== a.cssText
      ? (a.cssText = b)
      : _.D.trustedTypes
      ? _.ge(a, b)
      : (a.innerHTML = b)
  }
  _.ds = function (a) {
    return 'rtl' == _.Pr(a, 'direction')
  }
  _.es = _.uc ? 'MozUserSelect' : _.vc || _.sc ? 'WebkitUserSelect' : null
  _.fs = function (a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10)
    var c = a.style.left,
      d = a.runtimeStyle.left
    a.runtimeStyle.left = a.currentStyle.left
    a.style.left = b
    b = a.style.pixelLeft
    a.style.left = c
    a.runtimeStyle.left = d
    return +b
  }
  gs = { thin: 2, medium: 4, thick: 6 }
  hs = function (a, b) {
    if ('none' == _.Or(a, b + 'Style')) return 0
    b = _.Or(a, b + 'Width')
    return b in gs ? gs[b] : _.fs(a, b)
  }
  _.Ur = function (a) {
    if (_.rc && !_.Pc(9)) {
      var b = hs(a, 'borderLeft'),
        c = hs(a, 'borderRight'),
        d = hs(a, 'borderTop')
      a = hs(a, 'borderBottom')
      return new _.Jr(d, c, a, b)
    }
    b = _.Nr(a, 'borderLeftWidth')
    c = _.Nr(a, 'borderRightWidth')
    d = _.Nr(a, 'borderTopWidth')
    a = _.Nr(a, 'borderBottomWidth')
    return new _.Jr(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.ey = function (a, b, c) {
    if ('function' === typeof a) c && (a = (0, _.Q)(a, c))
    else if (a && 'function' == typeof a.handleEvent)
      a = (0, _.Q)(a.handleEvent, a)
    else throw Error('oa')
    return 2147483647 < Number(b) ? -1 : _.D.setTimeout(a, b || 0)
  }
  _.fy = function (a) {
    _.D.clearTimeout(a)
  }
  _.gy = function (a) {
    var b = null
    return new _.Ik(function (c, d) {
      b = _.ey(function () {
        c(void 0)
      }, a)
      ;-1 == b && d(Error('pa'))
    }).Nr(function (c) {
      _.fy(b)
      throw c
    })
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Hz = function (a) {
    this.YZ = a
  }
  _.Hz.prototype.toString = function () {
    return this.YZ
  }
  _.Iz = function (a) {
    _.xi.call(this)
    this.Fh = 1
    this.Ev = []
    this.Jv = 0
    this.Ye = []
    this.Xh = {}
    this.uP = !!a
  }
  _.P(_.Iz, _.xi)
  _.h = _.Iz.prototype
  _.h.subscribe = function (a, b, c) {
    var d = this.Xh[a]
    d || (d = this.Xh[a] = [])
    var e = this.Fh
    this.Ye[e] = a
    this.Ye[e + 1] = b
    this.Ye[e + 2] = c
    this.Fh = e + 3
    d.push(e)
    return e
  }
  _.h.Jr = _.ja(40)
  _.h.unsubscribe = function (a, b, c) {
    if ((a = this.Xh[a])) {
      var d = this.Ye
      if (
        (a = _.ki(a, function (e) {
          return d[e + 1] == b && d[e + 2] == c
        }))
      )
        return this.mj(a)
    }
    return !1
  }
  _.h.mj = function (a) {
    var b = this.Ye[a]
    if (b) {
      var c = this.Xh[b]
      0 != this.Jv
        ? (this.Ev.push(a), (this.Ye[a + 1] = _.Za))
        : (c && _.ri(c, a),
          delete this.Ye[a],
          delete this.Ye[a + 1],
          delete this.Ye[a + 2])
    }
    return !!b
  }
  _.h.Jn = function (a, b) {
    var c = this.Xh[a]
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e]
      if (this.uP)
        for (e = 0; e < c.length; e++) {
          var g = c[e]
          Jz(this.Ye[g + 1], this.Ye[g + 2], d)
        }
      else {
        this.Jv++
        try {
          for (e = 0, f = c.length; e < f; e++)
            (g = c[e]), this.Ye[g + 1].apply(this.Ye[g + 2], d)
        } finally {
          if ((this.Jv--, 0 < this.Ev.length && 0 == this.Jv))
            for (; (c = this.Ev.pop()); ) this.mj(c)
        }
      }
      return 0 != e
    }
    return !1
  }
  var Jz = function (a, b, c) {
    _.Gk(function () {
      a.apply(b, c)
    })
  }
  _.Iz.prototype.clear = function (a) {
    if (a) {
      var b = this.Xh[a]
      b && (_.lb(b, this.mj, this), delete this.Xh[a])
    } else (this.Ye.length = 0), (this.Xh = {})
  }
  _.Iz.prototype.Fb = function (a) {
    if (a) {
      var b = this.Xh[a]
      return b ? b.length : 0
    }
    a = 0
    for (b in this.Xh) a += this.Fb(b)
    return a
  }
  _.Iz.prototype.va = function () {
    _.Iz.T.va.call(this)
    this.clear()
    this.Ev.length = 0
  }
  _.Kz = function (a) {
    _.xi.call(this)
    this.Hd = new _.Iz(a)
    _.zi(this, this.Hd)
  }
  _.P(_.Kz, _.xi)
  _.h = _.Kz.prototype
  _.h.subscribe = function (a, b, c) {
    return this.Hd.subscribe(a.toString(), b, c)
  }
  _.h.Jr = _.ja(39)
  _.h.unsubscribe = function (a, b, c) {
    return this.Hd.unsubscribe(a.toString(), b, c)
  }
  _.h.mj = function (a) {
    return this.Hd.mj(a)
  }
  _.h.Jn = function (a, b) {
    return this.Hd.Jn(a.toString(), b)
  }
  _.h.clear = function (a) {
    this.Hd.clear(void 0 !== a ? a.toString() : void 0)
  }
  _.h.Fb = function (a) {
    return this.Hd.Fb(void 0 !== a ? a.toString() : void 0)
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Lz = function (a, b) {
    Array.isArray(b) || (b = [b])
    b = _.nb(b, function (c) {
      return 'string' === typeof c
        ? c
        : c.Hv + ' ' + c.duration + 's ' + c.timing + ' ' + c.delay + 's'
    })
    _.Lr(a, 'transition', b.join(','))
  }
  _.Mz = _.Gb(function () {
    if (_.rc) return _.Nc('10.0')
    var a = _.Wd('DIV'),
      b = _.vc ? '-webkit' : _.uc ? '-moz' : _.rc ? '-ms' : _.qc ? '-o' : null,
      c = { transition: 'opacity 1s linear' }
    b && (c[b + '-transition'] = 'opacity 1s linear')
    b = _.yr('div', { style: c })
    _.Cd(a, b)
    a = a.firstChild
    b = a.style[_.zr('transition')]
    return (
      '' !=
      ('undefined' !== typeof b ? b : a.style[_.Kr(a, 'transition')] || '')
    )
  })

  _.Oz = function () {
    _.Nz = 'oauth2relay' + String((2147483647 * (0, _.sg)()) | 0)
  }
  _.Pz = new _.Kz()
  _.Qz = new _.Hz('oauth')
  _.Oz()
  _.R('oauth-flow/client_id')
  var Rz = String(_.R('oauth-flow/redirectUri'))
  if (Rz) Rz.replace(/[#][\s\S]*/, '')
  else {
    var Sz = _.ng.getOrigin(window.location.href)
    _.R('oauth-flow/callbackUrl')
    encodeURIComponent(Sz)
  }
  _.ng.getOrigin(window.location.href)

  var Uz,
    Vz,
    Wz,
    Xz,
    Yz,
    Zz,
    $z,
    aA,
    bA,
    cA,
    dA,
    fA,
    gA,
    hA,
    iA,
    jA,
    kA,
    lA,
    mA,
    nA,
    oA,
    pA,
    qA,
    rA,
    sA,
    tA,
    uA,
    vA,
    wA,
    xA,
    yA,
    zA,
    AA,
    BA,
    CA,
    DA,
    EA,
    FA,
    GA,
    HA,
    IA,
    JA,
    MA,
    LA,
    NA,
    OA,
    PA,
    QA,
    RA,
    SA,
    UA,
    VA,
    XA
  _.Tz = function (a, b) {
    if (_.gh && !b) return _.D.atob(a)
    var c = ''
    _.rw(a, function (d) {
      c += String.fromCharCode(d)
    })
    return c
  }
  Uz = function (a) {
    var b = String(a('immediate') || '')
    a = String(a('prompt') || '')
    return 'true' === b || 'none' === a
  }
  Vz = function (a) {
    return _.yh('enableMultilogin') && a('cookie_policy') && !Uz(a) ? !0 : !1
  }
  Yz = function () {
    var a,
      b = null
    _.pz.iterate(function (c, d) {
      0 === c.indexOf('G_AUTHUSER_') &&
        ((c = _.Ry(c.substring(11))),
        !a || (c.xe && !a.xe) || (c.xe == a.xe && c.jh > a.jh)) &&
        ((a = c), (b = d))
    })
    return { DP: a, authuser: b }
  }
  Zz = ['.APPS.GOOGLEUSERCONTENT.COM', '@DEVELOPER.GSERVICEACCOUNT.COM']
  $z = function (a) {
    a = a.toUpperCase()
    for (var b = 0, c = Zz.length; b < c; ++b) {
      var d = a.split(Zz[b])
      2 == d.length && '' === d[1] && (a = d[0])
    }
    a = a.replace(/-/g, '_').toUpperCase()
    40 < a.length && ((b = new _.Uh()), b.Bw(a), (a = b.Cg().toUpperCase()))
    return a
  }
  aA = function (a) {
    if (!a) return []
    a = a.split('=')
    return a[1] ? a[1].split('|') : []
  }
  bA = function (a) {
    a = a.split(':')
    return {
      clientId: a[0].split('=')[1],
      wY: aA(a[1]),
      X8: aA(a[2]),
      V7: aA(a[3]),
    }
  }
  cA = function (a) {
    var b = Yz(),
      c = b.DP
    b = b.authuser
    var d = a && $z(a)
    if (null !== b) {
      var e
      _.pz.iterate(function (g, k) {
        ;(g = _.Ty(g)) &&
          g.uA &&
          ((d && g.WP != d) || (g.xe == c.xe && g.jh == c.jh && (e = k)))
      })
      if (e) {
        var f = bA(e)
        a = f && f.wY[Number(b)]
        f = f && f.clientId
        if (a) return { authuser: b, O9: a, clientId: f }
      }
    }
    return null
  }
  dA = function (a, b) {
    a = _.Qh(a)
    if (!a || (!b && a.error)) return null
    b = Math.floor(new Date().getTime() / 1e3)
    return a.expires_at && b > a.expires_at ? null : a
  }
  _.eA = function (a, b) {
    if (b) {
      var c = b
      var d = a
    } else 'string' === typeof a ? (d = a) : (c = a)
    c ? _.tw(c, d) : _.uw(d)
  }
  fA = function (a) {
    if (!a) return null
    'single_host_origin' !== a && (a = _.pg(a))
    var b = window.location.hostname,
      c = b,
      d = _.Sy
    if ('single_host_origin' !== a) {
      c = a.split('://')
      if (2 == c.length) d = 'https' === c.shift()
      else return _.Bf('WARNING invalid cookie_policy: ' + a), null
      c = c[0]
    }
    if (-1 !== c.indexOf(':')) c = b = ''
    else {
      a = '.' + c
      if (b.lastIndexOf(a) !== b.length - a.length)
        return _.Bf('Invalid cookie_policy domain: ' + c), null
      c = a
      b = c.split('.').length - 1
    }
    return { domain: c, xe: d, jh: b }
  }
  gA = function (a) {
    var b = fA(a)
    if (!b) return new _.Xy('G_USERSTATE_')
    a = ['G_USERSTATE_', _.Sy && b.xe ? 'S' : 'H', b.jh].join('')
    var c = _.Dz[a]
    c ||
      ((c = { dJ: 63072e3 }),
      _.oe(_.Gz(b), c),
      (c = new _.Uy(a, c)),
      (_.Dz[a] = c),
      (b = c.read()),
      'undefined' !== typeof b &&
        null !== b &&
        ((document.cookie =
          a + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'),
        c.write(b)))
    return c
  }
  hA = function (a) {
    var b = gA(a).read()
    a = _.me()
    if (b) {
      b = b.split(':')
      for (var c; (c = b.shift()); ) (c = c.split('=')), (a[c[0]] = c[1])
    }
    return a
  }
  iA = function (a, b, c) {
    var d = hA(b),
      e = d[a]
    d[a] = '0'
    var f = []
    _.bm(d, function (k, l) {
      f.push(l + '=' + k)
    })
    var g = f.join(':')
    b = gA(b)
    g ? b.write(g) : b.clear()
    d[a] !== e && c && c()
  }
  jA = function (a, b) {
    b = hA(b)
    return '0' == b[a] || 'X' == b[a]
  }
  kA = function (a) {
    a = fA(a.g_user_cookie_policy)
    if (!a || (a.xe && !_.Sy)) a = null
    else {
      var b = ['G_AUTHUSER_', _.Sy && a.xe ? 'S' : 'H', a.jh].join(''),
        c = _.Cz[b]
      c || ((c = new _.pz(b, _.Gz(a))), (_.Cz[b] = c))
      a = c
    }
    _.Ge('googleapis.config/sessionIndex', null)
    a.clear()
  }
  lA = function (a) {
    return Uz(function (b) {
      return a[b]
    })
  }
  mA = 0
  nA = !1
  oA = []
  pA = {}
  qA = {}
  rA = null
  sA = function (a) {
    var b = _.Nz
    return function (c) {
      if (
        this.f == b &&
        this.t == _.If.getAuthToken(this.f) &&
        this.origin == _.If.getTargetOrigin(this.f)
      )
        return a.apply(this, arguments)
    }
  }
  tA = function (a) {
    'function' === typeof a.setAttribute
      ? a.setAttribute('aria-hidden', 'true')
      : (a['aria-hidden'] = 'true')
  }
  uA = function (a) {
    if (a && !decodeURIComponent(a).startsWith('m;/_/scs/')) throw Error('sa')
  }
  vA = function (a) {
    var b = _.Me.getUrlParameters,
      c = b(a).jsh
    if (null != c) return uA(c), a
    if ((b = String(b().jsh || _.ye.h || '')))
      uA(b),
        (c = (a + '#').indexOf('#')),
        (a =
          a.substr(0, c) +
          (-1 !== a.substr(0, c).indexOf('?') ? '&' : '?') +
          'jsh=' +
          encodeURIComponent(b) +
          a.substr(c))
    return a
  }
  wA = function () {
    return !!_.R('oauth-flow/usegapi')
  }
  xA = function (a, b) {
    wA() ? rA.unregister(a) : _.If.unregister(a + ':' + b)
  }
  yA = function (a, b, c) {
    wA() ? rA.register(a, c, _.Km) : _.If.register(a + ':' + b, sA(c))
  }
  zA = function () {
    Wz.parentNode.removeChild(Wz)
  }
  AA = function (a) {
    var b = Wz
    _.Lz(b, [
      { Hv: '-webkit-transform', duration: 1, timing: 'ease', delay: 0 },
    ])
    _.Lz(b, [{ Hv: 'transform', duration: 1, timing: 'ease', delay: 0 }])
    _.ey(function () {
      b.style.webkitTransform = 'translate3d(0px,' + a + 'px,0px)'
      b.style.transform = 'translate3d(0px,' + a + 'px,0px)'
    }, 0)
  }
  BA = function () {
    var a = Xz + 88
    AA(a)
    Xz = a
  }
  CA = function () {
    var a = Xz - 88
    AA(a)
    Xz = a
  }
  DA = function (a) {
    var b = a ? BA : CA,
      c = a ? CA : BA
    a = a ? '-' : ''
    Xz = parseInt(a + 88, 10)
    Wz.style.webkitTransform = 'translate3d(0px,' + a + 88 + 'px,0px)'
    Wz.style.transform = 'translate3d(0px,' + a + 88 + 'px,0px)'
    Wz.style.display = ''
    Wz.style.visibility = 'visible'
    b()
    _.ey(c, 4e3)
    _.ey(zA, 5e3)
  }
  EA = function (a) {
    var b = _.R('oauth-flow/toast/position')
    'top' !== b && (b = 'bottom')
    var c = document.createElement('div')
    Wz = c
    c.style.cssText = 'position:fixed;left:0px;z-index:1000;width:100%;'
    _.Lr(c, 'visibility', 'hidden')
    _.Lr(c, b, '-40px')
    _.Lr(c, 'height', '128px')
    var d = c
    if ('desktop' == _.R('deviceType')) {
      d = document.createElement('div')
      d.style.cssText = 'float:left;position:relative;left:50%;'
      c.appendChild(d)
      var e = document.createElement('div')
      e.style.cssText = 'float:left;position:relative;left:-50%'
      d.appendChild(e)
      d = e
    }
    e = 'top' == b ? '-' : ''
    Xz = parseInt(e + 88, 10)
    Wz.style.webkitTransform = 'translate3d(0px,' + e + 88 + 'px,0px)'
    Wz.style.transform = 'translate3d(0px,' + e + 88 + 'px,0px)'
    e = window
    try {
      for (; e.parent != e && e.parent.document; ) e = e.parent
    } catch (f) {}
    e = e.document.body
    try {
      e.insertBefore(c, e.firstChild)
    } catch (f) {}
    _.cm.Ih({
      url: ':socialhost:/:session_prefix:_/widget/oauthflow/toast',
      queryParams: { clientId: a.client_id, idToken: a.id_token },
      where: d,
      onRestyle: function () {
        'top' === b ? DA(!0) : DA(!1)
      },
    })
  }
  FA = function (a) {
    var b = _.xn(),
      c = b && b.scope
    b = a && a.scope
    b = 'string' === typeof b ? b.split(' ') : b || []
    if (c) {
      c = c.split(' ')
      for (var d = 0; d < c.length; ++d) {
        var e = c[d]
        ;-1 == _.oj.call(b, e) && b.push(e)
      }
      0 < b.length && (a.scope = b.join(' '))
    }
    return a
  }
  GA = function (a, b) {
    var c = null
    a &&
      b &&
      ((c = b.client_id = b.client_id || a.client_id),
      (b.scope = b.scope || a.scope),
      (b.g_user_cookie_policy = a.cookie_policy),
      (b.cookie_policy = b.cookie_policy || a.cookie_policy),
      (b.response_type = b.response_type || a.response_type))
    if (b) {
      b.issued_at ||
        (b.issued_at = String(Math.floor(new Date().getTime() / 1e3)))
      var d = parseInt(b.expires_in, 10) || 86400
      b.error && (d = _.R('oauth-flow/errorMaxAge') || 86400)
      b.expires_in = String(d)
      b.expires_at ||
        (b.expires_at = String(Math.floor(new Date().getTime() / 1e3) + d))
      b._aa || b.error || null != cA(c) || !lA(a) || (b._aa = '1')
      a = b.status = {}
      a.google_logged_in = !!b.session_state
      c = a.signed_in = !!b.access_token
      a.method = c ? (b['g-oauth-window'] ? 'PROMPT' : 'AUTO') : null
    }
    return b
  }
  HA = function (a) {
    a = a && a.id_token
    if (!a || !a.split('.')[1]) return null
    a = (a.split('.')[1] + '...').replace(/^((....)+)\.?\.?\.?$/, '$1')
    a = _.wf(_.Tz(a, !0))
    if (!1 === a) throw Error('ta')
    return a
  }
  IA = function (a) {
    return (a = HA(a)) ? a.sub : null
  }
  JA = function (a) {
    a && oA.push(a)
    a = _.Nz
    var b = document.getElementById(a),
      c = new Date().getTime()
    if (b) {
      if (mA && 6e4 > c - mA) return
      var d = _.If.getAuthToken(a)
      d && (xA('oauth2relayReady', d), xA('oauth2callback', d))
      b.parentNode.removeChild(b)
      if (/Firefox/.test(navigator.userAgent))
        try {
          window.frames[a] = void 0
        } catch (f) {}
      _.Oz()
      a = _.Nz
    }
    mA = c
    var e = String((2147483647 * (0, _.sg)()) | 0)
    b = _.R('oauth-flow/proxyUrl') || _.R('oauth-flow/relayUrl')
    wA()
      ? (rA = _.cm.Ih({
          where: _.Me.getBodyElement(),
          url: b,
          id: a,
          attributes: {
            style: {
              width: '1px',
              height: '1px',
              position: 'absolute',
              top: '-100px',
              display: 'none',
            },
            'aria-hidden': 'true',
          },
          dontclear: !0,
        }))
      : ((b = [
          b,
          '?parent=',
          encodeURIComponent(_.ng.getOrigin(window.location.href)),
          '#rpctoken=',
          e,
          '&forcesecure=1',
        ].join('')),
        (c = _.Me.getBodyElement()),
        (d = _.Me.createIframeElement({ name: a, id: a })),
        (d.src = vA(b)),
        (d.style.width = '1px'),
        (d.style.height = '1px'),
        (d.style.position = 'absolute'),
        (d.style.top = '-100px'),
        (d.tabIndex = -1),
        tA(d),
        c.appendChild(d),
        _.If.setupReceiver(a))
    yA('oauth2relayReady', e, function () {
      xA('oauth2relayReady', e)
      var f = oA
      if (null !== f) {
        oA = null
        for (var g = 0, k = f.length; g < k; ++g) f[g]()
      }
    })
    yA('oauth2callback', e, function (f) {
      var g = _.Me.getUrlParameters
      g = g(f)
      var k = g.state
      f = k.replace(/\|.*$/, '')
      f = {}.hasOwnProperty.call(qA, f) ? qA[f] : null
      g.state = f
      if (null != g.state) {
        f = pA[k]
        delete pA[k]
        k = (f && f.key) || 'token'
        var l = (g = GA(f && f.params, g))
        var m = (m = IA(l)) ? jA(m, l.cookie_policy) : !1
        !m &&
          l &&
          0 <=
            (' ' + (l.scope || '') + ' ').indexOf(
              ' https://www.googleapis.com/auth/plus.login '
            ) &&
          _.R('isLoggedIn') &&
          '1' === (l && l._aa) &&
          ((l._aa = '0'), nA || ((nA = !0), EA(l)))
        _.eA(k, g)
        g = dA(k)
        if (f) {
          k = f.popup
          l = f.after_redirect
          if (k && 'keep_open' != l)
            try {
              k.close()
            } catch (n) {}
          f.callback && (f.callback(g), (f.callback = null))
        }
      }
    })
  }
  _.KA = function (a) {
    null !== oA ? JA(a) : a && a()
  }
  MA = function (a, b) {
    var c = LA,
      d = IA(a)
    d &&
      (kA(a),
      iA(d, b, function () {
        if (c) {
          var e = { error: 'user_signed_out' }
          e.client_id = a.client_id
          e.g_user_cookie_policy = a.g_user_cookie_policy
          e.scope = a.scope
          e.response_type = a.response_type
          e.session_state = a.session_state
          e = GA(null, e)
          c(e)
        }
      }))
  }
  LA = function (a) {
    a || (a = dA(void 0, !0))
    ;(a && 'object' === typeof a) ||
      (a = { error: 'invalid_request', error_description: 'no callback data' })
    var b = a.error_description
    b &&
      window.console &&
      (window.console.error(a.error), window.console.error(b))
    a.error || (_.ye.drw = null)
    _.eA(a)
    if ((b = a.authuser))
      _.R('googleapis.config/sessionIndex'),
        _.Ge('googleapis.config/sessionIndex', b)
    _.Pz.Jn(_.Qz, a)
    return a
  }
  NA = ['client_id', 'cookie_policy', 'response_type']
  OA = 'client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state'.split(
    ' '
  )
  PA = function (a) {
    var b = _.ok(a)
    b.session_state &&
      b.session_state.extraQueryParams &&
      (b.authuser = b.session_state.extraQueryParams.authuser)
    b.session_state = null
    a.expires_at && (b.expires_at = parseInt(a.expires_at / 1e3).toString())
    a.expires_in && (b.expires_in = a.expires_in.toString())
    a.first_issued_at &&
      ((b.issued_at = parseInt(a.first_issued_at / 1e3).toString()),
      delete b.first_issued_at)
    _.tw(b)
    return b
  }
  QA = function (a) {
    if (void 0 === a.include_granted_scopes) {
      var b = _.R('include_granted_scopes')
      a.include_granted_scopes = !!b
    }
  }
  RA = function (a) {
    window.console &&
      ('function' === typeof window.console.warn
        ? window.console.warn(a)
        : 'function' === typeof window.console.log && window.console.log(a))
  }
  SA = function (a) {
    var b = a || {},
      c = {}
    _.lb(OA, function (d) {
      null != b[d] && (c[d] = b[d])
    })
    a = _.R('googleapis/overrideClientId')
    null != a && (c.client_id = a)
    QA(c)
    'string' === typeof b.scope
      ? (c.scope = b.scope)
      : Array.isArray(b.scope) && (c.scope = b.scope.join(' '))
    null != b['openid.realm'] && (c.openid_realm = b['openid.realm'])
    null != b.cookie_policy
      ? (c.cookie_policy = b.cookie_policy)
      : null != b.cookiepolicy && (c.cookie_policy = b.cookiepolicy)
    null == c.login_hint && null != b.user_id && (c.login_hint = b.user_id)
    try {
      _.kx(c.cookie_policy)
    } catch (d) {
      c.cookie_policy &&
        RA(
          "The cookie_policy configuration: '" +
            c.cookie_policy +
            "' is illegal, and thus ignored."
        ),
        delete c.cookie_policy
    }
    null != b.hd && (c.hosted_domain = b.hd)
    null == c.prompt &&
      (1 == b.immediate || 'true' == b.immediate
        ? (c.prompt = 'none')
        : 'force' == b.approval_prompt && (c.prompt = 'consent'))
    'none' == c.prompt && (c.session_selection = 'first_valid')
    'none' == c.prompt && 'offline' == c.access_type && delete c.access_type
    'undefined' === typeof c.authuser &&
      ((a = _.Ah()), null != a && (c.authuser = a))
    a = b.redirect_uri || _.R('oauth-flow/redirectUri')
    null != a && 'postmessage' != a && (c.redirect_uri = a)
    c.gsiwebsdk = 'shim'
    return c
  }
  _.TA = function (a, b) {
    var c = SA(a),
      d = new _.Ik(function (e, f) {
        _.Qx(c, function (g) {
          var k = g || {}
          _.lb(NA, function (l) {
            null == k[l] && (k[l] = c[l])
          })
          !c.include_granted_scopes && a && a.scope && (k.scope = a.scope)
          a && null != a.state && (k.state = a.state)
          k.error
            ? ('none' == c.prompt &&
                'user_logged_out' == k.error &&
                (k.error = 'immediate_failed_user_logged_out'),
              f(k))
            : ((g = PA(k)),
              null != g.authuser &&
                _.Ge('googleapis.config/sessionIndex', g.authuser),
              e(g))
        })
      })
    b && d.then(b, b)
    return d
  }
  UA = _.Oh.AG
  VA = null
  _.YA = function (a, b) {
    if ('force' !== a.approvalprompt) {
      a = _.WA(a)
      a.prompt = 'none'
      delete a.redirect_uri
      delete a.approval_prompt
      delete a.immediate
      if ((b = !b))
        VA
          ? (a.client_id !== VA.client_id &&
              window.console &&
              window.console.log &&
              window.console.log(
                'Ignoring mismatched page-level auth param client_id=' +
                  a.client_id
              ),
            (b = !0))
          : ((VA = a), (b = !1))
      b || XA(a)
    }
  }
  _.WA = function (a) {
    var b = a.redirecturi || 'postmessage',
      c = (0, _.qb)((a.scope || '').replace(/[\s\xa0]+/g, ' '))
    b = {
      client_id: a.clientid,
      redirect_uri: b,
      response_type: 'code token id_token gsession',
      scope: c,
    }
    a.approvalprompt && (b.approval_prompt = a.approvalprompt)
    a.state && (b.state = a.state)
    a.openidrealm && (b['openid.realm'] = a.openidrealm)
    c =
      'offline' == a.accesstype ? !0 : (c = a.redirecturi) && 'postmessage' != c
    c && (b.access_type = 'offline')
    a.requestvisibleactions &&
      (b.request_visible_actions = (0, _.qb)(
        a.requestvisibleactions.replace(/[\s\xa0]+/g, ' ')
      ))
    a.after_redirect && (b.after_redirect = a.after_redirect)
    a.cookiepolicy &&
      'none' !== a.cookiepolicy &&
      (b.cookie_policy = a.cookiepolicy)
    'undefined' != typeof a.includegrantedscopes &&
      (b.include_granted_scopes = a.includegrantedscopes)
    a.e && (b.e = a.e)
    ;(a = a.authuser || _.R('googleapis.config/sessionIndex')) &&
      (b.authuser = a)
    ;(a = _.R('useoriginassocialhost')) && (b.use_origin_as_socialhost = a)
    return b
  }
  XA = function (a) {
    _.ro('waaf0', 'signin', '0')
    _.TA(a, function (b) {
      _.ro('waaf1', 'signin', '0')
      LA(b)
    })
  }
  _.ZA = function (a) {
    a = _.WA(a)
    _.Ge('oauth-flow/authWindowWidth', 445)
    _.Ge('oauth-flow/authWindowHeight', 615)
    XA(a)
  }
  _.$A = function (a) {
    _.Pz.unsubscribe(_.Qz, a)
    _.Pz.subscribe(_.Qz, a)
  }
  var gB, jB
  _.bB = function (a) {
    return a.cookiepolicy
      ? !0
      : (_.aB(
          'cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information.'
        ),
        !1)
  }
  _.aB = function (a) {
    window.console &&
      (window.console.error
        ? window.console.error(a)
        : window.console.log && window.console.log(a))
  }
  _.fB = function (a, b) {
    var c = _.xn()
    _.oe(a, c)
    c = FA(c)
    if (_.bB(c)) {
      var d = _.cB()
      _.dB(c)
      b
        ? _.xe(b, 'click', function () {
            _.eB(c, d)
          })
        : _.eB(c, d)
    }
  }
  _.cB = function () {
    var a = new gB()
    _.$A(function (b) {
      a.MA &&
        b &&
        (b.access_token && _.Ge('isPlusUser', !0),
        b['g-oauth-window'] &&
          ((a.MA = !1), _.Df('OTA app install is no longer supported.')))
    })
    return a
  }
  gB = function () {
    this.MA = !1
  }
  _.dB = function (a) {
    a = _.hB(a)
    _.iB(a.callback)
    _.KA(function () {
      _.YA(a)
    })
  }
  _.hB = function (a) {
    jB(a)
    a.redirecturi && delete a.redirecturi
    Vz(function (b) {
      return a[b]
    }) || (a.authuser = 0)
    return a
  }
  jB = function (a) {
    ;/^\s*$/.test(a.scope || '') &&
      (a.scope = 'https://www.googleapis.com/auth/plus.login')
  }
  _.iB = function (a) {
    if ('string' === typeof a)
      if (window[a]) a = window[a]
      else {
        _.aB('Callback function named "' + a + '" not found')
        return
      }
    a && _.$A(a)
  }
  _.eB = function (a, b) {
    b.MA = !0
    a = _.hB(a)
    _.ZA(a)
  }
  _.L('gapi.auth.authorize', _.TA)
  _.L('gapi.auth.checkSessionState', function (a, b) {
    var c = _.me()
    c.client_id = a.client_id
    c.session_state = a.session_state
    _.KA(function () {
      wA()
        ? rA.send(
            'check_session_state',
            c,
            function (d) {
              b.call(null, d[0])
            },
            _.Km
          )
        : _.If.call(
            _.Nz,
            'check_session_state',
            sA(function (d) {
              b.call(null, d)
            }),
            c.session_state,
            c.client_id
          )
    })
  })
  _.L('gapi.auth.getAuthHeaderValueForFirstParty', UA)
  _.L('gapi.auth.getToken', dA)
  _.L('gapi.auth.getVersionInfo', function (a, b) {
    _.KA(function () {
      var c = _.Mh() || '',
        d = null,
        e = null
      c && ((e = c.split(' ')), 2 == e.length && (d = e[1]))
      d
        ? wA()
          ? rA.send(
              'get_versioninfo',
              { xapisidHash: d, sessionIndex: b },
              function (f) {
                a(f[0])
              },
              _.Km
            )
          : _.If.call(
              _.Nz,
              'get_versioninfo',
              sA(function (f) {
                a(f)
              }),
              d,
              b
            )
        : a()
    })
  })
  _.L('gapi.auth.init', _.KA)
  _.L('gapi.auth.setToken', _.eA)
  _.L('gapi.auth.signIn', function (a) {
    _.fB(a)
  })
  _.L('gapi.auth.signOut', function () {
    var a = dA()
    a && MA(a, a.cookie_policy)
  })
  _.L('gapi.auth.unsafeUnpackIdToken', HA)
  _.L('gapi.auth._pimf', _.YA)
  _.L('gapi.auth._oart', EA)
  _.L('gapi.auth._guss', function (a) {
    return gA(a).read()
  })

  _.kB = function (a) {
    return !!(a.clientid && a.scope && a.callback)
  }
  _.lB = function () {
    var a = _.xn()
    _.kB(a) && !_.R('disableRealtimeCallback') ? _.dB(a) : _.KA()
  }
  _.yk(function () {
    _.lB()
  })

  _.lB = function () {
    var a = _.xn()
    _.kB(a) && !_.R('disableRealtimeCallback') && _.dB(a)
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Vx = function () {}
  Vx.prototype.RE = null
  Vx.prototype.getOptions = function () {
    var a
    ;(a = this.RE) ||
      ((a = {}), _.Wx(this) && ((a[0] = !0), (a[1] = !0)), (a = this.RE = a))
    return a
  }
  var Yx
  Yx = function () {}
  _.P(Yx, Vx)
  _.Wx = function (a) {
    if (
      !a.eI &&
      'undefined' == typeof XMLHttpRequest &&
      'undefined' != typeof ActiveXObject
    ) {
      for (
        var b = [
            'MSXML2.XMLHTTP.6.0',
            'MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP',
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c]
        try {
          return new ActiveXObject(d), (a.eI = d)
        } catch (e) {}
      }
      throw Error('la')
    }
    return a.eI
  }
  _.Xx = new Yx()

  _.qg = (window.googleapis && window.googleapis.server) || {}

  var tg = function (a) {
      return {
        execute: function (b) {
          var c = {
              method: a.httpMethod || 'GET',
              root: a.root,
              path: a.url,
              params: a.urlParams,
              headers: a.headers,
              body: a.body,
            },
            d = window.gapi,
            e = function () {
              var f = d.config.get('client/apiKey'),
                g = d.config.get('client/version')
              try {
                var k = d.config.get('googleapis.config/developerKey'),
                  l = d.config.get('client/apiKey', k)
                d.config.update('client/apiKey', l)
                d.config.update('client/version', '1.0.0-alpha')
                var m = d.client
                m.request.call(m, c).then(b, b)
              } finally {
                d.config.update('client/apiKey', f),
                  d.config.update('client/version', g)
              }
            }
          d.client ? e() : d.load.call(d, 'client', e)
        },
      }
    },
    ug = function (a, b) {
      return function (c) {
        var d = {}
        c = c.body
        var e = _.wf(c),
          f = {}
        if (e && e.length)
          for (var g = 0, k = e.length; g < k; ++g) {
            var l = e[g]
            f[l.id] = l
          }
        g = 0
        for (k = b.length; g < k; ++g)
          (l = b[g].id), (d[l] = e && e.length ? f[l] : e)
        a(d, c)
      }
    },
    vg = function (a) {
      a.transport = {
        name: 'googleapis',
        execute: function (b, c) {
          for (var d = [], e = 0, f = b.length; e < f; ++e) {
            var g = b[e],
              k = g.method,
              l = String(k).split('.')[0]
            l =
              _.R('googleapis.config/versions/' + k) ||
              _.R('googleapis.config/versions/' + l) ||
              'v1'
            d.push({
              jsonrpc: '2.0',
              id: g.id,
              method: k,
              apiVersion: String(l),
              params: g.params,
            })
          }
          b = tg({
            httpMethod: 'POST',
            root: a.transport.root,
            url: '/rpc?pp=0',
            headers: { 'Content-Type': 'application/json' },
            body: d,
          })
          b.execute.call(b, ug(c, d))
        },
        root: void 0,
      }
    },
    wg = function (a) {
      var b = this.method,
        c = this.transport
      c.execute.call(c, [{ method: b, id: b, params: this.rpc }], function (d) {
        d = d[b]
        d.error || (d = d.data || d.result)
        a(d)
      })
    },
    yg = function () {
      for (
        var a = xg,
          b = a.split('.'),
          c = function (k) {
            k = k || {}
            k.groupId = k.groupId || '@self'
            k.userId = k.userId || '@viewer'
            k = { method: a, rpc: k || {} }
            vg(k)
            k.execute = wg
            return k
          },
          d = _.D,
          e = 0,
          f = b.length;
        e < f;
        ++e
      ) {
        var g = d[b[e]] || {}
        e + 1 == f && (g = c)
        d = d[b[e]] = g
      }
      if (1 < b.length && 'googleapis' != b[0])
        for (
          b[0] = 'googleapis',
            'delete' == b[b.length - 1] && (b[b.length - 1] = 'remove'),
            d = _.D,
            e = 0,
            f = b.length;
          e < f;
          ++e
        )
          (g = d[b[e]] || {}), e + 1 == f && (g = c), (d = d[b[e]] = g)
    },
    xg
  for (xg in _.R('googleapis.config/methods')) yg()
  _.L('googleapis.newHttpRequest', function (a) {
    return tg(a)
  })
  _.L('googleapis.setUrlParameter', function (a, b) {
    if ('trace' !== a) throw Error('u')
    _.Ge('client/trace', b)
  })

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.jh = function (a) {
    return encodeURIComponent(String(a))
  }
  _.kh = function (a) {
    return null == a ? '' : String(a)
  }
  _.lh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
  _.mh = function (a, b) {
    if (!b) return a
    var c = a.indexOf('#')
    0 > c && (c = a.length)
    var d = a.indexOf('?')
    if (0 > d || d > c) {
      d = c
      var e = ''
    } else e = a.substring(d + 1, c)
    a = [a.substr(0, d), e, a.substr(c)]
    c = a[1]
    a[1] = b ? (c ? c + '&' + b : b) : c
    return a[0] + (a[1] ? '?' + a[1] : '') + a[2]
  }
  _.nh = function (a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) _.nh(a, String(b[d]), c)
    else null != b && c.push(a + ('' === b ? '' : '=' + _.jh(b)))
  }
  _.oh = function (a) {
    var b = [],
      c
    for (c in a) _.nh(c, a[c], b)
    return b.join('&')
  }
  _.ph = function (a, b) {
    b = _.oh(b)
    return _.mh(a, b)
  }

  var ei = function (a, b) {
    a = _.Me.createIframeElement({ id: a, name: a })
    a.style.width = '1px'
    a.style.height = '1px'
    a.style.position = 'absolute'
    a.style.top = '-100px'
    a.style.display = 'none'
    if (window.navigator) {
      var c = window.navigator.userAgent || ''
      var d = window.navigator.product || ''
      c =
        0 != c.indexOf('Opera') &&
        -1 == c.indexOf('WebKit') &&
        'Gecko' == d &&
        0 < c.indexOf('rv:1.')
    } else c = !1
    a.src = c ? 'about:blank' : b
    a.tabIndex = -1
    'function' === typeof a.setAttribute
      ? a.setAttribute('aria-hidden', 'true')
      : (a['aria-hidden'] = 'true')
    document.body.appendChild(a)
    c && (a.src = b)
    return a
  }
  _.Oh = {
    MH: _.Nh,
    iV: _.Kh,
    ZG: function () {
      var a = null
      _.Kh() &&
        ((a = window.__PVT), null == a && (a = new _.Bh(document).get('BEAT')))
      return a
    },
    AG: _.Mh,
  }
  var gi, fi
  gi = function () {
    return !!fi('auth/useFirstPartyAuthV2')
  }
  fi = function (a) {
    return _.R('googleapis.config/' + a)
  }
  _.hi = function (a, b, c) {
    a = void 0 === a ? {} : a
    b = void 0 === b ? window.location.href : b
    c = void 0 === c ? 'auto' : c
    if ('none' == c) return a
    var d = a.Authorization,
      e = a.OriginToken
    if (!d && !e) {
      ;(e = _.Qh()) &&
        e.access_token &&
        ('oauth2' == c || 'auto' == c) &&
        (d = String(e.token_type || 'Bearer') + ' ' + e.access_token)
      if ((e = !d))
        e = (!!fi('auth/useFirstPartyAuth') || '1p' == c) && 'oauth2' != c
      if (e && _.Kh()) {
        if (gi()) {
          d = fi('primaryEmail')
          c = fi('appDomain')
          e = fi('fogId')
          var f = []
          d && f.push({ key: 'e', value: d })
          c && f.push({ key: 'a', value: c })
          e && f.push({ key: 'u', value: e })
          d = _.Mh(f)
        } else d = _.Mh()
        d &&
          ((b = _.Ah(b)),
          (b = a['X-Goog-AuthUser'] || b),
          _.Ke(_.kh(b)) &&
            (!gi() ||
              (gi() &&
                _.Ke(_.kh(fi('primaryEmail'))) &&
                _.Ke(_.kh(fi('appDomain'))) &&
                _.Ke(_.kh(fi('fogId'))))) &&
            (b = '0'),
          _.Ke(_.kh(b)) || (a['X-Goog-AuthUser'] = b))
      }
      d
        ? (a.Authorization = d)
        : !1 !== fi('auth/useOriginToken') &&
          (e = _.Oh.ZG()) &&
          (a.OriginToken = e)
    }
    return a
  }
  _.ii = (function () {
    function a(n, r, u, q, v) {
      var t = f('proxy')
      if (q || !t) {
        t = f('root')
        var w = f('root-1p') || t
        t = t || 'https://content.googleapis.com'
        w = w || 'https://clients6.google.com'
        var y = f('xd3') || '/static/proxy.html'
        t = (q || String(r ? w : t)) + y
      }
      t = String(t)
      u && (t += (0 <= t.indexOf('?') ? '&' : '?') + 'usegapi=1')
      ;(r = _.Me.getUrlParameters().jsh || _.ye.h) &&
        (t +=
          (0 <= t.indexOf('?') ? '&' : '?') + 'jsh=' + encodeURIComponent(r))
      t +=
        '#parent=' +
        encodeURIComponent(
          null != v ? String(v) : _.ng.getOrigin(document.location.href)
        )
      return t + ('&rpctoken=' + n)
    }
    function b(n, r, u, q, v) {
      var t = d(u, q, v)
      k[t] ||
        ((u = ei(t, r)),
        _.If.register('ready:' + n, function () {
          _.If.unregister('ready:' + n)
          if (!l[t]) {
            l[t] = !0
            var w = m[t]
            m[t] = []
            for (var y = 0, A = w.length; y < A; ++y) {
              var B = w[y]
              e(B.rpc, B.AX, B.callback)
            }
          }
        }),
        _.If.setupReceiver(t, r),
        (k[t] = u))
    }
    function c(n, r, u) {
      var q = String((2147483647 * _.ai()) | 0),
        v = a(q, n, r, u)
      _.Gf(function () {
        b(q, v, n, r, u)
      })
    }
    function d(n, r, u) {
      n = a('', n, r, u, '')
      u = g[n + r]
      if (!u) {
        u = new _.Uh()
        u.Bw(n)
        u = u.Cg().toLowerCase()
        var q = _.ai()
        u += q
        g[n + r] = u
      }
      return 'apiproxy' + u
    }
    function e(n, r, u) {
      var q = void 0,
        v = !1
      if ('makeHttpRequests' !== n)
        throw 'only "makeHttpRequests" RPCs are implemented'
      var t = function (x) {
        if (x) {
          if (
            'undefined' != typeof q &&
            'undefined' != typeof x.root &&
            q != x.root
          )
            throw 'all requests in a batch must have the same root URL'
          q = x.root || q
          v = _.Oh.MH(x.headers)
        }
      }
      if (r)
        for (var w = 0, y = r.length; w < y; ++w) {
          var A = r[w]
          A && t(A.params)
        }
      t = !!f('useGapiForXd3')
      var B = d(v, t, q)
      k[B] || c(v, t, q)
      l[B]
        ? _.If.call(
            B,
            n,
            function (x) {
              if (
                this.f == B &&
                this.t == _.If.getAuthToken(this.f) &&
                this.origin == _.If.getTargetOrigin(this.f)
              ) {
                var K = _.wf(x)
                u(K, x)
              }
            },
            r
          )
        : (m[B] || (m[B] = []), m[B].push({ rpc: n, AX: r, callback: u }))
    }
    function f(n) {
      return _.R('googleapis.config/' + n)
    }
    var g = {},
      k = {},
      l = {},
      m = {}
    return {
      j7: function (n, r, u) {
        return _.hi(n, r, u)
      },
      Ui: e,
    }
  })()

  var zg = {
      AUTHORIZATION: 'Authorization',
      YM: 'Content-ID',
      k0: 'Content-Transfer-Encoding',
      CONTENT_TYPE: 'Content-Type',
      M0: 'Date',
      Q3: 'OriginToken',
      e2: 'hotrod-board-name',
      f2: 'hotrod-chrome-cpu-model',
      g2: 'hotrod-chrome-processors',
      x6: 'WWW-Authenticate',
      y6: 'X-ClientDetails',
      z6: 'X-Compass-Routing-Destination',
      A6: 'X-Goog-AuthUser',
      C6: 'X-Goog-Encode-Response-If-Executable',
      D6: 'X-Goog-Meeting-ABR',
      E6: 'X-Goog-Meeting-Botguardid',
      G6: 'X-Goog-Meeting-ClientInfo',
      H6: 'X-Goog-Meeting-ClientVersion',
      I6: 'X-Goog-Meeting-Debugid',
      J6: 'X-Goog-Meeting-Identifier',
      K6: 'X-Goog-Meeting-RtcClient',
      L6: 'X-Goog-Meeting-StartSource',
      M6: 'X-Goog-Meeting-Token',
      N6: 'X-Goog-PageId',
      O6: 'X-Goog-Safety-Content-Type',
      P6: 'X-Goog-Safety-Encoding',
      B6: 'X-Goog-Drive-Resource-Keys',
      Q6: 'X-HTTP-Method-Override',
      R6: 'X-JavaScript-User-Agent',
      S6: 'X-Origin',
      T6: 'X-Referer',
      U6: 'X-Requested-With',
      W6: 'X-Use-HTTP-Status-Code-Override',
      V6: 'X-Server-Timeout',
    },
    Ag = 'Accept Accept-Language Authorization Cache-Control cast-device-capabilities Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date EES-S7E-MODE GData-Version google-cloud-resource-prefix hotrod-board-name hotrod-chrome-cpu-model hotrod-chrome-processors Host If-Match If-Modified-Since If-None-Match If-Unmodified-Since MIME-Version Origin OriginToken Pragma Range Slug Transfer-Encoding Want-Digest x-alkali-account-key x-alkali-application-key x-alkali-auth-apps-namespace x-alkali-auth-entities-namespace x-alkali-auth-entity x-alkali-client-locale x-chrome-connected X-Client-Data X-ClientDetails X-Client-Version X-Firebase-Locale X-GData-Client X-GData-Key X-Goog-AuthUser X-Goog-PageId X-Goog-Encode-Response-If-Executable X-GoogApps-Allowed-Domains X-Goog-AdX-Buyer-Impersonation X-Goog-Api-Client X-Goog-Api-Key X-Goog-Correlation-Id X-Goog-Request-Info X-Goog-Request-Reason X-Goog-Experiments x-goog-ext-124712974-jspb x-goog-ext-251363160-jspb x-goog-ext-259736195-jspb x-goog-ext-275505673-bin X-Goog-Firebase-Installations-Auth X-Firebase-Client X-Firebase-Client-Log-Type X-Firebase-GMPID X-Firebase-Auth-Token X-Goog-Drive-Resource-Keys x-goog-iam-authority-selector x-goog-iam-authorization-token x-goog-request-params X-Goog-Sn-Metadata X-Goog-Sn-PatientId X-Goog-Spatula X-Goog-Travel-Bgr X-Goog-Travel-Settings X-Goog-Upload-Command X-Goog-Upload-Content-Disposition X-Goog-Upload-Content-Length X-Goog-Upload-Content-Type X-Goog-Upload-File-Name X-Goog-Upload-Header-Content-Encoding X-Goog-Upload-Header-Content-Length X-Goog-Upload-Header-Content-Type X-Goog-Upload-Header-Transfer-Encoding X-Goog-Upload-Offset X-Goog-Upload-Protocol X-Goog-User-Project X-Goog-Visitor-Id X-Goog-FieldMask X-Google-Project-Override X-HTTP-Method-Override X-JavaScript-User-Agent X-Pan-Versionid X-Proxied-User-IP X-Origin X-Referer X-Requested-With X-Stadia-Client-Context X-Upload-Content-Length X-Upload-Content-Type X-Use-HTTP-Status-Code-Override X-Ios-Bundle-Identifier X-Android-Package X-Ariane-Xsrf-Token X-Earth-Engine-App-ID-Token X-Earth-Engine-Computation-Profile X-Earth-Engine-Computation-Profiling X-Play-Console-Experiments-Override X-Play-Console-Session-Id X-YouTube-VVT X-YouTube-Page-CL X-YouTube-Page-Timestamp X-Compass-Routing-Destination X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-Identifier X-Goog-Meeting-RtcClient X-Goog-Meeting-StartSource X-Goog-Meeting-Token X-Sfdc-Authorization X-Server-Timeout'.split(
      ' '
    ),
    Bg = 'Digest Cache-Control Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date ETag Expires Last-Modified Location Pragma Range Server Transfer-Encoding WWW-Authenticate Vary Unzipped-Content-MD5 X-Correlation-ID X-Debug-Tracking-Id X-Goog-Generation X-Goog-Metageneration X-Goog-Safety-Content-Type X-Goog-Safety-Encoding X-Google-Trace X-Goog-Upload-Chunk-Granularity X-Goog-Upload-Control-URL X-Goog-Upload-Size-Received X-Goog-Upload-Status X-Goog-Upload-URL X-Goog-Diff-Download-Range X-Goog-Hash X-Goog-Updated-Authorization X-Server-Object-Version X-Guploader-Customer X-Guploader-Upload-Result X-Guploader-Uploadid X-Google-Gfe-Backend-Request-Cost X-Earth-Engine-Computation-Profile X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-RtcClient X-Goog-Meeting-Token X-Compass-Routing-Destination'.split(
      ' '
    )
  var Cg, Dg, Eg, Fg, Hg, Ig, Jg, Kg, Lg, Mg, Ng, Og
  Cg = null
  Dg = null
  Eg = null
  Fg = function (a, b) {
    var c = a.length
    if (c != b.length) return !1
    for (var d = 0; d < c; ++d) {
      var e = a.charCodeAt(d),
        f = b.charCodeAt(d)
      65 <= e && 90 >= e && (e += 32)
      65 <= f && 90 >= f && (f += 32)
      if (e != f) return !1
    }
    return !0
  }
  _.Gg = function (a) {
    a = String(a || '')
      .split('\x00')
      .join('')
    for (var b = [], c = !0, d = 0, e = a.length; d < e; ++d) {
      var f = a.charAt(d),
        g = a.charCodeAt(d)
      if (55296 <= g && 56319 >= g && d + 1 < e) {
        var k = a.charAt(d + 1),
          l = a.charCodeAt(d + 1)
        56320 <= l &&
          57343 >= l &&
          ((f += k), (g = 65536 + ((g - 55296) << 10) + (l - 56320)), ++d)
      }
      if (
        !(0 <= g && 1114109 >= g) ||
        (55296 <= g && 57343 >= g) ||
        (64976 <= g && 65007 >= g) ||
        65534 == (g & 65534)
      )
        (g = 65533), (f = String.fromCharCode(g))
      k = !(32 <= g && 126 >= g) || ' ' == f || (c && ':' == f) || '\\' == f
      !c || ('/' != f && '?' != f) || (c = !1)
      '%' == f &&
        (d + 2 >= e
          ? (k = !0)
          : ((l =
              16 * parseInt(a.charAt(d + 1), 16) +
              parseInt(a.charAt(d + 2), 16)),
            0 <= l && 255 >= l
              ? ((g = l),
                (f =
                  0 == g
                    ? ''
                    : '%' + (256 + l).toString(16).toUpperCase().substr(1)),
                (d += 2))
              : (k = !0)))
      k &&
        ((f = encodeURIComponent(f)),
        1 >= f.length &&
          (0 <= g && 127 >= g
            ? (f = '%' + (256 + g).toString(16).toUpperCase().substr(1))
            : ((g = 65533), (f = encodeURIComponent(String.fromCharCode(g))))))
      b.push(f)
    }
    a = b.join('')
    a = a.split('#')[0]
    a = a.split('?')
    b = a[0].split('/')
    c = []
    d = 0
    for (e = b.length; d < e; ++d)
      (f = b[d]),
        (g = f.split('%2E').join('.')),
        (g = g.split(encodeURIComponent('\uff0e')).join('.')),
        '.' == g
          ? d + 1 == e && c.push('')
          : '..' == g
          ? (0 < c.length && c.pop(), d + 1 == e && c.push(''))
          : c.push(f)
    a[0] = c.join('/')
    for (a = a.join('?'); a && '/' == a.charAt(0); ) a = a.substr(1)
    return '/' + a
  }
  Hg = {
    'access-control-allow-origin': !0,
    'access-control-allow-credentials': !0,
    'access-control-expose-headers': !0,
    'access-control-max-age': !0,
    'access-control-allow-headers': !0,
    'access-control-allow-methods': !0,
    p3p: !0,
    'proxy-authenticate': !0,
    'set-cookie': !0,
    'set-cookie2': !0,
    status: !0,
    tsv: !0,
    '': !0,
  }
  Ig = {
    'accept-charset': !0,
    'accept-encoding': !0,
    'access-control-request-headers': !0,
    'access-control-request-method': !0,
    'client-ip': !0,
    clientip: !0,
    connection: !0,
    'content-length': !0,
    cookie: !0,
    cookie2: !0,
    date: !0,
    dnt: !0,
    expect: !0,
    forwarded: !0,
    'forwarded-for': !0,
    'front-end-https': !0,
    host: !0,
    'keep-alive': !0,
    'max-forwards': !0,
    method: !0,
    origin: !0,
    'raw-post-data': !0,
    referer: !0,
    te: !0,
    trailer: !0,
    'transfer-encoding': !0,
    upgrade: !0,
    url: !0,
    'user-agent': !0,
    version: !0,
    via: !0,
    'x-att-deviceid': !0,
    'x-chrome-connected': !0,
    'x-client-data': !0,
    'x-client-ip': !0,
    'x-do-not-track': !0,
    'x-forwarded-by': !0,
    'x-forwarded-for': !0,
    'x-forwarded-host': !0,
    'x-forwarded-proto': !0,
    'x-geo': !0,
    'x-googapps-allowed-domains': !0,
    'x-origin': !0,
    'x-proxyuser-ip': !0,
    'x-real-ip': !0,
    'x-referer': !0,
    'x-uidh': !0,
    'x-user-ip': !0,
    'x-wap-profile': !0,
    '': !0,
  }
  Jg = function (a) {
    if (!_.eb(a)) return null
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = a[c]
      if ('string' === typeof d && d) {
        var e = d.toLowerCase()
        Fg(d, e) && (b[e] = d)
      }
    }
    for (var f in zg)
      Object.prototype.hasOwnProperty.call(zg, f) &&
        ((d = zg[f]),
        (e = d.toLowerCase()),
        Fg(d, e) && Object.prototype.hasOwnProperty.call(b, e) && (b[e] = d))
    return b
  }
  Kg = new RegExp(
    '(' +
      /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source +
      '|' +
      /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source +
      '){1,100}',
    'g'
  )
  Lg = /[ \t]*(\r?\n[ \t]+)+/g
  Mg = /^[ \t]+|[ \t]+$/g
  Ng = function (a, b) {
    if (!b && 'object' === typeof a && a && 'number' === typeof a.length) {
      b = a
      a = ''
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = Ng(b[c], !0)
        e && (a && (e = a + ', ' + e), (a = e))
      }
    }
    if (
      'string' === typeof a &&
      ((a = a.replace(Lg, ' ')),
      (a = a.replace(Mg, '')),
      '' == a.replace(Kg, '') && a)
    )
      return a
  }
  Og = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g
  _.Pg = function (a) {
    if ('string' !== typeof a || !a || !a.match(Og)) return null
    a = a.toLowerCase()
    if (null == Eg) {
      var b = [],
        c = _.R('googleapis/headers/response')
      ;(c && 'object' === typeof c && 'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      ;((c = _.R('client/headers/response')) &&
        'object' === typeof c &&
        'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      b = b.concat(Bg)
      ;((c = _.R('googleapis/headers/request')) &&
        'object' === typeof c &&
        'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      ;((c = _.R('client/headers/request')) &&
        'object' === typeof c &&
        'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      b = b.concat(Ag)
      for (var d in zg)
        Object.prototype.hasOwnProperty.call(zg, d) && b.push(zg[d])
      Eg = Jg(b)
    }
    return null != Eg && Eg.hasOwnProperty(a) ? Eg[a] : a
  }
  _.Qg = function (a, b) {
    if (!_.Pg(a) || !Ng(b)) return null
    a = a.toLowerCase()
    if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || Ig[a]) return null
    if (null == Cg) {
      b = []
      var c = _.R('googleapis/headers/request')
      ;(c && 'object' === typeof c && 'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      ;((c = _.R('client/headers/request')) &&
        'object' === typeof c &&
        'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      b = b.concat(Ag)
      Cg = Jg(b)
    }
    return null != Cg && Cg.hasOwnProperty(a) ? Cg[a] : null
  }
  _.Rg = function (a, b) {
    if (!_.Pg(a) || !Ng(b)) return null
    a = a.toLowerCase()
    if (Hg[a]) return null
    if (null == Dg) {
      b = []
      var c = _.R('googleapis/headers/response')
      ;(c && 'object' === typeof c && 'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      ;((c = _.R('client/headers/response')) &&
        'object' === typeof c &&
        'number' === typeof c.length) ||
        (c = null)
      null != c && (b = b.concat(c))
      b = b.concat(Bg)
      Dg = Jg(b)
    }
    return null != Dg && Dg.hasOwnProperty(a) ? a : null
  }
  _.Sg = function (a, b) {
    if (_.Pg(b) && null != a && 'object' === typeof a) {
      var c = void 0,
        d
      for (d in a)
        if (Object.prototype.hasOwnProperty.call(a, d) && Fg(d, b)) {
          var e = Ng(a[d])
          e && (void 0 !== c && (e = c + ', ' + e), (c = e))
        }
      return c
    }
  }
  _.Tg = function (a, b, c, d) {
    var e = _.Pg(b)
    if (e) {
      c && (c = Ng(c))
      b = b.toLowerCase()
      for (var f in a)
        Object.prototype.hasOwnProperty.call(a, f) && Fg(f, b) && delete a[f]
      c && (d || (b = e), (a[b] = c))
    }
  }
  _.Ug = function (a, b) {
    var c = {}
    if (!a) return c
    a = a.split('\r\n')
    for (var d = 0, e = a.length; d < e; ++d) {
      var f = a[d]
      if (!f) break
      var g = f.indexOf(':')
      if (!(0 >= g)) {
        var k = f.substring(0, g)
        if ((k = _.Pg(k))) {
          for (f = f.substring(g + 1); d + 1 < e && a[d + 1].match(/^[ \t]/); )
            (f += '\r\n' + a[d + 1]), ++d
          if ((f = Ng(f)))
            if ((k = _.Rg(k, f) || (b ? void 0 : k)))
              (k = k.toLowerCase()),
                (g = _.Sg(c, k)),
                void 0 !== g && (f = g + ', ' + f),
                _.Tg(c, k, f, !0)
        }
      }
    }
    return c
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Mt =
    'StopIteration' in _.D
      ? _.D.StopIteration
      : { message: 'StopIteration', stack: '' }
  _.Nt = function () {}
  _.Nt.prototype.next = function () {
    throw _.Mt
  }
  _.Nt.prototype.fi = function () {
    return this
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.Ot = function (a, b) {
    this.Ha = {}
    this.Pb = []
    this.Yr = this.Vb = 0
    var c = arguments.length
    if (1 < c) {
      if (c % 2) throw Error('f')
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
  }
  _.h = _.Ot.prototype
  _.h.Fb = function () {
    return this.Vb
  }
  _.h.Tc = function () {
    Pt(this)
    for (var a = [], b = 0; b < this.Pb.length; b++) a.push(this.Ha[this.Pb[b]])
    return a
  }
  _.h.re = function () {
    Pt(this)
    return this.Pb.concat()
  }
  _.h.Pd = function (a) {
    return _.Qt(this.Ha, a)
  }
  _.h.Cj = _.ja(9)
  _.h.equals = function (a, b) {
    if (this === a) return !0
    if (this.Vb != a.Fb()) return !1
    b = b || Rt
    Pt(this)
    for (var c, d = 0; (c = this.Pb[d]); d++)
      if (!b(this.get(c), a.get(c))) return !1
    return !0
  }
  var Rt = function (a, b) {
    return a === b
  }
  _.Ot.prototype.isEmpty = function () {
    return 0 == this.Vb
  }
  _.Ot.prototype.clear = function () {
    this.Ha = {}
    this.Yr = this.Vb = this.Pb.length = 0
  }
  _.Ot.prototype.remove = function (a) {
    return _.Qt(this.Ha, a)
      ? (delete this.Ha[a],
        this.Vb--,
        this.Yr++,
        this.Pb.length > 2 * this.Vb && Pt(this),
        !0)
      : !1
  }
  var Pt = function (a) {
    if (a.Vb != a.Pb.length) {
      for (var b = 0, c = 0; b < a.Pb.length; ) {
        var d = a.Pb[b]
        _.Qt(a.Ha, d) && (a.Pb[c++] = d)
        b++
      }
      a.Pb.length = c
    }
    if (a.Vb != a.Pb.length) {
      var e = {}
      for (c = b = 0; b < a.Pb.length; )
        (d = a.Pb[b]), _.Qt(e, d) || ((a.Pb[c++] = d), (e[d] = 1)), b++
      a.Pb.length = c
    }
  }
  _.h = _.Ot.prototype
  _.h.get = function (a, b) {
    return _.Qt(this.Ha, a) ? this.Ha[a] : b
  }
  _.h.set = function (a, b) {
    _.Qt(this.Ha, a) || (this.Vb++, this.Pb.push(a), this.Yr++)
    this.Ha[a] = b
  }
  _.h.addAll = function (a) {
    if (a instanceof _.Ot)
      for (var b = a.re(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]))
    else for (b in a) this.set(b, a[b])
  }
  _.h.forEach = function (a, b) {
    for (var c = this.re(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e)
      a.call(b, f, e, this)
    }
  }
  _.h.clone = function () {
    return new _.Ot(this)
  }
  _.h.fi = function (a) {
    Pt(this)
    var b = 0,
      c = this.Yr,
      d = this,
      e = new _.Nt()
    e.next = function () {
      if (c != d.Yr) throw Error('J')
      if (b >= d.Pb.length) throw _.Mt
      var f = d.Pb[b++]
      return a ? f : d.Ha[f]
    }
    return e
  }
  _.Qt = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.St = function (a) {
    var b = [],
      c = 0,
      d
    for (d in a) b[c++] = a[d]
    return b
  }
  _.Tt = function (a) {
    var b = [],
      c = 0,
      d
    for (d in a) b[c++] = d
    return b
  }
  _.Ut = function (a) {
    if (a.Tc && 'function' == typeof a.Tc) return a.Tc()
    if ('string' === typeof a) return a.split('')
    if (_.eb(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d])
      return b
    }
    return _.St(a)
  }
  _.Vt = function (a) {
    if (a.re && 'function' == typeof a.re) return a.re()
    if (!a.Tc || 'function' != typeof a.Tc) {
      if (_.eb(a) || 'string' === typeof a) {
        var b = []
        a = a.length
        for (var c = 0; c < a; c++) b.push(c)
        return b
      }
      return _.Tt(a)
    }
  }
  _.Wt = function (a, b, c) {
    if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, c)
    else if (_.eb(a) || 'string' === typeof a) _.lb(a, b, c)
    else
      for (var d = _.Vt(a), e = _.Ut(a), f = e.length, g = 0; g < f; g++)
        b.call(c, e[g], d && d[g], a)
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Zx
  _.$x = function (a) {
    return new Zx().Jd(a)
  }
  Zx = function () {}
  Zx.prototype.Jd = function (a) {
    var b = []
    ay(this, a, b)
    return b.join('')
  }
  var ay = function (a, b, c) {
      if (null == b) c.push('null')
      else {
        if ('object' == typeof b) {
          if (Array.isArray(b)) {
            var d = b
            b = d.length
            c.push('[')
            for (var e = '', f = 0; f < b; f++)
              c.push(e), ay(a, d[f], c), (e = ',')
            c.push(']')
            return
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf()
          else {
            c.push('{')
            e = ''
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((f = b[d]),
                'function' != typeof f &&
                  (c.push(e), by(d, c), c.push(':'), ay(a, f, c), (e = ',')))
            c.push('}')
            return
          }
        }
        switch (typeof b) {
          case 'string':
            by(b, c)
            break
          case 'number':
            c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null')
            break
          case 'boolean':
            c.push(String(b))
            break
          case 'function':
            c.push('null')
            break
          default:
            throw Error('na`' + typeof b)
        }
      }
    },
    cy = {
      '"': '\\"',
      '\\': '\\\\',
      '/': '\\/',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\u000b',
    },
    dy = /\uffff/.test('\uffff')
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g,
    by = function (a, b) {
      b.push(
        '"',
        a.replace(dy, function (c) {
          var d = cy[c]
          d ||
            ((d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
            (cy[c] = d))
          return d
        }),
        '"'
      )
    }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  _.hy = function (a, b) {
    var c = {},
      d
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d])
    return c
  }
  _.iy = function (a, b) {
    var c = _.eb(b),
      d = c ? b : arguments
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return
      a = a[d[c]]
    }
    return a
  }

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var ly, py, qy, sy, wy, yy
  _.jy = function (a) {
    if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b]
    a.length = 0
  }
  _.ky = function (a) {
    return (a = _.Wx(a)) ? new ActiveXObject(a) : new XMLHttpRequest()
  }
  ly = function (a) {
    for (
      var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d;
      (d = b.exec(a));

    )
      c.push([d[1], d[2], d[3] || void 0])
    return c
  }
  _.my = function (a) {
    var b = 0,
      c
    for (c in a) b++
    return b
  }
  _.ny = function (a, b) {
    return null !== a && b in a
  }
  _.oy = function (a) {
    if (!a || 'object' !== typeof a) return a
    if ('function' === typeof a.clone) return a.clone()
    var b = Array.isArray(a)
        ? []
        : 'function' !== typeof ArrayBuffer ||
          'function' !== typeof ArrayBuffer.isView ||
          !ArrayBuffer.isView(a) ||
          a instanceof DataView
        ? {}
        : new a.constructor(a.length),
      c
    for (c in a) b[c] = _.oy(a[c])
    return b
  }
  py = function (a) {
    var b = /rv: *([\d\.]*)/.exec(a)
    if (b && b[1]) return b[1]
    b = ''
    var c = /MSIE +([\d\.]+)/.exec(a)
    if (c && c[1])
      if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
        if (a && a[1])
          switch (a[1]) {
            case '4.0':
              b = '8.0'
              break
            case '5.0':
              b = '9.0'
              break
            case '6.0':
              b = '10.0'
              break
            case '7.0':
              b = '11.0'
          }
        else b = '7.0'
      else b = c[1]
    return b
  }
  qy = function () {
    function a(e) {
      e = _.ki(e, d)
      return c[e] || ''
    }
    var b = _.ub
    if (_.Db()) return py(b)
    b = ly(b)
    var c = {}
    _.lb(b, function (e) {
      c[e[0]] = e[1]
    })
    var d = _.mi(_.ny, c)
    return _.Cb()
      ? a(['Version', 'Opera'])
      : _.yb('Edge')
      ? a(['Edge'])
      : _.yb('Edg/')
      ? a(['Edg'])
      : _.Fb()
      ? a(['Chrome', 'CriOS', 'HeadlessChrome'])
      : ((b = b[2]) && b[1]) || ''
  }
  _.ry = function (a) {
    return 0 <= _.tb(qy(), a)
  }
  sy = function (a, b) {
    var c = []
    for (b = b || 0; b < a.length; b += 2) _.nh(a[b], a[b + 1], c)
    return c.join('&')
  }
  _.ty = function (a, b) {
    var c = 2 == arguments.length ? sy(arguments[1], 0) : sy(arguments, 1)
    return _.mh(a, c)
  }
  _.uy = function (a, b, c) {
    c = null != c ? '=' + _.jh(c) : ''
    return _.mh(a, b + c)
  }
  _.vy = function (a, b) {
    _.ui(a, '/') && (a = a.substr(0, a.length - 1))
    _.dd(b, '/') && (b = b.substr(1))
    return a + '/' + b
  }
  wy = {}
  _.xy = function (a) {
    if (wy[a]) return wy[a]
    a = String(a)
    if (!wy[a]) {
      var b = /function\s+([^\(]+)/m.exec(a)
      wy[a] = b ? b[1] : '[Anonymous]'
    }
    return wy[a]
  }
  yy = function (a, b) {
    var c = []
    if (_.Xa(b, a)) c.push('[...circular reference...]')
    else if (a && 50 > b.length) {
      c.push(_.xy(a) + '(')
      for (var d = a.arguments, e = 0; d && e < d.length; e++) {
        0 < e && c.push(', ')
        var f = d[e]
        switch (typeof f) {
          case 'object':
            f = f ? 'object' : 'null'
            break
          case 'string':
            break
          case 'number':
            f = String(f)
            break
          case 'boolean':
            f = f ? 'true' : 'false'
            break
          case 'function':
            f = (f = _.xy(f)) ? f : '[fn]'
            break
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + '...')
        c.push(f)
      }
      b.push(a)
      c.push(')\n')
      try {
        c.push(yy(a.caller, b))
      } catch (g) {
        c.push('[exception trying to get caller]\n')
      }
    } else a ? c.push('[...long stack...]') : c.push('[end]')
    return c.join('')
  }
  _.zy = function (a) {
    var b = Error()
    if (Error.captureStackTrace)
      Error.captureStackTrace(b, a || _.zy), (b = String(b.stack))
    else {
      try {
        throw b
      } catch (c) {
        b = c
      }
      b = (b = b.stack) ? String(b) : null
    }
    b || (b = yy(a || arguments.callee.caller, []))
    return b
  }
  _.Ay = function (a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        return !0
      default:
        return !1
    }
  }
  _.By = function (a, b) {
    _.kj.call(this)
    this.jk = a || 1
    this.Or = b || _.D
    this.NE = (0, _.Q)(this.TZ, this)
    this.TI = _.hb()
  }
  _.P(_.By, _.kj)
  _.h = _.By.prototype
  _.h.enabled = !1
  _.h.qc = null
  _.h.setInterval = function (a) {
    this.jk = a
    this.qc && this.enabled
      ? (this.stop(), this.start())
      : this.qc && this.stop()
  }
  _.h.TZ = function () {
    if (this.enabled) {
      var a = _.hb() - this.TI
      0 < a && a < 0.8 * this.jk
        ? (this.qc = this.Or.setTimeout(this.NE, this.jk - a))
        : (this.qc && (this.Or.clearTimeout(this.qc), (this.qc = null)),
          this.dispatchEvent('tick'),
          this.enabled && (this.stop(), this.start()))
    }
  }
  _.h.start = function () {
    this.enabled = !0
    this.qc ||
      ((this.qc = this.Or.setTimeout(this.NE, this.jk)), (this.TI = _.hb()))
  }
  _.h.stop = function () {
    this.enabled = !1
    this.qc && (this.Or.clearTimeout(this.qc), (this.qc = null))
  }
  _.h.va = function () {
    _.By.T.va.call(this)
    this.stop()
    delete this.Or
  }
  var Dy, Ey, Fy
  _.Cy = function (a) {
    _.kj.call(this)
    this.headers = new _.Ot()
    this.Iw = a || null
    this.ef = !1
    this.Hw = this.Ma = null
    this.Ou = ''
    this.zn = 0
    this.Dl = this.hA = this.su = this.py = !1
    this.lm = 0
    this.Xc = null
    this.wk = ''
    this.uD = this.df = !1
  }
  _.P(_.Cy, _.kj)
  _.Cy.prototype.yb = null
  Dy = /^https?$/i
  Ey = ['POST', 'PUT']
  Fy = []
  _.Gy = function (a, b, c, d, e, f, g) {
    var k = new _.Cy()
    Fy.push(k)
    b && k.V('complete', b)
    k.En('ready', k.RP)
    f && k.KC(f)
    g && (k.df = g)
    k.send(a, c, d, e)
  }
  _.Cy.prototype.RP = function () {
    this.Da()
    _.ri(Fy, this)
  }
  _.Cy.prototype.KC = function (a) {
    this.lm = Math.max(0, a)
  }
  _.Cy.prototype.send = function (a, b, c, d) {
    if (this.Ma) throw Error('qa`' + this.Ou + '`' + a)
    b = b ? b.toUpperCase() : 'GET'
    this.Ou = a
    this.zn = 0
    this.py = !1
    this.ef = !0
    this.Ma = this.Iw ? _.ky(this.Iw) : _.ky(_.Xx)
    this.Hw = this.Iw ? this.Iw.getOptions() : _.Xx.getOptions()
    this.Ma.onreadystatechange = (0, _.Q)(this.IJ, this)
    try {
      ;(this.hA = !0), this.Ma.open(b, String(a), !0), (this.hA = !1)
    } catch (f) {
      this.tt(5, f)
      return
    }
    a = c || ''
    var e = this.headers.clone()
    d &&
      _.Wt(d, function (f, g) {
        e.set(g, f)
      })
    d = _.ki(e.re(), Hy)
    c = _.D.FormData && a instanceof _.D.FormData
    !_.Xa(Ey, b) ||
      d ||
      c ||
      e.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    e.forEach(function (f, g) {
      this.Ma.setRequestHeader(g, f)
    }, this)
    this.wk && (this.Ma.responseType = this.wk)
    'withCredentials' in this.Ma &&
      this.Ma.withCredentials !== this.df &&
      (this.Ma.withCredentials = this.df)
    try {
      Iy(this),
        0 < this.lm &&
          ((this.uD = Jy(this.Ma))
            ? ((this.Ma.timeout = this.lm),
              (this.Ma.ontimeout = (0, _.Q)(this.jg, this)))
            : (this.Xc = _.ey(this.jg, this.lm, this))),
        (this.su = !0),
        this.Ma.send(a),
        (this.su = !1)
    } catch (f) {
      this.tt(5, f)
    }
  }
  var Jy = function (a) {
      return (
        _.rc &&
        _.Nc(9) &&
        'number' === typeof a.timeout &&
        void 0 !== a.ontimeout
      )
    },
    Hy = function (a) {
      return 'content-type' == a.toLowerCase()
    }
  _.Cy.prototype.jg = function () {
    'undefined' != typeof _.Ua &&
      this.Ma &&
      ((this.zn = 8), this.dispatchEvent('timeout'), this.abort(8))
  }
  _.Cy.prototype.tt = function (a) {
    this.ef = !1
    this.Ma && ((this.Dl = !0), this.Ma.abort(), (this.Dl = !1))
    this.zn = a
    Ky(this)
    Ly(this)
  }
  var Ky = function (a) {
    a.py || ((a.py = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'))
  }
  _.Cy.prototype.abort = function (a) {
    this.Ma &&
      this.ef &&
      ((this.ef = !1),
      (this.Dl = !0),
      this.Ma.abort(),
      (this.Dl = !1),
      (this.zn = a || 7),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Ly(this))
  }
  _.Cy.prototype.va = function () {
    this.Ma &&
      (this.ef &&
        ((this.ef = !1), (this.Dl = !0), this.Ma.abort(), (this.Dl = !1)),
      Ly(this, !0))
    _.Cy.T.va.call(this)
  }
  _.Cy.prototype.IJ = function () {
    this.Nb || (this.hA || this.su || this.Dl ? My(this) : this.dB())
  }
  _.Cy.prototype.dB = function () {
    My(this)
  }
  var My = function (a) {
      if (
        a.ef &&
        'undefined' != typeof _.Ua &&
        (!a.Hw[1] || 4 != _.Ny(a) || 2 != a.getStatus())
      )
        if (a.su && 4 == _.Ny(a)) _.ey(a.IJ, 0, a)
        else if ((a.dispatchEvent('readystatechange'), 4 == _.Ny(a))) {
          a.ef = !1
          try {
            _.Oy(a)
              ? (a.dispatchEvent('complete'), a.dispatchEvent('success'))
              : ((a.zn = 6), a.getStatus(), Ky(a))
          } finally {
            Ly(a)
          }
        }
    },
    Ly = function (a, b) {
      if (a.Ma) {
        Iy(a)
        var c = a.Ma,
          d = a.Hw[0] ? _.Za : null
        a.Ma = null
        a.Hw = null
        b || a.dispatchEvent('ready')
        try {
          c.onreadystatechange = d
        } catch (e) {}
      }
    },
    Iy = function (a) {
      a.Ma && a.uD && (a.Ma.ontimeout = null)
      a.Xc && (_.fy(a.Xc), (a.Xc = null))
    }
  _.Cy.prototype.Fd = function () {
    return !!this.Ma
  }
  _.Oy = function (a) {
    var b = a.getStatus(),
      c
    if (!(c = _.Ay(b))) {
      if ((b = 0 === b))
        (a = String(a.Ou).match(_.lh)[1] || null),
          !a &&
            _.D.self &&
            _.D.self.location &&
            ((a = _.D.self.location.protocol), (a = a.substr(0, a.length - 1))),
          (b = !Dy.test(a ? a.toLowerCase() : ''))
      c = b
    }
    return c
  }
  _.Ny = function (a) {
    return a.Ma ? a.Ma.readyState : 0
  }
  _.Cy.prototype.getStatus = function () {
    try {
      return 2 < _.Ny(this) ? this.Ma.status : -1
    } catch (a) {
      return -1
    }
  }
  _.Py = function (a) {
    try {
      return a.Ma ? a.Ma.responseText : ''
    } catch (b) {
      return ''
    }
  }
  _.Qy = function (a) {
    try {
      if (!a.Ma) return null
      if ('response' in a.Ma) return a.Ma.response
      switch (a.wk) {
        case '':
        case 'text':
          return a.Ma.responseText
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in a.Ma)
            return a.Ma.mozResponseArrayBuffer
      }
      return null
    } catch (b) {
      return null
    }
  }
  _.Cy.prototype.getResponseHeader = function (a) {
    if (this.Ma && 4 == _.Ny(this))
      return (a = this.Ma.getResponseHeader(a)), null === a ? void 0 : a
  }
  _.Cy.prototype.getAllResponseHeaders = function () {
    return this.Ma && 4 == _.Ny(this)
      ? this.Ma.getAllResponseHeaders() || ''
      : ''
  }
  _.qi(function (a) {
    _.Cy.prototype.dB = a(_.Cy.prototype.dB)
  })

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var $t, qu, ku, uu, lu, nu, mu, ru, ou, vu
  _.Xt = function (a) {
    if (!(a instanceof Array)) {
      a = _.Da(a)
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      a = c
    }
    return a
  }
  _.Yt = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ _.hb()).toString(36)
    )
  }
  _.Zt = function (a, b) {
    var c = b || document
    return c.querySelectorAll && c.querySelector
      ? c.querySelectorAll('.' + a)
      : _.Pd(document, '*', a, b)
  }
  $t = function (a, b) {
    if (a) {
      a = a.split('&')
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf('='),
          e = null
        if (0 <= d) {
          var f = a[c].substring(0, d)
          e = a[c].substring(d + 1)
        } else f = a[c]
        b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '')
      }
    }
  }
  _.au = function (a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
      var f = a.charCodeAt(b - 1)
      if (38 == f || 63 == f)
        if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f))
          return b
      b += e + 1
    }
    return -1
  }
  _.bu = /#|$/
  _.cu = function (a, b) {
    var c = a.search(_.bu),
      d = _.au(a, 0, b, c)
    if (0 > d) return null
    var e = a.indexOf('&', d)
    if (0 > e || e > c) e = c
    d += b.length + 1
    return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, ' '))
  }
  _.du = function (a, b) {
    this.vc = this.Kf = this.Ue = ''
    this.Df = null
    this.Ky = this.qk = ''
    this.Xf = this.FI = !1
    var c
    a instanceof _.du
      ? ((this.Xf = void 0 !== b ? b : a.Xf),
        _.eu(this, a.Ue),
        _.fu(this, a.Kf),
        _.gu(this, a.vc),
        _.hu(this, a.Df),
        this.setPath(a.getPath()),
        _.iu(this, a.wd.clone()),
        this.Zi(a.Np()))
      : a && (c = String(a).match(_.lh))
      ? ((this.Xf = !!b),
        _.eu(this, c[1] || '', !0),
        _.fu(this, c[2] || '', !0),
        _.gu(this, c[3] || '', !0),
        _.hu(this, c[4]),
        this.setPath(c[5] || '', !0),
        _.iu(this, c[6] || '', !0),
        this.Zi(c[7] || '', !0))
      : ((this.Xf = !!b), (this.wd = new _.ju(null, this.Xf)))
  }
  _.du.prototype.toString = function () {
    var a = [],
      b = this.Ue
    b && a.push(ku(b, lu, !0), ':')
    var c = this.vc
    if (c || 'file' == b)
      a.push('//'),
        (b = this.Kf) && a.push(ku(b, lu, !0), '@'),
        a.push(_.jh(c).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        (c = this.Df),
        null != c && a.push(':', String(c))
    if ((c = this.getPath()))
      this.vc && '/' != c.charAt(0) && a.push('/'),
        a.push(ku(c, '/' == c.charAt(0) ? mu : nu, !0))
    ;(c = this.wd.toString()) && a.push('?', c)
    ;(c = this.Np()) && a.push('#', ku(c, ou))
    return a.join('')
  }
  _.du.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.Ue
    c ? _.eu(b, a.Ue) : (c = !!a.Kf)
    c ? _.fu(b, a.Kf) : (c = !!a.vc)
    c ? _.gu(b, a.vc) : (c = null != a.Df)
    var d = a.getPath()
    if (c) _.hu(b, a.Df)
    else if ((c = !!a.qk)) {
      if ('/' != d.charAt(0))
        if (this.vc && !this.qk) d = '/' + d
        else {
          var e = b.getPath().lastIndexOf('/')
          ;-1 != e && (d = b.getPath().substr(0, e + 1) + d)
        }
      e = d
      if ('..' == e || '.' == e) d = ''
      else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
        d = _.dd(e, '/')
        e = e.split('/')
        for (var f = [], g = 0; g < e.length; ) {
          var k = e[g++]
          '.' == k
            ? d && g == e.length && f.push('')
            : '..' == k
            ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
              d && g == e.length && f.push(''))
            : (f.push(k), (d = !0))
        }
        d = f.join('/')
      } else d = e
    }
    c ? b.setPath(d) : (c = a.hn())
    c ? _.iu(b, a.wd.clone()) : (c = !!a.Ky)
    c && b.Zi(a.Np())
    return b
  }
  _.du.prototype.clone = function () {
    return new _.du(this)
  }
  _.eu = function (a, b, c) {
    _.pu(a)
    a.Ue = c ? qu(b, !0) : b
    a.Ue && (a.Ue = a.Ue.replace(/:$/, ''))
    return a
  }
  _.fu = function (a, b, c) {
    _.pu(a)
    a.Kf = c ? qu(b) : b
    return a
  }
  _.gu = function (a, b, c) {
    _.pu(a)
    a.vc = c ? qu(b, !0) : b
    return a
  }
  _.hu = function (a, b) {
    _.pu(a)
    if (b) {
      b = Number(b)
      if (isNaN(b) || 0 > b) throw Error('K`' + b)
      a.Df = b
    } else a.Df = null
    return a
  }
  _.du.prototype.getPath = function () {
    return this.qk
  }
  _.du.prototype.setPath = function (a, b) {
    _.pu(this)
    this.qk = b ? qu(a, !0) : a
    return this
  }
  _.du.prototype.hn = function () {
    return '' !== this.wd.toString()
  }
  _.iu = function (a, b, c) {
    _.pu(a)
    b instanceof _.ju
      ? ((a.wd = b), a.wd.wC(a.Xf))
      : (c || (b = ku(b, ru)), (a.wd = new _.ju(b, a.Xf)))
    return a
  }
  _.du.prototype.Ta = function (a, b) {
    return _.iu(this, a, b)
  }
  _.du.prototype.getQuery = function () {
    return this.wd.toString()
  }
  _.su = function (a, b, c) {
    _.pu(a)
    a.wd.set(b, c)
    return a
  }
  _.du.prototype.Jg = function (a) {
    return this.wd.get(a)
  }
  _.du.prototype.Np = function () {
    return this.Ky
  }
  _.du.prototype.Zi = function (a, b) {
    _.pu(this)
    this.Ky = b ? qu(a) : a
    return this
  }
  _.du.prototype.removeParameter = function (a) {
    _.pu(this)
    this.wd.remove(a)
    return this
  }
  _.pu = function (a) {
    if (a.FI) throw Error('L')
  }
  _.du.prototype.wC = function (a) {
    this.Xf = a
    this.wd && this.wd.wC(a)
  }
  _.tu = function (a) {
    return a instanceof _.du ? a.clone() : new _.du(a, void 0)
  }
  qu = function (a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, '%2525'))
        : decodeURIComponent(a)
      : ''
  }
  ku = function (a, b, c) {
    return 'string' === typeof a
      ? ((a = encodeURI(a).replace(b, uu)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        a)
      : null
  }
  uu = function (a) {
    a = a.charCodeAt(0)
    return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
  }
  lu = /[#\/\?@]/g
  nu = /[#\?:]/g
  mu = /[#\?]/g
  ru = /[#\?@]/g
  ou = /#/g
  _.ju = function (a, b) {
    this.Vb = this.yc = null
    this.rf = a || null
    this.Xf = !!b
  }
  vu = function (a) {
    a.yc ||
      ((a.yc = new _.Ot()),
      (a.Vb = 0),
      a.rf &&
        $t(a.rf, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c)
        }))
  }
  _.h = _.ju.prototype
  _.h.Fb = function () {
    vu(this)
    return this.Vb
  }
  _.h.add = function (a, b) {
    vu(this)
    this.rf = null
    a = wu(this, a)
    var c = this.yc.get(a)
    c || this.yc.set(a, (c = []))
    c.push(b)
    this.Vb += 1
    return this
  }
  _.h.remove = function (a) {
    vu(this)
    a = wu(this, a)
    return this.yc.Pd(a)
      ? ((this.rf = null),
        (this.Vb -= this.yc.get(a).length),
        this.yc.remove(a))
      : !1
  }
  _.h.clear = function () {
    this.yc = this.rf = null
    this.Vb = 0
  }
  _.h.isEmpty = function () {
    vu(this)
    return 0 == this.Vb
  }
  _.h.Pd = function (a) {
    vu(this)
    a = wu(this, a)
    return this.yc.Pd(a)
  }
  _.h.Cj = function (a) {
    var b = this.Tc()
    return _.Xa(b, a)
  }
  _.h.forEach = function (a, b) {
    vu(this)
    this.yc.forEach(function (c, d) {
      _.lb(
        c,
        function (e) {
          a.call(b, e, d, this)
        },
        this
      )
    }, this)
  }
  _.h.re = function () {
    vu(this)
    for (
      var a = this.yc.Tc(), b = this.yc.re(), c = [], d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d])
    return c
  }
  _.h.Tc = function (a) {
    vu(this)
    var b = []
    if ('string' === typeof a)
      this.Pd(a) && (b = _.Uc(b, this.yc.get(wu(this, a))))
    else {
      a = this.yc.Tc()
      for (var c = 0; c < a.length; c++) b = _.Uc(b, a[c])
    }
    return b
  }
  _.h.set = function (a, b) {
    vu(this)
    this.rf = null
    a = wu(this, a)
    this.Pd(a) && (this.Vb -= this.yc.get(a).length)
    this.yc.set(a, [b])
    this.Vb += 1
    return this
  }
  _.h.get = function (a, b) {
    if (!a) return b
    a = this.Tc(a)
    return 0 < a.length ? String(a[0]) : b
  }
  _.h.setValues = function (a, b) {
    this.remove(a)
    0 < b.length &&
      ((this.rf = null),
      this.yc.set(wu(this, a), _.Vc(b)),
      (this.Vb += b.length))
  }
  _.h.toString = function () {
    if (this.rf) return this.rf
    if (!this.yc) return ''
    for (var a = [], b = this.yc.re(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = _.jh(d)
      d = this.Tc(d)
      for (var f = 0; f < d.length; f++) {
        var g = e
        '' !== d[f] && (g += '=' + _.jh(d[f]))
        a.push(g)
      }
    }
    return (this.rf = a.join('&'))
  }
  _.h.clone = function () {
    var a = new _.ju()
    a.rf = this.rf
    this.yc && ((a.yc = this.yc.clone()), (a.Vb = this.Vb))
    return a
  }
  var wu = function (a, b) {
    b = String(b)
    a.Xf && (b = b.toLowerCase())
    return b
  }
  _.ju.prototype.wC = function (a) {
    a &&
      !this.Xf &&
      (vu(this),
      (this.rf = null),
      this.yc.forEach(function (b, c) {
        var d = c.toLowerCase()
        c != d && (this.remove(c), this.setValues(d, b))
      }, this))
    this.Xf = a
  }
  _.ju.prototype.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      _.Wt(
        arguments[b],
        function (c, d) {
          this.add(d, c)
        },
        this
      )
  }

  var nB = function (a) {
      if (!a || 'function' !== typeof a)
        throw new mB('Must provide a function.')
      this.Ef = null
      this.NQ = a
    },
    oB = function (a) {
      return new _.Ik(function (b) {
        var c = a.length,
          d = []
        if (c)
          for (
            var e = function (k, l, m) {
                c--
                d[k] = l ? { Et: !0, value: m } : { Et: !1, reason: m }
                0 == c && b(d)
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), _.Pk(g, _.mi(e, f, !0), _.mi(e, f, !1))
        else b(d)
      })
    },
    pB,
    qB,
    rB,
    sB = {
      KE: function (a) {
        pB = a
        try {
          delete sB.KE
        } catch (b) {}
      },
      LE: function (a) {
        qB = a
        try {
          delete sB.LE
        } catch (b) {}
      },
      ME: function (a) {
        rB = a
        try {
          delete sB.ME
        } catch (b) {}
      },
    },
    tB = function (a) {
      return _.Ay(a.status)
    },
    uB = function () {
      var a = !0,
        b = _.ky(_.Xx)
      ;(b && void 0 !== b.withCredentials) || (a = !1)
      return a
    },
    vB = function (a, b) {
      if (null == b) return b
      b = String(b)
      b.match(/^\/\/.*/) &&
        (b = ('http:' == window.location.protocol ? 'http:' : 'https:') + b)
      b.match(/^\/([^\/].*)?$/) &&
        window.location.host &&
        String(window.location.protocol).match(/^https?:$/) &&
        (b = window.location.protocol + '//' + window.location.host + b)
      var c = b.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i)
      c &&
        window.location.host &&
        String(window.location.protocol).match(/^https?:$/) &&
        (b = c[1] + '//' + window.location.host + (c[3] || ''))
      b = b.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, '$1')
      b = b.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, '$1$2')
      b = b.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, '$1$2')
      b.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) &&
        (b = b.toLowerCase())
      c = _.R('client/rewrite')
      _.Ya(c) && Object.prototype.hasOwnProperty.call(c, b)
        ? (b = String(c[b] || b))
        : ((b = b.replace(
            /^(https?):\/\/www\.googleapis\.com$/,
            '$1://content.googleapis.com'
          )),
          (b = b.replace(
            /^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/,
            '$1://content-$2'
          )),
          b.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) ||
            (b = b.replace(
              /^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/,
              '$1://content-$2'
            )))
      a &&
        ((a = _.R('client/firstPartyRewrite')),
        _.Ya(a) && Object.prototype.hasOwnProperty.call(a, b)
          ? (b = String(a[b] || b))
          : ((b = b.replace(
              /^(https?):\/\/content\.googleapis\.com$/,
              '$1://clients6.google.com'
            )),
            (b = b.replace(
              /^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/,
              '$1://$2-googleapis.$3.google.com'
            )),
            (b = b.replace(
              /^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/,
              '$1://$2.clients6.google.com'
            )),
            (b = b.replace(
              /^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/,
              '$1://content-googleapis-$2.$3.google.com'
            ))))
      return b
    },
    mB = function (a) {
      _.Tc.call(this, a)
    }
  _.li(mB, _.Tc)
  mB.prototype.name = 'gapi.client.Error'
  nB.prototype.then = function (a, b, c) {
    this.Ef || (this.Ef = this.NQ())
    return this.Ef.then(a, b, c)
  }
  nB.prototype.fw = function (a) {
    this.Ef || (this.Ef = a)
  }
  var wB = function (a) {
      var b = {},
        c
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          var d = _.Sg(a, c)
          d && (c = _.Rg(c, d)) && _.Tg(b, c, d, !0)
        }
      return b
    },
    xB = {
      error: {
        code: -1,
        message:
          'A network error occurred and the request could not be completed.',
      },
    },
    yB = function (a, b, c, d) {
      _.Cy.call(this)
      this.Yc = a
      this.QA = b
      this.$c = c
      a = {}
      if (d)
        for (var e in d)
          Object.prototype.hasOwnProperty.call(d, e) &&
            ((b = _.Sg(d, e)),
            void 0 !== b && (e = _.Qg(e, b)) && _.Tg(a, e, b))
      d = {}
      for (e in a)
        Object.prototype.hasOwnProperty.call(a, e) &&
          (d[unescape(encodeURIComponent(e))] = unescape(
            encodeURIComponent(a[e])
          ))
      this.gq = d
      this.Ef = null
    }
  _.li(yB, _.Cy)
  yB.prototype.then = function (a) {
    this.Ef ||
      (this.Ef = new _.Ik(function (b, c) {
        this.V(
          'error',
          (0, _.Q)(function () {
            c(zB(this))
          }, this)
        )
        this.V(
          'success',
          (0, _.Q)(function () {
            b(zB(this))
          }, this)
        )
        this.send(this.Yc, this.QA, this.$c, this.gq)
      }, this).then(
        function (b) {
          b.headers = wB(b.headers)
          return b
        },
        function (b) {
          return b.status
            ? ((b.headers = wB(b.headers)), _.Nk(b))
            : _.Nk({
                result: xB,
                body:
                  '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null,
              })
        }
      ))
    return this.Ef.then.apply(this.Ef, arguments)
  }
  var zB = function (a) {
      var b = a.getStatus(),
        c = _.Py(a)
      var d = 204 == b ? !1 : '' == a.wk ? _.wf(c) : _.Qy(a)
      var e = a.getAllResponseHeaders()
      e = _.Ug(e, !1)
      try {
        var f = 2 < _.Ny(a) ? a.Ma.statusText : ''
      } catch (g) {
        f = ''
      }
      return { result: d, body: c, headers: e, status: b, statusText: f }
    },
    AB = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,
    BB = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,
    CB = /;\s*charset\s*=/i,
    DB = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,
    EB = function (a) {
      var b = []
      a = a.replace(DB, function (c) {
        b.push(_.Tz(c))
        return ''
      })
      if (a.length) throw Error('ra')
      return b.join('')
    },
    FB = function (a) {
      var b = a.headers
      if (b && 'base64' === _.Sg(b, 'X-Goog-Safety-Encoding')) {
        var c = EB(a.body),
          d = _.Sg(b, 'X-Goog-Safety-Content-Type')
        b['Content-Type'] = d
        if (d.match(AB) || (d.match(BB) && !d.match(CB))) c = _.qw(_.dh(c))
        _.Tg(b, 'X-Goog-Safety-Encoding')
        _.Tg(b, 'X-Goog-Safety-Content-Type')
        a.body = c
      }
    },
    GB = function (a, b, c) {
      c ||
        ((c = _.R('googleapis.config/proxy')) &&
          (c = String(c).replace(/\/static\/proxy\.html$/, '') || '/'),
        (c = String(c || '')))
      c ||
        ((c = _.R('googleapis.config/root')),
        b && (c = _.R('googleapis.config/root-1p') || c),
        (c = String(c || '')))
      c = String(vB(b, c) || c)
      return (a = _.vy(c, a))
    },
    HB = function (a, b) {
      var c = a.params || _.me()
      c.url = c.path
      var d = c.root
      d = GB('/', _.Nh(c.headers), d)
      d.match(/^(.*[^\/])?\/$/) && (d = d.substr(0, d.length - 1))
      c.root = d
      a.params = c
      _.ii.Ui('makeHttpRequests', [a], function (e, f) {
        e && e.gapiRequest
          ? (e.gapiRequest.data ? FB(e.gapiRequest.data) : FB(e), b(e, _.xf(e)))
          : b(e, f)
      })
    },
    IB = function (a) {
      var b = _.iy(a, 'params', 'headers')
      ;(b && 'object' === typeof b) || (b = {})
      a = {}
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = _.Sg(b, c)
          d && (_.Qg(c, d), _.Tg(a, c, d))
        }
      c = 'chrome-extension' == (window.location.href.match(_.lh)[1] || null)
      a = _.Nh(a)
      return !(c && a) && uB()
    },
    JB = function (a) {
      return new _.Ik(function (b, c) {
        var d = function (e) {
          e && e.gapiRequest ? (e = e.gapiRequest.data || e) : c(e)
          e = {
            result: 204 != e.status && _.wf(e.body),
            body: e.body,
            headers: e.headers || null,
            status: e.status || null,
            statusText: e.statusText || null,
          }
          tB(e) ? b(e) : c(e)
        }
        try {
          HB(a, d)
        } catch (e) {
          c(e)
        }
      })
    },
    KB = function (a) {
      var b = !_.R('client/cors') || !!_.R('client/xd4'),
        c = {}
      _.bm(a, function (d, e) {
        ;(d = _.Qg(e, d)) || b || (d = _.Pg(e))
        d && (e = _.Sg(a, d)) && _.Tg(c, d, e)
      })
      return c
    },
    LB = function (a) {
      var b = a.params || _.me()
      a = _.ok(b.headers || {})
      var c = b.httpMethod || 'GET',
        d = String(b.url || ''),
        e = encodeURIComponent('$unique')
      if (
        !(
          'POST' === c ||
          0 <= _.au(d, 0, '$unique', d.search(_.bu)) ||
          0 <= _.au(d, 0, e, d.search(_.bu))
        )
      ) {
        var f = []
        for (g in a)
          Object.prototype.hasOwnProperty.call(a, g) && f.push(g.toLowerCase())
        f.sort()
        f.push(_.pg(location.href))
        var g = f.join(':')
        f = _.Eh()
        f.update(g)
        g = f.Cg().toLowerCase().substr(0, 7)
        g = String((parseInt(g, 16) % 1e3) + 1e3).substr(1)
        d = _.ty(d, e, 'gc' + g)
      }
      e = b.body || null
      g = b.responseType || null
      b = _.Nh(a) || '1p' == b.authType
      f = !!_.R('googleapis.config/auth/useUberProxyAuth')
      _.Tg(a, 'X-Referer', void 0)
      a = KB(a)
      var k = new yB(d, c, e, a)
      k.df = b || f
      g && (k.wk = g)
      return new _.Ik(function (l, m) {
        k.then(
          function (n) {
            FB(n)
            l(n)
          },
          function (n) {
            m(n)
          }
        )
      })
    },
    MB = function (a, b) {
      var c = function (d) {
        d = _.ok(d)
        delete d.result
        d = { gapiRequest: { data: d } }
        b && b(d, _.xf(d))
      }
      LB(a).then(c, c)
    },
    NB = function (a, b) {
      ;(_.R('client/cors') || _.R('client/xd4')) && IB(a) ? MB(a, b) : HB(a, b)
    },
    OB = function (a) {
      this.Qc = a
      this.ef = !1
      this.promise = {
        then: (0, _.Q)(function (b, c, d) {
          this.ef || (this.ef = !0)
          this.Yq && !this.Wq
            ? this.Qc.resolve(this.Yq)
            : this.Wq && !this.Yq && this.Qc.reject(this.Wq)
          return this.Qc.promise.then(b, c, d)
        }, this),
      }
    }
  OB.prototype.resolve = function (a) {
    this.ef ? this.Qc.resolve(a) : this.Yq || this.Wq || (this.Yq = a)
  }
  OB.prototype.reject = function (a) {
    this.ef ? this.Qc.reject(a) : this.Yq || this.Wq || (this.Wq = a)
  }
  var PB = function (a) {
      a = _.oy(a.error)
      return { code: a.code, data: a.errors, message: a.message }
    },
    QB = function (a) {
      throw Error('ua`' + a)
    }
  var RB = function (a) {
    nB.call(this, RB.prototype.Sl)
    if (!a || ('object' != typeof a && 'string' != typeof a)) throw new mB('va')
    if ('string' === typeof a) {
      var b = {}
      b.path = a
    } else b = a
    if (!b.path) throw new mB('wa')
    this.Tg = {}
    this.Tg.path = b.path
    this.Tg.method = b.method || 'GET'
    this.Tg.params = b.params || {}
    this.Tg.headers = b.headers || {}
    this.Tg.body = b.body
    this.Tg.root = b.root
    this.Tg.responseType = b.responseType
    this.Tg.apiId = b.apiId
    this.Lk = b.authType || 'auto'
    this.uV = !!b.isXd4
    this.zI = !1
    this.Ph(this.Lk)
    this.yK = !1
  }
  _.li(RB, nB)
  RB.prototype.ue = function () {
    return this.Tg
  }
  RB.prototype.Ph = function (a) {
    this.Lk = a
    this.zI = '1p' === this.Lk
  }
  RB.prototype.Rp = function () {
    return this.zI
  }
  RB.prototype.Ni = function () {
    if (!this.yK) {
      this.yK = !0
      var a = this.Tg,
        b = (a.headers = a.headers || {}),
        c = [],
        d = []
      for (g in b)
        if (Object.prototype.hasOwnProperty.call(b, g)) {
          c.push(g)
          var e = g,
            f = _.Sg(b, e)
          f && (e = _.Qg(e, f) || _.Pg(e)) && d.push([e, f])
        }
      var g = 0
      for (e = c.length; g < e; ++g) delete b[c[g]]
      c = 0
      for (g = d.length; c < g; ++c) _.Tg(b, d[c][0], d[c][1])
      if (this.uV) d = '1p' == this.Lk
      else {
        d = b
        c = String(_.R('client/version', '1.1.0'))
        g = String(_.R('client/name', 'google-api-javascript-client'))
        g = !0 === SB[g] ? g : 'google-api-javascript-client'
        e = String(_.R('client/appName', ''))
        f = []
        e && (f.push(e), f.push(' '))
        f.push(g)
        c && (f.push('/'), f.push(c))
        _.Tg(d, 'X-JavaScript-User-Agent', f.join(''))
        _.Tg(b, 'X-Requested-With', 'XMLHttpRequest')
        d = _.Sg(b, 'Content-Type')
        a.body && !d && _.Tg(b, 'Content-Type', 'application/json')
        _.R('client/allowExecutableResponse') ||
          _.Tg(b, 'X-Goog-Encode-Response-If-Executable', 'base64')
        ;(d = _.Sg(b, 'Content-Type')) &&
          'application/json' == d.toLowerCase() &&
          !a.params.alt &&
          (a.params.alt = 'json')
        ;(d = a.body || null) && _.Ya(d) && (a.body = _.xf(d))
        a.key = a.id
        b = _.hi(b, void 0, this.Lk)
        d = _.Nh(b)
        if ((c = b) && window.navigator) {
          g = []
          for (e = 0; e < TB.length; e++)
            (f = window.navigator[TB[e]]) &&
              g.push(encodeURIComponent(TB[e]) + '=' + encodeURIComponent(f))
          _.Tg(c, 'X-ClientDetails', g.join('&'))
        }
        ;(c = _.R('client/apiKey')) &&
          void 0 === a.params.key &&
          (a.params.key = c)
        ;(c = _.R('client/trace')) && !a.params.trace && (a.params.trace = c)
      }
      'auto' == this.Lk &&
        (d
          ? this.Ph('1p')
          : (b = _.Sg(b, 'Authorization')) &&
            String(b).match(/^(Bearer|MAC)[ \t]/i)
          ? this.Ph('oauth2')
          : this.Ph('none'))
      if (
        (b = String(a.path || '').match(
          /^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i
        )) &&
        !a.root
      )
        if (
          ((a.root = String(b[1])),
          (a.path = String(b[2] || '/')),
          a.path.match(/^\/_ah\/api(\/.*)?$/))
        )
          (a.root += '/_ah/api'), (a.path = a.path.substr(8))
        else {
          b = _.R('googleapis.config/root')
          d && (b = _.R('googleapis.config/root-1p') || b)
          b = String(b || '')
          c = a.root + a.path
          if ((g = b && c.substr(0, b.length) === b))
            (g = _.tu(b)),
              (e = _.tu(c)),
              (g =
                ((!g.vc && !e.vc) || g.vc == e.vc) &&
                ((null == g.Df && null == e.Df) || g.Df == e.Df))
          g && ((a.path = c.substr(b.length)), (a.root = b))
        }
      b = a.params
      c = _.Gg(a.path)
      g = String(_.R('googleapis.config/xd3') || '')
      18 <= g.length &&
        '/static/proxy.html' == g.substring(g.length - 18) &&
        (g = g.substring(0, g.length - 18))
      g || (g = '/')
      e = _.Gg(g)
      if (g != e) throw Error('w')
      '/' != g.charAt(g.length - 1) && (g += '/')
      c = _.vy(g, c)
      _.ui(c, '/') && (c = c.substring(0, c.length - 1))
      g = _.me()
      for (var k in b)
        Object.prototype.hasOwnProperty.call(b, k) &&
          ((e = encodeURIComponent(k)), (g[e] = b[k]))
      c = _.ph(c, g)
      a.path = c
      a.root = vB(!!d, a.root)
      a.url = GB(a.path, !!d, a.root)
    }
  }
  var UB = function (a) {
    a.Ni()
    var b = a.Tg
    return {
      key: 'gapiRequest',
      params: {
        id: b.id,
        key: b.key,
        url: b.url,
        path: b.path,
        httpMethod: b.method,
        body: b.body || '',
        headers: b.headers || {},
        urlParams: {},
        root: b.root,
        authType: a.Lk,
      },
    }
  }
  RB.prototype.execute = function (a) {
    var b = UB(this)
    NB(b, function (c, d) {
      var e = c
      c.gapiRequest && (e = c.gapiRequest)
      e && e.data && (e = e.data)
      c = e instanceof Array ? e[0] : e
      if (204 != c.status && c.body)
        try {
          var f = _.wf(c.body)
        } catch (g) {}
      a && a(f, d)
    })
  }
  RB.prototype.Sl = function () {
    var a = UB(this)
    return (_.R('client/cors') || _.R('client/xd4')) && IB(a) ? LB(a) : JB(a)
  }
  RB.prototype.wh = function () {
    return this.Sl()
  }
  var TB = ['appVersion', 'platform', 'userAgent'],
    SB = { 'google-api-gwt-client': !0, 'google-api-javascript-client': !0 }
  RB.prototype.execute = RB.prototype.execute
  RB.prototype.then = RB.prototype.then
  RB.prototype.getPromise = RB.prototype.wh
  var VB = function (a) {
    if (!a || 'object' != typeof a) throw new mB('xa')
    if (!a.method) throw new mB('ya')
    this.Uv = a
  }
  VB.prototype.ql = function () {
    var a = this.Uv.transport
    return a ? a.root || null : null
  }
  VB.prototype.execute = function (a) {
    var b = qB()
    b.add(this, { id: 'gapiRpc', callback: this.Bq(a) })
    b.execute()
  }
  VB.prototype.Xu = function (a) {
    var b = this.Uv.method,
      c = String,
      d
    ;(d = this.Uv.apiVersion) ||
      ((d = String(b).split('.')[0]),
      (d =
        _.R('googleapis.config/versions/' + b) ||
        _.R('googleapis.config/versions/' + d) ||
        'v1'),
      (d = String(d)))
    a = { jsonrpc: '2.0', id: a, method: b, apiVersion: c(d) }
    ;(b = this.Uv.rpcParams) && (a.params = b)
    return a
  }
  VB.prototype.Bq = function (a) {
    return function (b, c) {
      if (b)
        if (b.error) {
          var d = b.error
          null == d.error && (d.error = _.ok(b.error))
        } else
          (d = b.result || b.data),
            _.Ya(d) && null == d.result && (d.result = _.ok(b.result || b.data))
      else d = !1
      a(d, c)
    }
  }
  VB.prototype.execute = VB.prototype.execute
  var XB = function (a, b) {
      this.sf = b || 0
      2 == this.sf
        ? ((b = null),
          null != a &&
            _.Ya(a) &&
            ((b = {}),
            (b.method = a.method),
            (b.rpcParams = a.rpcParams),
            (b.transport = a.transport),
            (b.root = a.root),
            (b.apiVersion = a.apiVersion),
            (b.authType = a.authType)),
          (this.lb = new VB(b)))
        : (0 == this.sf && (b = a && a.callback) && (a.callback = WB(b)),
          (b = null),
          null != a &&
            (_.Ya(a)
              ? ((b = {}),
                (b.path = a.path),
                (b.method = a.method),
                (b.params = a.params),
                (b.headers = a.headers),
                (b.body = a.body),
                (b.root = a.root),
                (b.responseType = a.responseType),
                (b.authType = a.authType),
                (b.apiId = a.apiId))
              : 'string' === typeof a && (b = a)),
          (this.lb = new RB(b)))
    },
    WB = function (a) {
      return function (b) {
        if (null != b && _.Ya(b) && b.error) {
          var c = PB(b)
          b = _.xf([{ id: 'gapiRpc', error: c }])
          c.error = _.oy(c)
        } else
          null == b && (b = {}),
            (c = _.oy(b)),
            (c.result = _.oy(b)),
            (b = _.xf([{ id: 'gapiRpc', result: b }]))
        a(c, b)
      }
    }
  _.h = XB.prototype
  _.h.getFormat = function () {
    return this.sf
  }
  _.h.execute = function (a) {
    this.lb.execute(a && 1 == this.sf ? WB(a) : a)
  }
  _.h.then = function (a, b, c) {
    2 == this.sf && QB('The "then" method is not available on this object.')
    return this.lb.then(a, b, c)
  }
  _.h.fw = function (a) {
    this.lb.fw && this.lb.fw(a)
  }
  _.h.ue = function () {
    if (this.lb.ue) return this.lb.ue()
  }
  _.h.Ni = function () {
    this.lb.ue && this.lb.Ni()
  }
  _.h.ql = function () {
    if (this.lb.ql) return this.lb.ql()
  }
  _.h.Xu = function (a) {
    if (this.lb.Xu) return this.lb.Xu(a)
  }
  _.h.Ph = function (a) {
    this.lb.Ph && this.lb.Ph(a)
  }
  _.h.Rp = function () {
    return this.lb.Rp()
  }
  _.h.wh = function () {
    if (this.lb.wh) return this.lb.wh()
  }
  XB.prototype.execute = XB.prototype.execute
  XB.prototype.then = XB.prototype.then
  XB.prototype.getPromise = XB.prototype.wh
  var YB = /<response-(.*)>/,
    ZB = /^application\/http(;.+$|$)/,
    $B = [
      'clients6.google.com',
      'content.googleapis.com',
      'www.googleapis.com',
    ],
    aC = function (a, b) {
      a = _.Sg(a, b)
      if (!a) throw new mB('za')
      return a
    },
    bC = function (a) {
      var b = void 0
      a = _.Da(a)
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value.ue().apiId
        if ('string' !== typeof c) return 'batch'
        if (void 0 === b) b = c
        else if (b != c) return 'batch'
      }
      b = _.R('client/batchPath/' + b) || 'batch/' + b.split(':').join('/')
      return String(b)
    },
    cC = function (a) {
      a = a.map(function (b) {
        return b.request
      })
      return bC(a)
    },
    dC = function (a, b) {
      var c = []
      a = a.ue()
      var d = function (f, g) {
          _.bm(f, function (k, l) {
            g.push(l + ': ' + k)
          })
        },
        e = {
          'Content-Type': 'application/http',
          'Content-Transfer-Encoding': 'binary',
        }
      e['Content-ID'] = '<' + b + '>'
      d(e, c)
      c.push('')
      c.push(a.method + ' ' + a.path)
      d(a.headers, c)
      c.push('')
      a.body && c.push(a.body)
      return c.join('\r\n')
    },
    gC = function (a, b) {
      a = eC(a, b)
      var c = {}
      _.zb(a, function (d, e) {
        c[e] = fC(d, e)
      })
      return c
    },
    fC = function (a, b) {
      return {
        result: a.result || a.body,
        rawResult: _.xf({ id: b, result: a.result || a.body }),
        id: b,
      }
    },
    eC = function (a, b) {
      a = (0, _.qb)(a)
      _.ui(a, '--') && (a = a.substring(0, a.length - 2))
      a = a.split(b)
      b = _.me()
      for (var c = 0; c < a.length; c++)
        if (a[c]) {
          var d
          if ((d = a[c])) {
            _.ui(d, '\r\n') && (d = d.substring(0, d.length - 2))
            if (d) {
              d = d.split('\r\n')
              for (
                var e = 0, f = { headers: {}, body: '' };
                e < d.length && '' == d[e];

              )
                e++
              for (f.outerHeaders = hC(d, e); e < d.length && '' != d[e]; ) e++
              e++
              var g = d[e++].split(' ')
              f.status = Number(g[1])
              f.statusText = g.slice(2).join(' ')
              for (f.headers = hC(d, e); e < d.length && '' != d[e]; ) e++
              e++
              f.body = d.slice(e).join('\r\n')
              FB(f)
              d = f
            } else d = null
            e = _.me()
            f = aC(d.outerHeaders, 'Content-Type')
            if (null == ZB.exec(f)) throw new mB('Ba`' + f)
            f = aC(d.outerHeaders, 'Content-ID')
            f = YB.exec(f)
            if (!f) throw new mB('Ca')
            e.id = decodeURIComponent(f[1].split('@')[0].replace(/^.*[+]/, ''))
            e.response = {
              status: d.status,
              statusText: d.statusText,
              headers: d.headers,
            }
            204 != d.status &&
              ((e.response.body = d.body), (e.response.result = _.wf(d.body)))
            d = e
          } else d = null
          d && d.id && (b[d.id] = d.response)
        }
      return b
    },
    hC = function (a, b) {
      for (var c = []; b < a.length && a[b]; b++) c.push(a[b])
      return _.Ug(c.join('\r\n'), !1)
    },
    iC = function (a, b, c) {
      a = a || b
      if (!a || 'https' !== _.tu(a).Ue)
        if (
          ((a = c
            ? _.R('googleapis.config/root-1p')
            : _.R('googleapis.config/root')),
          !a)
        )
          return !1
      a = vB(c, String(a)) || a
      return $B.includes(_.tu(a).vc)
    }
  var jC = function (a) {
    nB.call(this, jC.prototype.Sl)
    this.zi = {}
    this.Is = {}
    this.uk = []
    this.De = a
    this.JV = !!a
    this.OH = this.ku = !1
  }
  _.li(jC, nB)
  var kC = function (a, b) {
      a = _.Da(Object.values(a.zi))
      for (var c = a.next(); !c.done; c = a.next())
        if (
          c.value
            .map(function (d) {
              return d.id
            })
            .includes(b)
        )
          return !0
      return !1
    },
    lC = function (a) {
      ;(function (b) {
        setTimeout(function () {
          throw b
        })
      })(a)
    }
  jC.prototype.add = function (a, b) {
    var c = b || _.me()
    b = _.me()
    if (!a) throw new mB('Da`' + (_.ne(c, 'id') ? '"' + c.id + '" ' : ''))
    a.Ni()
    b.request = a
    var d = _.Sk()
    d = new OB(d)
    b.Pn = d
    a.fw(b.Pn.promise)
    d = a.ue().headers
    _.Nh(d) && (this.ku = !0)
    ;(d = String((d || {}).Authorization || '') || null) &&
      d.match(/^Bearer|MAC[ \t]/i) &&
      (this.OH = !0)
    d = a.ue().root
    if (!this.JV) {
      if (d && this.De && d != this.De) throw new mB('Ea')
      this.De = d || this.De
    }
    if (_.ne(c, 'id')) {
      d = c.id
      if (kC(this, d)) throw new mB('Fa`' + d)
      b.id = d
    } else {
      do b.id = String(Math.round(2147483647 * _.ai()))
      while (kC(this, b.id))
    }
    b.callback = c.callback
    c = 'batch'
    iC(this.De, a.ue().path, this.ku) && (c = cC([b]))
    this.zi[c] = this.zi[c] || []
    this.zi[c].push(b)
    this.Is[b.id] = b
    return b.id
  }
  var mC = function (a) {
    var b = [],
      c = iC(a.De, void 0, a.ku)
    1 < Object.entries(a.zi).length &&
      _.Df(
        'Heterogeneous batch requests are deprecated. See https://developers.googleblog.com/2018/03/discontinuing-support-for-json-rpc-and.html'
      )
    for (
      var d = _.Da(Object.entries(a.zi)), e = d.next();
      !e.done;
      e = d.next()
    ) {
      e = _.Da(e.value)
      var f = e.next().value
      e = e.next().value
      for (var g = !0, k = _.Da(e), l = k.next(); !l.done; l = k.next())
        (l = l.value),
          l.request.Ni(),
          'batch' === f &&
            c &&
            ((g = !1),
            (l.kV = !0),
            (l.request.ue.root = a.De),
            b.push(l.request),
            a.uk.push([l]))
      if (g) {
        f = a.De
        g = a.ku
        k = a.OH
        l =
          'batch' +
          String(Math.round(2147483647 * _.ai())) +
          String(Math.round(2147483647 * _.ai()))
        var m = '--' + l
        l = 'multipart/mixed; boundary=' + l
        for (
          var n = { path: cC(e), method: 'POST' }, r = [], u = 0;
          u < e.length;
          u++
        )
          r.push(
            dC(
              e[u].request,
              [
                m.substr(m.indexOf('--') + 2),
                '+',
                encodeURIComponent(e[u].id)
                  .split('(')
                  .join('%28')
                  .split(')')
                  .join('%29')
                  .split('.')
                  .join('%2E'),
                '@googleapis.com',
              ].join('')
            )
          )
        n.body =
          [m, r.join('\r\n' + m + '\r\n'), m + '--'].join('\r\n') + '\r\n'
        n.root = f || null
        _.R('client/xd4') && uB()
          ? ((n.isXd4 = !0),
            (n.params = { $ct: l }),
            (n.headers = {}),
            _.Tg(n.headers, 'Content-Type', 'text/plain; charset=UTF-8'),
            g ? (n.authType = '1p') : k && (n.authType = 'oauth2'),
            (f = new RB(n)))
          : ((n.headers = {}), _.Tg(n.headers, 'Content-Type', l), (f = rB(n)))
        b.push(f)
        a.uk.push(e)
      }
    }
    return b
  }
  jC.prototype.execute = function (a) {
    if (!(1 > Object.keys(this.zi).length)) {
      var b = this.Bq(a)
      a = mC(this)
      var c = [],
        d = a.map(function (e) {
          return new _.Ik(function (f) {
            try {
              e.execute(function (g, k) {
                return f({ IE: g, eX: k })
              })
            } catch (g) {
              c.push(g), f({ IE: { Et: !1, reason: g } })
            }
          })
        })
      if (0 < c.length && c.length === a.length) throw c[0]
      _.Qk(d).then(function (e) {
        var f = e.map(function (g) {
          return g.eX
        })
        e = e.map(function (g) {
          return g.IE
        })
        b(e, f)
      })
    }
  }
  jC.prototype.Sl = function () {
    var a = this
    if (1 > Object.keys(this.zi).length) return _.Mk({})
    var b = mC(this).map(function (c) {
      return new _.Ik(function (d, e) {
        return c.wh().then(d, e)
      })
    })
    return oB(b).then(function (c) {
      c = c.map(function (d) {
        return d.Et ? d.value : d
      })
      return nC(a, c, !0)
    })
  }
  var nC = function (a, b, c, d, e) {
      for (var f = !1, g = {}, k, l = 0, m = 0; m < b.length; m++) {
        var n = b[m]
        if (!1 === n.Et) {
          l++
          b[m] = n.reason
          for (
            var r = oC([b[m]]), u = _.Da(a.uk[m]), q = u.next();
            !q.done;
            q = u.next()
          )
            g[q.value.id] = r
        } else {
          if (1 > a.uk[m].length) throw new mB('Ha')
          try {
            var v = !(1 === a.uk[m].length && a.uk[m][0].kV),
              t = a.uk[m][0].id
            if (!c) {
              q = n
              var w = d[m]
              r = q
              if (w && (!r || !v)) {
                var y = _.wf(w)
                y &&
                  ((r = y.gapiRequest ? y.gapiRequest.data : y),
                  !v && q && (r.body = q))
              }
              if (!r) throw new mB('Ja')
              n = r
            }
            q = void 0
            if ((r = n)) {
              var A = r.headers
              if (A) {
                var B = _.me()
                for (q in A)
                  if (Object.prototype.hasOwnProperty.call(A, q)) {
                    var x = _.Sg(A, q)
                    _.Tg(B, q, x, !0)
                  }
                r.headers = B
              }
            }
            if (
              v &&
              0 != aC(n.headers, 'Content-Type').indexOf('multipart/mixed')
            )
              throw new mB('Ia')
            k = k || _.oy(n)
            var K = tB(n)
            K &&
              !tB(k) &&
              ((k.status = n.status), (k.statusText = n.statusText))
            if (K || c || !v) {
              f = !0
              q = Object
              var O = q.assign
              r = g
              u = a
              var W = n,
                J = c
              n = {}
              if (v) {
                J = J ? eC : gC
                var H = aC(W.headers, 'Content-Type').split('boundary=')[1]
                if (!H) throw new mB('Aa')
                n = J(W.body, '--' + H)
              } else
                J ? ((W.result = _.wf(W.body)), (n[t] = W)) : (n[t] = fC(W, t))
              W = {}
              for (
                var V = _.Da(Object.entries(n)), ra = V.next();
                !ra.done;
                ra = V.next()
              ) {
                var sa = _.Da(ra.value),
                  xa = sa.next().value,
                  Fa = sa.next().value
                W[xa] = Fa
                if (!u.Is[xa]) throw new mB('Ga`' + xa)
              }
              g = O.call(q, r, W)
            }
          } catch (Ja) {
            for (
              l++, b[m] = Ja, r = oC([Ja]), u = _.Da(a.uk[m]), q = u.next();
              !q.done;
              q = u.next()
            )
              g[q.value.id] = r
          }
        }
      }
      if (l === b.length) {
        d = oC(b)
        g = _.xf(d)
        k = 0
        a = Array.from(Object.values(a.zi)).flat()
        f = _.Da(a)
        for (l = f.next(); !l.done; l = f.next())
          if (((l = l.value), c)) l.Pn.reject(d)
          else if (l.callback)
            try {
              k++, l.callback(d, g)
            } catch (Ja) {
              lC(Ja)
            }
        if (e)
          try {
            e(d, g)
          } catch (Ja) {
            lC(Ja)
          }
        else if (k !== a.length) throw 1 === b.length ? b[0] : d
      } else {
        if (f)
          for (f = _.Da(Object.entries(g)), l = f.next(); !l.done; l = f.next())
            if (
              ((l = _.Da(l.value)),
              (m = l.next().value),
              (l = l.next().value),
              c)
            )
              (m = a.Is[m]), l && tB(l) ? m.Pn.resolve(l) : m.Pn.reject(l)
            else if (((m = a.Is[m]), m.callback)) {
              if (l && l.rawResult)
                try {
                  delete l.rawResult
                } catch (Ja) {}
              try {
                m.callback(l || !1, _.xf(l))
              } catch (Ja) {
                lC(Ja)
              }
            }
        k.result = g || {}
        k.body = 1 === b.length ? k.body : ''
        if (e)
          try {
            e(g || null, 1 === d.length ? d[0] : null)
          } catch (Ja) {
            lC(Ja)
          }
        return k
      }
    },
    oC = function (a) {
      var b = {
        error: {
          code: 0,
          message: 'The batch request could not be fulfilled.  ',
        },
      }
      a = _.Da(a)
      for (var c = a.next(); !c.done; c = a.next())
        ((c = c.value) && c.message) || (c instanceof Error && c.message)
          ? (b.error.message +=
              (c.message || (c instanceof Error && c.message)) + '  ')
          : c &&
            c.error &&
            c.error.message &&
            ((b.error.message += c.error.message + '  '),
            (b.error.code = c.error.code || b.error.code || 0))
      b.error.message = b.error.message.trim()
      return {
        result: b,
        body: _.xf(b),
        headers: null,
        status: null,
        statusText: null,
      }
    }
  jC.prototype.Bq = function (a) {
    var b = this
    return function (c, d) {
      b.qx(c, d, a)
    }
  }
  jC.prototype.qx = function (a, b, c) {
    nC(this, a, !1, b, c)
  }
  jC.prototype.add = jC.prototype.add
  jC.prototype.execute = jC.prototype.execute
  jC.prototype.then = jC.prototype.then
  var pC = function () {
    this.Ij = []
    this.De = this.Pc = null
  }
  pC.prototype.add = function (a, b) {
    b = b || {}
    var c = {},
      d = Object.prototype.hasOwnProperty
    if (a) c.rpc = a
    else throw new mB('Da`' + (d.call(b, 'id') ? '"' + b.id + '" ' : ''))
    if (d.call(b, 'id')) {
      a = b.id
      for (d = 0; d < this.Ij.length; d++)
        if (this.Ij[d].id == a) throw new mB('Fa`' + a)
      c.id = a
    } else {
      do c.id = String((2147483647 * _.ai()) | 0)
      while (d.call(this.Ij, c.id))
    }
    c.callback = b.callback
    this.Ij.push(c)
    return c.id
  }
  var qC = function (a) {
    return function (b) {
      var c = b.body
      if ((b = b.result)) {
        for (var d = {}, e = 0, f = b.length; e < f; ++e) d[b[e].id] = b[e]
        a(d, c)
      } else a(b, c)
    }
  }
  pC.prototype.execute = function (a) {
    this.Pc = []
    for (var b, c, d = 0; d < this.Ij.length; d++)
      (b = this.Ij[d]),
        (c = b.rpc),
        this.Pc.push(c.Xu(b.id)),
        (this.De = c.ql() || this.De)
    c = this.Bq(a)
    a = { requests: this.Pc, root: this.De }
    b = {}
    d = a.headers || {}
    for (var e in d) {
      var f = e
      if (Object.prototype.hasOwnProperty.call(d, f)) {
        var g = _.Sg(d, f)
        g && (f = _.Qg(f, g) || _.Pg(f)) && _.Tg(b, f, g)
      }
    }
    _.Tg(b, 'Content-Type', 'application/json')
    e = qC(c)
    rB({
      method: 'POST',
      root: a.root || void 0,
      path: '/rpc',
      params: a.urlParams,
      headers: b,
      body: a.requests || [],
    }).then(e, e)
  }
  pC.prototype.Bq = function (a) {
    var b = this
    return function (c, d) {
      b.qx(c, d, a)
    }
  }
  pC.prototype.qx = function (a, b, c) {
    a || (a = {})
    for (var d = 0; d < this.Ij.length; d++) {
      var e = this.Ij[d]
      e.callback && e.callback(a[e.id] || !1, b)
    }
    c && c(a, b)
  }
  sB.LE(function () {
    return new pC()
  })
  pC.prototype.add = pC.prototype.add
  pC.prototype.execute = pC.prototype.execute
  var rC = function (a, b) {
    this.JW = a
    this.sf = b || null
    this.Mo = null
  }
  rC.prototype.kA = function (a) {
    this.sf = a
    this.Mo = 2 == this.sf ? new pC() : new jC(this.JW)
  }
  rC.prototype.add = function (a, b) {
    if (!a)
      throw (
        ((a = b || _.me()),
        new mB('Da`' + (_.ne(a, 'id') ? '"' + a.id + '" ' : '')))
      )
    null === this.sf && this.kA(a.getFormat())
    this.sf !== a.getFormat() && QB('Unable to add item to batch.')
    var c = b && b.callback
    1 == this.sf &&
      c &&
      (b.callback = function (d) {
        d = sC(d)
        var e = _.xf([d])
        c(d, e)
      })
    return this.Mo.add(a, b)
  }
  rC.prototype.execute = function (a) {
    var b =
      a && 1 == this.sf
        ? function (c) {
            var d = []
            _.bm(c, function (f, g) {
              f = sC(f)
              c[g] = f
              d.push(f)
            })
            var e = _.xf(d)
            a(c, e)
          }
        : a
    this.Mo && this.Mo.execute(b)
  }
  var sC = function (a) {
    var b = a ? _.iy(a, 'result') : null
    _.Ya(b) && null != b.error && ((b = PB(b)), (a = { id: a.id, error: b }))
    return a
  }
  rC.prototype.then = function (a, b, c) {
    2 == this.sf && QB('The "then" method is not available on this object.')
    return this.Mo.then(a, b, c)
  }
  rC.prototype.add = rC.prototype.add
  rC.prototype.execute = rC.prototype.execute
  rC.prototype.then = rC.prototype.then
  var tC = function (a) {
    nB.call(this, tC.prototype.Sl)
    this.lb = a
  }
  _.li(tC, nB)
  var uC = function (a) {
    a.lb.Ni()
    var b = a.lb,
      c = b.ue()
    return !(iC(c.root, c.path, a.lb.Rp()) ? 'batch' !== bC([b]) : 1)
  }
  _.h = tC.prototype
  _.h.execute = function (a) {
    var b = this
    if (uC(this)) this.lb.execute(a)
    else {
      var c = function (d) {
        if ('function' === typeof a) {
          var e = {
            gapiRequest: {
              data: {
                status: d && d.status,
                statusText: d && d.statusText,
                headers: d && d.headers,
                body: d && d.body,
              },
            },
          }
          if (1 === b.getFormat()) {
            a = WB(a)
            var f = {}
          }
          var g = d ? d.result : !1
          d && 204 == d.status && ((g = f), delete e.gapiRequest.data.body)
          a(g, _.xf(e))
        }
      }
      this.wh().then(c, c)
    }
  }
  _.h.Sl = function () {
    return uC(this)
      ? this.lb.wh()
      : new _.Ik(function (a, b) {
          var c = pB(),
            d = c.add(this.lb, { id: 'gapiRequest' })
          c.then(function (e) {
            var f = e.result
            if (f && (f = f[d])) {
              Object.prototype.hasOwnProperty.call(f, 'result') ||
                (f.result = !1)
              Object.prototype.hasOwnProperty.call(f, 'body') || (f.body = '')
              tB(f) ? a(f) : b(f)
              return
            }
            b(e)
          }, b)
        }, this)
  }
  _.h.ue = function () {
    if (this.lb.ue) return this.lb.ue()
  }
  _.h.Ni = function () {
    this.lb.Ni && this.lb.Ni()
  }
  _.h.ql = function () {
    if (this.lb.ql) return this.lb.ql()
  }
  _.h.Ph = function (a) {
    this.lb.Ph && this.lb.Ph(a)
  }
  _.h.Rp = function () {
    return this.lb.Rp()
  }
  _.h.getFormat = function () {
    return this.lb.getFormat ? this.lb.getFormat() : 0
  }
  _.h.wh = function () {
    return this.Sl()
  }
  tC.prototype.execute = tC.prototype.execute
  tC.prototype.then = tC.prototype.then
  tC.prototype.getPromise = tC.prototype.wh
  var vC =
      '/rest?fields=' +
      encodeURIComponent(
        'kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id'
      ) +
      '&pp=0',
    wC = function (a, b) {
      return (
        '/discovery/v1/apis/' +
        (encodeURIComponent(a) + '/' + encodeURIComponent(b) + vC)
      )
    },
    yC = function (a, b, c, d) {
      if (_.Ya(a)) {
        var e = a
        var f = a.name
        a = a.version || 'v1'
      } else (f = a), (a = b)
      if (!f || !a) throw new mB('Ka')
      var g = c || function () {},
        k = _.Ya(d) ? d : {}
      c = function (l) {
        var m = l && l.result
        if (!m || m.error || !m.name || !l || l.error || l.message || l.message)
          g(
            m && m.error
              ? m
              : l && (l.error || l.message || l.message)
              ? l
              : new mB('La')
          )
        else {
          l = k.root
          l = null != m.rootUrl ? String(m.rootUrl) : l
          l = 'string' === typeof l ? l.replace(/([^\/])\/$/, '$1') : void 0
          k.root = l
          m.name && m.version && !m.id && (m.id = [m.name, m.version].join(':'))
          m.id &&
            ((k.apiId = m.id),
            (l = 'client/batchPath/' + m.id),
            m.batchPath && !_.R(l) && _.Ge(l, m.batchPath))
          var n = m.servicePath,
            r = m.parameters,
            u = function (v) {
              _.bm(v, function (t) {
                if (!(t && t.id && t.path && t.httpMethod)) throw new mB('va')
                var w = t.id.split('.'),
                  y = window.gapi.client,
                  A
                for (A = 0; A < w.length - 1; A++) {
                  var B = w[A]
                  y[B] = y[B] || {}
                  y = y[B]
                }
                var x, K
                k &&
                  (k.hasOwnProperty('root') && (x = k.root),
                  k.hasOwnProperty('apiId') && (K = k.apiId))
                B = window.gapi.client[w[0]]
                B.HD ||
                  (B.HD = { servicePath: n || '', parameters: r, apiId: K })
                w = w[A]
                y[w] ||
                  (y[w] = _.mi(
                    xC,
                    {
                      path: 'string' === typeof t.path ? t.path : null,
                      httpMethod:
                        'string' === typeof t.httpMethod ? t.httpMethod : null,
                      parameters: t.parameters,
                      parameterName: (t.request || {}).parameterName || '',
                      request: t.request,
                      root: x,
                    },
                    B.HD
                  ))
              })
            },
            q = function (v) {
              _.bm(v, function (t) {
                u(t.methods)
                q(t.resources)
              })
            }
          q(m.resources)
          u(m.methods)
          g.call()
        }
      }
      e
        ? c({ result: e })
        : 0 < f.indexOf('://')
        ? rB({
            path: f,
            params: {
              pp: 0,
              fields:
                0 <= ('/' + f).indexOf('/discovery/v1/apis/')
                  ? 'kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id'
                  : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]',
            },
          }).then(c, c)
        : rB({ path: wC(f, a), root: d && d.root }).then(c, c)
    },
    xC = function (a, b, c, d) {
      var e = b.servicePath || ''
      _.dd(e, '/') || (e = '/' + e)
      var f = zC(a.path, [a.parameters, b.parameters], c || {})
      c = f.rk
      var g = f.e_
      e = _.vy(e, f.path)
      f = g.root
      delete g.root
      var k = a.parameterName
      !k && 1 == _.my(g) && g.hasOwnProperty('resource') && (k = 'resource')
      if (k) {
        var l = g[k]
        delete g[k]
      }
      null == l && (l = d)
      null == l && a.request && (_.wi(g) && (g = void 0), (l = g))
      k = {}
      var m = a.httpMethod
      'GET' == m &&
        void 0 !== l &&
        '' != String(l) &&
        (_.Tg(k, 'X-HTTP-Method-Override', m), (m = 'POST'))
      if ((null == l || null != d) && g)
        for (var n in g) 'string' === typeof g[n] && (c[n] = g[n])
      return rB(
        {
          path: e,
          method: m,
          params: c,
          headers: k,
          body: l,
          root: f || a.root,
          apiId: b.apiId,
        },
        1
      )
    },
    zC = function (a, b, c) {
      c = _.ok(c)
      var d = {}
      _.am(b, function (e) {
        _.bm(e, function (f, g) {
          var k = f.required
          if ('path' == f.location)
            if (Object.prototype.hasOwnProperty.call(c, g))
              -1 != a.indexOf('{' + g + '}')
                ? ((f = _.jh(c[g])), (a = a.replace('{' + g + '}', f)))
                : -1 != a.indexOf('{+' + g + '}') &&
                  ((f = encodeURI(String(c[g]))),
                  (a = a.replace('{+' + g + '}', f))),
                delete c[g]
            else {
              if (k) throw new mB('Ma`' + g)
            }
          else
            'query' == f.location &&
              Object.prototype.hasOwnProperty.call(c, g) &&
              ((d[g] = c[g]), delete c[g])
        })
      })
      if ((b = c.trace)) (d.trace = b), delete c.trace
      return { path: a, rk: d, e_: c }
    }
  var AC = function (a, b, c, d) {
      var e = b || 'v1',
        f = _.Ya(d) ? d : { root: d }
      if (c)
        yC(
          a,
          e,
          function (g) {
            if (g)
              if (g.error) c(g)
              else {
                var k = 'API discovery was unsuccessful.'
                if (g.message || g.message) k = g.message || g.message
                c({ error: k, code: 0 })
              }
            else c()
          },
          f
        )
      else
        return new _.Ik(function (g, k) {
          var l = function (m) {
            m ? k(m) : g()
          }
          try {
            yC(a, e, l, f)
          } catch (m) {
            k(m)
          }
        })
    },
    BC = new RegExp(
      /^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source +
        /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source
    ),
    CC = function (a, b) {
      if (!a) throw new mB('va')
      var c = 'object' === typeof a ? a : { path: a }
      a = c.callback
      delete c.callback
      b = new XB(c, b)
      if ((c = !!_.R('client/xd4') && uB())) {
        var d = b.ue()
        c = d.path
        ;(d = d.root) && '/' !== d.charAt(d.length - 1) && (d += '/')
        d && c && c.substr(0, d.length) === d && (c = c.substr(d.length))
        c = !c.match(BC)
      }
      c && (b = new tC(b))
      return a ? (b.execute(a), null) : b
    }
  sB.ME(function (a) {
    return CC.apply(null, arguments)
  })
  var DC = function (a, b) {
      if (!a) throw new mB('va')
      for (
        var c = a.split('.'), d = window.gapi.client, e = 0;
        e < c.length - 1;
        e++
      ) {
        var f = c[e]
        d[f] = d[f] || {}
        d = d[f]
      }
      c = c[c.length - 1]
      if (!d[c]) {
        var g = b || {}
        d[c] = function (k) {
          var l = 'string' == typeof g ? g : g.root
          k && k.root && (l = k.root)
          return new XB(
            {
              method: a,
              apiVersion: g.apiVersion,
              rpcParams: k,
              transport: { name: 'googleapis', root: l },
            },
            2
          )
        }
      }
    },
    EC = function (a) {
      return new rC(a)
    }
  sB.KE(function (a) {
    return EC.apply(null, arguments)
  })
  var FC = function (a) {
    if (_.Ih.JSONRPC_ERROR_MOD) throw new mB('Na`' + a)
    _.Bf(
      a +
        ' is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs'
    )
  }
  _.L('gapi.client.init', function (a) {
    a.apiKey && _.Ge('client/apiKey', a.apiKey)
    var b = _.nb(a.discoveryDocs || [], function (d) {
      return AC(d)
    })
    if ((a.clientId || a.client_id) && a.scope) {
      var c = new _.Ik(function (d, e) {
        var f = function () {
          _.D.gapi.auth2.init.call(_.D.gapi.auth2, a).then(function () {
            d()
          }, e)
        }
        _.D.gapi.load('auth2', {
          callback: function () {
            f()
          },
          onerror: function (g) {
            e(g || Error('Oa'))
          },
        })
      })
      b.push(c)
    } else (a.clientId || a.client_id || a.scope) && _.Bf('client_id and scope must both be provided to initialize OAuth.')
    return _.Qk(b).then(function () {})
  })
  _.L('gapi.client.load', AC)
  _.L('gapi.client.newBatch', EC)
  _.L('gapi.client.newRpcBatch', function () {
    FC('gapi.client.newRpcBatch')
    return EC()
  })
  _.L('gapi.client.newHttpBatch', function (a) {
    FC('gapi.client.newHttpBatch')
    return new rC(a, 0)
  })
  _.L('gapi.client.register', function (a, b) {
    FC('gapi.client.register')
    var c
    b && (c = { apiVersion: b.apiVersion, root: b.root })
    DC(a, c)
  })
  _.L('gapi.client.request', CC)
  _.L('gapi.client.rpcRequest', function (a, b, c) {
    FC('gapi.client.rpcRequest')
    if (!a) throw new mB('Pa')
    return new XB(
      {
        method: a,
        apiVersion: b,
        rpcParams: c,
        transport: { name: 'googleapis', root: (c && c.root) || '' },
      },
      2
    )
  })
  _.L('gapi.client.setApiKey', function (a) {
    _.Ge('client/apiKey', a)
    _.Ge('googleapis.config/developerKey', a)
  })
  _.L('gapi.client.setApiVersions', function (a) {
    FC('gapi.client.setApiVersions')
    _.Ge('googleapis.config/versions', a)
  })
  _.L('gapi.client.getToken', function (a) {
    return _.Qh(a)
  })
  _.L('gapi.client.setToken', function (a, b) {
    a ? _.tw(a, b) : _.uw(b)
  })
  _.L('gapi.client.AuthType', {
    R_: 'auto',
    NONE: 'none',
    K3: 'oauth2',
    K1: '1p',
  })
  _.L('gapi.client.AuthType.AUTO', 'auto')
  _.L('gapi.client.AuthType.NONE', 'none')
  _.L('gapi.client.AuthType.OAUTH2', 'oauth2')
  _.L('gapi.client.AuthType.FIRST_PARTY', '1p')
})
// Google Inc.

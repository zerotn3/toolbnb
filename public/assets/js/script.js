/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 19, 2017
 */
$(document).ready(function () {
  var btn = $('.btn-overflow');
  // var text = $('.text-overflow').first();
  // var h = text[0].scrollHeight;
  //
  // if (h > 150) {
  //   btn.addClass('less');
  //   btn.css('display', 'block');
  // }

  btn.click(function (e) {
    e.stopPropagation();
    var text = $(this).parent().prev();
    var h = text[0].scrollHeight;

    if ($(this).hasClass('less')) {
      $(this).removeClass('less');
      $(this).addClass('more');
      $(this).html($('<span>Ẩn bớt đi</span> <i class="fa fa-angle-up"></i>'));

      text.animate({ 'height': h });
    } else {
      $(this).addClass('less');
      $(this).removeClass('more');
      $(this).html($('<span>Xem thêm</span> <i class="fa fa-angle-down"></i>'));
      text.animate({ 'height': '150px' });
    }
  });

  var menu = $('[data-menu]').find('li');
  menu.on('click', function () {
    $('[data-menu]').find('li').removeClass('active');
    $(this).addClass('active');
  });
  if ($('.wrap-success')) {
    setTimeout(function () {
      $('.wrap-success').addClass('hidden');
    }, 4000);
  }
  $('.btn-study').on('click', function (e) {
    e.preventDefault();
    $('.info-study').removeClass('hidden');
  });
  var toTop = $('#totop');
  if (toTop.length) {
    toTop.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });
  }
  $(window).on('scroll', function () {
    var y = $(window).scrollTop();
    $('#home').addClass('sticky');
    if (y >= 200) {
      $('.block-register').css('opacity', 1);
    } else {
      $('.block-register').css('opacity', 0);
      $('#home').removeClass('sticky');
    }
  });
  var formRegisHeight = $('.form-regis').outerHeight();
  $('.border-div').css('height', formRegisHeight);
  if ($(window).width() >= 992) {
    var setHeight = $('[data-set-height]'),
      maxHeight = 0;
    setHeight.each(function () {
      maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });
    setHeight.css('height', maxHeight);

    var setHeight2 = $('[data-set-height2]'),
      maxHeight2 = 0;
    setHeight2.each(function () {
      maxHeight2 = Math.max(maxHeight2, $(this).outerHeight());
    });
    setHeight2.css('height', maxHeight2);
  }
  if ($(window).width() <= 480) {
    $('.video-block').find('iframe').css('height', 250);
  }
  var position = { lat: 10.771800692324604, lng: 106.70225191567188 };
  var map = new google.maps.Map(document.getElementById('mapGoogle'), {
    zoom: 20,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
  $('#fb-coment').append('<div class="fb-comments" data-href="https://facebook.com/buitanbao/" data-width="300" data-height="200" data-numposts="1"></div>');
});
!function (t, e, n) {
  "use strict";
  function i(e, n) {
    this.element = t(e), this.options = t.extend({}, t.fn[o].defaults, this.element.data(), n), this.init()
  }

  var o = "scroll-to", s = t("html, body");
  i.prototype = {
    init: function () {
      var e = this, n = t(e.element.attr("href")), i = t(".home").height();
      n.length && e.element.on("click.scrollTo", function (t) {
        t.preventDefault(), s.animate({ scrollTop: n.offset().top - i }, 500)
      })
    }, destroy: function () {
      t.removeData(this.element[0], o)
    }
  }, t.fn[o] = function (e, n) {
    return this.each(function () {
      var s = t.data(this, o);
      s ? s[e] && s[e](n) : t.data(this, o, new i(this, e))
    })
  }, t.fn[o].defaults = {}, t(function () {
    t("[data-" + o + "]")[o]()
  })
}(jQuery, window), function (t, e, n) {
  "use strict";
  function i(e, n) {
    this.element = t(e), this.options = t.extend({}, t.fn[o].defaults, this.element.data(), n), this.init()
  }

  var o = "height-full", s = t(e);
  i.prototype = {
    init: function () {
      var n = this, i = n.element;
      s.on("resize." + o, function () {
        var n = t("#home").outerHeight();
        i.css({ height: t(e).height() - n, "margin-top": n })
      }).trigger("resize")
    }, destroy: function () {
      t.removeData(this.element[0], o)
    }
  }, t.fn[o] = function (e, n) {
    return this.each(function () {
      var s = t.data(this, o);
      s ? s[e] && s[e](n) : t.data(this, o, new i(this, e))
    })
  }, t.fn[o].defaults = {}, t(function () {
    t("[data-" + o + "]")[o]()
  })
}(jQuery, window);
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    return this.each(function () {
      var s = t(this), n = s.data("bs.carousel"), a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e), r = "string" == typeof e ? e : a.slide;
      n || s.data("bs.carousel", n = new i(this, a)), "number" == typeof e ? n.to(e) : r ? n[r]() : a.interval && n.pause().cycle()
    })
  }

  var i = function (e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e), s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (s && !this.options.wrap)return e;
    var n = "prev" == t ? -1 : 1, a = (i + n) % this.$items.length;
    return this.$items.eq(a)
  }, i.prototype.to = function (t) {
    var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  }, i.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  }, i.prototype.slide = function (e, s) {
    var n = this.$element.find(".item.active"), a = s || this.getItemForDirection(e, n), r = this.interval, o = "next" == e ? "left" : "right", l = this;
    if (a.hasClass("active"))return this.sliding = !1;
    var h = a[0], d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: o });
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
      if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = t(this.$indicators.children()[this.getItemIndex(a)]);
        c && c.addClass("active")
      }
      var p = t.Event("slid.bs.carousel", { relatedTarget: h, direction: o });
      return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, n.addClass(o), a.addClass(o), n.one("bsTransitionEnd", function () {
        a.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(p)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
    }
  };
  var s = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = s, this
  };
  var n = function (i) {
    var s, n = t(this), a = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
    if (a.hasClass("carousel")) {
      var r = t.extend({}, a.data(), n.data()), o = n.attr("data-slide-to");
      o && (r.interval = !1), e.call(a, r), o && a.data("bs.carousel").to(o), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), +function (t) {
  "use strict";
  function e(e) {
    var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(s)
  }

  function i(e) {
    return this.each(function () {
      var i = t(this), n = i.data("bs.collapse"), a = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
      !n && a.toggle && /show|hide/.test(e) && (a.toggle = !1), n || i.data("bs.collapse", n = new s(this, a)), "string" == typeof e && n[e]()
    })
  }

  var s = function (e, i) {
    this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = { toggle: !0 }, s.prototype.dimension = function () {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, s.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
        var a = t.Event("show.bs.collapse");
        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
          var r = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var o = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition)return o.call(this);
          var l = t.camelCase(["scroll", r].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[r](this.$element[0][l])
        }
      }
    }
  }, s.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var n = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
      }
    }
  }, s.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, s.prototype.getParent = function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, s) {
      var n = t(s);
      this.addAriaAndCollapsedClass(e(n), n)
    }, this)).end()
  }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var n = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = n, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
    var n = t(this);
    n.attr("data-target") || s.preventDefault();
    var a = e(n), r = a.data("bs.collapse"), o = r ? "toggle" : n.data();
    i.call(a, o)
  })
}(jQuery), +function (t) {
  "use strict";
  function e() {
    var t = document.createElement("bootstrap"), e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var i in e)if (void 0 !== t.style[i])return { end: e[i] };
    return !1
  }

  t.fn.emulateTransitionEnd = function (e) {
    var i = !1, s = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0
    });
    var n = function () {
      i || t(s).trigger(t.support.transition.end)
    };
    return setTimeout(n, e), this
  }, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function (e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery);

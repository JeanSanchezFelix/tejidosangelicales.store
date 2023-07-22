/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
!(function (e) {
  var t = {};
  function o(i) {
    if (t[i]) return t[i].exports;
    var n = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 6));
})([
  ,
  ,
  function (e, t, o) {
    "use strict";
    e.exports = function (e) {
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? e.call()
        : document.attachEvent
        ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call();
          })
        : document.addEventListener &&
          document.addEventListener("DOMContentLoaded", e);
    };
  },
  ,
  function (e, t, o) {
    "use strict";
    (function (t) {
      var o;
      (o =
        "undefined" != typeof window
          ? window
          : void 0 !== t
          ? t
          : "undefined" != typeof self
          ? self
          : {}),
        (e.exports = o);
    }).call(this, o(5));
  },
  function (e, t, o) {
    "use strict";
    var i,
      n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
        (i = window);
    }
    e.exports = i;
  },
  function (e, t, o) {
    e.exports = o(7);
  },
  function (e, t, o) {
    "use strict";
    var i = l(o(8)),
      n = l(o(4)),
      a = l(o(2)),
      r = l(o(10));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (n.default.VideoWorker = n.default.VideoWorker || i.default),
      (0, r.default)(),
      (0, a.default)(function () {
        "undefined" != typeof jarallax &&
          jarallax(document.querySelectorAll("[data-jarallax-video]"));
      });
  },
  function (e, t, o) {
    "use strict";
    e.exports = o(9);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      n = (function () {
        function e(e, t) {
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, o, i) {
          return o && e(t.prototype, o), i && e(t, i), t;
        };
      })();
    function a() {
      (this._done = []), (this._fail = []);
    }
    a.prototype = {
      execute: function (e, t) {
        var o = e.length;
        for (t = Array.prototype.slice.call(t); o--; ) e[o].apply(null, t);
      },
      resolve: function () {
        this.execute(this._done, arguments);
      },
      reject: function () {
        this.execute(this._fail, arguments);
      },
      done: function (e) {
        this._done.push(e);
      },
      fail: function (e) {
        this._fail.push(e);
      },
    };
    var r = 0,
      l = 0,
      u = 0,
      p = 0,
      s = 0,
      d = new a(),
      y = new a(),
      c = (function () {
        function e(t, o) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var i = this;
          (i.url = t),
            (i.options_default = {
              autoplay: !1,
              loop: !1,
              mute: !1,
              volume: 100,
              showContols: !0,
              startTime: 0,
              endTime: 0,
            }),
            (i.options = i.extend({}, i.options_default, o)),
            (i.videoID = i.parseURL(t)),
            i.videoID && ((i.ID = r++), i.loadAPI(), i.init());
        }
        return (
          n(e, [
            {
              key: "extend",
              value: function (e) {
                var t = arguments;
                return (
                  (e = e || {}),
                  Object.keys(arguments).forEach(function (o) {
                    t[o] &&
                      Object.keys(t[o]).forEach(function (i) {
                        e[i] = t[o][i];
                      });
                  }),
                  e
                );
              },
            },
            {
              key: "parseURL",
              value: function (e) {
                var t,
                  o,
                  i,
                  n,
                  a,
                  r =
                    !(
                      !(t = e.match(
                        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
                      )) || 11 !== t[1].length
                    ) && t[1],
                  l =
                    !(
                      !(o = e.match(
                        /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/
                      )) || !o[3]
                    ) && o[3],
                  u =
                    ((i = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/)),
                    (n = {}),
                    (a = 0),
                    i.forEach(function (e) {
                      var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                      t &&
                        t[1] &&
                        t[2] &&
                        ((n["ogv" === t[1] ? "ogg" : t[1]] = t[2]), (a = 1));
                    }),
                    !!a && n);
                return r
                  ? ((this.type = "youtube"), r)
                  : l
                  ? ((this.type = "vimeo"), l)
                  : !!u && ((this.type = "local"), u);
              },
            },
            {
              key: "isValid",
              value: function () {
                return !!this.videoID;
              },
            },
            {
              key: "on",
              value: function (e, t) {
                (this.userEventsList = this.userEventsList || []),
                  (
                    this.userEventsList[e] || (this.userEventsList[e] = [])
                  ).push(t);
              },
            },
            {
              key: "off",
              value: function (e, t) {
                var o = this;
                this.userEventsList &&
                  this.userEventsList[e] &&
                  (t
                    ? this.userEventsList[e].forEach(function (i, n) {
                        i === t && (o.userEventsList[e][n] = !1);
                      })
                    : delete this.userEventsList[e]);
              },
            },
            {
              key: "fire",
              value: function (e) {
                var t = this,
                  o = [].slice.call(arguments, 1);
                this.userEventsList &&
                  void 0 !== this.userEventsList[e] &&
                  this.userEventsList[e].forEach(function (e) {
                    e && e.apply(t, o);
                  });
              },
            },
            {
              key: "play",
              value: function (e) {
                var t = this;
                t.player &&
                  ("youtube" === t.type &&
                    t.player.playVideo &&
                    (void 0 !== e && t.player.seekTo(e || 0),
                    YT.PlayerState.PLAYING !== t.player.getPlayerState() &&
                      t.player.playVideo()),
                  "vimeo" === t.type &&
                    (void 0 !== e && t.player.setCurrentTime(e),
                    t.player.getPaused().then(function (e) {
                      e && t.player.play();
                    })),
                  "local" === t.type &&
                    (void 0 !== e && (t.player.currentTime = e),
                    t.player.paused && t.player.play()));
              },
            },
            {
              key: "pause",
              value: function () {
                var e = this;
                e.player &&
                  ("youtube" === e.type &&
                    e.player.pauseVideo &&
                    YT.PlayerState.PLAYING === e.player.getPlayerState() &&
                    e.player.pauseVideo(),
                  "vimeo" === e.type &&
                    e.player.getPaused().then(function (t) {
                      t || e.player.pause();
                    }),
                  "local" === e.type && (e.player.paused || e.player.pause()));
              },
            },
            {
              key: "mute",
              value: function () {
                var e = this;
                e.player &&
                  ("youtube" === e.type && e.player.mute && e.player.mute(),
                  "vimeo" === e.type &&
                    e.player.setVolume &&
                    e.player.setVolume(0),
                  "local" === e.type && (e.$video.muted = !0));
              },
            },
            {
              key: "unmute",
              value: function () {
                var e = this;
                e.player &&
                  ("youtube" === e.type && e.player.mute && e.player.unMute(),
                  "vimeo" === e.type &&
                    e.player.setVolume &&
                    e.player.setVolume(e.options.volume),
                  "local" === e.type && (e.$video.muted = !1));
              },
            },
            {
              key: "setVolume",
              value: function () {
                var e =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = this;
                t.player &&
                  e &&
                  ("youtube" === t.type &&
                    t.player.setVolume &&
                    t.player.setVolume(e),
                  "vimeo" === t.type &&
                    t.player.setVolume &&
                    t.player.setVolume(e),
                  "local" === t.type && (t.$video.volume = e / 100));
              },
            },
            {
              key: "getVolume",
              value: function (e) {
                var t = this;
                t.player
                  ? ("youtube" === t.type &&
                      t.player.getVolume &&
                      e(t.player.getVolume()),
                    "vimeo" === t.type &&
                      t.player.getVolume &&
                      t.player.getVolume().then(function (t) {
                        e(t);
                      }),
                    "local" === t.type && e(100 * t.$video.volume))
                  : e(!1);
              },
            },
            {
              key: "getMuted",
              value: function (e) {
                var t = this;
                t.player
                  ? ("youtube" === t.type &&
                      t.player.isMuted &&
                      e(t.player.isMuted()),
                    "vimeo" === t.type &&
                      t.player.getVolume &&
                      t.player.getVolume().then(function (t) {
                        e(!!t);
                      }),
                    "local" === t.type && e(t.$video.muted))
                  : e(null);
              },
            },
            {
              key: "getImageURL",
              value: function (e) {
                var t = this;
                if (t.videoImage) e(t.videoImage);
                else {
                  if ("youtube" === t.type) {
                    var o = ["maxresdefault", "sddefault", "hqdefault", "0"],
                      i = 0,
                      n = new Image();
                    (n.onload = function () {
                      120 !== (this.naturalWidth || this.width) ||
                      i === o.length - 1
                        ? ((t.videoImage =
                            "https://img.youtube.com/vi/" +
                            t.videoID +
                            "/" +
                            o[i] +
                            ".jpg"),
                          e(t.videoImage))
                        : (i++,
                          (this.src =
                            "https://img.youtube.com/vi/" +
                            t.videoID +
                            "/" +
                            o[i] +
                            ".jpg"));
                    }),
                      (n.src =
                        "https://img.youtube.com/vi/" +
                        t.videoID +
                        "/" +
                        o[i] +
                        ".jpg");
                  }
                  if ("vimeo" === t.type) {
                    var a = new XMLHttpRequest();
                    a.open(
                      "GET",
                      "https://vimeo.com/api/v2/video/" + t.videoID + ".json",
                      !0
                    ),
                      (a.onreadystatechange = function () {
                        if (
                          4 === this.readyState &&
                          200 <= this.status &&
                          this.status < 400
                        ) {
                          var o = JSON.parse(this.responseText);
                          (t.videoImage = o[0].thumbnail_large),
                            e(t.videoImage);
                        }
                      }),
                      a.send(),
                      (a = null);
                  }
                }
              },
            },
            {
              key: "getIframe",
              value: function (e) {
                this.getVideo(e);
              },
            },
            {
              key: "getVideo",
              value: function (e) {
                var t = this;
                t.$video
                  ? e(t.$video)
                  : t.onAPIready(function () {
                      var o = void 0;
                      if (
                        (t.$video ||
                          ((o = document.createElement("div")).style.display =
                            "none"),
                        "youtube" === t.type)
                      ) {
                        (t.playerOptions = {}),
                          (t.playerOptions.videoId = t.videoID),
                          (t.playerOptions.playerVars = {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1,
                          }),
                          t.options.showContols ||
                            ((t.playerOptions.playerVars.iv_load_policy = 3),
                            (t.playerOptions.playerVars.modestbranding = 1),
                            (t.playerOptions.playerVars.controls = 0),
                            (t.playerOptions.playerVars.showinfo = 0),
                            (t.playerOptions.playerVars.disablekb = 1));
                        var i = void 0,
                          n = void 0;
                        t.playerOptions.events = {
                          onReady: function (e) {
                            t.options.mute
                              ? e.target.mute()
                              : t.options.volume &&
                                e.target.setVolume(t.options.volume),
                              t.options.autoplay && t.play(t.options.startTime),
                              t.fire("ready", e),
                              setInterval(function () {
                                t.getVolume(function (o) {
                                  t.options.volume !== o &&
                                    ((t.options.volume = o),
                                    t.fire("volumechange", e));
                                });
                              }, 150);
                          },
                          onStateChange: function (e) {
                            t.options.loop &&
                              e.data === YT.PlayerState.ENDED &&
                              t.play(t.options.startTime),
                              i ||
                                e.data !== YT.PlayerState.PLAYING ||
                                ((i = 1), t.fire("started", e)),
                              e.data === YT.PlayerState.PLAYING &&
                                t.fire("play", e),
                              e.data === YT.PlayerState.PAUSED &&
                                t.fire("pause", e),
                              e.data === YT.PlayerState.ENDED &&
                                t.fire("ended", e),
                              e.data === YT.PlayerState.PLAYING
                                ? (n = setInterval(function () {
                                    t.fire("timeupdate", e),
                                      t.options.endTime &&
                                        t.player.getCurrentTime() >=
                                          t.options.endTime &&
                                        (t.options.loop
                                          ? t.play(t.options.startTime)
                                          : t.pause());
                                  }, 150))
                                : clearInterval(n);
                          },
                        };
                        var a = !t.$video;
                        if (a) {
                          var r = document.createElement("div");
                          r.setAttribute("id", t.playerID),
                            o.appendChild(r),
                            document.body.appendChild(o);
                        }
                        (t.player =
                          t.player ||
                          new window.YT.Player(t.playerID, t.playerOptions)),
                          a &&
                            ((t.$video = document.getElementById(t.playerID)),
                            (t.videoWidth =
                              parseInt(t.$video.getAttribute("width"), 10) ||
                              1280),
                            (t.videoHeight =
                              parseInt(t.$video.getAttribute("height"), 10) ||
                              720));
                      }
                      if ("vimeo" === t.type) {
                        if (
                          ((t.playerOptions = {
                            id: t.videoID,
                            autopause: 0,
                            transparent: 0,
                            autoplay: t.options.autoplay ? 1 : 0,
                            loop: t.options.loop ? 1 : 0,
                            muted: t.options.mute ? 1 : 0,
                          }),
                          t.options.volume &&
                            (t.playerOptions.volume = t.options.volume),
                          t.options.showContols ||
                            ((t.playerOptions.badge = 0),
                            (t.playerOptions.byline = 0),
                            (t.playerOptions.portrait = 0),
                            (t.playerOptions.title = 0)),
                          !t.$video)
                        ) {
                          var l = "";
                          Object.keys(t.playerOptions).forEach(function (e) {
                            "" !== l && (l += "&"),
                              (l +=
                                e +
                                "=" +
                                encodeURIComponent(t.playerOptions[e]));
                          }),
                            (t.$video = document.createElement("iframe")),
                            t.$video.setAttribute("id", t.playerID),
                            t.$video.setAttribute(
                              "src",
                              "https://player.vimeo.com/video/" +
                                t.videoID +
                                "?" +
                                l
                            ),
                            t.$video.setAttribute("frameborder", "0"),
                            t.$video.setAttribute("mozallowfullscreen", ""),
                            t.$video.setAttribute("allowfullscreen", ""),
                            o.appendChild(t.$video),
                            document.body.appendChild(o);
                        }
                        (t.player =
                          t.player ||
                          new Vimeo.Player(t.$video, t.playerOptions)),
                          t.options.startTime &&
                            t.options.autoplay &&
                            t.player.setCurrentTime(t.options.startTime),
                          t.player.getVideoWidth().then(function (e) {
                            t.videoWidth = e || 1280;
                          }),
                          t.player.getVideoHeight().then(function (e) {
                            t.videoHeight = e || 720;
                          });
                        var u = void 0;
                        t.player.on("timeupdate", function (e) {
                          u || (t.fire("started", e), (u = 1)),
                            t.fire("timeupdate", e),
                            t.options.endTime &&
                              t.options.endTime &&
                              e.seconds >= t.options.endTime &&
                              (t.options.loop
                                ? t.play(t.options.startTime)
                                : t.pause());
                        }),
                          t.player.on("play", function (e) {
                            t.fire("play", e),
                              t.options.startTime &&
                                0 === e.seconds &&
                                t.play(t.options.startTime);
                          }),
                          t.player.on("pause", function (e) {
                            t.fire("pause", e);
                          }),
                          t.player.on("ended", function (e) {
                            t.fire("ended", e);
                          }),
                          t.player.on("loaded", function (e) {
                            t.fire("ready", e);
                          }),
                          t.player.on("volumechange", function (e) {
                            t.fire("volumechange", e);
                          });
                      }
                      if ("local" === t.type) {
                        t.$video ||
                          ((t.$video = document.createElement("video")),
                          t.options.showContols && (t.$video.controls = !0),
                          t.options.mute
                            ? (t.$video.muted = !0)
                            : t.$video.volume &&
                              (t.$video.volume = t.options.volume / 100),
                          t.options.loop && (t.$video.loop = !0),
                          t.$video.setAttribute("playsinline", ""),
                          t.$video.setAttribute("webkit-playsinline", ""),
                          t.$video.setAttribute("id", t.playerID),
                          o.appendChild(t.$video),
                          document.body.appendChild(o),
                          Object.keys(t.videoID).forEach(function (e) {
                            var o, i, n, a;
                            (o = t.$video),
                              (i = t.videoID[e]),
                              (n = "video/" + e),
                              ((a = document.createElement("source")).src = i),
                              (a.type = n),
                              o.appendChild(a);
                          })),
                          (t.player = t.player || t.$video);
                        var p = void 0;
                        t.player.addEventListener("playing", function (e) {
                          p || t.fire("started", e), (p = 1);
                        }),
                          t.player.addEventListener("timeupdate", function (e) {
                            t.fire("timeupdate", e),
                              t.options.endTime &&
                                t.options.endTime &&
                                this.currentTime >= t.options.endTime &&
                                (t.options.loop
                                  ? t.play(t.options.startTime)
                                  : t.pause());
                          }),
                          t.player.addEventListener("play", function (e) {
                            t.fire("play", e);
                          }),
                          t.player.addEventListener("pause", function (e) {
                            t.fire("pause", e);
                          }),
                          t.player.addEventListener("ended", function (e) {
                            t.fire("ended", e);
                          }),
                          t.player.addEventListener(
                            "loadedmetadata",
                            function () {
                              (t.videoWidth = this.videoWidth || 1280),
                                (t.videoHeight = this.videoHeight || 720),
                                t.fire("ready"),
                                t.options.autoplay &&
                                  t.play(t.options.startTime);
                            }
                          ),
                          t.player.addEventListener(
                            "volumechange",
                            function (e) {
                              t.getVolume(function (e) {
                                t.options.volume = e;
                              }),
                                t.fire("volumechange", e);
                            }
                          );
                      }
                      e(t.$video);
                    });
              },
            },
            {
              key: "init",
              value: function () {
                this.playerID = "VideoWorker-" + this.ID;
              },
            },
            {
              key: "loadAPI",
              value: function () {
                if (!l || !u) {
                  var e = "";
                  if (
                    ("youtube" !== this.type ||
                      l ||
                      ((l = 1), (e = "https://www.youtube.com/iframe_api")),
                    "vimeo" !== this.type ||
                      u ||
                      ((u = 1), (e = "https://player.vimeo.com/api/player.js")),
                    e)
                  ) {
                    var t = document.createElement("script"),
                      o = document.getElementsByTagName("head")[0];
                    (t.src = e), o.appendChild(t), (t = o = null);
                  }
                }
              },
            },
            {
              key: "onAPIready",
              value: function (e) {
                if (
                  ("youtube" === this.type &&
                    (("undefined" != typeof YT && 0 !== YT.loaded) || p
                      ? "object" ===
                          ("undefined" == typeof YT ? "undefined" : i(YT)) &&
                        1 === YT.loaded
                        ? e()
                        : d.done(function () {
                            e();
                          })
                      : ((p = 1),
                        (window.onYouTubeIframeAPIReady = function () {
                          (window.onYouTubeIframeAPIReady = null),
                            d.resolve("done"),
                            e();
                        }))),
                  "vimeo" === this.type)
                )
                  if ("undefined" != typeof Vimeo || s)
                    "undefined" != typeof Vimeo
                      ? e()
                      : y.done(function () {
                          e();
                        });
                  else {
                    s = 1;
                    var t = setInterval(function () {
                      "undefined" != typeof Vimeo &&
                        (clearInterval(t), y.resolve("done"), e());
                    }, 20);
                  }
                "local" === this.type && e();
              },
            },
          ]),
          e
        );
      })();
    t.default = c;
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        var e =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : n.default.jarallax;
        if (void 0 !== e) {
          var t = e.constructor,
            o = t.prototype.init;
          t.prototype.init = function () {
            var e = this;
            o.apply(e),
              e.video &&
                !e.options.disableVideo() &&
                e.video.getVideo(function (t) {
                  var o = t.parentNode;
                  e.css(t, {
                    position: e.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                    zIndex: -1,
                  }),
                    (e.$video = t),
                    e.image.$container.appendChild(t),
                    o.parentNode.removeChild(o);
                });
          };
          var a = t.prototype.coverImage;
          t.prototype.coverImage = function () {
            var e = this,
              t = a.apply(e),
              o = !!e.image.$item && e.image.$item.nodeName;
            if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
              var i = t.image.height,
                n = (i * e.image.width) / e.image.height,
                r = (t.container.width - n) / 2,
                l = t.image.marginTop;
              t.container.width > n &&
                ((i =
                  ((n = t.container.width) * e.image.height) / e.image.width),
                (r = 0),
                (l += (t.image.height - i) / 2)),
                "IFRAME" === o && ((i += 400), (l -= 200)),
                e.css(e.$video, {
                  width: n + "px",
                  marginLeft: r + "px",
                  height: i + "px",
                  marginTop: l + "px",
                });
            }
            return t;
          };
          var r = t.prototype.initImg;
          t.prototype.initImg = function () {
            var e = this,
              t = r.apply(e);
            return (
              e.options.videoSrc ||
                (e.options.videoSrc =
                  e.$item.getAttribute("data-jarallax-video") || null),
              e.options.videoSrc ? ((e.defaultInitImgResult = t), !0) : t
            );
          };
          var l = t.prototype.canInitParallax;
          t.prototype.canInitParallax = function () {
            var e = this,
              t = l.apply(e);
            if (!e.options.videoSrc) return t;
            var o = new i.default(e.options.videoSrc, {
              autoplay: !0,
              loop: !0,
              showContols: !1,
              startTime: e.options.videoStartTime || 0,
              endTime: e.options.videoEndTime || 0,
              mute: e.options.videoVolume ? 0 : 1,
              volume: e.options.videoVolume || 0,
            });
            if (o.isValid())
              if (t) {
                if (
                  (o.on("ready", function () {
                    if (e.options.videoPlayOnlyVisible) {
                      var t = e.onScroll;
                      e.onScroll = function () {
                        t.apply(e), e.isVisible() ? o.play() : o.pause();
                      };
                    } else o.play();
                  }),
                  o.on("started", function () {
                    (e.image.$default_item = e.image.$item),
                      (e.image.$item = e.$video),
                      (e.image.width = e.video.videoWidth || 1280),
                      (e.image.height = e.video.videoHeight || 720),
                      (e.options.imgWidth = e.image.width),
                      (e.options.imgHeight = e.image.height),
                      e.coverImage(),
                      e.clipContainer(),
                      e.onScroll(),
                      e.image.$default_item &&
                        (e.image.$default_item.style.display = "none");
                  }),
                  (e.video = o),
                  !e.defaultInitImgResult)
                )
                  return "local" !== o.type
                    ? (o.getImageURL(function (t) {
                        (e.image.src = t), e.init();
                      }),
                      !1)
                    : ((e.image.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                      !0);
              } else
                e.defaultInitImgResult ||
                  o.getImageURL(function (t) {
                    var o = e.$item.getAttribute("style");
                    o &&
                      e.$item.setAttribute("data-jarallax-original-styles", o),
                      e.css(e.$item, {
                        "background-image": 'url("' + t + '")',
                        "background-position": "center",
                        "background-size": "cover",
                      });
                  });
            return t;
          };
          var u = t.prototype.destroy;
          t.prototype.destroy = function () {
            var e = this;
            e.image.$default_item &&
              ((e.image.$item = e.image.$default_item),
              delete e.image.$default_item),
              u.apply(e);
          };
        }
      });
    var i = a(o(8)),
      n = a(o(4));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
  },
]);

//this is for the steps listed in pasting the script inside the developer console
!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    const r =
      "typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3";
    function a({
      type: e,
      id: t,
      value: n = "",
      text: r = "",
      eventType: a = "onkeypress",
      eventMethod: o = null
    }) {
      const i = document.createElement("input");
      return (
        (i.type = e),
        "range" === e && ((i.min = 0), (i.max = 9)),
        (i.id = t),
        (i.value = n),
        (i.placeholder = r),
        (i[a] = o),
        i
      );
    }
    !(function() {
      !(function() {
        const e = document.createElement("iframe");
        (e.style.display = "none"),
          (e.onload = t =>
            (window.localStorage = e.contentWindow.localStorage)),
          document.body.appendChild(e);
      })();
      const e = {
          backgroundChangingInput: { active: !1, input: void 0 },
          brightnessTweaker: {
            active: !1,
            level: window.localStorage.getItem("brghtns") || "9",
            input: void 0,
            saveButton: void 0
          }
        },
        t = document.querySelector(".app-1q1i1E"),
        n = document.querySelector(`.${r}`),
        o = (function({ id: e, CSS: t }) {
          const n = document.createElement("style"),
            r = document.getElementById(e);
          return (
            r && (r.remove(), (window.onkeydown = null)),
            n.appendChild(document.createTextNode(t)),
            (n.id = e),
            n
          );
        })({
          id: "TRANSAPRENCY",
          CSS: (({ backgroundImageURL: e, localBrightness: t }) =>
            `.theme-dark { --background-primary:transparent; --background-secondary:transparent; --background-tertiary:transparent; --channeltextarea-background:transparent; --deprecated-panel-background:transparent; --background-secondary-alt:transparent; } #app-mount { background:url(${e}) center center no-repeat; background-size:cover; } .${r}{ margin-top:0; padding-top:4px; background:${t}; } .app-1q1i1E{ background-color: ${t}; } code.inline, .markup-2BOw-j code, code { background:#2f3136; } .theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece { background:rgba(255,255,255,0.05) !important; } .theme-dark .container-1D34oG{ background:transparent !important; } .emojiPicker-3m1S-j, .messagesPopoutWrap-1MQ1bW, .searchResultsWrap-2DKFzt, .embedFull-2tM8-- { background:rgba(0,0,0,0.7) !important; } .blockedSystemMessage-2Rk1ek { display: none; } #TRANSPARENCY__IMAGE-LINK { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:100; width: 180px; height: 40px; text-align: center; box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5); border-radius: 20px; } #TRANSPARENCY__SLIDE-BRIGHTNESS { position:absolute; right:43px; top:0; bottom:0; margin:auto; transform:translateY(200px); transform: scale(1.5); height: 200px; -webkit-appearance: slider-vertical; } #TRANSPARENCY__SAVE-BRIGHTNESS { position:absolute; right:43px; top:0; bottom:0; margin:auto; transform:translateY(200px); right:35px; height:40px; width:150px; } `)(
            {
              backgroundImageURL: window.localStorage.getItem("bgImg"),
              localBrightness:
                `rgba(0, 0, 0, 0.${e.brightnessTweaker.level})` ||
                "rgba(0,0,0,0.9)",
              overlayDarkener: "app-1q1i1E",
              overlayBar: r
            }
          )
        }),
        i = t => {
          e.backgroundChangingInput.input.remove(),
            (e.backgroundChangingInput.active = !1);
        },
        l = r => {
          if (e.brightnessTweaker.active) return d();
          const o = a({
              type: "range",
              id: "TRANSPARENCY__SLIDE-BRIGHTNESS",
              value: e.brightnessTweaker.level,
              eventType: "oninput",
              eventMethod: r => {
                (t.style.backgroundColor = `rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`),
                  (n.style.backgroundColor = `rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`),
                  (e.brightnessTweaker.level =
                    e.brightnessTweaker.slider.value);
              }
            }),
            i = (function({ id: e, text: t = "", eventMethod: n = null }) {
              const r = document.createElement("button");
              return (r.id = e), (r.innerText = t), (r.onclick = n), r;
            })({
              id: "TRANSPARENCY__SAVE-BRIGHTNESS",
              text: "Save brightness level",
              eventMethod: t => {
                window.localStorage.setItem(
                  "brghtns",
                  e.brightnessTweaker.level
                ),
                  alert(
                    `Brightness level updated! Now it is at level ${e.brightnessTweaker.level}.`
                  ),
                  d();
              }
            });
          document.body.appendChild(o),
            document.body.appendChild(i),
            (e.brightnessTweaker = {
              ...e.brightnessTweaker,
              active: !0,
              slider: o,
              saveButton: i
            });
        },
        d = t => {
          e.brightnessTweaker.slider.remove(),
            e.brightnessTweaker.saveButton.remove(),
            (e.brightnessTweaker.active = !1);
        };
      document.head.appendChild(o),
        (window.onkeydown = t => {
          t.ctrlKey &&
            ("d" === t.key
              ? o.getAttribute("media")
                ? (o.removeAttribute("media"),
                  (n.style.backgroundColor = `rgba(0,0,0,0.${e.brightnessTweaker.level}`))
                : (o.setAttribute("media", "1px"),
                  (n.style.backgroundColor = "var(--background-tertiary)"))
              : "b" === t.key
              ? l()
              : t.altKey &&
                (t => {
                  if (e.backgroundChangingInput.active) return i();
                  const n = a({
                    type: "input",
                    id: "TRANSPARENCY__IMAGE-LINK",
                    text: "Paste discord image link here",
                    eventType: "onkeypress",
                    eventMethod: t => {
                      "Enter" === t.key &&
                        "" !== n.value.trim() &&
                        ((o.innerHTML += `#app-mount{background: url(${n.value}) center center no-repeat !important; background-size: cover !important;}`),
                        window.localStorage.setItem("bgImg", n.value),
                        n.remove(),
                        (e.backgroundChangingInput.active = !1));
                    }
                  });
                  document.body.appendChild(n),
                    (e.backgroundChangingInput = { active: !0, input: n });
                })());
        });
    })();
  }
]);

function LogoBubbles(e) {
    function o() {
        t.vertShrink = h(1e3, 800, window.innerHeight), t.vertShrink = p(t.vertShrink, 0, 1)
    }

    function u() {
        var e = t.container.getBoundingClientRect();
        (e.bottom < 0 || e.top > window.innerHeight) && t.playing == 1 ? t.playing = !1 : e.bottom > 0 && e.top < window.innerHeight && t.playing == 0 && (t.playing = !0, requestAnimationFrame(function(e) {
            t.tick(e)
        }))
    }

    function a(e) {
        var n = e.x + e.noiseX + t.scrollX,
            r = e.y + e.noiseY;
        r = c(r, t.containerHeight / 2, t.vertShrink * t.maxShrink), n < -200 && (e.x += t.containerWidth);
        var i = l(e.introProgress) / 20 + .95;
        i *= e.scale, e.el.style.opacity = l(e.introProgress), e.el.style.transform = "translate(" + n + "px, " + r + "px) scale(" + i + ")"
    }

    function f(e) {
        var t = 0,
            n = 0,
            r = null;
        for (t = e.length - 1; t > 0; t -= 1) n = Math.floor(Math.random() * (t + 1)), r = e[t], e[t] = e[n], e[n] = r
    }

    function l(e) {
        return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
    }

    function c(e, t, n) {
        return e * (1 - n) + t * n
    }

    function h(e, t, n) {
        return (n - e) / (t - e)
    }

    function p(e, t, n) {
        return Math.max(Math.min(e, n), t)
    }
    var t = this;
    for (r in e) t[r] = e[r];
    t.container = document.querySelector(t.containerSelector), t.noiseT = 0, t.scrollX = 0, t.logos.forEach(function(e, n) {
        t.logos[n] = {
            index: n,
            title: e
        }
    }), f(t.logos), t.vertShrink = 0, o(), window.addEventListener("resize", o), t.playing = !1, u(), window.addEventListener("scroll", u), t.logosLoaded = !1;
    var n = "/img/v3/customers/logos/header-logos" + (Strut.isRetina ? "@2x.png?2" : ".png?2");
    Strut.load.images(n, function() {
        t.logosLoaded = !0
    });
    for (var r = 0; r < t.bubbles.length; r++) {
        var i = t.bubbles[r],
            s = r % t.logos.length;
        i.scale = i.s || 1, i.seedX = Math.random() * 1e4, i.seedY = Math.random() * 1e4, i.noiseX = i.noiseY = 0, i.introDelay = Math.random() * t.introDelay, i.introProgress = 0, i.el = document.createElement("div"), i.el.className = t.classPrefix + t.logos[s].index, i.tagEl = document.createElement("span"), i.tagEl.innerHTML = t.logos[s].title, i.el.appendChild(i.tagEl), a(i), t.container.appendChild(i.el)
    }
    t.firstTick = null, t.lastTick = 0, t.tick = function(e) {
        t.firstTick || (t.firstTick = e), e -= t.firstTick;
        var n = e - t.lastTick;
        t.lastTick = e, t.noiseT += n * t.noiseSpeed, t.scrollX -= n * t.scrollSpeed;
        for (var r = 0; r < t.bubbles.length; r++) {
            var i = t.bubbles[r];
            i.noiseX = noise(i.seedX + t.noiseT) * t.noiseScale - t.noiseScale / 2, i.noiseY = noise(i.seedY + t.noiseT) * t.noiseScale - t.noiseScale / 2, t.logosLoaded && i.introProgress < 1 && e > i.introDelay && (i.introProgress = Math.min(1, i.introProgress + n / t.introDuration)), a(i)
        }
        t.playing && requestAnimationFrame(t.tick)
    }
}
var bubbles = [{
        s: .6,
        x: 1134,
        y: 45
    }, {
        s: .6,
        x: 1620,
        y: 271
    }, {
        s: .6,
        x: 1761,
        y: 372
    }, {
        s: .6,
        x: 2499,
        y: 79
    }, {
        s: .6,
        x: 2704,
        y: 334
    }, {
        s: .6,
        x: 2271,
        y: 356
    }, {
        s: .6,
        x: 795,
        y: 226
    }, {
        s: .6,
        x: 276,
        y: 256
    }, {
        s: .6,
        x: 1210,
        y: 365
    }, {
        s: .6,
        x: 444,
        y: 193
    }, {
        s: .6,
        x: 2545,
        y: 387
    }, {
        s: .8,
        x: 1303,
        y: 193
    }, {
        s: .8,
        x: 907,
        y: 88
    }, {
        s: .8,
        x: 633,
        y: 320
    }, {
        s: .8,
        x: 323,
        y: 60
    }, {
        s: .8,
        x: 129,
        y: 357
    }, {
        s: .8,
        x: 1440,
        y: 342
    }, {
        s: .8,
        x: 1929,
        y: 293
    }, {
        s: .8,
        x: 2135,
        y: 198
    }, {
        s: .8,
        x: 2276,
        y: 82
    }, {
        s: .8,
        x: 2654,
        y: 182
    }, {
        s: .8,
        x: 2783,
        y: 60
    }, {
        x: 1519,
        y: 118
    }, {
        x: 1071,
        y: 233
    }, {
        x: 1773,
        y: 148
    }, {
        x: 2098,
        y: 385
    }, {
        x: 2423,
        y: 244
    }, {
        x: 901,
        y: 385
    }, {
        x: 624,
        y: 111
    }, {
        x: 75,
        y: 103
    }, {
        x: 413,
        y: 367
    }, {
        x: 2895,
        y: 271
    }, {
        x: 1990,
        y: 75
    }],
    logos = ["Affirm", "Asana", "BOOK A TIGER", "Blue Apron", "Catawiki", "Deliveroo", "Doordash", "Dribbble", "Facebook", "Fancy", "Fitbit", "Indiegogo", "Instacart", "Kickstarter", "Lyft", "OpenTable", "Panic", "Pinterest", "Postmates", "Rackspace", "Reddit", "SAP", "Salesforce", "Shopify", "Slack", "Spring", "Squarespace", "Target", "TaskRabbit", "Ted", "Teespring", "The Guardian", "TicketSwap", "WeTransfer", "Wish", "Wolfram Alpha", "Xero", "Yelp"];
Strut.ready(function() {
    window.logoBubbles = new LogoBubbles({
        bubbles: bubbles,
        logos: logos,
        classPrefix: "Icon Icon-img",
        containerSelector: ".IconsContainer",
        containerWidth: 3e3,
        containerHeight: 460,
        maxShrink: .2,
        noiseSpeed: 55e-6,
        noiseScale: 80,
        scrollSpeed: .0175,
        introDelay: 1500,
        introDuration: 1500
    })
}), "use strict";
var PERLIN_ZWRAPB = 8,
    PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB,
    PERLIN_SIZE = 4095,
    perlin_octaves = 4,
    perlin_amp_falloff = .5,
    scaled_cosine = function(e) {
        return .5 * (1 - Math.cos(e * Math.PI))
    },
    perlin, noise = function(e) {
        if (perlin == null) {
            perlin = new Array(PERLIN_SIZE + 1);
            for (var t = 0; t < PERLIN_SIZE + 1; t++) perlin[t] = Math.random()
        }
        e < 0 && (e = -e);
        var n = Math.floor(e),
            r = e - n,
            i, s = 0,
            o = .5,
            u;
        for (var a = 0; a < perlin_octaves; a++) i = scaled_cosine(r), u = perlin[n & PERLIN_SIZE], u += i * (perlin[n + 1 & PERLIN_SIZE] - u), s += u * o, o *= perlin_amp_falloff, n <<= 1, r *= 2, r >= 1 && (n++, r--);
        return s
    };
Strut.ready(function() {
    Strut.queryArray(".Section-quotePhoto--video").forEach(function(e) {
        function i() {
            var e = Strut.interpolate(20, 100, Strut.clamp(Strut.rangePosition(670, 1160, window.innerWidth), 0, 1));
            return {
                left: e,
                right: e,
                top: 0,
                bottom: 0
            }
        }

        function s(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top,
                left: t.left,
                right: window.innerWidth - t.right,
                bottom: window.innerHeight - t.bottom
            }
        }

        function o(e, t) {
            ["top", "right", "bottom", "left"].forEach(function(n) {
                e.style[n] = t[n] + "px"
            })
        }

        function u() {
            t.style.display = "block", n.offsetHeight, t.classList.remove("inactive")
        }

        function a() {
            t.classList.add("inactive"), t.addEventListener("transitionend", function() {
                t.style.display = "none"
            }, {
                once: !0
            })
        }
        var t = document.getElementById(e.getAttribute("data-video")),
            n = t.querySelector(".VideoContainer-wrapper"),
            r = t.querySelector("video");
        e.addEventListener("click", function(t) {
            if (navigator.userAgent.match(/(iPhone|iPod)/g)) {
                o(n, i()), r.play();
                return
            }
            n.classList.add("no-anim"), o(n, s(e)), n.offsetHeight, n.classList.remove("no-anim"), o(n, i()), u(), r.play(), document.body.addEventListener("keyup", function(t) {
                t.key == "Escape" && (o(n, s(e)), a(), r.pause())
            }, {
                once: !0
            })
        }), t.addEventListener("click", function(t) {
            o(n, s(e)), a(), r.pause()
        }), r.addEventListener("click", function(e) {
            e.stopPropagation(), r.paused ? r.play() : r.pause()
        })
    })
});
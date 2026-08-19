/* =========================================================================
   main.js — obsługa interfejsu
   ========================================================================= */
(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. język ---------------------------------------------------------- */
  if (window.I18N) window.I18N.initI18n();

  /* ---- 2. navbar: przezroczysty nad filmem, czarny po scrollu ------------ */
  const nav = document.getElementById("nav");
  if (nav && !nav.classList.contains("nav--opaque")) {
    const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- 3. menu mobilne --------------------------------------------------- */
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      const key = open ? "nav.close" : "nav.menu";
      toggle.dataset.i18n = key;
      const lang = window.I18N ? window.I18N.currentLang() : "pl";
      toggle.textContent = window.I18N ? window.I18N.DICT[lang][key] : (open ? "Zamknij" : "Menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---- 4. timecode — sygnatura hero (25 fps, jak burn-in z kamery) ------- */
  const tc = document.querySelector("#tc b");
  if (tc) {
    const start = performance.now();
    const pad = n => String(n).padStart(2, "0");
    const tick = now => {
      const t = (now - start) / 1000;
      const h = Math.floor(t / 3600);
      const m = Math.floor(t / 60) % 60;
      const s = Math.floor(t) % 60;
      const f = Math.floor((t % 1) * 25);
      tc.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---- 5. intro: logo na środku -> przelot do navbara -------------------- */
  /* Odpalane raz na sesję. To ukłon w stronę wersji 2 — dramaturgia logo
     bez zmuszania odwiedzającego do obejrzenia całego filmu.               */
  const intro = document.getElementById("intro");
  if (intro) {
    const seen = sessionStorage.getItem("averto.intro");
    const target = document.querySelector(".nav__mark");

    if (seen || reduced || !target) {
      intro.remove();
      document.documentElement.classList.remove("is-intro");
    } else {
      const mark = intro.querySelector(".intro__mark");
      setTimeout(() => {
        const a = mark.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        const scale = b.width / a.width;
        mark.style.transition = "transform .85s cubic-bezier(.22,1,.36,1)";
        mark.style.transformOrigin = "top left";
        mark.style.transform =
          `translate(${b.left - a.left}px, ${b.top - a.top}px) scale(${scale})`;

        setTimeout(() => {
          intro.classList.add("is-done");
          document.documentElement.classList.remove("is-intro");
          sessionStorage.setItem("averto.intro", "1");
          setTimeout(() => intro.remove(), 700);
        }, 620);
      }, 900);
    }
  }

  /* ---- 6. delikatne pojawianie się sekcji przy scrollu ------------------- */
  if (!reduced && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".section, .page > *");
    targets.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1)";
    });
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.opacity = "1";
        e.target.style.transform = "none";
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(el => io.observe(el));
  }

  /* ---- 7. rok w stopce --------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();

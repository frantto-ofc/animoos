(function () {
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var navToggleIcon = document.getElementById("navToggleIcon");

  navToggle.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggleIcon.innerHTML = '<use href="#icon-' + (isOpen ? "x" : "menu") + '"/>';
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggleIcon.innerHTML = '<use href="#icon-menu"/>';
    });
  });

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealTargets = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var WHATSAPP_NUMBER = "5512999999999";
  var form = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var nome = form.nome.value.trim();
      var estabelecimento = form.estabelecimento.value.trim();
      var tipo = form.tipo.value;
      var telefone = form.telefone.value.trim();
      var mensagem = form.mensagem.value.trim();

      var lines = [
        "Olá! Gostaria de solicitar um orçamento de gelo.",
        "Nome: " + nome,
        "Estabelecimento: " + estabelecimento + " (" + tipo + ")",
        "WhatsApp para contato: " + telefone
      ];
      if (mensagem) lines.push("Mensagem: " + mensagem);

      var text = encodeURIComponent(lines.join("\n"));
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank", "noopener");

      formSuccess.classList.add("show");
      form.reset();
    });
  }
})();

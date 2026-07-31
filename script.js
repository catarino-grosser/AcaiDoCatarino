/* ===================================================================
   AÇAÍ DO CATARINO — script.js
   Só o essencial: menu mobile, fechar ao clicar num link, ano no rodapé
   e uma revelação suave das seções ao rolar a página.
   =================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Menu mobile (hambúrguer) ---------- */
  var botao = document.getElementById("menuBotao");
  var nav = document.getElementById("menuNav");

  if (botao && nav) {
    botao.addEventListener("click", function () {
      var aberto = nav.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar em qualquer link (bom no celular)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
        botao.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  var anoSpan = document.getElementById("anoAtual");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  /* ---------- Revelação suave das seções ao rolar ---------- */
  var prefereReduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefereReduzirMovimento && "IntersectionObserver" in window) {
    var secoes = document.querySelectorAll("main > section, .rodape");

    secoes.forEach(function (secao) {
      secao.style.opacity = "0";
      secao.style.transform = "translateY(16px)";
      secao.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    secoes.forEach(function (secao) {
      observador.observe(secao);
    });
  }
});

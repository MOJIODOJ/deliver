(function () {
  const buttons = document.querySelectorAll(".lang-toggle button[data-set-lang]");
  const blocks = document.querySelectorAll("[data-lang]");
  let current = localStorage.getItem("demo-lang") || "ru";

  function setLang(lang) {
    current = lang;
    localStorage.setItem("demo-lang", lang);
    document.documentElement.lang = lang === "et" ? "et" : "ru";

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.setLang === lang);
    });

    blocks.forEach((el) => {
      el.classList.toggle("visible", el.dataset.lang === lang);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.setLang));
  });

  setLang(current);
})();

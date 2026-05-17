(function () {
  const languageKey = "preferred-language";
  const languages = ["de", "en"];

  function getLanguage() {
    const saved = window.localStorage.getItem(languageKey);
    return languages.includes(saved) ? saved : "en";
  }

  function setCookie(name, value, maxAge) {
    document.cookie = `${name}=${value};path=/;max-age=${maxAge}`;
    if (window.location.hostname && !window.location.hostname.includes(":")) {
      document.cookie = `${name}=${value};path=/;domain=${window.location.hostname};max-age=${maxAge}`;
    }
  }

  function clearCookie(name) {
    document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    if (window.location.hostname && !window.location.hostname.includes(":")) {
      document.cookie = `${name}=;path=/;domain=${window.location.hostname};expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }

  function getCookie(name) {
    const row = document.cookie.split("; ").find((cookie) => cookie.startsWith(`${name}=`));
    return row ? row.split("=")[1] : "";
  }

  function setMachineTranslation(language, reload) {
    const current = decodeURIComponent(getCookie("googtrans") || "");
    const expected = language === "de" ? "/en/de" : "";

    if (language === "de") {
      setCookie("googtrans", expected, 31536000);
      if (reload && current !== expected) {
        window.location.reload();
      }
      return;
    }

    clearCookie("googtrans");
    clearCookie("googtransopt");
    if (reload && current) {
      window.location.reload();
    }
  }

  function setLanguage(language, options) {
    const nextLanguage = languages.includes(language) ? language : "en";
    const shouldReload = Boolean(options && options.reload);

    document.documentElement.lang = nextLanguage;
    document.documentElement.dataset.language = nextLanguage;
    if (document.body) {
      document.body.dataset.language = nextLanguage;
    }

    document.querySelectorAll("[data-lang-de][data-lang-en]").forEach((element) => {
      const value = element.dataset[nextLanguage === "de" ? "langDe" : "langEn"];
      if (value !== undefined) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const isActive = button.dataset.languageOption === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    window.localStorage.setItem(languageKey, nextLanguage);
    setMachineTranslation(nextLanguage, shouldReload);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getLanguage(), { reload: false });
    document.documentElement.classList.add("preferences-ready");

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.languageOption, { reload: true });
      });
    });
  });
})();

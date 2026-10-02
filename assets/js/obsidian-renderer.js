(function () {
  const content = document.getElementById("main_content");

  if (!content) {
    return;
  }

  function renderHighlights(root) {
    root.querySelectorAll("p, li, td, th, blockquote").forEach((element) => {
      if (!element.innerHTML.includes("==") || element.querySelector("pre, code, script, style, textarea")) {
        return;
      }

      element.innerHTML = element.innerHTML.replace(/==(.+?)==/g, '<mark class="obsidian-highlight">$1</mark>');
    });
  }

  function renderCallouts(root) {
    root.querySelectorAll("blockquote").forEach((blockquote) => {
      const firstElement = blockquote.firstElementChild;

      if (!firstElement) {
        return;
      }

      const match = firstElement.textContent.trim().match(/^\[!([A-Za-z]+)\]([+-])?\s*([^\n\r]*)/);

      if (!match) {
        return;
      }

      const type = match[1].toLowerCase();
      const title = match[3] || match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
      const remainingHtml = firstElement.innerHTML
        .replace(/^\[![A-Za-z]+\][+-]?\s*([^<\n\r]*)\s*(\r?\n|<br\s*\/?>)?/i, "")
        .trim();
      const callout = document.createElement("div");
      const titleEl = document.createElement("div");
      const contentEl = document.createElement("div");

      callout.className = `obsidian-callout obsidian-callout-${type}`;
      titleEl.className = "obsidian-callout-title";
      titleEl.textContent = title;
      contentEl.className = "obsidian-callout-content";

      if (remainingHtml) {
        firstElement.innerHTML = remainingHtml;
      } else {
        firstElement.remove();
      }

      while (blockquote.firstChild) {
        contentEl.appendChild(blockquote.firstChild);
      }

      callout.appendChild(titleEl);
      callout.appendChild(contentEl);
      blockquote.replaceWith(callout);
    });
  }

  renderCallouts(content);
  renderHighlights(content);
})();

(function () {
  function shouldRewriteUrl(value) {
    return value &&
      !value.startsWith("#") &&
      !value.startsWith("mailto:") &&
      !value.startsWith("tel:") &&
      !value.startsWith("javascript:");
  }

  function toAbsoluteUrl(value, baseUrl) {
    if (!shouldRewriteUrl(value)) {
      return value;
    }

    try {
      return new URL(value, baseUrl).toString();
    } catch (_error) {
      return value;
    }
  }

  function rewriteRelativeUrls(root, baseUrl) {
    root.querySelectorAll("[src]").forEach(function (element) {
      element.setAttribute("src", toAbsoluteUrl(element.getAttribute("src"), baseUrl));
    });

    root.querySelectorAll("[href]").forEach(function (element) {
      element.setAttribute("href", toAbsoluteUrl(element.getAttribute("href"), baseUrl));
    });

    root.querySelectorAll("[srcset]").forEach(function (element) {
      var srcset = element.getAttribute("srcset");
      if (!srcset) {
        return;
      }

      var rewritten = srcset.split(",").map(function (candidate) {
        var parts = candidate.trim().split(/\s+/);
        parts[0] = toAbsoluteUrl(parts[0], baseUrl);
        return parts.join(" ");
      }).join(", ");

      element.setAttribute("srcset", rewritten);
    });
  }

  function collectHeadStyles(documentFragment) {
    return Array.prototype.slice.call(documentFragment.querySelectorAll("head style"))
      .map(function (style) {
        return style.textContent;
      })
      .join("\n");
  }

  function makeStudyNoteStyle(exportedStyles) {
    return exportedStyles + "\n" + [
      ":host { display: block; width: 100%; }",
      "* { box-sizing: border-box; }",
      "article.page {",
      "  color: rgb(55, 53, 47);",
      "  line-height: 1.5;",
      "  margin: 0 auto;",
      "  max-width: 980px;",
      "  padding: 2rem min(4vw, 2rem) 4rem;",
      "  white-space: pre-wrap;",
      "}",
      "article.page > header { margin-bottom: 1rem; }",
      "img { height: auto; max-width: 100%; }",
      "figure, pre, .source { overflow-x: auto; }",
      "@media (max-width: 768px) {",
      "  article.page {",
      "    max-width: none;",
      "    padding: 1.25rem 1rem 3rem;",
      "  }",
      "}"
    ].join("\n");
  }

  function renderError(mount, sourceUrl) {
    mount.innerHTML = '<p class="study-note-error">Unable to load this study note. <a href="' +
      sourceUrl + '">Open the exported note directly.</a></p>';
  }

  function loadStudyNote(mount) {
    var sourceUrl = mount.getAttribute("data-study-note-src");
    if (!sourceUrl) {
      return;
    }

    fetch(sourceUrl, { credentials: "same-origin" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load study note: " + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var parsedDocument = parser.parseFromString(html, "text/html");
        var article = parsedDocument.querySelector("article") || parsedDocument.body;
        var clonedArticle = article.cloneNode(true);
        var baseUrl = new URL(sourceUrl, window.location.href);

        rewriteRelativeUrls(clonedArticle, baseUrl);

        var shadowRoot = mount.attachShadow({ mode: "open" });
        var style = document.createElement("style");
        style.textContent = makeStudyNoteStyle(collectHeadStyles(parsedDocument));

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(clonedArticle);
        mount.setAttribute("data-loaded", "true");
      })
      .catch(function () {
        renderError(mount, sourceUrl);
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".study-note-embed[data-study-note-src]").forEach(loadStudyNote);
  });
})();

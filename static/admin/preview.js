(function () {
  if (!window.CMS) {
    return;
  }

  const h = window.h || (window.React && window.React.createElement);
  if (!h) {
    return;
  }

  function toPreviewClass(title) {
    if (!title) {
      return "Content";
    }
    return String(title).replace(/\s+/g, "_");
  }

  function createPreviewComponent(renderFn) {
    if (window.createClass) {
      return window.createClass({
        render: function () {
          return renderFn(this.props);
        }
      });
    }

    class PreviewComponent extends window.React.Component {
      render() {
        return renderFn(this.props);
      }
    }

    return PreviewComponent;
  }

  function pageShell(content, title, currentPath) {
    const navItems = [
      { name: "Home", url: "/" },
      { name: "Schedule", url: "/schedule/" },
      { name: "Auditions", url: "/auditions/" },
      { name: "CD", url: "/cd/" },
      { name: "Directors", url: "/directors/" },
      { name: "History", url: "/history/" },
      { name: "Contact", url: "/contact/" }
    ];

    return h("div", { id: "wrap" }, [
      h("div", { id: "header", key: "header" },
        h("div", { align: "center" },
          h("img", {
            src: "/images/Manitowoc Marine Band_Logo_3 Clr w Blk.png",
            height: "145"
          })
        )
      ),
      h("div", { id: "nav", key: "nav" },
        h(
          "ul",
          null,
          navItems.map(function (item) {
            const className = currentPath === item.url ? "current" : null;
            return h(
              "li",
              { key: item.url },
              h("a", { href: item.url, className: className }, item.name)
            );
          })
        )
      ),
      h("div", { id: "main", className: toPreviewClass(title), key: "main" }, content),
      h("div", { id: "footer", key: "footer" },
        h("p", null,
          h(
            "span",
            { className: "main" },
            "Copyright © " + new Date().getFullYear() + " Manitowoc Marine Band. All rights reserved. Sponsored by the City of Manitowoc."
          )
        )
      )
    ]);
  }

  async function registerThemePreviewStyle() {
    CMS.registerPreviewStyle("/styles/reset.css");

    try {
      const response = await fetch("/", { credentials: "same-origin" });
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const links = Array.from(doc.querySelectorAll('link[rel="stylesheet"][href]'));
      const themeLink = links.find(function (link) {
        return /style\..*\.css$/i.test(link.getAttribute("href") || "");
      }) || links[0];

      if (themeLink) {
        CMS.registerPreviewStyle(themeLink.getAttribute("href"));
      }
    } catch (error) {
      console.warn("Could not auto-register theme CSS for preview.", error);
    }
  }

  const StaticPagePreview = createPreviewComponent(function (props) {
    const entry = props.entry;
    const title = entry && entry.getIn(["data", "title"]);
    const body = props.widgetFor && props.widgetFor("body");

    return pageShell(body, title, "/");
  });

  const EventPreview = createPreviewComponent(function (props) {
    const entry = props.entry;
    const title = entry && entry.getIn(["data", "title"]);
    const location = entry && entry.getIn(["data", "location"]);
    const startDate = entry && entry.getIn(["data", "startDate"]);
    const endDate = entry && entry.getIn(["data", "endDate"]);
    const allDay = !!(entry && entry.getIn(["data", "allDay"]));
    const body = props.widgetFor && props.widgetFor("body");

    const eventContent = h("div", { className: "EventDetails" }, [
      h("h2", { id: "upcoming-schedule", key: "title" }, title || "Event"),
      allDay
        ? h("div", { className: "startTime", key: "start" }, [
            h("span", { className: "label" }, "Start:"),
            " To Be Determined"
          ])
        : h("div", { className: "startTime", key: "start" }, [
            h("span", { className: "label" }, "Start:"),
            " ",
            startDate || ""
          ]),
      allDay
        ? null
        : h("div", { className: "endTime", key: "end" }, [
            h("span", { className: "label" }, "End:"),
            " ",
            endDate || ""
          ]),
      h("div", { className: "location", key: "location" }, [
        h("span", { className: "label" }, "Location:"),
        " ",
        location || ""
      ]),
      h("div", { className: "description", key: "body" }, body)
    ]);

    return pageShell(eventContent, title || "Event", "/schedule/");
  });

  ["home", "auditions", "cd", "contact", "directors", "history", "schedule"].forEach(function (name) {
    CMS.registerPreviewTemplate(name, StaticPagePreview);
  });

  CMS.registerPreviewTemplate("events", EventPreview);
  registerThemePreviewStyle();
})();

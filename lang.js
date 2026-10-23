// Open the Polish version for Polish browsers unless a language was picked in the link (#en / #pl).
// Everything still works without JavaScript: English by default, #pl for Polish.
(function () {
  var lang = (navigator.language || "").toLowerCase();
  if (!location.hash && lang.indexOf("pl") === 0) {
    location.replace("#pl");
    window.addEventListener("load", function () { window.scrollTo(0, 0); });
  }
})();

let scrollTimeout;

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navibereich");

  if (window.innerWidth < 600) {
    nav.classList.add("blur");

    // Timer zurücksetzen
    clearTimeout(scrollTimeout);

    // Nach 200ms Inaktivität wieder scharf stellen
    scrollTimeout = setTimeout(() => {
      nav.classList.remove("blur");
    }, 200);
  } else {
    // Sicherheitshalber: Effekt oberhalb 600px entfernen
    nav.classList.remove("blur");
  }
});

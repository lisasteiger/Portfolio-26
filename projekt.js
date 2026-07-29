let scrollTimeout;

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navibereich");

  if (window.innerWidth < 600) {
    nav.style.opacity = "0";

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      nav.style.opacity = "1";
    }, 200);
  }
});

const cells = document.querySelectorAll(".cell a");

// Pool inklusive Projekt und Link holen
const imagePool = Array.from(document.querySelectorAll(".image-pool a")).map(
  (a) => {
    const img = a.querySelector("img");
    return {
      src: img.src,
      project: img.dataset.project,
      href: a.href,
    };
  }
);

function groupByProject(images) {
  const projectMap = {};
  images.forEach((img) => {
    if (!projectMap[img.project]) projectMap[img.project] = [];
    projectMap[img.project].push(img);
  });
  return Object.values(projectMap);
}

function getRandomImagesForGrid(count) {
  const grouped = groupByProject(imagePool);
  const onePerProject = grouped.map((group) => {
    return group[Math.floor(Math.random() * group.length)];
  });
  const shuffled = onePerProject.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function updateImages() {
  const newImages = getRandomImagesForGrid(cells.length);
  cells.forEach((cell, i) => {
    const img = cell.querySelector("img");
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = newImages[i].src;
      cell.href = newImages[i].href; // Link aktualisieren!
      img.style.opacity = 1;
    }, 0);
  });
}

updateImages();
setInterval(updateImages, 5000);

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

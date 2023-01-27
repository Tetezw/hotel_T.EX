/* Demanda Banner Aleatório */
const banners = [
  {
    id: 1,
    images: "./images/banner/1.jpg",
    text: "Relaxe em contato com a natureza.",
  },
  {
    id: 2,
    images: "./images/banner/2.jpg",
    text: "Arquitetura estilo árabe.",
  },
  {
    id: 3,
    images: "./images/banner/3.jpg",
    text: "Cabanas sedutoras",
  },
  {
    id: 4,
    images: "./images/banner/4.jpg",
    text: "Por do sol fantástico.",
  },
  {
    id: 5,
    images: "./images/banner/5.jpg",
    text: "Piscinas com vista incrível para se refrescar.",
  },
];

function trocarBanner() {
  const banner = document.getElementById("banner");
  const texto = document.getElementById("titulo-h1");
  let banner_aleatorio = Math.floor(Math.random() * banners.length) + 1;

  const findBanner = banners.find((elem) => elem.id === banner_aleatorio);

  banner.style.background = `linear-gradient(0deg, rgba(6, 63, 87, 1), rgba(6, 63, 87, 0.3)),
    url("${findBanner.images}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";
  texto.textContent = findBanner.text;
}

trocarBanner();

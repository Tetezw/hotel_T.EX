// Lista de banners
const banners = [
  {
    id: 1,
    images: "/public/images/banner/1.jpg",
    text: "A vista é impressionante.",
  },
  {
    id: 2,
    images: "/public/images/banner/2.jpg",
    text: "Arquitetura estilo árabe.",
  },
  {
    id: 3,
    images: "/public/images/banner/3.jpg",
    text: "Cabanas sedutoras",
  },
  {
    id: 4,
    images: "/public/images/banner/4.jpg",
    text: "Por do sol fantástico.",
  },
  {
    id: 5,
    images: "/public/images/banner/5.jpg",
    text: "Três piscinas não é pra qualquer um.",
  },
];

function trocarBanner() {
  // Capturar os elementos
  const banner = document.getElementById("banner"); // <header id="banner">
  const texto = document.getElementById("titulo-h1"); // <h1 id="titulo-h1">

  // Sortear número aleatório entre os banners
  let banner_aleatorio = Math.floor(Math.random() * banners.length) + 1;

  // Procurar pelo banner com o identificador aleatório
  const findBanner = banners.find((elem) => elem.id === banner_aleatorio);

  // Alterar o banner e o texto
  banner.style.backgroundImage = "url(" + findBanner.images + ")";
  texto.textContent = findBanner.text;
}

window.addEventListener("DOMContentLoaded", (e) => {
  trocarBanner();
});

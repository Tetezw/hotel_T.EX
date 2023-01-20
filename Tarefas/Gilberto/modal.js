var servicosModalButton = document.querySelector(".servicos-modal-btn");
var servicosModalButtonFechar = document.querySelector(".close-modal-servicos");
var servicosModal = document.querySelector(".servicos-modal");
var servicosModalFade = document.querySelector(".fade-servicos-modal");
var resumoModalButton = document.querySelector(".resumo-modal-btn");
var resumoModal = document.querySelector(".resumo-modal");
var resumoModalFade = document.querySelector(".fade-resumo-modal");
var toggleModalServico = () => {
  servicosModal.classList.toggle("hide");
  servicosModalFade.classList.toggle("hide");
};
var toggleModalResumo = () => {
  resumoModal.classList.toggle("hide-resumo");
  resumoModalFade.classList.toggle("hide-resumo");
};
[servicosModalButton, servicosModalFade, servicosModalButtonFechar].forEach(
  (element) => {
    element.addEventListener("click", () => toggleModalServico());
  }
);
[resumoModalButton, resumoModalFade].forEach((element) => {
  element.addEventListener("click", () => toggleModalResumo());
});
var servicosModalButton = document.getElementById("rButtonServicos");
var servicosModalButtonFechar = document.querySelector(".close-modal-servicos");
var servicosModalAdicionar = document.querySelector(".servicos-modal-footer")
var servicosModal = document.querySelector(".servicos-modal");
var servicosModalFade = document.querySelector(".fade-servicos-modal");
var resumoModalButton = document.getElementById("rButtonDetalhes");
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
[servicosModalButton, servicosModalFade, servicosModalButtonFechar, servicosModalAdicionar].forEach(
  (element) => {
    element.addEventListener("click", () => toggleModalServico());
  }
);
[resumoModalButton, resumoModalFade].forEach((element) => {
  element.addEventListener("click", () => toggleModalResumo());
});
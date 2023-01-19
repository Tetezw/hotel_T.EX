var servicosModalButton = document.querySelector(".servicos-modal-btn");
var servicosModalButtonFechar = document.querySelector(".close-modal-servicos");
var servicosModal = document.querySelector(".servicos-modal");
var servicosModalFade = document.querySelector(".fade-servicos-modal");
var toggleModal = () => {
  servicosModal.classList.toggle("hide");
  servicosModalFade.classList.toggle("hide");
};
[servicosModalButton, servicosModalFade, servicosModalButtonFechar].forEach(
  (element) => {
    element.addEventListener("click", () => toggleModal());
  }
);

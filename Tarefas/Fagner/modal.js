
const btnServico = document.getElementById("rButtonServicos");
const btnDetalhes = document.getElementById("rButtonDetalhes");
// const btnFechar = document.getElementById("btnExit");
function modalMd1(idmodal){
  
}
function modalMd2(idmodal){

}

function mostrarModal (modal, idModal){
  // alert(modal)
  const modalMain = document.getElementById(modal)
  modalMain.classList.remove('active__off')
  modalMain.addEventListener('click', (e)=>{
    if(e.target.id == modal || e.target.id == 'btnExit'){
      modalMain.classList.add('active__off')
    }
  })
  // modal de serviços
  if(idModal == 'md1'){
    modalMd1 (idModal)
    
    
    // modal de detalhes
  }else if(idModal == 'md2'){
    modalMd2 (idModal)

  }
  
}

// remover a classe active__off mostrando o modal de serviços
btnServico.addEventListener("click", () =>{
  mostrarModal("containerMain", 'md1');
  // modalMain.classList.add('active__on')
})

// remover a classe active__off mostrando o modal de detalhes
btnDetalhes.addEventListener("click", () =>{
  mostrarModal("containerMain", 'md2');
});

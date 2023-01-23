const loadingPage = document;
const saldationUser = document.getElementById("helloUser");
const btnLogin = document.getElementById("btnLogin");
let controle;

let retrieveLocalStorage = () => {
  const jsonAuthentication = localStorage.getItem("userLogin");
  return jsonAuthentication;
};

loadingPage.addEventListener("DOMContentLoaded", () => {
  if (!retrieveLocalStorage()) {
    // alert("usuario não está logado");
    btnLogin.innerText = "Login";
    btnLogin.addEventListener("click", () => {
    window.location.href = "../public/login.html";
    });
    //modificar o botão para "fazer login" e setar o link para a pagina de login
  } else {
    let userEmail = JSON.parse(retrieveLocalStorage());
    let strEmail = JSON.stringify(userEmail.nome);
    let indexOfUser = strEmail.indexOf("@");
    let user = strEmail.slice(1, indexOfUser);
    saldationUser.innerText = `Olá ${user}`;
    controle = true;
  }
  
  if (controle) {
    btnLogin.addEventListener("click", () => {
      localStorage.removeItem("userLogin");
      alert("Até mais :(");
      location.reload();
    });
  }
  //recuperar o username e fazer um split com o caracter @ para pegar apenas o nome de login e não o email completo, EX: login.md@example.com ficaria apenas login.md.
  // altera o nome do botão para "sair" e limpar o localStorage apagando assim as info de login.
});

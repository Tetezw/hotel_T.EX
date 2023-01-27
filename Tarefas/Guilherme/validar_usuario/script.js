/********************
 * ID Elementos
 *******************/
const botao = document.getElementById("btnLogin");
const botao_login_menu = document.getElementById("botao_login_menu");
const email = document.getElementById("username2");
const senha = document.getElementById("password2");
const mensagem = document.getElementById("saudacao");

/********************
 * Funções
 *******************/

function eCampoVazio(texto) {
  if (!texto.length) {
    return true;
  }
  return false;
}

function removerAspas(texto) {
  if (texto.includes('"') || texto.includes("'")) {
    return texto.replace(/["']+/g, "");
  }
  return texto;
}

function salvarLocalStorage(dados) {
  localStorage.setItem("cliente", JSON.stringify(dados));
}

function obterLocalStorage() {
  const dados = JSON.parse(localStorage.getItem("cliente"));
  return dados;
}

function removerLocalStorage() {
  localStorage.removeItem("cliente");
  window.location.href = "login.html";
}

function validarUsuario(email, senha) {
  if (eCampoVazio(email) || eCampoVazio(senha)) {
    return alert("Preencha todos os campos");
  }

  email = removerAspas(email).trim();
  senha = removerAspas(senha).trim();

  const dados = {
    email,
    senha,
  };

  salvarLocalStorage(dados);
  window.location.href = "home.html";
}

function carregarDados() {
  const dados = obterLocalStorage();
  if (dados) {
    mensagem.innerText = `Olá ${dados.email}`;
    botao_login_menu.textContent = "Sair";
  } else {
    mensagem.innerText = `Olá usuário!`;
    botao_login_menu.textContent = "Fazer Login";
  }
}

/********************
 * Atribuir Eventos
 *******************/
carregarDados();

botao &&
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    validarUsuario(email.value, senha.value);
  });

botao_login_menu.addEventListener("click", removerLocalStorage);

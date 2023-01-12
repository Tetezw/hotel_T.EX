// const formulario = document.getElementById("formulario");
const botao = document.getElementById("btn-entrar");

let usuario = document.getElementById("username");
let senha = document.getElementById("password");

let saudacao_usuario = document.getElementById("saudacao");
let mensagem = document.getElementById("mensagem-erro");

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

function validarUsuario(usuario, senha) {
  if (eCampoVazio(usuario) || eCampoVazio(senha)) {
    mensagem.textContent = "Preencha todos os campos";
    return mensagem;
  }

  usuario = removerAspas(usuario).trim();
  senha = removerAspas(senha).trim();

  const dados = {
    usuario,
    senha,
  };

  salvarLocalStorage(dados);
  window.location.href = "home.html";
}

botao.addEventListener("click", (e) => {
  e.preventDefault();
  validarUsuario(usuario.value, senha.value);
});

// function carregarDados() {
//   window.addEventListener("DOMContentLoaded", (e) => {
//     const dados = obterLocalStorage();
//     dados
//       ? (saudacao_usuario.innerText = `Olá ${dados.usuario}`)
//       : (saudacao_usuario.innerText = `Olá Mundo!`);
//   });
// }
// carregarDados();

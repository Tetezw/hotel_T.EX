// alert('olá, teste de link')

const userCredentials = {
  nome: "fagner@gmail.com",
  senha: "12345678",
};

const jsonAuth = JSON.stringify(userCredentials);
const userName = document.getElementById("username2");
const userPassword = document.getElementById("password2");
const formLogin = document.getElementById("formLogin");
const alertPassword = document.getElementById("alertPassword");
const alertUserName = document.getElementById("alertUserName");

let emptyField = (user, password) => (user && password ? true : false);

function userIsValid(user) {
  let emailCom = user.indexOf(".com") !== -1 ? 1 : 0;
  let emailAt = user.indexOf("@") !== -1 ? 1 : 0;
  if (emailCom + emailAt == 2) {
    return true;
  } else {
    alertUserName.innerText = "O endereço de email é invalido";
    return false;
  }
}

function passwordIsValid(password) {
  if (password.length >= 8) {
    return true;
  } else {
    alertPassword.innerText = "a senha é não possui 8 caracteres";
    return false;
  }
}

let removeSpaces = (username) => {
  let newString = username.replace(/['"]/g, "").trim();
  userName.value = newString;
};

function userValidation(username, password) {
  if (username === userCredentials.nome && password === userCredentials.senha) {
    return true;
  }
}

function userLocalStorage(jsonAuthentication) {
  localStorage.setItem("userLogin", jsonAuthentication);
  alert("bem vindo");
  window.location.href = "../public/home.html";
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  alertPassword.innerText = "";
  alertUserName.innerText = "";
  removeSpaces(userName.value);
  if (!emptyField(userName.value, userPassword.value)) {
    alert("campos vazios");
    return -1;
  }
  let senha = passwordIsValid(userPassword.value);
  let email = userIsValid(userName.value);

  if (!(senha && email)) {
    alert("contêm erros");
    return -1;
  }
  if (userValidation(userName.value, userPassword.value)) {
    userLocalStorage(jsonAuth);
  } else {
    alert("usuário ou senha incorreto");
  }
});
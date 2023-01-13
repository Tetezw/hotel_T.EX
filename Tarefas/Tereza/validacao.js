console.log('teste js')

let email = 'tereza@email.com'
let senha = '654'

const emailUsuario = document.getElementById('username')
const senhaUsuario = document.getElementById('password')
const btnEntrar = document.getElementById('btnEntrar')
const btnSair = document.getElementById('btnSair')

//separa toda parte antes do arroba
let emailLocal = localStorage.getItem('usuario')
let buscaArroba = emailLocal.indexOf('@')
let nomeUser = emailLocal.substring(0,buscaArroba)

//Imprime o nome na tela
localStorage.usuario
    ? (document.querySelector('.login-user span').innerText = `Olá ${nomeUser}`)
    : null

function remover(email) {
    //tiras as aspas e espaços em branco
    let removeAspasEspacos = email.replace(/['"]/g, '').trim()
    return removeAspasEspacos
}

//Armazena o email no Local Storage
function user(email) {
    localStorage.setItem('usuario', email)
    window.location.href = 'home.html'
}

btnEntrar.addEventListener('click', () => {
    let inputEmail = remover(emailUsuario.value)
    let inputSenha = senhaUsuario.value

    //verifica se e-mail e senha conferem
    if (inputEmail === email && inputSenha === senha) {
        console.log(inputEmail, inputSenha)
        user(inputEmail)
    }
    //verifica se os campos estão em branco
    else if (inputEmail === '' || inputSenha === '') {
        window.alert('Preencha todos os campos para prosseguir')
    }
    //se e-mail ou senha não estiverem corretos
    else {
        window.alert('E-mail ou senha incorretos!')
    }
})


console.log('teste js')

let email = 'tereza@email.com'
let senha = '654'

const emailUsuario = document.getElementById('username')
const senhaUsuario = document.getElementById('password')
const btnEntrar = document.getElementById('btnEntrar')

localStorage.usuario ? document.querySelector('.login-user span').innerText = localStorage.getItem('usuario') : null

function remover (email) {
    //tiras as aspas e espaços em branco
    let removeAspasEspacos = email.replace(/['"]/g, "").trim()
    return removeAspasEspacos
}
// function remover (email){
//     //busca pelas aspas
//     let busca = /"/g
//     let busca1 = /'/g

//     //exclusão das aspas
//     if (email.includes('"') || email.includes("'")) {
//         email = email.replace(busca, '')
//         email = email.replace(busca1, '')
//     }
//     //tira os espaços em branco
//     var emailTrim = email.trim()
//     return emailTrim
// }
function user (email) {
    localStorage.setItem('usuario', email)
    window.location.href = '../../public/home.html'
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

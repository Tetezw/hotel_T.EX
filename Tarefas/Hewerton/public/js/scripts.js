let conta = {
    user1: { email: 'hewerton', senha: '1' },
    user2: { email: 'algo@gmail.com', senha: 'algo' },
}
// Acesso das inputs usuário e senha
const user = document.querySelector('#username')
const password = document.querySelector('#password')
// Acessa a mensagem de saudação
const saudacao = document.querySelector('#saudacao')

// Checa campos vazios
const checkEmpty = (input) => {
    if (input) {
        return false
    } else {
        return true
    }
}
// Checa espaços em branco
const checkBlankSpaces = (input) => {
    input = input.trim()
    return input
}

//Remove caracteres aspas simples e duplas da input username
const cleaner = (input) => {
    input = input.replace(/"|'/g, '')
    return input
}

// Verifica se o usuário está logado
localStorage.user ? (saudacao.innerText = localStorage.getItem('user')) : null

let btn = document.querySelector('#btn-login')
btn.addEventListener('click', () => {
    let flag = 0
    // Verifica se os inputs estão vazios
    if (checkEmpty(user.value) || checkEmpty(password.value)) {
        alert('Campo usuário ou senha em branco')
        flag = 1
    } else {
        // tratamento das inputs
        user.value = checkBlankSpaces(user.value)
        user.value = cleaner(user.value)
    }
    // verifica se o usuário e senha estão corretos. Mostra a mensagem olá usuário
    if (
        user.value == conta.user1.email &&
        password.value == conta.user1.senha
    ) {
        localStorage.setItem('user', 'Olá ' + user.value)
        saudacao.innerText = localStorage.getItem('user')
        // saudacao.style.text-transform = 'capitalize' dúvida,
        location.href = 'home.html'
    } else if (flag == 0) {
        // Exibe a mensagem usuário ou senha incorretos
        alert('Usuário ou senha incorretos')
    }
})
console.log(localStorage.user)
console.log(btn.innerText)

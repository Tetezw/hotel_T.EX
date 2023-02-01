<template>
    <div class="login display-f align-c">
        <!-- esconder .hidden -->
        <div class="" :class="{ hidden: this.retrieveLocalStorage() }">
            <a href="login">
                <button class="btn-white">Faça login</button>
            </a>
        </div>
        <div
            class="login-user"
            v-if='this.retrieveLocalStorage()'
            :class="{ hidden: !this.retrieveLocalStorage() }"
        >
            <span id="helloUser">Olá {{ tratarDados() }}</span>
            <button
                type="button"
                class="btn-white"
                id="btnLogin"
                @click="sair()"
            >
                Sair
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponenteLoginUsuario',

    methods: {
        retrieveLocalStorage() {
            const jsonAuthentication = localStorage.getItem('userLogin')
            return jsonAuthentication
        },
        tratarDados() {
            let userEmail = JSON.parse(this.retrieveLocalStorage())
            let strEmail = JSON.stringify(userEmail.nome)
            let indexOfUser = strEmail.indexOf('@')
            let user = strEmail.slice(1, indexOfUser)
            return user
            //recuperar o username e fazer um split com o caracter @ para pegar apenas o nome de login e não o email completo, EX: login.md@example.com ficaria apenas login.md.
            // altera o nome do botão para "sair" e limpar o localStorage apagando assim as info de login.
        },
        sair() {
            localStorage.removeItem('userLogin')
            alert('Até mais :(')
            location.reload()
        },
    },
    created() {
        this.retrieveLocalStorage()
    },
}
</script>

<template>
    <header>
        <div class="container display-f flex-dc justify-csb box-header">
            <div class="login display-f align-c">
                <!-- esconder .hidden -->
                <div class="hidden">
                    <a href="login.html">
                        <button class="btn-white courier">Faça login</button>
                    </a>
                </div>
                <div class="login-user">
                    <span>Olá usuário</span>
                    <button class="btn-white">Sair</button>
                </div>
            </div>
            <div class="header-logo-slogan display-f align-c">
                <div class="img-logo">
                    <img
                        src="../assets/images/Logo-Branca.png"
                        alt="Logo Hotel"
                        width="200"
                    />
                </div>

                <div class="slogan courier">
                    <h1 class="titulo-h1">
                        Desconecte-se e venha se conectar <br />
                        com a natureza
                    </h1>
                </div>

                <div class="responsive-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <!-- ComponenteNavbar -->
            <div style="font-size: 50px; color: #ffffff">
                <ComponenteNavbar />
            </div>
        </div>
    </header>
</template>

<script>
import ComponenteNavbar from './ComponenteNavbar.vue'
export default {
    name: 'ComponenteHeader',
    components: { ComponenteNavbar },
}
</script>

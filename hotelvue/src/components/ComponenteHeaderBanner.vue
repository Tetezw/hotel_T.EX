<template>
    <header id="banner">
        <div class="container display-f flex-dc justify-csb box-header">
            <componente-login-usuario />
            <div class="header-logo-slogan display-f align-c">
                <div class="img-logo">
                    <img
                        src="@/assets/images/Logo-Branca.png"
                        alt="Logo Hotel"
                        width="200"
                    />
                </div>

                <div class="slogan courier">
                    <h1 class="titulo-h1" id="titulo-h1">
                        {{ texto }}
                    </h1>
                </div>

                <div class="responsive-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>

            <!-- ComponenteNavbar -->
            <div style="font-size: 50px; color: #ffffff">
                Aqui: Componente Navbar (links)
            </div>
        </div>
    </header>
</template>

<script>
import ComponenteLoginUsuario from './ComponenteLoginUsuario.vue'
export default {
    name: 'ComponenteHeaderBanner',
    data() {
        return {
            imagem: '',
            texto: '',
            banners: [
                {
                    id: 1,
                    images: require('@/assets/images/banner/1.jpg'),
                    text: 'Relaxe em contato com a natureza',
                },
                {
                    id: 2,
                    images: require('@/assets/images/banner/2.jpg'),
                    text: 'Arquitetura estilo árabe',
                },
                {
                    id: 3,
                    images: require('@/assets/images/banner/3.jpg'),
                    text: 'Cabanas sedutoras',
                },
                {
                    id: 4,
                    images: require('@/assets/images/banner/4.jpg'),
                    text: 'Pôr do sol fantástico',
                },
                {
                    id: 5,
                    images: require('@/assets/images/banner/5.jpg'),
                    text: 'Piscinas com vista incrível',
                },
                {
                    id: 6,
                    images: require('@/assets/images/header.png'),
                    text: `Desconecte-se e venha se conectar com a natureza`,
                },
            ],
        }
    },
    components: {
        ComponenteLoginUsuario
    },
    methods: {
        trocarBanner() {
            let banner_aleatorio =
                Math.floor(Math.random() * this.banners.length) + 1

            const findBanner = this.banners.find(
                (elem) => elem.id === banner_aleatorio
            )

            this.imagem = `linear-gradient(0deg, rgba(6, 63, 87, 1), rgba(6, 63, 87, 0.3)),
    url("${findBanner.images}")`
            this.texto = findBanner.text
        },
    },
    created() {
        this.trocarBanner()
    },
}
</script>

<style scoped>
#banner {
    background: v-bind(imagem);
    background-size: cover;
    background-position: center;
}
.titulo-h1 {
    text-align: right;
}
</style>

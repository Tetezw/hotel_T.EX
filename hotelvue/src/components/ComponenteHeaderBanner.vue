<template>
  <header id="banner">
    <div class="container display-f flex-dc justify-csb box-header">
      <div class="login display-f align-c">
        <div class="login-user">
          <span id="helloUser">{{ mensagem }}</span>
          <button
            @click="removerLocalStorage"
            type="button"
            class="btn-white"
            id="btnLogin"
          >
            {{ botao }}
          </button>
        </div>
      </div>
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
        <ComponenteNavbar :autenticacao="autenticado" />
      </div>
    </div>
  </header>
</template>

<script>
import ComponenteNavbar from "./ComponenteNavbar.vue";
export default {
  name: "ComponenteHeaderBanner",
  components: { ComponenteNavbar },
  data() {
    return {
      imagem: "",
      texto: "",
      mensagem: "",
      botao: "",
      autenticado: "",
      banners: [
        {
          id: 1,
          images: require("@/assets/images/banner/1.jpg"),
          text: "Relaxe em contato com a natureza",
        },
        {
          id: 2,
          images: require("@/assets/images/banner/2.jpg"),
          text: "Arquitetura estilo árabe",
        },
        {
          id: 3,
          images: require("@/assets/images/banner/3.jpg"),
          text: "Cabanas sedutoras",
        },
        {
          id: 4,
          images: require("@/assets/images/banner/4.jpg"),
          text: "Pôr do sol fantástico",
        },
        {
          id: 5,
          images: require("@/assets/images/banner/5.jpg"),
          text: "Piscinas com vista incrível",
        },
        {
          id: 6,
          images: require("@/assets/images/header.png"),
          text: `Desconecte-se e venha se conectar com a natureza`,
        },
      ],
    };
  },
  methods: {
    trocarBanner() {
      let banner_aleatorio =
        Math.floor(Math.random() * this.banners.length) + 1;

      const findBanner = this.banners.find(
        (elem) => elem.id === banner_aleatorio
      );

      this.imagem = `linear-gradient(0deg, rgba(6, 63, 87, 1), rgba(6, 63, 87, 0.3)),
    url("${findBanner.images}")`;
      this.texto = findBanner.text;
    },
    obterLocalStorage() {
      const dados = JSON.parse(localStorage.getItem("cliente"));
      return dados;
    },
    carregarDados() {
      const dados = this.obterLocalStorage();
      if (dados) {
        this.mensagem = `Olá ${dados.email}`;
        this.botao = "Sair";
        this.autenticado = true;
      } else {
        this.mensagem = `Olá usuário!`;
        this.botao = "Fazer Login";
        this.autenticado = false;
      }
    },
    removerLocalStorage() {
      localStorage.removeItem("cliente");
      window.location.href = "/login";
    },
  },
  created() {
    this.trocarBanner();
    this.carregarDados();
  },
};
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

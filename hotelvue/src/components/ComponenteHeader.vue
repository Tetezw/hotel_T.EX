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
        Aqui: Componente Navbar (links)
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ComponenteHeader",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 90vh;
  background: linear-gradient(0deg, rgb(6, 63, 87), rgba(6, 63, 87, 0.3)),
    url(../assets/images/header.png);
  background-size: cover;
}

.box-header {
  height: 90vh;
  justify-content: space-between;
}

.login {
  justify-content: flex-end;
}

.login-user span {
  color: #ffffff;
  padding-right: 15px;
  font-size: 1.2rem;
}

.header-logo-slogan {
  justify-content: space-between;
}

.responsive-menu {
  display: none;
}
.responsive-menu.fa-bars {
  color: #ffffff;
  font-size: 1.5rem;
}
</style>

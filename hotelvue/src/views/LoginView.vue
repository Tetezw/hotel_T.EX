<template>
  <main>
    <div class="container-form-image display-f">
      <div class="container-login">
        <form
          @submit.prevent="validarUsuario(this.email, this.senha)"
          class="form-login"
          id="formLogin"
        >
          <h2>FAÇA LOGIN</h2>

          <label for="username">E-mail</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            v-model="email"
            autofocus
          />
          <span id="alertUserName" style="color: brown"></span>

          <label for="password">Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
          />
          <span id="alertPassword" style="color: brown"></span>

          <div class="lembrar-esqueci">
            <input type="checkbox" />
            <span>Lembrar-me</span>
            <a href="#" class="link-login"
              ><span class="esqueci-senha">Esqueci minha senha</span></a
            >
          </div>

          <button class="btn-entrar" id="btnLogin">Entrar</button>

          <h3>Entre com suas redes sociais</h3>
          <div class="social-login display-f">
            <div class="google-icon">
              <a href="#" class="link-login"
                ><i class="fab fa-google"></i> Google</a
              >
            </div>
            <div class="facebook-icon">
              <a href="#" class="link-login"
                ><i class="fab fa-facebook"></i> Facebook</a
              >
            </div>
          </div>
        </form>
      </div>
      <div class="container-img-login">
        <img
          src="@/assets/images/hotel-login.png"
          alt="FOTO DO HOTEL"
          width="700"
          height="585"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    salvarLocalStorage(dados) {
      localStorage.setItem("cliente", JSON.stringify(dados));
    },
    eCampoVazio(texto) {
      if (!texto.length) {
        return true;
      }
      return false;
    },
    removerAspas(texto) {
      if (texto.includes('"') || texto.includes("'")) {
        return texto.replace(/["']+/g, "");
      }
      return texto;
    },
    validarUsuario(email, senha) {
      if (this.eCampoVazio(email) || this.eCampoVazio(senha)) {
        return alert("Preencha todos os campos");
      }

      email = this.removerAspas(email).trim();
      senha = this.removerAspas(senha).trim();

      const dados = {
        email,
        senha,
      };

      this.salvarLocalStorage(dados);
      window.location.href = "/";
    },
  },
};
</script>

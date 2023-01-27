<template>
  <footer class="bg-color-primary">
    <div class="container display-f flex-dc">
      <div class="column-footer display-f align-c justify-csb">
        <div class="telefone-endereco flex-dc">
          <h3 class="mb1">Contato</h3>
          <div class="telefone display-f flex-dc">
            <a href="tel:7133650000">
              <p>(71) 3365-0000</p>
            </a>
          </div>

          <div class="endereco">
            <p>Ilha dos Frades, Salvador - BA</p>
          </div>
        </div>

        <div class="redes-sociais display-f flex-dc">
          <h3 class="mb1">Siga-nos nas Redes</h3>
          <div>
            <a href="mailto:reservas@hotel.com.br">
              <i class="fa-regular fa-envelope fa-lg"></i>
            </a>

            <a href="https://pt-br.facebook.com/">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>

            <a href="https://www.instagram.com/">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        <div class="suporte display-f flex-dc">
          <h3 class="mb1">Suporte</h3>
          <a href="contatos.html"> Deixe aqui sua dúvida </a>
        </div>

        <div class="links">
          <h3 class="mb1">Links</h3>
          <nav class="navbar-footer">
            <ul class="noto-sans display-f flex-dc">
              <li><a href="home.html">Home</a></li>
              <li><a href="sobre.html">Sobre</a></li>
              <li><a href="acomodacoes.html">Quartos</a></li>
              <li><a href="contatos.html">Contato</a></li>
              <li>
                <a href="reservas.html">Faça sua reserva</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="direitos display-f justify-c">
        <span> Hotel Recanto dos Códigos &copy; 2022 </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ComponenteFooter",
};
</script>


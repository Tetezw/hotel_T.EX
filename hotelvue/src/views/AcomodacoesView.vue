<template>
  <section class="acomodacoes">
    <div class="container">
      <article class="nossas-acomodacoes">
        <h2 class="titulo-h2 courier">
          <span class="link-border-bottom">NOSSAS ACOMODAÇÕES</span>
        </h2>
        <p class="paragrafo">
          Relaxe no conforto de um dos 545 apartamentos e desfrute das melhores
          vistas do nascer ao pôr sol. Acomodações 100% não-fumantes, smart tv,
          ferro e tábua de passar roupa, secador de cabelo e wifi. Além de 2
          piscinas aquecidas, spa, academia 24 horas, bares, restaurante e
          rooftop com vista para os principais pontos turísticos da cidade. Aqui
          no Hilton Copacabana, oferecemos tudo que você precisa para tornar a
          experiência inesquecível.
        </p>
      </article>
      <article class="detalhes-apartamentos">
        <h2 class="titulo-h2 courier">
          <span class="link-border-bottom">TODOS OS APARTAMENTOS INCLUEM</span>
        </h2>
        <div class="lista-detalhes">
          <ul class="noto-sans display-f">
            <span class="itens">
              <li>Mini bar</li>
              <li>Cofre</li>
              <li>Smart TV</li>
            </span>
            <span class="itens">
              <li>Vidros antirruído</li>
              <li>Ferro e tábua para passar roupa</li>
              <li>Acesso WiFi</li>
            </span>
          </ul>
        </div>
        <p class="paragrafo">
          <strong
            >Nossos apartamentos possuem as opções de cama King ou Twin (duas de
            solteiro). Escolha uma acomodação e faça sua reserva agora.</strong
          >
        </p>
      </article>

      <div class="acomodacoes-imagens display-f justify-c align-c">
        <ComponeteCard />
      </div>
    </div>
  </section>
</template>

<script>
import ComponeteCard from "./../components/ComponeteCard.vue";
export default {
  name: "CardTemplate",
  components: {
    ComponeteCard,
  },
};
</script>

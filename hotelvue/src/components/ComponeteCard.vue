<template>
  <div v-for="accommodation in dataAccommodation" :key="accommodation.id" class="card">
    <div class="img">
      <img :src="accommodation.img"/>
    </div>
    <div class="inferior-text display-g">
      <div class="inferior-text-top">
        <h3 class="titulo-h3">{{ accommodation.title }}</h3>
        <p>{{ accommodation.description}}</p>
      </div>
      <div class="inferior-text-button display-f justify-csb">
        <div class="inferior-left display-f flex-dc">
          <div class="text2 noto-sans">A partir de</div>
          <div class="text-valor-acomodacoes">{{ accommodation.price }}</div>
        </div>
        <div class="inferior-right display-f justify-c align-c">
          <button class="btn-blue" href="#">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponetCard",
  data() {
    return {
      dataAccommodation: [
        {
          id: 1,
          img: require("@/assets/images/card1.png"),
          title: "SUÍTE LUXUOSA",
          description: "Uma suíte espaçosa com cama king-size, vista para a cidade,TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.",
          price: "R$800,00"
        },
        {
          id: 2,
          img: require("@/assets/images/card2.png"),
          title: "SUÍTE COM VARANDA",
          description: "Uma suíte com cama king-size, varanda com vista para a piscina, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.",
          price: "R$600,00"
        },
        {
          id: 3,
          img: require("@/assets/images/card3.png"),
          title: "QUARTO SUPERIOR",
          description: "Uma suíte espaçosa com cama king-size, vista para a cidade, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.",
          price: "R$500,00"
        },
        {
          id: 4,
          img: require("@/assets/images/card4.png"),
          title: "QUARTO DELUXE",
          description: "Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.",
          price: "R$500,00"
        },
        {
          id: 5,
          img: require("@/assets/images/card5.png"),
          title: "QUARTO EXECUTIVO",
          description: "Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, escrivaninha e banheiro privativo.",
          price: "R$450,00"
        },
        {
          id: 6,
          img: require("@/assets/images/card6.png"),
          title: "QUARTO FAMÍLIA",
          description: "Um quarto espaçoso com duas camas de casal e duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.",
          price: "R$400,00"
        },
        {
          id: 7,
          img: require("@/assets/images/card7.png"),
          title: "QUARTO ADAPTADO PARA DEFICIENTES",
          description: "Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, banheiro privativo e adaptações especiais para hóspedes com deficiência.",
          price: "R$350,00"
        },
        {
          id: 8,
          img: require("@/assets/images/card8.png"),
          title: "QUARTO COM VISTA PARA O MAR",
          description: "Um quarto espaçoso com cama king-size ou duas camas de solteiro, varanda com vista para o mar, TV de tela plana, mini-bar e banheiro privativo",
          price: "R$300,00"
        },
        {
          id: 9,
          img: require("@/assets/images/card9.png"),
          title: "QUARTO ECONÔMICO",
          description: "Um quarto compacto com cama de solteiro ou beliche, TV de tela plana, mini-bar e banheiro compartilhado",
          price: "R$250,00"
        }
      ]
    };
  },
};
</script>

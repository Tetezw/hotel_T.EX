<template>
  <div class="detalhes">
    <button @click="showModal = !showModal" class="btn-white">
      Adicionar mais serviços
    </button>
    <div
      v-if="showModal"
      @click="showModal = false"
      class="modal__overlay"
      id="modal__overlay"
    >
      <div class="modal__detalhes" @click.stop="">
        <div class="modal__detalhes__itens">
          <div class="modal__detalhes__itens__descricao">
            <i
              class="fa-sharp fa-solid fa-xmark fechar"
              @click="showModal = false"
            ></i>
            <h2><span>Detalhes da Reserva</span></h2>
            <div class="conteudo__modal">
              <img :src="this.imagem" alt="Olá Mundo!" />
              <div class="itens">
              <div v-for="item in this.detalhes" :key="item">
                <!-- <span v-if="item === 'Total'" style="">{{ item }}:</span> -->
                <span :id="'d' + item">{{ item }} :</span>
              </div>
            </div>
            </div>
            <button type="button" @click="showModal = false">Sair</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteDetalhes",
  data() {
    return {
      detalhes: [
        "Acomodação",
        "Diária",
        "Check-in",
        "Check-out",
        "Adultos",
        "Serviços Adicionas",
        "Total",
      ],
      imagem: require("@/assets/images/acomodacao1.png"),
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal__overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
.modal__detalhes {
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  .fechar {
    display: flex;
    justify-content: flex-end;
    right: 0;
    cursor: pointer;
    padding-right: 15px;
  }

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;

    span {
      border-bottom: 5px solid #a35700;
    }
  }
}

.conteudo__modal{
  display: flex;
  img{
    width: 40%;
  }
  .itens{
    display: flex;
    flex-direction: column;
    margin-left:50px ;
    gap: 5px;
  }  
}

.modal__detalhes__itens__descricao .modal__detalhes__itens {
  display: flex;
}

.modal__detalhes__itens__descricao {
  flex: 60%;
  padding-left: 20px;
  position: relative;

  button {
    padding: 10px 30px;
    margin-top: 20px;
    border: none;
    background: #176485;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
  }

  div span:nth-of-type(1) {
    font-weight: bold;
  }
}

.modal__detalhes__itens__img {
  background-image: require("@/assets/images/acomodacao1.png");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  flex: 40%;
}
</style>

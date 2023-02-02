<template>
  <div class="modal__overlay hidden" id="modal__overlay">
    <div class="modal__detalhes hidden" id="modal__detalhes">
      <div class="modal__detalhes__itens">
        <div class="modal__detalhes__itens__img" id="dImagem"></div>
        <div class="modal__detalhes__itens__descricao">
          <i
            class="fa-sharp fa-solid fa-xmark fechar"
            id="btn__fechar__detalhes"
          ></i>
          <h2><span>Detalhes da Reserva</span></h2>
          <div>
            <span>Acomodação:</span>
            <span id="dQuarto"></span>
          </div>
          <div>
            <span>Diária:</span>
            <span id="dPreco"></span>
          </div>
          <div>
            <span>Check-in:</span>
            <span id="dCheckin"></span>
          </div>
          <div>
            <span>Check-out:</span>
            <span id="dCheckout"></span>
          </div>
          <div>
            <span>Adultos:</span>
            <span id="dPessoas"></span>
          </div>
          <div>
            <span>Serviços Adicionas:</span>
            <span id="dServicos"></span>
          </div>
          <div>
            <span>Total:</span>
            <span id="dTotal"></span>
          </div>
          <button type="button" id="btn__sair__detalhes">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteDetalhe",
};
</script>

<style lang="scss" scoped>
.modal__detalhes {
  width: 50%;
  height: auto;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;

  .fechar {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;

    span {
      border-bottom: 5px solid var(--laranja);
    }
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
    background: var(--azul-claro);
    color: #ffffff;
    text-transform: uppercase;
  }

  div span:nth-of-type(1) {
    font-weight: bold;
  }
}

.modal__detalhes__itens__img {
  background-image: url("./../images/acomodacao1.png");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  flex: 40%;
}
</style>

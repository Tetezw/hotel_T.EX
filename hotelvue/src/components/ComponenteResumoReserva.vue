<template>
  <div>
    <h2>Resumo da Reserva</h2>
    <div class="resumo-box">
      <ul>
        <div>
          <li>
            Apartamento:
            <span id="vAcomodacao">xxx</span>
          </li>
          <li>
            Nº de pessoas:
            <span id="vPessoas">xxx</span>
          </li>
        </div>
        <div>
          <li>
            Check-in:
            <span id="vCheckin">xxx</span>
          </li>
          <li>
            Check-out:
            <span id="vCheckout">xxx</span>
          </li>
        </div>
      </ul>
    </div>
    <button class="display-f" type="button" id="botao__adicionar__servicos">
      Adicionar mais serviços
    </button>
    <div>
      <p>
        Valor total: R$
        <span id="rValorTotal">XXX</span>
      </p>
    </div>
    <button class="display-f" type="button" id="botao__confirmar__reserva">
      Confirmar reserva
    </button>
    <button class="display-f" type="button" id="botao__detalhes__reserva">
      Ver detalhes
    </button>
  </div>
</template>

<script>
export default {
  name: "ComponenteResumoReserva",
};
</script>

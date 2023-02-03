<template>
  <div>
    <table>
      <tr>  
          <th class="reserva">Código da Reserva</th>
          <th class="reserva">Apartamento</th>
          <th class="reserva">Nº de pessoas</th>
          <th class="reserva">Check-in</th>
          <th class="reserva">Check-out</th>
          <th class="reserva">Valor total</th>
          <th class="reserva"></th>
        </tr>
      <tr>
          <td class="item" id="codReserva">12</td>
          <td class="item" id="vAcomodacao">Quarto 1</td>
          <td class="item" id="vPessoas">2</td>
          <td class="item" id="vCheckin">21/03/2022</td>
          <td class="item" id="vCheckout">24/03/2022</td>
          <td class="item" id="rValorTotal">R$ 500,00</td>
          <td>
              <button type="button" id="excluir__reserva">
                Excluir Reserva
              </button>
          </td>
      </tr>
      <tr>
        <td class="item" id="codReserva">Cód 2</td>
        <td class="item" id="vAcomodacao">Quarto 2</td>
        <td class="item" id="vPessoas">2</td>
        <td class="item" id="vCheckin">21/03/2022</td>
        <td class="item" id="vCheckout">24/03/2022</td>
        <td class="item" id="rValorTotal">R$ 500,00</td>
        <td>
          <button type="button" id="excluir__reserva">
            Excluir Reserva
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ComponenteMinhaReserva",
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
.reserva {
  border-radius: 0;
  padding: 10px;
}
tr {
    border: 1px solid;
}
td {
    border: 1px solid;
}
.item {
    text-align: center;
}
</style>
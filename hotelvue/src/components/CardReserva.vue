<template>
  <div
    v-for="(dado, i) in Dados"
    :key="dado.id"
    class="quarto-box display-f flex-dc"
  >
    <div v-if="i < 3" class="quarto-reserva display-f">
      <div class="img-reserva">
        <img :src="dado.img" alt="Imagem" />
      </div>
      <div>
        <div class="cada-quarto-reserva">
          <h3>{{ dado.title }}</h3>
          <p>{{ dado.description }}</p>
        </div>
        <div class="text-valor-reserva">{{ dado.price }}</div>
        <div class="radio-reserva">
          <label>
            <input
              type="radio"
              name="reservar-quarto"
              v-model="quartoSelecionado"
              class="reservar"
            />
            Selecionar Quarto
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dados from "@/assets/Dados.js";
export default {
  name: "CardReserva",

  data() {
    return {
      Dados,
      quartoSelecionado: null,
    };
  },
};
</script>

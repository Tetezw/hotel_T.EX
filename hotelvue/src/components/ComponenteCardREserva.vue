<template>
  <main class="container">

    <section>
      <ComponeteBarra/>
    </section>
    <div class="quartos-resumo">
      <div class="todos-os-quartos-reserva">
        <CardReserva />
      </div>
      <div class="resumo-reserva">
        <ComponenteResumoReserva/>
      </div>
    </div>
  </main>
</template>

<script>
import CardReserva from "./CardReserva.vue";
import ComponenteResumoReserva from "./ComponenteResumoReserva.vue";
import ComponeteBarra from "./ComponeteBarra.vue";
ComponeteBarra
export default {
  name: "ComponentCardREserva",
  components: {
    CardReserva,
    ComponenteResumoReserva,
    ComponeteBarra
  },
};
</script>

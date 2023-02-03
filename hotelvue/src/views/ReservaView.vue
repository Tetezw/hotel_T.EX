<template>
    <main class="container">
        <section>
            <!-- <ComponeteBarra /> -->
            <ComponenteBarraReservar />
        </section>
        <div class="quartos-resumo">
            <div class="todos-os-quartos-reserva">
                <CardReserva />
            </div>
            <div class="resumo-reserva">
                <ComponenteResumoReserva />
            </div>
        </div>
    </main>
    <ComponenteServicos />
    <ComponenteDetalhes />
</template>

<script>
import CardReserva from './../components/CardReserva.vue'
import ComponenteResumoReserva from './../components/ComponenteResumoReserva.vue'
// import ComponeteBarra from './../components/ComponeteBarra.vue'
import ComponenteBarraReservar from './../components/ComponenteBarraReservar.vue'
import ComponenteServicos from '../components/ComponenteServicos.vue'
import ComponenteDetalhes from '../components/ComponenteDetalhes.vue'
export default {
    name: 'ComponentCardReserva',
    components: {
        CardReserva,
        ComponenteResumoReserva,
        // ComponeteBarra,
        ComponenteBarraReservar,
        ComponenteServicos,
        ComponenteDetalhes,
    },
}
</script>

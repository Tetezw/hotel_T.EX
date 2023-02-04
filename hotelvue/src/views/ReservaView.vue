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

    beforeMount() {
        if (localStorage.getItem('cardContent')) {
            this.$store.commit(
                'storeCardContent',
                JSON.parse(localStorage.getItem('cardContent'))
            )
            localStorage.getItem('counter')
                ? (this.$store.state.contador = localStorage.getItem('counter'))
                : (this.$store.state.contador = 0)
        }
    },
    mounted() {
        this.updateAcomodacao(
            JSON.parse(localStorage.getItem('cardContent'))[0].title,
            0
        )
    },
    methods: {
        updateAcomodacao: function (value, index) {
            this.resetCardStyle()
            const card = document.querySelectorAll('.quarto-reserva')[index]
            this.$store.commit('storeAcomodacao', value)
            card.style.backgroundColor = '#063f57'
            card.style.color = 'white'
            document
                .querySelectorAll('input[type=radio]')[0]
                .setAttribute('checked', 'checked')
        },

        resetCardStyle: function () {
            const card = document.querySelectorAll('.quarto-reserva')
            card.forEach((item) => {
                item.style.backgroundColor = '#f1f1f1'
                item.style.color = 'black'
            })
        },
    },
}
</script>

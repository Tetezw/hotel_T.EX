<template>
    <div
        v-for="(dado, i) in $store.getters.rCard"
        :key="dado.id"
        class="quarto-box display-f flex-dc"
    >
        <div
            v-if="i < $store.getters.bookingData.contador + 3"
            class="quarto-reserva display-f"
        >
            <div class="img-reserva">
                <img :src="dado.img" alt="Imagem" style="" />
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
                            @change="updateAcomodacao(dado.title, i)"
                        />
                        Selecionar Quarto
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardReserva',

    data() {
        return {
            // quartoSelecionado: null,
        }
    },
    methods: {
        updateAcomodacao: function (value, index) {
            this.resetCardStyle()
            const card = document.querySelectorAll('.quarto-reserva')[index]
            this.$store.commit('storeAcomodacao', value)
            card.style.backgroundColor = '#063f57'
            card.style.color = 'white'
            console.log(this.$store.getters.bookingData.contador)
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

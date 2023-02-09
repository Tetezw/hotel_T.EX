<template>
    <div class="quartos-resumo">
        <div class="todos-os-quartos-reserva">
            <div
                v-for="(item, index) in this.$store.state.cardContent"
                :key="item"
                class="quarto-box display-f flex-dc"
            >
                <div class="quarto-reserva display-f">
                    <div class="img-reserva">
                        <img :src="item.path" alt="Imagem" />
                    </div>
                    <div>
                        <div class="cada-quarto-reserva">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.description }}</p>
                        </div>
                        <div class="text-valor-reserva">{{ item.valor }}</div>
                        <div class="radio-reserva">
                            <input
                                type="radio"
                                name="reservar-quarto"
                                :id="item.id"
                                class="reservar"
                                @change="updateAcomodacao(item.name, index)"
                            />
                            <label for="reservar-quarto1"
                                >Selecionar Quarto</label
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponenteCardReservar',

    data() {
        return {
            bg: '',
            cor: '',
            active: true,
        }
    },

    methods: {
        updateAcomodacao: function (value, index) {
            this.resetCardStyle()
            const card = document.querySelectorAll('.quarto-reserva')[index]
            this.$store.commit('storeAcomodacao', value)
            card.style.backgroundColor = '#063f57'
            card.style.color = 'white'
            console.log(index)
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

<template>
    <div class="quartos-resumo">
        <div class="todos-os-quartos-reserva">
            <div
                v-for="item in cardContent"
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
import { cardContent } from './DadosCardReservar.js'
export default {
    name: 'ComponenteCardReservar',
    data() {
        return {
            cardContent: cardContent,
        }
    },
}
</script>

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
export default {
    name: 'ComponenteCardReservar',
    data() {
        return {
            cardContent: {
                quarto1: {
                    id: 'reservar-quarto1',
                    name: 'QUARTO EXECUTIVO',
                    description:
                        'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV detela plana, mini-bar, escrivaninha e banheiro privativo.',
                    path: '/images/reserva1.png',
                    valor: 'R$500,00',
                },
                quarto2: {
                    id: 'reservar-quarto2',
                    name: 'QUARTO DELUXE',
                    description:
                        ' Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.',
                    path: '/images/reserva2.png',
                    valor: 'R$500,00',
                },
                quarto3: {
                    id: 'reservar-quarto3',
                    name: 'QUARTO FAMÍLIA',
                    description:
                        ' Um quarto espaçoso com duas camas de casal e duas camas desolteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.',
                    path: '/images/reserva3.png',
                    valor: 'R$500,00',
                },
            },
        }
    },
    methods: {
        console: function () {
            console.log(this.cardContent.quarto1.path)
        },
    },
}
</script>

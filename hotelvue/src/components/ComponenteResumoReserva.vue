<template>
    <div>
        <h2>Resumo da Reserva</h2>
        <div class="resumo-box">
            <ul>
                <div>
                    <li>
                        Apartamento:
                        <span id="vAcomodacao">{{
                            $store.getters.bookingData.acomodacao
                        }}</span>
                    </li>
                    <li>
                        Nº de pessoas:
                        <span id="vPessoas">{{
                            $store.getters.bookingData.adultos
                        }}</span>
                    </li>
                </div>
                <div>
                    <li>
                        Check-in:
                        <span id="vCheckin">{{
                            $store.getters.bookingData.checkin
                        }}</span>
                    </li>
                    <li>
                        Check-out:
                        <span id="vCheckout">{{
                            $store.getters.bookingData.checkout
                        }}</span>
                    </li>
                </div>
            </ul>
        </div>
        <button @click="showAddServices()" class="btn-white">
            Adicionar mais serviços
        </button>
        <div>
            <p>
                Valor total: R$
                <span id="rValorTotal">{{
                    $store.getters.bookingData.valorTotal
                }}</span>
            </p>
        </div>
        <button class="display-f" type="button" id="botao__confirmar__reserva">
            Confirmar reserva
        </button>
        <button
            class="display-f"
            type="button"
            id="botao__detalhes__reserva"
            @click="showAddDetalhes()"
        >
            Ver detalhes
        </button>
    </div>
</template>

<script>
export default {
    name: 'ComponenteResumoReserva',
    methods: {
        showAddServices: function () {
            this.$store.commit('storeServicos', true)
        },
        showAddDetalhes: function () {
            this.$store.commit('storeDetalhes', true)
        },
    },
}
</script>

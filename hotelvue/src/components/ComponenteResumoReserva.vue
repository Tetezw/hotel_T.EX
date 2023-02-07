<template>
    <div>
        <h2>Resumo da Reserva</h2>
        <div class="resumo-box">
            <ul>
                <div>
                    <li>
                        Apartamento:
                        <span>{{ $store.getters.bookingData.acomodacao }}</span>
                    </li>
                    <li>
                        Nº de pessoas:
                        <span>{{ $store.getters.bookingData.adultos }}</span>
                    </li>
                </div>
                <div>
                    <li>
                        Check-in:
                        <span>{{ $store.getters.bookingData.checkin }}</span>
                    </li>
                    <li>
                        Check-out:
                        <span>{{ $store.getters.bookingData.checkout }}</span>
                    </li>
                    <li>
                        Noites:
                        <span>{{ $store.getters.bookingData.noites }}</span>
                    </li>
                    <li>
                        Serviços:
                        <ul>
                            <li
                                v-for="servico in $store.state.dadosReserva
                                    .servicos"
                                :key="servico.nome"
                            >
                                ✅ {{ servico.nome }} - R${{ servico.preco }}
                            </li>
                        </ul>
                    </li>
                </div>
            </ul>
        </div>
        <CompServicos />
        <div>
            <details v-if="this.temCupom == false">
                <summary>Aplique seu cupom de desconto</summary>
                <h4>Seu cupom é: {{ cupomAleatorio }}</h4>
                <input
                    type="text"
                    v-model="cupom"
                    @change="cupom"
                    placeholder="Digite o código"
                />
            </details>
            <p>Valor total: R$ {{ this.total() }}</p>
        </div>
        <button
            @click="cadastrarReserva"
            class="display-f"
            type="button"
            id="botao__confirmar__reserva"
        >
            Confirmar reserva
        </button>
    </div>
</template>

<script>
import CompServicos from './CompServicos.vue'
export default {
    name: 'ComponenteResumoReserva',
    cupomAleatorio: '',
    components: {
        CompServicos,
    },
    data() {
        return {
            cupom: '',
            temCupom: false,
            checkout: this.$store.getters.bookingData.checkout,
        }
    },
    methods: {
        geraCupom() {
            this.cupomAleatorio = Math.random().toString(36).substring(2, 10)
            this.$store.getters.bookingData.cupomDesconto = this.cupomAleatorio
        },
        salvar(chave, valor) {
            localStorage.setItem(chave, JSON.stringify(valor))
        },
        obterDados(chave) {
            const dados = localStorage.getItem(chave)
                ? JSON.parse(localStorage.getItem(chave))
                : null

            return dados
        },

        totalServicos() {
            const servicos = this.$store.getters.bookingData.servicos
            let totalServicos = 0
            for (let total of servicos) {
                totalServicos += total.preco
            }
            return totalServicos
        },
        cadastrarReserva() {
            if (!this.$store.getters.bookingData.checkin) {
                alert('Selecione a data de checkin')
                return
            }
            if (!this.$store.getters.bookingData.checkout) {
                alert('Selecione a data de checkout')
                return
            }
            if (this.$store.getters.bookingData.noites < 0) {
                alert('Selecione a data de checkin anterior a de checkout')
                return
            }
            if (!this.$store.getters.bookingData.adultos) {
                alert('Selecione o número de pessoas')
                return
            }
            if (!this.$store.getters.bookingData.acomodacao) {
                alert('Selecione o quarto')
                return
            }

            const roomPrice = this.$store.getters.bookingData.quartoPreco
            if (this.temCupom == false) {
                if (
                    this.$store.getters.bookingData.cupomDesconto.length &&
                    this.$store.getters.bookingData.cupomDesconto !== this.cupom
                ) {
                    alert('Cupom inválido! Tente outro.')
                    return
                }
                if (
                    this.$store.getters.bookingData.cupomDesconto === this.cupom
                ) {
                    this.salvar(
                        'cupom',
                        this.$store.getters.bookingData.cupomDesconto
                    )
                    this.$store.commit('storeQuartoPreco', roomPrice * 0.9)
                }
            }

            if (!this.$store.getters.bookingData.servicos.length) {
                const resposta = confirm(
                    'Deseja adicionar algum serviço especial?'
                )
                if (resposta) {
                    return
                }
            }

            this.$store.commit('storeValorTotal', this.total())
            console.log(this.$store.getters.bookingData.quartoPreco)
            this.valorTotal = this.total()
            this.$store.commit(
                'storeCupomDesconto',
                String(Math.random()).slice(2)
            )

            const reservas = this.$store.getters.bookingData

            this.salvar('reserva', reservas)
            this.limpar()
            alert('Reserva realizada com sucesso!')
            this.$router.push('/minhasreservas')
        },
        total() {
            let adultos
            if (this.$store.getters.bookingData.adultos == 1) {
                adultos = 1
            } else {
                adultos =
                    1 +
                    (Number(this.$store.getters.bookingData.adultos) - 1) * 0.15
            }
            const totalReserva =
                (this.totalServicos() +
                    Number(this.$store.getters.bookingData.quartoPreco) *
                        this.$store.getters.bookingData.noites) *
                adultos
            return totalReserva ? totalReserva : 0
        },
        limpar() {
            const bookingData = {
                checkin: '',
                checkout: '',
                adultos: '',
                acomodacao: '',
                noites: '',
                servicos: [],
                cupomDesconto: '',
                valorTotal: '',
            }
            this.$store.commit('storeBookingData', bookingData)
        },
    },
    created() {
        if (!localStorage.getItem('cupom')) {
            this.geraCupom()
        } else {
            this.temCupom = true
        }
    },
    watch: {
        checkout(vl) {
            this.noites()
            console.log(vl)
        },
    },
}
</script>

<style scoped>
details {
    margin-top: 35px;
}
details input {
    margin-top: 10px;
    font-size: 1.1rem;
}
</style>

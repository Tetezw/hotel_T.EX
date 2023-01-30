<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
    <!-- <section>
        <h1>Hotel Recanto dos Códigos</h1>
    </section> -->
    <ComponenteHeader />
    <main class="container">
        <section>
            <h2 class="titulo-h2 courier">
                <span class="link-border-bottom"> MINHA RESERVA </span>
            </h2>
            <ComponenteBarraReservar
                @nPessoas="onChangeAdultos"
                @checkin="onChangeCheckin"
                @checkout="onChangeCheckout"
            />
        </section>
        <section>
            <div class="quartos-resumo">
                <ComponenteCardReservar />
                <aside class="resumo-reserva">
                    <div>
                        <h2>Resumo da Reserva</h2>
                        <div class="resumo-box">
                            <ul>
                                <div>
                                    <li>
                                        Apartamento:
                                        <span id="vAcomodacao">xxx</span>
                                    </li>
                                    <li>
                                        N° de adultos:
                                        <span id="vPessoas">{{ adultos }}</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        Check-in:
                                        <span id="vCheckin">{{ checkin }}</span>
                                    </li>
                                    <li>
                                        Check-out:
                                        <span id="vCheckout">{{
                                            checkout
                                        }}</span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <button
                            class="display-f"
                            type="button"
                            id="botao__adicionar__servicos"
                        >
                            Adicionar mais serviços
                        </button>
                        <div>
                            <p>
                                Valor total: R$
                                <span id="rValorTotal">XXX</span>
                            </p>
                        </div>
                        <button
                            class="display-f"
                            type="button"
                            id="botao__confirmar__reserva"
                        >
                            Confirmar reserva
                        </button>
                        <button
                            class="display-f"
                            type="button"
                            id="botao__detalhes__reserva"
                        >
                            Ver detalhes
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    </main>
    <ComponenteFooter />
</template>

<script>
import ComponenteHeader from './components/ComponenteHeader.vue'
import ComponenteBarraReservar from './components/ComponenteBarraReservar.vue'
import ComponenteCardReservar from './components/ComponenteCardReservar.vue'
import ComponenteFooter from './components/ComponenteFooter.vue'
export default {
    name: 'App',
    data() {
        return {
            checkin: '',
            checkout: '',
            adultos: '',
        }
    },
    components: {
        ComponenteHeader,
        ComponenteBarraReservar,
        ComponenteCardReservar,
        ComponenteFooter,
    },

    // props: {
    //     checkin: String,
    // },

    methods: {
        onChangeAdultos: function (value) {
            this.adultos = value
            console.log(value)
        },

        formatDates: function (value) {
            let date = value
            date =
                date.slice(date.length - 2, date.length) +
                '/' +
                date.slice(date.length - 5, date.length - 3) +
                '/' +
                date.slice(0, 4)
            return date
        },

        onChangeCheckin: function (value) {
            this.checkin = this.formatDates(value)
        },
        onChangeCheckout: function (value) {
            this.checkout = this.formatDates(value)
        },
    },
}
</script>

<style lang="scss" src="./scss/style.scss" />

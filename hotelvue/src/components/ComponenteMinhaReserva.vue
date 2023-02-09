<template>
    <table>
        <tr>
            <th>Código da Reserva</th>
            <th>Apartamento</th>
            <th>Nº de pessoas</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Noites</th>
            <th>Serviços:</th>
            <th>Total</th>
        </tr>
        <tr v-for="(reserva, i) in reservas" :key="i">
            <td>{{ reserva.codigo }}</td>
            <td>
                {{ reserva.acomodacao }} <br />
                {{ this.moeda(reserva.quartoPreco) }}
            </td>
            <td>{{ reserva.adultos }}</td>
            <td>{{ reserva.checkin }}</td>
            <td>{{ reserva.checkout }}</td>
            <td>
                {{ reserva.noites }}
            </td>
            <td>
                <ul>
                    <li
                        v-for="servicos in reserva.servicos"
                        :key="servicos.nome"
                    >
                        {{ servicos.nome }} - {{ this.moeda(servicos.preco) }}
                    </li>
                </ul>
            </td>
            <td>{{ this.moeda(reserva.valorTotal) }}</td>
            <td>
                <button
                    @click="this.excluirReserva(reserva.codigo)"
                    class="excluir"
                    type="button"
                    title="Excluir Reserva"
                >
                    Excluir Reserva
                </button>
                <ComponenteDetalhes :codigo="reserva.codigo" />
            </td>
        </tr>
    </table>
</template>

<script>
import ComponenteDetalhes from './ComponenteDetalhes.vue'

export default {
    name: 'ComponenteMinhaReserva',
    components: {
        ComponenteDetalhes,
    },
    data() {
        return {
            reservas: '',
        }
    },
    methods: {
        obterDados(chave) {
            const dados = localStorage.getItem(chave)
                ? JSON.parse(localStorage.getItem(chave))
                : null

            return dados
        },
        excluirReserva(indice) {
            const resposta = confirm(
                'Tem certeza que deseja excluir essa reserva?'
            )
            if (resposta) {
                this.salvar(
                    'reserva',
                    this.reservas.filter((item) => item.codigo !== indice)
                )
                this.reservas = this.obterDados('reserva')
            }
        },
        formatarDataBR(data) {
            const inData = Date(data)

            const dia = inData.getDate()
            const mes = inData.getMounth()
            const ano = inData.getFullYear()

            return `${dia}-${mes}-${ano}`
        },
        salvar(chave, valor) {
            localStorage.setItem(chave, JSON.stringify(valor))
        },
        moeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        },
    },
    computed: {},
    created() {
        this.reservas = this.obterDados('reserva')
    },
}
</script>
<style scoped>
table {
    width: 100%;
}
table th {
    background: #063f57;
    padding: 5px;
    color: #fff;
}
table tr td {
    padding: 8px 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.excluir {
    width: 100%;
    border: none;
    color: #fff;
    padding: 5px;
    margin: 0 2px 5px 0;
    cursor: pointer;
}
.excluir {
    background: red;
}
</style>

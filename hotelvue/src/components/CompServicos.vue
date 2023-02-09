<template>
    <details class='detalhesServicos'>
        <summary>Serviços Adicionais</summary>
        <div v-for="item in servicos" :key="item.nome">
            <input
                type="checkbox"
                v-model="itens"
                @change="$store.commit('storeServicos', itens)"
                name="itens"
                :value="{ nome: item.nome, preco: item.preco }"
            />
            {{ item.nome }} -
            {{ this.moeda(item.preco) }}
        </div>
    </details>
</template>

<script>
export default {
    name: 'CmpServicos',
    data() {
        return {
            servicos: [
                { nome: 'Spa', preco: 100 },
                { nome: 'Passeio de Barco', preco: 100 },
                { nome: 'Passeio Entre Ilhas ', preco: 100 },
                { nome: 'Café da Manhã no Quarto', preco: 100 },
                { nome: 'Trilha Ecológica', preco: 100 },
            ],
            itens: [],
        }
    },
    methods: {
        moeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        },
    },
}
</script>

<style scoped>
details {
    background: #fff;
    margin-top: 30px;
    padding: 5px;
    color: #000;
}
summary {
    list-style: none;
}
summary::before {
    content: '✚';
    margin-right: 5px;
}
details div {
    margin: 10px 0;
}
</style>

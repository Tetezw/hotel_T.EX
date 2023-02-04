<template>
    <div class="dropdown__serviços">
        <div
            v-if="$store.getters.modalState.servicos"
            class="dropdown__overlay"
            id="dropdown__overlay"
        >
            <div class="dropdown__content" id="dropdown__content">
                <i
                    class="fa-sharp fa-solid fa-xmark fechar"
                    id="btn__fechar__servicos"
                    @click="showAddServices()"
                ></i>
                <h2><span>Adicione Mais Serviços</span></h2>
                <section v-for="servico in this.servicos" :key="servico.nome">
                    <div>
                        <input
                            type="checkbox"
                            :nome="servico.nome"
                            :id="servico.nome"
                            value="100"
                        />
                        <label
                            :for="servico.nome"
                            :class="'dropdown__content__' + servico.nome"
                        >
                            <span>{{ servico.nome }}</span>
                            <span> - R$ {{ servico.preco }}</span>
                        </label>
                    </div>
                </section>

                <button type="button" id="btn__sair__servico">
                    <i class="fa-solid fa-square-plus"></i> Adicionar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    nome: 'componenteServico',
    data() {
        return {
            servicos: [
                { nome: 'Spa', preco: '100,00' },
                { nome: 'Passeio de Barco', preco: '100,00' },
                { nome: 'Passeio Entre Ilhas ', preco: '100,00' },
                { nome: 'Café da Manhã no Quarto', preco: '100,00' },
                { nome: 'Trilha Ecológica', preco: '100,00' },
            ],

            modalOn: true,
        }
    },
    methods: {
        showAddServices: function () {
            this.$store.commit('storeServicos', false)
        },
    },
}
</script>

<style lang="scss" scoped>
.dropdown__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
}

.dropdown__content {
    width: 50%;
    height: auto;
    background: #ffffff;
    border-radius: 5px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .fechar {
        position: absolute;
        right: 0;
        cursor: pointer;
        padding-right: 15px;
    }

    h2 {
        margin-bottom: 20px;
        text-transform: uppercase;
        span {
            border-bottom: 5px solid #a35700;
        }
    }

    div {
        margin-bottom: 5px;
        span {
            cursor: pointer;
            margin: 5px 0 5px 5px;
        }
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        padding: 1rem 1rem;
        color: white;
        background-color: #063f57;
        margin-top: 20px;
    }
}

.fa-square-plus {
    margin: 3px 3px 0 0;
}
</style>

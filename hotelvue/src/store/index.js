import { createStore } from 'vuex'

export default createStore({
    state: {
        // Conteudo dos cards da página reservar
        cardContent: [
            {
                id: 1,
                img: require('@/assets/images/card1.png'),
                title: 'SUÍTE LUXUOSA',
                description:
                    'Uma suíte espaçosa com cama king-size, vista para a cidade,TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.',
                price: 'R$800,00',
            },
            {
                id: 2,
                img: require('@/assets/images/card2.png'),
                title: 'SUÍTE COM VARANDA',
                description:
                    'Uma suíte com cama king-size, varanda com vista para a piscina, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.',
                price: 'R$600,00',
            },
            {
                id: 3,
                img: require('@/assets/images/card3.png'),
                title: 'QUARTO SUPERIOR',
                description:
                    'Uma suíte espaçosa com cama king-size, vista para a cidade, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.',
                price: 'R$500,00',
            },
            {
                id: 4,
                img: require('@/assets/images/card4.png'),
                title: 'QUARTO DELUXE',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.',
                price: 'R$500,00',
            },
            {
                id: 5,
                img: require('@/assets/images/card5.png'),
                title: 'QUARTO EXECUTIVO',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, escrivaninha e banheiro privativo.',
                price: 'R$450,00',
            },
            {
                id: 6,
                img: require('@/assets/images/card6.png'),
                title: 'QUARTO FAMÍLIA',
                description:
                    'Um quarto espaçoso com duas camas de casal e duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.',
                price: 'R$400,00',
            },
            {
                id: 7,
                img: require('@/assets/images/card7.png'),
                title: 'QUARTO ADAPTADO PARA DEFICIENTES',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, banheiro privativo e adaptações especiais para hóspedes com deficiência.',
                price: 'R$350,00',
            },
            {
                id: 8,
                img: require('@/assets/images/card8.png'),
                title: 'QUARTO COM VISTA PARA O MAR',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, varanda com vista para o mar, TV de tela plana, mini-bar e banheiro privativo',
                price: 'R$300,00',
            },
            {
                id: 9,
                img: require('@/assets/images/card9.png'),
                title: 'QUARTO ECONÔMICO',
                description:
                    'Um quarto compacto com cama de solteiro ou beliche, TV de tela plana, mini-bar e banheiro compartilhado',
                price: 'R$250,00',
            },
        ],
        // Dados da Reserva
        dadosReserva: {
            checkin: '',
            checkout: '',
            adultos: '',
            acomodacao: '',
            valorTotal: '',
        },

        modalProperties: {
            detalhes: '',
            servicos: '',
        },
    },
    getters: {
        rCard(state) {
            return state.cardContent
        },
        bookingData(state) {
            return state.dadosReserva
        },
        modalState(state) {
            return state.modalProperties
        },
    },
    mutations: {
        storeCheckin(state, data) {
            state.dadosReserva.checkin = data
        },
        storeCheckout(state, data) {
            state.dadosReserva.checkout = data
        },
        storeAdultos(state, data) {
            state.dadosReserva.adultos = data
        },
        storeAcomodacao(state, data) {
            state.dadosReserva.acomodacao = data
        },
        storeDetalhes(state, data) {
            state.modalProperties.detalhes = data
        },
        storeServicos(state, data) {
            state.modalProperties.servicos = data
        },
    },
    actions: {},
    modules: {},
})

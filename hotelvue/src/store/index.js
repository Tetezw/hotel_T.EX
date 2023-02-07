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
                price: 800,
            },
            {
                id: 2,
                img: require('@/assets/images/card2.png'),
                title: 'SUÍTE COM VARANDA',
                description:
                    'Uma suíte com cama king-size, varanda com vista para a piscina, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.',
                price: 600,
            },
            {
                id: 3,
                img: require('@/assets/images/card3.png'),
                title: 'QUARTO SUPERIOR',
                description:
                    'Uma suíte espaçosa com cama king-size, vista para a cidade, TV de tela plana, mini-bar, banheira de hidromassagem e área de estar separada.',
                price: 500,
            },
            {
                id: 4,
                img: require('@/assets/images/card4.png'),
                title: 'QUARTO DELUXE',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.',
                price: 500,
            },
            {
                id: 5,
                img: require('@/assets/images/card5.png'),
                title: 'QUARTO EXECUTIVO',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, escrivaninha e banheiro privativo.',
                price: 450,
            },
            {
                id: 6,
                img: require('@/assets/images/card6.png'),
                title: 'QUARTO FAMÍLIA',
                description:
                    'Um quarto espaçoso com duas camas de casal e duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.',
                price: 400,
            },
            {
                id: 7,
                img: require('@/assets/images/card7.png'),
                title: 'QUARTO ADAPTADO PARA DEFICIENTES',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar, banheiro privativo e adaptações especiais para hóspedes com deficiência.',
                price: 350,
            },
            {
                id: 8,
                img: require('@/assets/images/card8.png'),
                title: 'QUARTO COM VISTA PARA O MAR',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, varanda com vista para o mar, TV de tela plana, mini-bar e banheiro privativo',
                price: 300,
            },
            {
                id: 9,
                img: require('@/assets/images/card9.png'),
                title: 'QUARTO ECONÔMICO',
                description:
                    'Um quarto compacto com cama de solteiro ou beliche, TV de tela plana, mini-bar e banheiro compartilhado',
                price: 250,
            },
        ],
        // Dados da Reserva
        dadosReserva: {
            checkin: '',
            checkout: '',
            adultos: '',
            acomodacao: '',
            noites: '',
            servicos: [],
            quartoPreco: '',
            cupomDesconto: '',
            img: '',
            valorTotal: '',
        },

        modalProperties: {
            detalhes: false,
            servicos: false,
        },

        contador: 0,
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
        getCardContent(state) {
            return state.cardContent
        },
        getCounter(state) {
            return state.contador
        },
    },
    mutations: {
        // Muda a ordem dos cards
        order(state, i) {
            let cardContent = state.cardContent
            let aux = []
            aux.push(cardContent[i])
            cardContent.splice(i, 1)
            cardContent.forEach((element) => {
                aux.push(element)
            })
            state.cardContent = aux
            localStorage.setItem('cardContent', JSON.stringify(aux))
        },
        // Contador
        counter(state) {
            state.contador += 1
            localStorage.getItem('counter')
                ? (state.contador =
                      parseInt(localStorage.getItem('counter')) + 1)
                : null
            localStorage.setItem('counter', state.contador)
        },
        // Dados da Reserva
        storeBookingData(state, data) {
            state.dadosReserva = data
        },
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
        storeNoites(state, data) {
            state.dadosReserva.noites = data
        },
        storeServicos(state, data) {
            state.dadosReserva.servicos = data
        },
        storeValorTotal(state, data) {
            state.dadosReserva.valorTotal = data
        },
        storeCupomDesconto(state, data) {
            state.dadosReserva.cupomDesconto = data
        },
        storeQuartoPreco(state, data) {
            state.dadosReserva.quartoPreco = data
        },
        storeImg(state, data) {
            state.dadosReserva.img = data
        },
        // Conteudo dos cards
        storeCardContent(state, data) {
            state.cardContent = data
        },
    },
    actions: {},
    modules: {},
})

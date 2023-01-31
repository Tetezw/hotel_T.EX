import { createStore } from 'vuex'

export default createStore({
    state: {
        // Conteudo dos cards da página reservar
        cardContent: [
            {
                id: 'reservar-quarto1',
                name: 'QUARTO EXECUTIVO',
                description:
                    'Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV detela plana, mini-bar, escrivaninha e banheiro privativo.',
                path: '/images/reserva1.png',
                valor: 'R$500,00',
            },
            {
                id: 'reservar-quarto2',
                name: 'QUARTO DELUXE',
                description:
                    ' Um quarto espaçoso com cama king-size ou duas camas de solteiro, vista para a cidade, TV de tela plana, mini-bar e banheiro privativo.',
                path: '/images/reserva2.png',
                valor: 'R$500,00',
            },
            {
                id: 'reservar-quarto3',
                name: 'QUARTO FAMÍLIA',
                description:
                    ' Um quarto espaçoso com duas camas de casal e duas camas desolteiro, vista para a cidade, TV de tela plana, mini-bar, área de estar separada e banheiro privativo.',
                path: '/images/reserva3.png',
                valor: 'R$500,00',
            },
        ],
        // Dados da Reserva
        dadosReserva: {
            checkin: '',
            checkout: '',
            adultos: '',
            acomodação: '',
        },
    },
    getters: {},
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
    },
    actions: {},
    modules: {},
})

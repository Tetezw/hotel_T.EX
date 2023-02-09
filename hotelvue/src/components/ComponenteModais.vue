<template>
    <div
        id="modalServicos"
        class="overlay"
        :style="this.$store.state.modalProperties.servicos"
    >
        <div class="popup">
            <h2 class="h2-titulo courier link-border-bottom">
                Adicionar serviços<button
                    class="closeAddServicos"
                    @click="closeModalServicos()"
                >
                    <i class="fa-sharp fa-solid fa-xmark fa-3x"></i>
                </button>
            </h2>

            <label for="passeioIlhas"
                ><input
                    class="modalCheckboxServicos"
                    type="checkbox"
                    name="passeioIlhas"
                    id="passeioIlhas"
                />Passeio entre ilhas - R$ 100,00</label
            >
            <label for="passeioBarco">
                <input
                    class="modalCheckboxServicos"
                    type="checkbox"
                    name="passeioBarco"
                    id="passeioBarco"
                />Passeio de barco - R$ 100,00</label
            >
            <label for="spa"
                ><input
                    class="modalCheckboxServicos"
                    type="checkbox"
                    name="spa"
                    id="spa"
                />
                Spa - R$ 100,00</label
            >
            <label for="trilhaEcologica"
                ><input
                    class="modalCheckboxServicos"
                    type="checkbox"
                    name="trilhaEcologica"
                    id="trilhaEcologica"
                />Trilha Ecológica - R$ 100,00</label
            >
            <label for="cafe"
                ><input
                    class="modalCheckboxServicos"
                    type="checkbox"
                    name="cafe"
                    id="cafe"
                />Café da manha no quarto - R$ 100,00</label
            >
        </div>
    </div>
    <div
        id="modalDetalhes"
        class="overlay"
        :style="this.$store.state.modalProperties.detalhes"
    >
        <div class="popupDetails">
            <div class="img"></div>
            <div class="details">
                <h2 class="titulo-h2 courier link-border-bottom">
                    Detalhes<button
                        class="closeModalDetails"
                        @click="closeModalDetails()"
                    >
                        <i class="fa-sharp fa-solid fa-xmark fa-3x"></i>
                    </button>
                </h2>
                <span><strong id="dAcomodacao">Acomodação:</strong></span
                ><span><strong id="dDiaria">Diária:</strong></span
                ><span><strong id="dCheckin">Check-in:</strong></span
                ><span><strong id="dCheckout">Check-out:</strong></span
                ><span><strong id="dAdultos">Adultos:</strong></span
                ><span><strong id="dServicos">Serviços:</strong></span
                ><span><strong id="dTotal">Total:</strong></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ComponenteModais',

    methods: {
        closeModalDetails: function () {
            this.$store.state.modalProperties.detalhes = 'display:none'
        },
        closeModalServicos: function () {
            this.$store.state.modalProperties.servicos = 'display:none'
        },
    },
}
</script>

<style>
/* Modal adicionar Serviços */

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    width: 100%;
}

.popup,
.popupDetails {
    margin: 70px auto;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    width: 40%;
    height: 60%;
    color: #080710;
    display: flex;
    flex-direction: column;
    transition: all 5s ease-in-out;
    border-radius: 40px 5px;
}
.popup span {
    display: block;
}

.popup h2 {
    color: var(--azul-escuro);
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.popup h2 button {
    border: none;
    background: none;
}
.popup h2 button:hover,
.popupDetails h2 button:hover {
    cursor: pointer;
    color: red;
}

.popup label {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
}
.popup input[type='checkbox'] {
    flex: none;
    margin-right: 10px;
}

.popupDetails {
    border-radius: 50px 5px;
    display: flex;
    flex-direction: row;
    width: 50%;
}
.popupDetails .img {
    background-image: url('../assets/images/acomodacao1.png');
    width: 50%;
    border: 20px solid white;
    border-radius: 50px 50px;
}
.popupDetails .details {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.popupDetails h2 {
    margin-top: 20px;
    margin-right: 20px;
    padding: 0;
    /* width: 500px; */
    display: flex;
    justify-content: space-between;
}
.popupDetails h2 button {
    border: none;
    background: none;
}

.popupDetails span {
    display: block;
    padding: 5px;
    width: 100%;
}

@keyframes popup {
    from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.popup,
.popupDetails {
    animation-name: popup;
    animation-duration: 0.5s;
}
</style>

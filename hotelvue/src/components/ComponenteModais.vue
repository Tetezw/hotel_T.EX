<template>
    <div id="modalServicos" class="overlay">
        <div class="popup">
            <h2 class="h2-titulo courier link-border-bottom">
                Adicionar serviços<button class="closeAddServicos">
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
    <div id="modalDetalhes" class="overlay">
        <div class="popupDetails">
            <div class="img"></div>
            <div class="details">
                <h2 class="titulo-h2 courier link-border-bottom">
                    Detalhes<button class="closeModalDetails">
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
}
</script>

<template>
    <fieldset class="reserva">
        <form class="novoform" action="" method="get">
            <ul class="display-f">
                <ComponenteInputReservar />
            </ul>
        </form>
    </fieldset>
</template>

<script>
import ComponenteInputReservar from './ComponenteInputReservar.vue'
export default {
    name: 'ComponenteBarraReservar',
    components: { ComponenteInputReservar },
}
</script>

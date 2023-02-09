<template>
    <main>
        <section>
            <div class="container">
                <h2 class="titulo-h2 courier">
                    <span class="link-border-bottom">Minhas Reservas</span>
                </h2>
                <ComponenteMinhaReserva />
            </div>
        </section>
    </main>
</template>

<script>
import ComponenteMinhaReserva from '@/components/ComponenteMinhaReserva.vue'

export default {
    name: 'MinhasReservasView',
    components: {
        ComponenteMinhaReserva,
    },
}
</script>
<style scoped>
section {
    margin-bottom: 500px;
}
</style>

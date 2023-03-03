<template>
    <body>
        <ComponenteHeaderBanner />
        <router-view></router-view>
        <ComponenteFooter />
    </body>
</template>

<script>
import ComponenteHeaderBanner from '@/components/ComponenteHeaderBanner.vue'
import ComponenteFooter from '@/components/ComponenteFooter.vue'

export default {
    name: 'App',
    components: {
        ComponenteHeaderBanner,
        ComponenteFooter,
    },
}
</script>

<style lang="scss" src="@/scss/style.scss" />

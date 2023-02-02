<template>
    <componenteServico />
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
    <section>
        <h1>Hotel Recanto dos Códigos</h1>
    </section>
</template>

<script>
import componenteServico from "./components/ComponenteServiços.vue"
export default {
    name: 'App',
    components: {
        componenteServico
    },
}
</script>

<style lang="scss" src="./scss/style.scss" />

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <section>
    <h1>Hotel Recanto dos Códigos</h1>
    <!-- <ComponenteCardsDiferenciais /> -->
    <ComponenteCardsTime />
  </section>
</template>

<script>
// import ComponenteCardsDiferenciais from './components/ComponenteCardsDiferenciais'
import ComponenteCardsTime from './components/ComponenteCardsTime'

export default {
  name: "App",
  components: {
    // ComponenteCardsDiferenciais
    ComponenteCardsTime
  },
  components: {
  },
};
</script>

<style lang='scss' src="./scss/style.scss" />

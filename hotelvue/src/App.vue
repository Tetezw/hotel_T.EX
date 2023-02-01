<template>
  <main>
    <ComponenteHeader/>
    <CardTemplate/>
    <ComponeteFooter/>
  </main>

  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
  <!-- <section>
    <h1>Hotel Recanto dos Códigos</h1>
  </section> -->
</template>

<script>
import CardTemplate from "./components/CardTemplate.vue"
import ComponeteFooter from "./components/ComponenteFooter.vue"
import ComponenteHeader from "./components/ComponenteHeader.vue";

export default {
  name: "App",
  components: {
    CardTemplate,
    ComponeteFooter,
    ComponenteHeader

  }
}
</script>

<style lang='scss' src="./scss/style.scss" />

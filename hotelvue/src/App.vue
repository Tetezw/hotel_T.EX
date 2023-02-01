<template>
  <main>
    <ComponenteHeader/>
    <ComponenteCardREserva/>
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
// import CardTemplate from "./components/CardTemplate.vue"
import ComponeteFooter from "./components/ComponenteFooter.vue"
import ComponenteHeader from "./components/ComponenteHeader.vue"
import ComponenteCardREserva from "./components/ComponenteCardREserva.vue"

export default {
  name: "App",
  components: {
    // CardTemplate,
    ComponenteCardREserva,
    ComponeteFooter,
    ComponenteHeader

  }
}
</script>

<style lang='scss' src="./scss/style.scss" />

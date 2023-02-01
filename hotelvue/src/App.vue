<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/sobre">Sobre</router-link>
    
  </nav>  -->
  <body>
  <componente-header-banner />
  <router-view />
  <componente-footer/>
  </body>
</template>

<script>
import ComponenteFooter from './components/ComponenteFooter.vue';
import ComponenteHeaderBanner from './components/ComponenteHeaderBanner.vue';

export default {
  name: "App",
  components: {
    ComponenteHeaderBanner,
    ComponenteFooter

  },
};
</script>

<style lang='scss' src="./scss/style.scss" />

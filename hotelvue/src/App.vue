<template>
  <section>
    <h1>Hotel Recanto dos Códigos</h1>
    <ComponenteHeader />
    <ComponenteFooter />
  </section>
  
</template>

<script>
import ComponenteHeader from './components/ComponenteHeader'
import ComponenteFooter from './components/ComponenteFooter';
export default {
  name: "App",
  components: {
    ComponenteHeader,
    ComponenteFooter
  },
};
</script>

<style lang='scss' src='./scss/style.scss' />
<template>
    <!-- <section>
        <h1>Hotel Recanto dos Códigos</h1>
    </section> -->
    <ComponenteBotaoReservar></ComponenteBotaoReservar>
</template>

<script>
import ComponenteBotaoReservar from './components/ComponenteBotaoReservar.vue'
export default {
    name: 'App',
    components: { ComponenteBotaoReservar },
}
</script>

<style>
/* Reset */
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

a:active,
a:visited,
a:link {
    color: #063f57;
}

ul {
    list-style: none;
}

body {
    font-family: 'Noto Sans', sans-serif;
}

/*Container*/
.container {
    width: 80%;
    margin: auto;
}

/*Alinhamentos*/
.display-f {
    display: flex;
}

.display-g {
    display: grid;
}

.flex-dc {
    flex-direction: column;
}

.justify-csb {
    justify-content: space-between;
}

.align-c {
    align-items: center;
}

.justify-c {
    justify-content: center;
}

/*Margem Padrão*/
.mb1 {
    margin-bottom: 1rem;
}

/*Padding Padrão*/
.pt3 {
    padding-top: 3rem;
}

.pb5 {
    padding-bottom: 5rem;
}

/*Hidden*/
.hidden {
    display: none;
}

/*Fontes*/
.courier {
    font-family: 'Courier Prime', monospace;
}

.noto-sans {
    font-family: 'Noto Sans', sans-serif;
}

/* Títulos */
.titulo-h1 {
    font-size: 2.2rem;
    color: #ffffff;
}

.titulo-h2 {
    color: #063f57;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 5rem 0 2rem 0;
    text-transform: uppercase;
}

.titulo-h3 {
    font-size: 1.5rem;
    font-family: 'Courier Prime', monospace;
    font-weight: 800;
    padding-bottom: 10px;
}

/* Paragrafo */
.paragrafo {
    font-size: 1.1rem;
    margin: 10px 0 10px 0;
    text-align: justify;
    text-indent: 20px;
}

/* Botões*/
.btn-white {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    border: none;
    background-color: #ffffff;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    cursor: pointer;
}

.btn-blue {
    font-size: 1rem;
    padding: 1rem 1rem;
    border: none;
    background-color: #176485;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
}
.btn-blue:hover {
    background-color: #063f57;
}

/*Background color*/
.bg-color-primary {
    background-color: #063f57;
}

/*Bordas*/
.link-border-all {
    border: 3px solid #a35700;
    padding: 30px 50px;
}

.link-border-bottom {
    border-bottom: 3px solid #a35700;
}
</style>

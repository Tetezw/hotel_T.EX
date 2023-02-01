<template>

  <main>
            <section id="sobre-hotel" class="box-sobre-hotel">
                <div class="container">
                    <h2 class="titulo-h2 courier">
                        <span class="link-border-bottom"
                            >Sobre o Hotel Recanto dos Códigos</span
                        >
                    </h2>
                    <div class="sobre-container-img-txt display-f justify-csb">
                        <img
                            class="sobre-img"
                            title="Foto do Hotel"
                            alt="Foto do Hotel"
                            src="@/assets/images/hotel-sobre.png" />
                        <div class="texto-artigo">
                            <p class="paragrafo">
                                O Hotel Recanto dos Códigos é o lugar perfeito
                                para aqueles que buscam uma fuga da agitação da
                                cidade e um mergulho na natureza e na praia.
                                Localizado em uma região remota e selvagem, o
                                hotel oferece quartos com vistas panorâmicas da
                                paisagem natural circundante e da praia.
                            </p>
                            <p class="paragrafo">
                                Os hóspedes podem desfrutar de atividades ao ar
                                livre, como caminhadas, observação de pássaros,
                                piqueniques na natureza e banhos de sol na
                                praia. O hotel também oferece uma piscina ao ar
                                livre com vista para o mar e um spa com
                                tratamentos de bem-estar inspirados na natureza.
                                Para aqueles que desejam relaxar em um ambiente
                                tranquilo, o hotel oferece uma biblioteca com
                                uma seleção de livros, assim como uma sala de
                                jogos com jogos de mesa e cartas. Há também uma
                                sala de cinema para assistir a filmes.
                            </p>
                            <p class="paragrafo">
                                Para aqueles que ainda assim precisem trabalhar,
                                o hotel oferece um ambiente com internet de
                                qualidade para que os hóspedes possam utilizar
                                caso necessitem, sem perder a conexão com a
                                natureza e a praia. Em resumo, o Hotel Recanto
                                dos Códigos é o lugar perfeito para aqueles que
                                desejam se desligar do mundo, se conectar com a
                                natureza e aproveitar o mar. Com atividades ao
                                ar livre, quartos confortáveis e refeições
                                saudáveis, os hóspedes podem desfrutar de uma
                                estadia relaxante e rejuvenescedora neste oásis
                                de bem-estar natural e praiano.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="comodidades-adicionais" class="comodidades">
                <div class="container box-comodidade">
                    <h2 class="titulo-h2 courier">
                        <span class="link-border-bottom"
                            >Comodidades Adicionais</span
                        >
                    </h2>
                    <div class="container-comodidades display-f justify-csb">
                        <div>
                            <img
                                class="comodidades-img"
                                src="@/assets/images/comodidade1s.jpg"
                                alt="Comodidades Adicionais" />
                        </div>
                        <div>
                            <img
                                class="comodidades-img"
                                src="@/assets/images/comodidade2s.jpg"
                                alt="Comodidades Adicionais" />
                        </div>
                        <div>
                            <img
                                class="comodidades-img"
                                src="@/assets/images/comodidade3s.jpg"
                                alt="Comodidades Adicionais" />
                        </div>
                    </div>
                </div>
            </section>

            <componente-cards-diferenciais />

            <componente-cards-time />

            <section class="contato-ajuda">
                <div class="container-contact">
                    <h4>Precisa de ajuda?</h4>
                    <p>Nossa equipe está pronta para lhe atender!</p>
                    <button class="btn-blue">
                        <a href="http://127.0.0.1:5500/public/contatos.html">
                            Entre em contato
                        </a>
                    </button>
                </div>
            </section>
        </main>
</template>

<script>
import ComponenteCardsDiferenciais from '../components/ComponenteCardsDiferenciais.vue';
import ComponenteCardsTime from '../components/ComponenteCardsTime.vue';

export default {
  name: 'SobreView',
  components: {
    ComponenteCardsDiferenciais,
    ComponenteCardsTime,

  }
}
</script>
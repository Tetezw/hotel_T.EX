<template>
    <section class="box-time">
                <div class="container">
                    <h2 class="titulo-h2 courier">
                        <span class="link-border-bottom">Nosso Time</span>
                    </h2>
                    <div class="container-time display-f justify-csb align-c">
                        <div class="nosso-time-img">
                            <figure>
                                <img
                                    class="img-funcionarios"
                                    src="./../assets/images/funcionario01.jpg"
                                    alt="Avatar" />
                                <figcaption style="text-align: center">
                                    Juliana
                                </figcaption>
                            </figure>
                        </div>
                        <div class="nosso-time-img">
                            <figure>
                                <img
                                    class="img-funcionarios"
                                    src="./../assets/images/funcionario04.jpg"
                                    alt="Avatar" />
                                <figcaption style="text-align: center">
                                    Lucas
                                </figcaption>
                            </figure>
                        </div>
                        <div class="nosso-time-img">
                            <figure>
                                <img
                                    class="img-funcionarios"
                                    src="./../assets/images/funcionario02.jpg"
                                    alt="Avatar" />
                                <figcaption style="text-align: center">
                                    Fernanda
                                </figcaption>
                            </figure>
                        </div>
                        <div class="nosso-time-img">
                            <figure>
                                <img
                                    class="img-funcionarios"
                                    src="./../assets/images/funcionario03.jpg"
                                    alt="Avatar" />
                                <figcaption style="text-align: center">
                                    Moacir
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>

export default {
    name: 'ComponenteCardsTime'
}
</script>

<style scoped>
.img-funcionarios {
  padding: 10px;
  background-color: #ffffff;
}

.container-time {
  margin: 0 0 50px;
}
.container-time figcaption {
  text-transform: uppercase;
  color: #a35700;
  font-weight: bold;
}

.box-time {
  background-color: #f1f1f1;
  padding-bottom: 50px;
}
</style>


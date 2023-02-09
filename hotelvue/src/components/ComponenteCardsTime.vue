<template>
    <section class="box-time">
        <div class="container">
            <h2 class="titulo-h2 courier">
                <span class="link-border-bottom">Nosso Time</span>
            </h2>
            <div class="container-time">
                <ul class="display-f align-c">
                    <li
                        v-for="funcionario in funcionarios"
                        :key="funcionario.id"
                    >
                        <div class="nosso-time-img">
                            <figure>
                                <img
                                    class="img-funcionarios"
                                    :src="require(`@/assets/images/${funcionario.imagem}`)"
                                    alt="Avatar"
                                />
                                <figcaption style="text-align: center">
                                    {{ funcionario.nome }}
                                </figcaption>
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ComponenteCardsTime',
    data() {
        return {
            funcionarios: [
                {
                    id: 1,
                    nome: 'Juliana',
                    imagem: 'funcionario01.jpg'
                },
                {
                    id: 2,
                    nome: 'Lucas',
                    imagem: 'funcionario04.jpg',
                },
                {
                    id: 3,
                    nome: 'Fernanda',
                    imagem: 'funcionario02.jpg',
                },
                {
                    id: 4,
                    nome: 'Moacir',
                    imagem: 'funcionario03.jpg',
                },
            ],
        }
    },
}
</script>

<style scoped></style>

<template>
    <section id="diferenciais" class="box-diferenciais">
        <div class="container">
            <h2 class="titulo-h2 courier">
                <span class="link-border-bottom">Diferenciais</span>
            </h2>
            <div class="container-img">
                <ul class="display-f">
                    <li
                        v-for="diferencial in diferenciais"
                        :key="diferencial.id"
                    >
                        <div class="img-hero display-f justify-c">
                            <figure>
                                <i
                                    :class="diferencial.fa"
                                    aria-hidden="true"
                                ></i>
                                <figcaption class="img-hero-title">
                                    <strong> {{ diferencial.titulo }}</strong>
                                </figcaption>
                                <figcaption class="legenda-diferenciais-style">
                                    {{ diferencial.descricao }}
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
    name: 'ComponenteCardsDiferenciais',
    data() {
        return {
            diferenciais: [
                {
                    id: 1,
                    fa: 'fa-solid fa-wifi fa-size iconStyle',
                    titulo: 'Internet de alta velocidade',
                    descricao:
                        'Usufrua da internet de alta velocidade do hotel: curta, compartilhe e aproveite para alavancar suas redes sociais',
                },
                {
                    id: 2,
                    fa: 'fa-solid fa-water-ladder fa-size iconStyle',
                    titulo: 'Piscinas aquecidas',
                    descricao:
                        'Aproveite as piscinas aquecidas a qualquer momento do dia. Chegou o frio? As piscinas aquecidas estarão a seu dispor.',
                },
                {
                    id: 3,
                    fa: 'fa-sharp fa-solid fa-video fa-size iconStyle',
                    titulo: 'Salas de cinema',
                    descricao:
                        'As salas de cinema são perfeitas para ver seus filmes em qualidades altíssimas, além de um som capaz de fazer você se sentir dentro do filme.',
                },
                {
                    id: 4,
                    fa: 'fa-solid fa-paw fa-size iconStyle',
                    titulo: 'Pet-friendly',
                    descricao:
                        'Traga seu melhor amigo para vocês aproveitarem os dias de estadia juntos.',
                },
                {
                    id: 5,
                    fa: 'fa-sharp fa-solid fa-martini-glass-citrus fa-size iconStyle',
                    titulo: 'Bares',
                    descricao:
                        ' Sinta-se a vontade para usufruir dos bares com diversos drinks e bebidas. Aproveite enquanto está na piscina e relaxe tomando seus drinks favoritos.',
                },
            ],
        }
    },
}
</script>

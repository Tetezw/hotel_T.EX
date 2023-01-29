<template>
    <li v-for="item in content" :key="item">
        <label :for="item.name">{{ item.legenda }}</label
        ><br />
        <input
            v-if="item.type != 'number'"
            :type="item.type"
            :id="item.name"
            :name="item.name"
            required
        />
        <input
            v-else
            :type="item.type"
            :id="item.name"
            :name="item.name"
            :min="item.min"
            :max="item.max"
            :placeholder="item.placeholder"
            required
        />
    </li>
</template>

<script>
export default {
    name: 'ComponenteInputReservar',
    data() {
        return {
            content: {
                checkin: {
                    name: 'check-in',
                    type: 'date',
                    legenda: 'Data do check-in',
                },
                checkout: {
                    name: 'check-out',
                    type: 'date',
                    legenda: 'Data do check-out',
                },
                adultos: {
                    name: 'N° de pessoas',
                    type: 'number',
                    min: '0',
                    max: '4',
                    placeholder: 0,
                    legenda: 'N° de pessoas',
                },
            },
        }
    },
}
</script>

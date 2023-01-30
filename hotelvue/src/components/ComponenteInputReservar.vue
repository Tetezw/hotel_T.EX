<template>
    <li v-for="item in content" :key="item">
        <label :for="item.name">{{ item.legenda }}</label
        ><br />
        <input
            v-if="item.type != 'number'"
            :type="item.type"
            :id="item.name"
            :name="item.name"
            v-model="value"
            @change="captureValue(item.id, $event)"
            required
        />
        <input
            v-else
            :type="item.type"
            :id="item.id"
            :name="item.name"
            :min="item.min"
            :max="item.max"
            :placeholder="item.placeholder"
            v-model="value"
            @change="captureValue(item.id, $event)"
            required
        />
    </li>
</template>

<script>
import { DadosInputReservar } from './DadosInputReservar.js'
export default {
    name: 'ComponenteInputReservar',
    data() {
        return {
            content: DadosInputReservar,
        }
    },
    methods: {
        captureValue: function (name, event) {
            this.$parent.$emit(name, event.target.value)
        },
    },
}
</script>

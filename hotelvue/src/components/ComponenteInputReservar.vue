<template>
    <li v-for="item in content" :key="item">
        <label :for="item.name">{{ item.legenda }}</label
        ><br />
        <input
            v-if="item.type != 'number'"
            :type="item.type"
            :id="item.name"
            :name="item.name"
            :ref="item.id"
            value=""
            v-model="value"
            @change="updateDadosReserva(item.id, value), noites()"
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
            value=""
            v-model="value"
            @change="updateDadosReserva(item.id, value)"
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
        updateDadosReserva: function (name, value) {
            name = name[0].toUpperCase() + name.substring(1)
            name != 'Adultos' ? (value = this.formatDates(value)) : null
            this.$store.commit(`store${name}`, value)
        },

        formatDates: function (value) {
            let date = value
            date =
                date.slice(date.length - 2, date.length) +
                '/' +
                date.slice(date.length - 5, date.length - 3) +
                '/' +
                date.slice(0, 4)
            return date
        },

        noites: function () {
            if (
                this.$store.getters.bookingData.checkout &&
                this.$store.getters.bookingData.checkin
            ) {
                const noites = this.$store.getters.bookingData.checkout
                    ? Number(
                          this.$store.getters.bookingData.checkout.slice(0, 2)
                      ) -
                      Number(
                          this.$store.getters.bookingData.checkin.slice(0, 2)
                      )
                    : ''
                this.$store.commit('storeNoites', noites)
            }
        },
    },
}
</script>

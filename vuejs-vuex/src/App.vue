<template>
  <!--Otra forma es usar {{ $store.state.contador }} pero es una mala practica -->
  <h1 :style="contador > 100 ? {'color': 'green'} : {'color':'red'}">{{ contador }}</h1>
  <button @click="accionIncrementar">incrementar</button>
  <Disminuir />
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions } from "vuex";
import Disminuir from '/src/components/Disminuir.vue'

export default {
  name: 'App',

  components: {
    Disminuir
  },

  computed: {
    // El state se mapea en las propiedades computadas
    ...mapState(['contador']),
  },

  methods: {
    // No se recomienda usar una mutacion directamente, lo recomendable es usar actions
    ...mapMutations(['incrementar']),
    // Las acciones son ideales para ejecutar las mutaciones
    ...mapActions(['accionIncrementar']),
  },
}
</script>

<style>
</style>

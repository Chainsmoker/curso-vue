<template>
  <h1>{{ texto }}</h1>
  <!-- Con v-for podemos recorrer un objeto -->
  <div v-for="i in paises" :key="i">
  {{ i }}
  </div>
</template>

<script lang="ts">
export default {
    data(){
        return {
            texto: 'Mi navegacion',
            paises: ['peru', 'mexico', 'chile']
        }
    }
}
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
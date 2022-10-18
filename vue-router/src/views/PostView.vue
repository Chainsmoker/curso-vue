<template>
  <!-- Nos permite acceder al nombre del slug -->
  <h1>{{ $route.params.slug }}</h1>
  <Titulo texto="vista Post" />
</template>

<script>
// Podemos reutilizar componente
import Titulo from '../components/Titulo.vue'
export default {
  components: {
    Titulo
  }
}
</script>

<style>

</style>
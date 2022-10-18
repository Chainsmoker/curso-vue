<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Saldo from './components/Saldo.vue'
</script>

<template>
  <Navbar />
  <HelloWorld msg="Primera app en vuejs" />
  <Saldo texto="Aumentar" />
  <Saldo texto="Disminuir" />
</template>

<style scoped>

</style>

<template>
  <button @click="aumentar">{{ texto }}</button>
</template>

<script lang="ts">
export default {
    props: {
        texto: String
    },
    methods: {
        aumentar(){
            console.log("si")
        }
    },
}
</script>

<style>

</style>
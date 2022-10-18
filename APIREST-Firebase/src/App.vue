<script>
  export default {
    name: 'App',
    methods: {
      async peticion() {
        try {
          const response = await fetch('https://apirest-vuejs-firebase-default-rtdb.firebaseio.com/tareas2.json',
            {
              method: 'PUT',
              body: JSON.stringify({
                nombre: 'Nueva tarea 2',
                estado: false
              }),
              // En firebase es opcional enviar headers, pero en el backend si es necesario
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<template>
  <h1>Hello world</h1>
  <button type="submit" @click="peticion()">Enviar Peticion</button>
</template>

<style scoped>

</style>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    data() {
        return {
            // Podemos guardar datos en un objeto padre
            form: {
                checkbox: [],
                radio: '',
                number: '',
            },
            tareas: ''
        }
    },
    methods: {
        onSubmit() {
            console.log(this.form)
            localStorage.setItem('form', JSON.stringify(this.form))
            this.onReset()
        },
        onReset() {
            this.form = {
                checkbox: [],
                radio: '',
                number: '',
            }
        },
        tarea(){
            this.tareas = localStorage.getItem('form')
        }
    }
}
</script>

<template>
 <form @submit.prevent="onSubmit">
    <h3>Checkbox</h3>
    <input type="checkbox" id="check-1" v-model="form.checkbox" value="javascript">
    <label for="check-1">Javascript</label>
    <input type="checkbox" id="check-2" v-model="form.checkbox" value="nodejs">
    <label for="check-2">Nodejs</label>
    <h3>Radio button</h3>
    <input type="radio" id="check-1" v-model="form.radio" value="Radio Button">
    <label for="check-1">Javascript</label>
    <h3>Number</h3>
    <!--Amtes se usaba v-model.number, ahora es por defecto-->
    <input type="number" id="check-1" v-model="form.number">
    <!--Imprime toda la informacion de las propiedades del objeto-->
    <h3>Resultado: {{ form }} </h3>
    <button type="submit">Submit</button>
    <h5>Tareas:</h5>
    <p>{{ tareas }}</p>
 </form>
</template>

<style scoped>

</style>

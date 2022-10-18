import { createStore } from 'vuex'

export default createStore({
  // En el state se definen las variables globales, estas solo se pueden cambioar por las mutaciones
  state: {
    contador: 100
  },
  getters: {
  },
  // Las mutaciones es la unica forma de cambiar el state
  mutations: {
    // El primer parametro es el state, el segundo el valor que recibe por parte del action
    // Por costumbre se le llama payload
    incrementar(state, payload){
      state.contador = state.contador +10
    },

    disminuir(state){
      if (state.contador == 0) {
        return
      }
      state.contador = state.contador - 10
    }
  },
  actions: {
    // Se recomienda usar las actions para ejecutar las mutaciones
    // El commit ejecuta una mutacion
    accionIncrementar({commit}){
      commit('incrementar')
    },

    accionDisminuir({commit}){
      commit('disminuir')
    },
    
    // Podemos recibir parametros en las actions,
    // No se puede recibir mas de un parametro, para ello se usa un objeto
    accionIncrementarConParametro({commit}, cantidad){
      commit('incrementar', cantidad)
    }
  },
  modules: {
  }
})

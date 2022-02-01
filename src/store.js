import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter++
    },
  },
  state = {
    counter: 0,
  }

export default createStore({ mutations, state, strict: true })

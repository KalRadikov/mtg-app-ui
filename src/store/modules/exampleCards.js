import api from '@/services/api/exampleCards'
import { handleError } from '@/utils/utils.js'
// import { forEach } from 'core-js/fn/array'

const getters = {
  exampleCards: (state) => state.exampleCards
}

const actions = {
  fetchExampleCards({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getExampleCards()
        .then((response) => {
          if (response.status === 200) {
            let orderId = 0
            const cardImgs = []
            const array = response.data.data
            console.log(response.data.data)
            array.forEach((element) => {
              cardImgs.push({
                order: orderId,
                uri: element.image_uris.small
              })
              orderId += 1
            })
            commit('SET_CARDS', cardImgs)
            resolve()
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  }
}

const mutations = {
  SET_CARDS(state, exampleCards) {
    // console.log(typeof exampleCards)
    // console.log(exampleCards)
    state.exampleCards = exampleCards
  }
}

const state = {
  exampleCards: []
}

export default {
  state,
  getters,
  actions,
  mutations
}

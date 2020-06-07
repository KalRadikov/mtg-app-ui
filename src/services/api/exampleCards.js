import axios from 'axios'

const query = {
  identifiers: [
    {
      name: 'Birds of Paradise'
    },
    {
      name: 'lightning bolt'
    },
    {
      name: 'fatal push'
    },
    {
      name: 'path to exile'
    },
    {
      name: 'Opt'
    }
  ]
}

export default {
  getExampleCards() {
    return axios.post('https://api.scryfall.com/cards/collection', query)
  }
}

import axios from 'axios'

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// pokeApi.interceptors.request.use((config) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(config);
//       reject(new Error('Error intereceptor'))
//     }, 1500)
//   })
// })

import Vue from 'vue';
import Vuex from 'vuex';
import  axios from  'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mali: [
      { invId: 4, name: 'bish ', image: '//placehold.it/200', price: 5699, year: 2000},
      { invId: 439, name: ' pop', image: '//placehold.it/200', price: 444, year: 2000 },
      { invId: 40, name: 'kiki ', image: '//placehold.it/200', price: 2959, year: 2000 },
      { invId: 487, name: 'asap ', image: '//placehold.it/200', price: 77, year: 2000},
      { invId: 444, name: ' jua', image: '//placehold.it/200', price: 299, year: 2000 },
      { invId: 48, name: 'rerer thing', image: '//placehold.it/200', price: 777, year: 2000 },
      { invId: 714, name: 'Other thing', image: '//placehold.it/200', price: 29, year: 2000},
      { invId: 452, name: ' rtrtr', image: '//placehold.it/200', price: 299, year: 2000 },
      { invId: 142, name: 'yuyu ', image: '//placehold.it/200', price: 249, year: 2000},
      { invId: 42, name: ' bnbnb', image: '//placehold.it/200', price: 499, year: 2000 },
      { invId: 43, name: ' wewe', image: '//placehold.it/200', price: 989, year: 2000 },
      { invId: 45, name: 'toto thing', image: '//placehold.it/200', price: 939, year: 2000},
      { invId: 1, name: ' bith', image: '//placehold.it/200', price: 399, year: 2000 },
      ],
    inCart: [],
    todos: [],
  },
  getters: {
    mali: state => state.mali,
    inCart: state => state.inCart,
    todos: state => state.todos,

  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(response => {
        this.todos = response.data
      })
      .catch(error => {
        console.log(error);
      })
  },
});

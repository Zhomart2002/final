import { createStore } from 'vuex'
import data from "@/assets/data/items.json";

export default createStore({
  state: {
    data,
    username: 'Guest',
    isLoggedIn: false,
    basket: [],
    favorites: []
  },
  mutations: {
    LOG_IN(state, userName){
      state.username = userName;
      state.isLoggedIn = true;
    },
    LOG_OUT(state){
      state.username = 'Guest',
      state.isLoggedIn = false;
    },
    ADD_BASKET(state, item){
      state.basket.push(item);
    },
    REMOVE_BASKET(state, item){
      state.basket = state.basket.filter(e => e != item)
    },
    ADD_FAVORITES(state, item){
      state.favorites.push(item);
    },
    REMOVE_FAVORITES(state, item){
      state.favorites = state.favorites.filter(e => e != item)
    }
  },
  actions: {
    logIn(context, userName){
      context.commit('LOG_IN', userName);
    },
    logOut(context){
      context.commit('LOG_OUT');
    },
    addBasket(context, item){
      context.commit('ADD_BASKET', item);
    },
    removeBasket(context, item){
      context.commit('REMOVE_BASKET', item);
    },
    addFavorite(context, item){
      context.commit('ADD_FAVORITES', item);
    },
    removeFavorite(context, item){
      context.commit('REMOVE_FAVORITES', item);
    }
  },
  getters: {
    hasFavorite(state){
      return item => state.favorites.includes(item);
    },
    hasBasket(state){
      return item => state.basket.includes(item);
    },
    getCategory(state){
      return id => state.data[id];
    },
    getItem(state){
      return (category, itemId) => state.data[category].items[itemId-1];
    }
  },
  modules: {
  }
})

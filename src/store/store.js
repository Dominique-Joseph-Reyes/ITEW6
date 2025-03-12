
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Apple', price: 45 },
      { id: 2, name: 'Banana', price: 21.6 },
      { id: 3, name: 'Carrot', price: 14.4 },
      { id: 4, name: 'Milk (1L)', price: 27 },
      { id: 5, name: 'Eggs (12 pack)', price: 54 },
      { id: 6, name: 'Bread', price: 18 },
      { id: 7, name: 'Rice (1kg)', price: 36 },
      { id: 8, name: 'Chicken Breast (500g)', price: 81 },
      { id: 9, name: 'Cheese (200g)', price: 63 },
      { id: 10, name: 'Potatoes (1kg)', price: 36 }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, productId) {
      const item = state.cart.find(i => i.id === productId);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ id: productId, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    DECREASE_QUANTITY(state, productId) {
      const item = state.cart.find(i => i.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter(i => i.id !== productId);
      }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('ADD_TO_CART', productId);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    decreaseQuantity({ commit }, productId) {
      commit('DECREASE_QUANTITY', productId);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.map(item => {
        const product = state.products.find(p => p.id === item.id);
        return { ...product, quantity: item.quantity };
      });
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        const product = state.products.find(p => p.id === item.id);
        return total + product.price * item.quantity;
      }, 0);
    },
    cartCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
  }
});

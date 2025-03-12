<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.name }}</h3>
        <p>₱{{ product.price }}</p>
        <button @click="addToCart(product.id)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
};
</script>

<style scoped>
.product-list {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #F0EDD4;
  padding: 20px;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  background: #FFD09B;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 200px;
}

.product-card:hover {
  transform: scale(1.05);
}

button {
  background-color: #FE4F2D;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #BF3131;
}
</style>
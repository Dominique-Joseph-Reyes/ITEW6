<template>
  <div class="cart-container">
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>₱{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="decrease" @click="decreaseQuantity(item.id)">-</button>
            <button class="remove" @click="removeFromCart(item.id)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cart-summary">
      <p><strong>Total Items:</strong> {{ cartCount }}</p>
      <p><strong>Total Price:</strong> ₱{{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartCount'])
  },
  methods: {
    ...mapActions(['decreaseQuantity', 'removeFromCart'])
  }
};
</script>

<style scoped>
.cart-container {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #F0EDD4;
  padding: 20px;
}

table {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  background: #F0EDD4;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

table th, table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #FFA725;
  color: white;
}

td {
  text-align: center;
}

button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.decrease {
  background-color: #ffc107;
}

.remove {
  background-color: #dc3545;
  color: white;
}

button:hover {
  opacity: 0.8;
}

.cart-summary {
  margin-top: 20px;
}
</style>
<template>
  <div id="app">
    <h1>Vue E-Commerce Store with Vuex</h1>
    <div class="container">
      <ProductList />
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";  

export default {
  name: "App",
  components: {
    ProductList,
    ShoppingCart,  
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

h1 {
  background-color: #FFB26F;
  font-size: 28px;
  color: #333;
  margin-bottom: 5px;
}

.container {
  background-color: #FFE6A5;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
}

</style>

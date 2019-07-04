<template>
  <div>
    <h1>Home Component :</h1>
    <router-view></router-view>
    <router-link to="/form">Create Product</router-link>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.quantity}}</td>
        <td>
          <router-link class="btn btn-info" :to="{name:'article',params:{id:product.id}}">Show</router-link>||
          <router-link class="btn btn-info" :to="{name:'edit',params:{id:product.id}}">Update</router-link>||
          <button class="btn btn-info" @click="deleteProduct(product.id)">DELETE</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    axios.get("http://localhost:8000/api/product").then(res => {
      this.products = res.data.data;
    });
  },
  methods: {
    deleteProduct(id) {
      axios.delete(`http://localhost:8000/api/product/${id}`).then(res => {
        this.products.splice(this.products.indexOf(id), 1);
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
</style>






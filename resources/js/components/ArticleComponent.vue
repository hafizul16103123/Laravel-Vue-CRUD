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
      <tr>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.quantity}}</td>
        <td>
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
      product: []
    };
  },
  created() {
    axios
      .get(`http://localhost:8000/api/product/${this.$route.params.id}`)
      .then(res => {
        this.product = res.data.data;
      });
  },
  methods: {
    deleteProduct(id) {
      axios.delete(`http://localhost:8000/api/product/${id}`).then(res => {
        this.product.splice(this.products.indexOf(id), 1);
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
</style>






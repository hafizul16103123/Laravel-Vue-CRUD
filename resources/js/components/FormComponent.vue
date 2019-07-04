<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Create Product</div>

          <div class="card-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Entr ypur name"
                  v-model="product.name"
                />
              </div>
              <div class="form-group">
                <label>Price</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Price"
                  v-model="product.price"
                />
              </div>
              <div class="form-group">
                <label>Quantity</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Quantity"
                  v-model="product.quantity"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-info">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    };
  },
  methods: {
    addProduct() {
      axios
        .post("http://localhost:8000/api/product", this.product)
        .then(res => {
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
              <div class="col-4" v-for="products in products " :key="products.id">
                <div class="card" style="width: 18rem">
                  <img :src="products.image" class="card-img-top " :alt="products.title"/>
                  <div class="card-body">
                    <p>{{ products.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts")
        }
    }
</script>

<style scoped>

</style>
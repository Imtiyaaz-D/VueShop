<template>
    <NavBar/>
    <div>
        <div class="btp">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add new product
            </button>
            <button class="btn btn-success">sort</button>
          </div>
          <!-- table -->
        <table class="box w-100 table table-bordered table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Description</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="products in products" :key="products.id">
                <td>{{products.id}}</td>
                <td>{{ products.name }}</td>
                <td>R{{ products.price}}</td>
                <td><img :src="products.image" :alt="products.name" style="width: 18rem"></td>
                <td>{{ products.description }}</td>
        
                <td><button class="del">delete</button></td>
        
                <td><button>edit</button></td>
              </tr>
          </tbody>
          </table>
          
           <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Adding a new product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>id</p>
              <input  id="id" type="text" placeholder="Enter the id" class="intpID w-100">
              <p>Name</p>
              <input  id="name" type="text" placeholder="Enter the name of product" class="intpName w-100">
              <p>Price</p>
              <input  id="price" type="text" placeholder="Enter the price" class="intpPrice w-100">
              <p>Image</p>
              <input  id="img" type="url" placeholder="Enter the Image url" class="intpImg w-100">
              <p>Description</p>
              <input  id="description" type="text" placeholder="Enter the description" class="intpDescr w-100">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="add-btn">Add to admin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios'
    export default {
        components:{
            NavBar
        },
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        mounted(){
            // this.$store.dispatch("fetchProducts"),
            this.getProducts()
        },
        data(){
            return{
                product:[]
            }
        },
        methods:{
            getProducts(){
                axios.get('https://imtiyaaz-d.github.io/Products-server/index.json').then(res =>{
                    this.products = res.data.products
                    console.log(res)
                });
            }
        }
        
    }
</script>

<style scoped>

</style>
import { createStore } from 'vuex'

const infoUrl = "https://imtiyaaz-d.github.io/Products-server/index.json"
export default createStore({
  state: {
    products:null,
  },
  getters: {
  },
  mutations: {
    setProducts(state,products){
      state.products = products
    }
  },
  actions: {
    async fetchProducts(context){
      try{
        let res = await fetch(infoUrl)
        let {products} = await res.json()
         context.commit('setProducts',products) 
      }catch(e){
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})

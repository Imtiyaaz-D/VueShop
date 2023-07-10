<template>
  <NavBar/>
  <div class="home">
    <h2>Home</h2>
  </div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
    
  }
}
</script>

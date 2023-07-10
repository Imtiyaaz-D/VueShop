<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="../index.html"><img src="https://i.postimg.cc/FKNnnkCq/Imti-s-shoe-store.png" alt="brand-logo" loading="lazy" style="width: 10rem;">Imti`s Shoes Store</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <router-link to="/">Home</router-link>
                  <router-link to="/about">About</router-link>
                  <router-link to="/admin">Admin</router-link>
                  <router-link to="/product">Products</router-link>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
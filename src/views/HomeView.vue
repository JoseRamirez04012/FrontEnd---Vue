<template>
  <Navbar></Navbar>
  <div class="container">
    <h2>Productos</h2>
    <hr>
    <Products></Products>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Products,
    Footer
  }
}
</script>

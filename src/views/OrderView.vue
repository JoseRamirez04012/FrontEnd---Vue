<template>
  <Navbar></Navbar>
  <div class="container">
    <h2>Ordenar</h2>
    <hr>
    <OrderForm></OrderForm>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import OrderForm from '@/components/Order.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: '',
  components: {
    Navbar,
    OrderForm,
    Footer
  }
}
</script>

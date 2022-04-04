<template>
    <Navbar></Navbar>
    <div class="container">
        <OrderDetail></OrderDetail>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import OrderDetail from '@/components/OrderDetail.vue'
import Footer from '@/components/Footer.vue'

export default {
    components:{
        Navbar,
        OrderDetail,
        Footer
    }
}
</script>
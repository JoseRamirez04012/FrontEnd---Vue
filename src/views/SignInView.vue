<template>
    <Navbar></Navbar>
    <div class="container">
        <LoginForm></LoginForm>
    </div>
    <Footer></Footer>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import LoginForm from '@/components/Login.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: '',
    components:{
        Navbar,
        LoginForm,
        Footer
    }
}
</script>
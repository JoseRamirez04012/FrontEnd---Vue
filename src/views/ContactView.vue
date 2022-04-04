<template>
    <Navbar></Navbar>
    <div class="container">
        <ContactForm></ContactForm>
    </div>
    <Footer></Footer>
</template>
<script>
import Navbar from '@/components/Navbar.vue' 
import ContactForm from '@/components/Contact.vue' 
import Footer from '@/components/Footer.vue'

export default {
    components:{
        Navbar,
        ContactForm,
        Footer
    }
}
</script>
<template>
    <div class="row">
        <h2 class="title">Contáctanos</h2>
    <hr>
    <div class="content">
        <div class="left-side">
            <div class="details" v-for="information in $store.getters.loadInformation" v-bind:key="information">
                <i v-bind:class="information.icon" ></i>
                <div class="topic">{{ information.name }}</div>
                <div class="text-one">{{ information.textOne }}</div>
                <div class="text-two" v-if="information.textTwo != ''">{{ information.textTwo }}</div>
            </div>
        </div>
        <div class="right-side">
            <div class="topic-text">Envíanos un mensaje</div>
            <p>Nuestro equipo se pondrá en contacto contigo lo más pronto posible</p>
            <div class="contact-form">
                <input class="input" type="text" name="name" id="name" placeholder="Nombre" v-model="contact.name">
                <input class="input" type="email" name="email" id="email" placeholder="Correo electrónico" v-model="contact.email">
                <textarea class="input" name="comments" id="comments" cols="30" rows="10" placeholder="Envíanos tus comentarios" v-model="contact.comments"></textarea>
                <input class="input" type="submit" value="Envíar" @click="send">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data(){
        return{
            contact : {
                name: '',
                email: '',
                comments: ''
            }
        }
    },
    methods:{
        send(){
            if(this.contact.name === '' || this.contact.email === '' || this.contact.comments === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Todos los campos son requeridos'
                })

            }
            else{
                Swal.fire(
                    '¡Excelente!',
                    'Tu mensaje ha sido enviado',
                    'success'
                )

                this.$router.push('/');
            }
        }
    }
}
</script>

<style>
.row{
    margin-top: 30px;
}
.row .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.row .content .left-side {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    position: relative;
}

.row .content .left-side::before {
    content: '';
    height: 95%;
    width: 2px;
    right: -5px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
    background-color: #afafb6;
}

.content .left-side .details {
    margin: 14px;
    text-align: center;
}

.content .left-side .details i {
    font-size: 30px;
    color: #f5576c;
    margin-bottom: 10px;
}

.content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
}

.content .left-side .details .text-one,
.content .left-side .details .text-two {
    font-size: 14px;
    color: #afafb6;
}

.row .content .right-side {
    width: 75%;
    margin: 30px 50px 0px 50px;
}

.content .right-side .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: #f5576c;
}

.contact-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px
}

.input {
    background: transparent;
    border: 0;
    color: rgb(48, 48, 48);
    outline: none;
    border: 1px solid rgb(48, 48, 48);
    padding: 20px 10px;
}

.input::placeholder {
    color: rgb(48, 48, 48);
}

input[type="text"],
input[type="email"] {
    display: inline-block;
    width: 49%;
    margin-bottom: 30px;
}

.contact-form textarea {
    width: 100%;
    margin-bottom: 15px;
}

input[type="submit"] {
    width: 120px;
    text-align: center;
    padding: 14px 0;
}

input[type="submit"]:hover {
    cursor: pointer;
    color: #fff;
    background-color: #f5576c;
    border: 1px solid #f5576c;
}
</style>
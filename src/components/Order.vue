<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div id="msform">
                <!-- progressbar -->
                <ul id="progressbar" name="progressbar">
                    <li class="step active"></li>
                    <li class="step"></li>
                    <li class="step"></li>
                </ul>
                <!-- fieldsets -->
                 <fieldset v-if="step === 0">
                    <h2 class="fs-title">Selecciona</h2>
                    <h3 class="fs-subtitle">Elige tu pastel</h3>
                    <div class="mb-3">
                        <label for="qty" class="form-label fw-bold">Cantidad:</label>
                        <input type="number" class="form-control" name="qty" id="qty" min="1" max="10" v-model="order.qty">
                    </div>
                    <div class="mb-3">
                        <label for="qty" class="form-label fw-bold">Sabores:</label>
                        <select class="form-select" multiple aria-label="multiple select example" v-model="order.selected">
                        <option v-for="option in $store.getters.loadCakes" v-bind:value="option.name" v-bind:key="option">{{ option.name }}</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button class="next action-button" @click="next">Siguiente</button>
                    </div>        
                </fieldset>
                <fieldset v-if="step === 1">
                    <h2 class="fs-title">Personaliza</h2>
                    <h3 class="fs-subtitle">Agrega adornos decorativos o algún mensaje</h3>
                    <div class="mb-3">
                        <label for="ornaments" class="form-label fw-bold">Adornos:</label>
                        <div class="form-check" v-for="ornaments in $store.getters.loadOrnaments" v-bind:key="ornaments">
                            <input class="form-check-input" type="checkbox" id="ornament" v-bind:value="ornaments.name" v-model="order.ornaments">
                            <label class="form-check-label" for="ornament">{{ ornaments.name }} .......... ${{ ornaments.price }} mxn</label>
                        </div>
                    </div>
                     <div class="mb-3">
                        <label for="decoration" class="form-label fw-bold">Decoraciones:</label>
                        <div class="form-check" v-for="decoration in $store.getters.loadCakeDecoration" v-bind:key="decoration">
                            <input class="form-check-input" type="checkbox" id="decoration" v-bind:value="decoration.name" v-model="order.decoration">
                            <label class="form-check-label" for="decoration">{{ decoration.name }} .......... ${{ decoration.price }} mxn</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="comments" class="form-label fw-bold">Indicaciones adicionales:</label>
                        <textarea class="form-control" id="comments" rows="3" v-model="order.comments"></textarea>
                    </div>
                    <div class="d-grid gap-2 d-md-block">
                        <button class="previous action-button-previous me-2" type="button" @click="previous">Anterior</button>
                        <button class="next action-button" type="button" @click="next">Siguiente</button>
                    </div>
                </fieldset>
                <fieldset v-if="step === 2">
                    <h2 class="fs-title">Información de entrega</h2>
                    <h3 class="fs-subtitle">índicanos cuando y dónde entregar tu pedido</h3>
                    <div class="mb-3">
                        <label for="fullName" class="form-label fw-bold">Nombre:</label>
                        <input type="text" class="form-control" id="fullName" v-model="order.fullName">
                    </div>
                    <div class="mb-3">
                        <label for="telephone" class="form-label fw-bold">Teléfono:</label>
                        <input type="tel" class="form-control" id="telephone" v-model="order.telephone">
                    </div>
                     <div class="mb-3">
                        <label for="email" class="form-label fw-bold">Correo electrónico:</label>
                        <input type="email" class="form-control" id="email" v-model="order.email">
                    </div>
                     <div class="mb-3">
                        <label for="address" class="form-label fw-bold">Dirección:</label>
                        <input type="text" class="form-control" id="address" v-model="order.address">
                    </div>
                     <div class="mb-3">
                        <label for="dateDelivery" class="form-label fw-bold">Fecha de entrega:</label>
                        <input type="date" class="form-control" id="dateDelivery" v-model="order.dateDelivery">
                    </div>
                     <div class="d-grid gap-2 d-md-block">
                        <button class="previous action-button-previous me-2" type="button" @click="previous">Anterior</button>
                        <button class="action-button" type="button" @click="buy">Procesar</button>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderForm',
    data(){
        return{
            step: 0,
            order:{
                id: '',
                qty: 1,
                selected: [],
                ornaments: [],
                decoration:[],
                comments: '',
                fullName: '',
                telephone: '',
                email: '',
                address: '',
                dateDelivery: ''
            }
        }
    },
    methods:{
        buy(){
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Su pedido se ha realizado',
                animation: false,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                willClose: () => {
                    this.$router.push(`/order/${this.order.id}`)
                }
            })
            this.order.id = + new Date();
            this.$store.dispatch('addOrderAction', this.order)
        },
        next(){
            let nodes = document.getElementsByClassName('step');
            
            this.step++;

            for (let i = 0; i < nodes.length; i++) {
                if(i === this.step){
                    nodes[i].classList.add("active");
                }
            }
        },
        previous(){
            let nodes = document.getElementsByClassName('step');

            this.step--;

             for (let i = 0; i < nodes.length; i++) {
                if(i === this.step){
                    nodes[i+1].classList.remove("active");
                }
            }
        }
    }

}
</script>
<style>
/*form styles*/
.row{
    justify-content: center;
}
#msform {
    text-align: center;
    position: relative;
    /*margin-top: 30px;*/
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;

    /*stacking fieldsets above each other*/
    position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}

/*inputs*/
#msform input[type=text], 
#msform input[type=number],
#msform input[type=tel],
#msform input[type=email],
#msform input[type=date],
#msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
}

#msform input[type=checkbox]{
    width: 10%;
}

#msform input[type=checkbox]:checked{
    background-color: #ee0979;
}


#msform input[type=text]:focus, 
#msform input[type=number]:focus,
#msform input[type=tel]:focus,
#msform input[type=email]:focus,
#msform input[type=date]:focus, 
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #ee0979;
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: All 0.5s ease-in;
    -moz-transition: All 0.5s ease-in;
    -o-transition: All 0.5s ease-in;
}

/*buttons*/
#msform .action-button {
    width: 100px;
    background: #ee0979;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979;
}

#msform .action-button-previous {
    width: 100px;
    background: #C5C5F1;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button-previous:hover, #msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;
}

/*headings*/
.fs-title {
    font-size: 18px;
    text-transform: uppercase;
    color: #2C3E50;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: bold;
}

.fs-subtitle {
    font-weight: normal;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
}

/*progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    /*CSS counters to number the steps*/
    counter-reset: step;
}

#progressbar li {
    list-style-type: none;
    color: white;
    text-transform: uppercase;
    font-size: 9px;
    width: 33.33%;
    float: left;
    position: relative;
    letter-spacing: 1px;
}

#progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 24px;
    height: 24px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    background: #ccc;
    border-radius: 25px;
    margin: 0 auto 10px auto;
}

/*progressbar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: #ccc;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1; /*put it behind the numbers*/
}

#progressbar li:first-child:after {
    /*connector not needed before the first step*/
    content: none;
}

/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before, #progressbar li.active:after {
    background: #ee0979;
    color: white;
}

</style>
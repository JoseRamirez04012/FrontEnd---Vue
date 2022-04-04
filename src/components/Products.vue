<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="cake in $store.getters.loadCakes" v-bind:key="cake">
            <div class="card text-center">
                <img :src="cake.img" class="card-img-top" :alt="cake.name">
                <div class="card-body">
                    <h5 class="card-title">{{ cake.name }}</h5>
                    <p class="card-text">${{ cake.price }} mxn</p>
                    <router-link to="/order" class="btn btn-primary">Comprar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products'
}
</script>

<style>
h2{
    margin-top: 30px;
    text-align: center;
}

.row{
    margin-bottom: 30px;
}

.card{
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    transform: scale(1);
    transition: transform 0.6s;
}

.card:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    transform: scale(1.03);
    cursor: pointer;
}

.card > img {
    height: 250px;
    margin: 20px 0 20px 0;
}
</style>
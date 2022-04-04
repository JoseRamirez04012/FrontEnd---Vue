<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/images/Dolce-delizia-logos_white.png" alt="Dolce delizia logo"  class="d-inline-block align-text-top">
                </router-link>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/order" class="nav-link">Ordenar</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contáctanos</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link to="/signIn" class="btn btn-outline-light">Iniciar sesión</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.navbar{
    height: 80px;
}

.navbar-brand > img {
    margin-top: -8px;
    padding: 5px;
    width: 200px;
    height: 80px;
}
</style>
<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> Dolce delizia</a>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active">
                  <i class='bx bx-home'></i>
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bx-lemon'></i>
                  Ingredientes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bx-party' ></i>
                  Adornos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-cake'></i>
                  Decoraciones
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-receipt'></i>
                  Pedidos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bx-cog'></i>
                  Mi cuenta
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Reportes</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-file'></i>
                  última semana
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-file'></i>
                  últimos tres meses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-file'></i>
                  últimos seis meses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class='bx bxs-file'></i>
                  último año
                </a>
              </li>
            </ul>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class='bx bx-exit'></i>
                        Cerrar sesión
                    </a>
                </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Compartir</button>
                <button class="btn btn-sm btn-outline-secondary">Exportar</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Esta semana
              </button>
            </div>
          </div>

          <div class="row">
              <div class="col-md-3">
                  <div class="card-counter primary">
                      <i class='bx bx-lemon'></i>
                      <span class="count-numbers">5024</span>
                      <span class="count-name">Ingredientes</span>
                    </div>
                </div>
                <div class="col-md-3">
                  <div class="card-counter danger">
                      <i class='bx bx-party'></i>
                      <span class="count-numbers">355</span>
                      <span class="count-name">Adornos</span>
                    </div>
                </div>
                <div class="col-md-3">
                  <div class="card-counter success">
                      <i class='bx bxs-cake'></i>
                      <span class="count-numbers">220</span>
                      <span class="count-name">Decoraciones</span>
                    </div>
                </div>
                <div class="col-md-3 cards">
                  <div class="card-counter info">
                      <i class='bx bxs-receipt'></i>
                      <span class="count-numbers">{{ $store.state.orders.length }}</span>
                      <span class="count-name">Pedidos</span>
                    </div>
                </div>
            </div>

          <h2>Últimos pedidos</h2>
          <div class="row" v-if="$store.state.orders.length != null">
            <table class="table table-responsive table-hover">
              <thead class="table-primary">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>Dirección</th>
                  <th>Fecha de entrega</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in $store.getters.loadOrders" v-bind:key="order">
                  <td>{{ order.id }}</td>
                  <td>{{ order.fullName }}</td>
                  <td>{{ order.telephone }}</td>
                  <td>{{ order.email }}</td>
                  <td>{{ order.address }}</td>
                  <td>{{ order.dateDelivery }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm" @click="view(order)"> 
                      <i class='bx bxs-show'></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="alert alert-danger d-flex align-items-center" role="alert" v-else>
            <i class='bx bxs-error bx-md'></i>
            <div>Por el momento no se tienen pedidos</div>
          </div>
        </main>
      </div>
    </div>
</template>
<script>
export default {
  methods:{
    view(order){
      let cakes = [];
      let ornaments = [];
      let decorations = [];

      order.selected.forEach(cake => {
        cakes.push(cake);
      });

      order.ornaments.forEach(ornament => {
        ornaments.push(ornament);
      });

       order.decoration.forEach(decoration => {
        decorations.push(decoration);
      });

      const wrapper = `<ul class="list-group list-group-flush">
                        <li class="list-group-item"><p><span class="fw-bold">Cantidad:</span> ${order.qty}</p></li>
                        <li class="list-group-item"><p><span class="fw-bold">Sabor(es):</span> ${cakes.join(', ')}</p></li>
                        <li class="list-group-item"><p><span class="fw-bold">Adornos:</span> ${ornaments.join(', ')}</p></li>
                        <li class="list-group-item"><p><span class="fw-bold">Decoraciones:</span> ${decorations.join(', ')}</p></li>
                        <li class="list-group-item"><p><span class="fw-bold">Indicaciones adicionales:</span> ${order.comments}</p></li>
                      </ul>` ;

      Swal.fire({
              title: `<strong>Pedido #<u>${order.id}</u></strong>`,
              html: wrapper,
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              confirmButtonText: 'Cerrar',
              showCancelButton: false
      })
    }
  }
}
</script>

<style>
.cards{
    display: flexbox;
    flex-wrap: wrap;
}
.card-counter{
    box-shadow: 2px 2px 10px #DADADA;
    margin: 5px;
    padding: 20px 10px;
    background-color: #fff;
    height: 100px;
    border-radius: 5px;
    transition: .3s linear all;
  }

  .card-counter:hover{
    box-shadow: 4px 4px 20px #DADADA;
    transition: .3s linear all;
  }

  .card-counter.primary{
    background-color: #007bff;
    color: #FFF;
  }

  .card-counter.danger{
    background-color: #ef5350;
    color: #FFF;
  }  

  .card-counter.success{
    background-color: #66bb6a;
    color: #FFF;
  }  

  .card-counter.info{
    background-color: #26c6da;
    color: #FFF;
  }  

  .card-counter i{
    font-size: 5em;
    opacity: 0.2;
  }

  .card-counter .count-numbers{
    flex-direction: column;
    position: absolute;
    font-size: 30px;
    
  }

  .card-counter .count-name{
    position: absolute;
    margin-top: 40px;
    font-style: italic;
    text-transform: capitalize;
    opacity: 0.5;
    font-size: 18px;
  }
</style>
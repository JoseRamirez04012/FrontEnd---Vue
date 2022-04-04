import { createStore } from 'vuex'

export default createStore({
    state: {
        information: [{
                name: 'Dirección',
                textOne: 'Boulevard Cultura #48',
                textTwo: 'Col. Proyecto Rio, Hermosillo, Son.',
                icon: 'bx bxs-map'
            },
            {
                name: 'Teléfono',
                textOne: '662 208 4700',
                textTwo: '662 208 4701',
                icon: 'bx bxs-phone'
            },
            {
                name: 'Correo electrónico',
                textOne: 'contacto@dolcedelizia.com',
                icon: 'bx bxs-envelope'
            },
            {
                name: 'Horario',
                textOne: 'Lunes a Sábado',
                textTwo: '09:00 am a 06:00 pm',
                icon: 'bx bx-calendar'
            }
        ],
        cakes: [{
                id: 1,
                name: 'Pastel de Moka',
                price: 500,
                img: require('@/assets/images/pastel-de-moka-324x324.jpg')
            },
            {
                id: 2,
                name: 'Pastel Red Velvet',
                price: 480,
                img: require('@/assets/images/red-velvet-324x324.jpg')
            },
            {
                id: 3,
                name: 'Pastel de Nuez',
                price: 320,
                img: require('@/assets/images/pastel-de-nuez-324x324.jpg')
            },
            {
                id: 4,
                name: 'Pastel de Tres leches Chocolate',
                price: 400,
                img: require('@/assets/images/pastel-de-chocolate-324x324.jpg')
            },
            {
                id: 5,
                name: 'Pastel de Tres leches fresa',
                price: 450,
                img: require('@/assets/images/pastel-tres-leches-fresa-324x324.jpg')
            },
            {
                id: 6,
                name: 'Pastel de Zanahoria',
                price: 320,
                img: require('@/assets/images/pastel-de-zanahoria-324x324.jpg')
            }
        ],
        ornaments: [{
                id: 1,
                name: 'Vela tradicional',
                price: 10
            },
            {
                id: 2,
                name: 'Vela numércia',
                price: 15
            },
            {
                id: 3,
                name: 'Letrero',
                price: 30
            }
        ],
        cakeDecoration: [{
                id: 1,
                name: 'Celebraciones',
                price: 70
            },
            {
                id: 2,
                name: 'Festividades',
                price: 100
            },
            {
                id: 3,
                name: 'Florales',
                price: 70
            },
            {
                id: 4,
                name: 'Dibujos',
                price: 120
            },

        ],
        orders: [],
        order: []
    },
    getters: {
        loadCakes(state) {
            return state.cakes;
        },
        loadOrnaments(state) {
            return state.ornaments;
        },
        loadCakeDecoration(state) {
            return state.cakeDecoration;
        },
        loadOrders(state) {
            if (!localStorage.getItem('orders')) {
                return state.orders;
            } else {
                state.orders = JSON.parse(localStorage.getItem('orders'));
                return state.orders;
            }

        },
        loadInformation(state) {
            return state.information;
        }
    },
    mutations: {
        addOrder(state, payload) {
            state.orders = payload;
        }
    },
    actions: {
        addOrderAction(context, payload) {
            const orders = context.state.orders;
            orders.push(payload);
            context.commit('addOrder', orders);
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    },
    modules: {}
})
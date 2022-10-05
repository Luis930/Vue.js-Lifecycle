const app = new Vue({
    el:"#app",
    data:{
        saludo: "soy el ciclo de vida de Vue"
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
        //Aun no se puede acceder al el
        //al crear metodos, observadores, eventos pero todavia no se accede al DOM
    },
    beforeMount(){
        console.log('beforeMount')
        // se ejecuta antes de insertar el DOM
    },
    mounted(){
        console.log('mounted')
        //se ejecuta al insertar el DOM
    },
    beforeUpdate(){
        console.log('beforeUpdate')
        // Al detectar un cambio
    },
    updated(){
        console.log('updated')
        //al realizar un cambio
    },
    beforeDestroy(){
        console.log('beforeDestroy')
        //Antes de destruir la instancia
    },
    destroyed(){
        console.log('destroyed')
        // Se destruye la instancia
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }

})

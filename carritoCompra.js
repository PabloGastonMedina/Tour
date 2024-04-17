const iconoCarrito = document.querySelector(".iconoCarrito");
const btnLugares = document.querySelector(".lugares_atrasBoton");
const carritoDeCompras = document.querySelector(".carrito");
const elegir = document.querySelector(".articulo_lugares")
const eliminar = document.querySelector(".carrito_borrarTodo")
let articulosCompraViaje = [];


cargarEventListener();

function cargarEventListener(){
    //ABRE LA BOLETERIA
    iconoCarrito.addEventListener("click", abrirBoleteria)
    //CUANDO AGREGAMOS UN VIAJE
    elegir.addEventListener("click", agregarViaje);

    //ELIMINAMOS VIAJES
    carritoDeCompras.addEventListener("click", eliminarViaje);

    //VACIAMOS LA BOLETERIA
    document.addEventListener("click", function(event) {
    if (event.target.closest(".carritoBorrado")) {
        articulosCompraViaje = [];
        carritoHTML();
    }
});

}


//FUNCIONES 


//FUNCION PARA ABRIR BOLETERIA
function abrirBoleteria(){
    carritoDeCompras.classList.toggle("seveNoSeVe")
}

//AGREGAMOS VIAJE
function agregarViaje(event){
   event.preventDefault();

    if(event.target.classList.contains("lugares_atrasBoton")){
        const viajeSeleccionado = event.target.parentElement.parentElement;
         leerDatosViaje(viajeSeleccionado);
    }
    
}

//ELIMINAMOS VIAJE
function  eliminarViaje(e) {
    console.log(e.target.classList)
    if(e.target.classList.contains("borrando")){
        const viajeID = e.target.getAttribute("data-id");

        articulosCompraViaje = articulosCompraViaje.filter(viaje => viaje.id !== viajeID);

        carritoHTML();
    }
}


//LEEMOS EL CONTENIDO HTML Y EXTRAEMOS LA INFORMACION
function leerDatosViaje(viaje){
    //console.log(viaje)

    //CREAMOS UN OBJETO CON EL CONTENIDO DEL VIAJE
    const infoViaje = {
        imagen : viaje.querySelector("img").src,
        lugar : viaje.querySelector("h2").textContent,
        precio : viaje.querySelector("a").textContent,
        id : viaje.querySelector("a").getAttribute("data-id"),
        cantidad : 1,
    }
    //console.log(infoViaje)

    //AGREGAMOS ELEMENTOS A ARTICULOS COMPRA VIAJE
    articulosCompraViaje = [...articulosCompraViaje, infoViaje] 

    carritoHTML();
}


//MOSTRAMOS LOS VIAJES EN EL HTML
function carritoHTML(){

    //LIMPIAMOS LA BOLETERIA
    limpiarHTML();

    articulosCompraViaje.forEach(viaje => {
        const cajaViaje = document.createElement("div")
        cajaViaje.classList.add("carrito_info")
        cajaViaje.classList.add("eliminado")
        cajaViaje.innerHTML = ` 
          <h3 class="carrito_reserva">${viaje.lugar}</h3>
          <img class="carrito_reserva carrito_reservaImg " src="${viaje.imagen}" alt="" width="100px">
          <h4 class="carrito_reserva ">${viaje.precio}</h4>
          <h4 class="carrito_reserva ">1</h4>
          <a class ="carrito_reserva borrando" data-id="${viaje.id}">X</a>
        ` ;

        
        //REVISA SI UN ELEMENTO ESTA EN BOLETERIA

        carritoDeCompras.insertBefore(cajaViaje, carritoDeCompras.children[1])
    });


    //ACA CREAMOS LA PARTE DE ARRIBA DEL CARRITO
    const menuCarrito = document.createElement("div");
    menuCarrito.classList.add("carrito_info");
    menuCarrito.classList.add("carrito_infoTitulos");
    menuCarrito.innerHTML = `
          <h3 class="carrito_reserva">Lugar</h3>
          <h3 class="carrito_reserva">Foto</h3>
          <h4 class="carrito_reserva">Precio</h4>
          <h4 class="carrito_reserva">Pasajes</h4>
          <h5 class="carrito_reserva borrar"></h5>
    `;
    var primerHijo = carritoDeCompras.firstChild;
    carritoDeCompras.insertBefore(menuCarrito, primerHijo);


    //ACA CREAMOS EL BOTON ELIMINAR TODO
    const eliminarTodo = document.createElement("div");
    eliminarTodo.classList.add("carritoBorrado")
    eliminarTodo.innerHTML =`<a class="carrito_borrarTodo">ELIMINAR TODOS</a>` 
    carritoDeCompras.appendChild( eliminarTodo)
}


//ELIMINAMOS LOS VIAJES DE LA BOLETERIA
function limpiarHTML() {
   carritoDeCompras.innerHTML= "";
}


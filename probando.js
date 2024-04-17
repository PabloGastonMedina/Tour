

const pantalla = document.querySelector("body");
const carrito = document.querySelectorAll(".carrito_reserva")
const final = document.querySelector("footer p");
const imagen = document.querySelector(".header_logo");
const nosotros= document.querySelector("#Nosotros")
const cajaHeader = document.querySelector(".header_fondo");
const cajaLugares = document.querySelector(".articulo_lugares");
const cambiarFondo = document.querySelector("#fondo");

/*Cambiando Fondo*/

function cambiandoFondo(){
   cajaHeader.classList.toggle("cambiandoTodo")
   final.classList.toggle("final")
   pantalla.classList.toggle("darkMode")
   cajaLugares.classList.toggle("articulo_lugares2")
   carrito.forEach(element => {
   element.classList.toggle('carrito_oscuro'); });
}

cambiarFondo.addEventListener("click", cambiandoFondo);

/*Probando cosas

console.log(imagen.classList.contains("header_logo"))

  
let btn = document.querySelector("#boton_contacto");
console.log(btn);


btn.addEventListener("click", () => {
     alert("Si has completado los datos, mensaje enviado")
});


nosotros.addEventListener("mouseenter", () =>{
   alert("Estas viendo articulo sobre nosotros")
})

*/
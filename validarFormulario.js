
document.addEventListener("DOMContentLoaded", function () {

    const inputNombreCompleto = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#email");
    const inputTelefono = document.querySelector("#telefono");
    const inputMensaje= document.querySelector("#mensaje");
    const formulario = this.documentElement.querySelector(".contacto")


    inputNombreCompleto.addEventListener("blur", validar);
    inputEmail.addEventListener("blur", validar);
    inputTelefono.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);



    //FUNCION PARA VALIDAR
    function validar(event){
        if(event.target.value.trim() === ""){
            mostrarAlerta(`El Campo "${event.target.id}" es obligatorio`, event.target.parentElement);
            return;
            }   
             
           if (event.target.id === "email" && !validarEmail(event.target.value)){
            mostrarAlerta("EL EMAIL NO ES VALIDO", event.target.parentElement);
            return;
           }
 
            limpiarAlerta(event.target.parentElement);
    }





    // FUNCION PARA MOSTRAR ALERTA
    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia)

        //GENERAMOS LA ALERTA HTML
        const error = document.createElement("DIV");
        error.classList.add("contacto_error");
        error.textContent = mensaje;


        //INYECTAMOS EL ERROR AL FORMULARIO
        referencia.appendChild(error);
        
    }





    //FUNCION PARA LIMPIAR LA ALERTA
    function limpiarAlerta(referencia){
     const alerta = referencia.querySelector(".contacto_error")
        if(alerta){
            alerta.remove();
        }
    } 


    function validarEmail(){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        console.log(resultado);
    }
})  


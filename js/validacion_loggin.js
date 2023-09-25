const inputsForm = document.querySelectorAll('#input');

console.log(inputsForm)

inputsForm.forEach(input =>{
    input.addEventListener('blur', (input) =>{
        validar(input.target);
        console.log(input.target);
    })
})
 



function validar (input){
    const tipoInput = input.dataset.tipo //esto es para llarmar a los data-tipo
        console.log(tipoInput)


       
  
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        //input.parentElement.querySelector('.input-message-error').innerHTML = ''
        input.parentElement.classList.add("input-message-error")

    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeerror(tipoInput, input)

    }
}



// 

const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
   
    email:{
        valueMissing: "Este campo esta vacio.",
        typeMismatch: "EL correo no es valido.",
    },
   
    password:{
        valueMissing: "Este campo esta vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
     
    }
   
}


function mostrarMensajeDeerror (tipoInput, input){
    let mensaje = '';
    tipoError.forEach(error => {
        if(input.validity[error]){
            console.log(error);
            console.log(input.validity[error])
            console.log(tipoInput)
             console.log(mensajesDeError[tipoInput][error])
             mensaje = mensajesDeError[tipoInput][error]
        }
    })
    console.log('hola de error')
    return mensaje;

}
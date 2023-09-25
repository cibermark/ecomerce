import { servicios } from "../service/client-service.js";


const btn_img = document.querySelector('.agregar__imagen');
console.log(btn_img);
let image = ""

btn_img.addEventListener('change', load);

function load(e){
    var file = new FileReader()
    console.log(file)
    console.log(e)
    file.readAsDataURL(e.target.files[0]);
    file.addEventListener('load', read)
}

function read(e){
    document.querySelector('#box__imagen').style.backgroundImage = "url('" + e.target.result + "')"
    image = e.target.result;
    document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
}


const add_NewBtn= document.querySelector(".formulario_contendor");

add_NewBtn.addEventListener('submit',(e)=>{
    e.preventDefault();


    if(!image){
        document.querySelector(".archivo__faltante").parentElement.classList.add("input__invalido");
    }else{
        const name = document.querySelector("[data-tipo=nombre_prod]").value
        const price = document.querySelector("[data-tipo=precio_prod]").value
        const category = document.querySelector('[data-tipo=categoria]').value
        const description = document.querySelector('[data-tipo=descripcion_prod]').value
        let id = uuid.v1()

        servicios
            .createProducto(name, category, id, image, price, description,)
            .then(producto => {

                console.log(producto)
                window.location.href ="index.html"
            }).catch((error) => console.log(error));




    }
   


})
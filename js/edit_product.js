import { servicios } from "../service/client-service.js";

const url = new URL(window.location)
const id = url.searchParams.get('id');

const name = document.querySelector("[data-tipo=nombre_prod]")
const price = document.querySelector("[data-tipo=precio_prod]")
const category = document.querySelector('[data-tipo=categoria]')
const description = document.querySelector('[data-tipo=descripcion_prod]')
const img = document.querySelector('.agregar__imagen-div')

let fileImg = ''

    const getProduct = ()=>{
        if (id === null){
            console.log('error')
        }

        servicios.detailsProduct(id)
            .then((product)=>{
                console.log(id)
                name.value = product.nombre
                price.value = product.precio
                category.value = product.category
                description.value = product.descripcion
                img.style.backgroundImage = `url(${product.img})`
                fileImg = product.img
           


        const btnImage = document.querySelector('.agregar__imagen') 

        btnImage.addEventListener('change', load);

        function load (e){
            var file = new FileReader()
            console.log(file)
            console.log(e)
            file.readAsDataURL(e.target.files[0]);
            file.addEventListener('load', read)
        }

        function read (e) {
            document.querySelector('#box__imagen').style.backgroundImage = "url('" + e.target.result + "')"
            fileImg = e.target.result;
            document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
        }

        }).catch((error) => console.log(error));
    }
     getProduct()

    document.querySelector(".formulario_contendor").addEventListener("submit", (evento) => {
        evento.preventDefault();
        modificarProducto();
    });

   

        
    const modificarProducto = async () => {
        
        try{
            const modificado = await servicios.updateProduct(name.value, category.value, id, fileImg, price.value, description.value, )
            console.log("antes");
            window.location.href =("agrega_productos.html");
            console.log("despues")
    
        }catch(error){
            console.log(error)
        }
    }


    

// alert('hola')
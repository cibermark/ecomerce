import { servicios } from "../service/client-service.js";

const url = new URL(window.location)
const search_products =  url.searchParams.get('buscar')
const searched = search_products.toLowerCase();
    console.log(searched)

    const crearNuevaLinea = (img, nombre, precio, descripcion, searched, category, id) => {
        const linea = document.createElement("div");
    
        const contenido = `
            <div class="articulos_descripcion">
            <a href="./detail_product.html?id=${id}&categoria=${category}" class="decoration">
                <div>
                    <img class="img_producto" src="${img}" alt="Imagen del Producto ${nombre}">
                </div>
                <div class="detalles">
                    <h1 class="nombre_prod">${nombre}</h1>
                    <h5 class="precio_prod">$${precio}</h5>
                    <p class="descripcion_prod">${descripcion}</p>
                </div>
            </a>
            </div>
        `;
    
        linea.innerHTML = contenido;
    
        return linea;
    };


    const section =  document.querySelector('[data-producto]');


    servicios
        .listaProductos()
        .then((data) => {

            data.forEach(product => {
                const name = product.nombre.toLowerCase();

                if(name.includes(searched)){
                    document.querySelector(".bloqueo_error").style.display = "none";
                    document.querySelector(".bloqueo_title").style.display = "block";
                    const nuevaLinea = crearNuevaLinea(product.img, product.nombre, product.precio, product.descripcion, searched, product.category, product.id,);
                    section.appendChild(nuevaLinea); 
                }

            });
        }).catch((error) => alert("Oops! Error. Comuniquese con Marco"));
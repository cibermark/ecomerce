import { servicios } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
const category = url.searchParams.get("categoria");

let cont = 0;


const crearNuevaLinea = (nombre, img, precio, descripcion) => {
    const linea_1 = document.createElement("div");

    const contenido = `
    <div>
        <img class="img_producto" src="${img}" alt="Imagen del Producto ${nombre}">
    </div>
    <div class="detalles">
        <h1 class="nombre_prod">${nombre}</h1>
        <h5 class="precio_prod">$${precio}</h5>
        <p class="descripcion_prod">${descripcion}</p>
    </div>
    `;

    linea_1.innerHTML = contenido;

    return linea_1;
};








// para simmilares

const newLine = (nombre, category,  id, img, precio, ) => {
    const linea_2 = document.createElement("div");

    const contenido = `<div class="contenedor block_principal">
    <a class="link_product" href="./detail_product.html?id=${id}&categoria=${category}">
    <img src="${img}" alt="${nombre}">
    <div>
      <ul>
        <li class="name_product">${nombre}</li>
        <li class="price_product">$${precio}</li>
        <li>Ver producto</li>
      </ul>   
    </div>
    </a>
 </div>
`

    linea_2.innerHTML = contenido;

    return linea_2;
};

let div_details = document.querySelector('[data-details]');


servicios
    .detailsProduct(id)
    .then((data) => {

        const line = crearNuevaLinea(data.nombre, data.img, data.precio, data.descripcion);
        div_details.appendChild(line).className = "div_acd";
        let content = data
        console.log(content.category);


    })
    .catch((error) => alert("Oops! Error. Comuniquese con asdfasdfasdf"));






const starwars = document.querySelector('[data-starwars]') //div done se guarfara similares

servicios.listaProductos().then((data)=>{
    data.forEach(product =>{
    if(category == product.category) {
        if(screen.width > 768 && cont < 6){
        
            
                const nuevaLinea = newLine(product.nombre, product.category, product.id, product.img, product.precio);
                starwars.appendChild(nuevaLinea);
                cont++;
            
        }else if (screen.width <= 768 && cont < 4){
    
             
                const nuevaLinea = newLine(product.nombre, product.category, product.id, product.img, product.precio);
                starwars.appendChild(nuevaLinea);
                cont++;
              
        }
        
        
    }})
        
        
}).catch((error) => alert("Oops! Error. Comuniquese con Marco"));
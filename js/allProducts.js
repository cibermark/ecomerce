import { servicios } from "../service/client-service.js";

const crearNuevaLinea = (nombre, category, id, img, precio) => {
    const linea = document.createElement("div");
    
    const contenido = `
    <div class="productos_all">
    <a class="link_producto" href="./detail_product.html?id=${id}&categoria=${category}">
    <div class="bng_box">
    <img class="img" src="${img}" alt="${nombre}">
    </div>
    <div class ="link_producte">
      <ul>
        <li class="nombre_producto">${nombre}</li>
        <li class="precio_producto">${precio}</li>
        <li>Ver producto</li>
      </ul>   
    </div>
    </a>
 </div>
    `;
    linea.innerHTML = contenido;
  
    return linea;
  };

  
const div = document.querySelector("[data-producto]");

servicios
  .listaProductos()
  .then((data) => {
    
    data.forEach(product=> {
      const nuevaLinea = crearNuevaLinea(product.nombre, product.category, product.id, product.img, product.precio);
      div.appendChild(nuevaLinea);
    }) ;
  })
  .catch((error) => alert("Oops! Error. Comuniquese con Marco"));
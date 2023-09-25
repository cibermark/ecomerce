import { servicios } from "../service/client-service.js";

const crearNuevaLinea = (nombre, category, id, img, precio) => {
    const linea = document.createElement("div");

    // href="edit_product.html?id=${id}"
    
    const contenido = `
    <div class="articulo">
    <div class="bng_box">
    <div class="articulo_edicion">
        <a class="position_icon" href="edit_product.html?id=${id}"><ion-icon name="create-outline" class="icon"></ion-icon></a>
        <button type="button" id="${id}" class="btn_borrar"><ion-icon name="trash-outline"n  class="icon"></ion-icon></button>
    </div>
    <img class="img" src="${img}" alt="Imagen del producto">
    </div>
    <div class="lista_descripcion">
        <ul>
            <li class="nombre_producto">${nombre}</li>
            <li class="precio_producto">$${precio}</li>
            <li class="number_producto">${id}</li>
        </ul>
    </div>
    </div>
    `;
    linea.innerHTML = contenido;


    // eliminar producto

    const btn = linea.querySelector(".btn_borrar");
    btn.addEventListener("click", () => {
      const id = btn.id;
      servicios
        .deleteProducto(id)
        .then((respuesta) => {
          
          window.location.href = "index.html";
        })
        .catch((err) => alert("Ocurrió un error"));
    });
  
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
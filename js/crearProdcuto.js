import { servicios } from "../service/client-service.js";

const crearProducto = (nombre, category, id, img, precio ) =>{
    const product = document.createElement('div')
    const contenido = `
    <div class="contenedor block_principal">
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
   
    product.innerHTML = contenido;
    // const btn = product.querySelector('.btn')
    // btn.addEventListener('click', () =>{
    //     const id = btn.id
    //     servicios.deleteProducto(id)
    //     .then(response => alert("eliminado"))
    //     .catch(error => alert('error'))
    // })
    return product;


}

const starwars = document.querySelector('[data-starwars]')
const consolas = document.querySelector('[data-consolas]') 
const diversos = document.querySelector('[data-diversos]')  

let cont_starwars = 0;
let cont_consolas = 0;
let cont_diversos = 0;

servicios.listaProductos().then((data)=>{
    data.forEach(product =>{
    
    if(screen.width > 768){
     
        if (product.category === 'starwars' && cont_starwars < 6) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            starwars.appendChild(nuevaLinea);
            cont_starwars++;
          }
          if (product.category === 'consolas' && cont_consolas < 6) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            consolas.appendChild(nuevaLinea);
            cont_consolas++;
          }
          if (product.category === 'diversos' && cont_diversos < 6) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            diversos.appendChild(nuevaLinea);
            cont_diversos++;
          }
    }else if (screen.width <= 768){
    
        if (product.category === 'starwars' && cont_starwars < 4) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            starwars.appendChild(nuevaLinea);
            cont_starwars++;
          }
          if (product.category === 'consolas' && cont_consolas < 4) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            consolas.appendChild(nuevaLinea);                                                         
            cont_consolas++;
          }
          if (product.category === 'diversos' && cont_diversos < 4) {
            const nuevaLinea = crearProducto(product.nombre, product.category, product.id, product.img, product.precio);
            diversos.appendChild(nuevaLinea);
            cont_diversos++;
          }
    }
    
   
    })

})


export const create = {
  crearProducto
}
const url = 'https://650f174354d18aabfe99d460.mockapi.io/productos'

// http://localhost:3000/producto url original

//sutitutir por este : https://650f174354d18aabfe99d460.mockapi.io/productos

const listaProductos = ()=>{

    return fetch( 'https://650f174354d18aabfe99d460.mockapi.io/productos'
    ).then(response => response.json()).catch(err => err)
}


const createProducto = (nombre, category, id, img, precio, descripcion)=>{

    return fetch((`${url}`),{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            nombre,
            category,
            id,
            img,
            precio,
            descripcion,
      
        })
    })
}

const deleteProducto = (id)=>{
    return fetch(`https://650f174354d18aabfe99d460.mockapi.io/productos/${id}`, 
    {method: 'DELETE'
    })
}


const detailsProduct = (id) =>{
    return fetch(`https://650f174354d18aabfe99d460.mockapi.io/productos/${id}`)
    .then( (respuesta) => respuesta.json())
}


const updateProduct = (nombre, category, id, img, precio, descripcion) =>{
    return fetch(`https://650f174354d18aabfe99d460.mockapi.io/productos/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, category, id, img, precio, descripcion})
    })
    .then( (respuesta) => respuesta)
    .catch( (err) => console.log(err));
}

export const servicios = {
    listaProductos,
    deleteProducto,
    detailsProduct,
    updateProduct,
    createProducto,
}
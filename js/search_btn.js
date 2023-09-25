// document.querySelector(".header_search").addEventListener("submit", (evento) => {

//     evento.preventDefault();
//     const buscador = document.querySelector(".search").value;
//     window.location.href =`producto_buscado.html?buscar=${buscador}`;
// });



const btn_search = document.querySelector('.search_button')

btn_search.addEventListener("click", (evento) => {
    evento.preventDefault();
    const buscar = document.querySelector(".search_input").value;

    // if(buscar == ""){
    //     window.location.href = "search_all.html?buscar="
    // }else{
    //     window.location.href = `search_all.html?buscar=${buscar}`
    // }

    window.location.href = `search_all.html?buscar=${buscar}`
})


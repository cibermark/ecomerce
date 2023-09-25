const btn_loggin = document.querySelector('.header_loggin')

btn_loggin.addEventListener('click', ()=>{
    location.href ='loggin.html'
})


const btnConsolas = document.querySelector(".banner_btn");
btnConsolas.addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".consolas").scrollIntoView();
});


const img_reload = document.querySelector(".img_reload");

img_reload.addEventListener("click", (event)=>{
    event.preventDefault();
    location.href = 'index.html';
  
})



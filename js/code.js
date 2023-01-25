window.addEventListener('scroll',(e)=>{
    const nav=document.querySelector('.mynav');
    if(window.pageYOffset>0){
        nav.classList.add("shadow");
    }else{
        nav.classList.remove("shadow");
    }
});
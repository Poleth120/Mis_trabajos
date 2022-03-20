var dudas = document.getElementById("dudas");
overlay=document.getElementById('overlay'),
    popup=document.getElementById("popup"),
    contacto = document.getElementById("contacto"),
    btnCerrarpopup=document.getElementById("cerrar-popup");

dudas.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

contacto.addEventListener('click',function(){
    setTimeout(function(){
        location.href="/Login/Contactos.html";
    },1000*1)
})

btnCerrarpopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');

});
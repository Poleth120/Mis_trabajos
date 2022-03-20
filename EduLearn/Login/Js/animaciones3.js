var btnAbrirpopup= document.getElementById('mensaje'),
    overlay=document.getElementById('overlay'),
    popup=document.getElementById("popup"),
    btnCerrarpopup=document.getElementById("cerrar-popup");

var nombre = document.getElementById('nombres');

btnAbrirpopup.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarpopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});


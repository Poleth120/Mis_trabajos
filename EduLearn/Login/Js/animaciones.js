var btnAbrirpopup= document.getElementById('btn-acceder'),
    overlay=document.getElementById('overlay'),
    popup=document.getElementById("popup"),
    btnCerrarpopup=document.getElementById("cerrar-popup");

btnAbrirpopup.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarpopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    setTimeout(function(){
        location.href="Login.html";
    },1000*1)
});



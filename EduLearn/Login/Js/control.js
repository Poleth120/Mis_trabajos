function switchop(){
    var select = document.getElementById("seleccion").value;
    console.log(select);
    return select
}

var redirigir=document.getElementById("redireccion")

redirigir.addEventListener('click', function(){
    let op = switchop()
    if(op=='Estudiante'){
        console.log('MODO ESTUDIANTE')
        setTimeout(function(){
            location.href="/HTML/DashboardS.html";
        },1000*1)
    }
    if (op=='Maestro'){
        console.log('MODO MAESTRO')
        setTimeout(function(){
            location.href="Dashboard-teacher.html";
        },1000*1)
    }
    else{
        console.log("SELECCIONE UNA MODALIDAD")
    }
})
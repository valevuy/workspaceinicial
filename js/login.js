function validar(){
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    if((usuario!=="")&& (pass!=="")){
        window.location.href= "./home.html";
    }
    else{
        alert("debe completar los campos");
    }
}
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("btnLogin").addEventListener("click",function(event){
        validar();
    })
})
function validar(){
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    if((nombre !== "") && (pass!=="")){
      let myStorage = window.localStorage;
      myStorage.setItem('usuario',nombre);
     
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
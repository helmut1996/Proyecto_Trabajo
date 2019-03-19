
window.onload= inicializar; 
var  formautentificacion;
function inicializar(){
formautentificacion = document.getElementById("frmRegistrar");
formautentificacion= addEventListener("submit",createuser,false);
}

function createuser(){
    event.preventDefault();
    var usuario = event.target.email.value;
    var contrasena= event.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(usuario, contrasena)
    
    .catch(function(error) {
        // Handle Errors here.
        alert(error.code) ;
        alert( error.message);
        // ...
      });
}

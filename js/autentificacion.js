

window.onload= inicializar; 
var  formautentificacion;
function inicializar(){
formautentificacion = document.getElementById("frmlogin");
formautentificacion= addEventListener("submit",autenficar,false);
}

function autenficar(event){
    event.preventDefault();
    var usuario = event.target.email.value;
    var contrasena= event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
    .then(function(result){
        alert("autentificacion correcta!!");
        window.location.href="otrapagina.html";
    })    
    .catch(function(error) {
      alert("Ingrese los datos!!");
      
      });
}

function odservador(){
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Existe usuario conectado");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log("No Existe usuario conectado");
          // ...
        }
      });
}
odservador();

function cerrar(){
    firebase.auth().signOut().then(function() {
        console.log("saliendo..")
        window.location.href="index.html";
      }).catch(function(error) {
        console.log(error);
      });
}
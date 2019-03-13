<?php

//llamar las variables

$nombre = $_POST['nombre'];

$correo = $_POST['email'];

$telefono = $_POST['telefono'];

$mensaje = $_POST['mensaje'];

// datos para el correo
$destinatario= 'josubrenes0@gmail.com';
$asunto = 'clienrte desde mi web';

$carta= "De : $nombre \n";
$carta .= "Correo : $correo \n";
$carta .= "Telefono : $telefono \n";
$carta= "mensaje : $mensaje";

// Enviando correo
mail($destinatario,$asunto,$carta);

header('location:enviar-mensaje.html');

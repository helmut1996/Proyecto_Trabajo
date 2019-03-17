<?php
class conectar{
    private $localhost="localhost";
    private $usuario="root";
    private $password ="root";
    private $db="ventas";

 public function conexion(){
    $conexion= mysqli_connect(
            $this->localhost,
            $this->ususario,
            $this->password,
            $this->db);

           return conexion;

    }
}


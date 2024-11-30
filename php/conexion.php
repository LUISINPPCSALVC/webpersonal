<?php
// conexion.php
$conexion = mysqli_connect("localhost", "root", "", "pagweb");
if (!$conexion) {
    die('No se pudo conectar a la base de datos: ' . mysqli_connect_error());
}
?>
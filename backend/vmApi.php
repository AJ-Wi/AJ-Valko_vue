<?php
//header('Content-Type: application/json');
$peticion = isset($_GET['peticion'])? $_GET['peticion'] : null;
$pe = isset($_GET['p'])? $_GET['p'] : null;

$peticiones = [
    'balones',
    'usuarios',
    'clientes',
    'movimientos',
    'estados',
    'pacientes'
];

switch ($peticion){
    case $peticiones[0]:
        consulta($peticiones[0]);
        break;
    case $peticiones[1]:
        consulta($peticiones[1]);
        break;
    case $peticiones[2]:
        consulta($peticiones[2]);
        break; 
    case $peticiones[3]:
        consulta($peticiones[3]);
        break; 
    case $peticiones[4]:
        consulta($peticiones[4]);
        break;
    default:
    echo '<h2>Peticion NO encontrada</h2><br>';
    echo $peticion.'<br>';
    echo $pe;
}

function consulta($peticion){
    include_once 'conexion.php';

    $sql = 'SELECT * FROM '.$peticion;
    $sentencia = $pdo->prepare($sql);
    $sentencia->execute();
    $response = $sentencia->fetchAll();
    echo $response;
}

?>
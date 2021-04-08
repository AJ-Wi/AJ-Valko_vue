<?php
$peticion = isset($_POST['peticion'])? $_POST['peticion'] : null;

$datos = ['dolar'=>600, 'euro'=>700];


echo json_encode($datos);

?>
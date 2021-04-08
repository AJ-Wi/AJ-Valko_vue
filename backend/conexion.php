<?php
$host = 'localhost';
$db = 'valkomedical';
$link = 'mysql:host='.$host.';dbname='.$db;
$user = 'root';
$pass = '';

try {
    $pdo = new PDO($link, $user, $pass);
	echo 'conectado';
} catch (PDOExcepcion $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
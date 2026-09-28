<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$usuario = "admin";
$senha = "12345";

if ($usuario == "admin" && $senha == "12345") {
    echo "Login bem-sucedido";
} else {
    echo "Nome de usuário ou senha incorretos";
};

?>
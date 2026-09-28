<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$escolha = 2;

switch ($escolha) {
    case 1: 
        echo "Hambúrguer";
        break;
    case 2:
        echo "Pizza";
        break;
    case 3:
        echo "Sushi";
        break;
    default:
        echo "Opção inválida.";
};

?>
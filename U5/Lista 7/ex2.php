<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$dia = 6;

switch ($dia) {
    case 1: 
        echo "1: Segunda-feira";
        break;
    case 2:
        echo "2: Terça-feira";
        break;
    case 3:
        echo "3: Quarta-feira";
        break;
    case 4: 
        echo "4: Quinta-feira";
        break;
    case 5:
        echo "5: Sexta-feira";
        break;
    case 6:
        echo "6: Sábado";
        break;
    case 7:
        echo "7: Domingo";
        break;
    default:
        echo "Opção inválida.";
};

?>
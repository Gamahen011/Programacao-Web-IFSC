<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$num1 = 10;
$num2 = 5;
$operacao = 1;

switch ($operacao) {
    case 1: 
        echo $num1 + $num2;
        break;
    case 2:
        echo $num1 - $num2;
        break;
    case 3:
        echo $num1 * $num2;
        break;
    case 3:
        echo $num1 / $num2;
        break;
    default:
        echo "Opção inválida.";
};

?>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$peso = 55;
$altura = 1.70;
$imc = $peso / ($altura * $altura);

switch (true) {
    case ($imc < 18.5): 
        echo "Abaixo do peso";
        break;
    case ($imc < 25): 
        echo "Peso normal";
        break;
    case ($imc < 30): 
        echo "Sobrepeso";
        break;
    case ($imc > 30): 
        echo "Obesidade";
        break;
    default:
        echo "Opção inválida.";
};

?>
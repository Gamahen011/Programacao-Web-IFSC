<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$nota = 9;

switch (true) {
    case ($nota < 6): 
        echo "Reprovado.";
        break;
    case ($nota < 8): 
        echo "Bom, mas pode melhorar.";
        break;
    case ($nota < 10): 
        echo "Muito bom!";
        break;
    case ($nota == 10): 
        echo "Excelente!";
        break;
    default:
        echo "Opção inválida.";
};

?>
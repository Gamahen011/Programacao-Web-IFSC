<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$clima = "ensolarado";

switch ($clima) {
    case "nublado": 
        echo "Podia ser melhor";
        break;
    case "ensolarado":
        echo "Perfeito para curtir uma  praia!";
        break;
    case "chuvoso":
        echo "Leve um guarda-chuva!";
        break;
    case "nevando": 
        echo "Se agasalhe bem!";
        break;
    case "tempestade": 
        echo "Melhor não sair agora.";
        break;
    default:
        echo "Opção inválida.";
};

?>
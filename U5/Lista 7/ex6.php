<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$emocao = "feliz";

switch ($emocao) {
    case "triste": 
        echo "Eu sinto muito que você esteja triste. Tente ouvir uma música que você gosta ou conversar com um amigo";
        break;
    case "feliz":
        echo "Que bom que está tudo certo!";
        break;
    case "fome":
        echo "Eu compro algo pra você";
        break;
    case "ansioso": 
        echo "Relaxa, vai dar tudo certo.";
        break;
    default:
        echo "Opção inválida.";
};

?>
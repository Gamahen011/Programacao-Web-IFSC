<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$horario = 14;

switch (true) {
    case ($horario > 4 && $horario < 12): 
        echo "Boa Manhã";
        break;
    case ($horario < 18): 
        echo "Boa Tarde";
        break;
    case ($horario < 22): 
        echo "Boa Noite";
        break;
    case ($horario > 21 || $horario < 5): 
        echo "Boa Madrugada";
        break;
    default:
        echo "Opção inválida.";
};

?>
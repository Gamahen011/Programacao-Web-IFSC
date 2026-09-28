<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$musica = 1;

switch ($musica) {
    case 1: 
        echo "Rock: Sangue (Saint Juvi)";
        break;
    case 2:
        echo "Pop: Diamonds (Rihanna)";
        break;
    case 3:
        echo "Sertanejo: Sinonimos (Zé Ramalho)";
        break;
    case 4: 
        echo "Eletrônica: Alone (Marshmallow)";
        break;
    default:
        echo "Opção inválida.";
};

?>
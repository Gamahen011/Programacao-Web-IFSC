<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$genero = "rock";

switch ($genero) {
    case "rock": 
        echo "Recomendo: Queen";
        break;
    case "samba":
        echo "Recomendo: Zeca Pagodinho";
        break;
    case "rap":
        echo "Recomendo: Eminem";
        break;
    case "pop": 
        echo "Recomendo: Ariana Grande";
        break;
    default:
        echo "Opção inválida.";
};

?>
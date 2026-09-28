<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$escolha = "voo";

if ($escolha == "força") {
    echo "Você seria o Hulk!";
} else if ($escolha == "velocidade") {
    echo "Você seria o Flash!";
} else if ($escolha == "voo") {
    echo "Você seria o Superman!";
};

?>
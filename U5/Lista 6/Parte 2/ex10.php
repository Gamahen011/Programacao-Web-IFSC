<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$temperatura = 25;

if ($temperatura < 10) {
    echo "Está muito frio! Use roupas quentes.";
} else if ($temperatura < 21) {
    echo "Frio. Vista-se bem!";
} else if ($temperatura < 26) {
    echo "Temperatura agradável.";
} else if ($temperatura < 31) {
    echo "Está ficando quente!";
} else {
    echo "Está muito quente! Fique hidratado.";
};

?>
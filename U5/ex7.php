<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$idade = 17;

if ($idade < 10) {
    echo "Filmes com classificação 'Livre para todos os públicos'.";
} else if ($idade < 14) {
    echo "Filmes com classificação de até '12 anos'.";
} else if ($idade < 18) {
    echo "Filmes com classificação de até '16 anos'.";
} else {
    echo "Filmes com classificação '18 anos' (adulto).";
};

?>
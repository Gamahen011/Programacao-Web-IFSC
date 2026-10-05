<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$notas = [1 => 7, 2 => 8, 3=>4, 4=>9, 5=>6];
$total = 0;
$media = 0;

foreach ($notas as $provas => $notas) {
    $total += $notas;
    $media = $total / $provas;
    echo "<p>Prova $provas completa - Média = $media</p <br>";
};

?>
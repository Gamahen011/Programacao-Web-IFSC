<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$pontuacoes = ["1" => 10, "2" => 20, "3"=>30, "4"=>50, "5"=>100];
$total = 0;

foreach ($pontuacoes as $nivel => $pontos) {
    $total += $pontos;
    echo "<p>Nível $nivel completo - Pontuação = $total</p <br>";
}

?>
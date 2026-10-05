<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$planetas = ["YVGYHJ" => "Gasoso", "trfcv" => "Rochoso", "rr35g"=>"Rochoso", "g346"=>"Gasoso", "Feh90hre"=>"Gasoso"];

foreach ($planetas as $nome => $tipo) {
    echo "<p>Planeta $nome: $tipo</p <br>";
};

?>
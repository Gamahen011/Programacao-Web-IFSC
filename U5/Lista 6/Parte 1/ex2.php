<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$valor = 5.9;
$cotacao = 5.21;
$reais = $valor * $cotacao;

echo "Custou R$ " . number_format($reais, 2, ",", ".")

?>
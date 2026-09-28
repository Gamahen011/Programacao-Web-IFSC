<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$valor = 20;
$percentual = 5; 
$desconto = $valor * $percentual / 100;
$preco = $valor - $desconto;

echo "O preço original era R$" . number_format($valor, 2, ",", ".") . ", com um desconto de R$" . number_format($desconto, 2, ",", ".") . ", o total ficou R$" . number_format($preco, 2, ",", ".")

?>
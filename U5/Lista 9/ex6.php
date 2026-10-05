<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$produtos = ["Maça" => 10, "Pera" => 12, "Melão"=>20, "Banana"=>8, "Manga"=>6];
$formatter = new NumberFormatter('pt_BR', NumberFormatter::CURRENCY);

foreach ($produtos as $nome => $preco) {
    $total = $preco * 0.8;
    $precoFormatado = $formatter->formatCurrency($total, 'BRL'); 
    echo "<p>$nome: $precoFormatado</p <br>";
};

?>
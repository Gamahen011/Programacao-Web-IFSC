<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$produtos = ["Maça" => 4, "Pera" => 2, "Melão"=>8, "Banana"=>10, "Manga"=>3];

foreach ($produtos as $nome => $estoque) {
    if($estoque >= 4) {
        echo "<p>$nome: estoque = $estoque</p <br>";
    }
};

?>
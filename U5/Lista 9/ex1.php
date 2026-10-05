<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$itens = [ "Espada", "Poção de Vida", "Escudo", "Proteção Leve", "Acessório aprimorado", "Item amaldicioado"];

foreach ($itens as $item) {
    echo"<p>$item<br>";
}

?>
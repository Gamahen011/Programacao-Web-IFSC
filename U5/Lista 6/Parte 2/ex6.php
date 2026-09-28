<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$valor = 100;

if ($valor >= 100) {
    echo "Você ganhou um cupom de desconto!";
} else {
    echo "Continue comprando para ganhar um cupom de desconto!";
};

?>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


for ($i = 13; $i >= 1; $i--) {
    if ($i % 2 == 0) {
        echo "<p>Amostra $i: Vida Encontrada!<br>";
    } else {
        echo "<p>Amostra $i: Nada aqui.<br>";
    };  
};

?>
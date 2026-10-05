<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


for ($i = 1; $i <= 15; $i++) {
    if ($i == 7) {
        echo "<p>O alienigena especial chegou!<br>";
    } else {
        echo "<p>O alienigina número $i chegou!<br>";
    };  
};

?>
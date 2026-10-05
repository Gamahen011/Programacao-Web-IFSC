<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


for ($i = 100; $i >= 20; $i -= 20) {
    echo "<p>$i% de bateria<br>";
};
echo "<p>Acabou a bateria<br>";

?>
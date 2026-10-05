<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$galaxias = ["M31" => 2500000, "M33" => 2730000, "NGC 253"=> 11400000, "GN-z11"=>32000000000, "M104"=>28000000];;

foreach ($galaxias as $nome => $distancia) {
    echo "<p>$nome está a $distancia anos-luz</p <br>";
};

?>
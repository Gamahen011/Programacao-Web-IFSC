<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 5</title>
</head>
<body>
    <form action="" method="POST">
        <label for="num1">Digite o número:</label>
        <input type="number" id="num1" name="num1" minlenght="8" maxlength="8"required>
        <button type="submit">Calcular</button>
    </form>
    <?php 
        if ($_POST['num1']) {
            $num = $_POST['num1'];
            $planetas = ["Mercúrio" => 1, "Vênus" => 2, "Terra" => 3, "Marte" => 4, "Júpiter" => 5, "Saturno" => 6, "Urano" => 7, "Netuno" => 8];            
            foreach ($planetas as $planeta => $numero) {
                if ($num == $numero ) {

                    echo "<br><p>O planeta $planeta é $numero";
                }
            }
        }
    ?>
</body>
</html>
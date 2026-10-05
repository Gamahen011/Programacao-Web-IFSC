<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 3</title>
</head>
<body>
    <form action="" method="post">
        <label for="num1">Idade:</label>
        <input type="number" id="num1" name="num1" required>
        <button type="submit">Calcular</button>
    </form>
    <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        if (isset($_POST['num1'])) {
            $num1 = $_POST['num1'];
            if ($num1 < 18) {
                $situacao = "menor";
            } else {
                $situacao = "maior";
            };
            echo "<br><p>Você é $situacao de idade.";
        };
    ?>
</body>
</html>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 2</title>
</head>
<body>
    <form action="" method="get">
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" name="num1" required>
        <label for="num2">Número 2:</label>
        <input type="number" id="num2" name="num2" required>
        <button type="submit">Calcular</button>
    </form>
    <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        if (isset($_GET['num1']) && isset($_GET['num2'])) {
            $num1 = $_GET['num1'];
            $num2 = $_GET['num2'];
            $soma = $num1 + $num2;
            echo "<br><p>A soma é $soma.";
        };
    ?>
</body>
</html>

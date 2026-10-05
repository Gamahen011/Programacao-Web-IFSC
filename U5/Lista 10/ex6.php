<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 6</title>
</head>
<body>
    <form action="" method="post">
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" name="num1" required>
        <label for="operacao">Operação:</label>
        <select id="operacao" name="operacao" required>
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
        </select>
        <label for="num2">Número 2:</label>
        <input type="number" id="num2" name="num2" required>
        <button type="submit">Calcular</button>
    </form>
    <?php 
        if ($_POST['num1'] && $_POST['operacao'] && $_POST['num2']) {
            $num1 = $_POST['num1'];
            $num2 = $_POST['num2'];
            $operacao = $_POST['operacao'];           
            switch ($operacao) {
                case "soma":
                    $resultado = $num1 + $num2;
                    break;
                case "subtracao":
                    $resultado = $num1 - $num2;
                    break;
                case "multiplicacao":
                    $resultado = $num1 * $num2;
                    break;
                case "divisao":
                    $resultado = $num1 / $num2;
                    break;
            };
            echo "<br><p>O resultado é $resultado";
        };
    ?>
</body>
</html>
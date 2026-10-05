<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 4</title>
</head>
<body>
    <form action="" method="POST">
        <label for="num1">Digite o CEP (somente números):</label>
        <input type="number" id="num1" name="num1" minlenght="8" maxlength="8"required>
        <button type="submit">Calcular</button>
    </form>
    <?php 
        if ($_POST['num1']) {

            $cep = $_POST['num1'];
            $lista = [88780000 => 20, 88490000 => 25, 88495000 => 10,  88790000 => 35];
            $formatter = new NumberFormatter('pt_BR', NumberFormatter::CURRENCY);
            foreach ($lista as $item => $frete) {
                if ($cep == $item ) {
                    $precoFormatado = $formatter->formatCurrency($frete, 'BRL'); 
                    echo "<br><p>CEP: $cep <br>Frete: $precoFormatado";
                }
            }
        }
    ?>
</body>
</html>
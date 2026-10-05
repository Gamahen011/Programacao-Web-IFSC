<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 1</title>
</head>
<body>
    <form action="" method="get">
    <label for="nome">Digite seu nome:</label>
    <input type="text" id="nome" name="nome" required>
    <button type="submit">Enviar</button>
    </form>
    <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        if (isset($_GET['nome'])) {
            $nome = $_GET['nome'];
            echo "<br><p>Olá $nome! Seja bem-vindo.";
        };

    ?>
</body>
</html>

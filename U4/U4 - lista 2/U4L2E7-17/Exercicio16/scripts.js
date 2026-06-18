var mensagem = ""
var div = document.getElementById("resultados");

soma = 0;
qnt = 0;

do {
    numero = parseInt(prompt("Digite os números: "))
    soma += numero
    qnt += 1
} while (numero != 0)

var media = soma / qnt

mensagem = document.createElement('p');
div.appendChild(mensagem);
mensagem.textContent = `Quantidade: ${qnt}, Soma: ${soma}, e Média: ${media}`;


function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let num3 = parseInt(document.getElementById("numero3").value);
    let num4 = parseInt(document.getElementById("numero4").value);
    let vetor = [num1, num2, num3, num4];

    adicionar(`A soma dos números é: "${calcularSoma(vetor)}"`, div)
};

function calcularSoma(vetor) {
    let soma = 0;
    vetor.forEach(function (numero) {
        soma += numero
    });
    return soma
}

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
}



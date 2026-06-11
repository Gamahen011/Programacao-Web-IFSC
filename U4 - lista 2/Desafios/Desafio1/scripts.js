var div = document.getElementById("resultados");
var valor = parseInt(document.getElementById("valor").value);

function atualizar() {
    mensagem = ""
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    var numero = Math.floor(Math.random() * 100) + 1;
    

    if (numero == valor) {
        mensagem = "Parabéns, você acertou o número"
    } else if (numero < valor) {
        mensagem = "Errou! É menor que isso"
    } else {
        mensagem = "Errou! É maior que isso"
    }

    if (mensagem) {
        p = document.createElement('p');
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

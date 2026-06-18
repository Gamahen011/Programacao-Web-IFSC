var mensagem = ""
var div = document.getElementById("resultados");

function atualizar() {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
            div.removeChild(div.firstChild);
        }
    }

    var resultado = ""
    var valor = document.getElementById("valor").value;
    resultado = Number(valor);

    for (let i = 1; i <= 24; i++) {
        mensagem = document.createElement('p');
        div.appendChild(mensagem);
        resultado = resultado * 1.05;
        mensagem.textContent = `${i}° mes: R$${resultado.toFixed(2)}`;
    }

}
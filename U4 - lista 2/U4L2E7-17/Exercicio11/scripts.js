var contador = 0;

function atualizar() {
    mensagem = '';
    i = 0;
    var input = (document.getElementById("valor"));
    var valor = Number(input.value);
    

    var div = document.getElementById("resultados");

    if (contador > 0) {
        while (contador > 0) {
            div.removeChild(div.firstChild);
            contador--;
        }
    }

    for (let i = 1; i <= 10; i++) {
        var mensagem = document.createElement('p');
        contador++;
        mensagem.textContent = `${valor} x ${i} = ${valor * i}`;
        div.appendChild(mensagem);
        div.appendChild(document.createElement('br'));
    }
}
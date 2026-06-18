var contador = 0;

function atualizar() {
    mensagem = '';
    i = 0;
    var input1 = (document.getElementById("valor1"));
    var valor1 = Number(input1.value);
    var input2 = (document.getElementById("valor2"));
    var valor2 = Number(input2.value);
    var input3 = (document.getElementById("valor3"));
    var valor3 = Number(input3.value);

    var div = document.getElementById("resultados");

    if (contador > 0) {
        while (contador > 0) {
            div.removeChild(div.firstChild);
            contador--;
        }
    }

    for (let i = valor2; i <= valor3; i++) {
        var mensagem = document.createElement('p');
        contador++;
        mensagem.textContent = `${valor1} x ${i} = ${valor1 * i}`;
        div.appendChild(mensagem);
        div.appendChild(document.createElement('br'));
    }
}
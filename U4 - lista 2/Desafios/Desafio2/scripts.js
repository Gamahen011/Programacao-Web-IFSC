var div = document.getElementById("resultados");

function atualizar() {
    mensagem = ""
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    const palavra = document.getElementById("valor").value
    const inverso = palavra.split("").reverse().join("");
    
    mensagem = inverso

    if (mensagem) {
        p = document.createElement('p');
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

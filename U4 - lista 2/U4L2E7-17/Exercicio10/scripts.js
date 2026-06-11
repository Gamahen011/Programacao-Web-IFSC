var mensagem = ""

function atualizar() {
    var input = (document.getElementById("valor"));
    var valor = Number(input.value);
    var resultado = ""

    for (let i = 0; i <= valor; i++) {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
    }

    if (mensagem) {
        let div = document.getElementById("resultados");
        let remover = div.firstChild;
        remover.remove();
    }

    let div = document.getElementById("resultados");
    mensagem = document.createElement('p');

    if (resultado != "invalido") {
        mensagem.textContent = `${resultado}`; 
    };
    
    div.appendChild(mensagem);
}
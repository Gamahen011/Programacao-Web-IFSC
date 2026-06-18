var mensagem = ""

function timer() {
    for (let numero = 10; numero >= -1; numero--) {
        let atraso = (10 - numero) * 1000;
        if (numero == -1) {
            numero = "Fogo!";
        }
        setTimeout(() => {
            atualizar(numero);
        }, atraso);
    }
};

function atualizar(valor) {

    var resultado = valor;

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
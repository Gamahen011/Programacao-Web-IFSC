var mensagem = ""

function atualizar() {
var resultado = ""

for (let i = 1; i <= 100; i++) {
    resultado += i + " ";
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
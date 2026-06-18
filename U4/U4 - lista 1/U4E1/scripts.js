var resultado = ""

function atualizar() {
var input1 = document.getElementById("numero1");
var numero1 = input1.value;
var input2 = document.getElementById("numero2");
var numero2 = input2.value;

if (numero1 < numero2) {
    var maior = numero2
} else {
    var maior = numero1
}

if (resultado) {
    let div = document.getElementById("resultados");
    remover = div.firstChild;
    remover.remove();
}

let div = document.getElementById("resultados");
resultado = document.createElement('p');
resultado.textContent = `O maior vale ${maior}`;
div.appendChild(resultado);
}
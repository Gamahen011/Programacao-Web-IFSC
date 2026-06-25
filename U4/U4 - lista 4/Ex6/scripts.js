function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let altura = parseInt(document.getElementById("altura").value);
    let raio = parseInt(document.getElementById("raio").value);

    adicionar(`O volume do cilindro é de: "${calcularVolume(altura, raio)}m³"`, div)
};

function calcularVolume(altura, raio) {
    pi = 3.14
    return (raio * raio * pi * altura)
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



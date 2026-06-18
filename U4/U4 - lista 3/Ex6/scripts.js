var div = document.getElementById("resultados");

function atualizar() {

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    let numeros = [];

    for (let contador = 2; contador <= 20; contador += 2) {
        numeros.push(contador)
    }

    let soma = 0
    numeros.forEach(numero => {
        soma += numero      
    });

    adicionar(soma);
}

function adicionar(mensagem) {
    if (mensagem) {
        p = document.createElement('p');
        div.appendChild(p);
        p.textContent = mensagem;
    }
}


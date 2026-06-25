var vetor = [];
var inputs = [];
var div = document.getElementById("resultados");

function atualizar() {
    vetor = [];
    inputs = [];
    let div = document.getElementById("resultados");
    limpar(div);

    let qnt = prompt("Quantas informações que inserir: ");
    inputs = criarInputs(qnt, div);
};

function cadastrar() {
    let array = criarVetor(inputs)
    array.forEach(function(numero) {
        vetor.push(numero)
    })
    adicionar("Valores cadastrados", div)
}

function criarInputs(valor, div) {
    let inputs = []
    for (let i = 0; i < valor; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Digite um número";
        div.appendChild(input);
        inputs.push(input);
    }

    return inputs
};


function criarVetor(inputs) {
    let numeros = []
    inputs.forEach(function(input) {
        let numero = parseInt(input.value);
        numeros.push(numero)
    });
    return numeros
}

function eh_vazio(vetor) {
    if (vetor.length < 0) {
        return true
    } else {
        return false
    }
}

function maior(vetor) {
    if (eh_vazio(vetor)) {
        return -1
    };
    let maior = "";
    vetor.forEach(function(numero) {
        if (maior < numero || maior == "") {
            maior = numero
        }
    })
    return maior
}

function menor(vetor) {
    if (eh_vazio(vetor)) {
        return -1
    };
    let menor = "";
    vetor.forEach(function(numero) {
        if (menor > numero || menor == "") {
            menor = numero
        }
    })
    return menor
}

function media(vetor) {
    if (eh_vazio(vetor)) {
        return -1
    };
    let soma = 0
    vetor.forEach(function(numero) {
        soma += numero
    })
    media = soma / vetor.length
    return media
}

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function fazer(funcao) {
    let div = document.getElementById("resultados");
    limpar(div);
    switch(funcao) {
        case "eh_vazio":
            resultado = String(eh_vazio(vetor));
            break;
        case "maior":
            resultado = maior(vetor);
            break;
        case "menor":
            resultado = menor(vetor);
            break;
        case "media":
            resultado = media(vetor);
            break;
    }
    adicionar(resultado, div)
}

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
}




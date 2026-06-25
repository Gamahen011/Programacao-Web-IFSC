function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let numero = parseInt(document.getElementById("numero").value);
    
    adicionar(`O número ${numero} é ${par_ou_impar(numero)}`, div)
};

function par_ou_impar(numero) {
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
};

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



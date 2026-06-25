function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let anos = parseInt(document.getElementById("anos").value);
    
    mensagem = calcularIdade(nome, idade, anos);
    adicionar(mensagem, div)
};


function calcularIdade(nome, idade, anos) {
    let resultado = idade + anos
    return `${nome} terá ${resultado} anos daqui a ${anos} anos!`
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



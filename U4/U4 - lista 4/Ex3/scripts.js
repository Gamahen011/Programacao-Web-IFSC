function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let horas = parseInt(document.getElementById("horas").value);
    let minutos = parseInt(document.getElementById("minutos").value);
    
    adicionar(`Tempo total: ${tempo_total(horas, minutos)} minutos`, div)
};

function tempo_total(horas, minutos) {
    let resultado = horas * 60 + minutos
    return resultado
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



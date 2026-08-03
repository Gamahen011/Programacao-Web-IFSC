function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let datastr = document.getElementById("data").value;
    let dia = parseInt(datastr.split("/")[0]);
    let mes = parseInt(datastr.split("/")[1]);
    let ano = parseInt(datastr.split("/")[2]);
    convertido = converter(dia, mes, ano)
    adicionar(convertido, div)
};

function converter(dia, mes, ano) {
    let unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    let dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "noventa"];
    let especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]

    diaseparado = [Math.trunc(dia / 10), dia % 10];
    messeparado = [Math.trunc(mes / 10), mes % 10];
    anoseparado = [Math.trunc(ano / 1000), Math.trunc((ano % 1000) / 100), Math.trunc((ano % 100) / 10), ano % 10];

    let respostas = [];

    for (let i of [diaseparado, messeparado]) {
        if (i[0] == 1) {
            respostas.push(especiais[i[1]])
        } else if (i[0] == 0) {
            respostas.push(unidades[i[1]])
        } else {
            respostas.push(`${dezenas[i[1]-1]} e ${unidades[i[1]]}`)
        }
    };
    if (anoseparado[1] == 1) {
        respostas.push(`dois mil e cem`);
    } else if (anoseparado[2] == 1) {
        respostas.push(`dois mil e ${especiais[anoseparado[1]]}`);
    } else if (anoseparado[2] == 0) {
        respostas.push(`dois mil e ${unidades[anoseparado[3]]}`);
    } else {
        respostas.push(`dois mil e ${dezenas[anoseparado[2]]} e ${unidades[anoseparado[3]]}`);
    }
    
    return `${respostas[0]} do ${respostas[1]} de ${respostas[2]}`
};

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
};

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
};




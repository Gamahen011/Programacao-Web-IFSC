function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let horastr = document.getElementById("horario").value;
    let hora = parseInt(horastr.split(":")[0]);
    let minutos = parseInt(horastr.split(":")[1]);
    convertido = converter(hora, minutos)
    adicionar(convertido, div)
};

function converter(hora, minutos) {
    if (hora > 12) {
        hora -= 12;
        periodo = "P.M."
    }
    if (hora == 0) {
        hora = 12;
        periodo = "A.M."
    }
    else if (hora == 12) {
        periodo = "P.M."
    }
    horario = `${hora}:${minutos} ${periodo}`;
    return horario
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




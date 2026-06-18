var div = document.getElementById("resultados");

function atualizar() {
    mensagem = ""
    consoantes = 0;
    vogais = 0;

    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }

    const frase = document.getElementById("valor").value;
    const separada = frase.split("");

    for (const palavra of separada) {
        if (ehConsoante(palavra)) {
            consoantes += 1;
        }
        else if (ehVogal(palavra)) {
            vogais += 1;
        }
    };

    for (let contador = 1; contador <= 2; contador++) {
        switch (contador) {
            case 1:
                mensagem = `Número de vogais na frase: ${vogais}`;
                adicionar(mensagem)
                break;
            case 2:
                mensagem = `Número de consoantes na frase: ${consoantes}`;
                adicionar(mensagem)
                break;
        }
    }
}

function adicionar(mensagem) {
    if (mensagem) {
            p = document.createElement('p');
            div.appendChild(p);
            p.textContent = mensagem;
        }
}


function ehConsoante(char) {
  return /^[a-z]$/.test(char.toLowerCase()) && !/^[aeiou]$/.test(char.toLowerCase());
}

function ehVogal(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}
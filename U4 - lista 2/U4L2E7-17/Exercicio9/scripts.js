var mensagem = ""



function timer() {
    var input = (document.getElementById("valor"));
    var valor = Number(input.value);
    if (valor >= 0) {
        for (let numero = 1; numero <= valor; numero++) {
            let atraso = numero * 1000;
            setTimeout(() => {
                atualizar(numero);
            }, atraso);
        };
    } else {
        for (let numero = 1; numero >= valor; numero--) {
            let atraso = (Math.abs(valor - numero)) * 1000;
      setTimeout(() => {
        atualizar(numero);
      }, atraso);
    }
  };
};

function atualizar(valor) {

    var resultado = valor;

    if (mensagem) {
        let div = document.getElementById("resultados");
        let remover = div.firstChild;
        remover.remove();
    }

    let div = document.getElementById("resultados");
    mensagem = document.createElement('p');

    if (resultado != "invalido") {
        mensagem.textContent = `${resultado}`; 
    };

    div.appendChild(mensagem);
}
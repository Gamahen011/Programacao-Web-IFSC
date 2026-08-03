function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let palavra = document.getElementById("palavra").value.toLowerCase();

    anagrama = anagramar(palavra)
    adicionar(anagrama, div)
};

function anagramar(palavra) {
  let letras = palavra.split('');
  let anagrama = '';

  while (letras.length > 0) {
    const indice = Math.floor(Math.random() * letras.length);
    anagrama += letras[indice];
    letras.splice(indice, 1);
  };
  return anagrama;
}

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




const input = document.getElementById("inputText");
const botao = document.getElementById("changeButton");

botao.addEventListener('click', () => atualizar(input.value));

function atualizar(texto) {
  paragrafo = sortear();
  paragrafo.innerText = texto;
}

function sortear() {
  paragrafos = [p1, p2, p3];
  return paragrafos[Math.floor(Math.random() * 3)];
}
let vermelho = document.getElementById("redBox");
let verde = document.getElementById("greenBox");
let azul = document.getElementById("blueBox");

for (let i of [vermelho, verde, azul]) {
    i.addEventListener('mouseover', () => {
        let cor = window.getComputedStyle(i).backgroundColor;
        document.body.style.backgroundColor = cor;
    });
};



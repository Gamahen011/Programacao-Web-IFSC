vermelha = document.getElementById("button1")
azul = document.getElementById("button2")
verde = document.getElementById("button3")

for (let i of [vermelha, verde, azul]) {
    i.addEventListener('click', () => atualizar(i));
};

function atualizar(i) {
    switch (i.dataset.cor) {
        case "azul":
            document.body.style.fontFamily = "monospace";
            document.body.style.color = "blue";
            break;
        case "vermelho":
            document.body.style.fontFamily = "Times New Roman";
            document.body.style.color = "red";
            break;
        case "verde":
            document.body.style.fontFamily = "Allura";
            document.body.style.color = "green";
            break;
    }
}
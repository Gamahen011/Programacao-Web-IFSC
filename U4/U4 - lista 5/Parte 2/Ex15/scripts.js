let botoes = [0, 1, 2, 3]
let divs = [0, 1, 2, 3]

for (let i = 0; i < 4; i++) {
  botoes[i] = document.getElementById(`btn${i+1}`);
  divs[i] = document.getElementById(`box${i+1}`);
  botoes[i].addEventListener('click', () => atualizar(divs[i]));
}

function atualizar(div) {
    switch(div) {
        case divs[0]:
            div.style.backgroundColor = "lightblue";
            div.style.transform = "rotate(10deg)";
            break;
        case divs[1]:
            div.style.backgroundColor = "lightgreen";
            div.style.borderRadius = "100%";
            break;
        case divs[2]:
            div.style.backgroundColor = "#FFCCCC";
            div.style.paddingLeft = "20px";
            div.style.paddingRight = "20px";
            break;
        case divs[3]:
            div.style.backgroundColor = "lightyellow";
            div.style.paddingTop = "20px";
            div.style.paddingBottom = "20px";
            break;
    }
}
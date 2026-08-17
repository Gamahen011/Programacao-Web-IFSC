let botoes
let divs 

for (let i = 0; i < 4; i++) {
  botoes[i] = document.getElementById(`btn${i+1}`);
  divs[i] = document.getElementById(`box${i+1}`);
  botoes[i].addEventListener('click', () => atualizar(divs[i+1]));
}

function atualizar(botao) {
    switch (botao) {
        case btn1:

    }
}





function mudarDiv(div) {
  if (div == divs[0]) {
    div.style.backgroundColor = "lightblue";
    div.style.transform = "rotate(10deg)"
  }
  else if (div == divs[1]) {
    div.style.backgroundColor = "lightgreen";
    div.style.borderRadius = "100%";
  }
  else if (div == divs[2]) {
    div.style.backgroundColor = "#FFCCCC";
    div.style.paddingLeft = "20px";
    div.style.paddingRight = "20px";
  }
  else {
    div.style.backgroundColor = "lightyellow";
    div.style.paddingTop = "20px";
    div.style.paddingBottom = "20px";
  }
}
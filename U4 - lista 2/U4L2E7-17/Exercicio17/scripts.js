var mensagens = []
var div = document.getElementById("resultados");
total = 0

do {
    codigo = parseInt(prompt("Digite o código: "))
    qnt = parseInt(prompt("Digite a quantidade: "))

    switch(codigo) {
        case 1:
            mensagens.push(`Foram comprados ${qnt} sucos. Valor da compra: R$${6*qnt}`);
            total += 6*qnt
            break;
        case 2:
            mensagens.push(`Foram comprados ${qnt} pães de queijo. Valor da compra: R$${3*qnt}`);
            total += 3*qnt
            break;
        case 3:
            mensagens.push(`Foram comprados ${qnt} pasteis. Valor da compra: R$${7*qnt}`);
            total += 7*qnt
            break;
        case 4:
            mensagens.push(`Foram comprados ${qnt} saladas de frutas. Valor da compra: R$${9*qnt}`);
            total += 9*qnt
            break;
        case 5:
            mensagens.push(`Foram comprados ${qnt} cafés com leite. Valor da compra: R$${3.5*qnt}`);
            total += 3.5*qnt
            break;
        case 6:
            mensagens.push(`Foram comprados ${qnt} cappuccinos. Valor da compra: R$${4.5*qnt}`);
            total += 4.5*qnt
            break;
        case 7:
            mensagens.push(`Foram comprados ${qnt} iogurtes. Valor da compra: R$${6.5*qnt}`);
            total += 6.5*qnt
            break;
        case 8:
            mensagens.push(`Foram comprados ${qnt} águas. Valor da compra: R$${2.5*qnt}`);
            total += 2.5*qnt
            break;
    }

} while (codigo != 0 && qnt != 0)

for (let mensagem of mensagens) {
    p = document.createElement('p');
    div.appendChild(p);
    p.textContent = mensagem;
} 

p = document.createElement('p');
div.appendChild(p);
p.textContent = `Valor total acumulado no caixa: R$${total}`;

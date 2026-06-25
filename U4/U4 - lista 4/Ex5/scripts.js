function atualizar() {
    let div = document.getElementById("resultados");
    limpar(div);

    let frase = document.getElementById("frase").value;
    
    adicionar(`A frase traduzida fica: "${traduzirGiria(frase)}"`, div)
};

function traduzirGiria(frase) {
    return frase
        .replaceAll("que", "q")
        .replaceAll("moleque", "mlk")
        .replaceAll("muito", "mt")
        .replaceAll("demais", "dms")
        .replaceAll("feliz", "felizona")
        .replaceAll("estou", "to")
        .replaceAll("hoje", "hj")
        .replaceAll("tudo", "td")
        .replaceAll("você", "vc")
        .replaceAll("obrigado", "obg")
        .replaceAll("depois", "dps")
        .replaceAll("valeu", "vlw")
        .replaceAll("porque", "pq")
        .replaceAll("beleza", "blz")
        .replaceAll("também", "tbm");
}

function adicionar(mensagem, div) {
    if (mensagem) {
        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = mensagem;
    }
}

function limpar(div) {
    if (div.firstChild !== null) {
        while (div.firstChild !== null) {
                div.removeChild(div.firstChild);
        }
    }
}



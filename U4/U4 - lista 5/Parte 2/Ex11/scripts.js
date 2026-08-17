let select_cidade = document.getElementById("cidade")

select_cidade.addEventListener('change', () => atualizar(select_cidade.value));

function atualizar(cidade) {
    let bairros = [];
    let select_bairro = document.getElementById("bairro");
    switch (cidade) {
        case "garopaba":
            bairros = ["Centro", "Praia da Ferrugem", "Campo D'una", "Ambrósio", "Silveira", "Gamboa"];
        case "imbituba":
            bairros = ["Centro", "Nova Brasília", "Vila Nova", "Ibiraquera", "Penha"];
        case "paulolopes":
            bairros = ["Centro", "Areias", "Bom Retiro", "Morro Agudo", "Ribeirão"];
    };
    for(let i of bairros) {
        let opcao = document.createElement("option");
        opcao.textContent = i;
        select_bairro.appendChild(opcao);
    };
}




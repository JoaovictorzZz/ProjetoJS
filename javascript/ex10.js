function criarMatriz(linhas, colunas) {
    const matriz = [];
    let valor = 1;
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(valor++);
        }
        matriz.push(linha);
    }
    return matriz;
}

function exibirMatriz(matriz) {
    return matriz.map(linha => linha.join(' ')).join('\n');
}

const matriz = criarMatriz(3, 3);
console.log(exibirMatriz(matriz));
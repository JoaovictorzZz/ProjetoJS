function listaDeItens(itens) {
    let resultado = '';
    for (let i = 0; i < itens.length; i++) {
        resultado += `${i + 1}. ${itens[i]}\n`;
    }
    return resultado.trim();
}
console.log(listaDeItens(['Placa mae', 'Processador', 'Placa de video']));
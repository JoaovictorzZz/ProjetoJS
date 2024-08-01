function contagemRegressiva(inicio) {
    let resultado = '';
    for (let i = inicio; i >= 0; i--) {
        resultado += i + ' ';
    }
    return resultado.trim();
}
console.log(contagemRegressiva(10));
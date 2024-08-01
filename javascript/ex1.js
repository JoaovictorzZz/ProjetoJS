
function verificarParOuImpar(num) {
    if (num % 2 === 0) {
        return `${num} é par.`;
    } else {
        return `${num} é ímpar.`;
    }
}
console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(7));

function calculadora(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            return a / b;
        default:
            return 'Operação inválida';
    }
}
console.log(calculadora(10, 5, 'soma'));
console.log(calculadora(10, 5, 'subtracao'));
console.log(calculadora(10, 5, 'multiplicacao'));
console.log(calculadora(10, 5, 'divisao'));
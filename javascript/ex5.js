function li(num, limite) {
    if (num > limite) {
        return `Número ${num} está acima do limite de ${limite}.`;
    } else {
        return `Número ${num} está dentro do limite de ${limite}.`;
    }
}
console.log(li(25, 20));
console.log(li(15, 20));
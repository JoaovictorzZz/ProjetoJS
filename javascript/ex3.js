function classificacao(idade){
    if (idade < 13) {
        return 'Criança';
    } else if (idade >= 13 && idade < 20) {
        return 'Adolescente';
    } else if (idade >= 20 && idade < 60) {
        return 'Adulto';
    } else {
        return 'Idoso';
    }
}
console.log(classificacao(8));
console.log(classificacao(16));
console.log(classificacao(45));
console.log(classificacao(75));
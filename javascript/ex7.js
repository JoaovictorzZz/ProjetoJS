function somaArray(array) {
    return array.reduce((total, num) => total + num, 0);
}
console.log(somaArray([1, 2, 3, 4, 5]));
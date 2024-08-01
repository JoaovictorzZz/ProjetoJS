function maiordeTres(a,b,c){
    if (a > b && a > c) {
        return `${a} é o maior.`;
    } else if (b > a && b > c) {
        return `${b} é o maior.`;
    } else {
        return `${c} é o maior.`;
    }
}
console.log(maiordeTres(10,20,39));
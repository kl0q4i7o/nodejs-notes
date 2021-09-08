function sumar(a, b = 10) {
    return a + b;
}
const sumar2 = (a, b = 10) => a + b;

console.log( sumar(1) );
console.log( sumar2(5));
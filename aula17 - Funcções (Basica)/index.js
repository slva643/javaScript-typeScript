function saudacao(nome) {
    console.log(`Bom dia ${nome}!`)
}
saudacao('Luiz')

/** *******************************************************************************************************************************************/
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz')
console.log(variavel)
/** *******************************************************************************************************************************************/
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2))
console.log(soma(3, 1))
/** *******************************************************************************************************************************************/
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
console.log(soma())
/** *******************************************************************************************************************************************/
const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9));
/** *******************************************************************************************************************************************/
// Arrow Function
const raiz2 = (n) => {
    return n ** 0.5
};
console.log(raiz2(16)); 


const raiz1 = n => {return n ** 0.5};
console.log(raiz1(25));
// Aula 23 - Avaliação de curto circuito (short circuit)

// && -> false && true -> false "O valor mesmo"
// false && true -> retorna o valor do lado esquerdo
console.log('Luiz Otávio' && 'Maria'); // Maria -> true -> true -> true


//  Valores false:
//    **undefined
//    **null
//    **NaN
//    **'' ou "" ou ``
//    **0
//    **false
// Exemplo:
console.log(undefined && true) // undefined
console.log(null && true) // null
console.log(NaN && true)  // NaN
console.log('' && true)  // ''
console.log(0 && true) // 0
console.log(false && true) // false


//    Valores true:
//    **'qualquer outra coisa'
//    **-1
//    **10
//    **true
// Exemplo:
console.log('qualquer outra coisa' && true) // qualquer outra coisa
console.log(-1 && true) // -1
console.log(10 && true) // 10
console.log(true && true) // true



// A string indexada -> É uma string "indexada" geralmente se referece a uma sequencia de caracteres.
// Para encontra uma índece da caractere é usar o nome da variável com cochete []
//               01234567
let umaString = "Um texto";

console.log(umaString[4]); // resposta: e

// Quando for especificado um número que não coresponde uma numeração do índece era aparecer uma mensagem "undefine", ou seja, não era aponta pra local nenhum.
// Isso serve também para numero negativo (-1)
// Posso usar a função -> charAt()

console.log(umaString.charAt(4)); // resposta: e
console.log(umaString.indexOf('texto')) // Para saber em qual posição começa
console.log(umaString.indexOf('o', 3)) // 
console.log(umaString.lastIndexOf('m', 4)) // Ele começa de final pra trás

// Expressão Relular

console.log(umaString.match(/[a-z]/g)); // a match vai encontrar uma arry devido flag -> g
//resposta: [ 'm', 't', 'e', 'x', 't', 'o' ]

console.log(umaString.search(/[a-z]/));

console.log(umaString.replace ('texto','mensagem')); //Quando for preciso substuir usa a função-> replace()
//resposta: Um mensagem



//  A troca de caracteres
umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/, '#'));

//Resposta: O #ato roeu a roupa do rei de roma


console.log(umaString.replace(/r/g, '#'));
//resposta: O #ato #oeu a #oupa do #ei de #oma

// Quando for preciso o tamanho da string usamos o atributo -> lenght

console.log(umaString.length);
//resposta: 35 caracteres

console.log(umaString.toUpperCase()); // Função para 
console.log(umaString.length);
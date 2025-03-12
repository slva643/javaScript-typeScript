let num1 = 9.54578;
let num2 = Math.floor(num1); // Redonda o valor pra baixo, ou seja, 9
let num3 = Math.ceil(num1); // Redonda o valor pra cima, ou seja, 10
let num4 = Math.round(num1) // redonda o valor mais próximo -> 10

console.log(num2,num3,num4);
console.log(Math.max(1,34,66,-55, 100));  //Para encontrar o maior número
console.log(Math.min(1,34,66,-55, 100));  //Para encontrar o menor número

//  Math.random() * (10 - 5) + 5 -> Enquando Math.random() está transformando o número aleatório e então está multiplicando e o valor vai fica entre 10 e menos 5 e começa com valor 5
const aleatorio = Math.random() * (10 - 5) + 5;// Criando um número aleatório, porém não começa com número 1, mas sim com zero.
console.log(aleatorio) 
console.log(Math.floor(Math.random() * 100 + 10)); // Arredondando o número aleatório-
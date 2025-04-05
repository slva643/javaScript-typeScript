// A operação ternária no JavaScript é uma forma concisa de escrever uma estrutura condicional (if/else). A sintaxe básica é a seguinte:
// condição ? valor_se_verdadeiro : valor_se_falso
// Exemplo 1: Verificando se um número é par ou ímpar

const numero = 10;
const resultado = (numero % 2 === 0)? 'Par' : 'Ínpar';
console.log(resultado);

// Exemplo 2: Verificando se um número é positivo ou negativo
const numero2 = 5;
const resultado2 = (numero2 > 0) ? 'Positivo' : 'Negativo';
console.log(resultado2);

// Exemplo 3: Verificando se um número é maior ou menor que 10
const numero3 = 7;
const resultado3 = (numero3 > 10) ? 'Maior que 10' : 'Menor ou igual a 10';
console.log(resultado3);
// Exemplo 4: Verificando se uma pessoa é maior de idade
const idade = 18;
const resultado4 = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(resultado4);
// Exemplo 5: Verificando se uma string está vazia
const str = '';
const resultado5 = (str === '')? 'String vazia': 'String não vazia';
console.log(resultado5);
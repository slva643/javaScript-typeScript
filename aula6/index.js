/***
 *    Variáveis let e var
 * A única diferença entre as duas é o escopo em que essas variáveis existe.
 * Enquando as variáveis declaradas com let têm escopo de bloco, 
 * instrução ou expressão, as variáveis declaradas com var têm escopo
 * global ou escopo de função. 
 * 
 * 
*/

// let nome = 'João'; //String

// console.log(nome,'nasceu em 1984.');
// console.log('Em 2000',nome,'conheceu Maria.');
// console.log(nome,'casou-se com Maria em 2012.');
// console.log('Maria teve 1 filho com',nome,'em 2015.');
// console.log('O folho de',nome,'se chama Eduardo.');

/***
 *  Não podemos criar variáveis compalavras reservadas
 *  Variáveis precisam ter nomes significativos
 *  Não pode começar o mome de uma variável com número
 *  Não podem conter espaços ou traços
 *  Utilizamos camelCase
 *  Case-sensitive
 *  Não podemos redeclarar variáveis com let
 *  Não utilize var, utilize let
*/

let nome; // Declarou a variável
nome = 'João'; // Inicializando a variável
console.log(nome);
nome = ''
/*
  * Aula 37 - For of - Estrutura de repetição
  *
  * O for of é uma estrutura de repetição que itera sobre objetos iteráveis, como arrays, strings, mapas, conjuntos, etc. 
  * Ele permite acessar cada elemento do objeto iterável diretamente, sem precisar usar um índice.
  * Exemplo de uso do for of:
  * 
  *       const array = [1, 2, 3, 4, 5];
  *       for (const item of array) {
  *         console.log(item);
  *       }
  *
  * Neste exemplo, o for of itera sobre cada elemento do array e imprime seu valor no console.
  * O for of é útil quando você precisa percorrer todos os elementos de um objeto iterável sem se preocupar com os índices.
  * 
  * O for of é uma estrutura de repetição que foi introduzida no ECMAScript 2015 (ES6) e é amplamente utilizado em JavaScript moderno.
  * for of - Retorna o valor em si (iteráveis, arrays ou strings).
  * for in - Retorna o índice (ou chave) do elemento (objeto, array ou string).
*/


/*************************** for of Array ***********************************************************************************************************/
const nome = ['Luiz', 'Otávio', 'Henrique'];

for (let i of nome) {
  console.log(i)
}

/*************************** for of Objeto ***********************************************************************************************************/
/*
  * Object.entries() é um método do JavaScript que transforma um 
  * objeto em uma matriz (array) de pares [chave, valor].
*/

const pessoa = {
  nome: 'Vagno',
  sobrenome: 'Silva',
  idade: 32
}

for (let [chave, valor] of Object.entries(pessoa)) {
  console.log(chave, valor)
}



/*************************** forEach() ***********************************************************************************************************/
/*
  * O forEach() é um método de array que executa uma função para cada elemento do array.
  * Ele não retorna um novo array, mas pode ser usado para realizar ações em cada elemento.
  * Exemplo de uso do forEach():
*/

const nomes = ['João', 'Pedro', 'Maria'];
nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
  // Aqui você pode realizar ações com cada valor e índice
})


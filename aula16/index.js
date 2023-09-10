/*
    Um Array no JavaScript é um objeto com um construtor único, 
    com uma sintaxe literal e com um conjunto adicional de 
    propriedades e de métodos herdados de um protótipo de 
    Array. Arrays em JavaScript são usados para armazenar 
    vários valores em uma única variável.

*/

const alunos = ['Luiz', 'Maria', 'João'];  // Funciona mais não é uma boa prática de programação
console.log(alunos);

//  Quando for preciso trocar o objeto é só endicar qual indece e agrecentar o objeto
alunos[0] = 'Eduardo'; 
console.log(alunos);

// Também pode ser agrecentar mais valor dentro da Array. É preciso agrecentar o valor do indece e o valor do objeto
alunos[3] = 'Luiza';
console.log(alunos);

// Também podemos usar o "lenght" para ír adionando a sequencia do indice 
alunos [alunos.length] = 'Fabio';
alunos [alunos.length] = 'Luana';
console.log(alunos);

// Também podemos usar o metodo ".push()" para adionar um elemento e automaticamente acionar o indece.
alunos.push('Antonio');
console.log(alunos);

// Podemos usar o método ".unshift()" para adionar no começo para Array
alunos.unshift('Alice');
console.log(alunos);

// Quando for preciso remover o ultimo elemento usa o método ".pop"
alunos.pop();
console.log(alunos)

// Também podemos guarda dentre de uma variável o elemento que foi removido 
const remover = alunos.pop();
console.log(alunos);
console.log(remover);

// Também podemos remover um elemeto dentro da Array usando método ".shift"
alunos.shift();
console.log(alunos);

// Quando for preciso apagar o elemento, mas sem alterar o índice 
delete alunos[0];
console.log(alunos);
console.log(alunos instanceof Object)
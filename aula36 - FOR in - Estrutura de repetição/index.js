/*
  O for...in** é uma estrutura de repetição do JavaScript usada para percorrer as propriedades (chaves) de um objeto.

  for in -> lê os índeces ou chaves do objeto
*/

/******************************************** for in com Array ***********************************************************************************************/
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
  console.log(frutas[i] );
}

/******************************************** for in com Objeto ***********************************************************************************************/
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  idade: 30
};

for (let chave in pessoa) {
  console.log(chave , pessoa[chave]);
}


/*
 ⚠️ Dica:
  Use for...in apenas com objetos. 
  Para arrays, prefira for, for...of ou forEach, pois for...in
  pode causar comportamentos inesperados com índices e propriedades extras.
*/
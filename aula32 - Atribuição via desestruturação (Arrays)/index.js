// Atribuição via desestruturação (Arrays)

// let a = 'A';
// let b = 'B';
// let c = 'C';

// [a, b, c] = [1, 2, 3];

// console.log(a, b, c); // 1 2 3

//...rest -> O operador rest é usado para agrupar o restante dos elementos em um array

// ...spread -> O operador spread é usado para espalhar os elementos de um array


/************************************************************************** rest *****************************************************************************************************************************/

const numeros = [100, 200, 300, 400, 500,600, 700, 800, 900, 1000];
// const [primerioNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // ...resto é o operador rest, que agrupa o restante dos elementos em um array
// console.log(primerioNumero, segundoNumero, terceiroNumero);
// console.log(resto)





/************************************************************************** Pulo do gato *********************************************************************************************************************/  
// const [um, , três , cinco] = numeros; // O segundo elemento é pulado
// console.log(um, três, cinco); // 100 300 500





/************************************************************************** Array dentro de outro  ***********************************************************************************************************/
// Desestruturação de um array dentro de outro array

//                      0               1                2                3            -> index do primeiro Array
//                  0     1    3     0     1    3    0     1    3      0     1    3    ->  index do segundo Array

const numeros2 = [[100, 200, 300], [400, 500, 600],[700, 800, 900], [1000, 1100, 1200]];
// Quando pricisar acessar 600;
console.log(numeros2[1][2]); // 600

//Quando precisar acessar 500;
const [,[, quinhentos]] = numeros2; 
console.log(quinhentos); // 500

// Cada vírgula representa um elemento que não será atribuído a nenhuma variável
// O primeiro colchete representa o primeiro array e o segundo colchete representa o segundo array

const [lista1, lista2, lista3, lista4] = numeros2; // Desestruturação do array
console.log(lista1); // [100, 200, 300]


/************************************************************************** Desestruturação de objetos ***********************************************************************************************************/
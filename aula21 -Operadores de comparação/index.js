/**
 * Operadores de comparação
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (valor) **********
 * === igualdade restrita (valor e tipo)
 * != diferente (valor) ********
 * !== diferente estrito (valor e tipo)
*/

const comp = 10 > 5;
console.log(comp);

/*************************************************************************************************************************************** */
const num1 = 10;
const num2 = '10';
const comp2 = num1 == num2;
console.log(comp2);
/**************************************************************************************************************************************** */
const num3 = 10;
const num4 = '10';
const comp3 = num3 === num4;
console.log(comp3);
/**************************************************************************************************************************************** */
const num5 = 10;
const num6 = '10';
const comp4 = num5 != num6;
console.log(comp4);
/**************************************************************************************************************************************** */
const num7 = 10;
const num8 = '10';
const comp5 = num7 !== num8;
console.log(comp5);
/**************************************************************************************************************************************** */
let usuario = 'Luiz';
let senha = '123456';
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
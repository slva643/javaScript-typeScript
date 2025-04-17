/**
 * Luis Otávio Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.925925925924
 * Luiz Otávio nasceu em 1980
*/

const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indeceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2019 - idade
console.log(` ${nome} ${sobrenome} tem ${idade} peso ${peso}kg\n tem ${alturaEmM} de altura e seu IMC é de ${indeceMassaCorporal.toFixed(2)} \n ${nome} nasceu ${anoNascimento}. `);

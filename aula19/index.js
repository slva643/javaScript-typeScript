/*
    Primitivos (imutáveis) - string, number, boolean, undefined,
    null (bigint, symbol) -valor

    No primitivo quando atribuimos um volor na outra variável estamos copiamdo o valor, mas no momento de alterar um volor só vai ser alterado um volor.
*/

let a = 'A';
let b = a; // Copiado 
a = 'C'
console.log(a, b)

/*
    Referência (mutável) - array, object, function.

    Já na referência ele vai um ponte de conecção na menória
*/

let c = [1,2,3];
let d = c;
d.push(4); // atribuiu
c.pop(); // restirou
console.log(c, d);

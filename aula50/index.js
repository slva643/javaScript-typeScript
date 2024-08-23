// Atribuição via desertruturação(Arrays)

const numero = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [primereiroNumero, segundoNumero, ...resto] = numero;
console.log(primereiroNumero, segundoNumero);
console.log(resto)
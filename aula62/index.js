// Escreva um função que recebe um número e 
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número NÃO é divisível por 3 e por 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function numero(x) {
  for (let x = 0; x < 100; x++) {
    if (isNaN(x / 3)) {
      return 'Fizz';
    } else if (isNaN(x / 5)) {
      return 'Buzz';
    }
  }
}

console.log(numero())
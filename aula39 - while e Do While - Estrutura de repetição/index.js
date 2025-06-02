/*                    While e Do While - Estrutura de repetição
 *
 * 📘 Conceito de while e do while
 *      - As estruturas **while** e **do while** são estruturas de repetição (ou laços de repetição) 
 *      utilizadas para executar um bloco de código várias vezes, desde que uma condição lógica seja verdadeira.
 * 
 *    A diferença entre elas é que o **while** verifica a condição antes de executar o bloco de código,
 *    enquanto o **do while** executa o bloco de código pelo menos uma vez antes de verificar a condição.
 * 
 *    
 * 🔁 while – Conceito
 *   A estrutura **while** executa um bloco de código enquanto uma condição for verdadeira.
 *     -> A condição é testada antes da execução;
 *     -> Se a condição for falsa, o bloco de código não será executado;
 * 
 * 
 * 🔁 do while – Conceito
 *   A estrutura **do while** executa um bloco de código pelo menos uma vez e, em seguida, continua a executá-lo 
 *   enquanto a condição for verdadeira.
 *    -> A condição é testada após a execução do bloco de código;
 *    -> O bloco de código sempre é executado pelo menos uma vez;
*/


// 1º Exmplo: ** while **
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }


/*
 * 🎲 Math.random()
 *     O método Math.random() em JavaScript é usado para gerar números aleatórios. 
 *     Ele retorna um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).
*/

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r) // A Funcão Math.floor() -> Serve para arredondar um número para baixo até o inteiro mais próximo.
};

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) { // A codição while so vai parar quando for 'false'.
  rand = random(min, max);
  console.log(rand);
}

console.log('##############################################')

do {
  console.log(rand)
}while(rand !== 10);

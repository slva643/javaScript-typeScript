/*
  setTimeout e setInterval
  setTimeout e setInterval são funções nativas do JavaScript que permitem executar 
  código de forma assíncrona após um determinado período de tempo. Elas são úteis 
  para tarefas como animações, atualizações periódicas ou atrasos em execuções. 

  SetTimeout
    O que é?
      Executa um função ou avalia uma expressão após um atraso especificado(em millissegundos).
        - setTimeout(função, atraso, argu1, argu2, ....)
        Exemplo:
          setTimeout(() => {
            console.log('Executado após 2 segundos');
          }, 2000);

  setInterval
    o que é?
      Executa uma função ou avaia uma expressão repetidamente em intervalos fixos(em millissegundos).
        - setInterval(função, intervalo, arg1, arg2,...);
        Exemplo:

          const intervalId = setInterval(() => {
            console.log('Executado a cada 1 segundo');
          }, 1000);

          // Para parar após 5 segundos

        setTimeout(() => {
          clearInterval(intervalId);
        }, 5000);


  function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
      hour12: false // Esse formato é de 24 horas e não de 12 horas. Para ser de 12 horas, basta colocar true.
    });
  }

  // setInterval executa a cada intervalo de tempo determinado.
  const time = setInterval(function(){ // funcção aninimação é quando a função não tem nome e é executada no momento da sua criação. 
    console.log(mostraHora());
  }, 1000); // a cada 1 segundo

 
  // setTimeout executa uma vez após o tempo determinado.
  setTimeout(function(){
    clearInterval(time); // clearInterval é usado para parar o setInterval.
 
  }, 1000); // para o setInterval após 5 segundos.

*/

/********************************************* Exercício 01***************************************************** */

/**
 *  ➡️ Usar setTimeout() para exibir uma mensagem depois de 3 segundos.
 * 
 *     Regras:
 *       Mostrar "Iniciando contagem..." logo no início.
 *       Depois de 3 segundos, mostrar "Tempo esgotado!" no console.
*/

// console.log("Iniciando contagem...")
// setTimeout(function () {
//   console.log("Tempo esgotado!")
// }, 3000)


/********************************************* Exercício 02***************************************************** */

/**
 * 👉 Bora pro Desafio 2 (agora com setInterval):
 * 
 *     Crie um código que:
 *    Mostre a mensagem "Contando: X", onde X começa em 1 e vai aumentando a cada 1 segundo.
 *    Quando chegar em 5, pare a contagem.
*/

/********************************************** Exercício 01***************************************************** */
// let contador = 1; // Começa em 1

// const intervalo = setInterval(function() { // Função anônima executada a cada 1 segundo, que equivale a 1000 milissegundos
//   console.log(`Contador: ${contador}`); // Exibe o valor atual do contador

//   if(contador === 5) { // Verifica se o contador chegou a 5
//     clearInterval(intervalo) // Para o intervalo
//   }
//   contador++ // Incrementa o contador
// }, 1000); // Intervalo de 1 segundo (1000 milissegundos)


/********************************************** Exercício 02***************************************************** */

// let contador2 = 1; // Começa em 1

// const intervalo2 = setInterval(function(){
//   console.log(`contador: ${contador2}`);

//   if(contador2 === 10) {
//     clearInterval(intervalo2)
//   }
//   contador2++
// }, 500); // Intervalo de 0.5 segundos (500 milissegundos)

/********************************************** Exercício 03***************************************************** */
/**
 *  ➡️ Crie um código que:
 *     Mostre a mensagem "Contando: X", onde X começa em 10 e vai diminuindo a cada 1 segundo.
 *     Quando chegar em 1, pare a contagem e mostre "Contagem finalizada!".
*/
let contador3 = 10; // Começa em 10
const intervalo3 = setInterval(function(){
  console.log(`contador: ${contador3}`);

  if(contador3 === 1) {
    clearInterval(intervalo3)
    console.log("Contagem finalizada!")
  }
  contador3--
}, 1000); // Intervalo de 1 segundo (1000 milissegundos)
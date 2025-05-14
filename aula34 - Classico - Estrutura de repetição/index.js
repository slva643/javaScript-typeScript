/* 
  Estruturas de Repetição - Aula 34

         Clássico - Estrutura de Repetição

   até que uma condição seja satisfeita. No estilo clássico, usamos comandos como for, while e do...while para controlar 
   o número de repetições. Essas estruturas são fundamentais na programação para automatizar tarefas repetitivas e tornar 
   o código mais eficiente e enxuto.
   Estruturas de repetição, também chamadas de loops, são usadas para executar um bloco de código várias vezes, 
  

   Essa estrutura é útil quando você não sabe quantas vezes o loop deve ser executado, mas tem uma condição que determina quando ele deve para   
   console.log('linha 0');
   console.log('linha 1');
   console.log('linha 2');
   console.log('linha 3'); 
   console.log('linha 4');
   console.log('linha 5'   


   Exemplo de estrutura de repetição clássica com for.

   Primereira parte - Criação da variável de controle.
           for (let i=0;)

   Segunda parte - Condição de parada.
           for (let i=0; i<5;)

   Terceira parte - Incremento ou decremento da variável de controle.
           for (let i=0; i<5; i++)

   Quarta parte - Bloco de código a ser executado.
           console.log(`linha ${i}`);



   for (let i = 0; i < 5; i++) {
       console.log(`linha ${i}`);
   }
   
   // Quando for preciso acrecentar de 10 em 10
   for (let i = 0; i < 100; i += 10) {
       console.log(`linha ${i}`);
   }
   
   // Enverter o loop
   for (let i = 40; i > 0; i--) {
       console.log(`linha ${i}`);
   }




   const par = i % 2 === 0 ? 'Par' : 'Ímpar';
   console.log(`Número ${i} é ${par}`);
   for (let i = 0; i < 21; i++) {
   }

   
*/
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
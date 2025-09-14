/* 
  * Aula 40 -> Break e Continue.

  * ✅ Serve para:
  *   Break: Interrompe o loop.
  * 
  * ⏭️ continue
  *   Continue: Pula a iteração atual e continua com a próxima.
  * 
  * 🧠 Resumo:
  *     Comando  |	    O que faz
  *     ------------------------------------------------
  *     break	   |  Encerra o loop imediatamente
  *     continue |	Pula a iteração atual e continua o loop
  * 
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
  if (numero === 2 || numeros === 5) {
    console.log(`O número ${numeros} foi pulado.`);
    continue; // Pula a iteração atual
  }
  console.log('############################################')
  if (numero === 8) {
    console.log(`Número ${numero} foi interrompido.`);
    break; // Interrompe o loop
  }

  console.log(`O número ${numeros} foi impresso.`);
}


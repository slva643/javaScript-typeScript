// try {
//   // É ezecuta quando não há erros
// } catch (error) {
//   // É executada quando há erros
// }finally {
// // Sempre
// }

function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if(!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-Br', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

const hora = retonaHora();
console.log(hora)
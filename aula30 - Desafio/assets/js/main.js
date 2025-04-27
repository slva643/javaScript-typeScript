/*****************  Com varias linha de cógido ********************************************************************************************************************************************************************/

// const h1 = document.querySelector(".container h1")
// const data = new Date();
// const diaSema = getDiaSemanaTexto(data.getDay());
// const dia = zeroAEsquerda(data.getDate());
// const mes = getMesSemanaTexto(data.getMonth() + 1);
// const ano = data.getFullYear();
// const hora = data.getHours()
// const minuto = zeroAEsquerda(data.getMinutes())


// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'Segunda - Feira';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'Terça - Feira';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'Quarta - Feira';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'Quinta - Feira';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'Sexta - Feira';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'Sábado';
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = '';
//       return diaSemanaTexto;
//   }
// }

// function getMesSemanaTexto(meses) {
//   let meseTexto;

//   switch (meses) {
//     case 0:
//       meseTexto = 'Janeiro';
//       return meseTexto;
//     case 1:
//       meseTexto = 'Fevereiro'
//       return meseTexto;
//     case 2:
//       meseTexto = 'Março'
//       return meseTexto;
//     case 3:
//       meseTexto = 'Maio';
//       return meseTexto;
//     case 4:
//       meseTexto = 'Abril'
//       return meseTexto;
//     case 5:
//       meseTexto = 'Junio';
//       return meseTexto;
//     case 6:
//       meseTexto = 'Julho';
//       return meseTexto;
//     case 7:
//       meseTexto = 'Agosto';
//       return meseTexto;
//     case 8:
//       meseTexto = 'Setembro';
//       return meseTexto;
//     case 9:
//       meseTexto = 'Outubro';
//       return meseTexto;
//     case 10:
//       meseTexto = 'Novembro';
//       return meseTexto;
//     case 11:
//       meseTexto = 'Dezembro';
//       return meseTexto;
//   }
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`
// }

// h1.innerHTML = `${diaSema}, ${dia} ${mes} de ${ano} ${hora}:${minuto}`

/******************************** Pouca linha de código *************************************************************************************************************************************************************** */


// const h1 = document.querySelector(".container h1")
// setInterval(() => {
//   const data = new Date()
//   const opcao = {
//     dateStyle: 'full',
//     timeStyle: 'medium'
//   };

//   h1.innerHTML = data.toLocaleString('pt-BR', opcao);
// }, 1000)

/******************************** Mais Pouca linha de código ********************************************************************************************************************************************************** */
/**  
 * Explicação:
 * charAt(0) pega a primeira letra.
 * toUpperCase() transforma ela em maiúscula.
 * slice(1) pega o resto da frase (sem mexer).   
**/


const h1 = document.querySelector(".container h1")
setInterval(() => {
  const data = new Date()
  let dataHora = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'medium'});

  dataHora = dataHora.charAt(0).toUpperCase() + dataHora.slice(1)
  
  h1.innerHTML = dataHora
}, 1000)

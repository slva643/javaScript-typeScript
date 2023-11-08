//https://developer.mozilla.org/pt-BR/docs/web/JavaScript/Refernce/Gobal_Objectas/Date



//***************************************************** new Date(valor) ******************************************************************** */
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000; 
const dati = new Date(0 + tresHoras + umDia); 
console.log(dati.toString());



//***************************************************** new Date(ano, mês, dias, horas, menutos, segungo, milisegungo) ********************** */
const data = new Date(2019, 3, 20, 15, 14, 27, 500); 
console.log(data.toString());



//***************************************************** new Date(dataString) *************************************************************** */
const date = new Date('2019-04-15 20:20:59');
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth() + 1); // No javaScript o mês começa no [0], então precisamos somar [+ 1]vpara colocar o mês atual..
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Minutos', date.getMinutes());
console.log('Segundo', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDay()); // No JavaScript a semana começa [0 - Domingo] e termina [6 - Sábado].
console.log(date.toString());
console.log(Date.now()) // Milessimo de Segundo.

//***************************************************** Formatar uma data ******************************************************************* */
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data1.getDate());
    const mes = zeroAEsquerda(data1.getMonth() + 1);
    const ano = zeroAEsquerda(data1.getFullYear());
    const hora = zeroAEsquerda(data1.getHours());
    const minuto =zeroAEsquerda( data1.getMinutes());
    const segundo = zeroAEsquerda(data1.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data1 = new Date();
const dataBasil = formataData(data);
console.log(dataBasil);
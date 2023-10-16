//?
// const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 100) {
//     console.log('Unsuário VIP');
// } else {
//     console.log('Usuário normal');
// }


// *********************************************************************************************************************//


/** Operação ternário **/

// (condicao) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP': 'Usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

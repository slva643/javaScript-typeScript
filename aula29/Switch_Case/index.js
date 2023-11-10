const data = new Date();
const diaSema = data.getDay();
let diaSemanaTexto;

/********************** Condicional if else ******************************** */
//Não recomendado
if (diaSema === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSema == 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSema == 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSema == 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSema == 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSema == 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSema == 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = "";
}

console.log(diaSemanaTexto);

/********************** Condicional Switch/Case ******************************** */
function getDiaSemanaTexto() {
    switch (diaSema) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
}
console.log(diaSemanaTexto);
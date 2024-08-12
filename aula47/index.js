function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formatorData(data) {
    const ano = data.getFullYear();
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    const semana = diaSemana(data.getDay());

    return `${semana}, ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

function diaSemana(sema) {
    const semana = ['Domigo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    switch (sema) {
        case 0:
            return semana[0];
        case 1:
            return semana[1];
        case 2:
            return semana[2];
        case 3:
            return semana[3];
        case 4:
            return semana[4];
        case 4:
            return semana[4];
        case 5:
            return semana[5];
        case 6:
            return semana[6];
        default:
            return ""
    }

};

const data = new Date();
const dataBrasil = formatorData(data);
console.log(dataBrasil)
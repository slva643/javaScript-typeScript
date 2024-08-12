function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatorData(data) {

    const ano = data.getFullYear();
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    const mese = diaMes(data.getMonth())
    const semana = diaSemana(data.getDay())

    return `${semana}, ${dia} de ${mese} de ${ano} ${hora}:${min}:${seg}`;


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

}

function diaMes(mese) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    switch (mese) {
        case 0:
            return meses[0];
        case 1:
            return meses[1];
        case 2:
            return meses[2];
        case 3:
            return meses[3];
        case 4:
            return meses[4];
        case 4:
            return meses[4];
        case 5:
            return meses[5];
        case 6:
            return meses[6];
        case 7:
            return meses[7];
        case 8:
            return meses[8];
        case 9:
            return meses[9];
        case 10:
            return meses[10];
        case 11:
            return meses[11];
        default:
            return ""
    }

}

function atualizarRelogio(){
    const data = new Date();
    const dataBrasil = formatorData(data);
    const formato = document.querySelector('h1');
    formato.innerHTML = dataBrasil
}

setInterval(atualizarRelogio, 1000);


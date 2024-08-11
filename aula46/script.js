function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const mes = zeroAEsquerda(data.getMonth()+1);
    const dia = zeroAEsquerda(data.getDay());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora =zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());


    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil.toString());
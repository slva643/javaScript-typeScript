
function criaHoraDoSegundo(segundos) {   //função para criar a hora a partir dos segundos
  const data = new Date(segundos * 1000); //multiplica por 1000 para converter em milissegundos
  return data.toLocaleTimeString('pt-br', { //formata a hora para o formato brasileiro
    hour12: false, //formato 24 horas
    timeZone: 'GMT' //define o fuso horário como GMT
  })
}




//seleção dos elementos do DOM

const relogio = document.querySelector(".relogio"); //seleciona o elemento do relógio
const iniciar = document.querySelector(".iniciar"); //seleciona o botão iniciar
const pausar = document.querySelector(".pausar"); //seleciona o botão pausar
const zerar = document.querySelector(".zerar"); //seleciona o botão zerar

let segundos = 0;
let timer; //variável para armazenar o setInterval






// função para iniciar o relógio

iniciar.addEventListener('click', function (e) { //função anônima
  clearInterval(timer); //limpa o timer para não acumular
  timer = setInterval(function () { //função anônima
    relogio.innerHTML = criaHoraDoSegundo(segundos); //atualiza o relógio
    segundos++; //incrementa os segundos
  })
});


pausar.addEventListener('click', function (e) { //função anônima
  clearTimeout(timer)  //limpa o timer para não acumular

})

zerar.addEventListener('click', function (e) { //função anônima
  clearInterval(timer); //limpa o timer para não acumular
  relogio.innerHTML = "00:00:00"; //reseta o relógio
  segundos = 0; //reseta os segundos
})

//ativar o botão iniciar com a tecla "s"
document.addEventListener('keydown', function (e) { //função anônima
  if (e.key === 's') { //se a tecla pressionada for "s"
    iniciar.click(); //clica no botão iniciar
  }
})

//ativar o botão pausar com a tecla "p"
document.addEventListener('keydown', function (e) { //função anônima
  if (e.key === 'p') {//se a tecla pressionada for "p"
    pausar.click(); //clica no botão pausar
  }
})

//ativar o botão zerar com a tecla "r"
document.addEventListener('keydown', function (e) { //função anônima
  if (e.key === 'z') { //se a tecla pressionada for "z"
    zerar.click(); //clica no botão zerar
  }
})
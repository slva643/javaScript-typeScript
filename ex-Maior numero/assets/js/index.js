// Escreva uma função que recebe 2 números e retorne o maior deles
function NumeroMaior() {
    const formulario = document.querySelector('#container');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const primeiroNumero = document.querySelector('#primeriroNumero');
        const segundoNumero = document.querySelector('#segundoNumero');

        const max = Number(primeiroNumero.value);
        const min = Number(segundoNumero.value);

        const numeroAleatorio = random(min, max)
    })

    function random(min, max) {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r)
    }

    const rand = random(min,max);
    let maiorNumero = ''
    while(rand !== Math.max(rand) ) {
        console.log(rand)
    }



}



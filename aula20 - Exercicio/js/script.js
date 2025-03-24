function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
       
        console.log(pessoas);


       resultado.innerHTML += `<p>Seu nome é ${nome.value} ${sobrenome.value} você tem um peso de ${peso.value}kg e altura ${altura.value}m</p>`
    }
    form.addEventListener('submit', recebeEventoForm);
    
}

meuEscopo();
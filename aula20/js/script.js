function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
       
       pessoa.push(nome.value, sobrenome.value, peso.value, altura.value);
       console.log(pessoa)
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
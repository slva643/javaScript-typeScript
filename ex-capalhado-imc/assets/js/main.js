// Caputar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log("Evento previnito")
    setResultado ('Ola mundo')
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrado-resultado')
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p)
}


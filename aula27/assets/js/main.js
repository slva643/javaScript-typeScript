const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  console.log('Estamos no caminho certo')
  setResultado('Estou aqui')
})

function setResultado(msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = "";
  const p = document.createElement('p');
  resultado = document.appendChild(p)
  p.innerHTML = 'Holla'
  resultado.innerHTML = `<p>${msg}</p>`
}
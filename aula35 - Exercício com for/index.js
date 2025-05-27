

const elementos = [
  { tag: 'p', texto: 'Frase 1' }, // 0
  { tag: 'div', texto: 'Frase 2' }, // 1
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 3' },
];

/******************************************* Uma forma de resolver *******************************************************************************************************/
// const inserir = document.querySelector('.container');

// elementos.forEach(elemento => {
//   const novotag = document.createElement(elemento.tag)
//   novotag.textContent = elemento.texto
//   inserir.appendChild(novotag)
// })

/******************************************* Outra forma de resolver *******************************************************************************************************/


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada);
}


container.appendChild(div);


// elementos.forEach(elemento => {
//   const novotag = document.createElement(elemento.tag);
//   novotag.textContent = elemento.texto;
//   inserir.appendChild(novotag)
// })
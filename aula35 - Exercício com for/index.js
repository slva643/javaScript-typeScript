

const elementos = [
  {tag: 'p', texto: 'Frase 1'}, // 0
  {tag: 'div', texto: 'Frase 2'}, // 1
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 3'},
];


const inserir = document.querySelector('.container');

elementos.forEach(elemento => {
  const novotag = document.createElement(elemento.tag)
  novotag.textContent = elemento.texto
  inserir.appendChild(novotag)
})



















// elementos.forEach(elemento => {
//   const novotag = document.createElement(elemento.tag);
//   novotag.textContent = elemento.texto;
//   inserir.appendChild(novotag)
// })
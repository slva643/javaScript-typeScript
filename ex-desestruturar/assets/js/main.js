const element = [
    {tag: 'p', texto: 'Gosto muito de você'},
    {tag: 'p', texto: 'Mas será que voce gosta de mim'},
    {tag: 'p', texto: 'Não sei!'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < element.length; i++) {
    const {tag, texto} = element[i];
    const criandoTag = document.createElement(tag);
    const criandoTexto = document.createTextNode(texto);

    criandoTag.appendChild(criandoTexto);
    div.appendChild(criandoTag)
}; 

container.appendChild(div)

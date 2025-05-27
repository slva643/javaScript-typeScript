/*
  DOM (Document Object Model)
  O DOM é uma representação em forma de árvore de todos os elementos de uma página HTML.
  Cada parte da página (como tags, atributos e textos) vira um nó na árvore. O JavaScript 
  usa essa estrutura para acessar e modificar os elementos da página dinamicamente.


  Document
└── html
    ├── head
    └── body
        ├── h1
        │   └── "Minha Página"
        └── p
            └── "Bem-vindo!
  
  Document é o nó raiz.

  Cada elemento HTML é um nó da árvore.

  Os textos dentro das tags também são nós.
*/

function mundarMensagem() {
  document.getElementById("mensagem").innerHTML = "Você clicou no texto"
}


/**
 * O que acontece:
 * 
 * Quando o botão é clicado, a função mudarMensagem() é chamada.
 * Essa função acessa o elemento <p> com o id="mensagem" e altera seu texto.
 * Isso é o DOM em ação: o JavaScript manipulando elementos HTML da página.
 */
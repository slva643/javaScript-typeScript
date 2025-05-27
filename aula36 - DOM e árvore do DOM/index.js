/*
  uma página web como uma árvore de objetos. Com ele, o JavaScript pode acessar, modificar e 
  O DOM (Document Object Model) no JavaScript é uma interface que representa a estrutura de 
  manipular dinamicamente o conteúdo, a estrutura e o estilo dos elementos HTML. Isso permite 
  criar páginas interativas e dinâmicas.

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
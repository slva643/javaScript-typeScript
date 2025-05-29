                                    

/*
  *                                             NodeList(Brower)                 
  *
  * 📚 Descrição: NodeList no JavaScript (Browser)
  *   No JavaScript, NodeList é uma coleção semelhante a um array de nós (nodes) retornada por métodos como:
  * 
  *     - document.querySelectorAll()
  *
  *     - document.childNodes
  *
  *     - Node.childNodes
  *
  *   Ela representa uma lista de nós do DOM, ou seja, elementos HTML, textos, comentários, etc., dependendo do contexto.
  *   const paragrafos = document.querySelector('.paragrafos');
  * 
  * 🔍 Características principais:
  * 
  *   ✅ Indexada: você pode acessar elementos com nodelist[0], nodelist[1], etc.
  *
  *   ✅ Pode ser percorrida com:
  *
  *     - for
  *
  *     - for...of
  *
  *     - forEach() (disponível nas NodeLists modernas)
  * 
  * ⚠️ Não é um array de verdade:
  *    Não tem todos os métodos de array, como map(), filter() ou reduce().
  *    
  * 🧠 Importante:
  *   A maioria das NodeLists é estática, ou seja, não muda automaticamente se o DOM for alterado depois da coleta.
  *   Exemplo: querySelectorAll() retorna uma NodeList estática.
  *   Já métodos como getElementsByTagName() retornam coleções dinâmicas (HTMLCollection), que mudam automaticamente com o DOM.
  * 
  * ✅ Quando usar?
  *    Use NodeList quando quiser manipular vários elementos do DOM de uma vez, especialmente com querySelectorAll() 
  *    para selecionar por classe, tag ou atributo.
  *    Se precisar de métodos mais avançados de array, converta a NodeList para array.
  * 
*/  


const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const h1 = document.querySelector('h1');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

h1.style.textAlign = 'center'

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.padding = "10px";
  p.style.color = "white";
  p.style.borderRadius = "10px";
};




const verdadeira = true;

// mais diferenças entre var e let/const
// var é uma palavra reservada do JavaScript, let e const também são


// let tem escopo de bloco {...bloco...}
// var tem escopo de função {...função...} ou global {...global...}
// var é global, let não é global
// var

// const é uma palavra reservada do JavaScript.
// let e const são palavras reservadas do JavaScript, mas não são variáveis
// let e const são variáveis que podem ser alteradas, mas não são variáveis globais é hoisted, let não é hoisted
// var é redeclarado, let não é redeclarado

let nome = 'Luiz';
var nome1 = 'Luiz';

if (verdadeira) {
  let nome = 'Otavio';
  console.log(nome,nome1)

  if (verdadeira) {
    console.log('ok')
  }
}

// Atribuição via desestruturação (Objetos)

// É uma forma de extrair valores de um objeto e atribuí-los a variáveis individuais.
// A sintaxe é simples e intuitiva, permitindo que você extraia valores de um objeto de maneira concisa.
// A desestruturação de objetos é uma maneira de extrair valores de um objeto e atribuí-los a variáveis individuais.

// 1. Usando ponto (.) Você usa quando o nome da propriedade é conhecido, é uma palavra única e válida como identificador

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,
  endereco: {
    rua: 'Av. Brasil',
    numero: 123,
    cidade: 'São Paulo',
  },
};

// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;



// Atribuição via desestruturação

/*
 const {nome: n = '', sobrenome} = pessoa; // Atribuição via desestruturação
 console.log(n, sobrenome)
*/

// const {nome = '', sobrenome} = pessoa; Quando não existe o valor padrão, o valor padrão é undefined. Então pode colocar um valor padrão ou deixar vazio.
//console.log(nome, sobrenome);  'Luiz'





// 2. Usando colchetes ([]) Você usa quando: O nome da propriedade está numa variável. O nome da propriedade tem espaços, 
// hífens, ou caracteres especiais. O nome da propriedade começa com número.

const nomePropriedade = 'sobrenome';
const sobrenome2 = pessoa[nomePropriedade]; // Atribuição via desestruturação
const sobrenome3 = pessoa['sobrenome']; // Atribuição via desestruturação
const sobrenome4 = pessoa['sobrenome com espaço']; // Atribuição via desestruturação


// Quando quiser pegar um Objeto que está dentro de outro Objeto
const {endereco: {rua, numero, cidade}} = pessoa
console.log(rua, numero, cidade);

// Posso usar o rest (...resto)
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome,sobrenome, resto)


/*Resumo prático:
   Situação	                             Usar .	    Usar []

   Nome simples e fixo	                  ✅	       ✅
   Nome com espaços ou caracteres	        ❌	       ✅
   Nome dinâmico (em variável)	          ❌	       ✅
   Nome começa com número	                ❌	       ✅
   Nome com hífen	                        ❌	       ✅
   Nome com ponto	                        ❌	       ✅
   Nome com aspas	                        ❌	       ✅
   Nome com aspas simples	                ❌	       ✅
   Nome com aspas duplas	                ❌	       ✅
   Nome com aspas triplas	                ❌	       ✅
   Nome com aspas simples e duplas	      ❌	       ✅
   Nome com aspas simples e triplas	      ❌	       ✅
   Nome com aspas duplas e triplas	      ❌	       ✅
*/
/*
  Tratando e lançando erros (try, catch, finally)
    O try executa um bloco de código e
    o catch captura o erro e podemos tratar ele
    o finally sempre será executado no final do try ou do catch.

  Afinalidade desse recurso é tratar erros
    para que o código não quebre
    e o usuário receba uma mensagem amigável
    em vez de um monte de código que ele não entende.

  try
    O bloco try ele significa tentar
    ou seja, tente executar esse bloco de código.

  catch (err)
    O bloco catch ele significa capturar
    ou seja, se der algum erro no bloco try
    capture esse erro e me dê uma variável err
    para que eu possa tratar esse erro.

  finally
    O bloco finally ele significa finalmente
    ou seja, independente do resultado do try
    ou do catch, execute esse bloco de código.

  Observação:
    Não é interessante mostrar o erro para o usuário
    pois o erro pode ter informações sensíveis
    que não devem ser expostas.
    O ideal é logar esse erro em um arquivo
    e mostrar uma mensagem amigável para o usuário.
*/

/********************************************* Exemplo 1 - try, catch e finally *************************************/

/*

  try {
    console.log(não existo); // Não foi declarado
  } catch (err) {
    console.log('não existo não existe');
    console.log(err);
  }
*/


/********************************************* Exemplo 2 - try, catch e finally *************************************/

/*
  function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') { // typeof faz uma verificação do tipo da variável 
    // (string, number, boolean, object, function, undefined)
      throw new Error('x e y precisam ser números'); // theow é usado para lançar um erro
   }

   //return x + y;
  }

  try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
  } catch (error) {
    console.log(error);
   console.log('Alguma coisa mais amigável para o usuário');
  }
*/

/*********************************************** Exemplo 3 - try, catch e finally **************************************/

// function validaNumero(numero) {
//   try {
//     if (numero < 0) {
//       throw new Error("Número negativo não permitido")
//     }
//     return 'Número válido'
//   } catch (error) {
//     return error.message;
//   }

// }

// console.log(validaNumero(-10));



// function validaNumero(numero) {
//   try {
//     if (numero < 0) {
//       throw new Error("Número negativo não permitido");
//     }
//     return "\n=== " + "Número válido" + "===\n";

//   } catch (error) {
//     return "\n=== " + error.message + " ===\n";
//   }
// }

// console.log("Resultado 01", validaNumero(10));
// console.log("Resultado 02", validaNumero(-10));

/*********************************************** Exemplo 3 - try, catch e finally **************************************/

/* 
  🎯 Desafio 2: JSON seguro

    Crie uma função parseJSON que:

    Receba uma string como parâmetro.

    Tente converter a string em objeto usando JSON.parse.

    Se a conversão falhar (string inválida), capture o erro com catch e retorne "JSON inválido".

    Se a conversão for bem-sucedida, retorne o objeto convertido.
*/

// function parseJSON(string) {
//   try {
//     const objeto = JSON.parse(string);
//     return objeto;
//   } catch (error) {
//     return "JSON inválido";
//   }
// }

// console.log(parseJSON('{"nome" : "Vagno"}'));
// console.log(parseJSON('{nome": vagno}'));


/*********************************************** Exemplo 4 - try, catch e finally **************************************/

/*
  Exercício:

  Crie uma função chamada somaSegura que:
  Receba dois parâmetros.
  Verifique se os dois são números usando typeof.
  Se não forem números, lance um erro com throw new Error("Parâmetros inválidos").
  Use try/catch para capturar o erro e retornar a mensagem de erro.
  Se forem números, retorne a soma.
*/

// function somaSegura(x, y) {

//   if (typeof x !== 'number' || typeof y !==  'number') {
//     throw new Error("Paramentro iválido");
//   }
//   return x + y;
// }

// try {
//   // console.log(somaSegura(5, 7));
//   console.log(somaSegura(5, "a"));

// } catch (error) {
//   console.log(error.message);
// }


/*********************************************** Exemplo 5 - try, catch e finally **************************************/

/*
  Exercício – Validação de String

  Crie uma função chamada validaNome que:

  Receba um parâmetro nome.

  Verifique se o tipo é string usando typeof.

  Se não for string, lance um erro com throw new Error("Nome inválido").

  Se for string, retorne a mensagem: "Nome válido: " + nome.

  Use try/catch para capturar e mostrar a mensagem de erro quando o dado não for string.
*/

function validaNome (nome) {
  if(typeof nome !== 'string') {
    throw new Error('Nome iválido!');
  }
  return 'Nome válido: '+ nome;
}

try {
  console.log(validaNome('Maria'));
  console.log(validaNome(123));
} catch (error) {
  console.log(error.message)
}
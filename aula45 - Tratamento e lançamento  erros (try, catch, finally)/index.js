/************************ Tatamento de erros com try, catch e finally **********************/

// try -> tentar
// catch -> capturar
// finally -> finalmente


/*
  try {
    // É executado quando não há erros
    console.log('Abrir arquivo');
    console.log('Manipular arquivo');
    // console.log(a);

   // Posso criar outro try dentro do try
    try {
     console.log(b);
    } catch (e) {
      console.log('Erro na segunda parte do try');
      // Também posso criar outro finally
    } finally {
     console.log('Finalmente da segunda parte do try');
    }

  } catch (e) {
    // É executado quando há erros
    console.log('Tratando o erro');
    console.log('Mensagem do erro: ' + e.message);
  } finally {
    // Sempre é executado
    console.log('Fechar arquivo');
  }



  function retornaHora(data) {
    if (data && !(data instanceof Date)) { // instanceof verifica se o objeto é do tipo Date
      throw new TypeError('Esperando instância de Date.'); // TypeError é um tipo de erro padrão do JS, mas posso criar o meu próprio erro
    }

    if (!data) { //(!data){} verifica se data é null ou undefined se for, cria uma nova data
     data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { // toLocaleTimeString formata a hora de acordo com o local
     hour: '2-digit',
     minute: '2-digit',
     second: '2-digit',
      hour12: false // hora12: false exibe a hora no formato 24 horas,
    });
  }

  try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
  } catch (erro) {
    // console.log(erro);
  } finally {
    console.log('Tenha um bom dia.');
  }

*/

/************************ Tatamento de erros com try, catch e finally exercicio 01 **********************/

/*
function raizQuafrada(numero) {
  if(typeof numero !== 'number') {
    throw new Error('Verificar se o número é realmente um número');
  }

  if(numero < 0) {
    throw new Error('Verificar se o número é realmente é positivo');
  }

  return Math.sqrt(numero)

}

try {
  const numeroReceber = 10
  raizQuafrada(numero) = numeroReceber
} catch (error) {
  console.log(error.message)
} finally {
  console.log('Execução finalizada')
}
*/




const form = document.querySelector('form');
const input = document.querySelector('input');
const res = document.querySelector('#res');

form.addEventListener('submit',function(e) {
  e.preventDefault()

  res.innerHTML = "";

  const numero = Number(input.value);

  try {
    if(!input.value) {
      throw new Error('Campo vazio. Por favor, digiet um número.')
    }
    if(isNaN(numero)) {
      throw new Error('Valor inválido. Por favor, digite um número válido')
    }
    if(numero < 0) {
      throw new Error('Número negativo. Por favor, diget um número positivo')
    }

    const raiz = Math.sqrt(numero)
    res.innerHTML = `A raiz quadrada de ${numero} é <strong>${raiz}<strong>`
  } catch (error) {
    res.innerHTML = `<p style="color: red;">${error.message}</p>`; // Exibe a mensagem de erro em vermelho
  }finally {
    console.log('Cálculo finalizado.');
  }
})



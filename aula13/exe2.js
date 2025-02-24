function encontrarPalavra(frase, caractere, palavra) {
  console.log("frase:" + frase);

  console.log(`Caracterisca na posição 5: '${frase.charAt(5)}'`);

  let posicaoPalavra = frase.indexOf(palavra);
  if (posicaoPalavra != -1) {
    console.log(`A palavra '${palavra}' foi encontrada na frase '${frase}'`);
  } else {
    console.log(`A palavra '${palavra}' não foi encontrada na frase '${frase}'`)
  }


  let posicaoCaractere = frase.indexOf(caractere);
  if (posicaoCaractere != -1) {
    console.log(`O caractere '${caractere}' foi encontrado na frase '${frase}'`)
  }else {
    console.log(`O caractere '${caractere}' não foi encontrado.`)
  }
}

encontrarPalavra("O JavaScript é uma linguagem muito poderosa!", "a", "JavaScipt")
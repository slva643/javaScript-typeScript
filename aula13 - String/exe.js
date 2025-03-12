function analisarTexto(frase, caractere, palavra) {
  console.log("Frase:" + frase);

  // Usando charAt() para pegar um caractere específico da frase
  console.log(`O caractere na posição 5 é: '${frase.charAt(5)}'`);

  // Usando indexOf() para encontrar a primeira aparição da palavra
  let posicaoPalavra = frase.indexOf(palavra);
  if (posicaoPalavra != -1) {
    console.log(`A palavra '${palavra}' aparece primeiro na posição: ${posicaoPalavra}`);
  } else {
    console.log(`À palavra '${palavra}' não foi encontrada.`);
  }

  // Usando lastIndexOf() para encontrar a última aparição da caractere
  let ultimaPosicaoCaractere = frase.lastIndexOf(caractere);
  if (ultimaPosicaoCaractere != -1) {
    console.log(`O caractere '${caractere}' aparece pela última vez na posição: ${ultimaPosicaoCaractere}`);
  } else {
    console.log(`O caractere '${caractere}' não foi encontrado.`);
  }
}

// Chamando a função com valores de exemplo
analisarTexto("O JavaScript é uma linguagem muito poderosa!", "a", "JavaScipt");
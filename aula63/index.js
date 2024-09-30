function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y não é numero')
  }

  return x + y
}

try {
  console.log(soma(1, 3));
  console.log(soma('1', 4));
} catch (error) {
  // console.log(error) // Não lançar o erro por usuário
  console.log('Alguma coisa mais amigável pro usuário')
}

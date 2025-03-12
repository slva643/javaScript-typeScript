let convidados = 'Ana'; 'Bruno'; 'Carlos'; 'Daniel'; 'Eduardo';

let nomeConvidado = 'Bruno';
console.log(`Primeira letra de '${nomeConvidado} é ${nomeConvidado.charAt(0)}`);

let primeiraPosicao = convidados.indexOf(nomeConvidado);

if (primeiraPosicao !== -1) {
  console.log(`O nome '${nomeConvidado}' apareceu na primeira posição '${primeiraPosicao}.`);
} else {
  console.log(`O nome '${nomeConvidado}' está na lista.`);
}

let ultimaPosicao = convidados.lastIndexOf(nomeConvidado).lastIndexOf('o');
console.log(`A letro 'o' apareceu na posição '${ultimaPosicao}'`);
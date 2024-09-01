// const frutas = ['Laranja', 'Limão', 'Melancia', 'Caju'];

// for (let qunatidade in frutas) {  // For in -> Ele ler o index ou a chave do objeto
//     console.log(frutas[qunatidade])
// }

const pessoa = {
    Nome: 'Vagno',
    Sobrenome: 'Silva',
    Idade: 24,
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
};
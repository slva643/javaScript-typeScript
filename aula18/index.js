       
/* 
   -> Objeto literal

    const pessoa1 = {
        nome: 'Luiz',
        sobrenome: 'Miranda',
        idade: 25
    };
    console.log(pessoa1.nome,pessoa1.sobrenome);
*/

//--------------------------------------------------------------------------------------------------------------------------------

//Usando com a function
// function criaPessoa (nome, sobrenome, idade) { // O que está dentro do parentece é chamado de parâmetro
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25 ); //Quando em via a informação para fuction que contém os parãmentro enviamos os argumentos para eles.
// const pessoa2 = criaPessoa ('Maria', 'Oliveira', 33 );
// const pessoa3 = criaPessoa ('João', 'Moreira', 55 );
// const pessoa4 = criaPessoa ('Junior', 'Lara', 44 );
// const pessoa5 = criaPessoa ('Jean', 'Otávio', 69 );

// console.log(pessoa1.nome,pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

//-------------------------------------------------------------------------------------------------------------
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
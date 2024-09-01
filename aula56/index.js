// For clássico - Geralmente com iteráveis (array, string)
// For in - Retorna o índece ou chave (string, array ou objetos)
// For of - Retorna o valor em si (índece, array ou string)
// 

const nome = 'Carlos Roberto';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])

}

console.log('##########################');

for(let neme in nome) {
    console.log(nome[neme])
}

console.log('##########################');

for(let valor of nome) {
    console.log(valor)
};

console.log('##########################');

nome.forEach(function(valor, indece, array) {
    console.log(valor, indece, array);
});
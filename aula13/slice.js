//Lista de funcionários (simulanção de dados coletados de um banco ou planilha)

// const funcionario = [
//   {id: 1, nome: 'Ana', cargo: 'Analista'},
//   {id: 2, nome: 'Carlos', cargo: 'Gerente'},
//   {id: 3, nome: 'Beadriz', cargo: 'Desenvolvedor'},
//   {id: 4, nome: 'Daniel', cargo: 'Suporte tecnoco'},
//   {id: 5, nome: 'Fernando', cargo: 'Coordenaador'},
//   {id: 6, nome: 'Gabriel', cargo: 'Estagiário'},
//   {id: 7, nome: 'Helena', cargo: 'Designer'},
//   {id: 8, nome: 'Igo', cargo: 'Analista'}
// ];

// // Função para gerar um relatório paginado (ex: exibindo 3 funcionários por página)

// function gerarRelatorio (funcionario, pagina = 1, tamanhoPagina = 3) {
//   const inicio = (pagina - 1) * tamanhoPagina;
//   const fim = inicio + tamanhoPagina;
//   return funcionario.slice(inicio, fim);
// }

// // Exibindo cad página de funcionários 
// const pagina1 = gerarRelatorio(funcionario, 1);
// const pagina2 = gerarRelatorio(funcionario, 2);
// const pagina3 = gerarRelatorio(funcionario, 3);

// console.log('pagina1:', pagina1);
// console.log('pagina2:', pagina2);
// console.log('pagina3:', pagina3)


// // funcionario por de um setor
// const funcionario = [
//   {id: 1, nome: 'Paula', cargo: 'Entrevistaro'},
//   {id: 2, nome: 'Gustavo', cargo: 'Analista de compra'},
//   {id: 3, nome: 'Caio', cargo: 'Especialista'},
//   {id: 4, nome: 'Paulo', cargo: 'Supervisor'},
//   {id: 5, nome: 'Eduardo', cargo: 'Gerente'},
//   {id: 6, nome: 'Gabriel', cargo: 'Estagiário'},
//   {id: 7, nome: 'Helena', cargo: 'Designer'},
//   {id: 8, nome: 'Igo', cargo: 'Analista'}
// ];

// function gerarRelatorio (funcionario, pagina = 1, tamanhoPagina = 2 ) {
//   const inicio = (pagina - 1) * tamanhoPagina;
//   const fim = inicio + tamanhoPagina;
//   return funcionario.slice(inicio, fim);
// }

// const pagina1 = gerarRelatorio(funcionario, 1);
// const pagina2 = gerarRelatorio(funcionario, 2);
// const pagina3 = gerarRelatorio(funcionario, 3);


// console.log('Primerio grup:', pagina1);
// console.log('Segundo grup:', pagina2);
// console.log('Terceiro grup:', pagina3);

let umaString = 'O rato roeu a roupa do rei de Roma';

console.log(umaString.split('',2));
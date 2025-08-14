const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "Dener",
    sobreNome: "Troquatte",
  },
  {
    nome: "Nay",
    sobreNome: "Troquatte",
  },
  {
    nome: "José",
    sobreNome: "Troquatte",
  },
];

// for ([inicialização]; [condição]; [expressão final])
// for (let i = 0; i < myArrayObj.length; i++) {
//   console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
// }

// for...of
// Itera sobre: valores de objetos iteráveis (arrays, strings, Maps, Sets, NodeLists etc.).
// Não funciona diretamente em objetos simples (a menos que implemente um iterador).

// Exemplo com array:
// const frutas = ["maçã", "banana", "laranja"];

// for (const fruta of frutas) {
//   console.log(fruta);
// }


// for...in
// Itera sobre: chaves (nomes das propriedades) enumeráveis de um objeto.
// Funciona para objetos e arrays, mas em arrays retorna os índices como strings, não os valores.
// É mais usado para objetos, não para arrays.
// Exemplo com objeto:

// const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };

// for (const chave in pessoa) {
//   console.log(chave, pessoa[chave]);
// }
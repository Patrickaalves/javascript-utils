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
    nome: "José 0",
    sobreNome: "Troquatte",
  },
  {
    nome: "José 1",
    sobreNome: "Troquatte",
  },
  {
    nome: "José 2",
    sobreNome: "Troquatte",
    teste: {
      olaMundo() {
        return "ola mundo"
      },
      get querido() {
        return this.olaMundo()
      } 
    }
  },
  {
    nome: "José 3",
    sobreNome: "Troquatte",
  },
];

for (let item of myArrayObj) {
  console.log(item);
  if (item.hasOwnProperty("teste")) {
    console.log(item.teste.querido)
  }
}

console.log("------------------------------==0-0==---------------------------")

for (let item of myArrayObj) {
  if (item.nome === "Nay") {
    console.log("O mozão ta te esperando");
    continue;
  }

  if (item.nome === "José 1") {
    console.log("Lembrar de enviar um SMS");
    break;
  }
  console.log(item);
}

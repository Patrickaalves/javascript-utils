let Tenis = {
  tamanho: 45,
  estoque: true,
};

let link = { link: { a: "a", b: { c: "c" } } };

let clone1 = Tenis; // isso aqui é passagem por referencia, no caso se eu alterar algo em clone 1, ele vai afetera o mesclar1
let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = { ...Tenis, ...link };

console.log(clone1);

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(mesclar1);
console.log(mesclar2);
console.log(Tenis);

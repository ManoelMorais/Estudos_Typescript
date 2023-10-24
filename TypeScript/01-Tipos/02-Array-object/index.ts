// arrays

let array1: [string, string, number, boolean] = ["Manoel", "Morais", 123, true];

let array2: Array<string> = ["soup", "fruts", "white", "fish", "eggs"];

let array3: Array<string | number | boolean> = [
  "soup",
  "fruts",
  "white",
  "fish",
  "eggs",
  true,
  false,
  27,
  76,
];



// objetos

let obj1: {
  nome: string;
  sobrenome: string;
  idade: number;
  deBom: boolean;
} = {
  nome: "manoel",
  sobrenome: "morais",
  idade: 23,
  deBom: true,
};

let obj2: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  deBom: boolean;
}> = [
  {
    nome: "manoel",
    sobrenome: "morais",
    idade: 23,
    deBom: true,
  },
];

console.log(obj1)
console.log(obj2)

console.log(array1)
console.log(array2)
console.log(array3)

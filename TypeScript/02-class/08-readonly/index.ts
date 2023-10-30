/**
 * readonly e dado para apenas leituras e não pode ser alterado o seu valor
 */

class Pessoa {
    public readonly name: string = "Manoel";
}

let pessoa = new Pessoa();

console.log(pessoa.name)
//pessoa.name = "Mariazinha";
console.log(pessoa.name)
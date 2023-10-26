/**
 * Uma classe TypeScript é uma estrutura de programação orientada a objetos
 * que possui um conjunto de propriedade e métodos.
 * 
 * A classe é um modelo para criar objetos, permitindo que você define
 * uma estrutura com propriedades e comportamentos
 */

class pessoa {
    nome: string; //pode declarar um valor aqui caso queira  = "";
    idade: number; //pode declarar um valor aqui caso queira  = 0;

    constructor(nome: string, idade: number){ // caso declare o valor antes não vai precisar do constructor
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new pessoa("Manoel", 18)

console.log(pessoa1.nome)
console.log(pessoa1.idade)

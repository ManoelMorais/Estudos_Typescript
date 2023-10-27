class Pessoa {
    public nome: string;
    public idade: number; 

    constructor(nome: string, idade: number){ 
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O user ${this.nome} comeu ${comida}`
    }

    public niver(){
        return `O ${this.nome} fez tantos ${++this.idade} anos`
    }
}

// caso user o modo 01 não precusa fazer esse constructor
// modo 03
class pessoa1 extends Pessoa {
    constructor(){
        super("Manoel", 18)
    }
}
class pessoa2 extends Pessoa {
    constructor(){
        super("Maria", 19)
    }
    // pode se criar coisas extras 
    public profissao(){
        return `${this.nome} trabalha como programador`
    }
}

//modo 02
const manel = new pessoa1()
//modo 01 const mary = new pessoa2("Manoel", 18)

// modo 02
const mary = new pessoa2()
//modo 01 const mary = new pessoa2("Maria", 18)

console.log(manel.nome)
console.log(manel.idade)

console.log(mary.nome)
console.log(mary.idade)
// caso user o modo 03
console.log(mary.comer("Pizza"))
console.log(mary.niver())
console.log(mary.profissao())

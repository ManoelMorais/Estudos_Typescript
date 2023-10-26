class pessoa {
    nome: string;
    idade: number; 

    constructor(nome: string, idade: number){ 
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O user ${this.nome} comeu ${comida}`
    }

    niver(){
        return `O ${this.nome} fez tantos ${++this.idade} anos`
    }
}

const pessoa1 = new pessoa("Manoel", 18)

console.log(pessoa1.comer('pizza'))
console.log(pessoa1.niver())

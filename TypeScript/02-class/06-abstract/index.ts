/**
 * Classes, métodos e campos no TypeScript podem ser obstratas.
 * 
 * Um método abstrato ou campo abstrato é aquele que não teve
 * um implementação fornecida.
 * 
 * O papel das classes abstratas é servir como uma classe base para
 * subclasses que implementam todos os menbros abstratos.
 * 
 * Quando uma classe não possui membros abstratos, ela é chamada de concreta.
 */

abstract class Pessoa {
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

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
}

class pessoa1 extends Pessoa {
    protected profissao: string = "programador";
    constructor(){
        super("Manoel", 18)
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao} `
    }
}
class pessoa2 extends Pessoa {
    protected profissao: string = "programadora";
    constructor(){
        super("Maria", 19)
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao} `
    }
}

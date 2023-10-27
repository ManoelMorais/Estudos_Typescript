/**
 * Getters e setters são usados para proteger seus dados,
 * especialmente na criação de classes.
 * 
 * Para cada instância de variável, um método getter retorna seu valor,
 * enquanto um método setter o define ou atualiza
 */
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

class pessoa1 extends Pessoa {
    private _profissao: string = "programador"
    constructor(){
        super("Manoel", 18)
    }
    //usado para poder acessar o private sem precisar fazer uma hierarquia
    get profissao(){
        // função, if
        return this._profissao
    }

    set profissao(valor: string){
        this._profissao = valor;
    }

}

const manoel = new pessoa1();

console.log(manoel.profissao)
manoel.profissao = "caminhonheiro"
console.log(manoel.profissao)

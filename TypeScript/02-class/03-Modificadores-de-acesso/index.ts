/**
 * public - Pode ser acessado tanto pela mesma classm
 *          class filhas e outras classes.
 * #####################################################################
 * protected - Pode ser acessada pela mesma classe e classes filhas,
 *             nâo pode ser acessada por outras classes
 * #####################################################################
 * private - Pode ser acessada somente própria classe.
 */
class pessoa {
    private nome: string;
    private idade: number; 

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

const pessoa1 = new pessoa("Manoel", 18)

console.log(pessoa1.comer('pizza'))

// quando tem uma palavra com o _programador segnifica que ela esta no modo private

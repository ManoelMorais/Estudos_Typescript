/**
 * As interfaces TypeScript definem os contratos em se código.
 * Eles também fornecem nomes expícitos para verificação de tipo
 */

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enable(): boolean;
}

let pessoa: IPessoa = {
  nome: "Manoel",
  idade: 18,
  cpf: 1234567890,
  enable: () => {
    return true;
  },
};

class Joao implements IPessoa {
  nome: string = "João";
  idade: number = 21;
  cpf: number = 1123456789;
  enable(): boolean {
    return true;
  }
}

class Maria implements IPessoa {
  nome: string = "Maria";
  idade: number = 23;
  cpf: number = 1123456789;
  enable(): boolean {
    return false;
  }
}

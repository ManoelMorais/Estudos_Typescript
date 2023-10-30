/**
 * Os Namespaces são uma forma especifica do TypeScript para organizar código.
 * Namespaces são simplemente objetos JavaScript nomeados no namespace global.
 * Isso torna os namespaces uma construção muito simples de usar.
 */

export namespace Pessoa{
    export namespace Pessoa1{
        const data = 1 + 1;

        export let name = "João";
        export const calc = () => {
            return data;
        };
    }

    export namespace Pessoa2{
        const data = 1 + 1;

        export let name = "Carlos";
        export const calc = () => {
            return data;
        };
    }
}

console.log(Pessoa.Pessoa1.name)
console.log(Pessoa.Pessoa2.name)

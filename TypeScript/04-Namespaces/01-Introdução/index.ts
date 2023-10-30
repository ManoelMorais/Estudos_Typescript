/**
 * Os Namespaces são uma forma especifica do TypeScript para organizar código.
 * Namespaces são simplemente objetos JavaScript nomeados no namespace global.
 * Isso torna os namespaces uma construção muito simples de usar.
 */

export namespace Pessoa1 {
    export let nome = "joâo";
    const data = new Date()

    export const calc = () => {
        return data
    }

}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

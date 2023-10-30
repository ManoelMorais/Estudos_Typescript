/**
 * A palavra chave static define um método estático para a classe.
 * Método estáticos não são chamados na instâncias da classe.
 * Em vez disso, eles são chamados na própria classe.
 * Geralmente, são funções utilitárias, como funções para criar ou clonar objetos
 */

import { JsxEmit } from "typescript";

class Utils{
    static cloneObject(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const tenis1: {tamanho: number; estoque: boolean} = {
    tamanho: 39,
    estoque: true,
}

const tenis2: {tamanho: number; estoque: boolean} = {
    tamanho: 36,
    estoque: true,
}

console.log(Utils.cloneObject([tenis1, tenis2]));


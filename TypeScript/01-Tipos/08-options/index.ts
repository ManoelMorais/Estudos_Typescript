const FN = (nome: string, idade?: number) => {
    return `nome: ${nome}, idade: ${idade}`
}

console.log(FN("manoel"))

/**
 * pode ter ou não ter a opticção, so usar o ?
 */
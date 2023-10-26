enum EMes{
    Janeiro = "Jan",
    Fevereiro = "Fev",
    Março = "Mar",
    Abril = "Abr",
    maio = "Mai",
    Junho = "Jun",
    Julho = "Jul",
    Agosto = "Ago",
    Setembro = "Set",
    Outubro = "Out",
    Novembro = "Nov", 
    Dezembro = "Dez",
}

console.log(EMes.Janeiro)

const pessoa: {nome: string, mes: string} = {
    nome: "manoel",
    mes: EMes.Janeiro,
}

if(pessoa.mes === EMes.Janeiro){
    console.log(pessoa)
}
var convidados = [
    {nome: "daniel", vip: true},
    {nome: "GaBriEl", vip: true},
    {nome: "FeLipe", vip: false}
]
var convertForCL = convidados.map((item) => {
    return Object.assign(item, {nome: item.nome.toUpperCase()})
})
console.log(convertForCL)

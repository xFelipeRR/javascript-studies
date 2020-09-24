var convidados = [
    {nome: "Felipe", idade: 18, gênero: "masculino"},
    {nome: "José", idade: 21, gênero: "masculino"},
    {nome: "Mariana", idade: 19, gênero: "feminino"},
    {nome: "João", idade: 16, gênero: "masculino"},
    {nome: "Gabriela", idade: 22, gênero: "feminino"}
]

Array.prototype.groupBy = function(prop) {
    var value = this.reduce((total, item) => {
        var key = item[prop]

        total[key] = (total[key] || []).concat(item)
        return total;
    }, {})
        return value;
}


var filterGuests = convidados.sort(function(a, b) {
    return (a.nome > b.nome)? 1:-1
}).filter((item) => {
    return item.idade >= 18
})
.groupBy("gênero")
console.log(filterGuests)


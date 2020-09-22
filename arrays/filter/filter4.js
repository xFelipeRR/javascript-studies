var filmes = [
    {titulo: "Titanic", duracao: 195, nota: 7.5},
    {titulo: "The Avengers", duracao: 203, nota: 9.5},
    {titulo: "Bean", duracao: 90, nota: 9.5}
]

var notaCorte = 8

var filmesBons = filmes.filter(function(items) {
    return items.nota >= notaCorte // vai retornar true ou false, se for true adiciona na variavel
})
var filmesRuins = filmes.filter(function(items) {
    return items.nota < notaCorte 
})
for(i = 0; i < filmesBons.length; i++){
console.log(filmesBons[i].titulo)
}
console.log(filmesRuins)
var produtos = [
    {id: "123", nome: "Camiseta", cor: "preto", tamanho: "G", categoria: "Vestuário"},
    {id: "456", nome: "Tênis", cor: "preto", tamanho: "41", categoria: "Vestuário"},
    {id: "789", nome: "Bola", cor: "verde", tamanho: "unico", categoria: "Esporte"},
    {id: "101112", nome: "Short", cor: "preto", tamanho: "G", categoria: "Vestuário"}
  ]

Array.prototype.groupBy = function(prop) {      // inserir a função groupBy como metodo do array
    var value = this.reduce((total, item) => { // podendo assim ser usado com um ponto
        var key = item[prop]                   // como se fosse filter, reduce, map

        total[key] = (total[key] || []).concat(item)
        
        return total;
}, {})
        return value;
}

var produtosFiltrados = produtos.filter(function(item) {
    return item.cor == "preto"
}).filter(function(item) {
    return item.tamanho == "G"
}).groupBy('categoria')             // uso de ponto para usar a funcao groupBy
console.log(produtosFiltrados)
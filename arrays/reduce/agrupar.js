var carros = [
    {marca: "audi", cor: "preto"},
    {marca: "audi", cor: "branco"},
    {marca: "ferrari", cor: "preto"},
    {marca: "ford", cor: "branco"},
    {marca: "peugeot", cor: "branco"}
]

function groupBy(array, prop){
    var value = array.reduce((total, item) => {
        var key = item[prop] // item.marca -> para separar os objetos por marca

        // total[key] = total.concat(item) => adicionar todo o item dentro do hash "marca"
          // porem o total é um objeto, e o concat não irá funcionar
          
        total[key] = (total[key] || []).concat(item)
        // vai verificar se o total já é um array e se não for vai virar um, pra então dar o concat
        return total;
}, {})
        return value;
}

var carrosAgrupados = groupBy(carros, "marca")
console.log(carrosAgrupados)

    // Resultado
/* { 
    audi: [ { marca: 'audi', cor: 'preto' }, { marca: 'audi', cor: 'branco' } ],
    ferrari: [ { marca: 'ferrari', cor: 'preto' } ],
    ford: [ { marca: 'ford', cor: 'branco' } ],
    peugeot: [ { marca: 'peugeot', cor: 'branco' } ]
  } */



  var produtos = [
      {id: "123", nome: "Camiseta", cor: "preto", tamanho: "G", categoria: "Vestuário"},
      {id: "456", nome: "Tênis", cor: "preto", tamanho: "41", categoria: "Vestuário"},
      {id: "789", nome: "Bola", cor: "verde", tamanho: "unico", categoria: "Esporte"}
    ]

    var produtosAgrupados = groupBy(produtos, "categoria")
    console.log(produtosAgrupados)
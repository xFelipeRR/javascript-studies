// Agrupar apenas objetos da categoria vestuario
var produtos = [
    {id: "123", nome: "Camiseta", cor: "preto", tamanho: "G", categoria: "Vestuário"},
    {id: "456", nome: "Tênis", cor: "preto", tamanho: "41", categoria: "Vestuário"},
    {id: "789", nome: "Bola", cor: "verde", tamanho: "unico", categoria: "Esporte"}
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

var novosProdutos = produtos.filter((item) => {
    return item.categoria == "Vestuário"
})
var produtosVestuario = groupBy(novosProdutos, "categoria")
  console.log(produtosVestuario)
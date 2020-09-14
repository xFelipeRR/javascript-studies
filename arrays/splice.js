var nomes = ["Bruno", "Felipe", "Douglas", "Ana"]

nomes.splice(1, 2, "Zézinho", "Fulano")

console.log(nomes)

// Parametros do splice( [a partir de qual indice ele vai tirar, [contador de quantos
// elementos vai tirar a partir do indice fornecido], [nomes de elementos para substituir
// os retirados] )
var numeros = [1,2,4,5,7,8]

var nPares = numeros.filter((items) => {
    return items%2 == 0
})
var nImpares = numeros.filter((items) => {
    return items%2 != 0
})
console.log(nPares)
console.log(nImpares)
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100]

var pares = function(item){
    return !(item % 2)
}

var dobrados = function(item){
    return item * 2
}

var numerosDobrados= numeros.filter(pares).map(dobrados)
console.log(numerosPares)
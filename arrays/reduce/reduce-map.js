var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var calc = function(total, item) {
    return total.concat(item * 2)
}

var dobrados = numeros.reduce(calc, [])
console.log(dobrados)
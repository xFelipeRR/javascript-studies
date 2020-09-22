var valores = [1, 2, 6, 3]

var calc = ((acumulator, item) => {
    console.log(`Acc: ${acumulator} - I: ${item} `)
    var resultado = acumulator + item
    return resultado;
})

var somatoria = valores.reduce(calc, 0)

console.log(somatoria)

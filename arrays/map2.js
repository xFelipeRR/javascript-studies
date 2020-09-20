var fahrenheit = [22, 32, 44, 55, 74, 92]

var celcius = fahrenheit.map((item) => {
    return (item - 32) * 5/9
})
var resultado = celcius.map((item) => item.toFixed(1))

console.log(resultado)
resultado.forEach((elements, indice) => {
    console.log(`Temperatura ${indice} - ${elements}°C`)
})
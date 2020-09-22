// Sem filter
/* var numeros = [10, 18, 1, 15]
var resultado = []

for(i=0; i < numeros.length; i++){
    if(numeros[i] > 10){
    resultado.push(numeros[i])
    }
}
console.log(resultado)
 */

var numeros = [10, 18, 1, 15]
var resultado = []
var filtro = numeros.filter((item) => { // o parametro item recebe os valores do array
    return item>10
})
console.log(filtro)



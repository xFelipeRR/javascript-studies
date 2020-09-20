var numeros = [1, 2 ,4 ,7, 8, 9, 10, 11, 12]

var filtro = numeros.reduce(function(total, item) {
    if(item > 5){
        total.push(item)
    }
    return total;
}, [])
console.log(filtro)
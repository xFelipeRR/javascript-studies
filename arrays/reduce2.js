var valores = [1, 2, 3, 5]

var media = valores.reduce(((total, item, indice, array) => { // vai deixar disponivel o indice e o array em si
    total = total + item
    if(indice == array.length - 1){
        return total/array.length;
    }
    return total;
}))


console.log(media)
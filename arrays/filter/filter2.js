var nomes = ["Bruno", "Felipe", "Zezinho", "Fulano"]

var convidados = nomes.filter(function(item){
    return item.charAt(0) == "Z"
})

    console.log(convidados)
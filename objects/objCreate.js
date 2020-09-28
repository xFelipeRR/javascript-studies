var pessoa1 = {
    nome: "Felipe",
    idade: 16
}

var pessoa2 = Object.create(pessoa1)
console.log(pessoa2.nome)
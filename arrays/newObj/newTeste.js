function pessoa(nome, sobrenome, idade){
    this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

var person1 = new pessoa("Felipe", "Rangel", "16")

console.log(person1)
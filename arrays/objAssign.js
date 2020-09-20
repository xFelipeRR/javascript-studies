let first = {name: 'Tony', idade:21};
let last = {lastName: 'Stark', profissao: "super-heroi"};
let person = Object.assign(first, last);
console.log(person);

let aluno = {nome: "Felipe", sobrenome: "Rangel"}
let profissao = {profissao: "Desenvolvedor"}
let dados = {cpf: 838283, cidade: "Cascavel"}

let pessoa = Object.assign(aluno, profissao, dados)
console.log(pessoa)
// junta objetos em um só objeto

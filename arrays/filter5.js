var convidados = [
    {nome: "Daniel", vip: true, idade: 21},
    {nome: "Gabriel", vip: true, idade: 54},
    {nome: "Felipe", vip: false, idade: 16}
]

var filtraVip = convidados.filter((items) => {
    return items.vip;
})
for(i = 0; i < filtraVip.length; i++){
console.log(filtraVip[i].nome)
}
var funcionario = {
    nome: "Felipe",
    idade: 37,
    numRegistro: "12345B",
    departamento: "TI",
    eventos: [
        {evento: 'faltou', data: '18/05/2009'},
        {evento: 'falou bravo com o chefe', data: '18/06/2009'},
    ],
    detalhes: {
        hobies: ['fotografia', 'jiu-jitsu'],
    },
    horarios: [],
    registrarEntrada: function(data) {
        this.horarios.push({data: data, evento: 'entrada'})
        console.log("Entrada às " + data + " - " + this.numRegistro);
    },
    registrarSaida: function(data) {
        this.horarios.push({data: data, evento: 'saida'})
        console.log("Saída às " + data + " - " + this.numRegistro);
    }
}

funcionario.registrarEntrada("02/06/2020 - 19:20")
funcionario.registrarSaida("02/06/2020 - 21:40")

console.log(funcionario.horarios)
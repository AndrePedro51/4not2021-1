let vetor = [10, 20, 30]
let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP' 
}

//Desestruturação do vetor: as variaveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

//Desestruturação de objetos: as variaveis do let DEVEM ter os mesmos nomes das propriedades, nao importa a ordem
let {naturalidade, nome, idade} = obj
console.log(naturalidade)
console.log(nome)
console.log(idade)

let obj2 = {
    marca: 'Volkswagen', 
    modelo: 'Fusca',
    ano: 1960,
    cor:'preto'
}

//Desestruturação parcial de um objeto
let {modelo, marca} = obj2
console.log(modelo)
console.log(marca)


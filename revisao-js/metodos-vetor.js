const pets = [
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matuzalem',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    }
]


//find(): retorna a primeira ocorerncia que corresponde ao criterio informado
//Retorna undefined quando não encontra o criterio informado
console.log(pets.find(elemento => elemento.peso > 10))
console.log(pets.find(pet => pet.idade < 4))
console.log(pets.find(pet => pet.especie === 'gato' && pet.sexo ==='M'))
console.log(pets.find(pet => pet.especie == 'calopsita'))

console.log('---------------------------------------------------------')

//some(): retorna true caso haja algum elemento que responda ao criterio, false caso contrario
console.log(pets.some(pet => pet.nome == 'Cerberus'))

console.log(pets.some(pet => pet.especie == 'tartaruga' && pet.sexo == 'F'))

console.log('---------------------------------------------------------')

//every(): retorna true caso todos os elementos corresponedem ao criterio

console.log(pets.every(pet => pet.especie === 'cão'))
console.log(pets.every(pet => pet.peso >= 1))

console.log('---------------------------------------------------------')

//filter(): retorna um novo vetor contendo apenas os elementos do criterio

console.log(pets.filter(pet => pet.especie === 'gato'))

console.log('---------------------------------------------------------')

//map(): cria um novo vetor com mesmo número de elementos do vetor original, correspondendo a algum tipo de tranformação

//novo vetor tendo apenas os nomes dos animais

console.log(pets.map(e => e.nome.toLocaleUpperCase()))

const numeros = [1,2,5,2,1,1,2,4,8,7,6]

console.log(numeros.map(e => e ** 2))

console.log('---------------------------------------------------------')

//reduce(): reduz um vetor a um unico valor
// parametros: 
// acumulador: resultado parcial ate o momento
// valor atual: o resuiltado correspondente ao elemento atual, que integrará o acumulado

//soma com reduce

console.log(numeros.reduce((acum, val) => acum + val))

//Multiplicação com reduce

console.log(numeros.reduce((acum, val) => acum * val))

//tambem funciona com concatenação
let a = 'André'
let b = 'Gomes'
console.log([a , ' ', b].reduce((a, v) => a+v))

console.log('---------------------------------------------------------')

//Somar peso de todos os pets

//Abordagem 1: criando um vetor auxiliar somente com os pesos dos pets
let pesos = pets.map(pet => pet.peso)
//somar pesos com reduce
pesos.reduce((a, v) => a+v)
console.log(pesos.reduce((a, v) => a+v))

console.log('---------------------------------------------------------')

//Abordagem 2: fazendo map + reduce em uma linha so

console.log(pets.map(pet => pet.peso).reduce((a, v) => a+v))

console.log('---------------------------------------------------------')

//Abordagem 3: reduce com parametros extras
//segundo parametro do reduce: valor inicial do amuculador

console.log(pets.reduce((acum, val) => acum + val.peso, 0))

console.log('---------------------------------------------------------')

//Includes(): retorna true caso o vetor inclua o valor informado

console.log(numeros.includes(5))

console.log(numeros.includes(10))

//diferença do some para o includes
//some recebe uma função para testar a existencia de uma condição
//includes recebe um valor simples para provar a existencia


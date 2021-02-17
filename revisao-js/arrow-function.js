//Função comum
function quadrado(n){
    return n*n
}
console.log(quadrado(5))

//Reescrevendo com arrow function
//Não precisa de parenteses
//Não precisa da palavra function, no lugar usamos uma flecha "=>"
//Não precisa das chaves
//Não precisa da palavra return
const quadrado2 = n => n*n

console.log(quadrado2(8))

const multiplicacao = n => quadrado(n) + quadrado2(n)

console.log(multiplicacao(5))

//Arrow function com mais de um argumento

const potencia = (b, e) => b**e

console.log(potencia(5,3))

//função sem argumentos

const megasena = () => Math.floor(Math.random() * 60 + 1)

console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// Arrow function com mais de uma linha de codigo
//voltam as chaves 
const somaTudo2 = (...nums) => {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

//Conclusão: o formato arrow function é bom quando usado em apenas uma linha



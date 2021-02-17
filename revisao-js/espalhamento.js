console.log(Math.min(1,4,5,2,1,0,2,5,4,-8)) //Retorna o menor valor
console.log(Math.max(1,4,5,2,1,0,2,5,4,-8)) //Retorna o maior valor

let numeros = [1,5,2,6,4,0,12,-8,-6,35]

//Usando espalhamento para dessmontar um vetor
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

let maisNumeros = [4,0,11,5,2,1,3,4,...numeros,22]

console.log(maisNumeros)

//Função com parametros de resto, quantidade de parametros variaveis
function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(12,5,2,1))
console.log(somaTudo(2,51,2,11))

function calcular(op, ...nums){
    let resto
    switch (op) {
        case '+':
            //res=0
            //for(let n of nums) soma +=n
            res = somaTudo(...nums)
            break;
        case '*':
            res = 1
            for (let n of nums) res *= n
        default:
            break;
    }
    return res
}

console.log(calcular('*',5,4,5,78,1,2,0))
console.log(calcular('+',5,4,5,78,1,2))

//Como chamar a função somaTudo() para processar o vetor maisNumeros

console.log(somaTudo(...maisNumeros))
console.log(calcular('+',...maisNumeros))

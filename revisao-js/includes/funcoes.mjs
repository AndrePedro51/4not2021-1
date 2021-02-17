//Exportar as funções para outro arquivo

export function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

//Cria um novo vetor com cada elemento do vetor original elevado ao quadrado
export function quadradoVet(vet){
    let res = []
    for(let n of vet) res.push(n**2)
    return res
}

// export default funciona para funções e classe
//Não funciona para constantes e variáveis 
//E so pode usar um export default por arquivo


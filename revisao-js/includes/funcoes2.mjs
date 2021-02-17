// export default funciona para funções e classe
//Não funciona para constantes e variáveis 
//E so pode usar um export default por arquivo

export default function dobraVet(vet){
    //cria um novo vetor com elementos que são o dobro do valor original
    let res = []
    for(let n of vet) res.push(n*2)
    return res
}
//Parametros predefinidos ou opcionais em funções
// se nao passar o terceiro parametro a funcao deixa o 'q' como parametro predefinido
//parametros opcionais devem vir apos os obrigatorios

function calcularArea(b, a, f = 'q', casadec = 2){
    let res
    switch(f){
        case 'q':
            res = b*a
            break
        case 't':
            res = b*a/2
        break
        case 'e':
            res = (b/2)*(a/2)*Math.PI
    }
    return res.toFixed(casadec)
}

console.log(calcularArea(20, 8, 'q'))
console.log(calcularArea(10, 5, 'e'))
console.log(calcularArea(20, 8))

//caso seja necessário passar um parametro nao definido que nao seja o ultimo
console.log(calcularArea(20, 8, undefined,3))

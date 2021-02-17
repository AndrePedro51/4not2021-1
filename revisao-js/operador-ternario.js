let nota = 7.2
let situacao

/*if(nota >= 6){
    situacao = 'Aprovado'
}else{
    situacao = "Reprovado"
}*/

//Usando operado ternario
//As tres partes do operador ternario
//1° - condição (que iria depois do if), depois um "?"
//2° - resultado se for verdadeira, depois um ":"
//3° - resultado se for falso
situacao = nota >= 6? 'Aprovado' : 'Reporovado'

console.log(situacao)

let user = 'admin'
let userType

userType = user == 'admin' || user == 'root'? 'Superuser' : 'Ordinary user'

console.log(userType)


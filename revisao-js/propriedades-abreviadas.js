//Criando um objeto cujo valor das propriedades vem de variáveis

let usuario = "joao"
let senha = "Deus123"
let name = "João Silva"
let lastLogin = "09/02/2021"

let userInfo = {
    login: usuario,
    password: senha,
    name, //Propriedade abreviada (name: name)
    lastLogin //Propriedade abreviada (lastLogin: lastLogin)
}

console.log(userInfo)
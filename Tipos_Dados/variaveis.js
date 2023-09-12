//var 
/* Explicação: funciona globalmente, ou seja, eu posso declarar a variavel em qualquer parte do meu codigo */

exemplo2 = 15

console.log(exemplo2)

var exemplo2

/*--------------------------------------------------------- */

//let 
/* Explicação: As variaveis let não podem ser usadas antes de ser declarada, pois seu escopo não permite serem elevadas ao topo*/

let exemplo3

exemplo3 = 40

console.log(exemplo3)

/*--------------------------------------------------------- */

//let 
/* Explicação: As declarações const não podem ser restribuidos após a atribuição inicial
 e deve ser inicializada na mesma linha que foi declarada*/

const status = "Aluno Aprovado "
const nota1 = 7
const nota2 = 4
let aprovacao

if (status === "Aluno Aprovado ") {
    aprovacao = nota1 + nota2
    console.log("Para buains voçuai foi aprovuado")
}



const media = 7
const nota = 4

if (nota >= media) {
    console.log("Aluno Aprovado")
}else{
    console.log("Aluno Reprovado")
}

//Operador ternario

            //condição         true                  false
console.log(nota >= media ? "Aluno Aprovado" : "Aluno Reprovado")


/*--------------------------------------------------------- */

//Template String

const nome = "Matheus Pavarot"

const cargo = "plantador de sonhos falsos "

const empresa = "Mundo cultura "

const idade = 2023-2006

console.log("Me chamam de "+nome +", "+cargo+"Trabalho na empresa "+empresa+"e tenho "+idade+" anos.")

console.log(`Me chamam de ${nome}, sou ${cargo},Trabalho na empresa ${empresa} e tenho ${idade} anos.`)
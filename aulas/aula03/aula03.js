"use strict"
/* VAR e uma variavel universal e global,LET e uma variavel que so funciona dentro do seu bloco ou ela so vai funcionar ou aciama dele
*/
function teste (){    
    if(true){
       let nome="Bruno" 
       console.log("Dentro do if do test: " + nome)    
    }
    console.log("Dentro de teste: " + nome)    
}

teste()

console.log("fora do teste" + nome)
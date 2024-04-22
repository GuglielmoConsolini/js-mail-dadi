const myContainer = document.querySelector('div');
const pulsante = document.getElementById("game")

pulsante.addEventListener("click" , function(){

let numeroGiocatore = Math.floor(Math.random() * 6 + 1);
console.log(numeroGiocatore);

let numeroComputer= Math.floor(Math.random() * 6 + 1);
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer){

    console.log("Ha vinto il giocatore")
    const result = document.createElement("div")
    result.append("Ha vinto il giocatore")
    myContainer.append(result)

} else if (numeroGiocatore < numeroComputer){

    console.log("Ha vinto il Computer")
    const result = document.createElement("div")
    result.append("Ha vinto il computer")
    myContainer.append(result)

} else {

     console.log("Pareggio")
     const result = document.createElement("div")
    result.append("Pareggio")
    myContainer.append(result)

}


})


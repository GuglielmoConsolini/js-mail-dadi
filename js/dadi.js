
let numeroGiocatore = Math.floor(Math.random() * 6 + 1);

console.log(numeroGiocatore);

let numeroComputer= Math.floor(Math.random() * 6 + 1);

console.log(numeroComputer);

if (numeroGiocatore > numeroComputer){

    console.log("Ha vinto il giocatore")

} else if (numeroGiocatore < numeroComputer){

    console.log("Ha vinto il Computer")

} else {

     console.log("Pareggio")

}
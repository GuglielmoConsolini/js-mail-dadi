
const emailAccesso = [

"pippo@gmail.com",
"marco@gmail.com",
"guglielmo@gmail.com",
"nikolas@gmail.com",
"giuseppe@gmail.com",
"luca@gmail.com",

];
let eMail = prompt("Inserisci Email..");
console.log(emailAccesso)



for (let i = 0; i < emailAccesso.length; i++) {

	const dirittoDiaccesso = emailAccesso[i];
    console.log(dirittoDiaccesso)

    if (eMail == dirittoDiaccesso){

    console.log("Hai accesso")
    document.getElementById("esito").innerText = "Hai accesso"
    break
    

    } else {

     console.log("non hai accesso")
     document.getElementById("esito").innerText = "Non hai accesso"
     
    }

	





}


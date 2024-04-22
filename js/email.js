
const emailAccesso = [

"pippo@gmail.com",
"margo@gmail.com",
"guglielmo@gmail.com",
"nikolas@gmail.com",
"giuseppe@gmail.com",
"luca@gmail.com",

];

console.log(emailAccesso)

let eMail = prompt("Inserisci Email..");

for (let i = 0; i < emailAccesso.length; i++) {

    

	const dirittoDiaccesso = emailAccesso[i];

    console.log(dirittoDiaccesso)


    if (eMail == dirittoDiaccesso){

    console.log("Hai accesso")
    document.getElementById("esito").innerText = "Hai accesso"
    

    } else {

     console.log("non hai accesso")
     document.getElementById("esito").innerText = "Non hai accesso"

    }

	





}


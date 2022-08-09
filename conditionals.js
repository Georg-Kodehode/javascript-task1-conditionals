// conditionals oppgave

const userName = "Tom";
const userAge = 19;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

/*
Lag en conditional som sjekker om userName eksisterer, at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".
*/

if (userName && userAge>18 && !userIsBlocked){
    goToPage = userIsAdmin ? "/admin" : "/home";
    userIsLoggedIn = true;
}else{
    console.log("Username is not defined, age is not over 18, or user is blocked");
}

// console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.
console.log(goToPage);






/*
Lag en conditional som sjekker om userName eksisterer, at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

 
console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

endre på verdiene i variablene for å se at din conditional kan håndtere alle cases
*/
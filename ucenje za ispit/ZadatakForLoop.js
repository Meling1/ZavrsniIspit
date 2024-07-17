// ispisi u konzoli 1. riječ iz arraya tako da nakon svakog slova osim zadnjeg pise znak +

var prdez = ["smrad", "oporost"];

let prvaRijec = prdez[0];
let tekst = "";

for (i = 0; i < prvaRijec.length; i++){

tekst += prvaRijec.charAt(i) + "+";
} 

tekst = tekst.slice(0, -1);
console.log(tekst);
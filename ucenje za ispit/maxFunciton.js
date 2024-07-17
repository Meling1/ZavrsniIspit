/* Potrebno je definirati funkciju "max" koja ce vratiti veci od dva broja. ako su jednaki, funkcija vraća prvi broj.
Funkcija prima 2 broja preko parametara. pretpostavite da ce parametri uvijek biti brojevi.
Primjer max (1,2) - funkcija vraća 2. 
primjer max (1,1) - funkcija vraća 1. */

function max(num1,num2){
  if (typeof num1 !== "number"){
    return "prvi parametar nije broj";
  }
  if (typeof num2 !== "number"){
    return "drugi parametar nije broj";
  }
    if (num1 < num2){
return num1; }

if(num1 > num2){
    return num2;
}

if (num1 == num2){
    return num1;
}
}
console.log(max(2,1));
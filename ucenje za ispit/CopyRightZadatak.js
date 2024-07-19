/* na stranici se nalazi se nalazi copyright element i unutar njega 
element s ID-jem "copyright-year". 
zeljeno ponasanje je da se unutar elementa s ID-jem "copyright-year" ispise trenutna godina. 
koristeci javascript, napisite kod koji ce realizirati takvo ponasanje */


var year = new Date().getFullYear();
document.getElementById("copyright-year").innerHTML= "&copy; " + year;
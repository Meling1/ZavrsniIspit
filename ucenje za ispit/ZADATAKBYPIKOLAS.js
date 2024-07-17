function dodajZad() {
    let input = document.getElementById('polje');
    let value = input.value;

    // Provjeriti je li vrijednost prazna
    if (value !== "") {
        // Stvoriti novi <li> element
        let li = document.createElement('li');
        li.textContent = value;

         // Dodati event listener za klik na <li> element
         li.addEventListener('click', function() {
            // Promijeniti stil <li> elementa prilikom klika
            li.classList.toggle("zavrsen");
        });

        // Dodati novi <li> element u <ul> listu
        let ul = document.getElementById('lista');
        ul.appendChild(li);

        // Očistiti ulazno polje
        input.value = "";
    }
}

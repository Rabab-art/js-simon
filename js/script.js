// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// (Decidete voi se debbano essere tutti diversi)
// Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. 
//     (Bonus: visualizzare il timer)
// Al termine dei 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// (Bonus: far inserire i numeri da un form)
// Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert
// quanti e quali dei numeri da indovinare sono stati individuati. 
// (Bonus: stampare in pagina il risultato, in alternativa all'alert.)


// PREPARAZIONE

var cpuNumbers = [];

function getRandomNumbers(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
};


while (cpuNumbers.length < 5) {

    var randomNumber = getRandomNumbers(1, 10);
    if (!cpuNumbers.includes(randomNumber)) {
        cpuNumbers.push(randomNumber);

    }
}

console.log(cpuNumbers);

// GIOCO

alert(cpuNumbers.sort())

function isValidNumeber(num) {
    if (!num || isNaN(num) || num.trim() === '') {
        return false;
    }
    return true;
};


function getUserNumber() {
    var num = prompt('Scegli un numero da 1 a 100');
    while (!isValidNumeber(num) || num < 1 || num > 100) {
        alert('Questo non è un numero valido');
        num = prompt('Scegli un numero da 1 a 100 ');
    }
    return parseInt(num);
};



setTimeout(function () {
    var tentativiUtente = [];
    var numeriIndovinati = [];

    while (tentativiUtente.length < 5) {
        var userChoice = getUserNumber();


        /*l'aveva già utitlizzato questo numero*/
        if (!tentativiUtente.includes(userChoice)) {
            tentativiUtente.push(userChoice);
            if (cpuNumbers.includes(userChoice)) {
                numeriIndovinati.push(userChoice)
            };

        } else {
            alert('Hai già scelto questo numero')
        };
    }
    alert('Hai indovinato' + numeriIndovinati.length + ' numeri: ' + numeriIndovinati
    );

}, 300);
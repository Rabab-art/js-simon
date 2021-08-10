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

number();


function number() {

    alert(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    alert(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    alert(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    alert(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    alert(Math.floor(Math.random() * (5 - 1 + 1)) + 1);

};



setTimeout(insert, 3000);

function insert() {
    alert(prompt('Inserisci il numero'));
    alert(prompt('Inserisci il numero'));
    alert(prompt('Inserisci il numero'));
};

// // PREPARAZIONE 

// var cpuNumber = [];

// while (cpuNumber.length < 5) {
//     var randomNumber = getRandomNumber(1, 10);
//     // se non è più presente nell'array di cpuNumber,lo inserisco.
//     if (!cpuNumber.includes(randomNumber)) {
//         cpuNumber.push(randomNumber);
//     };
//     console.log(cpuNumber);

// };

// // FASE DI GIOCO 
// alert(cpuNumber.sort());

// setTimeout(function () {
//     var tentativoUtente = [];
//     var numeriIndovinati = [];
//     while (tentativiUtente.length < 5) {
//         var userChoice = getUserNumbers();
//         // L'aveva già usato questo utente
//         if (!tentativiUtente.includes(userChoice)) {
//             tentativiUtente.push(userChoice);
//             if (cpuNumber.includes(userChoice)) {

//             }
//         };
//     };
// }

// );
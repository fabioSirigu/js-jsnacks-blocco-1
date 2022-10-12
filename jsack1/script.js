//L’utente inserisce due numeri in successione, con due prompt.

const numberOne = prompt('scrivi un numero');
const numberTwo = prompt('scrivi un altro numero');

//Il software stampa il maggiore

const pEl = document.getElementById('number_result');

if (numberOne > numberTwo) {
    pEl.innerHTML = "Il primo numero è quello maggiore";
} else if(numberTwo > numberOne) {
    pEl.innerHTML = "Il secondo numero è quello maggiore";
} else {
    pEl.innerHTML = "Pareggio";
}

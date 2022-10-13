
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
// oppure

/* const numb1 = Number(prompt('inserisci un numero'));
const numb2 = Number(prompt('inserisci un numero'));
const numb3 = Number(prompt('inserisci un numero'));
const numb4 = Number(prompt('inserisci un numero'));
const numb5 = Number(prompt('inserisci un numero'));
const numb6 = Number(prompt('inserisci un numero'));
const numb7 = Number(prompt('inserisci un numero'));
const numb8 = Number(prompt('inserisci un numero'));
const numb9 = Number(prompt('inserisci un numero'));
const numb10 = Number(prompt('inserisci un numero'));

//Il programma stampa la somma di tutti i numeri inseriti.

console.log(Number(numb1) + Number(numb2) + Number(numb3) + Number(numb4) + Number(numb5) + Number(numb6) + Number(numb7) + Number(numb8) + Number(numb9) + Number(numb10)) */

/* const body = document.querySelector('body')
let sum = 0;
for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt('Inserisci un numero'));
    sum += userNumber;
}
console.log(sum);
body.innerHTML = sum; */

const body = document.querySelector('body')
let sum = 0;
let i = 0
while (i < 10) {
    const userNumber = Number(prompt('Inserisci un numero:'));
    sum += userNumber;
    i++;
}

body.innerHTML = sum;


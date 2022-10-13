
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
// oppure

/* const body = document.querySelector('body')
let sum = 0;
for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt('Inserisci un numero'));
    sum += userNumber;
}
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


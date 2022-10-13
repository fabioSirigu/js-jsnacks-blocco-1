//In un nameInvited sono contenuti i nomi degli invitati alla festa del grande Gatsby

const nameInvited = [
      'fabio',
      'luca',
      'antonio',
      'marco',
      'matteo',
]

const body = document.querySelector('body')
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const userName = prompt('inserisci il tuo nome');
let nameOk = 'non puoi entrare';
/* 
for (let i = 0; i < nameInvited.length; i++) {
    const element = nameInvited[i];
    if (element===userName){
        nameOk = 'ok puoi entrare!';
    }
}  */


// con while
let i = 0;
while ( i < nameInvited.length) {
        const element = nameInvited[i];
        if (element===userName){
            nameOk = 'ok puoi entrare!';
        }
        i++
}
      
console.log(nameOk)

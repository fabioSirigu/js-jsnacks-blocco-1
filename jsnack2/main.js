Snack 2
//L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt('Scrivi qualcosa');
const secondWord = prompt('Scrivi ancora qualcosa');

//Il software stampa prima la parola più corta, poi la parola più lunga.

if (firstWord.length > secondWord.lenght) {
      console.log(firstWord);
      console.log(secondWord);
} else if (firstWord.length < secondWord.lenght){
      console.log(secondWord);
      console.log(firstWord);
} else {
      console.log('sono uguali')
}


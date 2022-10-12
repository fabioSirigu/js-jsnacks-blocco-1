
//L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt('Scrivi qualcosa');
const secondWord = prompt('Scrivi ancora qualcosa');

//Il software stampa prima la parola più corta, poi la parola più lunga.

if (firstWord.length > secondWord.length) {
      console.log(firstWord, " è la più lunga");
  } else if (secondWord.length > firstWord.length) {
      console.log(secondWord, " è la più lunga");
  
  } else {
      console.log("sono uguali");
  }
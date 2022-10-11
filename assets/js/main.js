// Mail

/* Consegna */

/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

/* Istruzioni */

// Chiedi all'utente la mail usando prompt 
const mail = prompt ('Inserisci una mail');
/* console.log(mail); */
// Crea un array di mail di cui una o due saranno valide per l'accesso
const mails = ['topolino@redisney.com', 'eccopippo@gambadilegno.com', 'paperino@paperopoli.com', 'evilmarkus@hotmail.it', 'momylove@gmail.com'];
// Fai un controllo nell'array con un ciclo for e a seconda dell'esito scrivi un messaggio
for (let mail = 0; mail < mails.length; mail++) {
    const element = mails[mail];
    console.log(element);
    if (element == 'evilmarkus@hotmail.it') {
        alert('La mail è valida');
    } else if (element == 'momylove@gmail.com') {
        alert('La mail è valida');
    } else {
        alert('La mail non risulta valida');
    }
}

// Gioco dei dadi

/* Consegna */

/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* Istruzioni */

// Realizziamo un array da 1 a 6
/* const numbers = [1, 2, 3, 4, 5, 6]; */
// Generiamo due variabili con numero casuale, una per il giocatore, una per il computer
/* const player = Math.floor(Math.random() *6);
console.log(randomNumber)
const cpu = Math.floor(Math.random() *6); */
// Con un ciclo for verifichiamo l'array
/* for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);  
} */

// All'interno del ciclo for creiamo un ciclo if
// Se un punteggio è maggiore dell'altro vince
// Stampiamo il risultato in console
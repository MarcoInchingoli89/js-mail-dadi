// Mail

/* Consegna */

/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

/* Istruzioni */

// Chiedi all'utente la mail usando prompt
const mail = prompt ('Inserisci una mail');
/* console.log(mail); */
// Crea un array di mail di cui una o due saranno valide per l'accesso
const mails = ['topolino@redisney.com', 'eccopippo@gambadilegno.com', 'paperino@paperopoli.com', 'evilmarkus@hotmail.it', 'momylove0612@gmail.com'];
// Fai un controllo nell'array con un ciclo for e a seconda dell'esito scrivi un messaggio
for (let mail = 0; mail < mails.length; mail++) {
    const element = mails[mail];
    console.log(element);
    if (element == 'evilmarkus@hotmail.it') {
        alert('La mail è valida');
    } else if (element == 'momylove0612@gmail.com') {
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
// Con un ciclo for verifichiamo l'array
// Generiamo due variabili, una per il giocatore, una per il computer
// All'interno del ciclo for creiamo un ciclo if
// Se un punteggio è maggiore dell'altro vince
// Stampiamo il risultato in console
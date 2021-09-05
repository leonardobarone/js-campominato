// Funzione random tra 2 numeri min & max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.


// Minimo di controllo
while (isNaN(numeroDiCelle)) {
    var numeroDiCelle = parseInt(prompt("INSERISCI UN NUMERO DI CELLE TRA 50/80/100"));
}

// FALSE ||  
while ( isNaN(numeroDiCelle)) {
    var numeroDiCelle = parseInt(prompt("INSERISCI UN NUMERO DI CELLE TRA 50/80/100"));
}

// variabili di base
var nCelle;

if (numeroDiCelle == 50) {
    nCelle = 50; 
} else if (numeroDiCelle == 80) {
    nCelle = 80;
} else if (numeroDiCelle == 100) {
    nCelle = 100;
}

var nBombe = 16;
var possibilita = nCelle - nBombe;

// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function disegnaTabella(num) {
    
    for (var i = 1; i <= num; i++) {
        document.getElementById("campo-da-gioco").innerHTML += `<div class="quadrato">${i}</div>`
    }

}
disegnaTabella(numeroDiCelle)

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

var campoDaGioco = document.getElementById("campo-da-gioco");


// dato l'array e l'elemento da cercare, restituisce true se l'elemento è presente altrimenti false
function inArray(arr, el) {
    
    var count = 0;
   
    while (count < arr.length) {
        if (arr[count] == el) {
            return true;
        }
        count++
    }
    return false;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
var bombe = [];
// I numeri non possono essere duplicati.


while ( bombe.length < nBombe) {

    var n = random(1, nCelle);

    if ( inArray(bombe, n) == false) {
        bombe.push(n);  
    }
}

console.log(bombe)

var numeriValidi = []; 

campoDaGioco.addEventListener("click",
    function(event) {

        event.target.classList.add("cliccato");
        var numeroCliccato = parseInt(event.target.innerHTML);

        if ( inArray(bombe, numeroCliccato) == true) {
            alert("HAI PERSO! il tuo punteggio è: " + numeriValidi.length);
            location.reload();
            event.target.classList.add("rosso")
        }  else if (inArray(numeriValidi, numeroCliccato)==true) {
            alert("HAI GIA' CLICCATO SU QUESTO NUMERO");
        } else {
            numeriValidi.push(numeroCliccato);
            event.target.classList.add("verde")
            if (numeriValidi.length == (possibilita)) {
                alert("BRAVISSIMO HAI VINTO IL GIOCO");
            }
        }

        
    }
); 

// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50





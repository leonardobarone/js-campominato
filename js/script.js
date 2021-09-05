// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
var numeroDiCelle = parseInt(prompt("Inserisci il numero di celle di cui sarà composto il campo da gioco."));

// Minimo di controllo
while (isNaN(numeroDiCelle)) {
    var numeroDiCelle = parseInt(prompt("INSERISCI UN NUMERO"));
}

// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function disegnaTabella(num) {
    
    for (var i = 1; i <= num; i++) {
        document.getElementById("campo-da-gioco").innerHTML += `<div class="quadrato">${i}</div>`
    }

}
disegnaTabella(numeroDiCelle);

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

var campoDaGioco = document.getElementById("campo-da-gioco");

campoDaGioco.addEventListener("click",
    function(event) {

        if (event.target.classList.value == "quadrato") {
            event.target.classList.add("rosso");
            alert(event.target.innerHTML);
        } else {
            event.target.classList.remove("rosso");
        }
        
    }
); 
// dato l'array e l'elemento da cercare, restituisce true se l'elemento è presente altrimenti false
function inArray(arr, el) {
    
    var count = 0;
   
    while (count < arr.length && trovato == false) {
        if (arr[count] == el) {
            return true;
        }
        count++
    }
    return false;
}
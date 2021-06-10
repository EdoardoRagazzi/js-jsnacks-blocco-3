// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
// 3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// // 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.
//----------ESERCIZIO 1-----------//
var indiceA = parseInt(prompt('inserisci numero'));
var indiceB = parseInt(prompt('inserisci numero'));

var arrayNew = nuovoArray(array, indiceA, indiceB);
console.log(arrayNew);

function nuovoArray(array, min, max) {
    newArray = [];
    for (var i = min - 1; i < max; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};
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

//-----------ESERCIZIO 2--------------//

var primaParola = prompt('inserisci parola');
var secondaParola = prompt('inserisci parola');
var parola = lunghezza(primaParola, secondaParola);


function lunghezza(prima, seconda) {
    switch (parola) {
        case (primaParola.length == secondaParola.length):
            document.getElementById('parola').innerHTML = primaParola + ' ' + secondaParola;
            break;
        case (primaParola.length > secondaParola.length):
            document.getElementById('parola').innerHTML = primaParola;
            break;
        case (primaParola.length < secondaParola.length):
            document.getElementById('parola').innerHTML = secondaParola;
            break;
    }
};

//--------ESERCIZIO 3---------//
//---Creiamo due array---//
var primoArray = generaArray(3);
var secondoArray = generaArray(3);
// console.Log per visualizzare gli Array creati
console.log(primoArray);
console.log(secondoArray);

//  nome della funzione
var mixArray = doubleArray(primoArray, secondoArray);
console.log(mixArray);

//-----FUNCTIONS----//
function doubleArray(x, y) {
    var mixArray = [];
    for (var i = 0; i < x.length; i++) {
        mixArray.push(x[i]) + mixArray.push(y[i])
    }
    return mixArray;

}

function generaArray(longArray) {
    var array = [];
    while (array.length < longArray) {
        var numeroRandom = Math.floor(Math.random() * 10);
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
};

//-------ESERCIZIO 4-------//

var parola = prompt('Inserisci parola');

function capitalize(str) {
    var lettera = str[0];
    lettera = lettera.toUpperCase();
    str = str.substring(1).toLowerCase();
    str = lettera + str;
    console.log(str);
    return str;
}
console.log(capitalize(parola));

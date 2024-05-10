/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 1: ");
const pets = ["dog", "cat", "hamster", "redfish"];
let i = 0;
while (i < pets.length) {
  console.log(pets[i]);
  i++;
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2: ");
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3: ");

console.log(pets.reverse());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4: ");
const primoUltimo = () => {
  primoElemento = pets.shift(0);
  pets.push(primoElemento);
};
primoUltimo();
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
console.log("ESERCIZIO 5: ");
for (i = 0; i < cars.length; i++) {
  licensePlate = "asd";
  cars[i].licensePlate = "asd";
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6: ");
const audi = {
  brand: "Audi",
  model: "A3",
  color: "black",
  trims: ["sportback", "S-line"],
  licensePlate: "asd",
};
cars.push(audi);
console.log(cars);
for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
  console.log(cars[i].brand, "trims: ", cars[i].trims);
}
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7: ");
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8: ");
for (i = 0; i < cars.length; i++) {
  cars[i].color[0] === "b" ? console.log("Fizz") : console.log("Buzz");
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9: ");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let x = 0;
while (numericArray[x] !== 32) {
  console.log(numericArray[x]);
  x++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10: ");
//senza switch alfabeto latino
const charactersArray = ["g", "n", "u", "z", "d", "g", "M", "c"];
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const numbersArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  for (y = 0; y < alfabeto.length; y++) {
    if (charactersArray[i].toUpperCase() === alfabeto[y]) {
      numbersArray.push(y + 1);
    }
  }
}
console.log(numbersArray);

// con switch
const switchNumbersArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i].toUpperCase()) {
    case "A":
      switchNumbersArray.push(1);
      break;
    case "B":
      switchNumbersArray.push(2);
      break;
    case "C":
      switchNumbersArray.push(3);
      break;
    case "D":
      switchNumbersArray.push(4);
      break;
    case "E":
      switchNumbersArray.push(5);
      break;
    case "F":
      switchNumbersArray.push(6);
      break;
    case "G":
      switchNumbersArray.push(7);
      break;
    case "H":
      switchNumbersArray.push(8);
      break;
    case "I":
      switchNumbersArray.push(9);
      break;
    case "L":
      switchNumbersArray.push(10);
      break;
    case "M":
      switchNumbersArray.push(11);
      break;
    case "N":
      switchNumbersArray.push(12);
      break;
    case "O":
      switchNumbersArray.push(13);
      break;
    case "P":
      switchNumbersArray.push(14);
      break;
    case "Q":
      switchNumbersArray.push(15);
      break;
    case "R":
      switchNumbersArray.push(16);
      break;
    case "S":
      switchNumbersArray.push(17);
      break;
    case "T":
      switchNumbersArray.push(18);
      break;
    case "U":
      switchNumbersArray.push(19);
      break;
    case "V":
      switchNumbersArray.push(20);
      break;
    case "Z":
      switchNumbersArray.push(21);
      break;
  }
}
console.log(switchNumbersArray);

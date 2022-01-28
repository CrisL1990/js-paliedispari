//Serve a memorizzare se utente sceglie pari o dispari
let oddEven = "";

//Serve a memorizzare la scelta di pari o dispari
let choice = "";

//Crea una variabile che immagazzina il valore del numero scelto dall' utente
let playerNumber;

//Permette all'utente di scegliere pari o dispari escludendo altri valori
do{
    choice = prompt("Digita 0 per scegliere pari \nDigita 1 per scegliere dispari")
}while((choice != "0") && (choice != "1"))


//Se utente preme 0 sceglie pari, se preme 1 sceglie dispari
if(choice == "0"){
    oddEven = "Even"
}
else if(choice == "1"){
    oddEven = "Odd"
}

// Permette all'utente di scegliere un numero da 1 a 5 escludendo altri valori
do{
    playerNumber = parseInt(prompt("Scegli un numero da 1 a 5: "))
}while(isNaN(playerNumber) || (playerNumber < 0 || playerNumber > 5))


//Permette al computer di scegliere un numero random da 1 a 5
let computerNumber = Math.floor(Math.random()*5) + 1;

// Esegue la somma dei 2 numeri
let sum = playerNumber + computerNumber;

//Questa funzione compara la scelta di pari o dispari dell'utente con la somma dei 2 numeri
//Se la scelta di pari o dispari coincide con il numero della somma vince l'utente, altrimenti vince il computer
function oddEvenGame(number){
    
    //Immagazzina il valore pari o dispari della somma
    let oddOrEven = ""

    //Setta il valore del vincitore a false
    let winner = false

    //Se il numero passato come argomento è pari oddOrEven è = a Even, altrimenti è = a Odd
    if(number % 2 == 0){
        oddOrEven = "Even"
    }
    else{
        oddOrEven = "Odd"
    }

    //Confronta scelta di pari o  dispari dell'utente con pari o dispari della somma dei 2 numeri
    if(oddEven == oddOrEven){
        winner = true;
    }
    else{
        winner = false;
    }

    //Ritorna vero se vince utente e falso se vince computer
    return winner
}

console.log("Hai scelto " + oddEven);
console.log("Il tuo numero è " + playerNumber);
console.log("Il numero del computer è " + computerNumber);
console.log("La somma dei 2 numeri è " + sum);

//Richiama la funzione
let game = oddEvenGame(sum)

//Decreta vincitore
if(game == true){
    alert("Hai vinto");
}
else{
    alert("Hai perso");
}





//Legge la parola inserita dal utente
let word = prompt("Inserisci una parola: ");


//Questa funzione calcola se un aparola è palindroma o no
function isPalindrome(word){

    //Trasforma la parola in lowercase in modo da evitare problemi di cnfronto tra maiuscole e minuscole
    let lowerWord = word.toLowerCase()

    //Setta la condizione di ritorno0
    let palindrome = false

    //Crea una lista che conterrà le lettere di word
    let list1 = [];
    
    //Questo ciclo inserisce le lettere in minuscolo di lowerWord in list1
    for(let i = 0; i < lowerWord.length; i++){
        list1.push(lowerWord[i]);
    }

    //Copia il contenuto di list1 in list2 e ne inverte l'ordine
    let list2 = [...list1];
    list2.reverse();

    //Questo ciclo confronta list1 e list2 per determinare se il contenuto delle due liste è uguale.
    //Se uguale la parola è palindroma altrimenti no
    for(i = 0; i<list1.length; i++){
        if(list1[i] == list2[i]){
            palindrome = true
        }
        else{
            palindrome = false
        }
    }
   
    //Ritorna vero o falso
    return palindrome;
}

//Richiama la funzione
lista = isPalindrome(word)

//Se lista è vera la parola è palindroma
//Se lista è falsa la parola non è palindroma
if(lista == true){
    alert("La parola è palindroma")
}
else{
    alert("La parola non è palindroma")
}
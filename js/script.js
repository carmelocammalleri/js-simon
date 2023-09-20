//1. richiamare gli elementi di html nello script
const title = document.getElementById('title')
const containerGame = document.querySelector('.container');

//costanti random
const numberExtraction = 5;
const max = 99;
const numbers = random();

//variabili timing function
let counter = 0;
time()

//ULTIMO stampare messaggio gioco
// title.innerHTML = 'Complimenti/Mi dispiace' 

//2. creare un elemento dove far apparire i numeri randomici

const numbersContainer = document.createElement ('div');
numbersContainer.innerHTML= `${numbers}` ;
containerGame.append(numbersContainer);

console.log(numbersContainer);

console.log(numbers);

//3. funzione per i numeri random
function random (){
  const numbersList= [];

  while (numbersList.length<numberExtraction){
    const number = Math.ceil(Math.random()*max)
    //pusho solo se il numero non è presente
    if(!numbersList.includes(number)) numbersList.push(number);
  }
  return numbersList;
}

//4. generare intervallo di tempo per far scomparire i numeri randomizzati
function time(){
 setTimeout(function(){
  numbersContainer.innerHTML= ' ';
},5000)

  setTimeout(function(){
   promptNumber()
 },5500)
}

//5.prompt generatore

function promptNumber(){
  const number1= prompt('inserisci un numero');
  const number2= prompt('inserisci un numero');
  const number3= prompt('inserisci un numero');
  const number4= prompt('inserisci un numero');
  const number5= prompt('inserisci un numero');
}

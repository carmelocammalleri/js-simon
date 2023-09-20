//1. richiamare gli elementi di html nello script
const title = document.getElementById('title')
const containerGame = document.querySelector('.container');

//costanti random
const numberExtraction = 5;
const max = 99;
const numbers = random();

//variabili timing function
let counter = 0;
let limit = 25;

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
function remove(){
  const timeRemove = setInterval(function(){
    counter++;

  })
}






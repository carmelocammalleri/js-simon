//1. richiamare gli elementi di html nello script
const title = document.getElementById('title')
const containerGame = document.querySelector('.container');

//ULTIMO stampare messaggio gioco
// title.innerHTML = 'Complimenti/Scarso' 

//2. creare un elemento dove far apparire i numeri randomici

const numbersContainer = document.createElement ('div');
numbersContainer.innerHTML= '1 2 3 4 5'
containerGame.append(numbersContainer);

console.log(numbersContainer);

const numberExtraction = 5;
const max = 100;
const numbers = random();
//3. funzione per i numeri random

console.log(numbers);

function random (){
  const numbersList= [];

  while (numbersList.length<numberExtraction){
    const number = Math.ceil(Math.random()*max)
    //pusho solo se il numero non è presente
    if(!numbersList.includes(number)) numbersList.push(number);
  }
  return numbersList;
}





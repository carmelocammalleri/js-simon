//1. richiamare gli elementi di html nello script
const title = document.getElementById('title')
const containerGame = document.querySelector('.container');

//ULTIMO stampare messaggio gioco
// title.innerHTML = 'Complimenti/Scarso' 

//2. creare un elemento dove far apparire i numeri randomici

const numbersContainer = document.createElement ('div');
containerGame.append(numbersContainer);

console.log(numbersContainer);






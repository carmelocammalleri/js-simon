//1. richiamare gli elementi di html nello script
const title = document.getElementById('title')
const containerGame = document.querySelector('.container');

const number = [];
//ULTIMO stampare messaggio gioco
// title.innerHTML = 'Complimenti/Scarso' 

//2. creare un elemento dove far apparire i numeri randomici

const numbersContainer = document.createElement ('div');
numbersContainer.innerHTML= '1 2 3 4 5'
containerGame.append(numbersContainer);

console.log(numbersContainer);

//3. funzione per i numeri random






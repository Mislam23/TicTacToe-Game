/*
add all the combinations for winners of x and o
then at the top or end of the tictactoe board leave a page reload button for ties
this way an alert is only given for winners
ties have to be manually reloaded or if it goes through all the code here, give a tie alert and refresh the page
its ok this is your capacity at the moment, u will get better if you keep at it all
*/

let x = true;

//function below didn't work for me...
// function combo(a, b, c){
//   if(a.innerText === "X" && b.innerText === "X" && c.innerText === "X"){
//     alert("Player X Wins");
//     window.location.reload();
// }
// combo(counter1,counter2,counter3)

let forTies = 0;
//didn't work


// TOP LEFT
let counter1 = document.getElementById("counter1");
// let counter = document.getElementByClassName('row1').getElementsById('counter') 
// didn't work so I had to make it individually

let button1 = document.getElementById("button-tl");
// let button = document.getElementByClassName('row1').getElementsById('button-tl')

button1.addEventListener("click", () => {
  if(x) {
    counter1.innerText = "X";
    button1.disabled = true;
    forTies += 1;
  } else {
    counter1.innerText = "O"
    button1.disabled = true;
    forTies += 1;
  }
  x = !x;
  if(counter1.innerText === "X" && counter2.innerText === "X" && counter3.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter1.innerText === "X" && counter4.innerText === "X" && counter7.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter1.innerText === "X" && counter5.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  } 

  if(counter1.innerText === "O" && counter2.innerText === "O" && counter3.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter1.innerText === "O" && counter4.innerText === "O" && counter7.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter1.innerText === "O" && counter5.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// TOP MID
let counter2 = document.getElementById("counter2");
let button2 = document.getElementById("button-tm");

button2.addEventListener("click", () => {
  if(x) {
    counter2.innerText = "X";
    button2.disabled = true;
    forTies++;
  } else {
    counter2.innerText = "O";
    button2.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter2.innerText === "X" && counter1.innerText === "X" && counter3.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter2.innerText === "X" && counter5.innerText === "X" && counter8.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter2.innerText === "O" && counter1.innerText === "O" && counter3.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter2.innerText === "O" && counter5.innerText === "O" && counter8.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// TOP RIGHT
let counter3 = document.getElementById("counter3");
let button3 = document.getElementById("button-tr");

button3.addEventListener("click", () => {
  if(x) {
    counter3.innerText = "X";
    button3.disabled = true;
    forTies++;
  } else {
    counter3.innerText = "O";
    button3.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter3.innerText === "X" && counter2.innerText === "X" && counter1.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter3.innerText === "X" && counter6.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter3.innerText === "X" && counter5.innerText === "X" && counter7.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter3.innerText === "O" && counter2.innerText === "O" && counter1.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter3.innerText === "O" && counter6.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter3.innerText === "O" && counter5.innerText === "O" && counter7.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// MID LEFT
let counter4 = document.getElementById("counter4");
let button4 = document.getElementById("button-ml");

button4.addEventListener("click", () => {
  if(x) {
    counter4.innerText = "X";
    button4.disabled = true;
    forTies++;
  } else {
    counter4.innerText = "O";
    button4.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter4.innerText === "X" && counter1.innerText === "X" && counter7.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter4.innerText === "X" && counter5.innerText === "X" && counter6.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter4.innerText === "O" && counter1.innerText === "O" && counter7.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter4.innerText === "O" && counter5.innerText === "O" && counter6.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// MID MID
let counter5 = document.getElementById("counter5");
let button5 = document.getElementById("button-mm");

button5.addEventListener("click", () => {
  if(x) {
    counter5.innerText = "X";
    button5.disabled = true;
    forTies++;
  } else {
    counter5.innerText = "O";
    button5.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter5.innerText === "X" && counter1.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter5.innerText === "X" && counter3.innerText === "X" && counter7.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter5.innerText === "X" && counter2.innerText === "X" && counter8.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter5.innerText === "X" && counter4.innerText === "X" && counter6.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  } 

  if(counter5.innerText === "O" && counter1.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter5.innerText === "O" && counter3.innerText === "O" && counter7.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter5.innerText === "O" && counter2.innerText === "O" && counter8.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter5.innerText === "O" && counter4.innerText === "O" && counter6.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// MID RIGHT
let counter6 = document.getElementById("counter6");
let button6 = document.getElementById("button-mr");

button6.addEventListener("click", () => {
  if(x) {
    counter6.innerText = "X";
    button6.disabled = true;
    forTies++;
  } else {
    counter6.innerText = "O";
    button6.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter6.innerText === "X" && counter3.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter6.innerText === "X" && counter4.innerText === "X" && counter5.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter6.innerText === "O" && counter3.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter6.innerText === "O" && counter4.innerText === "O" && counter5.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// BOTTOM LEFT
let counter7 = document.getElementById("counter7");
let button7 = document.getElementById("button-bl");

button7.addEventListener("click", () => {
  if(x) {
    counter7.innerText = "X";
    button7.disabled = true;
    forTies++;
  } else {
    counter7.innerText = "O";
    button7.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter7.innerText === "X" && counter1.innerText === "X" && counter4.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter7.innerText === "X" && counter8.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter7.innerText === "X" && counter3.innerText === "X" && counter5.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  } 

  if(counter7.innerText === "O" && counter1.innerText === "O" && counter4.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter7.innerText === "O" && counter8.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter7.innerText === "O" && counter3.innerText === "O" && counter5.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// BOTTOM MID
let counter8 = document.getElementById("counter8");
let button8 = document.getElementById("button-bm");

button8.addEventListener("click", () => {
  if(x) {
    counter8.innerText = "X";
    button8.disabled = true;
    forTies++;
  } else {
    counter8.innerText = "O";
    button8.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter8.innerText === "X" && counter6.innerText === "X" && counter9.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter8.innerText === "X" && counter2.innerText === "X" && counter5.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter8.innerText === "O" && counter6.innerText === "O" && counter9.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter8.innerText === "O" && counter2.innerText === "O" && counter5.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// BOTTOM RIGHT
let counter9 = document.getElementById("counter9");
let button9 = document.getElementById("button-br");

button9.addEventListener("click", () => {
  if(x) {
    counter9.innerText = "X";
    button9.disabled = true;
    forTies++;
  } else {
    counter9.innerText = "O";
    button9.disabled = true;
    forTies++;
  }
  x = !x;
  if(counter9.innerText === "X" && counter7.innerText === "X" && counter8.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter9.innerText === "X" && counter3.innerText === "X" && counter6.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }
  if(counter9.innerText === "X" && counter1.innerText === "X" && counter5.innerText === "X"){
    alert("Player X Wins");
    window.location.reload();
  }

  if(counter9.innerText === "O" && counter7.innerText === "O" && counter8.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter9.innerText === "O" && counter3.innerText === "O" && counter6.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
  if(counter9.innerText === "O" && counter1.innerText === "O" && counter5.innerText === "O"){
    alert("Player O Wins");
    window.location.reload();
  }
})


// ALIGN COUNTERS
let arrayOfTiles = [counter1, counter2, counter3, counter4, counter5, counter6, counter7, counter8, counter9];
arrayOfTiles.forEach( el => {
  el.style.textAlign = "center";
})


// TIES
// doesn't work
// if(forTies === 9) {
//   alert("It's a tie!");
//   window.location.reload();
// }
let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  window.location.reload();
})


// DISABLE ALL BUTTONS
// let allButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9]
// function disableButtons(allButtons){
//   allButtons.forEach(button => {
//     button.disabled = true;
//   })
// }

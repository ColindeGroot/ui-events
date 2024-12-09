/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let rotateLink = document.querySelector("a[href='#frontend']");

// Stap 2: addEventListener
// bibberLink.addEventListener...
rotateLink.addEventListener('dblclick', rotateFunction)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function rotateFunction() {
  rotateLink.classList.toggle('rotate')
}

//button 2 (onhover)
let moveLink = document.querySelector("a[href='#design']");

moveLink.addEventListener('mouseover', moveFunction)

function moveFunction() {
  moveLink.classList.toggle('move')
}


//button 3 (focus)
let focus = document.querySelector("a[href='#and']");

focus.addEventListener('focus', dissapear)
focus.addEventListener('focusout', reapear)

function dissapear() {
  focus.classList.add('focus')
}

function reapear() {
  focus.classList.remove('focus')
}

// button 4 (background animation)
let bgAnimation = document.querySelector("a[href='#development']");

bgAnimation.addEventListener('click', playAnimation)

function playAnimation() {
  bgAnimation.classList.toggle("bgAnimation")
}

//button 5
// querySelector('span') -> .textContent

let counterButton = document.querySelector("a[href='#sprint-5']");
let countElement = document.querySelector("#count");

let count = parseInt(countElement.textContent);

counterButton.addEventListener('keyup', (event) => {
  if (event.key === "ArrowUp") { 
    count += 1;
    countElement.textContent = count;
  } 
  else if (event.key === "ArrowDown") {
    count -= 1;
    countElement.textContent = count;
  }

  });


// button 6 



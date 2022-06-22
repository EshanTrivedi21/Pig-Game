'use strict';



// CREATING IMAGES ARRAY //
const images = ["images/dice-1.png", "images/dice-2.png", "images/dice-3.png", "images/dice-4.png", "images/dice-5.png", "images/dice-6.png"]

// CREATING SELECTOR VARIABLES //
const diceElement = document.querySelector(".dice");

const score_0_Element = document.getElementById("score--0");
const score_1_Element = document.getElementById("score--1");

const current_0_Element = document.getElementById("current--0");
const current_1_Element = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// CREATING RANDOM STARTING PLAYER //
let startingChance = Math.trunc(Math.random() * 2);
let switchChance = startingChance === 0 ? 1 : 0;

let startingPlayer = document.querySelector(`.player--${startingChance}`).classList.add("player--active");

// SETTING STARTING VALUES //
let totalScore = 0;
let currentScore = 0;
score_0_Element.textContent = totalScore;
current_0_Element.textContent = currentScore;



// ROLL BUTTON FUNCTIONALITIES  //
btnRoll.addEventListener(

    "click", function() {

        const diceValue = Math.trunc((Math.random() * 6) + 1);
        diceElement.src = images[diceValue - 1];

        if(diceValue !== 1) {

            currentScore = currentScore + diceValue;
            document.getElementById(`current--${startingChance}`).textContent = currentScore;

        } else {

            currentScore = 0;
            document.getElementById(`current--${startingChance}`).textContent = currentScore;

            startingPlayer = document.querySelector(`.player--${startingChance}`).classList.remove("player--active");
            let switchPlayer = document.querySelector(`.player--${switchChance}`).classList.add("player--active");

        }

    }
);



// HOLD BUTTON FUNCTIONALITIES  //
btnHold.addEventListener(

    "click", function() {
        
        document.getElementById(`score--${startingChance}`).textContent = currentScore;
        currentScore = 0;
        document.getElementById(`current--${startingChance}`).textContent = currentScore;

    }
);



// HOLD BUTTON FUNCTIONALITIES  //
btnNew.addEventListener(

    "click", function() {

        document.getElementById(`score--${startingChance}`).textContent = 0;
        document.getElementById(`current--${startingChance}`).textContent = 0;
        diceElement.src = "images/dice.png";

    }

)
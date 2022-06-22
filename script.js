'use strict';



// CREATING IMAGES ARRAY //
const images = ["images/dice-1.png", "images/dice-2.png", "images/dice-3.png", "images/dice-4.png", "images/dice-5.png", "images/dice-6.png"]

// CREATING SELECTOR VARIABLES //
const diceElement = document.querySelector(".dice");

const player_0_Element = document.querySelector(".player--0");
const player_1_Element = document.querySelector(".player--1");

const score_0_Element = document.getElementById("score--0");
const score_1_Element = document.getElementById("score--1");

const current_0_Element = document.getElementById("current--0");
const current_1_Element = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// INITIALIZATION FUNCTION//
const init = function(){

    playing = true;

    scores = [0, 0];
    currentScore = 0
    activePlayer = 0;

    score_0_Element.textContent = 0;
    score_1_Element.textContent = 0;

    current_0_Element.textContent = 0;
    current_1_Element.textContent = 0;

    player_0_Element.classList.add("player--active");
    player_1_Element.classList.remove("player--active");  
    
    player_0_Element.classList.remove("player--winner");
    player_1_Element.classList.remove("player--winner"); 

    player_0_Element.classList.remove("player--looser");
    player_1_Element.classList.remove("player--looser"); 

    diceElement.src = "images/dice.png";

}

init();

// SWITCH PLAYER FUNCTION  //
const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player_0_Element.classList.toggle("player--active");
    player_1_Element.classList.toggle("player--active");    
}


// ROLL BUTTON FUNCTIONALITIES  //
btnRoll.addEventListener(

    "click", function() {

        if (playing) {

            const diceValue = Math.trunc((Math.random() * 6) + 1);
            diceElement.src = images[diceValue - 1];

            if(diceValue !== 1) {

                currentScore = currentScore + diceValue;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            } else {

                switchPlayer();
                
            }

        }

    }
);

// HOLD BUTTON FUNCTIONALITIES  //
btnHold.addEventListener(

    "click", function() {
        
        if (playing) {

            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 

            if (scores[activePlayer] >= 50) {
                
                playing = false;
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
                activePlayer = activePlayer === 0 ? 1 : 0;
                document.querySelector(`.player--${activePlayer}`).classList.add("player--looser");
                diceElement.src = "images/dice.png";

            } else {

                switchPlayer();

            }

        }
    }
);

// REPLAY BUTTON FUNCTIONALITIES  //
btnNew.addEventListener(

    "click", init

)
'use strict';
const startBtn = document.getElementById("startBtn");
const game = document.getElementById("game");
let numbers = [
    1, 1,
    2, 2,
    3, 3,
    4, 4,
    5, 5,
    6, 6
];
let firstCard = null;
let secondCard = null;
startBtn.addEventListener("click", startGame);
function startGame() {
    game.innerHTML = "";
    firstCard = null;
    secondCard = null;
    shuffle(numbers);
    for (let i = 0; i < numbers.length; i++) {
        let card = document.createElement("button");
        card.innerText = "?";
        card.value = numbers[i];
        card.style.width = "80px";
        card.style.height = "80px";
        card.style.fontSize = "25px";
        card.addEventListener(
            "click",
            openCard
        );
        game.append(card);
    }
}
function openCard() {
    if (this.innerText != "?") {
        return;
    }
    this.innerText = this.value;
    if (firstCard == null) {
        firstCard = this;
    }
    else {

        secondCard = this;
        if (firstCard.value == secondCard.value
        ) {
            firstCard = null;
            secondCard = null;
        }
        else {
            setTimeout(closeCards, 500);
        }
    }
}
function closeCards() {
    firstCard.innerText = "?";
    secondCard.innerText = "?";
    firstCard = null;
    secondCard = null;
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
}
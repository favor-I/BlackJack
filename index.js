let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let len = cards.length
//let message = ""

//let messageEl = document.getElementById("message-el")
let messageEl = document.querySelector("#message-el")
//let cardChoiceEl = document.getElementById("card-choice-el")
let cardChoiceEl = document.querySelector("#card-choice-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let view = document.querySelector(".new-cards")
let newCardBtnEl = document.querySelector("#new-card-btn-el")




// ------------------fUNCTIONS------------
function getRandomCard() {
    return Math.floor((Math.random()*13))
    
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardChoiceEl.textContent = "Cards:"
    
    //cardChoiceEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2]
    for (let i = 0; i < len;  i++) {
        cardChoiceEl.textContent += cards[i] + " "
        view.textContent += cards
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game! 😭"
        isAlive = false
    }
}

function newCard() {
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()
    
    // 2. Add the new card to the sum variable
    sum += card
    //cards.push(thirdCard)
    cards.push(card)
    //view.textContent += card

    // 3. Call startGame()
    renderGame()
}

let player = {
    name:"Frank",
    chips: 423
}
let cards = []
let sum = 0
let message = " "
let hasBlackJack = false
let isAlive = false


let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")
let messageEl = document.querySelector("#message-el")

playerEl.textContent = player.name + ":  $"+player.chips

function getRandomCard() {
    let randomNumber = Math.floor (Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11 //'J'
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardEl.textContent += cards[index] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Do you wanna draw a card?"
    } else if(sum === 21) {
        messageEl.textContent = "You've got a blackJack"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game"
        isAlive = false
    }
    //messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        cards.push(card)
        sum += card
        renderGame()
    }

}

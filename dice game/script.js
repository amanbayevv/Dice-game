const rollBtn = document.querySelector('.btn--roll')
const diceImg = document.querySelector('.dice')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')


diceImg.style.display = 'none'

let currentScore = 0
let activePlayer = 0
let score = [0 , 0]
let gameOver = true



const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
    activePlayer = activePlayer === 0 ? 1 : 0
}


rollBtn.addEventListener('click', () => {
  if (gameOver)  {diceImg.style.display = 'block'

    const random = Math.floor(Math.random() * 6 + 1)

    diceImg.src = `./dice-${random}.png`

    if (random !== 1) {
    currentScore += random
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
    switchPlayer()
    }}
})
 
holdBtn.addEventListener('click', () => {
   if (gameOver) {score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

    if (score[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        gameOver = false
    } else {
      switchPlayer()
    }}


})

newBtn.addEventListener('click', () => {
    currentScore = 0
       score = [0 , 0]
       activePlayer = 0
     gameOver = true
     document.getElementById(`current--0`).textContent = 0
     document.getElementById(`current--1`).textContent = 0
     document.getElementById(`score--0`).textContent = 0
     document.getElementById(`score--1`).textContent = 0
     document.querySelector('.player--0').classList.remove('player--winner')
     document.querySelector('.player--1').classList.remove('player--winner')
     document.querySelector('.player--0').classList.add('player--active')
     document.querySelector('.player--1').classList.remove('player--active')




})
'use strict'
// const store = require('./store')
// const gameBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'
const boardArray = ['', '', '', '', '', '', '', '', '']

$('.box').click(function (event) {
  console.log('boardArray is ', boardArray)
  if ($(event.target).text()) {
    console.log('ALREADY SELECTED')
  } else {
    $(event.target).text(currentPlayer)
    checkWinner()
    updateArray()
    switchPlayer()
  }

  // Update the HTML board with the user's token X or
  // // check winner
  // if (checkWinner()) {
  //   console.log('fart is the winner')
  // } else{
  //   switchPlayer()
  // } // returns "X", "O", "Tie" or false
})

// target cell we click on to switch turns
const updateArray = function () {
  // Get the position of the board that the user clicked
  // position is saved on HTML data-index of element
  const position = $(event.target).data('index')

  console.log('boardArray[position] is: ', boardArray[position])
  console.log('currentPlayer is: ', currentPlayer)
  // Add player token to boardArray at the position they chose
  if (boardArray[position] === 'x' || boardArray[position] === 'o') {
    console.log('it was true')
  } else {
    boardArray[position] = currentPlayer
    console.log('boardArray[position] is', boardArray[position])
  }
}

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    console.log('x')
    currentPlayer = 'o'
    console.log('o')
  } else {
    currentPlayer = 'x'
  }
}

// check the board for a winner
// if all board spaces are taken then return "Tie"
// if nobody won yet then return false
const checkWinner = function () {
  // checks if winner 0, 1, 2
// x                x   = true              x
  if (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) {
    console.log('You win')
    return boardArray[0] // X or O

  // check if winner 3,4,5
  } else if ((boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) ||
           (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) ||
           (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) ||
           (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) ||
           (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) ||
           (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) ||
           (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6])) {
    console.log('you win!')
  } else {
    console.log('no one won and game continues')
  }
}

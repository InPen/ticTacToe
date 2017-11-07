'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const events = require('./auth/events')
// const gameLogic = require('assets/scripts/gameLogic')
$(() => {
  setAPIOrigin(location, config)
})
let currentPlayer = 'x'
const boardArray = ['', '', '', '', '', '', '', '', '']

$('.box').click(function (event) {
  console.log('boardArray is ', boardArray)
  if ($(event.target).text()) {
    console.log('click me')
  } else {
    $(event.target).text(currentPlayer)
    console.log('don/t click me')
  }

  // Update the HTML board with the user's token X or

  // Get the position of the board that the user clicked
  // position is saved on HTML data-index of element
  const position = $(event.target).data('index')

  console.log('boardArray[position] is: ', boardArray[position])
  console.log('currentPlayer is: ', currentPlayer)
  // Add player token to boardArray at the position they chose
  if (boardArray[position] === currentPlayer || boardArray[position] === currentPlayer) {
    console.log('it was true')
  } else {
    boardArray[position] = currentPlayer
    console.log('boardArray[position] is', boardArray[position])
  }
  // check winner
  if (checkWinner()) {
    console.log('fart is the winner')
  } else {
    switchPlayer()
  } // returns "X", "O", "Tie" or false
})

// target cell we click on to switch turns

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
// if we find a winner then return "X" or "O"
// if all board spaces are taken then return "Tie"
// if nobody won yet then return false
const checkWinner = function () {
  // checks if winner 0, 1, 2
// x                x   = true              x
  if (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) {
    return boardArray[0] // X or O

  // check if winner 3,4,5
  } else if ((boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) ||
           (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8])) {
    console.log('you win!')
  } else {
    console.log('no one won and game continues')
  }
}

// invoke function everytime the user clicks
// function that switches between x and o
// $( event.target );
//   if ( target.is( "li" ) ) {
//     target.children().toggle();
//   }
// }
// $(() => {
//   events.addHandlers()
// })

// $(() => {
//   gameLogic.addHandlers()
// })
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

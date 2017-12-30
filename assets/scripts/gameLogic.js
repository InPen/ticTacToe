'use strict'
const gameCrud = require('./gameCrud')
const store = require('./store')

const gameBoard = {
  board: {
    cell: {
      index: null,
      player: 'x'
    }
  }
}

const checkWinner = function (boardArray, player) {
  if (gameBoard.game.over === false) {
    if (// check for parallel wins
      (boardArray[0] === player && boardArray[3] === player && boardArray[6] === player) ||
      (boardArray[1] === player && boardArray[4] === player && boardArray[7] === player) ||
      (boardArray[2] === player && boardArray[5] === player && boardArray[8] === player) ||
    // check for horizontal wins
      (boardArray[0] === player && boardArray[1] === player && boardArray[2] === player) ||
      (boardArray[3] === player && boardArray[4] === player && boardArray[5] === player) ||
      (boardArray[6] === player && boardArray[7] === player && boardArray[8] === player) ||
    // check for cris cros wins
      (boardArray[0] === player && boardArray[4] === player && boardArray[8] === player) ||
      (boardArray[2] === player && boardArray[4] === player && boardArray[6] === player)) {
      $('#won-message').text('Player ' + 'Wins!')
      gameBoard.game.over = true
    }
  }
}
//   // checks if winner 0, 1, 2
// // x                x   = true              x
//   if  {
//     console.log('You win')
//     return boardArray[0] // X or O
//
//   // check if winner 3,4,5
//   } else  {
//     console.log('you win!')
//   } else {
//     console.log('no one won and game continues')
//   }
// }

// target cell we click on to switch turns
// const updateArray = function (event) {
//   if (gameBoard)
//   const position = $(event.target).data('index')
//
//   console.log('boardArray[position] is: ', boardArray[position])
//   console.log('currentPlayer is: ', currentPlayer)
//   // Add player token to boardArray at the position they chose
//   if (boardArray[position] === 'x' || boardArray[position] === 'o') {
//     console.log('it was true')
//   } else {
//     boardArray[position] = currentPlayer
//     console.log('boardArray[position] is', boardArray[position])
//   }
// }

module.exports = {
  gameBoard,
  checkWinner
  // updateArray,
  // switchPlayer
}

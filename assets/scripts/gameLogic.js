'use strict'
const gameCrud = require('./gameCrud')
const store = require('./store')

const boardArray = ['', '', '', '', '', '', '', '', '']
let numCell = 0
let player = 'x'

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
    if (// check for vertical wins
      (boardArray[0] === player && boardArray[3] === player && boardArray[6] === player) ||
      (boardArray[1] === player && boardArray[4] === player && boardArray[7] === player) ||
      (boardArray[2] === player && boardArray[5] === player && boardArray[8] === player) ||
    // check for horizontal wins
      (boardArray[0] === player && boardArray[1] === player && boardArray[2] === player) ||
      (boardArray[3] === player && boardArray[4] === player && boardArray[5] === player) ||
      (boardArray[6] === player && boardArray[7] === player && boardArray[8] === player) ||
    // check for diagonal wins
      (boardArray[0] === player && boardArray[4] === player && boardArray[8] === player) ||
      (boardArray[2] === player && boardArray[4] === player && boardArray[6] === player)) {
      $('#user-message').text('Player ' + 'Wins!')
      gameBoard.game.over = true
      gameCrud.updateGame(gameBoard)
    } else if (numCell === 9) {
      $('#user-message').text('D R A W')
      gameBoard.game.over = true
      gameCrud.updateGame(gameBoard)
    } else if (numCell % 2 === 0) {
      $('#user-message').text('x turn')
    } else if (numCell % 2 === 1) {
      $('#user-message').text('o turn')
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

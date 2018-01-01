'use strict'
const gameCrud = require('./gameCrud')
const gameUi = require('./gameUi')
const store = require('./store')

const board = ['', '', '', '', '', '', '', '', '']
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

const checkWinner = function (board, player) {
  if (gameBoard.game.over === false) {
    if (// check for vertical wins
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
    // check for horizontal wins
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
    // check for diagonal wins
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)) {
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

module.exports = {
  gameBoard,
  checkWinner
  // updateArray,
  // switchPlayer
}

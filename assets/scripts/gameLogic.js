'use strict'
const gameCrud = require('./gameCrud')
const gameUi = require('./gameUi')
const store = require('./store')


Before game starts:

  pick a first player
    - let currentPlayer = 'x'
  Define event handler
    - $('.box').click(function (event)

On each turn:

  Tell users whose turn it is
    - $('#player_display').text(current_player)
  Show user the board
    - html shown
  user selects a place to put symbol
    - wait for user to click

  check that space hasn't been taken
    - check if coordinate has value
      - $(event.target).text())
    - if yes
      - $('.error-box').text('that space has been taken')
    - if no (else):
      mark spaces
      updateDom()
        $(event.target).text(currentPlayer)
      check for win
      checkWinner()
        - compare spaces in all win conditions
        def vertical(board)
    $('#cellZero').text() == $('#cellFour').text() && $('#cellZero').text() == $('#cellEight').text() && $('#cellZero').text() !== '' ||

  end
        if win condition
          - tell user they won
          - end game
            $('.box').off('click')
      elseif check for draw
        - no empty spaces on board
        $('#cellZero').text() == '' || $('#cellFour').text() == ''
        if draw
          - tell the user it was a tie
          - game over:
            $('.box').off('click')
      else switch players
      switchPlayer()
      const switchPlayer = function () {
        if (currentPlayer === 'x') {
          console.log('x')
          currentPlayer = 'o'
          console.log('o')
        } else {
          currentPlayer = 'x'
        }
      }




// old game logic

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

module.exports = {
  gameBoard,
  checkWinner
  // updateArray,
  // switchPlayer
}

'use strict'
// use require with a reference to bundle the file and use it in this file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// How to properly require gameLogic???
// const gameLogic = require('./gameLogic')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  // gameLogic.addHandlers()
})

// Game Logic begins
let currentPlayer = 'x'
const board = ['', '', '', '', '', '', '', '', '']

// Mama function that sorta exports all other functions
// we need to name it and change how it's beind defined
// so we can call on it on our CRUD actions
$('.box').click(function (event) {
  console.log('board is ', board)
  if ($(event.target).text()) {
    console.log('ALREADY SELECTED')
  } else {
    $(event.target).text(currentPlayer)
    updateCell()
    checkWinner()
    switchPlayer()
  }
})

// target cell user clicks on to switch turns
const updateCell = function () {
  // Get the position of the board that the user clicked
  const position = $(event.target).data('index')
  // position is saved on HTML data-index of element
  console.log('currentPlayer is: ', currentPlayer)
  // Add player token to board at the position they chose
  if (board[position] === 'x' || board[position] === 'o') {
  } else {
    board[position] = currentPlayer
    // instead of using console, try to target cell using jquery
    console.log('board[position] is', board[position])
  }
}

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    // instead of using console, try to target cell using jquery
    console.log('x')
    currentPlayer = 'o'
    // instead of using console, try to target cell using jquery
    console.log('o')
  } else {
    currentPlayer = 'x'
  }
}

// check the board for a winner
const checkWinner = function () {
// x                x   = true              x
  if (// check for vertical wins
    (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
  (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
  (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
  // check for horizontal wins
  (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
  (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
  (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
  // check for diagonal wins
  (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
  (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)) {
    console.log('you win!')
    // end game
    $('.box').off('click')
  } else {
    // check for draws
    console.log('no one won and game continues')
  }
}

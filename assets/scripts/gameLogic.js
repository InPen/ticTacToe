'use strict'
const gameCrud = require('./gameCrud')
// const gameUi = require('./gameUi')
// const store = require('./store')

// Game Logic begins
let currentPlayer = 'x'
let count = 0
const board = ['', '', '', '', '', '', '', '', '']

let game = {
  gameId: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  over: false,
  currentPlayer: {
    currentPlayer: 'x',
    currentPlayerid: 0
  }
}

game.board[4] = currentPlayer
// Mama function that sorta exports all other functions
// we need to name it and change how it's beind defined
// so we can call on it on our CRUD actions
$('.box').on('click', function (event) {
  count++
  console.log('board is ', game.board)
  if ($(event.target).text()) {
    console.log('ALREADY SELECTED')
  } else {
    $(event.target).text(currentPlayer)
    // updateCell()
    checkWinner()
    switchPlayer()
  }
})

// $('.box').on('click', function () {
//   if (game.board === '') {
//     $('.box').text(currentPlayer)
//     game.board.splice(currentPlayer)
//     console.log(game.board)
//     checkWinner()
//     count++
//     gameDraw()
//     gameCrud.updateGame(0)
//     updateCell()
//     switchPlayer()
//   } else if (game.board !== '') {
//     console.log('ALREADY SELECTED')
//     $('#user-message').text('That space has already been taken')
//   } else {
//     $('#user-message').text('Press New Game button')
//   }
// })

// target cell user clicks on to switch turns
// const updateCell = function () {
//   // Get the position of the board that the user clicked
//   const position = $(event.target).data('index')
//   // position is saved on HTML data-index of element
//   console.log('currentPlayer is: ', currentPlayer)
//   // Add player token to board at the position they chose
//   if (board[position] === 'x' || board[position] === 'o') {
//   } else {
//     board[position] = currentPlayer
//     // instead of using console, try to target cell using jquery
//     console.log('board[position] is', board[position])
//   }
// }

const switchPlayer = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    console.log('x')
    // instead of using console, try to target cell using jquery
  } else {
    currentPlayer = 'x'
    console.log('o')
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
    game.over = true
    endGame()
    $('#won').text(currentPlayer + ' Won!')
    $('#user-message').text('Please press New Game button to continue playing')
    gameCrud.updateGame()
    // if all spaces have been taken and there is no win then it's a draw
  } else {
    game.over = true
    gameDraw()
    $('#won').text('It was a draw')
    $('#user-message').text('Please press New Game button to continue playing')
    gameCrud.updateGame()
  }
  // else {
  //   console.log('no one won and game continues')
  // }
}

const gameDraw = function () {
  if (count === 9) {
    console.log('DRAW function')
    game.over = true
    endGame()
  }
}

// const clearBoard = function () {
//   $('.gameboard').empty()
// }

const endGame = function () {
  if (game.over === true) {
    console.log('Game is over')
    game.board = ''
  }
}

const resetGame = function () {
  game = {
    gameId: 0,
    board: ['', '', '', '', '', '', '', '', ''],
    over: false,
    currentPlayer: {
      currentPlayer: 'x',
      currentPlayerid: 0
    }
  }
  $('.box').empty()
  $('.game-container').removeClass('hide')
  $('#won').empty()
  $('#user-message').empty()
  count = 0
  currentPlayer = 'x'
}
$('#new-game').on('click', resetGame)

'use strict'
// const gameCrud = require('./gameCrud')
// const gameUi = require('./gameUi')
// const store = require('./store')

// Game Logic begins
let count = 0

let game = {
  gameId: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  over: false,
  player: {
    currentPlayer: 'x',
    currentPlayerid: 0
  }
}

const switchPlayer = function () {
  if (game.player.currentPlayer === 'x') {
    game.player.currentPlayer = 'o'
    console.log('x')
    // instead of using console, try to target cell using jquery
  } else {
    game.player.currentPlayer = 'x'
    console.log('o')
  }
}

// Mama function that sorta exports all other functions
// we need to name it and change how it's beind defined
// so we can call on it on our CRUD actions
$('.box').on('click', function (event) {
  if (game.board[$(this).attr('data-index')] === '') {
    const swPlayer = switchPlayer()
    count++
    checkWinner()
    // here is where array is receiving x or o value
    game.board[$(this).attr('data-index')] = swPlayer
    console.log(' is ' + game.player.currentPlayer)
    console.log('board is ', game.board)

    $(event.target).text(swPlayer)
    // updateCell()
  } else {
    console.log('ALREADY SELECTED')
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

// check the board for a winner
const checkWinner = function () {
  console.log('checking for wins')
  console.log('player:' + game.player.currentPlayer)
  // x                x   = true              x
  if (// check for vertical wins
    (game.board[0] === game.player.currentPlayer && game.board[3] === game.player.currentPlayer && game.board[6] === game.player.currentPlayer) ||
  (game.board[1] === game.player.currentPlayer && game.board[4] === game.player.currentPlayer && game.board[7] === game.player.currentPlayer) ||
  (game.board[2] === game.player.currentPlayer && game.board[5] === game.player.currentPlayer && game.board[8] === game.player.currentPlayer) ||
  // check for horizontal wins
  (game.board[0] === game.player.currentPlayer && game.board[1] === game.player.currentPlayer && game.board[2] === game.player.currentPlayer) ||
  (game.board[3] === game.player.currentPlayer && game.board[4] === game.player.currentPlayer && game.board[5] === game.player.currentPlayer) ||
  (game.board[6] === game.player.currentPlayer && game.board[7] === game.player.currentPlayer && game.board[8] === game.player.currentPlayer) ||
  // check for diagonal wins
  (game.board[0] === game.player.currentPlayer && game.board[4] === game.player.currentPlayer && game.board[8] === game.player.currentPlayer) ||
  (game.board[2] === game.player.currentPlayer && game.board[4] === game.player.currentPlayer && game.board[6] === game.player.currentPlayer)) {
    game.over = true
    $('#won').text(game.player.currentPlayer + ' Won!')
    $('#user-message').text('Please press New Game button to continue playing')
    endGame()
    // gameCrud.updateGame()
    // if all spaces have been taken and there is no win then it's a draw
  } else {
    game.over = true
    gameDraw()
    $('#won').text('It was a draw')
    $('#user-message').text('Please press New Game button to continue playing')
    // gameCrud.updateGame()
  }
  // else {
  //   console.log('no one won and game continues')
  // }
}

const gameDraw = function () {
  if (count === 9) {
    console.log('DRAW function')
    game.over = true
  }
}

// const clearBoard = function () {
//   $('.gameboard').empty()
// }

const endGame = function () {
  if (game.over === true) {
    console.log('Game is over')
    game.board = []
  }
}

const resetGame = function () {
  game = {
    gameId: 0,
    board: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player: {
      currentPlayer: 'x',
      currentPlayerid: 0
    }
  }
  $('.box').empty()
  $('.game-container').removeClass('hide')
  $('#won').empty()
  $('#user-message').empty()
  count = 0
  game.player.currentPlayer = 'x'
}
$('#new-game').on('click', resetGame)

// module.exports {
//   endGame
// }

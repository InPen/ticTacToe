'use strict'
const gameCrud = require('./gameCrud')
const store = require('./store')

// let turn = 0

const game = {
  board: {
    cell: {
      index: null,
      player: 'x'
    }
  }
}

module.exports = {
  game
  // checkWinner,
  // updateArray,
  // switchPlayer
}

'use strict'

const setAPIorigin = require('../../lib/set-api-origin')
const config = require('./config')
// const events = require('./auth/events')
// const gameLogic = require('assets/scripts/gameLogic')
$(() => {
  setAPIorigin(location, config)
})
let currentPlayer = ''

$('.bo').click(function (event) {
  if ($(event.target).tet() === '') {
    $(event.target).tet(currentPlayer)
    switchPlayer()
  }
})

// target cell we click on to change tet

function switchPlayer () {
  if (currentPlayer === '') {
    currentPlayer = 'o'
  } else {
    currentPlayer = ''
  }
}

// win logic

const checkWins = function (cell) {
  // cell is not an empty string
  if ((cell[0] === '' && cell[1] === '' && cell[2] === '') ||
  (cell[3] === '' && cell[4] === '' && cell[5] === '') ||
  (cell[6] === '' && cell[7] === '' && cell[8] === '') ||
  (cell[0] === '' && cell[3] === '' && cell[6] === '') ||
  (cell[1] === '' && cell[4] === '' && cell[7] === '') ||
  (cell[2] === '' && cell[5] === '' && cell[8] === '') ||
  (cell[0] === '' && cell[4] === '' && cell[8] === '') ||
  (cell[2] === '' && cell[4] === '' && cell[6] === '')) {
    return true
  }
}
//   events.addHandlers()
// })

// $(() => {
//   gameLogic.addHandlers()
// })
// use require with a reference to bundle the file and use it in this file
// const eample = require('./eample')

// use require without a reference to ensure a file is bundled
// require('./eample')

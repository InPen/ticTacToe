'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const events = require('./auth/events')
// const gameLogic = require('assets/scripts/gameLogic')
$(() => {
  setAPIOrigin(location, config)
})
let currentPlayer = 'x'

$('.box').click(function (event) {
  $(event.target).text()
  console.log($(event.target).text())
  $(event.target).text(currentPlayer)
  switchPlayer()
})

// target cell we click on to change text

function switchPlayer () {
  if (currentPlayer === 'x') {
    console.log('hi')
    currentPlayer = 'o'
    console.log('bye')
  } else {
    currentPlayer = 'x'
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

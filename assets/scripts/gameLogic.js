'use strict'
// const store = require('./store')
// const gameBoard = ['', '', '', '', '', '', '', '', '']

$('#cellZero').click(function () {
  console.log('hi')
})
// choosing a cell pseudo code
// function (id clicked on html) {
//   if (playerOne) {
//     // gets clicked on html
//     element.addClass('x')
//   } else {
//     // gets clicked on html
//     element.addClass('o')
//   }
// }
//
// $('.box').on('click', function () {
//   console.log('Hi')
// })

// Entities:
// Board:
// Cell
//     - untaken
//     - taken by person (X/O)
// Persons
// Status on page
//     - who's turn
//     - if someone has won
//
//
// Interactions:
// Person clicks on Cell
//     - How do we know when a person has clicked on a cell?  what is the JS for this
//     - Cell is empty
//         How do we check if the cell is empty?
//         - Person's marker appears
//         - check for win
//             - if win
//                 do things
//             - if not
//                 - Switch to next person
//     - Cell is taken
//         - nothing happens
// new game

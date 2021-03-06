'use strict'

const store = require('./store')

const newGameSuccess = function (data) {
  store.game = data.game
  console.log('this game is ', data)
  $('.game-container').trigger('reset')
}

const newGameFailure = function () {
  $('').text('Could not create a new game')
  // console.error(error)
}

const updateGameSuccess = function (response) {
  store.user = response.user
  // console.log('signIn success ran. data is :', response)
}

const updateGameFailure = function () {
  $('').text('Game did not update')
  // console.log('signIn failure ran. error is :', error)
}

const allGamesSuccess = function (data) {
  const allGames = data.games.lenght
  $('').text('You have played ' + allGames + ' finished games')
  // console.log('changePassword success ran. and nothing was returned')
}

const allGamesFailure = function () {
  $('').text('Could not get all your games')
  // console.log('changePassword failure ran. error is :', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  allGamesSuccess,
  allGamesFailure
}

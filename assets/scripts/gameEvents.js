'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const gameCrud = require('./gameCrud')
const gameUi = require('./gameUi')

const onNewGame = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  gameCrud.newGame()
    .then(gameUi.newGameSuccess)
    .catch(gameUi.newGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('game has been updated')

  const data = getFormFields(this)
  gameCrud.updateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameFailure)
}

const onAllGames = function (event) {
  event.preventDefault()
  // gameCrud.index()
  console.log('get all games')

  // const data = getFormFields(this)
  // gameCrud.allGames(data)
  //   .then(gameUi.allGamesSuccess)
  //   .catch(gameUi.allGamesFailure)
}

const addHandlers = function () {
  $('#new-game').on('click', onNewGame)
  $('').on('click', onUpdateGame)
  $('#all-games').on('click', onAllGames)
}

module.exports = {
  addHandlers
}

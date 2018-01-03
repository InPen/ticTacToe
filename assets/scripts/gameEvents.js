'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const gameCrud = require('./gameCrud')
const gameUi = require('./gameUi')

const onNewGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameCrud.newGame(data)
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
  console.log('get all games')

  const data = getFormFields(this)
  gameCrud.allGames(data)
    .then(gameUi.allGamesSuccess)
    .catch(gameUi.allGamesFailure)
}

const addHandlers = function () {
  $('#new-game').on('submit', onNewGame)
  $('#sign-in').on('submit', onUpdateGame)
  $('#all-games').on('submit', onAllGames)
}

module.exports = {
  addHandlers
}

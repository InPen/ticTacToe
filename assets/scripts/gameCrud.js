'use strict'
const config = require('./config')
const store = require('./store')

const newGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      auth: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games' + store.game.id,
    method: 'PATCH',
    headers: {
      auth: 'Token token=' + store.user.token
    },
    data
  })
}

const allGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      auth: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  allGames
}

'use strict'
// use require with a reference to bundle the file and use it in this file
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gameEvents.js')

// How to properly require gameLogic???
const gameLogic = require('./gameLogic')

$(() => {
  setAPIOrigin(location, config)
  $('.changepassword').hide()
  $('.signout').hide()
  $('.game-container').hide()
})

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})

module.exports = {
  gameLogic
}

'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('.signup-message').text('')
  $('.signup').hide()
  $('#sign-up').trigger('reset')
  // console.log(data)
}

const signUpFailure = function () {
  $('.signup-message').text('Did not sign up correctly, try again')
  $('#sign-up').trigger('reset')
  // console.error(error)
}

const signInSuccess = function (response) {
  $('.signin-message').text('')
  store.user = response.user
  console.log(store.user.token)
  // console.log('signIn success ran. data is :', response)
  $('#messages').trigger('reset')
  $('.game-container').trigger('reset')
  $('.signin').hide()
  $('.signup').hide()
  $('.changepassword').show()
  $('.signout').show()
  $('#messages').show()
  $('.game-container').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('.signin-message').text('Oopsy daisies, did you forget your pw?')
  $('#sign-in').trigger('reset')
  // console.log('signIn failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('.cp-message').text('You have a new password!')
  $('.changepassword').hide()
  $('#change-password').trigger('reset')
  // console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function () {
  $('.cp-message').text('Looks like your passwords don\'t match')
  $('#change-password').trigger('reset')
  // console.log('changePassword failure ran. error is :', error)
}

const signOutSuccess = function () {
  store.user = null
  $('.signout-message').text('')
  $('.changepassword').hide()
  $('#messages').trigger('reset')
  $('#messages').hide()
  $('.game-container').trigger('reset')
  $('.game-container').hide()
  $('.signout').trigger('reset')
  $('.signout').hide()
  $('.signup').show()
  $('#sign-in').trigger('reset')
  $('.signin').show()
  // console.log('signOut success ran. and nothing was returned')
}

const signOutFailure = function () {
  $('.signout-message').text('Unable to sign out, please try again')
  // console.log('signOut failure ran. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

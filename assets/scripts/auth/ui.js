'use strict'

const store = require('../store')

// how to prevent cp and log out from appearing when page loads
const loadSuccess = function () {
  $('.changepassword').hide()
  $('.signout').hide()
}

const signUpSuccess = function (data) {
  $('.signup-message').text('Welcome! Please sign in')
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
  $('.signin-message').text('Let\'s PLAY!')
  store.user = response.user
  console.log(store.user.token)
  // console.log('signIn success ran. data is :', response)
  $('.signin').hide()
  $('.signup').hide()
  $('.changepassword').show()
  $('.signout').show()
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
  $('.signout-message').text('Bye!')
  $('.changepassword').hide()
  $('.signup').show()
  $('.signin').show()
  $('#sign-in').trigger('reset')
  $('.game-container').hide()
  // console.log('signOut success ran. and nothing was returned')
}

const signOutFailure = function () {
  $('.signout-message').text('Unable to sign out')
  // console.log('signOut failure ran. error is :', error)
}

module.exports = {
  loadSuccess,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

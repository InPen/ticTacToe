'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('.sign-auth-message').text('A huevo! Please sign in >_<')
  $('.signup-instruciones').text('')
  $('.signup').hide()
  $('#sign-up').trigger('reset')
  // console.log(data)
}

const signUpFailure = function () {
  $('.sign-auth-message').text('Did not sign up correctly, try again :p')
  $('#sign-up').trigger('reset')
  // console.error(error)
}

const signInSuccess = function (response) {
  $('.signin-auth-message').text('Let\'s PLAY!')
  $('signin-instruciones').text('Click New Game to begin!')
  store.user = response.user
  // console.log('signIn success ran. data is :', response)
  $('.signin').hide()
  $('.signup').hide()
  $('.changepassword').show()
  $('.signout').show()
  $('.gamebutton').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('.signin-auth-message').text('Oopsy daisies, did you forget your pw, bruh?')
  $('#sign-in').trigger('reset')
  // console.log('signIn failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('.cp-auth-message').text('You have a new password ;)')
  $('.changepassword').hide()
  $('#change-password').trigger('reset')
  // console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function () {
  $('.cp-instruciones').text('Uummm, looks like your words don\'t match carnal')
  $('#change-password').trigger('reset')
  // console.log('changePassword failure ran. error is :', error)
}

const signOutSuccess = function () {
  store.user = null
  $('.signout-auth-message').text('Signed out successfully')
  $('.changepassword').hide()
  $('.signin').show()
  $('#sign-in').trigger('reset')
  $('.signup').show()
  $('.game-container').hide()
  // console.log('signOut success ran. and nothing was returned')
}

const signOutFailure = function () {
  $('.signout-auth-message').text('Unable to sign out :(')
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

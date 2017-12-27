'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('.sign-auth-message').text('A huevo! Please sign in >_<')
  $('.signup-instruciones').text('A huevo! Please sign in >_<')
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
  $('signin-instruciones').text('Let\'s PLAY! Haz Click en "New Game"')
  store.user = response.user
  // console.log('signIn success ran. data is :', response)
  $('.signin').hide()
  $('.signup').hide()
}

const signInFailure = function () {
  $('.signin-auth-message').text('Oopsy daisies, did you forget your pw, bruh?')
  $('#sign-in').trigger('reset')
  // console.log('signIn failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.log('changePassword failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.log('signOut failure ran. error is :', error)
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

'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('.auth-message').text('A huevo! Please sign in now')
  $('.signup').hide()
  $('#sign-up').trigger('reset')
  // console.log(data)
}

const signUpFailure = function () {
  $('.auth-message').text('Did not sign up correctly, try again')
  $('#sign-up').trigger('reset')
  // console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signIn failure ran. error is :', error)
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

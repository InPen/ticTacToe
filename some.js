#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')

// 1.  Check if some of the countries have launched 20 or more rockets
// using a predicate function called isAggressive
const rockets = examples.rockets
// const rockets = [
//     { country: 'Russia', launches: 32 },
//     { country: 'US', launches: 23 },
//     { country: 'China', launches: 16 },
//     { country: 'Europe(ESA)', launches: 7 },
//     { country: 'India', launches: 4 },
//     { country: 'Japan', launches: 3 }
// ]
// CODE ALONG CODE GOES HERE
rockets.some((rocket) => rocket.country === 'China')
const isChina = (rocket) => rocket.country === 'China'
rockets.come(isChina)

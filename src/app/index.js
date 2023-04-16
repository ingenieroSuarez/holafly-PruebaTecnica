const db = require('./db');
const swapiFunctions = require('./swapiFunctions')
const people= require('./People')
const planet=require('./Planet')
const logs= require('./logs')
module.exports = {
    db,
    swapiFunctions,
    people,
    planet,
    logs
}
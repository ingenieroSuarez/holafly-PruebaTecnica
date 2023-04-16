const Planet = require('./model/Planet');
const serviceGetPlanet= require('./service/serviceGetPlanet')
const serviceRandomNumber= require('./service/generateRandomNumber')
const getWeightOnPlanet= require('./service/getWeightOnPlanet')
module.exports = { Planet, serviceGetPlanet, serviceRandomNumber, getWeightOnPlanet }
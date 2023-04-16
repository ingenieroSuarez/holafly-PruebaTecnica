const Planet =require('../model/Planet')
const getPlanetById = async (planetId, app) => {
    let planet;
    const planetDB= await app.db.swPlanet.findAll();
    if(planetDB[0].dataValues.id==planetId){
        const {name, gravity} = planetDB[0].dataValues;
        planet= new Planet(planetId, name, gravity)
    }else{
        const urlStarWarsApiPlanets=`${process.env.URL_API}planets/${planetId}`;
        const planetApiResponse = await app.swapiFunctions.genericRequest( urlStarWarsApiPlanets, 'GET', null, true);
        if (!planetApiResponse.detail) {
            const {name, gravity}= planetApiResponse;
            planet= new Planet(planetId, name, gravity)
        }
    }
    return(planet);
}

module.exports = {
    getPlanetById
}
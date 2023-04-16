const getRandom = async (app) => {
    const personageRandom= await app.planet.serviceRandomNumber.generateRandomNumber(process.env.MIN_PEOPLE, process.env.MAX_PEOPLE);
    const planetRandom= await app.planet.serviceRandomNumber.generateRandomNumber(process.env.MIN_PLANET, process.env.MAX_PLANET);
    const personage= await app.people.serviceGetPersonage.getById(personageRandom, app);
    const planet= await app.planet.serviceGetPlanet.getPlanetById(planetRandom, app);
    try {
        const mass= personage.getMass().split(" ")[0];
        const gravity=planet.getGravity().split(" ")[0];
        if(isNaN(mass) || isNaN(gravity)) {
            return("error to calculate");
        } else {
            const height=mass*gravity
            return (height.toString());
        }
    } catch (error) {
        return("an error has ocurred");
    }
}

module.exports = {
    getRandom
}
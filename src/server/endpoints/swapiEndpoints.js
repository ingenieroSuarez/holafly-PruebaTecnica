const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest(process.env.URL_API, 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        const personageId= req.params.id;
        const prueba= await app.people.GetPersonage.getById(personageId, app);
        console.log("prueba: ");
        console.log(prueba);
        console.log("------------");
        const peopleDB= await app.db.swPeople.findAll();
        if(peopleDB[0].dataValues.id==personageId){
            const {name, mass, height, homeworld} = peopleDB[0].dataValues;
            return res.status(200).send({name, mass, height, homeworld});
        }
        let personageFound=false;
        const urlApiStarWarsPeople=`${process.env.URL_API}people/${personageId}`;
        const personageApiResponse = await app.swapiFunctions.genericRequest( urlApiStarWarsPeople, 'GET', null, true);
        personageFound=!personageFound;
        const {name, mass, height, homeworld} = personageApiResponse;
        res.send({name, mass, height, homeworld});
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const planetId= req.params.id;
        const urlStarWarsApiPlanets=`${process.env.URL_API}planets/${planetId}`;
        const planetApiResponse = await app.swapiFunctions.genericRequest( urlStarWarsApiPlanets, 'GET', null, true);
        let planetFound;
        planetApiResponse.detail? planetFound=false:planetFound=true;
        if(planetFound){
            const {name, gravity}= planetApiResponse;
            return res.status(200).send({name, gravity});
        }else{
            return res.status(204).send("Planet not found")
        }
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.watchDB();
        const planetsDB= await app.db.swPlanet.findAll();
        
        const data3= await app.db.swPeople.findOne()
        console.log(planetsDB[0].dataValues);
        console.log("_____________");

        console.log("_____________");
        console.log(data3.dataValues);
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;
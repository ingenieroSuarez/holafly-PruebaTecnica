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
        const personageData= await app.people.serviceGetPersonage.getById(personageId, app);
        if(personageData===undefined){
            return res.status(204).send("Personage not found")
        }else{
            return res.status(200).send(personageData);
        }
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const planetId= req.params.id;
        const planetData= await app.planet.serviceGetPlanet.getPlanetById(planetId, app);
        if(planetData===undefined){
            return res.status(204).send("Planet not found")
        }else{
            return res.status(200).send(planetData);
        }
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.watchDB();
        
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;
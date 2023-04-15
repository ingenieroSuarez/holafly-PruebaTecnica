//const AbstractPeople = require('./abstractPeople');
//const CommonPeople= require('./commonPeople')
const getById = async (personageId, app) => {
    const peopleDB= await app.db.swPeople.findAll();
    //const personage=new AbstractPeople(1);
    //console.log(personage);
    if(peopleDB[0].dataValues.id==personageId){
        const {name, mass, height, homeworld_name} = peopleDB[0].dataValues;
        return({name, mass, height, homeworld_name})
    }
    const urlApiStarWarsPeople=`${process.env.URL_API}people/${personageId}`;
    const personageApiResponse = await app.swapiFunctions.genericRequest( urlApiStarWarsPeople, 'GET', null, true);
    const {name, mass, height, homeworld} = personageApiResponse;
    return ({name, mass, height, homeworld});
}

module.exports = {
    getById
}
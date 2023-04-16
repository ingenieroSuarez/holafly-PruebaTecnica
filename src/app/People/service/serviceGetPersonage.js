const CommonPeople= require('../model/commonPeople');
const getById = async (personageId, app) => {
    const peopleDB= await app.db.swPeople.findAll();
    let personage;
    if(peopleDB[0].dataValues.id==personageId){
        const {name, mass, height, homeworld_name} = peopleDB[0].dataValues;
        personage= new CommonPeople(personageId,name, mass, height, homeworld_name);
    }else{
        const urlApiStarWarsPeople=`${process.env.URL_API}people/${personageId}`;
        const personageApiResponse = await app.swapiFunctions.genericRequest( urlApiStarWarsPeople, 'GET', null, true);
        if (!personageApiResponse.detail) {
            const {name, mass, height, homeworld} = personageApiResponse;
            personage= new CommonPeople(personageId, name, mass, height, homeworld);
        }
    }
    return(personage);
}

module.exports = {
    getById
}
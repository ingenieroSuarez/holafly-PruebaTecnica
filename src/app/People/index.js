const serviceGetPersonage = require('./service/serviceGetPersonage');
const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./model/commonPeople');

const peopleFactory = async (id, lang) => {
    let people = null;
    if (lang == 'wookiee'){
        people = new WookieePeople(id);
    } else {
        people = new CommonPeople(id);
    }
    await people.init();
    return people;
}
module.exports = { peopleFactory, serviceGetPersonage }

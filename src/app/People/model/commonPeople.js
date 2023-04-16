const AbstractPeople= require('./abstractPeople')
class CommonPeople extends AbstractPeople {
    constructor(id, name, mass, height, homeworldName){
        super(id, name, mass, height, homeworldName);
        this.id= id;
        this.name= name;
        this.mass= mass;
        this.height= height;
        this.homeworldName= homeworldName;
    }
}
module.exports = CommonPeople
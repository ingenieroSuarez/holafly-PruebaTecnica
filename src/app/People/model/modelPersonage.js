class Personage{
    constructor(id, name, mass, height, homeworld_name){
        this.id = id;
        this.name= name;
        this.mass= mass;
        this.height=height;
        this.homeworld= homeworld;
  }
  getId() {
    console.log("enviando id: ");
    return this.id;
    }
}

  
module.exports = Personage;
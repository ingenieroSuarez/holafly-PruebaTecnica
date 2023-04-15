class Personage{
    constructor(id){
        this.id = id;
        console.log("construyendo: ", this.id);
  }
  getId() {
    console.log("enviando id: ");
    return this.id;
    }
}

  
module.exports = Personage;
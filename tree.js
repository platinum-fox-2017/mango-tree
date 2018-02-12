class Fruit {
    constructor() {
      this.quality = this.checkQuality()
    }
    checkQuality(){
      let random = Math.floor(Math.random()*10)
      if(random>3){
        this.quality = 'good'
      }else{
        this.quality = 'bad'
      }
      return this.quality
    }
}

module.exports = Fruit
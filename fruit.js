class Fruit {
  // Produce a mango
  constructor() {
    this._quality = this.quality()
  }

  quality(){
    let random = Math.round(Math.random()*10)
    if(random > 3){
      return 'good'
    }
    else if(random < 4){
      return 'bad'
    }
  }
}

module.exports = Fruit

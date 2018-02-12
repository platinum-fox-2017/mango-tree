const Fruit = require('./fruit');

class Apple extends Fruit {
  // Produce a mango
  constructor() {
    super()
    this._quality = this.quality()
  }

  quality(){
    let random = Math.round(Math.random()*10)
    if(random > 4){
      return 'good'
    }
    else {
      return 'bad'
    }
  }
}

module.exports = Apple

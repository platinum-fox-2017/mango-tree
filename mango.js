const Fruits = require('./fruits.js')

class Mango extends Fruits {
  // Produce a mango
  constructor() {
    super()
  }

  quality_fruits(){
    let random = Math.random()*10
    if(random > 3){
      return 'good'
    }else{
      return 'bad'
    }
  }
}

module.exports = Mango

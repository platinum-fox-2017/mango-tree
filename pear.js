const Fruits = require('./fruits.js')

class Pear extends Fruits {
  constructor() {
    super()

  }

  quality_fruits(){
    let random = Math.random()*20
    if(random > 10){
      return 'good'
    }else{
      return 'bad'
    }
  }
}

module.exports = Pear

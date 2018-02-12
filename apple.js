const Fruits = require('./fruits.js')

class Apple extends Fruits {
  constructor() {
    super()
    
  }

  quality_fruits(){
    let random = Math.random()*10
    if(random > 4){
      return 'good'
    }else{
      return 'bad'
    }
  }
}

module.exports = Apple

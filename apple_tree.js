const Tree = require('./tree');
const Apple = require('./apple');

class AppleTree extends Tree {
  constructor() {
    super()
  }

  grow() {
    this._age++
    if(this._age <= 20){
      this._height += Math.floor(Math.random()*25)
    }
    if(this._age >= 25){
      this._healthyStatus = false
    }
    return this
  }

  produceFruits() {
    if(this._age >= 5){
      this._max_fruits += Math.floor(Math.random()*30)
    }
    for(let i=0; i<this._max_fruits; i++){
      let apple = new Apple
      this._fruits.push(apple)
    }
    return this
  }
}

module.exports = AppleTree

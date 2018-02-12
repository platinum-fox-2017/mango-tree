const Tree = require('./tree');
const Pear = require('./pear');

class PearTree extends Tree {
  constructor() {
    super()
  }

  grow() {
    this._age++
    if(this._age <= 18){
      this._height += Math.floor(Math.random()*25)
    }
    if(this._age >= 20){
      this._healthyStatus = false
    }
    return this
  }

  produceFruits() {
    if(this._age >= 7){
      this._max_fruits += Math.floor(Math.random()*25)
    }
    for(let i=0; i<this._max_fruits; i++){
      let pear = new Pear
      this._fruits.push(pear)
    }
    return this
  }
}

module.exports = PearTree

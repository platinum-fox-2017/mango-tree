"use strict"
const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree{

  constructor() {
    super()
    this._mature = 4
    this._maxAge = 15    
  }

}

module.exports = PearTree
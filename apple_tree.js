"use strict"
const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree{

  constructor() {
    super()
    this._mature = 8
    this._maxAge = 25    
  }

}
module.exports = AppleTree

"use strict"

const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree{
  constructor() {
    super()
    this._mature = 5
    this._maxAge = 20
  }
}

module.exports = MangoTree
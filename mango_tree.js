"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(obj) {
    this._age = obj.age
    this._height = obj.height
    this._fruits = obj.fruits
    this._healthyStatus = obj.healtyStatus
    this._harvested = obj.harvested

  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }

}

class Mango {
  // Produce a mango
  constructor() {
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

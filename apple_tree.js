"use strict"

// release 1

const {FruitTree, Fruit} = require('./fruit_tree.js');

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor() {
      super()
    this._mature_age = Math.floor((Math.random() * 7) + 3);
    this._max_health = Math.floor((Math.random() * 22) + 14);
  }
}

class Apple extends Fruit {
  // Produce an Apple
  constructor() {
      super()
    }
}

// driver code untuk release 0
let appleTree = new AppleTree()
console.log(`The Apple Tree is Alive ! SMILE :D`)
console.log('Maturity age: '+ appleTree._mature_age);
console.log('Maximum age : '+ appleTree._max_health);
  do {
        appleTree.grow();
        appleTree.produceFruit();
        appleTree.harvest();
      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree.harvested}`)
    } while (appleTree._health != false)
console.log(`The Apple Tree has met its end. :C`)
